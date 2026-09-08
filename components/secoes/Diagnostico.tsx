"use client";

import { useEffect, useState } from "react";

/* Relatório do aparelho, montado no próprio aparelho.
 *
 * Cada linha responde uma pergunta que eu não consigo responder daqui: o CSS
 * chegou? o JS hidratou? o motor tem a API que o gesto usa? Verde é o que
 * funciona, vermelho é o que explica alguma coisa quebrada. */

interface Linha {
  nome: string;
  valor: string;
  ok: boolean | null;
  nota?: string;
}

/* Erros capturados antes mesmo do React montar — se a hidratação falhar, é
   aqui que a causa aparece. */
const ERROS: string[] = [];
if (typeof window !== "undefined") {
  window.addEventListener("error", (e) =>
    ERROS.push(`${e.message} @ ${(e.filename || "").split("/").pop()}:${e.lineno}`)
  );
  window.addEventListener("unhandledrejection", (e) =>
    ERROS.push(`promessa: ${String((e as PromiseRejectionEvent).reason).slice(0, 120)}`)
  );
}

export function Diagnostico() {
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const [erros, setErros] = useState<string[]>([]);
  const [toques, setToques] = useState(0);
  const [arrasto, setArrasto] = useState("nenhum");

  useEffect(() => {
    const raiz = getComputedStyle(document.documentElement);
    const cs = (t: string) => raiz.getPropertyValue(t).trim() || "(vazio)";
    const suporta = (p: string, v: string) => CSS.supports(p, v);

    const mq = window.matchMedia("(min-width: 1px)");
    const temAddEvent = typeof mq.addEventListener === "function";

    const div = document.createElement("div");

    const l: Linha[] = [
      { nome: "Hidratou (JS rodando)", valor: "sim", ok: true },
      {
        nome: "CSS carregou",
        valor: cs("--accent"),
        ok: cs("--accent").startsWith("#"),
        nota: "esperado #14584a (claro) ou #4fc2a0 (escuro)",
      },
      {
        nome: "Fonte dos títulos",
        valor:
          document.fonts && [...document.fonts].some((f) => /Fraunces/i.test(f.family))
            ? "Fraunces carregada"
            : "Fraunces AUSENTE",
        ok:
          !!document.fonts &&
          [...document.fonts].some((f) => /Fraunces/i.test(f.family)),
      },
      {
        nome: "Largura da viewport",
        valor: `${window.innerWidth} × ${window.innerHeight}  (dpr ${window.devicePixelRatio})`,
        ok: null,
      },
      {
        nome: "Menu vira hamburger",
        valor: window.innerWidth <= 860 ? "sim" : "NÃO — tela larga demais",
        ok: window.innerWidth <= 860,
        nota: "abaixo de 860px",
      },
      { nome: "PointerEvent", valor: "PointerEvent" in window ? "sim" : "NÃO", ok: "PointerEvent" in window },
      {
        nome: "setPointerCapture",
        valor: typeof div.setPointerCapture === "function" ? "sim" : "NÃO",
        ok: typeof div.setPointerCapture === "function",
        nota: "sem isto o arrasto solta ao sair do elemento",
      },
      {
        nome: "matchMedia.addEventListener",
        valor: temAddEvent ? "sim" : "NÃO",
        ok: temAddEvent,
        nota: "se faltar, usarFolha lança e a gaveta morre inteira",
      },
      {
        nome: "inert",
        valor: "inert" in div ? "sim" : "NÃO",
        ok: "inert" in div,
      },
      {
        nome: "backdrop-filter",
        valor: suporta("backdrop-filter", "blur(4px)")
          ? "sim"
          : suporta("-webkit-backdrop-filter", "blur(4px)")
            ? "só com prefixo"
            : "NÃO",
        ok: suporta("backdrop-filter", "blur(4px)") || suporta("-webkit-backdrop-filter", "blur(4px)"),
      },
      { nome: "corner-shape (squircle)", valor: suporta("corner-shape", "squircle") ? "sim" : "não (arredonda normal)", ok: null },
      { nome: "text-wrap: balance", valor: suporta("text-wrap", "balance") ? "sim" : "não", ok: null },
      { nome: ":where()", valor: (() => { try { return document.querySelector(":where(body)") ? "sim" : "não"; } catch { return "NÃO"; } })(), ok: null },
      { nome: "vibrate (háptica)", valor: "vibrate" in navigator ? "sim" : "não (normal no iPhone)", ok: null },
      {
        nome: "Movimento reduzido ligado",
        valor: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "SIM" : "não",
        ok: null,
        nota: "se sim, as animações e o arrasto são desligados de propósito",
      },
      {
        nome: "Transparência reduzida",
        valor: window.matchMedia("(prefers-reduced-transparency: reduce)").matches ? "SIM" : "não",
        ok: null,
      },
      { nome: "Navegador", valor: navigator.userAgent, ok: null },
    ];

    setLinhas(l);
    const t = setInterval(() => setErros([...ERROS]), 700);
    return () => clearInterval(t);
  }, []);

  const cor = (ok: boolean | null) =>
    ok === null ? "var(--text-2)" : ok ? "var(--ok)" : "var(--err)";

  return (
    <main className="section" style={{ paddingTop: 130 }}>
      <div className="wrap" style={{ maxWidth: 720 }}>
        <span className="eyebrow">Diagnóstico</span>
        <h1 className="title" style={{ marginTop: 8, fontSize: "clamp(28px,7vw,44px)" }}>
          O que este aparelho consegue.
        </h1>
        <p className="lede">
          Página temporária. Verde funciona, vermelho explica alguma coisa
          quebrada, cinza é só informação.
        </p>

        <div style={{ marginTop: 30 }}>
          {linhas.map((l) => (
            <div
              key={l.nome}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "baseline",
                padding: "11px 0",
                borderBottom: "1px solid var(--line-soft)",
                flexWrap: "wrap",
              }}
            >
              <strong style={{ fontSize: 13, minWidth: 190, flex: "1 1 190px" }}>
                {l.nome}
              </strong>
              <span
                style={{
                  color: cor(l.ok),
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  wordBreak: "break-word",
                  flex: "1 1 200px",
                }}
              >
                {l.valor}
              </span>
              {l.nota && (
                <span style={{ fontSize: 11, color: "var(--text-3)", flexBasis: "100%" }}>
                  {l.nota}
                </span>
              )}
            </div>
          ))}
        </div>

        <h2 className="title" style={{ fontSize: 22, marginTop: 40 }}>
          Teste de toque
        </h2>
        <p className="lede" style={{ marginTop: 8 }}>
          Aperte e arraste dentro do quadro abaixo.
        </p>
        <div
          onPointerDown={() => setToques((n) => n + 1)}
          onPointerMove={(e) => {
            if (e.buttons || e.pressure > 0) setArrasto(`movendo · y=${Math.round(e.clientY)}`);
          }}
          onPointerUp={() => setArrasto("soltou")}
          style={{
            marginTop: 16,
            padding: 30,
            textAlign: "center",
            border: "1px dashed var(--line-strong)",
            borderRadius: "var(--r-lg)",
            background: "var(--surface)",
            touchAction: "none",
            userSelect: "none",
          }}
        >
          <div style={{ fontFamily: "var(--mono)", fontSize: 13 }}>
            toques: {toques} · {arrasto}
          </div>
          <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 8 }}>
            Se o contador não sobe, PointerEvent não chega — é a causa da gaveta
            não arrastar.
          </div>
        </div>

        <h2 className="title" style={{ fontSize: 22, marginTop: 40 }}>
          Erros de JavaScript
        </h2>
        <div
          style={{
            marginTop: 12,
            padding: 16,
            borderRadius: "var(--r)",
            background: "var(--surface-2)",
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: erros.length ? "var(--err)" : "var(--ok)",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {erros.length ? erros.join("\n\n") : "nenhum erro capturado"}
        </div>
      </div>
    </main>
  );
}
