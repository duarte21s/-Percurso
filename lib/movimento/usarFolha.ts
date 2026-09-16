"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mola, Velocimetro, elastico, projetar } from "./mola";
import { ocuparCamada } from "./camada";

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

/* O desfoque ANIMADO saiu daqui, e não foi por gosto.
 *
 * O raio subia junto com a escala, quantizado em 1px para escrever ~20 valores
 * em vez de ~60. Menos escritas, mas cada uma ainda obrigava o navegador a
 * refazer o desfoque da região inteira, fora do compositor — num aparelho de
 * entrada, com quatro vídeos decodificando por baixo, é justamente o quadro
 * que falta. Quantizar reduziu a conta; não mudou a natureza dela.
 *
 * A troca é a do material: o painel virou quase opaco no CSS. Com ~0,97 de
 * fundo não sobra fundo para desfocar — o desfoque era caro e, ali, invisível.
 * A folha continua chegando como superfície e não como decalque, porque a
 * ESCALA continua subindo com a opacidade; o que sumiu foi só a conta que o
 * olho não via.
 *
 * `transform` e `opacity` são o que fica, e são exatamente as duas que o
 * compositor resolve sozinho. */

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
  aoFechar: () => void,
  /**
   * O controle que abriu a folha.
   *
   * Serve a duas coisas que não dá para fazer sem ele: devolver o foco quando
   * Escape fecha — sem isso o teclado fica num elemento que acabou de virar
   * `inert` — e excluir o próprio botão do fechamento por clique fora, que
   * senão fecharia no `pointerdown` e o `click` reabriria em seguida.
   */
  refBotao?: React.RefObject<HTMLElement | null>
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
  /* Espelho de `aberta` para os callbacks da mola, que vivem fora do ciclo de
     render e leriam um valor velho pela closure. */
  const abertaRef = useRef(aberta);

  /* Espelho de `aoFechar` pelo mesmo motivo, e por mais um: quem chama passa
     uma seta nova a cada render. Nas dependências de um efeito, isso derrubava
     e recolocava os cinco ouvintes de ponteiro a cada render do cabeçalho —
     no meio de um arrasto, inclusive. Com o espelho, o efeito do gesto passa a
     depender só de `montado`, e os ouvintes são registrados uma vez. */
  const aoFecharRef = useRef(aoFechar);
  useEffect(() => {
    aoFecharRef.current = aoFechar;
  });

  const semMovimento = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* DUAS escritas por quadro, e as duas que o compositor resolve sozinho:
     nenhuma delas recalcula layout nem repinta a região de baixo. É a lista
     inteira do que sai daqui — ver o bloco sobre o desfoque, lá em cima. */
  const pintar = useCallback((y: number) => {
    const el = ref.current;
    if (!el) return;
    const h = altura.current || 1;
    const p = Math.min(Math.max(1 + y / h, 0), 1);

    /* Escala e opacidade sobem juntas: é a diferença entre uma superfície que
       chega e um retângulo que acende. Um material real ganha corpo enquanto
       se aproxima; se só a opacidade muda, a folha lê como decalque. */
    const escala = 0.985 + 0.015 * p;
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${escala.toFixed(4)})`;
    el.style.opacity = String(Math.min(1, p * 3));
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

      /* A captura NÃO é pedida aqui. Ver `aoMover`. */
      el!.style.willChange = "transform, opacity";
    }

    function aoMover(e: PointerEvent) {
      if (!arrastando.current) return;
      const dy = e.clientY - inicioY.current;

      /* Histerese: abaixo do limiar ainda pode ser um toque no link. */
      if (!arrastou.current && Math.abs(dy) < LIMIAR) return;

      /* A captura do ponteiro só entra DEPOIS do limiar, e é o que conserta o
         clique nos links da folha.

         Pedindo captura já no `pointerdown`, `pointerdown` e `pointerup` são
         redirecionados para a folha; o `click` então nasce nela, e não no <a>
         sob o dedo. O `Link` do Next nunca recebia o evento e a navegação
         simplesmente não acontecia — medido nas duas barras, com o alvo real
         do clique saindo como `div.folha` em vez de `<a href>`.
         Abaixo do limiar o gesto ainda é um toque, e toque não precisa de
         captura. Acima dele já é arrasto, e aí a captura é indispensável:
         é ela que mantém os `pointermove` chegando quando o dedo sai da
         folha. */
      if (!arrastou.current) {
        try {
          el!.setPointerCapture(e.pointerId);
        } catch {
          /* ponteiro já encerrado; o arrasto segue sem captura */
        }
      }
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
      /* Agora a captura pode nunca ter sido pedida — toque abaixo do limiar
         não captura nada. Perguntar antes evita usar exceção como desvio. */
      try {
        if (el!.hasPointerCapture(e.pointerId)) el!.releasePointerCapture(e.pointerId);
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
        aoFecharRef.current();
      }
    }

    /* O conteúdo da folha são links, e link é arrastável por padrão. Iniciado
       o drag nativo, o navegador dispara `pointercancel` e o gesto morre no
       meio — medido: sobre um link vinham 2 `pointermove` e um `pointercancel`;
       no padding, 7 `pointermove` e um `pointerup`.
       Pedir captura já no `pointerdown` mascarava isto, ao custo de redirecionar
       o `click` para a folha e impedir a navegação. Adiar a captura conserta o
       clique; cancelar o arrasto nativo devolve o gesto. As duas coisas juntas,
       e não uma no lugar da outra. */
    function aoArrastarNativo(e: DragEvent) {
      if (arrastando.current) e.preventDefault();
    }

    el.addEventListener("pointerdown", aoDescer);
    el.addEventListener("pointermove", aoMover);
    el.addEventListener("pointerup", aoSubir);
    el.addEventListener("pointercancel", aoSubir);
    el.addEventListener("dragstart", aoArrastarNativo);
    return () => {
      el.removeEventListener("pointerdown", aoDescer);
      el.removeEventListener("pointermove", aoMover);
      el.removeEventListener("pointerup", aoSubir);
      el.removeEventListener("pointercancel", aoSubir);
      el.removeEventListener("dragstart", aoArrastarNativo);
    };
  }, [montado, garantirMola, pintar]);

  /* ---------- as outras duas saídas ---------- */

  /* Uma folha tem TRÊS saídas, e o botão é só a primeira. Escape é a saída de
     quem está no teclado; o clique fora é a de quem já decidiu ir para outro
     lugar da tela e não deveria precisar mirar um alvo de 44px para isso.
     As duas moram aqui, e não em quem chama, porque as duas dependem de saber
     onde a folha está — e isso é o que este gancho sabe e o cabeçalho não. */

  /* Escape fecha e DEVOLVE O FOCO ao botão que abriu. Sem a segunda metade o
     foco fica num elemento que acabou de virar `inert` e o teclado se perde.
     O ouvinte é do documento, e não da folha, porque ela trava a rolagem do
     corpo e se comporta como camada: Escape precisa valer com o foco fora
     dela. Só existe enquanto está aberta. */
  useEffect(() => {
    if (!aberta) return;
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key !== "Escape") return;
      evento.preventDefault();
      aoFecharRef.current();
      refBotao?.current?.focus();
    }
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberta, refBotao]);

  /* Clique fora. `pointerdown` e não `click`: a folha some no instante em que
     o dedo encosta, que é quando a decisão foi tomada — esperar o `click`
     deixa um intervalo em que a tela já não corresponde à intenção.
     O botão fica DE FORA da conta de propósito. Sem essa exclusão ele fecharia
     no `pointerdown` e o `click` seguinte reabriria, e o menu piscaria sem sair
     do lugar. Aqui o foco NÃO volta para o botão: quem clicou fora está
     olhando para outro canto da tela, e puxar o foco de volta seria discordar
     do gesto. */
  useEffect(() => {
    if (!aberta) return;
    function aoApontarFora(evento: PointerEvent) {
      const alvo = evento.target as Node | null;
      if (!alvo) return;
      if (ref.current?.contains(alvo)) return;
      if (refBotao?.current?.contains(alvo)) return;
      aoFecharRef.current();
    }
    document.addEventListener("pointerdown", aoApontarFora);
    return () => document.removeEventListener("pointerdown", aoApontarFora);
  }, [aberta, refBotao]);

  /* ---------- aviso para quem está por baixo ---------- */

  /* Enquanto a folha ocupa a tela, ela é o assunto — e o que estiver correndo
     embaixo pode parar. Na abertura são quatro vídeos decodificando; pausá-los
     devolve o quadro a quem está com o dedo na tela. Ver `camada.ts`.

     O sinal segue `montado`, e não `aberta`: a folha só solta a camada quando
     termina de sair. Soltar em `aberta === false` faria o vídeo voltar a
     decodificar no meio da animação de saída — exatamente o quadro que se
     queria proteger. */
  useEffect(() => {
    if (!montado) return;
    return ocuparCamada();
  }, [montado]);

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
