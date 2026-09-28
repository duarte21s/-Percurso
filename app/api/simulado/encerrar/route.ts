import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { encerraSessaoDeTreino } from "@/lib/resultado-sessao";

export const dynamic = "force-dynamic";

/**
 * POST /api/simulado/encerrar — fecha a sessão de estudo aberta.
 *
 * Sem corpo: fecha a sessão avulsa da pessoa logada, seja ela qual for. Existe
 * porque o índice único permite só uma aberta por vez, e sem uma saída a
 * pessoa ficaria presa numa sessão que não quer terminar, sem conseguir
 * escolher outro conteúdo.
 *
 * Encerrar no meio é abandonar: a sessão fecha sem correção e sem gabarito.
 * Se todas as questões já tinham resposta, ela é corrigida antes de fechar e
 * o resultado continua disponível. As regras moram em `encerraSessaoDeTreino`,
 * que /api/simulado também usa ao abrir uma sessão nova.
 */
export async function POST() {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }

  const fechou = await encerraSessaoDeTreino(sessao.supabase, sessao.user.id);
  if (!fechou.ok) {
    return NextResponse.json({ erro: fechou.erro }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
