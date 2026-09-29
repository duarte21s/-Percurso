/* Rascunho — Exatas nível militar / Geometria analítica: cônicas.

   A explicação usa as formas reduzidas (a, b, c, p). A conferência parte
   das definições: pontos da curva são achados numericamente a partir da
   equação (zeros ao longo de retas verticais) ou da própria definição —
   soma ou diferença de distâncias aos focos, distância ao foco igual à
   distância à diretriz —, e cada alternativa é testada nesses pontos. As
   equações das alternativas são lidas do próprio texto (lerEquacao). */

import { unicoV, intervalo, escolhe, lerC, lerReal, lerEquacao, lerMatriz, zeros, bissecao, integra, resolve, perto } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Geometria analítica: cônicas";
export const arquivo = "exatas-militar__geometria-analitica-conicas";

const qualR = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { const w = lerC(t); return Math.abs(w.im) < 1e-12 && perto(w.re, x, tol); }));
const dist = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const constante = (vs, tol = 1e-6) => vs.every((v) => Math.abs(v - vs[0]) < tol * Math.max(1, Math.abs(vs[0])));
/* pontos da curva f(x, y) = 0 sobre as retas verticais x = xs */
const pontosDe = (f, xs, y0 = -30, y1 = 30) => xs.flatMap((x) => zeros((y) => f(x, y), y0, y1, 60000).map((y) => [x, y]));
/* pontos de uma circunferência dada por centro e raio */
const roda = (c, r, n = 12) => intervalo(0, n - 1).map((k) => [c[0] + r * Math.cos(0.3 + (2 * Math.PI * k) / n), c[1] + r * Math.sin(0.3 + (2 * Math.PI * k) / n)]);
/* "Centro (2, −3) e raio 4" → { c: [2, −3], r: 4 } */
const lerCirc = (t) => { const m = t.replace(/−/g, "-").match(/Centro \((.+?), (.+?)\) e raio (.+)$/); return { c: [lerReal(m[1]), lerReal(m[2])], r: lerReal(m[3]) }; };
/* "(4, 0) e (−4, 0)" → [[4, 0], [−4, 0]] */
const lerPontos = (t) => lerMatriz(t);
/* reta ax + by = c a partir da equação lida; devolve pontos parametrizados */
const retaDe = (f) => { const c0 = f(0, 0), a = f(1, 0) - c0, b = f(0, 1) - c0; return (t) => (Math.abs(b) > 1e-12 ? [t, (-c0 - a * t) / b] : [(-c0 - b * t) / a, t]); };
/* número de pontos comuns entre uma reta (paramétrica) e a curva f = 0 */
const cortes = (reta, f) => zeros((t) => { const [x, y] = reta(t); return f(x, y); }, -60, 60).length;

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["Centro (2, −3) e raio 4", "Centro (−2, 3) e raio 4", "Centro (2, −3) e raio 16", "Centro (2, 3) e raio 4", "Centro (−2, 3) e raio 16"];
    const f = lerEquacao("(x − 2)² + (y + 3)² = 16");
    return {
      d: "facil",
      e: "Quais são o centro e o raio da circunferência de equação (x − 2)² + (y + 3)² = 16?",
      o,
      x: "A equação reduzida (x − a)² + (y − b)² = r² descreve a circunferência de centro (a, b) e raio r. Aqui, x − 2 dá a = 2; y + 3 = y − (−3) dá b = −3; e r² = 16 dá r = 4. Centro (2, −3), raio 4.\n\nCentro (−2, 3) lê os sinais ao pé da letra, sem lembrar que a equação usa x − a e y − b. Raio 16 esquece que o segundo membro é o quadrado do raio. Centro (2, 3) erra só o sinal de b. E centro (−2, 3) com raio 16 junta os dois erros.",
      v: { i: () => unicoV(o.map((t) => { const { c, r } = lerCirc(t); return roda(c, r).every(([x, y]) => Math.abs(f(x, y)) < 1e-9); })) },
    };
  })(),
  (() => {
    const o = ["(x − 1)² + (y − 2)² = 9", "(x + 1)² + (y + 2)² = 9", "(x − 1)² + (y − 2)² = 3", "(x − 2)² + (y − 1)² = 9", "x² + y² = 9"];
    return {
      d: "facil",
      e: "Qual é a equação da circunferência de centro (1, 2) e raio 3?",
      o,
      x: "Os pontos (x, y) da circunferência estão à distância 3 do centro (1, 2): √((x − 1)² + (y − 2)²) = 3. Elevando ao quadrado: (x − 1)² + (y − 2)² = 9.\n\n(x + 1)² + (y + 2)² = 9 tem centro (−1, −2): troca os sinais. (x − 1)² + (y − 2)² = 3 usa o raio sem elevar ao quadrado, e descreve uma circunferência de raio √3. (x − 2)² + (y − 1)² = 9 troca as coordenadas do centro. E x² + y² = 9 tem o raio certo, mas o centro na origem.",
      v: { i: () => { const pts = roda([1, 2], 3); return unicoV(o.map((t) => { const f = lerEquacao(t); return pts.every(([x, y]) => Math.abs(f(x, y)) < 1e-9); })); } },
    };
  })(),
  (() => {
    const o = ["10", "5", "6", "25", "8"];
    const f = lerEquacao("x²/25 + y²/9 = 1");
    return {
      d: "facil",
      e: "Qual é o comprimento do eixo maior da elipse de equação x²/25 + y²/9 = 1?",
      o,
      x: "Na forma x²/a² + y²/b² = 1 com a > b, o eixo maior está sobre o eixo x e mede 2a. Aqui, a² = 25, a = 5, e o eixo maior mede 10 — de (−5, 0) a (5, 0).\n\n5 é o semieixo a, e não o eixo inteiro. 6 é o eixo menor, 2b = 2 · 3. 25 é a², sem extrair a raiz. E 8 é a distância entre os focos, 2c, com c = √(25 − 9) = 4. Para saber qual eixo é o maior, basta comparar os denominadores: o maior, 25, está sob x², então o eixo maior é horizontal.",
      v: { i: () => { const zx = zeros((x) => f(x, 0), -20, 20), zy = zeros((y) => f(0, y), -20, 20); const ex = zx[1] - zx[0], ey = zy[1] - zy[0]; return qualR(Math.max(ex, ey), o); } },
    };
  })(),
  (() => {
    const o = ["(4, 0) e (−4, 0)", "(5, 0) e (−5, 0)", "(3, 0) e (−3, 0)", "(0, 4) e (0, −4)", "(16, 0) e (−16, 0)"];
    const f = lerEquacao("x²/16 − y²/9 = 1");
    return {
      d: "facil",
      e: "Quais são os vértices da hipérbole de equação x²/16 − y²/9 = 1?",
      o,
      x: "Os vértices são os pontos da hipérbole sobre o eixo real. Com y = 0, x²/16 = 1, e x = ±4: vértices (4, 0) e (−4, 0). O termo positivo da equação, em x², indica que o eixo real é o eixo x.\n\n(5, 0) e (−5, 0) são os focos, com c² = a² + b² = 25. (3, 0) e (−3, 0) usam b no lugar de a. (0, 4) e (0, −4) põem o eixo real na vertical. E (16, 0) e (−16, 0) usam a² sem extrair a raiz.",
      v: { i: () => unicoV(o.map((t) => lerPontos(t).every(([x, y]) => Math.abs(f(x, y)) < 1e-9))) },
    };
  })(),
  (() => {
    const o = ["(2, 0)", "(8, 0)", "(4, 0)", "(0, 2)", "(−2, 0)"];
    const pts = intervalo(-4, 4).map((t) => [(t * t) / 8, t]);
    /* vértice na origem: a diretriz é a reta perpendicular a OF que passa por −F */
    const focoOk = (F) => { const n = Math.hypot(F[0], F[1]); const u = [F[0] / n, F[1] / n]; return pts.every((p) => perto(dist(p, F), Math.abs(p[0] * u[0] + p[1] * u[1] + n), 1e-9)); };
    return {
      d: "facil",
      e: "Qual é o foco da parábola de equação y² = 8x?",
      o,
      x: "A parábola y² = 4px tem vértice na origem, eixo sobre o eixo x e foco (p, 0). Aqui, 4p = 8, p = 2, e o foco é (2, 0). A diretriz é a reta x = −2: cada ponto da parábola fica à mesma distância do foco e da diretriz.\n\n(8, 0) usa o coeficiente 8 como se fosse p. (4, 0) divide 8 por 2 em vez de 4. (0, 2) põe o foco no eixo y, que não é o eixo desta parábola. E (−2, 0) está do lado da diretriz, oposto à abertura da parábola.",
      v: { i: () => unicoV(o.map((t) => focoOk(lerPontos(t)[0]))) },
    };
  })(),
  (() => {
    const o = ["y = −3", "y = 3", "y = −12", "x = −3", "y = −6"];
    const pts = intervalo(-6, 6).map((t) => [t, (t * t) / 12]);
    /* para cada reta candidata, o foco é o simétrico dela em relação ao vértice (origem) */
    const ok = (t) => { const m = t.replace(/−/g, "-").match(/^([xy]) = (-?\d+)$/); const c = Number(m[2]); const F = m[1] === "y" ? [0, -c] : [-c, 0]; return pts.every((p) => perto(dist(p, F), Math.abs((m[1] === "y" ? p[1] : p[0]) - c), 1e-9)); };
    return {
      d: "facil",
      e: "Qual é a equação da reta diretriz da parábola x² = 12y?",
      o,
      x: "Na parábola x² = 4py, o eixo é o eixo y, o foco é (0, p) e a diretriz é a reta y = −p. Aqui, 4p = 12 e p = 3: foco (0, 3) e diretriz y = −3. Conferindo com o ponto (6, 3), que está na parábola (36 = 12 · 3): ele dista 6 do foco (0, 3) e 6 da reta y = −3.\n\ny = 3 é a reta horizontal que passa pelo foco, e não a diretriz. y = −12 usa 4p no lugar de p. x = −3 seria a diretriz de uma parábola de eixo horizontal. E y = −6 usa 2p.",
      v: { i: () => unicoV(o.map(ok)) },
    };
  })(),
  (() => {
    const o = ["A parábola", "A elipse", "A hipérbole", "A circunferência", "Nenhuma cônica"];
    /* razão distância ao foco / distância à diretriz, em três cônicas concretas */
    const razoes = (pts, F, diretriz) => pts.map((p) => dist(p, F) / Math.abs(p[0] - diretriz));
    return {
      d: "facil",
      e: "Numa cônica, a excentricidade é a razão entre a distância de um ponto dela ao foco e a distância desse ponto à diretriz correspondente. Qual cônica tem excentricidade igual a 1?",
      o,
      x: "Excentricidade 1 significa que cada ponto da curva está à mesma distância do foco e da diretriz — exatamente a definição de parábola. Com excentricidade entre 0 e 1, a curva é uma elipse; maior que 1, uma hipérbole.\n\nNa elipse, 0 < e < 1: os pontos ficam mais perto do foco do que da diretriz. Na hipérbole, e > 1. A circunferência é o caso limite e = 0 das elipses, com os focos coincidindo no centro. E “nenhuma cônica” ignora a parábola.",
      v: { i: () => { const par = razoes(intervalo(-4, 4).map((t) => [(t * t) / 8, t]), [2, 0], -2); const eli = razoes(intervalo(0, 7).map((k) => [5 * Math.cos(k), 3 * Math.sin(k)]), [4, 0], 25 / 4); const hip = razoes(intervalo(1, 6).map((k) => [4 * Math.cosh(k / 3), 3 * Math.sinh(k / 3)]), [5, 0], 16 / 5); const um = (r) => constante(r) && perto(r[0], 1, 1e-9); return unicoV([um(par), um(eli), um(hip), false, !(um(par) || um(eli) || um(hip))]); } },
    };
  })(),
  (() => {
    const o = ["7", "49", "14", "49π", "√7"];
    const f = lerEquacao("x² + y² = 49");
    return {
      d: "facil",
      e: "Qual é o raio da circunferência de equação x² + y² = 49?",
      o,
      x: "A equação x² + y² = r² descreve a circunferência de centro na origem e raio r. Aqui, r² = 49 e r = 7: os pontos (7, 0) e (0, −7), por exemplo, estão nela.\n\n49 é r², e não o raio. 14 é o diâmetro. 49π é a área do círculo, e não o raio. E √7 tira a raiz de 7, e não de 49. A equação x² + y² = r² é só a fórmula da distância à origem, √(x² + y²) = r, elevada ao quadrado.",
      v: { i: () => { const z = zeros((x) => f(x, 0), -20, 20); return qualR((z[1] - z[0]) / 2, o); } },
    };
  })(),
  (() => {
    const o = ["(2, −1)", "(−2, 1)", "(3, 2)", "(2, 1)", "(9, 4)"];
    const f = lerEquacao("(x − 2)²/9 + (y + 1)²/4 = 1");
    return {
      d: "facil",
      e: "Qual é o centro da elipse de equação (x − 2)²/9 + (y + 1)²/4 = 1?",
      o,
      x: "Na forma (x − h)²/a² + (y − k)²/b² = 1, o centro é (h, k). Aqui, x − 2 dá h = 2, e y + 1 = y − (−1) dá k = −1: centro (2, −1). Os vértices do eixo maior são (2 ± 3, −1), isto é, (5, −1) e (−1, −1).\n\n(−2, 1) troca os dois sinais. (3, 2) usa os semieixos a = 3 e b = 2 como se fossem o centro. (2, 1) erra só o sinal de k. E (9, 4) usa os denominadores.",
      /* o centro é o único ponto de simetria da curva: o simétrico de cada ponto em relação a ele também está na curva */
      v: { i: () => { const pts = pontosDe(f, [-0.5, 0.3, 1.7, 3.1, 4.4]); return unicoV(o.map((t) => { const [c] = lerPontos(t); return pts.every(([x, y]) => Math.abs(f(2 * c[0] - x, 2 * c[1] - y)) < 1e-7); })); } },
    };
  })(),
  (() => {
    const o = ["Para a esquerda", "Para a direita", "Para cima", "Para baixo", "Para os dois lados do eixo y"];
    const f = lerEquacao("y² = −8x");
    return {
      d: "facil",
      e: "Para que lado se abre a parábola de equação y² = −8x?",
      o,
      x: "Como y² nunca é negativo, −8x também não pode ser: x ≤ 0 em todos os pontos da curva. A parábola fica à esquerda do eixo y, com vértice na origem, e se abre para a esquerda. Seu foco é (−2, 0), e a diretriz, x = 2.\n\n“Para a direita” vale para y² = 8x, sem o sinal de menos. “Para cima” e “para baixo” valeriam para parábolas da forma x² = ±4py, de eixo vertical. E nenhuma parábola se abre para os dois lados: ter dois ramos é característica da hipérbole.",
      v: { i: () => { const pts = intervalo(-8, 8).flatMap((y) => zeros((x) => f(x, y), -100, 100).map((x) => [x, y])); const lado = pts.every(([x]) => x <= 1e-9) ? "Para a esquerda" : pts.every(([x]) => x >= -1e-9) ? "Para a direita" : "outro"; return unicoV(o.map((t) => t === lado)); } },
    };
  })(),
  (() => {
    const o = ["5", "2", "8", "3", "7"];
    const f = lerEquacao("(x − 4)² + (y − 6)² = 9");
    return {
      d: "facil",
      e: "Qual é a distância do ponto (1, 2) ao centro da circunferência de equação (x − 4)² + (y − 6)² = 9?",
      o,
      x: "O centro é (4, 6). A distância de (1, 2) até ele é √((4 − 1)² + (6 − 2)²) = √(9 + 16) = √25 = 5. Como o raio é 3, o ponto (1, 2) está fora da circunferência, a 5 − 3 = 2 dela.\n\n2 é a distância do ponto à circunferência, e não ao centro. 8 soma o raio à distância. 3 é o raio. E 7 soma as diferenças das coordenadas (3 + 4) sem usar Pitágoras.",
      /* o centro é onde o primeiro membro atinge o mínimo */
      v: { i: () => { let m = [0, 0, Infinity]; for (let x = -10; x <= 10; x += 0.5) for (let y = -10; y <= 10; y += 0.5) { const v = f(x, y); if (v < m[2]) m = [x, y, v]; } return qualR(dist([1, 2], m), o); } },
    };
  })(),
  (() => {
    const o = ["Uma circunferência de raio 2", "Uma circunferência de raio 4", "Uma elipse de focos (2, 0) e (−2, 0)", "Uma hipérbole", "Uma parábola"];
    const f = lerEquacao("x²/4 + y²/4 = 1");
    return {
      d: "facil",
      e: "Que curva é descrita pela equação x²/4 + y²/4 = 1?",
      o,
      x: "Multiplicando por 4: x² + y² = 4. É a circunferência de centro na origem e raio 2. Ela é o caso particular da elipse em que os dois semieixos são iguais (a = b = 2); então c = √(a² − b²) = 0, e os focos coincidem com o centro.\n\nO raio 4 usa o denominador sem extrair a raiz. A elipse de focos (±2, 0) exigiria a > b; com a = b, não há focos distintos. A hipérbole teria um sinal de menos entre os termos. E a parábola teria apenas uma das variáveis ao quadrado.",
      v: { i: () => { const pts = pontosDe(f, [-1.9, -1.2, -0.4, 0.5, 1.3, 1.8]); const d0 = pts.map((p) => dist(p, [0, 0])); const somaF = pts.map((p) => dist(p, [2, 0]) + dist(p, [-2, 0])); const difF = pts.map((p) => Math.abs(dist(p, [2, 0]) - dist(p, [-2, 0]))); const limitada = zeros((x) => f(x, 0), -100, 100).every((x) => Math.abs(x) < 10); return unicoV([d0.every((d) => perto(d, 2)), d0.every((d) => perto(d, 4)), constante(somaF), constante(difF), !limitada]); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["Centro (2, −3) e raio 5", "Centro (−2, 3) e raio 5", "Centro (2, −3) e raio √12", "Centro (4, −6) e raio 5", "Centro (2, −3) e raio 25"];
    const f = lerEquacao("x² + y² − 4x + 6y − 12 = 0");
    return {
      d: "media",
      e: "A equação x² + y² − 4x + 6y − 12 = 0 descreve uma circunferência. Quais são o seu centro e o seu raio?",
      o,
      x: "Completando quadrados: x² − 4x = (x − 2)² − 4 e y² + 6y = (y + 3)² − 9. A equação fica (x − 2)² + (y + 3)² − 4 − 9 − 12 = 0, ou (x − 2)² + (y + 3)² = 25: centro (2, −3) e raio 5.\n\nCentro (−2, 3) divide os coeficientes −4 e 6 por 2 sem trocar o sinal. Raio √12 usa só o termo independente, esquecendo os quadrados completados. Centro (4, −6) esquece de dividir os coeficientes por 2. E raio 25 é r², sem a raiz.",
      v: { i: () => unicoV(o.map((t) => { const { c, r } = lerCirc(t); return roda(c, r).every(([x, y]) => Math.abs(f(x, y)) < 1e-9); })) },
    };
  })(),
  (() => {
    const o = ["k < 5", "k > 5", "k < −5", "k ≠ 5", "Para qualquer valor real de k"];
    const conj = [(k) => k < 5, (k) => k > 5, (k) => k < -5, (k) => k !== 5, () => true];
    /* é circunferência quando o mínimo do primeiro membro é negativo (o conjunto de nível 0 é então uma curva fechada) */
    const circ = (k) => { let m = Infinity; for (let x = -10; x <= 10; x += 0.05) for (let y = -10; y <= 10; y += 0.05) m = Math.min(m, x * x + y * y - 2 * x + 4 * y + k); return m < -1e-9; };
    return {
      d: "media",
      e: "Para que valores de k a equação x² + y² − 2x + 4y + k = 0 representa uma circunferência?",
      o,
      x: "Completando quadrados: (x − 1)² + (y + 2)² = 1 + 4 − k = 5 − k. O segundo membro é o quadrado do raio e precisa ser positivo: 5 − k > 0, ou k < 5. Com k = 5, a equação se reduz ao único ponto (1, −2); com k > 5, nenhum ponto do plano a satisfaz.\n\nk > 5 inverte a desigualdade. k < −5 erra o sinal do 5. k ≠ 5 aceita valores maiores que 5, para os quais o raio ao quadrado seria negativo. E “qualquer k” ignora que o segundo membro depende de k.",
      v: { i: () => { const ks = [-8, -5, -1, 0, 3, 4.5, 5, 5.5, 7, 10]; const real = ks.map(circ); return unicoV(conj.map((c) => ks.every((k, i) => c(k) === real[i]))); } },
    };
  })(),
  (() => {
    const o = ["P pertence à circunferência", "P é interior à circunferência", "P é exterior à circunferência", "P é o centro da circunferência", "P pertence ao diâmetro horizontal"];
    const f = lerEquacao("(x − 1)² + (y + 3)² = 25");
    return {
      d: "media",
      e: "Qual é a posição do ponto P(4, 1) em relação à circunferência de equação (x − 1)² + (y + 3)² = 25?",
      o,
      x: "Substituindo P na equação: (4 − 1)² + (1 + 3)² = 9 + 16 = 25, exatamente r². Então P está à distância 5 do centro (1, −3), igual ao raio: P pertence à circunferência.\n\nSe o primeiro membro desse menos que 25, P seria interior; mais que 25, exterior. O centro é (1, −3), e não (4, 1). E o diâmetro horizontal é o segmento sobre a reta y = −3, que não passa por P.",
      /* centro = ponto de mínimo; raio = raiz do oposto desse mínimo */
      v: { i: () => { let m = [0, 0, Infinity]; for (let x = -10; x <= 10; x += 0.5) for (let y = -10; y <= 10; y += 0.5) { const v = f(x, y); if (v < m[2]) m = [x, y, v]; } const r = Math.sqrt(-m[2]), d = dist([4, 1], m); const pos = perto(d, r, 1e-9) ? 0 : d < r ? 1 : 2; return unicoV([pos === 0, pos === 1, pos === 2, d < 1e-9, Math.abs(1 - m[1]) < 1e-9]); } },
    };
  })(),
  (() => {
    const o = ["k = 5 ou k = −5", "Apenas k = 5", "k = √5 ou k = −√5", "k = 25 ou k = −25", "Apenas k = 0"];
    const circ = lerEquacao("x² + y² = 5");
    const tangentes = intervalo(-120, 120).map((j) => j / 4).filter((k) => cortes((t) => [t, -2 * t - k], circ) === 1);
    return {
      d: "media",
      e: "Para que valores de k a reta 2x + y + k = 0 é tangente à circunferência x² + y² = 5?",
      o,
      x: "A reta é tangente quando a distância do centro (0, 0) a ela é igual ao raio √5. Essa distância é |2 · 0 + 0 + k|/√(2² + 1²) = |k|/√5. Igualando: |k|/√5 = √5, ou |k| = 5, isto é, k = 5 ou k = −5.\n\n“Apenas k = 5” esquece a tangente do outro lado da circunferência. ±√5 esquece o denominador √5 da fórmula da distância. ±25 eleva ao quadrado sem necessidade. E k = 0 dá a reta que passa pelo centro, que é secante.",
      v: { i: () => unicoV(o.map((t) => { const ks = t.replace(/−/g, "-").match(/-?[\d√]+/g).map(lerReal); return ks.length === tangentes.length && ks.every((k) => tangentes.some((q) => perto(q, k))); })) },
    };
  })(),
  (() => {
    const o = ["8", "4", "6", "10", "16"];
    return {
      d: "media",
      e: "Qual é o comprimento da corda que a reta y = 3 determina na circunferência x² + y² = 25?",
      o,
      x: "Substituindo y = 3: x² + 9 = 25, x² = 16, e x = ±4. A corda vai de (−4, 3) a (4, 3) e mede 8. Pela geometria: a distância do centro à reta é 3, e a meia-corda é √(5² − 3²) = 4.\n\n4 é a meia-corda. 6 é o dobro da distância do centro à reta. 10 é o diâmetro, a maior corda possível. E 16 é x², sem a raiz, que ainda não é um comprimento. Uma corda que passasse pelo centro, como a da reta y = 0, mediria 10.",
      v: { i: () => { const z = zeros((x) => x * x + 9 - 25, -10, 10); return qualR(z[1] - z[0], o); } },
    };
  })(),
  (() => {
    const o = ["Tangentes exteriormente", "Secantes", "Tangentes interiormente", "Exteriores, sem ponto comum", "Uma interior à outra"];
    const C1 = [0, 0], r1 = 3, C2 = [4, 3], r2 = 2;
    return {
      d: "media",
      e: "Qual é a posição relativa das circunferências de equações x² + y² = 9 e (x − 4)² + (y − 3)² = 4?",
      o,
      x: "Os centros são (0, 0) e (4, 3), à distância √(16 + 9) = 5, e os raios são 3 e 2. Como a distância entre os centros é igual à soma dos raios (3 + 2 = 5), as circunferências se tocam num único ponto, cada uma do lado de fora da outra: são tangentes exteriormente. O ponto de contato é (12/5, 9/5).\n\nSecantes exigiria distância entre 1 e 5, entre a diferença e a soma dos raios. Tangentes interiormente exigiria distância igual à diferença, 1. Exteriores sem ponto comum exigiria distância maior que 5. E uma interior à outra, distância menor que 1.",
      /* percorre a primeira circunferência e conta os pontos comuns com a segunda; vê quem fica dentro de quem */
      v: { i: () => { const g = (t) => dist([C1[0] + r1 * Math.cos(t), C1[1] + r1 * Math.sin(t)], C2) - r2; const n = zeros(g, 0, 2 * Math.PI - 1e-9).length; const c2dentro = dist(C2, C1) < r1, c1dentro = dist(C1, C2) < r2; const tipo = n === 2 ? 1 : n === 1 ? (c2dentro || c1dentro ? 2 : 0) : c2dentro || c1dentro ? 4 : 3; return unicoV(o.map((_, i) => i === tipo)); } },
    };
  })(),
  (() => {
    const o = ["5", "10", "7", "4", "6"];
    return {
      d: "media",
      e: "Qual é o raio da circunferência que passa pelos pontos (0, 0), (6, 0) e (0, 8)?",
      o,
      x: "O triângulo de vértices (0, 0), (6, 0) e (0, 8) é retângulo na origem, e um ângulo reto inscrito numa circunferência enxerga um diâmetro: a hipotenusa, de (6, 0) a (0, 8), é um diâmetro. Ela mede √(36 + 64) = 10, e o raio é 5. O centro é o ponto médio da hipotenusa, (3, 4).\n\n10 é o diâmetro. 7 é a média dos catetos. 4 é a ordenada do centro, e 6, a medida de um cateto — nenhum dos dois é o raio.",
      /* resolve x² + y² + Dx + Ey + F = 0 pelos três pontos */
      v: { i: () => { const P = [[0, 0], [6, 0], [0, 8]]; const [D, E, F] = resolve(P.map(([x, y]) => [x, y, 1]), P.map(([x, y]) => -(x * x + y * y))); return qualR(Math.sqrt((D * D) / 4 + (E * E) / 4 - F), o); } },
    };
  })(),
  (() => {
    const o = ["25π", "5π", "10π", "100π", "7π"];
    const f = lerEquacao("x² + y² − 6x + 8y = 0");
    return {
      d: "media",
      e: "Qual é a área do círculo limitado pela circunferência de equação x² + y² − 6x + 8y = 0?",
      o,
      x: "Completando quadrados: (x − 3)² − 9 + (y + 4)² − 16 = 0, ou (x − 3)² + (y + 4)² = 25. O raio é 5, e a área, π · 5² = 25π. Repare que a circunferência passa pela origem, porque não há termo independente.\n\n5π usa o raio sem elevar ao quadrado. 10π é o comprimento da circunferência. 100π usa o diâmetro 10 no lugar do raio. E 7π soma as coordenadas do centro, 3 + 4, como se fossem o raio ao quadrado.",
      v: { i: () => { const h = 0.02; let n = 0; for (let x = -3 + h / 2; x < 9; x += h) for (let y = -10 + h / 2; y < 2; y += h) if (f(x, y) <= 0) n++; return escolhe(n * h * h, o.map(lerReal), 0.01); } },
    };
  })(),
  (() => {
    const o = ["8", "10", "12", "6", "4"];
    return {
      d: "media",
      e: "Qual é a menor distância entre o ponto (8, 6) e os pontos da circunferência x² + y² = 4?",
      o,
      x: "O ponto (8, 6) está a √(64 + 36) = 10 do centro (0, 0), fora da circunferência de raio 2. O ponto da circunferência mais próximo dele fica na reta que liga o centro a (8, 6), do lado de (8, 6): a distância é 10 − 2 = 8.\n\n10 é a distância até o centro. 12 é a maior distância, até o ponto diametralmente oposto. 6 subtrai 4 (que é r²) em vez do raio. E 4 é r², e não uma distância.",
      v: { i: () => { let m = Infinity; for (let k = 0; k < 100000; k++) { const t = (2 * Math.PI * k) / 100000; m = Math.min(m, dist([2 * Math.cos(t), 2 * Math.sin(t)], [8, 6])); } return escolhe(m, o.map(lerReal), 1e-6); } },
    };
  })(),
  (() => {
    const o = ["3x + 4y = 25", "4x + 3y = 25", "3x + 4y = 5", "4x − 3y = 0", "x + y = 7"];
    const circ = lerEquacao("x² + y² = 25");
    return {
      d: "media",
      e: "Qual é a equação da reta tangente à circunferência x² + y² = 25 no ponto (3, 4)?",
      o,
      x: "A tangente é perpendicular ao raio no ponto de contato. O raio vai de (0, 0) a (3, 4), na direção (3, 4); então a tangente tem vetor normal (3, 4) e equação 3x + 4y = c. Passando por (3, 4): c = 9 + 16 = 25. A reta é 3x + 4y = 25.\n\n4x + 3y = 25 troca os coeficientes e não passa por (3, 4), onde daria 24. 3x + 4y = 5 usa o raio no segundo membro, e não r². 4x − 3y = 0 é a reta do próprio raio, que passa pelo centro. E x + y = 7 passa por (3, 4), mas corta a circunferência em dois pontos, (3, 4) e (4, 3).",
      v: { i: () => unicoV(o.map((t) => { const f = lerEquacao(t); return Math.abs(f(3, 4)) < 1e-9 && cortes(retaDe(f), circ) === 1; })) },
    };
  })(),
  (() => {
    const o = ["(4, 0) e (−4, 0)", "(5, 0) e (−5, 0)", "(3, 0) e (−3, 0)", "(0, 4) e (0, −4)", "(√34, 0) e (−√34, 0)"];
    const f = lerEquacao("x²/25 + y²/9 = 1");
    return {
      d: "media",
      e: "Quais são os focos da elipse de equação x²/25 + y²/9 = 1?",
      o,
      x: "Na elipse, a² = b² + c², em que a é o semieixo maior e c é a distância do centro a cada foco. Aqui, a² = 25 e b² = 9, então c² = 16 e c = 4. Como o eixo maior está sobre o eixo x — o denominador maior está sob x² —, os focos são (4, 0) e (−4, 0).\n\n(5, 0) e (−5, 0) são os vértices do eixo maior. (3, 0) e (−3, 0) usam b no lugar de c. (0, 4) e (0, −4) põem os focos no eixo menor. E (±√34, 0) usa c² = a² + b², que é a relação da hipérbole.",
      /* focos verdadeiros: a soma das distâncias a eles é a mesma para todos os pontos da curva */
      v: { i: () => { const pts = pontosDe(f, [-4.5, -3, -1, 0.5, 2, 3.7, 4.9]); return unicoV(o.map((t) => { const [F1, F2] = lerPontos(t); return constante(pts.map((p) => dist(p, F1) + dist(p, F2))); })); } },
    };
  })(),
  (() => {
    const o = ["3/5", "4/5", "5/3", "3/4", "16/25"];
    const f = lerEquacao("x²/25 + y²/16 = 1");
    return {
      d: "media",
      e: "Qual é a excentricidade da elipse de equação x²/25 + y²/16 = 1?",
      o,
      x: "A excentricidade é e = c/a. Aqui, a = 5 e b = 4, e de a² = b² + c² vem c = 3. Então e = 3/5. Como em toda elipse, 0 < e < 1: quanto mais perto de 1, mais achatada a curva.\n\n4/5 usa b no lugar de c. 5/3 inverte a razão e daria um valor maior que 1, impossível numa elipse. 3/4 divide c por b. E 16/25 é b²/a², que não mede a excentricidade. Conferindo os focos (±3, 0): do ponto (0, 4) da elipse, as distâncias a eles são 5 e 5, que somam 10 = 2a.",
      /* acha c procurando os focos (±c, 0) que tornam constante a soma das distâncias; a vem do corte com o eixo x */
      v: { i: () => { const pts = pontosDe(f, [-4.6, -2.2, 0.4, 1.9, 4.1]); let melhor = [0, Infinity]; for (let c = 0; c <= 5; c += 0.001) { const s = pts.map((p) => dist(p, [c, 0]) + dist(p, [-c, 0])); const desvio = Math.max(...s) - Math.min(...s); if (desvio < melhor[1]) melhor = [c, desvio]; } const a = Math.max(...zeros((x) => f(x, 0), -20, 20)); return escolhe(melhor[0] / a, o.map(lerReal), 1e-3); } },
    };
  })(),
  (() => {
    const o = ["x²/25 + y²/16 = 1", "x²/25 + y²/9 = 1", "x²/100 + y²/91 = 1", "x²/16 + y²/25 = 1", "x²/25 + y²/34 = 1"];
    /* pontos pela definição: soma das distâncias aos focos (±3, 0) igual a 10 */
    const pts = [-4.5, -3, -1, 0.5, 2, 4].map((x) => [x, bissecao((y) => dist([x, y], [3, 0]) + dist([x, y], [-3, 0]) - 10, 0, 20)]);
    return {
      d: "media",
      e: "Qual é a equação da elipse de focos (3, 0) e (−3, 0) e eixo maior de comprimento 10?",
      o,
      x: "O eixo maior mede 2a = 10, então a = 5; a distância do centro a cada foco é c = 3. Pela relação a² = b² + c²: b² = 25 − 9 = 16. Com os focos no eixo x, a equação é x²/25 + y²/16 = 1.\n\nx²/25 + y²/9 = 1 usa c² no lugar de b². x²/100 + y²/91 = 1 toma o eixo maior inteiro, 10, como se fosse a. x²/16 + y²/25 = 1 põe o eixo maior na vertical, com os focos no eixo y. E x²/25 + y²/34 = 1 soma c² em vez de subtrair.",
      v: { i: () => unicoV(o.map((t) => { const f = lerEquacao(t); return pts.every(([x, y]) => Math.abs(f(x, y)) < 1e-9); })) },
    };
  })(),
  (() => {
    const o = ["12π", "25π", "7π", "144π", "48π"];
    return {
      d: "media",
      e: "Sabendo que a área limitada por uma elipse de semieixos a e b é πab, qual é a área da região limitada pela elipse x²/16 + y²/9 = 1?",
      o,
      x: "Os semieixos são a = 4 e b = 3, as raízes de 16 e de 9. A área é π · 4 · 3 = 12π. A fórmula generaliza a do círculo: quando a = b = r, πab vira πr².\n\n25π soma os quadrados dos semieixos. 7π soma os semieixos. 144π multiplica os denominadores, 16 · 9, sem extrair as raízes. E 48π multiplica os eixos inteiros, 8 · 6, em vez dos semieixos. A resposta faz sentido: a elipse cabe no retângulo de 8 por 6 e ocupa π/4 da área dele, 48 · π/4 = 12π.",
      /* área somando as fatias verticais: para cada x, a altura é o dobro do y da curva */
      v: { i: () => escolhe(integra((x) => 2 * 3 * Math.sqrt(Math.max(0, 1 - (x * x) / 16)), -4, 4, 200000), o.map(lerReal), 1e-4) },
    };
  })(),
  (() => {
    const o = ["4", "6", "2", "9", "36"];
    const f = lerEquacao("4x² + 9y² = 36");
    return {
      d: "media",
      e: "Qual é o comprimento do eixo menor da elipse de equação 4x² + 9y² = 36?",
      o,
      x: "Dividindo a equação por 36: x²/9 + y²/4 = 1. Os semieixos são a = 3, no eixo x, e b = 2, no eixo y. O eixo menor mede 2b = 4, de (0, −2) a (0, 2).\n\n6 é o eixo maior, 2a. 2 é o semieixo menor, e não o eixo inteiro. 9 lê o denominador de x² como se fosse um comprimento. E 36 é o segundo membro da equação original, antes da divisão. Dividir pelo segundo membro é o passo que revela os semieixos: só na forma x²/a² + y²/b² = 1 os denominadores são os quadrados deles.",
      v: { i: () => { const zx = zeros((x) => f(x, 0), -20, 20), zy = zeros((y) => f(0, y), -20, 20); return qualR(Math.min(zx[1] - zx[0], zy[1] - zy[0]), o); } },
    };
  })(),
  (() => {
    const o = ["12", "6", "8", "4√5", "16"];
    const f = lerEquacao("x²/36 + y²/20 = 1");
    return {
      d: "media",
      e: "Para qualquer ponto P da elipse x²/36 + y²/20 = 1, qual é a soma das distâncias de P aos dois focos?",
      o,
      x: "Pela definição, a soma das distâncias de qualquer ponto da elipse aos focos é constante e igual ao eixo maior, 2a. Aqui, a² = 36, a = 6, e a soma vale 12. Os focos são (±4, 0), pois c² = 36 − 20 = 16; no vértice (6, 0), por exemplo, as distâncias são 2 e 10, que somam 12.\n\n6 é o semieixo a. 8 é a distância entre os focos, 2c. 4√5 é o eixo menor, 2b = 2√20. E 16 é c², e não uma distância.",
      v: { i: () => { const pts = pontosDe(f, [-5.5, -2, 0.7, 3.3, 5.8]); let melhor = [0, Infinity]; for (let c = 0; c <= 6; c += 0.001) { const s = pts.map((p) => dist(p, [c, 0]) + dist(p, [-c, 0])); const d = Math.max(...s) - Math.min(...s); if (d < melhor[1]) melhor = [c, d]; } const c = melhor[0]; return escolhe(dist(pts[0], [c, 0]) + dist(pts[0], [-c, 0]), o.map((t) => lerC(t).re), 1e-3); } },
    };
  })(),
  (() => {
    const o = ["4", "16", "5", "3", "16/5"];
    return {
      d: "media",
      e: "A elipse x²/25 + y²/b² = 1, com b > 0, passa pelo ponto (3, 16/5). Qual é o valor de b?",
      o,
      x: "Substituindo o ponto: 9/25 + (256/25)/b² = 1. Então (256/25)/b² = 16/25, e b² = 256/16 = 16, b = 4. Conferindo: 9/25 + (256/25)/16 = 9/25 + 16/25 = 1.\n\n16 é b², sem a raiz. 5 é o semieixo a. 3 é a abscissa do ponto. E 16/5 é a ordenada do ponto, que não é o semieixo, porque o ponto não está sobre o eixo y. O ponto também é compatível com a = 5: no eixo x, a elipse vai de −5 a 5, e a abscissa 3 fica dentro desse intervalo.",
      v: { i: () => { const bs = zeros((b) => 9 / 25 + 256 / 25 / (b * b) - 1, 0.5, 30); if (bs.length !== 1) throw new Error("b"); return qualR(bs[0], o); } },
    };
  })(),
  (() => {
    const o = ["(6, 0) e (−6, 0)", "(2, 0) e (−2, 0)", "(2√5, 0) e (−2√5, 0)", "(0, 6) e (0, −6)", "(4, 0) e (−4, 0)"];
    const f = lerEquacao("x²/20 − y²/16 = 1");
    return {
      d: "media",
      e: "Onde ficam os focos da hipérbole x²/20 − y²/16 = 1?",
      o,
      x: "Na hipérbole, c² = a² + b², em que c é a distância do centro a cada foco. Aqui, c² = 20 + 16 = 36, e c = 6. O termo positivo está em x², então os focos ficam no eixo x: (6, 0) e (−6, 0). Em qualquer ponto da curva, a diferença das distâncias a esses focos vale 2a = 4√5.\n\n(±2, 0) usa c² = a² − b² = 4, que é a relação da elipse. (±2√5, 0) são os vértices, com a = √20. (0, ±6) põe os focos no eixo y, que aqui é o eixo imaginário. E (±4, 0) usa b no lugar de c.",
      /* focos verdadeiros: a diferença das distâncias (em módulo) é a mesma para todos os pontos */
      v: { i: () => { const pts = pontosDe(f, [-10, -7, -4.8, 4.6, 6, 9]); return unicoV(o.map((t) => { const [F1, F2] = lerPontos(t); return constante(pts.map((p) => Math.abs(dist(p, F1) - dist(p, F2)))); })); } },
    };
  })(),
  (() => {
    const o = ["y = (3/4)x e y = −(3/4)x", "y = (4/3)x e y = −(4/3)x", "y = (9/16)x e y = −(9/16)x", "y = 6x e y = −6x", "y = (5/4)x e y = −(5/4)x"];
    const f = lerEquacao("x²/64 − y²/36 = 1");
    return {
      d: "media",
      e: "Quais são as assíntotas da hipérbole de equação x²/64 − y²/36 = 1?",
      o,
      x: "As assíntotas de x²/a² − y²/b² = 1 são as retas y = ±(b/a)x, das quais a curva se aproxima cada vez mais quando x cresce. Aqui, a = 8 e b = 6, e b/a = 3/4: as assíntotas são y = (3/4)x e y = −(3/4)x. Um atalho para achá-las é trocar o 1 do segundo membro por 0: x²/64 = y²/36.\n\n±(4/3)x inverte a razão, a/b. ±(9/16)x usa b²/a², sem as raízes. ±6x usa só b. E ±(5/4)x usa c/a, que é a excentricidade, e não a inclinação das assíntotas.",
      /* inclinação: razão y/x de um ponto da curva muito distante */
      v: { i: () => { const x = 1e7; const y = Math.max(...zeros((y) => f(x, y) / 1e10, 0, 1e7, 200000)); const m = y / x; return unicoV(o.map((t) => { const s = t.replace(/−/g, "-").match(/y = \(?(-?[\d/]+)\)?x/)[1]; return perto(lerReal(s), m, 1e-6); })); } },
    };
  })(),
  (() => {
    const o = ["5/3", "3/5", "4/3", "5/4", "√7/3"];
    const f = lerEquacao("x²/9 − y²/16 = 1");
    return {
      d: "media",
      e: "Qual é a excentricidade da hipérbole de equação x²/9 − y²/16 = 1?",
      o,
      x: "A excentricidade é e = c/a, com c² = a² + b² na hipérbole. Aqui, a = 3, b = 4 e c = 5, então e = 5/3. Toda hipérbole tem e > 1, porque c > a.\n\n3/5 inverte a razão e dá um valor menor que 1, que seria de elipse. 4/3 é b/a, a inclinação das assíntotas. 5/4 divide c por b. E √7/3 usa c² = b² − a² = 7, uma subtração no lugar da soma. Numericamente, 5/3 ≈ 1,67; quanto maior a excentricidade, mais abertos ficam os ramos.",
      v: { i: () => { const pts = pontosDe(f, [-8, -5, -3.5, 3.3, 4, 7]); let melhor = [0, Infinity]; for (let c = 3; c <= 10; c += 0.001) { const s = pts.map((p) => Math.abs(dist(p, [c, 0]) - dist(p, [-c, 0]))); const d = Math.max(...s) - Math.min(...s); if (d < melhor[1]) melhor = [c, d]; } const a = Math.max(...zeros((x) => f(x, 0), 0, 20)); return escolhe(melhor[0] / a, o.map(lerReal), 1e-3); } },
    };
  })(),
  (() => {
    const o = ["√2", "1", "2", "2√2", "√2/2"];
    const f = lerEquacao("x² − y² = 8");
    return {
      d: "media",
      e: "Qual é a excentricidade da hipérbole equilátera de equação x² − y² = 8?",
      o,
      x: "Dividindo por 8: x²/8 − y²/8 = 1, com a² = b² = 8. Então c² = a² + b² = 16, c = 4, a = 2√2 e e = c/a = 4/(2√2) = √2. Toda hipérbole equilátera (a = b) tem excentricidade √2, e suas assíntotas, y = x e y = −x, são perpendiculares.\n\n1 seria a excentricidade de uma parábola, e nenhuma hipérbole a tem. 2 divide c² por a², sem as raízes. 2√2 é o valor de a, e não a razão c/a. E √2/2 inverte a razão, a/c.",
      v: { i: () => { const pts = pontosDe(f, [-7, -4, -3, 3.2, 5, 6.5]); let melhor = [0, Infinity]; for (let c = 2; c <= 8; c += 0.0005) { const s = pts.map((p) => Math.abs(dist(p, [c, 0]) - dist(p, [-c, 0]))); const d = Math.max(...s) - Math.min(...s); if (d < melhor[1]) melhor = [c, d]; } const a = Math.max(...zeros((x) => f(x, 0), 0, 20)); return escolhe(melhor[0] / a, o.map(lerReal), 1e-3); } },
    };
  })(),
  (() => {
    const o = ["4√2", "4", "8", "2√2", "2"];
    return {
      d: "media",
      e: "A curva xy = 4 é uma hipérbole equilátera cujos vértices são os pontos dela mais próximos da origem. Qual é a distância entre esses dois vértices?",
      o,
      x: "Os pontos da curva são (x, 4/x). A distância à origem, ao quadrado, é x² + 16/x², mínima quando x² = 4, isto é, x = ±2 — pela desigualdade das médias, x² + 16/x² ≥ 2√16 = 8. Os vértices são (2, 2) e (−2, −2), cada um a 2√2 da origem, e a distância entre eles é 4√2.\n\n4 é a distância de (2, 2) a (−2, 2), ponto que nem está na curva. 8 é o quadrado da distância de cada vértice à origem. 2√2 é a distância de um vértice à origem, a metade da pedida. E 2 é a abscissa do vértice.",
      v: { i: () => { let m = [0, Infinity]; for (let x = 0.01; x <= 10; x += 0.0001) { const d = Math.hypot(x, 4 / x); if (d < m[1]) m = [x, d]; } const v1 = [m[0], 4 / m[0]], v2 = [-m[0], -4 / m[0]]; return escolhe(dist(v1, v2), o.map((t) => lerC(t).re), 1e-6); } },
    };
  })(),
  (() => {
    const o = ["x² = 8y", "x² = 2y", "y² = 8x", "x² = 4y", "x² = −8y"];
    /* pontos pela definição: distância ao foco (0, 2) igual à distância à reta y = −2 */
    const pts = [-6, -3, -1, 0.5, 2, 5].map((x) => [x, bissecao((y) => dist([x, y], [0, 2]) - Math.abs(y + 2), -1, 50)]);
    return {
      d: "media",
      e: "Qual é a equação da parábola de foco (0, 2) e reta diretriz y = −2?",
      o,
      x: "Um ponto (x, y) da parábola está à mesma distância do foco e da diretriz: √(x² + (y − 2)²) = |y + 2|. Elevando ao quadrado: x² + y² − 4y + 4 = y² + 4y + 4, ou x² = 8y. Na forma x² = 4py, p = 2 é a distância do vértice ao foco.\n\nx² = 2y usa p como coeficiente, em vez de 4p. y² = 8x troca os eixos: seria a parábola de foco (2, 0) e diretriz x = −2. x² = 4y toma a distância entre foco e diretriz, 4, como se fosse 4p. E x² = −8y abre para baixo, com foco (0, −2).",
      v: { i: () => unicoV(o.map((t) => { const f = lerEquacao(t); return pts.every(([x, y]) => Math.abs(f(x, y)) < 1e-7); })) },
    };
  })(),
  (() => {
    const o = ["(3, −4)", "(−3, 32)", "(6, 5)", "(3, 4)", "(1, 0)"];
    return {
      d: "media",
      e: "Qual é o vértice da parábola de equação y = x² − 6x + 5?",
      o,
      x: "O vértice tem abscissa x = −b/(2a) = 6/2 = 3 e ordenada y = 9 − 18 + 5 = −4. Completando o quadrado: y = (x − 3)² − 4, que mostra o vértice (3, −4) e a concavidade para cima.\n\n(−3, 32) erra o sinal de −b/(2a) e calcula y em x = −3. (6, 5) usa os coeficientes −6 e 5 sem conta alguma. (3, 4) erra o sinal da ordenada. E (1, 0) é uma das raízes, onde a parábola corta o eixo x, e não o vértice.",
      v: { i: () => { let m = [0, Infinity]; for (let x = -10; x <= 10; x += 0.001) { const y = x * x - 6 * x + 5; if (y < m[1]) m = [x, y]; } return unicoV(o.map((t) => { const [p] = lerPontos(t); return perto(p[0], m[0], 1e-6) && perto(p[1], m[1], 1e-6); })); } },
    };
  })(),
  (() => {
    const o = ["(0, 1)", "(0, 4)", "(0, 1/4)", "(1, 0)", "(0, 1/16)"];
    const pts = intervalo(-5, 5).map((x) => [x, (x * x) / 4]);
    const focoOk = (F) => { const n = Math.hypot(F[0], F[1]); const u = [F[0] / n, F[1] / n]; return pts.every((p) => perto(dist(p, F), Math.abs(p[0] * u[0] + p[1] * u[1] + n), 1e-9)); };
    return {
      d: "media",
      e: "Onde fica o foco da parábola cuja equação é y = x²/4?",
      o,
      x: "Reescrevendo: x² = 4y, que é a forma x² = 4py com p = 1. O foco é (0, p) = (0, 1), e a diretriz é y = −1. Conferindo com o ponto (2, 1) da parábola: ele dista 2 do foco (0, 1) e 2 da diretriz y = −1.\n\n(0, 4) usa 4p como se fosse p. (0, 1/4) usa o coeficiente de x² como se fosse p. (1, 0) põe o foco no eixo x, que não é o eixo desta parábola. E (0, 1/16) eleva ao quadrado o coeficiente 1/4.",
      v: { i: () => unicoV(o.map((t) => focoOk(lerPontos(t)[0]))) },
    };
  })(),
  (() => {
    const o = ["12", "6", "3", "24", "36"];
    const f = lerEquacao("y² = 12x");
    const pts = intervalo(-6, 6).map((y) => [(y * y) / 12, y]);
    return {
      d: "media",
      e: "O lado reto de uma parábola é a corda que passa pelo foco e é perpendicular ao eixo. Qual é o comprimento do lado reto da parábola y² = 12x?",
      o,
      x: "Em y² = 4px, 4p = 12 e p = 3: o foco é (3, 0). A corda perpendicular ao eixo que passa pelo foco está na reta x = 3: y² = 36, y = ±6, e seu comprimento é 12. Em geral, o lado reto mede 4p — o próprio coeficiente de x.\n\n6 é a metade do lado reto. 3 é o valor de p. 24 dobra o comprimento. E 36 é y², sem a raiz. O lado reto dá uma boa noção da abertura da parábola: quanto maior o p, mais aberta ela é.",
      /* acha o foco (f, 0) cuja diretriz x = −f deixa todos os pontos equidistantes; depois mede a corda em x = f */
      v: { i: () => { let melhor = [0, Infinity]; for (let fo = 0.001; fo <= 10; fo += 0.001) { const e = Math.max(...pts.map((p) => Math.abs(dist(p, [fo, 0]) - Math.abs(p[0] + fo)))); if (e < melhor[1]) melhor = [fo, e]; } const z = zeros((y) => f(melhor[0], y), -50, 50); return escolhe(z[z.length - 1] - z[0], o.map(lerReal), 1e-3); } },
    };
  })(),
  (() => {
    const o = ["(−1, 1)", "(−2, 1)", "(−3, 1)", "(1, 1)", "(−1, −1)"];
    const f = lerEquacao("(y − 1)² = 4(x + 2)");
    const pts = [-3, -1, 0, 2, 3, 5].map((y) => [zeros((x) => f(x, y), -50, 50)[0], y]);
    return {
      d: "media",
      e: "A parábola (y − 1)² = 4(x + 2) tem o vértice fora da origem. Em que ponto fica o seu foco?",
      o,
      x: "É a parábola y² = 4x deslocada: o vértice passa de (0, 0) para (−2, 1). Com 4p = 4, p = 1, e o eixo é horizontal — a variável ao quadrado é y —, com abertura para a direita. O foco fica 1 unidade à direita do vértice: (−2 + 1, 1) = (−1, 1).\n\n(−2, 1) é o vértice. (−3, 1) põe o foco do lado errado, à esquerda do vértice. (1, 1) desloca só a ordenada do foco da parábola y² = 4x, que é (1, 0). E (−1, −1) erra o sinal da ordenada do vértice.",
      /* vértice = ponto da curva de menor abscissa; a diretriz é o simétrico do foco em relação ao vértice */
      v: { i: () => { let V = [Infinity, 0]; for (let y = -10; y <= 10; y += 0.001) { const x = zeros((x) => f(x, y), -50, 50, 2000)[0]; if (x < V[0]) V = [x, y]; } return unicoV(o.map((t) => { const [F] = lerPontos(t); const w = [F[0] - V[0], F[1] - V[1]]; const n = Math.hypot(...w); if (n < 1e-9) return false; const u = [w[0] / n, w[1] / n], D = [V[0] - w[0], V[1] - w[1]]; return pts.every((p) => perto(dist(p, F), Math.abs((p[0] - D[0]) * u[0] + (p[1] - D[1]) * u[1]), 1e-6)); })); } },
    };
  })(),
  (() => {
    const o = ["(0, 4)", "(0, 2)", "(0, 10)", "(0, 6)", "(0, 3)"];
    return {
      d: "media",
      e: "Uma parábola de eixo vertical tem vértice (1, 2) e passa pelo ponto (3, 10). Em que ponto ela corta o eixo y?",
      o,
      x: "Com vértice (1, 2), a parábola é y = a(x − 1)² + 2. Passando por (3, 10): 10 = 4a + 2, e a = 2. Então y = 2(x − 1)² + 2, e em x = 0, y = 2 + 2 = 4: o ponto é (0, 4). Por simetria em relação à reta x = 1, o ponto (2, 4) também está na parábola.\n\n(0, 2) usa a ordenada do vértice, como se o vértice estivesse no eixo y. (0, 10) usa a ordenada do ponto dado. (0, 6) toma a = 4, esquecendo de dividir 8 por 4. E (0, 3) toma a = 1.",
      /* y = px² + qx + r com y(1) = 2, y'(1) = 0 e y(3) = 10 */
      v: { i: () => { const [, , r] = resolve([[1, 1, 1], [2, 1, 0], [9, 3, 1]], [2, 0, 10]); return unicoV(o.map((t) => { const [p] = lerPontos(t); return p[0] === 0 && perto(p[1], r); })); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["4", "6", "2√5", "16", "√56"];
    const C = [1, 1], R = Math.sqrt(20), P = [7, 1];
    return {
      d: "dificil",
      e: "Por um ponto P(7, 1), exterior à circunferência (x − 1)² + (y − 1)² = 20, traça-se uma reta tangente a ela. Qual é a distância de P ao ponto de tangência?",
      o,
      x: "O raio que vai ao ponto de tangência T é perpendicular à tangente, então o triângulo formado pelo centro C(1, 1), por T e por P é retângulo em T. A hipotenusa CP mede 6 — de (1, 1) a (7, 1) —, e o cateto CT é o raio, √20. Por Pitágoras, PT² = 36 − 20 = 16, e PT = 4.\n\n6 é a distância de P ao centro. 2√5 é o raio. 16 é PT², sem a raiz. E √56 soma os quadrados em vez de subtrair, como se o ângulo reto estivesse no centro.",
      /* ponto de tangência: onde o raio CT fica perpendicular a PT */
      v: { i: () => { const T = (t) => [C[0] + R * Math.cos(t), C[1] + R * Math.sin(t)]; const ts = zeros((t) => { const q = T(t); return (q[0] - C[0]) * (q[0] - P[0]) + (q[1] - C[1]) * (q[1] - P[1]); }, 0, 2 * Math.PI - 1e-9); const ds = ts.map((t) => dist(T(t), P)); if (ds.length !== 2 || !perto(ds[0], ds[1], 1e-7)) throw new Error("tangentes"); return escolhe(ds[0], o.map((t) => lerC(t).re), 1e-6); } },
    };
  })(),
  (() => {
    const o = ["(4, −2) e (−2, −2)", "(3, 0) e (−3, 0)", "(4, 2) e (−2, 2)", "(1, 1) e (1, −5)", "(5, −2) e (−3, −2)"];
    const f = lerEquacao("(x − 1)²/16 + (y + 2)²/7 = 1");
    return {
      d: "dificil",
      e: "A elipse (x − 1)²/16 + (y + 2)²/7 = 1 tem o centro fora da origem. Em que pontos ficam os seus focos?",
      o,
      x: "O centro é (1, −2). Com a² = 16 e b² = 7, c² = 16 − 7 = 9 e c = 3. O eixo maior é horizontal — o denominador maior está sob o termo em x —, então os focos ficam 3 unidades à esquerda e à direita do centro: (1 + 3, −2) = (4, −2) e (1 − 3, −2) = (−2, −2).\n\n(±3, 0) esquece o deslocamento do centro. (4, 2) e (−2, 2) erram o sinal da ordenada do centro. (1, 1) e (1, −5) põem os focos na vertical, sobre o eixo menor. E (5, −2) e (−3, −2) são os vértices do eixo maior, a 4 do centro.",
      v: { i: () => { const pts = pontosDe(f, [-2.5, -1, 0.5, 2, 3.4, 4.8]); return unicoV(o.map((t) => { const [F1, F2] = lerPontos(t); return constante(pts.map((p) => dist(p, F1) + dist(p, F2))); })); } },
    };
  })(),
  (() => {
    const o = ["18/5", "9/5", "6", "10/3", "36/5"];
    const f = lerEquacao("x²/25 + y²/9 = 1");
    return {
      d: "dificil",
      e: "Na elipse x²/25 + y²/9 = 1, qual é o comprimento da corda que passa por um dos focos e é perpendicular ao eixo maior?",
      o,
      x: "Os focos são (±4, 0), pois c² = 25 − 9 = 16. Na reta x = 4: 16/25 + y²/9 = 1, y² = 9 · 9/25 = 81/25, e y = ±9/5. A corda vai de (4, −9/5) a (4, 9/5) e mede 18/5. Em geral, esse comprimento — o lado reto da elipse — é 2b²/a = 2 · 9/5.\n\n9/5 é a metade da corda. 6 é o eixo menor, a corda perpendicular ao eixo maior que passa pelo centro, e não pelo foco. 10/3 inverte a fórmula, usando 2a/b. E 36/5 dobra o comprimento.",
      v: { i: () => { const pts = pontosDe(f, [-4.6, -2.5, -0.3, 1.8, 4.2]); let melhor = [0, Infinity]; for (let c = 0; c <= 5; c += 0.0005) { const s = pts.map((p) => dist(p, [c, 0]) + dist(p, [-c, 0])); const d = Math.max(...s) - Math.min(...s); if (d < melhor[1]) melhor = [c, d]; } const z = zeros((y) => f(melhor[0], y), -10, 10); return escolhe(z[1] - z[0], o.map(lerReal), 1e-3); } },
    };
  })(),
  (() => {
    const o = ["y²/9 − x²/16 = 1", "x²/9 − y²/16 = 1", "y²/16 − x²/9 = 1", "y²/9 + x²/16 = 1", "y²/9 − x²/34 = 1"];
    /* pontos pela definição: |d(P, F₁) − d(P, F₂)| = 6, com F = (0, ±5), no ramo de cima */
    const pts = [-6, -3, -1, 0, 2, 5].map((x) => [x, bissecao((y) => Math.abs(dist([x, y], [0, 5]) - dist([x, y], [0, -5])) - 6, 0, 60)]);
    return {
      d: "dificil",
      e: "Qual é a equação da hipérbole de focos (0, 5) e (0, −5) e vértices (0, 3) e (0, −3)?",
      o,
      x: "Os focos e os vértices estão no eixo y, então o eixo real é vertical e o termo positivo é o de y². O semieixo real é a = 3 (distância do centro ao vértice), e c = 5 (ao foco). Na hipérbole, b² = c² − a² = 16. A equação é y²/9 − x²/16 = 1.\n\nx²/9 − y²/16 = 1 põe o eixo real na horizontal. y²/16 − x²/9 = 1 troca a² e b². y²/9 + x²/16 = 1 é uma elipse. E y²/9 − x²/34 = 1 usa b² = c² + a², a relação trocada.",
      v: { i: () => unicoV(o.map((t) => { const f = lerEquacao(t); return pts.every(([x, y]) => Math.abs(f(x, y)) < 1e-7); })) },
    };
  })(),
  (() => {
    const o = ["(1, 2)", "(−1, −2)", "(1, 8)", "(1, −2)", "(2, 1)"];
    const f = lerEquacao("x² − 4y² − 2x + 16y − 19 = 0");
    return {
      d: "dificil",
      e: "A equação x² − 4y² − 2x + 16y − 19 = 0 representa uma hipérbole. Qual é o seu centro?",
      o,
      x: "Completando quadrados: x² − 2x = (x − 1)² − 1, e −4y² + 16y = −4(y² − 4y) = −4(y − 2)² + 16. A equação fica (x − 1)² − 4(y − 2)² − 1 + 16 − 19 = 0, ou (x − 1)² − 4(y − 2)² = 4, isto é, (x − 1)²/4 − (y − 2)² = 1. O centro é (1, 2).\n\n(−1, −2) troca os dois sinais. (1, 8) esquece de pôr o 4 em evidência antes de completar o quadrado em y. (1, −2) erra o sinal da ordenada. E (2, 1) troca as coordenadas.",
      v: { i: () => { const pts = pontosDe(f, [-6, -3, -1.5, 3.5, 5, 7]); return unicoV(o.map((t) => { const [c] = lerPontos(t); return pts.every(([x, y]) => Math.abs(f(2 * c[0] - x, 2 * c[1] - y)) < 1e-6); })); } },
    };
  })(),
  (() => {
    const o = ["3√2", "3", "18", "√10", "5"];
    return {
      d: "dificil",
      e: "A reta y = x + 2 corta a parábola y = x² em dois pontos. Qual é a distância entre eles?",
      o,
      x: "Igualando: x² = x + 2, ou x² − x − 2 = 0, de raízes x = 2 e x = −1. Os pontos são (2, 4) e (−1, 1). A distância é √((2 + 1)² + (4 − 1)²) = √(9 + 9) = 3√2.\n\n3 é só a diferença das abscissas (ou das ordenadas), esquecendo a outra coordenada. 18 é o quadrado da distância. √10 usa x = 1 no lugar de x = −1, um erro de sinal na raiz. E 5 mede a distância de (2, 4) até (−1, 0), ponto do eixo x que não está na parábola.",
      v: { i: () => { const xs = zeros((x) => x * x - (x + 2), -10, 10); const P = xs.map((x) => [x, x * x]); return escolhe(dist(P[0], P[1]), o.map((t) => lerC(t).re), 1e-6); } },
    };
  })(),
  (() => {
    const o = ["y = 2x − 1", "y = x", "y = 2x + 1", "y = −2x + 3", "y = x + 1"];
    const par = lerEquacao("y = x²");
    return {
      d: "dificil",
      e: "Qual é a equação da reta tangente à parábola y = x² no ponto (1, 1)?",
      o,
      x: "Uma reta pelo ponto (1, 1) tem equação y = m(x − 1) + 1. Na interseção com a parábola: x² − mx + m − 1 = 0, cujo discriminante é m² − 4m + 4 = (m − 2)². A reta é tangente quando há um único ponto comum, isto é, discriminante nulo: m = 2. A tangente é y = 2(x − 1) + 1 = 2x − 1.\n\ny = x passa por (1, 1), mas corta a parábola também em (0, 0). y = 2x + 1 tem a inclinação certa, mas não passa por (1, 1). y = −2x + 3 passa por (1, 1) com a inclinação de sinal trocado e corta a parábola em outro ponto, (−3, 9). E y = x + 1 nem passa por (1, 1).",
      v: { i: () => unicoV(o.map((t) => { const f = lerEquacao(t); return Math.abs(f(1, 1)) < 1e-9 && cortes(retaDe(f), par) === 1; })) },
    };
  })(),
  (() => {
    const o = ["Um único ponto", "Uma circunferência de raio √5", "Uma circunferência de raio 5", "O conjunto vazio", "Uma reta"];
    const f = lerEquacao("x² + y² − 2x + 4y + 5 = 0");
    return {
      d: "dificil",
      e: "Que conjunto de pontos do plano é descrito pela equação x² + y² − 2x + 4y + 5 = 0?",
      o,
      x: "Completando quadrados: (x − 1)² + (y + 2)² − 1 − 4 + 5 = 0, ou (x − 1)² + (y + 2)² = 0. Uma soma de quadrados só é zero quando os dois são zero: x = 1 e y = −2. A equação descreve apenas o ponto (1, −2) — uma “circunferência de raio zero”.\n\nRaio √5 lê o termo independente como r². Raio 5 usa o próprio termo independente como raio. O conjunto vazio apareceria se o segundo membro ficasse negativo, como em x² + y² − 2x + 4y + 6 = 0. E uma reta exigiria uma equação do 1º grau.",
      /* o primeiro membro tem mínimo m: m > 0 dá conjunto vazio; m = 0, um ponto; m < 0, circunferência de raio √(−m) */
      v: { i: () => { let m = Infinity; for (let x = -10; x <= 10; x += 0.05) for (let y = -10; y <= 10; y += 0.05) m = Math.min(m, f(x, y)); const tipo = Math.abs(m) < 1e-9 ? "ponto" : m > 0 ? "vazio" : Math.sqrt(-m); return unicoV([tipo === "ponto", typeof tipo === "number" && perto(tipo, Math.sqrt(5)), typeof tipo === "number" && perto(tipo, 5), tipo === "vazio", false]); } },
    };
  })(),
  (() => {
    const o = ["Uma circunferência de centro (3, 0) e raio 2", "A mediatriz do segmento AB", "Uma circunferência de centro (1/2, 0) e raio 3/2", "Uma elipse de focos A e B", "Uma circunferência de centro (3, 0) e raio 4"];
    const A = [-1, 0], B = [2, 0];
    /* pontos pela definição: |PA| = 2|PB| */
    const pts = [1.2, 2, 3, 4, 4.8].map((x) => [x, bissecao((y) => dist([x, y], A) - 2 * dist([x, y], B), 0, 100)]);
    const naCirc = (c, r) => pts.every((p) => perto(dist(p, c), r, 1e-7));
    return {
      d: "dificil",
      e: "Qual é o lugar geométrico dos pontos P do plano cuja distância ao ponto A(−1, 0) é o dobro da distância ao ponto B(2, 0)?",
      o,
      x: "Com P = (x, y): (x + 1)² + y² = 4[(x − 2)² + y²]. Desenvolvendo: x² + 2x + 1 + y² = 4x² − 16x + 16 + 4y², ou 3x² + 3y² − 18x + 15 = 0; dividindo por 3, x² + y² − 6x + 5 = 0. Completando o quadrado: (x − 3)² + y² = 4. É a circunferência de centro (3, 0) e raio 2, chamada circunferência de Apolônio. Conferindo: o ponto (1, 0) dista 2 de A e 1 de B.\n\nA mediatriz seria o lugar dos pontos equidistantes, com razão 1, e não 2. A circunferência de centro (1/2, 0) e raio 3/2 tem AB como diâmetro, o que não tem relação com a razão pedida. A elipse corresponde a soma de distâncias constante. E o raio 4 esquece de extrair a raiz.",
      v: { i: () => unicoV([naCirc([3, 0], 2), pts.every((p) => perto(p[0], 0.5, 1e-7)), naCirc([0.5, 0], 1.5), constante(pts.map((p) => dist(p, A) + dist(p, B))), naCirc([3, 0], 4)]) },
    };
  })(),
  (() => {
    const o = ["√2/2", "1/2", "√3/2", "1", "√2"];
    return {
      d: "dificil",
      e: "Numa elipse, o eixo menor tem o mesmo comprimento que a distância entre os focos. Qual é a excentricidade dessa elipse?",
      o,
      x: "Eixo menor igual à distância focal significa 2b = 2c, ou b = c. Pela relação a² = b² + c² = 2c², vem a = c√2. A excentricidade é e = c/a = 1/√2 = √2/2.\n\n1/2 supõe a = 2c. √3/2 corresponde a b = a/2, e não a b = c. 1 é a excentricidade da parábola, e nenhuma elipse a atinge. E √2 inverte a razão, a/c, e daria um valor maior que 1. Numa elipse assim, os dois focos e os dois vértices do eixo menor são vértices de um quadrado centrado no centro da elipse.",
      /* focos (±1, 0) e vértice do eixo menor em (0, 1): a soma das distâncias desse ponto aos focos dá 2a */
      v: { i: () => { const c = 1, b = c; const a = (dist([0, b], [c, 0]) + dist([0, b], [-c, 0])) / 2; return escolhe(c / a, o.map(lerReal), 1e-9); } },
    };
  })(),
];
