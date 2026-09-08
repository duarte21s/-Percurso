/* Matemática financeira: juros e descontos — parte B (25 questões).
   Lucro e prejuízo sobre custo, descontos sucessivos, taxas equivalentes,
   financiamento e depreciação. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Um comerciante compra um produto por R$ 40,00 e o revende por R$ 50,00. O percentual de lucro obtido, calculado sobre o preço de custo, é de:",
    opcoes: ["10%", "20%", "15%", "25%", "50%"],
    correta: 3,
    explicacao:
      "O lucro é de R$ 10,00 sobre um custo de R$ 40,00: 10/40 = 0,25 = 25%. A alternativa 20% usa o preço de venda como base, o que responderia a 'lucro sobre a venda'. Ler qual é a base de cálculo é decisivo: o mesmo lucro em reais gera percentuais diferentes conforme se compare ao custo ou à venda.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Um vendedor recebe comissão de 5% sobre o total que vende em cada mês. Em um mês em que suas vendas somaram R$ 8.000,00, o valor da comissão recebida foi de:",
    opcoes: ["R$ 400,00", "R$ 40,00", "R$ 800,00", "R$ 500,00", "R$ 160,00"],
    correta: 0,
    explicacao:
      "A comissão é 5% de 8 000, ou seja, 0,05 · 8 000 = R$ 400,00. A alternativa R$ 800,00 corresponde a 10%, e R$ 40,00 erra a posição da vírgula. Um atalho mental: 10% de 8 000 são 800, e 5% é metade disso.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Uma loja aplica sobre o preço de um produto um desconto de 10% e, sobre o valor já reduzido, um segundo desconto de 20%. Esses dois descontos sucessivos equivalem a um desconto único de:",
    opcoes: ["30%", "25%", "28%", "32%", "18%"],
    correta: 2,
    explicacao:
      "Os fatores se multiplicam: 0,90 · 0,80 = 0,72, ou seja, o cliente paga 72% do preço e o desconto total é de 28%. A alternativa 30% soma os percentuais, o que superestima o benefício, porque o segundo desconto incide sobre um valor já menor. Descontos sucessivos nunca somam.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Uma caderneta de poupança rende 0,5% ao mês. Aplicando R$ 2.000,00 nessa poupança e resgatando após exatamente um mês, o rendimento obtido é de:",
    opcoes: ["R$ 100,00", "R$ 50,00", "R$ 5,00", "R$ 20,00", "R$ 10,00"],
    correta: 4,
    explicacao:
      "O rendimento é 0,005 · 2 000 = R$ 10,00. A alternativa R$ 100,00 usaria 5%, dez vezes a taxa informada. A conversão de porcentagem para decimal é o ponto crítico: 0,5% equivale a 0,005, e não a 0,05.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Uma dívida de R$ 1.000,00 é corrigida por juros compostos à taxa de 5% ao mês. Após 2 meses sem qualquer pagamento, o valor devido passa a ser:",
    opcoes: ["R$ 1.100,00", "R$ 1.102,50", "R$ 1.050,00", "R$ 1.105,00", "R$ 1.025,00"],
    correta: 1,
    explicacao:
      "O montante é 1 000 · (1,05)² = 1 000 · 1,1025 = R$ 1.102,50. A alternativa R$ 1.100,00 corresponde ao regime simples. Os R$ 2,50 de diferença vêm dos juros do primeiro mês rendendo no segundo — pequenos aqui, mas determinantes quando a dívida se arrasta por muitos meses.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Uma aplicação oferece taxa de 12% ao ano no regime de juros simples. A taxa mensal proporcional correspondente a essa aplicação é de:",
    opcoes: ["12%", "0,12%", "1%", "3%", "1,2%"],
    correta: 2,
    explicacao:
      "Em juros simples, taxas proporcionais se obtêm por divisão direta: 12%/12 = 1% ao mês. A alternativa 1,2% divide por 10 em vez de por 12. No regime composto o raciocínio seria diferente, porque ali se usa a raiz de índice 12, resultando em taxa um pouco menor que 1%.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Um carro comprado por R$ 60.000,00 sofre depreciação de 10% ao ano sobre o valor do início de cada ano. Ao final de 2 anos, o valor desse carro passa a ser de:",
    opcoes: ["R$ 48.000,00", "R$ 54.000,00", "R$ 50.000,00", "R$ 49.000,00", "R$ 48.600,00"],
    correta: 4,
    explicacao:
      "A cada ano o valor é multiplicado por 0,90: 60 000 · 0,90 · 0,90 = 60 000 · 0,81 = R$ 48.600,00. A alternativa R$ 48.000,00 subtrai 20% de uma vez, ignorando que a segunda queda incide sobre R$ 54.000,00, e não sobre o valor original. Depreciações sucessivas seguem a mesma lógica dos descontos sucessivos.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Um cliente pagou R$ 150,00 por um produto que estava com 25% de desconto sobre o preço de etiqueta. O preço original desse produto, antes do desconto, era de:",
    opcoes: ["R$ 175,00", "R$ 200,00", "R$ 187,50", "R$ 250,00", "R$ 180,00"],
    correta: 1,
    explicacao:
      "Pagando 75% do preço original, tem-se 0,75 · P = 150, logo P = 150/0,75 = R$ 200,00. A alternativa R$ 187,50 acrescenta 25% ao valor pago, o que é o caminho inverso e incorreto: 25% de 150 não é o mesmo que 25% de 200. Para voltar ao preço original, divide-se pelo fator, nunca se soma o percentual.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Um capital é aplicado no regime de juros simples com taxa de 10% ao mês. O número de meses necessários para que esse capital triplique de valor é:",
    opcoes: ["20", "30", "10", "15", "25"],
    correta: 0,
    explicacao:
      "Triplicar significa que os juros equivalem a duas vezes o capital: 2C = C · 0,10 · t, logo t = 20 meses. A alternativa 30 confundiria triplicar com gerar três vezes o capital em juros. Vale a comparação: dobrar levaria 10 meses, e cada capital adicional exige outros 10 meses no regime simples.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Um investimento de R$ 10.000,00 rendeu R$ 800,00 ao longo de um ano. A taxa anual de rentabilidade desse investimento foi de:",
    opcoes: ["0,8%", "80%", "12,5%", "8%", "10%"],
    correta: 3,
    explicacao:
      "A taxa é a razão entre rendimento e capital: 800/10 000 = 0,08 = 8% ao ano. A alternativa 0,8% erra a conversão decimal, e 12,5% inverte a divisão. Uma conferência rápida: 10% de 10 000 seriam R$ 1.000,00, então R$ 800,00 correspondem a um pouco menos que 10%.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Uma loja compra um produto por R$ 200,00 e o marca com lucro de 60% sobre o preço de custo. O preço de venda desse produto será de:",
    opcoes: ["R$ 320,00", "R$ 260,00", "R$ 500,00", "R$ 280,00", "R$ 360,00"],
    correta: 0,
    explicacao:
      "O preço de venda é 200 · 1,60 = R$ 320,00. A alternativa R$ 260,00 acrescenta 60 reais em vez de 60%. Note que o lucro de R$ 120,00 representa 60% do custo, mas apenas 37,5% do preço de venda — os dois percentuais descrevem o mesmo negócio com bases diferentes.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Em uma liquidação, todos os produtos de uma loja recebem 40% de desconto. Um item que custava R$ 90,00 passa a custar:",
    opcoes: ["R$ 36,00", "R$ 50,00", "R$ 45,00", "R$ 54,00", "R$ 60,00"],
    correta: 3,
    explicacao:
      "Com 40% de desconto, paga-se 60% do preço: 0,60 · 90 = R$ 54,00. A alternativa R$ 36,00 é o valor do desconto, e não o preço final. Calcular direto pelo fator complementar evita a subtração e reduz a chance de erro.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Para financiar a compra de um bem que custa R$ 5.000,00, uma financeira exige entrada correspondente a 30% do valor total. O valor dessa entrada é de:",
    opcoes: ["R$ 500,00", "R$ 3.500,00", "R$ 150,00", "R$ 1.000,00", "R$ 1.500,00"],
    correta: 4,
    explicacao:
      "A entrada é 0,30 · 5 000 = R$ 1.500,00, restando R$ 3.500,00 a financiar. A alternativa R$ 3.500,00 é justamente o saldo devedor, não a entrada. Quanto maior a entrada, menor o valor sobre o qual incidirão os juros do financiamento.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "O cheque especial de um banco cobra juros compostos de 8% ao mês. Uma dívida de R$ 1.000,00 nessa modalidade, após 2 meses sem pagamento, alcança o valor de:",
    opcoes: ["R$ 1.160,00", "R$ 1.166,40", "R$ 1.080,00", "R$ 1.168,00", "R$ 1.016,00"],
    correta: 1,
    explicacao:
      "O montante é 1 000 · (1,08)² = 1 000 · 1,1664 = R$ 1.166,40. A alternativa R$ 1.160,00 corresponde a juros simples. Em taxas altas como essa, a diferença entre os regimes aparece rápido: em 12 meses, a dívida chegaria a cerca de R$ 2.518,00 no composto.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "No regime de juros simples, o montante acumulado ao final de t períodos, a partir de um capital C e de uma taxa i por período, é dado pela expressão:",
    opcoes: [
      "M = C · i · t",
      "M = C · (1 + i)ᵗ",
      "M = C · (1 + i · t)",
      "M = C + i + t",
      "M = C · i ÷ t",
    ],
    correta: 2,
    explicacao:
      "Somando capital e juros: M = C + C · i · t = C · (1 + i · t). A primeira alternativa é a fórmula dos juros, não do montante. A segunda é a fórmula do montante no regime composto, em que a taxa aparece no expoente e não multiplicando o tempo — é essa posição que distingue os dois regimes.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Um trabalhador que recebia salário de R$ 3.000,00 obteve um reajuste de 8%. O novo valor do seu salário passou a ser de:",
    opcoes: ["R$ 3.080,00", "R$ 3.800,00", "R$ 3.300,00", "R$ 3.180,00", "R$ 3.240,00"],
    correta: 4,
    explicacao:
      "O novo salário é 3 000 · 1,08 = R$ 3.240,00, com aumento de R$ 240,00. A alternativa R$ 3.080,00 soma 80 reais em vez de 8%. Um cálculo mental útil: 10% de 3 000 são 300, então 8% ficam um pouco abaixo disso, em 240.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Uma aplicação de R$ 1.200,00 rendeu 5% em um único período. O montante resgatado ao final desse período foi de:",
    opcoes: ["R$ 1.205,00", "R$ 1.260,00", "R$ 1.250,00", "R$ 1.300,00", "R$ 1.060,00"],
    correta: 1,
    explicacao:
      "O montante é 1 200 · 1,05 = R$ 1.260,00, com rendimento de R$ 60,00. A alternativa R$ 1.205,00 soma 5 reais em vez de 5%. Em um único período, juros simples e compostos coincidem, então não é preciso saber qual regime foi usado.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Um lojista comprou um produto por R$ 120,00 e precisou vendê-lo por R$ 90,00. O prejuízo obtido nessa operação, calculado sobre o preço de custo, foi de:",
    opcoes: ["30%", "33,3%", "20%", "25%", "10%"],
    correta: 3,
    explicacao:
      "O prejuízo é de R$ 30,00 sobre um custo de R$ 120,00: 30/120 = 0,25 = 25%. A alternativa 33,3% usaria o preço de venda como base, e 30% confunde o valor em reais com o percentual. A base de cálculo continua sendo o custo, exatamente como no cálculo de lucro.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Sobre um serviço de R$ 500,00 incide um imposto correspondente a 18% do valor cobrado. O valor desse imposto é de:",
    opcoes: ["R$ 50,00", "R$ 80,00", "R$ 90,00", "R$ 18,00", "R$ 118,00"],
    correta: 2,
    explicacao:
      "O imposto é 0,18 · 500 = R$ 90,00, e o total com imposto seria R$ 590,00. A alternativa R$ 18,00 confunde o percentual com o valor absoluto. Um cálculo mental: 10% de 500 são 50 e 8% são 40, somando 90.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Em matemática financeira, compara-se o valor presente de uma quantia com o seu valor futuro. Em um cenário com juros positivos, é correto afirmar que o valor presente de uma quantia a ser recebida no futuro é:",
    opcoes: [
      "menor que o valor futuro, pois o dinheiro rende ao longo do tempo.",
      "maior que o valor futuro, pois há inflação no período.",
      "sempre igual ao valor futuro, independentemente do prazo.",
      "igual a zero, por não existir ainda.",
      "o dobro do valor futuro, por convenção contábil.",
    ],
    correta: 0,
    explicacao:
      "Se um valor aplicado hoje cresce com juros, é preciso menos dinheiro agora para alcançar determinada quantia no futuro. Por isso receber R$ 1.000,00 daqui a um ano vale menos que receber R$ 1.000,00 hoje. Essa é a base da comparação entre pagar à vista e parcelar.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Uma dívida de R$ 2.000,00 será quitada em 4 parcelas mensais iguais de R$ 600,00. O acréscimo total cobrado em relação ao valor original da dívida corresponde a:",
    opcoes: ["16,7%", "20%", "25%", "400%", "10%"],
    correta: 1,
    explicacao:
      "O total pago é 4 · 600 = R$ 2.400,00, ou seja, R$ 400,00 a mais. Sobre os R$ 2.000,00 originais, isso dá 400/2 000 = 20%. A alternativa 16,7% usaria o total pago como base de comparação. Em qualquer variação percentual, a base é o valor de partida.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "media",
    enunciado:
      "Um capital de R$ 5.000,00 foi aplicado a juros simples com taxa de 1% ao mês por um prazo de 24 meses. Os juros acumulados ao final desse prazo somaram:",
    opcoes: ["R$ 500,00", "R$ 600,00", "R$ 1.200,00", "R$ 2.400,00", "R$ 240,00"],
    correta: 2,
    explicacao:
      "Aplicando J = 5 000 · 0,01 · 24 = R$ 1.200,00. A alternativa R$ 600,00 consideraria apenas 12 meses. Como 1% de 5 000 são R$ 50,00 por mês, bastam 24 parcelas iguais de R$ 50,00 para confirmar o total.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Uma loja anuncia um desconto de 50% e, na hora do pagamento, concede mais 50% de desconto sobre o valor já reduzido. Em relação ao preço original, o cliente pagará:",
    opcoes: [
      "25% do preço original.",
      "nada, pois os descontos somam 100%.",
      "50% do preço original.",
      "75% do preço original.",
      "10% do preço original.",
    ],
    correta: 0,
    explicacao:
      "Os fatores se multiplicam: 0,50 · 0,50 = 0,25, ou seja, 25% do preço original. A ideia de que os descontos somam 100% e zeram o preço é a armadilha clássica: o segundo desconto incide sobre a metade que restou, tirando apenas 25% do valor inicial, não 50%.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "dificil",
    enunciado:
      "Um produto foi vendido por R$ 700,00, e o lucro obtido correspondeu a 40% do preço de venda. O valor do lucro nessa operação foi de:",
    opcoes: ["R$ 200,00", "R$ 300,00", "R$ 250,00", "R$ 280,00", "R$ 420,00"],
    correta: 3,
    explicacao:
      "Como o percentual incide sobre o preço de venda, o lucro é 0,40 · 700 = R$ 280,00, e o custo foi de R$ 420,00. A alternativa R$ 200,00 apareceria se os 40% incidissem sobre o custo. O enunciado precisa sempre ser lido com atenção para identificar a base do percentual.",
  },
  {
    materia: "matematica",
    tema: "Matemática financeira: juros e descontos",
    dificuldade: "facil",
    enunciado:
      "Uma aplicação rende 0,5% ao mês no regime de juros simples. Ao longo de um ano completo de aplicação, a taxa acumulada corresponde a:",
    opcoes: ["0,5%", "5%", "12%", "0,6%", "6%"],
    correta: 4,
    explicacao:
      "Em juros simples, basta multiplicar pelo número de períodos: 0,5% · 12 = 6% ao ano. A alternativa 12% confunde a taxa com a quantidade de meses. No regime composto o resultado seria ligeiramente maior, cerca de 6,17%, pelo efeito dos juros sobre juros.",
  },
];
