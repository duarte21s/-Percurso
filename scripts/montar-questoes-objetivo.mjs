/* =========================================================================
   Percurso — monta um conteúdo das matérias por objetivo a partir do rascunho

   Uso:
     node scripts/montar-questoes-objetivo.mjs .rascunho/questoes-objetivo/<arquivo>.mjs
     node scripts/montar-questoes-objetivo.mjs <arquivo> --seco    só valida

   O rascunho (fora de supabase/seed-data/questoes/, que o seed varre inteiro)
   traz as questões com a correta em PRIMEIRO lugar e, nas de cálculo, uma
   conferência em código que chega à resposta por outro caminho — conta exata,
   força bruta, derivada ou integral numérica. Formato:

     export const materia = "calculo";
     export const tema = "Regra da cadeia";          // exatamente como no catálogo
     export const arquivo = "calculo__regra-da-cadeia";   // nome em gerado/
     export const questoes = [
       { d: "media", e: "Enunciado…?", o: [correta, d1, d2, d3, d4], x: "Explicação…",
         v: { n: () => valor, o: [v0, v1, v2, v3, v4] } },          // numérica
       { …, v: { f: (x) => …, fo: [(x) => …, …], x: [0.3, 1.7] } }, // função
       { …, v: { i: () => índiceDaCorreta } },                       // força bruta
     ];

   Passos, na ordem de CONTINUAR-MATERIAS-POR-OBJETIVO.md:
     1. valida (catálogo, 5 alternativas distintas, pergunta concreta,
        explicação >= 320 sem citar posição, correta sem entregar pelo tamanho)
     2. duplicatas: idênticas no acervo inteiro e parecidas dentro da matéria
     3. conferências em código (a questão sem conferência vai para a lista de
        revisão independente do relatório)
     4. grava gerado/<arquivo>.mjs com a correta em primeiro
     5. checar-qualidade.mjs (as cinco regras)   6. rebalancear-gabarito.mjs
     7. relatório em gerado/_relatorios/<arquivo>.json

   Não grava no banco. Semear continua sendo `npm run seed-questoes`, depois da
   revisão.
   ========================================================================= */

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { basename, join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { temaExiste } from "./catalogo-temas.mjs";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const GERADO = join(RAIZ, "supabase/seed-data/questoes/gerado");
const RELATORIOS = join(GERADO, "_relatorios");

const alvo = process.argv[2];
const seco = process.argv.includes("--seco");
if (!alvo) {
  console.error("Informe o rascunho: .rascunho/questoes-objetivo/<arquivo>.mjs");
  process.exit(1);
}

const rascunho = await import(`${pathToFileURL(resolve(alvo)).href}?t=${Date.now()}`);
const { materia, tema, arquivo } = rascunho;
const lista = rascunho.questoes;

const erros = [];
const avisos = [];
const DIFICULDADES = new Set(["facil", "media", "dificil"]);

if (!materia || !tema || !arquivo) erros.push("o rascunho precisa exportar materia, tema e arquivo");
if (!temaExiste(materia, tema)) erros.push(`(matéria, tema) fora do catálogo: ${materia} / ${JSON.stringify(tema)}`);
if (!/^[a-z-]+__[a-z0-9-]+(__[a-z0-9-]+)?$/.test(arquivo ?? "")) erros.push(`nome de arquivo fora do padrão: ${arquivo}`);
if (!Array.isArray(lista) || lista.length === 0) erros.push("`questoes` vazio");

/* ------------------------------------------------------------ regras --- */
const POSICAO =
  /\b(primeir[ao]|segund[ao]|terceir[ao]|quart[ao]|quint[ao]|últim[ao]|penúltim[ao])\s+(alternativa|opção|opcao|distrator|resposta|item)\b|\b(letra|alternativa|opção|item)\s+\(?[A-E]\)?(?![a-zà-ú])|\([A-E]\)/i;
const IMAGEM = /\b(figura|imagem|gr[áa]fico|tabela|esquema|ilustra[çc][ãa]o)\s+(acima|abaixo|a seguir|ao lado)\b|\b(observe|analise)\s+(a|o)\s+(figura|imagem|gr[áa]fico|tabela)\b/i;
const ABSURDOS = /não tem qualquer|não guarda qualquer|exatamente idêntic|sem qualquer (diferença|relação|vínculo)|em nada se relaciona|é totalmente irrelevante/i;
const VAZAMENTO = /outra questão|questão anterior|já discutid|como visto acima|conforme a questão/i;
const BANCA = /\b(cebraspe|cespe|fgv|vunesp|cesgranrio|fcc|esaf|quadrix|idecan|ibfc|aocp|consulplan|ita\b|ime\b|espcex|afa\b|efomm|escola naval|enem|fuvest|unicamp|uerj)\b/i;

/* Símbolos ficam: em lógica e cálculo eles SÃO o conteúdo — sem eles,
   "p ∧ q" e "p ∨ q" viram a mesma coisa. Sai só a pontuação de frase. */
const normaliza = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[.,;:!?“”"'()]+/g, " ").replace(/\s+/g, " ").trim();
const trigramas = (s) => {
  const t = normaliza(s);
  const set = new Set();
  for (let i = 0; i < t.length - 2; i++) set.add(t.slice(i, i + 3));
  return set;
};
const jaccard = (a, b) => {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter || 1);
};

/* Números escritos nas alternativas, no formato brasileiro: "1.250,5",
   "−3", "12,5%", "3/4". Serve para conferir que o texto mostra o valor que a
   conferência calculou. Texto com símbolo (√, π, x, ^…) não é lido. */
function numerosDoTexto(texto) {
  if (/[√π∞^]|\bi\b|\bln\b|\blog\b|[a-z]\s*[²³]/i.test(texto)) return null;
  const achados = [];
  const re = /([−-]?)\s*(\d{1,3}(?:\.\d{3})+(?:,\d+)?|\d+(?:,\d+)?)(?:\s*\/\s*(\d+))?/g;
  for (const m of texto.matchAll(re)) {
    const sinal = m[1] ? -1 : 1;
    const inteiro = Number(m[2].replace(/\./g, "").replace(",", "."));
    achados.push(sinal * (m[3] ? inteiro / Number(m[3]) : inteiro));
  }
  return achados;
}
const perto = (a, b) => Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));

