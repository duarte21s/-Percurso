"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";

interface Props {
  children: ReactNode;
  /** Atraso em cascata quando várias `Revelar` entram juntas (1–6). */
  atraso?: 1 | 2 | 3 | 4 | 5 | 6;
  como?: ElementType;
  className?: string;
}

/**
 * Aparece ao entrar na viewport — uma vez. ScrollTrigger dispara um `fromTo`
 * (`y` + fade) com `power3.out`: arranca e desacelera, a leitura de "subiu e
 * assentou". O `.rv` no CSS mantém o elemento invisível entre o paint do
 * servidor e a hidratação (sem flash).
 *
 * `gsap.matchMedia` cobre reduced-motion sem branch manual: naquele caso só
 * fixa o estado final, e reverte se a preferência mudar.
 */
export function Revelar({ children, atraso, como: Tag = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const t = gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: DUR.longa,
            ease: EASE.entrada,
            delay: atraso ? atraso * 0.06 : 0,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
        return () => t.kill();
      });

      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1, y: 0 });
        return () => {};
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={`rv ${className}`.trim()}>
      {children}
    </Tag>
  );
}
