/* Testa as garantias do sistema de provas CONTRA O BANCO.
 *
 * Por que no banco e não pela API: as regras que importam vivem em gatilhos
 * do Postgres, e não nas rotas. O navegador do aluno carrega a chave anon com
 * a sessão dele e pode falar direto com o PostgREST — testar só as rotas
 * provaria que a porta da frente está trancada enquanto a janela fica aberta.
 *
 * Este script usa a SERVICE ROLE, que passa por cima da RLS. Isso é
 * deliberado: é o atacante mais forte possível. Se o gatilho barra a service
 * role, barra qualquer um. O que ele NÃO passa por cima é gatilho — gatilho
 * roda sempre.
 *
 * Precisa da migração supabase/provas-tempo-e-bloqueio.sql aplicada.
 *
 *   node scripts/checar-prova.mjs
 *
 * Cria uma tentativa descartável, tenta burlá-la de sete jeitos, e apaga tudo
 * no fim — inclusive se algum teste falhar.
 */

import { readFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

/* .env.local na mão: o script roda fora do Next, que é quem normalmente
   carrega o arquivo. */
const env = Object.fromEntries(
  (await readFile(new URL("../.env.local", import.meta.url), "utf8"))
    .split("\n")
    .map((l) => l.match(/^([A-Z_]+)=(.*)$/))
    .filter(Boolean)
    .map((m) => [m[1], m[2].trim()])
);

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const chave = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !chave) {
  console.error("\nFaltam NEXT_PUBLIC_SUPABASE_URL e/ou SUPABASE_SERVICE_ROLE_KEY.\n");
  process.exit(1);
}

const db = createClient(url, chave, { auth: { persistSession: false } });

let falhas = 0;
let tentativaId = null;

function ok(nome, condicao, detalhe = "") {
  console.log(
    `  ${condicao ? "ok   " : "FALHA"} ${nome}${detalhe ? " — " + detalhe : ""}`
  );
  if (!condicao) falhas++;
}

/** Espera que a operação seja RECUSADA. Sucesso aqui é o erro aparecer. */
async function recusa(nome, promessa, trechoEsperado) {
  const { error } = await promessa;
  const barrou = !!error;
  const mensagemCerta =
    barrou && (!trechoEsperado || error.message.toLowerCase().includes(trechoEsperado));
  ok(
    nome,
    mensagemCerta,
    barrou ? `barrado: ${error.message.slice(0, 62)}` : "PASSOU (não deveria)"
  );
}

async function limpar() {
  if (!tentativaId) return;
  await db.from("respostas").delete().eq("simulado_id", tentativaId);
  await db.from("simulados").delete().eq("id", tentativaId);
}

