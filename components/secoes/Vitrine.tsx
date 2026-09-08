"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap/registro";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { conectarVideoAoScroll } from "@/lib/movimento/video-scroll";
import styles from "./vitrine.module.css";

const CENAS = [
  { arquivo: "/media/vitrine-1-comeco.mp4", legenda: "Seu tempo, sob controle." },
  { arquivo: "/media/vitrine-2-repeticao.mp4", legenda: "Cada resposta, mais perto." },
  { arquivo: "/media/vitrine-3-tempo.mp4", legenda: null },
  { arquivo: "/media/vitrine-4-vista.mp4", legenda: "O percurso até a aprovação." },
] as const;

const N = CENAS.length;
/** Largura da transição entre cenas, em unidades de "cena" (0 a N no eixo
 * contínuo). 0.5 = crossfade de meia-cena, centrado exatamente na fronteira. */
const LARGURA_TRANSICAO = 0.5;

/** 1 no platô da própria cena, decaindo linear até 0 ao entrar no platô da
 * vizinha — duas cenas adjacentes somam 1 durante a transição, nunca mais. */
function opacidadeDaCena(x: number, indice: number): number {
  const inicio = indice;
  const fim = indice + 1;
  if (x < inicio) return Math.max(0, 1 - (inicio - x) / (LARGURA_TRANSICAO / 2));
  if (x > fim) return Math.max(0, 1 - (x - fim) / (LARGURA_TRANSICAO / 2));
  return 1;
}

/**
 * Vitrine cinematográfica do Percurso em ação: quatro planos que se sucedem
 * numa única travessia de scroll — cada vídeo é o mesmo motor do livro do
 * hero (`video-scroll.ts`), só que fatiado em N trechos do eixo de progresso
 * em vez de um só. Vídeos e legendas cruzam (dissolve) na mesma fronteira;
 * a cena 3 (passagem de tempo) não tem legenda própria, é respiro visual
 * entre "a repetição" e "a vista".
 *
 * Fica em /sobre, não na home — ver a nota em `Hero.tsx` sobre a home ficar
 * curta de propósito.
 *
 * `prefers-reduced-motion`: nenhum vídeo recebe `src` (não há JSX com `src`
 * fixo, só o efeito abaixo popula), sem pin, sem scrub. Só a legenda final
 * — a de resumo — fica visível; as outras somem.
 */
export function Vitrine() {
  const raiz = useRef<HTMLDivElement>(null);
  const cena = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const legendas = useRef<(HTMLParagraphElement | null)[]>([]);
  const [prontos, setProntos] = useState<boolean[]>(() => CENAS.map(() => false));

  useGSAP(
    () => {
      const elCena = cena.current;
      if (!elCena || videos.current.some((v) => !v)) return;

      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const controles = CENAS.map((dado, i) => {
          const elVideo = videos.current[i]!;
          const controle = conectarVideoAoScroll(elVideo, {
            aoMostrar: () => setProntos((atual) => atual.map((v, j) => (j === i ? true : v))),
            aoFalhar: () => setProntos((atual) => atual.map((v, j) => (j === i ? false : v))),
          });
          elVideo.preload = "auto";
          elVideo.src = dado.arquivo;
          elVideo.load();
          return controle;
        });

        const setadoresVideo = videos.current.map((v) => gsap.quickSetter(v!, "autoAlpha"));
        const setadoresLegenda = legendas.current
          .filter((el): el is HTMLParagraphElement => el !== null)
          .map((el) => ({ el, setar: gsap.quickSetter(el, "autoAlpha") }));
        let cursorLegenda = 0;
        const legendaPorCena = CENAS.map((dado) => {
          if (!dado.legenda) return null;
          return setadoresLegenda[cursorLegenda++];
        });

        function atualizar(progresso: number) {
          const x = progresso * N;
          CENAS.forEach((_dado, i) => {
            const alfa = opacidadeDaCena(x, i);
            setadoresVideo[i](alfa);
            legendaPorCena[i]?.setar(alfa);
            controles[i].definirProgresso(Math.min(1, Math.max(0, x - i)));
          });
        }

        const trigger = ScrollTrigger.create({
          trigger: raiz.current,
          start: "top top",
          end: "+=400%",
          pin: elCena,
          scrub: true,
          onUpdate: (self) => atualizar(self.progress),
        });
        // Sincroniza o estado inicial sem esperar o primeiro evento de scroll —
        // mesmo cuidado do `agendar()` em `video-scroll.ts`: nunca depender só
        // de um evento futuro pra mostrar o quadro certo.
        atualizar(trigger.progress);

        return () => {
          trigger.kill();
          controles.forEach((c) => c.dispose());
          videos.current.forEach((v) => {
            v?.pause();
            v?.removeAttribute("src");
            v?.load();
          });
        };
      });

      mm.add(REDUZIDO_QUERY, () => {
        const ultima = legendas.current.filter((el) => el !== null).length - 1;
        legendas.current.filter((el): el is HTMLParagraphElement => el !== null).forEach((el, i) => {
          gsap.set(el, { autoAlpha: i === ultima ? 1 : 0, y: 0 });
        });
        return () => {};
      });

      return () => mm.revert();
    },
    { scope: raiz }
  );

  return (
    <section className={styles.vitrine} ref={raiz} aria-label="O Percurso em ação">
      <div className={styles.cena} ref={cena}>
        {CENAS.map((dado, i) => (
          <video
            key={dado.arquivo}
            className={styles.video}
            ref={(el) => {
              videos.current[i] = el;
            }}
            data-ready={prontos[i]}
            muted
            playsInline
            preload="none"
            disablePictureInPicture
            tabIndex={-1}
            aria-hidden="true"
          />
        ))}
        <div className={styles.legendas}>
          {CENAS.filter((dado) => dado.legenda).map((dado, i) => (
            <p
              key={dado.legenda}
              ref={(el) => {
                legendas.current[i] = el;
              }}
              className={styles.legenda}
            >
              {dado.legenda}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
