/* =========================================================================
   Insere no banco as matérias que existem por causa de uma trilha.

   `questoes.materia_id` é chave estrangeira para `materias.id`, então as
   matérias precisam existir na tabela ANTES de qualquer questão delas ser
   semeada. Este script cuida disso.

   Lê a lista de lib/conteudo/materias-objetivo.ts para não manter duas
   verdades: o arquivo TypeScript é a fonte, aqui só se extrai o que a tabela
   precisa. A leitura é por regex porque .mjs não importa .ts — se o formato
   daquele arquivo mudar muito, este script reclama em vez de inserir errado.

   Uso:  node scripts/seed-materias-objetivo.mjs
         node scripts/seed-materias-objetivo.mjs --listar    (não grava nada)

   Idempotente: faz upsert por id.
   ========================================================================= */

import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

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
    const valor = linha.slice(corte + 1).trim();
    if (!process.env[chave]) process.env[chave] = valor;
  }
}
carregaEnv();

const fonte = readFileSync(
  new URL("../lib/conteudo/materias-objetivo.ts", import.meta.url),
  "utf8"
);

/* Cada bloco de matéria começa em `id: "..."` e vai até o próximo. Pegamos os
   cinco campos que a tabela `materias` tem — topicos e objetivos ficam só no
   TypeScript, porque não há coluna para eles. */
/* O repositório é usado também no Windows. Aceitar CRLF aqui evita a falsa
   impressão de que o catálogo está vazio quando o arquivo foi salvo pelo
   editor com quebra de linha do Windows. */
const blocos = fonte.split(/\r?\n {2}\{\r?\n/).slice(1);
const materias = [];

for (const b of blocos) {
  const pega = (campo) => {
    const m = b.match(new RegExp(`${campo}: "([^"]*)"`));
    return m ? m[1] : null;
  };
  const id = pega("id");
  if (!id) continue;
  materias.push({
    id,
    nome: pega("nome"),
    glifo: pega("glifo"),
    area: pega("area"),
    resumo: pega("resumo") ?? "",
    aulas: 0,
    // Depois das nove do ensino médio, que ocupam 0..8.
    ordem: 10 + materias.length,
  });
}

const AREAS = ["exatas", "natureza", "humanas", "linguagens"];
const problemas = materias.filter(
  (m) => !m.id || !m.nome || !AREAS.includes(m.area)
);

if (materias.length === 0) {
  console.error(
    "Nenhuma matéria lida de materias-objetivo.ts. O formato do arquivo mudou?"
  );
  process.exit(1);
}
if (problemas.length > 0) {
  console.error("Matérias com campo faltando ou área inválida:");
  for (const p of problemas) console.error("  ", JSON.stringify(p));
  process.exit(1);
}

console.log(`${materias.length} matérias lidas de materias-objetivo.ts:`);
for (const m of materias) {
  console.log(`  ${m.glifo}  ${m.id.padEnd(20)} ${m.area.padEnd(11)} ${m.nome}`);
}

if (process.argv.includes("--listar")) {
  console.log("\n--listar: nada foi gravado.");
  process.exit(0);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const chave = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !chave) {
  console.error(
    "\nFaltam NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY em .env.local."
  );
  process.exit(1);
}

const supabase = createClient(url, chave, {
  auth: { persistSession: false },
});

const { error } = await supabase
  .from("materias")
  .upsert(materias, { onConflict: "id" });

if (error) {
  console.error("\nFalhou:", error.message);
  process.exit(1);
}

const { count } = await supabase
  .from("materias")
  .select("*", { count: "exact", head: true });

console.log(`\nGravado. A tabela materias tem agora ${count} linhas.`);
