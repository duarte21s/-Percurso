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
  return {
    gravacoes,
    from(tabela) {
      let filtros = [], alteracao, insercao;
      const consulta = {
        select() { return this; },
        eq(campo, valor) { filtros.push((r) => r[campo] === valor); return this; },
        is(campo, valor) { return this.eq(campo, valor); },
        neq(campo, valor) { filtros.push((r) => r[campo] !== valor); return this; },
        in(campo, valores) { filtros.push((r) => valores.includes(r[campo])); return this; },
        order() { return this; },
        limit() { return this; },
        update(valor) { alteracao = valor; return this; },
        insert(valor) { insercao = valor; return this; },
        resultado(unico = false) {
          if (falhas[tabela]) return { data: null, error: { message: "Falha simulada" } };
          const linhas = (tabelas[tabela] ?? []).filter((r) => filtros.every((f) => f(r)));
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

for (const parametros of [{}, { materia: "fisica" }, { sessao: "anterior" }, { sessao: "outra" }]) {
  const supabase = banco({ simulados: [estudo()], questoes: [{ id: "q1" }] });
  const { default: pagina } = carregar("app/app/questoes/page.tsx", {
    "next/link": { default: "link" },
    "@/components/estudo/Sessao": { Sessao: "sessao" },
    "@/components/estudo/EscolherConteudo": { EscolherConteudo: "escolher" },
    "@/lib/sessao": { exigeSessao: async () => ({ supabase, user }) },
    "@/lib/temas": { contagensPorTema: async () => ({}) },
    "@/lib/conteudo/materias": { MATERIAS_POR_ID: new Map(), TODAS_AS_MATERIAS: [] },
  });
  const arvore = elementos(await pagina({ searchParams: Promise.resolve(parametros) }));
  const retomar = parametros.sessao === "anterior";
  assert.equal(arvore.some((n) => n.type === "sessao"), retomar);
  assert.equal(arvore.some((n) => n.type === "escolher"), !retomar);
  if (parametros.materia) {
    assert.equal(arvore.find((n) => n.type === "escolher").props.materiaInicial, "fisica");
  }
  assert.equal(supabase.gravacoes.length, 0, "Navegar não encerra o estudo");
}
console.log("ok: entrada abre conteúdos, matéria é preservada e retomada exige o link da sessão");

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
