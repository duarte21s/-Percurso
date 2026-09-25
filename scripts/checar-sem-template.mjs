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
// Os outros arquivos de convenção ficam de fora de propósito: o Next descarta
// os scripts de `not-found.*` e `global-error.*`, e os de `error.*` só entram
// na página depois de um erro, inseridos no cliente — não pelo parser do HTML,
// então o `'strict-dynamic'` os aceita.
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = fileURLToPath(new URL("..", import.meta.url));
const PROIBIDOS = /^(template|loading)\.(tsx|ts|jsx|js)$/;

function varrer(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const caminho = join(dir, e.name);
    if (e.isDirectory()) return varrer(caminho);
    return PROIBIDOS.test(e.name) ? [relative(raiz, caminho).replaceAll("\\", "/")] : [];
  });
}

const achados = varrer(join(raiz, "app"));
assert.deepEqual(
  achados,
  [],
  `Arquivo que o Next carrega sem nonce: ${achados.join(", ")}. ` +
    "Com sessão, o CSP bloqueia o script e a página não hidrata. " +
    "Ponha a lógica num componente importado pelo layout (ver TransicaoDePagina)."
);
console.log("ok: nenhum template.* ou loading.* em app/");
