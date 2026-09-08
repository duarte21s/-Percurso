/* =========================================================================
   Percurso — RASCUNHO de questões por tema, via Gemini

   Isto NÃO grava no banco e NÃO é o caminho oficial. O caminho oficial é
   escrever à mão (ver CONTINUAR-MATERIAS-POR-OBJETIVO.md). Este script existe
   para adiantar os 119 temas ainda vazios das matérias por objetivo, gerando
   um primeiro rascunho que uma pessoa REVISA antes de semear.

   Por que ainda é "rascunho" e não "pronto":
     - a conferência (abaixo) re-resolve às cegas e DESCARTA a questão que não
       bate; ela reduz, não elimina, a chance de gabarito errado — o mesmo
       modelo pode errar igual nas duas pontas. Cruzamento de verdade é
       --conf-claude ou --conf-modelo com um modelo mais forte.
     - `checar-qualidade` pega vício de redação, não gabarito.
     - questão com gabarito errado é pior que questão faltando: ensina errado.
       Por isso a conferência só DESCARTA, nunca reescreve `correta`.

   O que o script faz, para cada tema:
     1. pede N questões ao Gemini com responseSchema (formato exato do .mjs)
     2. descarta as que já falham no contrato do seed (5 alternativas
        distintas, `correta` 0-4, explicação >= 320, sem "veja a figura")
     3. dedup: enunciado idêntico E semelhança semântica alta (Jaccard de
        trigramas) contra as já aceitas no tema
     4. conferência de gabarito: re-resolve cada questão às cegas (alternativas
        embaralhadas, sem ver `correta`/`explicacao`), mapeia a resposta de
        volta e compara. Divergência / "-1" / instabilidade => DESCARTE
     5. escreve supabase/seed-data/questoes/gerado/<materia>__<tema>.mjs
        (+ um relatório em _relatorios/<materia>__<tema>.json)
     6. roda rebalancear-gabarito.mjs  (distribui a correta pelas 5 letras)
     7. roda checar-qualidade.mjs      (as 5 regras de redação)
     8. PARA. Você lê o arquivo, revisa o que a conferência apontou, e só então:
          npm run seed-questoes -- --seco
          npm run seed-questoes

   Uso:
     node scripts/gerar-questoes.mjs --lista
         mostra, por matéria, quantos temas já têm arquivo e quantos faltam

     node scripts/gerar-questoes.mjs <materia> "<tema exato do catálogo>"
         gera um tema (50 questões, em lotes de 10), com dedup e conferência

     node scripts/gerar-questoes.mjs <materia> --todos
         gera todos os temas daquela matéria que ainda não têm arquivo

     node scripts/gerar-questoes.mjs <materia> "<tema>" --conferir
         NÃO gera nada: só re-confere o .mjs já existente e regrava

   Flags:
     --n <N>            questões por tema             (padrão 50)
     --lote <N>         questões por chamada à API    (padrão 10)
     --modelo <id>      sobrescreve GEMINI_MODELO
     --forcar           regrava arquivo que já existe (padrão: pula)

     --sem-conferencia      pula o 2º passe (volta ao comportamento antigo)
     --conferir            só confere o .mjs existente do tema; não gera
     --conf-lote <N>        questões por chamada da conferência  (padrão 25)
     --conf-rechecagens <N> re-resoluções às cegas por questão   (padrão 2)
     --conf-rigor <x>       estrito (padrão) | maioria (>=3 passes, tema difícil)
     --conf-modelo <id>     modelo só da conferência             (padrão: --modelo)
     --conf-claude          confere com Claude se ANTHROPIC_API_KEY existir
     --conf-margem <pct>    gera pct% a mais antes de conferir    (padrão 0)

     --sem-dedup-semantico  só descarta enunciado praticamente idêntico
     --dedup-limiar <F>     similaridade Jaccard p/ rejeitar 0.1..1 (padrão 0.5)
     --dedup-numeros        colapsa dígitos no dedup (molde numérico; opt-in)
     --sem-relatorio-json   não escreve _relatorios/<materia>__<tema>.json

   Precisa de GEMINI_API_KEY em .env.local. (Claude, só com --conf-claude.)
   ========================================================================= */

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
} from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { join } from "node:path";
import { CATALOGO, materiaExiste, temaExiste } from "./catalogo-temas.mjs";

const RAIZ = fileURLToPath(new URL("../", import.meta.url));
const PASTA = join(RAIZ, "supabase", "seed-data", "questoes", "gerado");

