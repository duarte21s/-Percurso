/* Ferramentas de conferência para as questões de Estatística.

   As explicações usam fórmulas (média ponderada, desvio padrão, binomial,
   tabela da normal, z crítico); a conferência refaz as contas por outro
   caminho: expande tabelas de frequência em listas e calcula direto,
   enumera espaços amostrais, integra a densidade normal por Simpson em vez
   de consultar tabela, inverte a normal por bisseção, minimiza somas de
   quadrados numericamente, e assim por diante. */

export { unicoV } from "./_contagem.mjs";
export { bissecao, zeros, integra } from "./_exatas.mjs";
export { lerF } from "./_calculo.mjs";
import { bissecao, integra } from "./_exatas.mjs";
import { lerF } from "./_calculo.mjs";

export const soma = (a) => a.reduce((s, x) => s + x, 0);
export const media = (a) => soma(a) / a.length;
export const ordena = (a) => [...a].sort((x, y) => x - y);
export const mediana = (a) => { const o = ordena(a), n = o.length; return n % 2 ? o[(n - 1) / 2] : (o[n / 2 - 1] + o[n / 2]) / 2; };
/* modas (lista vazia se todos os valores aparecem o mesmo número de vezes) */
export const modas = (a) => { const c = new Map(); a.forEach((x) => c.set(x, (c.get(x) ?? 0) + 1)); const m = Math.max(...c.values()); if ([...c.values()].every((k) => k === m)) return []; return [...c].filter(([, k]) => k === m).map(([x]) => x).sort((x, y) => (x < y ? -1 : x > y ? 1 : 0)); };
export const variancia = (a, amostral = false) => { const m = media(a); return soma(a.map((x) => (x - m) ** 2)) / (a.length - (amostral ? 1 : 0)); };
export const desvio = (a, amostral = false) => Math.sqrt(variancia(a, amostral));
/* tabela de frequências → lista de valores */
export const expande = (valores, freq) => valores.flatMap((v, i) => Array(freq[i]).fill(v));

/* normal padrão: densidade e distribuição acumulada por integração de Simpson (sem tabela) */
export const phi = (z) => Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI);
export const Phi = (z) => (z >= 0 ? 0.5 + integra(phi, 0, z, 4000) : 0.5 - integra(phi, 0, -z, 4000));
/* z tal que Φ(z) = p, por bisseção */
export const zDe = (p) => bissecao((z) => Phi(z) - p, -10, 10, 100);

/* binomial por enumeração de todas as sequências de n ensaios (sem a fórmula C(n, k)) */
export function binomialEnum(n, p, pred) {
  let tot = 0;
  for (let m = 0; m < 2 ** n; m++) {
    let k = 0;
    for (let i = 0; i < n; i++) if (m & (1 << i)) k++;
    if (pred(k)) tot += p ** k * (1 - p) ** (n - k);
  }
  return tot;
}

/* número escrito como nas alternativas: "12,5", "−3", "1.200", "25%", "≈ 14,9%", "48 km/h", "R$ 2.000" */
export function lerNum(t) {
  let s = String(t).trim().replace(/^≈\s*/, "").replace(/^cerca de\s+/i, "").replace(/^R\$\s*/, "").replace(/−/g, "-");
  const m = s.match(/^-?[\d.]+(,\d+)?/);
  if (!m) return NaN;
  let n = m[0];
  if (/^-?\d{1,3}(\.\d{3})+(,\d+)?$/.test(n)) n = n.replace(/\./g, "");
  return Number(n.replace(",", "."));
}
/* fração ou expressão numérica ("1/6", "3/8", "√2/2") */
export const lerFracao = (t) => lerF(String(t).trim())(0);
/* índice da alternativa cujo número (lido com lerNum) está a menos de tol do valor */
export const qualNum = (x, alt, tol = 1e-6) => {
  const achados = alt.map((t) => { const v = lerNum(t); return Number.isFinite(v) && Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); });
  return achados.filter(Boolean).length === 1 ? achados.indexOf(true) : -1;
};
export const qualFracao = (x, alt, tol = 1e-9) => {
  const achados = alt.map((t) => { let v; try { v = lerFracao(t); } catch { return false; } return Number.isFinite(v) && Math.abs(v - x) <= tol * Math.max(1, Math.abs(x)); });
  return achados.filter(Boolean).length === 1 ? achados.indexOf(true) : -1;
};
/* gerador pseudoaleatório determinístico, para baterias reprodutíveis */
export function sorteador(semente = 12345) {
  let s = semente >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 2 ** 32; };
}
