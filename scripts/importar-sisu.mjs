/* =========================================================================
   Percurso — importação de notas de corte reais do SiSU

   Fonte: github.com/maiakanegae/sisu-data — repositório MIT que coleta, por
   scraping das próprias APIs do SiSU, as notas de corte de ampla concorrência
   por curso e instituição. Cobertura: 2020 a 2025.

   Por que isto existe: os 405 registros de lib/conteudo/faculdades.ts nasceram
   com `notaReferencia` estimada à mão e `notaOriginal: null` em todos — a
   política do arquivo é nunca inventar um número que pareça oficial. Medido
   em 27/08/2026, das 44 siglas do site que usam SiSU, 213 dos 405 registros
   (52,6%) casam com uma nota real de 2025. As outras 192 não casam por dois
   motivos, não um: 153 são de instituições que não usam SiSU (USP, Unicamp,
   ITA, IME, FGV — vestibular próprio ou concurso de admissão), e 39 têm sigla
   certa mas nome de curso que diverge o suficiente para não bater.

   O que este script faz: lê o CSV público, casa contra os registros do site,
   e grava só os que casaram em lib/conteudo/sisu-<ano>.json — um arquivo
   pequeno e auditável, não o CSV inteiro (que tem 4.084 pares e pesa 16 MB).
   `lib/conteudo/faculdades.ts` lê esse JSON e sobrepõe nota real por cima da
   estimativa, SÓ nos registros que casaram; os outros continuam como
   "estimada" — nada muda para eles.

   A nota importada NÃO vira `procedencia: "oficial"`. O README da fonte diz,
   sobre os próprios dados: "não possuem caráter oficial, e devem ser usados
   apenas para consulta, estudo e pesquisa" — foram coletados de APIs não
   documentadas, não publicados como edital. Por isso existe um terceiro valor,
   `"coletada"`, que este script é o único a produzir.

   Uso:
     node scripts/importar-sisu.mjs                 ano mais recente (2025), grava
     node scripts/importar-sisu.mjs 2024             outro ano
     node scripts/importar-sisu.mjs --seco           mostra o relatório, não grava

   Idempotente: reimportar sobrescreve o JSON do ano com dado fresco.
   ========================================================================= */

import { readFileSync, writeFileSync } from "node:fs";

const REPO_BASE = "https://raw.githubusercontent.com/maiakanegae/sisu-data/master";
const FONTE_HUMANA = "https://github.com/maiakanegae/sisu-data";
const ANO_PADRAO = 2025;
const MODALIDADE = "Ampla concorrência";

const argv = process.argv.slice(2);
const seco = argv.includes("--seco");
const ano = Number(argv.find((a) => /^\d{4}$/.test(a))) || ANO_PADRAO;

/* ---------- normalização — precisa ser IDÊNTICA à que faculdades.ts usa no
   overlay, senão uma nota gravada aqui nunca é encontrada lá. Mudou aqui,
   muda os dois lugares. ---------- */
