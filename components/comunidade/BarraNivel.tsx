"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";

/**
 * Preenchimento da barra de nível. A largura final vem do CSS inline (`pct`);
 * o GSAP anima `scaleX` de 0 com `expo.out` — cauda longa, lê como "encheu".
 * Dispara quando a barra rola até a viewport.
 */
export function BarraNivel({ pct }: { pct: number }) {
  const ref = useRef<HTMLElement>(null);
  const largura = `${Math.max(0, Math.min(100, pct))}%`;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const t = gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: DUR.enche,
          ease: EASE.enche,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
        return () => t.kill();
      });

      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { scaleX: 1 });
        return () => {};
      });
    },
    { scope: ref }
  );

  return <i ref={ref} style={{ width: largura }} />;
}
