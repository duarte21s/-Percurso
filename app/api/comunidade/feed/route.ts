import { NextResponse } from "next/server";
import { criaClienteServidor } from "@/lib/supabase/server";
import { buscarFeed } from "@/lib/comunidade";
import type { AbaComunidade } from "@/lib/tipos";

export const dynamic = "force-dynamic";

const ABAS_VALIDAS: AbaComunidade[] = [
  "recentes",
  "populares",
  "perguntas",
  "sem_resposta",
  "minhas",
  "salvos",
];

/** Teto de páginas. Sem ele, `?pagina=1e9` viraria um `range` absurdo pedido
 *  ao banco por qualquer um com a URL na mão. */
const MAX_PAGINA = 200;

/** GET /api/comunidade/feed?aba=&tag=&busca=&pagina= — leitura pública. */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const abaBruta = url.searchParams.get("aba") ?? "recentes";
  const aba = (ABAS_VALIDAS as string[]).includes(abaBruta)
    ? (abaBruta as AbaComunidade)
    : "recentes";
  const tag = url.searchParams.get("tag")?.trim().toLowerCase() || null;
  const busca = url.searchParams.get("busca")?.trim() || null;
  /* `Number` de lixo dá NaN, e NaN sobrevive a `Math.max`. O `|| 0` é o que
     impede uma página NaN de chegar ao `range`. */
  const paginaBruta = Number(url.searchParams.get("pagina")) || 0;
  const pagina = Math.min(MAX_PAGINA, Math.max(0, Math.floor(paginaBruta)));

  const supabase = await criaClienteServidor();
  if (!supabase) return NextResponse.json({ posts: [], temMais: false });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const feed = await buscarFeed(supabase, {
    aba,
    tag,
    busca,
    pagina,
    uid: user?.id ?? null,
  });
  return NextResponse.json(feed);
}
