/* =========================================================================
   Percurso — teste da trava de revisão do seed (totalmente offline)

   Monta uma pasta temporária com arquivos reais de gerado/ e relatórios e
   registros de revisão fabricados, roda `seed-questoes.mjs --offline --pasta`
   sobre ela e confere quantas questões a trava retém em cada caso. Não lê
   .env.local, não abre conexão e não escreve fora da pasta temporária.

     node scripts/testar-trava-seed.mjs
   ========================================================================= */

import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const raiz = fileURLToPath(new URL("..", import.meta.url));
const gerado = join(raiz, "supabase/seed-data/questoes/gerado");
const seed = join(raiz, "scripts/seed-questoes.mjs");

/* Arquivos reais de três matérias, só para o par (matéria, tema) existir no catálogo. */
const A = "estatistica__distribuicao-binomial.mjs";
const B = "informatica__redes-de-computadores-e-protocolos.mjs";
const C = "portugues-fund__substantivo-e-adjetivo.mjs";
const D = "raciocinio-logico__tabelas-verdade-e-equivalencias.mjs";

function monta(casos) {
  const tmp = mkdtempSync(join(tmpdir(), "trava-seed-"));
  const g = join(tmp, "gerado");
  mkdirSync(join(g, "_relatorios"), { recursive: true });
  mkdirSync(join(g, "_revisao"), { recursive: true });
  for (const [arquivo, { relatorio, registro, cabecalho }] of Object.entries(casos)) {
    let texto = readFileSync(join(gerado, arquivo), "utf8");
    if (cabecalho === "limpo") texto = texto.replace(/N[ÃA]O revisado/gi, "revisado");
    writeFileSync(join(g, arquivo), texto);
    const base = arquivo.replace(/\.mjs$/, "");
    if (relatorio) writeFileSync(join(g, "_relatorios", `${base}.json`), JSON.stringify(relatorio));
    if (registro) writeFileSync(join(g, "_revisao", `${base}.json`), JSON.stringify(registro));
  }
  return tmp;
}

function roda(tmp) {
  const r = spawnSync("node", [seed, "--offline", "--pasta", tmp], { encoding: "utf8" });
  const retidas = {};
  for (const linha of r.stdout.split("\n")) {
    const m = linha.match(/^\s{2}([a-z-]+)\s+(\d+)\s+(\d+)\s+(\d+)\s*$/);
    if (m) retidas[m[1]] = { total: +m[2], liberadas: +m[3], retidas: +m[4] };
  }
  return { status: r.status, retidas, saida: r.stdout + r.stderr };
}

let falhas = 0;
function confere(nome, obtido, esperado) {
  const ok = obtido === esperado;
  if (!ok) falhas++;
  console.log(`${ok ? "ok   " : "FALHA"} ${nome}: obtido ${obtido}, esperado ${esperado}`);
}

const registro = (arquivo, questoes) => ({ arquivo, questoes });

/* 1. relatório com pendentes [1,2,3], sem registro: 3 retidas */
{
  const tmp = monta({ [A]: { cabecalho: "limpo", relatorio: { revisao_independente_pendente: [1, 2, 3] } } });
  const r = roda(tmp);
  confere("relatório pendente [1,2,3]", r.retidas.estatistica?.retidas, 3);
  confere("  status de saída", r.status, 0);
  confere("  nenhuma conexão", /nenhuma conexão foi aberta/.test(r.saida), true);
  rmSync(tmp, { recursive: true });
}

/* 2. pendentes [1,2,3] com registro aprovando 1 e corrigindo 2: sobra 1 retida */
{
  const tmp = monta({
    [B]: {
      cabecalho: "limpo",
      relatorio: { revisao_independente_pendente: [1, 2, 3] },
      registro: registro(B, { 1: { status: "aprovada" }, 2: { status: "corrigida" } }),
    },
  });
  const r = roda(tmp);
  confere("registro libera 1 aprovada e 1 corrigida", r.retidas.informatica?.retidas, 1);
  rmSync(tmp, { recursive: true });
}

/* 3. cabeçalho "NÃO revisado" retém o arquivo todo; registro libera 4 */
{
  const tmp = monta({
    [C]: {
      relatorio: { revisao_independente_pendente: [] },
      registro: registro(C, { 1: { status: "aprovada" }, 2: { status: "aprovada" }, 3: { status: "aprovada" }, 4: { status: "corrigida" } }),
    },
  });
  const r = roda(tmp);
  const total = r.retidas["portugues-fund"]?.total;
  confere("cabeçalho NÃO revisado retém tudo menos os 4 liberados", r.retidas["portugues-fund"]?.retidas, total - 4);
  rmSync(tmp, { recursive: true });
}

/* 4. arquivo sem relatório, marcado como pendente no registro, tudo retido */
{
  const tmp = monta({
    [D]: {
      cabecalho: "limpo",
      registro: registro(D, Object.fromEntries(Array.from({ length: 30 }, (_, i) => [String(i + 1), { status: "pendente" }]))),
    },
  });
  const r = roda(tmp);
  confere("registro pendente retém as 30", r.retidas["raciocinio-logico"]?.retidas, 30);
  rmSync(tmp, { recursive: true });
}

/* 5. status desconhecido no registro também retém */
{
  const tmp = monta({ [A]: { cabecalho: "limpo", registro: registro(A, { 1: { status: "talvez" } }) } });
  const r = roda(tmp);
  confere("status desconhecido retém", r.retidas.estatistica?.retidas, 1);
  rmSync(tmp, { recursive: true });
}

/* 6. sem nada: nenhuma retida */
{
  const tmp = monta({ [A]: { cabecalho: "limpo" } });
  const r = roda(tmp);
  confere("sem relatório e sem marca: nada retido", r.retidas.estatistica?.retidas, 0);
  rmSync(tmp, { recursive: true });
}

/* 7. flags de risco exigem as duas juntas */
{
  const r1 = spawnSync("node", [seed, "--incluir-pendentes"], { encoding: "utf8" });
  confere("--incluir-pendentes sozinha é recusada", r1.status, 1);
  const r2 = spawnSync("node", [seed, "--offline", "--incluir-pendentes", "--confirmo-sem-revisao"], { encoding: "utf8" });
  confere("--incluir-pendentes não vale offline", r2.status, 1);
}

console.log(falhas === 0 ? "\nTrava do seed: todos os casos passaram." : `\n${falhas} caso(s) falharam.`);
process.exit(falhas === 0 ? 0 : 1);
