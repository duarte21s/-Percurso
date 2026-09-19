import { MARCAS } from "@/lib/conteudo/marcas";

/** Faixa rolante das instituições mapeadas. A lista é duplicada
 *  porque a animação translada -50%: com uma cópia só, o laço daria um salto
 *  visível ao reiniciar.
 *
 *  O rótulo saiu do `aria-hidden` que cobria tudo e virou nome da região: uma
 *  faixa de siglas sem legenda lê como "temos questões de todas estas", e não
 *  é isso que ela diz. O trilho continua escondido do leitor de tela, porque
 *  ler treze siglas duas vezes seguidas não informa nada. */
export function Marquee() {
  return (
    <div
      className="marquee"
      role="region"
      aria-label="Universidades mapeadas no site e a via de ingresso pelo ENEM. A faixa não indica que há questões de cada um."
    >
      <div className="marquee-track" aria-hidden="true">
        {[...MARCAS, ...MARCAS].map((m, i) => (
          <span className="marquee-item" key={i}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
