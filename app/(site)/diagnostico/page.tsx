import type { Metadata } from "next";
import { Diagnostico } from "@/components/secoes/Diagnostico";

export const metadata: Metadata = {
  title: "Diagnóstico · Percurso",
  robots: { index: false, follow: false },
};

/** Página temporária de diagnóstico do aparelho. APAGAR quando fechar. */
export default function PaginaDiagnostico() {
  return <Diagnostico />;
}
