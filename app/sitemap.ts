import type { MetadataRoute } from "next";
import { urlPublicaConfigurada } from "@/lib/site-url";

const PAGINAS_PUBLICAS: Array<{
  caminho: string;
  frequencia: MetadataRoute.Sitemap[number]["changeFrequency"];
  prioridade: number;
}> = [
  { caminho: "/", frequencia: "weekly", prioridade: 1 },
  { caminho: "/como-funciona", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/recursos", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/cronograma", frequencia: "monthly", prioridade: 0.8 },
  { caminho: "/faculdades", frequencia: "weekly", prioridade: 0.8 },
  { caminho: "/sobre", frequencia: "monthly", prioridade: 0.7 },
  { caminho: "/duvidas", frequencia: "monthly", prioridade: 0.7 },
  { caminho: "/contato", frequencia: "yearly", prioridade: 0.5 },
  { caminho: "/comunidade", frequencia: "daily", prioridade: 0.7 },
];

/**
 * Só publica URLs absolutas quando o domínio de produção está configurado.
 * Gerar um sitemap apontando para localhost seria pior do que não publicar um
 * durante o desenvolvimento.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = urlPublicaConfigurada();
  if (!siteUrl) return [];

  return PAGINAS_PUBLICAS.map(({ caminho, frequencia, prioridade }) => ({
    url: `${siteUrl}${caminho}`,
    changeFrequency: frequencia,
    priority: prioridade,
  }));
}
