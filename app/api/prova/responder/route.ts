import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { registrarAtividade } from "@/lib/gamificacao";

export const dynamic = "force-dynamic";

/**
 * POST /api/prova/responder — grava uma marcação, sem devolver gabarito.
 *
 * Body: { simuladoId, questaoId, alternativa, segundos? }
 *
 * Esta é a diferença central em relação a /api/simulado/responder. No simulado
 * de treino o gabarito abre logo abaixo da alternativa marcada, porque a ideia
 * é aprender questão a questão. Numa prova é o contrário: você responde as 180
 * sem saber de nada e só depois descobre a nota — como no exame de verdade.
 * Por isso a resposta desta rota é só a contagem do que já foi marcado.
 *
 * A pessoa pode trocar de ideia enquanto a prova está aberta, então aqui há
 * upsert em vez do insert-que-falha-na-segunda-vez do simulado de treino.
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
  const alternativa: number | null | undefined = corpo?.alternativa;
  const segundos: number = Number.isFinite(corpo?.segundos)
    ? Math.max(0, Math.floor(corpo.segundos))
    : 0;

  /* `alternativa: null` é "desmarcar". Antes o botão Desmarcar só apagava a
     bolinha na tela e não falava com o servidor: a linha continuava em
     `respostas`, e a correção de /finalizar somava a alternativa antiga como
     se ela ainda estivesse marcada. Um F5 já denunciava — a marcação voltava. */
  const desmarcar = alternativa === null;

  if (!simuladoId || !questaoId || (!desmarcar && typeof alternativa !== "number")) {
    return NextResponse.json({ erro: "Requisição incompleta." }, { status: 400 });
  }

  const { data: simulado } = await supabase
    .from("simulados")
    .select("id, questao_ids, status, prova_id, indice_atual, expira_em")
    .eq("id", simuladoId)
    .maybeSingle();

  if (!simulado || !simulado.prova_id) {
    return NextResponse.json({ erro: "Prova não encontrada." }, { status: 404 });
  }
  if (simulado.status !== "em_andamento") {
    return NextResponse.json({ erro: "Esta prova já foi entregue." }, { status: 409 });
  }
  if (!simulado.questao_ids.includes(questaoId)) {
    return NextResponse.json(
      { erro: "Essa questão não faz parte desta prova." },
      { status: 400 }
    );
  }

  /* Bloqueio progressivo: só a questão atual aceita marcação. Antes esta rota
     usava upsert justamente para permitir voltar e trocar — era o
     comportamento desejado quando a prova imitava o exame, onde dá para
     revisar. A regra agora é outra: avançou, travou.

     Esta checagem é conveniência, não segurança. Quem realmente barra é o
     gatilho `prova_guarda_resposta` no banco, porque o navegador tem a chave
     anon e poderia falar com o PostgREST sem passar por aqui. */
  if (simulado.questao_ids[simulado.indice_atual ?? 0] !== questaoId) {
    return NextResponse.json(
      { erro: "Essa questão já foi fechada." },
      { status: 409 }
    );
  }

  const venceEm = simulado.expira_em ? new Date(simulado.expira_em).getTime() : null;
  if (venceEm !== null && Date.now() > venceEm) {
    await supabase.from("simulados").update({ status: "concluido" }).eq("id", simuladoId);
    return NextResponse.json(
      { erro: "O tempo da prova acabou.", expirada: true },
      { status: 409 }
    );
  }

  /* Desmarcar não precisa da questão nem grava resposta: apaga a linha e
     devolve. O delete é seguro por RLS — só alcança simulado do próprio dono. */
  if (desmarcar) {
    const { error: erroDel } = await supabase
      .from("respostas")
      .delete()
      .eq("simulado_id", simuladoId)
      .eq("questao_id", questaoId);

    if (erroDel) {
      return NextResponse.json({ erro: erroDel.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true, desmarcada: true });
  }

  const { data: questao } = await supabase
    .from("questoes")
    .select("correta, opcoes")
    .eq("id", questaoId)
    .maybeSingle();

  if (!questao) {
    return NextResponse.json({ erro: "Questão não encontrada." }, { status: 404 });
  }

  const opcoes = questao.opcoes as string[];
  if (alternativa < 0 || alternativa >= opcoes.length) {
    return NextResponse.json({ erro: "Alternativa inválida." }, { status: 400 });
  }

  /* `acertou` é gravado agora porque a correção precisa dele, mas não volta na
     resposta desta rota. Vale saber: uma pessoa determinada consegue ler as
     próprias linhas de `respostas` pela API do Supabase e deduzir o acerto
     antes do fim. Numa ferramenta de autoestudo isso é trapacear contra si
     mesma, e o preço de impedir seria não conseguir montar a grade de
     navegação ao recarregar a página. */
  const { error } = await supabase.from("respostas").upsert(
    {
      simulado_id: simuladoId,
      questao_id: questaoId,
      alternativa,
      acertou: alternativa === questao.correta,
    },
    { onConflict: "simulado_id,questao_id" }
  );

  if (error) {
    return NextResponse.json({ erro: error.message }, { status: 500 });
  }

  const { count } = await supabase
    .from("respostas")
    .select("*", { count: "exact", head: true })
    .eq("simulado_id", simuladoId);

  await supabase
    .from("simulados")
    .update({ ultima_atividade_em: new Date().toISOString() })
    .eq("id", simuladoId);

  const recompensa = await registrarAtividade(supabase, "prova");

  return NextResponse.json({
    respondidas: count ?? 0,
    total: simulado.questao_ids.length,
    recompensa,
  });
}
