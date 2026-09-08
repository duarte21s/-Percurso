/* Atomística e tabela periódica (50 questões).
   Modelos atômicos, número atômico e de massa, isótopos, distribuição
   eletrônica, famílias e períodos, propriedades periódicas e íons.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "O número atômico de um elemento químico, representado pela letra Z, corresponde à quantidade de:",
    opcoes: [
      "prótons existentes no núcleo do átomo",
      "nêutrons existentes no núcleo do átomo",
      "elétrons da camada mais externa",
      "prótons somados aos nêutrons",
      "partículas presentes na eletrosfera",
    ],
    correta: 0,
    explicacao:
      "O número atômico é a identidade do elemento: dois átomos com o mesmo Z são do mesmo elemento, mesmo que difiram em massa ou carga. A soma de prótons e nêutrons é o número de massa A, e a contagem de elétrons só coincide com Z quando o átomo é neutro.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "Um átomo neutro possui número atômico 17 e número de massa 35. As quantidades de prótons, nêutrons e elétrons desse átomo são, respectivamente:",
    opcoes: [
      "17, 18 e 17",
      "17, 35 e 17",
      "18, 17 e 18",
      "35, 17 e 35",
      "17, 17 e 18",
    ],
    correta: 0,
    explicacao:
      "O número atômico dá os 17 prótons, e como o átomo é neutro há também 17 elétrons. Os nêutrons saem da diferença A − Z = 35 − 17 = 18. Confundir A com o número de nêutrons é o erro que produz a alternativa com 35 nêutrons.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "O modelo atômico proposto por John Dalton, no início do século XIX, descrevia o átomo como sendo:",
    opcoes: [
      "uma esfera maciça, indivisível e sem carga elétrica",
      "uma esfera positiva com elétrons incrustados",
      "um núcleo denso cercado por elétrons em órbitas definidas",
      "uma nuvem de probabilidade em torno do núcleo",
      "um conjunto de quarks ligados por glúons",
    ],
    correta: 0,
    explicacao:
      "Dalton trabalhava antes da descoberta do elétron, então seu átomo era a bolinha maciça e indivisível. A esfera positiva com elétrons incrustados é o modelo de Thomson; o núcleo com órbitas definidas é Bohr; e a nuvem de probabilidade pertence ao modelo quântico.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "O experimento de Rutherford, no qual partículas alfa foram lançadas contra uma fina lâmina de ouro, levou à conclusão de que o átomo possui:",
    opcoes: [
      "um núcleo pequeno, denso e positivo, cercado por muito espaço vazio",
      "massa uniformemente distribuída por todo o seu volume",
      "elétrons fixos em posições determinadas na superfície",
      "carga elétrica total positiva em qualquer situação",
      "prótons e nêutrons espalhados por toda a eletrosfera",
    ],
    correta: 0,
    explicacao:
      "A maior parte das partículas atravessou a lâmina sem desvio, o que indica espaço vazio; as poucas que voltaram bateram em algo pequeno, denso e positivo — o núcleo. Se a massa fosse uniforme, como no modelo de Thomson, nenhuma partícula teria sido rebatida para trás.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "Dois átomos são chamados de isótopos quando apresentam entre si a seguinte relação:",
    opcoes: [
      "mesmo número de prótons e diferentes números de nêutrons",
      "mesmo número de nêutrons e diferentes números de prótons",
      "mesmo número de massa e diferentes números atômicos",
      "mesmo número de elétrons e diferentes números de massa",
      "mesma massa e mesma carga elétrica",
    ],
    correta: 0,
    explicacao:
      "Isótopos são átomos do mesmo elemento que diferem apenas na quantidade de nêutrons, como o carbono-12 e o carbono-14. Mesmo número de massa com Z diferente define isóbaros; mesmo número de nêutrons com Z diferente define isótonos.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "Na tabela periódica moderna, os elementos estão organizados em ordem crescente de uma propriedade fundamental, que é o:",
    opcoes: [
      "número atômico",
      "número de massa",
      "raio atômico",
      "ponto de fusão",
      "número de nêutrons",
    ],
    correta: 0,
    explicacao:
      "Moseley demonstrou que a ordenação por número atômico corrige as inversões que apareciam na tabela de Mendeleev, ordenada por massa. É por isso que o argônio, mais pesado, vem antes do potássio: seu Z é menor.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "Os elementos flúor, cloro, bromo e iodo pertencem a uma mesma família da tabela periódica, conhecida pelo nome de:",
    opcoes: [
      "halogênios",
      "metais alcalinos",
      "gases nobres",
      "calcogênios",
      "metais alcalinoterrosos",
    ],
    correta: 0,
    explicacao:
      "Os halogênios formam a família 17 e têm sete elétrons na camada de valência, o que explica a forte tendência a ganhar um elétron. Os calcogênios são a família 16, encabeçada pelo oxigênio; os alcalinos são a família 1.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "Os gases nobres apresentam baixíssima reatividade química em condições normais. A explicação para esse comportamento está no fato de que esses elementos possuem:",
    opcoes: [
      "camada de valência completa, com oito elétrons na maioria dos casos",
      "núcleo instável que impede reações químicas",
      "massa atômica elevada demais para participar de ligações",
      "apenas um elétron na última camada, facilmente perdido",
      "carga elétrica positiva permanente",
    ],
    correta: 0,
    explicacao:
      "A camada de valência completa deixa o átomo em configuração de baixa energia, sem ganho em ganhar, perder ou compartilhar elétrons. O hélio é a exceção quanto ao número: sua camada única se completa com dois elétrons, não oito.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "Um átomo neutro de sódio possui 11 elétrons. Ao se transformar no cátion Na⁺, esse átomo passa a apresentar:",
    opcoes: [
      "10 elétrons e 11 prótons",
      "11 elétrons e 10 prótons",
      "12 elétrons e 11 prótons",
      "10 elétrons e 10 prótons",
      "11 elétrons e 12 prótons",
    ],
    correta: 0,
    explicacao:
      "A carga positiva unitária indica que o átomo perdeu um elétron, ficando com 10; o número de prótons não muda, pois alterar o núcleo mudaria o elemento. Essa é a regra geral: em reações químicas comuns, só a eletrosfera se modifica.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "facil",
    enunciado:
      "Os períodos da tabela periódica correspondem às linhas horizontais. Todos os elementos que se encontram em um mesmo período apresentam em comum:",
    opcoes: [
      "o mesmo número de camadas eletrônicas ocupadas",
      "o mesmo número de elétrons na camada de valência",
      "propriedades químicas praticamente idênticas",
      "o mesmo número de nêutrons no núcleo",
      "a mesma massa atômica",
    ],
    correta: 0,
    explicacao:
      "O número do período indica quantas camadas eletrônicas o átomo utiliza no estado fundamental. Já o número de elétrons de valência é o que se repete ao longo de uma coluna, e é por isso que a semelhança química se dá entre elementos da mesma família, não do mesmo período.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "A distribuição eletrônica do átomo de cálcio, de número atômico 20, no estado fundamental e segundo o diagrama de Linus Pauling, termina no subnível:",
    opcoes: [
      "4s²",
      "3d²",
      "3p⁶",
      "4p²",
      "3s²",
    ],
    correta: 0,
    explicacao:
      "A ordem energética leva a 1s² 2s² 2p⁶ 3s² 3p⁶ 4s², somando exatamente 20 elétrons. O subnível 4s tem energia menor que o 3d, por isso é preenchido antes — inverter essa ordem é o erro que leva à resposta com 3d².",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Um elemento apresenta distribuição eletrônica 1s² 2s² 2p⁶ 3s² 3p⁵. Com base nessa configuração, é correto afirmar que ele se localiza no:",
    opcoes: [
      "quinto período, família dos calcogênios",
      "terceiro período, família dos halogênios",
      "terceiro período, família dos metais alcalinos",
      "segundo período, família dos gases nobres",
      "sétimo período, família dos metais de transição",
    ],
    correta: 1,
    explicacao:
      "A camada mais externa é a terceira, o que fixa o período; e ela contém 2 + 5 = 7 elétrons, característica dos halogênios. Trata-se do cloro, Z = 17. O expoente 5 do subnível p não indica o período, apenas completa a contagem de valência.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Ao se descer em uma mesma família da tabela periódica, do topo para a base, o raio atômico dos elementos tende a:",
    opcoes: [
      "diminuir, pois a carga nuclear cresce e atrai mais os elétrons",
      "aumentar, pois novas camadas eletrônicas são acrescentadas",
      "permanecer constante, pois a família define o tamanho",
      "aumentar apenas nos metais e diminuir nos ametais",
      "diminuir, pois os elétrons passam a ocupar subníveis internos",
    ],
    correta: 1,
    explicacao:
      "Descer na coluna significa ocupar uma camada a mais, e o efeito do afastamento supera o aumento da carga nuclear. Ao longo de um período, ao contrário, a camada é a mesma e o núcleo mais carregado puxa a eletrosfera, encolhendo o átomo.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Considerando o comportamento periódico da eletronegatividade, o elemento mais eletronegativo da tabela periódica, desconsiderando os gases nobres, é o:",
    opcoes: [
      "oxigênio",
      "flúor",
      "césio",
      "cloro",
      "nitrogênio",
    ],
    correta: 1,
    explicacao:
      "A eletronegatividade cresce da esquerda para a direita e de baixo para cima, e o flúor ocupa justamente o canto superior direito da região reativa. O oxigênio vem logo atrás, e o césio, no canto oposto, é dos menos eletronegativos.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "A energia de ionização é a energia necessária para retirar um elétron de um átomo isolado no estado gasoso. Essa propriedade, ao longo de um período da tabela, tende a:",
    opcoes: [
      "crescer da direita para a esquerda, acompanhando o aumento do raio",
      "crescer da esquerda para a direita, acompanhando a redução do raio",
      "permanecer constante em todo o período",
      "diminuir da esquerda para a direita, pois há mais elétrons",
      "variar de forma aleatória, sem tendência definida",
    ],
    correta: 1,
    explicacao:
      "Quanto menor o raio e maior a carga nuclear efetiva, mais firmemente o elétron está preso, então mais energia é preciso investir para arrancá-lo. Por isso metais alcalinos, de raio grande, ionizam com facilidade, enquanto gases nobres exigem muita energia.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Um átomo apresenta 26 prótons, 30 nêutrons e 24 elétrons. A respeito dessa espécie química, é correto afirmar que se trata de:",
    opcoes: [
      "um ânion de carga 2−, com número de massa 56",
      "um cátion de carga 2+, com número de massa 56",
      "um átomo neutro com número de massa 50",
      "um cátion de carga 6+, com número de massa 30",
      "um ânion de carga 4−, com número de massa 54",
    ],
    correta: 1,
    explicacao:
      "Com 26 prótons e apenas 24 elétrons, sobram duas cargas positivas, logo é um cátion 2+. O número de massa soma prótons e nêutrons: 26 + 30 = 56, o que identifica o íon Fe²⁺. Elétrons não entram no cálculo da massa por terem massa desprezível.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Espécies isoeletrônicas são aquelas que possuem a mesma quantidade de elétrons. Entre as espécies Na⁺ (Z = 11), Mg²⁺ (Z = 12), F⁻ (Z = 9), Cl⁻ (Z = 17) e K⁺ (Z = 19), são isoeletrônicas entre si:",
    opcoes: [
      "Na⁺, Cl⁻ e K⁺",
      "Na⁺, Mg²⁺ e F⁻",
      "Mg²⁺, Cl⁻ e F⁻",
      "F⁻, Cl⁻ e K⁺",
      "Na⁺, Mg²⁺ e K⁺",
    ],
    correta: 1,
    explicacao:
      "Na⁺ fica com 10 elétrons, Mg²⁺ também com 10 e F⁻ ganha um elétron chegando a 10 — todas com configuração de neônio. Cl⁻ tem 18 e K⁺ tem 18, formando outro par isoeletrônico, este com configuração de argônio.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "O modelo atômico de Bohr introduziu uma ideia que o modelo de Rutherford não continha e que explicava a estabilidade do átomo. Essa contribuição foi a de que os elétrons:",
    opcoes: [
      "estão distribuídos uniformemente em uma esfera positiva",
      "ocupam órbitas de energia definida e só emitem energia ao mudar de nível",
      "podem ocupar qualquer posição ao redor do núcleo",
      "possuem massa igual à do próton",
      "encontram-se no interior do núcleo junto aos prótons",
    ],
    correta: 1,
    explicacao:
      "Pela física clássica, um elétron acelerado em órbita irradiaria energia e cairia no núcleo; Bohr postulou níveis quantizados nos quais o elétron não emite. A emissão ou absorção só ocorre no salto entre níveis, o que explica as raias dos espectros atômicos.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "O teste de chama produz cores características para diferentes metais: o sódio dá amarelo intenso e o cobre, verde-azulado. A explicação para esse fenômeno, segundo o modelo de Bohr, é que:",
    opcoes: [
      "os prótons do núcleo se rearranjam ao receber calor",
      "elétrons excitados retornam a níveis inferiores emitindo luz de energia definida",
      "os nêutrons são convertidos em fótons de luz visível",
      "a massa atômica determina diretamente a cor emitida",
      "os elétrons se desprendem definitivamente do átomo, ionizando-o",
    ],
    correta: 1,
    explicacao:
      "O calor promove elétrons a níveis mais energéticos e, ao voltarem, eles devolvem a diferença de energia como fóton. Como os níveis são característicos de cada elemento, a cor funciona como assinatura — princípio por trás dos fogos de artifício e da espectroscopia.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Os elementos que ocupam o bloco central da tabela periódica, entre as famílias 2 e 13, são classificados como metais de transição. Uma característica desses elementos é o preenchimento de elétrons no subnível:",
    opcoes: [
      "s",
      "d",
      "p",
      "f",
      "g",
    ],
    correta: 1,
    explicacao:
      "Os metais de transição têm o subnível d como último a receber elétrons, o que explica seus vários números de oxidação e a cor de muitos de seus compostos. Os elementos de transição interna, lantanídeos e actinídeos, preenchem o subnível f.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Um elemento químico possui número atômico 35. Ao formar um íon estável seguindo a regra do octeto, esse elemento tenderá a:",
    opcoes: [
      "perder 1 elétron, formando um cátion de carga 1+",
      "ganhar 1 elétron, formando um ânion de carga 1−",
      "ganhar 2 elétrons, formando um ânion de carga 2−",
      "perder 7 elétrons, formando um cátion de carga 7+",
      "permanecer neutro, pois já é estável",
    ],
    correta: 1,
    explicacao:
      "Com Z = 35 o bromo tem sete elétrons de valência, e ganhar um único elétron já completa o octeto — caminho muito mais econômico que perder sete. Por isso halogênios formam tipicamente ânions monovalentes, como no brometo de sódio.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Comparando o raio de um átomo neutro de sódio com o raio do cátion Na⁺, verifica-se que o cátion é menor. A razão para essa redução é que:",
    opcoes: [
      "o núcleo perde prótons ao formar o cátion",
      "a perda do elétron elimina a última camada e aumenta a atração sobre as restantes",
      "a massa do átomo diminui significativamente",
      "os nêutrons se aproximam uns dos outros no núcleo",
      "a carga positiva repele os elétrons para longe do núcleo",
    ],
    correta: 1,
    explicacao:
      "O sódio neutro tem três camadas e o Na⁺ fica com duas, além de manter os mesmos 11 prótons atraindo menos elétrons. Em ânions ocorre o oposto: mais elétrons na mesma camada aumentam a repulsão e o raio cresce em relação ao átomo neutro.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Os elementos hidrogênio, lítio, sódio e potássio aparecem na mesma coluna da tabela periódica, mas o hidrogênio não é considerado um metal alcalino. Isso ocorre porque o hidrogênio:",
    opcoes: [
      "possui dois elétrons na camada de valência",
      "pertence, na verdade, à família dos gases nobres",
      "é um ametal gasoso, com propriedades bastante distintas das dos alcalinos",
      "tem número atômico maior que o do lítio",
      "não forma ligações químicas com outros elementos",
    ],
    correta: 2,
    explicacao:
      "O hidrogênio compartilha com os alcalinos apenas o único elétron de valência; no comportamento, é um gás ametálico que forma moléculas diatômicas e pode tanto ceder quanto receber elétron. Por isso muitas tabelas o posicionam à parte.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Dois átomos, um com 20 prótons e 20 nêutrons e outro com 18 prótons e 22 nêutrons, apresentam entre si a relação de:",
    opcoes: [
      "isótopos, pois têm o mesmo número atômico",
      "isótonos, pois têm o mesmo número de nêutrons",
      "isóbaros, pois têm o mesmo número de massa",
      "isoeletrônicos, pois têm a mesma carga",
      "alótropos, pois formam a mesma substância",
    ],
    correta: 2,
    explicacao:
      "Ambos somam 40 no número de massa, mas têm Z diferentes — logo, isóbaros e elementos distintos. Isótopos exigiriam mesmo Z, e isótonos exigiriam a mesma quantidade de nêutrons, que aqui são 20 e 22.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Grafite e diamante são formados exclusivamente por átomos de carbono, mas apresentam dureza, condutividade e aparência muito diferentes. Esse fenômeno é chamado de:",
    opcoes: [
      "isotopia",
      "isomeria de cadeia",
      "alotropia",
      "isobaria",
      "polimorfismo iônico",
    ],
    correta: 2,
    explicacao:
      "Alotropia é a existência de formas diferentes de um mesmo elemento, causada pelo arranjo distinto dos átomos: no diamante cada carbono se liga a quatro vizinhos em rede tridimensional, no grafite formam-se camadas hexagonais. Oxigênio e ozônio são outro exemplo clássico.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "A massa atômica do cloro é frequentemente indicada como 35,5 u, valor que não corresponde a nenhum átomo individual desse elemento. A explicação para esse número fracionário é que ele representa:",
    opcoes: [
      "a soma das massas do próton e do nêutron dividida por dois",
      "a massa do átomo mais o valor da carga elétrica",
      "a média ponderada das massas dos isótopos naturais do cloro",
      "um erro de medida tolerado por convenção internacional",
      "a massa do cloro no estado gasoso apenas",
    ],
    correta: 2,
    explicacao:
      "O cloro natural é uma mistura de cloro-35 e cloro-37, e a massa tabelada pondera cada isótopo por sua abundância. Como o cloro-35 é bem mais abundante, a média fica próxima de 35 e não no meio do caminho entre 35 e 37.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Um elemento tem configuração eletrônica de valência 4s² 4p³. O número de elétrons que faltam para completar seu octeto e a família a que pertence são, respectivamente:",
    opcoes: [
      "5 elétrons e família 13",
      "3 elétrons e família 13",
      "3 elétrons e família 15",
      "2 elétrons e família 16",
      "1 elétron e família 17",
    ],
    correta: 2,
    explicacao:
      "A valência soma 2 + 3 = 5 elétrons, faltando 3 para o octeto, e o total de elétrons de valência 5 caracteriza a família 15, a do nitrogênio. Trata-se do arsênio, que fica no quarto período por usar a camada 4.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "As substâncias classificadas como semimetais ou metaloides, caso do silício e do germânio, despertam grande interesse tecnológico porque:",
    opcoes: [
      "são os melhores condutores elétricos conhecidos",
      "não reagem com nenhuma outra substância química",
      "conduzem eletricidade de forma intermediária, servindo de base para semicondutores",
      "possuem os maiores raios atômicos da tabela periódica",
      "existem apenas no estado gasoso à temperatura ambiente",
    ],
    correta: 2,
    explicacao:
      "Os metaloides ficam na fronteira entre metais e ametais e conduzem eletricidade em condições controláveis, o que permite fabricar transistores e chips. Justamente por não serem excelentes condutores é que se tornam úteis: a condução pode ser ligada e desligada.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "O princípio da exclusão de Pauli estabelece um limite para a ocupação dos orbitais atômicos. Segundo esse princípio, cada orbital comporta no máximo:",
    opcoes: [
      "2 elétrons, obrigatoriamente com spins iguais",
      "6 elétrons, distribuídos em pares",
      "2 elétrons, obrigatoriamente com spins opostos",
      "8 elétrons, completando o octeto",
      "1 elétron, sem exceção",
    ],
    correta: 2,
    explicacao:
      "Dois elétrons não podem ter todos os números quânticos iguais, então dividem o mesmo orbital apenas se diferirem no spin. Os 6 elétrons do subnível p vêm de três orbitais com dois elétrons cada, e os 8 do octeto somam um subnível s e um p.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Uma amostra contém dois isótopos de um elemento: 75% de átomos com massa 63 u e 25% com massa 65 u. A massa atômica média desse elemento é de:",
    opcoes: [
      "64,0 u",
      "64,5 u",
      "63,5 u",
      "63,0 u",
      "65,0 u",
    ],
    correta: 2,
    explicacao:
      "A média ponderada vale (63 × 0,75) + (65 × 0,25) = 47,25 + 16,25 = 63,5 u — o valor do cobre. Fazer a média simples entre 63 e 65 daria 64,0 u, e é exatamente o erro que a alternativa vizinha explora.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Os metais alcalinoterrosos, que formam a família 2 da tabela periódica, apresentam como característica comum a tendência a:",
    opcoes: [
      "ganhar 2 elétrons, formando ânions bivalentes",
      "perder 1 elétron, formando cátions monovalentes",
      "perder 2 elétrons, formando cátions bivalentes",
      "compartilhar 4 elétrons em ligações covalentes",
      "manter-se inertes, sem formar íons",
    ],
    correta: 2,
    explicacao:
      "Com dois elétrons na camada de valência, perder ambos deixa o átomo com configuração de gás nobre. Cálcio, magnésio e bário formam assim os íons Ca²⁺, Mg²⁺ e Ba²⁺, presentes em ossos, clorofila e contrastes radiológicos.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "O elemento de número atômico 26 pertence ao quarto período da tabela periódica. Sua distribuição eletrônica no estado fundamental é 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶, e a camada de valência desse átomo contém:",
    opcoes: [
      "6 elétrons, situados no subnível 3d",
      "8 elétrons, somando 4s e 3d",
      "2 elétrons, situados no subnível 4s",
      "14 elétrons, somando 3p, 4s e 3d",
      "26 elétrons, o total do átomo",
    ],
    correta: 2,
    explicacao:
      "A camada de valência é a de maior número quântico principal, aqui a quarta, ocupada apenas pelos dois elétrons do 4s. O subnível 3d, embora preenchido por último em energia, pertence à terceira camada e por isso não conta como valência.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Mendeleev, ao organizar sua tabela em 1869, deixou lacunas para elementos ainda não descobertos e previu propriedades para eles. Essa atitude foi possível porque ele percebeu que:",
    opcoes: [
      "todos os elementos possuíam o mesmo número de nêutrons",
      "os elementos podiam ser transformados uns nos outros por reações",
      "a tabela deveria conter exatamente cem posições",
      "as propriedades dos elementos se repetiam periodicamente conforme a massa crescia",
      "os gases nobres seriam os elementos mais reativos",
    ],
    correta: 3,
    explicacao:
      "A repetição regular de propriedades permitiu reservar espaços e estimar massa, densidade e comportamento dos elementos faltantes, como o gálio e o germânio, confirmados anos depois. A ordenação por número atômico veio depois, com Moseley.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Ao comparar o raio atômico dos elementos sódio, magnésio, alumínio e silício, todos do terceiro período, espera-se encontrar a seguinte ordem decrescente de tamanho:",
    opcoes: [
      "silício > alumínio > magnésio > sódio",
      "magnésio > sódio > silício > alumínio",
      "alumínio > silício > sódio > magnésio",
      "sódio > magnésio > alumínio > silício",
      "todos possuem praticamente o mesmo raio",
    ],
    correta: 3,
    explicacao:
      "Dentro de um período o número de camadas não muda, mas a carga nuclear cresce e puxa os elétrons para mais perto, encolhendo o átomo da esquerda para a direita. Por isso o sódio, o primeiro da linha, é o maior dos quatro.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "A regra de Hund orienta a distribuição dos elétrons dentro de um mesmo subnível. Segundo essa regra, os elétrons devem primeiro:",
    opcoes: [
      "emparelhar-se dois a dois no primeiro orbital disponível",
      "ocupar sempre o orbital de maior energia do subnível",
      "distribuir-se de modo que todos tenham spins opostos",
      "ocupar orbitais vazios individualmente antes de formar pares",
      "preencher o subnível seguinte antes de completar o atual",
    ],
    correta: 3,
    explicacao:
      "Elétrons se repelem, então espalhar-se por orbitais vazios com spins paralelos é energeticamente favorável; só depois começa o emparelhamento. É essa regra que explica por que o nitrogênio tem três elétrons desemparelhados em seu subnível 2p.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Ao classificar os elementos em metais, ametais e gases nobres, uma propriedade que distingue claramente os metais é o fato de eles apresentarem:",
    opcoes: [
      "alta eletronegatividade e tendência a ganhar elétrons",
      "camada de valência completa em todos os casos",
      "estado gasoso predominante em temperatura ambiente",
      "boa condutividade elétrica e térmica, além de baixa energia de ionização",
      "incapacidade de formar ligas entre si",
    ],
    correta: 3,
    explicacao:
      "O modelo do mar de elétrons explica ao mesmo tempo a condução, o brilho e a maleabilidade dos metais: os elétrons de valência circulam com liberdade. Ganhar elétrons e ter alta eletronegatividade são características dos ametais.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Um átomo no estado fundamental recebe energia suficiente para promover um elétron da camada 2 para a camada 3. Após esse processo, diz-se que o átomo se encontra:",
    opcoes: [
      "ionizado, tendo perdido definitivamente um elétron",
      "em estado fundamental de menor energia",
      "transformado em outro elemento químico",
      "no estado excitado, e tende a emitir energia ao retornar",
      "com o número de prótons alterado",
    ],
    correta: 3,
    explicacao:
      "Enquanto o elétron permanece em nível mais alto que o previsto, o átomo está excitado — situação instável que se desfaz com a emissão de um fóton. A ionização é diferente: nela o elétron abandona o átomo, o que exige energia bem maior.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "O íon O²⁻ possui número atômico 8. Sua distribuição eletrônica e a configuração de gás nobre que ele atinge são, respectivamente:",
    opcoes: [
      "1s² 2s² 2p⁴, correspondente ao hélio",
      "1s² 2s² 2p⁶ 3s², correspondente ao argônio",
      "1s² 2s², correspondente ao hélio",
      "1s² 2s² 2p⁶, correspondente ao neônio",
      "1s² 2s² 2p⁶ 3s² 3p⁶, correspondente ao argônio",
    ],
    correta: 3,
    explicacao:
      "O oxigênio neutro tem 8 elétrons; ganhando 2, chega a 10 e reproduz a configuração do neônio. É por buscar essa estabilidade que o oxigênio forma óxidos com carga 2− em compostos iônicos como o óxido de magnésio.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Ao longo de um mesmo período da tabela periódica, o caráter metálico dos elementos tende a diminuir da esquerda para a direita. A explicação mais adequada para essa tendência é o aumento:",
    opcoes: [
      "do número de camadas eletrônicas ocupadas pelos átomos",
      "da quantidade de nêutrons presentes no núcleo",
      "da massa atômica dos elementos ao longo da linha",
      "da atração do núcleo sobre os elétrons de valência, dificultando sua perda",
      "do raio atômico da esquerda para a direita",
    ],
    correta: 3,
    explicacao:
      "Ser metálico é, quimicamente, ter facilidade em ceder elétrons; à medida que a carga nuclear cresce e o raio diminui, os elétrons ficam mais presos e o elemento passa a se comportar como ametal. O número de camadas não muda dentro de um período.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Um elemento X forma um íon X³⁺ cuja distribuição eletrônica é 1s² 2s² 2p⁶. O número atômico do elemento X é:",
    opcoes: [
      "10",
      "7",
      "16",
      "13",
      "3",
    ],
    correta: 3,
    explicacao:
      "O íon tem 10 elétrons, e como perdeu três para formar a carga 3+, o átomo neutro tinha 13 — o alumínio. O erro comum é ler os 10 elétrons do íon como se fossem o número atômico, esquecendo de somar as cargas perdidas.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "Na notação ₁₇Cl³⁵, os números que acompanham o símbolo do elemento representam, respectivamente:",
    opcoes: [
      "o número de massa e o número atômico",
      "o número de nêutrons e o de elétrons",
      "a carga do íon e a massa molar",
      "o número atômico e o número de massa",
      "o período e a família na tabela periódica",
    ],
    correta: 3,
    explicacao:
      "Por convenção, o índice inferior à esquerda é o número atômico Z e o superior é o número de massa A. Daí se extraem 17 prótons e 18 nêutrons. Trocar a leitura dos dois índices é o deslize que compromete todo o resto do exercício.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "media",
    enunciado:
      "A afinidade eletrônica mede a energia envolvida quando um átomo neutro no estado gasoso recebe um elétron. Os elementos que apresentam os maiores valores dessa propriedade são os:",
    opcoes: [
      "metais alcalinos, que têm um único elétron de valência",
      "gases nobres, por já possuírem camada completa",
      "metais de transição, por terem subnível d incompleto",
      "halogênios, que ficam a um elétron de completar o octeto",
      "lantanídeos, por sua elevada massa atômica",
    ],
    correta: 3,
    explicacao:
      "Um halogênio ganha muito em estabilidade ao capturar apenas um elétron, então libera bastante energia nesse processo. Gases nobres praticamente não têm afinidade, porque o elétron extra iria para uma camada nova, e alcalinos preferem perder elétrons a ganhar.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Um elemento apresenta distribuição eletrônica terminada em 3d⁵ 4s¹, configuração que representa uma exceção ao preenchimento previsto pelo diagrama de Pauling. Essa anomalia ocorre porque:",
    opcoes: [
      "o subnível 4s comporta apenas um elétron em qualquer elemento",
      "o subnível 3d tem energia menor que a do 1s",
      "elétrons desemparelhados sempre são proibidos pela regra de Hund",
      "o átomo perdeu um elétron ao ser medido",
      "subníveis d semipreenchidos conferem estabilidade extra ao átomo",
    ],
    correta: 4,
    explicacao:
      "No cromo, promover um elétron do 4s para o 3d deixa cinco orbitais d com um elétron cada, arranjo de menor energia por simetria e menor repulsão. O cobre segue lógica parecida, atingindo 3d¹⁰ 4s¹ para completar o subnível d.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Comparando as espécies isoeletrônicas N³⁻ (Z = 7), O²⁻ (Z = 8), F⁻ (Z = 9), Na⁺ (Z = 11) e Mg²⁺ (Z = 12), todas com 10 elétrons, o maior raio pertence a:",
    opcoes: [
      "Mg²⁺, por ter a maior carga nuclear entre elas",
      "F⁻, por ser o mais eletronegativo",
      "Na⁺, por ser um metal alcalino",
      "todas, pois espécies isoeletrônicas têm raios iguais",
      "N³⁻, por ter a menor carga nuclear entre elas",
    ],
    correta: 4,
    explicacao:
      "Com o mesmo número de elétrons, quem manda no tamanho é a carga do núcleo: menos prótons significam atração mais fraca e nuvem mais expandida. O nitreto, com apenas 7 prótons puxando 10 elétrons, é o maior; o Mg²⁺, com 12, é o menor.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Os valores sucessivos de energia de ionização de um elemento, em kJ/mol, são 738, 1450, 7730 e 10 500. O grande salto observado entre a segunda e a terceira ionização indica que esse elemento possui:",
    opcoes: [
      "3 elétrons na camada de valência",
      "4 elétrons na camada de valência",
      "1 elétron na camada de valência",
      "7 elétrons na camada de valência",
      "2 elétrons na camada de valência",
    ],
    correta: 4,
    explicacao:
      "Os dois primeiros elétrons saem com relativa facilidade porque são de valência; o terceiro exige mais de cinco vezes mais energia, sinal de que já se está atacando uma camada interna completa. O padrão identifica o magnésio e sua família.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Um elemento X tem 4 elétrons de valência e pertence ao terceiro período; um elemento Y é um halogênio do segundo período. A fórmula mais provável do composto formado entre X e Y é:",
    opcoes: [
      "X₄Y",
      "XY₂",
      "X₂Y",
      "XY",
      "XY₄",
    ],
    correta: 4,
    explicacao:
      "X é o silício, que precisa compartilhar quatro elétrons, e Y é o flúor, que precisa de apenas um cada. São necessários quatro átomos de flúor para satisfazer um de silício, resultando em SiF₄. Inverter a proporção produz a fórmula X₄Y.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Um átomo de um elemento hipotético tem número de massa 80 e apresenta 45 nêutrons. Ao formar o ânion de carga 2−, o número de elétrons dessa espécie será de:",
    opcoes: [
      "35",
      "33",
      "45",
      "80",
      "37",
    ],
    correta: 4,
    explicacao:
      "O número atômico sai de 80 − 45 = 35, então o átomo neutro tem 35 elétrons; ganhando dois, chega a 37. O erro previsível é somar a carga ao número de prótons ou subtraí-la em vez de somá-la — em ânion, elétrons entram.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "A energia de ionização do neônio é muito maior que a do sódio, embora o sódio tenha mais prótons no núcleo. A explicação correta para esse fato é que o elétron a ser retirado do sódio:",
    opcoes: [
      "possui carga elétrica maior que a do elétron do neônio",
      "encontra-se no núcleo, e não na eletrosfera",
      "tem massa maior por pertencer a um elemento mais pesado",
      "está mais próximo do núcleo que qualquer elétron do neônio",
      "está em camada mais externa e é blindado pelas camadas internas",
    ],
    correta: 4,
    explicacao:
      "O sódio começa uma camada nova, e os dez elétrons internos blindam boa parte da carga nuclear, deixando o elétron 3s frouxamente preso. No neônio, o elétron a arrancar pertence a uma camada completa e próxima do núcleo, o que exige muito mais energia.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Um elemento possui dois isótopos naturais, de massas 10 u e 11 u. Sabendo que a massa atômica média tabelada vale 10,8 u, a abundância aproximada do isótopo mais pesado é de:",
    opcoes: [
      "20%",
      "50%",
      "60%",
      "40%",
      "80%",
    ],
    correta: 4,
    explicacao:
      "Chamando de x a fração do isótopo 11, tem-se 10(1 − x) + 11x = 10,8, o que dá x = 0,8, ou seja, 80% — o caso do boro. Uma conferência rápida: a média está bem mais perto de 11 que de 10, então o isótopo 11 tem de ser o predominante.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "A blindagem eletrônica é o efeito pelo qual elétrons internos reduzem a atração sentida pelos elétrons externos. Uma consequência direta desse efeito, observada na tabela periódica, é que:",
    opcoes: [
      "o raio atômico diminui ao se descer em uma família",
      "a eletronegatividade aumenta ao se descer em uma família",
      "os gases nobres se tornam reativos nos períodos superiores",
      "os metais de transição perdem elétrons do subnível d antes do s",
      "a energia de ionização diminui ao se descer em uma família",
    ],
    correta: 4,
    explicacao:
      "Quanto mais camadas internas houver, menor a carga nuclear efetiva sentida pelo elétron de valência, que fica mais fácil de arrancar — daí o césio ionizar mais facilmente que o lítio. Descer numa família aumenta o raio e reduz a eletronegatividade.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Considere um elemento cujo cátion bivalente é isoeletrônico do argônio, cujo número atômico é 18. O número atômico desse elemento e sua classificação são, respectivamente:",
    opcoes: [
      "16, ametal calcogênio",
      "18, gás nobre",
      "22, metal de transição",
      "19, metal alcalino",
      "20, metal alcalinoterroso",
    ],
    correta: 4,
    explicacao:
      "Se o cátion 2+ tem 18 elétrons, o átomo neutro tinha 20, o que identifica o cálcio. Perder dois elétrons é o comportamento típico da família 2, e por isso o cálcio aparece como Ca²⁺ em ossos, conchas e no calcário.",
  },
  {
    materia: "quimica",
    tema: "Atomística e tabela periódica",
    dificuldade: "dificil",
    enunciado:
      "Ao analisar a variação das propriedades periódicas, um estudante afirmou que o raio atômico e a energia de ionização se comportam de maneira oposta. Essa afirmação é:",
    opcoes: [
      "incorreta, pois as duas propriedades crescem no mesmo sentido",
      "correta apenas para os metais de transição",
      "incorreta, pois a energia de ionização não varia periodicamente",
      "correta apenas dentro de um mesmo período, nunca entre famílias",
      "correta, pois raios maiores implicam elétrons menos presos ao núcleo",
    ],
    correta: 4,
    explicacao:
      "Quanto maior o raio, mais distante e blindado está o elétron de valência, e menos energia é preciso para removê-lo — a relação inversa vale tanto ao longo dos períodos quanto ao descer nas famílias. As exceções pontuais não invalidam a tendência geral.",
  },
];
