import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";
import { FACULDADES } from "@/lib/conteudo/faculdades";

/* Prévia estática da seção de faculdades na home. A tabela pesquisável vive
   em /app/faculdades (logada); a página pública /faculdades é informativa. */
export function TeaserFaculdades() {
  return (
    <section className="section" id="faculdades">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Faculdades brasileiras</span>
            <h2 className="title">
              Onde você quer <em>entrar</em>?
            </h2>
            <p className="lede">
              {FACULDADES.length.toLocaleString("pt-BR")} combinações de curso e
              instituição, com um índice comparativo de concorrência. Use como
              meta de preparação — não como promessa. A busca completa fica na
              sua área de estudos.
            </p>
          </Revelar>
        </div>

        <Revelar como="div" atraso={1}>
          <Link href="/faculdades" className="btn btn-primary">
            Ver faculdades e vestibulares <span className="arrow">→</span>
          </Link>
        </Revelar>
      </div>
    </section>
  );
}
