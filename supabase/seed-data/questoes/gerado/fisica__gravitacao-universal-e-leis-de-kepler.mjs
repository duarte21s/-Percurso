/* Gravitação universal e leis de Kepler (50 questões).
   Modelos geocêntrico e heliocêntrico, as três leis de Kepler, lei da
   gravitação universal, satélites, marés e imponderabilidade.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "facil",
    enunciado:
      "O modelo heliocêntrico, proposto por Copérnico no século XVI, estabelece que:",
    opcoes: [
      "a Terra ocupa o centro do universo.",
      "o Sol ocupa a posição central e os planetas giram em torno dele.",
      "a Lua é o centro do sistema solar.",
      "os planetas permanecem imóveis no espaço.",
      "não existe movimento entre os corpos celestes.",
    ],
    correta: 1,
    explicacao:
      "O modelo heliocêntrico substituiu o geocêntrico de Ptolomeu, que colocava a Terra no centro. A mudança simplificou a explicação dos movimentos planetários, sobretudo o retrógrado aparente. Galileu reuniu evidências observacionais decisivas a favor dessa concepção.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A primeira lei de Kepler, também chamada lei das órbitas, estabelece que os planetas descrevem em torno do Sol trajetórias:",
    opcoes: [
      "circulares, com o Sol no centro.",
      "elípticas, com o Sol em um dos focos.",
      "parabólicas, com o Sol no vértice.",
      "retilíneas e uniformes.",
      "espirais que se aproximam do Sol.",
    ],
    correta: 1,
    explicacao:
      "Kepler rompeu com séculos de tradição ao abandonar a órbita circular perfeita. A elipse tem dois focos, e o Sol ocupa apenas um deles — o outro fica vazio. As órbitas planetárias são elipses de baixa excentricidade, quase circulares.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A segunda lei de Kepler, ou lei das áreas, afirma que o segmento que liga um planeta ao Sol varre áreas iguais em tempos iguais. Uma consequência direta dessa lei é que o planeta:",
    opcoes: [
      "move-se com velocidade constante em toda a órbita.",
      "move-se mais rapidamente quando está mais próximo do Sol.",
      "move-se mais rapidamente quando está mais distante do Sol.",
      "permanece parado no afélio.",
      "inverte o sentido do movimento periodicamente.",
    ],
    correta: 1,
    explicacao:
      "Para varrer a mesma área em menos espaço radial, o planeta precisa percorrer um arco maior quando está perto do Sol. Por isso a velocidade orbital é máxima no periélio e mínima no afélio. A lei é uma manifestação da conservação do momento angular.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A terceira lei de Kepler relaciona o período de revolução de um planeta ao raio médio de sua órbita. Segundo essa lei, o quadrado do período é proporcional:",
    opcoes: [
      "ao raio médio da órbita.",
      "ao quadrado do raio médio.",
      "ao cubo do raio médio.",
      "à massa do planeta.",
      "à velocidade orbital.",
    ],
    correta: 2,
    explicacao:
      "A relação T²/R³ é constante para todos os corpos que orbitam o mesmo astro central. Planetas mais distantes têm períodos desproporcionalmente maiores. A lei vale igualmente para satélites em torno da Terra, com outra constante.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A lei da gravitação universal, formulada por Newton, estabelece que a força de atração entre dois corpos é:",
    opcoes: [
      "diretamente proporcional ao produto das massas e inversamente proporcional ao quadrado da distância.",
      "inversamente proporcional ao produto das massas.",
      "independente da distância entre eles.",
      "proporcional à soma das massas.",
      "proporcional ao cubo da distância.",
    ],
    correta: 0,
    explicacao:
      "A expressão é F = G·m₁·m₂/d². A constante G é universal e tem valor muito pequeno, o que faz a gravidade ser desprezível entre objetos comuns. Ela só se torna relevante quando ao menos um dos corpos tem massa astronômica.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Duas massas se atraem gravitacionalmente com força F. Ao dobrar a distância entre elas, mantendo as massas, a força passa a ser:",
    opcoes: [
      "2F",
      "F/2",
      "F/4",
      "4F",
      "F",
    ],
    correta: 2,
    explicacao:
      "A dependência é com o inverso do quadrado da distância, então dobrar d divide a força por 4. Triplicar a distância a reduziria a um nono. A lei de Coulomb tem exatamente a mesma forma matemática.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A constante da gravitação universal, presente na lei de Newton, tem valor aproximado de:",
    opcoes: [
      "9,8 N·m²/kg²",
      "6,7 × 10⁻¹¹ N·m²/kg²",
      "9 × 10⁹ N·m²/kg²",
      "3 × 10⁸ N·m²/kg²",
      "1 N·m²/kg²",
    ],
    correta: 1,
    explicacao:
      "O valor minúsculo explica por que não percebemos atração gravitacional entre objetos do cotidiano. Só massas planetárias produzem efeitos perceptíveis. O valor 9,8 corresponde à aceleração da gravidade na superfície terrestre, grandeza diferente.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A aceleração da gravidade na superfície de um planeta depende:",
    opcoes: [
      "apenas da massa do corpo que cai.",
      "da massa do planeta e de seu raio.",
      "exclusivamente da velocidade de rotação.",
      "da temperatura da superfície.",
      "da composição química da atmosfera.",
    ],
    correta: 1,
    explicacao:
      "A expressão g = G·M/R² mostra que planetas mais massivos e mais compactos têm gravidade superficial maior. A massa do corpo que cai não aparece, o que confirma que todos os corpos caem com a mesma aceleração no vácuo.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Um planeta tem o dobro da massa da Terra e o mesmo raio. A aceleração da gravidade em sua superfície, comparada à terrestre, será:",
    opcoes: [
      "a metade",
      "igual",
      "o dobro",
      "o quádruplo",
      "um quarto",
    ],
    correta: 2,
    explicacao:
      "Como g é diretamente proporcional à massa para raio fixo, dobrar M dobra g. Se o raio também dobrasse, g cairia à metade do valor terrestre, porque o raio entra ao quadrado no denominador. Massa e raio atuam em sentidos opostos.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Um satélite em órbita circular ao redor da Terra permanece nessa trajetória porque a força gravitacional:",
    opcoes: [
      "é equilibrada por uma força centrífuga real.",
      "atua como força centrípeta, curvando continuamente sua trajetória.",
      "é nula naquela altitude.",
      "empurra o satélite para fora da órbita.",
      "converte-se em energia elétrica.",
    ],
    correta: 1,
    explicacao:
      "O satélite está em queda livre permanente, mas sua velocidade tangencial faz com que ele nunca alcance o solo. A gravidade fornece exatamente a força centrípeta necessária. A chamada força centrífuga é aparente, existindo apenas em referenciais girantes.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Astronautas em uma estação espacial em órbita flutuam em seu interior. A explicação correta para essa condição é que eles:",
    opcoes: [
      "estão fora do alcance da gravidade terrestre.",
      "estão em queda livre junto com a estação, o que anula a força normal.",
      "perderam massa ao subir ao espaço.",
      "estão sob ação de gravidade zero absoluta.",
      "são empurrados por correntes de ar internas.",
    ],
    correta: 1,
    explicacao:
      "Na altitude de uma estação espacial, a gravidade ainda vale cerca de 90% do valor na superfície. O que produz a sensação de ausência de peso é a queda livre simultânea de astronauta e estação, que zera a força de contato entre eles.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Os satélites geoestacionários permanecem sempre sobre o mesmo ponto da superfície terrestre. Para isso, seu período orbital deve ser de:",
    opcoes: [
      "1 hora",
      "12 horas",
      "24 horas",
      "48 horas",
      "1 mês",
    ],
    correta: 2,
    explicacao:
      "O período precisa coincidir com o de rotação da Terra, cerca de 24 horas, e a órbita deve ser equatorial. Pela terceira lei de Kepler, isso determina uma altitude única, próxima de 36 000 km. É a órbita usada por satélites de comunicação e meteorologia.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "As marés oceânicas são explicadas principalmente pela atração gravitacional exercida sobre a Terra:",
    opcoes: [
      "pelo Sol apenas.",
      "pela Lua, com contribuição menor do Sol.",
      "por Júpiter, o maior planeta.",
      "pelo próprio núcleo terrestre.",
      "pelas estrelas mais próximas.",
    ],
    correta: 1,
    explicacao:
      "Embora o Sol seja muito mais massivo, a Lua está muito mais próxima, e o efeito de maré depende fortemente da distância. Quando Sol e Lua se alinham, as marés ficam mais intensas — são as marés de sizígia. Em quadratura, ocorrem as marés de quadratura, mais fracas.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "O ponto da órbita em que um planeta está mais próximo do Sol é chamado de:",
    opcoes: [
      "afélio",
      "periélio",
      "apogeu",
      "perigeu",
      "zênite",
    ],
    correta: 1,
    explicacao:
      "Periélio é o ponto de maior proximidade e afélio, o de maior afastamento do Sol. Para órbitas em torno da Terra, os termos equivalentes são perigeu e apogeu. É no periélio que a velocidade orbital atinge seu valor máximo.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Um planeta A tem raio orbital quatro vezes maior que o de um planeta B, ambos orbitando a mesma estrela. Pela terceira lei de Kepler, o período de A, comparado ao de B, é:",
    opcoes: [
      "4 vezes maior",
      "8 vezes maior",
      "16 vezes maior",
      "2 vezes maior",
      "igual",
    ],
    correta: 1,
    explicacao:
      "Como T² é proporcional a R³, temos T proporcional a R elevado a 3/2. Com R multiplicado por 4, o período fica multiplicado por 4^(3/2) = 8. Planetas externos têm períodos desproporcionalmente longos, como Netuno, com 165 anos.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "O peso de um corpo na superfície da Lua é cerca de um sexto do peso na Terra. Sobre a massa desse corpo na Lua, é correto afirmar que ela:",
    opcoes: [
      "permanece exatamente a mesma.",
      "também se reduz a um sexto.",
      "torna-se nula.",
      "aumenta seis vezes.",
      "depende da altitude lunar.",
    ],
    correta: 0,
    explicacao:
      "Massa é uma propriedade do corpo e não depende do local; peso é uma força e varia com a gravidade. A gravidade lunar menor decorre da massa reduzida da Lua e de seu raio menor. É por isso que astronautas saltam mais alto sem terem emagrecido.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A velocidade de escape de um planeta corresponde à velocidade mínima necessária para que um corpo:",
    opcoes: [
      "escape definitivamente da atração gravitacional do planeta.",
      "entre em órbita circular estável.",
      "atinja a velocidade da luz.",
      "permaneça em repouso na superfície.",
      "complete uma volta completa em torno do planeta.",
    ],
    correta: 0,
    explicacao:
      "Na Terra, essa velocidade vale cerca de 11,2 km/s. Ela depende da massa e do raio do planeta, mas não da massa do objeto lançado. Corpos celestes com velocidade de escape maior que a da luz seriam buracos negros.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Ao longo de um mês, observa-se da Terra que a Lua muda de aparência de forma cíclica. As fases da Lua resultam:",
    opcoes: [
      "das diferentes porções iluminadas da Lua visíveis da Terra ao longo de sua órbita.",
      "da sombra projetada pela Terra sobre a Lua.",
      "da variação da distância entre Terra e Lua.",
      "da rotação da Lua em torno do próprio eixo apenas.",
      "de nuvens que cobrem parcialmente o satélite.",
    ],
    correta: 0,
    explicacao:
      "Metade da Lua está sempre iluminada pelo Sol; o que muda é quanto dessa metade vemos da Terra. A sombra da Terra sobre a Lua produz eclipses lunares, fenômeno distinto e ocasional. O ciclo completo das fases dura cerca de 29,5 dias.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Considerando o alinhamento entre Sol, Terra e Lua, um eclipse solar ocorre quando:",
    opcoes: [
      "a Terra se posiciona entre o Sol e a Lua.",
      "o Sol se posiciona entre a Terra e a Lua.",
      "a Lua se posiciona entre o Sol e a Terra.",
      "a Lua entra na sombra da Terra.",
      "a Terra gira mais rápido que o normal.",
    ],
    correta: 2,
    explicacao:
      "A Lua bloqueia a luz solar e projeta sua sombra sobre uma faixa da superfície terrestre. Quando é a Terra que fica entre Sol e Lua, ocorre eclipse lunar. Eclipses não acontecem todo mês porque a órbita lunar é inclinada em relação à da Terra.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "A força gravitacional entre a Terra e a Lua atua sobre os dois corpos. Comparando as intensidades dessas forças, é correto afirmar que:",
    opcoes: [
      "a Terra atrai a Lua com força maior.",
      "a Lua atrai a Terra com força maior.",
      "as duas forças têm a mesma intensidade.",
      "apenas a Terra exerce força.",
      "as forças variam de forma independente.",
    ],
    correta: 2,
    explicacao:
      "Pela terceira lei de Newton, as forças formam par ação-reação e têm o mesmo módulo. O que difere é a aceleração produzida: como a Terra é muito mais massiva, ela se move bem menos. Os dois corpos orbitam, na verdade, um centro de massa comum.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Sobre a aceleração da gravidade à medida que um corpo se afasta da superfície da Terra, é correto afirmar que ela:",
    opcoes: [
      "aumenta continuamente.",
      "permanece exatamente constante.",
      "diminui, seguindo o inverso do quadrado da distância ao centro.",
      "torna-se nula a 100 km de altitude.",
      "inverte de sentido a partir da atmosfera.",
    ],
    correta: 2,
    explicacao:
      "A distância relevante é medida a partir do centro da Terra, e não da superfície. Por isso a queda é lenta nas primeiras dezenas de quilômetros: a 400 km de altitude, g ainda vale cerca de 8,7 m/s². A gravidade nunca chega exatamente a zero.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Galileu Galilei contribuiu decisivamente para a aceitação do modelo heliocêntrico ao observar, com sua luneta:",
    opcoes: [
      "as manchas solares e os satélites de Júpiter.",
      "a superfície de Plutão.",
      "as ondas gravitacionais.",
      "a composição química das estrelas.",
      "a expansão do universo.",
    ],
    correta: 0,
    explicacao:
      "Os satélites de Júpiter mostraram que nem tudo orbita a Terra, e as fases de Vênus só faziam sentido no modelo heliocêntrico. As manchas solares contrariavam a ideia de perfeição imutável dos céus. Essas observações lhe custaram um processo inquisitorial.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Um corpo em órbita circular ao redor da Terra tem sua velocidade orbital determinada:",
    opcoes: [
      "apenas por sua própria massa.",
      "pela temperatura do espaço.",
      "pela massa da Terra e pelo raio da órbita.",
      "pela forma do satélite.",
      "pela quantidade de combustível a bordo.",
    ],
    correta: 2,
    explicacao:
      "A velocidade orbital é dada por v = raiz de G·M/R, sem qualquer dependência da massa do satélite. Órbitas mais baixas exigem velocidades maiores. É por isso que a Estação Espacial completa uma volta em cerca de 90 minutos.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A afirmação de que a Lua está permanentemente caindo em direção à Terra é correta porque:",
    opcoes: [
      "ela perde altitude a cada volta e colidirá em breve.",
      "a gravidade terrestre não atua sobre ela.",
      "sua trajetória curva resulta da queda combinada ao movimento tangencial.",
      "ela está sendo empurrada pelo vento solar.",
      "sua órbita é uma linha reta.",
    ],
    correta: 2,
    explicacao:
      "A Lua é constantemente acelerada em direção à Terra, mas sua velocidade tangencial faz com que a superfície terrestre se curve na mesma proporção. O resultado é uma órbita estável. Newton ilustrou essa ideia com o experimento mental do canhão em uma montanha muito alta.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Comparando a força gravitacional e a força elétrica entre duas partículas subatômicas carregadas, verifica-se que a gravitacional é:",
    opcoes: [
      "muitíssimo mais fraca.",
      "muitíssimo mais forte.",
      "exatamente igual.",
      "de sentido oposto e mesmo módulo.",
      "inexistente nessa escala.",
    ],
    correta: 0,
    explicacao:
      "A razão entre as duas forças é da ordem de 10³⁹ em favor da elétrica. A gravidade só domina em escala astronômica porque corpos celestes são eletricamente neutros, enquanto a massa sempre se acumula. Não há massa negativa que cancele a atração.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A energia potencial gravitacional de um satélite aumenta quando ele:",
    opcoes: [
      "se aproxima da superfície terrestre.",
      "reduz sua massa em órbita.",
      "aumenta sua velocidade sem mudar de órbita.",
      "se afasta da Terra, ocupando órbita mais alta.",
      "permanece em repouso absoluto.",
    ],
    correta: 3,
    explicacao:
      "Afastar-se exige trabalho contra a gravidade, e essa energia fica armazenada como potencial. Em compensação, órbitas mais altas têm velocidade orbital menor, o que reduz a energia cinética. A energia mecânica total, porém, aumenta com a altitude.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Um foguete precisa de grande quantidade de combustível para deixar a Terra principalmente porque:",
    opcoes: [
      "precisa vencer a atração gravitacional e a resistência atmosférica.",
      "o espaço exerce força contrária ao movimento.",
      "sua massa aumenta durante a subida.",
      "a gravidade cresce com a altitude.",
      "não existe atrito na atmosfera.",
    ],
    correta: 0,
    explicacao:
      "A maior parte do combustível é gasta nos primeiros quilômetros, onde a atmosfera é densa e a gravidade é máxima. Além disso, o foguete precisa acelerar até a velocidade orbital. Por isso os lançadores são construídos em estágios, descartando massa ao longo da subida.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "As leis de Kepler foram formuladas a partir de observações astronômicas detalhadas realizadas principalmente por:",
    opcoes: [
      "Isaac Newton",
      "Albert Einstein",
      "Nicolau Copérnico",
      "Tycho Brahe",
      "Edwin Hubble",
    ],
    correta: 3,
    explicacao:
      "Tycho Brahe acumulou décadas de medições precisas a olho nu, antes da invenção do telescópio. Kepler analisou esses dados, sobretudo os de Marte, e deduziu as três leis. Newton, décadas depois, explicou por que essas leis valem, a partir da gravitação universal.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Newton demonstrou que as leis de Kepler são consequência de um princípio mais geral. Esse princípio é:",
    opcoes: [
      "a conservação da quantidade de movimento.",
      "o princípio de Arquimedes.",
      "a segunda lei da termodinâmica.",
      "a lei da gravitação universal, combinada às leis do movimento.",
      "a lei de Coulomb.",
    ],
    correta: 3,
    explicacao:
      "As leis de Kepler eram descritivas, obtidas dos dados; Newton mostrou que decorrem matematicamente de uma força que varia com o inverso do quadrado da distância. Essa unificação explicou também as marés, a precessão e o movimento dos cometas.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Sobre a velocidade de um planeta ao longo de sua órbita elíptica, é correto afirmar que ela é:",
    opcoes: [
      "constante em toda a trajetória.",
      "máxima no afélio e mínima no periélio.",
      "nula em dois pontos da órbita.",
      "máxima no periélio e mínima no afélio.",
      "independente da distância ao Sol.",
    ],
    correta: 3,
    explicacao:
      "É a consequência direta da lei das áreas: próximo ao Sol, o planeta precisa percorrer arcos maiores no mesmo intervalo. A Terra atinge o periélio em janeiro, quando sua velocidade orbital é ligeiramente maior. A variação é pequena, porque a órbita é quase circular.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A existência de um centro de massa comum em torno do qual Terra e Lua giram significa que:",
    opcoes: [
      "a Lua permanece imóvel enquanto a Terra gira.",
      "a Terra orbita a Lua em trajetória elíptica.",
      "não há movimento relativo entre eles.",
      "os dois corpos orbitam um ponto situado dentro da Terra, deslocado do centro.",
      "o centro de massa está no Sol.",
    ],
    correta: 3,
    explicacao:
      "Como a massa da Terra é cerca de 81 vezes maior, o centro de massa do sistema fica no interior do planeta, embora deslocado do centro geométrico. A Terra descreve uma pequena oscilação mensal em torno desse ponto. Esse efeito é usado para detectar planetas em outras estrelas.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Um corpo é levado da superfície da Terra a uma altitude igual ao raio terrestre. A essa distância do centro do planeta, a aceleração da gravidade será:",
    opcoes: [
      "igual à da superfície.",
      "metade da superfície.",
      "um quarto da superfície.",
      "o dobro da superfície.",
      "nula.",
    ],
    correta: 2,
    explicacao:
      "A distância ao centro passa de R para 2R, e como g varia com o inverso do quadrado, ela cai para um quarto do valor original. Note que o dado relevante é a distância ao centro, não à superfície — confundir os dois é o erro mais comum.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Os cometas descrevem órbitas muito alongadas em torno do Sol. Ao se aproximarem dele, esses corpos:",
    opcoes: [
      "reduzem sua velocidade orbital.",
      "permanecem com velocidade constante.",
      "escapam definitivamente do sistema solar.",
      "aumentam sua velocidade orbital e desenvolvem cauda.",
      "transformam-se em planetas.",
    ],
    correta: 3,
    explicacao:
      "A lei das áreas prevê aceleração perto do periélio, e o calor solar sublima o gelo do núcleo, formando a cabeleira e a cauda. A cauda aponta sempre para o lado oposto ao Sol, empurrada pelo vento solar. Longe do Sol, o cometa volta a ser apenas um núcleo escuro.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Um satélite artificial em órbita baixa tem período de cerca de 90 minutos, enquanto a Lua leva cerca de 27 dias. Essa diferença é explicada:",
    opcoes: [
      "pela diferença de massa entre satélite e Lua.",
      "pela composição química de cada corpo.",
      "pela rotação da Terra em torno do próprio eixo.",
      "pela terceira lei de Kepler, que relaciona período e raio orbital.",
      "pela presença de atmosfera em órbita baixa.",
    ],
    correta: 3,
    explicacao:
      "A Lua está cerca de 60 vezes mais distante do centro da Terra que um satélite em órbita baixa, e o período cresce com a potência 3/2 do raio. A massa do corpo em órbita não influencia o período. Essa relação vale para qualquer objeto orbitando a Terra.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A Lua mantém sempre a mesma face voltada para a Terra. Isso ocorre porque seu período de rotação:",
    opcoes: [
      "é muito menor que o de translação.",
      "é nulo, pois ela não gira.",
      "varia constantemente ao longo do mês.",
      "é igual ao seu período de translação em torno da Terra.",
      "é o dobro do período de translação.",
    ],
    correta: 3,
    explicacao:
      "A coincidência entre os dois períodos é chamada de rotação sincronizada e resulta de efeitos de maré acumulados ao longo de bilhões de anos. A Lua gira, sim, em torno de seu eixo — apenas o faz no mesmo ritmo em que orbita a Terra.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "O campo gravitacional em um ponto do espaço é definido como a razão entre:",
    opcoes: [
      "a força gravitacional e a massa de prova nesse ponto.",
      "a massa de prova e a força gravitacional.",
      "a energia potencial e o tempo.",
      "o peso e o volume do corpo.",
      "a distância e a massa do astro.",
    ],
    correta: 0,
    explicacao:
      "O campo gravitacional é numericamente igual à aceleração da gravidade e se mede em N/kg, unidade equivalente a m/s². Ele descreve uma propriedade do espaço criada pela massa geradora, independentemente de haver ou não corpo de prova.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Ao considerar as marés, observa-se que ocorrem duas marés altas por dia em muitos locais. Isso acontece porque:",
    opcoes: [
      "a Lua passa duas vezes sobre o mesmo ponto por dia.",
      "o Sol e a Lua se alternam a cada 12 horas.",
      "a Terra muda de sentido de rotação.",
      "há abaulamento de água tanto no lado voltado para a Lua quanto no lado oposto.",
      "as correntes marítimas invertem periodicamente.",
    ],
    correta: 3,
    explicacao:
      "A diferença de atração entre o lado próximo e o lado distante da Terra gera dois abaulamentos opostos. Como o planeta gira, cada ponto passa pelos dois em aproximadamente 24 horas. Daí o ritmo de duas marés altas e duas baixas por dia.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Um buraco negro é caracterizado por uma região do espaço em que:",
    opcoes: [
      "a gravidade é nula.",
      "não existe massa alguma.",
      "o tempo deixa de existir por completo.",
      "a velocidade de escape supera a velocidade da luz.",
      "as leis da física não se aplicam em nenhuma escala.",
    ],
    correta: 3,
    explicacao:
      "Com massa concentrada em volume extremamente pequeno, nem a luz consegue escapar do interior do horizonte de eventos. A previsão decorre da relatividade geral, e há hoje forte evidência observacional, incluindo imagens obtidas por interferometria.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Dois corpos de massas m e 2m são abandonados simultaneamente da mesma altura, no vácuo, próximos à superfície da Terra. Sobre a força gravitacional e a aceleração de cada um, é correto afirmar que:",
    opcoes: [
      "ambos sofrem a mesma força e a mesma aceleração.",
      "o mais massivo sofre força menor e acelera mais.",
      "ambos sofrem a mesma força, mas acelerações diferentes.",
      "nenhum dos dois sofre força gravitacional.",
      "o mais massivo sofre força maior, mas ambos têm a mesma aceleração.",
    ],
    correta: 4,
    explicacao:
      "A força é proporcional à massa, mas a aceleração é a força dividida pela massa — e a massa se cancela, restando g para os dois. Por isso caem juntos, resultado que Galileu defendeu contra a física aristotélica.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Sobre o modelo geocêntrico de Ptolomeu, predominante até o século XVI, é correto afirmar que ele:",
    opcoes: [
      "colocava o Sol no centro do universo.",
      "negava a existência dos planetas.",
      "previa órbitas elípticas para os planetas.",
      "baseava-se na lei da gravitação universal.",
      "colocava a Terra no centro e explicava os movimentos com epiciclos.",
    ],
    correta: 4,
    explicacao:
      "Para explicar o movimento retrógrado aparente dos planetas, o modelo recorria a círculos sobre círculos, os epiciclos. Ele fazia previsões razoáveis, mas à custa de complexidade crescente. O heliocentrismo explicava os mesmos fenômenos de forma muito mais simples.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A intensidade da força gravitacional entre dois corpos aumenta quando:",
    opcoes: [
      "as massas diminuem e a distância aumenta.",
      "apenas a distância aumenta.",
      "as massas permanecem constantes e a distância dobra.",
      "os corpos se tornam eletricamente carregados.",
      "as massas aumentam e a distância diminui.",
    ],
    correta: 4,
    explicacao:
      "A força cresce proporcionalmente ao produto das massas e cai com o quadrado da distância. Carga elétrica não influencia a gravidade, que depende apenas da massa. É por isso que a atração entre planetas é enorme apesar das distâncias envolvidas.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A relação T²/R³ constante, expressa pela terceira lei de Kepler, é válida:",
    opcoes: [
      "apenas para a Terra.",
      "somente para órbitas perfeitamente circulares.",
      "apenas para satélites artificiais.",
      "exclusivamente no sistema solar.",
      "para todos os corpos que orbitam um mesmo astro central.",
    ],
    correta: 4,
    explicacao:
      "A constante depende da massa do astro central, e por isso é a mesma para todos os planetas do Sol e outra para todos os satélites da Terra. A lei vale também para órbitas elípticas, usando o semieixo maior no lugar do raio.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Um satélite é transferido de uma órbita baixa para outra mais alta. Comparando as duas situações, na órbita mais alta o satélite terá:",
    opcoes: [
      "maior velocidade orbital e menor período.",
      "maior velocidade e maior período.",
      "menor velocidade e menor período.",
      "velocidade e período inalterados.",
      "menor velocidade orbital e maior período.",
    ],
    correta: 4,
    explicacao:
      "A velocidade orbital diminui com a raiz do raio, enquanto o período cresce com a potência 3/2. Isso parece contraintuitivo, mas decorre da gravidade mais fraca em altitudes maiores. Para subir de órbita, porém, é preciso acelerar o satélite momentaneamente.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "As estações do ano na Terra são causadas principalmente:",
    opcoes: [
      "pela variação da distância entre a Terra e o Sol.",
      "pelas fases da Lua ao longo do ano.",
      "pela velocidade de rotação do planeta.",
      "pela atividade das manchas solares.",
      "pela inclinação do eixo de rotação da Terra em relação ao plano da órbita.",
    ],
    correta: 4,
    explicacao:
      "A inclinação de cerca de 23,5 graus faz cada hemisfério receber luz solar mais direta em diferentes épocas do ano. A variação de distância é pequena e, aliás, a Terra está mais perto do Sol em janeiro — verão no hemisfério sul e inverno no norte.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Sondas espaciais frequentemente utilizam a manobra chamada estilingue gravitacional. Essa técnica consiste em:",
    opcoes: [
      "aproveitar a gravidade de um planeta para ganhar velocidade sem gastar combustível.",
      "usar motores em potência máxima durante todo o percurso.",
      "reduzir a massa da sonda em pleno voo.",
      "aproveitar o vento solar para navegar.",
      "eliminar a atração gravitacional do Sol.",
    ],
    correta: 0,
    explicacao:
      "A sonda passa próxima a um planeta em movimento e sai com velocidade maior em relação ao Sol, tomando emprestada uma fração ínfima da energia orbital do planeta. A manobra foi essencial em missões como as Voyager e a Cassini.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Sobre a afirmação de que no espaço não existe gravidade, a avaliação correta é que ela:",
    opcoes: [
      "está correta, pois a gravidade só existe na superfície dos planetas.",
      "é correta apenas acima de 100 km de altitude.",
      "depende da massa do observador.",
      "vale somente para corpos sem massa.",
      "é incorreta, pois a gravidade atua em todo o universo, embora enfraqueça com a distância.",
    ],
    correta: 4,
    explicacao:
      "A gravidade é justamente o que mantém a Lua em órbita e os planetas ao redor do Sol. O que astronautas experimentam é ausência de peso aparente, por estarem em queda livre. Confundir queda livre com ausência de gravidade é um equívoco muito difundido.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A energia mecânica total de um satélite em órbita estável ao redor da Terra permanece constante porque:",
    opcoes: [
      "não há força atuando sobre ele.",
      "os motores funcionam continuamente.",
      "a massa do satélite aumenta com o tempo.",
      "o satélite não possui energia cinética.",
      "a força gravitacional é conservativa e não há dissipação relevante.",
    ],
    correta: 4,
    explicacao:
      "Sem atmosfera significativa, não há atrito para dissipar energia, e a gravidade, sendo conservativa, apenas troca energia potencial por cinética. Em órbitas muito baixas, o arrasto residual acaba reduzindo a energia e provocando reentrada.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "dificil",
    enunciado:
      "Duas esferas de massas iguais a 1 000 kg cada estão separadas por 1 m. Adotando G = 6,7 × 10⁻¹¹ N·m²/kg², a força gravitacional entre elas é de aproximadamente:",
    opcoes: [
      "6,7 × 10⁻⁵ N",
      "6,7 × 10⁻² N",
      "6,7 N",
      "67 N",
      "670 N",
    ],
    correta: 0,
    explicacao:
      "Aplicando F = 6,7 × 10⁻¹¹ · 10⁶/1 = 6,7 × 10⁻⁵ N. O valor é minúsculo, comparável ao peso de um grão de areia, mesmo com massas de uma tonelada cada. Isso mostra por que a gravidade só se manifesta claramente em escala astronômica.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "A teoria da relatividade geral aperfeiçoou a descrição newtoniana da gravidade ao explicar fenômenos como:",
    opcoes: [
      "a queda dos corpos na superfície terrestre.",
      "o movimento uniforme em linha reta.",
      "a flutuação de corpos em líquidos.",
      "a condução de calor em metais.",
      "o desvio da luz ao passar próximo a corpos muito massivos.",
    ],
    correta: 4,
    explicacao:
      "Newton não previa desvio da luz, que não tem massa de repouso; Einstein mostrou que a própria geometria do espaço-tempo é curvada. A confirmação veio em 1919, durante um eclipse observado em Sobral, no Ceará, e em Príncipe, na África.",
  },
  {
    materia: "fisica",
    tema: "Gravitação universal e leis de Kepler",
    dificuldade: "media",
    enunciado:
      "Um planeta orbita uma estrela em trajetória elíptica. Quando esse planeta está mais próximo da estrela (periélio), comparado ao momento em que está mais distante (afélio), sua velocidade orbital é:",
    opcoes: [
      "menor, porque a força gravitacional é mais fraca no periélio.",
      "igual, pois a velocidade orbital não depende da distância à estrela.",
      "nula, pois o planeta para momentaneamente no periélio.",
      "maior apenas se o planeta tiver massa maior que a estrela.",
      "maior, em concordância com a lei das áreas de Kepler.",
    ],
    correta: 4,
    explicacao:
      "A segunda lei de Kepler (lei das áreas) estabelece que o segmento que liga o planeta à estrela varre áreas iguais em tempos iguais; como a distância é menor no periélio, a velocidade precisa ser maior para manter essa taxa constante. A força gravitacional, aliás, é mais intensa (não mais fraca) quando a distância é menor, o que reforça esse aumento de velocidade.",
  },
];
