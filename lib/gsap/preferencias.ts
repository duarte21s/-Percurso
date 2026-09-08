"use client";

import { useEffect, useState } from "react";

/* =========================================================================
   Preferências de acessibilidade.

   Duas frentes:
   1. Hooks React (`usarMovimentoReduzido` etc.) — para o componente DECIDIR
      o que renderizar (ex.: montar ou não um wrapper animado).
   2. `gsap.matchMedia()` dentro do `useGSAP` — para a animação em si se
      adaptar e reverter sozinha quando a media query muda. É o caminho
      idiomático do GSAP; ver `comMovimento()` abaixo.

   Os hooks começam `false` (servidor e primeiro paint concordam) e corrigem
   no efeito — sem mismatch de hidratação.
   ========================================================================= */

function usarMedia(query: string): boolean {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setAtivo(mq.matches);
    const aoMudar = (e: MediaQueryListEvent) => setAtivo(e.matches);
    mq.addEventListener("change", aoMudar);
    return () => mq.removeEventListener("change", aoMudar);
  }, [query]);

  return ativo;
}

export const usarMovimentoReduzido = () =>
  usarMedia("(prefers-reduced-motion: reduce)");

export const usarTransparenciaReduzida = () =>
  usarMedia("(prefers-reduced-transparency: reduce)");

export const usarContrasteAlto = () => usarMedia("(prefers-contrast: more)");

export const REDUZIDO_QUERY = "(prefers-reduced-motion: reduce)";
export const MOVIMENTO_QUERY = "(prefers-reduced-motion: no-preference)";
