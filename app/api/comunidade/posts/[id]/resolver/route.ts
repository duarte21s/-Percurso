import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/** POST /api/comunidade/posts/[id]/resolver — o dono da pergunta marca/desmarca
 *  como resolvida. Body: { resolvido: boolean }. */
export async function POST(
  request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const { id } = await ctx.params;
  const corpo = await request.json().catch(() => ({}));
  const resolvido = corpo?.resolvido !== false;

  const { data, error } = await supabase
    .from("com_posts")
    .update({ resolvido })
    .eq("id", id)
    .eq("autor_id", user.id)
    .select("id");

  if (error) return NextResponse.json({ erro: error.message }, { status: 400 });
  if (!data || data.length === 0) {
    return NextResponse.json({ erro: "Post não encontrado." }, { status: 404 });
  }
  return NextResponse.json({ ok: true, resolvido });
}
