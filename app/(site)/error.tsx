"use client";

import { useEffect } from "react";

/**
 * Boundary de erro do grupo (site).
 *
 * Sem um arquivo destes, um erro durante a renderização no cliente desmonta a
 * árvore e não deixa nada no lugar — a tela fica branca, sem mensagem, sem
 * rastro, e no celular não há console para abrir. Este componente transforma
 * "ficou em branco" em uma página de recuperação. O diagnóstico completo fica
 * no console em desenvolvimento e no registro de erros do deploy; mensagens de
 * Client Components também podem conter dados privados, então elas não aparecem
 * na interface pública.
 */
export default function ErroSite({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[boundary (site)]", error);
  }, [error]);

  return (
    <main className="section" style={{ paddingTop: 130 }}>
      <div className="wrap" style={{ maxWidth: 680 }}>
        <span className="eyebrow">Erro</span>
        <h1 className="title" style={{ marginTop: 8, fontSize: "clamp(26px,6vw,40px)" }}>
          Esta página não conseguiu abrir.
        </h1>
        <p className="lede">
          O restante do site continua funcionando. Tente novamente; se a falha
          continuar, volte ao início e retome seu estudo por lá.
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button type="button" className="btn btn-primary" onClick={reset}>
            Tentar de novo
          </button>
          <a href="/" className="btn btn-ghost">
            Voltar ao início
          </a>
        </div>
      </div>
    </main>
  );
}
