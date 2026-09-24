// Regressão local, sem credenciais nem alterações no banco real.
//
// Prova a regra do cliente admin (lib/supabase/admin.ts) nas rotas que leem o
// gabarito. Quem é a pessoa, de quem é a tentativa e o que ela respondeu se
// decide ANTES, pelo cliente de sessão. `questoes` só é lida pelo cliente
// admin, e nunca antes dessas checagens. Sem a chave, nada é gravado.
//
// O banco falso anota cada operação como "cliente:operação:tabela". É esse
// registro que as asserções leem.
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
    exports, console, URLSearchParams,
    require: (nome) => dependencias[nome] ?? require(nome),
  });
  return exports;
}

function banco(nome, tabelas, registro, falhas = {}) {
  return {
    from(tabela) {
      const filtros = [];
      let operacao = "select", valor = null, unico = false;
      const executa = () => {
        registro.push(`${nome}:${operacao}:${tabela}`);
        if (falhas[`${operacao}:${tabela}`]) {
          return { data: null, count: null, error: { message: "Falha simulada" } };
        }
        const linhas = (tabelas[tabela] ?? []).filter((r) => filtros.every((f) => f(r)));
        if (operacao === "update") {
          for (const r of linhas) Object.assign(r, valor);
          return { data: null, error: null };
        }
        if (operacao === "insert" || operacao === "upsert") {
          (tabelas[tabela] ??= []).push({ ...valor });
          return { data: { id: "nova", ...valor }, error: null };
        }
        if (operacao === "delete") return { data: null, error: null };
        return { data: unico ? linhas[0] ?? null : linhas, count: linhas.length, error: null };
      };
      const consulta = {
        select() { return consulta; },
        eq(c, v) { filtros.push((r) => r[c] === v); return consulta; },
        is(c, v) { return consulta.eq(c, v); },
        neq(c, v) { filtros.push((r) => r[c] !== v); return consulta; },
        not(c, op, v) {
          if (op === "is" && v === null) filtros.push((r) => r[c] !== null && r[c] !== undefined);
          return consulta;
        },
        in(c, vs) { filtros.push((r) => vs.includes(r[c])); return consulta; },
        order() { return consulta; },
        limit() { return consulta; },
        range() { return consulta; },
        insert(v) { operacao = "insert"; valor = v; return consulta; },
        upsert(v) { operacao = "upsert"; valor = v; return consulta; },
        update(v) { operacao = "update"; valor = v; return consulta; },
        delete() { operacao = "delete"; return consulta; },
        maybeSingle() { unico = true; return consulta; },
        single() { unico = true; return consulta; },
        then(ok, erro) { return Promise.resolve(executa()).then(ok, erro); },
      };
      return consulta;
    },
  };
}

const user = { id: "aluno" };
const pedido = (corpo) => ({ json: async () => corpo });
const NextResponse = { json: (data, opcoes) => ({ data, status: opcoes?.status ?? 200 }) };

/* O acervo como só a service role vê: com gabarito e explicação. */
const acervo = () => ({
  questoes: [
    { id: "q1", numero: 1, area: "matematica", correta: 2, explicacao: "Porque C.",
      opcoes: ["a", "b", "c", "d", "e"], enunciado: "Q1", fonte: "ENEM 2023",
      origem: "enem", imagens: [], materia_id: "matematica", tema: "Frações", prova_id: null },
    { id: "q2", numero: 2, area: "matematica", correta: 0, explicacao: "",
      opcoes: ["a", "b", "c", "d", "e"], enunciado: "Q2", fonte: "ENEM 2023",
      origem: "enem", imagens: [], materia_id: "matematica", tema: "Frações", prova_id: null },
  ],
});

