import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/**
 * POST /api/prova/iniciar — abre ou retoma uma prova.
 *
 * Body: { provaId: string, idioma?: "ingles" | "espanhol", recomecar?: boolean }
 *
 * A ordem das questões é congelada em `questao_ids` na criação, como no
 * simulado comum. Aqui isso importa ainda mais: são 180 questões e a pessoa
 * navega livremente entre elas, então a posição na grade precisa ser a mesma
 * amanhã.
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
  const provaId: string | undefined = corpo?.provaId;
  const idioma = corpo?.idioma === "espanhol" ? "espanhol" : "ingles";
  const recomecar = corpo?.recomecar === true;
  const comRedacao = corpo?.comRedacao === true;

  if (!provaId) {
    return NextResponse.json({ erro: "Prova não informada." }, { status: 400 });
  }

  const { data: prova } = await supabase
    .from("provas")
    .select("id")
    .eq("id", provaId)
    .maybeSingle();

  if (!prova) {
    return NextResponse.json({ erro: "Prova não encontrada." }, { status: 404 });
  }

  const { data: aberta } = await supabase
    .from("simulados")
    .select("id, questao_ids, acertos, erros, segundos")
    .eq("prova_id", provaId)
    .eq("status", "em_andamento")
    .maybeSingle();

  if (aberta && !recomecar) {
    return NextResponse.json({ simuladoId: aberta.id, retomado: true });
  }

  /* Recomeçar fecha a anterior em vez de apagar: o índice único permite uma
     prova em andamento por vez, e o histórico de tentativas tem valor — dá
     para comparar a nota de hoje com a de duas semanas atrás. */
  if (aberta && recomecar) {
    await supabase
      .from("simulados")
      .update({ status: "concluido" })
      .eq("id", aberta.id);
  }

  const { data: questoes } = await supabase
    .from("questoes")
    .select("id")
    .eq("prova_id", provaId)
    .in("idioma", ["", idioma])
    .order("numero", { ascending: true });

  const ids = (questoes ?? []).map((q) => q.id as string);
  if (ids.length === 0) {
    return NextResponse.json(
      { erro: "Essa prova ainda não foi importada." },
      { status: 409 }
    );
  }

  const { data: nova, error } = await supabase
    .from("simulados")
    .insert({
      usuario_id: user.id,
      materia_filtro: "todas",
      prova_id: provaId,
      questao_ids: ids,
      com_redacao: comRedacao,
    })
    .select("id")
    .single();

  if (error || !nova) {
    return NextResponse.json(
      { erro: error?.message ?? "Não consegui abrir a prova." },
      { status: 500 }
    );
  }

  return NextResponse.json({ simuladoId: nova.id, retomado: false });
}
