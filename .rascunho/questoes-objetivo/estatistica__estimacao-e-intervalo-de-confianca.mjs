/* Rascunho — Estatística / Estimação e intervalo de confiança.

   O enunciado fornece os valores críticos (z = 1,96, t = 2,131 …) usados
   na explicação; a conferência recalcula os quantis sem tabela — z por
   bisseção na normal integrada, t pela densidade de Student integrada
   numericamente — e confere as propriedades por simulação com semente
   fixa: cobertura, viés, erro padrão, eficiência. */

import { unicoV, soma, qualNum, bissecao, integra, Phi, zDe, sorteador, lerNum } from "./_estatistica.mjs";

export const materia = "estatistica";
export const tema = "Estimação e intervalo de confiança";
export const arquivo = "estatistica__estimacao-e-intervalo-de-confianca";

/* log da função gama (Lanczos), para a constante da densidade t */
function lgamma(z) {
  const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lgamma(1 - z);
  z -= 1; let x = c[0]; for (let i = 1; i < 9; i++) x += c[i] / (z + i);
  const t = z + 7.5; return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
}
const tPdf = (nu) => { const k = Math.exp(lgamma((nu + 1) / 2) - lgamma(nu / 2)) / Math.sqrt(nu * Math.PI); return (t) => k * (1 + (t * t) / nu) ** (-(nu + 1) / 2); };
const tCdf = (nu) => { const f = tPdf(nu); return (x) => (x >= 0 ? 0.5 + integra(f, 0, x, 2000) : 0.5 - integra(f, 0, -x, 2000)); };
/* quantil da t por bisseção sobre a distribuição integrada */
const tQ = (nu, p) => { const F = tCdf(nu); return bissecao((x) => F(x) - p, -100, 100, 100); };
const gerador = (semente) => { const r = sorteador(semente); return (mu = 0, s = 1) => { let u = r(); while (u <= 0) u = r(); return mu + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); }; };
const media = (xs) => soma(xs) / xs.length;
const dp = (xs, divN1 = true) => { const m = media(xs); return Math.sqrt(soma(xs.map((x) => (x - m) ** 2)) / (xs.length - (divN1 ? 1 : 0))); };
/* "De a a b" → [a, b] */
const limites = (t) => { const m = t.replace(/−/g, "-").match(/^De (-?[\d.,]+) a (-?[\d.,]+)/); return [lerNum(m[1]), lerNum(m[2])]; };
const qualIntervalo = (a, b, o, tol) => unicoV(o.map((t) => { const [x, y] = limites(t); return Math.abs(x - a) <= tol && Math.abs(y - b) <= tol; }));
const z975 = zDe(0.975);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["Uma estimativa pontual do parâmetro", "A média populacional exata", "Um intervalo de confiança", "O erro padrão da média", "Um parâmetro conhecido"];
    return {
      d: "facil",
      e: "Numa pesquisa, a renda média de 500 entrevistados foi R$ 2.300. Como se classifica esse valor em relação à renda média de toda a população?",
      o,
      x: "A média da amostra é uma estatística: um número calculado com os dados, que estima o parâmetro desconhecido, a média de toda a população. Outra amostra de 500 pessoas daria outro valor, próximo mas diferente. Por isso ela é uma estimativa pontual, um único número usado como palpite para μ.\n\nA média populacional exata só seria conhecida com um censo. Um intervalo de confiança tem dois limites. O erro padrão mede quanto a média amostral varia. E o parâmetro é justamente o que não se conhece.",
      v: {
        i: () => {
          /* duas amostras da mesma população dão médias diferentes entre si e da média populacional */
          const g = gerador(1), pop = Array.from({ length: 20000 }, () => Math.exp(g(7.6, 0.5))), mu = media(pop), r = sorteador(2);
          const amostra = () => Array.from({ length: 500 }, () => pop[Math.floor(r() * pop.length)]), m1 = media(amostra()), m2 = media(amostra());
          const estimativa = m1 !== m2 && m1 !== mu;
          return unicoV([estimativa, !estimativa, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["2", "0,2", "20", "200", "0,02"];
    return {
      d: "facil",
      e: "Uma população tem desvio padrão 20. Qual é o erro padrão da média de uma amostra aleatória de 100 observações?",
      o,
      x: "O erro padrão da média é σ/√n = 20/√100 = 20/10 = 2. Ele mede quanto a média amostral costuma variar de uma amostra para outra: bem menos que as observações individuais, que variam com desvio padrão 20. Com amostras maiores, o erro padrão diminui, mas só na proporção da raiz de n.\n\n0,2 divide por n = 100 em vez de √n. 20 é o desvio padrão de uma observação. 200 multiplica por √n. E 0,02 divide por n e ainda por 10.",
      v: { i: () => { const g = gerador(3), ms = Array.from({ length: 20000 }, () => { let s = 0; for (let k = 0; k < 100; k++) s += g(0, 20); return s / 100; }); return qualNum(dp(ms, false), o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["De 46,08 a 53,92", "De 30,4 a 69,6", "De 49,22 a 50,78", "De 48 a 52", "De 40 a 60"];
    return {
      d: "facil",
      e: "Uma amostra de 25 observações teve média 50. Sabendo que o desvio padrão da população é 10 e usando z = 1,96, qual é o intervalo de 95% de confiança para a média?",
      o,
      x: "O erro padrão é σ/√n = 10/√25 = 2, e a margem de erro é z · σ/√n = 1,96 · 2 = 3,92. O intervalo é 50 ± 3,92, isto é, de 46,08 a 53,92. Cerca de 95% dos intervalos construídos assim, em amostras repetidas, conteriam a média da população.\n\n30,4 a 69,6 usa σ sem dividir por √n. 49,22 a 50,78 divide σ por n, e não por √n. 48 a 52 esquece o fator 1,96 e usa só um erro padrão. E 40 a 60 soma e subtrai o desvio padrão da população.",
      v: { i: () => { const m = z975 * 10 / Math.sqrt(25); return qualIntervalo(50 - m, 50 + m, o, 0.006); } },
    };
  })(),
  (() => {
    const o = ["Cerca de 95% dos intervalos assim construídos contêm μ", "Há 95% de chance de μ mudar de valor", "95% dos dados estão dentro do intervalo", "A média amostral tem 95% de chance de estar no intervalo", "O intervalo contém 95% das médias populacionais"];
    return {
      d: "facil",
      e: "O que significa dizer que um intervalo para a média foi construído com 95% de confiança?",
      o,
      x: "A confiança descreve o método: se o processo de amostrar e calcular o intervalo fosse repetido muitas vezes, cerca de 95% dos intervalos obtidos conteriam a média verdadeira μ. μ é fixo; o que varia de uma amostra para outra é o intervalo.\n\nμ não muda de valor. O intervalo é para a média, e contém uma fração bem menor dos dados individuais. A média amostral está sempre no centro do seu próprio intervalo. E existe uma única média populacional.",
      v: {
        i: () => {
          const g = gerador(5), N = 20000; let cobre = 0, dados = 0, total = 0;
          for (let t = 0; t < N; t++) {
            const xs = Array.from({ length: 25 }, () => g(50, 10)), m = media(xs), e = z975 * 2;
            if (m - e <= 50 && 50 <= m + e) cobre++;
            if (t < 200) { dados += xs.filter((x) => x >= m - e && x <= m + e).length; total += xs.length; }
          }
          return unicoV([Math.abs(cobre / N - 0.95) < 0.01, false, dados / total > 0.9, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Fica mais largo", "Fica mais estreito", "Não muda", "Desloca-se para a direita", "Deixa de conter a média amostral"];
    return {
      d: "facil",
      e: "Com a mesma amostra, o que acontece com o intervalo de confiança para a média ao passar de 95% para 99% de confiança?",
      o,
      x: "Mais confiança exige um valor crítico maior: z = 2,576 para 99%, contra 1,96 para 95%. Com o mesmo erro padrão, a margem de erro cresce cerca de 31%, e o intervalo fica mais largo. Ganha-se segurança de cobrir μ, e perde-se precisão.\n\nFicar mais estreito seria o efeito de reduzir a confiança. A largura muda, sim. O centro continua na média amostral, sem deslocamento. E a média amostral continua no centro do intervalo.",
      v: { i: () => { const r = zDe(0.995) / z975; return unicoV([r > 1, r < 1, Math.abs(r - 1) < 1e-9, false, false]); } },
    };
  })(),
  (() => {
    const o = ["3,92", "2", "7,84", "23,52", "0,65"];
    return {
      d: "facil",
      e: "Qual é a margem de erro de um intervalo de 95% para a média, com desvio padrão populacional 12, amostra de 36 observações e z = 1,96?",
      o,
      x: "A margem de erro é z · σ/√n = 1,96 · 12/√36 = 1,96 · 2 = 3,92. Ela é a metade da largura do intervalo, que vai da média amostral menos 3,92 até a média amostral mais 3,92.\n\n2 é o erro padrão, sem o fator 1,96. 7,84 é a largura total do intervalo, o dobro da margem. 23,52 multiplica 1,96 por 12, sem dividir por √n. E 0,65 divide 1,96 · 12 por 36, e não por 6.",
      v: { i: () => qualNum(z975 * 12 / 6, o, 1e-3) },
    };
  })(),
  (() => {
    const o = ["Estimativa 50 e margem 8", "Estimativa 50 e margem 16", "Estimativa 42 e margem 16", "Estimativa 58 e margem 8", "Estimativa 8 e margem 50"];
    return {
      d: "facil",
      e: "Um intervalo de confiança para a média vai de 42 a 58. Quais são a estimativa pontual e a margem de erro?",
      o,
      x: "O intervalo usual é simétrico em torno da estimativa pontual: estimativa ± margem. O centro é (42 + 58)/2 = 50, e a margem é a metade da largura, (58 − 42)/2 = 8. Conferindo: 50 − 8 = 42 e 50 + 8 = 58. Lido assim, um intervalo publicado revela a média amostral e, dividindo a margem pelo valor crítico, o erro padrão.\n\nMargem 16 é a largura inteira, e não a metade. 42 e 58 são os limites, e não o centro. E trocar estimativa e margem inverte os papéis dos dois números.",
      v: { i: () => unicoV(o.map((t) => { const [, e, m] = t.match(/^Estimativa (\d+) e margem (\d+)$/).map(Number); return e - m === 42 && e + m === 58; })) },
    };
  })(),
  (() => {
    const o = ["0,35", "140", "0,65", "0,5", "≈ 2,86"];
    return {
      d: "facil",
      e: "Numa amostra de 400 pessoas, 140 aprovam um projeto. Qual é a estimativa pontual da proporção de aprovação na população?",
      o,
      x: "A proporção amostral p̂ = 140/400 = 0,35 estima a proporção populacional p. Como toda estimativa, ela varia de amostra para amostra, e um intervalo de confiança mostra quanto: aqui, a margem de 95% seria de cerca de 0,047.\n\n140 é a contagem de aprovações, e não a proporção. 0,65 é a proporção de quem não aprova. 0,5 é um palpite sem os dados. E 2,86 inverte a divisão, 400/140.",
      v: { i: () => { const resp = [...Array(140).fill(1), ...Array(260).fill(0)]; return qualNum(media(resp), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["Sua média, em muitas amostras, é igual ao parâmetro", "Ele acerta o parâmetro em toda amostra", "Ele tem variância zero", "Ele só usa amostras grandes", "Ele sempre superestima o parâmetro"];
    return {
      d: "facil",
      e: "Em estatística, o que significa dizer que um estimador é não viesado?",
      o,
      x: "Um estimador é não viesado quando seu valor esperado é o parâmetro: em muitas amostras, as estimativas se distribuem em torno do valor verdadeiro, sem erro sistemático para cima ou para baixo. A média amostral é não viesada para μ, embora cada amostra dê um valor um pouco diferente.\n\nAcertar em toda amostra exigiria variância zero, o que não acontece com dados aleatórios. O tamanho da amostra não define viés. E superestimar sempre é justamente um viés.",
      v: {
        i: () => {
          const g = gerador(7), ms = Array.from({ length: 5000 }, () => media(Array.from({ length: 10 }, () => g(50, 10))));
          const centro = Math.abs(media(ms) - 50) < 0.1, variam = dp(ms) > 1, acima = ms.every((m) => m > 50);
          return unicoV([centro && variam, !variam, !variam, false, acima]);
        },
      },
    };
  })(),
  (() => {
    const o = ["t de Student com n − 1 graus de liberdade", "Normal padrão com n graus de liberdade", "Binomial com n ensaios", "Qui-quadrado com n graus de liberdade", "Uniforme entre −1 e 1"];
    return {
      d: "facil",
      e: "Para construir um intervalo para a média de uma população normal, com σ desconhecido e amostra pequena, que distribuição fornece o valor crítico?",
      o,
      x: "Trocando σ pelo desvio padrão amostral s, a estatística (x̄ − μ)/(s/√n) não é mais normal padrão: segue a t de Student com n − 1 graus de liberdade, que tem caudas mais pesadas. O valor crítico t é maior que o z e compensa a incerteza de estimar σ com poucos dados.\n\nA normal padrão não tem graus de liberdade, e usá-la com s em amostras pequenas dá intervalos curtos demais. A binomial conta sucessos. A qui-quadrado aparece em intervalos para a variância. E a uniforme não se aplica aqui.",
      v: {
        i: () => {
          /* cobertura simulada com n = 5: o valor t (4 graus de liberdade) acerta 95%; o z, não */
          const g = gerador(9), t4 = tQ(4, 0.975), N = 20000; let ct = 0, cz = 0;
          for (let k = 0; k < N; k++) { const xs = Array.from({ length: 5 }, () => g(0, 1)), m = media(xs), ep = dp(xs) / Math.sqrt(5); if (Math.abs(m) <= t4 * ep) ct++; if (Math.abs(m) <= z975 * ep) cz++; }
          return unicoV([Math.abs(ct / N - 0.95) < 0.01, Math.abs(cz / N - 0.95) < 0.01, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 9,8 pontos percentuais", "≈ 4,9 pontos percentuais", "≈ 0,98 ponto percentual", "≈ 19,6 pontos percentuais", "50 pontos percentuais"];
    return {
      d: "facil",
      e: "Numa amostra de 100 pessoas, a proporção de respostas sim foi 0,5. Com z = 1,96, qual é a margem de erro de 95% para a proporção?",
      o,
      x: "O erro padrão da proporção é √(p̂(1 − p̂)/n) = √(0,25/100) = 0,05, e a margem é 1,96 · 0,05 ≈ 0,098, ou cerca de 9,8 pontos percentuais. Com só 100 entrevistas, a incerteza é grande: o intervalo vai de cerca de 40% a 60%.\n\n4,9 pontos é a metade da margem. 0,98 ponto divide √(p̂(1 − p̂)) por n, e não por √n. 19,6 pontos é a largura total do intervalo. E 50 pontos confunde a margem com a própria proporção.",
      v: { i: () => qualNum(100 * z975 * Math.sqrt(0.25 / 100), o, 0.005) },
    };
  })(),
  (() => {
    const o = ["O valor da média amostral", "O nível de confiança", "O tamanho da amostra", "O desvio padrão da população", "O valor crítico z"];
    return {
      d: "facil",
      e: "No intervalo x̄ ± z · σ/√n para a média, qual destes fatores não afeta a largura do intervalo?",
      o,
      x: "A largura é 2 · z · σ/√n: depende do nível de confiança, que define z, do desvio padrão e do tamanho da amostra. A média amostral só define onde o intervalo fica centrado, e não o seu tamanho: com x̄ = 10 ou x̄ = 50, a largura é a mesma.\n\nO nível de confiança muda o valor de z. O tamanho da amostra aparece no denominador. O desvio padrão aparece no numerador. E o valor crítico z multiplica a margem diretamente.",
      v: {
        i: () => {
          const larg = ({ xb = 10, conf = 0.95, n = 25, s = 10 }) => { const z = zDe(1 - (1 - conf) / 2); return (xb + z * s / Math.sqrt(n)) - (xb - z * s / Math.sqrt(n)); };
          const base = larg({}), muda = [larg({ xb: 50 }), larg({ conf: 0.99 }), larg({ n: 100 }), larg({ s: 20 }), larg({ conf: 0.9 })].map((l) => Math.abs(l - base) > 1e-9);
          return unicoV(muda.map((m) => !m));
        },
      },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["De 17,87 a 22,13", "De 18,04 a 21,96", "De 11,48 a 28,52", "De 19,47 a 20,53", "De 16 a 24"];
    return {
      d: "media",
      e: "Uma amostra de 16 observações de uma população normal teve média 20 e desvio padrão amostral 4. Usando t = 2,131, com 15 graus de liberdade, qual é o intervalo de 95% para a média?",
      o,
      x: "O erro padrão estimado é s/√n = 4/√16 = 1, e a margem é t · s/√n = 2,131 · 1 = 2,131. O intervalo é 20 ± 2,131, de 17,87 a 22,13. Com σ desconhecido e n pequeno, usa-se t no lugar de z.\n\n18,04 a 21,96 usa z = 1,96, que deixa o intervalo curto demais para n = 16. 11,48 a 28,52 esquece de dividir s por √n. 19,47 a 20,53 divide s por n. E 16 a 24 soma e subtrai o desvio padrão amostral.",
      v: { i: () => { const m = tQ(15, 0.975) * 4 / 4; return qualIntervalo(20 - m, 20 + m, o, 0.006); } },
    };
  })(),
  (() => {
    const o = ["De 0,260 a 0,340", "De 0,280 a 0,320", "De 0,298 a 0,302", "De 0,266 a 0,334", "De 0,220 a 0,380"];
    return {
      d: "media",
      e: "Numa amostra de 500 clientes, 150 disseram preferir entrega em casa. Usando z = 1,96, qual é o intervalo de 95% para a proporção de clientes com essa preferência?",
      o,
      x: "A proporção amostral é p̂ = 150/500 = 0,3, e o erro padrão é √(p̂(1 − p̂)/n) = √(0,21/500) ≈ 0,0205. A margem é 1,96 · 0,0205 ≈ 0,040, e o intervalo vai de 0,260 a 0,340. Com 500 entrevistas, a estimativa é precisa a cerca de 4 pontos percentuais.\n\n0,280 a 0,320 esquece o 1,96 e usa um erro padrão só. 0,298 a 0,302 divide por n fora da raiz. 0,266 a 0,334 usa z = 1,645, de 90% de confiança. E 0,220 a 0,380 usa a largura inteira como margem.",
      v: { i: () => { const p = 150 / 500, m = z975 * Math.sqrt((p * (1 - p)) / 500); return qualIntervalo(p - m, p + m, o, 0.0006); } },
    };
  })(),
  (() => {
    const o = ["97", "96", "10", "25", "68"];
    return {
      d: "media",
      e: "Deseja-se estimar a média de uma população com desvio padrão 15, com margem de erro de no máximo 3 e 95% de confiança (z = 1,96). Qual é o menor tamanho de amostra?",
      o,
      x: "A margem é z · σ/√n ≤ 3, e então √n ≥ 1,96 · 15/3 = 9,8, ou n ≥ 9,8² = 96,04. Como n é inteiro e 96 ainda dá margem um pouco acima de 3, o menor tamanho é 97. Arredonda-se sempre para cima.\n\n96 arredonda para baixo e não garante a margem. 10 é a raiz de n arredondada, sem elevar ao quadrado. 25 = (15/3)² esquece o 1,96. E 68 usa z = 1,645, que corresponde a 90% de confiança.",
      v: { i: () => { for (let n = 1; n < 10000; n++) if (1.96 * 15 / Math.sqrt(n) <= 3) return qualNum(n, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["385", "384", "271", "400", "20"];
    return {
      d: "media",
      e: "Uma pesquisa quer estimar uma proporção com margem de erro de 5 pontos percentuais e 95% de confiança (z = 1,96), sem nenhuma ideia prévia do valor de p. Qual é o menor tamanho de amostra?",
      o,
      x: "Sem informação sobre p, usa-se p = 0,5, que maximiza p(1 − p) e garante a margem em qualquer caso. Então n ≥ z² · p(1 − p)/E² = 1,96² · 0,25/0,05² = 3,8416 · 0,25/0,0025 = 384,16, e o menor inteiro é 385.\n\n384 arredonda para baixo. 271 usa z = 1,645, de 90% de confiança. 400 = 1/0,05² ignora z² e p(1 − p). E 20 = 1/0,05 esquece o quadrado.",
      v: {
        i: () => {
          /* o pior caso de p(1 − p) por varredura, depois o menor n que garante a margem */
          let pior = 0; for (let i = 0; i <= 1000; i++) { const p = i / 1000; pior = Math.max(pior, p * (1 - p)); }
          for (let n = 1; n < 100000; n++) if (1.96 * Math.sqrt(pior / n) <= 0.05) return qualNum(n, o);
          return -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["9", "2,94", "1,5", "17,64", "18"];
    return {
      d: "media",
      e: "Um intervalo de 95% para a média, calculado com σ conhecido, z = 1,96 e n = 36, foi de 47,06 a 52,94. Qual é o desvio padrão da população?",
      o,
      x: "A margem é a metade da largura: (52,94 − 47,06)/2 = 2,94. Como 2,94 = 1,96 · σ/√36 = 1,96 · σ/6, tem-se σ = 2,94 · 6/1,96 = 9. O erro padrão é 9/6 = 1,5. Refazendo a conta com σ = 9, o intervalo é 50 ± 2,94, o que confere com os limites dados.\n\n2,94 é a margem de erro. 1,5 é o erro padrão, σ/√n. 17,64 = 2,94 · 6 esquece de dividir pelo 1,96. E 18 usa a largura inteira, 5,88, no lugar da margem.",
      v: { i: () => qualNum(bissecao((s) => 1.96 * s / 6 - (52.94 - 47.06) / 2, 0.1, 100), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["1,96", "0", "2,776", "1,645", "Cresce sem limite"];
    return {
      d: "media",
      e: "O valor crítico t de 95% diminui à medida que o tamanho da amostra aumenta: é 2,776 com 4 graus de liberdade e 2,045 com 29. Para que valor ele tende quando n cresce muito?",
      o,
      x: "Com muitos graus de liberdade, s estima σ com precisão, e a distribuição t se aproxima da normal padrão. O valor crítico de 95% tende ao da normal, 1,96. Com 100 graus de liberdade, já é cerca de 1,98.\n\n0 seria um intervalo sem largura. 2,776 é o valor para 4 graus de liberdade, o ponto de partida. 1,645 é o valor da normal para 90% de confiança. E o valor diminui, e não cresce.",
      v: {
        i: () => {
          const ts = [4, 29, 99, 2999].map((nu) => tQ(nu, 0.975)), cai = ts.every((t, k) => k === 0 || t < ts[k - 1]);
          return cai && Math.abs(ts[3] - z975) < 0.002 ? qualNum(z975, o, 0.001) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["O de B", "O de A", "Os dois têm a mesma largura", "Depende da média amostral", "Não dá para comparar níveis diferentes"];
    return {
      d: "media",
      e: "Com o mesmo desvio padrão populacional, a amostra A tem n = 50 e intervalo de 90% (z = 1,645), e a amostra B tem n = 200 e intervalo de 95% (z = 1,96). Qual intervalo é mais estreito?",
      o,
      x: "A largura é proporcional a z/√n. Para A: 1,645/√50 ≈ 0,233; para B: 1,96/√200 ≈ 0,139. O intervalo de B é mais estreito, apesar da confiança maior: quadruplicar a amostra reduz a largura à metade, o que mais do que compensa o aumento de z.\n\nA tem menos observações e fica mais largo. As larguras são diferentes. A média amostral não afeta a largura. E a comparação é possível, porque as duas larguras são calculadas pela mesma fórmula.",
      v: { i: () => { const a = zDe(0.95) / Math.sqrt(50), b = z975 / Math.sqrt(200); return unicoV([b < a, a < b, Math.abs(a - b) < 1e-9, false, false]); } },
    };
  })(),
  (() => {
    const o = ["O limite inferior sai negativo", "O intervalo fica perfeito", "O limite superior passa de 1", "O intervalo tem largura zero", "A margem fica maior que 50%"];
    return {
      d: "media",
      e: "Numa amostra de 200 peças, 2 foram defeituosas. Aplicando o intervalo usual p̂ ± 1,96 · √(p̂(1 − p̂)/n), o que acontece?",
      o,
      x: "Com p̂ = 0,01, o erro padrão é √(0,01 · 0,99/200) ≈ 0,0070, e a margem, 1,96 · 0,0070 ≈ 0,0138. O intervalo vai de −0,004 a 0,024, com limite inferior negativo, o que é impossível para uma proporção. O problema é a aproximação normal, ruim quando há poucos sucessos: aqui n · p̂ = 2, bem abaixo de 5.\n\nO resultado não é adequado. O limite superior fica perto de 0,024, longe de 1. A largura não é zero. E a margem é de cerca de 1,4 ponto percentual.",
      v: { i: () => { const p = 2 / 200, m = z975 * Math.sqrt((p * (1 - p)) / 200); return unicoV([p - m < 0, false, p + m > 1, m === 0, m > 0.5]); } },
    };
  })(),
  (() => {
    const o = ["≈ 3,0 pontos", "≈ 1,5 ponto", "≈ 6,1 pontos", "≈ 0,03 ponto", "40 pontos"];
    return {
      d: "media",
      e: "Numa pesquisa eleitoral com 1.000 entrevistados, um candidato teve 40% das intenções de voto. Com z = 1,96, qual é a margem de erro de 95%?",
      o,
      x: "O erro padrão é √(0,4 · 0,6/1.000) = √0,00024 ≈ 0,0155, e a margem é 1,96 · 0,0155 ≈ 0,030, cerca de 3 pontos percentuais. É o valor típico divulgado em pesquisas com mil entrevistas.\n\n1,5 ponto é o erro padrão, sem o 1,96. 6,1 pontos é a largura total do intervalo. 0,03 ponto confunde a escala: 0,030 é uma proporção, que equivale a 3 pontos percentuais. E 40 pontos é a própria estimativa.",
      v: { i: () => qualNum(100 * z975 * Math.sqrt(0.24 / 1000), o, 0.02) },
    };
  })(),
  (() => {
    const o = ["De 2,23 a 7,77", "De 1,08 a 8,92", "De 3,04 a 6,96", "De −14,6 a 24,6", "De 2,67 a 7,33"];
    return {
      d: "media",
      e: "Duas populações têm desvios padrão conhecidos, 6 e 8. Amostras independentes de 36 e 64 observações deram médias com diferença de 5. Usando z = 1,96, qual é o intervalo de 95% para a diferença entre as médias populacionais?",
      o,
      x: "O erro padrão da diferença soma as variâncias das duas médias: √(6²/36 + 8²/64) = √(1 + 1) ≈ 1,414. A margem é 1,96 · 1,414 ≈ 2,77, e o intervalo é 5 ± 2,77, de 2,23 a 7,77.\n\n1,08 a 8,92 soma os dois erros padrão, 1 + 1 = 2, em vez das variâncias. 3,04 a 6,96 usa um erro padrão só. −14,6 a 24,6 esquece de dividir as variâncias pelos tamanhos das amostras. E 2,67 a 7,33 usa z = 1,645.",
      v: {
        i: () => {
          /* erro padrão da diferença estimado por simulação */
          const g = gerador(13), ds = Array.from({ length: 20000 }, () => { let a = 0, b = 0; for (let k = 0; k < 36; k++) a += g(0, 6); for (let k = 0; k < 64; k++) b += g(0, 8); return a / 36 - b / 64; });
          const m = z975 * dp(ds, false); return qualIntervalo(5 - m, 5 + m, o, 0.04);
        },
      },
    };
  })(),
  (() => {
    const o = ["De 48.000 a 52.000", "De 960 a 1.040", "De 49.800 a 50.200", "De 2,4 a 2,6", "De 40.000 a 60.000"];
    return {
      d: "media",
      e: "Numa cidade com 20.000 domicílios, uma amostra de 400 teve média de 2,5 moradores por domicílio, com margem de erro de 0,1 morador. Qual é o intervalo correspondente para o total de moradores da cidade?",
      o,
      x: "O total é o número de domicílios vezes a média por domicílio. Multiplicando o intervalo da média, de 2,4 a 2,6, por 20.000, obtém-se de 48.000 a 52.000 moradores. A margem também é multiplicada: 0,1 · 20.000 = 2.000.\n\n960 a 1.040 multiplica pelo tamanho da amostra, 400, e não da população. 49.800 a 50.200 multiplica só a média e soma a margem sem multiplicá-la. 2,4 a 2,6 é o intervalo da média, e não do total. E 40.000 a 60.000 usa uma margem de 0,5 morador.",
      v: { i: () => qualIntervalo(20000 * (2.5 - 0.1), 20000 * (2.5 + 0.1), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["Dobra", "Quadruplica", "Cai pela metade", "Não muda", "Aumenta cerca de 41%"];
    return {
      d: "media",
      e: "Mantidos o tamanho da amostra e o nível de confiança, o que acontece com a margem de erro de um intervalo t para a média se o desvio padrão amostral dobrar?",
      o,
      x: "A margem é t · s/√n, proporcional a s: dobrando s, a margem dobra. O valor t depende só dos graus de liberdade e do nível de confiança, que não mudaram. Dados mais dispersos produzem estimativas menos precisas da média.\n\nQuadruplicar seria o efeito sobre a variância, s². Cair pela metade inverte a relação. A margem muda, sim. E aumentar cerca de 41% corresponderia a multiplicar por √2, o efeito de dobrar a variância, e não o desvio padrão.",
      v: { i: () => { const t = tQ(9, 0.975), m = (s) => t * s / Math.sqrt(10), r = m(8) / m(4); return unicoV([Math.abs(r - 2) < 1e-9, Math.abs(r - 4) < 1e-9, Math.abs(r - 0.5) < 1e-9, Math.abs(r - 1) < 1e-9, Math.abs(r - Math.SQRT2) < 1e-9]); } },
    };
  })(),
  (() => {
    const o = ["1.000", "500", "125", "2.000", "750"];
    return {
      d: "media",
      e: "Uma pesquisa com 250 pessoas teve margem de erro de 6 pontos percentuais. Mantidos a confiança e a proporção estimada, quantas pessoas, aproximadamente, seriam necessárias para uma margem de 3 pontos?",
      o,
      x: "A margem é proporcional a 1/√n. Para reduzi-la à metade, √n precisa dobrar, e n precisa quadruplicar: 4 · 250 = 1.000 pessoas. Ganhar precisão custa caro: cada vez que a margem cai à metade, a amostra precisa ser quatro vezes maior.\n\n500 dobra a amostra, o que reduziria a margem só para cerca de 4,2 pontos. 125 vai no sentido contrário e aumenta a margem. 2.000 é mais do que o necessário, com margem de cerca de 2,1 pontos. E 750 dá margem de cerca de 3,5 pontos.",
      v: {
        i: () => {
          /* a margem cai com 1/√n a partir do dado de 250 pessoas; o menor n com margem de até 3 pontos */
          const margem = (n) => 6 * Math.sqrt(250 / n); let n = 250; while (margem(n) > 3 + 1e-12) n++;
          return qualNum(n, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["Quase nada: t fica muito perto de 1,96", "Sim: t dá o dobro da margem", "Sim: z não pode ser usado com s", "Não, porque t e z são sempre iguais", "Sim: t é bem menor que z"];
    return {
      d: "media",
      e: "Com uma amostra de 400 observações e σ desconhecido, usar o valor t, com 399 graus de liberdade, em vez de z = 1,96 muda muito o intervalo de 95%?",
      o,
      x: "Com 399 graus de liberdade, a distribuição t praticamente coincide com a normal, e o valor crítico de 95% é cerca de 1,966, contra 1,96. A margem muda menos de 0,5%. Em amostras grandes, usar z com s é uma aproximação excelente.\n\nO valor t não chega perto do dobro de z. Com n grande, z com s é aceitável. t e z não são sempre iguais: com poucos graus de liberdade, a diferença é grande. E t é sempre um pouco maior que z, nunca menor.",
      v: { i: () => { const t = tQ(399, 0.975), dif = t / z975 - 1; return unicoV([dif > 0 && dif < 0.005, dif > 0.9, false, Math.abs(dif) < 1e-9, t < z975]); } },
    };
  })(),
  (() => {
    const o = ["De 11,83 a 18,17", "De 12,77 a 17,23", "De 7,92 a 22,08", "De 12,17 a 17,83", "De 12,45 a 17,55"];
    return {
      d: "media",
      e: "Os tempos, em minutos, de 5 atendimentos foram 12, 15, 18, 13 e 17. Supondo população normal e usando t = 2,776, com 4 graus de liberdade, qual é o intervalo de 95% para o tempo médio?",
      o,
      x: "A média é 75/5 = 15. Os desvios são −3, 0, 3, −2 e 2, com soma dos quadrados 26, e s = √(26/4) ≈ 2,55. O erro padrão é 2,55/√5 ≈ 1,140, e a margem, 2,776 · 1,140 ≈ 3,165. O intervalo é 15 ± 3,165, de 11,83 a 18,17.\n\n12,77 a 17,23 usa z = 1,96 com só 5 observações. 7,92 a 22,08 esquece de dividir s por √n. 12,17 a 17,83 calcula s dividindo por n, e não por n − 1. E 12,45 a 17,55 soma e subtrai s.",
      v: { i: () => { const xs = [12, 15, 18, 13, 17], m = tQ(4, 0.975) * dp(xs) / Math.sqrt(5); return qualIntervalo(media(xs) - m, media(xs) + m, o, 0.006); } },
    };
  })(),
  (() => {
    const o = ["683", "1.068", "682", "178", "482"];
    return {
      d: "media",
      e: "Uma pesquisa anterior indicou uma proporção próxima de 20%. Para estimá-la com margem de 3 pontos percentuais e 95% de confiança (z = 1,96), qual é o menor tamanho de amostra?",
      o,
      x: "Usando a estimativa prévia p ≈ 0,2: n ≥ z² · p(1 − p)/E² = 1,96² · 0,16/0,03² = 3,8416 · 0,16/0,0009 ≈ 682,95, e o menor inteiro é 683. Uma boa estimativa prévia de p reduz bastante a amostra necessária.\n\n1.068 usa p = 0,5, o caso mais desfavorável, sem aproveitar a informação prévia. 682 arredonda para baixo. 178 esquece o fator z². E 482 usa z = 1,645, de 90% de confiança.",
      v: { i: () => { for (let n = 1; n < 100000; n++) if (1.96 * Math.sqrt(0.16 / n) <= 0.03) return qualNum(n, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["Cerca de 190", "Todos os 200", "Cerca de 95", "Cerca de 10", "Cerca de 195"];
    return {
      d: "media",
      e: "Um pesquisador constrói 200 intervalos de 95% de confiança, cada um com uma amostra independente, todos para o mesmo parâmetro. Quantos deles, aproximadamente, devem conter o valor verdadeiro?",
      o,
      x: "Cada intervalo contém o parâmetro com probabilidade 0,95, e o número esperado de acertos é 200 · 0,95 = 190. Cerca de 10 intervalos, em média, deixam o parâmetro de fora, sem que se saiba quais. O número de acertos é binomial, com n = 200 e p = 0,95, e costuma ficar entre 184 e 196.\n\nTodos os 200 exigiria 100% de confiança. 95 confunde a porcentagem com a contagem. 10 é o número esperado de intervalos que falham. E 195 corresponderia a 97,5% de confiança.",
      v: {
        i: () => {
          const g = gerador(17); let tot = 0;
          for (let b = 0; b < 50; b++) for (let k = 0; k < 200; k++) { const xs = Array.from({ length: 10 }, () => g(5, 2)); if (Math.abs(media(xs) - 5) <= z975 * 2 / Math.sqrt(10)) tot++; }
          const esperado = tot / 50, dist = o.map((t) => (t === "Todos os 200" ? 200 : Number(t.replace("Cerca de ", "")))).map((v) => Math.abs(v - esperado));
          return dist.indexOf(Math.min(...dist)) === 0 && dist[0] < 2 ? 0 : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["B, com EQM 2 contra 4", "A, por ser não viesado", "Os dois têm o mesmo EQM", "B, com EQM 1", "A, com EQM 2"];
    return {
      d: "media",
      e: "O estimador A é não viesado e tem variância 4; o estimador B tem viés 1 e variância 1. Qual tem o menor erro quadrático médio, EQM = variância + viés²?",
      o,
      x: "Para A: EQM = 4 + 0² = 4. Para B: EQM = 1 + 1² = 2. B erra, em média, menos que A, apesar do viés: sua variância pequena compensa o erro sistemático. Ausência de viés, sozinha, não faz de um estimador o melhor.\n\nA ser não viesado não garante o menor erro total. Os EQM são diferentes. EQM 1 para B esquece o viés ao quadrado. E EQM 2 para A atribui a A o valor que é de B.",
      v: {
        i: () => {
          const g = gerador(19), N = 200000, th = 10; let ea = 0, eb = 0;
          for (let k = 0; k < N; k++) { ea += (g(th, 2) - th) ** 2; eb += (g(th + 1, 1) - th) ** 2; }
          const A = ea / N, B = eb / N;
          return unicoV([B < A && Math.abs(B - 2) < 0.05 && Math.abs(A - 4) < 0.1, A < B, Math.abs(A - B) < 0.05, Math.abs(B - 1) < 0.05, Math.abs(A - 2) < 0.05]);
        },
      },
    };
  })(),
  (() => {
    const o = ["De 7,63 a 12,37", "De 8,12 a 11,88", "De 8,63 a 11,37", "De 7,42 a 12,58", "De 8,2 a 11,8"];
    return {
      d: "media",
      e: "Um intervalo de 95% para a média, com σ conhecido, foi de 8,2 a 11,8. Com a mesma amostra e z = 2,576, qual seria o intervalo de 99%?",
      o,
      x: "O centro é 10 e a margem de 95% é 1,8, de modo que o erro padrão é 1,8/1,96 ≈ 0,918. A margem de 99% é 2,576 · 0,918 ≈ 2,37, e o intervalo vai de 7,63 a 12,37: mais confiança, mais largura.\n\n8,12 a 11,88 aumenta a margem na proporção 99/95, sem usar os valores de z. 8,63 a 11,37 inverte a razão entre os z e estreita o intervalo. 7,42 a 12,58 usa o próprio z = 2,576 como margem. E 8,2 a 11,8 repete o intervalo de 95%.",
      v: { i: () => { const ep = 1.8 / z975, m = zDe(0.995) * ep; return qualIntervalo(10 - m, 10 + m, o, 0.006); } },
    };
  })(),
  (() => {
    const o = ["≈ 31,6 min", "≈ 32,0 min", "≈ 28,4 min", "36 min", "≈ 39,9 min"];
    return {
      d: "media",
      e: "Uma amostra de 36 tempos de espera teve média 30 min, e o desvio padrão da população é 6 min. Usando z = 1,645, qual é o limite superior de confiança unilateral de 95% para o tempo médio?",
      o,
      x: "Um limite unilateral põe todo o risco de 5% num lado só, e usa z = 1,645 em vez de 1,96. Com erro padrão 6/√36 = 1, o limite superior é 30 + 1,645 · 1 ≈ 31,6 min: com 95% de confiança, o tempo médio não passa disso.\n\n32,0 usa z = 1,96, do intervalo bilateral. 28,4 é o limite inferior unilateral. 36 soma o desvio padrão da população. E 39,9 soma 1,645 · 6, sem dividir por √n.",
      v: { i: () => qualNum(30 + zDe(0.95) * 6 / 6, o, 0.002) },
    };
  })(),
  (() => {
    const o = ["Sim: a média amostral fica aproximadamente normal", "Não: só vale para populações normais", "Sim: os dados individuais ficam normais", "Não: seria preciso n maior que 1.000", "Sim, mas só com σ conhecido"];
    return {
      d: "media",
      e: "Uma população tem distribuição bem assimétrica, com cauda longa à direita. Com amostras de 100 observações, o intervalo x̄ ± 1,96 · s/√n ainda funciona razoavelmente?",
      o,
      x: "Pelo teorema central do limite, a média de 100 observações independentes tem distribuição aproximadamente normal, mesmo que a população seja assimétrica. Por isso o intervalo cobre a média com probabilidade próxima de 95%; com populações muito assimétricas e amostras pequenas, a cobertura piora.\n\nA normalidade da população não é exigida com n grande. Os dados individuais continuam assimétricos: é a média que fica normal. Cem observações costumam bastar. E o intervalo com s funciona sem precisar conhecer σ.",
      v: {
        i: () => {
          /* população exponencial de média 1: cobertura do intervalo e assimetria dos dados */
          const r = sorteador(21), exp = () => { let u = r(); while (u <= 0) u = r(); return -Math.log(u); }, N = 5000; let cobre = 0; const todos = [];
          for (let k = 0; k < N; k++) { const xs = Array.from({ length: 100 }, exp); const m = media(xs), e = z975 * dp(xs) / 10; if (Math.abs(m - 1) <= e) cobre++; if (k < 50) todos.push(...xs); }
          const mt = media(todos), sd = dp(todos), assim = media(todos.map((x) => ((x - mt) / sd) ** 3));
          return unicoV([Math.abs(cobre / N - 0.95) < 0.02, Math.abs(cobre / N - 0.95) >= 0.02, Math.abs(assim) < 0.3, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["A média varia menos que uma observação", "Para deixar o intervalo mais largo", "Porque s já é o erro da média", "Porque n é sempre grande", "Para corrigir o viés de s"];
    return {
      d: "media",
      e: "No intervalo para a média, por que se usa s/√n, e não s, para medir a incerteza?",
      o,
      x: "O intervalo estima a média, e a média de n observações independentes varia bem menos que uma observação isolada: seu desvio padrão é σ/√n, estimado por s/√n. Usar s mediria a dispersão dos dados, e não a incerteza sobre a média.\n\nDividir por √n estreita o intervalo, e não o alarga. s mede a dispersão das observações, e não o erro da média. O fator √n aparece para qualquer tamanho de amostra. E s/√n não corrige o viés de s.",
      v: {
        i: () => {
          const g = gerador(23), obs = Array.from({ length: 20000 }, () => g(0, 10)), medias = Array.from({ length: 20000 }, () => media(Array.from({ length: 25 }, () => g(0, 10))));
          const razao = dp(medias) / dp(obs);
          return unicoV([Math.abs(razao - 1 / 5) < 0.01, razao > 1, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["5% em cada cauda", "10% em cada cauda", "2,5% em cada cauda", "90% em cada cauda", "45% em cada cauda"];
    return {
      d: "media",
      e: "Num intervalo de confiança de 90% construído com a normal, quanta probabilidade fica em cada cauda, fora do intervalo?",
      o,
      x: "Os 10% que ficam fora do intervalo se dividem igualmente entre as duas caudas: 5% abaixo e 5% acima. Por isso o valor crítico é z = 1,645, que deixa 95% abaixo dele. Num intervalo de 99%, pelo mesmo raciocínio, ficam 0,5% em cada cauda, e o valor crítico sobe para 2,576.\n\n10% em cada cauda somaria 20% fora, com 80% de confiança. 2,5% em cada cauda é o caso de 95%. 90% é a área central, e não a de uma cauda. E 45% é a área entre a média e cada limite.",
      v: { i: () => { const z = bissecao((z) => Phi(z) - Phi(-z) - 0.9, 0.1, 5); return qualNum(100 * (1 - Phi(z)), o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["É 0 ou 1; os 95% se referem ao método", "Exatamente 0,95", "0,5", "Depende da média amostral", "0,05"];
    return {
      d: "media",
      e: "Depois de calculado, um intervalo de 95% para a média deu de 12 a 18. Na interpretação usual, qual é a probabilidade de a média populacional estar entre 12 e 18?",
      o,
      x: "Na interpretação frequentista, μ é um número fixo, e o intervalo calculado também: ou μ está entre 12 e 18, ou não está. A confiança de 95% descreve o procedimento, que acerta em 95% das amostras, e não este intervalo específico, que não tem mais nada de aleatório.\n\nDizer 0,95 transfere a propriedade do método para o intervalo já calculado. 0,5 não tem justificativa. A média amostral já foi usada, e o intervalo está fixado. E 0,05 é a taxa de erro do método.",
      v: {
        i: () => {
          /* um intervalo já calculado: repetir a verificação dá sempre o mesmo resultado */
          const g = gerador(29), xs = Array.from({ length: 20 }, () => g(15, 6)), m = media(xs), e = z975 * 6 / Math.sqrt(20);
          const verif = Array.from({ length: 10 }, () => m - e <= 15 && 15 <= m + e);
          return unicoV([verif.every((v) => v === verif[0]), false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Concentra-se cada vez mais em torno de μ", "Fica cada vez mais espalhada", "Aproxima-se da distribuição dos dados", "Afasta-se de μ", "Não muda"];
    return {
      d: "media",
      e: "À medida que o tamanho da amostra cresce, o que acontece com a distribuição da média amostral?",
      o,
      x: "A média amostral tem valor esperado μ e desvio padrão σ/√n, que vai a zero quando n cresce. A distribuição se concentra cada vez mais perto de μ: a média amostral é um estimador consistente. É a lei dos grandes números vista pelo lado da estimação.\n\nO espalhamento diminui, e não aumenta. A distribuição da média fica mais estreita que a dos dados, e não igual a ela. O centro continua em μ. E a distribuição muda, sim, com n.",
      v: {
        i: () => {
          const g = gerador(31), sds = [10, 100, 1000].map((n) => { const ms = Array.from({ length: 1000 }, () => { let s = 0; for (let k = 0; k < n; k++) s += g(3, 4); return s / n; }); return [dp(ms), media(ms)]; });
          const concentra = sds[0][0] > sds[1][0] && sds[1][0] > sds[2][0] && Math.abs(sds[2][1] - 3) < 0.05;
          return unicoV([concentra, !concentra, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["1.537", "1.536", "40", "1.083", "400"];
    return {
      d: "media",
      e: "Com 95% de confiança (z = 1,96), qual é o menor tamanho de amostra para que a margem de erro da média seja no máximo 5% do desvio padrão populacional?",
      o,
      x: "A condição é 1,96 · σ/√n ≤ 0,05σ, e σ se cancela: √n ≥ 1,96/0,05 = 39,2, ou n ≥ 1.536,64. O menor inteiro é 1.537. A resposta não depende do valor de σ, só da margem expressa em desvios padrão.\n\n1.536 arredonda para baixo e deixa a margem um pouco acima de 5%. 40 é a raiz de n arredondada, sem elevar ao quadrado. 1.083 usa z = 1,645, de 90% de confiança. E 400 = 1/0,05² esquece o fator 1,96².",
      v: { i: () => { const sigma = 7.3; for (let n = 1; n < 100000; n++) if (1.96 * sigma / Math.sqrt(n) <= 0.05 * sigma) return qualNum(n, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["≈ 1,73", "≈ 1,31", "≈ 1,04", "2", "≈ 3,0"];
    return {
      d: "media",
      e: "Para manter a mesma margem de erro, por quanto se multiplica o tamanho da amostra ao passar de 95% (z = 1,96) para 99% (z = 2,576) de confiança?",
      o,
      x: "O tamanho de amostra é proporcional a z²: n = (z · σ/E)². A razão é (2,576/1,96)² ≈ 1,314² ≈ 1,73. Subir de 95% para 99% de confiança exige cerca de 73% mais observações: é o preço de reduzir o risco de erro de 5% para 1% sem perder precisão.\n\n1,31 é a razão entre os valores de z, sem elevar ao quadrado. 1,04 é a razão 99/95 entre os níveis. 2 supõe que a amostra dobra. E 3,0 não sai das contas.",
      v: { i: () => qualNum((zDe(0.995) / z975) ** 2, o, 0.005) },
    };
  })(),
  (() => {
    const o = ["São praticamente iguais", "A do país é bem menor", "A da cidade é bem menor", "A do país é 100 vezes maior", "Não dá para calcular sem o censo"];
    return {
      d: "media",
      e: "Uma pesquisa com 1.000 entrevistas é feita numa cidade de 100 mil habitantes, e outra, também com 1.000 entrevistas, num país de 10 milhões. Com a mesma proporção estimada, como se comparam as margens de erro?",
      o,
      x: "A margem depende do tamanho da amostra, e quase nada do tamanho da população, desde que a amostra seja uma fração pequena dela. O fator de correção para população finita, √((N − n)/(N − 1)), vale cerca de 0,995 para N = 100 mil e 0,99995 para 10 milhões: diferença de meio por cento.\n\nA margem do país não fica menor, nem 100 vezes maior. A da cidade é só levemente menor. E a margem é calculada com a amostra, sem precisar de censo.",
      v: {
        i: () => {
          const m = (N) => z975 * Math.sqrt(0.25 / 1000) * Math.sqrt((N - 1000) / (N - 1)), a = m(1e5), b = m(1e7);
          return unicoV([Math.abs(a / b - 1) < 0.01, b < a * 0.9, a < b * 0.9, b > 50 * a, false]);
        },
      },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["De 0,003 a 0,197", "De 0,051 a 0,149", "De −0,037 a 0,237", "De 0,031 a 0,169", "De 0,019 a 0,181"];
    return {
      d: "dificil",
      e: "Numa pesquisa, 120 de 200 homens e 100 de 200 mulheres aprovam uma proposta. Usando z = 1,96, qual é o intervalo de 95% para a diferença entre as proporções de homens e de mulheres?",
      o,
      x: "As proporções são 0,6 e 0,5, com diferença 0,1. As variâncias das duas proporções se somam: √(0,6 · 0,4/200 + 0,5 · 0,5/200) = √0,00245 ≈ 0,0495. A margem é 1,96 · 0,0495 ≈ 0,097, e o intervalo vai de 0,003 a 0,197: a diferença é positiva, mas pode ser bem pequena.\n\n0,051 a 0,149 esquece o 1,96. −0,037 a 0,237 soma os erros padrão, em vez das variâncias. 0,031 a 0,169 divide pelo total, 400, e não por 200 em cada grupo. E 0,019 a 0,181 usa z = 1,645.",
      v: {
        i: () => {
          /* erro padrão da diferença por simulação de amostras binomiais */
          const r = sorteador(41), ds = Array.from({ length: 20000 }, () => { let a = 0, b = 0; for (let k = 0; k < 200; k++) { if (r() < 0.6) a++; if (r() < 0.5) b++; } return a / 200 - b / 200; });
          const m = z975 * dp(ds, false); return qualIntervalo(0.1 - m, 0.1 + m, o, 0.003);
        },
      },
    };
  })(),
  (() => {
    const o = ["Cerca de 88%", "Exatamente 95%", "Cerca de 99%", "Cerca de 50%", "100%"];
    return {
      d: "dificil",
      e: "Um pesquisador usa, por engano, x̄ ± 1,96 · s/√n com amostras de 5 observações de uma população normal. Qual é, aproximadamente, a cobertura real desses intervalos?",
      o,
      x: "Com σ estimado por s e n = 5, a estatística (x̄ − μ)/(s/√n) segue a t com 4 graus de liberdade, de caudas mais pesadas que a normal. A probabilidade de ela ficar entre −1,96 e 1,96 é só cerca de 0,88. O intervalo correto usaria t = 2,776 e seria cerca de 42% mais largo.\n\nA cobertura não é 95%, porque 1,96 é o valor da normal, e não da t com 4 graus de liberdade. Ela fica abaixo de 95%, e não acima. 50% subestima muito. E nenhum intervalo desse tipo cobre sempre.",
      v: {
        i: () => {
          const F = tCdf(4), cob = 100 * (F(1.96) - F(-1.96));
          return unicoV(o.map((t) => { const v = lerNum(t.replace("Cerca de ", "").replace("Exatamente ", "")); return Math.abs(v - cob) < 1; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 157", "100", "≈ 126", "≈ 64", "≈ 247"];
    return {
      d: "dificil",
      e: "Para dados normais e amostras grandes, a variância da mediana amostral é cerca de π/2 ≈ 1,57 vez a variância da média amostral. Quantas observações a mediana precisa para ter a mesma precisão que a média com 100 observações?",
      o,
      x: "As duas variâncias são inversamente proporcionais ao tamanho da amostra: a da média é σ²/n e a da mediana, cerca de 1,57 · σ²/n. Para igualar σ²/100, a mediana precisa de n = 1,57 · 100 ≈ 157 observações. A média é mais eficiente para dados normais; a mediana compensa com resistência a valores extremos.\n\n100 ignora a diferença de eficiência. 126 = √1,57 · 100 compara desvios padrão, e não variâncias. 64 divide em vez de multiplicar. E 247 multiplica por 1,57 duas vezes.",
      v: {
        i: () => {
          /* razão entre as variâncias da mediana e da média, simulada com n = 201 */
          const g = gerador(43), n = 201, meds = [], ms = [];
          for (let k = 0; k < 20000; k++) { const xs = Array.from({ length: n }, () => g(0, 1)).sort((a, b) => a - b); meds.push(xs[(n - 1) / 2]); ms.push(media(xs)); }
          return qualNum(100 * (dp(meds) / dp(ms)) ** 2, o, 0.03);
        },
      },
    };
  })(),
  (() => {
    const o = ["Os dois são não viesados; a das 20 varia menos", "Só a média das 20 é não viesada", "Só a média das 2 é não viesada", "Os dois têm a mesma variância", "Nenhum dos dois é não viesado"];
    return {
      d: "dificil",
      e: "Para estimar μ a partir de uma amostra de 20 observações, compara-se a média de todas as 20 com a média só das 2 primeiras. O que se pode afirmar sobre esses dois estimadores?",
      o,
      x: "Qualquer média de observações da amostra tem valor esperado μ, e por isso os dois estimadores são não viesados. A diferença está na variância: σ²/20 para a média das 20 e σ²/2 para a das 2, dez vezes maior. Entre estimadores não viesados, prefere-se o de menor variância, que desperdiça menos informação.\n\nA média das 2 primeiras também é não viesada, e a das 20 também. As variâncias diferem por um fator 10. E os dois têm valor esperado igual a μ.",
      v: {
        i: () => {
          const g = gerador(47), a = [], b = [];
          for (let k = 0; k < 20000; k++) { const xs = Array.from({ length: 20 }, () => g(8, 3)); a.push(media(xs)); b.push((xs[0] + xs[1]) / 2); }
          const semA = Math.abs(media(a) - 8) < 0.05, semB = Math.abs(media(b) - 8) < 0.05, razao = (dp(b) / dp(a)) ** 2;
          return unicoV([semA && semB && Math.abs(razao - 10) < 0.5, semA && !semB, !semA && semB, Math.abs(razao - 1) < 0.1, !semA && !semB]);
        },
      },
    };
  })(),
  (() => {
    const o = ["De 0,02 a 4,98", "De 0,15 a 4,85", "De −9,88 a 14,88", "De 2,00 a 3,00", "De −3,5 a 8,5"];
    return {
      d: "dificil",
      e: "Em 25 pacientes, a diferença entre a pressão antes e depois de um tratamento teve média 2,5 e desvio padrão 6. Usando t = 2,064, com 24 graus de liberdade, qual é o intervalo de 95% para a redução média?",
      o,
      x: "Com dados pareados, analisam-se as diferenças de cada paciente como uma única amostra. O erro padrão é 6/√25 = 1,2, e a margem é 2,064 · 1,2 ≈ 2,48. O intervalo é 2,5 ± 2,48, de 0,02 a 4,98: fica todo acima de zero, mas por pouco.\n\n0,15 a 4,85 usa z = 1,96 com só 25 pares. −9,88 a 14,88 esquece de dividir o desvio padrão por √n. 2,00 a 3,00 divide por n, e não por √n. E −3,5 a 8,5 soma e subtrai o desvio padrão das diferenças.",
      v: { i: () => { const m = tQ(24, 0.975) * 6 / 5; return qualIntervalo(2.5 - m, 2.5 + m, o, 0.006); } },
    };
  })(),
  (() => {
    const o = ["Rejeita-se H0, pois 50 fica fora do intervalo", "Não se rejeita H0", "Rejeita-se H0 só ao nível de 1%", "Não dá para concluir sem o valor p", "Aceita-se que μ = 54"];
    return {
      d: "dificil",
      e: "Um intervalo de 95% para a média, construído com a normal, foi de 51 a 57. Num teste bilateral de H0: μ = 50 ao nível de 5%, com os mesmos dados, qual é a conclusão?",
      o,
      x: "Um intervalo de 95% reúne os valores de μ que um teste bilateral de 5% não rejeitaria. Como 50 está fora do intervalo, H0: μ = 50 é rejeitada. Conferindo: com centro 54 e margem 3, o erro padrão é 3/1,96 ≈ 1,53, e z = (54 − 50)/1,53 ≈ 2,61, além de 1,96.\n\nNão rejeitar contraria a correspondência entre intervalo e teste. A rejeição não se limita a 1%: ela já ocorre a 5%. O intervalo basta para decidir. E rejeitar H0 não prova que μ seja exatamente 54.",
      v: {
        i: () => {
          const ep = 3 / z975, z = (54 - 50) / ep, rej5 = Math.abs(z) > z975, rej1 = Math.abs(z) > zDe(0.995);
          return unicoV([rej5, !rej5, rej1 && !rej5, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["s é muito instável com 1 grau de liberdade", "Porque a amostra é normal", "Porque 12,7 é um erro de tabela", "Porque se usa n em vez de n − 1", "Porque t cresce quando n cresce"];
    return {
      d: "dificil",
      e: "Com apenas 2 observações e σ desconhecido, o valor t de 95% é cerca de 12,7, com 1 grau de liberdade. Por que ele é tão maior que 1,96?",
      o,
      x: "Com 2 observações, o desvio padrão amostral se baseia num único grau de liberdade e varia enormemente de uma amostra para outra: às vezes as duas observações ficam quase iguais, e s sai perto de zero. A distribuição t com 1 grau de liberdade tem caudas muito pesadas, e o valor crítico de 95% sobe para cerca de 12,7, para manter a cobertura.\n\nA normalidade da população é uma hipótese, e não a causa. 12,7 é o valor correto. O cálculo usa n − 1 = 1 grau de liberdade. E t diminui, e não cresce, quando n aumenta.",
      v: {
        i: () => {
          /* quantil da t com 1 grau de liberdade e cobertura simulada com n = 2 */
          const t1 = tQ(1, 0.975), g = gerador(53), N = 40000; let c = 0;
          for (let k = 0; k < N; k++) { const a = g(0, 1), b = g(0, 1), m = (a + b) / 2, s = Math.abs(a - b) / Math.SQRT2; if (Math.abs(m) <= t1 * s / Math.SQRT2) c++; }
          const ok = Math.abs(t1 - 12.706) < 0.01 && Math.abs(c / N - 0.95) < 0.01;
          return unicoV([ok, false, !ok, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 86%", "≈ 71%", "90%", "≈ 97%", "75%"];
    return {
      d: "dificil",
      e: "Com 600 entrevistas e proporção estimada 0,5, a margem de erro de 95% é de cerca de 4 pontos percentuais. Com a mesma amostra, qual nível de confiança corresponde a uma margem de 3 pontos?",
      o,
      x: "O erro padrão é √(0,25/600) ≈ 0,0204. Uma margem de 0,03 corresponde a z = 0,03/0,0204 ≈ 1,47, e a área entre −1,47 e 1,47 na normal padrão é cerca de 0,86. Com a mesma amostra, só se estreita o intervalo abrindo mão de confiança.\n\n71% reduz o nível na mesma proporção da margem, 95% · 3/4, sem passar pela normal. 90% exigiria z = 1,645, com margem de cerca de 3,4 pontos. 97% seria um nível maior, com margem maior. E 75% toma 3/4 como o próprio nível de confiança.",
      v: { i: () => { const ep = Math.sqrt(0.25 / 600), z = 0.03 / ep; return qualNum(100 * (Phi(z) - Phi(-z)), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 36%", "95%", "5%", "≈ 64%", "100%"];
    return {
      d: "dificil",
      e: "São construídos 20 intervalos de 95% de confiança, com amostras independentes, para 20 parâmetros diferentes. Qual é a probabilidade de todos eles conterem os respectivos parâmetros?",
      o,
      x: "Cada intervalo acerta com probabilidade 0,95, de forma independente, e a probabilidade de os 20 acertarem é 0,95²⁰ ≈ 0,358, cerca de 36%. A chance de pelo menos um falhar é de cerca de 64%: quando se fazem muitas estimativas, é quase certo que alguma erre.\n\n95% vale para cada intervalo isolado, e não para o conjunto. 5% é a chance de falha de um intervalo. 64% é a chance de pelo menos um falhar. E 100% exigiria intervalos que nunca falham.",
      v: {
        i: () => {
          /* 20 intervalos reais por rodada, cada um com sua amostra; fração de rodadas em que todos acertam */
          const g = gerador(59), R = 4000; let todos = 0;
          for (let k = 0; k < R; k++) { let ok = true; for (let j = 0; j < 20 && ok; j++) { const xs = Array.from({ length: 5 }, () => g(j, 1)); if (Math.abs(media(xs) - j) > z975 / Math.sqrt(5)) ok = false; } if (ok) todos++; }
          return qualNum(100 * todos / R, o, 0.06);
        },
      },
    };
  })(),
  (() => {
    const o = ["Não: em média, s fica um pouco abaixo de σ", "Sim: o divisor n − 1 elimina todo viés", "Não: em média, s fica acima de σ", "Sim, para qualquer tamanho de amostra", "Só quando n = 1"];
    return {
      d: "dificil",
      e: "O desvio padrão amostral s, calculado com divisor n − 1, é um estimador não viesado de σ?",
      o,
      x: "O divisor n − 1 torna s² não viesado para σ², mas a raiz quadrada não preserva essa propriedade: como a raiz é côncava, a média de s fica abaixo da raiz da média de s². Com n = 5 de uma normal, s vale, em média, cerca de 94% de σ. O viés diminui quando n cresce.\n\nO divisor n − 1 elimina o viés de s², e não o de s. s tende a subestimar σ, e não a superestimar. O viés existe para todo n finito. E com n = 1 nem se calcula s.",
      v: {
        i: () => {
          const g = gerador(61), ss = Array.from({ length: 40000 }, () => dp(Array.from({ length: 5 }, () => g(0, 10))));
          const ms = media(ss), ms2 = media(ss.map((s) => s * s));
          return unicoV([ms < 9.6 && Math.abs(ms2 - 100) < 2, Math.abs(ms - 10) < 0.05, ms > 10, false, false]);
        },
      },
    };
  })(),
];
