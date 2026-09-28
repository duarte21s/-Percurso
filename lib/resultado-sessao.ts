import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import { criaClienteAdmin } from "@/lib/supabase/admin";
import type { ItemResultado, ResultadoSessao } from "@/lib/tipos";

/* =========================================================================
   O resultado de uma sessão de estudo (o treino por matéria).

   Durante a sessão, a resposta é gravada SEM correção: `respostas.acertou`
   entra `false`, que aqui quer dizer "ainda não corrigida", e os contadores
   de acertos e erros de `simulados` ficam em zero. O servidor nem lê o
   gabarito nessa hora. E o navegador, que consegue ler as próprias linhas de
   `respostas` e `simulados` pela API do Supabase, não tem o que deduzir.

   A correção acontece aqui, quando TODAS as questões da sessão têm resposta.
   Sessão encerrada antes disso é abandonada: nunca é corrigida e nunca mostra
   gabarito.

   O `false` provisório existe porque `respostas.acertou` é `not null`, e esta
   mudança não mexe no banco. Enquanto isso, quem lê a coluna (a view de
   estatística pública) só pode confiar nela em sessão finalizada.
   ========================================================================= */

export type Correcao =
  | { ok: true; resultado: ResultadoSessao }
  | { ok: false; status: number; erro: string; faltam?: number };

interface LinhaSimulado {
  id: string;
  questao_ids: string[] | null;
  status: "em_andamento" | "concluido";
  prova_id: string | null;
  acertos: number;
  erros: number;
}

interface LinhaResposta {
  questao_id: string;
  alternativa: number;
}

interface LinhaQuestao {
  id: string;
  fonte: string | null;
  enunciado: string;
  opcoes: string[];
  correta: number;
  explicacao: string | null;
}

/**
 * Corrige a sessão e, com `gravar`, registra a correção: contadores e
 * `concluido` em `simulados`, e `acertou` em cada resposta.
 *
 * A ordem segue a regra do cliente admin: de quem é a sessão e o que já foi
 * respondido se decide pelo cliente de sessão, onde a RLS vale. Só depois, e
 * só com a sessão completa, o gabarito é lido com a service role.
 */
