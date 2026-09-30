/* Rascunho — Cálculo I / Esboço de gráficos e concavidade.

   A explicação estuda os sinais de f' e f'' pelas fórmulas; a conferência
   não usa fórmula de derivada nenhuma: calcula f' e f'' numericamente numa
   malha fina, acha onde elas trocam de sinal (e refina por bisseção), e
   compara com o conjunto, a lista ou o ponto de cada alternativa. As
   afirmações gerais são testadas em baterias de funções, com concavidade
   conferida pela definição (ponto médio abaixo da corda), extremos por
   comparação direta de valores e raízes contadas por varredura. */

import { unicoV, lerF, lerCondicao, derivada, derivada2, zeros, bissecao, integra } from "./_calculo.mjs";

export const materia = "calculo";
export const tema = "Esboço de gráficos e concavidade";
export const arquivo = "calculo__esboco-de-graficos-e-concavidade";

const num = (t) => { const s = String(t).trim().replace(/^[a-zA-Z]\s*=\s*/, ""); if (/x/.test(s)) throw new Error("não é número"); return lerF(s)(0); };
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = num(t); } catch { return false; } return Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); }));
const d = (f) => (x) => derivada(f, x);
const d2 = (f) => (x) => derivada2(f, x);
/* abscissas em que g troca de sinal numa malha fina, refinadas por bisseção; um valor não finito (polo) zera a memória do sinal */
const trocas = (g, a, b, n = 20000) => { const r = []; let x0 = a, s0 = Math.sign(g(a)); for (let k = 1; k <= n; k++) { const x = a + ((b - a) * k) / n, v = g(x); if (!Number.isFinite(v)) { s0 = 0; continue; } const s = Math.sign(v); if (s !== 0 && s0 !== 0 && s !== s0) r.push(bissecao(g, x0, x)); if (s !== 0) { s0 = s; x0 = x; } } return r; };
/* listas de abscissas ("x = 0 e x = 2", "Só x = 1", "x = 0, x = π e x = 2π") e pontos "(a, b)" */
const lista = (t) => { try { return t.replace(/^Só\s+/, "").split(/,\s*|\s+e\s+|\s+ou\s+/).map((s) => num(s)); } catch { return null; } };
const mesmaLista = (a, b, tol = 1e-5) => { if (!a || a.length !== b.length) return false; const p = [...a].sort((u, v) => u - v), q = [...b].sort((u, v) => u - v); return p.every((v, k) => Math.abs(v - q[k]) < tol); };
const ponto = (t) => { const m = t.match(/^\((.+), (.+)\)$/); try { return m ? [num(m[1]), num(m[2])] : null; } catch { return null; } };
/* intervalos: "(2, +∞)", "(−∞, −1) ∪ (3, +∞)", "ℝ", "Em nenhum intervalo" */
const intervalo = (t) => { const m = t.match(/^([[(])\s*(.+?)\s*,\s*(.+?)\s*([\])])$/); if (!m) throw new Error(`intervalo ilegível: ${t}`); const val = (v) => (/^\+?∞$/.test(v) ? Infinity : /^[−-]∞$/.test(v) ? -Infinity : num(v)); const a = val(m[2]), b = val(m[3]); return (x) => (m[1] === "[" ? x >= a : x > a) && (m[4] === "]" ? x <= b : x < b); };
const uniao = (t) => { if (/nenhum/i.test(t)) return () => false; if (t.trim() === "ℝ") return () => true; const ps = t.split(/\s*∪\s*/).map(intervalo); return (x) => ps.some((p) => p(x)); };
/* alternativa cujo conjunto coincide com a condição numérica na malha, fora dos pontos vizinhos de onde a condição muda */
const qualConjunto = (cond, alt, a = -10, b = 10) => {
  const xs = Array.from({ length: 1601 }, (_, k) => a + ((b - a) * k) / 1600), vs = xs.map(cond), perto = new Set();
  for (let k = 1; k < xs.length; k++) if (vs[k] !== vs[k - 1]) { perto.add(k); perto.add(k - 1); }
  return unicoV(alt.map((t) => { let p; try { p = uniao(t); } catch { return false; } return xs.every((x, k) => perto.has(k) || vs[k] === null || p(x) === vs[k]); }));
};
const sinal = (f, cmp) => (x) => { const v = f(x); return Number.isFinite(v) ? cmp(v) : null; };
/* classificação por comparação direta de valores, e concavidade pela definição */
const minLocal = (f, c) => [1e-2, 1e-3].every((h) => f(c) <= f(c - h) && f(c) <= f(c + h));
const maxLocal = (f, c) => [1e-2, 1e-3].every((h) => f(c) >= f(c - h) && f(c) >= f(c + h));
const inflexao = (f, c) => Math.sign(derivada2(f, c - 0.05)) * Math.sign(derivada2(f, c + 0.05)) < 0;
const convexa = (f, a, b) => { for (let i = 1; i < 20; i++) for (let j = i + 1; j < 20; j++) { const p = a + ((b - a) * i) / 20, q = a + ((b - a) * j) / 20; if (!(f((p + q) / 2) < (f(p) + f(q)) / 2)) return false; } return true; };
const crescente = (f, a, b) => { let y = f(a); for (let k = 1; k <= 200; k++) { const v = f(a + ((b - a) * k) / 200); if (!(v > y)) return false; y = v; } return true; };
const decrescente = (f, a, b) => crescente((x) => -f(x), a, b);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["(2, +∞)", "(−∞, 2)", "(0, 4)", "(−∞, 0) ∪ (4, +∞)", "ℝ"];
    return {
      d: "facil",
      e: "Em que intervalo a função f(x) = x² − 4x é crescente?",
      o,
      x: "A função cresce onde a derivada é positiva. Com f'(x) = 2x − 4, isso acontece para x > 2, e a função é crescente em (2, +∞). Antes de x = 2, f' < 0 e a função decresce; em x = 2 fica o vértice da parábola, que é o mínimo.\n\n(−∞, 2) é o intervalo em que a função decresce. (0, 4) é onde a função é negativa, entre as raízes 0 e 4. (−∞, 0) ∪ (4, +∞) é onde a função é positiva: o sinal de f não é o sinal de f'. E ℝ ignora que uma parábola sempre muda de sentido no vértice.",
      v: { i: () => { const f = lerF("x² − 4x"); return qualConjunto(sinal(d(f), (v) => v > 0), o); } },
    };
  })(),
  (() => {
    const o = ["(0, +∞)", "(−∞, 0)", "ℝ", "Em nenhum intervalo", "(−1, 1)"];
    return {
      d: "facil",
      e: "Em que intervalo o gráfico de f(x) = x³ tem concavidade voltada para cima?",
      o,
      x: "A concavidade é dada pelo sinal da derivada segunda. Com f'(x) = 3x² e f''(x) = 6x, a concavidade é para cima onde 6x > 0, isto é, em (0, +∞), e para baixo em (−∞, 0). A origem, onde a concavidade muda, é um ponto de inflexão.\n\n(−∞, 0) é onde a concavidade é para baixo. ℝ confunde concavidade com crescimento: x³ é crescente em toda a reta, mas muda de concavidade. Em nenhum intervalo também ignora a mudança na origem. E (−1, 1) é um intervalo sem relação com o sinal de 6x.",
      v: { i: () => qualConjunto(sinal(d2((x) => x ** 3), (v) => v > 0), o) },
    };
  })(),
  (() => {
    const o = ["x = 1", "x = 0", "x = 2", "x = −1", "x = 3"];
    return {
      d: "facil",
      e: "Em que abscissa o gráfico de f(x) = x³ − 3x² + 1 muda de concavidade?",
      o,
      x: "A concavidade muda onde a derivada segunda troca de sinal. Com f'(x) = 3x² − 6x e f''(x) = 6x − 6, isso acontece em x = 1: antes, f'' < 0 e o gráfico é côncavo para baixo; depois, f'' > 0 e ele é côncavo para cima. O ponto de inflexão é (1, f(1)) = (1, −1).\n\nx = 0 é o máximo local, onde f' se anula. x = 2 é o mínimo local, a outra raiz de f'. x = −1 resolve 6x + 6 = 0, com o sinal trocado. E x = 3 é onde o gráfico volta à altura f(0) = 1, sem relação com a concavidade.",
      v: { i: () => { const r = trocas(d2(lerF("x³ − 3x² + 1")), -10, 10); return unicoV(o.map((t) => mesmaLista(lista(t), r))); } },
    };
  })(),
  (() => {
    const o = ["Tem concavidade para cima", "Tem concavidade para baixo", "É crescente", "É decrescente", "Tem um ponto de inflexão"];
    return {
      d: "facil",
      e: "Se f''(x) > 0 em todos os pontos de um intervalo, o que se pode afirmar sobre o gráfico de f nesse intervalo?",
      o,
      x: "f''(x) > 0 significa que f' é crescente: as inclinações das tangentes aumentam da esquerda para a direita, e o gráfico se curva para cima, com concavidade voltada para cima. Um exemplo é f(x) = x² em (−1, 1).\n\nConcavidade para baixo corresponde a f'' < 0. É crescente confunde o sinal de f'' com o de f': x² tem f'' > 0 e decresce em (−1, 0). É decrescente falha com eˣ, que tem f'' > 0 e cresce. E não há inflexão, porque o sinal de f'' não muda no intervalo.",
      /* bateria com f'' > 0; concavidade conferida pela definição (ponto médio abaixo da corda) */
      v: {
        i: () => {
          const casos = [[(x) => x * x, -1, 1], [Math.exp, -1, 1], [(x) => Math.exp(-x), -1, 1], [(x) => x ** 4 + x * x, -2, 2], [(x) => 1 / x, 0.5, 3]];
          if (casos.some(([f, a, b]) => [0.1, 0.5, 0.9].some((t) => derivada2(f, a + (b - a) * t) <= 0))) throw new Error("caso fora da hipótese");
          const afirma = {
            "Tem concavidade para cima": casos.every(([f, a, b]) => convexa(f, a, b)),
            "Tem concavidade para baixo": casos.every(([f, a, b]) => convexa((x) => -f(x), a, b)),
            "É crescente": casos.every(([f, a, b]) => crescente(f, a, b)),
            "É decrescente": casos.every(([f, a, b]) => decrescente(f, a, b)),
            "Tem um ponto de inflexão": casos.every(([f, a, b]) => trocas(d2(f), a, b, 2000).length > 0),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Um máximo local", "Um mínimo local", "Um ponto de inflexão", "Uma raiz", "Uma assíntota vertical"];
    return {
      d: "facil",
      e: "A derivada de f passa de positiva a negativa em x = 3, e f é contínua ali. O que f tem em x = 3?",
      o,
      x: "É o teste da derivada primeira. Com f' > 0 antes de x = 3, a função sobe; com f' < 0 depois, ela desce. O ponto em que ela para de subir e começa a descer é um máximo local. Isso vale mesmo que f'(3) não exista, como num bico, desde que f seja contínua em x = 3.\n\nUm mínimo local ocorreria com f' passando de negativa a positiva. Um ponto de inflexão depende de f'', e não da troca de sinal de f'. Uma raiz é um valor de f igual a zero, sem relação com o sinal de f'. E uma assíntota vertical é incompatível com a continuidade em x = 3.",
      v: {
        i: () => {
          const casos = [(x) => -((x - 3) ** 2), (x) => 2 - Math.abs(x - 3), (x) => Math.cos(x - 3) + 5, (x) => 1 - (x - 3) ** 4];
          if (casos.some((f) => !(derivada(f, 2.8) > 0 && derivada(f, 3.2) < 0))) throw new Error("caso fora da hipótese");
          const afirma = {
            "Um máximo local": casos.every((f) => maxLocal(f, 3)),
            "Um mínimo local": casos.every((f) => minLocal(f, 3)),
            "Um ponto de inflexão": casos.every((f) => inflexao(f, 3)),
            "Uma raiz": casos.every((f) => Math.abs(f(3)) < 1e-12),
            "Uma assíntota vertical": casos.every((f) => !Number.isFinite(f(3)) || Math.abs(f(3 + 1e-9)) > 1e6),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["(−∞, 2)", "(2, +∞)", "(−∞, 0)", "ℝ", "(0, 2)"];
    return {
      d: "facil",
      e: "Sabe-se que f''(x) = 6x − 12. Em que intervalo o gráfico de f é côncavo para baixo?",
      o,
      x: "O gráfico é côncavo para baixo onde f''(x) < 0, isto é, 6x − 12 < 0, ou x < 2: o intervalo é (−∞, 2). Em x = 2 a derivada segunda troca de sinal, e ali fica o ponto de inflexão; depois dele, a concavidade é para cima.\n\n(2, +∞) é onde a concavidade é para cima. (−∞, 0) olha o sinal de 6x e esquece o termo −12. ℝ supõe que a concavidade não muda, mas f'' é uma reta que troca de sinal. E (0, 2) é só uma parte do intervalo certo.",
      /* uma f com essa derivada segunda, f(x) = x³ − 6x², derivada numericamente */
      v: { i: () => qualConjunto(sinal(d2((x) => x ** 3 - 6 * x * x), (v) => v < 0), o) },
    };
  })(),
  (() => {
    const o = ["(−2, 2)", "(−∞, −2) ∪ (2, +∞)", "(−2√3, 2√3)", "(−∞, 0)", "(0, +∞)"];
    return {
      d: "facil",
      e: "Em que intervalo a função f(x) = x³ − 12x é decrescente?",
      o,
      x: "A derivada f'(x) = 3x² − 12 = 3(x² − 4) é negativa quando x² < 4, isto é, em (−2, 2). Ali a função decresce, entre o máximo local em x = −2 e o mínimo local em x = 2.\n\n(−∞, −2) ∪ (2, +∞) é onde a função cresce. (−2√3, 2√3) esquece o fator 3 de 3x² e resolve x² − 12 < 0. (−∞, 0) é onde o gráfico é côncavo para baixo, pelo sinal de f''(x) = 6x. E (0, +∞) é onde ele é côncavo para cima.",
      v: { i: () => qualConjunto(sinal(d(lerF("x³ − 12x")), (v) => v < 0), o) },
    };
  })(),
  (() => {
    const o = ["(−1, 1)", "(−∞, −1) ∪ (1, +∞)", "(−√3, √3)", "(−√6, √6)", "Em nenhum intervalo"];
    return {
      d: "facil",
      e: "Em que intervalo o gráfico de f(x) = x⁴ − 6x² é côncavo para baixo?",
      o,
      x: "A derivada segunda é f''(x) = 12x² − 12 = 12(x² − 1), negativa quando x² < 1. O gráfico é côncavo para baixo em (−1, 1) e côncavo para cima fora desse intervalo, com inflexões em x = ±1.\n\n(−∞, −1) ∪ (1, +∞) é onde a concavidade é para cima. (−√3, √3) vai de um mínimo ao outro, mas a concavidade muda antes, em ±1. (−√6, √6) é onde a própria função é negativa. E em nenhum intervalo supõe que o termo x⁴, dominante, torna o gráfico todo côncavo para cima, o que só vale longe da origem.",
      v: { i: () => qualConjunto(sinal(d2(lerF("x⁴ − 6x²")), (v) => v < 0), o) },
    };
  })(),
  (() => {
    const o = ["f tem mínimo em x = 1, de valor 4", "f tem máximo em x = 1, de valor 4", "f é crescente em toda a reta", "O gráfico tem inflexão em x = 1", "f(x) > 4 só para x > 1"];
    return {
      d: "facil",
      e: "Uma função contínua tem f'(x) < 0 para x < 1, f'(x) > 0 para x > 1 e f(1) = 4. Qual afirmação é correta?",
      o,
      x: "A função decresce até x = 1 e cresce depois: pelo teste da derivada primeira, x = 1 é um mínimo local. Como ela decresce em toda a parte esquerda e cresce em toda a direita, é também o mínimo absoluto, de valor f(1) = 4.\n\nMáximo exigiria f' passando de positiva a negativa. Crescente em toda a reta contradiz f' < 0 para x < 1. A inflexão depende da concavidade, que as informações sobre f' não determinam; em (x − 1)² + 4, por exemplo, não há inflexão. E f(x) > 4 vale também para x < 1, pois a função decresce até o mínimo.",
      v: {
        i: () => {
          const casos = [(x) => (x - 1) ** 2 + 4, (x) => Math.abs(x - 1) + 4, (x) => Math.exp((x - 1) ** 2) + 3, (x) => (x - 1) ** 4 + 4];
          const xs = Array.from({ length: 41 }, (_, k) => -4 + k / 4).filter((x) => x !== 1);
          const afirma = {
            "f tem mínimo em x = 1, de valor 4": casos.every((f) => minLocal(f, 1) && Math.abs(f(1) - 4) < 1e-12),
            "f tem máximo em x = 1, de valor 4": casos.every((f) => maxLocal(f, 1) && Math.abs(f(1) - 4) < 1e-12),
            "f é crescente em toda a reta": casos.every((f) => crescente(f, -4, 6)),
            "O gráfico tem inflexão em x = 1": casos.every((f) => inflexao(f, 1)),
            "f(x) > 4 só para x > 1": casos.every((f) => xs.every((x) => (f(x) > 4) === (x > 1))),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Crescente e com concavidade para cima em toda a reta", "Crescente e com concavidade para baixo", "Decrescente e com concavidade para cima", "Crescente, com inflexão em x = 0", "Crescente até x = 0 e decrescente depois"];
    return {
      d: "facil",
      e: "Como é o gráfico da função exponencial f(x) = eˣ quanto a crescimento e concavidade?",
      o,
      x: "Como f'(x) = eˣ > 0 e f''(x) = eˣ > 0 para todo x, a função é crescente e o gráfico tem concavidade para cima em toda a reta: sobe cada vez mais depressa. Não há extremos nem inflexões.\n\nConcavidade para baixo é a do logaritmo, a inversa da exponencial. Decrescente é o caso de e^(−x), que também é côncava para cima. Não há inflexão em x = 0: f''(0) = 1 > 0. E a exponencial nunca decresce, porque a derivada nunca é negativa.",
      v: {
        i: () => {
          const f = Math.exp, xs = Array.from({ length: 41 }, (_, k) => -5 + k / 4);
          const cresce = xs.every((x) => derivada(f, x) > 0), decresce = xs.every((x) => derivada(f, x) < 0), cima = xs.every((x) => derivada2(f, x) > 0), baixo = xs.every((x) => derivada2(f, x) < 0);
          const afirma = {
            "Crescente e com concavidade para cima em toda a reta": cresce && cima,
            "Crescente e com concavidade para baixo": cresce && baixo,
            "Decrescente e com concavidade para cima": decresce && cima,
            "Crescente, com inflexão em x = 0": cresce && inflexao(f, 0),
            "Crescente até x = 0 e decrescente depois": xs.filter((x) => x < 0).every((x) => derivada(f, x) > 0) && xs.filter((x) => x > 0).every((x) => derivada(f, x) < 0),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["x = 0 e x = 2", "x = 0 e x = 3", "Só x = 3", "Só x = 2", "x = 0 e x = 4"];
    return {
      d: "facil",
      e: "Em quais abscissas o gráfico de f(x) = x⁴ − 4x³ tem pontos de inflexão?",
      o,
      x: "A derivada segunda é f''(x) = 12x² − 24x = 12x(x − 2), que troca de sinal em x = 0 e em x = 2: positiva antes de 0, negativa entre 0 e 2 e positiva depois. As duas abscissas são pontos de inflexão.\n\nx = 0 e x = 3 são os pontos críticos, onde f'(x) = 4x²(x − 3) se anula. Só x = 3 é o mínimo local. Só x = 2 esquece a raiz x = 0 da derivada segunda. E x = 0 e x = 4 são as raízes da própria função, x³(x − 4) = 0.",
      v: { i: () => { const r = trocas(d2(lerF("x⁴ − 4x³")), -10, 10); return unicoV(o.map((t) => mesmaLista(lista(t), r))); } },
    };
  })(),
  (() => {
    const o = ["Cresce, cada vez mais devagar", "Cresce, cada vez mais depressa", "Decresce, cada vez mais devagar", "Decresce, cada vez mais depressa", "É um segmento de reta crescente"];
    return {
      d: "facil",
      e: "Num intervalo em que f'(x) > 0 e f''(x) < 0, como se comporta o gráfico de f?",
      o,
      x: "f' > 0 diz que a função cresce; f'' < 0 diz que f' diminui, isto é, as inclinações vão ficando menores. A função sobe, mas cada vez mais devagar, com concavidade para baixo. É o caso de √x e de ln x para x > 0. Num gráfico de posição por tempo, seria um carro que avança, mas freando.\n\nCresce cada vez mais depressa corresponde a f'' > 0, como eˣ. Decresce contradiz f' > 0. E um segmento de reta tem f'' = 0, com inclinação constante, e não decrescente.",
      v: {
        i: () => {
          const casos = [[Math.sqrt, 1, 4], [Math.log, 1, 5], [Math.atan, 0.5, 3], [(x) => 1 - Math.exp(-x), 0, 3]];
          const pts = (a, b) => Array.from({ length: 21 }, (_, k) => a + ((b - a) * k) / 20);
          const afirma = {
            "Cresce, cada vez mais devagar": casos.every(([f, a, b]) => crescente(f, a, b) && decrescente(d(f), a, b)),
            "Cresce, cada vez mais depressa": casos.every(([f, a, b]) => crescente(f, a, b) && crescente(d(f), a, b)),
            "Decresce, cada vez mais devagar": casos.every(([f, a, b]) => decrescente(f, a, b) && crescente(d(f), a, b)),
            "Decresce, cada vez mais depressa": casos.every(([f, a, b]) => decrescente(f, a, b) && decrescente(d(f), a, b)),
            "É um segmento de reta crescente": casos.every(([f, a, b]) => pts(a, b).every((x) => Math.abs(derivada2(f, x)) < 1e-6)),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["(−∞, −1) ∪ (3, +∞)", "(−1, 3)", "(3, +∞)", "(1, +∞)", "(−∞, −3) ∪ (1, +∞)"];
    return {
      d: "media",
      e: "Em que intervalos a função f(x) = x³ − 3x² − 9x + 5 é crescente?",
      o,
      x: "A derivada é f'(x) = 3x² − 6x − 9 = 3(x + 1)(x − 3), positiva fora das raízes −1 e 3. A função cresce em (−∞, −1) ∪ (3, +∞), com máximo local em x = −1 e mínimo local em x = 3.\n\n(−1, 3) é onde ela decresce. (3, +∞) esquece o primeiro trecho de crescimento, antes do máximo. (1, +∞) é onde o gráfico é côncavo para cima, pelo sinal de f''(x) = 6x − 6. E (−∞, −3) ∪ (1, +∞) fatora com os sinais trocados, como se fosse 3(x + 3)(x − 1).",
      v: { i: () => qualConjunto(sinal(d(lerF("x³ − 3x² − 9x + 5")), (v) => v > 0), o) },
    };
  })(),
  (() => {
    const o = ["3", "1", "2", "0", "4"];
    return {
      d: "media",
      e: "Quantos pontos de inflexão tem o gráfico de f(x) = x/(x² + 1)?",
      o,
      x: "A derivada é f'(x) = (1 − x²)/(x² + 1)², e a segunda, f''(x) = 2x(x² − 3)/(x² + 1)³. O numerador troca de sinal em x = 0 e em x = ±√3, e o denominador é sempre positivo. São três pontos de inflexão.\n\n1 conta só a origem, onde a simetria chama a atenção. 2 conta os extremos em x = ±1, que não são inflexões. 0 supõe que uma função limitada não muda de concavidade. E 4 junta os dois extremos às duas inflexões em ±√3 e deixa de fora a origem.",
      v: { i: () => qual(trocas(d2(lerF("x/(x² + 1)")), -30, 30, 60000).length, o) },
    };
  })(),
  (() => {
    const o = ["x = 2 − √2 e x = 2 + √2", "x = 0 e x = 2", "x = 1 e x = 3", "Só x = 2", "x = −2 − √2 e x = −2 + √2"];
    return {
      d: "media",
      e: "Em quais abscissas o gráfico de f(x) = x² · e^(−x) muda de concavidade?",
      o,
      x: "Derivando duas vezes, com as regras do produto e da cadeia: f'(x) = (2x − x²)e^(−x) e f''(x) = (x² − 4x + 2)e^(−x). A exponencial é sempre positiva, então o sinal de f'' é o de x² − 4x + 2, que troca de sinal nas raízes x = 2 ± √2, isto é, em x ≈ 0,59 e x ≈ 3,41.\n\nx = 0 e x = 2 são os pontos críticos, raízes de f'. x = 1 e x = 3 vêm de x² − 4x + 3, com o termo constante errado. Só x = 2 fica com a média das duas raízes. E x = −2 ± √2 troca o sinal das raízes.",
      v: { i: () => { const r = trocas(d2(lerF("x² · e^(−x)")), -5, 30); return unicoV(o.map((t) => mesmaLista(lista(t), r, 1e-4))); } },
    };
  })(),
  (() => {
    const o = ["Máximo local em x = 2 e mínimo local em x = 5", "Mínimo local em x = 2 e máximo local em x = 5", "Máximos locais em x = 2 e x = 5", "Só um máximo local, em x = 2", "Inflexões em x = 2 e x = 5"];
    return {
      d: "media",
      e: "Uma função contínua tem f'(x) > 0 para x < 2, f'(x) < 0 para 2 < x < 5 e f'(x) > 0 para x > 5. Quais são os seus extremos locais?",
      o,
      x: "Pelo teste da derivada primeira: em x = 2, f' passa de positiva a negativa, e a função para de subir e começa a descer, o que dá um máximo local. Em x = 5, f' passa de negativa a positiva, e há um mínimo local.\n\nTrocar os tipos inverte o teste. Máximos nos dois pontos ignora que o sentido da variação muda de maneira oposta em cada um. Só um máximo esquece a volta ao crescimento depois de x = 5. E inflexão depende da concavidade, e não da troca de sinal de f'.",
      /* uma f com esse padrão de sinais, obtida integrando numericamente f'(t) = (t − 2)(t − 5)(2 + sen t) */
      v: {
        i: () => {
          const g = (t) => (t - 2) * (t - 5) * (2 + Math.sin(t)), f = (x) => integra(g, 0, x, 400);
          const afirma = {
            "Máximo local em x = 2 e mínimo local em x = 5": maxLocal(f, 2) && minLocal(f, 5),
            "Mínimo local em x = 2 e máximo local em x = 5": minLocal(f, 2) && maxLocal(f, 5),
            "Máximos locais em x = 2 e x = 5": maxLocal(f, 2) && maxLocal(f, 5),
            "Só um máximo local, em x = 2": maxLocal(f, 2) && !minLocal(f, 5) && !maxLocal(f, 5),
            "Inflexões em x = 2 e x = 5": inflexao(f, 2) && inflexao(f, 5),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["(−1, 1)", "(−∞, −1) ∪ (1, +∞)", "(0, +∞)", "ℝ", "(−∞, 0)"];
    return {
      d: "media",
      e: "Em que intervalo o gráfico de f(x) = ln(x² + 1) é côncavo para cima?",
      o,
      x: "Com f'(x) = 2x/(x² + 1), a regra do quociente dá f''(x) = (2(x² + 1) − 4x²)/(x² + 1)² = 2(1 − x²)/(x² + 1)². O sinal é o de 1 − x², positivo em (−1, 1): ali a concavidade é para cima, e fora dele é para baixo, com inflexões em x = ±1.\n\n(−∞, −1) ∪ (1, +∞) é onde a concavidade é para baixo. (0, +∞) é onde a função cresce. ℝ supõe que, por ter um mínimo, o gráfico é todo côncavo para cima. E (−∞, 0) é onde a função decresce.",
      v: { i: () => qualConjunto(sinal(d2(lerF("ln(x² + 1)")), (v) => v > 0), o) },
    };
  })(),
  (() => {
    const o = ["Máximo local 0, em x = 0, e mínimo local 4, em x = 2", "Mínimo local 0, em x = 0, e máximo local 4, em x = 2", "Só o mínimo local 0, em x = 0", "Máximo local 4, em x = 2, e nenhum mínimo", "Não há extremos, por causa da assíntota"];
    return {
      d: "media",
      e: "Quais são os extremos locais da função f(x) = x²/(x − 1)?",
      o,
      x: "Pela regra do quociente, f'(x) = (2x(x − 1) − x²)/(x − 1)² = x(x − 2)/(x − 1)². A derivada passa de positiva a negativa em x = 0 e de negativa a positiva em x = 2: há máximo local f(0) = 0 e mínimo local f(2) = 4. O máximo local é menor que o mínimo local, o que é possível porque a assíntota x = 1 separa os dois ramos.\n\nTrocar os tipos só porque 0 < 4 confunde extremo local com global. Só o mínimo em x = 0 erra o tipo e esquece x = 2. Máximo em x = 2 também erra o tipo. E a assíntota não impede extremos: cada ramo tem o seu.",
      /* extremos: trocas de sinal da derivada numérica em cada ramo, classificadas por comparação de valores */
      v: {
        i: () => {
          const f = lerF("x²/(x − 1)"), ext = [[-5, 0.99], [1.01, 8]].flatMap(([a, b]) => trocas(d(f), a, b)).map((x) => ({ tipo: maxLocal(f, x) ? "max" : minLocal(f, x) ? "min" : "?", x, y: f(x) }));
          const tem = (tipo, x, y) => ext.some((z) => z.tipo === tipo && Math.abs(z.x - x) < 1e-6 && Math.abs(z.y - y) < 1e-6);
          const afirma = {
            "Máximo local 0, em x = 0, e mínimo local 4, em x = 2": ext.length === 2 && tem("max", 0, 0) && tem("min", 2, 4),
            "Mínimo local 0, em x = 0, e máximo local 4, em x = 2": ext.length === 2 && tem("min", 0, 0) && tem("max", 2, 4),
            "Só o mínimo local 0, em x = 0": ext.length === 1 && tem("min", 0, 0),
            "Máximo local 4, em x = 2, e nenhum mínimo": ext.length === 1 && tem("max", 2, 4),
            "Não há extremos, por causa da assíntota": ext.length === 0,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Sim: a concavidade muda ali", "Não, porque f''(0) não existe", "Não, porque f'(0) não existe", "Sim, e f''(0) = 0", "Não: é côncavo para baixo em toda a reta"];
    return {
      d: "media",
      e: "O gráfico de f(x) = ∛x tem ponto de inflexão na origem?",
      o,
      x: "Para x ≠ 0, f'(x) = 1/(3∛(x²)) e f''(x) = −2/(9x∛(x²)), positiva para x < 0 e negativa para x > 0. A concavidade muda na origem, onde a função é contínua: há inflexão, com tangente vertical, mesmo sem f' e f'' definidas ali.\n\nA falta de f''(0) não impede a inflexão: o que conta é a troca de concavidade num ponto em que f é contínua. O mesmo vale para f'(0), que também não existe, porque a tangente é vertical. f''(0) = 0 seria impossível, já que nem f'(0) existe. E a concavidade é para cima à esquerda da origem.",
      v: {
        i: () => {
          const f = Math.cbrt, muda = derivada2(f, -0.1) > 0 && derivada2(f, 0.1) < 0, semDerivada = Math.abs((f(1e-9) - f(0)) / 1e-9) > 1e3;
          const afirma = {
            "Sim: a concavidade muda ali": muda,
            "Não, porque f''(0) não existe": !muda,
            "Não, porque f'(0) não existe": !muda,
            "Sim, e f''(0) = 0": muda && !semDerivada,
            "Não: é côncavo para baixo em toda a reta": derivada2(f, -0.1) < 0 && derivada2(f, 0.1) < 0,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["1", "3", "2", "0", "4"];
    return {
      d: "media",
      e: "Quantas raízes reais tem a equação x³ + x − 1 = 0?",
      o,
      x: "A função f(x) = x³ + x − 1 tem derivada f'(x) = 3x² + 1 > 0 para todo x: é estritamente crescente, e cruza cada altura no máximo uma vez. Como f(0) = −1 < 0 e f(1) = 1 > 0, ela cruza o zero exatamente uma vez, entre 0 e 1 (perto de 0,68).\n\n3 é o número máximo de raízes de um polinômio de grau 3, mas uma função sempre crescente não volta a cruzar o eixo. 2 também exigiria uma mudança de sentido. 0 esquece que todo polinômio de grau ímpar tem pelo menos uma raiz real. E 4 excede o grau: um polinômio de grau 3 tem no máximo 3 raízes.",
      v: { i: () => qual(zeros(lerF("x³ + x − 1"), -10, 10).length, o) },
    };
  })(),
  (() => {
    const o = ["2", "1", "0", "3", "Infinitas"];
    return {
      d: "media",
      e: "Quantas soluções reais tem a equação eˣ = x + 2?",
      o,
      x: "Considere g(x) = eˣ − x − 2. A derivada g'(x) = eˣ − 1 se anula só em x = 0, onde g tem mínimo, g(0) = −1 < 0. Como g vai a +∞ quando x → ±∞, ela cruza o zero uma vez antes do mínimo e outra depois: são 2 soluções, perto de x ≈ −1,84 e x ≈ 1,15. Geometricamente, a reta y = x + 2 corta o gráfico de eˣ, côncavo para cima, em dois pontos.\n\n1 supõe que a reta cruza a exponencial uma vez só. 0 supõe que eˣ fica sempre acima da reta, o que vale para y = x + 1, tangente em x = 0, mas não para y = x + 2. 3 exigiria uma mudança de concavidade, que eˣ não tem. E infinitas é impossível, porque g tem um único mínimo e é monótona de cada lado.",
      v: { i: () => qual(zeros(lerF("eˣ − x − 2"), -10, 10).length, o) },
    };
  })(),
  (() => {
    const o = ["Só x = 1", "x = 1 e x = −2", "Só x = −2", "x = −1 e x = 2", "Em nenhuma"];
    return {
      d: "media",
      e: "Sabe-se que f''(x) = (x − 1)(x + 2)². Em quais abscissas o gráfico de f tem ponto de inflexão?",
      o,
      x: "Inflexão exige troca de sinal de f''. O fator (x + 2)² nunca é negativo, e o sinal de f'' é o de x − 1: negativo antes de 1 e positivo depois. Em x = −2, f'' se anula, mas continua negativa dos dois lados; não há troca de concavidade. Só x = 1 é inflexão.\n\nx = 1 e x = −2 contam toda raiz de f'' como inflexão, esquecendo que a raiz dupla não troca o sinal. Só x = −2 fica justamente com a raiz que não serve. x = −1 e x = 2 trocam os sinais das raízes. E em nenhuma ignora a troca de sinal em x = 1.",
      v: { i: () => { const r = trocas((x) => (x - 1) * (x + 2) ** 2, -10, 10); return unicoV(o.map((t) => (/nenhuma/i.test(t) ? r.length === 0 : mesmaLista(lista(t), r)))); } },
    };
  })(),
  (() => {
    const o = ["1", "2", "3", "0", "4"];
    return {
      d: "media",
      e: "Quantos extremos locais tem a função f(x) = x⁴ − 4x³ + 10?",
      o,
      x: "A derivada f'(x) = 4x³ − 12x² = 4x²(x − 3) se anula em x = 0 e em x = 3. Em x = 3 ela troca de sinal, de negativa para positiva, e há um mínimo local. Em x = 0, o fator x² não troca de sinal: f' é negativa dos dois lados, e a função só continua decrescendo. Há um único extremo local.\n\n2 conta os dois pontos críticos, sem verificar a troca de sinal. 3 é o grau de f', o número máximo das suas raízes. 0 esquece o mínimo em x = 3. E 4 é o grau de f.",
      v: { i: () => qual(trocas(d(lerF("x⁴ − 4x³ + 10")), -10, 10).length, o) },
    };
  })(),
  (() => {
    const o = ["a = −3 e b = 5", "a = 3 e b = −1", "a = −3 e b = 3", "a = −6 e b = 8", "a = −3/2 e b = 7/2"];
    return {
      d: "media",
      e: "Para que o gráfico de f(x) = x³ + ax² + b tenha ponto de inflexão em (1, 3), quais devem ser os valores de a e b?",
      o,
      x: "A inflexão em x = 1 exige f''(1) = 0 com troca de sinal. Como f''(x) = 6x + 2a, a condição é 6 + 2a = 0, e a = −3; f'' é uma reta, e troca de sinal. O ponto (1, 3) está no gráfico: f(1) = 1 − 3 + b = 3, e b = 5.\n\na = 3 e b = −1 erra o sinal de a. a = −3 e b = 3 usa f(1) = b, esquecendo as parcelas 1 + a. a = −6 e b = 8 esquece o fator 2 de 2a na derivada segunda. E a = −3/2 e b = 7/2 exige f'(1) = 0, condição de ponto crítico, e não de inflexão.",
      v: { i: () => unicoV(o.map((t) => { const m = t.match(/^a = (\S+) e b = (\S+)$/), A = num(m[1]), B = num(m[2]), f = (x) => x ** 3 + A * x * x + B; return inflexao(f, 1) && trocas(d2(f), 0.9, 1.1, 200).length === 1 && Math.abs(f(1) - 3) < 1e-9; })) },
    };
  })(),
  (() => {
    const o = ["(−∞, −1)", "(−1, +∞)", "(−∞, 0)", "(−∞, −2)", "Em nenhum intervalo"];
    return {
      d: "media",
      e: "Em que intervalo a função f(x) = x · eˣ é decrescente?",
      o,
      x: "Pela regra do produto, f'(x) = eˣ + x · eˣ = eˣ(1 + x). Como eˣ > 0, o sinal de f' é o de 1 + x: negativo para x < −1. A função decresce em (−∞, −1) e cresce depois, com mínimo em x = −1, de valor −1/e.\n\n(−1, +∞) é onde ela cresce. (−∞, 0) é onde a função é negativa, e não onde decresce. (−∞, −2) é onde o gráfico é côncavo para baixo, pelo sinal de f''(x) = eˣ(x + 2). E em nenhum intervalo supõe que o fator eˣ faz a função só crescer.",
      v: { i: () => qualConjunto(sinal(d(lerF("x · eˣ")), (v) => v < 0), o) },
    };
  })(),
  (() => {
    const o = ["(0, +∞)", "(−∞, 0)", "ℝ", "(−1, 1)", "Em nenhum intervalo"];
    return {
      d: "media",
      e: "Onde a curva y = arctg x se curva para baixo, isto é, tem a concavidade voltada para baixo?",
      o,
      x: "Com f'(x) = 1/(1 + x²), a derivada segunda é f''(x) = −2x/(1 + x²)², negativa para x > 0. O gráfico é côncavo para baixo em (0, +∞) e côncavo para cima em (−∞, 0), com inflexão na origem, onde a inclinação é máxima.\n\n(−∞, 0) é onde a concavidade é para cima. ℝ esquece a troca de concavidade na origem. (−1, 1) é o intervalo em que a inclinação 1/(1 + x²) supera 1/2, sem relação com a concavidade. E em nenhum intervalo supõe que uma função crescente não pode ser côncava para baixo.",
      v: { i: () => qualConjunto(sinal(d2(Math.atan), (v) => v < 0), o) },
    };
  })(),
  (() => {
    const o = ["x = 2", "x = 1 e x = 3", "x = 1", "x = 3", "Não há inflexão"];
    return {
      d: "media",
      e: "O gráfico de f' é uma parábola com a concavidade para cima que corta o eixo x em x = 1 e em x = 3. Em que abscissa o gráfico de f tem ponto de inflexão?",
      o,
      x: "A inflexão de f ocorre onde f'' troca de sinal, isto é, onde f' passa de decrescente a crescente: no vértice da parábola de f', no ponto médio das raízes, x = 2. Por exemplo, com f'(x) = (x − 1)(x − 3), f''(x) = 2x − 4 troca de sinal em x = 2.\n\nx = 1 e x = 3 são as raízes de f', os extremos de f: um máximo em 1 e um mínimo em 3. Cada uma delas, isolada, comete o mesmo engano pela metade. E há inflexão, sim: toda cúbica, como a f que tem essa derivada, tem exatamente uma.",
      /* f(x) = x³/3 − 2x² + 3x tem f'(x) = (x − 1)(x − 3); inflexões pela derivada segunda numérica */
      v: { i: () => { const r = trocas(d2((x) => x ** 3 / 3 - 2 * x * x + 3 * x), -10, 10); return unicoV(o.map((t) => (/^Não há/.test(t) ? r.length === 0 : mesmaLista(lista(t), r)))); } },
    };
  })(),
  (() => {
    const o = ["Sobe até (1, 4), desce até (3, 0) e depois sobe", "Desce até (1, 4), sobe até (3, 0) e depois desce", "Sobe sempre", "Sobe até (3, 0) e depois desce", "Desce até (1, 4) e depois sobe sempre"];
    return {
      d: "media",
      e: "Qual descrição corresponde ao gráfico de f(x) = x³ − 6x² + 9x, que passa por (1, 4) e (3, 0)?",
      o,
      x: "A derivada f'(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3) é positiva antes de 1, negativa entre 1 e 3 e positiva depois de 3. A função sobe até o máximo local (1, 4), desce até o mínimo local (3, 0), onde toca o eixo x, e volta a subir.\n\nDescer até (1, 4) e subir até (3, 0) inverte os sinais de f'. Sobe sempre ignora o trecho em que f' < 0. Subir até (3, 0) e descer depois contradiz os valores: (1, 4) é mais alto que (3, 0). E descer até (1, 4) e subir sempre depois erra o primeiro trecho e esquece a descida entre 1 e 3.",
      /* sinal da derivada numérica em cada trecho; cada descrição vira o padrão de sinais que ela afirma */
      v: {
        i: () => {
          const f = lerF("x³ − 6x² + 9x");
          if (Math.abs(f(1) - 4) > 1e-12 || Math.abs(f(3)) > 1e-12) throw new Error("pontos fora do gráfico");
          const trecho = (a, b) => { const s = Array.from({ length: 21 }, (_, k) => Math.sign(derivada(f, a + ((b - a) * k) / 20))); return s.every((v) => v === s[0]) ? (s[0] > 0 ? "+" : "−") : "?"; };
          const real = trecho(-2, 0.8) + trecho(1.2, 2.8) + trecho(3.2, 6);
          const padrao = { "Sobe até (1, 4), desce até (3, 0) e depois sobe": "+−+", "Desce até (1, 4), sobe até (3, 0) e depois desce": "−+−", "Sobe sempre": "+++", "Sobe até (3, 0) e depois desce": "++−", "Desce até (1, 4) e depois sobe sempre": "−++" };
          return unicoV(o.map((t) => padrao[t] === real));
        },
      },
    };
  })(),
  (() => {
    const o = ["(−1, 12)", "(1, −4)", "(−3, 28)", "(−1, 0)", "(0, 1)"];
    return {
      d: "media",
      e: "Qual é o ponto de inflexão do gráfico de f(x) = x³ + 3x² − 9x + 1?",
      o,
      x: "A derivada segunda é f''(x) = 6x + 6, que troca de sinal em x = −1. O ponto de inflexão é (−1, f(−1)) = (−1, −1 + 3 + 9 + 1) = (−1, 12). Ele fica exatamente no meio do caminho entre o máximo local (−3, 28) e o mínimo local (1, −4), como em toda cúbica.\n\n(1, −4) é o mínimo local. (−3, 28) é o máximo local. (−1, 0) acerta a abscissa, mas usa o valor de f''(−1) = 0 como ordenada. E (0, 1) é onde o gráfico corta o eixo y.",
      v: { i: () => { const f = lerF("x³ + 3x² − 9x + 1"), r = trocas(d2(f), -10, 10); if (r.length !== 1) throw new Error(`inflexões: ${r}`); return unicoV(o.map((t) => { const p = ponto(t); return !!p && Math.abs(p[0] - r[0]) < 1e-5 && Math.abs(p[1] - f(r[0])) < 1e-5; })); } },
    };
  })(),
  (() => {
    const o = ["3", "4", "2", "5", "7"];
    return {
      d: "media",
      e: "Quantas vezes o gráfico de f(x) = sen x muda de concavidade no intervalo aberto (0, 4π)?",
      o,
      x: "Com f''(x) = −sen x, a concavidade muda onde o seno troca de sinal: nos múltiplos de π. No intervalo aberto (0, 4π), eles são π, 2π e 3π, três inflexões, todas sobre o eixo x.\n\n4 conta os máximos e mínimos, em π/2, 3π/2, 5π/2 e 7π/2, que não são inflexões. 2 conta uma inflexão por volta completa. 5 inclui as extremidades 0 e 4π, que estão fora do intervalo aberto. E 7 soma os extremos às inflexões.",
      v: { i: () => qual(trocas(d2(Math.sin), 0.01, 4 * Math.PI - 0.01).length, o) },
    };
  })(),
  (() => {
    const o = ["Exatamente um ponto de inflexão", "Dois extremos locais", "Nenhum extremo local", "Concavidade para cima em toda a reta", "Um eixo de simetria vertical"];
    return {
      d: "media",
      e: "O que o gráfico de toda função polinomial de grau 3 necessariamente tem?",
      o,
      x: "Se f(x) = ax³ + bx² + cx + d, com a ≠ 0, então f''(x) = 6ax + 2b, uma função do primeiro grau, que tem uma única raiz, x = −b/(3a), e troca de sinal nela. Toda cúbica tem, portanto, exatamente um ponto de inflexão, que é também o seu centro de simetria.\n\nDois extremos locais nem sempre: x³ não tem nenhum. Nenhum extremo também falha: x³ − 3x tem dois. A concavidade muda na inflexão, então não é para cima em toda a reta. E a simetria da cúbica é em relação a um ponto, e não a um eixo vertical.",
      v: {
        i: () => {
          const fs = [(x) => x ** 3, (x) => x ** 3 - 3 * x, (x) => -2 * x ** 3 + x * x + 5, (x) => x ** 3 + x, (x) => 0.5 * x ** 3 - 2 * x * x + x - 1];
          const infl = (f) => trocas(d2(f), -20, 20, 4000).length, ext = (f) => trocas(d(f), -20, 20, 4000).length;
          const eixo = (f) => { for (let k = -500; k <= 500; k++) { const c = k / 100; if ([0.5, 1, 2].every((t) => Math.abs(f(c + t) - f(c - t)) < 1e-9)) return true; } return false; };
          const afirma = {
            "Exatamente um ponto de inflexão": fs.every((f) => infl(f) === 1),
            "Dois extremos locais": fs.every((f) => ext(f) === 2),
            "Nenhum extremo local": fs.every((f) => ext(f) === 0),
            "Concavidade para cima em toda a reta": fs.every((f) => [-5, -1, 0.5, 3].every((x) => derivada2(f, x) > 0)),
            "Um eixo de simetria vertical": fs.every(eixo),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Uma inflexão de tangente horizontal", "Um mínimo local", "Um máximo local", "Uma descontinuidade", "Um bico"];
    return {
      d: "media",
      e: "A função f(x) = (x − 1)³ + 2 é crescente em toda a reta, embora f'(1) = 0. O que o gráfico tem em x = 1?",
      o,
      x: "Com f'(x) = 3(x − 1)², a derivada se anula em x = 1, mas é positiva dos dois lados: a função não para de subir, e não há extremo. Já f''(x) = 6(x − 1) troca de sinal em x = 1: a concavidade passa de para baixo a para cima. O ponto (1, 2) é uma inflexão com tangente horizontal.\n\nMínimo e máximo locais exigiriam troca de sinal de f', que não acontece. A função é um polinômio, contínua em toda a reta, sem descontinuidade. E não há bico: a derivada existe em x = 1 e vale 0.",
      v: {
        i: () => {
          const f = (x) => (x - 1) ** 3 + 2, q = (h) => (f(1 + h) - f(1)) / h;
          const afirma = {
            "Uma inflexão de tangente horizontal": inflexao(f, 1) && Math.abs(derivada(f, 1)) < 1e-6,
            "Um mínimo local": minLocal(f, 1),
            "Um máximo local": maxLocal(f, 1),
            "Uma descontinuidade": Math.abs(f(1 + 1e-9) - f(1)) > 1e-6,
            "Um bico": Math.abs(q(1e-6) - q(-1e-6)) > 1e-3,
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Em (−∞, 2) e em (2, +∞), separadamente", "Em toda a reta real", "Só em (2, +∞)", "Em nenhum intervalo: ela é crescente", "Só em (−∞, 0)"];
    return {
      d: "media",
      e: "Onde a função f(x) = x/(x − 2) é decrescente?",
      o,
      x: "Pela regra do quociente, f'(x) = ((x − 2) − x)/(x − 2)² = −2/(x − 2)², negativa em todo o domínio. A função decresce em cada um dos intervalos (−∞, 2) e (2, +∞), mas não na união: f(1) = −1 é menor que f(3) = 3, embora 1 < 3. A assíntota x = 2 separa os dois ramos.\n\nToda a reta real inclui x = 2, fora do domínio, e ignora o salto da assíntota. Só (2, +∞) esquece o ramo da esquerda, que também decresce. Crescente contradiz o sinal de f'. E só (−∞, 0) é apenas um pedaço do ramo da esquerda.",
      v: {
        i: () => {
          const f = lerF("x/(x − 2)"), decr = (xs) => xs.every((x) => derivada(f, x) < 0), esq = [-8, -3, 0, 1, 1.9], dir = [2.1, 3, 5, 9];
          const afirma = {
            "Em (−∞, 2) e em (2, +∞), separadamente": decr(esq) && decr(dir),
            "Em toda a reta real": decr(esq) && decr(dir) && f(1) > f(3),
            "Só em (2, +∞)": decr(dir) && !decr(esq),
            "Em nenhum intervalo: ela é crescente": [...esq, ...dir].every((x) => derivada(f, x) > 0),
            "Só em (−∞, 0)": decr([-8, -3, -1]) && !decr([0.5, 1, 1.9]),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["2, e nenhum é extremo", "2, ambos máximos locais", "4, alternando máximos e mínimos", "Nenhum", "2: um máximo e um mínimo"];
    return {
      d: "media",
      e: "Quantos pontos de tangente horizontal tem o gráfico de f(x) = x + sen x no intervalo [0, 4π], e de que tipo são?",
      o,
      x: "A derivada f'(x) = 1 + cos x se anula quando cos x = −1, em x = π e x = 3π. Mas 1 + cos x nunca é negativa: a função é crescente em todo o intervalo, e esses pontos são inflexões com tangente horizontal, e não extremos. O gráfico sobe em degraus suaves.\n\nMáximos exigiriam f' passando de positiva a negativa. Quatro pontos contariam também onde sen x tem extremos, mas f' não se anula ali. Nenhum esquece que 1 + cos x chega a zero. E um máximo e um mínimo exigiriam trocas de sinal de f', que não acontecem.",
      /* zeros da derivada numérica, inclusive os de tangência; tipos por comparação de valores */
      v: {
        i: () => {
          const f = (x) => x + Math.sin(x), r = zeros(d(f), 0, 4 * Math.PI);
          const afirma = {
            "2, e nenhum é extremo": r.length === 2 && r.every((x) => !maxLocal(f, x) && !minLocal(f, x)),
            "2, ambos máximos locais": r.length === 2 && r.every((x) => maxLocal(f, x)),
            "4, alternando máximos e mínimos": r.length === 4,
            "Nenhum": r.length === 0,
            "2: um máximo e um mínimo": r.length === 2 && r.some((x) => maxLocal(f, x)) && r.some((x) => minLocal(f, x)),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["(−√2/2, √2/2)", "(−1, 1)", "(−∞, −√2/2) ∪ (√2/2, +∞)", "(0, +∞)", "(−√2, √2)"];
    return {
      d: "media",
      e: "Em que intervalo o gráfico da função f(x) = e^(−x²) é côncavo para baixo?",
      o,
      x: "Com f'(x) = −2x · e^(−x²), a regra do produto dá f''(x) = (4x² − 2)e^(−x²). O sinal é o de 4x² − 2, negativo quando x² < 1/2. O gráfico, em forma de sino, é côncavo para baixo em (−√2/2, √2/2), perto do topo, e côncavo para cima fora dele, nas caudas.\n\n(−1, 1) é o intervalo do sino e^(−x²/2), que tem outra escala. (−∞, −√2/2) ∪ (√2/2, +∞) é onde a concavidade é para cima. (0, +∞) é onde a função decresce. E (−√2, √2) resolve x² < 2 em vez de x² < 1/2.",
      v: { i: () => qualConjunto(sinal(d2(lerF("e^(−x²)")), (v) => v < 0), o, -5, 5) },
    };
  })(),
  (() => {
    const o = ["f(x) = eˣ + x²", "f(x) = x³", "f(x) = sen x", "f(x) = ln(x² + 1)", "f(x) = −x²"];
    return {
      d: "media",
      e: "Qual das funções tem gráfico côncavo para cima em toda a reta real?",
      o,
      x: "A condição é f''(x) > 0 para todo x. Para eˣ + x², f''(x) = eˣ + 2, sempre positiva: a soma de duas funções côncavas para cima continua côncava para cima. O termo x² garante a concavidade mesmo onde eˣ é pequeno.\n\nx³ tem f''(x) = 6x, negativa para x < 0. sen x tem f''(x) = −sen x, que troca de sinal a cada π. ln(x² + 1) é côncava para cima só em (−1, 1). E −x² tem f'' = −2, côncava para baixo em toda a reta.",
      v: { i: () => { const xs = Array.from({ length: 49 }, (_, k) => -6 + k / 4); return unicoV(o.map((t) => { const f = lerF(t); return xs.every((x) => derivada2(f, x) > 0); })); } },
    };
  })(),
  (() => {
    const o = ["x = 0 e x = 2", "Só x = 2", "x = 0 e x = 5", "Só x = 5", "x = 2 e x = 5"];
    return {
      d: "media",
      e: "Quais são os pontos críticos de f(x) = x^(2/3) · (x − 5), definida para todo x real?",
      o,
      x: "Escrevendo f(x) = x^(5/3) − 5x^(2/3), a derivada é f'(x) = (5/3)x^(2/3) − (10/3)x^(−1/3) = 5(x − 2)/(3∛x). Ela se anula em x = 2 e não existe em x = 0, onde o denominador se anula. Os dois são pontos críticos: em x = 0 há um máximo local, num bico, e em x = 2, um mínimo local.\n\nSó x = 2 esquece que os pontos em que f' não existe também são críticos. x = 0 e x = 5 são as raízes da função. Só x = 5 fica com uma raiz, que nem é ponto crítico. E x = 2 e x = 5 misturam o ponto crítico com uma raiz.",
      /* zeros da derivada numérica, mais os pontos da malha em que o quociente de Newton explode */
      v: {
        i: () => {
          const f = (x) => Math.cbrt(x * x) * (x - 5), anulam = [...zeros(d(f), -10, -0.01), ...zeros(d(f), 0.01, 10)];
          const explode = []; for (let k = 0; k <= 2000; k++) { const x = (k - 1000) / 100; if (Math.abs((f(x + 1e-8) - f(x)) / 1e-8) > 1e3) explode.push(x); }
          const criticos = [...anulam, ...explode];
          return unicoV(o.map((t) => mesmaLista(lista(t), criticos)));
        },
      },
    };
  })(),
  (() => {
    const o = ["Crescente e côncavo para baixo", "Crescente e côncavo para cima", "Decrescente e côncavo para baixo", "Decrescente e côncavo para cima", "Crescente, com inflexão em x = 1"];
    return {
      d: "media",
      e: "Uma função definida em (0, +∞) tem f'(x) = 1/x e f''(x) = −1/x². Como é o seu gráfico nesse intervalo?",
      o,
      x: "Como f'(x) = 1/x > 0 para x > 0, a função é crescente; como f''(x) = −1/x² < 0, o gráfico é côncavo para baixo em todo o intervalo. É o comportamento de ln x, que cresce sem limite, mas cada vez mais devagar; toda função com essas derivadas é ln x + C, para alguma constante C.\n\nCôncavo para cima exigiria f'' > 0. Decrescente exigiria f' < 0. E não há inflexão em x = 1: f'' é negativa em todo o intervalo, e x = 1 é só onde ln x se anula.",
      v: {
        i: () => {
          const f = Math.log;
          if ([0.5, 2, 7].some((x) => Math.abs(derivada(f, x) - 1 / x) > 1e-8 || Math.abs(derivada2(f, x) + 1 / (x * x)) > 1e-4)) throw new Error("ln não tem essas derivadas?");
          const xs = Array.from({ length: 50 }, (_, k) => 0.2 + k / 5), cresce = xs.every((x) => derivada(f, x) > 0), decresce = xs.every((x) => derivada(f, x) < 0), cima = xs.every((x) => derivada2(f, x) > 0), baixo = xs.every((x) => derivada2(f, x) < 0);
          const afirma = {
            "Crescente e côncavo para baixo": cresce && baixo,
            "Crescente e côncavo para cima": cresce && cima,
            "Decrescente e côncavo para baixo": decresce && baixo,
            "Decrescente e côncavo para cima": decresce && cima,
            "Crescente, com inflexão em x = 1": cresce && inflexao(f, 1),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Não tem inflexão, embora f''(0) = 0", "Tem inflexão em x = 0, porque f''(0) = 0", "Tem máximo local em x = 0", "É côncava para baixo perto de x = 0", "É decrescente em toda a reta"];
    return {
      d: "media",
      e: "Sobre a função f(x) = x⁴, que tem f'(0) = 0 e f''(0) = 0, qual afirmação é verdadeira?",
      o,
      x: "A derivada segunda f''(x) = 12x² se anula em x = 0, mas é positiva dos dois lados: a concavidade é para cima em toda a reta, e não há inflexão. Em x = 0 há um mínimo, pois f' = 4x³ passa de negativa a positiva. A condição f''(0) = 0 é necessária para uma inflexão onde f'' existe, mas não é suficiente.\n\nInflexão exigiria troca de sinal de f'', o que não acontece. Máximo contradiz x⁴ ≥ 0 = f(0). A concavidade é para cima, inclusive perto de 0. E a função decresce só para x < 0.",
      v: {
        i: () => {
          const f = (x) => x ** 4;
          const afirma = {
            "Não tem inflexão, embora f''(0) = 0": !inflexao(f, 0) && Math.abs(derivada2(f, 0)) < 1e-4,
            "Tem inflexão em x = 0, porque f''(0) = 0": inflexao(f, 0),
            "Tem máximo local em x = 0": maxLocal(f, 0),
            "É côncava para baixo perto de x = 0": derivada2(f, -0.1) < 0 && derivada2(f, 0.1) < 0,
            "É decrescente em toda a reta": [-3, -1, 1, 3].every((x) => derivada(f, x) < 0),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["x = 0, x = −√2/2 e x = √2/2", "Só x = 0", "x = −1 e x = 1", "x = −1, x = 0 e x = 1", "x = −√2/2 e x = √2/2"];
    return {
      d: "media",
      e: "Quais são as abscissas dos pontos de inflexão do polinômio f(x) = 3x⁵ − 5x³?",
      o,
      x: "A derivada segunda é f''(x) = 60x³ − 30x = 30x(2x² − 1), com raízes x = 0 e x = ±√2/2, todas simples; em cada uma, f'' troca de sinal. São três inflexões.\n\nSó x = 0 esquece as raízes de 2x² − 1. x = −1 e x = 1 são os extremos locais, onde f' = 15x²(x² − 1) troca de sinal. x = −1, x = 0 e x = 1 são as raízes de f', mas x = 0 é raiz dupla e não é extremo. E x = ±√2/2 esquece a raiz x = 0 de f''.",
      v: { i: () => { const r = trocas(d2(lerF("3x⁵ − 5x³")), -3, 3); return unicoV(o.map((t) => mesmaLista(lista(t), r))); } },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["3", "5", "1", "2", "4"];
    return {
      d: "dificil",
      e: "O polinômio x⁵ − 5x + 1 tem grau 5. Quantos zeros reais ele possui?",
      o,
      x: "Com f(x) = x⁵ − 5x + 1, a derivada f'(x) = 5x⁴ − 5 se anula em x = ±1. Há máximo local em x = −1, com f(−1) = −1 + 5 + 1 = 5 > 0, e mínimo local em x = 1, com f(1) = 1 − 5 + 1 = −3 < 0. A função vem de −∞, sobe até 5, desce até −3 e sobe para +∞: cruza o eixo três vezes, uma em cada trecho monótono.\n\n5 é o grau, o número máximo de raízes, mas as outras duas são complexas. 1 supõe a função sempre crescente. 2 é o número de pontos críticos. E 4 é o grau de f'.",
      v: { i: () => qual(zeros(lerF("x⁵ − 5x + 1"), -10, 10).length, o) },
    };
  })(),
  (() => {
    const o = ["−2 < k < 2", "−1 < k < 1", "k < −2 ou k > 2", "−2 ≤ k ≤ 2", "Para todo k real"];
    return {
      d: "dificil",
      e: "Para quais valores de k a equação x³ − 3x = k tem três soluções reais distintas?",
      o,
      x: "O gráfico de g(x) = x³ − 3x tem máximo local em x = −1, com g(−1) = 2, e mínimo local em x = 1, com g(1) = −2. Uma reta horizontal y = k corta o gráfico três vezes exatamente quando passa entre esses dois valores: −2 < k < 2.\n\n−1 < k < 1 usa as abscissas dos extremos no lugar dos valores. k < −2 ou k > 2 é onde há uma solução só. −2 ≤ k ≤ 2 inclui k = ±2, em que a reta tangencia o gráfico num extremo e há só duas soluções distintas. E para todo k falha fora de (−2, 2).",
      /* para uma amostra de k, as soluções são contadas por varredura (as de tangência incluídas) */
      v: {
        i: () => {
          const ks = [-3, -2, -1.9, -0.5, 0, 1.5, 1.99, 2, 2.2, 4], tres = (k) => zeros((x) => x ** 3 - 3 * x - k, -5, 5).length === 3;
          const cond = (t) => (/^Para todo/.test(t) ? () => true : lerCondicao(t.replace(/k/g, "x")));
          return unicoV(o.map((t) => { const p = cond(t); return ks.every((k) => p(k) === tres(k)); }));
        },
      },
    };
  })(),
  (() => {
    const o = ["−4 ≤ a ≤ 4", "−2 ≤ a ≤ 2", "−16 ≤ a ≤ 16", "a ≥ 0", "Só a = 0"];
    return {
      d: "dificil",
      e: "Para quais valores de a o gráfico de f(x) = x⁴ + ax³ + 6x² é côncavo para cima em toda a reta, sem nenhuma inflexão?",
      o,
      x: "A derivada segunda é f''(x) = 12x² + 6ax + 12. Para não haver troca de sinal, esse trinômio não pode ter duas raízes distintas: o discriminante precisa ser menor ou igual a zero, 36a² − 4 · 12 · 12 ≤ 0, ou a² ≤ 16, isto é, −4 ≤ a ≤ 4. Nos extremos, a = ±4, f'' tem raiz dupla e continua sem trocar de sinal.\n\n−2 ≤ a ≤ 2 esquece o fator 4 do discriminante: 36a² ≤ 144. −16 ≤ a ≤ 16 esquece a raiz quadrada no fim. a ≥ 0 supõe que só o sinal de a importa. E só a = 0 é um caso particular, e não o conjunto todo.",
      /* para uma amostra de a, as trocas de sinal da derivada segunda numérica são contadas */
      v: {
        i: () => {
          const as = [-5, -4, -3.5, -1, 0, 2.5, 4, 4.2, 6, 17];
          const semInflexao = (a) => { const f = (x) => x ** 4 + a * x ** 3 + 6 * x * x; return trocas(d2(f), -10, 10).length === 0 && [-3, -1, 0, 1, 3].every((x) => derivada2(f, x) >= -1e-6); };
          const cond = (t) => (/^Só a = 0$/.test(t) ? (a) => a === 0 : lerCondicao(t.replace(/a/g, "x")));
          return unicoV(o.map((t) => { const p = cond(t); return as.every((a) => p(a) === semInflexao(a)); }));
        },
      },
    };
  })(),
  (() => {
    const o = ["(e², e²/2)", "(e, e)", "(e², e²)", "(e³, e³/3)", "Em nenhum: é côncavo para cima para todo x > 1"];
    return {
      d: "dificil",
      e: "Em que ponto o gráfico de f(x) = x/ln x, para x > 1, muda de concavidade?",
      o,
      x: "Pela regra do quociente, f'(x) = (ln x − 1)/(ln x)², que se anula em x = e, o mínimo. Derivando de novo, f''(x) = (2 − ln x)/(x(ln x)³). Para x > 1, o denominador é positivo, e o sinal é o de 2 − ln x, que troca em x = e². A ordenada é f(e²) = e²/2, pois ln e² = 2.\n\n(e, e) é o mínimo local, onde f' se anula. (e², e²) acerta a abscissa, mas esquece de dividir por ln e² = 2. (e³, e³/3) resolve ln x = 3, com erro no numerador de f''. E o gráfico não é côncavo para cima em todo x > 1: depois de e², ele se curva para baixo.",
      v: { i: () => { const f = lerF("x/ln x"), r = trocas(d2(f), 1.05, 200); if (r.length !== 1) throw new Error(`inflexões: ${r}`); return unicoV(o.map((t) => { const p = ponto(t); return !!p && Math.abs(p[0] - r[0]) < 1e-5 && Math.abs(p[1] - f(r[0])) < 1e-5; })); } },
    };
  })(),
  (() => {
    const o = ["Côncavo para cima nos dois lados de x = 0, com mínimo local em (2, 3)", "Côncavo para baixo para x < 0, com máximo local em (−2, −1)", "Tem inflexão em x = 0", "Côncavo para cima só para x > 0", "Tem mínimo local em (2, 3) e máximo local em (−2, −1)"];
    return {
      d: "dificil",
      e: "Qual descrição do gráfico de f(x) = x + 4/x² está correta?",
      o,
      x: "A derivada é f'(x) = 1 − 8/x³, que se anula só em x = 2, e a segunda, f''(x) = 24/x⁴, é positiva para todo x ≠ 0. O gráfico é côncavo para cima nos dois ramos, e x = 2 é um mínimo local, com f(2) = 2 + 1 = 3. Há assíntota vertical em x = 0 e assíntota oblíqua y = x.\n\nPara x < 0, f'' também é positiva, e em x = −2 a derivada vale 1 − 8/(−8) = 2, e não zero: (−2, −1) está no gráfico, mas não é extremo. Não há inflexão em x = 0, que nem está no domínio. E a concavidade é para cima também à esquerda.",
      v: {
        i: () => {
          const f = lerF("x + 4/x²"), esq = Array.from({ length: 40 }, (_, k) => -10 + k * 0.245), dir = esq.map((x) => -x);
          const cimaE = esq.every((x) => derivada2(f, x) > 0), cimaD = dir.every((x) => derivada2(f, x) > 0), baixoE = esq.every((x) => derivada2(f, x) < 0);
          const afirma = {
            "Côncavo para cima nos dois lados de x = 0, com mínimo local em (2, 3)": cimaE && cimaD && minLocal(f, 2) && Math.abs(f(2) - 3) < 1e-12,
            "Côncavo para baixo para x < 0, com máximo local em (−2, −1)": baixoE && maxLocal(f, -2),
            "Tem inflexão em x = 0": Number.isFinite(f(0)) && inflexao(f, 0),
            "Côncavo para cima só para x > 0": cimaD && !cimaE,
            "Tem mínimo local em (2, 3) e máximo local em (−2, −1)": minLocal(f, 2) && maxLocal(f, -2),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["x = 3π/4 e x = 7π/4", "x = π/4 e x = 5π/4", "x = π/2 e x = 3π/2", "x = 0, x = π e x = 2π", "Em nenhuma"];
    return {
      d: "dificil",
      e: "Em quais abscissas do intervalo [0, 2π] o gráfico de f(x) = sen x + cos x tem ponto de inflexão?",
      o,
      x: "A derivada segunda é f''(x) = −sen x − cos x = −(sen x + cos x), que se anula quando tg x = −1, em x = 3π/4 e x = 7π/4, e troca de sinal nesses pontos. Como f'' = −f, as inflexões são exatamente as raízes da própria função, onde o gráfico cruza o eixo.\n\nx = π/4 e x = 5π/4 são o máximo e o mínimo, onde f' = cos x − sen x se anula. x = π/2 e x = 3π/2 são as inflexões de cos x sozinho. x = 0, x = π e x = 2π são as de sen x sozinho. E há inflexões, sim: a soma é uma senoide, √2 · sen(x + π/4), que muda de concavidade como qualquer outra.",
      v: { i: () => { const r = trocas(d2((x) => Math.sin(x) + Math.cos(x)), 0.001, 2 * Math.PI - 0.001); return unicoV(o.map((t) => (/nenhuma/i.test(t) ? r.length === 0 : mesmaLista(lista(t), r)))); } },
    };
  })(),
  (() => {
    const o = ["f(x) = x³ − 3x + 3", "f(x) = −x³ + 3x + 3", "f(x) = x³ − 3x + 5", "f(x) = x³ − 3x² + 3", "f(x) = 2x³ − 6x + 3"];
    return {
      d: "dificil",
      e: "Uma função polinomial de grau 3 tem máximo local em (−1, 5) e mínimo local em (1, 1). Qual é a sua expressão?",
      o,
      x: "Os extremos em x = ±1 dizem que f'(x) = k(x² − 1) = k(x − 1)(x + 1), e então f(x) = k(x³/3 − x) + d. Com f(−1) = 2k/3 + d = 5 e f(1) = −2k/3 + d = 1: d = 3 e 2k/3 = 2, isto é, k = 3. A função é f(x) = x³ − 3x + 3; como k > 0, o extremo em −1 é de fato o máximo.\n\n−x³ + 3x + 3 troca os tipos: tem mínimo em −1 e máximo em 1. x³ − 3x + 5 usa o valor do máximo como termo independente, e dá f(1) = 3. x³ − 3x² + 3 tem pontos críticos em 0 e 2. E 2x³ − 6x + 3 dobra a derivada e dá f(−1) = 7.",
      v: { i: () => unicoV(o.map((t) => { const f = lerF(t); return maxLocal(f, -1) && Math.abs(f(-1) - 5) < 1e-9 && minLocal(f, 1) && Math.abs(f(1) - 1) < 1e-9; })) },
    };
  })(),
  (() => {
    const o = ["Fica abaixo da secante", "Fica acima da secante", "Coincide com a secante", "Cruza a secante no meio", "Fica abaixo das tangentes"];
    return {
      d: "dificil",
      e: "Se f é côncava para cima em [a, b], o que se pode afirmar sobre o seu gráfico nesse intervalo, em relação à secante, a reta que liga os pontos de abscissas a e b?",
      o,
      x: "Concavidade para cima significa que as inclinações aumentam: o gráfico se curva para cima, como uma tigela, e fica abaixo de cada corda que liga dois dos seus pontos, em particular da secante entre as extremidades. Em fórmulas, f(ta + (1 − t)b) ≤ t · f(a) + (1 − t) · f(b) para 0 ≤ t ≤ 1. Ao mesmo tempo, o gráfico fica acima de cada reta tangente.\n\nAcima da secante é o comportamento das funções côncavas para baixo. Coincidir com a secante só vale para funções afins, cujo gráfico é a própria reta. Cruzar a secante no meio exigiria uma troca de concavidade no intervalo. E o gráfico fica acima das tangentes, e não abaixo delas.",
      /* bateria com f'' > 0; posições conferidas ponto a ponto contra a secante e contra tangentes */
      v: {
        i: () => {
          const casos = [[(x) => x * x, -1, 2], [Math.exp, 0, 2], [(x) => x ** 4 + x, -1, 1], [(x) => 1 / x, 0.5, 3], [Math.cosh, -2, 1]];
          const sec = (f, a, b) => (x) => f(a) + ((f(b) - f(a)) * (x - a)) / (b - a), dentro = (a, b) => Array.from({ length: 19 }, (_, k) => a + ((b - a) * (k + 1)) / 20);
          const afirma = {
            "Fica abaixo da secante": casos.every(([f, a, b]) => dentro(a, b).every((x) => f(x) < sec(f, a, b)(x))),
            "Fica acima da secante": casos.every(([f, a, b]) => dentro(a, b).every((x) => f(x) > sec(f, a, b)(x))),
            "Coincide com a secante": casos.every(([f, a, b]) => dentro(a, b).every((x) => Math.abs(f(x) - sec(f, a, b)(x)) < 1e-9)),
            "Cruza a secante no meio": casos.every(([f, a, b]) => dentro(a, b).some((x) => f(x) > sec(f, a, b)(x))),
            "Fica abaixo das tangentes": casos.every(([f, a, b]) => dentro(a, b).every((p) => dentro(a, b).every((x) => f(x) <= f(p) + derivada(f, p) * (x - p) + 1e-12))),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Máximo em x = −1 e mínimo em x = 2", "Extremos em x = −1, x = 0 e x = 2", "Mínimo em x = −1 e máximo em x = 2", "Só um mínimo, em x = 2", "Máximos em x = −1 e x = 2"];
    return {
      d: "dificil",
      e: "A derivada de uma função f é f'(x) = x²(x − 2)³(x + 1). Quais são os extremos locais de f?",
      o,
      x: "Extremos ocorrem onde f' troca de sinal. O fator x² nunca é negativo, e não troca de sinal em x = 0; os fatores (x − 2)³ e (x + 1) trocam, porque têm expoente ímpar. Para x < −1, o produto é positivo; entre −1 e 2, negativo; depois de 2, positivo. Há máximo local em x = −1 e mínimo local em x = 2.\n\nContar x = 0 esquece que a raiz dupla de f' não troca o sinal. Trocar os tipos inverte o teste da derivada primeira. Só o mínimo em x = 2 esquece a troca de sinal em x = −1. E dois máximos seguidos seriam impossíveis sem um mínimo entre eles.",
      /* trocas de sinal de f' numa malha, e o tipo pelo sinal antes e depois */
      v: {
        i: () => {
          const g = (x) => x * x * (x - 2) ** 3 * (x + 1), r = trocas(g, -5, 5);
          const tipos = r.map((x) => [g(x - 1e-3) > 0 && g(x + 1e-3) < 0 ? "max" : g(x - 1e-3) < 0 && g(x + 1e-3) > 0 ? "min" : "?", x]);
          const igual = (esperado) => esperado.length === tipos.length && esperado.every(([t, x]) => tipos.some(([u, y]) => u === t && Math.abs(x - y) < 1e-6));
          const afirma = {
            "Máximo em x = −1 e mínimo em x = 2": igual([["max", -1], ["min", 2]]),
            "Extremos em x = −1, x = 0 e x = 2": r.length === 3,
            "Mínimo em x = −1 e máximo em x = 2": igual([["min", -1], ["max", 2]]),
            "Só um mínimo, em x = 2": igual([["min", 2]]),
            "Máximos em x = −1 e x = 2": igual([["max", -1], ["max", 2]]),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["f(x) = x · |x|", "f(x) = x³", "f(x) = x⁴", "f(x) = |x|", "f(x) = x²"];
    return {
      d: "dificil",
      e: "Qual das funções tem ponto de inflexão em x = 0 sem que f''(0) exista?",
      o,
      x: "A função x · |x| vale x² para x ≥ 0 e −x² para x < 0. A derivada é f'(x) = 2|x|, e a segunda vale 2 para x > 0 e −2 para x < 0. A concavidade muda na origem, mas f'' salta de −2 para 2 ali e não existe em x = 0: é uma inflexão sem f''(0).\n\nx³ tem inflexão na origem, mas com f''(0) = 0, que existe. x⁴ tem f''(0) = 0 e nenhuma inflexão: é côncava para cima dos dois lados. |x| não muda de concavidade: é formada por duas semirretas, com um bico na origem. E x² é côncava para cima em toda a reta.",
      /* inflexão pelo sinal da derivada segunda dos dois lados; existência de f''(0) pelos quocientes laterais de f' */
      v: {
        i: () => unicoV(o.map((t) => {
          const f = lerF(t), infl = Math.sign(derivada2(f, -0.1)) * Math.sign(derivada2(f, 0.1)) < 0;
          const f1 = (x) => derivada(f, x, 1e-6), h = 1e-4, mais = (f1(h) - f1(0)) / h, menos = (f1(0) - f1(-h)) / h;
          const semF2 = !Number.isFinite(mais) || !Number.isFinite(menos) || Math.abs(mais - menos) > 0.1 || Math.abs(mais) > 1e3;
          return infl && semF2;
        })),
      },
    };
  })(),
];