/* Monta uma rota com os dois clientes. `admin: null` é a chave ausente. */
function cenario(rota, { sessao = {}, admin = acervo(), falhasSessao = {}, falhasAdmin = {}, extras = {} } = {}) {
  const registro = [];
  const bancoSessao = banco("sessao", sessao, registro, falhasSessao);
  const bancoAdmin = admin === null ? null : banco("admin", admin, registro, falhasAdmin);
  const { POST } = carregar(rota, {
    "next/server": { NextResponse },
    "@/lib/sessao": { exigeSessaoApi: async () => ({ ok: true, supabase: bancoSessao, user }) },
    "@/lib/supabase/admin": {
      criaClienteAdmin: () => bancoAdmin,
      leitorDoAcervo: (s) => bancoAdmin ?? s,
    },
    "@/lib/gamificacao": { registrarAtividade: async () => null },
    ...extras,
  });
  return { POST, registro, sessao };
}

const tocouAdmin = (r) => r.some((e) => e.startsWith("admin:"));
const sessaoLeuQuestoes = (r) => r.includes("sessao:select:questoes");
const gravouEm = (r, tabela) => r.some((e) => /^sessao:(insert|upsert|update|delete):/.test(e) && e.endsWith(`:${tabela}`));
const adminDepoisDe = (r, entrada) => {
  const i = r.indexOf(entrada), j = r.findIndex((e) => e.startsWith("admin:"));
  return i >= 0 && j > i;
};

/* ------------------------------ simulado/responder ------------------------------ */
{
  const rota = "app/api/simulado/responder/route.ts";
  const treino = (extra = {}) => ({
    id: "s1", usuario_id: "aluno", questao_ids: ["q1", "q2"], indice_atual: 0,
    acertos: 0, erros: 0, status: "em_andamento", prova_id: null, ...extra,
  });
  const corpo = { simuladoId: "s1", questaoId: "q1", alternativa: 2 };

  // Simulado que a RLS não mostra (de outra pessoa ou inexistente).
  let c = cenario(rota, { sessao: { simulados: [] } });
  let r = await c.POST(pedido(corpo));
  assert.equal(r.status, 404);
  assert.equal(tocouAdmin(c.registro), false, "sem tentativa válida, o gabarito nem é consultado");

  c = cenario(rota, { sessao: { simulados: [treino({ status: "concluido" })] } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 409);
  assert.equal(tocouAdmin(c.registro), false);

  c = cenario(rota, { sessao: { simulados: [treino()] } });
  r = await c.POST(pedido({ ...corpo, questaoId: "fora" }));
  assert.equal(r.status, 400);
  assert.equal(tocouAdmin(c.registro), false);

  c = cenario(rota, { sessao: { simulados: [treino()] }, admin: null });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 503);
  assert.equal(gravouEm(c.registro, "respostas"), false, "sem chave, a resposta não é gravada");

  c = cenario(rota, { sessao: { simulados: [treino()], respostas: [] } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 200);
  assert.equal(r.data.correta, 2);
  assert.equal(r.data.acertou, true);
  assert.equal(r.data.explicacao, "Porque C.");
  assert.equal(c.sessao.respostas[0].acertou, true);
  assert.equal(sessaoLeuQuestoes(c.registro), false, "a sessão nunca lê questoes");
  assert.ok(adminDepoisDe(c.registro, "sessao:select:simulados"), "o gabarito vem depois da tentativa");
}
console.log("ok: simulado/responder confere a tentativa pela sessão e só então lê o gabarito");

/* ------------------------------- prova/responder -------------------------------- */
{
  const rota = "app/api/prova/responder/route.ts";
  const prova = (extra = {}) => ({
    id: "p1", usuario_id: "aluno", questao_ids: ["q1", "q2"], status: "em_andamento",
    prova_id: "enem-2023", indice_atual: 0, expira_em: null, ...extra,
  });
  const corpo = { simuladoId: "p1", questaoId: "q1", alternativa: 2 };

  let c = cenario(rota, { sessao: { simulados: [prova()] } });
  let r = await c.POST(pedido({ ...corpo, questaoId: "q2" }));
  assert.equal(r.status, 409, "só a questão atual aceita marcação");
  assert.equal(tocouAdmin(c.registro), false);

  c = cenario(rota, { sessao: { simulados: [prova({ expira_em: "2000-01-01T00:00:00Z" })] } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 409);
  assert.equal(r.data.expirada, true);
  assert.equal(tocouAdmin(c.registro), false);

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [] }, admin: null });
  r = await c.POST(pedido({ ...corpo, alternativa: null }));
  assert.equal(r.status, 200, "desmarcar não depende do gabarito");
  assert.equal(r.data.desmarcada, true);

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [] }, admin: null });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 503);
  assert.equal(gravouEm(c.registro, "respostas"), false);

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [] } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 200);
  assert.equal(c.sessao.respostas[0].acertou, true);
  assert.equal("correta" in r.data, false, "a prova não devolve gabarito na marcação");
  assert.equal("acertou" in r.data, false);
  assert.equal(sessaoLeuQuestoes(c.registro), false);
  assert.ok(adminDepoisDe(c.registro, "sessao:select:simulados"));
}
console.log("ok: prova/responder grava acertou sem devolver gabarito, e desmarcar segue sem a chave");

