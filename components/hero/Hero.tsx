"use client";

import Link from "next/link";
import { useEffect, useRef, useState, Fragment } from "react";
import { Mola } from "@/lib/movimento/mola";
import { LivroAnimado, type LivroAnimadoRef } from "./LivroAnimado";
import styles from "./hero-cinematico.module.css";

/* =========================================================================
   HERO — vídeo cinematográfico dirigido pela rolagem.
   A mola acompanha a posição e pode inverter sem saltos. Só roda enquanto
   há movimento; os quadros atualizam refs, sem renderizar a árvore React.
   Com movimento reduzido, o livro fica aberto numa seção estática.
   ========================================================================= */

const PARADAS = [0, 0.26, 0.52, 0.76];

type Parte = { texto: string; enfase?: boolean };

const SLIDES: { partes: Parte[]; sub: string }[] = [
  {
    partes: [
      { texto: "Todo objetivo começa numa " },
      { texto: "página em branco", enfase: true },
      { texto: "." },
    ],
    sub: "Role a página. O livro abre junto com o seu percurso.",
  },
  {
    partes: [
      { texto: "Estude " },
      { texto: "o que cai", enfase: true },
      { texto: ". Do jeito que cai." },
    ],
    sub: "Nove matérias organizadas pela lógica das bancas — não pela ordem do livro didático.",
  },
  {
    partes: [
      { texto: "Cada página vira uma " },
      { texto: "questão a menos", enfase: true },
      { texto: "." },
    ],
    sub: "Questões comentadas, simulados cronometrados e correção que explica o erro.",
  },
  {
    partes: [
      { texto: "Da primeira página à " },
      { texto: "aprovação", enfase: true },
      { texto: "." },
    ],
    sub: "Monte seu cronograma, acompanhe as notas de corte e feche o ciclo.",
  },
];

const trava = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const dois = (n: number) => String(n).padStart(2, "0");

/** Quebra o título em palavras e caracteres animáveis, com atraso em cascata
 *  de 20ms por caractere — contando através das partes, como no original. */
function TituloAnimado({ partes }: { partes: Parte[] }) {
  let indice = 0;

  const renderiza = (texto: string) =>
    texto.split(/(\s+)/).map((pedaco, p) => {
      if (!pedaco) return null;
      if (!pedaco.trim()) return <Fragment key={`e${p}`}>{pedaco}</Fragment>;
      return (
        <span className="h1-word" key={`w${p}`}>
          {Array.from(pedaco).map((c, i) => (
            <span
              className="h1-char"
              key={i}
              style={{ transitionDelay: `${indice++ * 20}ms` }}
            >
              {c}
            </span>
          ))}
        </span>
      );
    });

  return (
    <h1 className="hero-h1">
      {partes.map((parte, i) =>
        parte.enfase ? (
          <em key={i}>{renderiza(parte.texto)}</em>
        ) : (
          <Fragment key={i}>{renderiza(parte.texto)}</Fragment>
        )
      )}
    </h1>
  );
}

