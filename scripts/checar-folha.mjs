/* Verifica o CONTRATO da folha do menu do celular.
 *
 *   npm run checar-folha
 *
 * O que se comprova aqui é o que sobrevive a um refactor distraído. A física da
 * mola é do `checar-mola.mjs`; o comportamento no navegador (abrir, fechar,
 * pausar o filme, quadros longos) foi medido com Playwright fora do repositório
 * e não roda aqui, porque precisa de servidor de pé. São três coisas:
 *
 *   1. Nenhum `backdrop-filter` é escrito quadro a quadro. Foi a regressão de
 *      desempenho que motivou esta rodada: o raio subia com a escala, e cada
 *      valor novo obrigava o navegador a refazer o desfoque da região inteira,
 *      fora do compositor, com quatro vídeos decodificando por baixo.
 *   2. O painel é quase opaco. É o que permite (1): sem fundo aparecendo, não
 *      há o que desfocar. Se alguém devolver a translucidez sem devolver o
 *      desfoque, o painel fica ilegível sobre o filme; o teto de alfa é o que
 *      impede a metade errada da troca.
 *   3. A folha tem as três saídas — botão, Escape e clique fora — e todas
 *      moram no gancho, onde as duas barras as dividem.
 *
 * Ler o fonte como texto é grosseiro de propósito: o alvo é justamente a linha
 * que alguém reintroduz sem querer, e nenhum DOM falso pegaria isso.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { ocuparCamada, camadaAberta, zerarCamadas } from "../lib/movimento/camada.ts";

const ler = (caminho) => readFileSync(new URL(caminho, import.meta.url), "utf8");

const gancho = ler("../lib/movimento/usarFolha.ts");
const globais = ler("../app/globals.css");
const cinema = ler("../components/hero/nav-cinema.module.css");
const barra = ler("../components/layout/BarraTopo.tsx");
const nav = ler("../components/layout/Nav.tsx");

/* Comentários explicam POR QUE o desfoque saiu e citam a propriedade pelo
   nome; procurar a string crua acusaria o próprio comentário. */
const semComentarios = (fonte) =>
  fonte.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^[ \t]*\/\/.*$/gm, "");

const cssSemComentarios = (fonte) => fonte.replace(/\/\*[\s\S]*?\*\//g, "");

/* TODOS os blocos de um seletor, e não só o primeiro. `.nav-mobile` aparece
   várias vezes no globals — seleção de texto, toque, tipografia — e pegar só a
   primeira ocorrência testava a regra errada. */
function blocosDe(css, seletor) {
  const blocos = [];
  const alvo = `\n${seletor} {`;
  let i = css.indexOf(alvo);
  while (i !== -1) {
    const abre = i + alvo.length;
    const fecha = css.indexOf("}", abre);
    blocos.push(css.slice(abre, fecha));
    i = css.indexOf(alvo, fecha);
  }
  return blocos;
}

let falhas = 0;
function conferir(nome, fn) {
  try {
    fn();
    console.log(`  ok    ${nome}`);
  } catch (erro) {
    console.log(`  FALHA ${nome} — ${erro.message}`);
    falhas++;
  }
}

/* ---------- 1. nenhum desfoque animado ---------- */

conferir("usarFolha não escreve backdrop-filter em nenhum quadro", () => {
  const codigo = semComentarios(gancho);
  assert.ok(!/backdropFilter/i.test(codigo), "achou escrita de backdropFilter no gancho");
  assert.ok(!/backdrop-filter/i.test(codigo), "achou backdrop-filter no gancho");
});

conferir("o quadro da folha escreve só transform e opacity", () => {
  const corpo = gancho.slice(gancho.indexOf("const pintar"), gancho.indexOf("const garantirMola"));
  const escritas = [...semComentarios(corpo).matchAll(/el\.style\.(\w+)\s*=/g)].map((m) => m[1]);
  assert.deepEqual(
    [...new Set(escritas)].sort(),
    ["opacity", "transform"],
    `pintar() escreve ${escritas.join(", ")}`
  );
});

conferir(".nav-mobile não tem backdrop-filter em regra nenhuma", () => {
  const blocos = blocosDe(cssSemComentarios(globais), ".nav-mobile");
  assert.ok(blocos.length > 0, "nenhum bloco .nav-mobile encontrado");
  for (const regra of blocos) {
    const desfoque = regra.match(/backdrop-filter:\s*([^;]+);/);
    // `backdrop-filter: none` é permitido: é o que zera quem herdaria.
    assert.ok(
      !desfoque || desfoque[1].trim() === "none",
      `.nav-mobile ainda desfoca: ${desfoque?.[0]}`
    );
  }
});

conferir("o painel da abertura não tem backdrop-filter", () => {
  const blocos = blocosDe(cssSemComentarios(cinema), ".mobile");
  assert.ok(blocos.length > 0, "nenhum bloco .mobile encontrado");
  for (const regra of blocos) {
    assert.ok(!/backdrop-filter/.test(regra), ".mobile ainda desfoca");
  }
});

/* ---------- 2. painel quase opaco ---------- */

/** Teto de translucidez do painel: abaixo disso o desfoque volta a fazer falta. */
const ALFA_MINIMO = 0.95;

function alfasDe(fonte, rotulo) {
  const valores = [...fonte.matchAll(/rgba\([^)]*?,\s*([\d.]+)\s*\)/g)].map((m) => Number(m[1]));
  assert.ok(valores.length > 0, `nenhum rgba em ${rotulo}`);
  return valores;
}

