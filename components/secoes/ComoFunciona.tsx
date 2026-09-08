import { COMO_FUNCIONA } from "@/lib/conteudo/metodo";
import { Icone } from "@/components/ui/Icone";
import { Revelar } from "@/components/ui/Revelar";
import css from "./demonstracao.module.css";

export function ComoFunciona() {
  return (
    <section className="section" id="como-funciona">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Como funciona</span>
            <h2 className="title">
              Do primeiro clique ao
              <br />
              <em>primeiro ciclo</em> fechado.
            </h2>
            <p className="lede">
              Você não precisa de conta para começar — precisa de conta para
              não perder o que já fez. Estes são os quatro passos, e onde cada
              um acontece na tela.
            </p>
          </Revelar>
        </div>

        <div className={css.fluxo}>
          {COMO_FUNCIONA.map((e, i) => (
            <Revelar
              key={e.numero}
              className={css.etapa}
              atraso={((i % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <span className={css.etapaN}>{e.numero}</span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
              <div className={css.etapaTela}>
                <Icone nome="olho" tracoLargura={1.6} />
                <span>{e.naTela}</span>
              </div>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
