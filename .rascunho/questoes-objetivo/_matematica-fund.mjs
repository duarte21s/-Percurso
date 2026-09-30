/* Ferramentas de conferência para Matemática · 6º ao 9º ano.

   Aritmética exata com números pequenos: a conferência refaz a conta por um
   caminho direto — divisão euclidiana, fatoração por tentativa, frações
   como pares [numerador, denominador] sempre reduzidos, sistemas por
   Cramer — nunca reaproveitando a fórmula ou a conta do enunciado. */

export { unicoV, combinacoes, produto } from "./_contagem.mjs";
export { lerNum, lerFracao, qualNum, qualFracao, sorteador } from "./_estatistica.mjs";

/* máximo divisor comum, por Euclides, e mínimo múltiplo comum */
export const mdc = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
export const mmc = (a, b) => Math.abs(a * b) / mdc(a, b);
export const mdcLista = (xs) => xs.reduce((a, b) => mdc(a, b));
export const mmcLista = (xs) => xs.reduce((a, b) => mmc(a, b));

/* primalidade e fatoração, por tentativa de divisão até a raiz de n */
export const ehPrimo = (n) => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
export function fatoresPrimos(n) {
  const f = []; let m = n;
  for (let d = 2; d * d <= m; d++) { let e = 0; while (m % d === 0) { m /= d; e++; } if (e) f.push([d, e]); }
  if (m > 1) f.push([m, 1]);
  return f;
}
export const divisores = (n) => { const ds = []; for (let d = 1; d <= n; d++) if (n % d === 0) ds.push(d); return ds; };
export const fatoresPrimosTexto = (n) => fatoresPrimos(n).map(([p, e]) => (e === 1 ? `${p}` : `${p}^${e}`)).join(" · ");

/* fração exata como par [num, den], sempre reduzida com den > 0 */
export const fracao = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = mdc(n, d) || 1; return [n / g, d / g]; };
export const somaFr = ([a, b], [c, d]) => fracao(a * d + c * b, b * d);
export const subFr = ([a, b], [c, d]) => fracao(a * d - c * b, b * d);
export const mulFr = ([a, b], [c, d]) => fracao(a * c, b * d);
export const divFr = ([a, b], [c, d]) => fracao(a * d, b * c);
export const fracaoParaNum = ([a, b]) => a / b;
/* sinal da comparação a/b vs c/d, com b, d > 0: positivo se a/b > c/d */
export const comparaFr = ([a, b], [c, d]) => a * d - c * b;
export const fracaoTexto = ([a, b]) => (b === 1 ? `${a}` : `${a}/${b}`);

/* resolve ax + b = c, a ≠ 0, devolvendo x como fração exata */
export const resolveLinear = (a, b, c) => fracao(c - b, a);

/* resolve { a1 x + b1 y = c1 ; a2 x + b2 y = c2 } por Cramer, em frações */
export function resolveSistema2x2(a1, b1, c1, a2, b2, c2) {
  const det = a1 * b2 - a2 * b1;
  const detX = c1 * b2 - c2 * b1;
  const detY = a1 * c2 - a2 * c1;
  return [fracao(detX, det), fracao(detY, det)];
}

/* avalia um polinômio em x, dado como [a0, a1, a2, ...] (a0 + a1 x + a2 x² + ...) */
export const avaliaPoli = (coefs, x) => coefs.reduce((s, c, i) => s + c * x ** i, 0);

/* arredondamento correto ao múltiplo de 10^casas mais próximo (para "meio para cima") */
export const arredonda = (x, casas = 0) => { const p = 10 ** casas; return Math.round(x * p) / p; };
