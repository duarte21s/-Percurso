"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { MOVIMENTO_QUERY } from "@/lib/gsap/preferencias";
import { Icone, type NomeIcone } from "@/components/ui/Icone";
import { Vitrine } from "@/components/secoes/Vitrine";
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

/** A porta de entrada do Percurso. Abre com a vitrine cinematográfica (quatro
 * planos em scroll, ver `Vitrine.tsx`) e desce para o pitch — título, CTA e
 * os três recursos. A regra antiga era manter a home fora de sequência de
 * scroll; foi revertida de propósito para essa reformulação. */
export function Hero() {
  const raiz = useRef<HTMLElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add(MOVIMENTO_QUERY, () => {
      const entrada = gsap.timeline({ defaults: { ease: "power3.out" } });
      entrada
        .from(`.${styles.conteudo} > *`, { autoAlpha: 0, y: 20, stagger: 0.1, duration: 0.7 })
        .from(`.${styles.cartao}`, { autoAlpha: 0, y: 18, stagger: 0.1, duration: 0.55 }, 0.3);
      return () => entrada.kill();
    });
    return () => media.revert();
  }, { scope: raiz });

  return (
    <main className={styles.pagina} ref={raiz}>
      <Vitrine />
      <section className={styles.hero} aria-labelledby="titulo-principal">
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
        </div>
      </section>
      <section className={styles.recursos} aria-label="Como o Percurso ajuda você a estudar">
        {RECURSOS.map((recurso) => <CartaoRecurso key={recurso.titulo} recurso={recurso} />)}
      </section>
      <div className={styles.encerramento} aria-hidden="true"><i />Feito para quem tem uma rotina corrida<i /><span>⌄</span></div>
    </main>
  );
}
