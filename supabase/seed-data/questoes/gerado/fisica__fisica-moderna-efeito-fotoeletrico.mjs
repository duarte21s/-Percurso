/* Física moderna: efeito fotoelétrico (50 questões).
   Quantização da energia, fótons, efeito fotoelétrico, dualidade onda-
   partícula, modelo atômico, relatividade e radioatividade aplicada.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "O efeito fotoelétrico consiste na emissão de elétrons por uma superfície metálica quando ela é iluminada. Esse fenômeno foi explicado por Einstein com base na ideia de que a luz:",
    opcoes: [
      "comporta-se exclusivamente como onda contínua.",
      "é composta por pacotes discretos de energia, os fótons.",
      "possui massa de repouso elevada.",
      "aquece o metal até a fusão.",
      "provoca reações químicas na superfície.",
    ],
    correta: 1,
    explicacao:
      "Einstein retomou a hipótese de quantização de Planck e propôs que a luz transfere energia em pacotes individuais. Cada fóton interage com um único elétron. Essa explicação lhe rendeu o Nobel de 1921 e marcou o nascimento da física quântica.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A energia de um fóton é proporcional à frequência da radiação e é calculada pela expressão:",
    opcoes: [
      "E = m·c²",
      "E = h·f",
      "E = k·q/d²",
      "E = m·v²/2",
      "E = R·i²",
    ],
    correta: 1,
    explicacao:
      "A relação E = h·f, com h sendo a constante de Planck, mostra que fótons de luz violeta carregam mais energia que os de luz vermelha. Como f = c/λ, a energia também pode ser escrita em função do comprimento de onda. É a equação fundadora da teoria quântica.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "No efeito fotoelétrico, aumentar a intensidade da luz incidente, mantendo sua frequência, provoca:",
    opcoes: [
      "aumento da energia cinética máxima de cada elétron emitido.",
      "aumento do número de elétrons emitidos, sem alterar a energia de cada um.",
      "redução do número de elétrons emitidos.",
      "emissão de elétrons mesmo abaixo da frequência de corte.",
      "aquecimento sem qualquer emissão.",
    ],
    correta: 1,
    explicacao:
      "Intensidade maior significa mais fótons por segundo, e portanto mais elétrons arrancados. A energia de cada elétron, porém, depende exclusivamente da frequência. Esse resultado contrariava a física clássica e só a hipótese dos fótons o explicou.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Abaixo de uma determinada frequência, chamada frequência de corte, não há emissão de elétrons, por mais intensa que seja a luz. Isso ocorre porque:",
    opcoes: [
      "os fótons individuais não têm energia suficiente para arrancar um elétron.",
      "a luz de baixa frequência não atinge a superfície metálica.",
      "o metal se torna isolante nessas condições.",
      "os elétrons se deslocam para o núcleo atômico.",
      "a intensidade da luz é sempre nula nessa faixa.",
    ],
    correta: 0,
    explicacao:
      "Como cada elétron interage com um único fóton, aumentar o número de fótons não compensa a insuficiência individual de energia. É preciso que h·f supere a função trabalho do metal. Esse comportamento de limiar é incompatível com o modelo ondulatório clássico.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A função trabalho de um metal, no contexto do efeito fotoelétrico, corresponde:",
    opcoes: [
      "à energia cinética máxima dos elétrons emitidos.",
      "à energia mínima necessária para arrancar um elétron da superfície.",
      "à energia total dos fótons incidentes.",
      "ao calor absorvido pelo metal.",
      "à massa de repouso do elétron.",
    ],
    correta: 1,
    explicacao:
      "Cada metal tem sua função trabalho característica, que representa a barreira a ser vencida. A energia que sobra após vencê-la aparece como energia cinética do elétron. Metais alcalinos, com função trabalho baixa, emitem elétrons já com luz visível.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A dualidade onda-partícula estabelece que a luz e outras entidades quânticas:",
    opcoes: [
      "comportam-se apenas como ondas em qualquer experimento.",
      "comportam-se apenas como partículas em qualquer experimento.",
      "apresentam comportamento ondulatório ou corpuscular conforme o experimento.",
      "não podem ser estudadas experimentalmente.",
      "mudam de natureza com a temperatura.",
    ],
    correta: 2,
    explicacao:
      "Fenômenos de interferência e difração revelam o caráter ondulatório; o efeito fotoelétrico e o efeito Compton revelam o corpuscular. Nenhum experimento isolado mostra os dois simultaneamente. De Broglie estendeu essa dualidade também à matéria.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A hipótese de De Broglie propôs que partículas materiais, como elétrons, também apresentam:",
    opcoes: [
      "carga elétrica variável.",
      "comportamento ondulatório, com comprimento de onda associado.",
      "massa infinita em altas velocidades.",
      "temperatura própria mensurável.",
      "ausência total de energia cinética.",
    ],
    correta: 1,
    explicacao:
      "De Broglie associou a cada partícula um comprimento de onda inversamente proporcional a seu momento. A previsão foi confirmada experimentalmente pela difração de elétrons em cristais. É esse princípio que sustenta o microscópio eletrônico.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "As células fotovoltaicas, usadas em painéis solares, convertem energia luminosa em elétrica com base em um fenômeno relacionado ao:",
    opcoes: [
      "efeito Joule",
      "efeito fotoelétrico",
      "efeito Doppler",
      "efeito estufa",
      "efeito Hall",
    ],
    correta: 1,
    explicacao:
      "Os fótons transferem energia a elétrons do material semicondutor, liberando-os para conduzir corrente. A eficiência depende da faixa de frequências aproveitada pelo material. É a aplicação tecnológica mais difundida do efeito fotoelétrico.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A constante de Planck, presente na equação da energia do fóton, tem valor aproximado de:",
    opcoes: [
      "6,6 × 10⁻³⁴ J·s",
      "3 × 10⁸ J·s",
      "9 × 10⁹ J·s",
      "1,6 × 10⁻¹⁹ J·s",
      "6 × 10²³ J·s",
    ],
    correta: 0,
    explicacao:
      "O valor extremamente pequeno explica por que os efeitos quânticos não são perceptíveis no cotidiano. Ela aparece em praticamente todas as equações da física quântica. O valor 1,6 × 10⁻¹⁹ corresponde à carga elementar, e 3 × 10⁸ à velocidade da luz.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Comparando fótons de luz vermelha e de luz violeta, é correto afirmar que os de luz violeta possuem:",
    opcoes: [
      "menor frequência e menor energia.",
      "maior frequência e maior energia.",
      "maior comprimento de onda e maior energia.",
      "mesma energia, diferindo apenas na cor.",
      "energia nula.",
    ],
    correta: 1,
    explicacao:
      "No espectro visível, o violeta tem a maior frequência e o menor comprimento de onda, o que lhe confere maior energia por fóton. É por isso que a radiação ultravioleta, de frequência ainda maior, causa danos à pele que a luz vermelha não causa.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "O modelo atômico de Bohr introduziu a ideia de que os elétrons ocupam:",
    opcoes: [
      "qualquer órbita ao redor do núcleo.",
      "órbitas com energias bem definidas e quantizadas.",
      "posições fixas dentro do núcleo.",
      "regiões sem qualquer relação com a energia.",
      "trajetórias aleatórias e imprevisíveis.",
    ],
    correta: 1,
    explicacao:
      "Bohr postulou níveis de energia discretos, nos quais o elétron não irradia. A transição entre níveis envolve emissão ou absorção de fótons de energia exatamente igual à diferença entre eles. O modelo explicou o espectro do hidrogênio com precisão notável.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Quando um elétron salta de um nível de energia mais alto para outro mais baixo em um átomo, ocorre:",
    opcoes: [
      "absorção de um fóton.",
      "emissão de um fóton com energia igual à diferença entre os níveis.",
      "aumento da massa do átomo.",
      "perda de um próton do núcleo.",
      "conversão do elétron em nêutron.",
    ],
    correta: 1,
    explicacao:
      "A energia perdida pelo elétron é liberada como radiação eletromagnética de frequência bem determinada. É por isso que cada elemento apresenta um espectro de emissão característico, usado para identificá-lo. A absorção corresponde ao processo inverso.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Os espectros de emissão dos elementos químicos são descontínuos, formados por linhas discretas. Essa característica indica que:",
    opcoes: [
      "os átomos emitem qualquer valor de energia.",
      "as energias dos níveis eletrônicos são quantizadas.",
      "os elementos não emitem radiação.",
      "a luz é sempre branca na origem.",
      "os elétrons têm carga variável.",
    ],
    correta: 1,
    explicacao:
      "Se as energias fossem contínuas, o espectro seria contínuo. As linhas correspondem exatamente às diferenças permitidas entre níveis, que são características de cada elemento. Essa técnica permitiu identificar o hélio no Sol antes de encontrá-lo na Terra.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Segundo a teoria da relatividade restrita de Einstein, a velocidade da luz no vácuo:",
    opcoes: [
      "é a mesma para todos os observadores inerciais.",
      "depende da velocidade da fonte que a emite.",
      "pode ser ultrapassada por partículas rápidas.",
      "varia conforme a direção de propagação.",
      "só é constante em referenciais acelerados.",
    ],
    correta: 0,
    explicacao:
      "A invariância da velocidade da luz é um dos dois postulados da relatividade restrita e contraria a soma clássica de velocidades. Dela decorrem a dilatação do tempo e a contração do comprimento. Nenhuma partícula com massa pode atingir essa velocidade.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A famosa equação E = m·c², da relatividade restrita, expressa:",
    opcoes: [
      "a conservação da quantidade de movimento.",
      "a força gravitacional entre dois corpos.",
      "a equivalência entre massa e energia.",
      "a energia cinética de um corpo lento.",
      "a lei da inércia em altas velocidades.",
    ],
    correta: 2,
    explicacao:
      "Massa e energia são manifestações da mesma grandeza, relacionadas por um fator enorme, o quadrado da velocidade da luz. É por isso que pequenas variações de massa liberam energias gigantescas em reações nucleares. Em reações químicas, a variação de massa é imperceptível.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A dilatação do tempo prevista pela relatividade restrita indica que, para um observador em repouso, um relógio em movimento muito rápido:",
    opcoes: [
      "adianta",
      "para completamente",
      "atrasa",
      "funciona normalmente",
      "inverte a marcha",
    ],
    correta: 2,
    explicacao:
      "Quanto mais próxima da velocidade da luz for a velocidade relativa, mais lentamente o tempo passa no referencial móvel, do ponto de vista do observador em repouso. O efeito é desprezível em velocidades cotidianas, mas precisa ser corrigido nos satélites do sistema GPS.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "O princípio da incerteza, formulado por Heisenberg, estabelece que é impossível determinar simultaneamente e com precisão arbitrária:",
    opcoes: [
      "a massa e a carga de uma partícula.",
      "a temperatura e o volume de um gás.",
      "a posição e a quantidade de movimento de uma partícula.",
      "a frequência e a cor de um fóton.",
      "o número de prótons e de nêutrons de um núcleo.",
    ],
    correta: 2,
    explicacao:
      "Quanto mais precisa a medida da posição, mais imprecisa a do momento, e vice-versa. Não se trata de limitação dos instrumentos, mas de uma propriedade fundamental da natureza quântica. O produto das incertezas tem como limite inferior uma constante ligada a h.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "O laser produz luz com características particulares. Entre elas, destaca-se o fato de a luz laser ser:",
    opcoes: [
      "policromática e difusa.",
      "invisível em qualquer situação.",
      "monocromática, coerente e altamente direcional.",
      "composta apenas por partículas com massa.",
      "gerada exclusivamente por reações nucleares.",
    ],
    correta: 2,
    explicacao:
      "A emissão estimulada faz os fótons saírem em fase e com a mesma frequência, o que produz um feixe estreito e intenso. Essas propriedades permitem aplicações em cirurgia, leitura de discos, telecomunicações e corte industrial.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Em um experimento de efeito fotoelétrico, dobrar a frequência da luz incidente, mantendo-a acima da frequência de corte, faz com que a energia cinética máxima dos elétrons emitidos:",
    opcoes: [
      "permaneça constante.",
      "reduza-se à metade.",
      "aumente, embora não necessariamente dobre.",
      "torne-se nula.",
      "dependa apenas da intensidade da luz.",
    ],
    correta: 2,
    explicacao:
      "A energia cinética é h·f menos a função trabalho: dobrar f dobra a primeira parcela, mas a subtração da função trabalho impede que o resultado final simplesmente dobre. O crescimento é linear com a frequência, com um deslocamento vertical dado pela função trabalho.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A radiação ultravioleta é mais nociva à pele que a luz visível porque seus fótons:",
    opcoes: [
      "têm maior comprimento de onda.",
      "são mais numerosos em qualquer situação.",
      "possuem energia suficiente para danificar moléculas biológicas.",
      "possuem massa de repouso elevada.",
      "propagam-se mais lentamente no ar.",
    ],
    correta: 2,
    explicacao:
      "A energia por fóton cresce com a frequência, e a do ultravioleta é alta o bastante para romper ligações químicas no DNA. A luz visível, de menor frequência, não produz esse efeito por mais intensa que seja — novamente, o limiar depende da frequência.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Sensores de presença e portas automáticas costumam empregar células fotoelétricas, cujo funcionamento se baseia:",
    opcoes: [
      "na variação de corrente quando a luz incidente é interrompida.",
      "no aquecimento do ar próximo ao sensor.",
      "na atração magnética entre a porta e o corpo.",
      "na dilatação térmica do vidro.",
      "na reflexão total do som ambiente.",
    ],
    correta: 0,
    explicacao:
      "Enquanto a luz incide sobre o sensor, há corrente; ao ser interrompida por uma pessoa, a corrente cessa e o circuito aciona o mecanismo. É uma aplicação direta da conversão de luz em sinal elétrico. Sensores infravermelhos usam princípio semelhante.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A radiação emitida espontaneamente por núcleos instáveis é chamada de radioatividade. As emissões alfa, beta e gama diferem, entre outros aspectos, quanto:",
    opcoes: [
      "à cor da luz produzida.",
      "à velocidade do som que geram.",
      "ao poder de penetração na matéria.",
      "à temperatura do material emissor.",
      "ao índice de refração do meio.",
    ],
    correta: 2,
    explicacao:
      "Partículas alfa são barradas por uma folha de papel, partículas beta por uma placa fina de alumínio e a radiação gama exige blindagem espessa de chumbo ou concreto. Essa diferença decorre da carga, da massa e da natureza de cada emissão.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A radiação gama, emitida em processos nucleares, é classificada como:",
    opcoes: [
      "partícula com carga positiva.",
      "fluxo de nêutrons livres.",
      "onda eletromagnética de altíssima frequência.",
      "onda mecânica longitudinal.",
      "corrente de elétrons de baixa energia.",
    ],
    correta: 2,
    explicacao:
      "Diferentemente das emissões alfa e beta, que são partículas, a radiação gama é eletromagnética, sem carga nem massa. Sua frequência elevadíssima confere grande energia por fóton e alto poder de penetração, o que exige blindagem robusta.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "A meia-vida de um material radioativo corresponde ao tempo necessário para que:",
    opcoes: [
      "todo o material se desintegre completamente.",
      "a massa do material dobre.",
      "a radiação emitida se torne visível.",
      "metade dos núcleos iniciais se desintegre.",
      "o material se transforme em energia pura.",
    ],
    correta: 3,
    explicacao:
      "Após uma meia-vida resta metade da amostra original; após duas, um quarto, e assim por diante. O decaimento é exponencial e nunca chega a zero em tempo finito. Meias-vidas variam de frações de segundo a bilhões de anos, conforme o isótopo.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra radioativa tem meia-vida de 8 dias. Após 24 dias, a fração de material original que ainda não se desintegrou é de:",
    opcoes: [
      "1/2",
      "1/3",
      "1/4",
      "1/8",
      "1/16",
    ],
    correta: 3,
    explicacao:
      "Vinte e quatro dias correspondem a três meias-vidas: a amostra cai para 1/2, depois 1/4 e finalmente 1/8. O decaimento é multiplicativo, não subtrativo. Esse comportamento exponencial é o que permite a datação por carbono-14.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A datação por carbono-14 permite estimar a idade de materiais de origem orgânica. O método se baseia:",
    opcoes: [
      "no aumento progressivo de carbono-14 após a morte do organismo.",
      "na quantidade de oxigênio absorvida pelo material.",
      "na temperatura em que o material foi encontrado.",
      "no decaimento do carbono-14 a partir do momento em que o organismo morre.",
      "na cor apresentada pelos fósseis.",
    ],
    correta: 3,
    explicacao:
      "Enquanto vivo, o organismo repõe carbono-14 pela alimentação e respiração; ao morrer, a reposição cessa e o isótopo passa a decair com meia-vida de cerca de 5 730 anos. Medindo a proporção restante, estima-se o tempo decorrido. O método é eficaz para até algumas dezenas de milhares de anos.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A fissão nuclear, utilizada em usinas nucleares, consiste na:",
    opcoes: [
      "união de núcleos leves, formando um núcleo maior.",
      "emissão de luz visível por átomos excitados.",
      "transformação de elétrons em prótons.",
      "divisão de um núcleo pesado em núcleos menores, com liberação de energia.",
      "condensação de vapor em água líquida.",
    ],
    correta: 3,
    explicacao:
      "O bombardeio de urânio-235 por nêutrons provoca a divisão do núcleo e libera energia junto com novos nêutrons, que sustentam a reação em cadeia. A fusão, ao contrário, une núcleos leves e é o processo que ocorre no Sol.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A fusão nuclear, processo que ocorre no interior das estrelas, caracteriza-se pela:",
    opcoes: [
      "quebra de núcleos pesados em fragmentos.",
      "emissão de elétrons pela superfície estelar.",
      "absorção de radiação gama pelo núcleo.",
      "união de núcleos leves formando núcleos mais pesados.",
      "condensação de gases interestelares.",
    ],
    correta: 3,
    explicacao:
      "No Sol, núcleos de hidrogênio se fundem formando hélio e liberando enormes quantidades de energia. O processo exige temperaturas e pressões altíssimas para vencer a repulsão elétrica entre os núcleos. Reproduzi-lo de forma controlada na Terra ainda é um desafio tecnológico.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A energia liberada em reações nucleares é muito maior que a de reações químicas porque, nas nucleares:",
    opcoes: [
      "há conversão de parte da massa dos núcleos em energia.",
      "as moléculas se rearranjam com mais rapidez.",
      "a temperatura inicial é sempre maior.",
      "os elétrons mudam de camada eletrônica.",
      "há maior número de átomos envolvidos.",
    ],
    correta: 0,
    explicacao:
      "A diferença de massa entre reagentes e produtos, multiplicada pelo quadrado da velocidade da luz, resulta em energias milhões de vezes maiores que as das ligações químicas. Reações químicas envolvem apenas elétrons das camadas externas, sem alterar núcleos.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Raios X são amplamente usados em diagnóstico médico. Eles são classificados como radiação:",
    opcoes: [
      "mecânica, semelhante ao som.",
      "corpuscular formada por prótons.",
      "térmica de baixa frequência.",
      "eletromagnética ionizante.",
      "visível ao olho humano.",
    ],
    correta: 3,
    explicacao:
      "Os raios X têm frequência muito alta e energia suficiente para arrancar elétrons de átomos, o que caracteriza radiação ionizante. Por isso o uso é controlado e os profissionais utilizam proteção. Sua absorção diferenciada por ossos e tecidos moles é o que forma a imagem.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Em um gráfico de energia cinética máxima dos elétrons em função da frequência da luz incidente, no efeito fotoelétrico, obtém-se uma reta cuja inclinação corresponde:",
    opcoes: [
      "à função trabalho do metal.",
      "à velocidade da luz.",
      "à carga do elétron.",
      "à constante de Planck.",
      "à intensidade luminosa.",
    ],
    correta: 3,
    explicacao:
      "A relação Ec = h·f − W é linear em f, com coeficiente angular h e intercepto negativo igual à função trabalho. Millikan mediu experimentalmente essa inclinação e obteve o valor de h, confirmando a teoria de Einstein.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "O modelo atômico atual descreve a região onde é mais provável encontrar o elétron. Essa região é chamada de:",
    opcoes: [
      "órbita fixa",
      "núcleo",
      "camada de valência única",
      "orbital",
      "nuvem de prótons",
    ],
    correta: 3,
    explicacao:
      "Diferentemente das órbitas bem definidas de Bohr, o modelo quântico trabalha com distribuições de probabilidade. O orbital é a região de maior chance de localizar o elétron, e sua forma depende dos números quânticos. O princípio da incerteza impede trajetórias precisas.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Sobre os fótons, é correto afirmar que eles:",
    opcoes: [
      "possuem massa de repouso elevada.",
      "possuem carga elétrica negativa.",
      "movem-se mais devagar que os elétrons.",
      "não possuem massa de repouso e viajam sempre à velocidade da luz no vácuo.",
      "só existem em materiais metálicos.",
    ],
    correta: 3,
    explicacao:
      "Sem massa de repouso, o fóton não pode existir em repouso: no vácuo, ele sempre se move a c. Ainda assim carrega energia e quantidade de movimento, o que permite a pressão de radiação. Sua carga elétrica é nula.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "O experimento da dupla fenda realizado com elétrons produz padrão de interferência, mesmo quando eles são lançados um a um. Esse resultado demonstra:",
    opcoes: [
      "que os elétrons colidem entre si durante o percurso.",
      "que os elétrons perdem carga ao atravessar as fendas.",
      "a inexistência dos elétrons.",
      "o comportamento ondulatório de partículas materiais.",
      "a validade exclusiva da física clássica.",
    ],
    correta: 3,
    explicacao:
      "O padrão de franjas só é explicável se cada elétron atravessar as duas fendas como onda de probabilidade. Ao tentar detectar por qual fenda ele passa, o padrão desaparece. É a demonstração mais direta da dualidade onda-partícula.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Em fornos de micro-ondas, as ondas eletromagnéticas aquecem os alimentos porque:",
    opcoes: [
      "provocam fissão dos núcleos atômicos.",
      "ionizam completamente os átomos do alimento.",
      "produzem radiação gama no interior do forno.",
      "reduzem a pressão dentro da cavidade.",
      "fazem as moléculas de água oscilarem, aumentando a agitação térmica.",
    ],
    correta: 4,
    explicacao:
      "As micro-ondas fazem as moléculas polares de água girarem rapidamente, e o atrito entre elas gera calor. A radiação não é ionizante e não torna o alimento radioativo. Alimentos secos aquecem muito menos por conterem pouca água.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A radiação ionizante distingue-se da não ionizante porque a ionizante:",
    opcoes: [
      "possui energia suficiente para arrancar elétrons de átomos.",
      "é sempre visível ao olho humano.",
      "propaga-se apenas em meios materiais.",
      "tem frequência menor que a das ondas de rádio.",
      "não transporta energia.",
    ],
    correta: 0,
    explicacao:
      "Raios X, radiação gama e ultravioleta de alta frequência são ionizantes e podem danificar moléculas biológicas. Ondas de rádio, micro-ondas e luz visível não têm energia por fóton suficiente para isso. O critério é a energia individual do fóton, não a intensidade.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A energia de um fóton pode ser aumentada, mantendo-se a natureza eletromagnética da radiação, por meio do aumento:",
    opcoes: [
      "da intensidade do feixe luminoso.",
      "do comprimento de onda.",
      "do número de fótons emitidos.",
      "da distância percorrida pela luz.",
      "da frequência da radiação.",
    ],
    correta: 4,
    explicacao:
      "A energia individual depende apenas da frequência, conforme E = h·f. Aumentar a intensidade eleva o número de fótons, não a energia de cada um. Como frequência e comprimento de onda são inversos, aumentar λ reduziria a energia.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A teoria da relatividade geral, publicada por Einstein em 1915, descreve a gravidade como:",
    opcoes: [
      "uma força de atração instantânea entre massas.",
      "um campo magnético de longo alcance.",
      "uma consequência da carga elétrica dos corpos.",
      "uma força repulsiva entre planetas.",
      "a curvatura do espaço-tempo provocada pela presença de massa e energia.",
    ],
    correta: 4,
    explicacao:
      "Corpos massivos deformam o espaço-tempo, e outros corpos seguem as trajetórias mais curtas nessa geometria curva. A teoria previu o desvio da luz por campos gravitacionais, confirmado em 1919 em observações feitas em Sobral, no Ceará.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Os satélites do sistema GPS precisam de correções relativísticas em seus relógios porque:",
    opcoes: [
      "a velocidade orbital e a gravidade alteram a passagem do tempo a bordo.",
      "os relógios atômicos são imprecisos por natureza.",
      "o campo magnético terrestre atrasa os sinais.",
      "a atmosfera absorve completamente as ondas.",
      "os satélites mudam de massa em órbita.",
    ],
    correta: 0,
    explicacao:
      "A velocidade orbital atrasa os relógios pela relatividade restrita, enquanto a gravidade mais fraca em altitude os adianta pela relatividade geral. O efeito líquido é de dezenas de microssegundos por dia, suficiente para acumular quilômetros de erro se não fosse corrigido.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A quantização da energia, proposta inicialmente por Planck, surgiu do estudo da radiação emitida por:",
    opcoes: [
      "corpos negros aquecidos.",
      "circuitos de corrente alternada.",
      "reações químicas exotérmicas.",
      "ondas sonoras de alta frequência.",
      "campos gravitacionais intensos.",
    ],
    correta: 0,
    explicacao:
      "A física clássica previa energia infinita para altas frequências na radiação de corpo negro — a chamada catástrofe do ultravioleta. Planck resolveu o impasse supondo que a energia é emitida em pacotes discretos. Foi o ponto de partida da física quântica.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Em um tubo fluorescente, a emissão de luz visível ocorre porque:",
    opcoes: [
      "o filamento é aquecido até a incandescência.",
      "há combustão do gás interno.",
      "o vidro reflete a luz ambiente.",
      "ocorre fissão nuclear no interior do tubo.",
      "elétrons excitam átomos de gás, que emitem radiação, convertida em luz visível pelo revestimento.",
    ],
    correta: 4,
    explicacao:
      "A descarga elétrica excita átomos de mercúrio, que emitem ultravioleta ao retornar ao estado fundamental. O material fluorescente da parede absorve essa radiação e reemite luz visível. O processo é bem mais eficiente que o aquecimento de um filamento.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "As aplicações médicas da radioatividade incluem a radioterapia, cujo princípio consiste em:",
    opcoes: [
      "utilizar radiação ionizante para destruir células tumorais.",
      "aquecer o corpo com ondas de rádio.",
      "produzir imagens tridimensionais por ultrassom.",
      "acelerar a cicatrização com luz visível.",
      "reduzir a temperatura corporal do paciente.",
    ],
    correta: 0,
    explicacao:
      "A radiação danifica o material genético das células, e as tumorais, por se dividirem mais rapidamente, são mais vulneráveis. O tratamento exige planejamento cuidadoso da dose e do direcionamento do feixe, para preservar tecidos sadios ao redor.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Um elétron é excitado ao absorver um fóton. Para que essa absorção ocorra, é necessário que a energia do fóton seja:",
    opcoes: [
      "qualquer valor, desde que positivo.",
      "menor que a diferença entre os níveis.",
      "igual à massa do elétron.",
      "sempre maior que a energia de ionização.",
      "exatamente igual à diferença entre dois níveis de energia do átomo.",
    ],
    correta: 4,
    explicacao:
      "A quantização impõe que apenas fótons com energia correspondente exatamente à diferença entre níveis sejam absorvidos. Fótons com outras energias simplesmente atravessam o material. É por isso que os espectros de absorção também apresentam linhas discretas.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "O efeito fotoelétrico não pode ser explicado pela teoria ondulatória clássica principalmente porque, segundo essa teoria:",
    opcoes: [
      "luz de qualquer frequência arrancaria elétrons, bastando intensidade suficiente.",
      "nenhum elétron seria emitido em qualquer circunstância.",
      "a emissão dependeria apenas da cor do metal.",
      "os elétrons seriam emitidos com energia infinita.",
      "a luz não transportaria energia alguma.",
    ],
    correta: 0,
    explicacao:
      "No modelo clássico, a energia da onda se acumularia gradualmente até liberar o elétron, independentemente da frequência. O experimento mostra o contrário: abaixo da frequência de corte não há emissão, por maior que seja a intensidade. Só a hipótese dos fótons explica esse limiar.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Os LEDs emitem luz de cor bem definida porque a energia dos fótons emitidos corresponde:",
    opcoes: [
      "à temperatura do dispositivo.",
      "à intensidade da corrente aplicada.",
      "ao comprimento do fio de ligação.",
      "à pressão atmosférica do ambiente.",
      "à diferença de energia característica do material semicondutor.",
    ],
    correta: 4,
    explicacao:
      "Cada material semicondutor tem uma diferença de energia própria entre bandas, e os fótons emitidos carregam exatamente esse valor. Por isso a cor depende do material, e não da corrente. Lâmpadas incandescentes, por aquecimento, emitem espectro contínuo.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "A energia de ligação nuclear, responsável por manter prótons e nêutrons unidos no núcleo, é explicada pela ação da:",
    opcoes: [
      "força gravitacional entre os núcleons.",
      "força elétrica de repulsão.",
      "força magnética entre partículas.",
      "força de atrito interno.",
      "força nuclear forte, de curtíssimo alcance.",
    ],
    correta: 4,
    explicacao:
      "A força nuclear forte supera a repulsão elétrica entre prótons, mas só atua em distâncias da ordem do tamanho do núcleo. A gravidade é desprezível nessa escala. Núcleos muito grandes ficam instáveis porque a repulsão elétrica passa a competir com essa força.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "O Sol produz energia continuamente há bilhões de anos por meio de reações de:",
    opcoes: [
      "combustão química do hidrogênio.",
      "fissão de núcleos de urânio.",
      "atrito entre camadas gasosas.",
      "decomposição de compostos orgânicos.",
      "fusão nuclear de núcleos de hidrogênio em hélio.",
    ],
    correta: 4,
    explicacao:
      "A pressão e a temperatura no núcleo solar permitem a fusão do hidrogênio, com conversão de parte da massa em energia. Se fosse combustão química, o Sol teria se apagado em poucos milhares de anos. É a relação E = m·c² que explica sua longevidade.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Sobre a natureza da luz, o entendimento consolidado pela física moderna é que ela:",
    opcoes: [
      "é exclusivamente uma onda eletromagnética.",
      "é exclusivamente um fluxo de partículas.",
      "manifesta propriedades de onda e de partícula, conforme o fenômeno observado.",
      "não possui energia mensurável.",
      "propaga-se apenas em meios materiais.",
    ],
    correta: 2,
    explicacao:
      "Difração e interferência exigem descrição ondulatória; efeito fotoelétrico e efeito Compton exigem descrição corpuscular. As duas descrições são complementares, e não contraditórias. Essa complementaridade é um dos pilares conceituais da mecânica quântica.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Um metal tem função trabalho de 2 eV. Ao ser iluminado por fótons de 5 eV, a energia cinética máxima dos elétrons emitidos será de:",
    opcoes: [
      "2 eV",
      "5 eV",
      "7 eV",
      "10 eV",
      "3 eV",
    ],
    correta: 4,
    explicacao:
      "A energia cinética máxima é a diferença entre a energia do fóton e a função trabalho: 5 − 2 = 3 eV. Parte da energia é gasta para vencer a barreira da superfície, e o restante aparece como movimento do elétron. Fótons de 1 eV não produziriam emissão alguma nesse metal.",
  },
];
