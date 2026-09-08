-- =============================================================================
-- PERCURSO — abre o modo prova para outras bancas
--
-- Rode no SQL Editor do projeto, DEPOIS de provas.sql. É idempotente: pode
-- rodar duas vezes sem estragar nada.
--
-- O QUE ISTO FAZ E O QUE NÃO FAZ
--
-- Faz: tira do schema as três travas que assumem que toda prova é do ENEM, e
-- acrescenta o que uma prova de outra banca precisa para caber na mesma tabela.
--
-- NÃO faz: não insere prova nenhuma. Continua valendo a regra do projeto — a
-- tela só pode oferecer o que o banco tem. Rodar este arquivo não faz aparecer
-- "ITA 2024" em lugar nenhum; ele só deixa de impedir que apareça no dia em que
-- houver conteúdo de verdade.
--
-- AS TRÊS TRAVAS
--
--   1. `area_do_enem` só aceitava as quatro áreas do ENEM. A Fuvest divide a
--      primeira fase em prova única, o ITA aplica por disciplina, e concurso
--      separa por "conhecimentos básicos" e "específicos". Nenhum desses cabe
--      em 'linguagens/ciencias-humanas/ciencias-natureza/matematica'.
--   2. `questoes_origem_check` só aceitava 'autoral', 'ia' e 'enem'.
--   3. `provas.tempo_minutos` nasce 660 — as 11h do ENEM. A primeira fase da
--      Fuvest são 5h; o CACD, outra coisa.
-- =============================================================================


-- ============================ 1. bancas =====================================
-- Tabela própria em vez de texto livre em `provas.banca`: é o que impede
-- "Fuvest", "FUVEST" e "fuvest" virarem três bancas na lista, e dá lugar para
-- o crédito da fonte, que hoje mora repetido em cada prova.
create table if not exists public.bancas (
  id         text primary key,              -- 'fuvest', 'ita', 'cebraspe'
  nome       text not null,                 -- 'Fuvest'
  tipo       text not null,                 -- ver check abaixo
  -- Quem publica a prova e sob que condição. Fica visível na tela da prova.
  fonte_nome text not null default '',
  fonte_url  text not null default '',
  criado_em  timestamptz not null default now(),

  constraint tipo_de_banca check (tipo in
    ('nacional','vestibular','militar','concurso'))
);

alter table public.bancas enable row level security;
drop policy if exists "bancas: leitura publica" on public.bancas;
create policy "bancas: leitura publica"
  on public.bancas for select to anon, authenticated using (true);

-- O ENEM já existe como texto em provas.banca; entra aqui para a lista ficar
-- completa desde o primeiro dia.
insert into public.bancas (id, nome, tipo, fonte_nome, fonte_url) values
  ('enem', 'ENEM', 'nacional', 'INEP',
   'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos')
on conflict (id) do nothing;


-- ============================ 2. provas =====================================
-- `banca_id` entra ao lado de `banca` (texto). Os dois convivem de propósito:
-- o texto continua alimentando o que já está na tela, e a chave nova passa a
-- ser a verdade. Migrar as telas é outro passo, feito com calma.
alter table public.provas add column if not exists banca_id text
  references public.bancas (id) on delete restrict;

-- Fase/etapa: a Fuvest tem 1ª e 2ª fase, o ITA tem as duas, o ENEM tem "dia 1"
-- e "dia 2". Nulo para prova de fase única.
alter table public.provas add column if not exists fase text;

-- Preenche banca_id do que já existe, a partir do texto.
update public.provas
   set banca_id = 'enem'
 where banca_id is null and lower(banca) = 'enem';

create index if not exists provas_banca_idx on public.provas (banca_id, ano desc);


-- ======================= 3. área deixa de ser do ENEM =======================
-- A coluna `area` continua, e continua sendo o eixo pelo qual o modo prova
-- agrupa. O que muda é que os valores válidos passam a vir de uma tabela, em
-- vez de uma lista fixa dentro de um CHECK.
create table if not exists public.areas_prova (
  id       text primary key,   -- 'linguagens', 'exatas-ita', 'basicos'
  nome     text not null,      -- 'Linguagens e Códigos'
  banca_id text references public.bancas (id) on delete cascade,
  ordem    smallint not null default 0
);

alter table public.areas_prova enable row level security;
drop policy if exists "areas_prova: leitura publica" on public.areas_prova;
create policy "areas_prova: leitura publica"
  on public.areas_prova for select to anon, authenticated using (true);

insert into public.areas_prova (id, nome, banca_id, ordem) values
  ('linguagens',        'Linguagens e Códigos', 'enem', 1),
  ('ciencias-humanas',  'Ciências Humanas',     'enem', 2),
  ('ciencias-natureza', 'Ciências da Natureza', 'enem', 3),
  ('matematica',        'Matemática',           'enem', 4)
on conflict (id) do nothing;

-- Troca o CHECK fixo por chave estrangeira. Feito em bloco protegido porque
-- o constraint pode não existir (base nova) ou já ter sido trocado.
do $$
begin
  alter table public.questoes drop constraint if exists area_do_enem;
  alter table public.questoes drop constraint if exists questoes_area_fkey;
  alter table public.questoes
    add constraint questoes_area_fkey
    foreign key (area) references public.areas_prova (id) on delete restrict;
exception when others then
  raise notice 'area: constraint nao trocada (%). Verifique se ha area fora de areas_prova.', sqlerrm;
end $$;


-- ========================= 4. origem deixa de ser fixa ======================
-- 'vestibular', 'militar' e 'concurso' juntam-se às três que já existiam.
-- Continua sendo CHECK, e não tabela: `origem` responde "de onde saiu o texto
-- desta questão", que é um vocabulário fechado e pequeno.
do $$
begin
  alter table public.questoes drop constraint if exists questoes_origem_check;
  alter table public.questoes add constraint questoes_origem_check
    check (origem in ('autoral','ia','enem','vestibular','militar','concurso'));
exception when others then null;
end $$;


-- ===================== 5. tempo deixa de ter cara de ENEM ===================
-- O default de 660 minutos era razoável quando toda prova era o ENEM. Com
-- outras bancas ele vira armadilha: quem esquecer de informar ganha 11h para
-- uma prova de 5h. Sem default, o insert é obrigado a dizer.
alter table public.provas alter column tempo_minutos drop default;

-- E o que já existe continua com o valor que tinha.
update public.provas set tempo_minutos = 660
 where tempo_minutos is null and banca_id = 'enem';


-- =========================== 6. conferência =================================
-- Rode e leia: se algo aqui vier diferente do esperado, pare antes de importar.
do $$
declare
  n_bancas int; n_areas int; n_provas_sem_banca int;
begin
  select count(*) into n_bancas from public.bancas;
  select count(*) into n_areas  from public.areas_prova;
  select count(*) into n_provas_sem_banca from public.provas where banca_id is null;

  raise notice '--- provas-multibanca aplicado ---';
  raise notice 'bancas cadastradas: %', n_bancas;
  raise notice 'areas cadastradas: %', n_areas;
  raise notice 'provas sem banca_id: %  (deve ser 0)', n_provas_sem_banca;
end $$;
