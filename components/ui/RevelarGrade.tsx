"use client";

import {
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR, STAGGER } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";

interface Props {
  children: ReactNode;
  como?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Segundos entre os itens. */
  stagger?: number;
  /** Distância vertical do fade-in de cada item. */
  y?: number;
  /** Só anima quando rolar até a grade (senão, na montagem). */
  aoRolar?: boolean;
}

/**
 * Revela os filhos diretos em cascata com UM tween só — o `stagger` do GSAP
 * dá o ritmo, muito mais natural do que N animações independentes. Usa
 * `gsap.utils.toArray` do escopo do `useGSAP` para pegar os filhos.
 *
 * Serve para grades de cards (stats, conquistas). Cada filho fica invisível
 * via o próprio tween `from`; nada no CSS.
 */
export function RevelarGrade({
  children,
  como: Tag = "div",
  className = "",
  style,
  stagger = STAGGER.grade,
  y = 14,
  aoRolar = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const itens = Array.from(el.children) as HTMLElement[];
      if (!itens.length) return;

      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const t = gsap.from(itens, {
          autoAlpha: 0,
          y,
          duration: DUR.base,
          ease: EASE.entrada,
          stagger,
          ...(aoRolar
            ? { scrollTrigger: { trigger: el, start: "top 85%", once: true } }
            : {}),
        });
        return () => t.kill();
      });

      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(itens, { autoAlpha: 1, y: 0 });
        return () => {};
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
