import css from "./estudos.module.css";
import { CONQUISTAS } from "@/lib/gamificacao";
import { RevelarGrade } from "@/components/ui/RevelarGrade";

/**
 * Grade de conquistas. As que a pessoa tem ficam nítidas; as demais aparecem
 * apagadas, para dar o que perseguir. `ganhas` é a lista de slugs. Os tiles
 * entram em cascata (stagger do GSAP) quando a grade rola até a viewport.
 */
export function Conquistas({ ganhas }: { ganhas: string[] }) {
  const tem = new Set(ganhas);
  return (
    <RevelarGrade className={css.conquistas} aoRolar>
      {CONQUISTAS.map((c) => {
        const desbloqueada = tem.has(c.slug);
        return (
          <div
            key={c.slug}
            className={`${css.conquista} ${desbloqueada ? "" : css.conquistaBloqueada}`}
            title={desbloqueada ? c.descricao : `Bloqueada — ${c.descricao}`}
          >
            <span className={css.conquistaEmblema} aria-hidden="true">
              {c.emblema}
            </span>
            <span className={css.conquistaNome}>{c.nome}</span>
            <span className={css.conquistaDesc}>{c.descricao}</span>
          </div>
        );
      })}
    </RevelarGrade>
  );
}
