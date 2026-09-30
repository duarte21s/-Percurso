/* Avaliador mínimo de fórmulas de planilha, no dialeto do Excel em português:
   argumentos separados por ";", decimal com vírgula, nomes de função em
   português. Serve para conferir o resultado de fórmulas escritas nos
   enunciados por um caminho diferente da explicação: o texto da fórmula é
   lido e calculado, em vez de se repetir a resposta.

   avalia(formula, celulas)   celulas: { A1: 10, B2: "texto", C3: null }
   copia(formula, dLinhas, dColunas)   desloca as referências relativas, como
                                        o preenchimento ou a cópia da célula
   Erros voltam como { erro: "#DIV/0!" }. */

export { unicoV, qualNum, lerNum } from "./_matematica-fund.mjs";

class Erro { constructor(c) { this.erro = c; } }
const falha = (c) => { throw new Erro(c); };

const REF = /^(\$?)([A-Za-z]{1,3})(\$?)(\d+)$/;
const colNum = (s) => s.toUpperCase().split("").reduce((a, c) => a * 26 + c.charCodeAt(0) - 64, 0);
export const nomeCol = (n) => { let s = ""; while (n > 0) { const r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = Math.floor((n - 1) / 26); } return s; };

function tokeniza(f) {
  const t = []; let i = 0;
  while (i < f.length) {
    const c = f[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === '"') {
      let j = i + 1, s = "";
      while (j < f.length) { if (f[j] === '"') { if (f[j + 1] === '"') { s += '"'; j += 2; continue; } break; } s += f[j++]; }
      t.push({ k: "str", v: s }); i = j + 1; continue;
    }
    let m = /^\d+(?:,\d+)?/.exec(f.slice(i));
    if (m) { t.push({ k: "num", v: parseFloat(m[0].replace(",", ".")) }); i += m[0].length; continue; }
    m = /^[A-Za-zÀ-ÿ_$][A-Za-zÀ-ÿ0-9_.$]*/.exec(f.slice(i));
    if (m) { t.push({ k: "nome", v: m[0] }); i += m[0].length; continue; }
    m = /^(<>|<=|>=|[=<>+\-*\/^&%();:])/.exec(f.slice(i));
    if (m) { t.push({ k: "op", v: m[0] }); i += m[0].length; continue; }
    falha("#NOME?");
  }
  return t;
}

function parse(tokens) {
  let p = 0;
  const olha = () => tokens[p];
  const op = (...v) => olha() && olha().k === "op" && v.includes(olha().v);
  const come = () => tokens[p++];
  function comparacao() { let a = concat(); while (op("=", "<>", "<", ">", "<=", ">=")) { const o = come().v; a = { t: "bin", o, a, b: concat() }; } return a; }
  function concat() { let a = soma(); while (op("&")) { come(); a = { t: "bin", o: "&", a, b: soma() }; } return a; }
  function soma() { let a = produto(); while (op("+", "-")) { const o = come().v; a = { t: "bin", o, a, b: produto() }; } return a; }
  function produto() { let a = potencia(); while (op("*", "/")) { const o = come().v; a = { t: "bin", o, a, b: potencia() }; } return a; }
  function potencia() { let a = unario(); while (op("^")) { come(); a = { t: "bin", o: "^", a, b: unario() }; } return a; }
  function unario() { if (op("-", "+")) { const o = come().v; const x = unario(); return o === "-" ? { t: "neg", a: x } : x; } return posfixo(); }
  function posfixo() { let a = primario(); while (op("%")) { come(); a = { t: "pct", a }; } return a; }
  function primario() {
    const k = come();
    if (!k) falha("#NOME?");
    if (k.k === "num") return { t: "num", v: k.v };
    if (k.k === "str") return { t: "str", v: k.v };
    if (k.k === "op" && k.v === "(") { const e = comparacao(); if (!op(")")) falha("#NOME?"); come(); return e; }
    if (k.k === "nome") {
      if (op("(")) {
        come(); const args = [];
        if (!op(")")) { args.push(comparacao()); while (op(";")) { come(); args.push(comparacao()); } }
        if (!op(")")) falha("#NOME?"); come();
        return { t: "fn", n: k.v.toUpperCase(), args };
      }
      if (/^VERDADEIRO$/i.test(k.v)) return { t: "bool", v: true };
      if (/^FALSO$/i.test(k.v)) return { t: "bool", v: false };
      if (!REF.test(k.v)) falha("#NOME?");
      if (op(":")) { come(); const k2 = come(); if (!k2 || !REF.test(k2.v)) falha("#NOME?"); return { t: "rng", a: k.v, b: k2.v }; }
      return { t: "ref", r: k.v };
    }
    falha("#NOME?");
  }
  const r = comparacao();
  if (p < tokens.length) falha("#NOME?");
  return r;
}

