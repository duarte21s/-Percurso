"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "./registro";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "./preferencias";

/* =========================================================================
   Entrada e saída de um elemento que monta/desmonta — o "AnimatePresence"
   feito à mão com GSAP.

   Muitas revelações do projeto (fio de comentários, menu que some do DOM)
   não podem ficar sempre montadas: seria caro, ou o `aria-controls` apontaria
   para nada. Para essas, o padrão é:

     intenção (`aberto`)  →  presença no DOM (`montado`)

   Abrir monta na hora e o GSAP anima a entrada. Fechar dispara a animação de
   saída e só ao terminar (`then`) o React desmonta — nunca há corte seco.

   `criarEntrada` deve devolver um `gsap.from`/`fromTo` (parte do estado
   escondido). `criarSaida` deve devolver um `gsap.to` (vai para escondido) —
   o hook liga o `then` dele ao unmount. `gsap.matchMedia` troca por um fade
   curtíssimo sob reduced-motion, mantendo o mesmo contrato de desmontagem.
   ========================================================================= */

type Faz = (alvo: HTMLElement) => gsap.core.Tween | gsap.core.Timeline;

export function usarPresenca<T extends HTMLElement>(
  aberto: boolean,
  criarEntrada: Faz,
  criarSaida: Faz
): { ref: React.RefObject<T | null>; montado: boolean } {
  const ref = useRef<T | null>(null);
  const [montado, setMontado] = useState(aberto);

  // Abrir entra no DOM já; fechar espera a saída terminar (abaixo).
  useEffect(() => {
    if (aberto) setMontado(true);
  }, [aberto]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        let vivo = true;
        if (aberto) {
          const t = criarEntrada(el);
          return () => {
            vivo = false;
            t.kill();
          };
        }
        const t = criarSaida(el);
        t.then(() => {
          if (vivo) setMontado(false);
        });
        return () => {
          vivo = false;
          t.kill();
        };
      });

      mm.add(REDUZIDO_QUERY, () => {
        let vivo = true;
        if (aberto) {
          gsap.set(el, { autoAlpha: 1 });
          return () => {
            vivo = false;
          };
        }
        const t = gsap.to(el, {
          autoAlpha: 0,
          duration: 0.12,
          onComplete: () => {
            if (vivo) setMontado(false);
          },
        });
        return () => {
          vivo = false;
          t.kill();
        };
      });
    },
    { dependencies: [aberto, montado] }
  );

  return { ref, montado };
}
