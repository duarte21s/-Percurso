/* Rascunho — Estatística / Probabilidade condicional e independência.

   A explicação usa as fórmulas (definição de P(A|B), regra da
   multiplicação, probabilidade total, Bayes, produto para independentes);
   a conferência monta o espaço amostral com pesos — lista os resultados,
   os ramos da árvore ou a população — e calcula as condicionais filtrando
   esse espaço. Afirmações gerais são testadas em espaços sorteados;
   geometria, por grade fina; aniversários, por simulação com semente. */

import { unicoV, soma, qualNum, qualFracao, sorteador } from "./_estatistica.mjs";
import { produto, combinacoes, permutacoes, intervalo } from "./_contagem.mjs";

export const materia = "estatistica";
export const tema = "Probabilidade condicional e independência";
export const arquivo = "estatistica__probabilidade-condicional-e-independencia";

const dado = intervalo(1, 6);
const moeda = ["C", "K"];
const baralho = produto(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"], ["copas", "ouros", "espadas", "paus"]);
/* espaço com pesos: lista de [peso, resultado] */
const Pw = (esp, ev) => soma(esp.filter(([, r]) => ev(r)).map(([w]) => w)) / soma(esp.map(([w]) => w));
/* condicional: filtra o espaço pela condição e renormaliza */
const Pc = (esp, ev, cond) => Pw(esp.filter(([, r]) => cond(r)), ev);
const unif = (lista) => lista.map((r) => [1, r]);
/* ensaios independentes com probabilidades de sucesso ps; o resultado é o vetor de sucessos */
const ensaios = (ps) => produto(...ps.map(() => [true, false])).map((r) => [r.reduce((w, s, i) => w * (s ? ps[i] : 1 - ps[i]), 1), r]);
/* diagrama de dois eventos pelas regiões [só A, só B, ambos, nenhum] */
const regioes = ([a, b, c, d]) => [[a, "A"], [b, "B"], [c, "AB"], [d, ""]];
const temA = (r) => r.includes("A"), temB = (r) => r.includes("B");
/* população com contagens: [[quantidade, rótulo], ...] */
const populacao = (grupos) => grupos.map(([n, r]) => [n, r]);
const grade = (cond, N = 1000) => { const pts = []; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) pts.push([1, [(i + 0.5) / N, (j + 0.5) / N]]); return pts.filter(([, p]) => cond(p)); };
const TOL = 1e-12;

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["0,3", "0,048", "0,12", "0,52", "≈ 3,33"];
    return {
      d: "facil",
      e: "Sabe-se que P(A ∩ B) = 0,12 e P(B) = 0,4. Qual é a probabilidade condicional de A dado B?",
      o,
      x: "Pela definição, P(A|B) = P(A ∩ B)/P(B) = 0,12/0,4 = 0,3. A ideia é restringir o espaço amostral a B: entre os casos em que B ocorre, que somam 0,4 de probabilidade, a parte em que A também ocorre vale 0,12, o que corresponde a 30% de B.\n\n0,048 multiplica em vez de dividir. 0,12 é a probabilidade da interseção, sem condicionar. 0,52 soma as duas probabilidades. E 3,33 inverte a divisão, 0,4/0,12, e passa de 1.",
      v: { i: () => qualNum(Pc(regioes([0.2, 0.28, 0.12, 0.4]), temA, temB), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["1/3", "1/6", "1/2", "2/3", "1/4"];
    return {
      d: "facil",
      e: "Um dado honesto foi lançado, e sabe-se que o resultado é par. Qual é a probabilidade de ter saído 6?",
      o,
      x: "Saber que o resultado é par reduz o espaço amostral a {2, 4, 6}, três resultados que continuam igualmente prováveis. Entre eles, só o 6 é favorável, e P(6 | par) = 1/3. Pela fórmula: P(6 e par)/P(par) = (1/6)/(1/2) = 1/3.\n\n1/6 ignora a informação de que o resultado é par. 1/2 é a probabilidade de sair par. 2/3 é a probabilidade de sair 2 ou 4, dado que saiu par. E 1/4 não sai do espaço reduzido, que tem três resultados.",
      v: { i: () => qualFracao(Pc(unif(dado), (x) => x === 6, (x) => x % 2 === 0), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "Mais que 1/2, para compensar", "Menos que 1/2, pela sequência", "1/16", "1/32"];
    return {
      d: "facil",
      e: "Uma moeda honesta deu coroa nas quatro últimas jogadas. Qual é a probabilidade de dar cara na próxima jogada?",
      o,
      x: "As jogadas de uma moeda honesta são independentes: a moeda não tem memória, e o resultado anterior não altera o seguinte. Assim, P(cara na quinta | coroa nas quatro primeiras) = P(cara) = 1/2. Das 32 sequências de cinco jogadas, as que começam com quatro coroas são 2, e só uma termina em cara.\n\nEsperar compensação é a falácia do jogador. Esperar a continuação da sequência também não tem base. 1/16 é a probabilidade de quatro coroas seguidas, e 1/32, a de quatro coroas seguidas de uma cara, calculadas antes das jogadas.",
      v: {
        i: () => {
          const p = Pc(unif(produto(moeda, moeda, moeda, moeda, moeda)), (s) => s[4] === "C", (s) => s.slice(0, 4).every((x) => x === "K"));
          return unicoV([Math.abs(p - 1 / 2) < TOL, p > 1 / 2 + TOL, p < 1 / 2 - TOL, Math.abs(p - 1 / 16) < TOL, Math.abs(p - 1 / 32) < TOL]);
        },
      },
    };
  })(),
  (() => {
    const o = ["0,2", "0,9", "0,1", "0,7", "0,45"];
    return {
      d: "facil",
      e: "Num sorteio, A e B são eventos independentes, com P(A) = 0,5 e P(B) = 0,4. Qual é a probabilidade de A e B ocorrerem juntos?",
      o,
      x: "Para eventos independentes, a probabilidade da interseção é o produto: P(A ∩ B) = P(A) · P(B) = 0,5 · 0,4 = 0,2. Essa é a própria definição de independência: saber que B ocorreu não muda a chance de A, e P(A|B) = P(A) = 0,5.\n\n0,9 soma as probabilidades, o que daria a união de eventos disjuntos. 0,1 é a diferença. 0,7 é a probabilidade da união, 0,5 + 0,4 − 0,2. E 0,45 é a média das duas probabilidades.",
      v: { i: () => qualNum(Pw(ensaios([0.5, 0.4]), ([a, b]) => a && b), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["0,81", "0,9", "1,8", "0,99", "0,18"];
    return {
      d: "facil",
      e: "Duas lâmpadas de um corredor funcionam de forma independente, cada uma com probabilidade 0,9 de acender. Qual é a probabilidade de as duas acenderem?",
      o,
      x: "Com eventos independentes, multiplicam-se as probabilidades: 0,9 · 0,9 = 0,81. Mesmo com lâmpadas confiáveis, a chance de todas funcionarem cai a cada lâmpada acrescentada, porque o produto de números menores que 1 diminui.\n\n0,9 é a probabilidade de uma lâmpada só. 1,8 soma as probabilidades e passa de 1. 0,99 é a probabilidade de pelo menos uma acender, 1 − 0,1 · 0,1. E 0,18 é a probabilidade de exatamente uma acender, 2 · 0,9 · 0,1.",
      v: { i: () => qualNum(Pw(ensaios([0.9, 0.9]), ([a, b]) => a && b), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["2/5", "2/9", "5/11", "22/45", "3/5"];
    return {
      d: "facil",
      e: "Numa turma, 12 dos 20 meninos e 10 das 25 meninas praticam esporte. Sorteando uma aluna entre as meninas, qual é a probabilidade de ela praticar esporte?",
      o,
      x: "A informação de que a sorteada é menina restringe o espaço às 25 meninas, das quais 10 praticam esporte: P(esporte | menina) = 10/25 = 2/5. Na tabela de dupla entrada, a condição escolhe a linha, e o total da linha vira o denominador.\n\n2/9 divide pelo total da turma, 10/45. 5/11 inverte a condição: entre os que praticam esporte, a fração de meninas, 10/22. 22/45 é a proporção de praticantes na turma toda. E 3/5 é a proporção entre os meninos.",
      v: { i: () => qualFracao(Pc(populacao([[12, "M+"], [8, "M-"], [10, "F+"], [15, "F-"]]), (r) => r[1] === "+", (r) => r[0] === "F"), o) },
    };
  })(),
  (() => {
    const o = ["40%", "80%", "130%", "62,5%", "10%"];
    return {
      d: "facil",
      e: "Numa cidade, 50% dos adultos dirigem, e 80% dos que dirigem têm seguro do carro. Que porcentagem dos adultos dirige e tem seguro?",
      o,
      x: "Os 80% são uma probabilidade condicional: P(seguro | dirige) = 0,8. Pela regra da multiplicação, P(dirige e tem seguro) = P(dirige) · P(seguro | dirige) = 0,5 · 0,8 = 0,4, ou 40% dos adultos.\n\n80% é a porcentagem entre os que dirigem, e não entre todos os adultos. 130% soma as porcentagens e passa de 100%. 62,5% divide 0,5 por 0,8. E 10% é a porcentagem de adultos que dirigem sem seguro, 0,5 · 0,2.",
      v: { i: () => qualNum(100 * Pw(populacao([[40, "D+"], [10, "D-"], [50, "N"]]), (r) => r === "D+"), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["1/221", "1/169", "1/17", "2/13", "1/13"];
    return {
      d: "facil",
      e: "Duas cartas são retiradas, uma após a outra e sem reposição, de um baralho de 52. Qual é a probabilidade de as duas serem ases?",
      o,
      x: "Pela regra da multiplicação: P(1º ás) = 4/52 e, dado que saiu um ás, restam 3 ases em 51 cartas: P(2º ás | 1º ás) = 3/51. O produto é (4/52)(3/51) = 12/2.652 = 1/221. Sem reposição, a segunda retirada depende da primeira.\n\n1/169 = (1/13)² supõe reposição, com retiradas independentes. 1/17 é só a condicional da segunda carta, 3/51. 2/13 soma 4/52 + 4/52. E 1/13 é a probabilidade de a primeira carta ser ás.",
      v: { i: () => { const pares = baralho.flatMap((a, i) => baralho.filter((_, j) => j !== i).map((b) => [a, b])); return qualFracao(Pw(unif(pares), ([a, b]) => a[0] === "A" && b[0] === "A"), o); } },
    };
  })(),
  (() => {
    const o = ["0", "0,3", "0,12", "0,75", "1"];
    return {
      d: "facil",
      e: "Se A e B não podem ocorrer ao mesmo tempo, com P(A) = 0,3 e P(B) = 0,4, qual é a probabilidade de A ocorrer, sabendo que B ocorreu?",
      o,
      x: "Eventos que não podem ocorrer juntos têm A ∩ B = ∅ e P(A ∩ B) = 0. Pela definição, P(A|B) = P(A ∩ B)/P(B) = 0/0,4 = 0: sabendo que B ocorreu, A fica impossível. Por isso, eventos disjuntos com probabilidades positivas nunca são independentes.\n\n0,3 é P(A) sem condição, o que valeria se A e B fossem independentes. 0,12 multiplica as probabilidades. 0,75 divide 0,3 por 0,4. E 1 trataria A como certo quando B ocorre.",
      v: { i: () => qualNum(Pc(regioes([0.3, 0.4, 0, 0.3]), temA, temB), o) },
    };
  })(),
  (() => {
    const o = ["P(A ∩ B) = P(A) · P(B)", "P(A ∩ B) = 0", "P(A ∪ B) = P(A) + P(B)", "P(A|B) = P(B|A)", "P(A) + P(B) = 1"];
    return {
      d: "facil",
      e: "Qual condição define que dois eventos A e B, de probabilidades positivas, são independentes?",
      o,
      x: "A e B são independentes quando P(A ∩ B) = P(A) · P(B). Com P(B) > 0, isso equivale a P(A|B) = P(A): saber que B ocorreu não altera a probabilidade de A. Os lançamentos de dois dados diferentes são o exemplo típico.\n\nP(A ∩ B) = 0 caracteriza eventos disjuntos, que, com probabilidades positivas, são dependentes. A soma na união também vale só para disjuntos. P(A|B) = P(B|A) só diz que P(A) = P(B), quando a interseção é positiva. E P(A) + P(B) = 1 não tem relação com independência.",
      v: {
        i: () => {
          /* espaço produto: A depende só do 1º ensaio e B só do 2º, logo são independentes por construção */
          const esp = ensaios([0.3, 0.6]), pA = Pw(esp, ([a]) => a), pB = Pw(esp, ([, b]) => b), pAB = Pw(esp, ([a, b]) => a && b), pU = Pw(esp, ([a, b]) => a || b);
          return unicoV([Math.abs(pAB - pA * pB) < TOL, Math.abs(pAB) < TOL, Math.abs(pU - pA - pB) < TOL, Math.abs(pAB / pB - pAB / pA) < TOL, Math.abs(pA + pB - 1) < TOL]);
        },
      },
    };
  })(),
  (() => {
    const o = ["1/260", "1/36", "1/10", "1/26", "1/130"];
    return {
      d: "facil",
      e: "Uma senha é formada por um algarismo, de 0 a 9, seguido de uma letra, entre 26, sorteados de forma independente. Qual é a probabilidade de a senha ser 7A?",
      o,
      x: "O algarismo tem 10 possibilidades e a letra, 26. Como os sorteios são independentes, P(7 e A) = P(7) · P(A) = (1/10)(1/26) = 1/260. Pela contagem, há 10 · 26 = 260 senhas igualmente prováveis, e só uma é 7A.\n\n1/36 soma as possibilidades, 10 + 26, em vez de multiplicar. 1/10 considera só o algarismo, e 1/26, só a letra. E 1/130 conta duas ordens, 7A e A7, embora o formato fixe o algarismo antes da letra.",
      v: { i: () => { const letras = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; return qualFracao(Pw(unif(produto(intervalo(0, 9), letras)), ([n, l]) => n === 7 && l === "A"), o); } },
    };
  })(),
  (() => {
    const o = ["0,49", "0,4", "0,7", "0,09", "0,51"];
    return {
      d: "facil",
      e: "A chance de chover em cada um de dois dias é 0,3, e os dois dias são independentes. Qual é a probabilidade de não chover em nenhum dos dois?",
      o,
      x: "Em cada dia, P(não chover) = 1 − 0,3 = 0,7. Pela independência, P(não chover nos dois) = 0,7 · 0,7 = 0,49. Os complementares de eventos independentes também são independentes, e por isso o produto vale.\n\n0,4 subtrai 0,3 + 0,3 de 1, como se os dias chuvosos não pudessem coincidir. 0,7 considera um dia só. 0,09 é a probabilidade de chover nos dois. E 0,51 é a de chover em pelo menos um, 1 − 0,49.",
      v: { i: () => qualNum(Pw(ensaios([0.3, 0.3]), ([a, b]) => !a && !b), o, 1e-9) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["1/5", "1/6", "1/36", "1/3", "5/36"];
    return {
      d: "media",
      e: "Dois dados são lançados, e sabe-se que a soma foi 8. Qual é a probabilidade de os dois dados mostrarem o mesmo número?",
      o,
      x: "A condição reduz o espaço aos pares com soma 8: (2, 6), (3, 5), (4, 4), (5, 3) e (6, 2), cinco pares igualmente prováveis. Só (4, 4) tem números iguais, e P = 1/5. Pela fórmula: P(iguais e soma 8)/P(soma 8) = (1/36)/(5/36) = 1/5.\n\n1/6 é a probabilidade de números iguais sem a condição. 1/36 é a do par (4, 4) sem condicionar. 1/3 conta os pares sem ordem, {2, 6}, {3, 5} e {4, 4}. E 5/36 é a probabilidade da soma 8.",
      v: { i: () => qualFracao(Pc(unif(produto(dado, dado)), ([a, b]) => a === b, ([a, b]) => a + b === 8), o) },
    };
  })(),
  (() => {
    const o = ["5/11", "1/6", "5/36", "1/2", "6/11"];
    return {
      d: "media",
      e: "Lançam-se dois dados, e alguém avisa que saiu pelo menos um 6. Qual é a probabilidade de a soma ser 10 ou mais?",
      o,
      x: "Os pares com pelo menos um 6 são 11: seis com 6 no primeiro dado, seis com 6 no segundo, menos o (6, 6) contado duas vezes. Entre eles, a soma é 10 ou mais em (4, 6), (5, 6), (6, 6), (6, 5) e (6, 4): cinco pares. Então P = 5/11.\n\n1/6 é a probabilidade de soma 10 ou mais sem a condição, 6/36. 5/36 é a da interseção, sem dividir por P(pelo menos um 6). 1/2 é um palpite. E 6/11 é a probabilidade do complementar, soma menor que 10.",
      v: { i: () => qualFracao(Pc(unif(produto(dado, dado)), ([a, b]) => a + b >= 10, ([a, b]) => a === 6 || b === 6), o) },
    };
  })(),
  (() => {
    const o = ["1/3", "1/2", "1/4", "2/3", "3/4"];
    return {
      d: "media",
      e: "Sabe-se apenas que uma família de dois filhos tem pelo menos um menino. Supondo cada nascimento com chance 1/2 para cada sexo, independente dos outros, qual é a probabilidade de os dois serem meninos?",
      o,
      x: "As quatro sequências igualmente prováveis são menino-menino, menino-menina, menina-menino e menina-menina. Pelo menos um menino exclui só a última e deixa três sequências, das quais uma tem dois meninos: P = 1/3. A informação não diz qual dos filhos é menino, e por isso a resposta não é 1/2.\n\n1/2 seria a resposta se se soubesse que um filho determinado, como o mais velho, é menino. 1/4 ignora a informação. 2/3 é a probabilidade de haver uma menina, dada a condição. E 3/4 é a de haver pelo menos um menino, antes da informação.",
      v: { i: () => qualFracao(Pc(unif(produto(["M", "F"], ["M", "F"])), (s) => s.every((x) => x === "M"), (s) => s.includes("M")), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "1/3", "1/4", "2/3", "1"];
    return {
      d: "media",
      e: "Um casal tem dois filhos, e quem conhece a família informa que o primogênito é menino. Nessas condições, qual é a probabilidade de o casal ter dois meninos?",
      o,
      x: "Saber que o primogênito é menino deixa duas sequências igualmente prováveis: menino-menino e menino-menina. Uma delas tem dois meninos, e P = 1/2. Como os nascimentos são independentes, a pergunta equivale a perguntar o sexo do segundo filho.\n\n1/3 seria a resposta com a informação mais fraca de que pelo menos um filho é menino, sem dizer qual. 1/4 ignora a informação. 2/3 não sai da contagem. E 1 trataria o segundo filho como certamente menino.",
      v: { i: () => qualFracao(Pc(unif(produto(["M", "F"], ["M", "F"])), (s) => s.every((x) => x === "M"), (s) => s[0] === "M"), o) },
    };
  })(),
  (() => {
    const o = ["11/72", "1/6", "11/36", "5/72", "1/12"];
    return {
      d: "media",
      e: "Lança-se uma moeda: com cara, joga-se um dado; com coroa, jogam-se dois dados e somam-se os pontos. Qual é a probabilidade de o resultado final ser 6?",
      o,
      x: "Pela probabilidade total, soma-se sobre os dois ramos: P(6) = P(cara) · P(6 | cara) + P(coroa) · P(6 | coroa) = (1/2)(1/6) + (1/2)(5/36) = 1/12 + 5/72 = 6/72 + 5/72 = 11/72. A soma 6 com dois dados sai em 5 dos 36 pares.\n\n1/6 considera só o ramo de um dado. 11/36 soma as condicionais, 1/6 + 5/36, sem pesar pela moeda. 5/72 é só a contribuição do ramo da coroa, e 1/12, só a do ramo da cara.",
      v: {
        i: () => {
          const esp = [...dado.map((x) => [1 / 2 / 6, x]), ...produto(dado, dado).map(([a, b]) => [1 / 2 / 36, a + b])];
          return qualFracao(Pw(esp, (x) => x === 6), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["62,5%", "40%", "5%", "37,5%", "≈ 71,4%"];
    return {
      d: "media",
      e: "Uma fábrica tem duas máquinas: a máquina A faz 60% das peças, com 2% de defeituosas, e a B faz o restante, com 5% de defeituosas. Uma peça sorteada é defeituosa. Qual é a probabilidade de ela ter vindo de B?",
      o,
      x: "Em 1.000 peças, A faz 600, com 12 defeituosas, e B faz 400, com 20 defeituosas. As defeituosas são 32, e 20 delas vieram de B: P(B | defeituosa) = 20/32 = 62,5%. Pelo teorema de Bayes: (0,4 · 0,05)/(0,6 · 0,02 + 0,4 · 0,05) = 0,02/0,032.\n\n40% é a fração de peças feitas por B, antes de saber do defeito. 5% é a taxa de defeito de B, P(defeituosa | B), a pergunta inversa. 37,5% é a probabilidade de a defeituosa ter vindo de A. E 71,4% compara as taxas, 5/(2 + 5), sem pesar pela produção de cada máquina.",
      v: { i: () => qualNum(100 * Pc(populacao([[12, "A-"], [588, "A+"], [20, "B-"], [380, "B+"]]), (r) => r[0] === "B", (r) => r[1] === "-"), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["Sim: 25% têm o problema nos dois grupos", "Não: há mais casos entre os não fumantes", "Não: os fumantes são minoria", "Sim: porque 20 + 30 = 50", "Não dá para saber sem mais dados"];
    return {
      d: "media",
      e: "Numa pesquisa com 200 pessoas, 80 fumam; 20 dos fumantes e 30 dos 120 não fumantes têm um certo problema respiratório. Nessa amostra, fumar e ter o problema são eventos independentes?",
      o,
      x: "Independência significa que a probabilidade do problema não muda com a condição de fumante. Entre os fumantes, 20/80 = 25%; entre os não fumantes, 30/120 = 25%; e no total, 50/200 = 25%. Também P(fuma e tem o problema) = 20/200 = 0,1 = 0,4 · 0,25. Nesses números, os eventos são independentes.\n\nHá mais casos entre os não fumantes só porque esse grupo é maior. Ser minoria não diz nada sobre dependência. 20 + 30 = 50 é só o total de casos, que não justifica a conclusão. E os dados da tabela bastam para decidir.",
      v: {
        i: () => {
          const pop = populacao([[20, "F+"], [60, "F-"], [30, "N+"], [90, "N-"]]), pf = Pw(pop, (r) => r[0] === "F"), pp = Pw(pop, (r) => r[1] === "+"), pfp = Pw(pop, (r) => r === "F+");
          const indep = Math.abs(pfp - pf * pp) < TOL, taxas = [Pc(pop, (r) => r[1] === "+", (r) => r[0] === "F"), Pc(pop, (r) => r[1] === "+", (r) => r[0] === "N")];
          return unicoV([indep && taxas.every((t) => Math.abs(t - 0.25) < TOL), !indep, !indep, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["1/10", "4/25", "2/5", "3/10", "1/20"];
    return {
      d: "media",
      e: "Uma caixa tem 5 lâmpadas, das quais 2 estão queimadas. Testam-se as lâmpadas uma a uma, sem reposição. Qual é a probabilidade de as duas queimadas aparecerem nos dois primeiros testes?",
      o,
      x: "Pela regra da multiplicação: a primeira testada é queimada com probabilidade 2/5; dado isso, sobra 1 queimada em 4 lâmpadas, e a segunda é queimada com probabilidade 1/4. O produto é (2/5)(1/4) = 1/10. Contando pares: há C(5, 2) = 10 pares de lâmpadas para os dois primeiros testes, e só um é o das queimadas.\n\n4/25 = (2/5)² supõe reposição. 2/5 considera só o primeiro teste. 3/10 é a probabilidade de as duas primeiras serem boas, (3/5)(2/4). E 1/20 exige uma lâmpada queimada específica no primeiro teste, (1/5)(1/4).",
      v: { i: () => qualFracao(Pw(unif(permutacoes(["Q1", "Q2", "B1", "B2", "B3"])), (p) => p[0][0] === "Q" && p[1][0] === "Q"), o) },
    };
  })(),
  (() => {
    const o = ["0,99", "0,81", "0,9", "1,8", "0,18"];
    return {
      d: "media",
      e: "Um servidor guarda os dados em dois discos espelhados, e os dados só se perdem se os dois falharem. Cada disco funciona no período com probabilidade 0,9, de forma independente. Qual é a probabilidade de os dados serem preservados?",
      o,
      x: "Os dados se perdem só se os dois discos falharem, com probabilidade 0,1 · 0,1 = 0,01, pela independência. O complementar dá P(preservados) = 1 − 0,01 = 0,99. Um sistema em paralelo como esse é mais confiável que cada componente isolado.\n\n0,81 é a probabilidade de os dois funcionarem, que seria a exigência de um sistema em série. 0,9 é a de um disco só. 1,8 soma as probabilidades e passa de 1. E 0,18 é a de exatamente um disco funcionar.",
      v: { i: () => qualNum(Pw(ensaios([0.9, 0.9]), ([a, b]) => a || b), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["0,936", "1,8", "0,216", "0,064", "0,6"];
    return {
      d: "media",
      e: "Um arqueiro acerta o alvo com probabilidade 0,6 em cada flecha, de forma independente. Atirando 3 flechas, qual é a probabilidade de acertar pelo menos uma?",
      o,
      x: "O complementar de acertar pelo menos uma é errar as três. Cada erro tem probabilidade 0,4 e, pela independência, P(errar as três) = 0,4³ = 0,064. Então P(pelo menos um acerto) = 1 − 0,064 = 0,936.\n\n1,8 soma as três probabilidades e passa de 1, porque conta várias vezes os casos com mais de um acerto. 0,216 = 0,6³ é a probabilidade de acertar as três. 0,064 é a de errar todas. E 0,6 é a de acertar uma flecha isolada.",
      v: { i: () => qualNum(Pw(ensaios([0.6, 0.6, 0.6]), (s) => s.some(Boolean)), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["Não: P(A ∩ B) = 0, diferente de P(A) · P(B) = 0,1", "Sim: eventos disjuntos são sempre independentes", "Sim: um não influi no outro", "Não: porque P(A) + P(B) < 1", "Só se P(A ∪ B) = 1"];
    return {
      d: "media",
      e: "Num experimento, os eventos A e B são disjuntos, com P(A) = 0,2 e P(B) = 0,5. É correto dizer que A e B são independentes?",
      o,
      x: "Sendo disjuntos, P(A ∩ B) = 0. Para serem independentes, seria preciso P(A ∩ B) = P(A) · P(B) = 0,2 · 0,5 = 0,1, o que não acontece. Além disso, se B ocorre, A fica impossível: P(A|B) = 0, bem diferente de P(A) = 0,2. A disjunção é uma forma forte de dependência.\n\nEventos disjuntos com probabilidades positivas nunca são independentes. A ideia de que um não influi no outro confunde as duas noções. A soma das probabilidades ser menor que 1 é irrelevante. E a condição sobre a união não muda a conclusão.",
      v: {
        i: () => {
          const esp = regioes([0.2, 0.5, 0, 0.3]), pA = Pw(esp, temA), pB = Pw(esp, temB), pAB = Pw(esp, (r) => temA(r) && temB(r)), indep = Math.abs(pAB - pA * pB) < TOL;
          return unicoV([!indep && Math.abs(pA * pB - 0.1) < TOL, indep, indep, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 66,7%", "30%", "40%", "18%", "12%"];
    return {
      d: "media",
      e: "Numa empresa, 40% dos funcionários são engenheiros. Falam alemão 30% dos engenheiros e 10% dos demais. Sorteado um funcionário que fala alemão, qual é a probabilidade de ele ser engenheiro?",
      o,
      x: "Em 100 funcionários: 40 engenheiros, dos quais 12 falam alemão, e 60 demais, dos quais 6 falam. Os que falam alemão são 18, e 12 deles são engenheiros: P(engenheiro | alemão) = 12/18 ≈ 66,7%. A condição troca o denominador para o grupo dos que falam alemão.\n\n30% é P(alemão | engenheiro), a condicional no sentido inverso. 40% é a fração de engenheiros sem a informação. 18% é a fração da empresa que fala alemão. E 12% é a de engenheiros que falam alemão, no total.",
      v: { i: () => qualNum(100 * Pc(populacao([[12, "E+"], [28, "E-"], [6, "O+"], [54, "O-"]]), (r) => r[0] === "E", (r) => r[1] === "+"), o, 0.002) },
    };
  })(),
  (() => {
    const o = ["1/4", "3/52", "1/13", "3/13", "1/12"];
    return {
      d: "media",
      e: "Uma carta foi sorteada de um baralho de 52, e sabe-se que é uma figura: valete, dama ou rei. Qual é a probabilidade de ela ser de copas?",
      o,
      x: "As figuras são 12, três de cada naipe. Entre elas, 3 são de copas, e P(copas | figura) = 3/12 = 1/4. É a mesma probabilidade de copas sem a informação, 13/52 = 1/4: saber que a carta é figura não muda a chance do naipe, e os eventos copas e figura são independentes.\n\n3/52 é a probabilidade de a carta ser uma figura de copas, sem condicionar. 1/13 é a de um valor específico. 3/13 é a de ser figura. E 1/12 é a de uma figura específica, como o rei de copas, dado que é figura.",
      v: { i: () => qualFracao(Pc(unif(baralho), ([, n]) => n === "copas", ([v]) => ["J", "Q", "K"].includes(v)), o) },
    };
  })(),
  (() => {
    const o = ["≈ 33,3%", "10%", "3%", "30%", "≈ 66,7%"];
    return {
      d: "media",
      e: "Numa cidade, 30% dos habitantes têm mais de 60 anos, e 10% têm mais de 80. Sorteado um habitante com mais de 60 anos, qual é a probabilidade de ele ter mais de 80?",
      o,
      x: "Quem tem mais de 80 anos também tem mais de 60: o evento mais de 80 está contido em mais de 60, e a interseção dos dois é o próprio mais de 80, com 10%. Então P(mais de 80 | mais de 60) = 0,10/0,30 = 1/3, ou cerca de 33,3%.\n\n10% é a probabilidade sem a condição. 3% multiplica 10% por 30%, como se os eventos fossem independentes. 30% é a probabilidade de ter mais de 60. E 66,7% é a de ter entre 60 e 80 anos, dado que tem mais de 60.",
      v: { i: () => qualNum(100 * Pc(populacao([[70, 50], [20, 70], [10, 85]]), (idade) => idade > 80, (idade) => idade > 60), o, 0.002) },
    };
  })(),
  (() => {
    const o = ["1/6", "27/125", "3/5", "1/2", "1/30"];
    return {
      d: "media",
      e: "Numa sala de 10 pessoas, 4 usam óculos. Escolhem-se 3 pessoas ao acaso, uma após a outra, sem repetir. Qual é a probabilidade de nenhuma delas usar óculos?",
      o,
      x: "Pela regra da multiplicação: a primeira não usa óculos com probabilidade 6/10; dado isso, a segunda, com 5/9; e a terceira, com 4/8. O produto é (6/10)(5/9)(4/8) = 120/720 = 1/6. Pela contagem: C(6, 3)/C(10, 3) = 20/120 = 1/6.\n\n27/125 = (3/5)³ supõe que as escolhas são independentes, com reposição. 3/5 considera só a primeira pessoa. 1/2 considera só a condicional da terceira, 4/8. E 1/30 é a probabilidade de as três usarem óculos.",
      v: { i: () => { const sala = [..."OOOOSSSSSS"].map((c, i) => c + i); return qualFracao(Pw(unif(combinacoes(sala, 3)), (g) => g.every((p) => p[0] === "S")), o); } },
    };
  })(),
  (() => {
    const o = ["P(A|B) + P(Aᶜ|B) = 1", "P(A|B) + P(A|Bᶜ) = 1", "P(A|B) = P(B|A)", "P(A|B) ≥ P(A)", "P(A|B) ≤ P(A ∩ B)"];
    return {
      d: "media",
      e: "Fixado um evento B com probabilidade positiva, qual relação é verdadeira para todo evento A?",
      o,
      x: "Condicionar a B produz uma nova probabilidade, que cumpre os mesmos axiomas. Em particular, vale a regra do complementar: P(A|B) + P(Aᶜ|B) = [P(A ∩ B) + P(Aᶜ ∩ B)]/P(B) = P(B)/P(B) = 1.\n\nP(A|B) + P(A|Bᶜ) mistura condições diferentes e pode dar qualquer valor entre 0 e 2. P(A|B) = P(B|A) só vale quando P(A) = P(B) ou a interseção é nula. P(A|B) pode ser menor que P(A), quando B desfavorece A. E P(A|B) = P(A ∩ B)/P(B) é maior ou igual a P(A ∩ B), e não menor.",
      v: {
        i: () => {
          /* espaços finitos sorteados; cada relação precisa valer em todos os casos em que está definida */
          const r = sorteador(31), ok = [true, true, true, true, true];
          for (let t = 0; t < 3000; t++) {
            const n = 5, w = Array.from({ length: n }, () => r()), s = soma(w), p = w.map((x) => x / s), P = (E) => soma(E.map((i) => p[i]));
            const A = [...Array(n).keys()].filter(() => r() < 0.5), B = [...Array(n).keys()].filter(() => r() < 0.5);
            const nA = [...Array(n).keys()].filter((i) => !A.includes(i)), nB = [...Array(n).keys()].filter((i) => !B.includes(i));
            const e = (X, Y) => X.filter((i) => Y.includes(i));
            if (P(B) === 0 || P(nB) === 0 || P(A) === 0) continue;
            const c = (X, Y) => P(e(X, Y)) / P(Y);
            if (Math.abs(c(A, B) + c(nA, B) - 1) > 1e-9) ok[0] = false;
            if (Math.abs(c(A, B) + c(A, nB) - 1) > 1e-9) ok[1] = false;
            if (Math.abs(c(A, B) - c(B, A)) > 1e-9) ok[2] = false;
            if (c(A, B) < P(A) - 1e-9) ok[3] = false;
            if (c(A, B) > P(e(A, B)) + 1e-9) ok[4] = false;
          }
          return unicoV(ok);
        },
      },
    };
  })(),
  (() => {
    const o = ["3/5", "1/2", "3/10", "2/5", "1/5"];
    return {
      d: "media",
      e: "Uma urna tem bolas numeradas de 1 a 10. Sabe-se que a bola sorteada tem número par. Qual é a probabilidade de o número ser maior que 5?",
      o,
      x: "A informação reduz o espaço aos pares {2, 4, 6, 8, 10}, cinco bolas igualmente prováveis. As maiores que 5 são 6, 8 e 10, e P(maior que 5 | par) = 3/5. Sem a informação, a probabilidade seria 5/10 = 1/2: saber que a bola é par aumenta a chance de ela ser maior que 5.\n\n1/2 ignora a condição. 3/10 é a probabilidade da interseção sobre o total, sem condicionar. 2/5 esquece o 6, que também é maior que 5. E 1/5 considera só um dos pares maiores que 5.",
      v: { i: () => qualFracao(Pc(unif(intervalo(1, 10)), (x) => x > 5, (x) => x % 2 === 0), o) },
    };
  })(),
  (() => {
    const o = ["3/4", "1/24", "13/12", "1/4", "11/24"];
    return {
      d: "media",
      e: "Três estudantes tentam resolver um problema, de forma independente, com probabilidades de acerto 1/2, 1/3 e 1/4. Qual é a probabilidade de o problema ser resolvido por pelo menos um deles?",
      o,
      x: "O problema fica sem solução só se os três errarem: (1/2)(2/3)(3/4) = 6/24 = 1/4, pela independência. Então P(pelo menos um acerta) = 1 − 1/4 = 3/4.\n\n1/24 é a probabilidade de os três acertarem, (1/2)(1/3)(1/4). 13/12 soma as três probabilidades e passa de 1, porque conta várias vezes os casos com mais de um acerto. 1/4 é a probabilidade de ninguém acertar. E 11/24 é a de exatamente um acertar.",
      v: { i: () => qualFracao(Pw(ensaios([1 / 2, 1 / 3, 1 / 4]), (s) => s.some(Boolean)), o) },
    };
  })(),
  (() => {
    const o = ["Sim: P(A ∩ B) = 1/12 = P(A) · P(B)", "Não: a soma depende do primeiro resultado", "Não: P(A ∩ B) = 1/6", "Sim: porque P(A) = 1/2", "Não: A e B são disjuntos"];
    return {
      d: "media",
      e: "Um dado é lançado duas vezes. Sejam A: o primeiro resultado é par, e B: a soma dos resultados é 7. Os eventos A e B são independentes?",
      o,
      x: "P(A) = 1/2 e P(B) = 6/36 = 1/6. A ∩ B reúne os pares (2, 5), (4, 3) e (6, 1): P(A ∩ B) = 3/36 = 1/12 = (1/2)(1/6). Então A e B são independentes: qualquer que seja o primeiro resultado, há exatamente um segundo resultado que completa a soma 7.\n\nA soma depende do primeiro resultado em geral, mas não o evento soma 7, que tem chance 1/6 em qualquer caso. P(A ∩ B) vale 1/12, e não 1/6. P(A) = 1/2, sozinho, não decide nada. E A e B têm três pares em comum, não são disjuntos.",
      v: {
        i: () => {
          const esp = unif(produto(dado, dado)), A = ([a]) => a % 2 === 0, B = ([a, b]) => a + b === 7;
          const pAB = Pw(esp, (r) => A(r) && B(r)), indep = Math.abs(pAB - Pw(esp, A) * Pw(esp, B)) < TOL;
          return unicoV([indep && Math.abs(pAB - 1 / 12) < TOL, !indep, Math.abs(pAB - 1 / 6) < TOL, false, pAB === 0]);
        },
      },
    };
  })(),
  (() => {
    const o = ["5/9", "2/3", "1/2", "1/4", "4/9"];
    return {
      d: "media",
      e: "A urna I tem 2 bolas brancas e 3 pretas; a urna II tem 4 brancas e 4 pretas. Escolhe-se uma urna ao acaso e, dela, uma bola, que sai branca. Qual é a probabilidade de a bola ter vindo da urna II?",
      o,
      x: "Pela probabilidade total, P(branca) = (1/2)(2/5) + (1/2)(4/8) = 1/5 + 1/4 = 9/20. Pelo teorema de Bayes, P(II | branca) = (1/2)(1/2)/(9/20) = (1/4)/(9/20) = 5/9. A urna II, com proporção maior de brancas, fica mais provável depois de sair branca.\n\n2/3 junta as bolas das duas urnas, 4 das 6 brancas, sem considerar que as urnas têm tamanhos diferentes. 1/2 é a probabilidade antes da informação. 1/4 é P(II e branca), sem dividir por P(branca). E 4/9 é a probabilidade da urna I.",
      v: {
        i: () => {
          const esp = [...[..."BBPPP"].map((c) => [1 / 2 / 5, "I" + c]), ...[..."BBBBPPPP"].map((c) => [1 / 2 / 8, "II" + c])];
          return qualFracao(Pc(esp, (r) => r.startsWith("II"), (r) => r.endsWith("B")), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["Não: depende também da prevalência e dos falsos positivos", "Sim: as duas probabilidades são sempre iguais", "Sim: se o exame é bom, o positivo é confiável", "Não: P(doente | positivo) é sempre 0,05", "Não: P(doente | positivo) é sempre menor que 0,5"];
    return {
      d: "media",
      e: "Um exame detecta 95% dos casos de uma doença, ou seja, P(positivo | doente) = 0,95. Pode-se concluir que P(doente | positivo) = 0,95?",
      o,
      x: "P(positivo | doente) e P(doente | positivo) condicionam a eventos diferentes. Pelo teorema de Bayes, P(doente | positivo) = P(positivo | doente) · P(doente)/P(positivo), e o resultado depende de quantas pessoas têm a doença e de quantos sadios dão positivo. Com 1% de doentes e 5% de falsos positivos, fica perto de 16%; com metade da população doente e os mesmos 5%, chega a 95%.\n\nAs duas probabilidades não são iguais em geral. Um exame sensível pode gerar muitos positivos falsos quando a doença é rara. E o valor de P(doente | positivo) não é fixo: varia com a prevalência e pode ficar acima ou abaixo de 0,5.",
      v: {
        i: () => {
          const vp = (prev, fp) => Pc(populacao([[prev * 0.95, "D+"], [prev * 0.05, "D-"], [(1 - prev) * fp, "S+"], [(1 - prev) * (1 - fp), "S-"]]), (r) => r[0] === "D", (r) => r[1] === "+");
          const vals = [vp(0.01, 0.05), vp(0.5, 0.05), vp(0.2, 0.01)];
          return unicoV([new Set(vals.map((v) => v.toFixed(6))).size > 1, vals.every((v) => Math.abs(v - 0.95) < 1e-9), vals.every((v) => v > 0.9), vals.every((v) => Math.abs(v - 0.05) < 1e-9), vals.every((v) => v < 0.5)]);
        },
      },
    };
  })(),
  (() => {
    const o = ["0,28", "0,18", "0,72", "0,82", "0,1"];
    return {
      d: "media",
      e: "Os eventos A e B são independentes, com P(A) = 0,3 e P(B) = 0,6. Qual é a probabilidade de nenhum dos dois ocorrer?",
      o,
      x: "Se A e B são independentes, os complementares Aᶜ e Bᶜ também são. Então P(nenhum) = P(Aᶜ) · P(Bᶜ) = 0,7 · 0,4 = 0,28. Pela união, dá o mesmo: P(A ∪ B) = 0,3 + 0,6 − 0,18 = 0,72, e 1 − 0,72 = 0,28.\n\n0,18 é a probabilidade de os dois ocorrerem. 0,72 é a de pelo menos um ocorrer. 0,82 é 1 − 0,18, a de não ocorrerem os dois juntos. E 0,1 subtrai 0,3 e 0,6 de 1, como se A e B fossem disjuntos.",
      v: { i: () => qualNum(Pw(ensaios([0.3, 0.6]), ([a, b]) => !a && !b), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["2/5", "1/2", "1/3", "3/5", "5/6"];
    return {
      d: "media",
      e: "Dois dados são lançados, e sabe-se que mostraram números diferentes. Qual é a probabilidade de a soma ser par?",
      o,
      x: "Os pares com números diferentes são 36 − 6 = 30. A soma é par quando os dois números têm a mesma paridade: 3 · 3 = 9 pares com os dois ímpares e 9 com os dois pares, 18 no total, dos quais 6 têm números iguais. Restam 12, e P = 12/30 = 2/5.\n\n1/2 é a probabilidade de soma par sem a condição. 1/3 é 12/36, sem dividir pela probabilidade da condição. 3/5 é a probabilidade de soma ímpar, dado que os números são diferentes. E 5/6 é a probabilidade de os números serem diferentes.",
      v: { i: () => qualFracao(Pc(unif(produto(dado, dado)), ([a, b]) => (a + b) % 2 === 0, ([a, b]) => a !== b), o) },
    };
  })(),
  (() => {
    const o = ["12/25", "3/5", "1/25", "13/25", "2/5"];
    return {
      d: "media",
      e: "Três pessoas escolhem, cada uma ao acaso e de forma independente, um dos 5 andares de um prédio. Qual é a probabilidade de escolherem andares todos diferentes?",
      o,
      x: "A primeira pessoa escolhe qualquer andar. A segunda precisa evitar esse andar, com probabilidade 4/5, e a terceira precisa evitar os dois já escolhidos, com probabilidade 3/5. Pela independência das escolhas, P = 1 · (4/5)(3/5) = 12/25. Pela contagem: 5 · 4 · 3 = 60 casos favoráveis entre 5³ = 125.\n\n3/5 considera só a terceira pessoa. 1/25 é a probabilidade de as três escolherem o mesmo andar. 13/25 é a de pelo menos duas coincidirem. E 2/5 não sai da contagem.",
      v: { i: () => { const and = intervalo(1, 5); return qualFracao(Pw(unif(produto(and, and, and)), (s) => new Set(s).size === 3), o); } },
    };
  })(),
  (() => {
    const o = ["4/17", "1/4", "3/13", "13/51", "1/16"];
    return {
      d: "media",
      e: "Tira-se uma carta de um baralho de 52 e, sem devolvê-la, tira-se outra. Sabendo que a primeira foi de copas, qual é a probabilidade de a segunda também ser de copas?",
      o,
      x: "Depois de uma carta de copas sair, restam 51 cartas, das quais 12 de copas. Então P(2ª copas | 1ª copas) = 12/51 = 4/17, um pouco menos que 1/4, porque o naipe ficou com uma carta a menos.\n\n1/4 é a probabilidade sem a informação, que valeria com reposição. 3/13 = 12/52 tira a carta de copas, mas mantém 52 no total. 13/51 esquece de retirar a carta de copas já sorteada. E 1/16 é a probabilidade de as duas serem de copas com reposição, (1/4)².",
      v: { i: () => { const pares = baralho.flatMap((a, i) => baralho.filter((_, j) => j !== i).map((b) => [a, b])); return qualFracao(Pc(unif(pares), ([, b]) => b[1] === "copas", ([a]) => a[1] === "copas"), o); } },
    };
  })(),
  (() => {
    const o = ["3/7", "3/8", "1/3", "4/7", "1/2"];
    return {
      d: "media",
      e: "Três moedas são jogadas, e um observador conta que apareceu pelo menos uma cara. Qual é a probabilidade de terem aparecido exatamente duas caras?",
      o,
      x: "Das 8 sequências igualmente prováveis, só coroa-coroa-coroa fica excluída pela informação, e sobram 7. Exatamente duas caras ocorrem em 3 delas, com a coroa em primeiro, segundo ou terceiro lugar. Então P = 3/7.\n\n3/8 é a probabilidade de exatamente duas caras sem a condição. 1/3 trata os casos uma, duas ou três caras como equiprováveis. 4/7 é a probabilidade de pelo menos duas caras, dada a condição. E 1/2 é um palpite.",
      v: { i: () => qualFracao(Pc(unif(produto(moeda, moeda, moeda)), (s) => s.filter((x) => x === "C").length === 2, (s) => s.includes("C")), o) },
    };
  })(),
  (() => {
    const o = ["3/17", "3/10", "9/100", "1/3", "51/100"];
    return {
      d: "media",
      e: "Uma urna tem 3 bolas vermelhas e 7 azuis. Sorteiam-se duas bolas, com reposição. Sabendo que pelo menos uma é vermelha, qual é a probabilidade de as duas serem vermelhas?",
      o,
      x: "Com reposição, as retiradas são independentes: P(duas vermelhas) = 0,3 · 0,3 = 0,09 e P(nenhuma vermelha) = 0,7 · 0,7 = 0,49, logo P(pelo menos uma vermelha) = 0,51. Como duas vermelhas já implica pelo menos uma, P(duas | pelo menos uma) = 0,09/0,51 = 9/51 = 3/17 ≈ 0,18.\n\n3/10 é a probabilidade de a segunda ser vermelha, como se a informação fosse sobre a primeira bola. 9/100 é a probabilidade de duas vermelhas sem a condição. 1/3 copia a resposta de problemas com chances iguais para as duas cores. E 51/100 é a probabilidade da própria condição.",
      v: { i: () => { const urna = [..."VVVAAAAAAA"]; return qualFracao(Pc(unif(produto(urna, urna)), (s) => s.every((x) => x === "V"), (s) => s.includes("V")), o); } },
    };
  })(),
  (() => {
    const o = ["3/5", "2/3", "1/2", "2/5", "7/12"];
    return {
      d: "media",
      e: "Uma urna tem 3 bolas brancas e 2 pretas. Sorteia-se uma bola, que é devolvida à urna junto com outra da mesma cor. Em seguida, sorteia-se uma nova bola. Qual é a probabilidade de a segunda bola ser branca?",
      o,
      x: "Pela probabilidade total, separando pela cor da primeira: se foi branca, com probabilidade 3/5, a urna fica com 4 brancas em 6; se foi preta, com probabilidade 2/5, fica com 3 brancas em 6. Então P(2ª branca) = (3/5)(4/6) + (2/5)(3/6) = 12/30 + 6/30 = 18/30 = 3/5, igual à da primeira.\n\n2/3 supõe que a primeira foi branca. 1/2 supõe que a primeira foi preta. 2/5 é a probabilidade de a segunda ser preta. E 7/12 faz a média simples de 2/3 e 1/2, sem pesar pelas chances da primeira retirada.",
      v: {
        i: () => {
          /* árvore: cada bola da urna inicial, depois cada bola da urna modificada */
          const inicial = [..."BBBPP"], esp = inicial.flatMap((c) => { const depois = [...inicial, c]; return depois.map((d) => [1 / inicial.length / depois.length, c + d]); });
          return qualFracao(Pw(esp, (r) => r[1] === "B"), o);
        },
      },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["≈ 84,5%", "98%", "10%", "≈ 15,5%", "≈ 11,6%"];
    return {
      d: "dificil",
      e: "Um filtro marca como spam 98% das mensagens de spam e, por engano, 2% das mensagens legítimas. Sabe-se que 10% das mensagens recebidas são spam. Uma mensagem foi marcada. Qual é a probabilidade de ela ser spam?",
      o,
      x: "Em 1.000 mensagens: 100 spams, dos quais 98 são marcados, e 900 legítimas, das quais 18 são marcadas por engano. As marcadas somam 116, e 98 delas são spam: P(spam | marcada) = 98/116 ≈ 84,5%. É o teorema de Bayes em forma de contagem.\n\n98% é P(marcada | spam), a condicional inversa. 10% é a proporção de spam antes da marcação. 15,5% é a probabilidade de a mensagem marcada ser legítima, 18/116. E 11,6% é a proporção de mensagens marcadas, 116/1.000.",
      v: { i: () => qualNum(100 * Pc(populacao([[98, "S+"], [2, "S-"], [18, "L+"], [882, "L-"]]), (r) => r[0] === "S", (r) => r[1] === "+"), o, 0.002) },
    };
  })(),
  (() => {
    const o = ["2/3", "1/2", "1/3", "1", "3/4"];
    return {
      d: "dificil",
      e: "Num jogo, há três portas e um prêmio atrás de uma delas. O jogador escolhe uma porta; o apresentador, que sabe onde está o prêmio, abre outra porta, sem prêmio, e oferece a troca. Qual é a probabilidade de ganhar quem troca de porta?",
      o,
      x: "Quem troca ganha exatamente quando a primeira escolha estava errada, o que acontece com probabilidade 2/3: nesse caso, o apresentador é obrigado a abrir a única outra porta sem prêmio, e a porta restante tem o prêmio. Quem mantém a escolha ganha só se acertou de início, com probabilidade 1/3.\n\n1/2 supõe que as duas portas fechadas ficam igualmente prováveis, esquecendo que o apresentador escolhe a porta sabendo onde está o prêmio. 1/3 é a chance de quem não troca. 1 exageraria a vantagem da troca. E 3/4 não sai de nenhum caso.",
      v: {
        i: () => {
          /* prêmio e escolha uniformes; o apresentador sorteia entre as portas que pode abrir */
          const esp = [];
          for (const premio of [0, 1, 2]) for (const escolha of [0, 1, 2]) {
            const podeAbrir = [0, 1, 2].filter((p) => p !== premio && p !== escolha);
            for (const aberta of podeAbrir) { const troca = [0, 1, 2].find((p) => p !== escolha && p !== aberta); esp.push([1 / 9 / podeAbrir.length, troca === premio]); }
          }
          return qualFracao(Pw(esp, (ganha) => ganha), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["Independentes aos pares, mas não os três", "Os três são mutuamente independentes", "Nenhum par de eventos é independente", "Só A e B são independentes entre si", "C é impossível quando A e B ocorrem"];
    return {
      d: "dificil",
      e: "Duas moedas honestas são lançadas. Sejam A: a primeira dá cara; B: a segunda dá cara; C: as duas dão o mesmo resultado. O que se pode afirmar sobre A, B e C?",
      o,
      x: "Cada evento tem probabilidade 1/2, e cada interseção de dois tem probabilidade 1/4: A ∩ B, A ∩ C e B ∩ C são, os três, o resultado cara-cara, com 1 dos 4 casos. Então cada par é independente. Mas A ∩ B ∩ C também é cara-cara, com probabilidade 1/4, e não 1/8 = (1/2)³: os três juntos não são independentes.\n\nA independência mútua exigiria também o produto triplo. Todos os pares são independentes, e não só A e B. E se A e B ocorrem, as duas moedas deram cara, e C ocorre com certeza.",
      v: {
        i: () => {
          const esp = unif(produto(moeda, moeda)), A = ([a]) => a === "C", B = ([, b]) => b === "C", C = ([a, b]) => a === b, E = [A, B, C];
          const par = (X, Y) => Math.abs(Pw(esp, (r) => X(r) && Y(r)) - Pw(esp, X) * Pw(esp, Y)) < TOL;
          const pares = [par(A, B), par(A, C), par(B, C)], triplo = Math.abs(Pw(esp, (r) => E.every((f) => f(r))) - E.reduce((m, f) => m * Pw(esp, f), 1)) < TOL;
          return unicoV([pares.every(Boolean) && !triplo, pares.every(Boolean) && triplo, !pares.some(Boolean), pares[0] && !pares[1] && !pares[2], Pw(esp, (r) => A(r) && B(r) && C(r)) === 0]);
        },
      },
    };
  })(),
  (() => {
    const o = ["0,891", "0,729", "0,999", "0,81", "0,99"];
    return {
      d: "dificil",
      e: "Um sistema funciona se o componente A funcionar e, além disso, pelo menos um dos componentes B e C funcionar. Cada componente funciona com probabilidade 0,9, de forma independente. Qual é a probabilidade de o sistema funcionar?",
      o,
      x: "O bloco com B e C, em paralelo, falha só se os dois falharem: 0,1 · 0,1 = 0,01, e funciona com probabilidade 0,99. Em série com A, o sistema funciona com probabilidade 0,9 · 0,99 = 0,891, pela independência entre A e o bloco.\n\n0,729 = 0,9³ exige os três componentes funcionando, como numa série completa. 0,999 trata os três como paralelos. 0,81 exige A e um componente fixo do bloco. E 0,99 é a confiabilidade do bloco paralelo, sem A.",
      v: { i: () => qualNum(Pw(ensaios([0.9, 0.9, 0.9]), ([a, b, c]) => a && (b || c)), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["≈ 50,7%", "≈ 6,3%", "≈ 49,3%", "≈ 5,9%", "≈ 0,3%"];
    return {
      d: "dificil",
      e: "Num grupo de 23 pessoas, com aniversários independentes e distribuídos por igual entre 365 dias, qual é, aproximadamente, a probabilidade de pelo menos duas fazerem aniversário no mesmo dia?",
      o,
      x: "O complementar é todos os aniversários serem diferentes: (365/365)(364/365)(363/365) ⋯ (343/365) ≈ 0,493, multiplicando as probabilidades condicionais de cada nova pessoa evitar os dias já ocupados. Então P(alguma coincidência) ≈ 1 − 0,493 = 0,507. Com 23 pessoas há 253 pares, e cada par pode coincidir, o que explica o valor alto.\n\n6,3% = 23/365 pensa em uma pessoa só. 49,3% é a probabilidade de todos os aniversários serem diferentes. 5,9% é a de alguém fazer aniversário no mesmo dia de uma pessoa específica. E 0,3% é a de duas pessoas específicas coincidirem, 1/365.",
      v: {
        i: () => {
          /* simulação com semente: 200 mil grupos de 23 */
          const r = sorteador(365), G = 200000; let c = 0;
          for (let g = 0; g < G; g++) { const visto = new Uint8Array(365); for (let k = 0; k < 23; k++) { const d = Math.floor(r() * 365); if (visto[d]) { c++; break; } visto[d] = 1; } }
          return qualNum((100 * c) / G, o, 0.01);
        },
      },
    };
  })(),
  (() => {
    const o = ["B no geral, mas A em cada tipo de caso", "A no geral e em cada tipo de caso", "B no geral e em cada tipo de caso", "A no geral, mas B em cada tipo de caso", "Os dois empatam no geral"];
    return {
      d: "dificil",
      e: "O hospital A tratou 100 casos leves, com 90 curas, e 400 graves, com 200 curas. O hospital B tratou 400 casos leves, com 340 curas, e 100 graves, com 40 curas. Como se comparam as taxas de cura?",
      o,
      x: "Por tipo: nos leves, A cura 90% e B, 85%; nos graves, A cura 50% e B, 40%. A é melhor nos dois tipos. No geral, porém, A cura 290/500 = 58% e B, 380/500 = 76%. A inversão, chamada paradoxo de Simpson, vem da composição dos casos: A trata sobretudo casos graves, que têm taxas de cura menores.\n\nA não é melhor no geral. B não é melhor em nenhum tipo de caso. A inversão descrita na outra ordem não corresponde aos números. E as taxas gerais, 58% e 76%, não empatam.",
      v: {
        i: () => {
          const taxa = (curas, casos) => curas / casos, A = { l: taxa(90, 100), g: taxa(200, 400), t: taxa(290, 500) }, B = { l: taxa(340, 400), g: taxa(40, 100), t: taxa(380, 500) };
          const aTipos = A.l > B.l && A.g > B.g, bTipos = B.l > A.l && B.g > A.g;
          return unicoV([B.t > A.t && aTipos, A.t > B.t && aTipos, B.t > A.t && bTipos, A.t > B.t && bTipos, A.t === B.t]);
        },
      },
    };
  })(),
  (() => {
    const o = ["3/4", "1/2", "3/8", "1/4", "2/3"];
    return {
      d: "dificil",
      e: "Um ponto é sorteado com distribuição uniforme no quadrado de vértices (0, 0) e (1, 1). Sabendo que suas coordenadas satisfazem x + y < 1, qual é a probabilidade de x < 1/2?",
      o,
      x: "A condição x + y < 1 é o triângulo abaixo da diagonal, de área 1/2. Dentro dele, a parte com x < 1/2 é um trapézio de área igual à integral de 1 − x entre 0 e 1/2: 1/2 − 1/8 = 3/8. A condicional é a razão das áreas: (3/8)/(1/2) = 3/4. O triângulo é mais largo do lado de x pequeno, e por isso a resposta passa de 1/2.\n\n1/2 ignora a condição e usa o quadrado todo. 3/8 é a área da interseção, sem dividir pela área do triângulo. 1/4 é a condicional de x ≥ 1/2. E 2/3 não sai das áreas.",
      v: { i: () => { const tri = grade(([x, y]) => x + y < 1, 800); return qualFracao(Pw(tri, ([x]) => x < 0.5), o, 5e-3); } },
    };
  })(),
  (() => {
    const o = ["≈ 79,8%", "≈ 16,7%", "≈ 33,3%", "99%", "≈ 2,8%"];
    return {
      d: "dificil",
      e: "Uma doença rara atinge 1 em cada 100 pessoas. Um exame detecta 99% dos doentes, mas dá positivo, por engano, em 5% dos sadios. Uma pessoa faz o exame duas vezes, com resultados independentes dada a sua condição, e dá positivo nas duas. Qual é a probabilidade de ela estar doente?",
      o,
      x: "Em 1.000.000 de pessoas: 10.000 doentes, dos quais 10.000 · 0,99² = 9.801 dão dois positivos, e 990.000 sadios, dos quais 990.000 · 0,05² = 2.475 dão dois positivos. Então P(doente | dois positivos) = 9.801/(9.801 + 2.475) ≈ 79,8%. Com um único positivo, a conta seria 9.900/(9.900 + 49.500) ≈ 16,7%: o segundo exame muda muito a conclusão.\n\n16,7% considera um só exame. 33,3% dobra esse valor, sem justificativa. 99% é a sensibilidade do exame, P(positivo | doente). E 2,8% eleva 16,7% ao quadrado, como se a segunda informação diminuísse a chance.",
      v: {
        i: () => {
          /* árvore: condição da pessoa, depois os dois exames, independentes dada a condição */
          const esp = [];
          for (const [pc, doente] of [[0.01, true], [0.99, false]]) { const ps = doente ? 0.99 : 0.05; for (const [w, r] of ensaios([ps, ps])) esp.push([pc * w, [doente, ...r]]); }
          return qualNum(100 * Pc(esp, ([d]) => d, ([, a, b]) => a && b), o, 0.002);
        },
      },
    };
  })(),
  (() => {
    const o = ["25/216", "1/216", "1/6", "5/36", "91/216"];
    return {
      d: "dificil",
      e: "Um dado honesto é lançado até sair o primeiro 6. Qual é a probabilidade de serem necessários exatamente 3 lançamentos?",
      o,
      x: "São necessários exatamente 3 lançamentos quando os dois primeiros não dão 6 e o terceiro dá. Pela independência dos lançamentos: (5/6)(5/6)(1/6) = 25/216 ≈ 0,116. Cada lançamento a mais multiplica a probabilidade por 5/6, e os valores formam uma progressão geométrica.\n\n1/216 = (1/6)³ exige três 6 seguidos. 1/6 é a probabilidade de um 6 num lançamento qualquer. 5/36 é a probabilidade de o primeiro 6 sair no segundo lançamento. E 91/216 é a de ele sair em até 3 lançamentos, 1 − (5/6)³.",
      v: { i: () => qualFracao(Pw(unif(produto(dado, dado, dado)), ([a, b, c]) => a !== 6 && b !== 6 && c === 6), o) },
    };
  })(),
  (() => {
    const o = ["4", "3", "6", "5", "2"];
    return {
      d: "dificil",
      e: "Com um dado honesto, qual é o menor número de lançamentos para que a probabilidade de sair pelo menos um 6 passe de 50%?",
      o,
      x: "Em n lançamentos independentes, P(nenhum 6) = (5/6)ⁿ, e P(pelo menos um 6) = 1 − (5/6)ⁿ. Com n = 3, (5/6)³ ≈ 0,579, e a probabilidade é só 0,421. Com n = 4, (5/6)⁴ ≈ 0,482, e a probabilidade passa a 0,518, acima de 50%. O menor número é 4.\n\n3 vem de achar que cada lançamento soma 1/6 e que 3 · 1/6 = 1/2 bastaria. 6 imagina que, em 6 lançamentos, o 6 sai com certeza, 6 · 1/6 = 1. 5 também serve, mas não é o menor. E 2 dá só 11/36 ≈ 0,306.",
      v: {
        i: () => {
          /* enumera todas as sequências de n lançamentos, para n = 1, 2, … */
          for (let n = 1; n <= 6; n++) { const seqs = produto(...Array(n).fill(dado)); if (Pw(unif(seqs), (s) => s.includes(6)) > 0.5) return qualNum(n, o); }
          return -1;
        },
      },
    };
  })(),
];
