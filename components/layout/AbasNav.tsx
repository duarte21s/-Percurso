"use client";

import Link from "next/link";
import { usarIndicador } from "@/lib/movimento/usarIndicador";

/* Abas da navegação institucional como controle segmentado.
 *
 * Cinco links soltos na barra pediam ao olho que descobrisse sozinho que
 * formam um grupo. A cápsula diz isso de uma vez — proximidade e um limite
 * comum são o que agrupa.
 *
 * O mecanismo do indicador mora em `usarIndicador`, compartilhado com a
 * trilha da área de estudos: as duas navegações se movem igual, e coisa que
 * parece igual precisa se comportar igual. */

interface Aba {
  href: string;
  rotulo: string;
}

interface Props {
  links: Aba[];
  caminho: string;
}

export function AbasNav({ links, caminho }: Props) {
  const { refLista, refIndicador } = usarIndicador<HTMLElement, HTMLSpanElement>(
    caminho
  );

  const ativo = (href: string) =>
    href === "/" ? caminho === "/" : caminho.startsWith(href);

  return (
    <nav className="nav-links" ref={refLista} aria-label="Seções do site">
      <span className="nav-indicador" ref={refIndicador} aria-hidden="true" />
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={ativo(l.href) ? "page" : undefined}
        >
          {l.rotulo}
        </Link>
      ))}
    </nav>
  );
}
