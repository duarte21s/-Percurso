"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY } from "@/lib/gsap/preferencias";

/**
 * Transição de página da área /app. Igual à do grupo (site): só transforma
 * (`y`), nunca opacidade — esta `<div>` embrulha a página inteira e não pode
 * ficar presa invisível se o JS atrasar. `gsap.matchMedia` desliga sob
 * reduced-motion; `useGSAP` reverte no unmount (próxima navegação).
 */
export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        gsap.from(ref.current, {
          y: 10,
          duration: DUR.curta,
          ease: EASE.entradaSuave,
          clearProps: "transform",
        });
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
