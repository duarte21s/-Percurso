/* Rascunho — Cálculo I / Regras de derivação.

   A explicação aplica as regras (potência, soma, produto, quociente,
   derivadas das funções elementares); a conferência não usa nenhuma
   delas: calcula a derivada numericamente, por diferenças centrais com
   extrapolação de Richardson, em vários pontos, e a compara com a
   alternativa lida como função. Valores num ponto, retas tangentes e
   parâmetros saem da mesma derivada numérica. */

import { unicoV, lerF, derivada, mesmaFuncao, zeros, bissecao } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Regras de derivação";
export const arquivo = "calculo__regras-de-derivacao";

const num = (t) => { const s = String(t).trim().replace(/^[a-zA-Z]\s*=\s*/, ""); if (/x/.test(s)) throw new Error("não é número"); return lerF(s)(0); };
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = num(t); } catch { return false; } return Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); }));
/* derivada numérica de f como função */
const d = (f) => (x) => derivada(f, x);
/* índice da alternativa que coincide com a derivada de f */
const qualDerivada = (f, alt, pontos) => unicoV(alt.map((t) => { try { return mesmaFuncao(d(f), lerF(t), pontos); } catch { return false; } }));
const qualReta = (g, alt) => unicoV(alt.map((t) => { const m = t.match(/^y = (.+)$/); if (!m) return false; try { return mesmaFuncao(g, lerF(m[1])); } catch { return false; } }));
/* aritmética complexa mínima e derivada de ordem n pela fórmula integral de
   Cauchy (regra do trapézio no círculo |z − x₀| = r): não deriva símbolo algum */
