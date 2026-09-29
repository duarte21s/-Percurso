/* Diagramas lógicos e conjuntos (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__diagramas-logicos-e-conjuntos.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__diagramas-logicos-e-conjuntos.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Numa turma de 40 alunos, 25 gostam de matemática, 18 gostam de português e 7 gostam das duas matérias. Quantos alunos não gostam de nenhuma das duas?",
    opcoes: [
      "4",
      "3",
      "11",
      "7",
      "0",
    ],
    correta: 0,
    explicacao:
      "Somar 25 + 18 conta duas vezes os 7 alunos que gostam das duas matérias. Descontando a repetição, os que gostam de pelo menos uma são 25 + 18 − 7 = 36. Como a turma tem 40 alunos, os que não gostam de nenhuma são 40 − 36 = 4.\n\n3 aparece quando se faz 25 + 18 = 43 e se compara com 40 sem descontar os 7 repetidos. 11 é o número dos que gostam só de português (18 − 7). 7 é o dos que gostam das duas. E 0 supõe que todos gostam de alguma, sem fazer a conta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Numa pesquisa, 60% dos entrevistados leem jornal, 50% leem revista e 20% leem os dois. Qual é o percentual dos que não leem nem jornal nem revista?",
    opcoes: [
      "10%",
      "0%",
      "30%",
      "20%",
      "40%",
    ],
    correta: 0,
    explicacao:
      "Somando 60% e 50%, os 20% que leem os dois entram duas vezes. Os que leem pelo menos um são 60% + 50% − 20% = 90%. Os que não leem nenhum são o que falta para 100%: 10%.\n\n0% aparece quando se soma 60% + 50% = 110% e se conclui que todos leem algo, sem descontar a repetição. 30% são os que leem só revista (50% − 20%), e 40%, os que leem só jornal (60% − 20%). E 20% são os que leem os dois.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Um clube tem 120 sócios. Desses, 70 praticam natação, 50 praticam tênis e 30 não praticam nenhum dos dois esportes. Quantos sócios praticam os dois?",
    opcoes: [
      "30",
      "20",
      "90",
      "0",
      "40",
    ],
    correta: 0,
    explicacao:
      "Os que praticam pelo menos um esporte são 120 − 30 = 90. Somando natação e tênis, 70 + 50 = 120: os que praticam os dois foram contados duas vezes, e é exatamente esse excesso que aparece. 120 − 90 = 30 sócios praticam os dois.\n\n90 é o número dos que praticam pelo menos um esporte. 20 e 40 são os que praticam só tênis (50 − 30) e só natação (70 − 30). E 0 supõe que ninguém pratica os dois, o que faria o total passar de 120 (70 + 50 + 30 = 150).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa empresa com 80 funcionários, 45 falam inglês, 30 falam espanhol e 10 falam os dois idiomas. Quantos falam exatamente um desses dois idiomas?",
    opcoes: [
      "55",
      "65",
      "75",
      "35",
      "45",
    ],
    correta: 0,
    explicacao:
      "Os que falam só inglês são 45 − 10 = 35, e os que falam só espanhol são 30 − 10 = 20. Exatamente um idioma: 35 + 20 = 55.\n\n65 é o número dos que falam pelo menos um (45 + 30 − 10), que inclui os 10 que falam os dois. 75 soma 45 + 30 sem descontar ninguém. 35 conta só os que falam apenas inglês. E 45 é o total de quem fala inglês, com ou sem espanhol.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Dos 200 inscritos num concurso, 150 fizeram pelo menos uma das provas, A ou B. Sabe-se que 90 fizeram a prova A e 100 fizeram a prova B. Quantos fizeram somente a prova A?",
    opcoes: [
      "50",
      "90",
      "40",
      "60",
      "110",
    ],
    correta: 0,
    explicacao:
      "Somando 90 + 100 = 190 e comparando com os 150 que fizeram pelo menos uma prova, o excesso de 40 são os que fizeram as duas (contados duas vezes). Os que fizeram só a A são 90 − 40 = 50.\n\n90 é o total da prova A, incluindo quem também fez a B. 40 são os que fizeram as duas. 60 são os que fizeram só a B (100 − 40). E 110 aparece quando se faz 200 − 90, misturando o total de inscritos com a conta da prova A.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Num grupo de pessoas, 70% gostam de café, 45% gostam de chá e 25% gostam das duas bebidas. Qual é o percentual das que gostam de apenas uma das duas?",
    opcoes: [
      "65%",
      "90%",
      "45%",
      "20%",
      "10%",
    ],
    correta: 0,
    explicacao:
      "Só café: 70% − 25% = 45%. Só chá: 45% − 25% = 20%. Apenas uma das bebidas: 45% + 20% = 65%.\n\n90% é o percentual de quem gosta de pelo menos uma (70% + 45% − 25%), que inclui quem gosta das duas. 45% e 20% são as duas parcelas separadas — só café e só chá. E 10% é o percentual de quem não gosta de nenhuma, o que falta para 100%. As quatro regiões do diagrama — 45%, 25%, 20% e 10% — somam 100% e conferem todos os dados.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Numa empresa de 100 pessoas, 70 falam inglês e 60 falam espanhol. No mínimo, quantas pessoas falam os dois idiomas?",
    opcoes: [
      "30",
      "60",
      "10",
      "0",
      "40",
    ],
    correta: 0,
    explicacao:
      "Para ter o menor número possível de pessoas com os dois idiomas, os dois grupos devem se sobrepor o mínimo possível. Mas só há 100 pessoas: 70 + 60 = 130, e as 30 que passam de 100 precisam estar nos dois grupos ao mesmo tempo. Com exatamente 30 nos dois, ficam 40 só com inglês, 30 só com espanhol e ninguém sem idioma — e isso é possível.\n\n0 ignora que 130 não cabe em 100. 60 é o máximo possível, quando todos os que falam espanhol também falam inglês. 10 é pouco demais, e 40 é possível, mas não é o mínimo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Numa turma de 50 alunos, 32 fizeram o trabalho de história e 21 fizeram o de geografia. No máximo, quantos alunos podem ter feito os dois trabalhos? E, nesse caso, quantos não fizeram nenhum?",
    opcoes: [
      "21 e 18",
      "3 e 0",
      "21 e 0",
      "32 e 18",
      "21 e 29",
    ],
    correta: 0,
    explicacao:
      "O maior número possível de alunos com os dois trabalhos acontece quando todos os 21 que fizeram geografia também fizeram história — não podem ser mais de 21, o tamanho do grupo menor. Nesse caso, os que fizeram pelo menos um trabalho são só os 32 de história, e os que não fizeram nenhum são 50 − 32 = 18.\n\n“3 e 0” descreve o caso oposto, o mínimo de sobreposição (32 + 21 − 50 = 3). “21 e 0” acerta o máximo, mas esquece de recalcular quem ficou sem trabalho. “32 e 18” põe no grupo dos dois trabalhos mais alunos do que fizeram geografia. E “21 e 29” desconta do total o grupo de geografia, e não o de história.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa, 15 pessoas disseram usar só ônibus, 12 só metrô, 8 usar os dois e 5 não usar nenhum. Quantas pessoas foram entrevistadas e quantas usam metrô, respectivamente?",
    opcoes: [
      "40 e 20",
      "35 e 20",
      "40 e 12",
      "35 e 12",
      "40 e 28",
    ],
    correta: 0,
    explicacao:
      "Cada pessoa está em exatamente uma das quatro situações, então o total é a soma: 15 + 12 + 8 + 5 = 40 entrevistados. Usam metrô os que usam só metrô e os que usam os dois: 12 + 8 = 20.\n\n35 esquece os 5 que não usam nenhum dos dois. 12 conta só quem usa apenas metrô, sem os 8 que usam os dois. E 28 conta duas vezes os que usam os dois (12 + 8 + 8).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Sabendo que n(A) = 12, n(B) = 9 e n(A ∩ B) = 4, quantos elementos tem o conjunto A ∪ B?",
    opcoes: [
      "17",
      "21",
      "13",
      "25",
      "8",
    ],
    correta: 0,
    explicacao:
      "Pela fórmula da união, o número de elementos de A ∪ B é a soma dos elementos de A e de B menos os da interseção: 12 + 9 − 4 = 17. Os 4 elementos comuns aparecem tanto em A quanto em B, e por isso são descontados uma vez.\n\n21 soma 12 + 9 sem descontar os comuns, contando-os duas vezes. 13 desconta os comuns duas vezes (21 − 8). 25 soma os comuns em vez de descontar. E 8 é o número de elementos que estão só em A (12 − 4).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa escola de idiomas com 100 alunos, 50 estudam inglês, 40 estudam espanhol e 30 estudam francês. Estudam inglês e espanhol 15; inglês e francês, 10; espanhol e francês, 8; e 5 estudam os três — esses 5 estão incluídos nas contagens de pares. Quantos alunos não estudam nenhum dos três idiomas?",
    opcoes: [
      "0",
      "8",
      "13",
      "18",
      "3",
    ],
    correta: 1,
    explicacao:
      "Pelo princípio da inclusão e exclusão: n(I ∪ E ∪ F) = 50 + 40 + 30 − 15 − 10 − 8 + 5 = 92. Somam-se os três grupos, descontam-se as interseções de dois (contadas duas vezes) e devolve-se a interseção dos três, que, depois dos descontos, ficou sem ser contada. Os que não estudam nenhum idioma são 100 − 92 = 8.\n\n13 esquece de devolver os 5 que estudam os três (a união ficaria 87). 18 desconta esses 5 em vez de devolvê-los. 3 devolve os 5 duas vezes. E 0 vem de ver que 50 + 40 + 30 = 120 passa de 100 e concluir que todos estudam algum idioma, sem descontar as repetições.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Numa turma de 60 alunos, 30 jogam futebol, 25 jogam vôlei e 20 jogam basquete. Jogam futebol e vôlei 10 alunos; futebol e basquete, 8; vôlei e basquete, 6; e 3 jogam os três esportes (incluídos nas contagens de pares). Quantos alunos jogam exatamente dois esportes?",
    opcoes: [
      "24",
      "15",
      "21",
      "18",
      "36",
    ],
    correta: 1,
    explicacao:
      "Em cada par, estão incluídos os 3 que jogam os três esportes. Tirando-os, jogam só futebol e vôlei 10 − 3 = 7; só futebol e basquete, 8 − 3 = 5; só vôlei e basquete, 6 − 3 = 3. Exatamente dois esportes: 7 + 5 + 3 = 15.\n\n24 soma os pares sem tirar os que jogam os três. 21 tira os 3 uma vez só, do total (24 − 3), e 18 tira duas vezes (24 − 6): o certo é tirar uma vez de cada par, 3 × 3 = 9. E 36 é o número dos que jogam exatamente um esporte (15 + 12 + 9).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa com 200 pessoas sobre três aplicativos de transporte, X, Y e Z, 110 usam X, 90 usam Y e 60 usam Z. Usam X e Y 40 pessoas; X e Z, 30; Y e Z, 20; e 10 usam os três (incluídos nas contagens de pares). Quantas pessoas usam pelo menos dois aplicativos?",
    opcoes: [
      "90",
      "70",
      "80",
      "60",
      "100",
    ],
    correta: 1,
    explicacao:
      "Pelo menos dois aplicativos significa exatamente dois ou os três. Exatamente dois: (40 − 10) + (30 − 10) + (20 − 10) = 30 + 20 + 10 = 60. Somando os 10 que usam os três: 60 + 10 = 70. Uma conta direta dá o mesmo: soma dos pares menos duas vezes o grupo dos três, 90 − 20 = 70.\n\n90 soma os pares sem descontar nada: os 10 que usam os três entram três vezes. 80 desconta os 10 uma vez só. 60 conta só quem usa exatamente dois, esquecendo os que usam os três. E 100 soma os 10 mais uma vez aos 90.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Numa turma de 50 alunos, 28 gostam de álgebra, 25 de geometria e 20 de estatística. Gostam de álgebra e geometria 12; de álgebra e estatística, 10; de geometria e estatística, 9. Três alunos não gostam de nenhuma das três áreas. Quantos alunos gostam das três?",
    opcoes: [
      "3",
      "5",
      "8",
      "0",
      "7",
    ],
    correta: 1,
    explicacao:
      "Os que gostam de pelo menos uma área são 50 − 3 = 47. Pelo princípio da inclusão e exclusão, 47 = 28 + 25 + 20 − 12 − 10 − 9 + x, em que x é o número dos que gostam das três. Isso dá 47 = 42 + x, então x = 5.\n\n3 é o número dos que não gostam de nenhuma, não dos que gostam de todas. 8 aparece quando se esquece de descontar os 3 do total (50 − 42). 0 supõe que ninguém gosta das três, sem fazer a conta. E 7 é o número dos que gostam só de álgebra e geometria (12 − 5), uma das partes exclusivas dos pares.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Entre 90 assinantes de uma banca, 40 leem a revista R1, 35 leem a R2 e 30 leem a R3. Leem R1 e R2 12 pessoas; R1 e R3, 10; R2 e R3, 8; e 4 leem as três (incluídas nas contagens de pares). Quantas pessoas leem somente a revista R1?",
    opcoes: [
      "18",
      "22",
      "26",
      "14",
      "30",
    ],
    correta: 1,
    explicacao:
      "Dos 40 leitores de R1, tiram-se os que também leem outra revista. Leem R1 e R2 12, e R1 e R3 10, mas os 4 que leem as três estão nos dois grupos: tirar 12 e 10 os descontaria duas vezes. Então: 40 − 12 − 10 + 4 = 22 leem somente R1.\n\n18 desconta os 4 duas vezes (40 − 12 − 10). 14 desconta-os três vezes. 26 soma os 4 de novo, depois de já tê-los devolvido. E 30 desconta só um dos pares (40 − 10).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Numa pesquisa sobre três marcas de café, A, B e C, 50% dos entrevistados usam A, 40% usam B e 30% usam C. Usam A e B 20%; A e C, 15%; B e C, 10%; e 5% usam as três (incluídos nos pares). Qual é o percentual de entrevistados que não usam nenhuma das três marcas?",
    opcoes: [
      "15%",
      "20%",
      "25%",
      "0%",
      "30%",
    ],
    correta: 1,
    explicacao:
      "Os que usam pelo menos uma marca são 50% + 40% + 30% − 20% − 15% − 10% + 5% = 80%. Os que não usam nenhuma são 100% − 80% = 20%.\n\n25% esquece de devolver os 5% que usam as três (a união ficaria 75%). 15% devolve esses 5% duas vezes. 30% desconta os 5% em vez de devolvê-los (a união ficaria 70%). E 0% vem de somar 50% + 40% + 30% = 120% e concluir que todos usam alguma marca.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Sabendo que n(A) = 10, n(B) = 12, n(C) = 8, n(A ∩ B) = 4, n(A ∩ C) = 3, n(B ∩ C) = 5 e n(A ∩ B ∩ C) = 2, quantos elementos tem A ∪ B ∪ C?",
    opcoes: [
      "18",
      "20",
      "30",
      "22",
      "16",
    ],
    correta: 1,
    explicacao:
      "Pelo princípio da inclusão e exclusão: n(A ∪ B ∪ C) = 10 + 12 + 8 − 4 − 3 − 5 + 2 = 20. Os elementos das interseções de dois foram somados duas vezes e são descontados; os da interseção tripla foram somados três vezes e descontados três vezes, por isso voltam uma vez.\n\n18 esquece de devolver a interseção tripla. 30 soma os três conjuntos sem descontar nada. 22 devolve a interseção tripla duas vezes. E 16 desconta a interseção tripla em vez de devolvê-la.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Sabendo que n(A ∪ B) = 30, n(A) = 20 e n(B) = 15, quantos elementos pertencem a A, mas não a B?",
    opcoes: [
      "5",
      "15",
      "20",
      "10",
      "25",
    ],
    correta: 1,
    explicacao:
      "Primeiro, a interseção: somando os elementos de A e de B e tirando os da união, sobram os contados duas vezes, 20 + 15 − 30 = 5. Os elementos de A que não estão em B são os de A menos os da interseção: 20 − 5 = 15. Outra forma: tirando da união os 15 elementos de B, sobram 30 − 15 = 15, os que estão só em A.\n\n5 é a interseção, não a diferença. 20 é o total de A, incluindo a parte comum. 10 é o número de elementos só de B (15 − 5). E 25 soma 20 + 5, contando a interseção a mais em vez de retirá-la.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Os conjuntos A e B são tais que A está contido em B, com n(A) = 8 e n(B) = 15. Quantos elementos tem o conjunto B − A?",
    opcoes: [
      "8",
      "7",
      "15",
      "23",
      "0",
    ],
    correta: 1,
    explicacao:
      "Como todo elemento de A também está em B, o conjunto B − A reúne os elementos de B que ficam fora de A: 15 − 8 = 7. Nesse caso, A ∩ B = A, e a diferença é só a subtração das quantidades.\n\n8 é o número de elementos de A. 15 é o total de B. 23 soma os dois conjuntos, como se fossem separados. E 0 seria n(A − B): não há elementos de A fora de B, mas a pergunta é sobre B − A.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Dados A = {1, 2, 3, 4, 5} e B = {4, 5, 6, 7}, qual é o conjunto A ∩ B?",
    opcoes: [
      "{1, 2, 3}",
      "{4, 5}",
      "{1, 2, 3, 4, 5, 6, 7}",
      "{6, 7}",
      "{1, 2, 3, 6, 7}",
    ],
    correta: 1,
    explicacao:
      "A interseção reúne os elementos que estão nos dois conjuntos ao mesmo tempo. Percorrendo A: 1, 2 e 3 não estão em B; 4 e 5 estão. Logo, A ∩ B = {4, 5}.\n\n{1, 2, 3, 4, 5, 6, 7} é a união, que junta os elementos dos dois conjuntos. {1, 2, 3} é A − B, os elementos só de A. {6, 7} é B − A. E {1, 2, 3, 6, 7} é a diferença simétrica — os que estão em apenas um dos conjuntos, o oposto da interseção.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Dados A = {a, b, c, d} e B = {c, d, e}, qual é o conjunto A − B?",
    opcoes: [
      "{e}",
      "{c, d}",
      "{a, b}",
      "{a, b, e}",
      "{a, b, c, d, e}",
    ],
    correta: 2,
    explicacao:
      "A − B reúne os elementos de A que não pertencem a B. De A = {a, b, c, d}, retiram-se c e d, que também estão em B. Sobra A − B = {a, b}.\n\n{e} é B − A, a diferença na ordem inversa. {c, d} é a interseção. {a, b, e} é a diferença simétrica, que inclui também o que é só de B. E {a, b, c, d, e} é a união. Na diferença, a ordem importa: A − B e B − A, em geral, são conjuntos diferentes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Dados A = {2, 4, 6, 8, 10} e B = {3, 6, 9}, qual é o conjunto (A − B) ∪ (B − A)?",
    opcoes: [
      "{6}",
      "{2, 4, 8, 10}",
      "{2, 3, 4, 8, 9, 10}",
      "{3, 9}",
      "{2, 3, 4, 6, 8, 9, 10}",
    ],
    correta: 2,
    explicacao:
      "A − B tem os elementos de A que não estão em B: {2, 4, 8, 10} (o 6 sai, porque está em B). B − A tem os de B que não estão em A: {3, 9}. A união das duas diferenças é {2, 3, 4, 8, 9, 10} — todos os elementos que estão em apenas um dos conjuntos.\n\n{6} é a interseção, justamente o que fica de fora. {2, 4, 8, 10} é só A − B, e {3, 9} é só B − A. E {2, 3, 4, 6, 8, 9, 10} é a união completa, que não retira o elemento comum.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "No universo U = {1, 2, 3, …, 10}, seja A o conjunto dos números primos de U. Qual é o complementar de A em relação a U?",
    opcoes: [
      "{4, 6, 8, 9, 10}",
      "{4, 6, 8, 10}",
      "{1, 4, 6, 8, 9, 10}",
      "{2, 3, 5, 7}",
      "{1, 9}",
    ],
    correta: 2,
    explicacao:
      "Os primos de U são 2, 3, 5 e 7, então A = {2, 3, 5, 7}. O complementar reúne os elementos de U que não estão em A: {1, 4, 6, 8, 9, 10}. O 1 entra no complementar porque não é primo — um primo precisa ter exatamente dois divisores, e o 1 tem só um.\n\n{4, 6, 8, 9, 10} esquece o 1, tratando-o como primo. {4, 6, 8, 10} esquece também o 9, que é ímpar mas não é primo (9 = 3 × 3). {2, 3, 5, 7} é o próprio A. E {1, 9} fica só com os ímpares que não são primos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Dados A = {1, 2, 3}, B = {3, 4, 5} e C = {2, 3, 4, 6}, qual é o conjunto (A ∪ B) ∩ C?",
    opcoes: [
      "{1, 2, 3, 4}",
      "{3}",
      "{2, 3, 4}",
      "{1, 2, 3, 4, 5, 6}",
      "{1, 5, 6}",
    ],
    correta: 2,
    explicacao:
      "Primeiro o que está entre parênteses: A ∪ B = {1, 2, 3, 4, 5}. Depois, a interseção com C = {2, 3, 4, 6}: ficam os elementos que estão nos dois, {2, 3, 4}.\n\n{1, 2, 3, 4} resulta de fazer A ∪ (B ∩ C), mudando os parênteses de lugar — e a ordem das operações muda o resultado. {3} é a interseção dos três conjuntos. {1, 2, 3, 4, 5, 6} é a união dos três. E {1, 5, 6} reúne os elementos da união dos três que ficaram fora do resultado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Sendo A = [1, 5] e B = ]3, 8] intervalos de números reais, qual é o conjunto A ∩ B?",
    opcoes: [
      "[3, 5]",
      "[1, 8]",
      "]3, 5]",
      "]3, 5[",
      "[1, 3]",
    ],
    correta: 2,
    explicacao:
      "A ∩ B reúne os números que estão nos dois intervalos. A vai de 1 a 5, com as duas pontas incluídas; B vai de 3 a 8, sem o 3 (o colchete virado para fora, em ]3, indica ponta aberta) e com o 8. Os números comuns são os maiores que 3 e menores ou iguais a 5: ]3, 5].\n\n[3, 5] inclui o 3, que não pertence a B. ]3, 5[ exclui o 5, que pertence aos dois. [1, 8] é a união. E [1, 3] é a parte de A que fica fora de B, ou seja, A − B.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Sendo A = [−2, 3[ e B = [1, 6] intervalos de números reais, qual é o conjunto A ∪ B?",
    opcoes: [
      "[1, 3[",
      "[−2, 6[",
      "[−2, 6]",
      "]−2, 6]",
      "[−2, 1[",
    ],
    correta: 2,
    explicacao:
      "A vai de −2 (incluído) até 3 (excluído), e B vai de 1 a 6, com as duas pontas. Como os intervalos se sobrepõem entre 1 e 3, a união é um único intervalo, do menor início ao maior fim: [−2, 6]. O −2 está em A e o 6 está em B, então as duas pontas ficam incluídas. O 3, que não está em A, está em B — por isso não abre buraco.\n\n[1, 3[ é a interseção. [−2, 6[ exclui o 6, que pertence a B. ]−2, 6] exclui o −2, que pertence a A. E [−2, 1[ é A − B.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Sendo A = [0, 10] e B = ]2, 5[ intervalos de números reais, qual é o conjunto A − B?",
    opcoes: [
      "[0, 2[ ∪ ]5, 10]",
      "]2, 5[",
      "[0, 2] ∪ [5, 10]",
      "[0, 2] ∪ ]5, 10]",
      "[0, 10]",
    ],
    correta: 2,
    explicacao:
      "A − B tira de A os números que estão em B, ou seja, os maiores que 2 e menores que 5. O 2 e o 5 não pertencem a B (as pontas de B são abertas), então continuam em A − B. Sobram [0, 2] e [5, 10], com as pontas 2 e 5 fechadas: [0, 2] ∪ [5, 10].\n\n[0, 2[ ∪ ]5, 10] tira também o 2 e o 5, que não estavam em B. [0, 2] ∪ ]5, 10] erra só a ponta do 5. ]2, 5[ é o próprio B — ou A ∩ B —, justamente o que foi retirado. E [0, 10] é o próprio A, sem retirar nada.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Quantos subconjuntos tem o conjunto {a, b, c, d}, contando o conjunto vazio e o próprio conjunto?",
    opcoes: [
      "8",
      "4",
      "16",
      "15",
      "24",
    ],
    correta: 2,
    explicacao:
      "Para formar um subconjunto, decide-se, para cada um dos 4 elementos, se ele entra ou não: 2 escolhas por elemento. São 2 × 2 × 2 × 2 = 2⁴ = 16 subconjuntos, do vazio ao próprio {a, b, c, d}.\n\n8 é 2³, o número de subconjuntos de um conjunto de 3 elementos. 4 conta só os subconjuntos de um elemento. 15 esquece o conjunto vazio. E 24 é 4! = 4 × 3 × 2 × 1, o número de ordenações dos elementos, não de subconjuntos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Quantos subconjuntos do conjunto {a, b, c, d, e} contêm o elemento a?",
    opcoes: [
      "32",
      "15",
      "16",
      "5",
      "31",
    ],
    correta: 2,
    explicacao:
      "Se o elemento a precisa estar no subconjunto, só resta decidir os outros 4 elementos, cada um com 2 escolhas (entra ou não): 2⁴ = 16 subconjuntos. Faz sentido: metade dos 32 subconjuntos contém a, e a outra metade não.\n\n32 é o total de subconjuntos, com ou sem a. 31 é o total sem o vazio. 15 esquece o subconjunto {a}, que contém a e mais nenhum elemento. E 5 confunde a quantidade de elementos do conjunto com a de subconjuntos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Um conjunto tem exatamente 64 subconjuntos, contando o vazio e ele mesmo. Quantos elementos tem esse conjunto?",
    opcoes: [
      "8",
      "32",
      "6",
      "7",
      "5",
    ],
    correta: 2,
    explicacao:
      "Um conjunto com n elementos tem 2ⁿ subconjuntos. Procura-se n com 2ⁿ = 64: como 2⁶ = 64, o conjunto tem 6 elementos.\n\n8 vem de pensar em 8 × 8 = 64, confundindo 2ⁿ com n². 32 é metade de 64. 7 e 5 dariam 128 e 32 subconjuntos. A relação entre elementos e subconjuntos é exponencial: cada elemento a mais dobra o número de subconjuntos — de 5 para 6 elementos, eles passam de 32 para 64.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Quantos subconjuntos de {1, 2, 3, 4, 5, 6}, incluindo o conjunto vazio, não têm nenhum número par?",
    opcoes: [
      "7",
      "3",
      "32",
      "8",
      "64",
    ],
    correta: 3,
    explicacao:
      "Um subconjunto sem números pares só pode usar os ímpares 1, 3 e 5. Os subconjuntos de {1, 3, 5} são 2³ = 8 — o vazio, os três unitários, os três de dois elementos e o próprio {1, 3, 5}.\n\n7 esquece o vazio, que também não tem número par. 3 conta só os unitários. 64 é o total de subconjuntos de {1, …, 6}, e 32 seria a metade, como se metade deles não tivesse pares.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Quantos números inteiros de 1 a 100 são múltiplos de 2 ou de 3?",
    opcoes: [
      "83",
      "50",
      "16",
      "67",
      "66",
    ],
    correta: 3,
    explicacao:
      "Há 50 múltiplos de 2 e 33 múltiplos de 3 entre 1 e 100. Os múltiplos de 6 (16 deles: 6, 12, …, 96) são múltiplos dos dois e entraram duas vezes. Pelo princípio da inclusão e exclusão: 50 + 33 − 16 = 67.\n\n83 soma 50 + 33 sem descontar os múltiplos de 6. 50 conta só os múltiplos de 2. 16 conta só os múltiplos de 6, os que estão nas duas listas ao mesmo tempo. E 66 usa 32 múltiplos de 3 em vez de 33 — o 99 também conta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Quantos números inteiros de 1 a 100 não são múltiplos de 2 nem de 5?",
    opcoes: [
      "30",
      "50",
      "60",
      "40",
      "10",
    ],
    correta: 3,
    explicacao:
      "Múltiplos de 2 ou de 5: 50 + 20 − 10 = 60 (os 10 múltiplos de 10 foram contados duas vezes). Os que não são múltiplos de nenhum dos dois são 100 − 60 = 40. São os números terminados em 1, 3, 7 e 9: 4 em cada dezena, 40 no total.\n\n30 desconta 50 e 20 sem devolver os múltiplos de 10. 60 é o número dos que são múltiplos de 2 ou de 5 — o oposto do pedido. 50 conta os ímpares, esquecendo de tirar os múltiplos de 5 ímpares (5, 15, 25…). E 10 é o número de múltiplos de 10.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Quantos números inteiros de 1 a 150 são divisíveis por 4 ou por 6?",
    opcoes: [
      "62",
      "56",
      "12",
      "50",
      "37",
    ],
    correta: 3,
    explicacao:
      "Divisíveis por 4: 37 (4, 8, …, 148). Divisíveis por 6: 25 (6, 12, …, 150). Os divisíveis pelos dois são os múltiplos de 12, o mínimo múltiplo comum — e não de 24: são 12 (12, 24, …, 144). Pela inclusão e exclusão: 37 + 25 − 12 = 50.\n\n62 não desconta os que foram contados duas vezes. 56 desconta só os múltiplos de 24 (4 × 6), que são 6, e deixa de fora números como 12 e 36. 12 conta só os divisíveis pelos dois. E 37 conta só os divisíveis por 4.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa cidade, 45% da população assiste ao canal A, 35% assiste ao canal B e 30% não assiste a nenhum dos dois. Qual é o percentual que assiste aos dois canais?",
    opcoes: [
      "35%",
      "25%",
      "80%",
      "10%",
      "0%",
    ],
    correta: 3,
    explicacao:
      "Quem assiste a pelo menos um canal é 100% − 30% = 70%. Somando 45% + 35% = 80%, passa-se de 70% em 10 pontos — são os que assistem aos dois e foram contados duas vezes. A resposta é 10%.\n\n80% é a soma direta dos dois canais, sem descontar a repetição. 35% e 25% são os que assistem só ao A (45% − 10%) e só ao B (35% − 10%). E 0% supõe que as duas audiências não se misturam, o que faria o total passar de 100% (45% + 35% + 30% = 110%).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Num diagrama, o círculo dos médicos está inteiramente dentro do círculo dos graduados, e o círculo dos atletas tem uma parte em comum com o dos médicos. Com base apenas nisso, qual afirmação é necessariamente verdadeira?",
    opcoes: [
      "Todo atleta é graduado",
      "Todo graduado é médico",
      "Nenhum atleta é graduado",
      "Algum atleta é graduado",
      "Todo médico é atleta",
    ],
    correta: 3,
    explicacao:
      "A parte comum entre atletas e médicos tem pelo menos uma pessoa. Essa pessoa é médica, e todo médico está dentro do círculo dos graduados; então ela é atleta e graduada ao mesmo tempo. Logo, algum atleta é graduado.\n\n“Todo atleta é graduado” não é garantido: o círculo dos atletas pode ter uma parte fora do dos graduados. “Todo graduado é médico” inverte a inclusão — o círculo dos graduados é o maior. “Nenhum atleta é graduado” contradiz esse raciocínio. E “todo médico é atleta” exigiria o círculo dos médicos dentro do dos atletas, o que o diagrama não diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Os conjuntos A, B e C são tais que A está contido em B, e B e C não têm elementos em comum. Qual das afirmações abaixo é necessariamente verdadeira?",
    opcoes: [
      "B ⊂ A",
      "C ⊂ B",
      "A ∪ C = B",
      "A ∩ C = ∅",
      "A = B",
    ],
    correta: 3,
    explicacao:
      "Todo elemento de A está em B, e nenhum elemento de B está em C. Então nenhum elemento de A pode estar em C: A ∩ C = ∅. Num diagrama, o círculo de A fica dentro do de B, e o de C fica fora do de B — logo, também fora do de A.\n\n“B ⊂ A” inverte a inclusão dada. “C ⊂ B” contradiz o fato de B e C não terem elementos comuns, a não ser que C seja vazio. “A ∪ C = B” e “A = B” não decorrem: B pode ter elementos que não estão em A, e C pode ter elementos, todos fora de B.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Numa figura com três conjuntos, A, B e C, que se cruzam, pinta-se a região formada pelos elementos que estão em A e em B, mas não em C. Qual expressão representa essa região?",
    opcoes: [
      "(A ∪ B) − C",
      "A ∩ B ∩ C",
      "(A − C) ∪ (B − C)",
      "(A ∩ B) − C",
      "A ∩ (B ∪ C)",
    ],
    correta: 3,
    explicacao:
      "“Em A e em B” é a interseção A ∩ B. “Mas não em C” retira dela os elementos de C: (A ∩ B) − C. Na figura, é o pedaço comum a A e B que fica fora do círculo de C.\n\n(A ∪ B) − C pinta tudo o que está em A ou em B fora de C, muito mais do que a região pedida. A ∩ B ∩ C é o miolo comum aos três — justamente a parte que a descrição exclui. (A − C) ∪ (B − C) é igual a (A ∪ B) − C. E A ∩ (B ∪ C) inclui elementos de A que estão em C.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Para dois conjuntos A e B de um mesmo universo, o complementar da união, (A ∪ B)ᶜ, é igual a qual conjunto?",
    opcoes: [
      "Aᶜ ∪ Bᶜ",
      "A ∩ B",
      "(A ∩ B)ᶜ",
      "Aᶜ ∩ Bᶜ",
      "Aᶜ ∪ B",
    ],
    correta: 3,
    explicacao:
      "Um elemento está fora de A ∪ B quando não está em A e também não está em B — ou seja, quando está em Aᶜ e em Bᶜ. Por isso (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ, uma das leis de De Morgan para conjuntos: o complementar troca a união pela interseção.\n\nAᶜ ∪ Bᶜ é igual a (A ∩ B)ᶜ, o complementar da interseção — a outra lei de De Morgan, que responde a outra pergunta; por isso as duas estão erradas aqui. A ∩ B está dentro de A ∪ B, o oposto do pedido. E Aᶜ ∪ B mistura complementar e conjunto original sem regra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Qual expressão representa o conjunto dos elementos que pertencem a A, mas não pertencem a B?",
    opcoes: [
      "Aᶜ ∩ B",
      "A ∪ Bᶜ",
      "B − A",
      "A ∩ Bᶜ",
      "(A ∩ B)ᶜ",
    ],
    correta: 3,
    explicacao:
      "A − B reúne os elementos que estão em A e não estão em B. “Não estar em B” é estar no complementar de B; então A − B = A ∩ Bᶜ.\n\nAᶜ ∩ B descreve os elementos de B que estão fora de A: é B − A, a diferença na ordem inversa, que também está errada. A ∪ Bᶜ inclui tudo o que está fora de B, mesmo o que está fora de A. E (A ∩ B)ᶜ inclui tudo o que não está na interseção, bem mais do que A − B.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Numa escola, todo aluno participa de pelo menos uma das atividades, dança ou teatro. Participam de dança 40 alunos, de teatro 35, e 15 participam das duas. Quantos alunos a escola tem?",
    opcoes: [
      "75",
      "45",
      "90",
      "25",
      "60",
    ],
    correta: 4,
    explicacao:
      "Como todos participam de pelo menos uma atividade, o total de alunos é a união: 40 + 35 − 15 = 60. Os 15 que participam das duas estão tanto entre os 40 da dança quanto entre os 35 do teatro, e por isso são descontados uma vez.\n\n75 soma 40 + 35 sem descontar os 15. 45 desconta os 15 duas vezes — e coincide com o número dos que fazem uma única atividade (25 + 20), esquecendo os 15 que fazem as duas. 90 soma os 15 em vez de descontar. E 25 são os que fazem só dança.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa sobre dois jornais, 25 pessoas leem só o jornal A, 15 leem os dois, e 40 leem o jornal B. Quantas pessoas leem só o jornal B e quantas leem o jornal A, respectivamente?",
    opcoes: [
      "40 e 25",
      "25 e 25",
      "15 e 40",
      "40 e 40",
      "25 e 40",
    ],
    correta: 4,
    explicacao:
      "Os 40 leitores do jornal B incluem os 15 que leem os dois; os que leem só B são 40 − 15 = 25. Os leitores de A são os que leem só A mais os que leem os dois: 25 + 15 = 40.\n\n“40 e 25” inverte as duas respostas. “25 e 25” acerta os que leem só B, mas esquece que os leitores de A incluem os 15 comuns. “15 e 40” toma os que leem os dois pelos que leem só B. E “40 e 40” não desconta os 15 comuns do jornal B.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Num grupo de 60 pessoas, 30 têm carro, 20 têm moto, e o número de pessoas que não têm nenhum dos dois veículos é o dobro do número das que têm os dois. Quantas pessoas têm carro e moto?",
    opcoes: [
      "20",
      "5",
      "15",
      "30",
      "10",
    ],
    correta: 4,
    explicacao:
      "Seja x o número de pessoas com os dois veículos. As que têm pelo menos um são 30 + 20 − x = 50 − x, e as que não têm nenhum são 2x. Somando, o grupo todo: (50 − x) + 2x = 60, então 50 + x = 60 e x = 10. Conferência: 20 só com carro, 10 só com moto, 10 com os dois e 20 sem nenhum — total 60, e 20 é o dobro de 10.\n\n20 é o número dos que não têm nenhum veículo, não dos que têm os dois. 5 e 15 não fecham o total: com 5, seriam 45 + 10 = 55 pessoas; com 15, 35 + 30 = 65. E 30 é o total dos que têm carro.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa coleção de 50 provas, 38 têm questões de lógica e 29 têm questões de português. Todas as provas têm pelo menos um desses dois assuntos. Quantas provas têm os dois?",
    opcoes: [
      "67",
      "9",
      "21",
      "12",
      "17",
    ],
    correta: 4,
    explicacao:
      "Como toda prova tem pelo menos um dos assuntos, a união é o total: 50. Somando 38 + 29 = 67, o excesso de 17 sobre 50 corresponde às provas contadas duas vezes — as que têm os dois assuntos.\n\n67 é a soma sem desconto. 9 é a diferença 38 − 29, sem relação com a interseção. 21 são as provas só de lógica (38 − 17), e 12, as só de português (29 − 17).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Os conjuntos A e B têm 20 e 30 elementos, respectivamente. Quais são o maior e o menor valor possível de n(A ∪ B), nessa ordem?",
    opcoes: [
      "50 e 20",
      "30 e 20",
      "50 e 10",
      "30 e 50",
      "50 e 30",
    ],
    correta: 4,
    explicacao:
      "A união é maior quando os conjuntos não têm nada em comum: 20 + 30 = 50. É menor quando um está dentro do outro — o menor, A, dentro de B —, e então A ∪ B = B, com 30 elementos. Em geral, n(A ∪ B) = 50 − n(A ∩ B), e a interseção varia de 0 a 20.\n\n“50 e 20” supõe que a união pudesse ficar menor que B, o que é impossível: B está sempre dentro da união. “30 e 20” erra o máximo. “50 e 10” usa a diferença 30 − 20 como mínimo. E “30 e 50” troca a ordem pedida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "dificil",
    enunciado:
      "Numa turma, 60% dos alunos jogam futebol, 50% jogam vôlei e 30% jogam os dois esportes. Entre os alunos que jogam vôlei, qual é o percentual dos que também jogam futebol?",
    opcoes: [
      "30%",
      "50%",
      "80%",
      "40%",
      "60%",
    ],
    correta: 4,
    explicacao:
      "Os que jogam os dois são 30% da turma, e os que jogam vôlei são 50% da turma. Entre os de vôlei, a fração que também joga futebol é 30% ÷ 50% = 0,6, ou seja, 60%. Numa turma de 100 alunos: 50 jogam vôlei, e 30 deles jogam futebol — 30 de 50.\n\n30% é a fração da turma inteira que joga os dois, não a fração dos jogadores de vôlei. 50% é o percentual de vôlei na turma. 40% são, entre os de vôlei, os que não jogam futebol (20 de 50). E 80% é a união (60% + 50% − 30%), que responde a outra pergunta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "Os conjuntos A, B e C são tais que A ⊂ B ⊂ C, com n(A) = 5, n(B) = 12 e n(C) = 20. Quantos elementos estão em C, mas não em A?",
    opcoes: [
      "8",
      "7",
      "25",
      "37",
      "15",
    ],
    correta: 4,
    explicacao:
      "Como A está dentro de B, que está dentro de C, todos os 5 elementos de A estão em C. Os elementos de C fora de A são 20 − 5 = 15.\n\n8 é o número de elementos de C fora de B (20 − 12). 7 é o de B fora de A (12 − 5). 25 soma 20 + 5, como se A estivesse fora de C. E 37 soma os três conjuntos, como se não tivessem nada em comum. Num diagrama, os três círculos ficam um dentro do outro, como anéis de um alvo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Sabendo que n(A) = 14, n(B) = 10 e n(A ∩ B) = 6, quantos elementos tem o conjunto (A ∪ B) − (A ∩ B)?",
    opcoes: [
      "18",
      "24",
      "6",
      "8",
      "12",
    ],
    correta: 4,
    explicacao:
      "(A ∪ B) − (A ∩ B) reúne os elementos que estão em apenas um dos dois conjuntos. Só em A: 14 − 6 = 8. Só em B: 10 − 6 = 4. Total: 8 + 4 = 12. Pela conta direta, n(A ∪ B) = 14 + 10 − 6 = 18, e 18 − 6 = 12.\n\n18 é a própria união, sem retirar a interseção. 24 soma 14 + 10 sem descontar nada. 6 é a interseção, que foi justamente retirada. E 8 conta só os elementos exclusivos de A, esquecendo os exclusivos de B.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "media",
    enunciado:
      "Numa escola de 100 alunos, fazem o curso livre X 45 alunos, o Y 40 e o Z 35. Fazem X e Y 15; X e Z, 12; Y e Z, 10; e 5 fazem os três (incluídos nos pares). Quantos alunos fazem exatamente um curso?",
    opcoes: [
      "46",
      "51",
      "88",
      "22",
      "61",
    ],
    correta: 4,
    explicacao:
      "Só X: 45 − 15 − 12 + 5 = 23 (tiram-se os pares e devolvem-se os 5 que estavam nos dois pares). Só Y: 40 − 15 − 10 + 5 = 20. Só Z: 35 − 12 − 10 + 5 = 18. Exatamente um curso: 23 + 20 + 18 = 61.\n\n46 esquece de devolver os que fazem os três em cada conta (18 + 15 + 13). 51 devolve os 5 uma vez só, no total. 88 é o número dos que fazem pelo menos um curso. E 22 é o número dos que fazem exatamente dois (10 + 7 + 5).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Diagramas lógicos e conjuntos",
    dificuldade: "facil",
    enunciado:
      "No universo U = {1, 2, 3, …, 20}, sejam A o conjunto dos múltiplos de 3 e B o conjunto dos múltiplos de 4. Quantos elementos tem A ∪ B?",
    opcoes: [
      "11",
      "9",
      "1",
      "30",
      "10",
    ],
    correta: 4,
    explicacao:
      "A = {3, 6, 9, 12, 15, 18} tem 6 elementos, e B = {4, 8, 12, 16, 20} tem 5. O 12 está nos dois (é múltiplo de 12). A união tem 6 + 5 − 1 = 10 elementos.\n\n11 soma 6 + 5 sem descontar o 12. 9 desconta o 12 duas vezes. 1 é a interseção. E 30 multiplica 6 × 5, confundindo a união com o número de pares formados por um elemento de A e outro de B.",
  },
];
