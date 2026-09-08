"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icone } from "@/components/ui/Icone";
import { BotaoTema } from "@/components/ui/BotaoTema";
import { Pomodoro } from "@/components/layout/Pomodoro";
import { sair } from "@/app/entrar/acoes";
import { usarIndicador } from "@/lib/movimento/usarIndicador";
import css from "./sidebar-app.module.css";

/* Navegação da área de estudos, no TOPO.
 *
 * Era uma coluna fixa de 248px à esquerda. Virou uma faixa horizontal acima do
 * conteúdo, com as ferramentas numa cápsula e o indicador deslizante — o mesmo
 * mecanismo da navegação institucional, porque duas navegações que se parecem
 * precisam se comportar igual, senão o que a pessoa aprendeu numa não vale na
 * outra.
 *
 * O ganho não é só estético: a coluna comia 248px de largura em toda tela, e
 * as telas daqui são tabela, painel e grade de questões — justamente o que
 * pede largura. No celular a faixa continua rolando na horizontal em vez de
 * virar gaveta, porque o destino continua visível o tempo todo.
 *
 * São nove ferramentas, mais do que um controle segmentado normalmente
 * comporta. A trilha rola na horizontal e leva a aba ativa para o centro
 * sozinha; sem isso, a nona ferramenta seria inalcançável em tela estreita.
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
  { href: "/app/materias", rotulo: "Matérias" },
  { href: "/app/questoes", rotulo: "Questões" },
  { href: "/app/simulados", rotulo: "Simulados" },
  { href: "/app/desempenho", rotulo: "Desempenho" },
  { href: "/app/redacao", rotulo: "Redação" },
  { href: "/app/faculdades", rotulo: "Faculdades" },
];

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

  const ativo = (href: string) =>
    href === "/app" ? caminho === "/app" : caminho.startsWith(href);

  return (
    <header className={css.topo}>
      <div className={css.topoLinha}>
        <Link href="/app" className={css.brand}>
          <span className={css.brandMark}>
            <Icone nome="marca" tracoLargura={1.7} />
          </span>
          Percurso <small>Estudos</small>
        </Link>

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
            {nome}
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
      </div>

      {/* A trilha das ferramentas. `aria-label` porque agora existem duas
          navegações na página e o leitor de tela precisa distinguir. */}
      <nav className={css.trilhaCasca} aria-label="Ferramentas de estudo">
        <div className={css.trilha} ref={refLista}>
          <span className={css.trilhaIndicador} ref={refIndicador} aria-hidden="true" />
          {FERRAMENTAS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={css.aba}
              aria-current={ativo(l.href) ? "page" : undefined}
            >
              {l.rotulo}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
