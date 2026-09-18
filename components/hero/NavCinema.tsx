"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarraTopo } from "@/components/layout/BarraTopo";
import { Icone } from "@/components/ui/Icone";
import { VeuFilme } from "./VeuFilme";
import css from "./nav-cinema.module.css";

/* A lista é a da abertura e continua dela: cinco seções mais Contato à parte.
   A barra do site tem outra, e as duas seguem separadas de propósito. */
const LINKS = [
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/como-funciona", rotulo: "Como funciona" },
  { href: "/recursos", rotulo: "Recursos" },
  { href: "/faculdades", rotulo: "Faculdades" },
  { href: "/duvidas", rotulo: "Dúvidas" },
];

/**
 * Barra da abertura. A estrutura — altura, recuo, alvo de toque, anel de foco
 * e a folha do celular — vem da `BarraTopo`, a mesma do site. O que fica aqui
 * é só o que a abertura não divide: a paleta clara sobre o filme e os 10px com
 * tracking largo dos links, que são o letreiro de cinema.
 *
 * O menu do celular era um `<details>` nativo e passa a ser a folha arrastável
 * do `usarFolha`, movida pelo sistema próprio de molas — o mesmo gesto que a
 * barra do site já tinha.
 */
interface Props {
  /**
   * Onde pendurar o desfoque de fundo do menu.
   *
   * A barra não escolhe o lugar: quem sabe onde o desfoque pode ficar sem
   * cobrir o título e o CTA é a cena, porque é ela quem empilha as camadas.
   * Ver `CenaEntrada`.
   */
  abrigoDesfoque?: React.RefObject<HTMLElement | null>;
}

export function NavCinema({ abrigoDesfoque }: Props) {
  const caminho = usePathname();

  return (
    <BarraTopo
      tom="filme"
      disposicao="tres"
      compacta="larga"
      caminho={caminho}
      /* A abertura é a única barra com véu: é a única cuja folha se abre
         sobre um filme em movimento. Ver `BarraTopo` e `VeuFilme`. */
      veu={<VeuFilme />}
      veuAlvo={abrigoDesfoque}
      classeExterna={css.cabecalho}
      marca={
        <Link
          href="/"
          className={css.marca}
          aria-label="Percurso — início"
          prefetch={false}
        >
          <Icone nome="marca" aria-hidden="true" />
          <span>Percurso</span>
        </Link>
      }
      navegacao={
        <nav className={css.desktop} aria-label="Conheça o Percurso">
          {LINKS.map(({ href, rotulo }) => (
            <Link key={href} href={href} prefetch={false}>
              {rotulo}
            </Link>
          ))}
        </nav>
      }
      acoes={
        <Link className={css.contato} href="/contato" prefetch={false}>
          Contato
        </Link>
      }
      menu={
        <nav className={css.mobile} aria-label="Conheça o Percurso no celular">
          {LINKS.map(({ href, rotulo }) => (
            <Link key={href} href={href} prefetch={false}>
              {rotulo}
            </Link>
          ))}
          <Link href="/contato" prefetch={false}>
            Contato
          </Link>
        </nav>
      }
    />
  );
}
