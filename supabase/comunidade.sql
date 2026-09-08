-- =============================================================================
-- PERCURSO — Comunidade
--
-- Rode no SQL Editor do Supabase, DEPOIS de schema.sql. É idempotente: pode
-- rodar de novo sem quebrar nada.
--
-- Conteúdo gerado por usuário e PÚBLICO. As travas importantes moram aqui, não
-- na aplicação — uma chamada direta à API do Supabase pula as rotas do site:
--   - `pode_publicar()`  barra visitante e conta recém-criada;
--   - os triggers `com_limite_*`  são o teto diário no próprio banco;
--   - os `check (char_length(...))`  limitam o tamanho do texto;
--   - `oculto` e `verificado` não têm GRANT para `authenticated` — só a
--     service role (scripts/moderar.mjs, scripts/seed-comunidade.mjs) os escreve.
-- O rate limit fino (por hora, mensagens amigáveis) fica na rota, em `com_uso`.
-- =============================================================================


-- ============================ perfis: colunas ==============================
-- username é o identificador público. Nasce nulo; a pessoa escolhe no primeiro
-- post. Único por lower(username); a lista de reservados é aplicada na rota.
alter table public.perfis
  add column if not exists username            text,
  add column if not exists username_trocado_em timestamptz,
  add column if not exists verificado          boolean not null default false;

do $$
begin
  alter table public.perfis drop constraint if exists perfis_username_formato;
  alter table public.perfis add constraint perfis_username_formato
    check (username is null or username ~ '^[a-z0-9_.]{3,20}$');
exception when others then null;
end $$;

create unique index if not exists perfis_username_uk
  on public.perfis (lower(username))
  where username is not null;

-- schema.sql concede `update` na tabela `perfis` inteira para `authenticated`.
-- Com a coluna `verificado` nova, isso deixaria qualquer pessoa se marcar como
-- verificada. Troca por GRANT por coluna: `verificado` fica de fora — só a
-- service role o escreve (scripts/seed-comunidade.mjs, scripts/moderar.mjs).
revoke update on public.perfis from authenticated;
grant update (nome, objetivo, horas_dia, dias_semana, username, username_trocado_em)
  on public.perfis to authenticated;


-- ===================== quem pode publicar na comunidade =====================
-- Visitante (conta anônima) não escreve — corta o spam descartável. Conta com
-- menos de 10 minutos também não: dá tempo de um cadastro em massa não render.
create or replace function public.pode_publicar()
returns boolean
language plpgsql
security definer
set search_path = public
stable
as $$
declare
  anon    boolean;
  nascido timestamptz;
begin
  anon := coalesce((auth.jwt() ->> 'is_anonymous')::boolean, false);
  if anon then
    return false;
  end if;

  select created_at into nascido from auth.users where id = auth.uid();
  if nascido is null then
    return false;
  end if;

  return now() - nascido >= interval '10 minutes';
end;
$$;


-- ================================ com_posts =================================
create table if not exists public.com_posts (
  id          uuid        primary key default gen_random_uuid(),
  autor_id    uuid        not null references public.perfis (id) on delete cascade,
  tipo        text        not null
                check (tipo in ('pergunta','discussao','compartilhamento','dica')),
  titulo      text,
  texto       text        not null check (char_length(texto) between 1 and 5000),
  tags        text[]      not null default '{}',
  -- Quando preenchido, o post é uma dúvida ancorada numa questão: some do feed
  -- geral e vive dentro da questão, no Estudar e nas provas.
  questao_id  uuid        references public.questoes (id) on delete cascade,
  codigo      jsonb,
  link        jsonb,
  resolvido   boolean     not null default false,
  oculto      boolean     not null default false,   -- moderação; só service role
  seed_key    text        unique,                   -- conteúdo semeado; só o seed
  criado_em   timestamptz not null default now(),
  editado_em  timestamptz,

  constraint titulo_curto check (titulo is null or char_length(titulo) <= 160)
);

-- Para o caso de a tabela já existir de uma execução anterior sem esta coluna.
alter table public.com_posts add column if not exists tags text[] not null default '{}';

create index if not exists com_posts_feed_idx
  on public.com_posts (criado_em desc)
  where not oculto and questao_id is null;

create index if not exists com_posts_questao_idx
  on public.com_posts (questao_id, criado_em desc)
  where questao_id is not null;

