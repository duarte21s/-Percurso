/* Probabilidade: conceitos e axiomas (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__probabilidade-conceitos-e-axiomas.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__probabilidade-conceitos-e-axiomas.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Um experimento consiste em lançar um dado e uma moeda ao mesmo tempo. Quantos resultados tem o espaço amostral?",
    opcoes: [
      "8",
      "12",
      "6",
      "2",
      "36",
    ],
    correta: 1,
    explicacao:
      "Cada resultado é um par formado pela face do dado e pela face da moeda. São 6 possibilidades para o dado e 2 para a moeda, e cada face do dado pode vir com cada face da moeda: 6 · 2 = 12 resultados, de (1, cara) e (1, coroa) até (6, cara) e (6, coroa).\n\n8 soma as possibilidades, 6 + 2, em vez de multiplicar. 6 considera só o dado, e 2, só a moeda. E 36 é o espaço amostral de dois dados, 6 · 6.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Lança-se um dado honesto de seis faces. Qual é a probabilidade de sair um número maior que 4?",
    opcoes: [
      "1/2",
      "2/3",
      "1/3",
      "1/6",
      "5/6",
    ],
    correta: 2,
    explicacao:
      "O espaço amostral é {1, 2, 3, 4, 5, 6}, com resultados igualmente prováveis. O evento maior que 4 é {5, 6}, com 2 resultados. Pela definição clássica, P = casos favoráveis/casos possíveis = 2/6 = 1/3.\n\n1/2 inclui o 4, que não é maior que 4. 2/3 é a probabilidade do complementar, sair 4 ou menos. 1/6 conta só o 6. E 5/6 é a probabilidade de não sair 6, que não tem relação com o evento pedido.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "A probabilidade de um evento A é 0,35. Qual é a probabilidade do evento complementar, A não ocorrer?",
    opcoes: [
      "0,65",
      "0,35",
      "1,35",
      "0",
      "0,5",
    ],
    correta: 0,
    explicacao:
      "A e seu complementar Aᶜ são disjuntos e, juntos, formam o espaço amostral inteiro. Pelos axiomas, P(A) + P(Aᶜ) = P(Ω) = 1, e então P(Aᶜ) = 1 − 0,35 = 0,65. Essa regra é uma das consequências mais usadas dos axiomas.\n\n0,35 repete a probabilidade de A. 1,35 soma 1 em vez de subtrair, e passa de 1, o que nenhuma probabilidade pode fazer. 0 trataria A como certo. E 0,5 supõe, sem motivo, dois resultados igualmente prováveis.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Qual destes números não pode ser a probabilidade de um evento?",
    opcoes: [
      "0",
      "1",
      "0,5",
      "1/3",
      "1,2",
    ],
    correta: 4,
    explicacao:
      "Pelos axiomas, toda probabilidade é maior ou igual a 0, e a do espaço amostral inteiro é 1. Como qualquer evento está contido no espaço amostral, sua probabilidade fica entre 0 e 1, inclusive. O valor 1,2 passa de 1 e não pode ser probabilidade de nada.\n\n0 é a probabilidade do evento impossível, e 1, a do evento certo. 0,5 e 1/3 estão entre 0 e 1 e podem ser probabilidades, como a de sair cara numa moeda honesta ou a de sair 1 ou 2 num dado.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Os eventos A e B são mutuamente exclusivos, com P(A) = 0,2 e P(B) = 0,3. Qual é P(A ∪ B)?",
    opcoes: [
      "0,06",
      "0,44",
      "0,5",
      "0,1",
      "0,8",
    ],
    correta: 2,
    explicacao:
      "Eventos mutuamente exclusivos não podem ocorrer juntos: A ∩ B = ∅. Pelo axioma da aditividade, a probabilidade da união de eventos disjuntos é a soma das probabilidades: P(A ∪ B) = 0,2 + 0,3 = 0,5.\n\n0,06 multiplica as probabilidades, o que daria a interseção se os eventos fossem independentes, e não disjuntos. 0,44 usa a fórmula da união para eventos independentes, 0,2 + 0,3 − 0,06. 0,1 é a diferença. E 0,8 é a probabilidade de A não ocorrer, 1 − 0,2.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Uma urna tem 3 bolas vermelhas, 5 azuis e 2 verdes, todas iguais ao tato. Sorteando uma bola, qual é a probabilidade de ela ser azul?",
    opcoes: [
      "5/8",
      "1/5",
      "3/10",
      "1/2",
      "1/3",
    ],
    correta: 3,
    explicacao:
      "Com 10 bolas iguais ao tato, cada uma tem a mesma chance de ser sorteada, e a definição clássica se aplica: P(azul) = 5/10 = 1/2. O que importa é a quantidade de bolas azuis em relação ao total de bolas, e não o número de cores.\n\n5/8 esquece as bolas verdes no total. 1/5 é a proporção de bolas verdes, 2/10. 3/10 é a probabilidade de sair vermelha. E 1/3 trata as três cores como igualmente prováveis, embora tenham quantidades diferentes.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Dois dados comuns são jogados juntos. Qual é a probabilidade de a soma das faces ser 13?",
    opcoes: [
      "1/36",
      "0",
      "1/13",
      "1/12",
      "1/11",
    ],
    correta: 1,
    explicacao:
      "A maior soma possível é 6 + 6 = 12. Nenhum dos 36 resultados do espaço amostral tem soma 13, e o evento é impossível: sua probabilidade é 0, com 0 casos favoráveis em 36 possíveis. Pelos axiomas, o evento vazio sempre tem probabilidade zero.\n\n1/36 seria a probabilidade de um único resultado, como a soma 12, que só sai com (6, 6). 1/13 e 1/12 não saem do espaço amostral de dois dados. E 1/11 trata as somas de 2 a 12 como igualmente prováveis, o que não são.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Sorteia-se um número inteiro de 1 a 20. Qual é a probabilidade de ele ser primo?",
    opcoes: [
      "1/2",
      "9/20",
      "2/5",
      "7/20",
      "1/4",
    ],
    correta: 2,
    explicacao:
      "Os primos de 1 a 20 são 2, 3, 5, 7, 11, 13, 17 e 19: oito números. Como os 20 números têm a mesma chance, P = 8/20 = 2/5. O 1 não é primo, porque tem um único divisor positivo, e o 2 é primo, o único par. A contagem cuidadosa dos casos favoráveis é a parte principal da definição clássica.\n\n1/2 supõe metade sem contar. 9/20 conta o 1 como primo. 7/20 esquece o 2, talvez por ser par. E 1/4 conta só cinco primos.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Uma moeda foi lançada 1.000 vezes e deu cara 520 vezes. Qual é a estimativa frequentista da probabilidade de cara?",
    opcoes: [
      "0,5",
      "0,48",
      "520",
      "1,04",
      "0,52",
    ],
    correta: 4,
    explicacao:
      "Na interpretação frequentista, a probabilidade é estimada pela frequência relativa em muitas repetições do experimento: 520/1.000 = 0,52. Com mais lançamentos, a frequência relativa tende a se estabilizar perto da probabilidade verdadeira, pela lei dos grandes números.\n\n0,5 é o valor de uma moeda honesta, que os dados não garantem. 0,48 é a frequência de coroas. 520 é a frequência absoluta, e não uma probabilidade. E 1,04 divide 520 por 500, e passa de 1.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "A chance de um evento é de 3 para 1: para cada 3 casos favoráveis, há 1 desfavorável, todos igualmente prováveis. Qual é a probabilidade do evento?",
    opcoes: [
      "1/3",
      "1/4",
      "3/4",
      "3",
      "1/2",
    ],
    correta: 2,
    explicacao:
      "Em cada grupo de 4 casos igualmente prováveis, 3 são favoráveis. A probabilidade é favoráveis sobre o total: 3/(3 + 1) = 3/4. A razão 3 para 1, chamada de chance, compara favoráveis com desfavoráveis, e não com o total de casos.\n\n1/3 inverte a chance, desfavoráveis sobre favoráveis. 1/4 é a probabilidade de o evento não ocorrer. 3 é a própria chance, que pode passar de 1 e não é uma probabilidade. E 1/2 ignora a informação dada.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Num experimento aleatório qualquer, qual é a probabilidade do espaço amostral inteiro?",
    opcoes: [
      "0",
      "0,5",
      "Depende do experimento",
      "1",
      "O número de resultados possíveis",
    ],
    correta: 3,
    explicacao:
      "Um dos axiomas da probabilidade é P(Ω) = 1: algum resultado do espaço amostral sempre ocorre, e o evento algum resultado acontece é certo. Isso vale para qualquer experimento, com resultados igualmente prováveis ou não.\n\n0 é a probabilidade do evento impossível, o vazio. 0,5 não tem justificativa. A probabilidade do espaço amostral não depende do experimento. E o número de resultados possíveis é uma contagem, que pode passar de 1, e não uma probabilidade.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "facil",
    enunciado:
      "Numa rifa de 200 bilhetes, dos quais um será sorteado, uma pessoa comprou 8 bilhetes. Qual é a probabilidade de ela ganhar?",
    opcoes: [
      "1/25",
      "1/200",
      "1/24",
      "1/8",
      "1/2",
    ],
    correta: 0,
    explicacao:
      "Cada um dos 200 bilhetes tem a mesma chance de ser sorteado, e a pessoa ganha se sair qualquer um dos seus 8. Pela definição clássica, P = 8/200 = 1/25, ou 4%. Comprar mais bilhetes aumenta a probabilidade na mesma proporção: com 16 bilhetes, seria 2/25.\n\n1/200 é a probabilidade de um único bilhete. 1/24 divide 8 pelos 192 bilhetes dos outros, e não pelo total. 1/8 olha só para os bilhetes da pessoa. E 1/2 trata ganhar e perder como igualmente prováveis.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Sabe-se que P(A) = 0,5, P(B) = 0,4 e P(A ∩ B) = 0,2. Qual é a probabilidade de ocorrer A ou B?",
    opcoes: [
      "0,9",
      "0,2",
      "0,5",
      "0,3",
      "0,7",
    ],
    correta: 4,
    explicacao:
      "Pela regra da adição, P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,2 = 0,7. A interseção é subtraída porque, ao somar P(A) e P(B), os resultados comuns aos dois eventos são contados duas vezes.\n\n0,9 soma sem descontar a interseção, o que só valeria para eventos disjuntos. 0,2 é a probabilidade de A e B juntos. 0,5 é P(A). E 0,3 é a probabilidade de nenhum dos dois ocorrer, 1 − 0,7.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Num grupo, 45% das pessoas leem jornal, 30% leem revista e 12% leem os dois. Que porcentagem lê exatamente um dos dois?",
    opcoes: [
      "63%",
      "75%",
      "12%",
      "51%",
      "37%",
    ],
    correta: 3,
    explicacao:
      "Só jornal: 45% − 12% = 33%. Só revista: 30% − 12% = 18%. Exatamente um dos dois: 33% + 18% = 51%. Em fórmula, P(A) + P(B) − 2P(A ∩ B): a interseção sai duas vezes, porque quem lê os dois não lê exatamente um.\n\n63% é a união, que inclui quem lê os dois. 75% soma as porcentagens sem descontar nada. 12% é quem lê os dois. E 37% é quem não lê nenhum, 100% − 63%.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Numa loja, 70% dos clientes pagam à vista, e 25% pagam à vista e levam a garantia estendida. Sorteando um cliente, qual é a probabilidade de ele pagar à vista sem levar a garantia?",
    opcoes: [
      "0,7",
      "0,25",
      "0,45",
      "0,95",
      "0,3",
    ],
    correta: 2,
    explicacao:
      "Chamando de A pagar à vista e de B levar a garantia, o evento A se divide em duas partes disjuntas: A ∩ B e A ∩ Bᶜ. Pela aditividade, P(A) = P(A ∩ B) + P(A ∩ Bᶜ), e então P(A ∩ Bᶜ) = 0,7 − 0,25 = 0,45. Essa decomposição de um evento em partes disjuntas é a ferramenta básica para usar os axiomas.\n\n0,7 é P(A) inteira, que inclui quem também leva a garantia. 0,25 é a parte de A em que B ocorre. 0,95 soma em vez de subtrair. E 0,3 é a probabilidade de não pagar à vista.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "No lançamento de dois dados honestos, qual é a probabilidade de a soma dos pontos ser 8?",
    opcoes: [
      "1/7",
      "1/11",
      "5/36",
      "2/9",
      "1/6",
    ],
    correta: 2,
    explicacao:
      "O espaço amostral tem 6 · 6 = 36 pares ordenados igualmente prováveis. Os pares com soma 8 são (2, 6), (3, 5), (4, 4), (5, 3) e (6, 2): cinco casos, e P = 5/36. A ordem importa: (2, 6) e (6, 2) são resultados diferentes, porque os dados são distinguíveis.\n\n1/7 conta pares sem ordem, 3 entre 21, que não são igualmente prováveis. 1/11 trata as somas de 2 a 12 como equiprováveis. 2/9 é 8/36, que usa a soma como contagem. E 1/6 é a probabilidade da soma 7, a mais provável.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Numa brincadeira, três moedas honestas são jogadas de uma vez, e ganha-se um ponto se aparecer ao menos uma cara. Qual é a probabilidade de ganhar o ponto?",
    opcoes: [
      "3/8",
      "7/8",
      "1/2",
      "1/8",
      "3/4",
    ],
    correta: 1,
    explicacao:
      "O complementar de pelo menos uma cara é nenhuma cara, isto é, três coroas. Entre os 2 · 2 · 2 = 8 resultados igualmente prováveis, só um tem três coroas, e então P(pelo menos uma cara) = 1 − 1/8 = 7/8. Passar ao complementar evita somar os casos de uma, duas e três caras.\n\n3/8 é a probabilidade de exatamente uma cara. 1/2 é a de uma única moeda. 1/8 é a de nenhuma cara. E 3/4 trata 0, 1, 2 e 3 caras como resultados igualmente prováveis.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Num jogo de tabuleiro, o jogador lança dois dados e só sai da casa inicial se tirar pelo menos um seis. Qual é a probabilidade de sair na primeira tentativa?",
    opcoes: [
      "11/36",
      "1/3",
      "1/6",
      "25/36",
      "1/36",
    ],
    correta: 0,
    explicacao:
      "Pelo complementar: nenhum seis ocorre em 5 · 5 = 25 dos 36 pares, e então P(pelo menos um seis) = 1 − 25/36 = 11/36. Contando direto: 6 pares com seis no primeiro dado, 6 com seis no segundo, menos o par (6, 6), contado duas vezes: 6 + 6 − 1 = 11.\n\n1/3 soma 1/6 + 1/6 e conta o (6, 6) duas vezes. 1/6 considera um só dado. 25/36 é a probabilidade de nenhum seis. E 1/36 é a de dois seis.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Sorteia-se uma carta de um baralho comum de 52 cartas. Qual é a probabilidade de ela ser de copas ou um rei?",
    opcoes: [
      "17/52",
      "1/52",
      "1/4",
      "4/13",
      "1/13",
    ],
    correta: 3,
    explicacao:
      "Copas tem 13 cartas, e há 4 reis, mas o rei de copas está nos dois grupos. Pela regra da adição: 13/52 + 4/52 − 1/52 = 16/52 = 4/13. Contando direto, as cartas favoráveis são as 13 de copas mais os 3 reis dos outros naipes: 16.\n\n17/52 soma sem descontar o rei de copas, que fica contado duas vezes. 1/52 é a probabilidade da interseção, o próprio rei de copas. 1/4 é a probabilidade de copas. E 1/13 é a de um rei.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "O evento A está contido no evento B, e P(B) = 0,4. Qual destes valores é impossível para P(A)?",
    opcoes: [
      "0",
      "0,4",
      "0,5",
      "0,1",
      "0,25",
    ],
    correta: 2,
    explicacao:
      "Se A ⊂ B, então B = A ∪ (B ∩ Aᶜ), com as duas partes disjuntas, e P(B) = P(A) + P(B ∩ Aᶜ) ≥ P(A). Assim, P(A) não pode passar de P(B) = 0,4, e o valor 0,5 é impossível. Essa monotonicidade é uma consequência direta dos axiomas.\n\n0 é possível: A pode ser vazio. 0,4 é possível: A pode ter a mesma probabilidade de B. E 0,1 e 0,25 estão entre 0 e 0,4, e também são possíveis.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Num espaço amostral com três resultados, a, b e c, qual destas atribuições de probabilidade é válida?",
    opcoes: [
      "P(a) = 0,5; P(b) = 0,4; P(c) = 0,2",
      "P(a) = 0,6; P(b) = 0,5; P(c) = −0,1",
      "P(a) = 0,3; P(b) = 0,3; P(c) = 0,3",
      "P(a) = 1; P(b) = 1; P(c) = 1",
      "P(a) = 0,5; P(b) = 0,3; P(c) = 0,2",
    ],
    correta: 4,
    explicacao:
      "Uma atribuição é válida quando cada probabilidade é maior ou igual a 0 e a soma sobre todos os resultados é 1, como exigem os axiomas. Em 0,5; 0,3; 0,2, os três valores são não negativos e somam 1. As demais violam alguma dessas condições.\n\n0,5; 0,4; 0,2 soma 1,1, mais que 1. 0,6; 0,5; −0,1 soma 1, mas tem um valor negativo. 0,3; 0,3; 0,3 soma 0,9, menos que 1. E 1; 1; 1 soma 3, embora cada valor, isolado, esteja entre 0 e 1.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Um dado viciado dá cada face k com probabilidade proporcional a k: a face 6 é seis vezes mais provável que a face 1. Qual é a probabilidade de sair um número par?",
    opcoes: [
      "1/2",
      "3/7",
      "2",
      "2/7",
      "4/7",
    ],
    correta: 4,
    explicacao:
      "As probabilidades são k · c, com c constante. Pelo axioma P(Ω) = 1, c · (1 + 2 + 3 + 4 + 5 + 6) = 21c = 1, e c = 1/21. Então P(par) = (2 + 4 + 6)/21 = 12/21 = 4/7. Sem resultados equiprováveis, a definição clássica não vale, mas os axiomas continuam valendo.\n\n1/2 ignora o vício. 3/7 é a probabilidade de sair ímpar, 9/21. 2 usa P(k) = k/6 sem normalizar, e passa de 1. E 2/7 é só a probabilidade da face 6, 6/21.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Um ponto é escolhido ao acaso, com distribuição uniforme, num segmento de 10 cm. Qual é a probabilidade de ele ficar a menos de 2 cm de uma das extremidades?",
    opcoes: [
      "0,2",
      "0,4",
      "0,6",
      "0,5",
      "4",
    ],
    correta: 1,
    explicacao:
      "Na probabilidade geométrica, a probabilidade é a razão entre medidas: comprimento favorável sobre comprimento total. As regiões favoráveis são os 2 cm iniciais e os 2 cm finais, com 4 cm no total, e P = 4/10 = 0,4.\n\n0,2 considera só uma das extremidades. 0,6 é a probabilidade do complementar, ficar no trecho central de 6 cm. 0,5 supõe metade, sem conta. E 4 é o comprimento favorável, em centímetros, sem dividir pelo comprimento total.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Dardos acertam um alvo quadrado de lado 2 em posições totalmente aleatórias. Qual é a probabilidade de um dardo cair dentro do círculo inscrito no quadrado?",
    opcoes: [
      "π/2",
      "π/4",
      "1/4",
      "π",
      "3/4",
    ],
    correta: 1,
    explicacao:
      "A probabilidade é a razão entre áreas: o círculo inscrito tem raio 1 e área π · 1² = π, e o quadrado tem área 2² = 4. Então P = π/4 ≈ 0,785. É um exemplo clássico de probabilidade geométrica, e simulações que sorteiam muitos pontos permitem até estimar π por esse caminho.\n\nπ/2 divide a área do círculo pela metade da área do quadrado. 1/4 esquece o π. π passa de 1 e não pode ser probabilidade. E 3/4 é um palpite próximo, mas sem justificativa.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Dois dados honestos são lançados, e multiplicam-se os resultados. Qual é a probabilidade de o produto ser par?",
    opcoes: [
      "1/2",
      "3/4",
      "1/4",
      "2/3",
      "5/6",
    ],
    correta: 1,
    explicacao:
      "O produto é ímpar só quando os dois resultados são ímpares: 3 · 3 = 9 dos 36 pares. Pelo complementar, P(produto par) = 1 − 9/36 = 27/36 = 3/4. Basta um fator par para o produto ser par.\n\n1/2 supõe que par e ímpar são igualmente prováveis também para o produto. 1/4 é a probabilidade de o produto ser ímpar. 2/3 conta, sem ordem, três tipos de par, dois pares, dois ímpares ou um de cada, e acha 2 favoráveis em 3. E 5/6 não sai da contagem.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Uma urna tem 4 bolas brancas e 6 pretas. Retiram-se duas bolas ao mesmo tempo, ao acaso. Qual é a probabilidade de as duas serem brancas?",
    opcoes: [
      "4/25",
      "2/5",
      "2/15",
      "1/3",
      "4/15",
    ],
    correta: 2,
    explicacao:
      "Há C(10, 2) = 45 pares de bolas igualmente prováveis, e C(4, 2) = 6 deles são de duas brancas. Então P = 6/45 = 2/15. Pelo produto, dá o mesmo: 4/10 na primeira e 3/9 na segunda, 12/90 = 2/15. Sem reposição, a segunda retirada tem uma branca e uma bola a menos.\n\n4/25 supõe reposição, (4/10)². 2/5 considera só a primeira bola. 1/3 é a chance da segunda ser branca depois de uma branca. E 4/15 conta pares ordenados no numerador, 12, e não ordenados no denominador, 45.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Um código de 3 algarismos, de 000 a 999, é sorteado ao acaso. Qual é a probabilidade de ele ter pelo menos um algarismo repetido?",
    opcoes: [
      "0,72",
      "0,3",
      "0,27",
      "0,1",
      "0,28",
    ],
    correta: 4,
    explicacao:
      "Pelo complementar: códigos com os três algarismos distintos são 10 · 9 · 8 = 720 entre 1.000, e P(todos distintos) = 0,72. Então P(pelo menos um repetido) = 1 − 0,72 = 0,28. Contar direto os códigos com repetição exigiria separar vários casos.\n\n0,72 é a probabilidade de todos os algarismos serem distintos. 0,3 soma, para os três pares de posições, a chance 0,1 de dois algarismos coincidirem, e conta mais de uma vez os códigos com três iguais. 0,27 conta só os códigos com exatamente dois algarismos iguais. E 0,1 considera um só par de posições.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Um aluno argumenta: amanhã pode chover ou não chover, dois resultados possíveis; logo, a probabilidade de chover é 1/2. Qual é a falha do argumento?",
    opcoes: [
      "As probabilidades atribuídas não somam 1",
      "O espaço amostral tem mais de dois resultados",
      "Chover é um evento impossível de medir",
      "Supõe que os dois resultados são equiprováveis",
      "Não há falha: o argumento está correto",
    ],
    correta: 3,
    explicacao:
      "A definição clássica, casos favoráveis sobre casos possíveis, só vale quando os resultados são igualmente prováveis. Dividir os resultados em dois não garante isso: num lugar e numa época secos, P(chover) pode ser 0,1, e P(não chover) = 0,9 cumpre todos os axiomas. A probabilidade de chover precisa vir de dados, como a frequência de dias chuvosos em condições parecidas.\n\n1/2 + 1/2 soma 1, e não há violação desse axioma. Chover e não chover formam um espaço amostral legítimo. A chuva pode ser medida. E o argumento tem, sim, uma falha.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Um estudante afirma que dois eventos disjuntos, A e B, têm probabilidades 0,6 e 0,5. O que se pode concluir dessa afirmação?",
    opcoes: [
      "Esses valores são impossíveis",
      "P(A ∪ B) = 1,1",
      "P(A ∪ B) = 0,8",
      "P(A ∩ B) = 0,1",
      "P(A ∪ B) = 0,3",
    ],
    correta: 0,
    explicacao:
      "Para eventos disjuntos, a aditividade dá P(A ∪ B) = P(A) + P(B) = 0,6 + 0,5 = 1,1. Mas nenhuma probabilidade passa de 1, porque A ∪ B está contido no espaço amostral, que tem probabilidade 1. A contradição mostra que não existem dois eventos disjuntos com essas probabilidades.\n\nP(A ∪ B) = 1,1 violaria os axiomas. 0,8 e 0,3 não saem de nenhuma regra. E P(A ∩ B) = 0,1 contraria a hipótese de eventos disjuntos, cuja interseção tem probabilidade 0. Com essas probabilidades, dois eventos quaisquer teriam de se sobrepor em pelo menos 0,1.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Um casal planeja ter três filhos, e cada nascimento tem probabilidade 1/2 de ser de menino ou de menina. Qual é a probabilidade de nascerem exatamente duas meninas?",
    opcoes: [
      "1/4",
      "1/2",
      "2/3",
      "3/8",
      "1/8",
    ],
    correta: 3,
    explicacao:
      "Há 2 · 2 · 2 = 8 sequências igualmente prováveis de sexos na ordem de nascimento. As com exatamente duas meninas são as que têm o menino em primeiro, em segundo ou em terceiro lugar: três casos. Então P = 3/8.\n\n1/4 trata os resultados 0, 1, 2 ou 3 meninas como equiprováveis, o que não são: 1 ou 2 meninas acontecem de três maneiras cada, e 0 ou 3, de uma só. 1/2 é a probabilidade de um único nascimento. 2/3 compara duas meninas com três filhos. E 1/8 conta uma só ordem de nascimento.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "No lançamento de um dado, A é sair número par e B é sair número maior que 3. Qual é a probabilidade de ocorrer A ou B?",
    opcoes: [
      "2/3",
      "1",
      "5/6",
      "1/3",
      "1/2",
    ],
    correta: 0,
    explicacao:
      "A = {2, 4, 6} e B = {4, 5, 6}. A união é {2, 4, 5, 6}, com 4 dos 6 resultados, e P(A ∪ B) = 4/6 = 2/3. Pela regra da adição: 3/6 + 3/6 − 2/6 = 4/6, porque 4 e 6 estão nos dois eventos.\n\n1 soma P(A) e P(B) sem descontar a interseção. 5/6 desconta só um dos dois resultados comuns. 1/3 é a probabilidade da interseção, {4, 6}. E 1/2 é P(A), ou P(B), isoladamente.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Qual destas afirmações vale para quaisquer eventos A e B de um mesmo espaço amostral?",
    opcoes: [
      "P(A ∪ B) = P(A) + P(B)",
      "P(A ∩ B) = P(A) · P(B)",
      "Se P(A) = 0, então A é vazio",
      "Se A ⊂ B, então P(A) ≤ P(B)",
      "P(A) + P(B) ≤ 1",
    ],
    correta: 3,
    explicacao:
      "Se A ⊂ B, B se divide nas partes disjuntas A e B ∩ Aᶜ, e P(B) = P(A) + P(B ∩ Aᶜ) ≥ P(A). A monotonicidade vale sempre, porque decorre só dos axiomas.\n\nA soma simples vale apenas para eventos disjuntos. O produto vale apenas para eventos independentes. Um evento pode ter probabilidade 0 sem ser vazio, como sortear exatamente o ponto 0,5 num segmento. E P(A) + P(B) passa de 1 quando A e B se sobrepõem bastante, como no caso A = B = Ω.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Numa escola de 120 alunos, 70 fazem inglês, 50 fazem espanhol e 30 fazem os dois cursos. Sorteando um aluno, qual é a probabilidade de ele não fazer nenhum dos dois?",
    opcoes: [
      "1/4",
      "0",
      "3/4",
      "7/12",
      "1/2",
    ],
    correta: 0,
    explicacao:
      "Os que fazem pelo menos um curso são 70 + 50 − 30 = 90, porque os 30 que fazem os dois foram contados em ambos os grupos. Não fazem nenhum 120 − 90 = 30 alunos, e P = 30/120 = 1/4. Um diagrama com dois círculos que se cruzam separa as quatro regiões: só inglês, só espanhol, os dois e nenhum.\n\n0 subtrai 70 e 50 de 120 sem devolver os 30 contados duas vezes. 3/4 é a probabilidade de fazer pelo menos um curso. 7/12 é a de fazer inglês. E 1/2 é um palpite sem conta.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "De um grupo de 10 meninas e 5 meninos, sorteiam-se duas pessoas diferentes. Qual é a probabilidade de serem uma menina e um menino?",
    opcoes: [
      "10/21",
      "1/2",
      "4/9",
      "11/21",
      "2/3",
    ],
    correta: 0,
    explicacao:
      "Os pares possíveis são C(15, 2) = 105, todos igualmente prováveis. Os pares com uma menina e um menino são 10 · 5 = 50. Então P = 50/105 = 10/21. Pelo produto, somando as duas ordens: (10/15)(5/14) + (5/15)(10/14) = 100/210 = 10/21.\n\n1/2 supõe que par misto e par do mesmo sexo são igualmente prováveis. 4/9 sorteia com reposição, 2 · (2/3)(1/3). 11/21 é a probabilidade do complementar, duas pessoas do mesmo sexo. E 2/3 é a proporção de meninas no grupo.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Um dado honesto é lançado duas vezes seguidas. Qual é a probabilidade de o segundo resultado ser maior que o primeiro?",
    opcoes: [
      "1/2",
      "1/3",
      "5/12",
      "7/12",
      "1/6",
    ],
    correta: 2,
    explicacao:
      "Dos 36 pares, 6 têm resultados iguais. Os outros 30 se dividem, por simetria, entre segundo maior e primeiro maior: 15 para cada lado. Então P = 15/36 = 5/12. A simetria vale porque trocar a ordem dos lançamentos não muda nenhuma probabilidade, e ela evita listar os pares um a um.\n\n1/2 esquece os 6 empates. 1/3 não sai da contagem. 7/12 é a probabilidade de o segundo ser maior ou igual ao primeiro, 21/36. E 1/6 é a probabilidade de empate.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Quatro amigos, entre eles Ana e Bia, formam uma fila numa ordem sorteada ao acaso. Qual é a probabilidade de Ana e Bia ficarem lado a lado?",
    opcoes: [
      "1/4",
      "1/6",
      "1/3",
      "1/12",
      "1/2",
    ],
    correta: 4,
    explicacao:
      "As filas possíveis são 4! = 24, igualmente prováveis. Tratando Ana e Bia como um bloco, há 3! = 6 arranjos do bloco com os outros dois, e 2 ordens dentro do bloco: 12 filas favoráveis, e P = 12/24 = 1/2. Pelas posições: dos 6 pares de lugares, 3 são vizinhos, e 3/6 = 1/2.\n\n1/4 esquece que Ana e Bia podem trocar de posição dentro do bloco, 6/24. 1/6 fixa um só par de lugares vizinhos, como os dois primeiros. 1/3 conta só 2 dos 3 pares de lugares vizinhos. E 1/12 fixa Ana e Bia nos dois primeiros lugares, nessa ordem.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Lançam-se duas moedas. Alguém argumenta que há três resultados, duas caras, duas coroas ou uma de cada, e conclui que a chance de uma de cada é 1/3. Qual é a probabilidade correta de sair uma cara e uma coroa?",
    opcoes: [
      "1/3",
      "1/4",
      "2/3",
      "3/4",
      "1/2",
    ],
    correta: 4,
    explicacao:
      "Os resultados igualmente prováveis são os quatro pares ordenados: cara e cara, cara e coroa, coroa e cara, coroa e coroa. Uma de cada reúne dois deles, e P = 2/4 = 1/2. Os três resultados do argumento não são equiprováveis: uma de cada acontece de duas maneiras, e cada caso com faces iguais, de uma só.\n\n1/3 é o erro do argumento. 1/4 conta só uma das ordens. 2/3 é a probabilidade de pelo menos uma cara contada com o mesmo erro, 2 de 3. E 3/4 é a probabilidade correta de pelo menos uma cara.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Uma urna tem 37 bolas numeradas de 0 a 36. Sorteando uma bola, qual é a probabilidade de sair um número par diferente de zero?",
    opcoes: [
      "18/37",
      "1/2",
      "19/37",
      "1/37",
      "17/37",
    ],
    correta: 0,
    explicacao:
      "Os números pares diferentes de zero são 2, 4, 6, …, 36: são 36/2 = 18 números. Com 37 bolas igualmente prováveis, P = 18/37, um pouco menos que 1/2. O zero, que é par mas foi excluído, faz a diferença entre os dois valores.\n\n1/2 esquece a bola 0 no total, como se houvesse 36 bolas. 19/37 inclui o zero entre os favoráveis. 1/37 é a probabilidade de sair o zero. E 17/37 perde um dos pares na contagem, como o 36.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "As letras da palavra AMOR são embaralhadas ao acaso. Qual é a probabilidade de o resultado começar e terminar com vogal?",
    opcoes: [
      "1/4",
      "1/2",
      "1/12",
      "1/6",
      "1/24",
    ],
    correta: 3,
    explicacao:
      "Há 4! = 24 ordens igualmente prováveis. Para começar e terminar com vogal, A e O ocupam as pontas, em 2 ordens, e M e R ficam no meio, em 2 ordens: 4 casos, e P = 4/24 = 1/6. Pelo produto: 2/4 para a primeira letra ser vogal e, depois, 1/3 para a última ser a vogal que sobrou.\n\n1/4 multiplica 1/2 por 1/2, como se a última letra não dependesse da primeira. 1/2 considera só a primeira letra. 1/12 fixa A no começo e O no fim. E 1/24 é a probabilidade de uma única ordem, como AMRO.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "media",
    enunciado:
      "Três eventos A, B e C são mutuamente exclusivos e cobrem todo o espaço amostral. Se P(A) = 2P(B) = 3P(C), quanto vale P(A)?",
    opcoes: [
      "1/3",
      "1/2",
      "3/11",
      "6/11",
      "2/11",
    ],
    correta: 3,
    explicacao:
      "Chamando P(A) = a, tem-se P(B) = a/2 e P(C) = a/3. Como os eventos são disjuntos e cobrem o espaço amostral, as probabilidades somam 1: a + a/2 + a/3 = 11a/6 = 1, e a = 6/11. Então P(B) = 3/11 e P(C) = 2/11, e a soma confere: 6/11 + 3/11 + 2/11 = 1.\n\n1/3 supõe os três eventos equiprováveis. 1/2 não usa a condição da soma. 3/11 é P(B). E 2/11 é P(C).",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Sabe-se apenas que P(A) = 0,7 e P(B) = 0,6. Quais são os valores possíveis para P(A ∩ B)?",
    opcoes: [
      "Entre 0 e 0,6",
      "Entre 0,3 e 0,6",
      "Exatamente 0,42",
      "Entre 0,3 e 0,7",
      "Entre 0,42 e 0,6",
    ],
    correta: 1,
    explicacao:
      "Pela regra da adição, P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 1,3 − P(A ∪ B). Como P(A ∪ B) ≤ 1, a interseção é pelo menos 0,3. E, por estar contida em B, não passa de P(B) = 0,6. Os extremos são atingidos: 0,3 quando A ∪ B cobre tudo, e 0,6 quando B ⊂ A.\n\nEntre 0 e 0,6 esquece que as probabilidades somam mais que 1 e forçam uma sobreposição. Exatamente 0,42 supõe eventos independentes, o que não foi dito. Entre 0,3 e 0,7 esquece que a interseção está contida em B. E entre 0,42 e 0,6 toma o caso independente como mínimo.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Numa turma de 40 alunos, 20 jogam futebol, 15 vôlei e 12 basquete; 6 jogam futebol e vôlei, 5 futebol e basquete, 4 vôlei e basquete, e 2 jogam os três. Sorteado um aluno, qual é a probabilidade de ele não praticar nenhum dos três?",
    opcoes: [
      "17/20",
      "1/5",
      "1/4",
      "3/20",
      "0",
    ],
    correta: 3,
    explicacao:
      "Pela inclusão-exclusão, os que praticam pelo menos um esporte são 20 + 15 + 12 − 6 − 5 − 4 + 2 = 34. Os 2 que jogam os três são somados três vezes e subtraídos três vezes, e por isso voltam no último termo. Não praticam nenhum 40 − 34 = 6 alunos, e P = 6/40 = 3/20.\n\n17/20 é a probabilidade de praticar pelo menos um. 1/5 esquece de devolver os 2 que jogam os três, e chega a 32. 1/4 subtrai esses 2 em vez de somar, e chega a 30. E 0 soma 20 + 15 + 12 = 47 sem descontar ninguém, o que passa do tamanho da turma.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Duas pessoas combinam de se encontrar entre 12h e 13h; cada uma chega num instante ao acaso desse intervalo, uniforme e independente da outra, e espera no máximo 15 minutos. Qual é a probabilidade de se encontrarem?",
    opcoes: [
      "7/16",
      "1/4",
      "1/2",
      "9/16",
      "1/16",
    ],
    correta: 0,
    explicacao:
      "Representando os instantes de chegada, em horas depois das 12h, por x e y no quadrado [0, 1] × [0, 1], elas se encontram quando |x − y| ≤ 1/4. A região complementar são dois triângulos de catetos 3/4, com área total 2 · (1/2)(3/4)² = 9/16. Então P = 1 − 9/16 = 7/16.\n\n1/4 usa só a razão 15/60, sem geometria. 1/2 dobra essa razão. 9/16 é a probabilidade de não se encontrarem. E 1/16 é a área de um quadradinho de lado 1/4, que não corresponde a nenhum evento do problema.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Três eventos têm, cada um, probabilidade 0,9. Qual é o menor valor possível da probabilidade de os três ocorrerem juntos?",
    opcoes: [
      "0,729",
      "0,9",
      "0,7",
      "0",
      "0,8",
    ],
    correta: 2,
    explicacao:
      "O complementar de os três ocorrerem é pelo menos um falhar, a união dos três complementares, cada um com probabilidade 0,1. Pela desigualdade de Boole, essa união tem probabilidade no máximo 0,1 + 0,1 + 0,1 = 0,3. Logo, P(A ∩ B ∩ C) ≥ 1 − 0,3 = 0,7, e o valor 0,7 é atingido quando os três complementares são disjuntos.\n\n0,729 = 0,9³ supõe independência, que não foi dada. 0,9 é o máximo, quando os três eventos coincidem. 0 ignora a restrição imposta pelas probabilidades altas. E 0,8 usa só dois dos complementares.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Retiram-se, ao mesmo tempo, 3 cartas de um baralho de 52. Qual é a probabilidade de as três serem do mesmo naipe?",
    opcoes: [
      "6,25%",
      "≈ 5,2%",
      "≈ 1,6%",
      "25%",
      "≈ 1,3%",
    ],
    correta: 1,
    explicacao:
      "Há C(52, 3) = 22.100 trincas igualmente prováveis. Para cada naipe, há C(13, 3) = 286 trincas, e os 4 naipes dão 1.144 casos. P = 1.144/22.100 ≈ 0,052, ou cerca de 5,2%. Pelo produto: a primeira carta é livre, e as outras duas precisam acompanhar o naipe dela, (12/51)(11/50) ≈ 0,052.\n\n6,25% é (1/4)², que supõe reposição das cartas. 1,6% é (1/4)³, que fixa um naipe e ainda supõe reposição. 25% é a probabilidade de uma única carta ser de um naipe dado. E 1,3% fixa um naipe específico, como copas, sem somar os outros três.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Quatro cartas são colocadas ao acaso em quatro envelopes já endereçados, uma em cada. Qual é a probabilidade de nenhuma carta ir para o envelope certo?",
    opcoes: [
      "5/8",
      "3/8",
      "1/24",
      "81/256",
      "1/4",
    ],
    correta: 1,
    explicacao:
      "Pela inclusão-exclusão, o número de distribuições com pelo menos uma carta certa é 4 · 3! − 6 · 2! + 4 · 1! − 1 · 0! = 24 − 12 + 4 − 1 = 15. Das 4! = 24 distribuições, sobram 24 − 15 = 9 sem nenhum acerto, e P = 9/24 = 3/8.\n\n5/8 é a probabilidade de pelo menos um acerto. 1/24 é a de todas certas. 81/256 = (3/4)⁴ trata os envelopes como independentes, o que não são, porque cada carta ocupa um envelope. E 1/4 é a probabilidade de uma carta específica ir para o envelope certo.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Sorteia-se um inteiro de 1 a 1.000. Qual é a probabilidade de ele não ser divisível por 2, nem por 3, nem por 5?",
    opcoes: [
      "0,299",
      "0,266",
      "0,734",
      "0,033",
      "0,5",
    ],
    correta: 1,
    explicacao:
      "Pela inclusão-exclusão, os divisíveis por pelo menos um dos três são 500 + 333 + 200 − 166 − 100 − 66 + 33 = 734, usando as partes inteiras de 1.000/2, 1.000/3, 1.000/5, 1.000/6, 1.000/10, 1.000/15 e 1.000/30. Sobram 1.000 − 734 = 266, e P = 266/1.000 = 0,266.\n\n0,299 esquece o último termo, os 33 múltiplos de 30. 0,734 é a probabilidade de ser divisível por pelo menos um dos três. 0,033 é a de ser múltiplo de 30, divisível pelos três. E 0,5 considera só o 2.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Numa cidade, 60% dos domicílios têm internet fixa, 70% têm internet móvel e 90% têm pelo menos uma das duas. Que porcentagem tem apenas internet fixa?",
    opcoes: [
      "20%",
      "30%",
      "18%",
      "40%",
      "10%",
    ],
    correta: 0,
    explicacao:
      "Primeiro, a interseção: pela regra da adição, P(fixa e móvel) = 60% + 70% − 90% = 40%. Os domicílios só com fixa são os que têm fixa, menos os que têm as duas: 60% − 40% = 20%. Conferindo: só móvel dá 30%, e 20% + 40% + 30% = 90%, a união dada.\n\n30% é a porcentagem só com móvel. 18% multiplica 60% por 30%, supondo independência sem motivo. 40% é a porcentagem com as duas. E 10% é a de domicílios sem nenhuma das duas.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Para quaisquer eventos A e B, qual destas expressões é sempre igual a P(A ∪ B)?",
    opcoes: [
      "P(A) + P(B)",
      "P(A) + P(B) − P(A) · P(B)",
      "1 − P(Aᶜ) · P(Bᶜ)",
      "P(A ∩ B) + P(Aᶜ ∩ Bᶜ)",
      "P(A) + P(Aᶜ ∩ B)",
    ],
    correta: 4,
    explicacao:
      "A união se divide em duas partes disjuntas: A inteiro e a parte de B fora de A, Aᶜ ∩ B. Pela aditividade, P(A ∪ B) = P(A) + P(Aᶜ ∩ B), sem nenhuma hipótese sobre A e B. É a regra da adição escrita de outra forma, já que P(Aᶜ ∩ B) = P(B) − P(A ∩ B).\n\nP(A) + P(B) vale só para eventos disjuntos. As duas expressões com produtos, P(A) + P(B) − P(A) · P(B) e 1 − P(Aᶜ) · P(Bᶜ), valem só para eventos independentes. E P(A ∩ B) + P(Aᶜ ∩ Bᶜ) é a probabilidade de A e B ocorrerem ou falharem juntos, e não a da união.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade: conceitos e axiomas",
    dificuldade: "dificil",
    enunciado:
      "Uma moeda honesta é lançada um número muito grande de vezes. O que tende a acontecer com a frequência relativa de caras e com a diferença absoluta entre o número de caras e o de coroas?",
    opcoes: [
      "A frequência tende a 1/2, e a diferença tende a zero",
      "As duas tendem a zero",
      "A frequência oscila sem se estabilizar",
      "A frequência tende a 1/2, e a diferença fica constante",
      "A frequência tende a 1/2, e a diferença tende a crescer",
    ],
    correta: 4,
    explicacao:
      "Pela lei dos grandes números, a frequência relativa de caras se aproxima de 1/2. A diferença absoluta entre caras e coroas, porém, costuma crescer, na ordem da raiz quadrada do número de lançamentos: com 10.000 lançamentos, diferenças de dezenas são comuns. Ela cresce mais devagar que o número de lançamentos, e por isso, dividida por ele, vai a zero.\n\nA ideia de que a diferença tende a zero, ou de que a moeda compensa desvios passados, é a falácia do jogador. A frequência não tende a zero, nem oscila sem se estabilizar. E a diferença não fica constante: ela varia e, em média, aumenta.",
  },
];