function normalizaSigla(s) {
  return s.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
function normalizaCurso(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/[^A-Z ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function chave(sigla, curso) {
  return `${normalizaSigla(sigla)}|${normalizaCurso(curso)}`;
}

/* ---------- 1. baixa o CSV de notas do ano pedido ---------- */
async function baixaGrades(ano) {
  const url = `${REPO_BASE}/data/${ano}/scraping/grades.csv`;
  console.log(`Baixando ${url} ...`);
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(
      `HTTP ${resp.status} ao buscar o ano ${ano}. Anos disponíveis: 2020–2025.`
    );
  }
  return resp.text();
}

/* O CSV usa `;` como separador e aspas em todo campo. As 11 primeiras colunas
   são fixas (curso, grau, turno, vagas, campus, cidade, UF, instituição
   completa, sigla); depois vêm blocos repetidos de 5 colunas por modalidade
   de concorrência: (nome da modalidade, vagas, nota, ?, data-hora). */
function* linhas(csv) {
  for (const linha of csv.split(/\r?\n/)) {
    if (!linha) continue;
    yield linha.split('";"').map((c) => c.replace(/^"|"$/g, ""));
  }
}

function extraiNotasAmplaConcorrencia(csv) {
  // sigla|curso_normalizado -> { nota, turno, campus, cursoOriginal }
  const mapa = new Map();
  for (const c of linhas(csv)) {
    const curso = c[1];
    const turno = c[3];
    const campus = c[5];
    const sigla = c[9];
    if (!curso || !sigla) continue;

    const iModalidade = c.indexOf(MODALIDADE);
    if (iModalidade < 0) continue;
    const nota = Number(c[iModalidade + 2]);
    if (!Number.isFinite(nota) || nota <= 0) continue;

    const k = chave(sigla, curso);
    const atual = mapa.get(k);
    // Uma sigla pode oferecer o mesmo curso em vários campi/turnos: fica a
    // maior nota, que é a entrada mais concorrida — a referência que a tabela
    // do site usa para ordenar.
    if (!atual || nota > atual.nota) {
      mapa.set(k, { nota, turno, campus, cursoOriginal: curso.trim() });
    }
  }
  return mapa;
}

/* ---------- 2. lê os registros elegíveis de faculdades.ts ----------
   Só interessam os que aceitam "sisu" como via de ingresso — casar um
   registro de vestibular próprio contra nota de SiSU seria comparar coisas
   que a própria tabela já trata como incompatíveis (ver ESCALA). Lido por
   regex, e não por import, pelo mesmo motivo de scripts/catalogo-temas.mjs:
   um .mjs não importa .ts sem transpilar. */
function leRegistrosElegiveis() {
  const fonte = readFileSync(
    new URL("../lib/conteudo/faculdades.ts", import.meta.url),
    "utf8"
  );
  const linhaR =
    /^  r\(\s*"([^"]+)",\s*"[^"]+",\s*"[^"]+",\s*"[^"]+",\s*"([^"]+)",\s*"[^"]+",\s*\[([^\]]+)\]/gm;

  const registros = [];
  for (const m of fonte.matchAll(linhaR)) {
    const [, sigla, curso, viasBrutas] = m;
    const vias = [...viasBrutas.matchAll(/"([a-z-]+)"/g)].map((v) => v[1]);
    if (vias.includes("sisu")) registros.push({ sigla, curso });
  }
  return registros;
}

/* ---------- 3. roda ---------- */
const csv = await baixaGrades(ano);
const notasSisu = extraiNotasAmplaConcorrencia(csv);
console.log(`SiSU ${ano}: ${notasSisu.size} pares (sigla, curso) com nota de ampla concorrência.\n`);

const elegiveis = leRegistrosElegiveis();
console.log(`faculdades.ts: ${elegiveis.length} registros aceitam "sisu" como via.`);

const notasParaGravar = {};
let casou = 0;
for (const reg of elegiveis) {
  const k = chave(reg.sigla, reg.curso);
  const achado = notasSisu.get(k);
  if (achado) {
    casou++;
    notasParaGravar[k] = {
      nota: achado.nota,
      turno: achado.turno,
      campus: achado.campus,
      curso_sisu: achado.cursoOriginal,
    };
  }
}

const pct = ((casou / elegiveis.length) * 100).toFixed(1);
console.log(`Casaram: ${casou}/${elegiveis.length} (${pct}%)\n`);

if (casou === 0) {
  console.error("Nenhum casamento — não grava nada. Confira a normalização.");
  process.exit(1);
}

const saida = {
  ano,
  fonte: FONTE_HUMANA,
  modalidade: MODALIDADE,
  coletado_em: new Date().toISOString(),
  aviso:
    'Dados coletados por scraping de APIs não documentadas do SiSU (ver README da fonte). Não têm caráter oficial: use como referência de estudo, não como edital. A nota varia por edição, turno e campus — aqui fica a maior nota de ampla concorrência entre os campi/turnos oferecidos.',
  notas: notasParaGravar,
};

const caminhoSaida = new URL(`../lib/conteudo/sisu-${ano}.json`, import.meta.url);

if (seco) {
  console.log(`--seco: gravaria ${Object.keys(notasParaGravar).length} notas em`);
  console.log(`  ${caminhoSaida.pathname.replace(/^\/([A-Za-z]:)/, "$1")}`);
  process.exit(0);
}

writeFileSync(caminhoSaida, JSON.stringify(saida, null, 2) + "\n", "utf8");
console.log(`Gravado: lib/conteudo/sisu-${ano}.json (${Object.keys(notasParaGravar).length} notas).`);
console.log(`\nPróximo passo: lib/conteudo/faculdades.ts precisa importar esse ano no`);
console.log(`array ANOS_SISU para o overlay passar a usá-lo.`);
