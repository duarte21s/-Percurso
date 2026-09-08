"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY } from "@/lib/gsap/preferencias";

/**
 * Transição de página. `template.tsx` (não `layout.tsx`) porque remonta a
 * cada navegação — é o que dá o gancho para a animação de entrada.
 *
 * De propósito, só transforma (`y`): esta `<div>` embrulha a página inteira,
 * então nunca pode ficar presa em `opacity: 0`/`visibility: hidden` se o JS
 * atrasar. Um empurrão de 10px que sobe com `power2.out` — o "sussurro" — e
 * `clearProps` devolve o controle ao CSS no fim. `gsap.matchMedia` desliga
 * sob reduced-motion; o `useGSAP` reverte no unmount (próxima navegação).
 */
export default function Template({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        gsap.from(ref.current, {
          autoAlpha: 0,
          y: 8,
          scale: .997,
          duration: DUR.base,
          ease: EASE.entradaSuave,
          clearProps: "opacity,visibility,transform",
        });
      });
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
