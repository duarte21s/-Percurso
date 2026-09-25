import { NextResponse, type NextRequest } from "next/server";
import { atualizaSessao } from "@/lib/supabase/middleware";

function politicaDeSeguranca(nonce: string): string {
  const emDesenvolvimento = process.env.NODE_ENV === "development";

  return [
    "default-src 'self'",
    /* `strict-dynamic` fica FORA em desenvolvimento, e isso foi conserto de
       um defeito real, não frouxidão por conveniência.

       Em modo dev, o chunk do antigo `app/(site)/template.tsx` saía como
       <script src> sem o nonce. Medido: 22 de 23 tags vinham com nonce, uma
       não. Com `strict-dynamic` a lista por origem é desligada, então
       `'self'` deixa de valer e essa única tag era bloqueada. O template
       nunca carregava, o GSAP ia junto, e o livro do topo parava de
       responder à rolagem. A mesma falha derrubava a hidratação, que é o que
       deixava a página em branco ao navegar no celular.

       O mecanismo é do Next 16.3, não do Turbopack nem só do dev. Ele monta o
       <script> de todo `template.tsx` sem nonce (`templateScripts`); o mesmo
       chunk também sai com nonce por outro caminho, e o React escreve uma só
       tag por src — vence a que chegar primeiro. Em produção, sem sessão,
       chega a com nonce; foi assim que uma conferência feita sem login
       encontrou todas as tags com nonce e concluiu que ali o problema não
       existia. Com sessão, o layout espera o Supabase antes de devolver
       `{children}`, a sem nonce vence e o `strict-dynamic` a bloqueia: nada
       sob o template hidratava.

       A correção foi tirar os `template.tsx`. A transição mora em
       components/layout/TransicaoDePagina.tsx, que sai nos scripts do
       layout, com nonce, e `scripts/checar-sem-template.mjs` acusa a volta
       quando é rodado. Em produção `strict-dynamic` continua, com a proteção
       inteira — é justamente onde ela importa. Sem template.tsx, a exceção
       de desenvolvimento talvez não seja mais necessária; não foi
       reavaliada.

       Sem `strict-dynamic`, `'self'` autoriza script de mesma origem, que em
       desenvolvimento é só o próprio Next. */
    `script-src 'self' 'nonce-${nonce}'${
      emDesenvolvimento ? " 'unsafe-eval'" : " 'strict-dynamic'"
    }`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data: https:",
    "media-src 'self' blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");
}

/**
 * O Proxy substitui a convenção `middleware` no Next 16. Além de renovar a
 * sessão do Supabase, ele entrega uma CSP com nonce único por resposta. Assim
 * o pequeno script de tema continua permitido, mas scripts injetados não.
 */
export async function proxy(request: NextRequest) {
  /* Quando o endereço de volta pedido ao Supabase não está nos Redirect URLs
     do projeto, ele manda para o Site URL — a home — com o `?code=` que só o
     /auth/callback sabe trocar. Era assim que o link de recuperação abria a
     home e o formulário da senha nova nunca aparecia. O callback descobre
     pelo próprio código se era recuperação; aqui só se encaminha. */
  if (request.nextUrl.pathname === "/" && request.nextUrl.searchParams.has("code")) {
    const callback = request.nextUrl.clone();
    callback.pathname = "/auth/callback";
    return NextResponse.redirect(callback);
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const politica = politicaDeSeguranca(nonce);
  const cabecalhos = new Headers(request.headers);

  // O Next lê o nonce da CSP da requisição e o aplica aos scripts do framework.
  cabecalhos.set("x-nonce", nonce);
  cabecalhos.set("Content-Security-Policy", politica);

  const resposta = await atualizaSessao(request, cabecalhos);
  resposta.headers.set("Content-Security-Policy", politica);

  return resposta;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|media/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|ico)$).*)",
  ],
};
