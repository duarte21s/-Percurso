/* Números decimais e dízimas (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__numeros-decimais-e-dizimas.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__numeros-decimais-e-dizimas.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "No número decimal 3,482, qual algarismo ocupa a casa dos centésimos?",
    opcoes: [
      "4",
      "2",
      "3",
      "8",
      "0",
    ],
    correta: 3,
    explicacao:
      "Depois da vírgula, as casas decimais seguem a ordem décimos, centésimos e milésimos. Em 3,482, o 4 está nos décimos, o 8 está nos centésimos e o 2 está nos milésimos. Portanto, o algarismo dos centésimos é o 8, que vale 8/100 = 0,08 nesse número.\n\n4 ocupa a casa dos décimos, e 2 ocupa a dos milésimos. 3 está à esquerda da vírgula, na casa das unidades. E 0 não aparece no número dado, então não poderia ocupar nenhuma das casas.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Entre os números 0,5, 0,45, 0,405, 0,05 e 0,054, qual é o maior?",
    opcoes: [
      "0,45",
      "0,5",
      "0,405",
      "0,05",
      "0,054",
    ],
    correta: 1,
    explicacao:
      "Para comparar decimais, igualam-se as casas decimais: 0,5 = 0,500; 0,45 = 0,450; 0,405 = 0,405; 0,05 = 0,050; 0,054 = 0,054. Comparando 500, 450, 405, 50 e 54, o maior é 500, que corresponde a 0,5.\n\n0,45 e 0,405 têm mais algarismos, o que leva muita gente a achar que são maiores, mas cada algarismo vale menos quanto mais à direita estiver. 0,05 e 0,054 começam com zero nos décimos, sendo menores que qualquer número com algarismo diferente de zero nessa casa.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Somando números decimais, quanto vale 2,35 + 1,4?",
    opcoes: [
      "3,39",
      "3,49",
      "4,75",
      "3,75",
      "3,65",
    ],
    correta: 3,
    explicacao:
      "Para somar decimais, alinham-se as vírgulas, completando com zero se preciso: 2,35 + 1,40. Somando os centésimos, 5 + 0 = 5; os décimos, 3 + 4 = 7; e as unidades, 2 + 1 = 3. O resultado é 3,75.\n\n3,39 soma o 1,4 como se fosse 1,04, sem alinhar as vírgulas. 3,49 e 3,65 erram algum dos décimos ou centésimos da soma. E 4,75 acrescenta uma unidade a mais do que o necessário.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Subtraindo números decimais, quanto vale 5,2 − 1,75?",
    opcoes: [
      "4,45",
      "3,55",
      "3,35",
      "4,55",
      "3,45",
    ],
    correta: 4,
    explicacao:
      "Alinham-se as vírgulas, completando com zero: 5,20 − 1,75. Nos centésimos, 0 − 5 pede empréstimo: 10 − 5 = 5; nos décimos, 1 − 7 também pede empréstimo: 11 − 7 = 4; nas unidades, 4 − 1 = 3. O resultado é 3,45. Conferindo, 3,45 + 1,75 = 5,20.\n\n4,45 esquece um dos empréstimos. 3,55 e 3,35 erram um dos décimos da diferença. E 4,55 erra tanto a unidade quanto os décimos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Multiplicando o número decimal 4,57 por 100, qual é o resultado?",
    opcoes: [
      "45,7",
      "4.570",
      "0,0457",
      "457",
      "4,57",
    ],
    correta: 3,
    explicacao:
      "Multiplicar por 100 desloca a vírgula duas casas para a direita: 4,57 × 100 = 457. Isso acontece porque cada algarismo passa a valer cem vezes mais, então o 4 das unidades vira centenas, o 5 dos décimos vira dezenas e o 7 dos centésimos vira unidades.\n\n45,7 desloca a vírgula só uma casa, como se fosse uma multiplicação por 10. 4.570 desloca três casas, equivalente a multiplicar por 1.000. 0,0457 desloca a vírgula para a esquerda, como se fosse uma divisão. E 4,57 mantém o número original, sem multiplicar.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Dividindo o número decimal 83,6 por 10, qual é o resultado?",
    opcoes: [
      "836",
      "8,36",
      "0,836",
      "83,06",
      "8,6",
    ],
    correta: 1,
    explicacao:
      "Dividir por 10 desloca a vírgula uma casa para a esquerda: 83,6 ÷ 10 = 8,36. Cada algarismo passa a valer dez vezes menos, então o 8 das dezenas vira unidades, o 3 das unidades vira décimos e o 6 dos décimos vira centésimos.\n\n836 desloca a vírgula para a direita, como se fosse uma multiplicação por 10. 0,836 desloca duas casas, equivalente a dividir por 100. 83,06 insere um zero sem deslocar a vírgula. E 8,6 perde o algarismo 3 ao deslocar a vírgula.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Escrevendo a fração 3/4 na forma decimal, qual é o resultado?",
    opcoes: [
      "0,34",
      "0,43",
      "3,4",
      "0,25",
      "0,75",
    ],
    correta: 4,
    explicacao:
      "Uma fração indica uma divisão: 3/4 = 3 ÷ 4. Como 3 é menor que 4, o quociente começa com 0, e dividir 30 por 4 dá 7, com resto 2; depois, 20 dividido por 4 dá 5, sem resto. O resultado é 0,75. Conferindo, 0,75 × 4 = 3.\n\n0,34 e 0,43 apenas justapõem o numerador e o denominador depois da vírgula. 3,4 faz o mesmo, com a vírgula no lugar errado. E 0,25 é o valor de 1/4, e não de 3/4.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Escrevendo o decimal 0,6 como fração irredutível, qual é o resultado?",
    opcoes: [
      "3/5",
      "6/10",
      "6/100",
      "1/6",
      "2/3",
    ],
    correta: 0,
    explicacao:
      "0,6 lê-se seis décimos, isto é, 6/10. Para deixar a fração irredutível, divide-se numerador e denominador pelo maior divisor comum, que é 2: 6 ÷ 2 = 3 e 10 ÷ 2 = 5, o que dá 3/5. Conferindo, 3 ÷ 5 = 0,6.\n\n6/10 vale o mesmo que 0,6, mas ainda pode ser simplificada, então não é irredutível. 6/100 vale 0,06, e não 0,6. 1/6 e 2/3 têm valores decimais diferentes de 0,6: 1/6 é cerca de 0,167 e 2/3, cerca de 0,667.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Arredondando 7,846 para o centésimo mais próximo, isto é, para duas casas decimais, qual é o resultado?",
    opcoes: [
      "7,85",
      "7,84",
      "7,8",
      "7,9",
      "8",
    ],
    correta: 0,
    explicacao:
      "Para arredondar aos centésimos, observa-se o algarismo dos milésimos: em 7,846, é o 6. Como 6 é maior ou igual a 5, o algarismo dos centésimos sobe uma unidade: 4 passa a 5, e o número fica 7,85.\n\n7,84 só corta o número, sem arredondar, mantendo o 4. 7,8 arredonda para o décimo mais próximo, e não para o centésimo. 7,9 também arredonda para décimos, subindo o 8. E 8 arredonda para o inteiro mais próximo.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Um lanche custa R$ 12,50 e um suco custa R$ 4,75. Quanto custam os dois juntos?",
    opcoes: [
      "16,25",
      "17,15",
      "17,25",
      "18,25",
      "17,75",
    ],
    correta: 2,
    explicacao:
      "O custo total é a soma dos dois preços: 12,50 + 4,75. Somando os centavos, 50 + 75 = 125, que dá 1 real e 25 centavos; somando os reais, 12 + 4 + 1 = 17. O total é R$ 17,25.\n\n16,25 esquece de levar 1 real da soma dos centavos. 17,15 erra os centavos por 10. 18,25 soma um real a mais. E 17,75 erra a soma dos centavos, usando 75 em vez de 25.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "Qual destas frações, quando escrita na forma decimal, gera uma dízima periódica?",
    opcoes: [
      "1/4",
      "3/5",
      "1/3",
      "7/8",
      "1/2",
    ],
    correta: 2,
    explicacao:
      "Uma fração irredutível tem representação decimal exata quando o denominador só tem os fatores 2 e 5. Quando o denominador tem outros fatores, como o 3 de 1/3, a divisão nunca termina e repete um grupo de algarismos: 1/3 = 0,333..., uma dízima periódica.\n\n1/4 = 0,25, 3/5 = 0,6, 7/8 = 0,875 e 1/2 = 0,5 têm denominadores só com fatores 2 e 5, e por isso seus decimais terminam. Nenhuma delas é periódica.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "facil",
    enunciado:
      "No número 0,0705, qual é o valor do algarismo 7?",
    opcoes: [
      "0,07",
      "0,007",
      "0,7",
      "7",
      "0,0007",
    ],
    correta: 0,
    explicacao:
      "Depois da vírgula, as casas são décimos, centésimos, milésimos e décimos de milésimo. Em 0,0705, o primeiro 0 está nos décimos, o 7 está nos centésimos, o 0 seguinte está nos milésimos e o 5 está nos décimos de milésimo. O 7 nos centésimos vale 7/100 = 0,07.\n\n0,007 seria o valor do 7 se estivesse nos milésimos, e 0,7 se estivesse nos décimos. 7 seria o valor nas unidades. E 0,0007 seria o valor nos décimos de milésimo.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Multiplicando decimais, quanto vale 2,4 × 0,5?",
    opcoes: [
      "12",
      "0,12",
      "2,9",
      "1,2",
      "1,9",
    ],
    correta: 3,
    explicacao:
      "Multiplicam-se os números como se fossem inteiros, 24 × 5 = 120, e depois se contam as casas decimais dos fatores: 2,4 tem uma e 0,5 tem uma, total de duas. Colocando a vírgula duas casas à esquerda em 120, obtém-se 1,20, isto é, 1,2. Outra forma é notar que 0,5 é a metade, e a metade de 2,4 é 1,2.\n\n12 esquece de posicionar a vírgula. 0,12 coloca a vírgula três casas à esquerda. 2,9 e 1,9 somam em vez de multiplicar, com um erro de centésimos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Uma fita custa R$ 1,25 o metro. Quanto custam 6 metros dessa fita?",
    opcoes: [
      "7,5",
      "75",
      "0,75",
      "6,25",
      "7,25",
    ],
    correta: 0,
    explicacao:
      "O preço é o produto do valor do metro pela quantidade: 1,25 × 6. Multiplicando 125 × 6 = 750 e contando as duas casas decimais de 1,25, a vírgula volta duas casas: 7,50, isto é, R$ 7,50. Conferindo por partes, 6 × 1 = 6 e 6 × 0,25 = 1,50, e 6 + 1,50 = 7,50.\n\n75 esquece de posicionar a vírgula. 0,75 coloca a vírgula três casas à esquerda. 6,25 soma em vez de multiplicar. E 7,25 erra os centavos da soma das partes.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Dividindo por um número decimal, quanto vale 7,2 ÷ 0,6?",
    opcoes: [
      "1,2",
      "120",
      "4,32",
      "0,12",
      "12",
    ],
    correta: 4,
    explicacao:
      "Para dividir por um decimal, multiplicam-se dividendo e divisor pela mesma potência de 10, sem alterar o quociente: 7,2 ÷ 0,6 = 72 ÷ 6 = 12. Conferindo, 12 × 0,6 = 7,2. Em palavras, o divisor 0,6 cabe exatamente doze vezes dentro de 7,2.\n\n1,2 e 120 erram a posição da vírgula no resultado, dez vezes menor ou maior. 4,32 é o produto 7,2 × 0,6, e não o quociente. E 0,12 erra a vírgula em duas casas.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Dividindo dois números inteiros e escrevendo o quociente como decimal, quanto vale 9 ÷ 4?",
    opcoes: [
      "2,5",
      "2,05",
      "1,25",
      "0,225",
      "2,25",
    ],
    correta: 4,
    explicacao:
      "Nove dividido por 4 dá 2, com resto 1. Colocando a vírgula no quociente e acrescentando um zero ao resto, 10 ÷ 4 dá 2, com resto 2; depois, 20 ÷ 4 dá 5, sem resto. O quociente é 2,25. Conferindo, 2,25 × 4 = 9.\n\n2,5 esquece um passo da divisão e arredonda. 2,05 troca a ordem dos algarismos decimais. 1,25 erra a parte inteira. E 0,225 desloca a vírgula uma casa a mais que o necessário.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Colocando 0,7, 0,07, 0,707, 0,77 e 0,7007 em ordem crescente, qual deles fica em terceiro lugar?",
    opcoes: [
      "0,7",
      "0,707",
      "0,07",
      "0,7007",
      "0,77",
    ],
    correta: 3,
    explicacao:
      "Igualando as casas decimais, os números ficam 0,7000; 0,0700; 0,7070; 0,7700; e 0,7007. Em ordem crescente: 0,0700 < 0,7000 < 0,7007 < 0,7070 < 0,7700, isto é, 0,07, 0,7, 0,7007, 0,707 e 0,77. O terceiro da lista é 0,7007.\n\n0,07 e 0,7 são o primeiro e o segundo. 0,707 é o quarto, e 0,77, o maior de todos. Números com mais casas decimais não são necessariamente maiores: é preciso comparar casa por casa.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Somando três números decimais, quanto vale 0,1 + 0,25 + 0,65?",
    opcoes: [
      "1",
      "0,9",
      "1,1",
      "0,99",
      "0,75",
    ],
    correta: 0,
    explicacao:
      "Alinhando as vírgulas e completando com zeros: 0,10 + 0,25 + 0,65. Somando os centésimos, 0 + 5 + 5 = 10, que dá 0 e leva 1; os décimos, 1 + 2 + 6 + 1 = 10, que dá 0 e leva 1; e as unidades, 0 + 0 + 0 + 1 = 1. O total é 1,00, isto é, 1.\n\n0,9 e 0,99 esquecem de levar um dos 1 no vai-um. 1,1 leva um a mais. E 0,75 é apenas a soma das duas últimas parcelas somada a um erro de décimos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Um pacote com 0,75 kg de café custa R$ 18,00. Mantendo o mesmo preço por quilo, quanto custa 1 kg de café?",
    opcoes: [
      "13,50",
      "24",
      "14,40",
      "25",
      "42",
    ],
    correta: 1,
    explicacao:
      "O preço do quilo é o valor do pacote dividido pela massa dele: 18 ÷ 0,75. Multiplicando dividendo e divisor por 100, fica 1.800 ÷ 75 = 24. Conferindo, 0,75 × 24 = 18, que é o preço do pacote.\n\n13,50 é 0,75 × 18, e não 18 ÷ 0,75. 14,40 erra a divisão por um fator 0,6. 25 é um arredondamento do valor certo, sem fazer a conta. E 42 soma 18 e 24 por engano.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Um carro percorre 12,5 km por litro de combustível. Quantos quilômetros ele percorre com 8 litros?",
    opcoes: [
      "20,5",
      "1,56",
      "96",
      "10",
      "100",
    ],
    correta: 4,
    explicacao:
      "A distância é o consumo por litro multiplicado pelo número de litros: 12,5 × 8 = 100 km. Multiplicando por partes, 12 × 8 = 96 e 0,5 × 8 = 4, e 96 + 4 = 100. Com 8 litros, o carro repete oito vezes a distância que faz com um único litro de combustível.\n\n20,5 soma 12,5 e 8 em vez de multiplicar. 1,56 divide 12,5 por 8, calculando o contrário. 96 esquece a parte decimal, 0,5 × 8. E 10 erra a ordem de grandeza.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Um pote contém 7/8 de litro de tinta. Escrevendo essa quantidade na forma decimal, quantos litros há no pote?",
    opcoes: [
      "0,78",
      "0,87",
      "0,785",
      "0,875",
      "0,75",
    ],
    correta: 3,
    explicacao:
      "Divide-se 7 por 8: como 7 é menor que 8, o quociente começa com 0; 70 ÷ 8 dá 8, com resto 6; 60 ÷ 8 dá 7, com resto 4; 40 ÷ 8 dá 5, sem resto. O resultado é 0,875. Conferindo, 0,875 × 8 = 7.\n\n0,78 e 0,785 justapõem o 7 e o 8 sem fazer a divisão. 0,87 para um passo antes do fim da divisão, arredondando. E 0,75 é o valor de 3/4, e não de 7/8.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Uma barra de chocolate pesa 0,125 kg. Como fração irredutível do quilograma, quanto ela pesa?",
    opcoes: [
      "125/1000",
      "1/125",
      "1/8",
      "12/100",
      "5/8",
    ],
    correta: 2,
    explicacao:
      "0,125 lê-se cento e vinte e cinco milésimos: 125/1000. O maior divisor comum de 125 e 1000 é 125, então 125 ÷ 125 = 1 e 1000 ÷ 125 = 8, o que dá 1/8. Conferindo, 1 ÷ 8 = 0,125.\n\n125/1000 vale o mesmo que 0,125, mas ainda pode ser simplificada, então não é irredutível. 1/125 vale 0,008. 12/100 vale 0,12. E 5/8 vale 0,625, cinco vezes o valor pedido.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "A dízima periódica 0,777... (com o 7 repetindo sem fim) é igual a qual fração?",
    opcoes: [
      "7/10",
      "7/9",
      "77/100",
      "7/99",
      "1/7",
    ],
    correta: 1,
    explicacao:
      "Chamando x = 0,777..., multiplicar por 10 dá 10x = 7,777..., e subtrair x deixa 9x = 7, logo x = 7/9. A regra prática é que, em uma dízima simples, a geratriz tem o período no numerador e tantos noves no denominador quantos forem os algarismos do período.\n\n7/10 vale 0,7, que termina. 77/100 vale 0,77, que também termina. 7/99 vale 0,0707..., com período 07. E 1/7 vale 0,142857..., com outro período.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Escrevendo a fração 5/11 na forma decimal, obtém-se uma dízima periódica. Qual é o período dela?",
    opcoes: [
      "45",
      "4",
      "5",
      "454",
      "54",
    ],
    correta: 0,
    explicacao:
      "Dividindo 5 por 11: 50 ÷ 11 dá 4, com resto 6; 60 ÷ 11 dá 5, com resto 5; e o resto 5 volta a aparecer, então a divisão passa a repetir os mesmos algarismos: 0,454545... O período, o grupo que se repete, é 45.\n\n4 e 5 são apenas os algarismos isolados, mas o período é o grupo completo. 454 pega um grupo além do período. E 54 inverte a ordem dos algarismos, que se repetem sempre na ordem 4, 5, 4, 5.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Multiplicando dois decimais menores que 1, quanto vale 0,25 × 0,4?",
    opcoes: [
      "1",
      "0,1",
      "0,01",
      "0,65",
      "0,29",
    ],
    correta: 1,
    explicacao:
      "Multiplicando como inteiros, 25 × 4 = 100, e contando as casas decimais dos fatores, duas em 0,25 e uma em 0,4, total de três, a vírgula volta três casas: 0,100, isto é, 0,1. Outra forma é notar que 0,25 é um quarto, e um quarto de 0,4 é 0,1.\n\n1 esquece de posicionar a vírgula. 0,01 coloca a vírgula uma casa a mais. 0,65 soma em vez de multiplicar. E 0,29 subtrai as parcelas sem relação com a operação pedida.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Arredondando 19,5 para o número inteiro mais próximo, pela regra usual de arredondar o 5 para cima, qual é o resultado?",
    opcoes: [
      "19",
      "19,5",
      "21",
      "18",
      "20",
    ],
    correta: 4,
    explicacao:
      "Para arredondar a inteiros, observa-se o algarismo dos décimos. Em 19,5, ele é o 5, e pela regra usual, valores a partir de 5 fazem o inteiro subir uma unidade. O 19 passa a 20, que é o inteiro mais próximo nesse critério.\n\n19 só corta a parte decimal, sem arredondar. 19,5 é o número original. 21 sobe duas unidades, e 18 desce uma unidade e mais uma, ambos exageros que não correspondem a nenhum critério de arredondamento.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Uma pessoa pagou uma conta de R$ 37,85 com uma nota de R$ 50,00. Quanto recebeu de troco?",
    opcoes: [
      "13,15",
      "12,25",
      "12,15",
      "11,15",
      "13,85",
    ],
    correta: 2,
    explicacao:
      "O troco é a diferença entre o valor pago e o valor da conta: 50,00 − 37,85. Nos centésimos, 0 − 5 pede empréstimo: 10 − 5 = 5; nos décimos, 9 − 8 = 1 depois do empréstimo; nas unidades, 9 − 7 = 2; e nas dezenas, 4 − 3 = 1. O troco é R$ 12,15. Conferindo, 12,15 + 37,85 = 50,00.\n\n13,15 e 11,15 erram a dezena do resultado. 12,25 erra os centavos. E 13,85 soma em vez de subtrair as casas decimais.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Um tanque tem 3,6 litros de suco, e cada copo leva 0,25 litro. Quantos copos podem ser enchidos completamente?",
    opcoes: [
      "15",
      "13",
      "14",
      "16",
      "36",
    ],
    correta: 2,
    explicacao:
      "O número de copos é 3,6 ÷ 0,25. Multiplicando dividendo e divisor por 100, fica 360 ÷ 25 = 14,4. Como só contam os copos cheios, são 14 copos, e sobram 0,4 de copo, isto é, 0,1 litro, que não enche mais um.\n\n15 arredonda 14,4 para cima, contando um copo que não fica cheio. 13 subtrai um copo a mais. 16 e 36 erram a divisão por uma casa decimal ou por um fator.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Comparando 0,6 com a fração 5/8, qual é o valor do maior dos dois, escrito na forma decimal?",
    opcoes: [
      "0,625",
      "0,6",
      "0,58",
      "0,85",
      "5,8",
    ],
    correta: 0,
    explicacao:
      "Escrevendo 5/8 como decimal: 5 ÷ 8 = 0,625. Comparando 0,600 com 0,625, o maior é 0,625, que corresponde à fração 5/8. Por isso, entre os dois números dados, o que representa a fração é o maior, por uma diferença de 0,025.\n\n0,6 é o valor do outro número, o menor dos dois. 0,58 e 5,8 são o resultado de justapor os algarismos 5 e 8, sem fazer a divisão. E 0,85 também não vem de nenhuma conta correta com 5 e 8.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Somando decimais com quantidades diferentes de casas, quanto vale 12,4 + 3,75 + 0,085?",
    opcoes: [
      "16,325",
      "16,235",
      "15,235",
      "16,135",
      "17,235",
    ],
    correta: 1,
    explicacao:
      "Alinham-se as vírgulas, completando com zeros: 12,400 + 3,750 + 0,085. Somando os milésimos, 0 + 0 + 5 = 5; os centésimos, 0 + 5 + 8 = 13, que dá 3 e leva 1; os décimos, 4 + 7 + 0 + 1 = 12, que dá 2 e leva 1; e as unidades, 2 + 3 + 0 + 1 = 6, mais 1 das dezenas. O total é 16,235.\n\n16,325 troca os algarismos dos décimos e centésimos. 15,235 esquece um vai-um. 16,135 e 17,235 erram um dos décimos ou as unidades.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Multiplicando decimais pequenos, quanto vale 0,04 × 0,3?",
    opcoes: [
      "0,12",
      "0,012",
      "0,0012",
      "0,7",
      "0,007",
    ],
    correta: 1,
    explicacao:
      "Multiplicando como inteiros, 4 × 3 = 12, e contando as casas decimais dos fatores, duas em 0,04 e uma em 0,3, total de três, a vírgula volta três casas: 0,012. Em outra forma, 0,3 de 0,04 é três décimos de quatro centésimos, isto é, doze milésimos.\n\n0,12 posiciona a vírgula duas casas à esquerda, em vez de três. 0,0012 a coloca quatro casas. 0,7 soma em vez de multiplicar. E 0,007 erra o algarismo, usando 7 em vez de 12.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Dividindo dois decimais, quanto vale 4,5 ÷ 1,5?",
    opcoes: [
      "3",
      "0,3",
      "30",
      "6,75",
      "6",
    ],
    correta: 0,
    explicacao:
      "Multiplicando dividendo e divisor por 10, fica 45 ÷ 15 = 3. Conferindo, 3 × 1,5 = 4,5. Em outras palavras, o número 1,5 cabe exatamente três vezes em 4,5. Como o quociente é inteiro, não há resto, e a divisão é exata entre os dois decimais.\n\n0,3 e 30 erram a posição da vírgula no resultado, dez vezes menor ou maior. 6,75 é o produto 4,5 × 1,5, e não o quociente. E 6 é o dobro do quociente correto.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Uma tábua de 2,4 metros é cortada em pedaços de 0,3 metro cada. Quantos pedaços inteiros saem dessa tábua?",
    opcoes: [
      "7",
      "9",
      "8",
      "80",
      "0,8",
    ],
    correta: 2,
    explicacao:
      "O número de pedaços é 2,4 ÷ 0,3. Multiplicando por 10, fica 24 ÷ 3 = 8 pedaços, sem sobra. Conferindo, 8 × 0,3 = 2,4 metros, o comprimento total da tábua. Cada pedaço ocupa 0,3 metro, e oito pedaços lado a lado cobrem a tábua inteira, sem sobra.\n\n7 e 9 erram a divisão por uma unidade. 80 desloca a vírgula uma casa para a direita. E 0,8 a desloca para a esquerda, como se 2,4 fosse dividido por 3 sem ajustar o divisor.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Qual dos números abaixo está entre 0,3 e 0,4 na reta numérica?",
    opcoes: [
      "0,25",
      "0,45",
      "0,35",
      "0,5",
      "0,04",
    ],
    correta: 2,
    explicacao:
      "Igualando as casas decimais, 0,3 = 0,30 e 0,4 = 0,40. Um número entre eles tem de ser maior que 0,30 e menor que 0,40. Entre as opções, 0,35 cumpre as duas condições, pois 0,30 < 0,35 < 0,40. Há muitos outros números nesse trecho, como 0,31 ou 0,399, pois entre dois decimais sempre existem infinitos outros.\n\n0,25 e 0,04 são menores que 0,3. 0,45 e 0,5 são maiores que 0,4. Nenhum deles fica no trecho da reta compreendido entre 0,3 e 0,4.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Escrevendo o decimal 2,75 como fração irredutível, qual é o resultado?",
    opcoes: [
      "275/100",
      "2/75",
      "11/4",
      "27/5",
      "7/4",
    ],
    correta: 2,
    explicacao:
      "2,75 lê-se duzentos e setenta e cinco centésimos: 275/100. O maior divisor comum de 275 e 100 é 25, então 275 ÷ 25 = 11 e 100 ÷ 25 = 4, o que dá 11/4. Conferindo, 11 ÷ 4 = 2,75.\n\n275/100 vale o mesmo que 2,75, mas ainda pode ser simplificada, então não é irredutível. 2/75 e 27/5 justapõem algarismos sem respeitar o valor decimal. E 7/4 vale 1,75, que perde uma unidade inteira.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Multiplicando um decimal por uma potência de 10, quanto vale 0,0052 × 1.000?",
    opcoes: [
      "52",
      "0,52",
      "0,0052",
      "5,2",
      "520",
    ],
    correta: 3,
    explicacao:
      "Multiplicar por 1.000 desloca a vírgula três casas para a direita: 0,0052 × 1.000 = 5,2. Cada algarismo passa a valer mil vezes mais, então o 5 dos milésimos vira unidade e o 2 dos décimos de milésimo vira décimo.\n\n52 desloca a vírgula quatro casas. 0,52 a desloca duas casas. 0,0052 é o número original, sem multiplicar. E 520 desloca a vírgula cinco casas.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Qual destas frações tem representação decimal exata, isto é, que termina depois de algumas casas decimais?",
    opcoes: [
      "1/3",
      "5/6",
      "2/9",
      "4/7",
      "7/20",
    ],
    correta: 4,
    explicacao:
      "A representação decimal de uma fração irredutível é exata quando o denominador só tem os fatores primos 2 e 5. Como 20 = 2² × 5, a fração 7/20 é exata: 7 ÷ 20 = 0,35. Essa é a regra prática para prever se a divisão termina, antes mesmo de efetuá-la.\n\n1/3, 5/6, 2/9 e 4/7 têm denominadores com fatores 3 ou 7, e por isso geram dízimas periódicas: 0,333..., 0,8333..., 0,222... e 0,571428571428..., respectivamente.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Três amigos gastaram R$ 12,40, R$ 9,80 e R$ 15,60. Dividindo o total igualmente, quanto cada um paga?",
    opcoes: [
      "12,60",
      "12,40",
      "13,20",
      "11,80",
      "37,80",
    ],
    correta: 0,
    explicacao:
      "O total gasto é 12,40 + 9,80 + 15,60 = 37,80. Dividindo entre 3 amigos, 37,80 ÷ 3 = 12,60. Conferindo, 3 × 12,60 = 37,80. Conferindo por partes, 12,40 + 9,80 = 22,20 e 22,20 + 15,60 = 37,80, e a divisão por 3 fecha sem resto, dando 12,60 para cada um.\n\n12,40 é só o gasto do primeiro amigo. 13,20 e 11,80 erram a divisão por algumas casas decimais. E 37,80 é o total, sem dividir pelo número de amigos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Escrevendo o número misto 2 3/5 na forma decimal, qual é o resultado?",
    opcoes: [
      "2,35",
      "2,5",
      "2,06",
      "3,5",
      "2,6",
    ],
    correta: 4,
    explicacao:
      "A parte inteira, 2, permanece, e a parte fracionária 3/5 vira 3 ÷ 5 = 0,6. Juntando, 2 + 0,6 = 2,6. Conferindo, 2,6 = 26/10 = 13/5 = 2 3/5. Como 5 é um dos fatores de 10, a fração vira decimal exato, sem dízima, bastando multiplicar numerador e denominador por 2.\n\n2,35 justapõe o 3 e o 5 depois da vírgula, sem fazer a divisão. 2,5 é o valor de 2 1/2. 2,06 insere um zero sem fazer a conta. E 3,5 soma as partes em vez de converter a fração.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "media",
    enunciado:
      "Qual fração é a geratriz da dízima periódica composta 0,1666..., em que só o 6 se repete?",
    opcoes: [
      "1/7",
      "1/60",
      "1/6",
      "166/1000",
      "1/5",
    ],
    correta: 2,
    explicacao:
      "Chamando x = 0,1666..., multiplicar por 10 dá 10x = 1,666..., e por 100 dá 100x = 16,666.... Subtraindo, 90x = 15, logo x = 15/90 = 1/6. Conferindo, 1 ÷ 6 = 0,1666.... A parte que não se repete, o 1 logo depois da vírgula, é o que exige multiplicar por 10 e por 100 antes de subtrair.\n\n1/7 gera 0,142857..., com outro período. 1/60 vale 0,01666..., com o 1 deslocado uma casa. 166/1000 vale 0,166, que termina. E 1/5 vale 0,2.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Uma calculadora mostra 0,1222..., com o algarismo 2 se repetindo sem fim. Que fração irredutível originou esse resultado?",
    opcoes: [
      "12/99",
      "1/8",
      "11/9",
      "122/900",
      "11/90",
    ],
    correta: 4,
    explicacao:
      "Separando a parte que não se repete, 0,1222... = 0,1 + 0,0222... = 1/10 + 2/90 = 9/90 + 2/90 = 11/90. Pelo método do produto, 100x = 12,222... e 10x = 1,222..., e subtraindo, 90x = 11, logo x = 11/90.\n\n12/99 vale 0,1212..., com período 12. 1/8 vale 0,125, que termina. 11/9 vale 1,222..., com uma unidade a mais. E 122/900 vale 0,13555..., que não é 0,1222....",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Qual fração é a geratriz da dízima periódica 2,444..., em que o 4 se repete sem fim?",
    opcoes: [
      "24/9",
      "22/9",
      "244/100",
      "2/9",
      "11/4",
    ],
    correta: 1,
    explicacao:
      "A parte inteira, 2, fica de fora: 2,444... = 2 + 0,444... = 2 + 4/9 = 18/9 + 4/9 = 22/9. Pelo método do produto, 10x = 24,444... e x = 2,444..., e subtraindo, 9x = 22, logo x = 22/9. Como a parte decimal só tem um algarismo no período, o denominador da geratriz é 9.\n\n24/9 simplifica para 8/3 = 2,666..., que não é 2,444.... 244/100 vale 2,44, que termina. 2/9 vale 0,222..., sem a parte inteira. E 11/4 vale 2,75.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que 0,333... = 1/3 e 0,666... = 2/3, quanto vale a soma 0,333... + 0,666...?",
    opcoes: [
      "0,9",
      "1,1",
      "0,99",
      "1",
      "0,999",
    ],
    correta: 3,
    explicacao:
      "Escrevendo as dízimas como frações, 1/3 + 2/3 = 3/3 = 1. A soma das duas dízimas é exatamente 1, e não um número próximo de 1. Somando os algarismos casa a casa, 3 + 6 = 9 em todas as casas, e 0,999... é outra forma de escrever 1.\n\n0,9, 0,99 e 0,999 são números finitos, menores que 1, e a soma das dízimas infinitas não para em nenhuma casa. E 1,1 passa de 1, o que é impossível, pois 1/3 + 2/3 não excede 1.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Entre os números 1/6, 0,16, 0,167, 0,1666 e 0,17, qual é o maior?",
    opcoes: [
      "1/6",
      "0,16",
      "0,167",
      "0,17",
      "0,1666",
    ],
    correta: 3,
    explicacao:
      "Escrevendo todos com quatro casas decimais: 1/6 = 0,1666... ≈ 0,1667; 0,16 = 0,1600; 0,167 = 0,1670; 0,1666 = 0,1666; e 0,17 = 0,1700. O maior é 0,1700, que corresponde a 0,17.\n\n0,167 é o segundo maior, por pouco. 1/6 vale 0,1666..., que fica abaixo de 0,167. 0,1666 é o número que mais se aproxima de 1/6 por baixo. E 0,16 é o menor de todos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Um atleta corre 3,6 km em 18 minutos. Mantendo o mesmo ritmo, quantos quilômetros ele corre em 45 minutos?",
    opcoes: [
      "8,1",
      "7,2",
      "10",
      "9",
      "16,2",
    ],
    correta: 3,
    explicacao:
      "O ritmo é 3,6 ÷ 18 = 0,2 km por minuto. Em 45 minutos, a distância é 0,2 × 45 = 9 km. Outra forma é notar que 45 minutos são 2,5 vezes 18 minutos, e 3,6 × 2,5 = 9. Nos dois caminhos, o resultado é o mesmo, pois a distância é proporcional ao tempo de corrida.\n\n8,1 e 7,2 erram o ritmo por minuto, a primeira por um fator 0,9 e a segunda por 0,8. 10 arredonda. E 16,2 multiplica 3,6 por 4,5, usando o número errado de minutos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Com R$ 50,00, uma pessoa compra o maior número possível de cadernos de R$ 6,75 cada. Quanto dinheiro sobra?",
    opcoes: [
      "7",
      "2,75",
      "3,25",
      "2,25",
      "4,75",
    ],
    correta: 1,
    explicacao:
      "Dividindo 50 por 6,75, obtém-se 7,4..., então a pessoa compra 7 cadernos, gastando 7 × 6,75 = 47,25. Sobram 50,00 − 47,25 = 2,75 reais. Conferindo, 8 cadernos custariam 54,00, que passa de 50.\n\n7 é o número de cadernos comprados, e não o troco. 3,25 e 2,25 erram a subtração por 50 centavos ou 1 real. E 4,75 corresponderia a comprar apenas 6 cadernos, 40,50, o que deixa dinheiro suficiente para mais um.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Escrevendo 1/7 na forma decimal, obtém-se uma dízima periódica. Quantos algarismos tem o período dela?",
    opcoes: [
      "1",
      "7",
      "6",
      "3",
      "12",
    ],
    correta: 2,
    explicacao:
      "Dividindo 1 por 7, os restos que aparecem são 3, 2, 6, 4, 5 e 1, e o resto 1 volta ao ponto de partida depois de seis passos: 0,142857142857... O período 142857 tem 6 algarismos, o máximo possível para o divisor 7, que só admite 6 restos diferentes de zero.\n\n1 e 3 são períodos de outras frações, como 1/3 = 0,333.... 7 é o denominador, e não o tamanho do período. E 12 dobra o período, contando a repetição duas vezes.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Na dízima 1/7 = 0,142857142857..., em que o período 142857 se repete sem fim, qual algarismo ocupa a 100ª casa decimal?",
    opcoes: [
      "8",
      "1",
      "4",
      "5",
      "7",
    ],
    correta: 0,
    explicacao:
      "O período tem 6 algarismos, então a posição 100 se repete como a posição 100 − 96 = 4, já que 96 é o maior múltiplo de 6 que não passa de 100. O 4º algarismo do período 142857 é o 8. Assim, a 100ª casa decimal é 8.\n\n1, 4, 5 e 7 são os algarismos das posições 1, 2, 5 e 6 do período, mas não da posição 4, que é a que corresponde à 100ª casa. E 2 é o algarismo da 3ª posição, que também não corresponde à 100ª casa decimal.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que 0,333... = 1/3, quanto vale o produto 0,333... × 0,6, escrito na forma decimal?",
    opcoes: [
      "0,18",
      "0,22",
      "0,1998",
      "2",
      "0,2",
    ],
    correta: 4,
    explicacao:
      "Substituindo a dízima pela fração, 0,333... × 0,6 = 1/3 × 0,6 = 0,6 ÷ 3 = 0,2. Em frações, 1/3 × 3/5 = 3/15 = 1/5 = 0,2. Trocar a dízima pela fração evita o erro de truncar o decimal e garante o resultado exato.\n\n0,18 multiplica 0,3 por 0,6, tratando a dízima como se fosse finita. 0,22 e 0,1998 são resultados de multiplicar 0,333 ou 0,3333, truncando a dízima. E 2 desloca a vírgula uma casa a mais que o necessário.",
  },
  {
    materia: "matematica-fund",
    tema: "Números decimais e dízimas",
    dificuldade: "dificil",
    enunciado:
      "Um número multiplicado por 0,25 resulta em 3,5. Qual é esse número?",
    opcoes: [
      "0,875",
      "14",
      "1,4",
      "7",
      "0,14",
    ],
    correta: 1,
    explicacao:
      "Chamando o número de x, a equação é x × 0,25 = 3,5. Dividindo os dois lados por 0,25, x = 3,5 ÷ 0,25 = 350 ÷ 25 = 14. Conferindo, 14 × 0,25 = 3,5, que é um quarto de 14. Como 0,25 é um quarto, o número procurado é o quádruplo de 3,5, o que dá o mesmo valor.\n\n0,875 multiplica 3,5 por 0,25, em vez de dividir. 1,4 e 0,14 erram a posição da vírgula no resultado. E 7 é o dobro de 3,5, sem relação com a divisão por 0,25.",
  },
];
