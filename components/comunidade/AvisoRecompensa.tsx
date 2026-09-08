"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { CONQUISTA_POR_SLUG } from "@/lib/gamificacao";
import css from "./estudos.module.css";
import type { RecompensaEstudo } from "@/lib/tipos";

/**
 * Aviso efêmero da recompensa no instante em que a atividade é registrada:
 * a chama acendeu (1ª do dia) e/ou uma conquista foi desbloqueada.
 *
 * Uma timeline do GSAP coreografa tudo: as linhas entram em stagger com
 * `back.out` (chegam com peso), a caixa segura ~4s, e sai de baixo com
 * `power2.in`. O `onComplete` desmonta o componente — o React só some depois
 * que o GSAP terminou a saída, sem `AnimatePresence`.
 *
 * `position: fixed` de propósito — é um toast, não faz parte do fluxo.
 */
export function AvisoRecompensa({ recompensa }: { recompensa: RecompensaEstudo }) {
  const [montado, setMontado] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const temAlgo = recompensa.primeiraDoDia || recompensa.conquistas.length > 0;

  const linhas: { chave: string; texto: string }[] = [];
  if (recompensa.primeiraDoDia) {
    const n = recompensa.chamaAtual;
    linhas.push({
      chave: "chama",
      texto: `🔥 Chama acesa — ${n} ${n === 1 ? "dia" : "dias"} · +20 XP`,
    });
  }
  for (const slug of recompensa.conquistas) {
    const c = CONQUISTA_POR_SLUG[slug];
    linhas.push({
      chave: `c-${slug}`,
      texto: `${c?.emblema ?? "🏅"} Conquista: ${c?.nome ?? slug}`,
    });
  }

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !temAlgo) return;
      const itens = el.querySelectorAll(`.${css.recompensaLinha}`);
      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const tl = gsap.timeline({ onComplete: () => setMontado(false) });
        tl.from(el, { autoAlpha: 0, y: 28, duration: DUR.sheet, ease: EASE.assenta })
          .from(
            itens,
            { autoAlpha: 0, y: 8, duration: DUR.curta, ease: EASE.entrada, stagger: 0.08 },
            "-=0.3"
          )
          .to(el, { autoAlpha: 1, duration: 4 }) // segura
          .to(el, { autoAlpha: 0, y: 16, duration: DUR.curta, ease: EASE.saida });
        return () => tl.kill();
      });

      mm.add(REDUZIDO_QUERY, () => {
        gsap.set([el, itens], { autoAlpha: 1, y: 0 });
        const call = gsap.delayedCall(4.2, () => {
          gsap.to(el, {
            autoAlpha: 0,
            duration: 0.2,
            onComplete: () => setMontado(false),
          });
        });
        return () => call.kill();
      });
    },
    { scope: ref, dependencies: [temAlgo] }
  );

  if (!temAlgo || !montado) return null;

  return (
    <div className={css.recompensa} role="status" aria-live="polite" ref={ref}>
      {linhas.map((l) => (
        <p key={l.chave} className={css.recompensaLinha}>
          {l.texto}
        </p>
      ))}
    </div>
  );
}
