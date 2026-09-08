/* =========================================================================
   Reenvia ao banco as questões de UMA matéria, substituindo as que já estão lá.

   Por que existe: `seed-questoes.mjs` é idempotente por enunciado — ele pula o
   que já existe. Isso é o certo no uso normal, mas impede corrigir uma questão
   já semeada quando o que mudou foi a ALTERNATIVA CORRETA, a explicação ou a
   ordem das opções, e não o enunciado.

   Foi exatamente o caso do primeiro arquivo de raciocínio lógico: as 51
   questões entraram com a resposta certa sempre na letra A, porque escrevê-la
   em primeiro lugar é o natural na hora de redigir. Depois de rodar
   `rebalancear-gabarito.mjs`, o arquivo estava certo e o banco, errado.

   Este script apaga as questões daquela matéria e insere de novo, a partir dos
   arquivos. Ele RECUSA apagar qualquer questão que já tenha resposta de
   alguém: apagar levaria junto o histórico da pessoa, por cascade.

   Uso:
     node scripts/resemear-materia.mjs raciocinio-logico --seco
     node scripts/resemear-materia.mjs raciocinio-logico
   ========================================================================= */

import { readFileSync, readdirSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { materiaExiste, temaExiste } from "./catalogo-temas.mjs";

function carregaEnv() {
  let bruto;
  try {
    bruto = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  } catch {
    return;
  }
  for (const linha of bruto.split("\n")) {
    const corte = linha.indexOf("=");
    if (corte < 1 || linha.trimStart().startsWith("#")) continue;
    const chave = linha.slice(0, corte).trim();
    const valor = linha.slice(corte + 1).trim().replace(/^["']|["']$/g, "");
    if (chave && !(chave in process.env)) process.env[chave] = valor;
  }
}
carregaEnv();

const materia = process.argv[2];
const seco = process.argv.includes("--seco");

if (!materia) {
  console.error("Informe a matéria. Ex.: node scripts/resemear-materia.mjs calculo");
  process.exit(1);
}
if (!materiaExiste(materia)) {
  console.error(`Matéria desconhecida: ${materia}`);
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const chave = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !chave) {
  console.error("Faltam NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY em .env.local.");
  process.exit(1);
}
const sb = createClient(url, chave, { auth: { persistSession: false } });

/* ---------- lê os arquivos da matéria ---------- */
const PASTA = new URL("../supabase/seed-data/questoes/gerado/", import.meta.url);
const arquivos = readdirSync(PASTA).filter(
  (f) => f.startsWith(`${materia}__`) && f.endsWith(".mjs")
);

if (arquivos.length === 0) {
  console.error(`Nenhum arquivo encontrado para a matéria "${materia}".`);
  process.exit(1);
}

const doArquivo = [];
for (const nome of arquivos) {
  const mod = await import(new URL(nome, PASTA).href);
  for (const q of mod.questoes ?? []) {
    if (q.materia !== materia) {
      console.error(`${nome}: questão com materia "${q.materia}", esperado "${materia}".`);
      process.exit(1);
    }
    if (!temaExiste(q.materia, q.tema)) {
      console.error(`${nome}: tema fora do catálogo — ${JSON.stringify(q.tema)}`);
      process.exit(1);
    }
    doArquivo.push(q);
  }
}

console.log(`${arquivos.length} arquivo(s), ${doArquivo.length} questões nos fontes.`);

const dist = {};
for (const q of doArquivo) dist[q.correta] = (dist[q.correta] || 0) + 1;
const letras = ["A", "B", "C", "D", "E"];
console.log(
  "  gabarito: " +
    Object.entries(dist)
      .sort()
      .map(([i, n]) => `${letras[i] ?? i}=${n}`)
      .join("  ")
);

/* ---------- o que está no banco ---------- */
const { data: noBanco, error: erroLer } = await sb
  .from("questoes")
  .select("id")
  .eq("materia_id", materia);

if (erroLer) {
  console.error("Falhou ao ler:", erroLer.message);
  process.exit(1);
}
console.log(`${noBanco.length} questões dessa matéria já no banco.`);

/* Nenhuma questão com resposta de alguém pode ser apagada: o delete leva o
   histórico junto, por cascade em `respostas`. */
let comResposta = [];
if (noBanco.length > 0) {
  const ids = noBanco.map((q) => q.id);
  const { data: respondidas, error: erroResp } = await sb
    .from("respostas")
    .select("questao_id")
    .in("questao_id", ids);
  if (erroResp) {
    console.error("Falhou ao checar respostas:", erroResp.message);
    process.exit(1);
  }
  comResposta = [...new Set((respondidas ?? []).map((r) => r.questao_id))];
}

if (comResposta.length > 0) {
  console.error(
    `\nRECUSADO: ${comResposta.length} dessas questões já foram respondidas por alguém.\n` +
      "Apagá-las levaria o histórico junto. Corrija-as por UPDATE, não por delete."
  );
  process.exit(1);
}

if (seco) {
  console.log(
    `\n--seco: apagaria ${noBanco.length} e inseriria ${doArquivo.length}. Nada foi feito.`
  );
  process.exit(0);
}

/* ---------- troca ---------- */
if (noBanco.length > 0) {
  const { error } = await sb.from("questoes").delete().eq("materia_id", materia);
  if (error) {
    console.error("Falhou ao apagar:", error.message);
    process.exit(1);
  }
  console.log(`${noBanco.length} apagadas.`);
}

const linhas = doArquivo.map((q) => ({
  materia_id: q.materia,
  tema: q.tema,
  fonte: q.fonte ?? "Percurso · autoral",
  enunciado: q.enunciado,
  opcoes: q.opcoes,
  correta: q.correta,
  explicacao: q.explicacao,
  origem: "autoral",
  dificuldade: q.dificuldade ?? "media",
}));

let inseridas = 0;
for (let i = 0; i < linhas.length; i += 50) {
  const lote = linhas.slice(i, i + 50);
  const { error } = await sb.from("questoes").insert(lote);
  if (error) {
    console.error(`Falhou no lote ${i}:`, error.message);
    process.exit(1);
  }
  inseridas += lote.length;
  process.stdout.write(`\r  ${inseridas}/${linhas.length}`);
}
console.log(`\n${inseridas} inseridas.`);
