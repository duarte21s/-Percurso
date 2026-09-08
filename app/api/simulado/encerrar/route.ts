import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/**
 * POST /api/simulado/encerrar — fecha a sessão de estudo aberta.
 *
 * Sem corpo: fecha a sessão avulsa da pessoa logada, seja ela qual for. Existe
 * porque o índice único permite só uma aberta por vez, e sem uma saída a
 * pessoa ficaria presa numa sessão que não quer terminar, sem conseguir
 * escolher outro conteúdo.
 *
 * `prova_id is null` é obrigatório: prova do ENEM também é uma linha em
 * `simulados` com status 'em_andamento', e fechá-la aqui apagaria o progresso
 * de quem está no meio das 180 questões.
 */
export async function POST() {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase, user } = sessao;

  const { error } = await supabase
    .from("simulados")
    .update({ status: "concluido" })
    .eq("usuario_id", user.id)
    .eq("status", "em_andamento")
    .is("prova_id", null);

  if (error) {
    return NextResponse.json({ erro: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