const num = (v) => {
  if (v === null || v === undefined || v === "") return 0;
  if (typeof v === "number") return v;
  if (typeof v === "boolean") return v ? 1 : 0;
  if (typeof v === "string" && v.trim() !== "" && !Number.isNaN(Number(v.replace(",", ".")))) return Number(v.replace(",", "."));
  return falha("#VALOR!");
};
const txt = (v) => (v === null || v === undefined ? "" : typeof v === "boolean" ? (v ? "VERDADEIRO" : "FALSO") : typeof v === "number" ? String(v).replace(".", ",") : String(v));
const arred = (x, d) => { const f = 10 ** d; return Math.sign(x) * Math.round((Math.abs(x) + Number.EPSILON * Math.abs(x)) * f) / f; };

function compara(a, b) {
  if (a === null) a = typeof b === "string" ? "" : 0;
  if (b === null) b = typeof a === "string" ? "" : 0;
  const rank = (v) => (typeof v === "number" ? 0 : typeof v === "string" ? 1 : 2);
  if (rank(a) !== rank(b)) return rank(a) - rank(b);
  if (typeof a === "string") { const x = a.toLowerCase(), y = b.toLowerCase(); return x < y ? -1 : x > y ? 1 : 0; }
  return Number(a) - Number(b);
}

