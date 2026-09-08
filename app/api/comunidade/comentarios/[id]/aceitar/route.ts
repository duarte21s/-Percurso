import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/** POST /api/comunidade/comentarios/[id]/aceitar — o dono da pergunta aceita
 *  este comentário como a resposta. A checagem de "é o dono do post" está no
 *  RPC `aceitar_resposta` (security definer), não aqui. */
export async function POST(
  _request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase } = sessao;

  const { id } = await ctx.params;
  const { error } = await supabase.rpc("aceitar_resposta", { p_comentario_id: id });

  if (error) {
    return NextResponse.json(
      { erro: "Só quem fez a pergunta pode aceitar uma resposta." },
      { status: 403 }
    );
  }
  return NextResponse.json({ ok: true });
}
