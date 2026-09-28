import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { registrarAtividade } from "@/lib/gamificacao";
import type { RespostaRegistrada } from "@/lib/tipos";

export const dynamic = "force-dynamic";

/**
 * POST /api/simulado/responder — grava a resposta e confirma. Só isso.
 *
 * Body: { simuladoId: string, questaoId: string, alternativa: number }
 *
 * Não volta gabarito, acerto, explicação nem placar, e o servidor nem lê
 * `correta`: a sessão só é corrigida em /api/simulado/finalizar, quando todas
 * as questões têm resposta. Até lá, a resposta entra com `acertou: false`,
 * que quer dizer "ainda não corrigida" (a coluna é `not null`), e os
 * contadores de acertos e erros de `simulados` ficam parados. Gravar o acerto
 * de verdade agora deixaria o resultado ao alcance de quem lê as próprias
 * linhas pela API do Supabase.
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
  const questaoId: string | undefined = corpo?.questaoId;
  const alternativa: number | undefined = corpo?.alternativa;

  if (!simuladoId || !questaoId || !Number.isInteger(alternativa)) {
    return NextResponse.json({ erro: "Requisição incompleta." }, { status: 400 });
  }

  // O RLS já garante que o simulado é desta pessoa; o select confirma que ele
  // existe, é de estudo e ainda está aberto antes de gastar uma escrita.
  const { data: simulado, error: erroSimulado } = await supabase
    .from("simulados")
    .select("id, questao_ids, status, prova_id")
    .eq("id", simuladoId)
    .single();

  if (erroSimulado || !simulado) {
    return NextResponse.json({ erro: "Sessão não encontrada." }, { status: 404 });
  }
  if (simulado.prova_id) {
    return NextResponse.json(
      { erro: "Questão de prova do ENEM se responde pela prova." },
      { status: 400 }
    );
  }
  if (simulado.status !== "em_andamento") {
    return NextResponse.json({ erro: "Esta sessão já foi encerrada." }, { status: 409 });
  }

  const ids = (simulado.questao_ids ?? []) as string[];
  if (!ids.includes(questaoId)) {
    return NextResponse.json(
      { erro: "Essa questão não faz parte desta sessão." },
      { status: 400 }
    );
  }

  /* Só `opcoes`, para saber quantas alternativas existem. É coluna pública —
     a própria página lê as questões pelo cliente de sessão — e não diz nada
     sobre qual está certa. */
  const { data: questao, error: erroQuestao } = await supabase
    .from("questoes")
    .select("opcoes")
    .eq("id", questaoId)
    .single();

  if (erroQuestao || !questao) {
    return NextResponse.json({ erro: "Questão não encontrada." }, { status: 404 });
  }

  const opcoes = questao.opcoes as string[];
  if ((alternativa as number) < 0 || (alternativa as number) >= opcoes.length) {
    return NextResponse.json({ erro: "Alternativa inválida." }, { status: 400 });
  }

  // unique(simulado_id, questao_id): a segunda resposta para a mesma questão
  // bate no índice e volta 23505. A trava da tela é conveniência; esta é a
  // garantia de que a resposta registrada não muda.
  const { error: erroResposta } = await supabase.from("respostas").insert({
    simulado_id: simuladoId,
    questao_id: questaoId,
    alternativa,
    acertou: false,
  });

  if (erroResposta) {
    if (erroResposta.code === "23505") {
      return NextResponse.json(
        { erro: "Você já respondeu essa questão." },
        { status: 409 }
      );
    }
    return NextResponse.json({ erro: erroResposta.message }, { status: 500 });
  }

  const { count } = await supabase
    .from("respostas")
    .select("*", { count: "exact", head: true })
    .eq("simulado_id", simuladoId);

  const total = ids.length;
  const respondidas = Math.min(count ?? 0, total);
  const fim = respondidas >= total;

  /* Só a posição anda — é ela que a retomada usa. O status continua
     `em_andamento` até a finalização, inclusive depois da última questão. */
  await supabase
    .from("simulados")
    .update({ indice_atual: Math.min(ids.indexOf(questaoId) + 1, total - 1) })
    .eq("id", simuladoId);

  // Alimenta a Chama de Estudos (1ª questão do dia acende). Não depende de acerto.
  const recompensa = await registrarAtividade(supabase, "questao");

  const registrada: RespostaRegistrada = {
    registrada: true,
    respondidas,
    total,
    fim,
    ...(recompensa ? { recompensa } : {}),
  };

  return NextResponse.json(registrada);
}
