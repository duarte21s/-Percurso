"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
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
}: Props) {
  const [aberto, setAberto] = useState(false);
  const refBotao = useRef<HTMLButtonElement>(null);
  const idFolha = useId();

  const {
    ref: refFolha,
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

  return (
    <header
      className={[styles.barra, tomClasse, classeExterna].filter(Boolean).join(" ")}
      data-compacta={compacta}
    >
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
}
