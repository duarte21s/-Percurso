/* Eletrostática e campo elétrico (50 questões).
   Carga elétrica, processos de eletrização, condutores e isolantes, lei de
   Coulomb, campo e potencial elétrico, blindagem e poder das pontas.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "facil",
    enunciado:
      "Sobre a interação entre cargas elétricas, o princípio fundamental da eletrostática estabelece que cargas:",
    opcoes: [
      "de mesmo sinal se atraem e de sinais opostos se repelem.",
      "de mesmo sinal se repelem e de sinais opostos se atraem.",
      "sempre se atraem, independentemente do sinal.",
      "sempre se repelem, independentemente do sinal.",
      "não interagem à distância.",
    ],
    correta: 1,
    explicacao:
      "Cargas de sinais iguais se repelem e de sinais contrários se atraem. Essa interação ocorre à distância, mediada pelo campo elétrico. É o princípio que organiza toda a eletrostática, da eletrização à estrutura dos átomos.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "facil",
    enunciado:
      "Ao atritar um bastão de vidro com um pano de seda, o bastão fica eletrizado positivamente. Isso significa que, durante o atrito, o bastão:",
    opcoes: [
      "ganhou prótons do pano.",
      "perdeu elétrons para o pano.",
      "ganhou nêutrons do pano.",
      "perdeu prótons para o pano.",
      "não trocou partícula alguma.",
    ],
    correta: 1,
    explicacao:
      "Na eletrização por atrito, apenas elétrons se transferem — prótons estão presos ao núcleo. Perder elétrons deixa o corpo com excesso de carga positiva, e o pano fica negativo. A carga total do sistema permanece constante.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Dois corpos condutores idênticos, um com carga +8 μC e outro neutro, são postos em contato e depois separados. A carga final de cada um será de:",
    opcoes: [
      "+8 μC e 0",
      "+4 μC e +4 μC",
      "+8 μC e +8 μC",
      "0 e 0",
      "+2 μC e +6 μC",
    ],
    correta: 1,
    explicacao:
      "Na eletrização por contato entre corpos idênticos, a carga total se divide igualmente: (8 + 0)/2 = 4 μC para cada. A carga total do sistema se conserva. Se os corpos tivessem tamanhos diferentes, a divisão seria proporcional às suas capacidades.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Na eletrização por indução, um corpo condutor neutro é aproximado de um corpo eletrizado, sem contato. Nesse processo, o corpo neutro:",
    opcoes: [
      "adquire carga de mesmo sinal do indutor, após aterramento.",
      "adquire carga de sinal oposto ao do indutor, após aterramento.",
      "permanece necessariamente neutro.",
      "perde todos os seus elétrons livres.",
      "torna-se isolante.",
    ],
    correta: 1,
    explicacao:
      "A aproximação separa as cargas do condutor; o aterramento permite a saída ou entrada de elétrons, e ao desfazer o contato com a terra o corpo fica com carga oposta à do indutor. Sem aterramento, ele apenas se polariza e volta a ser neutro ao afastar o indutor.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "A lei de Coulomb estabelece que a força entre duas cargas puntiformes é:",
    opcoes: [
      "diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância.",
      "inversamente proporcional ao produto das cargas e diretamente proporcional à distância.",
      "independente da distância entre elas.",
      "proporcional à soma das cargas.",
      "proporcional ao cubo da distância.",
    ],
    correta: 0,
    explicacao:
      "A expressão é F = k·|q₁·q₂|/d². Dobrar a distância reduz a força a um quarto, comportamento típico de leis do inverso do quadrado — a mesma forma da gravitação universal. A constante k depende do meio entre as cargas.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Duas cargas puntiformes se repelem com força F. Ao dobrar a distância entre elas, mantendo as cargas, a nova força passa a ser:",
    opcoes: [
      "2F",
      "F/2",
      "F/4",
      "4F",
      "F",
    ],
    correta: 2,
    explicacao:
      "Como a força é inversamente proporcional ao quadrado da distância, dobrar a separação divide a força por 4. Triplicar a distância a reduziria a um nono. Essa dependência quadrática faz a interação cair rapidamente com o afastamento.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "O campo elétrico em um ponto do espaço é definido como a razão entre:",
    opcoes: [
      "a força elétrica e a carga de prova colocada nesse ponto.",
      "a carga de prova e a força elétrica sobre ela.",
      "o potencial elétrico e a distância percorrida.",
      "o trabalho realizado e a carga geradora.",
      "a energia potencial e o campo magnético.",
    ],
    correta: 0,
    explicacao:
      "O campo é E = F/q, medido em newtons por coulomb. Ele descreve uma propriedade do espaço criada pela carga geradora, existindo independentemente da presença de uma carga de prova. Seu valor não depende da carga usada para medi-lo.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "As linhas de força de um campo elétrico gerado por uma carga positiva isolada:",
    opcoes: [
      "apontam para a carga, convergindo nela.",
      "afastam-se da carga, divergindo radialmente.",
      "formam circunferências fechadas em torno da carga.",
      "são paralelas entre si em todo o espaço.",
      "não existem em cargas isoladas.",
    ],
    correta: 1,
    explicacao:
      "Por convenção, as linhas saem das cargas positivas e chegam às negativas. Elas indicam a direção da força que atuaria sobre uma carga de prova positiva. A densidade das linhas representa a intensidade do campo.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Uma carga de 2 × 10⁻⁶ C é colocada em um ponto onde o campo elétrico vale 5 × 10⁵ N/C. A força elétrica sobre essa carga é de:",
    opcoes: [
      "0,4 N",
      "1 N",
      "2,5 N",
      "10 N",
      "100 N",
    ],
    correta: 1,
    explicacao:
      "Aplicando F = q·E = 2 × 10⁻⁶ · 5 × 10⁵ = 1 N. A direção da força coincide com a do campo para cargas positivas e é oposta para cargas negativas. O campo existe independentemente da carga de prova ali colocada.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Materiais condutores diferenciam-se dos isolantes porque, nos condutores:",
    opcoes: [
      "não existem cargas elétricas.",
      "há elétrons livres que se movimentam com facilidade.",
      "os prótons se deslocam pela estrutura.",
      "não é possível haver eletrização.",
      "as cargas ficam sempre no interior do material.",
    ],
    correta: 1,
    explicacao:
      "Metais possuem elétrons de valência fracamente ligados, que se movem por toda a estrutura. Em isolantes, os elétrons permanecem presos aos átomos, e a carga fica localizada onde foi depositada. Prótons nunca se deslocam em sólidos.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Em um condutor eletrizado em equilíbrio eletrostático, as cargas em excesso distribuem-se:",
    opcoes: [
      "uniformemente por todo o volume interno.",
      "exclusivamente na superfície externa.",
      "concentradas no centro geométrico.",
      "apenas na região mais plana.",
      "de forma aleatória e variável no tempo.",
    ],
    correta: 1,
    explicacao:
      "A repulsão mútua leva as cargas ao máximo afastamento possível, o que as concentra na superfície externa. O campo elétrico no interior de um condutor em equilíbrio é nulo. É esse resultado que fundamenta a blindagem eletrostática.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Um automóvel oferece proteção a seus ocupantes durante uma tempestade com raios porque sua carroceria metálica funciona como:",
    opcoes: [
      "um isolante perfeito.",
      "uma gaiola de Faraday, com campo nulo em seu interior.",
      "um gerador de campo elétrico interno.",
      "um capacitor carregado.",
      "uma fonte de corrente contínua.",
    ],
    correta: 1,
    explicacao:
      "As cargas se distribuem pela superfície externa e anulam o campo no interior, protegendo quem está dentro. Não são os pneus de borracha que garantem a proteção, ao contrário do que se costuma dizer. O mesmo princípio protege equipamentos eletrônicos sensíveis.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "O chamado poder das pontas explica por que para-raios têm extremidade pontiaguda. Esse efeito ocorre porque, em regiões pontiagudas de um condutor:",
    opcoes: [
      "a densidade de carga e o campo elétrico são maiores.",
      "a densidade de carga é menor que no restante.",
      "o campo elétrico se anula completamente.",
      "as cargas se deslocam para o interior.",
      "o material se torna isolante.",
    ],
    correta: 0,
    explicacao:
      "A curvatura acentuada concentra cargas e intensifica o campo ao redor, facilitando a ionização do ar e a formação de um caminho preferencial para a descarga. É por isso que o para-raios atrai o raio e o conduz com segurança ao solo.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Duas cargas de 3 × 10⁻⁶ C e 4 × 10⁻⁶ C estão separadas por 30 cm no vácuo. Adotando k = 9 × 10⁹ N·m²/C², a força entre elas é de aproximadamente:",
    opcoes: [
      "0,12 N",
      "1,2 N",
      "12 N",
      "120 N",
      "0,012 N",
    ],
    correta: 1,
    explicacao:
      "Aplicando F = 9 × 10⁹ · (3 × 10⁻⁶ · 4 × 10⁻⁶)/(0,3)² = 9 × 10⁹ · 12 × 10⁻¹²/0,09 = 1,2 N. Converter a distância para metros antes de elevar ao quadrado é o passo mais sujeito a erro.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "A unidade de carga elétrica no Sistema Internacional é o coulomb. A carga elementar, correspondente ao módulo da carga do elétron, vale aproximadamente:",
    opcoes: [
      "1,6 × 10⁻¹⁹ C",
      "1,6 × 10⁻⁶ C",
      "9 × 10⁹ C",
      "6 × 10²³ C",
      "1 C",
    ],
    correta: 0,
    explicacao:
      "Todas as cargas observadas são múltiplos inteiros desse valor, o que caracteriza a quantização da carga elétrica. Um coulomb corresponde a cerca de 6,25 × 10¹⁸ elétrons. Prótons têm a mesma carga em módulo, com sinal positivo.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Um corpo possui carga de −4,8 × 10⁻¹⁹ C. O número de elétrons em excesso nesse corpo é de:",
    opcoes: [
      "1",
      "2",
      "3",
      "4",
      "5",
    ],
    correta: 2,
    explicacao:
      "Dividindo pela carga elementar: 4,8 × 10⁻¹⁹ / 1,6 × 10⁻¹⁹ = 3 elétrons. A quantização impõe que o resultado seja sempre um número inteiro. Sinal negativo indica excesso de elétrons; positivo, falta deles.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "O potencial elétrico em um ponto do campo criado por uma carga puntiforme:",
    opcoes: [
      "é uma grandeza escalar, medida em volts.",
      "é uma grandeza vetorial, com direção e sentido.",
      "tem sempre valor positivo.",
      "independe da distância à carga geradora.",
      "é medido em newtons por coulomb.",
    ],
    correta: 0,
    explicacao:
      "O potencial é escalar e sua unidade é o volt, equivalente a joule por coulomb. Cargas positivas geram potenciais positivos e negativas, potenciais negativos. O campo elétrico, por sua vez, é vetorial e medido em N/C ou V/m.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "O trabalho realizado pela força elétrica para deslocar uma carga de 5 × 10⁻⁶ C entre dois pontos com diferença de potencial de 200 V é de:",
    opcoes: [
      "1 × 10⁻³ J",
      "4 × 10⁻⁸ J",
      "2 × 10⁻⁴ J",
      "40 J",
      "1 000 J",
    ],
    correta: 0,
    explicacao:
      "Aplicando W = q·U = 5 × 10⁻⁶ · 200 = 1 × 10⁻³ J. O trabalho da força elétrica não depende do caminho percorrido, apenas dos potenciais inicial e final — a força elétrica é conservativa.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Superfícies equipotenciais são regiões do espaço em que o potencial elétrico é constante. Em relação às linhas de campo, essas superfícies são sempre:",
    opcoes: [
      "paralelas",
      "coincidentes",
      "perpendiculares",
      "inclinadas a 45°",
      "inexistentes",
    ],
    correta: 2,
    explicacao:
      "Se houvesse componente do campo ao longo da superfície, haveria trabalho e o potencial mudaria. Por isso o campo é sempre perpendicular às equipotenciais. Deslocar uma carga sobre uma equipotencial não exige trabalho da força elétrica.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Ao pentear os cabelos secos em dia de baixa umidade, eles ficam eriçados e o pente atrai pedacinhos de papel. Os fenômenos envolvidos são, respectivamente:",
    opcoes: [
      "eletrização por atrito e atração por indução no papel.",
      "eletrização por contato e repulsão magnética.",
      "indução magnética e polarização do ar.",
      "condução de corrente e efeito Joule.",
      "ionização do papel e reflexão de cargas.",
    ],
    correta: 0,
    explicacao:
      "O atrito transfere elétrons entre cabelo e pente, eletrizando ambos. Os fios com carga de mesmo sinal se repelem e se afastam. O papel, neutro, polariza-se na presença do pente carregado e é atraído — atração entre corpo eletrizado e corpo neutro.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Um corpo eletrizado atrai um corpo neutro. Esse fenômeno é explicado pela:",
    opcoes: [
      "transferência imediata de cargas entre eles.",
      "repulsão entre cargas de mesmo sinal.",
      "polarização das cargas no corpo neutro.",
      "ausência de campo elétrico na região.",
      "conversão de carga em massa.",
    ],
    correta: 2,
    explicacao:
      "O campo do corpo eletrizado reorganiza as cargas do corpo neutro, aproximando as de sinal oposto e afastando as de mesmo sinal. Como a atração das mais próximas supera a repulsão das mais distantes, o resultado é atração líquida.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "O princípio da conservação da carga elétrica estabelece que, em um sistema eletricamente isolado:",
    opcoes: [
      "a carga total permanece constante.",
      "a carga total sempre aumenta.",
      "a carga total sempre diminui.",
      "a carga pode ser criada a partir de energia térmica.",
      "a carga se transforma em massa.",
    ],
    correta: 0,
    explicacao:
      "Processos de eletrização apenas redistribuem cargas: o que um corpo ganha, outro perde. Antes e depois do atrito, a soma algébrica das cargas do sistema é a mesma. É um dos princípios de conservação mais robustos da física.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Duas cargas puntiformes idênticas de 2 μC estão separadas por 6 cm. Ao aproximá-las até 2 cm, a força de repulsão entre elas fica:",
    opcoes: [
      "três vezes maior.",
      "três vezes menor.",
      "nove vezes maior.",
      "nove vezes menor.",
      "inalterada.",
    ],
    correta: 2,
    explicacao:
      "A distância foi reduzida a um terço, e como a força varia com o inverso do quadrado, ela fica multiplicada por 9. Esse crescimento acelerado explica por que forças elétricas dominam em escala atômica, onde as distâncias são mínimas.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "O campo elétrico no interior de um condutor em equilíbrio eletrostático é:",
    opcoes: [
      "máximo",
      "igual ao da superfície",
      "nulo",
      "variável com o tempo",
      "sempre negativo",
    ],
    correta: 2,
    explicacao:
      "Se houvesse campo interno, os elétrons livres se moveriam e não haveria equilíbrio. A anulação do campo interno é consequência direta da mobilidade das cargas em condutores. É esse fato que sustenta a blindagem eletrostática.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "A diferença de potencial entre dois pontos de um campo elétrico é comumente chamada de:",
    opcoes: [
      "corrente elétrica",
      "resistência elétrica",
      "tensão elétrica",
      "potência elétrica",
      "capacitância",
    ],
    correta: 2,
    explicacao:
      "Tensão, ou voltagem, é a diferença de potencial e se mede em volts. Ela representa a energia por unidade de carga disponível para realizar trabalho. Corrente é o fluxo de cargas, e resistência é a oposição a esse fluxo.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Ao descer de um carro em dia seco, é comum levar um pequeno choque ao tocar a porta. Esse fenômeno ocorre porque:",
    opcoes: [
      "o carro gera corrente contínua permanentemente.",
      "o metal está sempre eletrizado positivamente.",
      "o corpo se eletrizou por atrito e descarrega ao tocar o metal.",
      "há indução magnética entre corpo e carroceria.",
      "o ar úmido conduz melhor a eletricidade.",
    ],
    correta: 2,
    explicacao:
      "O atrito com o banco eletriza o corpo, e o contato com o metal permite a descarga rápida. Em dias úmidos o fenômeno é raro, porque a água do ar facilita a dissipação gradual da carga. Tocar o metal antes de descer evita o desconforto.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Um eletroscópio de folhas é usado para detectar a presença de carga elétrica. Ao aproximar um corpo eletrizado de sua esfera, as folhas:",
    opcoes: [
      "permanecem imóveis.",
      "aproximam-se, por se atraírem mutuamente.",
      "derretem pelo calor gerado.",
      "afastam-se, por adquirirem cargas de mesmo sinal.",
      "mudam de cor.",
    ],
    correta: 3,
    explicacao:
      "A indução separa as cargas no aparelho, levando cargas de mesmo sinal às duas folhas, que passam a se repelir. O ângulo de abertura indica a intensidade da eletrização. Ao afastar o indutor sem aterramento, as folhas voltam a se fechar.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Uma carga puntiforme de 4 × 10⁻⁶ C gera campo elétrico em um ponto situado a 30 cm dela. Adotando k = 9 × 10⁹ N·m²/C², a intensidade do campo nesse ponto é de:",
    opcoes: [
      "1,2 × 10⁵ N/C",
      "3,6 × 10⁵ N/C",
      "1,2 × 10⁴ N/C",
      "4 × 10⁵ N/C",
      "9 × 10⁵ N/C",
    ],
    correta: 3,
    explicacao:
      "Aplicando E = k·q/d² = 9 × 10⁹ · 4 × 10⁻⁶ / 0,09 = 4 × 10⁵ N/C. O campo aponta para longe da carga, por ela ser positiva. Note que o campo não depende de haver ou não carga de prova naquele ponto.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Em um campo elétrico uniforme, as linhas de força são:",
    opcoes: [
      "radiais e divergentes.",
      "circulares e concêntricas.",
      "convergentes para um único ponto.",
      "paralelas, igualmente espaçadas e de mesmo sentido.",
      "inexistentes.",
    ],
    correta: 3,
    explicacao:
      "O campo uniforme tem mesma intensidade, direção e sentido em todos os pontos, o que se representa por linhas paralelas e equidistantes. Ele é bem aproximado na região entre as placas de um capacitor plano carregado.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Um capacitor é um dispositivo cuja função principal é:",
    opcoes: [
      "armazenar carga e energia elétrica.",
      "transformar corrente alternada em contínua.",
      "aumentar a resistência de um circuito.",
      "gerar campo magnético permanente.",
      "converter energia elétrica em luminosa.",
    ],
    correta: 0,
    explicacao:
      "O capacitor acumula cargas em placas separadas por um isolante, armazenando energia no campo elétrico entre elas. Ele é usado em flashes fotográficos, filtros de fonte e circuitos de temporização. Sua capacitância é medida em farads.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Ao aterrar um corpo eletrizado negativamente, observa-se que ele:",
    opcoes: [
      "recebe elétrons da Terra e fica mais negativo.",
      "torna-se positivo imediatamente.",
      "perde prótons para a Terra.",
      "cede elétrons para a Terra e tende à neutralidade.",
      "mantém sua carga inalterada.",
    ],
    correta: 3,
    explicacao:
      "A Terra funciona como reservatório praticamente infinito de cargas. O excesso de elétrons escoa até que o corpo atinja o potencial do solo. Se o corpo estivesse positivo, receberia elétrons da Terra — o fluxo se ajusta ao desequilíbrio.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "A constante eletrostática do vácuo, presente na lei de Coulomb, vale aproximadamente:",
    opcoes: [
      "9 × 10⁹ N·m²/C²",
      "1,6 × 10⁻¹⁹ N·m²/C²",
      "3 × 10⁸ N·m²/C²",
      "6,7 × 10⁻¹¹ N·m²/C²",
      "1 N·m²/C²",
    ],
    correta: 0,
    explicacao:
      "Esse valor elevado indica que a força elétrica é intensa mesmo entre cargas pequenas. O valor 6,7 × 10⁻¹¹ corresponde à constante da gravitação, muitíssimo menor — é por isso que a força elétrica domina em escala atômica.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Comparando a força elétrica e a força gravitacional entre um próton e um elétron em um átomo, verifica-se que a força elétrica é:",
    opcoes: [
      "muito menor que a gravitacional.",
      "aproximadamente igual à gravitacional.",
      "muitíssimo maior que a gravitacional.",
      "nula nessa escala.",
      "de sentido oposto ao esperado.",
    ],
    correta: 2,
    explicacao:
      "A razão entre as duas forças é da ordem de 10³⁹ em favor da elétrica. Por isso a gravidade é desprezada na descrição da estrutura atômica. Em escala astronômica a situação se inverte, porque corpos celestes são eletricamente neutros.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Uma carga negativa colocada em um campo elétrico sofre força cuja direção e sentido são:",
    opcoes: [
      "os mesmos do campo elétrico.",
      "perpendiculares ao campo.",
      "sempre nulos.",
      "opostos ao do campo elétrico.",
      "variáveis aleatoriamente.",
    ],
    correta: 3,
    explicacao:
      "Como F = q·E e a carga é negativa, o vetor força tem sentido contrário ao do campo. Para cargas positivas, força e campo apontam no mesmo sentido. Essa distinção é essencial ao analisar trajetórias de partículas carregadas.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Em um dia de tempestade, o para-raios protege uma edificação porque:",
    opcoes: [
      "impede completamente a formação de raios.",
      "repele as nuvens carregadas.",
      "isola eletricamente a construção do ar.",
      "oferece um caminho de baixa resistência para a corrente até o solo.",
      "converte o raio em energia luminosa.",
    ],
    correta: 3,
    explicacao:
      "O para-raios não evita a descarga: ele a capta e conduz com segurança até o aterramento, protegendo a estrutura. Sua ponta favorece a ionização do ar e torna aquele caminho preferencial. O aterramento adequado é parte essencial do sistema.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Um corpo eletricamente neutro caracteriza-se por possuir:",
    opcoes: [
      "ausência total de cargas elétricas.",
      "apenas nêutrons em sua composição.",
      "mais prótons que elétrons.",
      "quantidades iguais de prótons e elétrons.",
      "mais elétrons que prótons.",
    ],
    correta: 3,
    explicacao:
      "Neutralidade significa equilíbrio entre cargas positivas e negativas, não ausência delas. Um corpo neutro contém enormes quantidades de cargas dos dois sinais. Excesso de elétrons o torna negativo, e falta deles, positivo.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Uma partícula de carga positiva é abandonada em repouso em um campo elétrico uniforme. Sobre seu movimento, é correto afirmar que ela:",
    opcoes: [
      "permanece em repouso indefinidamente.",
      "acelera no sentido oposto ao do campo.",
      "descreve trajetória circular.",
      "acelera no sentido do campo elétrico.",
      "move-se com velocidade constante.",
    ],
    correta: 3,
    explicacao:
      "A força sobre carga positiva tem o sentido do campo, e sendo o campo uniforme, a aceleração é constante — movimento uniformemente variado. Uma carga negativa aceleraria no sentido oposto. É esse princípio que orienta feixes em tubos de raios catódicos.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "A eletrização por atrito entre dois materiais depende da chamada série triboelétrica, que indica:",
    opcoes: [
      "a resistência elétrica de cada material.",
      "a massa atômica dos elementos envolvidos.",
      "a temperatura de fusão dos materiais.",
      "a tendência relativa de cada material ceder ou receber elétrons.",
      "a velocidade da luz em cada meio.",
    ],
    correta: 3,
    explicacao:
      "A posição relativa dos materiais na série determina qual deles fica positivo e qual fica negativo após o atrito. Vidro tende a ceder elétrons, e materiais como o teflon, a recebê-los. A série é empírica e organiza observações experimentais.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Em ambientes muito úmidos, os fenômenos de eletrização estática são menos perceptíveis porque a água presente no ar:",
    opcoes: [
      "impede a formação de cargas elétricas.",
      "inverte o sinal das cargas nos corpos.",
      "aumenta a resistência elétrica do ar.",
      "facilita a dissipação gradual das cargas acumuladas.",
      "elimina os elétrons livres dos condutores.",
    ],
    correta: 3,
    explicacao:
      "A umidade forma uma fina camada condutora sobre as superfícies, permitindo que as cargas escoem continuamente. Em dias secos elas se acumulam e produzem choques e faíscas. É por isso que a estática incomoda mais no inverno seco.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "A unidade volt, usada para potencial elétrico e diferença de potencial, equivale a:",
    opcoes: [
      "newton por coulomb",
      "coulomb por segundo",
      "joule por segundo",
      "newton vezes metro",
      "joule por coulomb",
    ],
    correta: 4,
    explicacao:
      "O volt corresponde a um joule por coulomb: é a energia disponível por unidade de carga. Newton por coulomb é unidade de campo elétrico, coulomb por segundo é ampere e joule por segundo é watt. Volt por metro também expressa campo elétrico.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Duas cargas de mesmo módulo e sinais opostos formam um dipolo elétrico. No ponto médio do segmento que as une, o campo elétrico resultante:",
    opcoes: [
      "é nulo, pois os campos se cancelam.",
      "aponta da carga negativa para a positiva, somando-se.",
      "aponta da carga positiva para a negativa, somando-se.",
      "é perpendicular ao segmento.",
      "não pode ser determinado.",
    ],
    correta: 2,
    explicacao:
      "No ponto médio, os dois campos apontam no mesmo sentido — saindo da positiva e entrando na negativa — e portanto se somam. Se as cargas tivessem o mesmo sinal, os campos se cancelariam nesse ponto. A direção do campo é determinada pela convenção das linhas de força.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Ao afastar uma carga de prova positiva de uma carga geradora positiva, o potencial elétrico no ponto onde ela se encontra:",
    opcoes: [
      "aumenta",
      "permanece constante",
      "torna-se negativo imediatamente",
      "oscila periodicamente",
      "diminui",
    ],
    correta: 4,
    explicacao:
      "O potencial gerado por carga positiva é inversamente proporcional à distância, então afastar-se reduz seu valor, tendendo a zero no infinito. Para carga geradora negativa, o potencial é negativo e cresce em direção a zero conforme o afastamento.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Impressoras a laser e copiadoras utilizam princípios de eletrostática ao:",
    opcoes: [
      "aquecer o papel até a fusão do metal.",
      "gerar campo magnético que orienta a tinta.",
      "produzir corrente alternada no papel.",
      "ionizar completamente o ar da sala.",
      "atrair partículas de toner eletrizadas para regiões carregadas do cilindro.",
    ],
    correta: 4,
    explicacao:
      "O laser desenha a imagem descarregando seletivamente um cilindro eletrizado, e o toner, também eletrizado, adere apenas às regiões correspondentes. Depois o pó é transferido ao papel e fixado por calor. É eletrostática aplicada com precisão micrométrica.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Sobre a força elétrica entre duas cargas imersas em um meio material, comparada à força no vácuo, é correto afirmar que ela:",
    opcoes: [
      "aumenta, pois o meio intensifica o campo.",
      "permanece exatamente igual.",
      "torna-se nula em qualquer meio.",
      "muda de sinal.",
      "diminui, pois o meio reduz a interação.",
    ],
    correta: 4,
    explicacao:
      "Meios materiais têm permissividade maior que a do vácuo, o que reduz a constante eletrostática efetiva e enfraquece a força. A água, por exemplo, reduz a interação em cerca de 80 vezes — razão pela qual sais se dissociam facilmente nela.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Um bastão eletrizado é aproximado, sem tocar, de uma esfera condutora neutra isolada. Nessa esfera ocorre:",
    opcoes: [
      "eletrização por contato, com transferência de cargas.",
      "eletrização por atrito.",
      "perda total de elétrons.",
      "aumento de sua massa.",
      "indução eletrostática, com separação de cargas.",
    ],
    correta: 4,
    explicacao:
      "A esfera se polariza: cargas de sinal oposto ao do bastão acumulam-se na face próxima, e as de mesmo sinal, na oposta. A carga total permanece nula. Só haverá eletrização efetiva se houver aterramento durante a indução.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Dois corpos condutores esféricos de raios diferentes, ambos eletrizados, são ligados por um fio condutor. Após o equilíbrio, eles terão necessariamente o mesmo:",
    opcoes: [
      "valor de carga",
      "raio",
      "campo elétrico superficial",
      "número de elétrons",
      "potencial elétrico",
    ],
    correta: 4,
    explicacao:
      "A ligação permite fluxo de cargas até que os potenciais se igualem — é a condição de equilíbrio eletrostático. As cargas se distribuem proporcionalmente aos raios, de modo que a esfera maior fica com mais carga. O campo na superfície, porém, é maior na esfera menor.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Balões atritados em tecido grudam na parede porque:",
    opcoes: [
      "a parede está eletrizada com carga oposta.",
      "há formação de vácuo entre balão e parede.",
      "a gravidade se anula localmente.",
      "o ar empurra o balão contra a superfície.",
      "o balão eletrizado polariza a parede e é atraído por ela.",
    ],
    correta: 4,
    explicacao:
      "O balão eletrizado induz separação de cargas na parede, atraindo as de sinal oposto para a região próxima. A atração resultante supera o peso do balão. Com o tempo, as cargas escoam e o balão cai.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "A energia potencial elétrica de uma carga em um campo elétrico é análoga, na mecânica, à:",
    opcoes: [
      "energia cinética de um corpo em movimento.",
      "potência dissipada por atrito.",
      "quantidade de movimento de um corpo.",
      "força normal de uma superfície.",
      "energia potencial gravitacional de um corpo em altura.",
    ],
    correta: 4,
    explicacao:
      "Assim como levantar um corpo armazena energia gravitacional, deslocar uma carga contra o campo elétrico armazena energia potencial elétrica. Nos dois casos a força é conservativa e o trabalho independe do caminho percorrido.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Equipamentos eletrônicos sensíveis costumam ser transportados em embalagens metalizadas. A função dessas embalagens é:",
    opcoes: [
      "aumentar o campo elétrico interno.",
      "gerar corrente contínua de proteção.",
      "elevar a temperatura do equipamento.",
      "isolar termicamente o conteúdo.",
      "promover blindagem eletrostática, anulando o campo interno.",
    ],
    correta: 4,
    explicacao:
      "A camada condutora distribui as cargas externas por sua superfície e anula o campo no interior, protegendo componentes contra descargas estáticas. É a aplicação prática da gaiola de Faraday em escala reduzida.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Sobre a intensidade do campo elétrico gerado por uma carga puntiforme, é correto afirmar que ela:",
    opcoes: [
      "aumenta com o quadrado da distância.",
      "é constante em todo o espaço.",
      "depende apenas da carga de prova.",
      "cresce linearmente com a distância.",
      "diminui com o quadrado da distância.",
    ],
    correta: 4,
    explicacao:
      "A expressão E = k·q/d² mostra a dependência inversa com o quadrado da distância: dobrar a distância reduz o campo a um quarto. A carga de prova não influencia o valor do campo, apenas a força que ela sofre.",
  },
];
