"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { conectarVideoAoScroll } from "@/lib/movimento/video-scroll";
import styles from "./vitrine.module.css";

const LEGENDAS = [
  "Seu tempo, sob controle.",
  "Cada resposta, mais perto.",
  "O percurso até a aprovação.",
] as const;

/**
 * Vitrine cinematográfica do Percurso em ação: um vídeo que avança com o
 * scroll — mesmo motor do livro do hero (`video-scroll.ts`) — e três
 * legendas que se cruzam no mesmo progresso, empilhadas por grid em vez de
 * document flow (cada uma ocupa a célula inteira; só o `autoAlpha` decide
 * qual está por cima).
 *
 * Fica em /sobre, não na home: a home é porta de entrada curta de propósito
 * (ver `Hero.tsx`, "sem transformar a leitura da home em uma sequência de
 * scroll"). Aqui é onde já mora a apresentação completa.
 *
 * `prefers-reduced-motion`: sem pin, sem scrub. O vídeo nunca recebe `src`
 * (fica só o gradiente de fundo) e a legenda final — a de resumo — aparece
 * fixa; as duas primeiras somem. Não empilha as três de uma vez: texto sobre
 * texto ilegível é pior do que não animar.
 */
export function Vitrine() {
  const raiz = useRef<HTMLDivElement>(null);
  const cena = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const legendas = useRef<HTMLParagraphElement[]>([]);
  const [pronto, setPronto] = useState(false);

  useGSAP(
    () => {
      const elVideo = video.current;
      const elCena = cena.current;
      if (!elVideo || !elCena) return;

      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        const controle = conectarVideoAoScroll(elVideo, {
          aoMostrar: () => setPronto(true),
          aoFalhar: () => setPronto(false),
        });
        elVideo.preload = "auto";
        elVideo.src = "/media/vitrine-estudo.mp4";
        elVideo.load();

        gsap.set(legendas.current[0], { autoAlpha: 1, y: 0 });
        gsap.set(legendas.current.slice(1), { autoAlpha: 0, y: 14 });

        const mestre = gsap.timeline({ paused: true });
        for (let i = 1; i < legendas.current.length; i++) {
          const quando = i - 0.3;
          mestre.to(legendas.current[i - 1], { autoAlpha: 0, y: -14, duration: DUR.curta, ease: EASE.saida }, quando);
          mestre.to(legendas.current[i], { autoAlpha: 1, y: 0, duration: DUR.curta, ease: EASE.entrada }, quando);
        }

        const trigger = ScrollTrigger.create({
          trigger: raiz.current,
          start: "top top",
          end: "+=250%",
          pin: elCena,
          scrub: true,
          onUpdate(self) {
            controle.definirProgresso(self.progress);
            mestre.progress(self.progress);
          },
        });

        return () => {
          trigger.kill();
          controle.dispose();
          mestre.kill();
          elVideo.pause();
          elVideo.removeAttribute("src");
          elVideo.load();
        };
      });

      mm.add(REDUZIDO_QUERY, () => {
        elVideo.removeAttribute("src");
        elVideo.load();
        const ultima = legendas.current.length - 1;
        gsap.set(legendas.current.slice(0, ultima), { autoAlpha: 0 });
        gsap.set(legendas.current[ultima], { autoAlpha: 1, y: 0 });
        return () => {};
      });

      return () => mm.revert();
    },
    { scope: raiz }
  );

  return (
    <section className={styles.vitrine} ref={raiz} aria-label="O Percurso em ação">
      <div className={styles.cena} ref={cena}>
        <video
          className={styles.video}
          ref={video}
          data-ready={pronto}
          muted
          playsInline
          preload="none"
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
        />
        <div className={styles.legendas}>
          {LEGENDAS.map((texto, i) => (
            <p
              key={texto}
              ref={(el) => {
                if (el) legendas.current[i] = el;
              }}
              className={styles.legenda}
            >
              {texto}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
