import { NextResponse } from "next/server";
import { criaClienteServidor } from "@/lib/supabase/server";
import { montarAutor } from "@/lib/conteudo/comunidade";

export const dynamic = "force-dynamic";

/** GET /api/comunidade/eu — o Autor de quem está logado, ou null.
 *  Usado pelos painéis de discussão dentro do Estudar e das provas, que são
 *  client e não recebem a identidade por prop. */
export async function GET() {
  const supabase = await criaClienteServidor();
  if (!supabase) return NextResponse.json({ eu: null });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ eu: null });

  const { data: p } = await supabase
    .from("perfis")
    .select("id, nome, username, verificado, avatar_path")
    .eq("id", user.id)
    .maybeSingle();

  return NextResponse.json({
    eu: montarAutor(p, { primeiraPessoa: true, id: user.id }),
  });
}
