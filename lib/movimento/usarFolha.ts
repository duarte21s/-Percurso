"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mola, Velocimetro, elastico, projetar } from "./mola";

/* Folha superior arrastável — o menu do celular.
 *
 * Antes ela abria e fechava com uma transição de duração fixa: o toque só
 * decidia o estado final e a animação corria sozinha, sem poder ser tocada. A
 * diferença aqui não é estética, é de quem manda. O painel segue o dedo quadro
 * a quadro, pode ser agarrado no meio do voo, invertido, solto com um peteleco
 * curto que o joga para fora, ou puxado para além do limite, onde resiste em
 * vez de travar.
 *
 * Ela desce do topo, então fechar é EMPURRAR PARA CIMA — o mesmo caminho por
 * onde entrou. Sai por onde veio; a assimetria (entra de cima, sai de lado) é
 * o que faz uma interface parecer desconexa. */

/** Movimento mínimo antes de assumir que é arrasto e não toque. */
const LIMIAR = 10;

/** Desfoque do material quando a folha está inteira na tela. */
const DESFOQUE_MAX = 20;
/**
 * Degrau do desfoque, em px.
 *
 * O raio anima junto com a escala — o guia pede os dois juntos para a
 * superfície ler como material que CHEGA, e não como fundo que acende. Mas
 * `backdrop-filter` é a propriedade cara da lista: cada valor novo obriga o
 * navegador a refazer o desfoque da região inteira, e escrever um valor
 * diferente a cada quadro é o que tira o compositor do caminho.
 *
 * O degrau resolve a tensão sem escolher um lado. Quantizado em 1px, a
 * animação inteira escreve ~20 valores em vez de ~60, e o olho não vê degrau
 * nenhum: 1px de raio a essa escala está abaixo do limiar de percepção. O
 * `transform` e a `opacity` seguem contínuos, quadro a quadro.
 */
const DESFOQUE_DEGRAU = 1;

/** Aberta: chega e para. Não ultrapassa, porque nada foi arremessado. */
const MOLA_ABRIR = { amortecimento: 1, resposta: 0.34 };
/** Solta depois de um arrasto: o momento do gesto justifica um quique curto. */
const MOLA_SOLTAR = { amortecimento: 0.82, resposta: 0.3 };

interface Retorno<T> {
  ref: React.RefObject<T | null>;
  montado: boolean;
  /** Cola no elemento: bloqueia o clique do link quando houve arrasto. */
  aoClicarCapturando: (e: React.MouseEvent) => void;
}

