/* Rascunho — Cálculo I / Limites: noção intuitiva e cálculo.

   A explicação resolve com as técnicas algébricas (fatoração,
   racionalização, limites fundamentais); a conferência não usa nenhuma
   delas: calcula a função em pontos cada vez mais próximos do ponto,
   pelos dois lados, extrapola para h → 0 e compara com a alternativa,
   lida como número ("ln 3", "e³", "√2", "−1/9"). "Não existe" é a
   resposta quando os dois lados não concordam. */

import { unicoV, lerF, limite, bissecao } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Limites: noção intuitiva e cálculo";
export const arquivo = "calculo__limites-nocao-intuitiva-e-calculo";

/* valor de uma alternativa numérica ("ln 3", "e³", "−1/9", "a = 1") */
const num = (t) => { const s = String(t).replace(/^[a-z]\s*=\s*/, ""); if (/x/.test(s)) throw new Error("não é número"); return lerF(s)(0); };
/* índice da alternativa com o limite L; "Não existe" casa com L = NaN (lados diferentes) */
const qualLim = (L, alt, tol = 1e-6) => unicoV(alt.map((t) => { if (/^Não existe/.test(t)) return Number.isNaN(L); let v; try { v = num(t); } catch { return false; } return Number.isFinite(L) && Math.abs(v - L) <= tol * Math.max(1, Math.abs(L)); }));
const lim = (texto, a) => limite(lerF(texto), a);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["11", "13", "9", "12", "Não existe"];
    return {
      d: "facil",
      e: "Qual é o valor de lim (3x² − x + 1) quando x tende a 2?",
      o,
      x: "Polinômios são contínuos em todos os pontos, e o limite é o próprio valor da função: basta substituir x por 2. 3 · 2² − 2 + 1 = 12 − 2 + 1 = 11. Só é preciso alguma técnica especial quando a substituição direta produz uma indeterminação, como 0/0.\n\n13 erra os sinais dos dois últimos termos, somando 2 e subtraindo 1. 9 erra só o sinal do termo independente. 12 calcula apenas o primeiro termo, 3 · 2². E o limite existe: não há nenhuma divisão por zero nem outra indeterminação.",
      v: { i: () => qualLim(lim("3x² − x + 1", 2), o) },
    };
  })(),
  (() => {
    const o = ["6", "0", "3", "9", "Não existe, porque o denominador se anula"];
    return {
      d: "facil",
      e: "Qual é o valor de lim (x² − 9)/(x − 3) quando x tende a 3?",
      o,
      x: "A substituição direta dá 0/0, uma indeterminação. Fatorando o numerador, x² − 9 = (x − 3)(x + 3), e, para x ≠ 3, a expressão é igual a x + 3. Como o limite só depende dos valores perto de 3, e não em 3, ele vale 3 + 3 = 6.\n\n0 toma o numerador nulo como resultado, esquecendo que o denominador também se anula. 3 é o próprio ponto. 9 é o valor de x² em 3. E o denominador se anular não impede o limite: a função não está definida em 3, mas tem limite ali.",
      v: { i: () => qualLim(lim("(x² − 9)/(x − 3)", 3), o) },
    };
  })(),
  (() => {
    const o = ["3", "1", "1/3", "0", "Não existe"];
    return {
      d: "facil",
      e: "Sabendo que sen x/x tende a 1 quando x tende a 0, qual é o valor de lim sen(3x)/x quando x tende a 0?",
      o,
      x: "Multiplicando e dividindo por 3: sen(3x)/x = 3 · sen(3x)/(3x). Quando x tende a 0, u = 3x também tende a 0, e sen(u)/u tende a 1. O limite é 3 · 1 = 3.\n\n1 aplica o limite fundamental sem ajustar o argumento: ele vale para sen(u)/u, com o mesmo u em cima e embaixo. 1/3 inverte o fator. 0 toma sen 0 = 0 como resultado, ignorando o denominador. E o limite existe: é o limite fundamental multiplicado por 3.",
      v: { i: () => qualLim(lim("sen(3x)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["5", "7", "4,99", "5,01", "Não existe, porque f(2) = 7"];
    return {
      d: "facil",
      e: "Uma função f vale f(1,9) = 4,9, f(1,99) = 4,99, f(2,01) = 5,01 e f(2,1) = 5,1, e seguindo esse padrão perto de 2; no próprio ponto, f(2) = 7. Qual é o limite de f(x) quando x tende a 2?",
      o,
      x: "O limite descreve o valor de que f(x) se aproxima quando x chega perto de 2, pelos dois lados, sem nunca ser igual a 2. Pela tabela, f(x) se aproxima de 5 tanto pela esquerda (4,9; 4,99) quanto pela direita (5,01; 5,1): o limite é 5. O valor f(2) = 7 não interfere: o limite não depende do que acontece exatamente no ponto.\n\n7 é o valor da função no ponto, e não o limite. 4,99 e 5,01 são valores de f perto de 2, mas não aquele de que ela se aproxima. E o limite existe, mesmo com f(2) diferente dele: a função só não é contínua em 2.",
      /* função com esse comportamento: x + 3 fora do 2, e 7 no 2 */
      v: { i: () => { const f = (x) => (x === 2 ? 7 : x + 3); return qualLim(limite(f, 2), o.map((t) => t.replace(/(\d),(\d)/, "$1.$2"))); } },
    };
  })(),
  (() => {
    const o = ["3", "0", "1", "Não existe", "2"];
    return {
      d: "facil",
      e: "Qual é o valor de lim (x³ − 1)/(x − 1) quando x tende a 1?",
      o,
      x: "A substituição dá 0/0. A diferença de cubos se fatora: x³ − 1 = (x − 1)(x² + x + 1). Para x ≠ 1, a expressão é igual a x² + x + 1, e o limite é 1 + 1 + 1 = 3.\n\n0 toma o numerador nulo como resultado. 1 cancela o fator (x − 1), mas fica só com o x² do outro fator. O limite existe: a indeterminação desaparece depois da fatoração. E 2 fatora x³ − 1 como se fosse (x − 1)(x + 1), o que vale para x² − 1.",
      v: { i: () => qualLim(lim("(x³ − 1)/(x − 1)", 1), o) },
    };
  })(),
  (() => {
    const o = ["2", "10", "8", "4", "6"];
    return {
      d: "facil",
      e: "Quando x tende a a, lim f(x) = 3 e lim g(x) = −2. Qual é o valor de lim [2f(x) − g(x)²] quando x tende a a?",
      o,
      x: "Pelas propriedades dos limites (da soma, do produto por constante e do produto), o limite da expressão é a mesma expressão aplicada aos limites: 2 · 3 − (−2)² = 6 − 4 = 2. O quadrado de −2 é 4, e é ele que se subtrai.\n\n10 soma 4 em vez de subtrair, errando o sinal do quadrado. 8 usa g no lugar de g², fazendo 6 − (−2). 4 é só o termo g². E 6 é só o termo 2f.",
      /* exemplo: f(x) = x + 2 e g(x) = −2x, com a = 1 */
      v: { i: () => qualLim(limite((x) => 2 * (x + 2) - (-2 * x) ** 2, 1), o) },
    };
  })(),
  (() => {
    const o = ["1/4", "0", "1/2", "4", "Não existe"];
    return {
      d: "facil",
      e: "Qual é o valor de lim (√(x + 4) − 2)/x quando x tende a 0?",
      o,
      x: "A substituição dá 0/0. Multiplicando numerador e denominador pelo conjugado, √(x + 4) + 2: o numerador vira (x + 4) − 4 = x, e a expressão fica x/[x(√(x + 4) + 2)] = 1/(√(x + 4) + 2). Em x = 0: 1/(2 + 2) = 1/4.\n\n0 toma o numerador nulo como resultado. 1/2 esquece de somar as duas raízes do conjugado, usando só uma delas. 4 inverte o resultado. E o limite existe: a racionalização elimina a indeterminação.",
      v: { i: () => qualLim(lim("(√(x + 4) − 2)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["2", "Não existe, porque f é definida por duas expressões", "1", "0", "4"];
    return {
      d: "facil",
      e: "A função f vale x + 1 para x < 1 e 2x para x ≥ 1. Qual é o limite de f(x) quando x tende a 1?",
      o,
      x: "Pela esquerda, vale a expressão x + 1, que se aproxima de 1 + 1 = 2. Pela direita, vale 2x, que se aproxima de 2 · 1 = 2. Como os dois lados se aproximam do mesmo valor, o limite existe e vale 2 (e, nesse caso, coincide com f(1) = 2).\n\nSer definida por duas expressões não impede o limite: o que importa é se os dois lados concordam. 1 é o valor do ponto, e não da função. 0 usa x − 1 no lugar de x + 1. E 4 soma os valores dos dois lados.",
      v: { i: () => qualLim(limite((x) => (x < 1 ? x + 1 : 2 * x), 1), o) },
    };
  })(),
  (() => {
    const o = ["2", "1", "0", "e²", "1/2"];
    return {
      d: "facil",
      e: "Sabendo que (eˣ − 1)/x tende a 1 quando x tende a 0, qual é o valor de lim (e^(2x) − 1)/x quando x tende a 0?",
      o,
      x: "Multiplicando e dividindo por 2: (e^(2x) − 1)/x = 2 · (e^(2x) − 1)/(2x). Com u = 2x, que também tende a 0, o fator (eᵘ − 1)/u tende a 1, e o limite é 2 · 1 = 2. É o mesmo ajuste do limite fundamental trigonométrico: o que está no expoente precisa aparecer também no denominador.\n\n1 aplica o limite fundamental sem ajustar o argumento. 0 toma o numerador nulo como resultado. e² substitui x por 1 em vez de fazer x tender a 0. E 1/2 inverte o fator.",
      v: { i: () => qualLim(lim("(e^(2x) − 1)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["−1", "1", "0", "π", "2"];
    return {
      d: "facil",
      e: "Qual é o valor de lim (sen x + cos x) quando x tende a π?",
      o,
      x: "Seno e cosseno são contínuos, e o limite é o valor no ponto: sen π + cos π = 0 + (−1) = −1. No ponto π, o arco está no lado esquerdo do círculo trigonométrico, com cosseno −1 e seno 0.\n\n1 usa cos π = 1, esquecendo o sinal. 0 supõe que as duas parcelas se anulem. π é o ponto, e não o valor. E 2 soma o módulo dos dois valores como se ambos fossem 1.",
      v: { i: () => qualLim(lim("sen x + cos x", Math.PI), o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "−1", "2", "Não existe"];
    return {
      d: "facil",
      e: "De que valor se aproxima a expressão (x² + 3x + 2)/(x + 1) quando x tende a −1?",
      o,
      x: "A substituição dá (1 − 3 + 2)/0 = 0/0. Fatorando o numerador pelas raízes −1 e −2: x² + 3x + 2 = (x + 1)(x + 2). Para x ≠ −1, a expressão é igual a x + 2, e o limite é −1 + 2 = 1.\n\n0 toma o numerador nulo como resultado. −1 é o ponto, e não o limite. 2 avalia x + 2 em x = 0, em vez de em x = −1. E o limite existe: o fator comum se cancela.",
      v: { i: () => qualLim(lim("(x² + 3x + 2)/(x + 1)", -1), o) },
    };
  })(),
  (() => {
    const o = ["4", "0", "2", "1/4", "Não existe"];
    return {
      d: "facil",
      e: "Calcule o limite de (x − 4)/(√x − 2) para x tendendo a 4. Qual é o resultado?",
      o,
      x: "A substituição dá 0/0. Escrevendo x − 4 como diferença de quadrados, (√x − 2)(√x + 2), a expressão fica igual a √x + 2 para x ≠ 4, e o limite é √4 + 2 = 4.\n\n0 toma o numerador nulo como resultado. 2 fica só com o √x, esquecendo o +2 do fator. 1/4 inverte o resultado, como se a fração estivesse de ponta-cabeça. E o limite existe: a fatoração elimina a indeterminação.",
      v: { i: () => qualLim(lim("(x − 4)/(√x − 2)", 4), o) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["3", "0", "2", "12", "Não existe"];
    return {
      d: "media",
      e: "Para x tendendo a 2, de que valor se aproxima o quociente (x³ − 8)/(x² − 4)?",
      o,
      x: "A substituição dá 0/0. Fatorando: x³ − 8 = (x − 2)(x² + 2x + 4) e x² − 4 = (x − 2)(x + 2). Cancelando o fator comum, sobra (x² + 2x + 4)/(x + 2), que em x = 2 vale 12/4 = 3.\n\n0 toma o numerador nulo como resultado. 2 é o ponto, e não o limite. 12 calcula só o numerador depois da fatoração, esquecendo o denominador (x + 2). E o limite existe: o fator (x − 2) se cancela nos dois termos.",
      v: { i: () => qualLim(lim("(x³ − 8)/(x² − 4)", 2), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "0", "1", "2", "Não existe"];
    return {
      d: "media",
      e: "Qual é o limite de (1 − cos x)/x² quando x tende a 0?",
      o,
      x: "Multiplicando numerador e denominador por 1 + cos x: (1 − cos²x)/[x²(1 + cos x)] = sen²x/[x²(1 + cos x)] = (sen x/x)² · 1/(1 + cos x). Quando x tende a 0, (sen x/x)² tende a 1, e 1/(1 + cos x) tende a 1/2. O limite é 1/2.\n\n0 aplica o raciocínio de (1 − cos x)/x, cujo limite é mesmo 0, sem notar que aqui o denominador é x². 1 esquece o fator 1/(1 + cos x). 2 inverte esse fator. E o limite existe: é um dos limites trigonométricos clássicos.",
      v: { i: () => qualLim(lim("(1 − cos x)/x²", 0), o) },
    };
  })(),
  (() => {
    const o = ["2/5", "5/2", "1", "0", "10"];
    return {
      d: "media",
      e: "Qual é o valor do limite de tg(2x)/sen(5x) quando x tende a 0?",
      o,
      x: "Para x pequeno, tg(2x) se comporta como 2x, e sen(5x), como 5x. Formalmente: tg(2x)/sen(5x) = [tg(2x)/(2x)] · [(5x)/sen(5x)] · (2x)/(5x). Os dois primeiros fatores tendem a 1, e o último vale 2/5. O limite é 2/5.\n\n5/2 inverte a razão. 1 supõe que a tangente e o seno se cancelem, sem olhar os argumentos. 0 toma o numerador nulo como resultado. E 10 multiplica os coeficientes em vez de dividir.",
      v: { i: () => qualLim(lim("tg(2x)/sen(5x)", 0), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "0", "1", "2", "Não existe"];
    return {
      d: "media",
      e: "A que valor tende (√x − 1)/(x − 1) quando x se aproxima de 1?",
      o,
      x: "A substituição dá 0/0. Como x − 1 = (√x − 1)(√x + 1), a expressão é igual a 1/(√x + 1) para x ≠ 1, e o limite é 1/(1 + 1) = 1/2. Esse limite é também a derivada de √x em x = 1.\n\n0 toma o numerador nulo como resultado. 1 cancela o fator comum e esquece o 1 que se soma a √x. 2 inverte o resultado. E o limite existe: a indeterminação desaparece com a fatoração.",
      v: { i: () => qualLim(lim("(√x − 1)/(x − 1)", 1), o) },
    };
  })(),
  (() => {
    const o = ["4", "0", "2", "8", "Não existe"];
    return {
      d: "media",
      e: "Qual é o valor de lim [(2 + h)² − 4]/h quando h tende a 0?",
      o,
      x: "Expandindo: (2 + h)² − 4 = 4 + 4h + h² − 4 = 4h + h². Dividindo por h (que não é zero, porque só se aproxima de 0): 4 + h. Quando h tende a 0, o resultado é 4. Esse limite é a derivada de x² em x = 2, isto é, a inclinação da tangente ao gráfico nesse ponto.\n\n0 toma o numerador nulo como resultado, sem simplificar. 2 é o ponto em que a derivada é calculada. 8 é o dobro do resultado. E o limite existe: a indeterminação 0/0 desaparece depois da simplificação.",
      v: { i: () => qualLim(lim("((2 + x)² − 4)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["0", "1", "2", "x", "Não existe"];
    return {
      d: "media",
      e: "Calcule o limite de sen(x²)/x para x tendendo a 0. Qual é o valor encontrado?",
      o,
      x: "Escrevendo sen(x²)/x = [sen(x²)/x²] · x: o primeiro fator tende a 1 (limite fundamental com u = x²), e o segundo tende a 0. O produto tende a 1 · 0 = 0. Perto de 0, o seno de x² é muito menor que x, porque x² é muito menor que x.\n\n1 aplica o limite fundamental sem ajustar o denominador, que precisaria ser x². 2 deriva o x² do numerador sem motivo. x é a expressão simplificada, sem fazer x tender a 0. E o limite existe: o produto de um fator que tende a 1 por outro que tende a 0 tende a 0.",
      v: { i: () => qualLim(lim("sen(x²)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["0", "1", "−1", "Não existe, porque sen(1/x) oscila", "Não existe, porque sen(1/x) não está definido em 0"];
    return {
      d: "media",
      e: "Qual é o limite de x² · sen(1/x) quando x tende a 0?",
      o,
      x: "O fator sen(1/x) oscila entre −1 e 1 sem se aproximar de valor nenhum, mas está sempre limitado: −x² ≤ x² sen(1/x) ≤ x². Como −x² e x² tendem a 0, pelo teorema do confronto a função, espremida entre eles, também tende a 0.\n\n1 e −1 são os valores extremos do seno, e não o limite do produto. “Oscila” vale para o limite de sen(1/x) sozinho, que de fato não existe; multiplicado por x², que vai a zero, o produto tende a zero. E não estar definida em 0 não impede o limite, que só depende dos valores perto do ponto.",
      /* varredura de pontos cada vez mais próximos de 0: o maior |f| encolhe junto com x² */
      v: { i: () => { const f = lerF("x² · sen(1/x)"); const faixa = (h) => Math.max(...Array.from({ length: 2000 }, (_, k) => Math.abs(f(h * (k + 1) / 2000)))); const encolhe = faixa(1e-2) < 1e-4 + 1e-12 && faixa(1e-4) < 1e-8 + 1e-16; return unicoV(o.map((_, i) => i === (encolhe ? 0 : 3))); } },
    };
  })(),
  (() => {
    const o = ["k = 3, e o limite é 7", "k = 3, e o limite é 0", "k = −3, e o limite é 1", "k = 5, e o limite é 7", "O limite existe para qualquer k"];
    return {
      d: "media",
      e: "Para que valor de k existe o limite de (x² + kx − 10)/(x − 2) quando x tende a 2, e quanto ele vale?",
      o,
      x: "Como o denominador tende a 0, o limite só pode ser finito se o numerador também tender a 0: 4 + 2k − 10 = 0, e k = 3. Com k = 3, o numerador é x² + 3x − 10 = (x − 2)(x + 5), e a expressão fica igual a x + 5, que tende a 7.\n\n“O limite é 0” toma o numerador nulo como resultado. k = −3 erra o sinal ao resolver 2k = 6. k = 5 confunde k com a raiz −5 do outro fator. E, para k ≠ 3, o numerador não se anula em 2, e a expressão cresce sem limite perto dele.",
      /* para cada k da alternativa, o limite numérico; "qualquer k" testado com k = 0 */
      v: { i: () => { const L = (k) => limite((x) => (x * x + k * x - 10) / (x - 2), 2); return unicoV(o.map((t) => { const m = t.match(/^k = (−?\d+), e o limite é (\d+)$/); if (!m) return Number.isFinite(L(0)); const v = L(num(m[1])); return Number.isFinite(v) && Math.abs(v - num(m[2])) < 1e-6; })); } },
    };
  })(),
  (() => {
    const o = ["1", "0", "1/2", "2", "Não existe"];
    return {
      d: "media",
      e: "Racionalizando o numerador, obtém-se o limite de [√(1 + x) − √(1 − x)]/x quando x tende a 0. Quanto ele vale?",
      o,
      x: "Multiplicando pelo conjugado, √(1 + x) + √(1 − x): o numerador vira (1 + x) − (1 − x) = 2x, e a expressão fica 2x/[x(√(1 + x) + √(1 − x))] = 2/(√(1 + x) + √(1 − x)). Em x = 0: 2/(1 + 1) = 1.\n\n0 toma o numerador nulo como resultado. 1/2 esquece o 2 que sobra no numerador. 2 esquece de somar as duas raízes do conjugado. E o limite existe: a racionalização elimina a indeterminação.",
      v: { i: () => qualLim(lim("(√(1 + x) − √(1 − x))/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["−1/9", "1/9", "0", "−1/3", "Não existe"];
    return {
      d: "media",
      e: "Qual é o limite de (1/x − 1/3)/(x − 3) quando x tende a 3?",
      o,
      x: "Reduzindo ao mesmo denominador: 1/x − 1/3 = (3 − x)/(3x) = −(x − 3)/(3x). Dividindo por (x − 3), sobra −1/(3x), que em x = 3 vale −1/9. É a derivada de 1/x em x = 3, igual a −1/x².\n\n1/9 perde o sinal que aparece ao escrever 3 − x como −(x − 3). 0 toma o numerador nulo como resultado. −1/3 esquece um dos fatores 3 do denominador 3x. E o limite existe: a indeterminação desaparece ao simplificar.",
      v: { i: () => qualLim(lim("(1/x − 1/3)/(x − 3)", 3), o) },
    };
  })(),
  (() => {
    const o = ["2", "0", "1", "e", "Não existe"];
    return {
      d: "media",
      e: "A expressão (eˣ − e^(−x))/x não está definida em x = 0. De que valor ela se aproxima quando x tende a 0?",
      o,
      x: "Separando: (eˣ − e^(−x))/x = (eˣ − 1)/x + (1 − e^(−x))/x. O primeiro termo tende a 1 (limite fundamental). O segundo é (e^(−x) − 1)/(−x), que também tende a 1, com u = −x. A soma tende a 2.\n\n0 toma o numerador nulo como resultado. 1 considera só uma das parcelas. e substitui x por 1. E o limite existe: é a soma de dois limites fundamentais.",
      v: { i: () => qualLim(lim("(eˣ − e^(−x))/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["ln 3", "3", "1", "0", "log 3"];
    return {
      d: "media",
      e: "Qual é o limite de (3ˣ − 1)/x quando x tende a 0?",
      o,
      x: "Como 3ˣ = e^(x ln 3), a expressão fica (e^(x ln 3) − 1)/x = ln 3 · (eᵘ − 1)/u, com u = x ln 3. Quando x tende a 0, u também tende, e o fator (eᵘ − 1)/u tende a 1. O limite é ln 3 ≅ 1,10. Em geral, (aˣ − 1)/x tende a ln a.\n\n3 toma a base como resultado. 1 é o limite para a base e, e não para a base 3. 0 toma o numerador nulo como resultado. E log 3, na base 10, vale cerca de 0,48: o logaritmo que aparece é o natural.",
      v: { i: () => qualLim(lim("(3^x − 1)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["2", "1/2", "1", "0", "Não existe"];
    return {
      d: "media",
      e: "Para x tendendo a 0, de que valor se aproxima x/sen(x/2)?",
      o,
      x: "Escrevendo x/sen(x/2) = 2 · (x/2)/sen(x/2), o fator (x/2)/sen(x/2) é o inverso do limite fundamental, com u = x/2, e tende a 1. O limite é 2 · 1 = 2: para x pequeno, sen(x/2) ≅ x/2, e x dividido por x/2 dá 2.\n\n1/2 inverte o fator, como se a fração fosse sen(x/2)/x. 1 aplica o limite fundamental sem ajustar o argumento. 0 toma o seno nulo como se estivesse no numerador. E o limite existe: é o inverso do limite fundamental, multiplicado por 2.",
      v: { i: () => qualLim(lim("x/sen(x/2)", 0), o) },
    };
  })(),
  (() => {
    const o = ["−2", "2", "0", "1", "Não existe"];
    return {
      d: "media",
      e: "Qual é o valor do limite de (x² − 1)/(x² − 3x + 2) quando x tende a 1?",
      o,
      x: "A substituição dá 0/0. Fatorando: x² − 1 = (x − 1)(x + 1) e x² − 3x + 2 = (x − 1)(x − 2). Cancelando (x − 1), sobra (x + 1)/(x − 2), que em x = 1 vale 2/(−1) = −2.\n\n2 perde o sinal do denominador x − 2, que é negativo em x = 1. 0 toma o numerador nulo como resultado. 1 é o ponto, e não o limite. E o limite existe: o fator comum se cancela.",
      v: { i: () => qualLim(lim("(x² − 1)/(x² − 3x + 2)", 1), o) },
    };
  })(),
  (() => {
    const o = ["0", "1", "−1", "1/2", "Não existe"];
    return {
      d: "media",
      e: "Quando x tende a π/2, de que valor se aproxima (1 − sen x)/cos x?",
      o,
      x: "A substituição dá 0/0. Multiplicando numerador e denominador por 1 + sen x: (1 − sen²x)/[cos x (1 + sen x)] = cos²x/[cos x (1 + sen x)] = cos x/(1 + sen x). Em x = π/2, isso vale 0/2 = 0.\n\n1 supõe que numerador e denominador se cancelem por inteiro. −1 erra o sinal ao usar a identidade. 1/2 é o valor de 1/(1 + sen x), sem o fator cos x. E o limite existe: depois da simplificação, a expressão é contínua em π/2.",
      v: { i: () => qualLim(lim("(1 − sen x)/cos x", Math.PI / 2), o) },
    };
  })(),
  (() => {
    const o = ["6", "0", "3", "1/6", "Não existe"];
    return {
      d: "media",
      e: "Qual é o limite de x/(√(x + 9) − 3) para x tendendo a 0?",
      o,
      x: "A substituição dá 0/0. Multiplicando pelo conjugado do denominador, √(x + 9) + 3: o denominador vira (x + 9) − 9 = x, e a expressão fica x(√(x + 9) + 3)/x = √(x + 9) + 3. Em x = 0: 3 + 3 = 6.\n\n0 toma o numerador nulo como resultado. 3 esquece uma das parcelas do conjugado. 1/6 inverte o resultado, como se o conjugado tivesse ido para o denominador. E o limite existe: a racionalização elimina a indeterminação.",
      v: { i: () => qualLim(lim("x/(√(x + 9) − 3)", 0), o) },
    };
  })(),
  (() => {
    const o = ["2", "1", "0", "1/2", "Não existe"];
    return {
      d: "media",
      e: "Separando a fração em duas parcelas, calcule o limite de (x + sen x)/x quando x tende a 0. Qual é o resultado?",
      o,
      x: "Separando a fração: (x + sen x)/x = 1 + sen x/x. O primeiro termo é 1, e o segundo tende a 1 pelo limite fundamental. O limite é 1 + 1 = 2. Separar a fração em parcelas mais simples é, muitas vezes, o caminho mais curto.\n\n1 esquece uma das parcelas. 0 toma o numerador nulo como resultado. 1/2 inverte o resultado. E o limite existe: é a soma de uma constante com o limite fundamental.",
      v: { i: () => qualLim(lim("(x + sen x)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["a = 1", "a = 2", "a = 0", "a = −1", "Para nenhum valor de a"];
    return {
      d: "media",
      e: "A função f vale x² + a para x < 1 e 3x − 1 para x ≥ 1. Para que valor da constante a existe o limite de f(x) quando x tende a 1?",
      o,
      x: "Pela esquerda, f(x) = x² + a tende a 1 + a; pela direita, f(x) = 3x − 1 tende a 2. O limite existe quando os dois lados concordam: 1 + a = 2, e a = 1.\n\na = 2 iguala a ao valor da direita, esquecendo o 1 que vem de x². a = 0 supõe que o trecho x² já tenda a 2. a = −1 erra o sinal ao isolar a. E existe, sim, um valor de a: basta que os dois lados tendam ao mesmo número.",
      v: { i: () => { const L = (a) => limite((x) => (x < 1 ? x * x + a : 3 * x - 1), 1); return unicoV(o.map((t) => (/^Para nenhum/.test(t) ? false : Number.isFinite(L(num(t)))))); } },
    };
  })(),
  (() => {
    const o = ["2a", "a", "0", "a²", "2"];
    return {
      d: "media",
      e: "Sendo a uma constante, qual é o limite de (x² − a²)/(x − a) quando x tende a a?",
      o,
      x: "A substituição dá 0/0. Como x² − a² = (x − a)(x + a), a expressão é igual a x + a para x ≠ a, e o limite é a + a = 2a. Com a = 3, por exemplo, o limite de (x² − 9)/(x − 3) é 6. O resultado depende de a, e a conta vale para qualquer valor da constante.\n\na fica só com o x do fator x + a. 0 toma o numerador nulo como resultado. a² é o valor de x² no ponto. E 2 é o resultado para a = 1, e não para um a qualquer.",
      /* com a = 1,7 (valor qualquer): limite numérico e alternativas avaliadas nesse a */
      v: { i: () => { const a = 1.7, L = limite((x) => (x * x - a * a) / (x - a), a); return unicoV(o.map((t) => Math.abs(lerF(t.replace(/a/g, "(1.7)"))(0) - L) < 1e-6)); } },
    };
  })(),
  (() => {
    const o = ["e", "1", "Não existe", "e²", "1/e"];
    return {
      d: "media",
      e: "Qual é o limite de (1 + x)^(1/x) quando x tende a 0?",
      o,
      x: "É um dos limites fundamentais, e ele define o número e: (1 + x)^(1/x) tende a e ≅ 2,718 quando x tende a 0. A base tende a 1, mas o expoente cresce sem limite, e o resultado não é nem 1 nem infinito. Com x = 0,001, por exemplo, a expressão vale cerca de 2,7169.\n\n1 supõe que 1 elevado a qualquer coisa dê 1, o que não vale quando o expoente também varia. “Não existe” supõe que a indeterminação do tipo 1^∞ não tenha solução. e² seria o limite de (1 + 2x)^(1/x). E 1/e seria o de (1 − x)^(1/x).",
      v: { i: () => qualLim(lim("(1 + x)^(1/x)", 0), o) },
    };
  })(),
  (() => {
    const o = ["e³", "e", "3e", "1", "e^(1/3)"];
    return {
      d: "media",
      e: "De que valor se aproxima (1 + 3x)^(1/x) quando x tende a 0?",
      o,
      x: "Escrevendo (1 + 3x)^(1/x) = [(1 + 3x)^(1/(3x))]³, a base entre colchetes tem a forma (1 + u)^(1/u), com u = 3x tendendo a 0, e tende a e. O limite é e³ ≅ 20,1. A estratégia é sempre reescrever a expressão na forma (1 + u)^(1/u), ajustando o expoente.\n\ne ignora o 3, como se a expressão fosse (1 + x)^(1/x). 3e multiplica em vez de elevar. 1 supõe que 1 elevado a qualquer coisa dê 1. E e^(1/3) inverte o expoente.",
      v: { i: () => qualLim(lim("(1 + 3x)^(1/x)", 0), o) },
    };
  })(),
  (() => {
    const o = ["5", "1", "0", "ln 5", "1/5"];
    return {
      d: "media",
      e: "Qual é o valor de lim ln(1 + 5x)/x para x tendendo a 0?",
      o,
      x: "Com u = 5x: ln(1 + 5x)/x = 5 · ln(1 + u)/u, e ln(1 + u)/u tende a 1 quando u tende a 0 (outro limite fundamental, equivalente a (eᵘ − 1)/u → 1). O limite é 5. Para x pequeno, ln(1 + 5x) ≅ 5x, e a razão fica próxima de 5.\n\n1 aplica o limite fundamental sem ajustar o argumento. 0 toma o numerador nulo como resultado. ln 5 aplica o logaritmo ao coeficiente. E 1/5 inverte o fator.",
      v: { i: () => qualLim(lim("ln(1 + 5x)/x", 0), o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "e", "−1", "Não existe"];
    return {
      d: "media",
      e: "Perto de x = 1, a razão (x − 1)/ln x se aproxima de que valor?",
      o,
      x: "Com u = x − 1, que tende a 0: (x − 1)/ln x = u/ln(1 + u), que é o inverso de ln(1 + u)/u. Como este tende a 1, o limite também é 1. Perto de x = 1, ln x ≅ x − 1, e a razão fica próxima de 1.\n\n0 toma o numerador nulo como resultado. e é a base do logaritmo, e não o limite. −1 erra o sinal. E o limite existe: a indeterminação 0/0 é resolvida pelo limite fundamental do logaritmo.",
      v: { i: () => qualLim(lim("(x − 1)/ln x", 1), o) },
    };
  })(),
  (() => {
    const o = ["−1/4", "1/4", "0", "−1", "Não existe"];
    return {
      d: "media",
      e: "Qual é o limite do quociente (x² − 5x + 6)/(x² − 4) quando x tende a 2?",
      o,
      x: "A substituição dá 0/0. Fatorando: x² − 5x + 6 = (x − 2)(x − 3) e x² − 4 = (x − 2)(x + 2). Cancelando (x − 2), sobra (x − 3)/(x + 2), que em x = 2 vale −1/4. Como o fator (x − 2) aparece em cima e embaixo, é ele que causa a indeterminação.\n\n1/4 perde o sinal de x − 3, negativo em x = 2. 0 toma o numerador nulo como resultado. −1 calcula só o numerador simplificado. E o limite existe: o fator comum se cancela.",
      v: { i: () => qualLim(lim("(x² − 5x + 6)/(x² − 4)", 2), o) },
    };
  })(),
  (() => {
    const o = ["0", "1", "−1", "1/2", "Não existe"];
    return {
      d: "media",
      e: "Quanto vale o limite de (cos x − 1)/sen x, com x se aproximando de 0?",
      o,
      x: "Dividindo numerador e denominador por x: (cos x − 1)/sen x = [(cos x − 1)/x]/[sen x/x]. O numerador tende a 0 (o limite de (1 − cos x)/x é 0), e o denominador tende a 1. O limite é 0/1 = 0.\n\n1 e −1 supõem que o numerador se comporte como x perto de 0, o que não acontece: 1 − cos x é da ordem de x²/2. 1/2 é o limite de (1 − cos x)/x², que tem outro denominador. E o limite existe: é um quociente de dois limites finitos, com denominador não nulo.",
      v: { i: () => qualLim(lim("(cos x − 1)/sen x", 0), o) },
    };
  })(),
  (() => {
    const o = ["1/12", "1/4", "0", "1/3", "12"];
    return {
      d: "media",
      e: "Qual é o valor do limite de (∛x − 2)/(x − 8) quando x tende a 8?",
      o,
      x: "Com u = ∛x, que tende a 2, temos x = u³, e x − 8 = u³ − 8 = (u − 2)(u² + 2u + 4). A expressão fica (u − 2)/[(u − 2)(u² + 2u + 4)] = 1/(u² + 2u + 4), que em u = 2 vale 1/12.\n\n1/4 usa só o termo u² do fator. 0 toma o numerador nulo como resultado. 1/3 é o coeficiente da derivada de x^(1/3), sem o fator x^(−2/3), que em x = 8 vale 1/4. E 12 inverte o resultado.",
      v: { i: () => qualLim(limite((x) => (Math.cbrt(x) - 2) / (x - 8), 8), o) },
    };
  })(),
  (() => {
    const o = ["2", "0", "1", "Nenhum, porque o denominador se anula", "−1"];
    return {
      d: "media",
      e: "A função f(x) = (x² − 1)/(x − 1) não está definida em x = 1. Que valor deve ser atribuído a f(1) para que f fique contínua nesse ponto?",
      o,
      x: "Para que f fique contínua em 1, o valor atribuído precisa ser o limite de f(x) quando x tende a 1. Como (x² − 1)/(x − 1) = x + 1 para x ≠ 1, o limite é 2. Definindo f(1) = 2, o gráfico, que é a reta y = x + 1 com um buraco no ponto (1, 2), fica completo.\n\n0 toma o numerador nulo como resultado. 1 é o próprio ponto. “Nenhum” supõe que a divisão por zero impeça o limite, mas ela só impede o cálculo direto. E −1 é o outro zero do numerador, que não tem relação com o valor em x = 1.",
      v: { i: () => qualLim(lim("(x² − 1)/(x − 1)", 1), o.map((t) => (/^Nenhum/.test(t) ? "Não existe" : t))) },
    };
  })(),
  (() => {
    const o = ["Não existe, porque os limites laterais são −1 e 1", "Vale 0", "Vale 1", "Vale −1", "Não existe, porque a função não está definida em 0"];
    return {
      d: "media",
      e: "O que se pode dizer do limite de x/|x| quando x tende a 0?",
      o,
      x: "Para x > 0, |x| = x, e x/|x| = 1; para x < 0, |x| = −x, e x/|x| = −1. Pela direita, a função tende a 1; pela esquerda, a −1. Como os limites laterais são diferentes, o limite não existe.\n\n0 é a média dos dois valores, e não um limite. 1 considera só a direita, e −1, só a esquerda. E não estar definida em 0 não é o motivo: (x² − 1)/(x − 1) também não está definida em 1 e tem limite ali. O que impede o limite é a diferença entre os lados.",
      v: { i: () => { const f = lerF("x/|x|"), d = limite(f, 0, 1), e = limite(f, 0, -1); return unicoV(o.map((t, i) => i === (Math.abs(d - e) > 1e-6 ? 0 : 1))); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["−1/6", "1/6", "0", "−1", "Não existe"];
    return {
      d: "dificil",
      e: "Qual é o limite de (sen x − x)/x³ quando x tende a 0?",
      o,
      x: "Os limites fundamentais não bastam aqui: sen x − x é muito menor que x. Usando a expansão sen x = x − x³/6 + x⁵/120 − …, o numerador fica −x³/6 + x⁵/120 − … e, dividido por x³, dá −1/6 + x²/120 − …, que tende a −1/6. Pela regra de L'Hôpital, aplicada três vezes, chega-se ao mesmo resultado: −cos x/6 → −1/6.\n\n1/6 perde o sinal do termo −x³/6. 0 supõe que sen x − x se anule mais depressa que x³. −1 usa sen x ≅ x − x³, esquecendo o fatorial 3! = 6 da expansão. E o limite existe: o numerador é da mesma ordem que x³.",
      v: { i: () => qualLim(lim("(sen x − x)/x³", 0), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "0", "1/6", "1", "−1/2"];
    return {
      d: "dificil",
      e: "Qual é o valor de lim (tg x − sen x)/x³ para x tendendo a 0?",
      o,
      x: "Colocando sen x em evidência: tg x − sen x = sen x (1/cos x − 1) = sen x (1 − cos x)/cos x. Então (tg x − sen x)/x³ = (sen x/x) · [(1 − cos x)/x²] · (1/cos x). Os três fatores tendem a 1, 1/2 e 1: o limite é 1/2.\n\n0 supõe que tg x e sen x sejam iguais perto de 0 até a terceira ordem, e eles não são: tg x ≅ x + x³/3 e sen x ≅ x − x³/6. 1/6 usa só a correção do seno. 1 esquece o fator 1/2 de (1 − cos x)/x². E −1/2 erra o sinal da diferença.",
      v: { i: () => qualLim(lim("(tg x − sen x)/x³", 0), o) },
    };
  })(),
  (() => {
    const o = ["10", "1", "0", "9", "Não existe"];
    return {
      d: "dificil",
      e: "Qual é o limite de (x¹⁰ − 1)/(x − 1) quando x tende a 1?",
      o,
      x: "Pela fatoração x¹⁰ − 1 = (x − 1)(x⁹ + x⁸ + … + x + 1), a expressão é igual à soma x⁹ + x⁸ + … + 1, com 10 parcelas, para x ≠ 1. Em x = 1, cada parcela vale 1, e o limite é 10. Em geral, (xⁿ − 1)/(x − 1) tende a n: é a derivada de xⁿ em x = 1.\n\n1 conta uma parcela só. 0 toma o numerador nulo como resultado. 9 conta as parcelas de x⁹ a x, esquecendo o termo constante 1. E o limite existe: a indeterminação 0/0 some com a fatoração.",
      v: { i: () => qualLim(lim("(x¹⁰ − 1)/(x − 1)", 1), o) },
    };
  })(),
  (() => {
    const o = ["−1/8", "1/8", "0", "−1/4", "1/2"];
    return {
      d: "dificil",
      e: "Qual é o limite de [√(1 + x) − 1 − x/2]/x² quando x tende a 0?",
      o,
      x: "Multiplicando e dividindo pelo conjugado de √(1 + x) − (1 + x/2): o numerador vira (1 + x) − (1 + x/2)² = 1 + x − 1 − x − x²/4 = −x²/4. A expressão fica −(x²/4)/[x²(√(1 + x) + 1 + x/2)] = −1/[4(√(1 + x) + 1 + x/2)], que em x = 0 vale −1/(4 · 2) = −1/8. É o coeficiente de x² na expansão √(1 + x) = 1 + x/2 − x²/8 + …\n\n1/8 perde o sinal. 0 supõe que a aproximação 1 + x/2 seja exata até a segunda ordem. −1/4 esquece de dividir pela soma 1 + 1 que vem do conjugado. E 1/2 é o coeficiente de x, e não o de x².",
      v: { i: () => qualLim(lim("(√(1 + x) − 1 − x/2)/x²", 0), o) },
    };
  })(),
  (() => {
    const o = ["2", "1", "4", "0", "1/2"];
    return {
      d: "dificil",
      e: "Qual é o limite de (1 − cos 2x)/(x · sen x) quando x tende a 0?",
      o,
      x: "Pela identidade 1 − cos 2x = 2 sen²x, a expressão fica 2 sen²x/(x sen x) = 2 sen x/x, que tende a 2. Por outro caminho: 1 − cos 2x ≅ (2x)²/2 = 2x² e x sen x ≅ x², com razão 2. Nos dois caminhos, o essencial é que numerador e denominador são da mesma ordem, x².\n\n1 esquece o fator 2 da identidade. 4 usa (2x)² sem dividir por 2. 0 toma o numerador nulo como resultado. E 1/2 é o limite de (1 − cos x)/x², com o arco simples.",
      v: { i: () => qualLim(lim("(1 − cos 2x)/(x · sen x)", 0), o) },
    };
  })(),
  (() => {
    const o = ["a = 4 e b = 4", "a = 2 e b = 4", "a = 4 e b = 2", "a = 1 e b = 4", "a = 8 e b = 16"];
    return {
      d: "dificil",
      e: "Para que valores das constantes a e b o limite de (√(ax + b) − 2)/x, quando x tende a 0, existe e vale 1?",
      o,
      x: "O denominador tende a 0; para o limite ser finito, o numerador também precisa tender a 0: √b − 2 = 0, e b = 4. Com b = 4, racionalizando: (ax + 4 − 4)/[x(√(ax + 4) + 2)] = a/(√(ax + 4) + 2), que tende a a/4. Para valer 1, a = 4.\n\na = 2 e b = 4 dá limite 1/2. a = 4 e b = 2 não anula o numerador, e o limite não existe. a = 1 e b = 4 dá 1/4. E a = 8 e b = 16 faz o numerador tender a √16 − 2 = 2, e o limite também não existe.",
      /* limite numérico para cada par (a, b) das alternativas */
      v: { i: () => unicoV(o.map((t) => { const [, a, b] = t.match(/^a = (\d+) e b = (\d+)$/).map(Number); const L = limite((x) => (Math.sqrt(a * x + b) - 2) / x, 0); return Number.isFinite(L) && Math.abs(L - 1) < 1e-6; })) },
    };
  })(),
  (() => {
    const o = ["1/2", "1", "0", "2", "Não existe"];
    return {
      d: "dificil",
      e: "Usando a expansão de eˣ ou a regra de L'Hôpital, determine o limite de (eˣ − 1 − x)/x² quando x se aproxima de 0. Qual é o valor?",
      o,
      x: "Pela expansão eˣ = 1 + x + x²/2 + x³/6 + …, o numerador é x²/2 + x³/6 + … e, dividido por x², fica 1/2 + x/6 + …, que tende a 1/2. Pela regra de L'Hôpital, aplicada duas vezes: (eˣ − 1)/(2x) e depois eˣ/2, que tende a 1/2.\n\n1 usa o limite fundamental (eˣ − 1)/x no lugar do de segunda ordem. 0 supõe que 1 + x aproxime eˣ exatamente até a segunda ordem. 2 inverte o fator 1/2. E o limite existe: o numerador é da mesma ordem que x².",
      v: { i: () => qualLim(lim("(eˣ − 1 − x)/x²", 0), o) },
    };
  })(),
  (() => {
    const o = ["√2", "0", "1", "√2/2", "2"];
    return {
      d: "dificil",
      e: "Qual é o limite de (sen x − cos x)/(x − π/4) quando x tende a π/4?",
      o,
      x: "Como sen(π/4) = cos(π/4), a substituição dá 0/0. O limite é a derivada de g(x) = sen x − cos x em x = π/4: g'(x) = cos x + sen x, e g'(π/4) = √2/2 + √2/2 = √2. Outro caminho: sen x − cos x = √2 sen(x − π/4), e √2 sen(u)/u tende a √2, com u = x − π/4.\n\n0 toma o numerador nulo como resultado. 1 aplica o limite fundamental sem o fator √2. √2/2 usa uma só das parcelas da derivada. E 2 soma os valores como se cada parcela valesse 1.",
      v: { i: () => qualLim(lim("(sen x − cos x)/(x − π/4)", Math.PI / 4), o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "Não existe", "e", "1/e"];
    return {
      d: "dificil",
      e: "Qual é o limite de xˣ quando x tende a 0 pela direita?",
      o,
      x: "Escrevendo xˣ = e^(x ln x), basta estudar x ln x. Quando x tende a 0 pela direita, ln x tende a −∞, mas x tende a 0 mais depressa: x ln x tende a 0 (por L'Hôpital, ln x/(1/x) leva a (1/x)/(−1/x²) = −x → 0). Então xˣ tende a e⁰ = 1. Com x = 0,001, xˣ ≅ 0,993.\n\n0 supõe que a base zero domine, como se fosse 0 elevado a uma constante positiva. “Não existe” supõe que a indeterminação 0⁰ não tenha solução. E e e 1/e seriam os resultados se x ln x tendesse a 1 ou a −1.",
      /* valores em pontos cada vez menores: aproximação monótona de 1 */
      v: { i: () => { const v = [1e-3, 1e-6, 1e-9, 1e-12].map((x) => x ** x); const aproxima = v.every((y, k) => k === 0 || Math.abs(1 - y) < Math.abs(1 - v[k - 1])) && Math.abs(1 - v[3]) < 1e-9; return qualLim(aproxima ? 1 : NaN, o); } },
    };
  })(),
  (() => {
    const o = ["1", "0", "sen 1", "2", "Não existe, porque o seno composto oscila perto de 0"];
    return {
      d: "dificil",
      e: "Qual é o limite de sen(sen x)/x quando x tende a 0?",
      o,
      x: "Escrevendo sen(sen x)/x = [sen(sen x)/sen x] · [sen x/x]: com u = sen x, que tende a 0, o primeiro fator é sen(u)/u e tende a 1; o segundo também tende a 1. O limite é 1 · 1 = 1: perto de 0, sen x ≅ x, e sen(sen x) ≅ sen x ≅ x.\n\n0 toma o numerador nulo como resultado. sen 1 põe o valor do limite interno, sen x/x → 1, dentro do seno de fora. 2 soma os dois limites fundamentais em vez de multiplicá-los. E o seno composto não oscila perto de 0: sen x é pequeno ali, e sen(sen x) também.",
      v: { i: () => qualLim(lim("sen(sen x)/x", 0), o) },
    };
  })(),
];
