"use client";

import { useState } from "react";

/**
 * Detalhe técnico de um erro, atrás de um botão.
 *
 * O equilíbrio aqui tem dois lados, e os dois já foram para o lado errado
 * neste projeto. Despejar pilha de erro na cara de quem está estudando é
 * ruído e pode vazar informação. Mas esconder tudo — que foi a correção
 * anterior — deixa quem precisa consertar sem nenhum dado: no celular não há
 * console para abrir, e "tente de novo" não diz o que houve.
 *
 * Fechado por padrão, aberto por escolha. Quem só quer voltar a estudar nunca
 * vê; quem foi pedir ajuda consegue copiar o que aconteceu.
 */
export function DetalheErro({ erro }: { erro: Error & { digest?: string } }) {
  const [aberto, setAberto] = useState(false);

  const texto = [
    `${erro.name}: ${erro.message}`,
    erro.digest ? `digest: ${erro.digest}` : "",
    erro.stack ? erro.stack.split("\n").slice(0, 10).join("\n") : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <div style={{ marginTop: 26 }}>
      <button
        type="button"
        className="btn"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
      >
        {aberto ? "Ocultar detalhes técnicos" : "Ver detalhes técnicos"}
      </button>

      {aberto && (
        <>
          <pre
            style={{
              marginTop: 14,
              padding: 16,
              borderRadius: "var(--r)",
              background: "var(--surface-2)",
              border: "1px solid var(--line)",
              color: "var(--err)",
              fontFamily: "var(--mono)",
              fontSize: 12,
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowX: "auto",
            }}
          >
            {texto}
          </pre>
          <p className="dim fine" style={{ marginTop: 10 }}>
            Copie este texto e envie a quem estiver ajudando — é ele que diz
            onde consertar.
          </p>
        </>
      )}
    </div>
  );
}
