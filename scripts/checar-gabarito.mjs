// Regressão local, sem credenciais nem alterações no banco real.
//
// Prova duas regras nas rotas que tocam o gabarito.
//
// 1. O gabarito só sai no momento permitido. Responder — no estudo por matéria
//    e na prova — grava a marcação e confirma, sem ler `correta` nem
//    `explicacao`, sem a service role, e com `acertou: false` ("ainda não
//    corrigida"). A correção acontece em /api/simulado/finalizar (estudo, só
//    com todas respondidas) e em /api/prova/finalizar (entrega). Sessão de
//    estudo encerrada no meio nunca é corrigida, e a explicação não abre para
//    ela.
//
// 2. A regra do cliente admin (lib/supabase/admin.ts). Quem é a pessoa, de
//    quem é a tentativa e o que ela respondeu se decide ANTES, pelo cliente de
//    sessão. `correta` e `explicacao` só são lidas pelo cliente admin, e nunca
//    antes dessas checagens.
//
// O banco falso anota cada operação como "cliente:operação:tabela", e cada
// leitura como "leu:cliente:tabela:colunas". É esse registro que as
// asserções leem.
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
      let operacao = "select", valor = null, unico = false, colunas = "*";
      const executa = () => {
        registro.push(`${nome}:${operacao}:${tabela}`);
        if (operacao === "select") registro.push(`leu:${nome}:${tabela}:${colunas}`);
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
        select(c) { if (typeof c === "string") colunas = c; return consulta; },
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
/* O que as telas de resolução leem das questões: sem gabarito nem explicação. */
const publicas = () => acervo().questoes.map(({ correta, explicacao, ...resto }) => resto);

/* A regra de "tem resultado" do histórico e da prova, carregada de verdade. */
const situacao = carregar("lib/situacao-sessao.ts", {});

/* Monta uma rota com os dois clientes. `admin: null` é a chave ausente. A
   lógica de correção do estudo (lib/resultado-sessao.ts) é carregada de
   verdade, com os mesmos dois clientes falsos. */
function cenario(rota, { sessao = {}, admin = acervo(), falhasSessao = {}, falhasAdmin = {}, extras = {} } = {}) {
  const registro = [];
  const bancoSessao = banco("sessao", sessao, registro, falhasSessao);
  const bancoAdmin = admin === null ? null : banco("admin", admin, registro, falhasAdmin);
  const moduloAdmin = {
    criaClienteAdmin: () => bancoAdmin,
    leitorDoAcervo: (s) => bancoAdmin ?? s,
  };
  const resultadoSessao = carregar("lib/resultado-sessao.ts", {
    "server-only": {},
    "@/lib/supabase/admin": moduloAdmin,
  });
  const { POST } = carregar(rota, {
    "next/server": { NextResponse },
    "@/lib/sessao": { exigeSessaoApi: async () => ({ ok: true, supabase: bancoSessao, user }) },
    "@/lib/supabase/admin": moduloAdmin,
    "@/lib/gamificacao": { registrarAtividade: async () => null },
    "@/lib/resultado-sessao": resultadoSessao,
    "@/lib/situacao-sessao": situacao,
    ...extras,
  });
  return { POST, registro, sessao };
}

const tocouAdmin = (r) => r.some((e) => e.startsWith("admin:"));
const leuGabarito = (r) => r.some((e) => /^leu:\w+:questoes:.*\b(correta|explicacao)\b/.test(e));
const sessaoLeuGabarito = (r) => r.some((e) => /^leu:sessao:questoes:.*\b(correta|explicacao)\b/.test(e));
const gravouEm = (r, tabela) => r.some((e) => /^sessao:(insert|upsert|update|delete):/.test(e) && e.endsWith(`:${tabela}`));
const adminDepoisDe = (r, entrada) => {
  const i = r.indexOf(entrada), j = r.findIndex((e) => e.startsWith("admin:"));
  return i >= 0 && j > i;
};
const semGabarito = (dados) =>
  ["correta", "acertou", "explicacao", "acertos", "erros", "itens", "percentual"].every((k) => !(k in dados));

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
  assert.equal(leuGabarito(c.registro), false);

  c = cenario(rota, { sessao: { simulados: [treino({ status: "concluido" })] } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 409);

  c = cenario(rota, { sessao: { simulados: [treino()] } });
  r = await c.POST(pedido({ ...corpo, questaoId: "fora" }));
  assert.equal(r.status, 400);

  c = cenario(rota, { sessao: { simulados: [treino({ prova_id: "enem-2023" })] } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 400, "questão de prova não se responde pela rota de estudo");

  // Resposta registrada: só a confirmação, e nada de gabarito lido.
  c = cenario(rota, { sessao: { simulados: [treino()], respostas: [], questoes: publicas() } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 200);
  assert.equal(r.data.registrada, true);
  assert.equal(r.data.respondidas, 1);
  assert.equal(r.data.fim, false);
  assert.ok(semGabarito(r.data), "responder não devolve gabarito, acerto nem placar");
  assert.equal(c.sessao.respostas[0].acertou, false, "o acerto não é conferido na resposta");
  assert.equal(c.sessao.simulados[0].acertos + c.sessao.simulados[0].erros, 0, "o placar não anda");
  assert.equal(tocouAdmin(c.registro), false, "responder nem usa a service role");
  assert.equal(leuGabarito(c.registro), false, "ninguém lê correta nem explicacao");

  // Sem a chave, responder funciona igual: não depende do gabarito.
  c = cenario(rota, { sessao: { simulados: [treino()], respostas: [], questoes: publicas() }, admin: null });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 200);

  // A última questão não encerra a sessão: quem encerra é a finalização.
  c = cenario(rota, {
    sessao: {
      simulados: [treino()],
      respostas: [{ simulado_id: "s1", questao_id: "q1", alternativa: 2, acertou: false }],
      questoes: publicas(),
    },
  });
  r = await c.POST(pedido({ ...corpo, questaoId: "q2", alternativa: 1 }));
  assert.equal(r.status, 200);
  assert.equal(r.data.fim, true);
  assert.ok(semGabarito(r.data));
  assert.equal(c.sessao.simulados[0].status, "em_andamento", "responder a última não finaliza");
}
console.log("ok: simulado/responder registra e confirma, sem ler gabarito nem mexer no placar");

/* ------------------------------ simulado/finalizar ------------------------------ */
{
  const rota = "app/api/simulado/finalizar/route.ts";
  const treino = (extra = {}) => ({
    id: "s1", usuario_id: "aluno", questao_ids: ["q1", "q2"], indice_atual: 1,
    acertos: 0, erros: 0, status: "em_andamento", prova_id: null, ...extra,
  });
  const umaResposta = () => [{ simulado_id: "s1", questao_id: "q1", alternativa: 2, acertou: false }];
  const duasRespostas = () => [
    { simulado_id: "s1", questao_id: "q1", alternativa: 2, acertou: false },
    { simulado_id: "s1", questao_id: "q2", alternativa: 3, acertou: false },
  ];

  // Incompleta: 409 com quantas faltam, e nada de correção.
  let c = cenario(rota, { sessao: { simulados: [treino()], respostas: umaResposta() } });
  let r = await c.POST(pedido({ simuladoId: "s1" }));
  assert.equal(r.status, 409);
  assert.equal(r.data.faltam, 1);
  assert.ok(semGabarito(r.data));
  assert.equal(tocouAdmin(c.registro), false, "sem todas as respostas, o gabarito nem é consultado");
  assert.equal(c.sessao.simulados[0].status, "em_andamento");

  // Encerrada no meio (abandonada): nunca é corrigida.
  c = cenario(rota, { sessao: { simulados: [treino({ status: "concluido" })], respostas: umaResposta() } });
  r = await c.POST(pedido({ simuladoId: "s1" }));
  assert.equal(r.status, 409);
  assert.ok(semGabarito(r.data));
  assert.equal(tocouAdmin(c.registro), false);

  // Completa, sem a chave: não finaliza e não fecha.
  c = cenario(rota, { sessao: { simulados: [treino()], respostas: duasRespostas() }, admin: null });
  r = await c.POST(pedido({ simuladoId: "s1" }));
  assert.equal(r.status, 503);
  assert.equal(c.sessao.simulados[0].status, "em_andamento");

  // Completa, mas não conseguiu fechar: não entrega o gabarito.
  c = cenario(rota, {
    sessao: { simulados: [treino()], respostas: duasRespostas() },
    falhasSessao: { "update:simulados": true },
  });
  r = await c.POST(pedido({ simuladoId: "s1" }));
  assert.equal(r.status, 500);
  assert.equal(r.data.itens, undefined, "não fechou, não entrega o gabarito");

  // Completa: corrige, fecha e devolve tudo.
  c = cenario(rota, { sessao: { simulados: [treino()], respostas: duasRespostas() } });
  r = await c.POST(pedido({ simuladoId: "s1" }));
  assert.equal(r.status, 200);
  assert.equal(r.data.total, 2);
  assert.equal(r.data.acertos, 1);
  assert.equal(r.data.erros, 1);
  assert.equal(r.data.percentual, 50);
  assert.deepEqual(r.data.itens.map((i) => [i.questaoId, i.marcada, i.correta, i.acertou]),
    [["q1", 2, 2, true], ["q2", 3, 0, false]]);
  assert.equal(r.data.itens[0].explicacao, "Porque C.");
  assert.equal(c.sessao.simulados[0].status, "concluido");
  assert.equal(c.sessao.simulados[0].acertos, 1);
  assert.equal(c.sessao.simulados[0].erros, 1);
  assert.deepEqual(c.sessao.respostas.map((x) => x.acertou), [true, false], "acertou gravado na finalização");
  assert.equal(sessaoLeuGabarito(c.registro), false, "o gabarito só vem pelo admin");
  assert.ok(adminDepoisDe(c.registro, "sessao:select:respostas"), "o gabarito vem depois das respostas");

  // Já finalizada: devolve o mesmo resultado e não recorrige.
  c = cenario(rota, {
    sessao: { simulados: [treino({ status: "concluido", acertos: 1, erros: 1 })], respostas: duasRespostas() },
  });
  r = await c.POST(pedido({ simuladoId: "s1" }));
  assert.equal(r.status, 200);
  assert.equal(gravouEm(c.registro, "simulados"), false, "sessão corrigida não é recorrigida");
  assert.equal(gravouEm(c.registro, "respostas"), false);

  // Prova do ENEM tem finalização própria.
  c = cenario(rota, { sessao: { simulados: [treino({ prova_id: "enem-2023" })], respostas: duasRespostas() } });
  r = await c.POST(pedido({ simuladoId: "s1" }));
  assert.equal(r.status, 400);
  assert.equal(tocouAdmin(c.registro), false);
}
console.log("ok: simulado/finalizar só corrige com tudo respondido, e uma vez");

/* ------------------------------ simulado/encerrar ------------------------------- */
{
  const rota = "app/api/simulado/encerrar/route.ts";
  const treino = (extra = {}) => ({
    id: "s1", usuario_id: "aluno", questao_ids: ["q1", "q2"], indice_atual: 1,
    acertos: 0, erros: 0, status: "em_andamento", prova_id: null, ...extra,
  });

  // No meio: fecha sem corrigir.
  let c = cenario(rota, {
    sessao: { simulados: [treino()], respostas: [{ simulado_id: "s1", questao_id: "q1", alternativa: 2, acertou: false }] },
  });
  let r = await c.POST();
  assert.equal(r.status, 200);
  assert.equal(c.sessao.simulados[0].status, "concluido");
  assert.equal(c.sessao.simulados[0].acertos + c.sessao.simulados[0].erros, 0, "abandonada fica sem nota");
  assert.equal(tocouAdmin(c.registro), false, "abandonar não consulta o gabarito");

  // Com tudo respondido: fecha corrigida, e o resultado fica disponível.
  c = cenario(rota, {
    sessao: {
      simulados: [treino()],
      respostas: [
        { simulado_id: "s1", questao_id: "q1", alternativa: 2, acertou: false },
        { simulado_id: "s1", questao_id: "q2", alternativa: 0, acertou: false },
      ],
    },
  });
  r = await c.POST();
  assert.equal(r.status, 200);
  assert.equal(c.sessao.simulados[0].status, "concluido");
  assert.equal(c.sessao.simulados[0].acertos, 2);

  // Prova aberta não é tocada.
  c = cenario(rota, { sessao: { simulados: [treino({ prova_id: "enem-2023" })] } });
  r = await c.POST();
  assert.equal(c.sessao.simulados[0].status, "em_andamento", "prova do ENEM não fecha por aqui");
}
console.log("ok: simulado/encerrar abandona sem gabarito, e fecha corrigida quem terminou");

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

  // Marcar também não depende mais: sem a chave, grava igual.
  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [], questoes: publicas() }, admin: null });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 200);

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [], questoes: publicas() } });
  r = await c.POST(pedido(corpo));
  assert.equal(r.status, 200);
  assert.equal(c.sessao.respostas[0].acertou, false, "a marcação da prova não é corrigida na hora");
  assert.ok(semGabarito(r.data), "a prova não devolve gabarito na marcação");
  assert.equal(tocouAdmin(c.registro), false);
  assert.equal(leuGabarito(c.registro), false);
}
console.log("ok: prova/responder grava a marcação sem ler nem gravar o acerto");

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

  // Sem conseguir ler as alternativas, não grava e não trava.
  c = cenario(rota, {
    sessao: { simulados: [prova()], respostas: [], questoes: publicas() },
    falhasSessao: { "select:questoes": true },
  });
  r = await c.POST(pedido({ simuladoId: "p1", alternativa: 2 }));
  assert.equal(r.status, 500);
  assert.equal(gravouEm(c.registro, "respostas"), false);
  assert.equal(c.sessao.simulados[0].indice_atual, 0, "sem gravar, a questão não trava");

  c = cenario(rota, { sessao: { simulados: [prova()], respostas: [], questoes: publicas() } });
  r = await c.POST(pedido({ simuladoId: "p1", alternativa: 2 }));
  assert.equal(r.status, 200);
  assert.equal(c.sessao.respostas[0].acertou, false);
  assert.equal(c.sessao.simulados[0].indice_atual, 1);
  assert.ok(semGabarito(r.data));
  assert.equal(tocouAdmin(c.registro), false);
  assert.equal(leuGabarito(c.registro), false);
}
console.log("ok: prova/avancar trava a questão sem ler o gabarito");

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
  assert.equal(sessaoLeuGabarito(c.registro), false);
  assert.ok(adminDepoisDe(c.registro, "sessao:select:simulados"));

  /* Já encerrada: reabrir a correção não escreve nada, e só existe para quem
     tem resultado. Entregue tem nota; vencida fechou depois de `expira_em`.
     Encerrada antes do tempo e sem nota não foi entregue: sem gabarito. */
  const vence = "2026-09-28T15:00:00.000Z";
  const encerrada = (extra) => ({ ...prova(), status: "concluido", acertos: 0, erros: 0, expira_em: vence, ...extra });
  for (const [nome, extra, abre] of [
    ["entregue", { acertos: 1, erros: 1, finalizado_em: "2026-09-28T12:00:00.000Z" }, true],
    ["vencida", { finalizado_em: "2026-09-28T15:00:05.000Z" }, true],
    ["largada antes do tempo", { finalizado_em: "2026-09-28T11:00:00.000Z" }, false],
    ["sem data de encerramento", { finalizado_em: null }, false],
  ]) {
    c = cenario(rota, { sessao: { simulados: [encerrada(extra)], respostas: marcacoes() } });
    r = await c.POST(pedido({ simuladoId: "p1" }));
    assert.equal(gravouEm(c.registro, "simulados"), false, `${nome}: reabrir não escreve`);
    if (abre) {
      assert.equal(r.status, 200, nome);
      assert.equal(r.data.correcao[0].correta, 2, nome);
    } else {
      assert.equal(r.status, 409, nome);
      assert.equal(r.data.semResultado, true, nome);
      assert.equal(r.data.correcao, undefined, `${nome}: sem gabarito`);
      assert.equal(tocouAdmin(c.registro), false, `${nome}: nem chega a ler o gabarito`);
    }
  }
}
console.log("ok: prova/finalizar só entrega a correção com a prova fechada e as leituras inteiras; largada não abre");

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
  /* A linha de resposta como o embed do PostgREST devolve: o filtro lê a
     chave achatada, o código lê o objeto `simulados`. */
  const resposta = (simulado, status, extra) => ({
    simulado_id: simulado, questao_id: "q1", "simulados.status": status,
    simulados: { status, ...extra },
  });
  const prova = (status, extra = { acertos: 1, erros: 1 }) => [
    resposta("p1", status, { prova_id: "enem-2023", questao_ids: ["q1", "q2"], ...extra }),
  ];
  const largada = { acertos: 0, erros: 0, expira_em: "2026-09-28T15:00:00.000Z", finalizado_em: "2026-09-28T11:00:00.000Z" };
  const vencida = { ...largada, finalizado_em: "2026-09-28T15:00:05.000Z" };
  const estudo = (respondidas) => [
    resposta("s1", "concluido", { prova_id: null, questao_ids: ["q1", "q2"] }),
    ...(respondidas === 2
      ? [{ simulado_id: "s1", questao_id: "q2", "simulados.status": "concluido", simulados: { status: "concluido", prova_id: null, questao_ids: ["q1", "q2"] } }]
      : []),
  ];

  // q1 JÁ tem explicação salva. Antes, ela saía aqui sem checagem nenhuma.
  let c = cenario(rota, { sessao: { respostas: prova("em_andamento") }, extras });
  let r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 403, "no meio da prova, nem a explicação já salva sai");
  assert.equal(tocouAdmin(c.registro), false);

  // Sessão de estudo encerrada no meio: abandonar não abre a explicação.
  c = cenario(rota, { sessao: { respostas: estudo(1) }, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 403, "sessão abandonada não abre a explicação");
  assert.equal(tocouAdmin(c.registro), false);

  // Sessão de estudo finalizada, com tudo respondido: abre.
  c = cenario(rota, { sessao: { respostas: estudo(2) }, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 200);
  assert.equal(r.data.explicacao, "Porque C.");

  // Prova encerrada antes do tempo e sem entrega: não abre.
  c = cenario(rota, { sessao: { respostas: prova("concluido", largada) }, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 403, "prova largada não abre a explicação");
  assert.equal(tocouAdmin(c.registro), false);

  // Com o tempo esgotado, abre como a entregue.
  c = cenario(rota, { sessao: { respostas: prova("concluido", vencida) }, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 200, "prova vencida abre a explicação");

  c = cenario(rota, { sessao: { respostas: prova("concluido") }, admin: null, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 503);

  c = cenario(rota, { sessao: { respostas: prova("concluido") }, extras });
  r = await c.POST(pedido({ questaoId: "q1" }));
  assert.equal(r.status, 200);
  assert.equal(r.data.doBanco, true);
  assert.equal(r.data.explicacao, "Porque C.");
  assert.equal(geradas, 0);
  assert.equal(sessaoLeuGabarito(c.registro), false);
  assert.ok(adminDepoisDe(c.registro, "sessao:select:respostas"));
}
console.log("ok: questoes/explicar só abre depois do resultado — prova entregue ou sessão finalizada");

/* -------------------------------- /api/simulado --------------------------------- */
{
  let c = cenario("app/api/simulado/route.ts", { sessao: { simulados: [] } });
  let r = await c.POST(pedido({ materia: "matematica", temas: [], quantidade: 5 }));
  assert.equal(r.status, 200);
  assert.equal(r.data.disponiveis, 1, "o recorte `explicacao <> ''` é lido pelo acervo");
  assert.equal(sessaoLeuGabarito(c.registro), false);
  assert.ok(gravouEm(c.registro, "simulados"), "a sessão nova é gravada pelo cliente de sessão");

  // Abrir uma sessão nova encerra a anterior pela mesma regra: no meio, sem nota.
  c = cenario("app/api/simulado/route.ts", {
    sessao: {
      simulados: [{ id: "s0", usuario_id: "aluno", questao_ids: ["q1", "q2"], status: "em_andamento",
        prova_id: null, acertos: 0, erros: 0, indice_atual: 1 }],
      respostas: [{ simulado_id: "s0", questao_id: "q1", alternativa: 2, acertou: false }],
    },
  });
  r = await c.POST(pedido({ materia: "matematica", temas: [], quantidade: 5 }));
  assert.equal(r.status, 200);
  const anterior = c.sessao.simulados.find((s) => s.id === "s0");
  assert.equal(anterior.status, "concluido");
  assert.equal(anterior.acertos + anterior.erros, 0, "a anterior incompleta fecha sem correção");
}
console.log("ok: o sorteio lê o acervo pelo leitor admin, e a sessão anterior fecha sem gabarito");

/* ------------------------------ situação no histórico ----------------------------- */
{
  const { situacaoDaSessao, provaAbreGabarito } = situacao;
  const vence = "2026-09-28T15:00:00.000Z";
  const base = { questao_ids: ["q1", "q2"], acertos: 0, erros: 0 };
  const casos = [
    [{ ...base, status: "em_andamento", prova_id: null, acertos: 1 }, "Em andamento", false],
    [{ ...base, status: "concluido", prova_id: null, acertos: 1, erros: 1 }, "Concluído", true],
    [{ ...base, status: "concluido", prova_id: null, acertos: 1 }, "Encerrado antes do fim", false],
    [{ ...base, status: "em_andamento", prova_id: "enem-2023", expira_em: vence }, "Em andamento", false],
    [{ ...base, status: "concluido", prova_id: "enem-2023", acertos: 1, expira_em: vence, finalizado_em: "2026-09-28T12:00:00Z" }, "Entregue", true],
    [{ ...base, status: "concluido", prova_id: "enem-2023", expira_em: vence, finalizado_em: "2026-09-28T15:00:01Z" }, "Entregue", true],
    [{ ...base, status: "concluido", prova_id: "enem-2023", expira_em: vence, finalizado_em: "2026-09-28T11:00:00Z" }, "Encerrada sem entrega", false],
    [{ ...base, status: "concluido", prova_id: "enem-2023", expira_em: null, finalizado_em: null }, "Encerrada sem entrega", false],
  ];
  for (const [s, rotulo, placar] of casos) {
    const v = situacaoDaSessao(s);
    assert.equal(v.rotulo, rotulo, JSON.stringify(s));
    assert.equal(v.temPlacar, placar, JSON.stringify(s));
  }
  assert.equal(provaAbreGabarito({ status: "em_andamento", acertos: 5, erros: 5 }), false, "em andamento nunca abre");
}
console.log("ok: o histórico só mostra placar onde há resultado — prova largada fica sem nota");
