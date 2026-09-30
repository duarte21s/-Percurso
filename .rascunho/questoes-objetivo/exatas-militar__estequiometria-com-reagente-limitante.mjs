/* Rascunho — Exatas nível militar / Estequiometria com reagente limitante.

   A explicação faz as contas de proporção do jeito da prova; a conferência
   segue outro caminho: confere se a equação está balanceada (contagem de
   átomos), calcula as massas molares a partir das fórmulas e das massas
   atômicas dadas no enunciado, e faz a reação "andar" — o avanço é levado
   até o ponto em que o primeiro reagente acaba (bisseção), sem escolher o
   limitante de antemão. A cada reação, confere também a conservação da
   massa. */

import { unicoV, lerExpr, bissecao, resolve, massaMolar, balanceada, atomos } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Estequiometria com reagente limitante";
export const arquivo = "exatas-militar__estequiometria-com-reagente-limitante";

const MASSAS = { H: 1, C: 12, N: 14, O: 16, Na: 23, Mg: 24, Al: 27, Si: 28, P: 31, S: 32, Cl: 35.5, K: 39, Ca: 40, Fe: 56, Cu: 63.5, Zn: 65, Ag: 108 };
const M = (f) => massaMolar(f, MASSAS);
/* Reação: reagentes e produtos como [coeficiente, fórmula]; n0 = mols iniciais
   (reagente ausente de n0 = excesso). Avança até o primeiro reagente acabar. */
const reage = (reag, prod, n0) => {
  if (!balanceada(reag, prod)) throw new Error("equação não balanceada");
  const cabe = (xi) => reag.every(([c, f]) => (f in n0 ? n0[f] : Infinity) - c * xi >= 0);
  const xi = bissecao((x) => (cabe(x) ? 1 : -1), 0, 1e7, 200);
  const n = { ...n0 };
  for (const [c, f] of reag) n[f] = (f in n0 ? n0[f] : Infinity) - c * xi;
  for (const [c, f] of prod) n[f] = (n0[f] ?? 0) + c * xi;
  const consumida = reag.reduce((s, [c, f]) => s + c * xi * M(f), 0), formada = prod.reduce((s, [c, f]) => s + c * xi * M(f), 0);
  if (Math.abs(consumida - formada) > 1e-9 * Math.max(1, formada)) throw new Error("a massa não se conserva");
  return n;
};
/* fórmula escrita com índices (C₆H₁₂O₆) para contagem de átomos */
const IND = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };
const semIndices = (t) => [...t].map((c) => IND[c] ?? c).join("");
const mesmaFormula = (a, b) => { const x = atomos(semIndices(a)), y = atomos(semIndices(b)); return Object.keys({ ...x, ...y }).every((e) => x[e] === y[e]); };

