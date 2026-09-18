"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { usarFolha } from "@/lib/movimento/usarFolha";
import styles from "./barra-topo.module.css";

/**
 * Casca estrutural das barras do topo.
 *
 * Divide o que as duas barras precisam dividir — altura, recuo, alvo de toque,
 * anel de foco e o comportamento do menu no celular — e deixa de fora o que
 * elas não podem dividir: a paleta e a escala do texto dos links. A abertura
 * mantém seus 10px com tracking largo, que é o letreiro de cinema; o site
 * mantém a escala de navegação de uso repetido.
 *
 * O menu do celular é a folha arrastável do `usarFolha`, movida pelo sistema
 * próprio de molas. Ela desce e fecha pelo mesmo caminho, pode ser agarrada no
 * meio do voo e aceita peteleco — o `<details>` nativo que a abertura usava
 * não fazia nada disso.
 */
interface Props {
  /** "tema" segue os tokens do site; "filme" é claro sobre o vídeo. */
  tom: "tema" | "filme";
  marca: ReactNode;
  /**
   * Primeira linha, entre a marca e as ações.
   *
   * Opcional porque a barra da área de estudos não tem navegação aqui — as
   * nove ferramentas dela vivem na `trilha`. Obrigá-la a passar `null` só
   * para satisfazer o tipo diria que falta alguma coisa quando não falta.
   */
  navegacao?: ReactNode;
  acoes?: ReactNode;
  /** Conteúdo da folha do celular. Sem isto, o botão de menu não aparece. */
  menu?: ReactNode;
  /**
   * Segunda linha opcional, abaixo da principal.
   *
   * Existe porque nem toda barra cabe em uma linha só: a área de estudos tem
   * marca e ações em cima e uma trilha de ferramentas embaixo. Omitida, nada é
   * renderizado — a abertura e o site seguem com uma linha, como hoje.
   *
   * A caixa só resolve rolagem horizontal e recuo. Cor, cápsula e indicador
   * são de quem preenche o slot.
   */
  trilha?: ReactNode;
  /** Fecha a folha a cada navegação. */
  caminho: string;
  /** Material do contexto: no site, as classes `.nav` que já existem. */
  classeExterna?: string;
  /** Largura do contexto: no site, o `.wrap`. */
  classeInterna?: string;
  /** "tres" centraliza a navegação entre marca e ação (arranjo da abertura). */
  disposicao?: "entre" | "tres";
  /** Em que largura a barra vira menu: "larga" troca em 1100px, o padrão em 760px. */
  compacta?: "padrao" | "larga";
  /**
   * Camada que cobre a tela ATRÁS da folha, enquanto ela está no ar.
   *
   * A barra só cuida da geometria e da opacidade da camada; ONDE ela entra na
   * pilha é decidido por quem oferece o abrigo (ver `veuAlvo`). O que a camada
   * PINTA também não é dela — é de quem a passa, e na abertura é um
   * instantâneo desfocado do filme.
   *
   * Opcional porque só a abertura precisa dela: lá a folha se abre sobre um
   * filme em movimento. No site ela se abre sobre texto parado, que o painel
   * quase opaco já separa sozinho.
   */
  veu?: ReactNode;
  /**
   * Onde pendurar a camada, quando ela não puder ficar dentro da barra.
   *
   * Dentro do cabeçalho a camada cobre a PÁGINA inteira, porque o cabeçalho é
   * um contexto de empilhamento acima de tudo — e aí ela apaga o título e o
   * CTA junto com o fundo. Recebendo um alvo, a camada vai por portal para
   * onde o contexto mandar, e quem empilha decide o que ela cobre.
   *
   * Sem alvo, ou antes de ele existir, a camada fica na barra mesmo: é o
   * comportamento antigo, e continua correto para quem não tem nada abaixo
   * que precise sobreviver.
   */
  veuAlvo?: React.RefObject<HTMLElement | null>;
}

