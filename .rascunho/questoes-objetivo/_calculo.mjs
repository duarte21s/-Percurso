/* Ferramentas de conferência para as questões de Cálculo I.

   lerF lê uma função de x escrita como nas alternativas — "3x² − 2x + 1",
   "(x + 1)/(x − 2)", "2x · eˣ", "e^(3x)", "sen 2x", "cos²x", "tg x",
   "ln(x² + 1)", "√(x + 1)", "x · ln x", "arctg x", "|x − 1|", "1/x²",
   "2π", "x^(3/2)" — e devolve uma função JavaScript. Um "f'(x) =" ou
   "y =" no início é descartado, e "+ C" no fim também.

   As conferências usam só aritmética de ponto flutuante: derivadas por
   diferenças centrais, integrais por Simpson, limites por aproximação
   numérica, extremos por varredura fina. */

export { unicoV, intervalo, fmt } from "./_contagem.mjs";
export { bissecao, zeros, integra, deriva, simula, lerExpr, perto, escolhe } from "./_exatas.mjs";

const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
/* nome da função → marcador sem letras (para não voltar a casar) e o seu equivalente em JavaScript */
const FUN = [["arcsen", "Math.asin"], ["arccos", "Math.acos"], ["arctg", "Math.atan"], ["sen", "Math.sin"], ["cos", "Math.cos"], ["tg", "Math.tan"], ["sec", "1/Math.cos"], ["ln", "Math.log"], ["log", "Math.log10"]];
const NOMES = FUN.map(([n]) => n).join("|");

