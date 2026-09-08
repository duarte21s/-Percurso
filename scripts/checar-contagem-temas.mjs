/* Simula o que a tela de Questões faz para saber quais conteúdos habilitar.
 *
 * Usa a chave ANÔNIMA de propósito — é a que o navegador do aluno carrega, e
 * portanto a única que prova alguma coisa. Com a service role tudo passa, e o
 * teste não valeria nada.
 */
import { readFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  (await readFile(new URL("../.env.local", import.meta.url), "utf8"))
    .split(String.fromCharCode(10))
    .map((l) => l.match(/^([A-Z_]+)=(.*)$/)).filter(Boolean).map((m) => [m[1], m[2].trim()])
);
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
});

console.log("");
const { data: vw, error: erroVw } = await db.from("vw_temas").select("materia_id, tema, total, comentadas");
if (erroVw) {
  console.log("caminho 1 (view vw_temas):  BLOQUEADO -> " + erroVw.message);
} else {
  console.log(`caminho 1 (view vw_temas):  ok, ${vw.length} temas`);
}

// Caminho 2: o fallback paginado que acabou de subir.
const PAGINA = 1000;
const mapa = new Map();
let lidas = 0;
for (let de = 0; ; de += PAGINA) {
  const { data, error } = await db.from("questoes").select("materia_id, tema")
    .not("tema", "is", null).not("materia_id", "is", null)
    .order("id", { ascending: true }).range(de, de + PAGINA - 1);
  if (error) { console.log("caminho 2 falhou: " + error.message); break; }
  if (!data || data.length === 0) break;
  lidas += data.length;
  for (const q of data) {
    const k = q.materia_id + "|" + q.tema;
    mapa.set(k, (mapa.get(k) ?? 0) + 1);
  }
  if (data.length < PAGINA) break;
}
console.log(`caminho 2 (fallback):       ${lidas} questoes lidas, ${mapa.size} temas contados`);

const porMateria = new Map();
for (const [k, n] of mapa) {
  const m = k.split("|")[0];
  const a = porMateria.get(m) ?? { temas: 0, questoes: 0 };
  a.temas++; a.questoes += n;
  porMateria.set(m, a);
}
console.log("\nconteudos que ficariam CLICAVEIS por materia:");
for (const [m, a] of [...porMateria].sort((x, y) => y[1].temas - x[1].temas)) {
  console.log("  " + m.padEnd(20) + String(a.temas).padStart(3) + " conteudos  " + String(a.questoes).padStart(5) + " questoes");
}
