/* Rascunho — Exatas nível militar / Números complexos e forma polar.

   A conferência faz as contas com complexos por multiplicação direta (sem
   De Moivre), acha raízes por Durand–Kerner ou por Newton e lê o texto de
   cada alternativa (lerZ, lerC, lerReal), para que um sinal trocado na
   alternativa apareça como erro. Lugares geométricos são conferidos com
   pontos calculados por bisseção sobre a condição original, e áreas, por
   contagem numa malha. */

import { unicoV, escolhe, lerC, lerReal, lerAngulo, lerZ, cx, somaC, subC, vezesC, divC, potC, modC, argC, conjC, igualC, polar, avaliaC, raizesPol, perto, bissecao } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Números complexos e forma polar";
export const arquivo = "exatas-militar__numeros-complexos-e-forma-polar";

const I = cx(0, 1);
const UM = cx(1);
const grau = (g) => (g * Math.PI) / 180;
/* Índice da única alternativa que vale z (lendo o texto da alternativa). */
const qual = (z, alt) => unicoV(alt.map((t) => igualC(lerZ(t), z, 1e-7)));
/* Idem, para resposta real. */
const qualR = (x, alt) => unicoV(alt.map((t) => { const w = lerC(t); return Math.abs(w.im) < 1e-12 && perto(w.re, x, 1e-7); }));
/* Área de um polígono pelos vértices (fórmula do cadarço), em ordem de argumento. */
const area = (pts) => { const p = [...pts].sort((a, b) => argC(a) - argC(b)); return Math.abs(p.reduce((s, a, k) => { const b = p[(k + 1) % p.length]; return s + a.re * b.im - b.re * a.im; }, 0)) / 2; };
/* Pontos (x, y ≥ 0) de um lugar geométrico dado por h(x, y) = 0, com h crescente em y. */
const lugar = (h, xs, yMax = 50) => xs.map((x) => [x, bissecao((y) => h(x, y), 0, yMax)]);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["−i", "i", "−1", "1", "0"];
    return {
      d: "facil",
      e: "Sendo i a unidade imaginária (i² = −1), qual é o valor de i²⁰²⁷?",
      o,
      x: "As potências de i se repetem de 4 em 4: i¹ = i, i² = −1, i³ = −i, i⁴ = 1, e o ciclo recomeça. Basta olhar o resto da divisão do expoente por 4: 2027 = 4 × 506 + 3, então i²⁰²⁷ = i³ = −i.\n\ni seria a resposta se o resto fosse 1, e −1, se fosse 2 — erros comuns na divisão por 4. 1 corresponde a expoente múltiplo de 4. E 0 é a soma de quatro potências consecutivas de i (i + i² + i³ + i⁴), e não o valor de uma potência isolada.",
      v: { i: () => qual(potC(I, 2027), o) },
    };
  })(),
  (() => {
    const o = ["5 + i", "−1 + i", "2 − 3i", "5 − i", "5"];
    return {
      d: "facil",
      e: "Qual é a forma algébrica do produto (2 + 3i)(1 − i)?",
      o,
      x: "Aplicando a distributiva: (2 + 3i)(1 − i) = 2 − 2i + 3i − 3i². Como i² = −1, o último termo vale +3, e o resultado é (2 + 3) + (−2 + 3)i = 5 + i.\n\n−1 + i trata i² como +1, e o termo −3i² vira −3. 2 − 3i multiplica parte real por parte real e coeficiente imaginário por coeficiente imaginário (2 · 1 e 3 · (−1)), como se o produto fosse feito coordenada a coordenada. 5 − i erra o sinal ao somar −2i + 3i. E 5 fica só com os termos 2 e −3i² e esquece os termos cruzados.",
      v: { i: () => qual(vezesC(cx(2, 3), cx(1, -1)), o) },
    };
  })(),
  (() => {
    const o = ["5", "7", "25", "1", "√7"];
    return {
      d: "facil",
      e: "Qual é o módulo do número complexo z = 3 − 4i?",
      o,
      x: "O módulo é a distância do afixo à origem: |z| = √(a² + b²) = √(3² + (−4)²) = √(9 + 16) = √25 = 5. O sinal da parte imaginária não importa, porque ela entra elevada ao quadrado.\n\n7 soma os valores absolutos das partes (3 + 4), como se o módulo fosse a soma das coordenadas. 25 esquece de tirar a raiz quadrada. 1 subtrai 3 de 4, sem elevar nada ao quadrado. E √7 tira a raiz da soma 3 + 4, sem elevar as partes ao quadrado.",
      v: { i: () => { const z = cx(3, -4); const zz = vezesC(z, conjC(z)); return qualR(Math.sqrt(zz.re), o); } },
    };
  })(),
  (() => {
    const o = ["2i", "2 + 2i", "0", "2", "−2i"];
    return {
      d: "facil",
      e: "Qual é o valor de (1 + i)², sendo i a unidade imaginária?",
      o,
      x: "Pelo quadrado da soma: (1 + i)² = 1² + 2 · 1 · i + i² = 1 + 2i − 1 = 2i. O quadrado de 1 + i é um número imaginário puro.\n\n2 + 2i trata i² como +1. 0 eleva cada parcela separadamente (1² + i² = 1 − 1), esquecendo o termo 2i do meio. 2 esquece o termo do meio e ainda trata i² como +1 (1 + 1). E −2i erra o sinal do termo do meio, como no quadrado de 1 − i.",
      v: { i: () => qual(potC(cx(1, 1), 2), o) },
    };
  })(),
  (() => {
    const o = ["3", "5", "−4", "4", "1"];
    return {
      d: "facil",
      e: "Qual é a parte real do número complexo (2 − i)²?",
      o,
      x: "Desenvolvendo: (2 − i)² = 4 − 4i + i² = 4 − 4i − 1 = 3 − 4i. A parte real é 3, e a imaginária é −4.\n\n5 trata i² como +1 (4 + 1). −4 é a parte imaginária, e não a real. 4 eleva só a parte real ao quadrado e esquece a contribuição de i², que é real. E 1 subtrai as partes antes de elevar (2 − 1 = 1, e 1² = 1), como se i fosse o número 1. Repare que a parte real do quadrado não é o quadrado da parte real: o i² também contribui.",
      v: { i: () => qualR(potC(cx(2, -1), 2).re, o) },
    };
  })(),
  (() => {
    const o = ["3 − 4i", "3 + 4i", "5 − 4i", "−3 + 4i", "4 − 4i"];
    return {
      d: "facil",
      e: "Qual é o conjugado do número complexo (2 + i)²?",
      o,
      x: "Primeiro o quadrado: (2 + i)² = 4 + 4i + i² = 3 + 4i. O conjugado troca o sinal da parte imaginária: 3 − 4i. Dá o mesmo conjugar antes e elevar depois: (2 − i)² = 4 − 4i − 1 = 3 − 4i.\n\n3 + 4i é o próprio quadrado, sem conjugar. 5 − 4i trata i² como +1. −3 + 4i troca o sinal da parte real, e não o da imaginária. E 4 − 4i esquece o i² ao desenvolver o quadrado.",
      v: { i: () => qual(conjC(potC(cx(2, 1), 2)), o) },
    };
  })(),
  (() => {
    const o = ["13", "5", "√13", "6", "9"];
    return {
      d: "facil",
      e: "Para z = 3 − 2i, qual é o valor do produto z · z̄, em que z̄ é o conjugado de z?",
      o,
      x: "z · z̄ = (3 − 2i)(3 + 2i) = 9 + 6i − 6i − 4i² = 9 + 4 = 13. Em geral, z · z̄ = a² + b², o quadrado do módulo — por isso o produto de um complexo pelo seu conjugado é sempre real e não negativo.\n\n5 faz 9 − 4, tratando i² como +1. √13 é o módulo de z, e não o produto. 6 é z + z̄, o dobro da parte real. E 9 multiplica só as partes reais e esquece o termo −4i².",
      v: { i: () => { const z = cx(3, -2); const p = vezesC(z, conjC(z)); if (Math.abs(p.im) > 1e-12) throw new Error("não real"); return qualR(p.re, o); } },
    };
  })(),
  (() => {
    const o = ["2 + 2i", "2 + i", "4 + 4i", "2 + 4i", "2 + (3/2)i"];
    return {
      d: "facil",
      e: "Qual é o número complexo z que satisfaz a equação 2z − i = 4 + 3i?",
      o,
      x: "Isolando z: 2z = 4 + 3i + i = 4 + 4i, e z = (4 + 4i)/2 = 2 + 2i. Conferindo: 2(2 + 2i) − i = 4 + 4i − i = 4 + 3i.\n\n2 + i subtrai i do lado direito em vez de somar (4 + 3i − i = 4 + 2i). 4 + 4i esquece de dividir por 2. 2 + 4i divide só a parte real por 2. E 2 + (3/2)i divide o lado direito por 2 sem antes passar o i para lá. A ordem é a mesma das equações reais: primeiro isola-se o termo com z, depois divide-se pelo coeficiente.",
      v: { i: () => { const sols = []; for (let a = -20; a <= 20; a++) for (let b = -20; b <= 20; b++) { const z = cx(a / 2, b / 2); if (igualC(subC(vezesC(cx(2), z), I), cx(4, 3))) sols.push(z); } if (sols.length !== 1) throw new Error("solução"); return qual(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["1/5 − (2/5)i", "1 − (1/2)i", "1 − 2i", "1/3 − (2/3)i", "1/5 + (2/5)i"];
    return {
      d: "facil",
      e: "Qual é o inverso multiplicativo do número complexo 1 + 2i, isto é, o número w tal que (1 + 2i)w = 1?",
      o,
      x: "w = 1/(1 + 2i). Multiplicando numerador e denominador pelo conjugado: (1 − 2i)/((1 + 2i)(1 − 2i)) = (1 − 2i)/(1 + 4) = 1/5 − (2/5)i. Conferindo: (1 + 2i)(1 − 2i)/5 = 5/5 = 1.\n\n1 − (1/2)i inverte parcela por parcela (1/1 e 1/(2i) = −i/2), o que não vale para somas. 1 − 2i só conjuga, sem dividir pelo quadrado do módulo. 1/3 − (2/3)i divide por 1 + 2, e não por 1² + 2². E 1/5 + (2/5)i esquece de trocar o sinal da parte imaginária.",
      v: { i: () => unicoV(o.map((t) => igualC(vezesC(cx(1, 2), lerC(t)), UM))) },
    };
  })(),
  (() => {
    const o = ["5√2", "10", "5 + √2", "7√2", "5"];
    return {
      d: "facil",
      e: "Qual é o módulo do produto (3 + 4i)(1 − i)?",
      o,
      x: "O módulo do produto é o produto dos módulos: |3 + 4i| = 5 e |1 − i| = √2, então o resultado é 5√2. Conferindo pela conta direta: (3 + 4i)(1 − i) = 3 − 3i + 4i − 4i² = 7 + i, cujo módulo é √(49 + 1) = √50 = 5√2.\n\n10 usa |1 − i| = 2, esquecendo a raiz. 5 + √2 soma os módulos em vez de multiplicá-los. 7√2 usa a soma das partes (3 + 4) no lugar do módulo de 3 + 4i. E 5 ignora o segundo fator.",
      v: { i: () => qualR(modC(vezesC(cx(3, 4), cx(1, -1))), o) },
    };
  })(),
  (() => {
    const o = ["3(cos 3π/2 + i·sen 3π/2)", "3(cos π/2 + i·sen π/2)", "3(cos π + i·sen π)", "3(cos 0 + i·sen 0)", "9(cos 3π/2 + i·sen 3π/2)"];
    return {
      d: "facil",
      e: "Qual é a forma trigonométrica do número complexo z = −3i, com argumento no intervalo [0, 2π)?",
      o,
      x: "O afixo de −3i é o ponto (0, −3), sobre a parte negativa do eixo imaginário. A distância à origem é 3, e o ângulo, medido a partir do eixo real positivo no sentido anti-horário, é 3π/2 (270°). Logo z = 3(cos 3π/2 + i·sen 3π/2).\n\nCom argumento π/2, o número seria 3i, do lado positivo do eixo imaginário. Com π, seria −3; com 0, seria 3 — os dois ficam no eixo real. E o módulo 9 eleva 3 ao quadrado, sem motivo.",
      v: { i: () => qual(cx(0, -3), o) },
    };
  })(),
  (() => {
    const o = ["0", "25", "i", "1", "−1"];
    return {
      d: "facil",
      e: "Qual é o valor da soma i + i² + i³ + … + i¹⁰⁰, sendo i a unidade imaginária?",
      o,
      x: "Quatro potências consecutivas de i somam zero: i + i² + i³ + i⁴ = i − 1 − i + 1 = 0. De i¹ a i¹⁰⁰ há 100 parcelas, ou 25 blocos completos de quatro, e cada bloco vale 0. A soma total é 0.\n\n25 conta os blocos em vez de somá-los. i é o primeiro termo, que alguém pode achar que sobra fora dos blocos. 1 é o valor de i¹⁰⁰, a última parcela, e não o da soma. E −1 é i², uma parcela isolada.",
      v: { i: () => { let s = cx(0), p = UM; for (let k = 1; k <= 100; k++) { p = vezesC(p, I); s = somaC(s, p); } return qual(s, o); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["1/2 + (5/2)i", "3 − 2i", "5/2 + (1/2)i", "1 + 5i", "5/2 − (1/2)i"];
    return {
      d: "media",
      e: "Qual é a forma algébrica do quociente (3 + 2i)/(1 − i)?",
      o,
      x: "Para dividir, multiplicam-se numerador e denominador pelo conjugado do denominador, 1 + i: (3 + 2i)(1 + i) = 3 + 3i + 2i + 2i² = 1 + 5i, e (1 − i)(1 + i) = 1 + 1 = 2. O quociente é (1 + 5i)/2 = 1/2 + (5/2)i. Conferindo: (1 − i)(1/2 + (5/2)i) = 1/2 + (5/2)i − (1/2)i + 5/2 = 3 + 2i.\n\n3 − 2i divide parte real por parte real e coeficiente imaginário por coeficiente imaginário. 5/2 + (1/2)i troca as partes. 1 + 5i esquece de dividir por 2. E 5/2 − (1/2)i multiplica o numerador por 1 − i, e não pelo conjugado 1 + i.",
      v: { i: () => unicoV(o.map((t) => igualC(vezesC(cx(1, -1), lerC(t)), cx(3, 2)))) },
    };
  })(),
  (() => {
    const o = ["2 + 3i", "2 − 3i", "2 − i", "2 + i", "3 + 2i"];
    return {
      d: "media",
      e: "Qual é o número complexo z que satisfaz z + 2z̄ = 6 − 3i, em que z̄ é o conjugado de z?",
      o,
      x: "Escrevendo z = a + bi, o conjugado é a − bi, e z + 2z̄ = a + bi + 2a − 2bi = 3a − bi. Igualando a 6 − 3i: 3a = 6 e −b = −3, logo a = 2, b = 3 e z = 2 + 3i. Conferindo: (2 + 3i) + 2(2 − 3i) = 6 − 3i.\n\n2 − 3i erra o sinal ao resolver −b = −3. 2 − i trata z̄ como se fosse o próprio z (3z = 6 − 3i). 2 + i combina esse erro com um sinal trocado. E 3 + 2i troca a parte real com a imaginária.",
      v: { i: () => { const sols = []; for (let a = -20; a <= 20; a++) for (let b = -20; b <= 20; b++) { const z = cx(a / 2, b / 2); if (igualC(somaC(z, vezesC(cx(2), conjC(z))), cx(6, -3))) sols.push(z); } if (sols.length !== 1) throw new Error("solução"); return qual(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["2(cos π/3 + i·sen π/3)", "2(cos π/6 + i·sen π/6)", "4(cos π/3 + i·sen π/3)", "2(cos 2π/3 + i·sen 2π/3)", "2(cos 5π/3 + i·sen 5π/3)"];
    return {
      d: "media",
      e: "Qual é a forma trigonométrica do número complexo z = 1 + i√3?",
      o,
      x: "Módulo: |z| = √(1² + (√3)²) = √4 = 2. Argumento: cos θ = 1/2 e sen θ = √3/2, com o afixo no 1º quadrante, o que dá θ = π/3. Então z = 2(cos π/3 + i·sen π/3).\n\nπ/6 troca os papéis de seno e cosseno (a tangente do argumento é √3, e não 1/√3). O módulo 4 esquece a raiz quadrada. 2π/3 põe o afixo no 2º quadrante, onde a parte real seria negativa. E 5π/3 é o argumento do conjugado, 1 − i√3.",
      v: { i: () => qual(cx(1, Math.sqrt(3)), o) },
    };
  })(),
  (() => {
    const o = ["32i", "32", "−32i", "1.024i", "10 + 10i"];
    return {
      d: "media",
      e: "Qual é o valor de (1 + i)¹⁰, sendo i a unidade imaginária?",
      o,
      x: "Em forma trigonométrica, 1 + i = √2(cos π/4 + i·sen π/4). Pela fórmula de De Moivre, (1 + i)¹⁰ = (√2)¹⁰(cos 10π/4 + i·sen 10π/4) = 32(cos 5π/2 + i·sen 5π/2). Como 5π/2 = 2π + π/2, o resultado é 32i. Outro caminho: (1 + i)² = 2i, e (2i)⁵ = 32i⁵ = 32i.\n\n32 acerta o módulo e esquece o argumento. −32i erra a redução do ângulo e toma 3π/2. 1.024i eleva 2 à décima, e não √2. E 10 + 10i distribui a potência sobre a soma, como se (1 + i)¹⁰ fosse 10 · 1 + 10 · i.",
      v: { i: () => qual(potC(cx(1, 1), 10), o) },
    };
  })(),
  (() => {
    const o = ["64", "−64", "64i", "4.096", "8"];
    return {
      d: "media",
      e: "Qual é o valor de (1 + i√3)⁶, sendo i a unidade imaginária?",
      o,
      x: "O número 1 + i√3 tem módulo 2 e argumento π/3. Pela fórmula de De Moivre, (1 + i√3)⁶ = 2⁶(cos 2π + i·sen 2π) = 64 · 1 = 64. O resultado é real e positivo porque o argumento, multiplicado por 6, completa exatamente uma volta.\n\n−64 toma 6 · π/3 como π, e não 2π. 64i erra o argumento final, como se fosse π/2. 4.096 usa o módulo 4, sem a raiz (4⁶). E 8 eleva o módulo ao cubo, e não à sexta potência.",
      v: { i: () => qual(potC(cx(1, Math.sqrt(3)), 6), o) },
    };
  })(),
  (() => {
    const o = ["5π/4", "π/4", "3π/4", "7π/4", "3π/2"];
    return {
      d: "media",
      e: "Qual é o argumento principal, no intervalo [0, 2π), do número complexo z = −1 − i?",
      o,
      x: "O afixo de −1 − i é o ponto (−1, −1), no 3º quadrante, sobre a bissetriz. O ângulo de referência é π/4 (tangente igual a 1), e no 3º quadrante o argumento é π + π/4 = 5π/4.\n\nπ/4 ignora os sinais e fica no 1º quadrante, que é o de 1 + i. 3π/4 é o argumento de −1 + i, no 2º quadrante. 7π/4 é o de 1 − i, no 4º. E 3π/2 aponta para a parte negativa do eixo imaginário, que é a direção de −i.",
      v: { i: () => unicoV(o.map((t) => perto(lerAngulo(t), argC(cx(-1, -1))))) },
    };
  })(),
  (() => {
    const o = ["−1", "1", "0", "6", "i"];
    return {
      d: "media",
      e: "Qual é o produto das seis raízes sextas da unidade, isto é, das seis soluções complexas de z⁶ = 1?",
      o,
      x: "As raízes são cos(kπ/3) + i·sen(kπ/3), para k = 0, 1, …, 5. O produto tem módulo 1 e argumento igual à soma dos argumentos: (0 + 1 + 2 + 3 + 4 + 5)π/3 = 5π, que equivale a π. Logo o produto é −1. Pelas relações de Girard em z⁶ − 1 = 0, o produto das raízes é (−1)⁶ · (−1) = −1.\n\n1 lembra que as raízes conjugadas formam pares de produto 1, mas esquece as duas raízes reais, 1 e −1, cujo produto é −1. 0 confunde o produto com a soma, que é zero. 6 conta as raízes. E i não corresponde a nenhuma conta com os argumentos.",
      v: { i: () => qual(raizesPol([1, 0, 0, 0, 0, 0, -1]).reduce(vezesC, UM), o) },
    };
  })(),
  (() => {
    const o = ["2 + 3i e −2 − 3i", "2 − 3i e −2 + 3i", "3 + 2i e −3 − 2i", "1 + 6i e −1 − 6i", "3 − 2i e −3 + 2i"];
    return {
      d: "media",
      e: "Quais são os números complexos z tais que z² = −5 + 12i?",
      o,
      x: "Com z = a + bi, z² = a² − b² + 2abi. Igualando a −5 + 12i: a² − b² = −5 e ab = 6. Das soluções de ab = 6, a que satisfaz a² − b² = −5 é a = 2, b = 3 (4 − 9 = −5), e também a = −2, b = −3. As raízes são 2 + 3i e −2 − 3i. Conferindo: (2 + 3i)² = 4 + 12i − 9 = −5 + 12i.\n\n2 − 3i e −2 + 3i têm quadrado −5 − 12i. 3 + 2i e −3 − 2i têm quadrado 5 + 12i: trocaram as partes. 1 + 6i dá −35 + 12i. E 3 − 2i dá 5 − 12i.",
      v: { i: () => unicoV(o.map((t) => t.split(" e ").every((w) => igualC(potC(lerC(w), 2), cx(-5, 12))))) },
    };
  })(),
  (() => {
    const o = ["A reta de equação y = −x", "A reta de equação y = x", "A circunferência de centro (1, 0) e raio 1", "O eixo imaginário", "A reta de equação y = x − 1"];
    const conj = [(x, y) => Math.abs(y + x) < 1e-6, (x, y) => Math.abs(y - x) < 1e-6, (x, y) => Math.abs(Math.hypot(x - 1, y) - 1) < 1e-6, (x) => Math.abs(x) < 1e-6, (x, y) => Math.abs(y - (x - 1)) < 1e-6];
    return {
      d: "media",
      e: "No plano de Argand-Gauss, qual é o lugar geométrico dos afixos dos números complexos z que satisfazem |z − 1| = |z + i|?",
      o,
      x: "|z − 1| é a distância de z ao ponto (1, 0), e |z + i| = |z − (−i)| é a distância ao ponto (0, −1). O lugar dos pontos equidistantes de dois pontos é a mediatriz do segmento que os liga. Em coordenadas: (x − 1)² + y² = x² + (y + 1)², que simplifica para −2x = 2y, isto é, y = −x.\n\ny = x seria a mediatriz entre (1, 0) e (0, 1), que corresponde a +i, e não a −i. A circunferência confunde igualdade de distâncias com distância fixa. O eixo imaginário é a mediatriz entre 1 e −1. E y = x − 1 é a reta que passa pelos dois pontos, e não a que fica à mesma distância deles.",
      v: { i: () => { const pts = [-3, -1.5, 0, 0.7, 2.2].map((x) => [x, bissecao((y) => Math.hypot(x - 1, y) ** 2 - Math.hypot(x, y + 1) ** 2, -100, 100)]); return unicoV(conj.map((c) => pts.every(([x, y]) => c(x, y)))); } },
    };
  })(),
  (() => {
    const o = ["9π", "3π", "6π", "4π", "36π"];
    return {
      d: "media",
      e: "Qual é a área da região do plano formada pelos afixos dos números complexos z tais que |z − 2i| ≤ 3?",
      o,
      x: "|z − 2i| ≤ 3 reúne os pontos cuja distância ao afixo de 2i, o ponto (0, 2), é no máximo 3: é o disco de centro (0, 2) e raio 3. A área é π · 3² = 9π.\n\n3π usa o raio sem elevar ao quadrado. 6π é o comprimento da circunferência que limita o disco, e não a área. 4π toma como raio o valor 2, que é a distância do centro à origem. E 36π usa o diâmetro 6 no lugar do raio.",
      v: { i: () => { const h = 0.01; let n = 0; for (let x = -4 + h / 2; x < 4; x += h) for (let y = -2 + h / 2; y < 6; y += h) if (modC(subC(cx(x, y), cx(0, 2))) <= 3) n++; return escolhe(n * h * h, o.map(lerReal), 0.01); } },
    };
  })(),
  (() => {
    const o = ["−1", "1", "i", "−i", "−9"];
    return {
      d: "media",
      e: "Qual é o valor de (cos 20° + i·sen 20°)⁹?",
      o,
      x: "Pela fórmula de De Moivre, (cos 20° + i·sen 20°)⁹ = cos 180° + i·sen 180° = −1 + 0i = −1. O módulo é 1, e 1⁹ = 1; só o argumento muda, de 20° para 9 × 20° = 180°.\n\n1 corresponderia a um argumento de 360°, ou 0°. i e −i correspondem a 90° e 270°, que não resultam de 9 × 20°. E −9 multiplica o módulo por 9, em vez de elevá-lo à nona potência — o módulo 1 continua valendo 1.",
      v: { i: () => qual(potC(polar(1, grau(20)), 9), o) },
    };
  })(),
  (() => {
    const o = ["6i", "5i", "6(cos 50° + i·sen 50°)", "6(cos 1400° + i·sen 1400°)", "−6i"];
    return {
      d: "media",
      e: "Sejam z₁ = 3(cos 70° + i·sen 70°) e z₂ = 2(cos 20° + i·sen 20°). Qual é o produto z₁ · z₂?",
      o,
      x: "No produto de complexos na forma trigonométrica, multiplicam-se os módulos e somam-se os argumentos: z₁ · z₂ = 6(cos 90° + i·sen 90°) = 6(0 + i) = 6i.\n\n5i soma os módulos em vez de multiplicá-los. 6(cos 50° + i·sen 50°) subtrai os argumentos, que é o que se faz na divisão. 6(cos 1400° + i·sen 1400°) multiplica os argumentos. E −6i corresponde ao argumento 270°, que não aparece na conta.",
      v: { i: () => qual(vezesC(polar(3, grau(70)), polar(2, grau(20))), o) },
    };
  })(),
  (() => {
    const o = ["−8 + 8√3i", "8√3 + 8i", "−2 + 2√3i", "−8 − 8√3i", "8 + 8√3i"];
    return {
      d: "media",
      e: "Sendo z = 2(cos 30° + i·sen 30°), qual é a forma algébrica de z⁴?",
      o,
      x: "Por De Moivre, z⁴ = 2⁴(cos 120° + i·sen 120°) = 16(−1/2 + i·√3/2) = −8 + 8√3i. O argumento 4 × 30° = 120° fica no 2º quadrante, onde o cosseno é negativo e o seno é positivo.\n\n8√3 + 8i é 16(cos 30° + i·sen 30°): eleva o módulo e esquece de multiplicar o argumento. −2 + 2√3i eleva o módulo só ao quadrado (4, e não 16). −8 − 8√3i erra o sinal do seno de 120°. E 8 + 8√3i erra o sinal do cosseno.",
      v: { i: () => qual(potC(polar(2, grau(30)), 4), o) },
    };
  })(),
  (() => {
    const o = ["−1", "1", "0", "2", "−2"];
    return {
      d: "media",
      e: "Para que valor real de a o número complexo (a + i)/(1 − i) é real?",
      o,
      x: "Multiplicando pelo conjugado do denominador: (a + i)(1 + i)/2 = (a + ai + i + i²)/2 = [(a − 1) + (a + 1)i]/2. Para ser real, a parte imaginária precisa ser zero: a + 1 = 0, logo a = −1. Conferindo: (−1 + i)/(1 − i) = −1.\n\na = 1 anula a parte real, e o número fica imaginário puro (igual a i). a = 0 dá i/(1 − i) = −1/2 + i/2, que não é real. E a = 2 e a = −2 deixam parte imaginária 3/2 e −1/2, respectivamente.",
      v: { i: () => { const sols = []; for (let k = -40; k <= 40; k++) { const a = k / 4; if (Math.abs(divC(cx(a, 1), cx(1, -1)).im) < 1e-12) sols.push(a); } if (sols.length !== 1) throw new Error("valores"); return qualR(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["Apenas m = 2", "m = 2 ou m = −2", "Apenas m = −2", "Apenas m = 4", "Nenhum valor real de m"];
    const conjuntos = [[2], [2, -2], [-2], [4], []];
    return {
      d: "media",
      e: "Para que valores reais de m o número complexo z = (m² − 4) + (m + 2)i é imaginário puro?",
      o,
      x: "Imaginário puro é o número de parte real nula e parte imaginária não nula. A parte real m² − 4 se anula para m = 2 ou m = −2. Mas, com m = −2, a parte imaginária m + 2 também se anula, e z = 0, que não é imaginário puro. Resta m = 2, que dá z = 4i.\n\n“m = 2 ou m = −2” esquece a exigência de parte imaginária não nula. “Apenas m = −2” fica justamente com o valor que zera o número. m = 4 confunde m² − 4 = 0 com m − 4 = 0. E “nenhum valor” descarta também o m = 2, que funciona.",
      v: { i: () => { const sols = []; for (let k = -40; k <= 40; k++) { const m = k / 4; const z = cx(m * m - 4, m + 2); if (Math.abs(z.re) < 1e-12 && Math.abs(z.im) > 1e-12) sols.push(m); } return unicoV(conjuntos.map((c) => c.length === sols.length && c.every((x) => sols.includes(x)))); } },
    };
  })(),
  (() => {
    const o = ["8", "4", "2", "16", "6"];
    return {
      d: "media",
      e: "Qual é o menor inteiro positivo n para o qual (1 + i)ⁿ é um número real positivo?",
      o,
      x: "1 + i tem argumento π/4, então (1 + i)ⁿ tem argumento nπ/4. Para o número ser real positivo, o argumento precisa ser múltiplo de 2π: nπ/4 = 2πk, ou n = 8k. O menor é n = 8, e (1 + i)⁸ = (√2)⁸ = 16.\n\nCom n = 4, o argumento é π, e (1 + i)⁴ = −4 é real, mas negativo. Com n = 2, dá 2i, imaginário puro. n = 16 também serve, mas não é o menor. E n = 6 dá argumento 3π/2: (1 + i)⁶ = −8i.",
      v: { i: () => { let n = 1; while (!(Math.abs(potC(cx(1, 1), n).im) < 1e-9 && potC(cx(1, 1), n).re > 0)) n++; return qualR(n, o); } },
    };
  })(),
  (() => {
    const o = ["2 + 3i e 2 − 3i", "−2 + 3i e −2 − 3i", "4 + 6i e 4 − 6i", "5 e −1", "2 + 6i e 2 − 6i"];
    return {
      d: "media",
      e: "Quais são as raízes da equação z² − 4z + 13 = 0 no conjunto dos números complexos?",
      o,
      x: "Pela fórmula resolvente: Δ = 16 − 52 = −36, e as raízes quadradas de Δ são ±6i. Então z = (4 ± 6i)/2 = 2 ± 3i. Conferindo pela soma e pelo produto: (2 + 3i) + (2 − 3i) = 4 e (2 + 3i)(2 − 3i) = 4 + 9 = 13, como pedem os coeficientes.\n\n−2 ± 3i erra o sinal de −b. 4 ± 6i esquece de dividir por 2a. 5 e −1 tratam √−36 como 6 real, o que daria raízes reais que não satisfazem a equação (5² − 20 + 13 = 18). E 2 ± 6i divide só o 4 por 2.",
      v: { i: () => unicoV(o.map((t) => t.split(" e ").every((w) => modC(avaliaC([1, -4, 13], lerC(w))) < 1e-9))) },
    };
  })(),
  (() => {
    const o = ["x² − 4x + 5 = 0", "x² + 4x + 5 = 0", "x² − 4x + 3 = 0", "x² − 2x + 5 = 0", "x² − 4x + 4 = 0"];
    const le = (t) => { const m = t.replace(/−/g, "-").match(/^x² ([+-]) (\d*)x ([+-]) (\d+) = 0$/); return [1, (m[1] === "-" ? -1 : 1) * Number(m[2] || 1), (m[3] === "-" ? -1 : 1) * Number(m[4])]; };
    return {
      d: "media",
      e: "Qual é a equação do 2º grau, com coeficientes reais e coeficiente de x² igual a 1, que tem 2 + i como uma das raízes?",
      o,
      x: "Com coeficientes reais, as raízes não reais vêm em pares conjugados: a outra raiz é 2 − i. Soma: (2 + i) + (2 − i) = 4. Produto: (2 + i)(2 − i) = 4 − i² = 5. A equação é x² − 4x + 5 = 0.\n\nx² + 4x + 5 = 0 erra o sinal: o coeficiente de x é o oposto da soma. x² − 4x + 3 = 0 calcula o produto como 4 − 1, tratando i² como +1. x² − 2x + 5 = 0 usa só a parte real como soma. E x² − 4x + 4 = 0 ignora a parte imaginária e fica com a raiz dupla 2.",
      v: { i: () => unicoV(o.map((t) => modC(avaliaC(le(t), cx(2, 1))) < 1e-9)) },
    };
  })(),
  (() => {
    const o = ["5", "7", "3√5", "1", "25"];
    return {
      d: "media",
      e: "Qual é a distância entre os afixos dos números complexos z₁ = 1 + 2i e z₂ = 4 − 2i no plano de Argand-Gauss?",
      o,
      x: "A distância entre os afixos é o módulo da diferença: |z₁ − z₂| = |(1 − 4) + (2 + 2)i| = |−3 + 4i| = √(9 + 16) = 5. É a mesma conta da distância entre os pontos (1, 2) e (4, −2).\n\n7 soma as diferenças das coordenadas (3 + 4) em vez de usar Pitágoras. 3√5 soma os módulos, √5 + √20 = √5 + 2√5, o que não mede a distância entre os pontos. 1 subtrai uma diferença da outra (4 − 3). E 25 esquece a raiz quadrada.",
      v: { i: () => qualR(modC(subC(cx(1, 2), cx(4, -2))), o) },
    };
  })(),
  (() => {
    const o = ["−1 + 3i", "1 − 3i", "−3 − i", "3 − i", "1 + 3i"];
    return {
      d: "media",
      e: "O afixo do número complexo z = 3 + i é girado de 90°, no sentido anti-horário, em torno da origem. Qual número complexo corresponde ao ponto obtido?",
      o,
      x: "Multiplicar por i = cos 90° + i·sen 90° gira o afixo de 90° no sentido anti-horário, sem mudar o módulo: i(3 + i) = 3i + i² = −1 + 3i. O ponto (3, 1) vai para (−1, 3).\n\n1 − 3i é o giro no sentido horário, que corresponde a multiplicar por −i. −3 − i é o giro de 180°. 3 − i é o conjugado, que reflete o ponto no eixo real. E 1 + 3i troca as coordenadas sem trocar o sinal, o que é uma reflexão na reta y = x, e não uma rotação.",
      v: { i: () => { const t = grau(90); return qual(cx(3 * Math.cos(t) - 1 * Math.sin(t), 3 * Math.sin(t) + 1 * Math.cos(t)), o); } },
    };
  })(),
  (() => {
    const o = ["−2√3 + 2i", "2√3 + 2i", "−2 + 2√3i", "−2√3 − 2i", "−√3/2 + (1/2)i"];
    return {
      d: "media",
      e: "Qual é a forma algébrica do número complexo z = 4(cos 5π/6 + i·sen 5π/6)?",
      o,
      x: "O ângulo 5π/6 (150°) está no 2º quadrante: cos 5π/6 = −√3/2 e sen 5π/6 = 1/2. Então z = 4(−√3/2) + 4(1/2)i = −2√3 + 2i.\n\n2√3 + 2i usa o cosseno positivo, como se o ângulo fosse π/6. −2 + 2√3i troca os valores de seno e cosseno. −2√3 − 2i erra o sinal do seno, que no 2º quadrante é positivo. E −√3/2 + (1/2)i esquece de multiplicar pelo módulo 4.",
      v: { i: () => qual(polar(4, (5 * Math.PI) / 6), o) },
    };
  })(),
  (() => {
    const o = ["2", "3", "1", "4", "5"];
    return {
      d: "media",
      e: "Quantas das raízes quintas complexas de 32 — as soluções de z⁵ = 32 — têm parte imaginária positiva?",
      o,
      x: "As raízes de z⁵ = 32 têm módulo 2 e argumentos 0°, 72°, 144°, 216° e 288° — são os vértices de um pentágono regular com um vértice em z = 2. Parte imaginária positiva exige argumento estritamente entre 0° e 180°: só 72° e 144°. São 2 raízes.\n\n3 conta também a raiz real 2, cuja parte imaginária é nula. 1 esquece a raiz de 144°. 4 conta todas as não reais, incluindo as de parte imaginária negativa (216° e 288°). E 5 conta todas as raízes.",
      v: { i: () => qualR(raizesPol([1, 0, 0, 0, 0, -32]).filter((z) => z.im > 1e-9).length, o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "−1", "2", "w"];
    return {
      d: "media",
      e: "Seja w uma raiz cúbica da unidade diferente de 1, isto é, w³ = 1 e w ≠ 1. Qual é o valor de (1 + w)(1 + w²)?",
      o,
      x: "Como w³ = 1 e w ≠ 1, de w³ − 1 = (w − 1)(w² + w + 1) = 0 segue que 1 + w + w² = 0. Desenvolvendo o produto: (1 + w)(1 + w²) = 1 + w² + w + w³ = (1 + w + w²) + w³ = 0 + 1 = 1.\n\n0 aplica a relação 1 + w + w² = 0, mas esquece o termo w³, que vale 1. −1 troca w³ por −1. 2 trata w como se fosse 1 (2 · 1), valor que o enunciado exclui. E w supõe que o produto se reduza a um dos fatores.",
      v: { i: () => { const ws = raizesPol([1, 0, 0, -1]).filter((z) => !igualC(z, UM, 1e-6)); const vals = ws.map((w) => vezesC(somaC(UM, w), somaC(UM, vezesC(w, w)))); if (ws.length !== 2 || !igualC(vals[0], vals[1], 1e-7)) throw new Error("w"); return unicoV(o.map((t) => t !== "w" && igualC(lerC(t), vals[0], 1e-7))); } },
    };
  })(),
  (() => {
    const o = ["3/5", "1/5", "3", "1", "3/4"];
    return {
      d: "media",
      e: "Qual é a parte imaginária do número complexo (1 + i)/(2 − i)?",
      o,
      x: "Multiplicando pelo conjugado do denominador: (1 + i)(2 + i)/((2 − i)(2 + i)) = (2 + i + 2i + i²)/(4 + 1) = (1 + 3i)/5. A parte imaginária é 3/5, e a real, 1/5.\n\n1/5 é a parte real. 3 esquece de dividir por 5. 1 calcula o denominador como 4 − 1 = 3, tratando i² como +1, e divide 3 por 3. E 3/4 divide só por 2², esquecendo a parte imaginária do denominador.",
      /* w = x + yi resolve (x + yi)(2 − i) = 1 + i: da parte real, x = (1 − y)/2; confere a parte imaginária para cada y oferecido. */
      v: { i: () => unicoV(o.map((t) => { const y = lerReal(t); const x = (1 - y) / 2; return igualC(vezesC(cx(x, y), cx(2, -1)), cx(1, 1)); })) },
    };
  })(),
  (() => {
    const o = ["2cos θ", "2i·sen θ", "0", "cos 2θ", "2"];
    const f = [(t) => cx(2 * Math.cos(t)), (t) => cx(0, 2 * Math.sin(t)), () => cx(0), (t) => cx(Math.cos(2 * t)), () => cx(2)];
    return {
      d: "media",
      e: "Se z = cos θ + i·sen θ, com θ real, a que expressão é igual z + 1/z?",
      o,
      x: "Como |z| = 1, o inverso de z é o seu conjugado: 1/z = cos θ − i·sen θ. Somando: z + 1/z = 2cos θ, um número real. Subtraindo, z − 1/z = 2i·sen θ.\n\n2i·sen θ é a diferença z − 1/z, e não a soma. 0 supõe que z e 1/z sejam opostos, o que só acontece quando cos θ = 0. cos 2θ vem de confundir a soma com a parte real de z². E 2 só vale quando θ é múltiplo de 2π, isto é, quando z = 1.",
      v: { i: () => { const ts = [0.37, 1.13, 2.71, 4.02]; return unicoV(f.map((g) => ts.every((t) => { const z = polar(1, t); return igualC(somaC(z, divC(UM, z)), g(t), 1e-9); }))); } },
    };
  })(),
  (() => {
    const o = ["No 2º quadrante", "No 1º quadrante", "No 3º quadrante", "No 4º quadrante", "Sobre o eixo imaginário"];
    const onde = (z) => (Math.abs(z.re) < 1e-12 ? "Sobre o eixo imaginário" : `No ${z.re > 0 ? (z.im > 0 ? 1 : 4) : z.im > 0 ? 2 : 3}º quadrante`);
    return {
      d: "media",
      e: "Em que quadrante do plano de Argand-Gauss está o afixo do número complexo (2 + 3i)(1 + i)?",
      o,
      x: "Calculando: (2 + 3i)(1 + i) = 2 + 2i + 3i + 3i² = (2 − 3) + 5i = −1 + 5i. Parte real negativa e parte imaginária positiva: o afixo (−1, 5) está no 2º quadrante.\n\nO 1º quadrante aparece para quem trata i² como +1 e obtém 5 + 5i. Os 3º e 4º quadrantes exigiriam parte imaginária negativa, e aqui ela é 5. E o afixo só estaria sobre o eixo imaginário se a parte real fosse zero — ela é −1, pequena, mas não nula.",
      v: { i: () => unicoV(o.map((t) => t === onde(vezesC(cx(2, 3), cx(1, 1))))) },
    };
  })(),
  (() => {
    const o = ["2 + 2cos θ", "2", "1 + cos²θ", "2 + 2sen θ", "4cos θ"];
    return {
      d: "media",
      e: "Para z = cos θ + i·sen θ, com θ real, qual expressão é igual a |1 + z|²?",
      o,
      x: "1 + z = (1 + cos θ) + i·sen θ, e |1 + z|² = (1 + cos θ)² + sen²θ = 1 + 2cos θ + cos²θ + sen²θ = 2 + 2cos θ, usando cos²θ + sen²θ = 1.\n\n2 soma os quadrados dos módulos, |1|² + |z|², como se não houvesse o termo cruzado. 1 + cos²θ esquece a parte imaginária sen θ. 2 + 2sen θ troca o cosseno pelo seno no termo cruzado. E 4cos θ não resulta de nenhum desenvolvimento correto: em θ = π/2, por exemplo, daria 0, e |1 + i|² = 2.",
      v: { f: (t) => modC(somaC(UM, polar(1, t))) ** 2, fo: [(t) => 2 + 2 * Math.cos(t), () => 2, (t) => 1 + Math.cos(t) ** 2, (t) => 2 + 2 * Math.sin(t), (t) => 4 * Math.cos(t)] },
    };
  })(),
  (() => {
    const o = ["16", "8", "4", "32", "6"];
    return {
      d: "media",
      e: "Um número complexo z tem módulo 2. Qual é o módulo de z³ · z̄, em que z̄ é o conjugado de z?",
      o,
      x: "O módulo de um produto é o produto dos módulos, e o conjugado tem o mesmo módulo do número: |z³ · z̄| = |z|³ · |z̄| = 2³ · 2 = 16. Outro caminho: z³ · z̄ = z² · (z · z̄) = z² · |z|² = 4z², de módulo 4 · 4 = 16.\n\n8 esquece o fator z̄. 4 trata z · z̄ como se valesse 1 e cancelasse um z, restando z² — mas z · z̄ vale |z|² = 4. 32 conta um fator 2 a mais. E 6 multiplica o módulo pelo expoente (2 · 3) em vez de elevá-lo.",
      v: { i: () => { const vals = [0.3, 1.7, 2.9, 5.1].map((t) => { const z = polar(2, t); return modC(vezesC(potC(z, 3), conjC(z))); }); if (!vals.every((v) => perto(v, vals[0]))) throw new Error("não é constante"); return qualR(vals[0], o); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["7", "3", "5", "2", "9"];
    return {
      d: "dificil",
      e: "Entre os números complexos z que satisfazem |z − 3 − 4i| = 2, qual é o maior valor possível de |z|?",
      o,
      x: "Os afixos de z formam a circunferência de centro (3, 4) e raio 2, e |z| é a distância de cada ponto dela à origem. O centro está a √(3² + 4²) = 5 da origem, e o ponto da circunferência mais afastado fica na reta que passa pela origem e pelo centro, do lado de fora: 5 + 2 = 7.\n\n3 é o menor valor de |z| (5 − 2), no ponto mais próximo da origem. 5 é a distância da origem ao centro, e não a um ponto da circunferência. 2 é o raio. E 9 soma as coordenadas do centro ao raio (3 + 4 + 2), trocando a distância pela soma das coordenadas.",
      v: { i: () => { let m = 0; for (let k = 0; k < 200000; k++) m = Math.max(m, modC(somaC(cx(3, 4), polar(2, (2 * Math.PI * k) / 200000)))); return escolhe(m, o.map(lerReal), 1e-6); } },
    };
  })(),
  (() => {
    const o = ["10", "5", "20", "4√10", "2√5"];
    return {
      d: "dificil",
      e: "Um quadrado tem o centro na origem do plano de Argand-Gauss, e um de seus vértices é o afixo de z = 2 + i. Qual é a área desse quadrado?",
      o,
      x: "Os outros vértices se obtêm girando z de 90° em torno do centro, isto é, multiplicando por i: iz = −1 + 2i, i²z = −2 − i e i³z = 1 − 2i. O lado é a distância entre vértices consecutivos: |(2 + i) − (−1 + 2i)| = |3 − i| = √10, e a área é (√10)² = 10. Pela diagonal: ela mede 2|z| = 2√5, e a área é d²/2 = 20/2 = 10.\n\n5 toma o lado igual a |z| = √5, que é a metade da diagonal. 20 usa a diagonal 2√5 como se fosse o lado. 4√10 é o perímetro. E 2√5 é o comprimento da diagonal.",
      v: { i: () => { const vs = [cx(2, 1)]; for (let k = 0; k < 3; k++) vs.push(vezesC(vs[vs.length - 1], I)); return escolhe(area(vs), o.map((t) => lerC(t).re), 1e-9); } },
    };
  })(),
  (() => {
    const o = ["3√3", "√3", "3√3/4", "4√3", "6√3"];
    return {
      d: "dificil",
      e: "Os afixos das três soluções complexas da equação z³ = 8i são vértices de um triângulo. Qual é a área desse triângulo?",
      o,
      x: "Todas as soluções têm módulo ∛8 = 2, e seus argumentos diferem de 120°: são √3 + i, −√3 + i e −2i, vértices de um triângulo equilátero inscrito na circunferência de raio 2. O lado de um triângulo equilátero inscrito num círculo de raio R é R√3 = 2√3, e a área é (√3/4)(2√3)² = (√3/4) · 12 = 3√3.\n\n√3 toma o lado igual a 2, confundindo lado com raio. 3√3/4 usa raio 1, esquecendo o módulo das raízes. 4√3 toma o lado igual ao diâmetro, 4. E 6√3 é a área do hexágono regular inscrito na mesma circunferência, que tem o dobro da área do triângulo.",
      v: { i: () => escolhe(area(raizesPol([1, 0, 0, cx(0, -8)])), o.map(lerReal), 1e-6) },
    };
  })(),
  (() => {
    const o = ["−2", "0", "2", "2i", "−2i"];
    return {
      d: "dificil",
      e: "Qual é o valor de ((1 + i)/(1 − i))⁵⁰ + ((1 − i)/(1 + i))⁵⁰?",
      o,
      x: "Primeiro simplifica-se o quociente: (1 + i)/(1 − i) = (1 + i)²/((1 − i)(1 + i)) = 2i/2 = i. O outro quociente é o inverso: 1/i = −i. A soma fica i⁵⁰ + (−i)⁵⁰. Como 50 = 4 × 12 + 2, i⁵⁰ = i² = −1, e (−i)⁵⁰ = (−1)⁵⁰ · i⁵⁰ = −1. Total: −2.\n\n0 supõe que as duas parcelas sejam opostas, o que valeria para expoente ímpar. 2 erra o resto da divisão de 50 por 4 e toma i⁵⁰ como 1. E 2i e −2i tratam as potências como se continuassem imaginárias, o que só ocorre com expoente ímpar.",
      v: { i: () => qual(somaC(potC(divC(cx(1, 1), cx(1, -1)), 50), potC(divC(cx(1, -1), cx(1, 1)), 50)), o) },
    };
  })(),
  (() => {
    const o = ["4cos³θ − 3cos θ", "3cos θ − 4cos³θ", "cos³θ − 3cos θ", "4cos³θ + 3cos θ", "3cos θ"];
    return {
      d: "dificil",
      e: "Desenvolvendo (cos θ + i·sen θ)³ de dois modos — pela fórmula de De Moivre e pelo cubo da soma —, obtém-se uma expressão de cos 3θ em função de cos θ. Qual é essa expressão?",
      o,
      x: "Por De Moivre, (cos θ + i·sen θ)³ = cos 3θ + i·sen 3θ. Pelo cubo da soma, a parte real é cos³θ − 3cos θ·sen²θ. Igualando as partes reais e trocando sen²θ por 1 − cos²θ: cos 3θ = cos³θ − 3cos θ + 3cos³θ = 4cos³θ − 3cos θ.\n\n3cos θ − 4cos³θ é o oposto da resposta, com o formato da fórmula de sen 3θ (3sen θ − 4sen³θ). cos³θ − 3cos θ troca sen²θ por 1, e não por 1 − cos²θ. 4cos³θ + 3cos θ erra o sinal do termo em cos θ. E 3cos θ trata cos 3θ como se fosse três vezes o cosseno.",
      v: { f: (t) => potC(polar(1, t), 3).re, fo: [(t) => 4 * Math.cos(t) ** 3 - 3 * Math.cos(t), (t) => 3 * Math.cos(t) - 4 * Math.cos(t) ** 3, (t) => Math.cos(t) ** 3 - 3 * Math.cos(t), (t) => 4 * Math.cos(t) ** 3 + 3 * Math.cos(t), (t) => 3 * Math.cos(t)] },
    };
  })(),
  (() => {
    const o = ["3", "1", "2", "√5", "√3"];
    return {
      d: "dificil",
      e: "O número complexo z satisfaz |z + 1| = |z − 1| e |z − i| = 2, e sua parte imaginária é positiva. Qual é o valor de |z|?",
      o,
      x: "|z + 1| = |z − 1| diz que o afixo de z é equidistante de −1 e de 1: está na mediatriz desse segmento, que é o eixo imaginário. Então z = yi, e |yi − i| = |y − 1| = 2 dá y = 3 ou y = −1. Com parte imaginária positiva, fica y = 3, z = 3i e |z| = 3.\n\n1 vem da outra solução, y = −1, de parte imaginária negativa. 2 é o raio da segunda condição. √5 é o módulo de 2 + i, ponto que está à distância 2 de i, mas não é equidistante de 1 e −1. E √3 supõe z real: |x − i| = 2 dá x = √3, mas um número real não tem parte imaginária positiva.",
      /* |z + 1|² − |z − 1|² tem o sinal de Re z (conferido em pontos soltos); depois, bisseção no eixo imaginário. */
      v: { i: () => { const ok = [[0.4, 1], [-0.7, 2], [0, 3], [1e-3, -5]].every(([x, y]) => Math.sign(modC(cx(x + 1, y)) ** 2 - modC(cx(x - 1, y)) ** 2) === Math.sign(x)); if (!ok) throw new Error("mediatriz"); const ys = [bissecao((y) => Math.abs(y - 1) - 2, 1, 10), bissecao((y) => Math.abs(y - 1) - 2, 1, -10)].filter((y) => y > 0); if (ys.length !== 1) throw new Error("soluções"); return escolhe(ys[0], o.map(lerReal), 1e-9); } },
    };
  })(),
  (() => {
    const o = ["4", "2", "3", "1", "6"];
    /* Newton em duas variáveis a partir de uma malha de pontos iniciais; conta as soluções distintas de z̄ = z². */
    const solucoes = () => {
      const achadas = [];
      for (let a = -2; a <= 2; a += 0.25) for (let b = -2; b <= 2; b += 0.25) {
        let x = a, y = b;
        for (let k = 0; k < 80; k++) {
          const f1 = x * x - y * y - x, f2 = 2 * x * y + y;
          const j11 = 2 * x - 1, j12 = -2 * y, j21 = 2 * y, j22 = 2 * x + 1;
          const d = j11 * j22 - j12 * j21;
          if (Math.abs(d) < 1e-14) break;
          x -= (f1 * j22 - f2 * j12) / d;
          y -= (j11 * f2 - j21 * f1) / d;
        }
        const z = cx(x, y);
        if (igualC(conjC(z), potC(z, 2), 1e-9) && !achadas.some((w) => igualC(w, z, 1e-6))) achadas.push(z);
      }
      return achadas.length;
    };
    return {
      d: "dificil",
      e: "Quantos números complexos z satisfazem a equação z̄ = z², em que z̄ é o conjugado de z?",
      o,
      x: "Tomando módulos: |z|² = |z̄| = |z|, então |z| = 0 ou |z| = 1. Com |z| = 0, z = 0. Com |z| = 1, vale z̄ = 1/z, e a equação vira 1/z = z², isto é, z³ = 1: são as três raízes cúbicas da unidade, 1 e −1/2 ± (√3/2)i. Ao todo, 4 soluções.\n\n2 fica só com as soluções reais, 0 e 1. 3 esquece o z = 0 e conta apenas as raízes cúbicas da unidade. 1 considera apenas uma das soluções evidentes. E 6 conta as raízes sextas da unidade, como se a equação fosse de grau 6.",
      v: { i: () => qualR(solucoes(), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "1", "0", "−1/2", "Depende do argumento de z"];
    return {
      d: "dificil",
      e: "Se z é um número complexo de módulo 1, com z ≠ 1, qual é a parte real de 1/(1 − z)?",
      o,
      x: "Escrevendo z = cos θ + i·sen θ: 1 − z = (1 − cos θ) − i·sen θ. Multiplicando pelo conjugado, a parte real de 1/(1 − z) é (1 − cos θ)/[(1 − cos θ)² + sen²θ] = (1 − cos θ)/(2 − 2cos θ) = 1/2. O θ se cancela: a parte real é sempre 1/2.\n\n1 é o valor de 1/(1 − z) quando z = 0, que não tem módulo 1. 0 e −1/2 aparecem com erros de sinal ao desenvolver o denominador. E “depende do argumento” parece razoável, mas a simplificação mostra que não depende — quem varia com θ é a parte imaginária de 1/(1 − z).",
      v: { i: () => { const res = [0.2, 0.9, 1.6, 2.5, 3.3, 4.4, 5.6, 6.1].map((t) => divC(UM, subC(UM, polar(1, t))).re); const constante = res.every((r) => perto(r, res[0], 1e-9)); return unicoV(o.map((t, k) => (k === 4 ? !constante : constante && perto(lerReal(t), res[0], 1e-9)))); } },
    };
  })(),
  (() => {
    const o = ["3", "2", "4", "1", "6"];
    /* produto de fatores (x − r) com r complexo; devolve os coeficientes */
    const poli = (rs) => rs.reduce((p, r) => [...p, cx(0)].map((c, i) => subC(c, i > 0 ? vezesC(p[i - 1], r) : cx(0))), [UM]);
    const real = (p) => p.every((c) => Math.abs(c.im) < 1e-12);
    return {
      d: "dificil",
      e: "Um polinômio P(x) com coeficientes reais tem 1 + 2i e 3 entre suas raízes. Qual é o menor grau possível de P(x)?",
      o,
      x: "Se os coeficientes são reais, toda raiz não real vem acompanhada da conjugada: 1 − 2i também é raiz. Então P tem pelo menos as três raízes 1 + 2i, 1 − 2i e 3, e grau pelo menos 3. O grau 3 é possível: P(x) = (x − 3)(x² − 2x + 5) = x³ − 5x² + 11x − 15 tem coeficientes reais.\n\n2 esquece a raiz conjugada. 4 supõe que a raiz real também precise de par, o que não acontece: o conjugado de 3 é o próprio 3. 1 ignora a raiz complexa. E 6 dobra todas as raízes.",
      /* grau 2: o único candidato mônico com as duas raízes tem coeficiente não real; grau 3: há um candidato real. */
      v: { i: () => { if (real(poli([cx(1, 2), cx(3)]))) throw new Error("grau 2 real?"); const p3 = poli([cx(1, 2), cx(3), cx(1, -2)]); if (!real(p3)) throw new Error("grau 3"); return qualR(p3.length - 1, o); } },
    };
  })(),
  (() => {
    const o = ["Uma elipse de focos (1, 0) e (−1, 0) e eixo maior 4", "Uma circunferência de centro na origem e raio 4", "Uma circunferência de centro na origem e raio 2", "Uma hipérbole de focos (1, 0) e (−1, 0)", "O segmento que une os pontos (1, 0) e (−1, 0)"];
    const d1 = (x, y) => Math.hypot(x - 1, y), d2 = (x, y) => Math.hypot(x + 1, y);
    return {
      d: "dificil",
      e: "No plano de Argand-Gauss, qual é o lugar geométrico dos afixos dos números complexos z tais que |z − 1| + |z + 1| = 4?",
      o,
      x: "A soma das distâncias de z aos pontos fixos 1 e −1 é constante e igual a 4, maior que a distância entre eles, que é 2. Pela definição, é uma elipse de focos (±1, 0) e eixo maior 2a = 4. Com a = 2 e c = 1, b² = a² − c² = 3, e a equação é x²/4 + y²/3 = 1.\n\nA circunferência de raio 4 confunde a soma das distâncias com a distância ao centro. A de raio 2 passa pelos vértices (±2, 0), mas não pelos pontos (0, ±√3): o ponto (0, 2) tem soma de distâncias 2√5 ≈ 4,47. A hipérbole é o lugar da diferença constante, e não da soma. E o segmento seria o lugar se a soma fosse 2, a distância entre os focos.",
      v: { i: () => { const pts = lugar((x, y) => d1(x, y) + d2(x, y) - 4, [-1.8, -1, -0.3, 0.5, 1.2, 1.9]); const difs = pts.map(([x, y]) => Math.abs(d1(x, y) - d2(x, y))); const conj = [pts.every(([x, y]) => Math.abs(x * x / 4 + y * y / 3 - 1) < 1e-6), pts.every(([x, y]) => Math.abs(Math.hypot(x, y) - 4) < 1e-6), pts.every(([x, y]) => Math.abs(Math.hypot(x, y) - 2) < 1e-6), difs.every((d) => Math.abs(d - difs[0]) < 1e-6), pts.every(([x, y]) => Math.abs(y) < 1e-6 && Math.abs(x) <= 1)]; return unicoV(conj); } },
    };
  })(),
];
