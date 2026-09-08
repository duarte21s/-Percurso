/* Leitura de gráficos e tabelas — parte B (25 questões).
   Orçamento, séries trimestrais, histogramas, margem de erro e leitura
   crítica de indicadores. Todos os dados estão escritos no enunciado.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "O orçamento mensal de uma família foi distribuído assim: moradia 30%, alimentação 25%, transporte 15%, educação 10% e outras despesas 20%. Para uma renda mensal de R$ 4.000,00, o valor destinado à moradia é de:",
    opcoes: ["R$ 800,00", "R$ 1.000,00", "R$ 600,00", "R$ 1.200,00", "R$ 400,00"],
    correta: 3,
    explicacao:
      "O cálculo é 0,30 · 4 000 = R$ 1.200,00. A alternativa R$ 1.000,00 corresponderia a 25%, o percentual da alimentação. Converter cada fatia percentual em reais é a operação mais frequente na leitura de orçamentos apresentados em gráficos de setores.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Mantendo a distribuição orçamentária de moradia 30%, alimentação 25%, transporte 15%, educação 10% e outras despesas 20%, a soma dos percentuais destinados a alimentação e transporte é de:",
    opcoes: ["40%", "45%", "35%", "30%", "55%"],
    correta: 0,
    explicacao:
      "Somando as duas categorias: 25% + 15% = 40%. A alternativa 45% incluiria alguma outra parcela. Como todas as categorias somam 100%, agrupar fatias é uma operação direta e permite responder a perguntas sobre despesas combinadas.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Ainda com o orçamento distribuído em moradia 30%, alimentação 25%, transporte 15%, educação 10% e outras despesas 20%, a categoria que concentra o maior gasto da família é:",
    opcoes: ["alimentação", "transporte", "moradia", "educação", "outras despesas"],
    correta: 2,
    explicacao:
      "O maior percentual é 30%, correspondente à moradia. Em um gráfico de setores, essa seria a maior fatia. A alternativa educação apresenta o menor percentual, 10% — inverter maior e menor é o deslize mais comum quando a leitura é feita sem comparar os valores.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Representando em um gráfico de setores um orçamento em que a moradia responde por 30% do total, o ângulo central da fatia correspondente à moradia mede:",
    opcoes: ["30°", "60°", "90°", "120°", "108°"],
    correta: 4,
    explicacao:
      "O ângulo é proporcional ao percentual: 0,30 · 360° = 108°. A alternativa 30° confunde o percentual com a medida do ângulo. A regra prática é multiplicar o percentual por 3,6 para obter o ângulo em graus.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Em um orçamento familiar de R$ 4.000,00 mensais, a categoria educação responde por 10% do total. O valor destinado à educação é de:",
    opcoes: ["R$ 1.000,00", "R$ 400,00", "R$ 100,00", "R$ 40,00", "R$ 800,00"],
    correta: 1,
    explicacao:
      "O cálculo é 0,10 · 4 000 = R$ 400,00. A alternativa R$ 100,00 confunde o percentual com o valor em reais. Calcular 10% é imediato: basta deslocar a vírgula uma casa à esquerda.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "As notas obtidas por cinco estudantes em uma avaliação foram 4, 6, 7, 8 e 10. O percentual de estudantes que obtiveram nota igual ou superior a 7 é de:",
    opcoes: ["40%", "50%", "60%", "70%", "30%"],
    correta: 2,
    explicacao:
      "Três estudantes atingiram 7 ou mais (as notas 7, 8 e 10), o que dá 3/5 = 0,6 = 60%. A alternativa 40% contaria apenas as notas estritamente acima de 7. Ler se o critério inclui ou exclui o valor de corte é decisivo nesse tipo de questão.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Certo tipo de gráfico representa dados numéricos agrupados em intervalos de classe, usando retângulos justapostos cuja altura indica a frequência de cada intervalo. Esse gráfico é chamado de:",
    opcoes: [
      "gráfico de setores.",
      "pictograma.",
      "diagrama de dispersão.",
      "gráfico de linhas.",
      "histograma.",
    ],
    correta: 4,
    explicacao:
      "O histograma é próprio para variáveis contínuas agrupadas em classes, e por isso suas barras aparecem coladas, indicando continuidade entre os intervalos. No gráfico de barras comum, usado para categorias distintas, as barras ficam separadas — a diferença visual carrega esse significado.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Um pesquisador quer verificar se existe relação entre as horas de estudo e as notas obtidas por um grupo de estudantes, marcando cada estudante como um ponto. O tipo de gráfico adequado a essa investigação é:",
    opcoes: [
      "o gráfico de setores.",
      "o diagrama de dispersão.",
      "o pictograma com ícones.",
      "a tabela de frequência acumulada.",
      "o gráfico de barras horizontais.",
    ],
    correta: 1,
    explicacao:
      "O diagrama de dispersão posiciona cada indivíduo segundo duas variáveis simultâneas, e a nuvem de pontos revela se existe tendência de crescimento conjunto. Um gráfico de setores só descreveria composição, e um de barras compararia categorias — nenhum dos dois mostra relação entre duas variáveis numéricas.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "dificil",
    enunciado:
      "Uma pesquisa eleitoral aponta que determinado candidato tem 45% das intenções de voto, com margem de erro de 2 pontos percentuais. Essa informação significa que a intenção de voto real do candidato está, provavelmente, entre:",
    opcoes: ["43% e 47%", "44% e 46%", "40% e 50%", "45% e 47%", "43% e 45%"],
    correta: 0,
    explicacao:
      "A margem de erro se aplica para mais e para menos: 45 − 2 = 43% e 45 + 2 = 47%. A alternativa 45% a 47% considera apenas um dos lados do intervalo. A margem não é uma garantia absoluta: ela vem associada a um nível de confiança, geralmente de 95%.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "dificil",
    enunciado:
      "Em uma pesquisa com margem de erro de 2 pontos percentuais, um candidato aparece com 45% e outro com 43% das intenções de voto. A leitura tecnicamente correta desse resultado é que:",
    opcoes: [
      "o primeiro candidato vencerá a eleição com certeza.",
      "o segundo candidato está matematicamente eliminado.",
      "a diferença entre eles é de 2%, e não de 2 pontos.",
      "os dois estão empatados dentro da margem de erro.",
      "a pesquisa foi mal conduzida e deve ser descartada.",
    ],
    correta: 3,
    explicacao:
      "Os intervalos são de 43% a 47% e de 41% a 45%, e eles se sobrepõem: não há como afirmar quem está à frente. É o chamado empate técnico. Tratar diferenças menores que a margem de erro como vantagem real é o erro de leitura mais frequente na cobertura de pesquisas eleitorais.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "As vendas trimestrais de uma empresa, em milhares de reais, foram: primeiro trimestre 200, segundo 250, terceiro 300 e quarto 250. Do primeiro ao terceiro trimestre, a série apresentou:",
    opcoes: [
      "crescimento contínuo das vendas.",
      "queda contínua das vendas.",
      "estabilidade completa das vendas.",
      "oscilação sem tendência definida.",
      "crescimento seguido de queda.",
    ],
    correta: 0,
    explicacao:
      "Os valores 200, 250 e 300 aumentam a cada trimestre, caracterizando crescimento contínuo nesse recorte. A queda só aparece no quarto trimestre, que está fora do intervalo pedido. Delimitar exatamente o período mencionado no enunciado é essencial na leitura de séries temporais.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Com vendas trimestrais de 200, 250, 300 e 250 mil reais ao longo de um ano, o total vendido no período foi de:",
    opcoes: [
      "R$ 950 mil",
      "R$ 900 mil",
      "R$ 1.050 mil",
      "R$ 1.000 mil",
      "R$ 1.100 mil",
    ],
    correta: 3,
    explicacao:
      "Somando: 200 + 250 + 300 + 250 = 1 000 mil reais, ou seja, 1 milhão. A alternativa 950 esqueceria parte de uma parcela. Conferir a soma é o passo básico antes de calcular médias ou participações percentuais.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Ainda com vendas trimestrais de 200, 250, 300 e 250 mil reais, totalizando 1.000 mil reais no ano, a participação do terceiro trimestre no total anual foi de:",
    opcoes: ["20%", "25%", "35%", "40%", "30%"],
    correta: 4,
    explicacao:
      "O cálculo é 300/1 000 = 0,3 = 30%. A alternativa 25% corresponde ao segundo ou ao quarto trimestre, ambos com 250. Como o terceiro trimestre foi o melhor do ano, sua participação precisa superar a média de 25% por trimestre.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "As vendas de uma empresa caíram de 300 mil reais no terceiro trimestre para 250 mil reais no quarto trimestre. A queda percentual registrada entre esses dois trimestres foi de aproximadamente:",
    opcoes: ["20%", "16,7%", "50%", "25%", "10%"],
    correta: 1,
    explicacao:
      "A redução foi de 50 mil sobre a base de 300 mil: 50/300 ≈ 0,167 = 16,7%. A alternativa 20% usaria o valor final como base de comparação. Em toda variação percentual, o denominador é o valor de partida — aqui, o do terceiro trimestre.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Com vendas trimestrais de 200, 250, 300 e 250 mil reais ao longo de um ano, a média trimestral de vendas foi de:",
    opcoes: ["200 mil reais", "300 mil reais", "250 mil reais", "275 mil reais", "225 mil reais"],
    correta: 2,
    explicacao:
      "A média é 1 000/4 = 250 mil reais por trimestre. A alternativa 275 mil desconsideraria o trimestre de menor venda. Aqui a média coincide com dois dos valores observados, o que acontece por coincidência da distribuição e não por regra.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "dificil",
    enunciado:
      "Alguns gráficos apresentam duas séries de dados usando dois eixos verticais com escalas diferentes, um à esquerda e outro à direita. O principal cuidado exigido na leitura desse tipo de gráfico é:",
    opcoes: [
      "somar as duas séries para obter o total geral.",
      "considerar que as duas séries têm sempre a mesma unidade.",
      "ignorar a série representada no eixo da direita.",
      "assumir que os cruzamentos entre as curvas indicam igualdade de valores.",
      "verificar a qual eixo cada série se refere antes de comparar valores.",
    ],
    correta: 4,
    explicacao:
      "Com escalas diferentes, duas curvas podem se cruzar sem que os valores sejam iguais, e uma curva mais alta pode representar um número menor. Sem identificar o eixo de cada série, qualquer comparação visual fica sem sentido. É por isso que esse recurso, embora útil, é apontado como um dos que mais induzem a leituras equivocadas.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Uma distribuição de frequências com cinco classes registrou os seguintes valores, na ordem das classes: 10, 20, 30, 25 e 15 observações. A classe de maior frequência, chamada classe modal, é:",
    opcoes: ["a primeira", "a terceira", "a quinta", "a segunda", "a quarta"],
    correta: 1,
    explicacao:
      "O maior valor da série é 30, correspondente à terceira classe. A alternativa quarta classe tem 25 observações, a segunda maior frequência. A classe modal é o equivalente da moda quando os dados estão agrupados em intervalos.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Em uma distribuição com cinco classes de frequências 10, 20, 30, 25 e 15, a frequência acumulada até a terceira classe é igual a:",
    opcoes: ["30", "50", "55", "60", "75"],
    correta: 3,
    explicacao:
      "A frequência acumulada soma a classe atual e todas as anteriores: 10 + 20 + 30 = 60. A alternativa 30 considera apenas a terceira classe, confundindo frequência simples com acumulada. Na última classe, o acumulado precisa igualar o total de 100 observações.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Ainda na distribuição de frequências com classes de 10, 20, 30, 25 e 15 observações, totalizando 100 observações, a frequência relativa da quarta classe é de:",
    opcoes: ["15%", "20%", "25%", "30%", "2,5%"],
    correta: 2,
    explicacao:
      "A quarta classe tem 25 observações em um total de 100: 25/100 = 25%. Quando o total é exatamente 100, a frequência absoluta coincide numericamente com o percentual, o que facilita a leitura. A alternativa 15% corresponde à quinta classe.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "facil",
    enunciado:
      "Em uma distribuição com classes de frequências 10, 20, 30, 25 e 15, num total de 100 observações, o percentual acumulado até a segunda classe é de:",
    opcoes: ["30%", "20%", "10%", "50%", "60%"],
    correta: 0,
    explicacao:
      "Somando as duas primeiras classes: 10 + 20 = 30 observações, ou 30% do total. A alternativa 20% considera apenas a segunda classe. O percentual acumulado responde a perguntas do tipo 'que fração dos dados está abaixo deste limite'.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "dificil",
    enunciado:
      "Uma pesquisa de opinião divulgou resultados em que a soma dos percentuais de todas as categorias chegou a 130%. A explicação mais provável para esse resultado é que:",
    opcoes: [
      "houve erro de cálculo na apuração dos dados.",
      "a pergunta admitia mais de uma resposta por entrevistado.",
      "parte dos entrevistados foi contada duas vezes por engano.",
      "os percentuais foram calculados sobre bases diferentes.",
      "a amostra utilizada foi maior que a população estudada.",
    ],
    correta: 1,
    explicacao:
      "Em perguntas de múltipla escolha com respostas simultâneas, cada entrevistado pode marcar várias opções, e a soma naturalmente ultrapassa 100%. Nesses casos, os percentuais indicam quantos entrevistados citaram cada item, e não como o total se reparte. Gráficos de setores são inadequados para esse tipo de dado.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Em um gráfico de linhas que registra a evolução de uma variável ao longo do tempo, observa-se que determinado trecho da linha tem inclinação muito mais acentuada que os demais. Esse trecho indica:",
    opcoes: [
      "que os dados desse período são menos confiáveis.",
      "que a variável permaneceu constante nesse período.",
      "que a variação da grandeza foi mais rápida nesse período.",
      "que houve mudança na unidade de medida utilizada.",
      "que o gráfico foi construído com escala incorreta.",
    ],
    correta: 2,
    explicacao:
      "A inclinação do segmento traduz a taxa de variação: quanto mais íngreme, maior a mudança por unidade de tempo. Um trecho horizontal indicaria estabilidade, e um descendente, queda. Essa leitura da inclinação é a base para identificar aceleração e desaceleração em séries temporais.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Ao montar uma tabela estatística, um pesquisador percebe que determinado dado não foi coletado para uma das categorias. O procedimento correto nesse caso é:",
    opcoes: [
      "sinalizar a ausência do dado com um símbolo próprio, sem inventar valor.",
      "registrar o valor zero na célula correspondente.",
      "repetir o valor da categoria anterior na célula vazia.",
      "excluir a categoria inteira da tabela.",
      "substituir o dado ausente pela média das demais categorias.",
    ],
    correta: 0,
    explicacao:
      "Zero é um valor com significado — indica ausência do fenômeno —, e usá-lo para dado não coletado distorce médias e totais. Por isso as normas de apresentação tabular preveem símbolos específicos para dado inexistente e para dado não disponível. Excluir a categoria também esconde informação relevante do leitor.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Um índice de preços foi construído com base 100 no ano de 2020 e alcançou o valor 115 em 2024. Essa informação indica que, no período, os preços:",
    opcoes: ["subiram 115%", "subiram 1,15%", "subiram 15 pontos-base", "subiram 15%", "caíram 85%"],
    correta: 3,
    explicacao:
      "Em um índice de base 100, a diferença em relação a 100 é diretamente o percentual de variação: 115 − 100 = 15%. A alternativa 115% confunde o valor do índice com a variação. Números-índice são usados justamente para tornar a comparação percentual imediata.",
  },
  {
    materia: "matematica",
    tema: "Leitura de gráficos e tabelas",
    dificuldade: "media",
    enunciado:
      "Uma tabela traz o cabeçalho indicando que os valores estão expressos em milhares de reais. Uma célula dessa tabela registra o número 4,2, o que corresponde a:",
    opcoes: ["R$ 42,00", "R$ 420,00", "R$ 4,20", "R$ 42.000,00", "R$ 4.200,00"],
    correta: 4,
    explicacao:
      "Cada unidade da tabela vale mil reais, então 4,2 · 1 000 = R$ 4.200,00. A alternativa R$ 4,20 ignora o cabeçalho, erro que inviabiliza toda a leitura. Verificar a unidade declarada antes de interpretar qualquer número é o primeiro passo na análise de uma tabela.",
  },
];
