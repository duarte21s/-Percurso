"use client";

import { type RefObject } from "react";
import { gsap, useGSAP } from "./registro";
import { EASE, DUR } from "./vocabulario";
import { MOVIMENTO_QUERY } from "./preferencias";

/* =========================================================================
   Feedback de pressão — princípio nº 1 da apple-design, com a técnica do
   GSAP.

   `gsap.quickTo` cria UMA função de tween reutilizável para a mesma
   propriedade do mesmo alvo: cada chamada só re-mira o valor, sem alocar um
   tween novo por evento de pointer. É o jeito do GSAP para valores que
   mudam muitas vezes (drag, hover, pressão).

   O feedback nasce no `pointerdown`. ~10px de tolerância: arrastar para fora
   solta, voltar re-arma. Tudo dentro de `useGSAP` com `scope` → cleanup e
   Strict Mode cobertos. `gsap.matchMedia` desliga sob reduced-motion e
   reverte sozinho se a preferência mudar.
   ========================================================================= */

export function usarPressao<T extends HTMLElement>(
  ref: RefObject<T | null>,
  escala = 0.96
): void {
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const mira = gsap.quickTo(el, "scale", {
          duration: DUR.micro,
          ease: EASE.enche,
        });

        let ativo = false;
        let origem = { x: 0, y: 0 };

        const pressiona = (e: PointerEvent) => {
          ativo = true;
          origem = { x: e.clientX, y: e.clientY };
          try {
            el.setPointerCapture(e.pointerId);
          } catch {
            /* pointer já liberado — ignora */
          }
          mira(escala);
        };
        const move = (e: PointerEvent) => {
          if (!ativo) return;
          const longe =
            Math.hypot(e.clientX - origem.x, e.clientY - origem.y) > 10;
          mira(longe ? 1 : escala);
        };
        const solta = () => {
          if (!ativo) return;
          ativo = false;
          mira(1);
        };

        el.addEventListener("pointerdown", pressiona);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerup", solta);
        el.addEventListener("pointercancel", solta);

        return () => {
          el.removeEventListener("pointerdown", pressiona);
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerup", solta);
          el.removeEventListener("pointercancel", solta);
          gsap.set(el, { clearProps: "scale" });
        };
      });
    },
    { scope: ref }
  );
}
