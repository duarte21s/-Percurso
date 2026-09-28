/**
 * O esqueleto que os `loading.tsx` da área /app mostram no instante do clique,
 * enquanto a página nova chega do servidor. Tem a casca das páginas de lá —
 * rótulo, título em duas linhas, texto de apoio e blocos —, para a troca não
 * pular de lugar quando o conteúdo entra.
 *
 * Server Component, sem "use client" e SEM import nenhum, de propósito. O Next
 * 16.3 carrega o JavaScript de `loading.*` por um <script> sem o nonce da CSP,
 * o mesmo caminho que tirou os `template.tsx` do projeto. Sem componente de
 * cliente não há script: só HTML e as classes `.esqueleto` do globals.css, que
 * já está carregado — o esqueleto pinta no primeiro quadro, sem esperar
 * arquivo. scripts/checar-sem-template.mjs recusa qualquer import aqui.
 */
export function EsqueletoDePagina() {
  return (
    <main className="section esqueleto" aria-busy="true">
      <div className="wrap">
        <p className="esqueleto-aviso" role="status">
          Carregando a página…
        </p>
        <div className="esqueleto-cabeca" aria-hidden="true">
          <span className="esqueleto-rotulo" />
          <span className="esqueleto-titulo" />
          <span className="esqueleto-titulo esqueleto-curto" />
          <span className="esqueleto-texto" />
          <span className="esqueleto-texto esqueleto-medio" />
        </div>
        <div className="esqueleto-grade" aria-hidden="true">
          <span className="esqueleto-bloco" />
          <span className="esqueleto-bloco" />
          <span className="esqueleto-bloco" />
        </div>
      </div>
    </main>
  );
}
