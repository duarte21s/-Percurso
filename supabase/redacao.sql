-- =============================================================================
-- PERCURSO — redação do ENEM
--
-- Rode no SQL Editor DEPOIS de provas.sql. É idempotente.
--
-- Guarda os temas reais de cada edição, as redações escritas pelas pessoas e a
-- correção nas cinco competências do INEP. A foto da redação manuscrita fica
-- num bucket PRIVADO: é a letra e o texto de alguém, não conteúdo de vitrine.
-- =============================================================================


-- =========================== temas_redacao ==================================
create table if not exists public.temas_redacao (
  id         text     primary key,        -- 'redacao-2023'
  prova_id   text     references public.provas (id) on delete set null,
  ano        smallint not null,
  tema       text     not null,
  aplicacao  text     not null default 'regular'
               check (aplicacao in ('regular','reaplicacao')),
  fonte_url  text     not null default '',
  criado_em  timestamptz not null default now()
);

create index if not exists temas_redacao_ano_idx on public.temas_redacao (ano desc);

alter table public.temas_redacao enable row level security;

drop policy if exists "temas: leitura publica" on public.temas_redacao;
create policy "temas: leitura publica"
  on public.temas_redacao for select
  to anon, authenticated
  using (true);


-- ============================== redacoes ====================================
-- As cinco competências do ENEM valem 0 a 200 cada, em degraus de 40 — não é
-- nota contínua. O check abaixo é o que impede a correção de inventar 137.
create table if not exists public.redacoes (
  id           uuid primary key default gen_random_uuid(),
  usuario_id   uuid not null references public.perfis (id) on delete cascade,
  tema_id      text references public.temas_redacao (id) on delete set null,
  simulado_id  uuid references public.simulados (id) on delete set null,

  modo         text not null default 'digitada'
                 check (modo in ('digitada','foto')),
  texto        text not null default '',
  imagem_path  text not null default '',   -- caminho no bucket, não URL
  transcricao  text not null default '',   -- o que a IA leu da foto

  c1 smallint, c2 smallint, c3 smallint, c4 smallint, c5 smallint,
  total smallint,
  comentarios  jsonb not null default '[]',
  parecer      text  not null default '',

  status       text not null default 'rascunho'
                 check (status in ('rascunho','avaliada','falhou')),
  criado_em    timestamptz not null default now(),
  avaliado_em  timestamptz,

  constraint competencias_na_escala check (
    (c1 is null or (c1 between 0 and 200 and c1 % 40 = 0)) and
    (c2 is null or (c2 between 0 and 200 and c2 % 40 = 0)) and
    (c3 is null or (c3 between 0 and 200 and c3 % 40 = 0)) and
    (c4 is null or (c4 between 0 and 200 and c4 % 40 = 0)) and
    (c5 is null or (c5 between 0 and 200 and c5 % 40 = 0))
  ),
  constraint total_ate_mil check (total is null or total between 0 and 1000)
);

create index if not exists redacoes_usuario_idx
  on public.redacoes (usuario_id, criado_em desc);

alter table public.redacoes enable row level security;

drop policy if exists "redacoes: ler as proprias"      on public.redacoes;
drop policy if exists "redacoes: inserir as proprias"  on public.redacoes;
drop policy if exists "redacoes: atualizar as proprias" on public.redacoes;
drop policy if exists "redacoes: apagar as proprias"   on public.redacoes;

create policy "redacoes: ler as proprias"
  on public.redacoes for select
  using (auth.uid() = usuario_id);

create policy "redacoes: inserir as proprias"
  on public.redacoes for insert
  with check (auth.uid() = usuario_id);

create policy "redacoes: atualizar as proprias"
  on public.redacoes for update
  using (auth.uid() = usuario_id)
  with check (auth.uid() = usuario_id);

create policy "redacoes: apagar as proprias"
  on public.redacoes for delete
  using (auth.uid() = usuario_id);


