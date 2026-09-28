-- =============================================================================
-- Cronograma salvo na conta
--
-- Cria public.cronogramas: um cronograma por conta, ligado a auth.uid().
-- Nada deste arquivo foi executado. Rode só depois de autorizar, no SQL Editor
-- do Supabase.
--
-- COMO RODAR
--
-- Seção 1 é a migração inteira, numa transação só. Cole e rode. É idempotente:
-- rodar de novo não duplica nada.
-- Seção 2 é a verificação, só SELECT. Rode uma consulta de cada vez (o editor
-- mostra só o resultado da última).
-- Seção 3 é um teste das regras de acesso com duas contas simuladas. Ele roda
-- entre BEGIN e ROLLBACK, então não deixa nada gravado.
-- Seção 4 é o rollback, comentado.
--
-- O banco é o mesmo da produção. A tabela é nova e nenhuma tabela existente é
-- alterada, então o site publicado não percebe a mudança: só o código da
-- branch claude/cronograma-salvo lê e grava aqui.
--
-- CADA REGRA E ONDE ELA É GARANTIDA
--
--   dono = auth.uid()            default da coluna. INSERT e UPDATE não
--                                concedem usuario_id, então nem o servidor
--                                nem o navegador escolhem o dono
--   criar só para si             política de INSERT:
--                                with check (usuario_id = auth.uid())
--   ver só o próprio             política de SELECT
--   editar e excluir só o seu    políticas de UPDATE e DELETE
--   dono imutável                sem UPDATE na coluna, mais o gatilho
--   sem duplicado                unique (usuario_id). O app grava com upsert,
--                                que atualiza a linha que já existe
--   sem login                    nenhuma permissão para anon
-- =============================================================================


-- =============================================================================
-- 1. MIGRAÇÃO
-- =============================================================================

begin;

create table if not exists public.cronogramas (
  id            uuid        primary key default gen_random_uuid(),
  usuario_id    uuid        not null default auth.uid()
                            references public.perfis (id) on delete cascade,
  horas_dia     smallint    not null check (horas_dia between 1 and 10),
  dias_semana   smallint    not null check (dias_semana between 3 and 7),
  selecao       jsonb       not null default '{}'::jsonb,
  plano         jsonb       not null,
  criado_em     timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),

  -- Um cronograma por conta. É o que transforma "salvar de novo" em
  -- atualização, e não numa segunda linha.
  constraint cronogramas_um_por_usuario unique (usuario_id),

  -- Quem grava direto pela API, sem passar pelo site, ainda esbarra aqui:
  -- formato de objeto e um teto de tamanho. O conteúdo é validado de novo
  -- pelo app ao ler.
  constraint cronogramas_selecao_valida
    check (jsonb_typeof(selecao) = 'object' and octet_length(selecao::text) <= 16384),
  constraint cronogramas_plano_valido
    check (jsonb_typeof(plano) = 'object' and octet_length(plano::text) <= 65536)
);

comment on table public.cronogramas is
  'Cronograma semanal salvo na conta. Um por pessoa (unique usuario_id).';
comment on column public.cronogramas.usuario_id is
  'Dono. Vem de auth.uid() pelo default; a coluna não é concedida em INSERT nem em UPDATE.';
comment on column public.cronogramas.selecao is
  'Matéria → assuntos escolhidos. Objeto vazio = as matérias padrão do ENEM.';
comment on column public.cronogramas.plano is
  'A semana gerada pelo servidor a partir de horas_dia, dias_semana e selecao.';

-- O gatilho mantém as datas honestas e recusa troca de dono. A troca já é
-- barrada pela falta de permissão na coluna; o gatilho é a segunda trava, para
-- o caso de alguém conceder UPDATE na tabela inteira no futuro.
create or replace function public.cronogramas_antes_de_atualizar()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.usuario_id is distinct from old.usuario_id then
    raise exception 'O dono do cronograma não pode ser trocado.'
      using errcode = '42501';
  end if;
  new.id            := old.id;
  new.criado_em     := old.criado_em;
  new.atualizado_em := now();
  return new;
end;
$$;

drop trigger if exists cronogramas_antes_de_atualizar on public.cronogramas;
create trigger cronogramas_antes_de_atualizar
  before update on public.cronogramas
  for each row execute function public.cronogramas_antes_de_atualizar();

-- RLS: sem política, ninguém vê nada. Cada política só libera a linha cujo
-- dono é quem está logado. `(select auth.uid())` é a forma recomendada pelo
-- Supabase: o valor é calculado uma vez por consulta, não uma vez por linha.
alter table public.cronogramas enable row level security;

drop policy if exists "cronograma: ler o proprio"       on public.cronogramas;
drop policy if exists "cronograma: criar o proprio"     on public.cronogramas;
drop policy if exists "cronograma: atualizar o proprio" on public.cronogramas;
drop policy if exists "cronograma: excluir o proprio"   on public.cronogramas;

