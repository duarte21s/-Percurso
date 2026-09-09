"use client";

import { useEffect, useRef, useState } from "react";
import { REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import styles from "./vitrine.module.css";

const CENAS = [
  { arquivo: "/media/vitrine-1-comeco.mp4", legenda: "Seu tempo, sob controle." },
  { arquivo: "/media/vitrine-2-repeticao.mp4", legenda: "Cada resposta, mais perto." },
  { arquivo: "/media/vitrine-3-tempo.mp4", legenda: null },
  { arquivo: "/media/vitrine-4-vista.mp4", legenda: "O percurso até a aprovação." },
] as const;

/**
 * Vitrine cinematográfica do Percurso em ação: quatro planos que tocam em
 * sequência, sozinhos — sem depender de o visitante rolar a página. Cada
 * vídeo toca uma vez; quando termina, o próximo entra em cross-fade (CSS,
 * por `data-ativo`) e a legenda troca junto. No fim, volta pro primeiro —
 * um loop ambiente, como um vídeo de fundo comum.
 *
 * Trocado de propósito do scroll-scrub anterior: rolar a página pra "ganhar"
 * o próximo quadro pedia um gesto que a maioria não faz — o vídeo simplesmente
 * não aparecia pra quem só carregava a página e olhava.
 *
 * `prefers-reduced-motion`: nenhum vídeo recebe `src` (nem autoplay, nem
 * download). Só a legenda final — a de resumo — fica visível, fixa.
 */
export function Vitrine() {
  const [ativa, setAtiva] = useState(0);
  const [reduzido, setReduzido] = useState(false);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia(REDUZIDO_QUERY);
    setReduzido(mq.matches);
    const aoMudar = (e: MediaQueryListEvent) => setReduzido(e.matches);
    mq.addEventListener("change", aoMudar);
    return () => mq.removeEventListener("change", aoMudar);
  }, []);

  useEffect(() => {
    if (reduzido) return;
    const video = videos.current[ativa];
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {
      /* autoplay bloqueado por alguma política do navegador — a cena fica
         no primeiro quadro em vez de travar; não é erro que valha logar. */
    });
  }, [ativa, reduzido]);

  function passarParaProxima() {
    setAtiva((i) => (i + 1) % CENAS.length);
  }

  return (
    <section className={styles.vitrine} aria-label="O Percurso em ação">
      <div className={styles.cena}>
        {CENAS.map((dado, i) => (
          <video
            key={dado.arquivo}
            className={styles.video}
            data-ativo={!reduzido && ativa === i}
            ref={(el) => {
              videos.current[i] = el;
            }}
            src={reduzido ? undefined : dado.arquivo}
            muted
            playsInline
            preload={reduzido ? "none" : "auto"}
            disablePictureInPicture
            tabIndex={-1}
            aria-hidden="true"
            onEnded={i === ativa ? passarParaProxima : undefined}
          />
        ))}
        <div className={styles.legendas}>
          {CENAS.map(
            (dado, i) =>
              dado.legenda && (
                <p
                  key={dado.legenda}
                  className={styles.legenda}
                  data-ativo={reduzido ? i === CENAS.length - 1 : ativa === i}
                >
                  {dado.legenda}
                </p>
              )
          )}
        </div>
      </div>
    </section>
  );
}
