import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

/** POST — define "salvar post". Body: { postId, ativo }. `ativo` é o estado
 *  desejado; sem ele, alterna. Idempotente contra cliques concorrentes. */
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
  const postId: string = corpo?.postId;
  if (!postId) return NextResponse.json({ erro: "Post não informado." }, { status: 400 });

  let ativo: boolean;
  if (typeof corpo?.ativo === "boolean") {
    ativo = corpo.ativo;
  } else {
    const { data: existe } = await supabase
      .from("com_salvos")
      .select("post_id")
      .eq("usuario_id", user.id)
      .eq("post_id", postId)
      .maybeSingle();
    ativo = !existe;
  }

  if (!ativo) {
    await supabase
      .from("com_salvos")
      .delete()
      .eq("usuario_id", user.id)
      .eq("post_id", postId);
    return NextResponse.json({ salvo: false });
  }

  const { error } = await supabase
    .from("com_salvos")
    .insert({ usuario_id: user.id, post_id: postId });

  if (error && error.code !== "23505") {
    return NextResponse.json({ erro: "Não consegui salvar agora." }, { status: 400 });
  }
  return NextResponse.json({ salvo: true });
}
