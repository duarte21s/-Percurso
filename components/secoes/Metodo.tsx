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
              O ciclo é sempre o mesmo: medir onde você está, estudar pelo que
              mais cai, errar no treino e voltar em 1, 7 e 30 dias. O que muda
              de um assunto para o outro é só o conteúdo.
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
