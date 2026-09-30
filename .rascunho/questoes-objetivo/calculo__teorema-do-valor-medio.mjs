/* Rascunho — Cálculo I / Teorema do valor médio.

   A explicação resolve f'(ξ) = inclinação da secante pela fórmula da
   derivada; a conferência acha ξ como zero de f' numérica menos a
   inclinação, por varredura e bisseção. Hipóteses (continuidade,
   derivabilidade) são testadas numa malha: saltos de valor e quocientes
   laterais que discordam. Cotas saem do supremo numérico de |f'| e são
   confrontadas com baterias de funções que respeitam a hipótese; os
   corolários (derivada nula, mesma derivada, derivada positiva) também
   são testados em baterias. */

import { unicoV, lerF, derivada, derivada2, zeros, bissecao, integra, maximo, minimo, mesmaFuncao } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Teorema do valor médio";
export const arquivo = "calculo__teorema-do-valor-medio";

const num = (t) => { const s = String(t).trim().replace(/^[a-zA-Z]\s*=\s*/, ""); if (/x/.test(s)) throw new Error("não é número"); return lerF(s)(0); };
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = num(t); } catch { return false; } return Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); }));
const d = (f) => (x) => derivada(f, x);
/* pontos de (a, b) em que f' iguala a inclinação da secante (ou m) */
const pontosTVM = (f, a, b, m = (f(b) - f(a)) / (b - a)) => zeros((x) => derivada(f, x) - m, a + 1e-6, b - 1e-6);
/* alternativas com ξ: "ξ = 2", "Só ξ = 1", "ξ = −1/√3 e ξ = 1/√3", "ξ = 1/√3, apenas", "Nenhum" */
const listaXi = (t) => { if (/^Nenhum/.test(t)) return []; try { return t.replace(/^Só\s+/, "").replace(/,?\s*apenas$/, "").split(/\s+e\s+(?=ξ)/).map((s) => num(s.replace(/^ξ\s*=\s*/, ""))); } catch { return null; } };
const mesmaLista = (a, b, tol = 1e-6) => { if (!a || a.length !== b.length) return false; const p = [...a].sort((u, v) => u - v), q = [...b].sort((u, v) => u - v); return p.every((v, k) => Math.abs(v - q[k]) < tol); };
const qualXi = (r, alt) => unicoV(alt.map((t) => mesmaLista(listaXi(t), r)));
const semUnidade = (t) => t.replace(/\s+(km|m)\S*$/, "");
/* abscissas em que g troca de sinal numa malha, refinadas por bisseção */
const trocas = (g, a, b, n = 20000) => { const r = []; let x0 = a, s0 = Math.sign(g(a)); for (let k = 1; k <= n; k++) { const x = a + ((b - a) * k) / n, v = g(x); if (!Number.isFinite(v)) { s0 = 0; continue; } const s = Math.sign(v); if (s !== 0 && s0 !== 0 && s !== s0) r.push(bissecao(g, x0, x)); if (s !== 0) { s0 = s; x0 = x; } } return r; };
/* hipóteses numa malha: sem saltos de valor (contínua) e com quocientes laterais concordantes no interior (derivável) */
const malhaDe = (a, b, n = 2000) => Array.from({ length: n + 1 }, (_, k) => a + ((b - a) * k) / n);
const continua = (f, a, b) => { const xs = malhaDe(a, b); return xs.every((x) => Number.isFinite(f(x))) && xs.slice(1).every((x, k) => Math.abs(f(x) - f(xs[k])) < 0.05); };
const derivavel = (f, a, b) => malhaDe(a, b).slice(1, -1).every((x) => { const h = 1e-6, p = (f(x + h) - f(x)) / h, q = (f(x) - f(x - h)) / h; return Number.isFinite(p) && Number.isFinite(q) && Math.abs(p) < 1e3 && Math.abs(p - q) < 1e-3 * Math.max(1, Math.abs(p)); });
const crescente = (f, a, b) => { let y = f(a); for (let k = 1; k <= 200; k++) { const v = f(a + ((b - a) * k) / 200); if (!(v > y)) return false; y = v; } return true; };
const decrescente = (f, a, b) => crescente((x) => -f(x), a, b);
const convexa = (f, a, b) => { for (let i = 1; i < 20; i++) for (let j = i + 1; j < 20; j++) { const p = a + ((b - a) * i) / 20, q = a + ((b - a) * j) / 20; if (!(f((p + q) / 2) < (f(p) + f(q)) / 2)) return false; } return true; };
const existe = (g, a, b) => zeros(g, a + 1e-6, b - 1e-6, 20000).length > 0;

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["f'(ξ) = (f(b) − f(a))/(b − a)", "f'(ξ) = (f(a) + f(b))/2", "f'(ξ) = 0", "f'(ξ) = f(b) − f(a)", "f(ξ) = 0"];
    return {
      d: "facil",
      e: "Se f é contínua em [a, b] e derivável em (a, b), o que o teorema do valor médio garante sobre algum ponto ξ de (a, b)?",
      o,
      x: "O teorema garante um ponto ξ entre a e b em que a inclinação da tangente é igual à inclinação da secante que liga (a, f(a)) a (b, f(b)): f'(ξ) = (f(b) − f(a))/(b − a). Em termos de movimento, em algum instante a velocidade instantânea iguala a velocidade média.\n\nf'(ξ) = (f(a) + f(b))/2 troca a inclinação média por uma média de valores. f'(ξ) = 0 é o caso particular de Rolle, que exige f(a) = f(b). f'(ξ) = f(b) − f(a) esquece de dividir pelo comprimento b − a do intervalo. E f(ξ) = 0 fala de uma raiz, assunto de outro teorema, o do valor intermediário, e só quando f muda de sinal.",
      /* cada conclusão é testada numa bateria de funções e intervalos: existe ξ em (a, b)? */
      v: {
        i: () => {
          const casos = [[(x) => x * x, 0, 1], [(x) => x, 1, 3], [(x) => x + 5, 0, 1], [Math.sin, 0, 2], [Math.exp, 0, 1], [(x) => x ** 3, -1, 2]];
          const afirma = {
            "f'(ξ) = (f(b) − f(a))/(b − a)": casos.every(([f, a, b]) => existe((x) => derivada(f, x) - (f(b) - f(a)) / (b - a), a, b)),
            "f'(ξ) = (f(a) + f(b))/2": casos.every(([f, a, b]) => existe((x) => derivada(f, x) - (f(a) + f(b)) / 2, a, b)),
            "f'(ξ) = 0": casos.every(([f, a, b]) => existe((x) => derivada(f, x), a, b)),
            "f'(ξ) = f(b) − f(a)": casos.every(([f, a, b]) => existe((x) => derivada(f, x) - (f(b) - f(a)), a, b)),
            "f(ξ) = 0": casos.every(([f, a, b]) => existe(f, a, b)),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["ξ = 2", "ξ = 4", "ξ = 1", "ξ = 3", "ξ = √5"];
    return {
      d: "facil",
      e: "Para f(x) = x² no intervalo [1, 3], qual ponto ξ satisfaz a conclusão do teorema do valor médio?",
      o,
      x: "A inclinação da secante é (f(3) − f(1))/(3 − 1) = (9 − 1)/2 = 4. O teorema pede f'(ξ) = 4, e como f'(x) = 2x, vem 2ξ = 4, ou ξ = 2. Para parábolas, o ponto do teorema é sempre o ponto médio do intervalo.\n\n4 é a própria inclinação da secante, e não o ponto. 1 e 3 são as extremidades, que o teorema exclui: ξ fica no interior. E √5 é o ponto em que f vale a média dos valores extremos, (1 + 9)/2 = 5, o que não tem relação com a inclinação.",
      v: { i: () => qualXi(pontosTVM((x) => x * x, 1, 3), o) },
    };
  })(),
  (() => {
    const o = ["f(x) = x² − 4x em [0, 4]", "f(x) = x² − 4x em [0, 3]", "f(x) = |x| em [−1, 1]", "f(x) = tg x em [0, π]", "f(x) = x em [0, 2]"];
    return {
      d: "facil",
      e: "Em qual dos casos o teorema de Rolle se aplica, garantindo um ponto de tangente horizontal no interior do intervalo?",
      o,
      x: "Rolle exige três coisas: continuidade em [a, b], derivabilidade em (a, b) e valores iguais nas extremidades. Para x² − 4x em [0, 4], as duas primeiras valem porque é um polinômio, e f(0) = 0 = f(4). O teorema garante ξ com f'(ξ) = 0: é ξ = 2, o vértice.\n\nEm [0, 3], f(0) = 0 e f(3) = −3 são diferentes, e o teorema não se aplica, embora por acaso f'(2) = 0. |x| não é derivável em x = 0, e de fato a derivada nunca se anula. tg x vale 0 em 0 e em π, mas é descontínua em π/2. E x em [0, 2] tem valores diferentes nas extremidades.",
      v: { i: () => unicoV(o.map((t) => { const m = t.match(/^f\(x\) = (.+) em \[(.+), (.+)\]$/), f = lerF(m[1]), a = num(m[2]), b = num(m[3]); return continua(f, a, b) && derivavel(f, a, b) && Math.abs(f(a) - f(b)) < 1e-9; })) },
    };
  })(),
  (() => {
    const o = ["f é constante", "f é nula", "f é linear, mas não constante", "f é crescente", "f é periódica, mas não constante"];
    return {
      d: "facil",
      e: "Se f'(x) = 0 para todo x de um intervalo, o que o teorema do valor médio permite concluir sobre f nesse intervalo?",
      o,
      x: "Tome dois pontos quaisquer x₁ < x₂ do intervalo. Pelo teorema, f(x₂) − f(x₁) = f'(ξ)(x₂ − x₁) para algum ξ entre eles, e como f'(ξ) = 0, f(x₂) = f(x₁). Todos os valores são iguais: f é constante. É esse corolário que justifica a constante arbitrária das primitivas.\n\nf nula é um caso particular: f(x) = 5 também tem derivada zero. Linear não constante teria derivada igual à inclinação, diferente de zero. Crescente exigiria f' > 0 em algum trecho. E periódica não constante teria derivada não nula em algum ponto.",
      /* das funções da bateria, ficam as de derivada numérica nula; cada afirmação é testada nelas */
      v: {
        i: () => {
          const fs = [() => 3, () => -2, () => 0, (x) => x, (x) => x * x, Math.sin, Math.exp], xs = malhaDe(-5, 5, 40);
          const nula = fs.filter((f) => xs.every((x) => Math.abs(derivada(f, x)) < 1e-9));
          if (nula.length !== 3) throw new Error("bateria mal separada");
          const afirma = {
            "f é constante": nula.every((f) => xs.every((x) => f(x) === f(0))),
            "f é nula": nula.every((f) => xs.every((x) => f(x) === 0)),
            "f é linear, mas não constante": nula.every((f) => f(1) !== f(0)),
            "f é crescente": nula.every((f) => crescente(f, -5, 5)),
            "f é periódica, mas não constante": nula.every((f) => f(1) !== f(0)),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["ξ = 2/√3", "ξ = 1", "ξ = √(5/3)", "ξ = 5", "ξ = 4/3"];
    return {
      d: "facil",
      e: "Para f(x) = x³ + x no intervalo [0, 2], em que ponto ξ a tangente é paralela à secante que liga as extremidades do gráfico?",
      o,
      x: "A secante tem inclinação (f(2) − f(0))/(2 − 0) = (10 − 0)/2 = 5. Com f'(x) = 3x² + 1, a condição f'(ξ) = 5 dá 3ξ² = 4, ξ² = 4/3 e ξ = 2/√3 ≈ 1,15, dentro de (0, 2). A raiz negativa fica fora do intervalo.\n\n1 é o ponto médio, que só funciona para parábolas. √(5/3) esquece a parcela +1 da derivada e resolve 3ξ² = 5. 5 é a inclinação da secante, e não o ponto. E 4/3 é ξ², sem extrair a raiz.",
      v: { i: () => qualXi(pontosTVM((x) => x ** 3 + x, 0, 2), o) },
    };
  })(),
  (() => {
    const o = ["Em algum instante, a velocidade foi exatamente 75 km/h", "A velocidade foi 75 km/h o tempo todo", "Em algum instante, a velocidade passou de 75 km/h", "A velocidade nunca passou de 75 km/h", "Em algum instante, a velocidade foi 150 km/h"];
    return {
      d: "facil",
      e: "Um carro percorre 150 km em 2 horas, com posição variando de forma derivável. O que o teorema do valor médio garante?",
      o,
      x: "A velocidade média é 150/2 = 75 km/h, a inclinação da secante do gráfico posição × tempo. O teorema garante um instante em que a velocidade instantânea, a derivada da posição, é exatamente igual à média: 75 km/h. É o argumento por trás das multas por velocidade média em trechos monitorados.\n\nVelocidade constante é só um caso possível. Passar de 75 km/h não é garantido: o carro pode ter andado a 75 km/h o tempo todo. Nunca passar de 75 km/h também não: ele pode ter acelerado e freado. E 150 km/h é a distância total dividida por 1 hora, e não por 2.",
      /* quatro movimentos com 150 km em 2 h; velocidades pela derivada numérica */
      v: {
        i: () => {
          const casos = [(t) => 75 * t, (t) => 37.5 * t * t, (t) => 75 * t + 10 * Math.sin(Math.PI * t), (t) => 150 * (t / 2) ** 3], ts = malhaDe(0.01, 1.99, 100);
          if (casos.some((s) => Math.abs(s(2) - s(0) - 150) > 1e-9)) throw new Error("movimento fora do enunciado");
          const afirma = {
            "Em algum instante, a velocidade foi exatamente 75 km/h": casos.every((s) => existe((t) => derivada(s, t) - 75, 0, 2)),
            "A velocidade foi 75 km/h o tempo todo": casos.every((s) => ts.every((t) => Math.abs(derivada(s, t) - 75) < 1e-6)),
            "Em algum instante, a velocidade passou de 75 km/h": casos.every((s) => ts.some((t) => derivada(s, t) > 75 + 1e-6)),
            "A velocidade nunca passou de 75 km/h": casos.every((s) => ts.every((t) => derivada(s, t) <= 75 + 1e-6)),
            "Em algum instante, a velocidade foi 150 km/h": casos.every((s) => existe((t) => derivada(s, t) - 150, 0, 2)),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["ξ = √2", "ξ = 3/2", "ξ = 2", "ξ = 1/√2", "ξ = 4/3"];
    return {
      d: "facil",
      e: "Em que ponto de (1, 2) a tangente ao gráfico de f(x) = 1/x tem a mesma inclinação que a secante entre x = 1 e x = 2?",
      o,
      x: "A secante tem inclinação (1/2 − 1)/(2 − 1) = −1/2. Com f'(x) = −1/x², a condição −1/ξ² = −1/2 dá ξ² = 2 e ξ = √2 ≈ 1,41, que está em (1, 2). Para 1/x, o ponto do teorema é sempre a média geométrica das extremidades, √(ab).\n\n3/2 é o ponto médio, que só funciona para parábolas. 2 é ξ², sem extrair a raiz, e ainda é uma extremidade. 1/√2 inverte o resultado e cai fora do intervalo. E 4/3 é a média harmônica de 1 e 2, que não tem relação com a derivada de 1/x.",
      v: { i: () => qualXi(pontosTVM((x) => 1 / x, 1, 2), o) },
    };
  })(),
  (() => {
    const o = ["ξ = 3", "ξ = 1", "ξ = 5", "ξ = 6", "ξ = −4"];
    return {
      d: "facil",
      e: "A função f(x) = x² − 6x + 5 se anula em x = 1 e em x = 5. Pelo teorema de Rolle, qual ponto de (1, 5) tem tangente horizontal?",
      o,
      x: "Como f é um polinômio e f(1) = f(5) = 0, o teorema de Rolle garante ξ em (1, 5) com f'(ξ) = 0. Com f'(x) = 2x − 6, vem ξ = 3, o vértice da parábola, a meio caminho entre as raízes. Em geral, entre duas raízes de uma função derivável sempre há uma raiz da derivada.\n\n1 e 5 são as raízes, extremidades do intervalo, e não o ponto interior. 6 resolve x − 6 = 0, esquecendo o fator 2 de 2x. E −4 é o valor mínimo de f, f(3) = 9 − 18 + 5, e não um ponto do intervalo.",
      v: { i: () => qualXi(pontosTVM(lerF("x² − 6x + 5"), 1, 5), o) },
    };
  })(),
  (() => {
    const o = ["f é crescente em I", "f é positiva em I", "f tem concavidade para cima em I", "f é constante em I", "f atinge um máximo no interior de I"];
    return {
      d: "facil",
      e: "Se f'(x) > 0 para todo x de um intervalo aberto I, o que o teorema do valor médio permite concluir sobre f em I?",
      o,
      x: "Para x₁ < x₂ em I, o teorema dá f(x₂) − f(x₁) = f'(ξ)(x₂ − x₁), com ξ entre eles. Os dois fatores são positivos, então f(x₂) > f(x₁): a função é crescente. É assim que se justifica o uso do sinal da derivada no estudo do crescimento.\n\nPositiva confunde o sinal de f com o de f': x − 5 tem derivada 1 e é negativa em (0, 1). Concavidade depende de f'', e ln x cresce com concavidade para baixo. Constante exigiria f' = 0. E uma função crescente num intervalo aberto não atinge máximo no interior: sempre há um valor maior à direita.",
      v: {
        i: () => {
          const casos = [[(x) => x - 5, 0, 1], [(x) => x ** 3, 0.5, 2], [(x) => -1 / x, 1, 3], [Math.log, 0.5, 2]];
          const dentro = (a, b) => Array.from({ length: 49 }, (_, k) => a + ((b - a) * (k + 1)) / 50);
          if (casos.some(([f, a, b]) => dentro(a, b).some((x) => derivada(f, x) <= 0))) throw new Error("caso fora da hipótese");
          const afirma = {
            "f é crescente em I": casos.every(([f, a, b]) => crescente(f, a + 1e-3, b - 1e-3)),
            "f é positiva em I": casos.every(([f, a, b]) => dentro(a, b).every((x) => f(x) > 0)),
            "f tem concavidade para cima em I": casos.every(([f, a, b]) => convexa(f, a + 1e-3, b - 1e-3)),
            "f é constante em I": casos.every(([f, a, b]) => dentro(a, b).every((x) => f(x) === f(a + (b - a) / 50))),
            "f atinge um máximo no interior de I": casos.every(([f, a, b]) => { const ys = dentro(a, b).map(f), k = ys.indexOf(Math.max(...ys)); return k > 0 && k < ys.length - 1; }),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["0,1", "0,01", "1", "0,05", "2"];
    return {
      d: "facil",
      e: "Pelo teorema do valor médio aplicado a sen x, qual é a melhor cota para |sen a − sen b| que se obtém quando |a − b| = 0,1?",
      o,
      x: "O teorema dá sen a − sen b = cos ξ · (a − b), para algum ξ entre a e b. Como |cos ξ| ≤ 1, vem |sen a − sen b| ≤ |a − b| = 0,1. A cota não pode ser melhorada em geral: perto de a = 0, onde cos ξ ≈ 1, a diferença chega muito perto de 0,1.\n\n0,01 eleva a diferença ao quadrado, sem motivo. 1 é a cota de |sen x| sozinho, que não usa a proximidade de a e b. 0,05 divide por 2 sem motivo. E 2 é a maior diferença possível entre dois senos quaisquer, sem restrição sobre a e b.",
      /* supremo numérico de |sen'| vezes 0,1; e a maior diferença real, que fica logo abaixo */
      v: { i: () => { const cota = maximo((x) => Math.abs(derivada(Math.sin, x)), -10, 10).y * 0.1, real = maximo((a) => Math.abs(Math.sin(a + 0.1) - Math.sin(a)), -10, 10).y; if (!(real <= cota && real > 0.0999)) throw new Error("cota incoerente"); return qual(cota, o, 1e-8); } },
    };
  })(),
  (() => {
    const o = ["Diferem por uma constante", "São iguais", "Uma é o dobro da outra", "Têm o mesmo valor em x = 0", "Nada se pode concluir"];
    return {
      d: "facil",
      e: "Duas funções deriváveis têm a mesma derivada em todos os pontos de um intervalo. O que se pode concluir sobre elas?",
      o,
      x: "Se f' = g' no intervalo, a diferença h = f − g tem derivada h' = 0 em todos os pontos. Pelo teorema do valor médio, h é constante: f(x) = g(x) + C. Por exemplo, x² e x² + 3 têm a mesma derivada, 2x.\n\nSão iguais só quando a constante é zero, o que exige um valor em comum. Uma ser o dobro da outra daria derivadas também na razão 2. O mesmo valor em x = 0 é um caso particular, e não uma consequência. E dá para concluir, sim: a diferença é constante.",
      v: {
        i: () => {
          const pares = [[(x) => x * x, (x) => x * x + 3], [Math.sin, (x) => Math.sin(x) - 2], [Math.exp, (x) => Math.exp(x) + 1], [(x) => x ** 3, (x) => x ** 3 - 0.5]], xs = malhaDe(-3, 3, 30);
          if (pares.some(([f, g]) => xs.some((x) => Math.abs(derivada(f, x) - derivada(g, x)) > 1e-8))) throw new Error("par fora da hipótese");
          const constante = pares.every(([f, g]) => xs.every((x) => Math.abs(f(x) - g(x) - (f(0) - g(0))) < 1e-12));
          const afirma = {
            "Diferem por uma constante": constante,
            "São iguais": pares.every(([f, g]) => xs.every((x) => f(x) === g(x))),
            "Uma é o dobro da outra": pares.every(([f, g]) => xs.every((x) => Math.abs(f(x) - 2 * g(x)) < 1e-9 || Math.abs(g(x) - 2 * f(x)) < 1e-9)),
            "Têm o mesmo valor em x = 0": pares.every(([f, g]) => f(0) === g(0)),
            "Nada se pode concluir": !constante,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["9", "27", "3", "27/2", "√3"];
    return {
      d: "facil",
      e: "Para f(x) = x³ no intervalo [0, 3], qual é a inclinação da secante que o teorema do valor médio iguala a f'(ξ)?",
      o,
      x: "A inclinação da secante é (f(3) − f(0))/(3 − 0) = (27 − 0)/3 = 9. O teorema garante ξ em (0, 3) com f'(ξ) = 3ξ² = 9, isto é, ξ = √3 ≈ 1,73. A inclinação 9 é a taxa média de variação de f no intervalo.\n\n27 é a variação f(3) − f(0), sem dividir pelo comprimento do intervalo. 3 é o próprio comprimento. 27/2 é a média dos valores extremos, e não uma inclinação. E √3 é o ponto ξ, e não a inclinação.",
      /* a inclinação é o valor de f' no ponto achado numericamente */
      v: { i: () => { const r = pontosTVM((x) => x ** 3, 0, 3); if (r.length !== 1) throw new Error(`ξ: ${r}`); return qual(derivada((x) => x ** 3, r[0]), o); } },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["ξ = 4", "ξ = 5", "ξ = 2", "ξ = 16", "ξ = 3"];
    return {
      d: "media",
      e: "O teorema do valor médio, aplicado a f(x) = √x entre x = 1 e x = 9, garante um ponto ξ. Qual é ele?",
      o,
      x: "A secante tem inclinação (√9 − √1)/(9 − 1) = 2/8 = 1/4. Com f'(x) = 1/(2√x), a condição 1/(2√ξ) = 1/4 dá √ξ = 2 e ξ = 4, dentro de (1, 9).\n\n5 é o ponto médio, que só funciona para parábolas. 2 é √ξ, e não ξ. 16 esquece o fator 1/2 da derivada, resolvendo 1/√ξ = 1/4, e cai fora do intervalo. E 3 é a média geométrica √(1 · 9), que é o ponto do teorema para 1/x, e não para √x.",
      v: { i: () => qualXi(pontosTVM(Math.sqrt, 1, 9), o) },
    };
  })(),
  (() => {
    const o = ["ξ = ln(e − 1)", "ξ = 1/2", "ξ = e − 1", "ξ = ln((1 + e)/2)", "Não existe tal ponto"];
    return {
      d: "media",
      e: "Para a exponencial f(x) = eˣ em [0, 1], em que ponto a derivada iguala a taxa média de variação?",
      o,
      x: "A secante tem inclinação (e¹ − e⁰)/(1 − 0) = e − 1 ≈ 1,72. Como a derivada de eˣ é eˣ, a condição é e^ξ = e − 1, e ξ = ln(e − 1) ≈ 0,54, dentro de (0, 1). Fica um pouco à direita do meio, porque a exponencial cresce cada vez mais depressa.\n\n1/2 é o ponto médio, que só funciona para parábolas. e − 1 é a inclinação, e não o ponto, e cai fora do intervalo. ln((1 + e)/2) iguala e^ξ à média dos valores extremos, e não à inclinação da secante. E o ponto existe: eˣ é contínua e derivável, e o teorema se aplica.",
      v: { i: () => qualXi(pontosTVM(Math.exp, 0, 1), o) },
    };
  })(),
  (() => {
    const o = ["2", "1", "0", "3", "Infinitos"];
    return {
      d: "media",
      e: "Em quantos pontos de (0, 2π) a tangente ao gráfico de f(x) = sen x é paralela à secante que liga as extremidades de [0, 2π]?",
      o,
      x: "A secante liga (0, 0) a (2π, 0) e é horizontal: inclinação 0. A condição é f'(ξ) = cos ξ = 0, satisfeita em ξ = π/2 e ξ = 3π/2, dois pontos de (0, 2π). O teorema garante pelo menos um; aqui há dois, o máximo e o mínimo do seno.\n\n1 supõe que o ponto do teorema é único, o que ele não afirma. 0 contradiz o próprio teorema, que se aplica ao seno. 3 inclui π, onde o seno se anula, mas a derivada vale −1. E infinitos só aconteceria se o cosseno fosse nulo num intervalo inteiro.",
      v: { i: () => qual(pontosTVM(Math.sin, 0, 2 * Math.PI, 0).length, o) },
    };
  })(),
  (() => {
    const o = ["ξ = e − 1", "ξ = (1 + e)/2", "ξ = 1/(e − 1)", "ξ = √e", "ξ = ln(e − 1)"];
    return {
      d: "media",
      e: "Aplicando o teorema do valor médio a f(x) = ln x no intervalo [1, e], qual é o ponto ξ?",
      o,
      x: "A secante tem inclinação (ln e − ln 1)/(e − 1) = 1/(e − 1). Com f'(x) = 1/x, a condição 1/ξ = 1/(e − 1) dá ξ = e − 1 ≈ 1,72, dentro de (1, e ≈ 2,72).\n\n(1 + e)/2 é o ponto médio, que só funciona para parábolas. 1/(e − 1) é a inclinação da secante, e não o ponto, e fica fora do intervalo. √e é a média geométrica, o ponto do teorema para 1/x. E ln(e − 1) é o ponto do teorema para eˣ em [0, 1], outra função em outro intervalo.",
      v: { i: () => qualXi(pontosTVM(Math.log, 1, Math.E), o) },
    };
  })(),
  (() => {
    const o = ["Porque f não é derivável em x = 1", "Porque f não é contínua em [0, 2]", "Porque f(0) ≠ f(2)", "Porque f é decrescente em todo o intervalo", "Há, sim, um ponto: f'(1) = 0"];
    return {
      d: "media",
      e: "A função f(x) = |x − 1| tem f(0) = f(2) = 1, mas não há ponto de (0, 2) com f'(ξ) = 0. Por que isso não contradiz o teorema de Rolle?",
      o,
      x: "O gráfico de |x − 1| é um V com vértice em (1, 0). A derivada vale −1 à esquerda de 1 e +1 à direita, e em x = 1 os quocientes laterais discordam: f não é derivável ali. Falta uma hipótese de Rolle, a derivabilidade em todo o intervalo aberto, e o teorema não se aplica.\n\nf é contínua em [0, 2]: o V não tem saltos. f(0) = f(2) = 1, como o enunciado diz. A função decresce até 1 e cresce depois, e não em todo o intervalo. E f'(1) não é zero: simplesmente não existe, porque há um bico.",
      v: {
        i: () => {
          const f = (x) => Math.abs(x - 1), q = (h) => (f(1 + h) - f(1)) / h, derivavelEm1 = Math.abs(q(1e-6) - q(-1e-6)) < 1e-3;
          if (existe((x) => derivada(f, x), 0, 0.99) || existe((x) => derivada(f, x), 1.01, 2)) throw new Error("f' se anula?");
          const afirma = {
            "Porque f não é derivável em x = 1": !derivavelEm1,
            "Porque f não é contínua em [0, 2]": !continua(f, 0, 2),
            "Porque f(0) ≠ f(2)": Math.abs(f(0) - f(2)) > 1e-12,
            "Porque f é decrescente em todo o intervalo": decrescente(f, 0, 2),
            "Há, sim, um ponto: f'(1) = 0": derivavelEm1 && Math.abs(q(1e-6)) < 1e-6,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["14", "12", "15", "5", "17"];
    return {
      d: "media",
      e: "Uma função derivável satisfaz f(1) = 2 e f'(x) ≤ 3 para todo x. Qual é o maior valor possível de f(5)?",
      o,
      x: "Pelo teorema, f(5) − f(1) = f'(ξ) · (5 − 1) para algum ξ em (1, 5). Como f'(ξ) ≤ 3, vem f(5) − 2 ≤ 12, e f(5) ≤ 14. O valor 14 é atingido pela reta f(x) = 3x − 1, que tem derivada 3 em todo ponto: a cota é a melhor possível.\n\n12 é só o acréscimo máximo, sem somar f(1) = 2. 15 multiplica 3 por 5, a abscissa final, em vez da distância 4. 5 soma 2 + 3, esquecendo a distância. E 17 soma 2 + 3 · 5, usando 5 no lugar de 5 − 1.",
      /* f(5) = 2 + ∫ f' de 1 a 5 para várias derivadas ≤ 3; a derivada constante 3 dá o maior valor */
      v: {
        i: () => {
          const valor = (g) => 2 + integra(g, 1, 5, 400), topo = valor(() => 3);
          if ([(t) => 3 - (t - 1) ** 2, (t) => 3 * Math.cos(t), (t) => 3 - Math.exp(-t), () => -1].map(valor).some((v) => v > topo + 1e-9)) throw new Error("bateria passou da cota");
          return qual(topo, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["0,05", "0,5", "0,005", "1/(2√101)", "0,1"];
    return {
      d: "media",
      e: "Aplicando o teorema do valor médio a f(x) = √x em [100, 101] e usando ξ > 100, qual cota superior se obtém para √101 − 10?",
      o,
      x: "O teorema dá √101 − √100 = f'(ξ) · 1 = 1/(2√ξ), com 100 < ξ < 101. Como ξ > 100, √ξ > 10 e 1/(2√ξ) < 1/20 = 0,05. Então √101 − 10 < 0,05, ou √101 < 10,05. O valor real é 10,0499, bem perto da cota.\n\n0,5 esquece a raiz no denominador e usa 1/2. 0,005 erra a casa decimal. 1/(2√101) é a cota inferior, que sai de ξ < 101. E 0,1 esquece o fator 2 de 2√ξ.",
      v: { i: () => { const cota = maximo((x) => derivada(Math.sqrt, x), 100, 101).y; if (!(Math.sqrt(101) - 10 < cota)) throw new Error("cota falhou"); return qual(cota, o); } },
    };
  })(),
  (() => {
    const o = ["1", "3", "2", "0", "Infinitas"];
    return {
      d: "media",
      e: "Pelo teorema de Rolle, quantas raízes reais, no máximo, a equação x³ + 3x + 1 = 0 pode ter?",
      o,
      x: "Se houvesse duas raízes r₁ < r₂, a função f(x) = x³ + 3x + 1 valeria zero nas duas, e Rolle daria ξ entre elas com f'(ξ) = 0. Mas f'(x) = 3x² + 3 ≥ 3 > 0: a derivada nunca se anula. Logo há no máximo uma raiz, e, como o grau é ímpar, há exatamente uma, perto de x ≈ −0,32.\n\n3 é o grau, o máximo para polinômios em geral, e não para este. 2 também exigiria um zero de f' entre as raízes. 0 esquece que polinômios de grau ímpar sempre cruzam o eixo. E infinitas é impossível para um polinômio não nulo.",
      v: { i: () => qual(zeros(lerF("x³ + 3x + 1"), -10, 10).length, o) },
    };
  })(),
  (() => {
    const o = ["2", "3", "1", "0", "5"];
    return {
      d: "media",
      e: "Uma função derivável se anula em x = 0, x = 2 e x = 5. Quantos zeros, no mínimo, a derivada tem em (0, 5)?",
      o,
      x: "Rolle aplicado a [0, 2] dá um zero de f' entre 0 e 2, e aplicado a [2, 5] dá outro, entre 2 e 5. São pelo menos dois, em intervalos disjuntos. A cúbica f(x) = x(x − 2)(x − 5) mostra que dois é possível: sua derivada é um polinômio de grau 2, com exatamente dois zeros.\n\n3 conta um zero de f' para cada zero de f, mas três zeros de f formam só dois intervalos. 1 aplica Rolle uma vez só. 0 contradiz o teorema. E 5 é a última raiz, e não uma contagem.",
      /* bateria de funções com esses três zeros; conta os zeros de f' em (0, 5) e fica com o menor */
      v: {
        i: () => {
          const fs = [(x) => x * (x - 2) * (x - 5), (x) => x * (x - 2) * (x - 5) * (1 + x * x), (x) => x * (x - 2) * (x - 5) * Math.exp(x), (x) => Math.sin((Math.PI * x) / 2) * (x - 5)];
          if (fs.some((f) => [0, 2, 5].some((z) => Math.abs(f(z)) > 1e-12))) throw new Error("zeros fora do enunciado");
          return qual(Math.min(...fs.map((f) => zeros(d(f), 1e-6, 5 - 1e-6, 50000).length)), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["A continuidade em x = 0", "A igualdade f(−1) = f(1)", "Nenhuma: o teorema falhou", "A derivabilidade nas extremidades", "A positividade de f"];
    return {
      d: "media",
      e: "A função f(x) = 1/x² tem f(−1) = f(1) = 1, mas a sua derivada nunca se anula. Qual hipótese de Rolle falha em [−1, 1]?",
      o,
      x: "A função não está definida em x = 0 e vai a +∞ perto dele: não é contínua em [−1, 1]. Sem continuidade no intervalo fechado, o teorema de Rolle não se aplica, e não há contradição com o fato de f'(x) = −2/x³ nunca se anular.\n\nA igualdade f(−1) = f(1) = 1 vale. O teorema não falhou: uma das suas hipóteses é que falhou. A derivabilidade não é exigida nas extremidades, só no interior. E a positividade de f não faz parte das hipóteses de Rolle.",
      v: {
        i: () => {
          const f = (x) => 1 / (x * x);
          const afirma = {
            "A continuidade em x = 0": !Number.isFinite(f(0)),
            "A igualdade f(−1) = f(1)": Math.abs(f(-1) - f(1)) > 1e-12,
            "Nenhuma: o teorema falhou": continua(f, -1, 1) && Math.abs(f(-1) - f(1)) < 1e-12,
            "A derivabilidade nas extremidades": !Number.isFinite(derivada(f, 1)) || !Number.isFinite(derivada(f, -1)),
            "A positividade de f": [-1, -0.5, 0.5, 1].some((x) => f(x) <= 0),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["x/(1 + x) < ln(1 + x) < x", "ln(1 + x) > x", "ln(1 + x) < x/(1 + x)", "ln(1 + x) = x", "x < ln(1 + x) < 2x"];
    return {
      d: "media",
      e: "Para x > 0, o teorema do valor médio aplicado a ln t no intervalo [1, 1 + x] leva a qual desigualdade?",
      o,
      x: "O teorema dá ln(1 + x) − ln 1 = (1/ξ) · x, com 1 < ξ < 1 + x. Como 1/(1 + x) < 1/ξ < 1, multiplicando por x > 0: x/(1 + x) < ln(1 + x) < x. Por exemplo, com x = 1: 0,5 < ln 2 ≈ 0,69 < 1.\n\nln(1 + x) > x inverte a cota superior. ln(1 + x) < x/(1 + x) inverte a cota inferior. ln(1 + x) = x só vale no limite x → 0, e não para x > 0. E x < ln(1 + x) < 2x erra as duas cotas: o logaritmo cresce mais devagar que x.",
      v: {
        i: () => {
          const xs = Array.from({ length: 200 }, (_, k) => 0.01 + k * 0.1), L = (x) => Math.log(1 + x);
          const afirma = {
            "x/(1 + x) < ln(1 + x) < x": xs.every((x) => x / (1 + x) < L(x) && L(x) < x),
            "ln(1 + x) > x": xs.every((x) => L(x) > x),
            "ln(1 + x) < x/(1 + x)": xs.every((x) => L(x) < x / (1 + x)),
            "ln(1 + x) = x": xs.every((x) => Math.abs(L(x) - x) < 1e-12),
            "x < ln(1 + x) < 2x": xs.every((x) => x < L(x) && L(x) < 2 * x),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["[4, 16]", "[8, 12]", "[10, 16]", "[6, 14]", "[−6, 6]"];
    return {
      d: "media",
      e: "Com f(1) = 10 e a derivada sempre entre −2 e 2 no intervalo [1, 4], em que faixa de valores f(4) certamente está?",
      o,
      x: "Pelo teorema, f(4) − f(1) = f'(ξ) · 3, e como −2 ≤ f'(ξ) ≤ 2, a variação fica entre −6 e 6. Então 4 ≤ f(4) ≤ 16. Os dois extremos são atingidos pelas retas 10 + 2(x − 1) e 10 − 2(x − 1), e por isso a faixa não pode ser menor.\n\n[8, 12] esquece de multiplicar a cota da derivada pela distância 3. [10, 16] supõe f crescente, mas f' pode ser negativa. [6, 14] usa a distância 2 no lugar de 3. E [−6, 6] é a variação possível, sem somar f(1) = 10.",
      v: {
        i: () => {
          const valor = (g) => 10 + integra(g, 1, 4, 400), topo = valor(() => 2), base = valor(() => -2);
          if ([(t) => 2 * Math.cos(t), (t) => 2 * Math.sin(3 * t), () => 1, (t) => -2 + Math.exp(-t)].map(valor).some((v) => v < base - 1e-9 || v > topo + 1e-9)) throw new Error("bateria fora da faixa");
          return unicoV(o.map((t) => { const m = t.match(/^\[(.+), (.+)\]$/); return !!m && Math.abs(num(m[1]) - base) < 1e-9 && Math.abs(num(m[2]) - topo) < 1e-9; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["ξ = −1/√3 e ξ = 1/√3", "ξ = 0", "ξ = −1 e ξ = 1", "ξ = 1/√3, apenas", "ξ = −√3 e ξ = √3"];
    return {
      d: "media",
      e: "Entre as raízes −1 e 1 de f(x) = x³ − x, em quais pontos a derivada se anula?",
      o,
      x: "Rolle garante pelo menos um ponto; a conta mostra quais. Com f'(x) = 3x² − 1, a condição f'(ξ) = 0 dá ξ² = 1/3, e ξ = ±1/√3 ≈ ±0,58, ambos em (−1, 1): um máximo local e um mínimo local.\n\nξ = 0 é a terceira raiz de f e o ponto de inflexão, onde a derivada vale −1. ξ = ±1 são as extremidades, excluídas pelo teorema. 1/√3 apenas esquece a raiz negativa. E ±√3 resolve ξ² = 3, trocando o papel do coeficiente 3.",
      v: { i: () => qualXi(pontosTVM((x) => x ** 3 - x, -1, 1), o) },
    };
  })(),
  (() => {
    const o = ["f' vale exatamente 4", "f' vale exatamente 12", "f'' vale exatamente 0", "f' é maior que 4 em todo ponto", "f' vale exatamente 3"];
    return {
      d: "media",
      e: "Sabendo apenas que f é derivável, f(0) = 0 e f(3) = 12, o que o teorema do valor médio garante sobre algum ponto de (0, 3)?",
      o,
      x: "A inclinação da secante é (12 − 0)/(3 − 0) = 4, e o teorema garante um ponto ξ com f'(ξ) = 4: a taxa instantânea iguala a taxa média em algum lugar do intervalo.\n\n12 é a variação total, sem dividir pelo comprimento 3. f'' = 0 fala da concavidade, e não é garantido: (4/3)x² vai de 0 a 12 em [0, 3] com f'' = 8/3 em todo ponto. f' maior que 4 em todo ponto daria f(3) > 12. E 3 é o comprimento do intervalo, e não uma inclinação.",
      v: {
        i: () => {
          const fs = [(x) => 4 * x, (x) => (4 / 3) * x * x, (x) => 4 * x + Math.sin(Math.PI * x), (x) => 12 * (x / 3) ** 3], xs = malhaDe(0.01, 2.99, 100);
          if (fs.some((f) => Math.abs(f(0)) > 1e-12 || Math.abs(f(3) - 12) > 1e-9)) throw new Error("função fora do enunciado");
          const afirma = {
            "f' vale exatamente 4": fs.every((f) => existe((x) => derivada(f, x) - 4, 0, 3)),
            "f' vale exatamente 12": fs.every((f) => existe((x) => derivada(f, x) - 12, 0, 3)),
            "f'' vale exatamente 0": fs.every((f) => existe((x) => derivada2(f, x), 0, 3)),
            "f' é maior que 4 em todo ponto": fs.every((f) => xs.every((x) => derivada(f, x) > 4)),
            "f' vale exatamente 3": fs.every((f) => existe((x) => derivada(f, x) - 3, 0, 3)),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["No ponto médio, (a + b)/2", "Na extremidade a", "Na extremidade b", "Na média geométrica √(ab)", "Em posição que varia sem padrão"];
    return {
      d: "media",
      e: "Para qualquer intervalo [a, b], onde fica o ponto ξ do teorema do valor médio para f(x) = x² + 2x?",
      o,
      x: "A secante tem inclinação (b² + 2b − a² − 2a)/(b − a) = (b − a)(b + a + 2)/(b − a) = a + b + 2. Com f'(x) = 2x + 2, a condição 2ξ + 2 = a + b + 2 dá ξ = (a + b)/2. Para toda função do segundo grau, o ponto do teorema é o ponto médio do intervalo.\n\nAs extremidades a e b são excluídas pelo teorema: ξ fica no interior. A média geométrica é o ponto para 1/x, e nem está definida se a < 0. E há padrão, sim: a conta mostra que ξ é sempre o ponto médio.",
      /* ξ resolvido numericamente em quatro intervalos diferentes */
      v: {
        i: () => {
          const f = (x) => x * x + 2 * x, pares = [[0, 1], [1, 4], [-3, 2], [2, 7]], xis = pares.map(([a, b]) => pontosTVM(f, a, b));
          const medio = pares.every(([a, b], k) => xis[k].length === 1 && Math.abs(xis[k][0] - (a + b) / 2) < 1e-6);
          const afirma = {
            "No ponto médio, (a + b)/2": medio,
            "Na extremidade a": pares.every(([a], k) => xis[k].some((x) => Math.abs(x - a) < 1e-6)),
            "Na extremidade b": pares.every(([, b], k) => xis[k].some((x) => Math.abs(x - b) < 1e-6)),
            "Na média geométrica √(ab)": pares.every(([a, b], k) => a > 0 && b > 0 && xis[k].some((x) => Math.abs(x - Math.sqrt(a * b)) < 1e-6)),
            "Em posição que varia sem padrão": !medio,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["ξ = π/4", "ξ = π/2", "ξ = 0", "ξ = 3π/4", "ξ = √2"];
    return {
      d: "media",
      e: "Como sen 0 + cos 0 = sen(π/2) + cos(π/2) = 1, o teorema de Rolle vale para f(x) = sen x + cos x em [0, π/2]. Qual é o ponto garantido?",
      o,
      x: "A condição é f'(ξ) = cos ξ − sen ξ = 0, isto é, tg ξ = 1, e em (0, π/2) isso só ocorre em ξ = π/4. Ali a função tem o seu máximo, f(π/4) = √2/2 + √2/2 = √2. A simetria ajuda: sen x + cos x = √2 · sen(x + π/4), cujo topo fica em x = π/4.\n\nπ/2 e 0 são as extremidades, excluídas pelo teorema. 3π/4 resolve cos ξ + sen ξ = 0, com o sinal trocado, e cai fora do intervalo. E √2 é o valor máximo de f, e não um ponto do intervalo.",
      v: { i: () => qualXi(pontosTVM((x) => Math.sin(x) + Math.cos(x), 0, Math.PI / 2), o) },
    };
  })(),
  (() => {
    const o = ["x + 1", "1", "x", "cos 2x", "2x + 1"];
    return {
      d: "media",
      e: "Sabe-se que f'(x) = (cos x)² e g'(x) = −(sen x)² para todo x, com f(0) = 1 e g(0) = 0. Qual é a expressão de f(x) − g(x)?",
      o,
      x: "A diferença h = f − g tem derivada h'(x) = (cos x)² + (sen x)² = 1 para todo x. Então h(x) − x tem derivada zero e, pelo corolário do teorema do valor médio, é constante: h(x) = x + C. Como h(0) = f(0) − g(0) = 1, vem C = 1 e f(x) − g(x) = x + 1.\n\n1 esquece a parcela x, como se h' fosse zero. x esquece a constante, que vem de h(0) = 1. cos 2x vem de subtrair os quadrados, (cos x)² − (sen x)², em vez de somá-los. E 2x + 1 dobra a derivada.",
      /* f e g reconstruídas por integração numérica das derivadas dadas */
      v: { i: () => { const f = (x) => 1 + integra((t) => Math.cos(t) ** 2, 0, x, 400), g = (x) => integra((t) => -(Math.sin(t) ** 2), 0, x, 400); return unicoV(o.map((t) => mesmaFuncao((x) => f(x) - g(x), lerF(t), [-2, -0.7, 0.3, 1.1, 2.5]))); } },
    };
  })(),
  (() => {
    const o = ["ξ = 1", "ξ = √3/2", "ξ = −1", "ξ = √3", "ξ = 0"];
    return {
      d: "media",
      e: "O polinômio f(x) = x³ − 3x tem raízes 0 e √3. Que ponto entre elas tem derivada nula?",
      o,
      x: "Com f'(x) = 3x² − 3 = 3(x² − 1), a condição f'(ξ) = 0 dá ξ = ±1, e só ξ = 1 está em (0, √3 ≈ 1,73). É o mínimo local da função, com f(1) = −2. O resultado ilustra que o ponto de Rolle não precisa ficar no meio: aqui ele está mais perto de √3 do que de 0.\n\n√3/2 é o ponto médio, que só funciona para parábolas. −1 é a outra raiz de f', fora do intervalo. √3 e 0 são as extremidades, onde f se anula, e o teorema procura um ponto no interior.",
      v: { i: () => qualXi(pontosTVM((x) => x ** 3 - 3 * x, 0, Math.sqrt(3)), o) },
    };
  })(),
  (() => {
    const o = ["12 km/h", "0,2 km/h", "5 km/h", "10 km/h", "600 km/h"];
    return {
      d: "media",
      e: "Uma corredora completa 10 km em 50 minutos. Qual velocidade o teorema do valor médio garante que ela teve em algum instante?",
      o,
      x: "A velocidade média é a distância dividida pelo tempo: 10 km em 50/60 h, ou 10 · 60/50 = 12 km/h. Pelo teorema, supondo a posição derivável, houve um instante em que a velocidade instantânea foi exatamente igual à média, 12 km/h.\n\n0,2 é a velocidade em km por minuto, 10/50, lida como se fosse em km/h. 5 km/h inverte a razão: 50/10. 10 km/h supõe que 50 minutos são uma hora. E 600 km/h multiplica por 60 sem dividir pelos 50 minutos.",
      /* três perfis de corrida com 10 km em 5/6 h: cada um passa pela velocidade média em algum instante */
      v: {
        i: () => {
          const T = 50 / 60, media = 10 / T, perfis = [(t) => media * t, (t) => (10 * t * t) / (T * T), (t) => media * t + Math.sin((2 * Math.PI * t) / T)];
          if (perfis.some((s) => Math.abs(s(T) - 10) > 1e-9 || !existe((t) => derivada(s, t) - media, 0, T))) throw new Error("perfil incoerente");
          return qual(media, o.map(semUnidade));
        },
      },
    };
  })(),
  (() => {
    const o = ["eˣ > 1 + x", "eˣ < 1 + x", "eˣ > 1 + 2x", "eˣ < 1 + x²", "eˣ = 1 + x"];
    return {
      d: "media",
      e: "Qual desigualdade, válida para todo x > 0, sai do teorema do valor médio aplicado a eᵗ no intervalo [0, x]?",
      o,
      x: "O teorema dá eˣ − e⁰ = e^ξ · x, com 0 < ξ < x. Como e^ξ > 1 para ξ > 0, vem eˣ − 1 > x, ou eˣ > 1 + x. Geometricamente, a reta y = 1 + x é a tangente ao gráfico de eˣ em x = 0, e o gráfico fica acima dela.\n\neˣ < 1 + x inverte a desigualdade. eˣ > 1 + 2x falha perto de zero: em x = 0,1, e^0,1 ≈ 1,105 < 1,2. eˣ < 1 + x² falha para x grande: em x = 5, e⁵ ≈ 148 > 26. E a igualdade só vale em x = 0, fora do intervalo.",
      v: {
        i: () => {
          const xs = Array.from({ length: 100 }, (_, k) => 0.01 + k * 0.1), E = Math.exp;
          const afirma = { "eˣ > 1 + x": xs.every((x) => E(x) > 1 + x), "eˣ < 1 + x": xs.every((x) => E(x) < 1 + x), "eˣ > 1 + 2x": xs.every((x) => E(x) > 1 + 2 * x), "eˣ < 1 + x²": xs.every((x) => E(x) < 1 + x * x), "eˣ = 1 + x": xs.every((x) => Math.abs(E(x) - 1 - x) < 1e-12) };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Não se aplica, mas há ξ com f'(ξ) = 1", "Aplica-se, com ξ = 0", "Não se aplica, e nenhum ξ tem f'(ξ) = 1", "Aplica-se, com um único ξ", "Aplica-se, com ξ = ±1"];
    return {
      d: "media",
      e: "Para f(x) = ∛x no intervalo [−1, 1], o que se pode dizer sobre o teorema do valor médio?",
      o,
      x: "A inclinação da secante é (1 − (−1))/2 = 1. Mas f'(x) = 1/(3∛(x²)) não existe em x = 0, onde a tangente é vertical: a hipótese de derivabilidade falha, e o teorema não se aplica. Mesmo assim, a conclusão vale por acaso: 1/(3∛(ξ²)) = 1 dá ξ = ±(1/3)^(3/2) ≈ ±0,19.\n\nξ = 0 é justamente onde a derivada não existe. Nenhum ξ contradiz a conta acima: as hipóteses falharem não impede que a conclusão valha. Um único ξ e ξ = ±1 supõem que o teorema se aplica, e ±1 ainda são as extremidades.",
      v: {
        i: () => {
          const f = Math.cbrt, aplica = derivavel(f, -1, 1), pts = [...zeros((x) => derivada(f, x) - 1, -0.999, -0.001), ...zeros((x) => derivada(f, x) - 1, 0.001, 0.999)];
          const afirma = {
            "Não se aplica, mas há ξ com f'(ξ) = 1": !aplica && pts.length > 0,
            "Aplica-se, com ξ = 0": aplica,
            "Não se aplica, e nenhum ξ tem f'(ξ) = 1": !aplica && pts.length === 0,
            "Aplica-se, com um único ξ": aplica && pts.length === 1,
            "Aplica-se, com ξ = ±1": aplica,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["1/2 < f(1) < 1", "0 < f(1) < 1/2", "f(1) > 1", "f(1) = 1/2", "1 < f(1) < 2"];
    return {
      d: "media",
      e: "Uma função tem f(0) = 0 e f'(x) = 1/(1 + x²). Que cota o teorema do valor médio fornece para f(1)?",
      o,
      x: "O teorema dá f(1) − f(0) = f'(ξ) · 1, com 0 < ξ < 1. Nesse intervalo, 1 + ξ² fica entre 1 e 2, e f'(ξ) = 1/(1 + ξ²) fica entre 1/2 e 1. Então 1/2 < f(1) < 1. De fato, f é o arco tangente, e f(1) = π/4 ≈ 0,785.\n\n0 < f(1) < 1/2 usa cotas abaixo do menor valor de f' no intervalo. f(1) > 1 exigiria f' > 1 em algum ponto, mas f' ≤ 1. f(1) = 1/2 toma o menor valor de f' como se fosse o do ponto ξ. E 1 < f(1) < 2 usa 1 + ξ² no lugar de 1/(1 + ξ²).",
      /* f(1) pela integral numérica de f'; as cotas pelo ínfimo e supremo de f' em [0, 1] */
      v: {
        i: () => {
          const fp = (t) => 1 / (1 + t * t), f1 = integra(fp, 0, 1, 400), inf = minimo(fp, 0, 1).y, sup = maximo(fp, 0, 1).y;
          const afirma = {
            "1/2 < f(1) < 1": Math.abs(inf - 0.5) < 1e-9 && Math.abs(sup - 1) < 1e-9 && inf < f1 && f1 < sup,
            "0 < f(1) < 1/2": 0 < f1 && f1 < 0.5,
            "f(1) > 1": f1 > 1,
            "f(1) = 1/2": Math.abs(f1 - 0.5) < 1e-9,
            "1 < f(1) < 2": 1 < f1 && f1 < 2,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["2", "4", "1", "3", "0"];
    return {
      d: "media",
      e: "No máximo, quantas vezes o gráfico de f(x) = x⁴ − 4x + 1 pode cortar o eixo x, segundo o teorema de Rolle?",
      o,
      x: "A derivada f'(x) = 4x³ − 4 = 4(x³ − 1) se anula só em x = 1. Se f tivesse três raízes, Rolle daria dois zeros de f', um entre cada par de raízes vizinhas; como f' tem um só, f tem no máximo duas raízes. E tem duas: f(1) = −2 < 0, enquanto f vai a +∞ dos dois lados.\n\n4 é o grau de f, o máximo para quárticas em geral, e não para esta. 1 esquece que a função desce e volta a subir, cruzando o eixo duas vezes. 3 é o grau de f'. E 0 ignora que f(1) é negativo.",
      v: { i: () => qual(zeros(lerF("x⁴ − 4x + 1"), -10, 10).length, o) },
    };
  })(),
  (() => {
    const o = ["f(x) = x² − 2x", "f(x) = |x − 1|", "f(x) = 1/(x − 1)", "f(x) = ∛((x − 1)²)", "f(x) = √|x − 1|"];
    return {
      d: "media",
      e: "Qual das funções satisfaz as hipóteses do teorema do valor médio no intervalo [0, 2]?",
      o,
      x: "O teorema exige continuidade em [0, 2] e derivabilidade em (0, 2). O polinômio x² − 2x cumpre as duas. Todas as outras falham em x = 1, no meio do intervalo.\n\n|x − 1| é contínua, mas tem um bico em x = 1. 1/(x − 1) nem está definida em x = 1, onde tem uma assíntota. ∛((x − 1)²) é contínua, mas tem uma cúspide em x = 1, com tangente vertical. E √|x − 1| também é contínua, mas a derivada vai a infinito dos dois lados de x = 1.",
      /* hipóteses testadas numa malha que inclui x = 1 */
      v: {
        i: () => {
          const fns = { "f(x) = x² − 2x": (x) => x * x - 2 * x, "f(x) = |x − 1|": (x) => Math.abs(x - 1), "f(x) = 1/(x − 1)": (x) => 1 / (x - 1), "f(x) = ∛((x − 1)²)": (x) => Math.cbrt((x - 1) ** 2), "f(x) = √|x − 1|": (x) => Math.sqrt(Math.abs(x - 1)) };
          return unicoV(o.map((t) => continua(fns[t], 0, 2) && derivavel(fns[t], 0, 2)));
        },
      },
    };
  })(),
  (() => {
    const o = ["|f(b) − f(a)| ≤ |b − a|/2", "|f(b) − f(a)| ≤ 1/2", "|f(b) − f(a)| ≥ |b − a|/2", "f(b) − f(a) = (b − a)/2", "|f(b)| ≤ |b|/2"];
    return {
      d: "media",
      e: "Se |f'(x)| ≤ 1/2 para todo x real, qual desigualdade vale para quaisquer números a e b?",
      o,
      x: "Pelo teorema, f(b) − f(a) = f'(ξ)(b − a) para algum ξ entre a e b. Tomando o módulo e usando |f'(ξ)| ≤ 1/2: |f(b) − f(a)| ≤ |b − a|/2. A função é uma contração: encurta pelo menos pela metade a distância entre quaisquer dois pontos.\n\n|f(b) − f(a)| ≤ 1/2 esquece o fator |b − a|: f(x) = x/2 dá diferença 2 entre 0 e 4. O sinal ≥ inverte a cota. A igualdade só vale para funções com derivada 1/2 em todo ponto. E |f(b)| ≤ |b|/2 esquece o valor em zero: f(x) = 5 + x/2 vale 5 em x = 0.",
      /* bateria com |f'| ≤ 1/2, testada em vários pares de pontos */
      v: {
        i: () => {
          const fs = [(x) => x / 2, (x) => Math.sin(x) / 2, (x) => Math.atan(x) / 2, (x) => Math.cos(x / 2), (x) => 5 + x / 2], pares = [[0, 4], [-3, 1], [0.5, 2 * Math.PI], [-2, -1]];
          if (fs.some((f) => malhaDe(-10, 10, 200).some((x) => Math.abs(derivada(f, x)) > 0.5 + 1e-9))) throw new Error("função fora da hipótese");
          const todas = (p) => fs.every((f) => pares.every(([a, b]) => p(f, a, b)));
          const afirma = {
            "|f(b) − f(a)| ≤ |b − a|/2": todas((f, a, b) => Math.abs(f(b) - f(a)) <= Math.abs(b - a) / 2 + 1e-12),
            "|f(b) − f(a)| ≤ 1/2": todas((f, a, b) => Math.abs(f(b) - f(a)) <= 0.5),
            "|f(b) − f(a)| ≥ |b − a|/2": todas((f, a, b) => Math.abs(f(b) - f(a)) >= Math.abs(b - a) / 2 - 1e-12),
            "f(b) − f(a) = (b − a)/2": todas((f, a, b) => Math.abs(f(b) - f(a) - (b - a) / 2) < 1e-12),
            "|f(b)| ≤ |b|/2": todas((f, a, b) => Math.abs(f(b)) <= Math.abs(b) / 2),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Só ξ = 1", "ξ = −1 e ξ = 1", "ξ = 1/2", "ξ = √3", "Nenhum"];
    return {
      d: "media",
      e: "Com f(x) = x³ e o intervalo [−1, 2], resolva f'(ξ) = (f(2) − f(−1))/3. Quais soluções ficam no intervalo aberto (−1, 2)?",
      o,
      x: "A secante tem inclinação (8 − (−1))/(2 − (−1)) = 9/3 = 3. Com f'(x) = 3x², a condição 3ξ² = 3 dá ξ = ±1. Mas −1 é a extremidade esquerda, fora do intervalo aberto; sobra só ξ = 1.\n\nξ = −1 e ξ = 1 esquece que o teorema pede ξ no interior. 1/2 é o ponto médio, que só funciona para parábolas. √3 esquece de dividir a variação 9 pelo comprimento 3 e resolve 3ξ² = 9. E há um ponto, sim: o teorema se aplica a qualquer polinômio.",
      v: { i: () => qualXi(pontosTVM((x) => x ** 3, -1, 2), o) },
    };
  })(),
  (() => {
    const o = ["f(x) > g(x)", "f(x) < g(x)", "f(x) = g(x)", "f'(x) > 0", "f(x) > 0"];
    return {
      d: "media",
      e: "Duas funções deriváveis têm f(0) = g(0), e f'(x) > g'(x) para todo x > 0. O que se pode afirmar para x > 0?",
      o,
      x: "A diferença h = f − g tem h(0) = 0 e h'(x) > 0 para x > 0. Pelo teorema do valor médio, h(x) = h(0) + h'(ξ) · x = h'(ξ) · x > 0 para x > 0: f(x) > g(x). É assim que se provam desigualdades como eˣ > 1 + x.\n\nf(x) < g(x) inverte a conclusão. f(x) = g(x) exigiria h' = 0. f'(x) > 0 não decorre: com f(x) = −x/2 e g(x) = −x, vale f' > g', mas f' < 0. E f(x) > 0 também não: nesse mesmo exemplo, f é negativa.",
      v: {
        i: () => {
          const pares = [[Math.exp, (x) => 1 + x], [(x) => x * x, () => 0], [(x) => Math.log(1 + x), (x) => x / (1 + x)], [(x) => -x / 2, (x) => -x]], xs = Array.from({ length: 50 }, (_, k) => 0.05 + k / 10);
          if (pares.some(([f, g]) => Math.abs(f(0) - g(0)) > 1e-12 || xs.some((x) => derivada(f, x) <= derivada(g, x)))) throw new Error("par fora da hipótese");
          const afirma = {
            "f(x) > g(x)": pares.every(([f, g]) => xs.every((x) => f(x) > g(x))),
            "f(x) < g(x)": pares.every(([f, g]) => xs.every((x) => f(x) < g(x))),
            "f(x) = g(x)": pares.every(([f, g]) => xs.every((x) => f(x) === g(x))),
            "f'(x) > 0": pares.every(([f]) => xs.every((x) => derivada(f, x) > 0)),
            "f(x) > 0": pares.every(([f]) => xs.every((x) => f(x) > 0)),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["ξ = √3", "ξ = 2", "ξ = 3/2", "ξ = 1/√3", "ξ = 3"];
    return {
      d: "media",
      e: "No intervalo [1, 3], onde a função f(x) = x + 1/x tem derivada igual à inclinação da sua secante?",
      o,
      x: "A secante tem inclinação (f(3) − f(1))/(3 − 1) = (10/3 − 2)/2 = 2/3. Com f'(x) = 1 − 1/x², a condição 1 − 1/ξ² = 2/3 dá 1/ξ² = 1/3 e ξ = √3 ≈ 1,73, dentro de (1, 3). Como a parcela x tem derivada constante, o ponto é o mesmo de 1/x: a média geométrica √(1 · 3).\n\n2 é o ponto médio, que só funciona para parábolas. 3/2 é a média harmônica de 1 e 3, que não tem papel aqui. 1/√3 inverte o resultado e cai fora do intervalo. E 3 é ξ², sem a raiz, e ainda é uma extremidade.",
      v: { i: () => qualXi(pontosTVM((x) => x + 1 / x, 1, 3), o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["1", "0", "2", "Infinitas", "3"];
    return {
      d: "dificil",
      e: "Usando o teorema do valor médio, em quantos pontos o gráfico de y = eˣ encontra a reta y = 1 + x?",
      o,
      x: "x = 0 é solução, pois e⁰ = 1. Para x ≠ 0, o teorema do valor médio no intervalo entre 0 e x dá eˣ − 1 = e^ξ · x, com ξ entre 0 e x. Se x > 0, e^ξ > 1 e eˣ − 1 > x; se x < 0, e^ξ < 1 e, como x é negativo, e^ξ · x > x, isto é, eˣ − 1 > x de novo. Em nenhum caso há igualdade: a única solução é x = 0.\n\n0 esquece a solução evidente x = 0. 2 supõe que a reta cruza a exponencial, mas ela só a toca: y = 1 + x é a tangente em x = 0. Infinitas e 3 são impossíveis pelo mesmo argumento.",
      v: { i: () => qual(zeros((x) => Math.exp(x) - 1 - x, -10, 10).length, o) },
    };
  })(),
  (() => {
    const o = ["1", "π/2", "1/2", "π/4", "2"];
    return {
      d: "dificil",
      e: "Qual é a menor constante L tal que |arctg a − arctg b| ≤ L · |a − b| para quaisquer reais a e b?",
      o,
      x: "Pelo teorema do valor médio, arctg a − arctg b = (a − b)/(1 + ξ²) para algum ξ entre a e b. Como 1/(1 + ξ²) ≤ 1, vale a desigualdade com L = 1. E nenhuma constante menor serve: perto de a = b = 0, a derivada é quase 1, e a razão |arctg a − arctg b|/|a − b| se aproxima de 1.\n\nπ/2 é o maior valor de |arctg x|, e não uma inclinação. 1/2 é a derivada em x = ±1, e não o máximo dela. π/4 é arctg 1. E 2 é uma constante válida, mas não a menor.",
      /* supremo numérico da derivada; e razões de acréscimos perto da origem, que chegam perto dele */
      v: { i: () => { const L = maximo((x) => derivada(Math.atan, x), -10, 10).y, perto = Math.atan(1e-3) / 1e-3; if (!(perto > L - 1e-6 && perto <= L)) throw new Error("L não é o menor"); return qual(L, o, 1e-8); } },
    };
  })(),
  (() => {
    const o = ["12", "9", "3", "18", "21"];
    return {
      d: "dificil",
      e: "Sabe-se que f(0) = 0, f'(0) = 1 e que a derivada segunda nunca passa de 2. Até quanto pode chegar f(3)?",
      o,
      x: "Aplicando o teorema do valor médio a f' em [0, x]: f'(x) − f'(0) = f''(ξ) · x ≤ 2x, e então f'(x) ≤ 1 + 2x. A função g(x) = x + x² − f(x) tem g(0) = 0 e g'(x) = 1 + 2x − f'(x) ≥ 0, e o mesmo teorema dá g(3) ≥ 0, isto é, f(3) ≤ 3 + 9 = 12. O valor 12 é atingido por f(x) = x + x², que tem f'' = 2.\n\n9 fica só com a parcela x², esquecendo f'(0) = 1. 3 fica só com a parcela da derivada inicial. 18 usa 2x² no lugar de x². E 21 soma 3 com 2 · 9, pelo mesmo erro.",
      /* f(3) = f(0) + 3f'(0) + ∫ (3 − s) f''(s) ds, para várias f'' ≤ 2; f'' constante igual a 2 dá o maior valor */
      v: {
        i: () => {
          const valor = (g) => 3 + integra((s) => (3 - s) * g(s), 0, 3, 400), topo = valor(() => 2);
          if ([(s) => 2 * Math.cos(s), (s) => 2 - s * s, () => -1, (s) => 2 - Math.exp(-s * s)].map(valor).some((v) => v > topo + 1e-9)) throw new Error("bateria passou da cota");
          return qual(topo, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["2", "3", "1", "4", "0"];
    return {
      d: "dificil",
      e: "Um polinômio p de grau 4 tem quatro raízes reais distintas. Quantas raízes reais distintas p'' tem, no mínimo?",
      o,
      x: "Entre cada par de raízes vizinhas de p, Rolle dá uma raiz de p': três raízes distintas de p', todas reais. Aplicando Rolle de novo a p', entre cada par de raízes vizinhas de p' há uma raiz de p'': pelo menos duas. Como p'' tem grau 2, são exatamente duas.\n\n3 é o número de raízes de p', e não de p''. 1 aplica Rolle só uma vez entre as raízes de p'. 4 conta as raízes de p. E 0 ignora que Rolle se aplica em sequência, a p e depois a p'.",
      /* quárticas com quatro raízes distintas; trocas de sinal da derivada segunda numérica */
      v: {
        i: () => {
          const ps = [(x) => (x - 1) * (x - 2) * (x - 3) * (x - 4), (x) => x * (x - 1) * (x + 1) * (x - 5), (x) => (x * x - 1) * (x * x - 4), (x) => (x + 3) * (x + 0.5) * (x - 0.2) * (x - 6)];
          return qual(Math.min(...ps.map((p) => trocas((x) => derivada2(p, x), -20, 20).length)), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["ξ = 14/9", "ξ = 3/2", "ξ = 9/14", "ξ = 7/3", "ξ = √(7/3)"];
    return {
      d: "dificil",
      e: "O teorema do valor médio de Cauchy garante ξ em (1, 2) com f'(ξ)/g'(ξ) = (f(2) − f(1))/(g(2) − g(1)). Para f(x) = x² e g(x) = x³, qual é ξ?",
      o,
      x: "O lado direito vale (4 − 1)/(8 − 1) = 3/7. O esquerdo é 2ξ/(3ξ²) = 2/(3ξ). A igualdade 2/(3ξ) = 3/7 dá 9ξ = 14, e ξ = 14/9 ≈ 1,56, dentro de (1, 2). O teorema de Cauchy é o que está por trás da regra de L'Hôpital.\n\n3/2 é o ponto médio, que não tem papel aqui. 9/14 inverte o resultado e cai fora do intervalo. 7/3 é a razão invertida dos acréscimos, (g(2) − g(1))/(f(2) − f(1)). E √(7/3) aplica o teorema comum só a g, resolvendo 3ξ² = 7.",
      v: { i: () => { const f = (x) => x * x, g = (x) => x ** 3; return qualXi(zeros((x) => derivada(f, x) / derivada(g, x) - 3 / 7, 1 + 1e-6, 2 - 1e-6), o); } },
    };
  })(),
  (() => {
    const o = ["(1/11, 1/10)", "(0, 1/11)", "(1/10, 1/9)", "(1/10, 1/5)", "(1/12, 1/11)"];
    return {
      d: "dificil",
      e: "O teorema do valor médio aplicado a ln x no intervalo [1; 1,1] fornece uma cota inferior e uma superior para ln 1,1. Qual intervalo elas determinam?",
      o,
      x: "O teorema dá ln 1,1 − ln 1 = (1/ξ) · 0,1, com 1 < ξ < 1,1. Como 1/1,1 < 1/ξ < 1, vem 0,1/1,1 < ln 1,1 < 0,1, isto é, 1/11 < ln 1,1 < 1/10. O valor real, ≈ 0,0953, fica mesmo entre 0,0909 e 0,1.\n\n(0, 1/11) fica abaixo da cota inferior. (1/10, 1/9) e (1/10, 1/5) ficam acima da cota superior, como se 1/ξ pudesse passar de 1. E (1/12, 1/11) fica todo abaixo da cota inferior 1/11, como se ξ pudesse chegar a 1,2.",
      /* cotas: ínfimo e supremo numéricos de 1/x em [1; 1,1], vezes 0,1 */
      v: {
        i: () => {
          const inf = minimo((x) => 1 / x, 1, 1.1).y * 0.1, sup = maximo((x) => 1 / x, 1, 1.1).y * 0.1;
          if (!(inf < Math.log(1.1) && Math.log(1.1) < sup)) throw new Error("cotas incoerentes");
          return unicoV(o.map((t) => { const m = t.match(/^\((.+), (.+)\)$/); return !!m && Math.abs(num(m[1]) - inf) < 1e-9 && Math.abs(num(m[2]) - sup) < 1e-9; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["28", "25", "32", "22", "17,5"];
    return {
      d: "dificil",
      e: "Sabe-se que f'(x) = g'(x) para todo x real, com g(x) = x² e f(2) = 7. Quanto vale f(5)?",
      o,
      x: "Como f' = g', a diferença f − g tem derivada nula e, pelo corolário do teorema do valor médio, é constante: f(x) = x² + C. De f(2) = 4 + C = 7 vem C = 3, e f(5) = 25 + 3 = 28. Não é preciso conhecer f por inteiro: basta a derivada e um valor.\n\n25 é g(5), sem a constante. 32 soma f(2) = 7 no lugar da constante C = 3. 22 subtrai a constante em vez de somá-la. E 17,5 supõe f proporcional a x, calculando 7 · 5/2.",
      /* f(5) = f(2) + integral da derivada de g, calculada numericamente */
      v: { i: () => qual(7 + integra((x) => derivada((t) => t * t, x), 2, 5, 400), o) },
    };
  })(),
  (() => {
    const o = ["ξ = (1/n)^(1/(n − 1))", "ξ = 1/n", "ξ = 1/2", "ξ = (1/2)^(1/n)", "ξ = 1/(n − 1)"];
    return {
      d: "dificil",
      e: "Para f(x) = xⁿ no intervalo [0, 1], com n ≥ 2 inteiro, qual é o ponto ξ do teorema do valor médio?",
      o,
      x: "A secante tem inclinação (1 − 0)/(1 − 0) = 1. Com f'(x) = nxⁿ⁻¹, a condição nξⁿ⁻¹ = 1 dá ξⁿ⁻¹ = 1/n, e ξ = (1/n)^(1/(n − 1)). Para n = 2, ξ = 1/2; para n = 3, ξ = 1/√3 ≈ 0,58; e ξ se aproxima de 1 à medida que n cresce, porque o gráfico fica cada vez mais achatado perto de 0 e íngreme perto de 1.\n\n1/n esquece a raiz de índice n − 1. 1/2 só acerta para n = 2. (1/2)^(1/n) é o ponto em que xⁿ vale 1/2, e não o de inclinação 1. E 1/(n − 1) troca a raiz por uma divisão.",
      /* ξ resolvido numericamente para n = 2, …, 6; cada fórmula é avaliada com o n correspondente */
      v: {
        i: () => {
          const ns = [2, 3, 4, 5, 6], xis = ns.map((n) => { const r = pontosTVM((x) => x ** n, 0, 1); if (r.length !== 1) throw new Error(`n = ${n}: ${r}`); return r[0]; });
          return unicoV(o.map((t) => ns.every((n, k) => { try { return Math.abs(num(t.replace(/^ξ\s*=\s*/, "").replace(/n/g, `(${n})`)) - xis[k]) < 1e-6; } catch { return false; } })));
        },
      },
    };
  })(),
  (() => {
    const o = ["1", "2", "0", "Infinitos", "Depende da função"];
    return {
      d: "dificil",
      e: "Se f é derivável em toda a reta e f'(x) ≠ 0 para todo x, em quantos pontos, no máximo, o gráfico de f pode cortar uma reta horizontal?",
      o,
      x: "Se o gráfico cortasse a reta y = k em dois pontos x₁ < x₂, teríamos f(x₁) = f(x₂) = k, e o teorema de Rolle daria ξ entre eles com f'(ξ) = 0, contra a hipótese. Logo cada reta horizontal é cortada no máximo uma vez: f é injetora e, na verdade, estritamente crescente ou estritamente decrescente.\n\n2 exigiria um zero de f' entre os dois cortes. 0 é possível para certas retas, como y = 5 com f(x) = arctg x, mas a pergunta é pelo máximo. Infinitos contradiz Rolle ainda mais. E a resposta não depende da função: vale para toda f com f' sempre diferente de zero.",
      /* bateria com f' sem zeros; cortes com várias retas horizontais, contados por varredura */
      v: {
        i: () => {
          const fs = [(x) => x ** 3 + x, Math.exp, Math.atan, (x) => -2 * x + 1, (x) => x + Math.sin(x) / 2], ks = [-3, -1, 0, 0.5, 1, 2, 5];
          if (fs.some((f) => malhaDe(-20, 20, 400).some((x) => derivada(f, x) === 0))) throw new Error("derivada nula na bateria");
          return qual(Math.max(...fs.flatMap((f) => ks.map((k) => zeros((x) => f(x) - k, -10, 10, 40000).length))), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["sen x < x", "sen x > x", "sen x < x²", "sen x > x/2", "sen x = x · cos x"];
    return {
      d: "dificil",
      e: "Aplicando o teorema do valor médio a sen t no intervalo [0, x], com x > 0, qual desigualdade se obtém?",
      o,
      x: "O teorema dá sen x − sen 0 = cos ξ · x, com 0 < ξ < x, e como cos ξ ≤ 1 e x > 0, sen x ≤ x. Para x > 0 a desigualdade é estrita, porque sen x = x só acontece em x = 0. É essa desigualdade que ajuda a provar que sen x/x → 1.\n\nsen x > x inverte a conclusão. sen x < x² falha perto de zero: em x = 0,1, sen 0,1 ≈ 0,0998 > 0,01. sen x > x/2 falha em x = π, onde o seno é zero. E sen x = x · cos x confunde o ponto ξ com o próprio x.",
      v: {
        i: () => {
          const xs = Array.from({ length: 200 }, (_, k) => 0.01 + k * 0.1), S = Math.sin;
          const afirma = { "sen x < x": xs.every((x) => S(x) < x), "sen x > x": xs.every((x) => S(x) > x), "sen x < x²": xs.every((x) => S(x) < x * x), "sen x > x/2": xs.every((x) => S(x) > x / 2), "sen x = x · cos x": xs.every((x) => Math.abs(S(x) - x * Math.cos(x)) < 1e-12) };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
];
