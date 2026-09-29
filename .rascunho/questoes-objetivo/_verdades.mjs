/* Ferramentas de conferência para verdades e mentiras.

   Um mundo diz, para cada pessoa, se ela fala a verdade (`v[i]`) e fixa os
   fatos desconhecidos (culpado, dia, porta…). Um mundo é coerente quando a
   fala de cada pessoa tem exatamente o valor `v[i]` — o veraz diz frase
   verdadeira, o mentiroso diz frase falsa. Pessoa que não fala entra com
   `null`. A resposta pedida precisa ser a mesma em todos os mundos
   coerentes. */

export const unicoV = (arr) => { const ok = arr.map((b, i) => (b ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
export const intervalo = (a, b) => Array.from({ length: Math.max(0, b - a + 1) }, (_, i) => a + i);
export const booleanos = (n) => intervalo(0, 2 ** n - 1).map((m) => intervalo(0, n - 1).map((i) => Boolean((m >> i) & 1)));
export const quantos = (arr) => arr.filter(Boolean).length;

export const mundos = (n, falas, extras = [{}], restricoes = []) => {
  const lista = [];
  for (const v of booleanos(n))
    for (const e of extras) {
      const m = { v, ...e };
      if (falas.every((f, i) => f === null || f(m) === v[i]) && restricoes.every((r) => r(m))) lista.push(m);
    }
  return lista;
};
export const resposta = (lista, f) => {
  if (lista.length === 0) throw new Error("nenhum mundo coerente");
  const r = new Set(lista.map(f));
  if (r.size !== 1) throw new Error(`respostas diferentes: ${[...r].join(" | ")}`);
  return [...r][0];
};
export const sempre = (lista, f) => lista.length > 0 && lista.every(f);
/* Uma pergunta serve para descobrir `alvo` se cada resposta possível
   corresponde a um único valor de `alvo` em todos os mundos. */
export const decifra = (lista, responde, alvo) => {
  const mapa = new Map();
  for (const m of lista) {
    const r = responde(m);
    if (!mapa.has(r)) mapa.set(r, new Set());
    mapa.get(r).add(alvo(m));
  }
  return [...mapa.values()].every((s) => s.size === 1);
};
