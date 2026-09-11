"use client";

import Link from "next/link";
import { useRef } from "react";
import { ScrollTrigger, useGSAP } from "@/lib/gsap/registro";
import { REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { PercursoBook, type PercursoBookRef } from "./PercursoBook";
import styles from "./ato-livro.module.css";

/**
 * Segundo ato da home: o livro abre conforme a pessoa desce.
 *
 * Quem raspa o vídeo é o `ScrollTrigger` com `scrub` — o mesmo caminho que
 * `lib/gsap/vocabulario.ts` descreve como o único lugar onde o tempo não é o
 * relógio, e sim a rolagem. O `LivroAnimado` recebe só o progresso de 0 a 1 e
 * cuida do resto: uma busca por vez, sempre terminando no último quadro pedido.
 *
 * A sequência da abertura não é tocada aqui. Ela termina sozinha, congela no
 * quadro final do quarto plano, e este ato só começa a se mexer quando há
 * rolagem — nunca os dois ao mesmo tempo.
 */
export function AtoLivro() {
  const raiz = useRef<HTMLElement>(null);
  const livro = useRef<PercursoBookRef>(null);

  useGSAP(() => {
    const preferencia = window.matchMedia(REDUZIDO_QUERY);
    let gatilho: ScrollTrigger | undefined;

    function montar() {
      gatilho?.kill();
      gatilho = undefined;

      /* Movimento reduzido: sem gatilho e sem rolagem longa. O `LivroAnimado`
         já troca para `hero-open.png` por media query e não baixa o vídeo —
         desenhar o progresso final aqui só mantém os dois lados de acordo. */
      if (preferencia.matches) {
        livro.current?.desenhar(1);
        return;
      }

      gatilho = ScrollTrigger.create({
        trigger: raiz.current!,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => livro.current?.desenhar(self.progress),
      });
    }

    montar();
    preferencia.addEventListener("change", montar);
    return () => {
      preferencia.removeEventListener("change", montar);
      gatilho?.kill();
    };
  }, { scope: raiz });

  return (
    <section ref={raiz} className={styles.ato} aria-labelledby="ato-livro-titulo">
      <div className={styles.fixo}>
        <div className={styles.cena}>
          <PercursoBook ref={livro} />
        </div>

        <div className={styles.texto}>
          <h2 id="ato-livro-titulo" className={styles.titulo}>
            Abra pela primeira página.
          </h2>
          <Link href="/entrar" prefetch={false} className={styles.cta}>
            Começar no Percurso
          </Link>
        </div>
      </div>
    </section>
  );
}