export function usarFolha<T extends HTMLElement>(
  aberta: boolean,
  aoFechar: () => void
): Retorno<T> {
  const ref = useRef<T | null>(null);
  const [montado, setMontado] = useState(aberta);

  const mola = useRef<Mola | null>(null);
  const velocimetro = useRef(new Velocimetro());
  const altura = useRef(0);
  const arrastando = useRef(false);
  const arrastou = useRef(false);
  const inicioY = useRef(0);
  const inicioPos = useRef(0);
  const fechandoPorGesto = useRef(false);
  const ultimoDesfoque = useRef(-1);
  /* Espelho de `aberta` para os callbacks da mola, que vivem fora do ciclo de
     render e leriam um valor velho pela closure. */
  const abertaRef = useRef(aberta);
  /* Quem pediu menos transparência não recebe desfoque nenhum, nem animado:
     o CSS já troca o material por superfície sólida, e um estilo em linha
     escrito daqui passaria por cima justamente de quem pediu para não ter. */
  const semTransparencia = useRef(false);

  const semMovimento = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-transparency: reduce)");
    const ler = () => {
      semTransparencia.current = mq.matches;
    };
    ler();
    mq.addEventListener("change", ler);
    return () => mq.removeEventListener("change", ler);
  }, []);

  /* `transform` e `opacity` são contínuos, quadro a quadro — o compositor
     resolve os dois sem recalcular layout. O desfoque acompanha em degraus,
     pelo motivo explicado em DESFOQUE_DEGRAU. */
  const pintar = useCallback((y: number) => {
    const el = ref.current;
    if (!el) return;
    const h = altura.current || 1;
    const p = Math.min(Math.max(1 + y / h, 0), 1);

    /* Escala e desfoque sobem juntos: é a diferença entre uma superfície que
       chega e um retângulo que acende. Um material real ganha corpo enquanto
       se aproxima; se só a opacidade muda, a folha lê como decalque. */
    const escala = 0.985 + 0.015 * p;
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${escala.toFixed(4)})`;
    el.style.opacity = String(Math.min(1, p * 3));

    if (semTransparencia.current) return;
    const desfoque =
      Math.round((DESFOQUE_MAX * p) / DESFOQUE_DEGRAU) * DESFOQUE_DEGRAU;
    if (desfoque !== ultimoDesfoque.current) {
      ultimoDesfoque.current = desfoque;
      const valor = desfoque > 0 ? `blur(${desfoque}px)` : "none";
      el.style.backdropFilter = valor;
      /* Safari só ganhou a forma sem prefixo tarde, e a gaveta é justamente a
         tela onde o Safari de iPhone é maioria. */
      (el.style as CSSStyleDeclaration & { webkitBackdropFilter?: string })
        .webkitBackdropFilter = valor;
    }
  }, []);

  const garantirMola = useCallback(() => {
    if (mola.current) return mola.current;
    mola.current = new Mola({
      valor: 0,
      alvo: 0,
      aoQuadro: (v) => pintar(v),
      aoParar: () => {
        const el = ref.current;
        if (!el) return;
        /* Desmonta pela INTENÇÃO, não pela posição em que a mola parou.
           Comparar contra `-altura` parecia equivalente e não é: se a altura
           mudar (rotação de tela, teclado abrindo) ou se a mola for parada
           por um `pointerdown` em vez de assentar, a comparação nunca casa e
           a folha fica montada para sempre — invisível, mas presente. */
        if (!abertaRef.current) setMontado(false);
        el.style.willChange = "";
      },
    });
    return mola.current;
  }, [pintar]);

  /* ---------- abrir / fechar por comando ---------- */

  useEffect(() => {
    abertaRef.current = aberta;
    if (aberta) setMontado(true);
  }, [aberta]);

  /* Enquanto está fechada e ainda montada, a folha sai do caminho de todo
     mundo. `opacity: 0` esconde do olho e de mais ninguém: o leitor de tela
     continua anunciando os links, o Tab continua entrando neles e o clique
     continua chegando. Um menu invisível que rouba o foco é pior do que um
     menu visível.

     Isto deixou de ser hipótese: com a saída interrompida no meio, a folha
     ficou montada e invisível de verdade — e sem `inert` ela seguia navegável.
     A limpeza no desmonte não cobre esse estado porque ele acontece ANTES do
     desmonte, e às vezes no lugar dele. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.inert = !aberta;
    el.setAttribute("aria-hidden", aberta ? "false" : "true");
  }, [aberta, montado]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !montado) return;

    altura.current = el.offsetHeight || 1;
    const m = garantirMola();

    if (semMovimento()) {
      /* Movimento reduzido não significa ausência de retorno: significa um
         equivalente sem deslocamento. A folha aparece e some, no lugar — e
         com o material inteiro, que o CSS já dá: só o deslocamento sai, a
         translucidez fica. */
      el.style.transform = "translate3d(0,0,0)";
      el.style.opacity = aberta ? "1" : "0";
      if (!aberta) setMontado(false);
      return;
    }

    /* Força a primeira escrita do desfoque a cada montagem. */
    ultimoDesfoque.current = -1;

    el.style.willChange = "transform, opacity";

    if (aberta) {
      /* Só posiciona fora da tela se ela ainda não estiver em movimento —
         se o usuário reabriu no meio do fechamento, a mola continua de onde
         a folha está, que é o ponto inteiro da interrupção. */
      if (!m.correndo && m.posicao === 0) {
        m.fixar(-altura.current, 0);
        pintar(-altura.current);
      }
      m.mirar(0, MOLA_ABRIR);
    } else {
      m.mirar(-altura.current, MOLA_ABRIR);
    }
  }, [aberta, montado, garantirMola, pintar]);

  /* ---------- gesto ---------- */

  useEffect(() => {
    const el = ref.current;
    if (!el || !montado || semMovimento()) return;

    function aoDescer(e: PointerEvent) {
      const alvo = e.target as HTMLElement;
      if (alvo.closest("button")) return;

      const m = garantirMola();
      /* Agarra pelo valor QUE ESTÁ NA TELA, não pelo alvo lógico. Ler o alvo
         aqui é o que produz o salto visível ao interromper. */
      const posAtual = m.posicao;
      m.parar();

      arrastando.current = true;
      arrastou.current = false;
      inicioY.current = e.clientY;
      inicioPos.current = posAtual;
      velocimetro.current.limpar();
      velocimetro.current.registrar(posAtual, e.timeStamp);

      el!.setPointerCapture(e.pointerId);
      el!.style.willChange = "transform, opacity";
    }

    function aoMover(e: PointerEvent) {
      if (!arrastando.current) return;
      const dy = e.clientY - inicioY.current;

      /* Histerese: abaixo do limiar ainda pode ser um toque no link. */
      if (!arrastou.current && Math.abs(dy) < LIMIAR) return;
      arrastou.current = true;

      let y = inicioPos.current + dy;
      /* Puxar para baixo passa do aberto: resiste em vez de travar. */
      if (y > 0) y = elastico(y, altura.current);
      /* Empurrar além do fechado não tem para onde ir. */
      if (y < -altura.current) y = -altura.current;

      velocimetro.current.registrar(y, e.timeStamp);
      pintar(y);
    }

    function aoSubir(e: PointerEvent) {
      if (!arrastando.current) return;
      arrastando.current = false;
      try {
        el!.releasePointerCapture(e.pointerId);
      } catch {
        /* o ponteiro já pode ter sido liberado pelo navegador */
      }
      if (!arrastou.current) return;

      const m = garantirMola();
      const v = velocimetro.current.velocidade;
      const atual = m.posicao;

      /* Decide pelo ponto ONDE O GESTO IA PARAR, não por onde o dedo soltou.
         É isso que faz um peteleco curto fechar a folha inteira. */
      const projetado = atual + projetar(v);
      const meio = -altura.current / 2;
      const fecha = projetado < meio;

      m.fixar(atual, v); // a velocidade do dedo vira a velocidade da mola
      m.mirar(fecha ? -altura.current : 0, MOLA_SOLTAR);

      if (fecha) {
        fechandoPorGesto.current = true;
        /* Retorno tátil só no encaixe, que é um momento com significado.
           Espalhar vibração por toda interação ensina a ignorá-la. */
        navigator.vibrate?.(8);
        aoFechar();
      }
    }

    el.addEventListener("pointerdown", aoDescer);
    el.addEventListener("pointermove", aoMover);
    el.addEventListener("pointerup", aoSubir);
    el.addEventListener("pointercancel", aoSubir);
    return () => {
      el.removeEventListener("pointerdown", aoDescer);
      el.removeEventListener("pointermove", aoMover);
      el.removeEventListener("pointerup", aoSubir);
      el.removeEventListener("pointercancel", aoSubir);
    };
  }, [montado, garantirMola, pintar, aoFechar]);

  useEffect(() => () => mola.current?.parar(), []);

  /* Um arrasto que termina em cima de um link não pode navegar. */
  const aoClicarCapturando = useCallback((e: React.MouseEvent) => {
    if (arrastou.current) {
      e.preventDefault();
      e.stopPropagation();
      arrastou.current = false;
    }
  }, []);

  return { ref, montado, aoClicarCapturando };
}
