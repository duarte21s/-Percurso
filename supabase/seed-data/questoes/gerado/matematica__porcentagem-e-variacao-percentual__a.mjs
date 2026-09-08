/* Porcentagem e variação percentual — parte A (25 questões).
   Conversões entre fração, decimal e porcentagem, cálculo direto e inverso,
   acréscimos, descontos e ponto percentual. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Em uma turma com 80 estudantes, exatamente 25% deles participam do grêmio estudantil. O número de estudantes que participam do grêmio é:",
    opcoes: ["25", "2,5", "20", "16", "40"],
    correta: 2,
    explicacao:
      "Calcular 25% equivale a tomar um quarto do total: 80/4 = 20. Pelo decimal, 0,25 · 80 = 20. A alternativa 25 confunde o percentual com a quantidade, e 40 corresponderia a 50%. Reconhecer que 25% é um quarto, 50% é a metade e 20% é um quinto acelera muito esse tipo de conta.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Um índice foi registrado na forma decimal como 0,35. Convertendo esse valor para a forma percentual, ele corresponde a:",
    opcoes: ["35%", "3,5%", "0,35%", "350%", "65%"],
    correta: 0,
    explicacao:
      "Para converter de decimal para porcentagem, multiplica-se por 100: 0,35 · 100 = 35%. A alternativa 3,5% desloca a vírgula apenas uma casa. Já 65% é o complemento de 35% para 100%, valor que responderia a outra pergunta.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma fração muito usada em cálculos cotidianos é 1/4. Escrevendo essa fração na forma percentual, obtém-se:",
    opcoes: ["14%", "4%", "40%", "25%", "75%"],
    correta: 3,
    explicacao:
      "Dividindo 1 por 4 obtém-se 0,25, que corresponde a 25%. A alternativa 75% é o complemento, ou seja, a fração 3/4. Uma tabela mental básica ajuda muito: 1/2 é 50%, 1/4 é 25%, 1/5 é 20%, 1/8 é 12,5% e 1/3 é aproximadamente 33,3%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma loja tem um estoque de 200 unidades de determinado produto e vendeu 15% desse estoque em um único dia. O número de unidades vendidas nesse dia foi:",
    opcoes: ["15", "20", "25", "35", "30"],
    correta: 4,
    explicacao:
      "O cálculo é 0,15 · 200 = 30 unidades. A alternativa 15 confunde o percentual com a quantidade absoluta. Um caminho mental: 10% de 200 são 20 e 5% são 10, somando 30 — decompor o percentual em parcelas fáceis costuma ser mais rápido que a multiplicação direta.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Sabe-se que 20% de um determinado número é igual a 40. Nessas condições, o valor desse número é:",
    opcoes: ["80", "200", "160", "400", "20"],
    correta: 1,
    explicacao:
      "De 0,20 · x = 40 vem x = 40/0,20 = 200. A alternativa 80 multiplicaria 40 por 2 sem justificativa. A conferência é direta: 20% de 200 são 40. Sempre que a porcentagem é conhecida e o todo é a incógnita, a operação é uma divisão, não uma multiplicação.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Em uma turma com 40 estudantes matriculados, 30% faltaram em determinado dia de aula. O número de estudantes ausentes nesse dia foi:",
    opcoes: ["4", "10", "30", "8", "12"],
    correta: 4,
    explicacao:
      "O cálculo é 0,30 · 40 = 12 estudantes ausentes, restando 28 presentes. A alternativa 30 confunde o percentual com a contagem, e 4 corresponderia a 10%. Conferir se o resultado é plausível dentro do total é sempre útil: 12 é menos de um terço de 40, coerente com 30%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Um produto que custava R$ 200,00 sofreu um aumento de 5% em seu preço. O novo preço desse produto passou a ser de:",
    opcoes: ["R$ 205,00", "R$ 210,00", "R$ 250,00", "R$ 195,00", "R$ 220,00"],
    correta: 1,
    explicacao:
      "O acréscimo é 0,05 · 200 = R$ 10,00, então o novo preço é R$ 210,00. Multiplicar diretamente por 1,05 dá o mesmo resultado em uma operação. A alternativa R$ 205,00 soma 5 reais em vez de 5%, confusão frequente quando o percentual é pequeno.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Percentuais maiores que 100% indicam uma quantidade superior ao valor de referência. Calculando 120% de 50, obtém-se:",
    opcoes: ["60", "55", "70", "120", "65"],
    correta: 0,
    explicacao:
      "O cálculo é 1,20 · 50 = 60. Como 100% de 50 são 50 e 20% são 10, o total é 60. A alternativa 55 corresponderia a 110%. Percentuais acima de 100% são comuns em crescimento acumulado e não têm nada de irregular — só indicam que o resultado supera o valor original.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "A nota de um estudante passou de 4,0 para 5,0 entre dois bimestres. O aumento percentual observado nessa nota foi de:",
    opcoes: ["10%", "20%", "25%", "1%", "50%"],
    correta: 2,
    explicacao:
      "A variação absoluta é 1,0 sobre a nota inicial de 4,0: 1/4 = 0,25 = 25%. A alternativa 20% usaria a nota final como base de comparação. Em variação percentual, o denominador é sempre o valor de partida — é ele que define os 100% de referência.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Em uma pesquisa, calcula-se primeiro 10% de um total de 1.000 e, em seguida, 10% do resultado obtido. O valor final desse cálculo é:",
    opcoes: ["100", "20", "1", "10", "200"],
    correta: 3,
    explicacao:
      "Primeiro, 10% de 1 000 são 100; depois, 10% de 100 são 10. Aplicar percentuais em sequência equivale a multiplicar os fatores: 0,10 · 0,10 = 0,01, ou seja, 1% do valor original. A alternativa 200 somaria os percentuais, o que não corresponde a nenhuma etapa do cálculo.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "A taxa de desemprego de uma região passou de 8% para 11% entre dois trimestres. A forma tecnicamente correta de descrever essa mudança é dizer que a taxa aumentou:",
    opcoes: [
      "3%, em relação ao trimestre anterior.",
      "3 pontos percentuais.",
      "37,5 pontos percentuais.",
      "11%, atingindo o novo patamar.",
      "19%, somando os dois valores.",
    ],
    correta: 1,
    explicacao:
      "A diferença entre dois percentuais se expressa em pontos percentuais: 11 − 8 = 3 pontos. Dizer que aumentou 3% seria impreciso, porque o aumento relativo foi de 3/8 = 37,5%. Distinguir ponto percentual de percentual é essencial na leitura de indicadores econômicos, em que os dois números contam histórias bem diferentes.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Em uma projeção de crescimento, é preciso calcular 200% de 30. O resultado desse cálculo é:",
    opcoes: ["30", "15", "20", "60", "6"],
    correta: 3,
    explicacao:
      "Como 100% de 30 são 30, 200% correspondem ao dobro: 60. A alternativa 30 confundiria 200% com 100%. Vale a distinção: 'ser 200% de um valor' significa ser o dobro, mas 'aumentar 200%' significa triplicar, já que o aumento se soma ao valor original.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Um produto que custava R$ 60,00 passou a ser vendido por R$ 45,00 durante uma promoção. O desconto percentual concedido foi de:",
    opcoes: ["15%", "33%", "20%", "30%", "25%"],
    correta: 4,
    explicacao:
      "A redução foi de R$ 15,00 sobre o preço inicial de R$ 60,00: 15/60 = 0,25 = 25%. A alternativa 15% confunde o valor em reais com o percentual, e 33% usaria o preço promocional como base. O valor de referência continua sendo o preço antes do desconto.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "Ao calcular 5% de 5% de um determinado valor, o resultado corresponde, em relação ao valor original, a:",
    opcoes: ["0,25%", "10%", "25%", "0,5%", "2,5%"],
    correta: 0,
    explicacao:
      "Percentuais aplicados em sequência se multiplicam: 0,05 · 0,05 = 0,0025, ou seja, 0,25%. A alternativa 10% somaria os dois percentuais, operação que não tem sentido aqui. Note como o resultado é muito menor que cada um dos percentuais isolados — aplicar percentuais pequenos em cadeia reduz drasticamente o valor.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma reportagem informa que a população de determinada cidade cresceu 100% em relação ao censo anterior. Esse crescimento significa que a população:",
    opcoes: [
      "permaneceu exatamente a mesma.",
      "aumentou pela metade do valor anterior.",
      "dobrou em relação ao valor anterior.",
      "triplicou em relação ao valor anterior.",
      "foi reduzida a zero.",
    ],
    correta: 2,
    explicacao:
      "Um aumento de 100% acrescenta ao valor original outro tanto igual a ele, o que resulta no dobro. Para triplicar, o crescimento precisaria ser de 200%. A confusão entre 'ser 100% de' — que é permanecer igual — e 'aumentar 100%' — que é dobrar — é a armadilha desse tipo de manchete.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma pesquisa apontou que 3/5 dos entrevistados aprovam determinada medida. Escrevendo essa fração na forma percentual, o percentual de aprovação é de:",
    opcoes: ["60%", "35%", "53%", "30%", "65%"],
    correta: 0,
    explicacao:
      "Dividindo 3 por 5 obtém-se 0,6, ou seja, 60%. A alternativa 35% apenas repete os algarismos da fração. Uma conferência: se 1/5 vale 20%, então 3/5 valem três vezes isso, 60% — e os 2/5 restantes correspondem aos 40% que não aprovam.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma escola tem 500 estudantes matriculados, dos quais 40% são meninos. O número de meninos matriculados nessa escola é:",
    opcoes: ["150", "250", "200", "300", "400"],
    correta: 2,
    explicacao:
      "O cálculo é 0,40 · 500 = 200 meninos, restando 300 meninas. A alternativa 250 corresponderia a 50%. Conferir os complementos ajuda: 200 + 300 = 500, e 40% + 60% = 100%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Um determinado valor sofre uma redução de exatamente 100%. Após essa redução, o valor resultante é:",
    opcoes: [
      "igual à metade do valor original.",
      "igual a zero.",
      "igual ao próprio valor original.",
      "igual ao dobro do valor original.",
      "negativo, com o mesmo módulo do original.",
    ],
    correta: 1,
    explicacao:
      "Reduzir 100% significa subtrair o valor inteiro, restando zero. É por isso que não existe desconto maior que 100% em um preço: passar disso implicaria a loja pagar o cliente. A alternativa do valor negativo é justamente o resultado impossível que a regra evita.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Uma prefeitura destinou 7% de um orçamento de R$ 1.200,00 mil para determinada rubrica. O valor destinado, em milhares de reais, foi de:",
    opcoes: ["70", "72", "96", "84", "120"],
    correta: 3,
    explicacao:
      "O cálculo é 0,07 · 1 200 = 84. Um caminho mental: 1% de 1 200 são 12, e 7% são 7 · 12 = 84. A alternativa 70 arredondaria indevidamente para 1% igual a 10. Encontrar primeiro o valor de 1% costuma ser o método mais seguro para percentuais quebrados.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "O preço de um produto sofreu um aumento de 50% e, em seguida, um desconto de 50% sobre o valor já aumentado. Comparado ao preço original, o preço final ficou:",
    opcoes: [
      "igual ao preço original.",
      "50% maior que o original.",
      "25% maior que o original.",
      "50% menor que o original.",
      "25% menor que o original.",
    ],
    correta: 4,
    explicacao:
      "Os fatores se multiplicam: 1,50 · 0,50 = 0,75, ou seja, o preço final é 75% do original — uma queda de 25%. O desconto incide sobre um valor inflado, então retira mais dinheiro do que o aumento havia acrescentado. Aumento e desconto de mesmo percentual nunca se cancelam.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Uma taxa administrativa corresponde a 0,5% do valor aplicado. Sobre uma aplicação de R$ 4.000,00, o valor dessa taxa é de:",
    opcoes: ["R$ 200,00", "R$ 2,00", "R$ 5,00", "R$ 20,00", "R$ 40,00"],
    correta: 3,
    explicacao:
      "O cálculo é 0,005 · 4 000 = R$ 20,00. A alternativa R$ 200,00 usaria 5% em vez de 0,5%, erro de uma casa decimal. Um atalho: 1% de 4 000 são R$ 40,00, e metade disso é R$ 20,00.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Um capital cresceu de R$ 800,00 para R$ 1.000,00 ao longo de um período. A variação percentual observada nesse capital foi de:",
    opcoes: ["20%", "200%", "2,5%", "80%", "25%"],
    correta: 4,
    explicacao:
      "A variação absoluta é R$ 200,00 sobre o valor inicial de R$ 800,00: 200/800 = 0,25 = 25%. A alternativa 20% usaria o valor final como base. Note a assimetria: para voltar de 1 000 a 800, a queda necessária seria de 20%, não de 25%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Em uma prova composta por 40 questões, um candidato acertou 34. O percentual de acertos obtido por esse candidato foi de:",
    opcoes: ["68%", "80%", "85%", "90%", "75%"],
    correta: 2,
    explicacao:
      "O cálculo é 34/40 = 0,85 = 85%. A alternativa 68% dobraria o denominador indevidamente. Um caminho mental: cada questão vale 100/40 = 2,5%, então 34 questões valem 34 · 2,5 = 85%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Em planilhas de cálculo, é comum aplicar diretamente um fator multiplicativo a um valor. Multiplicar um preço por 0,8 equivale a aplicar sobre ele:",
    opcoes: [
      "um aumento de 80%.",
      "um desconto de 20%.",
      "um desconto de 8%.",
      "um aumento de 120%.",
      "um desconto de 18%.",
    ],
    correta: 1,
    explicacao:
      "Pagar 80% do preço significa deixar de pagar os 20% restantes, o que caracteriza um desconto de 20%. O fator multiplicativo e o percentual de desconto são complementares: 1 − 0,80 = 0,20. Trabalhar com fatores é mais rápido e evita erros em descontos sucessivos.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Ainda no uso de fatores multiplicativos, multiplicar um valor por 1,15 equivale a aplicar sobre ele:",
    opcoes: [
      "um aumento de 15%.",
      "um aumento de 115%.",
      "um aumento de 1,15%.",
      "um desconto de 85%.",
      "um aumento de 1,5%.",
    ],
    correta: 0,
    explicacao:
      "O fator 1,15 representa os 100% originais mais 15% de acréscimo. A alternativa 115% confunde o fator total com o percentual de aumento: o valor final é 115% do original, mas o aumento em si é de 15%. Essa distinção entre 'ser X% de' e 'aumentar X%' aparece em quase toda questão de variação percentual.",
  },
];
