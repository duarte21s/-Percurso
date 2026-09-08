import type { Metadata } from "next";
import Link from "next/link";
import { Recursos } from "@/components/secoes/Recursos";
import { Materias } from "@/components/secoes/Materias";
import { DentroDaPlataforma } from "@/components/secoes/DentroDaPlataforma";
import { Revelar } from "@/components/ui/Revelar";

export const metadata: Metadata = {
  title: "Recursos da plataforma · Percurso",
  description:
    "Tudo o que o Percurso oferece: questões comentadas, provas do ENEM, redação nas cinco competências, cronograma, matérias e a comunidade.",
};

export default function PaginaRecursos() {
  return (
    <main id="top" style={{ paddingTop: 96 }}>
      <Recursos abertura />
      <Materias />
      <DentroDaPlataforma />
      <section className="section">
        <div className="wrap">
          <Revelar como="div">
            <Link href="/cadastro" className="btn btn-primary">
              Criar conta e usar tudo isso <span className="arrow">→</span>
            </Link>
          </Revelar>
        </div>
      </section>
    </main>
  );
}
