/* Eletromagnetismo e indução (50 questões).
   Ímãs e campo magnético, força sobre cargas e correntes, campo criado por
   correntes, indução de Faraday, lei de Lenz, transformadores e geradores.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "facil",
    enunciado:
      "Ao dividir um ímã de barra ao meio, obtêm-se dois pedaços. Sobre esses pedaços, é correto afirmar que cada um:",
    opcoes: [
      "fica com apenas um polo, norte ou sul.",
      "torna-se eletricamente neutro e perde o magnetismo.",
      "continua sendo um ímã completo, com dois polos.",
      "adquire apenas polos negativos.",
      "passa a repelir qualquer material.",
    ],
    correta: 2,
    explicacao:
      "A inseparabilidade dos polos é uma propriedade fundamental do magnetismo: nunca se obtém um monopolo magnético. Cada fragmento reorganiza seus domínios e apresenta norte e sul próprios. Isso distingue o magnetismo da eletricidade, em que cargas isoladas existem.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "facil",
    enunciado:
      "Sobre a interação entre polos magnéticos, é correto afirmar que polos:",
    opcoes: [
      "de mesmo nome se atraem e de nomes contrários se repelem.",
      "de mesmo nome se repelem e de nomes contrários se atraem.",
      "sempre se atraem, qualquer que seja o nome.",
      "não interagem entre si.",
      "interagem apenas quando em contato direto.",
    ],
    correta: 1,
    explicacao:
      "Norte com norte e sul com sul se repelem; norte com sul se atraem. A interação ocorre à distância, mediada pelo campo magnético. É essa regra que orienta a agulha da bússola em relação ao campo terrestre.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A agulha de uma bússola aponta aproximadamente para o norte geográfico da Terra. Isso ocorre porque, nas proximidades do polo norte geográfico, encontra-se um polo magnético:",
    opcoes: [
      "norte",
      "sul",
      "neutro",
      "elétrico positivo",
      "elétrico negativo",
    ],
    correta: 1,
    explicacao:
      "O polo norte da agulha é atraído por um polo sul magnético, situado próximo ao norte geográfico. A nomenclatura é histórica e gera confusão frequente. Além disso, os polos magnético e geográfico não coincidem exatamente, o que produz a declinação magnética.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A experiência de Oersted, realizada em 1820, mostrou pela primeira vez que:",
    opcoes: [
      "ímãs em movimento geram corrente elétrica.",
      "corrente elétrica gera campo magnético ao seu redor.",
      "cargas em repouso produzem campo magnético.",
      "o magnetismo independe da eletricidade.",
      "a luz é uma onda eletromagnética.",
    ],
    correta: 1,
    explicacao:
      "Oersted observou que a agulha de uma bússola se desviava ao ser aproximada de um fio percorrido por corrente. Foi a primeira evidência da unidade entre eletricidade e magnetismo. O fenômeno inverso, a indução, seria descoberto por Faraday uma década depois.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "As linhas de campo magnético produzidas por um fio retilíneo longo percorrido por corrente têm formato:",
    opcoes: [
      "retilíneo e paralelo ao fio.",
      "de circunferências concêntricas em torno do fio.",
      "radial, partindo do fio para fora.",
      "elíptico com foco no centro do fio.",
      "inexistente, pois o fio não gera campo.",
    ],
    correta: 1,
    explicacao:
      "O campo circula o fio em circunferências cujo plano é perpendicular a ele, e o sentido é dado pela regra da mão direita. A intensidade diminui com a distância ao fio. Esse é o padrão descoberto a partir da experiência de Oersted.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Um solenoide é uma bobina de fio percorrida por corrente. Em seu interior, o campo magnético gerado é:",
    opcoes: [
      "nulo em todos os pontos.",
      "aproximadamente uniforme, semelhante ao de um ímã de barra.",
      "radial, apontando para o eixo.",
      "variável de forma aleatória.",
      "sempre perpendicular ao eixo da bobina.",
    ],
    correta: 1,
    explicacao:
      "As contribuições das espiras se somam e produzem campo praticamente uniforme no interior, com polos norte e sul nas extremidades. Introduzir um núcleo de ferro intensifica muito esse campo, o que dá origem ao eletroímã.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Um eletroímã difere de um ímã permanente porque, no eletroímã, o campo magnético:",
    opcoes: [
      "existe apenas enquanto houver corrente elétrica.",
      "é permanente e não pode ser desligado.",
      "não depende do número de espiras.",
      "é sempre mais fraco que o de qualquer ímã natural.",
      "aponta sempre para o norte geográfico.",
    ],
    correta: 0,
    explicacao:
      "Interrompendo a corrente, o campo desaparece — vantagem explorada em guindastes de ferro-velho e em campainhas. A intensidade depende da corrente, do número de espiras e do material do núcleo. Ímãs permanentes mantêm o campo sem alimentação.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Uma carga elétrica em movimento entra em uma região de campo magnético uniforme. A força magnética sobre ela será nula quando a velocidade da carga for:",
    opcoes: [
      "perpendicular ao campo.",
      "paralela ao campo.",
      "inclinada a 45° em relação ao campo.",
      "muito elevada.",
      "muito baixa, mas não nula.",
    ],
    correta: 1,
    explicacao:
      "A força magnética depende do seno do ângulo entre velocidade e campo; sendo eles paralelos, o seno é zero e a força se anula. O valor máximo ocorre com velocidade perpendicular ao campo. Cargas em repouso também não sofrem força magnética.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Sobre a força magnética que atua em uma carga em movimento em um campo magnético, é correto afirmar que ela é sempre:",
    opcoes: [
      "paralela à velocidade da carga.",
      "perpendicular à velocidade e ao campo.",
      "de mesmo sentido do campo magnético.",
      "proporcional ao quadrado da carga.",
      "independente da velocidade.",
    ],
    correta: 1,
    explicacao:
      "Por ser perpendicular à velocidade, a força magnética não realiza trabalho e não altera o módulo da velocidade — apenas a direção. É por isso que cargas descrevem trajetórias circulares ou helicoidais em campos magnéticos uniformes.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Uma carga entra perpendicularmente em um campo magnético uniforme, sob ação exclusiva da força magnética. A trajetória descrita por essa carga será:",
    opcoes: [
      "retilínea uniforme",
      "circular uniforme",
      "parabólica",
      "elíptica",
      "irregular",
    ],
    correta: 1,
    explicacao:
      "A força permanece perpendicular à velocidade, funcionando como força centrípeta de módulo constante. O resultado é movimento circular uniforme. Se houvesse componente da velocidade paralela ao campo, a trajetória seria uma hélice.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Um fio retilíneo percorrido por corrente é colocado em um campo magnético externo. Sobre esse fio atuará:",
    opcoes: [
      "nenhuma força, pois o fio é neutro.",
      "uma força magnética, resultante da ação sobre as cargas em movimento.",
      "apenas uma força elétrica.",
      "uma força gravitacional aumentada.",
      "uma força sempre paralela ao fio.",
    ],
    correta: 1,
    explicacao:
      "As cargas em movimento dentro do fio sofrem força magnética, que se transmite ao condutor como um todo. Essa força é a base do funcionamento de motores elétricos e de alto-falantes. Sua intensidade depende da corrente, do comprimento do fio e do ângulo com o campo.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "O princípio de funcionamento de um motor elétrico baseia-se na:",
    opcoes: [
      "força magnética sobre condutores percorridos por corrente.",
      "atração entre cargas elétricas de sinais opostos.",
      "dilatação térmica das bobinas.",
      "reflexão de ondas eletromagnéticas.",
      "variação da resistência com a temperatura.",
    ],
    correta: 0,
    explicacao:
      "Uma espira percorrida por corrente, imersa em campo magnético, sofre um binário de forças que a faz girar. O comutador inverte periodicamente o sentido da corrente para manter a rotação contínua. É a conversão de energia elétrica em mecânica.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A lei de Faraday da indução eletromagnética estabelece que surge força eletromotriz induzida em um circuito quando há variação:",
    opcoes: [
      "da resistência elétrica do circuito.",
      "do fluxo magnético através do circuito.",
      "da temperatura do condutor.",
      "do comprimento do fio utilizado.",
      "da massa do ímã envolvido.",
    ],
    correta: 1,
    explicacao:
      "O que induz corrente é a variação do fluxo, e não sua simples existência: um ímã parado dentro de uma bobina não gera corrente alguma. A variação pode vir da mudança do campo, da área ou da orientação da espira.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A lei de Lenz determina o sentido da corrente induzida, estabelecendo que ela:",
    opcoes: [
      "opõe-se à variação de fluxo que a originou.",
      "reforça a variação de fluxo que a originou.",
      "tem sentido aleatório em cada situação.",
      "é sempre no sentido horário.",
      "independe da variação do fluxo.",
    ],
    correta: 0,
    explicacao:
      "A oposição garante a conservação da energia: se a corrente reforçasse a variação, teríamos movimento perpétuo com energia criada do nada. Na prática, isso significa que empurrar um ímã para dentro de uma bobina exige trabalho contra a força induzida.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Um ímã é aproximado rapidamente de uma bobina ligada a um galvanômetro. Ao se afastar o ímã da bobina, a corrente induzida:",
    opcoes: [
      "mantém o mesmo sentido da aproximação.",
      "cessa completamente.",
      "inverte seu sentido em relação ao da aproximação.",
      "aumenta indefinidamente.",
      "passa a ser contínua e constante.",
    ],
    correta: 2,
    explicacao:
      "Na aproximação, o fluxo aumenta e a corrente se opõe a esse aumento; no afastamento, o fluxo diminui e a corrente se opõe à diminuição, invertendo o sentido. É a lei de Lenz atuando nas duas situações. Quanto mais rápido o movimento, maior a corrente induzida.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Um gerador elétrico converte energia mecânica em elétrica utilizando o princípio da:",
    opcoes: [
      "indução eletromagnética.",
      "eletrização por atrito.",
      "condução térmica.",
      "reflexão de ondas.",
      "dilatação de condutores.",
    ],
    correta: 0,
    explicacao:
      "Ao girar uma bobina dentro de um campo magnético, o fluxo através dela varia continuamente e surge força eletromotriz induzida. É esse processo que ocorre em usinas hidrelétricas, térmicas e eólicas. O motor elétrico realiza a conversão inversa.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Um transformador é um dispositivo que altera a tensão de um circuito de corrente alternada. Ele não funciona com corrente contínua constante porque:",
    opcoes: [
      "a corrente contínua tem intensidade muito baixa.",
      "a corrente contínua queima o núcleo de ferro.",
      "não há variação de fluxo magnético para induzir tensão no secundário.",
      "os enrolamentos precisam de resistência nula.",
      "a corrente contínua não gera campo magnético.",
    ],
    correta: 2,
    explicacao:
      "Corrente contínua constante gera campo constante, e sem variação de fluxo não há indução. A corrente alternada, ao variar 60 vezes por segundo, produz a variação necessária. É por isso que a distribuição de energia é feita em corrente alternada.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Um transformador tem 200 espiras no primário e 1 000 no secundário. Aplicando 110 V no primário, a tensão no secundário será de:",
    opcoes: [
      "22 V",
      "110 V",
      "220 V",
      "550 V",
      "1 100 V",
    ],
    correta: 3,
    explicacao:
      "A razão entre tensões é igual à razão entre números de espiras: 110 · (1 000/200) = 550 V. Como o secundário tem mais espiras, trata-se de um transformador elevador. A corrente no secundário, em compensação, é proporcionalmente menor.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Em um transformador ideal, ao elevar a tensão do primário para o secundário, a corrente no secundário:",
    opcoes: [
      "aumenta na mesma proporção",
      "permanece constante",
      "diminui na proporção inversa",
      "torna-se nula",
      "inverte de sentido",
    ],
    correta: 2,
    explicacao:
      "A potência se conserva em um transformador ideal, então o produto tensão vezes corrente é o mesmo nos dois enrolamentos. Elevar a tensão implica reduzir a corrente. Transformadores não criam energia: apenas redistribuem tensão e corrente.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Materiais como ferro, níquel e cobalto, fortemente atraídos por ímãs, são classificados como:",
    opcoes: [
      "diamagnéticos",
      "paramagnéticos",
      "ferromagnéticos",
      "isolantes elétricos",
      "supercondutores",
    ],
    correta: 2,
    explicacao:
      "Nos ferromagnéticos, os domínios magnéticos se alinham fortemente com o campo externo, produzindo atração intensa e podendo manter magnetização residual. Paramagnéticos são fracamente atraídos e diamagnéticos, levemente repelidos.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Aquecer um ímã permanente acima de certa temperatura, chamada temperatura de Curie, provoca:",
    opcoes: [
      "aumento de sua força magnética.",
      "inversão de seus polos.",
      "perda de suas propriedades magnéticas.",
      "transformação do ímã em condutor perfeito.",
      "duplicação do número de polos.",
    ],
    correta: 2,
    explicacao:
      "A agitação térmica desorganiza os domínios magnéticos, que perdem o alinhamento. Acima da temperatura de Curie o material deixa de ser ferromagnético. O mesmo efeito de desmagnetização pode ser provocado por impactos fortes.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A unidade de intensidade de campo magnético no Sistema Internacional é o:",
    opcoes: [
      "ampere",
      "weber",
      "tesla",
      "henry",
      "volt",
    ],
    correta: 2,
    explicacao:
      "O tesla mede a densidade de fluxo magnético, e o weber mede o fluxo total. O henry é unidade de indutância. Campos de ímãs comuns ficam na faixa de centésimos de tesla, e equipamentos de ressonância magnética atingem alguns teslas.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Uma espira condutora está imersa em campo magnético uniforme. Para que surja corrente induzida nessa espira, é necessário que:",
    opcoes: [
      "o campo seja muito intenso, ainda que constante.",
      "a espira seja feita de material ferromagnético.",
      "haja variação do fluxo magnético através da espira.",
      "a espira esteja eletricamente carregada.",
      "haja uma fonte de tensão ligada a ela.",
    ],
    correta: 2,
    explicacao:
      "Campo intenso e constante não induz nada: o que importa é a taxa de variação do fluxo. Essa variação pode vir de mudança na intensidade do campo, na área da espira ou em sua inclinação em relação ao campo.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Carregadores de celular por indução funcionam transferindo energia entre duas bobinas sem contato elétrico. O princípio físico envolvido é:",
    opcoes: [
      "a condução direta de corrente pelo ar.",
      "a eletrização por atrito entre as superfícies.",
      "a indução eletromagnética entre bobinas acopladas.",
      "a reflexão de ondas sonoras.",
      "a dilatação térmica dos componentes.",
    ],
    correta: 2,
    explicacao:
      "A bobina da base é percorrida por corrente alternada e gera campo magnético variável, que induz corrente na bobina do aparelho. É o mesmo princípio do transformador, com o acoplamento feito através do ar. A eficiência cai rapidamente com a distância.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "As correntes de Foucault, ou correntes parasitas, surgem em massas metálicas submetidas a campos magnéticos variáveis. Uma aplicação prática desse fenômeno é:",
    opcoes: [
      "o freio eletromagnético, que desacelera sem contato mecânico.",
      "a produção de ímãs permanentes.",
      "a geração de corrente contínua constante.",
      "o aumento da resistência de fios de cobre.",
      "a eliminação do efeito Joule em transformadores.",
    ],
    correta: 0,
    explicacao:
      "As correntes induzidas no metal criam campos que se opõem ao movimento, frenando-o suavemente. O sistema é usado em trens e em equipamentos de academia. Em transformadores, essas mesmas correntes são indesejadas, e por isso o núcleo é laminado.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "O campo magnético terrestre é importante para a vida no planeta porque:",
    opcoes: [
      "aquece a atmosfera nas regiões polares.",
      "gera a força gravitacional que retém a atmosfera.",
      "produz diretamente a camada de ozônio.",
      "desvia partículas carregadas provenientes do Sol, formando a magnetosfera.",
      "impede a entrada de luz visível.",
    ],
    correta: 3,
    explicacao:
      "As partículas do vento solar são desviadas pela força magnética e canalizadas para os polos, onde produzem as auroras. Sem esse escudo, a radiação atingiria a superfície com intensidade muito maior. O campo é gerado por correntes no núcleo externo líquido da Terra.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "As auroras polares são explicadas pela interação entre:",
    opcoes: [
      "a luz solar e as nuvens de alta altitude.",
      "a rotação da Terra e a pressão atmosférica.",
      "raios cósmicos e a camada de ozônio.",
      "partículas carregadas do vento solar e o campo magnético terrestre.",
      "correntes marítimas e o campo gravitacional.",
    ],
    correta: 3,
    explicacao:
      "As partículas são guiadas pelas linhas do campo magnético até as regiões polares, onde colidem com gases da alta atmosfera e os excitam, produzindo luz. A cor depende do gás envolvido: verde para oxigênio e avermelhado ou azulado para nitrogênio.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Um ímã em queda dentro de um tubo de cobre desce muito mais devagar do que em queda livre. Esse comportamento é explicado:",
    opcoes: [
      "pelo atrito entre o ímã e as paredes do tubo.",
      "pela atração magnética do cobre, que é ferromagnético.",
      "pela redução da gravidade dentro do tubo.",
      "pelas correntes induzidas no cobre, que se opõem ao movimento.",
      "pela resistência do ar aprisionado.",
    ],
    correta: 3,
    explicacao:
      "A queda faz o fluxo variar e induz correntes no tubo, cujos campos se opõem ao movimento, conforme a lei de Lenz. O cobre não é ferromagnético e não atrai o ímã, e o experimento funciona mesmo sem contato entre eles. É uma demonstração clássica de freio eletromagnético.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A regra da mão direita é utilizada em eletromagnetismo para determinar:",
    opcoes: [
      "o valor numérico da corrente elétrica.",
      "a resistência de um condutor.",
      "a potência dissipada em um resistor.",
      "o sentido do campo magnético gerado por uma corrente.",
      "a temperatura de um eletroímã.",
    ],
    correta: 3,
    explicacao:
      "Apontando o polegar no sentido da corrente, os demais dedos indicam o sentido das linhas de campo que circundam o fio. Existem variantes da regra para determinar o sentido da força magnética sobre cargas e condutores. Todas são recursos mnemônicos para relações vetoriais.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A intensidade do campo magnético no interior de um solenoide aumenta quando:",
    opcoes: [
      "reduz-se a corrente que o percorre.",
      "afasta-se o núcleo de ferro do interior.",
      "aumenta-se a resistência do fio.",
      "aumenta-se o número de espiras por unidade de comprimento.",
      "diminui-se a tensão aplicada.",
    ],
    correta: 3,
    explicacao:
      "O campo depende do produto da corrente pelo número de espiras por metro. Introduzir núcleo ferromagnético multiplica esse valor várias vezes. É assim que se constroem eletroímãs capazes de erguer toneladas de sucata metálica.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Uma bússola colocada próxima a um fio percorrido por corrente contínua sofre desvio de sua agulha. Interrompendo a corrente, a agulha:",
    opcoes: [
      "mantém a posição desviada permanentemente.",
      "gira continuamente sem parar.",
      "perde suas propriedades magnéticas.",
      "retorna à orientação determinada pelo campo terrestre.",
      "aponta para o fio.",
    ],
    correta: 3,
    explicacao:
      "Sem corrente, cessa o campo magnético do fio e resta apenas o campo terrestre, que orienta a agulha. Foi exatamente esse comportamento que Oersted observou. O desvio é tanto maior quanto mais intensa a corrente e mais próxima a bússola.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "O fluxo magnético através de uma espira depende do campo magnético, da área da espira e:",
    opcoes: [
      "da resistência elétrica do fio.",
      "da massa do material condutor.",
      "da temperatura ambiente.",
      "do ângulo entre o campo e a normal à superfície da espira.",
      "do comprimento total do circuito.",
    ],
    correta: 3,
    explicacao:
      "O fluxo é máximo quando o campo é perpendicular ao plano da espira e nulo quando é paralelo a ele. Girar a espira altera o fluxo mesmo com campo e área constantes — princípio usado nos geradores de corrente alternada.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Em uma usina hidrelétrica, a sequência correta de conversões de energia até a geração de eletricidade é:",
    opcoes: [
      "elétrica em mecânica, e esta em potencial.",
      "térmica em química, e esta em elétrica.",
      "nuclear em térmica, e esta em elétrica.",
      "potencial gravitacional em cinética, e esta em elétrica por indução.",
      "elétrica em térmica, e esta em mecânica.",
    ],
    correta: 3,
    explicacao:
      "A água armazenada tem energia potencial; ao cair, ganha energia cinética e gira as turbinas acopladas aos geradores, onde a indução eletromagnética produz eletricidade. A etapa final depende diretamente da lei de Faraday.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Um alto-falante converte sinais elétricos em som utilizando:",
    opcoes: [
      "a força magnética sobre uma bobina percorrida por corrente variável.",
      "a eletrização por atrito do cone de papel.",
      "a dilatação térmica do ímã interno.",
      "a reflexão total das ondas sonoras.",
      "a indução de cargas estáticas no ar.",
    ],
    correta: 0,
    explicacao:
      "A corrente do sinal de áudio percorre uma bobina imersa no campo de um ímã permanente, e a força magnética variável faz o cone vibrar, produzindo som. O microfone realiza o processo inverso, gerando corrente a partir da vibração.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Sobre a relação entre eletricidade e magnetismo estabelecida no século XIX, é correto afirmar que:",
    opcoes: [
      "são fenômenos completamente independentes.",
      "o magnetismo é uma forma de energia térmica.",
      "a eletricidade deriva exclusivamente do atrito.",
      "constituem manifestações de uma mesma interação, o eletromagnetismo.",
      "apenas ímãs naturais produzem campo magnético.",
    ],
    correta: 3,
    explicacao:
      "As experiências de Oersted e Faraday e a formulação de Maxwell mostraram que campos elétricos e magnéticos variáveis se geram mutuamente. Dessa unificação nasceu a previsão das ondas eletromagnéticas e a compreensão da natureza da luz.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Cartões magnéticos e fitas de áudio armazenam informação por meio da:",
    opcoes: [
      "eletrização estática da superfície plástica.",
      "gravação de sulcos mecânicos.",
      "variação da resistência elétrica do material.",
      "emissão de radiação ultravioleta.",
      "orientação de domínios magnéticos em uma camada de material ferromagnético.",
    ],
    correta: 4,
    explicacao:
      "Cabeças de gravação alinham os domínios em padrões que codificam a informação, e a leitura ocorre por indução ao passar a fita ou a tarja pela cabeça leitora. Campos magnéticos intensos podem apagar esses dados acidentalmente.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Uma espira gira com velocidade constante dentro de um campo magnético uniforme. A força eletromotriz induzida nessa espira será:",
    opcoes: [
      "constante e contínua.",
      "sempre nula.",
      "crescente sem limite.",
      "independente da velocidade de rotação.",
      "alternada, variando periodicamente de sentido.",
    ],
    correta: 4,
    explicacao:
      "Ao girar, o ângulo entre o campo e a normal à espira varia continuamente, e o fluxo oscila entre valores máximo e mínimo. A tensão induzida acompanha essa oscilação, invertendo de sentido a cada meia volta. É esse o princípio do gerador de corrente alternada.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Exames de ressonância magnética utilizam campos magnéticos muito intensos. Por essa razão, é proibida a entrada, na sala do equipamento, de:",
    opcoes: [
      "objetos de plástico e tecido.",
      "materiais de vidro comum.",
      "roupas de algodão.",
      "documentos de papel.",
      "objetos metálicos ferromagnéticos.",
    ],
    correta: 4,
    explicacao:
      "Objetos ferromagnéticos são atraídos com força enorme e podem se transformar em projéteis, além de danificar o equipamento. Marca-passos e implantes metálicos também exigem avaliação prévia. Plástico, tecido e papel não interagem com o campo.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Uma corrente elétrica alternada percorrendo um fio produz, ao seu redor, um campo magnético que:",
    opcoes: [
      "é constante no tempo.",
      "não existe, pois só corrente contínua gera campo.",
      "aponta sempre para o norte geográfico.",
      "é sempre nulo fora do fio.",
      "varia periodicamente, acompanhando a corrente.",
    ],
    correta: 4,
    explicacao:
      "O campo magnético acompanha a corrente que o gera, invertendo de sentido a cada semiciclo. Essa variação é justamente o que permite a indução em transformadores e em carregadores sem fio. Corrente contínua produz campo constante.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Um transformador abaixador é aquele em que o número de espiras do secundário é:",
    opcoes: [
      "maior que o do primário, elevando a tensão.",
      "igual ao do primário, mantendo a tensão.",
      "irrelevante para o funcionamento.",
      "sempre igual a mil espiras.",
      "menor que o do primário, reduzindo a tensão.",
    ],
    correta: 4,
    explicacao:
      "Menos espiras no secundário implicam tensão de saída menor e corrente maior. Transformadores abaixadores aparecem nos postes de distribuição, reduzindo a tensão da rede para os valores residenciais. Os elevadores fazem o caminho inverso na saída das usinas.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Ao afastar lentamente um ímã de uma bobina, a intensidade da corrente induzida é menor do que ao afastá-lo rapidamente. Isso ocorre porque a força eletromotriz depende:",
    opcoes: [
      "do valor absoluto do fluxo magnético.",
      "da massa do ímã utilizado.",
      "da resistência do galvanômetro.",
      "da temperatura da bobina.",
      "da rapidez com que o fluxo magnético varia.",
    ],
    correta: 4,
    explicacao:
      "A lei de Faraday relaciona a força eletromotriz à taxa de variação do fluxo, não ao seu valor. Movimentos rápidos produzem variações abruptas e tensões maiores. Um ímã parado, por maior que seja, não induz corrente alguma.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Os trens de levitação magnética, conhecidos como maglev, flutuam sobre os trilhos graças:",
    opcoes: [
      "à repulsão entre campos magnéticos gerados no trem e na via.",
      "à redução da gravidade na região dos trilhos.",
      "ao empuxo do ar comprimido sob o veículo.",
      "à atração elétrica entre cargas estáticas.",
      "à dilatação térmica dos trilhos.",
    ],
    correta: 0,
    explicacao:
      "Eletroímãs ou supercondutores produzem forças magnéticas que sustentam e guiam o veículo sem contato mecânico. A ausência de atrito com trilhos permite velocidades muito altas e reduz o desgaste. O sistema exige controle eletrônico contínuo.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Segundo as equações de Maxwell, um campo magnético variável no tempo gera:",
    opcoes: [
      "um campo elétrico induzido.",
      "uma força gravitacional adicional.",
      "calor por condução.",
      "uma corrente contínua constante.",
      "uma carga elétrica nova.",
    ],
    correta: 0,
    explicacao:
      "A geração mútua entre campos elétricos e magnéticos variáveis é o mecanismo que permite a propagação de ondas eletromagnéticas no vácuo. Maxwell calculou a velocidade dessas ondas e verificou que coincidia com a da luz, concluindo que a luz é eletromagnética.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Uma campainha elétrica comum funciona com base no princípio do:",
    opcoes: [
      "eletroímã, que atrai um martelo quando percorrido por corrente.",
      "ímã permanente, que gira continuamente.",
      "efeito Joule, que aquece uma resistência.",
      "efeito fotoelétrico, que emite elétrons.",
      "empuxo magnético sobre o ar.",
    ],
    correta: 0,
    explicacao:
      "Ao fechar o circuito, o eletroímã atrai uma haste metálica que golpeia a campânula e, ao mesmo tempo, interrompe o circuito. A haste retorna, o circuito se fecha novamente e o ciclo se repete rapidamente, produzindo o som contínuo.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Sobre a força magnética que atua sobre uma carga elétrica em repouso dentro de um campo magnético, é correto afirmar que ela é:",
    opcoes: [
      "máxima",
      "igual ao peso da carga",
      "perpendicular ao campo",
      "sempre atrativa",
      "nula",
    ],
    correta: 4,
    explicacao:
      "A força magnética depende da velocidade da carga; sem movimento, ela é nula. Uma carga em repouso só sofreria força se houvesse campo elétrico presente. É por isso que ímãs não atraem objetos eletricamente carregados mas parados.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Núcleos de transformadores são construídos com chapas finas isoladas entre si, e não com blocos maciços de ferro, para:",
    opcoes: [
      "reduzir as perdas por correntes de Foucault.",
      "aumentar a resistência elétrica dos enrolamentos.",
      "diminuir o número de espiras necessário.",
      "eliminar completamente o campo magnético.",
      "reduzir o peso a qualquer custo.",
    ],
    correta: 0,
    explicacao:
      "As chapas laminadas dificultam a circulação de correntes parasitas no núcleo, reduzindo o aquecimento e as perdas de energia. Sem essa construção, boa parte da potência seria dissipada em calor. O ferro continua necessário para conduzir o fluxo magnético.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "A grandeza que mede a quantidade de linhas de campo magnético que atravessam uma superfície é chamada de:",
    opcoes: [
      "indutância",
      "resistividade",
      "capacitância",
      "permissividade",
      "fluxo magnético",
    ],
    correta: 4,
    explicacao:
      "O fluxo magnético é medido em webers e depende do campo, da área e da orientação da superfície. Sua variação no tempo é o que produz força eletromotriz induzida, conforme a lei de Faraday. Indutância e capacitância são propriedades de componentes, não medidas de fluxo.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "dificil",
    enunciado:
      "Um transformador ideal recebe 1 100 W no primário. A potência disponível no secundário será de:",
    opcoes: [
      "110 W",
      "550 W",
      "1 100 W",
      "2 200 W",
      "11 000 W",
    ],
    correta: 2,
    explicacao:
      "Em um transformador ideal não há perdas, e a potência se conserva integralmente. O que muda é a combinação de tensão e corrente. Em transformadores reais, perdas por aquecimento e por correntes parasitas reduzem levemente esse valor.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Ao passar um cartão de crédito próximo a um ímã forte, a tarja magnética pode ser danificada porque:",
    opcoes: [
      "o calor do ímã derrete a tarja.",
      "o ímã transfere carga elétrica ao cartão.",
      "a tarja é feita de material isolante.",
      "o cartão perde massa ao se aproximar do ímã.",
      "o campo magnético reorganiza os domínios que armazenam a informação.",
    ],
    correta: 4,
    explicacao:
      "A informação está codificada na orientação dos domínios magnéticos, e um campo externo intenso pode alterá-la de forma irreversível. Cartões com chip não sofrem esse problema, porque armazenam dados eletronicamente.",
  },
  {
    materia: "fisica",
    tema: "Eletromagnetismo e indução",
    dificuldade: "media",
    enunciado:
      "Uma espira condutora é atravessada por um fluxo magnético que varia de 0,02 Wb para 0,08 Wb em um intervalo de 0,3 s. A força eletromotriz média induzida na espira, em módulo, vale:",
    opcoes: [
      "0,1 V",
      "0,3 V",
      "0,4 V",
      "0,5 V",
      "0,2 V",
    ],
    correta: 4,
    explicacao:
      "Pela lei de Faraday, a fem média é a variação do fluxo dividida pelo intervalo de tempo: (0,08 − 0,02) / 0,3 = 0,06 / 0,3 = 0,2 V. Um erro comum é esquecer de subtrair o fluxo inicial e usar apenas o valor final, o que levaria a um resultado incorreto.",
  },
];