export function BarraTopo({
  tom,
  marca,
  navegacao,
  acoes,
  menu,
  trilha,
  caminho,
  classeExterna = "",
  classeInterna = "",
  disposicao = "entre",
  compacta = "padrao",
  veu,
  veuAlvo,
}: Props) {
  const [aberto, setAberto] = useState(false);
  const refBotao = useRef<HTMLButtonElement>(null);
  const idFolha = useId();

  const {
    ref: refFolha,
    refVeu,
    montado,
    aoClicarCapturando,
  } = usarFolha<HTMLDivElement>(aberto, () => setAberto(false), refBotao);

  // Rede de segurança: cobre um link que aponte para a rota atual, em que o
  // clique não muda `caminho`. O fechamento normal acontece no próprio clique.
  useEffect(() => {
    setAberto(false);
  }, [caminho]);

  /* Escape e clique fora passaram para o `usarFolha`, junto com a devolução
     do foco ao botão. As três saídas da folha — botão, Escape e clique fora —
     são do mesmo assunto, e o gancho é quem sabe onde a folha está; mantê-las
     aqui obrigava a barra do site a reimplementar as duas, e ela só tinha o
     botão. */

  /* Fecha no clique do link, sem esperar a rota. Roda na fase de bolha, depois
     do `aoClicarCapturando`: quando houve arrasto, aquele já chamou
     `stopPropagation` e este nem é alcançado — o que é certo, porque arrasto
     que termina sobre um link não deve navegar nem fechar.
     Aqui o foco NÃO volta para o botão: quem assume é a página de destino. */
  function aoClicarNaFolha(evento: React.MouseEvent) {
    if ((evento.target as HTMLElement).closest("a")) setAberto(false);
  }

  useEffect(() => {
    document.body.classList.toggle("is-locked", aberto);
    return () => document.body.classList.remove("is-locked");
  }, [aberto]);

  const tomClasse = tom === "filme" ? styles.tomFilme : styles.tomTema;

  /* A camada de fundo. Fora do JSX principal porque ela pode sair da barra:
     com `veuAlvo`, vai por portal para onde a cena mandar — lá ela cobre o
     filme sem cobrir o que estiver empilhado acima dela.

     Dentro da barra ela é o PRIMEIRO filho de propósito, para ser pintada
     antes da `.interna`: senão a marca e o botão entrariam no fundo que ela
     cobre, e o botão de fechar é justamente o que tem de ficar nítido. */
  const camada =
    veu && montado ? (
      <div
        className={styles.veuFolha}
        ref={refVeu as React.RefObject<HTMLDivElement>}
        aria-hidden="true"
      >
        {veu}
      </div>
    ) : null;

  const alvo = veuAlvo?.current ?? null;

  const barra = (
    <header
      className={[styles.barra, tomClasse, classeExterna].filter(Boolean).join(" ")}
      data-compacta={compacta}
      /* Liga as regras de empilhamento da camada, e SÓ quando ela fica dentro
         da barra: saindo por portal, o cabeçalho volta a ser o de sempre.
         Sem o atributo, a barra do site computa exatamente o que computava
         antes — `.interna` sem posição e a folha sem `z-index`. */
      data-veu={camada && !alvo ? "" : undefined}
    >
      {!alvo && camada}

      <div
        className={[styles.interna, classeInterna].filter(Boolean).join(" ")}
        data-disposicao={disposicao}
      >
        {marca}
        {navegacao}

        <div className={styles.acoes}>
          {acoes}
          {menu && (
            <button
              ref={refBotao}
              type="button"
              className={styles.alternar}
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={aberto}
              /* Só aponta para a folha enquanto ela existe no DOM. `montado`
                 continua verdadeiro durante a saída, então a referência não
                 pisca no meio da animação — mas também nunca fica pendurada
                 num id inexistente, que é erro de acessibilidade. */
              aria-controls={montado ? idFolha : undefined}
              onClick={() => setAberto((v) => !v)}
            >
              <span />
              <span />
            </button>
          )}
        </div>
      </div>

      {trilha && <div className={styles.trilha}>{trilha}</div>}

      {menu && montado && (
        <div
          id={idFolha}
          className={styles.folha}
          ref={refFolha}
          onClickCapture={aoClicarCapturando}
          onClick={aoClicarNaFolha}
        >
          {menu}
        </div>
      )}
    </header>
  );

  return alvo ? (
    <>
      {barra}
      {camada && createPortal(camada, alvo)}
    </>
  ) : (
    barra
  );
}
