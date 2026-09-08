/* Geometria analítica: reta e circunferência — parte A (25 questões).
   Distância entre pontos, ponto médio, coeficiente angular, equações da reta
   e equação reduzida da circunferência. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "No plano cartesiano, considere os pontos A de coordenadas (1, 2) e B de coordenadas (4, 6). A distância entre esses dois pontos é igual a:",
    opcoes: ["3", "5", "7", "√7", "25"],
    correta: 1,
    explicacao:
      "A distância vem de Pitágoras aplicado às diferenças de coordenadas: √[(4 − 1)² + (6 − 2)²] = √(9 + 16) = √25 = 5. A alternativa 25 para na soma dos quadrados sem extrair a raiz, e 7 soma as diferenças 3 e 4 diretamente, que seria o caminho por dentro da malha, não em linha reta.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Considere no plano cartesiano os pontos A de coordenadas (2, 4) e B de coordenadas (8, 10). As coordenadas do ponto médio do segmento AB são:",
    opcoes: ["(4, 6)", "(10, 14)", "(6, 5)", "(5, 7)", "(3, 3)"],
    correta: 3,
    explicacao:
      "O ponto médio tem cada coordenada igual à média das coordenadas correspondentes: x = (2 + 8)/2 = 5 e y = (4 + 10)/2 = 7. A alternativa (10, 14) soma as coordenadas sem dividir por 2. Uma conferência simples: o ponto médio precisa ficar entre os dois extremos em cada eixo.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta do plano cartesiano passa pelos pontos de coordenadas (1, 2) e (3, 8). O coeficiente angular dessa reta é igual a:",
    opcoes: ["3", "2", "1/3", "6", "−3"],
    correta: 0,
    explicacao:
      "O coeficiente angular é a razão entre a variação de y e a variação de x: (8 − 2)/(3 − 1) = 6/2 = 3. A alternativa 1/3 inverte a razão, e 6 para na diferença das ordenadas sem dividir. Coeficiente angular positivo indica reta crescente, o que confere com os pontos dados.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Uma reta tem equação reduzida y = 2x + 5. Nessa forma de escrever a equação, o coeficiente linear, que indica onde a reta corta o eixo das ordenadas, vale:",
    opcoes: ["2", "−5", "1", "0", "5"],
    correta: 4,
    explicacao:
      "Na equação reduzida y = mx + n, o termo m é o coeficiente angular e n é o coeficiente linear. Aqui n = 5, então a reta cruza o eixo y no ponto (0, 5). A alternativa 2 é o coeficiente angular, que informa a inclinação, não a interseção.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Duas retas distintas do plano cartesiano são paralelas entre si. A respeito de seus coeficientes angulares, é correto afirmar que eles:",
    opcoes: [
      "são sempre opostos entre si.",
      "têm produto igual a −1.",
      "são iguais entre si.",
      "somam necessariamente zero.",
      "são sempre inversos um do outro.",
    ],
    correta: 2,
    explicacao:
      "Retas paralelas têm a mesma inclinação em relação ao eixo x, e o coeficiente angular é exatamente a medida dessa inclinação: por isso ele coincide. A alternativa do produto igual a −1 descreve retas perpendiculares. Como as retas são distintas, o coeficiente linear precisa ser diferente, senão seriam a mesma reta.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta r tem coeficiente angular igual a 2. Uma reta s é perpendicular a r. O coeficiente angular da reta s é igual a:",
    opcoes: ["2", "−2", "1/2", "1", "−1/2"],
    correta: 4,
    explicacao:
      "Para retas perpendiculares, o produto dos coeficientes angulares vale −1, então o coeficiente de s é o oposto do inverso de 2, ou seja, −1/2. A alternativa 1/2 esquece o sinal negativo, e −2 troca apenas o sinal sem inverter. As duas operações — inverter e trocar o sinal — precisam ser feitas juntas.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Uma circunferência tem equação reduzida dada por (x − 3)² + (y + 2)² = 25. As coordenadas do centro dessa circunferência são:",
    opcoes: ["(3, −2)", "(−3, 2)", "(3, 2)", "(−3, −2)", "(25, 0)"],
    correta: 0,
    explicacao:
      "Na forma (x − a)² + (y − b)² = r², o centro é (a, b). Como o segundo termo aparece como (y + 2)², ele equivale a (y − (−2))², e a ordenada do centro é −2. A alternativa (−3, 2) troca os sinais dos dois termos — o erro mais comum é ler o sinal escrito em vez do sinal que a forma padrão exige.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Ainda considerando a circunferência de equação (x − 3)² + (y + 2)² = 25, a medida do raio dessa circunferência é:",
    opcoes: ["25", "10", "5", "√5", "2,5"],
    correta: 2,
    explicacao:
      "O número do lado direito da equação reduzida é o quadrado do raio, então r² = 25 e r = 5. A alternativa 25 confunde o raio com o seu quadrado, deslize que aparece em quase toda questão desse tipo. Já √5 seria o raio de uma circunferência com equação igualada a 5.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "No plano cartesiano, a distância entre a origem do sistema e o ponto de coordenadas (3, 4) é igual a:",
    opcoes: ["7", "5", "12", "25", "√7"],
    correta: 1,
    explicacao:
      "Como um dos pontos é a origem, a distância é simplesmente √(3² + 4²) = √25 = 5. A alternativa 7 soma as coordenadas, e 12 as multiplica. Esse é o terno pitagórico 3, 4, 5, que aparece com frequência em geometria analítica justamente por dar resultado inteiro.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Um ponto do plano cartesiano pertence ao eixo das abscissas, também chamado de eixo x. A condição que caracteriza esse ponto é:",
    opcoes: [
      "ter abscissa igual a zero.",
      "ter abscissa igual à ordenada.",
      "ter as duas coordenadas iguais a zero.",
      "ter ordenada igual a zero.",
      "ter ordenada igual ao dobro da abscissa.",
    ],
    correta: 3,
    explicacao:
      "O eixo x é a reta horizontal em que a altura é nula, então todo ponto sobre ele tem a forma (x, 0). A alternativa de abscissa nula descreve o eixo y, e a de ambas as coordenadas nulas descreve apenas a origem, que é o único ponto pertencente aos dois eixos ao mesmo tempo.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "No plano cartesiano, a equação y = 5 representa uma reta. A posição dessa reta em relação aos eixos coordenados é:",
    opcoes: [
      "vertical, paralela ao eixo das ordenadas.",
      "inclinada, formando 45° com o eixo x.",
      "horizontal, paralela ao eixo das abscissas.",
      "coincidente com o eixo das abscissas.",
      "passando pela origem do sistema.",
    ],
    correta: 2,
    explicacao:
      "A equação diz que a ordenada vale 5 para qualquer abscissa, o que descreve uma reta horizontal a 5 unidades acima do eixo x. Seu coeficiente angular é zero. A alternativa vertical corresponderia a uma equação do tipo x = k, em que a abscissa é fixa e a ordenada é livre.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta tem coeficiente angular igual a 2 e passa pelo ponto de coordenadas (0, 3). A equação reduzida dessa reta é:",
    opcoes: ["y = 3x + 2", "y = 2x − 3", "y = 2x", "y = −2x + 3", "y = 2x + 3"],
    correta: 4,
    explicacao:
      "Como o ponto dado está sobre o eixo y, sua ordenada é diretamente o coeficiente linear: n = 3. Com m = 2, a equação é y = 2x + 3. A alternativa y = 3x + 2 troca os papéis dos dois coeficientes, erro que se evita lembrando que o coeficiente angular é sempre o que multiplica x.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Deseja-se verificar se o ponto de coordenadas (2, 7) pertence à reta de equação y = 3x + 1. Substituindo as coordenadas do ponto na equação, conclui-se que ele:",
    opcoes: [
      "não pertence à reta, pois a igualdade não se verifica.",
      "pertence à reta apenas se a equação for reescrita.",
      "pertence ao eixo y, e não à reta.",
      "pertence à reta, pois satisfaz a equação.",
      "é o centro de uma circunferência dessa reta.",
    ],
    correta: 3,
    explicacao:
      "Substituindo x = 2: 3 · 2 + 1 = 7, que é exatamente a ordenada do ponto. Como a igualdade se verifica, o ponto está sobre a reta. Esse teste vale para qualquer curva do plano: basta substituir as coordenadas na equação e observar se a sentença resultante é verdadeira.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Uma circunferência é descrita pela equação x² + y² = 16. Sobre o centro e o raio dessa circunferência, é correto afirmar que:",
    opcoes: [
      "o centro está na origem e o raio mede 4.",
      "o centro está na origem e o raio mede 16.",
      "o centro é o ponto (16, 16) e o raio mede 1.",
      "o centro é o ponto (4, 4) e o raio mede 4.",
      "o centro está na origem e o raio mede 8.",
    ],
    correta: 0,
    explicacao:
      "Sem termos subtraídos de x e de y, o centro é (0, 0). O lado direito é o quadrado do raio: r² = 16, logo r = 4. A alternativa que diz raio 16 confunde novamente r com r². Essa é a forma mais simples de circunferência, e serve de referência para reconhecer as demais.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "dificil",
    enunciado:
      "Considere a circunferência de equação (x − 1)² + (y − 1)² = 9 e o ponto de coordenadas (0, 0). Comparando a distância do ponto ao centro com a medida do raio, conclui-se que o ponto está:",
    opcoes: [
      "sobre a circunferência, à distância exata do raio.",
      "no interior da circunferência.",
      "no exterior da circunferência.",
      "no centro da circunferência.",
      "sobre a reta tangente à circunferência.",
    ],
    correta: 1,
    explicacao:
      "O centro é (1, 1) e o raio é 3. A distância da origem ao centro é √(1 + 1) = √2 ≈ 1,41, valor menor que 3, então o ponto está dentro. A regra é direta: distância menor que o raio indica interior, igual indica sobre a curva e maior indica exterior.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "No plano cartesiano, considere os pontos de coordenadas (−1, 3) e (2, −1). A distância entre esses dois pontos é igual a:",
    opcoes: ["3", "4", "√7", "5", "7"],
    correta: 3,
    explicacao:
      "As diferenças são 2 − (−1) = 3 e −1 − 3 = −4, então a distância é √(9 + 16) = 5. A alternativa √7 somaria as diferenças antes de elevar ao quadrado. Como as diferenças aparecem ao quadrado, os sinais negativos não afetam o resultado — só as distâncias em cada eixo importam.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Determine as coordenadas do ponto médio do segmento cujas extremidades são os pontos de coordenadas (−2, 5) e (6, 1). Esse ponto médio é:",
    opcoes: ["(4, 6)", "(2, 3)", "(8, −4)", "(−4, 2)", "(3, 2)"],
    correta: 1,
    explicacao:
      "As médias são x = (−2 + 6)/2 = 2 e y = (5 + 1)/2 = 3, o que dá o ponto (2, 3). A alternativa (8, −4) usa a diferença das coordenadas em vez da média. Note que coordenadas negativas entram normalmente na soma, sem nenhum tratamento especial.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "No plano cartesiano, a equação x = 4 representa uma reta vertical. A respeito do coeficiente angular dessa reta, é correto afirmar que ele:",
    opcoes: [
      "é igual a 4.",
      "é igual a zero.",
      "é igual a 1.",
      "é igual a −4.",
      "não é definido, pois a reta é vertical.",
    ],
    correta: 4,
    explicacao:
      "O coeficiente angular é a razão entre a variação de y e a de x, e numa reta vertical a variação de x é zero: a divisão não existe. Por isso retas verticais não têm equação na forma reduzida y = mx + n. A alternativa 'igual a zero' descreve retas horizontais, em que y não varia.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Um triângulo tem vértices nos pontos de coordenadas (0, 0), (6, 0) e (0, 4). A área desse triângulo, em unidades de área, é igual a:",
    opcoes: ["24", "6", "12", "10", "48"],
    correta: 2,
    explicacao:
      "Dois lados estão sobre os eixos, então o triângulo é retângulo com catetos 6 e 4: a área é (6 · 4)/2 = 12. A alternativa 24 esquece de dividir por 2, resultado que corresponderia ao retângulo inteiro. Quando os vértices caem sobre os eixos, esse caminho é mais rápido que a fórmula do determinante.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "dificil",
    enunciado:
      "Para verificar se três pontos do plano cartesiano estão alinhados, é possível recorrer a um determinante formado com suas coordenadas. Os pontos estarão alinhados quando esse determinante for:",
    opcoes: [
      "igual a zero.",
      "igual a 1.",
      "positivo, qualquer que seja o valor.",
      "negativo, qualquer que seja o valor.",
      "igual à área do triângulo formado por eles.",
    ],
    correta: 0,
    explicacao:
      "Metade do módulo desse determinante é a área do triângulo com vértices nos três pontos. Se eles estão alinhados, não há triângulo e a área é nula, o que exige determinante zero. A última alternativa erra por um fator: o determinante é o dobro da área, não a área.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "A reta de equação y = −x + 4 intersecta o eixo das ordenadas em um único ponto. As coordenadas desse ponto de interseção são:",
    opcoes: ["(0, 4)", "(4, 0)", "(0, −4)", "(−4, 0)", "(1, 4)"],
    correta: 0,
    explicacao:
      "Sobre o eixo y a abscissa é zero; substituindo x = 0 na equação, obtém-se y = 4, logo o ponto é (0, 4). A alternativa (4, 0) é a interseção com o eixo x, e trocar as duas é o erro mais frequente. O coeficiente linear já entrega essa resposta diretamente.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Ainda em relação à reta de equação y = −x + 4, o ponto em que ela intersecta o eixo das abscissas tem coordenadas:",
    opcoes: ["(0, 4)", "(−4, 0)", "(4, 0)", "(0, −4)", "(2, 2)"],
    correta: 2,
    explicacao:
      "No eixo x a ordenada é zero, então 0 = −x + 4, o que dá x = 4 e o ponto (4, 0). A alternativa (−4, 0) esquece de trocar o sinal ao isolar x. Note que (2, 2) pertence à reta, mas não está sobre nenhum dos eixos.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "facil",
    enunciado:
      "Uma circunferência tem centro na origem do sistema cartesiano e raio igual a 3. A equação reduzida dessa circunferência é:",
    opcoes: [
      "x² + y² = 3",
      "x² + y² = 9",
      "(x − 3)² + y² = 9",
      "x² + y² = 6",
      "x² + y² = √3",
    ],
    correta: 1,
    explicacao:
      "Com centro na origem, a equação é x² + y² = r², e r² = 3² = 9. A alternativa x² + y² = 3 usa o raio no lugar do seu quadrado. Já a equação com (x − 3)² deslocaria o centro para o ponto (3, 0), o que contraria o enunciado.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Uma reta forma um ângulo de 45° com o sentido positivo do eixo das abscissas. Sabendo que o coeficiente angular é a tangente desse ângulo, o coeficiente angular dessa reta vale:",
    opcoes: ["0", "√3", "1/2", "1", "√2"],
    correta: 3,
    explicacao:
      "Como tg 45° = 1, o coeficiente angular vale 1: a reta sobe uma unidade em y para cada unidade em x. A alternativa √3 corresponderia a 60°, e 0 a uma reta horizontal. Ângulos maiores que 45° dão coeficiente maior que 1; menores, coeficiente entre 0 e 1.",
  },
  {
    materia: "matematica",
    tema: "Geometria analítica: reta e circunferência",
    dificuldade: "media",
    enunciado:
      "Considere as retas de equações y = 3x + 1 e y = 3x − 4. A respeito da posição relativa dessas duas retas no plano cartesiano, é correto afirmar que elas:",
    opcoes: [
      "são perpendiculares entre si.",
      "são coincidentes, representando a mesma reta.",
      "se cruzam em um único ponto do primeiro quadrante.",
      "se cruzam exatamente sobre o eixo y.",
      "são paralelas distintas e não têm ponto em comum.",
    ],
    correta: 4,
    explicacao:
      "Os coeficientes angulares são iguais a 3, o que garante o paralelismo, e os coeficientes lineares são diferentes, o que impede que sejam a mesma reta. Sem ponto em comum, o sistema formado por essas equações é impossível. Se os dois coeficientes coincidissem, as retas seriam coincidentes e o sistema teria infinitas soluções.",
  },
];
