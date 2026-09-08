"use client";

import { forwardRef, useImperativeHandle, useRef, type ButtonHTMLAttributes } from "react";
import { usarPressao } from "@/lib/gsap/usarPressao";

/**
 * `<button>` com feedback de pressão no pointer-down (apple-design §1,
 * técnica do GSAP: `gsap.quickTo` reaproveita um tween só). Encapsula o
 * `useRef` + `usarPressao` para não espalhar refs pelos chamadores.
 */
export const BotaoPressao = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { escala?: number }
>(function BotaoPressao({ escala = 0.96, children, ...props }, refExterno) {
  const ref = useRef<HTMLButtonElement>(null);
  useImperativeHandle(refExterno, () => ref.current as HTMLButtonElement);
  usarPressao(ref, escala);
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});
