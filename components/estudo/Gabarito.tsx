"use client";

import { useRef } from "react";
import { LETRAS } from "./Alternativas";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";

interface Props {
  acertou: boolean;
  correta: number;
  explicacao: string;
  /** A alternativa que a pessoa marcou. Com ela, o erro diz as duas letras. */
  marcada?: number;
  /**
   * Entrada com movimento. No resultado da sessão o comentário é o conteúdo
   * principal e aparece em lista, então entra parado: um `from` de opacidade
   * que não rodasse deixaria o gabarito invisível.
   */
  animar?: boolean;
}

/**
 * O comentário de uma questão: por que a certa está certa e por que as outras
 * enganam. O valor não está em saber que errou, está em saber por quê. Aparece
 * no resultado da sessão, depois de finalizada — nunca durante a resolução.
 */
export function Gabarito({ acertou, correta, explicacao, marcada, animar = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !animar) return;
      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 10,
          filter: "blur(4px)",
          duration: DUR.base,
          ease: EASE.entrada,
        });
      });
      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1 });
      });
    },
    { scope: ref, dependencies: [animar] }
  );

  const titulo = acertou
    ? "Correto."
    : marcada !== undefined
      ? `Você marcou ${LETRAS[marcada]}; a correta é ${LETRAS[correta]}.`
      : `Alternativa ${LETRAS[correta]}.`;

  return (
    /* `status` anuncia o comentário quando ele surge sozinho. Na lista do
       resultado ele já está na página, e dezenas de regiões vivas lidas de
       uma vez atropelariam o leitor de tela. */
    <div className="q-explain" role={animar ? "status" : undefined} ref={ref}>
      <strong>{titulo}</strong>{" "}
      {/* Questão vinda das provas do ENEM entra sem comentário: o INEP publica
          o gabarito, não a explicação. Dizer isso é melhor que deixar um
          espaço em branco onde a pessoa espera o porquê. */}
      {explicacao || (
        <span className="dim">
          Essa é uma questão original do ENEM, e o INEP publica só o gabarito —
          o comentário ainda não foi escrito.
        </span>
      )}
    </div>
  );
}
