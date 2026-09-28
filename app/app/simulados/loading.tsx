import { EsqueletoDePagina } from "@/components/layout/EsqueletoDePagina";

/* O esqueleto de app/app/loading.tsx vale para a troca ENTRE abas. Dentro de
   uma aba a troca não muda o segmento de cima — a lista para uma página da
   lista —, e ele não entra. Este cobre a ida às páginas de dentro. */
export default function Carregando() {
  return <EsqueletoDePagina />;
}
