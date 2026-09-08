/* Leitura de gráficos e tabelas — parte A (25 questões).
   Os dados vêm escritos no enunciado, porque estas questões são só texto:
   nenhuma delas depende de uma imagem para ser resolvida.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Um gráfico de barras registrou as vendas mensais de uma loja, em unidades: janeiro 120, fevereiro 150, março 90 e abril 180. O mês em que a loja registrou o maior volume de vendas foi:",
    opcoes: ["janeiro", "fevereiro", "abril", "março", "os quatro meses empataram"],
    correta: 2,
    explicacao:
      "Comparando os quatro valores, o maior é 180, correspondente a abril. Em um gráfico de barras, esse mês teria a barra mais alta. A alternativa março apresenta o menor valor, 90 unidades — inverter máximo e mínimo é um deslize comum quando a leitura é feita às pressas.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Mantendo os mesmos dados de vendas mensais de uma loja — janeiro 120, fevereiro 150, março 90 e abril 180 unidades —, o total vendido nesses quatro meses foi de:",
    opcoes: ["440 unidades", "480 unidades", "500 unidades", "520 unidades", "540 unidades"],
    correta: 4,
    explicacao:
      "Somando os quatro valores: 120 + 150 + 90 + 180 = 540 unidades. A alternativa 440 esqueceria uma das parcelas. Em questões de leitura de dados, somar todas as categorias é o passo que responde a perguntas sobre o total do período.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Ainda com base nas vendas mensais de janeiro (120), fevereiro (150), março (90) e abril (180) unidades, a média mensal de vendas no período foi de:",
    opcoes: ["135 unidades", "120 unidades", "150 unidades", "90 unidades", "180 unidades"],
    correta: 0,
    explicacao:
      "A média é o total dividido pelo número de meses: 540/4 = 135 unidades. A alternativa 150 é o valor de fevereiro, não a média. Note que a média não coincide com nenhum dos meses observados — isso é normal, já que ela representa um valor de equilíbrio, não um dado real.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Uma loja vendeu 120 unidades em janeiro e 150 unidades em fevereiro. O crescimento percentual das vendas de janeiro para fevereiro foi de:",
    opcoes: ["30%", "20%", "15%", "25%", "12,5%"],
    correta: 3,
    explicacao:
      "A variação absoluta é 30 unidades sobre a base de janeiro: 30/120 = 0,25 = 25%. A alternativa 20% usaria fevereiro como base de comparação, e 30% confundiria a variação em unidades com o percentual. Em leitura de gráficos, a base de comparação é sempre o período anterior.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Em um gráfico de setores, cada categoria ocupa uma fatia proporcional à sua participação no total. Uma fatia que corresponde a um ângulo central de 90° representa:",
    opcoes: ["10% do total", "25% do total", "50% do total", "90% do total", "75% do total"],
    correta: 1,
    explicacao:
      "O círculo completo tem 360° e representa 100%, então 90/360 = 0,25 = 25%. A alternativa 90% confunde a medida do ângulo com o percentual. A regra prática é dividir o ângulo por 3,6 para obter o percentual diretamente.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Um gráfico de setores foi dividido em quatro categorias que representam exatamente a mesma parcela do total. O ângulo central correspondente a cada uma dessas categorias mede:",
    opcoes: ["45°", "90°", "120°", "60°", "360°"],
    correta: 1,
    explicacao:
      "Dividindo o círculo completo em quatro partes iguais: 360/4 = 90°. A alternativa 120° corresponderia a três categorias iguais, e 60° a seis. O ângulo de cada setor é sempre proporcional à participação da categoria no total.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Uma pesquisa foi realizada com 800 pessoas, e uma das categorias de resposta concentrou 30% do total de entrevistados. O número de pessoas nessa categoria foi de:",
    opcoes: ["240", "30", "270", "80", "300"],
    correta: 0,
    explicacao:
      "O cálculo é 0,30 · 800 = 240 pessoas. A alternativa 30 confunde o percentual com a quantidade de entrevistados. Converter percentuais em números absolutos é uma das operações mais cobradas na leitura de resultados de pesquisa.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Um pesquisador deseja representar visualmente a evolução da temperatura média de uma cidade ao longo dos doze meses do ano. O tipo de gráfico mais adequado para esse objetivo é:",
    opcoes: [
      "o gráfico de setores, que mostra partes de um todo.",
      "o pictograma, que usa figuras como unidade.",
      "o histograma de frequências acumuladas.",
      "o gráfico de linhas, que evidencia a variação ao longo do tempo.",
      "a tabela de dupla entrada com dois cruzamentos.",
    ],
    correta: 3,
    explicacao:
      "O gráfico de linhas liga pontos consecutivos e torna imediata a percepção de subidas, quedas e tendências — exatamente o que interessa em séries temporais. O gráfico de setores serve para composição em um único instante, e não para evolução, porque a soma dos meses não forma um todo com significado.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Um analista precisa comparar o faturamento de cinco filiais diferentes de uma empresa em um mesmo mês. O tipo de representação gráfica mais adequado para essa comparação é:",
    opcoes: [
      "o gráfico de linhas, que mostra tendências temporais.",
      "o gráfico de setores, que soma sempre 100%.",
      "o gráfico de barras, que compara categorias independentes.",
      "o diagrama de dispersão entre duas variáveis.",
      "a linha do tempo com marcos históricos.",
    ],
    correta: 2,
    explicacao:
      "Barras de alturas diferentes permitem comparar rapidamente grandezas de categorias distintas, que é o caso das filiais. O gráfico de linhas pressupõe uma ordem contínua entre os pontos, o que não existe entre filiais. O de setores serviria para mostrar a participação de cada filial no faturamento total, uma pergunta diferente.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Uma tabela de distribuição de frequências reúne 200 observações no total, e uma de suas classes concentra 50 observações. A frequência relativa dessa classe é de:",
    opcoes: ["50%", "20%", "2,5%", "12,5%", "25%"],
    correta: 4,
    explicacao:
      "A frequência relativa é 50/200 = 0,25 = 25%. A alternativa 50% confunde a frequência absoluta com o percentual. Em tabelas de frequência, a soma de todas as frequências relativas precisa fechar em 100%, o que serve como conferência.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "As temperaturas máximas registradas em uma cidade ao longo de cinco dias foram, em graus Celsius: segunda 22, terça 25, quarta 19, quinta 28 e sexta 21. A amplitude térmica dessa semana foi de:",
    opcoes: ["28 °C", "19 °C", "7 °C", "6 °C", "9 °C"],
    correta: 4,
    explicacao:
      "A amplitude é a diferença entre a maior e a menor temperatura: 28 − 19 = 9 °C. A alternativa 28 °C repete apenas o valor máximo. A amplitude mede o quanto os dados se espalham, mas depende só dos extremos e ignora o comportamento dos valores intermediários.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Com as temperaturas máximas de segunda (22 °C), terça (25 °C), quarta (19 °C), quinta (28 °C) e sexta (21 °C), a temperatura média dessa semana foi de:",
    opcoes: ["22 °C", "21 °C", "24 °C", "23 °C", "25 °C"],
    correta: 3,
    explicacao:
      "A soma é 22 + 25 + 19 + 28 + 21 = 115, e 115/5 = 23 °C. A alternativa 22 °C é a temperatura de segunda-feira, e não a média. Como a média não aparece entre os dados observados, ela funciona como um ponto de equilíbrio do conjunto.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Ainda com as temperaturas de 22 °C, 25 °C, 19 °C, 28 °C e 21 °C registradas em cinco dias, a mediana desse conjunto de dados é:",
    opcoes: ["21 °C", "23 °C", "22 °C", "25 °C", "19 °C"],
    correta: 2,
    explicacao:
      "Ordenando os valores: 19, 21, 22, 25 e 28. Com cinco dados, o termo central é o terceiro, que vale 22 °C. A alternativa 23 °C é a média, não a mediana. Ordenar antes de localizar o meio é indispensável — sem isso, a leitura direta da lista original daria 19 °C.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Considerando as temperaturas máximas de segunda (22 °C), terça (25 °C), quarta (19 °C), quinta (28 °C) e sexta (21 °C), o dia mais frio dessa semana foi:",
    opcoes: ["segunda-feira", "quarta-feira", "sexta-feira", "terça-feira", "quinta-feira"],
    correta: 1,
    explicacao:
      "O menor valor da série é 19 °C, registrado na quarta-feira. A alternativa quinta-feira corresponde justamente ao dia mais quente, com 28 °C. Em gráficos de linha, o dia mais frio aparece como o ponto mais baixo da curva.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Com temperaturas de 22 °C, 25 °C, 19 °C, 28 °C e 21 °C ao longo de cinco dias e média semanal de 23 °C, o número de dias em que a temperatura ficou acima da média foi:",
    opcoes: ["2 dias", "1 dia", "3 dias", "4 dias", "5 dias"],
    correta: 0,
    explicacao:
      "Comparando cada valor com 23 °C, apenas terça (25 °C) e quinta (28 °C) ficam acima: são 2 dias. A alternativa 3 incluiria segunda-feira, cujos 22 °C estão abaixo da média. Vale notar que a média não divide necessariamente o conjunto ao meio — quem faz isso é a mediana.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Em jornais e livros didáticos, é comum encontrar representações em que figuras repetidas indicam quantidades, como bonecos que representam grupos de pessoas. Esse tipo de representação é chamado de:",
    opcoes: [
      "pictograma",
      "histograma",
      "gráfico de dispersão",
      "polígono de frequências",
      "diagrama de caixa",
    ],
    correta: 0,
    explicacao:
      "O pictograma substitui barras por ícones, cada um valendo determinada quantidade indicada na legenda. É bastante intuitivo, mas exige cuidado: figuras cortadas pela metade e ícones de tamanhos diferentes podem distorcer a leitura. O histograma, por sua vez, representa distribuições de frequência com retângulos justapostos.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Certas tabelas organizam os dados de modo que as linhas correspondam a uma variável e as colunas a outra, permitindo ler o cruzamento das duas. Esse tipo de organização é chamado de:",
    opcoes: [
      "tabela de frequências simples.",
      "rol de dados brutos.",
      "tabela de dupla entrada.",
      "tabela de frequência acumulada.",
      "série cronológica.",
    ],
    correta: 2,
    explicacao:
      "Na tabela de dupla entrada, cada célula informa quantos casos combinam uma categoria da linha com uma categoria da coluna — por exemplo, quantos estudantes de determinado ano preferem certa disciplina. A tabela de frequências simples trabalha com uma única variável, e o rol é apenas a lista ordenada dos dados.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "dificil",
    enunciado:
      "Um gráfico de barras foi construído com o eixo vertical começando em um valor diferente de zero, e não na origem. O principal efeito dessa escolha sobre a leitura do gráfico é:",
    opcoes: [
      "tornar impossível identificar qual categoria tem o maior valor.",
      "exagerar visualmente as diferenças entre as barras.",
      "reduzir visualmente as diferenças entre as barras.",
      "inverter a ordem das categorias apresentadas.",
      "alterar os valores numéricos dos próprios dados.",
    ],
    correta: 1,
    explicacao:
      "Cortando a base do eixo, uma diferença pequena passa a ocupar boa parte da altura visível, e barras de valores próximos parecem muito distintas. Os números continuam corretos — o que engana é a proporção visual. Conferir onde o eixo começa é um dos primeiros cuidados na leitura crítica de qualquer gráfico.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Três cidades tiveram suas populações registradas da seguinte forma: cidade A com 1.200 habitantes, cidade B com 800 e cidade C com 2.000. A participação da cidade C no total das três populações é de:",
    opcoes: ["20%", "30%", "40%", "45%", "50%"],
    correta: 4,
    explicacao:
      "O total é 1 200 + 800 + 2 000 = 4 000 habitantes, e 2 000/4 000 = 0,5 = 50%. A alternativa 40% corresponderia a 1 600 habitantes. Em um gráfico de setores desses dados, a cidade C ocuparia exatamente metade do círculo, ou 180°.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Ainda considerando as populações registradas de 1.200 habitantes na cidade A e 800 habitantes na cidade B, a razão entre a população de A e a população de B é igual a:",
    opcoes: ["0,67", "2", "1,2", "1,5", "3"],
    correta: 3,
    explicacao:
      "A razão é 1 200/800 = 1,5, ou seja, A tem uma vez e meia a população de B. A alternativa 0,67 é a razão inversa, de B para A. A ordem em que as grandezas aparecem no enunciado define qual vai no numerador.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Um gráfico de setores é escolhido para representar determinado conjunto de dados. A informação que esse tipo de gráfico comunica melhor é:",
    opcoes: [
      "a evolução de uma variável ao longo de vários anos.",
      "a correlação entre duas variáveis numéricas.",
      "a frequência acumulada de classes ordenadas.",
      "a participação de cada categoria no total.",
      "a dispersão dos dados em torno da média.",
    ],
    correta: 3,
    explicacao:
      "O círculo representa o todo, e cada fatia mostra que fração desse todo cabe a cada categoria — por isso os percentuais precisam somar 100%. Evolução temporal pede gráfico de linhas, e correlação entre variáveis pede diagrama de dispersão. Usar setores para séries temporais é um erro frequente de apresentação.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Em uma tabela de distribuição de frequências, além da frequência de cada classe, costuma-se apresentar uma coluna de frequência acumulada. O valor registrado nessa coluna corresponde:",
    opcoes: [
      "apenas à frequência da própria classe.",
      "à soma da frequência da classe com a das classes anteriores.",
      "à média das frequências de todas as classes.",
      "à diferença entre a maior e a menor frequência.",
      "ao total de classes existentes na tabela.",
    ],
    correta: 1,
    explicacao:
      "A frequência acumulada informa quantas observações se encontram até determinada classe, somando tudo o que veio antes. É ela que responde a perguntas como 'quantos estudantes tiraram nota até 6'. Na última classe, a frequência acumulada precisa ser igual ao total de observações.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "O preço de um produto foi registrado ao longo de quatro anos consecutivos, em reais: 20, 24, 30 e 36. O aumento percentual acumulado entre o primeiro e o último ano foi de:",
    opcoes: ["16%", "20%", "60%", "100%", "80%"],
    correta: 4,
    explicacao:
      "A variação absoluta é 36 − 20 = 16 reais, sobre a base inicial de 20: 16/20 = 0,8 = 80%. A alternativa 16% confunde a variação em reais com o percentual. Para variações acumuladas, compara-se sempre o valor final diretamente com o inicial, sem somar as variações ano a ano.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Mantendo a série de preços de um produto ao longo de quatro anos — 20, 24, 30 e 36 reais —, o aumento percentual registrado do primeiro para o segundo ano foi de:",
    opcoes: ["20%", "24%", "4%", "16%", "25%"],
    correta: 0,
    explicacao:
      "A variação foi de 4 reais sobre a base de 20: 4/20 = 0,2 = 20%. A alternativa 4% confunde o valor em reais com o percentual, e 25% usaria o preço final como base. Cada variação anual precisa ser calculada sobre o preço do ano anterior.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "dificil",
    enunciado:
      "Ainda com os preços de 20, 24, 30 e 36 reais em quatro anos consecutivos, o intervalo em que ocorreu o maior aumento percentual foi:",
    opcoes: [
      "do primeiro para o segundo ano.",
      "do terceiro para o quarto ano.",
      "do segundo para o terceiro ano.",
      "os três aumentos foram percentualmente iguais.",
      "não é possível comparar sem os valores absolutos.",
    ],
    correta: 2,
    explicacao:
      "Os aumentos são 4/20 = 20%, 6/24 = 25% e 6/30 = 20%. O maior é o do segundo para o terceiro ano. Note que a variação absoluta de 6 reais aparece duas vezes, mas gera percentuais diferentes por incidir sobre bases distintas — é justamente aí que a leitura apressada erra.",
  },
];
