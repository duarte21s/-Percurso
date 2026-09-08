-- =============================================================================
-- PERCURSO — schema do Supabase
-- Rode no SQL Editor do projeto (Dashboard → SQL Editor → New query).
-- É idempotente: pode rodar de novo sem quebrar nada.
-- =============================================================================
--
-- SOBRE SENHA
--
-- Não existe coluna de senha aqui. O Supabase Auth guarda e verifica a senha
-- (bcrypt) em auth.users, um schema protegido que a anon key não alcança.
-- `perfis` é a tabela de PERFIL: 1:1 com auth.users, sem credencial nenhuma.
-- =============================================================================


-- ============================== perfis ======================================
create table if not exists public.perfis (
  id           uuid primary key references auth.users (id) on delete cascade,
  nome         text        not null default '',
  objetivo     text        not null default 'enem'
                 check (objetivo in ('enem','vestibular','concurso','militar','escola','graduacao')),
  horas_dia    smallint    not null default 4  check (horas_dia between 1 and 10),
  dias_semana  smallint    not null default 6  check (dias_semana between 3 and 7),
  criado_em    timestamptz not null default now()
);

alter table public.perfis enable row level security;

drop policy if exists "perfil: ler o proprio"      on public.perfis;
drop policy if exists "perfil: atualizar o proprio" on public.perfis;

create policy "perfil: ler o proprio"
  on public.perfis for select
  using (auth.uid() = id);

create policy "perfil: atualizar o proprio"
  on public.perfis for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Cria o perfil automaticamente no cadastro. Também cobre o login anônimo:
-- signInAnonymously() insere em auth.users com email nulo, então o nome cai
-- no default 'Visitante'.
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
      nullif(split_part(coalesce(new.email, ''), '@', 1), ''),
      'Visitante'
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_novo_usuario();


-- ============================== materias ====================================
-- Conteúdo público de vitrine. Leitura liberada para anônimo: o simulado e a
-- listagem de matérias precisam funcionar sem login.
create table if not exists public.materias (
  id      text primary key,                       -- 'matematica', 'portugues', ...
  nome    text     not null,
  glifo   text     not null default '',
  area    text     not null
            check (area in ('exatas','natureza','humanas','linguagens')),
  resumo  text     not null default '',
  aulas   integer  not null default 0,
  ordem   smallint not null default 0
);

alter table public.materias enable row level security;

drop policy if exists "materias: leitura publica" on public.materias;
create policy "materias: leitura publica"
  on public.materias for select
  to anon, authenticated
  using (true);


-- ============================== questoes ====================================
-- `opcoes` é um array JSON de strings; `correta` é o índice (base 0) dentro
-- dele. O check amarra os dois para não existir questão com gabarito fora do
-- alcance das alternativas.
create table if not exists public.questoes (
  id           uuid primary key default gen_random_uuid(),
  materia_id   text        not null references public.materias (id) on delete cascade,
  fonte        text        not null default '',
  enunciado    text        not null,
  opcoes       jsonb       not null,
  correta      smallint    not null,
  explicacao   text        not null default '',
  origem       text        not null default 'autoral'
                 check (origem in ('autoral','ia')),
  dificuldade  text        not null default 'media'
                 check (dificuldade in ('facil','media','dificil')),
  criada_por   uuid        references auth.users (id) on delete set null,
  criado_em    timestamptz not null default now(),

  constraint opcoes_e_lista       check (jsonb_typeof(opcoes) = 'array'),
  constraint opcoes_de_2_a_6      check (jsonb_array_length(opcoes) between 2 and 6),
  constraint correta_dentro_range check (correta >= 0 and correta < jsonb_array_length(opcoes))
);

create index if not exists questoes_materia_idx on public.questoes (materia_id);

-- Evita seed duplicado e questão repetida vinda da IA.
create unique index if not exists questoes_enunciado_unico
  on public.questoes (md5(enunciado));

alter table public.questoes enable row level security;

drop policy if exists "questoes: leitura publica"    on public.questoes;
drop policy if exists "questoes: inserir autenticado" on public.questoes;

create policy "questoes: leitura publica"
  on public.questoes for select
  to anon, authenticated
  using (true);

-- Só a rota de geração insere, e só em nome do próprio usuário logado.
-- O seed usa a service role key, que ignora RLS.
create policy "questoes: inserir autenticado"
  on public.questoes for insert
  to authenticated
  with check (auth.uid() = criada_por and origem = 'ia');


-- ============================== simulados ===================================
-- Um simulado 'em_andamento' por usuário é o que permite a retomada.
-- `questao_ids` congela o sorteio: reabrir a página devolve exatamente as
-- mesmas questões, na mesma ordem.
create table if not exists public.simulados (
  id             uuid        primary key default gen_random_uuid(),
  usuario_id     uuid        not null references public.perfis (id) on delete cascade,
  materia_filtro text        not null default 'todas',
  questao_ids    uuid[]      not null,
  indice_atual   smallint    not null default 0,
  acertos        smallint    not null default 0,
  erros          smallint    not null default 0,
  status         text        not null default 'em_andamento'
                   check (status in ('em_andamento','concluido')),
  criado_em      timestamptz not null default now(),
  atualizado_em  timestamptz not null default now(),

  constraint tem_questoes check (array_length(questao_ids, 1) > 0)
);

