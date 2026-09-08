/* =========================================================================
   Percurso — moderação da Comunidade (service role).

   Não há painel de moderação no site: `oculto` e as denúncias só se alcançam
   por aqui. Sem este passo, o v1 da Comunidade não deve ir a público.

   Uso:
     node scripts/moderar.mjs                          lista as denúncias
     node scripts/moderar.mjs ver post <id>            mostra um post inteiro
     node scripts/moderar.mjs ocultar post <id>        oculta (some do feed)
     node scripts/moderar.mjs ocultar comentario <id>  idem, comentário
     node scripts/moderar.mjs mostrar post <id>        reverte o ocultar
     node scripts/moderar.mjs avatar <userId>          remove a foto de perfil

   Precisa de NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY em .env.local.
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

const db = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const TABELA = { post: "com_posts", comentario: "com_comentarios" };

async function conteudo(tipo, id) {
  const { data } = await db
    .from(TABELA[tipo])
    .select("id, texto, titulo, oculto, criado_em, autor:perfis!" +
      (tipo === "post" ? "com_posts_autor_id_fkey" : "com_comentarios_autor_id_fkey") +
      " ( nome, username )")
    .eq("id", id)
    .maybeSingle();
  return data;
}

async function listar() {
  const { data: denuncias, error } = await db
    .from("com_denuncias")
    .select("alvo_tipo, alvo_id, motivo, criado_em")
    .order("criado_em", { ascending: false });
  if (error) throw new Error(error.message);

  if (!denuncias || denuncias.length === 0) {
    console.log("\nNenhuma denúncia pendente.\n");
    return;
  }

  const grupos = new Map();
  for (const d of denuncias) {
    const k = `${d.alvo_tipo}:${d.alvo_id}`;
    const g = grupos.get(k) ?? { tipo: d.alvo_tipo, id: d.alvo_id, n: 0, motivos: [] };
    g.n++;
    if (d.motivo) g.motivos.push(d.motivo);
    grupos.set(k, g);
  }

  console.log(`\n${grupos.size} alvo(s) denunciado(s):\n`);
  for (const g of [...grupos.values()].sort((a, b) => b.n - a.n)) {
    const c = await conteudo(g.tipo, g.id);
    console.log("─".repeat(70));
    console.log(`${g.tipo} ${g.id}  ·  ${g.n} denúncia(s)${c?.oculto ? "  ·  JÁ OCULTO" : ""}`);
    if (c) {
      console.log(`autor: ${c.autor?.nome ?? "?"} (@${c.autor?.username ?? "?"})`);
      if (c.titulo) console.log(`título: ${c.titulo}`);
      console.log(`texto: ${(c.texto ?? "").slice(0, 240)}`);
    } else {
      console.log("(conteúdo não encontrado — pode já ter sido apagado)");
    }
    if (g.motivos.length) console.log(`motivos: ${g.motivos.slice(0, 5).join(" | ")}`);
    console.log(`ocultar:  node scripts/moderar.mjs ocultar ${g.tipo} ${g.id}`);
  }
  console.log("─".repeat(70) + "\n");
}

async function ver(tipo, id) {
  const c = await conteudo(tipo, id);
  if (!c) return console.log("Não encontrado.");
  console.log(JSON.stringify(c, null, 2));
}

async function definirOculto(tipo, id, valor) {
  if (!TABELA[tipo]) {
    console.error("Tipo: 'post' ou 'comentario'.");
    process.exit(1);
  }
  const { data, error } = await db
    .from(TABELA[tipo])
    .update({ oculto: valor })
    .eq("id", id)
    .select("id");
  if (error) throw new Error(error.message);
  if (!data || data.length === 0) {
    console.log("Nada mudou — id não encontrado.");
    return;
  }
  console.log(`${tipo} ${id} ${valor ? "ocultado" : "de volta ao feed"}.`);
}

async function limparAvatar(userId) {
  if (!userId) {
    console.error("Informe o id do usuário.");
    process.exit(1);
  }
  const { data: perfil } = await db
    .from("perfis")
    .select("avatar_path")
    .eq("id", userId)
    .maybeSingle();

  // Apaga tudo o que a pessoa já subiu na pasta dela, não só o caminho atual.
  const { data: arquivos } = await db.storage.from("avatares").list(userId);
  if (arquivos?.length) {
    await db.storage
      .from("avatares")
      .remove(arquivos.map((f) => `${userId}/${f.name}`));
  }

  const { error } = await db
    .from("perfis")
    .update({ avatar_path: null })
    .eq("id", userId);
  if (error) throw new Error(error.message);

  console.log(
    `foto de @${userId} removida${perfil?.avatar_path ? ` (era ${perfil.avatar_path})` : ""}.`
  );
}

const [cmd, tipo, id] = process.argv.slice(2);

const acao =
  !cmd ? listar()
  : cmd === "ver" && tipo && id ? ver(tipo, id)
  : cmd === "ocultar" && tipo && id ? definirOculto(tipo, id, true)
  : cmd === "mostrar" && tipo && id ? definirOculto(tipo, id, false)
  : cmd === "avatar" && tipo ? limparAvatar(tipo)
  : Promise.reject(new Error("Uso: veja o cabeçalho de scripts/moderar.mjs"));

acao.catch((e) => {
  console.error("\n" + e.message + "\n");
  process.exit(1);
});
