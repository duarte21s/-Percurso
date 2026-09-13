-- =============================================================================
-- vw_estatisticas: contar o que existe, não o que está cadastrado
-- =============================================================================
--
-- A view contava `count(*) from materias` — LINHAS NA TABELA. A tabela tem 17,
-- mas quatro delas (calculo, estatistica, exatas-militar, matematica-fund) são
-- trilhas planejadas, sem uma única questão.
--
-- O resultado é que a página de números anuncia 17 matérias quando só 13 têm
-- questão. Dois números para a mesma coisa:
--
--   17  linhas na tabela          (o que a view diz)
--   13  matérias com questão      (o que existe de fato)
--
-- O seletor de estudo NÃO é o terceiro número: ele recebe TODAS_AS_MATERIAS, as
-- 17, e mostra as quatro vazias com todos os conteúdos sem contagem. Ou seja, a
-- inflação não some ao entrar no produto — ela só muda de lugar.
--
-- Isso contraria a regra que o próprio site anuncia em /apresentacao/honestidade:
-- não anunciar conteúdo que o banco não tenha. Número inflado é a forma mais
-- fácil de quebrar essa promessa, porque ninguém confere.
--
-- MEDIDO EM 13 DE SETEMBRO DE 2026, e a medição corrigiu este texto: ele dizia
-- cinco vazias, 12 com questão e 9 no seletor, e listava `informatica` entre as
-- vazias. Informática básica tem 15 questões, uma por conteúdo, nos 15
-- conteúdos — recebeu-as depois que estas linhas foram escritas, e ninguém
-- voltou aqui. É exatamente o movimento que o parágrafo abaixo previa, só que
-- com outra matéria. Número em comentário envelhece; a consulta, não.
--
-- As quatro linhas vazias NÃO saem da tabela: elas são destino planejado, e ter
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