create index if not exists com_posts_autor_idx
  on public.com_posts (autor_id, criado_em desc);

alter table public.com_posts enable row level security;

drop policy if exists "com_posts: leitura publica"   on public.com_posts;
drop policy if exists "com_posts: inserir o proprio" on public.com_posts;
drop policy if exists "com_posts: editar o proprio"  on public.com_posts;
drop policy if exists "com_posts: apagar o proprio"  on public.com_posts;

create policy "com_posts: leitura publica"
  on public.com_posts for select
  to anon, authenticated
  using (not oculto or autor_id = auth.uid());

create policy "com_posts: inserir o proprio"
  on public.com_posts for insert
  to authenticated
  with check (autor_id = auth.uid() and public.pode_publicar());

create policy "com_posts: editar o proprio"
  on public.com_posts for update
  to authenticated
  using (autor_id = auth.uid())
  with check (autor_id = auth.uid());

create policy "com_posts: apagar o proprio"
  on public.com_posts for delete
  to authenticated
  using (autor_id = auth.uid());

-- Teto no próprio banco: cobre o caso de alguém falar direto com a API do
-- Supabase, sem passar pela rota (que tem o limite fino). 20 é folga sobre os
-- 10/dia da rota — aqui é só o backstop contra abuso.
create or replace function public.com_limite_posts()
returns trigger language plpgsql as $$
declare n int;
begin
  select count(*) into n from public.com_posts
    where autor_id = new.autor_id and criado_em > now() - interval '1 day';
  if n >= 20 then
    raise exception 'limite diario de publicacoes atingido';
  end if;
  return new;
end;
$$;
drop trigger if exists com_posts_limite on public.com_posts;
create trigger com_posts_limite
  before insert on public.com_posts
  for each row execute function public.com_limite_posts();


-- ============================= com_comentarios =============================
create table if not exists public.com_comentarios (
  id          uuid        primary key default gen_random_uuid(),
  post_id     uuid        not null references public.com_posts (id) on delete cascade,
  autor_id    uuid        not null references public.perfis (id) on delete cascade,
  pai_id      uuid        references public.com_comentarios (id) on delete cascade,
  texto       text        not null check (char_length(texto) between 1 and 2000),
  aceito      boolean     not null default false,   -- resposta aceita; via RPC
  oculto      boolean     not null default false,   -- moderação; só service role
  criado_em   timestamptz not null default now(),
  editado_em  timestamptz
);

create index if not exists com_comentarios_post_idx
  on public.com_comentarios (post_id, criado_em);

alter table public.com_comentarios enable row level security;

-- Um nível só de aninhamento: resposta de resposta vira conversa ilegível.
create or replace function public.com_um_nivel()
returns trigger language plpgsql as $$
begin
  if new.pai_id is not null
     and exists (
       select 1 from public.com_comentarios c
       where c.id = new.pai_id and c.pai_id is not null
     )
  then
    raise exception 'comentario aceita apenas um nivel de resposta';
  end if;
  return new;
end;
$$;
drop trigger if exists com_comentarios_um_nivel on public.com_comentarios;
create trigger com_comentarios_um_nivel
  before insert on public.com_comentarios
  for each row execute function public.com_um_nivel();

create or replace function public.com_limite_comentarios()
returns trigger language plpgsql as $$
declare n int;
begin
  select count(*) into n from public.com_comentarios
    where autor_id = new.autor_id and criado_em > now() - interval '1 day';
  if n >= 120 then
    raise exception 'limite diario de comentarios atingido';
  end if;
  return new;
end;
$$;
drop trigger if exists com_comentarios_limite on public.com_comentarios;
create trigger com_comentarios_limite
  before insert on public.com_comentarios
  for each row execute function public.com_limite_comentarios();

drop policy if exists "com_comentarios: leitura publica"   on public.com_comentarios;
drop policy if exists "com_comentarios: inserir o proprio" on public.com_comentarios;
drop policy if exists "com_comentarios: editar o proprio"  on public.com_comentarios;
drop policy if exists "com_comentarios: apagar o proprio"  on public.com_comentarios;

create policy "com_comentarios: leitura publica"
  on public.com_comentarios for select
  to anon, authenticated
  using (not oculto or autor_id = auth.uid());

