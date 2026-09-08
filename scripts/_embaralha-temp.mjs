import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const alvo = process.argv[2];
if (!alvo) { console.error("Uso: node _embaralha-temp.mjs <arquivo.mjs>"); process.exit(1); }

const mod = await import(pathToFileURL(resolve(alvo)).href);
const questoes = mod.questoes;

questoes.forEach((q, i) => {
  const alvoIdx = i % 5;
  if (alvoIdx === q.correta) return;
  const tmp = q.opcoes[alvoIdx];
  q.opcoes[alvoIdx] = q.opcoes[q.correta];
  q.opcoes[q.correta] = tmp;
  q.correta = alvoIdx;
});

function esc(s) { return JSON.stringify(s); }

let saida = "";
const cabecalho = readFileSync(alvo, "utf8").split("export const questoes")[0];
saida += cabecalho;
saida += "export const questoes = [\n";
for (const q of questoes) {
  saida += "  {\n";
  saida += `    materia: ${esc(q.materia)}, tema: ${esc(q.tema)}, dificuldade: ${esc(q.dificuldade)},\n`;
  saida += `    enunciado: ${esc(q.enunciado)},\n`;
  saida += `    opcoes: [${q.opcoes.map(esc).join(", ")}],\n`;
  saida += `    correta: ${q.correta},\n`;
  saida += `    explicacao: ${esc(q.explicacao)},\n`;
  saida += "  },\n";
}
saida += "];\n";

writeFileSync(alvo, saida, "utf8");
console.log(`Reordenado: ${questoes.length} questões em ${alvo}`);