create index if not exists simulados_usuario_status_idx
  on public.simulados (usuario_id, status, atualizado_em desc);

-- No máximo um simulado em andamento por pessoa.
create unique index if not exists simulados_um_em_andamento
  on public.simulados (usuario_id)
  where status = 'em_andamento';

alter table public.simulados enable row level security;

drop policy if exists "simulados: ler o proprio"      on public.simulados;
drop policy if exists "simulados: inserir o proprio"  on public.simulados;
drop policy if exists "simulados: atualizar o proprio" on public.simulados;

create policy "simulados: ler o proprio"
  on public.simulados for select
  using (auth.uid() = usuario_id);

create policy "simulados: inserir o proprio"
  on public.simulados for insert
  with check (auth.uid() = usuario_id);

create policy "simulados: atualizar o proprio"
  on public.simulados for update
  using (auth.uid() = usuario_id)
  with check (auth.uid() = usuario_id);


-- ============================== respostas ===================================
-- O unique(simulado_id, questao_id) é o que impede trocar a resposta depois
-- de ver o gabarito: a segunda tentativa de gravar a mesma questão falha.
create table if not exists public.respostas (
  id            uuid        primary key default gen_random_uuid(),
  simulado_id   uuid        not null references public.simulados (id) on delete cascade,
  questao_id    uuid        not null references public.questoes  (id) on delete cascade,
  alternativa   smallint    not null,
  acertou       boolean     not null,
  respondido_em timestamptz not null default now(),

  unique (simulado_id, questao_id)
);

create index if not exists respostas_simulado_idx on public.respostas (simulado_id);

alter table public.respostas enable row level security;

-- A dona da resposta é a dona do simulado — daí o exists() em vez de uma
-- coluna usuario_id duplicada.
drop policy if exists "respostas: ler as proprias"      on public.respostas;
drop policy if exists "respostas: inserir as proprias"  on public.respostas;
drop policy if exists "respostas: atualizar as proprias" on public.respostas;

create policy "respostas: ler as proprias"
  on public.respostas for select
  using (exists (
    select 1 from public.simulados s
    where s.id = respostas.simulado_id and s.usuario_id = auth.uid()
  ));

create policy "respostas: inserir as proprias"
  on public.respostas for insert
  with check (exists (
    select 1 from public.simulados s
    where s.id = respostas.simulado_id and s.usuario_id = auth.uid()
  ));

-- O modo prova grava com `upsert`, porque lá dá para voltar numa questão e
-- trocar a alternativa antes de entregar. `upsert` atualiza a linha existente,
-- então precisa de policy de update — sem ela nenhuma resposta de prova era
-- gravada. O simulado por conteúdo usa `insert` puro e não dependia disto.
create policy "respostas: atualizar as proprias"
  on public.respostas for update
  using (exists (
    select 1 from public.simulados s
    where s.id = respostas.simulado_id and s.usuario_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.simulados s
    where s.id = respostas.simulado_id and s.usuario_id = auth.uid()
  ));


-- ============================== estatísticas ================================
-- Alimenta a faixa de números da home com contagem real. O `24 mil questões`
-- do site antigo era copy de vitrine; aqui o número é o que existe no banco.
create or replace view public.vw_estatisticas
with (security_invoker = true)
as
  select
    (select coalesce(sum(aulas), 0)::bigint from public.materias) as aulas,
    (select count(*)::bigint                from public.questoes) as questoes,
    (select count(*)::bigint                from public.materias) as materias;

grant select on public.vw_estatisticas to anon, authenticated;


-- ================================ GRANTS ====================================
--
-- RLS e GRANT são coisas diferentes, e o Postgres exige as duas.
-- A política diz QUAIS LINHAS a role enxerga; o grant diz se ela pode tocar
-- na tabela. Projetos Supabase novos não concedem privilégio automático em
-- tabelas criadas aqui, então sem este bloco tudo responde 42501
-- (permission denied) mesmo com as políticas certas.
--
-- Os privilégios abaixo são o teto: dentro dele, quem decide linha a linha
-- continua sendo o RLS.

grant usage on schema public to anon, authenticated, service_role;

-- Conteúdo público: catálogo e banco de questões.
grant select on public.materias        to anon, authenticated;
grant select on public.questoes        to anon, authenticated;
grant select on public.vw_estatisticas to anon, authenticated;

-- Dados da pessoa logada. O RLS restringe cada linha a auth.uid().
grant select, update         on public.perfis     to authenticated;
grant select, insert, update on public.simulados  to authenticated;
grant select, insert         on public.respostas  to authenticated;

-- Questões geradas pela IA entram em nome de quem pediu.
grant insert on public.questoes to authenticated;

-- A service_role é a chave de servidor: ignora RLS, mas ainda precisa do
-- grant. Usada pelo `npm run seed`.
grant all on all tables    in schema public to service_role;
grant all on all sequences in schema public to service_role;


-- ============================== atualizado_em ===============================
create or replace function public.toca_atualizado_em()
returns trigger
language plpgsql
as $$
begin
  new.atualizado_em = now();
  return new;
end;
$$;

drop trigger if exists simulados_atualizado_em on public.simulados;
create trigger simulados_atualizado_em
  before update on public.simulados
  for each row execute function public.toca_atualizado_em();