export function lerF(texto) {
  let s = String(texto).trim();
  s = s.replace(/^[a-zA-Z]'*\s*\(x\)\s*=\s*/, "").replace(/^[a-zA-Z]'*\s*=\s*/, "").replace(/\s*\+\s*C\s*$/, "");
  s = s.replace(/−/g, "-").replace(/·/g, "*").replace(/(\d),(\d)/g, "$1.$2").replace(/π/g, "#P");
  /* eˣ, e^(...), e^x */
  s = s.replace(/eˣ/g, "#E(x)").replace(/e\^\(/g, "#E(").replace(/e\^x/g, "#E(x)");
  /* potências em sobrescrito: x², (…)³, x⁻¹ */
  s = s.replace(/([⁻]?[⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (m) => `^(${[...m].map((c) => SUP[c]).join("")})`);
  /* módulo e raiz */
  s = s.replace(/\|([^|]+)\|/g, "#A($1)");
  s = s.replace(/√\(/g, "#R(").replace(/√x/g, "#R(x)").replace(/√(\d+(?:\.\d+)?)/g, "#R($1)");
  /* logaritmo em outra base: log₂(…) → #B2(…) */
  const SUB = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };
  s = s.replace(/log([₀-₉]+)/g, (m, b) => `#B${[...b].map((c) => SUB[c]).join("")}`);
  /* funções com argumento sem parênteses: "sen 2x", "cos x", "ln x", "ln 2", "sen^(2)x", "ln #A(x)", "log₂ x" */
  const ARG = "(\\d*\\.?\\d*\\s*\\*?\\s*x(?:\\/\\d+)?|\\d+(?:\\.\\d+)?)";
  s = s.replace(new RegExp(`(${NOMES}|#B\\d+(?!\\d))(\\^\\(\\d+\\))?\\s*(?!\\()${ARG}`, "g"), (m, f, p, arg) => `${f}${p ?? ""}(${arg})`);
  s = s.replace(new RegExp(`(${NOMES}|#B\\d+(?!\\d))(\\^\\(\\d+\\))?\\s*(#[AR]\\([^()]*\\))`, "g"), (m, f, p, arg) => `${f}${p ?? ""}(${arg})`);
  /* funções com parênteses (argumento com parênteses balanceados), potência opcional: sen^(2)(x) → (sen(x))^2 */
  const re = new RegExp(`(${NOMES})(\\^\\((\\d+)\\))?\\(`);
  for (let m; (m = re.exec(s)); ) {
    let i = m.index + m[0].length, prof = 1;
    while (i < s.length && prof > 0) { if (s[i] === "(") prof++; else if (s[i] === ")") prof--; i++; }
    if (prof) throw new Error(`parênteses desbalanceados em "${texto}"`);
    const arg = s.slice(m.index + m[0].length, i - 1), k = FUN.findIndex(([n]) => n === m[1]);
    const chamada = `(#F${k}(${arg}))`;
    s = s.slice(0, m.index) + (m[3] ? `(${chamada}^(${m[3]}))` : chamada) + s.slice(i);
  }
  s = s.replace(/#F(\d)\(/g, (m, k) => (FUN[k][1].startsWith("1/") ? `1/${FUN[k][1].slice(2)}(` : `${FUN[k][1]}(`));
  /* #Bb(arg) → (ln(arg)/ln b), com o argumento de parênteses balanceados */
  for (let m; (m = /#B(\d+)\(/.exec(s)); ) {
    let i = m.index + m[0].length, prof = 1;
    while (i < s.length && prof > 0) { if (s[i] === "(") prof++; else if (s[i] === ")") prof--; i++; }
    s = s.slice(0, m.index) + `(Math.log(${s.slice(m.index + m[0].length, i - 1)})/Math.log(${m[1]}))` + s.slice(i);
  }
  s = s.replace(/#E\(/g, "Math.exp(").replace(/#A\(/g, "Math.abs(").replace(/#R\(/g, "Math.sqrt(").replace(/#P/g, "Math.PI");
  s = s.replace(/\^/g, "**");
  /* a constante e isolada (e², 2e, e/2), fora de nomes como Math.exp */
  s = s.replace(/(?<![A-Za-z.])e(?![A-Za-z])/g, "Math.E");
  /* multiplicação implícita: 2x, 3(…), x(…), )(…), )x, 2Math…, xMath… */
  s = s.replace(/((?<![A-Za-z.\d])\d+(?:\.\d+)?|\)|(?<![A-Za-z])x)\s*(?=\(|x|Math)/g, "$1*");
  /* menos unário vira (−1)·, para que −x² seja −(x²), como na notação usual (e o JavaScript aceite) */
  s = s.replace(/(^|[(,*/+\-]\s*)-/g, "$1(-1)*");
  try { return new Function("x", `return (${s});`); } catch (e) { throw new Error(`não consegui ler a função "${texto}" → ${s}`); }
}

/* Condição sobre x escrita como nas alternativas: "x ≥ 3", "x < −2 ou x > 2",
   "−2 < x ≤ 1", "x ≠ ±2", "x ≥ −1 e x < 3", "Todos os reais". */
import { lerExpr as _lerExpr } from "./_exatas.mjs";
export function lerCondicao(t) {
  const s = String(t).trim();
  if (/^todos os (números )?reais$/i.test(s)) return () => true;
  if (/ ou /.test(s)) { const ps = s.split(/ ou /).map(lerCondicao); return (x) => ps.some((p) => p(x)); }
  if (/ e /.test(s)) { const ps = s.split(/ e /).map(lerCondicao); return (x) => ps.every((p) => p(x)); }
  const OP = { "<": (a, b) => a < b, "≤": (a, b) => a <= b, ">": (a, b) => a > b, "≥": (a, b) => a >= b };
  let m = s.match(/^(.+?)\s*([<≤])\s*x\s*([<≤])\s*(.+)$/);
  if (m) { const a = _lerExpr(m[1]), b = _lerExpr(m[4]); return (x) => OP[m[2]](a, x) && OP[m[3]](x, b); }
  m = s.match(/^x\s*≠\s*±\s*(.+)$/);
  if (m) { const a = _lerExpr(m[1]); return (x) => Math.abs(Math.abs(x) - a) > 1e-12; }
  m = s.match(/^x\s*([<≤>≥≠])\s*(.+)$/);
  if (m) { const a = _lerExpr(m[2]); return m[1] === "≠" ? (x) => Math.abs(x - a) > 1e-12 : (x) => OP[m[1]](x, a); }
  throw new Error(`condição ilegível: ${t}`);
}
/* Intervalo escrito como "[1, +∞)", "(−∞, 1]", "[−1, 1]", "(0, 2)" ou "ℝ". */
export function lerIntervalo(t) {
  const s = String(t).trim();
  if (s === "ℝ") return () => true;
  const m = s.match(/^([[(])\s*(.+?)\s*,\s*(.+?)\s*([\])])$/);
  if (!m) throw new Error(`intervalo ilegível: ${t}`);
  const val = (v) => (/^[+]?∞$/.test(v) ? Infinity : /^[−-]∞$/.test(v) ? -Infinity : _lerExpr(v));
  const a = val(m[2]), b = val(m[3]);
  return (y) => (m[1] === "[" ? y >= a : y > a) && (m[4] === "]" ? y <= b : y < b);
}
/* malha de pontos para comparar condições (de −10 a 10, de 0,25 em 0,25) */
export const malha = Array.from({ length: 81 }, (_, k) => -10 + k / 4);
/* o predicado descreve exatamente onde f está definida (valor finito)? */
export const descreveDominio = (f, pred, pontos = malha) => pontos.every((x) => pred(x) === Number.isFinite(f(x)));

/* Mesma função, conferida em vários pontos (com tolerância relativa); pontos
   fora do domínio de qualquer uma das duas são ignorados. */
export function mesmaFuncao(f, g, pontos = [-2.3, -1.1, -0.37, 0.41, 1.13, 2.71, 3.9], tol = 1e-6) {
  let usados = 0;
  for (const x of pontos) {
    const a = f(x), b = g(x);
    if (!Number.isFinite(a) || !Number.isFinite(b)) { if (Number.isFinite(a) !== Number.isFinite(b)) return false; continue; }
    usados++;
    if (Math.abs(a - b) > tol * Math.max(1, Math.abs(a), Math.abs(b))) return false;
  }
  if (usados < 3) throw new Error("poucos pontos no domínio para comparar as funções");
  return true;
}
/* Iguais a menos de uma constante (para primitivas): compara as diferenças. */
export function mesmaPrimitiva(F, G, pontos = [0.41, 1.13, 1.7, 2.71, 3.9], tol = 1e-6) {
  const d = pontos.map((x) => F(x) - G(x)).filter(Number.isFinite);
  if (d.length < 3) throw new Error("poucos pontos no domínio");
  return d.every((v) => Math.abs(v - d[0]) <= tol * Math.max(1, Math.abs(d[0])));
}
/* derivada numérica de alta precisão (Richardson sobre diferenças centrais) */
export function derivada(f, x, h = 1e-3) {
  const D = (k) => (f(x + k) - f(x - k)) / (2 * k);
  return (4 * D(h / 2) - D(h)) / 3;
}
export const derivada2 = (f, x, h = 1e-3) => (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
/* limite numérico em a (lado: +1 direita, −1 esquerda, 0 os dois), por extrapolação em h → 0 */
export function limite(f, a, lado = 0) {
  const pelo = (s) => { const h = [1e-3, 5e-4, 2.5e-4].map((k) => f(a + s * k)); return 2 * h[2] - h[1] + 0 * h[0]; };
  if (lado) return pelo(lado);
  const d = pelo(1), e = pelo(-1);
  if (Math.abs(d - e) > 1e-4 * Math.max(1, Math.abs(d))) return NaN;
  return (d + e) / 2;
}
/* limite no infinito: f em valores crescentes; devolve o valor se estabilizar, ou ±Infinity se crescer sem limite */
export function limiteInfinito(f, sinal = 1) {
  const xs = [1e3, 1e4, 1e5, 1e6].map((x) => sinal * x), v = xs.map(f);
  const d1 = Math.abs(v[3] - v[2]), d0 = Math.abs(v[2] - v[1]);
  if (d1 < 1e-4 * Math.max(1, Math.abs(v[3])) && d1 <= d0 + 1e-12) return v[3];
  if (Math.abs(v[3]) > 10 * Math.abs(v[2]) || (Math.abs(v[3]) > 1e5 && Math.sign(v[3]) === Math.sign(v[2]))) return Math.sign(v[3]) * Infinity;
  return NaN;
}
/* extremos numa malha fina de [a, b] */
export function maximo(f, a, b, n = 200000) { let mx = -Infinity, xm = a; for (let k = 0; k <= n; k++) { const x = a + ((b - a) * k) / n, y = f(x); if (y > mx) { mx = y; xm = x; } } return { x: xm, y: mx }; }
export function minimo(f, a, b, n = 200000) { const r = maximo((x) => -f(x), a, b, n); return { x: r.x, y: -r.y }; }
