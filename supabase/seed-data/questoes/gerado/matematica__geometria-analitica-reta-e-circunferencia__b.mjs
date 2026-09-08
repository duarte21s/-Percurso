/* Geometria analítica: reta e circunferência — parte B (25 questões).
   Equação geral da reta, interseções, distância de ponto a reta, equação
   geral da circunferência e posições relativas.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta é dada pela equação geral 2x + 3y − 6 = 0. Isolando y para obter a forma reduzida, verifica-se que o coeficiente angular dessa reta vale:",
    opcoes: ["2/3", "3/2", "−2/3", "−3/2", "6"],
    correta: 2,
    explicacao:
      "Isolando y: 3y = −2x + 6, ou seja, y = (−2/3)x + 2. O coeficiente angular é −2/3. A alternativa 2/3 esquece o sinal negativo que surge ao passar o termo em x para o outro lado. Na forma geral ax + by + c = 0, o coeficiente angular é sempre −a/b, o que dispensa o isolamento.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Duas retas do plano cartesiano têm equações y = x + 1 e y = −x + 5. As coordenadas do ponto de interseção entre essas duas retas são:",
    opcoes: ["(2, 3)", "(3, 2)", "(1, 5)", "(4, 5)", "(0, 1)"],
    correta: 0,
    explicacao:
      "Igualando as expressões: x + 1 = −x + 5, logo 2x = 4 e x = 2. Substituindo em qualquer das equações, y = 3, o que dá o ponto (2, 3). A alternativa (3, 2) inverte as coordenadas. Como as retas têm coeficientes angulares diferentes, o ponto de encontro é único.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "dificil",
    enunciado:
      "Um triângulo tem vértices nos pontos de coordenadas (0, 0), (6, 0) e (0, 3). As coordenadas do baricentro desse triângulo, ponto de encontro das medianas, são:",
    opcoes: ["(2, 3)", "(6, 3)", "(3, 2)", "(2, 1)", "(1, 2)"],
    correta: 3,
    explicacao:
      "O baricentro tem cada coordenada igual à média aritmética das coordenadas correspondentes dos três vértices: x = (0 + 6 + 0)/3 = 2 e y = (0 + 0 + 3)/3 = 1. A alternativa (3, 2) inverte as coordenadas ao calcular as médias. O baricentro sempre fica no interior do triângulo, o que descarta (6, 3).",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "dificil",
    enunciado:
      "Considere a reta de equação geral 3x + 4y − 10 = 0 e a origem do sistema cartesiano. A distância da origem a essa reta é igual a:",
    opcoes: ["10", "2", "5", "1", "2,5"],
    correta: 1,
    explicacao:
      "A distância de um ponto (x₀, y₀) à reta ax + by + c = 0 é |ax₀ + by₀ + c| dividido por √(a² + b²). Aqui: |−10|/√(9 + 16) = 10/5 = 2. A alternativa 10 para no numerador sem dividir, e 2,5 usaria denominador 4. O denominador depende só dos coeficientes de x e y, nunca do termo independente.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "A mediatriz de um segmento de reta é o lugar geométrico dos pontos que ficam à mesma distância das duas extremidades do segmento. Geometricamente, essa mediatriz é:",
    opcoes: [
      "a reta que contém o próprio segmento.",
      "a circunferência de diâmetro igual ao segmento.",
      "a reta paralela ao segmento que passa por seu ponto médio.",
      "a reta que liga o ponto médio à origem do sistema.",
      "a reta perpendicular ao segmento que passa por seu ponto médio.",
    ],
    correta: 4,
    explicacao:
      "Equidistar das duas extremidades obriga o ponto a estar sobre a perpendicular levantada no ponto médio. Uma paralela ao segmento não serviria, porque os pontos ficariam mais próximos de uma extremidade que da outra. A mediatriz é a ferramenta usada, por exemplo, para localizar o centro de uma circunferência a partir de duas cordas.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "dificil",
    enunciado:
      "Uma circunferência tem equação geral x² + y² − 6x − 8y = 0. Completando os quadrados para obter a forma reduzida, as coordenadas do centro dessa circunferência são:",
    opcoes: ["(−3, −4)", "(3, 4)", "(6, 8)", "(0, 0)", "(−6, −8)"],
    correta: 1,
    explicacao:
      "Completando os quadrados: (x² − 6x + 9) + (y² − 8y + 16) = 25, ou seja, (x − 3)² + (y − 4)² = 25, com centro (3, 4). A alternativa (−3, −4) mantém os sinais que aparecem na equação geral, sem perceber que a forma reduzida os inverte. A alternativa (6, 8) esquece de dividir os coeficientes por 2.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Ainda considerando a circunferência de equação geral x² + y² − 6x − 8y = 0, cuja forma reduzida é (x − 3)² + (y − 4)² = 25, a medida do raio é:",
    opcoes: ["25", "√5", "10", "2,5", "5"],
    correta: 4,
    explicacao:
      "O termo à direita da forma reduzida é r² = 25, logo r = 5. A alternativa 25 confunde o raio com o seu quadrado. Vale observar que essa circunferência passa pela origem, já que a distância de (3, 4) a (0, 0) é exatamente 5 — coerente com o termo independente nulo na equação geral.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Comparando a distância do centro de uma circunferência a uma reta com a medida do raio dessa circunferência, verifica-se que a distância é maior que o raio. Nessa situação, a reta é:",
    opcoes: [
      "externa à circunferência, sem pontos em comum.",
      "tangente à circunferência, com um ponto em comum.",
      "secante à circunferência, com dois pontos em comum.",
      "um diâmetro da circunferência.",
      "coincidente com a própria circunferência.",
    ],
    correta: 0,
    explicacao:
      "Se a reta está mais longe do centro do que a borda, ela não alcança a circunferência: nenhum ponto em comum. Quando a distância iguala o raio, a reta toca em um único ponto e é tangente; quando é menor, atravessa a curva e é secante, com dois pontos. Essa comparação resolve toda questão de posição relativa entre reta e circunferência.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Uma reta passa pela origem do sistema cartesiano e pelo ponto de coordenadas (2, 6). A equação reduzida dessa reta é:",
    opcoes: ["y = x + 3", "y = 2x", "y = 6x", "y = 3x", "y = x/3"],
    correta: 3,
    explicacao:
      "Passando pela origem, o coeficiente linear é zero. O coeficiente angular é 6/2 = 3, então a equação é y = 3x. A alternativa y = 6x usa a ordenada do ponto sem dividir pela abscissa. Toda reta que passa pela origem tem equação da forma y = mx, sem termo independente.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "No plano cartesiano, uma reta é paralela ao eixo das ordenadas. A forma que a equação dessa reta necessariamente assume é:",
    opcoes: [
      "y = k, com k constante.",
      "y = x + k, com k constante.",
      "x = k, com k constante.",
      "x + y = k, com k constante.",
      "x · y = k, com k constante.",
    ],
    correta: 2,
    explicacao:
      "Uma reta vertical mantém a abscissa fixa enquanto a ordenada varia livremente, o que se escreve como x = k. A alternativa y = k descreve retas horizontais, paralelas ao eixo x. Essas são as únicas retas sem coeficiente angular definido, e por isso não cabem na forma reduzida y = mx + n.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "No plano cartesiano, considere os pontos de coordenadas (2, 2) e (2, 7), que têm a mesma abscissa. A distância entre esses dois pontos é igual a:",
    opcoes: ["2", "7", "9", "√5", "5"],
    correta: 4,
    explicacao:
      "Com abscissas iguais, o segmento é vertical e a distância é apenas a diferença das ordenadas: 7 − 2 = 5. A fórmula geral confirma: √(0 + 25) = 5. A alternativa 9 soma as ordenadas em vez de subtrair. Quando uma das coordenadas coincide, a fórmula da distância se reduz a uma subtração simples.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Uma reta do plano cartesiano tem coeficiente angular negativo. A respeito do comportamento dessa reta, é correto afirmar que ela é:",
    opcoes: [
      "crescente, subindo da esquerda para a direita.",
      "horizontal, paralela ao eixo x.",
      "vertical, paralela ao eixo y.",
      "decrescente, descendo da esquerda para a direita.",
      "coincidente com a bissetriz dos quadrantes ímpares.",
    ],
    correta: 3,
    explicacao:
      "Coeficiente angular negativo significa que, à medida que x cresce, y diminui: a reta desce da esquerda para a direita. Coeficiente positivo indica reta crescente, e coeficiente zero indica reta horizontal. A bissetriz dos quadrantes ímpares é a reta y = x, cujo coeficiente angular vale 1.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "No plano cartesiano, o ponto simétrico do ponto de coordenadas (3, 5) em relação ao eixo das abscissas tem coordenadas:",
    opcoes: ["(−3, 5)", "(5, 3)", "(3, −5)", "(−3, −5)", "(−5, 3)"],
    correta: 2,
    explicacao:
      "A reflexão em relação ao eixo x mantém a abscissa e troca o sinal da ordenada, resultando em (3, −5). A alternativa (−3, 5) descreve a simetria em relação ao eixo y, e (−3, −5) a simetria em relação à origem. Identificar qual eixo serve de espelho é o passo decisivo.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "No plano cartesiano, a equação y = 4 descreve o conjunto de todos os pontos cuja ordenada vale 4. Essa equação representa uma reta:",
    opcoes: [
      "paralela ao eixo das abscissas, a 4 unidades dele.",
      "paralela ao eixo das ordenadas, a 4 unidades dele.",
      "que passa pela origem com inclinação 4.",
      "perpendicular ao eixo das abscissas.",
      "que coincide com a bissetriz dos quadrantes pares.",
    ],
    correta: 0,
    explicacao:
      "Se a ordenada é sempre 4 e a abscissa é livre, a reta é horizontal, situada 4 unidades acima do eixo x. Seu coeficiente angular é zero. Uma reta perpendicular ao eixo das abscissas seria vertical, e teria equação da forma x = k.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "No plano cartesiano, o ponto de coordenadas (5, 0) ocupa uma posição específica em relação aos eixos. Esse ponto está localizado:",
    opcoes: [
      "sobre o eixo das ordenadas.",
      "sobre o eixo das abscissas.",
      "no interior do primeiro quadrante.",
      "no interior do quarto quadrante.",
      "na origem do sistema.",
    ],
    correta: 1,
    explicacao:
      "Ordenada igual a zero coloca o ponto exatamente sobre o eixo x, a 5 unidades à direita da origem. Pontos com abscissa zero ficam sobre o eixo y. Um ponto pertence a um quadrante apenas quando nenhuma de suas coordenadas é nula, o que não é o caso aqui.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Um segmento de reta tem extremidades na origem do sistema cartesiano e no ponto de coordenadas (6, 8). O comprimento desse segmento é igual a:",
    opcoes: ["10", "14", "√14", "100", "48"],
    correta: 0,
    explicacao:
      "O comprimento é √(6² + 8²) = √(36 + 64) = √100 = 10. A alternativa 100 para na soma dos quadrados, e 14 soma as coordenadas. Trata-se do terno pitagórico 3, 4, 5 multiplicado por 2 — reconhecer esses ternos acelera bastante o cálculo.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta passa pelo ponto de coordenadas (1, 1) e tem coeficiente angular igual a −1. A equação reduzida dessa reta é:",
    opcoes: ["y = x + 2", "y = −x + 2", "y = −x", "y = x − 2", "y = −x − 2"],
    correta: 1,
    explicacao:
      "Usando y − y₀ = m(x − x₀): y − 1 = −1(x − 1), o que dá y = −x + 2. A alternativa y = −x esquece o termo independente, e o ponto (1, 1) não a satisfaria. A verificação é imediata: substituindo x = 1 em y = −x + 2, obtém-se y = 1.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma circunferência tem centro no ponto de coordenadas (2, −1) e raio igual a 3. A equação reduzida dessa circunferência é:",
    opcoes: [
      "(x + 2)² + (y − 1)² = 3",
      "(x − 2)² + (y − 1)² = 9",
      "(x + 2)² + (y + 1)² = 9",
      "x² + y² = 9",
      "(x − 2)² + (y + 1)² = 9",
    ],
    correta: 4,
    explicacao:
      "Na forma (x − a)² + (y − b)² = r², com a = 2 e b = −1, o segundo termo vira (y + 1)². O raio ao quadrado é 9. A alternativa com (y − 1)² troca o sinal da ordenada do centro, e a que termina em 3 usa o raio no lugar do seu quadrado.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Duas retas do plano cartesiano têm coeficientes angulares iguais a 3 e a −1/3, respectivamente. Sobre a posição relativa dessas retas, é correto afirmar que elas são:",
    opcoes: [
      "paralelas distintas.",
      "coincidentes.",
      "perpendiculares entre si.",
      "concorrentes formando 45°.",
      "ambas horizontais.",
    ],
    correta: 2,
    explicacao:
      "O produto dos coeficientes é 3 · (−1/3) = −1, condição exata para perpendicularidade. Paralelas exigiriam coeficientes iguais. Note que a condição envolve o inverso com sinal trocado: só inverter, ou só trocar o sinal, não caracteriza retas perpendiculares.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Um segmento de reta tem extremidades na origem do sistema cartesiano e no ponto de coordenadas (10, 6). As coordenadas do ponto médio desse segmento são:",
    opcoes: ["(10, 6)", "(3, 5)", "(6, 10)", "(5, 3)", "(2, 3)"],
    correta: 3,
    explicacao:
      "As médias são (0 + 10)/2 = 5 e (0 + 6)/2 = 3, resultando em (5, 3). A alternativa (3, 5) inverte as coordenadas. Quando uma das extremidades é a origem, o ponto médio é simplesmente a metade de cada coordenada da outra extremidade.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta é dada pela equação geral 2x − y + 3 = 0. Escrevendo essa equação na forma reduzida, obtém-se:",
    opcoes: ["y = −2x + 3", "y = 2x − 3", "y = x/2 + 3", "y = 2x + 3", "y = −2x − 3"],
    correta: 3,
    explicacao:
      "Isolando y: −y = −2x − 3, e multiplicando tudo por −1, y = 2x + 3. A alternativa y = 2x − 3 erra o sinal do termo independente ao passar para o outro lado. Conferir com um ponto ajuda: em x = 0, a equação geral dá −y + 3 = 0, ou seja, y = 3.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Uma circunferência tem equação x² + y² = 49 e está centrada na origem do sistema cartesiano. A medida do raio dessa circunferência é:",
    opcoes: ["49", "14", "7", "√7", "3,5"],
    correta: 2,
    explicacao:
      "Como r² = 49, o raio é 7. A alternativa 49 confunde o raio com o seu quadrado, e 14 corresponde ao diâmetro. Essa circunferência corta os eixos nos pontos (7, 0), (−7, 0), (0, 7) e (0, −7), o que serve de conferência visual.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Considere dois pontos do plano cartesiano que possuem exatamente a mesma abscissa, mas ordenadas diferentes. A distância entre esses dois pontos é igual:",
    opcoes: [
      "à soma das duas ordenadas.",
      "ao módulo da diferença entre as ordenadas.",
      "ao produto das duas ordenadas.",
      "à média entre as duas ordenadas.",
      "sempre a zero, por terem a mesma abscissa.",
    ],
    correta: 1,
    explicacao:
      "Na fórmula da distância, a diferença das abscissas é nula, e resta a raiz do quadrado da diferença das ordenadas — que é o módulo dessa diferença. O módulo garante resultado positivo qualquer que seja a ordem da subtração. Se as ordenadas também coincidissem, os pontos seriam o mesmo e a distância seria zero.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta é tangente a uma circunferência no plano cartesiano. O número de pontos que essa reta tem em comum com a circunferência é:",
    opcoes: ["nenhum", "dois", "infinitos", "três", "exatamente um"],
    correta: 4,
    explicacao:
      "Tangência significa contato em um único ponto, situação em que a distância do centro à reta é exatamente igual ao raio. Duas interseções caracterizam uma reta secante, e nenhuma interseção, uma reta externa. Uma reta nunca pode ter três pontos em comum com uma circunferência.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Considere os pontos de coordenadas (0, 0), (1, 2) e (2, 4) no plano cartesiano. Calculando os coeficientes angulares entre eles, conclui-se que esses três pontos:",
    opcoes: [
      "estão alinhados, pois o coeficiente angular entre eles é sempre 2.",
      "formam um triângulo retângulo de área 2.",
      "formam um triângulo equilátero.",
      "são os vértices de uma circunferência de raio 2.",
      "estão alinhados sobre uma reta vertical.",
    ],
    correta: 0,
    explicacao:
      "De (0, 0) a (1, 2) o coeficiente é 2; de (1, 2) a (2, 4), também 2. Coeficientes iguais entre pares consecutivos garantem alinhamento — todos pertencem à reta y = 2x. Como não formam triângulo, a área é nula, o que também apareceria como determinante zero.",
  },
];
