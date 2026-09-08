-- =============================================================================
-- PERCURSO — Gamificação: Chama de Estudos, XP, Conquistas, Escudos
--
-- Rode no SQL Editor DEPOIS de schema.sql e comunidade.sql. É idempotente.
--
-- A "Chama" é a sequência de dias em que a pessoa fez uma atividade de estudo
-- válida (respondeu questão, corrigiu redação). Dia contado no fuso de
-- São Paulo. XP e chama NUNCA são somados sem uma linha em `xp_eventos` /
-- `chama_dias` — tudo auditável e idempotente. Toda escrita passa por RPC
-- `security definer`: `authenticated` não escreve `xp`, `chama_*`,
-- `avatar_path`, nem em `xp_eventos` / `chama_dias` / `escudos` /
-- `usuario_conquistas` direto.
-- =============================================================================


-- ============================ perfis: colunas ==============================
alter table public.perfis
  add column if not exists bio           text not null default '',
  add column if not exists avatar_path   text,
  add column if not exists xp            int  not null default 0,
  add column if not exists titulo_ativo  text,
  add column if not exists chama_atual   int  not null default 0,
  add column if not exists chama_melhor  int  not null default 0,
  add column if not exists chama_calc_em date;

-- comunidade.sql já restringiu o UPDATE de `perfis` a colunas específicas.
-- Acrescenta `bio` e `titulo_ativo` (editáveis pela pessoa). `xp`, `chama_*` e
-- `avatar_path` continuam de fora — só RPC os escreve.
revoke update on public.perfis from authenticated;
grant update (nome, objetivo, horas_dia, dias_semana, username, username_trocado_em, bio, titulo_ativo)
  on public.perfis to authenticated;


-- ============================== chama_dias ================================
-- Uma linha por dia em que a pessoa estudou. A sequência é derivada daqui.
create table if not exists public.chama_dias (
  usuario_id uuid        not null references public.perfis (id) on delete cascade,
  dia        date        not null,
  atividade  text        not null default '',
  criado_em  timestamptz not null default now(),
  primary key (usuario_id, dia)
);

alter table public.chama_dias enable row level security;

drop policy if exists "chama_dias: le os seus" on public.chama_dias;
create policy "chama_dias: le os seus"
  on public.chama_dias for select
  to authenticated
  using (usuario_id = auth.uid());

grant select on public.chama_dias to authenticated;
grant all    on public.chama_dias to service_role;


-- =============================== escudos =================================
-- Ganho a cada 7 dias de sequência (teto de 2 disponíveis). Emenda um único
-- dia perdido.
create table if not exists public.escudos (
  id         uuid        primary key default gen_random_uuid(),
  usuario_id uuid        not null references public.perfis (id) on delete cascade,
  ganho_em   timestamptz not null default now(),
  usado_em   timestamptz,
  motivo     text        not null default ''
);

create index if not exists escudos_disponiveis_idx
  on public.escudos (usuario_id) where usado_em is null;

alter table public.escudos enable row level security;

drop policy if exists "escudos: le os seus" on public.escudos;
create policy "escudos: le os seus"
  on public.escudos for select
  to authenticated
  using (usuario_id = auth.uid());

grant select on public.escudos to authenticated;
grant all    on public.escudos to service_role;


-- ========================== usuario_conquistas ===========================
-- Públicas: aparecem no perfil. A LISTA das conquistas é código
-- (lib/gamificacao.ts); as regras de concessão são a função
-- `verifica_conquistas` abaixo.
create table if not exists public.usuario_conquistas (
  usuario_id     uuid        not null references public.perfis (id) on delete cascade,
  conquista_slug text        not null,
  ganha_em       timestamptz not null default now(),
  primary key (usuario_id, conquista_slug)
);

alter table public.usuario_conquistas enable row level security;

drop policy if exists "conquistas: leitura publica" on public.usuario_conquistas;
create policy "conquistas: leitura publica"
  on public.usuario_conquistas for select
  to anon, authenticated
  using (true);

grant select on public.usuario_conquistas to anon, authenticated;
grant all    on public.usuario_conquistas to service_role;


