/* Gases e leis dos gases ideais (50 questões).
   Variáveis de estado dos gases, leis de Boyle, Charles e Gay-Lussac,
   equação geral dos gases, equação de Clapeyron e misturas gasosas.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "O comportamento de um gás pode ser descrito por três variáveis de estado principais: pressão, volume e temperatura. Segundo a lei de Boyle, mantendo a temperatura constante, a relação entre pressão e volume de um gás é:",
    opcoes: [
      "inversamente proporcional: aumentar a pressão diminui o volume",
      "diretamente proporcional: aumentar a pressão aumenta o volume",
      "não há relação entre pressão e volume à temperatura constante",
      "a pressão sempre permanece constante, independentemente do volume",
      "o volume sempre permanece constante, independentemente da pressão",
    ],
    correta: 0,
    explicacao:
      "A lei de Boyle estabelece que, à temperatura constante, o produto entre pressão e volume de um gás permanece constante (P × V = constante), de modo que aumentar a pressão comprime o gás, reduzindo seu volume. É esse princípio que explica, por exemplo, o funcionamento de uma seringa ao empurrar o êmbolo.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Segundo a lei de Charles, mantendo a pressão constante, a relação entre volume e temperatura absoluta de um gás é:",
    opcoes: [
      "diretamente proporcional: aumentar a temperatura aumenta o volume",
      "inversamente proporcional: aumentar a temperatura diminui o volume",
      "não há relação entre volume e temperatura à pressão constante",
      "o volume sempre permanece constante, independentemente da temperatura",
      "a temperatura sempre permanece constante, independentemente do volume",
    ],
    correta: 0,
    explicacao:
      "A lei de Charles mostra que, à pressão constante, o volume de um gás é diretamente proporcional à sua temperatura absoluta, medida em kelvin: aquecer o gás faz suas moléculas se moverem mais e ocuparem mais espaço, expandindo o volume. É por isso que um balão de festa aumenta ligeiramente de tamanho em um dia quente.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Segundo a lei de Gay-Lussac, mantendo o volume constante, a relação entre pressão e temperatura absoluta de um gás é:",
    opcoes: [
      "diretamente proporcional: aumentar a temperatura aumenta a pressão",
      "inversamente proporcional: aumentar a temperatura diminui a pressão",
      "não há relação entre pressão e temperatura a volume constante",
      "a pressão sempre permanece constante, independentemente da temperatura",
      "a temperatura sempre permanece constante, independentemente da pressão",
    ],
    correta: 0,
    explicacao:
      "A lei de Gay-Lussac estabelece que, a volume constante, a pressão de um gás é diretamente proporcional à sua temperatura absoluta: aquecer o gás em um recipiente rígido aumenta a energia cinética das moléculas, que colidem com mais força contra as paredes, elevando a pressão. É esse princípio que torna perigoso aquecer uma lata de spray fechada, por exemplo.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Para que as leis de Boyle, Charles e Gay-Lussac sejam aplicadas corretamente, a temperatura de um gás deve ser expressa em uma escala absoluta, e não em graus Celsius. A escala de temperatura usada nesses cálculos é a escala:",
    opcoes: [
      "Kelvin",
      "Celsius",
      "Fahrenheit",
      "Réaumur",
      "Rankine",
    ],
    correta: 0,
    explicacao:
      "A escala Kelvin começa no zero absoluto, o ponto teórico de menor energia possível, o que a torna a única escala em que a proporcionalidade direta descrita pelas leis dos gases realmente se verifica matematicamente. Usar graus Celsius diretamente nessas fórmulas levaria a resultados incorretos, já que a escala Celsius admite valores negativos que distorcem a proporção.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Para converter uma temperatura de graus Celsius para kelvin, utiliza-se a fórmula T(K) = T(°C) + 273. Uma temperatura de 27 °C corresponde, em kelvin, a:",
    opcoes: [
      "300 K",
      "273 K",
      "27 K",
      "246 K",
      "327 K",
    ],
    correta: 0,
    explicacao:
      "Basta somar: 27 + 273 = 300 K. Esse tipo de conversão é o primeiro passo indispensável antes de aplicar qualquer uma das leis dos gases, já que trabalhar com temperaturas em Celsius levaria a resultados matematicamente incorretos.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "A equação de Clapeyron, PV = nRT, relaciona pressão, volume, quantidade de matéria e temperatura de um gás ideal por meio da constante universal dos gases, R. Nessa equação, a letra n representa:",
    opcoes: [
      "a quantidade de matéria do gás, em mols",
      "a temperatura absoluta do gás",
      "a pressão exercida pelo gás",
      "o volume ocupado pelo gás",
      "a massa molar do gás",
    ],
    correta: 0,
    explicacao:
      "Na equação de Clapeyron, n representa o número de mols do gás presente no sistema, uma variável adicional em relação às leis parciais de Boyle, Charles e Gay-Lussac, que consideram uma quantidade fixa de gás. Essa equação geral permite calcular qualquer uma das quatro variáveis (P, V, n ou T) desde que as outras três sejam conhecidas.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Um pneu de automóvel, ao ser calibrado em um dia frio pela manhã, apresenta pressão menor do que se medida à tarde, após rodar por horas e o ar interno esquentar. Esse aumento de pressão com a temperatura, mantendo o volume do pneu praticamente constante, é explicado pela lei de:",
    opcoes: [
      "Gay-Lussac",
      "Boyle",
      "Charles",
      "Avogadro",
      "Dalton",
    ],
    correta: 0,
    explicacao:
      "Como o volume interno do pneu permanece praticamente constante, o aumento de temperatura do ar comprimido eleva a pressão interna segundo a proporcionalidade direta descrita pela lei de Gay-Lussac. É por essa razão que recomenda-se calibrar pneus com eles ainda frios, para obter uma leitura de pressão mais consistente e comparável entre medições.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Ao empurrar o êmbolo de uma seringa fechada, sem furo na ponta, sente-se uma resistência crescente conforme o ar interno é comprimido em um volume cada vez menor. Esse aumento de pressão à medida que o volume diminui, em temperatura constante, é explicado pela lei de:",
    opcoes: [
      "Boyle",
      "Charles",
      "Gay-Lussac",
      "Avogadro",
      "Dalton",
    ],
    correta: 0,
    explicacao:
      "A resistência crescente sentida ao comprimir o ar dentro da seringa fechada é uma manifestação direta da lei de Boyle: reduzir o volume disponível para o gás aumenta sua pressão, já que o produto entre as duas grandezas permanece constante à temperatura ambiente do experimento.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Segundo o princípio de Avogadro, volumes iguais de gases diferentes, nas mesmas condições de temperatura e pressão, contêm:",
    opcoes: [
      "o mesmo número de moléculas",
      "massas iguais, independentemente do gás",
      "densidades iguais, independentemente do gás",
      "sempre o dobro de moléculas de um em relação ao outro",
      "número de moléculas que depende exclusivamente da cor do gás",
    ],
    correta: 0,
    explicacao:
      "O princípio de Avogadro afirma que o número de moléculas presentes em um volume de gás depende apenas da temperatura e da pressão, não do tipo de gás — é essa ideia que fundamenta o conceito de volume molar, igual a 22,4 L nas condições normais para qualquer gás. Gases diferentes no mesmo volume e condições têm massas diferentes, já que suas massas molares variam.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "A lei de Dalton das pressões parciais estabelece que, em uma mistura de gases que não reagem entre si, a pressão total exercida pela mistura é igual:",
    opcoes: [
      "à soma das pressões parciais de cada gás componente",
      "à pressão do gás mais abundante na mistura, apenas",
      "à média aritmética simples das pressões dos gases",
      "sempre ao dobro da pressão do gás menos abundante",
      "a zero, independentemente da composição da mistura",
    ],
    correta: 0,
    explicacao:
      "Cada gás em uma mistura se comporta, em termos de pressão, como se ocupasse sozinho todo o volume disponível, e a pressão total observada é a soma dessas contribuições individuais, chamadas de pressões parciais. É esse princípio que permite calcular, por exemplo, a pressão parcial de oxigênio no ar atmosférico a partir de sua proporção na mistura total.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um gás ocupa um volume de 4 L sob pressão de 2 atm. Mantendo a temperatura constante, ao comprimir esse gás até um volume de 1 L, a nova pressão exercida pelo gás será de:",
    opcoes: [
      "4 atm",
      "8 atm",
      "0,5 atm",
      "2 atm",
      "16 atm",
    ],
    correta: 1,
    explicacao:
      "Pela lei de Boyle, P₁V₁ = P₂V₂: 2 × 4 = P₂ × 1, logo P₂ = 8 atm. Reduzir o volume a um quarto do original quadruplica a pressão, mantendo constante o produto entre as duas grandezas.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um gás ocupa um volume de 2 L a uma temperatura de 300 K, sob pressão constante. Ao aquecer esse gás até 600 K, mantendo a pressão constante, o novo volume ocupado será de:",
    opcoes: [
      "1 L",
      "4 L",
      "2 L",
      "8 L",
      "300 L",
    ],
    correta: 1,
    explicacao:
      "Pela lei de Charles, V₁/T₁ = V₂/T₂: 2/300 = V₂/600, logo V₂ = (2 × 600)/300 = 4 L. Como a temperatura dobrou, o volume também dobra, mantendo a proporcionalidade direta entre as duas grandezas.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um gás está confinado em um recipiente rígido de volume constante, exercendo pressão de 3 atm a uma temperatura de 400 K. Ao resfriar esse gás até 200 K, mantendo o volume constante, a nova pressão será de:",
    opcoes: [
      "6 atm",
      "1,5 atm",
      "3 atm",
      "0,75 atm",
      "0,5 atm",
    ],
    correta: 1,
    explicacao:
      "Pela lei de Gay-Lussac, P₁/T₁ = P₂/T₂: 3/400 = P₂/200, logo P₂ = (3 × 200)/400 = 1,5 atm. Como a temperatura absoluta caiu pela metade, a pressão também cai pela metade, mantendo constante a razão entre as duas grandezas.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um gás ocupa 6 L a 2 atm e 300 K. Ao ser levado a uma nova condição de 4 atm e 400 K, aplicando a equação geral dos gases (P₁V₁/T₁ = P₂V₂/T₂), o novo volume ocupado pelo gás será de:",
    opcoes: [
      "8 L",
      "4 L",
      "6 L",
      "2 L",
      "12 L",
    ],
    correta: 1,
    explicacao:
      "Aplicando a equação geral: (2 × 6)/300 = (4 × V₂)/400, logo 12/300 = 4V₂/400, e 4V₂ = (12 × 400)/300 = 16, resultando em V₂ = 4 L. A equação geral dos gases é a ferramenta indicada quando as três grandezas (pressão, volume e temperatura) variam simultaneamente entre dois estados.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um recipiente contém 2 mols de um gás ideal a uma pressão de 4,1 atm e temperatura de 300 K. Usando a constante dos gases R = 0,082 atm·L/(mol·K) na equação de Clapeyron, PV = nRT, o volume ocupado por esse gás é de aproximadamente:",
    opcoes: [
      "6 L",
      "12 L",
      "24 L",
      "3 L",
      "48 L",
    ],
    correta: 1,
    explicacao:
      "Isolando o volume: V = nRT/P = (2 × 0,082 × 300)/4,1 = 49,2/4,1 = 12 L. Esse tipo de cálculo direto pela equação de Clapeyron é o método mais versátil quando se conhece a quantidade de matéria do gás, dispensando a necessidade de um estado inicial de referência.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um cilindro de gás contém 4,92 L de um gás ideal a 1 atm e 300 K. Usando R = 0,082 atm·L/(mol·K), a quantidade de matéria desse gás, em mols, é de aproximadamente:",
    opcoes: [
      "2 mol",
      "0,2 mol",
      "0,02 mol",
      "20 mol",
      "0,4 mol",
    ],
    correta: 1,
    explicacao:
      "Isolando n na equação de Clapeyron: n = PV/(RT) = (1 × 4,92)/(0,082 × 300) = 4,92/24,6 = 0,2 mol. Esse cálculo é o caminho direto para determinar a quantidade de matéria de um gás sem precisar conhecer sua massa ou massa molar previamente.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um mergulhador desce a uma profundidade onde a pressão da água é o dobro da pressão atmosférica na superfície. Um pequeno volume de ar preso em um espaço fechado e rígido dentro do seu equipamento, a uma temperatura constante, sofrerá, ao ser trazido de volta à superfície onde a pressão volta ao valor original:",
    opcoes: [
      "diminuição de volume, já que a pressão externa diminui",
      "aumento de volume, já que a pressão externa diminui",
      "nenhuma alteração no volume, independentemente da pressão",
      "aumento de temperatura, sem qualquer relação com o volume",
      "transformação em um novo gás diferente",
    ],
    correta: 1,
    explicacao:
      "Pela lei de Boyle, reduzir a pressão externa sobre um gás confinado (ao subir de uma região de maior pressão para uma de menor pressão) permite que ele se expanda, aumentando de volume, desde que a temperatura permaneça constante. É esse mesmo princípio que orienta as regras de segurança em mergulho, para evitar a expansão perigosa de gases presos em cavidades do corpo durante a subida.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Uma mistura gasosa contém 2 mols de gás nitrogênio e 3 mols de gás oxigênio, totalizando uma pressão de 5 atm no recipiente. A pressão parcial exercida pelo gás oxigênio nessa mistura, calculada por sua fração molar, é de:",
    opcoes: [
      "2 atm",
      "3 atm",
      "5 atm",
      "1,5 atm",
      "0,6 atm",
    ],
    correta: 1,
    explicacao:
      "A fração molar do oxigênio é 3/(2+3) = 0,6, e sua pressão parcial é essa fração multiplicada pela pressão total: 0,6 × 5 = 3 atm. Esse mesmo princípio, aplicado ao ar atmosférico, explica por que o oxigênio, presente em cerca de 21% da mistura, exerce apenas uma fração da pressão atmosférica total.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um balão meteorológico é lançado do nível do mar, onde a pressão atmosférica é de 1 atm e a temperatura é de 300 K, contendo um volume de 10 m³ de gás hélio. Ao atingir uma altitude onde a pressão cai para 0,5 atm e a temperatura cai para 250 K, o novo volume ocupado pelo hélio, aplicando a equação geral dos gases, será de:",
    opcoes: [
      "20 m³",
      "16,67 m³",
      "10 m³",
      "8,33 m³",
      "5 m³",
    ],
    correta: 1,
    explicacao:
      "Aplicando (P₁V₁)/T₁ = (P₂V₂)/T₂: (1 × 10)/300 = (0,5 × V₂)/250, logo 10/300 = 0,5V₂/250, e 0,5V₂ = (10 × 250)/300 ≈ 8,33, resultando em V₂ ≈ 16,67 m³. É esse aumento de volume com a altitude que explica por que balões meteorológicos se expandem consideravelmente ao subir, podendo até estourar em altitudes muito elevadas.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Comparando a densidade de dois gases diferentes nas mesmas condições de temperatura e pressão, é correto afirmar que o gás de maior densidade será aquele com:",
    opcoes: [
      "menor massa molar",
      "maior massa molar",
      "maior volume ocupado",
      "menor número de mols presentes",
      "cor mais escura",
    ],
    correta: 1,
    explicacao:
      "Como volumes iguais de gases diferentes, nas mesmas condições, contêm o mesmo número de moléculas (princípio de Avogadro), a densidade — massa dividida pelo volume — acaba sendo diretamente proporcional à massa molar do gás: quanto mais pesada a molécula, mais denso o gás. É por isso que o gás hélio, de massa molar baixa, é usado para inflar balões que sobem no ar.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Um cilindro fechado contém 8,2 g de gás oxigênio (massa molar 32 g/mol) ocupando um volume de 5 L a uma temperatura de 300 K. Usando R = 0,082 atm·L/(mol·K), a pressão exercida por esse gás é de aproximadamente:",
    opcoes: [
      "2,52 atm",
      "0,63 atm",
      "1,26 atm",
      "5,04 atm",
      "0,32 atm",
    ],
    correta: 2,
    explicacao:
      "A quantidade de matéria é 8,2 ÷ 32 ≈ 0,256 mol; isolando a pressão na equação de Clapeyron: P = nRT/V = (0,256 × 0,082 × 300)/5 ≈ 6,3/5 ≈ 1,26 atm. Esse tipo de cálculo, que parte da massa em vez do número de mols diretamente, exige uma conversão extra antes de aplicar a equação geral dos gases ideais.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de gás ideal ocupa 8,2 L a 1 atm e 400 K. Mantendo a pressão constante, essa amostra é resfriada até ocupar exatamente metade do volume inicial. Usando a lei de Charles, a nova temperatura, em kelvin, é de:",
    opcoes: [
      "800 K",
      "100 K",
      "200 K",
      "400 K",
      "50 K",
    ],
    correta: 2,
    explicacao:
      "Pela lei de Charles, V₁/T₁ = V₂/T₂, e como o volume caiu à metade, a temperatura também deve cair à metade para manter a proporção: T₂ = 400/2 = 200 K. Esse tipo de raciocínio proporcional direto, sem precisar substituir os valores de volume, agiliza a resolução quando a relação entre os volumes já é conhecida como uma fração simples.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura gasosa em um recipiente de 10 L contém 3 mols de gás A e 2 mols de gás B, a uma temperatura de 300 K. Usando R = 0,082 atm·L/(mol·K), a pressão total exercida por essa mistura, calculada considerando o total de 5 mols de gás, é de aproximadamente:",
    opcoes: [
      "24,6 atm",
      "6,15 atm",
      "12,3 atm",
      "4,92 atm",
      "8,2 atm",
    ],
    correta: 2,
    explicacao:
      "Aplicando a equação de Clapeyron ao total de mols da mistura: P = nRT/V = (5 × 0,082 × 300)/10 = 123/10 = 12,3 atm. Para misturas de gases que não reagem entre si, basta somar o número total de mols de todos os componentes antes de aplicar a equação geral, já que a pressão total depende do número total de partículas presentes, e não da identidade de cada gás.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Um técnico transfere 3 L de um gás a 6 atm e 300 K para um recipiente de 9 L, mantendo a mesma temperatura. Usando a lei de Boyle para calcular a nova pressão, e considerando que a quantidade de gás permanece constante, o resultado obtido é de:",
    opcoes: [
      "18 atm",
      "1 atm",
      "2 atm",
      "3 atm",
      "0,5 atm",
    ],
    correta: 2,
    explicacao:
      "Pela lei de Boyle, P₁V₁ = P₂V₂: 6 × 3 = P₂ × 9, logo P₂ = 18/9 = 2 atm. Como o novo volume é o triplo do original, a nova pressão cai para um terço da pressão inicial, mantendo constante o produto entre as duas grandezas à temperatura fixa.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Um balão de festa contém 1,64 g de gás hélio (massa molar 4 g/mol) em condições normais de temperatura e pressão (1 atm, 273 K), usando R = 0,082 atm·L/(mol·K). O volume desse balão, calculado pela equação de Clapeyron, é de aproximadamente:",
    opcoes: [
      "4,6 L",
      "18,4 L",
      "9,2 L",
      "2,3 L",
      "22,4 L",
    ],
    correta: 2,
    explicacao:
      "A quantidade de matéria é 1,64 ÷ 4 = 0,41 mol; isolando o volume: V = nRT/P = (0,41 × 0,082 × 273)/1 ≈ 9,18 L, aproximadamente 9,2 L. Esse resultado é próximo, mas não idêntico, ao volume molar padrão de 22,4 L, justamente porque a quantidade de gás aqui é menor que 1 mol completo.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Uma panela de pressão, ao ser fechada hermeticamente e aquecida, tem a água interna fervendo em temperatura acima de 100 °C, o que cozinha os alimentos mais rapidamente. Esse aumento da temperatura de ebulição está diretamente relacionado ao fato de que, dentro do recipiente fechado, o aumento de temperatura do vapor confinado provoca também:",
    opcoes: [
      "diminuição de pressão, apesar do volume constante",
      "nenhuma alteração de pressão, independentemente da temperatura",
      "aumento de pressão, já que o volume disponível para o vapor permanece praticamente constante",
      "diminuição da temperatura da água líquida remanescente",
      "transformação do vapor de água em um gás diferente",
    ],
    correta: 2,
    explicacao:
      "Como o volume interno da panela de pressão é fixo, o aumento de temperatura do vapor de água confinado eleva sua pressão, seguindo a lei de Gay-Lussac; e é justamente essa pressão elevada que permite à água atingir temperaturas de ebulição mais altas que os 100 °C usuais à pressão atmosférica normal, acelerando o cozimento dos alimentos.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante enche dois balões idênticos com o mesmo volume de gases diferentes nas mesmas condições de temperatura e pressão: um com gás hidrogênio e outro com gás carbônico. Comparando a massa de gás dentro de cada balão, é correto afirmar que o balão de gás carbônico:",
    opcoes: [
      "terá massa menor, pois o CO₂ tem massa molar menor que o H₂",
      "terá exatamente a mesma massa que o balão de hidrogênio",
      "terá massa maior, pois o CO₂ tem massa molar maior que o H₂",
      "não conterá qualquer massa de gás, apenas o hidrogênio contém",
      "terá volume diferente do balão de hidrogênio nas mesmas condições",
    ],
    correta: 2,
    explicacao:
      "Como ambos os balões, nas mesmas condições de temperatura e pressão, contêm o mesmo número de moléculas (princípio de Avogadro), a massa total de gás em cada um depende diretamente da massa molar: o CO₂ (44 g/mol) é muito mais pesado por mol que o H₂ (2 g/mol), então o balão de gás carbônico terá massa consideravelmente maior, apesar do mesmo volume e número de moléculas.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Um recipiente rígido e fechado contém um gás a 2 atm e 27 °C. Ao ser aquecido até 327 °C, mantendo o volume constante, a nova pressão do gás, aplicando corretamente a conversão para kelvin antes de usar a lei de Gay-Lussac, será de:",
    opcoes: [
      "24 atm",
      "2 atm",
      "4 atm",
      "8 atm",
      "1 atm",
    ],
    correta: 2,
    explicacao:
      "Convertendo para kelvin: 27 °C = 300 K e 327 °C = 600 K; aplicando P₁/T₁ = P₂/T₂: 2/300 = P₂/600, logo P₂ = (2 × 600)/300 = 4 atm. Usar diretamente os valores em Celsius sem converter para kelvin, calculando erroneamente 2/27 = P₂/327, é o erro clássico que invalida esse tipo de cálculo.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o comportamento de um gás ideal, um modelo teórico que assume que as moléculas do gás não ocupam volume próprio e não exercem forças de atração entre si. Gases reais se aproximam desse comportamento ideal principalmente em condições de:",
    opcoes: [
      "alta pressão e baixa temperatura",
      "alta pressão e alta temperatura, sem exceção",
      "baixa pressão e alta temperatura",
      "baixa pressão e baixa temperatura, sem exceção",
      "qualquer condição, sem qualquer diferença de comportamento",
    ],
    correta: 2,
    explicacao:
      "Em baixas pressões, as moléculas do gás ficam mais espaçadas entre si, tornando desprezível o volume que elas realmente ocupam; em altas temperaturas, a energia cinética das moléculas supera as forças de atração intermoleculares, tornando-as praticamente irrelevantes — ambas as condições aproximam o comportamento do gás real do modelo ideal. Em altas pressões e baixas temperaturas, ao contrário, essas aproximações falham e o comportamento real se desvia mais do previsto pelo modelo ideal.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre as condições normais de temperatura e pressão (CNTP: 0 °C e 1 atm) e as condições ambiente, normalmente definidas como 25 °C e 1 atm. Ao calcular o volume molar de um gás ideal nessas duas condições diferentes, usando R = 0,082 atm·L/(mol·K), é correto afirmar que o volume molar a 25 °C será:",
    opcoes: [
      "menor que 22,4 L, pois a temperatura mais alta reduz o volume do gás",
      "exatamente igual a 22,4 L, independentemente da temperatura",
      "maior que 22,4 L, pois a temperatura mais alta aumenta o volume ocupado por um mol de gás",
      "igual a zero, pois a temperatura ambiente é muito alta para gases",
      "impossível de calcular sem informações adicionais",
    ],
    correta: 2,
    explicacao:
      "Como o volume de um gás é diretamente proporcional à sua temperatura absoluta (à pressão constante), o volume molar a 298 K (25 °C) será maior que o volume molar a 273 K (0 °C), que é o valor de referência de 22,4 L; o cálculo exato seria V = nRT/P = (1 × 0,082 × 298)/1 ≈ 24,4 L, confirmando esse aumento esperado.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante enche um pneu de bicicleta com ar até atingir determinada pressão em um dia de inverno, com temperatura de 10 °C. Ao andar de bicicleta em um dia de verão muito quente, com temperatura de 40 °C, sem adicionar ou retirar ar do pneu, é esperado que a pressão interna:",
    opcoes: [
      "diminua, já que a temperatura mais alta sempre reduz a pressão de um gás confinado",
      "permaneça exatamente igual, independentemente da temperatura externa",
      "se torne zero, pois o ar escaparia completamente do pneu",
      "aumente, já que a temperatura mais alta eleva a pressão do ar confinado no volume praticamente fixo do pneu",
      "dependa exclusivamente da cor do pneu, não da temperatura",
    ],
    correta: 3,
    explicacao:
      "Com o volume do pneu praticamente constante, o aumento de temperatura do ar interno eleva sua pressão segundo a lei de Gay-Lussac, o que explica por que pneus calibrados no frio podem apresentar pressão mais alta que o recomendado ao serem medidos em um dia muito quente, exigindo atenção ao calibrar em condições de temperatura muito diferentes.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Um laboratorista coleta um gás sobre água em um béquer invertido, um método comum em experimentos escolares. O gás coletado fica misturado com vapor de água, e a pressão total medida é a soma da pressão do gás de interesse com a pressão de vapor da água na temperatura do experimento. Se a pressão total medida foi de 780 mmHg e a pressão de vapor da água na temperatura do experimento é de 24 mmHg, a pressão parcial do gás de interesse, isolando-o da água, é de:",
    opcoes: [
      "804 mmHg",
      "780 mmHg",
      "24 mmHg",
      "756 mmHg",
      "390 mmHg",
    ],
    correta: 3,
    explicacao:
      "Pela lei de Dalton, a pressão total é a soma das pressões parciais dos componentes da mistura gasosa; isolando a pressão do gás de interesse: 780 − 24 = 756 mmHg. Esse ajuste é necessário sempre que um gás é coletado sobre água, já que parte da pressão medida vem inevitavelmente do vapor de água misturado ao gás de interesse.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Um estudante analisa o comportamento de um gás confinado em um cilindro com êmbolo móvel, no qual a pressão externa é mantida constante por um peso fixo sobre o êmbolo. Ao aquecer esse gás, mantendo a pressão constante, é esperado que o êmbolo:",
    opcoes: [
      "desça, diminuindo o volume disponível para o gás",
      "permaneça parado, sem qualquer alteração de volume",
      "seja ejetado do cilindro imediatamente",
      "suba, aumentando o volume disponível para o gás",
      "cause a solidificação do gás confinado",
    ],
    correta: 3,
    explicacao:
      "Segundo a lei de Charles, aquecer um gás à pressão constante aumenta seu volume, o que nesse sistema se traduz no êmbolo subindo para acomodar o gás em expansão. Esse é o princípio básico por trás de diversos dispositivos que convertem variação de temperatura em movimento mecânico.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "facil",
    enunciado:
      "Um estudante analisa duas amostras de gás de mesmo volume e mesma temperatura, mas com quantidades de matéria diferentes: uma com 1 mol e outra com 2 mols. Comparando a pressão exercida por cada amostra, é correto afirmar que a amostra com 2 mols exercerá uma pressão:",
    opcoes: [
      "igual à da amostra de 1 mol",
      "duas vezes menor que a amostra de 1 mol",
      "quatro vezes maior que a amostra de 1 mol",
      "duas vezes maior que a amostra de 1 mol",
      "impossível de determinar sem mais dados",
    ],
    correta: 3,
    explicacao:
      "Pela equação de Clapeyron, PV = nRT, mantendo V e T constantes, a pressão é diretamente proporcional ao número de mols; dobrar a quantidade de matéria, mantendo tudo mais constante, dobra a pressão exercida pelo gás. Esse tipo de relação direta é o que permite calcular rapidamente o efeito de adicionar mais gás a um recipiente de volume fixo.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um gás ocupa um volume de 3 L sob pressão de 4 atm. Mantendo a temperatura constante, ao expandir esse gás até um volume de 6 L, a nova pressão exercida pelo gás será de:",
    opcoes: [
      "8 atm",
      "12 atm",
      "1 atm",
      "2 atm",
      "0,5 atm",
    ],
    correta: 3,
    explicacao:
      "Pela lei de Boyle, P₁V₁ = P₂V₂: 4 × 3 = P₂ × 6, logo P₂ = 12/6 = 2 atm. Como o volume dobrou, a pressão cai pela metade, mantendo constante o produto entre as duas grandezas.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um gás ocupa um volume de 5 L a uma temperatura de 250 K, sob pressão constante. Ao resfriar esse gás até 100 K, mantendo a pressão constante, o novo volume ocupado será de:",
    opcoes: [
      "12,5 L",
      "5 L",
      "10 L",
      "2 L",
      "1 L",
    ],
    correta: 3,
    explicacao:
      "Pela lei de Charles, V₁/T₁ = V₂/T₂: 5/250 = V₂/100, logo V₂ = (5 × 100)/250 = 2 L. Resfriar o gás reduz proporcionalmente seu volume, mantendo constante a pressão do sistema.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um recipiente rígido contém um gás a 5 atm e 500 K. Ao ser aquecido até 1000 K, mantendo o volume constante, a nova pressão do gás será de:",
    opcoes: [
      "2,5 atm",
      "5 atm",
      "20 atm",
      "10 atm",
      "15 atm",
    ],
    correta: 3,
    explicacao:
      "Pela lei de Gay-Lussac, P₁/T₁ = P₂/T₂: 5/500 = P₂/1000, logo P₂ = (5 × 1000)/500 = 10 atm. Dobrar a temperatura absoluta, mantendo o volume fixo, dobra também a pressão exercida pelo gás confinado.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um recipiente contém 3 mols de um gás ideal a uma temperatura de 400 K, ocupando um volume de 9,84 L. Usando R = 0,082 atm·L/(mol·K), a pressão exercida por esse gás, calculada pela equação de Clapeyron, é de aproximadamente:",
    opcoes: [
      "5 atm",
      "20 atm",
      "2,5 atm",
      "10 atm",
      "40 atm",
    ],
    correta: 3,
    explicacao:
      "Isolando a pressão: P = nRT/V = (3 × 0,082 × 400)/9,84 = 98,4/9,84 = 10 atm. Esse tipo de cálculo direto pela equação de Clapeyron é útil quando três das quatro variáveis (n, R, T e V) já são conhecidas, restando apenas isolar a quarta.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de 3,2 g de gás metano (massa molar 16 g/mol) ocupa um volume de 4,92 L a uma temperatura de 300 K. Usando R = 0,082 atm·L/(mol·K), a pressão exercida por esse gás é de:",
    opcoes: [
      "2 atm",
      "0,5 atm",
      "4 atm",
      "1 atm",
      "0,25 atm",
    ],
    correta: 3,
    explicacao:
      "A quantidade de matéria é 3,2 ÷ 16 = 0,2 mol; isolando a pressão: P = nRT/V = (0,2 × 0,082 × 300)/4,92 = 4,92/4,92 = 1 atm. Esse tipo de cálculo, que parte da massa em vez do número de mols diretamente, exige uma conversão extra antes de aplicar a equação de Clapeyron.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura gasosa contém 1 mol de gás A e 3 mols de gás B, exercendo pressão total de 8 atm no recipiente. A pressão parcial exercida pelo gás A, calculada por sua fração molar, é de:",
    opcoes: [
      "6 atm",
      "4 atm",
      "1 atm",
      "8 atm",
      "2 atm",
    ],
    correta: 4,
    explicacao:
      "A fração molar do gás A é 1/(1+3) = 0,25, e sua pressão parcial é essa fração multiplicada pela pressão total: 0,25 × 8 = 2 atm. O gás B, presente em maior quantidade, exerceria os 6 atm restantes da pressão total, na proporção 3/4 da mistura.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Um gás ocupa 4 L a 2 atm e 200 K. Ao ser levado a uma nova condição de 1 atm e 400 K, aplicando a equação geral dos gases, o novo volume ocupado pelo gás será de:",
    opcoes: [
      "8 L",
      "4 L",
      "2 L",
      "32 L",
      "16 L",
    ],
    correta: 4,
    explicacao:
      "Aplicando (P₁V₁)/T₁ = (P₂V₂)/T₂: (2 × 4)/200 = (1 × V₂)/400, logo 8/200 = V₂/400, e V₂ = (8 × 400)/200 = 16 L. Tanto a redução da pressão pela metade quanto o aumento da temperatura ao dobro contribuem, cada um, para aumentar o volume final do gás.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre um gás e um vapor, dois termos às vezes usados de forma intercambiável no dia a dia, mas com significado técnico distinto em química. Um vapor é definido como a fase gasosa de uma substância que, na temperatura considerada, normalmente existiria como:",
    opcoes: [
      "gás em qualquer condição de temperatura",
      "plasma, o quarto estado da matéria",
      "sólido cristalino, exclusivamente",
      "uma substância composta apenas por metais",
      "líquido ou sólido, estando o vapor abaixo de sua temperatura crítica",
    ],
    correta: 4,
    explicacao:
      "Tecnicamente, um vapor é a forma gasosa de uma substância que está abaixo de sua temperatura crítica e que, portanto, poderia ser condensada de volta a líquido ou sólido apenas aumentando a pressão o suficiente; um gás verdadeiro, acima de sua temperatura crítica, não pode ser liquefeito por compressão isolada. É por isso que se fala em 'vapor de água', já que a água é líquida na maior parte das condições comuns, mas em 'gás oxigênio', já que o oxigênio permanece gasoso mesmo sob alta pressão em temperatura ambiente.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um alpinista em uma grande altitude percebe que a água ferve a uma temperatura mais baixa que os 100 °C usuais ao nível do mar, o que torna mais difícil cozinhar alimentos adequadamente. Esse fenômeno ocorre porque, em altitudes elevadas, a pressão atmosférica é mais baixa, e:",
    opcoes: [
      "o ponto de ebulição de um líquido aumenta quando a pressão externa é reduzida",
      "a pressão atmosférica não tem qualquer relação com o ponto de ebulição",
      "a água sempre ferve exatamente a 100 °C, independentemente da altitude",
      "a altitude afeta apenas a temperatura do ar, nunca a da água",
      "o ponto de ebulição de um líquido diminui quando a pressão externa sobre ele é reduzida",
    ],
    correta: 4,
    explicacao:
      "Um líquido ferve quando sua pressão de vapor se iguala à pressão externa sobre ele; como a pressão atmosférica é menor em altitudes elevadas, é necessária uma temperatura mais baixa para que a pressão de vapor da água atinja esse equilíbrio, fazendo-a ferver antes dos 100 °C usuais ao nível do mar. É por essa razão que receitas culinárias em grandes altitudes costumam recomendar tempos de cozimento mais longos.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um recipiente com êmbolo móvel contendo um gás, no qual tanto a pressão quanto o volume podem variar livremente, sem qualquer restrição externa fixa. Para descrever completamente o comportamento desse gás ao passar de um estado inicial para um estado final, com todas as três variáveis de estado sujeitas a mudança, a ferramenta matemática mais adequada é:",
    opcoes: [
      "apenas a lei de Boyle, ignorando qualquer variação de temperatura",
      "apenas a lei de Charles, ignorando qualquer variação de pressão",
      "apenas a lei de Gay-Lussac, ignorando qualquer variação de volume",
      "nenhuma lei dos gases se aplica a esse sistema",
      "a equação geral dos gases, que relaciona pressão, volume e temperatura simultaneamente",
    ],
    correta: 4,
    explicacao:
      "Quando pressão, volume e temperatura podem variar simultaneamente entre dois estados de um gás, a equação geral dos gases, P₁V₁/T₁ = P₂V₂/T₂, é a ferramenta apropriada, já que engloba as três leis parciais (Boyle, Charles e Gay-Lussac) como casos particulares em que uma das variáveis é mantida fixa.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "dificil",
    enunciado:
      "Um cilindro de gás de cozinha (GLP) contém uma mistura de propano e butano em fase líquida sob pressão, que se vaporiza gradualmente à medida que o gás é consumido, mantendo a pressão interna praticamente constante enquanto ainda houver líquido no cilindro. Esse comportamento, no qual a pressão permanece estável apesar da retirada contínua de gás, ocorre porque:",
    opcoes: [
      "a quantidade total de matéria no cilindro permanece sempre constante",
      "o volume do cilindro aumenta continuamente para compensar o gás retirado",
      "a temperatura do cilindro cai a zero absoluto durante o uso",
      "o gás consumido é imediatamente reposto por uma fonte externa automática",
      "o líquido remanescente continua vaporizando para repor o gás consumido, mantendo o equilíbrio entre as fases líquida e gasosa",
    ],
    correta: 4,
    explicacao:
      "Enquanto houver combustível líquido no fundo do botijão, a pressão de vapor da mistura tende a se manter praticamente constante, pois o líquido continua evaporando para repor o gás retirado no consumo, mantendo o equilíbrio entre as fases líquida e gasosa; é só quando todo o líquido se esgota que a pressão começa a cair de forma mais perceptível, sinalizando que o botijão está próximo do fim.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante enche uma bexiga com gás hélio em um ambiente com ar-condicionado, a 18 °C, e depois a leva para o lado de fora, em um dia quente de 36 °C. Considerando a pressão aproximadamente constante durante essa mudança, é esperado que o volume da bexiga:",
    opcoes: [
      "diminua ligeiramente, apesar do aumento de temperatura",
      "permaneça exatamente igual, independentemente da temperatura",
      "dobre exatamente de tamanho, na mesma proporção da diferença em Celsius",
      "se torne zero, esvaziando completamente a bexiga",
      "aumente ligeiramente, acompanhando o aumento de temperatura",
    ],
    correta: 4,
    explicacao:
      "Segundo a lei de Charles, o volume de um gás à pressão constante é diretamente proporcional à sua temperatura absoluta; convertendo para kelvin (291 K e 309 K), o aumento é de cerca de 6%, então o volume da bexiga aumenta ligeiramente, mas não dobra, já que a diferença relativa em graus Celsius não corresponde à mesma proporção em kelvin.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante compara a pressão atmosférica ao nível do mar, aproximadamente 1 atm, com a pressão atmosférica no topo de uma montanha muito alta, consideravelmente menor. Essa diferença de pressão com a altitude ocorre principalmente porque:",
    opcoes: [
      "a temperatura no topo da montanha é sempre mais alta que ao nível do mar",
      "a composição química do ar muda completamente com a altitude",
      "a gravidade é mais forte no topo de montanhas do que ao nível do mar",
      "a pressão atmosférica não varia com a altitude em nenhuma circunstância",
      "há menos coluna de ar (e, portanto, menos peso de ar) acima de um ponto em maior altitude",
    ],
    correta: 4,
    explicacao:
      "A pressão atmosférica em um ponto é resultado do peso da coluna de ar acima dele; como em altitudes elevadas há uma coluna de ar mais curta acima do observador, há menos peso de ar pressionando aquele ponto, resultando em pressão atmosférica mais baixa. Esse é o mesmo princípio físico que explica por que a pressão da água também aumenta com a profundidade em um oceano ou lago, no sentido oposto.",
  },
  {
    materia: "quimica",
    tema: "Gases e leis dos gases ideais",
    dificuldade: "media",
    enunciado:
      "Um estudante de química analisa a composição do ar atmosférico seco, formado por aproximadamente 78% de nitrogênio, 21% de oxigênio e pequenas frações de outros gases. Considerando a pressão atmosférica total ao nível do mar como 1 atm (760 mmHg), a pressão parcial aproximada exercida pelo gás oxigênio é de:",
    opcoes: [
      "aproximadamente 760 mmHg",
      "aproximadamente 21 mmHg",
      "aproximadamente 600 mmHg",
      "aproximadamente 380 mmHg",
      "aproximadamente 160 mmHg",
    ],
    correta: 4,
    explicacao:
      "A pressão parcial do oxigênio é sua fração no ar multiplicada pela pressão total: 0,21 × 760 ≈ 160 mmHg. É essa pressão parcial de oxigênio, e não a porcentagem isolada, que determina a quantidade real de oxigênio disponível para a respiração — e é justamente sua redução em altitudes elevadas, mesmo com a porcentagem de oxigênio no ar permanecendo praticamente a mesma, que causa a sensação de falta de ar em montanhas altas.",
  },
];