const cmul = ([p, q], [r, s]) => [p * r - q * s, p * s + q * r];
const cexp = ([p, q]) => [Math.exp(p) * Math.cos(q), Math.exp(p) * Math.sin(q)];
const cauchy = (fz, x0, n, r = 1, N = 64) => { let s = 0; for (let k = 0; k < N; k++) { const t = (2 * Math.PI * k) / N, [re, im] = fz([x0 + r * Math.cos(t), r * Math.sin(t)]); s += re * Math.cos(n * t) + im * Math.sin(n * t); } let fat = 1; for (let j = 2; j <= n; j++) fat *= j; return (fat * s) / (N * r ** n); };

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["15x²", "5x²", "15x³", "3x²", "5x⁴/4"];
    return {
      d: "facil",
      e: "Pela regra da potência, qual é a derivada da função f(x) = 5x³?",
      o,
      x: "Pela regra da potência, a derivada de xⁿ é n · xⁿ⁻¹, e a constante multiplicativa se mantém: (5x³)' = 5 · 3x² = 15x². O expoente desce multiplicando e diminui uma unidade.\n\n5x² diminui o expoente, mas esquece de multiplicar por ele. 15x³ multiplica pelo expoente, mas esquece de diminuí-lo. 3x² deriva x³ e perde a constante 5. E 5x⁴/4 é uma primitiva de 5x³, o caminho inverso da derivada.",
      v: { i: () => qualDerivada(lerF("5x³"), o) },
    };
  })(),
  (() => {
    const o = ["4x³ − 6x + 2", "4x³ − 6x − 5", "4x³ − 3x + 2", "x³ − 6x + 2", "4x³ − 6x"];
    return {
      d: "facil",
      e: "Qual é a derivada de f(x) = x⁴ − 3x² + 2x − 7?",
      o,
      x: "A derivada de uma soma é a soma das derivadas, termo a termo: (x⁴)' = 4x³; (−3x²)' = −6x; (2x)' = 2; e a constante −7 tem derivada 0. O resultado é 4x³ − 6x + 2.\n\n4x³ − 6x − 5 mantém a constante −7, somada ao 2, em vez de anulá-la. 4x³ − 3x + 2 esquece de multiplicar −3 pelo expoente 2. x³ − 6x + 2 esquece de multiplicar x³ pelo expoente 4. E 4x³ − 6x esquece a derivada do termo 2x, que é 2.",
      v: { i: () => qualDerivada(lerF("x⁴ − 3x² + 2x − 7"), o) },
    };
  })(),
  (() => {
    const o = ["−1/x²", "1/x²", "ln x", "−1/x", "0"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = 1/x, para x ≠ 0?",
      o,
      x: "Escrevendo 1/x = x⁻¹ e aplicando a regra da potência: (x⁻¹)' = −1 · x⁻² = −1/x². O sinal negativo mostra que a função é decrescente em cada um dos intervalos do seu domínio.\n\n1/x² esquece o sinal que vem do expoente −1. ln x é uma primitiva de 1/x, e não a sua derivada. −1/x esquece de diminuir o expoente. E 0 trata 1/x como se fosse constante, só porque o numerador é constante.",
      v: { i: () => qualDerivada(lerF("1/x"), o) },
    };
  })(),
  (() => {
    const o = ["1/(2√x)", "2√x", "√x/2", "1/√x", "(2/3)x^(3/2)"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = √x, para x > 0?",
      o,
      x: "Com √x = x^(1/2), a regra da potência dá (1/2) · x^(1/2 − 1) = (1/2) · x^(−1/2) = 1/(2√x). A derivada fica cada vez menor à medida que x cresce: o gráfico da raiz vai ficando mais plano.\n\n2√x é, a menos de constante, uma primitiva de 1/√x, e não a derivada de √x. √x/2 multiplica pelo expoente, mas não o diminui. 1/√x esquece o fator 1/2. E (2/3)x^(3/2) é uma primitiva de √x.",
      v: { i: () => qualDerivada(lerF("√x"), o) },
    };
  })(),
  (() => {
    const o = ["3eˣ + 2x", "3x · e^(x − 1) + 2x", "eˣ + 2x", "3eˣ + x", "3eˣ + 2"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = 3eˣ + x²?",
      o,
      x: "A exponencial eˣ é a própria derivada: (eˣ)' = eˣ, e a constante 3 se mantém. A derivada de x² é 2x. Então f'(x) = 3eˣ + 2x. A exponencial de base e é a única função (além da nula) igual à própria derivada.\n\n3x · e^(x − 1) aplica a regra da potência à exponencial, como se x fosse a base; ali x é o expoente. eˣ + 2x perde a constante 3. 3eˣ + x esquece o fator 2 da derivada de x². E 3eˣ + 2 deriva x² como se fosse 2x.",
      v: { i: () => qualDerivada(lerF("3eˣ + x²"), o) },
    };
  })(),
  (() => {
    const o = ["2/x − 5", "2/x", "2 ln x − 5", "1/(2x) − 5", "2x − 5"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = 2 ln x − 5x, para x > 0?",
      o,
      x: "A derivada do logaritmo natural é (ln x)' = 1/x, e a constante 2 se mantém: (2 ln x)' = 2/x. A derivada de −5x é −5. Então f'(x) = 2/x − 5, válida no domínio do logaritmo, x > 0.\n\n2/x esquece a derivada do termo −5x. 2 ln x − 5 deriva só o termo linear, deixando o logaritmo como estava. 1/(2x) − 5 divide por 2 em vez de multiplicar. E 2x − 5 troca 1/x por x.",
      v: { i: () => qualDerivada(lerF("2 ln x − 5x"), o, [0.41, 1.13, 1.7, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["cos x − sen x", "cos x + sen x", "−cos x + sen x", "sen x − cos x", "−cos x − sen x"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = sen x + cos x?",
      o,
      x: "As derivadas básicas são (sen x)' = cos x e (cos x)' = −sen x. Somando: f'(x) = cos x − sen x. O sinal negativo aparece na derivada do cosseno, e não na do seno.\n\ncos x + sen x esquece o sinal da derivada do cosseno. −cos x + sen x troca os sinais das duas derivadas. sen x − cos x é o simétrico da resposta. E −cos x − sen x é a segunda derivada, e não a primeira.",
      v: { i: () => qualDerivada(lerF("sen x + cos x"), o) },
    };
  })(),
  (() => {
    const o = ["π", "3π", "π² + π", "0", "2π"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = π² + πx, em que π é a constante 3,14159…?",
      o,
      x: "π e π² são números, e não variáveis. A derivada da constante π² é 0, e a de πx é π, porque πx é uma reta de inclinação π. Então f'(x) = π.\n\n3π deriva π² como se π fosse a variável, obtendo 2π, e soma o π. π² + π mantém a constante em vez de anulá-la. 0 trata o termo πx também como constante. E 2π é a derivada de π² feita como se π fosse a variável.",
      v: { i: () => qualDerivada(lerF("π² + π · x"), o.map((t) => t)) },
    };
  })(),
  (() => {
    const o = ["10", "4", "12", "8", "6"];
    return {
      d: "facil",
      e: "Para f(x) = x³ − 2x, qual é o valor da derivada no ponto x = 2?",
      o,
      x: "Pela regra da potência, f'(x) = 3x² − 2. Em x = 2: f'(2) = 3 · 4 − 2 = 12 − 2 = 10. É a inclinação da reta tangente ao gráfico no ponto (2, 4): nesse ponto, a função cresce 10 vezes mais depressa que x.\n\n4 é o valor da função, f(2) = 8 − 4. 12 esquece a derivada do termo −2x. 8 é o valor de x³ em x = 2, sem derivar. E 6 usa 3x no lugar de 3x², calculando 3 · 2 = 6.",
      v: { i: () => qual(derivada(lerF("x³ − 2x"), 2), o) },
    };
  })(),
  (() => {
    const o = ["12x²", "4x³", "12x³", "24x", "4x²"];
    return {
      d: "facil",
      e: "Qual é a derivada segunda da função f(x) = x⁴?",
      o,
      x: "A derivada segunda é a derivada da derivada. Primeiro, f'(x) = 4x³; depois, f''(x) = 4 · 3x² = 12x². Em cada derivação, o expoente desce multiplicando e diminui uma unidade.\n\n4x³ é a derivada primeira. 12x³ multiplica pelos expoentes, mas diminui o expoente só uma vez. 24x é a derivada terceira. E 4x² diminui o expoente duas vezes, mas multiplica só pelo 4.",
      v: { i: () => qualDerivada(d(lerF("x⁴")), o) },
    };
  })(),
  (() => {
    const o = ["−3x⁻⁴", "−3x⁻²", "3x⁻⁴", "−x⁻⁴", "−3x⁻³"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = x⁻³, para x ≠ 0?",
      o,
      x: "A regra da potência vale também para expoentes negativos: (x⁻³)' = −3 · x⁻³⁻¹ = −3x⁻⁴. Diminuir uma unidade de um expoente negativo o deixa mais negativo: de −3 para −4.\n\n−3x⁻² diminui o expoente para o lado errado, de −3 para −2. 3x⁻⁴ esquece o sinal do expoente ao multiplicar. −x⁻⁴ esquece de multiplicar pelo 3. E −3x⁻³ multiplica pelo expoente, mas não o diminui.",
      v: { i: () => qualDerivada(lerF("x⁻³"), o) },
    };
  })(),
  (() => {
    const o = ["−6/x⁴", "2/(3x²)", "−6/x²", "6/x⁴", "−2/x⁴"];
    return {
      d: "facil",
      e: "Qual é a derivada da função f(x) = 2/x³, para x ≠ 0?",
      o,
      x: "Escrevendo 2/x³ = 2x⁻³: a derivada é 2 · (−3)x⁻⁴ = −6x⁻⁴ = −6/x⁴. Reescrever quocientes com uma potência no denominador como potências negativas evita a regra do quociente e reduz a chance de erro.\n\n2/(3x²) deriva só o denominador e ainda o inverte. −6/x² diminui o expoente para o lado errado. 6/x⁴ esquece o sinal. E −2/x⁴ esquece de multiplicar pelo 3 do expoente.",
      v: { i: () => qualDerivada(lerF("2/x³"), o) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["eˣ(x² + 2x)", "2x · eˣ", "x² · eˣ", "2x + eˣ", "eˣ(x² + 2)"];
    return {
      d: "media",
      e: "Aplicando a regra do produto, qual é a derivada de f(x) = x² · eˣ?",
      o,
      x: "Pela regra do produto, (u · v)' = u' · v + u · v'. Com u = x² e v = eˣ: u' = 2x e v' = eˣ, e f'(x) = 2x · eˣ + x² · eˣ = eˣ(x² + 2x). A derivada de um produto não é o produto das derivadas.\n\n2x · eˣ é o produto das derivadas, o erro mais comum. x² · eˣ é a própria função, como se só a exponencial fosse derivada e o x² ficasse intocado. 2x + eˣ soma as derivadas, como se fosse a derivada de uma soma. E eˣ(x² + 2) esquece o x no termo 2x.",
      v: { i: () => qualDerivada(lerF("x² · eˣ"), o) },
    };
  })(),
  (() => {
    const o = ["sen x + x · cos x", "cos x", "x · cos x", "sen x − x · cos x", "sen x · cos x"];
    return {
      d: "media",
      e: "Qual é a derivada de f(x) = x · sen x, obtida pela regra do produto?",
      o,
      x: "Com u = x e v = sen x: u' = 1 e v' = cos x. Pela regra do produto, f'(x) = 1 · sen x + x · cos x = sen x + x cos x. Em x = 0, por exemplo, f'(0) = 0: o gráfico de x sen x tem tangente horizontal na origem.\n\ncos x é o produto das derivadas, 1 · cos x. x cos x esquece a parcela u' · v = sen x. sen x − x cos x erra o sinal da derivada do seno. E sen x · cos x multiplica as funções de modo que não corresponde a regra nenhuma.",
      v: { i: () => qualDerivada(lerF("x · sen x"), o) },
    };
  })(),
  (() => {
    const o = ["1/(x + 1)²", "1", "−1/(x + 1)²", "x/(x + 1)²", "(2x + 1)/(x + 1)²"];
    return {
      d: "media",
      e: "Pela regra do quociente, qual é a derivada de f(x) = x/(x + 1), para x ≠ −1?",
      o,
      x: "Pela regra do quociente, (u/v)' = (u' · v − u · v')/v². Com u = x e v = x + 1: u' = 1 e v' = 1, e f'(x) = [1 · (x + 1) − x · 1]/(x + 1)² = 1/(x + 1)². A derivada é sempre positiva: a função é crescente em cada intervalo do domínio.\n\n1 divide a derivada do numerador pela do denominador, 1/1, o erro mais comum. −1/(x + 1)² inverte a ordem da subtração no numerador. x/(x + 1)² esquece a parcela u' · v. E (2x + 1)/(x + 1)² soma as parcelas em vez de subtrair.",
      v: { i: () => qualDerivada(lerF("x/(x + 1)"), o) },
    };
  })(),
  (() => {
    const o = ["1 − 1/x²", "2x", "1 + 1/x²", "1/x² − 1", "(x² − 1)/x"];
    return {
      d: "media",
      e: "Qual é a derivada de f(x) = (x² + 1)/x, para x ≠ 0?",
      o,
      x: "O caminho mais curto é separar a fração: (x² + 1)/x = x + x⁻¹, cuja derivada é 1 − x⁻² = 1 − 1/x². Pela regra do quociente dá o mesmo: [2x · x − (x² + 1) · 1]/x² = (x² − 1)/x² = 1 − 1/x².\n\n2x divide a derivada do numerador pela do denominador, 2x/1. 1 + 1/x² erra o sinal da derivada de x⁻¹. 1/x² − 1 inverte a ordem da subtração na regra do quociente. E (x² − 1)/x usa x no denominador, e não x².",
      v: { i: () => qualDerivada(lerF("(x² + 1)/x"), o) },
    };
  })(),
  (() => {
    const o = ["1/cos²x", "−1/sen²x", "1/cos x", "sen²x", "tg²x"];
    return {
      d: "media",
      e: "Escrevendo tg x = sen x/cos x e usando a regra do quociente, qual é a derivada da tangente?",
      o,
      x: "(sen x/cos x)' = [cos x · cos x − sen x · (−sen x)]/cos²x = (cos²x + sen²x)/cos²x = 1/cos²x, que também se escreve sec²x. Como é sempre positiva, a tangente é crescente em cada intervalo do seu domínio.\n\n−1/sen²x é a derivada da cotangente. 1/cos x esquece o quadrado do denominador. sen²x fica só com uma das parcelas do numerador. E tg²x esquece o 1 da identidade sec²x = 1 + tg²x.",
      v: { i: () => qualDerivada(lerF("tg x"), o) },
    };
  })(),
  (() => {
    const o = ["eˣ(sen x + cos x)", "eˣ · cos x", "eˣ(sen x − cos x)", "eˣ · sen x", "eˣ · cos x + sen x"];
    return {
      d: "media",
      e: "A função f(x) = eˣ · sen x é o produto de uma exponencial por um seno. Qual é a sua derivada?",
      o,
      x: "Pela regra do produto, com u = eˣ (u' = eˣ) e v = sen x (v' = cos x): f'(x) = eˣ · sen x + eˣ · cos x = eˣ(sen x + cos x). Em x = 0, f'(0) = 1: a tangente na origem tem inclinação 1.\n\neˣ · cos x é o produto das derivadas. eˣ(sen x − cos x) erra o sinal da derivada do seno. eˣ · sen x é a própria função, como se só a exponencial fosse derivada. E eˣ · cos x + sen x esquece o fator eˣ na segunda parcela.",
      v: { i: () => qualDerivada(lerF("eˣ · sen x"), o) },
    };
  })(),
  (() => {
    const o = ["ln x + 1", "1/x", "ln x", "1", "ln x + x"];
    return {
      d: "media",
      e: "Qual é a derivada de f(x) = x · ln x, para x > 0?",
      o,
      x: "Com u = x (u' = 1) e v = ln x (v' = 1/x), a regra do produto dá f'(x) = 1 · ln x + x · (1/x) = ln x + 1. A derivada se anula em x = 1/e, onde a função atinge o seu valor mínimo, −1/e.\n\n1/x é o produto das derivadas, 1 · (1/x). ln x esquece a parcela x · (1/x) = 1. 1 fica só com essa parcela. E ln x + x esquece de multiplicar x pela derivada do logaritmo.",
      v: { i: () => qualDerivada(lerF("x · ln x"), o, [0.41, 1.13, 1.7, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["y = −x + 3", "y = −x + 2", "y = x + 1", "y = 2", "y = −x"];
    return {
      d: "media",
      e: "No ponto de abscissa 1, o gráfico de f(x) = x³ − 2x² + 3 é tocado por uma reta tangente. Qual é a equação dessa reta?",
      o,
      x: "O ponto é (1, f(1)) = (1, 1 − 2 + 3) = (1, 2). A derivada é f'(x) = 3x² − 4x, e f'(1) = 3 − 4 = −1. A tangente é y − 2 = −1 · (x − 1), ou y = −x + 3. Confere: em x = 1, −1 + 3 = 2.\n\ny = −x + 2 usa a inclinação certa, mas passa por (1, 1), fora do gráfico. y = x + 1 erra o sinal da inclinação. y = 2 supõe tangente horizontal. E y = −x passa pela origem, e não por (1, 2).",
      v: { i: () => { const f = lerF("x³ − 2x² + 3"), m = derivada(f, 1); return qualReta((x) => f(1) + m * (x - 1), o); } },
    };
  })(),
  (() => {
    const o = ["−sen x", "sen x", "cos x", "−cos x", "10 sen x"];
    return {
      d: "media",
      e: "Derivando f(x) = sen x dez vezes seguidas, que função se obtém?",
      o,
      x: "As derivadas do seno se repetem em ciclos de quatro: sen x → cos x → −sen x → −cos x → sen x. A cada quatro derivações, volta-se ao seno. Como 10 = 4 · 2 + 2, a derivada de ordem 10 é igual à de ordem 2: −sen x.\n\nsen x é a derivada de ordem 8 (ou 4, ou 12). cos x é a de ordem 9 (resto 1). −cos x é a de ordem 11 (resto 3). E 10 sen x trata as derivações sucessivas como se multiplicassem a função pelo seu número.",
      /* derivações sucessivas feitas em código, pelo ciclo das derivadas numéricas das quatro funções do ciclo */
      v: { i: () => { const ciclo = ["sen x", "cos x", "−sen x", "−cos x"].map(lerF); for (let k = 0; k < 4; k++) if (!mesmaFuncao(d(ciclo[k]), ciclo[(k + 1) % 4])) throw new Error("ciclo"); return unicoV(o.map((t) => mesmaFuncao(ciclo[10 % 4], lerF(t)))); } },
    };
  })(),
  (() => {
    const o = ["eˣ(x − 1)/x²", "eˣ", "eˣ/x²", "eˣ(1 − x)/x²", "eˣ(x + 1)/x²"];
    return {
      d: "media",
      e: "Pela regra do quociente, qual é a derivada de f(x) = eˣ/x, para x ≠ 0?",
      o,
      x: "Com u = eˣ (u' = eˣ) e v = x (v' = 1): f'(x) = (eˣ · x − eˣ · 1)/x² = eˣ(x − 1)/x². A derivada se anula em x = 1, onde a função tem um mínimo local, f(1) = e. Para x > 1, a derivada é positiva, e a função cresce.\n\neˣ divide as derivadas, eˣ/1. eˣ/x² esquece a parcela u' · v. eˣ(1 − x)/x² inverte a ordem da subtração. E eˣ(x + 1)/x² soma as parcelas em vez de subtrair.",
      v: { i: () => qualDerivada(lerF("eˣ/x"), o) },
    };
  })(),
  (() => {
    const o = ["3x² − 4x + 1", "2x", "2x(x − 2)", "3x² − 4x − 1", "3x² + 1"];
    return {
      d: "media",
      e: "Qual é a derivada de f(x) = (x² + 1)(x − 2)?",
      o,
      x: "Pela regra do produto: (x² + 1)' · (x − 2) + (x² + 1) · (x − 2)' = 2x(x − 2) + (x² + 1) · 1 = 2x² − 4x + x² + 1 = 3x² − 4x + 1. Expandindo antes, f(x) = x³ − 2x² + x − 2, e a derivada é a mesma.\n\n2x é o produto das derivadas, 2x · 1. 2x(x − 2) fica só com a primeira parcela da regra do produto. 3x² − 4x − 1 erra o sinal do termo independente. E 3x² + 1 esquece o termo −4x, que vem de 2x · (−2).",
      v: { i: () => qualDerivada(lerF("(x² + 1)(x − 2)"), o) },
    };
  })(),
  (() => {
    const o = ["3ˣ · ln 3", "x · 3^(x − 1)", "3ˣ", "3ˣ/ln 3", "ln 3"];
    return {
      d: "media",
      e: "Qual é a derivada da função exponencial f(x) = 3ˣ?",
      o,
      x: "Escrevendo 3ˣ = e^(x ln 3), a derivada é e^(x ln 3) · ln 3 = 3ˣ · ln 3. Em geral, a derivada de uma exponencial de base b é bˣ · ln b; só para a base e o fator ln e = 1 desaparece.\n\nx · 3^(x − 1) aplica a regra da potência, que vale para xⁿ, com a variável na base, e não no expoente. 3ˣ esquece o fator ln 3, como se a base fosse e. 3ˣ/ln 3 é uma primitiva de 3ˣ. E ln 3 esquece o fator 3ˣ.",
      v: { i: () => qualDerivada(lerF("3ˣ"), o) },
    };
  })(),
  (() => {
    const o = ["1/(x · ln 2)", "1/x", "ln 2/x", "2/x", "1/(2x)"];
    return {
      d: "media",
      e: "Qual é a derivada do logaritmo na base 2, f(x) = log₂ x, para x > 0?",
      o,
      x: "Pela mudança de base, log₂ x = ln x/ln 2, e ln 2 é uma constante. A derivada é (1/x)/ln 2 = 1/(x · ln 2). Em geral, a derivada do logaritmo na base b é 1/(x · ln b).\n\n1/x é a derivada do logaritmo natural, e não do de base 2. ln 2/x multiplica pelo ln 2 em vez de dividir. 2/x usa a base como fator. E 1/(2x) divide pela base, e não pelo seu logaritmo natural.",
      v: { i: () => qualDerivada(lerF("log₂ x"), o, [0.41, 1.13, 1.7, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["x = −1", "x = 0", "x = 1", "Em nenhum ponto", "x = e"];
    return {
      d: "media",
      e: "Para f(x) = x · eˣ, em que valor de x a derivada se anula?",
      o,
      x: "Pela regra do produto, f'(x) = eˣ + x · eˣ = eˣ(1 + x). Como eˣ nunca se anula, f'(x) = 0 só quando 1 + x = 0, isto é, x = −1. Nesse ponto, a função atinge o seu valor mínimo, f(−1) = −1/e.\n\nx = 0 é o zero da função, onde a tangente tem inclinação 1. x = 1 erra o sinal ao resolver 1 + x = 0. “Em nenhum ponto” supõe que o fator eˣ impeça a derivada de se anular, mas é o outro fator que se anula. E x = e não tem relação com a equação.",
      v: { i: () => { const r = zeros(d(lerF("x · eˣ")), -10, 5); return unicoV(o.map((t) => (/^Em nenhum/.test(t) ? r.length === 0 : r.length === 1 && Math.abs(num(t) - r[0]) < 1e-6))); } },
    };
  })(),
  (() => {
    const o = ["18 m/s²", "12 m/s²", "24 m/s²", "4 m/s²", "30 m/s²"];
    return {
      d: "media",
      e: "Uma partícula se move segundo s(t) = 2t³ − 3t², com s em metros e t em segundos. Qual é a sua aceleração no instante t = 2 s?",
      o,
      x: "A velocidade é a derivada da posição, v(t) = 6t² − 6t, e a aceleração é a derivada da velocidade, a(t) = 12t − 6. Em t = 2 s: a(2) = 24 − 6 = 18 m/s².\n\n12 m/s² é a velocidade em t = 2 s, v(2) = 24 − 12 = 12 m/s, com a unidade trocada. 24 m/s² esquece o termo −6 da aceleração. 4 m/s² é a posição, s(2) = 16 − 12 = 4 m. E 30 m/s² erra o sinal do −6, somando em vez de subtrair.",
      v: { i: () => qual(derivada(d(lerF("2x³ − 3x²")), 2), o.map((t) => t.replace(" m/s²", "")), 1e-5) },
    };
  })(),
  (() => {
    const o = ["5", "12", "−11", "−3", "8"];
    return {
      d: "media",
      e: "Sabe-se que f(1) = 2, f'(1) = 3, g(1) = −1 e g'(1) = 4. Qual é o valor da derivada do produto f · g em x = 1?",
      o,
      x: "Pela regra do produto, (f · g)'(1) = f'(1) · g(1) + f(1) · g'(1) = 3 · (−1) + 2 · 4 = −3 + 8 = 5. Os dados bastam: não é preciso conhecer as funções inteiras, só os seus valores e derivadas no ponto.\n\n12 multiplica as derivadas, 3 · 4. −11 subtrai as parcelas, como na regra do quociente. −3 fica só com a parcela f' · g. E 8 fica só com a parcela f · g'.",
      /* funções quaisquer com esses valores e derivadas em 1 (com termos quadráticos arbitrários) */
      v: { i: () => { const f = (x) => 2 + 3 * (x - 1) + 0.7 * (x - 1) ** 2, g = (x) => -1 + 4 * (x - 1) - 1.3 * (x - 1) ** 2; return qual(derivada((x) => f(x) * g(x), 1), o); } },
    };
  })(),
  (() => {
    const o = ["−11", "5", "3/4", "11", "−3"];
    return {
      d: "media",
      e: "Duas funções deriváveis satisfazem f(1) = 2, g(1) = −1, f'(1) = 3 e g'(1) = 4. Pela regra do quociente, quanto vale a derivada de f/g no ponto 1?",
      o,
      x: "Pela regra do quociente, (f/g)'(1) = [f'(1) · g(1) − f(1) · g'(1)]/g(1)² = [3 · (−1) − 2 · 4]/(−1)² = (−3 − 8)/1 = −11. Aqui o denominador g(1)² vale 1 e não altera o resultado, mas, em geral, ele precisa ser calculado.\n\n5 soma as parcelas, como na regra do produto. 3/4 divide as derivadas, f'(1)/g'(1). 11 inverte a ordem da subtração no numerador. E −3 fica só com a parcela f' · g, esquecendo a outra.",
      v: { i: () => { const f = (x) => 2 + 3 * (x - 1) + 0.7 * (x - 1) ** 2, g = (x) => -1 + 4 * (x - 1) - 1.3 * (x - 1) ** 2; return qual(derivada((x) => f(x) / g(x), 1), o); } },
    };
  })(),
  (() => {
    const o = ["2x + 1", "3x²", "x² + x + 1", "2x", "3x² − 1"];
    return {
      d: "media",
      e: "Simplificando antes de derivar, qual é a derivada de f(x) = (x³ − 1)/(x − 1), para x ≠ 1?",
      o,
      x: "Antes de derivar, vale simplificar: x³ − 1 = (x − 1)(x² + x + 1), e, para x ≠ 1, f(x) = x² + x + 1. A derivada é 2x + 1. A regra do quociente daria o mesmo resultado, com bem mais trabalho.\n\n3x² divide a derivada do numerador pela do denominador, 3x²/1. x² + x + 1 é a função simplificada, antes de derivar. 2x esquece a derivada do termo x. E 3x² − 1 subtrai as derivadas do numerador e do denominador.",
      v: { i: () => qualDerivada(lerF("(x³ − 1)/(x − 1)"), o) },
    };
  })(),
  (() => {
    const o = ["cos²x − sen²x", "−sen x · cos x", "sen²x − cos²x", "cos²x + sen²x", "−2 sen x · cos x"];
    return {
      d: "media",
      e: "Qual é a derivada de f(x) = sen x · cos x?",
      o,
      x: "Pela regra do produto: (sen x)' · cos x + sen x · (cos x)' = cos x · cos x + sen x · (−sen x) = cos²x − sen²x, que também é cos 2x. Faz sentido: sen x cos x = (sen 2x)/2, cuja derivada é cos 2x.\n\n−sen x · cos x é o produto das derivadas. sen²x − cos²x erra o sinal das duas parcelas. cos²x + sen²x esquece o sinal da derivada do cosseno (e daria sempre 1). E −2 sen x · cos x é a derivada de cos²x, e não de sen x · cos x.",
      v: { i: () => qualDerivada(lerF("sen x · cos x"), o) },
    };
  })(),
  (() => {
    const o = ["−7/(x − 3)²", "2", "7/(x − 3)²", "(4x − 5)/(x − 3)²", "−5/(x − 3)²"];
    return {
      d: "media",
      e: "Aplicando a regra do quociente, qual é a derivada de f(x) = (2x + 1)/(x − 3), para x ≠ 3?",
      o,
      x: "Com u = 2x + 1 (u' = 2) e v = x − 3 (v' = 1): f'(x) = [2(x − 3) − (2x + 1) · 1]/(x − 3)² = (2x − 6 − 2x − 1)/(x − 3)² = −7/(x − 3)². A derivada é negativa em todo o domínio: a função decresce em cada intervalo.\n\n2 divide as derivadas, 2/1. 7/(x − 3)² inverte a ordem da subtração. (4x − 5)/(x − 3)² soma as parcelas em vez de subtrair. E −5/(x − 3)² erra o sinal ao distribuir o menos sobre 2x + 1, somando 1 em vez de subtrair.",
      v: { i: () => qualDerivada(lerF("(2x + 1)/(x − 3)"), o) },
    };
  })(),
  (() => {
    const o = ["a = 2", "a = 11/4", "a = 8", "a = 4", "a = 5/4"];
    return {
      d: "media",
      e: "Para que valor da constante a a função f(x) = ax² + 3x tem derivada igual a 11 no ponto x = 2?",
      o,
      x: "A derivada é f'(x) = 2ax + 3, e f'(2) = 4a + 3. Para valer 11: 4a + 3 = 11, 4a = 8, a = 2. Confere: com a = 2, f'(x) = 4x + 3, e f'(2) = 11.\n\na = 11/4 esquece o termo 3 da derivada. a = 8 para em 4a = 8, sem dividir por 4. a = 4 esquece o fator 2 que vem do expoente, fazendo 2a + 3 = 11. E a = 5/4 iguala a 11 o valor da função, f(2) = 4a + 6, e não o da derivada.",
      v: { i: () => unicoV(o.map((t) => { const a = num(t); return Math.abs(derivada((x) => a * x * x + 3 * x, 2) - 11) < 1e-6; })) },
    };
  })(),
  (() => {
    const o = ["sec x · tg x", "tg²x", "1/cos²x", "−sec x · tg x", "sec²x"];
    return {
      d: "media",
      e: "Escrevendo sec x = 1/cos x, qual é a derivada da função secante?",
      o,
      x: "Pela regra do quociente (ou vendo sec x como (cos x)⁻¹): (1/cos x)' = −(−sen x)/cos²x = sen x/cos²x = (1/cos x) · (sen x/cos x) = sec x · tg x.\n\ntg²x = sec²x − 1 não é a derivada de nada aqui. 1/cos²x e sec²x são a derivada da tangente, e não da secante. E −sec x · tg x erra o sinal: a derivada de cos x é −sen x, e o sinal negativo se cancela com o da potência −1.",
      v: { i: () => qualDerivada(lerF("sec x"), o) },
    };
  })(),
  (() => {
    const o = ["ln x/(2√x) + 1/√x", "1/(2x√x)", "ln x/(2√x)", "1/√x", "(ln x + 1)/(2√x)"];
    return {
      d: "media",
      e: "A função f(x) = √x · ln x está definida para x > 0. Qual é a expressão da sua derivada?",
      o,
      x: "Pela regra do produto, com u = √x (u' = 1/(2√x)) e v = ln x (v' = 1/x): f'(x) = ln x/(2√x) + √x/x = ln x/(2√x) + 1/√x. Juntando numa fração: (ln x + 2)/(2√x).\n\n1/(2x√x) é o produto das derivadas. ln x/(2√x) fica só com a parcela u' · v. 1/√x fica só com a outra parcela. E (ln x + 1)/(2√x) erra a simplificação de √x/x, que vale 1/√x = 2/(2√x), e não 1/(2√x).",
      v: { i: () => qualDerivada(lerF("√x · ln x"), o, [0.41, 1.13, 1.7, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["6", "5", "4", "120", "7"];
    return {
      d: "media",
      e: "Qual é a menor ordem n para a qual a derivada de ordem n de f(x) = x⁵ é a função identicamente nula?",
      o,
      x: "Cada derivação baixa o expoente em uma unidade: 5x⁴, 20x³, 60x², 120x, 120. A quinta derivada é a constante 120, e a sexta é zero. Então n = 6: um polinômio de grau m tem a derivada de ordem m + 1 identicamente nula.\n\n5 é a ordem da última derivada não nula, que vale 120. 4 para ainda antes, em 120x. 120 é o valor da quinta derivada, e não uma ordem de derivação. E 7 passa da primeira ordem em que a derivada se anula.",
      /* derivação exata dos coeficientes do polinômio, repetida até zerar */
      v: { i: () => { let p = [1, 0, 0, 0, 0, 0], n = 0; while (p.some((c) => c !== 0)) { const g = p.length - 1; p = p.slice(0, -1).map((c, i) => c * (g - i)); if (p.length === 0) p = [0]; n++; } return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["16π", "32π/3", "4π", "8π", "16π/3"];
    return {
      d: "media",
      e: "O volume de uma esfera é V(r) = (4/3)πr³. Qual é a taxa de variação do volume em relação ao raio quando r = 2?",
      o,
      x: "A taxa de variação é a derivada: V'(r) = (4/3)π · 3r² = 4πr², e V'(2) = 4π · 4 = 16π. Curiosamente, 4πr² é a área da superfície da esfera: aumentar um pouco o raio acrescenta uma casca fina, de volume próximo da área vezes a espessura.\n\n32π/3 é o volume da esfera de raio 2, e não a taxa. 4π esquece o fator r². 8π usa r no lugar de r². E 16π/3 esquece o fator 3 que desce do expoente de r³.",
      v: { i: () => qual(derivada(lerF("(4/3)π · x³"), 2), o) },
    };
  })(),
  (() => {
    const o = ["1/3", "2/3", "4/3", "4", "3"];
    return {
      d: "media",
      e: "Para f(x) = x^(2/3), qual é o valor da derivada no ponto x = 8?",
      o,
      x: "Pela regra da potência, f'(x) = (2/3) · x^(2/3 − 1) = (2/3) · x^(−1/3) = 2/(3∛x). Em x = 8, ∛8 = 2, e f'(8) = 2/(3 · 2) = 1/3. O expoente negativo −1/3 indica que a derivada diminui à medida que x cresce.\n\n2/3 é o coeficiente, sem o fator x^(−1/3). 4/3 multiplica por ∛8 = 2 em vez de dividir. 4 é o valor da função, 8^(2/3). E 3 inverte o resultado.",
      v: { i: () => qual(derivada(lerF("x^(2/3)"), 8), o) },
    };
  })(),
  (() => {
    const o = ["y = −x/2 + 1", "y = 2x − 4", "y = x/2 − 1", "y = −2x + 4", "y = −x/2"];
    return {
      d: "media",
      e: "A reta normal a um gráfico é a perpendicular à tangente no ponto de contato. Para f(x) = x² − 2x, no ponto de abscissa 2, qual é a equação dessa reta?",
      o,
      x: "O ponto é (2, f(2)) = (2, 0). A inclinação da tangente é f'(2) = 2 · 2 − 2 = 2, e a normal, perpendicular a ela, tem inclinação −1/2. A normal é y − 0 = −(1/2)(x − 2), ou y = −x/2 + 1.\n\ny = 2x − 4 é a reta tangente, e não a normal. y = x/2 − 1 inverte a inclinação, mas esquece o sinal. y = −2x + 4 troca o sinal, mas não inverte. E y = −x/2 tem a inclinação certa, mas passa pela origem, e não por (2, 0).",
      v: { i: () => { const f = lerF("x² − 2x"), m = -1 / derivada(f, 2); return qualReta((x) => f(2) + m * (x - 2), o); } },
    };
  })(),
  (() => {
    const o = ["2", "1", "e", "0", "3"];
    return {
      d: "media",
      e: "Qual é o valor da derivada de f(x) = (x + 1) · eˣ no ponto x = 0?",
      o,
      x: "Pela regra do produto: f'(x) = 1 · eˣ + (x + 1) · eˣ = eˣ(x + 2). Em x = 0: f'(0) = e⁰ · 2 = 2. O fator eˣ nunca se anula, e por isso o sinal da derivada é sempre o de x + 2.\n\n1 é o valor da função em x = 0, f(0) = 1 · e⁰. e é o valor de eˣ em x = 1, e não em 0. 0 supõe tangente horizontal, o que só acontece em x = −2. E 3 soma 1 a mais, usando eˣ(x + 3).",
      v: { i: () => qual(derivada(lerF("(x + 1) · eˣ"), 0), o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["5", "4", "6", "40", "10"];
    return {
      d: "dificil",
      e: "Para f(x) = xⁿ, com n inteiro positivo, sabe-se que a derivada no ponto x = 2 vale 80. Qual é o valor de n?",
      o,
      x: "Pela regra da potência, f'(x) = n · xⁿ⁻¹, e a condição fica n · 2ⁿ⁻¹ = 80. O lado esquerdo cresce com n, então no máximo um inteiro serve, e basta testar: n = 4 dá 4 · 8 = 32, n = 5 dá 5 · 16 = 80, n = 6 dá 6 · 32 = 192. Logo n = 5, e de fato f'(x) = 5x⁴ vale 5 · 16 = 80 em x = 2.\n\n4 é o expoente que aparece na derivada, n − 1, e não o próprio n. 6 leva a 192, bem acima de 80. 40 resolve n · 2 = 80, como se o fator 2ⁿ⁻¹ fosse apenas 2. E 10 decompõe 80 como 10 · 2³, mas o expoente 3 exigiria n = 4, e não 10.",
      /* busca direta: derivada numérica de xⁿ em 2 para n = 1, 2, …, 30 */
      v: { i: () => { const n = [...Array(30)].map((_, k) => k + 1).filter((k) => Math.abs(derivada((x) => x ** k, 2) - 80) < 1e-6); if (n.length !== 1) throw new Error(`n: ${n}`); return qual(n[0], o); } },
    };
  })(),
  (() => {
    const o = ["−4x/(x² − 1)²", "4x/(x² − 1)²", "1", "−2/(x² − 1)²", "−4x/(x² − 1)"];
    return {
      d: "dificil",
      e: "Qual é a derivada de f(x) = (x² + 1)/(x² − 1), definida para todo x diferente de 1 e de −1?",
      o,
      x: "Pela regra do quociente, com u = x² + 1 e v = x² − 1, ambos com derivada 2x: f'(x) = (2x(x² − 1) − (x² + 1) · 2x)/(x² − 1)². No numerador, os termos 2x³ se cancelam e sobra −2x − 2x = −4x. Um atalho confirma: f(x) = 1 + 2/(x² − 1), e pela regra do inverso, (1/v)' = −v'/v², a derivada de 2/(x² − 1) é −2 · 2x/(x² − 1)².\n\n4x/(x² − 1)² inverte a ordem do numerador, fazendo u · v' − u' · v. 1 deriva numerador e denominador separadamente, 2x/2x. −2/(x² − 1)² usa o atalho, mas esquece o fator v' = 2x. E −4x/(x² − 1) esquece de elevar o denominador ao quadrado.",
      v: { i: () => qualDerivada(lerF("(x² + 1)/(x² − 1)"), o, [-3.1, -2.3, -0.37, 0.41, 0.6, 2.71, 3.9]) },
    };
  })(),
  (() => {
    const o = ["x = 1 e x = −3", "Só x = 1", "x = 3", "x = −1 e x = 3", "x = 0 e x = 3"];
    return {
      d: "dificil",
      e: "Em quais abscissas a reta tangente ao gráfico de f(x) = x/(x + 1) é paralela à reta y = x/4?",
      o,
      x: "Retas paralelas têm a mesma inclinação, então a condição é f'(x) = 1/4. Pela regra do quociente, f'(x) = ((x + 1) − x)/(x + 1)² = 1/(x + 1)². A equação 1/(x + 1)² = 1/4 dá (x + 1)² = 4, ou seja, x + 1 = 2 ou x + 1 = −2: x = 1 ou x = −3. Há duas tangentes paralelas, uma de cada lado da assíntota x = −1.\n\nSó x = 1 esquece a raiz negativa de (x + 1)² = 4. x = 3 resolve x + 1 = 4, sem extrair a raiz quadrada. x = −1 e x = 3 resolve (x − 1)² = 4, com o sinal trocado; além disso, −1 nem está no domínio. E x = 0 e x = 3 são os pontos em que o gráfico cruza a reta y = x/4, e não aqueles em que a tangente é paralela a ela.",
      /* raízes de f'(x) − 1/4 procuradas numericamente de cada lado da assíntota */
      v: { i: () => { const f = lerF("x/(x + 1)"), g = (x) => derivada(f, x) - 0.25; const r = [...zeros(g, -10, -1.01), ...zeros(g, -0.99, 10)].sort((a, b) => a - b); const le = (t) => (t.match(/−?\d+/g) ?? []).map((s) => Number(s.replace("−", "-"))).sort((a, b) => a - b); return unicoV(o.map((t) => { const v = le(t); return v.length === r.length && v.every((c, k) => Math.abs(c - r[k]) < 1e-6); })); } },
    };
  })(),
  (() => {
    const o = ["eˣ(x² + 4x + 2)", "2eˣ", "eˣ(x² + 2x)", "eˣ(x² + 2)", "eˣ(x² + 4x)"];
    return {
      d: "dificil",
      e: "Qual é a derivada segunda da função f(x) = x² · eˣ, isto é, a derivada da derivada?",
      o,
      x: "A primeira derivada, pela regra do produto, é f'(x) = 2x · eˣ + x² · eˣ = eˣ(x² + 2x). Derivando de novo, com o mesmo raciocínio: f''(x) = eˣ(x² + 2x) + eˣ(2x + 2) = eˣ(x² + 4x + 2). Em geral, (uv)'' = u''v + 2u'v' + uv'', e o termo do meio, 2 · 2x · eˣ = 4xeˣ, é o que mais se esquece.\n\n2eˣ deriva cada fator duas vezes e multiplica os resultados. eˣ(x² + 2x) para na primeira derivada. eˣ(x² + 2) fica só com u''v + uv'' e perde o termo do meio. E eˣ(x² + 4x) esquece a parcela u''v = 2eˣ.",
      /* derivada segunda pela fórmula integral de Cauchy, com z² · e^z no plano complexo */
      v: { i: () => unicoV(o.map((t) => mesmaFuncao((x) => cauchy((z) => cmul(cmul(z, z), cexp(z)), x, 2), lerF(t)))) },
    };
  })(),
  (() => {
    const o = ["a = −2 e b = 1", "a = 2 e b = −3", "a = −3/2 e b = 1/2", "a = −3 e b = 3", "a = 1 e b = −2"];
    return {
      d: "dificil",
      e: "O gráfico de f(x) = x³ + ax² + bx passa pelo ponto (1, 0) e tem tangente horizontal nesse ponto. Quais são os valores de a e b?",
      o,
      x: "As duas informações viram duas equações. Passar por (1, 0) dá f(1) = 1 + a + b = 0. Tangente horizontal em x = 1 dá f'(1) = 0, e como f'(x) = 3x² + 2ax + b, fica 3 + 2a + b = 0. Subtraindo a primeira da segunda: 2 + a = 0, então a = −2 e b = 1. Conferindo: f(x) = x³ − 2x² + x = x(x − 1)², com raiz dupla em 1, onde o gráfico toca o eixo sem atravessá-lo.\n\na = 2 e b = −3 erra o sinal ao isolar a. a = −3/2 e b = 1/2 esquece que a derivada de bx é b. a = −3 e b = 3 esquece a parcela 1³ = 1 em f(1). E a = 1 e b = −2 troca os valores de a e b: satisfaz f(1) = 0, que é simétrica em a e b, mas dá f'(1) = 3.",
      /* cada par é testado: f(1) direto e f'(1) pela derivada numérica */
      v: { i: () => unicoV(o.map((t) => { const [, a, b] = t.match(/^a = (\S+) e b = (\S+)$/); const A = num(a), B = num(b), f = (x) => x ** 3 + A * x * x + B * x; return Math.abs(f(1)) < 1e-9 && Math.abs(derivada(f, 1)) < 1e-6; })) },
    };
  })(),
  (() => {
    const o = ["eˣ/(1 + eˣ)²", "1", "eˣ/(1 + eˣ)", "−eˣ/(1 + eˣ)²", "e^(2x)/(1 + eˣ)²"];
    return {
      d: "dificil",
      e: "A função logística f(x) = eˣ/(1 + eˣ) aparece em modelos de crescimento populacional. Qual é a sua derivada?",
      o,
      x: "Pela regra do quociente, com u = eˣ e v = 1 + eˣ, ambos com derivada eˣ: f'(x) = (eˣ(1 + eˣ) − eˣ · eˣ)/(1 + eˣ)². No numerador, e^(2x) se cancela e sobra eˣ. Assim f'(x) = eˣ/(1 + eˣ)², que também se escreve f(x) · (1 − f(x)): a taxa de crescimento é proporcional ao que já existe e ao que ainda falta.\n\n1 divide a derivada do numerador pela do denominador, eˣ/eˣ. eˣ/(1 + eˣ) repete a própria função, como se toda função com eˣ fosse igual à sua derivada. −eˣ/(1 + eˣ)² inverte a ordem do numerador. E e^(2x)/(1 + eˣ)² fica só com a parcela u · v', e com o sinal trocado.",
      v: { i: () => qualDerivada(lerF("eˣ/(1 + eˣ)"), o) },
    };
  })(),
  (() => {
    const o = ["eˣ(x + 5)", "5eˣ", "xeˣ", "eˣ(5x + 1)", "eˣ(x + 4)"];
    return {
      d: "dificil",
      e: "Derivando cinco vezes seguidas a função f(x) = x · eˣ, qual expressão se obtém?",
      o,
      x: "A primeira derivada, pela regra do produto, é eˣ + xeˣ = eˣ(x + 1). Derivando de novo: eˣ(x + 1) + eˣ = eˣ(x + 2). A cada passo, o eˣ se repete e o número somado a x aumenta uma unidade, porque a derivada de eˣ(x + k) é eˣ(x + k) + eˣ = eˣ(x + k + 1). Depois de cinco derivações, f⁽⁵⁾(x) = eˣ(x + 5).\n\n5eˣ perde a parcela xeˣ, que se repete em todas as derivadas. xeˣ supõe que a função volta a si mesma, como eˣ. eˣ(5x + 1) multiplica x por 5 em vez de somar 5. E eˣ(x + 4) é a quarta derivada, uma a menos.",
      /* derivada de ordem 5 pela fórmula integral de Cauchy, sem derivar símbolo algum */
      v: { i: () => unicoV(o.map((t) => mesmaFuncao((x) => cauchy((z) => cmul(z, cexp(z)), x, 5), lerF(t), undefined, 1e-8))) },
    };
  })(),
  (() => {
    const o = ["(e, 1)", "(1, 0)", "(e², 2)", "(1/e, −1)", "Não existe tal reta"];
    return {
      d: "dificil",
      e: "Uma reta tangente ao gráfico de f(x) = ln x passa pela origem do plano cartesiano. Em que ponto ela toca o gráfico?",
      o,
      x: "A tangente no ponto de abscissa x₀ tem inclinação f'(x₀) = 1/x₀ e equação y = ln x₀ + (x − x₀)/x₀. Para passar pela origem, basta que y = 0 quando x = 0: 0 = ln x₀ − 1, então ln x₀ = 1 e x₀ = e. O ponto de tangência é (e, 1), e a reta é y = x/e, que de fato passa por (0, 0).\n\n(1, 0) é onde o gráfico corta o eixo x; a tangente ali, y = x − 1, passa por (0, −1). (e², 2) tem tangente y = x/e² + 1, que corta o eixo y em 1. (1/e, −1) vem de resolver ln x₀ = −1, com o sinal trocado. E a reta existe: o intercepto ln x₀ − 1 assume todos os valores reais e se anula exatamente uma vez.",
      /* o intercepto da tangente, f(x₀) − x₀ · f'(x₀), é zerado numericamente */
      v: { i: () => { const f = lerF("ln x"), r = zeros((x) => f(x) - x * derivada(f, x), 0.05, 50); if (r.length !== 1) throw new Error(`raízes: ${r}`); const [x0] = r, y0 = f(x0); return unicoV(o.map((t) => { const m = t.match(/^\((.+), (.+)\)$/); return !!m && Math.abs(num(m[1]) - x0) < 1e-6 && Math.abs(num(m[2]) - y0) < 1e-6; })); } },
    };
  })(),
  (() => {
    const o = ["−1", "0", "1", "11", "−6"];
    return {
      d: "dificil",
      e: "Sem expandir o produto, qual é o valor de f'(2) para a função f(x) = (x − 1)(x − 2)(x − 3)?",
      o,
      x: "A regra do produto para três fatores soma três parcelas, cada uma com um fator derivado: f'(x) = (x − 2)(x − 3) + (x − 1)(x − 3) + (x − 1)(x − 2). Em x = 2, a primeira e a terceira parcelas contêm o fator x − 2 e se anulam; sobra (2 − 1)(2 − 3) = 1 · (−1) = −1. Expandindo, f(x) = x³ − 6x² + 11x − 6 e f'(x) = 3x² − 12x + 11, que também dá 12 − 24 + 11 = −1.\n\n0 é o valor da função em x = 2, raiz do polinômio. 1 erra o sinal de 2 − 3. 11 é f'(0), o coeficiente de x. E −6 é f(0), o termo independente.",
      v: { i: () => qual(derivada(lerF("(x − 1)(x − 2)(x − 3)"), 2), o) },
    };
  })(),
  (() => {
    const o = ["8", "12", "−4", "16", "24"];
    return {
      d: "dificil",
      e: "Sabe-se que g(2) = 3 e g'(2) = −1. Para f(x) = x² · g(x), qual é o valor de f'(2)?",
      o,
      x: "Pela regra do produto, f'(x) = 2x · g(x) + x² · g'(x). Em x = 2: f'(2) = 2 · 2 · 3 + 4 · (−1) = 12 − 4 = 8. Não é preciso conhecer a fórmula de g: a derivada do produto num ponto depende só dos valores das funções e das suas derivadas nesse ponto.\n\n12 fica só com a parcela 2x · g(x), e coincide com o valor da função, f(2) = 4 · 3. −4 fica só com a parcela x² · g'(x). 16 soma 4 em vez de subtrair, trocando o sinal de g'(2). E 24 usa g(2) no lugar de g'(2) na segunda parcela: 12 + 4 · 3.",
      /* duas funções g diferentes, com g(2) = 3 e g'(2) = −1, precisam dar o mesmo f'(2) */
      v: { i: () => { const r = [(x) => 5 - x, (x) => 3 + Math.sin(2 - x) + (x - 2) ** 2].map((g) => derivada((x) => x * x * g(x), 2)); if (Math.abs(r[0] - r[1]) > 1e-8) throw new Error(`g muda o resultado: ${r}`); return qual(r[0], o); } },
    };
  })(),
];
