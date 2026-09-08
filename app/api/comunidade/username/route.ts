import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { validaUsername } from "@/lib/comunidade";

export const dynamic = "force-dynamic";

const UM_MES = 30 * 24 * 60 * 60 * 1000;

/** POST — define ou troca o nome de usuário. Body: { username }.
 *  Troca no máximo 1×/mês: identidade descartável é vetor de abuso. */
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
  const v = validaUsername(corpo?.username);
  if (!v.ok) return NextResponse.json({ erro: v.erro }, { status: 400 });

  const { data: perfil } = await supabase
    .from("perfis")
    .select("username, username_trocado_em")
    .eq("id", user.id)
    .maybeSingle();

  if (perfil?.username === v.valor) {
    return NextResponse.json({ ok: true, username: v.valor });
  }
  if (
    perfil?.username &&
    perfil.username_trocado_em &&
    Date.now() - new Date(perfil.username_trocado_em).getTime() < UM_MES
  ) {
    return NextResponse.json(
      { erro: "Você já trocou o nome de usuário há menos de um mês." },
      { status: 429 }
    );
  }

  const { error } = await supabase
    .from("perfis")
    .update({ username: v.valor, username_trocado_em: new Date().toISOString() })
    .eq("id", user.id);

  if (error) {
    // Índice único por lower(username): 23505 = já está em uso.
    if (error.code === "23505") {
      return NextResponse.json({ erro: "Esse nome de usuário já está em uso." }, { status: 409 });
    }
    return NextResponse.json({ erro: "Não consegui salvar o nome de usuário." }, { status: 400 });
  }
  return NextResponse.json({ ok: true, username: v.valor });
}
