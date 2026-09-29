/* Ferramentas de conferência para as matérias de exatas.

   A explicação de cada questão resolve pela fórmula; a conferência chega ao
   número por outro caminho — sistema resolvido por eliminação, potência feita
   por multiplicações sucessivas, raiz achada por bisseção, integral somada em
   fatias, movimento simulado em passos pequenos. E, sempre que dá, lê o
   próprio texto das alternativas (lerC, lerReal, lerPolar), para que um erro
   de digitação na alternativa apareça como erro de conferência. */

import { unicoV } from "./_contagem.mjs";
export { unicoV, intervalo, fmt, permutacoes, combinacoes, produto, distintos } from "./_contagem.mjs";

export const perto = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));

/* Índice da única alternativa cujo valor fica a menos de `tol` (relativo) do
   valor calculado. Serve para respostas arredondadas (“≈ 1,41”). */
export const escolhe = (valor, valores, tol = 0.01) =>
  unicoV(valores.map((v) => Math.abs(v - valor) <= tol * Math.max(Math.abs(valor), 1e-9)));

/* ------------------------------------------------------------ leitura --- */
/* Número real escrito como nas alternativas: "−3", "2,5", "3/2", "√3",
   "2√3", "√3/2", "3√2/2", "1/√2", "π", "2π/3". */
export function lerReal(t) {
  /* ponto de milhar sai ("4.096" → 4096); vírgula decimal vira ponto */
  const s = String(t).replace(/−/g, "-").replace(/\s+/g, "").replace(/(\d)\.(?=\d{3}(?:\D|$))/g, "$1").replace(/(\d),(\d)/g, "$1.$2");
  if (s === "-π" || s === "π") return (s === "π" ? 1 : -1) * Math.PI;
  const m = s.match(/^(-?)(\d+(?:\.\d+)?)?(π)?(?:√(\d+(?:\.\d+)?))?(π)?(?:\/(\d+(?:\.\d+)?)?(?:√(\d+(?:\.\d+)?))?)?$/);
  if (!m || (!m[2] && !m[3] && !m[4] && !m[5])) throw new Error(`não consegui ler o número "${t}"`);
  const [, sg, a, pi1, r, pi2, d, rd] = m;
  let v = (a ? Number(a) : 1) * (r ? Math.sqrt(Number(r)) : 1) * (pi1 || pi2 ? Math.PI : 1);
  if (d || rd) v /= (d ? Number(d) : 1) * (rd ? Math.sqrt(Number(rd)) : 1);
  return sg ? -v : v;
}

/* Complexo na forma algébrica: "5 + i", "1/2 + (5/2)i", "−2√3 + 2i",
   "1 − i√3", "−i", "3". */
export function lerC(txt) {
  const s = String(txt).replace(/−/g, "-").replace(/\s+/g, "");
  const termos = [];
  let atual = "", prof = 0;
  for (let k = 0; k < s.length; k++) {
    const c = s[k];
    if (c === "(") prof++;
    if (c === ")") prof--;
    if ((c === "+" || c === "-") && k > 0 && prof === 0 && s[k - 1] !== "(" && s[k - 1] !== "/") {
      termos.push(atual);
      atual = c === "-" ? "-" : "";
    } else atual += c;
  }
  termos.push(atual);
  let re = 0, im = 0;
  for (let t of termos) {
    let sinal = 1;
    if (t.startsWith("-")) { sinal = -1; t = t.slice(1); } else if (t.startsWith("+")) t = t.slice(1);
    let imag = false;
    if (t.endsWith("i")) { imag = true; t = t.slice(0, -1); } else if (t.startsWith("i")) { imag = true; t = t.slice(1); }
    t = t.replace(/·$/, "").replace(/^·/, "");
    if (t.startsWith("(") && t.endsWith(")")) t = t.slice(1, -1);
    const v = t === "" ? 1 : lerReal(t);
    if (imag) im += sinal * v; else re += sinal * v;
  }
  return cx(re, im);
}

/* Ângulo: "π/3", "5π/6", "0", "π", "30°", "−π/2". */
export function lerAngulo(t) {
  const s = String(t).replace(/\s+/g, "");
  if (s.endsWith("°")) return (lerReal(s.slice(0, -1)) * Math.PI) / 180;
  return lerReal(s);
}

