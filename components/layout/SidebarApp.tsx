"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icone, type NomeIcone } from "@/components/ui/Icone";
import { BotaoTema } from "@/components/ui/BotaoTema";
import { BarraTopo } from "@/components/layout/BarraTopo";
import { Pomodoro } from "@/components/layout/Pomodoro";
import { sair } from "@/app/entrar/acoes";
import { usarIndicador } from "@/lib/movimento/usarIndicador";
import css from "./sidebar-app.module.css";

/* Navegação da área de estudos, no TOPO — e agora em TODAS as larguras.
 *
 * Havia duas formas para a mesma navegação: faixa no topo até 900px e coluna
 * fixa de 232px a partir de 901px. Duas formas é a pessoa aprendendo o produto
 * duas vezes, e a coluna cobrava 232px de largura em toda tela — justamente
 * nas telas daqui, que são tabela, painel e grade de questões, o que mais pede
 * largura. Ficou a faixa.
 *
 * A estrutura vem da `BarraTopo`, a mesma da abertura: altura, recuo, alvo de
 * toque e anel de foco. O que é só daqui — a cápsula, o indicador, a paleta —
 * fica aqui. E esta barra não sobrescreve regra da `BarraTopo`: ela REDEFINE
 * os tokens de navegação no próprio cabeçalho (ver `.topo` no CSS), porque
 * duas regras disputando a mesma propriedade em módulos diferentes seriam
 * decididas pela ordem do bundle, que não é contrato.
 *
 * São oito ferramentas, mais do que um controle segmentado normalmente
 * comporta. A trilha rola na horizontal e leva a aba ativa para o centro
 * sozinha; sem isso, a última seria inalcançável em tela estreita.
 */

const FERRAMENTAS = [
  { href: "/app", rotulo: "Visão geral" },
  /* "Plano de estudos" saiu do menu. Ele apontava para uma rota que só
     redirecionava para o Cronograma — clicar nele acendia OUTRA aba, porque a
     página não existia. Duas entradas para a mesma ferramenta já seriam ruins;
     duas entradas em que uma nem abre é promessa que o produto não cumpre.
     A rota continua de pé como atalho para quem tiver o link salvo.
     Ela volta ao menu quando existir plano PERSISTIDO — salvo na conta, com o
     que foi cumprido marcado — que é aí que os dois nomes passam a ser duas
     coisas diferentes de verdade. */
  { href: "/app/cronograma", rotulo: "Cronograma" },
  /* "Matérias" e "Questões" eram duas abas para o mesmo começo. A primeira
     abria uma tabela de histórico por matéria cujo único caminho adiante era
     escolher uma matéria — e escolher uma matéria leva ao seletor, que é o
     que a segunda aba já abria direto. Quem clicava em "Matérias" pagava uma
     tela a mais para chegar onde "Questões" chegava num clique.

     Ficou uma aba só, e com o nome que descreve a ESCOLHA que se faz nela:
     o seletor abre com as nove matérias, e é por matéria que se entra. Quem
     lia "Questões" e procurava uma lista de questões não a encontrava.

     A rota `/app/materias` continua de pé — a tabela de histórico não foi
     apagada e segue respondendo no endereço dela; o que saiu foi a aba. Ver
     `ABRIGADAS`, que mantém a trilha acesa para quem chegar lá. */
  { href: "/app/questoes", rotulo: "Matérias" },
  { href: "/app/simulados", rotulo: "Simulados" },
  { href: "/app/desempenho", rotulo: "Desempenho" },
  { href: "/app/redacao", rotulo: "Redação" },
  { href: "/app/faculdades", rotulo: "Faculdades" },
  { href: "/comunidade", rotulo: "Comunidade" },
];

const ICONE_DA_FERRAMENTA: Record<string, NomeIcone> = {
  "/app": "alta",
  "/app/cronograma": "agenda",
  /* `book`, e não o `marcador` que a aba usava quando se chamava "Questões":
     o glifo acompanha o rótulo, e o livro era justamente o da aba que saiu. */
  "/app/questoes": "book",
  "/app/simulados": "cap",
  "/app/desempenho": "alta",
  "/app/redacao": "codigo",
  "/app/faculdades": "compass",
  "/comunidade": "pessoas",
};

