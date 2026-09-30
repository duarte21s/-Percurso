/* Rascunho — Estatística / Probabilidade: conceitos e axiomas.

   A explicação usa as regras (definição clássica, complementar, regra da
   adição, inclusão-exclusão, razão de áreas); a conferência lista o espaço
   amostral e conta, mede áreas por grade fina, busca exaustivamente as
   distribuições possíveis nos problemas de mínimo e testa as afirmações
   gerais em milhares de espaços finitos sorteados. */

import { unicoV, soma, qualNum, qualFracao, lerNum, lerFracao, sorteador, bissecao } from "./_estatistica.mjs";
import { produto, combinacoes, permutacoes, intervalo } from "./_contagem.mjs";

export const materia = "estatistica";
export const tema = "Probabilidade: conceitos e axiomas";
export const arquivo = "estatistica__probabilidade-conceitos-e-axiomas";

const dado = intervalo(1, 6);
const moeda = ["C", "K"];
const baralho = produto(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"], ["copas", "ouros", "espadas", "paus"]);
/* probabilidade clássica: proporção dos resultados listados que satisfazem o evento */
const prob = (espaco, evento) => espaco.filter(evento).length / espaco.length;
/* fração dos pontos de uma grade fina no quadrado [0, 1]² que satisfazem a condição */
const grade = (cond, N = 1000) => { let c = 0; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (cond((i + 0.5) / N, (j + 0.5) / N)) c++; return c / (N * N); };
/* testa afirmações gerais em espaços finitos sorteados, alguns com pontos de probabilidade zero;
   devolve, para cada afirmação, se ela valeu em todos os casos */
function sempre(afirmacoes, semente = 2026, vezes = 3000) {
  const r = sorteador(semente), ok = afirmacoes.map(() => true);
  for (let t = 0; t < vezes; t++) {
    const n = 5, w = Array.from({ length: n }, () => (r() < 0.2 ? 0 : r())), s = soma(w);
    if (s === 0) continue;
    const p = w.map((x) => x / s), P = (E) => soma([...E].map((i) => p[i]));
    const sorteia = () => new Set([...Array(n).keys()].filter(() => r() < 0.5));
    const A = sorteia(), B = sorteia(), Omega = new Set([...Array(n).keys()]);
    const uniao = (X, Y) => new Set([...X, ...Y]), inter = (X, Y) => new Set([...X].filter((i) => Y.has(i))), comp = (X) => new Set([...Omega].filter((i) => !X.has(i)));
    afirmacoes.forEach((f, k) => { if (!f({ A, B, P, uniao, inter, comp })) ok[k] = false; });
  }
  return ok;
}
const TOL = 1e-12;

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["12", "8", "6", "2", "36"];
    return {
      d: "facil",
      e: "Um experimento consiste em lançar um dado e uma moeda ao mesmo tempo. Quantos resultados tem o espaço amostral?",
      o,
      x: "Cada resultado é um par formado pela face do dado e pela face da moeda. São 6 possibilidades para o dado e 2 para a moeda, e cada face do dado pode vir com cada face da moeda: 6 · 2 = 12 resultados, de (1, cara) e (1, coroa) até (6, cara) e (6, coroa).\n\n8 soma as possibilidades, 6 + 2, em vez de multiplicar. 6 considera só o dado, e 2, só a moeda. E 36 é o espaço amostral de dois dados, 6 · 6.",
      v: { i: () => qualNum(produto(dado, moeda).length, o) },
    };
  })(),
  (() => {
    const o = ["1/3", "1/2", "2/3", "1/6", "5/6"];
    return {
      d: "facil",
      e: "Lança-se um dado honesto de seis faces. Qual é a probabilidade de sair um número maior que 4?",
      o,
      x: "O espaço amostral é {1, 2, 3, 4, 5, 6}, com resultados igualmente prováveis. O evento maior que 4 é {5, 6}, com 2 resultados. Pela definição clássica, P = casos favoráveis/casos possíveis = 2/6 = 1/3.\n\n1/2 inclui o 4, que não é maior que 4. 2/3 é a probabilidade do complementar, sair 4 ou menos. 1/6 conta só o 6. E 5/6 é a probabilidade de não sair 6, que não tem relação com o evento pedido.",
      v: { i: () => qualFracao(prob(dado, (x) => x > 4), o) },
    };
  })(),
  (() => {
    const o = ["0,65", "0,35", "1,35", "0", "0,5"];
    return {
      d: "facil",
      e: "A probabilidade de um evento A é 0,35. Qual é a probabilidade do evento complementar, A não ocorrer?",
      o,
      x: "A e seu complementar Aᶜ são disjuntos e, juntos, formam o espaço amostral inteiro. Pelos axiomas, P(A) + P(Aᶜ) = P(Ω) = 1, e então P(Aᶜ) = 1 − 0,35 = 0,65. Essa regra é uma das consequências mais usadas dos axiomas.\n\n0,35 repete a probabilidade de A. 1,35 soma 1 em vez de subtrair, e passa de 1, o que nenhuma probabilidade pode fazer. 0 trataria A como certo. E 0,5 supõe, sem motivo, dois resultados igualmente prováveis.",
      v: { i: () => { const p = [0.35, 0.4, 0.25], A = new Set([0]); return qualNum(soma(p.filter((_, i) => !A.has(i))), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["1,2", "0", "1", "0,5", "1/3"];
    return {
      d: "facil",
      e: "Qual destes números não pode ser a probabilidade de um evento?",
      o,
      x: "Pelos axiomas, toda probabilidade é maior ou igual a 0, e a do espaço amostral inteiro é 1. Como qualquer evento está contido no espaço amostral, sua probabilidade fica entre 0 e 1, inclusive. O valor 1,2 passa de 1 e não pode ser probabilidade de nada.\n\n0 é a probabilidade do evento impossível, e 1, a do evento certo. 0,5 e 1/3 estão entre 0 e 1 e podem ser probabilidades, como a de sair cara numa moeda honesta ou a de sair 1 ou 2 num dado.",
      v: { i: () => unicoV(o.map((t) => { const v = t.includes("/") ? lerFracao(t) : lerNum(t); return !(v >= 0 && v <= 1); })) },
    };
  })(),
  (() => {
    const o = ["0,5", "0,06", "0,44", "0,1", "0,8"];
    return {
      d: "facil",
      e: "Os eventos A e B são mutuamente exclusivos, com P(A) = 0,2 e P(B) = 0,3. Qual é P(A ∪ B)?",
      o,
      x: "Eventos mutuamente exclusivos não podem ocorrer juntos: A ∩ B = ∅. Pelo axioma da aditividade, a probabilidade da união de eventos disjuntos é a soma das probabilidades: P(A ∪ B) = 0,2 + 0,3 = 0,5.\n\n0,06 multiplica as probabilidades, o que daria a interseção se os eventos fossem independentes, e não disjuntos. 0,44 usa a fórmula da união para eventos independentes, 0,2 + 0,3 − 0,06. 0,1 é a diferença. E 0,8 é a probabilidade de A não ocorrer, 1 − 0,2.",
      v: { i: () => { const p = [0.2, 0.3, 0.5], A = new Set([0]), B = new Set([1]), U = new Set([...A, ...B]); return qualNum(soma([...U].map((i) => p[i])), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["1/2", "5/8", "1/5", "3/10", "1/3"];
    return {
      d: "facil",
      e: "Uma urna tem 3 bolas vermelhas, 5 azuis e 2 verdes, todas iguais ao tato. Sorteando uma bola, qual é a probabilidade de ela ser azul?",
      o,
      x: "Com 10 bolas iguais ao tato, cada uma tem a mesma chance de ser sorteada, e a definição clássica se aplica: P(azul) = 5/10 = 1/2. O que importa é a quantidade de bolas azuis em relação ao total de bolas, e não o número de cores.\n\n5/8 esquece as bolas verdes no total. 1/5 é a proporção de bolas verdes, 2/10. 3/10 é a probabilidade de sair vermelha. E 1/3 trata as três cores como igualmente prováveis, embora tenham quantidades diferentes.",
      v: { i: () => { const urna = [...Array(3).fill("vermelha"), ...Array(5).fill("azul"), ...Array(2).fill("verde")]; return qualFracao(prob(urna, (b) => b === "azul"), o); } },
    };
  })(),
  (() => {
    const o = ["0", "1/36", "1/13", "1/12", "1/11"];
    return {
      d: "facil",
      e: "Dois dados comuns são jogados juntos. Qual é a probabilidade de a soma das faces ser 13?",
      o,
      x: "A maior soma possível é 6 + 6 = 12. Nenhum dos 36 resultados do espaço amostral tem soma 13, e o evento é impossível: sua probabilidade é 0, com 0 casos favoráveis em 36 possíveis. Pelos axiomas, o evento vazio sempre tem probabilidade zero.\n\n1/36 seria a probabilidade de um único resultado, como a soma 12, que só sai com (6, 6). 1/13 e 1/12 não saem do espaço amostral de dois dados. E 1/11 trata as somas de 2 a 12 como igualmente prováveis, o que não são.",
      v: { i: () => qualFracao(prob(produto(dado, dado), ([a, b]) => a + b === 13), o) },
    };
  })(),
  (() => {
    const o = ["2/5", "1/2", "9/20", "7/20", "1/4"];
    return {
      d: "facil",
      e: "Sorteia-se um número inteiro de 1 a 20. Qual é a probabilidade de ele ser primo?",
      o,
      x: "Os primos de 1 a 20 são 2, 3, 5, 7, 11, 13, 17 e 19: oito números. Como os 20 números têm a mesma chance, P = 8/20 = 2/5. O 1 não é primo, porque tem um único divisor positivo, e o 2 é primo, o único par. A contagem cuidadosa dos casos favoráveis é a parte principal da definição clássica.\n\n1/2 supõe metade sem contar. 9/20 conta o 1 como primo. 7/20 esquece o 2, talvez por ser par. E 1/4 conta só cinco primos.",
      v: { i: () => { const primo = (n) => n > 1 && intervalo(2, n - 1).every((d) => n % d !== 0); return qualFracao(prob(intervalo(1, 20), primo), o); } },
    };
  })(),
  (() => {
    const o = ["0,52", "0,5", "0,48", "520", "1,04"];
    return {
      d: "facil",
      e: "Uma moeda foi lançada 1.000 vezes e deu cara 520 vezes. Qual é a estimativa frequentista da probabilidade de cara?",
      o,
      x: "Na interpretação frequentista, a probabilidade é estimada pela frequência relativa em muitas repetições do experimento: 520/1.000 = 0,52. Com mais lançamentos, a frequência relativa tende a se estabilizar perto da probabilidade verdadeira, pela lei dos grandes números.\n\n0,5 é o valor de uma moeda honesta, que os dados não garantem. 0,48 é a frequência de coroas. 520 é a frequência absoluta, e não uma probabilidade. E 1,04 divide 520 por 500, e passa de 1.",
      v: { i: () => { const lances = [...Array(520).fill("C"), ...Array(480).fill("K")]; return qualNum(prob(lances, (x) => x === "C"), o); } },
    };
  })(),
  (() => {
    const o = ["3/4", "1/3", "1/4", "3", "1/2"];
    return {
      d: "facil",
      e: "A chance de um evento é de 3 para 1: para cada 3 casos favoráveis, há 1 desfavorável, todos igualmente prováveis. Qual é a probabilidade do evento?",
      o,
      x: "Em cada grupo de 4 casos igualmente prováveis, 3 são favoráveis. A probabilidade é favoráveis sobre o total: 3/(3 + 1) = 3/4. A razão 3 para 1, chamada de chance, compara favoráveis com desfavoráveis, e não com o total de casos.\n\n1/3 inverte a chance, desfavoráveis sobre favoráveis. 1/4 é a probabilidade de o evento não ocorrer. 3 é a própria chance, que pode passar de 1 e não é uma probabilidade. E 1/2 ignora a informação dada.",
      v: { i: () => qualFracao(prob(["F", "F", "F", "D"], (c) => c === "F"), o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "0,5", "Depende do experimento", "O número de resultados possíveis"];
    return {
      d: "facil",
      e: "Num experimento aleatório qualquer, qual é a probabilidade do espaço amostral inteiro?",
      o,
      x: "Um dos axiomas da probabilidade é P(Ω) = 1: algum resultado do espaço amostral sempre ocorre, e o evento algum resultado acontece é certo. Isso vale para qualquer experimento, com resultados igualmente prováveis ou não.\n\n0 é a probabilidade do evento impossível, o vazio. 0,5 não tem justificativa. A probabilidade do espaço amostral não depende do experimento. E o número de resultados possíveis é uma contagem, que pode passar de 1, e não uma probabilidade.",
      v: {
        i: () => {
          const [umSempre] = sempre([({ P, comp }) => Math.abs(P(comp(new Set())) - 1) < TOL]);
          return unicoV([umSempre, !umSempre, false, !umSempre, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["1/25", "1/200", "1/24", "1/8", "1/2"];
    return {
      d: "facil",
      e: "Numa rifa de 200 bilhetes, dos quais um será sorteado, uma pessoa comprou 8 bilhetes. Qual é a probabilidade de ela ganhar?",
      o,
      x: "Cada um dos 200 bilhetes tem a mesma chance de ser sorteado, e a pessoa ganha se sair qualquer um dos seus 8. Pela definição clássica, P = 8/200 = 1/25, ou 4%. Comprar mais bilhetes aumenta a probabilidade na mesma proporção: com 16 bilhetes, seria 2/25.\n\n1/200 é a probabilidade de um único bilhete. 1/24 divide 8 pelos 192 bilhetes dos outros, e não pelo total. 1/8 olha só para os bilhetes da pessoa. E 1/2 trata ganhar e perder como igualmente prováveis.",
      v: { i: () => qualFracao(prob(intervalo(1, 200), (b) => b <= 8), o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["0,7", "0,9", "0,2", "0,5", "0,3"];
    return {
      d: "media",
      e: "Sabe-se que P(A) = 0,5, P(B) = 0,4 e P(A ∩ B) = 0,2. Qual é a probabilidade de ocorrer A ou B?",
      o,
      x: "Pela regra da adição, P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,2 = 0,7. A interseção é subtraída porque, ao somar P(A) e P(B), os resultados comuns aos dois eventos são contados duas vezes.\n\n0,9 soma sem descontar a interseção, o que só valeria para eventos disjuntos. 0,2 é a probabilidade de A e B juntos. 0,5 é P(A). E 0,3 é a probabilidade de nenhum dos dois ocorrer, 1 − 0,7.",
      v: {
        i: () => {
          /* regiões: só A, só B, ambos, nenhum — escolhidas para reproduzir os dados */
          const p = [0.3, 0.2, 0.2, 0.3], A = new Set([0, 2]), B = new Set([1, 2]), P = (E) => soma([...E].map((i) => p[i]));
          if (Math.abs(P(A) - 0.5) > TOL || Math.abs(P(B) - 0.4) > TOL || Math.abs(P(new Set([2])) - 0.2) > TOL) throw new Error("regiões erradas");
          return qualNum(P(new Set([...A, ...B])), o, 1e-9);
        },
      },
    };
  })(),
  (() => {
    const o = ["51%", "63%", "75%", "12%", "37%"];
    return {
      d: "media",
      e: "Num grupo, 45% das pessoas leem jornal, 30% leem revista e 12% leem os dois. Que porcentagem lê exatamente um dos dois?",
      o,
      x: "Só jornal: 45% − 12% = 33%. Só revista: 30% − 12% = 18%. Exatamente um dos dois: 33% + 18% = 51%. Em fórmula, P(A) + P(B) − 2P(A ∩ B): a interseção sai duas vezes, porque quem lê os dois não lê exatamente um.\n\n63% é a união, que inclui quem lê os dois. 75% soma as porcentagens sem descontar nada. 12% é quem lê os dois. E 37% é quem não lê nenhum, 100% − 63%.",
      v: {
        i: () => {
          const g = [...Array(33).fill("J"), ...Array(18).fill("R"), ...Array(12).fill("JR"), ...Array(37).fill("")];
          if (g.filter((s) => s.includes("J")).length !== 45 || g.filter((s) => s.includes("R")).length !== 30 || g.filter((s) => s === "JR").length !== 12) throw new Error("grupo errado");
          return qualNum(g.filter((s) => s.length === 1).length, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["0,45", "0,7", "0,25", "0,95", "0,3"];
    return {
      d: "media",
      e: "Numa loja, 70% dos clientes pagam à vista, e 25% pagam à vista e levam a garantia estendida. Sorteando um cliente, qual é a probabilidade de ele pagar à vista sem levar a garantia?",
      o,
      x: "Chamando de A pagar à vista e de B levar a garantia, o evento A se divide em duas partes disjuntas: A ∩ B e A ∩ Bᶜ. Pela aditividade, P(A) = P(A ∩ B) + P(A ∩ Bᶜ), e então P(A ∩ Bᶜ) = 0,7 − 0,25 = 0,45. Essa decomposição de um evento em partes disjuntas é a ferramenta básica para usar os axiomas.\n\n0,7 é P(A) inteira, que inclui quem também leva a garantia. 0,25 é a parte de A em que B ocorre. 0,95 soma em vez de subtrair. E 0,3 é a probabilidade de não pagar à vista.",
      v: {
        i: () => {
          /* a decomposição P(A) = P(A ∩ B) + P(A ∩ Bᶜ) testada em espaços sorteados, depois aplicada aos dados */
          const [vale] = sempre([({ A, B, P, inter, comp }) => Math.abs(P(A) - P(inter(A, B)) - P(inter(A, comp(B)))) < TOL]);
          return vale ? qualNum(0.7 - 0.25, o, 1e-9) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["5/36", "1/7", "1/11", "2/9", "1/6"];
    return {
      d: "media",
      e: "No lançamento de dois dados honestos, qual é a probabilidade de a soma dos pontos ser 8?",
      o,
      x: "O espaço amostral tem 6 · 6 = 36 pares ordenados igualmente prováveis. Os pares com soma 8 são (2, 6), (3, 5), (4, 4), (5, 3) e (6, 2): cinco casos, e P = 5/36. A ordem importa: (2, 6) e (6, 2) são resultados diferentes, porque os dados são distinguíveis.\n\n1/7 conta pares sem ordem, 3 entre 21, que não são igualmente prováveis. 1/11 trata as somas de 2 a 12 como equiprováveis. 2/9 é 8/36, que usa a soma como contagem. E 1/6 é a probabilidade da soma 7, a mais provável.",
      v: { i: () => qualFracao(prob(produto(dado, dado), ([a, b]) => a + b === 8), o) },
    };
  })(),
  (() => {
    const o = ["7/8", "3/8", "1/2", "1/8", "3/4"];
    return {
      d: "media",
      e: "Numa brincadeira, três moedas honestas são jogadas de uma vez, e ganha-se um ponto se aparecer ao menos uma cara. Qual é a probabilidade de ganhar o ponto?",
      o,
      x: "O complementar de pelo menos uma cara é nenhuma cara, isto é, três coroas. Entre os 2 · 2 · 2 = 8 resultados igualmente prováveis, só um tem três coroas, e então P(pelo menos uma cara) = 1 − 1/8 = 7/8. Passar ao complementar evita somar os casos de uma, duas e três caras.\n\n3/8 é a probabilidade de exatamente uma cara. 1/2 é a de uma única moeda. 1/8 é a de nenhuma cara. E 3/4 trata 0, 1, 2 e 3 caras como resultados igualmente prováveis.",
      v: { i: () => qualFracao(prob(produto(moeda, moeda, moeda), (s) => s.includes("C")), o) },
    };
  })(),
  (() => {
    const o = ["11/36", "1/3", "1/6", "25/36", "1/36"];
    return {
      d: "media",
      e: "Num jogo de tabuleiro, o jogador lança dois dados e só sai da casa inicial se tirar pelo menos um seis. Qual é a probabilidade de sair na primeira tentativa?",
      o,
      x: "Pelo complementar: nenhum seis ocorre em 5 · 5 = 25 dos 36 pares, e então P(pelo menos um seis) = 1 − 25/36 = 11/36. Contando direto: 6 pares com seis no primeiro dado, 6 com seis no segundo, menos o par (6, 6), contado duas vezes: 6 + 6 − 1 = 11.\n\n1/3 soma 1/6 + 1/6 e conta o (6, 6) duas vezes. 1/6 considera um só dado. 25/36 é a probabilidade de nenhum seis. E 1/36 é a de dois seis.",
      v: { i: () => qualFracao(prob(produto(dado, dado), ([a, b]) => a === 6 || b === 6), o) },
    };
  })(),
  (() => {
    const o = ["4/13", "17/52", "1/52", "1/4", "1/13"];
    return {
      d: "media",
      e: "Sorteia-se uma carta de um baralho comum de 52 cartas. Qual é a probabilidade de ela ser de copas ou um rei?",
      o,
      x: "Copas tem 13 cartas, e há 4 reis, mas o rei de copas está nos dois grupos. Pela regra da adição: 13/52 + 4/52 − 1/52 = 16/52 = 4/13. Contando direto, as cartas favoráveis são as 13 de copas mais os 3 reis dos outros naipes: 16.\n\n17/52 soma sem descontar o rei de copas, que fica contado duas vezes. 1/52 é a probabilidade da interseção, o próprio rei de copas. 1/4 é a probabilidade de copas. E 1/13 é a de um rei.",
      v: { i: () => qualFracao(prob(baralho, ([v, n]) => n === "copas" || v === "K"), o) },
    };
  })(),
  (() => {
    const o = ["0,5", "0", "0,4", "0,1", "0,25"];
    return {
      d: "media",
      e: "O evento A está contido no evento B, e P(B) = 0,4. Qual destes valores é impossível para P(A)?",
      o,
      x: "Se A ⊂ B, então B = A ∪ (B ∩ Aᶜ), com as duas partes disjuntas, e P(B) = P(A) + P(B ∩ Aᶜ) ≥ P(A). Assim, P(A) não pode passar de P(B) = 0,4, e o valor 0,5 é impossível. Essa monotonicidade é uma consequência direta dos axiomas.\n\n0 é possível: A pode ser vazio. 0,4 é possível: A pode ter a mesma probabilidade de B. E 0,1 e 0,25 estão entre 0 e 0,4, e também são possíveis.",
      v: {
        i: () => {
          /* possível se existe espaço {w1, w2, w3} com A = {w1} ⊂ B = {w1, w2}, P(w1) = v, P(w2) = 0,4 − v, P(w3) = 0,6 */
          const possivel = (v) => [v, 0.4 - v, 0.6].every((x) => x >= -TOL);
          return unicoV(o.map((t) => !possivel(lerNum(t))));
        },
      },
    };
  })(),
  (() => {
    const o = ["P(a) = 0,5; P(b) = 0,3; P(c) = 0,2", "P(a) = 0,5; P(b) = 0,4; P(c) = 0,2", "P(a) = 0,6; P(b) = 0,5; P(c) = −0,1", "P(a) = 0,3; P(b) = 0,3; P(c) = 0,3", "P(a) = 1; P(b) = 1; P(c) = 1"];
    return {
      d: "media",
      e: "Num espaço amostral com três resultados, a, b e c, qual destas atribuições de probabilidade é válida?",
      o,
      x: "Uma atribuição é válida quando cada probabilidade é maior ou igual a 0 e a soma sobre todos os resultados é 1, como exigem os axiomas. Em 0,5; 0,3; 0,2, os três valores são não negativos e somam 1. As demais violam alguma dessas condições.\n\n0,5; 0,4; 0,2 soma 1,1, mais que 1. 0,6; 0,5; −0,1 soma 1, mas tem um valor negativo. 0,3; 0,3; 0,3 soma 0,9, menos que 1. E 1; 1; 1 soma 3, embora cada valor, isolado, esteja entre 0 e 1.",
      v: {
        i: () => unicoV(o.map((t) => {
          const v = t.replace(/−/g, "-").match(/= (-?[\d,]+)/g).map((s) => Number(s.slice(2).replace(",", ".")));
          return v.length === 3 && v.every((x) => x >= 0) && Math.abs(soma(v) - 1) < 1e-9;
        })),
      },
    };
  })(),
  (() => {
    const o = ["4/7", "1/2", "3/7", "2", "2/7"];
    return {
      d: "media",
      e: "Um dado viciado dá cada face k com probabilidade proporcional a k: a face 6 é seis vezes mais provável que a face 1. Qual é a probabilidade de sair um número par?",
      o,
      x: "As probabilidades são k · c, com c constante. Pelo axioma P(Ω) = 1, c · (1 + 2 + 3 + 4 + 5 + 6) = 21c = 1, e c = 1/21. Então P(par) = (2 + 4 + 6)/21 = 12/21 = 4/7. Sem resultados equiprováveis, a definição clássica não vale, mas os axiomas continuam valendo.\n\n1/2 ignora o vício. 3/7 é a probabilidade de sair ímpar, 9/21. 2 usa P(k) = k/6 sem normalizar, e passa de 1. E 2/7 é só a probabilidade da face 6, 6/21.",
      v: { i: () => { const c = bissecao((c) => soma(dado.map((k) => c * k)) - 1, 0, 1); return qualFracao(soma(dado.filter((k) => k % 2 === 0).map((k) => c * k)), o, 1e-7); } },
    };
  })(),
  (() => {
    const o = ["0,4", "0,2", "0,6", "0,5", "4"];
    return {
      d: "media",
      e: "Um ponto é escolhido ao acaso, com distribuição uniforme, num segmento de 10 cm. Qual é a probabilidade de ele ficar a menos de 2 cm de uma das extremidades?",
      o,
      x: "Na probabilidade geométrica, a probabilidade é a razão entre medidas: comprimento favorável sobre comprimento total. As regiões favoráveis são os 2 cm iniciais e os 2 cm finais, com 4 cm no total, e P = 4/10 = 0,4.\n\n0,2 considera só uma das extremidades. 0,6 é a probabilidade do complementar, ficar no trecho central de 6 cm. 0,5 supõe metade, sem conta. E 4 é o comprimento favorável, em centímetros, sem dividir pelo comprimento total.",
      v: { i: () => { const N = 1e6; let c = 0; for (let i = 0; i < N; i++) { const x = (10 * (i + 0.5)) / N; if (x < 2 || x > 8) c++; } return qualNum(c / N, o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["π/4", "π/2", "1/4", "π", "3/4"];
    return {
      d: "media",
      e: "Dardos acertam um alvo quadrado de lado 2 em posições totalmente aleatórias. Qual é a probabilidade de um dardo cair dentro do círculo inscrito no quadrado?",
      o,
      x: "A probabilidade é a razão entre áreas: o círculo inscrito tem raio 1 e área π · 1² = π, e o quadrado tem área 2² = 4. Então P = π/4 ≈ 0,785. É um exemplo clássico de probabilidade geométrica, e simulações que sorteiam muitos pontos permitem até estimar π por esse caminho.\n\nπ/2 divide a área do círculo pela metade da área do quadrado. 1/4 esquece o π. π passa de 1 e não pode ser probabilidade. E 3/4 é um palpite próximo, mas sem justificativa.",
      v: { i: () => qualFracao(grade((x, y) => (2 * x - 1) ** 2 + (2 * y - 1) ** 2 < 1), o, 5e-3) },
    };
  })(),
  (() => {
    const o = ["3/4", "1/2", "1/4", "2/3", "5/6"];
    return {
      d: "media",
      e: "Dois dados honestos são lançados, e multiplicam-se os resultados. Qual é a probabilidade de o produto ser par?",
      o,
      x: "O produto é ímpar só quando os dois resultados são ímpares: 3 · 3 = 9 dos 36 pares. Pelo complementar, P(produto par) = 1 − 9/36 = 27/36 = 3/4. Basta um fator par para o produto ser par.\n\n1/2 supõe que par e ímpar são igualmente prováveis também para o produto. 1/4 é a probabilidade de o produto ser ímpar. 2/3 conta, sem ordem, três tipos de par, dois pares, dois ímpares ou um de cada, e acha 2 favoráveis em 3. E 5/6 não sai da contagem.",
      v: { i: () => qualFracao(prob(produto(dado, dado), ([a, b]) => (a * b) % 2 === 0), o) },
    };
  })(),
  (() => {
    const o = ["2/15", "4/25", "2/5", "1/3", "4/15"];
    return {
      d: "media",
      e: "Uma urna tem 4 bolas brancas e 6 pretas. Retiram-se duas bolas ao mesmo tempo, ao acaso. Qual é a probabilidade de as duas serem brancas?",
      o,
      x: "Há C(10, 2) = 45 pares de bolas igualmente prováveis, e C(4, 2) = 6 deles são de duas brancas. Então P = 6/45 = 2/15. Pelo produto, dá o mesmo: 4/10 na primeira e 3/9 na segunda, 12/90 = 2/15. Sem reposição, a segunda retirada tem uma branca e uma bola a menos.\n\n4/25 supõe reposição, (4/10)². 2/5 considera só a primeira bola. 1/3 é a chance da segunda ser branca depois de uma branca. E 4/15 conta pares ordenados no numerador, 12, e não ordenados no denominador, 45.",
      v: { i: () => { const bolas = [..."BBBBPPPPPP"].map((c, i) => c + i); return qualFracao(prob(combinacoes(bolas, 2), (par) => par.every((b) => b[0] === "B")), o); } },
    };
  })(),
  (() => {
    const o = ["0,28", "0,72", "0,3", "0,27", "0,1"];
    return {
      d: "media",
      e: "Um código de 3 algarismos, de 000 a 999, é sorteado ao acaso. Qual é a probabilidade de ele ter pelo menos um algarismo repetido?",
      o,
      x: "Pelo complementar: códigos com os três algarismos distintos são 10 · 9 · 8 = 720 entre 1.000, e P(todos distintos) = 0,72. Então P(pelo menos um repetido) = 1 − 0,72 = 0,28. Contar direto os códigos com repetição exigiria separar vários casos.\n\n0,72 é a probabilidade de todos os algarismos serem distintos. 0,3 soma, para os três pares de posições, a chance 0,1 de dois algarismos coincidirem, e conta mais de uma vez os códigos com três iguais. 0,27 conta só os códigos com exatamente dois algarismos iguais. E 0,1 considera um só par de posições.",
      v: { i: () => qualNum(prob(intervalo(0, 999), (n) => new Set(String(n).padStart(3, "0")).size < 3), o) },
    };
  })(),
  (() => {
    const o = ["Supõe que os dois resultados são equiprováveis", "As probabilidades atribuídas não somam 1", "O espaço amostral tem mais de dois resultados", "Chover é um evento impossível de medir", "Não há falha: o argumento está correto"];
    return {
      d: "media",
      e: "Um aluno argumenta: amanhã pode chover ou não chover, dois resultados possíveis; logo, a probabilidade de chover é 1/2. Qual é a falha do argumento?",
      o,
      x: "A definição clássica, casos favoráveis sobre casos possíveis, só vale quando os resultados são igualmente prováveis. Dividir os resultados em dois não garante isso: num lugar e numa época secos, P(chover) pode ser 0,1, e P(não chover) = 0,9 cumpre todos os axiomas. A probabilidade de chover precisa vir de dados, como a frequência de dias chuvosos em condições parecidas.\n\n1/2 + 1/2 soma 1, e não há violação desse axioma. Chover e não chover formam um espaço amostral legítimo. A chuva pode ser medida. E o argumento tem, sim, uma falha.",
      v: {
        i: () => {
          /* modelos de dois resultados que cumprem os axiomas: se mais de um é válido, a probabilidade de chover não está determinada */
          const validos = [[0.1, 0.9], [0.5, 0.5], [0.8, 0.2]].filter(([a, b]) => a >= 0 && b >= 0 && Math.abs(a + b - 1) < TOL);
          const indeterminada = new Set(validos.map(([a]) => a)).size > 1;
          return unicoV([indeterminada, Math.abs(0.5 + 0.5 - 1) > TOL, false, false, !indeterminada]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Esses valores são impossíveis", "P(A ∪ B) = 1,1", "P(A ∪ B) = 0,8", "P(A ∩ B) = 0,1", "P(A ∪ B) = 0,3"];
    return {
      d: "media",
      e: "Um estudante afirma que dois eventos disjuntos, A e B, têm probabilidades 0,6 e 0,5. O que se pode concluir dessa afirmação?",
      o,
      x: "Para eventos disjuntos, a aditividade dá P(A ∪ B) = P(A) + P(B) = 0,6 + 0,5 = 1,1. Mas nenhuma probabilidade passa de 1, porque A ∪ B está contido no espaço amostral, que tem probabilidade 1. A contradição mostra que não existem dois eventos disjuntos com essas probabilidades.\n\nP(A ∪ B) = 1,1 violaria os axiomas. 0,8 e 0,3 não saem de nenhuma regra. E P(A ∩ B) = 0,1 contraria a hipótese de eventos disjuntos, cuja interseção tem probabilidade 0. Com essas probabilidades, dois eventos quaisquer teriam de se sobrepor em pelo menos 0,1.",
      v: {
        i: () => {
          /* regiões só A, só B e nenhum (disjuntos): a de nenhum ficaria com 1 − 0,6 − 0,5 */
          const existe = 1 - 0.6 - 0.5 >= -TOL;
          return unicoV([!existe, existe, existe, existe, existe]);
        },
      },
    };
  })(),
  (() => {
    const o = ["3/8", "1/4", "1/2", "2/3", "1/8"];
    return {
      d: "media",
      e: "Um casal planeja ter três filhos, e cada nascimento tem probabilidade 1/2 de ser de menino ou de menina. Qual é a probabilidade de nascerem exatamente duas meninas?",
      o,
      x: "Há 2 · 2 · 2 = 8 sequências igualmente prováveis de sexos na ordem de nascimento. As com exatamente duas meninas são as que têm o menino em primeiro, em segundo ou em terceiro lugar: três casos. Então P = 3/8.\n\n1/4 trata os resultados 0, 1, 2 ou 3 meninas como equiprováveis, o que não são: 1 ou 2 meninas acontecem de três maneiras cada, e 0 ou 3, de uma só. 1/2 é a probabilidade de um único nascimento. 2/3 compara duas meninas com três filhos. E 1/8 conta uma só ordem de nascimento.",
      v: { i: () => qualFracao(prob(produto(["F", "M"], ["F", "M"], ["F", "M"]), (s) => s.filter((x) => x === "F").length === 2), o) },
    };
  })(),
  (() => {
    const o = ["2/3", "1", "5/6", "1/3", "1/2"];
    return {
      d: "media",
      e: "No lançamento de um dado, A é sair número par e B é sair número maior que 3. Qual é a probabilidade de ocorrer A ou B?",
      o,
      x: "A = {2, 4, 6} e B = {4, 5, 6}. A união é {2, 4, 5, 6}, com 4 dos 6 resultados, e P(A ∪ B) = 4/6 = 2/3. Pela regra da adição: 3/6 + 3/6 − 2/6 = 4/6, porque 4 e 6 estão nos dois eventos.\n\n1 soma P(A) e P(B) sem descontar a interseção. 5/6 desconta só um dos dois resultados comuns. 1/3 é a probabilidade da interseção, {4, 6}. E 1/2 é P(A), ou P(B), isoladamente.",
      v: { i: () => qualFracao(prob(dado, (x) => x % 2 === 0 || x > 3), o) },
    };
  })(),
  (() => {
    const o = ["Se A ⊂ B, então P(A) ≤ P(B)", "P(A ∪ B) = P(A) + P(B)", "P(A ∩ B) = P(A) · P(B)", "Se P(A) = 0, então A é vazio", "P(A) + P(B) ≤ 1"];
    return {
      d: "media",
      e: "Qual destas afirmações vale para quaisquer eventos A e B de um mesmo espaço amostral?",
      o,
      x: "Se A ⊂ B, B se divide nas partes disjuntas A e B ∩ Aᶜ, e P(B) = P(A) + P(B ∩ Aᶜ) ≥ P(A). A monotonicidade vale sempre, porque decorre só dos axiomas.\n\nA soma simples vale apenas para eventos disjuntos. O produto vale apenas para eventos independentes. Um evento pode ter probabilidade 0 sem ser vazio, como sortear exatamente o ponto 0,5 num segmento. E P(A) + P(B) passa de 1 quando A e B se sobrepõem bastante, como no caso A = B = Ω.",
      v: {
        i: () => unicoV(sempre([
          ({ A, B, P }) => ![...A].every((i) => B.has(i)) || P(A) <= P(B) + TOL,
          ({ A, B, P, uniao }) => Math.abs(P(uniao(A, B)) - P(A) - P(B)) < TOL,
          ({ A, B, P, inter }) => Math.abs(P(inter(A, B)) - P(A) * P(B)) < TOL,
          ({ A, P }) => !(P(A) === 0 && A.size > 0),
          ({ A, B, P }) => P(A) + P(B) <= 1 + TOL,
        ])),
      },
    };
  })(),
  (() => {
    const o = ["1/4", "0", "3/4", "7/12", "1/2"];
    return {
      d: "media",
      e: "Numa escola de 120 alunos, 70 fazem inglês, 50 fazem espanhol e 30 fazem os dois cursos. Sorteando um aluno, qual é a probabilidade de ele não fazer nenhum dos dois?",
      o,
      x: "Os que fazem pelo menos um curso são 70 + 50 − 30 = 90, porque os 30 que fazem os dois foram contados em ambos os grupos. Não fazem nenhum 120 − 90 = 30 alunos, e P = 30/120 = 1/4. Um diagrama com dois círculos que se cruzam separa as quatro regiões: só inglês, só espanhol, os dois e nenhum.\n\n0 subtrai 70 e 50 de 120 sem devolver os 30 contados duas vezes. 3/4 é a probabilidade de fazer pelo menos um curso. 7/12 é a de fazer inglês. E 1/2 é um palpite sem conta.",
      v: {
        i: () => {
          const alunos = [...Array(40).fill("I"), ...Array(20).fill("E"), ...Array(30).fill("IE"), ...Array(30).fill("")];
          if (alunos.filter((s) => s.includes("I")).length !== 70 || alunos.filter((s) => s.includes("E")).length !== 50 || alunos.filter((s) => s === "IE").length !== 30) throw new Error("escola errada");
          return qualFracao(prob(alunos, (s) => s === ""), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["10/21", "1/2", "4/9", "11/21", "2/3"];
    return {
      d: "media",
      e: "De um grupo de 10 meninas e 5 meninos, sorteiam-se duas pessoas diferentes. Qual é a probabilidade de serem uma menina e um menino?",
      o,
      x: "Os pares possíveis são C(15, 2) = 105, todos igualmente prováveis. Os pares com uma menina e um menino são 10 · 5 = 50. Então P = 50/105 = 10/21. Pelo produto, somando as duas ordens: (10/15)(5/14) + (5/15)(10/14) = 100/210 = 10/21.\n\n1/2 supõe que par misto e par do mesmo sexo são igualmente prováveis. 4/9 sorteia com reposição, 2 · (2/3)(1/3). 11/21 é a probabilidade do complementar, duas pessoas do mesmo sexo. E 2/3 é a proporção de meninas no grupo.",
      v: { i: () => { const grupo = [...Array(10).fill("F"), ...Array(5).fill("M")].map((s, i) => s + i); return qualFracao(prob(combinacoes(grupo, 2), ([a, b]) => a[0] !== b[0]), o); } },
    };
  })(),
  (() => {
    const o = ["5/12", "1/2", "1/3", "7/12", "1/6"];
    return {
      d: "media",
      e: "Um dado honesto é lançado duas vezes seguidas. Qual é a probabilidade de o segundo resultado ser maior que o primeiro?",
      o,
      x: "Dos 36 pares, 6 têm resultados iguais. Os outros 30 se dividem, por simetria, entre segundo maior e primeiro maior: 15 para cada lado. Então P = 15/36 = 5/12. A simetria vale porque trocar a ordem dos lançamentos não muda nenhuma probabilidade, e ela evita listar os pares um a um.\n\n1/2 esquece os 6 empates. 1/3 não sai da contagem. 7/12 é a probabilidade de o segundo ser maior ou igual ao primeiro, 21/36. E 1/6 é a probabilidade de empate.",
      v: { i: () => qualFracao(prob(produto(dado, dado), ([a, b]) => b > a), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "1/4", "1/6", "1/3", "1/12"];
    return {
      d: "media",
      e: "Quatro amigos, entre eles Ana e Bia, formam uma fila numa ordem sorteada ao acaso. Qual é a probabilidade de Ana e Bia ficarem lado a lado?",
      o,
      x: "As filas possíveis são 4! = 24, igualmente prováveis. Tratando Ana e Bia como um bloco, há 3! = 6 arranjos do bloco com os outros dois, e 2 ordens dentro do bloco: 12 filas favoráveis, e P = 12/24 = 1/2. Pelas posições: dos 6 pares de lugares, 3 são vizinhos, e 3/6 = 1/2.\n\n1/4 esquece que Ana e Bia podem trocar de posição dentro do bloco, 6/24. 1/6 fixa um só par de lugares vizinhos, como os dois primeiros. 1/3 conta só 2 dos 3 pares de lugares vizinhos. E 1/12 fixa Ana e Bia nos dois primeiros lugares, nessa ordem.",
      v: { i: () => qualFracao(prob(permutacoes(["Ana", "Bia", "Caio", "Davi"]), (f) => Math.abs(f.indexOf("Ana") - f.indexOf("Bia")) === 1), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "1/3", "1/4", "2/3", "3/4"];
    return {
      d: "media",
      e: "Lançam-se duas moedas. Alguém argumenta que há três resultados, duas caras, duas coroas ou uma de cada, e conclui que a chance de uma de cada é 1/3. Qual é a probabilidade correta de sair uma cara e uma coroa?",
      o,
      x: "Os resultados igualmente prováveis são os quatro pares ordenados: cara e cara, cara e coroa, coroa e cara, coroa e coroa. Uma de cada reúne dois deles, e P = 2/4 = 1/2. Os três resultados do argumento não são equiprováveis: uma de cada acontece de duas maneiras, e cada caso com faces iguais, de uma só.\n\n1/3 é o erro do argumento. 1/4 conta só uma das ordens. 2/3 é a probabilidade de pelo menos uma cara contada com o mesmo erro, 2 de 3. E 3/4 é a probabilidade correta de pelo menos uma cara.",
      v: { i: () => qualFracao(prob(produto(moeda, moeda), ([a, b]) => a !== b), o) },
    };
  })(),
  (() => {
    const o = ["18/37", "1/2", "19/37", "1/37", "17/37"];
    return {
      d: "media",
      e: "Uma urna tem 37 bolas numeradas de 0 a 36. Sorteando uma bola, qual é a probabilidade de sair um número par diferente de zero?",
      o,
      x: "Os números pares diferentes de zero são 2, 4, 6, …, 36: são 36/2 = 18 números. Com 37 bolas igualmente prováveis, P = 18/37, um pouco menos que 1/2. O zero, que é par mas foi excluído, faz a diferença entre os dois valores.\n\n1/2 esquece a bola 0 no total, como se houvesse 36 bolas. 19/37 inclui o zero entre os favoráveis. 1/37 é a probabilidade de sair o zero. E 17/37 perde um dos pares na contagem, como o 36.",
      v: { i: () => qualFracao(prob(intervalo(0, 36), (n) => n !== 0 && n % 2 === 0), o) },
    };
  })(),
  (() => {
    const o = ["1/6", "1/4", "1/2", "1/12", "1/24"];
    return {
      d: "media",
      e: "As letras da palavra AMOR são embaralhadas ao acaso. Qual é a probabilidade de o resultado começar e terminar com vogal?",
      o,
      x: "Há 4! = 24 ordens igualmente prováveis. Para começar e terminar com vogal, A e O ocupam as pontas, em 2 ordens, e M e R ficam no meio, em 2 ordens: 4 casos, e P = 4/24 = 1/6. Pelo produto: 2/4 para a primeira letra ser vogal e, depois, 1/3 para a última ser a vogal que sobrou.\n\n1/4 multiplica 1/2 por 1/2, como se a última letra não dependesse da primeira. 1/2 considera só a primeira letra. 1/12 fixa A no começo e O no fim. E 1/24 é a probabilidade de uma única ordem, como AMRO.",
      v: { i: () => qualFracao(prob(permutacoes([..."AMOR"]), (p) => "AO".includes(p[0]) && "AO".includes(p[3])), o) },
    };
  })(),
  (() => {
    const o = ["6/11", "1/3", "1/2", "3/11", "2/11"];
    return {
      d: "media",
      e: "Três eventos A, B e C são mutuamente exclusivos e cobrem todo o espaço amostral. Se P(A) = 2P(B) = 3P(C), quanto vale P(A)?",
      o,
      x: "Chamando P(A) = a, tem-se P(B) = a/2 e P(C) = a/3. Como os eventos são disjuntos e cobrem o espaço amostral, as probabilidades somam 1: a + a/2 + a/3 = 11a/6 = 1, e a = 6/11. Então P(B) = 3/11 e P(C) = 2/11, e a soma confere: 6/11 + 3/11 + 2/11 = 1.\n\n1/3 supõe os três eventos equiprováveis. 1/2 não usa a condição da soma. 3/11 é P(B). E 2/11 é P(C).",
      v: { i: () => qualFracao(bissecao((a) => a + a / 2 + a / 3 - 1, 0, 1), o, 1e-7) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["Entre 0,3 e 0,6", "Entre 0 e 0,6", "Exatamente 0,42", "Entre 0,3 e 0,7", "Entre 0,42 e 0,6"];
    return {
      d: "dificil",
      e: "Sabe-se apenas que P(A) = 0,7 e P(B) = 0,6. Quais são os valores possíveis para P(A ∩ B)?",
      o,
      x: "Pela regra da adição, P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 1,3 − P(A ∪ B). Como P(A ∪ B) ≤ 1, a interseção é pelo menos 0,3. E, por estar contida em B, não passa de P(B) = 0,6. Os extremos são atingidos: 0,3 quando A ∪ B cobre tudo, e 0,6 quando B ⊂ A.\n\nEntre 0 e 0,6 esquece que as probabilidades somam mais que 1 e forçam uma sobreposição. Exatamente 0,42 supõe eventos independentes, o que não foi dito. Entre 0,3 e 0,7 esquece que a interseção está contida em B. E entre 0,42 e 0,6 toma o caso independente como mínimo.",
      v: {
        i: () => {
          /* regiões só A = 0,7 − c, só B = 0,6 − c, ambos = c, nenhum = c − 0,3: varre c e guarda os valores viáveis */
          const viaveis = [];
          for (let k = 0; k <= 2000; k++) { const c = k / 2000, reg = [0.7 - c, 0.6 - c, c, 1 - (0.7 - c) - (0.6 - c) - c]; if (reg.every((x) => x >= -TOL)) viaveis.push(c); }
          const lo = Math.min(...viaveis), hi = Math.max(...viaveis);
          return unicoV(o.map((t) => { const m = t.match(/^Entre ([\d,]+) e ([\d,]+)$/); if (!m) return false; const [a, b] = [m[1], m[2]].map((s) => Number(s.replace(",", "."))); return Math.abs(a - lo) < 1e-9 && Math.abs(b - hi) < 1e-9; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["3/20", "17/20", "1/5", "1/4", "0"];
    return {
      d: "dificil",
      e: "Numa turma de 40 alunos, 20 jogam futebol, 15 vôlei e 12 basquete; 6 jogam futebol e vôlei, 5 futebol e basquete, 4 vôlei e basquete, e 2 jogam os três. Sorteado um aluno, qual é a probabilidade de ele não praticar nenhum dos três?",
      o,
      x: "Pela inclusão-exclusão, os que praticam pelo menos um esporte são 20 + 15 + 12 − 6 − 5 − 4 + 2 = 34. Os 2 que jogam os três são somados três vezes e subtraídos três vezes, e por isso voltam no último termo. Não praticam nenhum 40 − 34 = 6 alunos, e P = 6/40 = 3/20.\n\n17/20 é a probabilidade de praticar pelo menos um. 1/5 esquece de devolver os 2 que jogam os três, e chega a 32. 1/4 subtrai esses 2 em vez de somar, e chega a 30. E 0 soma 20 + 15 + 12 = 47 sem descontar ninguém, o que passa do tamanho da turma.",
      v: {
        i: () => {
          /* monta a turma pelas sete regiões do diagrama e confere todos os dados do enunciado */
          const reg = { F: 11, V: 7, B: 5, FV: 4, FB: 3, VB: 2, FVB: 2 }, turma = [];
          for (const [k, n] of Object.entries(reg)) for (let i = 0; i < n; i++) turma.push(k);
          while (turma.length < 40) turma.push("");
          const conta = (...letras) => turma.filter((s) => letras.every((l) => s.includes(l))).length;
          if (conta("F") !== 20 || conta("V") !== 15 || conta("B") !== 12 || conta("F", "V") !== 6 || conta("F", "B") !== 5 || conta("V", "B") !== 4 || conta("F", "V", "B") !== 2 || turma.length !== 40) throw new Error("turma não confere");
          return qualFracao(prob(turma, (s) => s === ""), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["7/16", "1/4", "1/2", "9/16", "1/16"];
    return {
      d: "dificil",
      e: "Duas pessoas combinam de se encontrar entre 12h e 13h; cada uma chega num instante ao acaso desse intervalo, uniforme e independente da outra, e espera no máximo 15 minutos. Qual é a probabilidade de se encontrarem?",
      o,
      x: "Representando os instantes de chegada, em horas depois das 12h, por x e y no quadrado [0, 1] × [0, 1], elas se encontram quando |x − y| ≤ 1/4. A região complementar são dois triângulos de catetos 3/4, com área total 2 · (1/2)(3/4)² = 9/16. Então P = 1 − 9/16 = 7/16.\n\n1/4 usa só a razão 15/60, sem geometria. 1/2 dobra essa razão. 9/16 é a probabilidade de não se encontrarem. E 1/16 é a área de um quadradinho de lado 1/4, que não corresponde a nenhum evento do problema.",
      v: { i: () => qualFracao(grade((x, y) => Math.abs(x - y) <= 0.25), o, 5e-3) },
    };
  })(),
  (() => {
    const o = ["0,7", "0,729", "0,9", "0", "0,8"];
    return {
      d: "dificil",
      e: "Três eventos têm, cada um, probabilidade 0,9. Qual é o menor valor possível da probabilidade de os três ocorrerem juntos?",
      o,
      x: "O complementar de os três ocorrerem é pelo menos um falhar, a união dos três complementares, cada um com probabilidade 0,1. Pela desigualdade de Boole, essa união tem probabilidade no máximo 0,1 + 0,1 + 0,1 = 0,3. Logo, P(A ∩ B ∩ C) ≥ 1 − 0,3 = 0,7, e o valor 0,7 é atingido quando os três complementares são disjuntos.\n\n0,729 = 0,9³ supõe independência, que não foi dada. 0,9 é o máximo, quando os três eventos coincidem. 0 ignora a restrição imposta pelas probabilidades altas. E 0,8 usa só dois dos complementares.",
      v: {
        i: () => {
          /* busca exaustiva: as oito regiões do diagrama em múltiplos de 0,05 (20 unidades), com cada evento somando 18 unidades */
          let menor = Infinity;
          const r = new Array(8).fill(0);
          const busca = (k, resto) => {
            if (k === 7) {
              r[7] = resto;
              if ([0, 1, 2].every((b) => r.reduce((s, x, m) => s + ((m >> b) & 1 ? x : 0), 0) === 18)) menor = Math.min(menor, r[7]);
              return;
            }
            for (let x = 0; x <= resto; x++) { r[k] = x; busca(k + 1, resto - x); }
          };
          busca(0, 20);
          return qualNum(menor / 20, o, 1e-9);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 5,2%", "6,25%", "≈ 1,6%", "25%", "≈ 1,3%"];
    return {
      d: "dificil",
      e: "Retiram-se, ao mesmo tempo, 3 cartas de um baralho de 52. Qual é a probabilidade de as três serem do mesmo naipe?",
      o,
      x: "Há C(52, 3) = 22.100 trincas igualmente prováveis. Para cada naipe, há C(13, 3) = 286 trincas, e os 4 naipes dão 1.144 casos. P = 1.144/22.100 ≈ 0,052, ou cerca de 5,2%. Pelo produto: a primeira carta é livre, e as outras duas precisam acompanhar o naipe dela, (12/51)(11/50) ≈ 0,052.\n\n6,25% é (1/4)², que supõe reposição das cartas. 1,6% é (1/4)³, que fixa um naipe e ainda supõe reposição. 25% é a probabilidade de uma única carta ser de um naipe dado. E 1,3% fixa um naipe específico, como copas, sem somar os outros três.",
      v: { i: () => qualNum(100 * prob(combinacoes(baralho, 3), (t) => t[0][1] === t[1][1] && t[1][1] === t[2][1]), o, 0.01) },
    };
  })(),
  (() => {
    const o = ["3/8", "5/8", "1/24", "81/256", "1/4"];
    return {
      d: "dificil",
      e: "Quatro cartas são colocadas ao acaso em quatro envelopes já endereçados, uma em cada. Qual é a probabilidade de nenhuma carta ir para o envelope certo?",
      o,
      x: "Pela inclusão-exclusão, o número de distribuições com pelo menos uma carta certa é 4 · 3! − 6 · 2! + 4 · 1! − 1 · 0! = 24 − 12 + 4 − 1 = 15. Das 4! = 24 distribuições, sobram 24 − 15 = 9 sem nenhum acerto, e P = 9/24 = 3/8.\n\n5/8 é a probabilidade de pelo menos um acerto. 1/24 é a de todas certas. 81/256 = (3/4)⁴ trata os envelopes como independentes, o que não são, porque cada carta ocupa um envelope. E 1/4 é a probabilidade de uma carta específica ir para o envelope certo.",
      v: { i: () => qualFracao(prob(permutacoes([0, 1, 2, 3]), (p) => p.every((x, i) => x !== i)), o) },
    };
  })(),
  (() => {
    const o = ["0,266", "0,299", "0,734", "0,033", "0,5"];
    return {
      d: "dificil",
      e: "Sorteia-se um inteiro de 1 a 1.000. Qual é a probabilidade de ele não ser divisível por 2, nem por 3, nem por 5?",
      o,
      x: "Pela inclusão-exclusão, os divisíveis por pelo menos um dos três são 500 + 333 + 200 − 166 − 100 − 66 + 33 = 734, usando as partes inteiras de 1.000/2, 1.000/3, 1.000/5, 1.000/6, 1.000/10, 1.000/15 e 1.000/30. Sobram 1.000 − 734 = 266, e P = 266/1.000 = 0,266.\n\n0,299 esquece o último termo, os 33 múltiplos de 30. 0,734 é a probabilidade de ser divisível por pelo menos um dos três. 0,033 é a de ser múltiplo de 30, divisível pelos três. E 0,5 considera só o 2.",
      v: { i: () => qualNum(prob(intervalo(1, 1000), (n) => n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0), o) },
    };
  })(),
  (() => {
    const o = ["20%", "30%", "18%", "40%", "10%"];
    return {
      d: "dificil",
      e: "Numa cidade, 60% dos domicílios têm internet fixa, 70% têm internet móvel e 90% têm pelo menos uma das duas. Que porcentagem tem apenas internet fixa?",
      o,
      x: "Primeiro, a interseção: pela regra da adição, P(fixa e móvel) = 60% + 70% − 90% = 40%. Os domicílios só com fixa são os que têm fixa, menos os que têm as duas: 60% − 40% = 20%. Conferindo: só móvel dá 30%, e 20% + 40% + 30% = 90%, a união dada.\n\n30% é a porcentagem só com móvel. 18% multiplica 60% por 30%, supondo independência sem motivo. 40% é a porcentagem com as duas. E 10% é a de domicílios sem nenhuma das duas.",
      v: {
        i: () => {
          /* procura, entre 100 domicílios, a divisão em regiões que reproduz os três dados */
          const sol = intervalo(0, 100).map((c) => ({ c, a: 60 - c, b: 70 - c })).filter(({ a, b, c }) => a >= 0 && b >= 0 && a + b + c === 90);
          return sol.length === 1 ? qualNum(sol[0].a, o) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["P(A) + P(Aᶜ ∩ B)", "P(A) + P(B)", "P(A) + P(B) − P(A) · P(B)", "1 − P(Aᶜ) · P(Bᶜ)", "P(A ∩ B) + P(Aᶜ ∩ Bᶜ)"];
    return {
      d: "dificil",
      e: "Para quaisquer eventos A e B, qual destas expressões é sempre igual a P(A ∪ B)?",
      o,
      x: "A união se divide em duas partes disjuntas: A inteiro e a parte de B fora de A, Aᶜ ∩ B. Pela aditividade, P(A ∪ B) = P(A) + P(Aᶜ ∩ B), sem nenhuma hipótese sobre A e B. É a regra da adição escrita de outra forma, já que P(Aᶜ ∩ B) = P(B) − P(A ∩ B).\n\nP(A) + P(B) vale só para eventos disjuntos. As duas expressões com produtos, P(A) + P(B) − P(A) · P(B) e 1 − P(Aᶜ) · P(Bᶜ), valem só para eventos independentes. E P(A ∩ B) + P(Aᶜ ∩ Bᶜ) é a probabilidade de A e B ocorrerem ou falharem juntos, e não a da união.",
      v: {
        i: () => unicoV(sempre([
          ({ A, B, P, uniao, inter, comp }) => Math.abs(P(uniao(A, B)) - P(A) - P(inter(comp(A), B))) < TOL,
          ({ A, B, P, uniao }) => Math.abs(P(uniao(A, B)) - P(A) - P(B)) < TOL,
          ({ A, B, P, uniao }) => Math.abs(P(uniao(A, B)) - (P(A) + P(B) - P(A) * P(B))) < TOL,
          ({ A, B, P, uniao, comp }) => Math.abs(P(uniao(A, B)) - (1 - P(comp(A)) * P(comp(B)))) < TOL,
          ({ A, B, P, uniao, inter, comp }) => Math.abs(P(uniao(A, B)) - P(inter(A, B)) - P(inter(comp(A), comp(B)))) < TOL,
        ], 99)),
      },
    };
  })(),
  (() => {
    const o = ["A frequência tende a 1/2, e a diferença tende a crescer", "A frequência tende a 1/2, e a diferença tende a zero", "As duas tendem a zero", "A frequência oscila sem se estabilizar", "A frequência tende a 1/2, e a diferença fica constante"];
    return {
      d: "dificil",
      e: "Uma moeda honesta é lançada um número muito grande de vezes. O que tende a acontecer com a frequência relativa de caras e com a diferença absoluta entre o número de caras e o de coroas?",
      o,
      x: "Pela lei dos grandes números, a frequência relativa de caras se aproxima de 1/2. A diferença absoluta entre caras e coroas, porém, costuma crescer, na ordem da raiz quadrada do número de lançamentos: com 10.000 lançamentos, diferenças de dezenas são comuns. Ela cresce mais devagar que o número de lançamentos, e por isso, dividida por ele, vai a zero.\n\nA ideia de que a diferença tende a zero, ou de que a moeda compensa desvios passados, é a falácia do jogador. A frequência não tende a zero, nem oscila sem se estabilizar. E a diferença não fica constante: ela varia e, em média, aumenta.",
      v: {
        i: () => {
          /* 40 sequências simuladas para cada tamanho: média de |f − 1/2| e de |caras − coroas| */
          const r = sorteador(4242), mede = (n) => { let df = 0, dd = 0; for (let t = 0; t < 40; t++) { let c = 0; for (let i = 0; i < n; i++) if (r() < 0.5) c++; df += Math.abs(c / n - 0.5); dd += Math.abs(2 * c - n); } return [df / 40, dd / 40]; };
          const [f1, d1] = mede(100), [f2, d2] = mede(10000);
          const freqMeio = f2 < f1 / 3, difCresce = d2 > 3 * d1, difZero = d2 < d1 / 3, difConst = !difCresce && !difZero;
          return unicoV([freqMeio && difCresce, freqMeio && difZero, false, !freqMeio, freqMeio && difConst]);
        },
      },
    };
  })(),
];