/* Forma polar: "2(cos π/3 + i·sen π/3)", "2 cis(π/3)", "cis 60°". */
export function lerPolar(txt) {
  const s = String(txt).replace(/\s+/g, " ").trim();
  let m = s.match(/^(.*?)\s*\(\s*cos\s*(.+?)\s*\+\s*i\s*·?\s*sen\s*(.+?)\s*\)$/);
  if (m) { const r = m[1] === "" ? 1 : lerReal(m[1]); return cx(r * Math.cos(lerAngulo(m[2])), r * Math.sin(lerAngulo(m[3]))); }
  m = s.match(/^(.*?)\s*cis\s*\(?\s*(.+?)\s*\)?$/);
  if (m) { const r = m[1] === "" ? 1 : lerReal(m[1]); const a = lerAngulo(m[2]); return cx(r * Math.cos(a), r * Math.sin(a)); }
  throw new Error(`não consegui ler a forma polar "${txt}"`);
}

/* Equação escrita como nas alternativas — "x²/25 + y²/16 = 1",
   "(x − 1)² + (y + 2)² = 9", "y = 2x − 1", "xy = 4", "4(x + 2)" — vira a
   função f(x, y) = (1º membro) − (2º membro). */
export function lerEquacao(t) {
  const js = (s) => s.replace(/−/g, "-").replace(/²/g, "**2").replace(/³/g, "**3")
    .replace(/√(\d+(?:\.\d+)?)/g, "Math.sqrt($1)")
    .replace(/(\d|\))\s*(?=[xy(]|Math)/g, "$1*")
    .replace(/([xy])\s*(?=[xy(]|Math)/g, "$1*");
  const partes = String(t).split("=");
  if (partes.length !== 2) throw new Error(`equação sem um único "=": ${t}`);
  return new Function("x", "y", `return (${js(partes[0])}) - (${js(partes[1])});`);
}

/* Complexo em qualquer das duas formas. */
export const lerZ = (t) => (/cos|cis/.test(t) ? lerPolar(t) : lerC(t));

/* ---------------------------------------------------------- complexos --- */
export const cx = (re, im = 0) => ({ re, im });
export const somaC = (a, b) => cx(a.re + b.re, a.im + b.im);
export const subC = (a, b) => cx(a.re - b.re, a.im - b.im);
export const vezesC = (a, b) => cx(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
export const divC = (a, b) => { const d = b.re ** 2 + b.im ** 2; return cx((a.re * b.re + a.im * b.im) / d, (a.im * b.re - a.re * b.im) / d); };
/* Potência por multiplicações sucessivas — não usa De Moivre. */
export const potC = (a, n) => { let r = cx(1); for (let k = 0; k < Math.abs(n); k++) r = vezesC(r, a); return n < 0 ? divC(cx(1), r) : r; };
export const modC = (a) => Math.hypot(a.re, a.im);
export const argC = (a) => { const t = Math.atan2(a.im, a.re); return t < -1e-12 ? t + 2 * Math.PI : Math.max(t, 0); };
export const conjC = (a) => cx(a.re, -a.im);
export const igualC = (a, b, tol = 1e-9) => perto(a.re, b.re, tol) && perto(a.im, b.im, tol);
export const polar = (r, t) => cx(r * Math.cos(t), r * Math.sin(t));

/* -------------------------------------------------------- polinômios --- */
/* Coeficientes do maior grau para o menor. */
export const avalia = (p, x) => p.reduce((s, c) => s * x + c, 0);
export const avaliaC = (p, z) => p.reduce((s, c) => somaC(vezesC(s, z), typeof c === "number" ? cx(c) : c), cx(0));
export const deRaizes = (rs) => rs.reduce((p, r) => [...p, 0].map((c, i) => c - (i > 0 ? p[i - 1] * r : 0)), [1]);
/* Raízes complexas por Durand–Kerner (coeficientes reais ou complexos). */
export function raizesPol(p) {
  const n = p.length - 1;
  const pc = p.map((c) => (typeof c === "number" ? cx(c) : c));
  const mon = pc.map((c) => divC(c, pc[0]));
  let z = Array.from({ length: n }, (_, k) => polar(1 + 0.4 * k / n, 0.4 + (2 * Math.PI * k) / n));
  for (let it = 0; it < 2000; it++) {
    z = z.map((zi, i) => {
      let den = cx(1);
      z.forEach((zj, j) => { if (j !== i) den = vezesC(den, subC(zi, zj)); });
      return subC(zi, divC(avaliaC(mon, zi), den));
    });
  }
  return z.map((w) => cx(Math.abs(w.re) < 1e-9 ? 0 : w.re, Math.abs(w.im) < 1e-9 ? 0 : w.im));
}
export const multPol = (p, q) => {
  const r = Array(p.length + q.length - 1).fill(0);
  p.forEach((a, i) => q.forEach((b, j) => { r[i + j] += a * b; }));
  return r;
};
export const potPol = (p, n) => { let r = [1]; for (let k = 0; k < n; k++) r = multPol(r, p); return r; };
/* Tira os zeros à esquerda (grau real). */
export const aparaPol = (p) => { let i = 0; while (i < p.length - 1 && Math.abs(p[i]) < 1e-9) i++; return p.slice(i); };
export const igualPol = (p, q, tol = 1e-9) => { const a = aparaPol(p), b = aparaPol(q); return a.length === b.length && a.every((c, i) => perto(c, b[i], tol)); };
/* Coeficientes (complexos) do polinômio mônico com as raízes dadas. */
export const deRaizesC = (rs) => rs.reduce((p, r) => [...p, cx(0)].map((c, i) => subC(c, i > 0 ? vezesC(p[i - 1], r) : cx(0))), [cx(1)]);
const SUP = { "⁰": 0, "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9 };
/* Polinômio escrito como nas alternativas — "2x³ − x + 6", "x − 3", "−x − 1",
   "3", "x² − 4x + 5 = 0" —, com coeficientes do maior grau para o menor. */
export function lerPol(t) {
  const s = String(t).replace(/−/g, "-").replace(/\s+/g, "").replace(/=0$/, "");
  const graus = {};
  for (const termo of s.match(/[+-]?[^+-]+/g)) {
    const m = termo.match(/^([+-]?)(\d+(?:[.,]\d+)?(?:\/\d+)?)?(x(?:\^(\d+)|([⁰¹²³⁴⁵⁶⁷⁸⁹]+))?)?$/);
    if (!m || (!m[2] && !m[3])) throw new Error(`não li o termo "${termo}" de "${t}"`);
    const coef = (m[1] === "-" ? -1 : 1) * (m[2] ? lerReal(m[2]) : 1);
    const g = m[3] ? (m[4] ? Number(m[4]) : m[5] ? Number([...m[5]].map((c) => SUP[c]).join("")) : 1) : 0;
    graus[g] = (graus[g] ?? 0) + coef;
  }
  const n = Math.max(...Object.keys(graus).map(Number));
  return Array.from({ length: n + 1 }, (_, k) => graus[n - k] ?? 0);
}

/* Divisão de polinômios: quociente e resto. */
export function divPol(p, d) {
  const q = [];
  let r = [...p];
  while (r.length >= d.length) {
    const c = r[0] / d[0];
    q.push(c);
    r = r.map((x, i) => x - (i < d.length ? c * d[i] : 0)).slice(1);
  }
  return { q, r };
}

/* --------------------------------------------------- álgebra linear --- */
/* Resolve A x = b por eliminação de Gauss com pivoteamento parcial. */
export function resolve(A, b) {
  const n = A.length;
  const M = A.map((l, i) => [...l, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let l = c + 1; l < n; l++) if (Math.abs(M[l][c]) > Math.abs(M[p][c])) p = l;
    if (Math.abs(M[p][c]) < 1e-12) throw new Error("sistema sem solução única");
    [M[c], M[p]] = [M[p], M[c]];
    for (let l = 0; l < n; l++) {
      if (l === c) continue;
      const f = M[l][c] / M[c][c];
      for (let k = c; k <= n; k++) M[l][k] -= f * M[c][k];
    }
  }
  return M.map((l, i) => l[n] / l[i]);
}
/* Determinante por expansão de Laplace (independente da eliminação). */
export const det = (M) => (M.length === 1 ? M[0][0] : M[0].reduce((s, a, j) => s + (j % 2 ? -1 : 1) * a * det(M.slice(1).map((l) => l.filter((_, k) => k !== j))), 0));
export const multM = (A, B) => A.map((l) => B[0].map((_, j) => l.reduce((s, a, k) => s + a * B[k][j], 0)));
export const transposta = (A) => A[0].map((_, j) => A.map((l) => l[j]));
export const identidade = (n) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
export const potM = (A, n) => { let R = identidade(A.length); for (let k = 0; k < n; k++) R = multM(R, A); return R; };
/* Inversa resolvendo A x = eⱼ para cada coluna (sem a fórmula dos cofatores). */
export const inversa = (A) => transposta(identidade(A.length).map((e) => resolve(A, e)));
/* Matriz escrita como nas alternativas: "Linhas (3, −1) e (−5, 2)". */
export const lerMatriz = (t) => [...String(t).matchAll(/\(([^()]*)\)/g)].map((m) => m[1].split(",").map((s) => lerReal(s.trim())));
export const igualM = (A, B, tol = 1e-9) => A.length === B.length && A.every((l, i) => l.length === B[i].length && l.every((a, j) => perto(a, B[i][j], tol)));
/* Posto por escalonamento. */
export function posto(A) {
  const M = A.map((l) => [...l]);
  let r = 0;
  for (let c = 0; c < M[0].length && r < M.length; c++) {
    let p = r;
    for (let l = r + 1; l < M.length; l++) if (Math.abs(M[l][c]) > Math.abs(M[p][c])) p = l;
    if (Math.abs(M[p][c]) < 1e-10) continue;
    [M[r], M[p]] = [M[p], M[r]];
    for (let l = 0; l < M.length; l++) {
      if (l === r) continue;
      const f = M[l][c] / M[r][c];
      for (let k = c; k < M[0].length; k++) M[l][k] -= f * M[r][k];
    }
    r++;
  }
  return r;
}

/* ------------------------------------------------------- numéricos --- */
export function bissecao(f, a, b, it = 200) {
  let fa = f(a);
  if (fa === 0) return a;
  for (let k = 0; k < it; k++) {
    const m = (a + b) / 2, fm = f(m);
    if (fm === 0) return m;
    if (Math.sign(fm) === Math.sign(fa)) { a = m; fa = fm; } else b = m;
  }
  return (a + b) / 2;
}
/* Zeros de f em [a, b]: trocas de sinal numa malha fina, refinadas por
   bisseção, mais os mínimos locais de |f| que tocam o zero (tangência). */
export function zeros(f, a, b, n = 200000, tol = 1e-7) {
  const achados = [];
  const h = (b - a) / n;
  let x0 = a, f0 = f(a);
  if (Math.abs(f0) < tol) achados.push(a);
  for (let k = 1; k <= n; k++) {
    const x1 = a + k * h, f1 = f(x1);
    if (Number.isFinite(f0) && Number.isFinite(f1)) {
      if (Math.abs(f1) < tol) achados.push(x1);
      else if (f0 * f1 < 0 && Math.abs(f0) >= tol) achados.push(bissecao(f, x0, x1));
    }
    x0 = x1; f0 = f1;
  }
  /* tangências: mínimo local de |f| com valor quase nulo */
  for (let k = 1; k < n; k++) {
    const xm = a + k * h;
    const [fa, fm, fb] = [f(xm - h), f(xm), f(xm + h)].map(Math.abs);
    if (fm <= fa && fm <= fb && fm < 1e-5 && !achados.some((z) => Math.abs(z - xm) < 5 * h)) {
      let lo = xm - h, hi = xm + h;
      for (let it = 0; it < 100; it++) { const m1 = lo + (hi - lo) / 3, m2 = hi - (hi - lo) / 3; if (Math.abs(f(m1)) < Math.abs(f(m2))) hi = m2; else lo = m1; }
      const z = (lo + hi) / 2;
      if (Math.abs(f(z)) < tol) achados.push(z);
    }
  }
  /* Perto de uma tangência, vários pontos da malha ficam abaixo da
     tolerância: agrupa os que distam menos de `sep` e fica com o de menor |f|. */
  achados.sort((p, q) => p - q);
  const sep = 1e-3;
  const grupos = [];
  for (const z of achados) {
    const g = grupos[grupos.length - 1];
    if (g && z - g[g.length - 1] < sep) g.push(z); else grupos.push([z]);
  }
  return grupos.map((g) => g.reduce((m, z) => (Math.abs(f(z)) < Math.abs(f(m)) ? z : m)));
}
/* Integral por Simpson composto. */
export function integra(f, a, b, n = 20000) {
  if (n % 2) n++;
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let k = 1; k < n; k++) s += (k % 2 ? 4 : 2) * f(a + k * h);
  return (s * h) / 3;
}
export const deriva = (f, x, h = 1e-5) => (f(x + h) - f(x - h)) / (2 * h);
/* Runge–Kutta de 4ª ordem: estado é um vetor; deriv(t, estado) devolve a
   derivada. Para quando `parar(t, estado)` for verdadeiro. */
export function simula(deriv, estado, dt, parar, tMax = 1e6) {
  let t = 0, y = [...estado];
  while (!parar(t, y) && t < tMax) {
    const k1 = deriv(t, y);
    const k2 = deriv(t + dt / 2, y.map((v, i) => v + (dt / 2) * k1[i]));
    const k3 = deriv(t + dt / 2, y.map((v, i) => v + (dt / 2) * k2[i]));
    const k4 = deriv(t + dt, y.map((v, i) => v + dt * k3[i]));
    y = y.map((v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
    t += dt;
  }
  return { t, y };
}

/* ------------------------------------------------------------ química --- */
/* Massa molar a partir da fórmula ("Ca(OH)2", "CuSO4·5H2O"), com as massas
   atômicas dadas no enunciado. */
export function massaMolar(formula, massas) {
  return formula.split("·").reduce((s, parte) => {
    const m = parte.match(/^(\d+)(.*)$/);
    return s + (m ? Number(m[1]) : 1) * massaSimples(m ? m[2] : parte, massas);
  }, 0);
}
function massaSimples(f, massas) {
  let i = 0;
  const numero = () => { const m = f.slice(i).match(/^\d+/); if (!m) return 1; i += m[0].length; return Number(m[0]); };
  const grupo = () => {
    let total = 0;
    while (i < f.length && f[i] !== ")") {
      if (f[i] === "(") { i++; const t = grupo(); i++; total += t * numero(); }
      else {
        const m = f.slice(i).match(/^[A-Z][a-z]?/);
        if (!m) throw new Error(`fórmula ilegível: ${f}`);
        if (!(m[0] in massas)) throw new Error(`falta a massa de ${m[0]}`);
        i += m[0].length;
        total += massas[m[0]] * numero();
      }
    }
    return total;
  };
  return grupo();
}
/* Contagem de átomos, para conferir se uma equação está balanceada. */
export function atomos(formula) {
  const conta = {};
  formula.split("·").forEach((parte) => {
    const m = parte.match(/^(\d+)(.*)$/);
    const mult = m ? Number(m[1]) : 1;
    const f = m ? m[2] : parte;
    let i = 0;
    const numero = () => { const n = f.slice(i).match(/^\d+/); if (!n) return 1; i += n[0].length; return Number(n[0]); };
    const grupo = () => {
      const c = {};
      while (i < f.length && f[i] !== ")") {
        if (f[i] === "(") { i++; const g = grupo(); i++; const k = numero(); for (const e in g) c[e] = (c[e] ?? 0) + g[e] * k; }
        else { const e = f.slice(i).match(/^[A-Z][a-z]?/)[0]; i += e.length; c[e] = (c[e] ?? 0) + numero(); }
      }
      return c;
    };
    const g = grupo();
    for (const e in g) conta[e] = (conta[e] ?? 0) + g[e] * mult;
  });
  return conta;
}
export function balanceada(reagentes, produtos) {
  const lado = (l) => l.reduce((c, [k, f]) => { const a = atomos(f); for (const e in a) c[e] = (c[e] ?? 0) + k * a[e]; return c; }, {});
  const r = lado(reagentes), p = lado(produtos);
  return [...new Set([...Object.keys(r), ...Object.keys(p)])].every((e) => r[e] === p[e]);
}