export function Hero() {
  const raiz = useRef<HTMLElement>(null);
  const trilho = useRef<HTMLElement>(null);
  const dica = useRef<HTMLDivElement>(null);
  const livroAnimado = useRef<LivroAnimadoRef>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const secao = raiz.current;
    const livro = livroAnimado.current;
    if (!secao || !livro) return;

    const preferencia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let slideAtual = -1;
    let medida = 0;
    let ultimoAlvo = -1;

    function desenha(valor: number) {
      const p = trava(valor / 1000, 0, 1);
      livro?.desenhar(p);
      if (trilho.current) trilho.current.style.transform = "scaleX(" + p + ")";
      if (dica.current) dica.current.style.opacity = String(trava(1 - p * 9, 0, 1));

      let proximoSlide = 0;
      for (let i = PARADAS.length - 1; i >= 0; i--) {
        if (p >= PARADAS[i]) {
          proximoSlide = i;
          break;
        }
      }
      if (proximoSlide !== slideAtual) {
        slideAtual = proximoSlide;
        setSlide(proximoSlide);
      }
    }

    // Escala de 1000: a tolerância da mola em pixels também serve ao giro.
    const mola = new Mola({ valor: 0, alvo: 0, resposta: 0.32, aoQuadro: desenha });

    function progresso() {
      if (!secao) return 0;
      const alturaPalco = secao.firstElementChild?.getBoundingClientRect().height ?? window.innerHeight;
      const alcance = secao.offsetHeight - alturaPalco;
      return alcance > 0 ? trava(-secao.getBoundingClientRect().top / alcance, 0, 1) * 1000 : 0;
    }

    function atualiza() {
      medida = 0;
      if (preferencia.matches || document.hidden) return;
      const alvo = progresso();
      if (alvo !== ultimoAlvo) {
        ultimoAlvo = alvo;
        mola.mirar(alvo);
      }
    }

    function agenda() {
      if (!medida && !preferencia.matches && !document.hidden) {
        medida = requestAnimationFrame(atualiza);
      }
    }

    function sincroniza() {
      cancelAnimationFrame(medida);
      medida = 0;
      mola.parar();
      const valor = preferencia.matches ? 1000 : progresso();
      ultimoAlvo = valor;
      mola.fixar(valor);
      desenha(valor);
    }

    function visibilidade() {
      if (document.hidden) {
        cancelAnimationFrame(medida);
        medida = 0;
        mola.parar();
      } else {
        sincroniza();
      }
    }

    sincroniza();
    window.addEventListener("scroll", agenda, { passive: true });
    window.addEventListener("resize", agenda);
    document.addEventListener("visibilitychange", visibilidade);
    preferencia.addEventListener("change", sincroniza);
    const tamanho = new ResizeObserver(agenda);
    tamanho.observe(secao);
    if (secao.firstElementChild) tamanho.observe(secao.firstElementChild);

    return () => {
      mola.parar();
      cancelAnimationFrame(medida);
      tamanho.disconnect();
      window.removeEventListener("scroll", agenda);
      window.removeEventListener("resize", agenda);
      document.removeEventListener("visibilitychange", visibilidade);
      preferencia.removeEventListener("change", sincroniza);
    };
  }, []);

  return (
    <section className={`hero-scroll ${styles.hero}`} id="heroScroll" ref={raiz}>
      <div className="hero-sticky">

        <div className="hero-stage">
          <LivroAnimado ref={livroAnimado} />
        </div>

        {/* texto */}
        <div className="hero-content">
          <span className="hero-kicker">
            <i className="dot" /> ENEM · Vestibulares · Concursos · Escola
          </span>

          <div className="h1-stack">
            {SLIDES.map((s, i) => (
              <div
                className={`h1-slide${i === slide ? " is-on" : ""}`}
                key={i}
                aria-hidden={i !== slide}
              >
                <TituloAnimado partes={s.partes} />
                <p className="hero-sub">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* A home é só esta porta de entrada, então os CTAs ficam visíveis
              desde o topo — não mais escondidos no último quadro do scroll.

              O primário abre a APRESENTAÇÃO, dividida em oito passos, em vez
              de despejar tudo numa página só. O herói é a abertura dela; daqui
              em diante cada ideia tem a sua página e o seu endereço. */}
          <div className="hero-cta is-on">
            <Link href="/apresentacao" className="btn btn-primary">
              Conhecer o Percurso <span className="arrow">→</span>
            </Link>
            <Link href="/cadastro" className="btn">
              Começar agora
            </Link>
          </div>
        </div>

        <div className="scroll-hint" ref={dica}>
          <span className="mouse" />
          Role para abrir
        </div>

        <div className="hero-rail" aria-hidden="true">
          <span className="rail-num">{dois(slide + 1)}</span>
          <span className="rail-track">
            <i className="rail-fill" ref={trilho} />
          </span>
          <span>{dois(SLIDES.length)}</span>
        </div>
      </div>
    </section>
  );
}
