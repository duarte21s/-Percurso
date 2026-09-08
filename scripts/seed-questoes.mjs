/* =========================================================================
   Percurso — seed das questões autorais por conteúdo

   Lê todos os arquivos de supabase/seed-data/questoes/ e insere no banco com
   origem='autoral' e o `tema` preenchido.

   Uso:
     npm run seed-questoes -- --seco    valida e conta, não grava
     npm run seed-questoes              grava

   É idempotente: antes de inserir, lê os enunciados que já existem e pula os
   repetidos. Rodar de novo depois de acrescentar um arquivo insere só o que
   é novo.

   Por que este caminho existe: escrever questão com a API da Anthropic custa
   dinheiro por questão. Escrever aqui, num arquivo versionado, custa zero e
   fica no repositório para sempre. É o que permite o banco crescer sem conta
   de API.
   ========================================================================= */

import { readFileSync, readdirSync, existsSync } from "node:fs";
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

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error("\nFaltam NEXT_PUBLIC_SUPABASE_URL e/ou SUPABASE_SERVICE_ROLE_KEY.\n");
  process.exit(1);
}

const seco = process.argv.includes("--seco");
const pasta = new URL("../supabase/seed-data/questoes/", import.meta.url);

if (!existsSync(pasta)) {
  console.error("\nPasta supabase/seed-data/questoes/ não existe.\n");
  process.exit(1);
}

const DIFICULDADES = new Set(["facil", "media", "dificil"]);

/**
 * Valida uma questão contra o mesmo contrato que o banco cobra.
 *
 * Vale a checagem aqui, e não só nos `check` do Postgres, porque o erro do
 * banco vem no meio de um lote de 50 e não diz qual linha do arquivo quebrou.
 */
function valida(q, arquivo, i) {
  const onde = `${arquivo}[${i}]`;
  const problemas = [];

  /* Valida contra o catálogo, e não contra as regras de classificação: as
     matérias de trilha têm tema mas não têm regra, porque não há questão do
     ENEM para classificar em Cálculo I. Ver scripts/catalogo-temas.mjs. */
  if (!materiaExiste(q.materia)) {
    problemas.push(`matéria desconhecida: ${q.materia}`);
  } else if (!temaExiste(q.materia, q.tema)) {
    problemas.push(`tema não existe em ${q.materia}: ${JSON.stringify(q.tema)}`);
  }

  if (typeof q.enunciado !== "string" || q.enunciado.trim().length < 40) {
    problemas.push("enunciado curto demais ou ausente");
  }
  if (!Array.isArray(q.opcoes) || q.opcoes.length !== 5) {
    problemas.push("são necessárias exatamente 5 alternativas");
  } else if (new Set(q.opcoes).size !== 5) {
    problemas.push("há alternativas repetidas");
  }
  if (!Number.isInteger(q.correta) || q.correta < 0 || q.correta > 4) {
    problemas.push("`correta` precisa ser um índice de 0 a 4");
  }
  if (typeof q.explicacao !== "string" || q.explicacao.trim().length < 40) {
    problemas.push("explicação curta demais ou ausente");
  }
  if (q.dificuldade && !DIFICULDADES.has(q.dificuldade)) {
    problemas.push(`dificuldade inválida: ${q.dificuldade}`);
  }

  return problemas.map((p) => `  ${onde}: ${p}`);
}

/** Lista .mjs da pasta e de um nível de subpasta (`gerado/`). */
function listaArquivos(base, prefixo = "") {
  const achados = [];
  for (const item of readdirSync(base, { withFileTypes: true })) {
    if (item.isDirectory()) {
      achados.push(
        ...listaArquivos(new URL(`${item.name}/`, base), `${prefixo}${item.name}/`)
      );
    } else if (item.name.endsWith(".mjs")) {
      achados.push(`${prefixo}${item.name}`);
    }
  }
  return achados.sort();
}

