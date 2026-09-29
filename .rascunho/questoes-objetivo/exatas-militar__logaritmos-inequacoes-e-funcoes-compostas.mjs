/* Rascunho — Exatas nível militar / Logaritmos, inequações e funções
   compostas.

   A explicação usa as propriedades dos logaritmos e o estudo de sinais; a
   conferência calcula com Math.log, acha raízes por bisseção e decide as
   inequações testando a desigualdade original numa malha de pontos que
   inclui os extremos de cada alternativa. Funções das alternativas são
   lidas do próprio texto (lerFuncao); intervalos, por lerIntervalos. */

import { unicoV, intervalo, escolhe, lerExpr, lerFuncao, zeros, bissecao, perto } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Logaritmos, inequações e funções compostas";
export const arquivo = "exatas-militar__logaritmos-inequacoes-e-funcoes-compostas";

const log = (b, x) => Math.log(x) / Math.log(b);
/* número escrito na alternativa, inclusive "log₂(22/3)" e "log₂ 7" */
const num = (t) => lerFuncao(String(t).replace(/(log[₀-₉]+)\s+(\d+)/, "$1($2)").replace(/\.(?=\d{3})/g, "").replace(/\s*(horas?|hora)\s*$/, ""))(0);
const qual = (x, alt, tol = 1e-9) => unicoV(alt.map((t) => Math.abs(num(t) - x) <= tol * Math.max(1, Math.abs(x))));
/* intervalos: "]−∞, −2] ∪ [1, 2]", "ℝ" */
const lerIntervalos = (t) => (t.trim() === "ℝ" ? [[-Infinity, Infinity, false, false]] : t.split("∪").map((p) => { const s = p.trim(); const [a, b] = s.slice(1, -1).split(/,\s*/).map((u) => (/∞/.test(u) ? (/[−-]/.test(u) ? -Infinity : Infinity) : lerExpr(u))); return [a, b, s[0] === "[", s[s.length - 1] === "]"]; }));
const pertence = (I, x) => I.some(([a, b, fa, fb]) => (fa ? x >= a - 1e-12 : x > a + 1e-12) && (fb ? x <= b + 1e-12 : x < b - 1e-12));
/* a alternativa certa é a única que coincide com a desigualdade em todos os pontos de teste (malha + extremos das alternativas) */
const qualIntervalo = (verdade, alt) => { const ext = alt.flatMap((t) => lerIntervalos(t).flatMap(([a, b]) => [a, b]).filter(Number.isFinite)); const xs = [...intervalo(-2000, 2000).map((k) => k / 100 + 0.003), ...ext, ...ext.map((e) => e + 1e-6), ...ext.map((e) => e - 1e-6)]; return unicoV(alt.map((t) => { const I = lerIntervalos(t); return xs.every((x) => pertence(I, x) === verdade(x)); })); };
/* conjunto de números: "−3 e 3" */
const conj = (t) => t.split(" e ").map(lerExpr);
const mesmoConj = (a, b) => a.length === b.length && [...a].sort((p, q) => p - q).every((x, i) => perto(x, [...b].sort((p, q) => p - q)[i], 1e-7));
/* lei da função na alternativa: "f⁻¹(x) = (x + 6)/3" → função */
const lei = (t) => lerFuncao(t.includes("=") ? t.split("=")[1] : t);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["5", "16", "6", "4", "64"];
    return {
      d: "facil",
      e: "Qual é o valor de log₂ 32, o logaritmo de 32 na base 2?",
      o,
      x: "O logaritmo de 32 na base 2 é o expoente a que se eleva 2 para obter 32. Como 2⁵ = 2 · 2 · 2 · 2 · 2 = 32, log₂ 32 = 5. Em geral, log_b a = c significa b^c = a, com a > 0, b > 0 e b ≠ 1.\n\n16 divide 32 por 2, confundindo logaritmo com divisão. 6 conta uma potência a mais (2⁶ = 64). 4 conta uma a menos (2⁴ = 16). E 64 multiplica 32 por 2. Uma lista das potências de 2 — 2, 4, 8, 16, 32 — resolve a questão de cabeça.",
      v: { i: () => qual(bissecao((c) => 2 ** c - 32, 0, 20), o) },
    };
  })(),
  (() => {
    const o = ["−2", "2", "1/2", "−1/2", "−3"];
    return {
      d: "facil",
      e: "Qual é o valor do logaritmo de 1/9 na base 3, isto é, log₃(1/9)?",
      o,
      x: "Procura-se o expoente c com 3^c = 1/9. Como 9 = 3² e 1/9 = 3⁻², c = −2. Logaritmos de números entre 0 e 1 são negativos quando a base é maior que 1.\n\n2 esquece que 1/9 é o inverso de 9: 3² = 9, e não 1/9. 1/2 e −1/2 trocam o expoente pelo seu inverso — seriam os logaritmos de √3 e de 1/√3. E −3 conta um expoente a mais: 3⁻³ = 1/27. Conferindo a resposta: 3⁻² = 1/3² = 1/9.",
      v: { i: () => qual(bissecao((c) => 3 ** c - 1 / 9, -10, 10), o) },
    };
  })(),
  (() => {
    const o = ["3", "100", "4", "30", "1"];
    return {
      d: "facil",
      e: "Qual é o valor de log 1.000, o logaritmo decimal (base 10) de 1.000?",
      o,
      x: "Na base 10, o logaritmo diz quantas vezes o 10 foi multiplicado: 10³ = 1.000, então log 1.000 = 3. Para potências de 10, é o número de zeros depois do 1.\n\n100 divide 1.000 por 10. 4 conta os algarismos de 1.000, e não os zeros. 30 multiplica o expoente por 10. E 1 seria o logaritmo de 10, e não o de 1.000. Por isso o logaritmo decimal mede a ordem de grandeza: números entre 1.000 e 10.000 têm logaritmo entre 3 e 4.",
      v: { i: () => qual(bissecao((c) => 10 ** c - 1000, 0, 10), o) },
    };
  })(),
  (() => {
    const o = ["3/2", "2", "1/2", "2/3", "32"];
    return {
      d: "facil",
      e: "Qual é o valor de log₄ 8, o logaritmo de 8 na base 4?",
      o,
      x: "Escrevendo as duas potências na base 2: 4 = 2² e 8 = 2³. Então 4^c = 8 vira 2^(2c) = 2³, e 2c = 3, c = 3/2. Conferindo: 4^(3/2) = (√4)³ = 2³ = 8.\n\n2 divide 8 por 4. 1/2 é o logaritmo de 2 na base 4. 2/3 inverte a fração — é o logaritmo de 4 na base 8. E 32 multiplica 8 por 4. Sempre que a base e o logaritmando são potências de um mesmo número, reescrevê-los nessa base comum resolve o logaritmo.",
      v: { i: () => qual(bissecao((c) => 4 ** c - 8, 0, 10), o) },
    };
  })(),
  (() => {
    const o = ["3", "log₂(22/3)", "8", "2", "4"];
    return {
      d: "facil",
      e: "Usando as propriedades dos logaritmos, qual é o valor de log₂ 6 + log₂(4/3)?",
      o,
      x: "A soma de logaritmos de mesma base é o logaritmo do produto: log₂ 6 + log₂(4/3) = log₂(6 · 4/3) = log₂ 8 = 3.\n\nlog₂(22/3) soma os logaritmandos, 6 + 4/3, em vez de multiplicá-los. 8 é o produto, o logaritmando, e não o logaritmo. 2 e 4 erram a potência de 2 que dá 8. A propriedade vem das potências: se 2ᵃ = 6 e 2ᵇ = 4/3, então 2^(a + b) = 6 · 4/3 = 8, e a + b = 3.",
      v: { i: () => qual(log(2, 6) + log(2, 4 / 3), o) },
    };
  })(),
  (() => {
    const o = ["0,903", "2,408", "0,602", "0,027", "1,204"];
    return {
      d: "facil",
      e: "Sabendo que log 2 ≅ 0,301, qual é o valor aproximado de log 8?",
      o,
      x: "Como 8 = 2³, pela propriedade da potência, log 8 = 3 · log 2 ≅ 3 · 0,301 = 0,903.\n\n2,408 multiplica 0,301 por 8, tratando o 8 como se fosse o expoente. 0,602 é log 4 = 2 log 2. 0,027 eleva 0,301 ao cubo, aplicando o expoente ao logaritmo em vez de multiplicá-lo. E 1,204 é log 16 = 4 log 2. O mesmo raciocínio dá log 5 = log(10/2) = 1 − 0,301 = 0,699, sem precisar de tabela.",
      v: { i: () => escolhe(Math.log10(8), o.map(num), 0.002) },
    };
  })(),
  (() => {
    const o = ["3", "4", "7", "8", "15"];
    return {
      d: "facil",
      e: "Qual é a solução da equação exponencial 2^(x + 1) = 16?",
      o,
      x: "Escrevendo 16 como potência de 2: 16 = 2⁴. Então 2^(x + 1) = 2⁴ e, como a função exponencial é injetora, os expoentes são iguais: x + 1 = 4, x = 3. Conferindo: 2⁴ = 16.\n\n4 é o expoente x + 1, e não x. 7 divide 16 por 2 e subtrai 1 (8 − 1). 8 é 16/2, sem logaritmo algum. E 15 subtrai 1 de 16, como se a potência fosse uma soma. Quando os dois membros podem ser escritos como potências da mesma base, basta comparar os expoentes; quando não podem, aplica-se logaritmo.",
      v: { i: () => qual(zeros((x) => 2 ** (x + 1) - 16, -10, 10)[0], o) },
    };
  })(),
  (() => {
    const o = ["]3, +∞[", "[3, +∞[", "]−∞, 3[", "]0, +∞[", "ℝ"];
    return {
      d: "facil",
      e: "Qual é o domínio da função f(x) = log(x − 3)?",
      o,
      x: "O logaritmo só existe para logaritmando positivo: x − 3 > 0, ou x > 3. O domínio é o intervalo ]3, +∞[, aberto em 3, porque log 0 não existe.\n\n[3, +∞[ inclui x = 3, em que o logaritmando é zero. ]−∞, 3[ inverte a desigualdade. ]0, +∞[ exige x > 0, que é a condição de log x, e não de log(x − 3). E ℝ ignora a condição de existência. A base 10 não impõe condição extra: o que restringe o domínio é só o logaritmando.",
      v: { i: () => qualIntervalo((x) => Number.isFinite(Math.log10(x - 3)), o) },
    };
  })(),
  (() => {
    const o = ["9", "25", "5", "8", "20"];
    const f = (x) => 2 * x + 1, g = (x) => x * x;
    return {
      d: "facil",
      e: "Sendo f(x) = 2x + 1 e g(x) = x², qual é o valor de f(g(2))?",
      o,
      x: "Calcula-se de dentro para fora: g(2) = 2² = 4, e f(4) = 2 · 4 + 1 = 9. Na notação f(g(x)), a função g é aplicada primeiro, e seu resultado entra em f.\n\n25 é g(f(2)) = 5², a composição na ordem inversa. 5 é só f(2). 8 é 2 · 4, esquecendo o +1 de f. E 20 multiplica f(2) por g(2), confundindo composição com produto. Composições em geral não comutam: aqui, f(g(2)) = 9, e g(f(2)) = 25.",
      v: { i: () => qual(f(g(2)), o) },
    };
  })(),
  (() => {
    const o = ["f⁻¹(x) = (x + 6)/3", "f⁻¹(x) = 3x + 6", "f⁻¹(x) = 1/(3x − 6)", "f⁻¹(x) = (x − 6)/3", "f⁻¹(x) = x/3 − 6"];
    const f = (x) => 3 * x - 6;
    return {
      d: "facil",
      e: "Qual é a inversa da função f(x) = 3x − 6, definida nos números reais?",
      o,
      x: "Escreve-se y = 3x − 6 e isola-se x: 3x = y + 6, x = (y + 6)/3. Trocando os nomes das variáveis: f⁻¹(x) = (x + 6)/3. Conferindo: f(f⁻¹(x)) = 3 · (x + 6)/3 − 6 = x.\n\n3x + 6 só troca o sinal da constante. 1/(3x − 6) é o inverso numérico de f(x), e não a função inversa. (x − 6)/3 erra o sinal ao isolar x. E x/3 − 6 desfaz as operações na ordem errada: primeiro é preciso somar 6, depois dividir por 3.",
      v: { i: () => unicoV(o.map((t) => { const g = lei(t); return [-2.3, 0.4, 1.7, 5.1].every((x) => perto(f(g(x)), x, 1e-9)); })) },
    };
  })(),
  (() => {
    const o = ["]−∞, −2]", "[−2, +∞[", "]−∞, 2]", "]−∞, −2[", "[2, +∞["];
    return {
      d: "facil",
      e: "Qual é o conjunto das soluções reais da inequação 3 − 2x ≥ 7?",
      o,
      x: "Isolando x: −2x ≥ 7 − 3 = 4. Ao dividir por −2, número negativo, a desigualdade se inverte: x ≤ −2. O conjunto solução é ]−∞, −2], fechado em −2 porque a desigualdade admite a igualdade. Conferindo com x = −3: 3 + 6 = 9 ≥ 7.\n\n[−2, +∞[ esquece de inverter a desigualdade. ]−∞, 2] erra o sinal na divisão. ]−∞, −2[ exclui o −2, em que vale a igualdade 3 + 4 = 7. E [2, +∞[ junta os dois erros.",
      v: { i: () => qualIntervalo((x) => 3 - 2 * x >= 7, o) },
    };
  })(),
  (() => {
    const o = ["16", "8", "2", "1/16", "6"];
    return {
      d: "facil",
      e: "Pela definição de logaritmo, qual número x satisfaz log₂ x = 4?",
      o,
      x: "Pela definição de logaritmo, log₂ x = 4 significa 2⁴ = x, então x = 16. Conferindo: o expoente a que se eleva 2 para obter 16 é 4.\n\n8 multiplica 2 por 4. 2 é a base. 1/16 usa o expoente −4. E 6 soma 2 + 4. Em todas essas, a definição de logaritmo — o logaritmo é um expoente — foi trocada por outra operação com os números do enunciado. Conferindo a resposta: 2 · 2 · 2 · 2 = 16.",
      v: { i: () => qual(zeros((x) => Math.log2(x) - 4, 0.01, 100)[0], o) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["3a/2", "3a", "2a/3", "a/2", "6a"];
    const a = Math.log2(3);
    return {
      d: "media",
      e: "Sendo a = log₂ 3, qual é o valor de log₄ 27 em função de a?",
      o,
      x: "Mudando para a base 2: log₄ 27 = log₂ 27/log₂ 4. Como 27 = 3³, log₂ 27 = 3 log₂ 3 = 3a; e log₂ 4 = 2. Então log₄ 27 = 3a/2.\n\n3a esquece a mudança de base, que divide por log₂ 4 = 2. 2a/3 inverte a fração. a/2 esquece o expoente 3 de 27 = 3³. E 6a multiplica por 2 em vez de dividir. Numericamente: log₂ 3 ≅ 1,585, e 3 · 1,585/2 ≅ 2,377, o expoente com 4^2,377 ≅ 27.",
      v: { i: () => unicoV(o.map((t) => perto(lerFuncao(t.replace(/a/g, "x"))(a), log(4, 27), 1e-9))) },
    };
  })(),
  (() => {
    const o = ["3", "8", "1", "log₂ 7", "2"];
    return {
      d: "media",
      e: "Qual é o valor do produto log₂ 3 · log₃ 4 · log₄ 5 · log₅ 6 · log₆ 7 · log₇ 8?",
      o,
      x: "Pela mudança de base, cada fator é logₙ(n + 1) = ln(n + 1)/ln n. No produto, cada numerador cancela o denominador do fator seguinte: (ln 3/ln 2)(ln 4/ln 3)(ln 5/ln 4)…(ln 8/ln 7) = ln 8/ln 2 = log₂ 8 = 3.\n\n8 é o logaritmando final, e não o logaritmo. 1 supõe que todos os fatores se cancelem por completo. log₂ 7 para um fator antes do fim. E 2 é a base do primeiro logaritmo.",
      v: { i: () => qual(intervalo(2, 7).reduce((p, n) => p * log(n, n + 1), 1), o) },
    };
  })(),
  (() => {
    const o = ["3", "−3 e 3", "−3", "9", "2"];
    const f = (x) => Math.log2(x - 1) + Math.log2(x + 1) - 3;
    return {
      d: "media",
      e: "Qual é a solução real da equação log₂(x − 1) + log₂(x + 1) = 3?",
      o,
      x: "Juntando os logaritmos: log₂[(x − 1)(x + 1)] = 3, ou x² − 1 = 2³ = 8, e x² = 9, x = ±3. Mas os logaritmandos precisam ser positivos: x − 1 > 0 e x + 1 > 0, isto é, x > 1. Só x = 3 serve. Conferindo: log₂ 2 + log₂ 4 = 1 + 2 = 3.\n\n“−3 e 3” esquece a condição de existência: log₂(−4) não existe. −3 fica justamente com a raiz inválida. 9 é x², sem a raiz. E 2 resolve x² − 1 = 3, trocando 2³ por 3.",
      v: { i: () => { const z = zeros(f, 1 + 1e-9, 100); return unicoV(o.map((t) => mesmoConj(conj(t), z))); } },
    };
  })(),
  (() => {
    const o = ["2", "−1 e 2", "4", "1", "0"];
    return {
      d: "media",
      e: "Qual é a solução real da equação 4ˣ − 3 · 2ˣ − 4 = 0?",
      o,
      x: "Como 4ˣ = (2ˣ)², a substituição t = 2ˣ dá t² − 3t − 4 = 0, de raízes t = 4 e t = −1. Mas t = 2ˣ é sempre positivo, então só t = 4 vale: 2ˣ = 4, e x = 2. Conferindo: 16 − 12 − 4 = 0.\n\n“−1 e 2” mistura a raiz em t, −1 (que não é valor de 2ˣ), com a solução em x. 4 é o valor de t, e não o de x. 1 e 0 não satisfazem a equação: dão 4 − 6 − 4 = −6 e 1 − 3 − 4 = −6.",
      v: { i: () => { const z = zeros((x) => 4 ** x - 3 * 2 ** x - 4, -20, 20); return unicoV(o.map((t) => mesmoConj(conj(t), z))); } },
    };
  })(),
  (() => {
    const o = ["]1, 5[", "]5, +∞[", "]1, +∞[", "]−∞, 5[", "]1, 3["];
    return {
      d: "media",
      e: "Qual é o conjunto das soluções da inequação log(x − 1) > −2, sendo o logaritmo tomado na base 1/2?",
      o,
      x: "Condição de existência: x − 1 > 0, isto é, x > 1. Na base 1/2, −2 é o logaritmo de 4, porque (1/2)⁻² = 4. Com base entre 0 e 1, o logaritmo é decrescente, e a desigualdade se inverte entre os logaritmandos: x − 1 < 4, ou x < 5. Juntando: 1 < x < 5.\n\n]5, +∞[ esquece de inverter a desigualdade. ]1, +∞[ fica só com a condição de existência. ]−∞, 5[ esquece a condição de existência. E ]1, 3[ usa 2 no lugar de 4, como se (1/2)⁻² valesse 2.",
      v: { i: () => qualIntervalo((x) => x > 1 && log(0.5, x - 1) > -2, o) },
    };
  })(),
  (() => {
    const o = ["]−∞, −1[ ∪ ]2, +∞[", "]−1, 2[", "]2, +∞[", "]−∞, −2[ ∪ ]1, +∞[", "ℝ"];
    return {
      d: "media",
      e: "Qual é o conjunto das soluções reais da inequação 2^(x²) > 2^(x + 2)?",
      o,
      x: "A base 2 é maior que 1, então a exponencial é crescente, e a desigualdade se mantém entre os expoentes: x² > x + 2, ou x² − x − 2 > 0. As raízes de x² − x − 2 são −1 e 2, e a parábola, de concavidade para cima, é positiva fora delas: x < −1 ou x > 2.\n\n]−1, 2[ é o intervalo em que a expressão é negativa, o contrário do pedido. ]2, +∞[ esquece a parte negativa da solução. ]−∞, −2[ ∪ ]1, +∞[ troca os sinais das raízes. E ℝ supõe que x² sempre supere x + 2.",
      v: { i: () => qualIntervalo((x) => x * x > x + 2, o) },
    };
  })(),
  (() => {
    const o = ["]−3, 2]", "[−3, 2]", "]−∞, −3[ ∪ [2, +∞[", "]−3, 2[", "[−2, 3]"];
    return {
      d: "media",
      e: "Para quais valores reais de x vale a desigualdade (x − 2)/(x + 3) ≤ 0?",
      o,
      x: "O quociente é negativo quando numerador e denominador têm sinais opostos, e zero quando o numerador se anula. O numerador muda de sinal em 2, e o denominador, em −3. Entre −3 e 2, o numerador é negativo e o denominador positivo: quociente negativo. Em x = 2, o quociente é zero, o que a desigualdade ≤ admite. Em x = −3, o denominador se anula e o quociente não existe. Solução: ]−3, 2].\n\n[−3, 2] inclui x = −3, que anula o denominador. ]−∞, −3[ ∪ [2, +∞[ é onde o quociente é positivo ou nulo, quase o contrário do pedido. ]−3, 2[ exclui o 2, em que o quociente vale 0. E [−2, 3] troca os sinais das raízes.",
      v: { i: () => qualIntervalo((x) => { const q = (x - 2) / (x + 3); return Number.isFinite(q) && q <= 0; }, o) },
    };
  })(),
  (() => {
    const o = ["]2, 3[", "]−∞, 2[ ∪ ]3, +∞[", "[2, 3]", "]−3, −2[", "]0, 6["];
    return {
      d: "media",
      e: "Em que intervalo a expressão x² − 5x + 6 assume valores negativos?",
      o,
      x: "As raízes de x² − 5x + 6 são 2 e 3 (soma 5, produto 6). A parábola tem concavidade para cima, então é negativa entre as raízes: 2 < x < 3. O intervalo é aberto porque nas raízes a expressão vale zero, que não é negativo.\n\n]−∞, 2[ ∪ ]3, +∞[ é onde a expressão é positiva. [2, 3] inclui as raízes. ]−3, −2[ troca os sinais das raízes. E ]0, 6[ usa os coeficientes no lugar das raízes.",
      v: { i: () => qualIntervalo((x) => x * x - 5 * x + 6 < 0, o) },
    };
  })(),
  (() => {
    const o = ["]−1, 4[", "]−∞, −1[ ∪ ]4, +∞[", "]−4, 1[", "[3/2, 4[", "[−1, 4]"];
    return {
      d: "media",
      e: "Quais números reais x satisfazem a inequação |2x − 3| < 5?",
      o,
      x: "|u| < 5 equivale a −5 < u < 5. Com u = 2x − 3: −5 < 2x − 3 < 5; somando 3, −2 < 2x < 8; dividindo por 2, −1 < x < 4.\n\n]−∞, −1[ ∪ ]4, +∞[ resolve |2x − 3| > 5, o contrário. ]−4, 1[ erra o sinal do 3 ao isolar x. [3/2, 4[ considera só o caso 2x − 3 ≥ 0, esquecendo os valores em que o módulo troca o sinal. E [−1, 4] inclui os extremos, em que o módulo vale exatamente 5.",
      v: { i: () => qualIntervalo((x) => Math.abs(2 * x - 3) < 5, o) },
    };
  })(),
  (() => {
    const o = ["2x² + 1", "4x² + 12x + 8", "2x² + 3", "2x³ + 3x² − 2x − 3", "x² + 2x + 2"];
    const f = (x) => x * x - 1, g = (x) => 2 * x + 3;
    return {
      d: "media",
      e: "Sendo f(x) = x² − 1 e g(x) = 2x + 3, qual é a lei da função composta g(f(x))?",
      o,
      x: "Em g(f(x)), aplica-se primeiro f e depois g: g(f(x)) = 2 · f(x) + 3 = 2(x² − 1) + 3 = 2x² − 2 + 3 = 2x² + 1.\n\n4x² + 12x + 8 é f(g(x)) = (2x + 3)² − 1, a composição na ordem inversa. 2x² + 3 esquece de multiplicar o −1 por 2. 2x³ + 3x² − 2x − 3 é o produto f(x) · g(x). E x² + 2x + 2 é a soma f(x) + g(x). A ordem importa: g(f(x)) e f(g(x)) são funções diferentes, como mostram os coeficientes.",
      v: { f: (x) => g(f(x)), fo: o.map(lerFuncao) },
    };
  })(),
  (() => {
    const o = ["2x + 3", "4x + 5", "2x + 5", "4x + 1", "(x − 5)/4"];
    return {
      d: "media",
      e: "Uma função f satisfaz f(2x + 1) = 4x + 5 para todo x real. Qual é a lei de f(x)?",
      o,
      x: "Fazendo u = 2x + 1, tem-se x = (u − 1)/2, e f(u) = 4 · (u − 1)/2 + 5 = 2(u − 1) + 5 = 2u + 3. Trocando o nome da variável: f(x) = 2x + 3. Conferindo: f(2x + 1) = 2(2x + 1) + 3 = 4x + 5.\n\n4x + 5 é a expressão de f(2x + 1), e não de f(x). 2x + 5 divide o 4 por 2, mas esquece de ajustar a constante. 4x + 1 mantém o coeficiente 4 e acerta só a constante de outro jeito. E (x − 5)/4 é a inversa de 4x + 5.",
      v: { i: () => unicoV(o.map((t) => { const f = lerFuncao(t); return [-1.7, 0, 0.6, 3.2].every((x) => perto(f(2 * x + 1), 4 * x + 5, 1e-9)); })) },
    };
  })(),
  (() => {
    const o = ["f⁻¹(x) = (3x + 1)/(x − 2)", "f⁻¹(x) = (x − 3)/(2x + 1)", "f⁻¹(x) = (x + 3)/(2x − 1)", "f⁻¹(x) = (3x − 1)/(x + 2)", "f⁻¹(x) = (2x − 1)/(x + 3)"];
    const f = (x) => (2 * x + 1) / (x - 3);
    return {
      d: "media",
      e: "Qual é a inversa da função f(x) = (2x + 1)/(x − 3), definida para x ≠ 3?",
      o,
      x: "Escrevendo y = (2x + 1)/(x − 3) e isolando x: y(x − 3) = 2x + 1, xy − 3y = 2x + 1, x(y − 2) = 3y + 1, e x = (3y + 1)/(y − 2). Trocando as variáveis: f⁻¹(x) = (3x + 1)/(x − 2), definida para x ≠ 2. Conferindo: f(0) = −1/3, e f⁻¹(−1/3) = (−1 + 1)/(−1/3 − 2) = 0.\n\n(x − 3)/(2x + 1) é o inverso numérico, 1/f(x), e não a função inversa. (x + 3)/(2x − 1), (3x − 1)/(x + 2) e (2x − 1)/(x + 3) erram sinais ao isolar x.",
      v: { i: () => unicoV(o.map((t) => { const g = lei(t); return [-2.3, 0.4, 1.7, 5.1].every((x) => perto(f(g(x)), x, 1e-9)); })) },
    };
  })(),
  (() => {
    const o = ["[1, 4[ ∪ ]4, 5[", "[1, 5[", "]1, 5[", "[1, 4[", "]−∞, 4[ ∪ ]4, 5["];
    return {
      d: "media",
      e: "Qual é o domínio da função f(x) = √(x − 1)/log(5 − x), com o logaritmo na base 10?",
      o,
      x: "Três condições: a raiz exige x − 1 ≥ 0, ou x ≥ 1; o logaritmo exige 5 − x > 0, ou x < 5; e o denominador não pode ser zero: log(5 − x) ≠ 0, isto é, 5 − x ≠ 1, ou x ≠ 4. Juntando: 1 ≤ x < 5, com x ≠ 4. O domínio é [1, 4[ ∪ ]4, 5[.\n\n[1, 5[ esquece que o denominador se anula em x = 4. ]1, 5[ exclui também o 1, onde a raiz vale 0, o que é permitido no numerador. [1, 4[ corta todo o trecho entre 4 e 5, onde a função existe. E ]−∞, 4[ ∪ ]4, 5[ esquece a condição da raiz.",
      /* cada parte avaliada pela sua condição de existência (em JavaScript, log 0 dá −∞ e a divisão daria −0) */
      v: { i: () => qualIntervalo((x) => { const raiz = x - 1 >= 0 ? Math.sqrt(x - 1) : NaN; const lg = 5 - x > 0 ? Math.log10(5 - x) : NaN; return Number.isFinite(raiz) && Number.isFinite(lg) && lg !== 0; }, o) },
    };
  })(),
  (() => {
    const o = ["3", "−1 e 3", "−1", "1", "3/2"];
    return {
      d: "media",
      e: "Qual é a solução da equação logₓ(2x + 3) = 2, em que a base do logaritmo é x?",
      o,
      x: "Pela definição: x² = 2x + 3, ou x² − 2x − 3 = 0, de raízes 3 e −1. A base de um logaritmo precisa ser positiva e diferente de 1, então x = −1 é descartado. Resta x = 3: log₃ 9 = 2.\n\n“−1 e 3” esquece as condições sobre a base. −1 fica justamente com a raiz inválida. 1 não pode ser base de logaritmo. E 3/2 resolve 2x = 3, esquecendo o quadrado.",
      v: { i: () => { const z = [...zeros((x) => log(x, 2 * x + 3) - 2, 1e-6, 1 - 1e-6), ...zeros((x) => log(x, 2 * x + 3) - 2, 1 + 1e-6, 100)].filter((x) => Math.abs(log(x, 2 * x + 3) - 2) < 1e-7); return unicoV(o.map((t) => mesmoConj(conj(t), z))); } },
    };
  })(),
  (() => {
    const o = ["14,2 horas", "20 horas", "28,4 horas", "7,1 horas", "0,0064 hora"];
    return {
      d: "media",
      e: "Uma população de 1.000 bactérias cresce 5% por hora: P(t) = 1.000 · (1,05)ᵗ, com t em horas. Usando log 2 ≅ 0,301 e log 1,05 ≅ 0,0212, em quanto tempo, aproximadamente, a população dobra?",
      o,
      x: "A população dobra quando (1,05)ᵗ = 2. Aplicando logaritmo: t · log 1,05 = log 2, e t = 0,301/0,0212 ≅ 14,2 horas.\n\n20 horas supõe crescimento linear — 5% por hora, 100% em 20 horas —, mas o crescimento é composto, sempre sobre a população já aumentada. 28,4 horas é o tempo para quadruplicar. 7,1 horas divide o resultado por 2. E 0,0064 hora multiplica os logaritmos em vez de dividi-los.",
      v: { i: () => escolhe(bissecao((t) => 1.05 ** t - 2, 0, 100), o.map(num), 0.005) },
    };
  })(),
  (() => {
    const o = ["1.000", "30", "1,5", "300", "10"];
    const I = (N) => 10 ** (N / 10);
    return {
      d: "media",
      e: "O nível sonoro, em decibéis, é N = 10 · log(I/I₀), em que I é a intensidade do som e I₀ é uma intensidade de referência. Se o nível passa de 60 dB para 90 dB, por quanto fica multiplicada a intensidade?",
      o,
      x: "De N = 10 log(I/I₀): a 60 dB, log(I₁/I₀) = 6, e a 90 dB, log(I₂/I₀) = 9. Subtraindo: log(I₂/I₁) = 3, e I₂/I₁ = 10³ = 1.000. Cada 10 dB a mais multiplicam a intensidade por 10.\n\n30 é o aumento em decibéis, e não o fator da intensidade. 1,5 é a razão 90/60, que a escala logarítmica não conserva. 300 multiplica 30 por 10. E 10 é o fator correspondente a apenas 10 dB.",
      v: { i: () => qual(I(90) / I(60), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["8", "18", "11", "36", "12"];
    const a = 10 ** 2, b = 10 ** 3;
    return {
      d: "media",
      e: "Se log a = 2 e log b = 3, qual é o valor de log(a · b²)?",
      o,
      x: "Pelas propriedades: log(a · b²) = log a + log b² = log a + 2 log b = 2 + 2 · 3 = 8. Conferindo com os números: a = 10² = 100 e b = 10³ = 1.000, então a · b² = 100 · 10⁶ = 10⁸.\n\n18 multiplica log a por (log b)², 2 · 9. 11 eleva ao quadrado o logaritmo de b e soma: 2 + 9. 36 eleva ao quadrado o produto log a · log b. E 12 multiplica log a por 2 log b, trocando a soma pelo produto.",
      v: { i: () => qual(Math.log10(a * b * b), o) },
    };
  })(),
  (() => {
    const o = ["2", "10", "9", "0", "log₃ 10"];
    return {
      d: "media",
      e: "Qual é a soma das soluções reais da equação 3^(2x) − 10 · 3ˣ + 9 = 0?",
      o,
      x: "Com t = 3ˣ, a equação vira t² − 10t + 9 = 0, de raízes t = 1 e t = 9. Então 3ˣ = 1 dá x = 0, e 3ˣ = 9 dá x = 2. A soma das soluções é 0 + 2 = 2.\n\n10 é a soma das raízes em t, e não em x. 9 é o produto das raízes em t. 0 é uma das soluções, e não a soma. E log₃ 10 aplica o logaritmo à soma das raízes em t, mas o logaritmo de uma soma não é a soma dos logaritmos.",
      v: { i: () => qual(zeros((x) => 3 ** (2 * x) - 10 * 3 ** x + 9, -10, 10).reduce((s, z) => s + z, 0), o) },
    };
  })(),
  (() => {
    const o = ["11", "259", "24", "6", "16"];
    const f = (x) => 2 ** x, g = (x) => Math.log2(x);
    return {
      d: "media",
      e: "Sendo f(x) = 2ˣ e g(x) = log₂ x, qual é o valor de f(g(8)) + g(f(3))?",
      o,
      x: "As funções 2ˣ e log₂ x são inversas uma da outra: f(g(x)) = x para x > 0, e g(f(x)) = x para todo x real. Então f(g(8)) = 8 e g(f(3)) = 3, e a soma é 11. Passo a passo: g(8) = 3 e f(3) = 8; f(3) = 8 e g(8) = 3.\n\n259 aplica f direto a 8 (2⁸ = 256) e soma g(8) = 3, esquecendo a composição. 24 multiplica 8 por 3 em vez de somar. 6 usa o valor intermediário 3 nas duas parcelas. E 16 usa o valor 8 nas duas parcelas.",
      v: { i: () => qual(f(g(8)) + g(f(3)), o) },
    };
  })(),
  (() => {
    const o = ["[−1, 0[ ∪ ]3, 4]", "[−1, 4]", "]−∞, 0[ ∪ ]3, +∞[", "]0, 3[", "[−1, 0] ∪ [3, 4]"];
    return {
      d: "media",
      e: "Qual é o conjunto das soluções da inequação log₂(x² − 3x) ≤ 2?",
      o,
      x: "Duas condições. Existência: x² − 3x > 0, isto é, x < 0 ou x > 3. Desigualdade: como a base 2 é maior que 1, log₂(x² − 3x) ≤ log₂ 4 equivale a x² − 3x ≤ 4, ou x² − 3x − 4 ≤ 0, que vale entre as raízes −1 e 4: −1 ≤ x ≤ 4. A interseção é [−1, 0[ ∪ ]3, 4].\n\n[−1, 4] esquece a condição de existência e aceita, por exemplo, x = 1, em que x² − 3x = −2. ]−∞, 0[ ∪ ]3, +∞[ fica só com a condição de existência. ]0, 3[ é justamente onde o logaritmo não existe. E [−1, 0] ∪ [3, 4] inclui 0 e 3, em que o logaritmando é zero.",
      v: { i: () => qualIntervalo((x) => x * x - 3 * x > 0 && Math.log2(x * x - 3 * x) <= 2, o) },
    };
  })(),
  (() => {
    const o = ["5", "7", "6", "4", "Infinitos"];
    return {
      d: "media",
      e: "Quantos números inteiros satisfazem a inequação (x − 1)(x − 7) < 0?",
      o,
      x: "O produto é negativo quando os fatores têm sinais opostos, o que acontece entre as raízes 1 e 7: 1 < x < 7. Os inteiros desse intervalo são 2, 3, 4, 5 e 6: são 5.\n\n7 inclui os extremos 1 e 7, em que o produto é zero — e a desigualdade é estrita. 6 inclui um dos extremos. 4 esquece um dos inteiros do meio. E “infinitos” confunde o intervalo real, que tem infinitos números, com a quantidade de inteiros nele.",
      v: { i: () => { const n = intervalo(-100, 100).filter((x) => (x - 1) * (x - 7) < 0).length; return unicoV(o.map((t) => t !== "Infinitos" && Number(t) === n)); } },
    };
  })(),
  (() => {
    const o = ["(x − 1)/x", "x", "1/(1 − x)²", "(1 − x)/x", "x/(x − 1)"];
    const f = (x) => 1 / (1 - x);
    return {
      d: "media",
      e: "Para f(x) = 1/(1 − x), com x ≠ 0 e x ≠ 1, qual é a lei de f(f(x))?",
      o,
      x: "f(f(x)) = 1/(1 − f(x)) = 1/(1 − 1/(1 − x)). O denominador é (1 − x − 1)/(1 − x) = −x/(1 − x). Então f(f(x)) = (1 − x)/(−x) = (x − 1)/x. Conferindo em x = 2: f(2) = −1 e f(−1) = 1/2; e (2 − 1)/2 = 1/2.\n\nx seria o resultado de aplicar f três vezes, e não duas. 1/(1 − x)² eleva f ao quadrado, confundindo composição com potência. (1 − x)/x erra o sinal ao simplificar. E x/(x − 1) inverte a fração.",
      v: { f: (x) => f(f(x)), fo: o.map(lerFuncao) },
    };
  })(),
  (() => {
    const o = ["]−1, +∞[", "]−∞, −1[", "]3, +∞[", "]−∞, 3[", "]−1, 3["];
    return {
      d: "media",
      e: "Para que valores reais de x se tem (1/3)^(x − 1) < 9?",
      o,
      x: "Escrevendo tudo na base 3: (1/3)^(x − 1) = 3^(1 − x) e 9 = 3². Com base 3, maior que 1, a desigualdade se mantém entre os expoentes: 1 − x < 2, isto é, x > −1.\n\n]−∞, −1[ compara os expoentes na base 1/3 sem inverter a desigualdade (x − 1 < −2), o que é preciso fazer quando a base está entre 0 e 1. ]3, +∞[ escreve 9 como (1/3)², esquecendo o sinal do expoente. ]−∞, 3[ junta os dois enganos. E ]−1, 3[ corta sem motivo a parte x ≥ 3 da solução.",
      v: { i: () => qualIntervalo((x) => (1 / 3) ** (x - 1) < 9, o) },
    };
  })(),
  (() => {
    const o = ["3", "1", "−1/3", "5", "Não há solução real"];
    return {
      d: "media",
      e: "Qual é a solução da equação log₃(x + 2) = log₃(2x − 1)?",
      o,
      x: "Logaritmos de mesma base são iguais quando os logaritmandos são iguais e positivos: x + 2 = 2x − 1, então x = 3. Conferindo as condições de existência: x + 2 = 5 > 0 e 2x − 1 = 5 > 0. A solução é x = 3.\n\n1 erra o sinal ao passar o −1 para o outro membro (x + 2 = 2x + 1). −1/3 iguala x + 2 a −(2x − 1). 5 é o valor comum dos logaritmandos, e não o de x. E “não há solução” supõe, sem conferir, que as condições de existência eliminem a raiz.",
      v: { i: () => { const z = zeros((x) => Math.log(x + 2) / Math.log(3) - Math.log(2 * x - 1) / Math.log(3), 0.5 + 1e-9, 100); return unicoV(o.map((t) => (/Não há/.test(t) ? z.length === 0 : z.length === 1 && perto(lerExpr(t), z[0], 1e-7)))); } },
    };
  })(),
  (() => {
    const o = ["11", "−7", "4", "49", "−22"];
    const f = (x) => (x >= 0 ? 3 * x - 1 : x * x);
    return {
      d: "media",
      e: "A função f é definida por f(x) = 3x − 1 para x ≥ 0 e por f(x) = x² para x < 0. Qual é o valor de f(f(−2))?",
      o,
      x: "Primeiro f(−2): como −2 < 0, usa-se f(x) = x², e f(−2) = 4. Depois f(4): como 4 ≥ 0, usa-se f(x) = 3x − 1, e f(4) = 11.\n\n−7 aplica a primeira sentença a −2: 3 · (−2) − 1. 4 é só f(−2), sem a segunda aplicação. 49 usa a sentença errada no primeiro passo (−7) e a certa no segundo ((−7)² = 49). E −22 usa 3x − 1 nos dois passos. Em funções definidas por partes, a sentença é escolhida pelo valor do argumento em cada passo, e não pelo x inicial.",
      v: { i: () => qual(f(f(-2)), o) },
    };
  })(),
  (() => {
    const o = ["2,32", "2,5", "0,43", "0,21", "0,40"];
    return {
      d: "media",
      e: "Usando log 2 ≅ 0,301 e log 5 ≅ 0,699, qual é o valor aproximado da solução de 2ˣ = 5?",
      o,
      x: "Aplicando logaritmo decimal: x · log 2 = log 5, e x = 0,699/0,301 ≅ 2,32. Faz sentido: 2² = 4 e 2³ = 8, então x fica entre 2 e 3, mais perto de 2.\n\n2,5 divide 5 por 2, sem logaritmos. 0,43 inverte a divisão, 0,301/0,699. 0,21 multiplica os logaritmos. E 0,40 subtrai os logaritmos, 0,699 − 0,301. Com calculadora, log₂ 5 ≅ 2,3219, e 2^2,32 ≅ 4,99.",
      v: { i: () => escolhe(zeros((x) => 2 ** x - 5, 0, 10)[0], o.map(num), 0.003) },
    };
  })(),
  (() => {
    const o = ["[−2, 1] ∪ [2, +∞[", "]−∞, −2] ∪ [1, 2]", "[2, +∞[", "[−2, 2]", "[1, +∞["];
    return {
      d: "media",
      e: "Resolvendo em ℝ a inequação (x² − 4)(x − 1) ≥ 0, que conjunto se obtém?",
      o,
      x: "As raízes são −2, 1 e 2, porque x² − 4 = (x − 2)(x + 2). Estudando o sinal do produto de três fatores do 1º grau: para x > 2, os três são positivos (produto positivo); entre 1 e 2, um é negativo (produto negativo); entre −2 e 1, dois são negativos (produto positivo); para x < −2, os três são negativos (produto negativo). Com os zeros incluídos: [−2, 1] ∪ [2, +∞[.\n\n]−∞, −2] ∪ [1, 2] é onde o produto é negativo ou nulo. [2, +∞[ esquece o trecho entre −2 e 1. [−2, 2] ignora a raiz 1. E [1, +∞[ trata x² − 4 como se fosse sempre positivo.",
      v: { i: () => qualIntervalo((x) => (x * x - 4) * (x - 1) >= 0, o) },
    };
  })(),
  (() => {
    const o = ["16", "64", "8", "4", "256"];
    return {
      d: "media",
      e: "Qual é a solução da equação log₂ x + log₄ x = 6?",
      o,
      x: "Mudando para a base 2: log₄ x = log₂ x/log₂ 4 = (1/2) log₂ x. A equação fica log₂ x + (1/2) log₂ x = 6, ou (3/2) log₂ x = 6, e log₂ x = 4: x = 16. Conferindo: log₂ 16 + log₄ 16 = 4 + 2 = 6.\n\n64 iguala só log₂ x a 6, esquecendo a segunda parcela. 8 trata log₄ x como se fosse log₂ x (2 log₂ x = 6). 4 usa log₄ x = 2 log₂ x, a relação invertida. E 256 acerta log₂ x = 4, mas eleva a base 4 em vez de 2.",
      v: { i: () => qual(zeros((x) => Math.log2(x) + log(4, x) - 6, 0.01, 1000)[0], o, 1e-7) },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["64", "12", "81", "4", "16"];
    return {
      d: "dificil",
      e: "Qual é o valor de x que satisfaz a equação log₂(log₃(log₄ x)) = 0?",
      o,
      x: "Resolve-se de fora para dentro. log₂(y) = 0 dá y = 1, então log₃(log₄ x) = 1. log₃(z) = 1 dá z = 3, então log₄ x = 3. Logo x = 4³ = 64. Conferindo: log₄ 64 = 3, log₃ 3 = 1 e log₂ 1 = 0.\n\n12 multiplica 4 por 3 em vez de elevar. 81 é 3⁴, trocando a base com o expoente. 4 é a base do logaritmo mais interno, e não o valor de x. E 16 é 4², que usa log₄ x = 2.",
      v: { i: () => qual(zeros((x) => Math.log2(log(3, log(4, x))), 4.001, 1000)[0], o, 1e-7) },
    };
  })(),
  (() => {
    const o = ["]−3, 2[", "]−2, 1[", "]−4, 3[", "[−3, 2]", "ℝ"];
    return {
      d: "dificil",
      e: "Que números reais satisfazem a inequação |x − 1| + |x + 2| < 5?",
      o,
      x: "A soma |x − 1| + |x + 2| é a soma das distâncias de x aos pontos 1 e −2 da reta. Entre −2 e 1, ela vale sempre 3, a distância entre os pontos, que é menor que 5. Fora desse trecho, cresce 2 unidades para cada unidade que x se afasta: para x > 1, vale 2x + 1, menor que 5 enquanto x < 2; para x < −2, vale −2x − 1, menor que 5 enquanto x > −3. Solução: −3 < x < 2.\n\n]−2, 1[ é só o trecho entre os pontos, onde a soma vale 3. ]−4, 3[ afasta os extremos uma unidade a mais. [−3, 2] inclui os extremos, onde a soma vale exatamente 5. E ℝ supõe que a soma nunca passe de 5.",
      v: { i: () => qualIntervalo((x) => Math.abs(x - 1) + Math.abs(x + 2) < 5, o) },
    };
  })(),
  (() => {
    const o = ["1/2", "2", "−1", "0", "2027"];
    const f = (x) => 1 / (1 - x);
    return {
      d: "dificil",
      e: "Para f(x) = 1/(1 − x), aplica-se f repetidamente a partir de x = 2: f(2), f(f(2)), f(f(f(2))), e assim por diante. Qual é o valor obtido depois de 2027 aplicações?",
      o,
      x: "Calculando: f(2) = 1/(1 − 2) = −1; f(−1) = 1/2; f(1/2) = 1/(1/2) = 2. Depois de três aplicações, volta-se ao 2: os valores se repetem de 3 em 3. Como 2027 = 3 · 675 + 2, o resultado é o mesmo de 2 aplicações: 1/2.\n\n2 corresponderia a um número de aplicações múltiplo de 3. −1 corresponderia a resto 1 na divisão por 3. 0 nem aparece no ciclo. E 2027 confunde o número de aplicações com o valor obtido.",
      v: { i: () => { let x = 2; for (let k = 0; k < 2027; k++) x = f(x); return qual(x, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["3", "2", "1", "0", "4"];
    return {
      d: "dificil",
      e: "Quantas soluções reais tem a equação 2ˣ = x²?",
      o,
      x: "As soluções positivas são x = 2 (4 = 4) e x = 4 (16 = 16). Para x negativo, 2ˣ fica entre 0 e 1 e decresce para 0, enquanto x² cresce a partir de 0: os gráficos se cruzam uma vez, perto de x ≅ −0,77. Para x > 4, 2ˣ cresce mais depressa que x², e não há outro encontro. São 3 soluções.\n\n2 fica só com as soluções inteiras, 2 e 4. 1 enxerga só um dos encontros. 0 supõe que a exponencial nunca alcance a parábola. E 4 supõe um encontro a mais depois de x = 4, que não existe.",
      v: { i: () => qual(zeros((x) => 2 ** x - x * x, -20, 30).length, o) },
    };
  })(),
  (() => {
    const o = ["]1, 3[", "]3, +∞[", "]0, 3[", "]0, 1[ ∪ ]1, 3[", "]1, +∞["];
    return {
      d: "dificil",
      e: "Qual é o conjunto das soluções da inequação logₓ 3 > 1, em que a base do logaritmo é x?",
      o,
      x: "A base precisa ser positiva e diferente de 1. Se 0 < x < 1, logₓ 3 é negativo — base menor que 1 com logaritmando maior que 1 — e não pode passar de 1. Se x > 1, logₓ 3 > 1 = logₓ x equivale a 3 > x, porque o logaritmo de base maior que 1 é crescente. Solução: 1 < x < 3.\n\n]3, +∞[ inverte a desigualdade. ]0, 3[ inclui as bases entre 0 e 1 e a base 1, proibida. ]0, 1[ ∪ ]1, 3[ exclui o 1, mas aceita as bases menores que 1, em que o logaritmo de 3 é negativo. E ]1, +∞[ esquece a desigualdade.",
      v: { i: () => qualIntervalo((x) => x > 0 && x !== 1 && log(x, 3) > 1, o) },
    };
  })(),
  (() => {
    const o = ["8", "4", "16", "2 + √7", "0"];
    return {
      d: "dificil",
      e: "Qual é a soma das soluções reais da equação |x² − 4x| = 3?",
      o,
      x: "Dois casos. x² − 4x = 3: x² − 4x − 3 = 0, de raízes 2 ± √7, com soma 4. x² − 4x = −3: x² − 4x + 3 = 0, de raízes 1 e 3, com soma 4. São quatro soluções reais, e a soma é 4 + 4 = 8.\n\n4 considera só um dos casos. 16 conta cada solução duas vezes. 2 + √7 é só a maior das soluções. E 0 supõe que as soluções sejam simétricas em relação a zero — elas são simétricas em relação a x = 2, o eixo da parábola.",
      v: { i: () => qual(zeros((x) => Math.abs(x * x - 4 * x) - 3, -20, 20).reduce((s, z) => s + z, 0), o, 1e-7) },
    };
  })(),
  (() => {
    const o = ["]2, 3]", "[3, +∞[", "]2, +∞[", "]2, 3[", "[2, 3]"];
    return {
      d: "dificil",
      e: "Qual é o domínio da função f(x) = √(log(x − 2)), sendo o logaritmo tomado na base 1/2?",
      o,
      x: "O logaritmo exige x − 2 > 0, ou x > 2. A raiz exige log(x − 2) ≥ 0 na base 1/2. Como essa base está entre 0 e 1, o logaritmo é não negativo quando o logaritmando está entre 0 e 1: 0 < x − 2 ≤ 1, ou 2 < x ≤ 3. O domínio é ]2, 3].\n\n[3, +∞[ trata a base como se fosse maior que 1, invertendo a conclusão. ]2, +∞[ fica só com a condição do logaritmo. ]2, 3[ exclui x = 3, em que o logaritmo vale 0 e a raiz existe. E [2, 3] inclui x = 2, em que o logaritmando é zero.",
      v: { i: () => qualIntervalo((x) => x > 2 && log(0.5, x - 2) >= 0, o) },
    };
  })(),
  (() => {
    const o = ["−2", "2", "1", "−1", "3"];
    return {
      d: "dificil",
      e: "Sejam f(x) = ax + 3 e g(x) = 2x − 1. Para que valor de a vale f(g(x)) = g(f(x)) para todo x real?",
      o,
      x: "f(g(x)) = a(2x − 1) + 3 = 2ax − a + 3, e g(f(x)) = 2(ax + 3) − 1 = 2ax + 5. Os termos em x já coincidem; basta igualar as constantes: −a + 3 = 5, ou a = −2. Conferindo: com a = −2, as duas composições dão −4x + 5.\n\n2 erra o sinal ao isolar a. 1 e −1 tentam igualar coeficientes que já são iguais, sem olhar as constantes. E 3 copia a constante de f.",
      v: { i: () => { const as = intervalo(-40, 40).map((k) => k / 4).filter((a) => [-1.3, 0.2, 2.9].every((x) => perto(a * (2 * x - 1) + 3, 2 * (a * x + 3) - 1, 1e-12))); if (as.length !== 1) throw new Error("a"); return qual(as[0], o); } },
    };
  })(),
  (() => {
    const o = ["(2 + b)/(1 + b)", "3", "(1 + b)/(2 + b)", "2 + b", "2b/(1 + b)"];
    const b = Math.log(5) / Math.log(3);
    return {
      d: "dificil",
      e: "Sabendo que log₃ 5 = b, qual é o valor de log₁₅ 45 em função de b?",
      o,
      x: "Mudando para a base 3: log₁₅ 45 = log₃ 45/log₃ 15. Como 45 = 3² · 5, log₃ 45 = 2 + log₃ 5 = 2 + b; como 15 = 3 · 5, log₃ 15 = 1 + b. Então log₁₅ 45 = (2 + b)/(1 + b).\n\n3 divide 45 por 15, confundindo o logaritmo com o quociente dos números. (1 + b)/(2 + b) inverte a fração. 2 + b esquece de dividir por log₃ 15. E 2b/(1 + b) multiplica 2 por b em vez de somar.",
      v: { i: () => unicoV(o.map((t) => perto(lerFuncao(t.replace(/b/g, "x"))(b), log(15, 45), 1e-9))) },
    };
  })(),
  (() => {
    const o = ["10", "100", "1/10", "1.000", "2"];
    return {
      d: "dificil",
      e: "Qual é o produto das soluções reais positivas da equação x^(log x) = 100x, em que log é o logaritmo na base 10?",
      o,
      x: "Aplicando log aos dois membros: log x · log x = log 100 + log x, ou (log x)² − log x − 2 = 0. Com t = log x: t² − t − 2 = 0, de raízes t = 2 e t = −1. Então x = 10² = 100 ou x = 10⁻¹ = 1/10, e o produto é 100 · 1/10 = 10. Pela relação de Girard, a soma dos valores de t é 1, e o produto dos x é 10¹ = 10.\n\n100 e 1/10 são as soluções isoladas. 1.000 multiplica 100 por 10, usando x = 10 no lugar de 1/10. E 2 é o produto dos valores de log x, em módulo, e não o produto das soluções.",
      v: { i: () => qual(zeros((x) => x ** Math.log10(x) - 100 * x, 0.01, 1000).reduce((p, z) => p * z, 1), o, 1e-6) },
    };
  })(),
];
