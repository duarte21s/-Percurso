import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { registrarAtividade } from "@/lib/gamificacao";
import type { Gabarito } from "@/lib/tipos";

export const dynamic = "force-dynamic";

/**
 * POST /api/simulado/responder — grava a resposta e devolve o gabarito.
 *
 * Body: { simuladoId: string, questaoId: string, alternativa: number }
 *
 * O gabarito só sai daqui, depois da resposta gravada. É por isso que a
 * página do simulado não recebe `correta` nem `explicacao` junto das
 * questões: se recebesse, bastaria abrir o DevTools para ver a resposta.
 */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase, user } = sessao;

  const corpo = await request.json().catch(() => null);
  const simuladoId: string | undefined = corpo?.simuladoId;
  const questaoId: string | undefined = corpo?.questaoId;
  const alternativa: number | undefined = corpo?.alternativa;

  if (!simuladoId || !questaoId || typeof alternativa !== "number") {
    return NextResponse.json({ erro: "Requisição incompleta." }, { status: 400 });
  }

  // O RLS já garante que o simulado é desta pessoa; o select confirma que ele
  // existe e ainda está aberto antes de gastar uma escrita.
  const { data: simulado, error: erroSimulado } = await supabase
    .from("simulados")
    .select("id, questao_ids, indice_atual, acertos, erros, status")
    .eq("id", simuladoId)
    .single();

  if (erroSimulado || !simulado) {
    return NextResponse.json({ erro: "Simulado não encontrado." }, { status: 404 });
  }
  if (simulado.status !== "em_andamento") {
    return NextResponse.json({ erro: "Este simulado já foi concluído." }, { status: 409 });
  }
  if (!simulado.questao_ids.includes(questaoId)) {
    return NextResponse.json(
      { erro: "Essa questão não faz parte deste simulado." },
      { status: 400 }
    );
  }

  const { data: questao, error: erroQuestao } = await supabase
    .from("questoes")
    .select("correta, explicacao, opcoes")
    .eq("id", questaoId)
    .single();

  if (erroQuestao || !questao) {
    return NextResponse.json({ erro: "Questão não encontrada." }, { status: 404 });
  }

  const opcoes = questao.opcoes as string[];
  if (alternativa < 0 || alternativa >= opcoes.length) {
    return NextResponse.json({ erro: "Alternativa inválida." }, { status: 400 });
  }

  const acertou = alternativa === questao.correta;

  // unique(simulado_id, questao_id): a segunda resposta para a mesma questão
  // bate no índice e volta 23505. Isso é o que impede refazer depois de ver
  // o gabarito — a trava do front é conveniência, esta é a garantia.
  const { error: erroResposta } = await supabase.from("respostas").insert({
    simulado_id: simuladoId,
    questao_id: questaoId,
    alternativa,
    acertou,
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

  const indice = simulado.questao_ids.indexOf(questaoId);
  const proximo = indice + 1;
  const fim = proximo >= simulado.questao_ids.length;

  const acertos = simulado.acertos + (acertou ? 1 : 0);
  const erros = simulado.erros + (acertou ? 0 : 1);

  await supabase
    .from("simulados")
    .update({
      indice_atual: fim ? simulado.questao_ids.length - 1 : proximo,
      acertos,
      erros,
      status: fim ? "concluido" : "em_andamento",
    })
    .eq("id", simuladoId);

  // Alimenta a Chama de Estudos (1ª questão do dia acende). Silenciosa.
  const recompensa = await registrarAtividade(supabase, "questao");

  const gabarito: Gabarito = {
    correta: questao.correta,
    acertou,
    explicacao: questao.explicacao,
    acertos,
    erros,
    fim,
    recompensa,
  };

  return NextResponse.json(gabarito);
}
