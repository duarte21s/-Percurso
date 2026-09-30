/* Rascunho — Cálculo I / Integral indefinida e primitivas.

   A explicação integra pelas regras (potência, tabela, linearidade,
   identidades); a conferência faz o caminho inverso sem regra nenhuma:
   deriva numericamente cada alternativa e compara com o integrando, ponto a
   ponto. Condições iniciais são conferidas pelo valor no ponto; problemas
   de acumulação (posição, população, custo) são resolvidos por integração
   numérica; afirmações gerais são testadas em baterias de pares (f, F), com
   F construída por integração numérica. */

import { unicoV, lerF, derivada, derivada2, integra, mesmaFuncao } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Integral indefinida e primitivas";
export const arquivo = "calculo__integral-indefinida-e-primitivas";

const num = (t) => { const s = String(t).trim().replace(/^[a-zA-Z]\s*=\s*/, ""); if (/x/.test(s)) throw new Error("não é número"); return lerF(s)(0); };
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = num(t); } catch { return false; } return Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); }));
/* a alternativa (lida como função, sem o "+ C") tem derivada numérica igual ao integrando? */
const PONTOS = [0.41, 1.13, 1.7, 2.71, 3.9];
const primitivaDe = (f, t, pontos = PONTOS) => { try { const F = lerF(t); return mesmaFuncao((x) => derivada(F, x), f, pontos); } catch { return false; } };
const qualPrimitiva = (f, alt, pontos) => unicoV(alt.map((t) => primitivaDe(f, t, pontos)));
/* primitiva que também passa pelo ponto (x₀, y₀) */
const qualComValor = (f, x0, y0, alt, pontos, troca = (t) => t) => unicoV(alt.map((t) => { if (!primitivaDe(f, troca(t), pontos)) return false; const F = lerF(troca(t)); return Math.abs(F(x0) - y0) < 1e-9; }));
const malhaDe = (a, b, n) => Array.from({ length: n + 1 }, (_, k) => a + ((b - a) * k) / n);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["x⁵/5 + C", "4x³ + C", "x⁵ + C", "x⁴/4 + C", "5x⁵ + C"];
    return {
      d: "facil",
      e: "Pela regra da potência para integrais, qual é ∫ x⁴ dx?",
      o,
      x: "A regra da potência para integrais aumenta o expoente em uma unidade e divide pelo novo expoente: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, para n ≠ −1. Com n = 4: x⁵/5 + C. Conferindo pela derivada: (x⁵/5)' = 5x⁴/5 = x⁴. A constante C lembra que toda função x⁵/5 + C tem a mesma derivada.\n\n4x³ + C é a derivada de x⁴, o caminho inverso. x⁵ + C aumenta o expoente, mas esquece de dividir por 5. x⁴/4 + C divide pelo expoente antigo, sem aumentá-lo. E 5x⁵ + C multiplica pelo novo expoente em vez de dividir.",
      v: { i: () => qualPrimitiva((x) => x ** 4, o) },
    };
  })(),
  (() => {
    const o = ["x³ − 2x² + 5x + C", "6x − 4 + C", "x³ − 4x² + 5x + C", "3x³ − 4x² + 5x + C", "x³ − 2x² + C"];
    return {
      d: "facil",
      e: "Qual é a integral indefinida ∫ (3x² − 4x + 5) dx?",
      o,
      x: "A integral de uma soma é a soma das integrais, e as constantes multiplicativas saem da integral. Termo a termo: ∫ 3x² dx = x³, ∫ −4x dx = −2x² e ∫ 5 dx = 5x. Resultado: x³ − 2x² + 5x + C. A derivada, 3x² − 4x + 5, confirma.\n\n6x − 4 + C é a derivada do integrando, e não a integral. x³ − 4x² + 5x + C esquece de dividir o coeficiente −4 pelo novo expoente 2. 3x³ − 4x² + 5x + C aumenta os expoentes sem dividir. E x³ − 2x² + C esquece que a integral da constante 5 é 5x.",
      v: { i: () => qualPrimitiva(lerF("3x² − 4x + 5"), o) },
    };
  })(),
  (() => {
    const o = ["sen x + C", "−sen x + C", "cos x + C", "−cos x + C", "tg x + C"];
    return {
      d: "facil",
      e: "Que função, somada a uma constante arbitrária, tem derivada igual a cos x?",
      o,
      x: "Procura-se F com F'(x) = cos x. Como a derivada de sen x é cos x, a primitiva mais geral é sen x + C. A constante arbitrária aparece porque somar uma constante não muda a derivada. Vale a pena sempre conferir a resposta derivando: é a prova real da integração.\n\n−sen x + C tem derivada −cos x, com o sinal trocado. cos x + C tem derivada −sen x. −cos x + C é a primitiva de sen x, e não de cos x. E tg x + C tem derivada 1/(cos x)², outra função.",
      v: { i: () => qualPrimitiva(Math.cos, o) },
    };
  })(),
  (() => {
    const o = ["ln|x| + C", "−1/x² + C", "1/x² + C", "x + C", "log₁₀|x| + C"];
    return {
      d: "facil",
      e: "Para x ≠ 0, qual é a primitiva mais geral de f(x) = 1/x?",
      o,
      x: "A regra da potência não serve para n = −1, pois daria x⁰/0. A primitiva de 1/x é o logaritmo: para x > 0, (ln x)' = 1/x; para x < 0, (ln(−x))' = (−1)/(−x) = 1/x. As duas se juntam em ln|x| + C, válida dos dois lados do zero.\n\n−1/x² + C é a derivada de 1/x, o caminho inverso. 1/x² + C também não tem derivada 1/x. x + C integra 1, e não 1/x. E log₁₀|x| + C tem derivada 1/(x · ln 10): só o logaritmo natural tem derivada exatamente 1/x.",
      v: { i: () => qualPrimitiva((x) => 1 / x, o, [-2.3, -1.1, 0.41, 1.7, 3.9]) },
    };
  })(),
  (() => {
    const o = ["2eˣ − 3x + C", "2eˣ − 3 + C", "2xeˣ − 3x + C", "eˣ − 3x + C", "2eˣ + C"];
    return {
      d: "facil",
      e: "Integrando termo a termo, quanto dá ∫ (2eˣ − 3) dx?",
      o,
      x: "A exponencial eˣ é a própria primitiva, e a constante 2 sai da integral: ∫ 2eˣ dx = 2eˣ. A integral da constante −3 é −3x. Resultado: 2eˣ − 3x + C, cuja derivada é 2eˣ − 3.\n\n2eˣ − 3 + C integra o −3 como se continuasse −3, esquecendo o x. 2xeˣ − 3x + C multiplica a exponencial por x, como se ela fosse uma potência. eˣ − 3x + C perde o fator 2. E 2eˣ + C esquece a parcela −3, cuja integral não é zero.",
      v: { i: () => qualPrimitiva(lerF("2eˣ − 3"), o) },
    };
  })(),
  (() => {
    const o = ["−cos x + C", "cos x + C", "sen x + C", "−sen x + C", "(sen x)²/2 + C"];
    return {
      d: "facil",
      e: "Derivando qual das expressões se obtém exatamente sen x?",
      o,
      x: "Como a derivada de cos x é −sen x, a derivada de −cos x é sen x. A primitiva mais geral de sen x é, portanto, −cos x + C. O sinal é a armadilha mais comum: seno e cosseno trocam de sinal em momentos diferentes ao derivar e ao integrar.\n\ncos x + C tem derivada −sen x, com o sinal trocado. sen x + C tem derivada cos x. −sen x + C tem derivada −cos x. E (sen x)²/2 + C tem derivada sen x · cos x, pela regra da cadeia.",
      v: { i: () => qualPrimitiva(Math.sin, o) },
    };
  })(),
  (() => {
    const o = ["(2/3)x^(3/2) + C", "(3/2)x^(3/2) + C", "1/(2√x) + C", "x^(3/2) + C", "(2/3)x^(1/2) + C"];
    return {
      d: "facil",
      e: "Qual é a integral indefinida ∫ √x dx, para x > 0?",
      o,
      x: "Escrevendo √x = x^(1/2), a regra da potência dá x^(1/2 + 1)/(1/2 + 1) = x^(3/2)/(3/2) = (2/3)x^(3/2). Resultado: (2/3)x^(3/2) + C. Conferindo: ((2/3)x^(3/2))' = (2/3)(3/2)x^(1/2) = √x.\n\n(3/2)x^(3/2) + C multiplica pelo novo expoente em vez de dividir. 1/(2√x) + C é a derivada de √x, o caminho inverso. x^(3/2) + C esquece de dividir por 3/2. E (2/3)x^(1/2) + C divide pelo expoente certo, mas não o aumenta.",
      v: { i: () => qualPrimitiva(Math.sqrt, o) },
    };
  })(),
  (() => {
    const o = ["F'(x) = f(x) para todo x do intervalo", "A derivada de f é F", "F(x) = f(x) + C", "F(x) = f'(x)", "F(x) = x · f(x)"];
    return {
      d: "facil",
      e: "O que significa dizer que F é uma primitiva de f num intervalo?",
      o,
      x: "Primitiva é o caminho inverso da derivada: F é primitiva de f quando F'(x) = f(x) em todo o intervalo. Por exemplo, sen x é primitiva de cos x, porque (sen x)' = cos x. Se F é uma primitiva, todas as outras são F + C.\n\nDizer que a derivada de f é F troca os papéis: seria F a derivada de f, e não o contrário. F(x) = f(x) + C confunde primitiva com deslocamento vertical. F(x) = f'(x) também inverte a relação. E F(x) = x · f(x) só funciona para funções constantes.",
      /* pares (f, F) com F construída por integração numérica; cada relação é testada neles */
      v: {
        i: () => {
          const fs = [Math.cos, Math.exp, (x) => 2 * x, (x) => 1 / (1 + x * x)], xs = [0.3, 0.9, 1.6, 2.4];
          const pares = fs.map((f) => [f, (x) => integra(f, 0, x, 400)]);
          const todos = (p) => pares.every(([f, F]) => xs.every((x) => p(f, F, x)));
          const perto = (a, b) => Math.abs(a - b) < 1e-6 * Math.max(1, Math.abs(a));
          const afirma = {
            "F'(x) = f(x) para todo x do intervalo": todos((f, F, x) => perto(derivada(F, x), f(x))),
            "A derivada de f é F": todos((f, F, x) => perto(derivada(f, x), F(x))),
            "F(x) = f(x) + C": pares.every(([f, F]) => xs.every((x) => perto(F(x) - f(x), F(xs[0]) - f(xs[0])))),
            "F(x) = f'(x)": todos((f, F, x) => perto(F(x), derivada(f, x))),
            "F(x) = x · f(x)": todos((f, F, x) => perto(F(x), x * f(x))),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["−1/x + C", "1/x + C", "−2/x³ + C", "ln(x²) + C", "−1/(3x³) + C"];
    return {
      d: "facil",
      e: "Escrevendo 1/x² como potência de x, quanto dá ∫ dx/x² para x ≠ 0?",
      o,
      x: "Escrevendo 1/x² = x⁻², a regra da potência vale, pois n = −2 ≠ −1: x⁻¹/(−1) = −1/x. Resultado: −1/x + C. Conferindo: (−1/x)' = 1/x². O cuidado com o sinal vem de o novo expoente ser negativo.\n\n1/x + C erra o sinal ao dividir pelo novo expoente −1. −2/x³ + C é a derivada de 1/x², o caminho inverso. ln(x²) + C trata o integrando como se fosse 1/x, a única potência cuja primitiva é logarítmica. E −1/(3x³) + C diminui o expoente em vez de aumentá-lo.",
      v: { i: () => qualPrimitiva((x) => 1 / (x * x), o, [-2.3, -1.1, 0.41, 1.7, 3.9]) },
    };
  })(),
  (() => {
    const o = ["x³/3 + x² + x + C", "(x + 1)³ + C", "2(x + 1) + C", "x³/3 + x + C", "x³/3 + 2x² + x + C"];
    return {
      d: "facil",
      e: "Expandindo o quadrado antes de integrar, qual é ∫ (x + 1)² dx?",
      o,
      x: "Expandindo, (x + 1)² = x² + 2x + 1, e a integral termo a termo dá x³/3 + x² + x + C. A derivada, x² + 2x + 1, confirma. Outra forma, (x + 1)³/3 + C, também é correta: difere desta pela constante 1/3, que fica absorvida em C.\n\n(x + 1)³ + C esquece de dividir por 3. 2(x + 1) + C é a derivada do integrando. x³/3 + x + C erra a expansão, esquecendo o termo 2x. E x³/3 + 2x² + x + C integra 2x como 2x², sem dividir por 2.",
      v: { i: () => qualPrimitiva((x) => (x + 1) ** 2, o) },
    };
  })(),
  (() => {
    const o = ["tg x + C", "sec x + C", "(sec x)³/3 + C", "−1/tg x + C", "sen x + C"];
    return {
      d: "facil",
      e: "Nos intervalos em que cos x ≠ 0, quanto vale ∫ (sec x)² dx?",
      o,
      x: "A derivada de tg x é (sec x)² = 1/(cos x)², e por isso ∫ (sec x)² dx = tg x + C. É uma das primitivas imediatas, lida de trás para a frente na tabela de derivadas.\n\nsec x + C tem derivada sec x · tg x. (sec x)³/3 + C aplica a regra da potência como se sec x fosse a variável; derivando, apareceria um fator sec x · tg x a mais. −1/tg x + C é a primitiva de (cossec x)². E sen x + C tem derivada cos x, e não 1/(cos x)².",
      v: { i: () => qualPrimitiva((x) => 1 / Math.cos(x) ** 2, o, [-2.3, -0.37, 0.41, 1.13, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["3x² + 2", "x⁴/4 + x² + C", "3x² + 2x", "x² + 2", "3x + 2"];
    return {
      d: "facil",
      e: "Sabendo que F(x) = x³ + 2x é uma primitiva de f, qual é a função f?",
      o,
      x: "Se F é primitiva de f, então f = F'. Derivando: f(x) = (x³ + 2x)' = 3x² + 2. Integrar e derivar são operações inversas: para achar f a partir da primitiva, deriva-se. Conferindo, a integral de 3x² + 2 é x³ + 2x + C, e F é o caso C = 0.\n\nx⁴/4 + x² + C é uma primitiva de F, o caminho contrário. 3x² + 2x deriva só o primeiro termo e mantém o segundo. x² + 2 esquece o fator 3 que desce do expoente. E 3x + 2 diminui o expoente duas vezes.",
      v: { i: () => { const f = (x) => derivada((s) => s ** 3 + 2 * s, x); return unicoV(o.map((t) => { try { return mesmaFuncao(f, lerF(t), PONTOS); } catch { return false; } })); } },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["x²/2 + 2/x + C", "x²/2 − 2/x + C", "(x⁴/4 − 2x)/(x³/3) + C", "x²/2 − 2 ln|x| + C", "x² + 2/x + C"];
    return {
      d: "media",
      e: "Para x ≠ 0, qual é a integral indefinida ∫ (x³ − 2)/x² dx?",
      o,
      x: "Antes de integrar, divide-se termo a termo: (x³ − 2)/x² = x − 2x⁻². Integrando: x²/2 − 2 · x⁻¹/(−1) = x²/2 + 2/x. Resultado: x²/2 + 2/x + C, cuja derivada é x − 2/x².\n\nx²/2 − 2/x + C erra o sinal ao dividir pelo expoente −1. (x⁴/4 − 2x)/(x³/3) + C integra numerador e denominador separadamente, o que não vale para quocientes. x²/2 − 2 ln|x| + C trata 2/x² como se fosse 2/x. E x² + 2/x + C esquece de dividir x² por 2.",
      v: { i: () => qualPrimitiva((x) => (x ** 3 - 2) / (x * x), o) },
    };
  })(),
  (() => {
    const o = ["x³/3 + 2x − 1/x + C", "(x + 1/x)³/3 + C", "x³/3 − 1/x + C", "x³/3 + 2x + 1/x + C", "x³/3 + 2x + ln|x| + C"];
    return {
      d: "media",
      e: "Para x ≠ 0, qual resultado se obtém para ∫ (x + 1/x)² dx?",
      o,
      x: "Expandindo o quadrado: (x + 1/x)² = x² + 2 + 1/x², porque o termo cruzado é 2 · x · (1/x) = 2. Integrando termo a termo: x³/3 + 2x − 1/x + C. A derivada, x² + 2 + 1/x², confirma.\n\n(x + 1/x)³/3 + C trata a expressão de dentro como se fosse a variável; derivando, apareceria o fator 1 − 1/x². x³/3 − 1/x + C esquece o termo cruzado 2. x³/3 + 2x + 1/x + C erra o sinal da primitiva de x⁻². E x³/3 + 2x + ln|x| + C integra 1/x² como se fosse 1/x.",
      v: { i: () => qualPrimitiva((x) => (x + 1 / x) ** 2, o) },
    };
  })(),
  (() => {
    const o = ["2x³ − 2x² + 5", "2x³ − 2x²", "6x³ − 4x² + 3", "2x³ − 2x² + 3", "x³ − x² + 5"];
    return {
      d: "media",
      e: "Qual é a função F que satisfaz F'(x) = 6x² − 4x e F(1) = 5?",
      o,
      x: "A primitiva geral é F(x) = 2x³ − 2x² + C. A condição F(1) = 5 fixa a constante: 2 − 2 + C = 5, e C = 5. Então F(x) = 2x³ − 2x² + 5. Uma condição inicial escolhe, na família de primitivas, a única curva que passa pelo ponto dado.\n\n2x³ − 2x² esquece a constante e dá F(1) = 0. 6x³ − 4x² + 3 passa por (1, 5), mas não divide os coeficientes pelos novos expoentes. 2x³ − 2x² + 3 calcula mal F(1), como se fosse 2. E x³ − x² + 5 também passa por (1, 5), mas tem derivada 3x² − 2x.",
      v: { i: () => qualComValor(lerF("6x² − 4x"), 1, 5, o) },
    };
  })(),
  (() => {
    const o = ["(eˣ − e^(−x))/2 + C", "(eˣ + e^(−x))/2 + C", "eˣ − e^(−x) + C", "x(eˣ + e^(−x))/2 + C", "(eˣ + e^(−x))/2 − x + C"];
    return {
      d: "media",
      e: "A função cosh x = (eˣ + e^(−x))/2 é o cosseno hiperbólico. Qual é a sua primitiva mais geral?",
      o,
      x: "A primitiva de eˣ é eˣ, e a de e^(−x) é −e^(−x), porque a derivada de −e^(−x) é e^(−x). Dividindo por 2: (eˣ − e^(−x))/2 + C, que é o seno hiperbólico, senh x. Como no caso trigonométrico, cosh e senh se alternam, mas aqui sem troca de sinal: (senh x)' = cosh x e (cosh x)' = senh x.\n\n(eˣ + e^(−x))/2 + C repete a própria função, que tem derivada senh x. eˣ − e^(−x) + C esquece o fator 1/2. x(eˣ + e^(−x))/2 + C multiplica por x como se o integrando fosse constante. E (eˣ + e^(−x))/2 − x + C tem derivada senh x − 1.",
      v: { i: () => qualPrimitiva(Math.cosh, o) },
    };
  })(),
  (() => {
    const o = ["t³ + 2t + 1", "t³ + 2t", "3t³ + 2t + 1", "t³ + t + 2", "t² + 2t + 1"];
    return {
      d: "media",
      e: "Uma partícula tem aceleração a(t) = 6t, velocidade inicial v(0) = 2 e posição inicial s(0) = 1, em unidades do SI. Qual é a posição s(t)?",
      o,
      x: "A velocidade é uma primitiva da aceleração: v(t) = 3t² + C₁, e v(0) = 2 dá C₁ = 2. A posição é uma primitiva da velocidade: s(t) = t³ + 2t + C₂, e s(0) = 1 dá C₂ = 1. Então s(t) = t³ + 2t + 1. Cada integração introduz uma constante, fixada por uma condição inicial.\n\nt³ + 2t esquece a posição inicial. 3t³ + 2t + 1 não divide 3t² pelo novo expoente. t³ + t + 2 troca os papéis de v(0) e s(0). E t² + 2t + 1 integra uma vez só, como se a aceleração fosse a velocidade.",
      /* derivada segunda numérica igual a 6t, derivada em 0 igual a 2, valor em 0 igual a 1 */
      v: { i: () => unicoV(o.map((t) => { const s = lerF(t.replace(/t/g, "x")); return mesmaFuncao((x) => derivada2(s, x), (x) => 6 * x, PONTOS, 1e-5) && Math.abs(derivada(s, 0) - 2) < 1e-8 && Math.abs(s(0) - 1) < 1e-12; })) },
    };
  })(),
  (() => {
    const o = ["arctg x + C", "ln(1 + x²) + C", "x + x³/3 + C", "−2x/(1 + x²)² + C", "arcsen x + C"];
    return {
      d: "media",
      e: "Que primitiva imediata tem a função f(x) = 1/(1 + x²)?",
      o,
      x: "A derivada de arctg x é 1/(1 + x²), e por isso ∫ dx/(1 + x²) = arctg x + C. É uma primitiva imediata, que aparece com frequência e não sai da regra da potência.\n\nln(1 + x²) + C tem derivada 2x/(1 + x²), que tem x no numerador. x + x³/3 + C integra 1 + x², e não o seu inverso. −2x/(1 + x²)² + C é a derivada do integrando. E arcsen x + C tem derivada 1/√(1 − x²), com raiz e sinal de menos.",
      v: { i: () => qualPrimitiva((x) => 1 / (1 + x * x), o, [-0.8, -0.3, 0.2, 0.6, 0.9]) },
    };
  })(),
  (() => {
    const o = ["3 ln x − 4√x + C", "3 ln x − 2√x + C", "−3/x² + 1/(x√x) + C", "3 ln x − (4/3)x^(3/2) + C", "3x − 4√x + C"];
    return {
      d: "media",
      e: "Com x positivo, calcule ∫ (3/x − 2/√x) dx. Qual é o resultado?",
      o,
      x: "A primeira parcela é 3 vezes 1/x, com primitiva 3 ln x. A segunda é −2x^(−1/2), e a regra da potência dá −2 · x^(1/2)/(1/2) = −4√x. Resultado: 3 ln x − 4√x + C, cuja derivada é 3/x − 2/√x.\n\n3 ln x − 2√x + C esquece de dividir pelo novo expoente 1/2, que dobra o coeficiente. −3/x² + 1/(x√x) + C é a derivada do integrando. 3 ln x − (4/3)x^(3/2) + C integra √x em vez de 1/√x. E 3x − 4√x + C integra 3/x como se fosse 3.",
      v: { i: () => qualPrimitiva((x) => 3 / x - 2 / Math.sqrt(x), o) },
    };
  })(),
  (() => {
    const o = ["sen x + 2", "sen x + 3", "−sen x + 4", "sen x − 2", "cos x + 3"];
    return {
      d: "media",
      e: "Qual é a primitiva F de f(x) = cos x que satisfaz F(π/2) = 3?",
      o,
      x: "A primitiva geral é sen x + C. Em x = π/2, sen(π/2) = 1, e a condição F(π/2) = 3 dá 1 + C = 3, ou C = 2. Então F(x) = sen x + 2.\n\nsen x + 3 usa C = 3, esquecendo que sen(π/2) = 1, e dá F(π/2) = 4. −sen x + 4 passa por (π/2, 3), mas tem derivada −cos x. sen x − 2 erra o sinal da constante. E cos x + 3 também passa pelo ponto, porque cos(π/2) = 0, mas tem derivada −sen x.",
      v: { i: () => qualComValor(Math.cos, Math.PI / 2, 3, o) },
    };
  })(),
  (() => {
    const o = ["x⁴/4 − x²/2 + C", "(x²/2)(x³/3 − x) + C", "x⁴ − x² + C", "3x² − 1 + C", "x⁴/4 − x + C"];
    return {
      d: "media",
      e: "Distribuindo antes de integrar, quanto vale ∫ x(x² − 1) dx?",
      o,
      x: "Não existe regra do produto para integrais: primeiro se distribui, x(x² − 1) = x³ − x, e depois se integra termo a termo: x⁴/4 − x²/2 + C. A derivada, x³ − x, confirma.\n\n(x²/2)(x³/3 − x) + C multiplica as primitivas dos fatores, o que não vale: derivando, apareceriam termos a mais. x⁴ − x² + C esquece de dividir pelos novos expoentes. 3x² − 1 + C é a derivada de x³ − x. E x⁴/4 − x + C integra −x como −x, sem aumentar o expoente.",
      v: { i: () => qualPrimitiva((x) => x * (x * x - 1), o) },
    };
  })(),
  (() => {
    const o = ["25 m", "45 m", "5 m", "65 m", "20 m"];
    return {
      d: "media",
      e: "Um objeto é lançado para cima a 20 m/s, de 5 m de altura, com aceleração constante de −10 m/s². Qual é a sua altura no instante t = 2 s?",
      o,
      x: "Integrando a aceleração: v(t) = 20 − 10t, com v(0) = 20. Integrando a velocidade: h(t) = 5 + 20t − 5t², com h(0) = 5. Em t = 2: h(2) = 5 + 40 − 20 = 25 m. Nesse instante, v(2) = 0: o objeto está no ponto mais alto. Cada integração exige uma condição inicial: a velocidade de lançamento para v, a altura inicial para h.\n\n45 m esquece a gravidade: 5 + 40. 5 m é a altura inicial. 65 m soma o termo da gravidade em vez de subtrair: 5 + 40 + 20. E 20 m esquece a altura inicial: 40 − 20.",
      /* velocidade e altura por integração numérica da aceleração, com as condições iniciais */
      v: { i: () => { const v = (t) => 20 + integra(() => -10, 0, t, 100); return qual(5 + integra(v, 0, 2, 200), o.map((t) => t.replace(/\s*m$/, ""))); } },
    };
  })(),
  (() => {
    const o = ["x − cos(2x)/2 + C", "(sen x + cos x)³/3 + C", "x + C", "x + cos(2x)/2 + C", "x − cos(2x) + C"];
    return {
      d: "media",
      e: "Qual é a primitiva mais geral de (sen x + cos x)², depois de expandir o quadrado?",
      o,
      x: "Expandindo: (sen x + cos x)² = (sen x)² + 2sen x cos x + (cos x)² = 1 + sen(2x). A primitiva de 1 é x, e a de sen(2x) é −cos(2x)/2, porque a derivada de −cos(2x)/2 é sen(2x). Resultado: x − cos(2x)/2 + C.\n\n(sen x + cos x)³/3 + C trata a soma como variável; derivando, apareceria o fator cos x − sen x. x + C esquece o termo sen(2x), como se o quadrado valesse 1. x + cos(2x)/2 + C erra o sinal. E x − cos(2x) + C esquece o fator 1/2 que compensa o 2 dentro do cosseno.",
      v: { i: () => qualPrimitiva((x) => (Math.sin(x) + Math.cos(x)) ** 2, o) },
    };
  })(),
  (() => {
    const o = ["√x + 3", "√x + 5", "2√x + 1", "√x − 3", "ln x + 5 − ln 4"];
    return {
      d: "media",
      e: "Qual função tem derivada 1/(2√x), para x > 0, e vale 5 em x = 4?",
      o,
      x: "A derivada de √x é 1/(2√x), então as primitivas são √x + C. Em x = 4, √4 = 2, e a condição dá 2 + C = 5, ou C = 3: a função é √x + 3, cujo gráfico é o de √x deslocado 3 unidades para cima.\n\n√x + 5 usa C = 5, esquecendo que √4 = 2, e vale 7 em x = 4. 2√x + 1 passa por (4, 5), mas tem derivada 1/√x, o dobro da pedida. √x − 3 erra o sinal da constante. E ln x + 5 − ln 4 também passa pelo ponto, mas tem derivada 1/x.",
      v: { i: () => qualComValor((x) => 1 / (2 * Math.sqrt(x)), 4, 5, o) },
    };
  })(),
  (() => {
    const o = ["2ˣ/ln 2 + C", "2ˣ · ln 2 + C", "2^(x + 1)/(x + 1) + C", "2ˣ + C", "x · 2^(x − 1) + C"];
    return {
      d: "media",
      e: "Como se integra a exponencial de base 2? Qual é ∫ 2ˣ dx?",
      o,
      x: "A derivada de 2ˣ é 2ˣ · ln 2. Para compensar o fator ln 2, divide-se por ele: ∫ 2ˣ dx = 2ˣ/ln 2 + C. Em geral, ∫ aˣ dx = aˣ/ln a + C, para a > 0 e a ≠ 1; com a = e, ln e = 1 e volta-se à regra de eˣ.\n\n2ˣ · ln 2 + C multiplica pelo fator em vez de dividir: é a derivada de 2ˣ. 2^(x + 1)/(x + 1) + C aplica a regra da potência, que não vale com a variável no expoente. 2ˣ + C esquece o fator ln 2, que só some na base e. E x · 2^(x − 1) + C também confunde exponencial com potência.",
      v: { i: () => qualPrimitiva((x) => 2 ** x, o) },
    };
  })(),
  (() => {
    const o = ["(2/3)x^(3/2) + 2√x + C", "(x²/2 + x)/((2/3)x^(3/2)) + C", "(2/3)x^(3/2) + √x/2 + C", "x^(3/2) + 2√x + C", "(3/2)x^(3/2) + 2√x + C"];
    return {
      d: "media",
      e: "Dividindo termo a termo pelo denominador, qual é ∫ (x + 1)/√x dx, com x > 0?",
      o,
      x: "Dividindo termo a termo: (x + 1)/√x = x^(1/2) + x^(−1/2). As primitivas são x^(3/2)/(3/2) = (2/3)x^(3/2) e x^(1/2)/(1/2) = 2√x. Resultado: (2/3)x^(3/2) + 2√x + C.\n\n(x²/2 + x)/((2/3)x^(3/2)) + C integra numerador e denominador em separado, o que não vale para quocientes. (2/3)x^(3/2) + √x/2 + C multiplica x^(1/2) por 1/2 em vez de dividir. x^(3/2) + 2√x + C esquece de dividir por 3/2. E (3/2)x^(3/2) + 2√x + C multiplica pelo novo expoente em vez de dividir.",
      v: { i: () => qualPrimitiva((x) => (x + 1) / Math.sqrt(x), o) },
    };
  })(),
  (() => {
    const o = ["3", "1", "−3", "0", "Depende da função"];
    return {
      d: "media",
      e: "Duas primitivas F e G da mesma função contínua satisfazem F(0) = 2 e G(0) = −1. Quanto vale F(5) − G(5)?",
      o,
      x: "Duas primitivas da mesma função têm a mesma derivada, e a diferença F − G tem derivada nula: é constante. O valor da constante sai de qualquer ponto: F(0) − G(0) = 2 − (−1) = 3. Então F(5) − G(5) = 3, e o mesmo vale para todo x.\n\n1 soma os valores, 2 + (−1), em vez de subtrair. −3 subtrai na ordem inversa. 0 supõe que primitivas da mesma função são iguais. E o resultado não depende da função: vale para qualquer f, pelo corolário do teorema do valor médio.",
      /* para várias funções, as duas primitivas são construídas por integração numérica a partir dos valores em 0 */
      v: {
        i: () => {
          const r = [Math.cos, Math.exp, (x) => x * x - 3, (x) => 1 / (1 + x * x)].map((f) => { const F = (x) => 2 + integra(f, 0, x, 400), G = (x) => -1 + integra(f, 0, x, 400); return F(5) - G(5); });
          if (r.some((v) => Math.abs(v - r[0]) > 1e-9)) throw new Error("depende da função?");
          return qual(r[0], o);
        },
      },
    };
  })(),
  (() => {
    const o = ["sen(2x)/2 + C", "(sen x)²/2 + C", "−(cos x)²/2 + C", "−cos(2x)/4 + C", "(sen x)²/2 − 7"];
    return {
      d: "media",
      e: "Qual das expressões NÃO é uma primitiva de f(x) = sen x · cos x?",
      o,
      x: "As expressões (sen x)²/2, −(cos x)²/2 e −cos(2x)/4 têm todas derivada sen x · cos x: diferem entre si só por constantes, porque (sen x)² = 1 − (cos x)² e cos(2x) = 1 − 2(sen x)². Somar −7 também não muda a derivada. Já sen(2x)/2 tem derivada cos(2x), e não é primitiva.\n\nO engano vem de lembrar que sen x · cos x = sen(2x)/2 e tomar essa expressão como se já fosse a primitiva, sem integrar. O exemplo mostra por que respostas de integrais podem ter aparências bem diferentes e estar todas certas.",
      v: { i: () => unicoV(o.map((t) => !primitivaDe((x) => Math.sin(x) * Math.cos(x), t))) },
    };
  })(),
  (() => {
    const o = ["x · |x|/2 + C", "x²/2 + C", "−x²/2 + C", "|x|/2 + C", "x/|x| + C"];
    return {
      d: "media",
      e: "Qual é a primitiva mais geral de f(x) = |x|, válida em toda a reta?",
      o,
      x: "Para x ≥ 0, |x| = x, com primitiva x²/2; para x < 0, |x| = −x, com primitiva −x²/2. As duas se juntam numa só fórmula, x · |x|/2, que vale x²/2 à direita e −x²/2 à esquerda, é derivável em 0 e tem derivada |x| em todo ponto.\n\nx²/2 + C só serve para x ≥ 0: à esquerda, a derivada seria x, negativa. −x²/2 + C só serve para x ≤ 0. |x|/2 + C tem derivada ±1/2, e não |x|. E x/|x| + C é a função sinal, constante em cada lado, com derivada zero.",
      v: { i: () => qualPrimitiva(Math.abs, o, [-2.3, -1.1, -0.37, 0.41, 1.13, 2.71]) },
    };
  })(),
  (() => {
    const o = ["3sen x + 2cos x + C", "3sen x − 2cos x + C", "−3sen x + 2cos x + C", "−3sen x − 2cos x + C", "3cos x + 2sen x + C"];
    return {
      d: "media",
      e: "Integre 3cos x − 2sen x. Qual primitiva mais geral se obtém?",
      o,
      x: "Termo a termo: ∫ 3cos x dx = 3sen x, e ∫ −2sen x dx = −2 · (−cos x) = 2cos x. Resultado: 3sen x + 2cos x + C. A derivada, 3cos x − 2sen x, confirma. Os sinais são o ponto delicado: a primitiva de sen x é −cos x, com o menos na frente.\n\n3sen x − 2cos x + C erra o sinal da primitiva do seno. −3sen x + 2cos x + C erra o sinal da primitiva do cosseno. −3sen x − 2cos x + C erra os dois sinais. E 3cos x + 2sen x + C mantém as funções e só troca os coeficientes de lugar.",
      v: { i: () => qualPrimitiva((x) => 3 * Math.cos(x) - 2 * Math.sin(x), o) },
    };
  })(),
  (() => {
    const o = ["4500", "3500", "6000", "500", "2000"];
    return {
      d: "media",
      e: "A população de uma cidade cresce à taxa P'(t) = 200 + 30t habitantes por ano, com P(0) = 1000. Qual é a população em t = 10 anos?",
      o,
      x: "A população é uma primitiva da taxa: P(t) = 200t + 15t² + C, com C = P(0) = 1000. Em t = 10: P(10) = 2000 + 1500 + 1000 = 4500 habitantes. O acréscimo em dez anos, 3500, é o acumulado da taxa no período.\n\n3500 é só o acréscimo, sem a população inicial. 6000 integra 30t como 30t², esquecendo o fator 1/2. 500 é a própria taxa em t = 10, P'(10), e não a população. E 2000 integra só a parcela constante da taxa.",
      v: { i: () => qual(1000 + integra((t) => 200 + 30 * t, 0, 10, 200), o) },
    };
  })(),
  (() => {
    const o = ["e^(2x)/2 + C", "2e^(2x) + C", "e^(2x) + C", "e^(2x + 1)/(2x + 1) + C", "x · e^(2x) + C"];
    return {
      d: "media",
      e: "Qual é ∫ e^(2x) dx, a integral da exponencial com expoente 2x?",
      o,
      x: "A derivada de e^(2x) é 2e^(2x), pela regra da cadeia. Para compensar o fator 2, divide-se por ele: ∫ e^(2x) dx = e^(2x)/2 + C. Em geral, ∫ e^(kx) dx = e^(kx)/k + C, para k ≠ 0.\n\n2e^(2x) + C multiplica pelo fator em vez de dividir: é a derivada de e^(2x). e^(2x) + C esquece o fator: a derivada seria o dobro do integrando. e^(2x + 1)/(2x + 1) + C aplica a regra da potência ao expoente. E x · e^(2x) + C multiplica por x como se e^(2x) fosse constante.",
      v: { i: () => qualPrimitiva((x) => Math.exp(2 * x), o, [-2.3, -1.1, 0.41, 1.13, 1.7]) },
    };
  })(),
  (() => {
    const o = ["q³ − 6q² + 20q + 50", "q³ − 6q² + 20q", "q³ − 12q² + 20q + 50", "3q³ − 12q² + 20q + 50", "6q + 38"];
    return {
      d: "media",
      e: "O custo marginal de produção é C'(q) = 3q² − 12q + 20, e o custo fixo é C(0) = 50. Qual é a função custo C(q)?",
      o,
      x: "O custo é uma primitiva do custo marginal: C(q) = q³ − 6q² + 20q + K, e a constante é o custo fixo, K = C(0) = 50. Então C(q) = q³ − 6q² + 20q + 50. Na economia, o custo fixo é exatamente a constante de integração.\n\nq³ − 6q² + 20q esquece o custo fixo. q³ − 12q² + 20q + 50 não divide −12q pelo novo expoente 2. 3q³ − 12q² + 20q + 50 aumenta os expoentes sem dividir. E 6q + 38 vem de derivar a expressão, em vez de integrá-la, e ajustar a constante.",
      v: { i: () => qualComValor(lerF("3x² − 12x + 20"), 0, 50, o, PONTOS, (t) => t.replace(/q/g, "x")) },
    };
  })(),
  (() => {
    const o = ["sec x + C", "tg x + C", "(sec x)²/2 + C", "−sec x + C", "ln|sec x| + C"];
    return {
      d: "media",
      e: "Qual função tem derivada sec x · tg x, nos intervalos em que cos x ≠ 0?",
      o,
      x: "A derivada de sec x = 1/cos x é sen x/(cos x)² = sec x · tg x. Por isso ∫ sec x · tg x dx = sec x + C, outra primitiva imediata, lida na tabela de derivadas de trás para a frente.\n\ntg x + C tem derivada (sec x)². (sec x)²/2 + C tem derivada (sec x)² · tg x, com um fator sec x a mais. −sec x + C erra o sinal. E ln|sec x| + C tem derivada tg x: é a primitiva da tangente, e não de sec x · tg x.",
      v: { i: () => qualPrimitiva((x) => Math.tan(x) / Math.cos(x), o, [-2.3, -0.37, 0.41, 1.13, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["18", "16", "19", "32", "14"];
    return {
      d: "media",
      e: "Uma primitiva de f(x) = 4x³ passa pelo ponto (1, 3). Qual é o seu valor em x = 2?",
      o,
      x: "As primitivas de 4x³ são x⁴ + C. Passar por (1, 3) dá 1 + C = 3, ou C = 2. Em x = 2: 2⁴ + 2 = 18. Também dá para pensar na variação: de x = 1 a x = 2, a primitiva aumenta 2⁴ − 1⁴ = 15, e 3 + 15 = 18.\n\n16 esquece a constante. 19 usa C = 3, esquecendo que em x = 1 a parcela x⁴ vale 1. 32 é o integrando em x = 2, f(2) = 4 · 8. E 14 erra o sinal da constante, usando C = −2.",
      v: { i: () => qual(3 + integra((x) => 4 * x ** 3, 1, 2, 200), o) },
    };
  })(),
  (() => {
    const o = ["(3/5)x^(5/3) + 3x^(1/3) + C", "(5/3)x^(5/3) + (1/3)x^(1/3) + C", "(2/3)x^(−1/3) − (2/3)x^(−5/3) + C", "(3/5)x^(5/3) − 3x^(−1/3) + C", "(3/5)x^(5/3) + C"];
    return {
      d: "media",
      e: "Qual primitiva mais geral tem a soma de potências x^(2/3) + x^(−2/3), para x > 0?",
      o,
      x: "Pela regra da potência: x^(2/3) tem primitiva x^(5/3)/(5/3) = (3/5)x^(5/3), e x^(−2/3) tem primitiva x^(1/3)/(1/3) = 3x^(1/3). Resultado: (3/5)x^(5/3) + 3x^(1/3) + C.\n\n(5/3)x^(5/3) + (1/3)x^(1/3) + C multiplica pelos novos expoentes em vez de dividir. (2/3)x^(−1/3) − (2/3)x^(−5/3) + C é a derivada do integrando. (3/5)x^(5/3) − 3x^(−1/3) + C diminui o segundo expoente em vez de aumentá-lo. E (3/5)x^(5/3) + C esquece a segunda parcela.",
      v: { i: () => qualPrimitiva((x) => x ** (2 / 3) + x ** (-2 / 3), o) },
    };
  })(),
  (() => {
    const o = ["2x³ + x + 2", "6x³ + x + 2", "2x³ + 2", "2x³ + x", "x³ + x + 2"];
    return {
      d: "media",
      e: "Encontre f sabendo que f''(x) = 12x, f'(0) = 1 e f(0) = 2. Qual é f(x)?",
      o,
      x: "Integrando uma vez: f'(x) = 6x² + C₁, e f'(0) = 1 dá C₁ = 1. Integrando de novo: f(x) = 2x³ + x + C₂, e f(0) = 2 dá C₂ = 2. Então f(x) = 2x³ + x + 2. Duas integrações pedem duas condições. Conferindo: f'(x) = 6x² + 1 e f''(x) = 12x, com os valores iniciais certos.\n\n6x³ + x + 2 divide só uma vez pelos expoentes. 2x³ + 2 esquece a constante C₁ = 1, que vira a parcela x. 2x³ + x esquece a constante C₂. E x³ + x + 2 divide 6x² por 6, e não pelo novo expoente 3.",
      v: { i: () => unicoV(o.map((t) => { const f = lerF(t); return mesmaFuncao((x) => derivada2(f, x), (x) => 12 * x, PONTOS, 1e-5) && Math.abs(derivada(f, 0) - 1) < 1e-8 && Math.abs(f(0) - 2) < 1e-12; })) },
    };
  })(),
  (() => {
    const o = ["√x + ln x + C", "√x − 1/x² + C", "−1/(4x√x) − 1/x² + C", "2√x + ln x + C", "√x + x + C"];
    return {
      d: "media",
      e: "Reconhecendo derivadas conhecidas, qual é ∫ (1/(2√x) + 1/x) dx para x > 0?",
      o,
      x: "Cada parcela é a derivada de uma função conhecida: 1/(2√x) é a derivada de √x, e 1/x é a derivada de ln x. Resultado: √x + ln x + C. Reconhecer derivadas conhecidas no integrando é o atalho mais rápido para achar primitivas.\n\n√x − 1/x² + C troca a primitiva de 1/x pela sua derivada. −1/(4x√x) − 1/x² + C é a derivada do integrando inteiro. 2√x + ln x + C esquece o fator 1/2 da primeira parcela: a derivada de 2√x é 1/√x. E √x + x + C integra 1/x como se fosse 1.",
      v: { i: () => qualPrimitiva((x) => 1 / (2 * Math.sqrt(x)) + 1 / x, o) },
    };
  })(),
  (() => {
    const o = ["eˣ + x²/2 − 1", "eˣ + x²/2", "eˣ + x²/2 + 1", "eˣ + x² − 1", "xeˣ + x²/2"];
    return {
      d: "media",
      e: "Qual é a primitiva de f(x) = eˣ + x que se anula em x = 0?",
      o,
      x: "A primitiva geral é eˣ + x²/2 + C. Em x = 0, e⁰ = 1, e a condição dá 1 + 0 + C = 0, ou C = −1. Então F(x) = eˣ + x²/2 − 1. A exponencial não se anula em x = 0, e a constante precisa compensar isso.\n\neˣ + x²/2 vale 1 em x = 0, e não 0. eˣ + x²/2 + 1 erra o sinal da constante e vale 2. eˣ + x² − 1 se anula em x = 0, mas tem derivada eˣ + 2x. E xeˣ + x²/2 também se anula em x = 0, mas tem derivada eˣ + xeˣ + x.",
      v: { i: () => qualComValor(lerF("eˣ + x"), 0, 0, o) },
    };
  })(),
  (() => {
    const o = ["x² − 3x + 3", "x² − 3x + 1", "x² − 3x − 1", "2x² − 3x − 1", "x² − 3x + 5"];
    return {
      d: "media",
      e: "Em cada ponto, a tangente ao gráfico de F tem inclinação 2x − 3, e o gráfico passa por (2, 1). Qual é F?",
      o,
      x: "A inclinação da tangente é a derivada: F'(x) = 2x − 3, e então F(x) = x² − 3x + C. O ponto (2, 1) dá 4 − 6 + C = 1, isto é, C = 3. Então F(x) = x² − 3x + 3.\n\nx² − 3x + 1 usa C = 1, o valor de F em x = 2, esquecendo as parcelas x² − 3x. x² − 3x − 1 vale −3 em x = 2, fora do ponto. 2x² − 3x − 1 passa por (2, 1), mas tem derivada 4x − 3. E x² − 3x + 5 vale 3 em x = 2, também fora do ponto.",
      v: { i: () => qualComValor(lerF("2x − 3"), 2, 1, o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["x/2 − sen(2x)/4 + C", "(sen x)³/3 + C", "x/2 + sen(2x)/4 + C", "−(cos x)³/3 + C", "x − sen(2x)/2 + C"];
    return {
      d: "dificil",
      e: "Usando a identidade (sen x)² = (1 − cos(2x))/2, qual é a integral indefinida ∫ (sen x)² dx?",
      o,
      x: "Pela identidade, (sen x)² = 1/2 − cos(2x)/2. A primitiva de 1/2 é x/2, e a de cos(2x)/2 é sen(2x)/4, porque a derivada de sen(2x) traz um fator 2. Resultado: x/2 − sen(2x)/4 + C.\n\n(sen x)³/3 + C aplica a regra da potência ao seno, esquecendo o fator cos x que a derivada traria. x/2 + sen(2x)/4 + C é a primitiva de (cos x)², com o sinal trocado. −(cos x)³/3 + C tem derivada (cos x)² · sen x. E x − sen(2x)/2 + C esquece o fator 1/2 da identidade.",
      v: { i: () => qualPrimitiva((x) => Math.sin(x) ** 2, o) },
    };
  })(),
  (() => {
    const o = ["tg x − x + C", "(tg x)³/3 + C", "tg x + C", "x − tg x + C", "(sec x)³/3 − x + C"];
    return {
      d: "dificil",
      e: "Usando (tg x)² = (sec x)² − 1, qual é a primitiva mais geral de f(x) = (tg x)²?",
      o,
      x: "Pela identidade, (tg x)² = (sec x)² − 1. A primitiva de (sec x)² é tg x, e a de 1 é x. Resultado: tg x − x + C, cuja derivada é (sec x)² − 1 = (tg x)². A identidade transforma um integrando sem primitiva imediata em dois que têm.\n\n(tg x)³/3 + C aplica a regra da potência à tangente, esquecendo o fator (sec x)² da regra da cadeia. tg x + C é a primitiva de (sec x)², e esquece a parcela −1. x − tg x + C troca o sinal do resultado. E (sec x)³/3 − x + C integra (sec x)² como se fosse potência de x.",
      v: { i: () => qualPrimitiva((x) => Math.tan(x) ** 2, o, [-2.3, -0.37, 0.41, 1.13, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["ln(−x) + 2", "ln x + 2", "−ln(−x) + 2", "ln(−x) − 2", "−1/x² + 1"];
    return {
      d: "dificil",
      e: "Para x < 0, encontre a função cuja derivada é 1/x e que vale 2 em x = −1. Qual é ela?",
      o,
      x: "Para x < 0, a primitiva de 1/x é ln|x| = ln(−x): pela regra da cadeia, a derivada de ln(−x) é (−1)/(−x) = 1/x. A condição dá ln 1 + C = 2, isto é, C = 2. Então F(x) = ln(−x) + 2.\n\nln x + 2 nem está definida para x < 0. −ln(−x) + 2 tem derivada −1/x, com o sinal trocado. ln(−x) − 2 erra o sinal da constante e vale −2 em x = −1. E −1/x² + 1 é a derivada de 1/x com uma constante, e não uma primitiva.",
      v: { i: () => qualComValor((x) => 1 / x, -1, 2, o, [-3.9, -2.71, -1.7, -1.13, -0.41]) },
    };
  })(),
  (() => {
    const o = ["(1/2) ln((x − 1)/(x + 1)) + C", "ln(x² − 1) + C", "(1/2) ln((x + 1)/(x − 1)) + C", "arctg x + C", "−2x/(x² − 1)² + C"];
    return {
      d: "dificil",
      e: "Com frações parciais, integre 1/(x² − 1) para x > 1. Qual é o resultado?",
      o,
      x: "Decompondo em frações parciais: 1/(x² − 1) = (1/2)(1/(x − 1) − 1/(x + 1)). As primitivas são (1/2) ln(x − 1) e −(1/2) ln(x + 1), e juntando: (1/2) ln((x − 1)/(x + 1)) + C. Derivando, volta-se a 1/(x² − 1).\n\nln(x² − 1) + C tem derivada 2x/(x² − 1), com x no numerador. (1/2) ln((x + 1)/(x − 1)) + C inverte a fração e troca o sinal do resultado. arctg x + C é a primitiva de 1/(x² + 1), com o sinal de mais. E −2x/(x² − 1)² + C é a derivada do integrando.",
      v: { i: () => qualPrimitiva((x) => 1 / (x * x - 1), o, [1.3, 1.7, 2.71, 3.9, 5]) },
    };
  })(),
  (() => {
    const o = ["x ln x − x + C", "1/x + C", "x ln x + C", "(ln x)²/2 + C", "ln x − x + C"];
    return {
      d: "dificil",
      e: "Derivando cada candidata, qual das funções é uma primitiva de f(x) = ln x, para x > 0?",
      o,
      x: "A derivada de x ln x − x, pela regra do produto, é ln x + x · (1/x) − 1 = ln x + 1 − 1 = ln x. Essa é a primitiva, obtida em geral por integração por partes, mas conferível só derivando. Derivar a resposta é a prova real de qualquer integração.\n\n1/x + C é a derivada de ln x, o caminho inverso. x ln x + C tem derivada ln x + 1: sobra o 1. (ln x)²/2 + C tem derivada (ln x)/x, a primitiva de ln x/x. E ln x − x + C tem derivada 1/x − 1.",
      v: { i: () => qualPrimitiva(Math.log, o) },
    };
  })(),
  (() => {
    const o = ["2 · f(2x)", "f(2x)", "f(2x)/2", "2 · f(x)", "f(x)/2"];
    return {
      d: "dificil",
      e: "Se F é uma primitiva de f, então G(x) = F(2x) é primitiva de qual função?",
      o,
      x: "Pela regra da cadeia, G'(x) = F'(2x) · 2 = 2 · f(2x). Então G é primitiva de 2f(2x). Equivalentemente, a primitiva de f(2x) é F(2x)/2, e é daí que vem, por exemplo, ∫ cos(2x) dx = sen(2x)/2 + C.\n\nf(2x) esquece o fator 2 da regra da cadeia. f(2x)/2 divide pelo fator em vez de multiplicar, confundindo com a primitiva de f(2x). 2 · f(x) calcula f no ponto errado. E f(x)/2 comete os dois erros.",
      /* pares (f, F); G(x) = F(2x) derivada numericamente e comparada com cada fórmula */
      v: {
        i: () => {
          const pares = [[Math.cos, Math.sin], [(x) => 2 * x, (x) => x * x], [Math.exp, Math.exp], [(x) => 1 / (1 + x * x), Math.atan]];
          const formula = { "2 · f(2x)": (f, x) => 2 * f(2 * x), "f(2x)": (f, x) => f(2 * x), "f(2x)/2": (f, x) => f(2 * x) / 2, "2 · f(x)": (f, x) => 2 * f(x), "f(x)/2": (f, x) => f(x) / 2 };
          return unicoV(o.map((t) => pares.every(([f, F]) => mesmaFuncao((x) => derivada((s) => F(2 * s), x), (x) => formula[t](f, x), [-1.3, -0.4, 0.5, 1.2]))));
        },
      },
    };
  })(),
  (() => {
    const o = ["5/2", "3", "9/2", "2", "7/2"];
    return {
      d: "dificil",
      e: "Seja f(x) = x para x ≤ 1 e f(x) = 1 para x > 1. Se F é a primitiva contínua de f com F(0) = 0, quanto vale F(3)?",
      o,
      x: "Em cada trecho, integra-se a fórmula correspondente e ajusta-se a constante para que F seja contínua. De 0 a 1, F(x) = x²/2, e F(1) = 1/2. Depois de 1, F(x) = 1/2 + (x − 1), que em x = 3 vale 1/2 + 2 = 5/2.\n\n3 usa f = 1 no intervalo todo. 9/2 usa f = x no intervalo todo: 3²/2. 2 esquece o primeiro trecho e começa do zero em x = 1. E 7/2 soma o primeiro trecho, 1/2, com a integral de 1 desde 0, e não desde 1.",
      v: { i: () => qual(integra((x) => (x <= 1 ? x : 1), 0, 3, 30000), o, 1e-7) },
    };
  })(),
  (() => {
    const o = ["a = 1/4 e b = 1/2", "a = 1/2 e b = 1/2", "a = 1/4 e b = 1", "a = −1/4 e b = 1/2", "a = 1/2 e b = 1"];
    return {
      d: "dificil",
      e: "Para quais valores de a e b a função F(x) = a · sen(2x) + b · x é primitiva de f(x) = (cos x)²?",
      o,
      x: "Pela identidade (cos x)² = (1 + cos(2x))/2, o integrando é 1/2 + cos(2x)/2. A primitiva é x/2 + sen(2x)/4, pois a derivada de sen(2x)/4 é cos(2x)/2. Comparando com a · sen(2x) + b · x: a = 1/4 e b = 1/2.\n\na = 1/2 e b = 1/2 esquece o fator 2 que a derivada de sen(2x) traz. a = 1/4 e b = 1 esquece de dividir o 1 da identidade por 2. a = −1/4 e b = 1/2 erra o sinal, como numa primitiva de (sen x)². E a = 1/2 e b = 1 comete os dois primeiros erros.",
      v: { i: () => unicoV(o.map((t) => { const m = t.match(/^a = (\S+) e b = (\S+)$/), A = num(m[1]), B = num(m[2]); return mesmaFuncao((x) => derivada((s) => A * Math.sin(2 * s) + B * s, x), (x) => Math.cos(x) ** 2, PONTOS); })) },
    };
  })(),
  (() => {
    const o = ["Diferem pela constante 1/2", "Só F é primitiva de x + 1", "Só G é primitiva de x + 1", "São iguais", "Diferem por uma função de x"];
    return {
      d: "dificil",
      e: "As funções F(x) = (x + 1)²/2 e G(x) = x²/2 + x são primitivas de x + 1? Qual é a relação entre elas?",
      o,
      x: "As duas têm derivada x + 1: F'(x) = x + 1 e G'(x) = x + 1. Logo são ambas primitivas, e diferem por uma constante: F(x) − G(x) = (x² + 2x + 1)/2 − x²/2 − x = 1/2. Aparências diferentes, mesma família de primitivas.\n\nSó F ou só G ignora que as duas têm a mesma derivada. São iguais falha em x = 0: F(0) = 1/2 e G(0) = 0. E a diferença não depende de x: é a constante 1/2, como garante o corolário do teorema do valor médio.",
      v: {
        i: () => {
          const F = (x) => (x + 1) ** 2 / 2, G = (x) => (x * x) / 2 + x, f = (x) => x + 1, xs = malhaDe(-3, 3, 24);
          const ehF = mesmaFuncao(d(F), f, PONTOS), ehG = mesmaFuncao(d(G), f, PONTOS), dif = xs.map((x) => F(x) - G(x)), constante = dif.every((v) => Math.abs(v - dif[0]) < 1e-12);
          const afirma = {
            "Diferem pela constante 1/2": ehF && ehG && constante && Math.abs(dif[0] - 0.5) < 1e-12,
            "Só F é primitiva de x + 1": ehF && !ehG,
            "Só G é primitiva de x + 1": ehG && !ehF,
            "São iguais": dif.every((v) => Math.abs(v) < 1e-12),
            "Diferem por uma função de x": !constante,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["x − ln(1 + eˣ) + C", "ln(1 + eˣ) + C", "x + ln(1 + eˣ) + C", "ln(x + eˣ) + C", "−eˣ/(1 + eˣ)² + C"];
    return {
      d: "dificil",
      e: "Escrevendo 1/(1 + eˣ) = 1 − eˣ/(1 + eˣ), qual é a primitiva mais geral de f(x) = 1/(1 + eˣ)?",
      o,
      x: "A primeira parcela, 1, tem primitiva x. A segunda, eˣ/(1 + eˣ), é a derivada de ln(1 + eˣ), pela regra da cadeia. Resultado: x − ln(1 + eˣ) + C. Conferindo: 1 − eˣ/(1 + eˣ) = 1/(1 + eˣ).\n\nln(1 + eˣ) + C é a primitiva de eˣ/(1 + eˣ), só a segunda parcela, com o sinal trocado. x + ln(1 + eˣ) + C erra o sinal dessa parcela. ln(x + eˣ) + C tem derivada (1 + eˣ)/(x + eˣ). E −eˣ/(1 + eˣ)² + C é a derivada do integrando.",
      v: { i: () => qualPrimitiva((x) => 1 / (1 + Math.exp(x)), o, [-2.3, -1.1, 0.41, 1.13, 2.71]) },
    };
  })(),
];

function d(f) { return (x) => derivada(f, x); }
