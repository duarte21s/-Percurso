/* Derivação implícita e taxas relacionadas (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__derivacao-implicita-e-taxas-relacionadas.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__derivacao-implicita-e-taxas-relacionadas.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "Derivando implicitamente a equação da circunferência x² + y² = 25, qual é o valor de dy/dx no ponto (3, 4)?",
    opcoes: [
      "3/4",
      "−3/4",
      "−4/3",
      "4/3",
      "−6",
    ],
    correta: 1,
    explicacao:
      "Derivando os dois lados em relação a x, com y = y(x): 2x + 2y · y' = 0, pois a derivada de y² exige a regra da cadeia. Isolando: y' = −x/y. No ponto (3, 4): y' = −3/4. Geometricamente, a tangente é perpendicular ao raio, que liga a origem ao ponto e tem inclinação 4/3; o produto das duas inclinações é −1.\n\n3/4 perde o sinal de −x/y. −4/3 inverte a fração, calculando −y/x. 4/3 é a inclinação do raio, e não a da tangente. E −6 deriva y² como se fosse y, esquecendo o fator 2y: 2x + y' = 0.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "A curva xy = 6 passa pelo ponto (2, 3). Qual é a inclinação da reta tangente nesse ponto?",
    opcoes: [
      "−2/3",
      "3/2",
      "−3",
      "−3/2",
      "0",
    ],
    correta: 3,
    explicacao:
      "Derivando implicitamente, a regra do produto dá y + x · y' = 0, e então y' = −y/x. No ponto (2, 3): y' = −3/2. Aqui também dá para isolar y = 6/x e derivar, y' = −6/x² = −6/4 = −3/2, o que confirma o resultado.\n\n−2/3 inverte a fração, calculando −x/y. 3/2 perde o sinal. −3 esquece o fator x na parcela x · y' e resolve y + y' = 0. E 0 vem de confundir a derivada da constante 6, que é zero, com a própria inclinação: o que se anula é a derivada do lado esquerdo inteiro, e não y'.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "Numa derivação implícita, y é uma função de x. Qual é a derivada de y³ em relação a x?",
    opcoes: [
      "3y²",
      "3y² · dy/dx",
      "(dy/dx)³",
      "3x²",
      "3y · dy/dx",
    ],
    correta: 1,
    explicacao:
      "Como y depende de x, y³ é uma composição: o cubo aplicado a y(x). A regra da cadeia deriva o cubo, 3y², e multiplica pela derivada de dentro, dy/dx. Esse fator dy/dx aparece em todo termo com y numa derivação implícita, e é ele que depois se isola.\n\n3y² deriva em relação a y, e não a x, e esquece o fator dy/dx. (dy/dx)³ eleva a derivada ao cubo, em vez de derivar o cubo. 3x² trata y como se fosse x. E 3y · dy/dx erra o expoente: o 3 desce, e o expoente passa a 2.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "O raio de um círculo cresce a 2 cm/s. Com que taxa cresce a área do círculo no instante em que o raio mede 5 cm?",
    opcoes: [
      "10π cm²/s",
      "4π cm²/s",
      "20π cm²/s",
      "25π cm²/s",
      "50π cm²/s",
    ],
    correta: 2,
    explicacao:
      "A área é A = πr², e r depende do tempo. Derivando em relação a t, pela regra da cadeia: dA/dt = 2πr · dr/dt. Com r = 5 e dr/dt = 2: dA/dt = 2π · 5 · 2 = 20π ≈ 62,8 cm²/s. A mesma taxa do raio produz um crescimento cada vez mais rápido da área, porque o fator 2πr aumenta.\n\n10π é 2πr, sem multiplicar pela taxa do raio. 4π esquece o fator r: 2π · 2. 25π é a própria área em r = 5, e não a sua taxa. E 50π multiplica a área pela taxa do raio.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "A aresta de um cubo aumenta a 0,5 cm/s. Qual é a taxa de variação do volume quando a aresta mede 4 cm?",
    opcoes: [
      "48 cm³/s",
      "32 cm³/s",
      "24 cm³/s",
      "8 cm³/s",
      "64 cm³/s",
    ],
    correta: 2,
    explicacao:
      "O volume é V = a³, com a dependendo do tempo. Pela regra da cadeia, dV/dt = 3a² · da/dt. Com a = 4 e da/dt = 0,5: dV/dt = 3 · 16 · 0,5 = 24 cm³/s. A unidade da resposta, cm³/s, é a do volume dividida pela do tempo.\n\n48 é 3a², sem multiplicar pela taxa da aresta. 32 multiplica o volume, 64, pela taxa 0,5. 8 esquece o fator 3 que desce do expoente: 16 · 0,5. E 64 é o próprio volume em a = 4, e não a sua taxa de variação.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "Para a parábola y² = 4x, qual é a expressão de dy/dx obtida por derivação implícita?",
    opcoes: [
      "4/y",
      "y/2",
      "4",
      "2y",
      "2/y",
    ],
    correta: 4,
    explicacao:
      "Derivando os dois lados em relação a x: 2y · y' = 4, porque a derivada de y² exige a regra da cadeia. Isolando: y' = 4/(2y) = 2/y. A expressão vale para os dois ramos da parábola, o de cima, com y > 0, e o de baixo, com y < 0, o que seria mais trabalhoso separando y = ±2√x.\n\n4/y esquece o fator 2 de 2y. y/2 inverte a fração. 4 é só a derivada do lado direito, sem dividir por 2y. E 2y é a derivada de y² em relação a y, e não dy/dx.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "Um ponto se move sobre a circunferência x² + y² = 1, com x e y funções do tempo t. Qual relação as taxas dx/dt e dy/dt sempre satisfazem?",
    opcoes: [
      "x · dx/dt + y · dy/dt = 0",
      "dx/dt + dy/dt = 0",
      "x · dy/dt + y · dx/dt = 0",
      "dx/dt · dy/dt = 1",
      "2x + 2y = 0",
    ],
    correta: 0,
    explicacao:
      "Derivando x² + y² = 1 em relação a t, com as duas coordenadas dependendo do tempo: 2x · dx/dt + 2y · dy/dt = 0, e, dividindo por 2, x · dx/dt + y · dy/dt = 0. Em termos de vetores, a velocidade é perpendicular ao raio, como se espera de um movimento sobre a circunferência.\n\ndx/dt + dy/dt = 0 esquece os fatores x e y da regra da cadeia. x · dy/dt + y · dx/dt = 0 troca as taxas, como na derivada do produto xy. dx/dt · dy/dt = 1 não sai de derivação nenhuma. E 2x + 2y = 0 deriva x² e y² como se fossem funções de si mesmas, sem as taxas.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "A curva x³ + y³ = 9 passa pelo ponto (1, 2). Qual é o valor de dy/dx nesse ponto?",
    opcoes: [
      "−1/2",
      "1/4",
      "−1/4",
      "−4",
      "−1/12",
    ],
    correta: 2,
    explicacao:
      "Derivando implicitamente: 3x² + 3y² · y' = 0, e então y' = −x²/y². No ponto (1, 2), que está na curva porque 1 + 8 = 9: y' = −1/4. Perto de (1, 2), portanto, a curva desce: ao aumentar x um pouco, y diminui cerca de um quarto desse aumento.\n\n−1/2 usa −x/y, como na circunferência, esquecendo os quadrados. 1/4 perde o sinal. −4 inverte a fração, calculando −y²/x². E −1/12 deriva x³ como x², esquecendo o fator 3: 1 + 12y' = 0.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "O lado de um quadrado diminui 2 cm/min. Qual é a taxa de variação da área no instante em que o lado mede 8 cm?",
    opcoes: [
      "−32 cm²/min",
      "−16 cm²/min",
      "32 cm²/min",
      "−4 cm²/min",
      "64 cm²/min",
    ],
    correta: 0,
    explicacao:
      "A área é A = ℓ², e o lado depende do tempo, com dℓ/dt = −2, negativo porque diminui. Pela regra da cadeia: dA/dt = 2ℓ · dℓ/dt = 2 · 8 · (−2) = −32 cm²/min. O sinal negativo diz que a área diminui, 32 cm² por minuto nesse instante.\n\n−16 esquece o fator 2 que desce do expoente. 32 ignora o sinal da taxa do lado e faz a área crescer. −4 esquece o fator ℓ: 2 · (−2). E 64 é a própria área, e não a sua taxa.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "Qual é a expressão de dy/dx para a curva x + y² = 10, obtida por derivação implícita?",
    opcoes: [
      "−2y",
      "1/(2y)",
      "−1/y",
      "−1/(2y)",
      "−1",
    ],
    correta: 3,
    explicacao:
      "Derivando os dois lados em relação a x: 1 + 2y · y' = 0, já que a derivada da constante 10 é zero. Isolando: y' = −1/(2y). Nos pontos com y > 0 a inclinação é negativa, e nos pontos com y < 0 é positiva: a curva é uma parábola deitada, aberta para a esquerda.\n\n−2y inverte a fração. 1/(2y) perde o sinal ao passar o 1 para o outro lado. −1/y esquece o fator 2 de 2y. E −1 deriva y² como se fosse y, esquecendo o fator 2y.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "Sabendo que x²y = 4, calcule dy/dx no ponto (1, 4) por derivação implícita. Qual é o resultado?",
    opcoes: [
      "−8",
      "−4",
      "8",
      "−1/8",
      "−1/2",
    ],
    correta: 0,
    explicacao:
      "A regra do produto no termo x²y dá 2x · y + x² · y' = 0, e então y' = −2xy/x² = −2y/x. No ponto (1, 4): y' = −8. Isolando y = 4/x², a derivada explícita −8/x³ também vale −8 em x = 1. A curva desce depressa ali, aproximando-se do eixo x à medida que x cresce.\n\n−4 esquece o fator 2 de 2x e usa −y/x. 8 perde o sinal. −1/8 inverte o resultado. E −1/2 troca os papéis de x e y, calculando −2x/y.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "facil",
    enunciado:
      "Um ponto se desloca sobre a reta y = 3x + 1, com a abscissa variando a dx/dt = 2 unidades por segundo. Qual é dy/dt?",
    opcoes: [
      "3",
      "2",
      "6",
      "7",
      "5",
    ],
    correta: 2,
    explicacao:
      "Derivando y = 3x + 1 em relação ao tempo: dy/dt = 3 · dx/dt, porque a constante 1 tem derivada zero. Com dx/dt = 2: dy/dt = 6 unidades por segundo. Numa reta, a razão entre as taxas é sempre a inclinação, aqui 3, qualquer que seja o ponto.\n\n3 é a inclinação dy/dx, sem multiplicar pela taxa de x. 2 é a própria taxa de x. 7 soma a constante 1 ao resultado, mas ela some na derivação. E 5 soma a inclinação e a taxa, quando elas se multiplicam.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Uma escada de 13 m está apoiada numa parede vertical. O pé da escada se afasta da parede a 0,6 m/s. Com que velocidade o topo desce quando o pé está a 5 m da parede?",
    opcoes: [
      "0,6 m/s",
      "1,44 m/s",
      "0,25 m/s",
      "0,23 m/s",
      "0,65 m/s",
    ],
    correta: 2,
    explicacao:
      "Com x a distância do pé à parede e y a altura do topo, x² + y² = 169. Derivando em relação ao tempo: 2x · dx/dt + 2y · dy/dt = 0. Quando x = 5, y = √(169 − 25) = 12, e então dy/dt = −x · (dx/dt)/y = −5 · 0,6/12 = −0,25 m/s. O sinal negativo indica que o topo desce, a 0,25 m/s.\n\n0,6 m/s supõe que o topo desce tão depressa quanto o pé se afasta. 1,44 m/s troca x e y na fórmula: 12 · 0,6/5. 0,23 m/s divide pelo comprimento da escada, 13, e não pela altura 12. E 0,65 m/s usa 13 no numerador: 13 · 0,6/12.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um balão esférico é enchido com ar a 100 cm³/s. Com que taxa o raio cresce no instante em que ele mede 5 cm?",
    opcoes: [
      "4/π cm/s",
      "5/π cm/s",
      "3/(5π) cm/s",
      "1 cm/s",
      "1/π cm/s",
    ],
    correta: 4,
    explicacao:
      "O volume da esfera é V = (4/3)πr³. Derivando em relação ao tempo: dV/dt = 4πr² · dr/dt. Com dV/dt = 100 e r = 5: 100 = 4π · 25 · dr/dt, e então dr/dt = 100/(100π) = 1/π ≈ 0,32 cm/s. O raio cresce cada vez mais devagar, porque o mesmo volume se espalha por uma superfície 4πr² maior.\n\n4/π esquece o fator 4 de 4πr². 5/π usa r no lugar de r²: 100/(4π · 5). 3/(5π) divide pela fórmula do volume, (4/3)πr³, em vez da sua derivada. E 1 cm/s esquece o fator π.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um tanque em forma de cone com o vértice para baixo tem 10 m de altura e 5 m de raio no topo. Entra água a 2 m³/min. Com que velocidade o nível sobe quando a água tem 4 m de profundidade?",
    opcoes: [
      "6/(25π) m/min",
      "1/(32π) m/min",
      "1/(6π) m/min",
      "3/(2π) m/min",
      "1/(2π) m/min",
    ],
    correta: 4,
    explicacao:
      "Por semelhança de triângulos, a superfície da água, a uma profundidade h, tem raio r = h/2, na mesma proporção 5/10 do tanque. O volume de água fica V = (1/3)π(h/2)² · h = πh³/12, e a derivada em relação ao tempo é dV/dt = (πh²/4) · dh/dt. Com dV/dt = 2 e h = 4: 2 = 4π · dh/dt, e dh/dt = 1/(2π) ≈ 0,16 m/min.\n\n6/(25π) trata o raio como fixo, igual aos 5 m do topo. 1/(32π) inverte a proporção e usa r = 2h. 1/(6π) esquece o 1/3 do volume do cone. E 3/(2π) esquece o fator 3 que desce de h³.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Uma pessoa de 1,8 m de altura se afasta de um poste de luz de 6 m, caminhando a 1,4 m/s. Com que velocidade cresce o comprimento da sua sombra?",
    opcoes: [
      "1,4 m/s",
      "2 m/s",
      "0,42 m/s",
      "0,6 m/s",
      "0,32 m/s",
    ],
    correta: 3,
    explicacao:
      "Seja x a distância da pessoa ao poste e s o comprimento da sombra. Os triângulos formados pelo poste e pela pessoa, com a ponta da sombra em comum, são semelhantes: s/1,8 = (x + s)/6. Daí 6s = 1,8x + 1,8s, ou 4,2s = 1,8x, e s = 3x/7. Derivando: ds/dt = (3/7) · 1,4 = 0,6 m/s, a mesma em qualquer instante.\n\n1,4 m/s é a velocidade da pessoa, e não a da sombra. 2 m/s é a velocidade da ponta da sombra, que soma as duas: 1,4 + 0,6. 0,42 m/s compara a sombra com a distância ao poste, s/1,8 = x/6, e esquece a própria sombra na base do triângulo maior. E 0,32 m/s soma as alturas, 6 + 1,8, onde deveria subtrair.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um carro está 6 km ao norte de um cruzamento, afastando-se dele a 40 km/h; outro está 8 km a leste, afastando-se a 30 km/h. Com que taxa a distância entre os carros aumenta nesse instante?",
    opcoes: [
      "48 km/h",
      "70 km/h",
      "50 km/h",
      "10 km/h",
      "480 km/h",
    ],
    correta: 0,
    explicacao:
      "Com y a posição do primeiro carro e x a do segundo, a distância D satisfaz D² = x² + y². Derivando em relação ao tempo: 2D · dD/dt = 2x · dx/dt + 2y · dy/dt. Com x = 8, y = 6, D = 10, dx/dt = 30 e dy/dt = 40: dD/dt = (8 · 30 + 6 · 40)/10 = 480/10 = 48 km/h.\n\n70 km/h soma as velocidades, como se os carros andassem na mesma reta, em sentidos opostos. 50 km/h é o módulo da velocidade relativa, √(30² + 40²), que só daria a taxa se os carros tivessem partido juntos do cruzamento. 10 km/h subtrai as velocidades. E 480 km/h esquece de dividir por D = 10.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "A curva x² + xy + y² = 7 passa pelo ponto (1, 2). Por derivação implícita, qual é a inclinação da tangente nesse ponto?",
    opcoes: [
      "−1",
      "−1/2",
      "4/5",
      "−5/4",
      "−4/5",
    ],
    correta: 4,
    explicacao:
      "Derivando termo a termo, com a regra do produto em xy: 2x + (y + x · y') + 2y · y' = 0. Agrupando: y'(x + 2y) = −(2x + y), e então y' = −(2x + y)/(x + 2y). No ponto (1, 2): y' = −(2 + 2)/(1 + 4) = −4/5. O ponto está na curva: 1 + 2 + 4 = 7.\n\n−1 deriva xy como se fosse só y, esquecendo a parcela x · y' da regra do produto. −1/2 ignora o termo xy e usa −x/y. 4/5 perde o sinal. E −5/4 inverte a fração.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Qual é a equação da reta tangente à elipse x² + 4y² = 8 no ponto (2, 1)?",
    opcoes: [
      "y = −x/2 + 2",
      "y = −2x + 5",
      "y = x/2",
      "y = −x + 3",
      "y = −x/2 + 1",
    ],
    correta: 0,
    explicacao:
      "Derivando implicitamente: 2x + 8y · y' = 0, e então y' = −x/(4y). No ponto (2, 1): y' = −2/4 = −1/2. A tangente passa por (2, 1) com essa inclinação: y − 1 = −(1/2)(x − 2), ou seja, y = −x/2 + 2. O ponto está na elipse: 4 + 4 = 8.\n\ny = −2x + 5 inverte a inclinação, usando −4y/x. y = x/2 perde o sinal. y = −x + 3 deriva 4y² como 4y · y', esquecendo o fator 2 do expoente. E y = −x/2 + 1 tem a inclinação certa, mas não passa por (2, 1).",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "A curva e^y + y = x define y como função de x. Qual é a expressão de dy/dx?",
    opcoes: [
      "1/e^y",
      "e^y + 1",
      "1/(e^y + 1)",
      "1 − e^y",
      "−1/(e^y + 1)",
    ],
    correta: 2,
    explicacao:
      "Derivando os dois lados em relação a x: e^y · y' + y' = 1, pois a derivada de e^y, pela regra da cadeia, é e^y · y'. Pondo y' em evidência: y'(e^y + 1) = 1, e y' = 1/(e^y + 1). Como e^y + 1 > 1, a derivada fica sempre entre 0 e 1: a função cresce, mas mais devagar que x.\n\n1/e^y esquece o y' que vem da parcela y. e^y + 1 inverte a fração. 1 − e^y isola y' de forma errada: de y' = 1 − e^y · y', troca o último y' por 1. E −1/(e^y + 1) erra o sinal ao passar os termos de lado.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Com −π/2 < y < π/2, a equação sen y = x define y = arcsen x. Derivando implicitamente, qual é dy/dx em função de x?",
    opcoes: [
      "1/√(1 − x²)",
      "1/cos x",
      "cos y",
      "−1/√(1 − x²)",
      "√(1 − x²)",
    ],
    correta: 0,
    explicacao:
      "Derivando sen y = x em relação a x: cos y · y' = 1, e então y' = 1/cos y. Para escrever em função de x, usa-se (cos y)² = 1 − (sen y)² = 1 − x², com cos y > 0 no intervalo dado: y' = 1/√(1 − x²). É assim que se obtém a derivada do arco seno.\n\n1/cos x troca y por x no cosseno. cos y inverte a fração: é dx/dy, e não dy/dx. −1/√(1 − x²) é a derivada do arco cosseno, e não a do arco seno. E √(1 − x²) é o próprio cos y, sem inverter.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "O volume de um cubo aumenta a 12 cm³/s. Com que velocidade cresce a aresta no instante em que ela mede 2 cm?",
    opcoes: [
      "3 cm/s",
      "4 cm/s",
      "2 cm/s",
      "12 cm/s",
      "1 cm/s",
    ],
    correta: 4,
    explicacao:
      "Com V = a³, a derivada em relação ao tempo é dV/dt = 3a² · da/dt. Com dV/dt = 12 e a = 2: 12 = 3 · 4 · da/dt, e da/dt = 1 cm/s. Quanto maior o cubo, mais devagar a aresta cresce para a mesma vazão, porque 3a² aumenta.\n\n3 cm/s esquece o fator 3: 12/4. 4 cm/s esquece o fator a²: 12/3. 2 cm/s usa a no lugar de a²: 12/(3 · 2). E 12 cm/s confunde a taxa do volume com a da aresta.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um avião voa na horizontal a 6 km de altitude, a 500 km/h, e já passou sobre uma estação de radar. Com que taxa a distância entre o avião e o radar aumenta quando ela é de 10 km?",
    opcoes: [
      "400 km/h",
      "500 km/h",
      "300 km/h",
      "625 km/h",
      "0 km/h",
    ],
    correta: 0,
    explicacao:
      "Com x a distância horizontal e D a distância ao radar, D² = x² + 36, pois a altitude é constante. Derivando: 2D · dD/dt = 2x · dx/dt. Quando D = 10, x = √(100 − 36) = 8, e dD/dt = 8 · 500/10 = 400 km/h. A distância cresce mais devagar que o avião, porque parte do movimento é perpendicular à linha de visada.\n\n500 km/h é a velocidade do avião, e não a da distância. 300 km/h usa a altitude no lugar da distância horizontal: 6 · 500/10. 625 km/h inverte a razão: 10 · 500/8. E 0 km/h supõe que, com a altitude constante, a distância também não muda.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Areia cai sobre o chão formando um cone cuja altura é sempre igual ao raio da base. O volume cresce 9π m³/min. Com que velocidade a altura aumenta quando ela é de 3 m?",
    opcoes: [
      "3 m/min",
      "1/3 m/min",
      "1 m/min",
      "9 m/min",
      "1/π m/min",
    ],
    correta: 2,
    explicacao:
      "Com r = h, o volume do cone é V = (1/3)πh² · h = πh³/3. Derivando em relação ao tempo: dV/dt = πh² · dh/dt. Com dV/dt = 9π e h = 3: 9π = 9π · dh/dt, e dh/dt = 1 m/min. Quanto mais alto o monte, mais devagar ele cresce, porque a mesma areia se espalha por uma base maior.\n\n3 m/min esquece o fator 3 que desce de h³, usando (π/3)h² · dh/dt. 1/3 m/min esquece o 1/3 do volume do cone. 9 m/min divide a vazão só por π. E 1/π m/min usa a vazão 9 no lugar de 9π.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Derivando implicitamente a curva x³ + y³ = 6xy, conhecida como fólio de Descartes, que expressão se obtém para dy/dx?",
    opcoes: [
      "(x² − 2y)/(y² − 2x)",
      "−x²/y²",
      "(2y − x²)/y²",
      "(2y − x²)/(y² − 2x)",
      "2y/(y² − 2x)",
    ],
    correta: 3,
    explicacao:
      "Derivando os dois lados, com a regra do produto à direita: 3x² + 3y² · y' = 6y + 6x · y'. Juntando os termos com y': y'(3y² − 6x) = 6y − 3x², e, dividindo por 3, y' = (2y − x²)/(y² − 2x). A expressão depende de x e de y, o que é comum quando não dá para isolar y.\n\n(x² − 2y)/(y² − 2x) erra o sinal ao passar os termos de lado. −x²/y² ignora o lado direito, como se 6xy fosse constante. (2y − x²)/y² esquece a parcela 6x · y' da regra do produto. E 2y/(y² − 2x) esquece a derivada de x³, 3x².",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Em quais pontos da curva x² − xy + y² = 3 a reta tangente é horizontal?",
    opcoes: [
      "(2, 1) e (−2, −1)",
      "Só (1, 2)",
      "(√3, 0) e (−√3, 0)",
      "(0, √3) e (0, −√3)",
      "(1, 2) e (−1, −2)",
    ],
    correta: 4,
    explicacao:
      "Derivando implicitamente: 2x − (y + x · y') + 2y · y' = 0, e então y' = (y − 2x)/(2y − x). A tangente é horizontal quando o numerador se anula, y = 2x, e o denominador não. Levando y = 2x à equação: x² − 2x² + 4x² = 3, ou 3x² = 3, e x = ±1. Os pontos são (1, 2) e (−1, −2).\n\n(2, 1) e (−2, −1) anulam o denominador: ali a tangente é vertical. Só (1, 2) esquece a solução negativa de x² = 1. (±√3, 0) são os pontos em que a curva cruza o eixo x, onde a inclinação vale 2. E (0, ±√3) são os cruzamentos com o eixo y, onde a inclinação vale 1/2.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um tanque cilíndrico com 2 m de raio da base está sendo esvaziado a 3 m³/min. Com que velocidade o nível da água baixa?",
    opcoes: [
      "3/(2π) m/min",
      "3/(4π) m/min",
      "3/4 m/min",
      "12π m/min",
      "3/(16π) m/min",
    ],
    correta: 1,
    explicacao:
      "O volume de água é V = πr²h = 4πh, com o raio fixo e só a altura h variando. Derivando em relação ao tempo: dV/dt = 4π · dh/dt. Com dV/dt = −3, porque o volume diminui: dh/dt = −3/(4π) ≈ −0,24 m/min. O nível baixa a uma taxa constante, porque a seção do cilindro é sempre a mesma.\n\n3/(2π) usa o raio no lugar do seu quadrado: 3/(π · 2). 3/4 esquece o fator π da área da base. 12π multiplica a vazão pela área em vez de dividir. E 3/(16π) usa o diâmetro, 4 m, como se fosse o raio.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um ponto se move sobre a hipérbole xy = 12. No instante em que x = 3, a abscissa cresce 2 unidades por segundo. Qual é dy/dt nesse instante?",
    opcoes: [
      "−3/2",
      "−8/3",
      "8/3",
      "−8",
      "−2/3",
    ],
    correta: 1,
    explicacao:
      "Derivando xy = 12 em relação ao tempo, pela regra do produto: dx/dt · y + x · dy/dt = 0. Com x = 3, y = 12/3 = 4 e dx/dt = 2: 2 · 4 + 3 · dy/dt = 0, e dy/dt = −8/3 ≈ −2,67. Enquanto x cresce, y diminui, para o produto continuar igual a 12.\n\n−3/2 troca os papéis de x e y: −x · (dx/dt)/y. 8/3 perde o sinal. −8 esquece de dividir por x. E −2/3 esquece o fator y = 4 na primeira parcela.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Uma escada de 10 m escorrega, com o pé se afastando da parede a 2 m/s. Com que taxa varia o ângulo θ entre a escada e o chão quando o pé está a 6 m da parede?",
    opcoes: [
      "1/4 rad/s",
      "−1/5 rad/s",
      "−1/3 rad/s",
      "−1/4 rad/s",
      "−2 rad/s",
    ],
    correta: 3,
    explicacao:
      "Com x a distância do pé à parede, cos θ = x/10. Derivando em relação ao tempo: −sen θ · dθ/dt = (dx/dt)/10. Quando x = 6, a altura do topo é 8 e sen θ = 8/10. Então dθ/dt = −(2/10)/(8/10) = −2/8 = −1/4 rad/s: o ângulo diminui, e a escada se deita em direção ao chão.\n\n1/4 rad/s perde o sinal. −1/5 rad/s esquece o fator sen θ ao derivar cos θ. −1/3 rad/s usa cos θ = 6/10 no lugar de sen θ. E −2 rad/s confunde a velocidade do pé, em m/s, com a taxa do ângulo.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Por derivação implícita, qual é a inclinação da curva y² = x³ no ponto (4, 8)?",
    opcoes: [
      "6",
      "48",
      "1/3",
      "3/2",
      "3",
    ],
    correta: 4,
    explicacao:
      "Derivando: 2y · y' = 3x², e y' = 3x²/(2y). No ponto (4, 8), que está na curva porque 64 = 64: y' = 3 · 16/16 = 3. No ramo de cima, y = x^(3/2), e a derivada explícita (3/2)x^(1/2) também vale 3 em x = 4.\n\n6 esquece o fator 2 de 2y: 48/8. 48 é só a derivada do lado direito, 3x², sem dividir por 2y. 1/3 inverte o resultado. E 3/2 é só o expoente que desce na forma explícita x^(3/2), sem o fator x^(1/2) = 2.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um holofote no chão ilumina uma parede a 20 m dele. Uma pessoa de 1,8 m caminha do holofote em direção à parede a 2 m/s. Com que velocidade a sua sombra na parede diminui quando ela está a 10 m da parede?",
    opcoes: [
      "3,6 m/s",
      "0,72 m/s",
      "0,36 m/s",
      "7,2 m/s",
      "0,18 m/s",
    ],
    correta: 1,
    explicacao:
      "Seja x a distância da pessoa ao holofote e h a altura da sombra na parede. O raio de luz que passa pela cabeça da pessoa forma triângulos semelhantes: h/20 = 1,8/x, e h = 36/x. Derivando: dh/dt = −(36/x²) · dx/dt. A 10 m da parede, x = 10: dh/dt = −(36/100) · 2 = −0,72 m/s. A sombra diminui a 0,72 m/s.\n\n3,6 m/s é a altura da sombra nesse instante, 36/10, e não a taxa. 0,36 m/s esquece a velocidade da pessoa, 2 m/s. 7,2 m/s divide por x em vez de x². E 0,18 m/s inverte a semelhança, usando h/1,8 = x/20.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Na hipérbole x² − y² = 1, qual é a expressão de dy/dx nos pontos em que y ≠ 0?",
    opcoes: [
      "−x/y",
      "y/x",
      "−y/x",
      "2x/y",
      "x/y",
    ],
    correta: 4,
    explicacao:
      "Derivando os dois lados em relação a x: 2x − 2y · y' = 0, já que a derivada de −y² é −2y · y'. Isolando: y' = 2x/(2y) = x/y. Longe da origem, x/y se aproxima de ±1, e a curva se aproxima das assíntotas y = ±x, como esperado.\n\n−x/y é a inclinação da circunferência x² + y² = 1: trata o termo −y² como se fosse +y². y/x inverte a fração. −y/x inverte e troca o sinal. E 2x/y deriva −y² como −y · y', esquecendo o fator 2 do expoente.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um balão sobe na vertical a 3 m/s, a partir de um ponto do chão a 40 m de um observador. Com que taxa cresce o ângulo de elevação, visto pelo observador, quando o balão está a 30 m de altura?",
    opcoes: [
      "0,048 rad/s",
      "0,075 rad/s",
      "0,06 rad/s",
      "0,1 rad/s",
      "0,64 rad/s",
    ],
    correta: 0,
    explicacao:
      "Com h a altura do balão, tg θ = h/40. Derivando em relação ao tempo: sec²θ · dθ/dt = (dh/dt)/40, ou dθ/dt = cos²θ · (dh/dt)/40. A 30 m de altura, a distância ao observador é 50 m e cos θ = 40/50 = 0,8. Então dθ/dt = 0,64 · 3/40 = 0,048 rad/s.\n\n0,075 rad/s esquece o fator cos²θ: 3/40. 0,06 rad/s usa cos θ no lugar de cos²θ. 0,1 rad/s divide a velocidade pela altura, 3/30. E 0,64 rad/s fica só com cos²θ, sem a velocidade e a distância.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "O perímetro de um quadrado cresce 8 cm/s. Com que taxa cresce a área do quadrado quando o lado mede 5 cm?",
    opcoes: [
      "80 cm²/s",
      "40 cm²/s",
      "20 cm²/s",
      "10 cm²/s",
      "25 cm²/s",
    ],
    correta: 2,
    explicacao:
      "Com lado ℓ, o perímetro é P = 4ℓ, e dP/dt = 4 · dℓ/dt = 8 dá dℓ/dt = 2 cm/s. A área é A = ℓ², e dA/dt = 2ℓ · dℓ/dt = 2 · 5 · 2 = 20 cm²/s. A taxa do perímetro precisa ser convertida na taxa do lado antes de entrar na conta da área.\n\n80 cm²/s usa a taxa do perímetro como se fosse a do lado: 2 · 5 · 8. 40 cm²/s divide o perímetro por 2 em vez de 4 e usa dℓ/dt = 4. 10 cm²/s é 2ℓ, sem a taxa do lado. E 25 cm²/s é a própria área.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Por derivação implícita, qual é dy/dx para a curva x · sen y = 1, nos pontos em que cos y ≠ 0?",
    opcoes: [
      "−tg y",
      "−tg y/x",
      "tg y/x",
      "−x · tg y",
      "0",
    ],
    correta: 1,
    explicacao:
      "Pela regra do produto: 1 · sen y + x · cos y · y' = 0, e então y' = −sen y/(x · cos y) = −tg y/x. Por exemplo, no ponto (2, π/6), que está na curva porque 2 · 1/2 = 1, a inclinação é −(√3/3)/2 = −√3/6.\n\n−tg y esquece de dividir por x. tg y/x perde o sinal. −x · tg y multiplica por x em vez de dividir. E 0 deriva x · sen y como x · cos y · y', perdendo a parcela sen y da regra do produto, e conclui que y' = 0.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um barco é puxado por uma corda presa a uma argola no cais, 6 m acima do barco. A corda é recolhida a 1 m/s. Com que velocidade o barco se aproxima do cais quando há 10 m de corda entre o barco e a argola?",
    opcoes: [
      "1 m/s",
      "0,8 m/s",
      "0,75 m/s",
      "1,25 m/s",
      "1,67 m/s",
    ],
    correta: 3,
    explicacao:
      "Com x a distância horizontal do barco ao cais e L o comprimento da corda, x² + 36 = L². Derivando em relação ao tempo: 2x · dx/dt = 2L · dL/dt. Com L = 10, x = √(100 − 36) = 8 e dL/dt = −1: dx/dt = 10 · (−1)/8 = −1,25 m/s. O barco se aproxima a 1,25 m/s, mais depressa do que a corda é recolhida.\n\n1 m/s supõe que o barco anda tanto quanto a corda. 0,8 m/s inverte a razão: 8/10. 0,75 m/s usa a altura no lugar do comprimento da corda: 6/8. E 1,67 m/s divide o comprimento da corda pela altura: 10/6.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Dois resistores em paralelo têm resistência equivalente R dada por 1/R = 1/R₁ + 1/R₂. Com R₁ = 60 Ω aumentando 0,4 Ω/s e R₂ = 30 Ω aumentando 0,1 Ω/s, qual é a taxa de variação de R?",
    opcoes: [
      "0,5 Ω/s",
      "0,25 Ω/s",
      "cerca de 0,00022 Ω/s",
      "cerca de −0,089 Ω/s",
      "cerca de 0,089 Ω/s",
    ],
    correta: 4,
    explicacao:
      "Nesse instante, 1/R = 1/60 + 1/30 = 3/60, e R = 20 Ω. Derivando a relação em relação ao tempo: −(1/R²) · dR/dt = −(1/R₁²) · dR₁/dt − (1/R₂²) · dR₂/dt. Então dR/dt = R² · (0,4/3600 + 0,1/900) = 400 · (2/9000) = 4/45 ≈ 0,089 Ω/s.\n\n0,5 Ω/s soma as taxas, como se os resistores estivessem em série. 0,25 Ω/s tira a média das taxas. Cerca de 0,00022 Ω/s esquece de multiplicar por R² = 400. E cerca de −0,089 Ω/s erra o sinal: os sinais negativos dos dois lados se cancelam, e R aumenta.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "Um ponto percorre a circunferência x² + y² = 100. Quando ele passa por (6, 8), a abscissa diminui a 4 unidades por segundo. Qual é dy/dt nesse instante?",
    opcoes: [
      "−3",
      "4",
      "16/3",
      "5",
      "3",
    ],
    correta: 4,
    explicacao:
      "Derivando x² + y² = 100 em relação ao tempo: 2x · dx/dt + 2y · dy/dt = 0, e dy/dt = −x · (dx/dt)/y. Com x = 6, y = 8 e dx/dt = −4: dy/dt = −6 · (−4)/8 = 3. O ponto sobe enquanto se desloca para a esquerda, como no sentido anti-horário no primeiro quadrante.\n\n−3 perde um dos dois sinais negativos. 4 supõe que as coordenadas variam com a mesma rapidez. 16/3 troca os papéis de x e y: 8 · 4/6. E 5 é a velocidade escalar do ponto, √(4² + 3²), e não a taxa de y.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "A curva √x + √y = 5 passa por (4, 9). Qual é a equação da reta tangente a ela nesse ponto?",
    opcoes: [
      "y = −2x/3 + 35/3",
      "y = −3x/2 + 15",
      "y = 3x/2 + 3",
      "y = −3x/2 + 9",
      "y = −9x/4 + 18",
    ],
    correta: 1,
    explicacao:
      "Derivando implicitamente: 1/(2√x) + y'/(2√y) = 0, e então y' = −√y/√x. No ponto (4, 9): y' = −3/2. A reta passa por (4, 9) com essa inclinação: y − 9 = −(3/2)(x − 4), ou y = −3x/2 + 15. O ponto está na curva: 2 + 3 = 5.\n\ny = −2x/3 + 35/3 inverte a inclinação, usando −√x/√y. y = 3x/2 + 3 perde o sinal. y = −3x/2 + 9 tem a inclinação certa, mas não passa por (4, 9). E y = −9x/4 + 18 usa −y/x, esquecendo as raízes.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "media",
    enunciado:
      "O comprimento de um retângulo cresce 2 cm/s, e a largura diminui 1 cm/s. Quando o comprimento é 10 cm e a largura é 6 cm, o que acontece com a área?",
    opcoes: [
      "Diminui, a 2 cm²/s",
      "Aumenta, a 12 cm²/s",
      "Diminui, a 10 cm²/s",
      "Aumenta, a 2 cm²/s",
      "Aumenta, a 1 cm²/s",
    ],
    correta: 3,
    explicacao:
      "A área é A = c · ℓ, com as duas medidas variando. Pela regra do produto: dA/dt = (dc/dt) · ℓ + c · (dℓ/dt) = 2 · 6 + 10 · (−1) = 12 − 10 = 2 cm²/s. A área aumenta, mas devagar: o ganho pelo comprimento quase compensa a perda pela largura.\n\nDiminui, a 2 cm²/s erra o sinal do resultado. Aumenta, a 12 cm²/s fica só com a parcela do comprimento. Diminui, a 10 cm²/s fica só com a parcela da largura. E aumenta, a 1 cm²/s soma as taxas das medidas, 2 − 1, como se a área variasse como elas.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Na circunferência x² + y² = 25, qual é o valor da derivada segunda d²y/dx² no ponto (3, 4)?",
    opcoes: [
      "−25/64",
      "−3/4",
      "−1/4",
      "25/64",
      "−9/64",
    ],
    correta: 0,
    explicacao:
      "A derivada primeira é y' = −x/y. Derivando de novo, pela regra do quociente e lembrando que y depende de x: y'' = −(y − x · y')/y². Substituindo y' = −x/y: y'' = −(y + x²/y)/y² = −(x² + y²)/y³ = −25/y³. Em (3, 4): y'' = −25/64. O sinal negativo indica concavidade para baixo, como se espera no arco de cima.\n\n−3/4 é a derivada primeira, e não a segunda. −1/4 deriva −x/y tratando y como constante: −1/y. 25/64 perde o sinal. E −9/64 perde a parcela y/y² ao aplicar a regra do quociente e fica só com −x²/y³.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Um tanque em forma de cone invertido tem 6 m de altura e 3 m de raio no topo. Ele perde água por um furo a 0,1 m³/min enquanto uma bomba o enche. Quando a água tem 2 m de profundidade, o nível sobe 0,2 m/min. Qual é a vazão da bomba?",
    opcoes: [
      "0,2π + 0,1 m³/min",
      "0,2π m³/min",
      "0,2π − 0,1 m³/min",
      "0,8π + 0,1 m³/min",
      "0,6π + 0,1 m³/min",
    ],
    correta: 0,
    explicacao:
      "A superfície da água, na profundidade h, tem raio r = h/2, pela proporção 3/6 do tanque. O volume é V = (1/3)π(h/2)² · h = πh³/12, e dV/dt = (πh²/4) · dh/dt. Com h = 2 e dh/dt = 0,2: dV/dt = π · 0,2 = 0,2π m³/min. Essa é a variação líquida: a bomba precisa repor também o que vaza, e sua vazão é 0,2π + 0,1 ≈ 0,73 m³/min.\n\n0,2π m³/min esquece o vazamento. 0,2π − 0,1 m³/min desconta o vazamento em vez de somá-lo. 0,8π + 0,1 m³/min usa raio igual à altura, r = h. E 0,6π + 0,1 m³/min esquece o 1/3 do volume do cone.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "No primeiro quadrante, o fólio de Descartes x³ + y³ = 6xy forma um laço. Em que ponto do laço, fora da origem, a reta tangente é horizontal?",
    opcoes: [
      "(3, 3)",
      "(2∛4, 2∛2)",
      "(2, 4)",
      "(2∛2, 2∛4)",
      "(4, 8)",
    ],
    correta: 3,
    explicacao:
      "Derivando implicitamente: 3x² + 3y² · y' = 6y + 6x · y', e y' = (2y − x²)/(y² − 2x). A tangente é horizontal onde o numerador se anula, y = x²/2. Levando à equação: x³ + x⁶/8 = 3x³, ou x⁶ = 16x³, e, fora da origem, x³ = 16, x = ∛16 = 2∛2. Então y = x²/2 = ∛256/2 = 2∛4. O ponto é (2∛2, 2∛4) ≈ (2,52; 3,17).\n\n(3, 3) é a ponta do laço, onde a inclinação vale −1. (2∛4, 2∛2) anula o denominador: ali a tangente é vertical. (2, 4) satisfaz y = x²/2, mas não está na curva: 8 + 64 = 72, e 6 · 2 · 4 = 48. E (4, 8) resolve x³ = 16 como se fosse x² = 16.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Um farol gira à razão de 2 voltas por minuto e fica a 3 km de uma praia reta. Com que velocidade o feixe de luz se desloca ao longo da praia num ponto a 4 km do ponto da praia mais próximo do farol?",
    opcoes: [
      "12π km/min",
      "100π/3 km/min",
      "36π/25 km/min",
      "4π km/min",
      "50/3 km/min",
    ],
    correta: 1,
    explicacao:
      "Seja x a posição do feixe na praia, medida a partir do ponto mais próximo do farol, e θ o ângulo do feixe com a perpendicular à praia: x = 3 · tg θ. Derivando: dx/dt = 3 · sec²θ · dθ/dt. Duas voltas por minuto são dθ/dt = 4π rad/min, e em x = 4, tg θ = 4/3 e sec²θ = 1 + 16/9 = 25/9. Então dx/dt = 3 · (25/9) · 4π = 100π/3 ≈ 105 km/min.\n\n12π km/min esquece o fator sec²θ. 36π/25 km/min usa cos²θ no lugar de sec²θ. 4π km/min é só a velocidade angular. E 50/3 km/min usa 2 rad/min, esquecendo que cada volta tem 2π radianos.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Qual é o maior valor que a abscissa x assume sobre a curva x² + xy + y² = 3?",
    opcoes: [
      "√3",
      "1",
      "√6",
      "2",
      "√2",
    ],
    correta: 3,
    explicacao:
      "No ponto de maior abscissa, a tangente é vertical: dx/dy = 0. Derivando em relação a y, com x = x(y): 2x · x' + (x' · y + x) + 2y = 0, e x' = −(x + 2y)/(2x + y). Então x' = 0 exige x + 2y = 0, ou y = −x/2. Na equação: x² − x²/2 + x²/4 = 3, isto é, (3/4)x² = 3 e x = ±2. O maior valor é 2, no ponto (2, −1).\n\n√3 é onde a curva cruza o eixo x, com y = 0, mas ali a tangente não é vertical. 1 é a abscissa do ponto de tangente horizontal, (1, −2). √6 é a maior distância da curva à origem, e não a maior abscissa. E √2 é a menor dessas distâncias.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Uma partícula se move sobre a curva y = √x. Ao passar pelo ponto (4, 2), sua abscissa cresce a 3 cm/s. Com que taxa varia, nesse instante, a distância da partícula à origem?",
    opcoes: [
      "6√5/5 cm/s",
      "3 cm/s",
      "27√5/20 cm/s",
      "27/40 cm/s",
      "27/2 cm/s",
    ],
    correta: 2,
    explicacao:
      "A distância D satisfaz D² = x² + y² = x² + x, pois y² = x na curva. Derivando em relação ao tempo: 2D · dD/dt = (2x + 1) · dx/dt. Em (4, 2): D = √20 = 2√5, e dD/dt = 9 · 3/(2 · 2√5) = 27/(4√5) = 27√5/20 ≈ 3,02 cm/s.\n\n6√5/5 cm/s esquece a parcela y² = x e usa só 2x · dx/dt. 3 cm/s supõe que a distância varia como a abscissa. 27/40 cm/s usa D = 20, esquecendo a raiz. E 27/2 cm/s esquece de dividir por D.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "A curva e^(xy) = x + y passa pelo ponto (1, 0). Como é a reta tangente à curva nesse ponto?",
    opcoes: [
      "Horizontal, de equação y = 0",
      "Inclinada, de equação y = x − 1",
      "Vertical, de equação x = 1",
      "Inclinada, de equação y = −x + 1",
      "Não existe: a curva tem um bico ali",
    ],
    correta: 2,
    explicacao:
      "Derivando em relação a x: e^(xy) · (y + x · y') = 1 + y'. Em (1, 0): 1 · (0 + y') = 1 + y', ou seja, 0 = 1, uma contradição: não existe inclinação finita. Tratando x como função de y, com x' = dx/dy: e^(xy) · (x' · y + x) = x' + 1, e em (1, 0): 1 = x' + 1, logo x' = 0. A tangente é vertical, a reta x = 1.\n\nHorizontal, y = 0, seria o caso de y' = 0, que a equação não admite. y = x − 1 e y = −x + 1 supõem inclinações ±1, que também levariam a 0 = 1. E não há bico: tratando x como função de y, a curva é derivável ali, com x' = 0.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Duas estradas se cruzam em ângulo reto. Numa delas, um caminhão a 0,8 km do cruzamento vem na direção dele a 30 km/h; na outra, uma moto a 0,6 km do cruzamento se afasta a 50 km/h. A distância entre os dois veículos está aumentando ou diminuindo, e a que taxa?",
    opcoes: [
      "Diminui, a 6 km/h",
      "Aumenta, a 54 km/h",
      "Diminui, a 20 km/h",
      "Aumenta, a 6 km/h",
      "Aumenta, a 80 km/h",
    ],
    correta: 3,
    explicacao:
      "Com y a distância do caminhão ao cruzamento e x a da moto, D² = x² + y². Derivando: D · dD/dt = x · dx/dt + y · dy/dt. Aqui D = 1 km, dx/dt = 50 e dy/dt = −30, negativo porque o caminhão se aproxima: dD/dt = (0,6 · 50 + 0,8 · (−30))/1 = 30 − 24 = 6 km/h. A distância aumenta, mas devagar, porque os dois efeitos quase se compensam.\n\nDiminui, a 6 km/h erra o sinal do resultado. Aumenta, a 54 km/h esquece que o caminhão se aproxima e soma as duas parcelas. Diminui, a 20 km/h subtrai as velocidades, sem considerar as posições. E aumenta, a 80 km/h soma as velocidades.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Os pontos (2, 4) e (4, 2) estão na curva xʸ = yˣ, com x, y > 0. Qual é a inclinação da tangente a essa curva no ponto (2, 4)?",
    opcoes: [
      "(ln 4 − 2)/(ln 2 − 2)",
      "(2ln 2 − 2)/(ln 2 − 1/2)",
      "2",
      "1",
      "(2 − 2ln 2)/(ln 2 − 1/2)",
    ],
    correta: 1,
    explicacao:
      "Tomando logaritmos, y · ln x = x · ln y. Derivando implicitamente, com a regra do produto dos dois lados: y' · ln x + y/x = ln y + x · y'/y. Juntando os termos com y': y'(ln x − x/y) = ln y − y/x. Em (2, 4): y'(ln 2 − 1/2) = ln 4 − 2 = 2ln 2 − 2, e y' = (2ln 2 − 2)/(ln 2 − 1/2) ≈ −3,18.\n\n(ln 4 − 2)/(ln 2 − 2) troca x/y por y/x no denominador. 2 é a inclinação da reta que liga a origem ao ponto, y/x. 1 é a inclinação da reta y = x, que também satisfaz xʸ = yˣ, mas não passa por (2, 4). E (2 − 2ln 2)/(ln 2 − 1/2) erra o sinal do numerador.",
  },
  {
    materia: "calculo",
    tema: "Derivação implícita e taxas relacionadas",
    dificuldade: "dificil",
    enunciado:
      "Um cocho de 5 m de comprimento tem seção transversal em forma de triângulo isósceles com o vértice para baixo, 1 m de largura no topo e 0,5 m de altura. Entra água a 0,2 m³/min. Com que velocidade o nível sobe quando a profundidade é 0,25 m?",
    opcoes: [
      "0,04 m/min",
      "0,08 m/min",
      "0,32 m/min",
      "0,16 m/min",
      "0,8 m/min",
    ],
    correta: 1,
    explicacao:
      "Na profundidade h, a largura da superfície da água é w = 2h, na mesma proporção 1/0,5 do cocho. A seção molhada é um triângulo de área (1/2) · 2h · h = h², e o volume é V = 5h². Derivando em relação ao tempo: dV/dt = 10h · dh/dt. Com dV/dt = 0,2 e h = 0,25: 0,2 = 2,5 · dh/dt, e dh/dt = 0,08 m/min.\n\n0,04 m/min esquece o 1/2 da área do triângulo. 0,32 m/min inverte a proporção e usa w = h/2. 0,16 m/min esquece o fator 2 que desce de h². E 0,8 m/min divide a vazão pela profundidade, sem a geometria do cocho.",
  },
];
