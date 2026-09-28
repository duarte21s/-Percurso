// Regressão local, sem credenciais nem alterações no banco real.
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
    exports, URLSearchParams,
    require: (nome) => dependencias[nome] ?? require(nome),
  });
  return exports;
}

function banco(tabelas, falhas = {}) {
  const gravacoes = [];
  const leituras = [];
  return {
    gravacoes,
    leituras,
    from(tabela) {
      let filtros = [], alteracao, insercao, inicio = 0, fim = Infinity;
      const consulta = {
        select(colunas = "*") { leituras.push(`${tabela}:${colunas}`); return this; },
        eq(campo, valor) { filtros.push((r) => r[campo] === valor); return this; },
        is(campo, valor) { return this.eq(campo, valor); },
        not(campo, operador, valor) {
          if (operador === "is" && valor === null) {
            filtros.push((r) => r[campo] !== null && r[campo] !== undefined);
          }
          return this;
        },
        neq(campo, valor) { filtros.push((r) => r[campo] !== valor); return this; },
        in(campo, valores) { filtros.push((r) => valores.includes(r[campo])); return this; },
        order() { return this; },
        limit() { return this; },
        range(de, ate) { inicio = de; fim = ate; return this; },
        update(valor) { alteracao = valor; return this; },
        insert(valor) { insercao = valor; return this; },
        resultado(unico = false) {
          if (falhas[tabela]) return { data: null, error: { message: "Falha simulada" } };
          const linhas = (tabelas[tabela] ?? [])
            .filter((r) => filtros.every((f) => f(r)))
            .slice(inicio, fim + 1);
          if (alteracao) {
            gravacoes.push(tabela);
            linhas.forEach((r) => Object.assign(r, alteracao));
          }
          if (insercao) {
            gravacoes.push(tabela);
            return { data: { id: "nova", ...insercao } };
          }
          return { data: unico ? linhas[0] ?? null : linhas, count: linhas.length };
        },
        maybeSingle() { return Promise.resolve(this.resultado(true)); },
        single() { return this.maybeSingle(); },
        then(resolver, rejeitar) { return Promise.resolve(this.resultado()).then(resolver, rejeitar); },
      };
      return consulta;
    },
  };
}

const estudo = () => ({
  id: "anterior", usuario_id: "aluno", status: "em_andamento", prova_id: null,
  materia_filtro: "matematica", tema_filtro: "Frações", questao_ids: ["q1"],
});
const questao = (id, materia_id, tema, prova_id = null) => ({
  id, materia_id, tema, prova_id, explicacao: "Comentário",
});
const user = { id: "aluno" };
function elementos(no) {
  if (!no || typeof no !== "object") return [];
  if (Array.isArray(no)) return no.flatMap(elementos);
  return [no, ...elementos(no.props?.children)];
}
function textos(no) {
  if (typeof no === "string" || typeof no === "number") return [String(no)];
  if (!no || typeof no !== "object") return [];
  if (Array.isArray(no)) return no.flatMap(textos);
  return textos(no.props?.children);
}

/* A correção de verdade, com o cliente admin trocado por um banco falso.
   `null` é o ambiente sem service role: quem chegar a pedir o gabarito
   recebe 503 em vez de ler. */
const resultadoReal = (admin = null) =>
  carregar("lib/resultado-sessao.ts", {
    "server-only": {},
    "@/lib/supabase/admin": { criaClienteAdmin: () => admin },
  });
const dependenciasDaPagina = (supabase, admin = null) => ({
  "next/link": { default: "link" },
  "@/components/estudo/Sessao": { Sessao: "sessao" },
  "@/components/estudo/ResultadoSessao": { ResultadoSessao: "resultado" },
  "@/components/estudo/EscolherConteudo": { EscolherConteudo: "escolher" },
  "@/lib/sessao": { exigeSessao: async () => ({ supabase, user }) },
  "@/lib/temas": { contagensPorTema: async () => ({}) },
  "@/lib/supabase/admin": { leitorDoAcervo: (s) => s },
  "@/lib/resultado-sessao": resultadoReal(admin),
  "@/lib/conteudo/materias": { MATERIAS_POR_ID: new Map(), TODAS_AS_MATERIAS: [] },
});

