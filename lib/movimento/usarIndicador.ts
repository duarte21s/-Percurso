"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { Mola } from "./mola";

/* Indicador que desliza entre abas.
 *
 * Um elemento só, que muda de lugar — não um fundo por item. A diferença é de
 * leitura: fundo por item é um apagando e outro acendendo, dois eventos para o
 * olho acompanhar; um objeto que se move é um só, e o olho o segue até o
 * destino.
 *
 * O movimento é mola, e não `transition`, por causa da interrupção: trocar de
 * aba no meio do percurso faria a segunda animação começar do valor final da
 * primeira, com salto visível. A mola redireciona a partir de onde o indicador
 * ESTÁ, com a velocidade que ele tem.
 *
 * Dois eixos, duas molas. Uma mola só para "posição e largura" desincroniza
 * quando as duas mudam em ritmos diferentes — é o que faz o indicador esticar
 * torto no meio do caminho.
 */

const RESPOSTA = 0.34;

interface Opcoes {
  /** Rola a aba ativa para dentro da vista. Para trilha que não cabe inteira. */
  rolarAteAAba?: boolean;
}

export function usarIndicador<L extends HTMLElement, I extends HTMLElement>(
  chave: string,
  opcoes: Opcoes = {}
) {
  const refLista = useRef<L | null>(null);
  const refIndicador = useRef<I | null>(null);
  const molaX = useRef<Mola | null>(null);
  const molaL = useRef<Mola | null>(null);
  const primeira = useRef(true);

  const pinta = useCallback(() => {
    const ind = refIndicador.current;
    if (!ind || !molaX.current || !molaL.current) return;
    /* `translate3d` para a posição, porque é do compositor. A largura ainda
       custa layout, mas só neste elemento — o `contain` no CSS impede que o
       custo vaze para a barra em volta. */
    ind.style.transform = `translate3d(${molaX.current.posicao.toFixed(1)}px, 0, 0)`;
    ind.style.width = `${Math.max(0, molaL.current.posicao).toFixed(1)}px`;
  }, []);

  const mede = useCallback(
    (animado: boolean) => {
      const lista = refLista.current;
      const ind = refIndicador.current;
      if (!lista || !ind) return;

      const alvo = lista.querySelector<HTMLElement>('[aria-current="page"]');
      if (!alvo) {
        /* Rota fora do menu: some, em vez de apontar para o item errado. */
        ind.style.opacity = "0";
        return;
      }
      ind.style.opacity = "1";

      /* `offsetLeft` e não `getBoundingClientRect`: numa trilha que rola, o
         retângulo é relativo à viewport e mudaria a cada rolagem, enquanto a
         posição do indicador é relativa ao conteúdo. */
      const x = alvo.offsetLeft;
      const largura = alvo.offsetWidth;
      if (largura === 0) return; // escondida (mobile): nada a medir

      if (!molaX.current) {
        molaX.current = new Mola({ valor: x, alvo: x, resposta: RESPOSTA, aoQuadro: pinta });
        molaL.current = new Mola({
          valor: largura,
          alvo: largura,
          resposta: RESPOSTA,
          aoQuadro: pinta,
        });
      }

      const semMovimento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!animado || semMovimento) {
        /* Primeira pintura: assume a posição sem percorrer o caminho. Um
           indicador deslizando da esquerda no carregamento seria movimento
           sem informação nenhuma. */
        molaX.current.parar();
        molaL.current!.parar();
        molaX.current.fixar(x);
        molaL.current!.fixar(largura);
        pinta();
      } else {
        molaX.current.mirar(x);
        molaL.current!.mirar(largura);
      }

      if (opcoes.rolarAteAAba) {
        alvo.scrollIntoView({
          behavior: semMovimento || !animado ? "auto" : "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    },
    [pinta, opcoes.rolarAteAAba]
  );

  /* Medição no layout, não no efeito: depois da pintura, o indicador apareceria
     por um quadro no lugar errado. */
  useLayoutEffect(() => {
    mede(!primeira.current);
    primeira.current = false;
  }, [chave, mede]);

  useEffect(() => {
    const lista = refLista.current;
    if (!lista) return;
    /* A largura das abas muda com a fonte e com a janela — e no mobile a
       trilha sai de `display:none` para visível, que é a mesma coisa para o
       observador. Um `ResizeObserver` na lista pega os três casos. */
    const obs = new ResizeObserver(() => mede(false));
    obs.observe(lista);
    return () => obs.disconnect();
  }, [mede]);

  useEffect(
    () => () => {
      molaX.current?.parar();
      molaL.current?.parar();
    },
    []
  );

  return { refLista, refIndicador };
}
