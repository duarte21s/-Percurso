/* Ferramentas de conferência para contagem: listam os objetos um a um,
   para que a conta da explicação (fórmula) seja conferida por outro
   caminho (enumeração). */

export const unicoV = (arr) => { const ok = arr.map((b, i) => (b ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
export const intervalo = (a, b) => Array.from({ length: Math.max(0, b - a + 1) }, (_, i) => a + i);
export const fmt = (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: 4 }).replace("-", "−");
export const permutacoes = (arr) => (arr.length <= 1 ? [arr.slice()] : arr.flatMap((x, i) => permutacoes([...arr.slice(0, i), ...arr.slice(i + 1)]).map((p) => [x, ...p])));
export const combinacoes = (arr, k) => (k === 0 ? [[]] : arr.length < k ? [] : [...combinacoes(arr.slice(1), k - 1).map((c) => [arr[0], ...c]), ...combinacoes(arr.slice(1), k)]);
export const produto = (...listas) => listas.reduce((acc, l) => acc.flatMap((a) => l.map((x) => [...a, x])), [[]]);
export const distintos = (arr) => new Set(arr).size === arr.length;
export const algarismos = (n) => String(n).split("").map(Number);
/* Anagramas distintos de uma palavra (letras repetidas não duplicam). */
export const anagramas = (palavra) => [...new Set(permutacoes(palavra.split("")).map((p) => p.join("")))];
/* Arrumações em mesa redonda: uma por classe de rotação. */
export const rodas = (nomes) => { const vistos = new Set(); for (const p of permutacoes(nomes)) { const i = p.indexOf(nomes[0]); vistos.add([...p.slice(i), ...p.slice(0, i)].join("|")); } return [...vistos].map((s) => s.split("|")); };
