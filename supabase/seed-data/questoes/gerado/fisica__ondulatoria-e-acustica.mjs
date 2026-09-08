/* Ondulatória e acústica (50 questões).
   Classificação de ondas, equação fundamental, reflexão, refração, difração,
   interferência, ressonância, qualidades do som e efeito Doppler.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "facil",
    enunciado:
      "A equação fundamental da ondulatória relaciona velocidade, frequência e comprimento de onda. Essa relação é expressa por:",
    opcoes: [
      "v = f/λ",
      "v = λ/f",
      "v = f · λ",
      "v = f + λ",
      "v = f² · λ",
    ],
    correta: 2,
    explicacao:
      "A velocidade de propagação é o produto da frequência pelo comprimento de onda. Como a velocidade depende do meio, ao passar de um meio para outro a frequência se mantém e o comprimento de onda se ajusta. Essa é a relação mais usada em toda a ondulatória.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "facil",
    enunciado:
      "Uma onda tem frequência de 50 Hz e comprimento de onda de 4 m. Sua velocidade de propagação é de:",
    opcoes: [
      "12,5 m/s",
      "46 m/s",
      "54 m/s",
      "200 m/s",
      "800 m/s",
    ],
    correta: 3,
    explicacao:
      "Aplicando v = f · λ = 50 · 4 = 200 m/s. A frequência informa quantas oscilações ocorrem por segundo, e o comprimento de onda, a distância percorrida em cada oscilação. O produto dá a distância percorrida por segundo.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "O período de uma onda de frequência 250 Hz é de:",
    opcoes: [
      "0,004 s",
      "0,04 s",
      "0,25 s",
      "4 s",
      "250 s",
    ],
    correta: 0,
    explicacao:
      "Período e frequência são inversos: T = 1/f = 1/250 = 0,004 s. Isso significa que cada ciclo completo dura quatro milésimos de segundo. Frequências altas correspondem a períodos curtos.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "As ondas sonoras que se propagam no ar são classificadas como:",
    opcoes: [
      "eletromagnéticas e transversais.",
      "mecânicas e longitudinais.",
      "mecânicas e transversais.",
      "eletromagnéticas e longitudinais.",
      "estacionárias e transversais.",
    ],
    correta: 1,
    explicacao:
      "O som precisa de meio material para se propagar, o que o torna onda mecânica, e as partículas do ar oscilam na mesma direção da propagação, o que o torna longitudinal. Por isso o som não se propaga no vácuo, ao contrário da luz.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A luz visível, as ondas de rádio e os raios X pertencem a um mesmo grupo de ondas, classificadas como:",
    opcoes: [
      "mecânicas longitudinais.",
      "mecânicas transversais.",
      "eletromagnéticas, que se propagam no vácuo.",
      "estacionárias de baixa frequência.",
      "sonoras de alta intensidade.",
    ],
    correta: 2,
    explicacao:
      "Ondas eletromagnéticas resultam da oscilação de campos elétrico e magnético e dispensam meio material. No vácuo, todas se propagam a cerca de 300 000 km/s. O que as distingue é a frequência, que define desde ondas de rádio até raios gama.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A qualidade fisiológica do som que permite distinguir um som grave de um agudo é a altura, que está diretamente relacionada:",
    opcoes: [
      "à amplitude da onda",
      "à frequência da onda",
      "à velocidade de propagação",
      "ao timbre do instrumento",
      "à intensidade sonora",
    ],
    correta: 1,
    explicacao:
      "Sons agudos têm frequência alta e sons graves, frequência baixa. A amplitude está ligada à intensidade, ou seja, ao volume. O timbre, por sua vez, decorre da combinação de harmônicos e permite distinguir instrumentos diferentes tocando a mesma nota.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Duas pessoas tocam a mesma nota musical, uma no violão e outra no piano. A qualidade sonora que permite distinguir os dois instrumentos é o:",
    opcoes: [
      "altura",
      "intensidade",
      "timbre",
      "período",
      "comprimento de onda",
    ],
    correta: 2,
    explicacao:
      "O timbre resulta do conjunto de frequências harmônicas que acompanham a fundamental, característico de cada fonte. A nota é a mesma, portanto a altura é igual; o que muda é o formato da onda resultante. É o timbre que permite reconhecer uma voz ao telefone.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A faixa de frequências audíveis pelo ouvido humano situa-se aproximadamente entre:",
    opcoes: [
      "2 Hz e 200 Hz",
      "20 Hz e 20 000 Hz",
      "200 Hz e 2 000 Hz",
      "20 000 Hz e 200 000 Hz",
      "0 Hz e 20 Hz",
    ],
    correta: 1,
    explicacao:
      "Abaixo de 20 Hz estão os infrassons e acima de 20 000 Hz, os ultrassons, ambos inaudíveis para o ser humano. Essa faixa se estreita com a idade, sobretudo nas frequências altas. Cães e morcegos percebem ultrassons com facilidade.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "O eco é um fenômeno acústico que resulta da:",
    opcoes: [
      "refração do som ao mudar de meio.",
      "reflexão do som em um obstáculo distante.",
      "difração do som ao contornar obstáculos.",
      "interferência entre duas fontes sonoras.",
      "absorção do som por superfícies macias.",
    ],
    correta: 1,
    explicacao:
      "Para que o eco seja percebido separadamente, o som refletido precisa chegar pelo menos 0,1 s depois do original, o que exige obstáculo a mais de 17 m. Distâncias menores produzem reverberação, em que os sons se sobrepõem.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Uma pessoa grita diante de um paredão e ouve o eco 2 s depois. Adotando 340 m/s para a velocidade do som, a distância até o paredão é de:",
    opcoes: [
      "170 m",
      "340 m",
      "510 m",
      "680 m",
      "85 m",
    ],
    correta: 1,
    explicacao:
      "O som percorre ida e volta em 2 s, ou seja, 680 m no total. A distância até o obstáculo é metade disso: 340 m. Esquecer que o percurso é de ida e volta é o erro mais comum nesse tipo de questão.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "O fenômeno pelo qual uma onda contorna obstáculos ou se espalha ao passar por uma fenda é chamado de:",
    opcoes: [
      "reflexão",
      "refração",
      "difração",
      "polarização",
      "dispersão",
    ],
    correta: 2,
    explicacao:
      "A difração é mais evidente quando o obstáculo ou a abertura tem dimensão comparável ao comprimento de onda. É por isso que ouvimos alguém falando na sala ao lado sem vê-lo: o som, de comprimento de onda grande, contorna a porta com facilidade.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Quando duas ondas de mesma frequência se encontram em fase, ocorre interferência:",
    opcoes: [
      "construtiva, com amplitude resultante maior.",
      "destrutiva, com amplitude resultante menor.",
      "nula, com desaparecimento das duas ondas.",
      "estacionária, com formação de nós fixos.",
      "difrativa, com espalhamento lateral.",
    ],
    correta: 0,
    explicacao:
      "Em fase, as cristas coincidem e as amplitudes se somam. Em oposição de fase, crista encontra vale e as amplitudes se subtraem, podendo se anular. Fones com cancelamento de ruído exploram justamente a interferência destrutiva.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A ressonância ocorre quando um sistema é excitado por uma força periódica cuja frequência:",
    opcoes: [
      "é muito menor que a frequência natural do sistema.",
      "coincide com a frequência natural do sistema.",
      "é o dobro exato da amplitude.",
      "varia aleatoriamente no tempo.",
      "é nula durante todo o processo.",
    ],
    correta: 1,
    explicacao:
      "Na ressonância, a energia é transferida com máxima eficiência e a amplitude cresce muito. É o que faz uma taça quebrar com som intenso na frequência certa e o que explica o colapso de estruturas mal projetadas sob vibração periódica.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Ao passar de um meio para outro, uma onda sofre refração. Nessa mudança, permanece constante:",
    opcoes: [
      "a velocidade",
      "o comprimento de onda",
      "a frequência",
      "a amplitude",
      "a direção de propagação",
    ],
    correta: 2,
    explicacao:
      "A frequência é determinada pela fonte e não se altera na refração; velocidade e comprimento de onda mudam juntos, mantendo o produto igual à nova velocidade. É por isso que a cor da luz e a altura do som não mudam ao trocar de meio.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A intensidade sonora é medida em decibéis. Um aumento de 10 dB corresponde a uma intensidade:",
    opcoes: [
      "duas vezes maior",
      "dez vezes maior",
      "cem vezes maior",
      "igual à anterior",
      "dez vezes menor",
    ],
    correta: 1,
    explicacao:
      "A escala em decibéis é logarítmica: cada 10 dB representam um fator 10 na intensidade. Assim, 20 dB de acréscimo correspondem a cem vezes mais intensidade. Essa escala foi adotada porque a percepção auditiva também é aproximadamente logarítmica.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Uma ambulância se aproxima de um observador parado, com a sirene ligada. O som percebido pelo observador tem frequência:",
    opcoes: [
      "menor que a emitida, por causa do efeito Doppler.",
      "maior que a emitida, por causa do efeito Doppler.",
      "exatamente igual à emitida.",
      "nula durante a aproximação.",
      "variável de forma aleatória.",
    ],
    correta: 1,
    explicacao:
      "Na aproximação, as frentes de onda se comprimem e a frequência percebida aumenta, deixando o som mais agudo. Ao se afastar, ocorre o inverso e o som fica mais grave. A frequência realmente emitida pela sirene não muda.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Em uma onda transversal, a direção de vibração das partículas do meio é:",
    opcoes: [
      "paralela à direção de propagação.",
      "perpendicular à direção de propagação.",
      "oposta à direção de propagação.",
      "circular em torno da fonte.",
      "aleatória em cada ponto.",
    ],
    correta: 1,
    explicacao:
      "Em uma corda sacudida verticalmente, o pulso avança horizontalmente enquanto os pontos da corda sobem e descem. Nas ondas longitudinais, como o som no ar, vibração e propagação têm a mesma direção. Ondas eletromagnéticas são sempre transversais.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A velocidade do som no ar depende principalmente:",
    opcoes: [
      "da intensidade da fonte sonora.",
      "da temperatura e das propriedades do meio.",
      "da frequência do som emitido.",
      "da amplitude da onda produzida.",
      "da altura da fonte em relação ao solo.",
    ],
    correta: 1,
    explicacao:
      "Em ar mais quente, as moléculas se movem mais rápido e o som se propaga com maior velocidade. Frequência e amplitude não afetam essa velocidade — se afetassem, notas graves e agudas de uma orquestra chegariam em tempos diferentes ao público.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Comparando a propagação do som em diferentes estados da matéria, verifica-se que ele se propaga mais rapidamente em:",
    opcoes: [
      "gases",
      "líquidos",
      "sólidos",
      "no vácuo",
      "com a mesma velocidade em todos os meios",
    ],
    correta: 2,
    explicacao:
      "Quanto mais próximas e ligadas estão as partículas, mais rápido a perturbação se transmite. No aço o som atinge cerca de 5 000 m/s, na água cerca de 1 500 m/s e no ar cerca de 340 m/s. No vácuo ele simplesmente não se propaga.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Uma corda de violão de 0,6 m vibra em seu modo fundamental, formando meio comprimento de onda. O comprimento de onda dessa vibração é de:",
    opcoes: [
      "0,3 m",
      "0,6 m",
      "0,9 m",
      "1,2 m",
      "2,4 m",
    ],
    correta: 3,
    explicacao:
      "No modo fundamental, o comprimento da corda corresponde a meio comprimento de onda, então λ = 2 · 0,6 = 1,2 m. Os harmônicos seguintes têm comprimentos de onda menores e frequências múltiplas da fundamental.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Ondas estacionárias formam-se pela superposição de duas ondas de mesma frequência que se propagam:",
    opcoes: [
      "em sentidos opostos, na mesma direção.",
      "na mesma direção e mesmo sentido.",
      "em direções perpendiculares.",
      "com frequências muito diferentes.",
      "em meios distintos simultaneamente.",
    ],
    correta: 0,
    explicacao:
      "A onda incidente e a refletida se superpõem, criando pontos que nunca se movem, chamados nós, e pontos de amplitude máxima, os ventres. É esse padrão que define as notas produzidas por cordas e tubos de instrumentos musicais.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Sons de frequência inferior a 20 Hz, inaudíveis para o ser humano, são chamados de:",
    opcoes: [
      "infrassons",
      "ultrassons",
      "harmônicos",
      "ruídos brancos",
      "sons puros",
    ],
    correta: 0,
    explicacao:
      "Infrassons são produzidos por terremotos, erupções e grandes máquinas, e alguns animais os percebem. Ultrassons ficam acima de 20 000 Hz e são usados em exames de imagem e em sonares. As duas faixas são inaudíveis para nós.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "O ultrassom é usado em exames médicos de imagem porque:",
    opcoes: [
      "reflete-se de forma diferente em cada tecido, permitindo formar imagens.",
      "atravessa o corpo sem qualquer reflexão.",
      "possui energia suficiente para ionizar átomos.",
      "propaga-se apenas no vácuo.",
      "tem frequência inferior à faixa audível.",
    ],
    correta: 0,
    explicacao:
      "As reflexões nas interfaces entre tecidos diferentes são captadas e convertidas em imagem. Por não ser radiação ionizante, o ultrassom é seguro para acompanhamento de gestações — vantagem que os raios X não oferecem.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A amplitude de uma onda sonora está diretamente relacionada:",
    opcoes: [
      "à intensidade sonora, ou seja, ao volume percebido.",
      "à altura do som, se grave ou agudo.",
      "ao timbre característico do instrumento.",
      "à velocidade de propagação no meio.",
      "ao comprimento de onda apenas.",
    ],
    correta: 0,
    explicacao:
      "Amplitudes maiores transportam mais energia e produzem sons mais intensos. Aumentar o volume de um aparelho aumenta a amplitude, sem alterar a frequência das notas. Altura depende da frequência, e timbre, dos harmônicos.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Uma onda de rádio tem frequência de 100 MHz. Sabendo que ondas eletromagnéticas se propagam a 3 × 10⁸ m/s, seu comprimento de onda é de:",
    opcoes: [
      "3 m",
      "0,3 m",
      "30 m",
      "300 m",
      "3 000 m",
    ],
    correta: 0,
    explicacao:
      "Aplicando λ = v/f = 3 × 10⁸ / 1 × 10⁸ = 3 m. Frequências dessa ordem correspondem à faixa de FM. Quanto maior a frequência, menor o comprimento de onda, já que a velocidade é fixa no vácuo.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Materiais porosos como espuma e carpete são usados em estúdios de gravação porque promovem:",
    opcoes: [
      "absorção do som, reduzindo reverberação.",
      "reflexão intensa das ondas sonoras.",
      "aumento da velocidade do som no ambiente.",
      "difração completa das ondas.",
      "elevação da frequência dos sons graves.",
    ],
    correta: 0,
    explicacao:
      "As irregularidades e poros dissipam a energia sonora em calor, reduzindo as reflexões nas paredes. Sem esse tratamento, o som refletido se sobrepõe ao direto e prejudica a nitidez da gravação. Superfícies duras e lisas produzem o efeito contrário.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Um pulso propaga-se em uma corda e atinge uma extremidade fixa. Ao ser refletido, esse pulso:",
    opcoes: [
      "retorna com a mesma fase, sem inversão.",
      "desaparece completamente.",
      "retorna invertido, com inversão de fase.",
      "duplica sua amplitude.",
      "muda de frequência.",
    ],
    correta: 2,
    explicacao:
      "Em extremidade fixa, a reflexão ocorre com inversão de fase: um pulso para cima retorna para baixo. Em extremidade livre, a reflexão preserva a fase. Essa diferença é decisiva na formação de ondas estacionárias em instrumentos.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Entre as grandezas que caracterizam uma onda periódica, a frequência corresponde:",
    opcoes: [
      "à distância entre duas cristas consecutivas.",
      "à altura máxima atingida pela onda.",
      "ao número de oscilações completas por unidade de tempo.",
      "à velocidade com que a onda se propaga.",
      "ao tempo de uma oscilação completa.",
    ],
    correta: 2,
    explicacao:
      "A frequência é medida em hertz, equivalente a ciclos por segundo, e é determinada pela fonte. A distância entre cristas é o comprimento de onda, e o tempo de uma oscilação é o período — grandeza inversa da frequência.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Uma pessoa observa um relâmpago e ouve o trovão 6 s depois. Adotando 340 m/s para a velocidade do som e desprezando o tempo de propagação da luz, a distância até o local da descarga é de:",
    opcoes: [
      "340 m",
      "1 020 m",
      "1 700 m",
      "2 040 m",
      "3 400 m",
    ],
    correta: 3,
    explicacao:
      "A distância é 340 · 6 = 2 040 m, cerca de 2 km. A luz percorre esse trajeto em tempo desprezível, o que permite usar apenas o som. A regra prática de dividir o intervalo por 3 dá a distância aproximada em quilômetros.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Ondas mecânicas distinguem-se das eletromagnéticas porque as mecânicas:",
    opcoes: [
      "propagam-se apenas no vácuo.",
      "têm sempre velocidade de 300 000 km/s.",
      "são sempre transversais.",
      "necessitam de um meio material para se propagar.",
      "não transportam energia.",
    ],
    correta: 3,
    explicacao:
      "Som, ondas em cordas e ondas do mar exigem meio material, porque consistem na propagação de uma perturbação entre partículas. Ondas eletromagnéticas dispensam meio e atravessam o vácuo. Ambas transportam energia sem transportar matéria.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Ao afinar um violão, aumenta-se a tensão de uma corda. Com isso, a frequência do som produzido por ela:",
    opcoes: [
      "diminui",
      "permanece constante",
      "torna-se nula",
      "aumenta",
      "passa a ser inaudível",
    ],
    correta: 3,
    explicacao:
      "Maior tensão eleva a velocidade de propagação da onda na corda e, com comprimento fixo, aumenta a frequência — o som fica mais agudo. Cordas mais grossas e mais longas produzem sons mais graves, pelo motivo inverso.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "O fenômeno de batimento sonoro ocorre quando duas fontes emitem sons com frequências:",
    opcoes: [
      "exatamente iguais.",
      "muito distantes uma da outra.",
      "nulas.",
      "ligeiramente diferentes entre si.",
      "acima da faixa audível.",
    ],
    correta: 3,
    explicacao:
      "A pequena diferença de frequência produz variações periódicas de intensidade, percebidas como pulsações. Afinadores exploram esse efeito: quando o batimento desaparece, as frequências coincidem. A frequência do batimento é a diferença entre as duas.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Sobre a energia transportada por uma onda, é correto afirmar que a onda transporta:",
    opcoes: [
      "matéria e energia simultaneamente.",
      "matéria, sem transportar energia.",
      "apenas informação, sem energia.",
      "energia, sem transportar matéria.",
      "nem matéria nem energia.",
    ],
    correta: 3,
    explicacao:
      "Uma rolha na água sobe e desce quando passa uma onda, mas não é levada adiante: as partículas oscilam em torno de posições fixas. O que avança é a perturbação, com a energia associada a ela. Isso vale para ondas mecânicas e eletromagnéticas.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Uma onda sonora de 680 Hz propaga-se no ar a 340 m/s. Seu comprimento de onda é de:",
    opcoes: [
      "0,25 m",
      "1 m",
      "2 m",
      "0,5 m",
      "2,3 m",
    ],
    correta: 3,
    explicacao:
      "Aplicando λ = v/f = 340/680 = 0,5 m. Sons agudos têm comprimentos de onda curtos, e graves, longos. Essa diferença explica por que os graves contornam obstáculos com mais facilidade, por difração.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Ao ouvir música em outro cômodo, percebem-se com mais clareza os sons graves que os agudos. Esse fato se explica porque os sons graves:",
    opcoes: [
      "têm maior comprimento de onda e sofrem mais difração.",
      "têm maior velocidade de propagação no ar.",
      "possuem maior frequência que os agudos.",
      "não sofrem absorção pelas paredes.",
      "são ondas eletromagnéticas.",
    ],
    correta: 0,
    explicacao:
      "Comprimentos de onda maiores contornam obstáculos e passam por frestas com mais facilidade. Os agudos, de comprimento de onda curto, são mais absorvidos e refletidos pelas paredes. É por isso que só o baixo da música do vizinho chega nítido.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "O sonar, usado para localizar objetos submersos, baseia-se na medição do tempo entre a emissão e o retorno de um pulso, aproveitando o fenômeno da:",
    opcoes: [
      "difração",
      "polarização",
      "dispersão",
      "reflexão",
      "interferência destrutiva",
    ],
    correta: 3,
    explicacao:
      "O pulso ultrassônico reflete no obstáculo e retorna ao aparelho, e o tempo medido permite calcular a distância. É o mesmo princípio do eco e da ecolocalização usada por morcegos e golfinhos. A velocidade do som na água precisa ser conhecida para o cálculo.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Em uma onda periódica, o comprimento de onda corresponde:",
    opcoes: [
      "ao número de ciclos por segundo.",
      "à altura máxima da onda em relação ao eixo.",
      "ao tempo de uma oscilação completa.",
      "à energia total transportada.",
      "à distância entre dois pontos consecutivos em concordância de fase.",
    ],
    correta: 4,
    explicacao:
      "Duas cristas consecutivas, ou dois vales consecutivos, estão separados por exatamente um comprimento de onda. Ele é medido em metros e se relaciona à frequência pela velocidade de propagação. A altura máxima é a amplitude, grandeza distinta.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Fones de ouvido com cancelamento de ruído captam o som ambiente e emitem uma onda que anula parte dele. O princípio físico empregado é a:",
    opcoes: [
      "interferência construtiva.",
      "reflexão total do som.",
      "refração nas membranas.",
      "difração nas bordas do fone.",
      "interferência destrutiva.",
    ],
    correta: 4,
    explicacao:
      "O aparelho gera uma onda em oposição de fase à do ruído, de modo que crista encontra vale e as amplitudes se cancelam. O resultado é redução perceptível do som externo, especialmente eficaz em ruídos graves e constantes, como o de aviões.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "A poluição sonora é medida em decibéis, e a exposição prolongada acima de determinado limite pode causar perda auditiva. Esse limite de segurança situa-se em torno de:",
    opcoes: [
      "10 dB",
      "35 dB",
      "85 dB",
      "200 dB",
      "500 dB",
    ],
    correta: 2,
    explicacao:
      "Exposições prolongadas acima de 85 dB são consideradas de risco pelas normas de saúde ocupacional. Shows e furadeiras ultrapassam facilmente esse valor. O limiar da dor fica em torno de 120 dB, e a escala raramente ultrapassa 140 dB em situações reais.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Uma fonte sonora se afasta rapidamente de um observador. O som percebido por esse observador torna-se:",
    opcoes: [
      "mais agudo, com frequência aparente maior.",
      "mais intenso, com amplitude maior.",
      "inaudível instantaneamente.",
      "idêntico ao emitido.",
      "mais grave, com frequência aparente menor.",
    ],
    correta: 4,
    explicacao:
      "No afastamento, as frentes de onda se distanciam e a frequência aparente cai, deixando o som mais grave. É o efeito Doppler, o mesmo que produz a mudança de tom da sirene quando o veículo passa por nós.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "As ondas do mar, ao se aproximarem da praia, mudam de direção e ficam paralelas à costa. Esse comportamento decorre da:",
    opcoes: [
      "reflexão nas rochas do fundo.",
      "polarização da água.",
      "interferência com ondas sonoras.",
      "dispersão das cores da luz.",
      "refração provocada pela mudança de profundidade.",
    ],
    correta: 4,
    explicacao:
      "Em águas rasas a velocidade da onda diminui, e as partes que atingem primeiro o baixio desaceleram, girando a frente de onda. O resultado é o alinhamento progressivo com a linha da costa. É refração em ondas mecânicas.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Sobre as ondas eletromagnéticas no vácuo, é correto afirmar que todas elas:",
    opcoes: [
      "possuem a mesma frequência.",
      "têm o mesmo comprimento de onda.",
      "são visíveis ao olho humano.",
      "precisam de meio material.",
      "propagam-se com a mesma velocidade.",
    ],
    correta: 4,
    explicacao:
      "No vácuo, todo o espectro eletromagnético viaja a aproximadamente 3 × 10⁸ m/s. O que distingue rádio, luz visível e raios gama é a frequência, e consequentemente o comprimento de onda. A faixa visível ocupa apenas uma pequena parte do espectro.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Um tubo sonoro aberto nas duas extremidades tem 0,85 m de comprimento e vibra no modo fundamental. Sabendo que nesse caso o comprimento do tubo corresponde a meio comprimento de onda e adotando 340 m/s para a velocidade do som, a frequência fundamental é de:",
    opcoes: [
      "100 Hz",
      "400 Hz",
      "170 Hz",
      "680 Hz",
      "200 Hz",
    ],
    correta: 4,
    explicacao:
      "O comprimento de onda é 2 · 0,85 = 1,7 m, e a frequência é 340/1,7 = 200 Hz. Tubos mais longos produzem sons mais graves, o que explica a diferença entre um flautim e um fagote.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Em uma onda estacionária formada em uma corda, os pontos que permanecem sempre em repouso são chamados de:",
    opcoes: [
      "ventres",
      "cristas",
      "vales",
      "harmônicos",
      "nós",
    ],
    correta: 4,
    explicacao:
      "Nos nós, as duas ondas superpostas estão sempre em oposição de fase e se cancelam. Os ventres, ao contrário, oscilam com amplitude máxima. A distância entre dois nós consecutivos é meio comprimento de onda.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Uma onda tem período de 0,02 s. Sua frequência é de:",
    opcoes: [
      "0,02 Hz",
      "2 Hz",
      "20 Hz",
      "50 Hz",
      "200 Hz",
    ],
    correta: 3,
    explicacao:
      "Frequência é o inverso do período: f = 1/0,02 = 50 Hz. Essa é a frequência da rede elétrica brasileira. Períodos curtos correspondem a frequências altas, e vice-versa.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Instrumentos de sopro produzem notas diferentes porque alteram:",
    opcoes: [
      "a velocidade do som dentro do tubo.",
      "a densidade do metal do instrumento.",
      "a temperatura do ambiente.",
      "a amplitude da onda apenas.",
      "o comprimento efetivo da coluna de ar que vibra.",
    ],
    correta: 4,
    explicacao:
      "Abrir e fechar orifícios muda o comprimento da coluna de ar e, com ele, o comprimento de onda das ondas estacionárias possíveis. Colunas mais curtas produzem frequências mais altas. A velocidade do som no ar permanece praticamente a mesma.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "O ruído é distinguido de um som musical porque o ruído apresenta:",
    opcoes: [
      "frequências bem definidas e relacionadas harmonicamente.",
      "amplitude sempre maior que a de qualquer som musical.",
      "propagação exclusivamente no vácuo.",
      "frequência única e constante.",
      "mistura desordenada de frequências, sem relação harmônica.",
    ],
    correta: 4,
    explicacao:
      "Sons musicais têm uma frequência fundamental acompanhada de harmônicos múltiplos dela, o que produz sensação agradável e altura definida. No ruído, as frequências se distribuem sem essa organização. É essa diferença estrutural que o ouvido reconhece.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "dificil",
    enunciado:
      "Uma onda propaga-se com velocidade de 12 m/s e frequência de 3 Hz. Ao passar para um meio em que sua velocidade se torna 20 m/s, seu novo comprimento de onda será de:",
    opcoes: [
      "4 m",
      "5 m",
      "6,7 m",
      "20 m",
      "60 m",
    ],
    correta: 2,
    explicacao:
      "A frequência não muda na refração, permanecendo em 3 Hz. O novo comprimento de onda é λ = 20/3 ≈ 6,7 m. No meio original ele valia 4 m — o aumento de velocidade esticou a onda proporcionalmente.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Barreiras acústicas instaladas às margens de rodovias reduzem o ruído nas residências próximas porque promovem:",
    opcoes: [
      "reflexão e absorção das ondas sonoras.",
      "aumento da frequência do som emitido.",
      "eliminação total da difração.",
      "conversão do som em luz visível.",
      "aumento da velocidade do som no ar.",
    ],
    correta: 0,
    explicacao:
      "As barreiras refletem parte do som de volta para a via e absorvem outra parte em sua estrutura. A eficácia é limitada pela difração, já que ondas longas contornam o topo da barreira — por isso elas costumam ser altas e inclinadas.",
  },
  {
    materia: "fisica",
    tema: "Ondulatória e acústica",
    dificuldade: "media",
    enunciado:
      "Ao comparar uma onda de rádio AM com uma de FM, sabe-se que FM opera em frequências mais altas. Em relação ao comprimento de onda, isso significa que as ondas de FM têm comprimento:",
    opcoes: [
      "maior",
      "igual",
      "nulo",
      "variável de forma aleatória",
      "menor",
    ],
    correta: 4,
    explicacao:
      "Com velocidade fixa no vácuo, frequência e comprimento de onda são inversamente proporcionais. Ondas de AM, de frequência menor, têm comprimentos de centenas de metros e contornam obstáculos com mais facilidade — daí seu alcance maior em terreno acidentado.",
  },
];
