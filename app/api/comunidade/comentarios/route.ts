import { NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { exigeSessaoApi } from "@/lib/sessao";
import { checaLimite, validaTexto } from "@/lib/comunidade";

export const dynamic = "force-dynamic";

async function temUsername(supabase: SupabaseClient, uid: string): Promise<boolean> {
  const { data } = await supabase
    .from("perfis")
    .select("username")
    .eq("id", uid)
    .maybeSingle();
  return Boolean(data?.username);
}

/** POST — comenta num post, ou responde a um comentário (pai_id). */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase, user } = sessao;

  if (!(await temUsername(supabase, user.id))) {
    return NextResponse.json(
      { erro: "Escolha um nome de usuário antes de comentar.", precisaUsername: true },
      { status: 409 }
    );
  }

  const corpo = await request.json().catch(() => null);
  const postId: string | undefined = corpo?.postId;
  const paiId: string | null =
    typeof corpo?.paiId === "string" && corpo.paiId ? corpo.paiId : null;
  if (!postId) return NextResponse.json({ erro: "Post não informado." }, { status: 400 });

  const texto = validaTexto(corpo?.texto, 2000, "comentário");
  if (!texto.ok) return NextResponse.json({ erro: texto.erro }, { status: 400 });

  const limite = await checaLimite(supabase, "comentar");
  if (!limite.ok) return NextResponse.json({ erro: limite.erro }, { status: 429 });

  const { data, error } = await supabase
    .from("com_comentarios")
    .insert({ post_id: postId, autor_id: user.id, pai_id: paiId, texto: texto.valor })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json(
      { erro: "Não consegui comentar agora. Tente de novo." },
      { status: 400 }
    );
  }
  return NextResponse.json({ ok: true, id: data.id });
}

/** PATCH — edita o próprio comentário. */
export async function PATCH(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const corpo = await request.json().catch(() => null);
  const id: string | undefined = corpo?.id;
  if (!id) return NextResponse.json({ erro: "Comentário não informado." }, { status: 400 });

  const texto = validaTexto(corpo?.texto, 2000, "comentário");
  if (!texto.ok) return NextResponse.json({ erro: texto.erro }, { status: 400 });

  const { data, error } = await supabase
    .from("com_comentarios")
    .update({ texto: texto.valor, editado_em: new Date().toISOString() })
    .eq("id", id)
    .eq("autor_id", user.id)
    .select("id");

  if (error) return NextResponse.json({ erro: error.message }, { status: 400 });
  if (!data || data.length === 0) {
    return NextResponse.json({ erro: "Comentário não encontrado." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

/** DELETE ?id= — apaga o próprio comentário. */
export async function DELETE(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ erro: "Comentário não informado." }, { status: 400 });

  const { data, error } = await supabase
    .from("com_comentarios")
    .delete()
    .eq("id", id)
    .eq("autor_id", user.id)
    .select("id");

  if (error) return NextResponse.json({ erro: error.message }, { status: 400 });
  if (!data || data.length === 0) {
    return NextResponse.json({ erro: "Comentário não encontrado." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
