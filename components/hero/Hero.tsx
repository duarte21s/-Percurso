"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { Icone, type NomeIcone } from "@/components/ui/Icone";
import { LivroAnimado, type LivroAnimadoRef } from "./LivroAnimado";
import styles from "./hero-cinematico.module.css";

type Recurso = { titulo: string; texto: string; icone: NomeIcone; href: string };

const RECURSOS: Recurso[] = [
  { titulo: "Plano de estudos", texto: "Rotina personalizada para o seu tempo e objetivos.", icone: "agenda", href: "/cronograma" },
  { titulo: "Simulados", texto: "Treine com questões reais e acompanhe sua evolução.", icone: "book", href: "/entrar?proximo=/app/simulados" },
  { titulo: "Seu progresso", texto: "Visualize sua evolução e mantenha a motivação.", icone: "alta", href: "/entrar?proximo=/app" },
];

function CartaoRecurso({ recurso }: { recurso: Recurso }) {
  return (
    <Link className={styles.cartao} href={recurso.href}>
      <span className={styles.iconeCartao}><Icone nome={recurso.icone} tracoLargura={1.8} /></span>
      <span className={styles.textoCartao}><strong>{recurso.titulo}</strong><span>{recurso.texto}</span></span>
      <span className={styles.setaCartao} aria-hidden="true">→</span>
    </Link>
  );
}

/** A porta de entrada do Percurso. O vídeo do livro continua progressivo,
 * porém sem transformar a leitura da home em uma sequência de scroll. */
export function Hero() {
  const raiz = useRef<HTMLElement>(null);
  const livro = useRef<LivroAnimadoRef>(null);

  useGSAP(() => {
    const livroAtual = livro.current;
    livroAtual?.desenhar(0.54);
    const media = gsap.matchMedia();
    media.add(REDUZIDO_QUERY, () => { livroAtual?.desenhar(1); });
    media.add(MOVIMENTO_QUERY, () => {
      const entrada = gsap.timeline({ defaults: { ease: "power3.out" } });
      entrada
        .from(`.${styles.conteudo} > *`, { autoAlpha: 0, y: 20, stagger: 0.1, duration: 0.7 })
        .from(`.${styles.livro}`, { autoAlpha: 0, x: 34, y: 18, scale: 0.96, duration: 1 }, 0.12)
        .from(`.${styles.cartao}`, { autoAlpha: 0, y: 18, stagger: 0.1, duration: 0.55 }, 0.45);
      gsap.to(`.${styles.livro}`, { y: -10, rotate: -0.8, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });
    return () => media.revert();
  }, { scope: raiz });

  return (
    <main className={styles.pagina} ref={raiz}>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <span className={`${styles.folha} ${styles.folhaUm}`} aria-hidden="true" />
        <span className={`${styles.folha} ${styles.folhaDois}`} aria-hidden="true" />
        <span className={`${styles.traco} ${styles.tracoUm}`} aria-hidden="true" />
        <span className={`${styles.traco} ${styles.tracoDois}`} aria-hidden="true" />
        <div className={styles.gradeHero}>
          <div className={styles.conteudo}>
            <p className={styles.sobrelinha}>ESTUDO ORGANIZADO <b>•</b> GRANDES CONQUISTAS</p>
            <h1 id="titulo-principal">Seu caminho até a <span>aprovação</span> começa aqui.</h1>
            <p className={styles.subtitulo}>Organize seus estudos para o ENEM e vestibulares, mesmo com uma rotina corrida.</p>
            <Link href="/cadastro" className={styles.cta}>Começar agora <span aria-hidden="true">→</span></Link>
            <ul className={styles.beneficios} aria-label="Benefícios do Percurso">
              <li><Icone nome="check" />Mais foco</li><li><Icone nome="check" />Mais organização</li><li><Icone nome="check" />Mais resultados</li>
            </ul>
          </div>
          <div className={styles.cenaLivro} aria-label="Livro Percurso animado">
            <p className={styles.anotacaoTopo}>ENEM<br />Vestibulares<br />Faculdades<br />Um futuro maior</p>
            <div className={styles.livro}><LivroAnimado ref={livro} /></div>
            <p className={styles.anotacaoLateral}>Disciplina<br />também é liberdade.</p>
          </div>
        </div>
      </section>
      <section className={styles.recursos} aria-label="Como o Percurso ajuda você a estudar">
        {RECURSOS.map((recurso) => <CartaoRecurso key={recurso.titulo} recurso={recurso} />)}
      </section>
      <div className={styles.encerramento} aria-hidden="true"><i />Feito para quem tem uma rotina corrida<i /><span>⌄</span></div>
    </main>
  );
}
