import type { Metadata } from "next";
import { exigeSessao } from "@/lib/sessao";
import { Faculdades } from "@/components/secoes/Faculdades";

export const metadata: Metadata = {
  title: "Faculdades · Percurso",
  description:
    "Busque por curso, instituição, estado ou área e compare a concorrência relativa de cada vaga.",
};

export const dynamic = "force-dynamic";

export default async function PaginaFaculdades() {
  // A página pública /faculdades é informativa; a busca completa é aqui.
  await exigeSessao("/app/faculdades");

  return (
    <main style={{ paddingTop: 24 }}>
      <Faculdades />
    </main>
  );
}
