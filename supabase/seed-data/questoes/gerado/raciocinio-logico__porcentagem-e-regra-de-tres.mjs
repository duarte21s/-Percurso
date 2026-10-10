/* Porcentagem e regra de três (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__porcentagem-e-regra-de-tres.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__porcentagem-e-regra-de-tres.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Uma loja dá 15% de desconto numa compra de R$ 240,00. Qual é o valor do desconto?",
    opcoes: [
      "R$ 36,00",
      "R$ 16,00",
      "R$ 3,60",
      "R$ 360,00",
      "R$ 225,00",
    ],
    correta: 0,
    explicacao:
      "15% significa 15 em cada 100, ou 0,15. Então 15% de 240 é 0,15 × 240 = 36 reais. Um atalho: 10% de 240 é 24, e 5% é a metade disso, 12; somando, 24 + 12 = 36.\n\nR$ 16,00 divide 240 por 15, confundindo porcentagem com divisão. R$ 3,60 erra a vírgula — seria 1,5% de 240. R$ 360,00 multiplica por 1,5 em vez de 0,15. E R$ 225,00 subtrai 15 reais de 240, tratando os 15% como se fossem 15 reais — e, além disso, responde o preço final, não o desconto.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um produto que custava R$ 350,00 teve aumento de 20%. Qual é o novo preço?",
    opcoes: [
      "R$ 370,00",
      "R$ 70,00",
      "R$ 420,00",
      "R$ 280,00",
      "R$ 437,50",
    ],
    correta: 2,
    explicacao:
      "Um aumento de 20% multiplica o preço por 1,20 (os 100% originais mais 20%). O novo preço é 350 × 1,20 = 420 reais. Em partes: 20% de 350 é 70, e 350 + 70 = 420.\n\nR$ 370,00 soma 20 reais, e não 20%. R$ 70,00 é só o valor do aumento. R$ 280,00 aplica um desconto de 20% em vez de aumento. E R$ 437,50 divide por 0,80 — conta que desfaz um desconto de 20%, e não aplica um aumento.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Uma camisa que custa R$ 180,00 está com 25% de desconto. Qual é o preço com desconto?",
    opcoes: [
      "R$ 155,00",
      "R$ 135,00",
      "R$ 45,00",
      "R$ 225,00",
      "R$ 144,00",
    ],
    correta: 1,
    explicacao:
      "Com 25% de desconto, paga-se 75% do preço: 0,75 × 180 = 135 reais. Em partes: 25% de 180 é um quarto de 180, ou seja, 45; e 180 − 45 = 135.\n\nR$ 155,00 desconta 25 reais, e não 25%. R$ 45,00 é o valor do desconto, não o preço final. R$ 225,00 aplica um aumento de 25%. E R$ 144,00 aplica um desconto de 20%, e não de 25%. Conferência: 135 é três quartos de 180, como deve ser depois de tirar um quarto.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Um salário recebeu dois aumentos sucessivos: primeiro de 10% e, depois, de 20% sobre o novo valor. Qual foi o aumento total, em relação ao salário inicial?",
    opcoes: [
      "32%",
      "30%",
      "22%",
      "15%",
      "2%",
    ],
    correta: 0,
    explicacao:
      "Aumentos sucessivos se multiplicam: o salário foi multiplicado por 1,10 e depois por 1,20, ou seja, por 1,10 × 1,20 = 1,32. O aumento total é de 32%. Com um salário de 100: vai a 110 e, depois, 110 + 22 = 132.\n\n30% soma as taxas, esquecendo que o segundo aumento incide sobre o valor já aumentado. 22% é o valor do segundo aumento na conta com base 100 (20% de 110), não o total. 15% tira a média das taxas. E 2% é só o “juro sobre juro” (10% de 20%), a diferença entre 32% e 30%.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Um produto teve desconto de 20% e, depois, aumento de 20% sobre o preço já com desconto. Em relação ao preço original, como ficou o preço final?",
    opcoes: [
      "Igual ao original",
      "4% maior que o original",
      "4% menor que o original",
      "20% menor que o original",
      "40% menor que o original",
    ],
    correta: 2,
    explicacao:
      "O desconto multiplica o preço por 0,80, e o aumento, por 1,20: no total, 0,80 × 1,20 = 0,96. O preço final é 96% do original — 4% menor. Com um preço de 100: cai para 80 e, depois, sobe 20% de 80, que é 16, chegando a 96.\n\n“Igual ao original” supõe que as porcentagens se anulem, mas o aumento incide sobre uma base menor (80), e por isso recupera menos do que o desconto tirou. “4% maior” erra o sentido. “20% menor” considera só o desconto. E “40% menor” soma as duas taxas como se fossem ambas descontos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "O preço de um produto passou de R$ 80,00 para R$ 100,00. Qual foi o percentual de aumento?",
    opcoes: [
      "20%",
      "25%",
      "80%",
      "125%",
      "2%",
    ],
    correta: 1,
    explicacao:
      "O aumento foi de 100 − 80 = 20 reais. Em porcentagem, compara-se o aumento com o valor inicial: 20 ÷ 80 = 0,25 = 25%.\n\n20% compara o aumento com o valor final (20 ÷ 100) — é a queda percentual que levaria de 100 a 80, não o aumento de 80 a 100. 80% é a razão entre os preços (80 ÷ 100). 125% é o novo preço em relação ao antigo (100 ÷ 80), não o aumento. E 2% confunde os 20 reais com a porcentagem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Com um desconto de 20%, um produto passou a custar R$ 120,00. Qual era o preço original?",
    opcoes: [
      "R$ 144,00",
      "R$ 150,00",
      "R$ 140,00",
      "R$ 96,00",
      "R$ 600,00",
    ],
    correta: 1,
    explicacao:
      "Com desconto de 20%, paga-se 80% do preço original: 0,80 × P = 120, então P = 120 ÷ 0,80 = 150 reais. Conferindo: 20% de 150 é 30, e 150 − 30 = 120.\n\nR$ 144,00 aplica 20% de aumento sobre os 120, mas o desconto foi calculado sobre o preço original, não sobre o final. R$ 140,00 soma 20 reais. R$ 96,00 aplica mais um desconto de 20%. E R$ 600,00 divide 120 por 0,20, usando a taxa do desconto em vez da parte que foi paga.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "O preço de um produto caiu de R$ 50,00 para R$ 35,00. Qual foi a variação percentual do preço?",
    opcoes: [
      "Queda de 15%",
      "Queda de 30%",
      "Queda de 70%",
      "Aumento de 30%",
      "Queda de 35%",
    ],
    correta: 1,
    explicacao:
      "A queda foi de 50 − 35 = 15 reais. Comparada com o valor inicial: 15 ÷ 50 = 0,30 = 30% de queda.\n\n“Queda de 15%” confunde os 15 reais com a porcentagem. “Queda de 70%” usa a razão 35 ÷ 50, que diz quanto o novo preço representa do antigo (70%), não quanto caiu. “Aumento de 30%” erra o sentido da variação. E “queda de 35%” usa o valor final como se fosse a porcentagem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Numa cidade, 40% dos moradores usam ônibus, e 30% desses usuários usam o ônibus todos os dias. Que porcentagem dos moradores da cidade usa ônibus todos os dias?",
    opcoes: [
      "12%",
      "70%",
      "10%",
      "1,2%",
      "75%",
    ],
    correta: 0,
    explicacao:
      "É uma porcentagem de porcentagem, que se calcula multiplicando: 30% de 40% = 0,30 × 0,40 = 0,12 = 12% dos moradores. Com 100 moradores: 40 usam ônibus, e 30% desses 40 são 12.\n\n70% soma as taxas. 10% as subtrai. 1,2% erra a vírgula (0,3 × 0,04). E 75% divide 30 por 40, o que diz quanto 30 representa de 40, e não quanto é 30% de 40%. O cuidado está na base: os 30% se aplicam aos usuários de ônibus, não à cidade inteira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma aplicação de R$ 1.000,00 rende juros simples de 2% ao mês. Qual é o montante (capital mais juros) ao final de 5 meses?",
    opcoes: [
      "R$ 1.104,08",
      "R$ 1.010,00",
      "R$ 100,00",
      "R$ 2.000,00",
      "R$ 1.100,00",
    ],
    correta: 4,
    explicacao:
      "Nos juros simples, os juros de cada mês são calculados sobre o capital inicial: 2% de 1.000 = 20 reais por mês. Em 5 meses, 5 × 20 = 100 reais de juros. O montante é 1.000 + 100 = 1.100 reais.\n\nR$ 1.104,08 é o montante com juros compostos (1.000 × 1,02⁵), em que os juros rendem juros. R$ 1.010,00 soma 2 reais por mês, e não 2%. R$ 100,00 são só os juros, sem o capital. E R$ 2.000,00 dobra o capital sem relação com a taxa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Um capital de R$ 1.000,00 é aplicado a juros compostos de 10% ao ano. Qual é o montante ao final de 2 anos?",
    opcoes: [
      "R$ 1.200,00",
      "R$ 1.100,00",
      "R$ 1.210,00",
      "R$ 210,00",
      "R$ 1.331,00",
    ],
    correta: 2,
    explicacao:
      "Nos juros compostos, os juros de cada ano incidem sobre o montante do ano anterior. Primeiro ano: 1.000 × 1,10 = 1.100. Segundo ano: 1.100 × 1,10 = 1.210. O montante é R$ 1.210,00, ou seja, 1.000 × 1,10².\n\nR$ 1.200,00 é o montante com juros simples (10% de 1.000 por ano, duas vezes). R$ 1.100,00 conta só um ano. R$ 210,00 são só os juros. E R$ 1.331,00 conta três anos (1.000 × 1,10³).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Um produto teve o preço reduzido em 20%. Que aumento percentual, aplicado sobre o preço reduzido, faz o preço voltar ao valor original?",
    opcoes: [
      "25%",
      "20%",
      "80%",
      "120%",
      "40%",
    ],
    correta: 0,
    explicacao:
      "Com o desconto, o preço vira 80% do original. Para voltar a 100%, o aumento precisa levar 80 a 100: são 20 unidades sobre uma base de 80, ou 20 ÷ 80 = 25%. A base mudou — o aumento é calculado sobre o preço já reduzido.\n\n20% seria suficiente só se incidisse sobre o preço original; sobre 80, leva a 96. 80% é o preço reduzido em relação ao original, e 120% confunde o fator de um aumento de 20% com a taxa pedida. E 40% dobra a taxa do desconto sem base.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Numa turma, 40% dos alunos são meninos, e há 18 meninos. Quantos alunos a turma tem ao todo?",
    opcoes: [
      "27",
      "72",
      "58",
      "45",
      "30",
    ],
    correta: 3,
    explicacao:
      "Os 18 meninos correspondem a 40% da turma: 0,40 × T = 18, então T = 18 ÷ 0,40 = 45 alunos. Conferindo: 40% de 45 é 18. Outra forma: se 40% são 18, então 10% são 4,5 e 100% são 45.\n\n27 é o número de meninas (60% de 45), não o total. 72 multiplica 18 por 4, como se 18 fosse 25% da turma. 58 soma 18 + 40, misturando alunos com porcentagem. E 30 divide 18 por 0,60, usando a porcentagem das meninas no lugar da dos meninos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Um comerciante compra um produto por R$ 60,00 e o vende por R$ 75,00. Qual é o lucro percentual calculado sobre o preço de venda?",
    opcoes: [
      "25%",
      "15%",
      "20%",
      "80%",
      "125%",
    ],
    correta: 2,
    explicacao:
      "O lucro foi de 75 − 60 = 15 reais. Sobre o preço de venda, a base é 75: 15 ÷ 75 = 0,20 = 20%.\n\n25% é o lucro sobre o preço de custo (15 ÷ 60) — a mesma diferença, com outra base. 15% confunde os 15 reais com a porcentagem. 80% é a razão entre custo e venda (60 ÷ 75). E 125% é a venda em relação ao custo (75 ÷ 60), não o lucro. Em problemas de lucro, a primeira pergunta é sempre: sobre qual valor?",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura de 20 litros tem 30% de álcool, e o restante é água. Acrescentam-se 5 litros de água. Qual passa a ser a porcentagem de álcool na mistura?",
    opcoes: [
      "30%",
      "25%",
      "6%",
      "35%",
      "24%",
    ],
    correta: 4,
    explicacao:
      "Em 20 litros com 30% de álcool há 0,30 × 20 = 6 litros de álcool. Acrescentando 5 litros de água, o álcool continua sendo 6 litros, mas o total passa a 25 litros. A nova concentração é 6 ÷ 25 = 0,24 = 24%.\n\n30% ignora a água acrescentada. 25% subtrai 5 pontos percentuais, como se cada litro de água tirasse 1 ponto. 6% é a quantidade de álcool (6 litros) lida como porcentagem. E 35% soma 5 pontos, no sentido errado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Dos 150 candidatos de uma prova, 120 foram aprovados. Qual foi o percentual de aprovados?",
    opcoes: [
      "30%",
      "20%",
      "125%",
      "80%",
      "1,25%",
    ],
    correta: 3,
    explicacao:
      "Compara-se a parte com o todo: 120 ÷ 150 = 0,80 = 80%. Um atalho: 150 candidatos correspondem a 100%, então cada 15 candidatos valem 10%; 120 são 8 grupos de 15, ou 80%.\n\n30% confunde a diferença 150 − 120 = 30 candidatos com uma porcentagem. 20% é o percentual de reprovados. 125% inverte a divisão (150 ÷ 120). E 1,25% erra a vírgula dessa divisão invertida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "O preço de um produto subiu 5% num mês e mais 5% no mês seguinte, sobre o novo preço. Qual foi o aumento acumulado nos dois meses?",
    opcoes: [
      "10,25%",
      "10%",
      "5%",
      "25%",
      "11%",
    ],
    correta: 0,
    explicacao:
      "Os aumentos se multiplicam: 1,05 × 1,05 = 1,1025, ou seja, aumento de 10,25%. Com um preço de 100: vai a 105 no primeiro mês e, no segundo, 105 + 5,25 = 110,25.\n\n10% soma as taxas, esquecendo que o segundo aumento incide sobre 105, e não sobre 100. 5% considera um único mês. 25% multiplica as taxas (5 × 5), o que não tem significado aqui. E 11% arredonda o resultado sem motivo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Depois de um aumento de 8%, um salário passou a ser de R$ 2.160,00. Qual era o salário antes do aumento?",
    opcoes: [
      "R$ 1.987,20",
      "R$ 2.152,00",
      "R$ 1.728,00",
      "R$ 2.332,80",
      "R$ 2.000,00",
    ],
    correta: 4,
    explicacao:
      "Com aumento de 8%, o novo salário é 108% do antigo: 1,08 × S = 2.160, então S = 2.160 ÷ 1,08 = 2.000 reais. Conferindo: 8% de 2.000 é 160, e 2.000 + 160 = 2.160.\n\nR$ 1.987,20 tira 8% de 2.160, mas o aumento foi calculado sobre o salário antigo, não sobre o novo. R$ 2.152,00 tira 8 reais. R$ 1.728,00 tira 20%. E R$ 2.332,80 aplica mais um aumento de 8%.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma loja concede dois descontos sucessivos de 10%, o segundo sobre o preço já com o primeiro desconto. Qual é o desconto total sobre o preço original?",
    opcoes: [
      "20%",
      "10%",
      "19%",
      "1%",
      "21%",
    ],
    correta: 2,
    explicacao:
      "Cada desconto de 10% multiplica o preço por 0,90: no total, 0,90 × 0,90 = 0,81. O cliente paga 81% do preço original — um desconto total de 19%. Com um preço de 100: cai para 90 e, depois, 10% de 90 (9) sai de novo, chegando a 81.\n\n20% soma as taxas, esquecendo que o segundo desconto incide sobre uma base menor. 10% considera um único desconto. 1% é só a diferença entre somar e multiplicar. E 21% erra o sentido dessa diferença.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "O número 12 corresponde a quantos por cento de 48?",
    opcoes: [
      "4%",
      "25%",
      "36%",
      "400%",
      "12%",
    ],
    correta: 1,
    explicacao:
      "Divide-se a parte pelo todo: 12 ÷ 48 = 0,25 = 25%. Faz sentido: 12 é a quarta parte de 48, e um quarto equivale a 25%.\n\n4% confunde o fato de 48 ser 4 vezes 12 com a porcentagem. 36% é a diferença 48 − 12. 400% inverte a divisão (48 ÷ 12), respondendo quanto 48 é de 12. E 12% repete o próprio número 12. Conferência: 25% de 48 é 12, a quarta parte de 48.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um vendedor recebe comissão de 3% sobre o total que vende. Num mês, ele vendeu R$ 25.000,00. Qual foi o valor da comissão?",
    opcoes: [
      "R$ 75,00",
      "R$ 7.500,00",
      "R$ 24.250,00",
      "R$ 250,00",
      "R$ 750,00",
    ],
    correta: 4,
    explicacao:
      "3% de 25.000 é 0,03 × 25.000 = 750 reais. Um atalho: 1% de 25.000 é 250; 3% é o triplo, 750.\n\nR$ 75,00 erra a vírgula (0,3%). R$ 7.500,00 também erra a vírgula, no outro sentido (30%). R$ 24.250,00 é o valor das vendas descontada a comissão, não a comissão. E R$ 250,00 corresponde a 1%, e não a 3%. Esse tipo de conta sai de cabeça: acha-se 1% dividindo por 100 e multiplica-se pela taxa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Numa eleição, o candidato A recebeu 45% dos votos válidos, o candidato B recebeu 35%, e os demais candidatos somaram 4.000 votos válidos. Quantos votos válidos houve ao todo?",
    opcoes: [
      "80.000",
      "8.000",
      "4.800",
      "20.000",
      "16.000",
    ],
    correta: 3,
    explicacao:
      "A e B somam 45% + 35% = 80% dos votos válidos; os demais ficam com os 20% restantes, que são 4.000 votos. Se 20% são 4.000, então 100% são 5 × 4.000 = 20.000 votos válidos. Conferindo: A teve 9.000, B teve 7.000, e 9.000 + 7.000 + 4.000 = 20.000.\n\n80.000 trata os 4.000 votos como 5% do total. 8.000 dobra os 4.000. 4.800 soma 20% aos 4.000, em vez de ampliar para o todo. E 16.000 trata os 4.000 votos como 25% do total.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "A população de uma cidade cresce 10% ao ano, sempre sobre a população do ano anterior. Hoje a cidade tem 12.100 habitantes. Quantos habitantes tinha há 2 anos?",
    opcoes: [
      "9.680",
      "9.801",
      "10.890",
      "10.000",
      "11.000",
    ],
    correta: 3,
    explicacao:
      "Em dois anos, a população foi multiplicada por 1,10 × 1,10 = 1,21. Então a população de 2 anos atrás é 12.100 ÷ 1,21 = 10.000. Conferindo: 10.000 → 11.000 → 12.100.\n\n9.680 tira 20% de 12.100, como se crescer 10% duas vezes fosse crescer 20%, e ainda aplica a taxa sobre o valor atual. 9.801 tira 10% duas vezes do valor atual, mas desfazer um aumento de 10% não é tirar 10%. 10.890 tira 10% uma vez só. E 11.000 desfaz corretamente só um dos dois anos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "O número de funcionários de uma empresa caiu de 1.250 para 1.000. Qual foi a redução percentual?",
    opcoes: [
      "25%",
      "80%",
      "125%",
      "20%",
      "250%",
    ],
    correta: 3,
    explicacao:
      "A redução foi de 1.250 − 1.000 = 250 funcionários. Sobre o valor inicial: 250 ÷ 1.250 = 0,20 = 20%.\n\n25% calcula a redução sobre o valor final (250 ÷ 1.000) — é o aumento que levaria de 1.000 de volta a 1.250. 80% é o valor final em relação ao inicial. 125% é o inicial em relação ao final. E 250% confunde os 250 funcionários com uma porcentagem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Um número, aumentado em 30%, resulta em 52. Qual é esse número?",
    opcoes: [
      "36,4",
      "40",
      "22",
      "67,6",
      "39",
    ],
    correta: 1,
    explicacao:
      "Aumentar em 30% é multiplicar por 1,30: 1,30 × N = 52, então N = 52 ÷ 1,30 = 40. Conferindo: 30% de 40 é 12, e 40 + 12 = 52.\n\n36,4 tira 30% de 52, mas o aumento foi calculado sobre o número original, não sobre o resultado. 22 subtrai 30 unidades. 67,6 aumenta 52 em 30% de novo. E 39 tira 25% de 52, confundindo o aumento de 30% com a parte que ele representa no resultado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Se 3 kg de um produto custam R$ 12,00, quanto custam 7 kg do mesmo produto?",
    opcoes: [
      "R$ 16,00",
      "R$ 36,00",
      "R$ 28,00",
      "R$ 21,00",
      "R$ 84,00",
    ],
    correta: 2,
    explicacao:
      "Preço e quantidade são diretamente proporcionais: o dobro de quilos custa o dobro. Cada quilo custa 12 ÷ 3 = 4 reais, e 7 kg custam 7 × 4 = 28 reais. Pela regra de três: 3 está para 12 assim como 7 está para x, e x = 12 × 7 ÷ 3 = 28.\n\nR$ 16,00 soma 4 reais em vez de multiplicar. R$ 36,00 multiplica 12 por 3, e R$ 84,00, 12 por 7, sem dividir pelos 3 kg. E R$ 21,00 inverte a proporção (7 × 3).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Seis operários, trabalhando no mesmo ritmo, terminam uma obra em 12 dias. Em quantos dias 4 operários, no mesmo ritmo, terminariam a mesma obra?",
    opcoes: [
      "8 dias",
      "18 dias",
      "10 dias",
      "14 dias",
      "24 dias",
    ],
    correta: 1,
    explicacao:
      "Menos operários levam mais tempo: as grandezas são inversamente proporcionais. A obra equivale a 6 × 12 = 72 dias de trabalho de um operário. Com 4 operários: 72 ÷ 4 = 18 dias.\n\n8 dias trata as grandezas como diretamente proporcionais (12 × 4 ÷ 6), concluindo que menos operários terminam antes. 10 e 14 dias somam ou subtraem 2 dias por causa dos 2 operários de diferença, regra que não existe. E 24 dias dobra o tempo, como se a equipe tivesse caído pela metade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "A 80 km/h, um carro faz um percurso em 3 horas. Quanto tempo ele leva para fazer o mesmo percurso a 60 km/h?",
    opcoes: [
      "2 horas e 15 minutos",
      "3 horas",
      "3 horas e 20 minutos",
      "4 horas",
      "6 horas",
    ],
    correta: 3,
    explicacao:
      "Velocidade e tempo são inversamente proporcionais para um mesmo percurso. A distância é 80 × 3 = 240 km. A 60 km/h, o tempo é 240 ÷ 60 = 4 horas.\n\n2 horas e 15 minutos (3 × 60 ÷ 80) trata as grandezas como diretas, concluindo que ir mais devagar leva menos tempo. 3 horas ignora a mudança de velocidade. 3 horas e 20 minutos confunde a diferença de velocidade (20 km/h) com minutos. E 6 horas dobra o tempo sem motivo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Cinco máquinas iguais, trabalhando 8 horas por dia durante 6 dias, produzem 1.200 peças. Quantas peças 4 dessas máquinas produzem trabalhando 10 horas por dia durante 3 dias?",
    opcoes: [
      "600",
      "1.200",
      "480",
      "960",
      "384",
    ],
    correta: 0,
    explicacao:
      "Todas as grandezas são diretamente proporcionais à produção. Na situação conhecida, há 5 × 8 × 6 = 240 horas-máquina para 1.200 peças: 5 peças por hora-máquina. Na nova, são 4 × 10 × 3 = 120 horas-máquina, que produzem 120 × 5 = 600 peças.\n\n1.200 ignora as mudanças. 480 considera máquinas e dias, mas esquece as horas por dia (1.200 × 4/5 × 3/6). 960 considera só o número de máquinas (1.200 × 4/5). E 384 inverte a razão das horas, como se trabalhar mais horas produzisse menos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Doze pedreiros constroem 60 metros de muro em 10 dias. Quantos metros do mesmo muro 9 pedreiros constroem em 20 dias, no mesmo ritmo?",
    opcoes: [
      "45 m",
      "120 m",
      "160 m",
      "90 m",
      "60 m",
    ],
    correta: 3,
    explicacao:
      "A produção é diretamente proporcional ao número de pedreiros e aos dias. Na situação conhecida, 12 × 10 = 120 dias de trabalho de um pedreiro fazem 60 m: meio metro por pedreiro-dia. Na nova, 9 × 20 = 180 pedreiros-dia fazem 180 × 0,5 = 90 m.\n\n45 m considera só a redução de pedreiros (60 × 9/12), esquecendo os dias a mais. 120 m considera só os dias (60 × 20/10). 160 m inverte a razão dos pedreiros, como se menos pedreiros produzissem mais. E 60 m ignora as mudanças.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Num mapa na escala 1:50.000, dois pontos estão a 4 cm de distância. Qual é a distância real entre eles?",
    opcoes: [
      "20 km",
      "200 m",
      "2 km",
      "12,5 km",
      "200 km",
    ],
    correta: 2,
    explicacao:
      "Na escala 1:50.000, cada centímetro do mapa corresponde a 50.000 cm no terreno. Então 4 cm valem 4 × 50.000 = 200.000 cm. Convertendo: 200.000 cm = 2.000 m = 2 km.\n\n20 km e 200 km erram a conversão de centímetros para quilômetros por uma ou duas casas decimais. 200 m também erra a conversão, dividindo demais. E 12,5 km divide 50.000 por 4 em vez de multiplicar.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Uma receita usa 3 ovos para cada 250 g de farinha. Quantos ovos são necessários para 1 kg de farinha, mantendo a proporção?",
    opcoes: [
      "4",
      "9",
      "12",
      "15",
      "750",
    ],
    correta: 2,
    explicacao:
      "1 kg são 1.000 g, que correspondem a 4 porções de 250 g. Cada porção leva 3 ovos: 4 × 3 = 12 ovos. Pela regra de três: 250 está para 3 assim como 1.000 está para x, e x = 3 × 1.000 ÷ 250 = 12.\n\n4 é o número de porções de 250 g, não o de ovos. 9 considera só 750 g de farinha. 15 considera 1.250 g. E 750 multiplica 3 por 250, sem relação com a pergunta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um carro percorre 12 km com 1 litro de combustível. Quantos litros ele gasta para percorrer 300 km?",
    opcoes: [
      "36 litros",
      "25 litros",
      "3.600 litros",
      "30 litros",
      "288 litros",
    ],
    correta: 1,
    explicacao:
      "O consumo é diretamente proporcional à distância: cada litro rende 12 km, então 300 km exigem 300 ÷ 12 = 25 litros.\n\n36 litros divide 300 por um rendimento errado, de cerca de 8,3 km por litro. 3.600 litros multiplica 300 por 12, em vez de dividir. 30 litros arredonda o resultado sem motivo. E 288 litros subtrai 12 de 300, confundindo o rendimento com um desconto.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Três torneiras iguais, abertas juntas, enchem um tanque em 8 horas. Em quanto tempo 4 torneiras iguais a essas enchem o mesmo tanque?",
    opcoes: [
      "10 horas e 40 minutos",
      "7 horas",
      "9 horas",
      "12 horas",
      "6 horas",
    ],
    correta: 4,
    explicacao:
      "Mais torneiras enchem mais depressa: tempo e número de torneiras são inversamente proporcionais. O tanque equivale a 3 × 8 = 24 horas de uma torneira. Com 4 torneiras: 24 ÷ 4 = 6 horas.\n\n10 horas e 40 minutos (8 × 4 ÷ 3) trata as grandezas como diretas, concluindo que mais torneiras demoram mais. 7 e 9 horas somam ou subtraem uma hora por torneira de diferença, regra que não existe. E 12 horas acrescenta metade do tempo sem base.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Dez operários, trabalhando 6 horas por dia, fazem uma obra em 18 dias. Em quantos dias 12 operários, trabalhando 9 horas por dia, fazem a mesma obra, no mesmo ritmo?",
    opcoes: [
      "10 dias",
      "18 dias",
      "15 dias",
      "12 dias",
      "22,5 dias",
    ],
    correta: 0,
    explicacao:
      "A obra exige uma quantidade fixa de trabalho: 10 operários × 6 horas × 18 dias = 1.080 horas de trabalho de um operário. Com 12 operários e 9 horas por dia, cada dia rende 12 × 9 = 108 horas-operário. Os dias necessários são 1.080 ÷ 108 = 10.\n\n18 dias ignora as mudanças. 15 dias considera só o aumento de operários (18 × 10/12), e 12 dias, só o aumento das horas (18 × 6/9). E 22,5 dias inverte uma das razões, como se mais horas por dia alongassem a obra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Duas engrenagens estão acopladas: a maior tem 30 dentes e a menor, 12. Enquanto a maior dá 20 voltas, quantas voltas dá a menor?",
    opcoes: [
      "8 voltas",
      "20 voltas",
      "38 voltas",
      "50 voltas",
      "600 voltas",
    ],
    correta: 3,
    explicacao:
      "Nas engrenagens acopladas, passam pelo ponto de contato os mesmos dentes nas duas rodas. A maior, em 20 voltas, faz passar 20 × 30 = 600 dentes. A menor, com 12 dentes por volta, precisa de 600 ÷ 12 = 50 voltas. Número de dentes e número de voltas são inversamente proporcionais.\n\n8 voltas trata as grandezas como diretas (20 × 12 ÷ 30), concluindo que a roda menor gira menos. 20 voltas supõe que as duas girem igual. 38 soma a diferença de dentes às voltas, regra que não existe. E 600 é o número de dentes que passaram pelo contato, não o de voltas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "O número 18 corresponde a 30% de qual número?",
    opcoes: [
      "5,4",
      "60",
      "54",
      "48",
      "23,4",
    ],
    correta: 1,
    explicacao:
      "Se 30% de N é 18, então 0,30 × N = 18 e N = 18 ÷ 0,30 = 60. Pela regra de três: 30% está para 18 assim como 100% está para N, e N = 18 × 100 ÷ 30 = 60. Conferindo: 30% de 60 é 18.\n\n5,4 calcula 30% de 18, invertendo a pergunta. 54 multiplica 18 por 3, esquecendo o fator 10 (3 em vez de 10/3). 48 soma 18 + 30. E 23,4 aumenta 18 em 30%. Um atalho: se 30% valem 18, então 10% valem 6, e 100% valem 60.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma pessoa lê 20 páginas em 30 minutos. Mantendo esse ritmo, quanto tempo ela leva para ler um livro de 150 páginas?",
    opcoes: [
      "1 hora e 40 minutos",
      "2 horas e 25 minutos",
      "3 horas e 30 minutos",
      "4 horas e 15 minutos",
      "3 horas e 45 minutos",
    ],
    correta: 4,
    explicacao:
      "Cada página leva 30 ÷ 20 = 1,5 minuto. Para 150 páginas: 150 × 1,5 = 225 minutos. Convertendo: 225 minutos = 180 + 45 = 3 horas e 45 minutos.\n\n1 hora e 40 minutos (100 minutos) inverte a razão, usando 20/30 de minuto por página. 2 horas e 25 minutos acerta os 225 minutos, mas converte como se a hora tivesse 100 minutos. 3 horas e 30 minutos e 4 horas e 15 minutos erram a conta por 15 ou 30 minutos. Na conversão, divide-se por 60: 225 ÷ 60 dá 3 horas e resto de 45 minutos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Numa casa de câmbio, 1 euro custa R$ 6,00. Quantos euros se compram com R$ 450,00?",
    opcoes: [
      "2.700 euros",
      "444 euros",
      "90 euros",
      "75 euros",
      "7,5 euros",
    ],
    correta: 3,
    explicacao:
      "Cada euro custa 6 reais, então 450 reais compram 450 ÷ 6 = 75 euros. Conferindo: 75 × 6 = 450.\n\n2.700 euros multiplica 450 por 6, em vez de dividir — seria o preço, em reais, de 450 euros. 444 euros subtrai 6. 90 euros divide por 5, errando a cotação. E 7,5 euros erra a vírgula do resultado. Conferência: 75 euros, a R$ 6,00 cada, custam exatamente os R$ 450,00 disponíveis.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Quatro impressoras iguais imprimem 1.200 páginas em 5 minutos. Quantas impressoras iguais a essas são necessárias para imprimir 3.600 páginas em 3 minutos?",
    opcoes: [
      "12",
      "7,2",
      "60",
      "36",
      "20",
    ],
    correta: 4,
    explicacao:
      "Cada impressora imprime 1.200 ÷ (4 × 5) = 60 páginas por minuto. Para 3.600 páginas em 3 minutos, é preciso imprimir 3.600 ÷ 3 = 1.200 páginas por minuto, o que exige 1.200 ÷ 60 = 20 impressoras.\n\n12 considera o triplo de páginas, mas esquece que o tempo diminuiu. 7,2 inverte a relação com o tempo, como se menos tempo exigisse menos impressoras. 60 é a produção de cada impressora por minuto, não o número de impressoras. E 36 multiplica 12 por 3, usando o tempo como se fosse diretamente proporcional ao número de impressoras.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Oito costureiras fazem 120 camisas em 5 dias. Quantas camisas 6 costureiras fazem em 8 dias, no mesmo ritmo?",
    opcoes: [
      "144",
      "90",
      "192",
      "256",
      "120",
    ],
    correta: 0,
    explicacao:
      "Cada costureira faz 120 ÷ (8 × 5) = 3 camisas por dia. Seis costureiras em 8 dias: 6 × 8 × 3 = 144 camisas.\n\n90 considera só a redução de costureiras (120 × 6/8), esquecendo os dias a mais. 192 considera só os dias (120 × 8/5). 256 inverte a razão das costureiras, como se menos pessoas produzissem mais. E 120 ignora as mudanças. Conferência: 144 camisas feitas por 6 costureiras em 8 dias dão 3 camisas por costureira por dia, o ritmo do enunciado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Com 2 latas de tinta, pinta-se uma parede de 30 m². Quantas latas iguais são necessárias para pintar 75 m²?",
    opcoes: [
      "5 latas",
      "2,5 latas",
      "37,5 latas",
      "10 latas",
      "7,5 latas",
    ],
    correta: 0,
    explicacao:
      "Cada lata pinta 30 ÷ 2 = 15 m². Para 75 m²: 75 ÷ 15 = 5 latas. Pela regra de três: 30 m² estão para 2 latas assim como 75 m² estão para x, e x = 2 × 75 ÷ 30 = 5.\n\n2,5 latas divide 75 por 30, esquecendo que os 30 m² gastaram 2 latas, e não uma. 37,5 divide a área pelo número de latas. 10 latas dobra a resposta. E 7,5 latas divide 75 por 10, sem base na proporção.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "A ração de um haras dá para alimentar 20 cavalos por 15 dias. Se forem 25 cavalos, comendo a mesma quantidade diária cada um, para quantos dias a ração vai dar?",
    opcoes: [
      "18,75 dias",
      "10 dias",
      "20 dias",
      "15 dias",
      "12 dias",
    ],
    correta: 4,
    explicacao:
      "Mais cavalos consomem a ração mais depressa: número de cavalos e número de dias são inversamente proporcionais. A ração equivale a 20 × 15 = 300 rações diárias. Com 25 cavalos: 300 ÷ 25 = 12 dias.\n\n18,75 dias trata as grandezas como diretas (15 × 25/20), como se mais cavalos fizessem a ração durar mais. 10 e 20 dias somam ou subtraem 5 dias por causa dos 5 cavalos de diferença. E 15 dias ignora a mudança.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Um acampamento tem comida suficiente para 40 pessoas durante 30 dias. Depois de 10 dias, chegam mais 10 pessoas. Mantido o consumo diário de cada pessoa, a comida restante dura quantos dias?",
    opcoes: [
      "16 dias",
      "24 dias",
      "20 dias",
      "25 dias",
      "14 dias",
    ],
    correta: 0,
    explicacao:
      "O estoque inicial equivale a 40 × 30 = 1.200 refeições diárias. Em 10 dias, as 40 pessoas consomem 400; sobram 800. Com 50 pessoas: 800 ÷ 50 = 16 dias.\n\n24 dias faz a conta para 50 pessoas desde o início (1.200 ÷ 50), ignorando os 10 dias já consumidos. 20 dias ignora a chegada das 10 pessoas. 25 dias trata as grandezas como diretas (20 × 50/40). E 14 dias desconta os 10 dias passados do total calculado para 50 pessoas (24 − 10), misturando as duas situações.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Um ônibus percorre 150 km em 2 horas e 30 minutos. Mantendo a mesma velocidade, quantos quilômetros ele percorre em 4 horas?",
    opcoes: [
      "93,75 km",
      "300 km",
      "600 km",
      "375 km",
      "240 km",
    ],
    correta: 4,
    explicacao:
      "A velocidade é 150 ÷ 2,5 = 60 km por hora (2 horas e 30 minutos são 2,5 horas). Em 4 horas: 4 × 60 = 240 km.\n\n93,75 km trata distância e tempo como inversos. 300 km lê 2 horas e 30 minutos como 2 horas, errando a velocidade para 75 km/h. 600 km usa 150 km por hora. E 375 km multiplica 150 por 2,5 em vez de dividir. Conferência: a 60 km/h, 2,5 horas cobrem os 150 km do enunciado, e 4 horas cobrem 240 km.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Seis torneiras iguais enchem 2 tanques iguais em 3 horas. Em quanto tempo 4 dessas torneiras enchem 4 tanques iguais a esses?",
    opcoes: [
      "6 horas",
      "4 horas e 30 minutos",
      "4 horas",
      "3 horas",
      "9 horas",
    ],
    correta: 4,
    explicacao:
      "Cada torneira enche, por hora, 2 ÷ (6 × 3) = 1/9 de tanque. Quatro torneiras enchem 4/9 de tanque por hora; para 4 tanques, são 4 ÷ (4/9) = 9 horas. Pela regra de três composta: o tempo cresce com o número de tanques (× 4/2) e com a redução de torneiras (× 6/4): 3 × 2 × 1,5 = 9 horas.\n\n6 horas considera o dobro de tanques, mas esquece que há menos torneiras. 4 horas e 30 minutos considera só a redução de torneiras. 4 horas inverte a razão das torneiras. E 3 horas ignora as mudanças.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um profissional recebe R$ 1.800,00 por 120 horas de trabalho. Quanto ele recebe, no mesmo valor por hora, por 150 horas?",
    opcoes: [
      "R$ 1.440,00",
      "R$ 1.830,00",
      "R$ 2.700,00",
      "R$ 2.250,00",
      "R$ 15,00",
    ],
    correta: 3,
    explicacao:
      "O valor da hora é 1.800 ÷ 120 = 15 reais. Por 150 horas: 150 × 15 = 2.250 reais. Pela regra de três direta: 120 está para 1.800 assim como 150 está para x, e x = 1.800 × 150 ÷ 120 = 2.250.\n\nR$ 1.440,00 inverte a proporção, como se mais horas pagassem menos. R$ 1.830,00 soma 30 reais pelas 30 horas extras. R$ 2.700,00 multiplica 1.800 por 1,5, como se as horas tivessem aumentado 50%, e não 25%. E R$ 15,00 é só o valor de uma hora.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma equipe fez 3/4 de uma obra em 12 dias. Mantendo o mesmo ritmo, em quantos dias ela faria a obra inteira?",
    opcoes: [
      "9 dias",
      "15 dias",
      "16 dias",
      "48 dias",
      "4 dias",
    ],
    correta: 2,
    explicacao:
      "Se 3/4 da obra levaram 12 dias, 1/4 leva 12 ÷ 3 = 4 dias, e a obra inteira (4/4) leva 4 × 4 = 16 dias. Pela regra de três: 3/4 está para 12 assim como 1 está para x, e x = 12 ÷ (3/4) = 16.\n\n9 dias multiplica 12 por 3/4, em vez de dividir. 15 dias soma 3 dias sem base. 48 dias multiplica 12 por 4, esquecendo o 3 do numerador. E 4 dias é o tempo que falta para terminar a obra, e não o da obra inteira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Uma obra seria feita por uma equipe num certo número de dias. Se a equipe tiver 25% mais operários, trabalhando no mesmo ritmo, o tempo necessário diminui em quantos por cento?",
    opcoes: [
      "25%",
      "20%",
      "80%",
      "75%",
      "125%",
    ],
    correta: 1,
    explicacao:
      "Tempo e número de operários são inversamente proporcionais: com 1,25 vez mais operários, o tempo fica dividido por 1,25, ou seja, multiplicado por 0,8. O tempo cai 20%. Com números: 4 operários em 10 dias; com 5 operários (25% a mais), 4 × 10 ÷ 5 = 8 dias — 2 dias a menos, 20% dos 10.\n\n25% supõe que a redução do tempo tenha a mesma porcentagem do aumento de operários. 80% é o novo tempo em relação ao antigo, não a redução. E 75% e 125% tratam as grandezas como diretamente proporcionais.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Porcentagem e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma torneira encheu 40% de um tanque em 18 minutos. Mantendo a mesma vazão, em quanto tempo ela enche o tanque inteiro, começando do tanque vazio?",
    opcoes: [
      "7,2 minutos",
      "72 minutos",
      "45 minutos",
      "58 minutos",
      "28,8 minutos",
    ],
    correta: 2,
    explicacao:
      "Se 40% levam 18 minutos, 10% levam 18 ÷ 4 = 4,5 minutos, e 100% levam 10 × 4,5 = 45 minutos. Pela regra de três: 40 está para 18 assim como 100 está para x, e x = 18 × 100 ÷ 40 = 45.\n\n7,2 minutos calcula 40% de 18, invertendo a relação. 72 minutos multiplica 18 por 4, como se 40% fossem um quarto do tanque. 58 minutos soma 18 + 40. E 28,8 minutos soma a 18 apenas 60% de 18, confundindo a parte que falta encher com a do tempo.",
  },
];
