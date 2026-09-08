-- =============================================================================
-- CORREÇÃO: responder questão na Prova do ENEM falhava com
-- "permission denied for table respostas".
--
-- Cole no SQL Editor do Supabase e rode. É idempotente.
--
-- O QUE ACONTECIA
-- O modo prova grava a resposta com `upsert`, e não `insert`, porque lá a
-- pessoa pode voltar numa questão e trocar a alternativa antes de entregar —
-- é uma prova inteira, respondida fora de ordem. `upsert` precisa de UPDATE:
-- ele insere ou atualiza a linha existente.
--
-- Faltavam as duas metades da permissão:
--   1. o GRANT de update em `respostas` (grants.sql concedia só select+insert);
--   2. a policy de RLS para update (schema.sql criava só select e insert).
--
-- Sem isso, NENHUMA resposta de prova era gravada. O simulado por conteúdo não
-- sofria porque usa `insert` puro.
--
-- Por que o `using` e o `with check` são iguais: `using` decide quais linhas a
-- pessoa PODE atualizar, `with check` valida como a linha FICA depois. Aqui a
-- regra é a mesma nos dois lados — a resposta pertence a quem é dono do
-- simulado —, e omitir o `with check` deixaria mover uma resposta para o
-- simulado de outra pessoa.
-- =============================================================================

grant update on public.respostas to authenticated;

drop policy if exists "respostas: atualizar as proprias" on public.respostas;

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
