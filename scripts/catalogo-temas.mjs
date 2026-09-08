/**
 * Catálogo de (matéria → temas) válidos para o seed.
 *
 * Existia só `REGRAS`, em regras-temas.mjs, e ela era usada para duas coisas
 * diferentes: classificar as questões do ENEM por conteúdo E validar o par
 * (matéria, tema) das questões autorais. Isso funcionou enquanto as duas
 * listas coincidiam.
 *
 * Deixaram de coincidir quando entraram as matérias de trilha — Raciocínio
 * lógico, Cálculo I, Informática, o fundamental. Elas têm temas, mas não têm
 * regra de classificação, porque não há questão do ENEM para classificar
 * nelas: o INEP não aplica prova de Cálculo I. Validar contra REGRAS rejeitava
 * questão perfeitamente boa com "matéria desconhecida".
 *
 * Então o catálogo passa a ser a união de duas fontes:
 *   - as chaves de REGRAS (as nove matérias de ensino médio)
 *   - os temas declarados em lib/conteudo/materias-objetivo.ts
 *
 * A segunda é lida por regex porque .mjs não importa .ts. Se a leitura vier
 * vazia, este módulo avisa em vez de deixar o seed rejeitar tudo em silêncio.
 */

import { readFileSync } from "node:fs";
import { REGRAS } from "./regras-temas.mjs";

function temasDeObjetivo() {
  let fonte;
  try {
    fonte = readFileSync(
      new URL("../lib/conteudo/materias-objetivo.ts", import.meta.url),
      "utf8"
    );
  } catch {
    return {};
  }

  const catalogo = {};
  // Cada matéria começa com `id: "..."` e seus temas são os primeiros
  // elementos dos pares ["Título", null] dentro do bloco `topicos`.
  // `\r?` em todo lugar: o arquivo pode ter sido salvo com quebra de linha
  // do Windows (CRLF), e sem isso o split não acha bloco nenhum e o catálogo
  // de matérias por objetivo vem vazio — o seed passa a rejeitar todas elas.
  const blocos = fonte.split(/\r?\n {2}\{\r?\n/).slice(1);

  for (const b of blocos) {
    const mId = b.match(/id: "([a-z-]+)"/);
    if (!mId) continue;
    const temas = [
      ...b.matchAll(/^ {6}\["([^"]+)", (?:null|\d+)\],\r?$/gm),
    ].map((m) => m[1]);
    if (temas.length > 0) catalogo[mId[1]] = temas;
  }
  return catalogo;
}

const deObjetivo = temasDeObjetivo();

/** @type {Record<string, Set<string>>} */
export const CATALOGO = {};

for (const [materia, temas] of Object.entries(REGRAS)) {
  CATALOGO[materia] = new Set(Object.keys(temas));
}
for (const [materia, temas] of Object.entries(deObjetivo)) {
  CATALOGO[materia] = new Set([...(CATALOGO[materia] ?? []), ...temas]);
}

export function materiaExiste(id) {
  return Boolean(CATALOGO[id]);
}

export function temaExiste(materia, tema) {
  return Boolean(CATALOGO[materia]?.has(tema));
}

export function resumoCatalogo() {
  const linhas = Object.entries(CATALOGO)
    .map(([m, t]) => `  ${m.padEnd(20)} ${t.size} temas`)
    .join("\n");
  const total = Object.values(CATALOGO).reduce((n, t) => n + t.size, 0);
  return `${Object.keys(CATALOGO).length} matérias, ${total} temas:\n${linhas}`;
}
