"use client";

import { useEffect, useRef } from "react";

/**
 * Fita fina no topo indicando quanto da página já foi lida.
 *
 * Escreve direto no style do nó em vez de passar por estado do React: isso
 * roda a cada frame de scroll, e re-renderizar a árvore nessa frequência é
 * caro à toa.
 */
export function BarraLeitura() {
  const barra = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barra.current;
    if (!el) return;

    let agendado = false;

    function aoRolar() {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(() => {
        agendado = false;
        const alcance =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = alcance > 0 ? window.scrollY / alcance : 0;
        if (el) el.style.width = `${Math.min(1, Math.max(0, p)) * 100}%`;
      });
    }

    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return <div className="read-bar" ref={barra} aria-hidden="true" />;
}
