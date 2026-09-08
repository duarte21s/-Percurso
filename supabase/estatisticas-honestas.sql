-- =============================================================================
-- vw_estatisticas: contar o que existe, não o que está cadastrado
-- =============================================================================
--
-- A view contava `count(*) from materias` — LINHAS NA TABELA. A tabela tem 17,
-- mas cinco delas (calculo, estatistica, exatas-militar, informatica,
-- matematica-fund) são trilhas planejadas, sem uma única questão.
--
-- O resultado é que a página de números anunciava 17 matérias, o aluno entrava
-- e encontrava 9 no seletor de estudo. Três números para a mesma coisa:
--
--   17  linhas na tabela          (o que a view dizia)
--   12  matérias com questão      (o que existe de fato)
--    9  no seletor de estudo      (as de ensino médio que o código declara)
--
-- Isso contraria a regra que o próprio site anuncia em /apresentacao/honestidade:
-- não anunciar conteúdo que o banco não tenha. Número inflado é a forma mais
-- fácil de quebrar essa promessa, porque ninguém confere.
--
-- As cinco linhas vazias NÃO saem da tabela: elas são destino planejado, e ter
-- a linha pronta para receber questão é útil. Elas só deixam de ser contadas
-- como se já existissem. No dia em que a primeira questão de Cálculo entrar, o
-- número sobe sozinho — que é como deveria ter sido desde o começo.
--
-- `aulas` recebe o mesmo tratamento, pelo mesmo motivo: somar as aulas de uma
-- matéria sem questão nenhuma anuncia carga horária que não existe.
-- =============================================================================

create or replace view public.vw_estatisticas
with (security_invoker = true)
as
  select
    (select coalesce(sum(m.aulas), 0)::bigint
       from public.materias m
      where exists (select 1 from public.questoes q where q.materia_id = m.id)
    ) as aulas,

    (select count(*)::bigint from public.questoes) as questoes,

    /* Só matéria que tem questão. `distinct` sobre a tabela de questões seria
       equivalente e mais barato, mas contar pela tabela de matérias mantém a
       view falando da mesma entidade nas quatro colunas. */
    (select count(*)::bigint
       from public.materias m
      where exists (select 1 from public.questoes q where q.materia_id = m.id)
    ) as materias,

    (select count(*)::bigint from public.provas) as provas;

grant select on public.vw_estatisticas to anon, authenticated;