/* -------------------------------- prova/avancar --------------------------------- */
{
  const rota = "app/api/prova/avancar/route.ts";
  const prova = (extra = {}) => ({
    id: "p1", usuario_id: "aluno", questao_ids: ["q1", "q2"], status: "em_andamento",
    prova_id: "enem-2023", indice_atual: 0, expira_em: null, ...extra,
  });

  let c = cenario(rota, { sessao: { simulados: [prova({ status: "concluido" })] } });
  let r = await c.POST(pedido({ simuladoId: "p1", alternativa: 2 }));
  assert.equal(r.status, 409);
  assert.equal(tocouAdmin(c.registro), false);

  c = cenario(rota, { sessao: { simulados: [prova()] }, admin: null });
  r = await c.POST(pedido({ simuladoId: "p1", alternativa: null }));
  assert.equal(r.status, 200, "pular em branco não depende do gabarito");
  assert.equal(c.sessao.simulados[0].indice_atual, 1);

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [] }, admin: null });
  r = await c.POST(pedido({ simuladoId: "p1", alternativa: 2 }));
  assert.equal(r.status, 503);
  assert.equal(gravouEm(c.registro, "respostas"), false);
  assert.equal(c.sessao.simulados[0].indice_atual, 0, "sem gravar, a questão não trava");

  c = cenario(rota, {
    sessao: { simulados: [prova()], respostas: [] },
    falhasAdmin: { "select:questoes": true },
  });
  r = await c.POST(pedido({ simuladoId: "p1", alternativa: 2 }));
  assert.equal(r.status, 500, "falha ao ler o gabarito não vira acertou=false");
  assert.equal(gravouEm(c.registro, "respostas"), false);
  assert.equal(c.sessao.simulados[0].indice_atual, 0);

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [] } });
  r = await c.POST(pedido({ simuladoId: "p1", alternativa: 2 }));
  assert.equal(r.status, 200);
  assert.equal(c.sessao.respostas[0].acertou, true);
  assert.equal(c.sessao.simulados[0].indice_atual, 1);
  assert.equal(sessaoLeuQuestoes(c.registro), false);
}
console.log("ok: prova/avancar só trava a questão depois de gravar com o gabarito lido pelo admin");

