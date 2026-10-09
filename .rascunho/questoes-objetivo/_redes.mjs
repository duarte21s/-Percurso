/* Endereçamento IP para conferir, em código, as questões de redes: máscaras,
   endereço de rede, broadcast, quantidade de hosts, sub-redes, classes e
   endereços privados, binário e IPv6. Tudo por aritmética sobre inteiros de 32
   bits (e sobre grupos de 16 bits, no IPv6), e nunca por regra decorada: o
   que a explicação diz ("blocos de 64") é conferido aqui por máscara e por
   operação bit a bit. */

export { unicoV, qualNum, lerNum } from "./_matematica-fund.mjs";

export const ipInt = (s) => s.split(".").reduce((a, b) => a * 256 + Number(b), 0);
export const intIp = (n) => [24, 16, 8, 0].map((sh) => Math.floor(n / 2 ** sh) % 256).join(".");
/* máscara de prefixo /n como inteiro sem sinal */
export const maskInt = (n) => (n === 0 ? 0 : (0xffffffff << (32 - n)) >>> 0);
export const maskTxt = (n) => intIp(maskInt(n));
/* prefixo a partir de máscara escrita em decimal pontuado (precisa ser contígua) */
export const prefixoDe = (txt) => {
  const bits = ipInt(txt).toString(2).padStart(32, "0");
  if (!/^1*0*$/.test(bits)) return null;
  return bits.indexOf("0") === -1 ? 32 : bits.indexOf("0");
};
export const rede = (ip, n) => intIp(((ipInt(ip) & maskInt(n)) >>> 0));
export const broadcast = (ip, n) => intIp(((ipInt(ip) | (~maskInt(n) >>> 0)) >>> 0));
export const totalEnd = (n) => 2 ** (32 - n);
export const hosts = (n) => (n >= 31 ? 0 : 2 ** (32 - n) - 2);
export const primeiroHost = (ip, n) => intIp(ipInt(rede(ip, n)) + 1);
export const ultimoHost = (ip, n) => intIp(ipInt(broadcast(ip, n)) - 1);
export const mesmaRede = (a, b, n) => rede(a, n) === rede(b, n);
export const subredes = (nOrigem, nNovo) => 2 ** (nNovo - nOrigem);
/* menor prefixo que ainda comporta pelo menos `h` hosts (a sub-rede mais justa) */
export const prefixoParaHosts = (h) => { for (let n = 30; n >= 0; n--) if (hosts(n) >= h) return n; return null; };
export const binario = (ip) => ip.split(".").map((o) => Number(o).toString(2).padStart(8, "0")).join(".");
export const dePonto = (bin) => bin.split(".").map((o) => parseInt(o, 2)).join(".");
export const classe = (ip) => { const p = Number(ip.split(".")[0]); return p < 128 ? "A" : p < 192 ? "B" : p < 224 ? "C" : p < 240 ? "D" : "E"; };
export const privado = (ip) => { const n = ipInt(ip); const dentro = (base, p) => ((n & maskInt(p)) >>> 0) === ipInt(base); return dentro("10.0.0.0", 8) || dentro("172.16.0.0", 12) || dentro("192.168.0.0", 16); };

/* IPv6: expande uma abreviação válida em 8 grupos de 16 bits; devolve null se inválida */
export const expandeV6 = (txt) => {
  if ((txt.match(/::/g) || []).length > 1 || /:::/.test(txt)) return null;
  const [esq, dir] = txt.includes("::") ? txt.split("::") : [txt, null];
  const g = (s) => (s === "" ? [] : s.split(":"));
  const a = g(esq), b = dir === null ? [] : g(dir);
  if ([...a, ...b].some((x) => !/^[0-9a-fA-F]{1,4}$/.test(x))) return null;
  let todos;
  if (dir === null) { if (a.length !== 8) return null; todos = a; }
  else { const falta = 8 - a.length - b.length; if (falta < 1) return null; todos = [...a, ...Array(falta).fill("0"), ...b]; }
  return todos.map((x) => parseInt(x, 16).toString(16).padStart(4, "0")).join(":");
};

/* devolve o índice da única alternativa igual (como texto) ao valor; -1 se não for única */
export const indiceDe = (valor, alternativas) => { const a = alternativas.map((t) => String(t) === String(valor)); return a.filter(Boolean).length === 1 ? a.indexOf(true) : -1; };
