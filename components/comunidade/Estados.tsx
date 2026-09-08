import css from "./comunidade.module.css";

/**
 * Esqueleto de um card, com a mesma silhueta do post real: avatar redondo,
 * duas linhas de identidade e três de texto. Espelhar o layout evita o salto
 * que acontece quando o esqueleto tem forma diferente do conteúdo que chega.
 */
export function EsqueletoPost() {
  return (
    <div className={css.esqueleto} aria-hidden="true">
      <div className={css.esqueletoTopo}>
        <div className={`${css.barra} ${css.barraCirculo}`} />
        <div style={{ flex: 1, display: "grid", gap: 7, maxWidth: 220 }}>
          <div className={css.barra} style={{ width: "58%" }} />
          <div className={css.barra} style={{ width: "38%", height: 9 }} />
        </div>
      </div>
      <div style={{ display: "grid", gap: 9 }}>
        <div className={css.barra} style={{ width: "82%", height: 13 }} />
        <div className={css.barra} style={{ width: "96%" }} />
        <div className={css.barra} style={{ width: "88%" }} />
        <div className={css.barra} style={{ width: "44%" }} />
      </div>
    </div>
  );
}

/** Vários esqueletos, para o feed inteiro carregando. */
export function CarregandoFeed({ quantos = 4 }: { quantos?: number }) {
  return (
    <div
      className={css.feed}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Carregando publicações"
    >
      {Array.from({ length: quantos }, (_, i) => (
        <EsqueletoPost key={i} />
      ))}
    </div>
  );
}

export function SemNada({
  titulo,
  texto,
  acao,
}: {
  titulo: string;
  texto: string;
  acao?: { rotulo: string; aoClicar: () => void };
}) {
  return (
    <div className={css.aviso}>
      <p className={css.avisoTitulo}>{titulo}</p>
      <p className={css.avisoTexto}>{texto}</p>
      {acao && (
        <button className="btn btn-primary" onClick={acao.aoClicar}>
          {acao.rotulo}
        </button>
      )}
    </div>
  );
}

export function DeuErro({ aoTentar }: { aoTentar: () => void }) {
  return (
    <div className={css.aviso} role="alert">
      <p className={css.avisoTitulo}>Não conseguimos carregar a comunidade.</p>
      <p className={css.avisoTexto}>
        Pode ter sido a conexão. Nada do que você escreveu se perdeu.
      </p>
      <button className="btn btn-ghost" onClick={aoTentar}>
        Tentar novamente
      </button>
    </div>
  );
}