/* Rotas SEM aba própria que acendem a aba de outra ferramenta.
 *
 * `/app/materias` perdeu a aba, não a rota: a tabela de histórico por matéria
 * continua respondendo no endereço dela, e ainda se chega lá pelo link de
 * volta da página de uma matéria ou por um endereço salvo. Sem este mapa a
 * trilha ficaria com NENHUMA aba acesa nessas telas — o indicador sumiria e o
 * leitor de tela não teria `aria-current` nenhum para anunciar.
 *
 * O destino é `/app/questoes` porque é a aba "Matérias" de hoje: quem está
 * vendo matérias está na ferramenta que essa aba nomeia. */
const ABRIGADAS: Record<string, string> = {
  "/app/materias": "/app/questoes",
};

const CONTA = [
  { href: "/app/perfil", rotulo: "Perfil" },
  { href: "/app/configuracoes", rotulo: "Configurações" },
];

interface Props {
  nome: string;
}

export function SidebarApp({ nome }: Props) {
  const caminho = usePathname();
  const [contaAberta, setContaAberta] = useState(false);

  const { refLista, refIndicador } = usarIndicador<
    HTMLDivElement,
    HTMLSpanElement
  >(caminho, { rolarAteAAba: true });

  // Fecha o menu da conta ao trocar de rota.
  useEffect(() => {
    setContaAberta(false);
  }, [caminho]);

  /* O caminho que a TRILHA usa para decidir a aba acesa. É o caminho real,
     exceto nas rotas abrigadas, que emprestam a aba de outra ferramenta. */
  const abrigo = Object.keys(ABRIGADAS).find((rota) => caminho.startsWith(rota));
  const caminhoDaAba = abrigo ? ABRIGADAS[abrigo] : caminho;

  const ativo = (href: string) =>
    href === "/app"
      ? caminhoDaAba === "/app"
      : caminhoDaAba.startsWith(href);

  return (
    <BarraTopo
      tom="tema"
      caminho={caminho}
      classeExterna={css.topo}
      classeInterna={css.topoLinha}
      /* Sem `menu`: aqui não há folha de celular, porque a trilha continua
         visível e rolável em tela estreita. Sem folha, o botão de menu da
         `BarraTopo` nem chega a ser renderizado. */
      marca={
        <Link href="/app" className={css.brand}>
          <span className={css.brandMark}>
            <Icone nome="marca" tracoLargura={1.7} />
          </span>
          Percurso <small>Estudos</small>
        </Link>
      }
      acoes={
        /* A caixa própria fica: é o `position: relative` contra o qual o menu
           da conta se posiciona. Sem ela, o menu ancoraria no cabeçalho
           inteiro e abriria fora do lugar. */
        <div className={css.topoAcoes}>
          {/* O cronômetro de foco fica na barra, e não numa página própria:
              ele só serve enquanto se estuda, e numa página separada obrigaria
              a sair de onde se está estudando para olhar o tempo. */}
          <Pomodoro />
          <BotaoTema />
          <button
            type="button"
            className={css.conta}
            aria-expanded={contaAberta}
            onClick={() => setContaAberta((v) => !v)}
          >
            <span className={css.nomeConta}>{nome}</span>
            <span className={css.contaMobile} aria-hidden="true">Conta</span>
          </button>

          {contaAberta && (
            <>
              {/* Clique fora fecha. Fica atrás do menu e à frente do resto. */}
              <div
                className={css.backdrop}
                onClick={() => setContaAberta(false)}
              />
              <div className={css.menuConta}>
                {CONTA.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={css.itemConta}
                    aria-current={ativo(l.href) ? "page" : undefined}
                  >
                    {l.rotulo}
                  </Link>
                ))}
                <form action={sair}>
                  <button className={css.itemConta} type="submit">
                    Sair
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      }
      /* A trilha das ferramentas, na segunda linha da barra. `aria-label`
         porque existem duas navegações na página e o leitor de tela precisa
         distinguir. A rolagem é do slot da `BarraTopo`; aqui só a cápsula. */
      trilha={
        <nav className={css.ferramentas} aria-label="Ferramentas de estudo">
          <div className={css.capsula} ref={refLista}>
            <span className={css.indicador} ref={refIndicador} aria-hidden="true" />
            {FERRAMENTAS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={css.aba}
                aria-current={ativo(l.href) ? "page" : undefined}
              >
                <Icone nome={ICONE_DA_FERRAMENTA[l.href]} tracoLargura={1.7} />
                {l.rotulo}
              </Link>
            ))}
          </div>
        </nav>
      }
    />
  );
}