create policy "cronograma: ler o proprio"
  on public.cronogramas for select
  to authenticated
  using ((select auth.uid()) = usuario_id);

create policy "cronograma: criar o proprio"
  on public.cronogramas for insert
  to authenticated
  with check ((select auth.uid()) = usuario_id);

create policy "cronograma: atualizar o proprio"
  on public.cronogramas for update
  to authenticated
  using ((select auth.uid()) = usuario_id)
  with check ((select auth.uid()) = usuario_id);

create policy "cronograma: excluir o proprio"
  on public.cronogramas for delete
  to authenticated
  using ((select auth.uid()) = usuario_id);

-- Permissões. O Supabase dá ALL em toda tabela nova para anon e authenticated
-- (default privileges). O revoke tira tudo, inclusive TRUNCATE, TRIGGER e
-- REFERENCES, e o grant devolve só o necessário. INSERT e UPDATE são por
-- coluna e deixam usuario_id, id e as datas de fora.
revoke all on public.cronogramas from public, anon, authenticated;

grant select, delete on public.cronogramas to authenticated;
grant insert (horas_dia, dias_semana, selecao, plano) on public.cronogramas to authenticated;
grant update (horas_dia, dias_semana, selecao, plano) on public.cronogramas to authenticated;

grant all on public.cronogramas to service_role;

commit;


-- =============================================================================
-- 2. VERIFICAÇÃO — só SELECT, nada altera estado
-- =============================================================================

-- 2a. Esperado: rls_ligado t e politicas 4.
select
  c.relrowsecurity as rls_ligado,
  (select count(*) from pg_policies p
    where p.schemaname = 'public' and p.tablename = 'cronogramas') as politicas
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname = 'cronogramas';

-- 2b. Esperado: uma linha por comando (SELECT, INSERT, UPDATE, DELETE), todas
-- para {authenticated} e todas comparando auth.uid() com usuario_id.
select policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public' and tablename = 'cronogramas'
order by cmd;

-- 2c. Esperado, na ordem: f f t t t t f f f.
select
  has_table_privilege('anon', 'public.cronogramas', 'SELECT')                   as anon_le,
  has_any_column_privilege('anon', 'public.cronogramas', 'INSERT')              as anon_cria,
  has_table_privilege('authenticated', 'public.cronogramas', 'SELECT')          as logado_le,
  has_table_privilege('authenticated', 'public.cronogramas', 'DELETE')          as logado_exclui,
  has_column_privilege('authenticated', 'public.cronogramas', 'plano', 'INSERT') as logado_cria_plano,
  has_column_privilege('authenticated', 'public.cronogramas', 'plano', 'UPDATE') as logado_edita_plano,
  has_column_privilege('authenticated', 'public.cronogramas', 'usuario_id', 'INSERT') as logado_escolhe_dono,
  has_column_privilege('authenticated', 'public.cronogramas', 'usuario_id', 'UPDATE') as logado_troca_dono,
  has_table_privilege('authenticated', 'public.cronogramas', 'TRUNCATE')        as logado_trunca;


-- =============================================================================
-- 3. TESTE DAS REGRAS — dentro de uma transação desfeita no fim
--
-- Simula duas contas (A e B) usando dois perfis que já existem e confere cada
-- regra do jeito que a API faria: role authenticated e o id da pessoa no JWT.
-- Tudo acontece entre BEGIN e ROLLBACK, então nenhuma linha fica gravada.
-- Se uma regra falhar, o bloco para com "falhou: ..." dizendo qual.
-- Se tudo passar, aparece a mensagem "Todas as regras passaram".
-- =============================================================================

begin;

do $$
declare
  a uuid;
  b uuid;
  n int;
  h int;
