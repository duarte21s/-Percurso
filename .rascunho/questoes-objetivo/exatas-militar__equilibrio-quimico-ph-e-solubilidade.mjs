/* Rascunho — Exatas nível militar / Equilíbrio químico, pH e solubilidade.

   A explicação usa as aproximações da prova (√(Ka · C), Henderson–
   Hasselbalch, s = √Kps etc.); a conferência resolve o problema "cheio":
   pH pela bisseção no balanço de cargas, incluindo a autoionização da
   água; equilíbrios gasosos pelo avanço que faz o quociente de reação
   igualar a constante; solubilidades pela bisseção em Kps, com o íon comum
   quando houver; deslocamentos de Le Chatelier recalculando o novo
   equilíbrio depois da perturbação. */

import { unicoV, lerExpr, bissecao, simula, massaMolar } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Equilíbrio químico, pH e solubilidade";
export const arquivo = "exatas-militar__equilibrio-quimico-ph-e-solubilidade";

const Kw = 1e-14;
/* [H⁺] que zera o balanço de cargas f(h) = cargas positivas − negativas
   (crescente em h); bisseção no logaritmo de h */
const hDoBalanco = (f) => 10 ** bissecao((p) => f(10 ** p), -16, 2, 200);
const pH = (h) => -Math.log10(h);
/* quociente de reação com avanço x: reagentes e produtos como [coef, conc. inicial] */
const Q = (reag, prod, x) => prod.reduce((q, [c, n]) => q * (n + c * x) ** c, 1) / reag.reduce((q, [c, n]) => q * (n - c * x) ** c, 1);
/* avanço que leva Q até K (negativo = no sentido dos reagentes) */
const avanco = (reag, prod, K) => {
  const xmax = Math.min(...reag.map(([c, n]) => n / c)), xmin = -Math.min(...prod.map(([c, n]) => n / c));
  const g = (x) => Math.log(Q(reag, prod, x)) - Math.log(K);
  return bissecao(g, xmin + 1e-12 * (xmax - xmin), xmax - 1e-12 * (xmax - xmin), 200);
};
/* solubilidade s de um sal com íons nas proporções a : b, com concentrações iniciais c1, c2 (íon comum) */
const solubilidade = (Kps, a = 1, b = 1, c1 = 0, c2 = 0) => 10 ** bissecao((p) => { const s = 10 ** p; return Math.log((c1 + a * s) ** a * (c2 + b * s) ** b) - Math.log(Kps); }, -30, 1, 200);
const MASSAS = { H: 1, C: 12, N: 14, O: 16, Na: 23, Cl: 35.5, Ag: 108, I: 127, Pb: 207, Ba: 137, S: 32 };

