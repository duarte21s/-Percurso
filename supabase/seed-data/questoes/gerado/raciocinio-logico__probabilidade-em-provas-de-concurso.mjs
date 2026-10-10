/* Probabilidade em provas de concurso (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__probabilidade-em-provas-de-concurso.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__probabilidade-em-provas-de-concurso.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Um dado honesto, de seis faces numeradas de 1 a 6, é lançado uma vez. Qual é a probabilidade de sair um número maior que 4?",
    opcoes: [
      "1/2",
      "2/3",
      "1/6",
      "1/3",
      "5/6",
    ],
    correta: 3,
    explicacao:
      "Um dado honesto tem 6 faces igualmente prováveis. Os resultados maiores que 4 são 5 e 6: 2 casos favoráveis em 6 possíveis. A probabilidade é 2/6 = 1/3.\n\n1/2 contaria 3 casos favoráveis, como se o 4 também servisse. 2/3 é a probabilidade do complemento (sair 4 ou menos). 1/6 conta só o 6. E 5/6 é a chance de não sair 6 — outra pergunta. Em probabilidade clássica, conte primeiro os casos favoráveis e os possíveis, e só depois divida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Dois dados honestos são lançados ao mesmo tempo. Qual é a probabilidade de a soma dos resultados ser 7?",
    opcoes: [
      "7/36",
      "1/12",
      "1/6",
      "1/11",
      "5/36",
    ],
    correta: 2,
    explicacao:
      "Os resultados possíveis são os 36 pares ordenados (primeiro dado, segundo dado). Somam 7: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2) e (6, 1) — 6 pares. A probabilidade é 6/36 = 1/6.\n\n7/36 conta um par a mais. 1/12 (3/36) conta os pares sem ordem — {1, 6}, {2, 5}, {3, 4} —, mas (1, 6) e (6, 1) são resultados diferentes. 1/11 trata as 11 somas possíveis (de 2 a 12) como igualmente prováveis, o que não são. E 5/36 é a probabilidade de soma 8.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Dois dados honestos são lançados. Qual é a probabilidade de sair pelo menos um 6?",
    opcoes: [
      "1/3",
      "1/36",
      "25/36",
      "11/36",
      "5/18",
    ],
    correta: 3,
    explicacao:
      "O jeito mais curto é pelo complemento. Nenhum 6 acontece quando cada dado dá de 1 a 5: 5 × 5 = 25 dos 36 pares. Pelo menos um 6: 36 − 25 = 11 pares, ou seja, 11/36.\n\n1/3 soma 1/6 + 1/6 e conta duas vezes o par (6, 6). 1/36 é a probabilidade de dois seis. 25/36 é a de nenhum 6, o complemento. E 5/18 (10/36) é a de exatamente um 6, que esquece o par (6, 6).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Três moedas honestas são lançadas. Qual é a probabilidade de saírem exatamente duas caras?",
    opcoes: [
      "2/3",
      "3/8",
      "1/4",
      "1/2",
      "1/8",
    ],
    correta: 1,
    explicacao:
      "Há 2 × 2 × 2 = 8 resultados igualmente prováveis. Escrevendo C para cara e K para coroa, os resultados com exatamente duas caras são CCK, CKC e KCC — 3 resultados. A probabilidade é 3/8.\n\n2/3 divide o número de caras pelo de moedas, o que não é probabilidade. 1/4 trata como igualmente prováveis os 4 totais possíveis (0, 1, 2 ou 3 caras), mas 1 ou 2 caras acontecem de mais maneiras que 0 ou 3. 1/2 pensa só em “deu ou não deu”. E 1/8 conta uma única sequência, esquecendo as outras duas ordens.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Três moedas honestas são lançadas. Qual é a probabilidade de sair pelo menos uma cara?",
    opcoes: [
      "1/8",
      "3/8",
      "1/2",
      "7/8",
      "3/4",
    ],
    correta: 3,
    explicacao:
      "O único resultado sem nenhuma cara é KKK (três coroas), 1 dos 8 possíveis. Pelo complemento, pelo menos uma cara acontece em 8 − 1 = 7 resultados: 7/8.\n\n1/8 é justamente a probabilidade de nenhuma cara. 3/8 é a de exatamente uma cara. 1/2 é a de uma única moeda. E 3/4 conta só duas moedas, como se fossem 4 resultados com 3 favoráveis. Sempre que aparece “pelo menos um”, o complemento (“nenhum”) costuma ser mais fácil de contar.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Uma urna tem 5 bolas vermelhas e 3 bolas azuis, todas do mesmo tamanho. Uma bola é retirada ao acaso. Qual é a probabilidade de ela ser vermelha?",
    opcoes: [
      "3/8",
      "3/5",
      "1/2",
      "1/8",
      "5/8",
    ],
    correta: 4,
    explicacao:
      "São 8 bolas ao todo, e 5 delas são vermelhas. Cada bola tem a mesma chance de ser retirada, então a probabilidade é 5/8.\n\n3/8 é a probabilidade de sair azul. 3/5 compara as azuis com as vermelhas, o que é uma razão entre grupos, não uma probabilidade. 1/2 pensa só em “vermelha ou azul”, como se as duas cores tivessem o mesmo número de bolas. E 1/8 é a probabilidade de sair uma bola específica.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Uma urna tem 5 bolas vermelhas e 3 azuis. Duas bolas são retiradas, uma após a outra, sem reposição. Qual é a probabilidade de as duas serem azuis?",
    opcoes: [
      "3/28",
      "9/64",
      "3/8",
      "3/14",
      "1/28",
    ],
    correta: 0,
    explicacao:
      "A primeira é azul com probabilidade 3/8. Sem reposição, sobram 7 bolas, 2 delas azuis: a segunda é azul com probabilidade 2/7. As duas: (3/8) × (2/7) = 6/56 = 3/28. Por combinação dá o mesmo: C(3, 2) ÷ C(8, 2) = 3/28.\n\n9/64 é o resultado com reposição, (3/8)². 3/8 considera só a primeira retirada. 3/14 dobra o resultado, como se a ordem das duas bolas azuis gerasse casos a mais. E 1/28 é a probabilidade de sair uma dupla específica de bolas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Um pote tem 4 balas de menta e 6 de morango. Tira-se uma bala, olha-se o sabor e ela é devolvida ao pote; depois, tira-se outra. Qual é a probabilidade de as duas balas tiradas serem de menta?",
    opcoes: [
      "2/15",
      "2/5",
      "4/5",
      "4/25",
      "8/45",
    ],
    correta: 3,
    explicacao:
      "Com reposição, o pote volta ao estado inicial antes da segunda retirada, e as retiradas são independentes: cada uma dá menta com probabilidade 4/10 = 2/5. As duas: (2/5) × (2/5) = 4/25.\n\n2/15 é o resultado sem reposição, (4/10) × (3/9). 2/5 considera só uma retirada. 4/5 soma 2/5 + 2/5 — somar probabilidades só faz sentido para eventos que se excluem, não para “um e outro”. E 8/45 mistura os dois modelos, usando 10 balas na primeira retirada e 9 na segunda, mas 4 de menta nas duas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Um saco tem 4 balas de morango e 6 de uva. Duas balas são tiradas, uma após a outra, sem reposição. Qual é a probabilidade de as duas balas serem de sabores diferentes?",
    opcoes: [
      "4/15",
      "12/25",
      "8/15",
      "6/25",
      "1/2",
    ],
    correta: 2,
    explicacao:
      "Há duas ordens possíveis: morango e depois uva, com probabilidade (4/10) × (6/9) = 24/90; ou uva e depois morango, com (6/10) × (4/9) = 24/90. Como são casos que se excluem, somam-se: 24/90 + 24/90 = 48/90 = 8/15.\n\n4/15 (24/90) considera só uma das ordens. 12/25 e 6/25 usam o modelo com reposição (10 balas nas duas retiradas), para as duas ordens ou para uma só. E 1/2 supõe que os sabores diferentes aconteçam em metade dos casos, sem fazer a conta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "De um baralho comum de 52 cartas (4 naipes com 13 cartas cada), retira-se uma carta ao acaso. Qual é a probabilidade de ela ser uma figura, isto é, valete, dama ou rei?",
    opcoes: [
      "1/13",
      "3/13",
      "3/52",
      "1/4",
      "4/13",
    ],
    correta: 1,
    explicacao:
      "Cada naipe tem três figuras — valete, dama e rei —, e há 4 naipes: são 12 figuras entre 52 cartas. A probabilidade é 12/52 = 3/13.\n\n1/13 é a probabilidade de sair uma figura específica, como qualquer rei. 3/52 conta as figuras de um único naipe. 1/4 é a probabilidade de sair um naipe específico. E 4/13 (16/52) inclui os ases entre as figuras, o que não é o caso.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "De um baralho comum de 52 cartas (4 naipes com 13 cartas cada), retira-se uma carta ao acaso. Qual é a probabilidade de ela ser um ás ou uma carta de copas?",
    opcoes: [
      "17/52",
      "4/13",
      "1/52",
      "1/4",
      "1/13",
    ],
    correta: 1,
    explicacao:
      "Há 4 ases e 13 cartas de copas, mas o ás de copas está nos dois grupos. Pelo princípio da inclusão e exclusão, as cartas favoráveis são 4 + 13 − 1 = 16, e a probabilidade é 16/52 = 4/13.\n\n17/52 soma 4 + 13 sem descontar o ás de copas, contado duas vezes. 1/52 é a probabilidade de sair o ás de copas — as duas coisas ao mesmo tempo, e não uma ou outra. 1/4 considera só copas, e 1/13, só os ases.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Num grupo de 6 homens e 4 mulheres, duas pessoas são sorteadas ao acaso para uma viagem. Qual é a probabilidade de as duas sorteadas serem mulheres?",
    opcoes: [
      "2/15",
      "4/25",
      "2/5",
      "1/15",
      "4/15",
    ],
    correta: 0,
    explicacao:
      "O número de duplas possíveis é C(10, 2) = 45, todas igualmente prováveis. As duplas formadas só por mulheres são C(4, 2) = 6. A probabilidade é 6/45 = 2/15. Pelo caminho sequencial dá o mesmo: (4/10) × (3/9) = 12/90 = 2/15.\n\n4/25 = (4/10)² trata o sorteio como se a mesma pessoa pudesse sair duas vezes. 2/5 considera só o primeiro sorteio. 1/15 conta só a metade das duplas de mulheres. E 4/15 dobra o resultado, contando cada dupla em duas ordens sem dobrar também o total.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Um dado honesto foi lançado, e sabe-se que saiu um número par. Com essa informação, qual é a probabilidade de ter saído 6?",
    opcoes: [
      "1/6",
      "1/2",
      "1/3",
      "1/12",
      "2/3",
    ],
    correta: 2,
    explicacao:
      "A informação “saiu par” reduz o espaço amostral a {2, 4, 6}: três resultados, igualmente prováveis. Entre eles, só o 6 é favorável. A probabilidade condicional é 1/3. Pela fórmula: P(6 | par) = P(6 e par) ÷ P(par) = (1/6) ÷ (1/2) = 1/3.\n\n1/6 ignora a informação dada e usa o dado inteiro. 1/2 é a probabilidade de sair par. 1/12 multiplica 1/6 por 1/2, em vez de dividir. E 2/3 é a probabilidade de, sabendo que saiu par, o resultado não ser 6.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Três dados honestos são lançados. Qual é a probabilidade de a soma dos três resultados ser 10?",
    opcoes: [
      "1/16",
      "1/36",
      "1/8",
      "25/216",
      "1/6",
    ],
    correta: 2,
    explicacao:
      "Contam-se as trincas ordenadas (primeiro, segundo e terceiro dado) com soma 10. As combinações possíveis são {1, 3, 6}, {1, 4, 5} e {2, 3, 5}, com 6 ordens cada, e {2, 2, 6}, {2, 4, 4} e {3, 3, 4}, com 3 ordens cada: 18 + 9 = 27 trincas, entre 6³ = 216. A probabilidade é 27/216 = 1/8.\n\n1/16 trata as 16 somas possíveis (de 3 a 18) como igualmente prováveis, o que não são. 1/36 (6/216) conta as combinações sem ordem, esquecendo que (1, 3, 6) e (6, 3, 1) são resultados diferentes. 25/216 é a probabilidade de soma 9. E 1/6 não corresponde a nenhuma contagem das trincas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Dois atiradores, independentemente, tentam acertar um alvo. O primeiro acerta com probabilidade 0,7, e o segundo, com probabilidade 0,6. Qual é a probabilidade de os dois acertarem?",
    opcoes: [
      "0,65",
      "0,88",
      "0,42",
      "0,12",
      "0,28",
    ],
    correta: 2,
    explicacao:
      "Para eventos independentes, a probabilidade de ambos ocorrerem é o produto das probabilidades: 0,7 × 0,6 = 0,42.\n\n0,65 é a média das duas probabilidades, que não tem significado aqui. 0,88 é a probabilidade de pelo menos um acertar (1 − 0,3 × 0,4). 0,12 é a de nenhum acertar (0,3 × 0,4). E 0,28 é a de só o primeiro acertar (0,7 × 0,4). Para “um e outro”, com independência, multiplica-se.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Um sistema tem duas máquinas que funcionam de forma independente: a primeira funciona num dado dia com probabilidade 0,9, e a segunda, com probabilidade 0,8. Qual é a probabilidade de pelo menos uma das máquinas funcionar nesse dia?",
    opcoes: [
      "0,72",
      "0,26",
      "0,98",
      "0,02",
      "0,85",
    ],
    correta: 2,
    explicacao:
      "Pelo complemento: nenhuma funciona com probabilidade 0,1 × 0,2 = 0,02 (as falhas também são independentes). Pelo menos uma funciona: 1 − 0,02 = 0,98.\n\n0,72 é a probabilidade de as duas funcionarem (0,9 × 0,8). 0,26 é a de exatamente uma funcionar (0,9 × 0,2 + 0,1 × 0,8). 0,02 é a de nenhuma funcionar. E 0,85 é a média das duas probabilidades. Somar 0,9 + 0,8 daria 1,7, mais que 1 — sinal de que a soma direta não serve para “pelo menos um”.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "A previsão do tempo indica 30% de chance de chover amanhã. Segundo essa previsão, qual é a chance de não chover amanhã?",
    opcoes: [
      "30%",
      "3%",
      "60%",
      "70%",
      "100%",
    ],
    correta: 3,
    explicacao:
      "Chover e não chover são eventos complementares: um deles certamente acontece, e os dois não acontecem juntos. Por isso as probabilidades somam 100%. A chance de não chover é 100% − 30% = 70%.\n\n30% é a chance de chover, não a de não chover. 3% divide 30% por 10 sem motivo. 60% dobra a chance de chover. E 100% seria a certeza de não chover, o que contradiz a previsão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Numa loteria, sorteiam-se 6 números diferentes entre 1 e 10, sem importar a ordem. Um apostador marca 6 números. Qual é a probabilidade de ele acertar os 6 números sorteados?",
    opcoes: [
      "1/210",
      "3/5",
      "1/151.200",
      "1/60",
      "1/1.000.000",
    ],
    correta: 0,
    explicacao:
      "O resultado do sorteio é um conjunto de 6 números entre 10, e todos os conjuntos são igualmente prováveis. Há C(10, 6) = 210 conjuntos possíveis, e a aposta acerta só um deles. A probabilidade é 1/210.\n\n3/5 (6/10) confunde a proporção de números marcados com a chance de acertar todos. 1/151.200 conta os sorteios em ordem (10 × 9 × 8 × 7 × 6 × 5), mas a ordem não importa. 1/60 multiplica 10 × 6. E 1/1.000.000 (1/10⁶) permite repetir números e considera a ordem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Quatro livros diferentes, entre eles um dicionário, são colocados lado a lado numa prateleira, em ordem aleatória. Qual é a probabilidade de o dicionário ficar numa das pontas?",
    opcoes: [
      "1/4",
      "1/24",
      "1/2",
      "3/4",
      "1/3",
    ],
    correta: 2,
    explicacao:
      "As 4 posições são igualmente prováveis para o dicionário, e 2 delas são pontas (a primeira e a última). A probabilidade é 2/4 = 1/2. Contando arrumações: das 4! = 24, o dicionário fica numa ponta em 2 × 3! = 12, e 12/24 = 1/2.\n\n1/4 considera uma única ponta. 1/24 é a chance de uma arrumação específica inteira. 3/4 contaria três posições favoráveis, mas só as duas pontas servem. E 1/3 divide por 3, esquecendo uma das quatro posições.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Um número inteiro é sorteado ao acaso entre 1 e 100, inclusive. Qual é a probabilidade de ele ser múltiplo de 3 ou de 5?",
    opcoes: [
      "53/100",
      "33/100",
      "3/50",
      "1/5",
      "47/100",
    ],
    correta: 4,
    explicacao:
      "Há 33 múltiplos de 3 e 20 múltiplos de 5 entre 1 e 100. Os múltiplos de 15 (15, 30, …, 90 — são 6) estão nas duas listas. Pela inclusão e exclusão, os favoráveis são 33 + 20 − 6 = 47, e a probabilidade é 47/100.\n\n53/100 soma 33 + 20 sem descontar os múltiplos de 15. 33/100 conta só os múltiplos de 3, e 1/5 (20/100), só os de 5. E 3/50 (6/100) é a probabilidade de ser múltiplo de 3 e de 5 ao mesmo tempo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Uma doença atinge 1% de uma população. Um exame detecta a doença em 90% dos doentes, mas também dá positivo, por engano, em 5% das pessoas sadias. Uma pessoa dessa população fez o exame e o resultado foi positivo. Qual é a probabilidade de ela estar doente?",
    opcoes: [
      "2/13",
      "9/10",
      "1/100",
      "1/20",
      "19/20",
    ],
    correta: 0,
    explicacao:
      "Imagine 100.000 pessoas. São 1.000 doentes, dos quais 900 dão positivo, e 99.000 sadias, das quais 5% — 4.950 — também dão positivo. Os positivos são 900 + 4.950 = 5.850, e só 900 deles estão doentes: 900 ÷ 5.850 = 2/13, cerca de 15%.\n\n9/10 é a probabilidade de dar positivo sabendo que a pessoa está doente — a pergunta invertida. 1/100 é a proporção de doentes antes do exame. 1/20 é a taxa de falso positivo entre os sadios, e 19/20, a de negativo entre os sadios. O resultado surpreende porque os sadios são tão mais numerosos que seus falsos positivos superam os positivos verdadeiros.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Duas pessoas são escolhidas ao acaso. Supondo que cada dia da semana seja igualmente provável para o nascimento, qual é a probabilidade de as duas terem nascido no mesmo dia da semana?",
    opcoes: [
      "1/49",
      "1/7",
      "2/7",
      "6/7",
      "1/14",
    ],
    correta: 1,
    explicacao:
      "Seja qual for o dia da semana da primeira pessoa, a segunda precisa ter nascido nesse mesmo dia: 1 chance em 7. Contando pares: dos 7 × 7 = 49 pares de dias, 7 são coincidentes (domingo-domingo, segunda-segunda…), e 7/49 = 1/7.\n\n1/49 exige um dia específico, como as duas terem nascido numa segunda. 2/7 soma as chances das duas pessoas. 6/7 é a probabilidade de nascerem em dias diferentes. E 1/14 divide por 2 sem motivo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Três amigos escolhem, cada um ao acaso e de forma independente, um dos 5 restaurantes de uma rua para almoçar. Qual é a probabilidade de os três irem a restaurantes diferentes?",
    opcoes: [
      "12/25",
      "3/5",
      "4/5",
      "1/25",
      "13/25",
    ],
    correta: 0,
    explicacao:
      "O primeiro pode ir a qualquer restaurante. O segundo precisa escolher um dos outros 4 (probabilidade 4/5), e o terceiro, um dos 3 restantes (3/5). A probabilidade é (4/5) × (3/5) = 12/25. Contando: 5 × 4 × 3 = 60 escolhas com restaurantes diferentes, entre 5³ = 125.\n\n3/5 compara os 3 amigos com os 5 restaurantes, sem fazer a conta. 4/5 considera só dois amigos. 1/25 é a probabilidade de os três irem ao mesmo restaurante. E 13/25 é a de pelo menos dois coincidirem, o complemento.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Um número de 1 a 10 é sorteado, anotado e devolvido; depois, faz-se um segundo sorteio entre os mesmos 10 números. Qual é a probabilidade de o segundo número ser maior que o primeiro?",
    opcoes: [
      "1/2",
      "1/10",
      "11/20",
      "2/5",
      "9/20",
    ],
    correta: 4,
    explicacao:
      "São 10 × 10 = 100 pares igualmente prováveis. Em 10 deles os números são iguais. Nos 90 restantes, por simetria, metade tem o segundo maior e metade tem o primeiro maior: 45 pares. A probabilidade é 45/100 = 9/20.\n\n1/2 esquece os 10 pares de números iguais, em que nenhum é maior. 11/20 (55/100) soma os empates aos casos favoráveis. 1/10 é a probabilidade de os dois números serem iguais. E 2/5 desconta os empates duas vezes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Dois números diferentes são escolhidos ao acaso entre 1 e 10, sem importar a ordem. Qual é a probabilidade de a soma deles ser par?",
    opcoes: [
      "1/2",
      "5/9",
      "1/4",
      "4/9",
      "2/9",
    ],
    correta: 3,
    explicacao:
      "Há C(10, 2) = 45 duplas. A soma é par quando os dois números são pares ou os dois são ímpares: C(5, 2) = 10 duplas de pares e C(5, 2) = 10 de ímpares, 20 no total. A probabilidade é 20/45 = 4/9.\n\n1/2 supõe que soma par e soma ímpar sejam igualmente prováveis — mas, sem repetir números, é mais fácil misturar paridades. 5/9 é a probabilidade de soma ímpar. 1/4 multiplica (1/2) × (1/2), como se houvesse reposição e só um caso favorável. E 2/9 conta só as duplas de pares.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Cinco pessoas, entre elas Ana e Bia, formam uma fila em ordem aleatória. Qual é a probabilidade de Ana e Bia ficarem lado a lado?",
    opcoes: [
      "1/5",
      "1/10",
      "3/5",
      "1/2",
      "2/5",
    ],
    correta: 4,
    explicacao:
      "Há 5! = 120 filas igualmente prováveis. Com Ana e Bia juntas, o par forma um bloco: 4! = 24 ordens, vezes 2 ordens dentro do bloco = 48 filas. A probabilidade é 48/120 = 2/5.\n\n1/5 esquece a ordem dentro do bloco (24/120). 1/10 é a probabilidade de Ana e Bia ocuparem um par específico de lugares vizinhos. 3/5 é a de ficarem separadas. E 1/2 supõe que juntas e separadas sejam igualmente prováveis.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Quatro pessoas, entre elas Ana, formam uma fila em ordem aleatória. Qual é a probabilidade de Ana ser a primeira da fila?",
    opcoes: [
      "1/24",
      "1/2",
      "3/4",
      "1/6",
      "1/4",
    ],
    correta: 4,
    explicacao:
      "Por simetria, cada uma das 4 pessoas tem a mesma chance de ocupar o primeiro lugar: a probabilidade é 1/4. Contando filas: das 4! = 24, Ana é a primeira em 3! = 6, e 6/24 = 1/4.\n\n1/24 é a probabilidade de uma fila específica inteira. 1/2 pensa só em “ser ou não ser a primeira”. 3/4 é a probabilidade de Ana não ser a primeira. E 1/6 confunde o número de filas com Ana na frente (6) com a probabilidade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Uma caixa tem 7 bolas brancas e 3 pretas. Duas bolas são retiradas, uma após a outra, sem reposição, e a cor da primeira não é revelada. Qual é a probabilidade de a segunda bola ser branca?",
    opcoes: [
      "2/3",
      "7/9",
      "7/15",
      "7/10",
      "1/2",
    ],
    correta: 3,
    explicacao:
      "Somando os dois cenários da primeira retirada: se a primeira foi branca (7/10), a segunda é branca com 6/9; se foi preta (3/10), com 7/9. Total: (7/10)(6/9) + (3/10)(7/9) = 42/90 + 21/90 = 63/90 = 7/10. Faz sentido: sem saber a primeira cor, a segunda bola é, por simetria, uma bola qualquer da caixa.\n\n2/3 (6/9) supõe que a primeira foi branca, e 7/9, que foi preta — mas a cor não foi revelada. 7/15 (42/90) considera só o cenário em que as duas são brancas. E 1/2 ignora que há mais brancas que pretas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Uma moeda viciada dá cara com probabilidade 2/3 e coroa com probabilidade 1/3. Ela é lançada duas vezes, de forma independente. Qual é a probabilidade de sair exatamente uma cara?",
    opcoes: [
      "1/2",
      "2/9",
      "5/9",
      "2/3",
      "4/9",
    ],
    correta: 4,
    explicacao:
      "Exatamente uma cara acontece em duas ordens: cara e depois coroa, (2/3)(1/3) = 2/9; ou coroa e depois cara, (1/3)(2/3) = 2/9. Somando os casos, que se excluem: 2/9 + 2/9 = 4/9.\n\n1/2 trata a moeda como honesta. 2/9 considera só uma das ordens. 5/9 é a probabilidade de os dois lançamentos darem o mesmo lado (4/9 de duas caras + 1/9 de duas coroas). E 2/3 é a probabilidade de cara num único lançamento.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Para dois eventos A e B, sabe-se que P(A) = 0,5, P(B) = 0,4 e que a probabilidade de A e B ocorrerem juntos é 0,2. Qual é a probabilidade de ocorrer A ou B?",
    opcoes: [
      "0,7",
      "0,9",
      "0,2",
      "0,5",
      "0,3",
    ],
    correta: 0,
    explicacao:
      "Pela regra da união, P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,2 = 0,7. A interseção é descontada porque, ao somar P(A) e P(B), os casos em que os dois ocorrem entram duas vezes.\n\n0,9 soma sem descontar a interseção. 0,2 é a probabilidade de os dois ocorrerem, não de um ou outro. 0,5 considera só A. E 0,3 é a probabilidade de nenhum dos dois ocorrer, o complemento da união.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Dois eventos A e B são independentes, com P(A) = 0,5 e P(B) = 0,4. Qual é a probabilidade de A e B ocorrerem juntos?",
    opcoes: [
      "0,9",
      "0,1",
      "0,45",
      "0,7",
      "0,2",
    ],
    correta: 4,
    explicacao:
      "Para eventos independentes, a ocorrência de um não muda a chance do outro, e a probabilidade de ocorrerem juntos é o produto: P(A ∩ B) = 0,5 × 0,4 = 0,2.\n\n0,9 soma as probabilidades, o que não vale para “A e B”. 0,1 é a diferença entre elas. 0,45 é a média. E 0,7 é a probabilidade de A ou B (0,5 + 0,4 − 0,2), que usa justamente o produto calculado aqui.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Uma urna tem 20 bolas numeradas de 1 a 20. Uma bola é retirada ao acaso. Qual é a probabilidade de o número dela ser múltiplo de 4?",
    opcoes: [
      "1/5",
      "1/20",
      "3/4",
      "1/4",
      "1/2",
    ],
    correta: 3,
    explicacao:
      "Os múltiplos de 4 entre 1 e 20 são 4, 8, 12, 16 e 20: 5 bolas em 20. A probabilidade é 5/20 = 1/4.\n\n1/5 (4/20) esquece o 20, que também é múltiplo de 4. 1/20 é a probabilidade de uma bola específica. 3/4 é a probabilidade de não ser múltiplo de 4. E 1/2 é a probabilidade de ser par — todo múltiplo de 4 é par, mas nem todo par é múltiplo de 4.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Dois dados honestos são lançados. Qual é a probabilidade de o maior dos dois resultados ser 5 ou 6?",
    opcoes: [
      "1/3",
      "5/9",
      "4/9",
      "2/3",
      "1/9",
    ],
    correta: 1,
    explicacao:
      "O maior resultado é 5 ou 6 quando pelo menos um dos dados dá 5 ou 6. Pelo complemento: os dois dados dão de 1 a 4 com probabilidade (4/6)² = 16/36 = 4/9. Então a probabilidade pedida é 1 − 4/9 = 5/9 (20 dos 36 pares).\n\n1/3 considera um único dado. 4/9 é o complemento: o maior resultado ser 4 ou menos. 2/3 soma 1/3 + 1/3, contando duas vezes os pares em que os dois dados dão 5 ou 6. E 1/9 é a probabilidade de os dois dados darem 5 ou 6.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Três moedas honestas são lançadas. Qual é a probabilidade de as três mostrarem o mesmo lado?",
    opcoes: [
      "1/8",
      "1/2",
      "3/8",
      "2/3",
      "1/4",
    ],
    correta: 4,
    explicacao:
      "Os resultados com as três moedas iguais são CCC e KKK: 2 dos 8 resultados possíveis. A probabilidade é 2/8 = 1/4. Outra forma: a primeira moeda pode dar qualquer lado, e as outras duas precisam repeti-lo — (1/2) × (1/2) = 1/4.\n\n1/8 considera só três caras (ou só três coroas). 1/2 pensa só em “iguais ou não”. 3/8 é a probabilidade de exatamente duas caras. E 2/3 não corresponde a nenhuma contagem dos 8 resultados.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Num grupo de 10 pessoas, 4 são fumantes. Três pessoas do grupo são escolhidas ao acaso. Qual é a probabilidade de exatamente uma delas ser fumante?",
    opcoes: [
      "2/5",
      "1/2",
      "3/10",
      "1/6",
      "5/6",
    ],
    correta: 1,
    explicacao:
      "Há C(10, 3) = 120 trios possíveis. Com exatamente um fumante: escolhe-se o fumante entre 4 e os outros dois entre os 6 não fumantes — 4 × C(6, 2) = 4 × 15 = 60 trios. A probabilidade é 60/120 = 1/2.\n\n2/5 (4/10) é a chance de uma única pessoa escolhida ser fumante. 3/10 (36/120) é a probabilidade de exatamente dois fumantes. 1/6 (20/120) é a de nenhum fumante. E 5/6 é a de pelo menos um fumante, que inclui os trios com dois ou três.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Uma prova tem 5 questões de múltipla escolha, cada uma com 5 alternativas e só uma correta. Um candidato marca todas as respostas ao acaso. Qual é a probabilidade de ele acertar as 5 questões?",
    opcoes: [
      "1/25",
      "1/5",
      "1/3.125",
      "1/625",
      "1/15.625",
    ],
    correta: 2,
    explicacao:
      "Em cada questão, o chute acerta com probabilidade 1/5, e os chutes são independentes. Acertar as 5: (1/5)⁵ = 1/3.125. Em outras palavras, das 5⁵ = 3.125 maneiras de preencher o gabarito, só uma é a certa.\n\n1/5 é a chance de acertar uma questão. 1/25 e 1/625 correspondem a 2 e a 4 questões. E 1/15.625 (1/5⁶) corresponderia a 6 questões. Cada questão a mais divide a chance por 5 — por isso o chute puro quase nunca gabarita uma prova.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Numa fábrica, cada peça produzida tem defeito com probabilidade 1/5, independentemente das outras. Numa amostra de 3 peças, qual é a probabilidade de haver pelo menos uma peça com defeito?",
    opcoes: [
      "61/125",
      "3/5",
      "64/125",
      "1/125",
      "48/125",
    ],
    correta: 0,
    explicacao:
      "Pelo complemento: uma peça sem defeito tem probabilidade 4/5, e as três sem defeito, (4/5)³ = 64/125. Pelo menos uma com defeito: 1 − 64/125 = 61/125.\n\n3/5 soma 1/5 três vezes, contando mais de uma vez as amostras com duas ou três peças defeituosas. 64/125 é a probabilidade de nenhuma ter defeito. 1/125 é a de as três terem. E 48/125 é a de exatamente uma ter defeito, que deixa de fora as amostras com duas ou três.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Um dado honesto é lançado repetidamente. Qual é a probabilidade de o primeiro 6 aparecer exatamente no terceiro lançamento?",
    opcoes: [
      "1/6",
      "25/216",
      "1/216",
      "1/18",
      "5/36",
    ],
    correta: 1,
    explicacao:
      "O primeiro 6 no terceiro lançamento exige: não sair 6 no primeiro (5/6), não sair 6 no segundo (5/6) e sair 6 no terceiro (1/6). Com lançamentos independentes: (5/6) × (5/6) × (1/6) = 25/216.\n\n1/6 considera só o terceiro lançamento, sem exigir que os anteriores não tenham dado 6. 1/216 exige três seis seguidos. 1/18 divide 1/6 por 3, como se a chance se repartisse entre os lançamentos. E 5/36 esquece um dos lançamentos sem 6.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Numa pesquisa com 100 pessoas, 60 homens e 40 mulheres, 36 homens e 10 mulheres disseram preferir o produto A. Uma das pessoas que preferem o produto A é escolhida ao acaso. Qual é a probabilidade de ser mulher?",
    opcoes: [
      "5/23",
      "1/4",
      "2/5",
      "1/10",
      "23/50",
    ],
    correta: 0,
    explicacao:
      "A escolha é feita entre as pessoas que preferem A: 36 + 10 = 46. Entre elas, 10 são mulheres. A probabilidade condicional é 10/46 = 5/23, cerca de 22%.\n\n1/4 (10/40) é a probabilidade de uma mulher preferir A — a condição invertida. 2/5 (40/100) é a proporção de mulheres na pesquisa inteira. 1/10 é a de alguém ser mulher e preferir A, escolhido entre todos. E 23/50 (46/100) é a proporção dos que preferem A.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Uma das 13 letras da palavra PROBABILIDADE é escolhida ao acaso (cada posição com a mesma chance). Qual é a probabilidade de a letra escolhida ser uma vogal?",
    opcoes: [
      "4/13",
      "6/13",
      "7/13",
      "1/2",
      "5/13",
    ],
    correta: 1,
    explicacao:
      "Contando as vogais pela posição: O, A, I, I, A e E — são 6 das 13 letras (o A e o I aparecem duas vezes). A probabilidade é 6/13.\n\n4/13 conta as vogais sem repetição (A, E, I, O), mas cada posição é uma escolha possível, e as repetidas contam de novo. 7/13 é a probabilidade de consoante. 1/2 supõe metade de vogais. E 5/13 esquece uma das vogais repetidas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Dois dados honestos são lançados. Qual é a probabilidade de a soma dos resultados ser um número primo?",
    opcoes: [
      "5/11",
      "5/12",
      "1/2",
      "4/9",
      "1/3",
    ],
    correta: 1,
    explicacao:
      "As somas primas possíveis são 2, 3, 5, 7 e 11. Contando os pares ordenados: soma 2 em 1 par, soma 3 em 2, soma 5 em 4, soma 7 em 6 e soma 11 em 2 — total de 15 pares em 36. A probabilidade é 15/36 = 5/12.\n\n5/11 conta 5 somas primas entre as 11 somas possíveis, como se todas as somas fossem igualmente prováveis. 1/2 supõe que primos e não primos se dividam igualmente. 4/9 (16/36) conta um par a mais. E 1/3 (12/36) esquece algumas somas primas, como a 2 e a 3.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Um número de dois algarismos (de 10 a 99) é escolhido ao acaso. Qual é a probabilidade de ele ter os dois algarismos iguais?",
    opcoes: [
      "9/100",
      "1/11",
      "1/9",
      "1/5",
      "1/10",
    ],
    correta: 4,
    explicacao:
      "Os números de dois algarismos vão de 10 a 99: são 90. Os que têm os algarismos iguais são 11, 22, 33, 44, 55, 66, 77, 88 e 99 — 9 números. A probabilidade é 9/90 = 1/10.\n\n9/100 usa 100 como total, incluindo números que não têm dois algarismos. 1/11 (9/99) conta de 1 a 99. 1/9 divide por 81, sem base na contagem. E 1/5 dobra a resposta sem motivo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Uma urna tem 2 bolas brancas e 1 preta. As bolas são retiradas uma a uma, sem reposição. Qual é a probabilidade de a bola preta sair exatamente na segunda retirada?",
    opcoes: [
      "2/3",
      "1/2",
      "2/9",
      "1/3",
      "1/6",
    ],
    correta: 3,
    explicacao:
      "A preta sai na segunda retirada se a primeira for branca (2/3) e, entre as 2 bolas que sobram, a segunda for a preta (1/2): (2/3) × (1/2) = 1/3. Faz sentido por simetria: a preta tem a mesma chance de sair em qualquer uma das três retiradas.\n\n2/3 é a probabilidade de a primeira ser branca, só metade do caminho. 1/2 considera só a segunda retirada, esquecendo a condição sobre a primeira. 2/9 é o resultado com reposição, (2/3) × (1/3). E 1/6 multiplica por 1/2 a mais.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "Num jogo, há três portas fechadas: atrás de uma há um prêmio, e atrás das outras duas, nada. O jogador escolhe uma porta. O apresentador, que sabe onde está o prêmio, abre sempre uma das outras duas portas que não tem prêmio e oferece a troca pela porta fechada restante. Se o jogador trocar, qual é a probabilidade de ganhar o prêmio?",
    opcoes: [
      "2/3",
      "1/2",
      "1/3",
      "5/6",
      "3/4",
    ],
    correta: 0,
    explicacao:
      "A porta escolhida no início tem o prêmio com probabilidade 1/3, e nada que o apresentador faça muda isso, porque ele sempre pode abrir uma porta vazia. Então, com probabilidade 2/3, o prêmio está numa das outras duas portas — e o apresentador elimina a vazia entre elas. Quem troca ganha exatamente quando errou na primeira escolha: probabilidade 2/3.\n\n1/2 trata as duas portas fechadas restantes como igualmente prováveis, ignorando que a abertura foi feita por quem sabe onde está o prêmio. 1/3 é a chance de ganhar sem trocar. E 5/6 e 3/4 não correspondem a nenhum cenário do jogo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Numa festa estão 4 casais (8 pessoas). Duas pessoas são sorteadas ao acaso. Qual é a probabilidade de as duas formarem um dos casais?",
    opcoes: [
      "1/4",
      "1/28",
      "1/8",
      "4/7",
      "1/7",
    ],
    correta: 4,
    explicacao:
      "Há C(8, 2) = 28 duplas possíveis, todas igualmente prováveis, e 4 delas são casais. A probabilidade é 4/28 = 1/7. Pelo caminho sequencial: seja quem for a primeira pessoa, a segunda precisa ser seu par, 1 entre as 7 restantes.\n\n1/4 divide 1 pelo número de casais. 1/28 é a probabilidade de sair um casal específico. 1/8 usa 8 pessoas no denominador. E 4/7 compara os casais com as 7 pessoas restantes, sem fazer a contagem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "As letras da palavra ARARA são embaralhadas ao acaso, formando um anagrama. Qual é a probabilidade de o anagrama começar com a letra A?",
    opcoes: [
      "1/2",
      "3/5",
      "1/3",
      "2/5",
      "3/10",
    ],
    correta: 1,
    explicacao:
      "ARARA tem 5 letras: três A e dois R. A primeira letra do anagrama é qualquer uma das 5 posições da palavra original, com a mesma chance, e 3 delas são A: 3/5. Contando anagramas distintos: há 5!/(3! × 2!) = 10, e 6 começam com A — de novo, 6/10 = 3/5.\n\n1/2 pensa só em “A ou R”, como se as letras aparecessem na mesma quantidade. 1/3 conta os A como uma letra só entre três. 2/5 é a probabilidade de começar com R. E 3/10 divide os três A pelos 10 anagramas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "dificil",
    enunciado:
      "De um baralho comum de 52 cartas, retiram-se duas cartas, uma após a outra, sem reposição. Qual é a probabilidade de as duas serem ases?",
    opcoes: [
      "1/169",
      "1/13",
      "1/221",
      "2/221",
      "1/2.652",
    ],
    correta: 2,
    explicacao:
      "A primeira é ás com probabilidade 4/52. Sem reposição, restam 3 ases em 51 cartas: a segunda é ás com 3/51. As duas: (4/52) × (3/51) = 12/2.652 = 1/221. Por combinação: C(4, 2) ÷ C(52, 2) = 6/1.326 = 1/221.\n\n1/169 = (1/13)² é o resultado com reposição. 1/13 considera só uma carta. 2/221 dobra o resultado, contando as duplas em duas ordens sem dobrar também o total. E 1/2.652 é a probabilidade de sair um par ordenado específico de cartas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "Para dois eventos A e B, sabe-se que P(B) = 0,3 e que a probabilidade de A e B ocorrerem juntos é 0,12. Qual é a probabilidade de A ocorrer, sabendo que B ocorreu?",
    opcoes: [
      "0,036",
      "0,12",
      "0,42",
      "0,4",
      "0,18",
    ],
    correta: 3,
    explicacao:
      "A probabilidade condicional é P(A | B) = P(A ∩ B) ÷ P(B) = 0,12 ÷ 0,3 = 0,4. Sabendo que B ocorreu, o espaço de possibilidades se restringe aos casos de B, e dentro deles A ocorre em 0,12 de 0,3.\n\n0,036 multiplica 0,12 por 0,3, em vez de dividir. 0,12 é a probabilidade da interseção, sem condicionar. 0,42 soma os dois valores. E 0,18 é P(B) − P(A ∩ B), a probabilidade de B ocorrer sem A.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "media",
    enunciado:
      "A probabilidade de chover no sábado é 0,3, e a de chover no domingo é 0,4, de forma independente. Qual é a probabilidade de chover em exatamente um dos dois dias?",
    opcoes: [
      "0,58",
      "0,12",
      "0,46",
      "0,7",
      "0,42",
    ],
    correta: 2,
    explicacao:
      "Exatamente um dia com chuva acontece de duas maneiras: chove no sábado e não no domingo, 0,3 × 0,6 = 0,18; ou não chove no sábado e chove no domingo, 0,7 × 0,4 = 0,28. Somando os casos, que se excluem: 0,18 + 0,28 = 0,46.\n\n0,58 é a probabilidade de chover em pelo menos um dos dias, que inclui chover nos dois. 0,12 é a de chover nos dois dias. 0,7 soma as probabilidades sem descontar nada. E 0,42 é a de não chover em nenhum dos dias.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Probabilidade em provas de concurso",
    dificuldade: "facil",
    enunciado:
      "Um número inteiro de 1 a 30 é sorteado ao acaso. Qual é a probabilidade de ele ser primo?",
    opcoes: [
      "1/3",
      "3/10",
      "11/30",
      "1/2",
      "2/5",
    ],
    correta: 0,
    explicacao:
      "Os primos de 1 a 30 são 2, 3, 5, 7, 11, 13, 17, 19, 23 e 29: 10 números. A probabilidade é 10/30 = 1/3.\n\n3/10 (9/30) esquece o 2, o único primo par. 11/30 inclui o 1, que não é primo — um primo tem exatamente dois divisores. 1/2 supõe metade de primos. E 2/5 (12/30) conta dois números a mais, como 9 e 15, que são ímpares mas não primos. Listar os casos favoráveis antes de dividir evita esses deslizes.",
  },
];
