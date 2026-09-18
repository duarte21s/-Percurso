"use client";

import { useEffect, useRef, useState } from "react";
import css from "./veu-filme.module.css";

/* Largura do instantâneo, em pixels.
   Medido nos dois sentidos: a 64px a ampliação sozinha já borrava tudo e o
   fundo virava mancha chapada — sumia o CTA, sumia a cena, sumia a noção de
   que existe um filme ali. 192px guardam a SILHUETA, e o desfoque de verdade
   fica com o passe do canvas, que é onde dá para escolher o raio.
   Ainda assim é 1/6 da largura do aparelho: ~2% dos pixels que um
   `backdrop-filter` teria de reamostrar. */
const LARGURA = 192;

/* Raio do desfoque, em pixels DO CANVAS — e o ponto inteiro desta camada.

   O desfoque acontece uma única vez, dentro do canvas, sobre uma imagem de
   192px. O elemento só amplia o resultado. As três alternativas foram
   medidas a 393x852 com CPU 6x, e todas perdem:

     `backdrop-filter` na camada         98 quadros (11,85%)
     `filter` no elemento, tela cheia    67 quadros (7,60%)
     `filter` no elemento + `scale()`   118 quadros (14,15%)

   A primeira refaz o passe a cada quadro do filme. A segunda refaz sobre
   ~1,1 milhão de pixels. A terceira é a pior: o Chromium rasteriza o filtro
   já na escala final, então paga o raio grande E a transformação.

   8px no canvas viram ~16px na tela, porque 192px são ampliados ~2x até a
   largura do aparelho — mais o amaciamento da própria ampliação. */
const DESFOQUE = 8;

/**
 * Um quadro do filme, congelado e desfocado, atrás da folha do menu.
 *
 * O filme continua correndo por baixo: esta camada LÊ um quadro dele e nunca
 * manda nele. Nada é pausado, nada reinicia.
 *
 * O quadro é capturado UMA vez, quando a folha monta, e o desfoque roda UMA
 * vez, junto. Depois disso não há mais conta nenhuma: o que varia enquanto o
 * menu desce e sobe é só a opacidade da camada, escrita pelo `usarFolha` na
 * mesma mola que move a folha. Quando a folha desmonta, isto desmonta com ela
 * e o canvas vai embora.
 *
 * Congelar é a escolha, não um efeito colateral. Sob 16px de desfoque o que
 * resta é a mancha de luz da cena, e ela não muda o bastante em um segundo
 * para que o olho perceba a diferença entre um quadro parado e o filme
 * correndo — enquanto a diferença na conta é de 60 passes por segundo para um.
 */
export function VeuFilme() {
  const ref = useRef<HTMLCanvasElement>(null);
  /* Sem quadro capturado, a camada ainda precisa separar o painel do fundo.
     Ver `.reserva` no CSS. */
  const [semQuadro, setSemQuadro] = useState(false);

  useEffect(() => {
    const tela = ref.current;
    if (!tela) return;

    /* O plano em cena é o vídeo que está tocando com quadro pronto. A
       sequência mantém os quatro no DOM e troca por opacidade, então `paused`
       é o que separa quem está em cena de quem espera. */
    const filme = [...document.querySelectorAll("video")].find(
      (v) => !v.paused && v.readyState >= 2 && v.videoWidth > 0
    );
    const pincel = tela.getContext("2d", { alpha: false });
    if (!filme || !pincel) {
      setSemQuadro(true);
      return;
    }

    try {
      tela.width = LARGURA;
      tela.height = Math.max(1, Math.round((LARGURA * filme.videoHeight) / filme.videoWidth));
      pincel.filter = `blur(${DESFOQUE}px)`;
      pincel.drawImage(filme, 0, 0, tela.width, tela.height);
    } catch {
      /* `drawImage` de um vídeo lança quando a mídia é de outra origem sem
         CORS — o canvas ficaria contaminado. Aqui o filme é do mesmo domínio,
         então não deveria acontecer; se um dia a mídia sair para um CDN, a
         camada perde o quadro em vez de quebrar a abertura. */
      setSemQuadro(true);
    }
  }, []);

  if (semQuadro) return <div className={css.reserva} />;
  return <canvas ref={ref} className={css.tela} aria-hidden="true" />;
}