for (const parametros of [{}, { materia: "fisica" }, { sessao: "anterior" }, { sessao: "outra" }]) {
  const supabase = banco({ simulados: [estudo()], questoes: [{ id: "q1" }] });
  const { default: pagina } = carregar("app/app/questoes/page.tsx", dependenciasDaPagina(supabase));
  const arvore = elementos(await pagina({ searchParams: Promise.resolve(parametros) }));
  const retomar = parametros.sessao === "anterior";
  assert.equal(arvore.some((n) => n.type === "sessao"), retomar);
  assert.equal(arvore.some((n) => n.type === "escolher"), !retomar);
  assert.equal(arvore.some((n) => n.type === "resultado"), false);
  if (parametros.materia) {
    assert.equal(arvore.find((n) => n.type === "escolher").props.materiaInicial, "fisica");
  }
  assert.equal(supabase.gravacoes.length, 0, "Navegar não encerra o estudo");
  assert.ok(
    supabase.leituras.every((l) => !l.startsWith("questoes:") || !/correta|explicacao/.test(l)),
    `a tela de resolução não lê o gabarito: ${supabase.leituras.join(" | ")}`
  );
}
console.log("ok: entrada abre conteúdos, matéria é preservada e retomada exige o link da sessão");

/* Sessão já encerrada, aberta pelo link do histórico. Finalizada mostra o
   resultado completo; largada no meio mostra só o aviso, sem nem ler o
   gabarito. Em nenhum dos dois casos abrir a página corrige ou grava nada. */
for (const cenario of ["finalizada", "abandonada"]) {
  const completa = cenario === "finalizada";
  const encerrada = {
    ...estudo(), id: "encerrada", status: "concluido", questao_ids: ["q1", "q2"],
    acertos: completa ? 1 : 0, erros: completa ? 1 : 0,
  };
  const supabase = banco({
    simulados: [encerrada],
    respostas: [
      { simulado_id: "encerrada", questao_id: "q1", alternativa: 0 },
      ...(completa ? [{ simulado_id: "encerrada", questao_id: "q2", alternativa: 3 }] : []),
    ],
  });
  const admin = banco({
    questoes: [
      { id: "q1", fonte: "Autoral", enunciado: "Um", opcoes: ["a", "b", "c", "d"], correta: 0, explicacao: "Porque sim." },
      { id: "q2", fonte: "Autoral", enunciado: "Dois", opcoes: ["a", "b", "c", "d"], correta: 1, explicacao: "Porque não." },
    ],
  });
  const { default: pagina } = carregar("app/app/questoes/page.tsx", dependenciasDaPagina(supabase, admin));
  const arvore = elementos(await pagina({ searchParams: Promise.resolve({ sessao: "encerrada" }) }));
  const resultado = arvore.find((n) => n.type === "resultado");
  assert.equal(arvore.some((n) => n.type === "sessao"), false, "sessão encerrada não reabre");
  if (completa) {
    assert.ok(resultado, "finalizada mostra o resultado");
    const r = resultado.props.resultado;
    assert.deepEqual([r.acertos, r.erros, r.total, r.percentual], [1, 1, 2, 50]);
    assert.deepEqual(
      Array.from(r.itens, (i) => [i.numero, i.marcada, i.correta, i.acertou]),
      [[1, 0, 0, true], [2, 3, 1, false]]
    );
    assert.equal(r.itens[1].explicacao, "Porque não.");
  } else {
    assert.equal(resultado, undefined, "abandonada não mostra resultado");
    assert.equal(admin.leituras.length, 0, "abandonada não chega a ler o gabarito");
    assert.match(textos(arvore).join(" "), /encerrada antes do fim/i);
  }
  assert.equal(supabase.gravacoes.length + admin.gravacoes.length, 0, "abrir o resultado não grava nada");
}
console.log("ok: sessão finalizada abre o resultado pelo link; largada no meio não mostra gabarito");

