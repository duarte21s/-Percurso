import type { Metadata } from "next";
import { Diagnostico } from "@/components/secoes/Diagnostico";

export const metadata: Metadata = {
  title: "Diagnóstico · Percurso",
  robots: { index: false, follow: false },
};

/** Página temporária de diagnóstico do aparelho.
 *
 *  Existe porque o painel de preview do editor congela o requestAnimationFrame
 *  e emula o celular por viewport, não por motor — o que passa aqui pode
 *  quebrar num Safari de verdade e não há como saber daqui. Esta página roda
 *  NO aparelho e relata o que ela mesma encontra.
 *
 *  APAGAR quando o problema estiver resolvido: app/(site)/diagnostico/ e
 *  components/secoes/Diagnostico.tsx. */
export default function PaginaDiagnostico() {
  return <Diagnostico />;
}
