/* Estatística: média, mediana e desvio — parte B (25 questões).
   Dados agrupados, frequências relativa e acumulada, quartis, coeficiente de
   variação, tipos de variável e leitura crítica de indicadores.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Em uma turma de 10 estudantes, 5 tiraram nota 6,0, três tiraram 8,0 e dois tiraram 10,0. A média aritmética das notas dessa turma é:",
    opcoes: ["8,0", "7,4", "7,0", "6,8", "7,5"],
    correta: 1,
    explicacao:
      "Com dados agrupados por frequência, cada nota entra multiplicada pelo número de vezes que aparece: (5 · 6 + 3 · 8 + 2 · 10)/10 = (30 + 24 + 20)/10 = 74/10 = 7,4. A alternativa 8,0 é a média simples entre 6, 8 e 10, que ignora quantos alunos tiraram cada nota. Como a maioria ficou com 6,0, a média precisa ficar puxada para baixo.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Uma distribuição de frequências reúne 20 observações no total, e uma de suas classes contém 5 observações. A frequência relativa dessa classe é de:",
    opcoes: ["5%", "20%", "50%", "2,5%", "25%"],
    correta: 4,
    explicacao:
      "A frequência relativa é a razão entre a frequência da classe e o total: 5/20 = 0,25 = 25%. A alternativa 5% confunde a frequência absoluta com o percentual, e 20% usa o total como se fosse a resposta. A soma de todas as frequências relativas de uma distribuição precisa dar sempre 100% — é a conferência mais simples de uma tabela.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Um conjunto de dados apresenta média igual a 15 e desvio padrão igual a 3. O coeficiente de variação desse conjunto, que expressa o desvio padrão como percentual da média, é de:",
    opcoes: ["5%", "45%", "20%", "3%", "15%"],
    correta: 2,
    explicacao:
      "O coeficiente de variação é (desvio padrão / média) · 100 = (3/15) · 100 = 20%. A alternativa 5% inverte a razão, dividindo a média pelo desvio. Esse índice existe para permitir comparar a dispersão de conjuntos com unidades ou escalas diferentes: um desvio de 3 é grande para uma média de 15, mas seria pequeno para uma média de 300.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Ao estudar a distribuição dos salários de uma cidade, um pesquisador constatou que a média é consideravelmente maior que a mediana. Essa constatação indica que a distribuição é:",
    opcoes: [
      "assimétrica à direita, com salários muito altos puxando a média para cima.",
      "perfeitamente simétrica em torno do valor central.",
      "assimétrica à esquerda, com salários muito baixos puxando a média para baixo.",
      "necessariamente bimodal, com dois grupos distintos.",
      "isenta de dispersão, com todos os salários próximos.",
    ],
    correta: 0,
    explicacao:
      "A mediana marca o valor que divide a população ao meio, e a média incorpora a magnitude de todos os valores. Quando poucos salários muito altos elevam a média sem deslocar a mediana, a cauda da distribuição se estende para a direita. É exatamente o que ocorre com renda no Brasil, e por isso a mediana costuma descrever melhor a situação típica que a média.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que a variância do conjunto de dados 2, 4 e 6 é igual a 8/3, o desvio padrão desse mesmo conjunto é aproximadamente igual a:",
    opcoes: ["2,67", "8", "2", "1,63", "4"],
    correta: 3,
    explicacao:
      "O desvio padrão é a raiz quadrada da variância: √(8/3) = √2,67 ≈ 1,63. A alternativa 2,67 repete a própria variância sem extrair a raiz — é o erro mais comum. Vale notar que o desvio padrão é sempre menor que a variância quando esta é maior que 1, e maior quando a variância fica entre 0 e 1.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Para estimar a opinião dos moradores de um bairro com 5.000 habitantes, um instituto entrevistou 50 pessoas escolhidas aleatoriamente. A amostra entrevistada corresponde, em relação à população, a:",
    opcoes: ["1%", "10%", "0,1%", "5%", "100%"],
    correta: 0,
    explicacao:
      "A fração amostral é 50/5 000 = 0,01 = 1%. A alternativa 10% aparece em quem simplifica errado, esquecendo um zero. Em estatística, população é o conjunto completo que se quer estudar e amostra é a parte efetivamente observada; a qualidade da estimativa depende mais da forma de sortear a amostra do que do percentual que ela representa.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Todos os valores de um conjunto de dados são multiplicados por 2. Em relação ao conjunto original, a média aritmética do novo conjunto:",
    opcoes: [
      "permanece exatamente a mesma.",
      "aumenta em 2 unidades.",
      "fica multiplicada por 2.",
      "fica dividida por 2.",
      "fica multiplicada por 4.",
    ],
    correta: 2,
    explicacao:
      "Multiplicar cada dado por uma constante multiplica a soma por essa constante, e como a quantidade de dados não muda, a média acompanha: também fica multiplicada por 2. A alternativa que fala em somar 2 unidades descreve o efeito de um acréscimo, não de uma multiplicação. O desvio padrão também dobraria nesse caso, ao contrário do que ocorre quando se soma uma constante.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Um jornal precisa divulgar um valor que represente o rendimento típico de uma cidade em que existem alguns poucos rendimentos extremamente elevados. A medida mais adequada para essa finalidade é:",
    opcoes: [
      "a média aritmética, por usar todos os dados.",
      "a amplitude, por considerar os extremos.",
      "a variância, por medir o espalhamento.",
      "o desvio padrão, por estar na unidade dos dados.",
      "a mediana, por não ser afetada por valores extremos.",
    ],
    correta: 4,
    explicacao:
      "A mediana depende apenas da posição central dos dados ordenados, de modo que rendimentos muito altos não a deslocam. A média, ao contrário, incorpora a magnitude desses valores e acaba descrevendo uma situação que quase ninguém vive. Amplitude, variância e desvio padrão são medidas de dispersão: informam sobre o espalhamento, não sobre o valor típico.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Antes de calcular a mediana de um conjunto de dados numéricos, é indispensável realizar um procedimento específico com esses dados. Esse procedimento consiste em:",
    opcoes: [
      "somar todos os valores do conjunto.",
      "eliminar os valores que se repetem.",
      "calcular previamente a média aritmética.",
      "organizar os valores em ordem crescente ou decrescente.",
      "descartar o maior e o menor valor observados.",
    ],
    correta: 3,
    explicacao:
      "A mediana é definida pela posição central do conjunto ordenado, o chamado rol. Sem ordenar, o valor do meio da lista não tem significado estatístico. Eliminar repetições seria um erro grave: cada observação conta, mesmo quando idêntica a outra. Já a média não exige ordenação, porque depende apenas da soma.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "A média aritmética de três números é 12. Um desses números recebe um acréscimo de 6 unidades, enquanto os outros dois permanecem inalterados. A nova média dos três números passa a ser:",
    opcoes: ["18", "14", "12", "13", "16"],
    correta: 1,
    explicacao:
      "A soma original é 12 · 3 = 36; com o acréscimo, passa a 42, e 42/3 = 14. A alternativa 18 soma as 6 unidades diretamente à média, esquecendo que o acréscimo se distribui entre os três valores. A regra geral: um acréscimo de k unidades em um único dado eleva a média em k dividido pelo número de dados.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Em uma prova composta por 40 questões, um candidato acertou 28. O percentual de acertos obtido por esse candidato foi de:",
    opcoes: ["28%", "60%", "75%", "70%", "80%"],
    correta: 3,
    explicacao:
      "O percentual é 28/40 = 0,7 = 70%. A alternativa 28% confunde o número de acertos com a porcentagem, e 75% corresponderia a 30 acertos. Uma conferência mental: 50% de 40 são 20 e 75% são 30, então 28 tem de cair entre esses dois percentuais, e mais perto de 75% do que de 50%.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Em uma distribuição de dados, o primeiro quartil vale 10 e o terceiro quartil vale 22. A amplitude interquartil dessa distribuição é igual a:",
    opcoes: ["32", "12", "16", "22", "10"],
    correta: 1,
    explicacao:
      "A amplitude interquartil é a diferença entre o terceiro e o primeiro quartis: 22 − 10 = 12. Ela mede o intervalo ocupado pelos 50% centrais dos dados e, por descartar as caudas, resiste a valores extremos muito melhor que a amplitude total. A alternativa 32 soma os quartis em vez de subtrair.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Um instituto oficial realiza um levantamento em que todos os domicílios de um país são visitados e registrados, sem qualquer sorteio de participantes. Esse tipo de levantamento é chamado de:",
    opcoes: [
      "censo, porque abrange toda a população estudada.",
      "amostragem aleatória simples.",
      "amostragem estratificada por região.",
      "experimento controlado com grupo de comparação.",
      "estimativa por intervalo de confiança.",
    ],
    correta: 0,
    explicacao:
      "Quando todos os elementos da população são observados, o levantamento é um censo; quando apenas uma parte é sorteada, trata-se de uma pesquisa por amostragem. O censo elimina o erro amostral, mas custa muito mais caro e demora mais — razão pela qual a maioria das pesquisas de opinião trabalha com amostras.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "As variáveis estatísticas classificam-se em qualitativas e quantitativas. Entre as opções a seguir, aquela que corresponde a uma variável qualitativa nominal é:",
    opcoes: [
      "a altura dos estudantes, em metros.",
      "o número de filhos por família.",
      "a cor dos olhos dos entrevistados.",
      "o salário mensal dos trabalhadores.",
      "a idade dos participantes, em anos.",
    ],
    correta: 2,
    explicacao:
      "Cor dos olhos expressa uma qualidade sem ordem natural entre as categorias, o que caracteriza a variável qualitativa nominal. Altura, salário e idade são quantitativas contínuas, e número de filhos é quantitativa discreta. Uma variável qualitativa seria ordinal se as categorias tivessem hierarquia, como escolaridade ou grau de satisfação.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Uma variável quantitativa é discreta quando assume apenas valores isolados, geralmente resultantes de contagem. Entre as opções a seguir, a que corresponde a uma variável quantitativa discreta é:",
    opcoes: [
      "o peso de recém-nascidos, em quilogramas.",
      "a altura de adultos, em centímetros.",
      "o tempo gasto em uma prova, em minutos.",
      "a temperatura registrada ao meio-dia.",
      "o número de filhos de cada família.",
    ],
    correta: 4,
    explicacao:
      "Número de filhos resulta de contagem e só assume valores inteiros: não existe família com 2,3 filhos. Peso, altura, tempo e temperatura resultam de medição e podem assumir qualquer valor dentro de um intervalo, o que as torna contínuas. A distinção importa porque orienta o tipo de gráfico e de tratamento estatístico adequado a cada caso.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Quatro estudantes obtiveram exatamente a mesma nota em uma avaliação: todos tiraram 8,0. O desvio padrão desse conjunto de notas é igual a:",
    opcoes: ["8", "4", "0", "1", "2"],
    correta: 2,
    explicacao:
      "Se todos os valores são iguais, cada um coincide com a média e nenhum desvio é diferente de zero; a soma dos quadrados dos desvios é zero e o desvio padrão também. A alternativa 8 confunde o valor da nota com a medida de dispersão. Um desvio padrão nulo é o caso extremo de homogeneidade absoluta.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Um grupo de 6 números tem média aritmética igual a 5, e outro grupo de 4 números tem média igual a 10. Reunindo todos os 10 números em um único conjunto, a média desse conjunto é:",
    opcoes: ["7,5", "6", "8", "7", "6,5"],
    correta: 3,
    explicacao:
      "As somas são 6 · 5 = 30 e 4 · 10 = 40, totalizando 70 em 10 números: 70/10 = 7. A alternativa 7,5 é a média simples entre 5 e 10, que só valeria se os dois grupos tivessem o mesmo tamanho. Como o grupo de média menor tem mais elementos, a média combinada precisa ficar abaixo do ponto médio entre 5 e 10.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Em uma tabela de distribuição de frequências, as três primeiras classes apresentam frequências relativas de 20%, 30% e 25%, nessa ordem. A frequência relativa acumulada até a terceira classe é de:",
    opcoes: ["50%", "75%", "25%", "30%", "100%"],
    correta: 1,
    explicacao:
      "A frequência acumulada soma a classe atual com todas as anteriores: 20% + 30% + 25% = 75%. A alternativa 25% considera só a terceira classe, confundindo frequência simples com acumulada. Esse tipo de leitura responde diretamente a perguntas como 'que percentual dos dados está abaixo de determinado valor'.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Um conjunto de dados recebe a inclusão de um valor muito distante dos demais, chamado valor discrepante. Sobre o efeito dessa inclusão nas medidas estatísticas, é correto afirmar que:",
    opcoes: [
      "a mediana é a medida mais afetada pela inclusão.",
      "nenhuma medida é afetada por um único valor.",
      "a moda necessariamente passa a ser esse valor.",
      "todas as medidas são afetadas na mesma intensidade.",
      "o desvio padrão é mais afetado que a mediana.",
    ],
    correta: 4,
    explicacao:
      "O desvio padrão eleva ao quadrado a distância de cada dado até a média, então um valor muito afastado contribui de forma desproporcional para a dispersão. A mediana, por depender só da posição central, costuma se mover pouco ou nada. A moda só mudaria se o novo valor passasse a ser o mais frequente, o que não ocorre com uma única inclusão.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Os quartis dividem um conjunto de dados ordenados em quatro partes com quantidades iguais de observações. O primeiro quartil de uma distribuição é o valor abaixo do qual se encontram:",
    opcoes: [
      "25% das observações.",
      "50% das observações.",
      "75% das observações.",
      "10% das observações.",
      "1% das observações.",
    ],
    correta: 0,
    explicacao:
      "O primeiro quartil marca o fim do primeiro quarto dos dados ordenados, deixando 25% abaixo dele. O segundo quartil deixa 50% e coincide com a mediana; o terceiro deixa 75%. A alternativa de 50% descreve a mediana, e a de 10% descreveria o primeiro decil, outra medida de posição.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Uma loja vendeu 10, 20 e 30 unidades de um produto em três meses consecutivos. A média mensal de vendas nesse período foi de:",
    opcoes: ["10 unidades", "30 unidades", "25 unidades", "15 unidades", "20 unidades"],
    correta: 4,
    explicacao:
      "A média é (10 + 20 + 30)/3 = 60/3 = 20 unidades. A alternativa 30 toma o maior valor como se fosse a média, e 25 seria a média apenas dos dois últimos meses. Como os valores estão igualmente espaçados, o resultado coincide com o valor do meio — o que serve de conferência imediata.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Considere o conjunto de dados formado pelos valores 1, 3, 5, 7, 9 e 11, dispostos em ordem crescente. A mediana desse conjunto é igual a:",
    opcoes: ["6", "5", "7", "5,5", "4"],
    correta: 0,
    explicacao:
      "São seis valores, quantidade par, então a mediana é a média dos dois centrais, o terceiro e o quarto: (5 + 7)/2 = 6. As alternativas 5 e 7 escolhem apenas um dos termos centrais. Aqui a mediana coincide com a média aritmética do conjunto, o que era esperado por se tratar de uma sequência simétrica.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Em uma distribuição de dados perfeitamente simétrica e com uma única moda, a relação entre as três medidas de tendência central é tal que:",
    opcoes: [
      "a média é maior que a mediana, que é maior que a moda.",
      "a moda é maior que a média, que é maior que a mediana.",
      "a mediana é sempre o dobro da média.",
      "média, mediana e moda coincidem no mesmo valor.",
      "a média e a moda coincidem, mas a mediana difere.",
    ],
    correta: 3,
    explicacao:
      "Em uma distribuição simétrica e unimodal, o pico da distribuição está no centro, e esse centro é ao mesmo tempo o valor mais frequente, o que divide os dados ao meio e o ponto de equilíbrio da soma. A primeira alternativa descreve uma assimetria à direita, típica de dados de renda, e a segunda, uma assimetria à esquerda.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "O desvio padrão de um conjunto de dados é igual a 4. Sabendo da relação entre essas duas medidas de dispersão, a variância desse mesmo conjunto é igual a:",
    opcoes: ["2", "16", "4", "8", "0,25"],
    correta: 1,
    explicacao:
      "A variância é o quadrado do desvio padrão: 4² = 16. A alternativa 2 extrai a raiz em vez de elevar ao quadrado, invertendo a relação. A alternativa 8 dobraria o valor, operação que não corresponde a nenhuma das definições. O caminho é sempre o mesmo: da variância para o desvio, extrai-se a raiz; do desvio para a variância, eleva-se ao quadrado.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Uma escola aplicou uma avaliação a 100 estudantes e obteve média geral igual a 6,0. A soma de todas as notas obtidas nessa avaliação é:",
    opcoes: ["106", "60", "600", "6 000", "16"],
    correta: 2,
    explicacao:
      "Da definição de média, soma = média × quantidade = 6 · 100 = 600. A alternativa 106 soma média e quantidade em vez de multiplicar, e 6 000 multiplica por 1 000. Como as notas costumam variar de 0 a 10, o total de 600 pontos distribuídos entre 100 estudantes é coerente com a escala.",
  },
];
