import { headers } from "next/headers";

/**
 * URL pública do site, para montar o `redirectTo` do OAuth.
 *
 * O Google exige um endereço de retorno ABSOLUTO — caminho relativo não
 * serve. E ele muda conforme onde o site está rodando: localhost:3000 na
 * sua máquina, o domínio de verdade em produção. Por isso é descoberto em
 * tempo de requisição em vez de ficar cravado no código.
 *
 * `NEXT_PUBLIC_SITE_URL` tem prioridade porque atrás de proxy ou CDN os
 * cabeçalhos podem trazer o host interno, e aí o retorno cairia num endereço
 * que o navegador da pessoa não alcança.
 */
export async function origemDoSite(): Promise<string> {
  const fixa = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fixa) return fixa.replace(/\/+$/, "");

  const cabecalhos = await headers();
  const host =
    cabecalhos.get("x-forwarded-host") ?? cabecalhos.get("host") ?? "localhost:3000";
  const protocolo =
    cabecalhos.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");

  return `${protocolo}://${host}`;
}
