"use client";

import { useEffect, useRef, useState } from "react";
import { MATERIAS } from "@/lib/conteudo/materias";
import { FACULDADES } from "@/lib/conteudo/faculdades";
import type { Estatisticas } from "@/lib/tipos";

/** 9 matérias × 15 tópicos. Contado da fonte, para não virar copy solta. */
const CONTEUDOS = MATERIAS.reduce((n, m) => n + m.topicos.length, 0);

/* Também contado da fonte: estava fixo em 46 e ficou mentindo assim que a
   base de cursos cresceu. */
const CURSOS = FACULDADES.length;

interface Props {
  stats: Estatisticas;
}

interface Item {
  alvo: number;
  sufixo?: string;
  rotulo: string;
}

/** Conta de 0 até o alvo com easing cúbico, disparando quando entra na tela. */
function Contador({ alvo, sufixo = "", rotulo }: Item) {
  const [valor, setValor] = useState(0);
  const [pronto, setPronto] = useState(false);
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = caixa.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);

          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setValor(alvo);
            setPronto(true);
            return;
          }

          const duracao = 1400;
          const t0 = performance.now();
          const passo = (agora: number) => {
            const k = Math.min(1, (agora - t0) / duracao);
            const suave = 1 - Math.pow(1 - k, 3);
            setValor(Math.round(alvo * suave));
            if (k < 1) requestAnimationFrame(passo);
            else setPronto(true);
          };
          requestAnimationFrame(passo);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [alvo]);

  return (
    <div className="stat" ref={caixa}>
      <div className="stat-num">
        {valor.toLocaleString("pt-BR")}
        {pronto && sufixo ? <span>{sufixo}</span> : sufixo}
      </div>
      <div className="stat-label">{rotulo}</div>
    </div>
  );
}

export function Numeros({ stats }: Props) {
  /* Os números vêm do banco (view vw_estatisticas) e os rótulos descrevem o
     que eles contam de verdade.

     Dois rótulos daqui eram falsos e saíram. "Aulas em vídeo e material
     escrito" somava a coluna `materias.aulas`, herdada do site estático: não
     existe uma aula sequer no projeto. E "questões comentadas alternativa por
     alternativa" contava as 2.776 do banco, sendo que só as autorais nascem
     com comentário — as do ENEM vêm com o gabarito do INEP e ganham
     explicação quando alguém pede. Número real com rótulo errado é a forma
     mais fácil de mentir sem perceber. */
  const itens: Item[] = [
    {
      alvo: stats.questoes,
      rotulo: "Questões no banco, das provas reais e do acervo autoral",
    },
    {
      alvo: stats.provas,
      rotulo: "Provas do ENEM na íntegra, de 2009 a 2023",
    },
    {
      alvo: CONTEUDOS,
      rotulo: `Conteúdos mapeados nas ${stats.materias} matérias`,
    },
    {
      alvo: CURSOS,
      rotulo: "Combinações de curso e universidade mapeadas",
    },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div className="stats">
          {itens.map((i) => (
            <Contador key={i.rotulo} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
}
