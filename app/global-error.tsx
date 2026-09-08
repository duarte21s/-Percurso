"use client";

import { useEffect } from "react";

/**
 * Último boundary: pega o que estourou no próprio layout raiz, onde o
 * boundary de segmento já não alcança.
 *
 * Substitui o documento inteiro, então precisa trazer <html> e <body> —
 * e não pode depender do CSS do site, que é justamente o que pode não ter
 * carregado. Por isso os estilos vão em linha, sem token nenhum.
 */
export default function ErroGlobal({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // O diagnóstico completo fica nas ferramentas de desenvolvimento ou no
    // coletor de erros configurado no deploy. Nunca exponha stack e mensagens
    // internas para quem está tentando estudar.
    console.error("[boundary global]", error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#0c110d",
          color: "#edf3eb",
          font: "15px/1.6 system-ui, -apple-system, sans-serif",
          padding: "48px 22px",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <title>Erro ao carregar · Percurso</title>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#8b978a",
            }}
          >
            Erro na raiz
          </p>
          <h1 style={{ margin: "10px 0 0", fontSize: 28, lineHeight: 1.2 }}>
            O site não conseguiu carregar.
          </h1>
          <p style={{ color: "#a6b2a4" }}>
            Houve uma falha inesperada antes de a página ficar pronta. Tente de
            novo; se ela persistir, volte ao início em alguns instantes.
          </p>

          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 22,
              padding: "12px 22px",
              borderRadius: 99,
              border: "1px solid #4fc2a0",
              background: "#4fc2a0",
              color: "#05201a",
              font: "600 14px system-ui, sans-serif",
              cursor: "pointer",
            }}
          >
            Tentar de novo
          </button>
        </div>
      </body>
    </html>
  );
}
