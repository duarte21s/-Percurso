-- =============================================================================
-- Só os GRANTs, para quem já rodou o schema.sql antes desta correção.
-- Cole no SQL Editor do Supabase e rode. É idempotente.
--
-- Se você for rodar o schema.sql inteiro de novo, não precisa deste arquivo:
-- ele já está incluído lá.
-- =============================================================================

grant usage on schema public to anon, authenticated, service_role;

grant select on public.materias        to anon, authenticated;
grant select on public.questoes        to anon, authenticated;
grant select on public.vw_estatisticas to anon, authenticated;
-- A contagem por conteúdo. Sem ela o seletor de assuntos desabilita quase tudo:
-- o caminho de reserva esbarra no teto de 1.000 linhas do PostgREST e só
-- enxerga 20 dos 141 temas. Ver supabase/grants-temas.sql.
grant select on public.vw_temas        to anon, authenticated;

grant select, update         on public.perfis     to authenticated;
grant select, insert, update on public.simulados  to authenticated;
-- update é obrigatório: o modo prova grava com `upsert`, que atualiza a linha
-- quando a pessoa troca a alternativa antes de entregar. Sem ele, responder
-- questão de prova falha com "permission denied for table respostas".
grant select, insert, update on public.respostas  to authenticated;

grant insert on public.questoes to authenticated;

grant all on all tables    in schema public to service_role;
grant all on all sequences in schema public to service_role;
