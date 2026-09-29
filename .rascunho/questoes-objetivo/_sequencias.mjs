/* Ferramentas de conferência compartilhadas pelos rascunhos de sequências.

   - `proximo(termos, correta)`: devolve `correta` se nenhuma regra simples da
     bateria se encaixar nos termos e prever outro número; senão, lança erro
     (a sequência admitiria duas respostas).
   - `lacuna(termos, alternativas, confere)`: `termos` tem um `null`; só a
     alternativa correta pode deixar a sequência dentro de alguma regra.
   - `porRecorrencia`, `porFormula`, `alternando`: a regra da questão recalcula
     os termos dados (erro de digitação derruba a conferência) e produz o
     seguinte. */

export const unicoV = (arr) => { const ok = arr.map((b, i) => (b ? i : -1)).filter((i) => i >= 0); return ok.length === 1 ? ok[0] : -1; };
export const intervalo = (a, b) => Array.from({ length: Math.max(0, b - a + 1) }, (_, i) => a + i);
export const primo = (n) => n > 1 && intervalo(2, Math.floor(Math.sqrt(n))).every((d) => n % d !== 0);
export const perto = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
export const iguais = (arr) => arr.length > 0 && arr.every((x) => perto(x, arr[0]));
export const difs = (a) => a.slice(1).map((x, i) => x - a[i]);
export const razoes = (a) => (a.slice(0, -1).some((x) => x === 0) ? null : a.slice(1).map((x, i) => x / a[i]));

export const fmt = (n) => n.toLocaleString("pt-BR", { maximumFractionDigits: 4 }).replace("-", "−");
export const lista = (t) => t.map((x) => (x === null ? "?" : fmt(x))).join(t.some((x) => x !== null && !Number.isInteger(x)) ? "; " : ", ");

export const REGRAS = {
  "diferenças constantes": (a) => {
    const pilha = [a];
    for (let k = 1; k <= 3; k++) {
      if (pilha.at(-1).length < 3) break;
      const d = difs(pilha.at(-1));
      pilha.push(d);
      if (iguais(d)) {
        let prox = d[0];
        for (let j = pilha.length - 2; j >= 0; j--) prox = pilha[j].at(-1) + prox;
        return prox;
      }
    }
    return null;
  },
  "razão constante": (a) => { const r = razoes(a); return r && r.length >= 2 && iguais(r) ? a.at(-1) * r[0] : null; },
  "soma dos dois anteriores": (a) => (a.length >= 4 && a.slice(2).every((x, i) => perto(x, a[i] + a[i + 1])) ? a.at(-1) + a.at(-2) : null),
  "soma dos três anteriores": (a) => (a.length >= 5 && a.slice(3).every((x, i) => perto(x, a[i] + a[i + 1] + a[i + 2])) ? a.at(-1) + a.at(-2) + a.at(-3) : null),
  "a·x + b": (a) => {
    if (a.length < 4 || a[1] === a[0]) return null;
    const p = (a[2] - a[1]) / (a[1] - a[0]), q = a[1] - p * a[0];
    return a.slice(1).every((x, i) => perto(x, p * a[i] + q)) ? p * a.at(-1) + q : null;
  },
  "diferenças em progressão geométrica": (a) => { const d = difs(a); const r = razoes(d); return d.length >= 3 && r && iguais(r) ? a.at(-1) + d.at(-1) * r[0] : null; },
  "razões em progressão aritmética": (a) => { const r = razoes(a); if (!r || r.length < 3) return null; const dr = difs(r); return iguais(dr) ? a.at(-1) * (r.at(-1) + dr[0]) : null; },
  "duas sequências intercaladas": (a) => {
    if (a.length < 6) return null;
    const proxDe = (s) => { const d = difs(s); if (iguais(d)) return s.at(-1) + d[0]; const r = razoes(s); return r && iguais(r) ? s.at(-1) * r[0] : null; };
    const p = proxDe(a.filter((_, i) => i % 2 === 0)), i = proxDe(a.filter((_, i) => i % 2 === 1));
    if (p === null || i === null) return null;
    return a.length % 2 === 0 ? p : i;
  },
  "duas operações alternadas": (a) => {
    if (a.length < 5) return null;
    const ops = (x, y) => [(v) => v + (y - x), ...(x !== 0 ? [(v) => v * (y / x)] : [])];
    for (const f of ops(a[0], a[1]))
      for (const g of ops(a[1], a[2])) {
        const seq = [a[0]];
        for (let i = 1; i < a.length; i++) seq.push((i % 2 === 1 ? f : g)(seq[i - 1]));
        if (seq.every((x, i) => perto(x, a[i]))) return (a.length % 2 === 1 ? f : g)(a.at(-1));
      }
    return null;
  },
};

export const proximo = (t, correta) => {
  for (const [nome, regra] of Object.entries(REGRAS)) {
    const p = regra(t);
    if (p !== null && !perto(p, correta)) throw new Error(`sequência ambígua: “${nome}” também se encaixa e dá ${p}`);
  }
  return correta;
};
export const encaixa = (s) => Object.values(REGRAS).some((r) => { const p = r(s.slice(0, -1)); return p !== null && perto(p, s.at(-1)); });
export const lacuna = (t, alt, confere) => {
  const preenche = (v) => t.map((x) => (x === null ? v : x));
  confere(preenche(alt[0]));
  return unicoV(alt.map((v) => encaixa(preenche(v))));
};
export const porRecorrencia = (t, k, f) => {
  for (let i = k; i < t.length; i++) if (!perto(f(...t.slice(i - k, i)), t[i])) throw new Error(`o termo ${t[i]} não segue a regra`);
  return f(...t.slice(-k));
};
export const porFormula = (t, f) => {
  t.forEach((x, i) => { if (!perto(f(i + 1), x)) throw new Error(`o termo ${x} não segue a fórmula`); });
  return f(t.length + 1);
};
export const alternando = (t, ops) => {
  for (let i = 1; i < t.length; i++) if (!perto(ops[(i - 1) % ops.length](t[i - 1]), t[i])) throw new Error(`o termo ${t[i]} não segue a regra`);
  return ops[(t.length - 1) % ops.length](t.at(-1));
};

/* Letras: A = 1, …, Z = 26; `letra` dá a volta no alfabeto. */
export const pos = (c) => c.charCodeAt(0) - 64;
export const letra = (n) => String.fromCharCode(65 + ((((n - 1) % 26) + 26) % 26));
