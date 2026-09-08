"use client";

import { useRef, type RefObject } from "react";
import { gsap, useGSAP } from "./registro";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "./preferencias";

/* =========================================================================
   Abrir/fechar com UMA timeline.

   O padrão idiomático do GSAP para UI que abre e fecha (menu, gaveta, fio de
   comentários): construir a timeline PAUSADA uma vez e dar `.play()` /
   `.reverse()` conforme o booleano. O mesmo objeto anima ida e volta, com
   velocidade preservada se o usuário inverter no meio — sem recriar tween,
   sem `AnimatePresence`.

   Requisitos do elemento: precisa existir no DOM sempre (renderização
   condicional quebra o reverse). Deixe-o escondido no CSS em repouso
   (`visibility: hidden` ou a timeline no `progress(0)` cuida disso no
   primeiro run).

   `criar` recebe o elemento e devolve uma timeline pausada cujo estado
   final (progress 1) é "aberto".
   ========================================================================= */

export function usarTimelineAberto<T extends HTMLElement>(
  ref: RefObject<T | null>,
  criar: (alvo: T) => gsap.core.Timeline,
  aberto: boolean
): void {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Monta a timeline uma vez (por ciclo de matchMedia). Sem `aberto` nas
  // deps — a sincronização de estado fica no segundo efeito.
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const tl = criar(el);
        tl.progress(aberto ? 1 : 0).pause();
        tlRef.current = tl;
        return () => {
          tl.kill();
          tlRef.current = null;
        };
      });

      mm.add(REDUZIDO_QUERY, () => {
        // Sem movimento: só liga/desliga a visibilidade.
        gsap.set(el, { autoAlpha: aberto ? 1 : 0 });
        tlRef.current = null;
        return () => {};
      });
    },
    { scope: ref }
  );

  // Dirige a timeline quando `aberto` muda.
  useGSAP(
    () => {
      const tl = tlRef.current;
      if (tl) {
        if (aberto) tl.play();
        else tl.reverse();
      } else {
        const el = ref.current;
        if (el) gsap.set(el, { autoAlpha: aberto ? 1 : 0 });
      }
    },
    { dependencies: [aberto], scope: ref }
  );
}
