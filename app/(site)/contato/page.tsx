import type { Metadata } from "next";
import { Revelar } from "@/components/ui/Revelar";

export const metadata: Metadata = {
  title: "Contato · Percurso",
  description: "Como falar com a equipe do Percurso.",
};

export default function PaginaContato() {
  return (
    <main className="section" style={{ paddingTop: 150 }}>
      <div className="wrap" style={{ maxWidth: 680 }}>
        <div className="section-head">
          <Revelar como="div" className="head-left head-centro">
            <span className="eyebrow">Contato</span>
            <h2 className="title">
              Fale com a <em>gente</em>.
            </h2>
            <p className="lede">
              Dúvidas, sugestões, um erro numa questão ou interesse em usar o
              Percurso na sua escola ou cursinho.
            </p>
          </Revelar>
        </div>

        <Revelar como="div">
          <div className="q-explain" style={{ marginTop: 0 }}>
            <strong>Canal de contato em construção.</strong> O formulário de
            contato ainda não está no ar. Enquanto isso, dúvidas sobre a
            plataforma podem ser abertas na{" "}
            <a href="/comunidade" style={{ color: "var(--accent-2)" }}>
              Comunidade
            </a>
            .
          </div>
        </Revelar>
      </div>
    </main>
  );
}
