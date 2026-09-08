"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR, STAGGER } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import css from "./estudos.module.css";

interface Ponto {
  rotulo: string;
  valor: number;
}

/**
 * Gráfico de barras em SVG puro. As colunas sobem de 0 em cascata (stagger do
 * GSAP, `power2.out`) quando o gráfico rola até a viewport; os números por
 * cima entram logo depois. Uma timeline só coreografa as duas coisas.
 */
export function GraficoBarras({
  titulo,
  dados,
  unidade = "",
}: {
  titulo: string;
  dados: Ponto[];
  unidade?: string;
}) {
  const max = Math.max(1, ...dados.map((d) => d.valor));
  const L = 260;
  const A = 90;
  const n = dados.length || 1;
  const gap = 6;
  const largura = (L - gap * (n - 1)) / n;
  const total = dados.reduce((s, d) => s + d.valor, 0);
  const serie = dados.map((d) => `${d.rotulo}: ${d.valor}`).join("; ");

  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const raiz = ref.current;
      if (!raiz || total === 0) return;
      const barras = raiz.querySelectorAll<SVGRectElement>("[data-barra]");
      const valores = raiz.querySelectorAll<SVGTextElement>("[data-valor]");
      if (!barras.length) return;

      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: raiz, start: "top 85%", once: true },
        });
        tl.from(barras, {
          scaleY: 0,
          transformOrigin: "50% 100%",
          duration: DUR.base,
          ease: EASE.entrada,
          stagger: STAGGER.grade,
        }).from(
          valores,
          { autoAlpha: 0, y: 4, duration: DUR.curta, ease: EASE.entrada, stagger: STAGGER.grade },
          "-=0.2"
        );
        return () => tl.kill();
      });

      mm.add(REDUZIDO_QUERY, () => {
        gsap.set([barras, valores], { autoAlpha: 1, scaleY: 1, y: 0 });
        return () => {};
      });
    },
    { scope: ref, dependencies: [total] }
  );

  return (
    <div className={css.grafico} ref={ref}>
      <p className={css.graficoTitulo}>{titulo}</p>
      {total === 0 ? (
        <p style={{ fontSize: 13, color: "var(--text-3)" }}>
          Sem dados ainda. Responda algumas questões e volte.
        </p>
      ) : (
        <svg
          className={css.graficoSvg}
          viewBox={`0 0 ${L} ${A + 28}`}
          role="img"
          aria-label={`${titulo}. ${total} ${unidade} no período. ${serie}.`}
        >
          {dados.map((d, i) => {
            const h = Math.max(
              Math.round((d.valor / max) * A),
              d.valor > 0 ? 2 : 0
            );
            const x = i * (largura + gap);
            return (
              <g key={i}>
                <rect
                  data-barra
                  className={css.graficoBarra}
                  x={x}
                  y={A - h}
                  width={largura}
                  height={h}
                  rx="2"
                >
                  <title>{`${d.rotulo}: ${d.valor} ${unidade}`}</title>
                </rect>
                {d.valor > 0 && largura >= 20 && (
                  <text
                    data-valor
                    className={css.graficoValor}
                    x={x + largura / 2}
                    y={A - h - 4}
                    textAnchor="middle"
                  >
                    {d.valor}
                  </text>
                )}
                <text
                  className={css.graficoEixo}
                  x={x + largura / 2}
                  y={A + 14}
                  textAnchor="middle"
                >
                  {d.rotulo}
                </text>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}