/* --------------------------------------------- enunciados já existentes --- */
const destino = join(GERADO, `${arquivo}.mjs`);
const existentes = [];
for (const nome of readdirSync(GERADO).filter((f) => f.endsWith(".mjs"))) {
  if (nome === `${arquivo}.mjs`) continue;
  const { questoes: qs } = await import(`${pathToFileURL(join(GERADO, nome)).href}?t=${Date.now()}`);
  for (const q of qs ?? []) existentes.push({ arquivo: nome, materia: q.materia, enunciado: q.enunciado });
}
const exatos = new Set(existentes.map((q) => q.enunciado.trim()));
const daMateria = existentes.filter((q) => q.materia === materia).map((q) => ({ ...q, tg: trigramas(q.enunciado) }));

/* ------------------------------------------------------ por questão --- */
const conferidas = [];
const semConferencia = [];
const parecidas = [];
const vistos = [];

(lista ?? []).forEach((q, i) => {
  const onde = `q${i + 1}`;
  if (!DIFICULDADES.has(q.d)) erros.push(`${onde}: dificuldade inválida ${JSON.stringify(q.d)}`);
  if (typeof q.e !== "string" || q.e.trim().length < 40) erros.push(`${onde}: enunciado curto ou ausente`);
  else {
    if (!q.e.trim().endsWith("?")) erros.push(`${onde}: o enunciado não termina numa pergunta`);
    if (IMAGEM.test(q.e)) erros.push(`${onde}: o enunciado manda olhar figura/tabela que não existe`);
    if (VAZAMENTO.test(q.e)) erros.push(`${onde}: o enunciado cita outra questão`);
    if (BANCA.test(q.e)) erros.push(`${onde}: o enunciado cita banca ou prova real`);
    if (exatos.has(q.e.trim())) erros.push(`${onde}: enunciado idêntico a um que já existe no acervo`);
  }
  if (!Array.isArray(q.o) || q.o.length !== 5) erros.push(`${onde}: são necessárias 5 alternativas`);
  else {
    if (new Set(q.o.map((o) => normaliza(String(o)))).size !== 5) erros.push(`${onde}: alternativas repetidas`);
    if (q.o.some((o) => typeof o !== "string" || !o.trim())) erros.push(`${onde}: alternativa vazia`);
    if (q.o.slice(1).some((o) => ABSURDOS.test(o))) erros.push(`${onde}: distrator que se elimina sozinho`);
    const tam = q.o.map((o) => o.length);
    const outros = tam.slice(1).sort((a, b) => b - a);
    if (tam[0] > 40 && tam[0] > outros[0] * 1.6) erros.push(`${onde}: a correta é bem mais longa que as outras (entrega pelo tamanho)`);
  }
  if (typeof q.x !== "string" || q.x.length < 340) erros.push(`${onde}: explicação com ${q.x?.length ?? 0} caracteres (mínimo 340, para sobrar folga sobre os 320)`);
  else if (POSICAO.test(q.x)) erros.push(`${onde}: a explicação cita posição/letra — "${q.x.match(POSICAO)[0]}"`);

  // duplicatas parecidas
  if (typeof q.e === "string") {
    const tg = trigramas(q.e);
    for (const outro of vistos) {
      const s = jaccard(tg, outro.tg);
      if (s >= 0.6) parecidas.push(`${onde} × q${outro.i + 1} (${s.toFixed(2)})`);
    }
    for (const outro of daMateria) {
      const s = jaccard(tg, outro.tg);
      if (s >= 0.6) parecidas.push(`${onde} × ${outro.arquivo} (${s.toFixed(2)})`);
    }
    vistos.push({ i, tg });
  }

  // conferência em código
  const v = q.v;
  if (!v) {
    semConferencia.push(i + 1);
    return;
  }
  try {
    /* Conferência que só devolve a resposta pronta não confere nada. */
    const semCorpo = [v.i, v.n].filter((f) => typeof f === "function").some((f) => /^\(\)=>-?\d+(\.\d+)?$/.test(String(f).replace(/\s/g, "")));
    if (semCorpo) throw new Error("conferência vazia: ela devolve a resposta pronta em vez de calcular");
    if (typeof v.i === "function") {
      const idx = v.i();
      if (idx !== 0) throw new Error(`a força bruta aponta a alternativa de índice ${idx}, não a correta`);
    } else if (typeof v.n === "function") {
      const valor = v.n();
      if (!Number.isFinite(valor)) throw new Error(`a conferência devolveu ${valor}`);
      if (!Array.isArray(v.o) || v.o.length !== 5) throw new Error("v.o precisa dos 5 valores das alternativas");
      if (!perto(valor, v.o[0])) throw new Error(`a conferência calculou ${valor}, e a correta diz ${v.o[0]}`);
      v.o.slice(1).forEach((d, j) => {
        if (perto(valor, d)) throw new Error(`o distrator ${j + 1} também vale ${d}: duas respostas certas`);
      });
      if (!v.livre) {
        q.o.forEach((texto, j) => {
          const nums = numerosDoTexto(texto);
          if (nums && nums.length > 0 && !nums.some((n) => perto(n, v.o[j]))) {
            throw new Error(`o texto da alternativa ${j} ("${texto.slice(0, 40)}") não mostra o valor ${v.o[j]}`);
          }
        });
      }
    } else if (typeof v.f === "function") {
      const pontos = v.x ?? [0.37, 1.13, 2.71];
      if (!Array.isArray(v.fo) || v.fo.length !== 5) throw new Error("v.fo precisa das 5 funções das alternativas");
      for (const x of pontos) {
        const a = v.f(x), b = v.fo[0](x);
        if (!Number.isFinite(a) || Math.abs(a - b) > 1e-4 * Math.max(1, Math.abs(a))) {
          throw new Error(`em x=${x} a referência vale ${a} e a correta vale ${b}`);
        }
      }
      v.fo.slice(1).forEach((g, j) => {
        const difere = pontos.some((x) => Math.abs(v.f(x) - g(x)) > 1e-3 * Math.max(1, Math.abs(v.f(x))));
        if (!difere) throw new Error(`o distrator ${j + 1} coincide com a resposta em todos os pontos`);
      });
    } else throw new Error("v sem n, f ou i");
    conferidas.push(i + 1);
  } catch (e) {
    erros.push(`${onde}: CONFERÊNCIA — ${e.message}`);
  }
});

