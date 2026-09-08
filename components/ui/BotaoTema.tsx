"use client";

import { useEffect, useState } from "react";

type Tema = "light" | "dark";

/**
 * Alterna claro/escuro. Grava a escolha em `localStorage` (`tema`) e põe
 * `data-theme` no <html>. O script inline em `app/layout.tsx` lê esse valor
 * antes do primeiro paint, então não há flash ao recarregar.
 *
 * Sem escolha salva, o site segue o `prefers-color-scheme` do sistema — o
 * botão mostra o oposto do que está valendo naquele momento.
 */
export function BotaoTema() {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    const salvo = localStorage.getItem("tema");
    if (salvo === "light" || salvo === "dark") {
      setTema(salvo);
      // Reaplica: o remount do Strict Mode em dev limpa o atributo que o
      // script inline pôs. Em produção é no-op (o atributo já está lá).
      document.documentElement.setAttribute("data-theme", salvo);
      return;
    }
    // Sem preferência salva: segue o sistema, sem fixar `data-theme`.
    const escuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTema(escuro ? "dark" : "light");
  }, []);

  function alterna() {
    const proximo: Tema = tema === "dark" ? "light" : "dark";
    const html = document.documentElement;

    /* Mata as transições por um frame: sem isto, o fundo do nav e a cor dos
       botões (animados via `var()`) travam no valor antigo. */
    html.classList.add("trocando-tema");
    html.setAttribute("data-theme", proximo);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => html.classList.remove("trocando-tema"));
    });

    setTema(proximo);
    try {
      localStorage.setItem("tema", proximo);
    } catch {
      /* modo privado / storage cheio — a troca vale só nesta sessão */
    }
  }

  // Antes do efeito rodar não sabemos o tema; um placeholder do mesmo
  // tamanho evita o layout pular.
  const rotulo =
    tema === null
      ? "Alternar tema"
      : tema === "dark"
        ? "Mudar para o tema claro"
        : "Mudar para o tema escuro";

  return (
    <button
      type="button"
      className="btn-tema"
      onClick={alterna}
      aria-label={rotulo}
      title={rotulo}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        {tema === "dark" ? (
          // sol
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
          </g>
        ) : (
          // lua
          <path
            d="M20 14.5A8 8 0 0 1 9.5 4a8.001 8.001 0 1 0 10.5 10.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
