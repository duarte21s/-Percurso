import { METODO } from "@/lib/conteudo/metodo";
import { Revelar } from "@/components/ui/Revelar";

export function Metodo() {
  return (
    <section className="section" id="metodo">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Método</span>
            <h2 className="title">
              Quatro passos que se <em>repetem</em>.
            </h2>
            <p className="lede">
              Não existe truque. Existe um ciclo curto, repetido com constância,
              que transforma conteúdo visto em conteúdo lembrado no dia da prova.
            </p>
          </Revelar>
        </div>

        <Revelar como="div" className="method" atraso={1}>
          {METODO.map((p) => (
            <div className="step" key={p.numero}>
              <span className="step-n">
                {p.numero} / {p.fase}
              </span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </Revelar>
      </div>
    </section>
  );
}
