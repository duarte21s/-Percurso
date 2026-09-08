/* Diagnóstico: os temas gravados no banco batem com os tópicos de
   lib/conteudo/materias.ts? Se não baterem, a contagem por tema dá zero e a
   tela desabilita todos os conteúdos. */
import { readFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  (await readFile(new URL("../.env.local", import.meta.url), "utf8"))
    .split(String.fromCharCode(10))
    .map((l) => l.match(/^([A-Z_]+)=(.*)$/)).filter(Boolean)
    .map((m) => [m[1], m[2].trim()])
);
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const { data: vw, error } = await db.from("vw_temas").select("materia_id, tema, total, comentadas").limit(5);
console.log("vw_temas:", error ? "ERRO -> " + error.message : `ok, ${vw.length} amostras`);
if (vw && vw.length) console.log("  exemplo:", JSON.stringify(vw[0]));

const { data: qs } = await db.from("questoes").select("materia_id, tema").eq("materia_id", "matematica").limit(4000);
const noBanco = new Set((qs ?? []).map((q) => q.tema).filter(Boolean));
console.log(`\nmatematica: ${qs?.length ?? 0} questoes, ${noBanco.size} temas distintos no banco`);

const src = await readFile(new URL("../lib/conteudo/materias.ts", import.meta.url), "utf8");
const bloco = src.slice(src.indexOf('"id": "matematica"'));
const topicos = [...bloco.slice(0, bloco.indexOf("]," + String.fromCharCode(10) + "  }")).matchAll(/\[\s*"([^"]+)"/g)].map((m) => m[1]);
console.log(`materias.ts: ${topicos.length} topicos declarados`);

const faltando = topicos.filter((t) => !noBanco.has(t));
console.log(`\ntopicos SEM questao com esse nome exato: ${faltando.length} de ${topicos.length}`);
for (const t of faltando.slice(0, 8)) console.log("  -", t);
if (noBanco.size) {
  console.log("\nnomes que o banco usa (amostra):");
  for (const t of [...noBanco].slice(0, 8)) console.log("  *", t);
}
