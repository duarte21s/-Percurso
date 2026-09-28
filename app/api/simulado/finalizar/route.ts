import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { corrigeSessaoDeTreino } from "@/lib/resultado-sessao";

export const dynamic = "force-dynamic";

/**
 * POST /api/simulado/finalizar — corrige a sessão de estudo e devolve o
 * resultado inteiro: a resposta marcada, a certa, o acerto e a explicação de
 * cada questão, mais o total e o percentual.
 *
 * Body: { simuladoId: string }
 *
 * É a única porta por onde o gabarito de uma sessão de estudo sai, e ela só
 * abre com TODAS as questões respondidas. Antes disso volta 409 com quantas
 * faltam e nenhum dado de correção. Pedir de novo numa sessão já finalizada
 * devolve o mesmo resultado, sem recorrigir.
 */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }

  const corpo = await request.json().catch(() => null);
  const simuladoId: unknown = corpo?.simuladoId;
  if (typeof simuladoId !== "string" || !simuladoId) {
    return NextResponse.json({ erro: "Sessão não informada." }, { status: 400 });
  }

  const correcao = await corrigeSessaoDeTreino(sessao.supabase, simuladoId, { gravar: true });
  if (!correcao.ok) {
    return NextResponse.json(
      { erro: correcao.erro, ...(correcao.faltam !== undefined ? { faltam: correcao.faltam } : {}) },
      { status: correcao.status }
    );
  }

  return NextResponse.json(correcao.resultado);
}
