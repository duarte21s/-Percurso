/* Ferramentas de conferência para problemas de associação.

   Cada questão descreve as pistas em texto e as repete como funções. A
   conferência enumera TODAS as distribuições possíveis, fica com as que
   cumprem todas as pistas e exige que a pergunta tenha a mesma resposta em
   todas elas — o quebra-cabeça pode deixar coisas em aberto, mas nunca o
   que foi perguntado. */

export const unicoV = (arr) => { const ok = arr.map((b, i) => (b ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
export const intervalo = (a, b) => Array.from({ length: Math.max(0, b - a + 1) }, (_, i) => a + i);
export const permutacoes = (arr) => (arr.length <= 1 ? [arr.slice()] : arr.flatMap((x, i) => permutacoes([...arr.slice(0, i), ...arr.slice(i + 1)]).map((p) => [x, ...p])));

/* Cada nome recebe um valor de cada categoria, sem repetir valores.
   Solução: { Ana: { esporte: "tênis", cidade: "Natal" }, … }. */
export const associacoes = (nomes, categorias, pistas) => {
  const chaves = Object.keys(categorias);
  const perms = chaves.map((k) => permutacoes(categorias[k]));
  const sols = [];
  const rec = (i, escolha) => {
    if (i === chaves.length) {
      const s = Object.fromEntries(nomes.map((n, j) => [n, Object.fromEntries(chaves.map((k, c) => [k, escolha[c][j]]))]));
      if (pistas.every((p) => p(s))) sols.push(s);
      return;
    }
    for (const p of perms[i]) rec(i + 1, [...escolha, p]);
  };
  rec(0, []);
  return sols;
};
/* Ordens: cada solução é um vetor de nomes, da 1ª posição à última. */
export const ordens = (nomes, pistas) => permutacoes(nomes).filter((o) => pistas.every((p) => p(o)));
export const pos = (o, nome) => o.indexOf(nome) + 1;

/* A resposta precisa ser a mesma em todas as soluções. */
export const resposta = (sols, f) => {
  if (sols.length === 0) throw new Error("as pistas são contraditórias");
  const r = new Set(sols.map(f));
  if (r.size !== 1) throw new Error(`as pistas admitem respostas diferentes: ${[...r].join(" | ")}`);
  return [...r][0];
};
export const sempre = (sols, f) => sols.length > 0 && sols.every(f);
export const quem = (s, categoria, valor) => Object.keys(s).find((n) => s[n][categoria] === valor);