-- ============================== xp_eventos ================================
-- Ledger de XP. `perfis.xp` é a soma; nunca muda sem uma linha aqui.
-- `ref` dá idempotência: 'chama:2026-08-28', 'conquista:determinado' etc.
create table if not exists public.xp_eventos (
  id         uuid        primary key default gen_random_uuid(),
  usuario_id uuid        not null references public.perfis (id) on delete cascade,
  tipo       text        not null,
  xp         int         not null,
  ref        text,
  criado_em  timestamptz not null default now()
);

create unique index if not exists xp_eventos_idem
  on public.xp_eventos (usuario_id, tipo, ref) where ref is not null;

alter table public.xp_eventos enable row level security;

drop policy if exists "xp_eventos: le os seus" on public.xp_eventos;
create policy "xp_eventos: le os seus"
  on public.xp_eventos for select
  to authenticated
  using (usuario_id = auth.uid());

grant select on public.xp_eventos to authenticated;
grant all    on public.xp_eventos to service_role;


-- ============================= notificacoes ==============================
create table if not exists public.notificacoes (
  id         uuid        primary key default gen_random_uuid(),
  usuario_id uuid        not null references public.perfis (id) on delete cascade,
  tipo       text        not null,
  titulo     text        not null,
  corpo      text        not null default '',
  link       text,
  lida       boolean     not null default false,
  criado_em  timestamptz not null default now()
);

create index if not exists notificacoes_pendentes_idx
  on public.notificacoes (usuario_id, criado_em desc) where not lida;

alter table public.notificacoes enable row level security;

drop policy if exists "notificacoes: le as suas"    on public.notificacoes;
drop policy if exists "notificacoes: cria as suas"  on public.notificacoes;
drop policy if exists "notificacoes: marca as suas" on public.notificacoes;

create policy "notificacoes: le as suas"
  on public.notificacoes for select
  to authenticated using (usuario_id = auth.uid());

-- A pessoa só cria notificação PARA SI (o lembrete da própria chama). Mandar
-- notificação para outra pessoa (Fase B: lembrete de amigo) vai por RPC.
create policy "notificacoes: cria as suas"
  on public.notificacoes for insert
  to authenticated with check (usuario_id = auth.uid());

create policy "notificacoes: marca as suas"
  on public.notificacoes for update
  to authenticated
  using (usuario_id = auth.uid())
  with check (usuario_id = auth.uid());

grant select, insert on public.notificacoes to authenticated;
grant update (lida)  on public.notificacoes to authenticated;
grant all            on public.notificacoes to service_role;

create table if not exists public.notificacao_prefs (
  usuario_id   uuid    primary key references public.perfis (id) on delete cascade,
  chama        boolean not null default true,
  amigos       boolean not null default true,
  salas        boolean not null default true,
  hora_lembrete time
);

alter table public.notificacao_prefs enable row level security;

drop policy if exists "prefs: as suas" on public.notificacao_prefs;
create policy "prefs: as suas"
  on public.notificacao_prefs for all
  to authenticated
  using (usuario_id = auth.uid())
  with check (usuario_id = auth.uid());

grant select, insert, update on public.notificacao_prefs to authenticated;
grant all                    on public.notificacao_prefs to service_role;


-- ================================ VIEWS =================================
-- Vêm antes das funções: `verifica_conquistas` lê `vw_estat_usuario`, e o
-- Postgres valida o corpo da função na criação (check_function_bodies).
--
-- Substitui vw_perfis_publicos: os mesmos campos + os públicos de gamificação.
-- Sem objetivo, horas, e-mail — nada privado.
drop view if exists public.vw_perfis_publicos;
create or replace view public.vw_perfil_publico as
  select
    id, nome, username, verificado, avatar_path,
    xp, titulo_ativo, chama_atual, chama_melhor,
    coalesce(bio, '') as bio
  from public.perfis;

grant select on public.vw_perfil_publico to anon, authenticated, service_role;

