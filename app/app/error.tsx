"use client";

import { useEffect } from "react";
import { DetalheErro } from "@/components/ui/DetalheErro";

/**
 * Boundary de erro da ÁREA DE ESTUDOS.
 *
 * Não existia. Qualquer erro em /app/* subia direto para o `global-error`, que
 * substitui o documento inteiro — a pessoa perdia a barra de navegação, o
 * cronômetro e o contexto de onde estava, e recebia "o site não conseguiu
 * carregar" para uma falha que era de uma página só.
 *
 * Com este arquivo o erro fica contido: a casca do /app continua de pé, e só
 * o conteúdo é substituído. Quem estava estudando volta para outra ferramenta
 * pela própria barra, em vez de recomeçar da raiz.
 */
export default function ErroApp({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[boundary /app]", error);
  }, [error]);

  return (
    <main className="section" style={{ paddingTop: 60 }}>
      <div className="wrap" style={{ maxWidth: 680 }}>
        <span className="eyebrow">Erro</span>
        <h1
          className="title"
          style={{ marginTop: 8, fontSize: "clamp(26px,6vw,40px)" }}
        >
          Esta ferramenta não conseguiu abrir.
        </h1>
        <p className="lede">
          As outras continuam funcionando — dá para trocar pela barra acima. Se
          quiser tentar de novo, o botão abaixo recarrega só esta parte.
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button type="button" className="btn btn-primary" onClick={reset}>
            Tentar de novo
          </button>
          <a href="/app" className="btn btn-ghost">
            Voltar à visão geral
          </a>
        </div>

        <DetalheErro erro={error} />
      </div>
    </main>
  );
}
