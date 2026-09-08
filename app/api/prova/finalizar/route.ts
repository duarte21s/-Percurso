import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import type { AreaEnem, CorrecaoQuestao, ResultadoProva } from "@/lib/tipos";

export const dynamic = "force-dynamic";

/**
 * POST /api/prova/finalizar — entrega a prova e devolve a correção.
 *
 * Body: { simuladoId: string }
 *
 * Este é o único ponto do modo prova em que o gabarito sai do servidor, e ele
 * só sai depois de a prova estar marcada como concluída. A ordem das duas
 * escritas importa: fechar primeiro, corrigir depois. Se fosse ao contrário e
 * a requisição morresse no meio, a pessoa teria o gabarito com a prova ainda
 * aberta para responder.
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
  if (!simuladoId) {
    return NextResponse.json({ erro: "Prova não informada." }, { status: 400 });
  }

  const { data: simulado } = await supabase
    .from("simulados")
    .select("id, questao_ids, status, prova_id")
    .eq("id", simuladoId)
    .maybeSingle();

  if (!simulado || !simulado.prova_id) {
    return NextResponse.json({ erro: "Prova não encontrada." }, { status: 404 });
  }

  const ids = simulado.questao_ids as string[];

  const [{ data: questoes }, { data: respostas }] = await Promise.all([
    supabase
      .from("questoes")
      .select("id, numero, area, correta")
      .in("id", ids),
    supabase
      .from("respostas")
      .select("questao_id, alternativa")
      .eq("simulado_id", simuladoId),
  ]);

  const marcadas = new Map<string, number>();
  for (const r of respostas ?? []) {
    marcadas.set(r.questao_id as string, r.alternativa as number);
  }

  const correcao: CorrecaoQuestao[] = (questoes ?? [])
    .map((q) => {
      const marcada = marcadas.get(q.id as string) ?? null;
      return {
        questao_id: q.id as string,
        numero: q.numero as number,
        area: (q.area as AreaEnem | null) ?? null,
        marcada,
        correta: q.correta as number,
        acertou: marcada !== null && marcada === q.correta,
      };
    })
    .sort((a, b) => a.numero - b.numero);

  const acertos = correcao.filter((c) => c.acertou).length;
  const embranco = correcao.filter((c) => c.marcada === null).length;
  const erros = correcao.length - acertos - embranco;

  const porAreaMapa = new Map<AreaEnem, { acertos: number; total: number }>();
  for (const c of correcao) {
    if (!c.area) continue;
    const atual = porAreaMapa.get(c.area) ?? { acertos: 0, total: 0 };
    atual.total += 1;
    if (c.acertou) atual.acertos += 1;
    porAreaMapa.set(c.area, atual);
  }

  // Fecha antes de responder — ver o comentário no topo.
  if (simulado.status === "em_andamento") {
    await supabase
      .from("simulados")
      .update({ status: "concluido", acertos, erros })
      .eq("id", simuladoId);
  }

  const resultado: ResultadoProva = {
    acertos,
    erros,
    embranco,
    total: correcao.length,
    porArea: [...porAreaMapa.entries()].map(([area, v]) => ({ area, ...v })),
    correcao,
  };

  return NextResponse.json(resultado);
}