-- ============================== simulados ===================================
-- Guarda a escolha feita na abertura da prova. Fica aqui e não só na tela
-- porque a pessoa pode fechar a aba e voltar dias depois.
alter table public.simulados
  add column if not exists com_redacao boolean not null default false;


-- ============================ bucket das fotos ==============================
-- Privado: é a letra e o texto de uma pessoa. Cada uma só enxerga a própria
-- pasta, e o nome da pasta é o id dela — daí o split do caminho.
insert into storage.buckets (id, name, public)
values ('redacoes', 'redacoes', false)
on conflict (id) do nothing;

drop policy if exists "redacao: enviar a propria"  on storage.objects;
drop policy if exists "redacao: ler a propria"     on storage.objects;
drop policy if exists "redacao: apagar a propria"  on storage.objects;

create policy "redacao: enviar a propria"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'redacoes'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "redacao: ler a propria"
  on storage.objects for select
  to authenticated
  using (
    bucket_id = 'redacoes'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "redacao: apagar a propria"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'redacoes'
    and (storage.foldername(name))[1] = auth.uid()::text
  );


-- ================================ grants ====================================
grant select on public.temas_redacao to anon, authenticated;
grant select, insert, update, delete on public.redacoes to authenticated;
grant all on public.temas_redacao to service_role;
grant all on public.redacoes      to service_role;


-- ============================ os temas reais ================================
-- Aplicados de 2009 a 2023. `fonte_url` leva ao caderno oficial do INEP, onde
-- estão os textos motivadores — eles não são reproduzidos aqui.
insert into public.temas_redacao (id, prova_id, ano, tema, aplicacao, fonte_url) values
  ('redacao-2023', 'enem-2023', 2023, 'Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2022', 'enem-2022', 2022, 'Desafios para a valorização de comunidades e povos tradicionais no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2021', 'enem-2021', 2021, 'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2020', 'enem-2020', 2020, 'O estigma associado às doenças mentais na sociedade brasileira', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2019', 'enem-2019', 2019, 'Democratização do acesso ao cinema no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2018', 'enem-2018', 2018, 'Manipulação do comportamento do usuário pelo controle de dados na internet', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2017', 'enem-2017', 2017, 'Desafios para a formação educacional de surdos no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2016', 'enem-2016', 2016, 'Caminhos para combater a intolerância religiosa no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2015', 'enem-2015', 2015, 'A persistência da violência contra a mulher no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2014', 'enem-2014', 2014, 'Publicidade infantil em questão no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2013', 'enem-2013', 2013, 'Efeitos da implantação da Lei Seca no Brasil', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2012', 'enem-2012', 2012, 'O movimento imigratório para o Brasil no século XXI', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2011', 'enem-2011', 2011, 'Viver em rede no século XXI: os limites entre o público e o privado', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2010', 'enem-2010', 2010, 'O trabalho na construção da dignidade humana', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  ('redacao-2009', 'enem-2009', 2009, 'O indivíduo frente à ética nacional', 'regular', 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos'),
  -- Reaplicações: 2009 e 2010 tiveram segunda prova, e 2016 e 2017 tiveram
  -- segunda aplicação com tema próprio. Servem de treino extra.
  ('redacao-2009-r', 'enem-2009', 2009, 'Valorização do idoso', 'reaplicacao', ''),
  ('redacao-2010-r', 'enem-2010', 2010, 'Ajuda humanitária', 'reaplicacao', ''),
  ('redacao-2016-r', 'enem-2016', 2016, 'Caminhos para combater o racismo no Brasil', 'reaplicacao', ''),
  ('redacao-2017-r', 'enem-2017', 2017, 'Consequências da busca por padrões de beleza idealizados', 'reaplicacao', '')
on conflict (id) do update set
  tema = excluded.tema,
  prova_id = excluded.prova_id,
  fonte_url = excluded.fonte_url;