function casaCriterio(crit) {
  if (typeof crit === "number") return (v) => typeof v === "number" && v === crit;
  const s = String(crit);
  const m = /^(<>|<=|>=|=|<|>)?(.*)$/.exec(s);
  const o = m[1] || "="; const r = m[2];
  const n = r !== "" && !Number.isNaN(Number(r.replace(",", "."))) ? Number(r.replace(",", ".")) : null;
  return (v) => {
    if (n !== null) {
      if (typeof v !== "number") return o === "<>";
      return o === "=" ? v === n : o === "<>" ? v !== n : o === "<" ? v < n : o === ">" ? v > n : o === "<=" ? v <= n : v >= n;
    }
    if (o === "=" || o === "<>") {
      const rx = new RegExp("^" + r.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i");
      const ok = typeof v === "string" && rx.test(v);
      return o === "=" ? ok : !ok;
    }
    if (typeof v !== "string") return false;
    const c = compara(v, r);
    return o === "<" ? c < 0 : o === ">" ? c > 0 : o === "<=" ? c <= 0 : c >= 0;
  };
}

export function avalia(formula, celulas = {}) {
  try {
    const ast = parse(tokeniza(String(formula).replace(/^=/, "")));
    const valorRef = (r) => { const m = REF.exec(r); const k = m[2].toUpperCase() + m[4]; const v = celulas[k]; return v === undefined ? null : v; };
    const faixa = (a, b) => {
      const A = REF.exec(a), B = REF.exec(b);
      const c1 = Math.min(colNum(A[2]), colNum(B[2])), c2 = Math.max(colNum(A[2]), colNum(B[2]));
      const l1 = Math.min(+A[4], +B[4]), l2 = Math.max(+A[4], +B[4]);
      const linhas = [];
      for (let l = l1; l <= l2; l++) { const row = []; for (let c = c1; c <= c2; c++) { const v = celulas[nomeCol(c) + l]; row.push(v === undefined ? null : v); } linhas.push(row); }
      return { rng: true, linhas };
    };
    const planos = (v) => (v && v.rng ? v.linhas.flat() : [v]);
    const numeros = (vs) => vs.flatMap((v) => (v && v.rng ? v.linhas.flat().filter((x) => typeof x === "number") : [num(v)]));
    const ev = (n) => {
      switch (n.t) {
        case "num": case "str": case "bool": return n.v;
        case "ref": return valorRef(n.r);
        case "rng": return faixa(n.a, n.b);
        case "neg": return -num(ev(n.a));
        case "pct": return num(ev(n.a)) / 100;
        case "bin": {
          const a = ev(n.a), b = ev(n.b);
          if (n.o === "&") return txt(a) + txt(b);
          if (["=", "<>", "<", ">", "<=", ">="].includes(n.o)) {
            const c = compara(a, b);
            return n.o === "=" ? c === 0 : n.o === "<>" ? c !== 0 : n.o === "<" ? c < 0 : n.o === ">" ? c > 0 : n.o === "<=" ? c <= 0 : c >= 0;
          }
          const x = num(a), y = num(b);
          if (n.o === "+") return x + y;
          if (n.o === "-") return x - y;
          if (n.o === "*") return x * y;
          if (n.o === "/") { if (y === 0) falha("#DIV/0!"); return x / y; }
          if (n.o === "^") { const r = x ** y; if (!Number.isFinite(r)) falha("#NÚM!"); return r; }
          return falha("#NOME?");
        }
        case "fn": return chama(n);
        default: return falha("#NOME?");
      }
    };
    const chama = (n) => {
      const a = n.args;
      const v = () => a.map(ev);
      switch (n.n) {
        case "SE": { const c = ev(a[0]); const ok = typeof c === "boolean" ? c : num(c) !== 0; return ok ? (a[1] ? ev(a[1]) : true) : (a[2] ? ev(a[2]) : false); }
        case "E": return v().flatMap(planos).every((x) => (typeof x === "boolean" ? x : num(x) !== 0));
        case "OU": return v().flatMap(planos).some((x) => (typeof x === "boolean" ? x : num(x) !== 0));
        case "NÃO": return !(typeof ev(a[0]) === "boolean" ? ev(a[0]) : num(ev(a[0])) !== 0);
        case "SEERRO": try { return ev(a[0]); } catch (e) { if (e instanceof Erro) return ev(a[1]); throw e; }
        case "SOMA": return numeros(v()).reduce((s, x) => s + x, 0);
        case "MÉDIA": { const n2 = numeros(v()); if (!n2.length) falha("#DIV/0!"); return n2.reduce((s, x) => s + x, 0) / n2.length; }
        case "MÁXIMO": { const n2 = numeros(v()); return n2.length ? Math.max(...n2) : 0; }
        case "MÍNIMO": { const n2 = numeros(v()); return n2.length ? Math.min(...n2) : 0; }
        case "MED": { const n2 = numeros(v()).sort((x, y) => x - y); if (!n2.length) falha("#NÚM!"); const h = n2.length >> 1; return n2.length % 2 ? n2[h] : (n2[h - 1] + n2[h]) / 2; }
        case "MAIOR": { const n2 = numeros([ev(a[0])]).sort((x, y) => y - x); const k = num(ev(a[1])); if (k < 1 || k > n2.length) falha("#NÚM!"); return n2[k - 1]; }
        case "MENOR": { const n2 = numeros([ev(a[0])]).sort((x, y) => x - y); const k = num(ev(a[1])); if (k < 1 || k > n2.length) falha("#NÚM!"); return n2[k - 1]; }
        case "CONT.NÚM": return v().flatMap(planos).filter((x) => typeof x === "number").length;
        case "CONT.VALORES": return v().flatMap(planos).filter((x) => x !== null && x !== "").length;
        case "CONTAR.VAZIO": return v().flatMap(planos).filter((x) => x === null || x === "").length;
        case "CONT.SE": { const r = ev(a[0]); const f = casaCriterio(ev(a[1])); return planos(r).filter((x) => x !== null && f(x)).length; }
        case "SOMASE": { const r = ev(a[0]); const f = casaCriterio(ev(a[1])); const s = a[2] ? ev(a[2]) : r; const R = planos(r), S = planos(s); return R.reduce((t, x, i) => (x !== null && f(x) && typeof S[i] === "number" ? t + S[i] : t), 0); }
        case "MÉDIASE": { const r = ev(a[0]); const f = casaCriterio(ev(a[1])); const s = a[2] ? ev(a[2]) : r; const R = planos(r), S = planos(s); const ks = R.map((x, i) => (x !== null && f(x) && typeof S[i] === "number" ? S[i] : null)).filter((x) => x !== null); if (!ks.length) falha("#DIV/0!"); return ks.reduce((t, x) => t + x, 0) / ks.length; }
        case "SOMARPRODUTO": { const L = v().map((x) => planos(x)); let t = 0; for (let i = 0; i < L[0].length; i++) t += L.reduce((p, l) => p * (typeof l[i] === "number" ? l[i] : 0), 1); return t; }
        case "ARRED": return arred(num(ev(a[0])), num(ev(a[1])));
        case "ARREDONDAR.PARA.CIMA": { const x = num(ev(a[0])), f = 10 ** num(ev(a[1])); return Math.sign(x) * Math.ceil(Math.abs(x) * f - 1e-9) / f; }
        case "ARREDONDAR.PARA.BAIXO": { const x = num(ev(a[0])), f = 10 ** num(ev(a[1])); return Math.sign(x) * Math.floor(Math.abs(x) * f + 1e-9) / f; }
        case "TRUNCAR": { const x = num(ev(a[0])), f = 10 ** (a[1] ? num(ev(a[1])) : 0); return Math.trunc(x * f + Math.sign(x) * 1e-9) / f; }
        case "INT": return Math.floor(num(ev(a[0])));
        case "MOD": { const x = num(ev(a[0])), y = num(ev(a[1])); if (y === 0) falha("#DIV/0!"); return x - y * Math.floor(x / y); }
        case "ABS": return Math.abs(num(ev(a[0])));
        case "RAIZ": { const x = num(ev(a[0])); if (x < 0) falha("#NÚM!"); return Math.sqrt(x); }
        case "POTÊNCIA": return num(ev(a[0])) ** num(ev(a[1]));
        case "CONCATENAR": case "CONCAT": return v().flatMap(planos).map(txt).join("");
        case "ESQUERDA": return txt(ev(a[0])).slice(0, a[1] ? num(ev(a[1])) : 1);
        case "DIREITA": { const s = txt(ev(a[0])); const k = a[1] ? num(ev(a[1])) : 1; return k === 0 ? "" : s.slice(-k); }
        case "NÚM.CARACT": return txt(ev(a[0])).length;
        case "MAIÚSCULA": return txt(ev(a[0])).toUpperCase();
        case "MINÚSCULA": return txt(ev(a[0])).toLowerCase();
        case "PROCV": {
          const x = ev(a[0]); const r = ev(a[1]); const col = num(ev(a[2])); const exato = a[3] ? !(ev(a[3]) === true || num(ev(a[3])) !== 0) : false;
          if (col < 1 || col > r.linhas[0].length) falha("#REF!");
          if (exato) { for (const l of r.linhas) if (l[0] !== null && compara(l[0], x) === 0) return l[col - 1]; return falha("#N/D"); }
          let ach = null; for (const l of r.linhas) { if (l[0] !== null && compara(l[0], x) <= 0) ach = l; else break; }
          return ach ? ach[col - 1] : falha("#N/D");
        }
        default: return falha("#NOME?");
      }
    };
    const r = ev(ast);
    return r && r.rng ? r.linhas[0][0] : r;
  } catch (e) {
    if (e instanceof Erro) return { erro: e.erro };
    throw e;
  }
}

/* Desloca as referências relativas de uma fórmula, como ao copiar e colar ou
   ao arrastar a alça de preenchimento. $ trava a coluna ou a linha. */
export function copia(formula, dLinhas, dColunas) {
  return String(formula)
    .split(/("(?:[^"]|"")*")/)
    .map((pedaco) => {
      if (pedaco.startsWith('"')) return pedaco;
      return pedaco.replace(/(?<![A-Za-zÀ-ÿ0-9_.$])(\$?)([A-Za-z]{1,3})(\$?)(\d+)(?![\dA-Za-zÀ-ÿ(._])/g, (_, ca, col, la, lin) => {
        const c = ca ? col.toUpperCase() : nomeCol(colNum(col) + dColunas);
        const l = la ? lin : String(+lin + dLinhas);
        return `${ca}${c}${la}${l}`;
      });
    })
    .join("");
}

/* compara o resultado com as alternativas de texto: números (vírgula decimal),
   textos entre aspas ou códigos de erro. Devolve o índice único ou -1 */
export function alternativaDe(resultado, alternativas) {
  const igual = (alt) => {
    const s = String(alt).trim();
    if (resultado && resultado.erro) return s === resultado.erro;
    if (typeof resultado === "boolean") return s === (resultado ? "VERDADEIRO" : "FALSO");
    if (typeof resultado === "string") return s === resultado || s === `"${resultado}"`;
    const x = Number(s.replace(/\./g, "").replace(",", "."));
    return s !== "" && Number.isFinite(x) && Math.abs(x - resultado) <= 1e-9 * Math.max(1, Math.abs(resultado));
  };
  const a = alternativas.map(igual);
  return a.filter(Boolean).length === 1 ? a.indexOf(true) : -1;
}
