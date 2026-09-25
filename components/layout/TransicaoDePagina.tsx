"use client";

import { useRef, type ReactNode } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY } from "@/lib/gsap/preferencias";

/**
 * Transição de entrada de página. Morava em `app/(site)/template.tsx` e
 * `app/app/template.tsx`; saiu de lá por causa do CSP.
 *
 * O Next 16.3 carrega o JavaScript de todo `template.tsx` por um <script>
 * que ele monta SEM nonce (`templateScripts`). O mesmo chunk também sai
 * com nonce por outro caminho, e o React escreve uma só tag por src de
 * chunk — a que chegar primeiro. Sem sessão chega a com nonce. Com sessão,
 * o layout espera o Supabase antes de devolver `{children}`, e qualquer
 * ida à rede nesse ponto faz a sem nonce chegar primeiro. O
 * `'strict-dynamic'` do proxy.ts a bloqueia, o template nunca carrega e
 * nada abaixo dele hidrata: a página fica inerte, e em branco onde houver
 * `.rv` (Revelar).
 *
 * Importado pelo layout, este componente entra nos scripts do próprio
 * layout, que o Next emite com nonce. `scripts/checar-sem-template.mjs`
 * acusa a volta de um `template.*` quando é rodado.
 *
 * O gatilho é o mesmo do template: ele remontava só quando mudava o
 * segmento logo abaixo do layout (a chave dele, sem a query string), não em
 * toda navegação. `useSelectedLayoutSegment()` devolve exatamente esse
 * segmento, então /app/cronograma → /app/faculdades anima e
 * /app/materias → /app/materias/matematica não, como antes. O
 * `revertOnUpdate` desfaz a animação anterior, como o unmount do template
 * fazia. A animação em si é a mesma que estava no template, sem alteração.
 */
export function TransicaoDePagina({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const segmento = useSelectedLayoutSegment();

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
    { scope: ref, dependencies: [segmento], revertOnUpdate: true }
  );

  return <div ref={ref}>{children}</div>;
}
