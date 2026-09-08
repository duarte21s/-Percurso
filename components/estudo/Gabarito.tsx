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
}

/**
 * O comentário que abre logo abaixo das alternativas assim que a pessoa
 * responde. É a peça central do produto: o valor não está em saber que
 * errou, está em saber por quê. Entra com um `gsap.from` — desfoca, sobe e
 * assenta com `power3.out`, sem quicar.
 */
export function Gabarito({ acertou, correta, explicacao }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
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
    { scope: ref }
  );

  return (
    <div className="q-explain" role="status" ref={ref}>
      <strong>
        {acertou ? "Correto." : `Alternativa ${LETRAS[correta]}.`}
      </strong>{" "}
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