/* valor da alternativa: "1 · 10⁻⁴ mol/L", "≈ 2,87", "100 vezes", "2%", "≈ 0,92 g/L" */
const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
const FATOR = { "mol/L": 1, "g/L": 1, mol: 1, atm: 1, vezes: 1, g: 1, "%": 0.01 };
const valor = (t) => {
  const m = String(t).trim().replace(/^≈\s*/, "").match(/^(.*?)\s*(mol\/L|g\/L|mol|atm|vezes|g|%)?$/);
  const s = m[1].replace(/10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (x, e) => `10**(${[...e].map((c) => SUP[c]).join("")})`).replace(/\.(?=\d{3})/g, "");
  return lerExpr(s) * (FATOR[m[2]] ?? 1);
};
/* índice da única alternativa com o valor x (tolerância relativa; zero só casa com zero) */
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = valor(t); } catch { return false; } return x === 0 ? v === 0 : Math.abs(v - x) <= tol * Math.abs(x); }));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["2", "12", "0,01", "−2", "1"];
    return {
      d: "facil",
      e: "A 25 °C, qual é o pH de uma solução aquosa de HCl 0,01 mol/L?",
      o,
      x: "O HCl é um ácido forte: ioniza-se totalmente, e [H⁺] = 0,01 = 10⁻² mol/L. O pH é o logaritmo negativo da concentração de H⁺: pH = −log 10⁻² = 2. A contribuição da água, da ordem de 10⁻⁷ mol/L, é desprezível diante disso.\n\n12 é o pOH dessa solução, 14 − 2. 0,01 é a concentração de H⁺, e não o pH. −2 esquece o sinal negativo da definição, calculando log [H⁺]. E 1 lê a concentração como 0,1 mol/L, perdendo um zero.",
      v: { i: () => qual(pH(hDoBalanco((h) => h - 0.01 - Kw / h)), o, 1e-4) },
    };
  })(),
  (() => {
    const o = ["11", "3", "0,001", "14", "10"];
    return {
      d: "facil",
      e: "A 25 °C, qual é o pH de uma solução aquosa de NaOH 0,001 mol/L?",
      o,
      x: "O NaOH é uma base forte: dissocia-se totalmente, e [OH⁻] = 10⁻³ mol/L. O pOH é −log 10⁻³ = 3 e, a 25 °C, pH + pOH = 14: pH = 14 − 3 = 11. A solução é básica, com pH acima de 7; os íons H⁺ que existem nela vêm só da autoionização da água, [H⁺] = 10⁻¹⁴/10⁻³ = 10⁻¹¹ mol/L.\n\n3 é o pOH, e não o pH. 0,001 é a concentração de OH⁻. 14 é a soma pH + pOH, e não o pH. E 10 erra o expoente, usando [OH⁻] = 10⁻⁴ mol/L.",
      v: { i: () => qual(pH(hDoBalanco((h) => h + 0.001 - Kw / h)), o, 1e-4) },
    };
  })(),
  (() => {
    const o = ["1 · 10⁻⁴ mol/L", "4 mol/L", "1 · 10⁴ mol/L", "1 · 10⁻¹⁰ mol/L", "0,4 mol/L"];
    return {
      d: "facil",
      e: "A 25 °C, uma solução tem pH = 4. Qual é a sua concentração de íons H⁺?",
      o,
      x: "Como pH = −log [H⁺], a concentração é [H⁺] = 10^(−pH) = 10⁻⁴ mol/L. Cada unidade de pH a menos corresponde a uma concentração de H⁺ 10 vezes maior; a solução de pH 4 é ácida.\n\n4 mol/L toma o pH como concentração. 1 · 10⁴ mol/L esquece o sinal negativo do expoente. 1 · 10⁻¹⁰ mol/L é a concentração de OH⁻, 10^(−(14 − 4)). E 0,4 mol/L divide o pH por 10, em vez de usá-lo como expoente.",
      v: { i: () => qual(10 ** bissecao((p) => -p - 4, -14, 0), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["2", "0,5", "1", "0,67", "4"];
    return {
      d: "facil",
      e: "No equilíbrio N₂ + 3 H₂ ⇌ 2 NH₃, as concentrações são [N₂] = 2 mol/L, [H₂] = 1 mol/L e [NH₃] = 2 mol/L. Qual é o valor da constante Kc?",
      o,
      x: "A constante de equilíbrio é o produto das concentrações dos produtos dividido pelo dos reagentes, cada concentração elevada ao seu coeficiente: Kc = [NH₃]²/([N₂] · [H₂]³) = 2²/(2 · 1³) = 4/2 = 2.\n\n0,5 inverte a expressão, pondo os reagentes no numerador. 1 ignora os expoentes, 2/(2 · 1). 0,67 multiplica as concentrações pelos coeficientes, 4/(2 · 3), em vez de elevá-las. E 4 esquece o denominador, ficando só com [NH₃]².",
      /* no equilíbrio, as velocidades direta (kd [N₂][H₂]³) e inversa (ki [NH₃]²) se igualam: Kc = kd/ki */
      v: { i: () => { const ki = 1, kd = bissecao((k) => k * 2 * 1 ** 3 - ki * 2 ** 2, 0, 100); return qual(kd / ki, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["O equilíbrio se desloca no sentido de formar mais NH₃", "O equilíbrio se desloca no sentido de formar mais N₂ e H₂", "Nada, porque a constante de equilíbrio não muda", "A constante de equilíbrio aumenta", "O sistema deixa de estar em equilíbrio para sempre"];
    return {
      d: "facil",
      e: "Num sistema em equilíbrio, N₂ + 3 H₂ ⇌ 2 NH₃, adiciona-se N₂, mantendo a temperatura e o volume. O que acontece?",
      o,
      x: "Ao adicionar N₂, o quociente de reação, Q = [NH₃]²/([N₂] · [H₂]³), fica menor que Kc, porque o denominador aumenta. Para voltar a Q = Kc, parte do N₂ reage com H₂ e forma NH₃: o equilíbrio se desloca para a direita, consumindo em parte o reagente adicionado (princípio de Le Chatelier).\n\nFormar mais N₂ e H₂ seria o deslocamento oposto, provocado pela adição de NH₃. A constante não muda, de fato, e é justamente por isso que as concentrações se reajustam; ela só muda com a temperatura. E o sistema volta ao equilíbrio, com novas concentrações.",
      /* equilíbrio [N₂] = 2, [H₂] = 1, [NH₃] = 2 (Kc = 2); soma 1 mol/L de N₂ e recalcula o avanço */
      v: { i: () => { const K = 2 ** 2 / (2 * 1 ** 3); const x = avanco([[1, 3], [3, 1]], [[2, 2]], K); return unicoV(o.map((_, i) => i === (x > 1e-12 ? 0 : x < -1e-12 ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["1 · 10⁻¹⁰", "1 · 10⁻⁵", "2 · 10⁻⁵", "2 · 10⁻¹⁰", "1 · 10⁻²⁵"];
    return {
      d: "facil",
      e: "A solubilidade do AgCl em água, a 25 °C, é de 1 · 10⁻⁵ mol/L. Qual é o seu produto de solubilidade, Kps?",
      o,
      x: "Cada mol de AgCl dissolvido libera 1 mol de Ag⁺ e 1 mol de Cl⁻: na solução saturada, [Ag⁺] = [Cl⁻] = s = 10⁻⁵ mol/L. O produto de solubilidade é Kps = [Ag⁺] · [Cl⁻] = 10⁻⁵ · 10⁻⁵ = 10⁻¹⁰.\n\n1 · 10⁻⁵ confunde o Kps com a solubilidade. 2 · 10⁻⁵ soma as concentrações dos íons em vez de multiplicá-las. 2 · 10⁻¹⁰ inclui um fator 2 que não existe num sal de proporção 1 : 1. E 1 · 10⁻²⁵ multiplica os expoentes em vez de somá-los.",
      /* para cada alternativa, dissolve o sal com aquele Kps e vê qual dá s = 10⁻⁵ mol/L */
      v: { i: () => unicoV(o.map((t) => Math.abs(solubilidade(valor(t)) - 1e-5) < 1e-12)) },
    };
  })(),
  (() => {
    const o = ["100 vezes", "2 vezes", "1,67 vezes", "20 vezes", "1.000 vezes"];
    return {
      d: "facil",
      e: "A 25 °C, uma solução A tem pH = 3, e uma solução B, pH = 5. Quantas vezes a concentração de H⁺ de A é maior que a de B?",
      o,
      x: "A escala de pH é logarítmica: [H⁺] = 10^(−pH). Em A, 10⁻³ mol/L; em B, 10⁻⁵ mol/L. A razão é 10⁻³/10⁻⁵ = 10² = 100: cada unidade de pH corresponde a um fator 10 na concentração, e duas unidades, a um fator 100.\n\n2 vezes é a diferença entre os pH, tomada como razão. 1,67 vezes divide os pH, 5/3. 20 vezes multiplica a diferença por 10. E 1.000 vezes corresponderia a três unidades de pH.",
      v: { i: () => { const h = (valorPH) => 10 ** bissecao((p) => -p - valorPH, -14, 0); return qual(h(3) / h(5), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["pH 10, básica", "pH 4, ácida", "pH 10, ácida", "pH 4, básica", "pH 7, neutra"];
    return {
      d: "facil",
      e: "A 25 °C, uma solução tem pOH = 4. Qual é o seu pH, e ela é ácida ou básica?",
      o,
      x: "A 25 °C, pH + pOH = 14, e então pH = 14 − 4 = 10. Como o pH é maior que 7, a solução é básica: [OH⁻] = 10⁻⁴ mol/L supera [H⁺] = 10⁻¹⁰ mol/L.\n\n“pH 4, ácida” toma o pOH como pH. “pH 10, ácida” acerta o número, mas erra a classificação: pH acima de 7, a 25 °C, é básico. “pH 4, básica” confunde as duas escalas. E “pH 7, neutra” ignora o dado.",
      v: { i: () => { const h = Kw / 1e-4, p = pH(h), tipo = h < 1e-7 ? "básica" : h > 1e-7 ? "ácida" : "neutra"; return unicoV(o.map((t) => { const [a, b] = t.split(", "); return Math.abs(Number(a.replace("pH ", "")) - p) < 1e-9 && b === tipo; })); } },
    };
  })(),
  (() => {
    const o = ["As quantidades no equilíbrio não se alteram", "O equilíbrio se desloca no sentido dos produtos", "O equilíbrio se desloca no sentido dos reagentes", "A constante de equilíbrio aumenta", "A reação direta acelera, e a inversa fica mais lenta"];
    return {
      d: "facil",
      e: "O que acontece quando se adiciona um catalisador a um sistema que já está em equilíbrio químico?",
      o,
      x: "O catalisador oferece um caminho de menor energia de ativação, e isso acelera, na mesma proporção, a reação direta e a inversa. Como a constante de equilíbrio é a razão entre as constantes de velocidade das duas reações, ela não muda, e as quantidades no equilíbrio também não. O catalisador só faz o sistema chegar mais depressa ao equilíbrio, quando ainda não está nele.\n\nOs deslocamentos para os produtos ou para os reagentes exigiriam mudar as concentrações, a pressão ou a temperatura. A constante só depende da temperatura. E o catalisador não favorece um sentido em detrimento do outro.",
      /* A ⇌ B com kd = 2 e ki = 1, com e sem catalisador (as duas constantes multiplicadas por 10) */
      v: { i: () => { const final = (f) => simula((t, y) => [-f * 2 * y[0] + f * 1 * y[1], f * 2 * y[0] - f * 1 * y[1]], [1, 0], 1e-4, (t) => t >= 30).y; const [a1, b1] = final(1), [a2, b2] = final(10); const muda = Math.abs(b1 / a1 - b2 / a2) > 1e-6; return unicoV(o.map((_, i) => i === (muda ? (b2 / a2 > b1 / a1 ? 1 : 2) : 0))); } },
    };
  })(),
  (() => {
    const o = ["1 · 10⁻⁵ mol/L", "1 · 10⁻¹⁰ mol/L", "5 · 10⁻¹¹ mol/L", "2 · 10⁻⁵ mol/L", "1 · 10⁻²⁰ mol/L"];
    return {
      d: "facil",
      e: "O produto de solubilidade do BaSO₄ é 1 · 10⁻¹⁰, a 25 °C. Qual é a sua solubilidade em água pura, em mol/L?",
      o,
      x: "Cada mol dissolvido de BaSO₄ libera 1 mol de Ba²⁺ e 1 mol de SO₄²⁻: com solubilidade s, Kps = s · s = s². Então s = √(10⁻¹⁰) = 10⁻⁵ mol/L. É uma solubilidade muito baixa, e é por isso que o sulfato de bário pode ser ingerido como contraste em exames de raios X, apesar de o íon Ba²⁺ ser tóxico.\n\n1 · 10⁻¹⁰ confunde a solubilidade com o Kps. 5 · 10⁻¹¹ divide o Kps por 2. 2 · 10⁻⁵ soma as concentrações dos dois íons. E 1 · 10⁻²⁰ eleva o Kps ao quadrado em vez de extrair a raiz.",
      v: { i: () => qual(solubilidade(1e-10), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["Desloca-se para os reagentes, e Kc diminui", "Desloca-se para os produtos, e Kc aumenta", "Desloca-se para os reagentes, e Kc não muda", "Não se desloca, e Kc aumenta", "Desloca-se para os produtos, e Kc não muda"];
    return {
      d: "facil",
      e: "Na síntese da amônia, N₂ + 3 H₂ ⇌ 2 NH₃, a reação direta é exotérmica. O que acontece com o equilíbrio e com a constante Kc quando a temperatura aumenta?",
      o,
      x: "Aquecer favorece o sentido que absorve calor, o endotérmico, que aqui é a decomposição da amônia: o equilíbrio se desloca para os reagentes. Diferentemente das mudanças de concentração ou de pressão, a mudança de temperatura altera a própria constante: com menos produto e mais reagente no novo equilíbrio, Kc diminui.\n\n“Para os produtos” valeria para uma reação endotérmica. “Kc não muda” vale para mudanças de concentração e de pressão, mas não de temperatura. E “não se desloca” ignora o efeito do calor sobre o equilíbrio.",
      /* van 't Hoff com ΔH = −92 kJ/mol: K a 600 K comparado a K a 500 K; novo avanço a partir do equilíbrio antigo */
      v: { i: () => { const K = (T) => 2 * Math.exp((92e3 / 8.31) * (1 / T - 1 / 500)); const K2 = K(600); const x = avanco([[1, 2], [3, 1]], [[2, 2]], K2); const sentido = x < -1e-12 ? "reagentes" : x > 1e-12 ? "produtos" : "nenhum"; const kc = K2 < 2 ? "diminui" : K2 > 2 ? "aumenta" : "não muda"; return unicoV(o.map((t) => t === `Desloca-se para os ${sentido}, e Kc ${kc}`)); } },
    };
  })(),
  (() => {
    const o = ["Para a formação de SO₃, o lado com menos mols de gás", "Para a formação de SO₂ e O₂, o lado com mais mols de gás", "Não se desloca, porque a constante não muda", "Para a formação de SO₃, porque a pressão diminui", "Não se desloca, porque a massa total se conserva"];
    return {
      d: "facil",
      e: "No equilíbrio 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), o volume do recipiente é reduzido à metade, a temperatura constante. Para que lado o equilíbrio se desloca?",
      o,
      x: "Reduzir o volume aumenta a pressão. Pelo princípio de Le Chatelier, o sistema reage no sentido de reduzir a pressão, isto é, de diminuir o número de mols de gás: de 3 mols (2 SO₂ + 1 O₂) para 2 mols (2 SO₃). O equilíbrio se desloca para a formação de SO₃. Em termos do quociente: com todas as concentrações dobradas, Q = [SO₃]²/([SO₂]² · [O₂]) fica metade de Kc, e a reação avança para a direita.\n\nO lado com mais mols de gás seria favorecido por uma expansão. A constante não muda, mas o quociente muda, e o sistema precisa se reajustar. A pressão aumenta, e não diminui, com a compressão. E a conservação da massa vale sempre, mas não impede o deslocamento.",
      /* equilíbrio com 1 mol de cada em 1 L (Kc = 1); volume de 0,5 L: concentrações dobram, e recalcula-se o avanço */
      v: { i: () => { const x = avanco([[2, 2], [1, 2]], [[2, 2]], 1); return unicoV(o.map((_, i) => i === (x > 1e-12 ? 0 : x < -1e-12 ? 1 : 2))); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["≈ 3", "1", "5", "≈ 6", "≈ 4"];
    return {
      d: "media",
      e: "A 25 °C, qual é o pH aproximado de uma solução 0,1 mol/L de um ácido fraco HA, com Ka = 1 · 10⁻⁵?",
      o,
      x: "O ácido fraco se ioniza pouco: HA ⇌ H⁺ + A⁻, com Ka = [H⁺]²/(C − [H⁺]). Como a ionização é pequena, C − [H⁺] ≅ C, e [H⁺] ≅ √(Ka · C) = √(10⁻⁵ · 10⁻¹) = √(10⁻⁶) = 10⁻³ mol/L. O pH é 3; só cerca de 1% das moléculas do ácido está ionizada.\n\n1 trata o ácido como forte, com [H⁺] = 0,1 mol/L. 5 é o pKa, −log Ka. 6 é −log(Ka · C), sem a raiz quadrada. E 4 usa Ka/C no lugar de Ka · C.",
      v: { i: () => { const C = 0.1, Ka = 1e-5; return qual(pH(hDoBalanco((h) => h - (C * Ka) / (Ka + h) - Kw / h)), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 2%", "0,02%", "0,04%", "0,2%", "98%"];
    return {
      d: "media",
      e: "A 25 °C, qual é o grau de ionização de um ácido fraco HA numa solução 0,01 mol/L, sabendo que Ka = 4 · 10⁻⁶?",
      o,
      x: "Para um ácido fraco pouco ionizado, Ka ≅ C · α², e α ≅ √(Ka/C) = √(4 · 10⁻⁶/10⁻²) = √(4 · 10⁻⁴) = 2 · 10⁻² = 2%. Só 2 em cada 100 moléculas do ácido estão ionizadas; a aproximação vale porque α é bem menor que 1.\n\n0,02% usa √(Ka · C) = 2 · 10⁻⁴, que é a concentração de H⁺, e não o grau de ionização. 0,04% usa Ka/C sem a raiz. 0,2% usa √Ka, esquecendo a concentração. E 98% é a fração de moléculas que não se ionizaram.",
      /* grau exato: fração ionizada no balanço de cargas completo */
      v: { i: () => { const C = 0.01, Ka = 4e-6; const h = hDoBalanco((x) => x - (C * Ka) / (Ka + x) - Kw / x); return qual(Ka / (Ka + h), o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["≈ 5,04", "≈ 4,44", "4,74", "≈ 2,87", "7"];
    return {
      d: "media",
      e: "Uma solução-tampão contém 0,1 mol/L de ácido acético (pKa = 4,74) e 0,2 mol/L de acetato de sódio. Com log 2 ≅ 0,30, qual é o pH aproximado da solução?",
      o,
      x: "Pela equação de Henderson–Hasselbalch, pH = pKa + log([A⁻]/[HA]) = 4,74 + log(0,2/0,1) = 4,74 + log 2 ≅ 4,74 + 0,30 = 5,04. Com mais base conjugada que ácido, o pH fica acima do pKa; se as concentrações fossem iguais, o pH seria o próprio pKa.\n\n4,44 inverte a razão, log(0,1/0,2). 4,74 ignora a razão entre as concentrações. 2,87 é o pH do ácido acético sozinho, sem o sal. E 7 supõe que uma solução-tampão seja neutra; ela mantém o pH perto do pKa do par.",
      /* balanço de cargas: [H⁺] + [Na⁺] = [acetato] + [OH⁻], com 0,3 mol/L de acetato total */
      v: { i: () => { const Ka = 10 ** -4.74; return qual(pH(hDoBalanco((h) => h + 0.2 - (0.3 * Ka) / (Ka + h) - Kw / h)), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["64", "40", "8", "1,6", "1/64"];
    return {
      d: "media",
      e: "Num recipiente de 1 L, colocam-se 1 mol de H₂ e 1 mol de I₂, que reagem segundo H₂ + I₂ ⇌ 2 HI. No equilíbrio, há 1,6 mol de HI. Qual é o valor de Kc?",
      o,
      x: "Para formar 1,6 mol de HI, reagem 0,8 mol de H₂ e 0,8 mol de I₂; sobram 0,2 mol de cada. Em 1 L, as concentrações no equilíbrio são [H₂] = [I₂] = 0,2 mol/L e [HI] = 1,6 mol/L. Então Kc = [HI]²/([H₂] · [I₂]) = 2,56/0,04 = 64.\n\n40 esquece de elevar [HI] ao quadrado. 8 divide [HI] por uma só das concentrações dos reagentes. 1,6 é a quantidade de HI, e não a constante. E 1/64 inverte a expressão.",
      /* avanço que produz 1,6 mol/L de HI; quociente nesse ponto */
      v: { i: () => { const x = bissecao((a) => 2 * a - 1.6, 0, 1); return qual(Q([[1, 1], [1, 1]], [[2, 0]], x), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,67 mol/L", "0,5 mol/L", "2 mol/L", "0,8 mol/L", "1 mol/L"];
    return {
      d: "media",
      e: "Para a reação CO + H₂O ⇌ CO₂ + H₂, Kc = 4 numa certa temperatura. Partindo de 1 mol/L de CO e 1 mol/L de H₂O, sem produtos, qual é a concentração de CO₂ no equilíbrio?",
      o,
      x: "Se reagem x mol/L, o equilíbrio tem [CO] = [H₂O] = 1 − x e [CO₂] = [H₂] = x. Então Kc = x²/(1 − x)² = 4. Extraindo a raiz: x/(1 − x) = 2, e x = 2/3 ≅ 0,67 mol/L. Confere: (2/3)²/(1/3)² = 4.\n\n0,5 mol/L supõe que metade dos reagentes reaja, o que daria Kc = 1. 2 mol/L é a raiz da constante tomada como concentração; nem há reagente para tanto. 0,8 mol/L resolve x/(1 − x) = 4, esquecendo o quadrado. E 1 mol/L supõe reação completa.",
      v: { i: () => qual(avanco([[1, 1], [1, 1]], [[1, 0], [1, 0]], 4), o, 0.01) },
    };
  })(),
  (() => {
    const o = ["1 · 10⁻⁴ mol/L", "2 · 10⁻⁶ mol/L", "≈ 1,6 · 10⁻⁴ mol/L", "2 · 10⁻⁴ mol/L", "1 · 10⁻¹² mol/L"];
    return {
      d: "media",
      e: "A 25 °C, o cromato de prata, Ag₂CrO₄, tem Kps = 4 · 10⁻¹². Quantos mols desse sal se dissolvem em 1 L de água pura?",
      o,
      x: "Cada mol dissolvido libera 2 mol de Ag⁺ e 1 mol de CrO₄²⁻: com solubilidade s, [Ag⁺] = 2s e [CrO₄²⁻] = s. Então Kps = (2s)² · s = 4s³ = 4 · 10⁻¹², s³ = 10⁻¹², e s = 10⁻⁴ mol/L.\n\n2 · 10⁻⁶ mol/L usa √Kps, como se o sal fosse do tipo 1 : 1. 1,6 · 10⁻⁴ mol/L extrai a raiz cúbica do Kps sem dividi-lo por 4. 2 · 10⁻⁴ mol/L é a concentração de Ag⁺, 2s, e não a solubilidade. E 1 · 10⁻¹² mol/L é Kps/4, sem a raiz cúbica.",
      v: { i: () => qual(solubilidade(4e-12, 2, 1), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["1 · 10⁻⁹ mol/L", "1 · 10⁻⁵ mol/L", "1 · 10⁻¹¹ mol/L", "1 · 10⁻¹⁰ mol/L", "0,1 mol/L"];
    return {
      d: "media",
      e: "O Kps do AgCl é 1 · 10⁻¹⁰, a 25 °C. Qual é a sua solubilidade numa solução de NaCl 0,1 mol/L?",
      o,
      x: "O NaCl já fornece [Cl⁻] = 0,1 mol/L. Dissolvendo s mol/L de AgCl, [Ag⁺] = s e [Cl⁻] = 0,1 + s ≅ 0,1. Então Kps = s · 0,1 = 10⁻¹⁰, e s = 10⁻⁹ mol/L: dez mil vezes menos que em água pura. É o efeito do íon comum, que desloca o equilíbrio de dissolução no sentido do sólido.\n\n1 · 10⁻⁵ mol/L é a solubilidade em água pura, √Kps. 1 · 10⁻¹¹ mol/L multiplica o Kps por 0,1 em vez de dividir. 1 · 10⁻¹⁰ confunde a solubilidade com o Kps. E 0,1 mol/L é a concentração de cloreto do NaCl.",
      v: { i: () => qual(solubilidade(1e-10, 1, 1, 0, 0.1), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["Sim: depois da mistura, o produto [Ag⁺] · [Cl⁻] vale 1 · 10⁻⁶, acima do Kps", "Não: as concentrações são baixas demais para haver precipitação", "Sim: o produto [Ag⁺] · [Cl⁻] vale 4 · 10⁻⁶, acima do Kps", "Não: o produto [Ag⁺] · [Cl⁻] vale 1 · 10⁻¹², abaixo do Kps", "Só se a solução for aquecida depois da mistura"];
    return {
      d: "media",
      e: "O Kps do AgCl é 1,8 · 10⁻¹⁰. Misturam-se volumes iguais de soluções de AgNO₃ 2 · 10⁻³ mol/L e de NaCl 2 · 10⁻³ mol/L. Forma-se precipitado?",
      o,
      x: "Ao misturar volumes iguais, cada solução se dilui à metade: [Ag⁺] = [Cl⁻] = 1 · 10⁻³ mol/L. O produto iônico é Q = 10⁻³ · 10⁻³ = 1 · 10⁻⁶, muito acima do Kps, 1,8 · 10⁻¹⁰: a solução ficaria supersaturada, e o AgCl precipita até que o produto caia ao valor do Kps.\n\n“Baixas demais” ignora que o que decide é a comparação do produto com o Kps, que é muito pequeno. 4 · 10⁻⁶ acerta a conclusão, mas esquece a diluição da mistura. 1 · 10⁻¹² eleva o produto ao quadrado e ainda erra a conclusão. E o aquecimento não é necessário; em geral, ele até aumenta a solubilidade.",
      v: { i: () => { const q = (2e-3 / 2) * (2e-3 / 2), precipita = q > 1.8e-10; return unicoV(o.map((t) => { const m = t.match(/^(Sim|Não): .*vale ([^,]+), (acima|abaixo) do Kps$/); if (!m) return false; return (m[1] === "Sim") === precipita && Math.abs(valor(m[2]) - q) < 1e-9 * q && (m[3] === "acima") === precipita; })); } },
    };
  })(),
  (() => {
    const o = ["≈ 1,3", "1", "7", "≈ 12,7", "≈ 0,7"];
    return {
      d: "media",
      e: "A 25 °C, misturam-se 50 mL de HCl 0,2 mol/L e 50 mL de NaOH 0,1 mol/L. Com log 5 ≅ 0,7, qual é o pH da solução resultante?",
      o,
      x: "O ácido fornece 0,2 · 0,05 = 0,01 mol de H⁺, e a base, 0,1 · 0,05 = 0,005 mol de OH⁻. A neutralização consome 0,005 mol de cada, e sobram 0,005 mol de H⁺ em 100 mL: [H⁺] = 0,005/0,1 = 0,05 mol/L. O pH é −log(5 · 10⁻²) = 2 − log 5 ≅ 2 − 0,7 = 1,3.\n\n1 esquece o volume final, dividindo o excesso só pelos 50 mL do ácido. 7 supõe neutralização completa. 12,7 inverte o reagente em excesso, como se sobrasse base. E 0,7 usa a concentração do ácido antes da mistura, 0,2 mol/L.",
      /* balanço de cargas no volume final: [H⁺] + [Na⁺] = [Cl⁻] + [OH⁻] */
      v: { i: () => { const Cl = 0.01 / 0.1, Na = 0.005 / 0.1; return qual(pH(hDoBalanco((h) => h + Na - Cl - Kw / h)), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["0,2", "0,5", "5", "0,16", "2"];
    return {
      d: "media",
      e: "No equilíbrio N₂O₄(g) ⇌ 2 NO₂(g), as pressões parciais são de 0,8 atm para o N₂O₄ e de 0,4 atm para o NO₂. Qual é o valor de Kp?",
      o,
      x: "A constante em termos de pressões parciais segue a mesma regra de Kc: Kp = (p NO₂)²/(p N₂O₄) = 0,4²/0,8 = 0,16/0,8 = 0,2. O expoente 2 vem do coeficiente do NO₂ na equação.\n\n0,5 esquece o expoente, 0,4/0,8. 5 inverte a expressão, pondo o reagente no numerador. 0,16 esquece o denominador. E 2 inverte a expressão e ainda esquece o expoente, 0,8/0,4.",
      v: { i: () => qual(Q([[1, 0.8]], [[2, 0.4]], 0), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["CH₃COONa", "NaCl", "NH₄Cl", "HCl", "KNO₃"];
    return {
      d: "media",
      e: "A 25 °C, preparam-se soluções 0,1 mol/L de cinco substâncias: NaCl, NH₄Cl, CH₃COONa, HCl e KNO₃. Qual delas é básica?",
      o,
      x: "O acetato de sódio vem de um ácido fraco (acético) e de uma base forte (NaOH). O íon acetato sofre hidrólise, CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻, e libera OH⁻: a solução é básica, com pH perto de 9.\n\nNaCl e KNO₃ vêm de ácidos e bases fortes; os seus íons não se hidrolisam, e as soluções são neutras. NH₄Cl vem de base fraca e ácido forte: o NH₄⁺ se hidrolisa liberando H⁺, e a solução é ácida. E o HCl é um ácido forte.",
      /* pH de cada solução pelo balanço de cargas (Ka do ácido acético e Kb da amônia = 1,8 · 10⁻⁵) */
      v: { i: () => {
        const C = 0.1, Ka = 1.8e-5, KaNH4 = Kw / 1.8e-5;
        const f = {
          "CH₃COONa": (h) => h + C - (C * Ka) / (Ka + h) - Kw / h,
          NaCl: (h) => h - Kw / h,
          "NH₄Cl": (h) => h + (C * h) / (h + KaNH4) - C - Kw / h,
          HCl: (h) => h - C - Kw / h,
          "KNO₃": (h) => h - Kw / h,
        };
        return unicoV(o.map((t) => pH(hDoBalanco(f[t])) > 7.5));
      } },
    };
  })(),
  (() => {
    const o = ["≈ 11", "≈ 3", "13", "≈ 9", "≈ 8"];
    return {
      d: "media",
      e: "Uma solução aquosa 0,1 mol/L de uma base fraca, com Kb = 1 · 10⁻⁵, está a 25 °C. Que pH ela apresenta, aproximadamente?",
      o,
      x: "A base fraca reage pouco com a água: B + H₂O ⇌ BH⁺ + OH⁻. Como a reação é pequena, [OH⁻] ≅ √(Kb · C) = √(10⁻⁵ · 10⁻¹) = 10⁻³ mol/L. O pOH é 3, e o pH, 14 − 3 = 11. Como a base é fraca, só cerca de 1% dela reage com a água.\n\n3 é o pOH. 13 trata a base como forte, com [OH⁻] = 0,1 mol/L. 9 é 14 − pKb, sem considerar a concentração. E 8 esquece a raiz quadrada: −log(Kb · C) = 6 daria pOH 6 e pH 8.",
      /* [H⁺] + [BH⁺] = [OH⁻], com [BH⁺] = C · h/(h + Ka) e Ka = Kw/Kb o do ácido conjugado */
      v: { i: () => { const C = 0.1, Ka = Kw / 1e-5; return qual(pH(hDoBalanco((h) => h + (C * h) / (h + Ka) - Kw / h)), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["Não se desloca, porque as concentrações dos participantes não mudam", "Desloca-se para a formação de NH₃, porque a pressão total aumenta", "Desloca-se para a formação de N₂ e H₂, porque há mais gás no recipiente", "A constante de equilíbrio aumenta com a pressão total", "O argônio reage com o hidrogênio e desloca o equilíbrio"];
    return {
      d: "media",
      e: "Num recipiente rígido, o sistema N₂ + 3 H₂ ⇌ 2 NH₃ está em equilíbrio. Adiciona-se argônio, um gás que não reage, mantendo o volume e a temperatura. O que acontece com o equilíbrio?",
      o,
      x: "A volume constante, o argônio aumenta a pressão total, mas não altera os números de mols nem as concentrações (ou pressões parciais) de N₂, H₂ e NH₃. O quociente de reação continua igual a Kc, e o sistema permanece em equilíbrio, sem se deslocar.\n\nO aumento da pressão total só desloca o equilíbrio quando vem de uma redução de volume, que muda as concentrações. Ter mais gás no recipiente não afeta o quociente, que só envolve os participantes. A constante só muda com a temperatura. E o argônio é um gás nobre, que não reage.",
      /* mesmas concentrações depois da adição (o volume não muda): avanço necessário = 0 */
      v: { i: () => { const K = Q([[1, 2], [3, 1]], [[2, 2]], 0); const x = avanco([[1, 2], [3, 1]], [[2, 2]], K); return unicoV(o.map((_, i) => i === (Math.abs(x) < 1e-9 ? 0 : x > 0 ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,92 g/L", "2 · 10⁻³ g/L", "≈ 0,082 g/L", "≈ 1,84 g/L", "≈ 1,46 g/L"];
    return {
      d: "media",
      e: "O produto de solubilidade do PbI₂ é 3,2 · 10⁻⁸, a 25 °C. Com Pb = 207 e I = 127 (em g/mol), qual é a sua solubilidade em água, em gramas por litro?",
      o,
      x: "Com solubilidade s, [Pb²⁺] = s e [I⁻] = 2s: Kps = s · (2s)² = 4s³ = 3,2 · 10⁻⁸, s³ = 8 · 10⁻⁹, e s = 2 · 10⁻³ mol/L. A massa molar do PbI₂ é 207 + 2 · 127 = 461 g/mol, e a solubilidade em massa é 2 · 10⁻³ · 461 ≅ 0,92 g/L.\n\n2 · 10⁻³ g/L é a solubilidade em mol/L, sem a conversão para gramas. 0,082 g/L usa √Kps, como se o sal fosse do tipo 1 : 1. 1,84 g/L usa a concentração de iodeto, 2s. E 1,46 g/L extrai a raiz cúbica do Kps sem dividi-lo por 4.",
      v: { i: () => qual(solubilidade(3.2e-8, 1, 2) * massaMolar("PbI2", MASSAS), o, 0.01) },
    };
  })(),
  (() => {
    const o = ["No sentido de formar NO₂, porque Q = 1 é menor que Kc", "No sentido de formar N₂O₄, porque Q = 1 é menor que Kc", "Nenhum: o sistema já está em equilíbrio", "No sentido de formar NO₂, porque Q = 4", "No sentido de formar N₂O₄, porque Kc é maior que 1"];
    return {
      d: "media",
      e: "Para o equilíbrio N₂O₄(g) ⇌ 2 NO₂(g), Kc = 4 numa certa temperatura. Num instante, [N₂O₄] = 1 mol/L e [NO₂] = 1 mol/L. Em que sentido a reação avança até atingir o equilíbrio?",
      o,
      x: "O quociente de reação tem a mesma forma da constante, calculado com as concentrações do instante: Q = [NO₂]²/[N₂O₄] = 1²/1 = 1. Como Q < Kc, há produto de menos em relação ao equilíbrio, e a reação avança no sentido direto, formando NO₂, até que Q suba a 4.\n\nFormar N₂O₄ seria o sentido para Q > Kc. O sistema não está em equilíbrio, porque Q ≠ Kc. Q = 4 confunde o quociente do instante com a constante. E o valor de Kc sozinho não indica o sentido: é a comparação entre Q e Kc que decide.",
      v: { i: () => { const q = Q([[1, 1]], [[2, 1]], 0), x = avanco([[1, 1]], [[2, 1]], 4); return unicoV(o.map((_, i) => i === (x > 0 && Math.abs(q - 1) < 1e-12 ? 0 : x < 0 ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["4", "2", "3", "7", "1"];
    return {
      d: "media",
      e: "A 25 °C, 10 mL de uma solução de HCl com pH = 2 são diluídos com água até 1 L. Qual é o pH da solução final?",
      o,
      x: "A quantidade de H⁺ se mantém, mas passa a ocupar um volume 100 vezes maior: [H⁺] cai de 10⁻² para 10⁻⁴ mol/L, e o pH sobe de 2 para 4. Cada diluição por 10 aumenta em uma unidade o pH de um ácido forte, enquanto a sua concentração estiver bem acima da contribuição da água, de 10⁻⁷ mol/L.\n\n2 supõe que diluir não mude o pH. 3 corresponde a uma diluição de só 10 vezes. 7 supõe que a diluição neutralize o ácido; ela só aproxima o pH de 7, sem ultrapassá-lo. E 1 inverte o efeito, como se a diluição concentrasse o ácido.",
      v: { i: () => { const C = (1e-2 * 0.01) / 1; return qual(pH(hDoBalanco((h) => h - C - Kw / h)), o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["50%", "25%", "75%", "100%", "12,5%"];
    return {
      d: "media",
      e: "Num recipiente de 1 L, 2 mol de NH₃ se decompõem parcialmente segundo 2 NH₃ ⇌ N₂ + 3 H₂. No equilíbrio, há 0,5 mol de N₂. Qual é o grau de dissociação da amônia?",
      o,
      x: "Para formar 0,5 mol de N₂, decompõem-se 2 · 0,5 = 1 mol de NH₃. O grau de dissociação é a fração da quantidade inicial que se decompôs: α = 1/2 = 0,5 = 50%. No equilíbrio há 1 mol de NH₃, 0,5 mol de N₂ e 1,5 mol de H₂.\n\n25% divide a quantidade de N₂, 0,5 mol, pelos 2 mol iniciais, como se fosse a de amônia decomposta. 75% usa a quantidade de H₂ formada, 1,5 mol, sobre os 2 mol iniciais. 100% supõe a decomposição completa. E 12,5% divide 0,5 por 4, a soma dos coeficientes dos produtos.",
      v: { i: () => { const x = bissecao((a) => 0 + 1 * a - 0.5, 0, 1); return qual((2 * x) / 2, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["≈ 6,63", "7", "≈ 13,26", "≈ 7,37", "≈ 6,26"];
    return {
      d: "media",
      e: "A 50 °C, o produto iônico da água vale Kw = 5,5 · 10⁻¹⁴. Com √5,5 ≅ 2,35 e log 2,35 ≅ 0,37, qual é o pH da água pura nessa temperatura?",
      o,
      x: "Na água pura, [H⁺] = [OH⁻], e então [H⁺]² = Kw: [H⁺] = √(5,5 · 10⁻¹⁴) ≅ 2,35 · 10⁻⁷ mol/L. O pH é −log(2,35 · 10⁻⁷) = 7 − 0,37 = 6,63. A água continua neutra, com [H⁺] = [OH⁻]: o pH 7 só marca a neutralidade a 25 °C.\n\n7 vale apenas a 25 °C, quando Kw = 10⁻¹⁴. 13,26 é o pKw, −log Kw, e não o pH. 7,37 soma o logaritmo em vez de subtrair. E 6,26 esquece a raiz, usando log 5,5 no lugar de log √5,5.",
      v: { i: () => { const Kw50 = 5.5e-14; return qual(pH(hDoBalanco((h) => h - Kw50 / h)), o, 0.005); } },
    };
  })(),
  (() => {
    const o = ["≈ 1 · 10⁻⁵", "1 · 10⁻³", "1 · 10⁻⁶", "1 · 10⁻²", "1 · 10⁻⁴"];
    return {
      d: "media",
      e: "A 25 °C, uma solução 0,1 mol/L de um ácido fraco HA tem pH = 3. Qual é, aproximadamente, a constante de ionização Ka desse ácido?",
      o,
      x: "Com pH 3, [H⁺] = [A⁻] = 10⁻³ mol/L, e o ácido não ionizado é 0,1 − 0,001 ≅ 0,1 mol/L. Então Ka = [H⁺] · [A⁻]/[HA] ≅ 10⁻³ · 10⁻³/10⁻¹ = 10⁻⁵. O grau de ionização é 10⁻³/10⁻¹ = 1%.\n\n1 · 10⁻³ confunde Ka com [H⁺]. 1 · 10⁻⁶ esquece de dividir pela concentração do ácido. 1 · 10⁻² é a razão [H⁺]/C, que é o grau de ionização, e não Ka. E 1 · 10⁻⁴ é o quadrado desse grau, α², sem multiplicar pela concentração.",
      /* a partir do pH: [A⁻] pelo balanço de cargas ([H⁺] = [A⁻] + [OH⁻]) e [HA] pelo balanço de massa */
      v: { i: () => { const C = 0.1, h = 1e-3, A = h - Kw / h, HA = C - A; return qual((h * A) / HA, o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["O Ag₂CrO₄, embora tenha o Kps menor", "O AgCl, porque tem o Kps maior", "Os dois igualmente, porque ambos são sais de prata", "Não é possível comparar sais de fórmulas diferentes", "O AgCl, porque libera menos íons por fórmula"];
    return {
      d: "media",
      e: "A 25 °C, o AgCl tem Kps = 1,8 · 10⁻¹⁰, e o Ag₂CrO₄, Kps = 1,1 · 10⁻¹². Qual dos dois é mais solúvel em água pura, em mol/L?",
      o,
      x: "Os Kps só podem ser comparados diretamente entre sais com a mesma proporção entre os íons. Para o AgCl, s = √(1,8 · 10⁻¹⁰) ≅ 1,3 · 10⁻⁵ mol/L. Para o Ag₂CrO₄, Kps = 4s³, e s = ∛(1,1 · 10⁻¹²/4) ≅ 6,5 · 10⁻⁵ mol/L, cerca de cinco vezes mais. O cromato é mais solúvel, apesar do Kps menor.\n\nUm Kps maior só indica maior solubilidade entre sais de mesma proporção. Ser sal de prata não iguala as solubilidades. A comparação é possível: basta calcular a solubilidade de cada um. E liberar menos íons por fórmula não torna o sal mais solúvel.",
      v: { i: () => { const s1 = solubilidade(1.8e-10), s2 = solubilidade(1.1e-12, 2, 1); return unicoV(o.map((_, i) => i === (s2 > s1 ? 0 : s1 > s2 ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["Escurece no instante da compressão e depois clareia um pouco, sem voltar à cor original", "Clareia imediatamente e fica mais clara do que estava no início", "Escurece e mantém a cor que tinha no instante da compressão", "Volta exatamente à cor original, porque o equilíbrio se restabelece", "Não muda, porque a constante de equilíbrio é a mesma"];
    return {
      d: "media",
      e: "Uma mistura de N₂O₄, incolor, e NO₂, castanho, está em equilíbrio (N₂O₄ ⇌ 2 NO₂) num cilindro com êmbolo. O volume é reduzido rapidamente à metade, a temperatura constante. O que se observa na cor da mistura?",
      o,
      x: "No instante da compressão, todas as concentrações dobram, inclusive a de NO₂, e a cor escurece. Em seguida, o equilíbrio se desloca para o lado com menos mols de gás, o do N₂O₄, consumindo parte do NO₂: a cor clareia um pouco. Mas a concentração final de NO₂ fica maior que a inicial, porque o deslocamento só compensa em parte a compressão (Le Chatelier), e a mistura termina mais escura do que no início.\n\n“Clareia imediatamente” ignora o aumento instantâneo das concentrações. “Mantém a cor” esquece o deslocamento do equilíbrio. “Volta à cor original” supõe uma compensação total, que não acontece. E a constante não muda, mas o quociente muda com a compressão, e o sistema se reajusta.",
      /* equilíbrio inicial [N₂O₄] = 1, [NO₂] = 2 (Kc = 4); comprimido: 2 e 4; novo avanço e [NO₂] final */
      v: { i: () => { const x = avanco([[1, 2]], [[2, 4]], 4); const final = 4 + 2 * x; return unicoV(o.map((_, i) => i === (x < 0 && final > 2 && final < 4 ? 0 : 3))); } },
    };
  })(),
  (() => {
    const o = ["≈ 4,91", "2", "5", "≈ 5,09", "≈ 4,0"];
    return {
      d: "media",
      e: "Um litro de tampão contém 0,1 mol de um ácido fraco HA e 0,1 mol do sal NaA (pKa = 5). Adicionam-se 0,01 mol de HCl, sem variação de volume. Com log(9/11) ≅ −0,087, qual é o novo pH?",
      o,
      x: "O H⁺ adicionado reage com a base do tampão: A⁻ + H⁺ → HA. Ficam 0,11 mol de HA e 0,09 mol de A⁻. Pela equação de Henderson–Hasselbalch, pH = 5 + log(0,09/0,11) ≅ 5 − 0,087 ≅ 4,91. O pH cai menos de um décimo, enquanto, em água pura, os mesmos 0,01 mol de HCl levariam o pH a 2.\n\n2 é o pH da mesma quantidade de HCl em água, sem tampão. 5 supõe que o tampão mantenha o pH exatamente constante. 5,09 inverte a razão. E 4,0 usa a razão entre o ácido adicionado e a base, log(0,01/0,1).",
      /* balanço de cargas: [H⁺] + [Na⁺] = [A⁻] + [Cl⁻] + [OH⁻], com 0,2 mol/L de A total */
      v: { i: () => { const Ka = 1e-5; return qual(pH(hDoBalanco((h) => h + 0.1 - 0.01 - (0.2 * Ka) / (Ka + h) - Kw / h)), o, 0.005); } },
    };
  })(),
  (() => {
    const o = ["O AgI, porque precisa de uma concentração de Ag⁺ muito menor para precipitar", "O AgCl, porque tem o Kps maior", "Os dois ao mesmo tempo, porque as concentrações dos haletos são iguais", "O AgCl, porque o cloreto é mais leve que o iodeto", "Nenhum dos dois precipita"];
    return {
      d: "media",
      e: "Uma solução contém Cl⁻ e I⁻, ambos a 0,01 mol/L. Adiciona-se lentamente AgNO₃. Sabendo que Kps(AgCl) = 1,8 · 10⁻¹⁰ e Kps(AgI) = 8,5 · 10⁻¹⁷, qual sal precipita primeiro?",
      o,
      x: "Cada sal começa a precipitar quando [Ag⁺] · [X⁻] atinge o seu Kps. Para o AgI: [Ag⁺] = 8,5 · 10⁻¹⁷/0,01 = 8,5 · 10⁻¹⁵ mol/L. Para o AgCl: [Ag⁺] = 1,8 · 10⁻¹⁰/0,01 = 1,8 · 10⁻⁸ mol/L. À medida que se adiciona prata, o limiar do AgI é atingido muito antes: ele precipita primeiro. É a base da precipitação fracionada.\n\nO Kps maior do AgCl indica justamente que ele exige mais Ag⁺ para precipitar. Concentrações iguais dos haletos não igualam os limiares, que dependem dos Kps. A massa dos íons não decide a ordem. E os dois precipitam, se for adicionada prata suficiente.",
      /* [Ag⁺] em que cada produto iônico atinge o Kps (bisseção) */
      v: { i: () => { const limiar = (Kps) => 10 ** bissecao((p) => Math.log(10 ** p * 0.01) - Math.log(Kps), -30, 0); const I = limiar(8.5e-17), Cl = limiar(1.8e-10); return unicoV(o.map((_, i) => i === (I < Cl ? 0 : Cl < I ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["≈ 9", "7", "≈ 5", "13", "≈ 11"];
    return {
      d: "media",
      e: "Dissolve-se o sal NaA em água até a concentração de 0,1 mol/L, a 25 °C. Sabendo que HA é um ácido fraco, com Ka = 1 · 10⁻⁵, que pH se espera para essa solução?",
      o,
      x: "O íon A⁻ é a base conjugada de um ácido fraco e sofre hidrólise: A⁻ + H₂O ⇌ HA + OH⁻, com Kb = Kw/Ka = 10⁻¹⁴/10⁻⁵ = 10⁻⁹. Então [OH⁻] ≅ √(Kb · C) = √(10⁻⁹ · 10⁻¹) = 10⁻⁵ mol/L, o pOH é 5, e o pH, 9. O Na⁺ não se hidrolisa.\n\n7 supõe que todo sal forme solução neutra. 5 é o pOH, ou o pKa. 13 trata o A⁻ como base forte, com [OH⁻] = 0,1 mol/L. E 11 usa Ka no lugar de Kb, √(10⁻⁵ · 10⁻¹) = 10⁻³.",
      v: { i: () => { const C = 0.1, Ka = 1e-5; return qual(pH(hDoBalanco((h) => h + C - (C * Ka) / (Ka + h) - Kw / h)), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["0,5", "0,25", "2", "0,125", "0,0625"];
    return {
      d: "media",
      e: "A constante de equilíbrio da reação N₂ + 3 H₂ ⇌ 2 NH₃ é Kc = 4 numa certa temperatura. Qual é, na mesma temperatura, a constante da reação NH₃ ⇌ ½ N₂ + 3/2 H₂?",
      o,
      x: "Inverter a reação inverte a constante: para 2 NH₃ ⇌ N₂ + 3 H₂, K = 1/4. Dividir os coeficientes por 2 eleva a constante à potência 1/2: para NH₃ ⇌ ½ N₂ + 3/2 H₂, K = (1/4)^(1/2) = 1/2 = 0,5. Confere pela expressão: [N₂]^(1/2) · [H₂]^(3/2)/[NH₃] é a raiz de [N₂] · [H₂]³/[NH₃]².\n\n0,25 só inverte, sem a raiz. 2 só tira a raiz, sem inverter. 0,125 divide 1/4 por 2 em vez de extrair a raiz. E 0,0625 eleva 1/4 ao quadrado em vez de extrair a raiz.",
      /* um estado de equilíbrio qualquer com Kc = 4 ([N₂] = 1, [H₂] = 1, [NH₃] = 2), avaliado na nova expressão */
      v: { i: () => { const [N2, H2, NH3] = [1, 1, 2]; if (Math.abs(NH3 ** 2 / (N2 * H2 ** 3) - 4) > 1e-12) throw new Error("estado"); return qual((N2 ** 0.5 * H2 ** 1.5) / NH3, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["Aumenta cerca de 10 vezes", "Diminui 100 vezes", "Não muda, porque Ka é constante", "Aumenta 100 vezes", "Diminui cerca de 10 vezes"];
    return {
      d: "media",
      e: "A 25 °C, uma solução 0,1 mol/L de um ácido fraco, com Ka = 1 · 10⁻⁵, é diluída 100 vezes. O que acontece com o seu grau de ionização?",
      o,
      x: "Para um ácido fraco pouco ionizado, α ≅ √(Ka/C). Diluindo 100 vezes, C cai a 1/100, e α fica multiplicado por √100 = 10: passa de cerca de 1% para cerca de 10% (pela conta exata, 9,5%, porque a aproximação começa a perder precisão). É a lei da diluição de Ostwald: quanto mais diluído, mais ionizado o ácido fraco, embora a concentração de H⁺ diminua.\n\n“Diminui 100 vezes” confunde o grau de ionização com a concentração. Ka ser constante é justamente o que obriga α a mudar. “100 vezes” esquece a raiz quadrada. E “diminui cerca de 10 vezes” inverte o efeito da diluição.",
      v: { i: () => { const alfa = (C) => { const Ka = 1e-5, h = hDoBalanco((x) => x - (C * Ka) / (Ka + x) - Kw / x); return Ka / (Ka + h); }; const r = alfa(0.001) / alfa(0.1); const certo = r > 8 && r < 12 ? 0 : r > 80 ? 3 : Math.abs(r - 1) < 0.01 ? 2 : r < 0.02 ? 1 : 4; return unicoV(o.map((_, i) => i === certo)); } },
    };
  })(),
  (() => {
    const o = ["≈ 3,0 · 10⁻⁴", "0,5", "≈ 840", "≈ 1,2 · 10⁻²", "≈ 20,5"];
    return {
      d: "media",
      e: "Para N₂ + 3 H₂ ⇌ 2 NH₃, Kc = 0,5 a 500 K, com concentrações em mol/L. Com R = 0,082 atm·L/(mol·K), qual é o valor de Kp, com pressões em atm?",
      o,
      x: "Para cada gás, p = c · R · T. Substituindo na expressão de Kp, aparece o fator (RT)^Δn, em que Δn é a variação do número de mols de gás: 2 − (1 + 3) = −2. Então Kp = Kc · (RT)⁻² = 0,5/(0,082 · 500)² = 0,5/41² = 0,5/1.681 ≅ 3,0 · 10⁻⁴.\n\n0,5 supõe Kp igual a Kc, o que só vale quando Δn = 0. 840 usa Δn = +2, multiplicando por (RT)². 1,2 · 10⁻² usa Δn = −1. E 20,5 usa Δn = +1.",
      /* um estado de equilíbrio com Kc = 0,5, convertido em pressões parciais (p = cRT) */
      v: { i: () => { const RT = 0.082 * 500, c = { N2: 1, H2: 1, NH3: Math.sqrt(0.5) }; const p = Object.fromEntries(Object.entries(c).map(([k, v]) => [k, v * RT])); return qual(p.NH3 ** 2 / (p.N2 * p.H2 ** 3), o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["≈ 10,3", "≈ 10", "≈ 3,7", "≈ 10,6", "7"];
    return {
      d: "media",
      e: "O Kps do Mg(OH)₂ é 4 · 10⁻¹², a 25 °C. Com log 2 ≅ 0,3, qual é o pH aproximado de uma solução saturada desse hidróxido em água pura?",
      o,
      x: "Com solubilidade s, [Mg²⁺] = s e [OH⁻] = 2s: Kps = s · (2s)² = 4s³ = 4 · 10⁻¹², e s = 10⁻⁴ mol/L. Então [OH⁻] = 2 · 10⁻⁴ mol/L, pOH = 4 − log 2 ≅ 3,7, e pH ≅ 14 − 3,7 = 10,3. É o princípio do leite de magnésia, uma suspensão levemente básica.\n\n10 usa [OH⁻] = s, esquecendo que cada fórmula libera dois OH⁻. 3,7 é o pOH. 10,6 usa [OH⁻] = 4s. E 7 supõe que um sal pouco solúvel não altere o pH, mas o pouco que se dissolve já basta para tornar a solução básica.",
      /* balanço de cargas: [H⁺] + 2[Mg²⁺] = [OH⁻], com [Mg²⁺] = Kps/[OH⁻]² */
      v: { i: () => qual(pH(hDoBalanco((h) => h + (2 * 4e-12) / (Kw / h) ** 2 - Kw / h)), o, 0.005) },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["≈ 6,98", "8", "7", "≈ 6,96", "≈ 7,02"];
    return {
      d: "dificil",
      e: "A 25 °C, qual é o pH de uma solução de HCl 1 · 10⁻⁸ mol/L?",
      o,
      x: "A resposta 8 seria absurda: um ácido não pode deixar a água básica. Com o ácido tão diluído, a autoionização da água passa a contar. O balanço de cargas dá [H⁺] = 10⁻⁸ + [OH⁻] = 10⁻⁸ + 10⁻¹⁴/[H⁺], ou [H⁺]² − 10⁻⁸ · [H⁺] − 10⁻¹⁴ = 0, cuja raiz positiva é [H⁺] ≅ 1,05 · 10⁻⁷ mol/L. O pH é cerca de 6,98, ligeiramente ácido.\n\n8 aplica −log a 10⁻⁸, ignorando a água. 7 ignora o ácido. 6,96 soma os 10⁻⁸ mol/L do ácido aos 10⁻⁷ da água pura, sem considerar que a autoionização da água diminui na presença do ácido. E 7,02 põe a correção no sentido errado, deixando a solução básica.",
      v: { i: () => qual(pH(hDoBalanco((h) => h - 1e-8 - Kw / h)), o, 1e-3) },
    };
  })(),
  (() => {
    const o = ["≈ 0,082 mol", "0,1 mol", "0,9 mol", "≈ 0,033 mol", "≈ 9 · 10⁻⁶ mol"];
    return {
      d: "dificil",
      e: "Um litro de tampão contém 0,1 mol de um ácido fraco HA e 0,1 mol do sal NaA, com pKa = 5, e tem pH 5. Quantos mols de NaOH, sem variação de volume, levam o pH a 6?",
      o,
      x: "Para pH = 6 = pKa + 1, é preciso [A⁻]/[HA] = 10. Adicionando x mol de NaOH, que converte HA em A⁻: (0,1 + x)/(0,1 − x) = 10, ou 0,1 + x = 1 − 10x, e x = 0,9/11 ≅ 0,082 mol. Quase todo o ácido do tampão é consumido para subir uma única unidade de pH.\n\n0,1 mol consumiria todo o ácido, e o pH subiria muito mais. 0,9 mol esquece que o ácido também diminui, fazendo 0,1 + x = 10 · 0,1. 0,033 mol usa a razão 2 em vez de 10, como se subir uma unidade de pH dobrasse a razão. E 9 · 10⁻⁶ mol ignora o tampão e trata a solução como água a pH 5.",
      /* bisseção na quantidade de base até o pH exato (balanço de cargas) chegar a 6 */
      v: { i: () => { const Ka = 1e-5; const pHcom = (x) => pH(hDoBalanco((h) => h + 0.1 + x - (0.2 * Ka) / (Ka + h) - Kw / h)); return qual(bissecao((x) => pHcom(x) - 6, 0, 0.0999, 100), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 62%", "50%", "100%", "25%", "≈ 39%"];
    return {
      d: "dificil",
      e: "Num recipiente de 1 L, 1 mol de PCl₅ se decompõe segundo PCl₅ ⇌ PCl₃ + Cl₂, com Kc = 0,5, e o grau de dissociação no equilíbrio é de 50%. Se o experimento for repetido num recipiente de 2 L, com a mesma quantidade inicial e a mesma temperatura, qual será o grau de dissociação?",
      o,
      x: "Com x mol decompostos em V litros: Kc = (x/V)²/((1 − x)/V) = x²/(V · (1 − x)). Em 1 L, x²/(1 − x) = 0,5 dá x = 0,5, os 50% do enunciado. Em 2 L: x²/(2(1 − x)) = 0,5, ou x² + x − 1 = 0, e x = (√5 − 1)/2 ≅ 0,618: o grau sobe para cerca de 62%. Com mais volume, o equilíbrio favorece o lado com mais mols de gás (Le Chatelier).\n\n50% supõe que o grau não dependa do volume. 100% supõe dissociação completa. 25% divide o grau pela metade, como se a diluição o reduzisse. E 39% é o resultado para 0,5 L, com o volume reduzido em vez de dobrado.",
      /* avanço em concentração para cada volume; grau = mols decompostos / 1 mol */
      v: { i: () => { const grau = (V) => avanco([[1, 1 / V]], [[1, 0], [1, 0]], 0.5) * V; if (Math.abs(grau(1) - 0.5) > 1e-9) throw new Error("referência"); return qual(grau(2), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 4,7 · 10⁻⁹ mol/L", "0,01 mol/L", "≈ 1,8 · 10⁻⁸ mol/L", "≈ 8,5 · 10⁻¹⁵ mol/L", "0 mol/L"];
    return {
      d: "dificil",
      e: "Uma solução contém Cl⁻ e I⁻, ambos a 0,01 mol/L. Adiciona-se AgNO₃ lentamente, sem variação apreciável de volume. Com Kps(AgCl) = 1,8 · 10⁻¹⁰ e Kps(AgI) = 8,5 · 10⁻¹⁷, qual é a concentração de I⁻ que ainda resta em solução quando o AgCl começa a precipitar?",
      o,
      x: "O AgCl começa a precipitar quando [Ag⁺] = Kps(AgCl)/[Cl⁻] = 1,8 · 10⁻¹⁰/0,01 = 1,8 · 10⁻⁸ mol/L. Com essa concentração de prata, o iodeto que resta em solução é [I⁻] = Kps(AgI)/[Ag⁺] = 8,5 · 10⁻¹⁷/1,8 · 10⁻⁸ ≅ 4,7 · 10⁻⁹ mol/L: mais de 99,99% do iodeto já precipitou, e a separação dos dois haletos é praticamente completa.\n\n0,01 mol/L supõe que nada de AgI tenha precipitado. 1,8 · 10⁻⁸ mol/L é a concentração de Ag⁺ nesse momento. 8,5 · 10⁻¹⁵ mol/L é o limiar de Ag⁺ para o AgI começar a precipitar. E o iodeto não chega a zero: sempre resta o que o Kps permite.",
      v: { i: () => { const ag = 10 ** bissecao((p) => Math.log(10 ** p * 0.01) - Math.log(1.8e-10), -30, 0); const iodeto = 10 ** bissecao((p) => Math.log(ag * 10 ** p) - Math.log(8.5e-17), -30, 0); return qual(iodeto, o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 8,85", "7", "≈ 5,15", "9", "≈ 10,85"];
    return {
      d: "dificil",
      e: "Titulam-se 50 mL de ácido acético 0,1 mol/L (Ka = 1 · 10⁻⁵) com NaOH 0,1 mol/L. Com log 5 ≅ 0,7, qual é o pH no ponto de equivalência, a 25 °C?",
      o,
      x: "No ponto de equivalência, foram adicionados 50 mL de NaOH, e todo o ácido virou acetato: 0,005 mol em 100 mL, isto é, 0,05 mol/L. O acetato é base fraca, com Kb = Kw/Ka = 10⁻⁹: [OH⁻] ≅ √(10⁻⁹ · 5 · 10⁻²) = √(5 · 10⁻¹¹) ≅ 7,1 · 10⁻⁶ mol/L. O pOH é (11 − log 5)/2 ≅ 5,15, e o pH ≅ 8,85: básico, como em toda titulação de ácido fraco com base forte.\n\n7 é o ponto de equivalência de ácido forte com base forte. 5,15 é o pOH. 9 esquece a diluição, usando 0,1 mol/L de acetato. E 10,85 usa Ka no lugar de Kb.",
      v: { i: () => { const Ka = 1e-5, C = 0.005 / 0.1; return qual(pH(hDoBalanco((h) => h + C - (C * Ka) / (Ka + h) - Kw / h)), o, 0.005); } },
    };
  })(),
  (() => {
    const o = ["≈ 71%", "≈ 62%", "100%", "50%", "≈ 29%"];
    return {
      d: "dificil",
      e: "O N₂O₄ se dissocia segundo N₂O₄(g) ⇌ 2 NO₂(g), com Kp = 4 numa certa temperatura. Partindo de N₂O₄ puro, qual é o grau de dissociação no equilíbrio, se a pressão total é mantida em 1 atm?",
      o,
      x: "Com 1 mol inicial e grau α: n(N₂O₄) = 1 − α, n(NO₂) = 2α, total 1 + α. As pressões parciais são as frações molares vezes 1 atm: Kp = (2α/(1 + α))²/((1 − α)/(1 + α)) = 4α²/(1 − α²) = 4. Então α² = 1 − α², α² = 1/2, e α = 1/√2 ≅ 0,71 = 71%.\n\n62% esquece que o número total de mols muda, usando 4α²/(1 − α) = 4. 100% supõe dissociação completa, o que tornaria Kp infinito. 50% toma α como metade, sem resolver a equação. E 29% é a fração que não se dissocia, 1 − 0,71.",
      /* pressões parciais pelas frações molares; bisseção no grau */
      v: { i: () => { const Kp = (a) => { const tot = 1 + a, pNO2 = (2 * a) / tot, pN2O4 = (1 - a) / tot; return pNO2 ** 2 / pN2O4; }; return qual(bissecao((a) => Math.log(Kp(a)) - Math.log(4), 1e-9, 1 - 1e-9), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,144 g", "≈ 0,287 g", "≈ 0,431 g", "0 g", "≈ 0,072 g"];
    return {
      d: "dificil",
      e: "Misturam-se 100 mL de AgNO₃ 0,02 mol/L e 100 mL de NaCl 0,01 mol/L. Com Kps(AgCl) = 1,8 · 10⁻¹⁰ e massa molar do AgCl de 143,5 g/mol, que massa de AgCl precipita?",
      o,
      x: "Há 0,002 mol de Ag⁺ e 0,001 mol de Cl⁻. O produto iônico após a mistura é enorme diante do Kps, e praticamente todo o cloreto precipita: sobra Ag⁺ em excesso, cerca de 0,001 mol em 0,2 L, ou 5 · 10⁻³ mol/L, e o Cl⁻ que fica em solução é só Kps/[Ag⁺] ≅ 3,6 · 10⁻⁸ mol/L, desprezível. Precipitam cerca de 0,001 mol de AgCl, isto é, 0,001 · 143,5 ≅ 0,144 g.\n\n0,287 g toma a prata como limitante. 0,431 g soma as quantidades dos dois íons. 0 g supõe que concentrações baixas não precipitem, sem comparar com o Kps. E 0,072 g divide o resultado por 2, como se o volume da mistura reduzisse a quantidade de cloreto.",
      /* bisseção na quantidade precipitada p até que o produto iônico restante iguale o Kps */
      v: { i: () => { const p = bissecao((x) => Math.log(((0.002 - x) / 0.2) * ((0.001 - x) / 0.2)) - Math.log(1.8e-10), 0, 0.001 - 1e-15, 200); return qual(p * massaMolar("AgCl", MASSAS), o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["0,2 atm, porque os sólidos não entram na expressão de Kp", "0,4 atm, porque há o dobro de reagente", "0,1 atm, porque o gás se distribui por mais sólido", "Entre 0,2 atm e 0,4 atm, porque parte do excesso reage", "Depende do volume ocupado pelos sólidos"];
    return {
      d: "dificil",
      e: "Num recipiente fechado, a uma temperatura fixa, CaCO₃(s) ⇌ CaO(s) + CO₂(g) atinge o equilíbrio com pressão de CO₂ de 0,2 atm. Repete-se o experimento, no mesmo recipiente e na mesma temperatura, com o dobro da massa de CaCO₃. Qual será a pressão de CO₂ no novo equilíbrio?",
      o,
      x: "Na expressão da constante, sólidos puros não aparecem: Kp = p(CO₂). A pressão de CO₂ no equilíbrio é fixada pela temperatura, e o CaCO₃ se decompõe só até ela chegar a 0,2 atm, qualquer que seja a quantidade de sólido, desde que reste um pouco de cada um. Com o dobro de CaCO₃, sobra mais sólido sem reagir, mas a pressão é a mesma, 0,2 atm.\n\n0,4 atm trata a quantidade de sólido como se entrasse na constante. 0,1 atm inventa uma relação inversa com a massa de sólido. “Entre 0,2 e 0,4 atm” aplica ao sólido um deslocamento que só vale para concentrações de gases ou de solutos. E o volume dos sólidos não altera a pressão de equilíbrio, que é o próprio Kp.",
      /* decomposição até p(CO₂) = Kp, limitada pelo sólido disponível; 10 L a RT = 24,6 atm·L/mol */
      v: { i: () => { const V = 10, RT = 24.6, Kp = 0.2; const pFinal = (nCaCO3) => { const xi = bissecao((x) => (x * RT) / V - Kp, 0, nCaCO3); return (Math.min(xi, nCaCO3) * RT) / V; }; const p1 = pFinal(1), p2 = pFinal(2); return unicoV(o.map((_, i) => i === (Math.abs(p2 - p1) < 1e-12 && Math.abs(p1 - 0.2) < 1e-9 ? 0 : p2 > p1 ? 3 : 2))); } },
    };
  })(),
  (() => {
    const o = ["≈ 1,84", "2", "≈ 1,70", "≈ 1,92", "≈ 12,16"];
    return {
      d: "dificil",
      e: "O ácido sulfúrico tem a primeira ionização completa e a segunda com Ka₂ = 1,2 · 10⁻² (HSO₄⁻ ⇌ H⁺ + SO₄²⁻). Com log 1,45 ≅ 0,16 e log 2 ≅ 0,30, qual é o pH de uma solução 0,01 mol/L de H₂SO₄, a 25 °C?",
      o,
      x: "A primeira ionização dá 0,01 mol/L de H⁺ e de HSO₄⁻. Na segunda, se y mol/L de HSO₄⁻ se ionizam: y · (0,01 + y)/(0,01 − y) = 1,2 · 10⁻², ou y² + 0,022y − 1,2 · 10⁻⁴ = 0, com y ≅ 0,0045 mol/L. Então [H⁺] ≅ 0,0145 mol/L, e pH = 2 − log 1,45 ≅ 1,84. A segunda ionização é parcial, porque o H⁺ da primeira a desloca para a esquerda.\n\n2 considera só a primeira ionização. 1,70 trata as duas ionizações como completas, com [H⁺] = 0,02 mol/L. 1,92 toma o próprio Ka₂, 0,012, como concentração de H⁺. E 12,16 é o pOH.",
      /* balanço de cargas: [H⁺] = [HSO₄⁻] + 2[SO₄²⁻] + [OH⁻] */
      v: { i: () => { const C = 0.01, Ka2 = 1.2e-2; return qual(pH(hDoBalanco((h) => h - C * (1 + Ka2 / (Ka2 + h)) - Kw / h)), o, 0.005); } },
    };
  })(),
  (() => {
    const o = ["≈ 2,33", "≈ 11,67", "7", "≈ 1,33", "Em nenhum pH, porque o Kps é muito pequeno"];
    return {
      d: "dificil",
      e: "Uma solução contém Fe³⁺ a 0,001 mol/L. Com Kps(Fe(OH)₃) = 1 · 10⁻³⁸ e log 2,15 ≅ 0,33, a partir de que pH, aproximadamente, o Fe(OH)₃ começa a precipitar, a 25 °C?",
      o,
      x: "A precipitação começa quando [Fe³⁺] · [OH⁻]³ atinge o Kps: [OH⁻]³ = 10⁻³⁸/10⁻³ = 10⁻³⁵, e [OH⁻] = 10^(−35/3) ≅ 2,15 · 10⁻¹² mol/L. O pOH é 12 − log 2,15 ≅ 11,67, e o pH ≅ 14 − 11,67 = 2,33. O hidróxido de ferro(III) precipita já em meio ácido, o que permite separá-lo de outros cátions.\n\n11,67 é o pOH, e não o pH. 7 supõe que hidróxidos só precipitem a partir da neutralidade. 1,33 esquece de dividir o Kps pela concentração de Fe³⁺. E um Kps muito pequeno significa justamente o contrário: o composto precipita com facilidade.",
      /* bisseção no pH até o produto iônico igualar o Kps */
      v: { i: () => qual(bissecao((p) => Math.log(1e-3 * (Kw / 10 ** -p) ** 3) - Math.log(1e-38), 0, 14), o, 0.005) },
    };
  })(),
];
