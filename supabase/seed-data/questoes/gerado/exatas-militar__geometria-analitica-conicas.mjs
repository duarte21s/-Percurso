/* Geometria analítica: cônicas (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__geometria-analitica-conicas.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__geometria-analitica-conicas.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Quais são o centro e o raio da circunferência de equação (x − 2)² + (y + 3)² = 16?",
    opcoes: [
      "Centro (−2, 3) e raio 4",
      "Centro (2, −3) e raio 4",
      "Centro (2, −3) e raio 16",
      "Centro (2, 3) e raio 4",
      "Centro (−2, 3) e raio 16",
    ],
    correta: 1,
    explicacao:
      "A equação reduzida (x − a)² + (y − b)² = r² descreve a circunferência de centro (a, b) e raio r. Aqui, x − 2 dá a = 2; y + 3 = y − (−3) dá b = −3; e r² = 16 dá r = 4. Centro (2, −3), raio 4.\n\nCentro (−2, 3) lê os sinais ao pé da letra, sem lembrar que a equação usa x − a e y − b. Raio 16 esquece que o segundo membro é o quadrado do raio. Centro (2, 3) erra só o sinal de b. E centro (−2, 3) com raio 16 junta os dois erros.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Qual é a equação da circunferência de centro (1, 2) e raio 3?",
    opcoes: [
      "(x + 1)² + (y + 2)² = 9",
      "(x − 1)² + (y − 2)² = 3",
      "(x − 2)² + (y − 1)² = 9",
      "(x − 1)² + (y − 2)² = 9",
      "x² + y² = 9",
    ],
    correta: 3,
    explicacao:
      "Os pontos (x, y) da circunferência estão à distância 3 do centro (1, 2): √((x − 1)² + (y − 2)²) = 3. Elevando ao quadrado: (x − 1)² + (y − 2)² = 9.\n\n(x + 1)² + (y + 2)² = 9 tem centro (−1, −2): troca os sinais. (x − 1)² + (y − 2)² = 3 usa o raio sem elevar ao quadrado, e descreve uma circunferência de raio √3. (x − 2)² + (y − 1)² = 9 troca as coordenadas do centro. E x² + y² = 9 tem o raio certo, mas o centro na origem.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Qual é o comprimento do eixo maior da elipse de equação x²/25 + y²/9 = 1?",
    opcoes: [
      "5",
      "6",
      "10",
      "25",
      "8",
    ],
    correta: 2,
    explicacao:
      "Na forma x²/a² + y²/b² = 1 com a > b, o eixo maior está sobre o eixo x e mede 2a. Aqui, a² = 25, a = 5, e o eixo maior mede 10 — de (−5, 0) a (5, 0).\n\n5 é o semieixo a, e não o eixo inteiro. 6 é o eixo menor, 2b = 2 · 3. 25 é a², sem extrair a raiz. E 8 é a distância entre os focos, 2c, com c = √(25 − 9) = 4. Para saber qual eixo é o maior, basta comparar os denominadores: o maior, 25, está sob x², então o eixo maior é horizontal.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Quais são os vértices da hipérbole de equação x²/16 − y²/9 = 1?",
    opcoes: [
      "(5, 0) e (−5, 0)",
      "(3, 0) e (−3, 0)",
      "(0, 4) e (0, −4)",
      "(4, 0) e (−4, 0)",
      "(16, 0) e (−16, 0)",
    ],
    correta: 3,
    explicacao:
      "Os vértices são os pontos da hipérbole sobre o eixo real. Com y = 0, x²/16 = 1, e x = ±4: vértices (4, 0) e (−4, 0). O termo positivo da equação, em x², indica que o eixo real é o eixo x.\n\n(5, 0) e (−5, 0) são os focos, com c² = a² + b² = 25. (3, 0) e (−3, 0) usam b no lugar de a. (0, 4) e (0, −4) põem o eixo real na vertical. E (16, 0) e (−16, 0) usam a² sem extrair a raiz.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Qual é o foco da parábola de equação y² = 8x?",
    opcoes: [
      "(8, 0)",
      "(4, 0)",
      "(2, 0)",
      "(0, 2)",
      "(−2, 0)",
    ],
    correta: 2,
    explicacao:
      "A parábola y² = 4px tem vértice na origem, eixo sobre o eixo x e foco (p, 0). Aqui, 4p = 8, p = 2, e o foco é (2, 0). A diretriz é a reta x = −2: cada ponto da parábola fica à mesma distância do foco e da diretriz.\n\n(8, 0) usa o coeficiente 8 como se fosse p. (4, 0) divide 8 por 2 em vez de 4. (0, 2) põe o foco no eixo y, que não é o eixo desta parábola. E (−2, 0) está do lado da diretriz, oposto à abertura da parábola.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Qual é a equação da reta diretriz da parábola x² = 12y?",
    opcoes: [
      "y = 3",
      "y = −12",
      "x = −3",
      "y = −3",
      "y = −6",
    ],
    correta: 3,
    explicacao:
      "Na parábola x² = 4py, o eixo é o eixo y, o foco é (0, p) e a diretriz é a reta y = −p. Aqui, 4p = 12 e p = 3: foco (0, 3) e diretriz y = −3. Conferindo com o ponto (6, 3), que está na parábola (36 = 12 · 3): ele dista 6 do foco (0, 3) e 6 da reta y = −3.\n\ny = 3 é a reta horizontal que passa pelo foco, e não a diretriz. y = −12 usa 4p no lugar de p. x = −3 seria a diretriz de uma parábola de eixo horizontal. E y = −6 usa 2p.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Numa cônica, a excentricidade é a razão entre a distância de um ponto dela ao foco e a distância desse ponto à diretriz correspondente. Qual cônica tem excentricidade igual a 1?",
    opcoes: [
      "A elipse",
      "A hipérbole",
      "A circunferência",
      "Nenhuma cônica",
      "A parábola",
    ],
    correta: 4,
    explicacao:
      "Excentricidade 1 significa que cada ponto da curva está à mesma distância do foco e da diretriz — exatamente a definição de parábola. Com excentricidade entre 0 e 1, a curva é uma elipse; maior que 1, uma hipérbole.\n\nNa elipse, 0 < e < 1: os pontos ficam mais perto do foco do que da diretriz. Na hipérbole, e > 1. A circunferência é o caso limite e = 0 das elipses, com os focos coincidindo no centro. E “nenhuma cônica” ignora a parábola.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Qual é o raio da circunferência de equação x² + y² = 49?",
    opcoes: [
      "49",
      "14",
      "49π",
      "7",
      "√7",
    ],
    correta: 3,
    explicacao:
      "A equação x² + y² = r² descreve a circunferência de centro na origem e raio r. Aqui, r² = 49 e r = 7: os pontos (7, 0) e (0, −7), por exemplo, estão nela.\n\n49 é r², e não o raio. 14 é o diâmetro. 49π é a área do círculo, e não o raio. E √7 tira a raiz de 7, e não de 49. A equação x² + y² = r² é só a fórmula da distância à origem, √(x² + y²) = r, elevada ao quadrado.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Qual é o centro da elipse de equação (x − 2)²/9 + (y + 1)²/4 = 1?",
    opcoes: [
      "(−2, 1)",
      "(2, −1)",
      "(3, 2)",
      "(2, 1)",
      "(9, 4)",
    ],
    correta: 1,
    explicacao:
      "Na forma (x − h)²/a² + (y − k)²/b² = 1, o centro é (h, k). Aqui, x − 2 dá h = 2, e y + 1 = y − (−1) dá k = −1: centro (2, −1). Os vértices do eixo maior são (2 ± 3, −1), isto é, (5, −1) e (−1, −1).\n\n(−2, 1) troca os dois sinais. (3, 2) usa os semieixos a = 3 e b = 2 como se fossem o centro. (2, 1) erra só o sinal de k. E (9, 4) usa os denominadores.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Para que lado se abre a parábola de equação y² = −8x?",
    opcoes: [
      "Para a direita",
      "Para cima",
      "Para baixo",
      "Para os dois lados do eixo y",
      "Para a esquerda",
    ],
    correta: 4,
    explicacao:
      "Como y² nunca é negativo, −8x também não pode ser: x ≤ 0 em todos os pontos da curva. A parábola fica à esquerda do eixo y, com vértice na origem, e se abre para a esquerda. Seu foco é (−2, 0), e a diretriz, x = 2.\n\n“Para a direita” vale para y² = 8x, sem o sinal de menos. “Para cima” e “para baixo” valeriam para parábolas da forma x² = ±4py, de eixo vertical. E nenhuma parábola se abre para os dois lados: ter dois ramos é característica da hipérbole.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Qual é a distância do ponto (1, 2) ao centro da circunferência de equação (x − 4)² + (y − 6)² = 9?",
    opcoes: [
      "2",
      "5",
      "8",
      "3",
      "7",
    ],
    correta: 1,
    explicacao:
      "O centro é (4, 6). A distância de (1, 2) até ele é √((4 − 1)² + (6 − 2)²) = √(9 + 16) = √25 = 5. Como o raio é 3, o ponto (1, 2) está fora da circunferência, a 5 − 3 = 2 dela.\n\n2 é a distância do ponto à circunferência, e não ao centro. 8 soma o raio à distância. 3 é o raio. E 7 soma as diferenças das coordenadas (3 + 4) sem usar Pitágoras.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "facil",
    enunciado:
      "Que curva é descrita pela equação x²/4 + y²/4 = 1?",
    opcoes: [
      "Uma circunferência de raio 4",
      "Uma circunferência de raio 2",
      "Uma elipse de focos (2, 0) e (−2, 0)",
      "Uma hipérbole",
      "Uma parábola",
    ],
    correta: 1,
    explicacao:
      "Multiplicando por 4: x² + y² = 4. É a circunferência de centro na origem e raio 2. Ela é o caso particular da elipse em que os dois semieixos são iguais (a = b = 2); então c = √(a² − b²) = 0, e os focos coincidem com o centro.\n\nO raio 4 usa o denominador sem extrair a raiz. A elipse de focos (±2, 0) exigiria a > b; com a = b, não há focos distintos. A hipérbole teria um sinal de menos entre os termos. E a parábola teria apenas uma das variáveis ao quadrado.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "A equação x² + y² − 4x + 6y − 12 = 0 descreve uma circunferência. Quais são o seu centro e o seu raio?",
    opcoes: [
      "Centro (−2, 3) e raio 5",
      "Centro (2, −3) e raio √12",
      "Centro (2, −3) e raio 5",
      "Centro (4, −6) e raio 5",
      "Centro (2, −3) e raio 25",
    ],
    correta: 2,
    explicacao:
      "Completando quadrados: x² − 4x = (x − 2)² − 4 e y² + 6y = (y + 3)² − 9. A equação fica (x − 2)² + (y + 3)² − 4 − 9 − 12 = 0, ou (x − 2)² + (y + 3)² = 25: centro (2, −3) e raio 5.\n\nCentro (−2, 3) divide os coeficientes −4 e 6 por 2 sem trocar o sinal. Raio √12 usa só o termo independente, esquecendo os quadrados completados. Centro (4, −6) esquece de dividir os coeficientes por 2. E raio 25 é r², sem a raiz.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Para que valores de k a equação x² + y² − 2x + 4y + k = 0 representa uma circunferência?",
    opcoes: [
      "k > 5",
      "k < −5",
      "k ≠ 5",
      "Para qualquer valor real de k",
      "k < 5",
    ],
    correta: 4,
    explicacao:
      "Completando quadrados: (x − 1)² + (y + 2)² = 1 + 4 − k = 5 − k. O segundo membro é o quadrado do raio e precisa ser positivo: 5 − k > 0, ou k < 5. Com k = 5, a equação se reduz ao único ponto (1, −2); com k > 5, nenhum ponto do plano a satisfaz.\n\nk > 5 inverte a desigualdade. k < −5 erra o sinal do 5. k ≠ 5 aceita valores maiores que 5, para os quais o raio ao quadrado seria negativo. E “qualquer k” ignora que o segundo membro depende de k.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a posição do ponto P(4, 1) em relação à circunferência de equação (x − 1)² + (y + 3)² = 25?",
    opcoes: [
      "P é interior à circunferência",
      "P é exterior à circunferência",
      "P pertence à circunferência",
      "P é o centro da circunferência",
      "P pertence ao diâmetro horizontal",
    ],
    correta: 2,
    explicacao:
      "Substituindo P na equação: (4 − 1)² + (1 + 3)² = 9 + 16 = 25, exatamente r². Então P está à distância 5 do centro (1, −3), igual ao raio: P pertence à circunferência.\n\nSe o primeiro membro desse menos que 25, P seria interior; mais que 25, exterior. O centro é (1, −3), e não (4, 1). E o diâmetro horizontal é o segmento sobre a reta y = −3, que não passa por P.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Para que valores de k a reta 2x + y + k = 0 é tangente à circunferência x² + y² = 5?",
    opcoes: [
      "Apenas k = 5",
      "k = √5 ou k = −√5",
      "k = 25 ou k = −25",
      "Apenas k = 0",
      "k = 5 ou k = −5",
    ],
    correta: 4,
    explicacao:
      "A reta é tangente quando a distância do centro (0, 0) a ela é igual ao raio √5. Essa distância é |2 · 0 + 0 + k|/√(2² + 1²) = |k|/√5. Igualando: |k|/√5 = √5, ou |k| = 5, isto é, k = 5 ou k = −5.\n\n“Apenas k = 5” esquece a tangente do outro lado da circunferência. ±√5 esquece o denominador √5 da fórmula da distância. ±25 eleva ao quadrado sem necessidade. E k = 0 dá a reta que passa pelo centro, que é secante.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é o comprimento da corda que a reta y = 3 determina na circunferência x² + y² = 25?",
    opcoes: [
      "4",
      "8",
      "6",
      "10",
      "16",
    ],
    correta: 1,
    explicacao:
      "Substituindo y = 3: x² + 9 = 25, x² = 16, e x = ±4. A corda vai de (−4, 3) a (4, 3) e mede 8. Pela geometria: a distância do centro à reta é 3, e a meia-corda é √(5² − 3²) = 4.\n\n4 é a meia-corda. 6 é o dobro da distância do centro à reta. 10 é o diâmetro, a maior corda possível. E 16 é x², sem a raiz, que ainda não é um comprimento. Uma corda que passasse pelo centro, como a da reta y = 0, mediria 10.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a posição relativa das circunferências de equações x² + y² = 9 e (x − 4)² + (y − 3)² = 4?",
    opcoes: [
      "Secantes",
      "Tangentes exteriormente",
      "Tangentes interiormente",
      "Exteriores, sem ponto comum",
      "Uma interior à outra",
    ],
    correta: 1,
    explicacao:
      "Os centros são (0, 0) e (4, 3), à distância √(16 + 9) = 5, e os raios são 3 e 2. Como a distância entre os centros é igual à soma dos raios (3 + 2 = 5), as circunferências se tocam num único ponto, cada uma do lado de fora da outra: são tangentes exteriormente. O ponto de contato é (12/5, 9/5).\n\nSecantes exigiria distância entre 1 e 5, entre a diferença e a soma dos raios. Tangentes interiormente exigiria distância igual à diferença, 1. Exteriores sem ponto comum exigiria distância maior que 5. E uma interior à outra, distância menor que 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é o raio da circunferência que passa pelos pontos (0, 0), (6, 0) e (0, 8)?",
    opcoes: [
      "10",
      "7",
      "4",
      "6",
      "5",
    ],
    correta: 4,
    explicacao:
      "O triângulo de vértices (0, 0), (6, 0) e (0, 8) é retângulo na origem, e um ângulo reto inscrito numa circunferência enxerga um diâmetro: a hipotenusa, de (6, 0) a (0, 8), é um diâmetro. Ela mede √(36 + 64) = 10, e o raio é 5. O centro é o ponto médio da hipotenusa, (3, 4).\n\n10 é o diâmetro. 7 é a média dos catetos. 4 é a ordenada do centro, e 6, a medida de um cateto — nenhum dos dois é o raio.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a área do círculo limitado pela circunferência de equação x² + y² − 6x + 8y = 0?",
    opcoes: [
      "5π",
      "10π",
      "25π",
      "100π",
      "7π",
    ],
    correta: 2,
    explicacao:
      "Completando quadrados: (x − 3)² − 9 + (y + 4)² − 16 = 0, ou (x − 3)² + (y + 4)² = 25. O raio é 5, e a área, π · 5² = 25π. Repare que a circunferência passa pela origem, porque não há termo independente.\n\n5π usa o raio sem elevar ao quadrado. 10π é o comprimento da circunferência. 100π usa o diâmetro 10 no lugar do raio. E 7π soma as coordenadas do centro, 3 + 4, como se fossem o raio ao quadrado.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a menor distância entre o ponto (8, 6) e os pontos da circunferência x² + y² = 4?",
    opcoes: [
      "8",
      "10",
      "12",
      "6",
      "4",
    ],
    correta: 0,
    explicacao:
      "O ponto (8, 6) está a √(64 + 36) = 10 do centro (0, 0), fora da circunferência de raio 2. O ponto da circunferência mais próximo dele fica na reta que liga o centro a (8, 6), do lado de (8, 6): a distância é 10 − 2 = 8.\n\n10 é a distância até o centro. 12 é a maior distância, até o ponto diametralmente oposto. 6 subtrai 4 (que é r²) em vez do raio. E 4 é r², e não uma distância.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a equação da reta tangente à circunferência x² + y² = 25 no ponto (3, 4)?",
    opcoes: [
      "3x + 4y = 25",
      "4x + 3y = 25",
      "3x + 4y = 5",
      "4x − 3y = 0",
      "x + y = 7",
    ],
    correta: 0,
    explicacao:
      "A tangente é perpendicular ao raio no ponto de contato. O raio vai de (0, 0) a (3, 4), na direção (3, 4); então a tangente tem vetor normal (3, 4) e equação 3x + 4y = c. Passando por (3, 4): c = 9 + 16 = 25. A reta é 3x + 4y = 25.\n\n4x + 3y = 25 troca os coeficientes e não passa por (3, 4), onde daria 24. 3x + 4y = 5 usa o raio no segundo membro, e não r². 4x − 3y = 0 é a reta do próprio raio, que passa pelo centro. E x + y = 7 passa por (3, 4), mas corta a circunferência em dois pontos, (3, 4) e (4, 3).",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Quais são os focos da elipse de equação x²/25 + y²/9 = 1?",
    opcoes: [
      "(4, 0) e (−4, 0)",
      "(5, 0) e (−5, 0)",
      "(3, 0) e (−3, 0)",
      "(0, 4) e (0, −4)",
      "(√34, 0) e (−√34, 0)",
    ],
    correta: 0,
    explicacao:
      "Na elipse, a² = b² + c², em que a é o semieixo maior e c é a distância do centro a cada foco. Aqui, a² = 25 e b² = 9, então c² = 16 e c = 4. Como o eixo maior está sobre o eixo x — o denominador maior está sob x² —, os focos são (4, 0) e (−4, 0).\n\n(5, 0) e (−5, 0) são os vértices do eixo maior. (3, 0) e (−3, 0) usam b no lugar de c. (0, 4) e (0, −4) põem os focos no eixo menor. E (±√34, 0) usa c² = a² + b², que é a relação da hipérbole.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a excentricidade da elipse de equação x²/25 + y²/16 = 1?",
    opcoes: [
      "3/5",
      "4/5",
      "5/3",
      "3/4",
      "16/25",
    ],
    correta: 0,
    explicacao:
      "A excentricidade é e = c/a. Aqui, a = 5 e b = 4, e de a² = b² + c² vem c = 3. Então e = 3/5. Como em toda elipse, 0 < e < 1: quanto mais perto de 1, mais achatada a curva.\n\n4/5 usa b no lugar de c. 5/3 inverte a razão e daria um valor maior que 1, impossível numa elipse. 3/4 divide c por b. E 16/25 é b²/a², que não mede a excentricidade. Conferindo os focos (±3, 0): do ponto (0, 4) da elipse, as distâncias a eles são 5 e 5, que somam 10 = 2a.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a equação da elipse de focos (3, 0) e (−3, 0) e eixo maior de comprimento 10?",
    opcoes: [
      "x²/25 + y²/16 = 1",
      "x²/25 + y²/9 = 1",
      "x²/100 + y²/91 = 1",
      "x²/16 + y²/25 = 1",
      "x²/25 + y²/34 = 1",
    ],
    correta: 0,
    explicacao:
      "O eixo maior mede 2a = 10, então a = 5; a distância do centro a cada foco é c = 3. Pela relação a² = b² + c²: b² = 25 − 9 = 16. Com os focos no eixo x, a equação é x²/25 + y²/16 = 1.\n\nx²/25 + y²/9 = 1 usa c² no lugar de b². x²/100 + y²/91 = 1 toma o eixo maior inteiro, 10, como se fosse a. x²/16 + y²/25 = 1 põe o eixo maior na vertical, com os focos no eixo y. E x²/25 + y²/34 = 1 soma c² em vez de subtrair.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Sabendo que a área limitada por uma elipse de semieixos a e b é πab, qual é a área da região limitada pela elipse x²/16 + y²/9 = 1?",
    opcoes: [
      "25π",
      "7π",
      "144π",
      "12π",
      "48π",
    ],
    correta: 3,
    explicacao:
      "Os semieixos são a = 4 e b = 3, as raízes de 16 e de 9. A área é π · 4 · 3 = 12π. A fórmula generaliza a do círculo: quando a = b = r, πab vira πr².\n\n25π soma os quadrados dos semieixos. 7π soma os semieixos. 144π multiplica os denominadores, 16 · 9, sem extrair as raízes. E 48π multiplica os eixos inteiros, 8 · 6, em vez dos semieixos. A resposta faz sentido: a elipse cabe no retângulo de 8 por 6 e ocupa π/4 da área dele, 48 · π/4 = 12π.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é o comprimento do eixo menor da elipse de equação 4x² + 9y² = 36?",
    opcoes: [
      "6",
      "2",
      "9",
      "4",
      "36",
    ],
    correta: 3,
    explicacao:
      "Dividindo a equação por 36: x²/9 + y²/4 = 1. Os semieixos são a = 3, no eixo x, e b = 2, no eixo y. O eixo menor mede 2b = 4, de (0, −2) a (0, 2).\n\n6 é o eixo maior, 2a. 2 é o semieixo menor, e não o eixo inteiro. 9 lê o denominador de x² como se fosse um comprimento. E 36 é o segundo membro da equação original, antes da divisão. Dividir pelo segundo membro é o passo que revela os semieixos: só na forma x²/a² + y²/b² = 1 os denominadores são os quadrados deles.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Para qualquer ponto P da elipse x²/36 + y²/20 = 1, qual é a soma das distâncias de P aos dois focos?",
    opcoes: [
      "6",
      "8",
      "4√5",
      "16",
      "12",
    ],
    correta: 4,
    explicacao:
      "Pela definição, a soma das distâncias de qualquer ponto da elipse aos focos é constante e igual ao eixo maior, 2a. Aqui, a² = 36, a = 6, e a soma vale 12. Os focos são (±4, 0), pois c² = 36 − 20 = 16; no vértice (6, 0), por exemplo, as distâncias são 2 e 10, que somam 12.\n\n6 é o semieixo a. 8 é a distância entre os focos, 2c. 4√5 é o eixo menor, 2b = 2√20. E 16 é c², e não uma distância.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "A elipse x²/25 + y²/b² = 1, com b > 0, passa pelo ponto (3, 16/5). Qual é o valor de b?",
    opcoes: [
      "16",
      "4",
      "5",
      "3",
      "16/5",
    ],
    correta: 1,
    explicacao:
      "Substituindo o ponto: 9/25 + (256/25)/b² = 1. Então (256/25)/b² = 16/25, e b² = 256/16 = 16, b = 4. Conferindo: 9/25 + (256/25)/16 = 9/25 + 16/25 = 1.\n\n16 é b², sem a raiz. 5 é o semieixo a. 3 é a abscissa do ponto. E 16/5 é a ordenada do ponto, que não é o semieixo, porque o ponto não está sobre o eixo y. O ponto também é compatível com a = 5: no eixo x, a elipse vai de −5 a 5, e a abscissa 3 fica dentro desse intervalo.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Onde ficam os focos da hipérbole x²/20 − y²/16 = 1?",
    opcoes: [
      "(2, 0) e (−2, 0)",
      "(2√5, 0) e (−2√5, 0)",
      "(0, 6) e (0, −6)",
      "(4, 0) e (−4, 0)",
      "(6, 0) e (−6, 0)",
    ],
    correta: 4,
    explicacao:
      "Na hipérbole, c² = a² + b², em que c é a distância do centro a cada foco. Aqui, c² = 20 + 16 = 36, e c = 6. O termo positivo está em x², então os focos ficam no eixo x: (6, 0) e (−6, 0). Em qualquer ponto da curva, a diferença das distâncias a esses focos vale 2a = 4√5.\n\n(±2, 0) usa c² = a² − b² = 4, que é a relação da elipse. (±2√5, 0) são os vértices, com a = √20. (0, ±6) põe os focos no eixo y, que aqui é o eixo imaginário. E (±4, 0) usa b no lugar de c.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Quais são as assíntotas da hipérbole de equação x²/64 − y²/36 = 1?",
    opcoes: [
      "y = (4/3)x e y = −(4/3)x",
      "y = (3/4)x e y = −(3/4)x",
      "y = (9/16)x e y = −(9/16)x",
      "y = 6x e y = −6x",
      "y = (5/4)x e y = −(5/4)x",
    ],
    correta: 1,
    explicacao:
      "As assíntotas de x²/a² − y²/b² = 1 são as retas y = ±(b/a)x, das quais a curva se aproxima cada vez mais quando x cresce. Aqui, a = 8 e b = 6, e b/a = 3/4: as assíntotas são y = (3/4)x e y = −(3/4)x. Um atalho para achá-las é trocar o 1 do segundo membro por 0: x²/64 = y²/36.\n\n±(4/3)x inverte a razão, a/b. ±(9/16)x usa b²/a², sem as raízes. ±6x usa só b. E ±(5/4)x usa c/a, que é a excentricidade, e não a inclinação das assíntotas.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a excentricidade da hipérbole de equação x²/9 − y²/16 = 1?",
    opcoes: [
      "3/5",
      "4/3",
      "5/4",
      "5/3",
      "√7/3",
    ],
    correta: 3,
    explicacao:
      "A excentricidade é e = c/a, com c² = a² + b² na hipérbole. Aqui, a = 3, b = 4 e c = 5, então e = 5/3. Toda hipérbole tem e > 1, porque c > a.\n\n3/5 inverte a razão e dá um valor menor que 1, que seria de elipse. 4/3 é b/a, a inclinação das assíntotas. 5/4 divide c por b. E √7/3 usa c² = b² − a² = 7, uma subtração no lugar da soma. Numericamente, 5/3 ≈ 1,67; quanto maior a excentricidade, mais abertos ficam os ramos.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a excentricidade da hipérbole equilátera de equação x² − y² = 8?",
    opcoes: [
      "1",
      "2",
      "2√2",
      "√2",
      "√2/2",
    ],
    correta: 3,
    explicacao:
      "Dividindo por 8: x²/8 − y²/8 = 1, com a² = b² = 8. Então c² = a² + b² = 16, c = 4, a = 2√2 e e = c/a = 4/(2√2) = √2. Toda hipérbole equilátera (a = b) tem excentricidade √2, e suas assíntotas, y = x e y = −x, são perpendiculares.\n\n1 seria a excentricidade de uma parábola, e nenhuma hipérbole a tem. 2 divide c² por a², sem as raízes. 2√2 é o valor de a, e não a razão c/a. E √2/2 inverte a razão, a/c.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "A curva xy = 4 é uma hipérbole equilátera cujos vértices são os pontos dela mais próximos da origem. Qual é a distância entre esses dois vértices?",
    opcoes: [
      "4√2",
      "4",
      "8",
      "2√2",
      "2",
    ],
    correta: 0,
    explicacao:
      "Os pontos da curva são (x, 4/x). A distância à origem, ao quadrado, é x² + 16/x², mínima quando x² = 4, isto é, x = ±2 — pela desigualdade das médias, x² + 16/x² ≥ 2√16 = 8. Os vértices são (2, 2) e (−2, −2), cada um a 2√2 da origem, e a distância entre eles é 4√2.\n\n4 é a distância de (2, 2) a (−2, 2), ponto que nem está na curva. 8 é o quadrado da distância de cada vértice à origem. 2√2 é a distância de um vértice à origem, a metade da pedida. E 2 é a abscissa do vértice.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é a equação da parábola de foco (0, 2) e reta diretriz y = −2?",
    opcoes: [
      "x² = 2y",
      "x² = 8y",
      "y² = 8x",
      "x² = 4y",
      "x² = −8y",
    ],
    correta: 1,
    explicacao:
      "Um ponto (x, y) da parábola está à mesma distância do foco e da diretriz: √(x² + (y − 2)²) = |y + 2|. Elevando ao quadrado: x² + y² − 4y + 4 = y² + 4y + 4, ou x² = 8y. Na forma x² = 4py, p = 2 é a distância do vértice ao foco.\n\nx² = 2y usa p como coeficiente, em vez de 4p. y² = 8x troca os eixos: seria a parábola de foco (2, 0) e diretriz x = −2. x² = 4y toma a distância entre foco e diretriz, 4, como se fosse 4p. E x² = −8y abre para baixo, com foco (0, −2).",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Qual é o vértice da parábola de equação y = x² − 6x + 5?",
    opcoes: [
      "(3, −4)",
      "(−3, 32)",
      "(6, 5)",
      "(3, 4)",
      "(1, 0)",
    ],
    correta: 0,
    explicacao:
      "O vértice tem abscissa x = −b/(2a) = 6/2 = 3 e ordenada y = 9 − 18 + 5 = −4. Completando o quadrado: y = (x − 3)² − 4, que mostra o vértice (3, −4) e a concavidade para cima.\n\n(−3, 32) erra o sinal de −b/(2a) e calcula y em x = −3. (6, 5) usa os coeficientes −6 e 5 sem conta alguma. (3, 4) erra o sinal da ordenada. E (1, 0) é uma das raízes, onde a parábola corta o eixo x, e não o vértice.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Onde fica o foco da parábola cuja equação é y = x²/4?",
    opcoes: [
      "(0, 4)",
      "(0, 1/4)",
      "(1, 0)",
      "(0, 1/16)",
      "(0, 1)",
    ],
    correta: 4,
    explicacao:
      "Reescrevendo: x² = 4y, que é a forma x² = 4py com p = 1. O foco é (0, p) = (0, 1), e a diretriz é y = −1. Conferindo com o ponto (2, 1) da parábola: ele dista 2 do foco (0, 1) e 2 da diretriz y = −1.\n\n(0, 4) usa 4p como se fosse p. (0, 1/4) usa o coeficiente de x² como se fosse p. (1, 0) põe o foco no eixo x, que não é o eixo desta parábola. E (0, 1/16) eleva ao quadrado o coeficiente 1/4.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "O lado reto de uma parábola é a corda que passa pelo foco e é perpendicular ao eixo. Qual é o comprimento do lado reto da parábola y² = 12x?",
    opcoes: [
      "6",
      "3",
      "12",
      "24",
      "36",
    ],
    correta: 2,
    explicacao:
      "Em y² = 4px, 4p = 12 e p = 3: o foco é (3, 0). A corda perpendicular ao eixo que passa pelo foco está na reta x = 3: y² = 36, y = ±6, e seu comprimento é 12. Em geral, o lado reto mede 4p — o próprio coeficiente de x.\n\n6 é a metade do lado reto. 3 é o valor de p. 24 dobra o comprimento. E 36 é y², sem a raiz. O lado reto dá uma boa noção da abertura da parábola: quanto maior o p, mais aberta ela é.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "A parábola (y − 1)² = 4(x + 2) tem o vértice fora da origem. Em que ponto fica o seu foco?",
    opcoes: [
      "(−2, 1)",
      "(−1, 1)",
      "(−3, 1)",
      "(1, 1)",
      "(−1, −1)",
    ],
    correta: 1,
    explicacao:
      "É a parábola y² = 4x deslocada: o vértice passa de (0, 0) para (−2, 1). Com 4p = 4, p = 1, e o eixo é horizontal — a variável ao quadrado é y —, com abertura para a direita. O foco fica 1 unidade à direita do vértice: (−2 + 1, 1) = (−1, 1).\n\n(−2, 1) é o vértice. (−3, 1) põe o foco do lado errado, à esquerda do vértice. (1, 1) desloca só a ordenada do foco da parábola y² = 4x, que é (1, 0). E (−1, −1) erra o sinal da ordenada do vértice.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "media",
    enunciado:
      "Uma parábola de eixo vertical tem vértice (1, 2) e passa pelo ponto (3, 10). Em que ponto ela corta o eixo y?",
    opcoes: [
      "(0, 2)",
      "(0, 10)",
      "(0, 6)",
      "(0, 4)",
      "(0, 3)",
    ],
    correta: 3,
    explicacao:
      "Com vértice (1, 2), a parábola é y = a(x − 1)² + 2. Passando por (3, 10): 10 = 4a + 2, e a = 2. Então y = 2(x − 1)² + 2, e em x = 0, y = 2 + 2 = 4: o ponto é (0, 4). Por simetria em relação à reta x = 1, o ponto (2, 4) também está na parábola.\n\n(0, 2) usa a ordenada do vértice, como se o vértice estivesse no eixo y. (0, 10) usa a ordenada do ponto dado. (0, 6) toma a = 4, esquecendo de dividir 8 por 4. E (0, 3) toma a = 1.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "Por um ponto P(7, 1), exterior à circunferência (x − 1)² + (y − 1)² = 20, traça-se uma reta tangente a ela. Qual é a distância de P ao ponto de tangência?",
    opcoes: [
      "4",
      "6",
      "2√5",
      "16",
      "√56",
    ],
    correta: 0,
    explicacao:
      "O raio que vai ao ponto de tangência T é perpendicular à tangente, então o triângulo formado pelo centro C(1, 1), por T e por P é retângulo em T. A hipotenusa CP mede 6 — de (1, 1) a (7, 1) —, e o cateto CT é o raio, √20. Por Pitágoras, PT² = 36 − 20 = 16, e PT = 4.\n\n6 é a distância de P ao centro. 2√5 é o raio. 16 é PT², sem a raiz. E √56 soma os quadrados em vez de subtrair, como se o ângulo reto estivesse no centro.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "A elipse (x − 1)²/16 + (y + 2)²/7 = 1 tem o centro fora da origem. Em que pontos ficam os seus focos?",
    opcoes: [
      "(3, 0) e (−3, 0)",
      "(4, 2) e (−2, 2)",
      "(1, 1) e (1, −5)",
      "(4, −2) e (−2, −2)",
      "(5, −2) e (−3, −2)",
    ],
    correta: 3,
    explicacao:
      "O centro é (1, −2). Com a² = 16 e b² = 7, c² = 16 − 7 = 9 e c = 3. O eixo maior é horizontal — o denominador maior está sob o termo em x —, então os focos ficam 3 unidades à esquerda e à direita do centro: (1 + 3, −2) = (4, −2) e (1 − 3, −2) = (−2, −2).\n\n(±3, 0) esquece o deslocamento do centro. (4, 2) e (−2, 2) erram o sinal da ordenada do centro. (1, 1) e (1, −5) põem os focos na vertical, sobre o eixo menor. E (5, −2) e (−3, −2) são os vértices do eixo maior, a 4 do centro.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "Na elipse x²/25 + y²/9 = 1, qual é o comprimento da corda que passa por um dos focos e é perpendicular ao eixo maior?",
    opcoes: [
      "18/5",
      "9/5",
      "6",
      "10/3",
      "36/5",
    ],
    correta: 0,
    explicacao:
      "Os focos são (±4, 0), pois c² = 25 − 9 = 16. Na reta x = 4: 16/25 + y²/9 = 1, y² = 9 · 9/25 = 81/25, e y = ±9/5. A corda vai de (4, −9/5) a (4, 9/5) e mede 18/5. Em geral, esse comprimento — o lado reto da elipse — é 2b²/a = 2 · 9/5.\n\n9/5 é a metade da corda. 6 é o eixo menor, a corda perpendicular ao eixo maior que passa pelo centro, e não pelo foco. 10/3 inverte a fórmula, usando 2a/b. E 36/5 dobra o comprimento.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "Qual é a equação da hipérbole de focos (0, 5) e (0, −5) e vértices (0, 3) e (0, −3)?",
    opcoes: [
      "x²/9 − y²/16 = 1",
      "y²/16 − x²/9 = 1",
      "y²/9 + x²/16 = 1",
      "y²/9 − x²/34 = 1",
      "y²/9 − x²/16 = 1",
    ],
    correta: 4,
    explicacao:
      "Os focos e os vértices estão no eixo y, então o eixo real é vertical e o termo positivo é o de y². O semieixo real é a = 3 (distância do centro ao vértice), e c = 5 (ao foco). Na hipérbole, b² = c² − a² = 16. A equação é y²/9 − x²/16 = 1.\n\nx²/9 − y²/16 = 1 põe o eixo real na horizontal. y²/16 − x²/9 = 1 troca a² e b². y²/9 + x²/16 = 1 é uma elipse. E y²/9 − x²/34 = 1 usa b² = c² + a², a relação trocada.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "A equação x² − 4y² − 2x + 16y − 19 = 0 representa uma hipérbole. Qual é o seu centro?",
    opcoes: [
      "(−1, −2)",
      "(1, 8)",
      "(1, 2)",
      "(1, −2)",
      "(2, 1)",
    ],
    correta: 2,
    explicacao:
      "Completando quadrados: x² − 2x = (x − 1)² − 1, e −4y² + 16y = −4(y² − 4y) = −4(y − 2)² + 16. A equação fica (x − 1)² − 4(y − 2)² − 1 + 16 − 19 = 0, ou (x − 1)² − 4(y − 2)² = 4, isto é, (x − 1)²/4 − (y − 2)² = 1. O centro é (1, 2).\n\n(−1, −2) troca os dois sinais. (1, 8) esquece de pôr o 4 em evidência antes de completar o quadrado em y. (1, −2) erra o sinal da ordenada. E (2, 1) troca as coordenadas.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "A reta y = x + 2 corta a parábola y = x² em dois pontos. Qual é a distância entre eles?",
    opcoes: [
      "3",
      "18",
      "3√2",
      "√10",
      "5",
    ],
    correta: 2,
    explicacao:
      "Igualando: x² = x + 2, ou x² − x − 2 = 0, de raízes x = 2 e x = −1. Os pontos são (2, 4) e (−1, 1). A distância é √((2 + 1)² + (4 − 1)²) = √(9 + 9) = 3√2.\n\n3 é só a diferença das abscissas (ou das ordenadas), esquecendo a outra coordenada. 18 é o quadrado da distância. √10 usa x = 1 no lugar de x = −1, um erro de sinal na raiz. E 5 mede a distância de (2, 4) até (−1, 0), ponto do eixo x que não está na parábola.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "Qual é a equação da reta tangente à parábola y = x² no ponto (1, 1)?",
    opcoes: [
      "y = 2x − 1",
      "y = x",
      "y = 2x + 1",
      "y = −2x + 3",
      "y = x + 1",
    ],
    correta: 0,
    explicacao:
      "Uma reta pelo ponto (1, 1) tem equação y = m(x − 1) + 1. Na interseção com a parábola: x² − mx + m − 1 = 0, cujo discriminante é m² − 4m + 4 = (m − 2)². A reta é tangente quando há um único ponto comum, isto é, discriminante nulo: m = 2. A tangente é y = 2(x − 1) + 1 = 2x − 1.\n\ny = x passa por (1, 1), mas corta a parábola também em (0, 0). y = 2x + 1 tem a inclinação certa, mas não passa por (1, 1). y = −2x + 3 passa por (1, 1) com a inclinação de sinal trocado e corta a parábola em outro ponto, (−3, 9). E y = x + 1 nem passa por (1, 1).",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "Que conjunto de pontos do plano é descrito pela equação x² + y² − 2x + 4y + 5 = 0?",
    opcoes: [
      "Uma circunferência de raio √5",
      "Uma circunferência de raio 5",
      "Um único ponto",
      "O conjunto vazio",
      "Uma reta",
    ],
    correta: 2,
    explicacao:
      "Completando quadrados: (x − 1)² + (y + 2)² − 1 − 4 + 5 = 0, ou (x − 1)² + (y + 2)² = 0. Uma soma de quadrados só é zero quando os dois são zero: x = 1 e y = −2. A equação descreve apenas o ponto (1, −2) — uma “circunferência de raio zero”.\n\nRaio √5 lê o termo independente como r². Raio 5 usa o próprio termo independente como raio. O conjunto vazio apareceria se o segundo membro ficasse negativo, como em x² + y² − 2x + 4y + 6 = 0. E uma reta exigiria uma equação do 1º grau.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "Qual é o lugar geométrico dos pontos P do plano cuja distância ao ponto A(−1, 0) é o dobro da distância ao ponto B(2, 0)?",
    opcoes: [
      "A mediatriz do segmento AB",
      "Uma circunferência de centro (1/2, 0) e raio 3/2",
      "Uma circunferência de centro (3, 0) e raio 2",
      "Uma elipse de focos A e B",
      "Uma circunferência de centro (3, 0) e raio 4",
    ],
    correta: 2,
    explicacao:
      "Com P = (x, y): (x + 1)² + y² = 4[(x − 2)² + y²]. Desenvolvendo: x² + 2x + 1 + y² = 4x² − 16x + 16 + 4y², ou 3x² + 3y² − 18x + 15 = 0; dividindo por 3, x² + y² − 6x + 5 = 0. Completando o quadrado: (x − 3)² + y² = 4. É a circunferência de centro (3, 0) e raio 2, chamada circunferência de Apolônio. Conferindo: o ponto (1, 0) dista 2 de A e 1 de B.\n\nA mediatriz seria o lugar dos pontos equidistantes, com razão 1, e não 2. A circunferência de centro (1/2, 0) e raio 3/2 tem AB como diâmetro, o que não tem relação com a razão pedida. A elipse corresponde a soma de distâncias constante. E o raio 4 esquece de extrair a raiz.",
  },
  {
    materia: "exatas-militar",
    tema: "Geometria analítica: cônicas",
    dificuldade: "dificil",
    enunciado:
      "Numa elipse, o eixo menor tem o mesmo comprimento que a distância entre os focos. Qual é a excentricidade dessa elipse?",
    opcoes: [
      "1/2",
      "√3/2",
      "1",
      "√2",
      "√2/2",
    ],
    correta: 4,
    explicacao:
      "Eixo menor igual à distância focal significa 2b = 2c, ou b = c. Pela relação a² = b² + c² = 2c², vem a = c√2. A excentricidade é e = c/a = 1/√2 = √2/2.\n\n1/2 supõe a = 2c. √3/2 corresponde a b = a/2, e não a b = c. 1 é a excentricidade da parábola, e nenhuma elipse a atinge. E √2 inverte a razão, a/c, e daria um valor maior que 1. Numa elipse assim, os dois focos e os dois vértices do eixo menor são vértices de um quadrado centrado no centro da elipse.",
  },
];
