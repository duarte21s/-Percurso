/* =========================================================================
   Percurso — rebalanceia a posição do gabarito em um arquivo de questões

   Uso:  node scripts/rebalancear-gabarito.mjs caminho/do/arquivo.mjs

   Por que existe: escrever 50 questões à mão sem controlar em qual letra o
   gabarito cai produz distribuições torcidas — e gabarito concentrado é o
   vazamento mais barato de explorar numa prova: dá para acertar sem saber o
   assunto, só apostando na letra mais frequente. O checar-questoes.mjs avisa
   quando isso acontece; este script conserta.

   O que ele faz: mantém enunciado, alternativas e explicação intactos, e só
   muda a POSIÇÃO da alternativa correta dentro da lista, preservando a ordem
   relativa das demais. Nenhum texto é reescrito.

   O arquivo é regravado com formatação uniforme, preservando o comentário de
   cabeçalho original.
   ========================================================================= */

import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const alvo = process.argv[2];
if (!alvo) {
  console.error("Informe o caminho do arquivo .mjs.");
  process.exit(1);
}

const caminho = resolve(alvo);
const bruto = readFileSync(caminho, "utf8");

const corte = bruto.indexOf("export const questoes");
if (corte < 0) {
  console.error("O arquivo não exporta `questoes`.");
  process.exit(1);
}
const cabecalho = bruto.slice(0, corte).trimEnd();

const mod = await import(pathToFileURL(caminho).href);
const questoes = mod.questoes;
if (!Array.isArray(questoes) || questoes.length === 0) {
  console.error("`questoes` precisa ser um array não vazio.");
  process.exit(1);
}

/* Alvo por posição: distribui o resto quando o total não é múltiplo de 5.
   Com 21 questões, por exemplo, vira 5/4/4/4/4. */
const n = questoes.length;
const base = Math.floor(n / 5);
const sobra = n % 5;
const cotas = [0, 1, 2, 3, 4].map((i) => base + (i < sobra ? 1 : 0));

const antes = [0, 0, 0, 0, 0];
for (const q of questoes) antes[q.correta]++;

/* Percorre na ordem e vai gastando as cotas, preferindo deixar a questão onde
   já está quando ainda há cota para aquela posição. Isso evita mexer no que
   já estava equilibrado. */
const restante = [...cotas];
const destinos = new Array(n).fill(-1);

for (let i = 0; i < n; i++) {
  const atual = questoes[i].correta;
  if (restante[atual] > 0) {
    destinos[i] = atual;
    restante[atual]--;
  }
}
let proxima = 0;
for (let i = 0; i < n; i++) {
  if (destinos[i] !== -1) continue;
  while (restante[proxima] === 0) proxima++;
  destinos[i] = proxima;
  restante[proxima]--;
}

let movidas = 0;
for (let i = 0; i < n; i++) {
  const q = questoes[i];
  const destino = destinos[i];
  if (destino === q.correta) continue;
  const certa = q.opcoes[q.correta];
  const outras = q.opcoes.filter((_, j) => j !== q.correta);
  outras.splice(destino, 0, certa);
  q.opcoes = outras;
  q.correta = destino;
  movidas++;
}

const depois = [0, 0, 0, 0, 0];
for (const q of questoes) depois[q.correta]++;

const linha = (chave, valor) => `    ${chave}: ${JSON.stringify(valor)},`;

const corpo = questoes
  .map((q) => {
    const partes = [
      linha("materia", q.materia),
      linha("tema", q.tema),
      linha("dificuldade", q.dificuldade ?? "media"),
      `    enunciado:\n      ${JSON.stringify(q.enunciado)},`,
      `    opcoes: [\n${q.opcoes.map((o) => `      ${JSON.stringify(o)},`).join("\n")}\n    ],`,
      linha("correta", q.correta),
      `    explicacao:\n      ${JSON.stringify(q.explicacao)},`,
    ];
    return `  {\n${partes.join("\n")}\n  },`;
  })
  .join("\n");

writeFileSync(caminho, `${cabecalho}\n\nexport const questoes = [\n${corpo}\n];\n`, "utf8");

console.log(`\n${alvo}`);
console.log(`${n} questões · ${movidas} alternativa(s) reposicionada(s)`);
console.log(`antes:  ${antes.join(" / ")}`);
console.log(`depois: ${depois.join(" / ")}\n`);