create policy "com_comentarios: inserir o proprio"
  on public.com_comentarios for insert
  to authenticated
  with check (autor_id = auth.uid() and public.pode_publicar());

-- Editar toca só `texto`/`editado_em` (ver GRANT por coluna abaixo). `aceito`
-- é do dono do POST, não do comentário — vai pelo RPC `aceitar_resposta`.
create policy "com_comentarios: editar o proprio"
  on public.com_comentarios for update
  to authenticated
  using (autor_id = auth.uid())
  with check (autor_id = auth.uid());

create policy "com_comentarios: apagar o proprio"
  on public.com_comentarios for delete
  to authenticated
  using (autor_id = auth.uid());


-- ===================== aceitar resposta (dono do post) =====================
-- O dono do POST aceita um comentário como resposta. Isso NÃO pode ser uma
-- policy de update: o dono do post não é o autor do comentário, e liberar o
-- update abriria a edição do texto alheio. RPC com checagem explícita resolve.
create or replace function public.aceitar_resposta(p_comentario_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_post_id uuid;
begin
  select c.post_id into v_post_id
  from public.com_comentarios c
  join public.com_posts p on p.id = c.post_id
  where c.id = p_comentario_id and p.autor_id = auth.uid();

  if v_post_id is null then
    raise exception 'so o autor da pergunta pode aceitar uma resposta';
  end if;

  update public.com_comentarios set aceito = (id = p_comentario_id)
    where post_id = v_post_id;
  update public.com_posts set resolvido = true where id = v_post_id;
end;
$$;


-- =============================== com_reacoes ===============================
-- O "curtir". Dono only na leitura também: quem curtiu o quê é privado. As
-- contagens públicas saem da view vw_com_contagens.
create table if not exists public.com_reacoes (
  usuario_id uuid        not null references public.perfis (id) on delete cascade,
  alvo_tipo  text        not null check (alvo_tipo in ('post','comentario')),
  alvo_id    uuid        not null,
  criado_em  timestamptz not null default now(),
  primary key (usuario_id, alvo_tipo, alvo_id)
);

create index if not exists com_reacoes_alvo_idx
  on public.com_reacoes (alvo_tipo, alvo_id);

alter table public.com_reacoes enable row level security;

drop policy if exists "com_reacoes: as proprias" on public.com_reacoes;
create policy "com_reacoes: as proprias"
  on public.com_reacoes for all
  to authenticated
  using (usuario_id = auth.uid())
  with check (usuario_id = auth.uid());


-- =============================== com_salvos ===============================
create table if not exists public.com_salvos (
  usuario_id uuid        not null references public.perfis (id) on delete cascade,
  post_id    uuid        not null references public.com_posts (id) on delete cascade,
  criado_em  timestamptz not null default now(),
  primary key (usuario_id, post_id)
);

alter table public.com_salvos enable row level security;

drop policy if exists "com_salvos: os proprios" on public.com_salvos;
create policy "com_salvos: os proprios"
  on public.com_salvos for all
  to authenticated
  using (usuario_id = auth.uid())
  with check (usuario_id = auth.uid());


-- ============================== com_denuncias =============================
create table if not exists public.com_denuncias (
  id             uuid        primary key default gen_random_uuid(),
  denunciante_id uuid        not null references public.perfis (id) on delete cascade,
  alvo_tipo      text        not null check (alvo_tipo in ('post','comentario')),
  alvo_id        uuid        not null,
  motivo         text        not null default '' check (char_length(motivo) <= 500),
  criado_em      timestamptz not null default now(),
  unique (denunciante_id, alvo_tipo, alvo_id)
);

create index if not exists com_denuncias_alvo_idx
  on public.com_denuncias (alvo_tipo, alvo_id, criado_em);

alter table public.com_denuncias enable row level security;

-- Insere a própria denúncia; não lê as dos outros. Quem lê é a service role,
-- por scripts/moderar.mjs.
drop policy if exists "com_denuncias: denunciar"      on public.com_denuncias;
drop policy if exists "com_denuncias: ler as proprias" on public.com_denuncias;

create policy "com_denuncias: denunciar"
  on public.com_denuncias for insert
  to authenticated
  with check (denunciante_id = auth.uid());

create policy "com_denuncias: ler as proprias"
  on public.com_denuncias for select
  to authenticated
  using (denunciante_id = auth.uid());


-- ================================ com_uso ================================
-- Rate limit fino, por dia. Provisório: quando existir um mecanismo geral de
-- rate limit no projeto (ver MELHORIAS.md S1), esta tabela e o helper
-- `checaLimite` em lib/comunidade.ts saem. A rota grava aqui com a chave anon
-- + a sessão, então precisa das três operações.
create table if not exists public.com_uso (
  usuario_id uuid    not null references public.perfis (id) on delete cascade,
  acao       text    not null,
  dia        date    not null default current_date,
  contagem   int     not null default 0,
  primary key (usuario_id, acao, dia)
);

alter table public.com_uso enable row level security;

drop policy if exists "com_uso: o proprio" on public.com_uso;
create policy "com_uso: o proprio"
  on public.com_uso for all
  to authenticated
  using (usuario_id = auth.uid())
  with check (usuario_id = auth.uid());

-- Incrementa e devolve a contagem do dia para a ação. A rota compara com o
-- teto (lib/comunidade.ts). `insert ... on conflict` é atômico — sem corrida.
create or replace function public.com_usar(p_acao text)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare n int;
begin
  insert into public.com_uso (usuario_id, acao, dia, contagem)
    values (auth.uid(), p_acao, current_date, 1)
  on conflict (usuario_id, acao, dia)
    do update set contagem = public.com_uso.contagem + 1
  returning contagem into n;
  return n;
end;
$$;


-- ========================== vw_com_contagens ===========================
-- Contagem pública de curtidas por alvo. DELIBERADAMENTE sem
-- security_invoker: com ele, a view herdaria o RLS "dono only" de
-- com_reacoes e cada pessoa só veria as próprias curtidas. Aqui a view roda
-- como dona e devolve só o agregado — nenhum usuario_id, nenhuma linha.
create or replace view public.vw_com_contagens as
  select alvo_tipo, alvo_id, count(*)::int as curtidas
  from public.com_reacoes
  group by alvo_tipo, alvo_id;


-- ========================= vw_perfis_publicos ==========================
-- O RLS de `perfis` é "cada um lê o seu": ninguém consegue ver o nome do
-- autor de um post alheio. Esta view expõe SÓ os quatro campos que a
-- Comunidade mostra e roda como dona (sem security_invoker), enxergando
-- todas as linhas. `objetivo`, `horas_dia` e as outras preferências de
-- estudo continuam privadas — não passam por aqui.
create or replace view public.vw_perfis_publicos as
  select id, nome, username, verificado from public.perfis;


-- ================================ GRANTS ================================
grant usage on schema public to anon, authenticated, service_role;

-- Leitura pública do conteúdo, das contagens e dos perfis públicos.
grant select on public.com_posts          to anon, authenticated;
grant select on public.com_comentarios    to anon, authenticated;
grant select on public.vw_com_contagens   to anon, authenticated;
grant select on public.vw_perfis_publicos to anon, authenticated;

-- Escrita restrita pelo RLS. UPDATE é POR COLUNA: nada de `oculto`, `autor_id`,
-- `questao_id`, `seed_key`, nem `aceito` (esse é do RPC).
grant insert, delete            on public.com_posts       to authenticated;
grant update (titulo, texto, tipo, tags, codigo, link, resolvido, editado_em)
                                on public.com_posts       to authenticated;
grant insert, delete            on public.com_comentarios to authenticated;
grant update (texto, editado_em) on public.com_comentarios to authenticated;
grant select, insert, delete    on public.com_reacoes     to authenticated;
grant select, insert, delete    on public.com_salvos      to authenticated;
grant insert, select            on public.com_denuncias   to authenticated;
grant select, insert, update    on public.com_uso         to authenticated;

grant execute on function public.aceitar_resposta(uuid) to authenticated;
grant execute on function public.com_usar(text)         to authenticated;
grant execute on function public.pode_publicar()        to authenticated, anon;

-- A service role ignora RLS, mas GRANT é outra camada.
grant all on public.com_posts       to service_role;
grant all on public.com_comentarios to service_role;
grant all on public.com_reacoes     to service_role;
grant all on public.com_salvos      to service_role;
grant all on public.com_denuncias   to service_role;
grant all on public.com_uso         to service_role;
grant select on public.vw_com_contagens   to service_role;
grant select on public.vw_perfis_publicos to service_role;
