"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { usarPressao } from "@/lib/gsap/usarPressao";
import { usarFolha } from "@/lib/movimento/usarFolha";
import { AbasNav } from "@/components/layout/AbasNav";
import { Icone } from "@/components/ui/Icone";
import { BotaoTema } from "@/components/ui/BotaoTema";

/* Navegação do site público. Só páginas institucionais — as ferramentas de
   estudo vivem sob /app, com a sua própria navegação (a SidebarApp). */
const LINKS = [
  { href: "/", rotulo: "Início" },
  { href: "/cronograma", rotulo: "Cronograma" },
  { href: "/faculdades", rotulo: "Faculdades" },
  { href: "/duvidas", rotulo: "Dúvidas" },
  { href: "/recursos", rotulo: "Recursos" },
];

interface Props {
  /** Nome de quem está logado; null quando não há sessão. */
  nome: string | null;
}

export function Nav({ nome }: Props) {
  const [grudada, setGrudada] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const caminho = usePathname();

  const refMarca = useRef<HTMLAnchorElement>(null);
  const refToggle = useRef<HTMLButtonElement>(null);
  usarPressao(refMarca);
  usarPressao(refToggle);

  /* Menu do celular: folha arrastável, não transição.
     Ela desce do topo e fecha para cima — mesmo caminho nos dois sentidos. O
     dedo pode agarrá-la no meio do voo, inverter, ou soltá-la com um peteleco
     que a projeta para fora. Ver lib/movimento/usarFolha.ts. */
  const {
    ref: refMenu,
    montado: menuMontado,
    aoClicarCapturando,
  } = usarFolha<HTMLDivElement>(menuAberto, () => setMenuAberto(false));

  useEffect(() => {
    function aoRolar() {
      setGrudada(window.scrollY > 40);
    }
    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Fecha o menu ao navegar — sem isso ele fica aberto por cima da página nova.
  useEffect(() => {
    setMenuAberto(false);
  }, [caminho]);

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.classList.toggle("is-locked", menuAberto);
    return () => document.body.classList.remove("is-locked");
  }, [menuAberto]);

  return (
    <header className={`nav${grudada ? " is-stuck" : ""}`} id="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" ref={refMarca}>
          <span className="brand-mark">
            <Icone nome="marca" tracoLargura={1.7} />
          </span>
          Percurso <small>Estudos</small>
        </Link>

        <AbasNav links={LINKS} caminho={caminho} />

        <div className="nav-actions">
          <BotaoTema />
          {nome ? (
            <Link href="/app" className="btn btn-primary">
              Meu painel
            </Link>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost">
                Entrar
              </Link>
              <Link href="/cadastro" className="btn btn-primary">
                Começar agora
              </Link>
            </>
          )}

          <button
            ref={refToggle}
            className={`nav-toggle${menuAberto ? " is-open" : ""}`}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuMontado && (
        <div
          className="nav-mobile"
          ref={refMenu}
          onClickCapture={aoClicarCapturando}
        >
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.rotulo}
            </Link>
          ))}
          {nome ? (
            <Link href="/app" className="btn btn-primary">
              Meu painel
            </Link>
          ) : (
            <Link href="/cadastro" className="btn btn-primary">
              Começar agora
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