if (parecidas.length) avisos.push(`enunciados parecidos (trigramas ≥ 0,60): ${parecidas.join(", ")}`);

console.log(`\n${alvo}\n${materia} / ${tema} → gerado/${arquivo}.mjs`);
console.log(`${lista?.length ?? 0} questões · conferidas em código: ${conferidas.length} · sem conferência em código: ${semConferencia.length}`);
const porDif = {};
for (const q of lista ?? []) porDif[q.d] = (porDif[q.d] ?? 0) + 1;
console.log(`dificuldade: ${Object.entries(porDif).map(([k, n]) => `${k} ${n}`).join(" · ")}`);
for (const a of avisos) console.log(`  ! ${a}`);
if (erros.length) {
  console.log(`\n${erros.length} ERRO(S):`);
  for (const e of erros) console.log(`  × ${e}`);
  process.exit(1);
}
if (seco) {
  console.log("\n--seco: nada foi gravado.");
  process.exit(0);
}

/* ------------------------------------------------------------ grava --- */
const hoje = new Date().toISOString().slice(0, 10);
const cabecalho = `/* ${tema} (${lista.length} questões) — ${materia}.

   Autorais, escritas por Claude (Anthropic) em ${hoje} seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: ${conferidas.length} de ${lista.length} recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/${basename(alvo)});
   ${semConferencia.length ? `${semConferencia.length} conceituais aguardam a revisão independente listada no relatório.` : "nenhuma ficou sem conferência em código."}

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/${arquivo}.json. */`;

