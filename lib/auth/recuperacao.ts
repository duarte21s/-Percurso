/* =========================================================================
   O que o link de recuperação de senha trouxe na URL.

   O e-mail do Supabase pode devolver a pessoa ao site de quatro jeitos,
   conforme o fluxo e o modelo de e-mail do projeto:

     ?code=…                          PKCE, o padrão do @supabase/ssr. Só
                                      troca por sessão no navegador que pediu
                                      o link, onde ficou o verificador em
                                      cookie.
     #access_token=…&type=recovery    implícito. O token vem no fragmento,
                                      que o servidor nunca vê.
     ?token_hash=…&type=recovery      modelo de e-mail com {{ .TokenHash }}.
                                      Não depende de cookie: vale em qualquer
                                      navegador.
     ?error=… ou #error=…             link vencido, já usado ou recusado.

   Este arquivo só LÊ a URL e diz qual é o caso. Quem age é a /nova-senha.
   Separado dela para ser testado sem navegador (scripts/checar-recuperacao).
   ========================================================================= */

export type LinkDeRecuperacao =
  | { tipo: "erro"; detalhe: string }
  | { tipo: "implicito"; accessToken: string; refreshToken: string }
  | { tipo: "token_hash"; tokenHash: string }
  | { tipo: "codigo"; codigo: string }
  | { tipo: "nada" };

export function lerLinkDeRecuperacao(href: string): LinkDeRecuperacao {
  const url = new URL(href);
  const busca = url.searchParams;
  const fragmento = new URLSearchParams(url.hash.replace(/^#/, ""));
  const ler = (chave: string) => busca.get(chave) ?? fragmento.get(chave);

  /* Erro primeiro: o Supabase manda `error` junto de parâmetros que, sozinhos,
     pareceriam um link bom. */
  const erro = [ler("error_code"), ler("error"), ler("error_description")]
    .filter(Boolean)
    .join(" ");
  if (erro) return { tipo: "erro", detalhe: erro };

  const accessToken = fragmento.get("access_token");
  const refreshToken = fragmento.get("refresh_token");
  if (accessToken && refreshToken && fragmento.get("type") === "recovery") {
    return { tipo: "implicito", accessToken, refreshToken };
  }

  const tokenHash = busca.get("token_hash");
  if (tokenHash && busca.get("type") === "recovery") {
    return { tipo: "token_hash", tokenHash };
  }

  const codigo = busca.get("code");
  if (codigo) return { tipo: "codigo", codigo };

  return { tipo: "nada" };
}

/** Por que a troca de senha não pode acontecer com o link que chegou. */
export type MotivoLinkInvalido = "vencido" | "outro_navegador" | "sem_link" | "falhou";

/**
 * Lê o texto de erro do Supabase (em inglês) ou o código que o
 * /auth/callback repassa em `?erro=`, e devolve o motivo que a tela explica.
 */
export function motivoDoErro(texto: string): MotivoLinkInvalido {
  const m = texto.toLowerCase();

  /* O verificador PKCE mora em cookie no navegador que pediu o link. O app de
     e-mail do celular costuma abrir o link no navegador dele, sem esse
     cookie — e aí o código não troca por sessão. É o único caso em que a
     culpa é do navegador; "flow state" e "does not match" são código já
     usado, vencido ou de um pedido anterior ao último. */
  if (m.includes("verifier not found") || m.includes("pkce_code_verifier_not_found")) {
    return "outro_navegador";
  }
  if (
    m.includes("expired") ||
    m.includes("invalid") ||
    m.includes("flow state") ||
    m.includes("does not match") ||
    m.includes("access_denied") ||
    m.includes("already") ||
    m.includes("session missing") ||
    m.includes("not found")
  ) {
    return "vencido";
  }
  if (m.includes("sem_link")) return "sem_link";
  return "falhou";
}

export const TELA_DO_MOTIVO: Record<MotivoLinkInvalido, { titulo: string; texto: string }> = {
  vencido: {
    titulo: "Esse link não vale mais.",
    texto:
      "O link de recuperação vale por uma hora e por um uso só — e, se você pediu mais de um, só o último vale. Peça outro e a troca continua de onde parou.",
  },
  outro_navegador: {
    titulo: "Abra o link no mesmo navegador.",
    texto:
      "O link foi aberto num navegador diferente daquele em que você pediu a recuperação — o app de e-mail do celular costuma abrir o próprio. Copie o link para o navegador em que pediu, ou peça um novo daqui.",
  },
  sem_link: {
    titulo: "Falta o link do e-mail.",
    texto:
      "Esta página abre pelo link que chega no seu e-mail. Peça um e siga por ele.",
  },
  falhou: {
    titulo: "Não consegui validar o link.",
    texto: "Algo falhou no caminho. Peça outro link e tente de novo.",
  },
};
