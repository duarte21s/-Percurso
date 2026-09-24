import { NextResponse } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { criaClienteServidor } from "@/lib/supabase/server";
import { origemDoSite } from "@/lib/supabase/origem";
import { destinoInterno } from "@/lib/destino-seguro";

/** Onde a recuperação de senha termina. */
const NOVA_SENHA = "/nova-senha";

/** Tipos de link de e-mail que o `verifyOtp` aceita com `token_hash`. */
const TIPOS_DE_LINK: readonly EmailOtpType[] = [
  "signup",
  "invite",
  "magiclink",
  "recovery",
  "email_change",
  "email",
];

/**
 * Volta do Supabase: do provedor OAuth (hoje só o Google) e dos links de
 * e-mail, como o de recuperação de senha.
 *
 * O Supabase manda o navegador para cá com `?code=`, um código de uso único.
 * Trocar esse código por sessão acontece no servidor, com o verificador PKCE
 * que ficou no cookie quando a Server Action abriu o fluxo. O token nunca
 * passa pela URL nem pelo JavaScript da página. Links montados com
 * `{{ .TokenHash }}` no modelo de e-mail chegam como `?token_hash=&type=` e
 * são validados com `verifyOtp` — esse formato não depende de cookie e vale
 * mesmo aberto em outro navegador.
 *
 * Quando a pessoa cancela na tela do provedor, a volta não traz `code`, e sim
 * `error`. Esse caso não é falha do site: leva de volta ao /entrar com recado.
 * Na recuperação, quem explica a falha é a própria /nova-senha.
 */
export async function GET(requisicao: Request) {
  const url = new URL(requisicao.url);
  const base = await origemDoSite();

  /* O destino vem de uma query string e vira um Location: sem esta checagem,
     um link forjado com ?proximo=https://... transformaria o callback num
     redirecionador aberto, útil para phishing em cima do seu domínio. */
  const destino = destinoInterno(url.searchParams.get("proximo"));
  const pedidoDeRecuperacao = destino === NOVA_SENHA;

  const falhar = (motivo: string) =>
    NextResponse.redirect(
      new URL(
        `${pedidoDeRecuperacao ? NOVA_SENHA : "/entrar"}?erro=${encodeURIComponent(motivo)}`,
        base
      )
    );

  const recusa =
    url.searchParams.get("error_description") ?? url.searchParams.get("error");
  if (recusa) return falhar(recusa);

  const tokenHash = url.searchParams.get("token_hash");
  const tipo = url.searchParams.get("type") as EmailOtpType | null;
  const codigo = url.searchParams.get("code");

  if (!codigo && !tokenHash) {
    /* Sem nada na query. Na recuperação, o que o Supabase mandou pode estar
       no fragmento (#access_token… ou #error…), que o servidor não recebe.
       O navegador carrega o fragmento através deste redirecionamento, e a
       /nova-senha o lê. */
    if (pedidoDeRecuperacao) return NextResponse.redirect(new URL(NOVA_SENHA, base));
    return NextResponse.redirect(new URL("/entrar?erro=sem_codigo", base));
  }

  const supabase = await criaClienteServidor();
  if (!supabase) return falhar("sem_supabase");

  if (tokenHash) {
    if (!tipo || !TIPOS_DE_LINK.includes(tipo)) return falhar("tipo_de_link_invalido");
    const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: tipo });
    if (error) return falhar(error.message);
    return NextResponse.redirect(new URL(tipo === "recovery" ? NOVA_SENHA : destino, base));
  }

  if (!codigo) return falhar("sem_codigo");
  const { data, error } = await supabase.auth.exchangeCodeForSession(codigo);
  if (error) return falhar(error.message);

  /* O próprio código diz se era recuperação: o verificador PKCE guardado
     quando o link foi pedido leva a marca `/recovery`, e a troca devolve
     `redirectType: "recovery"`. Isso vale mais que o `?proximo=`, que some
     quando o Supabase recusa o endereço de volta e manda para o Site URL — o
     proxy traz esse código da home para cá sem `proximo`.

     O campo existe na resposta (auth-js 2.112, GoTrueClient.js) mas não no
     tipo publicado; se sumir numa versão futura, o `proximo` continua
     levando o caminho normal ao mesmo lugar. */
  const redirectType = (data as { redirectType?: string | null }).redirectType;
  const final = redirectType === "recovery" ? NOVA_SENHA : destino;

  return NextResponse.redirect(new URL(final, base));
}