/* ------------------------------- prova/finalizar -------------------------------- */
{
  const rota = "app/api/prova/finalizar/route.ts";
  const prova = () => ({
    id: "p1", usuario_id: "aluno", questao_ids: ["q1", "q2"], status: "em_andamento",
    prova_id: "enem-2023",
  });
  const marcacoes = () => [
    { simulado_id: "p1", questao_id: "q1", alternativa: 2 },
    { simulado_id: "p1", questao_id: "q2", alternativa: 3 },
  ];

  let c = cenario(rota, { sessao: { simulados: [] } });
  let r = await c.POST(pedido({ simuladoId: "p1" }));
  assert.equal(r.status, 404);
  assert.equal(tocouAdmin(c.registro), false);

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: marcacoes() }, admin: null });
  r = await c.POST(pedido({ simuladoId: "p1" }));
  assert.equal(r.status, 503);
  assert.equal(c.sessao.simulados[0].status, "em_andamento", "sem chave, a prova não é entregue");

  c = cenario(rota, {
    sessao: { simulados: [prova()], respostas: marcacoes() },
    falhasAdmin: { "select:questoes": true },
  });
  r = await c.POST(pedido({ simuladoId: "p1" }));
  assert.equal(r.status, 500);
  assert.equal(c.sessao.simulados[0].status, "em_andamento", "leitura falha não fecha a prova com zero");

  c = cenario(rota, {
    sessao: { simulados: [prova()], respostas: marcacoes() },
    falhasSessao: { "update:simulados": true },
  });
  r = await c.POST(pedido({ simuladoId: "p1" }));
  assert.equal(r.status, 500);
  assert.equal(r.data.correcao, undefined, "não fechou, não entrega o gabarito");

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: marcacoes() } });
  r = await c.POST(pedido({ simuladoId: "p1" }));
  assert.equal(r.status, 200);
  assert.equal(c.sessao.simulados[0].status, "concluido");
  assert.equal(r.data.acertos, 1);
  assert.equal(r.data.erros, 1);
  assert.equal(r.data.correcao[0].correta, 2);
  assert.equal(sessaoLeuQuestoes(c.registro), false);
  assert.ok(adminDepoisDe(c.registro, "sessao:select:simulados"));
}
console.log("ok: prova/finalizar só entrega a correção com a prova fechada e as leituras inteiras");

/* ------------------------------- questoes/explicar ------------------------------ */
{
  const rota = "app/api/questoes/explicar/route.ts";
  let geradas = 0;
  const extras = {
    "@/lib/anthropic": { ErroGeracao: class ErroGeracao extends Error {} },
    "@/lib/ia": {
      explicaQuestao: async () => { geradas++; return { texto: "Gerada.", provedor: "teste" }; },
      mensagemParaAluno: () => "falhou",
    },
  };
  const entregue = [{ simulado_id: "p1", questao_id: "q1", "simulados.status": "concluido" }];
  const aberta = [{ simulado_id: "p1", questao_id: "q1", "simulados.status": "em_andamento" }];

  // q1 JÁ tem explicação salva. Antes, ela saía aqui sem checagem nenhuma.
  let c = cenario(rota, { sessao: { respostas: aberta }, extras });
  let r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 403, "no meio da prova, nem a explicação já salva sai");
  assert.equal(tocouAdmin(c.registro), false);

  c = cenario(rota, { sessao: { respostas: entregue }, admin: null, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 503);

  c = cenario(rota, { sessao: { respostas: entregue }, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 200);
  assert.equal(r.data.doBanco, true);
  assert.equal(r.data.explicacao, "Porque C.");
  assert.equal(geradas, 0);
  assert.equal(sessaoLeuQuestoes(c.registro), false);
  assert.ok(adminDepoisDe(c.registro, "sessao:select:respostas"));
}
console.log("ok: questoes/explicar confere a prova entregue antes de ler qualquer coisa da questão");

/* -------------------------------- /api/simulado --------------------------------- */
{
  const c = cenario("app/api/simulado/route.ts", { sessao: { simulados: [] } });
  const r = await c.POST(pedido({ materia: "matematica", temas: [], quantidade: 5 }));
  assert.equal(r.status, 200);
  assert.equal(r.data.disponiveis, 1, "o recorte `explicacao <> ''` é lido pelo acervo");
  assert.equal(sessaoLeuQuestoes(c.registro), false);
  assert.ok(gravouEm(c.registro, "simulados"), "a sessão nova é gravada pelo cliente de sessão");
}
console.log("ok: o sorteio lê o acervo pelo leitor admin e grava a sessão pelo cliente normal");
