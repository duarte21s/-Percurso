/* =========================================================================
   Percurso — seed do banco
   Popula `materias` e `questoes` a partir do conteúdo autoral original.

   Uso:
     1. rode supabase/schema.sql no SQL Editor do projeto
     2. preencha .env.local
     3. npm run seed

   Usa a service role key, que ignora RLS. Roda só na sua máquina, nunca no
   app. É idempotente: `materias` faz upsert por id, `questoes` ignora
   conflito no índice único de enunciado, então rodar de novo não duplica.
   ========================================================================= */

import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { SUBJECTS, QUESTIONS } from "../supabase/seed-data/conteudo.mjs";

// --- .env.local sem dependência externa -----------------------------------
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
  console.error(
    "\nFaltam variáveis de ambiente.\n\n" +
      "  NEXT_PUBLIC_SUPABASE_URL   " + (url ? "ok" : "AUSENTE") + "\n" +
      "  SUPABASE_SERVICE_ROLE_KEY  " + (serviceKey ? "ok" : "AUSENTE") + "\n\n" +
      "Copie .env.local.example para .env.local e preencha as duas.\n"
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// --- matérias -------------------------------------------------------------
const materias = SUBJECTS.map((m, i) => ({
  id: m.id,
  nome: m.nome,
  glifo: m.glifo,
  area: m.area,
  resumo: m.resumo,
  aulas: m.aulas,
  ordem: i,
}));

console.log(`Inserindo ${materias.length} matérias...`);
const { error: erroMaterias } = await supabase
  .from("materias")
  .upsert(materias, { onConflict: "id" });

if (erroMaterias) {
  console.error("Falhou ao inserir matérias:", erroMaterias.message);
  process.exit(1);
}

// --- questões -------------------------------------------------------------
const questoes = QUESTIONS.map((q) => ({
  materia_id: q.materia,
  fonte: q.fonte,
  enunciado: q.enunciado,
  opcoes: q.opcoes,
  correta: q.correta,
  explicacao: q.explicacao,
  origem: "autoral",
  dificuldade: "media",
}));

// Uma checagem de sanidade antes de escrever: uma questão com gabarito fora
// do alcance das alternativas passaria pelo insert e quebraria o simulado.
for (const q of questoes) {
  if (q.correta < 0 || q.correta >= q.opcoes.length) {
    console.error(`Gabarito inválido em: ${q.enunciado.slice(0, 60)}...`);
    process.exit(1);
  }
  if (!materias.some((m) => m.id === q.materia_id)) {
    console.error(`Matéria desconhecida "${q.materia_id}" em: ${q.enunciado.slice(0, 60)}...`);
    process.exit(1);
  }
}

// O índice único de questões é por md5(enunciado) — uma expressão, e o
// PostgREST só aceita nomes de coluna em `onConflict`. Então filtramos aqui:
// lemos o que já existe e inserimos só o que falta.
const { data: jaExistem, error: erroLeitura } = await supabase
  .from("questoes")
  .select("enunciado");

if (erroLeitura) {
  console.error("Falhou ao ler questões existentes:", erroLeitura.message);
  process.exit(1);
}

const conhecidos = new Set((jaExistem ?? []).map((q) => q.enunciado));
const novas = questoes.filter((q) => !conhecidos.has(q.enunciado));

if (novas.length === 0) {
  console.log("Nenhuma questão nova — o banco já está populado.");
} else {
  console.log(`Inserindo ${novas.length} questões...`);
  const { error: erroQuestoes } = await supabase.from("questoes").insert(novas);

  if (erroQuestoes) {
    console.error("Falhou ao inserir questões:", erroQuestoes.message);
    process.exit(1);
  }
}

// --- conferência ----------------------------------------------------------
const [{ count: totalMaterias }, { count: totalQuestoes }] = await Promise.all([
  supabase.from("materias").select("*", { count: "exact", head: true }),
  supabase.from("questoes").select("*", { count: "exact", head: true }),
]);

console.log(
  `\nPronto. ${totalMaterias} matérias e ${totalQuestoes} questões no banco.\n`
);
