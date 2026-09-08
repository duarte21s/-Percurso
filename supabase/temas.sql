-- ============================================================================
-- Percurso · estudo por conteúdo
--
-- A coluna `questoes.tema` já existe (veio em provas.sql), mas nasceu vazia:
-- as 27 autorais não foram marcadas e as ~2.750 do ENEM entraram sem matéria,
-- porque o INEP agrupa por área e "Ciências da Natureza" mistura física,
-- química e biologia sem dizer qual é qual.
--
-- Este arquivo dá o que falta para a tela de escolher conteúdo funcionar:
-- a contagem por tema, para a pessoa ver quantas questões existem de cada
-- assunto antes de começar.
--
-- Rode no SQL Editor depois de schema.sql e provas.sql.
-- ============================================================================

-- `tema` guarda o título exato do tópico em lib/conteudo/materias.ts. Manter o
-- título e não um slug foi decisão do filtro que já existe em /api/simulado,
-- que recebe `temas: string[]` da interface e faz `.in("tema", temas)`.
alter table public.questoes add column if not exists tema text;

-- O índice de (materia_id, tema) veio em provas.sql. Este segundo serve à
-- contagem da vitrine, que agrupa por tema sem filtrar matéria antes.
create index if not exists questoes_tema_so_idx
  on public.questoes (tema)
  where tema is not null;

-- Questão escrita à mão já nasce sabendo seu conteúdo. `tema_manual` protege
-- essa marcação do classificador, que limpa e regrava tudo a cada execução:
-- sem a flag, melhorar uma regra de Física poderia arrastar para outro tema
-- uma questão que alguém classificou de propósito.
alter table public.questoes
  add column if not exists tema_manual boolean not null default false;


-- ============================ vw_temas ======================================
-- Quantas questões existem por tema, e quantas dessas já têm comentário
-- pronto.
--
-- A distinção importa na tela: questão do ENEM entra sem explicação (o INEP
-- publica o gabarito, não o comentário) e ganha uma quando alguém pede. Dizer
-- "38 questões · 12 comentadas" é honesto; dizer só "38" prometeria um
-- comentário que ainda não existe.
--
-- security_invoker faz a view respeitar o RLS de quem consulta em vez do dono.
-- Sem isso ela viraria uma porta lateral para a tabela.
create or replace view public.vw_temas
with (security_invoker = true) as
  select
    materia_id,
    tema,
    count(*)::int                                    as total,
    count(*) filter (where explicacao <> '')::int    as comentadas
  from public.questoes
  where materia_id is not null
    and tema is not null
    and tema <> ''
  group by materia_id, tema;

-- RLS controla linha; GRANT controla se a role enxerga o objeto. As duas
-- coisas são necessárias — sem o grant, a view devolve erro de permissão
-- mesmo com a política de leitura pública em `questoes`.
--
-- `service_role` entra junto porque os scripts da pasta scripts/ leem por ela.
-- Ela ignora RLS, mas GRANT é outra camada: sem esta linha o script recebe
-- 42501 numa view que o site enxerga sem problema — e o erro parece, mas não
-- é, "a view não foi criada".
grant select on public.vw_temas to anon, authenticated, service_role;


-- ======================= questões de prova ganham matéria ===================
-- `materia_id` é nulo nas questões importadas do ENEM de propósito: chutar a
-- matéria a partir da área encheria o filtro de Física de questões de
-- biologia.
--
-- O classificador (scripts/classificar-temas.mjs) só preenche matéria e tema
-- quando o enunciado dá evidência léxica suficiente. Onde não dá, os dois
-- ficam nulos e a questão continua valendo pela área, como antes. Esta função
-- é o portão: recusa a gravação se a matéria não pertencer à área da questão.
create or replace function public.materia_cabe_na_area(p_materia text, p_area text)
returns boolean
language sql
immutable
as $$
  select case p_area
    when 'matematica'        then p_materia = 'matematica'
    when 'ciencias-natureza' then p_materia in ('fisica','quimica','biologia')
    when 'ciencias-humanas'  then p_materia in ('historia','filosofia')
    when 'linguagens'        then p_materia in ('portugues','ingles','artes')
    else true   -- questão sem área é do banco autoral: qualquer matéria serve
  end;
$$;

alter table public.questoes drop constraint if exists materia_coerente_com_area;
alter table public.questoes add constraint materia_coerente_com_area
  check (
    materia_id is null
    or area is null
    or public.materia_cabe_na_area(materia_id, area)
  );
