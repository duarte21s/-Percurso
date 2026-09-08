import { NextResponse } from "next/server";
import { criaClienteServidor } from "@/lib/supabase/server";
import { origemDoSite } from "@/lib/supabase/origem";
import { destinoInterno } from "@/lib/destino-seguro";

/**
 * Volta do provedor OAuth — hoje só o Google, mas a rota não é específica dele.
 *
 * O provedor manda o navegador para cá com `?code=`, um código de uso único.
 * Trocar esse código por sessão é a única coisa que acontece aqui — e acontece
 * no servidor, com o verificador PKCE que ficou no cookie quando a Server
 * Action abriu o fluxo. O token nunca passa pela URL nem pelo JavaScript da
 * página.
 *
 * Quando a pessoa cancela na tela do provedor, a volta não traz `code`, e sim
 * `error`. Esse caso não é falha do site: leva de volta ao /entrar com recado.
 */
export async function GET(requisicao: Request) {
  const url = new URL(requisicao.url);
  const base = await origemDoSite();

  /* O destino vem de uma query string e vira um Location: sem esta checagem,
     um link forjado com ?proximo=https://... transformaria o callback num
     redirecionador aberto, útil para phishing em cima do seu domínio. */
  const destino = destinoInterno(url.searchParams.get("proximo"));

  const recusa =
    url.searchParams.get("error_description") ?? url.searchParams.get("error");
  if (recusa) {
    return NextResponse.redirect(
      new URL(`/entrar?erro=${encodeURIComponent(recusa)}`, base)
    );
  }

  const codigo = url.searchParams.get("code");
  if (!codigo) {
    return NextResponse.redirect(new URL("/entrar?erro=sem_codigo", base));
  }

  const supabase = await criaClienteServidor();
  if (!supabase) {
    return NextResponse.redirect(new URL("/entrar?erro=sem_supabase", base));
  }

  const { error } = await supabase.auth.exchangeCodeForSession(codigo);
  if (error) {
    return NextResponse.redirect(
      new URL(`/entrar?erro=${encodeURIComponent(error.message)}`, base)
    );
  }

  return NextResponse.redirect(new URL(destino, base));
}
