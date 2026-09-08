import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { titulosDisponiveis } from "@/lib/gamificacao";

export const dynamic = "force-dynamic";

/** PATCH — edita o próprio perfil da comunidade. Body: { bio?, tituloAtivo? }. */
export async function PATCH(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const corpo = await request.json().catch(() => null);
  if (!corpo) {
    return NextResponse.json({ erro: "Requisição inválida." }, { status: 400 });
  }

  const patch: { bio?: string; titulo_ativo?: string | null } = {};

  if (typeof corpo.bio === "string") {
    const bio = corpo.bio.trim();
    if (bio.length > 280) {
      return NextResponse.json(
        { erro: "A bio passou de 280 caracteres." },
        { status: 400 }
      );
    }
    patch.bio = bio;
  }

  if ("tituloAtivo" in corpo) {
    const alvo = corpo.tituloAtivo;
    if (alvo === null || alvo === "") {
      patch.titulo_ativo = null;
    } else if (typeof alvo === "string") {
      const { data: conq } = await supabase
        .from("usuario_conquistas")
        .select("conquista_slug")
        .eq("usuario_id", user.id);
      const permitidos = titulosDisponiveis(
        (conq ?? []).map((c) => c.conquista_slug as string)
      );
      if (!permitidos.includes(alvo)) {
        return NextResponse.json(
          { erro: "Você ainda não desbloqueou esse título." },
          { status: 403 }
        );
      }
      patch.titulo_ativo = alvo;
    }
  }

  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ erro: "Nada para mudar." }, { status: 400 });
  }

  const { error } = await supabase.from("perfis").update(patch).eq("id", user.id);
  if (error) {
    return NextResponse.json({ erro: error.message }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