/* valor da alternativa: "36 g", "98 g/mol", "≈ 0,72 g", "3 · 10²³", "5,6 L", "20 mL" (em litros), "75%" */
const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
const FATOR = { "g/mol": 1, kg: 1e3, mL: 1e-3, mol: 1, atm: 1, g: 1, L: 1, "%": 0.01 };
const valor = (t) => {
  const m = String(t).trim().replace(/^≈\s*/, "").match(/^(.*?)\s*(g\/mol|kg|mL|mol|atm|g|L|%)?$/);
  const s = m[1].replace(/10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (x, e) => `10**(${[...e].map((c) => SUP[c]).join("")})`).replace(/\.(?=\d{3})/g, "");
  return lerExpr(s) * (FATOR[m[2]] ?? 1);
};
/* índice da única alternativa com o valor x (tolerância relativa; zero só casa com zero) */
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = valor(t); } catch { return false; } return x === 0 ? v === 0 : Math.abs(v - x) <= tol * Math.abs(x); }));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["36 g", "18 g", "72 g", "32 g", "4 g"];
    return {
      d: "facil",
      e: "Com H = 1 e O = 16 (em g/mol), que massa de água se forma quando 4 g de gás hidrogênio reagem com oxigênio em excesso, segundo 2 H₂ + O₂ → 2 H₂O?",
      o,
      x: "A massa molar do H₂ é 2 g/mol, e 4 g correspondem a 4/2 = 2 mol. A equação mostra que 2 mol de H₂ formam 2 mol de H₂O, na proporção 1 : 1. A massa molar da água é 2 · 1 + 16 = 18 g/mol, e 2 mol pesam 36 g. Confere com a conservação da massa: os 4 g de hidrogênio reagem com 32 g de oxigênio, e 4 + 32 = 36 g.\n\n18 g divide por 2, como se 2 mol de H₂ formassem 1 mol de água. 72 g toma 4 g como 4 mol de H₂, esquecendo a massa molar de 2 g/mol. 32 g é a massa de oxigênio consumida. E 4 g supõe que a massa de água seja a do hidrogênio.",
      v: { i: () => { const n = reage([[2, "H2"], [1, "O2"]], [[2, "H2O"]], { H2: 4 / M("H2") }); return qual(n.H2O * M("H2O"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["98 g/mol", "49 g/mol", "50 g/mol", "97 g/mol", "80 g/mol"];
    return {
      d: "facil",
      e: "Com H = 1, S = 32 e O = 16 (em g/mol), qual é a massa molar do ácido sulfúrico, H₂SO₄?",
      o,
      x: "A massa molar é a soma das massas atômicas de todos os átomos da fórmula, cada uma multiplicada pelo seu índice: 2 · 1 (hidrogênio) + 1 · 32 (enxofre) + 4 · 16 (oxigênio) = 2 + 32 + 64 = 98 g/mol. Um mol de ácido sulfúrico pesa 98 g.\n\n49 g/mol ignora todos os índices, somando 1 + 32 + 16. 50 g/mol esquece só o índice do oxigênio. 97 g/mol esquece o índice do hidrogênio. E 80 g/mol é a massa molar do SO₃, o óxido que forma o ácido ao reagir com a água, e não a do ácido.",
      v: { i: () => qual(M("H2SO4"), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["2 mol", "0,5 mol", "88 mol", "3,1 mol", "1,2 · 10²⁴ mol"];
    return {
      d: "facil",
      e: "Com C = 12 e O = 16 (em g/mol), quantos mols de moléculas há em 88 g de gás carbônico, CO₂?",
      o,
      x: "A massa molar do CO₂ é 12 + 2 · 16 = 44 g/mol. O número de mols é a massa dividida pela massa molar: n = 88/44 = 2 mol. Isso corresponde a 2 · 6 · 10²³ = 1,2 · 10²⁴ moléculas.\n\n0,5 mol inverte a divisão, 44/88. 88 mol toma a massa em gramas como número de mols. 3,1 mol usa a massa molar do monóxido de carbono, CO, de 28 g/mol. E 1,2 · 10²⁴ é o número de moléculas, e não de mols.",
      v: { i: () => qual(88 / M("CO2"), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["3 · 10²³", "6 · 10²³", "5,4 · 10²⁴", "9 · 10²³", "1,08 · 10²⁵"];
    return {
      d: "facil",
      e: "Com H = 1, O = 16 (em g/mol) e a constante de Avogadro igual a 6 · 10²³ por mol, quantas moléculas há em 9 g de água?",
      o,
      x: "A massa molar da água é 18 g/mol, e 9 g correspondem a 9/18 = 0,5 mol. Cada mol tem 6 · 10²³ moléculas; meio mol, 3 · 10²³. Como cada molécula tem 3 átomos, são 9 · 10²³ átomos no total.\n\n6 · 10²³ é o número de moléculas de um mol inteiro, 18 g. 5,4 · 10²⁴ multiplica a massa, 9, pela constante de Avogadro, sem dividir pela massa molar. 9 · 10²³ conta átomos, e não moléculas. E 1,08 · 10²⁵ multiplica a massa molar pela constante de Avogadro.",
      v: { i: () => qual((9 / M("H2O")) * 6e23, o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["O H₂, porque 3 mol dele só reagem com 1 mol de N₂", "O N₂, porque há menos mols dele", "O N₂, porque tem a maior massa molar", "Nenhum: as quantidades estão na proporção certa", "O H₂, porque tem a menor massa molar"];
    return {
      d: "facil",
      e: "Na reação N₂ + 3 H₂ → 2 NH₃, misturam-se 2 mol de N₂ e 3 mol de H₂. Qual é o reagente limitante?",
      o,
      x: "A equação pede 3 mol de H₂ para cada mol de N₂. Os 3 mol de H₂ disponíveis reagem com apenas 1 mol de N₂, e sobra 1 mol de N₂. O H₂ acaba primeiro: é o reagente limitante, e é ele que define a quantidade de produto, 2 mol de NH₃.\n\n“Há menos mols de N₂” compara as quantidades sem levar em conta os coeficientes da equação. A massa molar não decide o limitante: o que importa é a proporção em mols. As quantidades não estão na proporção certa, que seria de 1 : 3. E, embora o H₂ seja mesmo o limitante, o motivo não é a sua massa molar, e sim a proporção da equação.",
      /* avança a reação e vê qual reagente zera; confere também o motivo (1 mol de N₂ consumido) */
      v: { i: () => { const n = reage([[1, "N2"], [3, "H2"]], [[2, "NH3"]], { N2: 2, H2: 3 }); const acabou = n.H2 < 1e-9 && n.N2 > 1e-9 ? "H2" : n.N2 < 1e-9 && n.H2 > 1e-9 ? "N2" : "nenhum"; if (Math.abs(2 - n.N2 - 1) > 1e-9) throw new Error("N₂ consumido"); return unicoV(o.map((_, i) => i === { H2: 0, N2: 1, nenhum: 3 }[acabou])); } },
    };
  })(),
  (() => {
    const o = ["4,4 g", "15,6 g", "5,6 g", "10 g", "0 g"];
    return {
      d: "facil",
      e: "Com Ca = 40, C = 12 e O = 16 (em g/mol), a decomposição térmica de 10 g de CaCO₃ produz 5,6 g de CaO e gás carbônico, segundo CaCO₃ → CaO + CO₂. Qual é a massa de CO₂ produzida?",
      o,
      x: "Pela lei de Lavoisier, a massa se conserva: a massa de reagente é igual à soma das massas dos produtos. Então, 10 = 5,6 + m(CO₂), e m(CO₂) = 4,4 g. Confere pelas massas molares: 10 g de CaCO₃ (100 g/mol) são 0,1 mol, que formam 0,1 mol de CO₂, com 44 g/mol, isto é, 4,4 g.\n\n15,6 g soma as massas em vez de subtrair. 5,6 g é a massa do CaO. 10 g supõe que todo o reagente vire gás carbônico. E 0 g supõe que o gás não tenha massa.",
      v: { i: () => { const n = reage([[1, "CaCO3"]], [[1, "CaO"], [1, "CO2"]], { CaCO3: 10 / M("CaCO3") }); if (Math.abs(n.CaO * M("CaO") - 5.6) > 1e-9) throw new Error("CaO"); return qual(n.CO2 * M("CO2"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["5,6 L", "22,4 L", "246,4 L", "2,8 L", "11 L"];
    return {
      d: "facil",
      e: "Com C = 12, O = 16 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais de temperatura e pressão, que volume ocupam 11 g de CO₂ nessas condições?",
      o,
      x: "A massa molar do CO₂ é 44 g/mol, e 11 g correspondem a 11/44 = 0,25 mol. Nas condições normais, cada mol de gás ocupa 22,4 L; então 0,25 mol ocupam 0,25 · 22,4 = 5,6 L.\n\n22,4 L é o volume de um mol inteiro. 246,4 L multiplica a massa pelo volume molar, sem converter a massa em mols. 2,8 L usa o dobro da massa molar, 88 g/mol. E 11 L toma a massa em gramas como volume em litros.",
      v: { i: () => qual((11 / M("CO2")) * 22.4, o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["4 mol", "2 mol", "1 mol", "8 mol", "3 mol"];
    return {
      d: "facil",
      e: "Na combustão do metano, CH₄ + 2 O₂ → CO₂ + 2 H₂O, quantos mols de oxigênio são consumidos na queima completa de 2 mol de metano?",
      o,
      x: "A equação mostra que cada mol de CH₄ reage com 2 mol de O₂. Para 2 mol de metano, são necessários 2 · 2 = 4 mol de oxigênio, e formam-se 2 mol de CO₂ e 4 mol de água. Os coeficientes da equação balanceada dão a proporção em mols entre todas as substâncias da reação.\n\n2 mol usa a proporção 1 : 1. 1 mol inverte a proporção, dividindo por 2. 8 mol multiplica por 2 duas vezes. E 3 mol soma os coeficientes dos produtos, 1 + 2.",
      v: { i: () => { const n = reage([[1, "CH4"], [2, "O2"]], [[1, "CO2"], [2, "H2O"]], { CH4: 2, O2: 1000 }); return qual(1000 - n.O2, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["70%", "35%", "30%", "56%", "77,8%"];
    return {
      d: "facil",
      e: "Com Fe = 56 e O = 16 (em g/mol), qual é a porcentagem em massa de ferro no óxido de ferro(III), Fe₂O₃?",
      o,
      x: "A massa molar do Fe₂O₃ é 2 · 56 + 3 · 16 = 112 + 48 = 160 g/mol, dos quais 112 g são de ferro. A porcentagem é 112/160 = 0,7 = 70%. Os outros 30% são de oxigênio. A porcentagem não depende da quantidade de óxido: vale para 1 g ou para uma tonelada.\n\n35% conta um só átomo de ferro, 56/160. 30% é a porcentagem de oxigênio. 56% toma a massa atômica do ferro como porcentagem. E 77,8% é a porcentagem de ferro no FeO, 56/72.",
      v: { i: () => qual((atomos("Fe2O3").Fe * MASSAS.Fe) / M("Fe2O3"), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["20 g", "40 g", "10 g", "12 g", "8 g"];
    return {
      d: "facil",
      e: "Com Mg = 24 e O = 16 (em g/mol), que massa de óxido de magnésio se forma na queima completa de 0,5 mol de magnésio, segundo 2 Mg + O₂ → 2 MgO?",
      o,
      x: "A proporção entre Mg e MgO é de 2 : 2, isto é, 1 : 1: 0,5 mol de magnésio formam 0,5 mol de MgO. A massa molar do MgO é 24 + 16 = 40 g/mol, e 0,5 mol pesam 20 g. Desses, 12 g são o magnésio que reagiu, e 8 g, o oxigênio incorporado.\n\n40 g é a massa de um mol inteiro de MgO. 10 g divide pelo coeficiente 2, como se 2 mol de Mg formassem 1 mol de óxido. 12 g é a massa do magnésio. E 8 g é a massa de oxigênio incorporada.",
      v: { i: () => { const n = reage([[2, "Mg"], [1, "O2"]], [[2, "MgO"]], { Mg: 0.5 }); return qual(n.MgO * M("MgO"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["1 mol de O₂", "2 mol de O₂", "1 mol de H₂", "Nenhum reagente sobra", "3 mol de O₂"];
    return {
      d: "facil",
      e: "Na reação 2 H₂ + O₂ → 2 H₂O, misturam-se 4 mol de H₂ e 3 mol de O₂. Depois da reação completa, o que sobra?",
      o,
      x: "Os 4 mol de H₂ precisam de 4/2 = 2 mol de O₂. Há 3 mol de O₂, então o H₂ é o limitante: reage todo, consome 2 mol de O₂ e forma 4 mol de água. Sobra 3 − 2 = 1 mol de O₂.\n\n2 mol de O₂ é a quantidade consumida, e não a que sobra. 1 mol de H₂ trata o O₂ como limitante, usando a proporção 1 : 1. “Nenhum reagente sobra” supõe as quantidades na proporção exata, que seria 4 : 2. E 3 mol de O₂ supõe que o oxigênio não reaja.",
      v: { i: () => { const n = reage([[2, "H2"], [1, "O2"]], [[2, "H2O"]], { H2: 4, O2: 3 }); return unicoV(o.map((t) => { const m = t.match(/^(\d+) mol de (H|O)₂$/); if (!m) return n.H2 < 1e-9 && n.O2 < 1e-9; const outro = m[2] === "H" ? n.O2 : n.H2; return Math.abs(n[m[2] + "2"] - Number(m[1])) < 1e-9 && outro < 1e-9; })); } },
    };
  })(),
  (() => {
    const o = ["75%", "42%", "56%", "133%", "25%"];
    return {
      d: "facil",
      e: "Com Ca = 40, C = 12 e O = 16 (em g/mol), a decomposição de 100 g de CaCO₃, segundo CaCO₃ → CaO + CO₂, produziu 42 g de CaO. Qual foi o rendimento da reação?",
      o,
      x: "O rendimento compara o que se obteve com o máximo possível. 100 g de CaCO₃ (100 g/mol) são 1 mol, que formariam, no máximo, 1 mol de CaO, com 56 g/mol: 56 g. Obtiveram-se 42 g, e o rendimento é 42/56 = 0,75 = 75%.\n\n42% divide os 42 g pela massa de reagente, 100 g, e não pela massa máxima de CaO. 56% é a massa máxima de CaO tomada como porcentagem. 133% inverte a divisão, 56/42; um rendimento acima de 100% é impossível. E 25% é a fração que deixou de se formar.",
      v: { i: () => { const n = reage([[1, "CaCO3"]], [[1, "CaO"], [1, "CO2"]], { CaCO3: 100 / M("CaCO3") }); return qual(42 / (n.CaO * M("CaO")), o, 1e-9); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["72 g", "74 g", "90 g", "36 g", "64 g"];
    return {
      d: "media",
      e: "Com H = 1 e O = 16 (em g/mol), misturam-se 10 g de H₂ e 64 g de O₂, que reagem segundo 2 H₂ + O₂ → 2 H₂O. Que massa de água se forma?",
      o,
      x: "Em mols: 10/2 = 5 mol de H₂ e 64/32 = 2 mol de O₂. Os 2 mol de O₂ precisariam de 4 mol de H₂, e há 5: o O₂ é o limitante, e sobra 1 mol (2 g) de H₂. Os 2 mol de O₂ formam 4 mol de água, 4 · 18 = 72 g. Pela conservação da massa: dos 74 g de reagentes, 2 g sobram, e 72 g viram água.\n\n74 g soma as massas dos reagentes, como se tudo reagisse. 90 g toma o H₂ como limitante, com 5 mol de água. 36 g usa a proporção 1 : 1 entre O₂ e água. E 64 g supõe que a massa de água seja a do oxigênio.",
      v: { i: () => { const n = reage([[2, "H2"], [1, "O2"]], [[2, "H2O"]], { H2: 10 / M("H2"), O2: 64 / M("O2") }); return qual(n.H2O * M("H2O"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["4 g de H₂", "6 g de H₂", "2 g de H₂", "8 g de H₂", "Não sobra reagente"];
    return {
      d: "media",
      e: "Com N = 14 e H = 1 (em g/mol), misturam-se 28 g de N₂ e 10 g de H₂, que reagem segundo N₂ + 3 H₂ → 2 NH₃. Que massa do reagente em excesso sobra?",
      o,
      x: "Em mols: 28/28 = 1 mol de N₂ e 10/2 = 5 mol de H₂. O mol de N₂ precisa de 3 mol de H₂: o N₂ é o limitante, e sobram 5 − 3 = 2 mol de H₂, que pesam 2 · 2 = 4 g. Formam-se 2 mol de NH₃, 34 g, e a massa confere: 28 + 10 = 34 + 4.\n\n6 g é a massa de H₂ que reage, e não a que sobra. 2 g toma os 2 mol que sobram como se fossem gramas. 8 g usa a proporção 1 : 1 entre N₂ e H₂, consumindo só 1 mol de hidrogênio. E sobra, sim, reagente: as quantidades não estão na proporção 1 : 3.",
      v: { i: () => { const n = reage([[1, "N2"], [3, "H2"]], [[2, "NH3"]], { N2: 28 / M("N2"), H2: 10 / M("H2") }); const sobra = n.H2 * M("H2"); return unicoV(o.map((t) => { const m = t.match(/^(\d+) g de H₂$/); return m ? Math.abs(Number(m[1]) - sobra) < 1e-9 && n.N2 < 1e-9 : sobra < 1e-9 && n.N2 < 1e-9; })); } },
    };
  })(),
  (() => {
    const o = ["≈ 35,8 L", "44,8 L", "≈ 8,96 L", "1,6 L", "≈ 70,4 L"];
    return {
      d: "media",
      e: "Com Ca = 40, C = 12 e O = 16 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, que volume de CO₂ se obtém, nessas condições, pela decomposição completa de 200 g de um calcário com 80% de CaCO₃ (CaCO₃ → CaO + CO₂)?",
      o,
      x: "Só 80% do calcário é CaCO₃: 0,8 · 200 = 160 g, ou 160/100 = 1,6 mol. Cada mol de CaCO₃ libera 1 mol de CO₂, e 1,6 mol de gás ocupam 1,6 · 22,4 ≅ 35,8 L nas condições normais. As impurezas não produzem CO₂.\n\n44,8 L trata os 200 g como CaCO₃ puro. 8,96 L usa os 20% de impurezas no lugar dos 80%. 1,6 L toma o número de mols como volume. E 70,4 L toma a massa de CO₂ formada, 70,4 g, como volume.",
      v: { i: () => { const n = reage([[1, "CaCO3"]], [[1, "CaO"], [1, "CO2"]], { CaCO3: (0.8 * 200) / M("CaCO3") }); return qual(n.CO2 * 22.4, o, 0.005); } },
    };
  })(),
  (() => {
    const o = ["10,2 g", "17 g", "8,4 g", "6,8 g", "20,4 g"];
    return {
      d: "media",
      e: "Com N = 14 e H = 1 (em g/mol), 14 g de N₂ reagem com H₂ em excesso segundo N₂ + 3 H₂ → 2 NH₃, com rendimento de 60%. Que massa de amônia se obtém?",
      o,
      x: "14 g de N₂ são 0,5 mol, que formariam, com rendimento total, 2 · 0,5 = 1 mol de NH₃, isto é, 17 g. Com 60% de rendimento, obtêm-se 0,6 · 17 = 10,2 g. O rendimento se aplica ao produto previsto pela equação, e não à massa de reagente.\n\n17 g é a massa teórica, com rendimento de 100%. 8,4 g aplica os 60% à massa de N₂. 6,8 g usa 40%, a fração que não se formou. E 20,4 g aplica os 60% a 2 mol de NH₃, como se houvesse 1 mol de N₂.",
      v: { i: () => { const n = reage([[1, "N2"], [3, "H2"]], [[2, "NH3"]], { N2: 14 / M("N2") }); return qual(0.6 * n.NH3 * M("NH3"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["15 L", "20 L", "10 L", "5 L", "30 L"];
    return {
      d: "media",
      e: "Nas mesmas condições de temperatura e pressão, 10 L de CO reagem com 10 L de O₂ segundo 2 CO + O₂ → 2 CO₂. Qual é o volume total de gás depois da reação completa?",
      o,
      x: "Nas mesmas condições, volumes de gás são proporcionais aos números de mols (lei de Avogadro), e os coeficientes valem também para os volumes. Os 10 L de CO consomem 5 L de O₂ e formam 10 L de CO₂; sobram 5 L de O₂. O volume final é 10 + 5 = 15 L: diferentemente da massa, o volume de gás não se conserva numa reação.\n\n20 L supõe que o volume se conserve, como a massa. 10 L conta só o CO₂ formado. 5 L conta só o O₂ que sobra. E 30 L soma o CO₂ formado aos 20 L iniciais, sem descontar os reagentes consumidos.",
      /* volumes tratados como quantidades proporcionais aos mols */
      v: { i: () => { const n = reage([[2, "CO"], [1, "O2"]], [[2, "CO2"]], { CO: 10, O2: 10 }); return qual(n.CO + n.O2 + n.CO2, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["196 g", "98 g", "160 g", "392 g", "64 g"];
    return {
      d: "media",
      e: "Com S = 32, H = 1 e O = 16 (em g/mol), o ácido sulfúrico pode ser produzido em três etapas: S + O₂ → SO₂; 2 SO₂ + O₂ → 2 SO₃; SO₃ + H₂O → H₂SO₄. Que massa de H₂SO₄ se obtém a partir de 64 g de enxofre, com rendimento total em cada etapa?",
      o,
      x: "64 g de enxofre são 64/32 = 2 mol. Cada etapa preserva a quantidade de enxofre: 2 mol de S dão 2 mol de SO₂, que dão 2 mol de SO₃, que dão 2 mol de H₂SO₄. Somando as etapas, a relação global é de 1 mol de S para 1 mol de ácido. Com 98 g/mol, são 2 · 98 = 196 g.\n\n98 g corresponde a 1 mol, como se 64 g fossem um mol de enxofre (64 g/mol é a massa molar do SO₂). 160 g é a massa de SO₃ formada na segunda etapa. 392 g multiplica pelo coeficiente 2 da segunda etapa, que já está compensado pelos 2 mol de SO₂. E 64 g supõe que a massa de ácido seja a do enxofre.",
      /* encadeia as três reações, cada uma com o produto da anterior */
      v: { i: () => { const a = reage([[1, "S"], [1, "O2"]], [[1, "SO2"]], { S: 64 / M("S") }); const b = reage([[2, "SO2"], [1, "O2"]], [[2, "SO3"]], { SO2: a.SO2 }); const c = reage([[1, "SO3"], [1, "H2O"]], [[1, "H2SO4"]], { SO3: b.SO3 }); return qual(c.H2SO4 * M("H2SO4"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["28 L", "22,4 L", "11,2 L", "16,8 L", "33,6 L"];
    return {
      d: "media",
      e: "Com o volume molar de 22,4 L/mol nas condições normais, uma mistura de 0,5 mol de magnésio e 0,5 mol de alumínio reage com ácido clorídrico em excesso: Mg + 2 HCl → MgCl₂ + H₂ e 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂. Que volume de H₂ se forma, nessas condições?",
      o,
      x: "O magnésio libera 1 mol de H₂ por mol de metal: 0,5 mol de H₂. O alumínio libera 3 mol de H₂ para cada 2 mol de metal: 0,5 · 3/2 = 0,75 mol de H₂. No total, 1,25 mol, que ocupam 1,25 · 22,4 = 28 L nas condições normais.\n\n22,4 L supõe 1 mol de H₂, meio mol para cada metal. 11,2 L conta só o magnésio. 16,8 L conta só o alumínio. E 33,6 L supõe 3 mol de H₂ por mol de alumínio, esquecendo o coeficiente 2 do metal.",
      v: { i: () => { const mg = reage([[1, "Mg"], [2, "HCl"]], [[1, "MgCl2"], [1, "H2"]], { Mg: 0.5 }); const al = reage([[2, "Al"], [6, "HCl"]], [[2, "AlCl3"], [3, "H2"]], { Al: 0.5 }); return qual((mg.H2 + al.H2) * 22.4, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["100 mL", "50 mL", "25 mL", "200 mL", "10 mL"];
    return {
      d: "media",
      e: "Que volume de solução de NaOH 0,1 mol/L é necessário para neutralizar completamente 50 mL de solução de HCl 0,2 mol/L, segundo HCl + NaOH → NaCl + H₂O?",
      o,
      x: "A quantidade de ácido é n = C · V = 0,2 · 0,05 = 0,01 mol. A reação é 1 : 1, então são necessários 0,01 mol de NaOH. Com 0,1 mol/L, o volume é V = n/C = 0,01/0,1 = 0,1 L = 100 mL. A base, com metade da concentração do ácido, precisa do dobro do volume.\n\n50 mL supõe volumes iguais, esquecendo a diferença de concentrações. 25 mL inverte a relação entre as concentrações. 200 mL dobra o volume duas vezes. E 10 mL toma o número de mols de ácido, 0,01, como se fosse o volume em litros.",
      /* volume de base em que não sobra nem ácido nem base */
      v: { i: () => qual(bissecao((V) => { const n = reage([[1, "HCl"], [1, "NaOH"]], [[1, "NaCl"], [1, "H2O"]], { HCl: 0.2 * 0.05, NaOH: 0.1 * V }); return n.HCl - n.NaOH; }, 0, 1, 100), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["20 mL", "10 mL", "40 mL", "5 mL", "4 mL"];
    return {
      d: "media",
      e: "Que volume de solução de NaOH 0,2 mol/L neutraliza completamente 20 mL de solução de H₂SO₄ 0,1 mol/L, segundo H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O?",
      o,
      x: "A quantidade de ácido é 0,1 · 0,02 = 0,002 mol. Cada mol de H₂SO₄ tem dois hidrogênios ionizáveis e consome 2 mol de NaOH: são necessários 0,004 mol de base. Com 0,2 mol/L, o volume é 0,004/0,2 = 0,02 L = 20 mL.\n\n10 mL usa a proporção 1 : 1, esquecendo que o ácido é diprótico. 40 mL usa, para a base, a concentração do ácido, 0,1 mol/L. 5 mL divide pelo coeficiente 2 em vez de multiplicar. E 4 mL toma a quantidade de base em mols, 0,004, como se fosse o volume em litros.",
      v: { i: () => qual(bissecao((V) => { const n = reage([[1, "H2SO4"], [2, "NaOH"]], [[1, "Na2SO4"], [2, "H2O"]], { H2SO4: 0.1 * 0.02, NaOH: 0.2 * V }); return 2 * n.H2SO4 - n.NaOH; }, 0, 1, 100), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["CH₂O", "CHO", "C₂H₄O₂", "C₆H₁₂O₆", "C₆HO₈"];
    return {
      d: "media",
      e: "Com H = 1, C = 12 e O = 16 (em g/mol), um composto tem 40% de carbono, 6,7% de hidrogênio e 53,3% de oxigênio, em massa. Qual é a sua fórmula mínima?",
      o,
      x: "Em 100 g do composto há 40 g de C, 6,7 g de H e 53,3 g de O. Em mols: 40/12 ≅ 3,33; 6,7/1 = 6,7; 53,3/16 ≅ 3,33. Dividindo pelo menor valor, 3,33, a proporção é 1 : 2 : 1, e a fórmula mínima é CH₂O. Ela dá só a proporção entre os átomos; a fórmula molecular pode ser um múltiplo dela.\n\nCHO divide as porcentagens pelos números atômicos (6, 1 e 8) em vez das massas atômicas. C₂H₄O₂ e C₆H₁₂O₆ têm a mesma proporção, mas são fórmulas moleculares, múltiplas da mínima. E C₆HO₈ usa as porcentagens diretamente, sem dividir pelas massas atômicas.",
      /* mols por 100 g, divididos pelo menor e arredondados (conferindo que ficam perto de inteiros) */
      v: { i: () => { const mol = { C: 40 / 12, H: 6.7 / 1, O: 53.3 / 16 }; const menor = Math.min(...Object.values(mol)); const idx = Object.fromEntries(Object.entries(mol).map(([e, n]) => { const r = n / menor; if (Math.abs(r - Math.round(r)) > 0.02) throw new Error("proporção não inteira"); return [e, Math.round(r)]; })); const minima = Object.entries(idx).map(([e, k]) => e + (k > 1 ? k : "")).join(""); return unicoV(o.map((t) => mesmaFormula(t, minima))); } },
    };
  })(),
  (() => {
    const o = ["C₆H₁₂O₆", "CH₂O", "C₃H₆O₃", "C₁₂H₂₂O₁₁", "C₆H₆O₆"];
    return {
      d: "media",
      e: "Com H = 1, C = 12 e O = 16 (em g/mol), a fórmula mínima de um açúcar é CH₂O, e a sua massa molar é 180 g/mol. Qual é a sua fórmula molecular?",
      o,
      x: "A massa da fórmula mínima é 12 + 2 + 16 = 30 g/mol. A massa molar, 180 g/mol, é 180/30 = 6 vezes maior: a molécula contém 6 unidades CH₂O, e a fórmula molecular é C₆H₁₂O₆, a da glicose. A proporção entre os átomos continua 1 : 2 : 1.\n\nCH₂O é a própria fórmula mínima, com massa de apenas 30 g/mol. C₃H₆O₃ tem 90 g/mol, metade do valor dado. C₁₂H₂₂O₁₁ é a sacarose, de 342 g/mol, que nem segue a proporção CH₂O. E C₆H₆O₆ multiplica por 6 só o carbono e o oxigênio.",
      v: { i: () => { const k = 180 / M("CH2O"); if (Math.abs(k - Math.round(k)) > 1e-9) throw new Error("fator"); const molecular = `C${k}H${2 * k}O${k}`; return unicoV(o.map((t) => mesmaFormula(t, molecular) && Math.abs(M(semIndices(t)) - 180) < 1e-9)); } },
    };
  })(),
  (() => {
    const o = ["C₃H₈", "C₃H₄", "C₃H₆", "C₆H₁₆", "C₄H₁₀"];
    return {
      d: "media",
      e: "A combustão completa de 0,1 mol de um hidrocarboneto produziu 0,3 mol de CO₂ e 0,4 mol de H₂O. Qual é a fórmula molecular do hidrocarboneto?",
      o,
      x: "Todo o carbono do hidrocarboneto vai para o CO₂, e todo o hidrogênio, para a água. Por mol de hidrocarboneto: 0,3/0,1 = 3 mol de CO₂, isto é, 3 átomos de C; e 0,4/0,1 = 4 mol de H₂O, com 2 átomos de H cada, isto é, 8 átomos de H. A fórmula é C₃H₈, o propano, cuja combustão é C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.\n\nC₃H₄ esquece que cada molécula de água tem dois hidrogênios. C₃H₆ conta 6 hidrogênios, como se se formassem 3 mol de água, a mesma quantidade de CO₂. C₆H₁₆ dobra os índices, como se a quantidade queimada fosse 0,05 mol; nem existe um hidrocarboneto assim. E C₄H₁₀, o butano, formaria 4 mol de CO₂ e 5 de água por mol queimado.",
      /* conservação dos átomos de C e H; confere que a combustão com a fórmula achada fica balanceada */
      v: { i: () => { const inteiro = (r) => { if (Math.abs(r - Math.round(r)) > 1e-9) throw new Error("índice não inteiro"); return Math.round(r); }; const x = inteiro(0.3 / 0.1), y = inteiro((2 * 0.4) / 0.1), f = `C${x}H${y}`; if (!balanceada([[1, f], [x + y / 4, "O2"]], [[x, "CO2"], [y / 2, "H2O"]])) throw new Error("combustão"); return unicoV(o.map((t) => mesmaFormula(t, f))); } },
    };
  })(),
  (() => {
    const o = ["40 g", "8 g", "20 g", "55 g", "33 g"];
    return {
      d: "media",
      e: "Com H = 1, C = 12 e O = 16 (em g/mol), que massa de oxigênio é necessária para queimar completamente 11 g de propano, segundo C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O?",
      o,
      x: "A massa molar do propano é 3 · 12 + 8 · 1 = 44 g/mol, e 11 g são 0,25 mol. A equação pede 5 mol de O₂ por mol de propano: 5 · 0,25 = 1,25 mol de O₂. Com 32 g/mol, a massa é 1,25 · 32 = 40 g.\n\n8 g usa a proporção 1 : 1 entre propano e oxigênio. 20 g usa 16 g/mol para o O₂, a massa de um átomo de oxigênio, e não da molécula. 55 g multiplica a massa de propano por 5, aplicando o coeficiente à massa, e não aos mols. E 33 g é a massa de CO₂ formada.",
      v: { i: () => { const n = reage([[1, "C3H8"], [5, "O2"]], [[3, "CO2"], [4, "H2O"]], { C3H8: 11 / M("C3H8"), O2: 1000 }); return qual((1000 - n.O2) * M("O2"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["224 kg", "112 kg", "320 kg", "168 kg", "96 kg"];
    return {
      d: "media",
      e: "Com Fe = 56, C = 12 e O = 16 (em g/mol), no alto-forno o óxido de ferro é reduzido segundo Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. Que massa de ferro se obtém de 320 kg de Fe₂O₃, com rendimento total?",
      o,
      x: "A massa molar do Fe₂O₃ é 160 g/mol, e 320 kg correspondem a 2.000 mol. Cada mol de óxido dá 2 mol de ferro: 4.000 mol, que pesam 4.000 · 56 = 224.000 g = 224 kg. É o mesmo que aplicar aos 320 kg a fração de ferro no óxido, 70%.\n\n112 kg usa a proporção 1 : 1 entre óxido e ferro. 320 kg supõe que toda a massa do óxido vire ferro. 168 kg usa o coeficiente 3 do CO no lugar do 2 do ferro. E 96 kg é a massa de oxigênio retirada do óxido, 320 − 224.",
      v: { i: () => { const n = reage([[1, "Fe2O3"], [3, "CO"]], [[2, "Fe"], [3, "CO2"]], { Fe2O3: 320e3 / M("Fe2O3") }); return qual(n.Fe * M("Fe"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,72 g", "≈ 1,44 g", "≈ 2,15 g", "0,005 g", "≈ 0,29 g"];
    return {
      d: "media",
      e: "Com Ag = 108 e Cl = 35,5 (em g/mol), misturam-se 100 mL de solução de AgNO₃ 0,1 mol/L e 50 mL de solução de NaCl 0,1 mol/L, que reagem segundo AgNO₃ + NaCl → AgCl + NaNO₃. Que massa de AgCl precipita?",
      o,
      x: "Em mols: 0,1 · 0,1 = 0,01 mol de AgNO₃ e 0,1 · 0,05 = 0,005 mol de NaCl. A reação é 1 : 1, e o NaCl, em menor quantidade, é o limitante: formam-se 0,005 mol de AgCl. Com 108 + 35,5 = 143,5 g/mol, a massa é 0,005 · 143,5 ≅ 0,72 g. Sobram 0,005 mol de AgNO₃ em solução.\n\n1,44 g toma o AgNO₃ como limitante, com 0,01 mol de precipitado. 2,15 g soma as quantidades dos dois reagentes. 0,005 g toma o número de mols como massa. E 0,29 g é a massa do NaCl que reagiu, 0,005 · 58,5.",
      v: { i: () => { const n = reage([[1, "AgNO3"], [1, "NaCl"]], [[1, "AgCl"], [1, "NaNO3"]], { AgNO3: 0.1 * 0.1, NaCl: 0.1 * 0.05 }); return qual(n.AgCl * M("AgCl"), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 4,9 L", "≈ 4,5 L", "≈ 0,44 L", "≈ 9,8 L", "≈ 24,6 L"];
    return {
      d: "media",
      e: "Com Zn = 65 (em g/mol) e R = 0,082 atm·L/(mol·K), 13 g de zinco reagem com ácido clorídrico em excesso segundo Zn + 2 HCl → ZnCl₂ + H₂. Que volume de H₂ se obtém a 27 °C e 1 atm?",
      o,
      x: "13 g de zinco são 13/65 = 0,2 mol, que liberam 0,2 mol de H₂. Pela equação dos gases, V = n · R · T/p = 0,2 · 0,082 · 300/1 ≅ 4,92 L, com a temperatura em kelvin, 27 + 273 = 300 K.\n\n4,5 L usa o volume molar das condições normais, 22,4 L/mol, que vale a 0 °C, e não a 27 °C. 0,44 L usa a temperatura em graus Celsius. 9,8 L conta 2 mol de H₂ por mol de zinco, confundindo com os 2 mol de HCl. E 24,6 L é o volume de um mol inteiro de gás nessas condições.",
      v: { i: () => { const n = reage([[1, "Zn"], [2, "HCl"]], [[1, "ZnCl2"], [1, "H2"]], { Zn: 13 / M("Zn") }); return qual((n.H2 * 0.082 * 300) / 1, o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["35 g", "28 g", "22,4 g", "70 g", "43,75 g"];
    return {
      d: "media",
      e: "Com N = 14 e H = 1 (em g/mol), deseja-se obter 34 g de amônia pela reação N₂ + 3 H₂ → 2 NH₃, cujo rendimento é de 80%. Que massa de N₂ é necessária?",
      o,
      x: "34 g de NH₃ são 2 mol. Com rendimento de 80%, a quantidade teórica precisa ser 2/0,8 = 2,5 mol de NH₃, que exigem 2,5/2 = 1,25 mol de N₂, isto é, 1,25 · 28 = 35 g. Com rendimento menor que 100%, é preciso mais reagente do que a conta ideal indica.\n\n28 g é a massa necessária com rendimento de 100%. 22,4 g aplica os 80% no sentido errado, reduzindo o reagente em vez de aumentá-lo. 70 g usa a proporção 1 : 1 entre N₂ e NH₃. E 43,75 g divide pelo rendimento duas vezes.",
      /* bisseção na massa de N₂ até que 80% do NH₃ teórico dê 34 g */
      v: { i: () => qual(bissecao((m) => 0.8 * reage([[1, "N2"], [3, "H2"]], [[2, "NH3"]], { N2: m / M("N2") }).NH3 * M("NH3") - 34, 1, 1000, 100), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["89 g", "133,5 g", "98 g", "44,5 g", "267 g"];
    return {
      d: "media",
      e: "Com Al = 27 e Cl = 35,5 (em g/mol), misturam-se 27 g de alumínio e 71 g de cloro, que reagem segundo 2 Al + 3 Cl₂ → 2 AlCl₃. Que massa de AlCl₃ se forma?",
      o,
      x: "Em mols: 27/27 = 1 mol de Al e 71/71 = 1 mol de Cl₂. O alumínio precisaria de 1,5 mol de Cl₂, e só há 1: o cloro é o limitante. Com 1 mol de Cl₂, formam-se 2/3 mol de AlCl₃ e, com 27 + 3 · 35,5 = 133,5 g/mol, a massa é 2/3 · 133,5 = 89 g. Sobram 1/3 mol, ou 9 g, de alumínio: 27 + 71 = 89 + 9.\n\n133,5 g toma o alumínio como limitante. 98 g soma as massas dos reagentes, como se tudo reagisse. 44,5 g usa 1/3 mol de produto. E 267 g corresponde a 2 mol de AlCl₃, lendo os coeficientes como quantidades.",
      v: { i: () => { const n = reage([[2, "Al"], [3, "Cl2"]], [[2, "AlCl3"]], { Al: 27 / M("Al"), Cl2: 71 / M("Cl2") }); return qual(n.AlCl3 * M("AlCl3"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["9 · 10²³", "3 · 10²³", "1,8 · 10²⁴", "1,5 · 10²⁴", "6 · 10²³"];
    return {
      d: "media",
      e: "Com a constante de Avogadro igual a 6 · 10²³ por mol, quantos átomos de oxigênio há em 0,5 mol de carbonato de cálcio, CaCO₃?",
      o,
      x: "Cada fórmula de CaCO₃ tem 3 átomos de oxigênio; em 0,5 mol de CaCO₃ há 3 · 0,5 = 1,5 mol de átomos de oxigênio, isto é, 1,5 · 6 · 10²³ = 9 · 10²³ átomos. É preciso distinguir o número de fórmulas, 3 · 10²³, do número de átomos de cada elemento.\n\n3 · 10²³ conta as fórmulas de CaCO₃, e não os átomos de oxigênio. 1,8 · 10²⁴ conta os oxigênios de um mol inteiro. 1,5 · 10²⁴ conta todos os 5 átomos de cada fórmula. E 6 · 10²³ conta só 2 oxigênios por fórmula, como no CO₂.",
      v: { i: () => qual(atomos("CaCO3").O * 0.5 * 6e23, o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["33 g", "44 g", "66 g", "64 g", "27 g"];
    return {
      d: "media",
      e: "Com H = 1, C = 12 e O = 16 (em g/mol), queimam-se 16 g de metano com 48 g de oxigênio, segundo CH₄ + 2 O₂ → CO₂ + 2 H₂O. Que massa de CO₂ se forma?",
      o,
      x: "Em mols: 16/16 = 1 mol de CH₄ e 48/32 = 1,5 mol de O₂. O metano precisaria de 2 mol de O₂, e só há 1,5: o oxigênio é o limitante. Com 1,5 mol de O₂, reagem 0,75 mol de CH₄, e formam-se 0,75 mol de CO₂, 0,75 · 44 = 33 g, além de 1,5 mol de água. Sobram 0,25 mol, ou 4 g, de metano.\n\n44 g toma o metano como limitante. 66 g usa a proporção 1 : 1 entre O₂ e CO₂. 64 g soma as massas dos reagentes. E 27 g é a massa de água formada, 1,5 · 18, e não a de CO₂.",
      v: { i: () => { const n = reage([[1, "CH4"], [2, "O2"]], [[1, "CO2"], [2, "H2O"]], { CH4: 16 / M("CH4"), O2: 48 / M("O2") }); return qual(n.CO2 * M("CO2"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["≈ 36%", "≈ 7%", "≈ 56%", "≈ 64%", "90%"];
    return {
      d: "media",
      e: "Com Cu = 63,5, S = 32, O = 16 e H = 1 (em g/mol), qual é a porcentagem em massa de água no sulfato de cobre pentaidratado, CuSO₄·5H₂O?",
      o,
      x: "A massa molar do sal hidratado é a do CuSO₄ (63,5 + 32 + 64 = 159,5 g/mol) mais a de 5 H₂O (5 · 18 = 90 g/mol): 249,5 g/mol. A fração de água é 90/249,5 ≅ 0,36 = 36%. É a massa que se perde ao aquecer o sal até ele ficar anidro, quando os cristais azuis ficam brancos.\n\n7% conta só uma molécula de água, 18/249,5. 56% divide a água pela massa do sal anidro, e não pela do hidratado. 64% é a fração do sal anidro. E 90% toma a massa das 5 águas, 90 g/mol, como porcentagem.",
      v: { i: () => qual((5 * M("H2O")) / M("CuSO4·5H2O"), o, 0.02) },
    };
  })(),
  (() => {
    const o = ["0,04 mol de HCl", "0,04 mol de NaOH", "0,06 mol de HCl", "Nada, porque ácido e base se neutralizam", "0,16 mol de HCl"];
    return {
      d: "media",
      e: "Misturam-se 100 mL de HCl 1 mol/L e 60 mL de NaOH 1 mol/L, que reagem segundo HCl + NaOH → NaCl + H₂O. Depois da reação, o que sobra em excesso?",
      o,
      x: "Em mols: 1 · 0,1 = 0,1 mol de HCl e 1 · 0,06 = 0,06 mol de NaOH. A reação é 1 : 1, e a base é o limitante: reage toda, consumindo 0,06 mol de ácido. Sobram 0,1 − 0,06 = 0,04 mol de HCl, e a solução final é ácida.\n\n0,04 mol de NaOH inverte o papel dos reagentes. 0,06 mol de HCl é a quantidade de ácido que reagiu, e não a que sobrou. A neutralização só é completa quando os mols de ácido e de base são iguais. E 0,16 mol soma as quantidades em vez de subtrair.",
      v: { i: () => { const n = reage([[1, "HCl"], [1, "NaOH"]], [[1, "NaCl"], [1, "H2O"]], { HCl: 0.1, NaOH: 0.06 }); return unicoV(o.map((t) => { const m = t.match(/^([\d,]+) mol de (HCl|NaOH)$/); if (!m) return n.HCl < 1e-12 && n.NaOH < 1e-12; const outro = m[2] === "HCl" ? n.NaOH : n.HCl; return Math.abs(valor(m[1]) - n[m[2]]) < 1e-9 && outro < 1e-12; })); } },
    };
  })(),
  (() => {
    const o = ["3,3 kg", "3,67 kg", "0,9 kg", "2,4 kg", "2,1 kg"];
    return {
      d: "media",
      e: "Com C = 12 e O = 16 (em g/mol), queima-se completamente 1 kg de carvão com 90% de carbono, segundo C + O₂ → CO₂. Que massa de CO₂ se forma?",
      o,
      x: "O carvão tem 900 g de carbono, isto é, 900/12 = 75 mol. Cada mol de carbono forma 1 mol de CO₂, de 44 g/mol: 75 · 44 = 3.300 g = 3,3 kg. A massa de gás é maior que a de carvão porque cada átomo de carbono incorpora dois átomos de oxigênio.\n\n3,67 kg considera o carvão puro, com 1 kg de carbono. 0,9 kg é a massa de carbono, e não a de CO₂. 2,4 kg é a massa de oxigênio consumida, 75 · 32. E 2,1 kg supõe combustão incompleta, que formaria CO, de 28 g/mol.",
      v: { i: () => { const n = reage([[1, "C"], [1, "O2"]], [[1, "CO2"]], { C: (0.9 * 1000) / M("C") }); return qual(n.CO2 * M("CO2"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["80 g", "32 g", "11,25 g", "62 g", "50 g"];
    return {
      d: "media",
      e: "Numa experiência, 12 g de carbono reagem exatamente com 32 g de oxigênio. Mantida a mesma proporção, que massa de oxigênio reage com 30 g de carbono?",
      o,
      x: "Pela lei de Proust, das proporções definidas, as massas que reagem guardam sempre a mesma razão: 32 g de oxigênio para 12 g de carbono. Para 30 g de carbono, 2,5 vezes mais, são necessários 2,5 · 32 = 80 g de oxigênio, formando 110 g de CO₂.\n\n32 g supõe que a massa de oxigênio não mude com a de carbono. 11,25 g inverte a proporção, 30 · 12/32. 62 g soma as duas massas dadas em vez de manter a razão. E 50 g mantém a diferença de 20 g entre as massas (32 − 12), em vez da razão entre elas.",
      /* confere que 12 g de C e 32 g de O₂ reagem sem sobra; depois, O₂ consumido por 30 g de C */
      v: { i: () => { const base = reage([[1, "C"], [1, "O2"]], [[1, "CO2"]], { C: 12 / M("C"), O2: 32 / M("O2") }); if (base.C > 1e-12 || base.O2 > 1e-12) throw new Error("experiência de referência"); const n = reage([[1, "C"], [1, "O2"]], [[1, "CO2"]], { C: 30 / M("C"), O2: 1000 }); return qual((1000 - n.O2) * M("O2"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["3,36 L", "1,12 L", "2,24 L", "4,8 L", "0,15 L"];
    return {
      d: "media",
      e: "Com H = 1, C = 12, O = 16 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, que volume de O₂, nessas condições, é consumido na combustão completa de 2,3 g de etanol, segundo C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O?",
      o,
      x: "A massa molar do etanol é 2 · 12 + 6 · 1 + 16 = 46 g/mol, e 2,3 g são 0,05 mol. A equação pede 3 mol de O₂ por mol de etanol: 0,15 mol, que ocupam 0,15 · 22,4 = 3,36 L nas condições normais.\n\n1,12 L usa a proporção 1 : 1 entre etanol e oxigênio. 2,24 L é o volume de CO₂ formado, 0,1 mol. 4,8 L toma a massa de O₂ consumida, 4,8 g, como volume. E 0,15 L toma o número de mols como volume.",
      v: { i: () => { const n = reage([[1, "C2H6O"], [3, "O2"]], [[2, "CO2"], [3, "H2O"]], { C2H6O: 2.3 / M("C2H6O"), O2: 1000 }); return qual((1000 - n.O2) * 22.4, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["2 mol de FeCl₃, e sobra 1 mol de Fe", "3 mol de FeCl₃, e sobra 1,5 mol de Cl₂", "2 mol de FeCl₃, e não sobra nada", "3 mol de FeCl₃, e não sobra nada", "2 mol de FeCl₃, e sobra 1 mol de Cl₂"];
    return {
      d: "media",
      e: "Misturam-se 3 mol de ferro e 3 mol de cloro, que reagem segundo 2 Fe + 3 Cl₂ → 2 FeCl₃. Depois da reação completa, quantos mols de FeCl₃ se formam, e o que sobra?",
      o,
      x: "Os 3 mol de Fe precisariam de 4,5 mol de Cl₂, e só há 3: o cloro é o limitante. Os 3 mol de Cl₂ reagem com 2 mol de Fe e formam 2 mol de FeCl₃. Sobra 3 − 2 = 1 mol de ferro.\n\n“3 mol de FeCl₃” toma o ferro como limitante, o que exigiria mais cloro do que há; por isso, também não poderia sobrar cloro. “Não sobra nada” supõe as quantidades na proporção exata, 2 : 3. E “sobra 1 mol de Cl₂” acerta o produto, mas troca o reagente que sobra: todo o cloro reage.",
      v: { i: () => { const n = reage([[2, "Fe"], [3, "Cl2"]], [[2, "FeCl3"]], { Fe: 3, Cl2: 3 }); return unicoV(o.map((t) => { const m = t.match(/^(\d+) mol de FeCl₃, e (?:sobra ([\d,]+) mol de (Fe|Cl₂)|não sobra nada)$/); if (Math.abs(Number(m[1]) - n.FeCl3) > 1e-9) return false; if (!m[2]) return n.Fe < 1e-12 && n.Cl2 < 1e-12; const k = m[3] === "Fe" ? "Fe" : "Cl2", outro = k === "Fe" ? n.Cl2 : n.Fe; return Math.abs(valor(m[2]) - n[k]) < 1e-9 && outro < 1e-12; })); } },
    };
  })(),
  (() => {
    const o = ["80%", "40%", "20%", "100%", "1,6%"];
    return {
      d: "media",
      e: "Com Na = 23, O = 16 e H = 1 (em g/mol), uma amostra de 2 g de NaOH impuro é neutralizada exatamente por 40 mL de HCl 1 mol/L, segundo HCl + NaOH → NaCl + H₂O; as impurezas não reagem. Qual é o grau de pureza da amostra?",
      o,
      x: "O ácido gasto contém 1 · 0,04 = 0,04 mol de HCl, que neutralizam 0,04 mol de NaOH. Com 40 g/mol, isso corresponde a 0,04 · 40 = 1,6 g de NaOH puro. A pureza é 1,6/2 = 0,8 = 80%; os outros 0,4 g são impurezas.\n\n40% confunde o volume de ácido, 40 mL, com a porcentagem. 20% é a fração de impurezas. 100% supõe a amostra pura, sem usar os dados da titulação. E 1,6% toma a massa de NaOH puro, 1,6 g, como porcentagem.",
      /* bisseção na massa de NaOH puro até que ácido e base se esgotem juntos */
      v: { i: () => { const m = bissecao((x) => { const n = reage([[1, "HCl"], [1, "NaOH"]], [[1, "NaCl"], [1, "H2O"]], { HCl: 1 * 0.04, NaOH: x / M("NaOH") }); return n.HCl - n.NaOH; }, 0, 2, 100); return qual(m / 2, o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["40%", "65%", "130%", "30%", "50%"];
    return {
      d: "media",
      e: "Um produto é obtido em duas etapas sucessivas: a primeira tem rendimento de 80%, e a segunda, de 50%, calculado sobre o que a primeira produziu. Qual é o rendimento global do processo?",
      o,
      x: "Os rendimentos se aplicam em sequência: de cada 100 mol que poderiam ser obtidos na primeira etapa, formam-se 80; na segunda, só metade disso vira produto, 40 mol. O rendimento global é o produto das frações, 0,8 · 0,5 = 0,4 = 40%, sempre menor que o de cada etapa.\n\n65% tira a média dos rendimentos. 130% soma os dois, o que ultrapassaria 100%. 30% subtrai um do outro. E 50% fica com o menor dos dois, esquecendo a perda da primeira etapa.",
      /* exemplo: eteno → etanol (80%) → etanal (50%) */
      v: { i: () => { const a = reage([[1, "C2H4"], [1, "H2O"]], [[1, "C2H6O"]], { C2H4: 1 }); const b = reage([[1, "C2H6O"]], [[1, "C2H4O"], [1, "H2"]], { C2H6O: 0.8 * a.C2H6O }); return qual((0.5 * b.C2H4O) / 1, o, 1e-9); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["4,75 g", "5,25 g", "5 g", "11 g", "9,24 g"];
    return {
      d: "dificil",
      e: "Com Ca = 40, Mg = 24, C = 12 e O = 16 (em g/mol), 10 g de uma mistura de CaCO₃ e MgCO₃ são aquecidos até a decomposição completa, em que cada carbonato libera 1 mol de CO₂ por mol, e liberam 0,11 mol de CO₂. Que massa de CaCO₃ havia na mistura?",
      o,
      x: "Sejam x a massa de CaCO₃ (100 g/mol) e y a de MgCO₃ (84 g/mol). Então x + y = 10 e x/100 + y/84 = 0,11. Substituindo y = 10 − x e multiplicando por 8.400: 84x + 100 · (10 − x) = 924, ou −16x = −76, e x = 4,75 g. Há 5,25 g de MgCO₃, e 0,0475 + 0,0625 = 0,11 mol de CO₂ confere.\n\n5,25 g é a massa de MgCO₃. 5 g supõe metade de cada carbonato. 11 g atribui todo o CO₂ ao CaCO₃, 0,11 · 100, mais do que a própria mistura. E 9,24 g atribui todo o CO₂ ao MgCO₃, 0,11 · 84.",
      /* sistema de massas e mols; confere o CO₂ pela decomposição de cada carbonato */
      v: { i: () => { const [x, y] = resolve([[1, 1], [1 / M("CaCO3"), 1 / M("MgCO3")]], [10, 0.11]); const co2 = reage([[1, "CaCO3"]], [[1, "CaO"], [1, "CO2"]], { CaCO3: x / M("CaCO3") }).CO2 + reage([[1, "MgCO3"]], [[1, "MgO"], [1, "CO2"]], { MgCO3: y / M("MgCO3") }).CO2; if (Math.abs(co2 - 0.11) > 1e-9) throw new Error("CO₂"); return qual(x, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["1 L de O₂", "2 L de H₂", "4 L de O₂", "6 L de vapor de água", "Nenhum gás resta"];
    return {
      d: "dificil",
      e: "Num recipiente, 6 L de H₂ e 4 L de O₂, medidos nas mesmas condições, reagem segundo 2 H₂ + O₂ → 2 H₂O, e a água formada se condensa. Qual gás resta ao final, e em que volume, nas mesmas condições?",
      o,
      x: "Nas mesmas condições, os volumes de gás estão na proporção dos mols. Os 6 L de H₂ precisam de 3 L de O₂, e há 4 L: o hidrogênio é o limitante, e sobra 1 L de O₂. A água formada, que ocuparia 6 L se fosse vapor, condensa-se e não conta como gás.\n\n2 L de H₂ toma o oxigênio como limitante, o que exigiria 8 L de hidrogênio. 4 L de O₂ supõe que o oxigênio não reaja. 6 L de vapor esquece que a água se condensa. E sobra gás, sim: as quantidades não estão na proporção 2 : 1.",
      v: { i: () => { const n = reage([[2, "H2"], [1, "O2"]], [[2, "H2O"]], { H2: 6, O2: 4 }); return unicoV(o.map((t) => { const m = t.match(/^(\d+) L de (H₂|O₂)$/); if (!m) return /^Nenhum/.test(t) ? n.H2 < 1e-12 && n.O2 < 1e-12 : false; const k = m[2] === "H₂" ? "H2" : "O2", outro = k === "H2" ? n.O2 : n.H2; return Math.abs(Number(m[1]) - n[k]) < 1e-9 && outro < 1e-12; })); } },
    };
  })(),
  (() => {
    const o = ["147,2 g", "184 g", "96 g", "117,76 g", "73,6 g"];
    return {
      d: "dificil",
      e: "Com N = 14, H = 1 e O = 16 (em g/mol), na produção de ácido nítrico a amônia é oxidada a NO (4 NH₃ + 5 O₂ → 4 NO + 6 H₂O), com rendimento de 80%, e todo o NO formado é convertido em NO₂ (2 NO + O₂ → 2 NO₂). Que massa de NO₂ se obtém a partir de 68 g de NH₃, com oxigênio em excesso?",
      o,
      x: "68 g de NH₃ são 4 mol, que dariam 4 mol de NO com rendimento total; com 80%, formam-se 3,2 mol. A segunda etapa converte cada mol de NO em 1 mol de NO₂: 3,2 mol, com 46 g/mol, isto é, 3,2 · 46 = 147,2 g.\n\n184 g ignora o rendimento de 80%. 96 g é a massa de NO formada, 3,2 · 30. 117,76 g aplica os 80% duas vezes, também na segunda etapa, que tem rendimento total. E 73,6 g divide pelo coeficiente 2 da segunda equação, que se cancela com o 2 do NO₂.",
      v: { i: () => { const a = reage([[4, "NH3"], [5, "O2"]], [[4, "NO"], [6, "H2O"]], { NH3: 68 / M("NH3") }); const b = reage([[2, "NO"], [1, "O2"]], [[2, "NO2"]], { NO: 0.8 * a.NO }); return qual(b.NO2 * M("NO2"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["3,3 g", "4,4 g", "6,6 g", "0,075 g", "2,2 g"];
    return {
      d: "dificil",
      e: "Com Na = 23, C = 12 e O = 16 (em g/mol), 10,6 g de Na₂CO₃ são tratados com 100 mL de HCl 1,5 mol/L, segundo Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂. Que massa de CO₂ se forma?",
      o,
      x: "Em mols: 10,6/106 = 0,1 mol de Na₂CO₃ e 1,5 · 0,1 = 0,15 mol de HCl. O carbonato precisaria de 0,2 mol de HCl, e só há 0,15: o ácido é o limitante. Os 0,15 mol de HCl reagem com 0,075 mol de carbonato e liberam 0,075 mol de CO₂, que pesam 0,075 · 44 = 3,3 g. Sobram 0,025 mol de Na₂CO₃.\n\n4,4 g toma o carbonato como limitante. 6,6 g usa a proporção 1 : 1 entre HCl e CO₂. 0,075 g toma o número de mols como massa. E 2,2 g aplica a proporção 2 : 1 ao carbonato, como se 2 mol dele formassem 1 mol de CO₂.",
      v: { i: () => { const n = reage([[1, "Na2CO3"], [2, "HCl"]], [[2, "NaCl"], [1, "H2O"], [1, "CO2"]], { Na2CO3: 10.6 / M("Na2CO3"), HCl: 1.5 * 0.1 }); return qual(n.CO2 * M("CO2"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["65% de zinco", "35% de zinco", "50% de zinco", "32,5% de zinco", "22,4% de zinco"];
    return {
      d: "dificil",
      e: "Com Zn = 65 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, 5 g de uma liga de zinco e cobre reagem com ácido clorídrico em excesso; só o zinco reage (Zn + 2 HCl → ZnCl₂ + H₂), liberando 1,12 L de H₂ nas condições normais. Qual é a porcentagem de zinco na liga?",
      o,
      x: "1,12 L de H₂ nas condições normais são 1,12/22,4 = 0,05 mol. Cada mol de zinco libera 1 mol de H₂: havia 0,05 mol de zinco, isto é, 0,05 · 65 = 3,25 g. A porcentagem é 3,25/5 = 0,65 = 65%; os outros 35% são cobre, que não reage com o ácido.\n\n35% é a porcentagem de cobre. 50% supõe metade de cada metal, sem usar os dados. 32,5% conta 2 mol de H₂ por mol de zinco, confundindo com os 2 mol de HCl. E 22,4% toma o volume molar como porcentagem.",
      /* bisseção na massa de zinco até o H₂ liberado ocupar 1,12 L */
      v: { i: () => { const m = bissecao((x) => reage([[1, "Zn"], [2, "HCl"]], [[1, "ZnCl2"], [1, "H2"]], { Zn: x / M("Zn") }).H2 * 22.4 - 1.12, 0, 5, 100); return qual(m / 5, o.map((t) => t.replace(" de zinco", "")), 1e-6); } },
    };
  })(),
  (() => {
    const o = ["60% de metano", "40% de metano", "50% de metano", "88% de metano", "Não é possível saber sem as massas"];
    return {
      d: "dificil",
      e: "Uma mistura de 10 L de metano e etano consome, na combustão completa, 26 L de O₂, medidos nas mesmas condições (CH₄ + 2 O₂ → CO₂ + 2 H₂O; 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O). Qual é a porcentagem de metano, em volume, na mistura?",
      o,
      x: "Sejam x e y os volumes de metano e de etano: x + y = 10. O metano consome 2 volumes de O₂ por volume, e o etano, 7/2 = 3,5: 2x + 3,5y = 26. Substituindo y = 10 − x: 2x + 35 − 3,5x = 26, e x = 6 L. O metano é 6/10 = 60% da mistura; confere: 2 · 6 + 3,5 · 4 = 26 L.\n\n40% é a porcentagem de etano. 50% supõe metade de cada gás, o que consumiria 27,5 L. 88% usa 7 volumes de O₂ por volume de etano, esquecendo o coeficiente 2 da equação. E as massas não são necessárias: com gases nas mesmas condições, os volumes bastam.",
      /* O₂ por volume de cada combustível, tirado das equações balanceadas; sistema de volumes */
      v: { i: () => { const [r1, p1] = [[[1, "CH4"], [2, "O2"]], [[1, "CO2"], [2, "H2O"]]]; const [r2, p2] = [[[2, "C2H6"], [7, "O2"]], [[4, "CO2"], [6, "H2O"]]]; if (!balanceada(r1, p1) || !balanceada(r2, p2)) throw new Error("equações"); const [x] = resolve([[1, 1], [2 / 1, 7 / 2]], [10, 26]); return unicoV(o.map((t) => { const m = t.match(/^(\d+)% de metano$/); return m ? Math.abs(Number(m[1]) / 100 - x / 10) < 1e-9 : false; })); } },
    };
  })(),
  (() => {
    const o = ["3,36 L", "4,48 L", "6,72 L", "13,44 L", "2,24 L"];
    return {
      d: "dificil",
      e: "Com Cu = 63,5 (em g/mol) e o volume molar de 22,4 L/mol nas condições normais, 19,05 g de cobre são tratados com 0,6 mol de HNO₃, segundo 3 Cu + 8 HNO₃ → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O. Que volume de NO se forma, nas condições normais?",
      o,
      x: "19,05 g de cobre são 19,05/63,5 = 0,3 mol, que precisariam de 0,3 · 8/3 = 0,8 mol de HNO₃; há só 0,6 mol, e o ácido é o limitante. Os 0,6 mol de HNO₃ formam 0,6 · 2/8 = 0,15 mol de NO, que ocupam 0,15 · 22,4 = 3,36 L. Sobram 0,075 mol de cobre sem reagir.\n\n4,48 L toma o cobre como limitante, com 0,2 mol de NO. 6,72 L usa a proporção 1 : 1 entre cobre e NO. 13,44 L usa a proporção 1 : 1 entre ácido e NO. E 2,24 L usa a proporção 3 : 1 entre cobre e NO, esquecendo o coeficiente 2 do NO.",
      v: { i: () => { const n = reage([[3, "Cu"], [8, "HNO3"]], [[3, "Cu(NO3)2"], [2, "NO"], [4, "H2O"]], { Cu: 19.05 / M("Cu"), HNO3: 0.6 }); return qual(n.NO * 22.4, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["504 kg", "560 kg", "700 kg", "630 kg", "448 kg"];
    return {
      d: "dificil",
      e: "Com Fe = 56 e O = 16 (em g/mol), uma tonelada de minério com 80% de Fe₂O₃ é processada no alto-forno (Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂), com rendimento de 90%. Que massa de ferro se obtém?",
      o,
      x: "O minério contém 0,8 · 1.000 = 800 kg de Fe₂O₃, isto é, 800.000/160 = 5.000 mol, que dariam 10.000 mol de ferro, 560 kg, com rendimento total. Com 90%, obtêm-se 0,9 · 560 = 504 kg.\n\n560 kg esquece o rendimento. 700 kg esquece o rendimento e a pureza, calculando para uma tonelada de Fe₂O₃ puro. 630 kg esquece só a pureza. E 448 kg aplica a pureza duas vezes, multiplicando os 560 kg por 0,8 em vez de 0,9.",
      v: { i: () => { const n = reage([[1, "Fe2O3"], [3, "CO"]], [[2, "Fe"], [3, "CO2"]], { Fe2O3: (0.8 * 1e6) / M("Fe2O3") }); return qual(0.9 * n.Fe * M("Fe"), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,74 atm", "≈ 0,98 atm", "≈ 0,49 atm", "≈ 0,25 atm", "≈ 0,07 atm"];
    return {
      d: "dificil",
      e: "Num recipiente rígido de 10 L, a 27 °C, misturam-se 0,2 mol de CO e 0,2 mol de O₂, que reagem completamente segundo 2 CO + O₂ → 2 CO₂. Com R = 0,082 atm·L/(mol·K), qual é a pressão final, de volta a 27 °C?",
      o,
      x: "O CO é o limitante: 0,2 mol de CO consomem 0,1 mol de O₂ e formam 0,2 mol de CO₂; sobram 0,1 mol de O₂. O total de gás cai de 0,4 para 0,3 mol, e a pressão é p = n · R · T/V = 0,3 · 0,082 · 300/10 ≅ 0,74 atm.\n\n0,98 atm usa os 0,4 mol iniciais, como se o número de mols de gás não mudasse. 0,49 atm conta só o CO₂. 0,25 atm conta só o O₂ que sobra. E 0,07 atm usa a temperatura em graus Celsius.",
      v: { i: () => { const n = reage([[2, "CO"], [1, "O2"]], [[2, "CO2"]], { CO: 0.2, O2: 0.2 }); return qual(((n.CO + n.O2 + n.CO2) * 0.082 * 300) / 10, o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["75%", "25%", "150%", "125%", "50%"];
    return {
      d: "dificil",
      e: "Com Ca = 40, C = 12 e O = 16 (em g/mol), 1 g de calcário é tratado com 50 mL de HCl 0,5 mol/L, em excesso (CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂). O ácido que sobra é neutralizado por 10 mL de NaOH 1 mol/L (HCl + NaOH → NaCl + H₂O). As impurezas não reagem. Qual é a porcentagem de CaCO₃ no calcário?",
      o,
      x: "O HCl adicionado foi 0,5 · 0,05 = 0,025 mol. O excesso, neutralizado pela base, foi 1 · 0,01 = 0,01 mol. Reagiram com o carbonato, portanto, 0,025 − 0,01 = 0,015 mol de HCl, o que corresponde a 0,015/2 = 0,0075 mol de CaCO₃, ou 0,75 g. A porcentagem é 0,75/1 = 75%.\n\n25% é a fração de impurezas. 150% esquece que cada CaCO₃ consome 2 HCl, e dá mais carbonato do que a amostra inteira. 125% supõe que todo o ácido tenha reagido com o carbonato, ignorando o excesso. E 50% usa o excesso de ácido, 0,01 mol, como se fosse o que reagiu com o carbonato.",
      /* bisseção na massa de CaCO₃ até o ácido que sobra ser exatamente o que a base neutraliza */
      v: { i: () => { const m = bissecao((x) => { const a = reage([[1, "CaCO3"], [2, "HCl"]], [[1, "CaCl2"], [1, "H2O"], [1, "CO2"]], { CaCO3: x / M("CaCO3"), HCl: 0.5 * 0.05 }); const b = reage([[1, "HCl"], [1, "NaOH"]], [[1, "NaCl"], [1, "H2O"]], { HCl: a.HCl, NaOH: 1 * 0.01 }); return b.NaOH - b.HCl; }, 0, 1, 100); return qual(m / 1, o, 1e-6); } },
    };
  })(),
];