conferir(`--material-folha é opaco em >= ${ALFA_MINIMO} nos dois temas`, () => {
  // Só as DEFINIÇÕES (`--material-folha:`), nunca os usos (`var(...)`).
  const linhas = globais
    .split("\n")
    .filter((l) => /--material-folha\s*:/.test(l));
  assert.ok(linhas.length >= 2, `--material-folha definido ${linhas.length}x; esperado claro + escuro`);
  for (const linha of linhas) {
    const [alfa] = alfasDe(linha, linha.trim());
    assert.ok(alfa >= ALFA_MINIMO, `alfa ${alfa} em "${linha.trim()}"`);
  }
});

conferir(`o painel da abertura é opaco em >= ${ALFA_MINIMO}`, () => {
  const css = cssSemComentarios(cinema);
  const bloco = css.slice(css.indexOf("\n.mobile {"));
  const regra = bloco.slice(0, bloco.indexOf("}"));
  const fundo = regra.match(/background:\s*([^;]+);/);
  assert.ok(fundo, ".mobile sem background");
  const [alfa] = alfasDe(fundo[1], ".mobile");
  assert.ok(alfa >= ALFA_MINIMO, `alfa ${alfa} em .mobile`);
});

conferir(".nav-mobile usa o material da folha, não o do cabeçalho", () => {
  const blocos = blocosDe(cssSemComentarios(globais), ".nav-mobile");
  const usa = blocos.some((r) => /background:\s*var\(--material-folha\)/.test(r));
  assert.ok(usa, ".nav-mobile não pinta com var(--material-folha)");
  const cabecalho = blocos.some((r) => /background:\s*var\(--material-chrome\)/.test(r));
  assert.ok(!cabecalho, ".nav-mobile voltou a usar o material do cabeçalho");
});

/* ---------- 3. as três saídas ---------- */

conferir("o gancho fecha no Escape e devolve o foco ao botão", () => {
  const codigo = semComentarios(gancho);
  assert.match(codigo, /evento\.key !== "Escape"/, "sem tratamento de Escape");
  assert.match(codigo, /refBotao\?\.current\?\.focus\(\)/, "Escape não devolve o foco");
});

conferir("o gancho fecha no clique fora, poupando a folha e o botão", () => {
  const codigo = semComentarios(gancho);
  assert.match(codigo, /addEventListener\("pointerdown", aoApontarFora\)/, "sem clique fora");
  assert.match(codigo, /ref\.current\?\.contains\(alvo\)/, "não poupa a própria folha");
  assert.match(codigo, /refBotao\?\.current\?\.contains\(alvo\)/, "não poupa o botão que abriu");
});

conferir("as duas barras passam o botão para o gancho", () => {
  for (const [nome, fonte] of [["BarraTopo", barra], ["Nav", nav]]) {
    const chamada = semComentarios(fonte).match(/usarFolha<HTMLDivElement>\(([^;]+?)\);/s);
    assert.ok(chamada, `${nome} não chama usarFolha`);
    assert.equal(
      chamada[1].split(",").length,
      3,
      `${nome} chama usarFolha sem o botão: ${chamada[1].replace(/\s+/g, " ")}`
    );
  }
});

conferir("Escape e clique fora não estão duplicados nas barras", () => {
  for (const [nome, fonte] of [["BarraTopo", barra], ["Nav", nav]]) {
    const codigo = semComentarios(fonte);
    assert.ok(!/"Escape"/.test(codigo), `${nome} reimplementa o Escape`);
    assert.ok(!/addEventListener\("pointerdown"/.test(codigo), `${nome} reimplementa o clique fora`);
  }
});

/* ---------- a camada, isolada ---------- */

conferir("a camada conta em vez de guardar um booleano", () => {
  zerarCamadas();
  const a = ocuparCamada();
  const b = ocuparCamada();
  assert.equal(camadaAberta(), true);
  a();
  assert.equal(camadaAberta(), true, "a segunda camada sumiu com a saída da primeira");
  a();
  assert.equal(camadaAberta(), true, "soltar duas vezes derrubou a contagem alheia");
  b();
  assert.equal(camadaAberta(), false);
  zerarCamadas();
});

if (falhas) {
  console.error(`\nFolha: ${falhas} falha(s).`);
  process.exit(1);
}
console.log("Folha: sem desfoque animado, painel quase opaco nos dois temas, três saídas no gancho e camada contada OK.");
