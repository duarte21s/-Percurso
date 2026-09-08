/* Óptica geométrica: espelhos e lentes (50 questões).
   Reflexão, espelhos planos e esféricos, refração, lei de Snell, reflexão
   total, lentes, vergência e defeitos da visão.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "facil",
    enunciado:
      "A formação de sombras nítidas e o funcionamento da câmara escura são explicados por um princípio fundamental da óptica geométrica, que é o da:",
    opcoes: [
      "propagação retilínea da luz em meios homogêneos.",
      "reversibilidade dos raios luminosos.",
      "independência dos raios de luz.",
      "dispersão da luz branca.",
      "difração em bordas estreitas.",
    ],
    correta: 0,
    explicacao:
      "Em um meio homogêneo e transparente, a luz se propaga em linha reta, o que produz sombras de contornos definidos e a imagem invertida da câmara escura. Os demais princípios existem, mas não explicam esses fenômenos específicos.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "facil",
    enunciado:
      "Um raio de luz incide sobre um espelho plano formando 30° com a superfície refletora. O ângulo de reflexão, medido em relação à normal, vale:",
    opcoes: [
      "30°",
      "45°",
      "60°",
      "90°",
      "120°",
    ],
    correta: 2,
    explicacao:
      "Os ângulos da reflexão são sempre medidos em relação à normal, e não à superfície. Se o raio faz 30° com o espelho, faz 60° com a normal. Pela lei da reflexão, o ângulo refletido também é 60°.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "A imagem formada por um espelho plano apresenta as seguintes características:",
    opcoes: [
      "real, invertida e do mesmo tamanho do objeto.",
      "virtual, direita e do mesmo tamanho do objeto.",
      "real, direita e maior que o objeto.",
      "virtual, invertida e menor que o objeto.",
      "real, invertida e menor que o objeto.",
    ],
    correta: 1,
    explicacao:
      "O espelho plano forma imagem virtual, situada atrás dele, direita e de mesmo tamanho, a uma distância igual à do objeto. Ela apresenta ainda inversão lateral: a mão direita aparece como esquerda. Nenhum espelho plano produz imagem real.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma pessoa se afasta 1 m de um espelho plano. A distância entre ela e sua imagem:",
    opcoes: [
      "aumenta 1 m.",
      "aumenta 2 m.",
      "permanece a mesma.",
      "diminui 1 m.",
      "diminui 2 m.",
    ],
    correta: 1,
    explicacao:
      "A imagem também se afasta 1 m do espelho, do outro lado, então a separação total cresce 2 m. Essa simetria decorre de a imagem estar sempre à mesma distância do espelho que o objeto. O tamanho aparente diminui, mas o tamanho da imagem não muda.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Espelhos convexos são usados em saídas de garagem e em corredores de lojas porque produzem imagens:",
    opcoes: [
      "reais e ampliadas, facilitando a identificação.",
      "virtuais, direitas e reduzidas, com maior campo visual.",
      "reais e invertidas, com grande nitidez.",
      "virtuais e ampliadas, próximas do observador.",
      "sempre do mesmo tamanho do objeto.",
    ],
    correta: 1,
    explicacao:
      "O espelho convexo sempre forma imagem virtual, direita e menor, qualquer que seja a posição do objeto. A redução amplia o campo de visão abrangido, o que é exatamente o desejado em vigilância e segurança viária.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Um espelho côncavo com raio de curvatura de 40 cm tem distância focal igual a:",
    opcoes: [
      "10 cm",
      "20 cm",
      "40 cm",
      "80 cm",
      "5 cm",
    ],
    correta: 1,
    explicacao:
      "Em espelhos esféricos, a distância focal é metade do raio de curvatura: f = R/2 = 20 cm. O foco de um espelho côncavo é real e fica à frente do espelho; no convexo, é virtual e fica atrás.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Um objeto é colocado a 30 cm de um espelho côncavo de distância focal 10 cm. Pela equação de Gauss, a imagem se forma a:",
    opcoes: [
      "7,5 cm",
      "10 cm",
      "15 cm",
      "20 cm",
      "30 cm",
    ],
    correta: 2,
    explicacao:
      "Aplicando 1/f = 1/p + 1/p′: 1/10 = 1/30 + 1/p′, logo 1/p′ = 3/30 − 1/30 = 2/30 e p′ = 15 cm. Como p′ é positivo, a imagem é real e se forma à frente do espelho, entre o foco e o centro de curvatura.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Um objeto colocado entre o foco e o vértice de um espelho côncavo produz imagem:",
    opcoes: [
      "real, invertida e menor.",
      "real, invertida e maior.",
      "virtual, direita e maior.",
      "virtual, invertida e menor.",
      "real, direita e do mesmo tamanho.",
    ],
    correta: 2,
    explicacao:
      "Nessa região o espelho côncavo funciona como espelho de aumento, formando imagem virtual, direita e ampliada. É o princípio dos espelhos de maquiagem e de barbear. Fora dessa faixa, as imagens passam a ser reais e invertidas.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "A refração da luz ocorre quando ela passa de um meio para outro e, nessa passagem, altera:",
    opcoes: [
      "apenas sua cor.",
      "sua velocidade de propagação e, em geral, sua direção.",
      "somente sua intensidade luminosa.",
      "exclusivamente sua frequência.",
      "apenas o sentido de propagação.",
    ],
    correta: 1,
    explicacao:
      "Ao mudar de meio, a luz altera velocidade e comprimento de onda, mantendo a frequência. A mudança de direção ocorre sempre que a incidência não é perpendicular à superfície. É por isso que um lápis dentro de um copo parece quebrado.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "O índice de refração absoluto de um meio é definido como a razão entre:",
    opcoes: [
      "a velocidade da luz no meio e no vácuo.",
      "a velocidade da luz no vácuo e no meio.",
      "o comprimento de onda e a frequência.",
      "o ângulo de incidência e o de reflexão.",
      "a distância focal e o raio de curvatura.",
    ],
    correta: 1,
    explicacao:
      "O índice é n = c/v, com c a velocidade da luz no vácuo. Como a luz nunca é mais rápida que no vácuo, n é sempre maior ou igual a 1. A água tem índice próximo de 1,33 e o vidro comum, cerca de 1,5.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Ao passar do ar para a água, um raio de luz que incide obliquamente sobre a superfície:",
    opcoes: [
      "afasta-se da normal, pois o meio é mais refringente.",
      "aproxima-se da normal, pois o meio é mais refringente.",
      "mantém exatamente a mesma direção.",
      "sofre reflexão total obrigatoriamente.",
      "muda de cor ao atravessar a superfície.",
    ],
    correta: 1,
    explicacao:
      "Ao entrar em um meio de índice maior, a luz diminui de velocidade e se aproxima da normal. No sentido inverso, afasta-se dela. Essa é a essência da lei de Snell, que relaciona os senos dos ângulos aos índices dos meios.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "O fenômeno da reflexão total pode ocorrer quando a luz:",
    opcoes: [
      "passa de um meio menos refringente para outro mais refringente.",
      "passa de um meio mais refringente para outro menos refringente, com ângulo acima do limite.",
      "incide perpendicularmente à superfície de separação.",
      "atravessa dois meios de mesmo índice de refração.",
      "muda de frequência ao mudar de meio.",
    ],
    correta: 1,
    explicacao:
      "A reflexão total exige que a luz vá do meio mais refringente para o menos refringente e que o ângulo de incidência supere o ângulo-limite. É o princípio das fibras ópticas, que guiam a luz por longas distâncias sem perdas significativas.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "As fibras ópticas transmitem sinais luminosos ao longo de grandes distâncias graças ao fenômeno da:",
    opcoes: [
      "difração",
      "dispersão",
      "reflexão total",
      "polarização",
      "interferência",
    ],
    correta: 2,
    explicacao:
      "A luz é lançada no núcleo da fibra com ângulos superiores ao limite e reflete internamente sem escapar. Isso permite conduzir informação com perdas mínimas. O revestimento externo tem índice de refração menor que o do núcleo, o que garante a condição.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma lente convergente, também chamada de lente de bordas finas, tem a propriedade de:",
    opcoes: [
      "espalhar os raios paralelos que a atravessam.",
      "concentrar em um ponto os raios paralelos que a atravessam.",
      "refletir integralmente a luz incidente.",
      "absorver toda a radiação recebida.",
      "manter os raios exatamente paralelos.",
    ],
    correta: 1,
    explicacao:
      "A lente convergente faz os raios paralelos convergirem no foco, que é real. É por isso que uma lupa pode concentrar luz solar a ponto de queimar papel. Lentes divergentes, de bordas grossas, espalham os raios e têm foco virtual.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "A vergência de uma lente, medida em dioptrias, é definida como:",
    opcoes: [
      "o produto da distância focal pelo índice de refração.",
      "o inverso da distância focal medida em metros.",
      "a distância focal medida em centímetros.",
      "a razão entre altura da imagem e do objeto.",
      "o dobro do raio de curvatura da lente.",
    ],
    correta: 1,
    explicacao:
      "A vergência é V = 1/f, com f em metros. Uma lente de 0,5 m de distância focal tem 2 dioptrias. Lentes convergentes têm vergência positiva e divergentes, negativa — informação que aparece nas receitas oftalmológicas.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma lente tem distância focal de 25 cm. Sua vergência, em dioptrias, é de:",
    opcoes: [
      "0,25 di",
      "2,5 di",
      "4 di",
      "25 di",
      "40 di",
    ],
    correta: 2,
    explicacao:
      "Convertendo para metros, f = 0,25 m, e V = 1/0,25 = 4 dioptrias. O sinal positivo indica lente convergente. Esquecer a conversão de centímetros para metros é o erro mais comum nesse cálculo.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "A miopia é um defeito da visão em que a imagem se forma antes da retina. Sua correção é feita com lentes:",
    opcoes: [
      "divergentes",
      "convergentes",
      "cilíndricas",
      "bifocais obrigatoriamente",
      "planas",
    ],
    correta: 0,
    explicacao:
      "O olho míope é excessivamente convergente, e a lente divergente compensa isso, deslocando a imagem para a retina. A hipermetropia, situação inversa, exige lentes convergentes. O astigmatismo é corrigido com lentes cilíndricas.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "A hipermetropia caracteriza-se pela formação da imagem além da retina e é corrigida com lentes:",
    opcoes: [
      "convergentes",
      "divergentes",
      "cilíndricas",
      "polarizadas",
      "espelhadas",
    ],
    correta: 0,
    explicacao:
      "O olho hipermetrope converge menos que o necessário, e a lente convergente complementa essa convergência. A dificuldade típica é enxergar de perto. Com a idade, a presbiopia produz sintoma semelhante e também usa lentes convergentes.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Um objeto de 4 cm de altura é colocado a 60 cm de uma lente convergente de distância focal 20 cm. A imagem se forma a:",
    opcoes: [
      "15 cm",
      "20 cm",
      "30 cm",
      "40 cm",
      "60 cm",
    ],
    correta: 2,
    explicacao:
      "Aplicando 1/20 = 1/60 + 1/p′: 1/p′ = 3/60 − 1/60 = 2/60, logo p′ = 30 cm. A imagem é real, invertida e menor, formada do outro lado da lente. Objeto além do dobro da distância focal sempre produz imagem reduzida.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma lupa produz imagem ampliada de objetos pequenos. Para isso, o objeto deve ser posicionado:",
    opcoes: [
      "além do dobro da distância focal.",
      "exatamente no foco da lente.",
      "entre o foco e a lente.",
      "no centro de curvatura.",
      "atrás da lente.",
    ],
    correta: 2,
    explicacao:
      "Com o objeto entre o foco e a lente, a imagem é virtual, direita e ampliada. Colocado exatamente no foco, os raios saem paralelos e não há formação de imagem. Além do foco, a imagem passa a ser real e invertida.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma imagem é classificada como real quando:",
    opcoes: [
      "pode ser projetada em um anteparo, pois os raios se cruzam efetivamente.",
      "só pode ser vista olhando diretamente para o instrumento óptico.",
      "é sempre maior que o objeto.",
      "aparece atrás do espelho ou da lente.",
      "é sempre direita em relação ao objeto.",
    ],
    correta: 0,
    explicacao:
      "Na imagem real, os raios luminosos efetivamente se encontram, o que permite projetá-la em um anteparo — como no cinema. Na imagem virtual, apenas os prolongamentos dos raios se cruzam, e nada pode ser projetado.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "A decomposição da luz branca em várias cores ao atravessar um prisma é chamada de:",
    opcoes: [
      "dispersão luminosa",
      "reflexão total",
      "difração",
      "polarização",
      "reflexão difusa",
    ],
    correta: 0,
    explicacao:
      "Cada cor tem índice de refração ligeiramente diferente no vidro, o que faz os raios se separarem. O violeta se desvia mais e o vermelho, menos. É o mesmo fenômeno que forma o arco-íris nas gotas de chuva.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Ao observar um objeto submerso em uma piscina, ele parece estar menos profundo do que realmente está. Esse efeito decorre da:",
    opcoes: [
      "refração da luz ao passar da água para o ar.",
      "reflexão da luz na superfície da água.",
      "dispersão da luz branca na água.",
      "absorção da luz pelas moléculas de água.",
      "difração da luz nas bordas da piscina.",
    ],
    correta: 0,
    explicacao:
      "Ao sair da água, os raios se afastam da normal, e o observador prolonga essas direções, localizando o objeto acima da posição real. Por isso a profundidade aparente é menor que a real — cuidado que importa em mergulhos e pescarias.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Um objeto é colocado exatamente no centro de curvatura de um espelho côncavo. A imagem formada será:",
    opcoes: [
      "virtual, direita e maior.",
      "real, direita e menor, sobre o foco.",
      "virtual, invertida e menor.",
      "real, invertida e do mesmo tamanho, no próprio centro de curvatura.",
      "imprópria, formada no infinito.",
    ],
    correta: 3,
    explicacao:
      "No centro de curvatura, objeto e imagem coincidem em posição e tamanho, com a imagem invertida e real. É a única posição em que isso ocorre em um espelho côncavo. Colocado no foco, o objeto produziria imagem imprópria, no infinito.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "O aumento linear transversal de um sistema óptico é definido pela razão entre:",
    opcoes: [
      "a distância focal e o raio de curvatura.",
      "a distância do objeto e a distância da imagem.",
      "o índice de refração e a velocidade da luz.",
      "a altura da imagem e a altura do objeto.",
      "o ângulo de incidência e o de refração.",
    ],
    correta: 3,
    explicacao:
      "O aumento é A = i/o, e também vale −p′/p. Valor negativo indica imagem invertida, e módulo maior que 1 indica ampliação. Em um espelho plano, o aumento vale exatamente +1.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Um espelho retrovisor convexo traz a inscrição de que os objetos estão mais próximos do que aparentam. A razão física dessa advertência é que o espelho convexo:",
    opcoes: [
      "forma imagens reduzidas, o que sugere maior distância.",
      "forma imagens ampliadas, o que sugere menor distância.",
      "inverte a imagem verticalmente.",
      "elimina a reflexão especular.",
      "produz imagens reais projetadas na retina.",
    ],
    correta: 0,
    explicacao:
      "A redução da imagem faz o cérebro interpretar o objeto como mais distante, já que associamos tamanho aparente a distância. O ganho está no campo de visão mais amplo, que reduz os pontos cegos. Daí a necessidade do aviso.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Sobre a velocidade da luz em diferentes meios, é correto afirmar que ela é:",
    opcoes: [
      "máxima no vácuo e menor em meios materiais.",
      "máxima na água e menor no vácuo.",
      "igual em todos os meios transparentes.",
      "maior no vidro que no vácuo.",
      "independente do meio de propagação.",
    ],
    correta: 0,
    explicacao:
      "No vácuo a luz atinge cerca de 300 000 km/s, valor máximo possível. Em meios materiais ela se propaga mais devagar, o que define o índice de refração. É essa redução de velocidade que provoca o desvio na refração.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Uma lente divergente tem distância focal de 20 cm em módulo. Sua vergência é de:",
    opcoes: [
      "+5 di",
      "+20 di",
      "−20 di",
      "−5 di",
      "+0,2 di",
    ],
    correta: 3,
    explicacao:
      "A distância focal em metros é 0,20 m e, por convenção, negativa em lentes divergentes: f = −0,20 m. Assim V = 1/(−0,20) = −5 dioptrias. O sinal negativo em uma receita indica correção de miopia.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma superfície áspera e fosca, como uma parede pintada, reflete a luz de forma:",
    opcoes: [
      "especular, formando imagens nítidas.",
      "total, sem qualquer absorção.",
      "refrativa, desviando os raios para dentro.",
      "difusa, espalhando a luz em muitas direções.",
      "polarizada, em uma única direção.",
    ],
    correta: 3,
    explicacao:
      "Na reflexão difusa, as irregularidades da superfície espalham os raios em todas as direções, e não se forma imagem. É por isso que enxergamos objetos iluminados de qualquer ângulo. A reflexão especular, típica dos espelhos, preserva a organização dos raios.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Em uma câmara escura de orifício, a imagem projetada na parede oposta é:",
    opcoes: [
      "virtual e direita.",
      "real e direita.",
      "virtual e invertida.",
      "real e invertida.",
      "sempre do mesmo tamanho do objeto.",
    ],
    correta: 3,
    explicacao:
      "Os raios que partem do topo do objeto atingem a parte inferior da parede, e vice-versa, o que produz imagem invertida. Como pode ser projetada, ela é real. O tamanho depende da razão entre as distâncias do objeto e do anteparo ao orifício.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Um objeto colocado sobre o foco principal de uma lente convergente produz:",
    opcoes: [
      "imagem real e reduzida.",
      "imagem virtual e ampliada.",
      "raios emergentes paralelos, sem formação de imagem definida.",
      "imagem real do mesmo tamanho.",
      "imagem virtual e reduzida.",
    ],
    correta: 2,
    explicacao:
      "Os raios saem paralelos e só se encontrariam no infinito, o que caracteriza imagem imprópria. É o princípio dos faróis e projetores, que buscam feixes paralelos. Um pequeno deslocamento do objeto já restabelece a formação de imagem.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "O olho humano forma, sobre a retina, uma imagem que é:",
    opcoes: [
      "virtual, direita e ampliada.",
      "real, direita e ampliada.",
      "virtual, invertida e reduzida.",
      "real, invertida e reduzida.",
      "sempre do mesmo tamanho do objeto.",
    ],
    correta: 3,
    explicacao:
      "O cristalino funciona como lente convergente e projeta na retina uma imagem real, invertida e menor. O cérebro reinterpreta essa imagem, o que nos faz perceber o mundo na posição correta. A acomodação ajusta a distância focal para objetos próximos e distantes.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Um raio de luz passa do vidro, de índice 1,5, para o ar, de índice 1. Nessa passagem, é correto afirmar que o raio:",
    opcoes: [
      "aproxima-se da normal e diminui de velocidade.",
      "mantém a direção original.",
      "sofre necessariamente reflexão total.",
      "afasta-se da normal e aumenta de velocidade.",
      "muda de frequência e de cor.",
    ],
    correta: 3,
    explicacao:
      "Indo para um meio menos refringente, a luz acelera e se afasta da normal. A reflexão total só ocorreria se o ângulo de incidência superasse o ângulo-limite, o que depende do valor do ângulo, não apenas do sentido da passagem.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "O arco-íris resulta da combinação de fenômenos ópticos nas gotas de chuva. Os principais fenômenos envolvidos são:",
    opcoes: [
      "apenas reflexão em superfícies planas.",
      "somente difração da luz solar.",
      "exclusivamente polarização da luz.",
      "refração, dispersão e reflexão interna nas gotas.",
      "apenas absorção seletiva das cores.",
    ],
    correta: 3,
    explicacao:
      "A luz refrata ao entrar na gota, dispersa-se em cores por causa dos índices diferentes, reflete internamente e refrata de novo ao sair. O resultado é o espectro visível organizado em arco. O arco secundário, mais fraco, envolve duas reflexões internas.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma imagem virtual formada por um espelho ou lente caracteriza-se por:",
    opcoes: [
      "poder ser projetada em um anteparo.",
      "ser sempre invertida em relação ao objeto.",
      "formar-se sempre à frente do espelho.",
      "resultar do cruzamento dos prolongamentos dos raios.",
      "ser sempre menor que o objeto.",
    ],
    correta: 3,
    explicacao:
      "Na imagem virtual, os raios refletidos ou refratados divergem, e apenas seus prolongamentos se encontram — por isso nada aparece se colocarmos um anteparo ali. Ela é vista olhando-se através do instrumento, como acontece com espelhos planos e lupas.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Em espelhos esféricos, a relação entre a distância focal e o raio de curvatura é dada por:",
    opcoes: [
      "f = R",
      "f = 2R",
      "f = R/2",
      "f = R²",
      "f = R/4",
    ],
    correta: 2,
    explicacao:
      "O foco fica no ponto médio entre o vértice e o centro de curvatura, o que dá f = R/2. Essa relação vale para espelhos de pequena abertura, condição de nitidez conhecida como aproximação de Gauss. Fora dela, surge a aberração esférica.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Um projetor de cinema forma na tela uma imagem ampliada do filme. Para isso, o filme deve ser posicionado, em relação à lente:",
    opcoes: [
      "entre o foco e a lente.",
      "exatamente no foco.",
      "além do dobro da distância focal.",
      "entre o foco e o dobro da distância focal.",
      "atrás da lente, do lado da tela.",
    ],
    correta: 3,
    explicacao:
      "Nessa faixa, a lente convergente forma imagem real, invertida e ampliada, projetável na tela. É por isso que o filme é colocado de cabeça para baixo no projetor. Além do dobro da distância focal, a imagem seria reduzida.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Um objeto de 6 cm produz, através de uma lente, uma imagem de 2 cm. O módulo do aumento linear transversal é de:",
    opcoes: [
      "1/3",
      "1/2",
      "2",
      "3",
      "12",
    ],
    correta: 0,
    explicacao:
      "O aumento é a razão entre alturas: 2/6 = 1/3. Módulo menor que 1 indica imagem reduzida. Se a imagem for invertida, o sinal do aumento é negativo, mas o módulo permanece 1/3.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Ao mergulhar meio bastão reto na água e observá-lo de fora, ele parece quebrado na superfície. Esse efeito visual é causado pela:",
    opcoes: [
      "reflexão total na superfície da água.",
      "dispersão das cores do bastão.",
      "difração da luz nas bordas do bastão.",
      "polarização da luz refletida.",
      "refração da luz ao mudar de meio.",
    ],
    correta: 4,
    explicacao:
      "Os raios provenientes da parte submersa sofrem desvio ao sair da água, e o observador os interpreta como vindos de uma direção diferente. O bastão continua reto: o que muda é o caminho da luz. Trata-se de um dos exemplos clássicos de refração.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Uma pessoa com astigmatismo apresenta irregularidade na curvatura da córnea. A correção desse defeito é feita com lentes:",
    opcoes: [
      "esféricas convergentes",
      "esféricas divergentes",
      "cilíndricas",
      "polarizadas",
      "fotossensíveis",
    ],
    correta: 2,
    explicacao:
      "A lente cilíndrica compensa a diferença de curvatura entre os meridianos da córnea, corrigindo a visão distorcida. Miopia e hipermetropia usam lentes esféricas. Muitas receitas combinam os dois tipos, quando há mais de um defeito associado.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Duas lentes convergentes de 2 di e 3 di são justapostas. A vergência do sistema resultante é de:",
    opcoes: [
      "1 di",
      "2,5 di",
      "6 di",
      "0,5 di",
      "5 di",
    ],
    correta: 4,
    explicacao:
      "Em lentes justapostas, as vergências se somam: 2 + 3 = 5 dioptrias. A distância focal equivalente é 1/5 = 0,2 m. Se uma das lentes fosse divergente, entraria com sinal negativo na soma.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Sobre a formação de imagem em um espelho convexo, é correto afirmar que ela é sempre:",
    opcoes: [
      "real, invertida e ampliada.",
      "real, direita e reduzida.",
      "virtual, invertida e ampliada.",
      "do mesmo tamanho do objeto.",
      "virtual, direita e reduzida.",
    ],
    correta: 4,
    explicacao:
      "Independentemente da posição do objeto, o espelho convexo forma imagem virtual, direita e menor, situada entre o vértice e o foco. Essa previsibilidade é o que o torna útil em segurança. O espelho côncavo, ao contrário, varia conforme a posição do objeto.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Um objeto está a 10 cm de uma lente convergente de distância focal 15 cm. A imagem formada será:",
    opcoes: [
      "real, invertida e reduzida.",
      "real, invertida e ampliada.",
      "virtual, invertida e reduzida.",
      "imprópria, formada no infinito.",
      "virtual, direita e ampliada.",
    ],
    correta: 4,
    explicacao:
      "Como o objeto está entre o foco e a lente, o resultado é imagem virtual, direita e ampliada — a configuração da lupa. Aplicando Gauss, obtém-se p′ = −30 cm, e o sinal negativo confirma o caráter virtual da imagem.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "A lei de Snell-Descartes relaciona, na refração, os índices de refração dos meios e:",
    opcoes: [
      "os cossenos dos ângulos de incidência e refração.",
      "as tangentes dos ângulos envolvidos.",
      "os próprios ângulos, sem funções trigonométricas.",
      "as distâncias percorridas em cada meio.",
      "os senos dos ângulos de incidência e refração.",
    ],
    correta: 4,
    explicacao:
      "A relação é n₁·sen θ₁ = n₂·sen θ₂. Como o seno cresce até 90°, ângulos maiores no meio menos refringente correspondem a ângulos menores no mais refringente. Quando o seno calculado ultrapassaria 1, ocorre reflexão total.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Um periscópio simples de submarino utiliza dois espelhos planos inclinados. O princípio óptico empregado nesse instrumento é a:",
    opcoes: [
      "refração",
      "dispersão",
      "difração",
      "polarização",
      "reflexão",
    ],
    correta: 4,
    explicacao:
      "Os espelhos, dispostos a 45°, desviam a luz duas vezes em 90°, levando a imagem da superfície até o observador. Não há mudança de meio nem desvio por refração. Periscópios mais sofisticados usam prismas de reflexão total, mas o princípio permanece o mesmo.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Sobre a frequência de uma onda luminosa ao passar de um meio para outro, é correto afirmar que ela:",
    opcoes: [
      "aumenta em meios mais refringentes.",
      "diminui em meios mais refringentes.",
      "torna-se nula na fronteira entre os meios.",
      "duplica ao entrar na água.",
      "permanece constante, alterando-se a velocidade e o comprimento de onda.",
    ],
    correta: 4,
    explicacao:
      "A frequência é determinada pela fonte e não muda na refração; o que se ajusta são velocidade e comprimento de onda. É por isso que a cor percebida não se altera ao mergulhar um objeto na água. Frequência constante é uma característica geral da refração.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Em um espelho plano, o aumento linear transversal da imagem em relação ao objeto vale:",
    opcoes: [
      "+1",
      "−1",
      "+2",
      "−2",
      "0",
    ],
    correta: 0,
    explicacao:
      "A imagem tem o mesmo tamanho do objeto e é direita, o que corresponde a aumento +1. O sinal positivo indica que não há inversão vertical. A chamada inversão lateral não afeta esse valor, por se referir à troca entre direita e esquerda.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "dificil",
    enunciado:
      "Uma pessoa de 1,70 m de altura deseja ver-se por inteiro em um espelho plano vertical. A altura mínima necessária para esse espelho é de:",
    opcoes: [
      "0,57 m",
      "1,13 m",
      "1,70 m",
      "3,40 m",
      "0,85 m",
    ],
    correta: 4,
    explicacao:
      "Por geometria da reflexão, basta que o espelho tenha metade da altura da pessoa: 0,85 m. Esse resultado independe da distância a que ela se encontra do espelho. O que muda com a distância é apenas a porção do ambiente visível ao fundo.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Ao aproximar um objeto de uma lupa, mantendo-o sempre entre o foco e a lente, a imagem observada:",
    opcoes: [
      "torna-se real e invertida.",
      "desaparece completamente.",
      "torna-se sempre menor que o objeto.",
      "muda de cor gradualmente.",
      "permanece virtual e direita, variando de tamanho.",
    ],
    correta: 4,
    explicacao:
      "Enquanto o objeto permanecer entre o foco e a lente, a imagem continua virtual, direita e ampliada, mas o fator de ampliação muda com a posição. Ao ultrapassar o foco, a imagem passa abruptamente a ser real e invertida.",
  },
  {
    materia: "fisica",
    tema: "Óptica geométrica: espelhos e lentes",
    dificuldade: "media",
    enunciado:
      "Um raio de luz incide perpendicularmente à superfície de separação entre dois meios transparentes. Nessa situação, o raio refratado:",
    opcoes: [
      "sofre desvio máximo em relação à normal.",
      "reflete totalmente de volta ao meio inicial.",
      "divide-se em várias cores.",
      "perde completamente sua intensidade.",
      "não sofre desvio de direção, apenas muda de velocidade.",
    ],
    correta: 4,
    explicacao:
      "Com ângulo de incidência nulo, a lei de Snell dá ângulo de refração também nulo: a luz segue em linha reta. A velocidade e o comprimento de onda mudam, mas a direção permanece. É por isso que um objeto visto de cima, na vertical, não parece deslocado lateralmente.",
  },
];
