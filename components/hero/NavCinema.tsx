"use client";

import Link from "next/link";
import { useRef } from "react";
import { Icone } from "@/components/ui/Icone";
import css from "./nav-cinema.module.css";

const LINKS = [
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/como-funciona", rotulo: "Como funciona" },
  { href: "/recursos", rotulo: "Recursos" },
  { href: "/faculdades", rotulo: "Faculdades" },
  { href: "/duvidas", rotulo: "Dúvidas" },
];

export function NavCinema() {
  const menu = useRef<HTMLDetailsElement>(null);

  function fechar() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <header className={css.cabecalho}>
      <Link href="/" className={css.marca} aria-label="Percurso — início" prefetch={false}>
        <Icone nome="marca" aria-hidden="true" />
        <span>Percurso</span>
      </Link>

      <nav className={css.desktop} aria-label="Conheça o Percurso">
        {LINKS.map(({ href, rotulo }) => (
          <Link key={href} href={href} prefetch={false}>{rotulo}</Link>
        ))}
      </nav>

      <Link className={css.contato} href="/contato" prefetch={false}>Contato</Link>

      <details
        ref={menu}
        className={css.menu}
        onKeyDown={(evento) => {
          if (evento.key === "Escape" && menu.current?.open) {
            evento.preventDefault();
            fechar();
            menu.current.querySelector("summary")?.focus();
          }
        }}
        onBlur={(evento) => {
          if (!evento.currentTarget.contains(evento.relatedTarget)) fechar();
        }}
      >
        <summary className={css.abrir}>
          Menu
          <span className={css.iconeMenu} aria-hidden="true"><i /><i /></span>
        </summary>
        <nav className={css.mobile} aria-label="Conheça o Percurso no celular">
          {LINKS.map(({ href, rotulo }) => (
            <Link key={href} href={href} prefetch={false} onClick={fechar}>{rotulo}</Link>
          ))}
          <Link href="/contato" prefetch={false} onClick={fechar}>Contato</Link>
        </nav>
      </details>
    </header>
  );
}
