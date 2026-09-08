import type { Metadata } from "next";
import { Diagnostico } from "@/components/secoes/Diagnostico";

export const metadata: Metadata = {
  title: "Diagnóstico · Percurso",
  robots: { index: false, follow: false },
};

/** Página temporária de diagnóstico do aparelho.
 *
 *  APAGAR quando os problemas fecharem: app/(site)/diagnostico/ e
 *  components/secoes/Diagnostico.tsx. */
export default function PaginaDiagnostico() {
  return <Diagnostico />;
}
