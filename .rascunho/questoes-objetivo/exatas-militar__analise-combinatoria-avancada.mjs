/* Rascunho — Exatas nível militar / Análise combinatória avançada.

   A explicação usa as fórmulas (arranjos, combinações, permutações com
   repetição, bolinhas e barras, inclusão-exclusão, binômio de Newton); a
   conferência lista os objetos um a um — palavras, trios, funções,
   caminhos, subconjuntos — e conta os que satisfazem a condição. Quando a
   lista seria grande demais, conta por recorrência (permutações de
   multiconjunto). */

import { unicoV, intervalo, lerExpr, permutacoes, combinacoes, produto, multPol, potPol, perto } from "./_exatas.mjs";
import { anagramas, rodas } from "./_contagem.mjs";

export const materia = "exatas-militar";
export const tema = "Análise combinatória avançada";
export const arquivo = "exatas-militar__analise-combinatoria-avancada";

/* número da alternativa: "4.536" → 4536, "3/2" etc. */
const num = (t) => lerExpr(String(t).replace(/\.(?=\d{3})/g, ""));
const qual = (x, alt) => unicoV(alt.map((t) => perto(num(t), x, 1e-12)));
/* permutações distintas de um multiconjunto, por recorrência (sem listar) */
const contaMulti = (cont) => { const memo = new Map(); const f = (c) => { const k = c.join(","); if (memo.has(k)) return memo.get(k); if (c.every((x) => x === 0)) return 1; let s = 0; c.forEach((x, i) => { if (x > 0) { const d = [...c]; d[i]--; s += f(d); } }); memo.set(k, s); return s; }; return f(cont); };
/* caminhos na malha: sequências de passos D/C, como máscaras de bits */
const caminhos = (dx, dy) => intervalo(0, 2 ** (dx + dy) - 1).filter((m) => m.toString(2).split("").filter((b) => b === "1").length === dx).map((m) => { let x = 0, y = 0; const pts = [[0, 0]]; for (let k = 0; k < dx + dy; k++) { if ((m >> k) & 1) x++; else y++; pts.push([x, y]); } return pts; });
const passaPor = (cam, p) => cam.some(([x, y]) => x === p[0] && y === p[1]);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["10", "120", "20", "5", "60"];
    return {
      d: "facil",
      e: "Quantos anagramas diferentes podem ser formados com as letras da palavra ARARA?",
      o,
      x: "São 5 letras, com o A repetido 3 vezes e o R repetido 2 vezes. Trocar entre si letras iguais não produz anagrama novo, então divide-se 5! pelas permutações das repetições: 5!/(3! · 2!) = 120/12 = 10. Outra forma: basta escolher as 2 posições dos R entre as 5, C(5, 2) = 10.\n\n120 é 5!, como se as letras fossem todas diferentes. 20 divide só por 3!, esquecendo a repetição do R. 5 conta só as posições de uma das letras. E 60 divide 5! apenas por 2!, esquecendo a repetição do A.",
      v: { i: () => qual(anagramas("ARARA").length, o) },
    };
  })(),
  (() => {
    const o = ["120", "720", "30", "1.000", "60"];
    return {
      d: "facil",
      e: "De quantas maneiras se podem escolher 3 livros, sem importar a ordem, entre 10 livros diferentes?",
      o,
      x: "Como a ordem não importa, é uma combinação: C(10, 3) = 10!/(3! · 7!) = (10 · 9 · 8)/(3 · 2 · 1) = 720/6 = 120.\n\n720 é o arranjo A(10, 3) = 10 · 9 · 8, que conta cada grupo 6 vezes, uma para cada ordem dos 3 livros. 30 multiplica 10 por 3. 1.000 é 10³, que admite repetição e ordem. E 60 divide 720 por 12 em vez de 6. Cada grupo de 3 livros pode ser ordenado de 3! = 6 maneiras, e é por isso que o arranjo é dividido por 6.",
      v: { i: () => qual(combinacoes(intervalo(1, 10), 3).length, o) },
    };
  })(),
  (() => {
    const o = ["56", "28", "64", "16", "15"];
    return {
      d: "facil",
      e: "Numa turma de 8 alunos, de quantas maneiras se podem escolher um representante e um vice-representante?",
      o,
      x: "A ordem importa: ser representante é diferente de ser vice. Há 8 escolhas para o representante e, feita essa escolha, 7 para o vice: 8 · 7 = 56, que é o arranjo A(8, 2).\n\n28 é a combinação C(8, 2), que não distingue os dois cargos. 64 é 8², como se a mesma pessoa pudesse ocupar os dois cargos. 16 soma 8 + 8. E 15 soma 8 + 7, em vez de multiplicar.",
      v: { i: () => qual(produto(intervalo(1, 8), intervalo(1, 8)).filter(([a, b]) => a !== b).length, o) },
    };
  })(),
  (() => {
    const o = ["24", "120", "12", "60", "5"];
    return {
      d: "facil",
      e: "De quantas maneiras 5 pessoas podem se sentar ao redor de uma mesa circular, considerando iguais as disposições que diferem só por uma rotação?",
      o,
      x: "Numa fila, seriam 5! = 120 disposições. Na mesa circular, cada disposição aparece 5 vezes, uma para cada rotação, então há 120/5 = 4! = 24. Um jeito prático: fixa-se uma pessoa numa cadeira, e as outras 4 se arrumam de 4! maneiras.\n\n120 conta as rotações como disposições diferentes. 12 divide também pelas reflexões, o que só vale quando não se distingue o sentido horário do anti-horário, como num colar. 60 divide 5! por 2. E 5 conta só as rotações de uma mesma disposição.",
      v: { i: () => qual(rodas(["A", "B", "C", "D", "E"]).length, o) },
    };
  })(),
  (() => {
    const o = ["64", "36", "63", "720", "12"];
    return {
      d: "facil",
      e: "Quantos subconjuntos tem um conjunto de 6 elementos, incluindo o vazio e o próprio conjunto?",
      o,
      x: "Cada elemento pode estar ou não estar no subconjunto: 2 possibilidades para cada um dos 6, independentes entre si. O total é 2⁶ = 64, que inclui o vazio (nenhum elemento) e o próprio conjunto (todos). Somando por tamanho: 1 + 6 + 15 + 20 + 15 + 6 + 1 = 64.\n\n36 é 6². 63 esquece o conjunto vazio. 720 é 6!, o número de ordenações dos elementos. E 12 é 2 · 6.",
      v: { i: () => qual(intervalo(0, 6).reduce((s, k) => s + combinacoes(intervalo(1, 6), k).length, 0), o) },
    };
  })(),
  (() => {
    const o = ["60", "125", "10", "15", "120"];
    return {
      d: "facil",
      e: "Quantos números de três algarismos distintos podem ser formados com os algarismos 1, 2, 3, 4 e 5?",
      o,
      x: "Há 5 escolhas para a centena, 4 para a dezena (sem repetir) e 3 para a unidade: 5 · 4 · 3 = 60. Nenhum dos algarismos é zero, então não há restrição para a primeira posição.\n\n125 é 5³, que permite repetição. 10 é C(5, 3), que escolhe os algarismos mas não os ordena. 15 soma 5 + 4 + 3 em vez de multiplicar. E 120 é 5!, que forma números de cinco algarismos.",
      v: { i: () => qual(produto([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]).filter((p) => new Set(p).size === 3).length, o) },
    };
  })(),
  (() => {
    const o = ["35", "45", "70", "10", "20"];
    return {
      d: "facil",
      e: "Quantas diagonais tem um decágono convexo, isto é, um polígono convexo de 10 lados?",
      o,
      x: "Cada vértice se liga por diagonal a todos os outros, menos a si mesmo e aos dois vizinhos: 10 − 3 = 7 diagonais por vértice. Como cada diagonal liga dois vértices, contá-las por vértice conta cada uma duas vezes: 10 · 7/2 = 35. Outra forma: C(10, 2) − 10 = 45 − 10 = 35.\n\n45 é o número de segmentos entre vértices, incluindo os 10 lados. 70 esquece de dividir por 2. 10 é o número de lados. E 20 é 10 · 2, sem relação com a contagem.",
      v: { i: () => qual(combinacoes(intervalo(0, 9), 2).filter(([a, b]) => (b - a) % 10 !== 1 && (a - b + 10) % 10 !== 1).length, o) },
    };
  })(),
  (() => {
    const o = ["66", "132", "144", "24", "11"];
    return {
      d: "facil",
      e: "Numa reunião com 12 pessoas, cada uma cumprimenta todas as outras com um aperto de mão, uma única vez. Quantos apertos de mão acontecem?",
      o,
      x: "Cada aperto de mão corresponde a um par de pessoas, sem ordem: C(12, 2) = 12 · 11/2 = 66. Contando por pessoa: cada uma aperta 11 mãos, e 12 · 11 = 132, mas assim cada aperto é contado duas vezes, uma por participante.\n\n132 é essa contagem dupla. 144 é 12², que inclui cada pessoa cumprimentando a si mesma e conta os pares duas vezes. 24 é 12 · 2. E 11 é o número de apertos de uma só pessoa.",
      v: { i: () => qual(combinacoes(intervalo(1, 12), 2).length, o) },
    };
  })(),
  (() => {
    const o = ["15", "6", "20", "12", "30"];
    return {
      d: "facil",
      e: "No desenvolvimento de (1 + x)⁶, qual é o coeficiente de x²?",
      o,
      x: "Pelo binômio de Newton, o coeficiente de xᵏ em (1 + x)ⁿ é C(n, k): aqui, C(6, 2) = 6 · 5/2 = 15. É o número de maneiras de escolher, entre os 6 fatores (1 + x), os 2 que contribuem com x.\n\n6 é C(6, 1), o coeficiente de x. 20 é C(6, 3), o coeficiente de x³, o maior da linha. 12 multiplica 6 por 2. E 30 é o arranjo A(6, 2) = 6 · 5, sem dividir por 2.",
      v: { i: () => { const p = potPol([1, 1], 6).reverse(); return qual(p[2], o); } },
    };
  })(),
  (() => {
    const o = ["81", "64", "12", "24", "7"];
    return {
      d: "facil",
      e: "Quantas funções existem de um conjunto A com 4 elementos num conjunto B com 3 elementos?",
      o,
      x: "Uma função associa a cada elemento de A um único elemento de B. Para cada um dos 4 elementos de A há 3 escolhas, independentes: 3 · 3 · 3 · 3 = 3⁴ = 81.\n\n64 é 4³, que inverte os papéis dos conjuntos — seriam as funções de B em A. 12 multiplica 4 por 3. 24 é 4!, que conta ordenações. E 7 soma os tamanhos dos conjuntos. Nem toda função precisa usar todos os elementos de B: as funções constantes, por exemplo, levam os 4 elementos de A no mesmo elemento.",
      v: { i: () => qual(produto([0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2]).length, o) },
    };
  })(),
  (() => {
    const o = ["20", "6", "9", "64", "720"];
    return {
      d: "facil",
      e: "Andando só para a direita ou para cima, uma unidade por vez, quantos caminhos diferentes levam do ponto (0, 0) ao ponto (3, 3) de uma malha quadriculada?",
      o,
      x: "Todo caminho tem 6 passos: 3 para a direita, indicados por D, e 3 para cima, indicados por C, em alguma ordem. Contar caminhos é contar as sequências com 3 letras D e 3 letras C: 6!/(3! · 3!) = 20, ou, escolhendo as posições dos passos D, C(6, 3) = 20.\n\n6 é o número de passos de cada caminho. 9 é 3 · 3. 64 é 2⁶, que não exige 3 passos em cada direção. E 720 é 6!, como se os passos fossem todos diferentes entre si.",
      v: { i: () => qual(caminhos(3, 3).length, o) },
    };
  })(),
  (() => {
    const o = ["12", "6", "24", "120", "36"];
    return {
      d: "facil",
      e: "Quantos anagramas da palavra PROVA começam e terminam por vogal?",
      o,
      x: "As vogais de PROVA são O e A. Para a primeira e a última posição há 2 arrumações: O no começo e A no fim, ou o contrário. As 3 consoantes, P, R e V, ocupam as posições do meio de 3! = 6 maneiras. Total: 2 · 6 = 12.\n\n6 esquece que as vogais podem trocar de lugar. 24 é 4!, que fixa só uma das pontas. 120 é 5!, o total de anagramas, sem a restrição. E 36 multiplica 6 · 6, como se houvesse 6 arrumações para as vogais.",
      v: { i: () => qual(anagramas("PROVA").filter((w) => "OA".includes(w[0]) && "OA".includes(w[4])).length, o) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["66", "36", "120", "55", "1.000"];
    return {
      d: "media",
      e: "De quantas maneiras 10 balas idênticas podem ser repartidas entre 3 crianças, podendo alguma delas ficar sem bala?",
      o,
      x: "Cada repartição corresponde a uma solução inteira não negativa de x + y + z = 10. Enfileirando 10 bolinhas e 2 barras separadoras, as bolinhas antes da primeira barra vão para a primeira criança, as do meio para a segunda, e as do fim para a terceira. Contar é escolher as posições das 2 barras entre 12 lugares: C(12, 2) = 66.\n\n36 conta só as repartições em que todas recebem bala, C(9, 2). 120 é C(10, 3). 55 é C(11, 2), que usa um lugar a menos. E 1.000 é 10³, como se cada criança pudesse receber de 0 a 9 balas sem a condição da soma.",
      v: { i: () => { let n = 0; for (const x of intervalo(0, 10)) for (const y of intervalo(0, 10 - x)) n++; return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["84", "286", "120", "210", "56"];
    return {
      d: "media",
      e: "Quantas são as soluções inteiras positivas da equação x + y + z + w = 10?",
      o,
      x: "Com x, y, z, w ≥ 1, faz-se x = 1 + x′ etc.: x′ + y′ + z′ + w′ = 6, com incógnitas não negativas. Pelo método das bolinhas e barras: 6 bolinhas e 3 barras, C(9, 3) = 84. Outra forma: nos 9 espaços entre 10 bolinhas enfileiradas, escolhem-se 3 para cortar.\n\n286 é C(13, 3), a contagem com zeros permitidos. 120 é C(10, 3). 210 é C(10, 4). E 56 é C(8, 3), que usa um espaço a menos.",
      v: { i: () => { let n = 0; for (const x of intervalo(1, 10)) for (const y of intervalo(1, 10)) for (const z of intervalo(1, 10)) if (10 - x - y - z >= 1) n++; return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["44", "120", "24", "60", "76"];
    return {
      d: "media",
      e: "Cinco pessoas deixam os chapéus na entrada de uma festa e, na saída, cada uma pega um chapéu ao acaso. De quantas maneiras os chapéus podem ser distribuídos de modo que ninguém pegue o próprio chapéu?",
      o,
      x: "É o número de permutações caóticas de 5 elementos. Por inclusão-exclusão: D₅ = 5! − 5 · 4! + 10 · 3! − 10 · 2! + 5 · 1! − 1 = 120 − 120 + 60 − 20 + 5 − 1 = 44. Pela recorrência Dₙ = (n − 1)(Dₙ₋₁ + Dₙ₋₂), com D₃ = 2 e D₄ = 9: D₅ = 4 · (9 + 2) = 44.\n\n120 é o total de distribuições, sem restrição. 24 é 4!, que fixa só uma pessoa. 60 é a metade de 120, um palpite. E 76 é 120 − 44, o número de distribuições em que pelo menos uma pessoa pega o próprio chapéu.",
      v: { i: () => qual(permutacoes(intervalo(0, 4)).filter((p) => p.every((v, i) => v !== i)).length, o) },
    };
  })(),
  (() => {
    const o = ["151.200", "3.628.800", "302.400", "75.600", "453.600"];
    return {
      d: "media",
      e: "Quantos anagramas tem a palavra MATEMATICA?",
      o,
      x: "São 10 letras: M aparece 2 vezes, A 3 vezes, T 2 vezes, e E, I e C uma vez cada. Divide-se 10! pelas permutações das letras repetidas: 10!/(2! · 3! · 2!) = 3.628.800/24 = 151.200.\n\n3.628.800 é 10!, como se todas as letras fossem diferentes. 302.400 esquece uma das repetições de 2! (divide por 12). 75.600 divide por 48, contando uma repetição a mais. E 453.600 divide por 2! · 2! · 2!, trocando o 3! das três letras A por 2!.",
      /* M, A, T, E, I, C com multiplicidades 2, 3, 2, 1, 1, 1 */
      v: { i: () => qual(contaMulti([2, 3, 2, 1, 1, 1]), o) },
    };
  })(),
  (() => {
    const o = ["215", "150", "330", "315", "360"];
    return {
      d: "media",
      e: "Um grupo tem 6 homens e 5 mulheres. Quantas comissões de 4 pessoas podem ser formadas com pelo menos 2 mulheres?",
      o,
      x: "Separam-se os casos: 2 mulheres e 2 homens, C(5, 2) · C(6, 2) = 10 · 15 = 150; 3 mulheres e 1 homem, C(5, 3) · 6 = 60; 4 mulheres, C(5, 4) = 5. Total: 150 + 60 + 5 = 215. Pelo complemento: das C(11, 4) = 330 comissões, tiram-se as sem mulheres (15) e as com exatamente uma (5 · C(6, 3) = 100): 330 − 115 = 215.\n\n150 conta só o caso de exatamente 2 mulheres. 330 é o total, sem restrição. 315 exige só pelo menos uma mulher (330 − 15). E 360 escolhe primeiro 2 mulheres e depois 2 pessoas quaisquer entre as 9 restantes, C(5, 2) · C(9, 2): assim, uma comissão com 3 mulheres é contada 3 vezes, e uma com 4, 6 vezes.",
      /* pessoas 0 a 4 são mulheres; 5 a 10, homens */
      v: { i: () => qual(combinacoes(intervalo(0, 10), 4).filter((c) => c.filter((p) => p < 5).length >= 2).length, o) },
    };
  })(),
  (() => {
    const o = ["240", "120", "720", "48", "480"];
    return {
      d: "media",
      e: "Quantos anagramas da palavra BRASIL têm as vogais juntas, uma ao lado da outra?",
      o,
      x: "As vogais de BRASIL são A e I. Tratando o par de vogais como um único bloco, há 5 elementos para ordenar — o bloco, B, R, S e L: 5! = 120 maneiras. Dentro do bloco, as vogais podem aparecer como AI ou IA: 2 maneiras. Total: 120 · 2 = 240.\n\n120 esquece de trocar a ordem das vogais dentro do bloco. 720 é 6!, o total de anagramas, sem a restrição. 48 é 4! · 2, que conta um elemento a menos. E 480 é 720 − 240, o número de anagramas com as vogais separadas.",
      v: { i: () => qual(anagramas("BRASIL").filter((w) => Math.abs(w.indexOf("A") - w.indexOf("I")) === 1).length, o) },
    };
  })(),
  (() => {
    const o = ["4.536", "5.040", "9.000", "3.024", "6.561"];
    return {
      d: "media",
      e: "Quantos números de quatro algarismos têm todos os algarismos diferentes?",
      o,
      x: "O primeiro algarismo não pode ser zero: 9 escolhas, de 1 a 9. Os seguintes podem ser zero, mas não podem repetir os anteriores: 9 escolhas para o segundo, 8 para o terceiro e 7 para o quarto. Total: 9 · 9 · 8 · 7 = 4.536.\n\n5.040 é A(10, 4) = 10 · 9 · 8 · 7, que aceita zero na primeira posição. 9.000 é o total de números de quatro algarismos, sem exigir algarismos diferentes. 3.024 é 9 · 8 · 7 · 6, que proíbe o zero em todas as posições. E 6.561 é 9⁴, que permite repetição.",
      v: { i: () => qual(intervalo(1000, 9999).filter((n) => new Set(String(n)).size === 4).length, o) },
    };
  })(),
  (() => {
    const o = ["328", "360", "320", "256", "450"];
    return {
      d: "media",
      e: "Quantos números pares de três algarismos distintos existem?",
      o,
      x: "Separa-se pela unidade. Terminando em 0: 9 escolhas para a centena (1 a 9) e 8 para a dezena: 72. Terminando em 2, 4, 6 ou 8: a centena não pode ser zero nem repetir a unidade, 8 escolhas; a dezena é qualquer algarismo diferente dos outros dois, 8 escolhas: 4 · 8 · 8 = 256. Total: 72 + 256 = 328.\n\n360 trata os cinco finais pares como se todos tivessem 9 · 8 opções. 320 trata todos como se tivessem 8 · 8. 256 conta só os finais 2, 4, 6 e 8, esquecendo o final 0. E 450 é o total de números pares de três algarismos, sem exigir algarismos distintos.",
      v: { i: () => qual(intervalo(100, 999).filter((n) => n % 2 === 0 && new Set(String(n)).size === 3).length, o) },
    };
  })(),
  (() => {
    const o = ["48", "24", "120", "240", "72"];
    return {
      d: "media",
      e: "Seis pessoas vão se sentar ao redor de uma mesa circular, e duas delas, Ana e Bia, querem ficar lado a lado. Quantas são as disposições possíveis, considerando iguais as que diferem só por uma rotação?",
      o,
      x: "Tratando Ana e Bia como um bloco, há 5 elementos ao redor da mesa: (5 − 1)! = 24 disposições circulares. Dentro do bloco, elas podem trocar de lugar — Ana à esquerda ou à direita de Bia: 2 maneiras. Total: 24 · 2 = 48.\n\n24 esquece a troca dentro do bloco. 120 é (6 − 1)!, o total de disposições, sem restrição. 240 conta disposições em fila com o bloco, 5! · 2, sem descontar as rotações. E 72 é o número de disposições em que elas ficam separadas, 120 − 48.",
      v: { i: () => qual(rodas(["A", "B", "C", "D", "E", "F"]).filter((r) => { const i = r.indexOf("A"), j = r.indexOf("B"); return (i - j + 6) % 6 === 1 || (j - i + 6) % 6 === 1; }).length, o) },
    };
  })(),
  (() => {
    const o = ["60", "120", "720", "30", "360"];
    return {
      d: "media",
      e: "Quantos colares diferentes podem ser montados com 6 contas de cores diferentes, considerando iguais os colares que coincidem por rotação ou ao virar o colar do avesso?",
      o,
      x: "Em fila, as 6 contas se arrumam de 6! = 720 maneiras. No círculo, cada arrumação se repete nas 6 rotações: 720/6 = 120 disposições circulares. Como o colar pode ser virado, cada disposição coincide com a sua imagem no espelho, a mesma sequência lida no sentido contrário: 120/2 = 60.\n\n120 desconta as rotações, mas não a virada do colar. 720 não desconta nada. 30 divide por 2 mais uma vez. E 360 desconta só a virada, e não as rotações.",
      /* forma canônica: menor rotação da sequência e da sequência invertida */
      v: { i: () => { const canon = (p) => { const vs = []; for (const q of [p, [...p].reverse()]) for (let k = 0; k < 6; k++) vs.push([...q.slice(k), ...q.slice(0, k)].join("")); return vs.sort()[0]; }; return qual(new Set(permutacoes([..."ABCDEF"]).map(canon)).size, o); } },
    };
  })(),
  (() => {
    const o = ["67", "83", "50", "33", "16"];
    return {
      d: "media",
      e: "Quantos números inteiros de 1 a 100 são divisíveis por 2 ou por 3?",
      o,
      x: "Por inclusão-exclusão: são 50 múltiplos de 2 e 33 múltiplos de 3, mas os múltiplos de 6 (16 deles) foram contados duas vezes. Total: 50 + 33 − 16 = 67. Pelo complemento: os que não são divisíveis nem por 2 nem por 3 são os que deixam resto 1 ou 5 na divisão por 6, e são 33 — 100 − 33 = 67.\n\n83 soma 50 + 33 sem descontar os múltiplos de 6. 50 conta só os múltiplos de 2, e 33, só os de 3. E 16 conta só os divisíveis pelos dois ao mesmo tempo.",
      v: { i: () => qual(intervalo(1, 100).filter((n) => n % 2 === 0 || n % 3 === 0).length, o) },
    };
  })(),
  (() => {
    const o = ["266", "267", "734", "400", "333"];
    return {
      d: "media",
      e: "Quantos números inteiros de 1 a 1.000 não são divisíveis por 2, nem por 3, nem por 5?",
      o,
      x: "Por inclusão-exclusão, os divisíveis por pelo menos um deles são 500 + 333 + 200 − (166 + 100 + 66) + 33 = 1.033 − 332 + 33 = 734: múltiplos de 2, de 3 e de 5; menos os de 6, 10 e 15; mais os de 30. Os que não são divisíveis por nenhum são 1.000 − 734 = 266.\n\n267 aproxima por 1.000 · (1/2)(2/3)(4/5) ≈ 266,7 e arredonda para cima — a conta exata exige contar os múltiplos. 734 é a quantidade dos que são divisíveis por pelo menos um. 400 considera só o 2 e o 5. E 333 considera só o 2 e o 3.",
      v: { i: () => qual(intervalo(1, 1000).filter((n) => n % 2 && n % 3 && n % 5).length, o) },
    };
  })(),
  (() => {
    const o = ["240", "15", "−240", "60", "480"];
    return {
      d: "media",
      e: "Qual é o coeficiente de x⁴ no desenvolvimento de (2x − 1)⁶?",
      o,
      x: "O termo geral é C(6, k) · (2x)^(6 − k) · (−1)^k. Para x⁴, 6 − k = 4 e k = 2: C(6, 2) · 2⁴ · (−1)² = 15 · 16 · 1 = 240.\n\n15 é só o coeficiente binomial, sem o fator 2⁴. −240 erra o sinal: (−1)² é positivo. 60 usa 2² = 4 no lugar de 2⁴. E 480 dobra o resultado. Quanto ao sinal: os termos alternam conforme a potência de −1, e o termo com k = 2 é positivo.",
      v: { i: () => { const p = potPol([2, -1], 6).reverse(); return qual(p[4], o); } },
    };
  })(),
  (() => {
    const o = ["84", "36", "126", "9", "1"];
    /* desenvolvimento de (x + x⁻²)⁹ guardando o expoente de cada termo */
    const laurent = () => { let m = new Map([[0, 1]]); for (let k = 0; k < 9; k++) { const n = new Map(); for (const [e, c] of m) for (const d of [1, -2]) n.set(e + d, (n.get(e + d) ?? 0) + c); m = n; } return m; };
    return {
      d: "media",
      e: "Qual é o termo independente de x no desenvolvimento de (x + 1/x²)⁹?",
      o,
      x: "O termo geral é C(9, k) · x^(9 − k) · (1/x²)^k = C(9, k) · x^(9 − 3k). Para não depender de x, 9 − 3k = 0, e k = 3. O termo é C(9, 3) = 84.\n\n36 é C(9, 2), que usa k = 2. 126 é C(9, 4), que usa k = 4. 9 é C(9, 1). E 1 supõe que só o primeiro ou o último termo possam ser constantes. Os expoentes dos termos são 9, 6, 3, 0, −3, …: caem de 3 em 3, e o zero aparece no quarto termo.",
      v: { i: () => qual(laurent().get(0), o) },
    };
  })(),
  (() => {
    const o = ["1", "243", "−32", "3.125", "0"];
    return {
      d: "media",
      e: "Qual é a soma dos coeficientes do desenvolvimento de (3x − 2)⁵?",
      o,
      x: "A soma dos coeficientes de um polinômio é o seu valor em x = 1, porque cada potência de x vira 1. Então basta calcular (3 · 1 − 2)⁵ = 1⁵ = 1, sem desenvolver o binômio.\n\n243 é 3⁵, apenas o coeficiente de x⁵. −32 é (−2)⁵, o termo independente. 3.125 é 5⁵ = (3 + 2)⁵, a soma dos valores absolutos dos coeficientes. E 0 supõe que os coeficientes positivos e negativos se anulem.",
      v: { i: () => qual(potPol([3, -2], 5).reduce((s, c) => s + c, 0), o) },
    };
  })(),
  (() => {
    const o = ["116", "120", "4", "112", "80"];
    const P = [[0, 0], [1, 0], [2, 0], [3, 0], [0.3, 1.7], [1.9, 2.3], [3.1, 1.1], [0.7, 3.9], [2.6, 4.4], [4.2, 3.3]];
    const area2 = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    return {
      d: "media",
      e: "São dados 10 pontos num plano, dos quais exatamente 4 estão numa mesma reta, e não há outros três pontos alinhados. Quantos triângulos têm os vértices entre esses pontos?",
      o,
      x: "Três pontos quaisquer formam um triângulo, exceto quando estão alinhados. Há C(10, 3) = 120 trios, e os trios alinhados são os formados só com os 4 pontos da reta: C(4, 3) = 4. Triângulos: 120 − 4 = 116.\n\n120 esquece os trios alinhados. 4 é o número de trios alinhados. 112 desconta os trios alinhados duas vezes. E 80 descarta também os trios com dois pontos da reta e um de fora, que formam triângulo normalmente.",
      /* configuração concreta: 4 pontos no eixo x e 6 em posição geral (confere que não há outros trios alinhados) */
      v: { i: () => { const trios = combinacoes(intervalo(0, 9), 3); const alinhados = trios.filter(([a, b, c]) => Math.abs(area2(P[a], P[b], P[c])) < 1e-9); if (alinhados.length !== 4 || !alinhados.every((t) => t.every((i) => i < 4))) throw new Error("configuração"); return qual(trios.length - alinhados.length, o); } },
    };
  })(),
  (() => {
    const o = ["60", "126", "16", "66", "6"];
    return {
      d: "media",
      e: "Numa malha quadriculada, um caminho vai de (0, 0) a (5, 4) com passos unitários para a direita ou para cima e passa obrigatoriamente pelo ponto (2, 2). Quantos caminhos assim existem?",
      o,
      x: "Divide-se o trajeto em duas partes. De (0, 0) a (2, 2): 4 passos, 2 de cada tipo, C(4, 2) = 6 caminhos. De (2, 2) a (5, 4): 5 passos, 3 para a direita e 2 para cima, C(5, 2) = 10 caminhos. Pelo princípio multiplicativo: 6 · 10 = 60.\n\n126 é o total de caminhos de (0, 0) a (5, 4), C(9, 4), sem a restrição. 16 soma 6 + 10 em vez de multiplicar. 66 é 126 − 60, os caminhos que evitam (2, 2). E 6 conta só a primeira parte do trajeto.",
      v: { i: () => qual(caminhos(5, 4).filter((c) => passaPor(c, [2, 2])).length, o) },
    };
  })(),
  (() => {
    const o = ["90", "15", "720", "540", "729"];
    return {
      d: "media",
      e: "De quantas maneiras 6 livros diferentes podem ser distribuídos entre 3 pessoas, de modo que cada uma receba exatamente 2 livros?",
      o,
      x: "A primeira pessoa escolhe 2 dos 6 livros, C(6, 2) = 15; a segunda, 2 dos 4 restantes, C(4, 2) = 6; a terceira fica com os 2 últimos. Total: 15 · 6 · 1 = 90. Como as pessoas são diferentes, não se divide por 3!.\n\n15 é o número de divisões dos livros em 3 pares sem dizer quem recebe cada par — o que vale quando os grupos não têm dono (90/3! = 15). 720 é 6!, que ordena os livros. 540 multiplica 90 pelas 3! ordens das pessoas, contando cada distribuição 6 vezes. E 729 é 3⁶, que deixa cada livro escolher o dono sem limitar a 2 por pessoa.",
      v: { i: () => qual(produto(...Array(6).fill([0, 1, 2])).filter((f) => [0, 1, 2].every((p) => f.filter((d) => d === p).length === 2)).length, o) },
    };
  })(),
  (() => {
    const o = ["35", "70", "1.680", "256", "105"];
    return {
      d: "media",
      e: "De quantas maneiras 8 pessoas podem ser divididas em dois grupos de 4, sem que os grupos tenham nome ou função que os diferencie?",
      o,
      x: "Escolher os 4 que formam um grupo, C(8, 4) = 70, já determina o outro grupo. Mas cada divisão aparece duas vezes nessa contagem: escolher {A, B, C, D} ou escolher os outros 4 produz a mesma divisão. Então há 70/2 = 35 divisões. Outra forma: fixa-se uma pessoa e escolhem-se os 3 companheiros dela entre as outras 7, C(7, 3) = 35.\n\n70 conta cada divisão duas vezes, como se os grupos fossem distintos — time azul e time branco, por exemplo. 1.680 é A(8, 4) = 8 · 7 · 6 · 5, que ordena os escolhidos. 256 é 2⁸, que deixa cada pessoa escolher um grupo sem exigir 4 em cada. E 105 é o número de maneiras de dividir as 8 pessoas em 4 duplas.",
      /* forma canônica: o grupo que contém a pessoa 0 */
      v: { i: () => qual(combinacoes(intervalo(0, 7), 4).filter((g) => g.includes(0)).length, o) },
    };
  })(),
  (() => {
    const o = ["36", "81", "24", "12", "33"];
    return {
      d: "media",
      e: "Uma função de A em B é sobrejetora quando todo elemento de B é imagem de algum elemento de A. Se A tem 4 elementos e B tem 3, quantas funções sobrejetoras de A em B existem?",
      o,
      x: "Das 3⁴ = 81 funções, retiram-se as que deixam algum elemento do contradomínio sem imagem. Por inclusão-exclusão: as que evitam um elemento fixado são 2⁴ = 16 (há 3 escolhas desse elemento), e as que evitam dois são 1 (há 3 escolhas do par). Sobrejetoras: 81 − 3 · 16 + 3 · 1 = 36. Por outro caminho: dois elementos do domínio têm a mesma imagem (C(4, 2) = 6 escolhas do par), e os 3 blocos se distribuem nos 3 elementos de 3! = 6 maneiras: 36.\n\n81 é o total de funções. 24 é 4!. 12 é 4 · 3. E 33 desconta as funções que evitam um elemento, mas esquece de devolver as que evitam dois, descontadas duas vezes.",
      v: { i: () => qual(produto([0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2]).filter((f) => new Set(f).size === 3).length, o) },
    };
  })(),
  (() => {
    const o = ["103.776", "2.598.960", "17.296", "117.600", "6"];
    /* cartas 0 a 3 são os ases; conta as mãos sem guardá-las */
    const conta = () => { let n = 0; for (let a = 0; a < 52; a++) for (let b = a + 1; b < 52; b++) for (let c = b + 1; c < 52; c++) for (let d = c + 1; d < 52; d++) for (let e = d + 1; e < 52; e++) if ((a < 4) + (b < 4) + (c < 4) + (d < 4) + (e < 4) === 2) n++; return n; };
    return {
      d: "media",
      e: "Um baralho comum tem 52 cartas, 4 delas ases. Quantas mãos de 5 cartas contêm exatamente 2 ases?",
      o,
      x: "Escolhem-se os 2 ases entre os 4, C(4, 2) = 6, e as outras 3 cartas entre as 48 que não são ases, C(48, 3) = 17.296. Total: 6 · 17.296 = 103.776.\n\n2.598.960 é C(52, 5), o total de mãos. 17.296 conta só as escolhas das cartas que não são ases. 117.600 escolhe as outras 3 cartas entre as 50 restantes, o que permite mais ases na mão. E 6 conta só a escolha dos ases.",
      v: { i: () => qual(conta(), o) },
    };
  })(),
  (() => {
    const o = ["384", "24", "40.320", "96", "192"];
    return {
      d: "media",
      e: "Quatro casais vão se sentar em 8 cadeiras enfileiradas, e cada casal quer ficar em cadeiras vizinhas. De quantas maneiras isso pode ser feito?",
      o,
      x: "Tratando cada casal como um bloco, há 4 blocos para ordenar na fila: 4! = 24 maneiras. Dentro de cada bloco, os dois podem trocar de lugar: 2 maneiras por casal, 2⁴ = 16 ao todo. Total: 24 · 16 = 384.\n\n24 esquece as trocas dentro dos casais. 40.320 é 8!, sem restrição. 96 multiplica por 4 em vez de 2⁴. E 192 multiplica por 2³, esquecendo a troca de um dos casais.",
      /* pessoas 2k e 2k+1 formam o casal k */
      v: { i: () => qual(permutacoes(intervalo(0, 7)).filter((p) => [0, 1, 2, 3].every((k) => Math.abs(p.indexOf(2 * k) - p.indexOf(2 * k + 1)) === 1)).length, o) },
    };
  })(),
  (() => {
    const o = ["6", "12", "24", "3", "18"];
    return {
      d: "media",
      e: "Quantos anagramas da palavra CASA não têm as duas letras A juntas?",
      o,
      x: "O total de anagramas de CASA é 4!/2! = 12, por causa das duas letras A. Com as letras A juntas, trata-se AA como um bloco: 3! = 6 arrumações de {AA, C, S}, sem troca interna, porque as letras são iguais. Sem as letras A juntas: 12 − 6 = 6. Pelas lacunas: C e S se arrumam de 2 maneiras e deixam 3 lacunas para as duas letras A, C(3, 2) = 3: 2 · 3 = 6.\n\n12 é o total de anagramas. 24 é 4!, como se as duas letras A fossem diferentes. 3 esquece a ordem de C e S. E 18 é 24 − 6, que parte de 4! em vez de 12.",
      v: { i: () => qual(anagramas("CASA").filter((w) => !w.includes("AA")).length, o) },
    };
  })(),
  (() => {
    const o = ["100", "16", "30", "36", "225"];
    return {
      d: "media",
      e: "Quantos retângulos, incluindo os quadrados, podem ser vistos num tabuleiro quadriculado de 4 por 4 casas?",
      o,
      x: "Um retângulo fica determinado por 2 das 5 linhas verticais do tabuleiro e 2 das 5 linhas horizontais: C(5, 2) · C(5, 2) = 10 · 10 = 100. Os quadrados são 30 deles: 16 de lado 1, 9 de lado 2, 4 de lado 3 e 1 de lado 4.\n\n16 conta só as casas. 30 conta só os quadrados. 36 usa C(4, 2)², escolhendo entre 4 linhas em vez de 5. E 225 usa C(6, 2)², que corresponderia a um tabuleiro de 5 por 5.",
      v: { i: () => { let n = 0; for (let x1 = 0; x1 <= 4; x1++) for (let x2 = x1 + 1; x2 <= 4; x2++) for (let y1 = 0; y1 <= 4; y1++) for (let y2 = y1 + 1; y2 <= 4; y2++) n++; return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["512", "1.024", "256", "252", "511"];
    return {
      d: "media",
      e: "Qual é o valor da soma C(10, 0) + C(10, 2) + C(10, 4) + … + C(10, 10)?",
      o,
      x: "A soma de todos os C(10, k) é 2¹⁰ = 1.024. Pelo binômio de Newton com x = −1, (1 − 1)¹⁰ = 0 = Σ(−1)ᵏ C(10, k): a soma dos termos de k par é igual à dos de k ímpar. Então cada uma vale 1.024/2 = 512.\n\n1.024 é a soma de todos os termos. 256 é 2⁸, que divide por 4. 252 é C(10, 5), o termo central, que nem entra nessa soma, porque 5 é ímpar. E 511 é 512 − 1, como se C(10, 0) não contasse.",
      v: { i: () => qual([0, 2, 4, 6, 8, 10].reduce((s, k) => s + combinacoes(intervalo(1, 10), k).length, 0), o) },
    };
  })(),
  (() => {
    const o = ["98.176", "358.800", "456.976", "14.950", "26"];
    return {
      d: "media",
      e: "Uma senha tem 4 letras escolhidas entre as 26 do alfabeto, podendo haver repetição. Quantas senhas têm pelo menos uma letra repetida?",
      o,
      x: "O total de senhas é 26⁴ = 456.976. As que não têm letra repetida são 26 · 25 · 24 · 23 = 358.800. As que têm pelo menos uma repetição são a diferença: 456.976 − 358.800 = 98.176. Contar pelo complemento evita separar os vários tipos de repetição — um par, dois pares, três iguais, quatro iguais.\n\n358.800 é o número de senhas sem repetição. 456.976 é o total. 14.950 é C(26, 4), que escolhe as letras sem ordem e sem repetição. E 26 conta só as senhas com as quatro letras iguais.",
      v: { i: () => { let n = 0; for (let a = 0; a < 26; a++) for (let b = 0; b < 26; b++) for (let c = 0; c < 26; c++) for (let d = 0; d < 26; d++) if (new Set([a, b, c, d]).size < 4) n++; return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["20", "10", "5", "25", "40"];
    /* cinco circunferências de raio 1 com centros próximos; conta os pontos de interseção distintos */
    const C = [[0, 0], [0.5, 0.1], [0.2, 0.6], [0.7, 0.55], [0.35, 0.3]];
    const cortes = (p, q) => { const d = Math.hypot(q[0] - p[0], q[1] - p[1]); const a = d / 2, h = Math.sqrt(1 - a * a); const mx = p[0] + ((q[0] - p[0]) * a) / d, my = p[1] + ((q[1] - p[1]) * a) / d; return [[mx + (h * (q[1] - p[1])) / d, my - (h * (q[0] - p[0])) / d], [mx - (h * (q[1] - p[1])) / d, my + (h * (q[0] - p[0])) / d]]; };
    return {
      d: "media",
      e: "Qual é o maior número possível de pontos de interseção entre 5 circunferências distintas de um mesmo plano?",
      o,
      x: "Duas circunferências distintas se cortam em no máximo 2 pontos. Com 5 circunferências, há C(5, 2) = 10 pares, e cada par contribui com até 2 pontos: 10 · 2 = 20, quando todos os pontos de interseção são distintos — o que se consegue com circunferências de mesmo raio e centros próximos, em posição geral.\n\n10 conta um ponto por par, como se fossem retas. 5 conta um ponto por circunferência. 25 é 5². E 40 conta cada par duas vezes, usando os A(5, 2) = 20 pares ordenados.",
      v: { i: () => { const pts = combinacoes(intervalo(0, 4), 2).flatMap(([i, j]) => cortes(C[i], C[j])); const distintos = pts.filter((p, k) => pts.findIndex((q) => Math.hypot(p[0] - q[0], p[1] - q[1]) < 1e-9) === k); if (distintos.length !== 2 * combinacoes(intervalo(0, 4), 2).length) throw new Error("posição geral"); return qual(distintos.length, o); } },
    };
  })(),
  (() => {
    const o = ["570", "1.140", "120", "450", "240"];
    return {
      d: "media",
      e: "De quantas maneiras se podem escolher 3 números distintos entre 1, 2, 3, …, 20 de modo que a soma deles seja par?",
      o,
      x: "Há 10 números pares e 10 ímpares. A soma de três números é par em dois casos: os três pares, C(10, 3) = 120; ou dois ímpares e um par, C(10, 2) · 10 = 45 · 10 = 450. Total: 120 + 450 = 570 — exatamente metade das C(20, 3) = 1.140 escolhas.\n\n1.140 é o total de escolhas, sem a condição. 120 conta só o caso dos três pares. 450 conta só o caso de dois ímpares e um par. E 240 soma os trios só de pares e só de ímpares, mas a soma de três ímpares é ímpar.",
      v: { i: () => qual(combinacoes(intervalo(1, 20), 3).filter((c) => (c[0] + c[1] + c[2]) % 2 === 0).length, o) },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["135", "15", "9", "265", "180"];
    return {
      d: "dificil",
      e: "Quantas permutações de (1, 2, 3, 4, 5, 6) mantêm exatamente dois números na sua posição original?",
      o,
      x: "Escolhem-se os 2 números que ficam fixos: C(6, 2) = 15. Os outros 4 precisam sair todos do lugar — uma permutação caótica de 4 elementos, D₄ = 4! − 4 · 3! + 6 · 2! − 4 · 1! + 1 = 24 − 24 + 12 − 4 + 1 = 9. Total: 15 · 9 = 135.\n\n15 conta só a escolha dos números fixos. 9 conta só o arranjo dos demais. 265 é D₆, que não permite nenhum número fixo. E 180 usa 4!/2 = 12 no lugar de D₄, como se metade das permutações dos outros 4 servisse.",
      v: { i: () => qual(permutacoes(intervalo(0, 5)).filter((p) => p.filter((v, i) => v === i).length === 2).length, o) },
    };
  })(),
  (() => {
    const o = ["21", "66", "45", "36", "6"];
    return {
      d: "dificil",
      e: "Quantas são as soluções inteiras de x + y + z = 10 com cada incógnita entre 0 e 5, inclusive?",
      o,
      x: "Sem o limite superior, são C(12, 2) = 66 soluções não negativas. Retiram-se as que têm alguma incógnita maior que 5. Se x ≥ 6, fazendo x = 6 + x′: x′ + y + z = 4, com C(6, 2) = 15 soluções; o mesmo para y e para z: 45. Duas incógnitas ao mesmo tempo maiores que 5 somariam mais de 10, o que é impossível. Resultam 66 − 45 = 21.\n\n66 ignora o limite. 45 é o número de soluções que violam o limite. 36 é C(9, 2), a contagem das soluções positivas, sem limite superior. E 6 conta só as permutações de (5, 4, 1), uma das cinco famílias de soluções.",
      v: { i: () => { let n = 0; for (const x of intervalo(0, 5)) for (const y of intervalo(0, 5)) if (10 - x - y >= 0 && 10 - x - y <= 5) n++; return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["219", "220", "286", "165", "282"];
    return {
      d: "dificil",
      e: "Quantos números de quatro algarismos têm a soma dos algarismos igual a 10?",
      o,
      x: "Com os algarismos a, b, c, d e a ≥ 1, faz-se a = 1 + a′: a′ + b + c + d = 9, com todas as incógnitas não negativas. Pelo método das bolinhas e barras, há C(12, 3) = 220 soluções. Mas um algarismo não passa de 9: a′ ≤ 8, e a única solução que viola isso é a′ = 9, b = c = d = 0, que daria a = 10. Resultam 220 − 1 = 219.\n\n220 esquece que a não pode valer 10. 286 é C(13, 3), que permite a = 0 e aceita, por exemplo, 0190 como número de quatro algarismos. 165 é C(11, 3), com um lugar a menos. E 282 desconta dos 286 as soluções com algum algarismo igual a 10, mas continua aceitando o zero na frente.",
      v: { i: () => qual(intervalo(1000, 9999).filter((n) => [...String(n)].reduce((s, d) => s + Number(d), 0) === 10).length, o) },
    };
  })(),
  (() => {
    const o = ["25", "24", "13", "36", "37"];
    /* existe um jeito de pôr n pessoas em 12 meses sem 3 no mesmo mês? (encher cada mês com até 2) */
    const evitavel = (n) => n <= 12 * 2;
    return {
      d: "dificil",
      e: "Qual é o menor número de pessoas que um grupo deve ter para que seja certo haver pelo menos 3 delas fazendo aniversário no mesmo mês?",
      o,
      x: "Pelo princípio da casa dos pombos: com 24 pessoas ainda é possível que cada mês tenha exatamente 2 aniversariantes, sem nenhum trio. Com a 25ª pessoa, algum mês que já tinha 2 recebe a terceira. Em geral, para garantir k elementos num mesmo compartimento entre n compartimentos, são necessários n(k − 1) + 1 elementos: 12 · 2 + 1 = 25.\n\n24 é o maior grupo em que ainda se pode evitar o trio. 13 garante só 2 no mesmo mês. 36 é 12 · 3, que garante o trio, mas não é o menor número. E 37 é 12 · 3 + 1, que garantiria 4 no mesmo mês.",
      /* distribuição gulosa: com n ≤ 24 sempre dá para ter no máximo 2 por mês; o primeiro n em que isso falha é a resposta */
      v: { i: () => { let n = 1; while (evitavel(n)) { const meses = Array(12).fill(0); for (let p = 0; p < n; p++) meses[p % 12]++; if (Math.max(...meses) > 2) throw new Error("distribuição"); n++; } const meses = Array(12).fill(0); for (let p = 0; p < n; p++) meses[p % 12]++; if (Math.max(...meses) < 3) throw new Error("não força"); return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["12", "60", "3", "4", "24"];
    return {
      d: "dificil",
      e: "Quantos anagramas da palavra BANANA não têm duas letras A vizinhas?",
      o,
      x: "Primeiro arrumam-se as letras que não são A — B, N, N —, de 3!/2! = 3 maneiras. Elas deixam 4 lacunas (antes, entre e depois), e as três letras A, iguais entre si, ocupam 3 lacunas diferentes: C(4, 3) = 4. Total: 3 · 4 = 12. Um exemplo é ABANAN.\n\n60 é o total de anagramas de BANANA, 6!/(3! · 2!), sem a restrição. 3 conta só as arrumações de B, N e N. 4 conta só as posições das letras A. E 24 usa 3! = 6 arrumações para B, N e N, como se os dois N fossem diferentes.",
      v: { i: () => qual(anagramas("BANANA").filter((w) => !w.includes("AA")).length, o) },
    };
  })(),
  (() => {
    const o = ["28", "91", "55", "21", "36"];
    return {
      d: "dificil",
      e: "Quantas soluções inteiras tem a equação x + y + z = 12 quando se exige x ≥ 1, y ≥ 2 e z ≥ 3?",
      o,
      x: "Fazendo x = 1 + x′, y = 2 + y′ e z = 3 + z′, com x′, y′, z′ ≥ 0: x′ + y′ + z′ = 12 − 6 = 6. Pelo método das bolinhas e barras, são C(8, 2) = 28 soluções.\n\n91 é C(14, 2), a contagem sem as condições mínimas. 55 é C(11, 2), que exige só que cada incógnita seja positiva (desconta 3, e não 6). 21 e 36 são C(7, 2) e C(9, 2): descontam da soma 7 e 5, em vez de 6.",
      v: { i: () => { let n = 0; for (const x of intervalo(1, 12)) for (const y of intervalo(2, 12)) if (12 - x - y >= 3) n++; return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["16", "10", "19", "4", "56"];
    return {
      d: "dificil",
      e: "Qual é o coeficiente de x⁵ no desenvolvimento de (1 + x + x²)⁴?",
      o,
      x: "Cada um dos 4 fatores contribui com 1, x ou x², e os expoentes precisam somar 5. Se a, b e c fatores contribuem com 1, x e x²: a + b + c = 4 e b + 2c = 5. As possibilidades são c = 1, b = 3, a = 0, com 4!/(0! · 3! · 1!) = 4 maneiras, e c = 2, b = 1, a = 1, com 4!/(1! · 1! · 2!) = 12 maneiras. Total: 4 + 12 = 16.\n\n19 é o coeficiente de x⁴, o termo central, e 10, o de x⁶. 4 conta só o caso c = 1. E 56 é C(8, 5), que trata o trinômio como se fosse (1 + x)⁸.",
      v: { i: () => { const p = potPol([1, 1, 1], 4).reverse(); return qual(p[5], o); } },
    };
  })(),
  (() => {
    const o = ["271", "300", "729", "270", "243"];
    return {
      d: "dificil",
      e: "Quantos números inteiros de 1 a 1.000 têm pelo menos um algarismo igual a 7?",
      o,
      x: "Pelo complemento. Pensando em três algarismos, com zeros à esquerda, os números de 000 a 999 sem nenhum 7 são 9 · 9 · 9 = 729. Tirando o 000, que não está no intervalo, e acrescentando o 1.000, que não tem 7, continuam sendo 729 números sem 7 de 1 a 1.000. Com pelo menos um 7: 1.000 − 729 = 271.\n\n300 soma 100 números por posição (centena, dezena ou unidade iguais a 7), contando várias vezes os que têm mais de um 7. 729 é a quantidade dos que não têm 7. 270 corrige as contagens duplas, mas esquece de devolver o 777, descontado vezes demais. E 243 conta só os números com exatamente um algarismo 7.",
      v: { i: () => qual(intervalo(1, 1000).filter((n) => String(n).includes("7")).length, o) },
    };
  })(),
  (() => {
    const o = ["840", "210", "5.040", "2.100", "40"];
    return {
      d: "dificil",
      e: "De um grupo de 10 pessoas, deve-se formar uma comissão de 4 membros, um dos quais será o presidente. De quantas maneiras isso pode ser feito?",
      o,
      x: "Escolhe-se a comissão, C(10, 4) = 210, e depois o presidente entre os 4 membros: 210 · 4 = 840. Outro caminho: escolhe-se primeiro o presidente, de 10 maneiras, e depois os outros 3 membros entre os 9 restantes, C(9, 3) = 84: 10 · 84 = 840.\n\n210 esquece a escolha do presidente. 5.040 é A(10, 4), que dá um cargo diferente a cada um dos 4 membros. 2.100 escolhe o presidente entre as 10 pessoas depois de formar a comissão, podendo escolher alguém de fora dela. E 40 multiplica 10 por 4.",
      v: { i: () => qual(combinacoes(intervalo(1, 10), 4).reduce((s, c) => s + c.length, 0), o) },
    };
  })(),
  (() => {
    const o = ["144", "89", "1.024", "512", "55"];
    return {
      d: "dificil",
      e: "Quantos subconjuntos do conjunto {1, 2, 3, …, 10}, incluindo o vazio, não contêm dois números consecutivos?",
      o,
      x: "Seja aₙ o número desses subconjuntos de {1, …, n}. Ou o subconjunto não contém n (aₙ₋₁ possibilidades), ou contém n e então não contém n − 1 (aₙ₋₂ possibilidades): aₙ = aₙ₋₁ + aₙ₋₂, com a₁ = 2 (o vazio e {1}) e a₂ = 3. A sequência é 2, 3, 5, 8, 13, 21, 34, 55, 89, 144: a₁₀ = 144, um número de Fibonacci.\n\n89 é a₉, e 55 é a₈. 1.024 é 2¹⁰, o total de subconjuntos. E 512 é a metade disso, um palpite.",
      /* máscaras de 10 bits sem dois bits vizinhos acesos */
      v: { i: () => qual(intervalo(0, 1023).filter((m) => (m & (m >> 1)) === 0).length, o) },
    };
  })(),
];
