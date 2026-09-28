// Regressão local, sem credenciais nem alterações no banco real.
//
// Prova as peças de servidor da navegação rápida entre as abas da área /app:
//
// 1. A contagem por tema (a mais cara das abas) avisa no log quando a view
//    falha, sabe dizer se saiu inteira, e só vai para o cache quando saiu
//    inteira e pelo leitor do acervo — parcial ficaria errada para todo mundo.
// 2. Simulados e Redação disparam as duas consultas juntas, sem esperar uma
//    pela outra.
//
// O esqueleto em si (app/app/loading.tsx) é conferido por
// scripts/checar-sem-template.mjs, que garante que ele não traz script sem
// nonce.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
function carregar(arquivo, dependencias) {
  const codigo = ts.transpileModule(
    readFileSync(new URL(`../${arquivo}`, import.meta.url), "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }
  ).outputText;
  const exports = {};
  runInNewContext(codigo, {
    exports, console, URLSearchParams, Promise, setTimeout,
    require: (nome) => dependencias[nome] ?? require(nome),
  });
  return exports;
}

/* Banco falso: `vw_temas` e `questoes`, com falhas sob encomenda. Anota cada
   leitura para as asserções contarem quantas idas ao banco houve. */
function banco({ view = "ok", paginas = 3, falhaNaPagina = null } = {}) {
  const leituras = [];
  return {
    leituras,
    from(tabela) {
      let de = 0, comExplicacao = false;
      const q = {
        select() { return q; },
        not() { return q; },
        neq() { comExplicacao = true; return q; },
        order() { return q; },
        range(inicio) { de = inicio; return q; },
        then(ok, erro) {
          leituras.push(tabela);
          let r;
          if (tabela === "vw_temas") {
            r = view === "ok"
              ? { data: [{ materia_id: "matematica", tema: "Frações", total: 3, comentadas: 2 }], error: null }
              : { data: null, error: { code: "42501", message: "permission denied for view vw_temas" } };
          } else {
            /* Como o PostgREST: páginas cheias de mil até a última. As
               comentadas são um recorte menor, uma página a menos. */
            const pagina = de / 1000;
            const total = comExplicacao ? paginas - 1 : paginas;
            if (falhaNaPagina === pagina) r = { data: null, error: { code: "57014", message: "timeout" } };
            else if (pagina >= total) r = { data: [], error: null };
            else {
              const n = pagina === total - 1 ? 10 : 1000;
              r = { data: Array.from({ length: n }, () => ({ materia_id: "matematica", tema: "Frações" })), error: null };
            }
          }
          return Promise.resolve(r).then(ok, erro);
        },
      };
      return q;
    },
  };
}

function capturaAvisos(fn) {
  const avisos = [];
  const original = console.warn;
  console.warn = (...a) => avisos.push(a.join(" "));
  return Promise.resolve(fn()).finally(() => { console.warn = original; }).then((v) => [v, avisos]);
}

const temas = carregar("lib/temas.ts", {});

/* ------------------------------ 1a. leitura --------------------------------- */
{
  let [r, avisos] = await capturaAvisos(() => temas.leContagensPorTema(banco()));
  assert.equal(r.completa, true);
  assert.deepEqual({ ...r.contagens["matematica|Frações"] }, { total: 3, comentadas: 2 });
  assert.equal(avisos.length, 0, "view funcionando não vai para o log");

  const falha = banco({ view: "falha" });
  [r, avisos] = await capturaAvisos(() => temas.leContagensPorTema(falha));
  assert.equal(r.completa, true, "a contingência leu tudo");
  assert.deepEqual({ ...r.contagens["matematica|Frações"] }, { total: 2010, comentadas: 1010 });
  assert.equal(avisos.length, 1, "a falha da view não passa calada");
  assert.match(avisos[0], /vw_temas falhou \(42501/);
  assert.equal(falha.leituras.filter((t) => t === "questoes").length, 5, "3 páginas de todas + 2 das comentadas");

  [r] = await capturaAvisos(() => temas.leContagensPorTema(banco({ view: "falha", falhaNaPagina: 1 })));
  assert.equal(r.completa, false, "uma página que falha deixa a contagem marcada como parcial");
}
console.log("ok: a contagem por tema avisa quando a view falha e sabe dizer se saiu inteira");

/* ------------------------------ 1b. cache ----------------------------------- */
function cenarioCache({ admin }) {
  /* Cache falso com a regra do de verdade: guarda o que resolve, não guarda
     o que rejeita. */
  const guardado = new Map();
  const nextCache = {
    unstable_cache: (fn, chave, opcoes) => async (...args) => {
      assert.deepEqual(Array.from(chave), ["contagens-por-tema"]);
      assert.equal(opcoes.revalidate, 300);
      const k = JSON.stringify(args);
      if (guardado.has(k)) return guardado.get(k);
      const v = await fn(...args);
      guardado.set(k, v);
      return v;
    },
  };
  const mod = carregar("lib/temas-servidor.ts", {
    "server-only": {},
    "next/cache": nextCache,
    "@/lib/supabase/admin": { criaClienteAdmin: () => admin },
    "@/lib/temas": temas,
  });
  return { mod, guardado };
}
{
  // Inteira: conta uma vez e a segunda leitura sai do cache, sem banco.
  const admin = banco({ view: "falha" });
  const { mod, guardado } = cenarioCache({ admin });
  const sessao = banco();
  const [primeira] = await capturaAvisos(() => mod.contagensDoAcervo(sessao));
  const idas = admin.leituras.length;
  const [segunda] = await capturaAvisos(() => mod.contagensDoAcervo(sessao));
  assert.equal(admin.leituras.length, idas, "a segunda leitura não foi ao banco");
  assert.equal(guardado.size, 1);
  assert.deepEqual(JSON.parse(JSON.stringify(segunda)), JSON.parse(JSON.stringify(primeira)));
  assert.equal(sessao.leituras.length, 0, "com service role, a sessão não é usada");
}
{
  // Parcial: vai para a tela, mas não para o cache — a próxima conta de novo.
  const admin = banco({ view: "falha", falhaNaPagina: 1 });
  const { mod, guardado } = cenarioCache({ admin });
  const [r] = await capturaAvisos(() => mod.contagensDoAcervo(banco()));
  assert.ok(r["matematica|Frações"], "a parcial ainda vai para a tela");
  assert.equal(guardado.size, 0, "parcial não entra no cache");
  const idas = admin.leituras.length;
  await capturaAvisos(() => mod.contagensDoAcervo(banco()));
  assert.ok(admin.leituras.length > idas, "sem cache, a próxima conta de novo");
}
{
  // Sem service role: lê direto pela sessão, sem cache, como antes.
  const { mod, guardado } = cenarioCache({ admin: null });
  const sessao = banco();
  const r = await mod.contagensDoAcervo(sessao);
  assert.deepEqual({ ...r["matematica|Frações"] }, { total: 3, comentadas: 2 });
  assert.deepEqual(sessao.leituras, ["vw_temas"]);
  assert.equal(guardado.size, 0);
}
{
  // Erro inesperado não é engolido.
  const quebrado = { from() { throw new TypeError("cliente quebrado"); } };
  const { mod } = cenarioCache({ admin: quebrado });
  await assert.rejects(() => mod.contagensDoAcervo(banco()), /cliente quebrado/);
}
console.log("ok: só contagem inteira e do leitor do acervo vai para o cache; parcial e sem chave leem direto");

/* ------------------------ 2. consultas em paralelo -------------------------- */
/* Cada consulta anota quando começou e só termina depois de um tempo. Em
   sequência, a segunda começaria depois de a primeira terminar. */
function registrador() {
  const linha = [];
  let relogio = 0;
  const consulta = (nome, valor) => {
    const q = {
      select() { return q; }, eq() { return q; }, not() { return q; }, order() { return q; },
      then(ok, erro) {
        linha.push(`começa:${nome}`);
        return new Promise((r) => setTimeout(r, 20)).then(() => { linha.push(`termina:${nome}`); relogio++; return { data: valor, error: null }; }).then(ok, erro);
      },
    };
    return q;
  };
  return { linha, consulta };
}
{
  const { linha, consulta } = registrador();
  const supabase = { from: (t) => consulta(t, []) };
  const { default: pagina } = carregar("app/app/simulados/page.tsx", {
    "next/link": { default: "a" },
    "@/lib/provas": { listaProvas: () => consulta("provas", []).then((r) => r.data) },
    "@/lib/sessao": { exigeSessao: async () => ({ supabase, user: { id: "u" } }) },
    "@/components/provas/provas.module.css": {},
  });
  await pagina();
  assert.deepEqual(linha.slice(0, 2).sort(), ["começa:provas", "começa:simulados"], `Simulados em sequência: ${linha.join(" → ")}`);
}
{
  const { linha, consulta } = registrador();
  const supabase = { from: (t) => consulta(t, []) };
  const { default: pagina } = carregar("app/app/redacao/page.tsx", {
    "next/link": { default: "a" },
    "@/lib/sessao": { exigeSessao: async () => ({ supabase, user: { id: "u" } }) },
    "@/components/redacao/redacao.module.css": {},
  });
  await pagina();
  assert.deepEqual(linha.slice(0, 2).sort(), ["começa:redacoes", "começa:temas_redacao"], `Redação em sequência: ${linha.join(" → ")}`);
}
console.log("ok: Simulados e Redação disparam as duas consultas juntas");
