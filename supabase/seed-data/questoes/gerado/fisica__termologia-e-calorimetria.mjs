/* Termologia e calorimetria (50 questões).
   Temperatura e calor, escalas termométricas, dilatação, calor sensível e
   latente, mudanças de estado, trocas de calor e formas de propagação.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "facil",
    enunciado:
      "Em termologia, distinguem-se os conceitos de calor e temperatura. É correto afirmar que o calor corresponde:",
    opcoes: [
      "ao grau de agitação das partículas de um corpo.",
      "à energia térmica em trânsito entre corpos de temperaturas diferentes.",
      "à quantidade total de energia armazenada em um corpo.",
      "à propriedade que impede a dilatação dos materiais.",
      "à temperatura medida em graus Celsius.",
    ],
    correta: 1,
    explicacao:
      "Calor só existe em trânsito: é a energia que passa espontaneamente do corpo mais quente para o mais frio. Temperatura, por sua vez, mede o grau de agitação das partículas. Por isso não faz sentido dizer que um corpo possui calor, mas sim energia interna.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "facil",
    enunciado:
      "Uma temperatura de 27 °C, convertida para a escala Kelvin, corresponde a:",
    opcoes: [
      "246 K",
      "273 K",
      "300 K",
      "327 K",
      "573 K",
    ],
    correta: 2,
    explicacao:
      "A conversão é T(K) = t(°C) + 273, então 27 + 273 = 300 K. A escala Kelvin é absoluta: seu zero corresponde à menor temperatura teoricamente possível. As duas escalas têm divisões de mesmo tamanho, o que faz variações coincidirem numericamente.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma temperatura de 68 °F, convertida para a escala Celsius, corresponde a:",
    opcoes: [
      "10 °C",
      "15 °C",
      "20 °C",
      "25 °C",
      "36 °C",
    ],
    correta: 2,
    explicacao:
      "A relação é (F − 32)/9 = C/5, então (68 − 32)/9 = 4 e C = 20 °C. A escala Fahrenheit adota 32 para a fusão do gelo e 212 para a ebulição da água. As duas escalas coincidem numericamente em −40 graus.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "O zero absoluto, menor temperatura teoricamente possível, corresponde, na escala Celsius, a:",
    opcoes: [
      "0 °C",
      "−100 °C",
      "−273 °C",
      "−373 °C",
      "−459 °C",
    ],
    correta: 2,
    explicacao:
      "O zero absoluto vale 0 K, ou aproximadamente −273,15 °C. Nessa condição a agitação térmica das partículas seria mínima. O valor de −459 corresponde ao mesmo ponto, mas na escala Fahrenheit.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma barra metálica de 2 m sofre variação de temperatura de 50 °C. Sendo o coeficiente de dilatação linear igual a 2 × 10⁻⁵ °C⁻¹, a dilatação da barra é de:",
    opcoes: [
      "0,2 mm",
      "1 mm",
      "2 mm",
      "20 mm",
      "200 mm",
    ],
    correta: 2,
    explicacao:
      "Aplicando ΔL = L₀·α·Δt = 2 · 2 × 10⁻⁵ · 50 = 2 × 10⁻³ m, ou seja, 2 mm. Dilatações lineares costumam ser pequenas, mas em estruturas longas, como pontes e trilhos, tornam-se relevantes — daí as juntas de dilatação.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Sobre os coeficientes de dilatação de um mesmo material sólido, é correto afirmar que o coeficiente de dilatação volumétrica equivale a:",
    opcoes: [
      "metade do coeficiente linear.",
      "o dobro do coeficiente linear.",
      "o triplo do coeficiente linear.",
      "o quadrado do coeficiente linear.",
      "o mesmo valor do coeficiente linear.",
    ],
    correta: 2,
    explicacao:
      "Como o volume envolve três dimensões, γ = 3α. Analogamente, o coeficiente superficial é β = 2α, porque a área envolve duas dimensões. Essas relações valem para materiais isotrópicos, que dilatam igualmente em todas as direções.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma massa de 200 g de água, cujo calor específico é 1 cal/g·°C, é aquecida de 20 °C para 70 °C. A quantidade de calor absorvida é de:",
    opcoes: [
      "1 000 cal",
      "5 000 cal",
      "10 000 cal",
      "14 000 cal",
      "50 cal",
    ],
    correta: 2,
    explicacao:
      "Aplicando Q = m·c·Δt = 200 · 1 · 50 = 10 000 cal. Esse é o chamado calor sensível, que altera a temperatura sem mudar o estado físico. O calor específico elevado da água explica por que ela demora a esquentar e a esfriar.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Durante a fusão do gelo a 0 °C, o calor recebido pela substância é utilizado para:",
    opcoes: [
      "elevar a temperatura do gelo restante.",
      "romper as ligações e mudar o estado físico, sem variar a temperatura.",
      "aumentar a massa total do sistema.",
      "reduzir a pressão exercida sobre o gelo.",
      "diminuir o calor específico da água formada.",
    ],
    correta: 1,
    explicacao:
      "O calor latente é absorvido integralmente na mudança de estado, mantendo a temperatura constante durante todo o processo. Só depois que todo o gelo derrete a temperatura volta a subir. É por isso que gelo mantém bebidas frias com tanta eficiência.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "O calor latente de fusão do gelo vale 80 cal/g. A quantidade de calor necessária para derreter 50 g de gelo já a 0 °C é de:",
    opcoes: [
      "80 cal",
      "400 cal",
      "1 600 cal",
      "4 000 cal",
      "8 000 cal",
    ],
    correta: 3,
    explicacao:
      "Aplicando Q = m·L = 50 · 80 = 4 000 cal. Nenhuma variação de temperatura ocorre nesse processo: toda a energia vai para a mudança de estado. Para depois aquecer essa água de 0 °C a 100 °C seriam necessárias outras 5 000 cal.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "A transmissão de calor por condução ocorre principalmente:",
    opcoes: [
      "em sólidos, por agitação transmitida entre partículas vizinhas.",
      "apenas no vácuo, por meio de ondas eletromagnéticas.",
      "somente em líquidos, por correntes ascendentes.",
      "exclusivamente em gases aquecidos.",
      "quando não há diferença de temperatura entre os corpos.",
    ],
    correta: 0,
    explicacao:
      "Na condução, as partículas mais agitadas transferem energia às vizinhas sem transporte de matéria, o que a torna típica dos sólidos. Metais são bons condutores por causa dos elétrons livres. Convecção exige fluido em movimento e irradiação dispensa meio material.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "A convecção térmica é o processo de transmissão de calor que ocorre:",
    opcoes: [
      "em sólidos metálicos, por vibração da rede cristalina.",
      "em fluidos, por meio do deslocamento de massas com densidades diferentes.",
      "no vácuo, por ondas eletromagnéticas.",
      "apenas entre corpos em contato direto.",
      "somente quando há mudança de estado físico.",
    ],
    correta: 1,
    explicacao:
      "Ao ser aquecido, o fluido se dilata, torna-se menos denso e sobe, enquanto o mais frio desce, formando correntes de convecção. É o que explica o funcionamento de geladeiras, com o congelador no alto, e a formação de brisas marítimas.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "O calor proveniente do Sol chega à Terra atravessando o vácuo do espaço. Esse processo de transmissão é a:",
    opcoes: [
      "condução",
      "convecção",
      "irradiação",
      "fusão",
      "sublimação",
    ],
    correta: 2,
    explicacao:
      "A irradiação transmite energia por ondas eletromagnéticas e dispensa meio material, sendo a única forma possível através do vácuo. Superfícies escuras absorvem mais radiação, e superfícies espelhadas refletem — princípio usado em garrafas térmicas.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Dois corpos de temperaturas diferentes são colocados em contato dentro de um calorímetro ideal. Ao atingirem o equilíbrio térmico, é correto afirmar que:",
    opcoes: [
      "o calor cedido por um é igual ao calor recebido pelo outro.",
      "os dois corpos passam a ter a mesma quantidade de calor.",
      "o corpo de maior massa fica com temperatura maior.",
      "não há troca de energia entre eles.",
      "a temperatura final é a média aritmética das iniciais.",
    ],
    correta: 0,
    explicacao:
      "Em um sistema isolado, a soma algébrica das quantidades de calor é nula: o que um perde o outro ganha. A temperatura final só seria a média das iniciais se os corpos tivessem capacidades térmicas iguais, o que raramente acontece.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "A capacidade térmica de um corpo é definida como:",
    opcoes: [
      "a quantidade de calor necessária para variar sua temperatura em 1 °C.",
      "a energia necessária para mudar seu estado físico.",
      "o calor específico dividido pela massa do corpo.",
      "a temperatura máxima que o corpo suporta.",
      "a razão entre volume e temperatura.",
    ],
    correta: 0,
    explicacao:
      "A capacidade térmica é C = m·c, e depende tanto do material quanto da massa. Já o calor específico é uma propriedade do material, independente da quantidade. Dois blocos do mesmo metal com massas diferentes têm o mesmo calor específico, mas capacidades térmicas distintas.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "A água apresenta calor específico de 1 cal/g·°C, valor elevado em comparação com o de metais. Uma consequência prática direta desse fato é que:",
    opcoes: [
      "a água ferve a temperaturas muito baixas.",
      "grandes massas de água amenizam variações de temperatura no clima local.",
      "a água não pode ser usada em sistemas de refrigeração.",
      "a água congela mais rapidamente que os metais.",
      "a água conduz calor melhor que qualquer metal.",
    ],
    correta: 1,
    explicacao:
      "Um calor específico alto significa que muita energia é necessária para variar a temperatura. Por isso cidades litorâneas têm amplitude térmica menor que as do interior, e por isso a água é excelente fluido refrigerante em motores.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Um bloco metálico de 500 g recebe 2 500 cal e sua temperatura sobe 50 °C. O calor específico desse metal é de:",
    opcoes: [
      "0,05 cal/g·°C",
      "0,1 cal/g·°C",
      "0,5 cal/g·°C",
      "1 cal/g·°C",
      "5 cal/g·°C",
    ],
    correta: 1,
    explicacao:
      "Isolando na expressão Q = m·c·Δt: c = 2 500/(500 · 50) = 0,1 cal/g·°C. Esse valor é típico de metais, dez vezes menor que o da água — razão pela qual uma panela esquenta muito mais rápido que a água dentro dela.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Ao passar do estado líquido para o gasoso, uma substância realiza a transformação chamada de:",
    opcoes: [
      "fusão",
      "solidificação",
      "vaporização",
      "condensação",
      "sublimação",
    ],
    correta: 2,
    explicacao:
      "A vaporização pode ocorrer por evaporação, lenta e na superfície, ou por ebulição, rápida e em toda a massa. O processo inverso é a condensação. A sublimação, por sua vez, leva direto do sólido ao gasoso, como ocorre com a naftalina.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Ao nível do mar, a água entra em ebulição a 100 °C. Em uma cidade de altitude elevada, essa temperatura de ebulição será:",
    opcoes: [
      "maior, pois a pressão atmosférica é maior.",
      "menor, pois a pressão atmosférica é menor.",
      "exatamente a mesma, pois é constante.",
      "menor, pois a gravidade é maior.",
      "maior, pois o ar é mais rarefeito.",
    ],
    correta: 1,
    explicacao:
      "A ebulição ocorre quando a pressão de vapor iguala a pressão externa; com pressão atmosférica menor, isso acontece em temperatura mais baixa. Em cidades muito altas a água pode ferver perto de 90 °C, o que aumenta o tempo de cozimento dos alimentos.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "A panela de pressão reduz o tempo de cozimento dos alimentos porque, em seu interior:",
    opcoes: [
      "a pressão aumenta e eleva a temperatura de ebulição da água.",
      "a pressão diminui e reduz a temperatura de ebulição.",
      "o calor específico da água diminui.",
      "a água deixa de mudar de estado físico.",
      "a condução de calor é substituída por irradiação.",
    ],
    correta: 0,
    explicacao:
      "Com a válvula fechada, o vapor eleva a pressão interna, e a água passa a ferver acima de 100 °C — em torno de 120 °C. Temperatura mais alta acelera as reações de cozimento. É a mesma física da ebulição em altitude, mas no sentido inverso.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Misturam-se 100 g de água a 80 °C com 100 g de água a 20 °C, em recipiente isolado. A temperatura final de equilíbrio é de:",
    opcoes: [
      "30 °C",
      "40 °C",
      "50 °C",
      "60 °C",
      "70 °C",
    ],
    correta: 2,
    explicacao:
      "Com massas iguais e mesma substância, a temperatura final é a média aritmética: (80 + 20)/2 = 50 °C. Formalmente, o calor cedido pela água quente iguala o recebido pela fria. Se as massas fossem diferentes, a média seria ponderada.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Trilhos de trem e pontes são construídos com pequenos espaços entre suas seções. Essa prática tem por finalidade:",
    opcoes: [
      "reduzir o peso total da estrutura.",
      "permitir a dilatação térmica sem deformação da estrutura.",
      "facilitar a drenagem da água da chuva.",
      "diminuir o atrito com as rodas dos veículos.",
      "aumentar a condutividade térmica do material.",
    ],
    correta: 1,
    explicacao:
      "Sem as juntas, a dilatação em dias quentes geraria tensões capazes de entortar trilhos e trincar concreto. O espaço permite que o material se expanda livremente. O mesmo cuidado aparece em tubulações e em revestimentos cerâmicos.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma variação de temperatura de 40 °C corresponde, na escala Kelvin, a uma variação de:",
    opcoes: [
      "40 K",
      "233 K",
      "273 K",
      "313 K",
      "104 K",
    ],
    correta: 0,
    explicacao:
      "As divisões das escalas Celsius e Kelvin têm o mesmo tamanho, então variações coincidem numericamente. A soma de 273 só se aplica a valores absolutos de temperatura, nunca a variações. Confundir os dois casos é erro muito frequente.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Roupas de lã aquecem o corpo em dias frios principalmente porque:",
    opcoes: [
      "produzem calor por reação química.",
      "aprisionam ar, que é mau condutor, reduzindo a perda de calor.",
      "aumentam a temperatura corporal por irradiação.",
      "eliminam a convecção dentro do corpo.",
      "possuem calor específico muito baixo.",
    ],
    correta: 1,
    explicacao:
      "A lã não gera calor: ela dificulta a saída do calor produzido pelo corpo, graças ao ar retido entre as fibras. O ar parado é excelente isolante térmico. Por isso várias camadas finas aquecem mais que uma peça única e grossa.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Um recipiente contém 200 g de gelo a 0 °C. Sendo o calor latente de fusão 80 cal/g e o calor específico da água 1 cal/g·°C, a energia necessária para transformar todo o gelo em água a 30 °C é de:",
    opcoes: [
      "6 000 cal",
      "16 000 cal",
      "22 000 cal",
      "24 000 cal",
      "30 000 cal",
    ],
    correta: 2,
    explicacao:
      "A fusão consome 200 · 80 = 16 000 cal, e o aquecimento posterior consome 200 · 1 · 30 = 6 000 cal, totalizando 22 000 cal. O processo tem duas etapas distintas: primeiro calor latente, depois calor sensível. Somar as duas parcelas é o passo decisivo.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "A garrafa térmica mantém a temperatura de seu conteúdo por longos períodos porque sua estrutura:",
    opcoes: [
      "elimina apenas a condução de calor.",
      "combina vácuo e paredes espelhadas para reduzir as três formas de propagação.",
      "produz calor continuamente por meio de resistências.",
      "aumenta o calor específico do líquido armazenado.",
      "impede que o líquido mude de estado físico.",
    ],
    correta: 1,
    explicacao:
      "O vácuo entre as paredes bloqueia condução e convecção, que exigem meio material, e o espelhamento reflete a radiação de volta. A tampa impede a saída de vapor. É um projeto que ataca simultaneamente os três mecanismos de transferência.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Ao aquecer uma chapa metálica com um orifício circular no centro, observa-se que o diâmetro desse orifício:",
    opcoes: [
      "diminui, porque o metal se expande para dentro.",
      "aumenta, acompanhando a dilatação do material.",
      "permanece constante, pois o vazio não dilata.",
      "diminui apenas se a chapa for muito fina.",
      "varia de forma imprevisível.",
    ],
    correta: 1,
    explicacao:
      "O orifício dilata como se fosse feito do mesmo material da chapa: todas as distâncias entre pontos do sólido aumentam proporcionalmente. É por isso que aquecer a tampa metálica de um vidro facilita sua abertura.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Um corpo é dito em equilíbrio térmico com outro quando:",
    opcoes: [
      "os dois possuem a mesma quantidade de energia interna.",
      "um deles atinge o ponto de fusão.",
      "os dois têm a mesma massa.",
      "os dois estão à mesma temperatura e não trocam calor líquido.",
      "não existe contato físico entre eles.",
    ],
    correta: 3,
    explicacao:
      "O equilíbrio térmico é definido pela igualdade de temperaturas, e nele cessa a transferência líquida de calor. Energias internas podem continuar muito diferentes, porque dependem também da massa e do material. Essa é a base da lei zero da termodinâmica.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "A água apresenta comportamento anômalo entre 0 °C e 4 °C: nesse intervalo, ao ser aquecida, seu volume:",
    opcoes: [
      "aumenta, como na maioria das substâncias.",
      "permanece rigorosamente constante.",
      "oscila de forma imprevisível.",
      "diminui, contrariando o comportamento usual.",
      "triplica em relação ao valor inicial.",
    ],
    correta: 3,
    explicacao:
      "A água atinge densidade máxima a 4 °C; abaixo disso, o arranjo das moléculas ocupa mais espaço. Por isso o gelo flutua e os lagos congelam de cima para baixo, preservando a vida aquática sob a camada congelada.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma substância passa diretamente do estado sólido para o gasoso, sem se tornar líquida. Essa transformação é chamada de:",
    opcoes: [
      "fusão",
      "vaporização",
      "condensação",
      "sublimação",
      "solidificação",
    ],
    correta: 3,
    explicacao:
      "A sublimação ocorre com naftalina, gelo-seco e iodo em condições ambientes. O processo inverso, do gás direto para o sólido, é chamado de ressublimação ou deposição, e explica a formação de geada.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma barra de alumínio e uma de ferro, de mesmo comprimento inicial, são aquecidas igualmente. O alumínio dilata mais porque:",
    opcoes: [
      "sua massa é maior.",
      "sua temperatura final é mais alta.",
      "seu calor específico é menor.",
      "seu coeficiente de dilatação linear é maior.",
      "conduz calor mais lentamente.",
    ],
    correta: 3,
    explicacao:
      "A dilatação depende do coeficiente característico de cada material, e o do alumínio é cerca do dobro do ferro. Essa diferença é aproveitada nas lâminas bimetálicas, que se curvam ao serem aquecidas e acionam termostatos.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma massa de 300 g de certa substância recebe 1 800 cal e sua temperatura sobe 30 °C. A capacidade térmica desse corpo é de:",
    opcoes: [
      "6 cal/°C",
      "10 cal/°C",
      "600 cal/°C",
      "60 cal/°C",
      "0,2 cal/°C",
    ],
    correta: 3,
    explicacao:
      "A capacidade térmica é C = Q/Δt = 1 800/30 = 60 cal/°C. Ela já incorpora a massa do corpo. O calor específico correspondente seria 60/300 = 0,2 cal/g·°C.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Em uma geladeira doméstica, o congelador é posicionado na parte superior porque:",
    opcoes: [
      "o ar frio é mais denso e desce, criando correntes de convecção.",
      "o ar quente é mais denso e sobe até o congelador.",
      "a condução só funciona de cima para baixo.",
      "a irradiação exige posição elevada.",
      "os alimentos leves ficam sempre em cima.",
    ],
    correta: 0,
    explicacao:
      "O ar resfriado torna-se mais denso e desce, enquanto o mais quente sobe para ser resfriado, estabelecendo circulação natural. Se o congelador ficasse embaixo, o ar frio se acumularia lá e a parte de cima não resfriaria adequadamente.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de 500 g e calor específico 0,4 cal/g·°C, inicialmente a 100 °C, é colocado em 200 g de água a 20 °C. Desprezando perdas, a temperatura final de equilíbrio é de:",
    opcoes: [
      "30 °C",
      "36 °C",
      "40 °C",
      "50 °C",
      "60 °C",
    ],
    correta: 4,
    explicacao:
      "A capacidade térmica do corpo é 500 · 0,4 = 200 cal/°C, e a da água é 200 · 1 = 200 cal/°C. Como são iguais, a temperatura final é a média das iniciais: 60 °C. Conferindo: o corpo cede 200 · 40 = 8 000 cal e a água recebe exatamente os mesmos 8 000 cal.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Ao sair molhado da piscina, uma pessoa sente frio mesmo em dia quente. A explicação física para essa sensação é que:",
    opcoes: [
      "a água da piscina está sempre gelada.",
      "a condução com o ar aquece a pele rapidamente.",
      "a irradiação solar é bloqueada pela água.",
      "a evaporação da água na pele retira calor do corpo.",
      "o calor específico do corpo aumenta quando molhado.",
    ],
    correta: 3,
    explicacao:
      "A vaporização exige calor latente, retirado da própria pele, o que provoca resfriamento. É o mesmo mecanismo da transpiração e dos antigos potes de barro, que resfriam a água por evaporação através das paredes porosas.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Durante a mudança de estado de uma substância pura, sob pressão constante, a temperatura:",
    opcoes: [
      "aumenta continuamente até o fim do processo.",
      "diminui até o congelamento total.",
      "oscila entre dois valores fixos.",
      "depende apenas da massa da substância.",
      "permanece constante enquanto a mudança ocorre.",
    ],
    correta: 4,
    explicacao:
      "Todo o calor trocado é usado para reorganizar as ligações entre partículas, e não para aumentar a agitação térmica. Por isso o gráfico de aquecimento apresenta patamares horizontais nas mudanças de estado. Substâncias impuras, como misturas, não mantêm essa constância.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Metais são bons condutores térmicos, ao contrário da madeira e do isopor. A principal razão para isso é a presença, nos metais, de:",
    opcoes: [
      "elétrons livres que transportam energia rapidamente.",
      "grande quantidade de ar retido na estrutura.",
      "moléculas de água em sua composição.",
      "superfícies escuras que absorvem radiação.",
      "densidade sempre menor que a da madeira.",
    ],
    correta: 0,
    explicacao:
      "Os elétrons livres se deslocam com facilidade e distribuem energia térmica rapidamente pela peça. Materiais isolantes retêm ar em poros, e o ar parado conduz mal. É por isso que uma colher de metal esquenta muito mais rápido que uma de madeira.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "A temperatura de 0 K, na escala absoluta, corresponde na escala Celsius a aproximadamente:",
    opcoes: [
      "0 °C",
      "100 °C",
      "−100 °C",
      "−273 °C",
      "273 °C",
    ],
    correta: 3,
    explicacao:
      "O zero absoluto equivale a −273,15 °C e representa o limite inferior de temperatura. Não existem temperaturas negativas na escala Kelvin. Experimentos conseguem chegar muito perto desse valor, mas nunca atingi-lo.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Um recipiente de vidro totalmente cheio de líquido é aquecido, e parte do líquido transborda. Isso ocorre porque:",
    opcoes: [
      "o vidro não sofre dilatação alguma.",
      "o líquido perde massa ao ser aquecido.",
      "a pressão atmosférica empurra o líquido para fora.",
      "o vidro contrai ao ser aquecido.",
      "o líquido dilata mais que o recipiente que o contém.",
    ],
    correta: 4,
    explicacao:
      "Os dois dilatam, mas os líquidos têm coeficientes de dilatação bem maiores que os sólidos. O volume que transborda é chamado de dilatação aparente, e corresponde à diferença entre as duas dilatações. É por isso que garrafas nunca são enchidas até a boca.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma pessoa mede a temperatura ambiente e encontra 25 °C. Essa mesma temperatura, na escala Fahrenheit, corresponde a:",
    opcoes: [
      "45 °F",
      "57 °F",
      "68 °F",
      "77 °F",
      "98 °F",
    ],
    correta: 3,
    explicacao:
      "Aplicando F = 1,8 · C + 32 = 1,8 · 25 + 32 = 45 + 32 = 77 °F. A escala Fahrenheit é usada sobretudo nos Estados Unidos. Uma referência útil: 98,6 °F corresponde aos 37 °C da temperatura corporal.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Sobre a diferença entre evaporação e ebulição, é correto afirmar que a evaporação:",
    opcoes: [
      "ocorre apenas na superfície do líquido e em qualquer temperatura.",
      "acontece em toda a massa do líquido simultaneamente.",
      "só ocorre acima do ponto de ebulição.",
      "não envolve troca de calor com o ambiente.",
      "é mais rápida que a ebulição em qualquer condição.",
    ],
    correta: 0,
    explicacao:
      "A evaporação é lenta, superficial e ocorre em qualquer temperatura, dependendo de umidade, ventilação e área exposta. A ebulição é rápida, ocorre em toda a massa e exige a temperatura característica de ebulição. Roupas secam no varal por evaporação, não por ebulição.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma lâmina bimetálica, formada por dois metais de coeficientes de dilatação diferentes soldados entre si, ao ser aquecida:",
    opcoes: [
      "permanece perfeitamente reta.",
      "curva-se para o lado do metal que dilata mais.",
      "separa-se completamente em duas peças.",
      "muda de estado físico.",
      "curva-se para o lado do metal que dilata menos.",
    ],
    correta: 4,
    explicacao:
      "O metal que dilata mais fica na parte externa da curva, o que faz a lâmina se curvar para o lado do que dilata menos. Esse movimento é usado para abrir e fechar circuitos em termostatos de ferros de passar e chuveiros.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Um corpo cede 5 000 cal ao ambiente e sua temperatura cai 25 °C. A capacidade térmica desse corpo é de:",
    opcoes: [
      "50 cal/°C",
      "125 cal/°C",
      "500 cal/°C",
      "1 250 cal/°C",
      "200 cal/°C",
    ],
    correta: 4,
    explicacao:
      "A capacidade térmica é C = 5 000/25 = 200 cal/°C. O sinal negativo do calor cedido não altera o valor da capacidade, que é sempre positiva. Corpos com capacidade térmica alta demoram mais para variar de temperatura.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Em um gráfico de temperatura em função do calor recebido por uma substância pura, os trechos horizontais representam:",
    opcoes: [
      "aquecimento sem troca de calor.",
      "resfriamento rápido da substância.",
      "erros de medição do experimento.",
      "aumento da massa da amostra.",
      "mudanças de estado físico, com temperatura constante.",
    ],
    correta: 4,
    explicacao:
      "Durante a fusão e a vaporização, o calor recebido não altera a temperatura, o que produz patamares no gráfico. A extensão de cada patamar é proporcional ao calor latente e à massa. Os trechos inclinados correspondem ao calor sensível.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Casas em regiões de clima quente costumam ser pintadas de branco. A justificativa física para essa escolha é que superfícies claras:",
    opcoes: [
      "absorvem menos radiação solar que superfícies escuras.",
      "conduzem calor mais rapidamente para o interior.",
      "impedem completamente a convecção do ar.",
      "aumentam o calor específico das paredes.",
      "eliminam a irradiação térmica das paredes.",
    ],
    correta: 0,
    explicacao:
      "Cores claras refletem boa parte da radiação incidente, enquanto cores escuras absorvem mais e aquecem. O efeito é o mesmo que faz uma camiseta preta ser mais quente ao sol. Telhados claros reduzem sensivelmente a temperatura interna das construções.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Uma quantidade de calor de 3 000 cal é fornecida a 150 g de uma substância de calor específico 0,4 cal/g·°C. A variação de temperatura sofrida é de:",
    opcoes: [
      "5 °C",
      "20 °C",
      "60 °C",
      "500 °C",
      "50 °C",
    ],
    correta: 4,
    explicacao:
      "Isolando Δt em Q = m·c·Δt: Δt = 3 000/(150 · 0,4) = 3 000/60 = 50 °C. Materiais com calor específico baixo esquentam mais para a mesma energia recebida, o que explica por que a areia da praia queima os pés enquanto a água permanece agradável.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "O calor latente de vaporização da água vale 540 cal/g. A energia necessária para vaporizar 20 g de água já a 100 °C é de:",
    opcoes: [
      "540 cal",
      "1 080 cal",
      "5 400 cal",
      "10 800 cal",
      "27 cal",
    ],
    correta: 3,
    explicacao:
      "Aplicando Q = m·L = 20 · 540 = 10 800 cal. Note que vaporizar exige muito mais energia que fundir, cujo calor latente é 80 cal/g. É essa diferença que torna o vapor tão eficiente para transportar energia em usinas termelétricas.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "As brisas marítimas, que sopram do mar para o continente durante o dia, formam-se porque:",
    opcoes: [
      "a areia aquece mais rapidamente que a água, criando correntes de convecção.",
      "a água aquece mais rapidamente que a areia.",
      "o mar irradia calor diretamente para o continente.",
      "a condução transporta calor do mar para a praia.",
      "a pressão atmosférica é igual nos dois locais.",
    ],
    correta: 0,
    explicacao:
      "O calor específico da areia é bem menor que o da água, então ela esquenta mais rápido durante o dia. O ar sobre a areia sobe e é substituído pelo ar mais frio vindo do mar. À noite o processo se inverte, gerando a brisa terrestre.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "dificil",
    enunciado:
      "Dois corpos de materiais diferentes recebem a mesma quantidade de calor e apresentam a mesma massa. O corpo que sofrerá maior variação de temperatura será aquele com:",
    opcoes: [
      "maior calor específico.",
      "maior densidade.",
      "maior volume.",
      "maior coeficiente de dilatação.",
      "menor calor específico.",
    ],
    correta: 4,
    explicacao:
      "Da relação Δt = Q/(m·c), quanto menor o calor específico, maior a variação de temperatura para a mesma energia. Metais, com calor específico baixo, esquentam rapidamente; a água, com valor alto, resiste às variações.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Um termômetro clínico de mercúrio funciona com base no princípio da:",
    opcoes: [
      "mudança de estado físico do mercúrio.",
      "condução de calor entre o vidro e o ar.",
      "irradiação emitida pelo corpo humano.",
      "variação da massa do mercúrio com a temperatura.",
      "dilatação térmica do líquido dentro do tubo capilar.",
    ],
    correta: 4,
    explicacao:
      "O mercúrio se dilata ao absorver calor do corpo e sobe pelo capilar, cuja escala converte o comprimento da coluna em temperatura. O estrangulamento próximo ao bulbo impede o retorno imediato, permitindo a leitura após a retirada.",
  },
  {
    materia: "fisica",
    tema: "Termologia e calorimetria",
    dificuldade: "media",
    enunciado:
      "Em um dia frio, um piso cerâmico parece mais gelado que um tapete, embora ambos estejam à mesma temperatura. Isso ocorre porque a cerâmica:",
    opcoes: [
      "está de fato a uma temperatura menor.",
      "emite radiação térmica negativa.",
      "possui calor latente mais elevado.",
      "impede completamente a convecção do ar.",
      "conduz calor do pé com mais rapidez que o tapete.",
    ],
    correta: 4,
    explicacao:
      "A sensação térmica depende da taxa de perda de calor pela pele, não apenas da temperatura do objeto. A cerâmica é boa condutora e retira calor rapidamente; o tapete, isolante, retira devagar. Por isso metais parecem mais frios que a madeira ao toque.",
  },
];
