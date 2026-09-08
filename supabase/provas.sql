-- =============================================================================
-- PERCURSO — provas reais do ENEM
--
-- Rode no SQL Editor do projeto, DEPOIS do schema.sql. É idempotente.
--
-- As provas vêm da API pública api.enem.dev, que converte para JSON os PDFs
-- que o INEP publica gratuitamente. `provas.fonte_url` guarda o crédito e o
-- link da origem, e ele é exibido na tela de cada prova.
-- =============================================================================


-- ================================ provas ====================================
-- Uma linha por prova aplicada. O ENEM tem 180 questões divididas em 4 áreas
-- de 45; as duas primeiras caem no primeiro dia e as duas últimas no segundo.
create table if not exists public.provas (
  id             text     primary key,          -- 'enem-2023'
  banca          text     not null default 'ENEM',
  nome           text     not null,             -- 'ENEM 2023'
  ano            smallint not null,
  total_questoes smallint not null default 0,
  -- 11 horas: o ENEM real são 5h30 no primeiro dia (com a redação) e 5h no
  -- segundo, mas aqui as 180 questões vêm num bloco só e o relógio precisa
  -- cobrir os dois dias juntos.
  tempo_minutos  smallint not null default 660,
  fonte_url      text     not null default '',
  criado_em      timestamptz not null default now(),

  constraint ano_plausivel check (ano between 1998 and 2100)
);

create index if not exists provas_ano_idx on public.provas (ano desc);

alter table public.provas enable row level security;

drop policy if exists "provas: leitura publica" on public.provas;
create policy "provas: leitura publica"
  on public.provas for select
  to anon, authenticated
  using (true);


-- ========================= questoes: colunas novas ==========================
-- Colunas separadas em vez de tabela nova: uma questão do ENEM é uma questão
-- como qualquer outra, e manter tudo em `questoes` deixa o simulado comum
-- sortear questões de prova sem precisar de union.
alter table public.questoes add column if not exists prova_id  text     references public.provas (id) on delete cascade;
alter table public.questoes add column if not exists numero    smallint;
alter table public.questoes add column if not exists area      text;
alter table public.questoes add column if not exists tema      text;
-- Vazio, e não nulo, de propósito: o índice único abaixo precisa ser de
-- colunas simples para o upsert da importação conseguir usá-lo, e coluna
-- anulável dentro de índice único não serve para isso.
alter table public.questoes add column if not exists idioma    text not null default '';

-- O ENEM não agrupa por matéria, e sim por ÁREA: "Ciências da Natureza" mistura
-- física, química e biologia na mesma prova, e a API não diz qual é qual.
-- Chutar a matéria encheria o filtro de Física de questões de biologia, então
-- questão de prova guarda a área e deixa `materia_id` nulo. O modo prova
-- trabalha por área — que é como a prova de verdade funciona.
alter table public.questoes alter column materia_id drop not null;

do $$
begin
  alter table public.questoes drop constraint if exists questao_tem_origem;
  alter table public.questoes add constraint questao_tem_origem
    check (materia_id is not null or prova_id is not null);

  alter table public.questoes drop constraint if exists area_do_enem;
  alter table public.questoes add constraint area_do_enem
    check (area is null or area in
      ('linguagens','ciencias-humanas','ciencias-natureza','matematica'));
exception when others then null;
end $$;
-- URLs das figuras do enunciado, na ordem em que aparecem. Sem elas, boa parte
-- das questões do ENEM fica sem sentido — gráfico, mapa, tirinha, obra de arte.
alter table public.questoes add column if not exists imagens   text[] not null default '{}';
-- Alternativa ilustrada: o texto vem vazio e a figura é a resposta.
alter table public.questoes add column if not exists opcoes_imagens text[] not null default '{}';

-- `explicacao` continua existindo e nasce vazia para o ENEM: o INEP publica o
-- gabarito, não o comentário. Quem preenche é a rota de explicação sob
-- demanda, na primeira vez que alguém erra a questão.
alter table public.questoes add column if not exists explicada_em timestamptz;

do $$
begin
  -- 'enem' junta-se a 'autoral' e 'ia' como origem possível.
  alter table public.questoes drop constraint if exists questoes_origem_check;
  alter table public.questoes add constraint questoes_origem_check
    check (origem in ('autoral','ia','enem'));
exception when others then null;
end $$;

-- Duas questões diferentes podem repetir enunciado curto entre anos, mas
-- (prova, número, idioma) é único por definição.
--
-- Índice comum, não parcial, e só de colunas: é o que o `upsert` da
-- importação consegue usar como alvo de conflito. Índice com expressão ou com
-- WHERE não serve — foi assim que o seed original quebrou no md5(enunciado).
-- Questão autoral tem prova_id nulo, e nulo não conflita com nulo no Postgres,
-- então as autorais convivem aqui sem se atrapalhar.
create unique index if not exists questoes_prova_numero_unico
  on public.questoes (prova_id, numero, idioma);

create index if not exists questoes_prova_idx on public.questoes (prova_id, numero);
create index if not exists questoes_tema_idx  on public.questoes (materia_id, tema);

-- O índice único por md5(enunciado) barra o seed autoral duplicado, mas o ENEM
-- tem questões que compartilham o mesmo texto-base em anos diferentes. Sem
-- esta troca, a importação do segundo ano falharia pela metade.
drop index if exists public.questoes_enunciado_unico;
create unique index if not exists questoes_enunciado_unico
  on public.questoes (md5(enunciado))
  where prova_id is null;


-- =========================== update de explicação ===========================
-- A rota de explicação sob demanda grava em questões que não são de ninguém.
-- Sem esta política, `authenticated` não conseguiria escrever ali.
drop policy if exists "questoes: explicar do enem" on public.questoes;
create policy "questoes: explicar do enem"
  on public.questoes for update
  to authenticated
  using (origem = 'enem' and (explicacao = '' or explicacao is null))
  with check (origem = 'enem');


-- ============================== simulados ===================================
-- O modo prova reaproveita `simulados` inteiro. O que muda é que ele aponta
-- para uma prova e permite responder fora de ordem — daí `indice_atual` virar
-- só a sugestão de onde retomar, e não uma trava.
alter table public.simulados add column if not exists prova_id     text references public.provas (id) on delete set null;
alter table public.simulados add column if not exists tema_filtro  text;
alter table public.simulados add column if not exists segundos     integer not null default 0;

create index if not exists simulados_prova_idx on public.simulados (usuario_id, prova_id);

-- O índice parcial original permitia UM simulado em andamento por pessoa. Com
-- provas isso passa a atrapalhar: dá para estar no meio do ENEM 2023 e querer
-- fazer um simulado rápido de matemática. Passa a ser um por prova — e um
-- avulso, quando prova_id é nulo.
drop index if exists public.simulados_um_em_andamento;
create unique index if not exists simulados_um_em_andamento
  on public.simulados (usuario_id, coalesce(prova_id, ''))
  where status = 'em_andamento';


-- ============================ vw_estatisticas ===============================
-- Passa a contar provas também, para a faixa de números da home.
create or replace view public.vw_estatisticas
with (security_invoker = true)
as
  select
    (select coalesce(sum(aulas), 0)::bigint from public.materias) as aulas,
    (select count(*)::bigint                from public.questoes) as questoes,
    (select count(*)::bigint                from public.materias) as materias,
    (select count(*)::bigint                from public.provas)   as provas;


-- ================================ grants ====================================
grant select on public.provas to anon, authenticated;
grant update (explicacao, explicada_em) on public.questoes to authenticated;
grant all on public.provas to service_role;
