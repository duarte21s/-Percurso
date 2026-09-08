/* Circuitos elétricos e leis de Ohm (50 questões).
   Corrente, tensão, resistência, associação em série e paralelo, potência,
   efeito Joule, geradores e instrumentos de medida.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "facil",
    enunciado:
      "A corrente elétrica em um condutor metálico corresponde ao movimento ordenado de:",
    opcoes: [
      "prótons",
      "elétrons livres",
      "nêutrons",
      "átomos inteiros",
      "íons positivos",
    ],
    correta: 1,
    explicacao:
      "Em metais, apenas os elétrons de valência têm mobilidade; prótons e nêutrons permanecem fixos na rede cristalina. Por convenção histórica, o sentido convencional da corrente é oposto ao movimento real dos elétrons. Em soluções eletrolíticas, íons dos dois sinais participam da condução.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "facil",
    enunciado:
      "A primeira lei de Ohm estabelece que, em um resistor ôhmico, a tensão é igual ao produto:",
    opcoes: [
      "da corrente pela potência",
      "da resistência pela corrente",
      "da corrente pelo tempo",
      "da potência pelo tempo",
      "da resistência pela potência",
    ],
    correta: 1,
    explicacao:
      "A relação é U = R · i. Em resistores ôhmicos, a resistência permanece constante e o gráfico de tensão por corrente é uma reta que passa pela origem. Lâmpadas incandescentes e diodos não seguem essa proporcionalidade.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "facil",
    enunciado:
      "Um resistor de 20 Ω é percorrido por corrente de 3 A. A tensão entre seus terminais é de:",
    opcoes: [
      "6,7 V",
      "17 V",
      "23 V",
      "60 V",
      "180 V",
    ],
    correta: 3,
    explicacao:
      "Aplicando U = R · i = 20 · 3 = 60 V. A tensão é a energia por unidade de carga fornecida ao resistor, e a corrente mede a taxa de passagem de carga. Conhecendo duas dessas grandezas, a terceira fica determinada.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Três resistores de 10 Ω, 20 Ω e 30 Ω são associados em série. A resistência equivalente dessa associação é de:",
    opcoes: [
      "5,5 Ω",
      "10 Ω",
      "20 Ω",
      "60 Ω",
      "600 Ω",
    ],
    correta: 3,
    explicacao:
      "Em série, as resistências simplesmente se somam: 10 + 20 + 30 = 60 Ω. A corrente é a mesma em todos os resistores, e a tensão da fonte se reparte entre eles. A resistência equivalente é sempre maior que a maior resistência individual.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Dois resistores de 12 Ω cada são associados em paralelo. A resistência equivalente é de:",
    opcoes: [
      "3 Ω",
      "6 Ω",
      "12 Ω",
      "24 Ω",
      "144 Ω",
    ],
    correta: 1,
    explicacao:
      "Com resistores iguais em paralelo, basta dividir o valor pelo número de resistores: 12/2 = 6 Ω. Em paralelo, a tensão é a mesma em todos e a corrente se divide. A resistência equivalente é sempre menor que a menor resistência individual.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Em uma associação de resistores em série, a grandeza que permanece igual em todos os componentes é:",
    opcoes: [
      "a tensão",
      "a corrente",
      "a potência",
      "a resistência",
      "a energia dissipada",
    ],
    correta: 1,
    explicacao:
      "Como não há bifurcações, toda a carga que passa por um resistor passa pelos demais: a corrente é comum. A tensão, ao contrário, se divide proporcionalmente às resistências. Em paralelo ocorre o inverso: tensão comum e corrente dividida.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Em uma associação de resistores em paralelo, a grandeza que permanece igual em todos os componentes é:",
    opcoes: [
      "a corrente",
      "a tensão",
      "a resistência",
      "a potência dissipada",
      "o comprimento do fio",
    ],
    correta: 1,
    explicacao:
      "Todos os resistores em paralelo estão ligados aos mesmos dois pontos, portanto submetidos à mesma diferença de potencial. A corrente se divide inversamente às resistências: o caminho de menor resistência recebe mais corrente.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "As instalações elétricas residenciais associam os aparelhos em paralelo. A principal vantagem dessa escolha é que:",
    opcoes: [
      "todos recebem a mesma tensão e funcionam de forma independente.",
      "a corrente é a mesma em todos os aparelhos.",
      "o consumo total de energia é reduzido a zero.",
      "a resistência equivalente aumenta com mais aparelhos.",
      "um aparelho desligado interrompe todos os demais.",
    ],
    correta: 0,
    explicacao:
      "Em paralelo, cada aparelho recebe os 127 V ou 220 V da rede e pode ser ligado ou desligado sem afetar os outros. Em série, desligar um interromperia o circuito inteiro — como nos antigos pisca-piscas de Natal. A desvantagem é que a corrente total cresce com o número de aparelhos.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "A potência elétrica dissipada por um resistor pode ser calculada pela expressão:",
    opcoes: [
      "P = U · i",
      "P = U/i",
      "P = i/U",
      "P = U + i",
      "P = U · i²",
    ],
    correta: 0,
    explicacao:
      "A potência é o produto da tensão pela corrente, e pode ser reescrita como R·i² ou U²/R usando a lei de Ohm. Ela indica a rapidez com que a energia elétrica é convertida em outra forma — geralmente calor, nos resistores.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um chuveiro elétrico opera sob 220 V e é percorrido por corrente de 25 A. Sua potência é de:",
    opcoes: [
      "245 W",
      "880 W",
      "2 750 W",
      "5 500 W",
      "8 800 W",
    ],
    correta: 3,
    explicacao:
      "Aplicando P = U · i = 220 · 25 = 5 500 W, ou 5,5 kW. Chuveiros estão entre os aparelhos de maior potência de uma residência, o que explica seu peso na conta de luz e a necessidade de fiação adequada.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Um resistor de 40 Ω é submetido a uma tensão de 120 V. A potência dissipada por ele é de:",
    opcoes: [
      "3 W",
      "80 W",
      "360 W",
      "480 W",
      "4 800 W",
    ],
    correta: 2,
    explicacao:
      "Usando P = U²/R = 14 400/40 = 360 W. Alternativamente, a corrente é 120/40 = 3 A e P = 120 · 3 = 360 W. Os dois caminhos coincidem, o que serve de conferência do resultado.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "O aquecimento de um resistor percorrido por corrente elétrica é conhecido como:",
    opcoes: [
      "efeito Doppler",
      "efeito Joule",
      "efeito fotoelétrico",
      "efeito Hall",
      "efeito Compton",
    ],
    correta: 1,
    explicacao:
      "Os elétrons colidem com a rede cristalina e transferem energia, elevando a temperatura do material. O efeito Joule é indesejado em fios de transmissão, mas é justamente o princípio de chuveiros, ferros de passar e torradeiras.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "A segunda lei de Ohm relaciona a resistência de um fio a suas características físicas. Segundo ela, a resistência é diretamente proporcional:",
    opcoes: [
      "à área da seção transversal.",
      "ao comprimento do fio.",
      "à corrente que o percorre.",
      "à tensão aplicada.",
      "à temperatura ambiente apenas.",
    ],
    correta: 1,
    explicacao:
      "A expressão é R = ρ·L/A: fios mais longos oferecem mais resistência e fios mais grossos, menos. A resistividade ρ é uma propriedade do material. É por isso que instalações de alta corrente exigem fios de maior bitola.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Ao dobrar o comprimento de um fio condutor, mantendo o material e a área da seção, sua resistência elétrica:",
    opcoes: [
      "reduz-se à metade",
      "dobra",
      "quadruplica",
      "permanece igual",
      "torna-se nula",
    ],
    correta: 1,
    explicacao:
      "A resistência é diretamente proporcional ao comprimento, então dobrar L dobra R. Já dobrar a área da seção reduziria a resistência à metade, porque a dependência com A é inversa. Material e temperatura permanecendo iguais, apenas a geometria importa.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um amperímetro deve ser ligado em um circuito de modo que fique:",
    opcoes: [
      "em série com o componente cuja corrente se quer medir.",
      "em paralelo com o componente medido.",
      "isolado do circuito, sem contato elétrico.",
      "diretamente entre os polos da fonte.",
      "ligado apenas ao fio terra.",
    ],
    correta: 0,
    explicacao:
      "Para medir a corrente que atravessa um componente, o amperímetro precisa ser percorrido por essa mesma corrente — daí a ligação em série. Seu ideal é ter resistência interna nula, para não alterar o circuito. Voltímetros, ao contrário, ligam-se em paralelo.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um voltímetro ideal, usado para medir a diferença de potencial entre dois pontos, deve apresentar:",
    opcoes: [
      "resistência interna nula e ligação em série.",
      "resistência interna infinita e ligação em paralelo.",
      "resistência igual à do circuito e ligação em série.",
      "resistência variável e ligação alternada.",
      "nenhuma resistência definida.",
    ],
    correta: 1,
    explicacao:
      "Resistência muito alta impede que o voltímetro desvie corrente significativa e altere o circuito medido. A ligação em paralelo garante que ele fique submetido à mesma tensão do trecho analisado. Amperímetros seguem exigências opostas.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Dois resistores de 6 Ω e 3 Ω são associados em paralelo. A resistência equivalente dessa associação é de:",
    opcoes: [
      "1 Ω",
      "2 Ω",
      "4,5 Ω",
      "9 Ω",
      "18 Ω",
    ],
    correta: 1,
    explicacao:
      "Para dois resistores, vale o produto sobre a soma: (6 · 3)/(6 + 3) = 18/9 = 2 Ω. O resultado é menor que o menor dos dois valores, como sempre ocorre em associações paralelas. Adicionar caminhos facilita a passagem de corrente.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "A unidade de corrente elétrica no Sistema Internacional é o ampere, que corresponde a:",
    opcoes: [
      "um coulomb por segundo",
      "um joule por segundo",
      "um volt por ohm ao quadrado",
      "um watt por volt ao quadrado",
      "um coulomb por metro",
    ],
    correta: 0,
    explicacao:
      "Um ampere equivale à passagem de um coulomb de carga por segundo através de uma seção do condutor. Joule por segundo é watt, unidade de potência. A relação volt por ohm também resulta em ampere, mas sem elevar ao quadrado.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um fusível protege uma instalação elétrica porque:",
    opcoes: [
      "rompe-se quando a corrente ultrapassa um valor limite, interrompendo o circuito.",
      "aumenta a tensão da rede em caso de falha.",
      "reduz a resistência dos fios automaticamente.",
      "converte corrente alternada em contínua.",
      "armazena energia para uso posterior.",
    ],
    correta: 0,
    explicacao:
      "O filamento do fusível tem baixo ponto de fusão e derrete pelo efeito Joule quando a corrente excede o limite. Isso interrompe o circuito antes que a fiação superaqueça. Disjuntores cumprem a mesma função, mas podem ser rearmados.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Um circuito tem uma bateria de 12 V ligada a dois resistores de 4 Ω em série. A corrente que percorre o circuito é de:",
    opcoes: [
      "1,5 A",
      "0,67 A",
      "3 A",
      "6 A",
      "48 A",
    ],
    correta: 0,
    explicacao:
      "A resistência equivalente é 4 + 4 = 8 Ω, e a corrente é i = 12/8 = 1,5 A. Cada resistor fica submetido a 6 V, metade da tensão da fonte. A soma das tensões nos resistores devolve os 12 V da bateria.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "A energia elétrica consumida por um aparelho é calculada pelo produto da potência pelo tempo de uso. A unidade adotada nas contas de luz para essa energia é o:",
    opcoes: [
      "watt",
      "volt",
      "ampere",
      "quilowatt-hora",
      "ohm",
    ],
    correta: 3,
    explicacao:
      "O quilowatt-hora corresponde ao consumo de 1 kW durante 1 h, equivalente a 3,6 milhões de joules. Watt é potência, não energia. A conta cobra energia acumulada no mês, e não a potência instalada na residência.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Uma lâmpada de 100 W permanece ligada durante 10 h. A energia consumida é de:",
    opcoes: [
      "1 kWh",
      "0,1 kWh",
      "10 kWh",
      "100 kWh",
      "1 000 kWh",
    ],
    correta: 0,
    explicacao:
      "A potência em quilowatts é 0,1 kW, e 0,1 · 10 = 1 kWh. Converter watts em quilowatts antes de multiplicar evita o erro mais comum. Em 30 dias, esse uso somaria 30 kWh.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um gerador real apresenta resistência interna. Por causa dela, a tensão disponível em seus terminais, quando fornece corrente, é:",
    opcoes: [
      "menor que sua força eletromotriz.",
      "maior que sua força eletromotriz.",
      "exatamente igual à força eletromotriz.",
      "sempre nula.",
      "independente da corrente fornecida.",
    ],
    correta: 0,
    explicacao:
      "Parte da energia se dissipa internamente, e a tensão útil é U = ε − r·i. Quanto maior a corrente, maior essa perda. Com o gerador em circuito aberto, a corrente é nula e a tensão nos terminais iguala a força eletromotriz.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Ao ligar um chuveiro elétrico na posição inverno, a resistência do aparelho é reduzida. Com isso, a potência dissipada:",
    opcoes: [
      "diminui",
      "permanece constante",
      "aumenta",
      "torna-se nula",
      "depende apenas do tempo de banho",
    ],
    correta: 2,
    explicacao:
      "Sob tensão fixa, P = U²/R: reduzir a resistência aumenta a potência e, portanto, o aquecimento. Por isso a posição inverno consome mais energia. É também nessa posição que a corrente atinge seu valor máximo.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Três resistores iguais de 30 Ω são associados em paralelo. A resistência equivalente é de:",
    opcoes: [
      "10 Ω",
      "15 Ω",
      "30 Ω",
      "60 Ω",
      "90 Ω",
    ],
    correta: 0,
    explicacao:
      "Com n resistores iguais em paralelo, a equivalente é R/n = 30/3 = 10 Ω. Cada resistor recebe a mesma tensão, e a corrente total é a soma das três correntes individuais. O resultado é sempre menor que qualquer resistor isolado.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um curto-circuito ocorre quando dois pontos de um circuito são ligados por um caminho de resistência muito baixa. A consequência imediata é:",
    opcoes: [
      "redução acentuada da corrente.",
      "aumento da resistência total do circuito.",
      "aumento acentuado da corrente, com risco de aquecimento e incêndio.",
      "interrupção espontânea da tensão da fonte.",
      "conversão da corrente alternada em contínua.",
    ],
    correta: 2,
    explicacao:
      "Com resistência quase nula, a corrente cresce enormemente, conforme a lei de Ohm. O efeito Joule aquece rapidamente os condutores, o que pode derreter isolamentos e provocar incêndio. Fusíveis e disjuntores existem para interromper o circuito nesses casos.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um aparelho projetado para 110 V é ligado indevidamente em uma tomada de 220 V. A potência dissipada nele torna-se aproximadamente:",
    opcoes: [
      "metade da nominal",
      "igual à nominal",
      "o dobro da nominal",
      "quatro vezes a nominal",
      "nula",
    ],
    correta: 3,
    explicacao:
      "Como P = U²/R e a resistência do aparelho não muda, dobrar a tensão quadruplica a potência. O excesso de calor costuma queimar o equipamento em segundos. É por isso que a atenção à tensão nominal é essencial.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Sobre a diferença entre corrente contínua e corrente alternada, é correto afirmar que na corrente alternada:",
    opcoes: [
      "o sentido do movimento das cargas permanece fixo.",
      "não há movimento de cargas.",
      "o sentido da corrente se inverte periodicamente.",
      "a tensão é sempre nula.",
      "a frequência é sempre zero.",
    ],
    correta: 2,
    explicacao:
      "Na rede brasileira, a inversão ocorre 60 vezes por segundo, o que define a frequência de 60 Hz. Pilhas e baterias fornecem corrente contínua, de sentido constante. A corrente alternada facilita a transformação de tensões e o transporte a longas distâncias.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Um resistor de 5 Ω dissipa potência de 45 W. A corrente que o percorre é de:",
    opcoes: [
      "1 A",
      "5 A",
      "3 A",
      "9 A",
      "225 A",
    ],
    correta: 2,
    explicacao:
      "Usando P = R·i²: 45 = 5·i², logo i² = 9 e i = 3 A. A tensão correspondente seria 15 V. Sempre que a potência e a resistência são conhecidas, essa é a forma mais direta de obter a corrente.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Ao aumentar a temperatura de um condutor metálico, sua resistência elétrica geralmente:",
    opcoes: [
      "diminui",
      "permanece constante",
      "aumenta",
      "torna-se negativa",
      "reduz-se a zero",
    ],
    correta: 2,
    explicacao:
      "A agitação térmica intensifica as colisões entre elétrons e a rede cristalina, dificultando o fluxo. Em semicondutores ocorre o oposto: o aquecimento libera portadores e reduz a resistência. Em supercondutores, abaixo de certa temperatura, a resistência se anula.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "A resistividade é uma grandeza que caracteriza:",
    opcoes: [
      "a geometria do fio condutor.",
      "a tensão aplicada ao circuito.",
      "o material de que o condutor é feito.",
      "a corrente máxima suportada.",
      "o tempo de funcionamento do aparelho.",
    ],
    correta: 2,
    explicacao:
      "Cobre e alumínio têm resistividade baixa, o que os torna bons condutores; borracha e vidro têm valores altíssimos e servem como isolantes. A resistência de um fio combina essa propriedade do material com comprimento e área da seção.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Em uma residência, aparelhos de alta potência exigem fios de maior bitola porque:",
    opcoes: [
      "fios grossos aumentam a tensão disponível.",
      "fios grossos reduzem o consumo de energia.",
      "fios grossos têm menor resistência e aquecem menos com correntes altas.",
      "fios finos conduzem melhor a corrente.",
      "a bitola não influencia a segurança.",
    ],
    correta: 2,
    explicacao:
      "Maior área da seção reduz a resistência e, com ela, a dissipação por efeito Joule. Fio subdimensionado aquece, degrada o isolamento e pode causar incêndio. Normas técnicas relacionam a corrente esperada à bitola mínima exigida.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Um circuito é formado por uma bateria de 24 V e três resistores de 2 Ω, 4 Ω e 6 Ω associados em série. A tensão nos terminais do resistor de 4 Ω é de:",
    opcoes: [
      "2 V",
      "4 V",
      "8 V",
      "12 V",
      "24 V",
    ],
    correta: 2,
    explicacao:
      "A resistência equivalente é 12 Ω e a corrente, 24/12 = 2 A. No resistor de 4 Ω, a tensão é U = 4 · 2 = 8 V. As tensões nos três resistores somam 4 + 8 + 12 = 24 V, exatamente a tensão da fonte.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Uma pilha comum de 1,5 V ligada a um pequeno motor fornece a esse circuito:",
    opcoes: [
      "corrente alternada de alta frequência.",
      "tensão variável periodicamente.",
      "potência infinita.",
      "corrente contínua, com sentido constante.",
      "resistência elétrica negativa.",
    ],
    correta: 3,
    explicacao:
      "Pilhas e baterias produzem corrente contínua, com polaridade fixa. É por isso que inverter os polos altera o sentido de rotação de um motor de corrente contínua. Já a rede elétrica fornece corrente alternada.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Ao acrescentar mais um aparelho a um circuito residencial em paralelo, a resistência equivalente da instalação:",
    opcoes: [
      "aumenta, reduzindo a corrente total.",
      "permanece constante.",
      "torna-se infinita.",
      "diminui, aumentando a corrente total.",
      "passa a depender apenas do fio terra.",
    ],
    correta: 3,
    explicacao:
      "Cada novo caminho em paralelo reduz a resistência equivalente e eleva a corrente exigida da rede. É por isso que ligar muitos aparelhos na mesma tomada pode sobrecarregar o circuito e acionar o disjuntor.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "O disjuntor de um circuito residencial desarma quando:",
    opcoes: [
      "a tensão da rede cai abaixo do valor nominal.",
      "a resistência dos fios aumenta demais.",
      "todos os aparelhos são desligados.",
      "a corrente ultrapassa o valor máximo previsto.",
      "a frequência da rede se altera.",
    ],
    correta: 3,
    explicacao:
      "O disjuntor monitora a corrente e interrompe o circuito quando ela excede o limite, protegendo a fiação contra superaquecimento. Diferentemente do fusível, pode ser rearmado após a correção do problema. Sobrecarga e curto-circuito são as causas mais comuns.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Sobre um resistor considerado ôhmico, é correto afirmar que ele:",
    opcoes: [
      "tem resistência constante, independentemente da tensão aplicada.",
      "tem resistência que cresce com a corrente.",
      "não dissipa energia por efeito Joule.",
      "conduz corrente apenas em um sentido.",
      "possui resistência nula.",
    ],
    correta: 0,
    explicacao:
      "Em resistores ôhmicos, o gráfico de tensão por corrente é uma reta pela origem, indicando proporcionalidade. Lâmpadas incandescentes fogem desse comportamento porque a resistência do filamento muda muito com a temperatura. Diodos conduzem preferencialmente em um sentido.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Uma bateria de 12 V e resistência interna 0,5 Ω alimenta um resistor externo de 5,5 Ω. A corrente no circuito é de:",
    opcoes: [
      "1 A",
      "2,2 A",
      "6 A",
      "2 A",
      "24 A",
    ],
    correta: 3,
    explicacao:
      "A resistência total inclui a interna: 5,5 + 0,5 = 6 Ω, e i = 12/6 = 2 A. A tensão útil nos terminais é 12 − 0,5 · 2 = 11 V. Ignorar a resistência interna superestimaria a corrente.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "As lâmpadas LED consomem menos energia que as incandescentes para produzir a mesma iluminação porque:",
    opcoes: [
      "operam com tensão muito mais alta.",
      "não dissipam energia alguma.",
      "possuem resistência infinita.",
      "funcionam apenas com corrente contínua.",
      "convertem em luz uma fração muito maior da energia elétrica recebida.",
    ],
    correta: 4,
    explicacao:
      "Lâmpadas incandescentes transformam a maior parte da energia em calor e apenas uma pequena fração em luz. LEDs invertem essa proporção, com eficiência luminosa várias vezes maior. Daí a substituição em programas de eficiência energética.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Ao medir a corrente que atravessa uma lâmpada, um estudante liga o amperímetro em paralelo com ela. O resultado esperado é:",
    opcoes: [
      "medição correta da corrente da lâmpada.",
      "leitura nula no instrumento.",
      "aumento da resistência do circuito.",
      "inversão do sentido da corrente.",
      "curto-circuito, com corrente muito alta pelo aparelho.",
    ],
    correta: 4,
    explicacao:
      "O amperímetro tem resistência muito baixa; ligado em paralelo, oferece um caminho quase sem resistência e provoca curto-circuito. Isso pode danificar o instrumento e a fonte. A ligação correta é sempre em série.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Em uma associação mista de resistores, o procedimento correto de simplificação consiste em:",
    opcoes: [
      "somar todos os valores diretamente.",
      "dividir o total pelo número de resistores.",
      "considerar apenas o maior resistor.",
      "ignorar os resistores em paralelo.",
      "resolver primeiro os trechos em série e em paralelo isoladamente, reduzindo o circuito por etapas.",
    ],
    correta: 4,
    explicacao:
      "Identificam-se blocos claramente em série ou em paralelo, calcula-se a equivalente de cada bloco e substitui-se por um único resistor, repetindo o processo. A redução por etapas evita erros em circuitos complexos.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Todo aparelho elétrico traz em sua etiqueta a chamada tensão nominal. Esse valor indica:",
    opcoes: [
      "a corrente máxima que ele suporta.",
      "a energia total que consumirá em sua vida útil.",
      "a resistência interna de seus componentes.",
      "a frequência da rede elétrica.",
      "a tensão para a qual foi projetado funcionar corretamente.",
    ],
    correta: 4,
    explicacao:
      "Operar acima da tensão nominal eleva a potência e pode queimar o aparelho; abaixo dela, o desempenho fica comprometido. Aparelhos bivolt possuem circuitos que se adaptam às duas tensões usuais da rede brasileira.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Dois resistores de 10 Ω e 40 Ω estão associados em paralelo sob tensão de 20 V. A corrente total fornecida pela fonte é de:",
    opcoes: [
      "0,4 A",
      "0,5 A",
      "2 A",
      "2,5 A",
      "4 A",
    ],
    correta: 3,
    explicacao:
      "Cada resistor recebe 20 V: as correntes são 2 A e 0,5 A, somando 2,5 A. A resistência equivalente é 8 Ω, e 20/8 confirma o mesmo valor. O resistor de menor resistência conduz a maior parte da corrente.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "A transmissão de energia elétrica a longas distâncias é feita em alta tensão porque isso permite:",
    opcoes: [
      "aumentar a corrente e reduzir o custo dos cabos.",
      "eliminar completamente a resistência dos fios.",
      "converter energia elétrica em mecânica.",
      "aumentar a frequência da rede.",
      "reduzir a corrente e diminuir as perdas por efeito Joule.",
    ],
    correta: 4,
    explicacao:
      "Para a mesma potência transmitida, tensão alta implica corrente baixa, e as perdas por aquecimento variam com o quadrado da corrente. Transformadores elevam a tensão na saída das usinas e a reduzem perto dos consumidores.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Sobre o sentido convencional da corrente elétrica, adotado nos estudos de circuitos, é correto afirmar que ele:",
    opcoes: [
      "coincide com o movimento real dos elétrons.",
      "varia aleatoriamente ao longo do circuito.",
      "só existe em corrente alternada.",
      "aponta sempre para o polo negativo da fonte.",
      "é oposto ao movimento real dos elétrons nos metais.",
    ],
    correta: 4,
    explicacao:
      "A convenção foi estabelecida antes da descoberta do elétron e supõe cargas positivas em movimento, do polo positivo para o negativo pelo circuito externo. Os elétrons se deslocam no sentido contrário. A convenção foi mantida por não afetar os resultados dos cálculos.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Um circuito residencial tem disjuntor de 20 A e tensão de 127 V. A potência máxima que pode ser ligada nesse circuito é de aproximadamente:",
    opcoes: [
      "254 W",
      "1 270 W",
      "2 540 W",
      "6 350 W",
      "12 700 W",
    ],
    correta: 2,
    explicacao:
      "A potência máxima é P = U · i = 127 · 20 ≈ 2 540 W. Ultrapassar esse valor faz o disjuntor desarmar. É por isso que ligar chuveiro e outro aparelho de alta potência no mesmo circuito costuma interromper a energia.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Ao substituir uma lâmpada de 60 W por outra de 15 W com iluminação equivalente, a economia obtida decorre da redução:",
    opcoes: [
      "da tensão aplicada à lâmpada.",
      "da frequência da rede elétrica.",
      "da resistência dos fios da instalação.",
      "do número de horas de uso diário.",
      "da potência consumida, mantendo o mesmo tempo de uso.",
    ],
    correta: 4,
    explicacao:
      "A energia consumida é potência vezes tempo; reduzindo a potência a um quarto, o consumo cai na mesma proporção para o mesmo tempo de uso. A tensão da rede permanece a mesma. É esse cálculo que sustenta os programas de troca de lâmpadas.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "dificil",
    enunciado:
      "Um resistor dissipa 200 J de energia em 10 s. A potência desse resistor é de:",
    opcoes: [
      "2 W",
      "200 W",
      "2 000 W",
      "0,05 W",
      "20 W",
    ],
    correta: 4,
    explicacao:
      "Potência é energia dividida por tempo: 200/10 = 20 W. Se esse resistor estivesse ligado a 10 V, a corrente seria de 2 A. A potência mede a rapidez da conversão de energia elétrica em calor.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "O fio terra em uma instalação elétrica residencial tem a função de:",
    opcoes: [
      "aumentar a tensão disponível nas tomadas.",
      "reduzir o consumo de energia dos aparelhos.",
      "transformar corrente contínua em alternada.",
      "elevar a resistência dos equipamentos.",
      "conduzir para o solo correntes de fuga, protegendo o usuário.",
    ],
    correta: 4,
    explicacao:
      "Se a carcaça de um aparelho ficar energizada por falha de isolamento, o fio terra oferece caminho de baixa resistência até o solo, evitando que a corrente passe pela pessoa. Ele é essencial em chuveiros, máquinas de lavar e computadores.",
  },
  {
    materia: "fisica",
    tema: "Circuitos elétricos e leis de Ohm",
    dificuldade: "media",
    enunciado:
      "Em um circuito puramente resistivo, ao dobrar a tensão aplicada mantendo a resistência, a potência dissipada:",
    opcoes: [
      "dobra",
      "reduz-se à metade",
      "permanece constante",
      "torna-se nula",
      "quadruplica",
    ],
    correta: 4,
    explicacao:
      "Como P = U²/R, a potência depende do quadrado da tensão: dobrar U multiplica P por quatro. A corrente, por sua vez, apenas dobra. Essa diferença explica por que ligar um aparelho de 110 V em 220 V costuma ser fatal para ele.",
  },
];
