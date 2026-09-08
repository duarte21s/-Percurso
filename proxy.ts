import { type NextRequest } from "next/server";
import { atualizaSessao } from "@/lib/supabase/middleware";

function politicaDeSeguranca(nonce: string): string {
  const emDesenvolvimento = process.env.NODE_ENV === "development";

  return [
    "default-src 'self'",
    /* `strict-dynamic` fica FORA em desenvolvimento, e isso é conserto de um
       defeito real, não frouxidão por conveniência.

       O Turbopack em modo dev emite um dos chunks — o de `app/(site)/
       template.tsx` — como <script src> sem o nonce. Medido: 22 de 23 tags
       vinham com nonce, uma não. Com `strict-dynamic` a lista por origem é
       desligada, então `'self'` deixa de valer e essa única tag é bloqueada.
       O template nunca carrega, o GSAP vai junto, e o livro do topo para de
       responder à rolagem. A mesma falha derruba a hidratação, que é o que
       deixava a página em branco ao navegar no celular.

       Em produção o problema não existe: conferido no build, 16 de 16 tags
       recebem nonce. Por isso lá `strict-dynamic` continua, com a proteção
       inteira — é justamente onde ela importa.

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
