/* Múltiplos, divisores, MMC e MDC (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__multiplos-divisores-mmc-e-mdc.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__multiplos-divisores-mmc-e-mdc.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Os múltiplos de um número são os resultados de multiplicá-lo por 1, 2, 3 e assim por diante. Qual destes números é múltiplo de 8?",
    opcoes: [
      "24",
      "25",
      "28",
      "30",
      "36",
    ],
    correta: 0,
    explicacao:
      "Um número é múltiplo de 8 quando está na tabuada do 8, isto é, quando a divisão por 8 é exata. Os múltiplos de 8 são 8, 16, 24, 32, 40, e assim por diante. Entre os números dados, 24 = 8 × 3 é o único que aparece nessa lista.\n\n25, 28, 30 e 36 não pertencem à tabuada do 8: 25 ÷ 8 deixa resto 1, 28 ÷ 8 deixa resto 4, 30 ÷ 8 deixa resto 6 e 36 ÷ 8 deixa resto 4. Como sobra resto em cada divisão, nenhum deles é múltiplo de 8.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Os divisores de um número são os números que dividem esse número sem deixar resto. Quais são todos os divisores de 12?",
    opcoes: [
      "1, 2, 3, 4, 6 e 12",
      "1, 2, 3, 4 e 6",
      "2, 3, 4, 6 e 12",
      "1, 2, 4, 6 e 12",
      "1, 3, 4, 6 e 12",
    ],
    correta: 0,
    explicacao:
      "Testando cada número de 1 a 12, os que dividem 12 sem resto são 1, 2, 3, 4, 6 e 12. Eles aparecem em pares cujo produto é 12: 1 × 12, 2 × 6 e 3 × 4, o que ajuda a não esquecer nenhum.\n\nAs demais listas esquecem algum divisor: uma omite o 12, que divide a si próprio, outra omite o 1, que divide qualquer número, e as outras omitem o 3 ou o 2, que também dividem 12 exatamente.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Um número primo tem exatamente dois divisores: o 1 e ele mesmo. Qual destes números é primo?",
    opcoes: [
      "7",
      "9",
      "15",
      "21",
      "27",
    ],
    correta: 0,
    explicacao:
      "O número 7 só é divisível por 1 e por 7, e nenhum outro número de 2 a 6 divide 7 sem resto. Portanto, 7 é primo. Um teste prático é dividir pelos primos menores que o número, até a raiz dele, e parar ao encontrar uma divisão exata.\n\n9 é divisível por 3, pois 9 = 3 × 3. 15 é divisível por 3 e por 5. 21 é divisível por 3 e por 7. E 27 é divisível por 3 e por 9. Todos eles têm mais de dois divisores, então são compostos.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Listando os múltiplos de 4 e de 6, qual é o menor múltiplo comum de 4 e 6?",
    opcoes: [
      "12",
      "6",
      "4",
      "2",
      "24",
    ],
    correta: 0,
    explicacao:
      "Os múltiplos de 4 são 4, 8, 12, 16, 20, 24... e os de 6 são 6, 12, 18, 24... O primeiro número que aparece nas duas listas é 12, então o menor múltiplo comum de 4 e 6 é 12.\n\n6 é múltiplo de 6, mas não de 4. 4 é múltiplo de 4, mas não de 6. 2 é divisor dos dois, e não múltiplo. E 24 também é múltiplo comum, mas não é o menor, pois 12 aparece antes nas duas listas.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Listando os divisores de 12 e de 18, qual é o maior divisor comum de 12 e 18?",
    opcoes: [
      "6",
      "3",
      "9",
      "18",
      "1",
    ],
    correta: 0,
    explicacao:
      "Os divisores de 12 são 1, 2, 3, 4, 6 e 12, e os de 18 são 1, 2, 3, 6, 9 e 18. Os divisores comuns são 1, 2, 3 e 6, e o maior deles é 6. Outra forma é fatorar: 12 = 2² × 3 e 18 = 2 × 3², e o mdc usa os menores expoentes, 2 × 3 = 6.\n\n3 é um divisor comum, mas não o maior. 9 divide 18, mas não divide 12. 18 não divide 12. E 1 divide qualquer número, sendo o menor dos divisores comuns, e não o maior.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Todo número que termina em 0, 2, 4, 6 ou 8 tem uma característica em comum. Qual é ela?",
    opcoes: [
      "Par",
      "Ímpar",
      "Primo",
      "Múltiplo de 3",
      "Quadrado perfeito",
    ],
    correta: 0,
    explicacao:
      "Um número cujo algarismo das unidades é 0, 2, 4, 6 ou 8 é divisível por 2, e números divisíveis por 2 são chamados de pares. O critério de divisibilidade por 2 olha só o último algarismo.\n\nNão são ímpares, que terminam em 1, 3, 5, 7 ou 9. Não são necessariamente primos, pois 12 e 40 terminam em algarismo par e são compostos. Não são necessariamente múltiplos de 3, como 10 mostra. E não são necessariamente quadrados perfeitos, como 14.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Um número é divisível por 5 quando termina em 0 ou 5. Qual destes números é divisível por 5 e também por 3?",
    opcoes: [
      "15",
      "5",
      "3",
      "9",
      "2",
    ],
    correta: 0,
    explicacao:
      "Procura-se um número divisível por 5 e por 3, isto é, múltiplo dos dois. O número 15 termina em 5, logo é divisível por 5, e a soma dos algarismos 1 + 5 = 6 é múltipla de 3, logo é divisível por 3. Conferindo, 15 = 5 × 3.\n\nAs demais opções não passam nos dois testes: 5 não é divisível por 3, 3 não é divisível por 5, 9 não é divisível por 5, e 2 não é divisível por 3 nem por 5.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Quantos números da lista 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 e 12 são divisores de 12?",
    opcoes: [
      "6",
      "3",
      "4",
      "5",
      "8",
    ],
    correta: 0,
    explicacao:
      "Dos números de 1 a 12, dividem 12 sem deixar resto o 1, o 2, o 3, o 4, o 6 e o 12, isto é, 6 números. Em pares de produto 12, são 1 × 12, 2 × 6 e 3 × 4, o que confirma que não falta nenhum.\n\nOs números 5, 7, 8, 9, 10 e 11 deixam resto ao dividir 12, então não entram na contagem. As quantidades 3, 4 e 5 esquecem divisores, por exemplo contando só os pequenos ou deixando de fora o 12 ou o 1. E 8 inclui números que não dividem 12, como 8 e 9, que deixam resto.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Entre todos os números primos, qual é o único primo que é par?",
    opcoes: [
      "2",
      "1",
      "3",
      "5",
      "7",
    ],
    correta: 0,
    explicacao:
      "Todo número par é divisível por 2. Por isso, um número par maior que 2 tem pelo menos três divisores: 1, 2 e ele mesmo, e não pode ser primo. O único primo par é o próprio 2, que só tem os divisores 1 e 2. Esse fato torna o 2 um caso especial entre todos os primos, e é por isso que se diz que os demais primos são ímpares.\n\n1 não é primo, pois tem um único divisor, e ainda por cima é ímpar. 3, 5 e 7 são primos, mas ímpares. Nenhum deles é par.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Fatorar um número é escrevê-lo como produto de números primos. Qual é a fatoração em primos de 36?",
    opcoes: [
      "2 × 2 × 3 × 3",
      "2 × 3 × 6",
      "4 × 9",
      "2 × 18",
      "6 × 6",
    ],
    correta: 0,
    explicacao:
      "Dividindo 36 sucessivamente pelos menores primos possíveis: 36 ÷ 2 = 18, 18 ÷ 2 = 9, 9 ÷ 3 = 3 e 3 ÷ 3 = 1. Os fatores são 2, 2, 3 e 3, então 36 = 2 × 2 × 3 × 3 = 2² × 3².\n\nAs demais opções são produtos de 36, mas não são fatorações em primos: 6 e 4 e 9 e 18 não são números primos. Uma fatoração em primos só usa 2, 3, 5, 7, 11, e assim por diante.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Um professor quer organizar 18 alunos em grupos de tamanhos iguais, sem sobrar nenhum aluno. Quais são todos os tamanhos de grupo possíveis?",
    opcoes: [
      "2, 3, 6 e 9",
      "1, 2, 3, 6, 9 e 18",
      "1, 2, 3, 6 e 9",
      "1, 2, 3, 9 e 18",
      "1, 3, 6, 9 e 18",
    ],
    correta: 1,
    explicacao:
      "Testando de 1 a 18, dividem 18 sem resto o 1, 2, 3, 6, 9 e 18. Em pares de produto 18, são 1 × 18, 2 × 9 e 3 × 6, o que garante que não falta nenhum.\n\nAs demais listas omitem algum divisor: uma esquece o 1 e o 18, outras esquecem o 18, o 6 ou o 2, e nenhuma delas aparece nos pares de produto 18. Uma lista de divisores deve começar em 1 e terminar no próprio número.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "facil",
    enunciado:
      "Uma turma compra figurinhas em pacotes com 5 figurinhas cada. Quantas figurinhas há em 4 pacotes?",
    opcoes: [
      "10",
      "20",
      "5",
      "15",
      "25",
    ],
    correta: 1,
    explicacao:
      "O número de figurinhas em 4 pacotes é o quádruplo de 5, isto é, o quarto múltiplo de 5: 5 × 4 = 20. Os múltiplos de 5 são 5, 10, 15, 20, 25, e assim por diante, e o quarto termo dessa lista é 20.\n\n10 corresponde a apenas 2 pacotes. 5 é o conteúdo de um único pacote. 15 corresponde a 3 pacotes. E 25 corresponde a 5 pacotes, um a mais que o pedido.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Duas luzes piscam juntas agora. Uma pisca a cada 12 segundos e outra a cada 15 segundos. Depois de quantos segundos elas voltam a piscar juntas pela primeira vez?",
    opcoes: [
      "30",
      "60",
      "120",
      "12",
      "15",
    ],
    correta: 1,
    explicacao:
      "Elas piscam juntas quando o tempo é múltiplo de 12 e de 15 ao mesmo tempo. O menor múltiplo comum de 12 e 15 é 60: os múltiplos de 12 são 12, 24, 36, 48, 60... e os de 15 são 15, 30, 45, 60... O primeiro encontro é aos 60 segundos.\n\n30 é múltiplo de 15, mas não de 12. 120 também é múltiplo comum, mas é o segundo encontro, e não o primeiro. 12 e 15 são os intervalos de cada luz, sozinhos.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Uma professora tem 24 lápis e 18 canetas e quer formar o maior número possível de kits iguais, sem sobrar nenhum item. Quantos kits ela forma?",
    opcoes: [
      "3",
      "6",
      "12",
      "36",
      "2",
    ],
    correta: 1,
    explicacao:
      "O número de kits precisa dividir 24 e 18 ao mesmo tempo, e o maior possível é o máximo divisor comum: mdc(24, 18) = 6. Com 6 kits, cada um tem 4 lápis e 3 canetas, e nada sobra.\n\n3 é divisor comum, mas não o maior: formaria apenas 3 kits, cada um com 8 lápis e 6 canetas, o que também serve, mas não maximiza o número de kits. 12 não divide 18. 36 passa dos 18 itens. E 2 é divisor comum, mas não o maior.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Fatorando os números em primos, qual é o menor múltiplo comum de 8 e 18?",
    opcoes: [
      "36",
      "72",
      "18",
      "144",
      "24",
    ],
    correta: 1,
    explicacao:
      "Fatorando, 8 = 2³ e 18 = 2 × 3². O menor múltiplo comum usa cada fator primo com o maior expoente: 2³ × 3² = 8 × 9 = 72. Conferindo, 72 ÷ 8 = 9 e 72 ÷ 18 = 4, ambas divisões exatas. Esse método, tomando o maior expoente de cada primo, funciona para qualquer quantidade de números.\n\n36 não é múltiplo de 8, pois 36 ÷ 8 = 4,5. 18 não é múltiplo de 8. 144 é múltiplo comum, mas não o menor. E 24 não é múltiplo de 18.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Fatorando os números em primos, qual é o maior divisor comum de 48 e 60?",
    opcoes: [
      "6",
      "12",
      "24",
      "8",
      "4",
    ],
    correta: 1,
    explicacao:
      "Fatorando, 48 = 2⁴ × 3 e 60 = 2² × 3 × 5. O maior divisor comum usa cada fator comum com o menor expoente: 2² × 3 = 12. Conferindo, 48 ÷ 12 = 4 e 60 ÷ 12 = 5, divisões exatas. Esse método, tomando o menor expoente dos primos comuns, funciona para qualquer quantidade de números.\n\n6 é divisor comum, mas não o maior. 24 divide 48, mas não divide 60. 8 divide 48, mas não divide 60. E 4 é divisor comum, bem menor que 12.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Usando divisões sucessivas pelos menores primos possíveis, qual é a fatoração em primos de 60?",
    opcoes: [
      "2 × 5 × 6",
      "2 × 2 × 3 × 5",
      "4 × 15",
      "3 × 20",
      "2 × 30",
    ],
    correta: 1,
    explicacao:
      "Dividindo 60 por 2, dá 30; por 2 de novo, dá 15; 15 não é divisível por 2, então passa-se ao 3, que dá 5; e 5 é primo. Os fatores são 2, 2, 3 e 5, então 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5.\n\nAs outras opções têm fatores compostos: 6 = 2 × 3, 4 = 2², 15 = 3 × 5, 20 = 2² × 5 e 30 = 2 × 3 × 5. Elas valem 60, mas ainda não estão totalmente decompostas em primos.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Quantos números primos existem de 1 a 20, contando 1 e 20 no intervalo?",
    opcoes: [
      "6",
      "8",
      "7",
      "9",
      "12",
    ],
    correta: 1,
    explicacao:
      "Os primos de 1 a 20 são 2, 3, 5, 7, 11, 13, 17 e 19, isto é, 8 números. O 1 não é primo, pois tem um único divisor, e os demais números do intervalo são compostos. Conferindo, dos 20 números, 8 são primos, 11 são compostos e o 1 não é nem primo nem composto.\n\n6 e 7 esquecem algum primo, como o 17 ou o 19. 9 inclui o 1, que não é primo, ou um composto como o 9. E 12 conta números que têm divisores além de 1 e deles mesmos.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Três ônibus saem juntos de um terminal. Um passa a cada 10 minutos, outro a cada 15 e outro a cada 18. Depois de quantos minutos os três saem juntos de novo?",
    opcoes: [
      "30",
      "90",
      "45",
      "180",
      "15",
    ],
    correta: 1,
    explicacao:
      "Os três saem juntos em um tempo que seja múltiplo de 10, 15 e 18 ao mesmo tempo, e o primeiro encontro é o menor múltiplo comum. Fatorando, 10 = 2 × 5, 15 = 3 × 5 e 18 = 2 × 3², então o mmc é 2 × 3² × 5 = 90 minutos.\n\n30 é múltiplo de 10 e de 15, mas não de 18. 45 é múltiplo de 15 e de 5, mas não de 10 nem de 18. 180 é múltiplo comum, mas é o segundo encontro. E 15 é só o intervalo de um dos ônibus.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Um terreno retangular de 36 m por 28 m será dividido em quadrados iguais, de lado inteiro, sem sobras. Qual é a maior medida possível do lado de cada quadrado?",
    opcoes: [
      "2",
      "4",
      "8",
      "16",
      "1",
    ],
    correta: 1,
    explicacao:
      "O lado do quadrado precisa caber um número inteiro de vezes em 36 m e em 28 m, então é um divisor comum de 36 e 28, e o maior possível é o mdc(36, 28) = 4. Com lado 4, cabem 9 quadrados no comprimento e 7 na largura, sem sobra.\n\n2 também é divisor comum, mas não o maior. 8 divide 28? Não, pois 28 ÷ 8 = 3,5. 16 não divide nem 36 nem 28. E 1 é o menor dos divisores comuns.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Um número é divisível por 3 quando a soma dos seus algarismos é divisível por 3. O número 4.275 é divisível por 3?",
    opcoes: [
      "Não, pois o número é par",
      "Não, pois termina em 5",
      "Sim, pois 4 + 2 + 7 + 5 = 18, múltiplo de 3",
      "Não, pois 4.275 é maior que 3.000",
      "Não, pois só terminados em 0 são múltiplos de 3",
    ],
    correta: 2,
    explicacao:
      "Somando os algarismos de 4.275, 4 + 2 + 7 + 5 = 18, e 18 é múltiplo de 3, então 4.275 é divisível por 3. Conferindo, 4.275 ÷ 3 = 1.425, sem resto.\n\nTerminar em 5 não impede a divisibilidade por 3, nem o número ser ímpar: o critério do 3 só olha a soma dos algarismos. Ser maior que 3.000 também é irrelevante. E a ideia de que só números terminados em 0 são múltiplos de 3 é falsa, pois 12, 21 e 33 são múltiplos de 3 e não terminam em 0.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Sabendo que 4.275 é divisível por 3, qual é o quociente exato da divisão 4.275 ÷ 3?",
    opcoes: [
      "1.325",
      "1.525",
      "1.425",
      "1.375",
      "1.275",
    ],
    correta: 2,
    explicacao:
      "Dividindo 4.275 por 3: 4 ÷ 3 dá 1, resto 1; 12 ÷ 3 dá 4; 7 ÷ 3 dá 2, resto 1; 15 ÷ 3 dá 5. O quociente é 1.425. Conferindo, 3 × 1.425 = 4.275. Outra forma de conferir é somar: 1.425 + 1.425 + 1.425 = 4.275.\n\n1.325 e 1.525 erram o algarismo das centenas. 1.375 e 1.275 erram algum algarismo das dezenas. Como o número é divisível por 3, o quociente é exato e 3 × quociente tem de dar 4.275.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Qual é o menor número maior que 20 que é múltiplo de 7?",
    opcoes: [
      "14",
      "28",
      "21",
      "35",
      "7",
    ],
    correta: 2,
    explicacao:
      "Os múltiplos de 7 são 7, 14, 21, 28, 35, e assim por diante. O primeiro que passa de 20 é 21, pois 7 × 3 = 21. Outra forma é dividir: 20 ÷ 7 dá 2, com resto 6, então o próximo múltiplo de 7 vem do quociente 3, isto é, 7 × 3 = 21, o primeiro que passa de 20.\n\n14 e 7 são múltiplos de 7, mas não passam de 20. 28 e 35 são maiores que 20 e múltiplos de 7, mas não são os menores. O enunciado pede o menor deles, que é 21.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Quantos divisores positivos tem o número 36?",
    opcoes: [
      "10",
      "8",
      "9",
      "12",
      "6",
    ],
    correta: 2,
    explicacao:
      "Os divisores de 36 são 1, 2, 3, 4, 6, 9, 12, 18 e 36, isto é, 9 divisores. Pela fatoração, 36 = 2² × 3², e o número de divisores é (2 + 1) × (2 + 1) = 9, pois cada expoente ganha uma unidade e os resultados se multiplicam.\n\n10 e 8 erram a contagem por um divisor. 12 é o número de divisores de números como 60, e 6 é o de números como 12 ou 18. Nenhum deles confere com a lista completa dos divisores de 36.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Entre os números 2, 3, 4, 5, 6, 7, 8, 9, 10 e 11, quantos são primos?",
    opcoes: [
      "4",
      "6",
      "5",
      "3",
      "7",
    ],
    correta: 2,
    explicacao:
      "Testando cada número de 2 a 11, são primos o 2, o 3, o 5, o 7 e o 11, que só têm os divisores 1 e eles mesmos. São compostos o 4, o 6, o 8, o 9 e o 10, pois têm outros divisores, como 2 ou 3. Isso dá 5 primos.\n\n4 esquece um dos primos, geralmente o 11 ou o 2. 6 conta um composto como se fosse primo, como o 9, que é 3 × 3. 3 conta só os primos menores que 6. E 7 conta também compostos, como o 9 e o 10.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Fatorando 30 em números primos, quais são os fatores primos que aparecem na fatoração de 30?",
    opcoes: [
      "2 e 3",
      "2 e 5",
      "2, 3 e 5",
      "3 e 5",
      "5 e 7",
    ],
    correta: 2,
    explicacao:
      "Dividindo 30 por 2, dá 15; dividindo 15 por 3, dá 5; e 5 é primo. Então 30 = 2 × 3 × 5, e os fatores primos são 2, 3 e 5. O número 30 é o produto dos três primeiros números primos, e cada um deles aparece uma única vez na fatoração.\n\nAs outras opções citam apenas dois dos três fatores, como 2 e 3, ou 3 e 5, deixando um deles de fora. E 5 e 7 incluem o 7, que não divide 30.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Dois números, 15 e 28, não têm nenhum divisor comum além do 1. Qual é o maior divisor comum de 15 e 28?",
    opcoes: [
      "2",
      "3",
      "1",
      "4",
      "5",
    ],
    correta: 2,
    explicacao:
      "Os divisores de 15 são 1, 3, 5 e 15, e os de 28 são 1, 2, 4, 7, 14 e 28. O único divisor comum é 1, então mdc(15, 28) = 1. Números assim são chamados de primos entre si, mesmo quando nenhum deles é primo.\n\n2 e 4 dividem 28, mas não dividem 15. 3 e 5 dividem 15, mas não dividem 28. Por isso, nenhum deles é divisor comum dos dois números ao mesmo tempo.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Qual é o menor múltiplo comum de 12, 20 e 35?",
    opcoes: [
      "210",
      "60",
      "420",
      "840",
      "105",
    ],
    correta: 2,
    explicacao:
      "Fatorando, 12 = 2² × 3, 20 = 2² × 5 e 35 = 5 × 7. O menor múltiplo comum usa cada fator primo com o maior expoente: 2² × 3 × 5 × 7 = 420. Conferindo, 420 ÷ 12 = 35, 420 ÷ 20 = 21 e 420 ÷ 35 = 12.\n\n210 não é múltiplo de 12 nem de 20, pois 210 ÷ 12 = 17,5. 60 não é múltiplo de 35. 840 é múltiplo comum, mas é o dobro do menor. E 105 não é múltiplo de 12 nem de 20.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Qual é o conjunto dos fatores primos de 72?",
    opcoes: [
      "2, 3 e 5",
      "3 e 5",
      "2 e 3",
      "2 e 5",
      "3",
    ],
    correta: 2,
    explicacao:
      "Fatorando, 72 ÷ 2 = 36, ÷ 2 = 18, ÷ 2 = 9, ÷ 3 = 3, ÷ 3 = 1. Então 72 = 2³ × 3², e os fatores primos distintos são 2 e 3. Os expoentes 3 e 2 indicam quantas vezes cada fator aparece, mas os fatores primos distintos são só 2 e 3.\n\n2, 3 e 5 inclui o 5, que não divide 72. 3 e 5 e 2 e 5 também incluem o 5, e nenhum deles contém o 2 e o 3 juntos. E 3 sozinho esquece o fator 2, que aparece três vezes.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Listando todos os números que dividem 20 sem deixar resto, quais são os divisores de 20?",
    opcoes: [
      "2, 4, 5, 10 e 20",
      "1, 2, 4, 5 e 10",
      "1, 2, 4, 5, 10 e 20",
      "1, 2, 5, 10 e 20",
      "1, 4, 5, 10 e 20",
    ],
    correta: 2,
    explicacao:
      "Testando de 1 a 20, dividem 20 sem resto o 1, 2, 4, 5, 10 e 20. Em pares de produto 20, são 1 × 20, 2 × 10 e 4 × 5, o que confirma a lista completa. Como 20 não é quadrado perfeito, os divisores se organizam em 3 pares, sem divisor repetido no meio.\n\nAs demais listas omitem algum divisor: a que começa em 2 esquece o 1, a que termina em 10 esquece o 20, e as outras esquecem o 4 ou o 2, que também dividem 20.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Qual é o maior divisor comum de 35 e 63?",
    opcoes: [
      "5",
      "3",
      "9",
      "7",
      "11",
    ],
    correta: 3,
    explicacao:
      "Os divisores de 35 são 1, 5, 7 e 35, e os de 63 são 1, 3, 7, 9, 21 e 63. Os divisores comuns são 1 e 7, e o maior é 7. Por fatoração, 35 = 5 × 7 e 63 = 3² × 7, e o único fator comum é o 7. O mdc também pode ser achado pelo algoritmo de Euclides: 63 ÷ 35 deixa resto 28, 35 ÷ 28 deixa resto 7, e 28 ÷ 7 deixa resto 0, então o mdc é 7.\n\n5 divide 35, mas não 63. 3 e 9 dividem 63, mas não 35. E 11 não divide nenhum dos dois números.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Um lojista tem 36 bolas vermelhas e 48 azuis e quer guardá-las em caixas iguais, sem misturar cores e sem sobras. Qual é o maior número de bolas por caixa?",
    opcoes: [
      "6",
      "24",
      "8",
      "12",
      "4",
    ],
    correta: 3,
    explicacao:
      "O número de bolas por caixa precisa dividir 36 e 48, e o maior possível é o mdc(36, 48) = 12. Com 12 bolas por caixa, são 3 caixas de vermelhas e 4 de azuis, sem sobras. Conferindo, 12 bolas por caixa dão 36 ÷ 12 = 3 caixas vermelhas e 48 ÷ 12 = 4 caixas azuis, sem nenhuma sobra.\n\n6 e 4 também dividem os dois números, mas não são os maiores. 24 divide 48, mas não divide 36. E 8 divide 48, mas não 36.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Qual é o menor número maior que zero que é divisível por todos os números de 1 a 10?",
    opcoes: [
      "840",
      "1.260",
      "5.040",
      "2.520",
      "420",
    ],
    correta: 3,
    explicacao:
      "O menor número divisível por 1, 2, ..., 10 é o mmc desses números. Usando o maior expoente de cada primo, 2³ (de 8), 3² (de 9), 5 (de 5 e 10) e 7: 8 × 9 × 5 × 7 = 2.520. Conferindo, 2.520 ÷ 8 = 315, ÷ 9 = 280, ÷ 7 = 360, todas exatas.\n\n840 não é divisível por 9. 1.260 não é divisível por 8. 5.040 é divisível por todos, mas é o dobro do menor. E 420 não é divisível por 8 nem por 9.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Os múltiplos comuns de 6 e 9 menores que 100 são 18, 36, 54, 72 e 90. Quantos múltiplos comuns de 6 e 9 existem entre 1 e 100?",
    opcoes: [
      "3",
      "4",
      "6",
      "5",
      "2",
    ],
    correta: 3,
    explicacao:
      "Um múltiplo comum de 6 e 9 é múltiplo de mmc(6, 9) = 18. Os múltiplos de 18 menores que 100 são 18, 36, 54, 72 e 90, isto é, 5 números. O próximo, 108, já passa de 100. O mmc de 6 e 9 é 18, e todo múltiplo comum dos dois números é múltiplo desse mmc.\n\n3 e 4 esquecem algum dos múltiplos, como 90 ou 72. 6 incluiria 108, que passa de 100. E 2 conta só dois dos cinco múltiplos de 18.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Dois números primos distintos, como 7 e 11, têm algum divisor comum além do 1? Qual é o mdc de 7 e 11?",
    opcoes: [
      "2",
      "3",
      "7",
      "1",
      "11",
    ],
    correta: 3,
    explicacao:
      "Os divisores de 7 são 1 e 7, e os de 11 são 1 e 11. O único divisor comum é 1, então mdc(7, 11) = 1. Dois primos distintos nunca têm divisor comum além do 1, pois os únicos divisores de cada um são 1 e ele mesmo.\n\n2 e 3 não dividem nem 7 nem 11. 7 divide 7, mas não divide 11, e 11 divide 11, mas não divide 7. Assim, o maior divisor comum de dois primos diferentes é sempre 1.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Qual é o menor número positivo que deixa resto 0 quando dividido por 9 e por 5, isto é, o menor múltiplo comum de 9 e 5?",
    opcoes: [
      "15",
      "30",
      "90",
      "45",
      "9",
    ],
    correta: 3,
    explicacao:
      "Como 9 = 3² e 5 são primos entre si, o mmc é o produto deles: 9 × 5 = 45. Conferindo, 45 ÷ 9 = 5 e 45 ÷ 5 = 9, divisões exatas. Como 9 e 5 não têm fator primo em comum, o mdc deles é 1, e o mmc é igual ao produto: mmc × mdc = 45 × 1 = 9 × 5.\n\n15 é múltiplo de 5, mas não de 9. 30 é múltiplo de 5, mas não de 9. 90 é múltiplo comum, mas é o dobro do menor. E 9 é múltiplo de 9, mas não de 5.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Um relógio de parede badala a cada 12 minutos, começando a contar no minuto 12. Quantas vezes ele badala em 200 minutos?",
    opcoes: [
      "17",
      "15",
      "18",
      "16",
      "12",
    ],
    correta: 3,
    explicacao:
      "As badaladas acontecem nos minutos que são múltiplos de 12: 12, 24, 36, e assim por diante. O número de badaladas até o minuto 200 é o número de múltiplos de 12 que não passam de 200, isto é, o quociente inteiro de 200 por 12. Como 12 × 16 = 192 e 12 × 17 = 204, que já passa de 200, o relógio badala 16 vezes.\n\n17 conta também o minuto 204, que está fora dos 200 minutos. 15 esquece de contar a badalada do minuto 192. 18 e 12 contam de modo aproximado, sem efetuar a divisão de 200 por 12 nem verificar o último múltiplo.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Fatorando 100 em números primos, qual é a soma dos expoentes dos fatores primos da fatoração?",
    opcoes: [
      "2",
      "5",
      "10",
      "4",
      "20",
    ],
    correta: 3,
    explicacao:
      "Dividindo 100 por 2, dá 50; por 2 de novo, dá 25; 25 não é divisível por 2, então passa-se ao 5, que dá 5, e mais uma vez por 5, que dá 1. A fatoração é 100 = 2² × 5², com expoentes 2 e 2, e a soma deles é 2 + 2 = 4.\n\n2 é o expoente de um só dos fatores. 5 é um dos fatores primos, e não um expoente. 10 é a raiz quadrada de 100, sem relação com os expoentes. E 20 é o produto 2 × 10, que tampouco representa a soma dos expoentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Qual é o menor número pelo qual se deve dividir 54 para obter um quadrado perfeito, sabendo que o divisor também é divisor de 54?",
    opcoes: [
      "2",
      "3",
      "9",
      "6",
      "18",
    ],
    correta: 3,
    explicacao:
      "Fatorando, 54 = 2 × 3³. Para o quociente ser quadrado perfeito, todos os expoentes têm de ser pares. O 2 tem expoente 1 e o 3 tem expoente 3, ambos ímpares, então é preciso dividir por 2 × 3 = 6, deixando 3², isto é, 9, que é um quadrado perfeito. Conferindo, 54 ÷ 6 = 9 = 3².\n\nDividir por 2 dá 27, que não é quadrado. Dividir por 3 dá 18, que também não. Dividir por 9 dá 6, e dividir por 18 dá 3, nenhum dos dois é quadrado perfeito. O menor divisor que funciona é 6.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "media",
    enunciado:
      "Testando a divisibilidade pelos primos menores que a raiz do número, qual destes números maiores que 50 é primo?",
    opcoes: [
      "51",
      "57",
      "87",
      "89",
      "91",
    ],
    correta: 3,
    explicacao:
      "Para saber se um número é primo, testa-se a divisão pelos primos até a sua raiz quadrada. Para 89, a raiz é menor que 10, então basta testar 2, 3, 5 e 7: nenhum divide 89, portanto 89 é primo.\n\n51 = 3 × 17, pois a soma dos algarismos 5 + 1 = 6 é múltipla de 3. 57 = 3 × 19, pela mesma razão, 5 + 7 = 12. 87 = 3 × 29, pois 8 + 7 = 15. E 91 = 7 × 13, que parece primo mas não é. Todos eles têm divisores além de 1 e deles mesmos.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Um relógio apita a cada 8 minutos, outro a cada 12 e outro a cada 14. Se os três apitam juntos agora, daqui a quantos minutos apitam juntos de novo pela primeira vez?",
    opcoes: [
      "84",
      "336",
      "840",
      "56",
      "168",
    ],
    correta: 4,
    explicacao:
      "O primeiro encontro é o menor múltiplo comum de 8, 12 e 14. Fatorando, 8 = 2³, 12 = 2² × 3 e 14 = 2 × 7. Usando cada primo com o maior expoente, o mmc é 2³ × 3 × 7 = 168 minutos. Conferindo, 168 ÷ 8 = 21, 168 ÷ 12 = 14 e 168 ÷ 14 = 12, todas divisões exatas.\n\n84 é múltiplo de 12 e de 14, mas não de 8. 56 é múltiplo de 8 e de 14, mas não de 12. 336 e 840 são múltiplos comuns dos três números, mas não são o menor: 336 é o dobro e 840 é cinco vezes o mmc.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Quantos quadrados iguais, de lado inteiro e o maior possível, cabem em um retângulo de 48 m por 36 m, sem sobras?",
    opcoes: [
      "24",
      "48",
      "6",
      "8",
      "12",
    ],
    correta: 4,
    explicacao:
      "O maior lado possível é o mdc(48, 36) = 12 m. Com lado 12, cabem 48 ÷ 12 = 4 quadrados no comprimento e 36 ÷ 12 = 3 na largura, e 4 × 3 = 12 quadrados. Pela área, 48 × 36 = 1.728 m² e cada quadrado tem 12² = 144 m², e 1.728 ÷ 144 = 12.\n\n48 é o número de quadrados com lado 6 m, que não é o maior lado possível. 24, 8 e 6 não correspondem a nenhuma divisão exata do terreno em quadrados de lado inteiro, já que o número de quadrados é sempre (48 ÷ lado) × (36 ÷ lado).",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "O mmc de dois números é 60 e o mdc deles é 6. Se um dos números é 12, qual é o outro?",
    opcoes: [
      "60",
      "120",
      "15",
      "20",
      "30",
    ],
    correta: 4,
    explicacao:
      "Para dois números a e b, vale mdc(a, b) × mmc(a, b) = a × b. Então 6 × 60 = 360 = 12 × b, e b = 360 ÷ 12 = 30. Conferindo, mdc(12, 30) = 6 e mmc(12, 30) = 60. Essa relação, mdc × mmc = produto dos números, vale para quaisquer dois números naturais.\n\n60 e 120 têm mdc 12 com o número 12, e não 6. 15 e 20 têm mmc 60 com o 12, mas mdc 3 e 4, respectivamente. Só o 30 cumpre as duas condições ao mesmo tempo.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Qual é o menor número que, dividido por 4, 6 e 9, deixa resto 1 sempre, sendo maior que 1?",
    opcoes: [
      "73",
      "25",
      "13",
      "36",
      "37",
    ],
    correta: 4,
    explicacao:
      "Se o número deixa resto 1 nas três divisões, o número menos 1 é múltiplo comum de 4, 6 e 9. O menor múltiplo comum é 36, então o menor número é 36 + 1 = 37. Conferindo, 37 = 4 × 9 + 1 = 6 × 6 + 1 = 9 × 4 + 1.\n\n73 também deixa resto 1 nas três divisões, mas é o segundo número possível, 72 + 1. 25 e 13 deixam resto 1 na divisão por 4 e por 6, mas não por 9: 25 deixa resto 7, e 13 deixa resto 4. E 36 é múltiplo dos três números, deixando resto 0.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Dois números pares consecutivos, como 18 e 20, diferem de 2 unidades. Qual é o maior divisor comum de 18 e 20?",
    opcoes: [
      "4",
      "1",
      "3",
      "6",
      "2",
    ],
    correta: 4,
    explicacao:
      "Como 18 e 20 diferem de 2, qualquer divisor comum dos dois também divide a diferença, 2. Os divisores comuns possíveis são, portanto, 1 e 2, e como os dois números são pares, o 2 divide ambos: mdc(18, 20) = 2.\n\n1 é divisor comum, mas não o maior. 3 divide 18, mas não 20. 4 divide 20, mas não 18. E 6 divide 18, mas não 20. Só o 2 divide os dois números ao mesmo tempo, e nenhum número maior que 2 consegue fazer isso.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Qual é o menor número natural, maior que zero, que tem exatamente 5 divisores positivos?",
    opcoes: [
      "8",
      "12",
      "24",
      "36",
      "16",
    ],
    correta: 4,
    explicacao:
      "Como 5 é primo, um número com exatamente 5 divisores tem a forma p⁴, em que p é primo: os divisores são 1, p, p², p³ e p⁴. O menor é 2⁴ = 16, com divisores 1, 2, 4, 8 e 16. A regra geral é que um número pᵏ tem k + 1 divisores, e com k + 1 = 5 o expoente é k = 4.\n\n8 tem 4 divisores, 12 tem 6, 24 tem 8 e 36 tem 9. Nenhum deles tem exatamente 5 divisores, e 16 é o menor número que tem.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Quantos pares de números naturais (a, b), sem contar a ordem, têm produto 72 e máximo divisor comum 3?",
    opcoes: [
      "2",
      "3",
      "4",
      "0",
      "1",
    ],
    correta: 4,
    explicacao:
      "Se mdc(a, b) = 3, então a = 3x e b = 3y, com mdc(x, y) = 1. O produto 9xy = 72 dá xy = 8. As fatorações de 8 em dois fatores são 1 × 8 e 2 × 4, mas só (1, 8) tem mdc 1; em (2, 4), o mdc é 2. Então a única solução é a = 3 e b = 24, e mdc(3, 24) = 3.\n\n2 e 3 contam pares que não cumprem a condição do mdc, como (6, 12), de mdc 6, e (4, 18), de mdc 2. 4 é um número arbitrário de pares, pois 72 tem 6 pares de fatores, e só um deles tem mdc 3. E 0 supõe que nenhum par existe, mas o par (3, 24) existe.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Qual é o menor número divisível por 8, 9 e 10?",
    opcoes: [
      "180",
      "720",
      "120",
      "60",
      "360",
    ],
    correta: 4,
    explicacao:
      "O menor número divisível por 8, 9 e 10 é o mmc desses números. Fatorando, 8 = 2³, 9 = 3² e 10 = 2 × 5, então o mmc usa 2³ × 3² × 5 = 360. Conferindo, 360 ÷ 8 = 45, 360 ÷ 9 = 40 e 360 ÷ 10 = 36, todas exatas.\n\n180 não é divisível por 8. 720 é divisível pelos três, mas é o dobro do menor. 120 não é divisível por 9. E 60 não é divisível por 8 nem por 9.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Qual é o resto da divisão de 7¹⁰⁰ por 6?",
    opcoes: [
      "2",
      "3",
      "5",
      "0",
      "1",
    ],
    correta: 4,
    explicacao:
      "Como 7 deixa resto 1 na divisão por 6, pode-se escrever 7 = 6k + 1. Elevando a qualquer expoente, (6k + 1)ⁿ continua deixando resto 1 na divisão por 6, pois cada termo do desenvolvimento é múltiplo de 6, exceto o último, que é 1ⁿ = 1. Então o resto de 7¹⁰⁰ por 6 é 1.\n\n0 seria o resto se 7¹⁰⁰ fosse múltiplo de 6, mas 7 e 6 não têm fator comum. 2, 3 e 5 seriam restos de potências de outras bases na divisão por 6, mas as potências de 7 deixam sempre resto 1.",
  },
  {
    materia: "matematica-fund",
    tema: "Múltiplos, divisores, MMC e MDC",
    dificuldade: "dificil",
    enunciado:
      "Quantos números naturais de 1 a 100 são divisíveis por 7?",
    opcoes: [
      "12",
      "16",
      "10",
      "8",
      "14",
    ],
    correta: 4,
    explicacao:
      "Os múltiplos de 7 de 1 a 100 são 7 × 1, 7 × 2, ..., 7 × 14 = 98. O próximo, 7 × 15 = 105, já passa de 100. Então são 14 múltiplos. Em outras palavras, 100 ÷ 7 = 14, com resto 2, e o quociente dá a quantidade. Conferindo, 7 × 14 = 98 é o maior múltiplo de 7 que não passa de 100.\n\n12 e 16 erram a contagem por dois múltiplos. 10 e 8 contam menos múltiplos do que existem no intervalo.",
  },
];