/* ---- ambiente (mesmo leitor de .env.local do seed-questoes.mjs) -------- */
function carregaEnv() {
  let bruto;
  try {
    bruto = readFileSync(join(RAIZ, ".env.local"), "utf8");
  } catch {
    return;
  }
  for (const linha of bruto.split("\n")) {
    const corte = linha.indexOf("=");
    if (corte < 1 || linha.trimStart().startsWith("#")) continue;
    const chave = linha.slice(0, corte).trim();
    const valor = linha
      .slice(corte + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (chave && !(chave in process.env)) process.env[chave] = valor;
  }
}
carregaEnv();

/* ---- CLI ------------------------------------------------------------- */
const argv = process.argv.slice(2);
function opcao(nome, padrao) {
  const i = argv.indexOf(nome);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : padrao;
}
const temFlag = (nome) => argv.includes(nome);

const ALVO = Number(opcao("--n", "50"));
const LOTE = Number(opcao("--lote", "10"));
const FORCAR = temFlag("--forcar");
const MODELO =
  opcao("--modelo", null) || process.env.GEMINI_MODELO?.trim() || "gemini-3.6-flash";

/* ---- conferência de gabarito (2º passe: re-resolve às cegas e compara) ---- */
const SEM_CONFERENCIA = temFlag("--sem-conferencia");
const MODO_CONFERIR = temFlag("--conferir");
const CONF_LOTE = Math.max(5, Number(opcao("--conf-lote", "25")));
const CONF_RECHECAGENS = Math.max(1, Number(opcao("--conf-rechecagens", "2")));
const CONF_RIGOR =
  opcao("--conf-rigor", "estrito") === "maioria" ? "maioria" : "estrito";
const CONF_MODELO = opcao("--conf-modelo", null) || MODELO;
const USA_CLAUDE = temFlag("--conf-claude") && Boolean(process.env.ANTHROPIC_API_KEY);
const CONF_MARGEM = SEM_CONFERENCIA
  ? 0
  : Math.max(0, Number(opcao("--conf-margem", "0"))) / 100;

/* ---- dedup semântico dentro do tema (além do enunciado idêntico) --------- */
const SEM_DEDUP_SEMANTICO = temFlag("--sem-dedup-semantico");
const DEDUP_LIMIAR = Math.min(
  1,
  Math.max(0.1, Number(opcao("--dedup-limiar", "0.5")))
);
/* Colapsar dígito em "§" pega molde numérico reaproveitado ("João tem 3
   caixas" → "Maria tem 7 caixas"), mas quebra tema onde o número É o conteúdo
   (sequências, Cálculo, estatística). Por isso é opt-in. */
const DEDUP_COLAPSA_NUMEROS = temFlag("--dedup-numeros");
const SEM_RELATORIO_JSON = temFlag("--sem-relatorio-json");
const DIR_RELATORIO = join(PASTA, "_relatorios");

const posicionais = argv.filter(
  (a, i) =>
    !a.startsWith("--") &&
    ![
      "--n",
      "--lote",
      "--modelo",
      "--conf-lote",
      "--conf-rechecagens",
      "--conf-rigor",
      "--conf-modelo",
      "--conf-margem",
      "--dedup-limiar",
    ].includes(argv[i - 1])
);

/* ---- utilidades --------------------------------------------------------- */
const slug = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const arquivoDoTema = (materia, tema) =>
  join(PASTA, `${materia}__${slug(tema)}.mjs`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const PEDE_FIGURA =
  /observe (o|a) (gráfico|grafico|figura|imagem|tabela|mapa|charge|tirinha)|a (figura|imagem|tabela|charge|tirinha) (abaixo|a seguir|acima)|no gráfico (abaixo|a seguir|acima)|conforme (a|o) (figura|imagem)|de acordo com (a figura|a imagem|o gráfico abaixo)/i;

/* ---- lista de cobertura --------------------------------------------- */
if (temFlag("--lista")) {
  const arquivos = existsSync(PASTA)
    ? readdirSync(PASTA).filter((f) => f.endsWith(".mjs"))
    : [];
  const temFile = (m, t) => arquivos.includes(`${m}__${slug(t)}.mjs`);

  let totFaltam = 0;
  for (const [materia, temas] of Object.entries(CATALOGO)) {
    const lista = [...temas];
    const prontos = lista.filter((t) => temFile(materia, t)).length;
    if (prontos === lista.length) continue;
    totFaltam += lista.length - prontos;
    console.log(`\n${materia}  (${prontos}/${lista.length})`);
    for (const t of lista) {
      if (!temFile(materia, t)) console.log(`  faltando: ${t}`);
    }
  }
  console.log(`\n${totFaltam} tema(s) sem arquivo.\n`);
  process.exit(0);
}

/* ---- schema e prompt do Gemini -------------------------------------- */
const SCHEMA = {
  type: "object",
  properties: {
    questoes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          enunciado: { type: "string" },
          opcoes: { type: "array", items: { type: "string" } },
          correta: { type: "integer" },
          explicacao: { type: "string" },
          dificuldade: { type: "string", enum: ["facil", "media", "dificil"] },
        },
        required: ["enunciado", "opcoes", "correta", "explicacao", "dificuldade"],
      },
    },
  },
  required: ["questoes"],
};

const SISTEMA = [
  "Você escreve questões inéditas de múltipla escolha para uma plataforma de estudos brasileira, no padrão ENEM e de bancas de concurso.",
  "Regras, todas obrigatórias em CADA questão:",
  "1. O enunciado é autossuficiente: traz o contexto e os dados ANTES da pergunta e termina numa PERGUNTA CONCRETA. Nunca termine em fórmula vaga como \"é correto afirmar que:\", \"permite concluir que:\" ou \"é relevante para compreender como:\".",
  "2. Exatamente 5 alternativas, todas plausíveis e distintas entre si. É PROIBIDA a alternativa que se elimina sem ler o enunciado (\"não tem qualquer relação com\", \"são exatamente idênticas\", \"é totalmente irrelevante\").",
  "3. Cada alternativa errada corresponde a UM ERRO QUE ALGUÉM COMETE DE VERDADE: trocar uma fórmula pela outra, inverter um sinal, esquecer um passo, confundir dois conceitos vizinhos.",
  "4. Uma única alternativa correta. O campo `correta` é o índice dela, de 0 a 4.",
  "5. A explicação tem NO MÍNIMO 320 caracteres. Ela resolve a questão e identifica cada distrator PELO ERRO que ele representa, nunca pela posição (\"a segunda alternativa\") — a ordem muda depois.",
  "6. NADA de imagem: é proibido escrever \"observe o gráfico\", \"a figura abaixo\", \"a tabela a seguir\", \"a charge\". Todo dado numérico ou textual vai escrito no próprio enunciado.",
  "7. Em matemática, física e química, escolha números que deem conta fechada. Se o resultado sair quebrado, mude os dados do enunciado — não force a alternativa.",
  "8. Cada questão se sustenta sozinha: não cite \"a questão anterior\" nem \"como visto acima\". O sistema sorteia e embaralha.",
  "Distribua a dificuldade dentro do lote: cerca de 20% facil, 60% media, 20% dificil.",
  "Não repita enunciados nem contextos dentro do lote. Português do Brasil.",
].join("\n");

/* ---- chamada à API (mesma forma de lib/gemini.ts) ------------------- */
/* `modelo` é parâmetro para a conferência poder usar --conf-modelo sem
   mexer no modelo da geração. */
