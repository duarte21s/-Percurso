/* =========================================================================
   Percurso — semeia o conteúdo de partida da Comunidade.

   Uso:
     node scripts/seed-comunidade.mjs --seco    confere, não grava
     node scripts/seed-comunidade.mjs           grava

   Precisa de NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY em .env.local.
   Rode DEPOIS de aplicar supabase/comunidade.sql no SQL Editor.

   Idempotente: cada post tem `seed_key` estável — rodar de novo atualiza o
   texto, não duplica. A conta autora é uma só, real e identificável:
   "Equipe Percurso" (@percurso, verificada). Nenhum usuário fingido.
   ========================================================================= */

import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { POSTS_SEMENTE } from "../supabase/seed-data/comunidade.mjs";

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
const EMAIL_EQUIPE = "equipe.percurso@example.com";

const db = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

/** Acha ou cria a conta "Equipe Percurso" e devolve o id. */
async function contaEquipe() {
  // A API de admin pagina; a Equipe é criada cedo, então a 1ª página basta.
  const { data: lista, error } = await db.auth.admin.listUsers({ page: 1, perPage: 200 });
  if (error) throw new Error(`listUsers: ${error.message}`);

  let user = (lista?.users ?? []).find((u) => u.email === EMAIL_EQUIPE);

  if (!user) {
    if (seco) {
      console.log(`--seco: criaria a conta ${EMAIL_EQUIPE}.`);
      return null;
    }
    const { data, error: e2 } = await db.auth.admin.createUser({
      email: EMAIL_EQUIPE,
      email_confirm: true,
      user_metadata: { nome: "Equipe Percurso" },
    });
    if (e2) throw new Error(`createUser: ${e2.message}`);
    user = data.user;
    console.log(`Conta "Equipe Percurso" criada (${user.id}).`);
  }

  if (!seco) {
    // O trigger handle_novo_usuario já criou o perfil; aqui garante o nome,
    // o username reservado e o selo de verificado (service role ignora RLS).
    const { error: e3 } = await db
      .from("perfis")
      .update({ nome: "Equipe Percurso", username: "percurso", verificado: true })
      .eq("id", user.id);
    if (e3) throw new Error(`perfil da equipe: ${e3.message}`);
  }

  return user.id;
}

async function principal() {
  const autorId = await contaEquipe();

  const agora = Date.now();
  const linhas = POSTS_SEMENTE.map((p) => ({
    seed_key: p.seed_key,
    autor_id: autorId,
    tipo: p.tipo,
    titulo: p.titulo ?? null,
    texto: p.texto,
    tags: p.tags ?? [],
    codigo: p.codigo ?? null,
    criado_em: new Date(agora - (p.dias ?? 1) * 86_400_000).toISOString(),
  }));

  console.log(`\n${linhas.length} posts de partida.`);
  const porTipo = {};
  for (const l of linhas) porTipo[l.tipo] = (porTipo[l.tipo] ?? 0) + 1;
  for (const [t, n] of Object.entries(porTipo)) console.log(`  ${t.padEnd(18)} ${n}`);

  if (seco) {
    console.log("\n--seco: nada foi gravado.\n");
    return;
  }
  if (!autorId) {
    console.error("\nSem a conta da equipe não dá para semear. Rode sem --seco.\n");
    process.exit(1);
  }

  const { error } = await db
    .from("com_posts")
    .upsert(linhas, { onConflict: "seed_key" });

  if (error) {
    console.error(`\nErro ao semear: ${error.message}\n`);
    process.exit(1);
  }
  console.log("\nFeito. O feed da Comunidade abre com esses posts.\n");
}

principal().catch((e) => {
  console.error("\n" + e.message + "\n");
  process.exit(1);
});
