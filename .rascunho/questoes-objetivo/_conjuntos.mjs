/* Ferramentas de conferência para questões de conjuntos.

   Contagens por região: com n conjuntos, a região r (0 a 2^n − 1) reúne quem
   está exatamente nos conjuntos cujos bits estão ligados em r (bit 0 = 1º
   conjunto). A questão nasce de uma distribuição real `cont`; os números do
   enunciado são calculados dela, e `determinado` confere, por eliminação
   gaussiana, que o valor pedido fica fixado SÓ pelos dados informados —
   qualquer outra distribuição compatível com esses dados daria o mesmo
   valor. */

export const unicoV = (arr) => { const ok = arr.map((b, i) => (b ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
export const intervalo = (a, b) => Array.from({ length: Math.max(0, b - a + 1) }, (_, i) => a + i);
export const perto = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
export const fmt = (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: 4 }).replace("-", "−");

export const em = (k) => (r) => Boolean((r >> k) & 1);
export const tudo = () => true;
export const e_ = (...ps) => (r) => ps.every((p) => p(r));
export const ou = (...ps) => (r) => ps.some((p) => p(r));
export const nao = (p) => (r) => !p(r);
const bits = (r, n) => intervalo(0, n - 1).filter((i) => (r >> i) & 1).length;
export const exatamente = (k, n) => (r) => bits(r, n) === k;
export const peloMenos = (k, n) => (r) => bits(r, n) >= k;
export const conta = (cont, p) => cont.reduce((s, c, r) => s + (p(r) ? c : 0), 0);

export const determinado = (cont, dados, alvo) => {
  const k = cont.length, m = dados.length;
  const linhas = intervalo(0, k - 1).map((j) => [...dados.map((p) => (p(j) ? 1 : 0)), alvo(j) ? 1 : 0]);
  let lin = 0;
  const pivos = [];
  for (let col = 0; col < m && lin < k; col++) {
    let p = lin;
    while (p < k && Math.abs(linhas[p][col]) < 1e-9) p++;
    if (p === k) continue;
    [linhas[lin], linhas[p]] = [linhas[p], linhas[lin]];
    const d = linhas[lin][col];
    linhas[lin] = linhas[lin].map((x) => x / d);
    for (let q = 0; q < k; q++)
      if (q !== lin && Math.abs(linhas[q][col]) > 1e-9) {
        const f = linhas[q][col];
        linhas[q] = linhas[q].map((x, c) => x - f * linhas[lin][c]);
      }
    pivos.push(col);
    lin++;
  }
  if (linhas.some((l) => l.slice(0, m).every((x) => Math.abs(x) < 1e-9) && Math.abs(l[m]) > 1e-9)) throw new Error("os dados do enunciado não determinam o valor pedido");
  const y = Array(m).fill(0);
  pivos.forEach((col, i) => (y[col] = linhas[i][m]));
  const valor = y.reduce((s, yi, i) => s + yi * conta(cont, dados[i]), 0);
  if (!perto(valor, conta(cont, alvo))) throw new Error("conta inconsistente com a distribuição");
  return Math.round(valor * 1e9) / 1e9;
};

/* Todas as distribuições de `total` elementos nas 4 regiões de dois
   conjuntos: [nenhum, só A, só B, A e B]. Para mínimos e máximos. */
export const distribuicoes2 = (total) => {
  const l = [];
  for (let a = 0; a <= total; a++) for (let b = 0; a + b <= total; b++) for (let ab = 0; a + b + ab <= total; ab++) l.push([total - a - b - ab, a, b, ab]);
  return l;
};

/* Conjuntos explícitos. */
export const S = (...xs) => new Set(xs);
export const uniao = (a, b) => new Set([...a, ...b]);
export const inter = (a, b) => new Set([...a].filter((x) => b.has(x)));
export const menos = (a, b) => new Set([...a].filter((x) => !b.has(x)));
export const mesmo = (a, b) => a.size === b.size && [...a].every((x) => b.has(x));
export const escreve = (s) => `{${[...s].sort((x, y) => (typeof x === "number" ? x - y : String(x).localeCompare(String(y)))).join(", ")}}`;
export const subconjuntos = (arr) => intervalo(0, 2 ** arr.length - 1).map((m) => arr.filter((_, i) => (m >> i) & 1));

/* Famílias de n conjuntos em universos de 1 a `tam` elementos. */
export const familias = (n, tam) => {
  const l = [];
  for (let u = 1; u <= tam; u++)
    for (let mask = 0; mask < 2 ** (n * u); mask++) l.push(intervalo(0, n - 1).map((i) => new Set(intervalo(0, u - 1).filter((e) => (mask >> (i * u + e)) & 1))));
  return l;
};
export const contido = (a, b) => [...a].every((x) => b.has(x));

/* Intervalos reais no padrão brasileiro: "[0, 2]", "]2, 5[", "[0, 2] ∪ [5, 10]". */
const umIntervalo = (t) => {
  const m = t.trim().match(/^([[\]])\s*([−-]?\d+(?:,\d+)?)\s*,\s*([−-]?\d+(?:,\d+)?)\s*([[\]])$/);
  if (!m) throw new Error(`intervalo ilegível: ${t}`);
  const num = (s) => Number(s.replace("−", "-").replace(",", "."));
  return { a: num(m[2]), b: num(m[3]), fa: m[1] === "[", fb: m[4] === "]" };
};
export const faixa = (texto) => {
  const partes = texto.split("∪").map(umIntervalo);
  return (x) => partes.some(({ a, b, fa, fb }) => (fa ? x >= a : x > a) && (fb ? x <= b : x < b));
};
export const mesmaFaixa = (f, g, pontas) => {
  const pontos = [...intervalo(-40, 60).map((k) => k / 4), ...pontas.flatMap((p) => [p - 1e-3, p, p + 1e-3])];
  return pontos.every((x) => f(x) === g(x));
};