async function chamaGemini(corpo, modelo = MODELO) {
  const chave = process.env.GEMINI_API_KEY;
  if (!chave) {
    console.error("Falta GEMINI_API_KEY em .env.local.");
    process.exit(1);
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`;

  for (let tentativa = 1; tentativa <= 3; tentativa++) {
    let http;
    try {
      http = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": chave },
        body: JSON.stringify(corpo),
        signal: AbortSignal.timeout(180_000),
      });
    } catch (e) {
      if (tentativa === 3) throw e;
      await sleep(3000);
      continue;
    }

    const dados = await http.json().catch(() => ({}));

    if (http.status === 429) {
      if (tentativa === 3) throw new Error(`429: ${dados.error?.message ?? "cota"}`);
      console.log("    429 (cota) — esperando 30s…");
      await sleep(30_000);
      continue;
    }
    if ((http.status === 503 || http.status === 500) && tentativa < 3) {
      console.log(`    ${http.status} — nova tentativa em 5s…`);
      await sleep(5000);
      continue;
    }
    if (!http.ok) {
      throw new Error(`HTTP ${http.status}: ${dados.error?.message ?? ""}`);
    }

    const cand = dados.candidates?.[0];
    if (cand?.finishReason && cand.finishReason !== "STOP") {
      throw new Error(`Gemini interrompeu (${cand.finishReason})`);
    }
    const texto = (cand?.content?.parts ?? [])
      .map((p) => p.text ?? "")
      .join("");
    if (!texto.trim()) throw new Error("resposta vazia");
    return texto;
  }
  throw new Error("esgotou as tentativas");
}

async function geraLote(materiaNome, tema, quantidade, dica) {
  const cru = await chamaGemini({
    systemInstruction: { parts: [{ text: SISTEMA }] },
    contents: [
      {
        role: "user",
        parts: [
          {
            text:
              `Matéria: ${materiaNome}. Tema: "${tema}".\n` +
              `Gere ${quantidade} questões sobre esse tema, seguindo todas as regras.` +
              (dica ? `\n${dica}` : ""),
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 32000,
      responseMimeType: "application/json",
      responseSchema: SCHEMA,
      thinkingConfig: { thinkingLevel: "high" },
    },
  });

  let obj;
  try {
    obj = JSON.parse(cru);
  } catch {
    throw new Error("JSON inválido do Gemini");
  }
  return Array.isArray(obj.questoes) ? obj.questoes : [];
}

/* =====================================================================
   DEDUP SEMÂNTICO dentro do tema

   O match exato de enunciado não segura o problema real: em lote o Gemini
   reescreve a MESMA questão trocando uma palavra ou um número, e isso passa
   batido — o doc já reclama que "as questões saem repetitivas em lote". Aqui
   a comparação é por SIMILARIDADE: shingles de 3 palavras do enunciado
   normalizado, medidos por Jaccard. Troca de sinônimo mantém quase todos os
   trigramas → similaridade alta; questão de fato diferente quase não
   compartilha trigrama. Determinístico, só builtins, sem embeddings.
   O(n²) sobre ~50 itens do tema: custo desprezível.
   ===================================================================== */

/* Operadores lógicos/matemáticos são CONTEÚDO, não pontuação: "p ∧ q" e
   "p ∨ q" têm de continuar diferentes depois de normalizar. Só o que NÃO
   está nesta classe vira espaço. */
const RE_LIXO_DEDUP = /[^\p{L}\p{N}∧∨¬→↔⊕≡=+\-*/²³−±≤≥]+/gu;

function normalizaDedup(txt) {
  let s = String(txt)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // tira acento
    .toLowerCase();
  if (DEDUP_COLAPSA_NUMEROS) s = s.replace(/\d+(?:[.,]\d+)?/g, " § ");
  return s.replace(RE_LIXO_DEDUP, " ").replace(/\s+/g, " ").trim();
}

function tokensDedup(txt) {
  return normalizaDedup(txt).split(" ").filter(Boolean);
}

function shinglesDedup(tokens, n) {
  const s = new Set();
  if (tokens.length < n) {
    if (tokens.length) s.add(tokens.join(" "));
    return s;
  }
  for (let i = 0; i + n <= tokens.length; i++) {
    s.add(tokens.slice(i, i + n).join(" "));
  }
  return s;
}

function jaccardDedup(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  const [menor, maior] = a.size <= b.size ? [a, b] : [b, a];
  let inter = 0;
  for (const x of menor) if (maior.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

/* assinatura pré-computada — não renormaliza a cada par no laço O(n²). */
function assinaturaDedup(q) {
  const toks = tokensDedup(q.enunciado);
  return {
    tri: shinglesDedup(toks, 3), // sinal primário
    tok: new Set(toks), // fallback (enunciado curto) + 2ª rede
    opc: new Set((q.opcoes || []).map((o) => normalizaDedup(o))),
    curto: toks.length < 8,
  };
}

function similaridadeDedup(a, b) {
  const jEnun =
    a.curto || b.curto
      ? jaccardDedup(a.tok, b.tok) // enunciado curto: token a token
      : jaccardDedup(a.tri, b.tri); // trigrama de palavra
  /* 2ª rede: enunciado só parecido, mas o CONJUNTO de alternativas é quase
     o mesmo → é o mesmo item reescrito. */
  const jOpc = jaccardDedup(a.opc, b.opc);
  const rede2 = jEnun >= 0.4 && jOpc >= 0.8 ? jOpc : 0;
  return Math.max(jEnun, rede2);
}

/* { repetida, similaridade } — compara contra TODAS as já aceitas no tema. */
function repetidaSemantica(nova, aceitas, limiar) {
  let max = 0;
  for (const sig of aceitas) {
    const v = similaridadeDedup(nova, sig);
    if (v > max) max = v;
    if (max >= limiar) break; // curto-circuito
  }
  return { repetida: max >= limiar, similaridade: Number(max.toFixed(3)) };
}

/* =====================================================================
   CONFERÊNCIA DE GABARITO — re-resolve às cegas e compara

   Um 2º passe pelo Gemini (ou Claude, com --conf-claude) que recebe SÓ o
   enunciado e as 5 alternativas EMBARALHADAS — nunca `correta` nem
   `explicacao` — e resolve do zero. A letra que ele devolve é remapeada
   para a ordem original e comparada ao gabarito da 1ª geração. Divergência,
   "-1" (o solucionador diz que não há resposta única) ou instabilidade
   entre os passes → a questão é DESCARTADA. O gabarito NUNCA é reescrito:
   questão com gabarito errado ensina errado, é pior que questão faltando.

   O embaralhamento é SEMEADO (fnv1a + mulberry32 sobre `tema|id|passe`), não
   Math.random — assim o descarte é reproduzível e depurável.
   ===================================================================== */

const SCHEMA_CONF = {
  type: "object",
  properties: {
    respostas: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          resposta: { type: "integer" }, // 0..4, ou -1
        },
        required: ["id", "resposta"],
      },
    },
  },
  required: ["respostas"],
};

const SISTEMA_CONF = [
  "Você é um professor revisor de provas. Vou lhe entregar questões de múltipla escolha SEM o gabarito e SEM comentário. Sua tarefa é RESOLVER cada questão do zero e apontar a única alternativa correta.",
  "Como trabalhar:",
  "- Trate cada questão isoladamente. Resolva de fato: faça a conta até o fim, deduza o passo lógico, teste cada alternativa. Não escolha pela posição, pelo tamanho nem pela \"cara\" da alternativa.",
  "- As alternativas foram embaralhadas de propósito. Posição não é pista. Não existe \"questão anterior\" nem \"acima\".",
  "- Índice das alternativas: 0 é a primeira, 1 a segunda, 2 a terceira, 3 a quarta, 4 a quinta.",
  "- Para cada questão devolva um objeto { \"id\": <o número que veio no cabeçalho === QUESTÃO n ===>, \"resposta\": <índice de 0 a 4> } dentro da chave \"respostas\".",
  "- Se, ao resolver, você concluir que NENHUMA alternativa está claramente correta, que DUAS ou mais estão igualmente corretas, ou que falta dado no enunciado para decidir, devolva \"resposta\": -1. É melhor devolver -1 do que forçar uma resposta que o enunciado não sustenta. -1 é último recurso, não é \"fiquei na dúvida\".",
  "- Não escreva explicação. Só o índice importa. Uma entrada por questão, sem pular nenhuma, repetindo o id recebido.",
  "Português do Brasil. Responda apenas o JSON no formato pedido.",
].join("\n");

/* hash FNV-1a de string → uint32. */
function fnv1a(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/* PRNG determinístico semeado por um uint32. */
function mulberry32(semente) {
  let a = semente >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Fisher-Yates sobre [0,1,2,3,4]. ordem[k] = índice ORIGINAL da alternativa
   que passa a aparecer na posição embaralhada k. */
function embaralha5(rnd) {
  const o = [0, 1, 2, 3, 4];
  for (let i = 4; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [o[i], o[j]] = [o[j], o[i]];
  }
  return o;
}

const sementeConf = (tema, id, passe) => fnv1a(`${tema}|${id}|p${passe}`);

/* Texto do "user" da conferência: os blocos === QUESTÃO id === com as 5
   alternativas JÁ embaralhadas. */
function montaTextoConf(materiaNome, tema, itens) {
  const blocos = itens
    .map(
      (it) =>
        `=== QUESTÃO ${it.id} ===\n${it.enunciado}\n` +
        it.opcoesEmb.map((o, k) => `${k}) ${o}`).join("\n")
    )
    .join("\n\n");
  return (
    `Matéria: ${materiaNome}. Tema: "${tema}".\n\n` +
    `Resolva as ${itens.length} questões abaixo. Para cada uma devolva o índice ` +
    `(0 a 4) da alternativa correta, ou -1 se a questão for ambígua, não tiver ` +
    `alternativa correta ou tiver mais de uma. Uma entrada { "id", "resposta" } ` +
    `por questão, na chave "respostas".\n\n${blocos}\n`
  );
}

/* Claude só entra com --conf-claude E ANTHROPIC_API_KEY; senão nunca é
   chamado. Sem responseSchema — fatia o primeiro { … } antes do parse. */
async function chamaClaude(system, userText) {
  const http = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.CONF_CLAUDE_MODELO || "claude-sonnet-4-5",
      max_tokens: 8000,
      temperature: 0,
      system: system + '\nResponda SÓ com JSON: {"respostas":[{"id":..,"resposta":..}]}',
      messages: [{ role: "user", content: userText }],
    }),
    signal: AbortSignal.timeout(180_000),
  });
  if (!http.ok) {
    const d = await http.json().catch(() => ({}));
    throw new Error(`Claude HTTP ${http.status}: ${d.error?.message ?? ""}`);
  }
  const dados = await http.json();
  const texto = (dados.content ?? []).map((p) => p.text ?? "").join("");
  return (texto.match(/\{[\s\S]*\}/) ?? ["{}"])[0];
}

/* Re-resolve um lote (<= CONF_LOTE). Devolve Map id → resposta (inteiro,
   0..4 ou -1). Item ausente do resultado fica de fora do Map. */
async function reResolveLote(materiaNome, tema, lote, passe) {
  const userText = montaTextoConf(materiaNome, tema, lote);
  const temperatura = passe === 1 ? 0 : 0.2;
  let claudeFalhou = false;

  const pedir = async () => {
    if (USA_CLAUDE) {
      try {
        return await chamaClaude(SISTEMA_CONF, userText);
      } catch (e) {
        if (!claudeFalhou) {
          console.log(`    Claude falhou (${e.message}) — caindo pro Gemini`);
          claudeFalhou = true;
        }
      }
    }
    return chamaGemini(
      {
        systemInstruction: { parts: [{ text: SISTEMA_CONF }] },
        contents: [{ role: "user", parts: [{ text: userText }] }],
        generationConfig: {
          temperature: temperatura,
          maxOutputTokens: 8000,
          responseMimeType: "application/json",
          responseSchema: SCHEMA_CONF,
          thinkingConfig: { thinkingLevel: "high" },
        },
      },
      CONF_MODELO
    );
  };

  const parse = (cru) => {
    let obj;
    try {
      obj = JSON.parse(cru);
    } catch {
      return null;
    }
    const m = new Map();
    for (const r of obj?.respostas ?? []) {
      if (Number.isInteger(r?.id) && Number.isInteger(r?.resposta)) {
        m.set(r.id, r.resposta);
      }
    }
    return m;
  };

  let mapa = parse(await pedir());
  if (mapa) return mapa;

  // parse falhou: parte o lote ao meio e tenta cada metade uma vez.
  if (lote.length > 1) {
    const meio = Math.ceil(lote.length / 2);
    const combinado = new Map();
    for (const sub of [lote.slice(0, meio), lote.slice(meio)]) {
      const p = parse(await reResolveLoteBruto(materiaNome, tema, sub, passe));
      if (p) for (const [k, v] of p) combinado.set(k, v);
      await sleep(1500);
    }
    return combinado; // pode vir vazio → os itens sem entrada viram voto null
  }
  return new Map();
}

/* chamada única sem o retry-partindo-ao-meio (usada dentro do retry). */
async function reResolveLoteBruto(materiaNome, tema, lote, passe) {
  const userText = montaTextoConf(materiaNome, tema, lote);
  const temperatura = passe === 1 ? 0 : 0.2;
  if (USA_CLAUDE) {
    try {
      return await chamaClaude(SISTEMA_CONF, userText);
    } catch {
      /* cai pro Gemini */
    }
  }
  return chamaGemini(
    {
      systemInstruction: { parts: [{ text: SISTEMA_CONF }] },
      contents: [{ role: "user", parts: [{ text: userText }] }],
      generationConfig: {
        temperature: temperatura,
        maxOutputTokens: 8000,
        responseMimeType: "application/json",
        responseSchema: SCHEMA_CONF,
        thinkingConfig: { thinkingLevel: "high" },
      },
    },
    CONF_MODELO
  );
}

/* Roda a conferência sobre `boas` (ordem original). Devolve
   { aprovadas, descartes, resumo }. Não toca em `correta`/`explicacao`. */
async function confereGabaritos(materiaNome, tema, boas) {
  if (SEM_CONFERENCIA || boas.length === 0) {
    return { aprovadas: boas, descartes: [], resumo: null };
  }

  const passes =
    CONF_RIGOR === "maioria"
      ? Math.max(3, CONF_RECHECAGENS)
      : Math.max(1, CONF_RECHECAGENS);

  // votos[i] = vetor de tamanho `passes`, cada elemento: índice 0..4, -1 ou null
  const votos = boas.map(() => []);

  for (let passe = 1; passe <= passes; passe++) {
    // monta os itens embaralhados desta passada
    const itens = boas.map((q, i) => {
      const ordem = embaralha5(mulberry32(sementeConf(tema, i, passe)));
      if (
        new Set(ordem).size !== 5 ||
        Math.min(...ordem) !== 0 ||
        Math.max(...ordem) !== 4
      ) {
        throw new Error("embaralhamento inválido");
      }
      return {
        id: i,
        enunciado: q.enunciado,
        opcoesEmb: ordem.map((k) => q.opcoes[k]),
        ordem,
      };
    });

    // resolve em lotes de CONF_LOTE
    const respostaPorId = new Map();
    for (let j = 0; j < itens.length; j += CONF_LOTE) {
      const lote = itens.slice(j, j + CONF_LOTE);
      process.stdout.write(
        `\r  conferência passe ${passe}/${passes}: lote ${
          Math.floor(j / CONF_LOTE) + 1
        }…   `
      );
      let mapa;
      try {
        mapa = await reResolveLote(materiaNome, tema, lote, passe);
      } catch (e) {
        console.log(`\n    lote falhou (${e.message}) — questões viram voto nulo`);
        mapa = new Map();
      }
      for (const [k, v] of mapa) respostaPorId.set(k, v);
      await sleep(1500);
    }
    process.stdout.write("\r" + " ".repeat(60) + "\r");

    // mapeia de volta para o índice ORIGINAL
    for (const it of itens) {
      const r = respostaPorId.get(it.id);
      let voto;
      if (!Number.isInteger(r)) voto = null;
      else if (r === -1) voto = -1;
      else if (r >= 0 && r <= 4) voto = it.ordem[r];
      else voto = null;
      votos[it.id].push(voto);
    }
  }

  // classifica cada questão
  const aprovadas = [];
  const descartes = [];
  const contadores = {
    gabarito_divergente: 0,
    instavel: 0,
    marcou_menos1: 0,
    sem_resposta: 0,
  };

  boas.forEach((q, i) => {
    const v = votos[i];
    const naoNulos = v.filter((x) => x !== null);

    let mantem;
    if (CONF_RIGOR === "maioria") {
      const menos1 = naoNulos.filter((x) => x === -1).length;
      const cont = new Map();
      for (const x of naoNulos) if (x !== -1) cont.set(x, (cont.get(x) ?? 0) + 1);
      let moda = null;
      let modaN = 0;
      let empate = false;
      for (const [k, n] of cont) {
        if (n > modaN) {
          moda = k;
          modaN = n;
          empate = false;
        } else if (n === modaN) empate = true;
      }
      mantem =
        menos1 < 2 &&
        !empate &&
        moda === q.correta &&
        modaN >= Math.ceil(passes / 2);
    } else {
      mantem =
        naoNulos.length === passes && naoNulos.every((x) => x === q.correta);
    }

    if (mantem) {
      aprovadas.push(q);
      return;
    }

    // motivo do descarte — só para o relatório
    let motivo;
    if (naoNulos.length === 0) {
      motivo = "sem resposta (lote falhou)";
      contadores.sem_resposta++;
    } else if (
      naoNulos.every((x) => x === naoNulos[0]) &&
      naoNulos[0] !== -1 &&
      naoNulos[0] !== q.correta
    ) {
      motivo = "gabarito divergente";
      contadores.gabarito_divergente++;
    } else if (naoNulos.includes(-1)) {
      motivo = "conferência marcou -1 (ambígua / sem correta / dado insuficiente)";
      contadores.marcou_menos1++;
    } else {
      motivo = "conferência instável (os passes cegos não convergem)";
      contadores.instavel++;
    }
    /* Guarda o enunciado e as opções na ordem original: a questão sai do
       arquivo, então o relatório é o único lugar onde ela ainda existe para
       um humano decidir se resgata. */
    descartes.push({
      n: i + 1,
      gabarito: q.correta,
      votos: v,
      motivo,
      enunciado: q.enunciado,
      opcoes: q.opcoes,
    });
  });

  // trava de sanidade: 0 aprovadas num lote grande ⇒ quase certo que é bug
  // no mapeamento inverso, não 50 gabaritos errados.
  if (aprovadas.length === 0 && boas.length >= 20) {
    throw new Error(
      `conferência reprovou 100% de ${boas.length} questões — provável bug no ` +
        `mapeamento do embaralhamento, não ${boas.length} gabaritos errados`
    );
  }

  return {
    aprovadas,
    descartes,
    resumo: {
      modelo: USA_CLAUDE ? `claude (${CONF_MODELO} de reserva)` : CONF_MODELO,
      passes,
      rigor: CONF_RIGOR,
      contadores,
    },
  };
}

const LETRA_CONF = ["A", "B", "C", "D", "E"];
const votoStr = (x) => (x === null ? "·" : x === -1 ? "-1" : LETRA_CONF[x]);

/* ---- validação local (contrato do seed + as 5 regras que dá pra ver) - */
function questaoValida(q) {
  if (typeof q?.enunciado !== "string" || q.enunciado.trim().length < 40) return null;
  if (PEDE_FIGURA.test(q.enunciado)) return null;
  if (!Array.isArray(q.opcoes) || q.opcoes.length !== 5) return null;
  const opcoes = q.opcoes.map((o) => String(o).trim());
  if (opcoes.some((o) => o.length === 0)) return null;
  if (new Set(opcoes).size !== 5) return null;
  if (!Number.isInteger(q.correta) || q.correta < 0 || q.correta > 4) return null;
  if (typeof q.explicacao !== "string" || q.explicacao.trim().length < 320) return null;
  const dificuldade = ["facil", "media", "dificil"].includes(q.dificuldade)
    ? q.dificuldade
    : "media";
  return {
    dificuldade,
    enunciado: q.enunciado.trim(),
    opcoes,
    correta: q.correta,
    explicacao: q.explicacao.trim(),
  };
}

/* ---- serialização (formato idêntico ao de rebalancear-gabarito.mjs) -- */
function serializa(materia, tema, questoes, resumo) {
  const linhas = [
    `/* ${tema} (${questoes.length} questões) — RASCUNHO gerado por ${MODELO}.`,
  ];
  if (resumo?.dedup) {
    linhas.push(
      `   Dedup: exato + semântico (Jaccard trigrama ≥ ${resumo.dedup.limiar}); ` +
        `${resumo.dedup.semanticas} rejeitada(s) na geração.`
    );
  }
  if (resumo?.conferencia?.falhou) {
    linhas.push(`   CONFERÊNCIA NÃO CONCLUÍDA — confira o gabarito à mão.`);
  } else if (resumo?.conferencia) {
    const qs = (resumo.descartes ?? []).map((d) => "q" + d.n).join(",");
    linhas.push(
      `   Conferência de gabarito (${resumo.conferencia.modelo}, ` +
        `${resumo.conferencia.passes}x às cegas, rigor ${resumo.conferencia.rigor}): ` +
        `${(resumo.descartes ?? []).length} descartada(s)${qs ? " — " + qs : ""}.`
    );
  } else {
    linhas.push(`   Sem conferência de gabarito (--sem-conferencia).`);
  }
  linhas.push(`   NÃO revisado. Confira gabarito e contas antes de semear.`);
  linhas.push(`   Passou por rebalancear-gabarito.mjs e checar-qualidade.mjs. */`);
  const cabecalho = linhas.join("\n");

  const corpo = questoes
    .map((q) => {
      const linha = (k, v) => `    ${k}: ${JSON.stringify(v)},`;
      const partes = [
        linha("materia", materia),
        linha("tema", tema),
        linha("dificuldade", q.dificuldade),
        `    enunciado:\n      ${JSON.stringify(q.enunciado)},`,
        `    opcoes: [\n${q.opcoes.map((o) => `      ${JSON.stringify(o)},`).join("\n")}\n    ],`,
        linha("correta", q.correta),
        `    explicacao:\n      ${JSON.stringify(q.explicacao)},`,
      ];
      return `  {\n${partes.join("\n")}\n  },`;
    })
    .join("\n");

  return `${cabecalho}\n\nexport const questoes = [\n${corpo}\n];\n`;
}

/* ---- um tema, ponta a ponta ---------------------------------------- */
async function geraTema(materia, materiaNome, tema) {
  const caminho = arquivoDoTema(materia, tema);
  if (existsSync(caminho) && !FORCAR) {
    console.log(`\n= ${tema}\n  já existe (use --forcar para regravar). Pulando.`);
    return;
  }

  console.log(`\n= ${materia} · ${tema}`);
  const dicas = [
    "Foque em aplicação: casos numéricos e situações práticas.",
    "Foque em interpretação e conceito, sem conta pesada.",
    "Varie os contextos: trabalho, escola, serviço público, cotidiano.",
    "Explore as pegadinhas clássicas do tema e os erros mais comuns.",
    "Misture: metade aplicada, metade conceitual.",
  ];

  /* Gera um pouco a mais quando a conferência está ligada (ela descarta), e
     deixa mais rodadas porque o dedup semântico corta mais que o exato. */
  const alvoInterno = Math.ceil(ALVO * (1 + CONF_MARGEM));
  const maxRodadas = Math.ceil(alvoInterno / LOTE) + 5;

  const assinaturas = [];
  const boas = [];
  let dupIdenticas = 0;
  let dupSemanticas = 0;
  let rodada = 0;

  while (boas.length < alvoInterno && rodada < maxRodadas) {
    const faltam = alvoInterno - boas.length;
    const pedir = Math.min(LOTE, faltam + 2);
    process.stdout.write(
      `  lote ${rodada + 1}: pedindo ${pedir}… (${boas.length}/${alvoInterno})`
    );
    let cruas;
    try {
      cruas = await geraLote(materiaNome, tema, pedir, dicas[rodada % dicas.length]);
    } catch (e) {
      console.log(`  falhou: ${e.message}`);
      rodada++;
      await sleep(2000);
      continue;
    }

    let aceitas = 0;
    for (const c of cruas) {
      const v = questaoValida(c);
      if (!v) continue;
      const sig = assinaturaDedup(v);
      if (!SEM_DEDUP_SEMANTICO) {
        const r = repetidaSemantica(sig, assinaturas, DEDUP_LIMIAR);
        if (r.repetida) {
          if (r.similaridade >= 0.999) dupIdenticas++;
          else dupSemanticas++;
          continue;
        }
      } else if (
        assinaturas.some((s) => jaccardDedup(s.tok, sig.tok) >= 0.999)
      ) {
        dupIdenticas++;
        continue;
      }
      assinaturas.push(sig);
      boas.push(v);
      aceitas++;
      if (boas.length >= alvoInterno) break;
    }
    console.log(`  ok: +${aceitas} válidas`);
    rodada++;
    await sleep(1500);
  }

  const geradasUnicas = boas.length;
  if (geradasUnicas === 0) {
    console.log("  nada aproveitável. Arquivo não escrito.");
    return;
  }
  console.log(
    `  dedup: ${dupIdenticas} idêntica(s) · ${dupSemanticas} semântica(s) ` +
      `(limiar ${DEDUP_LIMIAR}) · ${geradasUnicas} única(s)`
  );

  // 2º passe: conferência de gabarito às cegas
  let finais = boas;
  let descartesConf = [];
  let resumoConf = null;
  if (!SEM_CONFERENCIA) {
    try {
      const r = await confereGabaritos(materiaNome, tema, boas);
      finais = r.aprovadas;
      descartesConf = r.descartes;
      resumoConf = r.resumo;
      console.log(
        `  conferência (${resumoConf.passes} passe(s), lote ${CONF_LOTE}, ` +
          `rigor ${resumoConf.rigor}): ${finais.length} mantida(s) / ` +
          `${descartesConf.length} descartada(s)`
      );
      for (const d of descartesConf.slice(0, 8)) {
        console.log(
          `    q${d.n}: gabarito ${LETRA_CONF[d.gabarito]} · cegos ` +
            `${d.votos.map(votoStr).join("/")}  — ${d.motivo}`
        );
      }
      if (descartesConf.length > 8) {
        console.log(`    … e mais ${descartesConf.length - 8} (ver o JSON de relatório)`);
      }
      if (finais.length < geradasUnicas * 0.5) {
        console.log(
          "  ATENÇÃO: conferência reprovou mais da metade. Tente --conf-modelo " +
            "com um modelo mais forte, --conf-rigor maioria, ou revise o tema à mão."
        );
      }
    } catch (e) {
      console.log(`  conferência falhou (${e.message}) — arquivo sai SEM conferir`);
      resumoConf = { falhou: true };
    }
  }

  finais = finais.slice(0, ALVO);
  if (finais.length === 0) {
    console.log("  nada sobrou depois da conferência. Arquivo não escrito.");
    return;
  }
  if (finais.length < ALVO) {
    console.log(`  AVISO: arquivo com ${finais.length}/${ALVO} questões.`);
  }

  const resumo = {
    conferencia: resumoConf,
    descartes: descartesConf,
    dedup: { limiar: DEDUP_LIMIAR, identicas: dupIdenticas, semanticas: dupSemanticas },
  };
  writeFileSync(caminho, serializa(materia, tema, finais, resumo), "utf8");
  const rel = caminho.replace(RAIZ, "").replace(/\\/g, "/");
  console.log(`  escrito: ${rel}`);

  escreveRelatorio(materia, tema, {
    geradas: geradasUnicas,
    dedup_identicas: dupIdenticas,
    dedup_semanticas: dupSemanticas,
    mantidas: finais.length,
    resumoConf,
    descartesConf,
  });

  // rebalanceia a letra do gabarito
  try {
    execFileSync("node", ["scripts/rebalancear-gabarito.mjs", rel], {
      cwd: RAIZ,
      stdio: "inherit",
    });
  } catch {
    console.log("  rebalancear-gabarito.mjs falhou — rode à mão.");
  }

  // roda as 5 regras
  const nomeSlug = `${materia}__${slug(tema)}`;
  try {
    execFileSync("node", ["scripts/checar-qualidade.mjs", nomeSlug], {
      cwd: RAIZ,
      stdio: "inherit",
    });
    console.log("  checar-qualidade: OK");
  } catch {
    console.log(`  checar-qualidade APONTOU problemas em ${nomeSlug} — revise antes de semear.`);
  }

  return {
    tema,
    unicas: geradasUnicas,
    mantidas: finais.length,
    gabaritoDivergente: resumoConf?.contadores?.gabarito_divergente ?? 0,
    instavel: resumoConf?.contadores?.instavel ?? 0,
    marcou_menos1: resumoConf?.contadores?.marcou_menos1 ?? 0,
    semResposta: resumoConf?.contadores?.sem_resposta ?? 0,
  };
}

/* Relatório JSON por tema — o artefato de resgate: um humano abre, filtra
   "gabarito divergente" (quase certo que o gabarito estava errado) e
   "instável" (lê a questão: em geral é ambígua mesmo). */
function escreveRelatorio(materia, tema, d) {
  if (SEM_RELATORIO_JSON || d.resumoConf?.falhou || d.resumoConf === null) return;
  try {
    mkdirSync(DIR_RELATORIO, { recursive: true });
  } catch {
    return;
  }
  const alvo = join(DIR_RELATORIO, `${materia}__${slug(tema)}.json`);
  const payload = {
    materia,
    tema,
    modelo_conferencia: d.resumoConf.modelo,
    passes: d.resumoConf.passes,
    rigor: d.resumoConf.rigor,
    limiar_dedup: DEDUP_LIMIAR,
    geradas: d.geradas,
    dedup_identicas: d.dedup_identicas,
    dedup_semanticas: d.dedup_semanticas,
    conferidas: d.geradas,
    mantidas: d.mantidas,
    contadores: d.resumoConf.contadores,
    descartes: d.descartesConf.map((x) => ({
      n: x.n,
      motivo: x.motivo,
      gabarito_gerado: x.gabarito,
      letra_gerada: LETRA_CONF[x.gabarito],
      votos_cegos: x.votos,
      votos_letra: x.votos.map(votoStr),
      enunciado: x.enunciado,
      opcoes: x.opcoes,
    })),
  };
  writeFileSync(alvo, JSON.stringify(payload, null, 2) + "\n", "utf8");
  console.log(`  relatório: ${alvo.replace(RAIZ, "").replace(/\\/g, "/")}`);
}

/* Modo --conferir: re-confere um .mjs já gerado, sem gerar nada. */
async function reconfereArquivo(materia, materiaNome, tema) {
  const caminho = arquivoDoTema(materia, tema);
  if (!existsSync(caminho)) {
    console.log(`\n= ${tema}\n  arquivo não existe — nada a conferir.`);
    return;
  }
  console.log(`\n= ${materia} · ${tema}  (só conferência)`);
  let mod;
  try {
    mod = await import(pathToFileURL(caminho).href + `?t=${Date.now()}`);
  } catch (e) {
    console.log(`  não consegui importar o arquivo (${e.message}).`);
    return;
  }
  const boas = (mod.questoes ?? []).map((q) => questaoValida(q)).filter(Boolean);
  if (boas.length === 0) {
    console.log("  nenhuma questão válida no arquivo.");
    return;
  }

  let finais = boas;
  let descartesConf = [];
  let resumoConf = null;
  try {
    const r = await confereGabaritos(materiaNome, tema, boas);
    finais = r.aprovadas;
    descartesConf = r.descartes;
    resumoConf = r.resumo;
  } catch (e) {
    console.log(`  conferência falhou (${e.message}) — arquivo não alterado.`);
    return;
  }
  console.log(
    `  conferência: ${finais.length} mantida(s) / ${descartesConf.length} descartada(s) ` +
      `de ${boas.length}`
  );
  for (const d of descartesConf.slice(0, 12)) {
    console.log(
      `    q${d.n}: gabarito ${LETRA_CONF[d.gabarito]} · cegos ` +
        `${d.votos.map(votoStr).join("/")}  — ${d.motivo}`
    );
  }
  if (finais.length === 0) {
    console.log("  nada sobrou — arquivo NÃO regravado.");
    return;
  }

  const resumo = {
    conferencia: resumoConf,
    descartes: descartesConf,
    dedup: { limiar: DEDUP_LIMIAR, identicas: 0, semanticas: 0 },
  };
  writeFileSync(caminho, serializa(materia, tema, finais, resumo), "utf8");
  const rel = caminho.replace(RAIZ, "").replace(/\\/g, "/");
  console.log(`  regravado: ${rel}`);
  escreveRelatorio(materia, tema, {
    geradas: boas.length,
    dedup_identicas: 0,
    dedup_semanticas: 0,
    mantidas: finais.length,
    resumoConf,
    descartesConf,
  });
  try {
    execFileSync("node", ["scripts/rebalancear-gabarito.mjs", rel], {
      cwd: RAIZ,
      stdio: "inherit",
    });
    execFileSync("node", ["scripts/checar-qualidade.mjs", `${materia}__${slug(tema)}`], {
      cwd: RAIZ,
      stdio: "inherit",
    });
  } catch {
    console.log("  rebalancear/checar apontou algo — revise.");
  }
}

/* ---- main --------------------------------------------------------- */
async function principal() {
  const materia = posicionais[0];
  if (!materia || !materiaExiste(materia)) {
    console.error(
      `\nMatéria inválida ou ausente: ${materia ?? "(nada)"}\n` +
        `Matérias: ${Object.keys(CATALOGO).join(", ")}\n` +
        `Ou use --lista para ver o que falta.\n`
    );
    process.exit(1);
  }

  // nome "bonito" da matéria: o catálogo só tem o id. Serve o id mesmo no
  // prompt; o Gemini entende "raciocinio-logico" como "Raciocínio lógico".
  const materiaNome = materia.replace(/-/g, " ");

  let temas;
  if (temFlag("--todos")) {
    temas = [...CATALOGO[materia]];
  } else {
    const tema = posicionais[1];
    if (!tema) {
      console.error('\nInforme o tema entre aspas, ou use --todos.\n');
      process.exit(1);
    }
    if (!temaExiste(materia, tema)) {
      console.error(
        `\nTema não está no catálogo de ${materia}:\n  ${JSON.stringify(tema)}\n\n` +
          `Temas válidos:\n${[...CATALOGO[materia]].map((t) => `  ${t}`).join("\n")}\n`
      );
      process.exit(1);
    }
    temas = [tema];
  }

  if (MODO_CONFERIR) {
    console.log(
      `\nModo --conferir: só re-confere .mjs existente(s). ` +
        `${temas.length} tema(s). Nada é gerado nem semeado.`
    );
    for (const tema of temas) {
      await reconfereArquivo(materia, materiaNome, tema);
    }
    console.log("\nFim (só conferência).\n");
    return;
  }

  console.log(
    `\nModelo: ${MODELO} · ${ALVO} questões/tema · lote ${LOTE} · ${temas.length} tema(s)\n` +
      `Conferência: ${
        SEM_CONFERENCIA
          ? "DESLIGADA"
          : `${CONF_RIGOR}, ${
              CONF_RIGOR === "maioria"
                ? Math.max(3, CONF_RECHECAGENS)
                : Math.max(1, CONF_RECHECAGENS)
            } passe(s), ${USA_CLAUDE ? "Claude" : CONF_MODELO}`
      }\n` +
      `Isto é RASCUNHO. Nada vai ao banco. Revise antes de semear.`
  );

  const linhasResumo = [];
  for (const tema of temas) {
    const r = await geraTema(materia, materiaNome, tema);
    if (r) linhasResumo.push(r);
  }

  if (linhasResumo.length > 1 && !SEM_CONFERENCIA) {
    console.log(`\n${"tema".padEnd(46)} únic  mant  gab±  inst   -1  s/r`);
    const tot = { unicas: 0, mantidas: 0, gabaritoDivergente: 0, instavel: 0, marcou_menos1: 0, semResposta: 0 };
    for (const l of linhasResumo) {
      for (const k of Object.keys(tot)) tot[k] += l[k] ?? 0;
      console.log(
        `${l.tema.slice(0, 45).padEnd(46)}` +
          `${String(l.unicas).padStart(4)}  ${String(l.mantidas).padStart(4)}  ` +
          `${String(l.gabaritoDivergente).padStart(4)}  ${String(l.instavel).padStart(4)}  ` +
          `${String(l.marcou_menos1).padStart(3)}  ${String(l.semResposta).padStart(3)}`
      );
    }
    console.log(
      `${"TOTAL".padEnd(46)}` +
        `${String(tot.unicas).padStart(4)}  ${String(tot.mantidas).padStart(4)}  ` +
        `${String(tot.gabaritoDivergente).padStart(4)}  ${String(tot.instavel).padStart(4)}  ` +
        `${String(tot.marcou_menos1).padStart(3)}  ${String(tot.semResposta).padStart(3)}`
    );
  }

  console.log(
    `\nFim. Próximo passo, DEPOIS de revisar os arquivos ` +
      `(comece pelos descartes em _relatorios/):\n` +
      `  node scripts/checar-qualidade.mjs ${materia}\n` +
      `  npm run seed-questoes -- --seco\n` +
      `  npm run seed-questoes\n`
  );
}

principal().catch((e) => {
  console.error("\nErro:", e.message, "\n");
  process.exit(1);
});
