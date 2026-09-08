import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { checaLimite } from "@/lib/comunidade";

export const dynamic = "force-dynamic";

/** POST — denuncia um post ou comentário. Body: { alvoTipo, alvoId, motivo? }.
 *  A denúncia entra numa fila que só scripts/moderar.mjs lê (service role). */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const corpo = await request.json().catch(() => null);
  const alvoTipo: string = corpo?.alvoTipo;
  const alvoId: string = corpo?.alvoId;
  if (!["post", "comentario"].includes(alvoTipo) || !alvoId) {
    return NextResponse.json({ erro: "Requisição incompleta." }, { status: 400 });
  }
  const motivo = String(corpo?.motivo ?? "").trim().slice(0, 500);

  const limite = await checaLimite(supabase, "denunciar");
  if (!limite.ok) return NextResponse.json({ erro: limite.erro }, { status: 429 });

  const { error } = await supabase.from("com_denuncias").insert({
    denunciante_id: user.id,
    alvo_tipo: alvoTipo,
    alvo_id: alvoId,
    motivo,
  });

  // Denúncia repetida (índice único) volta como sucesso silencioso: a pessoa
  // já reportou, não precisa saber que reportou duas vezes.
  if (error && error.code !== "23505") {
    return NextResponse.json({ erro: "Não consegui registrar a denúncia." }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
