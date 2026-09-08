import { NextResponse } from "next/server";
import { criaClienteServidor } from "@/lib/supabase/server";
import { buscarFeed } from "@/lib/comunidade";
import type { AbaComunidade } from "@/lib/tipos";

export const dynamic = "force-dynamic";

const ABAS_VALIDAS: AbaComunidade[] = [
  "recentes",
  "populares",
  "perguntas",
  "minhas",
  "salvos",
];

/** GET /api/comunidade/feed?aba=&tag= — leitura pública do feed geral. */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const abaBruta = url.searchParams.get("aba") ?? "recentes";
  const aba = (ABAS_VALIDAS as string[]).includes(abaBruta)
    ? (abaBruta as AbaComunidade)
    : "recentes";
  const tag = url.searchParams.get("tag")?.trim().toLowerCase() || null;

  const supabase = await criaClienteServidor();
  if (!supabase) return NextResponse.json({ posts: [] });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const posts = await buscarFeed(supabase, { aba, tag, uid: user?.id ?? null });
  return NextResponse.json({ posts });
}