begin
  select id into a from public.perfis order by id limit 1;
  select id into b from public.perfis where id <> a order by id limit 1;
  if a is null or b is null then
    raise exception 'O teste precisa de dois perfis existentes.';
  end if;

  -- 0. A coluna do dono não pode estar liberada para escrita. As políticas
  --    também barram dono forjado; esta checagem garante a primeira trava.
  if has_column_privilege('authenticated', 'public.cronogramas', 'usuario_id', 'INSERT')
     or has_column_privilege('authenticated', 'public.cronogramas', 'usuario_id', 'UPDATE') then
    raise exception 'falhou: a coluna usuario_id está liberada para escrita';
  end if;

  -- Começa limpo para A e B. O ROLLBACK do fim devolve o que havia.
  delete from public.cronogramas where usuario_id in (a, b);

  -- ---------------------------------------------------------------- conta A
  perform set_config('request.jwt.claims',
    json_build_object('sub', a, 'role', 'authenticated')::text, true);
  set local role authenticated;

  -- 1. A cria o próprio sem dizer quem é o dono: o default põe auth.uid().
  insert into public.cronogramas (horas_dia, dias_semana, selecao, plano)
  values (4, 6, '{}', '{"dias": []}');
  select count(*) into n from public.cronogramas where usuario_id = a;
  if n <> 1 then
    raise exception 'falhou: A deveria ter 1 cronograma e tem %', n;
  end if;

  -- 2. A tenta criar em nome de B: recusado, a coluna do dono não é concedida.
  begin
    insert into public.cronogramas (usuario_id, horas_dia, dias_semana, selecao, plano)
    values (b, 4, 6, '{}', '{}');
    raise exception 'falhou: A criou um cronograma em nome de B';
  exception when insufficient_privilege then
    null;
  end;

  -- 3. Um segundo cronograma de A é recusado pelo unique...
  begin
    insert into public.cronogramas (horas_dia, dias_semana, selecao, plano)
    values (5, 5, '{}', '{}');
    raise exception 'falhou: A criou um segundo cronograma';
  exception when unique_violation then
    null;
  end;

  -- ...e o upsert, que é o que o site usa, atualiza a mesma linha.
  insert into public.cronogramas (horas_dia, dias_semana, selecao, plano)
  values (2, 3, '{}', '{"dias": []}')
  on conflict (usuario_id) do update
    set horas_dia   = excluded.horas_dia,
        dias_semana = excluded.dias_semana,
        selecao     = excluded.selecao,
        plano       = excluded.plano;
  select count(*), max(horas_dia) into n, h from public.cronogramas where usuario_id = a;
  if n <> 1 or h <> 2 then
    raise exception 'falhou: o upsert deveria atualizar a linha de A (linhas %, horas %)', n, h;
  end if;

  -- 4. A tenta trocar o dono: recusado.
  begin
    update public.cronogramas set usuario_id = b where usuario_id = a;
    raise exception 'falhou: A trocou o dono do cronograma';
  exception when insufficient_privilege then
    null;
  end;

  -- ---------------------------------------------------------------- conta B
  reset role;
  perform set_config('request.jwt.claims',
    json_build_object('sub', b, 'role', 'authenticated')::text, true);
  set local role authenticated;

  -- 5. B não vê, não altera e não exclui o cronograma de A: nem mirando nele,
  --    nem mandando UPDATE e DELETE sem filtro na tabela inteira, que é o
  --    que uma política frouxa deixaria passar. A conferência é no passo 8.
  select count(*) into n from public.cronogramas where usuario_id = a;
  if n <> 0 then
    raise exception 'falhou: B enxerga o cronograma de A';
  end if;

  update public.cronogramas set horas_dia = 9 where usuario_id = a;
  get diagnostics n = row_count;
  if n <> 0 then
    raise exception 'falhou: B alterou o cronograma de A';
  end if;

  delete from public.cronogramas where usuario_id = a;
  get diagnostics n = row_count;
  if n <> 0 then
    raise exception 'falhou: B excluiu o cronograma de A';
  end if;

  update public.cronogramas set horas_dia = 9;
  delete from public.cronogramas;

  -- 6. O upsert de B cria o dele e não toca no de A.
  insert into public.cronogramas (horas_dia, dias_semana, selecao, plano)
  values (7, 7, '{}', '{"dias": []}')
  on conflict (usuario_id) do update
    set horas_dia = excluded.horas_dia;
  select count(*) into n from public.cronogramas;
  if n <> 1 then
    raise exception 'falhou: B deveria enxergar só o próprio, enxerga %', n;
  end if;

  -- ----------------------------------------------------------- sem login
  reset role;
  perform set_config('request.jwt.claims', '', true);
  set local role anon;

  -- 7. Sem login, nem leitura.
  begin
    perform 1 from public.cronogramas limit 1;
    raise exception 'falhou: sem login deu para ler a tabela';
  exception when insufficient_privilege then
    null;
  end;

  -- ---------------------------------------------------------------- conta A
  reset role;
  perform set_config('request.jwt.claims',
    json_build_object('sub', a, 'role', 'authenticated')::text, true);
  set local role authenticated;

  -- 8. O cronograma de A continua lá, intacto depois das tentativas de B.
  select count(*) into n from public.cronogramas where usuario_id = a and horas_dia = 2;
  if n <> 1 then
    raise exception 'falhou: B alterou ou excluiu o cronograma de A';
  end if;

  -- 9. A exclui o próprio.
  delete from public.cronogramas where usuario_id = a;
  get diagnostics n = row_count;
  if n <> 1 then
    raise exception 'falhou: A não conseguiu excluir o próprio';
  end if;

  reset role;
  raise notice 'Todas as regras passaram.';
end $$;

rollback;


-- =============================================================================
-- 4. ROLLBACK — apaga a tabela e o gatilho. Some com os cronogramas salvos.
-- =============================================================================

/*
begin;
drop table if exists public.cronogramas;
drop function if exists public.cronogramas_antes_de_atualizar();
commit;
*/