-- Contagens agregadas de questões por usuário, para o perfil público. Roda
-- como dona (sem security_invoker) — devolve só números, nenhuma linha de
-- resposta.
create or replace view public.vw_estat_usuario as
  select
    s.usuario_id,
    count(r.*)::int                              as questoes_respondidas,
    count(*) filter (where r.acertou)::int       as acertos
  from public.simulados s
  join public.respostas r on r.simulado_id = s.id
  group by s.usuario_id;

grant select on public.vw_estat_usuario to anon, authenticated, service_role;


-- ================================ RPCs ==================================

-- Concede XP de forma idempotente (via índice único parcial em xp_eventos).
-- Interna: só a service role e as outras funções chamam.
create or replace function public.conceder_xp(p_uid uuid, p_tipo text, p_xp int, p_ref text default null)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.xp_eventos (usuario_id, tipo, xp, ref)
    values (p_uid, p_tipo, p_xp, p_ref)
  on conflict do nothing;
  if found then
    update public.perfis set xp = xp + p_xp where id = p_uid;
  end if;
end $$;

-- Marca que a pessoa estudou hoje. Chamada pelas rotas de estudo. Se for a
-- primeira do dia: emenda um dia perdido com escudo, recalcula a sequência,
-- concede escudo a cada 7 e concede XP.
create or replace function public.registrar_atividade(p_tipo text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid     uuid    := auth.uid();
  v_hoje    date    := (now() at time zone 'America/Sao_Paulo')::date;
  v_primeira boolean;
  v_seq     int;
  v_melhor  int;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false);
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

    -- Sequência atual: dias consecutivos terminando hoje (gaps-and-islands).
    with dias as (
      select dia from public.chama_dias where usuario_id = v_uid
    ),
    ilhas as (
      select dia, dia - (row_number() over (order by dia))::int as grupo from dias
    )
    select count(*) into v_seq
    from ilhas
    where grupo = (select grupo from ilhas where dia = v_hoje);

    select coalesce(chama_melhor, 0) into v_melhor from public.perfis where id = v_uid;
    v_melhor := greatest(v_melhor, v_seq);

    update public.perfis
      set chama_atual = v_seq, chama_melhor = v_melhor, chama_calc_em = v_hoje
      where id = v_uid;

    -- Escudo a cada 7 dias, teto de 2 disponíveis.
    if v_seq > 0 and v_seq % 7 = 0
       and (select count(*) from public.escudos where usuario_id = v_uid and usado_em is null) < 2
    then
      insert into public.escudos (usuario_id, motivo)
        values (v_uid, v_seq || ' dias de sequência');
    end if;

    -- XP.
    perform public.conceder_xp(v_uid, 'chama_dia', 20, 'chama:' || v_hoje::text);
    if v_seq in (7, 30, 100, 365) then
      perform public.conceder_xp(v_uid, 'chama_marco', v_seq, 'chama_marco:' || v_seq::text);
    end if;
  end if;

  return jsonb_build_object('ok', true, 'primeira_do_dia', v_primeira);
end $$;

