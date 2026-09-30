/* Rascunho — Estatística / Testes de hipótese.

   O enunciado fornece os valores críticos e de tabela usados na
   explicação; a conferência recalcula tudo sem tabela: quantis z, t, χ² e
   F por bisseção sobre as densidades integradas numericamente (gama por
   Lanczos), valores p exatos pela binomial somada ensaio a ensaio, erros
   padrão e distribuições do valor p por simulação com semente fixa. */

import { unicoV, soma, qualNum, bissecao, integra, Phi, zDe, sorteador, lerNum } from "./_estatistica.mjs";

export const materia = "estatistica";
export const tema = "Testes de hipótese";
export const arquivo = "estatistica__testes-de-hipotese";

function lgamma(z) {
  const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lgamma(1 - z);
  z -= 1; let x = c[0]; for (let i = 1; i < 9; i++) x += c[i] / (z + i);
  const t = z + 7.5; return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
}
/* t de Student */
const tPdf = (nu) => { const k = Math.exp(lgamma((nu + 1) / 2) - lgamma(nu / 2)) / Math.sqrt(nu * Math.PI); return (t) => k * (1 + (t * t) / nu) ** (-(nu + 1) / 2); };
const tCdf = (nu) => { const f = tPdf(nu); return (x) => (x >= 0 ? 0.5 + integra(f, 0, x, 2000) : 0.5 - integra(f, 0, -x, 2000)); };
const tQ = (nu, p) => { const F = tCdf(nu); return bissecao((x) => F(x) - p, -100, 100, 100); };
/* qui-quadrado: cauda superior integrada e valor crítico */
const chi2Pdf = (k) => (x) => (x <= 0 ? 0 : Math.exp((k / 2 - 1) * Math.log(x) - x / 2 - (k / 2) * Math.log(2) - lgamma(k / 2)));
const chi2Sf = (k, c) => integra(chi2Pdf(k), c, c + 60, 6000) + integra(chi2Pdf(k), c + 60, c + 600, 6000);
const chi2Crit = (k, a) => bissecao((c) => chi2Sf(k, c) - a, 0.01, 100, 100);
/* F de Snedecor */
const fPdf = (d1, d2) => (x) => (x <= 0 ? 0 : Math.exp(lgamma((d1 + d2) / 2) - lgamma(d1 / 2) - lgamma(d2 / 2) + (d1 / 2) * Math.log(d1 / d2) + (d1 / 2 - 1) * Math.log(x) - ((d1 + d2) / 2) * Math.log(1 + (d1 * x) / d2)));
const fSf = (d1, d2, c) => integra(fPdf(d1, d2), c, c + 50, 5000) + integra(fPdf(d1, d2), c + 50, c + 20000, 40000);
const fCrit = (d1, d2, a) => bissecao((c) => fSf(d1, d2, c) - a, 0.01, 100, 100);
/* binomial somada ensaio a ensaio */
const dist = (n, p) => { let d = [1]; for (let i = 0; i < n; i++) { const e = new Array(d.length + 1).fill(0); d.forEach((q, k) => { e[k] += q * (1 - p); e[k + 1] += q * p; }); d = e; } return d; };
const gerador = (semente) => { const r = sorteador(semente); return (mu = 0, s = 1) => { let u = r(); while (u <= 0) u = r(); return mu + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); }; };
const media = (xs) => soma(xs) / xs.length;
const dp = (xs, divN1 = true) => { const m = media(xs); return Math.sqrt(soma(xs.map((x) => (x - m) ** 2)) / (xs.length - (divN1 ? 1 : 0))); };
/* primeira estatística escrita na alternativa (depois de = ou ≈) e a decisão anunciada */
const leDecisao = (t) => { const m = t.replace(/−/g, "-").match(/[=≈]\s*(-?[\d.,]+)/); return { v: m ? lerNum(m[1]) : NaN, rejeita: /rejeita-se/i.test(t) }; };
const confere = (o, valor, rejeita, tol, absoluto = false) => unicoV(o.map((t) => { const d = leDecisao(t); const v = absoluto ? Math.abs(d.v) : d.v; return Math.abs(v - valor) <= tol && d.rejeita === rejeita; }));
const z975 = zDe(0.975), z95 = zDe(0.95);
const pBil = (z) => 2 * (1 - Phi(Math.abs(z)));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["H0: μ = 500 e H1: μ < 500", "H0: μ < 500 e H1: μ = 500", "H0: μ = 500 e H1: μ > 500", "H0: μ ≠ 500 e H1: μ = 500", "H0: x̄ = 500 e H1: x̄ < 500"];
    return {
      d: "facil",
      e: "Um fabricante afirma que seus pacotes têm, em média, 500 g, e um órgão fiscal suspeita que a média seja menor. Quais são as hipóteses do teste?",
      o,
      x: "A hipótese nula representa a afirmação a ser testada, com a igualdade: μ = 500. A alternativa traduz a suspeita que se quer demonstrar, média menor: μ < 500. O teste só conclui a favor de H1 se os dados trouxerem evidência forte contra H0.\n\nTrocar as hipóteses põe a suspeita no lugar da afirmação. μ > 500 aponta a desconfiança na direção errada. H0 com ≠ não fixa um valor para calcular probabilidades. E hipóteses são sobre o parâmetro μ, e não sobre a média amostral x̄, que já é conhecida.",
      v: {
        i: () => unicoV(o.map((t) => {
          /* H0 com igualdade sobre o parâmetro, H1 com a direção da suspeita (menor) */
          const [, s0, r0, s1, r1] = t.match(/^H0: (\S+) (\S) 500 e H1: (\S+) (\S) 500$/) || [];
          return s0 === "μ" && s1 === "μ" && r0 === "=" && r1 === "<";
        })),
      },
    };
  })(),
  (() => {
    const o = ["Rejeita-se H0", "Não se rejeita H0", "Aceita-se H0 como verdadeira", "Prova-se que H1 é verdadeira", "O teste é inconclusivo"];
    return {
      d: "facil",
      e: "Num teste com nível de significância de 5%, o valor p foi 0,03. Qual é a decisão?",
      o,
      x: "A regra é comparar o valor p com α: se p ≤ α, rejeita-se H0. Como 0,03 < 0,05, os dados são pouco compatíveis com H0 ao nível escolhido, e H0 é rejeitada. Se o nível fosse 1%, a decisão seria outra.\n\nNão rejeitar seria a decisão com p > 0,05. Aceitar H0 como verdadeira nunca é a conclusão de um teste. Rejeitar H0 não prova H1: há sempre o risco de um erro, controlado por α. E o teste chegou a uma decisão clara.",
      v: { i: () => { const p = 0.03, a = 0.05; return unicoV([p <= a, p > a, false, false, false]); } },
    };
  })(),
  (() => {
    const o = ["Não há evidência suficiente contra H0", "H0 foi provada verdadeira", "H1 foi provada falsa", "H0 tem 40% de chance de ser verdadeira", "Rejeita-se H0"];
    return {
      d: "facil",
      e: "Um teste deu valor p igual a 0,40. Qual é a conclusão adequada, com nível de significância de 5%?",
      o,
      x: "Com p = 0,40, bem acima de 0,05, os dados são compatíveis com H0, e ela não é rejeitada. Isso não prova H0: pode haver um efeito real que a amostra não teve tamanho ou precisão para detectar. A conclusão correta é a ausência de evidência suficiente contra H0.\n\nNão rejeitar não é provar H0 verdadeira, nem provar H1 falsa. O valor p não é a probabilidade de H0 ser verdadeira. E rejeitar H0 exigiria p ≤ 0,05.",
      v: { i: () => { const p = 0.4, a = 0.05; return unicoV([p > a, false, false, false, p <= a]); } },
    };
  })(),
  (() => {
    const o = ["2", "0,25", "16", "0,03", "−2"];
    return {
      d: "facil",
      e: "Para testar H0: μ = 50, com σ = 8 conhecido, uma amostra de 64 observações teve média 52. Qual é o valor da estatística z?",
      o,
      x: "A estatística é z = (x̄ − μ0)/(σ/√n) = (52 − 50)/(8/√64) = 2/1 = 2. Ela mede quantos erros padrão a média amostral está afastada do valor da hipótese nula. Um z = 2 indica um afastamento considerável, que um teste bilateral a 5% já rejeitaria.\n\n0,25 divide pelo desvio padrão, 8, sem o √n. 16 divide σ por n, e não por √n. 0,03 multiplica σ por √n em vez de dividir. E −2 inverte a subtração, μ0 − x̄.",
      v: {
        i: () => {
          /* a média amostral, sob H0, segue a normal de média 50 e erro padrão simulado */
          const g = gerador(3), ep = dp(Array.from({ length: 20000 }, () => media(Array.from({ length: 64 }, () => g(50, 8)))), false);
          return qualNum((52 - 50) / ep, o, 0.02);
        },
      },
    };
  })(),
  (() => {
    const o = ["−1,96 e 1,96", "−1,645 e 1,645", "0 e 1,96", "−2,576 e 2,576", "−0,05 e 0,05"];
    return {
      d: "facil",
      e: "Num teste bilateral com α = 5% baseado na normal padrão, quais são os valores críticos de z?",
      o,
      x: "No teste bilateral, os 5% de α se dividem entre as duas caudas, 2,5% em cada. Os valores que deixam 2,5% em cada cauda são −1,96 e 1,96, e rejeita-se H0 se |z| > 1,96.\n\n±1,645 deixa 5% em cada cauda, com α total de 10%, e corresponde ao teste unilateral de 5%. 0 e 1,96 põe toda a região crítica de um lado. ±2,576 corresponde a α = 1%. E ±0,05 confunde α com os valores críticos.",
      v: { i: () => { const c = bissecao((z) => 2 * (1 - Phi(z)) - 0.05, 0.1, 5); return unicoV(o.map((t) => { const [a, b] = t.replace(/−/g, "-").split(" e ").map(lerNum); return Math.abs(a + c) < 0.005 && Math.abs(b - c) < 0.005; })); } },
    };
  })(),
  (() => {
    const o = ["1,645", "1,96", "−1,645", "2,326", "0,05"];
    return {
      d: "facil",
      e: "Para H1: μ > μ0 e nível de significância de 5%, a partir de que valor de z se rejeita H0?",
      o,
      x: "No teste unilateral à direita, toda a região crítica fica na cauda superior, com 5% de área. O ponto que deixa 5% acima é z = 1,645, e rejeita-se H0 se z > 1,645. O teste unilateral é mais sensível na direção prevista, e cego na oposta.\n\n1,96 é o valor do teste bilateral, com 2,5% em cada cauda. −1,645 serviria para H1: μ < μ0. 2,326 corresponde a α = 1% unilateral. E 0,05 é o nível, e não o valor crítico.",
      v: { i: () => qualNum(bissecao((z) => 1 - Phi(z) - 0.05, 0.1, 5), o, 0.001) },
    };
  })(),
  (() => {
    const o = ["A chance, sob H0, de um resultado tão extremo", "A probabilidade de H0 ser verdadeira", "A probabilidade de H1 ser verdadeira", "O nível de significância escolhido", "A probabilidade de o resultado se repetir"];
    return {
      d: "facil",
      e: "O que é o valor p de um teste de hipóteses?",
      o,
      x: "O valor p é a probabilidade, calculada supondo H0 verdadeira, de obter um resultado tão extremo quanto o observado, ou mais, na direção de H1. Quanto menor o valor p, menos compatíveis os dados são com H0.\n\nO valor p não é a probabilidade de H0 nem de H1 ser verdadeira: ele supõe H0 verdadeira desde o início do cálculo. O nível de significância é escolhido antes, e o valor p vem dos dados. E ele não mede a chance de o resultado se repetir.",
      v: {
        i: () => {
          /* sob H0, a fração de estatísticas pelo menos tão extremas quanto a observada é o valor p */
          const g = gerador(7), zo = 2.17, N = 100000; let c = 0; for (let k = 0; k < N; k++) if (Math.abs(g()) >= zo) c++;
          return unicoV([Math.abs(c / N - pBil(zo)) < 0.003, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Quando H1 é μ ≠ μ0", "Quando H1 é μ > μ0", "Quando H1 é μ < μ0", "Quando H0 é μ ≠ μ0", "Quando a amostra é grande"];
    return {
      d: "facil",
      e: "Em que situação se usa um teste bilateral?",
      o,
      x: "O teste bilateral é usado quando a alternativa admite diferença em qualquer direção, H1: μ ≠ μ0. A região crítica fica dividida entre as duas caudas, porque tanto médias muito acima quanto muito abaixo de μ0 contam como evidência contra H0.\n\nμ > μ0 e μ < μ0 levam a testes unilaterais, com a região crítica numa só cauda. A desigualdade fica em H1, e não em H0. E o tamanho da amostra não decide entre teste unilateral e bilateral.",
      v: {
        i: () => {
          /* caudas usadas pela região crítica conforme a alternativa */
          const caudas = { "≠": 2, ">": 1, "<": 1 };
          return unicoV(o.map((t) => { const m = t.match(/^Quando H1 é μ (\S) μ0$/); return !!m && caudas[m[1]] === 2; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["1,6", "0,08", "8", "0,16", "16"];
    return {
      d: "facil",
      e: "Para testar H0: p = 0,5, uma amostra de 100 pessoas teve proporção 0,58 de respostas sim. Qual é o valor da estatística z?",
      o,
      x: "Sob H0, o erro padrão da proporção é √(p0(1 − p0)/n) = √(0,25/100) = 0,05. Então z = (p̂ − p0)/0,05 = 0,08/0,05 = 1,6. O erro padrão usa p0, porque o cálculo supõe H0 verdadeira.\n\n0,08 é a diferença p̂ − p0, sem dividir pelo erro padrão. 8 divide pela variância, 0,01, sem tirar a raiz. 0,16 divide 0,08 por √(p0(1 − p0)) = 0,5, sem o √n. E 16 divide por 0,005, isto é, 0,5/n em vez de 0,5/√n.",
      v: {
        i: () => {
          const r = sorteador(9), ps = Array.from({ length: 20000 }, () => { let c = 0; for (let k = 0; k < 100; k++) if (r() < 0.5) c++; return c / 100; });
          return qualNum(0.08 / dp(ps, false), o, 0.02);
        },
      },
    };
  })(),
  (() => {
    const o = ["Não: significância não mede o tamanho do efeito", "Sim: todo resultado significativo é importante", "Sim: p pequeno indica efeito grande", "Não: com n grande, nenhum teste é válido", "Só se o valor p for exatamente 0,05"];
    return {
      d: "facil",
      e: "Com uma amostra de um milhão de pessoas, uma diferença de 0,1 ponto no QI médio, cujo desvio padrão é 15, foi estatisticamente significativa. Isso indica uma diferença importante na prática?",
      o,
      x: "Com n enorme, o erro padrão fica minúsculo, 15/√1.000.000 = 0,015, e até uma diferença de 0,1 ponto gera z ≈ 6,7 e valor p quase nulo. Mas 0,1 ponto é menos de 1% do desvio padrão: o efeito é real e desprezível ao mesmo tempo. Significância estatística indica que o efeito dificilmente é zero, e não que é grande.\n\nNem todo resultado significativo tem importância prática. Um valor p pequeno pode vir de efeito pequeno com amostra enorme. O teste continua válido com n grande. E o valor exato de p não mede a relevância.",
      v: { i: () => { const z = 0.1 / (15 / 1000), p = pBil(z), efeito = 0.1 / 15; return unicoV([p < 1e-6 && efeito < 0.01, false, false, false, false]); } },
    };
  })(),
  (() => {
    const o = ["Rejeita-se H0, pois |z| > 1,96", "Não se rejeita H0, pois z < 2,576", "Rejeita-se H1", "Aceita-se H0", "Nada se conclui sem o valor de x̄"];
    return {
      d: "facil",
      e: "Num teste bilateral com α = 5%, a estatística calculada foi z = 2,3. Qual é a decisão?",
      o,
      x: "No teste bilateral a 5%, a região crítica é |z| > 1,96. Como 2,3 > 1,96, o resultado cai na região crítica e H0 é rejeitada. O valor p correspondente é cerca de 0,021, menor que 0,05.\n\n2,576 é o valor crítico para α = 1%; a 5%, o limite é 1,96. Um teste não rejeita H1: decide apenas se rejeita H0 ou não. Aceitar H0 contraria o resultado. E a estatística z já resume a informação necessária.",
      v: { i: () => { const rej = pBil(2.3) <= 0.05; return unicoV([rej, !rej, false, !rej, false]); } },
    };
  })(),
  (() => {
    const o = ["A hipótese nula", "A hipótese alternativa", "As duas hipóteses", "Nenhuma das duas", "Depende do valor p"];
    return {
      d: "facil",
      e: "Na formulação usual de um teste de hipóteses, qual das hipóteses contém o sinal de igualdade?",
      o,
      x: "A hipótese nula fixa um valor para o parâmetro, como μ = 50 ou p = 0,5, e é essa igualdade que permite calcular a distribuição da estatística de teste e o valor p. A alternativa contém a desigualdade: ≠, > ou <.\n\nA alternativa descreve o que se quer demonstrar, sem fixar um valor. As duas não podem conter a igualdade, pois seriam a mesma hipótese. Sem igualdade em H0, não haveria distribuição de referência. E as hipóteses são formuladas antes de calcular o valor p.",
      v: {
        i: () => {
          /* pares usuais de hipóteses: onde está o sinal de igualdade */
          const pares = [["μ = 50", "μ ≠ 50"], ["p = 0,5", "p > 0,5"], ["μ = 500", "μ < 500"]], temIgual = (h) => / = /.test(h);
          const nula = pares.every(([h0]) => temIgual(h0)), alt = pares.every(([, h1]) => temIgual(h1));
          return unicoV([nula && !alt, alt && !nula, nula && alt, !nula && !alt, false]);
        },
      },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["≈ 0,046", "≈ 0,023", "≈ 0,977", "0,05", "≈ 0,954"];
    return {
      d: "media",
      e: "Num teste bilateral, a estatística foi z = 2. Usando Φ(2) ≈ 0,9772, qual é o valor p?",
      o,
      x: "No teste bilateral, o valor p soma as duas caudas além de |z|: P(Z > 2) + P(Z < −2) = 2 · (1 − 0,9772) = 0,0456. Resultados tão extremos quanto z = 2, em qualquer direção, ocorreriam em cerca de 4,6% das amostras se H0 fosse verdadeira.\n\n0,023 é uma cauda só, o valor p unilateral. 0,977 é Φ(2), a área abaixo de 2. 0,05 é o nível de significância usual, e não o valor p. E 0,954 é a área central, entre −2 e 2.",
      v: { i: () => qualNum(pBil(2), o, 0.001) },
    };
  })(),
  (() => {
    const o = ["≈ 0,067", "≈ 0,134", "≈ 0,933", "1,5", "0,05"];
    return {
      d: "media",
      e: "Num teste com H1: μ > μ0, a estatística foi z = 1,5. Usando Φ(1,5) ≈ 0,9332, qual é o valor p?",
      o,
      x: "No teste unilateral à direita, o valor p é a cauda acima do valor observado: P(Z > 1,5) = 1 − 0,9332 = 0,0668. Como é maior que 0,05, H0 não é rejeitada a 5%, embora o resultado aponte na direção de H1.\n\n0,134 soma as duas caudas, o que seria o valor p bilateral. 0,933 é a área abaixo de 1,5. 1,5 é a própria estatística. E 0,05 é o nível de significância.",
      v: { i: () => qualNum(1 - Phi(1.5), o, 0.01) },
    };
  })(),
  (() => {
    const o = ["Rejeita-se H0, pois |z| = 2 > 1,96", "Não se rejeita H0, pois z = −0,4", "Não se rejeita H0, pois z = −2 é negativo", "Rejeita-se H0, pois z = −10", "Não se rejeita H0, pois 496 está perto de 500"];
    return {
      d: "media",
      e: "Uma máquina deveria encher pacotes com média 500 g, e σ = 10 g. Uma amostra de 25 pacotes teve média 496 g. Num teste bilateral a 5%, qual é a conclusão?",
      o,
      x: "O erro padrão é 10/√25 = 2, e z = (496 − 500)/2 = −2. No teste bilateral, o que importa é |z| = 2, maior que 1,96: a média está afastada demais de 500 para ser atribuída ao acaso, e H0 é rejeitada. A máquina parece estar enchendo pouco.\n\nz = −0,4 divide pelo desvio padrão, sem o √n. O sinal negativo só indica a direção, e no teste bilateral as duas caudas contam. z = −10 divide σ por n, e não por √n. E 4 g de diferença é muito ou pouco conforme o erro padrão, e não a olho.",
      v: { i: () => { const z = (496 - 500) / (10 / 5); return confere(o, Math.abs(z), Math.abs(z) > z975, 1e-9, true); } },
    };
  })(),
  (() => {
    const o = ["Não se rejeita H0, pois |t| = 1,5 < 2,131", "Rejeita-se H0, pois t = 6 > 2,131", "Rejeita-se H0, pois x̄ é maior que 50", "Não se rejeita H0, pois t = 0,375", "Rejeita-se H0, pois t = 1,5 > 1,341"];
    return {
      d: "media",
      e: "Uma amostra de 16 observações de uma população normal teve média 53 e desvio padrão amostral 8. Num teste bilateral de H0: μ = 50 a 5%, com t crítico 2,131 para 15 graus de liberdade, qual é a conclusão?",
      o,
      x: "O erro padrão estimado é 8/√16 = 2, e t = (53 − 50)/2 = 1,5. Como 1,5 < 2,131, a estatística não entra na região crítica, e H0 não é rejeitada: uma diferença de 3 unidades é compatível com o acaso, dada a variabilidade e o tamanho da amostra.\n\nt = 6 divide s por n, e não por √n. Uma média amostral maior que 50 sempre pode ocorrer por acaso. t = 0,375 divide pela dispersão das observações, sem o √n. E 1,341 é o valor crítico de um teste unilateral a 10%, que não é o teste pedido.",
      v: { i: () => { const t = 3 / (8 / 4); return confere(o, t, Math.abs(t) > tQ(15, 0.975), 1e-9, true); } },
    };
  })(),
  (() => {
    const o = ["Rejeita-se H0: z = 2,4 e p ≈ 0,016", "Não se rejeita H0: 62 está perto de 50", "Rejeita-se H0: z = 12", "Não se rejeita H0: z = 0,24", "Não se rejeita H0: p ≈ 0,99"];
    return {
      d: "media",
      e: "Uma moeda foi lançada 100 vezes e deu 62 caras. Num teste bilateral de H0: p = 0,5 a 5%, usando a aproximação normal, qual é a conclusão?",
      o,
      x: "Sob H0, o erro padrão de p̂ é √(0,25/100) = 0,05, e z = (0,62 − 0,5)/0,05 = 2,4. O valor p bilateral é 2 · P(Z > 2,4) ≈ 0,016, menor que 0,05: há evidência de que a moeda não é honesta. A conta binomial exata dá valor p de cerca de 0,021, com a mesma conclusão.\n\n62 caras em 100 parece pouco diferente de 50, mas passa de 2 erros padrão. z = 12 usa 0,01 como erro padrão, sem a raiz. z = 0,24 divide 0,12 por 0,5, sem o √n. E 0,99 é a área abaixo de z, e não o valor p.",
      v: {
        i: () => {
          const z = 0.12 / 0.05, d = dist(100, 0.5), exato = 2 * soma(d.slice(62)), rej = pBil(z) <= 0.05 && exato <= 0.05;
          return confere(o, z, rej, 1e-9);
        },
      },
    };
  })(),
  (() => {
    const o = ["A 5% e a 10%, mas não a 1%", "Só a 1%", "Nos três níveis", "Em nenhum deles", "Só a 10%"];
    return {
      d: "media",
      e: "Um teste deu valor p igual a 0,03. Em quais destes níveis de significância H0 seria rejeitada: 1%, 5% e 10%?",
      o,
      x: "Rejeita-se H0 sempre que o valor p é menor ou igual ao nível de significância. Com p = 0,03: 0,03 ≤ 0,05 e 0,03 ≤ 0,10, mas 0,03 > 0,01. Então há rejeição a 5% e a 10%, e não a 1%. O valor p é o menor nível em que H0 seria rejeitada.\n\nA 1% seria preciso p ≤ 0,01. Nos três níveis exigiria o mesmo. Em nenhum ignora que 0,03 está abaixo de 0,05. E só a 10% esquece o nível de 5%.",
      v: {
        i: () => {
          const [r1, r5, r10] = [0.01, 0.05, 0.1].map((a) => 0.03 <= a);
          return unicoV([!r1 && r5 && r10, r1 && !r5 && !r10, r1 && r5 && r10, !r1 && !r5 && !r10, !r1 && !r5 && r10]);
        },
      },
    };
  })(),
  (() => {
    const o = ["z = 2; rejeita-se H0 a 5%", "z = 4; rejeita-se H0 a 5%", "z ≈ 1,41; não se rejeita H0", "z = 0,4; não se rejeita H0", "z = 2; não se rejeita H0 a 5%"];
    return {
      d: "media",
      e: "Duas turmas de 50 alunos, com desvio padrão conhecido de 10 pontos em cada uma, tiveram médias 52 e 48. Num teste bilateral de igualdade das médias a 5%, qual é o resultado?",
      o,
      x: "O erro padrão da diferença soma as variâncias das duas médias: √(10²/50 + 10²/50) = √4 = 2. Então z = (52 − 48)/2 = 2, maior que 1,96, e H0 é rejeitada a 5%, com valor p de cerca de 0,046.\n\nz = 4 trata as 100 notas como uma só amostra, com erro padrão 10/√100 = 1. z ≈ 1,41 soma os dois erros padrão, 1,41 + 1,41, em vez das variâncias. z = 0,4 divide a diferença pelo desvio padrão das notas. E, com z = 2, a decisão correta a 5% é rejeitar.",
      v: {
        i: () => {
          const g = gerador(11), ds = Array.from({ length: 20000 }, () => { let a = 0, b = 0; for (let k = 0; k < 50; k++) { a += g(0, 10); b += g(0, 10); } return a / 50 - b / 50; });
          const z = 4 / dp(ds, false); return confere(o, z, Math.abs(z) > z975, 0.03);
        },
      },
    };
  })(),
  (() => {
    const o = ["t = 2; não se rejeita H0, pois 2 < 2,064", "t = 2; rejeita-se H0, pois 2 > 1,96", "t = 10; rejeita-se H0", "t = 0,4; não se rejeita H0", "t = 2; rejeita-se H0, pois p < 0,01"];
    return {
      d: "media",
      e: "Num estudo com 25 pacientes, a diferença entre as medidas depois e antes de um tratamento teve média 2 e desvio padrão 5. Num teste bilateral a 5%, com t crítico 2,064 para 24 graus de liberdade, qual é o resultado?",
      o,
      x: "Com dados pareados, analisam-se as diferenças como uma amostra: erro padrão 5/√25 = 1 e t = 2/1 = 2. Com 24 graus de liberdade, o valor crítico é 2,064, e t = 2 fica logo abaixo dele: H0 não é rejeitada, por pouco. O valor p é cerca de 0,057.\n\nComparar com 1,96 usa a normal, inadequada com σ estimado e 25 pares; ela levaria à rejeição indevida. t = 10 divide o desvio padrão por n. t = 0,4 divide pela dispersão das diferenças, sem o √n. E o valor p não é menor que 0,01.",
      v: { i: () => { const t = 2 / (5 / 5), F = tCdf(24), p = 2 * (1 - F(t)); return Math.abs(p - 0.057) < 0.002 ? confere(o, t, t > tQ(24, 0.975), 1e-9) : -1; } },
    };
  })(),
  (() => {
    const o = ["Rejeita no unilateral, mas não no bilateral", "Rejeita nos dois", "Não rejeita em nenhum", "Rejeita no bilateral, mas não no unilateral", "Depende do tamanho da amostra"];
    return {
      d: "media",
      e: "Num teste com α = 5%, a estatística foi z = 1,8, na direção prevista pela hipótese alternativa. O que acontece se o teste for unilateral e se for bilateral?",
      o,
      x: "No unilateral, o valor crítico é 1,645, e 1,8 > 1,645 leva à rejeição; o valor p é cerca de 0,036. No bilateral, o valor crítico é 1,96, e 1,8 < 1,96 não rejeita; o valor p dobra, para cerca de 0,072. A escolha entre os dois testes precisa ser feita antes de ver os dados.\n\nRejeitar nos dois exigiria |z| > 1,96. Não rejeitar em nenhum ignora que 1,8 passa de 1,645. O bilateral é o mais exigente dos dois. E o tamanho da amostra já está embutido no valor de z.",
      v: { i: () => { const uni = 1 - Phi(1.8) <= 0.05, bil = pBil(1.8) <= 0.05; return unicoV([uni && !bil, uni && bil, !uni && !bil, bil && !uni, false]); } },
    };
  })(),
  (() => {
    const o = ["Sob H0, resultados tão extremos ocorrem em 3% das amostras", "H0 tem 3% de probabilidade de ser verdadeira", "H1 tem 97% de probabilidade de ser verdadeira", "O efeito observado é de 3%", "Há 3% de chance de o resultado ser um erro de medida"];
    return {
      d: "media",
      e: "Um estudo relata valor p igual a 0,03. Qual interpretação desse número é correta?",
      o,
      x: "O valor p é calculado supondo H0 verdadeira: se ela fosse verdadeira, resultados tão extremos quanto o observado, ou mais, apareceriam em cerca de 3% das amostras. É uma medida da incompatibilidade entre os dados e H0.\n\nO valor p não é a probabilidade de H0 ser verdadeira, nem 1 − p é a de H1: essas probabilidades exigiriam outras informações, como a plausibilidade prévia das hipóteses. O valor p não mede o tamanho do efeito. E ele não fala de erros de medida.",
      v: {
        i: () => {
          const zo = zDe(1 - 0.03 / 2), g = gerador(13), N = 100000; let c = 0; for (let k = 0; k < N; k++) if (Math.abs(g()) >= zo) c++;
          return unicoV([Math.abs(c / N - 0.03) < 0.002, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["χ² = 4,2; não se rejeita H0", "χ² = 42; rejeita-se H0", "χ² = 4,2; rejeita-se H0", "Rejeita-se H0, pois as frequências diferem de 10", "χ² = 0; não se rejeita H0"];
    return {
      d: "media",
      e: "Um dado foi lançado 60 vezes, e as faces de 1 a 6 saíram 8, 9, 12, 11, 6 e 14 vezes. No teste qui-quadrado de aderência ao dado honesto, com valor crítico 11,07 para 5 graus de liberdade a 5%, qual é o resultado?",
      o,
      x: "Com dado honesto, cada face tem frequência esperada 60/6 = 10. A estatística é a soma de (O − E)²/E: (4 + 1 + 4 + 1 + 16 + 16)/10 = 42/10 = 4,2. Como 4,2 < 11,07, as diferenças são compatíveis com o acaso, e não se rejeita que o dado seja honesto.\n\n42 esquece de dividir cada termo pela frequência esperada. Com 4,2 abaixo do valor crítico, a decisão não pode ser rejeitar. Diferenças em relação a 10 são esperadas por acaso. E 0 é a soma das diferenças sem elevar ao quadrado, que sempre se cancelam.",
      v: { i: () => { const obs = [8, 9, 12, 11, 6, 14], esp = 10, q = soma(obs.map((x) => (x - esp) ** 2 / esp)); return confere(o, q, q > chi2Crit(5, 0.05), 1e-9); } },
    };
  })(),
  (() => {
    const o = ["χ² = 4 > 3,84; rejeita-se a independência", "χ² = 2; não se rejeita a independência", "χ² = 100; rejeita-se a independência", "χ² = 0; não se rejeita a independência", "χ² = 1; não se rejeita a independência"];
    return {
      d: "media",
      e: "Numa pesquisa, 30 de 50 homens e 20 de 50 mulheres aprovaram uma proposta. No teste qui-quadrado de independência, com valor crítico 3,84 para 1 grau de liberdade a 5%, qual é o resultado?",
      o,
      x: "Sob independência, a proporção de aprovação seria a geral, 50/100 = 0,5, e as frequências esperadas são 25 em cada uma das quatro células. Cada célula contribui com (±5)²/25 = 1, e χ² = 4. Como 4 > 3,84, rejeita-se a independência: a aprovação parece depender do sexo, com valor p de cerca de 0,046.\n\n2 usa só as células de aprovação, esquecendo as de rejeição. 100 esquece de dividir por 25. 0 soma as diferenças sem elevá-las ao quadrado. E 1 considera uma célula só.",
      v: {
        i: () => {
          const t = [[30, 20], [20, 30]], n = 100, lin = t.map((l) => soma(l)), col = [0, 1].map((j) => t[0][j] + t[1][j]);
          const q = soma(t.flatMap((l, i) => l.map((x, j) => (x - (lin[i] * col[j]) / n) ** 2 / ((lin[i] * col[j]) / n))));
          return confere(o, q, q > chi2Crit(1, 0.05), 1e-9);
        },
      },
    };
  })(),
  (() => {
    const o = ["2", "4", "1", "0,5", "≈ 1,41"];
    return {
      d: "media",
      e: "Com a mesma diferença x̄ − μ0 = 1 e o mesmo σ = 10, uma amostra de 100 observações dá z = 1. Qual seria o z com 400 observações?",
      o,
      x: "z = (x̄ − μ0)/(σ/√n) cresce com √n: com n = 400, o erro padrão cai de 1 para 10/20 = 0,5, e z = 1/0,5 = 2. A mesma diferença, que não era significativa com 100 observações, passa a ser a 5% com 400.\n\n4 supõe que z cresce na proporção de n, e não de √n. 1 ignora o efeito do tamanho da amostra. 0,5 inverte o efeito. E 1,41 = √2 corresponderia a dobrar n.",
      v: { i: () => { const g = gerador(15), ep = dp(Array.from({ length: 5000 }, () => media(Array.from({ length: 400 }, () => g(0, 10)))), false); return qualNum(1 / ep, o, 0.03); } },
    };
  })(),
  (() => {
    const o = ["Fora de 95,1 a 104,9", "Fora de 70,6 a 129,4", "Fora de 97,5 a 102,5", "Fora de 95,9 a 104,1", "Fora de 99,2 a 100,8"];
    return {
      d: "media",
      e: "Para testar H0: μ = 100 com σ = 15 e n = 36, num teste bilateral a 5% (z = 1,96), para que valores da média amostral H0 é rejeitada?",
      o,
      x: "O erro padrão é 15/√36 = 2,5, e a região de não rejeição vai de 100 − 1,96 · 2,5 a 100 + 1,96 · 2,5, isto é, de 95,1 a 104,9. Médias amostrais fora desse intervalo levam à rejeição de H0.\n\n70,6 a 129,4 usa σ sem dividir por √n. 97,5 a 102,5 usa só um erro padrão, sem o 1,96. 95,9 a 104,1 usa z = 1,645, de um teste de 10%. E 99,2 a 100,8 divide σ por n, e não por √n.",
      v: {
        i: () => {
          /* limites da média amostral em que o valor p bilateral é exatamente 5% */
          const pDe = (xb) => pBil((xb - 100) / 2.5), lo = bissecao((x) => pDe(x) - 0.05, 80, 100), hi = bissecao((x) => pDe(x) - 0.05, 100, 120);
          return unicoV(o.map((t) => { const [a, b] = t.match(/^Fora de ([\d,]+) a ([\d,]+)$/).slice(1).map(lerNum); return Math.abs(a - lo) < 0.06 && Math.abs(b - hi) < 0.06; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["z = −1,5; p ≈ 0,067; não se rejeita H0", "z = 1,5; p ≈ 0,067; rejeita-se H0", "z = −1,5; rejeita-se H0, pois z < 0", "z = −0,25; não se rejeita H0", "z = −9; rejeita-se H0"];
    return {
      d: "media",
      e: "Para testar H0: μ = 30 contra H1: μ < 30, com σ = 6 conhecido, uma amostra de 36 observações teve média 28,5. Usando Φ(1,5) ≈ 0,9332, qual é o resultado a 5%?",
      o,
      x: "O erro padrão é 6/√36 = 1, e z = (28,5 − 30)/1 = −1,5. No teste unilateral à esquerda, o valor p é P(Z < −1,5) = 1 − 0,9332 ≈ 0,067, maior que 0,05: H0 não é rejeitada, embora a média observada esteja abaixo de 30.\n\nz = 1,5 troca o sinal e ainda decide errado, porque 0,067 > 0,05. z < 0 só indica a direção; a rejeição exigiria z < −1,645. z = −0,25 divide pelo desvio padrão, sem o √n. E z = −9 divide σ por n.",
      v: { i: () => { const z = (28.5 - 30) / 1, p = Phi(z); return confere(o, z, p <= 0.05, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["Diminui, e rejeitar H0 fica mais difícil", "Aumenta, e rejeitar H0 fica mais fácil", "Não muda", "Passa a incluir z = 0", "Desaparece"];
    return {
      d: "media",
      e: "Num teste bilateral baseado na normal, o que acontece com a região crítica ao reduzir o nível de significância de 5% para 1%?",
      o,
      x: "Com α = 5%, rejeita-se H0 quando |z| > 1,96; com α = 1%, só quando |z| > 2,576. A região crítica encolhe, e é preciso evidência mais forte para rejeitar H0. Em troca, cai a chance de rejeitar H0 quando ela é verdadeira.\n\nA região não aumenta: fica mais afastada do centro. Ela muda, sim, de 1,96 para 2,576. z = 0 nunca está na região crítica de um teste bilateral. E a região continua existindo, só menor.",
      v: {
        i: () => {
          const c5 = zDe(0.975), c1 = zDe(0.995), area = (c) => 2 * (1 - Phi(c));
          return unicoV([c1 > c5 && area(c1) < area(c5), c1 < c5, Math.abs(c1 - c5) < 1e-9, c1 <= 0, area(c1) === 0]);
        },
      },
    };
  })(),
  (() => {
    const o = ["z ≈ 1,70; não se rejeita H0 a 5%", "z ≈ 1,70; rejeita-se H0 a 5%", "z ≈ 3,41; rejeita-se H0", "z ≈ 0,075; não se rejeita H0", "z ≈ 2,41; rejeita-se H0"];
    return {
      d: "media",
      e: "Numa campanha, 60 de 200 clientes da loja A e 45 de 200 da loja B aceitaram uma oferta. No teste bilateral de igualdade das proporções a 5%, com a proporção combinada no erro padrão, qual é o resultado?",
      o,
      x: "As proporções são 0,30 e 0,225, com diferença 0,075. Sob H0, usa-se a proporção combinada, 105/400 = 0,2625, e o erro padrão é √(0,2625 · 0,7375 · (1/200 + 1/200)) ≈ 0,044. Então z ≈ 0,075/0,044 ≈ 1,70, abaixo de 1,96: não se rejeita H0 a 5%, com valor p de cerca de 0,09.\n\nCom 1,70 < 1,96, a rejeição a 5% não se justifica. 3,41 usa √(p(1 − p)/400), como se as 400 respostas formassem uma só amostra. 0,075 é a diferença, sem dividir pelo erro padrão. E 2,41 usa 400 em cada termo, e não 200.",
      v: {
        i: () => {
          /* erro padrão da diferença sob H0, simulado com a proporção combinada nas duas lojas */
          const pc = 105 / 400, r = sorteador(17), ds = Array.from({ length: 20000 }, () => { let a = 0, b = 0; for (let k = 0; k < 200; k++) { if (r() < pc) a++; if (r() < pc) b++; } return (a - b) / 200; });
          const z = 0.075 / dp(ds, false); return confere(o, z, Math.abs(z) > z975, 0.03);
        },
      },
    };
  })(),
  (() => {
    const o = ["H0: o novo não é melhor; H1: o novo é melhor", "H0: o novo é melhor; H1: não é", "H0: os dois são diferentes; H1: são iguais", "H0: o novo é pior; H1: é igual ao atual", "Não é preciso formular hipóteses"];
    return {
      d: "media",
      e: "Um novo remédio só deve substituir o atual se houver evidência de que é melhor. Como se formulam as hipóteses do teste?",
      o,
      x: "O teste exige evidência forte para concluir H1, e por isso H1 deve conter o que se quer demonstrar: que o novo é melhor. H0 fica com o status quo, o novo não é melhor, e só é rejeitada se os dados forem pouco compatíveis com ela. Assim, a troca só acontece com evidência.\n\nPôr a superioridade em H0 inverte o ônus da prova: o novo seria adotado sem evidência. Diferença em H0 e igualdade em H1 também inverte os papéis. Pior contra igual deixa de fora o caso de interesse. E sem hipóteses não há teste.",
      /* formulação conceitual, sem conta a refazer: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["Não se rejeita H0: z está no lado oposto", "Rejeita-se H0, pois |z| > 1,645", "Rejeita-se H0, pois |z| > 1,96", "Conclui-se que μ < 50 com 5% de significância", "O teste é inválido"];
    return {
      d: "media",
      e: "Num teste de H0: μ = 50 contra H1: μ > 50, a estatística foi z = −2,1. Qual é a conclusão a 5%?",
      o,
      x: "Com H1: μ > 50, só valores altos de z são evidência contra H0. Um z negativo aponta na direção contrária à de H1, e o valor p é P(Z > −2,1) ≈ 0,98: não se rejeita H0. O teste unilateral foi montado para detectar aumento, e não diminuição.\n\nUsar |z| trata o teste como bilateral. Concluir que μ < 50 mudaria a hipótese depois de ver os dados, o que invalida o nível de significância. E o teste é válido: apenas não encontrou evidência a favor de H1.",
      v: { i: () => { const p = 1 - Phi(-2.1); return unicoV([p > 0.05, p <= 0.05, p <= 0.05, false, false]); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,011", "≈ 0,0098", "0,9", "≈ 0,001", "≈ 0,055"];
    return {
      d: "media",
      e: "Um jogador acertou 9 de 10 lances livres, e sua taxa histórica é de 50%. No teste de H0: p = 0,5 contra H1: p > 0,5, qual é o valor p exato, pela binomial?",
      o,
      x: "O valor p é a probabilidade, sob H0, de um resultado tão extremo ou mais: P(X ≥ 9) = P(X = 9) + P(X = 10) = (10 + 1)/1.024 = 11/1.024 ≈ 0,011. Com cerca de 1% de chance, o resultado seria bem incomum se a taxa continuasse em 50%.\n\n0,0098 considera só P(X = 9), esquecendo o resultado ainda mais extremo, X = 10. 0,9 é a proporção de acertos. 0,001 é só P(X = 10). E 0,055 é P(X ≥ 8), que inclui um resultado menos extremo que o observado.",
      v: { i: () => { const d = dist(10, 0.5); return qualNum(d[9] + d[10], o, 0.0005); } },
    };
  })(),
  (() => {
    const o = ["O valor p ficou abaixo de 0,05", "O efeito é de pelo menos 5%", "Há 95% de chance de H1 ser verdadeira", "A amostra tem mais de 5% da população", "O erro de medida é menor que 5%"];
    return {
      d: "media",
      e: "O que significa dizer que um resultado foi estatisticamente significativo ao nível de 5%?",
      o,
      x: "Significativo a 5% quer dizer que o valor p ficou abaixo de 0,05, e por isso H0 foi rejeitada a esse nível. Se H0 fosse verdadeira, um resultado tão extremo teria menos de 5% de chance de aparecer. O mesmo resultado pode deixar de ser significativo a 1%, se o valor p estiver entre 0,01 e 0,05.\n\nO nível não diz nada sobre o tamanho do efeito. Não se atribui probabilidade a H1 com esse raciocínio. O tamanho da amostra relativo à população não entra na definição. E erro de medida é outro assunto.",
      v: {
        i: () => {
          /* sob H0, a regra p < 0,05 rejeita em 5% das amostras: é isso que o nível controla */
          const g = gerador(19), N = 100000; let rej = 0; for (let k = 0; k < N; k++) if (pBil(g()) < 0.05) rej++;
          return unicoV([Math.abs(rej / N - 0.05) < 0.003, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Aumenta", "Diminui", "Não muda", "Fica sempre igual a 0,05", "Fica negativo"];
    return {
      d: "media",
      e: "Com a mesma diferença x̄ − μ0 e o mesmo tamanho de amostra, o que acontece com o valor p se os dados forem mais dispersos, com σ maior?",
      o,
      x: "Com σ maior, o erro padrão σ/√n cresce, e a mesma diferença corresponde a um z menor em valor absoluto. Um z menor deixa mais área nas caudas, e o valor p aumenta: dados mais ruidosos dão menos evidência contra H0.\n\nO valor p só diminuiria com σ menor. Ele muda, porque depende de z. Não há relação com o nível usual de 0,05. E probabilidades nunca são negativas.",
      v: { i: () => { const p = (s) => pBil(3 / (s / Math.sqrt(25))), a = p(10), b = p(20); return unicoV([b > a, b < a, Math.abs(a - b) < 1e-12, Math.abs(b - 0.05) < 1e-12, b < 0]); } },
    };
  })(),
  (() => {
    const o = ["6", "12", "7", "11", "5"];
    return {
      d: "media",
      e: "Num teste qui-quadrado de independência com uma tabela de 3 linhas e 4 colunas, quantos graus de liberdade tem a estatística?",
      o,
      x: "Os graus de liberdade são (linhas − 1) · (colunas − 1) = 2 · 3 = 6. Fixados os totais de linhas e colunas, basta preencher 6 células: as demais ficam determinadas pelos totais. Com mais graus de liberdade, o valor crítico cresce: para 6 graus, a 5%, ele é 12,59, e não 3,84.\n\n12 é o número de células, sem descontar as restrições. 7 soma 3 + 4. 11 desconta só o total geral. E 5 subtrai um grau a mais.",
      v: {
        i: () => {
          /* células livres = 12 − posto das restrições de totais (linhas e colunas), posto por eliminação */
          const r = 3, c = 4, M = [];
          for (let i = 0; i < r; i++) M.push(Array.from({ length: r * c }, (_, k) => (Math.floor(k / c) === i ? 1 : 0)));
          for (let j = 0; j < c; j++) M.push(Array.from({ length: r * c }, (_, k) => (k % c === j ? 1 : 0)));
          let posto = 0; const A = M.map((l) => [...l]);
          for (let col = 0; col < r * c && posto < A.length; col++) {
            const piv = A.findIndex((l, i) => i >= posto && Math.abs(l[col]) > 1e-12); if (piv < 0) continue;
            [A[posto], A[piv]] = [A[piv], A[posto]];
            for (let i = 0; i < A.length; i++) if (i !== posto) { const f = A[i][col] / A[posto][col]; A[i] = A[i].map((x, k) => x - f * A[posto][k]); }
            posto++;
          }
          return Math.abs(chi2Crit(6, 0.05) - 12.59) < 0.01 ? qualNum(r * c - posto, o) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["t ≈ 2,24 > 2,101; rejeita-se H0", "t = 1; não se rejeita H0", "t ≈ 4,47; rejeita-se H0", "t ≈ 2,24 < 2,262; não se rejeita H0", "t ≈ 3,16; rejeita-se H0"];
    return {
      d: "media",
      e: "Dois grupos de 10 observações tiveram médias com diferença 3 e desvio padrão combinado 3. No teste t bilateral a 5%, com valor crítico 2,101 para 18 graus de liberdade, qual é o resultado?",
      o,
      x: "O erro padrão da diferença é s · √(1/10 + 1/10) = 3 · √0,2 ≈ 1,342, e t = 3/1,342 ≈ 2,24. Com 10 + 10 − 2 = 18 graus de liberdade, o valor crítico é 2,101, e 2,24 > 2,101: rejeita-se a igualdade das médias.\n\nt = 1 divide a diferença pelo desvio padrão, sem o fator √(1/10 + 1/10). 4,47 trata as 20 observações como uma única amostra. 2,262 é o valor crítico para 9 graus de liberdade, de um só grupo, e leva à decisão errada. E 3,16 usa só 1/10 na raiz, como se uma das médias fosse conhecida sem erro.",
      v: { i: () => { const t = 3 / (3 * Math.sqrt(0.2)); return confere(o, t, t > tQ(18, 0.975), 0.006); } },
    };
  })(),
  (() => {
    const o = ["12", "2.400", "50", "24", "0,06"];
    return {
      d: "media",
      e: "Numa tabela de contingência com total geral 200, a linha A soma 40 e a coluna X soma 60. Sob a hipótese de independência, qual é a frequência esperada da célula da linha A com a coluna X?",
      o,
      x: "Sob independência, P(A e X) = P(A) · P(X) = (40/200) · (60/200) = 0,2 · 0,3 = 0,06, e a frequência esperada é 200 · 0,06 = 12. Em fórmula: total da linha · total da coluna/total geral = 40 · 60/200 = 12.\n\n2.400 multiplica os totais sem dividir pelo total geral. 50 é a média dos dois totais, sem relação com a independência. 24 divide por 100, e não pelo total geral, 200. E 0,06 é a probabilidade da célula, e não a frequência esperada.",
      v: {
        i: () => {
          /* 200 indivíduos com linha e coluna sorteadas de forma independente, repetido muitas vezes */
          const r = sorteador(23), R = 5000; let tot = 0;
          for (let k = 0; k < R; k++) for (let i = 0; i < 200; i++) if (r() < 0.2 && r() < 0.3) tot++;
          return qualNum(tot / R, o, 0.02);
        },
      },
    };
  })(),
  (() => {
    const o = ["Não: com n pequeno, o teste detecta pouco", "Sim: não rejeitar prova H0", "Sim, se o valor p passar de 0,5", "Não: o teste foi inválido", "Sim: H1 foi refutada"];
    return {
      d: "media",
      e: "Com uma amostra de apenas 5 observações, um teste não rejeitou H0. Isso mostra que H0 é verdadeira?",
      o,
      x: "Com poucas observações, o erro padrão é grande, e diferenças reais podem passar despercebidas. Se a média verdadeira estivesse meio desvio padrão acima de μ0, um teste bilateral a 5% com n = 5 rejeitaria H0 em apenas cerca de 20% das amostras. Não rejeitar indica falta de evidência, e não prova de H0.\n\nNenhum valor p, por maior que seja, prova H0. O teste é válido; só tem pouca sensibilidade. E H1 não é refutada: pode ser verdadeira sem ter sido detectada.",
      v: {
        i: () => {
          const g = gerador(29), N = 40000; let rej = 0;
          for (let k = 0; k < N; k++) { const xs = Array.from({ length: 5 }, () => g(0.5, 1)); if (Math.abs(media(xs) / (1 / Math.sqrt(5))) > z975) rej++; }
          return unicoV([Math.abs(rej / N - 0.2) < 0.02, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["z ≈ 1,95 > 1,645; rejeita-se H0", "z ≈ 1,95 < 1,96; não se rejeita H0", "z ≈ 0,03; não se rejeita H0", "z ≈ 1,56; não se rejeita H0", "z ≈ 0,14; não se rejeita H0"];
    return {
      d: "media",
      e: "Um fabricante garante no máximo 5% de peças defeituosas. Numa amostra de 200, há 16 defeituosas. No teste de H0: p = 0,05 contra H1: p > 0,05 a 5%, qual é o resultado?",
      o,
      x: "A proporção amostral é 16/200 = 0,08. Sob H0, o erro padrão usa p0: √(0,05 · 0,95/200) ≈ 0,0154, e z = (0,08 − 0,05)/0,0154 ≈ 1,95. No teste unilateral a 5%, o valor crítico é 1,645, e H0 é rejeitada: há evidência de que a taxa de defeitos passa de 5%.\n\nComparar com 1,96 trata o teste como bilateral. 0,03 é a diferença, sem dividir pelo erro padrão. 1,56 usa p̂ = 0,08 no erro padrão, em vez do valor de H0. E 0,14 divide por √(p0(1 − p0)), sem o √n.",
      v: { i: () => { const z = 0.03 / Math.sqrt((0.05 * 0.95) / 200); return confere(o, z, z > z95, 0.006); } },
    };
  })(),
  (() => {
    const o = ["A análise de variância, com a estatística F", "Seis testes t, um para cada par, sem ajuste", "O qui-quadrado de aderência", "O coeficiente de correlação entre os grupos", "O teste z de uma proporção"];
    return {
      d: "media",
      e: "Qual procedimento é o adequado para testar, de uma só vez, se as médias de quatro grupos independentes são iguais?",
      o,
      x: "A análise de variância compara, numa só estatística F, a variação entre as médias dos grupos com a variação dentro dos grupos. Se as médias forem iguais, as duas variações devem ser parecidas, e F fica perto de 1; F grande indica diferença entre as médias.\n\nSeis testes t sem ajuste, cada um a 5%, elevam muito a chance de algum rejeitar por acaso: com testes independentes, seria 1 − 0,95⁶ ≈ 26%. O qui-quadrado de aderência compara frequências. A correlação mede associação entre duas variáveis numéricas. E o teste de uma proporção não compara médias.",
      v: {
        i: () => {
          /* sob H0, a razão F entre as variações fica perto de 1; seis testes a 5% erram juntos cerca de 26% */
          const g = gerador(31), Fs = Array.from({ length: 3000 }, () => {
            const gr = Array.from({ length: 4 }, () => Array.from({ length: 8 }, () => g(10, 2))), ms = gr.map(media), mg = media(ms);
            const qmE = (8 * soma(ms.map((m) => (m - mg) ** 2))) / 3, qmD = soma(gr.map((x, i) => soma(x.map((v) => (v - ms[i]) ** 2)))) / 28; return qmE / qmD;
          });
          return unicoV([Math.abs(media(Fs) - 28 / 26) < 0.05 && Math.abs(1 - 0.95 ** 6 - 0.265) < 0.001, false, false, false, false]);
        },
      },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["Uniforme entre 0 e 1", "Concentrado perto de 0", "Concentrado perto de 1", "Normal em torno de 0,5", "Sempre igual a 0,05"];
    return {
      d: "dificil",
      e: "Se H0 é verdadeira e a estatística do teste tem distribuição contínua, como se distribui o valor p em amostras repetidas?",
      o,
      x: "Sob H0, a probabilidade de o valor p ficar abaixo de qualquer número a é exatamente a: é isso que faz a regra p ≤ α errar com probabilidade α. Uma variável com P(p ≤ a) = a para todo a é uniforme entre 0 e 1. Por isso, valores p pequenos aparecem de vez em quando mesmo sem efeito nenhum: em 5% das vezes, abaixo de 0,05.\n\nConcentrar-se perto de 0 é o que acontece quando H1 é verdadeira. Perto de 1 não tem justificativa. A distribuição não tem forma de sino. E o valor p varia de amostra para amostra.",
      v: {
        i: () => {
          const g = gerador(37), N = 50000, dec = new Array(10).fill(0);
          for (let k = 0; k < N; k++) { const xs = Array.from({ length: 10 }, () => g(0, 1)); const p = pBil(media(xs) * Math.sqrt(10)); dec[Math.min(9, Math.floor(p * 10))]++; }
          const unif = dec.every((c) => Math.abs(c / N - 0.1) < 0.01);
          return unicoV([unif, !unif && dec[0] > dec[9], !unif && dec[9] > dec[0], false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["χ² ≈ 1,33; não se rejeita a razão 3:1", "χ² ≈ 1,33; rejeita-se a razão 3:1", "χ² = 200; rejeita-se a razão 3:1", "χ² ≈ 0,67; não se rejeita a razão 3:1", "χ² = 20; rejeita-se a razão 3:1"];
    return {
      d: "dificil",
      e: "Uma teoria genética prevê a proporção 3:1 entre fenótipos dominante e recessivo. Em 400 plantas, observaram-se 290 dominantes e 110 recessivas. No teste qui-quadrado, com valor crítico 3,84 para 1 grau de liberdade a 5%, qual é o resultado?",
      o,
      x: "As frequências esperadas são 300 e 100. Então χ² = (290 − 300)²/300 + (110 − 100)²/100 = 100/300 + 100/100 ≈ 0,33 + 1 = 1,33. Como 1,33 < 3,84, os dados são compatíveis com a razão 3:1, e ela não é rejeitada.\n\nCom χ² abaixo do valor crítico, rejeitar seria errado. 200 soma os quadrados das diferenças sem dividir pelas esperadas. 0,67 divide os dois termos por 300. E 20 soma as diferenças absolutas, sem elevar ao quadrado.",
      v: { i: () => { const obs = [290, 110], esp = [300, 100], q = soma(obs.map((x, i) => (x - esp[i]) ** 2 / esp[i])); return confere(o, q, q > chi2Crit(1, 0.05), 0.004); } },
    };
  })(),
  (() => {
    const o = ["t ≈ 2,19 > 2,015; rejeita-se H0", "t ≈ 2,19 < 2,571; não se rejeita H0", "t ≈ 5,37; rejeita-se H0", "t ≈ 0,90; não se rejeita H0", "t ≈ 2,40; rejeita-se H0"];
    return {
      d: "dificil",
      e: "Os valores 10, 12, 9, 14, 13 e 12 vieram de uma população normal. No teste de H0: μ = 10 contra H1: μ > 10 a 5%, com t crítico 2,015 para 5 graus de liberdade, qual é o resultado?",
      o,
      x: "A média é 70/6 ≈ 11,67, e a soma dos quadrados dos desvios é cerca de 17,33, com s = √(17,33/5) ≈ 1,86. O erro padrão é 1,86/√6 ≈ 0,76, e t = (11,67 − 10)/0,76 ≈ 2,19. No teste unilateral, 2,19 > 2,015, e H0 é rejeitada.\n\n2,571 é o valor crítico bilateral, que não corresponde a H1: μ > 10. 5,37 divide s por n. 0,90 divide pela dispersão das observações, sem o √n. E 2,40 calcula s dividindo por n, e não por n − 1.",
      v: { i: () => { const xs = [10, 12, 9, 14, 13, 12], t = (media(xs) - 10) / (dp(xs) / Math.sqrt(6)); return confere(o, t, t > tQ(5, 0.95), 0.006); } },
    };
  })(),
  (() => {
    const o = ["O pareado detecta a diferença; o independente, não", "Os dois dão o mesmo resultado", "O independente detecta; o pareado, não", "Nenhum dos dois detecta", "Não se pode fazer teste com 3 pacientes"];
    return {
      d: "dificil",
      e: "Três pacientes tiveram medidas 10, 12 e 14 antes de um tratamento e 11, 13 e 15 depois: cada um aumentou exatamente 1. Comparando um teste t pareado com um teste t para amostras independentes, o que se observa?",
      o,
      x: "No teste pareado, as diferenças são 1, 1 e 1, sem nenhuma variação: o desvio padrão das diferenças é zero, e a estatística t fica infinitamente grande, com evidência máxima de aumento. No teste para amostras independentes, a diferença de médias, 1, é comparada com a grande variação entre pacientes, desvio padrão 2 em cada grupo, e t = 1/√(4/3 + 4/3) ≈ 0,61, sem significância.\n\nOs resultados diferem muito, porque o pareamento remove a variação entre pacientes. O independente é o que falha. E testes com amostras pequenas são possíveis, desde que o modelo seja adequado.",
      v: {
        i: () => {
          const antes = [10, 12, 14], depois = [11, 13, 15], difs = depois.map((x, i) => x - antes[i]);
          const tPar = dp(difs) === 0 ? Infinity : media(difs) / (dp(difs) / Math.sqrt(3)), sp2 = (dp(antes) ** 2 + dp(depois) ** 2) / 2, tInd = (media(depois) - media(antes)) / Math.sqrt(sp2 * (2 / 3));
          const par = tPar > tQ(2, 0.975), ind = Math.abs(tInd) > tQ(4, 0.975);
          return unicoV([par && !ind, par === ind, ind && !par, !par && !ind, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["4", "2", "≈ 1,41", "8", "0,5"];
    return {
      d: "dificil",
      e: "Na comparação de duas proporções, 30 de 50 contra 20 de 50, a estatística z, com proporção combinada, vale 2. Qual é o qui-quadrado de independência da tabela 2 × 2 correspondente?",
      o,
      x: "Para uma tabela 2 × 2, o qui-quadrado de independência é exatamente o quadrado do z do teste de duas proporções com proporção combinada: χ² = z² = 4. As esperadas são 25 em cada célula, e χ² = 4 · 5²/25 = 4. Os dois testes são o mesmo teste, e o valor crítico 3,84 é 1,96².\n\n2 repete o z, sem elevar ao quadrado. 1,41 é a raiz de z. 8 dobra o quadrado. E 0,5 divide em vez de elevar.",
      v: {
        i: () => {
          const t = [[30, 20], [20, 30]], lin = [50, 50], col = [50, 50], q = soma(t.flatMap((l, i) => l.map((x, j) => (x - (lin[i] * col[j]) / 100) ** 2 / ((lin[i] * col[j]) / 100))));
          const pc = 0.5, z = (0.6 - 0.4) / Math.sqrt(pc * (1 - pc) * (2 / 50));
          return Math.abs(q - z * z) < 1e-9 && Math.abs(chi2Crit(1, 0.05) - z975 ** 2) < 0.01 ? qualNum(q, o, 1e-9) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["F = 2,4 < 4,26; não se rejeita H0", "F = 2,4; rejeita-se H0", "F = 16; rejeita-se H0", "F ≈ 0,42; não se rejeita H0", "F ≈ 0,53; não se rejeita H0"];
    return {
      d: "dificil",
      e: "Três grupos tiveram os valores 2, 4, 6, 8; 4, 6, 8, 10; e 6, 8, 10, 12. Na análise de variância, com valor crítico F = 4,26 para 2 e 9 graus de liberdade a 5%, qual é o resultado?",
      o,
      x: "As médias são 5, 7 e 9, e a média geral é 7. Entre grupos: 4 · [(5 − 7)² + 0² + (9 − 7)²] = 32, com 2 graus de liberdade, e quadrado médio 16. Dentro dos grupos, cada um tem soma de quadrados 20, total 60, com 9 graus de liberdade, e quadrado médio 60/9 ≈ 6,67. Então F = 16/6,67 = 2,4 < 4,26: a variação entre as médias é compatível com o acaso.\n\nCom F abaixo do valor crítico, rejeitar seria errado. 16 é só o quadrado médio entre grupos. 0,42 inverte a razão. E 0,53 divide as somas de quadrados, 32/60, sem os graus de liberdade.",
      v: {
        i: () => {
          const gr = [[2, 4, 6, 8], [4, 6, 8, 10], [6, 8, 10, 12]], ms = gr.map(media), mg = media(gr.flat());
          const qmE = soma(gr.map((x, i) => x.length * (ms[i] - mg) ** 2)) / 2, qmD = soma(gr.map((x, i) => soma(x.map((v) => (v - ms[i]) ** 2)))) / 9, F = qmE / qmD;
          return confere(o, F, F > fCrit(2, 9, 0.05), 1e-9);
        },
      },
    };
  })(),
  (() => {
    const o = ["χ² ≈ 3,11; não se rejeita a independência", "χ² ≈ 3,11; rejeita-se a independência", "χ² = 100; rejeita-se a independência", "χ² ≈ 1,56; não se rejeita a independência", "χ² = 0; não se rejeita a independência"];
    return {
      d: "dificil",
      e: "Numa pesquisa com 100 homens e 100 mulheres, as preferências pelas opções X, Y e Z foram 20, 30 e 50 entre os homens e 30, 30 e 40 entre as mulheres. No teste de independência, com valor crítico 5,99 para 2 graus de liberdade a 5%, qual é o resultado?",
      o,
      x: "Os totais das colunas são 50, 60 e 90, e as esperadas em cada linha são 25, 30 e 45. Na linha dos homens: 5²/25 + 0 + 5²/45 ≈ 1 + 0,56 = 1,56; nas mulheres, o mesmo. Então χ² ≈ 3,11, abaixo de 5,99: as diferenças são compatíveis com o acaso, e não se rejeita a independência.\n\nCom 3,11 < 5,99, a rejeição não se justifica. 100 soma os quadrados das diferenças sem dividir pelas esperadas. 1,56 considera só uma das linhas. E 0 soma as diferenças sem elevá-las ao quadrado.",
      v: {
        i: () => {
          const t = [[20, 30, 50], [30, 30, 40]], lin = t.map((l) => soma(l)), col = [0, 1, 2].map((j) => t[0][j] + t[1][j]), n = 200;
          const q = soma(t.flatMap((l, i) => l.map((x, j) => (x - (lin[i] * col[j]) / n) ** 2 / ((lin[i] * col[j]) / n))));
          return confere(o, q, q > chi2Crit(2, 0.05), 0.006);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 2,06", "≈ 1,96", "≈ 10,32", "≈ 0,41", "5"];
    return {
      d: "dificil",
      e: "Com uma amostra de 25 observações e desvio padrão amostral 5, qual é a menor diferença |x̄ − μ0| que um teste t bilateral a 5% considera significativa, com t crítico 2,064 para 24 graus de liberdade?",
      o,
      x: "Rejeita-se H0 quando |x̄ − μ0|/(s/√n) > 2,064. Com erro padrão 5/√25 = 1, isso exige |x̄ − μ0| > 2,064 · 1 ≈ 2,06. Diferenças menores, com essa amostra, não se distinguem do acaso a 5%.\n\n1,96 usa o valor da normal, que não se aplica com σ estimado e n = 25. 10,32 multiplica 2,064 pelo desvio padrão, sem dividir por √n. 0,41 divide s por n, e não por √n. E 5 é o próprio desvio padrão.",
      v: { i: () => { const F = tCdf(24), d = bissecao((x) => 2 * (1 - F(x / 1)) - 0.05, 0.5, 5); return qualNum(d, o, 0.003); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,039", "≈ 0,019", "≈ 0,016", "≈ 0,146", "≈ 0,83"];
    return {
      d: "dificil",
      e: "Em 12 pares de produtos avaliados às cegas, 10 provadores preferiram a marca nova. No teste do sinal bilateral, com H0: as duas marcas são igualmente preferidas, qual é o valor p exato?",
      o,
      x: "Sob H0, o número de preferências pela marca nova é binomial com n = 12 e p = 1/2. Uma cauda é P(X ≥ 10) = [C(12, 10) + C(12, 11) + C(12, 12)]/4.096 = (66 + 12 + 1)/4.096 ≈ 0,0193. No teste bilateral, dobra-se: p ≈ 0,039, abaixo de 0,05.\n\n0,019 é só a cauda superior, o valor p unilateral. 0,016 é só P(X = 10). 0,146 dobra P(X ≥ 9), que inclui um resultado menos extremo que o observado. E 0,83 é a proporção 10/12, e não uma probabilidade.",
      v: { i: () => { const d = dist(12, 0.5); return qualNum(2 * soma(d.slice(10)), o, 0.001); } },
    };
  })(),
  (() => {
    const o = ["Para qualquer α menor que cerca de 13,4%", "Para qualquer α menor que cerca de 6,7%", "Só para α = 5%", "Para qualquer α maior que cerca de 13,4%", "Para nenhum α"];
    return {
      d: "dificil",
      e: "Num teste bilateral, a estatística foi z = 1,5. Usando Φ(1,5) ≈ 0,9332, para quais níveis de significância H0 não seria rejeitada?",
      o,
      x: "O valor p bilateral é 2 · (1 − 0,9332) = 0,1336. H0 é rejeitada quando α ≥ p e mantida quando α < p. Assim, a decisão é não rejeitar para qualquer nível abaixo de cerca de 13,4%, o que inclui os usuais 1%, 5% e 10%.\n\n6,7% é o valor p unilateral, que não corresponde a este teste. A não rejeição vale para muitos níveis, e não só para 5%. Acima de 13,4%, H0 seria rejeitada. E há, sim, níveis em que H0 é mantida.",
      v: {
        i: () => {
          const p = pBil(1.5), mantem = [0.01, 0.05, 0.1, 0.13, 0.14, 0.2].map((a) => [a, a < p]);
          const abaixo = mantem.every(([a, m]) => m === (a < p)) && Math.abs(100 * p - 13.4) < 0.05;
          return unicoV([abaixo, Math.abs(100 * p - 6.7) < 0.05, false, false, false]);
        },
      },
    };
  })(),
];
