/* Rascunho — Cálculo I / Integral definida e cálculo de áreas.

   A explicação usa o teorema fundamental (primitiva calculada nos
   extremos); a conferência não usa primitiva nenhuma: integra
   numericamente, pela regra de Simpson com malha fina, acha interseções de
   curvas por varredura e integra |f − g| para as áreas. Somas de Riemann
   são calculadas diretamente com n muito grande; funções definidas por
   integrais são derivadas numericamente. */

import { unicoV, lerF, derivada, zeros, bissecao, integra, minimo, mesmaFuncao } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Integral definida e cálculo de áreas";
export const arquivo = "calculo__integral-definida-e-calculo-de-areas";

const num = (t) => { const s = String(t).trim().replace(/^[a-zA-Z]\s*=\s*/, ""); if (/x/.test(s)) throw new Error("não é número"); return lerF(s)(0); };
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = num(t); } catch { return false; } return Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); }));
const semUnidade = (t) => t.replace(/\s+(m|L)$/, "");
/* integral numérica (Simpson) e área entre curvas, com |f − g| */
const I = (f, a, b, n = 20000) => integra(f, a, b, n);
const area = (f, g, a, b) => integra((x) => Math.abs(f(x) - g(x)), a, b, 200000);
/* extremos da região entre duas curvas: primeira e última interseção numa faixa */
const cortes = (f, g, a, b) => zeros((x) => f(x) - g(x), a, b);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["8/3", "4", "8", "2", "1/3"];
    return {
      d: "facil",
      e: "Pelo teorema fundamental do cálculo, quanto vale a integral definida de x² entre 0 e 2?",
      o,
      x: "Uma primitiva de x² é x³/3. Pelo teorema fundamental, ∫₀² x² dx = F(2) − F(0) = 8/3 − 0 = 8/3 ≈ 2,67. É a área sob a parábola entre 0 e 2, um pouco menos que a do triângulo de vértices (0, 0), (2, 0) e (2, 4), que vale 4.\n\n4 é o valor do integrando em x = 2, e não a integral. 8 é x³ em x = 2, sem dividir por 3. 2 é o comprimento do intervalo. E 1/3 integra só até x = 1, e não até 2.",
      v: { i: () => qual(I((x) => x * x, 0, 2), o) },
    };
  })(),
  (() => {
    const o = ["F(b) − F(a)", "F(a) − F(b)", "f(b) − f(a), com a própria função", "F(b) + F(a)", "(F(b) − F(a))/(b − a)"];
    return {
      d: "facil",
      e: "Se F é uma primitiva de f, contínua em [a, b], o teorema fundamental do cálculo diz que a integral de f de a até b vale quanto?",
      o,
      x: "O teorema fundamental do cálculo liga integral e derivada: se F' = f, então ∫ₐᵇ f(x) dx = F(b) − F(a). Por exemplo, ∫₀^π sen x dx = (−cos π) − (−cos 0) = 1 + 1 = 2. Qualquer primitiva serve, porque a constante C se cancela na subtração.\n\nF(a) − F(b) inverte a ordem e troca o sinal. f(b) − f(a) usa a própria função, e não uma primitiva. F(b) + F(a) soma em vez de subtrair, e a constante C não se cancelaria. E (F(b) − F(a))/(b − a) é o valor médio de f no intervalo, e não a integral."
      ,
      /* pares (f, F) conhecidos: integral numérica de f comparada com cada fórmula */
      v: {
        i: () => {
          const pares = [[Math.cos, Math.sin, 0, 2], [(x) => 2 * x, (x) => x * x, 1, 3], [Math.exp, Math.exp, -1, 1], [(x) => 1 / x, Math.log, 1, 5]];
          const formula = { "F(b) − F(a)": (f, F, a, b) => F(b) - F(a), "F(a) − F(b)": (f, F, a, b) => F(a) - F(b), "f(b) − f(a), com a própria função": (f, F, a, b) => f(b) - f(a), "F(b) + F(a)": (f, F, a, b) => F(b) + F(a), "(F(b) − F(a))/(b − a)": (f, F, a, b) => (F(b) - F(a)) / (b - a) };
          return unicoV(o.map((t) => pares.every(([f, F, a, b]) => Math.abs(I(f, a, b) - formula[t](f, F, a, b)) < 1e-8)));
        },
      },
    };
  })(),
  (() => {
    const o = ["2", "0", "1", "−2", "π"];
    return {
      d: "facil",
      e: "Quanto vale a integral definida de sen x no intervalo [0, π]?",
      o,
      x: "Uma primitiva de sen x é −cos x. Então ∫₀^π sen x dx = (−cos π) − (−cos 0) = 1 − (−1) = 2. Como o seno é positivo em todo o intervalo, 2 é também a área sob um arco da senoide.\n\n0 é a integral de 0 a 2π, em que o arco negativo cancela o positivo. 1 é o valor máximo do seno, e não a área. −2 usa cos x como primitiva, esquecendo o sinal: cos π − cos 0 = −2. E π é o comprimento do intervalo.",
      v: { i: () => qual(I(Math.sin, 0, Math.PI), o) },
    };
  })(),
  (() => {
    const o = ["12", "7", "21", "9", "6"];
    return {
      d: "facil",
      e: "Qual é a área sob o gráfico de f(x) = 2x + 1 entre x = 0 e x = 3?",
      o,
      x: "A função é positiva no intervalo, e a área é a integral: ∫₀³ (2x + 1) dx = [x² + x]₀³ = 9 + 3 = 12. A figura é um trapézio de bases f(0) = 1 e f(3) = 7 e altura 3, cuja área (1 + 7) · 3/2 = 12 confirma o resultado.\n\n7 é o valor da função em x = 3, e não a área. 21 usa um retângulo de altura f(3) = 7, que passa por cima da reta. 9 integra só a parcela 2x. E 6 multiplica a inclinação 2 pelo comprimento 3, confundindo derivada com integral.",
      v: { i: () => qual(I((x) => 2 * x + 1, 0, 3), o) },
    };
  })(),
  (() => {
    const o = ["−7", "7", "0", "1/7", "−3"];
    return {
      d: "facil",
      e: "Sabendo que a integral de f de 1 até 4 vale 7, quanto vale a integral de f de 4 até 1?",
      o,
      x: "Inverter os limites de integração troca o sinal: ∫₄¹ f(x) dx = −∫₁⁴ f(x) dx = −7. Pelo teorema fundamental, F(1) − F(4) = −(F(4) − F(1)).\n\n7 ignora a inversão dos limites. 0 confunde com a integral num intervalo de comprimento zero, como ∫₄⁴. 1/7 inverte o número, e não a ordem dos limites. E −3 subtrai os limites, 1 − 4, sem relação com o valor da integral.",
      /* três funções com integral 7 de 1 a 4; a integral de 4 a 1 é calculada numericamente */
      v: {
        i: () => {
          const fs = [() => 7 / 3, (x) => (14 / 15) * x, (x) => (7 / 21) * x * x].filter((f) => Math.abs(I(f, 1, 4) - 7) < 1e-9);
          if (fs.length !== 3) throw new Error("bateria mal montada");
          const r = fs.map((f) => I(f, 4, 1));
          if (r.some((v) => Math.abs(v - r[0]) > 1e-9)) throw new Error("depende de f");
          return qual(r[0], o);
        },
      },
    };
  })(),
  (() => {
    const o = ["19", "11", "3", "−19", "7"];
    return {
      d: "facil",
      e: "Sabe-se que a integral de f de 0 a 2 vale 5 e a de g, no mesmo intervalo, vale −2. Quanto vale a integral de 3f − 2g de 0 a 2?",
      o,
      x: "A integral é linear: ∫ (3f − 2g) = 3∫ f − 2∫ g = 3 · 5 − 2 · (−2) = 15 + 4 = 19. Constantes saem da integral, e a integral de uma soma é a soma das integrais.\n\n11 erra o sinal do produto −2 · (−2), fazendo 15 − 4. 3 soma as integrais sem os coeficientes: 5 + (−2). −19 troca o sinal do resultado. E 7 subtrai as integrais, 5 − (−2), sem os coeficientes.",
      /* dois pares (f, g) diferentes com essas integrais; a combinação é integrada numericamente */
      v: {
        i: () => {
          const pares = [[() => 5 / 2, () => -1], [(x) => (15 / 8) * x * x, (x) => -x]];
          if (pares.some(([f, g]) => Math.abs(I(f, 0, 2) - 5) > 1e-9 || Math.abs(I(g, 0, 2) + 2) > 1e-9)) throw new Error("par fora dos dados");
          const r = pares.map(([f, g]) => I((x) => 3 * f(x) - 2 * g(x), 0, 2));
          return qual(r[0], o) === qual(r[1], o) ? qual(r[0], o) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["10", "2", "24", "6", "−2"];
    return {
      d: "facil",
      e: "A integral de f de 0 a 3 vale 4, e a de 3 a 7 vale 6. Quanto vale a integral de f de 0 a 7?",
      o,
      x: "A integral é aditiva em intervalos: ∫₀⁷ f = ∫₀³ f + ∫₃⁷ f = 4 + 6 = 10. Em termos de área, a região de 0 a 7 é a união das regiões de 0 a 3 e de 3 a 7, sem sobreposição. A propriedade vale para quaisquer três pontos, mesmo que o do meio fique fora do intervalo.\n\n2 subtrai as integrais, 6 − 4. 24 multiplica em vez de somar. 6 fica só com o segundo trecho. E −2 subtrai na ordem inversa, 4 − 6.",
      /* f em degraus e f afim, ambas com essas integrais em cada trecho */
      v: {
        i: () => {
          const fs = [(x) => (x <= 3 ? 4 / 3 : 6 / 4), (x) => x / 21 + 53 / 42];
          const ok = (f) => Math.abs(I(f, 0, 3, 60000) - 4) < 1e-4 && Math.abs(I(f, 3, 7, 60000) - 6) < 1e-4;
          if (!fs.every(ok)) throw new Error("função fora dos dados");
          const r = fs.map((f) => I(f, 0, 3, 60000) + I(f, 3, 7, 60000));
          if (Math.abs(r[0] - r[1]) > 1e-4) throw new Error(`depende de f: ${r}`); return qual(r[1], o, 1e-6);
        },
      },
    };
  })(),
  (() => {
    const o = ["e − 1", "e", "1", "e + 1", "1/e"];
    return {
      d: "facil",
      e: "Qual é a área da região sob o gráfico de y = eˣ, acima do eixo x, entre x = 0 e x = 1?",
      o,
      x: "Como eˣ é a própria primitiva, a área é ∫₀¹ eˣ dx = e¹ − e⁰ = e − 1 ≈ 1,72. O resultado fica entre 1 e e, as alturas do gráfico nas extremidades, como deve ser para um intervalo de comprimento 1.\n\ne esquece de subtrair o valor em x = 0. 1 é a altura em x = 0, ou o comprimento do intervalo. e + 1 soma os valores nas extremidades. E 1/e é e^(−1), sem relação com esta área.",
      v: { i: () => qual(I(Math.exp, 0, 1), o) },
    };
  })(),
  (() => {
    const o = ["1", "e − 1", "0", "e", "1 − 1/e²"];
    return {
      d: "facil",
      e: "Quanto vale a integral de 1/x de x = 1 até x = e?",
      o,
      x: "Uma primitiva de 1/x, para x > 0, é ln x. Então ∫₁^e dx/x = ln e − ln 1 = 1 − 0 = 1. Essa é, aliás, uma forma de definir o número e: o ponto em que a área sob 1/x, a partir de 1, chega a 1.\n\ne − 1 integra 1, e não 1/x. 0 fica só com ln 1. e é o limite superior, e não a integral. E 1 − 1/e² usa −1/x², a derivada de 1/x, como se fosse primitiva.",
      v: { i: () => qual(I((x) => 1 / x, 1, Math.E), o) },
    };
  })(),
  (() => {
    const o = ["0", "8", "4", "16", "Não existe: x³ é negativa em parte do intervalo"];
    return {
      d: "facil",
      e: "Quanto vale a integral definida de x³ no intervalo simétrico [−2, 2]?",
      o,
      x: "A função x³ é ímpar: f(−x) = −f(x). Num intervalo simétrico, a área negativa à esquerda cancela exatamente a positiva à direita. Pelo cálculo: [x⁴/4] de −2 a 2 = 16/4 − 16/4 = 0.\n\n8 dobra a integral de 0 a 2, como se a função fosse par. 4 é só a integral de 0 a 2. 16 é x⁴ em x = 2, sem dividir por 4 e sem subtrair. E a integral existe: valores negativos só contam com sinal negativo.",
      v: { i: () => qual(I((x) => x ** 3, -2, 2), o) },
    };
  })(),
  (() => {
    const o = ["2", "−2", "0", "4", "−4"];
    return {
      d: "facil",
      e: "Qual é a área da região entre o gráfico de f(x) = x − 2 e o eixo x, para 0 ≤ x ≤ 2?",
      o,
      x: "No intervalo, x − 2 ≤ 0: o gráfico fica abaixo do eixo, e a integral dá um valor negativo, ∫₀² (x − 2) dx = [x²/2 − 2x]₀² = 2 − 4 = −2. A área é o valor absoluto: 2. É o triângulo de base 2 e altura 2, com área 2 · 2/2 = 2.\n\n−2 é a integral, com sinal; área não é negativa. 0 supõe cancelamento, mas não há parte positiva. 4 multiplica base e altura sem dividir por 2. E −4 comete os dois erros.",
      v: { i: () => qual(area((x) => x - 2, () => 0, 0, 2), o) },
    };
  })(),
  (() => {
    const o = ["A área sob o gráfico, de a até b", "A inclinação média de f", "O valor máximo de f", "O comprimento do gráfico", "A área sob a reta tangente em a"];
    return {
      d: "facil",
      e: "Para f contínua e não negativa em [a, b], o que representa a integral definida de f de a até b?",
      o,
      x: "A integral é o limite das somas de Riemann, que somam áreas de retângulos finos sob o gráfico. Quando f ≥ 0, ela mede a área da região entre o gráfico, o eixo x e as retas x = a e x = b.\n\nA inclinação média de f é (f(b) − f(a))/(b − a), outra grandeza. O valor máximo é uma altura, e não uma área. O comprimento do gráfico se calcula com outra integral, a de √(1 + f'(x)²). E a reta tangente em a não tem relação com a integral.",
      /* área contada em células de uma malha fina, comparada com cada grandeza */
      v: {
        i: () => {
          const casos = [[(x) => x * x, 0, 2], [Math.exp, 0, 1], [(x) => 1 + Math.sin(x), 0, 3]];
          const celulas = (f, a, b) => { const n = 1500, top = Math.max(...Array.from({ length: 301 }, (_, k) => f(a + ((b - a) * k) / 300))) * 1.01; let c = 0; for (let i = 0; i < n; i++) { const x = a + ((b - a) * (i + 0.5)) / n, fx = f(x); for (let j = 0; j < n; j++) if ((top * (j + 0.5)) / n <= fx) c++; } return (c * (b - a) * top) / (n * n); };
          const grandeza = {
            "A área sob o gráfico, de a até b": (f, a, b) => celulas(f, a, b),
            "A inclinação média de f": (f, a, b) => (f(b) - f(a)) / (b - a),
            "O valor máximo de f": (f, a, b) => Math.max(...Array.from({ length: 1001 }, (_, k) => f(a + ((b - a) * k) / 1000))),
            "O comprimento do gráfico": (f, a, b) => I((x) => Math.sqrt(1 + derivada(f, x) ** 2), a, b, 2000),
            "A área sob a reta tangente em a": (f, a, b) => I((x) => f(a) + derivada(f, a) * (x - a), a, b, 2000),
          };
          return unicoV(o.map((t) => casos.every(([f, a, b]) => Math.abs(grandeza[t](f, a, b) - I(f, a, b)) < 5e-3 * Math.max(1, I(f, a, b)))));
        },
      },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["1/6", "1/2", "1/3", "5/6", "−1/6"];
    return {
      d: "media",
      e: "Qual é a área da região limitada pelas curvas y = x e y = x², entre os pontos em que elas se cruzam?",
      o,
      x: "As curvas se cruzam onde x = x², isto é, em x = 0 e x = 1. Entre esses pontos, a reta fica acima da parábola (em x = 1/2, 1/2 > 1/4). A área é ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6.\n\n1/2 é só a área sob a reta. 1/3 é só a área sob a parábola. 5/6 soma as duas áreas em vez de subtrair. E −1/6 inverte a ordem, integrando a de baixo menos a de cima; área não é negativa.",
      v: { i: () => { const f = (x) => x, g = (x) => x * x, c = cortes(f, g, -5, 5); return qual(area(f, g, c[0], c[c.length - 1]), o); } },
    };
  })(),
  (() => {
    const o = ["32/3", "16/3", "8", "64/3", "16"];
    return {
      d: "media",
      e: "Qual é a área da região limitada pela parábola y = 4 − x² e pelo eixo x?",
      o,
      x: "A parábola corta o eixo em x = ±2 e fica acima dele entre esses pontos. A área é ∫₋₂² (4 − x²) dx = [4x − x³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = 32/3 ≈ 10,67. Pela simetria, também dá 2 · ∫₀² (4 − x²) dx = 2 · 16/3.\n\n16/3 é só a metade, de 0 a 2. 8 é a área do triângulo com os mesmos vértices, que fica por dentro da parábola. 64/3 dobra o resultado. E 16 é o retângulo 4 × 4 que envolve a região.",
      v: { i: () => { const f = (x) => 4 - x * x, c = cortes(f, () => 0, -5, 5); return qual(area(f, () => 0, c[0], c[c.length - 1]), o); } },
    };
  })(),
  (() => {
    const o = ["√2 − 1", "√2", "1", "1 − √2/2", "0"];
    return {
      d: "media",
      e: "Qual é a área entre as curvas y = cos x e y = sen x no intervalo [0, π/4]?",
      o,
      x: "Em [0, π/4], cos x ≥ sen x, e as curvas se encontram em π/4. A área é ∫₀^(π/4) (cos x − sen x) dx = [sen x + cos x]₀^(π/4) = (√2/2 + √2/2) − (0 + 1) = √2 − 1 ≈ 0,41.\n\n√2 esquece de subtrair o valor em x = 0. 1 é o valor de sen + cos em x = 0, sozinho. 1 − √2/2 é a integral do seno sozinho, [−cos x]₀^(π/4), sem descontá-la da do cosseno. E 0 supõe que as curvas se equilibram, mas uma fica sempre acima da outra no intervalo.",
      v: { i: () => qual(area(Math.cos, Math.sin, 0, Math.PI / 4), o) },
    };
  })(),
  (() => {
    const o = ["9", "27", "6", "3", "0"];
    return {
      d: "media",
      e: "Seja G(x) a integral de t² de t = 0 até t = x. Quanto vale G'(3)?",
      o,
      x: "Pelo teorema fundamental do cálculo, na sua primeira forma, a derivada de G(x) = ∫₀ˣ f(t) dt é G'(x) = f(x). Aqui f(t) = t², e G'(3) = 3² = 9. Conferindo pela fórmula: G(x) = x³/3 e G'(x) = x².\n\n27 é 3³, sem dividir por 3: é 3G(3). 6 é a derivada do integrando em 3, 2 · 3. 3 é o próprio ponto. E 0 supõe que G é constante, confundindo com a derivada de um número.",
      /* G por integração numérica; G' pela derivada numérica */
      v: { i: () => qual(derivada((x) => I((t) => t * t, 0, x, 400), 3), o) },
    };
  })(),
  (() => {
    const o = ["2x · cos(x²)", "cos(x²)", "cos x", "2x · sen(x²)", "sen(x²)"];
    return {
      d: "media",
      e: "Seja G(x) a integral de cos t de t = 0 até t = x². Qual é a expressão de G'(x)?",
      o,
      x: "Com F(u) = ∫₀ᵘ cos t dt, G(x) = F(x²). Pelo teorema fundamental, F'(u) = cos u, e pela regra da cadeia, G'(x) = F'(x²) · 2x = 2x · cos(x²). Conferindo: G(x) = sen(x²), cuja derivada é 2x · cos(x²).\n\ncos(x²) esquece a derivada do limite superior, 2x. cos x calcula o integrando em x, e não em x². 2x · sen(x²) troca o integrando pela sua primitiva. E sen(x²) é a própria G, e não a sua derivada.",
      v: { i: () => { const G = (x) => I(Math.cos, 0, x * x, 400); return unicoV(o.map((t) => { try { return mesmaFuncao((x) => derivada(G, x), lerF(t), [-1.3, -0.4, 0.5, 1.1, 1.7]); } catch { return false; } })); } },
    };
  })(),
  (() => {
    const o = ["4/3", "8/3", "4", "−4/3", "2/3"];
    return {
      d: "media",
      e: "Qual é a área da região limitada pela parábola y = x² e pela reta y = 2x?",
      o,
      x: "As curvas se cruzam onde x² = 2x, em x = 0 e x = 2. Entre elas, a reta fica acima (em x = 1, 2 > 1). A área é ∫₀² (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = 4/3. Em áreas entre curvas, o primeiro passo é sempre achar os pontos de encontro, que dão os limites de integração.\n\n8/3 é só a área sob a parábola. 4 é só a área sob a reta. −4/3 integra a de baixo menos a de cima. E 2/3 usa o intervalo [0, 1], em vez de [0, 2].",
      v: { i: () => { const f = (x) => 2 * x, g = (x) => x * x, c = cortes(f, g, -5, 5); return qual(area(f, g, c[0], c[c.length - 1]), o); } },
    };
  })(),
  (() => {
    const o = ["3", "9", "9/2", "9/4", "27"];
    return {
      d: "media",
      e: "Qual é o valor médio da função f(x) = x² no intervalo [0, 3]?",
      o,
      x: "O valor médio é a integral dividida pelo comprimento do intervalo: (1/3) · ∫₀³ x² dx = (1/3) · 9 = 3. É a altura do retângulo de base 3 com a mesma área que a região sob a parábola.\n\n9 é a integral, sem dividir pelo comprimento. 9/2 é a média dos valores nas extremidades, (0 + 9)/2, que só coincide com o valor médio para funções afins. 9/4 é o valor da função no ponto médio, f(1,5). E 27 é x³ em x = 3.",
      v: { i: () => qual(I((x) => x * x, 0, 3) / 3, o) },
    };
  })(),
  (() => {
    const o = ["1/2", "0", "1/4", "1", "2"];
    return {
      d: "media",
      e: "Qual é a área total da região entre o gráfico de y = x³ e o eixo x, para −1 ≤ x ≤ 1?",
      o,
      x: "A integral de x³ em [−1, 1] é zero, porque a função é ímpar e as partes se cancelam. Mas a área não se cancela: soma-se a parte de baixo, em [−1, 0], com a de cima, em [0, 1], cada uma valendo 1/4. A área total é 1/4 + 1/4 = 1/2.\n\n0 é a integral com sinal, e não a área. 1/4 conta só uma das partes. 1 usa |x| no lugar de |x³|, cuja área em [−1, 1] é 1. E 2 é o comprimento do intervalo.",
      v: { i: () => qual(area((x) => x ** 3, () => 0, -1, 1), o) },
    };
  })(),
  (() => {
    const o = ["14/3", "16/3", "7", "2/3", "3"];
    return {
      d: "media",
      e: "Quanto vale a integral de √x entre x = 1 e x = 4?",
      o,
      x: "Uma primitiva de √x = x^(1/2) é (2/3)x^(3/2). Então ∫₁⁴ √x dx = (2/3)(4^(3/2) − 1^(3/2)) = (2/3)(8 − 1) = 14/3 ≈ 4,67. O valor fica entre 3 · √1 = 3 e 3 · √4 = 6, as áreas dos retângulos por baixo e por cima do gráfico.\n\n16/3 é só o valor da primitiva em x = 4, sem subtrair o de x = 1. 7 é 8 − 1, sem o fator 2/3. 2/3 é só o valor da primitiva em x = 1. E 3 é o comprimento do intervalo.",
      v: { i: () => qual(I(Math.sqrt, 1, 4), o) },
    };
  })(),
  (() => {
    const o = ["4 m", "0 m", "2 m", "8 m", "16 m"];
    return {
      d: "media",
      e: "Um objeto tem velocidade v(t) = t − 2, em m/s. Qual é a distância total que ele percorre entre t = 0 e t = 4 s?",
      o,
      x: "A distância total é a integral do módulo da velocidade. De 0 a 2, v < 0 e o objeto recua ∫₀² (2 − t) dt = 2 m; de 2 a 4, v > 0 e ele avança ∫₂⁴ (t − 2) dt = 2 m. Distância total: 2 + 2 = 4 m. Já o deslocamento, ∫₀⁴ (t − 2) dt, é zero: ele volta ao ponto de partida.\n\n0 m é o deslocamento, e não a distância percorrida. 2 m conta só um dos trechos. 8 m usa a maior velocidade, 2 m/s, durante os 4 segundos. E 16 m integra t + 2, trocando o sinal do −2 no intervalo todo.",
      v: { i: () => qual(I((t) => Math.abs(t - 2), 0, 4, 200000), o.map(semUnidade)) },
    };
  })(),
  (() => {
    const o = ["π/4", "3/4", "ln 2", "π/2", "1"];
    return {
      d: "media",
      e: "Quanto vale a integral de 1/(1 + x²) entre x = 0 e x = 1?",
      o,
      x: "Uma primitiva de 1/(1 + x²) é arctg x. Então ∫₀¹ dx/(1 + x²) = arctg 1 − arctg 0 = π/4 ≈ 0,785. É uma forma curiosa de obter π como área.\n\n3/4 é a aproximação pela regra do trapézio, com as alturas 1 e 1/2. ln 2 usa ln(1 + x²) como primitiva, que tem derivada 2x/(1 + x²). π/2 é o limite de arctg x no infinito, a integral de 0 a +∞. E 1 é o valor do integrando em x = 0.",
      v: { i: () => qual(I((x) => 1 / (1 + x * x), 0, 1), o) },
    };
  })(),
  (() => {
    const o = ["1/3", "2/3", "1", "−1/3", "1/6"];
    return {
      d: "media",
      e: "Qual é a área da região entre as curvas y = √x e y = x², no intervalo em que a primeira fica acima da segunda?",
      o,
      x: "As curvas se cruzam em x = 0 e x = 1, e entre elas √x fica acima de x² (em x = 1/4, 1/2 > 1/16). A área é ∫₀¹ (√x − x²) dx = 2/3 − 1/3 = 1/3. As curvas são simétricas em relação à reta y = x, e a região também.\n\n2/3 é só a área sob √x. 1 soma as duas áreas. −1/3 integra a de baixo menos a de cima. E 1/6 é a área entre y = x e y = x², outra região.",
      v: { i: () => { const f = Math.sqrt, g = (x) => x * x, c = cortes(f, g, 0, 5); return qual(area(f, g, c[0], c[c.length - 1]), o); } },
    };
  })(),
  (() => {
    const o = ["5/2", "3/2", "3", "2", "1/2"];
    return {
      d: "media",
      e: "Quanto vale a integral de |x| no intervalo [−1, 2]?",
      o,
      x: "Divide-se no ponto em que o módulo muda de fórmula: ∫₋₁⁰ (−x) dx + ∫₀² x dx = 1/2 + 2 = 5/2. Geometricamente, são dois triângulos: um de base e altura 1, com área 1/2, e outro de base e altura 2, com área 2.\n\n3/2 integra x sem o módulo, e o trecho negativo cancela parte do positivo. 3 é o comprimento do intervalo. 2 conta só o trecho de 0 a 2. E 1/2 conta só o trecho de −1 a 0.",
      v: { i: () => qual(I(Math.abs, -1, 2, 60000), o) },
    };
  })(),
  (() => {
    const o = ["28/3", "14/3", "0", "16/3", "4"];
    return {
      d: "media",
      e: "Quanto vale a integral de x² + 1 no intervalo simétrico [−2, 2]?",
      o,
      x: "A função é par, e num intervalo simétrico a integral é o dobro da integral de 0 a 2: 2 · ∫₀² (x² + 1) dx = 2 · (8/3 + 2) = 2 · 14/3 = 28/3 ≈ 9,33. A simetria economiza contas: basta integrar metade e dobrar.\n\n14/3 é só a metade, de 0 a 2. 0 trata a função como ímpar, mas x² + 1 é positiva e não há cancelamento. 16/3 integra só a parcela x², esquecendo a constante 1. E 4 integra só a constante 1."
      ,
      v: { i: () => qual(I((x) => x * x + 1, -2, 2), o) },
    };
  })(),
  (() => {
    const o = ["1/3", "1/2", "1", "0", "∞"];
    return {
      d: "media",
      e: "A soma Σ (k/n)² · (1/n), com k de 1 até n, tem que limite quando n → ∞?",
      o,
      x: "É uma soma de Riemann: divide [0, 1] em n partes de largura 1/n e usa as alturas f(k/n), com f(x) = x². Quando n → ∞, a soma tende a ∫₀¹ x² dx = 1/3. Pela fórmula da soma dos quadrados, também dá n(n + 1)(2n + 1)/(6n³) → 2/6 = 1/3.\n\n1/2 é a integral de x, e não de x². 1 supõe que todos os retângulos têm altura 1. 0 supõe que a largura 1/n zera a soma, mas o número de parcelas cresce na mesma proporção. E ∞ supõe o contrário: que o número de parcelas faz a soma explodir.",
      v: { i: () => { const n = 1e6; let s = 0; for (let k = 1; k <= n; k++) s += (k / n) ** 2 / n; return qual(s, o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["e − 2", "e − 1", "e", "1", "2 − e"];
    return {
      d: "media",
      e: "Qual é a área da região limitada por y = eˣ, pela reta y = 1 e pela reta x = 1?",
      o,
      x: "A região fica entre x = 0, onde eˣ encontra a reta y = 1, e x = 1, com eˣ por cima. A área é ∫₀¹ (eˣ − 1) dx = (e − 1) − 1 = e − 2 ≈ 0,72.\n\ne − 1 é a área sob eˣ até o eixo x, sem descontar a faixa abaixo de y = 1. e é o valor da primitiva em x = 1, sozinho. 1 é a área da faixa retangular sob y = 1. E 2 − e inverte a ordem da subtração; área não é negativa.",
      v: { i: () => { const c = cortes(Math.exp, () => 1, -5, 1); return qual(area(Math.exp, () => 1, c[0], 1), o); } },
    };
  })(),
  (() => {
    const o = ["4", "0", "2", "2π", "π"];
    return {
      d: "media",
      e: "Quanto vale a integral de |sen x| no intervalo [0, 2π]?",
      o,
      x: "O módulo rebate para cima o arco negativo do seno, entre π e 2π. Ficam dois arcos iguais, cada um com área ∫₀^π sen x dx = 2. Então ∫₀^(2π) |sen x| dx = 2 + 2 = 4. O mesmo raciocínio vale para qualquer número de arcos: cada um contribui com 2.\n\n0 é a integral de sen x, sem o módulo, em que os arcos se cancelam. 2 conta só um arco. 2π é o comprimento do intervalo. E π supõe uma altura média de 1/2, sem cálculo.",
      v: { i: () => qual(I((x) => Math.abs(Math.sin(x)), 0, 2 * Math.PI, 200000), o) },
    };
  })(),
  (() => {
    const o = ["−x³", "x³", "(625 − x⁴)/4", "−3x²", "3x²"];
    return {
      d: "media",
      e: "Seja G(x) a integral de t³ de t = x até t = 5. Qual é a expressão de G'(x)?",
      o,
      x: "Invertendo os limites, G(x) = −∫₅ˣ t³ dt, e pelo teorema fundamental G'(x) = −x³. Conferindo: G(x) = (625 − x⁴)/4, cuja derivada é −4x³/4 = −x³. Quando a variável está no limite inferior, a derivada ganha um sinal de menos.\n\nx³ esquece esse sinal. (625 − x⁴)/4 é a própria G, e não a sua derivada. −3x² deriva o integrando, em vez de só calculá-lo em x. E 3x² comete esse erro e ainda perde o sinal.",
      v: { i: () => { const G = (x) => I((t) => t ** 3, x, 5, 400); return unicoV(o.map((t) => { try { return mesmaFuncao((x) => derivada(G, x), lerF(t), [-1.3, 0.5, 1.7, 2.9, 4.1]); } catch { return false; } })); } },
    };
  })(),
  (() => {
    const o = ["2", "6", "18", "3", "1/2"];
    return {
      d: "media",
      e: "A integral de uma função contínua f no intervalo [0, 3] vale 6. Qual é o valor médio de f nesse intervalo?",
      o,
      x: "O valor médio é a integral dividida pelo comprimento do intervalo: 6/3 = 2. É a altura do retângulo de base 3 que tem a mesma área que a região sob o gráfico. Pelo teorema do valor médio para integrais, f assume esse valor em algum ponto do intervalo.\n\n6 é a própria integral, sem dividir. 18 multiplica pelo comprimento em vez de dividir. 3 é o comprimento. E 1/2 inverte a divisão: 3/6.",
      /* três funções com integral 6 em [0, 3]; o valor médio é calculado numericamente em cada uma */
      v: {
        i: () => {
          const r = [() => 2, (x) => (4 / 3) * x, (x) => (2 / 3) * x * x].map((f) => { if (Math.abs(I(f, 0, 3) - 6) > 1e-9) throw new Error("fora dos dados"); return I(f, 0, 3) / 3; });
          return qual(r[0], o);
        },
      },
    };
  })(),
  (() => {
    const o = ["1/2", "0", "1/4", "1", "−1/2"];
    return {
      d: "media",
      e: "Qual é a área total da região limitada pelas curvas y = x³ e y = x, que se cruzam em x = −1, x = 0 e x = 1?",
      o,
      x: "Em [0, 1], x ≥ x³ (em x = 1/2, 1/2 > 1/8); em [−1, 0], é o contrário. A área total soma as duas partes: ∫₀¹ (x − x³) dx + ∫₋₁⁰ (x³ − x) dx = 1/4 + 1/4 = 1/2. As duas partes são iguais pela simetria das funções ímpares.\n\n0 é a integral de x − x³ em [−1, 1], em que as partes se cancelam. 1/4 conta só uma das partes. 1 usa as áreas sob as curvas separadamente, somando 1/2 + 1/2. E −1/2 dá sinal à área, que é sempre positiva.",
      v: { i: () => qual(area((x) => x, (x) => x ** 3, -1, 1), o) },
    };
  })(),
  (() => {
    const o = ["1", "π/4", "√2", "2", "0"];
    return {
      d: "media",
      e: "Quanto vale a integral de (sec x)² no intervalo [0, π/4]?",
      o,
      x: "Uma primitiva de (sec x)² é tg x. Então ∫₀^(π/4) (sec x)² dx = tg(π/4) − tg 0 = 1 − 0 = 1. O integrando começa em 1 e cresce até 2 no intervalo, e por isso a área fica entre π/4 ≈ 0,79 e π/2 ≈ 1,57, como de fato fica.\n\nπ/4 é o comprimento do intervalo, como se o integrando valesse 1. √2 é sec(π/4), o valor de sec x, e não da primitiva. 2 é (sec(π/4))², o integrando no extremo direito. E 0 fica só com tg 0.",
      v: { i: () => qual(I((x) => 1 / Math.cos(x) ** 2, 0, Math.PI / 4), o) },
    };
  })(),
  (() => {
    const o = ["2", "e² − 1", "1", "1 − 1/e²", "e²"];
    return {
      d: "media",
      e: "Entre x = 1 e x = e², que área fica sob a hipérbole y = 1/x?",
      o,
      x: "A área é ∫₁^(e²) dx/x = ln(e²) − ln 1 = 2 − 0 = 2. Cada vez que o limite superior é multiplicado por e, a área aumenta 1: de 1 a e, a área é 1; de e a e², mais 1. É a propriedade que liga o logaritmo às áreas sob a hipérbole.\n\ne² − 1 integra 1, e não 1/x. 1 é a área só até x = e. 1 − 1/e² usa −1/x, a primitiva de 1/x², no lugar de ln x. E e² é o limite superior, e não a área.",
      v: { i: () => qual(I((x) => 1 / x, 1, Math.E ** 2), o) },
    };
  })(),
  (() => {
    const o = ["26 L", "27 L", "24 L", "12 L", "78 L"];
    return {
      d: "media",
      e: "Uma torneira despeja água à taxa r(t) = 3t² litros por minuto. Quantos litros entram no tanque entre t = 1 e t = 3 min?",
      o,
      x: "A quantidade acumulada é a integral da taxa: ∫₁³ 3t² dt = [t³]₁³ = 27 − 1 = 26 L. É o teorema fundamental aplicado a uma taxa de variação: integrar a taxa dá a variação total.\n\n27 L é o acumulado desde t = 0, esquecendo de subtrair o valor em t = 1. 24 L é r(3) − r(1), a variação da taxa, e não o volume. 12 L multiplica a taxa em t = 1 por 3 e pelo tempo 2, sem integrar. E 78 L esquece de dividir 3t³ por 3 na primitiva.",
      v: { i: () => qual(I((t) => 3 * t * t, 1, 3), o.map(semUnidade)) },
    };
  })(),
  (() => {
    const o = ["4π", "2π", "8π", "16", "π"];
    return {
      d: "media",
      e: "A integral de 2√(4 − x²) de x = −2 até x = 2 mede a área de qual região, e quanto ela vale?",
      o,
      x: "Para cada x entre −2 e 2, 2√(4 − x²) é a altura do círculo x² + y² ≤ 4, de y = −√(4 − x²) até y = √(4 − x²). A integral soma essas faixas e dá a área do círculo de raio 2: π · 2² = 4π ≈ 12,57.\n\n2π é a área do semicírculo, a integral de √(4 − x²) sem o fator 2. 8π dobra a área. 16 é o quadrado 4 × 4 que envolve o círculo. E π é a área do círculo de raio 1.",
      v: { i: () => qual(integra((x) => 2 * Math.sqrt(Math.max(0, 4 - x * x)), -2, 2, 400000), o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["x = 1", "x = e", "x = 0", "x = 1/e", "Não tem mínimo"];
    return {
      d: "media",
      e: "Seja F(x) a integral de ln t de t = 1 até t = x, para x > 0. Em que ponto F atinge o seu valor mínimo?",
      o,
      x: "Pelo teorema fundamental, F'(x) = ln x, que é negativa para x < 1 e positiva para x > 1. F decresce até x = 1 e cresce depois: o mínimo é em x = 1, com F(1) = 0. Não é preciso calcular a primitiva de ln x.\n\nx = e é onde ln x = 1, e não onde F' se anula. x = 0 nem está no domínio. x = 1/e é onde ln x = −1. E há mínimo, sim: F' troca de sinal de negativa para positiva em x = 1.",
      v: { i: () => qual(minimo((x) => I(Math.log, 1, x, 400), 0.05, 5).x, o, 1e-4) },
    };
  })(),
  (() => {
    const o = ["9/2", "15/2", "3", "10/3", "7/6"];
    return {
      d: "media",
      e: "Qual é a área da região limitada pela parábola y = x² e pela reta y = x + 2?",
      o,
      x: "As curvas se cruzam onde x² = x + 2, isto é, em x = −1 e x = 2, e entre elas a reta fica acima. A área é ∫₋₁² (x + 2 − x²) dx = [x²/2 + 2x − x³/3]₋₁² = 10/3 − (−7/6) = 9/2.\n\n15/2 é só a área sob a reta, sem descontar a parábola. 3 é só a área sob a parábola, e também o comprimento do intervalo. 10/3 é só o valor da primitiva em x = 2. E 7/6 é só o valor em x = −1, com o sinal trocado.",
      v: { i: () => { const f = (x) => x + 2, g = (x) => x * x, c = cortes(f, g, -5, 5); return qual(area(f, g, c[0], c[c.length - 1]), o); } },
    };
  })(),
  (() => {
    const o = ["2/π", "0", "1/2", "1", "2"];
    return {
      d: "media",
      e: "Qual é o valor médio de sen x no intervalo [0, π]?",
      o,
      x: "O valor médio é a integral dividida pelo comprimento: (1/π) · ∫₀^π sen x dx = 2/π ≈ 0,64. Fica entre o mínimo 0 e o máximo 1 do seno no intervalo, mais perto de 1, porque o arco passa bastante tempo perto do topo.\n\n0 é o valor médio em [0, 2π], em que os arcos se cancelam. 1/2 é a média entre o menor e o maior valor, que não leva em conta o formato do arco. 1 é o valor máximo. E 2 é a integral, sem dividir por π.",
      v: { i: () => qual(I(Math.sin, 0, Math.PI) / Math.PI, o) },
    };
  })(),
  (() => {
    const o = ["2", "2/3", "4/3", "8/3", "0"];
    return {
      d: "media",
      e: "A parábola y = x² − 1 corta o eixo x em x = 1. Somando as partes acima e abaixo do eixo, que área ela forma com ele entre x = 0 e x = 2?",
      o,
      x: "A função é negativa em [0, 1) e positiva em (1, 2]. As áreas das duas partes são |∫₀¹ (x² − 1) dx| = 2/3 e ∫₁² (x² − 1) dx = 4/3. A área total é 2/3 + 4/3 = 2.\n\n2/3 é a integral com sinal no intervalo todo, 4/3 − 2/3, em que a parte de baixo desconta a de cima. 4/3 conta só a parte acima do eixo. 8/3 é a integral de x², sem o −1. E 0 supõe que as partes se cancelam por completo.",
      v: { i: () => qual(area((x) => x * x - 1, () => 0, 0, 2), o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["2√2", "2", "√2 − 1", "√2 + 1", "0"];
    return {
      d: "dificil",
      e: "Seno e cosseno se cruzam em π/4 dentro de [0, π]. Qual é a área total entre os dois gráficos nesse intervalo?",
      o,
      x: "As curvas se cruzam em x = π/4. Antes, cos x fica acima; depois, sen x. A área é ∫₀^(π/4) (cos x − sen x) dx + ∫_(π/4)^π (sen x − cos x) dx = (√2 − 1) + (1 + √2) = 2√2 ≈ 2,83.\n\n2 é a integral de sen x − cos x no intervalo todo, sem o módulo, em que a parte inicial desconta. √2 − 1 conta só o primeiro trecho. √2 + 1 conta só o segundo. E 0 supõe cancelamento completo, que não ocorre.",
      v: { i: () => qual(area(Math.sin, Math.cos, 0, Math.PI), o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "2", "−1", "3"];
    return {
      d: "dificil",
      e: "Seja G(x) a integral de e^(−t²) de t = x até t = 2x. Quanto vale G'(0)?",
      o,
      x: "Com F uma primitiva de e^(−t²), G(x) = F(2x) − F(x). Derivando, pela regra da cadeia: G'(x) = 2e^(−4x²) − e^(−x²). Em x = 0: G'(0) = 2 − 1 = 1. Não é preciso conhecer F, que nem tem fórmula elementar.\n\n0 é o valor de G(0), a integral num intervalo de comprimento zero, e não a derivada. 2 fica só com a parcela do limite superior. −1 fica só com a do limite inferior. E 3 soma as parcelas em vez de subtrair.",
      v: { i: () => qual(derivada((x) => I((t) => Math.exp(-t * t), x, 2 * x, 400), 0), o) },
    };
  })(),
  (() => {
    const o = ["1", "e − 1", "e", "1/2", "1/e"];
    return {
      d: "dificil",
      e: "O gráfico de y = ln x, o eixo x e a reta vertical x = e cercam uma região. Quanto mede a sua área?",
      o,
      x: "O logaritmo corta o eixo em x = 1 e é positivo depois. A área é ∫₁^e ln x dx, e uma primitiva de ln x é x ln x − x. Então a área é (e · 1 − e) − (1 · 0 − 1) = 0 + 1 = 1.\n\ne − 1 é o comprimento do intervalo, como se o integrando valesse 1. e é o valor de x ln x em x = e, esquecendo a parcela −x da primitiva. 1/2 é a integral de ln x/x, cuja primitiva é (ln x)²/2. E 1/e é o valor de 1/x em x = e.",
      v: { i: () => { const c = cortes(Math.log, () => 0, 0.2, Math.E); return qual(area(Math.log, () => 0, c[0], Math.E), o); } },
    };
  })(),
  (() => {
    const o = ["1", "∞", "0", "1/2", "2"];
    return {
      d: "dificil",
      e: "A região sob y = 1/x², à direita de x = 1, é ilimitada. Quanto vale a integral imprópria de 1/x² de 1 até +∞?",
      o,
      x: "Calcula-se a integral até um limite b e depois faz-se b → ∞: ∫₁ᵇ dx/x² = [−1/x]₁ᵇ = 1 − 1/b → 1. A região é infinita em extensão, mas tem área finita, igual a 1, porque 1/x² decresce depressa.\n\n∞ supõe que toda região ilimitada tem área infinita, o que vale para 1/x, mas não para 1/x². 0 é o limite de 1/b, e não da integral. 1/2 e 2 vêm de erros na primitiva: −1/(2x²) ou −2/x no lugar de −1/x.",
      /* integral em blocos dobrados [2ᵏ, 2ᵏ⁺¹] até 2³⁰, somada; a cauda restante é menor que 1e−9 */
      v: { i: () => { let s = 0; for (let k = 0; k < 30; k++) s += integra((x) => 1 / (x * x), 2 ** k, 2 ** (k + 1), 400); return qual(s, o, 1e-8); } },
    };
  })(),
  (() => {
    const o = ["8/3", "4/3", "4", "16/3", "2/3"];
    return {
      d: "dificil",
      e: "As parábolas y = x² e y = 2 − x² delimitam uma região em forma de lente. Qual é a sua área?",
      o,
      x: "As parábolas se cruzam onde x² = 2 − x², isto é, x = ±1. Entre elas, 2 − x² fica acima. A área é ∫₋₁¹ (2 − 2x²) dx = [2x − 2x³/3]₋₁¹ = (2 − 2/3) − (−2 + 2/3) = 8/3. A região é simétrica em relação ao eixo y, e também dá para calcular 2 · ∫₀¹ (2 − 2x²) dx.\n\n4/3 é só a metade, de 0 a 1. 4 integra só a constante 2 de −1 a 1. 16/3 dobra o resultado. E 2/3 é a área sob y = x² de −1 a 1, sozinha.",
      v: { i: () => { const f = (x) => 2 - x * x, g = (x) => x * x, c = cortes(f, g, -5, 5); return qual(area(f, g, c[0], c[c.length - 1]), o); } },
    };
  })(),
  (() => {
    const o = ["9", "27", "3", "6", "81"];
    return {
      d: "dificil",
      e: "Para qual valor de k > 0 a região limitada pela parábola y = x² e pela reta horizontal y = k tem área 36?",
      o,
      x: "A reta corta a parábola em x = ±√k. A área é ∫ de −√k a √k de (k − x²) dx = 2(k√k − k√k/3) = (4/3)k^(3/2). A condição (4/3)k^(3/2) = 36 dá k^(3/2) = 27, e k = 27^(2/3) = 9. Conferindo: com k = 9, os cortes são x = ±3 e a área é 2(27 − 9) = 36.\n\n27 é k^(3/2), sem elevar a 2/3. 3 é √k, a abscissa do corte. 6 é a largura da região, 2√k. E 81 eleva ao quadrado em vez de a 2/3.",
      /* área calculada numericamente para cada k; k acha-se por bisseção */
      v: { i: () => { const A = (k) => { const c = cortes((x) => x * x, () => k, -50, 50); return area((x) => x * x, () => k, c[0], c[c.length - 1]); }; return qual(bissecao((k) => A(k) - 36, 1, 30, 60), o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["π", "π²/4", "0", "1", "π²/2"];
    return {
      d: "dificil",
      e: "Uma função contínua f satisfaz, para todo x, a igualdade: a integral de f de 0 a x vale x² · sen x. Quanto vale f(π/2)?",
      o,
      x: "Pelo teorema fundamental, derivando os dois lados em relação a x: f(x) = (x² sen x)' = 2x sen x + x² cos x. Em x = π/2: f(π/2) = 2 · (π/2) · 1 + (π²/4) · 0 = π. A integral acumulada é uma primitiva de f, e derivá-la devolve f.\n\nπ²/4 é o valor da integral em π/2, e não de f. 0 fica só com a parcela x² cos x. 1 é sen(π/2), sem os fatores. E π²/2 usa 2x² sen x no lugar da derivada certa.",
      /* f é a derivada numérica da função acumulada, pelo teorema fundamental */
      v: { i: () => qual(derivada((x) => x * x * Math.sin(x), Math.PI / 2), o) },
    };
  })(),
  (() => {
    const o = ["2/π", "2", "0", "1", "π/2"];
    return {
      d: "dificil",
      e: "Qual é o limite, quando n → ∞, da média (1/n) · Σ sen(kπ/n), com k de 1 até n?",
      o,
      x: "Escrevendo (1/n) = (1/π) · (π/n), a soma vira (1/π) · Σ sen(kπ/n) · (π/n), uma soma de Riemann de sen x em [0, π] com largura π/n. O limite é (1/π) · ∫₀^π sen x dx = 2/π ≈ 0,64: é o valor médio do seno num arco. Somas de Riemann transformam limites de somas em integrais.\n\n2 é a integral, sem o fator 1/π. 0 é a média num período inteiro, [0, 2π]. 1 é o valor máximo. E π/2 inverte o resultado.",
      v: { i: () => { const n = 1e6; let s = 0; for (let k = 1; k <= n; k++) s += Math.sin((k * Math.PI) / n); return qual(s / n, o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["9", "18", "6", "12", "27/2"];
    return {
      d: "dificil",
      e: "Qual é a área da região limitada pelo gráfico de y = |x − 1| e pela reta y = 3?",
      o,
      x: "A reta y = 3 corta o gráfico em |x − 1| = 3, isto é, em x = −2 e x = 4. A região é um triângulo com vértices (−2, 3), (4, 3) e (1, 0): base 6 e altura 3, área 6 · 3/2 = 9. Pela integral: ∫₋₂⁴ (3 − |x − 1|) dx = 18 − 9 = 9.\n\n18 é o retângulo de base 6 e altura 3, sem descontar a região sob o V. 6 é a base. 12 usa a altura 4, do ponto (1, −1), que não existe. E 27/2 usa a base 9, como se os cortes fossem em −2 e 7.",
      v: { i: () => { const f = (x) => Math.abs(x - 1), c = cortes(f, () => 3, -10, 10); return qual(area(f, () => 3, c[0], c[c.length - 1]), o); } },
    };
  })(),
  (() => {
    const o = ["2/√3", "1", "4/3", "√2", "8/3"];
    return {
      d: "dificil",
      e: "Pelo teorema do valor médio para integrais, existe c em [0, 2] com f(c) · 2 igual à integral de f(x) = x² de 0 a 2. Qual é c?",
      o,
      x: "A integral vale ∫₀² x² dx = 8/3. A condição c² · 2 = 8/3 dá c² = 4/3 e c = 2/√3 ≈ 1,15, dentro de [0, 2]. O valor f(c) = 4/3 é o valor médio de x² no intervalo.\n\n1 é o ponto médio, que só funcionaria para funções afins. 4/3 é c², sem a raiz, ou o valor médio f(c). √2 resolve c² = 2, esquecendo o 3 da primitiva. E 8/3 é a própria integral."
      ,
      v: { i: () => { const media = I((x) => x * x, 0, 2) / 2; return qual(bissecao((c) => c * c - media, 0, 2), o); } },
    };
  })(),
];
