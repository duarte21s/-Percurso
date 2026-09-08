import type { Metadata } from "next";
import { exigeSessao } from "@/lib/sessao";
import { Cronograma } from "@/components/secoes/Cronograma";

export const metadata: Metadata = {
  title: "Cronograma · Percurso",
  description:
    "Monte a sua semana de estudos: diga quanto tempo tem e o que priorizar, e o cronograma distribui as matérias com revisão espaçada.",
};

export const dynamic = "force-dynamic";

export default async function PaginaCronograma() {
  // A página pública /cronograma explica o recurso; aqui é a ferramenta.
  await exigeSessao("/app/cronograma");

  return (
    <main style={{ paddingTop: 24 }}>
      <Cronograma />
    </main>
  );
}
