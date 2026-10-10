/* Variância e desvio padrão (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__variancia-e-desvio-padrao.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__variancia-e-desvio-padrao.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Considerando os valores 2, 4 e 6 como toda a população, qual é a variância populacional?",
    opcoes: [
      "8",
      "8/3",
      "4",
      "4/3",
      "√(8/3)",
    ],
    correta: 1,
    explicacao:
      "A média é 4, e os desvios em relação a ela são −2, 0 e 2. Os quadrados somam 4 + 0 + 4 = 8, e a variância populacional divide pela quantidade de dados: 8/3 ≈ 2,67.\n\n8 é a soma dos quadrados dos desvios, sem dividir. 4 divide por n − 1 = 2: é a variância amostral, usada quando os dados são uma amostra. 4/3 é o desvio médio absoluto, (2 + 0 + 2)/3, outra medida. E √(8/3) é o desvio padrão, a raiz da variância.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Qual é o desvio padrão do conjunto de dados 5, 5, 5, 5?",
    opcoes: [
      "5",
      "1",
      "20",
      "Não está definido",
      "0",
    ],
    correta: 4,
    explicacao:
      "Todos os valores são iguais à média, 5, e todos os desvios são zero. A variância, média dos quadrados dos desvios, é zero, e o desvio padrão também. Desvio padrão zero significa ausência total de dispersão.\n\n5 é a média, e não uma medida de dispersão. 1 supõe um valor mínimo para o desvio, que não existe. 20 é a soma dos valores. E o desvio padrão está definido, sim: vale zero, o menor valor possível.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Qual é a amplitude total do conjunto 3, 8, 12, 7 e 15?",
    opcoes: [
      "15",
      "9",
      "3",
      "45",
      "12",
    ],
    correta: 4,
    explicacao:
      "A amplitude é a diferença entre o maior e o menor valor: 15 − 3 = 12. É a medida de dispersão mais simples, mas depende só dos dois extremos e ignora como os outros dados se espalham.\n\n15 é o maior valor, sem subtrair o menor. 9 é a média, 45/5. 3 é o menor valor. E 45 é a soma dos valores. Nenhuma dessas quatro mede o espalhamento dos dados.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "A variância de um conjunto de medidas é 49. Qual é o desvio padrão?",
    opcoes: [
      "49",
      "24,5",
      "2401",
      "7",
      "√7",
    ],
    correta: 3,
    explicacao:
      "O desvio padrão é a raiz quadrada da variância: √49 = 7. A raiz devolve a medida à mesma unidade dos dados, o que torna o desvio padrão mais fácil de interpretar que a variância.\n\n49 é a própria variância. 24,5 divide por 2 em vez de extrair a raiz. 2401 eleva ao quadrado em vez de extrair a raiz. E √7 extrai a raiz do número errado. Variância e desvio padrão carregam a mesma informação, em escalas diferentes.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Somando 10 a todos os valores de um conjunto de dados, o que acontece com o desvio padrão?",
    opcoes: [
      "Aumenta 10",
      "Aumenta 100",
      "Não muda",
      "Fica 10 vezes maior",
      "Zera",
    ],
    correta: 2,
    explicacao:
      "Somar uma constante desloca todos os valores e também a média, pelo mesmo tanto. Os desvios em relação à média não mudam, e o desvio padrão continua o mesmo. A dispersão não depende de onde o conjunto está, só de como ele se espalha.\n\nAumentar 10 confunde o efeito sobre a média com o efeito sobre a dispersão. Aumentar 100 confunde com um efeito ao quadrado. Ficar 10 vezes maior seria o efeito de multiplicar os valores por 10. E zerar exigiria que todos os valores ficassem iguais.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Multiplicando todos os valores de um conjunto por 3, o que acontece com a variância?",
    opcoes: [
      "Fica 3 vezes maior",
      "Fica 9 vezes maior",
      "Não muda",
      "Aumenta 3",
      "Aumenta 9",
    ],
    correta: 1,
    explicacao:
      "Multiplicar por 3 multiplica cada desvio por 3, e cada desvio ao quadrado por 9. A variância, média desses quadrados, fica 9 vezes maior. O desvio padrão, raiz da variância, fica 3 vezes maior.\n\n3 vezes maior é o efeito sobre o desvio padrão, e não sobre a variância. Não muda seria o efeito de somar uma constante. E aumentar 3 ou 9 soma em vez de multiplicar: o efeito de uma mudança de escala é proporcional ao tamanho da variância.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Os valores 1, 3 e 5 formam uma amostra. Qual é a variância amostral?",
    opcoes: [
      "8/3",
      "8",
      "2",
      "3",
      "4",
    ],
    correta: 4,
    explicacao:
      "A média é 3, e os desvios são −2, 0 e 2, com quadrados somando 8. Numa amostra, divide-se por n − 1 = 2: a variância amostral é 8/2 = 4. O n − 1 corrige a tendência de a amostra subestimar a dispersão da população.\n\n8/3 divide por n: é a variância populacional. 8 é a soma dos quadrados dos desvios, sem dividir. 2 é o desvio padrão amostral, a raiz de 4. E 3 é a média.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Um conjunto tem média 50 e desvio padrão 5. Qual é o coeficiente de variação?",
    opcoes: [
      "250%",
      "10%",
      "5%",
      "45%",
      "0,1%",
    ],
    correta: 1,
    explicacao:
      "O coeficiente de variação é o desvio padrão dividido pela média: 5/50 = 0,10 = 10%. Ele mede a dispersão relativa, sem unidade, e permite comparar conjuntos com médias ou unidades diferentes.\n\n250% multiplica em vez de dividir. 5% é o próprio desvio padrão lido como porcentagem. 45% subtrai o desvio da média. E 0,1% erra a conversão de 0,1 para porcentagem.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Os cinco conjuntos a seguir têm todos média 5. Qual deles tem o maior desvio padrão?",
    opcoes: [
      "1, 5, 9",
      "4, 5, 6",
      "5, 5, 5",
      "3, 5, 7",
      "2, 5, 8",
    ],
    correta: 0,
    explicacao:
      "Com a mesma média, o desvio padrão cresce com a distância dos valores até ela. Em 1, 5, 9, os extremos estão a 4 unidades da média; nos outros, a 1, 0, 2 e 3 unidades. O maior desvio é o de 1, 5, 9, com variância populacional 32/3 ≈ 10,7.\n\n4, 5, 6 é o mais concentrado entre os que variam. 5, 5, 5 não tem dispersão nenhuma. 3, 5, 7 e 2, 5, 8 ficam no meio do caminho, com variâncias 8/3 e 6.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "As alturas de um grupo foram medidas em centímetros. Em que unidade fica a variância dessas alturas?",
    opcoes: [
      "cm",
      "cm²",
      "Adimensional",
      "cm³",
      "m",
    ],
    correta: 1,
    explicacao:
      "A variância é a média dos quadrados dos desvios, e cada desvio está em centímetros: o quadrado fica em cm². Por isso se usa tanto o desvio padrão, a raiz da variância, que volta a ficar em centímetros.\n\ncm é a unidade do desvio padrão, e não da variância. Adimensional é o coeficiente de variação, que divide o desvio pela média. cm³ supõe um cubo, que não aparece na fórmula. E m troca de unidade sem motivo.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Considerando os dados 1, 3, 3, 3, 4, 4, 6 e 8 como uma população, qual é o desvio padrão?",
    opcoes: [
      "4",
      "√2",
      "2",
      "32",
      "1",
    ],
    correta: 2,
    explicacao:
      "A média é 32/8 = 4. Os desvios são −3, −1, −1, −1, 0, 0, 2 e 4, com quadrados 9, 1, 1, 1, 0, 0, 4 e 16, somando 32. A variância populacional é 32/8 = 4, e o desvio padrão, √4 = 2.\n\n4 é a variância, e também a média, sem extrair a raiz. √2 extrai a raiz duas vezes. 32 é a soma dos quadrados dos desvios. E 1 é um palpite pelo tamanho dos desvios mais comuns.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "facil",
    enunciado:
      "Qual medida de dispersão depende apenas do maior e do menor valor do conjunto?",
    opcoes: [
      "A variância",
      "O desvio padrão",
      "O coeficiente de variação",
      "A amplitude",
      "O desvio médio",
    ],
    correta: 3,
    explicacao:
      "A amplitude é a diferença entre o maior e o menor valor, e nenhum outro dado entra na conta. Mudando os valores intermediários, sem mexer nos extremos, a amplitude fica igual, enquanto as demais medidas mudam.\n\nA variância e o desvio padrão usam todos os desvios em relação à média. O coeficiente de variação divide o desvio padrão pela média, e herda essa dependência. E o desvio médio também usa a distância de cada valor até a média.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Na tabela em que os valores 1, 2 e 3 têm frequências 2, 3 e 5, qual é a variância populacional?",
    opcoes: [
      "6,1",
      "≈ 0,678",
      "≈ 0,781",
      "2,3",
      "0,61",
    ],
    correta: 4,
    explicacao:
      "São 10 observações, com média (1 · 2 + 2 · 3 + 3 · 5)/10 = 23/10 = 2,3. Os desvios ao quadrado pesam pelas frequências: 2 · (1,3)² + 3 · (0,3)² + 5 · (0,7)² = 3,38 + 0,27 + 2,45 = 6,1. A variância populacional é 6,1/10 = 0,61.\n\n6,1 é a soma dos quadrados, sem dividir. 0,678 divide por 9, como numa amostra. 0,781 é o desvio padrão, √0,61. E 2,3 é a média.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Pela fórmula computacional, variância = média dos quadrados − quadrado da média, qual é a variância populacional de 2, 3 e 7?",
    opcoes: [
      "14/3",
      "62/3",
      "4",
      "7",
      "14",
    ],
    correta: 0,
    explicacao:
      "A média dos quadrados é (4 + 9 + 49)/3 = 62/3, e o quadrado da média é 4² = 16. A variância é 62/3 − 16 = 62/3 − 48/3 = 14/3 ≈ 4,67. Pelos desvios, −2, −1 e 3, a soma dos quadrados é 14, e 14/3 confere.\n\n62/3 é a média dos quadrados, sem subtrair. 4 é a média. 7 é a variância amostral, 14/2. E 14 é a soma dos quadrados dos desvios. A fórmula computacional evita calcular cada desvio, o que ajuda com muitos dados.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Quatro números têm média 10 e variância populacional 4. Qual é a soma dos seus quadrados?",
    opcoes: [
      "400",
      "16",
      "416",
      "104",
      "440",
    ],
    correta: 2,
    explicacao:
      "Pela fórmula computacional, variância = média dos quadrados − (média)², e então a média dos quadrados é 4 + 10² = 104. A soma dos quadrados é 4 · 104 = 416. Por exemplo, 8, 8, 12 e 12 têm média 10, variância 4 e quadrados somando 416.\n\n400 é 4 · 10², esquecendo a variância. 16 é 4 · 4, esquecendo a média. 104 é a média dos quadrados, sem multiplicar por 4. E 440 soma 4 · 10 à conta, sem motivo.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Numa prova com média 70 e desvio padrão 5, um aluno tirou 80. Qual é o escore padronizado z dessa nota?",
    opcoes: [
      "10",
      "0,5",
      "−2",
      "2",
      "16",
    ],
    correta: 3,
    explicacao:
      "O escore z mede quantos desvios padrão a nota está acima da média: z = (80 − 70)/5 = 2. Serve para comparar desempenhos em provas com médias e dispersões diferentes.\n\n10 é a diferença para a média, sem dividir pelo desvio. 0,5 inverte a divisão: 5/10. −2 erra o sinal: a nota está acima da média. E 16 é a nota dividida pelo desvio, 80/5, sem descontar a média.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "A turma A tem média 60 e desvio padrão 12; a turma B, média 80 e o mesmo desvio padrão. Qual turma é relativamente mais homogênea?",
    opcoes: [
      "B, com CV de 15%",
      "A, com CV de 20%",
      "As duas igualmente, pois têm o mesmo desvio",
      "A, porque tem média menor",
      "Não é possível comparar",
    ],
    correta: 0,
    explicacao:
      "Para comparar dispersões com médias diferentes, usa-se o coeficiente de variação: CV_A = 12/60 = 20% e CV_B = 12/80 = 15%. A turma B tem a menor dispersão relativa: é a mais homogênea.\n\nA turma A, com CV de 20%, é a menos homogênea. O mesmo desvio padrão não basta, porque 12 pontos pesam mais sobre uma média de 60 do que sobre uma de 80. A média menor não torna uma turma mais homogênea. E dá para comparar, sim: é para isso que serve o CV.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "A amostra 10, 12, 14, 16, 18 tem que desvio padrão amostral?",
    opcoes: [
      "≈ 2,83",
      "10",
      "40",
      "≈ 3,16",
      "2",
    ],
    correta: 3,
    explicacao:
      "A média é 14, e os desvios são −4, −2, 0, 2 e 4, com quadrados somando 16 + 4 + 0 + 4 + 16 = 40. A variância amostral é 40/(5 − 1) = 10, e o desvio padrão amostral, √10 ≈ 3,16.\n\n2,83 é o desvio populacional, √(40/5) = √8. 10 é a variância amostral, sem a raiz. 40 é a soma dos quadrados. E 2 é o espaçamento entre os valores, e não uma medida de dispersão.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Pelo teorema de Tchebychev, qualquer que seja a distribuição, pelo menos que fração dos dados fica a menos de 2 desvios padrão da média?",
    opcoes: [
      "95%",
      "50%",
      "75%",
      "68%",
      "25%",
    ],
    correta: 2,
    explicacao:
      "O teorema garante que, a menos de k desvios padrão da média, está pelo menos 1 − 1/k² dos dados. Com k = 2: 1 − 1/4 = 3/4 = 75%. Vale para qualquer distribuição, e por isso é uma cota conservadora.\n\n95% é a fração aproximada para a distribuição normal, e não uma garantia geral. 50% não sai da fórmula com k = 2. 68% é a fração a menos de 1 desvio, também na normal. E 25% é 1/k², a fração que pode ficar de fora.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Numa distribuição normal, que porcentagem aproximada dos valores fica entre μ − σ e μ + σ?",
    opcoes: [
      "≈ 68%",
      "≈ 95%",
      "≈ 50%",
      "≈ 99,7%",
      "≈ 34%",
    ],
    correta: 0,
    explicacao:
      "Na normal, cerca de 68% dos valores ficam a menos de um desvio padrão da média, 95% a menos de dois e 99,7% a menos de três: é a regra empírica. O valor exato para um desvio é Φ(1) − Φ(−1) ≈ 0,6827.\n\n95% é a fração para dois desvios. 50% seria a fração acima da média, ou abaixo dela. 99,7% é a fração para três desvios. E 34% é só a metade do intervalo, de μ até μ + σ.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Acrescentando a um conjunto de dados, com valores não todos iguais, um novo valor exatamente igual à média, o que acontece com a variância populacional?",
    opcoes: [
      "Aumenta",
      "Não muda",
      "Zera",
      "Diminui",
      "Dobra",
    ],
    correta: 3,
    explicacao:
      "O novo valor tem desvio zero e não acrescenta nada à soma dos quadrados dos desvios; a média também não muda. Mas a quantidade de dados aumenta, e a soma passa a ser dividida por n + 1: a variância diminui.\n\nAumentar exigiria um valor afastado da média. Não mudar ignora o aumento de n no denominador. Zerar exigiria que todos os valores ficassem iguais. E dobrar não tem relação com um desvio nulo.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Numa população, metade dos valores é 0 e a outra metade é 10. Qual é o desvio padrão populacional?",
    opcoes: [
      "10",
      "25",
      "50",
      "5",
      "√5",
    ],
    correta: 3,
    explicacao:
      "A média é 5, e todo valor está a exatamente 5 unidades dela: os desvios são −5 ou 5, com quadrado 25. A variância é 25, e o desvio padrão, √25 = 5. Quando todos os valores estão à mesma distância da média, o desvio padrão é essa distância.\n\n10 é a amplitude, a distância entre os dois valores. 25 é a variância, sem a raiz. 50 soma os quadrados de dois desvios, sem dividir. E √5 extrai a raiz da média.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Qual é o desvio médio absoluto, a média das distâncias |x − x̄|, do conjunto 2, 4, 6 e 8?",
    opcoes: [
      "0",
      "2",
      "√5",
      "5",
      "8",
    ],
    correta: 1,
    explicacao:
      "A média é 5, e as distâncias até ela são 3, 1, 1 e 3. O desvio médio absoluto é (3 + 1 + 1 + 3)/4 = 2. Ele usa o módulo, em vez do quadrado, para impedir que os desvios positivos e negativos se cancelem.\n\n0 é a média dos desvios com sinal, que é sempre zero. √5 é o desvio padrão populacional, que usa quadrados: a variância é (9 + 1 + 1 + 9)/4 = 5. 5 é a média, e também a variância. E 8 é a soma das distâncias, sem dividir.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Por que, no cálculo da variância, os desvios em relação à média são elevados ao quadrado?",
    opcoes: [
      "Para aumentar o valor da medida",
      "Porque os dados são sempre positivos",
      "Porque a soma dos desvios simples é sempre zero",
      "Para obter a mesma unidade dos dados",
      "Porque a média é sempre positiva",
    ],
    correta: 2,
    explicacao:
      "A soma dos desvios em relação à média é sempre zero: os positivos e os negativos se compensam exatamente. Uma média desses desvios não mediria dispersão nenhuma. Elevar ao quadrado torna todos os termos não negativos e ainda pesa mais os desvios grandes.\n\nAumentar o valor da medida não é objetivo nenhum. Os dados podem ser negativos, e isso não muda nada. O quadrado tira a medida da unidade dos dados; é a raiz, no desvio padrão, que a devolve. E o sinal da média não tem relação com a pergunta.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Dois grupos do mesmo tamanho têm a mesma média, 10, e variâncias populacionais 4 e 16. Qual é a variância do grupo formado pela união dos dois?",
    opcoes: [
      "20",
      "10",
      "√10",
      "6",
      "64",
    ],
    correta: 1,
    explicacao:
      "Com médias iguais, a média da união também é 10, e cada valor mantém o seu desvio. A soma dos quadrados da união é a soma das duas somas, n · 4 + n · 16, e a quantidade é 2n. A variância da união é (4 + 16)/2 = 10, a média das variâncias.\n\n20 soma as variâncias sem dividir. √10 é o desvio padrão da união. 6 é a média dos desvios padrão, (2 + 4)/2, que não é como as dispersões se combinam. E 64 multiplica as variâncias.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "A variável X tem desvio padrão 3. Qual é o desvio padrão de Y = 5 − 2X?",
    opcoes: [
      "−6",
      "6",
      "1",
      "36",
      "3",
    ],
    correta: 1,
    explicacao:
      "Numa transformação Y = a + bX, a constante a não afeta a dispersão, e o desvio padrão fica multiplicado por |b|. Aqui σ_Y = |−2| · 3 = 6. O sinal de b inverte a ordem dos valores, mas não muda o quanto eles se espalham.\n\n−6 esquece o módulo: desvio padrão nunca é negativo. 1 soma o 5 e a constante, 5 − 2 · 2, sem sentido. 36 é a variância de Y, 4 · 9. E 3 ignora o fator de escala.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Considerando os números 1, 2, 3, 4 e 5 como uma população, qual é a variância?",
    opcoes: [
      "2",
      "2,5",
      "3",
      "10",
      "√2",
    ],
    correta: 0,
    explicacao:
      "A média é 3, e os desvios são −2, −1, 0, 1 e 2, com quadrados somando 4 + 1 + 0 + 1 + 4 = 10. A variância populacional é 10/5 = 2. Para os inteiros de 1 a n, vale a fórmula (n² − 1)/12, que dá 24/12 = 2.\n\n2,5 divide por 4: é a variância amostral. 3 é a média. 10 é a soma dos quadrados dos desvios. E √2 é o desvio padrão, a raiz da variância.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Uma amostra tem só dois valores, 3 e 7. Qual é o desvio padrão amostral?",
    opcoes: [
      "2",
      "4",
      "8",
      "≈ 1,41",
      "≈ 2,83",
    ],
    correta: 4,
    explicacao:
      "A média é 5, e os desvios são −2 e 2, com quadrados somando 8. A variância amostral divide por n − 1 = 1: vale 8. O desvio padrão amostral é √8 = 2√2 ≈ 2,83. Com amostras pequenas, a diferença entre dividir por n e por n − 1 é grande.\n\n2 é o desvio populacional, √(8/2). 4 é a variância populacional. 8 é a variância amostral, sem a raiz. E 1,41 é √2, a raiz da metade.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Um conjunto tem média 20 e desvio padrão 4. Que valor tem escore padronizado z = −1,5?",
    opcoes: [
      "14",
      "26",
      "18,5",
      "−1,5",
      "16",
    ],
    correta: 0,
    explicacao:
      "O escore z diz quantos desvios o valor está da média: x = μ + z · σ = 20 + (−1,5) · 4 = 20 − 6 = 14. O sinal negativo indica um valor abaixo da média.\n\n26 soma os 6 em vez de subtrair. 18,5 soma o próprio z à média. −1,5 é o escore, e não o valor. E 16 usa só um desvio abaixo da média. Converter entre escores z e valores originais é o passo básico para usar a tabela da normal.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Dois investimentos têm o mesmo retorno médio, mas desvios padrão diferentes. O que se pode afirmar?",
    opcoes: [
      "O de maior desvio é mais rentável",
      "O de maior desvio é mais seguro",
      "O de maior desvio é mais arriscado",
      "Os dois têm o mesmo risco",
      "O de maior desvio sempre dá prejuízo",
    ],
    correta: 2,
    explicacao:
      "Com a mesma média, o desvio padrão mede o quanto os retornos se afastam dela. O investimento de maior desvio oscila mais e tem maior chance de retornos muito baixos, ou negativos: é o mais arriscado. Em finanças, o desvio padrão dos retornos é justamente a medida clássica de volatilidade.\n\nMais rentável exigiria média maior, e as médias são iguais. Mais seguro inverte a leitura. O mesmo risco ignora a diferença de dispersão. E sempre dar prejuízo é falso: a média é a mesma, e os retornos altos também ficam mais prováveis.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Qual valor, acrescentado ao conjunto {2, 4, 6}, mantém a média e diminui a variância populacional?",
    opcoes: [
      "0",
      "8",
      "4",
      "12",
      "6",
    ],
    correta: 2,
    explicacao:
      "A média do conjunto é 4. Só um valor igual à média a mantém: acrescentando o 4, a soma vai a 16 e a quantidade a 4, com média 4. O desvio do novo valor é zero, a soma dos quadrados continua 8, e a variância cai de 8/3 para 8/4 = 2.\n\n0 e 8 são simétricos em relação à média, mas cada um sozinho a desloca. 12 aumenta a média e a variância. E 6 também desloca a média, para 4,5.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Os desvios de cinco valores em relação à sua média são −3, −1, 0, 1 e x. Qual é o valor de x?",
    opcoes: [
      "3",
      "−3",
      "0",
      "1",
      "5",
    ],
    correta: 0,
    explicacao:
      "A soma dos desvios em relação à média é sempre zero. Então −3 − 1 + 0 + 1 + x = 0, e x = 3. A propriedade vale para qualquer conjunto de dados, e é a razão de a variância usar quadrados.\n\n−3 repete o primeiro desvio. 0 supõe que o último desvio precisa ser nulo. 1 repete o quarto desvio. E 5 é a quantidade de valores. Conhecidos todos os desvios menos um, o último fica determinado.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Os desvios de cinco valores em relação à média são −3, −1, 0, 1 e 3. Qual é a variância populacional desses valores?",
    opcoes: [
      "20",
      "4",
      "5",
      "2",
      "0",
    ],
    correta: 1,
    explicacao:
      "A variância populacional é a média dos quadrados dos desvios: (9 + 1 + 0 + 1 + 9)/5 = 20/5 = 4. Não é preciso conhecer os valores originais nem a média: os desvios bastam.\n\n20 é a soma dos quadrados, sem dividir. 5 divide por 4, como numa amostra. 2 é o desvio padrão, a raiz de 4. E 0 é a soma dos desvios com sinal, que é sempre zero. O desvio padrão correspondente é √4 = 2.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Se o desvio padrão de uma série corresponde a 25% da sua média, que vale 40, quanto vale esse desvio?",
    opcoes: [
      "1,6",
      "65",
      "15",
      "10",
      "0,625",
    ],
    correta: 3,
    explicacao:
      "O coeficiente de variação é CV = σ/μ, e então σ = CV · μ = 0,25 · 40 = 10. O desvio corresponde a um quarto da média. O coeficiente de variação expressa justamente o desvio como fração da média.\n\n1,6 divide a média por 25, 40/25, esquecendo de converter a porcentagem. 65 soma 25 à média. 15 subtrai 25 de 40. E 0,625 divide 25 por 40, sem converter a porcentagem.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Os pontos de um teste seguem uma distribuição normal com média 100 e desvio padrão 15. Que porcentagem aproximada fica acima de 130?",
    opcoes: [
      "≈ 2,3%",
      "≈ 5%",
      "≈ 16%",
      "≈ 0,15%",
      "≈ 47,7%",
    ],
    correta: 0,
    explicacao:
      "O valor 130 está a (130 − 100)/15 = 2 desvios acima da média. Na normal, P(Z > 2) = 1 − Φ(2) ≈ 1 − 0,9772 = 0,0228, isto é, cerca de 2,3%. Pela regra empírica, 95% ficam entre −2 e 2, e os 5% restantes se dividem entre as duas caudas.\n\n5% soma as duas caudas, acima de 130 e abaixo de 70. 16% é a cauda acima de 1 desvio, 115. 0,15% é a cauda acima de 3 desvios, 145. E 47,7% é a fração entre a média e 130.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Dados agrupados nas classes [0, 4), [4, 8) e [8, 12) têm frequências 2, 6 e 2. Usando os pontos médios, qual é a variância populacional estimada?",
    opcoes: [
      "64",
      "16",
      "≈ 2,53",
      "6",
      "6,4",
    ],
    correta: 4,
    explicacao:
      "Os pontos médios são 2, 6 e 10, e a média é (2 · 2 + 6 · 6 + 10 · 2)/10 = 60/10 = 6. Os desvios ao quadrado, pesados pelas frequências: 2 · 16 + 6 · 0 + 2 · 16 = 64. A variância estimada é 64/10 = 6,4.\n\n64 é a soma dos quadrados, sem dividir. 16 é o quadrado do desvio das classes extremas. 2,53 é o desvio padrão, √6,4. E 6 é a média. Com os dados agrupados, o resultado é uma estimativa: os valores exatos dentro das classes são desconhecidos.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Numa população, 30% dos valores são 1 e 70% são 0. Qual é a variância populacional?",
    opcoes: [
      "0,3",
      "0,09",
      "0,21",
      "0,49",
      "0,7",
    ],
    correta: 2,
    explicacao:
      "A média é a proporção de uns, p = 0,3. A variância de uma variável que só vale 0 ou 1 é p(1 − p) = 0,3 · 0,7 = 0,21. Por exemplo, com três uns e sete zeros: a média é 0,3, e a soma dos quadrados dos desvios é 3 · 0,49 + 7 · 0,09 = 2,1, que dividida por 10 dá 0,21.\n\n0,3 é a média. 0,09 é p², o quadrado da média. 0,49 é (1 − p)². E 0,7 é a proporção de zeros.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Os valores 4, 8 e x têm média 8 e variância populacional 32/3. Qual é o valor de x?",
    opcoes: [
      "8",
      "4",
      "12",
      "16",
      "10",
    ],
    correta: 2,
    explicacao:
      "A média 8 exige soma 24, e então x = 24 − 12 = 12. Conferindo a variância: os desvios são −4, 0 e 4, com quadrados somando 32, e 32/3 confere. A condição da média, sozinha, já determina x; a variância só confirma.\n\n8 daria média 20/3 e variância menor. 4 daria média 16/3. 16 daria média 28/3. E 10 daria média 22/3; nenhum deles satisfaz a primeira condição.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Por que a variância amostral divide a soma dos quadrados dos desvios por n − 1, e não por n?",
    opcoes: [
      "Para simplificar a conta",
      "Para não subestimar, em média, a variância da população",
      "Porque um dos dados sempre é descartado",
      "Para que o resultado seja inteiro",
      "Porque a média amostral é sempre maior",
    ],
    correta: 1,
    explicacao:
      "Os desvios são medidos em relação à média da amostra, que fica mais perto dos próprios dados do que a média verdadeira da população. Por isso, dividir por n subestima, em média, a variância populacional. Dividir por n − 1 corrige esse viés: em média, sobre todas as amostras possíveis, acerta o valor da população.\n\nA conta não fica mais simples. Nenhum dado é descartado. O resultado não precisa ser inteiro. E a média amostral pode ser maior ou menor que a da população.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "media",
    enunciado:
      "Qual é a variância populacional dos valores 10, 20, 30 e 40?",
    opcoes: [
      "500",
      "≈ 166,7",
      "≈ 11,2",
      "125",
      "25",
    ],
    correta: 3,
    explicacao:
      "A média é 25, e os desvios são −15, −5, 5 e 15, com quadrados 225, 25, 25 e 225, somando 500. A variância populacional é 500/4 = 125. Valores igualmente espaçados de 10 em 10 têm a mesma variância que 1, 2, 3, 4 multiplicada por 10² = 100: 1,25 · 100 = 125.\n\n500 é a soma dos quadrados, sem dividir. 166,7 divide por 3, como numa amostra. 11,2 é o desvio padrão, √125. E 25 é a média.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Dois grupos de 50 pessoas: A tem média 2 e variância 1; B tem média 8 e variância 1. Qual é a variância populacional do conjunto das 100 pessoas?",
    opcoes: [
      "10",
      "1",
      "2",
      "9",
      "5",
    ],
    correta: 0,
    explicacao:
      "A variância total soma duas parcelas: a média das variâncias dentro dos grupos, (1 + 1)/2 = 1, e a variância entre as médias dos grupos. A média geral é 5, e as médias dos grupos estão a 3 unidades dela: a parcela entre grupos é 3² = 9. Total: 1 + 9 = 10.\n\n1 fica só com a variância dentro dos grupos. 2 soma as duas variâncias internas. 9 fica só com a parcela entre grupos. E 5 é a média geral das 100 pessoas, e não a variância.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "X e Y são variáveis independentes com desvios padrão 3 e 4. Qual é o desvio padrão de X + Y?",
    opcoes: [
      "5",
      "7",
      "1",
      "25",
      "12",
    ],
    correta: 0,
    explicacao:
      "Para variáveis independentes, as variâncias se somam: Var(X + Y) = 9 + 16 = 25, e o desvio padrão é √25 = 5. Os desvios padrão não se somam: 3 + 4 = 7 superestima a dispersão, porque os desvios de X e Y às vezes se compensam.\n\n7 soma os desvios padrão. 1 os subtrai. 25 é a variância da soma, sem a raiz. E 12 multiplica os desvios. Com X e Y dependentes, entraria ainda o termo 2 · Cov(X, Y).",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Que número t deixa a soma dos quadrados Σ(x − t)² a menor possível, para os dados 1, 2, 6, 7 e 20?",
    opcoes: [
      "6",
      "20",
      "10,5",
      "1",
      "7,2",
    ],
    correta: 4,
    explicacao:
      "A soma dos quadrados dos desvios é mínima na média. Derivando S(t) = Σ(x − t)² em relação a t: S'(t) = −2Σ(x − t) = 0, que dá t = Σx/n = 36/5 = 7,2. Esse mínimo, dividido por n, é justamente a variância.\n\n6 é a mediana, que minimiza a soma das distâncias absolutas, e não dos quadrados. 20 e 1 são os extremos. E 10,5 é o ponto médio entre o menor e o maior valor.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Cinco valores têm média 10 e variância populacional 4. Acrescentando o valor 16, qual passa a ser a variância populacional?",
    opcoes: [
      "4",
      "20/3",
      "10",
      "8",
      "25/3",
    ],
    correta: 4,
    explicacao:
      "Pela fórmula computacional, a soma dos quadrados dos cinco valores é 5 · (4 + 10²) = 520, e a soma dos valores, 50. Com o 16: soma 66, quadrados 520 + 256 = 776, quantidade 6. A nova média é 11, e a variância, 776/6 − 11² = 129,33 − 121 = 25/3 ≈ 8,33.\n\n4 supõe que a variância não muda. 20/3 esquece que a média também muda e usa os desvios em relação a 10. 10 é a média antiga. E 8 é um arredondamento sem conta.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Pelo teorema de Tchebychev, a quantos desvios padrão da média é preciso ir para garantir pelo menos 90% dos dados, em qualquer distribuição?",
    opcoes: [
      "1,645",
      "10",
      "≈ 3,16",
      "≈ 1,05",
      "3",
    ],
    correta: 2,
    explicacao:
      "A garantia é de pelo menos 1 − 1/k² dos dados a menos de k desvios. Para 90%: 1 − 1/k² = 0,9, 1/k² = 0,1 e k = √10 ≈ 3,16. A cota vale para qualquer distribuição e por isso é bem mais larga que a da normal.\n\n1,645 é o valor da normal que deixa 90% no meio, e não vale em geral. 10 é k², sem a raiz. 1,05 é 1/0,95, sem relação com a fórmula. E 3 dá só 1 − 1/9 ≈ 89%, abaixo do pedido.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Qual é a variância do resultado de um dado honesto de seis faces, com valores de 1 a 6 igualmente prováveis?",
    opcoes: [
      "3,5",
      "17,5",
      "91/6",
      "√(35/12)",
      "35/12",
    ],
    correta: 4,
    explicacao:
      "A média é 3,5. A média dos quadrados é (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6, e a variância é 91/6 − 3,5² = 91/6 − 49/4 = (182 − 147)/12 = 35/12 ≈ 2,92. É a fórmula (n² − 1)/12 com n = 6.\n\n3,5 é a média. 17,5 é a soma dos quadrados dos desvios, sem dividir por 6. 91/6 é a média dos quadrados, sem subtrair o quadrado da média. E √(35/12) é o desvio padrão.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra com pelo menos dois valores tem desvio padrão amostral igual a zero. O que se pode concluir?",
    opcoes: [
      "A média da amostra é zero",
      "Todos os valores são zero",
      "A amostra tem um único elemento",
      "Todos os valores da amostra são iguais",
      "A mediana é zero",
    ],
    correta: 3,
    explicacao:
      "O desvio padrão é zero só quando a soma dos quadrados dos desvios é zero, e uma soma de quadrados só zera se cada termo for zero: todos os valores são iguais à média, e portanto iguais entre si. Não há dispersão nenhuma.\n\nA média pode ser qualquer número: 7, 7, 7 tem desvio zero e média 7. Pelo mesmo exemplo, os valores não precisam ser zero, nem a mediana. E a amostra tem pelo menos dois elementos, como diz o enunciado.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "A soma S(a) = Σ(xᵢ − a)², sobre n dados de média x̄ e variância populacional σ², é mínima em a = x̄. Quanto vale S nesse ponto?",
    opcoes: [
      "σ²",
      "n · σ²",
      "0",
      "n · x̄²",
      "a soma dos quadrados dos dados",
    ],
    correta: 1,
    explicacao:
      "Em a = x̄, S é a soma dos quadrados dos desvios em relação à média, e a variância populacional é essa soma dividida por n. Então S(x̄) = n · σ². Para qualquer outro a, vale S(a) = nσ² + n(x̄ − a)², maior.\n\nσ² esquece de multiplicar por n. 0 só ocorre se todos os dados forem iguais. n · x̄² é a parte da soma dos quadrados que vem da média. E a soma dos quadrados dos dados, Σxᵢ², é S(0), e não o mínimo.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Uma variável X tem média μ e variância 9. Qual é a variância da variável padronizada Z = (X − μ)/σ?",
    opcoes: [
      "0",
      "9",
      "1/9",
      "3",
      "1",
    ],
    correta: 4,
    explicacao:
      "Subtrair μ não altera a variância, e dividir por σ = 3 divide a variância por σ² = 9. Então Var(Z) = 9/9 = 1. Toda variável padronizada tem média 0 e variância 1: é o que permite comparar variáveis em escalas diferentes.\n\n0 é a média de Z, e não a variância. 9 esquece a divisão. 1/9 divide a variância duas vezes por 9. E 3 é o desvio padrão de X.",
  },
  {
    materia: "estatistica",
    tema: "Variância e desvio padrão",
    dificuldade: "dificil",
    enunciado:
      "Tratando os dados 1, 3, 3, 3, 4, 4, 6 e 8 como uma amostra, qual é a variância amostral?",
    opcoes: [
      "4",
      "2",
      "≈ 2,14",
      "≈ 4,57",
      "32",
    ],
    correta: 3,
    explicacao:
      "A média é 4, e a soma dos quadrados dos desvios é 9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32. Como amostra, divide-se por n − 1 = 7: a variância amostral é 32/7 ≈ 4,57. Como população, seria 32/8 = 4.\n\n4 é a variância populacional, dividindo por 8. 2 é o desvio padrão populacional. 2,14 é o desvio padrão amostral, √(32/7). E 32 é a soma dos quadrados dos desvios, sem dividir.",
  },
];
