"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import styles from "./vitrine.module.css";

const CENAS = [
  { arquivo: "/media/vitrine-1-comeco.mp4", legenda: "Seu tempo, sob controle." },
  { arquivo: "/media/vitrine-2-repeticao.mp4", legenda: "Cada resposta, mais perto." },
  { arquivo: "/media/vitrine-3-tempo.mp4", legenda: null },
  { arquivo: "/media/vitrine-4-vista.mp4", legenda: "O percurso até a aprovação." },
] as const;

/** Se o vídeo não avisar que começou em 1,5s, a cena segue mesmo assim. */
const ESPERA_MAXIMA_MS = 1500;

/**
 * A quantos segundos do fim do PRIMEIRO plano a cena avisa que está acabando.
 * O plano dura 6,08s: 1,4s deixa a interface terminar de entrar junto com o
 * último quadro, em vez de depois dele.
 */
const ANTECEDENCIA_FIM_S = 1.4;

/**
 * Teto para o aviso de fim. O primeiro plano dura 6,08s, então passar disto
 * significa que ele não está correndo — autoplay bloqueado, rede travada, aba
 * em segundo plano. Nesses casos não há abertura a proteger, e deixar a nav
 * escondida à espera de um vídeo que não vem seria pior que revelá-la cedo.
 */
const ESPERA_FIM_MS = 7500;

interface Props {
  /**
   * Camada que fica POR CIMA do vídeo, centralizada — na home, o cartão de
   * acesso. É o único filho em fluxo da cena: os vídeos e as legendas são
   * absolutos, então é esta camada que dá altura à cena quando o conteúdo
   * dela passa de uma tela. Sem isso o cartão seria cortado no notebook.
   */
  children?: ReactNode;
  /**
   * Chamado UMA vez, quando a cena entra no ar. Serve para quem hospeda a
   * vitrine animar algo "dentro" dela — o cartão de login sobe só depois que
   * há imagem atrás, não sobre um quadro preto ainda carregando.
   *
   * Dispara pelo que vier primeiro: o primeiro vídeo começou a tocar, o
   * autoplay foi recusado pelo navegador, ou o movimento reduzido dispensou
   * o vídeo. Nenhum desses três pode deixar o cartão preso invisível.
   */
  aoComecar?: () => void;
  /**
   * Chamado UMA vez, quando o PRIMEIRO plano se aproxima do fim — o momento
   * em que a home revela a interface do site (nav e barra de leitura), que
   * até então ficava escondida para o vídeo abrir sem faixa clara cortando
   * o topo.
   *
   * Só o primeiro plano comanda isso. A vitrine segue em loop pelos quatro,
   * e reagir ao fim de cada um faria a interface reaparecer de novo a cada
   * volta — um pisca-pisca a cada seis segundos.
   */
  aoAproximarDoFim?: () => void;
}

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
export function Vitrine({ children, aoComecar, aoAproximarDoFim }: Props) {
  const [ativa, setAtiva] = useState(0);
  const [reduzido, setReduzido] = useState(false);
  const [comecou, setComecou] = useState(false);
  const [pertoDoFim, setPertoDoFim] = useState(false);
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
         no primeiro quadro em vez de travar; não é erro que valha logar.
         A sobreposição não pode ficar refém disso: segue como se tivesse
         começado.

         O que NÃO se decide aqui é revelar a interface do site. A linha
         acima atribui `currentTime`, e o seek que ela dispara faz o `play()`
         rejeitar por AbortError mesmo quando o vídeo vai tocar normalmente —
         medido. Pendurar a revelação neste catch derrubava a abertura inteira
         num erro que não era erro. Quem cobre o autoplay realmente bloqueado
         é o teto de `ESPERA_FIM_MS`. */
      setComecou(true);
    });
  }, [ativa, reduzido]);

  /* O relógio do próprio vídeo, não um `setTimeout` paralelo: assim o aviso
     acompanha a rede. Se o plano engasgar para carregar, a interface espera
     junto em vez de aparecer sobre um vídeo que mal começou. */
  function acompanharPrimeiro(evento: React.SyntheticEvent<HTMLVideoElement>) {
    const video = evento.currentTarget;
    if (!Number.isFinite(video.duration) || video.duration === 0) return;
    if (video.duration - video.currentTime <= ANTECEDENCIA_FIM_S) {
      setPertoDoFim(true);
    }
  }

  /* Movimento reduzido não tem plano nenhum correndo: a interface é o que há.
     O teto existe para o caso de o vídeo nunca reportar progresso — melhor a
     nav aparecer tarde do que nunca. */
  useEffect(() => {
    if (reduzido) {
      setPertoDoFim(true);
      return;
    }
    const relogio = setTimeout(() => setPertoDoFim(true), ESPERA_FIM_MS);
    return () => clearTimeout(relogio);
  }, [reduzido]);

  useEffect(() => {
    if (pertoDoFim) aoAproximarDoFim?.();
  }, [pertoDoFim, aoAproximarDoFim]);

  /* Sem vídeo (movimento reduzido) a cena já está no ar. Com vídeo, a rede
     pode demorar — mas nunca a ponto de segurar o cartão de acesso. */
  useEffect(() => {
    if (reduzido) {
      setComecou(true);
      return;
    }
    const relogio = setTimeout(() => setComecou(true), ESPERA_MAXIMA_MS);
    return () => clearTimeout(relogio);
  }, [reduzido]);

  /* O aviso sai de um efeito, e não de dentro do onPlaying, para nunca
     acontecer no meio do render de quem hospeda a vitrine. `setComecou` é
     idempotente, então repetir a chamada não repete a animação lá em cima. */
  useEffect(() => {
    if (comecou) aoComecar?.();
  }, [comecou, aoComecar]);

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
            onPlaying={() => setComecou(true)}
            onTimeUpdate={i === 0 ? acompanharPrimeiro : undefined}
            onEnded={i === ativa ? passarParaProxima : undefined}
          />
        ))}
        <div className={styles.legendas} data-recuado={Boolean(children)}>
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
        {children && <div className={styles.sobreposicao}>{children}</div>}
      </div>
    </section>
  );
}
