/* Matemática financeira: juros e descontos — parte A (25 questões).
   Juros simples e compostos, montante, taxa, acréscimos e descontos.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Um capital de R$ 1.000,00 foi aplicado no regime de juros simples, à taxa de 2% ao mês, durante 6 meses. O valor dos juros produzidos nessa aplicação foi de:",
    opcoes: ["R$ 20,00", "R$ 60,00", "R$ 120,00", "R$ 200,00", "R$ 1.120,00"],
    correta: 2,
    explicacao:
      "Em juros simples, J = C · i · t = 1 000 · 0,02 · 6 = R$ 120,00. A alternativa R$ 1.120,00 é o montante, que já inclui o capital inicial — o enunciado pediu apenas os juros. Já R$ 20,00 corresponde a um único mês de rendimento.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Ainda considerando um capital de R$ 1.000,00 aplicado a juros simples de 2% ao mês durante 6 meses, o montante final resgatado pelo investidor foi de:",
    opcoes: ["R$ 1.120,00", "R$ 1.200,00", "R$ 1.020,00", "R$ 1.100,00", "R$ 1.240,00"],
    correta: 0,
    explicacao:
      "O montante é o capital somado aos juros: 1 000 + 120 = R$ 1.120,00. A alternativa R$ 1.020,00 considera apenas um mês de aplicação. Distinguir juros de montante é essencial: os juros são o rendimento, o montante é o total resgatado.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Um capital de R$ 1.000,00 foi aplicado no regime de juros compostos, à taxa de 10% ao ano, durante 2 anos. O montante ao final desse período foi de:",
    opcoes: ["R$ 1.200,00", "R$ 1.100,00", "R$ 1.020,00", "R$ 1.220,00", "R$ 1.210,00"],
    correta: 4,
    explicacao:
      "Em juros compostos, M = C · (1 + i)ᵗ = 1 000 · (1,1)² = 1 000 · 1,21 = R$ 1.210,00. A alternativa R$ 1.200,00 é o montante que juros simples produziriam. A diferença de R$ 10,00 é exatamente o rendimento do primeiro ano de juros aplicado no segundo — os juros sobre juros.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Compara-se a aplicação de um mesmo capital, pela mesma taxa, nos regimes de juros simples e de juros compostos, ao final de um único período. Sobre os montantes obtidos nesse primeiro período, é correto afirmar que:",
    opcoes: [
      "o montante composto é sempre maior.",
      "os dois montantes são exatamente iguais.",
      "o montante simples é sempre maior.",
      "o montante composto é o dobro do simples.",
      "não é possível comparar sem conhecer o capital.",
    ],
    correta: 1,
    explicacao:
      "No primeiro período ainda não existem juros acumulados para render juros, então os dois regimes produzem o mesmo resultado. A diferença começa a aparecer a partir do segundo período e cresce com o tempo. Para prazos maiores que um período, o regime composto sempre supera o simples com a mesma taxa.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Um produto que custa R$ 250,00 recebe um desconto de 20% para pagamento à vista. O valor efetivamente pago pelo cliente nessa condição é de:",
    opcoes: ["R$ 230,00", "R$ 220,00", "R$ 210,00", "R$ 200,00", "R$ 50,00"],
    correta: 3,
    explicacao:
      "O desconto é 20% de 250, ou seja, R$ 50,00, e o valor pago é 250 − 50 = R$ 200,00. A alternativa R$ 50,00 é apenas o desconto, não o preço final. O caminho direto é multiplicar por 0,80, já que pagar com 20% de desconto equivale a pagar 80% do preço.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Um produto que custava R$ 80,00 sofreu um aumento de 10% em seu preço. O novo preço desse produto passou a ser:",
    opcoes: ["R$ 90,00", "R$ 81,00", "R$ 98,00", "R$ 88,00", "R$ 72,00"],
    correta: 3,
    explicacao:
      "O aumento é 10% de 80, isto é, R$ 8,00, e o novo preço é 80 + 8 = R$ 88,00. A alternativa R$ 90,00 soma 10 reais em vez de 10 por cento — confundir a porcentagem com o valor absoluto é o erro mais comum. Multiplicar por 1,10 dá o mesmo resultado em uma única operação.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Um capital foi aplicado no regime de juros simples e dobrou de valor após 10 meses. A taxa mensal de juros dessa aplicação foi de:",
    opcoes: ["5%", "10%", "20%", "2%", "100%"],
    correta: 1,
    explicacao:
      "Dobrar significa que os juros igualaram o capital, ou seja, J = C. De J = C · i · t vem C = C · i · 10, logo i = 1/10 = 0,10 = 10% ao mês. A alternativa 100% é o crescimento total no período, não a taxa mensal. Em juros simples, o tempo necessário para dobrar é sempre 1 dividido pela taxa.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Uma loja vende um eletrodoméstico por R$ 1.200,00 e oferece 15% de desconto para pagamento à vista. O valor à vista desse eletrodoméstico é de:",
    opcoes: ["R$ 1.020,00", "R$ 1.080,00", "R$ 1.380,00", "R$ 1.185,00", "R$ 900,00"],
    correta: 0,
    explicacao:
      "Pagar com 15% de desconto equivale a pagar 85% do preço: 1 200 · 0,85 = R$ 1.020,00. A alternativa R$ 1.185,00 subtrai apenas 15 reais, e não 15%. Já R$ 1.380,00 aplica um acréscimo em vez de desconto.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Um capital de R$ 2.000,00 foi aplicado a juros simples com taxa de 3% ao mês durante 5 meses. Os juros gerados nessa aplicação totalizaram:",
    opcoes: ["R$ 600,00", "R$ 30,00", "R$ 300,00", "R$ 2.300,00", "R$ 150,00"],
    correta: 2,
    explicacao:
      "Aplicando J = C · i · t = 2 000 · 0,03 · 5 = R$ 300,00. A alternativa R$ 150,00 esquece de multiplicar pelo tempo completo, e R$ 2.300,00 é o montante. Em juros simples, o rendimento é o mesmo em todos os meses: R$ 60,00 por mês, cinco vezes.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Uma aplicação rende juros simples à taxa de 2% ao mês. Convertendo essa taxa para o período anual, ainda no regime de juros simples, ela corresponde a:",
    opcoes: ["2% ao ano", "12% ao ano", "20% ao ano", "26,8% ao ano", "24% ao ano"],
    correta: 4,
    explicacao:
      "Em juros simples, taxas proporcionais se somam diretamente: 2% · 12 = 24% ao ano. A alternativa 26,8% seria a taxa equivalente no regime composto, em que (1,02)¹² ≈ 1,268. É justamente essa diferença que faz o regime composto render mais no longo prazo.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Um produto custa R$ 1.000,00 à vista, mas também pode ser pago em 10 parcelas iguais de R$ 120,00. Considerando o preço à vista como referência, o acréscimo total cobrado no parcelamento corresponde a:",
    opcoes: ["16,7%", "20%", "10%", "12%", "2%"],
    correta: 1,
    explicacao:
      "O total parcelado é 10 · 120 = R$ 1.200,00, o que representa R$ 200,00 acima do preço à vista. Sobre os R$ 1.000,00 de referência, isso equivale a 200/1 000 = 20%. A alternativa 16,7% usaria o total parcelado como base de comparação, o que não é a referência pedida.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Em determinado ano, a inflação acumulada foi de 5% e o salário de um trabalhador recebeu reajuste de exatamente 5%. Em relação ao poder de compra desse trabalhador, é correto afirmar que ele:",
    opcoes: [
      "aumentou 5%, acompanhando o reajuste.",
      "aumentou 10%, somando reajuste e inflação.",
      "caiu 5%, pois a inflação corrói o salário.",
      "caiu 10%, pelo efeito acumulado.",
      "permaneceu praticamente o mesmo.",
    ],
    correta: 4,
    explicacao:
      "Quando o reajuste iguala a inflação, o salário compra aproximadamente a mesma quantidade de bens: o ganho real é nulo. Ganho real só existe quando o reajuste supera a inflação, e perda real quando fica abaixo dela. É por isso que reajustes costumam ser comparados sempre a um índice de preços.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Um capital aplicado a juros simples com taxa de 5% ao mês rendeu R$ 300,00 de juros ao longo de 6 meses. O valor desse capital era de:",
    opcoes: ["R$ 600,00", "R$ 900,00", "R$ 1.000,00", "R$ 1.200,00", "R$ 1.500,00"],
    correta: 2,
    explicacao:
      "Isolando o capital em J = C · i · t: C = 300/(0,05 · 6) = 300/0,3 = R$ 1.000,00. A alternativa R$ 1.500,00 dividiria apenas pela taxa, esquecendo o tempo. A conferência é direta: 5% de 1 000 são R$ 50,00 por mês, e seis meses dão R$ 300,00.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Um capital de R$ 500,00 foi aplicado no regime de juros compostos à taxa de 10% ao mês, durante 3 meses. O montante obtido ao final desse prazo foi de:",
    opcoes: ["R$ 650,00", "R$ 615,00", "R$ 550,00", "R$ 665,50", "R$ 600,00"],
    correta: 3,
    explicacao:
      "O montante é 500 · (1,1)³ = 500 · 1,331 = R$ 665,50. A alternativa R$ 650,00 corresponde ao regime de juros simples, que renderia R$ 50,00 por mês. Os R$ 15,50 de diferença são os juros gerados pelos próprios juros ao longo dos três meses.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "O preço de um produto sofreu dois aumentos sucessivos de 10% cada um. Em relação ao preço original, o aumento acumulado após os dois reajustes foi de:",
    opcoes: ["21%", "20%", "11%", "10%", "100%"],
    correta: 0,
    explicacao:
      "Aumentos sucessivos se multiplicam, não se somam: 1,10 · 1,10 = 1,21, o que representa 21% de acréscimo total. A alternativa 20% soma os dois percentuais, ignorando que o segundo aumento incide sobre um preço já reajustado. O ponto percentual extra é justamente o efeito dos juros sobre juros.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "O preço de uma mercadoria sofreu um aumento de 20% e, algum tempo depois, um desconto de 20% sobre o preço já aumentado. Comparando o preço final com o preço original, conclui-se que ele ficou:",
    opcoes: [
      "4% menor que o preço original.",
      "exatamente igual ao preço original.",
      "4% maior que o preço original.",
      "40% menor que o preço original.",
      "20% menor que o preço original.",
    ],
    correta: 0,
    explicacao:
      "Os fatores se multiplicam: 1,20 · 0,80 = 0,96, ou seja, o preço final é 96% do original — uma queda de 4%. O desconto incide sobre um valor maior que o inicial, então tira mais reais do que o aumento havia acrescentado. Aumento e desconto de mesmo percentual nunca se cancelam.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Uma televisão custa R$ 2.000,00 e pode ser paga em 3 parcelas mensais iguais, sem acréscimo de juros. O valor aproximado de cada parcela é de:",
    opcoes: ["R$ 600,00", "R$ 700,00", "R$ 650,00", "R$ 666,67", "R$ 500,00"],
    correta: 3,
    explicacao:
      "Sem juros, basta dividir o preço pelo número de parcelas: 2 000/3 ≈ R$ 666,67. A alternativa R$ 600,00 daria um total de R$ 1.800,00, abaixo do preço, e R$ 700,00 levaria a R$ 2.100,00, o que caracterizaria juros. Conferir se a soma das parcelas devolve o preço à vista valida a resposta.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Uma quantia de R$ 4.000,00 foi aplicada a juros simples com taxa de 1,5% ao mês durante 6 meses. Os juros produzidos nesse período somaram:",
    opcoes: ["R$ 60,00", "R$ 360,00", "R$ 600,00", "R$ 240,00", "R$ 400,00"],
    correta: 1,
    explicacao:
      "Aplicando J = 4 000 · 0,015 · 6 = R$ 360,00. A alternativa R$ 60,00 corresponde a um único mês, e R$ 600,00 usaria uma taxa de 2,5%. Taxas com casas decimais exigem atenção na conversão: 1,5% equivale a 0,015, e não a 0,15.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Ao avaliar o resultado de uma aplicação financeira, fala-se em rendimento nominal e rendimento real. O rendimento real de um investimento é aquele que:",
    opcoes: [
      "considera apenas o valor absoluto dos juros recebidos.",
      "corresponde à taxa anunciada pelo banco na contratação.",
      "soma o rendimento da aplicação à variação da inflação.",
      "é sempre maior que o rendimento nominal.",
      "desconta do rendimento obtido o efeito da inflação no período.",
    ],
    correta: 4,
    explicacao:
      "O rendimento nominal é o percentual bruto do período; o real mede o ganho de poder de compra, já descontada a alta de preços. Se uma aplicação rende 8% num ano em que a inflação foi de 6%, o ganho real é de aproximadamente 2%. Quando a inflação supera o rendimento, o ganho real chega a ser negativo.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "O preço de um produto passou de R$ 50,00 para R$ 60,00. O percentual de aumento aplicado a esse produto foi de:",
    opcoes: ["10%", "16,7%", "20%", "12%", "120%"],
    correta: 2,
    explicacao:
      "A variação é de R$ 10,00 sobre o preço inicial de R$ 50,00: 10/50 = 0,2 = 20%. A alternativa 16,7% usa o preço novo como base, o que responderia à pergunta 'que percentual do preço novo corresponde ao aumento'. A base de comparação em variação percentual é sempre o valor inicial.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "O preço de um produto caiu de R$ 80,00 para R$ 60,00. O percentual de redução aplicado sobre o preço original foi de:",
    opcoes: ["20%", "33,3%", "15%", "30%", "25%"],
    correta: 4,
    explicacao:
      "A queda de R$ 20,00 sobre o preço inicial de R$ 80,00 dá 20/80 = 0,25 = 25%. A alternativa 33,3% usaria o preço final como base, e 20% confundiria a variação em reais com a variação percentual. Note a assimetria: para voltar de 60 a 80 seria necessário um aumento de 33,3%, não de 25%.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Uma aplicação de R$ 1.000,00 rende 1% ao mês no regime de juros compostos. O montante acumulado ao final de 2 meses é de:",
    opcoes: ["R$ 1.020,00", "R$ 1.010,00", "R$ 1.020,10", "R$ 1.002,00", "R$ 1.021,00"],
    correta: 2,
    explicacao:
      "O montante é 1 000 · (1,01)² = 1 000 · 1,0201 = R$ 1.020,10. A alternativa R$ 1.020,00 é o resultado do regime de juros simples. Os dez centavos de diferença são os juros do primeiro mês rendendo no segundo — parecem pouco, mas esse efeito cresce rapidamente em prazos longos.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Comparando o comportamento do montante ao longo do tempo nos dois regimes de capitalização, é correto afirmar que, no regime de juros compostos, o montante cresce:",
    opcoes: [
      "linearmente, em progressão aritmética.",
      "sempre a uma taxa decrescente.",
      "de forma constante em valores absolutos.",
      "exponencialmente, em progressão geométrica.",
      "apenas nos primeiros períodos, estabilizando depois.",
    ],
    correta: 3,
    explicacao:
      "Em juros compostos, cada montante é o anterior multiplicado por (1 + i), o que caracteriza uma progressão geométrica e um crescimento exponencial. Em juros simples, soma-se sempre a mesma parcela, formando uma progressão aritmética e um crescimento linear. É essa diferença que explica por que dívidas rotativas crescem tão rápido.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Uma pessoa tomou um empréstimo de R$ 5.000,00 a juros simples de 2% ao mês, para pagar em uma única parcela ao final de 10 meses. O valor total a ser pago nessa parcela é de:",
    opcoes: ["R$ 6.000,00", "R$ 5.200,00", "R$ 7.000,00", "R$ 5.100,00", "R$ 6.100,00"],
    correta: 0,
    explicacao:
      "Os juros são 5 000 · 0,02 · 10 = R$ 1.000,00, e o total é 5 000 + 1 000 = R$ 6.000,00. A alternativa R$ 5.200,00 considera apenas um mês. Note que em 10 meses a 2% os juros equivalem a 20% do valor emprestado — proporção que ajuda a checar o resultado de cabeça.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Um produto custa R$ 300,00 e a loja oferece 10% de desconto para pagamento à vista, ou o parcelamento em 3 vezes sem juros pelo preço cheio. Optando pelo pagamento à vista, a economia obtida é de:",
    opcoes: ["R$ 10,00", "R$ 30,00", "R$ 27,00", "R$ 100,00", "R$ 90,00"],
    correta: 1,
    explicacao:
      "O desconto é 10% de 300, ou seja, R$ 30,00, e o valor à vista fica em R$ 270,00. A alternativa R$ 10,00 confunde o percentual com o valor em reais. A alternativa R$ 27,00 aplicaria os 10% sobre o preço já descontado, o que não é o procedimento correto.",
  },
];
