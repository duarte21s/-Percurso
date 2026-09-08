import type { MetadataRoute } from "next";
import { urlPublicaConfigurada } from "@/lib/site-url";

/** Impede a descoberta de áreas privadas e deixa o conteúdo institucional livre. */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = urlPublicaConfigurada();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/app/", "/api/", "/entrar", "/auth/", "/visitante/"],
    },
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