const linha = (chave, valor) => `    ${chave}: ${JSON.stringify(valor)},`;
const corpo = lista
  .map((q) => {
    const partes = [
      linha("materia", materia),
      linha("tema", tema),
      linha("dificuldade", q.d),
      `    enunciado:\n      ${JSON.stringify(q.e)},`,
      `    opcoes: [\n${q.o.map((o) => `      ${JSON.stringify(o)},`).join("\n")}\n    ],`,
      linha("correta", 0),
      `    explicacao:\n      ${JSON.stringify(q.x)},`,
    ];
    return `  {\n${partes.join("\n")}\n  },`;
  })
  .join("\n");
writeFileSync(destino, `${cabecalho}\n\nexport const questoes = [\n${corpo}\n];\n`, "utf8");

const roda = (script, ...args) =>
  execFileSync(process.execPath, [join(RAIZ, "scripts", script), ...args], { cwd: RAIZ, encoding: "utf8" });

let qualidade;
try {
  qualidade = roda("checar-qualidade.mjs", `${arquivo}.mjs`);
} catch (e) {
  console.log(e.stdout ?? e.message);
  console.log("× checar-qualidade reprovou: corrija o rascunho e rode de novo.");
  process.exit(1);
}
const rebalanceado = roda("rebalancear-gabarito.mjs", destino);
const depois = rebalanceado.match(/depois:\s*([\d / ]+)/)?.[1]?.trim();

mkdirSync(RELATORIOS, { recursive: true });
writeFileSync(
  join(RELATORIOS, `${arquivo}.json`),
  JSON.stringify(
    {
      materia,
      tema,
      arquivo: `${arquivo}.mjs`,
      autoria: "autoral — Claude (Anthropic), sem banca atribuída",
      data: hoje,
      questoes: lista.length,
      dificuldade: porDif,
      conferencia_em_codigo: { total: conferidas.length, questoes: conferidas },
      revisao_independente_pendente: semConferencia,
      parecidas_trigramas_060: parecidas,
      checar_qualidade: "sem problemas",
      gabarito_por_letra: depois,
    },
    null,
    2
  ) + "\n"
);

console.log(`✓ gravado gerado/${arquivo}.mjs · checar-qualidade sem problemas · gabarito A-E ${depois}`);
