import { MARCAS } from "@/lib/conteudo/marcas";

/** Faixa rolante de bancas. A lista é duplicada porque a animação translada
 *  -50%: com uma cópia só, o laço daria um salto visível ao reiniciar. */
export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...MARCAS, ...MARCAS].map((m, i) => (
          <span className="marquee-item" key={i}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