for (const cenario of ["sucesso", "vazio", "falha"]) {
  const anterior = estudo();
  const prova = { ...estudo(), id: "enem", prova_id: "enem-2023" };
  const supabase = banco({
    simulados: [anterior, prova],
    questoes: cenario === "vazio" ? [] : [
      questao("q1", "matematica", "Frações"),
      questao("q2", "matematica", "Geometria"),
      questao("q3", "fisica", "Frações"),
      questao("q4", "matematica", "Frações", "enem-2023"),
    ],
  }, cenario === "falha" ? { questoes: true } : {});
  const { POST } = carregar("app/api/simulado/route.ts", {
    "next/server": { NextResponse: { json: (data, opcoes) => ({ data, status: opcoes?.status ?? 200 }) } },
    "@/lib/sessao": { exigeSessaoApi: async () => ({ ok: true, supabase, user }) },
    "@/lib/supabase/admin": { leitorDoAcervo: (s) => s },
    "@/lib/resultado-sessao": resultadoReal(),
  });
  const resposta = await POST({ json: async () => ({ materia: "matematica", temas: ["Frações"], quantidade: 3 }) });
  assert.equal(prova.status, "em_andamento", "Trocar conteúdo preserva a prova do ENEM");
  if (cenario === "sucesso") {
    assert.equal(resposta.status, 200);
    assert.deepEqual(Array.from(resposta.data.simulado.questao_ids), ["q1"]);
    assert.equal(anterior.status, "concluido");
  } else {
    assert.equal(resposta.status, cenario === "vazio" ? 404 : 500);
    assert.equal(anterior.status, "em_andamento");
    assert.equal(supabase.gravacoes.length, 0);
  }
}
console.log("ok: questões respeitam matéria e assunto; falha ou conteúdo vazio preserva estudo anterior");

/* A contagem exibida na tela de Matérias tem que usar O MESMO recorte do
   sorteio. Contando o acervo inteiro, a coluna anunciava 1.182 questões de
   Matemática enquanto a sessão conseguia servir 752: as do ENEM não têm
   comentário e as sem assunto classificado não entram em recorte nenhum.
   Este cenário monta as quatro situações e confere que só a estudável conta. */
{
  const supabase = banco({
    questoes: [
      questao("ok1", "matematica", "Frações"),
      questao("ok2", "matematica", "Geometria"),
      // Do ENEM: tem matéria e assunto, mas o INEP não publica comentário.
      { ...questao("enem", "matematica", "Frações", "enem-2023"), explicacao: "" },
      // Autoral sem comentário escrito ainda.
      { ...questao("sem-comentario", "matematica", "Frações"), explicacao: "" },
      // Classificador reconheceu a matéria e não o assunto.
      questao("sem-tema", "matematica", null),
      // Outra matéria não pode vazar para o balde de Matemática.
      questao("outra", "fisica", "Cinemática"),
    ],
  });
  const { contagensPorMateria } = carregar("lib/temas.ts", {});
  const contagens = await contagensPorMateria(supabase, ["matematica", "fisica"]);

  assert.equal(contagens.matematica, 2, "só as questões que o sorteio alcança contam");
  assert.equal(contagens.fisica, 1);
  assert.equal(supabase.gravacoes.length, 0, "contar não escreve nada");
}
console.log("ok: a contagem por matéria usa o mesmo recorte do sorteio");

/* Uma matéria pode passar de mil questões. O PostgREST entrega no máximo mil
   ids por resposta, portanto esta regressão confirma que a sessão considera a
   segunda página também, em vez de sortear sempre a mesma primeira fatia. */
{
  const supabase = banco({
    simulados: [estudo()],
    questoes: Array.from({ length: 1001 }, (_, i) =>
      questao(`p${i}`, "matematica", "Frações")
    ),
  });
  const { POST } = carregar("app/api/simulado/route.ts", {
    "next/server": { NextResponse: { json: (data, opcoes) => ({ data, status: opcoes?.status ?? 200 }) } },
    "@/lib/sessao": { exigeSessaoApi: async () => ({ ok: true, supabase, user }) },
    "@/lib/supabase/admin": { leitorDoAcervo: (s) => s },
    "@/lib/resultado-sessao": resultadoReal(),
  });
  const resposta = await POST({
    json: async () => ({ materia: "todas", temas: [], quantidade: 45 }),
  });
  assert.equal(resposta.status, 200);
  assert.equal(resposta.data.disponiveis, 1001);
  assert.equal(resposta.data.simulado.questao_ids.length, 45);
}
console.log("ok: o sorteio percorre todos os ids do recorte, inclusive após a primeira página");
