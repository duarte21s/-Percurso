import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";

/* Prévia estática do cronograma na home. A ferramenta interativa vive em
   /app/cronograma (logada); a página pública /cronograma explica o recurso. */
export function TeaserCronograma() {
  return (
    <section className="section" id="plano">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Cronograma</span>
            <h2 className="title">
              Um plano que cabe
              <br />
              na <em>sua</em> semana.
            </h2>
            <p className="lede">
              Diga quanto tempo você tem e o que precisa priorizar. O cronograma
              distribui as matérias com revisão espaçada — em 1, 7 e 30 dias — e
              um dia de descanso, porque plano que ignora cansaço não sobrevive à
              segunda semana.
            </p>
          </Revelar>
        </div>

        <Revelar como="div" atraso={1}>
          <Link href="/cronograma" className="btn btn-primary">
            Conhecer o cronograma <span className="arrow">→</span>
          </Link>
        </Revelar>
      </div>
    </section>
  );
}
