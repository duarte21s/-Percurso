/* Verifica o contraste da paleta contra a WCAG 2.1 AA.
 *
 * Lê os tokens direto do globals.css em vez de repetir os valores aqui: uma
 * cópia sempre acaba divergindo do arquivo real, e uma checagem que valida a
 * cópia não valida nada. Rode depois de mexer em qualquer cor.
 *
 *   node scripts/checar-contraste.mjs
 *
 * Sai com código 1 se algum par reprovar, para poder entrar em CI.
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const AQUI = dirname(fileURLToPath(import.meta.url));
const CSS = resolve(AQUI, "..", "app", "globals.css");

/* ---------- cor ---------- */

function hexParaRgb(hex) {
  const h = hex.replace("#", "").trim();
  const largo =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  return [
    parseInt(largo.slice(0, 2), 16),
    parseInt(largo.slice(2, 4), 16),
    parseInt(largo.slice(4, 6), 16),
  ];
}

/* Luminância relativa da WCAG: linearizar cada canal e pesar pelo verde, que
   é onde o olho tem mais sensibilidade. */
function luminancia(hex) {
  const [r, g, b] = hexParaRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contraste(a, b) {
  const la = luminancia(a);
  const lb = luminancia(b);
  const [claro, escuro] = la > lb ? [la, lb] : [lb, la];
  return (claro + 0.05) / (escuro + 0.05);
}

/* Matiz em graus, para conferir que marca e sinal continuam separados. */
function matiz(hex) {
  const [r, g, b] = hexParaRgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  if (d === 0) return 0;
  let h;
  if (max === r) h = ((g - b) / d) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return Math.round(((h * 60) % 360 + 360) % 360);
}

/* ---------- leitura dos tokens ---------- */

/* Os dois blocos de tema começam em `:root {` (claro) e no seletor com
   `data-theme="light"` negado (escuro). Pego o primeiro `:root {` e o bloco
   do `@media (prefers-color-scheme: dark)`. */
function extraiTokens(css, ancora) {
  /* Âncora por regex, não por string literal: o arquivo pode vir com CRLF e
     um indexOf de trecho multilinha falharia por causa do \r. */
  const m = ancora.exec(css);
  if (!m) throw new Error(`Bloco não encontrado: ${ancora}`);
  /* A chave é a ÚLTIMA do casamento, não a primeira depois dele. Nos blocos
     aninhados (`@media { :root { … } }`) a primeira é a do `@media`, e ler a
     partir dela devolve os tokens claros e escuros misturados — o segundo
     sobrescreve o primeiro e o resultado não corresponde a tema nenhum. Por
     isso toda âncora termina em `{`. */
  const abre = m.index + m[0].length - 1;
  if (css[abre] !== "{") throw new Error(`Âncora precisa terminar em "{": ${ancora}`);
  let nivel = 0;
  let fim = abre;
  for (let j = abre; j < css.length; j++) {
    if (css[j] === "{") nivel++;
    else if (css[j] === "}") {
      nivel--;
      if (nivel === 0) {
        fim = j;
        break;
      }
    }
  }
  const corpo = css.slice(abre, fim);
  const tokens = {};
  for (const m of corpo.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
    tokens[m[1]] = m[2];
  }
  return tokens;
}

/* ---------- pares que precisam passar ---------- */

/* 4.5:1 é o piso da AA para texto de corpo; 3:1 vale para texto grande
   (>=24px, ou >=19px em negrito) e para limite de componente de interface. */
const FUNDOS = ["bg", "bg-2", "surface", "surface-2"];

const PARES = [
  ...FUNDOS.flatMap((f) => [
    { frente: "text", fundo: f, min: 4.5, nota: "corpo" },
    { frente: "text-2", fundo: f, min: 4.5, nota: "corpo secundário" },
    { frente: "text-3", fundo: f, min: 4.5, nota: "corpo terciário" },
    { frente: "accent-2", fundo: f, min: 4.5, nota: "link" },
    { frente: "ok", fundo: f, min: 4.5, nota: "acerto" },
    { frente: "err", fundo: f, min: 4.5, nota: "erro" },
  ]),
  { frente: "sobre-accent", fundo: "accent", min: 4.5, nota: "botão primário" },
  { frente: "accent", fundo: "bg", min: 3, nota: "anel de foco" },
  { frente: "accent", fundo: "surface-2", min: 3, nota: "anel de foco" },
];

/* ---------- execução ---------- */

const css = await readFile(CSS, "utf8");
const temas = {
  claro: extraiTokens(css, /^:root\s*\{/m),
  escuro: extraiTokens(css, /:root:not\(\[data-theme="light"\]\)\s*\{/),
  /* O herói é um terceiro tema: fica escuro nos dois modos e redefine os
     tokens localmente. Entra na checagem porque o H1 dele é a maior linha de
     texto do site — e foi justamente ali que o acento do tema claro já caiu
     sobre um palco preto sem ninguém ver. */
  /* Contraste aumentado: o guia pede que este modo seja conferido nos dois
     temas, não só declarado. Ele só sobrescreve parte dos tokens — o resto
     vem do tema base, por isso o espalhamento. */
  "claro+contraste": {
    ...extraiTokens(css, /^:root\s*\{/m),
    ...extraiTokens(css, /@media \(prefers-contrast: more\)\s*\{\s*:root\s*\{/),
  },
  "escuro+contraste": {
    ...extraiTokens(css, /:root:not\(\[data-theme="light"\]\)\s*\{/),
    ...extraiTokens(
      css,
      /@media \(prefers-contrast: more\)[\s\S]*?:root:not\(\[data-theme="light"\]\)\s*\{/
    ),
  },
  "herói": {
    /* O que o herói não redefine ele herda do tema em volta. O claro é o pior
       caso dos dois — é dele que vinha a esmeralda fechada sobre o preto. */
    ...extraiTokens(css, /^:root\s*\{/m),
    ...extraiTokens(css, /^\.hero-sticky\s*\{/m),
    /* Fundo do palco JÁ GRADUADO. A correção de cor do livro levanta as pretas
       com um `screen` de #0c2a22 a 15%, e #080a07 vira #0a100c — mais claro que
       o original, portanto pior caso para o texto por cima. Usar o valor cru
       aqui faria a checagem passar por um fundo que não existe na tela.
       Se a opacidade daquela camada mudar, este valor muda junto. */
    bg: "#0a100c",
    "bg-2": "#14211a",
    surface: "#0a100c",
    "surface-2": "#14211a",
  },
};

let falhas = 0;

for (const [nome, tokens] of Object.entries(temas)) {
  console.log(`\n${nome.toUpperCase()}`);

  for (const { frente, fundo, min, nota } of PARES) {
    const cf = tokens[frente];
    const cb = tokens[fundo];
    if (!cf || !cb) {
      console.log(`  ?  --${frente} sobre --${fundo}: token ausente`);
      falhas++;
      continue;
    }
    const r = contraste(cf, cb);
    const passa = r >= min;
    if (!passa) falhas++;
    const marca = passa ? "ok  " : "FALHA";
    console.log(
      `  ${marca} --${frente} sobre --${fundo}: ${r.toFixed(2)}:1 ` +
        `(mínimo ${min}) — ${nota}`
    );
  }

  /* Marca e sinal não podem ser lidos como "o mesmo verde". A regra do guia
     de cor é não usar a mesma cor para significar coisas diferentes; aqui a
     separação é de matiz. */
  if (!tokens["accent"] || !tokens["ok"]) {
    console.log("  ?  matiz: --accent ou --ok ausente neste bloco");
    falhas++;
    continue;
  }
  const dAccent = matiz(tokens["accent"]);
  const dOk = matiz(tokens["ok"]);
  const dist = Math.min(Math.abs(dAccent - dOk), 360 - Math.abs(dAccent - dOk));
  const separado = dist >= 40;
  if (!separado) falhas++;
  console.log(
    `  ${separado ? "ok  " : "FALHA"} matiz --accent ${dAccent}° vs --ok ${dOk}°: ` +
      `${dist}° de distância (mínimo 40°)`
  );
}

console.log(
  falhas === 0
    ? "\nTodos os pares passam na AA.\n"
    : `\n${falhas} reprovação(ões).\n`
);
process.exit(falhas === 0 ? 0 : 1);
