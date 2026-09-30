/* Rascunho — Estatística / Erros do tipo I e do tipo II.

   A explicação usa as definições (α, β, poder = 1 − β) e as fórmulas do
   teste z; a conferência acha o ponto crítico por bisseção sob H0 e
   integra a normal sob H1, soma a binomial exata ensaio a ensaio, classifica
   as decisões pelo quadro verdade × decisão, e mede taxas de erro por
   simulação com semente fixa (vários testes, paradas sucessivas,
   triagem). */

import { unicoV, soma, qualNum, bissecao, Phi, zDe, sorteador, lerNum } from "./_estatistica.mjs";

export const materia = "estatistica";
export const tema = "Erros do tipo I e do tipo II";
export const arquivo = "estatistica__erros-do-tipo-i-e-do-tipo-ii";

/* quadro de decisões: erro conforme a verdade de H0 e a decisão */
const classifica = (h0Verdadeira, rejeita) => (h0Verdadeira && rejeita ? "I" : !h0Verdadeira && !rejeita ? "II" : "acerto");
/* P(X < c) para X normal de média mu e erro padrão s */
const abaixo = (c, mu, s) => Phi((c - mu) / s);
/* ponto crítico unilateral à direita, achado por bisseção sob H0 */
const critDir = (mu0, s, a) => bissecao((c) => 1 - abaixo(c, mu0, s) - a, mu0 - 20 * s, mu0 + 20 * s, 200);
const critEsq = (mu0, s, a) => bissecao((c) => abaixo(c, mu0, s) - a, mu0 - 20 * s, mu0 + 20 * s, 200);
const poderBil = (delta, se, a) => { const c = zDe(1 - a / 2) * se; return 1 - abaixo(c, delta, se) + abaixo(-c, delta, se); };
const poderUni = (delta, se, a) => 1 - abaixo(critDir(0, se, a), delta, se);
const dist = (n, p) => { let d = [1]; for (let i = 0; i < n; i++) { const e = new Array(d.length + 1).fill(0); d.forEach((q, k) => { e[k] += q * (1 - p); e[k + 1] += q * p; }); d = e; } return d; };
const gerador = (semente) => { const r = sorteador(semente); return (mu = 0, s = 1) => { let u = r(); while (u <= 0) u = r(); return mu + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); }; };
const z975 = zDe(0.975);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["Rejeitar H0 quando ela é verdadeira", "Não rejeitar H0 quando ela é falsa", "Rejeitar H0 quando ela é falsa", "Não rejeitar H0 quando ela é verdadeira", "Errar a conta da estatística de teste"];
    return {
      d: "facil",
      e: "O que é o erro do tipo I em um teste de hipóteses?",
      o,
      x: "O erro do tipo I é rejeitar a hipótese nula quando ela é verdadeira: concluir que há um efeito que não existe, um falso positivo. Sua probabilidade é o nível de significância α, escolhido antes do teste. Os dois tipos de erro são consequências possíveis de decidir com dados aleatórios, mesmo sem nenhum engano de cálculo.\n\nNão rejeitar H0 falsa é o erro do tipo II. Rejeitar H0 falsa e manter H0 verdadeira são as duas decisões corretas. E erros de conta são enganos de cálculo, e não um dos tipos de erro de decisão do teste.",
      v: { i: () => unicoV([[true, true], [false, false], [false, true], [true, false], null].map((c) => !!c && classifica(c[0], c[1]) === "I")) },
    };
  })(),
  (() => {
    const o = ["Erro do tipo II", "Erro do tipo I", "Nenhum erro", "Os dois tipos de erro", "Erro de amostragem sistemático"];
    return {
      d: "facil",
      e: "Um teste manteve H0, embora ela fosse falsa. Que tipo de erro ocorreu?",
      o,
      x: "Deixar de rejeitar uma hipótese nula falsa é o erro do tipo II: o efeito existia, mas o teste não o detectou, um falso negativo. Sua probabilidade, β, depende do tamanho do efeito verdadeiro, da variabilidade dos dados e do tamanho da amostra.\n\nO erro do tipo I é o contrário: rejeitar H0 verdadeira. Houve, sim, um erro, porque a decisão contrariou a realidade. Os dois tipos não ocorrem juntos num único teste. E viés de amostragem é outro problema, anterior ao teste.",
      v: { i: () => { const c = classifica(false, false); return unicoV([c === "II", c === "I", c === "acerto", false, false]); } },
    };
  })(),
  (() => {
    const o = ["Rejeitar H0 quando ela é verdadeira", "H0 ser verdadeira", "Não rejeitar H0 quando ela é falsa", "Rejeitar H0 quando ela é falsa", "H1 ser verdadeira"];
    return {
      d: "facil",
      e: "O nível de significância α de um teste corresponde à probabilidade de qual evento?",
      o,
      x: "α é a probabilidade de cometer o erro do tipo I: supondo H0 verdadeira, é a chance de os dados caírem na região crítica e H0 ser rejeitada. Com α = 5%, em muitos testes de hipóteses nulas verdadeiras, cerca de 5% terminam em rejeição.\n\nα não é a probabilidade de H0 ser verdadeira, nem a de H1. A probabilidade de não rejeitar H0 falsa é β. E a de rejeitar H0 falsa é o poder, 1 − β.",
      v: {
        i: () => {
          /* com H0 verdadeira, a fração de rejeições a 5% é α; com H0 falsa, é o poder */
          const g = gerador(1), N = 100000; let r0 = 0, r1 = 0;
          for (let k = 0; k < N; k++) { if (Math.abs(g()) > z975) r0++; if (Math.abs(g(2)) > z975) r1++; }
          return unicoV([Math.abs(r0 / N - 0.05) < 0.003, false, Math.abs(1 - r1 / N - 0.05) < 0.003, Math.abs(r1 / N - 0.05) < 0.003, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["A chance de rejeitar H0 quando ela é falsa", "A chance de rejeitar H0 verdadeira", "O nível de significância", "A probabilidade de H0 ser falsa", "O tamanho da amostra"];
    return {
      d: "facil",
      e: "Em um teste de hipóteses, o que é o poder do teste?",
      o,
      x: "O poder é a probabilidade de rejeitar H0 quando ela é falsa, isto é, de detectar um efeito que existe. Vale 1 − β, em que β é a probabilidade do erro do tipo II. Um teste com poder alto raramente deixa passar efeitos reais do tamanho considerado.\n\nRejeitar H0 verdadeira é o erro do tipo I, com probabilidade α. O nível de significância é esse mesmo α. O poder não é a probabilidade de H0 ser falsa. E o tamanho da amostra influencia o poder, mas não é o poder.",
      v: {
        i: () => {
          const g = gerador(2), N = 100000, delta = 2.5; let rej = 0; for (let k = 0; k < N; k++) if (Math.abs(g(delta)) > z975) rej++;
          return unicoV([Math.abs(rej / N - poderBil(delta, 1, 0.05)) < 0.005, Math.abs(rej / N - 0.05) < 0.005, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["0,8", "0,2", "0,05", "0,95", "1,2"];
    return {
      d: "facil",
      e: "Um teste tem probabilidade β = 0,2 de cometer o erro do tipo II contra um certo efeito. Qual é o poder do teste contra esse efeito?",
      o,
      x: "O poder é o complemento de β: poder = 1 − β = 1 − 0,2 = 0,8. Se o efeito existe com o tamanho considerado, o teste o detecta em 80% das amostras e o deixa passar em 20%. Um poder de 80% é uma meta comum no planejamento de estudos.\n\n0,2 é o próprio β. 0,05 é o α usual, que não entra nesta conta. 0,95 é 1 − α. E 1,2 soma 1 e β, e passa de 1.",
      v: {
        i: () => {
          /* um efeito com β = 0,2 exatamente: o poder medido é o complemento */
          const delta = bissecao((d) => 1 - poderUni(d, 1, 0.05) - 0.2, 0, 10); return qualNum(poderUni(delta, 1, 0.05), o, 1e-6);
        },
      },
    };
  })(),
  (() => {
    const o = ["Erro do tipo I", "Erro do tipo II", "Nenhum erro", "Os dois tipos de erro", "Depende da pena aplicada"];
    return {
      d: "facil",
      e: "Num julgamento, a hipótese nula é a inocência do réu. Condenar um réu inocente corresponde a que tipo de erro?",
      o,
      x: "Condenar é rejeitar H0, a inocência. Se o réu é inocente, H0 é verdadeira, e rejeitá-la é o erro do tipo I. O princípio de que alguém só é condenado com provas fortes corresponde a manter α pequeno.\n\nO erro do tipo II seria absolver um culpado, mantendo H0 falsa. Condenar um inocente é, sim, um erro. Os dois não ocorrem ao mesmo tempo no mesmo julgamento. E o tipo de erro não depende da pena.",
      v: { i: () => { const c = classifica(true, true); return unicoV([c === "I", c === "II", c === "acerto", false, false]); } },
    };
  })(),
  (() => {
    const o = ["Erro do tipo II", "Erro do tipo I", "Uma decisão correta", "Os dois tipos de erro", "Um erro de medida, e não de decisão"];
    return {
      d: "facil",
      e: "Um exame testa H0: o paciente não tem a doença. Um resultado negativo num paciente doente corresponde a que tipo de erro?",
      o,
      x: "Um resultado negativo mantém H0, a ausência de doença. Se o paciente está doente, H0 é falsa, e mantê-la é o erro do tipo II, o falso negativo. Em exames de triagem, esse erro costuma ser o mais grave, porque o doente deixa de ser tratado.\n\nO erro do tipo I seria um falso positivo: acusar doença num paciente sadio. O resultado negativo num doente não é correto. Os dois erros não ocorrem juntos. E, mesmo que venha de limitações do exame, o resultado leva a uma decisão errada.",
      v: { i: () => { const c = classifica(false, false); return unicoV([c === "II", c === "I", c === "acerto", false, false]); } },
    };
  })(),
  (() => {
    const o = ["Não: esse erro exige H0 verdadeira", "Sim, com probabilidade α", "Sim, com probabilidade β", "Só com amostras pequenas", "Só em testes bilaterais"];
    return {
      d: "facil",
      e: "Se a hipótese nula é falsa, é possível cometer o erro do tipo I?",
      o,
      x: "O erro do tipo I é rejeitar uma H0 verdadeira. Se H0 é falsa, rejeitá-la é a decisão correta, e o único erro possível é o do tipo II, não rejeitá-la. Por isso α descreve o comportamento do teste quando H0 é verdadeira, e β, quando ela é falsa.\n\nα é a probabilidade de erro do tipo I no caso de H0 verdadeira, e não se aplica aqui. β é a probabilidade do erro do tipo II. E o tamanho da amostra ou o formato do teste não mudam essa lógica.",
      v: { i: () => { const possiveis = [true, false].map((rej) => classifica(false, rej)); return unicoV([!possiveis.includes("I"), possiveis.includes("I"), possiveis.includes("I"), false, false]); } },
    };
  })(),
  (() => {
    const o = ["β aumenta", "β diminui", "β não muda", "β se anula", "β fica igual a α"];
    return {
      d: "facil",
      e: "Mantidos a amostra e o efeito verdadeiro, o que tende a acontecer com β ao reduzir o nível de significância de 5% para 1%?",
      o,
      x: "Com α menor, a região crítica encolhe e fica mais longe de μ0: é preciso evidência mais forte para rejeitar H0. Isso protege contra o erro do tipo I, mas faz o teste deixar passar mais efeitos reais: β aumenta, e o poder diminui. Com n fixo, os dois erros andam em sentidos opostos.\n\nβ não diminui nem se mantém, porque a região de rejeição mudou. Ele não se anula. E não há relação que o iguale a α.",
      v: { i: () => { const b5 = 1 - poderUni(2, 1, 0.05), b1 = 1 - poderUni(2, 1, 0.01); return unicoV([b1 > b5, b1 < b5, Math.abs(b1 - b5) < 1e-9, b1 === 0, Math.abs(b1 - 0.01) < 1e-9]); } },
    };
  })(),
  (() => {
    const o = ["Aumenta", "Diminui", "Não muda", "Fica igual a α", "Cai para zero"];
    return {
      d: "facil",
      e: "Mantidos o nível de significância e o efeito verdadeiro, o que acontece com o poder do teste quando o tamanho da amostra aumenta?",
      o,
      x: "Com mais observações, o erro padrão σ/√n diminui, e a distribuição da estatística sob H1 se afasta da região de não rejeição. O mesmo efeito fica mais fácil de detectar, β cai e o poder aumenta, enquanto α continua fixo.\n\nO poder não diminui com mais dados. Ele muda, sim, porque depende de n. Poder igual a α só ocorre quando não há efeito nenhum. E o poder se aproxima de 1, e não de zero, quando n cresce.",
      v: { i: () => { const p = [10, 40, 160].map((n) => poderUni(2, 10 / Math.sqrt(n), 0.05)); return unicoV([p[0] < p[1] && p[1] < p[2], p[0] > p[1], Math.abs(p[0] - p[2]) < 1e-9, false, p[2] < 1e-6]); } },
    };
  })(),
  (() => {
    const o = ["Não: cada um exige uma situação de H0", "Sim, sempre", "Sim, quando o valor p é igual a α", "Só com α grande", "Só em testes unilaterais"];
    return {
      d: "facil",
      e: "Num único teste, é possível cometer os dois tipos de erro ao mesmo tempo?",
      o,
      x: "O erro do tipo I só ocorre se H0 for verdadeira e for rejeitada; o do tipo II, só se H0 for falsa e for mantida. Como H0 é verdadeira ou falsa, e o teste rejeita ou não, num único teste acontece no máximo um dos dois erros. O quadro de decisões tem quatro casas: duas corretas e uma para cada tipo de erro.\n\nNão há situação em que os dois ocorram juntos, nem com valor p igual a α, nem com α grande, nem em testes unilaterais. O que muda com essas escolhas são as probabilidades de cada erro.",
      v: {
        i: () => {
          const casas = [true, false].flatMap((h0) => [true, false].map((rej) => classifica(h0, rej))), maxErros = Math.max(...casas.map((c) => (c === "acerto" ? 0 : 1)));
          return unicoV([maxErros <= 1 && casas.filter((c) => c !== "acerto").length === 2, maxErros > 1, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["0,95", "0,05", "1", "0,5", "Depende do poder"];
    return {
      d: "facil",
      e: "Num teste com α = 0,05, se H0 for verdadeira, qual é a probabilidade de a decisão ser correta?",
      o,
      x: "Com H0 verdadeira, a decisão correta é não rejeitá-la, e isso acontece com probabilidade 1 − α = 0,95. Os 5% restantes são os casos de erro do tipo I, em que os dados caem na região crítica por acaso. Assim, α controla o risco do teste quando H0 é verdadeira, e o poder descreve o comportamento quando ela é falsa.\n\n0,05 é a probabilidade de erro, e não de acerto. 1 exigiria α = 0. 0,5 não tem justificativa. E o poder só importa quando H0 é falsa.",
      v: { i: () => { const g = gerador(3), N = 100000; let ok = 0; for (let k = 0; k < N; k++) if (Math.abs(g()) <= z975) ok++; return qualNum(ok / N, o, 0.004); } },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["≈ 0,36", "≈ 0,64", "0,05", "0,95", "≈ 0,89"];
    return {
      d: "media",
      e: "Num teste de H0: μ = 100 contra H1: μ > 100, com σ = 15, n = 25 e α = 5% (z = 1,645), rejeita-se H0 se a média amostral passar de 104,935. Se a média verdadeira for 106, e usando Φ(−0,355) ≈ 0,361, qual é a probabilidade do erro do tipo II?",
      o,
      x: "O erro do tipo II é não rejeitar H0, isto é, obter média amostral abaixo de 104,935, quando a média verdadeira é 106. Nesse caso, a média amostral é normal com média 106 e erro padrão 15/√25 = 3, e β = P(x̄ < 104,935) = Φ((104,935 − 106)/3) = Φ(−0,355) ≈ 0,36. O poder é cerca de 0,64.\n\n0,64 é o poder, 1 − β. 0,05 é α, a probabilidade do erro do tipo I. 0,95 é 1 − α. E 0,89 usa o desvio padrão 15 sem dividir por √n.",
      v: { i: () => { const c = critDir(100, 3, 0.05); return qualNum(abaixo(c, 106, 3), o, 0.004); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,94", "≈ 0,06", "0,05", "≈ 0,64", "0,95"];
    return {
      d: "media",
      e: "Uma máquina deveria encher 500 mL, com σ = 10 mL. Testa-se H0: μ = 500 contra H1: μ < 500, com n = 16 e α = 5% (z = 1,645), e rejeita-se H0 se a média amostral ficar abaixo de 495,89. Se a média real for 492 mL, e usando Φ(1,555) ≈ 0,940, qual é o poder do teste?",
      o,
      x: "O poder é a probabilidade de rejeitar H0 quando a média real é 492: P(x̄ < 495,89), com x̄ normal de média 492 e erro padrão 10/√16 = 2,5. Padronizando, z = (495,89 − 492)/2,5 ≈ 1,555, e o poder é Φ(1,555) ≈ 0,94. Uma queda de 8 mL é detectada com alta probabilidade.\n\n0,06 é β, a chance de não detectar a queda. 0,05 é α. 0,64 corresponderia a uma queda menor, de 5 mL. E 0,95 é 1 − α, que não tem relação com o poder.",
      v: { i: () => { const c = critEsq(500, 2.5, 0.05); return qualNum(abaixo(c, 492, 2.5), o, 0.002); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,43", "≈ 0,20", "≈ 0,57", "0,01", "0,99"];
    return {
      d: "media",
      e: "Num teste unilateral de H0: μ = 50 contra H1: μ > 50, com erro padrão 2, o erro do tipo II vale cerca de 0,20 quando a média verdadeira é 55 e α = 5%. Com α = 1%, o ponto crítico sobe para 54,65. Usando Φ(0,174) ≈ 0,569, qual passa a ser β?",
      o,
      x: "Com α = 1%, só se rejeita H0 se a média amostral passar de 54,65. Com média verdadeira 55 e erro padrão 2, β = P(x̄ < 54,65) = Φ((54,65 − 55)/2) = Φ(−0,174) = 1 − 0,569 ≈ 0,43. Reduzir α de 5% para 1% mais que dobrou β, de 0,20 para 0,43: com n fixo, proteger-se de um erro aumenta o outro.\n\n0,20 é β com α = 5%. 0,57 é o poder com α = 1%. 0,01 é o novo α. E 0,99 é 1 − α.",
      v: { i: () => { const b5 = abaixo(critDir(50, 2, 0.05), 55, 2), b1 = abaixo(critDir(50, 2, 0.01), 55, 2); return Math.abs(b5 - 0.2) < 0.01 ? qualNum(b1, o, 0.005) : -1; } },
    };
  })(),
  (() => {
    const o = ["≈ 40%", "5%", "50%", "≈ 60%", "10%"];
    return {
      d: "media",
      e: "Um pesquisador faz 10 testes independentes, cada um com α = 5%, e todas as hipóteses nulas são verdadeiras. Qual é a probabilidade de pelo menos um teste rejeitar H0?",
      o,
      x: "Cada teste mantém H0 com probabilidade 0,95, e os 10 mantêm juntos com probabilidade 0,95¹⁰ ≈ 0,599. A chance de pelo menos um erro do tipo I é 1 − 0,599 ≈ 0,40, oito vezes o α de cada teste. Por isso, quem faz muitos testes precisa ajustar o nível de significância.\n\n5% vale para cada teste isolado. 50% soma 5% dez vezes, o que superestima, porque ignora as sobreposições. 60% é a chance de nenhum erro. E 10% é o número de testes lido como porcentagem.",
      v: { i: () => { const g = gerador(4), R = 20000; let algum = 0; for (let k = 0; k < R; k++) { let a = false; for (let j = 0; j < 10; j++) if (Math.abs(g()) > z975) a = true; if (a) algum++; } return qualNum((100 * algum) / R, o, 0.03); } },
    };
  })(),
  (() => {
    const o = ["0,005", "0,05", "0,5", "0,0005", "0,01"];
    return {
      d: "media",
      e: "Para manter em no máximo 5% a probabilidade de algum erro do tipo I em 10 testes, a correção de Bonferroni usa que nível de significância em cada teste?",
      o,
      x: "A correção de Bonferroni divide o nível total pelo número de testes: 0,05/10 = 0,005. Como a probabilidade de pelo menos um erro é no máximo a soma das probabilidades, 10 · 0,005 = 0,05, o objetivo fica garantido. Com testes independentes, o valor exato seria 1 − 0,995¹⁰ ≈ 0,049.\n\n0,05 em cada teste daria cerca de 40% de chance de algum erro. 0,5 multiplica em vez de dividir. 0,0005 divide por 100. E 0,01 é um nível comum, mas não sai da correção.",
      v: {
        i: () => {
          /* maior nível por teste que mantém a taxa de algum erro em 5% pela desigualdade da soma, e conferência por simulação */
          const a = 0.05 / 10, g = gerador(5), R = 40000, c = zDe(1 - a / 2); let algum = 0;
          for (let k = 0; k < R; k++) { let x = false; for (let j = 0; j < 10; j++) if (Math.abs(g()) > c) x = true; if (x) algum++; }
          return algum / R <= 0.055 ? qualNum(a, o, 1e-9) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["1", "0", "5", "20", "0,05"];
    return {
      d: "media",
      e: "Numa análise, 20 testes independentes são feitos com α = 5%, e em todos a hipótese nula é verdadeira. Quantas rejeições se esperam, em média?",
      o,
      x: "Cada teste rejeita H0 verdadeira com probabilidade 0,05, e o número de rejeições é binomial com n = 20 e p = 0,05, de média 20 · 0,05 = 1. Em média, um dos 20 resultados será significativo só por acaso, sem nenhum efeito real. A chance de pelo menos uma rejeição é 1 − 0,95²⁰ ≈ 64%.\n\n0 ignora o erro do tipo I. 5 lê α como contagem. 20 supõe que todos os testes rejeitam. E 0,05 é a probabilidade de cada teste, e não o número esperado de rejeições.",
      v: { i: () => { const g = gerador(6), R = 20000; let tot = 0; for (let k = 0; k < R; k++) for (let j = 0; j < 20; j++) if (Math.abs(g()) > z975) tot++; return qualNum(tot / R, o, 0.03); } },
    };
  })(),
  (() => {
    const o = ["Mais culpados acabam absolvidos", "Mais inocentes são condenados", "Os dois erros diminuem", "Nenhum dos erros muda", "Todos os culpados passam a ser condenados"];
    return {
      d: "media",
      e: "Num tribunal, a hipótese nula é a inocência. Se os juízes passarem a exigir provas bem mais fortes para condenar, o que tende a acontecer?",
      o,
      x: "Exigir provas mais fortes é reduzir α: menos inocentes condenados, menos erros do tipo I. O preço é que parte dos culpados, com provas insuficientes para o novo critério, passa a ser absolvida: β aumenta. Com a mesma qualidade de provas, os dois erros se movem em sentidos opostos.\n\nCondenar mais inocentes seria o efeito de afrouxar o critério. Os dois erros só cairiam juntos com provas melhores, o equivalente a mais dados. O critério mudou, e as taxas mudam. E exigir mais provas não aumenta as condenações de culpados.",
      v: {
        i: () => {
          /* força das provas: normal padrão para inocentes e de média 2 para culpados; critério sobe de 1,645 para 2,326 */
          const taxas = (c) => [1 - abaixo(c, 0, 1), abaixo(c, 2, 1)], [i1, g1] = taxas(1.645), [i2, g2] = taxas(2.326);
          return unicoV([g2 > g1 && i2 < i1, i2 > i1, i2 < i1 && g2 < g1, Math.abs(i2 - i1) < 1e-9, g2 === 0]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Aprovar um remédio que não funciona", "Rejeitar um remédio que funciona", "Aprovar um remédio que funciona", "Rejeitar um remédio que não funciona", "Não fazer o teste"];
    return {
      d: "media",
      e: "Para aprovar um novo medicamento, testa-se H0: o remédio não funciona. Nesse teste, o que é o erro do tipo I?",
      o,
      x: "O erro do tipo I é rejeitar H0 verdadeira. Aqui, H0 verdadeira significa que o remédio não funciona, e rejeitá-la leva à aprovação: aprovar um remédio ineficaz. Por isso agências reguladoras exigem α pequeno, para proteger pacientes de tratamentos inúteis.\n\nRejeitar um remédio que funciona é o erro do tipo II. Aprovar um remédio que funciona e rejeitar um que não funciona são as decisões corretas. E não fazer o teste não é um dos erros de decisão.",
      v: {
        i: () => {
          /* aprovar = rejeitar H0; H0 verdadeira = remédio não funciona */
          const casos = [[true, true], [false, false], [false, true], [true, false], null];
          return unicoV(casos.map((c) => !!c && classifica(c[0], c[1]) === "I"));
        },
      },
    };
  })(),
  (() => {
    const o = ["Fica bem maior que 5%", "Fica exatamente em 5%", "Fica menor que 5%", "Vai a zero", "Depende só do tamanho final da amostra"];
    return {
      d: "media",
      e: "Um pesquisador repete o teste depois de cada 10 novas observações e para assim que obtém p < 0,05, com até 10 verificações. Se H0 for verdadeira, o que acontece com a probabilidade de erro do tipo I?",
      o,
      x: "Cada verificação é uma nova chance de o acaso produzir p < 0,05. Mesmo com resultados correlacionados, as chances se acumulam: com até 10 verificações, a probabilidade de rejeitar H0 verdadeira em algum momento fica perto de 20%, e não 5%. Parar quando o resultado agrada inflaciona o erro do tipo I.\n\nO nível nominal de 5% vale para um único teste planejado. O procedimento não reduz o erro, nem o zera. E o problema está na regra de parada, e não só no tamanho final.",
      v: {
        i: () => {
          const g = gerador(7), R = 20000; let rej = 0;
          for (let k = 0; k < R; k++) { let s = 0; for (let v = 1; v <= 10; v++) { for (let j = 0; j < 10; j++) s += g(); if (Math.abs(s / Math.sqrt(10 * v)) > z975) { rej++; break; } } }
          const taxa = rej / R; return unicoV([taxa > 0.15, Math.abs(taxa - 0.05) < 0.005, taxa < 0.045, taxa < 0.001, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["É maior", "É menor", "É igual", "É igual a α", "Aumenta o erro do tipo I"];
    return {
      d: "media",
      e: "Com o mesmo tamanho de amostra e o mesmo α, como o poder para detectar uma diferença grande se compara com o poder para detectar uma diferença pequena?",
      o,
      x: "Quanto maior a diferença verdadeira entre μ e μ0, mais longe da região de não rejeição fica a distribuição da estatística, e mais fácil é rejeitar H0. O poder cresce com o tamanho do efeito: diferenças pequenas exigem amostras maiores para serem detectadas.\n\nO poder não é menor nem igual para efeitos maiores. Ele só se iguala a α quando não há efeito. E o erro do tipo I depende apenas de α, que é o mesmo nos dois casos.",
      v: { i: () => { const g = poderBil(3, 1, 0.05), p = poderBil(1, 1, 0.05); return unicoV([g > p, g < p, Math.abs(g - p) < 1e-9, Math.abs(g - 0.05) < 1e-9, false]); } },
    };
  })(),
  (() => {
    const o = ["Erro do tipo II", "Erro do tipo I", "Uma decisão correta", "Os dois tipos de erro", "Nenhum, se a amostra for grande"];
    return {
      d: "media",
      e: "Um controle de qualidade testa H0: o lote está conforme. Aprovar um lote defeituoso corresponde a que tipo de erro?",
      o,
      x: "Aprovar o lote é manter H0, a conformidade. Se o lote é defeituoso, H0 é falsa, e mantê-la é o erro do tipo II. Esse é o risco do comprador, que recebe produtos ruins; o erro do tipo I, rejeitar um lote bom, é o risco do fabricante.\n\nO erro do tipo I seria recusar um lote conforme. Aprovar um lote defeituoso não é correto. Os dois erros não ocorrem juntos. E amostras grandes reduzem a chance do erro, mas não mudam sua natureza.",
      v: { i: () => { const c = classifica(false, false); return unicoV([c === "II", c === "I", c === "acerto", false, false]); } },
    };
  })(),
  (() => {
    const o = ["Maior na direção prevista", "Menor em qualquer direção", "Igual", "Nulo", "Maior na direção oposta"];
    return {
      d: "media",
      e: "Para detectar μ > μ0, como se compara o poder de um teste unilateral à direita com o de um teste bilateral de mesmo α?",
      o,
      x: "O teste unilateral põe toda a região crítica do lado previsto, com valor crítico 1,645 em vez de 1,96 para α = 5%. Na direção prevista, é mais fácil rejeitar H0, e o poder é maior: para um efeito de 2 erros padrão, cerca de 0,64 contra 0,52 do bilateral. Na direção oposta, porém, o unilateral praticamente não detecta nada.\n\nO unilateral não é menos poderoso na direção prevista. Os poderes não são iguais. O poder não é nulo. E na direção oposta ele é quase zero, e não maior.",
      v: {
        i: () => {
          const u = poderUni(2, 1, 0.05), b = poderBil(2, 1, 0.05), uOposto = poderUni(-2, 1, 0.05), bOposto = poderBil(-2, 1, 0.05);
          return unicoV([u > b && Math.abs(u - 0.64) < 0.01 && Math.abs(b - 0.52) < 0.01, u < b, Math.abs(u - b) < 1e-9, u === 0, uOposto > bOposto]);
        },
      },
    };
  })(),
  (() => {
    const o = ["25", "11", "32", "5", "35"];
    return {
      d: "media",
      e: "Para um teste unilateral com α = 5% (z = 1,645), σ = 10 e efeito de interesse de 5 unidades, qual é o menor tamanho de amostra que dá poder de 80% (z = 0,842)?",
      o,
      x: "A condição é (zα + zβ) · σ/√n ≤ δ, isto é, n ≥ [(1,645 + 0,842) · 10/5]² = (2,487 · 2)² ≈ 24,7, e o menor inteiro é 25. Com 25 observações, o efeito de 5 unidades fica 2,5 erros padrão acima de μ0, e o poder é cerca de 80%.\n\n11 ignora zβ e só garante poder de 50%. 32 usa 1,96, de um teste bilateral. 5 esquece de elevar ao quadrado. E 35 corresponde a um poder de 90%, com zβ = 1,282.",
      v: { i: () => { for (let n = 1; n < 1000; n++) if (poderUni(5, 10 / Math.sqrt(n), 0.05) >= 0.8) return qualNum(n, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["β depende do valor verdadeiro do parâmetro", "β é sempre zero", "β é sempre igual a α", "β não existe em testes unilaterais", "β depende só do tamanho da amostra"];
    return {
      d: "media",
      e: "Por que, num teste de hipóteses, o valor de β não é fixado de antemão como se faz com α?",
      o,
      x: "α é calculado sob H0, que fixa um único valor do parâmetro. β, ao contrário, é calculado sob H1, que admite muitos valores, e para cada valor verdadeiro há um β diferente: é pequeno para efeitos grandes e grande para efeitos pequenos. Por isso se fala em β contra um efeito específico, escolhido no planejamento.\n\nβ não é zero, a não ser em casos extremos. Ele não é igual a α. Existe em qualquer teste. E depende também do efeito, de σ e de α, e não só de n.",
      v: {
        i: () => {
          const bs = [0.5, 1, 2, 3].map((d) => 1 - poderUni(d, 1, 0.05)), variam = new Set(bs.map((b) => b.toFixed(6))).size === 4;
          return unicoV([variam, bs.every((b) => b === 0), bs.every((b) => Math.abs(b - 0.05) < 1e-9), false, !variam]);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 0,055", "≈ 0,044", "0,8", "≈ 0,011", "0,5"];
    return {
      d: "media",
      e: "Para testar se uma moeda é honesta contra a suspeita de favorecer cara, adota-se a regra de rejeitar H0: p = 0,5 se saírem 8 caras ou mais em 10 lançamentos. Qual é a probabilidade do erro do tipo I?",
      o,
      x: "O erro do tipo I é rejeitar H0 quando a moeda é honesta: P(X ≥ 8) com X binomial de parâmetros 10 e 0,5, que vale (45 + 10 + 1)/1.024 = 56/1.024 ≈ 0,055. A regra tem nível pouco acima de 5%, e mudar o ponto de corte muda α em saltos, porque a binomial é discreta.\n\n0,044 é só P(X = 8). 0,8 é a proporção de caras exigida. 0,011 é P(X ≥ 9), o nível da regra mais exigente. E 0,5 é a probabilidade de cara sob H0.",
      v: { i: () => qualNum(soma(dist(10, 0.5).slice(8)), o, 0.001) },
    };
  })(),
  (() => {
    const o = ["Não: α continua 5%; o que cai é β", "Sim: α cai com n", "Sim: α e β caem juntos", "Não: aumentar n aumenta α", "Só em testes bilaterais"];
    return {
      d: "media",
      e: "Aumentar o tamanho da amostra, mantendo a mesma regra com α = 5%, reduz a probabilidade do erro do tipo I?",
      o,
      x: "α é escolhido pelo pesquisador e define a região crítica: com H0 verdadeira, a chance de rejeitar continua 5%, qualquer que seja n. O que melhora com mais dados é o poder, porque o erro padrão diminui e efeitos reais ficam mais fáceis de detectar; β cai.\n\nα não cai com n, nem cai junto com β, a menos que o pesquisador escolha um α menor. Aumentar n também não o aumenta. E essa lógica vale para testes unilaterais e bilaterais.",
      v: {
        i: () => {
          const g = gerador(8), taxa = (n, mu) => { const R = 20000; let r = 0; for (let k = 0; k < R; k++) { let s = 0; for (let j = 0; j < n; j++) s += g(mu); if (Math.abs(s / Math.sqrt(n)) > z975) r++; } return r / R; };
          const a10 = taxa(10, 0), a60 = taxa(60, 0), p10 = taxa(10, 0.3), p60 = taxa(60, 0.3);
          const alfaFixo = Math.abs(a10 - 0.05) < 0.006 && Math.abs(a60 - 0.05) < 0.006;
          return unicoV([alfaFixo && p60 > p10, !alfaFixo && a60 < a10, !alfaFixo && a60 < a10 && p60 > p10, a60 > a10 + 0.01, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Aumentando o tamanho da amostra", "Diminuindo α", "Aumentando α", "Trocando para um teste bilateral", "Não é possível em nenhum caso"];
    return {
      d: "media",
      e: "Como é possível reduzir ao mesmo tempo a probabilidade do erro do tipo I e a do erro do tipo II?",
      o,
      x: "Com n fixo, reduzir α aumenta β, e vice-versa. Com mais dados, porém, o erro padrão diminui: é possível adotar um α menor e, ainda assim, ter β menor que antes. Por exemplo, num teste unilateral contra um efeito de 1 desvio padrão, passar de n = 9 com α = 5% para n = 25 com α = 1% reduz β de cerca de 0,09 para cerca de 0,004.\n\nDiminuir α sozinho aumenta β, e aumentar α faz o contrário. Trocar para bilateral reduz o poder na direção prevista. E é possível, sim, com mais informação.",
      v: {
        i: () => {
          const b1 = 1 - poderUni(1, 1 / 3, 0.05), b2 = 1 - poderUni(1, 1 / 5, 0.01), soAlfa = 1 - poderUni(1, 1 / 3, 0.01);
          const maisN = b2 < b1 && Math.abs(b1 - 0.09) < 0.005 && Math.abs(b2 - 0.004) < 0.001;
          return unicoV([maisN, soAlfa < b1, false, poderBil(1, 1 / 3, 0.05) > poderUni(1, 1 / 3, 0.05), !maisN]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Igual a α", "Igual a 1", "Igual a 0", "Igual a 1 − α", "Igual a β"];
    return {
      d: "media",
      e: "Qual é o valor da função poder de um teste quando o parâmetro verdadeiro é exatamente o valor da hipótese nula, μ = μ0?",
      o,
      x: "A função poder dá a probabilidade de rejeitar H0 para cada valor verdadeiro do parâmetro. Em μ = μ0, H0 é verdadeira, e a probabilidade de rejeitar é justamente o nível de significância α. À medida que μ se afasta de μ0, a curva sobe em direção a 1.\n\n1 seria rejeitar sempre. 0 seria nunca rejeitar. 1 − α é a probabilidade de manter H0 verdadeira. E β só se define para valores de H1.",
      v: { i: () => { const p = [0.01, 0.05, 0.1].map((a) => [a, poderBil(0, 1, a), poderUni(0, 1, a)]); return unicoV([p.every(([a, b, u]) => Math.abs(b - a) < 1e-6 && Math.abs(u - a) < 1e-6), false, false, p.every(([a, b]) => Math.abs(b - 1 + a) < 1e-6), false]); } },
    };
  })(),
  (() => {
    const o = ["1", "α", "0", "0,5", "β"];
    return {
      d: "media",
      e: "À medida que o valor verdadeiro do parâmetro se afasta de μ0 na direção da alternativa, para que valor tende o poder do teste?",
      o,
      x: "Quanto mais longe o valor verdadeiro está de μ0, mais extremos tendem a ser os dados, e mais certa fica a rejeição de H0. A função poder cresce e se aproxima de 1: efeitos muito grandes são detectados quase sempre. Com erro padrão 1 e α = 5%, um efeito de 4 unidades já tem poder de cerca de 0,99.\n\nα é o valor do poder em μ0, o ponto de partida da curva. 0 seria o limite na direção oposta, num teste unilateral. 0,5 é o poder quando o valor verdadeiro coincide com o ponto crítico. E β tende a zero, e não o poder.",
      v: { i: () => { const p = [2, 4, 8, 12].map((d) => poderUni(d, 1, 0.05)); return p.every((v, k) => k === 0 || v > p[k - 1]) && Math.abs(p[1] - 0.99) < 0.005 ? qualNum(p[3], o, 1e-6) : -1; } },
    };
  })(),
  (() => {
    const o = ["≈ 0,52", "≈ 0,48", "≈ 0,64", "0,05", "≈ 0,98"];
    return {
      d: "media",
      e: "Num teste bilateral de H0: μ = 50 com σ = 8, n = 16 e α = 5%, rejeita-se H0 se a média amostral ficar fora de 46,08 a 53,92. Se a média verdadeira for 54, e usando Φ(0,04) ≈ 0,516, qual é, aproximadamente, o poder?",
      o,
      x: "Com média verdadeira 54 e erro padrão 8/√16 = 2, o poder soma as duas caudas: P(x̄ > 53,92) = Φ((54 − 53,92)/2) = Φ(0,04) ≈ 0,516, e P(x̄ < 46,08) = Φ(−3,96), praticamente zero. O poder é cerca de 0,52: um efeito de 2 erros padrão é detectado em só metade das amostras.\n\n0,48 é β. 0,64 seria o poder do teste unilateral, com ponto crítico 53,29. 0,05 é α. E 0,98 é Φ(2), que esquece o valor crítico e trata qualquer média acima de 50 como rejeição.",
      v: { i: () => { const c = z975 * 2; return qualNum(1 - abaixo(50 + c, 54, 2) + abaixo(50 - c, 54, 2), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["Uma decisão correta", "Erro do tipo I", "Erro do tipo II", "Os dois tipos de erro", "Um erro de amostragem"];
    return {
      d: "media",
      e: "Num teste de hipóteses, como se classifica a decisão de rejeitar H0 quando ela é falsa?",
      o,
      x: "Rejeitar H0 falsa é exatamente o que se espera do teste: detectar o efeito que existe. É uma decisão correta, e sua probabilidade é o poder, 1 − β. No quadro de decisões, a outra decisão correta é manter H0 quando ela é verdadeira, com probabilidade 1 − α.\n\nO erro do tipo I é rejeitar H0 verdadeira. O do tipo II é manter H0 falsa. Os dois erros não se aplicam aqui. E erro de amostragem é a diferença natural entre estatística e parâmetro, e não uma decisão.",
      v: { i: () => { const c = classifica(false, true); return unicoV([c === "acerto", c === "I", c === "II", false, false]); } },
    };
  })(),
  (() => {
    const o = ["Menor", "Maior", "Igual", "Igual a α", "Igual a 1"];
    return {
      d: "media",
      e: "Duas pesquisas usam o mesmo n, o mesmo α e buscam o mesmo efeito, mas na segunda as medidas são mais imprecisas, com σ maior. Como fica o poder da segunda em relação ao da primeira?",
      o,
      x: "Com σ maior, o erro padrão σ/√n aumenta, e o mesmo efeito corresponde a menos erros padrão de distância de μ0. A distribuição da estatística sob H1 se sobrepõe mais à região de não rejeição, β aumenta e o poder fica menor. Medidas mais precisas, com σ menor, aumentam o poder sem aumentar a amostra.\n\nO poder não fica maior nem igual. Ele só seria igual a α sem efeito. E não chega a 1: fica abaixo do da primeira pesquisa.",
      v: { i: () => { const p1 = poderBil(5, 10 / 5, 0.05), p2 = poderBil(5, 20 / 5, 0.05); return unicoV([p2 < p1, p2 > p1, Math.abs(p2 - p1) < 1e-9, Math.abs(p2 - 0.05) < 1e-9, Math.abs(p2 - 1) < 1e-6]); } },
    };
  })(),
  (() => {
    const o = ["α pequeno e poder alto", "α grande e poder baixo", "α pequeno e poder baixo", "α grande e poder alto", "α igual ao poder"];
    return {
      d: "media",
      e: "Qual combinação de características torna um teste mais desejável?",
      o,
      x: "Um bom teste erra pouco nos dois sentidos: α pequeno significa poucos falsos positivos, e poder alto significa poucos falsos negativos. Com n fixo, os dois objetivos competem, e o planejamento escolhe n grande o bastante para alcançar os dois.\n\nα grande com poder baixo é o pior caso. α pequeno com poder baixo deixa passar muitos efeitos reais. α grande com poder alto aceita muitos falsos positivos. E α igual ao poder caracteriza um teste que não distingue H0 de H1.",
      v: {
        i: () => {
          /* soma das probabilidades de erro (α + β) em cada combinação, com um efeito fixo */
          const erro = (alfa, poder) => alfa + (1 - poder), c = [[0.01, 0.95], [0.2, 0.3], [0.01, 0.3], [0.2, 0.95], [0.3, 0.3]].map(([a, p]) => erro(a, p)), m = Math.min(...c);
          return unicoV(c.map((v) => v === m));
        },
      },
    };
  })(),
  (() => {
    const o = ["0,0025", "0,05", "0,1", "0,0975", "0,025"];
    return {
      d: "media",
      e: "Um produto só é aprovado se dois testes independentes, cada um com α = 5%, rejeitarem H0: o produto não é eficaz. Se o produto for ineficaz, qual é a probabilidade de ser aprovado?",
      o,
      x: "A aprovação exige as duas rejeições. Com H0 verdadeira, cada teste rejeita com probabilidade 0,05, e, pela independência, os dois rejeitam juntos com probabilidade 0,05 · 0,05 = 0,0025. Exigir duas confirmações independentes reduz muito o erro do tipo I do processo.\n\n0,05 é o α de um teste. 0,1 soma os dois α. 0,0975 = 1 − 0,95² é a chance de pelo menos um rejeitar, que valeria se bastasse uma rejeição. E 0,025 divide α por 2, como num teste bilateral.",
      v: { i: () => { const g = gerador(9), R = 400000; let ambos = 0; for (let k = 0; k < R; k++) if (Math.abs(g()) > z975 && Math.abs(g()) > z975) ambos++; return qualNum(ambos / R, o, 0.0005); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,011", "0,05", "≈ 0,055", "≈ 0,001", "0"];
    return {
      d: "media",
      e: "Num teste com 10 lançamentos de moeda, a regra é rejeitar H0: p = 0,5 se o número de caras for maior ou igual a um valor c. Qual é o maior nível de significância real, sem passar de 5%, que essa regra pode ter?",
      o,
      x: "Com c = 8, o nível seria P(X ≥ 8) = 56/1.024 ≈ 0,055, acima de 5%. Com c = 9, é P(X ≥ 9) = 11/1.024 ≈ 0,011. Como a binomial é discreta, não existe regra desse tipo com nível exatamente 5%, e o maior nível permitido é cerca de 0,011, bem abaixo do nominal.\n\n0,05 exato não é atingível com essa regra. 0,055 passa do limite. 0,001 é o nível de c = 10, mais conservador que o necessário. E 0 corresponderia a nunca rejeitar.",
      v: { i: () => { const d = dist(10, 0.5), niveis = [...Array(11).keys()].map((c) => soma(d.slice(c))).filter((a) => a <= 0.05); return qualNum(Math.max(...niveis), o, 0.0005); } },
    };
  })(),
  (() => {
    const o = ["Não dá para saber só com o valor p", "Exatamente 4%", "Exatamente 5%", "96%", "0%"];
    return {
      d: "media",
      e: "Um estudo rejeitou H0 com valor p igual a 0,04. Qual é a probabilidade de essa rejeição ser um erro do tipo I?",
      o,
      x: "O valor p é calculado supondo H0 verdadeira; ele não informa com que frequência H0 é verdadeira entre os estudos com resultados parecidos. A chance de esta rejeição ser um falso positivo depende de quão plausível H0 era antes e do poder do estudo: entre hipóteses em que o efeito quase nunca existe, rejeições com p = 0,04 são frequentemente falsas.\n\n4% confunde o valor p com a probabilidade de erro. 5% é a taxa de erro do procedimento quando H0 é verdadeira, e não a desta rejeição. 96% e 0% não têm justificativa.",
      v: {
        i: () => {
          /* fração de H0 verdadeiras entre estudos com p perto de 0,04, em dois cenários de plausibilidade prévia */
          const g = gerador(10), r = sorteador(11), frac = (pH0) => { let h0 = 0, tot = 0; for (let k = 0; k < 400000; k++) { const verd = r() < pH0, z = g(verd ? 0 : 2), p = 2 * (1 - Phi(Math.abs(z))); if (p > 0.03 && p < 0.05) { tot++; if (verd) h0++; } } return h0 / tot; };
          const a = frac(0.5), b = frac(0.9);
          return unicoV([b - a > 0.2, Math.abs(a - 0.04) < 0.01 && Math.abs(b - 0.04) < 0.01, Math.abs(a - 0.05) < 0.01 && Math.abs(b - 0.05) < 0.01, false, a === 0 && b === 0]);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 0,39", "≈ 0,12", "≈ 0,27", "≈ 0,61", "0,1"];
    return {
      d: "media",
      e: "Num plano de amostragem, um lote é aceito se houver no máximo 1 peça defeituosa numa amostra de 20. Se o lote tiver 10% de peças defeituosas, o que é inaceitável, qual é a probabilidade de ele ser aceito?",
      o,
      x: "Aceitar um lote ruim é o erro do tipo II do plano. Com X binomial de parâmetros 20 e 0,1: P(X = 0) = 0,9²⁰ ≈ 0,122 e P(X = 1) = 20 · 0,1 · 0,9¹⁹ ≈ 0,270. Somando, P(X ≤ 1) ≈ 0,39: o plano aceita cerca de 39% dos lotes com 10% de defeitos, um risco alto para o comprador.\n\n0,12 é só P(X = 0). 0,27 é só P(X = 1). 0,61 é a probabilidade de rejeitar o lote, o poder do plano nesse caso. E 0,1 é a proporção de defeituosas.",
      v: { i: () => { const d = dist(20, 0.1); return qualNum(d[0] + d[1], o, 0.005); } },
    };
  })(),
  (() => {
    const o = ["0", "1", "0,5", "Igual a β", "Depende do tamanho da amostra"];
    return {
      d: "media",
      e: "Se um pesquisador fixar α = 0, nunca aceitando o risco de erro do tipo I, qual será o poder do teste?",
      o,
      x: "Com α = 0, a região crítica fica vazia: nenhum resultado, por mais extremo, leva à rejeição, porque qualquer valor tem alguma chance sob H0 numa distribuição contínua como a normal. Sem rejeições, o poder é zero, e β = 1: todo efeito real passa despercebido.\n\nPoder 1 exigiria rejeitar sempre. 0,5 não tem justificativa. O poder é 1 − β, e com β = 1 ele vale 0, e não β. E nem uma amostra enorme resolve, porque a regra nunca rejeita.",
      v: { i: () => { const p = [1e-3, 1e-6, 1e-9].map((a) => poderUni(2, 1, a)); return p[0] > p[1] && p[1] > p[2] && p[2] < 0.002 ? unicoV([true, false, false, false, false]) : -1; } },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["≈ 0,68", "≈ 0,32", "0,8", "≈ 0,055", "≈ 0,11"];
    return {
      d: "dificil",
      e: "Para testar H0: p = 0,5, rejeita-se H0 se saírem 8 ou mais sucessos em 10 ensaios. Se a probabilidade verdadeira de sucesso for 0,8, qual é o poder do teste?",
      o,
      x: "O poder é P(X ≥ 8) com X binomial de parâmetros 10 e 0,8: 45 · 0,8⁸ · 0,2² + 10 · 0,8⁹ · 0,2 + 0,8¹⁰ ≈ 0,302 + 0,268 + 0,107 ≈ 0,68. Mesmo com p verdadeiro bem acima de 0,5, o teste com só 10 ensaios deixa passar o efeito em cerca de 32% das vezes.\n\n0,32 é β. 0,8 é o p verdadeiro. 0,055 é α, a probabilidade de rejeitar com p = 0,5. E 0,11 é só P(X = 10).",
      v: { i: () => qualNum(soma(dist(10, 0.8).slice(8)), o, 0.005) },
    };
  })(),
  (() => {
    const o = ["36%", "5%", "20%", "4,5%", "45%"];
    return {
      d: "dificil",
      e: "Um laboratório testa 1.000 hipóteses: em 900, H0 é verdadeira, e em 100, falsa. Com α = 5% e poder de 80%, que fração das rejeições, em média, é falsa?",
      o,
      x: "Das 900 hipóteses nulas verdadeiras, espera-se rejeitar 5%, isto é, 45, todas erros do tipo I. Das 100 falsas, o poder de 80% leva a 80 rejeições corretas. Entre as 125 rejeições, 45 são falsas: 45/125 = 36%. Quando a maioria das hipóteses testadas não tem efeito, até um α de 5% gera muitas descobertas falsas.\n\n5% é a taxa de erro entre as H0 verdadeiras, e não entre as rejeições. 20% é β. 4,5% é 45 em 1.000 testes. E 45% lê a contagem de rejeições falsas como porcentagem.",
      v: {
        i: () => {
          const r = sorteador(12), R = 200; let falsas = 0, todas = 0;
          for (let k = 0; k < R; k++) for (let j = 0; j < 1000; j++) { const verd = j < 900, rej = r() < (verd ? 0.05 : 0.8); if (rej) { todas++; if (verd) falsas++; } }
          return qualNum((100 * falsas) / todas, o, 0.02);
        },
      },
    };
  })(),
  (() => {
    const o = ["169", "62", "138", "126", "13"];
    return {
      d: "dificil",
      e: "Deseja-se detectar, com teste bilateral a 5% (z = 1,96) e poder de 90% (z = 1,282), uma diferença de 5 unidades numa variável com σ = 20. Qual é o menor tamanho de amostra, aproximadamente?",
      o,
      x: "A fórmula é n = [(zα/2 + zβ) · σ/δ]² = [(1,96 + 1,282) · 20/5]² = (3,242 · 4)² ≈ 168,2, e arredonda-se para cima: 169. Detectar um efeito de só um quarto do desvio padrão, com poder alto, exige amostra grande.\n\n62 ignora zβ e garante só cerca de 50% de poder. 138 usa 1,645, de um teste unilateral. 126 corresponde a poder de 80%, com zβ = 0,842. E 13 esquece de elevar ao quadrado.",
      v: { i: () => { for (let n = 1; n < 5000; n++) if (poderBil(5, 20 / Math.sqrt(n), 0.05) >= 0.9) return qualNum(n, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["≈ 8%", "5%", "10%", "≈ 2,5%", "≈ 9,75%"];
    return {
      d: "dificil",
      e: "Um pesquisador faz um teste bilateral a 5% com 50 observações e, se não rejeitar, coleta mais 50 e testa de novo com as 100, sempre com o valor crítico 1,96. Se H0 for verdadeira, qual é, aproximadamente, a probabilidade total de rejeitá-la?",
      o,
      x: "As duas estatísticas são correlacionadas, porque a segunda usa as mesmas 50 observações da primeira, com correlação √(50/100) ≈ 0,71. A chance de pelo menos uma passar de 1,96 em valor absoluto fica em cerca de 8%: maior que os 5% nominais, mas menor que os 9,75% de dois testes independentes.\n\n5% ignora a segunda chance de rejeitar. 10% soma os dois α. 2,5% corta α pela metade. E 9,75% = 1 − 0,95² trataria as duas verificações como independentes.",
      v: {
        i: () => {
          const g = gerador(13), R = 100000; let rej = 0;
          for (let k = 0; k < R; k++) { const a = g() * Math.sqrt(50), b = g() * Math.sqrt(50); if (Math.abs(a / Math.sqrt(50)) > z975 || Math.abs((a + b) / 10) > z975) rej++; }
          const t = (100 * rej) / R; return unicoV([Math.abs(t - 8) < 0.6, Math.abs(t - 5) < 0.3, Math.abs(t - 10) < 0.3, Math.abs(t - 2.5) < 0.3, Math.abs(t - 9.75) < 0.3]);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 0,67", "≈ 0,33", "0,2", "1", "0,8"];
    return {
      d: "dificil",
      e: "Um teste tem poder de 0,8 contra um efeito que realmente existe. Em 5 estudos independentes sobre esse efeito, qual é a probabilidade de pelo menos um deles não rejeitar H0?",
      o,
      x: "Cada estudo rejeita H0 com probabilidade 0,8, e os 5 rejeitam juntos com probabilidade 0,8⁵ ≈ 0,33. A chance de pelo menos um falhar, com erro do tipo II, é 1 − 0,33 ≈ 0,67. Resultados não significativos em parte dos estudos são esperados, mesmo quando o efeito é real.\n\n0,33 é a probabilidade de todos rejeitarem. 0,2 é β de um estudo. 1 exageraria: todos podem rejeitar. E 0,8 é o poder de um estudo isolado.",
      v: { i: () => { let p = 0; for (let m = 0; m < 32; m++) { let w = 1, falha = false; for (let j = 0; j < 5; j++) { const ok = (m >> j) & 1; w *= ok ? 0.8 : 0.2; if (!ok) falha = true; } if (falha) p += w; } return qualNum(p, o, 0.005); } },
    };
  })(),
  (() => {
    const o = ["Em 1,5, com α = β ≈ 0,067", "Em 1,645, com α = 0,05", "Em 3, com β = 0,5", "Em 0, com α = 0,5", "Em 1,5, com α = β = 0,5"];
    return {
      d: "dificil",
      e: "Uma estatística tem distribuição normal padrão sob H0 e normal com média 3 e desvio padrão 1 sob H1. Rejeita-se H0 quando ela passa de um valor c. Em que valor de c as probabilidades dos dois erros ficam iguais, e quanto elas valem?",
      o,
      x: "α = P(Z > c) sob H0 e β = P(X < c) sob H1, com X de média 3. Pela simetria das duas normais, os erros se igualam no ponto médio entre as médias, c = 1,5: α = P(Z > 1,5) ≈ 0,067 e β = P(X < 1,5) = P(Z < −1,5) ≈ 0,067.\n\nc = 1,645 dá α = 0,05, mas β ≈ 0,09, diferente. c = 3 deixa β = 0,5. c = 0 deixa α = 0,5. E, em c = 1,5, os erros valem cerca de 0,067, e não 0,5.",
      v: {
        i: () => {
          const c = bissecao((x) => 1 - abaixo(x, 0, 1) - abaixo(x, 3, 1), -5, 8), v = 1 - abaixo(c, 0, 1);
          return unicoV(o.map((t) => { const m = t.match(/^Em ([\d,]+), com α = β [≈=] ([\d,]+)$/); return !!m && Math.abs(lerNum(m[1]) - c) < 1e-6 && Math.abs(lerNum(m[2]) - v) < 0.001; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 17%", "≈ 50%", "≈ 80%", "5%", "≈ 84%"];
    return {
      d: "dificil",
      e: "Dois grupos de 50 pessoas são comparados num teste bilateral a 5%, e a diferença verdadeira entre as médias é de 0,2 desvio padrão. Usando Φ(−0,96) ≈ 0,169, qual é, aproximadamente, o poder do teste?",
      o,
      x: "O erro padrão da diferença, em desvios padrão, é √(1/50 + 1/50) = 0,2, e a diferença verdadeira fica a 0,2/0,2 = 1 erro padrão de zero. O poder é P(Z > 1,96 − 1) + P(Z < −1,96 − 1) ≈ Φ(−0,96) + Φ(−2,96) ≈ 0,169 + 0,002 ≈ 17%. Com efeito pequeno e 50 pessoas por grupo, o estudo quase sempre deixa passar o efeito.\n\n50% é o poder quando o efeito fica exatamente no valor crítico. 80% é a meta usual, que exigiria cerca de 400 pessoas por grupo. 5% é α. E 84% é Φ(1), que esquece o valor crítico.",
      v: {
        i: () => {
          const g = gerador(14), R = 20000, ep = Math.sqrt(2 / 50); let rej = 0;
          for (let k = 0; k < R; k++) { let a = 0, b = 0; for (let j = 0; j < 50; j++) { a += g(0.2); b += g(); } if (Math.abs((a / 50 - b / 50) / ep) > z975) rej++; }
          return qualNum((100 * rej) / R, o, 0.08);
        },
      },
    };
  })(),
  (() => {
    const o = ["Reduz o poder de cada teste", "Não afeta o poder", "Aumenta o poder", "Zera o erro do tipo II", "Só afeta testes unilaterais"];
    return {
      d: "dificil",
      e: "A correção de Bonferroni, ao dividir α pelo número de testes, tem que efeito sobre o poder de cada teste?",
      o,
      x: "Com α menor em cada teste, a região crítica encolhe, e cada teste precisa de evidência mais forte para rejeitar. Isso controla o erro do tipo I do conjunto, mas aumenta β de cada teste. Com 10 testes, passar de α = 0,05 para 0,005 reduz, por exemplo, o poder contra um efeito de 3 erros padrão de cerca de 0,85 para cerca de 0,58 num teste bilateral.\n\nO poder é afetado, e diminui. Ele não aumenta. O erro do tipo II não some; fica maior. E o efeito vale para testes unilaterais e bilaterais.",
      v: { i: () => { const a = poderBil(3, 1, 0.05), b = poderBil(3, 1, 0.005); return Math.abs(a - 0.85) < 0.01 && Math.abs(b - 0.58) < 0.01 ? unicoV([b < a, Math.abs(a - b) < 1e-9, b > a, b === 1, false]) : -1; } },
    };
  })(),
  (() => {
    const o = ["10 falsos negativos e 495 falsos positivos", "90 falsos negativos e 500 falsos positivos", "10 falsos negativos e 5 falsos positivos", "495 falsos negativos e 10 falsos positivos", "1 falso negativo e 50 falsos positivos"];
    return {
      d: "dificil",
      e: "Numa população de 10.000 pessoas com 1% de doentes, um exame de triagem tem 5% de falsos positivos entre os sadios e detecta 90% dos doentes. Quantos falsos negativos e quantos falsos positivos se esperam?",
      o,
      x: "Há 100 doentes e 9.900 sadios. O exame detecta 90% dos doentes, e os 10% restantes, 10 pessoas, são falsos negativos, os erros do tipo II para H0: pessoa sadia. Entre os sadios, 5% dão positivo: 495 falsos positivos, os erros do tipo I. Com a doença rara, os falsos positivos superam muito os verdadeiros positivos, 90.\n\n90 é o número de doentes detectados, e 500 aplica 5% à população inteira. 5 falsos positivos aplicaria 5% aos doentes. A outra alternativa troca as duas contagens. E 1 e 50 usam 1% e 0,5%, sem base nos dados.",
      v: {
        i: () => {
          const r = sorteador(15), R = 100; let fn = 0, fp = 0;
          for (let k = 0; k < R; k++) for (let j = 0; j < 10000; j++) { const doente = j < 100, pos = r() < (doente ? 0.9 : 0.05); if (doente && !pos) fn++; if (!doente && pos) fp++; }
          const [mfn, mfp] = [fn / R, fp / R];
          return unicoV(o.map((t) => { const [a, b] = t.match(/^(\d+) falsos? negativos? e (\d+) falsos? positivos?$/).slice(1).map(Number); return Math.abs(a - mfn) < 1.5 && Math.abs(b - mfp) < 8; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["São iguais", "É maior para μ0 + δ", "É maior para μ0 − δ", "São zero nos dois casos", "São iguais a α nos dois casos"];
    return {
      d: "dificil",
      e: "Num teste bilateral para a média, com distribuição normal, como se comparam os poderes para os valores verdadeiros μ0 + δ e μ0 − δ?",
      o,
      x: "A região crítica do teste bilateral é simétrica em torno de μ0, e a distribuição da estatística também. Deslocar a média verdadeira δ para cima ou δ para baixo produz situações espelhadas, e o poder é o mesmo nos dois casos. É isso que torna o teste bilateral adequado quando qualquer direção de diferença interessa.\n\nNenhum dos lados é favorecido no teste bilateral. O poder não é zero, porque há efeito. E ele só vale α quando δ = 0.",
      v: { i: () => { const cima = poderBil(1.3, 1, 0.05), baixo = poderBil(-1.3, 1, 0.05); return unicoV([Math.abs(cima - baixo) < 1e-12, cima > baixo + 1e-9, baixo > cima + 1e-9, cima === 0, Math.abs(cima - 0.05) < 1e-9]); } },
    };
  })(),
];
