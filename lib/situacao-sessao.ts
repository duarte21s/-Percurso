import type { Simulado } from "@/lib/tipos";

/**
 * Como uma sessão aparece no histórico.
 *
 * O placar só existe onde há resultado. Sessão em andamento ainda não foi
 * corrigida, e mostrar acertos ali entregaria o resultado no meio da
 * resolução. Sessão de estudo encerrada antes do fim foi abandonada e não tem
 * correção. Prova do ENEM tem resultado quando foi entregue ou quando o tempo
 * acabou — ver `provaAbreGabarito`.
 *
 * "Tem resultado" em sessão de estudo quer dizer: os contadores somam o total
 * de questões — é assim que `corrigeSessaoDeTreino` deixa a sessão ao
 * finalizar. Sessões antigas, corrigidas questão a questão, também chegam lá
 * quando foram até o fim.
 */
export interface Situacao {
  rotulo: string;
  /** Acertos e erros podem aparecer, e entram nas contas de aproveitamento. */
  temPlacar: boolean;
  /** Sessão de estudo finalizada: o resultado completo pode ser reaberto. */
  resultadoEmQuestoes: boolean;
  emAndamento: boolean;
}

type ResumoProva = Pick<Simulado, "status" | "acertos" | "erros" | "expira_em" | "finalizado_em">;

/**
 * Se uma tentativa de prova encerrada tem resultado — e portanto gabarito.
 *
 * Tem quando foi entregue ou quando o tempo acabou. Entregue quer dizer
 * corrigida na entrega: /api/prova/finalizar grava acertos e erros ao fechar.
 * Vencida quer dizer encerrada depois de `expira_em`, como no dia da prova.
 *
 * Encerrada ANTES do fim do tempo e sem nota não foi entregue: foi deixada
 * para trás. Como a sessão de estudo abandonada, fica sem gabarito. A mesma
 * regra vale para o histórico, para /api/prova/finalizar e para
 * /api/questoes/explicar.
 *
 * Custo conhecido: prova entregue inteira em branco também fecha sem nota
 * antes do tempo. Ela vê a correção na entrega, mas não ao ser reaberta.
 */
export function provaAbreGabarito(s: ResumoProva): boolean {
  if (s.status !== "concluido") return false;
  if ((s.acertos ?? 0) + (s.erros ?? 0) > 0) return true;
  if (!s.expira_em || !s.finalizado_em) return false;
  return Date.parse(s.finalizado_em) >= Date.parse(s.expira_em);
}

type Resumo = Pick<Simulado, "status" | "prova_id" | "acertos" | "erros" | "questao_ids"> &
  Partial<Pick<Simulado, "expira_em" | "finalizado_em">>;

export function situacaoDaSessao(s: Resumo): Situacao {
  if (s.status === "em_andamento") {
    return { rotulo: "Em andamento", temPlacar: false, resultadoEmQuestoes: false, emAndamento: true };
  }
  if (s.prova_id) {
    return provaAbreGabarito(s)
      ? { rotulo: "Entregue", temPlacar: true, resultadoEmQuestoes: false, emAndamento: false }
      : { rotulo: "Encerrada sem entrega", temPlacar: false, resultadoEmQuestoes: false, emAndamento: false };
  }
  const total = s.questao_ids?.length ?? 0;
  if (total > 0 && (s.acertos ?? 0) + (s.erros ?? 0) >= total) {
    return { rotulo: "Concluído", temPlacar: true, resultadoEmQuestoes: true, emAndamento: false };
  }
  return { rotulo: "Encerrado antes do fim", temPlacar: false, resultadoEmQuestoes: false, emAndamento: false };
}
