/* Porcentagem e juros simples (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__porcentagem-e-juros-simples.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__porcentagem-e-juros-simples.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Calculando uma porcentagem de uma quantidade, quanto é 20% de 150?",
    opcoes: [
      "30",
      "20",
      "75",
      "300",
      "170",
    ],
    correta: 0,
    explicacao:
      "Vinte por cento é a razão 20/100 = 0,2. Então 20% de 150 é 0,2 × 150 = 30. Outra forma é calcular 10% de 150, que é 15, e dobrar: 15 × 2 = 30. Conferindo, 30 é um quinto de 150, pois 5 × 30 = 150.\n\n20 apenas repete a taxa, sem aplicá-la à quantidade. 75 é 50% de 150, e 300 é 200%. E 170 soma 20 a 150, como se a porcentagem fosse uma quantia em unidades.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Um produto de R$ 80 recebe um desconto de 10%. Qual é o preço depois do desconto?",
    opcoes: [
      "72",
      "70",
      "8",
      "88",
      "90",
    ],
    correta: 0,
    explicacao:
      "O desconto é 10% de 80 = 0,1 × 80 = R$ 8. O preço final é 80 − 8 = R$ 72. Pelo fator, pagar 90% do preço dá 0,9 × 80 = 72, o mesmo valor. Conferindo, 72 + 8 = 80.\n\n70 subtrai 10 reais, como se os 10% fossem uma quantia fixa. 8 é só o valor do desconto, e não o preço final. 88 soma o desconto em vez de subtraí-lo. E 90 confunde o preço final com a porcentagem paga.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Um produto de R$ 200 sofre um aumento de 15%. Qual é o novo preço?",
    opcoes: [
      "230",
      "215",
      "30",
      "170",
      "260",
    ],
    correta: 0,
    explicacao:
      "O aumento é 15% de 200 = 0,15 × 200 = R$ 30, e o novo preço é 200 + 30 = R$ 230. Pelo fator, o preço passa a ser 115% do antigo: 1,15 × 200 = 230. Conferindo, 230 − 200 = 30, que é 15% de 200.\n\n215 soma 15 reais, como se os 15% fossem uma quantia fixa. 30 é só o valor do aumento. 170 subtrai o aumento, tratando-o como desconto. E 260 corresponde a um aumento de 30%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Escrevendo a fração 3/4 na forma de porcentagem, qual é o resultado?",
    opcoes: [
      "75%",
      "34%",
      "43%",
      "7,5%",
      "0,75%",
    ],
    correta: 0,
    explicacao:
      "Uma porcentagem é uma fração de denominador 100. Como 4 × 25 = 100, multiplica-se numerador e denominador por 25: 3/4 = 75/100 = 75%. Pelo decimal, 3 ÷ 4 = 0,75, e multiplicar por 100 dá 75%.\n\n34% e 43% apenas juntam os algarismos 3 e 4. 7,5% desloca a vírgula uma casa a menos do que deveria. E 0,75% mantém o decimal, sem multiplicar por 100 para passar a porcentagem.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Sabendo que 50% de um número é 40, qual é esse número?",
    opcoes: [
      "80",
      "20",
      "90",
      "60",
      "45",
    ],
    correta: 0,
    explicacao:
      "Cinquenta por cento é a metade, então o número é o dobro de 40: 2 × 40 = 80. Pela equação, 0,5 × x = 40, e x = 40 ÷ 0,5 = 80. Conferindo, metade de 80 é 40. Por isso, o número procurado é sempre o dobro quando se conhece a metade.\n\n20 é metade de 40, isto é, 50% do valor dado, e não o número procurado. 90 e 45 somam 50 ou 5 ao valor, sem relação com a porcentagem. E 60 é 1,5 vez 40, que corresponderia a 150%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Numa turma de 40 alunos, 25% faltaram à aula. Quantos alunos faltaram?",
    opcoes: [
      "10",
      "15",
      "25",
      "30",
      "16",
    ],
    correta: 0,
    explicacao:
      "Vinte e cinco por cento é um quarto, então os faltosos são 40 ÷ 4 = 10 alunos. Pela conta, 0,25 × 40 = 10. Conferindo, 10 faltosos e 30 presentes somam os 40 alunos.\n\n15 subtrai 25 de 40. 25 repete a taxa, sem aplicá-la ao total. 30 é o número de alunos presentes, isto é, 75% da turma. E 16 é 40% de 40, uma taxa diferente da do enunciado.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Escrevendo o número decimal 0,35 na forma de porcentagem, qual é o resultado?",
    opcoes: [
      "35%",
      "3,5%",
      "0,35%",
      "350%",
      "0,035%",
    ],
    correta: 0,
    explicacao:
      "Para passar de decimal a porcentagem, multiplica-se por 100: 0,35 × 100 = 35, então 0,35 = 35%. Como 0,35 = 35/100, a porcentagem é o numerador da fração com denominador 100.\n\n3,5% desloca a vírgula uma casa a menos. 0,35% mantém o decimal, sem multiplicar por 100. 350% desloca a vírgula uma casa a mais. E 0,035% desloca a vírgula na direção errada.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Um capital de R$ 1.000 é aplicado a juros simples, à taxa de 2% ao mês. Qual é o juro recebido depois de 1 mês, em reais?",
    opcoes: [
      "20",
      "200",
      "2",
      "1.020",
      "2.000",
    ],
    correta: 0,
    explicacao:
      "O juro de um mês é a taxa aplicada ao capital: 2% de 1.000 = 0,02 × 1.000 = R$ 20. Nos juros simples, esse valor é o mesmo em cada mês, porque a taxa incide sempre sobre o capital inicial. Conferindo, 20 é 2 centésimos de 1.000.\n\n200 desloca a vírgula uma casa a mais, como 20% de 1.000. 2 repete a taxa, sem aplicá-la ao capital. 1.020 é o montante, isto é, o capital mais o juro. E 2.000 multiplica o capital por 2, como se a taxa fosse de 200%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Que porcentagem de 48 representa o número 12?",
    opcoes: [
      "25%",
      "12%",
      "4%",
      "40%",
      "36%",
    ],
    correta: 0,
    explicacao:
      "A porcentagem é a razão entre a parte e o todo: 12/48 = 1/4 = 0,25 = 25%. Conferindo, 25% de 48 é 0,25 × 48 = 12, que é a parte dada. Em geral, a porcentagem que uma parte representa do todo se calcula dividindo a parte pelo todo.\n\n12% repete o número da parte, como se fosse a taxa. 4% usa a razão 48 ÷ 12 = 4 e a escreve como porcentagem, o que inverte parte e todo. 40% e 36% não saem de nenhuma divisão correta de 12 por 48.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Uma camiseta que custava R$ 50 passou a custar R$ 40 à vista. Qual foi o desconto percentual?",
    opcoes: [
      "20%",
      "10%",
      "25%",
      "40%",
      "80%",
    ],
    correta: 0,
    explicacao:
      "O desconto foi de 50 − 40 = R$ 10. Em relação ao preço original, 10/50 = 0,2 = 20%. Conferindo, 20% de 50 é 10, e 50 − 10 = 40.\n\n10% usa o valor em reais como se fosse a porcentagem. 25% calcula 10/40, tomando o preço novo como base, em vez do preço original. 40% repete o preço final. E 80% é a fração do preço original que continua sendo paga, 40/50.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Fazendo o cálculo de cabeça, quanto é 10% de 350?",
    opcoes: [
      "3,5",
      "35",
      "350",
      "10",
      "3.500",
    ],
    correta: 1,
    explicacao:
      "Dez por cento é a décima parte, então 10% de 350 é 350 ÷ 10 = 35. Na prática, desloca-se a vírgula uma casa para a esquerda: 350 vira 35,0. Esse truque funciona com qualquer número, pois dividir por 10 é o mesmo que tomar 10%.\n\n3,5 desloca a vírgula duas casas, como 1% de 350. 350 é o valor inteiro, sem aplicar a taxa. 10 repete a taxa. E 3.500 desloca a vírgula na direção errada, como 1.000% de 350.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "facil",
    enunciado:
      "Um salário de R$ 2.000 tem um reajuste de 5%. De quantos reais é o aumento?",
    opcoes: [
      "50",
      "100",
      "2.100",
      "10",
      "1.900",
    ],
    correta: 1,
    explicacao:
      "O aumento é 5% de 2.000 = 0,05 × 2.000 = R$ 100. Por partes, 1% de 2.000 é 20, e 5 × 20 = 100. Conferindo, o novo salário é 2.000 + 100 = R$ 2.100.\n\n50 é 2,5% do salário, metade do aumento correto. 2.100 é o novo salário, e não o valor do aumento. 10 é 0,5%, um décimo do aumento. E 1.900 é o salário depois de um desconto de 5%, e não de um aumento.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "O preço de um produto sobe 20% e, em seguida, cai 20%. Em relação ao preço inicial, como fica o preço final?",
    opcoes: [
      "igual",
      "4% menor",
      "4% maior",
      "20% menor",
      "40% maior",
    ],
    correta: 1,
    explicacao:
      "Depois do aumento, o preço é 1,2 vez o inicial. A queda de 20% incide sobre esse novo valor, que é maior: 20% de 1,2P é 0,24P. O preço final é 1,2P − 0,24P = 0,96P, isto é, 96% do inicial, ou 4% menor. Pelos fatores, 1,2 × 0,8 = 0,96.\n\nIgual supõe que +20% e −20% se cancelam, o erro mais comum, pois as duas taxas têm bases diferentes. 4% maior troca o sinal da variação. 20% menor considera só a queda. E 40% maior soma as duas taxas.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um capital de R$ 2.000 é aplicado a juros simples, à taxa de 3% ao mês, por 5 meses. Qual é o montante no final?",
    opcoes: [
      "2.150",
      "2.300",
      "2.600",
      "300",
      "2.030",
    ],
    correta: 1,
    explicacao:
      "O juro mensal é 3% de 2.000 = R$ 60, o mesmo em todos os meses nos juros simples. Em 5 meses, o juro é 5 × 60 = R$ 300, e o montante é o capital mais o juro: 2.000 + 300 = R$ 2.300. Nos juros simples, os juros de cada mês são calculados sempre sobre o capital inicial, e por isso crescem de forma constante.\n\n2.150 e 2.030 erram o juro mensal ou o número de meses. 2.600 corresponde a 10 meses de juros. E 300 é só o juro, sem somar ao capital inicial.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um capital de R$ 800 rendeu R$ 96 de juros simples em 4 meses. Qual foi a taxa mensal?",
    opcoes: [
      "12%",
      "3%",
      "2,4%",
      "4%",
      "0,3%",
    ],
    correta: 1,
    explicacao:
      "Nos juros simples, J = C · i · t, então i = 96 ÷ (800 × 4) = 96 ÷ 3.200 = 0,03, isto é, 3% ao mês. Conferindo, 3% de 800 é 24 por mês, e 4 × 24 = 96.\n\n12% é o juro de todo o período em relação ao capital, 96/800, sem dividir pelos 4 meses. 2,4% e 0,3% erram uma casa ou o cálculo da divisão. E 4% usa o número de meses como se fosse a taxa.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Em quantos meses um capital de R$ 500, a juros simples de 2% ao mês, rende R$ 60 de juros?",
    opcoes: [
      "5",
      "6",
      "12",
      "3",
      "30",
    ],
    correta: 1,
    explicacao:
      "O juro mensal é 2% de 500 = R$ 10. Para chegar a R$ 60, são necessários 60 ÷ 10 = 6 meses. Conferindo, 6 × 10 = 60. Nos juros simples, o tempo necessário é o juro total dividido pelo juro de cada período, e cada mês rende o mesmo valor.\n\n5, 3 e 12 renderiam R$ 50, R$ 30 e R$ 120, e não R$ 60. E 30 renderia R$ 300, pois 30 × 10 = 300. O número de meses precisa ser o quociente entre o juro total e o juro de um mês.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um produto recebe um desconto de 10% e, depois, mais 10% sobre o novo preço. Qual é o desconto total, em relação ao preço original?",
    opcoes: [
      "20%",
      "19%",
      "10%",
      "21%",
      "1%",
    ],
    correta: 1,
    explicacao:
      "Cada desconto multiplica o preço por 0,9. Os dois descontos seguidos dão 0,9 × 0,9 = 0,81, então o preço final é 81% do original e o desconto total é 100% − 81% = 19%. Com um preço de R$ 100, o primeiro desconto leva a 90 e o segundo, 10% de 90 = 9, leva a 81.\n\n20% soma as duas taxas, ignorando que o segundo desconto incide sobre um valor menor. 10% considera só um dos descontos. 21% confunde o desconto com um acréscimo. E 1% é a diferença entre 20% e 19%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "O preço de um produto passou de R$ 40 para R$ 50. De quantos por cento foi o aumento?",
    opcoes: [
      "20%",
      "25%",
      "10%",
      "50%",
      "125%",
    ],
    correta: 1,
    explicacao:
      "O aumento foi 50 − 40 = R$ 10. Em relação ao preço antigo, 10/40 = 0,25 = 25%. Conferindo, 25% de 40 é 10, e 40 + 10 = 50.\n\n20% calcula 10/50, tomando o preço novo como base, em vez do antigo. 10% usa o aumento em reais como se fosse a porcentagem. 50% repete o preço novo. E 125% é a razão 50/40, que compara o preço novo com o antigo em vez de medir o aumento.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma cidade tem 8.000 habitantes e a população cresce 12% em um ano. Quantos habitantes ela tem depois desse crescimento?",
    opcoes: [
      "8.012",
      "8.960",
      "9.600",
      "960",
      "7.040",
    ],
    correta: 1,
    explicacao:
      "O crescimento é 12% de 8.000 = 0,12 × 8.000 = 960 habitantes. A nova população é 8.000 + 960 = 8.960. Pelo fator, 1,12 × 8.000 = 8.960. Conferindo, 960 ÷ 8.000 = 0,12.\n\n8.012 soma 12 habitantes, como se a taxa fosse uma quantia fixa. 9.600 corresponde a um crescimento de 20%. 960 é só o acréscimo, sem somar à população inicial. E 7.040 é o resultado de uma queda de 12%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Numa prova com 50 questões, Ana acertou 84% delas. Quantas questões ela acertou?",
    opcoes: [
      "8",
      "42",
      "34",
      "4",
      "84",
    ],
    correta: 1,
    explicacao:
      "Ana acertou 84% de 50 = 0,84 × 50 = 42 questões. Por partes, 1% de 50 é 0,5, e 84 × 0,5 = 42. Conferindo, 42/50 = 0,84. Em outra forma, 84% é 0,84 do total de 50, o que dá os mesmos 42 acertos.\n\n8 é o número de questões erradas, 16% de 50. 34 subtrai 16 de 50, tratando a taxa de erro como quantidade. 4 erra a conta por uma casa. E 84 repete a porcentagem, como se a prova tivesse 100 questões.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma pessoa pagou R$ 170 por um produto, que estava com 15% de desconto. Qual era o preço original?",
    opcoes: [
      "195,5",
      "185",
      "200",
      "144,5",
      "255",
    ],
    correta: 2,
    explicacao:
      "Com 15% de desconto, os R$ 170 pagos correspondem a 85% do preço original. Então o preço original é 170 ÷ 0,85 = R$ 200. Conferindo, 15% de 200 é 30, e 200 − 30 = 170.\n\n195,5 acrescenta 15% ao valor pago, 170 × 1,15, o erro mais comum: os 15% incidem sobre o preço original, e não sobre o pago. 185 soma 15 reais. 144,5 é 85% de 170. E 255 é 150% de 170.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um investimento de R$ 1.500 rende juros simples de 1,2% ao mês. Quanto rende de juros em 10 meses?",
    opcoes: [
      "18",
      "1.680",
      "180",
      "15",
      "1.518",
    ],
    correta: 2,
    explicacao:
      "O juro mensal é 1,2% de 1.500 = R$ 18. Em 10 meses, o juro é 10 × 18 = R$ 180. Conferindo, 180 ÷ 1.500 = 0,12 = 12%, que é 10 vezes 1,2%. Como a taxa é de 1,2% ao mês, em 10 meses o total de juros corresponde a 12% do capital inicial.\n\n18 é o juro de um único mês. 1.680 é o montante, o capital mais o juro. 15 é o juro de 1 mês a 1%, e não a 1,2%. E 1.518 é o montante depois de um mês, com juro de R$ 18.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Numa sala com 45 alunos, 18 são meninas. Que porcentagem da turma é formada por meninas?",
    opcoes: [
      "18%",
      "45%",
      "40%",
      "25%",
      "60%",
    ],
    correta: 2,
    explicacao:
      "A porcentagem é a razão entre as meninas e o total: 18/45 = 0,4 = 40%. Dividindo numerador e denominador por 9, 18/45 = 2/5, e 2/5 de 100% é 40%. Conferindo, 40% de 45 é 18.\n\n18% repete o número de meninas, como se a taxa fosse essa. 45% repete o total. 25% não sai da divisão de 18 por 45. E 60% é a porcentagem de meninos, 27/45, e não de meninas.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma conta de R$ 250 tem um acréscimo de 8% de taxa de serviço. Qual é o valor total a pagar?",
    opcoes: [
      "258",
      "280",
      "270",
      "20",
      "230",
    ],
    correta: 2,
    explicacao:
      "O acréscimo é 8% de 250 = 0,08 × 250 = R$ 20. O total é 250 + 20 = R$ 270. Pelo fator, 1,08 × 250 = 270. Conferindo, 20 ÷ 250 = 0,08. Conferindo, o total é 108% do valor da conta, e 108% de 250 também dá 270.\n\n258 soma 8 reais, como se a taxa fosse uma quantia fixa. 280 corresponde a um acréscimo de 12%. 20 é só o valor da taxa. E 230 é o valor depois de um desconto de 8%, e não de um acréscimo.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma televisão custa R$ 2.000 e tem 12% de desconto para pagamento à vista. Quanto se paga à vista?",
    opcoes: [
      "1.988",
      "240",
      "1.760",
      "2.240",
      "1.800",
    ],
    correta: 2,
    explicacao:
      "O desconto é 12% de 2.000 = 0,12 × 2.000 = R$ 240. O preço à vista é 2.000 − 240 = R$ 1.760. Pelo fator, 0,88 × 2.000 = 1.760. Conferindo, 1.760 + 240 = 2.000.\n\n1.988 subtrai 12 reais, como se o desconto fosse uma quantia fixa. 240 é só o valor do desconto. 2.240 soma o desconto em vez de subtraí-lo. E 1.800 corresponde a um desconto de 10%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um produto que custava R$ 120 sofreu um aumento de 5% num mês. Qual é o novo preço?",
    opcoes: [
      "125",
      "6",
      "126",
      "114",
      "600",
    ],
    correta: 2,
    explicacao:
      "O aumento é 5% de 120 = 0,05 × 120 = R$ 6. O novo preço é 120 + 6 = R$ 126. Pelo fator, 1,05 × 120 = 126. Conferindo, 6 ÷ 120 = 0,05. Conferindo, o novo preço é 105% do preço antigo, e 105% de 120 também dá 126.\n\n125 soma 5 reais, como se a taxa fosse uma quantia fixa. 6 é só o valor do aumento. 114 é o preço depois de um desconto de 5%. E 600 multiplica 120 por 5, como se a taxa fosse 500%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um comerciante compra uma peça por R$ 60 e a vende com lucro de 25% sobre o custo. Qual é o preço de venda?",
    opcoes: [
      "85",
      "15",
      "75",
      "80",
      "45",
    ],
    correta: 2,
    explicacao:
      "O lucro é 25% de 60 = R$ 15, então a venda é 60 + 15 = R$ 75. Pelo fator, 1,25 × 60 = 75. Conferindo, 15 ÷ 60 = 0,25. Em outras palavras, vender com lucro de 25% sobre o custo é cobrar 125% do custo, e 125% de 60 dá os mesmos R$ 75 de venda.\n\n85 soma 25 reais, como se a taxa fosse uma quantia fixa. 15 é só o lucro. 80 e 45 não saem de nenhum cálculo correto: 45 subtrai o lucro em vez de somá-lo.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma peça comprada por R$ 75 é vendida por R$ 90. De quantos por cento foi o lucro sobre o preço de custo?",
    opcoes: [
      "15%",
      "16,7%",
      "20%",
      "83,3%",
      "120%",
    ],
    correta: 2,
    explicacao:
      "O lucro foi 90 − 75 = R$ 15. Sobre o custo, 15/75 = 0,2 = 20%. Conferindo, 20% de 75 é 15, e 75 + 15 = 90.\n\n15% repete o lucro em reais como se fosse a taxa. 16,7% calcula 15/90, tomando o preço de venda como base, e não o custo. 83,3% é a razão 75/90, entre o custo e a venda. E 120% é a razão 90/75, isto é, a venda como porcentagem do custo.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "De um salário de R$ 3.000, descontam-se 8% de contribuição. Qual é o salário líquido depois do desconto?",
    opcoes: [
      "2.400",
      "240",
      "2.760",
      "3.240",
      "2.700",
    ],
    correta: 2,
    explicacao:
      "O desconto é 8% de 3.000 = 0,08 × 3.000 = R$ 240. O líquido é 3.000 − 240 = R$ 2.760. Pelo fator, 0,92 × 3.000 = 2.760. Conferindo, 2.760 + 240 = 3.000. Conferindo, o salário líquido é 92% do bruto, e 92% de 3.000 também dá 2.760.\n\n2.400 corresponde a um desconto de 20%. 240 é só o valor do desconto. 3.240 soma o desconto em vez de subtraí-lo. E 2.700 corresponde a um desconto de 10%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um capital rendeu R$ 45 de juros simples em 3 meses, à taxa de 1,5% ao mês. Qual era o capital?",
    opcoes: [
      "675",
      "3.000",
      "1.000",
      "1.500",
      "100",
    ],
    correta: 2,
    explicacao:
      "Em 3 meses, a taxa total é 3 × 1,5% = 4,5%. Como 4,5% do capital valem R$ 45, o capital é 45 ÷ 0,045 = R$ 1.000. Conferindo, 1,5% de 1.000 é 15 por mês, e 3 × 15 = 45. Por isso, a taxa de 1,5% ao mês, somada três vezes, equivale a 4,5% do capital nesses três meses.\n\n675 multiplica 45 por 15. 3.000 divide 45 por 0,015, usando só a taxa de um mês. 1.500 e 100 não saem de nenhuma conta correta com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma mistura de 200 litros tem 30% de álcool. Quantos litros de álcool há na mistura?",
    opcoes: [
      "30",
      "170",
      "140",
      "60",
      "6",
    ],
    correta: 3,
    explicacao:
      "O álcool é 30% de 200 = 0,3 × 200 = 60 litros. Por partes, 10% de 200 é 20, e 3 × 20 = 60. Conferindo, 60 ÷ 200 = 0,3. Em outras palavras, 30% é três décimos do volume, e três décimos de 200 litros dão os mesmos 60 litros de álcool, sem precisar de fórmula.\n\n30 repete a taxa, sem aplicá-la ao volume. 170 subtrai 30 de 200. 140 é o volume dos outros componentes, 70% de 200. E 6 é 3% de 200, uma casa a menos.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Numa relação entre parte e todo, quantos por cento de 80 é o número 20?",
    opcoes: [
      "16",
      "4",
      "40",
      "25",
      "100",
    ],
    correta: 3,
    explicacao:
      "A porcentagem é a razão entre a parte e o todo: 20/80 = 0,25 = 25%. Conferindo, 25% de 80 é 20, pois 80 ÷ 4 = 20. Em geral, para saber quantos por cento uma parte é do todo, divide-se a parte pelo todo e multiplica-se por 100.\n\n16 é 80 ÷ 5, sem relação com a parte dada. 4 é a razão 80 ÷ 20, que inverte parte e todo. 40 é a metade de 80. E 100 supõe que 20 fosse o todo, e não uma parte de 80.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma ação sobe 50% numa semana e, na semana seguinte, cai 50%. Em relação ao valor inicial, como fica o valor final?",
    opcoes: [
      "igual",
      "25% maior",
      "50% menor",
      "25% menor",
      "75% menor",
    ],
    correta: 3,
    explicacao:
      "Depois da alta, a ação vale 1,5 vez o valor inicial. A queda de 50% incide sobre esse valor maior: metade de 1,5 é 0,75. O valor final é 0,75 do inicial, isto é, 25% menor. Pelos fatores, 1,5 × 0,5 = 0,75.\n\nIgual supõe que +50% e −50% se cancelam, erro comum, pois as bases são diferentes. 25% maior troca o sinal da variação. 50% menor considera só a queda. E 75% menor confunde o valor final com a queda.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Um produto de R$ 300 recebe dois descontos sucessivos: primeiro 10% e depois 20% sobre o novo preço. Qual é o preço final?",
    opcoes: [
      "210",
      "200",
      "240",
      "216",
      "270",
    ],
    correta: 3,
    explicacao:
      "Depois do primeiro desconto, o preço é 300 × 0,9 = R$ 270. O segundo incide sobre esse valor: 270 × 0,8 = R$ 216. O preço final é R$ 216, e o desconto total é 28%, e não 30%.\n\n210 corresponde a um desconto total de 30%, somando as duas taxas. 240 é o preço depois de só o desconto de 20%. 270 é o preço depois de só o de 10%. E 200 não sai de nenhuma combinação correta dos dois descontos.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Sabendo que 15% de um número valem 45, qual é esse número?",
    opcoes: [
      "67,5",
      "30",
      "150",
      "300",
      "675",
    ],
    correta: 3,
    explicacao:
      "Se 15% do número é 45, o número é 45 ÷ 0,15 = 300. Por partes, 1% vale 45 ÷ 15 = 3, e 100% valem 100 × 3 = 300. Conferindo, 15% de 300 é 45. Em geral, para achar o todo, divide-se a parte pela taxa na forma decimal.\n\n67,5 e 675 multiplicam 45 por 1,5 ou por 15, em vez de dividir pela taxa. 30 e 150 não saem de nenhuma conta correta: 150 corresponderia a 30% de 500, e não a 15% de um número que dê 45.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma caixa tinha 40 quilos de um produto e recebeu um acréscimo de 30%. Quantos quilos tem agora?",
    opcoes: [
      "12",
      "70",
      "43",
      "52",
      "28",
    ],
    correta: 3,
    explicacao:
      "O acréscimo é 30% de 40 = 0,3 × 40 = 12 quilos. A nova quantidade é 40 + 12 = 52 quilos. Pelo fator, 1,3 × 40 = 52. Conferindo, 12 ÷ 40 = 0,3. Conferindo, a nova quantidade é 130% da antiga, e 130% de 40 também dá 52.\n\n12 é só o acréscimo. 70 soma 30 quilos, como se a taxa fosse uma quantia fixa. 43 soma 3, errando a casa decimal. E 28 é o resultado de uma redução de 30%, e não de um acréscimo.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma dívida de R$ 800 tem juros simples de 5% ao mês. Quanto se deve pagar depois de 3 meses?",
    opcoes: [
      "840",
      "120",
      "1.000",
      "920",
      "860",
    ],
    correta: 3,
    explicacao:
      "O juro mensal é 5% de 800 = R$ 40. Em 3 meses, são 3 × 40 = R$ 120 de juros, e o total é 800 + 120 = R$ 920. Conferindo, 120 ÷ 800 = 0,15 = 3 × 5%. Conferindo, 3 meses a 5% somam 15% da dívida, e 15% de 800 são os mesmos R$ 120 de juros.\n\n840 é o total depois de um único mês. 120 é só o juro, sem somar à dívida. 1.000 é o total depois de 5 meses. E 860 não sai de nenhuma conta correta com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Num copo de 500 mL de suco, há 350 mL de água. Que porcentagem do suco é água?",
    opcoes: [
      "35%",
      "30%",
      "150%",
      "70%",
      "50%",
    ],
    correta: 3,
    explicacao:
      "A porcentagem é a razão entre a água e o total: 350/500 = 0,7 = 70%. Conferindo, 70% de 500 é 350, e os 150 mL restantes são 30%.\n\n35% repete o número 350 com um zero a menos, sem fazer a divisão. 30% é a porcentagem dos outros componentes, 150/500. 150% é a razão 500/350 aproximada, que inverte parte e todo. E 50% não sai da divisão correta.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Com um desconto de 25%, uma pessoa pagou R$ 60 por um produto. De quantos reais foi o desconto?",
    opcoes: [
      "15",
      "45",
      "80",
      "20",
      "25",
    ],
    correta: 3,
    explicacao:
      "Os R$ 60 pagos correspondem a 75% do preço original, que é 60 ÷ 0,75 = R$ 80. O desconto foi de 25% de 80, isto é, R$ 20. Conferindo, 80 − 20 = 60. Conferindo, o desconto de R$ 20 sobre o preço original de R$ 80 é mesmo 25% de 80.\n\n15 calcula 25% de 60, tomando o preço pago como base. 45 é 75% de 60. 80 é o preço original, e não o valor do desconto. E 25 repete a taxa como se fosse o valor em reais.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "media",
    enunciado:
      "Uma quantia de R$ 100 aumenta 10% e, em seguida, o novo valor aumenta mais 10%. Qual é o valor final?",
    opcoes: [
      "120",
      "110",
      "20",
      "121",
      "210",
    ],
    correta: 3,
    explicacao:
      "Depois do primeiro aumento, a quantia é 100 × 1,1 = 110. O segundo aumento incide sobre 110: 110 × 1,1 = 121. O valor final é R$ 121, e o aumento total é 21%, e não 20%.\n\n120 soma as duas taxas, 10% + 10%, ignorando que a segunda incide sobre um valor maior. 110 considera só um dos aumentos. 20 é a soma das taxas, sem relação com o valor final. E 210 soma 10 a 100 duas vezes de modo errado.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Um capital é aplicado a juros simples de 20% ao ano. Em quantos anos o montante chega ao dobro do capital?",
    opcoes: [
      "10",
      "2",
      "20",
      "4",
      "5",
    ],
    correta: 4,
    explicacao:
      "Nos juros simples, o juro de cada ano é 20% do capital. Para o montante dobrar, o juro acumulado precisa ser igual ao capital, isto é, 100% dele. Como 100% ÷ 20% = 5, são necessários 5 anos. Conferindo, 5 × 20% = 100%.\n\n10 anos dariam 200% de juros, triplicando o capital. 2 e 4 anos dariam 40% e 80% de juros. E 20 confunde o número de anos com a taxa.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Um produto de R$ 400 tem um desconto de 20% e, depois, sobre o novo preço, um acréscimo de 25%. Qual é o preço final?",
    opcoes: [
      "380",
      "420",
      "500",
      "320",
      "400",
    ],
    correta: 4,
    explicacao:
      "Depois do desconto, o preço é 400 × 0,8 = R$ 320. O acréscimo de 25% incide sobre 320: 320 × 1,25 = R$ 400. O preço volta ao original, porque 0,8 × 1,25 = 1. Um desconto de 20% é desfeito por um acréscimo de 25%, e não de 20%.\n\n380 e 420 somam ou subtraem as taxas, como se fossem 5% sobre o preço original. 500 considera só o acréscimo. E 320 considera só o desconto.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Um produto de R$ 500 é vendido na loja A com desconto de 30% e na loja B com dois descontos sucessivos, 20% e depois 10%. Qual é a diferença de preço, em reais, entre as duas lojas?",
    opcoes: [
      "0",
      "50",
      "20",
      "15",
      "10",
    ],
    correta: 4,
    explicacao:
      "Na loja A, o preço é 500 × 0,7 = R$ 350. Na loja B, o preço é 500 × 0,8 × 0,9 = R$ 360. A diferença é 360 − 350 = R$ 10, com a loja A mais barata. Os dois descontos sucessivos valem 28%, e não 30%. Isso mostra que dois descontos sucessivos valem menos que a soma das taxas.\n\n0 supõe que 20% e 10% se somam a 30%, o erro comum. 50 é 10% de 500. 20 e 15 não saem da diferença entre os dois preços calculados.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Um investidor aplica R$ 5.000 a juros simples de 2% ao mês. Em quantos meses o montante chega a R$ 6.500?",
    opcoes: [
      "13",
      "30",
      "12",
      "20",
      "15",
    ],
    correta: 4,
    explicacao:
      "O juro mensal é 2% de 5.000 = R$ 100. O juro necessário é 6.500 − 5.000 = R$ 1.500, então são 1.500 ÷ 100 = 15 meses. Conferindo, 15 × 100 = 1.500. Em resumo, o juro total, dividido pelo juro mensal, dá o número de meses, pois cada mês rende o mesmo valor nos juros simples.\n\n13 e 12 renderiam R$ 1.300 e R$ 1.200. 30 renderia R$ 3.000, e 20, R$ 2.000. O prazo é o quociente entre o juro total e o juro mensal.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "O preço de um produto subiu 25%. Que porcentagem ele deve cair para voltar ao preço anterior?",
    opcoes: [
      "25%",
      "15%",
      "30%",
      "5%",
      "20%",
    ],
    correta: 4,
    explicacao:
      "Depois da alta, o preço é 1,25 vez o antigo. Para voltar, precisa ser multiplicado por 1 ÷ 1,25 = 0,8, o que é uma queda de 20%. Com um preço de R$ 100, a alta leva a 125, e uma queda de R$ 25 sobre 125 é 25 ÷ 125 = 20%.\n\n25% é o erro mais comum, pois a queda incide sobre o preço novo, que é maior. 15% e 5% ficam abaixo do necessário. E 30% passa do necessário, levando o preço para menos que o original.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura de 50 litros tem 40% de ácido. Quantos litros de água devem ser acrescentados para que o ácido passe a ser 25% da mistura?",
    opcoes: [
      "20",
      "25",
      "40",
      "15",
      "30",
    ],
    correta: 4,
    explicacao:
      "O ácido é 40% de 50 = 20 litros, e essa quantidade não muda. Para ser 25% da mistura, o volume total deve ser 20 ÷ 0,25 = 80 litros. Como já há 50 litros, acrescentam-se 80 − 50 = 30 litros de água. Conferindo, 20/80 = 25%.\n\n20 é a quantidade de ácido, e não de água. 25 e 15 dão volumes totais de 75 e 65 litros, em que o ácido seria cerca de 26,7% e 30,8%. E 40 daria 90 litros, com o ácido em cerca de 22,2%.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Os preços de uma cesta subiram 10% em janeiro e 20% em fevereiro. Qual foi o aumento acumulado nos dois meses?",
    opcoes: [
      "30%",
      "22%",
      "31%",
      "12%",
      "32%",
    ],
    correta: 4,
    explicacao:
      "Cada aumento multiplica o preço: 1,1 × 1,2 = 1,32. O preço ficou 32% maior. Com R$ 100, janeiro leva a 110, e fevereiro, 20% de 110 = 22, leva a 132.\n\n30% soma as taxas, ignorando que a de fevereiro incide sobre um preço já aumentado. 22% é só o aumento de fevereiro medido sobre o preço original. 31% e 12% não saem do produto dos fatores de aumento.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Depois de um aumento de 20%, um produto passou a custar R$ 120. Quanto custava antes do aumento?",
    opcoes: [
      "96",
      "144",
      "98",
      "110",
      "100",
    ],
    correta: 4,
    explicacao:
      "Com o aumento de 20%, os R$ 120 correspondem a 120% do preço antigo. Então o preço antigo é 120 ÷ 1,2 = R$ 100. Conferindo, 20% de 100 é 20, e 100 + 20 = 120.\n\n96 desconta 20% de 120, o erro mais comum, pois os 20% incidem sobre o preço antigo, e não sobre o novo. 144 acrescenta 20% a 120. 98 e 110 não saem de nenhuma conta correta com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Uma pessoa pagou 60% de uma dívida e ainda deve R$ 320. De quantos reais era a dívida?",
    opcoes: [
      "512",
      "533",
      "480",
      "1.920",
      "800",
    ],
    correta: 4,
    explicacao:
      "Se 60% foram pagos, ainda faltam 40% da dívida, e esses 40% valem R$ 320. A dívida é 320 ÷ 0,4 = R$ 800. Conferindo, 60% de 800 é 480, e 800 − 480 = 320. Esse raciocínio vale para qualquer parte conhecida de um todo desconhecido.\n\n512 multiplica 320 por 1,6. 533 divide 320 por 0,6, usando a taxa dos 60% pagos no lugar da dos 40% devidos. 480 é o valor já pago, e não a dívida. E 1.920 multiplica 320 por 6.",
  },
  {
    materia: "matematica-fund",
    tema: "Porcentagem e juros simples",
    dificuldade: "dificil",
    enunciado:
      "Um capital de R$ 4.000, a juros simples, rendeu R$ 720 em 9 meses. Qual é a taxa anual dessa aplicação?",
    opcoes: [
      "2%",
      "18%",
      "12%",
      "36%",
      "24%",
    ],
    correta: 4,
    explicacao:
      "O juro mensal é 720 ÷ 9 = R$ 80, que é 80/4.000 = 2% ao mês. Em 12 meses, a taxa anual é 12 × 2% = 24%, pois nos juros simples as taxas mensais se somam. Conferindo, 24% de 4.000 é 960 por ano, e 9/12 de 960 é 720.\n\n2% é a taxa mensal, e não a anual. 18% é a razão 720/4.000 para os 9 meses, sem converter para 12 meses. 12% e 36% não saem do cálculo correto da taxa mensal e de sua conversão para o ano.",
  },
];