try {
  /* ---------- preparo ---------- */
  console.log("\nPREPARO");

  const { data: prova } = await db
    .from("provas")
    .select("id, tempo_minutos")
    .limit(1)
    .maybeSingle();
  if (!prova) throw new Error("nenhuma prova cadastrada — importe uma antes");

  const { data: questoes } = await db
    .from("questoes")
    .select("id")
    .eq("prova_id", prova.id)
    .order("numero", { ascending: true })
    .limit(5);
  if (!questoes || questoes.length < 3) {
    throw new Error(`prova ${prova.id} tem menos de 3 questões importadas`);
  }
  const ids = questoes.map((q) => q.id);

  const { data: dono } = await db.from("perfis").select("id").limit(1).maybeSingle();
  if (!dono) throw new Error("nenhum perfil cadastrado");

  const { data: nova, error: erroCriar } = await db
    .from("simulados")
    .insert({
      usuario_id: dono.id,
      materia_filtro: "todas",
      prova_id: prova.id,
      questao_ids: ids,
    })
    .select("id, indice_atual, iniciado_em, expira_em, segundos")
    .single();
  if (erroCriar) throw new Error(`não criou a tentativa: ${erroCriar.message}`);
  tentativaId = nova.id;

  ok("tentativa criada", !!nova.id);
  ok(
    "iniciado_em gravado pelo servidor",
    !!nova.iniciado_em,
    new Date(nova.iniciado_em).toISOString()
  );
  ok(
    "expira_em calculado de tempo_minutos",
    !!nova.expira_em &&
      Math.abs(
        (new Date(nova.expira_em) - new Date(nova.iniciado_em)) / 60000 -
          prova.tempo_minutos
      ) < 1,
    `${prova.tempo_minutos} min`
  );
  ok("começa na questão 1", nova.indice_atual === 0);

  /* ---------- 1. o cronômetro não se deixa reescrever ---------- */
  console.log("\nCRONÔMETRO");

  await recusa(
    "não dá para adiar o vencimento",
    db
      .from("simulados")
      .update({ expira_em: new Date(Date.now() + 9e8).toISOString() })
      .eq("id", tentativaId),
    "expira_em"
  );

  await recusa(
    "não dá para reescrever o início",
    db
      .from("simulados")
      .update({ iniciado_em: new Date().toISOString() })
      .eq("id", tentativaId),
    "iniciado_em"
  );

  /* `segundos` é derivado: mandar 0 não zera nada, o gatilho recalcula. */
  await db.from("simulados").update({ segundos: 0 }).eq("id", tentativaId);
  const { data: depois } = await db
    .from("simulados")
    .select("segundos")
    .eq("id", tentativaId)
    .single();
  ok(
    "segundos enviados pelo cliente são ignorados",
    depois.segundos >= 0,
    `gravado ${depois.segundos}s, derivado de now() - iniciado_em`
  );

  /* ---------- 2. bloqueio progressivo ---------- */
  console.log("\nBLOQUEIO");

  await recusa(
    "só a questão atual aceita resposta",
    db.from("respostas").insert({
      simulado_id: tentativaId,
      questao_id: ids[2],
      alternativa: 0,
      acertou: false,
    }),
    "atual"
  );

  const { error: erroQ1 } = await db.from("respostas").insert({
    simulado_id: tentativaId,
    questao_id: ids[0],
    alternativa: 1,
    acertou: false,
  });
  ok("a questão atual aceita", !erroQ1, erroQ1?.message ?? "gravada");

  await db.from("simulados").update({ indice_atual: 1 }).eq("id", tentativaId);

  await recusa(
    "questão travada não muda de resposta",
    db
      .from("respostas")
      .update({ alternativa: 4 })
      .eq("simulado_id", tentativaId)
      .eq("questao_id", ids[0]),
    "atual"
  );

  await recusa(
    "questão travada não é apagada",
    db
      .from("respostas")
      .delete()
      .eq("simulado_id", tentativaId)
      .eq("questao_id", ids[0]),
    "atual"
  );

  await recusa(
    "a questão atual não retrocede",
    db.from("simulados").update({ indice_atual: 0 }).eq("id", tentativaId),
    "retrocede"
  );

  await recusa(
    "não dá para pular questões",
    db.from("simulados").update({ indice_atual: 4 }).eq("id", tentativaId),
    "uma em uma"
  );

  /* ---------- 3. encerramento ---------- */
  console.log("\nENCERRAMENTO");

  const { error: erroFechar } = await db
    .from("simulados")
    .update({ status: "concluido", acertos: 1, erros: 0 })
    .eq("id", tentativaId);
  ok("dá para entregar", !erroFechar, erroFechar?.message ?? "");

  const { data: fechada } = await db
    .from("simulados")
    .select("finalizado_em, status")
    .eq("id", tentativaId)
    .single();
  ok("finalizado_em carimbado", !!fechada.finalizado_em, fechada.status);

  await recusa(
    "tentativa entregue não reabre",
    db.from("simulados").update({ status: "em_andamento" }).eq("id", tentativaId),
    "encerrada"
  );

  await recusa(
    "tentativa entregue não aceita resposta",
    db.from("respostas").insert({
      simulado_id: tentativaId,
      questao_id: ids[1],
      alternativa: 2,
      acertou: false,
    }),
    "encerrada"
  );
} catch (e) {
  console.error(`\nERRO DE PREPARO: ${e.message}`);
  console.error(
    "Se a mensagem fala de coluna inexistente, a migração ainda não foi aplicada:\n" +
      "  supabase/provas-tempo-e-bloqueio.sql\n"
  );
  falhas++;
} finally {
  await limpar();
}

console.log(
  falhas === 0
    ? "\nProva blindada: nenhuma das tentativas de burla passou.\n"
    : `\n${falhas} reprovação(ões).\n`
);
process.exit(falhas === 0 ? 0 : 1);
