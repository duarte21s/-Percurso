/* Rascunho — Cálculo I / Funções e revisão de pré-cálculo.

   A conferência lê as alternativas como funções, condições ou intervalos
   (_calculo.mjs) e as testa contra a função do enunciado: domínios pela
   existência do valor numa malha de pontos, compostas e inversas pela
   composição ponto a ponto, paridade por f(−x), extremos e imagens por
   varredura, raízes por mudança de sinal e bisseção. */

import { unicoV, lerF, lerExpr, lerCondicao, lerIntervalo, descreveDominio, mesmaFuncao, minimo, maximo, bissecao, zeros, integra, malha } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Funções e revisão de pré-cálculo";
export const arquivo = "calculo__funcoes-e-revisao-de-pre-calculo";

/* valor numérico de uma alternativa ("x = 3", "(1 + √3)/2", "−4") */
const num = (t) => lerExpr(String(t).replace(/^x\s*=\s*/, "").replace(/(\d)\.(?=\d{3}(?:\D|$))/g, "$1").replace(/(\d),(\d)/g, "$1.$2").replace(/∛(\d+)/g, "Math.cbrt($1)"));
const qual = (x, alt, tol = 1e-9) => unicoV(alt.map((t) => { let v; try { v = num(t); } catch { return false; } return Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); }));
/* índice da alternativa (função) que coincide com g */
const qualFuncao = (g, alt, pontos) => unicoV(alt.map((t) => { try { return mesmaFuncao(g, lerF(t), pontos); } catch { return false; } }));
/* índice da alternativa (condição sobre x) que descreve o domínio de f */
const qualDominio = (f, alt, pontos = malha) => unicoV(alt.map((t) => descreveDominio(f, lerCondicao(t), pontos)));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["3", "15", "11", "9", "1"];
    return {
      d: "facil",
      e: "Qual é o valor de f(2) para a função f(x) = 2x² − 3x + 1?",
      o,
      x: "Basta substituir x por 2 em toda a expressão, respeitando a ordem das operações (primeiro a potência, depois as multiplicações): f(2) = 2 · 2² − 3 · 2 + 1 = 2 · 4 − 6 + 1 = 8 − 6 + 1 = 3.\n\n15 troca o sinal do termo do meio, somando 3 · 2 em vez de subtrair. 11 eleva ao quadrado o produto 2x, calculando (2 · 2)² = 16 em vez de 2 · 2². 9 esquece o termo −3x. E 1 é o valor de f(0), o termo independente.",
      v: { i: () => qual(lerF("2x² − 3x + 1")(2), o) },
    };
  })(),
  (() => {
    const o = ["x ≥ 3", "x > 3", "x ≥ −3", "x ≤ 3", "Todos os reais"];
    return {
      d: "facil",
      e: "Qual é o domínio da função f(x) = √(x − 3), no conjunto dos números reais?",
      o,
      x: "A raiz quadrada só está definida, nos reais, para radicandos não negativos: x − 3 ≥ 0, isto é, x ≥ 3. Em x = 3, a raiz vale √0 = 0, que é um número real, e por isso o 3 entra no domínio.\n\n“x > 3” exclui o 3, como se a raiz de zero não existisse. “x ≥ −3” erra o sinal ao isolar x. “x ≤ 3” inverte a desigualdade. E “todos os reais” esquece que a raiz de número negativo não é real: f(0) = √(−3), por exemplo, não existe.",
      v: { i: () => qualDominio(lerF("√(x − 3)"), o) },
    };
  })(),
  (() => {
    const o = ["x² + 2", "(x + 2)²", "x³ + 2x²", "x² + x + 2", "x + 4"];
    return {
      d: "facil",
      e: "Com f(x) = x + 2 e g(x) = x², qual é a expressão de (f ∘ g)(x) = f(g(x))?",
      o,
      x: "Na composta f ∘ g, primeiro se aplica g e depois f ao resultado: f(g(x)) = f(x²) = x² + 2. A ordem importa: g(f(x)) = g(x + 2) = (x + 2)², que é outra função. Para conferir em x = 1: g(1) = 1 e f(1) = 3, enquanto (x + 2)² daria 9.\n\n(x + 2)² é a composta na ordem inversa, g ∘ f. x³ + 2x² é o produto f(x) · g(x). x² + x + 2 é a soma f(x) + g(x). E x + 4 é f(f(x)), aplicando f duas vezes.",
      v: { i: () => { const f = lerF("x + 2"), g = lerF("x²"); return qualFuncao((x) => f(g(x)), o); } },
    };
  })(),
  (() => {
    const o = ["(x − 6)/2", "(x + 6)/2", "x/2 − 6", "1/(2x + 6)", "2x − 6"];
    return {
      d: "facil",
      e: "Qual é a função inversa de f(x) = 2x + 6?",
      o,
      x: "Para achar a inversa, escreve-se y = 2x + 6 e isola-se x: 2x = y − 6, x = (y − 6)/2. Trocando os nomes das variáveis, f⁻¹(x) = (x − 6)/2. Confere: f(f⁻¹(x)) = 2 · (x − 6)/2 + 6 = x. A inversa desfaz o que a função faz, na ordem contrária: f multiplica por 2 e soma 6; a inversa subtrai 6 e divide por 2.\n\n(x + 6)/2 erra o sinal ao passar o 6 para o outro lado. x/2 − 6 desfaz as operações na ordem errada. 1/(2x + 6) confunde a inversa com o inverso multiplicativo, 1/f(x). E 2x − 6 só troca o sinal do termo independente.",
      /* a inversa é a alternativa g com f(g(x)) = x */
      v: { i: () => { const f = lerF("2x + 6"); return unicoV(o.map((t) => { const g = lerF(t); return mesmaFuncao((x) => f(g(x)), (x) => x); })); } },
    };
  })(),
  (() => {
    const o = ["x⁴ + x²", "x³ + x", "x² + x", "eˣ", "x + 1"];
    return {
      d: "facil",
      e: "Qual das funções a seguir é par, isto é, satisfaz f(−x) = f(x) para todo x real?",
      o,
      x: "Em x⁴ + x², todos os expoentes são pares: trocar x por −x não muda nada, porque (−x)⁴ = x⁴ e (−x)² = x². O gráfico é simétrico em relação ao eixo y.\n\nx³ + x é ímpar: f(−x) = −f(x), e o gráfico é simétrico em relação à origem. x² + x mistura um termo par e um ímpar, e não é par nem ímpar (f(−1) = 0, f(1) = 2). eˣ não é par: e⁻¹ ≠ e. E x + 1 também não: f(−1) = 0, f(1) = 2.",
      v: { i: () => unicoV(o.map((t) => { const f = lerF(t); return mesmaFuncao((x) => f(-x), f); })) },
    };
  })(),
  (() => {
    const o = ["3", "1/3", "6", "5", "2"];
    return {
      d: "facil",
      e: "Qual é a inclinação (coeficiente angular) da reta que passa pelos pontos (1, 2) e (3, 8)?",
      o,
      x: "A inclinação é a razão entre a variação de y e a variação de x: m = (8 − 2)/(3 − 1) = 6/2 = 3. A cada unidade que x avança, y sobe 3. A equação da reta é y − 2 = 3(x − 1), ou y = 3x − 1, e os dois pontos dados satisfazem essa equação.\n\n1/3 inverte a razão, Δx/Δy. 6 é só a variação de y, sem dividir por Δx. 5 soma os valores de y em vez de subtrair, (8 + 2)/2. E 2 é a variação de x.",
      /* inclinação que faz a reta por (1, 2) passar também por (3, 8) */
      v: { i: () => qual(bissecao((m) => 2 + m * (3 - 1) - 8, -100, 100), o) },
    };
  })(),
  (() => {
    const o = ["−4", "3", "5", "−9", "4"];
    return {
      d: "facil",
      e: "Qual é o valor mínimo da função f(x) = x² − 6x + 5?",
      o,
      x: "A parábola tem concavidade para cima (o coeficiente de x² é positivo), e o mínimo está no vértice, em x = −b/(2a) = 6/2 = 3. O valor mínimo é f(3) = 9 − 18 + 5 = −4. Completando o quadrado, f(x) = (x − 3)² − 4, o que mostra o mesmo resultado.\n\n3 é a abscissa do vértice, onde o mínimo acontece, e não o valor mínimo. 5 é f(0). −9 é −b²/(4a), sem somar o termo independente. E 4 erra o sinal.",
      v: { i: () => qual(minimo(lerF("x² − 6x + 5"), -10, 10).y, o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["x = 3", "x = 4", "x = 7", "x = 8", "x = 15"];
    return {
      d: "facil",
      e: "Qual é a solução da equação 2^(x + 1) = 16?",
      o,
      x: "Como 16 = 2⁴, a equação fica 2^(x + 1) = 2⁴ e, igualando os expoentes, x + 1 = 4, ou x = 3. Confere: 2^(3 + 1) = 2⁴ = 16. Esse é o caminho sempre que os dois lados podem ser escritos como potências da mesma base.\n\nx = 4 iguala x ao expoente de 16, esquecendo o +1. x = 7 resolve x + 1 = 16/2. x = 8 divide 16 por 2 e toma o resultado como x. E x = 15 subtrai 1 de 16, tratando a potência como se fosse soma.",
      v: { i: () => qual(bissecao((x) => 2 ** (x + 1) - 16, -10, 10), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["1", "√3", "1/2", "(1 + √3)/2", "0"];
    return {
      d: "facil",
      e: "Usando os valores notáveis de seno e cosseno, qual é o valor de sen(π/6) + cos(π/3)?",
      o,
      x: "Os ângulos π/6 e π/3 são 30° e 60°. sen 30° = 1/2 e cos 60° = 1/2, e a soma é 1. Os dois valores são iguais porque 30° e 60° são complementares: o seno de um é o cosseno do outro.\n\n√3 troca os dois valores, usando sen 60° e cos 30°, ambos √3/2. (1 + √3)/2 troca só um deles. 1/2 conta só uma das parcelas. E 0 supõe que seno e cosseno se anulem.",
      v: { i: () => qual(lerF("sen(π/6) + cos(π/3)")(0), o) },
    };
  })(),
  (() => {
    const o = ["[1, +∞)", "(1, +∞)", "ℝ", "[0, +∞)", "(−∞, 1]"];
    return {
      d: "facil",
      e: "Qual é o conjunto imagem da função f(x) = x² + 1, definida em todos os reais?",
      o,
      x: "Como x² ≥ 0 para todo x, temos x² + 1 ≥ 1, com igualdade em x = 0. E x² + 1 assume qualquer valor maior que 1: para y ≥ 1, basta tomar x = √(y − 1). A imagem é, portanto, [1, +∞).\n\n(1, +∞) exclui o 1, que é atingido em x = 0. ℝ ignora que o quadrado nunca é negativo. [0, +∞) é a imagem de x², sem o deslocamento de 1 unidade para cima. E (−∞, 1] inverte o sentido, como se a parábola tivesse concavidade para baixo.",
      /* imagem = [mínimo, +∞): o mínimo é atingido e a função cresce sem limite */
      v: { i: () => { const f = lerF("x² + 1"), m = minimo(f, -50, 50); if (!(f(1e3) > 1e5)) throw new Error("limitada"); const ys = [...malha, m.y]; return unicoV(o.map((t) => ys.every((y) => lerIntervalo(t)(y) === y >= m.y - 1e-12))); } },
    };
  })(),
  (() => {
    const o = ["8", "5", "12", "9", "7"];
    return {
      d: "facil",
      e: "A função f é definida por f(x) = x² para x < 2 e por f(x) = 2x + 3 para x ≥ 2. Qual é o valor de f(2) + f(1)?",
      o,
      x: "Cada valor usa a expressão do intervalo a que pertence. Como 2 ≥ 2, f(2) = 2 · 2 + 3 = 7. Como 1 < 2, f(1) = 1² = 1. A soma é 7 + 1 = 8. O ponto x = 2 pertence ao segundo trecho por causa do sinal ≥, e é esse detalhe que decide a questão.\n\n5 usa x² para os dois valores, 4 + 1. 12 usa 2x + 3 para os dois, 7 + 5. 9 troca as expressões, com f(2) = 4 e f(1) = 5. E 7 é só o valor de f(2).",
      v: { i: () => { const f = (x) => (x < 2 ? x * x : 2 * x + 3); return qual(f(2) + f(1), o); } },
    };
  })(),
  (() => {
    const o = ["2 unidades para a direita e 3 para cima", "2 unidades para a esquerda e 3 para cima", "2 unidades para a direita e 3 para baixo", "3 unidades para a direita e 2 para cima", "2 unidades para a esquerda e 3 para baixo"];
    return {
      d: "facil",
      e: "Em relação ao gráfico de y = x², como está deslocado o gráfico de y = (x − 2)² + 3?",
      o,
      x: "Trocar x por x − 2 desloca o gráfico 2 unidades para a direita: o vértice, que estava em x = 0, passa a x = 2, onde x − 2 = 0. Somar 3 à função desloca o gráfico 3 unidades para cima. O novo vértice é (2, 3).\n\n“Para a esquerda” erra o sentido do deslocamento horizontal, que é o contrário do sinal que aparece dentro do parêntese. “3 para baixo” erra o sentido do vertical. “3 para a direita e 2 para cima” troca os papéis dos dois números. E “esquerda e para baixo” erra os dois sentidos.",
      /* vértices das duas parábolas, achados por varredura */
      v: { i: () => { const a = minimo(lerF("x²"), -10, 10), b = minimo(lerF("(x − 2)² + 3"), -10, 10); const dx = Math.round(b.x - a.x), dy = Math.round(b.y - a.y); const texto = `${Math.abs(dx)} unidades para a ${dx > 0 ? "direita" : "esquerda"} e ${Math.abs(dy)} para ${dy > 0 ? "cima" : "baixo"}`; return unicoV(o.map((t) => t === texto)); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["x < −2 ou x > 2", "x > 2", "−2 < x < 2", "x ≠ ±2", "x ≥ 2"];
    return {
      d: "media",
      e: "Qual é o domínio da função f(x) = ln(x² − 4), no conjunto dos números reais?",
      o,
      x: "O logaritmo só está definido para argumentos positivos: x² − 4 > 0, isto é, x² > 4, o que vale para x > 2 ou x < −2. Os dois lados entram porque o quadrado de um número negativo também é positivo: f(−3) = ln 5 existe.\n\n“x > 2” esquece a parte negativa. “−2 < x < 2” é justamente onde x² − 4 é negativo, e o logaritmo não existe. “x ≠ ±2” só exclui os pontos em que o argumento se anula, esquecendo que ele também não pode ser negativo. E “x ≥ 2” inclui o 2, em que o argumento é zero, e esquece os negativos.",
      v: { i: () => qualDominio(lerF("ln(x² − 4)"), o) },
    };
  })(),
  (() => {
    const o = ["x < 3", "x ≤ 3", "x > 3", "x ≠ 3", "x ≥ −1 e x < 3"];
    return {
      d: "media",
      e: "Para quais valores reais de x a expressão (x + 1)/√(3 − x) está definida?",
      o,
      x: "Há duas exigências: o radicando não pode ser negativo, 3 − x ≥ 0, e o denominador não pode ser zero, √(3 − x) ≠ 0. Juntas, dão 3 − x > 0, isto é, x < 3. O numerador, x + 1, não impõe restrição nenhuma: ele pode ser negativo ou nulo.\n\n“x ≤ 3” inclui o 3, que zera o denominador. “x > 3” inverte a desigualdade. “x ≠ 3” esquece que o radicando não pode ser negativo. E “x ≥ −1 e x < 3” exige, sem motivo, que o numerador seja não negativo.",
      v: { i: () => qualDominio(lerF("(x + 1)/√(3 − x)"), o) },
    };
  })(),
  (() => {
    const o = ["(3x + 1)/(x − 2)", "(x − 3)/(2x + 1)", "(3x − 1)/(x + 2)", "(x + 1)/(2x − 3)", "(2x − 1)/(x + 3)"];
    return {
      d: "media",
      e: "Qual é a função inversa de f(x) = (2x + 1)/(x − 3), definida para x ≠ 3?",
      o,
      x: "Escrevendo y = (2x + 1)/(x − 3) e isolando x: y(x − 3) = 2x + 1, yx − 3y = 2x + 1, x(y − 2) = 3y + 1, e x = (3y + 1)/(y − 2). Trocando as variáveis, f⁻¹(x) = (3x + 1)/(x − 2), definida para x ≠ 2. Confere em x = 4: f(4) = 9, e f⁻¹(9) = 28/7 = 4.\n\n(x − 3)/(2x + 1) é o inverso multiplicativo, 1/f(x). (3x − 1)/(x + 2) erra os sinais ao isolar x. (x + 1)/(2x − 3) troca os coeficientes de lugar sem resolver a equação. E (2x − 1)/(x + 3) só troca os sinais dos termos independentes.",
      v: { i: () => { const f = lerF("(2x + 1)/(x − 3)"); return unicoV(o.map((t) => { const g = lerF(t); return mesmaFuncao((x) => f(g(x)), (x) => x); })); } },
    };
  })(),
  (() => {
    const o = ["10", "9", "15", "8", "5"];
    return {
      d: "media",
      e: "Com f(x) = 2x − 1 e g(x) = x² + 1, qual é o valor de (g ∘ f)(2)?",
      o,
      x: "Na composta g ∘ f, calcula-se primeiro f(2) = 2 · 2 − 1 = 3, e depois g(3) = 3² + 1 = 10. A função de dentro é aplicada primeiro, e o seu resultado é a entrada da de fora. Em geral, (g ∘ f)(x) = (2x − 1)² + 1, que em x = 2 dá 3² + 1 = 10.\n\n9 é a composta na outra ordem, f(g(2)) = f(5). 15 é o produto f(2) · g(2) = 3 · 5. 8 é a soma f(2) + g(2). E 5 é só g(2), sem aplicar f antes.",
      v: { i: () => { const f = lerF("2x − 1"), g = lerF("x² + 1"); return qual(g(f(2)), o); } },
    };
  })(),
  (() => {
    const o = ["x = 2", "x = 4", "x = 2 ou x = −1", "x = −1", "Não há solução real"];
    return {
      d: "media",
      e: "Quais são as soluções reais da equação 4ˣ − 3 · 2ˣ − 4 = 0?",
      o,
      x: "Com y = 2ˣ, e 4ˣ = (2ˣ)² = y², a equação fica y² − 3y − 4 = 0, de raízes y = 4 e y = −1. Voltando a x: 2ˣ = 4 dá x = 2; 2ˣ = −1 não tem solução, porque uma potência de base positiva nunca é negativa. A única solução é x = 2.\n\nx = 4 toma a raiz y = 4 como se fosse o próprio x. “x = 2 ou x = −1” aceita a raiz negativa de y como se fosse um valor de x. x = −1 fica só com essa raiz. E há, sim, solução: a que vem de y = 4.",
      /* zeros da função no intervalo [−10, 10] */
      v: { i: () => { const r = zeros((x) => 4 ** x - 3 * 2 ** x - 4, -10, 10); return unicoV(o.map((t) => { if (/^Não há/.test(t)) return r.length === 0; const vs = t.split(" ou ").map(num); return vs.length === r.length && vs.every((v) => r.some((z) => Math.abs(z - v) < 1e-7)); })); } },
    };
  })(),
  (() => {
    const o = ["x = 4", "x = 4 ou x = −2", "x = −2", "x = 5", "x = 1 + √7"];
    return {
      d: "media",
      e: "Qual é a solução da equação log₂ x + log₂(x − 2) = 3, nos números reais?",
      o,
      x: "Pela propriedade do logaritmo do produto, log₂[x(x − 2)] = 3, e então x(x − 2) = 2³ = 8, ou x² − 2x − 8 = 0, de raízes 4 e −2. O domínio exige x > 0 e x − 2 > 0, isto é, x > 2: só x = 4 serve. Confere: log₂ 4 + log₂ 2 = 2 + 1 = 3.\n\n“x = 4 ou x = −2” esquece de verificar o domínio: log₂(−2) não existe. x = −2 fica só com a raiz inválida. x = 5 transforma a soma de logaritmos no logaritmo da soma, log₂(2x − 2) = 3. E 1 + √7 usa 2 · 3 = 6 no lugar de 2³ = 8.",
      v: { i: () => { const f = lerF("log₂ x + log₂(x − 2) − 3"); const r = zeros(f, -10, 20).filter((z) => Number.isFinite(f(z))); return unicoV(o.map((t) => { const vs = t.split(" ou ").map(num); return vs.length === r.length && vs.every((v) => r.some((z) => Math.abs(z - v) < 1e-7)); })); } },
    };
  })(),
  (() => {
    const o = ["π/6 e 5π/6", "π/6", "π/3 e 2π/3", "π/6 e 7π/6", "π/6 e 11π/6"];
    return {
      d: "media",
      e: "Quais são as soluções da equação 2 sen x − 1 = 0 no intervalo [0, 2π)?",
      o,
      x: "A equação dá sen x = 1/2. O seno é positivo no 1º e no 2º quadrantes, e vale 1/2 em x = π/6 (30°) e no seu suplementar, x = π − π/6 = 5π/6 (150°). No intervalo [0, 2π), são as duas únicas soluções.\n\n“Só π/6” esquece a solução do 2º quadrante. π/3 e 2π/3 são as soluções de sen x = √3/2. 7π/6 está no 3º quadrante, onde o seno é negativo: sen(7π/6) = −1/2. E 11π/6 está no 4º quadrante, onde o seno também é negativo.",
      v: { i: () => { const r = zeros(lerF("2 sen x − 1"), 0, 2 * Math.PI - 1e-9); return unicoV(o.map((t) => { const vs = t.split(" e ").map(num); return vs.length === r.length && vs.every((v) => r.some((z) => Math.abs(z - v) < 1e-7)); })); } },
    };
  })(),
  (() => {
    const o = ["π", "2π", "π/2", "3π", "4π"];
    return {
      d: "media",
      e: "Qual é o período (o menor período positivo) da função f(x) = 3 sen(2x)?",
      o,
      x: "O seno completa um ciclo quando o argumento varia 2π. Com argumento 2x, basta x variar π para 2x variar 2π: o período é 2π/2 = π. O coeficiente 3 muda a amplitude (o gráfico oscila entre −3 e 3), mas não o período.\n\n2π é o período de sen x, sem considerar o fator 2. π/2 divide o período por 4 em vez de 2. 3π multiplica pela amplitude, que não interfere no período. E 4π multiplica por 2 em vez de dividir.",
      /* menor T > 0 com f(x + T) = f(x) em vários pontos: primeiro zero da soma dos quadrados das diferenças */
      v: { i: () => { const f = lerF("3 sen(2x)"), pts = [0.3, 0.9, 1.7, 2.6]; const g = (T) => pts.reduce((s, x) => s + (f(x + T) - f(x)) ** 2, 0); const T = zeros(g, 0.2, 7, 70000, 1e-12)[0]; return qual(T, o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["[1, 5]", "[−1, 1]", "[3, 5]", "[1, 3]", "[−5, −1]"];
    return {
      d: "media",
      e: "Qual é o conjunto imagem da função f(x) = 3 − 2 sen x, definida em todos os reais?",
      o,
      x: "Como −1 ≤ sen x ≤ 1, multiplicando por −2 (o que inverte as desigualdades): −2 ≤ −2 sen x ≤ 2. Somando 3: 1 ≤ 3 − 2 sen x ≤ 5. O mínimo, 1, ocorre quando sen x = 1, e o máximo, 5, quando sen x = −1; todos os valores intermediários são atingidos.\n\n[−1, 1] é a imagem do próprio seno. [3, 5] considera só os valores negativos do seno. [1, 3] considera só os positivos. E [−5, −1] erra os sinais, como se a função fosse −3 − 2 sen x.",
      v: { i: () => { const f = lerF("3 − 2 sen x"), m = minimo(f, 0, 2 * Math.PI).y, M = maximo(f, 0, 2 * Math.PI).y; const ys = [...malha, m, M]; return unicoV(o.map((t) => ys.every((y) => lerIntervalo(t)(y) === (y >= m - 1e-9 && y <= M + 1e-9)))); } },
    };
  })(),
  (() => {
    const o = ["Ímpar", "Par", "Nem par nem ímpar", "Par e ímpar ao mesmo tempo", "Par para x > 0 e ímpar para x < 0"];
    return {
      d: "media",
      e: "Como se classifica, quanto à paridade, a função f(x) = x³ − x, definida em todos os reais?",
      o,
      x: "Calculando f(−x) = (−x)³ − (−x) = −x³ + x = −(x³ − x) = −f(x). Como f(−x) = −f(x) para todo x, a função é ímpar, e o seu gráfico é simétrico em relação à origem. É o que acontece com todo polinômio que só tem potências ímpares de x.\n\nPar exigiria f(−x) = f(x), o que falha, por exemplo, em x = 2: f(2) = 6 e f(−2) = −6. “Nem par nem ímpar” ignora a simetria que existe. Só a função nula é par e ímpar ao mesmo tempo. E a paridade é uma propriedade do domínio inteiro, e não de cada trecho.",
      v: { i: () => { const f = lerF("x³ − x"); const par = mesmaFuncao((x) => f(-x), f), impar = mesmaFuncao((x) => f(-x), (x) => -f(x)); return unicoV(o.map((_, i) => i === (impar && !par ? 0 : par && !impar ? 1 : par && impar ? 3 : 2))); } },
    };
  })(),
  (() => {
    const o = ["log₂(x/3)", "log₃(x/2)", "3 log₂ x", "log₂ x − 3", "2^(x/3)"];
    return {
      d: "media",
      e: "Qual é a função inversa de f(x) = 3 · 2ˣ, cujo conjunto imagem é o dos reais positivos?",
      o,
      x: "Escrevendo y = 3 · 2ˣ: 2ˣ = y/3 e, aplicando o logaritmo na base 2, x = log₂(y/3). Trocando as variáveis, f⁻¹(x) = log₂(x/3), definida para x > 0, que é a imagem de f. Confere: f(log₂(x/3)) = 3 · (x/3) = x.\n\nlog₃(x/2) troca os papéis do 3 e do 2. 3 log₂ x trata o 3 como fator do logaritmo. log₂ x − 3 subtrai o 3 em vez de dividir por ele. E 2^(x/3) ainda é uma exponencial, e não desfaz a exponencial dada.",
      v: { i: () => { const f = (x) => 3 * 2 ** x; return unicoV(o.map((t) => { const g = lerF(t); return mesmaFuncao((x) => f(g(x)), (x) => x, [0.41, 1.13, 2.71, 3.9, 7.2]); })); } },
    };
  })(),
  (() => {
    const o = ["−2 < x ≤ 1", "−2 ≤ x ≤ 1", "x ≤ 1", "x < −2 ou x ≥ 1", "x ≠ −2"];
    return {
      d: "media",
      e: "Qual é o conjunto solução da inequação (x − 1)/(x + 2) ≤ 0, nos números reais?",
      o,
      x: "O quociente é negativo quando numerador e denominador têm sinais opostos, e zero quando o numerador se anula. Os pontos críticos são x = 1 (numerador zero) e x = −2 (denominador zero). Para x < −2, os dois fatores são negativos, e o quociente é positivo; entre −2 e 1, ele é negativo; acima de 1, positivo. A solução é −2 < x ≤ 1: inclui o 1, em que o quociente vale 0, e exclui o −2, em que ele não existe.\n\n“−2 ≤ x ≤ 1” inclui o −2, que zera o denominador. “x ≤ 1” esquece o sinal do denominador, como se ele fosse sempre positivo. “x < −2 ou x ≥ 1” é onde o quociente é positivo ou nulo, a desigualdade contrária. E “x ≠ −2” só exclui o ponto proibido, sem estudar o sinal.",
      v: { i: () => { const f = lerF("(x − 1)/(x + 2)"); return unicoV(o.map((t) => malha.every((x) => lerCondicao(t)(x) === (Number.isFinite(f(x)) && f(x) <= 0)))); } },
    };
  })(),
  (() => {
    const o = ["Reflexão no eixo x, 1 unidade para a direita e 2 para cima", "Reflexão no eixo y, 1 unidade para a direita e 2 para cima", "Reflexão no eixo x, 1 unidade para a esquerda e 2 para cima", "Reflexão no eixo x, 1 unidade para a direita e 2 para baixo", "Sem reflexão, 1 unidade para a direita e 2 para cima"];
    return {
      d: "media",
      e: "Em relação ao gráfico de y = f(x), como se obtém o gráfico de y = −f(x − 1) + 2?",
      o,
      x: "Lendo de dentro para fora: trocar x por x − 1 desloca o gráfico 1 unidade para a direita; o sinal de menos na frente de f reflete o gráfico no eixo x (os valores de y trocam de sinal); e somar 2 o desloca 2 unidades para cima. Com f(x) = x², por exemplo, a parábola de vértice (0, 0) voltada para cima vira −(x − 1)² + 2, com vértice (1, 2) e voltada para baixo.\n\nA reflexão no eixo y viria de trocar x por −x, dentro da função. “Para a esquerda” erra o sentido do deslocamento horizontal. “2 para baixo” erra o sentido do vertical. E o sinal de menos na frente de f produz, sim, uma reflexão.",
      /* com f(x) = x²: vértice e concavidade de −f(x − 1) + 2 */
      v: { i: () => { const f = (x) => x * x, g = (x) => -f(x - 1) + 2; const conc = g(1 + 0.5) + g(1 - 0.5) - 2 * g(1); const v = conc < 0 ? maximo(g, -10, 10) : minimo(g, -10, 10); const dx = Math.round(v.x), dy = Math.round(v.y); const texto = `${conc < 0 ? "Reflexão no eixo x" : "Sem reflexão"}, ${Math.abs(dx)} unidade para a ${dx > 0 ? "direita" : "esquerda"} e ${Math.abs(dy)} para ${dy > 0 ? "cima" : "baixo"}`; return unicoV(o.map((t) => t === texto)); } },
    };
  })(),
  (() => {
    const o = ["A(x) = 10x − x²", "A(x) = 20x − x²", "A(x) = x² − 10x", "A(x) = 10 − x", "A(x) = 20 − 2x"];
    return {
      d: "media",
      e: "Um retângulo tem perímetro 20. Se x é a medida de um dos seus lados, qual é a expressão da área do retângulo em função de x?",
      o,
      x: "Com perímetro 20, dois lados vizinhos somam metade disso: x + y = 10, e o outro lado mede y = 10 − x. A área é o produto dos lados: A(x) = x(10 − x) = 10x − x², válida para 0 < x < 10. Ela é máxima em x = 5, quando o retângulo é um quadrado.\n\n20x − x² usa o perímetro inteiro como soma de dois lados vizinhos. x² − 10x troca o sinal da expressão, e daria áreas negativas. 10 − x é a medida do outro lado, e não a área. E 20 − 2x é o dobro do outro lado.",
      /* para cada x, o outro lado sai da condição do perímetro (bisseção) */
      v: { i: () => { const area = (x) => x * bissecao((y) => 2 * x + 2 * y - 20, -100, 100); return qualFuncao(area, o, [0.7, 2.3, 4.1, 6.6, 9.2]); } },
    };
  })(),
  (() => {
    const o = ["ln 2 e ln 3", "2 e 3", "ln 5 e ln 6", "ln 6", "e² e e³"];
    return {
      d: "media",
      e: "Quais são as soluções reais da equação e^(2x) − 5eˣ + 6 = 0?",
      o,
      x: "Com y = eˣ, e e^(2x) = y², a equação fica y² − 5y + 6 = 0, de raízes y = 2 e y = 3. Como eˣ = 2 dá x = ln 2, e eˣ = 3 dá x = ln 3, as soluções são ln 2 ≅ 0,69 e ln 3 ≅ 1,10. As duas raízes de y são positivas, e por isso as duas servem.\n\n2 e 3 são os valores de eˣ, e não de x. ln 5 e ln 6 aplicam o logaritmo aos coeficientes da equação. ln 6 aplica o logaritmo ao produto das raízes. E e² e e³ exponenciam as raízes em vez de aplicar o logaritmo.",
      v: { i: () => { const r = zeros(lerF("e^(2x) − 5eˣ + 6"), -10, 10); return unicoV(o.map((t) => { const vs = t.split(" e ").map((p) => lerF(p)(0)); return vs.length === r.length && vs.every((v) => r.some((z) => Math.abs(z - v) < 1e-7)); })); } },
    };
  })(),
  (() => {
    const o = ["sen x", "cos x", "1", "tg x", "sen²x"];
    return {
      d: "media",
      e: "A que expressão é igual (1 − cos²x)/sen x, para os valores de x em que sen x ≠ 0?",
      o,
      x: "Pela identidade fundamental, sen²x + cos²x = 1, e então 1 − cos²x = sen²x. A expressão fica sen²x/sen x = sen x, sempre que sen x ≠ 0 (onde ela nem está definida). A identidade fundamental é o ponto de partida de quase todas as simplificações trigonométricas.\n\ncos x cancela o termo errado. 1 supõe que o numerador e o denominador sejam iguais. tg x divide por cos x num passo que não existe. E sen²x esquece de simplificar pelo sen x do denominador.",
      v: { i: () => qualFuncao(lerF("(1 − cos²x)/sen x"), o) },
    };
  })(),
  (() => {
    const o = ["9 horas", "8 horas", "24 horas", "7 horas", "3 horas"];
    return {
      d: "media",
      e: "Uma população de bactérias cresce segundo P(t) = 500 · 2^(t/3), com t em horas. Em quanto tempo ela chega a 4.000 bactérias?",
      o,
      x: "É preciso que 500 · 2^(t/3) = 4.000, isto é, 2^(t/3) = 8 = 2³. Igualando os expoentes, t/3 = 3, e t = 9 horas. A população dobra a cada 3 horas: 500, 1.000, 2.000, 4.000, em três duplicações.\n\n8 horas toma o fator de crescimento, 8, como tempo. 24 horas multiplica esse fator por 3, em vez de usar o expoente. 7 horas subtrai 1 de 8, tratando o crescimento como aditivo. E 3 horas é o tempo de uma única duplicação.",
      v: { i: () => qual(bissecao((t) => 500 * 2 ** (t / 3) - 4000, 0, 100), o.map((t) => t.replace(" horas", "")), 1e-9) },
    };
  })(),
  (() => {
    const o = ["1,08", "0,78", "1,44", "0,288", "0,96"];
    return {
      d: "media",
      e: "Com log 2 ≅ 0,30 e log 3 ≅ 0,48, qual é o valor aproximado de log 12?",
      o,
      x: "Como 12 = 2² · 3, as propriedades do logaritmo dão log 12 = 2 · log 2 + log 3 ≅ 2 · 0,30 + 0,48 = 1,08. Confere com a ordem de grandeza: 12 está entre 10 e 100, e o seu logaritmo decimal está entre 1 e 2.\n\n0,78 é log 2 + log 3 = log 6. 1,44 é 3 · log 3 = log 27. 0,288 multiplica os logaritmos, como se log(a · b) fosse log a · log b. E 0,96 é 2 · log 3 = log 9.",
      /* decomposição em fatores primos e soma dos logaritmos dados; confere com o valor real */
      v: { i: () => { let n = 12, s = 0; for (const [p, L] of [[2, 0.3], [3, 0.48]]) while (n % p === 0) { n /= p; s += L; } if (n !== 1 || Math.abs(s - Math.log10(12)) > 0.01) throw new Error("decomposição"); return qual(s, o); } },
    };
  })(),
  (() => {
    const o = ["π/2", "π/3", "7π/6", "2π/3", "π/6"];
    return {
      d: "media",
      e: "Qual é o valor de arcsen(1/2) + arccos(1/2), com os arcos tomados nos seus intervalos principais?",
      o,
      x: "arcsen(1/2) é o arco de [−π/2, π/2] cujo seno é 1/2: π/6. arccos(1/2) é o arco de [0, π] cujo cosseno é 1/2: π/3. A soma é π/6 + π/3 = π/2. Na verdade, arcsen x + arccos x = π/2 para todo x entre −1 e 1, porque os dois arcos são complementares.\n\nπ/3 e π/6 são as parcelas isoladas. 7π/6 usa 5π/6 como arco-seno, um arco com seno 1/2, mas fora do intervalo principal. E 2π/3 troca o arco-seno pelo arco-cosseno, somando π/3 com π/3.",
      v: { i: () => qual(Math.asin(0.5) + Math.acos(0.5), o) },
    };
  })(),
  (() => {
    const o = ["1, 2 e 3", "−1, −2 e −3", "1, 2 e −3", "2, 3 e 6", "1, 3 e 6"];
    return {
      d: "media",
      e: "Quais são as raízes reais do polinômio p(x) = x³ − 6x² + 11x − 6?",
      o,
      x: "A soma dos coeficientes é 1 − 6 + 11 − 6 = 0, e então x = 1 é raiz. Dividindo p(x) por (x − 1), sobra x² − 5x + 6 = (x − 2)(x − 3). As raízes são 1, 2 e 3; confere pelas relações de Girard: a soma é 6 e o produto é 6.\n\n−1, −2 e −3 trocam os sinais, como se o polinômio fosse (x + 1)(x + 2)(x + 3). “1, 2 e −3” erra o sinal de uma raiz. “2, 3 e 6” e “1, 3 e 6” incluem o 6, que é a soma (e também o produto) das raízes, e não uma delas: p(6) = 60.",
      v: { i: () => { const r = zeros(lerF("x³ − 6x² + 11x − 6"), -10, 10); return unicoV(o.map((t) => { const vs = t.split(/, | e /).map(num); return vs.length === r.length && vs.every((v) => r.some((z) => Math.abs(z - v) < 1e-7)); })); } },
    };
  })(),
  (() => {
    const o = ["x ≥ 2", "x ≥ 0", "Todos os reais", "x ≥ −2", "x ≤ 4"];
    return {
      d: "media",
      e: "A função f(x) = x² − 4x não é injetora em todos os reais. Em qual dos domínios a seguir ela passa a ter inversa?",
      o,
      x: "O gráfico é uma parábola com vértice em x = −b/(2a) = 2: ela decresce para x < 2 e cresce para x > 2. Restrita a x ≥ 2, é sempre crescente, e cada valor de y vem de um único x: passa a ser injetora e tem inversa, f⁻¹(x) = 2 + √(x + 4).\n\nx ≥ 0 ainda contém o vértice no interior: f(1) = f(3) = −3. “Todos os reais” contém os dois ramos. x ≥ −2 também contém o vértice. E x ≤ 4 idem: f(0) = f(4) = 0.",
      /* injetora = estritamente monótona nos pontos da malha que pertencem ao domínio */
      v: { i: () => { const f = lerF("x² − 4x"); return unicoV(o.map((t) => { const ys = malha.filter(lerCondicao(t)).map(f); const cresce = ys.every((y, k) => k === 0 || y > ys[k - 1]), decresce = ys.every((y, k) => k === 0 || y < ys[k - 1]); return cresce || decresce; })); } },
    };
  })(),
  (() => {
    const o = ["4", "8", "2", "6", "5"];
    return {
      d: "media",
      e: "Qual é a taxa de variação média da função f(x) = x² no intervalo [1, 3]?",
      o,
      x: "A taxa de variação média é a variação de f dividida pela variação de x: [f(3) − f(1)]/(3 − 1) = (9 − 1)/2 = 4. Geometricamente, é a inclinação da reta secante que liga os pontos (1, 1) e (3, 9) do gráfico.\n\n8 é a variação de f, sem dividir pela de x. 2 é a variação de x. 6 é a taxa instantânea em x = 3, f'(3) = 2 · 3. E 5 é a média dos valores de f, (9 + 1)/2, e não a taxa de variação.",
      /* média das taxas instantâneas no intervalo (integral da derivada numérica, dividida pelo comprimento) */
      v: { i: () => { const f = lerF("x²"); return qual(integra((x) => (f(x + 1e-4) - f(x - 1e-4)) / 2e-4, 1, 3, 200) / 2, o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["−1 < x < 4", "x < 4", "−4 < x < 1", "x < −1 ou x > 4", "−1 ≤ x ≤ 4"];
    return {
      d: "media",
      e: "Qual é o conjunto solução da inequação |2x − 3| < 5, nos números reais?",
      o,
      x: "|2x − 3| < 5 equivale a −5 < 2x − 3 < 5. Somando 3: −2 < 2x < 8; dividindo por 2: −1 < x < 4. Geometricamente, são os x para os quais 2x fica a uma distância menor que 5 do número 3.\n\n“x < 4” resolve só a desigualdade 2x − 3 < 5, esquecendo a outra metade. −4 < x < 1 erra o sinal do 3 ao isolar x. “x < −1 ou x > 4” é a solução de |2x − 3| > 5, a desigualdade contrária. E −1 ≤ x ≤ 4 inclui os extremos, em que |2x − 3| = 5, que não é menor que 5.",
      v: { i: () => { const f = lerF("|2x − 3|"); return unicoV(o.map((t) => malha.every((x) => lerCondicao(t)(x) === f(x) < 5))); } },
    };
  })(),
  (() => {
    const o = ["x ≥ 5", "x ≥ 0", "x ≥ −5", "Todos os reais", "x > 5"];
    return {
      d: "media",
      e: "Com f(x) = √x e g(x) = x − 5, qual é o domínio da função composta (f ∘ g)(x) = f(g(x))?",
      o,
      x: "A composta é f(g(x)) = √(x − 5). Para existir, o valor de g(x), que entra na raiz, precisa ser não negativo: x − 5 ≥ 0, ou x ≥ 5. O domínio da composta não é o de f nem o de g sozinhos: são os x do domínio de g cujo g(x) cai no domínio de f.\n\nx ≥ 0 é o domínio de f, aplicado diretamente a x. x ≥ −5 erra o sinal ao isolar x. “Todos os reais” é o domínio de g. E x > 5 exclui o 5, em que √0 = 0 existe.",
      v: { i: () => { const f = lerF("√x"), g = lerF("x − 5"); return qualDominio((x) => f(g(x)), o); } },
    };
  })(),
  (() => {
    const o = ["x = 3 e y = 2", "x = −3 e y = 2", "x = 3 e y = 1", "x = 2 e y = 3", "x = 3 e y = 0"];
    return {
      d: "media",
      e: "Quais são as assíntotas vertical e horizontal do gráfico de f(x) = (2x + 1)/(x − 3)?",
      o,
      x: "A assíntota vertical está onde o denominador se anula e o numerador não: x = 3, pois perto dele f cresce ou decresce sem limite (f(3,001) ≅ 7.000). A horizontal é o valor do qual f se aproxima quando x cresce: dividindo numerador e denominador por x, f(x) = (2 + 1/x)/(1 − 3/x), que tende a 2. A assíntota horizontal é y = 2.\n\nx = −3 erra o sinal do zero do denominador. y = 1 esquece o coeficiente 2 do numerador. “x = 2 e y = 3” troca os dois números. E y = 0 vale quando o grau do denominador é maior que o do numerador, o que não é o caso.",
      /* vertical: onde |f| explode com sinais opostos dos dois lados; horizontal: valor de f em x muito grande */
      v: { i: () => { const f = lerF("(2x + 1)/(x − 3)"); const cands = malha.filter((a) => Math.abs(f(a + 1e-7)) > 1e6 && Math.sign(f(a + 1e-7)) !== Math.sign(f(a - 1e-7))); const hy = f(1e9); return unicoV(o.map((t) => { const m = t.match(/^x = (.+) e y = (.+)$/); return cands.length === 1 && Math.abs(num(m[1]) - cands[0]) < 1e-9 && Math.abs(num(m[2]) - hy) < 1e-6; })); } },
    };
  })(),
  (() => {
    const o = ["x = 6", "x = 4", "x = 10", "x = 5", "x = 20"];
    return {
      d: "media",
      e: "Considerando só valores inteiros e positivos de x, a partir de que valor a potência 2ˣ passa a ser sempre maior que 10x?",
      o,
      x: "Comparando os valores: em x = 5, 2⁵ = 32 < 50; em x = 6, 2⁶ = 64 > 60. A partir daí, 2ˣ dobra a cada passo, enquanto 10x só aumenta 10, e a desigualdade continua valendo. O primeiro inteiro é x = 6: a exponencial acaba superando qualquer função linear.\n\nx = 4 dá 16 < 40. x = 5 dá 32 < 50, ainda menor. x = 10 é um valor em que 2ˣ = 1.024 já supera 100, mas não é o primeiro. E x = 20 também já passou há muito.",
      v: { i: () => { let x = 1; while (!Array.from({ length: 60 }, (_, k) => x + k).every((n) => 2 ** n > 10 * n)) x++; return qual(x, o); } },
    };
  })(),
  (() => {
    const o = ["15 anos", "40 anos", "20 anos", "8 anos", "10 anos"];
    return {
      d: "media",
      e: "Um capital aplicado a juros compostos dobra a cada 5 anos. Em quantos anos ele fica 8 vezes maior?",
      o,
      x: "Oito vezes é 2³: o capital precisa dobrar três vezes, e cada duplicação leva 5 anos. São 3 · 5 = 15 anos. Em fórmula, C(t) = C₀ · 2^(t/5), e 2^(t/5) = 8 dá t/5 = 3.\n\n40 anos multiplica o fator 8 pelos 5 anos, como se o crescimento fosse linear. 20 anos conta quatro duplicações, o que daria 16 vezes. 8 anos toma o fator como tempo. E 10 anos conta só duas duplicações, que dariam 4 vezes.",
      v: { i: () => qual(bissecao((t) => 2 ** (t / 5) - 8, 0, 100), o.map((t) => t.replace(" anos", "")), 1e-9) },
    };
  })(),
  (() => {
    const o = ["24/25", "3/5", "6/5", "7/25", "12/25"];
    return {
      d: "media",
      e: "Sabendo que tg x = 3/4 e que x está no primeiro quadrante, qual é o valor de sen 2x?",
      o,
      x: "Com tg x = 3/4, pode-se pensar num triângulo retângulo de catetos 3 e 4 e hipotenusa 5: sen x = 3/5 e cos x = 4/5. Pela fórmula do arco duplo, sen 2x = 2 sen x cos x = 2 · (3/5) · (4/5) = 24/25.\n\n3/5 é o próprio sen x. 6/5 é 2 sen x, esquecendo o cosseno, e passa de 1, o que é impossível para um seno. 7/25 é cos 2x = cos²x − sen²x. E 12/25 é sen x · cos x, sem o fator 2.",
      v: { i: () => qual(Math.sin(2 * Math.atan(3 / 4)), o) },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["2 + √(x + 3)", "2 − √(x + 3)", "√(x + 3) − 2", "2 + √(x − 1)", "(x − 1)/(x − 4)"];
    return {
      d: "dificil",
      e: "A função f(x) = x² − 4x + 1, restrita ao domínio x ≥ 2, é injetora. Qual é a expressão da sua inversa?",
      o,
      x: "Completando o quadrado, f(x) = (x − 2)² − 3. Escrevendo y = (x − 2)² − 3: (x − 2)² = y + 3 e, como x ≥ 2 faz x − 2 ≥ 0, só a raiz positiva serve: x − 2 = √(y + 3), x = 2 + √(y + 3). Trocando as variáveis, f⁻¹(x) = 2 + √(x + 3), definida para x ≥ −3, que é a imagem de f nesse domínio. Confere: f⁻¹(−3) = 2, o vértice.\n\n2 − √(x + 3) é a inversa do outro ramo, o de x ≤ 2. √(x + 3) − 2 erra o sinal do deslocamento. 2 + √(x − 1) usa o termo independente, 1, sem completar o quadrado. E (x − 1)/(x − 4) trata a função como se fosse uma razão de polinômios do primeiro grau.",
      /* f(g(x)) = x na imagem (x ≥ −3) e g(x) de volta no domínio restrito (x ≥ 2) */
      v: { i: () => { const f = lerF("x² − 4x + 1"), pts = [-2.6, -1.1, 0.4, 2.7, 6.3]; return unicoV(o.map((t) => { const g = lerF(t); return mesmaFuncao((x) => f(g(x)), (x) => x, pts) && pts.every((x) => g(x) >= 2); })); } },
    };
  })(),
  (() => {
    const o = ["x < −2 ou x ≥ 1", "x ≤ −2 ou x ≥ 1", "−2 < x ≤ 1", "x ≥ 1", "x > −2"];
    return {
      d: "dificil",
      e: "Em que conjunto de valores de x a expressão √((x − 1)/(x + 2)) representa um número real?",
      o,
      x: "É preciso que o quociente (x − 1)/(x + 2) seja maior ou igual a zero, com o denominador diferente de zero. O quociente é positivo quando numerador e denominador têm o mesmo sinal: ambos positivos (x > 1) ou ambos negativos (x < −2). Ele é zero em x = 1, que entra. Em x = −2, o denominador se anula, e o ponto fica de fora. O domínio é x < −2 ou x ≥ 1.\n\n“x ≤ −2 ou x ≥ 1” inclui o −2, que zera o denominador. −2 < x ≤ 1 é onde o quociente é negativo ou nulo, praticamente a condição contrária. “x ≥ 1” esquece o trecho em que os dois fatores são negativos. E “x > −2” só exclui a divisão por zero, esquecendo o sinal do radicando.",
      v: { i: () => qualDominio(lerF("√((x − 1)/(x + 2))"), o) },
    };
  })(),
  (() => {
    const o = ["0, 2π/3 e 4π/3", "2π/3 e 4π/3", "0 e π/3", "0, π/3 e 5π/3", "π, π/3 e 5π/3"];
    return {
      d: "dificil",
      e: "Considerando apenas os arcos com 0 ≤ x < 2π, que valores de x satisfazem 2 cos²x − cos x − 1 = 0?",
      o,
      x: "Com y = cos x, a equação fica 2y² − y − 1 = 0, de raízes y = 1 e y = −1/2. cos x = 1 dá x = 0 no intervalo. cos x = −1/2 dá os arcos do 2º e do 3º quadrantes com esse cosseno: x = 2π/3 e x = 4π/3. São três soluções: 0, 2π/3 e 4π/3.\n\n“2π/3 e 4π/3” esquece a raiz y = 1. “0 e π/3” usa cos x = 1/2 no lugar de −1/2, e ainda perde uma solução. “0, π/3 e 5π/3” troca o sinal da segunda raiz, resolvendo cos x = 1/2. E “π, π/3 e 5π/3” troca os sinais das duas raízes, resolvendo cos x = −1 e cos x = 1/2.",
      /* zeros em [0, 2π), sem o ponto de tangência que reaparece perto de 2π */
      v: { i: () => { const r = zeros(lerF("2 cos²x − cos x − 1"), 0, 2 * Math.PI).filter((z) => z < 2 * Math.PI - 1e-3); return unicoV(o.map((t) => { const vs = t.split(/, | e /).map(num); return vs.length === r.length && vs.every((v) => r.some((z) => Math.abs(z - v) < 1e-6)); })); } },
    };
  })(),
  (() => {
    const o = ["1 < x < 5", "x > 5", "x < 5", "1 < x < 3", "x > 1"];
    return {
      d: "dificil",
      e: "Qual é o conjunto solução da inequação log_(1/2)(x − 1) > −2, em que log_(1/2) indica o logaritmo na base 1/2?",
      o,
      x: "O domínio exige x − 1 > 0, isto é, x > 1. Como −2 = log_(1/2) 4 (porque (1/2)⁻² = 4), a inequação é log_(1/2)(x − 1) > log_(1/2) 4. Com base entre 0 e 1, o logaritmo é decrescente, e a desigualdade se inverte ao comparar os argumentos: x − 1 < 4, ou x < 5. Juntando com o domínio: 1 < x < 5.\n\n“x > 5” mantém o sentido da desigualdade, como se a base fosse maior que 1. “x < 5” esquece o domínio do logaritmo. 1 < x < 3 calcula (1/2)⁻² como 2, em vez de 4. E “x > 1” é só o domínio.",
      v: { i: () => { const f = (x) => Math.log(x - 1) / Math.log(1 / 2); return unicoV(o.map((t) => malha.every((x) => lerCondicao(t)(x) === (Number.isFinite(f(x)) && f(x) > -2)))); } },
    };
  })(),
  (() => {
    const o = ["g(x) = 3x − 2", "g(x) = 6x − 4", "g(x) = 3x + 2", "g(x) = 3x − 10", "g(x) = (6x − 1)/(2x + 3)"];
    return {
      d: "dificil",
      e: "Com f(x) = 2x + 3, qual é a função g para a qual (f ∘ g)(x) = 6x − 1, para todo x real?",
      o,
      x: "A composta é f(g(x)) = 2 · g(x) + 3, e ela deve valer 6x − 1: 2g(x) + 3 = 6x − 1, 2g(x) = 6x − 4, e g(x) = 3x − 2. Confere: f(3x − 2) = 2(3x − 2) + 3 = 6x − 1.\n\n6x − 4 esquece de dividir por 2, o coeficiente de f. 3x + 2 erra o sinal ao passar o 3 para o outro lado. 3x − 10 resolve g(f(x)) = 6x − 1, invertendo a ordem da composição. E (6x − 1)/(2x + 3) divide a composta por f, como se compor fosse multiplicar.",
      v: { i: () => { const f = lerF("2x + 3"); return unicoV(o.map((t) => { const g = lerF(t); return mesmaFuncao((x) => f(g(x)), lerF("6x − 1")); })); } },
    };
  })(),
  (() => {
    const o = ["√2", "2", "1", "√2/2", "π/4"];
    return {
      d: "dificil",
      e: "Qual é o valor máximo que a função f(x) = sen x + cos x assume, para x real?",
      o,
      x: "Escrevendo sen x + cos x = √2 · (sen x · √2/2 + cos x · √2/2) = √2 · sen(x + π/4), a função é um seno de amplitude √2, e o seu máximo é √2, atingido em x = π/4. O seno e o cosseno não chegam a 1 no mesmo ponto, e por isso o máximo não é 2.\n\n2 soma os máximos de cada parcela, como se ocorressem juntos. 1 é o máximo de cada parcela isolada. √2/2 é o valor de sen(π/4) e de cos(π/4), e não da soma. E π/4 é o ponto em que o máximo acontece, e não o valor máximo.",
      v: { i: () => qual(maximo(lerF("sen x + cos x"), 0, 2 * Math.PI).y, o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["log 3/(log 4 − log 3)", "log 3/(log 2 − log 3)", "log 4/log 3", "(log 4 − log 3)/log 3", "1"];
    return {
      d: "dificil",
      e: "Qual é a solução real da equação 3^(x + 1) = 2^(2x)?",
      o,
      x: "Aplicando o logaritmo decimal aos dois lados: (x + 1) log 3 = 2x log 2 = x log 4. Então x log 3 + log 3 = x log 4, e x(log 4 − log 3) = log 3, ou x = log 3/(log 4 − log 3) ≅ 3,82. Confere: 3^4,82 e 2^7,64 valem, os dois, cerca de 199.\n\nlog 3/(log 2 − log 3) esquece o 2 do expoente 2x, usando log 2 no lugar de log 4. log 4/log 3 iguala os expoentes como se as bases fossem iguais. (log 4 − log 3)/log 3 inverte a fração. E 1 não satisfaz a equação: 3² = 9, e 2² = 4.",
      v: { i: () => { const x = bissecao((t) => (t + 1) * Math.log(3) - 2 * t * Math.log(2), -10, 10); return unicoV(o.map((t) => Math.abs(lerF(t)(0) - x) < 1e-9)); } },
    };
  })(),
  (() => {
    const o = ["2", "10", "1/1.010", "1.010", "∛10"];
    return {
      d: "dificil",
      e: "A função f(x) = x³ + x é estritamente crescente e, portanto, inversível. Qual é o valor de f⁻¹(10)?",
      o,
      x: "f⁻¹(10) é o número x tal que f(x) = 10, isto é, x³ + x = 10. Testando valores inteiros: 2³ + 2 = 10. Então f⁻¹(10) = 2, e esse x é o único, porque f é estritamente crescente. Não é preciso achar a expressão da inversa para calcular um valor dela.\n\n10 confunde f⁻¹(10) com o próprio argumento. 1/1.010 é 1/f(10), o inverso multiplicativo do valor de f em 10. 1.010 é f(10), a função, e não a inversa. E ∛10 resolve x³ = 10, esquecendo o termo x.",
      v: { i: () => qual(bissecao((x) => x ** 3 + x - 10, -10, 10), o) },
    };
  })(),
  (() => {
    const o = ["x = 100 e y = 10", "x = 10 e y = 100", "x = 1.000 e y = 1", "x = 50 e y = 20", "x = 100 e y = 10, ou x = −10 e y = −100"];
    return {
      d: "dificil",
      e: "Quais são as soluções reais do sistema formado pelas equações log x + log y = 3 e x − y = 90, com logaritmos decimais?",
      o,
      x: "A primeira equação dá log(xy) = 3, ou xy = 1.000, com x > 0 e y > 0. Da segunda, x = y + 90; substituindo: (y + 90)y = 1.000, y² + 90y − 1.000 = 0, de raízes y = 10 e y = −100. Como y precisa ser positivo, y = 10 e x = 100. Confere: log 100 + log 10 = 2 + 1 = 3.\n\n“x = 10 e y = 100” troca os valores, e dá x − y = −90. “1.000 e 1” satisfaz xy = 1.000, mas não x − y = 90. “50 e 20” também satisfaz o produto, mas não a diferença. E a solução com números negativos não serve, porque o logaritmo de número negativo não existe.",
      /* raízes em y de (y + 90)y = 1.000, filtradas pelo domínio dos logaritmos */
      v: { i: () => { const ys = zeros((y) => (y + 90) * y - 1000, -200, 200).filter((y) => y > 0 && y + 90 > 0); const sols = ys.map((y) => [y + 90, y]).filter(([x, y]) => Math.abs(Math.log10(x) + Math.log10(y) - 3) < 1e-9); return unicoV(o.map((t) => { const pares = [...t.matchAll(/x = (−?[\d.]+) e y = (−?[\d.]+)/g)].map((m) => [num(m[1]), num(m[2])]); return pares.length === sols.length && pares.every(([a, b]) => sols.some(([x, y]) => Math.abs(a - x) < 1e-6 && Math.abs(b - y) < 1e-6)); })); } },
    };
  })(),
  (() => {
    const o = ["(eˣ + e^(−x))/2", "(eˣ − e^(−x))/2", "eˣ/2", "e^(x²)", "(eˣ + 1)/2"];
    return {
      d: "dificil",
      e: "Toda função f definida em todos os reais é a soma de uma parte par, P(x) = [f(x) + f(−x)]/2, e de uma parte ímpar. Qual é a parte par de f(x) = eˣ?",
      o,
      x: "Pela fórmula dada, P(x) = [eˣ + e^(−x)]/2, que é o cosseno hiperbólico, cosh x. Ela é par, porque trocar x por −x apenas troca as duas parcelas de lugar. A parte ímpar é I(x) = [eˣ − e^(−x)]/2, o seno hiperbólico, e P(x) + I(x) = eˣ.\n\n(eˣ − e^(−x))/2 é a parte ímpar. eˣ/2 é só metade da função, e não é par: e/2 ≠ e⁻¹/2. e^(x²) é par, mas não tem relação com a decomposição de eˣ. E (eˣ + 1)/2 usa f(0) = 1 no lugar de f(−x).",
      v: { i: () => { const f = Math.exp; return qualFuncao((x) => (f(x) + f(-x)) / 2, o); } },
    };
  })(),
];
