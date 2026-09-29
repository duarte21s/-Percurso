// Regressão local, sem credenciais nem alterações no banco real.
//
// O Next 16.3 monta o <script> de `template.*` e de `loading.*` por um caminho
// que não recebe o nonce da CSP (`createComponentStylesAndScripts`). O mesmo
// chunk também sai com nonce por outro caminho, e o React escreve uma única
// tag por src de chunk: vence a que chegar primeiro. Com sessão, os layouts
// esperam o Supabase antes de devolver `{children}` e a versão sem nonce
// vence; o `'strict-dynamic'` do proxy.ts bloqueia, e nada abaixo daquele
// arquivo hidrata — a página fica inerte, e em branco onde houver `.rv`.
//
// Foi o que deixou /cronograma, /app/materias e /app/faculdades em branco para
// quem estava logado. A transição de página que morava nos templates está em
// components/layout/TransicaoDePagina.tsx. Esta checagem acusa a volta de um
// desses arquivos quando é rodada (npm run checar-sem-template); ela não roda
// sozinha no build.
//
// `loading.*` tem uma exceção, e ela é estreita. O script sem nonce só existe
// quando o arquivo traz JavaScript de cliente. Um `loading` que é Server
// Component e só importa components/layout/EsqueletoDePagina — ele mesmo sem
// "use client" e sem import nenhum — não gera script: é HTML puro. É o que faz
// a troca entre as abas da área /app responder no clique. Qualquer outro
// import de valor recoloca o risco e é recusado aqui; `import type` some na
// compilação e passa.
//
// Os outros arquivos de convenção ficam de fora de propósito: o Next descarta
// os scripts de `not-found.*` e `global-error.*`, e os de `error.*` só entram
// na página depois de um erro, inseridos no cliente — não pelo parser do HTML,
// então o `'strict-dynamic'` os aceita.
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = fileURLToPath(new URL("..", import.meta.url));
const TEMPLATE = /^template\.(tsx|ts|jsx|js)$/;
const LOADING = /^loading\.(tsx|ts|jsx|js)$/;
const ESQUELETO = "@/components/layout/EsqueletoDePagina";
const ESQUELETO_ARQUIVO = "components/layout/EsqueletoDePagina.tsx";

function varrer(dir, padrao) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const caminho = join(dir, e.name);
    if (e.isDirectory()) return varrer(caminho, padrao);
    return padrao.test(e.name) ? [caminho] : [];
  });
}
const nome = (caminho) => relative(raiz, caminho).replaceAll("\\", "/");

/**
 * Por que um arquivo traria script de cliente — ou null se não traz.
 * `permitidos` são os módulos que ele pode importar (conferidos à parte).
 */
function motivoDeScript(fonte, permitidos = []) {
  const semComentarios = fonte.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
  if (/^\s*["']use client["']/m.test(semComentarios)) return '"use client"';
  for (const m of semComentarios.matchAll(/^\s*import\s+(?!type\s)[^;]*;?/gm)) {
    const origem = m[0].match(/["']([^"']+)["']/)?.[1];
    if (!permitidos.includes(origem)) return `import de valor: ${m[0].trim()}`;
  }
  if (/^\s*export\s[^;]*\sfrom\s/m.test(semComentarios)) return "reexportação de outro módulo";
  if (/\bimport\s*\(/.test(semComentarios)) return "import dinâmico";
  return null;
}

// A regra pega o que precisa pegar — e deixa passar o que é seguro.
assert.equal(motivoDeScript("export default function C() { return <main />; }"), null);
assert.equal(motivoDeScript('import type { ReactNode } from "react";\nexport default function C() { return null; }'), null);
assert.equal(motivoDeScript('// import { Nada } from "comentado";\nexport default function C() { return null; }'), null);
assert.match(motivoDeScript('"use client";\nexport default function C() { return null; }'), /use client/);
assert.match(motivoDeScript('import { Esqueleto } from "@/components/Esqueleto";'), /import de valor/);
assert.match(motivoDeScript('import css from "./carregando.module.css";'), /import de valor/);
assert.match(motivoDeScript('import "./estilo.css";'), /import de valor/);
assert.match(motivoDeScript('export { default } from "@/components/Carregando";'), /reexportação/);
assert.equal(motivoDeScript(`import { EsqueletoDePagina } from "${ESQUELETO}";`, [ESQUELETO]), null);
assert.match(
  motivoDeScript(`import { EsqueletoDePagina } from "${ESQUELETO}";\nimport { Icone } from "@/components/ui/Icone";`, [ESQUELETO]),
  /Icone/
);

// O esqueleto que os loading.* importam não pode importar nada, nem ser de cliente.
const motivoEsqueleto = motivoDeScript(readFileSync(join(raiz, ESQUELETO_ARQUIVO), "utf8"));
assert.equal(motivoEsqueleto, null, `${ESQUELETO_ARQUIVO} traria script de cliente: ${motivoEsqueleto}`);

const templates = varrer(join(raiz, "app"), TEMPLATE).map(nome);
assert.deepEqual(
  templates,
  [],
  `Arquivo que o Next carrega sem nonce: ${templates.join(", ")}. ` +
    "Com sessão, o CSP bloqueia o script e a página não hidrata. " +
    "Ponha a lógica num componente importado pelo layout (ver TransicaoDePagina)."
);

const loadings = varrer(join(raiz, "app"), LOADING);
const comScript = loadings
  .map((caminho) => [nome(caminho), motivoDeScript(readFileSync(caminho, "utf8"), [ESQUELETO])])
  .filter(([, motivo]) => motivo);
assert.deepEqual(
  comScript,
  [],
  `loading.* com JavaScript de cliente, que o Next carrega sem nonce: ${comScript
    .map(([arquivo, motivo]) => `${arquivo} (${motivo})`)
    .join(", ")}. Importe só o ${ESQUELETO} (ver app/app/loading.tsx).`
);

console.log(
  `ok: nenhum template.* em app/; ${loadings.length} loading.* só com o esqueleto em HTML (${loadings.map(nome).join(", ") || "nenhum"})`
);
