"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { iniciarCinema, CENAS } from "@/lib/movimento/sequencia-cinematica";
import styles from "./cena-entrada.module.css";
import { NavCinema } from "./NavCinema";

export function CenaEntrada() {
  const raiz = useRef<HTMLElement>(null);
  /* A sequência sobe um elemento só. Antes era o botão sozinho, o que deixava
     a abertura sem dizer o que é o site; agora é o bloco inteiro de texto e
     ações, e a API de `iniciarCinema` continua a mesma. */
  const entrada = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [pronto, setPronto] = useState(false);

  useGSAP(() => {
    const preferencia = window.matchMedia(REDUZIDO_QUERY);
    let limpar: (() => void) | undefined;

    function iniciar() {
      limpar?.();
      setPronto(false);
      limpar = iniciarCinema({
        videos: videos.current.filter((v): v is HTMLVideoElement => v !== null),
        botao: entrada.current!,
        animador: gsap,
        reduzido: preferencia.matches,
        aoRevelar: () => setPronto(true),
      });
    }

    iniciar();
    preferencia.addEventListener("change", iniciar);
    return () => {
      preferencia.removeEventListener("change", iniciar);
      limpar?.();
    };
  }, { scope: raiz });

  /* Enquanto o bloco está invisível ele também sai do foco e do leitor de
     tela: um link que não dá para ver não deve ser o primeiro do Tab. */
  const trava = {
    tabIndex: pronto ? 0 : -1,
    "aria-disabled": !pronto,
    onClick: (evento: MouseEvent) => { if (!pronto) evento.preventDefault(); },
  };

  return (
    <section ref={raiz} className={styles.palco} aria-label="Percurso" data-pronto={pronto}>
      <div className={styles.filme} aria-hidden="true">
        {CENAS.map((cena, i) => (
          <video
            key={cena.arquivo}
            ref={(el) => { videos.current[i] = el; }}
            className={styles.video}
            width={1280}
            height={720}
            /* Só o primeiro plano tem poster: é o único cujo primeiro quadro a
               página mostra antes de haver vídeo. Os outros três entram por
               cross-fade, sempre com imagem por baixo. */
            poster={i === 0 ? "/media/abertura-poster.webp" : undefined}
            muted
            autoPlay={i === 0}
            playsInline
            preload="none"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
          />
        ))}
      </div>

      {/* O véu não é enfeite: o vídeo passa por um pôr do sol estourado, e sem
          ele o texto branco cai para 1,6:1 sobre o céu claro. Com ele, o pior
          quadro possível ainda entrega 6,7:1. */}
      <div className={styles.veu} aria-hidden="true" />

      <NavCinema />

      <div className={styles.centro}>
        <div ref={entrada} className={styles.entrada} aria-hidden={!pronto}>
          <p className={styles.rotulo}>Ensino médio · Estudo guiado</p>
          <h1 className={styles.titulo}>
            Você já sabe aonde quer chegar.
          </h1>
          <p className={styles.linha}>
            Falta o caminho. Aqui a matéria do ensino médio vira uma sequência de
            sessões, com questões para praticar e a correção logo depois.
          </p>
          <div className={styles.acoes}>
            <Link href="/entrar" prefetch={false} className={styles.principal} {...trava}>
              Começar no Percurso
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/como-funciona" prefetch={false} className={styles.secundario} {...trava}>
              Ver como funciona
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
