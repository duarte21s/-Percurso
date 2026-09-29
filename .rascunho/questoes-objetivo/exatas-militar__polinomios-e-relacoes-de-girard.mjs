/* Rascunho — Exatas nível militar / Polinômios e relações de Girard.

   A explicação usa Girard, Briot-Ruffini e o teorema do resto; a
   conferência chega ao número por outro caminho: raízes numéricas
   (Durand–Kerner) para somas e produtos, divisão longa para quocientes e
   restos, busca em inteiros para parâmetros, sistema linear para
   interpolação. As alternativas com polinômio são lidas do próprio texto
   (lerPol). */

import { unicoV, intervalo, escolhe, lerC, lerReal, lerPol, cx, somaC, vezesC, divC, potC, modC, avalia, raizesPol, deRaizes, deRaizesC, divPol, multPol, potPol, aparaPol, igualPol, resolve, perto } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Polinômios e relações de Girard";
export const arquivo = "exatas-militar__polinomios-e-relacoes-de-girard";

const qualR = (x, alt, tol = 1e-7) => unicoV(alt.map((t) => { const w = lerC(t); return Math.abs(w.im) < 1e-12 && perto(w.re, x, tol); }));
const qualPol = (p, alt) => unicoV(alt.map((t) => igualPol(lerPol(t), p, 1e-7)));
const resto = (p, d) => aparaPol(divPol(p, d).r);
const reais = (rs) => rs.filter((z) => Math.abs(z.im) < 1e-6).map((z) => z.re).sort((a, b) => a - b);
const soma = (zs) => zs.reduce(somaC, cx(0));
const prod = (zs) => zs.reduce(vezesC, cx(1));
/* "3 e −1" → [3, −1] */
const par = (t) => t.split(" e ").map(lerReal);
const mesmoConj = (a, b) => a.length === b.length && [...a].sort((x, y) => x - y).every((x, i) => perto(x, [...b].sort((p, q) => p - q)[i], 1e-7));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["3", "−29", "−5", "0", "−2"];
    return {
      d: "facil",
      e: "Qual é o resto da divisão do polinômio P(x) = x³ − 2x² + 4x − 5 por x − 2?",
      o,
      x: "Pelo teorema do resto, o resto da divisão de P(x) por x − 2 é P(2): 2³ − 2 · 2² + 4 · 2 − 5 = 8 − 8 + 8 − 5 = 3. Pelo dispositivo de Briot-Ruffini com a raiz 2, os coeficientes 1, −2, 4, −5 viram 1, 0, 4 e resto 3.\n\n−29 é P(−2): troca o sinal da raiz do divisor. −5 é só o termo independente, que seria o resto da divisão por x. 0 supõe, sem conferir, que x − 2 seja fator. E −2 é P(1), a soma dos coeficientes.",
      v: { i: () => qualR(resto([1, -2, 4, -5], [1, -2])[0], o) },
    };
  })(),
  (() => {
    const o = ["3", "−3", "6", "5/2", "1/2"];
    return {
      d: "facil",
      e: "Qual é a soma das raízes da equação 2x³ − 6x² + 5x − 1 = 0?",
      o,
      x: "Pelas relações de Girard, numa equação ax³ + bx² + cx + d = 0 a soma das raízes é −b/a. Aqui, −(−6)/2 = 3. Não é preciso achar as raízes para somá-las.\n\n−3 esquece o sinal de menos da relação. 6 esquece de dividir pelo coeficiente líder, 2. 5/2 é c/a, que é a soma dos produtos das raízes tomadas duas a duas. E 1/2 é −d/a, o produto das três raízes.",
      v: { i: () => { const s = soma(raizesPol([2, -6, 5, -1])); if (Math.abs(s.im) > 1e-7) throw new Error("soma não real"); return qualR(s.re, o); } },
    };
  })(),
  (() => {
    const o = ["−6", "6", "4", "1", "−4"];
    return {
      d: "facil",
      e: "Qual é o produto das raízes da equação x³ − 4x² + x + 6 = 0?",
      o,
      x: "Numa equação do 3º grau ax³ + bx² + cx + d = 0, o produto das raízes é −d/a. Aqui, −6/1 = −6. Conferindo: 2 é raiz (8 − 16 + 2 + 6 = 0), as outras são 3 e −1, e 2 · 3 · (−1) = −6.\n\n6 esquece o sinal de menos da relação, que aparece em grau ímpar. 4 é a soma das raízes (−b/a). 1 é c/a, a soma dos produtos dois a dois. E −4 é a soma com o sinal trocado.",
      v: { i: () => qualR(prod(raizesPol([1, -4, 1, 6])).re, o) },
    };
  })(),
  (() => {
    const o = ["7", "12", "4", "3", "1"];
    return {
      d: "facil",
      e: "Se P(x) é um polinômio de grau 3 e Q(x) é um polinômio de grau 4, qual é o grau do produto P(x) · Q(x)?",
      o,
      x: "Ao multiplicar, o termo de maior grau do produto vem do produto dos termos de maior grau dos fatores: a·x³ vezes b·x⁴ dá ab·x⁷, com ab ≠ 0. Por isso o grau do produto é a soma dos graus: 3 + 4 = 7.\n\n12 multiplica os graus, o que valeria para a composição P(Q(x)), e não para o produto. 4 fica com o maior dos graus, regra que vale para a soma de polinômios de graus diferentes. 3 fica com o menor. E 1 subtrai os graus, como no quociente de Q por P.",
      v: { i: () => qualR(aparaPol(multPol([2, -1, 0, 5], [-3, 0, 4, 1, -7])).length - 1, o) },
    };
  })(),
  (() => {
    const o = ["−3", "3", "−9", "−7", "−5"];
    return {
      d: "facil",
      e: "Para que valor de k o número 1 é raiz do polinômio P(x) = x³ + kx² − 3x + 5?",
      o,
      x: "Se 1 é raiz, então P(1) = 0: 1³ + k · 1² − 3 · 1 + 5 = 0, isto é, 1 + k − 3 + 5 = 0, ou k + 3 = 0. Logo k = −3. Conferindo: x³ − 3x² − 3x + 5 vale 1 − 3 − 3 + 5 = 0 em x = 1.\n\n3 erra o sinal na última passagem. −9 troca o sinal de −3x. −7 impõe a condição em x = −1, e não em x = 1. E −5 faz k igual ao oposto do termo independente, esquecendo os outros termos.",
      v: { i: () => { const ks = intervalo(-20, 20).filter((k) => avalia([1, k, -3, 5], 1) === 0); if (ks.length !== 1) throw new Error("k"); return qualR(ks[0], o); } },
    };
  })(),
  (() => {
    const o = ["x − 3", "x + 3", "x − 2", "x + 2", "x − 5"];
    return {
      d: "facil",
      e: "O polinômio x² − 5x + 6 é divisível por x − 2. Qual é o outro fator do 1º grau, isto é, o quociente dessa divisão?",
      o,
      x: "Como 2 é raiz de x² − 5x + 6 (4 − 10 + 6 = 0), a divisão por x − 2 é exata. Pelo dispositivo de Briot-Ruffini, os coeficientes 1, −5, 6 com a raiz 2 dão 1, −3 e resto 0: o quociente é x − 3. De fato, (x − 2)(x − 3) = x² − 5x + 6.\n\nx + 3 erra o sinal do termo independente. x − 2 repete o divisor. x + 2 muda o sinal do divisor. E x − 5 copia os dois primeiros coeficientes do dividendo, sem fazer a divisão.",
      v: { i: () => qualPol(divPol([1, -5, 6], [1, -2]).q, o) },
    };
  })(),
  (() => {
    const o = ["3", "17", "−3", "10", "−17"];
    return {
      d: "facil",
      e: "O polinômio P(x) = x² + bx + c tem raízes 2 e 5. Qual é o valor de b + c?",
      o,
      x: "Com raízes 2 e 5, o polinômio mônico é (x − 2)(x − 5) = x² − 7x + 10. Logo b = −7, c = 10 e b + c = 3. Pelas relações de Girard: a soma das raízes é −b = 7 e o produto é c = 10. Um atalho: b + c = P(1) − 1 = (1 − 2)(1 − 5) − 1 = 3.\n\n17 toma b = 7, esquecendo o sinal da relação −b/a. −3 troca o sinal do resultado. 10 é só o valor de c. E −17 combina os dois sinais trocados.",
      v: { i: () => { const [, b, c] = deRaizes([2, 5]); return qualR(b + c, o); } },
    };
  })(),
  (() => {
    const o = ["2x² − x", "2x² − 5x + 6", "2x² − 3x + 1", "2x² − x − 4", "2x³ − x²"];
    return {
      d: "facil",
      e: "Aplicando o dispositivo de Briot-Ruffini para dividir 2x³ − 3x² + x − 4 por x − 1, que polinômio se obtém como quociente?",
      o,
      x: "No dispositivo de Briot-Ruffini com a raiz 1: baixa-se o 2; 2 · 1 + (−3) = −1; −1 · 1 + 1 = 0; 0 · 1 + (−4) = −4. Os três primeiros números, 2, −1 e 0, são os coeficientes do quociente, e o último é o resto: quociente 2x² − x, resto −4. Conferindo: (x − 1)(2x² − x) − 4 = 2x³ − 3x² + x − 4.\n\n2x² − 5x + 6 usa −1 no dispositivo, o que seria a divisão por x + 1. 2x² − 3x + 1 só copia os coeficientes do dividendo, baixando o grau. 2x² − x − 4 põe o resto dentro do quociente. E 2x³ − x² esquece que o quociente tem um grau a menos que o dividendo.",
      v: { i: () => qualPol(divPol([2, -3, 1, -4], [1, -1]).q, o) },
    };
  })(),
  (() => {
    const o = ["4", "−4", "10", "12", "7/3"];
    return {
      d: "facil",
      e: "Uma das raízes da equação x² − 7x + k = 0 é 3. Qual é a outra raiz?",
      o,
      x: "A soma das raízes de x² − 7x + k = 0 é 7, o oposto do coeficiente de x. Se uma raiz é 3, a outra é 7 − 3 = 4. Conferindo pelo produto: k = 3 · 4 = 12, e x² − 7x + 12 = (x − 3)(x − 4).\n\n−4 erra o sinal da soma, tomando −7. 10 soma 3 e 7 em vez de subtrair. 12 é o valor de k, o produto das raízes, e não a outra raiz. E 7/3 divide a soma pela raiz conhecida, confundindo soma com produto.",
      v: { i: () => { const ks = intervalo(-50, 50).filter((k) => avalia([1, -7, k], 3) === 0); if (ks.length !== 1) throw new Error("k"); const outra = reais(raizesPol([1, -7, ks[0]])).filter((r) => !perto(r, 3, 1e-6)); return qualR(outra[0], o); } },
    };
  })(),
  (() => {
    const o = ["−1", "1", "3", "0", "−3"];
    return {
      d: "facil",
      e: "Para que o polinômio (a − 1)x² + (b + 2)x + c seja identicamente nulo, isto é, valha zero para todo x real, qual deve ser o valor de a + b + c?",
      o,
      x: "Um polinômio é identicamente nulo quando todos os seus coeficientes são zero: a − 1 = 0, b + 2 = 0 e c = 0. Então a = 1, b = −2, c = 0, e a + b + c = −1.\n\n3 erra o sinal de b, tomando b = 2. −3 erra o sinal de a, tomando a = −1. 1 usa só a condição sobre a e esquece as outras duas. E 0 confunde a soma pedida com o valor do próprio polinômio, que é zero.",
      /* um polinômio de grau ≤ 2 que se anula em três pontos é o polinômio nulo */
      v: { i: () => { const sols = []; for (const a of intervalo(-5, 5)) for (const b of intervalo(-5, 5)) for (const c of intervalo(-5, 5)) if ([0, 1, 2].every((x) => avalia([a - 1, b + 2, c], x) === 0)) sols.push(a + b + c); if (sols.length !== 1) throw new Error("soluções"); return qualR(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["3", "2", "7", "10", "1"];
    return {
      d: "facil",
      e: "Na divisão de um polinômio de grau 5 por um polinômio de grau 2, qual é o grau do quociente?",
      o,
      x: "Na divisão P(x) = D(x) · Q(x) + R(x), o resto tem grau menor que o do divisor e não interfere no termo de maior grau. Então o grau de D · Q, que é a soma dos graus, precisa ser 5: 2 + grau Q = 5, e o quociente tem grau 3.\n\n2 copia o grau do divisor. 7 soma os graus, como num produto. 10 multiplica os graus. E 1 é o grau máximo do resto, que precisa ser menor que o grau do divisor — não é o grau do quociente.",
      v: { i: () => qualR(aparaPol(divPol([3, -1, 0, 2, 5, -4], [2, 1, -3]).q).length - 1, o) },
    };
  })(),
  (() => {
    const o = ["1", "32", "−1", "0", "243"];
    return {
      d: "facil",
      e: "Qual é a soma dos coeficientes do polinômio P(x) = (2x − 1)⁵, depois de desenvolvido?",
      o,
      x: "A soma dos coeficientes de qualquer polinômio é o seu valor em x = 1, porque cada potência de x vira 1. Então basta calcular P(1) = (2 · 1 − 1)⁵ = 1⁵ = 1, sem desenvolver nada.\n\n32 é só o coeficiente líder, 2⁵. −1 é P(0), o termo independente, (−1)⁵. 0 supõe que os coeficientes, com sinais alternados, se cancelem. E 243 é 3⁵, a soma dos valores absolutos dos coeficientes, que é |P(−1)|.",
      v: { i: () => qualR(potPol([2, -1], 5).reduce((s, c) => s + c, 0), o) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["14", "4", "−6", "24", "36"];
    return {
      d: "media",
      e: "Sendo a, b e c as raízes de x³ − 2x² − 5x + 6 = 0, qual é o valor de a² + b² + c²?",
      o,
      x: "Pela identidade (a + b + c)² = a² + b² + c² + 2(ab + ac + bc), a soma dos quadrados é S₁² − 2S₂. Pelas relações de Girard, S₁ = a + b + c = 2 e S₂ = ab + ac + bc = −5. Então a² + b² + c² = 4 − 2(−5) = 14. Conferindo: as raízes são 1, −2 e 3, e 1 + 4 + 9 = 14.\n\n4 é só S₁², sem o termo dos produtos. −6 soma 2S₂ em vez de subtrair. 24 subtrai 4S₂, dobrando o termo. E 36 é o quadrado do produto das raízes, abc = −6.",
      v: { i: () => qualR(soma(raizesPol([1, -2, -5, 6]).map((z) => vezesC(z, z))).re, o) },
    };
  })(),
  (() => {
    const o = ["4/5", "3/5", "5/4", "−4/5", "3/4"];
    return {
      d: "media",
      e: "Sendo a, b e c as raízes de 2x³ − 3x² + 4x − 5 = 0, qual é o valor de 1/a + 1/b + 1/c?",
      o,
      x: "1/a + 1/b + 1/c = (bc + ac + ab)/(abc) = S₂/S₃. Pelas relações de Girard em 2x³ − 3x² + 4x − 5 = 0: S₂ = 4/2 = 2 e S₃ = −(−5)/2 = 5/2. Logo a soma dos inversos é 2 ÷ (5/2) = 4/5.\n\n3/5 usa S₁ = 3/2 no numerador, no lugar de S₂. 5/4 inverte a fração. −4/5 erra o sinal do produto. E 3/4 divide S₁ por S₂, trocando as duas relações. As raízes dessa equação não são inteiras, e calculá-las seria trabalhoso; as relações de Girard dão a resposta sem que seja preciso achá-las.",
      v: { i: () => { const s = soma(raizesPol([2, -3, 4, -5]).map((z) => divC(cx(1), z))); return qualR(s.re, o); } },
    };
  })(),
  (() => {
    const o = ["3", "9", "1", "5", "23/3"];
    return {
      d: "media",
      e: "As raízes da equação x³ − 9x² + 23x − 15 = 0 estão em progressão aritmética. Qual é a raiz do meio?",
      o,
      x: "Em progressão aritmética, as raízes podem ser escritas como m − r, m e m + r. A soma é 3m, e pelas relações de Girard vale 9. Então m = 3. Conferindo: 27 − 81 + 69 − 15 = 0, e as outras raízes são 1 e 5, cujo produto com 3 dá 15, como pede o termo independente.\n\n9 é a soma das raízes, e não a do meio. 1 e 5 são as raízes das pontas. E 23/3 divide por 3 o coeficiente de x, que corresponde à soma dos produtos dois a dois, e não à soma das raízes.",
      v: { i: () => { const r = reais(raizesPol([1, -9, 23, -15])); if (r.length !== 3 || !perto(r[1] - r[0], r[2] - r[1], 1e-7)) throw new Error("PA"); return qualR(r[1], o); } },
    };
  })(),
  (() => {
    const o = ["2", "8", "7/3", "4", "14"];
    return {
      d: "media",
      e: "Sabe-se que as três raízes de x³ − 7x² + 14x − 8 = 0 formam uma progressão geométrica. Qual é o termo central dessa progressão?",
      o,
      x: "Numa progressão geométrica, as raízes podem ser escritas como m/q, m e mq, e o produto delas é m³. Pelas relações de Girard, o produto vale −(−8)/1 = 8, então m³ = 8 e m = 2. Conferindo: 8 − 28 + 28 − 8 = 0, e as outras raízes são 1 e 4.\n\n8 é o produto das raízes. 7/3 divide a soma por 3, raciocínio que vale para progressão aritmética. 4 é a maior raiz. E 14 é a soma dos produtos dois a dois.",
      v: { i: () => { const r = reais(raizesPol([1, -7, 14, -8])); if (r.length !== 3 || !perto(r[1] / r[0], r[2] / r[1], 1e-7)) throw new Error("PG"); return qualR(r[1], o); } },
    };
  })(),
  (() => {
    const o = ["2x + 1", "x + 2", "8", "2x − 1", "15"];
    /* um polinômio de grau 3 qualquer com P(1) = 3 e P(2) = 5: fixa os dois primeiros coeficientes e resolve os outros */
    const exemplo = (c3, c2) => { const [c1, c0] = resolve([[1, 1], [2, 1]], [3 - c3 - c2, 5 - 8 * c3 - 4 * c2]); return [c3, c2, c1, c0]; };
    return {
      d: "media",
      e: "Um polinômio P(x) deixa resto 3 na divisão por x − 1 e resto 5 na divisão por x − 2. Qual é o resto da divisão de P(x) por (x − 1)(x − 2)?",
      o,
      x: "O divisor tem grau 2, então o resto tem grau no máximo 1: R(x) = ax + b. Como P(x) = (x − 1)(x − 2)Q(x) + ax + b, substituir x = 1 e x = 2 anula o primeiro termo: a + b = 3 e 2a + b = 5. Daí a = 2 e b = 1, e o resto é 2x + 1.\n\nx + 2 satisfaz a primeira condição (vale 3 em x = 1), mas vale 4 em x = 2. 8 soma os restos, e 15 os multiplica, como se o resto por um produto viesse de operar os restos. E 2x − 1 erra o sinal de b.",
      v: { i: () => { const r1 = resto(exemplo(2, -1), [1, -3, 2]), r2 = resto(exemplo(-5, 7), [1, -3, 2]); if (!igualPol(r1, r2, 1e-7)) throw new Error("resto depende de P"); return qualPol(r1, o); } },
    };
  })(),
  (() => {
    const o = ["3", "1", "2", "4", "0"];
    return {
      d: "media",
      e: "Qual é a multiplicidade da raiz 1 no polinômio P(x) = x⁴ − 5x³ + 9x² − 7x + 2?",
      o,
      x: "Divide-se P(x) por x − 1 enquanto a divisão for exata. Por Briot-Ruffini: 1, −5, 9, −7, 2 → 1, −4, 5, −2 e resto 0; depois → 1, −3, 2 e resto 0; depois → 1, −2 e resto 0; por fim, 1, −2 → resto −1, que não é zero. Foram três divisões exatas: P(x) = (x − 1)³(x − 2), e a multiplicidade é 3.\n\n1 para na primeira divisão exata. 2 para na segunda. 4 toma o grau do polinômio como multiplicidade, mas a raiz 2 também aparece. E 0 supõe que 1 nem seja raiz — e 1 − 5 + 9 − 7 + 2 = 0 mostra que é.",
      v: { i: () => { let p = [1, -5, 9, -7, 2], n = 0; for (;;) { const { q, r } = divPol(p, [1, -1]); if (Math.abs(r[0]) > 1e-9) break; n++; p = q; } return qualR(n, o); } },
    };
  })(),
  (() => {
    const o = ["16", "8", "32", "−16", "4"];
    return {
      d: "media",
      e: "Um polinômio P(x) de grau 3 tem raízes 1, −1 e 2, e P(0) = 4. Qual é o valor de P(3)?",
      o,
      x: "Com essas raízes, P(x) = a(x − 1)(x + 1)(x − 2) para algum a ≠ 0. De P(0) = 4: a · (−1) · 1 · (−2) = 2a = 4, então a = 2. Logo P(3) = 2 · 2 · 4 · 1 = 16.\n\n8 supõe a = 1, esquecendo de ajustar o coeficiente líder pela condição P(0) = 4. 32 usa a = 4, igualando a a P(0). −16 erra o sinal ao calcular P(0) e acha a = −2. E 4 repete o valor de P(0).",
      v: { i: () => { const base = deRaizes([1, -1, 2]); const a = 4 / avalia(base, 0); return qualR(a * avalia(base, 3), o); } },
    };
  })(),
  (() => {
    const o = ["3 e −1", "−3 e 1", "2 e 3", "1 e 6", "−2 e −3"];
    return {
      d: "media",
      e: "Sabendo que 2 é raiz de x³ − 4x² + x + 6 = 0, quais são as outras duas raízes?",
      o,
      x: "Dividindo por x − 2 com Briot-Ruffini: 1, −4, 1, 6 → 1, −2, −3 e resto 0. O quociente é x² − 2x − 3, cujas raízes são 3 e −1 (soma 2, produto −3). Então x³ − 4x² + x + 6 = (x − 2)(x − 3)(x + 1).\n\n−3 e 1 erram os sinais das raízes do quociente. 2 e 3 repetem a raiz já conhecida. 1 e 6 são divisores do termo independente que não anulam o polinômio (em x = 1, ele vale 4). E −2 e −3 trocam o sinal de tudo.",
      v: { i: () => { const outras = reais(raizesPol([1, -4, 1, 6])).filter((r) => !perto(r, 2, 1e-6)); return unicoV(o.map((t) => mesmoConj(par(t), outras))); } },
    };
  })(),
  (() => {
    const o = ["10", "8", "4", "9", "7"];
    return {
      d: "media",
      e: "Um polinômio P(x) de grau 2 satisfaz P(0) = 1, P(1) = 2 e P(2) = 5. Qual é o valor de P(3)?",
      o,
      x: "Com P(x) = ax² + bx + c: P(0) = c = 1; P(1) = a + b + 1 = 2; P(2) = 4a + 2b + 1 = 5. Das duas últimas, a + b = 1 e 2a + b = 2, logo a = 1 e b = 0: P(x) = x² + 1, e P(3) = 10. Pelas diferenças: 1, 2, 5 têm diferenças 1 e 3, que crescem de 2 em 2; a próxima é 5, e 5 + 5 = 10.\n\n8 usa a reta que passa por P(1) e P(2), como se o polinômio fosse do 1º grau. 4 usa a reta que passa por P(0) e P(1). 9 é 3², esquecendo o termo independente. E 7 soma 2 ao último valor, confundindo a variação das diferenças com a própria diferença.",
      v: { i: () => qualR(avalia(resolve([[0, 0, 1], [1, 1, 1], [4, 2, 1]], [1, 2, 5]), 3), o) },
    };
  })(),
  (() => {
    const o = ["x", "1", "−x", "0", "x + 1"];
    return {
      d: "media",
      e: "Na divisão de x¹⁰¹ pelo polinômio x² − 1, obtêm-se um quociente Q(x) e um resto R(x). Qual é R(x)?",
      o,
      x: "O resto tem grau no máximo 1: R(x) = ax + b, e x¹⁰¹ = (x² − 1)Q(x) + ax + b. Em x = 1: 1 = a + b. Em x = −1: (−1)¹⁰¹ = −1 = −a + b. Somando, b = 0; então a = 1, e o resto é x. Outro caminho: como x² = (x² − 1) + 1, toda potência x²ᵏ deixa resto 1, e x¹⁰¹ = x · x¹⁰⁰ deixa resto x.\n\n1 é o resto de x¹⁰⁰, de expoente par. −x erra o sinal de (−1)¹⁰¹. 0 supõe que x² − 1 divida x¹⁰¹, mas x¹⁰¹ não se anula em x = 1. E x + 1 soma os valores obtidos em x = 1 e x = −1 como se fossem os coeficientes.",
      v: { i: () => qualPol(resto([1, ...Array(101).fill(0)], [1, 0, -1]), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "1/3", "−2", "3/2", "−1/2"];
    return {
      d: "media",
      e: "Qual dos números abaixo é raiz da equação 2x³ − 3x² − 3x + 2 = 0?",
      o,
      x: "Pelo teorema das raízes racionais, uma raiz p/q, em fração irredutível, tem p dividindo o termo independente (2) e q dividindo o coeficiente líder (2): os candidatos são ±1, ±2 e ±1/2. Testando 1/2: 2 · (1/8) − 3 · (1/4) − 3 · (1/2) + 2 = 1/4 − 3/4 − 3/2 + 2 = 0. As raízes são 1/2, 2 e −1.\n\n1/3 nem é candidata, porque 3 não divide o coeficiente líder. −2 é candidata, mas dá −20. 3/2 também não é candidata, e dá −5/2. E −1/2 dá 5/2 — é a raiz com o sinal trocado.",
      v: { i: () => unicoV(o.map((t) => Math.abs(avalia([2, -3, -3, 2], lerReal(t))) < 1e-12)) },
    };
  })(),
  (() => {
    const o = ["x³ − 4x² + 12x − 8 = 0", "2x³ − 4x² + 6x − 2 = 0", "x³ − 2x² + 3x − 8 = 0", "x³ − 4x² + 6x − 2 = 0", "8x³ − 8x² + 6x − 1 = 0"];
    return {
      d: "media",
      e: "As raízes de x³ − 2x² + 3x − 1 = 0 são a, b e c. Qual equação, com coeficiente de x³ igual a 1, tem raízes 2a, 2b e 2c?",
      o,
      x: "Se y = 2x, então x = y/2, e basta substituir: (y/2)³ − 2(y/2)² + 3(y/2) − 1 = 0, isto é, y³/8 − y²/2 + 3y/2 − 1 = 0. Multiplicando por 8: y³ − 4y² + 12y − 8 = 0. Regra prática: o coeficiente de cada termo fica multiplicado por 2 elevado ao número de graus que faltam para 3.\n\n2x³ − 4x² + 6x − 2 = 0 só multiplica a equação por 2, o que não muda as raízes. x³ − 2x² + 3x − 8 = 0 ajusta apenas o termo independente. x³ − 4x² + 6x − 2 = 0 dobra todos os coeficientes, exceto o líder. E 8x³ − 8x² + 6x − 1 = 0 troca x por 2x, o que produz as raízes a/2, b/2 e c/2.",
      v: { i: () => { const alvo = deRaizesC(raizesPol([1, -2, 3, -1]).map((z) => vezesC(z, cx(2)))); if (alvo.some((c) => Math.abs(c.im) > 1e-7)) throw new Error("não real"); const p = alvo.map((c) => c.re); return unicoV(o.map((t) => { const q = lerPol(t); return igualPol(q.map((c) => c / q[0]), p, 1e-7); })); } },
    };
  })(),
  (() => {
    const o = ["7", "−7", "5", "6", "1"];
    return {
      d: "media",
      e: "Sendo a, b e c as raízes de x³ − 3x² + 2x − 1 = 0, qual é o valor de (1 + a)(1 + b)(1 + c)?",
      o,
      x: "Como o polinômio é mônico, P(x) = (x − a)(x − b)(x − c). Em x = −1: P(−1) = (−1 − a)(−1 − b)(−1 − c) = −(1 + a)(1 + b)(1 + c). Como P(−1) = −1 − 3 − 2 − 1 = −7, o produto pedido é 7. Pelas relações de Girard dá o mesmo: 1 + S₁ + S₂ + S₃ = 1 + 3 + 2 + 1 = 7.\n\n−7 é P(−1), sem o sinal que vem dos três fatores negativos. 5 usa o produto das raízes com o sinal trocado (1 + 3 + 2 − 1). 6 esquece a parcela 1 do desenvolvimento. E 1 é P(1) com o sinal trocado: P(1) = 1 − 3 + 2 − 1 = −1.",
      v: { i: () => qualR(prod(raizesPol([1, -3, 2, -1]).map((z) => somaC(cx(1), z))).re, o) },
    };
  })(),
  (() => {
    const o = ["a = −6 e b = 11", "a = 6 e b = −11", "a = −3 e b = 2", "a = 3 e b = 2", "a = −6 e b = 5"];
    const le = (t) => t.replace(/−/g, "-").match(/a = (-?\d+) e b = (-?\d+)/).slice(1).map(Number);
    return {
      d: "media",
      e: "Para que valores de a e b o polinômio x³ + ax² + bx − 6 é divisível por (x − 1)(x − 2)?",
      o,
      x: "Ser divisível por (x − 1)(x − 2) significa ter 1 e 2 como raízes. P(1) = 1 + a + b − 6 = 0 dá a + b = 5. P(2) = 8 + 4a + 2b − 6 = 0 dá 2a + b = −1. Subtraindo, a = −6, e então b = 11. O polinômio é x³ − 6x² + 11x − 6 = (x − 1)(x − 2)(x − 3).\n\na = 6 e b = −11 trocam os sinais. a = −3 e b = 2 copiam os coeficientes de (x − 1)(x − 2) = x² − 3x + 2. a = 3 e b = 2 só garantem P(1) = 0: em x = 2, o polinômio vale 18. E a = −6 e b = 5 confundem a condição a + b = 5 com o valor de b.",
      v: { i: () => { const sols = []; for (const a of intervalo(-20, 20)) for (const b of intervalo(-20, 20)) if (resto([1, a, b, -6], [1, -3, 2]).every((c) => Math.abs(c) < 1e-9)) sols.push([a, b]); if (sols.length !== 1) throw new Error("soluções"); return unicoV(o.map((t) => { const [a, b] = le(t); return a === sols[0][0] && b === sols[0][1]; })); } },
    };
  })(),
  (() => {
    const o = ["1", "2", "−1", "−2", "3"];
    return {
      d: "media",
      e: "Sabendo que 1 + i é raiz de x³ − 3x² + 4x − 2 = 0, qual é a raiz real dessa equação?",
      o,
      x: "Os coeficientes são reais, então 1 − i também é raiz. Pela soma das raízes (Girard): (1 + i) + (1 − i) + r = 3, logo r = 1. Conferindo pelo produto: (1 + i)(1 − i) · r = 2r, que deve valer 2, o que também dá r = 1.\n\n2 é o produto das raízes, e não a raiz real. −1 erra o sinal na soma. −2 é o termo independente. E 3 é a soma das três raízes, e não a terceira.",
      v: { i: () => { const r = reais(raizesPol([1, -3, 4, -2])); if (r.length !== 1) throw new Error("raiz real"); return qualR(r[0], o); } },
    };
  })(),
  (() => {
    const o = ["2", "4", "0", "1", "3"];
    return {
      d: "media",
      e: "Resolvendo a equação biquadrada x⁴ + x² − 12 = 0 no conjunto dos números complexos, quantas das suas quatro raízes são números reais?",
      o,
      x: "Com y = x², a equação vira y² + y − 12 = 0, de raízes y = 3 e y = −4. Voltando: x² = 3 dá x = ±√3, duas raízes reais; x² = −4 dá x = ±2i, duas raízes não reais. São 2 raízes reais.\n\n4 conta as quatro raízes, incluindo ±2i, que não são reais. 0 supõe que nenhuma solução em y seja positiva. 1 conta só √3 e esquece −√3. E 3 conta as duas de x² = 3 e mais uma de x² = −4, que não tem solução real.",
      v: { i: () => qualR(reais(raizesPol([1, 0, 1, 0, -12])).length, o) },
    };
  })(),
  (() => {
    const o = ["35", "−35", "10", "24", "50"];
    return {
      d: "media",
      e: "As raízes de x⁴ − 10x³ + 35x² − 50x + 24 = 0 são a, b, c e d. Qual é o valor de ab + ac + ad + bc + bd + cd?",
      o,
      x: "Numa equação mônica de grau 4, x⁴ + a₃x³ + a₂x² + a₁x + a₀ = 0, a soma dos produtos das raízes tomadas duas a duas é a₂, com sinal positivo — os sinais das relações de Girard alternam: −, +, −, +. Aqui, o valor é 35. Conferindo: as raízes são 1, 2, 3 e 4, e 2 + 3 + 4 + 6 + 8 + 12 = 35.\n\n−35 aplica o sinal de menos, que vale para a soma e para os produtos três a três. 10 é a soma das raízes. 24 é o produto das quatro. E 50 é, em módulo, a soma dos produtos três a três.",
      v: { i: () => { const r = raizesPol([1, -10, 35, -50, 24]); let s = cx(0); for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) s = somaC(s, vezesC(r[i], r[j])); return qualR(s.re, o); } },
    };
  })(),
  (() => {
    const o = ["6", "24", "0", "10", "−6"];
    return {
      d: "media",
      e: "O polinômio P(x) = x³ + ax² + bx + c tem raízes 1, 2 e 3. Qual é o valor de P(4)?",
      o,
      x: "Um polinômio mônico de grau 3 com raízes 1, 2 e 3 é P(x) = (x − 1)(x − 2)(x − 3). Então P(4) = 3 · 2 · 1 = 6, sem precisar achar a, b e c.\n\n24 é 4 · 3 · 2, que seria calcular x(x − 1)(x − 2) em x = 4, com as raízes erradas. 0 supõe que 4 também seja raiz. 10 é a soma 1 + 2 + 3 + 4. E −6 é P(0), o termo independente c. Quem preferir achar os coeficientes chega ao mesmo valor: o polinômio é x³ − 6x² + 11x − 6, e 64 − 96 + 44 − 6 = 6.",
      v: { i: () => qualR(avalia(deRaizes([1, 2, 3]), 4), o) },
    };
  })(),
  (() => {
    const o = ["3", "4x + 3", "−2x + 3", "x + 3", "0"];
    return {
      d: "media",
      e: "Qual é o resto da divisão de x⁵ + 2x³ + x + 3 por x² + 1?",
      o,
      x: "Na divisão por x² + 1, pode-se trocar x² por −1 em tudo, porque x² ≡ −1. Então x⁵ = x · (x²)² ≡ x, 2x³ = 2x · x² ≡ −2x, e o polinômio fica x − 2x + x + 3 = 3. O resto é 3. De fato, x⁵ + 2x³ + x = x(x² + 1)².\n\n4x + 3 troca x² por +1. −2x + 3 erra x⁴, que vale (x²)² ≡ (−1)² = +1, e não −1. x + 3 guarda só o termo x do dividendo. E 0 supõe divisão exata, esquecendo o termo 3.",
      v: { i: () => qualPol(resto([1, 0, 2, 0, 1, 3], [1, 0, 1]), o) },
    };
  })(),
  (() => {
    const o = ["A = 2 e B = 1", "A = 1 e B = 2", "A = 3 e B = 1", "A = 2 e B = −1", "A = 4 e B = −2"];
    const le = (t) => t.replace(/−/g, "-").match(/A = (-?\d+) e B = (-?\d+)/).slice(1).map(Number);
    return {
      d: "media",
      e: "Os números A e B satisfazem (3x + 1)/(x² − 1) = A/(x − 1) + B/(x + 1) para todo x ≠ ±1. Quanto valem A e B?",
      o,
      x: "Somando as frações da direita: A(x + 1) + B(x − 1) = 3x + 1, para todo x. Em x = 1: 2A = 4, A = 2. Em x = −1: −2B = −2, B = 1. Conferindo pelos coeficientes: A + B = 3 e A − B = 1.\n\nA = 1 e B = 2 troca os valores. A = 3 e B = 1 copia os coeficientes do numerador. A = 2 e B = −1 erra o sinal em x = −1. E A = 4 e B = −2 esquece de dividir por 2 os valores obtidos nas substituições.",
      /* compara as duas frações em vários pontos, em vez de usar a identidade */
      v: { i: () => unicoV(o.map((t) => { const [A, B] = le(t); return [0.3, 2.7, -3.1, 5].every((x) => perto((3 * x + 1) / (x * x - 1), A / (x - 1) + B / (x + 1))); })) },
    };
  })(),
  (() => {
    const o = ["x³ + x² + x + 1", "x³ − x² + x − 1", "x³ + 1", "x³ − 1", "x² + 1"];
    return {
      d: "media",
      e: "Escrevendo x⁴ − 1 na forma (x − 1) · Q(x), qual é o polinômio Q(x)?",
      o,
      x: "Por Briot-Ruffini com a raiz 1, os coeficientes de x⁴ − 1 são 1, 0, 0, 0, −1 — é preciso escrever os zeros dos termos que faltam. Resultado: 1, 1, 1, 1 e resto 0. O quociente é x³ + x² + x + 1. Conferindo: (x − 1)(x³ + x² + x + 1) = x⁴ − 1.\n\nx³ − x² + x − 1 é o quociente da divisão por x + 1. x³ + 1 e x³ − 1 aparecem quando se esquecem os zeros dos termos que faltam. E x² + 1 é um fator de x⁴ − 1 = (x² − 1)(x² + 1), mas não o quociente pedido.",
      v: { i: () => qualPol(divPol([1, 0, 0, 0, -1], [1, -1]).q, o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "−1", "59.049", "10"];
    return {
      d: "media",
      e: "Qual é o resto da divisão de (x² + x + 1)¹⁰ por x + 1?",
      o,
      x: "Pelo teorema do resto, o resto é o valor do dividendo em x = −1: ((−1)² + (−1) + 1)¹⁰ = (1 − 1 + 1)¹⁰ = 1¹⁰ = 1. Não é preciso desenvolver a potência.\n\n0 supõe que −1 seja raiz. −1 erra o sinal de (−1)². 59.049 é 3¹⁰, o valor em x = 1, e não em x = −1. E 10 confunde o expoente com o resto. O mesmo raciocínio vale para qualquer divisor da forma x − a: o resto é o valor do dividendo em x = a, por maior que seja o expoente.",
      v: { i: () => qualR(resto(potPol([1, 1, 1], 10), [1, 1])[0], o) },
    };
  })(),
  (() => {
    const o = ["6", "−6", "4", "−4", "1"];
    return {
      d: "media",
      e: "Qual é o coeficiente de x² no desenvolvimento de (x − 1)⁴?",
      o,
      x: "Pelo binômio de Newton, (x − 1)⁴ = Σ C(4, k) · x⁴⁻ᵏ · (−1)ᵏ. O termo em x² tem k = 2: C(4, 2) · (−1)² = 6 · 1 = 6. O desenvolvimento completo é x⁴ − 4x³ + 6x² − 4x + 1.\n\n−6 erra o sinal: (−1)² é positivo. 4 e −4 são, em módulo e com sinal, os coeficientes de x³ e de x. E 1 é o coeficiente de x⁴ e também o termo independente. Pelo triângulo de Pascal, a linha 4 é 1, 4, 6, 4, 1, e os sinais alternam porque o segundo termo do binômio é −1.",
      v: { i: () => { const p = potPol([1, -1], 4); return qualR(p[p.length - 3], o); } },
    };
  })(),
  (() => {
    const o = ["x³ − 7x + 6", "x³ + 7x − 6", "x³ − 6x² + 11x − 6", "x³ − 7x − 6", "x³ + 6x² + 11x + 6"];
    return {
      d: "media",
      e: "Qual é o polinômio de grau 3, com coeficiente líder 1, cujas raízes são 1, 2 e −3?",
      o,
      x: "O polinômio é (x − 1)(x − 2)(x + 3). Pelas relações de Girard: a soma das raízes é 1 + 2 − 3 = 0 (coeficiente de x² nulo); a soma dos produtos dois a dois é 2 − 3 − 6 = −7 (coeficiente de x); e o produto é −6 (termo independente +6, com o sinal trocado). Resultado: x³ − 7x + 6.\n\nx³ + 7x − 6 troca os sinais dos dois últimos coeficientes. x³ − 6x² + 11x − 6 tem raízes 1, 2 e 3. x³ − 7x − 6 tem raízes −1, −2 e 3. E x³ + 6x² + 11x + 6 tem raízes −1, −2 e −3.",
      v: { i: () => unicoV(o.map((t) => [1, 2, -3].every((r) => avalia(lerPol(t), r) === 0))) },
    };
  })(),
  (() => {
    const o = ["−7/2", "−25/4", "25", "−7", "7/2"];
    return {
      d: "media",
      e: "Qual é o resto da divisão de P(x) = 2x⁴ − x³ + 3x − 5 por 2x − 1?",
      o,
      x: "O resto da divisão por 2x − 1 é o valor de P na raiz do divisor, x = 1/2: P(1/2) = 2 · (1/16) − 1/8 + 3/2 − 5 = 1/8 − 1/8 + 3/2 − 5 = −7/2. O coeficiente 2 do divisor não altera o resto; ele só divide o quociente por 2.\n\n−25/4 é P(−1/2): troca o sinal da raiz. 25 é P(2), usando o coeficiente do divisor como raiz. −7 multiplica o resto por 2, como se o coeficiente líder do divisor entrasse no resto. E 7/2 erra o sinal do resultado.",
      v: { i: () => qualR(resto([2, -1, 0, 3, -5], [2, -1])[0], o) },
    };
  })(),
  (() => {
    const o = ["32", "64", "0", "16", "20"];
    return {
      d: "media",
      e: "No desenvolvimento de (1 + x)⁶, qual é a soma dos coeficientes dos termos de grau par, incluindo o termo independente?",
      o,
      x: "P(1) soma todos os coeficientes, e P(−1) soma os de grau par e subtrai os de grau ímpar. Somando os dois, os ímpares se cancelam: a soma dos pares é [P(1) + P(−1)]/2 = (2⁶ + 0⁶)/2 = 64/2 = 32. Conferindo: 1 + 15 + 15 + 1 = 32, nos graus 0, 2, 4 e 6.\n\n64 é a soma de todos os coeficientes. 0 é P(−1), que mistura pares e ímpares com sinais opostos. 16 divide por 4 em vez de 2. E 20 é o coeficiente central, C(6, 3), que pertence a um termo de grau ímpar.",
      v: { i: () => { const p = potPol([1, 1], 6).reverse(); return qualR(p.filter((_, g) => g % 2 === 0).reduce((s, c) => s + c, 0), o); } },
    };
  })(),
  (() => {
    const o = ["3", "1", "2", "0", "6"];
    return {
      d: "media",
      e: "Quantas raízes racionais tem a equação 2x³ + x² − 7x − 6 = 0?",
      o,
      x: "Pelo teorema das raízes racionais, os candidatos são ±1, ±2, ±3, ±6, ±1/2 e ±3/2. Testando: −1 é raiz (−2 + 1 + 7 − 6 = 0). Dividindo por x + 1, sobra 2x² − x − 6, cujas raízes são 2 e −3/2. As três raízes, −1, 2 e −3/2, são racionais.\n\n1 para na primeira raiz encontrada. 2 despreza −3/2 por não ser inteira, mas frações também são racionais. 0 supõe que nenhum candidato funcione. E 6 conta os divisores de 6, e não as raízes.",
      v: { i: () => { const cands = new Set(); for (const p of [1, 2, 3, 6]) for (const q of [1, 2]) for (const s of [1, -1]) cands.add((s * p) / q); return qualR([...cands].filter((x) => avalia([2, 1, -7, -6], x) === 0).length, o); } },
    };
  })(),
  (() => {
    const o = ["−1", "1", "2", "−3", "5"];
    return {
      d: "media",
      e: "Para que valor de a vale a identidade x³ − 2x² + ax − 6 = (x − 3)(x² + x + 2), para todo x real?",
      o,
      x: "Desenvolvendo o lado direito: (x − 3)(x² + x + 2) = x³ + x² + 2x − 3x² − 3x − 6 = x³ − 2x² − x − 6. Comparando com o lado esquerdo, o coeficiente de x é a = −1. Os demais coeficientes conferem: −2 e −6.\n\n1 erra o sinal da soma 2x − 3x. 2 copia o coeficiente de x do segundo fator. −3 fica só com o termo −3x e esquece o 2x. E 5 soma 2 + 3, trocando o sinal de −3x.",
      v: { i: () => { const p = multPol([1, -3], [1, 1, 2]); if (p[1] !== -2 || p[3] !== -6) throw new Error("identidade"); return qualR(p[2], o); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["3", "1", "0", "−3", "2"];
    return {
      d: "dificil",
      e: "Sendo a, b e c as raízes de x³ − x − 1 = 0, qual é o valor de a³ + b³ + c³?",
      o,
      x: "Cada raiz satisfaz a equação: a³ = a + 1, b³ = b + 1 e c³ = c + 1. Somando: a³ + b³ + c³ = (a + b + c) + 3. Pelas relações de Girard, a + b + c = 0, porque não há termo em x². Logo a soma dos cubos é 3.\n\n1 usa a equação uma vez só, esquecendo que são três raízes. 0 supõe que, com soma zero, a soma dos cubos também se anule — mas, quando a + b + c = 0, vale a³ + b³ + c³ = 3abc, e abc = 1. −3 erra o sinal do produto. E 2 é a soma dos quadrados, S₁² − 2S₂ = 0 + 2.",
      v: { i: () => { const s = soma(raizesPol([1, 0, -1, -1]).map((z) => potC(z, 3))); if (Math.abs(s.im) > 1e-7) throw new Error("não real"); return qualR(s.re, o); } },
    };
  })(),
  (() => {
    const o = ["1", "2", "4", "0", "3"];
    return {
      d: "dificil",
      e: "Quantas raízes reais distintas tem a equação x⁴ − 3x³ + 4x² − 3x + 1 = 0?",
      o,
      x: "A equação é recíproca, com coeficientes simétricos: 1, −3, 4, −3, 1. Dividindo por x² e fazendo y = x + 1/x, com x² + 1/x² = y² − 2: y² − 2 − 3y + 4 = 0, ou y² − 3y + 2 = 0, de raízes y = 1 e y = 2. De x + 1/x = 2 vem x² − 2x + 1 = 0, isto é, x = 1 (raiz dupla). De x + 1/x = 1 vem x² − x + 1 = 0, sem raízes reais (Δ = −3). Há uma única raiz real distinta, x = 1.\n\n2 conta a raiz dupla duas vezes. 4 conta todas as raízes, inclusive as não reais. 0 supõe que nenhuma raiz seja real. E 3 conta a raiz dupla e ainda uma raiz real de x² − x + 1 = 0, que não existe.",
      v: { i: () => { const r = reais(raizesPol([1, -3, 4, -3, 1])); const distintas = r.filter((x, i) => i === 0 || Math.abs(x - r[i - 1]) > 1e-4); return qualR(distintas.length, o); } },
    };
  })(),
  (() => {
    const o = ["−28", "28", "−4", "−64", "−39"];
    return {
      d: "dificil",
      e: "Na equação x³ − 12x² + 39x + k = 0, as três raízes formam uma progressão aritmética. Qual é o valor de k?",
      o,
      x: "Com as raízes m − r, m e m + r, a soma é 3m = 12, então m = 4. Como 4 é raiz: 64 − 192 + 156 + k = 0, e k = −28. Conferindo: a soma dos produtos dois a dois é 3m² − r² = 48 − r² = 39, logo r = 3, e as raízes são 1, 4 e 7, cujo produto é 28 = −k.\n\n28 esquece o sinal: o produto das raízes é −k. −4 usa a raiz do meio como se fosse k. −64 é −m³, o valor de k se as três raízes fossem iguais a 4. E −39 copia o coeficiente de x com o sinal trocado.",
      v: { i: () => { const ks = intervalo(-100, 100).filter((k) => { const r = reais(raizesPol([1, -12, 39, k])); return r.length === 3 && perto(r[1] - r[0], r[2] - r[1], 1e-6); }); if (ks.length !== 1) throw new Error(`k: ${ks}`); return qualR(ks[0], o); } },
    };
  })(),
  (() => {
    const o = ["2", "−2", "0", "3", "1"];
    /* raiz dupla: o par de raízes mais próximo coincide; vê se ele é real e positivo */
    const duplaPositiva = (m) => { const r = raizesPol([1, 0, -3, m]); let melhor = null; for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) { const d = modC(somaC(r[i], vezesC(cx(-1), r[j]))); if (!melhor || d < melhor.d) melhor = { d, z: r[i] }; } return melhor.d < 1e-4 && Math.abs(melhor.z.im) < 1e-4 && melhor.z.re > 0; };
    return {
      d: "dificil",
      e: "Para que valor real de m a equação x³ − 3x + m = 0 tem uma raiz dupla positiva?",
      o,
      x: "Uma raiz dupla r anula o polinômio e a sua derivada. A derivada de x³ − 3x + m é 3x² − 3, que se anula em x = 1 e x = −1. Para a raiz dupla ser positiva, r = 1, e então 1 − 3 + m = 0, ou m = 2. De fato, x³ − 3x + 2 = (x − 1)²(x + 2).\n\n−2 dá x³ − 3x − 2 = (x + 1)²(x − 2), cuja raiz dupla é −1, negativa. 0 dá as raízes 0 e ±√3, todas simples. 3 dá uma raiz real e duas não reais, e 1 dá três raízes reais distintas — em nenhum dos dois casos há raiz dupla.",
      v: { i: () => unicoV(o.map((t) => duplaPositiva(lerReal(t)))) },
    };
  })(),
  (() => {
    const o = ["−x − 1", "x + 1", "x", "1", "−x"];
    return {
      d: "dificil",
      e: "Qual é o resto da divisão de x²⁰²⁷ por x² + x + 1?",
      o,
      x: "Como x³ − 1 = (x − 1)(x² + x + 1), vale x³ ≡ 1 na divisão por x² + x + 1. Então só importa o resto de 2027 por 3: 2027 = 3 × 675 + 2, e x²⁰²⁷ = (x³)⁶⁷⁵ · x² ≡ x². Mas x² ainda tem grau 2; como x² + x + 1 ≡ 0, x² ≡ −x − 1. O resto é −x − 1.\n\nx + 1 erra o sinal ao reduzir x². x corresponderia a resto 1 na divisão de 2027 por 3, e 1, a resto 0. E −x vem de reduzir x² como se o divisor fosse x² + x.",
      v: { i: () => qualPol(resto([1, ...Array(2027).fill(0)], [1, 1, 1]), o) },
    };
  })(),
  (() => {
    const o = ["13", "25", "5", "6", "37"];
    return {
      d: "dificil",
      e: "Sendo a, b e c as raízes de x³ − 5x² + 6x − 1 = 0, qual é o valor de a/(bc) + b/(ac) + c/(ab)?",
      o,
      x: "Reduzindo ao denominador comum abc: a/(bc) + b/(ac) + c/(ab) = (a² + b² + c²)/(abc). Pelas relações de Girard, S₁ = 5, S₂ = 6 e abc = 1. Então a² + b² + c² = S₁² − 2S₂ = 25 − 12 = 13, e o valor pedido é 13/1 = 13.\n\n25 é S₁², sem descontar 2S₂. 5 é a soma das raízes, que apareceria se o numerador fosse a + b + c. 6 é S₂. E 37 soma 2S₂ em vez de subtrair (25 + 12).",
      v: { i: () => { const [a, b, c] = raizesPol([1, -5, 6, -1]); const s = soma([divC(a, vezesC(b, c)), divC(b, vezesC(a, c)), divC(c, vezesC(a, b))]); return qualR(s.re, o); } },
    };
  })(),
  (() => {
    const o = ["4", "5", "6", "3", "2"];
    return {
      d: "dificil",
      e: "O resto da divisão de x⁴ + ax + b por x² + 1 é 2x + 3. Qual é o valor de a + b?",
      o,
      x: "Na divisão por x² + 1, vale x² ≡ −1, então x⁴ = (x²)² ≡ 1. O resto de x⁴ + ax + b é, portanto, ax + b + 1. Igualando a 2x + 3: a = 2 e b + 1 = 3, logo b = 2 e a + b = 4.\n\n5 esquece a contribuição de x⁴ e toma b = 3. 6 usa x⁴ ≡ −1 e fica com b = 4. 3 é o termo independente do resto, b + 1, e não a + b. E 2 é só o valor de a (ou só o de b).",
      v: { i: () => { const sols = []; for (const a of intervalo(-10, 10)) for (const b of intervalo(-10, 10)) if (igualPol(resto([1, 0, 0, a, b], [1, 0, 1]), [2, 3])) sols.push(a + b); if (sols.length !== 1) throw new Error("soluções"); return qualR(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["4", "−4", "2", "−2", "−8"];
    return {
      d: "dificil",
      e: "Uma equação do 3º grau, com coeficientes inteiros e coeficiente de x³ igual a 1, tem as raízes 2 e 1 + √3. Qual é o seu termo independente?",
      o,
      x: "Com coeficientes inteiros, a raiz irracional 1 + √3 vem acompanhada da conjugada 1 − √3. As três raízes são 2, 1 + √3 e 1 − √3, e o produto delas é 2(1 − 3) = −4. Numa equação mônica x³ + bx² + cx + d = 0, o produto das raízes é −d, então d = 4. O polinômio é (x − 2)(x² − 2x − 2) = x³ − 4x² + 2x + 4.\n\n−4 é o produto das raízes, sem trocar o sinal. 2 e −2 usam só o produto (1 + √3)(1 − √3) = −2, esquecendo a raiz 2. E −8 calcula (1 + √3)(1 − √3) como 1 + 3 = 4, errando o sinal de (√3)².",
      v: { i: () => { const p = deRaizes([2, 1 + Math.sqrt(3), 1 - Math.sqrt(3)]); if (!p.every((c) => perto(c, Math.round(c), 1e-9))) throw new Error("não inteiro"); return qualR(p[3], o); } },
    };
  })(),
  (() => {
    const o = ["−3", "3", "−6", "0", "−12"];
    return {
      d: "dificil",
      e: "O polinômio P(x) = x³ + ax² + bx + 4 é divisível por (x − 2)². Qual é o valor de a + b?",
      o,
      x: "Ser divisível por (x − 2)² significa ter 2 como raiz de multiplicidade pelo menos 2: P(2) = 0 e P′(2) = 0. P(2) = 8 + 4a + 2b + 4 = 0 dá 2a + b = −6. Como P′(x) = 3x² + 2ax + b, P′(2) = 12 + 4a + b = 0 dá 4a + b = −12. Subtraindo, 2a = −6, a = −3 e b = 0. Então a + b = −3, e P(x) = x³ − 3x² + 4 = (x − 2)²(x + 1).\n\n3 erra o sinal. −6 é o valor de 2a + b, e não de a + b. 0 é só o valor de b. E −12 é 4a + b, a outra equação do sistema.",
      v: { i: () => { const sols = []; for (const a of intervalo(-20, 20)) for (const b of intervalo(-20, 20)) if (resto([1, a, b, 4], [1, -4, 4]).every((c) => Math.abs(c) < 1e-9)) sols.push(a + b); if (sols.length !== 1) throw new Error("soluções"); return qualR(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["8", "5", "3", "13", "21"];
    return {
      d: "dificil",
      e: "Se r é uma raiz de x² − x − 1 = 0, então r⁵ pode ser escrito como ar + b, com a e b inteiros. Qual é o valor de a + b?",
      o,
      x: "De r² = r + 1, cada potência se reduz multiplicando por r e trocando r² por r + 1: r³ = r² + r = 2r + 1; r⁴ = 2r² + r = 3r + 2; r⁵ = 3r² + 2r = 5r + 3. Logo a = 5, b = 3 e a + b = 8. Os coeficientes são números de Fibonacci.\n\n5 é só o valor de a, e 3, só o de b. 13 avança uma potência a mais: r⁶ = 8r + 5, e 8 + 5 = 13. E 21 avança duas: r⁷ = 13r + 8.",
      /* a igualdade tem de valer para as duas raízes; com as duas, a e b ficam determinados */
      v: { i: () => { const rs = [(1 + Math.sqrt(5)) / 2, (1 - Math.sqrt(5)) / 2]; const sols = []; for (const a of intervalo(-20, 20)) for (const b of intervalo(-20, 20)) if (rs.every((r) => perto(r ** 5, a * r + b, 1e-9))) sols.push(a + b); if (sols.length !== 1) throw new Error("soluções"); return qualR(sols[0], o); } },
    };
  })(),
];