-- Estado da chama para exibir. Reconcilia a sequência quando não estudou hoje:
-- se ontem faltou e nenhum escudo cobre, a sequência já acabou.
create or replace function public.estado_chama(p_uid uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_hoje    date := (now() at time zone 'America/Sao_Paulo')::date;
  v_hora    int  := extract(hour from (now() at time zone 'America/Sao_Paulo'))::int;
  v_hoje_ok boolean;
  v_ontem_ok boolean;
  v_anteontem_ok boolean;
  v_atual   int;
  v_melhor  int;
  v_escudos int;
begin
  select exists (select 1 from public.chama_dias where usuario_id = p_uid and dia = v_hoje)
    into v_hoje_ok;
  select coalesce(chama_atual, 0), coalesce(chama_melhor, 0)
    into v_atual, v_melhor from public.perfis where id = p_uid;
  select count(*) into v_escudos
    from public.escudos where usuario_id = p_uid and usado_em is null;

  if not v_hoje_ok then
    select exists (select 1 from public.chama_dias where usuario_id = p_uid and dia = v_hoje - 1)
      into v_ontem_ok;
    if not v_ontem_ok then
      select exists (select 1 from public.chama_dias where usuario_id = p_uid and dia = v_hoje - 2)
        into v_anteontem_ok;
      if not (v_anteontem_ok and v_escudos > 0) then
        return jsonb_build_object(
          'atual', 0, 'perdida', v_atual, 'melhor', v_melhor,
          'estudou_hoje', false, 'escudos', v_escudos,
          'estado', 'apagada', 'hora_sp', v_hora
        );
      end if;
    end if;
  end if;

  return jsonb_build_object(
    'atual', v_atual, 'perdida', 0, 'melhor', v_melhor,
    'estudou_hoje', v_hoje_ok, 'escudos', v_escudos,
    'estado', case
      when v_hoje_ok then 'ativa'
      when v_hora >= 20 then 'quase_apagando'
      else 'em_risco'
    end,
    'hora_sp', v_hora
  );
end $$;

-- Concede as conquistas cujas regras a pessoa já cumpre. Idempotente.
create or replace function public.verifica_conquistas()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_q   int;
  v_seq int;
begin
  if v_uid is null then return; end if;

  select coalesce(chama_atual, 0) into v_seq from public.perfis where id = v_uid;
  select coalesce(questoes_respondidas, 0) into v_q
    from public.vw_estat_usuario where usuario_id = v_uid;

  -- (slug, condição, xp)
  if v_q >= 1 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'iniciante') on conflict do nothing;
    if found then perform public.conceder_xp(v_uid, 'conquista', 30, 'conquista:iniciante'); end if;
  end if;
  if v_q >= 100 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'cem_questoes') on conflict do nothing;
    if found then perform public.conceder_xp(v_uid, 'conquista', 120, 'conquista:cem_questoes'); end if;
  end if;
  if v_q >= 1000 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'mestre_questoes') on conflict do nothing;
    if found then perform public.conceder_xp(v_uid, 'conquista', 400, 'conquista:mestre_questoes'); end if;
  end if;
  if v_seq >= 7 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'determinado') on conflict do nothing;
    if found then perform public.conceder_xp(v_uid, 'conquista', 70, 'conquista:determinado'); end if;
  end if;
  if v_seq >= 30 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'imparavel') on conflict do nothing;
    if found then perform public.conceder_xp(v_uid, 'conquista', 150, 'conquista:imparavel'); end if;
  end if;
  if v_seq >= 100 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'centenario') on conflict do nothing;
    if found then perform public.conceder_xp(v_uid, 'conquista', 400, 'conquista:centenario'); end if;
  end if;
  if v_seq >= 365 then
    insert into public.usuario_conquistas (usuario_id, conquista_slug)
      values (v_uid, 'lenda') on conflict do nothing;
    if found then perform public.conceder_xp(v_uid, 'conquista', 1000, 'conquista:lenda'); end if;
  end if;
end $$;

-- Grava o caminho da foto no perfil (a coluna não tem grant para authenticated).
create or replace function public.definir_avatar(p_path text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_path is not null and p_path not like (auth.uid()::text || '/%') then
    raise exception 'caminho de avatar invalido';
  end if;
  update public.perfis set avatar_path = p_path where id = auth.uid();
end $$;


-- ============================ bucket: avatares ===========================
insert into storage.buckets (id, name, public)
values ('avatares', 'avatares', true)
on conflict (id) do nothing;

drop policy if exists "avatar: envia o proprio" on storage.objects;
drop policy if exists "avatar: apaga o proprio" on storage.objects;

create policy "avatar: envia o proprio"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'avatares'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "avatar: apaga o proprio"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'avatares'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
-- Leitura é pública (bucket public): não precisa policy de select.


-- ================================ GRANTS ================================
grant execute on function public.registrar_atividade(text)             to authenticated;
grant execute on function public.estado_chama(uuid)                    to authenticated, anon;
grant execute on function public.verifica_conquistas()                 to authenticated;
grant execute on function public.definir_avatar(text)                  to authenticated;
grant execute on function public.conceder_xp(uuid, text, int, text)    to service_role;

notify pgrst, 'reload schema';
