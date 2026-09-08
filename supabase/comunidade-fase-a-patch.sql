-- =============================================================================
-- PERCURSO — Patch de segurança/consistência da Comunidade + Fase A
--
-- Rode no SQL Editor DEPOIS de schema.sql, comunidade.sql e gamificacao.sql.
-- É idempotente: pode rodar de novo sem quebrar nada.
--
-- Fecha o que a revisão apontou:
--   1. registrar_atividade / verifica_conquistas só contam com estudo provado.
--   2. com_reacoes / com_salvos ganham pode_publicar() + teto no banco;
--      insert de com_posts vira grant por coluna.
--   3. o nome público do perfil deixa de cair no local-part do e-mail.
--   4. a sequência da chama é derivada de chama_dias, não do cache defasado.
--   5. notificacoes ganha dedupe por dia (índice único).
-- =============================================================================


-- ========================================================================
-- 3. perfis.nome: nunca o e-mail
-- O login OAuth (Google) manda `name`/`full_name`, nunca `nome`. Sem isso o
-- trigger caía no split_part(email,'@',1) e "joao.silva" virava nome público.
-- ========================================================================
create or replace function public.handle_novo_usuario()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.perfis (id, nome)
  values (
    new.id,
    coalesce(
      nullif(new.raw_user_meta_data ->> 'nome', ''),
      nullif(new.raw_user_meta_data ->> 'full_name', ''),
      nullif(new.raw_user_meta_data ->> 'name', ''),
      'Estudante'
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Conserta quem já entrou e ainda não personalizou a identidade (sem username,
-- e o nome é exatamente o local-part do e-mail).
update public.perfis p
   set nome = 'Estudante'
  from auth.users u
 where u.id = p.id
   and p.username is null
   and p.nome = split_part(coalesce(u.email, ''), '@', 1)
   and p.nome <> '';


-- ========================================================================
-- 2. com_reacoes / com_salvos: pode_publicar() + teto no banco
-- ========================================================================

-- --- com_reacoes ---
drop policy if exists "com_reacoes: as proprias"     on public.com_reacoes;
drop policy if exists "com_reacoes: le as proprias"  on public.com_reacoes;
drop policy if exists "com_reacoes: cria as proprias" on public.com_reacoes;
drop policy if exists "com_reacoes: apaga as proprias" on public.com_reacoes;

create policy "com_reacoes: le as proprias"
  on public.com_reacoes for select
  to authenticated
  using (usuario_id = auth.uid());

create policy "com_reacoes: cria as proprias"
  on public.com_reacoes for insert
  to authenticated
  with check (usuario_id = auth.uid() and public.pode_publicar());

create policy "com_reacoes: apaga as proprias"
  on public.com_reacoes for delete
  to authenticated
  using (usuario_id = auth.uid());

create or replace function public.com_limite_reacoes()
returns trigger language plpgsql as $$
declare n int;
begin
  select count(*) into n from public.com_reacoes
    where usuario_id = new.usuario_id and criado_em > now() - interval '1 day';
  if n >= 500 then
    raise exception 'limite diario de reacoes atingido';
  end if;
  return new;
end;
$$;
drop trigger if exists com_reacoes_limite on public.com_reacoes;
create trigger com_reacoes_limite
  before insert on public.com_reacoes
  for each row execute function public.com_limite_reacoes();

-- --- com_salvos ---
drop policy if exists "com_salvos: os proprios"     on public.com_salvos;
drop policy if exists "com_salvos: le os proprios"  on public.com_salvos;
drop policy if exists "com_salvos: cria os proprios" on public.com_salvos;
drop policy if exists "com_salvos: apaga os proprios" on public.com_salvos;

create policy "com_salvos: le os proprios"
  on public.com_salvos for select
  to authenticated
  using (usuario_id = auth.uid());

create policy "com_salvos: cria os proprios"
  on public.com_salvos for insert
  to authenticated
  with check (usuario_id = auth.uid() and public.pode_publicar());

create policy "com_salvos: apaga os proprios"
  on public.com_salvos for delete
  to authenticated
  using (usuario_id = auth.uid());

create or replace function public.com_limite_salvos()
returns trigger language plpgsql as $$
declare n int;
begin
  select count(*) into n from public.com_salvos
    where usuario_id = new.usuario_id and criado_em > now() - interval '1 day';
  if n >= 500 then
    raise exception 'limite diario de salvos atingido';
  end if;
  return new;
end;
$$;
drop trigger if exists com_salvos_limite on public.com_salvos;
create trigger com_salvos_limite
  before insert on public.com_salvos
  for each row execute function public.com_limite_salvos();

-- --- com_posts: insert por coluna ---
-- Sem isso, uma chamada direta à API do Supabase podia setar `oculto` ou
-- `seed_key` no insert (o update já era por coluna; o insert não).
revoke insert on public.com_posts from authenticated;
grant insert (autor_id, tipo, titulo, texto, tags, codigo, link, questao_id)
  on public.com_posts to authenticated;


-- ========================================================================
-- 4. Sequência da chama derivada de chama_dias (não do cache defasado)
-- ========================================================================
create or replace function public.seq_chama(p_uid uuid)
returns int
language sql
stable
security definer
set search_path = public
as $$
  with dias as (
    select dia from public.chama_dias where usuario_id = p_uid
  ),
  ilhas as (
    select dia, dia - (row_number() over (order by dia))::int as grupo from dias
  ),
  hoje as (
    select (now() at time zone 'America/Sao_Paulo')::date as d
  )
  select coalesce((
    select count(*)::int from ilhas
    where grupo = (
      -- a ilha que termina hoje, ou (se hoje ainda não teve) a que terminou ontem
      select grupo from ilhas, hoje
      where ilhas.dia in (hoje.d, hoje.d - 1)
      order by ilhas.dia desc
      limit 1
    )
  ), 0);
$$;

grant execute on function public.seq_chama(uuid) to authenticated;

-- registrar_atividade: agora exige atividade real do dia e usa seq_chama.
create or replace function public.registrar_atividade(p_tipo text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid      uuid := auth.uid();
  v_hoje     date := (now() at time zone 'America/Sao_Paulo')::date;
  v_primeira boolean;
  v_seq      int;
  v_melhor   int;
  v_tem_prova boolean;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false);
  end if;

  -- Prova de estudo hoje (fuso SP): respondeu questão OU teve redação avaliada.
  select
    exists (
      select 1 from public.respostas r
      join public.simulados s on s.id = r.simulado_id
      where s.usuario_id = v_uid
        and (r.respondido_em at time zone 'America/Sao_Paulo')::date = v_hoje
    )
    or exists (
      select 1 from public.redacoes rd
      where rd.usuario_id = v_uid
        and rd.status = 'avaliada'
        and coalesce(rd.avaliado_em, rd.criado_em) at time zone 'America/Sao_Paulo' >= v_hoje
    )
  into v_tem_prova;

  if not v_tem_prova then
    return jsonb_build_object('ok', false, 'sem_atividade', true);
  end if;

  insert into public.chama_dias (usuario_id, dia, atividade)
    values (v_uid, v_hoje, coalesce(p_tipo, ''))
  on conflict (usuario_id, dia) do nothing;
  v_primeira := found;

  if v_primeira then
    -- Ponte de escudo: ontem faltou, anteontem teve, e há escudo → emenda.
    if not exists (select 1 from public.chama_dias where usuario_id = v_uid and dia = v_hoje - 1)
       and exists (select 1 from public.chama_dias where usuario_id = v_uid and dia = v_hoje - 2)
       and exists (select 1 from public.escudos where usuario_id = v_uid and usado_em is null)
    then
      update public.escudos set usado_em = now(), motivo = motivo || ' (usado)'
        where id = (
          select id from public.escudos
          where usuario_id = v_uid and usado_em is null
          order by ganho_em limit 1
        );
      insert into public.chama_dias (usuario_id, dia, atividade)
        values (v_uid, v_hoje - 1, 'escudo')
      on conflict do nothing;
    end if;

    v_seq := public.seq_chama(v_uid);

    select coalesce(chama_melhor, 0) into v_melhor from public.perfis where id = v_uid;
    v_melhor := greatest(v_melhor, v_seq);

    update public.perfis
      set chama_atual = v_seq, chama_melhor = v_melhor, chama_calc_em = v_hoje
      where id = v_uid;

    if v_seq > 0 and v_seq % 7 = 0
       and (select count(*) from public.escudos where usuario_id = v_uid and usado_em is null) < 2
    then
      insert into public.escudos (usuario_id, motivo)
        values (v_uid, v_seq || ' dias de sequência');
    end if;

    perform public.conceder_xp(v_uid, 'chama_dia', 20, 'chama:' || v_hoje::text);
    if v_seq in (7, 30, 100, 365) then
      perform public.conceder_xp(v_uid, 'chama_marco', v_seq, 'chama_marco:' || v_seq::text);
    end if;
  end if;

  return jsonb_build_object(
    'ok', true,
    'primeira_do_dia', v_primeira,
    'atual', coalesce(
      v_seq,
      (select chama_atual from public.perfis where id = v_uid),
      0
    )
  );
end $$;

-- verifica_conquistas: streak vem de seq_chama (só cresce com estudo provado).
-- Devolve os slugs concedidos AGORA (para o aviso de recompensa no instante).
-- Mudou o tipo de retorno (void → text[]): CREATE OR REPLACE não faz isso,
-- precisa dropar antes. O grant é refeito logo abaixo.
drop function if exists public.verifica_conquistas();
create function public.verifica_conquistas()
returns text[]
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid   uuid := auth.uid();
  v_q     int;
  v_seq   int;
  v_novas text[] := '{}';
begin
  if v_uid is null then return v_novas; end if;

  v_seq := public.seq_chama(v_uid);
  select coalesce(questoes_respondidas, 0) into v_q
    from public.vw_estat_usuario where usuario_id = v_uid;

  if v_q >= 1 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'iniciante') on conflict do nothing;
    if found then
      perform public.conceder_xp(v_uid, 'conquista', 30, 'conquista:iniciante');
      v_novas := array_append(v_novas, 'iniciante');
    end if;
  end if;
  if v_q >= 100 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'cem_questoes') on conflict do nothing;
    if found then
      perform public.conceder_xp(v_uid, 'conquista', 120, 'conquista:cem_questoes');
      v_novas := array_append(v_novas, 'cem_questoes');
    end if;
  end if;
  if v_q >= 1000 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'mestre_questoes') on conflict do nothing;
    if found then
      perform public.conceder_xp(v_uid, 'conquista', 400, 'conquista:mestre_questoes');
      v_novas := array_append(v_novas, 'mestre_questoes');
    end if;
  end if;
  if v_seq >= 7 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'determinado') on conflict do nothing;
    if found then
      perform public.conceder_xp(v_uid, 'conquista', 70, 'conquista:determinado');
      v_novas := array_append(v_novas, 'determinado');
    end if;
  end if;
  if v_seq >= 30 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'imparavel') on conflict do nothing;
    if found then
      perform public.conceder_xp(v_uid, 'conquista', 150, 'conquista:imparavel');
      v_novas := array_append(v_novas, 'imparavel');
    end if;
  end if;
  if v_seq >= 100 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'centenario') on conflict do nothing;
    if found then
      perform public.conceder_xp(v_uid, 'conquista', 400, 'conquista:centenario');
      v_novas := array_append(v_novas, 'centenario');
    end if;
  end if;
  if v_seq >= 365 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'lenda') on conflict do nothing;
    if found then
      perform public.conceder_xp(v_uid, 'conquista', 1000, 'conquista:lenda');
      v_novas := array_append(v_novas, 'lenda');
    end if;
  end if;

  return v_novas;
end $$;

grant execute on function public.verifica_conquistas() to authenticated;

-- vw_perfil_publico sem chama_atual (valor stale para anon). chama_melhor é
-- monotônico e continua exposto.
drop view if exists public.vw_perfil_publico;
create view public.vw_perfil_publico as
  select
    id, nome, username, verificado, avatar_path,
    xp, titulo_ativo, chama_melhor,
    coalesce(bio, '') as bio
  from public.perfis;

grant select on public.vw_perfil_publico to anon, authenticated, service_role;


-- ========================================================================
-- 5. notificacoes: dedupe por dia (índice único no lugar do check-then-act)
-- ========================================================================
alter table public.notificacoes add column if not exists dia_ref date;

create unique index if not exists notificacoes_dedupe
  on public.notificacoes (usuario_id, tipo, dia_ref) where dia_ref is not null;


notify pgrst, 'reload schema';