export async function corrigeSessaoDeTreino(
  supabase: SupabaseClient,
  simuladoId: string,
  { gravar }: { gravar: boolean }
): Promise<Correcao> {
  const { data: simulado } = await supabase
    .from("simulados")
    .select("id, questao_ids, status, prova_id, acertos, erros")
    .eq("id", simuladoId)
    .maybeSingle();

  if (!simulado) return { ok: false, status: 404, erro: "Sessão não encontrada." };
  const s = simulado as LinhaSimulado;
  if (s.prova_id) {
    return { ok: false, status: 400, erro: "A prova do ENEM tem correção própria, na entrega." };
  }

  const { data: respostas, error: erroRespostas } = await supabase
    .from("respostas")
    .select("questao_id, alternativa")
    .eq("simulado_id", simuladoId);

  if (erroRespostas) {
    return { ok: false, status: 500, erro: "Não consegui ler suas respostas agora. Tente de novo." };
  }

  const marcadas = new Map<string, number>();
  for (const r of (respostas ?? []) as LinhaResposta[]) marcadas.set(r.questao_id, r.alternativa);

  const ids = s.questao_ids ?? [];
  const faltam = ids.filter((id) => !marcadas.has(id)).length;

  /* O portão. Sem todas as respostas não há correção, nem parcial: o que
     volta é só quantas faltam. Sessão já encerrada e incompleta foi
     abandonada, e abandonar não abre o gabarito. */
  if (ids.length === 0 || faltam > 0) {
    return {
      ok: false,
      status: 409,
      faltam,
      erro:
        s.status === "em_andamento"
          ? `${faltam === 1 ? "Falta 1 questão" : `Faltam ${faltam} questões`}. O resultado aparece quando você responder todas.`
          : "Esta sessão foi encerrada antes do fim. O gabarito só aparece para quem responde todas as questões.",
    };
  }

  const admin = criaClienteAdmin();
  if (!admin) {
    return {
      ok: false,
      status: 503,
      erro: "A correção está indisponível agora. Suas respostas estão salvas; tente de novo em instantes.",
    };
  }

  const { data: questoes, error: erroQuestoes } = await admin
    .from("questoes")
    .select("id, fonte, enunciado, opcoes, correta, explicacao")
    .in("id", ids);

  if (erroQuestoes || !questoes) {
    return { ok: false, status: 500, erro: "Não consegui corrigir agora. Suas respostas estão salvas; tente de novo." };
  }

  // `questao_ids` é a ordem que vale; o `in` devolve em ordem arbitrária.
  const porId = new Map((questoes as LinhaQuestao[]).map((q) => [q.id, q]));
  const itens: ItemResultado[] = ids.flatMap((id, indice) => {
    const q = porId.get(id);
    const marcada = marcadas.get(id);
    if (!q || marcada === undefined) return [];
    return [
      {
        numero: indice + 1,
        questaoId: id,
        fonte: q.fonte ?? "",
        enunciado: q.enunciado,
        opcoes: q.opcoes,
        marcada,
        correta: q.correta,
        acertou: marcada === q.correta,
        explicacao: q.explicacao ?? "",
      },
    ];
  });

  const acertos = itens.filter((i) => i.acertou).length;
  const erros = itens.length - acertos;

  if (gravar) {
    /* Corrige uma vez só. Sessão já corrigida — encerrada com os contadores
       somando o total — não é recorrigida: sem isso, trocar uma resposta pela
       API depois de ver o gabarito e pedir o resultado de novo reescreveria a
       nota. */
    const jaCorrigida = s.status === "concluido" && s.acertos + s.erros === ids.length;
    if (!jaCorrigida) {
      const { error: erroFechar } = await supabase
        .from("simulados")
        .update({
          status: "concluido",
          acertos,
          erros,
          indice_atual: Math.max(0, ids.length - 1),
        })
        .eq("id", simuladoId);

      /* Não fechou, não entrega: o gabarito não sai com a sessão ainda aberta. */
      if (erroFechar) {
        return { ok: false, status: 500, erro: "Não consegui finalizar a sessão agora. Tente de novo." };
      }

      /* `acertou` nas respostas, para quem lê a tabela. Duas escritas, não uma
         por questão. Uma falha aqui não tira o resultado de ninguém: a nota da
         sessão já está gravada em `simulados`. */
      const certas = itens.filter((i) => i.acertou).map((i) => i.questaoId);
      const erradas = itens.filter((i) => !i.acertou).map((i) => i.questaoId);
      if (certas.length > 0) {
        await supabase
          .from("respostas")
          .update({ acertou: true })
          .eq("simulado_id", simuladoId)
          .in("questao_id", certas);
      }
      if (erradas.length > 0) {
        await supabase
          .from("respostas")
          .update({ acertou: false })
          .eq("simulado_id", simuladoId)
          .in("questao_id", erradas);
      }
    }
  }

  return {
    ok: true,
    resultado: {
      itens,
      acertos,
      erros,
      total: itens.length,
      percentual: itens.length > 0 ? Math.round((acertos / itens.length) * 100) : 0,
    },
  };
}

/**
 * Fecha a sessão de estudo aberta da pessoa, se houver.
 *
 * Completa (todas respondidas) é corrigida antes de fechar: responder tudo é
 * finalizar o conteúdo, e o resultado fica disponível depois. Incompleta
 * fecha sem correção — foi abandonada, e fica sem gabarito para sempre.
 *
 * `prova_id is null` é obrigatório: prova do ENEM também é uma linha
 * `em_andamento` em `simulados`, e fechá-la aqui apagaria o progresso de quem
 * está no meio das 180 questões.
 */
export async function encerraSessaoDeTreino(
  supabase: SupabaseClient,
  usuarioId: string
): Promise<{ ok: true } | { ok: false; erro: string }> {
  const { data: abertas, error } = await supabase
    .from("simulados")
    .select("id")
    .eq("usuario_id", usuarioId)
    .eq("status", "em_andamento")
    .is("prova_id", null);

  if (error) return { ok: false, erro: error.message };

  for (const { id } of (abertas ?? []) as { id: string }[]) {
    const correcao = await corrigeSessaoDeTreino(supabase, id, { gravar: true });
    if (correcao.ok) continue;

    /* Incompleta, ou sem como corrigir agora: fecha sem nota. Se estava
       completa e só faltou a chave, a correção acontece na primeira vez que a
       pessoa pedir o resultado — `corrigeSessaoDeTreino` reconhece a sessão
       fechada e ainda sem contadores. */
    const { error: erroFechar } = await supabase
      .from("simulados")
      .update({ status: "concluido" })
      .eq("id", id);
    if (erroFechar) return { ok: false, erro: erroFechar.message };
  }

  return { ok: true };
}
