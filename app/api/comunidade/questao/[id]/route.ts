import { NextResponse } from "next/server";
import { criaClienteServidor } from "@/lib/supabase/server";
import { buscarDiscussaoQuestao } from "@/lib/comunidade";

export const dynamic = "force-dynamic";

/** GET /api/comunidade/questao/[id] — dúvidas ancoradas numa questão. Público. */
export async function GET(
  _request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    return NextResponse.json({ erro: "Questão inválida." }, { status: 400 });
  }

  const supabase = await criaClienteServidor();
  if (!supabase) return NextResponse.json({ posts: [] });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const posts = await buscarDiscussaoQuestao(supabase, id, user?.id ?? null);
  return NextResponse.json({ posts });
}
