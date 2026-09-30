/* Rascunho — Cálculo I / Continuidade e teorema do valor intermediário.

   A conferência classifica o comportamento da função no ponto a partir dos
   limites laterais calculados numericamente (finitos e iguais, finitos e
   diferentes, infinitos) e do valor f(a); acha raízes e trocas de sinal
   por varredura e bisseção; e, nas afirmações gerais (definição de
   continuidade, TVI, ponto fixo), testa cada alternativa contra uma
   bateria de funções-exemplo cujo comportamento se conhece. */

import { unicoV, lerF, lerCondicao, limite, zeros, bissecao, malha } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Continuidade e teorema do valor intermediário";
export const arquivo = "calculo__continuidade-e-teorema-do-valor-intermediario";

const num = (t) => { const s = String(t).trim().replace(/^[a-z]\s*=\s*/, ""); if (/x/.test(s)) throw new Error("não é número"); return lerF(s)(0); };
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = num(t); } catch { return false; } return Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); }));
/* limite lateral (s = +1 direita, −1 esquerda), reconhecendo ±∞ */
const lado = (f, a, s) => {
  const v = [1e-4, 1e-6, 1e-8].map((h) => f(a + s * h));
  if (v.every((y) => y > 1e3) && v[2] > v[1] && v[1] > v[0]) return Infinity;
  if (v.every((y) => y < -1e3) && v[2] < v[1] && v[1] < v[0]) return -Infinity;
  return limite(f, a, s);
};
/* classificação no ponto a: "contínua", "removível", "salto" ou "infinita" */
const tipo = (f, a) => {
  const e = lado(f, a, -1), d = lado(f, a, 1), v = f(a);
  if (!Number.isFinite(e) || !Number.isFinite(d)) return "infinita";
  if (Math.abs(e - d) > 1e-6) return "salto";
  return Number.isFinite(v) && Math.abs(v - e) <= 1e-6 ? "contínua" : "removível";
};
/* sem saltos numa malha fina de [a, b] (continuidade observada numericamente) */
const semSaltos = (f, a, b, n = 20000) => { let ant = f(a); for (let k = 1; k <= n; k++) { const y = f(a + ((b - a) * k) / n); if (!Number.isFinite(y) || Math.abs(y - ant) > 1e-2) return false; ant = y; } return Number.isFinite(f(a)); };

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["f(a) existe, o limite de f(x) em a existe e os dois são iguais", "f(a) existe", "O limite de f(x) quando x tende a a existe", "f(a) existe e o limite de f(x) em a também existe", "f é derivável em a"];
    return {
      d: "facil",
      e: "Qual é a condição que define a continuidade de uma função f num ponto a do seu domínio?",
      o,
      x: "Uma função é contínua em a quando três coisas acontecem juntas: f(a) existe, o limite de f(x) quando x tende a a existe, e esse limite é igual a f(a). Em palavras: os valores de f perto de a se aproximam exatamente do valor em a, e o gráfico passa pelo ponto sem saltos nem buracos.\n\n“f(a) existe” sozinho não basta: uma função de salto tem valor no ponto. O limite existir também não basta: pode ser diferente de f(a), como num buraco preenchido em outro lugar. Os dois existirem sem serem iguais é o caso da descontinuidade removível. E ser derivável é mais do que ser contínua: |x| é contínua em 0, mas não derivável.",
      /* bateria de funções em a = 0, com a continuidade conhecida de antemão */
      v: { i: () => {
        const casos = [
          { f: (x) => x * x, continua: true },
          { f: Math.abs, continua: true },
          { f: (x) => (x < 0 ? -1 : 1), continua: false },
          { f: (x) => (x === 0 ? 5 : (x * x) / x), continua: false },
          { f: (x) => 1 / x, continua: false },
        ];
        const props = (f) => { const e = lado(f, 0, -1), d = lado(f, 0, 1), v = f(0); const existe = Number.isFinite(e) && Number.isFinite(d) && Math.abs(e - d) < 1e-6; const deriva = (() => { const q = (h) => (f(h) - f(0)) / h, de = limite(q, 0, -1), dd = limite(q, 0, 1); return Number.isFinite(v) && Number.isFinite(de) && Math.abs(de - dd) < 1e-4; })(); return { valor: Number.isFinite(v), existe, igual: existe && Number.isFinite(v) && Math.abs(v - e) < 1e-6, deriva }; };
        const criterio = [(p) => p.valor && p.existe && p.igual, (p) => p.valor, (p) => p.existe, (p) => p.valor && p.existe, (p) => p.deriva];
        return unicoV(criterio.map((c) => casos.every(({ f, continua }) => c(props(f)) === continua)));
      } },
    };
  })(),
  (() => {
    const o = ["x = 2", "x = −3", "x = 0", "x = 2 e x = −3", "Em nenhum ponto"];
    return {
      d: "facil",
      e: "Em que ponto a função f(x) = (x + 3)/(x − 2) é descontínua?",
      o,
      x: "Um quociente de polinômios é contínuo em todos os pontos em que o denominador não se anula. Aqui, x − 2 = 0 em x = 2, onde a função nem está definida (e cresce sem limite perto dele). Em qualquer outro ponto, f é contínua.\n\nx = −3 é onde o numerador se anula: ali f vale 0, o que não é descontinuidade nenhuma. x = 0 é um ponto comum, com f(0) = −3/2. “x = 2 e x = −3” junta o zero do denominador com o do numerador. E a função não é contínua em x = 2, porque nem existe ali.",
      v: { i: () => { const f = lerF("(x + 3)/(x − 2)"); const ruins = malha.filter((a) => tipo(f, a) !== "contínua"); return unicoV(o.map((t) => { if (/^Em nenhum/.test(t)) return ruins.length === 0; const vs = t.replace(/x = /g, "").split(" e ").map(num); return vs.length === ruins.length && vs.every((v) => ruins.some((r) => Math.abs(r - v) < 1e-9)); })); } },
    };
  })(),
  (() => {
    const o = ["Removível: o limite existe, mas é diferente de f(2)", "De salto: os limites laterais são diferentes", "Infinita: a função cresce sem limite perto de 2", "A função é contínua em 2", "Removível, porque f(2) não existe"];
    return {
      d: "facil",
      e: "A função f vale (x² − 4)/(x − 2) para x ≠ 2, e f(2) = 1. Que tipo de descontinuidade ela tem em x = 2?",
      o,
      x: "Para x ≠ 2, (x² − 4)/(x − 2) = x + 2, que tende a 4 quando x tende a 2, pelos dois lados. O limite existe e vale 4, mas f(2) foi definido como 1: os dois não coincidem. É uma descontinuidade removível: bastaria redefinir f(2) = 4 para a função ficar contínua.\n\nNão é de salto, porque os limites laterais são iguais (ambos 4). Não é infinita, porque a função fica perto de 4. Não é contínua, porque f(2) ≠ 4. E f(2) existe: vale 1, só que é o valor errado.",
      v: { i: () => { const f = (x) => (x === 2 ? 1 : (x * x - 4) / (x - 2)); const t = tipo(f, 2); return unicoV(o.map((_, i) => i === { removível: 0, salto: 1, infinita: 2, contínua: 3 }[t])); } },
    };
  })(),
  (() => {
    const o = ["k = 1", "k = 0", "k = π", "Nenhum valor de k", "k = −1"];
    return {
      d: "facil",
      e: "A função f vale sen x/x para x ≠ 0, e f(0) = k. Para que valor de k ela é contínua em x = 0?",
      o,
      x: "Para ser contínua em 0, f(0) precisa ser igual ao limite de f(x) quando x tende a 0. Pelo limite fundamental, sen x/x tende a 1. Então k = 1. Com esse valor, a função fica contínua em todos os reais.\n\nk = 0 usa sen 0 = 0, esquecendo que o denominador também se anula. k = π não tem relação com o limite em 0. “Nenhum valor” supõe que a divisão por zero impeça a continuidade, mas ela só impede a fórmula de ser usada em 0. E k = −1 erra o sinal do limite.",
      v: { i: () => unicoV(o.map((t) => { if (/^Nenhum/.test(t)) return false; const k = num(t); return tipo((x) => (x === 0 ? k : Math.sin(x) / x), 0) === "contínua"; })) },
    };
  })(),
  (() => {
    const o = ["Que f tem pelo menos uma raiz entre 0 e 1", "Que f tem exatamente duas raízes entre 0 e 1", "Que a raiz de f é x = 1/2", "Que f se anula em x = 0", "Nada, porque f(0) e f(1) têm sinais opostos"];
    return {
      d: "facil",
      e: "Para f(x) = x³ + x − 1, tem-se f(0) = −1 e f(1) = 1. O que o teorema do valor intermediário garante sobre f no intervalo [0, 1]?",
      o,
      x: "Um polinômio é contínuo, e f passa de −1 (negativo) para 1 (positivo) no intervalo. Pelo teorema do valor intermediário, assume todos os valores entre −1 e 1, inclusive o 0: existe pelo menos um c em (0, 1) com f(c) = 0. O teorema garante a existência, mas não diz onde está a raiz nem quantas são.\n\n“Exatamente duas” pede mais do que o teorema dá (e f, na verdade, tem uma só raiz ali). x = 1/2 não é raiz: f(1/2) = −3/8. f(0) = −1, e não 0. E os sinais opostos são justamente a hipótese que faz o teorema funcionar.",
      v: { i: () => { const f = lerF("x³ + x − 1"); const troca = f(0) * f(1) < 0 && semSaltos(f, 0, 1); const r = zeros(f, 0, 1); return unicoV([troca && r.length >= 1, r.length === 2, Math.abs(f(0.5)) < 1e-12, Math.abs(f(0)) < 1e-12, !troca]); } },
    };
  })(),
  (() => {
    const o = ["De salto", "Removível", "Infinita", "Não há descontinuidade", "Removível, com limite igual a 1,5"];
    return {
      d: "facil",
      e: "A função f vale 1 para x < 0 e 2 para x ≥ 0. Que tipo de descontinuidade ela tem em x = 0?",
      o,
      x: "Pela esquerda, f vale 1 e tende a 1; pela direita, vale 2 e tende a 2. Os limites laterais existem, são finitos e diferentes: o gráfico dá um salto de 1 unidade em x = 0. É uma descontinuidade de salto, que nenhuma redefinição de f(0) consegue eliminar.\n\n“Removível” exigiria limites laterais iguais. “Infinita” exigiria valores crescendo sem limite, e aqui a função é limitada. Há descontinuidade, porque o limite em 0 não existe. E 1,5 é a média dos laterais, que não é limite de lado nenhum.",
      v: { i: () => { const t = tipo((x) => (x < 0 ? 1 : 2), 0); return unicoV(o.map((_, i) => i === { salto: 0, removível: 1, infinita: 2, contínua: 3 }[t])); } },
    };
  })(),
  (() => {
    const o = ["x ≥ 1", "x > 1", "Todos os reais", "x ≥ 0", "x ≠ 1"];
    return {
      d: "facil",
      e: "Em que conjunto a função f(x) = √(x − 1) é contínua?",
      o,
      x: "A raiz quadrada é contínua em todo o seu domínio. O domínio de f exige x − 1 ≥ 0, isto é, x ≥ 1, e a função é contínua em todos esses pontos. Em x = 1, ela é contínua à direita: f(1) = 0, e f(x) tende a 0 quando x tende a 1 pela direita (à esquerda, f nem está definida).\n\n“x > 1” exclui o 1, onde a função existe e é contínua à direita. “Todos os reais” esquece o domínio. “x ≥ 0” usa o domínio de √x, sem o deslocamento. E “x ≠ 1” inclui números menores que 1, em que a raiz não existe.",
      /* pontos do domínio; em cada um, valores a 10⁻¹² de distância (dos lados em que f existe) ficam colados em f(a) */
      v: { i: () => { const f = lerF("√(x − 1)"); const pts = malha.filter((a) => Number.isFinite(f(a))); const perto = (a, h) => !Number.isFinite(f(a + h)) || Math.abs(f(a + h) - f(a)) < 1e-5; const ok = pts.every((a) => perto(a, 1e-12) && perto(a, -1e-12)); return unicoV(o.map((t) => ok && malha.every((a) => lerCondicao(t)(a) === Number.isFinite(f(a))))); } },
    };
  })(),
  (() => {
    const o = ["Em todos os reais", "Só para x ≥ 0", "Só para x ≠ 0", "Só no intervalo [−1, 1]", "Em nenhum ponto"];
    return {
      d: "facil",
      e: "Em que pontos a função f(x) = cos(x² + 1) é contínua?",
      o,
      x: "A função é a composta do cosseno, contínuo em todos os reais, com o polinômio x² + 1, também contínuo em todos os reais. A composta de funções contínuas é contínua: f é contínua em todos os reais, sem exceção.\n\n“Só para x ≥ 0” e “só para x ≠ 0” inventam restrições que nenhuma das duas funções tem. O intervalo [−1, 1] é a imagem do cosseno, e não o conjunto em que ele é contínuo. E “em nenhum ponto” contradiz a continuidade das duas funções que compõem f.",
      v: { i: () => { const ok = semSaltos(lerF("cos(x² + 1)"), -10, 10, 200000); return unicoV(o.map((_, i) => i === (ok ? 0 : 4))); } },
    };
  })(),
  (() => {
    const o = ["0", "6", "−3", "10", "−5"];
    return {
      d: "facil",
      e: "Uma função f é contínua em [1, 3], com f(1) = −2 e f(3) = 5. Qual dos valores a seguir ela assume, com certeza, em algum ponto do intervalo (1, 3)?",
      o,
      x: "Pelo teorema do valor intermediário, uma função contínua em [1, 3] assume todos os valores entre f(1) = −2 e f(3) = 5. Entre as alternativas, só o 0 está entre −2 e 5: existe algum c em (1, 3) com f(c) = 0.\n\n6 e 10 estão acima de 5, e −3 e −5 estão abaixo de −2. A função até pode atingir esses valores (nada impede que ela suba além de 5 no meio do caminho), mas o teorema não garante: uma função crescente de −2 a 5, por exemplo, nunca passaria por eles.",
      v: { i: () => unicoV(o.map((t) => { const v = num(t); return v > -2 && v < 5; })) },
    };
  })(),
  (() => {
    const o = ["Nos números inteiros", "Só em x = 0", "Em nenhum ponto", "Nos números não inteiros", "Em todos os pontos"];
    return {
      d: "facil",
      e: "A função ⌊x⌋ dá o maior inteiro menor ou igual a x. Em quais pontos ela é descontínua?",
      o,
      x: "Entre dois inteiros consecutivos, ⌊x⌋ é constante: vale 1 em [1, 2), 2 em [2, 3), e assim por diante. Em cada inteiro n, o limite pela esquerda é n − 1, e o pela direita é n: o gráfico sobe um degrau. Então ⌊x⌋ é descontínua (com salto) em todos os inteiros, e contínua em todos os outros pontos.\n\n“Só em x = 0” esquece que o degrau se repete em todo inteiro. “Em nenhum ponto” ignora os degraus. Nos não inteiros a função é constante perto do ponto, e portanto contínua. E ela não é descontínua em todos os pontos, só nos degraus.",
      v: { i: () => { const f = (x) => Math.floor(x); const pts = [-2.5, -2, -1, -0.3, 0, 0.5, 1, 1.7, 2, 3.2]; const desc = pts.filter((a) => tipo(f, a) !== "contínua"); const soInteiros = desc.every(Number.isInteger) && pts.filter(Number.isInteger).every((a) => desc.includes(a)); return unicoV(o.map((_, i) => i === (soInteiros ? 0 : 4))); } },
    };
  })(),
  (() => {
    const o = ["Infinita", "Removível", "De salto", "É contínua em 0", "Removível, com limite 0"];
    return {
      d: "facil",
      e: "Que tipo de descontinuidade a função f(x) = 1/x² tem em x = 0?",
      o,
      x: "Perto de 0, pelos dois lados, 1/x² cresce sem limite: os limites laterais são +∞. Quando a função explode perto do ponto, a descontinuidade é infinita, e a reta x = 0 é uma assíntota vertical. Nenhum valor atribuído a f(0) torna a função contínua.\n\n“Removível” exigiria um limite finito. “De salto” exigiria limites laterais finitos e diferentes. f não é contínua em 0, onde nem está definida. E o limite não é 0: é o denominador que tende a 0, e o quociente cresce.",
      v: { i: () => { const t = tipo(lerF("1/x²"), 0); return unicoV(o.map((_, i) => i === { infinita: 0, removível: 1, salto: 2, contínua: 3 }[t])); } },
    };
  })(),
  (() => {
    const o = ["Em todos os reais", "Para x ≠ ±1", "Para x ≠ 0", "Para x ≠ −1", "Só para x > 0"];
    return {
      d: "facil",
      e: "Em que conjunto a função f(x) = x/(x² + 1) é contínua?",
      o,
      x: "Um quociente de polinômios é contínuo onde o denominador não se anula. Como x² + 1 ≥ 1 para todo x real, o denominador nunca é zero, e f é contínua em todos os reais.\n\nx ≠ ±1 resolve x² − 1 = 0, com o sinal trocado: são os zeros de x² − 1, e não de x² + 1. x ≠ 0 exclui o zero do numerador, que não causa problema nenhum (f(0) = 0). x ≠ −1 também confunde o denominador. E “só para x > 0” inventa uma restrição inexistente.",
      v: { i: () => { const f = lerF("x/(x² + 1)"); const todos = malha.every((a) => tipo(f, a) === "contínua"); return unicoV(o.map((_, i) => i === (todos ? 0 : 1))); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["k = 1", "k = 5", "k = −1", "k = 3", "Nenhum valor de k"];
    return {
      d: "media",
      e: "A função f vale x² + k para x ≤ 2 e 3x − 1 para x > 2. Para que valor de k ela é contínua em todos os reais?",
      o,
      x: "Cada trecho é um polinômio, contínuo no seu intervalo; o único ponto a verificar é a junção, x = 2. Pela esquerda (e em x = 2), f vale 2² + k = 4 + k. Pela direita, 3x − 1 tende a 5. A continuidade exige 4 + k = 5, e k = 1.\n\nk = 5 iguala k ao valor da direita, esquecendo o 4 que vem de x². k = −1 erra o sinal ao isolar k. k = 3 usa x no lugar de x² no primeiro trecho, fazendo 2 + k = 5. E existe, sim, um valor de k: a condição é uma única equação do primeiro grau.",
      v: { i: () => unicoV(o.map((t) => { if (/^Nenhum/.test(t)) return false; const k = num(t); return tipo((x) => (x <= 2 ? x * x + k : 3 * x - 1), 2) === "contínua"; })) },
    };
  })(),
  (() => {
    const o = ["a = 7/2 e b = −3/2", "a = 3 e b = −1", "a = 7/2 e b = 3/2", "a = 2 e b = 0", "a = 1 e b = 1"];
    return {
      d: "media",
      e: "A função f vale x + 1 para x < 1, ax + b para 1 ≤ x < 3, e x² para x ≥ 3. Para que valores de a e b ela é contínua em todos os reais?",
      o,
      x: "Há duas junções. Em x = 1, o trecho da esquerda tende a 1 + 1 = 2, e o do meio vale a + b: a + b = 2. Em x = 3, o do meio tende a 3a + b, e o da direita vale 3² = 9: 3a + b = 9. Subtraindo as equações, 2a = 7, a = 7/2, e b = 2 − 7/2 = −3/2.\n\n“a = 3 e b = −1” satisfaz a primeira junção, mas dá 3a + b = 8 na segunda. “a = 7/2 e b = 3/2” erra o sinal de b. “a = 2 e b = 0” satisfaz só a primeira junção. E “a = 1 e b = 1” também: dá 4 em x = 3, e não 9.",
      v: { i: () => unicoV(o.map((t) => { const m = t.match(/^a = (.+) e b = (.+)$/); const a = num(m[1]), b = num(m[2]); const f = (x) => (x < 1 ? x + 1 : x < 3 ? a * x + b : x * x); return tipo(f, 1) === "contínua" && tipo(f, 3) === "contínua"; })) },
    };
  })(),
  (() => {
    const o = ["1", "0", "3", "−1", "Nenhum, porque a descontinuidade é infinita"];
    return {
      d: "media",
      e: "A função f(x) = (x² − 5x + 6)/(x − 3) não está definida em x = 3. Que valor deve ser atribuído a f(3) para torná-la contínua nesse ponto?",
      o,
      x: "Fatorando o numerador pelas raízes 2 e 3: x² − 5x + 6 = (x − 2)(x − 3). Para x ≠ 3, f(x) = x − 2, que tende a 1 quando x tende a 3. A descontinuidade é removível, e definir f(3) = 1 a torna contínua.\n\n0 toma o numerador nulo como resultado. 3 é o próprio ponto. −1 é o valor de x − 2 em x = 1, e não em x = 3. E a descontinuidade não é infinita, porque o fator (x − 3) se cancela, e a função fica perto de 1.",
      v: { i: () => { const f = lerF("(x² − 5x + 6)/(x − 3)"), L = limite(f, 3); return unicoV(o.map((t) => (/^Nenhum/.test(t) ? !Number.isFinite(L) : Math.abs(num(t) - L) < 1e-6))); } },
    };
  })(),
  (() => {
    const o = ["[2; 2,5]", "[2,5; 3]", "[2; 3]", "[1; 2]", "[2,25; 2,5]"];
    return {
      d: "media",
      e: "A equação x³ − 2x − 5 = 0 tem uma raiz no intervalo [2, 3], porque f(2) = −1 e f(3) = 16. Depois de um passo do método da bisseção, em que intervalo a raiz fica localizada?",
      o,
      x: "O método da bisseção divide o intervalo ao meio e fica com a metade em que há troca de sinal. No ponto médio, f(2,5) = 15,625 − 5 − 5 = 5,625, positivo. Como f(2) = −1 é negativo, a troca de sinal acontece entre 2 e 2,5: a raiz está em [2; 2,5].\n\n[2,5; 3] fica com a metade em que f é positiva nos dois extremos (5,625 e 16), sem troca de sinal. [2; 3] é o intervalo original, antes do passo. [1; 2] sai do intervalo em que a raiz foi garantida. E [2,25; 2,5] já é o resultado do segundo passo, e não do primeiro.",
      /* um passo da bisseção, feito em código */
      v: { i: () => { const f = lerF("x³ − 2x − 5"); let [a, b] = [2, 3]; const m = (a + b) / 2; if (f(a) * f(m) <= 0) b = m; else a = m; return unicoV(o.map((t) => { const [p, q] = t.slice(1, -1).split("; ").map(num); return Math.abs(p - a) < 1e-12 && Math.abs(q - b) < 1e-12; })); } },
    };
  })(),
  (() => {
    const o = ["3", "1", "2", "0", "4"];
    return {
      d: "media",
      e: "Para f(x) = x³ − 3x + 1, tem-se f(−2) = −1, f(0) = 1, f(1) = −1 e f(2) = 3. Quantas raízes reais o teorema do valor intermediário garante, no mínimo, a partir desses valores?",
      o,
      x: "Cada troca de sinal entre pontos consecutivos garante uma raiz no intervalo entre eles: de −1 para 1 em (−2, 0), de 1 para −1 em (0, 1) e de −1 para 3 em (1, 2). São três intervalos disjuntos, e portanto pelo menos três raízes. Como o polinômio tem grau 3, são exatamente três.\n\n1 considera só a troca entre os extremos, −2 e 2. 2 esquece uma das trocas. 0 supõe que o teorema só se aplique quando algum f(a) já é zero. E 4 é impossível para um polinômio de grau 3, que tem no máximo três raízes.",
      /* trocas de sinal entre os pontos dados, conferidas pela contagem numérica de raízes */
      v: { i: () => { const f = lerF("x³ − 3x + 1"), xs = [-2, 0, 1, 2]; const trocas = xs.slice(1).filter((x, k) => f(x) * f(xs[k]) < 0).length; if (zeros(f, -2, 2).length !== trocas) throw new Error("contagem"); return qual(trocas, o); } },
    };
  })(),
  (() => {
    const o = ["Descontinuidade de salto, com limites laterais −1 e 1", "Descontinuidade removível", "Descontinuidade infinita", "Contínua, porque f(0) = 0 é a média dos limites laterais", "Descontinuidade de salto, com limites laterais 0 e 1"];
    return {
      d: "media",
      e: "A função f vale |x|/x para x ≠ 0, e f(0) = 0. Como se classifica o seu comportamento em x = 0?",
      o,
      x: "Para x > 0, |x|/x = 1; para x < 0, |x|/x = −1. Os limites laterais são −1 (esquerda) e 1 (direita): finitos e diferentes. É uma descontinuidade de salto, e o valor atribuído a f(0) não muda isso.\n\n“Removível” exigiria limites laterais iguais. “Infinita” exigiria valores crescendo sem limite. Ser a média dos laterais não torna a função contínua: seria preciso que os dois laterais fossem iguais a f(0). E o limite pela esquerda é −1, e não 0.",
      v: { i: () => { const f = (x) => (x === 0 ? 0 : Math.abs(x) / x), t = tipo(f, 0), e = lado(f, 0, -1), d = lado(f, 0, 1); return unicoV(o.map((txt, i) => { if (i === 0) return t === "salto" && Math.abs(e + 1) < 1e-9 && Math.abs(d - 1) < 1e-9; if (i === 4) return t === "salto" && Math.abs(e) < 1e-9 && Math.abs(d - 1) < 1e-9; return { 1: "removível", 2: "infinita", 3: "contínua" }[i] === t; })); } },
    };
  })(),
  (() => {
    const o = ["Porque g(x) = cos x − x é contínua e troca de sinal no intervalo", "Porque cos 0 = 1 e cos(π/2) = 0", "Porque toda equação trigonométrica tem solução", "Porque x = π/4 é solução", "Porque cos x e x são iguais em x = 0"];
    return {
      d: "media",
      e: "Por que a equação cos x = x tem pelo menos uma solução entre 0 e π/2?",
      o,
      x: "Considere g(x) = cos x − x, contínua por ser diferença de funções contínuas. g(0) = 1 − 0 = 1 > 0 e g(π/2) = 0 − π/2 < 0. Pelo teorema do valor intermediário, g se anula em algum ponto entre 0 e π/2, e nesse ponto cos x = x (a solução é x ≅ 0,739).\n\ncos 0 = 1 e cos(π/2) = 0 são valores do cosseno sozinho, sem compará-lo com x. Nem toda equação trigonométrica tem solução: cos x = 2 não tem. π/4 não é solução: cos(π/4) ≅ 0,707, e π/4 ≅ 0,785. E em x = 0, cos 0 = 1 ≠ 0.",
      /* a troca de sinal de g e a falsidade das outras justificativas, testadas em código */
      v: { i: () => { const g = lerF("cos x − x"); const troca = g(0) * g(Math.PI / 2) < 0 && semSaltos(g, 0, Math.PI / 2); const semSolucao = zeros(lerF("cos x − 2"), 0, 2 * Math.PI).length === 0; return unicoV([troca, false, !semSolucao, Math.abs(g(Math.PI / 4)) < 1e-9, Math.abs(g(0)) < 1e-9]); } },
    };
  })(),
  (() => {
    const o = ["π/2 e 3π/2", "π/2", "π e 3π/2", "π", "π/4 e 3π/4"];
    return {
      d: "media",
      e: "Em quais pontos do intervalo aberto (0, 2π) a função tg x é descontínua?",
      o,
      x: "tg x = sen x/cos x é contínua onde o cosseno não se anula. No intervalo (0, 2π), cos x = 0 em x = π/2 e em x = 3π/2, e aí a tangente tem descontinuidades infinitas (assíntotas verticais). Em todos os outros pontos, é contínua.\n\n“Só π/2” esquece o zero do cosseno no 3º quadrante. π é um zero do seno, em que a tangente vale 0 e é contínua; por isso “π e 3π/2” e “π” erram. E π/4 e 3π/4 são pontos em que a tangente vale 1 e −1, sem problema algum.",
      /* varredura fina: centros dos trechos em que |tg x| passa de 10⁴ */
      v: { i: () => { const f = lerF("tg x"), pts = []; for (let x = 0.01; x < 2 * Math.PI - 0.01; x += 1e-5) if (Math.abs(f(x)) > 1e4) pts.push(x); const grupos = []; for (const p of pts) { const g = grupos[grupos.length - 1]; if (g && p - g[g.length - 1] < 1e-3) g.push(p); else grupos.push([p]); } const c = grupos.map((g) => (g[0] + g[g.length - 1]) / 2); return unicoV(o.map((t) => { const vs = t.split(" e ").map(num); return vs.length === c.length && vs.every((v) => c.some((z) => Math.abs(z - v) < 1e-3)); })); } },
    };
  })(),
  (() => {
    const o = ["Sim: o limite em 0 vale 2, igual a f(0)", "Não: o limite em 0 vale 1", "Não: sen(2x)/x não está definida em 0", "Não: o limite em 0 vale 0", "Sim: o limite em 0 vale 1, próximo de f(0)"];
    return {
      d: "media",
      e: "A função f vale sen(2x)/x para x ≠ 0, e f(0) = 2. Ela é contínua em x = 0?",
      o,
      x: "Escrevendo sen(2x)/x = 2 · sen(2x)/(2x), o limite quando x tende a 0 é 2 · 1 = 2, que coincide com f(0) = 2. A função é contínua em 0: o valor escolhido para f(0) foi exatamente o limite.\n\n1 aplica o limite fundamental sem ajustar o argumento 2x. A expressão sen(2x)/x não está definida em 0, mas f está, porque f(0) foi definido à parte. 0 toma o numerador nulo como resultado. E continuidade exige igualdade, e não proximidade: um limite 1 com f(0) = 2 seria uma descontinuidade.",
      v: { i: () => { const f = (x) => (x === 0 ? 2 : Math.sin(2 * x) / x), L = limite(f, 0), t = tipo(f, 0); return unicoV(o.map((txt) => { const m = txt.match(/vale (\d)/); const v = m ? Number(m[1]) : null; if (/^Sim/.test(txt)) return t === "contínua" && Math.abs(L - v) < 1e-6; if (m) return t !== "contínua" && Math.abs(L - v) < 1e-6; return false; })); } },
    };
  })(),
  (() => {
    const o = ["1 < x ≤ 5", "1 ≤ x ≤ 5", "x > 1", "x ≤ 5", "1 < x < 5"];
    return {
      d: "media",
      e: "Em que conjunto a função f(x) = ln(x − 1) + √(5 − x) é contínua?",
      o,
      x: "As duas parcelas são contínuas nos seus domínios, e a soma é contínua onde as duas existem. O logaritmo exige x − 1 > 0 (x > 1), e a raiz exige 5 − x ≥ 0 (x ≤ 5). Juntando: 1 < x ≤ 5. Em x = 5, a raiz vale 0 e a função existe, contínua à esquerda.\n\n“1 ≤ x ≤ 5” inclui o 1, em que ln 0 não existe. “x > 1” esquece a raiz. “x ≤ 5” esquece o logaritmo. E “1 < x < 5” exclui o 5, em que a função existe.",
      v: { i: () => { const f = lerF("ln(x − 1) + √(5 − x)"); const pts = malha.filter((a) => Number.isFinite(f(a))); const perto = (a, h) => !Number.isFinite(f(a + h)) || Math.abs(f(a + h) - f(a)) < 1e-5; const ok = pts.every((a) => perto(a, 1e-12) && perto(a, -1e-12)); return unicoV(o.map((t) => ok && malha.every((a) => lerCondicao(t)(a) === Number.isFinite(f(a))))); } },
    };
  })(),
  (() => {
    const o = ["f(x) = 2", "f(x) = 4", "f(x) = −2", "f(x) = 5", "f(x) = −3"];
    return {
      d: "media",
      e: "Uma função f é contínua em [0, 4], com f(0) = 3 e f(4) = −1. Qual das equações a seguir certamente tem solução no intervalo (0, 4)?",
      o,
      x: "Pelo teorema do valor intermediário, f assume todos os valores entre −1 e 3 em algum ponto de (0, 4). Entre as alternativas, só o 2 está entre −1 e 3: a equação f(x) = 2 tem, com certeza, pelo menos uma solução.\n\n4 e 5 estão acima de 3, e −2 e −3 estão abaixo de −1. A função pode até atingir esses valores, se oscilar no meio do caminho, mas o teorema não garante: uma função que decresce de 3 a −1, por exemplo, nunca passa por eles.",
      /* a função linear de 3 a −1 é um exemplo contínuo com essas extremidades: só os valores garantidos aparecem nela */
      v: { i: () => { const f = (x) => 3 - x; return unicoV(o.map((t) => { const c = num(t.replace("f(x) = ", "")); return c > -1 && c < 3 && zeros((x) => f(x) - c, 0, 4).length > 0; })); } },
    };
  })(),
  (() => {
    const o = ["Tem um salto: tende a 1 pela esquerda e a 0 pela direita", "Tem descontinuidade removível: os dois limites laterais valem 1/2", "Tem descontinuidade infinita", "Tem um salto: tende a 0 pela esquerda e a 1 pela direita", "É contínua em 0"];
    return {
      d: "media",
      e: "Como se comporta a função f(x) = 1/(1 + e^(1/x)) perto de x = 0?",
      o,
      x: "Pela direita, 1/x tende a +∞, e^(1/x) cresce sem limite, e f tende a 0. Pela esquerda, 1/x tende a −∞, e^(1/x) tende a 0, e f tende a 1/(1 + 0) = 1. Os limites laterais são finitos e diferentes: é uma descontinuidade de salto.\n\n1/2 é o valor que se obteria usando e⁰ = 1, como se 1/x tendesse a 0. A descontinuidade não é infinita: f fica sempre entre 0 e 1. O salto com 0 à esquerda e 1 à direita troca os lados. E a função não é contínua, porque os laterais diferem.",
      /* valores a 10⁻² e 10⁻³ de cada lado */
      v: { i: () => { const f = lerF("1/(1 + e^(1/x))"); const esq = [-1e-2, -1e-3].map(f), dir = [1e-2, 1e-3].map(f); const e = Math.abs(esq[1] - 1) < 1e-12 ? 1 : NaN, d = Math.abs(dir[1]) < 1e-12 ? 0 : NaN; return unicoV(o.map((_, i) => i === (e === 1 && d === 0 ? 0 : e === 0 && d === 1 ? 3 : 4))); } },
    };
  })(),
  (() => {
    const o = ["Sim: pelo teorema do confronto, o limite em 0 vale 0 = f(0)", "Não: sen(1/x) oscila, e o limite não existe", "Não: a expressão não está definida em 0", "Sim: porque sen(1/x) vale 0 em x = 0", "Não: o limite em 0 vale 1"];
    return {
      d: "media",
      e: "A função f vale x · sen(1/x) para x ≠ 0, e f(0) = 0. Ela é contínua em x = 0?",
      o,
      x: "Como |sen(1/x)| ≤ 1, temos −|x| ≤ x sen(1/x) ≤ |x|. Os dois lados tendem a 0 e, pelo teorema do confronto, x sen(1/x) também tende a 0. O limite coincide com f(0) = 0: a função é contínua em 0, apesar das oscilações.\n\nA oscilação de sen(1/x) é amortecida pelo fator x, e o limite existe. A expressão não está definida em 0, mas f está, porque f(0) foi definido à parte. sen(1/x) nem existe em x = 0. E 1 é o limite de x sen(1/x) quando x tende ao infinito, e não a 0.",
      /* maior |f| em vizinhanças cada vez menores de 0 */
      v: { i: () => { const f = (x) => (x === 0 ? 0 : x * Math.sin(1 / x)); const faixa = (h) => Math.max(...Array.from({ length: 4000 }, (_, k) => Math.abs(f(-h + (2 * h * (k + 0.5)) / 4000)))); const ok = faixa(1e-3) <= 1e-3 && faixa(1e-6) <= 1e-6; return unicoV(o.map((_, i) => i === (ok ? 0 : 1))); } },
    };
  })(),
  (() => {
    const o = ["Porque f não é contínua em [−1, 1]: não está definida em x = 0", "Porque f(−1) e f(1) têm sinais opostos", "Porque f é uma função ímpar", "Porque o intervalo [−1, 1] é simétrico", "Contradiz: pelo teorema, 1/x deveria ter uma raiz em (−1, 1)"];
    return {
      d: "media",
      e: "A função f(x) = 1/x tem f(−1) = −1 e f(1) = 1, mas não tem raiz nenhuma. Por que isso não contradiz o teorema do valor intermediário?",
      o,
      x: "O teorema exige que a função seja contínua em todo o intervalo fechado [a, b]. 1/x não está definida em x = 0, que pertence a [−1, 1], e perto de 0 salta de −∞ para +∞. Sem a hipótese de continuidade, a conclusão não vale, e não há contradição.\n\nOs sinais opostos são justamente a hipótese que o teorema usa, e não a causa do problema. Ser ímpar ou o intervalo ser simétrico não tem relação com o teorema: x³ também é ímpar, no mesmo intervalo, e tem raiz. E não há contradição, porque falta uma das hipóteses.",
      /* 1/x sem raízes e com descontinuidade infinita em 0; x³, ímpar no mesmo intervalo, tem raiz */
      v: { i: () => { const f = lerF("1/x"); const semRaiz = zeros(f, -1, -1e-9).length + zeros(f, 1e-9, 1).length === 0; const desc = tipo(f, 0) === "infinita"; const x3 = zeros(lerF("x³"), -1, 1).length > 0; return unicoV([semRaiz && desc, false, !x3, !x3, !semRaiz]); } },
    };
  })(),
  (() => {
    const o = ["7", "100", "10", "6", "50"];
    return {
      d: "media",
      e: "O método da bisseção começa num intervalo de comprimento 1 que contém uma raiz, e cada passo divide o intervalo ao meio. Quantos passos, no mínimo, garantem um intervalo de comprimento menor que 0,01?",
      o,
      x: "Depois de n passos, o comprimento é 1/2ⁿ. É preciso 1/2ⁿ < 0,01, isto é, 2ⁿ > 100. Como 2⁶ = 64 e 2⁷ = 128, o menor n é 7. A precisão melhora depressa: cada passo ganha um fator 2, e cada três passos, quase um fator 10.\n\n100 divide o intervalo em 100 partes, como se cada passo reduzisse o comprimento em 0,01. 10 corresponde a 2¹⁰ = 1.024, mais passos do que o necessário. 6 dá 1/64 ≅ 0,0156, ainda maior que 0,01. E 50 é metade de 100, sem relação com a bisseção.",
      v: { i: () => { let n = 0, c = 1; while (c >= 0.01) { c /= 2; n++; } return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["c = 12", "c = 0", "c = 4", "c = 8", "c = 3"];
    return {
      d: "media",
      e: "A função f vale (x³ − 8)/(x − 2) para x ≠ 2, e f(2) = c. Para que valor de c a função é contínua em todos os reais?",
      o,
      x: "Fatorando a diferença de cubos: x³ − 8 = (x − 2)(x² + 2x + 4). Para x ≠ 2, f(x) = x² + 2x + 4, que tende a 4 + 4 + 4 = 12 quando x tende a 2. A função é contínua em 2 se c = 12, e em todos os outros pontos ela já é contínua.\n\n0 toma o numerador nulo como resultado. 4 usa só o termo x² do fator. 8 é o número subtraído de x³. E 3 é o expoente de x³, e não o valor do limite.",
      v: { i: () => unicoV(o.map((t) => { const c = num(t); return tipo((x) => (x === 2 ? c : (x ** 3 - 8) / (x - 2)), 2) === "contínua"; })) },
    };
  })(),
  (() => {
    const o = ["Existe c em [0, 1] com f(c) = c", "f é crescente em todo o intervalo [0, 1]", "f(0) = 0 e f(1) = 1", "f tem pelo menos uma raiz em [0, 1]", "f(1/2) = 1/2, no ponto médio"];
    return {
      d: "media",
      e: "Uma função f é contínua em [0, 1] e só assume valores em [0, 1]. O que se pode garantir sobre ela?",
      o,
      x: "Considere g(x) = f(x) − x, contínua. Em x = 0, g(0) = f(0) ≥ 0; em x = 1, g(1) = f(1) − 1 ≤ 0. Se algum desses valores for zero, o ponto procurado é o extremo; senão, g troca de sinal e, pelo teorema do valor intermediário, se anula em algum c: f(c) = c. É o teorema do ponto fixo em dimensão 1.\n\nf não precisa ser crescente: f(x) = 1 − x é decrescente e satisfaz as hipóteses. f(0) pode ser diferente de 0: f(x) = (x + 1)/2 tem f(0) = 1/2. Essa mesma função nunca se anula, e por isso a raiz não é garantida. E o ponto fixo não precisa ser 1/2: para (x + 1)/2, ele é x = 1.",
      /* bateria de funções contínuas de [0, 1] em [0, 1]: cada afirmação precisa valer em todas */
      v: { i: () => {
        const bateria = ["1 − x", "(x + 1)/2", "x²", "0,5 + 0,4 sen(5x)", "0,9 cos x"].map(lerF);
        const pts = Array.from({ length: 101 }, (_, k) => k / 100);
        const afirma = [
          (f) => zeros((x) => f(x) - x, 0, 1).length > 0,
          (f) => pts.every((x, k) => k === 0 || f(x) >= f(pts[k - 1])),
          (f) => Math.abs(f(0)) < 1e-12 && Math.abs(f(1) - 1) < 1e-12,
          (f) => zeros(f, 0, 1).length > 0,
          (f) => Math.abs(f(0.5) - 0.5) < 1e-12,
        ];
        return unicoV(afirma.map((a) => bateria.every(a)));
      } },
    };
  })(),
  (() => {
    const o = ["Removível em x = 1 e infinita em x = 2", "Infinitas em x = 1 e em x = 2", "Removíveis em x = 1 e em x = 2", "Infinita em x = 1 e removível em x = 2", "Só uma, infinita, em x = 2"];
    return {
      d: "media",
      e: "Onde a função f(x) = (x − 1)/(x² − 3x + 2) é descontínua, e de que tipo são as descontinuidades?",
      o,
      x: "O denominador se fatora como (x − 1)(x − 2), e a função não está definida em x = 1 nem em x = 2. Para x ≠ 1, f(x) = 1/(x − 2). Em x = 1, o limite existe e vale 1/(1 − 2) = −1: a descontinuidade é removível. Em x = 2, f cresce sem limite: a descontinuidade é infinita.\n\n“Infinitas nos dois pontos” não nota que o fator (x − 1) se cancela. “Removíveis nos dois” esquece que, em x = 2, o denominador continua se anulando depois da simplificação. A inversão dos tipos troca os dois pontos. E há duas descontinuidades: a de x = 1 existe, mesmo sendo removível, porque f(1) não está definido.",
      v: { i: () => { const f = lerF("(x − 1)/(x² − 3x + 2)"), t1 = tipo(f, 1), t2 = tipo(f, 2); return unicoV([t1 === "removível" && t2 === "infinita", t1 === "infinita" && t2 === "infinita", t1 === "removível" && t2 === "removível", t1 === "infinita" && t2 === "removível", t1 === "contínua" && t2 === "infinita"]); } },
    };
  })(),
  (() => {
    const o = ["Sim: pela direita, √x tende a 0, que é f(0)", "Não, porque o limite pela esquerda não existe", "Não, porque em x = 0 a raiz vale zero", "Sim, e o limite pela esquerda também vale 0", "Não, porque a raiz quadrada não é contínua"];
    return {
      d: "media",
      e: "A função f(x) = √x é contínua em x = 0, que é o extremo do seu domínio?",
      o,
      x: "Num extremo do domínio, a continuidade se verifica pelo único lado que existe. Pela direita, √x tende a √0 = 0, que é igual a f(0): f é contínua à direita em 0, e isso basta para dizer que ela é contínua em todo o seu domínio, [0, +∞).\n\nO limite pela esquerda não existe porque f nem está definida para x < 0, e isso não é exigido num extremo do domínio. A raiz valer zero em x = 0 é justamente o que torna f(0) igual ao limite. Pela esquerda não há limite nenhum para valer 0. E a raiz quadrada é contínua em todo o seu domínio.",
      v: { i: () => { const f = lerF("√x"); const dir = Math.abs(f(1e-12) - f(0)) < 1e-5, esqExiste = Number.isFinite(f(-1e-12)); return unicoV(o.map((_, i) => i === (dir && !esqExiste ? 0 : dir ? 3 : 1))); } },
    };
  })(),
  (() => {
    const o = ["(1, 2)", "(0, 1)", "(2, 3)", "(−1, 0)", "(3, 4)"];
    return {
      d: "media",
      e: "Para p(x) = x⁴ − 3x − 2, em qual dos intervalos o teorema do valor intermediário garante uma raiz positiva?",
      o,
      x: "Basta procurar um intervalo de números positivos em que p troque de sinal. p(1) = 1 − 3 − 2 = −4 e p(2) = 16 − 6 − 2 = 8: há troca de sinal em (1, 2), e p, contínua, tem ali uma raiz positiva.\n\nEm (0, 1), p(0) = −2 e p(1) = −4 não trocam de sinal. Em (2, 3) e (3, 4), p é positivo nos extremos (8, 70 e 242). E em (−1, 0), p(−1) = 2 e p(0) = −2 trocam de sinal, mas a raiz garantida ali é negativa.",
      v: { i: () => { const p = lerF("x⁴ − 3x − 2"); return unicoV(o.map((t) => { const [a, b] = t.slice(1, -1).split(", ").map(num); return a >= 0 && p(a) * p(b) < 0; })); } },
    };
  })(),
  (() => {
    const o = ["Pode ser contínuo ou não, dependendo das funções", "É sempre descontínuo em a, como a função h", "É sempre contínuo em a, por causa de f", "É contínuo em a só quando f(a) ≠ 0", "Não está definido no ponto a"];
    return {
      d: "media",
      e: "Se f é contínua num ponto a e h é descontínua em a, o que se pode dizer do produto g(x) = f(x) · h(x) nesse ponto?",
      o,
      x: "Não há regra geral. Com f(x) = x e h(x) = 1 para x ≥ 0 e −1 para x < 0, o produto é |x|, contínuo em 0: o fator f, que se anula em 0, amortece o salto de h. Já com f(x) = 1, o produto é o próprio h, descontínuo. A conclusão depende das funções.\n\n“Sempre descontínuo” é desmentido pelo primeiro exemplo. “Sempre contínuo”, pelo segundo. “Só se f(a) ≠ 0” inverte a situação: é justamente f(a) = 0 que permite a continuidade no primeiro exemplo. E o produto está definido em a sempre que f e h estiverem.",
      /* dois exemplos em a = 0 */
      v: { i: () => { const h = (x) => (x >= 0 ? 1 : -1); const c1 = tipo((x) => x * h(x), 0) === "contínua", c2 = tipo((x) => 1 * h(x), 0) === "contínua"; return unicoV([c1 !== c2, !c1 && !c2, c1 && c2, false, false]); } },
    };
  })(),
  (() => {
    const o = ["Sim, sempre: a diferença entre as posições nos dois dias troca de sinal", "Só se ela andar com a mesma velocidade nos dois dias", "Não, em geral", "Só se o caminho for reto", "Sim, exatamente às 9 h"];
    return {
      d: "media",
      e: "Uma pessoa sobe uma montanha num dia, das 6 h às 12 h, e desce no dia seguinte pelo mesmo caminho, também das 6 h às 12 h, com velocidades que variam. Existe algum horário em que ela esteve exatamente no mesmo ponto do caminho nos dois dias?",
      o,
      x: "Sejam s(t) a posição ao subir e d(t) a posição ao descer, medidas ao longo do caminho, ambas contínuas no tempo. A diferença D(t) = s(t) − d(t) começa negativa às 6 h (s na base, d no topo) e termina positiva às 12 h (s no topo, d na base). Pelo teorema do valor intermediário, D se anula em algum horário: nesse instante, as posições coincidem.\n\nA velocidade não importa: o argumento só usa a continuidade. “Não, em geral” contradiz o teorema. O formato do caminho também não importa, porque as posições são medidas ao longo dele. E o horário exato depende das velocidades: 9 h só por coincidência.",
      /* pares de percursos (tempo de 0 a 1, posição de 0 a 1) com ritmos diferentes */
      v: { i: () => { const sobe = ["x²", "√x", "(1 − cos(π · x))/2"].map(lerF), desce = ["1 − x³", "1 − √x", "(1 + cos(π · x))/2"].map(lerF); const pares = sobe.flatMap((s) => desce.map((d) => (t) => s(t) - d(t))); const sempre = pares.every((D) => zeros(D, 0, 1).length > 0); const nove = pares.every((D) => Math.abs(D(0.5)) < 1e-9); return unicoV([sempre, false, !sempre, false, nove]); } },
    };
  })(),
  (() => {
    const o = ["cos 1", "1", "0", "sen 1", "Não existe"];
    return {
      d: "media",
      e: "Usando a continuidade do cosseno, qual é o limite de cos(sen x/x) quando x tende a 0?",
      o,
      x: "Como o cosseno é contínuo, o limite pode entrar na função: lim cos(sen x/x) = cos(lim sen x/x) = cos 1 ≅ 0,54. É a propriedade das funções contínuas: o limite da composta é a função aplicada ao limite do argumento.\n\n1 é o valor de cos 0, como se o argumento tendesse a 0. 0 toma sen 0 = 0 sem considerar o quociente. sen 1 troca o cosseno pelo seno. E o limite existe, porque o argumento tem limite e o cosseno é contínuo.",
      v: { i: () => { const L = limite(lerF("cos(sen x/x)"), 0); return unicoV(o.map((t) => (/^Não existe/.test(t) ? !Number.isFinite(L) : Math.abs(num(t) - L) < 1e-6))); } },
    };
  })(),
  (() => {
    const o = ["Sim: os dois trechos valem 3 na junção, x = 2", "Não: há um salto em x = 2", "Não: é descontínua em x = 1", "Não: os limites laterais em 2 são 3 e 4", "Não: funções definidas por partes são sempre descontínuas"];
    return {
      d: "media",
      e: "A função f vale x² − 1 para x < 2 e 2x − 1 para x ≥ 2. Ela é contínua em todos os reais?",
      o,
      x: "Cada trecho é um polinômio, contínuo no seu intervalo; basta verificar a junção. Pela esquerda, x² − 1 tende a 4 − 1 = 3; pela direita (e em x = 2), 2x − 1 vale 3. Os três valores coincidem, e f é contínua em x = 2 e, portanto, em todos os reais.\n\nNão há salto, porque os dois trechos se encontram no mesmo valor. x = 1 é só uma raiz de x² − 1, e não uma descontinuidade. O limite pela direita é 3, e não 4. E funções definidas por partes podem ser contínuas, como esta.",
      v: { i: () => { const f = (x) => (x < 2 ? x * x - 1 : 2 * x - 1); const ok = malha.every((a) => tipo(f, a) === "contínua"); return unicoV(o.map((_, i) => i === (ok ? 0 : 1))); } },
    };
  })(),
  (() => {
    const o = ["Não tem limite em 0: sen(1/x) oscila entre −1 e 1", "Tem descontinuidade removível em x = 0", "Tem descontinuidade de salto em x = 0", "Tem descontinuidade infinita em x = 0", "É contínua, porque f(0) = 0"];
    return {
      d: "media",
      e: "A função f vale sen(1/x) para x ≠ 0, e f(0) = 0. O que acontece com ela perto de x = 0?",
      o,
      x: "Quando x se aproxima de 0, 1/x cresce sem limite, e sen(1/x) percorre todos os valores entre −1 e 1 infinitas vezes, em intervalos cada vez menores. Não se aproxima de valor nenhum, e o limite não existe, nem de um lado só. A descontinuidade não é de nenhum dos tipos clássicos: é uma descontinuidade essencial, por oscilação.\n\n“Removível” exigiria um limite. “Salto” exigiria limites laterais, ainda que diferentes. “Infinita” exigiria valores crescendo sem limite, e aqui a função fica entre −1 e 1. E f(0) = 0 não basta: seria preciso que o limite existisse e valesse 0.",
      /* em vizinhanças cada vez menores, à direita de 0, a função ainda passa perto de 1 e de −1 */
      v: { i: () => { const f = (x) => Math.sin(1 / x); const amplitude = (h) => { const ys = Array.from({ length: 20000 }, (_, k) => f((h * (k + 1)) / 20000)); return Math.max(...ys) - Math.min(...ys); }; const oscila = amplitude(1e-3) > 1.99 && amplitude(1e-6) > 1.99; return unicoV(o.map((_, i) => i === (oscila ? 0 : 4))); } },
    };
  })(),
  (() => {
    const o = ["(0, 1)", "(1, 2)", "(−1, 0)", "(2, 3)", "(−2, −1)"];
    return {
      d: "media",
      e: "Em qual intervalo a equação eˣ = 3 − x tem uma solução, segundo o teorema do valor intermediário?",
      o,
      x: "Escrevendo g(x) = eˣ + x − 3, contínua, a equação é g(x) = 0. g(0) = 1 + 0 − 3 = −2 e g(1) = e + 1 − 3 ≅ 0,72: há troca de sinal, e uma solução em (0, 1) (é x ≅ 0,79).\n\nEm (1, 2), g é positiva nos dois extremos (0,72 e 6,39). Em (−1, 0) e em (−2, −1), g é negativa nos dois extremos. E em (2, 3), g é positiva nos extremos, e crescente, sem zero nenhum.",
      v: { i: () => { const g = lerF("eˣ + x − 3"); return unicoV(o.map((t) => { const [a, b] = t.slice(1, -1).split(", ").map(num); return g(a) * g(b) < 0; })); } },
    };
  })(),
  (() => {
    const o = ["Que, em algum instante entre 6 h e 14 h, a temperatura foi exatamente 20 °C", "Que a temperatura subiu 1,75 °C por hora", "Que a temperatura máxima do período foi 26 °C", "Que às 10 h a temperatura era de 19 °C", "Nada, porque a temperatura pode ter caído em algum momento"];
    return {
      d: "media",
      e: "Às 6 h, a temperatura numa cidade era de 12 °C, e às 14 h, de 26 °C. Supondo que ela varie continuamente, o que o teorema do valor intermediário garante?",
      o,
      x: "Uma função contínua assume todos os valores entre os seus valores nos extremos do intervalo. Como 20 °C está entre 12 °C e 26 °C, em algum instante a temperatura foi exatamente 20 °C, qualquer que tenha sido a sua variação no meio do caminho.\n\n1,75 °C por hora é a taxa média (14 °C em 8 h), e não um ritmo garantido a cada hora. A temperatura pode ter passado de 26 °C antes de descer até esse valor. 19 °C às 10 h é o que daria um aumento linear, que o teorema não garante. E quedas intermediárias não atrapalham: o teorema só exige continuidade.",
      /* curvas contínuas de 12 °C (t = 0) a 26 °C (t = 8): linear, com pico acima de 26 e com queda no meio */
      v: { i: () => { const curvas = ["12 + 1,75x", "12 + 1,75x + 6 sen(π · x/8)", "12 + 1,75x − 6 sen(π · x/8)"].map(lerF); const max = (f) => Math.max(...Array.from({ length: 801 }, (_, k) => f(k / 100))); return unicoV([curvas.every((T) => zeros((t) => T(t) - 20, 0, 8).length > 0), curvas.every((T) => Math.abs(T(1) - T(0) - 1.75) < 1e-9 && Math.abs(T(5) - T(4) - 1.75) < 1e-9), curvas.every((T) => Math.abs(max(T) - 26) < 1e-6), curvas.every((T) => Math.abs(T(4) - 19) < 1e-9), false]); } },
    };
  })(),
  (() => {
    const o = ["Nenhum valor de k", "k = 2", "k = 1", "k = 0", "Qualquer valor de k"];
    return {
      d: "media",
      e: "A função f vale kx² para x ≤ 1 e 2x + k para x > 1. Para que valor de k ela é contínua em x = 1?",
      o,
      x: "Pela esquerda (e em x = 1), f vale k · 1² = k. Pela direita, 2x + k tende a 2 + k. A continuidade exigiria k = 2 + k, isto é, 0 = 2, o que é impossível. Para qualquer k, os dois trechos diferem por 2 na junção: há sempre um salto de 2 unidades.\n\nk = 2, k = 1 e k = 0 deixam, todos, o mesmo salto de 2 entre os trechos. E “qualquer valor” inverte a conclusão: nenhum valor serve, porque o k aparece dos dois lados e se cancela.",
      /* salto medido para vários valores de k */
      v: { i: () => { const salta = (k) => tipo((x) => (x <= 1 ? k * x * x : 2 * x + k), 1) !== "contínua"; const ks = [-3, -1, 0, 0.5, 1, 2, 5]; const nunca = ks.every(salta), sempre = ks.every((k) => !salta(k)); return unicoV(o.map((t, i) => (i === 0 ? nunca : i === 4 ? sempre : !salta(num(t))))); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["Exatamente uma", "Nenhuma", "Três", "Cinco", "Duas"];
    return {
      d: "dificil",
      e: "Quantas raízes reais tem a equação x⁵ + x − 1 = 0?",
      o,
      x: "Existência: f(x) = x⁵ + x − 1 é contínua, com f(0) = −1 e f(1) = 1; pelo teorema do valor intermediário, há ao menos uma raiz em (0, 1). Unicidade: f é estritamente crescente, porque x⁵ e x são crescentes, e a soma de funções crescentes é crescente; uma função estritamente crescente cruza o zero no máximo uma vez. Há, portanto, exatamente uma raiz real (x ≅ 0,755).\n\n“Nenhuma” contradiz a troca de sinal entre 0 e 1. Três e cinco confundem o grau do polinômio, que limita o número de raízes, com o número de raízes reais: as outras quatro são complexas. E duas é impossível para uma função estritamente crescente.",
      v: { i: () => { const n = zeros(lerF("x⁵ + x − 1"), -10, 10).length; return unicoV(o.map((t) => ({ "Exatamente uma": 1, Nenhuma: 0, Três: 3, Cinco: 5, Duas: 2 }[t] === n))); } },
    };
  })(),
  (() => {
    const o = ["a = 3 e b = −1", "a = 3 e b = 1", "a = 1 e b = 0", "a = −3 e b = −1", "a = 2 e b = −1"];
    return {
      d: "dificil",
      e: "Considere f(x) = (x² − ax + 2)/(x − 1) para x ≠ 1, com f(1) = b. Quais valores das constantes a e b eliminam a descontinuidade em x = 1?",
      o,
      x: "Como o denominador se anula em x = 1, o limite só pode ser finito se o numerador também se anular ali: 1 − a + 2 = 0, e a = 3. Com a = 3, x² − 3x + 2 = (x − 1)(x − 2), e f(x) = x − 2 para x ≠ 1, que tende a −1. Para a continuidade, b = −1.\n\n“a = 3 e b = 1” erra o sinal do limite. “a = 1 e b = 0” não anula o numerador em x = 1, e o limite nem existe. “a = −3” erra o sinal ao resolver 3 − a = 0. E “a = 2” também não anula o numerador: dá 1 − 2 + 2 = 1.",
      v: { i: () => unicoV(o.map((t) => { const m = t.match(/^a = (.+) e b = (.+)$/); const a = num(m[1]), b = num(m[2]); return tipo((x) => (x === 1 ? b : (x * x - a * x + 2) / (x - 1)), 1) === "contínua"; })) },
    };
  })(),
  (() => {
    const o = ["10", "1.000", "3", "9", "20"];
    return {
      d: "dificil",
      e: "Pelo método da bisseção, partindo do intervalo [1, 2], quantos passos, no mínimo, garantem que a raiz de uma função contínua fique localizada num intervalo de comprimento menor que 10⁻³?",
      o,
      x: "A cada passo, o comprimento do intervalo cai à metade: depois de n passos, é 1/2ⁿ. É preciso 1/2ⁿ < 10⁻³, isto é, 2ⁿ > 1.000. Como 2⁹ = 512 e 2¹⁰ = 1.024, bastam 10 passos. Por isso se diz que a bisseção ganha cerca de três casas decimais a cada 10 passos.\n\n1.000 imagina que cada passo reduza o intervalo em 10⁻³. 3 confunde o expoente de 10⁻³ com o número de passos. 9 dá 1/512 ≅ 0,002, ainda maior que 10⁻³. E 20 é o dobro do necessário.",
      v: { i: () => { let n = 0, c = 1; while (c >= 1e-3) { c /= 2; n++; } return qual(n, o); } },
    };
  })(),
  (() => {
    const o = ["Sim, sempre existe", "Só se f for derivável", "Nunca existe", "Só se f for constante", "Só se f(1/2) = f(0)"];
    return {
      d: "dificil",
      e: "Uma função f é contínua em [0, 1], com f(0) = f(1). Existe, necessariamente, um ponto x em [0, 1/2] com f(x) = f(x + 1/2)?",
      o,
      x: "Considere g(x) = f(x + 1/2) − f(x), contínua em [0, 1/2]. Então g(0) = f(1/2) − f(0) e g(1/2) = f(1) − f(1/2) = f(0) − f(1/2) = −g(0). Os valores de g nos extremos são opostos: ou os dois são zero, ou têm sinais contrários e, pelo teorema do valor intermediário, g se anula em algum ponto. Nesse ponto, f(x) = f(x + 1/2): há sempre uma corda horizontal de comprimento 1/2 no gráfico.\n\nDerivabilidade não é necessária: o argumento só usa continuidade. “Nunca existe” contradiz o argumento. Não é preciso que f seja constante: sen(2πx), por exemplo, serve. E f(1/2) = f(0) é só o caso em que o ponto procurado é o próprio x = 0.",
      /* bateria de funções contínuas com f(0) = f(1), inclusive uma não derivável (a "tenda") */
      v: { i: () => { const bateria = ["sen(2π · x)", "x(1 − x)", "sen(2π · x) + 0,3 sen(6π · x)", "0,5 − |x − 0,5|", "x(1 − x)(1 + 2x)"].map(lerF); const sempre = bateria.every((f) => Math.abs(f(0) - f(1)) < 1e-12 && zeros((x) => f(x + 0.5) - f(x), 0, 0.5).length > 0); return unicoV([sempre, false, !sempre, false, false]); } },
    };
  })(),
  (() => {
    const o = ["Nos inteiros, e as descontinuidades são removíveis", "Nos inteiros, e as descontinuidades são de salto", "Em nenhum ponto", "Nos números que não são inteiros", "Só em x = 0"];
    return {
      d: "dificil",
      e: "Sendo ⌊x⌋ o maior inteiro menor ou igual a x, onde a função f(x) = ⌊x⌋ + ⌊−x⌋ é descontínua, e de que tipo são as descontinuidades?",
      o,
      x: "Se x é inteiro, ⌊x⌋ = x e ⌊−x⌋ = −x, e f(x) = 0. Se x não é inteiro, ⌊−x⌋ = −⌊x⌋ − 1, e f(x) = −1. A função vale −1 em quase todos os pontos e 0 nos inteiros. Em cada inteiro, os dois limites laterais são −1, iguais entre si, mas diferentes do valor 0: são descontinuidades removíveis.\n\nNão há salto: os laterais coincidem, porque os saltos de ⌊x⌋ e de ⌊−x⌋ se compensam. A função não é contínua nos inteiros, onde vale 0 em vez de −1. Nos não inteiros, ela é constante perto do ponto, e contínua. E x = 0 é só um dos inteiros.",
      v: { i: () => { const f = (x) => Math.floor(x) + Math.floor(-x); const inteiros = [-2, -1, 0, 1, 3].map((a) => tipo(f, a)), outros = [-1.5, -0.2, 0.7, 2.4].map((a) => tipo(f, a)); const rem = inteiros.every((t) => t === "removível"), sal = inteiros.every((t) => t === "salto"), cont = outros.every((t) => t === "contínua"); return unicoV([rem && cont, sal && cont, inteiros.every((t) => t === "contínua"), !cont, false]); } },
    };
  })(),
  (() => {
    const o = ["a = 3", "a = 1", "a = ln 3", "a = e³", "a = 1/3"];
    return {
      d: "dificil",
      e: "A função f vale (e^(ax) − 1)/x para x ≠ 0, e f(0) = 3. Para que valor da constante a ela é contínua em x = 0?",
      o,
      x: "Escrevendo (e^(ax) − 1)/x = a · (e^(ax) − 1)/(ax), o fator (eᵘ − 1)/u, com u = ax, tende a 1, e o limite é a. Para a continuidade em 0, o limite precisa valer f(0) = 3: a = 3.\n\na = 1 usa o limite fundamental sem o fator a. ln 3 e e³ misturam a exponencial com o valor 3, como se fosse preciso resolver eᵃ = 3 ou tomar a = e³. E a = 1/3 inverte a relação.",
      v: { i: () => unicoV(o.map((t) => { const a = num(t); return tipo((x) => (x === 0 ? 3 : (Math.exp(a * x) - 1) / x), 0) === "contínua"; })) },
    };
  })(),
  (() => {
    const o = ["Os limites em +∞ e em −∞ têm sinais opostos, e o polinômio é contínuo", "O teorema fundamental da álgebra garante uma raiz real", "O termo independente é sempre uma raiz", "Polinômios de grau ímpar são sempre crescentes", "A soma dos coeficientes é sempre zero"];
    return {
      d: "dificil",
      e: "Todo polinômio de grau ímpar, com coeficientes reais, tem pelo menos uma raiz real. Qual é o argumento que justifica isso?",
      o,
      x: "Num polinômio de grau ímpar, o termo de maior grau domina quando x cresce em módulo, e ele tem sinais opostos em +∞ e em −∞ (x³, por exemplo, vai a +∞ e a −∞). Então o polinômio assume valores positivos e negativos, e, por ser contínuo, o teorema do valor intermediário garante um zero entre eles.\n\nO teorema fundamental da álgebra garante raízes complexas, não necessariamente reais: x² + 1 não tem raiz real. O termo independente não é raiz: em x³ + x + 1, com termo independente 1, p(1) = 3. Polinômios de grau ímpar não precisam ser crescentes: x³ − 3x sobe, desce e volta a subir. E a soma dos coeficientes só é zero quando x = 1 é raiz, o que não é regra.",
      /* bateria de polinômios de grau ímpar e contraexemplos para as outras justificativas */
      v: { i: () => { const impares = ["x³ + x + 1", "−x⁵ + 3x² − 2", "x³ − 6x² + 11x − 6", "2x⁷ − x + 5"].map(lerF); const argumento = impares.every((p) => p(1e3) * p(-1e3) < 0 && zeros(p, -50, 50).length > 0); const tfaReal = zeros(lerF("x² + 1"), -50, 50).length > 0; const p = lerF("x³ + x + 1"), q = lerF("x³ − 3x"); const cresce = Array.from({ length: 41 }, (_, k) => -2 + k / 10).every((x, k, xs) => k === 0 || q(x) > q(xs[k - 1])); return unicoV([argumento, tfaReal, Math.abs(p(1)) < 1e-12, cresce, Math.abs(p(1)) < 1e-12]); } },
    };
  })(),
  (() => {
    const o = ["(1,5; 2)", "(1; 1,5)", "(2; 2,5)", "(0,5; 1)", "(2,5; 3)"];
    return {
      d: "dificil",
      e: "A equação ln x + x − 2 = 0 tem uma única raiz. Em qual intervalo de comprimento 0,5 ela está?",
      o,
      x: "g(x) = ln x + x − 2 é contínua e crescente para x > 0. Calculando: g(1) = 0 + 1 − 2 = −1; g(1,5) = ln 1,5 − 0,5 ≅ 0,405 − 0,5 = −0,095; g(2) = ln 2 ≅ 0,693. A troca de sinal acontece entre 1,5 e 2, e a raiz está em (1,5; 2) (é x ≅ 1,557).\n\nEm (1; 1,5), g é negativa nos dois extremos (−1 e −0,095). Em (2; 2,5) e em (2,5; 3), g já é positiva. E em (0,5; 1), g(0,5) = ln 0,5 − 1,5 ≅ −2,19 e g(1) = −1, ambos negativos.",
      v: { i: () => { const g = lerF("ln x + x − 2"); return unicoV(o.map((t) => { const [a, b] = t.slice(1, -1).split("; ").map(num); return g(a) * g(b) < 0; })); } },
    };
  })(),
  (() => {
    const o = ["Não: f pode saltar entre valores opostos, como −1 e 1", "Sim, sempre", "Sim, desde que f(a) ≥ 0", "Não, e |f| também deixa de ser contínua", "Só se f for um polinômio"];
    return {
      d: "dificil",
      e: "Se o módulo |f| de uma função é contínuo num ponto a, a própria f é necessariamente contínua em a?",
      o,
      x: "Não. Um contraexemplo: f(x) = 1 para x ≥ 0 e f(x) = −1 para x < 0. f tem um salto em 0, mas |f(x)| = 1 para todo x, uma função constante e, portanto, contínua. O módulo apaga a diferença de sinal que causava o salto. A recíproca vale: se f é contínua, |f| também é.\n\n“Sim, sempre” é desmentido pelo contraexemplo. f(a) ≥ 0 também não salva: no exemplo, f(0) = 1 ≥ 0, e f continua descontínua. No exemplo, |f| é contínua, e não deixa de ser. E polinômios são sempre contínuos, o que torna a condição irrelevante.",
      v: { i: () => { const f = (x) => (x >= 0 ? 1 : -1); const modContinuo = tipo((x) => Math.abs(f(x)), 0) === "contínua", fDescont = tipo(f, 0) !== "contínua"; return unicoV([modContinuo && fDescont, !fDescont, !(fDescont && f(0) >= 0), !modContinuo, false]); } },
    };
  })(),
  (() => {
    const o = ["f(x) = 1/x em (0, 1]", "f(x) = x² em [−1, 2]", "f(x) = sen x em [0, π]", "f(x) = eˣ em [0, 1]", "f(x) = |x| em [−3, 3]"];
    return {
      d: "dificil",
      e: "Qual das funções a seguir, no intervalo indicado, não atinge um valor máximo?",
      o,
      x: "Pelo teorema de Weierstrass, uma função contínua num intervalo fechado e limitado atinge máximo e mínimo. As quatro últimas satisfazem as hipóteses: x² atinge 4 em x = 2; sen x atinge 1 em π/2; eˣ atinge e em x = 1; |x| atinge 3 nas extremidades. Já 1/x em (0, 1] está num intervalo que não é fechado: perto de 0, cresce sem limite, e não existe valor máximo.\n\nNas outras quatro, o intervalo é fechado e a função é contínua, e por isso o máximo existe. O que falha em 1/x é a hipótese do intervalo fechado: pelo extremo aberto, a função escapa.",
      /* amostras cada vez mais finas: o maior valor se estabiliza (máximo atingido) ou cresce sem parar */
      v: { i: () => { const casos = o.map((t) => { const m = t.match(/^f\(x\) = (.+) em ([[(])(.+), (.+)\]$/); return { f: lerF(m[1]), aberto: m[2] === "(", a: num(m[3]), b: num(m[4]) }; }); const semMax = ({ f, aberto, a, b }) => { const pts = (n, K) => Array.from({ length: n + 1 }, (_, k) => a + ((b - a) * k) / n).filter((x, k) => !(aberto && k === 0)).concat(aberto ? Array.from({ length: K }, (_, k) => a + 10 ** -(k + 1)) : []); const m1 = Math.max(...pts(1000, 3).map(f)), m2 = Math.max(...pts(100000, 12).map(f)); return m2 > 1e6 * Math.max(1, Math.abs(m1)) || !Number.isFinite(m2); }; return unicoV(casos.map(semMax)); } },
    };
  })(),
];
