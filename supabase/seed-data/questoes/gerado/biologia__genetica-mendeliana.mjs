/* Genética mendeliana (50 questões).
   Primeira e segunda leis de Mendel, genótipo e fenótipo, dominância e
   recessividade, cruzamentos, proporções fenotípicas e genotípicas,
   heredogramas simples.
   Ver biologia__problemas-ambientais-brasileiros.mjs para o formato. */

export const questoes = [
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Gregor Mendel, monge austríaco do século XIX, é considerado o pai da genética por seus experimentos pioneiros com o cruzamento de ervilhas, que lhe permitiram formular as leis básicas da hereditariedade. Mendel escolheu a ervilha como organismo de estudo, entre outros motivos, porque essa planta:",
    opcoes: [
      "apresenta características bem definidas e contrastantes, fáceis de observar e de cruzar controladamente",
      "não produz descendentes de forma alguma",
      "é o único organismo vivo capaz de se reproduzir",
      "não pode ser cultivada em nenhuma condição controlada",
      "apresenta apenas uma única característica hereditária observável",
    ],
    correta: 0,
    explicacao:
      "As ervilhas apresentavam características facilmente observáveis e contrastantes, como cor da flor (roxa ou branca) e textura da semente (lisa ou rugosa), além de serem fáceis de cultivar e de cruzar de forma controlada, o que permitiu a Mendel acompanhar cuidadosamente a transmissão dessas características ao longo de várias gerações.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Na genética, o genótipo de um indivíduo corresponde à sua constituição genética, ou seja, aos alelos (versões de um gene) que ele possui, enquanto o fenótipo corresponde à característica observável resultante da expressão desse genótipo, muitas vezes também influenciada pelo ambiente. A cor dos olhos de uma pessoa, por exemplo, é um exemplo de:",
    opcoes: [
      "fenótipo, a característica observável",
      "genótipo, a constituição genética invisível a olho nu",
      "mutação genética espontânea",
      "cariótipo, a representação dos cromossomos",
      "cromossomo sexual",
    ],
    correta: 0,
    explicacao:
      "A cor dos olhos observada é o fenótipo, resultado visível da combinação de alelos (o genótipo) que a pessoa possui para os genes relacionados a essa característica; o genótipo em si, a sequência específica de DNA, não é diretamente observável, apenas seus efeitos visíveis no fenótipo.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Os alelos são diferentes versões de um mesmo gene, que podem ocupar a mesma posição em cromossomos homólogos. Quando um indivíduo possui dois alelos idênticos para determinado gene, ele é classificado como:",
    opcoes: [
      "homozigoto",
      "heterozigoto",
      "híbrido apenas",
      "mutante obrigatório",
      "estéril geneticamente",
    ],
    correta: 0,
    explicacao:
      "Um indivíduo homozigoto possui os dois alelos idênticos para determinado gene, sejam ambos dominantes (homozigoto dominante) ou ambos recessivos (homozigoto recessivo); quando os dois alelos são diferentes entre si, o indivíduo é classificado como heterozigoto, apresentando um alelo de cada tipo.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Em um gene com dois alelos possíveis, um dominante e um recessivo, a característica associada ao alelo dominante se manifesta no fenótipo mesmo quando o indivíduo é heterozigoto, possuindo apenas uma cópia desse alelo. Já a característica recessiva só se manifesta quando o indivíduo é:",
    opcoes: [
      "homozigoto recessivo, possuindo duas cópias do alelo recessivo",
      "heterozigoto, possuindo um alelo de cada tipo",
      "homozigoto dominante, possuindo duas cópias do alelo dominante",
      "portador de qualquer combinação de alelos, sem exceção",
      "estéril geneticamente",
    ],
    correta: 0,
    explicacao:
      "Como o alelo dominante 'mascara' o efeito do recessivo quando ambos estão presentes (situação heterozigota), a característica recessiva só aparece no fenótipo quando o indivíduo não possui nenhuma cópia do alelo dominante, ou seja, quando é homozigoto recessivo, com duas cópias do alelo recessivo.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "A primeira lei de Mendel, também chamada de lei da segregação, estabelece que cada característica hereditária é determinada por um par de fatores (atualmente chamados de alelos), que se separam durante a formação dos gametas, de modo que cada gameta recebe apenas um dos fatores do par. Essa separação dos alelos durante a formação dos gametas ocorre, em termos celulares, durante o processo de:",
    opcoes: [
      "meiose",
      "mitose",
      "fecundação",
      "fermentação",
      "fotossíntese",
    ],
    correta: 0,
    explicacao:
      "É durante a meiose, especificamente na anáfase I, que os cromossomos homólogos (e os alelos que eles carregam) se separam e são distribuídos em gametas diferentes, o que corresponde exatamente ao princípio da segregação descrito por Mendel décadas antes de os mecanismos celulares da meiose serem compreendidos em detalhe.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Em um cruzamento entre duas plantas de ervilha heterozigotas para a cor da semente (Aa × Aa), sendo A o alelo dominante para semente amarela e a o alelo recessivo para semente verde, a proporção genotípica esperada na descendência é de:",
    opcoes: [
      "1 AA : 2 Aa : 1 aa",
      "1 AA : 1 aa, sem qualquer heterozigoto",
      "todos os descendentes Aa",
      "3 AA : 1 aa",
      "2 AA : 2 aa",
    ],
    correta: 0,
    explicacao:
      "Ao cruzar dois heterozigotos (Aa × Aa), o quadro de Punnett mostra a combinação de gametas A e a de cada progenitor, resultando na proporção genotípica clássica de 1 AA : 2 Aa : 1 aa, ou seja, 25% homozigoto dominante, 50% heterozigoto e 25% homozigoto recessivo.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "No mesmo cruzamento entre duas plantas heterozigotas (Aa × Aa), sendo A dominante para semente amarela e a recessivo para semente verde, a proporção fenotípica esperada na descendência é de:",
    opcoes: [
      "3 amarelas : 1 verde",
      "1 amarela : 1 verde",
      "todas as sementes amarelas",
      "todas as sementes verdes",
      "1 amarela : 3 verdes",
    ],
    correta: 0,
    explicacao:
      "Como tanto o genótipo AA quanto o Aa produzem o fenótipo dominante (semente amarela), e apenas o genótipo aa produz o fenótipo recessivo (semente verde), a proporção genotípica de 1 AA : 2 Aa : 1 aa se traduz na proporção fenotípica clássica de 3 amarelas para 1 verde, um dos resultados mais emblemáticos dos experimentos de Mendel.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "A segunda lei de Mendel, também chamada de lei da segregação independente, estabelece que, ao considerar duas ou mais características diferentes controladas por genes localizados em cromossomos diferentes, esses genes se transmitem à descendência de forma:",
    opcoes: [
      "independente, sem que a herança de uma característica influencie a herança da outra",
      "sempre ligada, transmitindo-se obrigatoriamente juntas",
      "impossível de ocorrer em qualquer organismo",
      "idêntica à primeira lei, sem qualquer diferença",
      "exclusiva de organismos assexuados",
    ],
    correta: 0,
    explicacao:
      "A segunda lei de Mendel descreve como características controladas por genes em cromossomos diferentes (ou distantes o suficiente em um mesmo cromossomo) se segregam de forma independente umas das outras durante a formação dos gametas, o que resulta em novas combinações de características na descendência, diferentes das combinações observadas nos progenitores.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Um casal decide investigar o genótipo de um filho para uma determinada doença genética recessiva, mesmo o filho não apresentando nenhum sintoma da doença. Esse filho, embora não manifeste a doença fenotipicamente, poderia ser um portador silencioso da condição se possuísse o genótipo:",
    opcoes: [
      "heterozigoto, com um alelo normal (dominante) e um alelo da doença (recessivo)",
      "homozigoto dominante, com dois alelos normais",
      "homozigoto recessivo, manifestando a doença",
      "portador de um cromossomo extra",
      "sem qualquer material genético relacionado à doença",
    ],
    correta: 0,
    explicacao:
      "Um indivíduo heterozigoto para uma doença recessiva carrega um alelo normal (dominante) e um alelo da doença (recessivo); como o alelo normal mascara o efeito do recessivo, esse indivíduo não manifesta a doença, mas pode transmitir o alelo recessivo a seus descendentes, sendo por isso chamado de portador silencioso ou assintomático da condição.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "O cruzamento-teste (ou retrocruzamento) é uma técnica utilizada para descobrir se um indivíduo de fenótipo dominante é homozigoto dominante ou heterozigoto, cruzando-o com um indivíduo homozigoto recessivo para a característica em questão. Se todos os descendentes desse cruzamento apresentarem o fenótipo dominante, é mais provável que o indivíduo testado seja:",
    opcoes: [
      "homozigoto dominante",
      "heterozigoto",
      "homozigoto recessivo",
      "estéril geneticamente",
      "portador de uma mutação letal",
    ],
    correta: 0,
    explicacao:
      "Se o indivíduo testado for homozigoto dominante (AA), todos os gametas produzidos carregarão o alelo A, garantindo que todos os descendentes do cruzamento com um homozigoto recessivo (aa) sejam heterozigotos (Aa), com fenótipo dominante; se o indivíduo fosse heterozigoto (Aa), esperar-se-ia que aproximadamente metade dos descendentes apresentasse o fenótipo recessivo, o que não ocorre nesse cenário descrito.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um casal, ambos heterozigotos para a fibrose cística (uma doença genética recessiva grave), decide ter um filho. A probabilidade de que esse filho herde a doença, ou seja, seja homozigoto recessivo, é de:",
    opcoes: [
      "50%",
      "25%",
      "75%",
      "100%",
      "0%",
    ],
    correta: 1,
    explicacao:
      "Cruzando dois heterozigotos (Aa × Aa), a proporção genotípica esperada é 1 AA : 2 Aa : 1 aa, ou seja, 25% de chance de o filho ser homozigoto recessivo (aa) e, portanto, manifestar a doença — os outros 75% se dividem entre 25% homozigoto dominante (sem a doença e sem ser portador) e 50% heterozigoto (sem a doença, mas portador, como os pais).",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante realiza um cruzamento entre um indivíduo homozigoto dominante (AA) e um indivíduo homozigoto recessivo (aa) para determinada característica. Toda a geração F1 (primeira geração de descendentes) resultante desse cruzamento apresentará genótipo:",
    opcoes: [
      "homozigoto dominante (AA)",
      "heterozigoto (Aa), com fenótipo dominante",
      "homozigoto recessivo (aa)",
      "uma mistura de todos os genótipos possíveis",
      "impossível de determinar sem mais dados",
    ],
    correta: 1,
    explicacao:
      "Como o progenitor AA só pode fornecer gametas com alelo A, e o progenitor aa só pode fornecer gametas com alelo a, toda a geração F1 resultante desse cruzamento será necessariamente heterozigota (Aa), apresentando o fenótipo dominante, já que carrega uma cópia do alelo dominante A.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um cruzamento envolvendo duas características diferentes simultaneamente (diibridismo), cada uma controlada por um gene localizado em um cromossomo diferente. Ao cruzar dois indivíduos duplo-heterozigotos (AaBb × AaBb), a proporção fenotípica esperada na descendência, segundo a segunda lei de Mendel, é de:",
    opcoes: [
      "3:1",
      "9:3:3:1",
      "1:1:1:1",
      "1:2:1",
      "16:0:0:0",
    ],
    correta: 1,
    explicacao:
      "No cruzamento di-híbrido clássico (AaBb × AaBb), com genes em cromossomos diferentes segregando de forma independente, a proporção fenotípica esperada na descendência é 9 (dominante para ambas as características) : 3 (dominante para uma, recessivo para outra) : 3 (recessivo para a primeira, dominante para a segunda) : 1 (recessivo para ambas), totalizando 16 combinações possíveis.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a herança da cor da pelagem em uma raça de coelhos, na qual o alelo P (dominante) determina pelagem preta e o alelo p (recessivo) determina pelagem branca. Ao cruzar um coelho heterozigoto (Pp) com um coelho de pelagem branca (pp), a proporção fenotípica esperada na descendência é de:",
    opcoes: [
      "100% pretos",
      "50% pretos, 50% brancos",
      "100% brancos",
      "75% pretos, 25% brancos",
      "25% pretos, 75% brancos",
    ],
    correta: 1,
    explicacao:
      "Nesse cruzamento (Pp × pp), o progenitor heterozigoto produz gametas P e p em igual proporção, e o progenitor homozigoto recessivo só produz gametas p; combinando-os, metade dos descendentes será Pp (pelagem preta) e a outra metade será pp (pelagem branca), resultando em uma proporção de 50% para cada fenótipo, um padrão característico de um cruzamento-teste.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre dominância completa, na qual o alelo dominante mascara totalmente o efeito do recessivo no heterozigoto, e casos de herança mais complexos, como a dominância incompleta, na qual o heterozigoto apresenta um fenótipo intermediário entre os dois homozigotos. Um exemplo clássico de dominância incompleta é o cruzamento entre flores de boca-de-leão vermelhas e brancas, que produz descendentes heterozigotos de cor:",
    opcoes: [
      "vermelha, idêntica a um dos progenitores",
      "rosa, uma mistura intermediária entre o vermelho e o branco",
      "branca, idêntica ao outro progenitor",
      "amarela, uma cor não presente em nenhum dos progenitores",
      "impossível de prever em qualquer situação de dominância incompleta",
    ],
    correta: 1,
    explicacao:
      "Na dominância incompleta, nenhum dos dois alelos consegue mascarar totalmente o efeito do outro no heterozigoto, resultando em um fenótipo intermediário — no caso da boca-de-leão, o cruzamento entre uma planta de flor vermelha (homozigota) e uma de flor branca (homozigota) produz descendentes heterozigotos de flor rosa, uma mistura visual entre as duas cores originais, diferente do padrão de dominância completa observado nas ervilhas de Mendel.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "O sistema sanguíneo ABO em humanos é um exemplo de herança com alelos múltiplos, no qual três alelos diferentes (IA, IB e i) podem ocupar a mesma posição gênica, além de os alelos IA e IB apresentarem codominância entre si. Um indivíduo com genótipo IAIB apresenta fenótipo sanguíneo:",
    opcoes: [
      "A, com o alelo IB completamente mascarado",
      "AB, expressando simultaneamente as características dos dois alelos",
      "B, com o alelo IA completamente mascarado",
      "O, sem expressão de nenhum dos dois alelos",
      "impossível de existir, já que IA e IB não podem estar juntos",
    ],
    correta: 1,
    explicacao:
      "Na codominância, ao contrário da dominância completa, os dois alelos se expressam simultaneamente e de forma igualmente perceptível no fenótipo do heterozigoto; um indivíduo com genótipo IAIB expressa características de ambos os alelos, resultando no tipo sanguíneo AB, que apresenta tanto o antígeno A quanto o antígeno B na superfície das hemácias.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "No sistema sanguíneo ABO, o alelo i (recessivo) não produz nenhum antígeno na superfície das hemácias, sendo recessivo em relação a IA e IB. Um indivíduo com tipo sanguíneo O necessariamente possui genótipo:",
    opcoes: [
      "IAi, heterozigoto com um alelo IA",
      "ii, homozigoto recessivo para os dois alelos i",
      "IBi, heterozigoto com um alelo IB",
      "IAIB, com os dois alelos dominantes presentes",
      "impossível de determinar, mesmo sabendo o fenótipo",
    ],
    correta: 1,
    explicacao:
      "Como o tipo sanguíneo O resulta da ausência dos antígenos A e B, e tanto IA quanto IB são dominantes sobre i, um indivíduo só apresenta o fenótipo O quando é homozigoto recessivo para os dois alelos, ou seja, genótipo ii — qualquer presença de IA ou IB, mesmo em heterozigose, já produziria o antígeno correspondente e um fenótipo diferente de O.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a herança da cor dos olhos em humanos, uma característica poligênica, ou seja, controlada por múltiplos genes atuando em conjunto, ao contrário das características mendelianas simples estudadas por Mendel em ervilhas, controladas por um único gene. Uma consequência da herança poligênica é que ela costuma resultar em:",
    opcoes: [
      "apenas duas categorias fenotípicas possíveis, sem qualquer variação intermediária",
      "uma ampla variação contínua de fenótipos possíveis, em vez de categorias bem definidas e discretas",
      "uma herança idêntica à observada em características mendelianas simples",
      "a ausência completa de qualquer influência genética",
      "um padrão de herança exclusivamente ligado ao sexo",
    ],
    correta: 1,
    explicacao:
      "Como vários genes contribuem simultaneamente para a característica, cada um com efeito aditivo pequeno, a herança poligênica tende a produzir uma gama contínua de fenótipos possíveis, em vez das poucas categorias bem definidas típicas de uma característica controlada por um único gene, como a cor da semente de ervilha estudada por Mendel — é esse tipo de herança que explica variações contínuas como altura, cor da pele e cor dos olhos em humanos.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a herança ligada ao sexo, um padrão em que o gene responsável por determinada característica está localizado no cromossomo X, e não em um autossomo. O daltonismo, uma condição hereditária que afeta a percepção de certas cores, é um exemplo clássico de herança recessiva ligada ao X, o que explica por que essa condição é:",
    opcoes: [
      "muito mais comum em mulheres do que em homens",
      "muito mais comum em homens do que em mulheres",
      "igualmente comum entre homens e mulheres, sem qualquer diferença",
      "exclusiva de mulheres, nunca afetando homens",
      "sem qualquer relação com os cromossomos sexuais",
    ],
    correta: 1,
    explicacao:
      "Como os homens possuem apenas um cromossomo X (e um Y), basta uma única cópia do alelo recessivo do daltonismo nesse X para manifestar a condição; as mulheres, com dois cromossomos X, precisam de duas cópias do alelo recessivo (uma em cada X) para manifestar o daltonismo, sendo mais frequentemente apenas portadoras assintomáticas com um X normal e um X afetado — daí a maior prevalência da condição entre homens.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um heredograma (árvore genealógica genética) de uma família em que uma característica recessiva aparece em filhos de pais que não manifestam essa característica. Esse padrão de herança, no qual a característica 'pula' uma geração, aparecendo em netos mas não em filhos, é consistente com uma herança:",
    opcoes: [
      "dominante, na qual pelo menos um dos pais deveria obrigatoriamente manifestar a característica",
      "recessiva, na qual os pais são heterozigotos portadores sem manifestar a característica",
      "impossível de ocorrer geneticamente",
      "exclusivamente ligada ao cromossomo Y",
      "que não segue nenhum padrão de herança mendeliana",
    ],
    correta: 1,
    explicacao:
      "Quando uma característica recessiva aparece em um filho de dois pais que não a manifestam, isso indica que ambos os pais são heterozigotos portadores (Aa), cada um carregando uma cópia silenciosa do alelo recessivo; a combinação de dois alelos recessivos, um de cada pai portador, é o que permite à característica recessiva reaparecer no filho, mesmo estando ausente fenotipicamente na geração dos pais.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um casal deseja saber a probabilidade de seus futuros filhos herdarem determinada doença genética autossômica recessiva rara, sabendo que ambos os pais são heterozigotos portadores (Aa). Considerando um casal que já teve três filhos, todos sem a doença (fenótipo dominante), a probabilidade de que o próximo filho, o quarto, manifeste a doença (seja homozigoto recessivo) é de:",
    opcoes: [
      "0%, pois já tiveram três filhos sem a doença",
      "75%, pois a probabilidade acumula a cada filho sem a doença",
      "25%, pois cada gestação é um evento independente das anteriores",
      "100%, já que a doença precisa aparecer eventualmente",
      "50%, pois a média entre os filhos deve se aproximar de 50%",
    ],
    correta: 2,
    explicacao:
      "Cada gestação é um evento genético independente, e a probabilidade de 25% de o filho ser homozigoto recessivo (aa) se aplica igualmente a cada nova gestação, independentemente dos resultados dos filhos anteriores — assim como o resultado de um lançamento de moeda não é afetado pelos lançamentos anteriores, a genética não tem 'memória' das gestações passadas para compensar ou equilibrar as probabilidades.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa um cruzamento entre duas plantas de ervilha, ambas heterozigotas para duas características diferentes, cor da semente (A/a) e textura da semente (B/b), com os genes localizados em cromossomos diferentes (AaBb × AaBb). Entre os 16 descendentes esperados proporcionalmente (segundo a proporção 9:3:3:1), o número esperado de descendentes que apresentem ambas as características recessivas (semente verde e rugosa, aabb) é de:",
    opcoes: [
      "9 em 16",
      "3 em 16",
      "1 em 16",
      "4 em 16",
      "16 em 16",
    ],
    correta: 2,
    explicacao:
      "Na proporção clássica 9:3:3:1 de um cruzamento di-híbrido, a categoria que representa o duplo recessivo (aabb, ambas as características recessivas) corresponde à menor fração, 1 em 16 — resultado que também pode ser calculado multiplicando as probabilidades independentes de cada característica isoladamente ser recessiva: 1/4 (aa) × 1/4 (bb) = 1/16.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a herança da hemofilia, uma doença recessiva ligada ao cromossomo X. Um casal em que a mãe é portadora (heterozigota) e o pai não tem hemofilia decide ter filhos. Considerando apenas os filhos do sexo masculino desse casal, a probabilidade de um filho homem herdar a hemofilia é de:",
    opcoes: [
      "25%",
      "0%",
      "50%",
      "100%",
      "75%",
    ],
    correta: 2,
    explicacao:
      "Como os filhos homens recebem o cromossomo Y do pai e o cromossomo X da mãe, e a mãe portadora tem um X normal e um X com o alelo da hemofilia, cada filho homem tem 50% de chance de herdar o X afetado da mãe (manifestando a hemofilia, já que não há um segundo X para mascará-la) e 50% de chance de herdar o X normal (sem a doença) — o pai, nesse caso, não influencia diretamente esse cálculo, já que contribui apenas com o Y para os filhos homens.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador estuda um caso de epistasia, fenômeno no qual um gene interfere na expressão fenotípica de outro gene diferente, não alélico a ele — um padrão de interação gênica que vai além das leis clássicas de Mendel para uma única característica. Um exemplo é a cor da pelagem em labradores, na qual um gene determina se o pigmento será preto ou marrom, mas outro gene, separado, determina se esse pigmento será depositado na pelagem ou não (resultando, quando não depositado, em pelagem dourada, independentemente do primeiro gene). Esse tipo de interação demonstra que:",
    opcoes: [
      "toda característica hereditária é sempre determinada por um único gene",
      "a epistasia é idêntica à codominância em todos os aspectos",
      "algumas características fenotípicas resultam da interação entre dois ou mais genes diferentes, não apenas de um único par de alelos isolado",
      "genes diferentes nunca podem interagir entre si",
      "a cor da pelagem de cães não tem qualquer base genética",
    ],
    correta: 2,
    explicacao:
      "A epistasia mostra que a genética real vai muito além do modelo simplificado de um único gene determinando uma única característica, como nas ervilhas de Mendel: em muitos casos, um gene pode 'silenciar' ou modificar a expressão de outro gene diferente, criando padrões de herança mais complexos que exigem considerar a ação combinada de múltiplos genes para prever corretamente o fenótipo final.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a diferença entre um alelo letal recessivo, que causa a morte do indivíduo apenas quando em homozigose, e um alelo letal dominante, que causaria a morte mesmo em heterozigose. Um exemplo de alelo letal recessivo em ratos é o gene que, em homozigose, impede o desenvolvimento embrionário completo, mas que, em heterozigose, produz apenas uma alteração de cor da pelagem sem prejudicar a sobrevivência. Ao cruzar dois ratos heterozigotos para esse alelo letal recessivo, a proporção fenotípica esperada entre os descendentes sobreviventes (excluindo os que morrem antes do nascimento) é alterada, resultando em uma proporção aproximada de:",
    opcoes: [
      "3 dominantes : 1 recessivo, exatamente como em uma característica mendeliana comum sem letalidade",
      "1 dominante : 2 heterozigotos : 1 recessivo, sem qualquer alteração",
      "2 heterozigotos (pelagem alterada) : 1 homozigoto dominante (pelagem normal), já que os homozigotos recessivos morrem antes de nascer",
      "todos os descendentes sobreviventes homozigotos recessivos",
      "nenhum descendente sobrevivente, em qualquer proporção",
    ],
    correta: 2,
    explicacao:
      "Como o cruzamento entre dois heterozigotos normalmente produziria a proporção 1:2:1 (AA:Aa:aa), mas os homozigotos recessivos (aa) morrem antes do nascimento nesse caso de letalidade recessiva, a proporção observada entre os nascidos vivos se altera para aproximadamente 1 AA : 2 Aa, ou seja, 1 de pelagem normal para cada 2 de pelagem alterada — um desvio da proporção mendeliana clássica que intrigou geneticistas até ser explicado pela letalidade embrionária do genótipo homozigoto recessivo.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre características determinadas exclusivamente pelo genótipo e características influenciadas também pelo ambiente. A altura final de uma pessoa, por exemplo, depende tanto de fatores genéticos (herdados dos pais) quanto de fatores ambientais, como nutrição durante a infância. Esse tipo de característica, resultante da interação entre genes e ambiente, é chamado de:",
    opcoes: [
      "exclusivamente genético, sem qualquer influência ambiental",
      "exclusivamente ambiental, sem qualquer base genética",
      "multifatorial",
      "mendeliano simples, controlado por um único gene",
      "impossível de ser estudado pela genética",
    ],
    correta: 2,
    explicacao:
      "Características multifatoriais resultam da combinação de múltiplos genes e de fatores ambientais atuando juntos, o que as diferencia das características mendelianas simples estudadas por Mendel, determinadas exclusivamente por um único gene, praticamente sem influência ambiental perceptível — a altura, o peso e diversas outras características humanas comuns se encaixam nessa categoria multifatorial mais complexa.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um heredograma no qual uma característica aparece em todas as gerações, sempre que pelo menos um dos pais a manifesta, sem 'pular' gerações. Esse padrão de transmissão contínua, sem portadores assintomáticos ocultos, é mais consistente com uma herança:",
    opcoes: [
      "recessiva, na qual são necessárias duas cópias do alelo para manifestar a característica",
      "impossível de ocorrer em qualquer padrão genético conhecido",
      "dominante, na qual basta uma cópia do alelo para manifestar a característica",
      "exclusivamente ligada ao cromossomo Y, restrita a homens",
      "que não segue qualquer padrão hereditário identificável",
    ],
    correta: 2,
    explicacao:
      "Em uma herança dominante, basta que um dos pais possua ao menos uma cópia do alelo dominante para que a característica se manifeste tanto nesse pai quanto, potencialmente, em seus descendentes; como não há portadores 'silenciosos' capazes de esconder o alelo dominante (ele sempre se expressa quando presente), esse padrão tende a aparecer de forma contínua nas gerações, sem o efeito de 'pular gerações' típico das características recessivas.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o uso do quadro de Punnett, uma ferramenta visual criada pelo geneticista Reginald Punnett para prever as combinações genotípicas possíveis resultantes de um cruzamento, organizando os gametas de cada progenitor nas margens de uma grade. A principal utilidade dessa ferramenta é:",
    opcoes: [
      "medir diretamente a altura de uma planta",
      "substituir completamente a necessidade de qualquer cruzamento real",
      "visualizar de forma organizada todas as combinações possíveis entre os gametas dos dois progenitores, facilitando o cálculo de proporções genotípicas e fenotípicas",
      "determinar a cor exata de uma flor sem qualquer informação genética prévia",
      "eliminar toda variabilidade genética de uma população",
    ],
    correta: 2,
    explicacao:
      "O quadro de Punnett organiza sistematicamente todas as combinações possíveis entre os gametas produzidos por cada progenitor, permitindo visualizar e calcular com facilidade as proporções genotípicas e fenotípicas esperadas na descendência de um cruzamento — uma ferramenta amplamente usada até hoje no ensino e na prática da genética básica.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa por que os resultados dos experimentos de Mendel com ervilhas, embora publicados em 1866, permaneceram praticamente desconhecidos pela comunidade científica até serem redescobertos de forma independente por outros pesquisadores por volta de 1900. Uma possível explicação para essa falta de reconhecimento inicial é que:",
    opcoes: [
      "Mendel nunca publicou seus resultados em nenhum meio científico",
      "os resultados de Mendel estavam completamente incorretos, sendo corrigidos décadas depois",
      "a abordagem estatística e quantitativa de Mendel era incomum para a biologia da época, dificultando sua compreensão e valorização imediata pela comunidade científica",
      "não existia interesse científico em hereditariedade no século XIX",
      "Mendel trabalhava com animais, não com plantas, o que confundiu outros cientistas",
    ],
    correta: 2,
    explicacao:
      "O uso pioneiro de Mendel de métodos estatísticos e quantitativos rigorosos para analisar padrões de herança era incomum para a biologia da época, mais descritiva e qualitativa, o que pode ter dificultado o reconhecimento imediato da importância de seu trabalho; foi só décadas depois, quando outros cientistas redescobriram padrões semelhantes de forma independente, que a obra de Mendel foi resgatada e reconhecida como fundamental para o nascimento da genética moderna.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a herança da polidactilia, uma condição em que a pessoa nasce com dedos extras nas mãos ou nos pés, geralmente causada por um alelo dominante. Um indivíduo com polidactilia, filho de dois pais sem essa condição, provavelmente teve sua característica originada por:",
    opcoes: [
      "herança normal de um alelo recessivo de ambos os pais",
      "influência exclusivamente ambiental, sem qualquer componente genético",
      "uma mutação nova, já que nenhum dos pais apresenta o alelo dominante para transmiti-lo",
      "um erro de diagnóstico, já que isso seria geneticamente impossível",
      "contaminação por radiação durante a gestação, obrigatoriamente",
    ],
    correta: 2,
    explicacao:
      "Como a polidactilia costuma ser causada por um alelo dominante, ao menos um dos pais deveria apresentar a condição para transmiti-la por herança normal; quando nenhum dos pais a manifesta, a explicação mais provável é que uma mutação nova tenha surgido espontaneamente nas células germinativas de um dos pais ou no próprio embrião, originando o alelo dominante pela primeira vez naquela linhagem familiar, sem relação com herança de gerações anteriores.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a probabilidade combinada de dois eventos genéticos independentes ocorrerem simultaneamente em um mesmo indivíduo, aplicando a regra do produto da probabilidade. Se a chance de um filho herdar a característica A é de 1/2, e a chance de herdar a característica B, controlada por um gene diferente e não relacionado, também é de 1/2, a probabilidade de esse filho herdar ambas as características simultaneamente é de:",
    opcoes: [
      "1/2",
      "1",
      "1/8",
      "1/4",
      "3/4",
    ],
    correta: 3,
    explicacao:
      "Para eventos genéticos independentes, a probabilidade combinada de ambos ocorrerem é o produto das probabilidades individuais: 1/2 × 1/2 = 1/4. Essa regra do produto é a base matemática usada para calcular a probabilidade de proporções fenotípicas em cruzamentos envolvendo múltiplas características, como no cruzamento di-híbrido que gera a proporção 9:3:3:1.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Nos experimentos de Mendel com ervilhas, ele cruzou plantas de linhagem pura (homozigotas) de semente lisa com plantas de linhagem pura de semente rugosa, obtendo na primeira geração (F1) apenas plantas de semente lisa. Esse resultado indica que a característica 'semente lisa' é, em relação à 'semente rugosa', uma característica:",
    opcoes: [
      "recessiva",
      "codominante",
      "ligada ao sexo",
      "dominante",
      "letal",
    ],
    correta: 3,
    explicacao:
      "Como toda a geração F1, heterozigota para o gene em questão, apresentou apenas o fenótipo liso, isso indica que o alelo para semente lisa é dominante sobre o alelo para semente rugosa, que ficou mascarado nessa geração — a característica rugosa reapareceria apenas na geração seguinte (F2), ao cruzar os heterozigotos de F1 entre si.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "facil",
    enunciado:
      "Um estudante analisa a notação genética padrão usada para representar alelos, na qual letras maiúsculas costumam indicar alelos dominantes e letras minúsculas indicam alelos recessivos. Um indivíduo de genótipo 'Bb' para determinado gene é classificado como:",
    opcoes: [
      "homozigoto dominante",
      "homozigoto recessivo",
      "portador de três alelos diferentes",
      "heterozigoto",
      "estéril geneticamente",
    ],
    correta: 3,
    explicacao:
      "O genótipo Bb combina um alelo dominante (B) com um alelo recessivo (b), caracterizando um indivíduo heterozigoto para esse gene; esse indivíduo manifestará o fenótipo dominante, já que o alelo B mascara o efeito do alelo b, mas carrega o alelo recessivo, podendo transmiti-lo a seus descendentes.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante realiza um cruzamento entre dois indivíduos heterozigotos (Cc × Cc) para uma característica de dominância completa. Entre os descendentes esperados na proporção 3:1, a fração que corresponde a indivíduos heterozigotos (Cc), e não homozigotos dominantes (CC), é de:",
    opcoes: [
      "um quarto (1 em 4) do total de descendentes",
      "três quartos (3 em 4) do total de descendentes",
      "a totalidade (4 em 4) dos descendentes",
      "metade (2 em 4) do total de descendentes",
      "nenhum dos descendentes",
    ],
    correta: 3,
    explicacao:
      "Na proporção genotípica 1 CC : 2 Cc : 1 cc, os heterozigotos (Cc) representam 2 partes em 4, ou seja, metade do total de descendentes — apesar de CC e Cc juntos formarem os 3/4 de fenótipo dominante na proporção fenotípica 3:1, é importante distinguir que, dentro desse grupo dominante, a proporção interna entre CC e Cc é de 1 para 2.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o cruzamento entre um indivíduo homozigoto dominante (DD) e um indivíduo heterozigoto (Dd) para determinada característica. A proporção fenotípica esperada entre os descendentes desse cruzamento é de:",
    opcoes: [
      "50% dominante, 50% recessivo",
      "75% dominante, 25% recessivo",
      "25% dominante, 75% recessivo",
      "100% com fenótipo dominante, sem qualquer descendente recessivo",
      "100% com fenótipo recessivo",
    ],
    correta: 3,
    explicacao:
      "Como o progenitor DD só produz gametas D, e o progenitor Dd produz gametas D e d em igual proporção, todos os descendentes resultantes receberão pelo menos um alelo D (formando genótipos DD ou Dd), o que garante que 100% dos descendentes apresentem o fenótipo dominante, mesmo que metade deles seja heterozigota e portadora do alelo recessivo.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre a primeira lei de Mendel (segregação dos alelos de um único gene) e a segunda lei de Mendel (segregação independente de genes diferentes). A segunda lei só é válida sem exceções quando os genes analisados estão localizados:",
    opcoes: [
      "sempre no mesmo cromossomo, próximos um do outro",
      "exclusivamente no cromossomo X",
      "exclusivamente no cromossomo Y",
      "em cromossomos diferentes, ou muito distantes em um mesmo cromossomo",
      "em qualquer posição, sem qualquer restrição",
    ],
    correta: 3,
    explicacao:
      "A segregação independente pressupõe que os genes analisados se comportem de forma autônoma um em relação ao outro durante a formação dos gametas, o que ocorre normalmente quando estão em cromossomos diferentes; genes muito próximos em um mesmo cromossomo tendem a ser herdados juntos com mais frequência (um fenômeno chamado de ligação gênica), o que pode desviar os resultados observados da proporção clássica 9:3:3:1 prevista pela segunda lei.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um geneticista estuda dois genes que, ao contrário do esperado pela segunda lei de Mendel, não se segregam de forma totalmente independente, aparecendo juntos na descendência com frequência maior do que a proporção 9:3:3:1 previria. Esse desvio da segregação independente é explicado pelo fenômeno de:",
    opcoes: [
      "codominância entre os dois genes",
      "dominância incompleta entre os dois genes",
      "mutação espontânea recorrente",
      "ligação gênica, no qual genes muito próximos em um mesmo cromossomo tendem a ser herdados juntos",
      "poliploidia do organismo estudado",
    ],
    correta: 3,
    explicacao:
      "Quando dois genes estão localizados muito próximos um do outro em um mesmo cromossomo, eles tendem a ser transmitidos juntos aos gametas com mais frequência do que separadamente, já que a probabilidade de ocorrer crossing-over exatamente entre eles durante a meiose é menor quanto mais próximos estiverem — esse fenômeno de ligação gênica foi uma das primeiras exceções conhecidas à segunda lei de Mendel, explicada posteriormente pela localização física dos genes nos cromossomos.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a árvore genealógica de uma família em que uma característica recessiva ligada ao cromossomo X aparece exclusivamente em indivíduos do sexo masculino ao longo de várias gerações, nunca em mulheres, embora estas possam ser portadoras. Esse padrão de herança é consistente com o observado em condições como:",
    opcoes: [
      "a polidactilia, uma condição dominante autossômica",
      "qualquer característica controlada por genes em autossomos",
      "condições exclusivamente controladas pelo cromossomo Y",
      "a hemofilia e o daltonismo, condições recessivas ligadas ao X",
      "características poligênicas sem qualquer relação com os cromossomos sexuais",
    ],
    correta: 3,
    explicacao:
      "Hemofilia e daltonismo são exemplos clássicos de condições recessivas ligadas ao cromossomo X, que tendem a se manifestar preferencialmente em homens (que têm apenas um X e, portanto, precisam de uma única cópia do alelo recessivo para manifestar a condição), enquanto mulheres, com dois cromossomos X, costumam ser portadoras assintomáticas, precisando de duas cópias do alelo recessivo (uma situação mais rara) para manifestar a condição.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre um gene e um alelo, dois termos frequentemente confundidos na genética básica. Enquanto o gene é o segmento de DNA que codifica determinada característica, o alelo é:",
    opcoes: [
      "sinônimo exato de gene, sem qualquer diferença de significado",
      "uma estrutura presente apenas em cromossomos sexuais",
      "o cromossomo inteiro que contém o gene",
      "uma versão específica desse gene, podendo haver duas ou mais versões diferentes na população",
      "uma proteína produzida diretamente pelo gene",
    ],
    correta: 3,
    explicacao:
      "O gene é a unidade de informação genética localizada em uma posição específica do cromossomo (o locus gênico), enquanto o alelo é uma das possíveis variantes ou versões desse gene — por exemplo, o gene que determina a cor da semente de ervilha pode existir na versão alelo A (amarela, dominante) ou alelo a (verde, recessiva), sendo ambos alelos do mesmo gene, ocupando a mesma posição em cromossomos homólogos.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a probabilidade de nascimento de meninos e meninas em uma família, um exemplo prático de aplicação da primeira lei de Mendel aos cromossomos sexuais humanos. Sabendo que a mulher é homozigota XX e o homem é XY, e que a determinação do sexo do filho depende de qual cromossomo sexual (X ou Y) o espermatozoide carrega, a probabilidade teórica de nascimento de um menino em cada gestação é de:",
    opcoes: [
      "25%",
      "75%",
      "100%",
      "50%",
      "0%",
    ],
    correta: 3,
    explicacao:
      "Como o pai produz espermatozoides com cromossomo X ou Y em proporção igual (50% cada), e a mãe só pode contribuir com um cromossomo X (já que é XX), a probabilidade teórica de o filho ser XY (menino) ou XX (menina) é de 50% para cada possibilidade, um princípio que segue exatamente a lógica da segregação dos alelos descrita na primeira lei de Mendel, aplicada aqui aos cromossomos sexuais.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa uma característica genética rara que, quando presente em homozigose, é letal ainda durante o desenvolvimento embrionário, impedindo o nascimento do indivíduo. Esse tipo de alelo, cuja presença em dose dupla impede a sobrevivência, é chamado de:",
    opcoes: [
      "alelo dominante comum, sem qualquer efeito letal",
      "alelo neutro, sem qualquer efeito no fenótipo",
      "alelo codominante",
      "alelo ligado exclusivamente ao cromossomo Y",
      "alelo letal",
    ],
    correta: 4,
    explicacao:
      "Um alelo letal é aquele cuja presença, geralmente em homozigose, compromete gravemente o desenvolvimento do organismo a ponto de impedir sua sobrevivência até o nascimento ou até uma idade reprodutiva; esse tipo de alelo, quando presente em heterozigose sem causar letalidade, pode inclusive persistir em uma população, sendo eliminado apenas quando dois portadores heterozigotos se cruzam e geram descendentes homozigotos.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o uso de símbolos padronizados em heredogramas: quadrados representam indivíduos do sexo masculino, círculos representam indivíduos do sexo feminino, e símbolos preenchidos (coloridos) indicam indivíduos afetados por determinada característica, enquanto símbolos vazios indicam indivíduos não afetados. Essa padronização visual é importante porque:",
    opcoes: [
      "elimina completamente a necessidade de qualquer análise genética adicional",
      "só pode ser usada para características dominantes, nunca recessivas",
      "substitui totalmente os cálculos de probabilidade em genética",
      "é exclusiva de heredogramas humanos, sem uso em outras espécies",
      "permite representar de forma clara e universal os padrões de herança de uma característica ao longo de várias gerações de uma família",
    ],
    correta: 4,
    explicacao:
      "A padronização de símbolos em heredogramas permite que geneticistas de diferentes lugares interpretem facilmente o padrão de transmissão de uma característica ao longo de gerações de uma família, identificando indícios sobre se a herança é dominante ou recessiva, autossômica ou ligada ao sexo, com base em como a característica se distribui entre homens, mulheres e diferentes gerações representadas na árvore genealógica.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa um cruzamento tri-híbrido hipotético, envolvendo três genes diferentes, cada um em um cromossomo distinto, todos em heterozigose nos dois progenitores (AaBbCc × AaBbCc). Aplicando o princípio da segregação independente e a regra do produto de probabilidades, a fração esperada de descendentes que sejam homozigotos recessivos para as três características simultaneamente (aabbcc) é de:",
    opcoes: [
      "1/16",
      "1/4",
      "1/8",
      "3/64",
      "1/64",
    ],
    correta: 4,
    explicacao:
      "Como cada característica isolada, em um cruzamento entre heterozigotos, tem probabilidade 1/4 de resultar em homozigoto recessivo, e as três características são controladas por genes independentes (em cromossomos diferentes), a probabilidade combinada é o produto das três probabilidades individuais: 1/4 × 1/4 × 1/4 = 1/64. Esse tipo de cálculo mostra como a regra do produto se estende facilmente para qualquer número de características independentes.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre uma linhagem pura (também chamada de linhagem homozigota), usada por Mendel como ponto de partida de seus experimentos, e uma linhagem híbrida. Uma linhagem pura para determinada característica, ao ser autofecundada por várias gerações sucessivas, tende a produzir descendentes:",
    opcoes: [
      "com grande variação de fenótipos a cada nova geração",
      "sempre heterozigotos, nunca homozigotos",
      "com número de cromossomos diferente a cada geração",
      "estéreis, incapazes de se reproduzir novamente",
      "sempre idênticos entre si e aos progenitores para aquela característica",
    ],
    correta: 4,
    explicacao:
      "Uma linhagem pura é homozigota para a característica em questão (por exemplo, AA ou aa), e como um homozigoto só pode produzir gametas de um único tipo para aquele gene, a autofecundação repetida mantém a população geneticamente estável e uniforme para essa característica ao longo das gerações, sem introduzir variação — foi justamente o uso dessas linhagens puras bem definidas que permitiu a Mendel controlar cuidadosamente seus experimentos de cruzamento.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a herança de um gene autossômico dominante que causa uma doença genética rara, mas não letal, em humanos. Um casal em que um dos cônjuges é heterozigoto afetado (Aa) e o outro não possui o alelo da doença (aa) decide ter filhos. A probabilidade de que um filho desse casal herde a doença é de:",
    opcoes: [
      "25%",
      "100%",
      "0%",
      "75%",
      "50%",
    ],
    correta: 4,
    explicacao:
      "O progenitor heterozigoto (Aa) produz gametas A e a em igual proporção (50% cada), enquanto o progenitor sem a doença (aa) só produz gametas a; combinando-os, metade dos descendentes será Aa (herdando a doença, já que o alelo é dominante) e a outra metade será aa (sem a doença), resultando em uma probabilidade de 50% de um filho herdar a condição.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a razão pela qual, em um cruzamento envolvendo duas características diferentes controladas por genes em cromossomos distintos (di-hibridismo), a análise pode ser simplificada tratando cada característica separadamente e depois combinando as probabilidades. Essa abordagem, conhecida como método do desdobramento (ou ramificação), é válida porque:",
    opcoes: [
      "todas as características genéticas são sempre idênticas entre si em termos de herança",
      "não existe qualquer relação matemática entre as diferentes características",
      "o método só funciona quando os genes estão no mesmo cromossomo",
      "esse método sempre produz resultados incorretos e deve ser evitado",
      "os genes em cromossomos diferentes segregam de forma independente, permitindo calcular cada característica isoladamente antes de combinar os resultados",
    ],
    correta: 4,
    explicacao:
      "Como a segunda lei de Mendel garante que genes em cromossomos diferentes se segreguem de forma independente durante a formação dos gametas, é matematicamente válido calcular a proporção esperada de cada característica separadamente (como se fossem cruzamentos mendelianos simples independentes) e depois multiplicar as probabilidades para obter a proporção combinada, um atalho que evita a construção de quadros de Punnett muito grandes e complexos para cruzamentos com muitas características.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a herança de albinismo, uma condição genética recessiva que resulta na ausência de pigmentação normal na pele, nos cabelos e nos olhos. Um casal não albino, mas ambos portadores heterozigotos do alelo recessivo, tem quatro filhos. Estatisticamente, o número esperado de filhos albinos entre os quatro, embora sujeito a variação ao acaso em uma amostra pequena, seria de aproximadamente:",
    opcoes: [
      "4 filhos, já que todos deveriam ser albinos",
      "0 filhos, já que a condição nunca se manifestaria nessa família",
      "2 filhos, já que a probabilidade seria de 50%",
      "3 filhos, já que a probabilidade seria de 75%",
      "1 filho, já que a probabilidade individual é de 25% por gestação",
    ],
    correta: 4,
    explicacao:
      "Com uma probabilidade individual de 25% por gestação (cruzamento Aa × Aa), o valor esperado estatisticamente entre quatro filhos seria de aproximadamente 1 filho albino (25% de 4), embora, na prática, com uma amostra tão pequena de apenas quatro gestações, o resultado real observado em uma família específica possa variar bastante do valor médio esperado, por se tratar de eventos de probabilidade e não de uma garantia determinística.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o conceito de dominância completa, no qual o alelo dominante se expressa integralmente no fenótipo do heterozigoto, mascarando totalmente o alelo recessivo. Esse foi o padrão de herança observado por Mendel em todas as sete características que ele estudou em ervilhas. Posteriormente, outros geneticistas descobriram exceções a esse padrão simples, como a dominância incompleta e a codominância, o que demonstra que:",
    opcoes: [
      "as leis de Mendel estavam completamente erradas e foram totalmente refutadas",
      "a dominância completa é o único padrão de herança que realmente existe na natureza",
      "Mendel nunca observou nenhum padrão real de herança em seus experimentos",
      "não existe qualquer relação entre os experimentos de Mendel e a genética moderna",
      "os princípios básicos de Mendel continuam válidos, mas a forma como os alelos interagem no fenótipo pode variar entre diferentes características e organismos",
    ],
    correta: 4,
    explicacao:
      "Os princípios fundamentais descobertos por Mendel — a segregação dos alelos e sua segregação independente — continuam sendo válidos e centrais para a genética moderna; o que se descobriu posteriormente foi que a forma específica como os alelos interagem para produzir o fenótipo (dominância completa, incompleta, codominância, entre outras) pode variar conforme o gene e o organismo estudado, ampliando e refinando, mas não invalidando, o modelo original de Mendel.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a aplicação prática da genética mendeliana no melhoramento genético de plantas cultivadas, no qual agricultores e pesquisadores selecionam e cruzam plantas com características desejáveis, como maior resistência a pragas ou maior produtividade. Esse processo de seleção artificial, baseado em princípios mendelianos de herança, permite:",
    opcoes: [
      "eliminar completamente qualquer necessidade de reprodução das plantas",
      "criar instantaneamente novas espécies sem qualquer processo gradual",
      "impedir totalmente qualquer variação genética nas plantas cultivadas",
      "produzir plantas idênticas geneticamente sem qualquer cruzamento",
      "aumentar gradualmente a frequência de alelos desejáveis em uma população cultivada ao longo de sucessivas gerações de cruzamento seletivo",
    ],
    correta: 4,
    explicacao:
      "Ao selecionar sistematicamente plantas com as características desejadas para servir de progenitoras nas gerações seguintes, os melhoristas exploram os princípios da herança mendeliana para aumentar gradualmente, ao longo de várias gerações, a frequência dos alelos responsáveis pelas características de interesse na população cultivada, um processo mais lento, mas conceitualmente similar ao que ocorre na seleção natural, só que direcionado por escolhas humanas deliberadas.",
  },
  {
    materia: "biologia",
    tema: "Genética mendeliana",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa o cruzamento recíproco, técnica utilizada para verificar se uma característica hereditária tem herança autossômica (não ligada ao sexo) ou está ligada ao cromossomo X. Nesse procedimento, são realizados dois cruzamentos: um entre uma fêmea de determinado fenótipo e um macho do fenótipo oposto, e outro invertendo o fenótipo de cada sexo dos progenitores. Se a característica analisada for autossômica, é esperado que os dois cruzamentos recíprocos produzam:",
    opcoes: [
      "resultados sempre completamente opostos entre os dois cruzamentos",
      "descendência exclusivamente do sexo feminino em ambos os cruzamentos",
      "descendência estéril em um dos dois cruzamentos, mas não no outro",
      "resultados que dependem apenas da idade dos progenitores, e não dos alelos herdados",
      "proporções fenotípicas semelhantes na descendência, independentemente de qual progenitor carrega cada alelo",
    ],
    correta: 4,
    explicacao:
      "Como genes autossômicos estão localizados em cromossomos não sexuais, presentes em igual número tanto em machos quanto em fêmeas, a herança dessas características não depende de qual progenitor carrega determinado alelo, de modo que cruzamentos recíprocos autossômicos produzem proporções de genótipo e fenótipo semelhantes na descendência. Já em características ligadas ao cromossomo X, cruzamentos recíprocos costumam gerar proporções diferentes entre machos e fêmeas, já que o macho recebe seu único cromossomo X exclusivamente da mãe.",
  },
];
