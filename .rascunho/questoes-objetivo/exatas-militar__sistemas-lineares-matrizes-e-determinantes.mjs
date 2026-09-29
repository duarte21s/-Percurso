/* Rascunho — Exatas nível militar / Sistemas lineares, matrizes e
   determinantes.

   Determinantes são conferidos pela expansão de Laplace (a explicação usa
   Sarrus, propriedades ou blocos); sistemas, por eliminação de Gauss e
   pelo posto das matrizes; inversas, resolvendo um sistema por coluna.
   Quando o enunciado é genérico (“uma matriz de determinante 7”), a
   conferência usa matrizes concretas com essa propriedade. As alternativas
   com matriz são lidas do próprio texto (lerMatriz). */

import { unicoV, intervalo, lerC, lerReal, cx, det, resolve, posto, multM, potM, transposta, identidade, inversa, lerMatriz, igualM, zeros, perto } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Sistemas lineares, matrizes e determinantes";
export const arquivo = "exatas-militar__sistemas-lineares-matrizes-e-determinantes";

const qualR = (x, alt, tol = 1e-7) => unicoV(alt.map((t) => { const w = lerC(t); return Math.abs(w.im) < 1e-12 && perto(w.re, x, tol); }));
const qualM = (M, alt) => unicoV(alt.map((t) => igualM(lerMatriz(t), M, 1e-7)));
const escala = (k, A) => A.map((l) => l.map((a) => k * a));
const soma = (A, B) => A.map((l, i) => l.map((a, j) => a + B[i][j]));
/* "x = 3 e y = 2" → [3, 2]; "x = 3 ou x = −2" → [3, −2] */
const numeros = (t) => [...String(t).replace(/−/g, "-").matchAll(/=\s*(-?[\d/]+)/g)].map((m) => lerReal(m[1]));
/* classificação pelo posto: SPD, SPI ou SI */
const classifica = (A, b) => { const pa = posto(A), pb = posto(A.map((l, i) => [...l, b[i]])); return pa < pb ? "SI" : pa === A[0].length ? "SPD" : "SPI"; };
const mesmoConj = (a, b) => a.length === b.length && [...a].sort((p, q) => p - q).every((x, i) => perto(x, [...b].sort((p, q) => p - q)[i], 1e-6));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["5", "11", "−5", "8", "3"];
    return {
      d: "facil",
      e: "Qual é o determinante da matriz A, de linhas (2, 3) e (1, 4)?",
      o,
      x: "Numa matriz 2 × 2, o determinante é o produto da diagonal principal menos o produto da diagonal secundária: det A = 2 · 4 − 3 · 1 = 8 − 3 = 5.\n\n11 soma os dois produtos em vez de subtrair. −5 subtrai na ordem inversa, secundária menos principal. 8 fica só com a diagonal principal. E 3 é só o produto da diagonal secundária, 3 · 1, sem o da principal.",
      v: { i: () => qualR(det([[2, 3], [1, 4]]), o) },
    };
  })(),
  (() => {
    const o = ["Linhas (5, 4) e (1, 2)", "Linhas (3, 0) e (0, 2)", "Linhas (3, 6) e (1, 4)", "Linhas (4, 2) e (1, 3)", "Linhas (3, 5) e (0, 2)"];
    return {
      d: "facil",
      e: "Sendo A a matriz de linhas (1, 2) e (0, 1) e B a matriz de linhas (3, 0) e (1, 2), qual é o produto AB?",
      o,
      x: "No produto AB, o elemento da linha i e coluna j é o produto da linha i de A pela coluna j de B. A linha 1 de A, (1, 2), com a coluna 1 de B, (3, 1), dá 3 + 2 = 5; com a coluna 2, (0, 2), dá 0 + 4 = 4. A linha 2 de A, (0, 1), dá 0 + 1 = 1 e 0 + 2 = 2. Então AB tem linhas (5, 4) e (1, 2).\n\n(3, 0) e (0, 2) multiplica elemento a elemento. (3, 6) e (1, 4) é o produto BA — a ordem importa, e AB ≠ BA aqui. (4, 2) e (1, 3) é a soma A + B. E (3, 5) e (0, 2) multiplica linha de A por linha de B, e não por coluna.",
      v: { i: () => qualM(multM([[1, 2], [0, 1]], [[3, 0], [1, 2]]), o) },
    };
  })(),
  (() => {
    const o = ["3 × 2", "2 × 3", "3 × 3", "2 × 2", "6 × 1"];
    return {
      d: "facil",
      e: "A matriz A tem linhas (1, 2, 3) e (4, 5, 6). Qual é a ordem da sua transposta, Aᵀ?",
      o,
      x: "A transposta troca linhas por colunas: a 1ª linha de A vira a 1ª coluna de Aᵀ, e assim por diante. Como A tem 2 linhas e 3 colunas (ordem 2 × 3), Aᵀ tem 3 linhas e 2 colunas: ordem 3 × 2. As linhas de Aᵀ são (1, 4), (2, 5) e (3, 6).\n\n2 × 3 é a ordem da própria A. 3 × 3 e 2 × 2 supõem que a transposta seja quadrada. E 6 × 1 empilha os seis elementos numa coluna só, o que não é transpor.",
      v: { i: () => { const T = transposta([[1, 2, 3], [4, 5, 6]]); return unicoV(o.map((t) => t === `${T.length} × ${T[0].length}`)); } },
    };
  })(),
  (() => {
    const o = ["2 × 4", "3 × 3", "4 × 2", "2 × 3", "O produto AB não existe"];
    return {
      d: "facil",
      e: "A matriz A tem ordem 2 × 3, e a matriz B tem ordem 3 × 4. Qual é a ordem do produto AB?",
      o,
      x: "O produto AB existe quando o número de colunas de A é igual ao número de linhas de B — aqui, 3 e 3. O resultado tem o número de linhas de A e o número de colunas de B: ordem 2 × 4.\n\n3 × 3 usa as dimensões “do meio”, que precisam coincidir, mas não aparecem no resultado. 4 × 2 inverte a ordem, como se fosse o produto BA, que nem existe (B tem 4 colunas e A, 2 linhas). 2 × 3 repete a ordem de A. E dizer que o produto não existe inverte a condição, que aqui é satisfeita.",
      v: { i: () => { const A = [[1, 2, 3], [4, 5, 6]], B = [[1, 0, 2, 1], [3, 1, 0, 2], [0, 4, 1, 1]]; const P = multM(A, B); return unicoV(o.map((t) => t === `${P.length} × ${P[0].length}`)); } },
    };
  })(),
  (() => {
    const o = ["−7", "7", "−5", "9", "1"];
    return {
      d: "facil",
      e: "Calculando pela regra de Sarrus o determinante da matriz de linhas (1, 2, 0), (3, 1, 2) e (0, 1, 1), qual resultado se obtém?",
      o,
      x: "Pela regra de Sarrus, os produtos no sentido da diagonal principal são 1 · 1 · 1 + 2 · 2 · 0 + 0 · 3 · 1 = 1, e os produtos no sentido da secundária são 0 · 1 · 0 + 1 · 2 · 1 + 1 · 3 · 2 = 8. O determinante é 1 − 8 = −7.\n\n7 subtrai na ordem inversa. −5 esquece um dos produtos da diagonal secundária, 1 · 2 · 1. 9 soma as duas partes em vez de subtrair. E 1 fica só com a parte da diagonal principal.",
      v: { i: () => qualR(det([[1, 2, 0], [3, 1, 2], [0, 1, 1]]), o) },
    };
  })(),
  (() => {
    const o = ["x = 3 e y = 2", "x = 2 e y = 3", "x = 4 e y = 1", "x = 6 e y = −1", "x = 3 e y = −2"];
    return {
      d: "facil",
      e: "Qual é a solução do sistema formado pelas equações x + y = 5 e x − y = 1?",
      o,
      x: "Somando as duas equações, y se cancela: 2x = 6, e x = 3. Voltando à primeira, 3 + y = 5, e y = 2. Conferindo na segunda: 3 − 2 = 1.\n\nx = 2 e y = 3 troca os valores e falha na segunda equação (2 − 3 = −1). x = 4 e y = 1 satisfaz só a primeira. x = 6 e y = −1 toma 2x = 6 como se fosse x = 6 e ajusta y pela primeira equação. E x = 3 e y = −2 erra o sinal de y.",
      v: { i: () => { const s = resolve([[1, 1], [1, -1]], [5, 1]); return unicoV(o.map((t) => { const n = numeros(t); return perto(n[0], s[0]) && perto(n[1], s[1]); })); } },
    };
  })(),
  (() => {
    const o = ["5", "9", "12", "19", "−2"];
    const M = [[4, -1, 2], [0, 3, 5], [7, 1, -2]];
    return {
      d: "facil",
      e: "O traço de uma matriz quadrada é a soma dos elementos da sua diagonal principal. Qual é o traço da matriz de linhas (4, −1, 2), (0, 3, 5) e (7, 1, −2)?",
      o,
      x: "A diagonal principal é formada pelos elementos a₁₁ = 4, a₂₂ = 3 e a₃₃ = −2. O traço é 4 + 3 + (−2) = 5.\n\n9 ignora o sinal de −2. 12 soma a diagonal secundária (2 + 3 + 7). 19 soma todos os elementos da matriz. E −2 é só o último elemento da diagonal. O traço só se define para matrizes quadradas e tem propriedades úteis: o traço de A + B é a soma dos traços, e o de AB é igual ao de BA, mesmo quando AB ≠ BA.",
      v: { i: () => qualR(M.reduce((s, l, i) => s + l[i], 0), o) },
    };
  })(),
  (() => {
    const o = ["40", "10", "80", "30", "25"];
    return {
      d: "facil",
      e: "A é uma matriz quadrada de ordem 3 com determinante 5. Qual é o determinante da matriz 2A?",
      o,
      x: "Multiplicar a matriz por 2 multiplica cada uma das suas 3 linhas por 2, e cada linha multiplicada multiplica o determinante por 2. Assim, det(2A) = 2³ · det A = 8 · 5 = 40.\n\n10 multiplica o determinante por 2 uma vez só, como se só uma linha fosse multiplicada. 80 usa 2⁴. 30 multiplica o determinante por 2 e pela ordem 3 (2 · 3 · 5). E 25 eleva o determinante ao quadrado.",
      v: { i: () => { const As = [[[1, 0, 0], [0, 1, 0], [0, 0, 5]], [[2, 1, 0], [1, 3, 0], [0, 0, 1]]]; const vs = As.map((A) => { if (!perto(det(A), 5)) throw new Error("det"); return det(escala(2, A)); }); if (!perto(vs[0], vs[1])) throw new Error("depende de A"); return qualR(vs[0], o); } },
    };
  })(),
  (() => {
    const o = ["−3", "3", "−1/3", "1/3", "9"];
    return {
      d: "facil",
      e: "Uma matriz quadrada A tem determinante −3. Qual é o determinante da sua transposta, Aᵀ?",
      o,
      x: "Transpor não altera o determinante: det(Aᵀ) = det A = −3. Na expansão do determinante, os produtos que aparecem são os mesmos, porque trocar linhas por colunas só muda a ordem em que os fatores são lidos.\n\n3 supõe que a transposição troque o sinal, o que acontece quando se trocam duas linhas de lugar, e não na transposição. −1/3 é o determinante da inversa, A⁻¹. 1/3 combina os dois enganos. E 9 é o determinante de A · Aᵀ, e não o de Aᵀ.",
      v: { i: () => { const A = [[1, 2, 0], [0, 1, 3], [1, 0, -9]]; if (!perto(det(A), -3)) throw new Error("det"); return qualR(det(transposta(A)), o); } },
    };
  })(),
  (() => {
    const o = ["6", "18", "3", "12", "−6"];
    return {
      d: "facil",
      e: "A matriz A = (aᵢⱼ), quadrada de ordem 3, é definida por aᵢⱼ = 2i − j. Qual é a soma dos elementos da diagonal principal de A?",
      o,
      x: "Na diagonal principal, i = j, e aᵢᵢ = 2i − i = i. Então a₁₁ = 1, a₂₂ = 2, a₃₃ = 3, e a soma é 6.\n\n18 soma todos os nove elementos da matriz, e não só os da diagonal. 3 é só a₃₃. 12 usa aᵢᵢ = 2i, esquecendo o −j (2 + 4 + 6). E −6 inverte a lei de formação para j − 2i. Montando a matriz inteira, as linhas são (1, 0, −1), (3, 2, 1) e (5, 4, 3), e a diagonal principal é 1, 2, 3.",
      v: { i: () => { const A = intervalo(1, 3).map((i) => intervalo(1, 3).map((j) => 2 * i - j)); return qualR(A.reduce((s, l, k) => s + l[k], 0), o); } },
    };
  })(),
  (() => {
    const o = ["Possível e indeterminado", "Possível e determinado", "Impossível", "Possível, com exatamente duas soluções", "Impossível, porque as equações são proporcionais"];
    return {
      d: "facil",
      e: "Como se classifica o sistema formado pelas equações 2x + 4y = 6 e x + 2y = 3?",
      o,
      x: "A primeira equação é exatamente o dobro da segunda: 2x + 4y = 6 equivale a x + 2y = 3. Na prática, há uma só equação para duas incógnitas, e todo par da forma (3 − 2y, y) é solução. O sistema é possível e indeterminado.\n\n“Possível e determinado” exigiria equações independentes, cujas retas se cortam num ponto só. “Impossível” valeria se os coeficientes fossem proporcionais mas os termos independentes não, como em x + 2y = 3 e 2x + 4y = 7. Um sistema linear nunca tem exatamente duas soluções. E equações proporcionais, inclusive no termo independente, representam a mesma reta: infinitas soluções, e não nenhuma.",
      v: { i: () => { const c = classifica([[2, 4], [1, 2]], [6, 3]); return unicoV([c === "SPI", c === "SPD", c === "SI", false, c === "SI"]); } },
    };
  })(),
  (() => {
    const o = ["Linhas (3, −1) e (−5, 2)", "Linhas (3, 1) e (5, 2)", "Linhas (2, −1) e (−5, 3)", "Linhas (1/2, 1) e (1/5, 1/3)", "Linhas (−3, 1) e (5, −2)"];
    const A = [[2, 1], [5, 3]];
    return {
      d: "facil",
      e: "Qual é a inversa da matriz A, de linhas (2, 1) e (5, 3)?",
      o,
      x: "det A = 2 · 3 − 1 · 5 = 1. Para uma matriz 2 × 2 de linhas (a, b) e (c, d), a inversa é (1/det) vezes a matriz de linhas (d, −b) e (−c, a): trocam-se de lugar os elementos da diagonal principal e muda-se o sinal dos da secundária. Com det = 1, A⁻¹ tem linhas (3, −1) e (−5, 2). Conferindo: A · A⁻¹ tem linhas (6 − 5, −2 + 2) = (1, 0) e (15 − 15, −5 + 6) = (0, 1).\n\n(3, 1) e (5, 2) esquece de trocar os sinais. (2, −1) e (−5, 3) não troca de lugar os elementos da diagonal principal. (1/2, 1) e (1/5, 1/3) inverte elemento a elemento, o que não dá a inversa. E (−3, 1) e (5, −2) é a inversa com o sinal trocado, como se det fosse −1.",
      v: { i: () => unicoV(o.map((t) => igualM(multM(A, lerMatriz(t)), identidade(2)))) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["x = 3 ou x = −2", "x = −3 ou x = 2", "x = 2 ou x = 3", "x = 6 ou x = −1", "x = 0 ou x = 1"];
    return {
      d: "media",
      e: "Para quais valores de x o determinante da matriz de linhas (x, 2) e (3, x − 1) é igual a zero?",
      o,
      x: "det = x(x − 1) − 2 · 3 = x² − x − 6. Igualando a zero: x² − x − 6 = 0, cujas raízes são 3 e −2 (soma 1, produto −6). Conferindo com x = 3: a matriz fica com linhas (3, 2) e (3, 2), iguais, e determinante 0.\n\nx = −3 ou x = 2 troca os sinais das raízes. x = 2 ou x = 3 resolve x² − 5x + 6 = 0, errando o termo em x. x = 6 ou x = −1 resolve x² − 5x − 6 = 0, com o mesmo tipo de erro. E x = 0 ou x = 1 anula só o produto x(x − 1), esquecendo o termo 2 · 3.",
      v: { i: () => { const z = zeros((x) => det([[x, 2], [3, x - 1]]), -10, 10); return unicoV(o.map((t) => mesmoConj(numeros(t), z))); } },
    };
  })(),
  (() => {
    const o = ["3", "2", "1", "6", "−3"];
    return {
      d: "media",
      e: "No sistema formado por x + y + z = 6, x − y + z = 2 e 2x + y − z = 1, qual é o valor de z?",
      o,
      x: "Subtraindo a segunda equação da primeira: 2y = 4, e y = 2. Com y = 2, a primeira fica x + z = 4, e a terceira, 2x − z = −1. Somando essas duas: 3x = 3, x = 1, e então z = 3. A solução é (1, 2, 3); conferindo na terceira: 2 + 2 − 3 = 1.\n\n2 é o valor de y, e 1, o de x. 6 é o termo independente da primeira equação, a soma x + y + z. E −3 erra o sinal ao isolar z.",
      v: { i: () => qualR(resolve([[1, 1, 1], [1, -1, 1], [2, 1, -1]], [6, 2, 1])[2], o) },
    };
  })(),
  (() => {
    const o = ["Linhas (32, 0) e (0, 243)", "Linhas (10, 0) e (0, 15)", "Linhas (32, 0) e (0, 32)", "Linhas (7, 0) e (0, 8)", "Linhas (243, 0) e (0, 32)"];
    return {
      d: "media",
      e: "Seja A a matriz diagonal de linhas (2, 0) e (0, 3). Qual é a matriz A⁵?",
      o,
      x: "Multiplicar matrizes diagonais multiplica os elementos correspondentes da diagonal, e os zeros continuam zeros. Por isso, a potência de uma matriz diagonal eleva cada elemento da diagonal: A⁵ tem linhas (2⁵, 0) e (0, 3⁵), ou (32, 0) e (0, 243).\n\n(10, 0) e (0, 15) multiplica a matriz por 5, em vez de elevá-la. (32, 0) e (0, 32) eleva só o primeiro elemento e repete o resultado. (7, 0) e (0, 8) soma 5 a cada elemento. E (243, 0) e (0, 32) troca as posições dos resultados.",
      v: { i: () => qualM(potM([[2, 0], [0, 3]], 5), o) },
    };
  })(),
  (() => {
    const o = ["−2/3", "−6", "−3/2", "2/3", "1/6"];
    return {
      d: "media",
      e: "As matrizes quadradas A e B, de mesma ordem, têm determinantes 3 e −2, respectivamente. Qual é o determinante de A⁻¹ · B?",
      o,
      x: "O determinante do produto é o produto dos determinantes, e o da inversa é o inverso do determinante: det(A⁻¹ · B) = (1/det A) · det B = (1/3) · (−2) = −2/3.\n\n−6 usa det A em vez de 1/det A. −3/2 inverte a fração, como se fosse det(B⁻¹ · A). 2/3 perde o sinal de det B. E 1/6 inverte o produto dos determinantes, 3 · (−2), e ainda perde o sinal.",
      v: { i: () => { const A = [[1, 2, 0], [0, 3, 1], [0, 0, 1]], B = [[2, 1, 0], [1, 0, 0], [0, 5, 2]]; if (!perto(det(A), 3) || !perto(det(B), -2)) throw new Error("dets"); return qualR(det(multM(inversa(A), B)), o); } },
    };
  })(),
  (() => {
    const o = ["2", "5/2", "0", "−2", "1"];
    return {
      d: "media",
      e: "Para que valor de a o sistema formado por x + y = 2 e 2x + ay = 5 é impossível?",
      o,
      x: "O sistema deixa de ter solução única quando os coeficientes das incógnitas são proporcionais: 2/1 = a/1, isto é, a = 2. Nesse caso, a segunda equação vira 2x + 2y = 5, ou x + y = 5/2, o que contradiz x + y = 2: não há solução. Para qualquer outro a, o determinante 1 · a − 1 · 2 é diferente de zero, e há solução única.\n\n5/2 compara os termos independentes, e não os coeficientes. Com a = 0, o sistema tem a solução x = 5/2, y = −1/2. Com a = −2, os coeficientes não são proporcionais, e a solução existe. E a = 1 também dá solução única: x = 3, y = −1.",
      v: { i: () => unicoV(o.map((t) => classifica([[1, 1], [2, lerReal(t)]], [2, 5]) === "SI")) },
    };
  })(),
  (() => {
    const o = ["3/2", "−3/2", "3", "1/3", "−3"];
    return {
      d: "media",
      e: "Qual é o elemento da 2ª linha e 1ª coluna da inversa da matriz de linhas (1, 2) e (3, 4)?",
      o,
      x: "det = 1 · 4 − 2 · 3 = −2. A inversa é (1/det) vezes a matriz de linhas (4, −2) e (−3, 1), isto é, tem linhas (−2, 1) e (3/2, −1/2). O elemento pedido é −3 dividido por −2, que dá 3/2.\n\n−3/2 esquece que o determinante é negativo e divide −3 por 2. 3 esquece de dividir pelo determinante e perde o sinal. 1/3 inverte só o elemento da matriz original. E −3 é o elemento antes da divisão pelo determinante.",
      v: { i: () => qualR(inversa([[1, 2], [3, 4]])[1][0], o) },
    };
  })(),
  (() => {
    const o = ["14", "1/14", "13", "15", "26"];
    const A = [[2, 1], [1, 1]], B = [[5, 3], [2, 4]];
    return {
      d: "media",
      e: "Sejam A a matriz de linhas (2, 1) e (1, 1), e B a matriz de linhas (5, 3) e (2, 4). Se X é a matriz tal que AX = B, qual é o determinante de X?",
      o,
      x: "Como det(AX) = det A · det X, vale det X = det B / det A. Aqui, det A = 2 − 1 = 1 e det B = 20 − 6 = 14, então det X = 14. Não é preciso achar X: basta a propriedade do produto.\n\n1/14 inverte a divisão. 13 subtrai os determinantes (14 − 1), e 15 os soma. E 26 soma os dois produtos de B (20 + 6) em vez de subtrair. Quem preferir achar X chega às linhas (3, −1) e (−1, 5), de determinante 15 − 1 = 14.",
      /* acha X coluna a coluna, resolvendo A x = (coluna de B) */
      v: { i: () => { const X = transposta([0, 1].map((j) => resolve(A, B.map((l) => l[j])))); if (!igualM(multM(A, X), B)) throw new Error("X"); return qualR(det(X), o); } },
    };
  })(),
  (() => {
    const o = ["1/2", "1", "2", "0", "−1/2"];
    return {
      d: "media",
      e: "Para que valor de x as matrizes A, de linhas (1, x) e (0, 2), e B, de linhas (1, 1) e (0, 3), comutam, isto é, AB = BA?",
      o,
      x: "AB tem linhas (1, 1 + 3x) e (0, 6); BA tem linhas (1, x + 2) e (0, 6). As duas só diferem no elemento da 1ª linha e 2ª coluna, e a igualdade exige 1 + 3x = x + 2, isto é, 2x = 1 e x = 1/2.\n\nCom x = 1, AB tem 4 nessa posição, e BA, 3. Com x = 2, 7 e 4. Com x = 0, 1 e 2. E x = −1/2 erra o sinal ao isolar x. Em geral, matrizes não comutam, e é preciso impor a condição.",
      v: { i: () => { const xs = intervalo(-40, 40).map((k) => k / 4).filter((x) => { const A = [[1, x], [0, 2]], B = [[1, 1], [0, 3]]; return igualM(multM(A, B), multM(B, A)); }); if (xs.length !== 1) throw new Error("x"); return qualR(xs[0], o); } },
    };
  })(),
  (() => {
    const o = ["−21", "21", "−189", "−7", "10"];
    return {
      d: "media",
      e: "Uma matriz 3 × 3 tem determinante 7. Trocam-se de posição duas de suas linhas e, em seguida, multiplica-se uma das linhas por 3. Qual é o determinante da matriz obtida?",
      o,
      x: "Trocar duas linhas de lugar muda o sinal do determinante: 7 vira −7. Multiplicar uma linha por 3 multiplica o determinante por 3: −7 vira −21.\n\n21 esquece a troca de sinal. −189 multiplica a matriz inteira por 3, o que multiplicaria o determinante por 3³ = 27. −7 esquece o fator 3. E 10 soma 3 ao determinante, em vez de multiplicar. Já somar a uma linha um múltiplo de outra não altera o determinante — é a operação usada no escalonamento.",
      v: { i: () => { const M = [[1, 2, 0], [0, 1, 3], [1, 0, 1]]; if (!perto(det(M), 7)) throw new Error("det"); const N = [M[1], M[0], M[2].map((a) => 3 * a)]; return qualR(det(N), o); } },
    };
  })(),
  (() => {
    const o = ["2", "3", "1", "0", "6"];
    return {
      d: "media",
      e: "Qual é o posto (característica) da matriz de linhas (1, 2, 3), (2, 4, 6) e (1, 1, 1)?",
      o,
      x: "O posto é o número máximo de linhas linearmente independentes. A 2ª linha é o dobro da 1ª, então não acrescenta nada. A 3ª, (1, 1, 1), não é múltipla da 1ª. Sobram duas linhas independentes: o posto é 2. Escalonando, L₂ − 2L₁ zera a 2ª linha, e L₃ − L₁ = (0, −1, −2) não se anula.\n\n3 supõe as três linhas independentes, mas o determinante é zero. 1 supõe todas proporcionais à primeira. 0 só vale para a matriz nula. E 6 não é um posto possível numa matriz 3 × 3, cujo posto é no máximo 3.",
      v: { i: () => qualR(posto([[1, 2, 3], [2, 4, 6], [1, 1, 1]]), o) },
    };
  })(),
  (() => {
    const o = ["3", "5", "0", "−3", "2"];
    return {
      d: "media",
      e: "Para que valor de k o sistema homogêneo x + y + z = 0, x + 2y + kz = 0, x + 3y + 5z = 0 admite soluções além da trivial (0, 0, 0)?",
      o,
      x: "Um sistema homogêneo sempre tem a solução trivial; tem outras quando o determinante da matriz dos coeficientes é zero. det = 1(2 · 5 − 3k) − 1(1 · 5 − k) + 1(1 · 3 − 2 · 1) = 10 − 3k − 5 + k + 1 = 6 − 2k. Igualando a zero, k = 3. Com k = 3, as linhas (1, 1, 1), (1, 2, 3) e (1, 3, 5) estão em progressão aritmética: a do meio é a média das outras duas.\n\n5 copia o último coeficiente da terceira equação. 0 anula só um termo da expansão. −3 erra o sinal ao isolar k. E 2 é o coeficiente de y na segunda equação.",
      v: { i: () => { const ks = intervalo(-20, 20).filter((k) => Math.abs(det([[1, 1, 1], [1, 2, k], [1, 3, 5]])) < 1e-9); if (ks.length !== 1) throw new Error("k"); if (classifica([[1, 1, 1], [1, 2, ks[0]], [1, 3, 5]], [0, 0, 0]) !== "SPI") throw new Error("não indeterminado"); return qualR(ks[0], o); } },
    };
  })(),
  (() => {
    const o = ["16", "14", "20", "12", "18"];
    return {
      d: "media",
      e: "Um cofre tem 30 moedas, todas de 10 ou de 25 centavos, que somam R$ 5,40. Quantas moedas de 25 centavos há no cofre?",
      o,
      x: "Sendo x as moedas de 10 e y as de 25: x + y = 30 e 10x + 25y = 540, em centavos. Multiplicando a primeira por 10 e subtraindo: 15y = 240, e y = 16. Então x = 14. Conferindo: 14 · 10 + 16 · 25 = 140 + 400 = 540.\n\n14 é o número de moedas de 10. 20, 12 e 18 não fecham a soma dos valores: com 20 moedas de 25, o total seria R$ 6,00; com 12, R$ 4,80; com 18, R$ 5,70.",
      v: { i: () => qualR(resolve([[1, 1], [10, 25]], [30, 540])[1], o) },
    };
  })(),
  (() => {
    const o = ["5", "6", "3", "4", "7"];
    return {
      d: "media",
      e: "Três números somam 14. O primeiro é o dobro do segundo, e o terceiro é 1 a menos que o primeiro. Qual é o terceiro número?",
      o,
      x: "Chamando os números de a, b e c: a + b + c = 14, a = 2b e c = a − 1 = 2b − 1. Substituindo: 2b + b + 2b − 1 = 14, ou 5b = 15, e b = 3. Então a = 6 e c = 5. Conferindo: 6 + 3 + 5 = 14.\n\n6 é o primeiro número, e 3, o segundo. 4 usa c = b + 1, trocando a referência. E 7 é o primeiro mais 1, trocando “a menos” por “a mais”. Escrito como sistema, o problema é a + b + c = 14, a − 2b = 0 e c − a = −1, que tem solução única.",
      v: { i: () => qualR(resolve([[1, 1, 1], [1, -2, 0], [-1, 0, 1]], [14, 0, -1])[2], o) },
    };
  })(),
  (() => {
    const o = ["5", "−3", "3", "−5", "11"];
    return {
      d: "media",
      e: "Seja B a inversa da matriz triangular de linhas (1, 0, 0), (2, 1, 0) e (3, 4, 1). Quanto vale b₃₁, o elemento da 3ª linha e 1ª coluna de B?",
      o,
      x: "A matriz é triangular inferior com diagonal de 1s, e a inversa também é. Impondo A · A⁻¹ = I, a 1ª coluna (x, y, z) de A⁻¹ satisfaz x = 1, 2x + y = 0 e 3x + 4y + z = 0. Daí y = −2 e z = −3 − 4(−2) = 5.\n\n−3 só troca o sinal do elemento correspondente de A, regra que vale apenas para os elementos logo abaixo da diagonal. 3 copia o elemento de A. −5 erra o sinal na última conta. E 11 soma 3 + 8 em vez de subtrair.",
      v: { i: () => qualR(inversa([[1, 0, 0], [2, 1, 0], [3, 4, 1]])[2][0], o) },
    };
  })(),
  (() => {
    const o = ["−6", "6", "4", "−13", "0"];
    return {
      d: "media",
      e: "A matriz de linhas (2, 5, 7), (0, 3, 1) e (0, 0, −1) é triangular. Quanto vale o seu determinante?",
      o,
      x: "Numa matriz triangular, o determinante é o produto dos elementos da diagonal principal, porque todos os outros produtos da expansão contêm algum zero: 2 · 3 · (−1) = −6.\n\n6 perde o sinal de −1. 4 soma os elementos da diagonal (2 + 3 − 1). −13 subtrai do produto da diagonal elementos acima dela (−6 − 7), que não entram na conta. E 0 supõe que os zeros abaixo da diagonal anulem o determinante, o que só aconteceria com um zero na própria diagonal.",
      v: { i: () => qualR(det([[2, 5, 7], [0, 3, 1], [0, 0, -1]]), o) },
    };
  })(),
  (() => {
    const o = ["0", "102", "30", "204", "−3"];
    return {
      d: "media",
      e: "Sem desenvolver a regra de Sarrus, dá para saber o determinante da matriz de linhas (1, 2, 3), (4, 5, 6) e (2, 4, 6). Quanto ele vale?",
      o,
      x: "A 3ª linha, (2, 4, 6), é o dobro da 1ª, (1, 2, 3). Quando duas linhas são proporcionais, o determinante é zero: subtraindo da 3ª linha o dobro da 1ª, ela vira uma linha de zeros, e essa operação não altera o determinante. Pela regra de Sarrus também dá 0: 102 − 102.\n\n102 é só a parte da diagonal principal, sem subtrair a da secundária. 204 soma as duas partes. 30 é só o produto da diagonal principal, 1 · 5 · 6. E −3 é o determinante do bloco 2 × 2 do canto superior esquerdo.",
      v: { i: () => qualR(det([[1, 2, 3], [4, 5, 6], [2, 4, 6]]), o) },
    };
  })(),
  (() => {
    const o = ["2", "6", "1", "0", "−2"];
    return {
      d: "media",
      e: "A matriz de linhas (1, 1, 1), (1, 2, 3) e (1, 4, 9) é uma matriz de Vandermonde. Quanto vale o seu determinante?",
      o,
      x: "É uma matriz de Vandermonde gerada por 1, 2 e 3 (as linhas são as potências 0, 1 e 2 desses números). O determinante é o produto das diferenças (2 − 1)(3 − 1)(3 − 2) = 1 · 2 · 1 = 2. Pela regra de Sarrus: 18 + 3 + 4 − (2 + 12 + 9) = 25 − 23 = 2.\n\n6 multiplica os geradores, 1 · 2 · 3, e não as diferenças. 1 multiplica só as diferenças entre vizinhos, (2 − 1)(3 − 2), esquecendo 3 − 1. −2 faz as diferenças na ordem inversa, (1 − 2)(1 − 3)(2 − 3). E 0 seria o valor se dois geradores fossem iguais, o que não acontece.",
      v: { i: () => qualR(det([[1, 1, 1], [1, 2, 3], [1, 4, 9]]), o) },
    };
  })(),
  (() => {
    const o = ["2", "−2", "4", "−4", "82"];
    const M = [[1, 2, 3], [4, 5, 6], [7, 8, 10]];
    return {
      d: "media",
      e: "Qual é o cofator do elemento da 1ª linha e 2ª coluna da matriz de linhas (1, 2, 3), (4, 5, 6) e (7, 8, 10)?",
      o,
      x: "O cofator de aᵢⱼ é (−1)ⁱ⁺ʲ vezes o determinante da matriz que sobra ao eliminar a linha i e a coluna j. Eliminando a 1ª linha e a 2ª coluna, sobram as linhas (4, 6) e (7, 10), de determinante 40 − 42 = −2. Com (−1)¹⁺² = −1, o cofator é 2.\n\n−2 é o menor complementar, sem o sinal (−1)ⁱ⁺ʲ. 4 multiplica o cofator pelo próprio elemento, a₁₂ = 2, que é a parcela que entraria na expansão de Laplace; −4 faz o mesmo com o menor. E 82 soma os dois produtos do menor, 40 + 42.",
      v: { i: () => { const menor = M.slice(1).map((l) => l.filter((_, j) => j !== 1)); return qualR((-1) ** (1 + 2) * det(menor), o); } },
    };
  })(),
  (() => {
    const o = ["Linhas (0, −1) e (1, 0)", "Linhas (0, 1) e (−1, 0)", "Linhas (1, 0) e (0, 1)", "Linhas (−1, 0) e (0, −1)", "Linhas (0, 2027) e (−2027, 0)"];
    return {
      d: "media",
      e: "Seja A a matriz de linhas (0, 1) e (−1, 0). Qual é a matriz A²⁰²⁷?",
      o,
      x: "Calculando: A² tem linhas (−1, 0) e (0, −1), isto é, A² = −I. Então A⁴ = (−I)² = I, e as potências se repetem de 4 em 4. Como 2027 = 4 · 506 + 3, A²⁰²⁷ = A³ = A² · A = −A, que tem linhas (0, −1) e (1, 0).\n\n(0, 1) e (−1, 0) é o próprio A, que corresponderia a resto 1 na divisão por 4. A identidade corresponderia a resto 0, e −I, a resto 2. E (0, 2027) e (−2027, 0) multiplica A pelo expoente, o que não é potência de matriz.",
      v: { i: () => qualM(potM([[0, 1], [-1, 0]], 2027), o) },
    };
  })(),
  (() => {
    const o = ["8", "3", "5", "7", "9"];
    return {
      d: "media",
      e: "A matriz de linhas (1, x + 1, 3), (4, 5, y) e (3, 2y − 5, 0) é simétrica, isto é, igual à sua transposta. Qual é o valor de x + y?",
      o,
      x: "Numa matriz simétrica, aᵢⱼ = aⱼᵢ. Comparando a₁₂ com a₂₁: x + 1 = 4, então x = 3. Comparando a₂₃ com a₃₂: y = 2y − 5, então y = 5. Os elementos a₁₃ = a₃₁ = 3 já conferem. Logo x + y = 8.\n\n3 é só o valor de x, e 5, só o de y. 7 resolve x + 1 = 3, comparando com o elemento errado (a₁₃ = 3). E 9 toma x = 4, igual a a₂₁, esquecendo o +1 de x + 1.",
      v: { i: () => { const sols = []; for (const x of intervalo(-10, 10)) for (const y of intervalo(-10, 10)) { const M = [[1, x + 1, 3], [4, 5, y], [3, 2 * y - 5, 0]]; if (igualM(M, transposta(M))) sols.push(x + y); } if (sols.length !== 1) throw new Error("soluções"); return qualR(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["4", "3", "2", "6", "8"];
    const A = [[1, 2], [0, 1]], B = [[2, 0], [1, 1]];
    return {
      d: "media",
      e: "Sejam A a matriz de linhas (1, 2) e (0, 1), e B a matriz de linhas (2, 0) e (1, 1). Qual é o determinante de A + B?",
      o,
      x: "Primeiro soma-se elemento a elemento: A + B tem linhas (3, 2) e (1, 2). O determinante é 3 · 2 − 2 · 1 = 6 − 2 = 4.\n\n3 é det A + det B = 1 + 2: o determinante da soma não é a soma dos determinantes. 2 é det A · det B, que seria o determinante do produto AB, e não o da soma. 6 fica só com a diagonal principal de A + B. E 8 soma os dois produtos da diagonal (6 + 2).",
      v: { i: () => qualR(det(soma(A, B)), o) },
    };
  })(),
  (() => {
    const o = ["k = 2 ou k = −2", "Apenas k = 2", "Apenas k = 4", "Apenas k = 0", "Para nenhum valor de k"];
    const conjuntos = [[2, -2], [2], [4], [0], []];
    return {
      d: "media",
      e: "Para quais valores de k a matriz de linhas (k, 4) e (1, k) não admite inversa?",
      o,
      x: "Uma matriz quadrada é invertível exatamente quando o seu determinante é diferente de zero. det = k · k − 4 · 1 = k² − 4, que se anula para k = 2 e para k = −2. Nesses dois casos, e só neles, a matriz não tem inversa: com k = 2, as linhas (2, 4) e (1, 2) são proporcionais.\n\n“Apenas k = 2” esquece a raiz negativa de k² = 4. k = 4 confunde o elemento 4 com a condição. k = 0 daria det = −4, e a matriz seria invertível. E “nenhum valor” ignora que o determinante pode se anular.",
      v: { i: () => { const z = zeros((k) => det([[k, 4], [1, k]]), -10, 10); return unicoV(conjuntos.map((c) => mesmoConj(c, z))); } },
    };
  })(),
  (() => {
    const o = ["12", "24", "6", "−24", "16"];
    const P = [[1, 2], [4, 6], [7, 2]];
    return {
      d: "media",
      e: "Qual é a área do triângulo de vértices (1, 2), (4, 6) e (7, 2), calculada pelo determinante das coordenadas?",
      o,
      x: "A área é metade do módulo do determinante da matriz de linhas (1, 2, 1), (4, 6, 1) e (7, 2, 1): det = 1(6 − 2) − 2(4 − 7) + 1(8 − 42) = 4 + 6 − 34 = −24, e a área é |−24|/2 = 12. Conferindo pela geometria: a base, de (1, 2) a (7, 2), mede 6, e a altura até (4, 6) mede 4: 6 · 4/2 = 12.\n\n24 esquece de dividir por 2. 6 divide por 4. −24 é o próprio determinante, com o sinal e sem a divisão — área não é negativa. E 16 é o perímetro do triângulo (5 + 5 + 6).",
      /* fórmula de Heron, com os lados — caminho independente do determinante */
      v: { i: () => { const d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]); const [a, b, c] = [d(P[0], P[1]), d(P[1], P[2]), d(P[2], P[0])]; const s = (a + b + c) / 2; return qualR(Math.sqrt(s * (s - a) * (s - b) * (s - c)), o); } },
    };
  })(),
  (() => {
    const o = ["5", "7", "4", "9", "3"];
    return {
      d: "media",
      e: "Para que valor de k os pontos (1, 1), (3, 5) e (k, 9) estão alinhados?",
      o,
      x: "Três pontos estão alinhados quando o determinante da matriz de linhas (1, 1, 1), (3, 5, 1) e (k, 9, 1) é zero: 1(5 − 9) − 1(3 − k) + 1(27 − 5k) = −4 − 3 + k + 27 − 5k = 20 − 4k = 0, e k = 5. Conferindo pela inclinação: de (1, 1) a (3, 5), y sobe 4 quando x sobe 2; de (3, 5) a (5, 9), também.\n\n7 faz y subir 4 quando x sobe 4 no segundo trecho, mudando a inclinação. 4 usa a subida de y como abscissa. 9 copia a ordenada do terceiro ponto. E 3 repete a abscissa do segundo ponto.",
      v: { i: () => { const ks = intervalo(-20, 20).filter((k) => Math.abs(det([[1, 1, 1], [3, 5, 1], [k, 9, 1]])) < 1e-9); if (ks.length !== 1) throw new Error("k"); return qualR(ks[0], o); } },
    };
  })(),
  (() => {
    const o = ["R$ 40", "R$ 60", "R$ 100", "R$ 35", "R$ 50"];
    return {
      d: "media",
      e: "Uma loja vende três produtos, a R$ 10, R$ 20 e R$ 5 a unidade. No primeiro dia, vendeu 2, 1 e 4 unidades de cada um, respectivamente; no segundo, 3, 0 e 2. Com as quantidades numa matriz Q (uma linha por dia) e os preços numa matriz coluna P, o produto QP dá o faturamento de cada dia. Qual foi o faturamento do segundo dia?",
      o,
      x: "O faturamento de um dia é a linha de quantidades daquele dia multiplicada pela coluna de preços: 3 · 10 + 0 · 20 + 2 · 5 = 30 + 0 + 10 = 40 reais. Pelo mesmo cálculo, o primeiro dia rendeu 2 · 10 + 1 · 20 + 4 · 5 = 60 reais.\n\nR$ 60 é o faturamento do primeiro dia. R$ 100 soma os dois dias. R$ 35 casa as quantidades com os preços em ordem inversa (3 · 5 + 0 · 20 + 2 · 10). E R$ 50 multiplica o total de unidades do dia, 5, pelo preço do primeiro produto.",
      v: { i: () => { const QP = multM([[2, 1, 4], [3, 0, 2]], [[10], [20], [5]]); return unicoV(o.map((t) => Number(t.replace(/\D/g, "")) === QP[1][0])); } },
    };
  })(),
  (() => {
    const o = ["3", "4", "2", "0", "6"];
    return {
      d: "media",
      e: "Seja A a matriz de linhas (0, 1, 2), (0, 0, 3) e (0, 0, 0). Qual é o elemento da 1ª linha e 3ª coluna de A²?",
      o,
      x: "O elemento da 1ª linha e 3ª coluna de A² é o produto da 1ª linha de A, (0, 1, 2), pela 3ª coluna de A, (2, 3, 0): 0 · 2 + 1 · 3 + 2 · 0 = 3. Os demais elementos de A² são zero, e A³ já é a matriz nula — A é nilpotente.\n\n4 eleva o elemento 2 ao quadrado, como se a potência fosse elemento a elemento. 2 copia o elemento de A. 0 supõe que A² já seja nula. E 6 multiplica 2 · 3, dois elementos de A que não se combinam no produto.",
      v: { i: () => qualR(potM([[0, 1, 2], [0, 0, 3], [0, 0, 0]], 2)[0][2], o) },
    };
  })(),
  (() => {
    const o = ["9/4", "3/4", "12", "4/9", "36"];
    return {
      d: "media",
      e: "Uma matriz A, de ordem 2, tem determinante 4. Qual é o determinante de 3A⁻¹?",
      o,
      x: "Duas propriedades: det(A⁻¹) = 1/det A = 1/4; e multiplicar uma matriz de ordem 2 por 3 multiplica o determinante por 3² = 9. Então det(3A⁻¹) = 9 · (1/4) = 9/4.\n\n3/4 multiplica o determinante por 3, e não por 3². 12 esquece a inversa (3 · 4). 4/9 inverte o resultado. E 36 esquece a inversa e usa 3² · 4. Com uma matriz concreta — a de linhas (2, 1) e (2, 3), de determinante 4 —, 3A⁻¹ tem linhas (9/4, −3/4) e (−3/2, 3/2), e determinante 27/8 − 9/8 = 9/4.",
      v: { i: () => { const A = [[2, 1], [2, 3]]; if (!perto(det(A), 4)) throw new Error("det"); return qualR(det(escala(3, inversa(A))), o); } },
    };
  })(),
  (() => {
    const o = ["2", "1", "−2", "10", "1/2"];
    return {
      d: "media",
      e: "Pela regra de Cramer, qual é o valor de y no sistema formado por 2x + 3y = 8 e x − y = −1?",
      o,
      x: "O determinante dos coeficientes é D = 2 · (−1) − 3 · 1 = −5. Trocando a coluna de y pelos termos independentes, Dy = 2 · (−1) − 8 · 1 = −10. Então y = Dy/D = −10/(−5) = 2. Conferindo: com y = 2, a segunda equação dá x = 1, e 2 · 1 + 3 · 2 = 8.\n\n1 é o valor de x. −2 perde um dos sinais negativos na divisão. 10 esquece de dividir por D. E 1/2 faz a divisão invertida, D/Dy.",
      v: { i: () => qualR(resolve([[2, 3], [1, -1]], [8, -1])[1], o) },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["a = 4 e b = 3", "a = 4 e b ≠ 3", "a ≠ 4 e b = 3", "a = 3 e b = 4", "a = 4, qualquer que seja b"];
    const conj = [(a, b) => a === 4 && b === 3, (a, b) => a === 4 && b !== 3, (a, b) => a !== 4 && b === 3, (a, b) => a === 3 && b === 4, (a) => a === 4];
    return {
      d: "dificil",
      e: "Considere o sistema formado por x + y + z = 1, x + 2y + 3z = 2 e 2x + 3y + az = b. Para que valores de a e b ele é possível e indeterminado?",
      o,
      x: "O determinante dos coeficientes é 1(2a − 9) − 1(a − 6) + 1(3 − 4) = a − 4. Com a ≠ 4, o sistema é possível e determinado, qualquer que seja b. Com a = 4, os coeficientes da 3ª equação, (2, 3, 4), são a soma dos da 1ª e da 2ª; o sistema só é compatível se o termo independente também for a soma: b = 1 + 2 = 3. Então a = 4 e b = 3 dão infinitas soluções, e a = 4 com b ≠ 3 torna o sistema impossível.\n\n“a = 4 e b ≠ 3” descreve justamente o caso impossível. “a ≠ 4 e b = 3” dá solução única. “a = 3 e b = 4” troca os valores. E “a = 4, qualquer que seja b” esquece que o termo independente também precisa ser compatível.",
      /* compara cada alternativa com a classificação real numa grade de valores */
      v: { i: () => { const grade = []; for (const a of intervalo(-6, 6)) for (const b of intervalo(-6, 6)) grade.push([a, b, classifica([[1, 1, 1], [1, 2, 3], [2, 3, a]], [1, 2, b]) === "SPI"]); return unicoV(conj.map((c) => grade.every(([a, b, spi]) => c(a, b) === spi))); } },
    };
  })(),
  (() => {
    const o = ["−2", "2", "−1", "1", "24"];
    return {
      d: "dificil",
      e: "Qual é o determinante da matriz de ordem 4 de linhas (1, 2, 0, 0), (3, 4, 0, 0), (0, 0, 2, 1) e (0, 0, 5, 3)?",
      o,
      x: "A matriz é diagonal por blocos: o bloco de linhas (1, 2) e (3, 4) e o bloco de linhas (2, 1) e (5, 3), com zeros fora deles. Nesse caso, o determinante é o produto dos determinantes dos blocos: (4 − 6) · (6 − 5) = −2 · 1 = −2. A expansão de Laplace pela 1ª linha leva ao mesmo valor.\n\n2 perde o sinal do primeiro bloco. −1 soma os determinantes dos blocos, −2 + 1. 1 usa só o segundo bloco. E 24 multiplica os elementos da diagonal principal, 1 · 4 · 2 · 3, como se a matriz fosse triangular.",
      v: { i: () => qualR(det([[1, 2, 0, 0], [3, 4, 0, 0], [0, 0, 2, 1], [0, 0, 5, 3]]), o) },
    };
  })(),
  (() => {
    const o = ["6", "5", "32", "10", "2"];
    return {
      d: "dificil",
      e: "Qual é o determinante da matriz de ordem 5 que tem todos os elementos da diagonal principal iguais a 2 e todos os demais iguais a 1?",
      o,
      x: "Somando todas as colunas à primeira, cada elemento da 1ª coluna vira 2 + 4 · 1 = 6; pondo o fator 6 em evidência, a 1ª coluna fica toda de 1s. Subtraindo a 1ª linha, (1, 1, 1, 1, 1), de cada uma das outras, cada linha i vira zero em tudo, menos um 1 na posição i: a matriz fica triangular com diagonal de 1s. Logo o determinante é 6 · 1 = 6. Em geral, para ordem n, vale n + 1.\n\n5 usa a ordem n no lugar de n + 1. 32 multiplica a diagonal, 2⁵, como se os 1s fora dela não contassem. 10 soma os elementos da diagonal. E 2 é o valor de um elemento da diagonal.",
      v: { i: () => qualR(det(intervalo(0, 4).map((i) => intervalo(0, 4).map((j) => (i === j ? 2 : 1)))), o) },
    };
  })(),
  (() => {
    const o = ["7", "5", "3", "−2", "10"];
    const A = [[1, 2], [3, 4]];
    return {
      d: "dificil",
      e: "Para a matriz A de linhas (1, 2) e (3, 4), existem números reais p e q tais que A² = pA + qI, em que I é a identidade de ordem 2. Qual é o valor de p + q?",
      o,
      x: "A² tem linhas (7, 10) e (15, 22), e pA + qI tem linhas (p + q, 2p) e (3p, 4p + q). Comparando os elementos fora da diagonal: 2p = 10, então p = 5. Na diagonal, p + q = 7 (e 4p + q = 22 confere, com q = 2). Pelo teorema de Cayley-Hamilton, p é o traço (1 + 4 = 5) e q é −det A = −(4 − 6) = 2.\n\n5 é só o valor de p, o traço. 3 usa q = −2, o próprio det A, sem trocar o sinal. −2 é o det A. E 10 é o elemento da 1ª linha e 2ª coluna de A², e não a soma p + q.",
      v: { i: () => { const A2 = multM(A, A); const sols = []; for (const p of intervalo(-20, 20)) for (const q of intervalo(-20, 20)) if (igualM(A2, soma(escala(p, A), escala(q, identidade(2))))) sols.push(p + q); if (sols.length !== 1) throw new Error("soluções"); return qualR(sols[0], o); } },
    };
  })(),
  (() => {
    const o = ["Impossível", "Possível e determinado", "Possível e indeterminado", "Possível, com exatamente duas soluções", "Impossível, porque dois dos planos são paralelos"];
    const N = [[1, 1, 1], [1, -1, 1], [2, 0, 2]], b = [1, 1, 3];
    const paralelos = (u, v) => [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]].every((c) => c === 0);
    return {
      d: "dificil",
      e: "As equações x + y + z = 1, x − y + z = 1 e 2x + 2z = 3 representam três planos no espaço. O que se pode afirmar sobre o sistema formado por elas?",
      o,
      x: "Somando as duas primeiras equações: 2x + 2z = 2. A terceira diz 2x + 2z = 3. As duas não podem valer ao mesmo tempo, então o sistema é impossível. Geometricamente, os três planos se cortam dois a dois em retas paralelas — como as faces laterais de um prisma —, sem ponto comum aos três.\n\n“Possível e determinado” e “possível e indeterminado” ignoram a contradição 2 = 3. Um sistema linear nunca tem exatamente duas soluções. E a afirmação sobre planos paralelos acerta a classificação, mas dá a razão errada: nenhum par de planos é paralelo, pois os vetores normais (1, 1, 1), (1, −1, 1) e (2, 0, 2) não são múltiplos um do outro.",
      v: { i: () => { const c = classifica(N, b); const algumParalelo = paralelos(N[0], N[1]) || paralelos(N[0], N[2]) || paralelos(N[1], N[2]); return unicoV([c === "SI", c === "SPD", c === "SPI", false, c === "SI" && algumParalelo]); } },
    };
  })(),
  (() => {
    const o = ["Linhas (−1, 0) e (0, −1)", "Linhas (1, 0) e (0, 1)", "Linhas (0, −1) e (1, 0)", "Linhas (3√3, −3) e (3, 3√3)", "Linhas (27/64, 1/64) e (1/64, 27/64)"];
    const t = Math.PI / 6;
    return {
      d: "dificil",
      e: "A matriz R, de linhas (cos 30°, −sen 30°) e (sen 30°, cos 30°), gira os pontos do plano de 30° em torno da origem. Qual é a matriz R⁶?",
      o,
      x: "Aplicar R seis vezes gira os pontos de 6 · 30° = 180°. A rotação de 180° leva (x, y) em (−x, −y), e sua matriz tem linhas (−1, 0) e (0, −1): R⁶ = −I. O mesmo resultado sai de multiplicar R por si mesma seis vezes.\n\nA identidade corresponderia a um giro de 360°, que exigiria R¹². Linhas (0, −1) e (1, 0) é o giro de 90°, que é R³. (3√3, −3) e (3, 3√3) é 6R, que multiplica a matriz em vez de elevá-la. E (27/64, 1/64) e (1/64, 27/64) eleva cada elemento à sexta potência, o que não é potência de matriz.",
      v: { i: () => qualM(potM([[Math.cos(t), -Math.sin(t)], [Math.sin(t), Math.cos(t)]], 6), o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "9", "19", "1/19"];
    return {
      d: "dificil",
      e: "Qual é a soma de todos os elementos da inversa da matriz de linhas (1, 1, 1), (1, 2, 3) e (1, 3, 6)?",
      o,
      x: "det A = 1(12 − 9) − 1(6 − 3) + 1(3 − 2) = 3 − 3 + 1 = 1. A inversa é a transposta da matriz dos cofatores dividida pelo determinante: A⁻¹ tem linhas (3, −3, 1), (−3, 5, −2) e (1, −2, 1). As linhas somam 1, 0 e 0, e a soma de todos os elementos é 1.\n\n0 supõe que os elementos se cancelem por completo. 9 é o traço da inversa, 3 + 5 + 1, e não a soma de todos os elementos. 19 soma os elementos da própria A. E 1/19 inverte essa soma, como se a inversa de uma matriz fosse obtida invertendo números.",
      v: { i: () => qualR(inversa([[1, 1, 1], [1, 2, 3], [1, 3, 6]]).flat().reduce((s, a) => s + a, 0), o) },
    };
  })(),
  (() => {
    const o = ["k = −1", "k = 1", "k = 0", "k = 1 ou k = −1", "Para nenhum valor de k"];
    const conjuntos = [[-1], [1], [0], [1, -1], []];
    return {
      d: "dificil",
      e: "Para que valor de k o sistema formado por kx + y = 1 e x + ky = 1 é impossível?",
      o,
      x: "O determinante dos coeficientes é k² − 1, que se anula em k = 1 e em k = −1. Com k = 1, as duas equações ficam iguais, x + y = 1: o sistema é possível e indeterminado. Com k = −1, ficam −x + y = 1 e x − y = 1; somando, 0 = 2, e o sistema é impossível. Para os demais valores de k, a solução é única.\n\nk = 1 dá infinitas soluções, e não nenhuma. k = 0 dá a solução x = 1, y = 1. “k = 1 ou k = −1” trata os dois zeros do determinante como equivalentes, mas eles levam a situações diferentes. E “para nenhum valor” esquece o caso k = −1.",
      v: { i: () => { const imp = intervalo(-20, 20).map((j) => j / 4).filter((k) => classifica([[k, 1], [1, k]], [1, 1]) === "SI"); return unicoV(conjuntos.map((c) => mesmoConj(c, imp))); } },
    };
  })(),
  (() => {
    const o = ["−1", "0", "3", "1", "−2"];
    return {
      d: "dificil",
      e: "Qual é a soma dos valores distintos de x que anulam o determinante da matriz de linhas (x, 1, 1), (1, x, 1) e (1, 1, x)?",
      o,
      x: "Pela regra de Sarrus, o determinante é x³ + 1 + 1 − x − x − x = x³ − 3x + 2. Ele se anula em x = 1, raiz dupla, e em x = −2: x³ − 3x + 2 = (x − 1)²(x + 2). Os valores distintos são 1 e −2, de soma −1.\n\n0 soma as raízes contando o 1 duas vezes (1 + 1 − 2), que é a soma pela relação de Girard, com multiplicidade. 3 é o número de raízes, e não a soma. 1 e −2 são cada um dos valores isoladamente.",
      v: { i: () => qualR(zeros((x) => det([[x, 1, 1], [1, x, 1], [1, 1, x]]), -10, 10).reduce((s, z) => s + z, 0), o) },
    };
  })(),
  (() => {
    const o = ["55", "89", "34", "10", "1"];
    return {
      d: "dificil",
      e: "Seja A a matriz de linhas (1, 1) e (1, 0). Qual é o elemento da 1ª linha e 2ª coluna de A¹⁰?",
      o,
      x: "As potências de A geram a sequência de Fibonacci: A² tem linhas (2, 1) e (1, 1); A³, linhas (3, 2) e (2, 1); em geral, Aⁿ tem linhas (Fₙ₊₁, Fₙ) e (Fₙ, Fₙ₋₁), com F₁ = F₂ = 1. O elemento pedido é F₁₀ = 55 (1, 1, 2, 3, 5, 8, 13, 21, 34, 55).\n\n89 é F₁₁, o elemento da 1ª linha e 1ª coluna. 34 é F₉, o da 2ª linha e 2ª coluna. 10 supõe que o elemento cresça de 1 em 1. E 1 eleva cada elemento à décima potência, o que não é potência de matriz.",
      v: { i: () => qualR(potM([[1, 1], [1, 0]], 10)[0][1], o) },
    };
  })(),
];
