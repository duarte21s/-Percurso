"use client";

import { useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import { conectarVideoAoScroll } from "@/lib/movimento/video-scroll";
import styles from "./livro-animado.module.css";

export interface LivroAnimadoRef {
  desenhar: (progresso: number) => void;
}

/** Take cinematográfica já gerada com Kling/Higgsfield, codificada para seek. */
export function LivroAnimado({ ref }: { ref?: Ref<LivroAnimadoRef> }) {
  const video = useRef<HTMLVideoElement>(null);
  const controlador = useRef<ReturnType<typeof conectarVideoAoScroll> | null>(null);
  const progresso = useRef(0);
  const [pronto, setPronto] = useState(false);

  useImperativeHandle(ref, () => ({
    desenhar(valor: number) {
      progresso.current = valor;
      controlador.current?.definirProgresso(valor);
    },
  }), []);

  useEffect(() => {
    const elemento = video.current;
    if (!elemento) return;
    const preferencia = window.matchMedia("(prefers-reduced-motion: reduce)");

    function configurar() {
      if (!elemento) return;
      controlador.current?.dispose();
      controlador.current = null;
      setPronto(false);
      elemento.pause();

      if (preferencia.matches) {
        elemento.removeAttribute("src");
        elemento.preload = "none";
        elemento.load();
        return;
      }

      const controle = conectarVideoAoScroll(elemento, {
        aoMostrar: () => setPronto(true),
        aoFalhar: () => setPronto(false),
      });
      controlador.current = controle;
      controle.definirProgresso(progresso.current);
      controle.suspender(document.hidden);
      elemento.preload = "auto";
      elemento.src = "/media/hero-livro.mp4";
      elemento.load();
    }

    function visibilidade() {
      controlador.current?.suspender(document.hidden);
    }

    configurar();
    preferencia.addEventListener("change", configurar);
    document.addEventListener("visibilitychange", visibilidade);

    return () => {
      preferencia.removeEventListener("change", configurar);
      document.removeEventListener("visibilitychange", visibilidade);
      controlador.current?.dispose();
      controlador.current = null;
      elemento.pause();
      elemento.removeAttribute("src");
      elemento.load();
    };
  }, []);

  return (
    <div className={styles.cena} aria-hidden="true" data-renderer={pronto ? "cinema" : "poster"}>
      <div className={styles.filme}>
      <picture className={styles.poster} data-hidden={pronto}>
        <source media="(prefers-reduced-motion: reduce)" srcSet="/media/hero-open.png" />
        <img src="/media/hero-closed.png" alt="" fetchPriority="high" />
      </picture>
      <video
        className={styles.video}
        ref={video}
        data-ready={pronto}
        muted
        playsInline
        preload="none"
        disablePictureInPicture
        tabIndex={-1}
      />
      </div>
    </div>
  );
}
