import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "./config";

/**
 * Cliente com a service role. Só existe no servidor.
 *
 * Serve para uma coisa: ler do acervo o que a chave anon não vai mais ler — o
 * gabarito (`questoes.correta`) e a explicação (`questoes.explicacao`). A
 * service role passa por cima da RLS inteira, então a regra de uso é estreita:
 *
 *   1. Quem é a pessoa, de quem é a tentativa e o que ela já respondeu se
 *      decide ANTES, com o cliente de sessão, onde a RLS vale.
 *   2. Este cliente só lê o acervo compartilhado (`questoes`, `vw_temas`),
 *      pelos ids que o passo 1 validou. Não escreve, e não toca dado de
 *      usuário.
 *
 * `server-only` faz o build falhar se um Client Component importar este
 * arquivo. A chave não tem `NEXT_PUBLIC_` e por isso também não entraria no
 * bundle — são duas travas, e a primeira avisa mais cedo.
 *
 * Sem a chave, devolve null, como `criaClienteServidor` faz sem Supabase:
 * quem chama decide o que fazer. O log existe para a falta não passar calada.
 */
export function criaClienteAdmin(): SupabaseClient | null {
  const chave = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  if (!SUPABASE_URL || !chave) {
    console.error(
      "[admin] SUPABASE_SERVICE_ROLE_KEY ausente: gabarito, explicação e contagens do acervo ficam sem leitor."
    );
    return null;
  }

  return createClient(SUPABASE_URL, chave, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

/**
 * O leitor das consultas que CONTAM e SORTEIAM o acervo: as contagens das
 * telas de matéria e o sorteio de /api/simulado. Elas filtram por
 * `explicacao <> ''`, e filtrar por uma coluna exige poder lê-la. Nenhuma
 * devolve texto de questão — só ids, matéria, tema e números.
 *
 * Sem a chave, cai no cliente de sessão. Isso conta certo enquanto
 * `explicacao` for legível por authenticated; depois que a coluna sair, esse
 * caminho conta zero. As rotas de gabarito NÃO usam este fallback: sem a
 * chave, elas respondem 503.
 */
export function leitorDoAcervo(sessao: SupabaseClient): SupabaseClient {
  return criaClienteAdmin() ?? sessao;
}
