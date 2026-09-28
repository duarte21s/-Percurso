import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/**
 * POST /api/prova/avancar — trava a questão atual e move para a próxima.
 *
 * Body: { simuladoId, alternativa?: number | null }
 *
 * A ordem importa e é esta: grava a resposta, só então avança o índice. Se
 * gravar falhar, o índice não sobe e a questão continua sendo a atual — o
 * aluno tenta de novo. O inverso (avançar antes de gravar) perderia a resposta
 * de forma silenciosa e travaria a questão vazia.
 *
 * Quem faz o bloqueio de verdade não é esta rota: é o gatilho
 * `prova_guarda_resposta` no banco, que recusa marcação em qualquer questão
 * que não seja a atual. Esta rota é a porta educada; o gatilho é a fechadura.
 * Sem ele, bastaria chamar o PostgREST direto do DevTools.
 *
 * `alternativa` é opcional porque pular questão em branco é legítimo — no
 * exame também é. A questão trava do mesmo jeito.
 */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase } = sessao;

  const corpo = await request.json().catch(() => null);
  const simuladoId: string | undefined = corpo?.simuladoId;
  const alternativa: number | null =
    typeof corpo?.alternativa === "number" ? corpo.alternativa : null;

  if (!simuladoId) {
    return NextResponse.json({ erro: "Tentativa não informada." }, { status: 400 });
  }

  const { data: simulado } = await supabase
    .from("simulados")
    .select("id, status, indice_atual, questao_ids, prova_id, expira_em")
    .eq("id", simuladoId)
    .maybeSingle();

  if (!simulado || !simulado.prova_id) {
    return NextResponse.json({ erro: "Tentativa não encontrada." }, { status: 404 });
  }
  if (simulado.status !== "em_andamento") {
    return NextResponse.json({ erro: "Esta prova já foi entregue." }, { status: 409 });
  }

  const expiraEm = simulado.expira_em ? new Date(simulado.expira_em).getTime() : null;
  if (expiraEm !== null && Date.now() > expiraEm) {
    await supabase.from("simulados").update({ status: "concluido" }).eq("id", simuladoId);
    return NextResponse.json(
      { erro: "O tempo da prova acabou.", expirada: true },
      { status: 409 }
    );
  }

  const indice = simulado.indice_atual ?? 0;
  const total = simulado.questao_ids.length;
  const questaoId = simulado.questao_ids[indice];

  if (!questaoId) {
    return NextResponse.json({ erro: "Prova já no fim." }, { status: 409 });
  }

  /* 1. A resposta primeiro. Sem gabarito nenhum: numa prova a nota só aparece
     na entrega, e o servidor nem lê `correta` aqui. `questaoId` sai da
     tentativa, não do corpo da requisição. */
  if (alternativa !== null) {
    /* Só `opcoes`, para saber quantas alternativas existem. É coluna pública,
       e não diz nada sobre qual está certa. */
    const { data: questao, error: erroQuestao } = await supabase
      .from("questoes")
      .select("opcoes")
      .eq("id", questaoId)
      .maybeSingle();

    if (erroQuestao || !questao) {
      return NextResponse.json(
        { erro: "Não consegui gravar a resposta. Tente de novo." },
        { status: 500 }
      );
    }

    const opcoes = questao.opcoes as string[];
    if (!Number.isInteger(alternativa) || alternativa < 0 || alternativa >= opcoes.length) {
      return NextResponse.json({ erro: "Alternativa inválida." }, { status: 400 });
    }

    /* `acertou: false` quer dizer "ainda não corrigida" (a coluna é `not
       null`). O acerto de verdade gravado agora ficaria legível pela API do
       Supabase no meio da prova; /api/prova/finalizar compara cada marcação
       com o gabarito na entrega e não depende desta coluna. */
    const { error: erroResposta } = await supabase.from("respostas").upsert(
      {
        simulado_id: simuladoId,
        questao_id: questaoId,
        alternativa,
        acertou: false,
      },
      { onConflict: "simulado_id,questao_id" }
    );

    if (erroResposta) {
      return NextResponse.json({ erro: erroResposta.message }, { status: 400 });
    }
  }

  /* 2. Só agora o índice sobe — e com ele a questão anterior fecha. O gatilho
     exige que o avanço seja de exatamente um, então não há como pular. */
  const proximo = Math.min(indice + 1, total);
  const { error: erroAvanco } = await supabase
    .from("simulados")
    .update({ indice_atual: proximo })
    .eq("id", simuladoId);

  if (erroAvanco) {
    return NextResponse.json({ erro: erroAvanco.message }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    indiceAtual: proximo,
    travadasAte: proximo,
    fim: proximo >= total,
    restanteSegundos:
      expiraEm === null ? null : Math.max(0, Math.floor((expiraEm - Date.now()) / 1000)),
  });
}
