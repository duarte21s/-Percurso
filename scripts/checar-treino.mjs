/* Regressão: os gatilhos do modo prova NÃO podem ter travado o simulado de
   treino. Lá voltar numa questão e trocar a alternativa faz parte do estudo —
   todos os gatilhos começam com `if new.prova_id is null then return new`, e
   este script existe para provar que essa saída antecipada funciona. */
import { readFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  (await readFile(new URL("../.env.local", import.meta.url), "utf8"))
    .split(String.fromCharCode(10)).map((l) => l.match(/^([A-Z_]+)=(.*)$/)).filter(Boolean)
    .map((m) => [m[1], m[2].trim()])
);
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

let falhas = 0, id = null;
const ok = (n, c, d = "") => { console.log(`  ${c ? "ok   " : "FALHA"} ${n}${d ? " — " + d : ""}`); if (!c) falhas++; };

try {
  const { data: dono } = await db.from("perfis").select("id").limit(1).maybeSingle();
  const { data: qs } = await db.from("questoes").select("id").limit(3);
  const ids = qs.map((q) => q.id);

  const { data: novo, error: e1 } = await db.from("simulados")
    .insert({ usuario_id: dono.id, materia_filtro: "todas", questao_ids: ids })
    .select("id, indice_atual, expira_em").single();
  if (e1) throw new Error(e1.message);
  id = novo.id;

  ok("treino é criado", !!id);
  ok("treino NÃO ganha vencimento", novo.expira_em === null, "expira_em nulo, como deve");

  const { error: e2 } = await db.from("respostas")
    .insert({ simulado_id: id, questao_id: ids[2], alternativa: 0, acertou: false });
  ok("treino aceita QUALQUER questão", !e2, e2?.message ?? "sem bloqueio de ordem");

  const { error: e3 } = await db.from("respostas")
    .update({ alternativa: 3 }).eq("simulado_id", id).eq("questao_id", ids[2]);
  ok("treino deixa TROCAR a resposta", !e3, e3?.message ?? "trocada");

  const { error: e4 } = await db.from("simulados")
    .update({ indice_atual: 2 }).eq("id", id);
  ok("treino deixa pular o índice", !e4, e4?.message ?? "livre");

  const { error: e5 } = await db.from("simulados")
    .update({ indice_atual: 0 }).eq("id", id);
  ok("treino deixa VOLTAR o índice", !e5, e5?.message ?? "livre");
} catch (e) {
  console.error("ERRO:", e.message); falhas++;
} finally {
  if (id) { await db.from("respostas").delete().eq("simulado_id", id); await db.from("simulados").delete().eq("id", id); }
}
const OK = "Treino intacto: os gatilhos da prova nao vazaram para ele.";
console.log("");
console.log(falhas === 0 ? OK : falhas + " reprovacao(oes).");
console.log("");
process.exit(falhas === 0 ? 0 : 1);
