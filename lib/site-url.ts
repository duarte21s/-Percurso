/**
 * Endereço canônico opcional da instalação. Em desenvolvimento ele pode ficar
 * vazio; em produção a mesma variável já usada pelo OAuth também alimenta as
 * tags sociais, o robots.txt e o sitemap, sem inventar um domínio da marca.
 */
export function urlPublicaConfigurada(): string | null {
  const valor = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!valor) return null;

  try {
    const url = new URL(valor);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.toString().replace(/\/+$/, "");
  } catch {
    return null;
  }
}
