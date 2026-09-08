/* =========================================================================
   Um destino de redirecionamento só pode ser um caminho DENTRO do site.

   Existia a mesma checagem copiada em quatro lugares (entrar/acoes.ts,
   auth/callback, entrar/page.tsx e visitante/expirou), todas escritas como:

       p.startsWith("/") && !p.startsWith("//")

   Isso barra `//evil.com` e `https://evil.com`, mas deixa passar
   `/\evil.com` — que satisfaz as duas condições e mesmo assim manda o
   usuário para fora. O motivo é que o parser de URL trata a barra invertida
   como barra normal, então `/\evil.com` resolve para `//evil.com`, que é uma
   URL protocol-relative. Verificado:

       new URL("/\\evil.com", "https://percurso.app").href
       // -> "https://evil.com/"

   Com um domínio parecido no lugar de `evil.com`, isso vira phishing hospedado
   no próprio endereço do site: o link sai de percurso.app e o usuário não vê
   diferença até já estar em outro lugar.

   A regra abaixo exige barra no começo e proíbe barra (de qualquer inclinação)
   logo em seguida. Também recusa caracteres de controle, que serviriam para
   partir um cabeçalho `Location`.
   ========================================================================= */

/* eslint-disable no-control-regex */
const CONTROLE = new RegExp("[\u0000-\u001f\u007f]");

/** Caminho interno seguro, ou o `reserva` quando a entrada não serve. */
export function destinoInterno(bruto: unknown, reserva = "/app"): string {
  if (typeof bruto !== "string") return reserva;

  const p = bruto.trim();

  // precisa ser caminho absoluto do próprio site
  if (!p.startsWith("/")) return reserva;

  // `//host` e `/\host` são a mesma coisa para o navegador: saída do domínio
  if (p.length > 1 && (p[1] === "/" || p[1] === "\\")) return reserva;

  // barra invertida em qualquer posição não tem uso legítimo num caminho nosso
  if (p.includes("\\")) return reserva;

  // controle e quebra de linha: partiriam o cabeçalho Location
  if (CONTROLE.test(p)) return reserva;

  return p;
}
