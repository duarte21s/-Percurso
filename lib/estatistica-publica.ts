import "server-only";
import { criaClienteAdmin } from "@/lib/supabase/admin";
import { situacaoDaSessao } from "@/lib/situacao-sessao";
import type { Simulado } from "@/lib/tipos";

/**
 * Acertos e questões corrigidas de uma pessoa, para o aproveitamento do perfil
 * público.
 *
 * A view `vw_estat_usuario` conta acertos por `respostas.acertou`, e essa
 * coluna deixou de ser confiável fora de sessão com resultado: durante a
 * resolução ela entra `false` ("ainda não corrigida"), sessão de estudo
 * abandonada nunca é corrigida, e resposta de prova não pode ser regravada
 * depois da entrega (gatilho `prova_guarda_resposta`). Contar por ela faria o
 * aproveitamento cair a cada prova feita — e, no meio de uma sessão, subir ou
 * não subir denunciaria o acerto.
 *
 * Aqui a conta sai das sessões COM resultado, os mesmos números da aba
 * Desempenho: `simulados.acertos` e `erros`, que só existem depois da
 * correção. O perfil de outra pessoa não passa pela RLS de `simulados`, por
 * isso a leitura é pela service role. É a exceção estreita à regra de
 * lib/supabase/admin.ts: só estas colunas, de um usuário, e só as somas saem
 * daqui — o mesmo que a view já expunha.
 *
 * Sem a chave, devolve null e quem chama cai na view.
 */
export async function acertosCorrigidos(
  usuarioId: string
): Promise<{ acertos: number; corrigidas: number } | null> {
  const admin = criaClienteAdmin();
  if (!admin) return null;

  const { data, error } = await admin
    .from("simulados")
    .select("status, prova_id, acertos, erros, questao_ids, expira_em, finalizado_em")
    .eq("usuario_id", usuarioId)
    .eq("status", "concluido");

  if (error || !data) return null;

  let acertos = 0;
  let corrigidas = 0;
  for (const s of data as Pick<
    Simulado,
    "status" | "prova_id" | "acertos" | "erros" | "questao_ids" | "expira_em" | "finalizado_em"
  >[]) {
    if (!situacaoDaSessao(s).temPlacar) continue;
    acertos += s.acertos ?? 0;
    corrigidas += (s.acertos ?? 0) + (s.erros ?? 0);
  }
  return { acertos, corrigidas };
}
