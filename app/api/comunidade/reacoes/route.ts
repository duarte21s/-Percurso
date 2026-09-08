import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { checaLimite } from "@/lib/comunidade";

export const dynamic = "force-dynamic";

/** POST — define a curtida. Body: { alvoTipo: 'post'|'comentario', alvoId, ativo }.
 *  `ativo` é o estado desejado; sem ele, alterna a partir do que já existe.
 *  Idempotente: dois cliques concorrentes convergem para o mesmo estado. */
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
  const alvoTipo: string = corpo?.alvoTipo;
  const alvoId: string = corpo?.alvoId;
  if (!["post", "comentario"].includes(alvoTipo) || !alvoId) {
    return NextResponse.json({ erro: "Requisição incompleta." }, { status: 400 });
  }

  // Sem `ativo` no corpo, alterna com base no que existe (compat).
  let ativo: boolean;
  if (typeof corpo?.ativo === "boolean") {
    ativo = corpo.ativo;
  } else {
    const { data: existe } = await supabase
      .from("com_reacoes")
      .select("alvo_id")
      .eq("usuario_id", user.id)
      .eq("alvo_tipo", alvoTipo)
      .eq("alvo_id", alvoId)
      .maybeSingle();
    ativo = !existe;
  }

  if (!ativo) {
    await supabase
      .from("com_reacoes")
      .delete()
      .eq("usuario_id", user.id)
      .eq("alvo_tipo", alvoTipo)
      .eq("alvo_id", alvoId);
    return NextResponse.json({ curtido: false });
  }

  const limite = await checaLimite(supabase, "reagir");
  if (!limite.ok) return NextResponse.json({ erro: limite.erro }, { status: 429 });

  const { error } = await supabase
    .from("com_reacoes")
    .insert({ usuario_id: user.id, alvo_tipo: alvoTipo, alvo_id: alvoId });

  // 23505 = já existe: outra aba/clique venceu a corrida. É o estado desejado.
  if (error && error.code !== "23505") {
    return NextResponse.json({ erro: "Não consegui curtir agora." }, { status: 400 });
  }
  return NextResponse.json({ curtido: true });
}