async function principal() {
  const arquivos = listaArquivos(pasta);

  if (arquivos.length === 0) {
    console.log("\nNenhum arquivo em supabase/seed-data/questoes/.\n");
    return;
  }

  console.log(`\n${arquivos.length} arquivo(s).\n`);

  const todas = [];
  const erros = [];
  const porArquivo = {};

  for (const arquivo of arquivos) {
    const mod = await import(new URL(arquivo, pasta));
    const lista = mod.questoes ?? [];
    lista.forEach((q, i) => {
      erros.push(...valida(q, arquivo, i));
      todas.push(q);
    });
    porArquivo[arquivo] = lista.length;
  }

  // Com centenas de arquivos, listar todos vira ruído; o que importa é o
  // total por matéria e onde há problema.
  const porMateriaArq = {};
  for (const [arq, n] of Object.entries(porArquivo)) {
    const materia = arq.split("/").pop().split("__")[0].replace(".mjs", "");
    porMateriaArq[materia] = (porMateriaArq[materia] ?? 0) + n;
  }
  for (const [m, n] of Object.entries(porMateriaArq).sort()) {
    console.log(`  ${m.padEnd(14)} ${String(n).padStart(5)} questões`);
  }

  if (erros.length > 0) {
    console.error(`\n${erros.length} problema(s):\n`);
    for (const e of erros.slice(0, 40)) console.error(e);
    if (erros.length > 40) console.error(`  … e mais ${erros.length - 40}.`);
    console.error("\nNada foi gravado.\n");
    process.exit(1);
  }

  /* Deduplicação DENTRO do lote. O índice único do banco é sobre
     md5(enunciado): dois arquivos com o mesmo enunciado derrubariam o insert
     inteiro do lote de 50, e não só a linha repetida. */
  const vistos = new Set();
  const unicas = [];
  let repetidasNoLote = 0;
  for (const q of todas) {
    const chave = q.enunciado.trim();
    if (vistos.has(chave)) {
      repetidasNoLote++;
      continue;
    }
    vistos.add(chave);
    unicas.push(q);
  }

  console.log(`\n${todas.length} questões válidas.`);
  if (repetidasNoLote > 0) {
    console.log(`${repetidasNoLote} repetidas entre arquivos, descartadas.`);
  }

  const porTema = {};
  for (const q of unicas) {
    const k = `${q.materia} · ${q.tema}`;
    porTema[k] = (porTema[k] ?? 0) + 1;
  }
  const cobertos = Object.keys(porTema).length;
  const magros = Object.entries(porTema).filter(([, n]) => n < 10);
  console.log(`${cobertos} temas cobertos de 135.`);
  if (magros.length > 0) {
    console.log(`${magros.length} deles com menos de 10 questões.`);
  }
  console.log("");

  todas.length = 0;
  todas.push(...unicas);

  if (seco) {
    console.log("--seco: nada foi gravado.\n");
    return;
  }

  const db = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error: erroColuna } = await db
    .from("questoes")
    .select("tema_manual")
    .limit(1);
  if (erroColuna) {
    console.error(
      "\nA coluna `tema_manual` ainda não existe.\n" +
        "Rode supabase/temas.sql no SQL Editor do Supabase e tente de novo.\n"
    );
    process.exit(1);
  }

  /* O índice único é sobre md5(enunciado), e o upsert do PostgREST não sabe
     mirar índice funcional — foi por aí que este projeto já tropeçou duas
     vezes. Então a deduplicação acontece aqui: lê o que existe, insere o
     resto. */
  console.log("Lendo os enunciados que já existem…");
  const jaExistem = new Set();
  for (let inicio = 0; ; inicio += 1000) {
    const { data, error } = await db
      .from("questoes")
      .select("enunciado")
      .order("id", { ascending: true })
      .range(inicio, inicio + 999);
    if (error) throw new Error(error.message);
    if (!data || data.length === 0) break;
    for (const r of data) jaExistem.add(r.enunciado);
    if (data.length < 1000) break;
  }

  const novas = todas.filter((q) => !jaExistem.has(q.enunciado));
  console.log(`${todas.length - novas.length} já estavam no banco; ${novas.length} são novas.\n`);

  if (novas.length === 0) {
    console.log("Nada a fazer.\n");
    return;
  }

  const linhas = novas.map((q) => ({
    materia_id: q.materia,
    tema: q.tema,
    // O classificador ignora estas: o tema veio do arquivo, não de heurística.
    tema_manual: true,
    fonte: q.fonte ?? "Percurso · autoral",
    enunciado: q.enunciado,
    opcoes: q.opcoes,
    correta: q.correta,
    explicacao: q.explicacao,
    origem: "autoral",
    dificuldade: q.dificuldade ?? "media",
  }));

  let gravadas = 0;
  const LOTE = 50;
  for (let i = 0; i < linhas.length; i += LOTE) {
    const fatia = linhas.slice(i, i + LOTE);
    const { error } = await db.from("questoes").insert(fatia);
    if (error) {
      console.error(`  lote ${i / LOTE + 1} falhou: ${error.message}`);
      continue;
    }
    gravadas += fatia.length;
    process.stdout.write(`\r  ${gravadas}/${linhas.length}`);
  }

  console.log(`\n\n${gravadas} questões inseridas.\n`);
}

principal().catch((e) => {
  console.error("\n" + (e?.message ?? e) + "\n");
  process.exit(1);
});
