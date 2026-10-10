/* Triângulos e teorema de Pitágoras (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__triangulos-e-teorema-de-pitagoras.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__triangulos-e-teorema-de-pitagoras.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Os triângulos se classificam pelos lados em equilátero, isósceles e escaleno. Como se chama o triângulo que tem os três lados iguais?",
    opcoes: [
      "Isósceles",
      "Escaleno",
      "Equilátero",
      "Retângulo",
      "Obtusângulo",
    ],
    correta: 2,
    explicacao:
      "O triângulo que tem os três lados com a mesma medida é o equilátero. Nele, todos os ângulos internos também são iguais, e cada um mede 60°.\n\nO isósceles tem apenas dois lados iguais. O escaleno tem os três lados diferentes. Retângulo e obtusângulo são classificações pelos ângulos, e não pelos lados: o retângulo tem um ângulo reto, e o obtusângulo, um ângulo maior que 90°.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Um terreno triangular é cercado com lados de 5 m, 5 m e 8 m. Quanto aos lados, que tipo de triângulo o terreno forma?",
    opcoes: [
      "Equilátero",
      "Escaleno",
      "Retângulo",
      "Acutângulo",
      "Isósceles",
    ],
    correta: 4,
    explicacao:
      "Dois dos lados medem 5 cm, então o triângulo é isósceles. O terceiro lado, de 8 cm, é a base, e os dois ângulos da base são iguais.\n\nEquilátero exigiria os três lados iguais, e escaleno, os três diferentes. Retângulo e acutângulo classificam pelos ângulos, e não pelos lados; além disso, como 8² = 64 é maior que 5² + 5² = 50, esse triângulo tem um ângulo obtuso, e não é retângulo nem acutângulo.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Três varetas de 4 cm, 6 cm e 7 cm são unidas pelas pontas. Quanto aos lados, que tipo de triângulo elas formam?",
    opcoes: [
      "Isósceles",
      "Equilátero",
      "Escaleno",
      "Retângulo",
      "Obtusângulo",
    ],
    correta: 2,
    explicacao:
      "Os três lados têm medidas diferentes, 4, 6 e 7, então o triângulo é escaleno. Nenhum par de lados é igual, e por isso nenhum par de ângulos é igual.\n\nIsósceles exigiria dois lados iguais, e equilátero, os três. Retângulo e obtusângulo classificam pelos ângulos: aqui, 7² = 49 é menor que 4² + 6² = 52, então o maior ângulo é agudo, e o triângulo não é retângulo nem obtusângulo.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Num triângulo, dois ângulos internos medem 50° e 60°. Quanto mede o terceiro ângulo interno?",
    opcoes: [
      "70°",
      "110°",
      "130°",
      "80°",
      "60°",
    ],
    correta: 0,
    explicacao:
      "Os três ângulos internos de um triângulo somam 180°. Então o terceiro é 180° − 50° − 60° = 70°. Conferindo, 50° + 60° + 70° = 180°. Essa soma de 180° vale para qualquer triângulo, seja qual for a sua forma.\n\n110° é 180° − 70°, o suplemento do ângulo correto, que é o ângulo externo. 130° é 180° − 50°. 80° e 60° não completam 180° com 50° e 60°: 50 + 60 + 80 = 190 e 50 + 60 + 60 = 170.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Num triângulo retângulo, um dos ângulos agudos mede 35°. Quanto mede o outro ângulo agudo?",
    opcoes: [
      "145°",
      "35°",
      "65°",
      "125°",
      "55°",
    ],
    correta: 4,
    explicacao:
      "Num triângulo retângulo, um ângulo mede 90° e os outros dois somam 90°, pois os três somam 180°. O outro ângulo agudo é 90° − 35° = 55°. Conferindo, 90° + 35° + 55° = 180°. Os dois ângulos agudos de um triângulo retângulo são sempre complementares.\n\n145° é o suplemento de 35°. 35° repete o ângulo dado. 65° e 125° não completam 90° com 35°: 35 + 65 = 100 e 35 + 125 = 160.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Um triângulo isósceles tem ângulo de 40° no vértice, isto é, entre os dois lados iguais. Quanto mede cada ângulo da base?",
    opcoes: [
      "140°",
      "70°",
      "40°",
      "50°",
      "100°",
    ],
    correta: 1,
    explicacao:
      "Os três ângulos somam 180°, então os dois da base somam 180° − 40° = 140°. Como os ângulos da base de um triângulo isósceles são iguais, cada um mede 140° ÷ 2 = 70°. Conferindo, 40° + 70° + 70° = 180°.\n\n140° é a soma dos dois ângulos da base, e não a medida de cada um. 40° é o ângulo do vértice. 50° e 100° não completam 180° com as condições dadas.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Num triângulo equilátero, os três ângulos internos são iguais. Quanto mede cada um deles?",
    opcoes: [
      "30°",
      "90°",
      "45°",
      "120°",
      "60°",
    ],
    correta: 4,
    explicacao:
      "Os três ângulos são iguais e somam 180°, então cada um mede 180° ÷ 3 = 60°. Conferindo, 60° + 60° + 60° = 180°. Um triângulo equilátero é também equiângulo, pois lados iguais correspondem a ângulos iguais.\n\n30° dividiria 90° em três partes. 90° é o ângulo reto, que só pode aparecer uma vez num triângulo. 45° é metade de 90°. E 120° é o ângulo externo do triângulo equilátero, o suplemento de 60°.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "O perímetro de um triângulo é a soma dos seus três lados. Qual é o perímetro de um triângulo com lados de 7 cm, 9 cm e 12 cm?",
    opcoes: [
      "28",
      "14",
      "63",
      "21",
      "30",
    ],
    correta: 0,
    explicacao:
      "O perímetro é 7 + 9 + 12 = 28 cm. Conferindo em partes, 7 + 9 = 16, e 16 + 12 = 28. O perímetro mede o contorno do triângulo, e por isso é a soma das medidas dos três lados, sempre na mesma unidade. O semiperímetro, metade do perímetro, aparece em algumas fórmulas de área, mas não é o que o enunciado pede aqui.\n\n14 é a metade do perímetro, o semiperímetro. 63 multiplica 7 por 9. 21 soma só dois dos lados, 9 + 12. E 30 erra a soma dos três lados.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Um triângulo retângulo tem catetos de 3 cm e 4 cm. Qual é a medida da hipotenusa, em centímetros?",
    opcoes: [
      "7",
      "5",
      "12",
      "25",
      "3,5",
    ],
    correta: 1,
    explicacao:
      "Pelo teorema de Pitágoras, o quadrado da hipotenusa é a soma dos quadrados dos catetos: 3² + 4² = 9 + 16 = 25, então a hipotenusa mede √25 = 5 cm. Conferindo, 3, 4 e 5 formam a terna pitagórica mais conhecida.\n\n7 soma os catetos, 3 + 4. 12 multiplica os catetos. 25 é o quadrado da hipotenusa, sem extrair a raiz. E 3,5 é a média dos catetos.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Num triângulo retângulo, a hipotenusa mede 13 cm e um dos catetos mede 5 cm. Quanto mede o outro cateto, em centímetros?",
    opcoes: [
      "8",
      "18",
      "144",
      "12",
      "169",
    ],
    correta: 3,
    explicacao:
      "Pelo teorema de Pitágoras, o quadrado do cateto procurado é 13² − 5² = 169 − 25 = 144, então o cateto mede √144 = 12 cm. Conferindo, 5² + 12² = 25 + 144 = 169 = 13².\n\n8 é a diferença 13 − 5, e não a raiz da diferença dos quadrados. 18 soma os dois lados conhecidos. 144 é o quadrado do cateto, sem extrair a raiz. E 169 é o quadrado da hipotenusa.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Qual destas ternas de medidas pode ser formada pelos lados de um triângulo retângulo?",
    opcoes: [
      "5, 6 e 7",
      "4, 5 e 6",
      "7, 8 e 9",
      "6, 8 e 10",
      "3, 5 e 6",
    ],
    correta: 3,
    explicacao:
      "Numa terna pitagórica, o quadrado do maior número é igual à soma dos quadrados dos outros dois. Para 6, 8 e 10, 6² + 8² = 36 + 64 = 100 = 10². Por isso, o triângulo com esses lados é retângulo, com a hipotenusa de 10.\n\nNas outras ternas, isso não ocorre: 5² + 6² = 61, e 7² = 49; 4² + 5² = 41, e 6² = 36; 7² + 8² = 113, e 9² = 81; 3² + 5² = 34, e 6² = 36.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "facil",
    enunciado:
      "Um triângulo retângulo tem um ângulo reto, de 90°. Quanto somam as medidas dos outros dois ângulos?",
    opcoes: [
      "90°",
      "180°",
      "45°",
      "270°",
      "60°",
    ],
    correta: 0,
    explicacao:
      "Os três ângulos de um triângulo somam 180°, e como um deles mede 90°, os outros dois somam 180° − 90° = 90°. Por isso, os dois ângulos agudos de um triângulo retângulo são complementares.\n\n180° é a soma dos três ângulos, contando o reto. 45° seria a medida de cada um dos dois ângulos no triângulo retângulo isósceles, e não a soma. 270° e 60° não resultam de 180° − 90°.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Os ângulos internos de um triângulo medem x, 2x e 3x. Qual é o valor de x?",
    opcoes: [
      "36°",
      "60°",
      "30°",
      "20°",
      "45°",
    ],
    correta: 2,
    explicacao:
      "Os três ângulos somam 180°: x + 2x + 3x = 6x = 180°, então x = 30°. Os ângulos medem 30°, 60° e 90°, e o triângulo é retângulo. Conferindo, 30 + 60 + 90 = 180. Quando os ângulos são dados em função de uma mesma incógnita, basta somar os coeficientes: 1 + 2 + 3 = 6 partes iguais de 30°.\n\n36° daria ângulos de 36°, 72° e 108°, que somam 216°. 60° é o valor de 2x. 20° dá soma 120°. E 45° dá soma 270°.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Os ângulos internos de um triângulo medem (x + 10)°, (2x − 20)° e (x + 50)°. Qual é o valor de x?",
    opcoes: [
      "45",
      "35",
      "30",
      "40",
      "50",
    ],
    correta: 1,
    explicacao:
      "A soma dos ângulos é 180°: (x + 10) + (2x − 20) + (x + 50) = 4x + 40 = 180, então 4x = 140 e x = 35. Os ângulos medem 45°, 50° e 85°. Conferindo, 45 + 50 + 85 = 180. Somando os termos em x, 1 + 2 + 1 = 4x, e os números, 10 − 20 + 50 = 40, chega-se à equação 4x + 40 = 180.\n\n45, 30, 40 e 50 não fecham a soma de 180°: por exemplo, para x = 45, os ângulos medem 55°, 70° e 95°, que somam 220°.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Num triângulo, dois ângulos internos medem 55° e 65°. Quanto mede o ângulo externo relativo ao terceiro vértice?",
    opcoes: [
      "60°",
      "125°",
      "115°",
      "180°",
      "120°",
    ],
    correta: 4,
    explicacao:
      "O ângulo externo é igual à soma dos dois ângulos internos não adjacentes a ele: 55° + 65° = 120°. Pelo suplemento, o terceiro ângulo interno mede 180° − 55° − 65° = 60°, e o externo, 180° − 60° = 120°. Essa propriedade se chama teorema do ângulo externo.\n\n60° é o ângulo interno do terceiro vértice, e não o externo. 125° e 115° erram a soma por 5°. E 180° é a soma dos três ângulos internos.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Num triângulo isósceles, cada um dos ângulos da base mede 65°. Quanto mede o ângulo do vértice?",
    opcoes: [
      "65°",
      "50°",
      "115°",
      "130°",
      "25°",
    ],
    correta: 1,
    explicacao:
      "Os três ângulos somam 180°, e os dois da base somam 2 × 65° = 130°. O ângulo do vértice é 180° − 130° = 50°. Conferindo, 65° + 65° + 50° = 180°. A soma dos ângulos da base de um isósceles é sempre 180° menos o ângulo do vértice.\n\n65° é o ângulo de cada base. 115° é o suplemento de 65°. 130° é a soma dos dois ângulos da base. E 25° é a metade do ângulo correto.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Para existir um triângulo, cada lado deve ser menor que a soma dos outros dois. Qual destas ternas de medidas não forma um triângulo?",
    opcoes: [
      "3, 4 e 5",
      "5, 5 e 5",
      "6, 8 e 10",
      "4, 5 e 8",
      "3, 4 e 8",
    ],
    correta: 4,
    explicacao:
      "Com 3, 4 e 8, o maior lado, 8, é maior que a soma dos outros dois, 3 + 4 = 7. Então os lados menores não conseguem se encontrar, e o triângulo não existe. A condição de existência, chamada desigualdade triangular, pode ser testada comparando o maior lado com a soma dos outros dois.\n\nNas outras ternas, cada lado é menor que a soma dos outros dois: 3, 4 e 5 (5 < 7); 5, 5 e 5 (5 < 10); 6, 8 e 10 (10 < 14); e 4, 5 e 8 (8 < 9). Todas formam triângulos.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um triângulo tem dois lados de 7 cm e 10 cm. Qual das medidas abaixo pode ser a do terceiro lado, em centímetros?",
    opcoes: [
      "12",
      "3",
      "17",
      "2",
      "20",
    ],
    correta: 0,
    explicacao:
      "O terceiro lado deve ser maior que a diferença dos outros dois, 10 − 7 = 3, e menor que a soma, 10 + 7 = 17. Então ele está estritamente entre 3 e 17, e 12 cumpre essa condição.\n\n3 e 17 estão nos extremos, onde o triângulo se achata numa reta e não existe. 2 é menor que a diferença, e 20 é maior que a soma, e com nenhum deles os três lados se encontram.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um triângulo isósceles tem perímetro de 40 cm e a base mede 12 cm. Quanto mede cada um dos dois lados iguais?",
    opcoes: [
      "28",
      "16",
      "12",
      "14",
      "20",
    ],
    correta: 3,
    explicacao:
      "Os dois lados iguais somam 40 − 12 = 28 cm, então cada um mede 28 ÷ 2 = 14 cm. Conferindo, 14 + 14 + 12 = 40. Num triângulo isósceles, a soma dos dois lados iguais é o perímetro menos a base, e cada lado igual é a metade dessa soma.\n\n28 é a soma dos dois lados iguais, e não a medida de cada um. 16 e 20 fariam o perímetro passar de 40: 16 + 16 + 12 = 44 e 20 + 20 + 12 = 52. E 12 é a medida da base.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Uma rampa forma um triângulo retângulo com o chão, com base de 5 m e altura de 12 m. Qual é o comprimento da rampa, em metros?",
    opcoes: [
      "13",
      "17",
      "7",
      "169",
      "11",
    ],
    correta: 0,
    explicacao:
      "Pelo teorema de Pitágoras, a hipotenusa ao quadrado é 5² + 12² = 25 + 144 = 169, então a hipotenusa mede √169 = 13 cm. Conferindo, 13² = 169. A rampa é a hipotenusa do triângulo retângulo formado com o chão e a altura.\n\n17 soma os catetos, 5 + 12. 7 subtrai os catetos. 169 é o quadrado da hipotenusa, sem extrair a raiz. E 11 não tem relação com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Uma tábua de 17 m forma a hipotenusa de um triângulo retângulo, cujo cateto horizontal mede 8 m. Quanto mede o cateto vertical, em metros?",
    opcoes: [
      "9",
      "25",
      "225",
      "15",
      "12",
    ],
    correta: 3,
    explicacao:
      "O quadrado do cateto procurado é 17² − 8² = 289 − 64 = 225, então o cateto mede √225 = 15 cm. Conferindo, 8² + 15² = 64 + 225 = 289 = 17². Como a tábua é a hipotenusa, é o maior lado do triângulo, e o cateto vertical tem de ser menor que 17 m.\n\n9 é a diferença 17 − 8, e não a raiz da diferença dos quadrados. 25 soma os dois lados conhecidos. 225 é o quadrado do cateto, sem extrair a raiz. E 12 não tem relação com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um quadrado tem lado de 5 cm. Quanto mede a diagonal desse quadrado, em centímetros?",
    opcoes: [
      "10",
      "5√2",
      "5√3",
      "25",
      "5",
    ],
    correta: 1,
    explicacao:
      "A diagonal divide o quadrado em dois triângulos retângulos isósceles, de catetos 5 cm. Pelo teorema de Pitágoras, d² = 5² + 5² = 50, então d = √50 = 5√2 cm, cerca de 7,07 cm. Em geral, a diagonal do quadrado de lado L é L√2.\n\n10 é a soma de dois lados, que passa da diagonal. 5√3 é a diagonal de um cubo de aresta 5, e não de um quadrado. 25 é a área do quadrado. E 5 é o próprio lado.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem lados de 9 cm e 12 cm. Quanto mede a diagonal desse retângulo, em centímetros?",
    opcoes: [
      "21",
      "10,5",
      "144",
      "225",
      "15",
    ],
    correta: 4,
    explicacao:
      "A diagonal é a hipotenusa de um triângulo retângulo de catetos 9 e 12. Então d² = 9² + 12² = 81 + 144 = 225, e d = √225 = 15 cm. Conferindo, 9, 12 e 15 são múltiplos da terna 3, 4 e 5.\n\n21 soma os dois lados, que passa da diagonal. 10,5 é a média dos lados. 144 é o quadrado de um dos lados. E 225 é o quadrado da diagonal, sem extrair a raiz.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Uma escada de 5 m de comprimento está apoiada numa parede vertical, com a base a 3 m da parede. A que altura da parede a escada toca, em metros?",
    opcoes: [
      "2",
      "8",
      "5,8",
      "4",
      "16",
    ],
    correta: 3,
    explicacao:
      "A escada, a parede e o chão formam um triângulo retângulo, com hipotenusa 5 e um cateto 3. A altura h satisfaz h² = 5² − 3² = 25 − 9 = 16, então h = 4 m. Conferindo, 3² + 4² = 25.\n\n2 é a diferença 5 − 3. 8 soma os dois valores do enunciado. 5,8 é a raiz de 34, a soma dos quadrados, que calcularia a escada, e não a altura. E 16 é a altura ao quadrado.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um triângulo isósceles tem lados iguais de 10 cm e base de 12 cm. Qual é a altura relativa à base, em centímetros?",
    opcoes: [
      "10",
      "6",
      "64",
      "8",
      "7",
    ],
    correta: 3,
    explicacao:
      "A altura relativa à base divide o triângulo em dois triângulos retângulos, de hipotenusa 10 e base 6, a metade de 12. Então h² = 10² − 6² = 100 − 36 = 64, e h = 8 cm. Conferindo, 6² + 8² = 100. A altura relativa à base de um triângulo isósceles também é a mediana e a bissetriz do ângulo do vértice.\n\n10 é o lado igual do triângulo, e não a altura. 6 é a metade da base. 64 é a altura ao quadrado. E 7 não satisfaz, pois 6² + 7² = 85.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um triângulo retângulo tem catetos de 6 cm e 8 cm. Qual é a área desse triângulo, em centímetros quadrados?",
    opcoes: [
      "24",
      "48",
      "14",
      "10",
      "12",
    ],
    correta: 0,
    explicacao:
      "A área do triângulo é a metade do produto da base pela altura, e nos triângulos retângulos os catetos servem como base e altura: 6 × 8 ÷ 2 = 24 cm². Conferindo, o retângulo 6 por 8 tem área 48, e o triângulo é a metade dele.\n\n48 é a área do retângulo, sem dividir por 2. 14 soma os catetos. 10 é a hipotenusa. E 12 é a metade de 24, que divide duas vezes por 2.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um triângulo retângulo tem os dois catetos iguais a 1 cm. Quanto mede a hipotenusa, em centímetros?",
    opcoes: [
      "2",
      "√2",
      "1",
      "1,5",
      "√3",
    ],
    correta: 1,
    explicacao:
      "Pelo teorema de Pitágoras, h² = 1² + 1² = 2, então h = √2 cm, cerca de 1,414 cm. Essa é a diagonal do quadrado de lado 1. É a mesma razão entre a diagonal e o lado de qualquer quadrado.\n\n2 é o quadrado da hipotenusa, sem extrair a raiz. 1 é o valor de cada cateto. 1,5 é uma aproximação grosseira, pois 1,5² = 2,25. E √3 seria a hipotenusa de um triângulo com catetos 1 e √2.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Uma pipa está a 40 m de altura, presa a um fio esticado, e quem a segura está a 9 m de distância horizontal da vertical dela. Qual é o comprimento do fio, em metros?",
    opcoes: [
      "49",
      "41",
      "31",
      "1.681",
      "39",
    ],
    correta: 1,
    explicacao:
      "A hipotenusa ao quadrado é 9² + 40² = 81 + 1.600 = 1.681, e como 41 × 41 = 1.681, a hipotenusa mede 41 cm. Os números 9, 40 e 41 formam uma terna pitagórica. O fio esticado é a hipotenusa do triângulo retângulo formado pela altura e pela distância horizontal.\n\n49 soma os catetos. 31 é a diferença entre eles. 1.681 é o quadrado da hipotenusa, sem extrair a raiz. E 39 é um valor próximo, mas 39² = 1.521, que não é 1.681.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Num triângulo retângulo isósceles, os dois catetos são iguais. Quanto mede cada ângulo agudo?",
    opcoes: [
      "30°",
      "60°",
      "45°",
      "90°",
      "22,5°",
    ],
    correta: 2,
    explicacao:
      "Como os catetos são iguais, os ângulos opostos a eles também são iguais. Os dois ângulos agudos somam 90°, então cada um mede 90° ÷ 2 = 45°. Conferindo, 90° + 45° + 45° = 180°.\n\n30° e 60° são os ângulos agudos do triângulo retângulo com hipotenusa igual ao dobro de um cateto. 90° é o ângulo reto. E 22,5° seria a metade de um ângulo de 45°.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Tomando um ângulo externo em cada vértice de um triângulo, quanto somam os três ângulos externos?",
    opcoes: [
      "180°",
      "540°",
      "360°",
      "270°",
      "720°",
    ],
    correta: 2,
    explicacao:
      "Cada ângulo externo é 180° menos o ângulo interno do mesmo vértice. Somando os três, 3 × 180° − (soma dos internos) = 540° − 180° = 360°. Conferindo, essa soma de 360° vale para qualquer polígono convexo.\n\n180° é a soma dos ângulos internos, e não dos externos. 540° é 3 × 180°, sem descontar os ângulos internos. 270° e 720° não resultam dessa conta.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um dos ângulos de um triângulo é reto, e os outros dois medem x e 2x. Qual é o valor de x?",
    opcoes: [
      "45°",
      "60°",
      "30°",
      "15°",
      "90°",
    ],
    correta: 2,
    explicacao:
      "Como os três ângulos somam 180° e um deles é reto, os outros dois somam 90°: x + 2x = 3x = 90°, então x = 30°. Os ângulos medem 90°, 30° e 60°. Conferindo, 90 + 30 + 60 = 180. Como um dos ângulos é reto, os dois restantes somam 90°, e por isso a equação é x + 2x = 90°, e não 180°.\n\n45° faria x + 2x = 135°. 60° é o valor de 2x. 15° dá x + 2x = 45°. E 90° é o ângulo reto.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um triângulo equilátero tem lado de 6 cm. Qual é a altura desse triângulo, em centímetros?",
    opcoes: [
      "3√3",
      "6√3",
      "3",
      "9",
      "6",
    ],
    correta: 0,
    explicacao:
      "A altura divide o triângulo equilátero em dois triângulos retângulos, de hipotenusa 6 e base 3. Então h² = 6² − 3² = 36 − 9 = 27, e h = √27 = 3√3 cm, cerca de 5,2 cm. Em geral, a altura do triângulo equilátero de lado L é L√3/2. A altura de um triângulo equilátero também é mediana e bissetriz.\n\n6√3 é o dobro da altura. 3 é a metade do lado. 9 é o valor de 3 × 3, sem o fator √3, e 6 é o próprio lado.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um triângulo retângulo tem catetos de 9 cm e 12 cm. Qual é o perímetro desse triângulo, em centímetros?",
    opcoes: [
      "21",
      "36",
      "45",
      "30",
      "27",
    ],
    correta: 1,
    explicacao:
      "A hipotenusa é √(9² + 12²) = √225 = 15 cm. O perímetro é a soma dos três lados: 9 + 12 + 15 = 36 cm. Conferindo, os lados 9, 12 e 15 são múltiplos de 3, 4 e 5. Nessa terna, a hipotenusa 15 é o triplo de 5, pois 9, 12 e 15 são o triplo de 3, 4 e 5.\n\n21 soma só os catetos, esquecendo a hipotenusa. 45 é o triplo da hipotenusa. 30 e 27 não resultam da soma dos três lados.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Se os lados de um triângulo medem 5 cm, 12 cm e 13 cm, que tipo de triângulo ele é, em relação aos ângulos?",
    opcoes: [
      "Acutângulo",
      "Obtusângulo",
      "Retângulo",
      "Equilátero",
      "Isósceles",
    ],
    correta: 2,
    explicacao:
      "Como 5² + 12² = 25 + 144 = 169 = 13², o triângulo satisfaz a recíproca do teorema de Pitágoras, e o ângulo oposto ao lado maior é reto. Por isso, o triângulo é retângulo.\n\nAcutângulo e obtusângulo exigiriam que 13² fosse menor ou maior que 5² + 12², respectivamente, e os dois valores são iguais. Equilátero e isósceles classificam pelos lados, e os três lados são diferentes, então ele é escaleno.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Comparando o quadrado do maior lado com a soma dos quadrados dos outros dois, como se classifica, pelos ângulos, um triângulo de lados 6 cm, 7 cm e 10 cm?",
    opcoes: [
      "Obtusângulo",
      "Acutângulo",
      "Retângulo",
      "Isósceles",
      "Equilátero",
    ],
    correta: 0,
    explicacao:
      "Comparando o quadrado do maior lado com a soma dos quadrados dos outros dois: 10² = 100 é maior que 6² + 7² = 36 + 49 = 85. Quando isso acontece, o ângulo oposto ao maior lado é maior que 90°, e o triângulo é obtusângulo.\n\nAcutângulo exigiria 100 menor que 85, e retângulo exigiria 100 igual a 85. Isósceles e equilátero classificam pelos lados, e os três lados são diferentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um cabo de 13 m prende o topo de um poste vertical de 12 m de altura a um ponto do chão. Qual é a distância, em metros, entre a base do poste e o ponto de fixação do cabo?",
    opcoes: [
      "5",
      "1",
      "25",
      "7",
      "15",
    ],
    correta: 0,
    explicacao:
      "O poste, o chão e o cabo formam um triângulo retângulo, com hipotenusa 13 e cateto 12. A distância d satisfaz d² = 13² − 12² = 169 − 144 = 25, então d = 5 m. Conferindo, 5² + 12² = 13². O cabo do poste é a hipotenusa do triângulo, e por isso é maior que a altura do poste e que a distância no chão.\n\n1 é a diferença 13 − 12. 25 é a distância ao quadrado. 7 é a diferença 12 − 5, sem relação. E 15 soma o cabo e a distância.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "No plano cartesiano, os pontos A(0, 0) e B(3, 4) formam um segmento AB. Qual é a medida de AB, em unidades?",
    opcoes: [
      "7",
      "25",
      "5",
      "3,5",
      "12",
    ],
    correta: 2,
    explicacao:
      "A distância entre os pontos é a hipotenusa de um triângulo retângulo de catetos 3, na horizontal, e 4, na vertical: AB = √(3² + 4²) = √25 = 5 unidades. Conferindo, 3, 4 e 5 formam a terna pitagórica clássica.\n\n7 soma as diferenças das coordenadas, o que dá o caminho em degraus, e não a distância em linha reta. 25 é a distância ao quadrado. 3,5 é a média das coordenadas. E 12 é o produto delas.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Um barco vai em linha reta do ponto (2, 1) ao ponto (8, 9) de um mapa, com as unidades em km. Quantos quilômetros ele percorre?",
    opcoes: [
      "14",
      "100",
      "8",
      "10",
      "6",
    ],
    correta: 3,
    explicacao:
      "As diferenças das coordenadas são 8 − 2 = 6 na horizontal e 9 − 1 = 8 na vertical, que são os catetos de um triângulo retângulo. Então AB = √(6² + 8²) = √100 = 10 unidades. Conferindo, 6, 8 e 10 formam uma terna pitagórica.\n\n14 soma as diferenças das coordenadas, o que dá o caminho em degraus. 100 é a distância ao quadrado. 8 e 6 são os catetos, e não a hipotenusa.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Num triângulo, um ângulo externo mede 110° e um dos ângulos internos não adjacentes a ele mede 40°. Quanto mede o outro ângulo interno não adjacente?",
    opcoes: [
      "110°",
      "30°",
      "70°",
      "40°",
      "150°",
    ],
    correta: 2,
    explicacao:
      "O ângulo externo é a soma dos dois ângulos internos não adjacentes: 110° = 40° + x, então x = 70°. Conferindo, o ângulo interno adjacente ao externo mede 70°, o suplemento de 110°, e 40° + 70° + 70° = 180°. Essa relação evita calcular o ângulo interno adjacente: o externo é a soma dos dois internos não adjacentes.\n\n110° é o ângulo externo. 30° e 150° não completam 110° com 40°. E 40° é o outro ângulo não adjacente dado.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "media",
    enunciado:
      "Os ângulos internos de um triângulo são proporcionais a 2, 3 e 4. Quanto mede o maior ângulo?",
    opcoes: [
      "60°",
      "40°",
      "90°",
      "100°",
      "80°",
    ],
    correta: 4,
    explicacao:
      "As partes da razão somam 2 + 3 + 4 = 9, e cada parte vale 180° ÷ 9 = 20°. Os ângulos medem 40°, 60° e 80°, e o maior é 80°. Conferindo, 40 + 60 + 80 = 180. Quando os ângulos são proporcionais, cada parte da razão vale 180° dividido pela soma das partes.\n\n60° é o ângulo do meio, e 40°, o menor. 90° e 100° não têm razão 2 para 3 para 4 com os outros dois ângulos.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "A diagonal de um retângulo mede 17 cm e um dos lados mede 8 cm. Qual é o perímetro do retângulo, em centímetros?",
    opcoes: [
      "46",
      "23",
      "34",
      "30",
      "120",
    ],
    correta: 0,
    explicacao:
      "O outro lado é o cateto de um triângulo retângulo de hipotenusa 17 e cateto 8: 17² − 8² = 289 − 64 = 225, então o lado mede 15 cm. O perímetro é 2 × (8 + 15) = 46 cm. Conferindo, 8² + 15² = 64 + 225 = 289 = 17².\n\n23 é o semiperímetro, a soma dos dois lados diferentes. 34 é o dobro da diagonal. 30 é o dobro do lado de 15. E 120 é a área, 8 × 15, e não o perímetro.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Um painel triangular equilátero tem 10 dm de lado. A que altura, em dm, fica o vértice mais alto quando a base está apoiada no chão?",
    opcoes: [
      "10√3",
      "5",
      "5√3",
      "8",
      "10",
    ],
    correta: 2,
    explicacao:
      "A altura divide o triângulo em dois triângulos retângulos, de hipotenusa 10 e base 5. Então h² = 10² − 5² = 100 − 25 = 75, e h = √75 = 5√3 cm, cerca de 8,66 cm. Conferindo, (5√3)² = 25 × 3 = 75. Em geral, a altura do triângulo equilátero é L√3/2.\n\n10√3 é o dobro da altura. 5 é a metade do lado. 8 é uma aproximação inteira da altura, que dá 8² + 5² = 89, e não 100. E 10 é o próprio lado.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Uma escada de 13 m tem a base a 5 m da parede. Se o topo da escada descer 1 m pela parede, em quantos metros, aproximadamente, a base se afastará da parede?",
    opcoes: [
      "1",
      "2",
      "1,5",
      "≈ 2,4",
      "≈ 1,9",
    ],
    correta: 4,
    explicacao:
      "Inicialmente, o topo está a √(13² − 5²) = 12 m de altura. Depois de descer 1 m, fica a 11 m, e a base passa a estar a √(13² − 11²) = √48 ≈ 6,93 m da parede. O afastamento é 6,93 − 5 ≈ 1,93 m, isto é, cerca de 1,9 m.\n\n1 supõe que a base se afasta o mesmo que o topo desce, o que não vale. 2 é uma aproximação por cima, e 1,5 uma por baixo. E 2,4 corresponde a uma descida maior que 1 m.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Um losango tem diagonais de 16 cm e 12 cm. Quanto mede cada lado do losango, em centímetros?",
    opcoes: [
      "14",
      "10",
      "20",
      "28",
      "7",
    ],
    correta: 1,
    explicacao:
      "As diagonais do losango se cortam ao meio, em ângulo reto, formando quatro triângulos retângulos de catetos 8 e 6. O lado é a hipotenusa: √(8² + 6²) = √100 = 10 cm. Conferindo, o perímetro é 40 cm. Como o lado é a hipotenusa dos triângulos formados pelas metades das diagonais, ele é maior que cada metade.\n\n14 soma os catetos. 20 é o dobro do lado, e 28 é a soma das diagonais, que não é o lado. E 7 é a média dos catetos.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Um triângulo retângulo tem hipotenusa de 13 cm e um cateto de 5 cm. Qual é a área desse triângulo, em centímetros quadrados?",
    opcoes: [
      "60",
      "32,5",
      "65",
      "17",
      "30",
    ],
    correta: 4,
    explicacao:
      "O outro cateto é √(13² − 5²) = √144 = 12 cm. A área é a metade do produto dos catetos: 5 × 12 ÷ 2 = 30 cm². Conferindo, o retângulo 5 por 12 tem área 60, e o triângulo é a metade. O outro cateto, 12, completa a terna pitagórica 5, 12 e 13.\n\n60 é a área do retângulo, sem dividir por 2. 32,5 usa a hipotenusa como base e altura, 13 × 5 ÷ 2. 65 é 13 × 5. E 17 soma os catetos.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "As medidas dos lados de um triângulo retângulo são x, x + 1 e x + 2, em centímetros, sendo x + 2 a hipotenusa. Qual é o valor de x?",
    opcoes: [
      "4",
      "3",
      "5",
      "1",
      "12",
    ],
    correta: 1,
    explicacao:
      "Pelo teorema de Pitágoras, x² + (x + 1)² = (x + 2)². Desenvolvendo, x² + x² + 2x + 1 = x² + 4x + 4, isto é, x² − 2x − 3 = 0, e como (x − 3)(x + 1) = 0, a solução positiva é x = 3. Os lados medem 3, 4 e 5, e 3² + 4² = 25 = 5².\n\n4 daria lados 4, 5 e 6, com 4² + 5² = 41, e não 36. 5 daria 5, 6 e 7, com 61, e não 49. 1 daria 1, 2 e 3, que nem formam triângulo. E 12 daria 12, 13 e 14, com 313, e não 196.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Um telhado tem a forma de um triângulo isósceles, com duas águas de 13 m e uma base de 10 m. Qual é a altura da cumeeira, em metros?",
    opcoes: [
      "8",
      "11",
      "24",
      "12",
      "144",
    ],
    correta: 3,
    explicacao:
      "A altura relativa à base divide o triângulo em dois triângulos retângulos, de hipotenusa 13 e base 5, a metade de 10. Então h² = 13² − 5² = 169 − 25 = 144, e h = 12 cm. Conferindo, 5² + 12² = 13². A cumeeira fica no ponto mais alto do telhado, sobre o meio da base.\n\n8 e 11 ficam abaixo de 12: com 8, o lado seria √89, e com 11, √146. 24 é o dobro da altura. E 144 é a altura ao quadrado.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Um triângulo retângulo tem catetos de 6 cm e 8 cm e hipotenusa de 10 cm. Qual é a altura relativa à hipotenusa, em centímetros?",
    opcoes: [
      "5",
      "4",
      "6",
      "2,4",
      "4,8",
    ],
    correta: 4,
    explicacao:
      "A área do triângulo pode ser calculada de duas formas: pelos catetos, 6 × 8 ÷ 2 = 24, e pela hipotenusa e a altura relativa a ela, 10 × h ÷ 2 = 5h. Igualando, 5h = 24, e h = 4,8 cm. Conferindo, 10 × 4,8 ÷ 2 = 24.\n\n5 é a metade da hipotenusa, a mediana relativa a ela. 4 e 6 não igualam as duas áreas: 10 × 4 ÷ 2 = 20 e 10 × 6 ÷ 2 = 30. E 2,4 é a metade da altura correta.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Uma estrada reta liga duas cidades, nos pontos (1, −1) e (9, 14) de um mapa com unidades em km. Qual é o comprimento da estrada, em km?",
    opcoes: [
      "23",
      "13",
      "289",
      "17",
      "7",
    ],
    correta: 3,
    explicacao:
      "As diferenças das coordenadas são 9 − 1 = 8 na horizontal e 14 − (−1) = 15 na vertical. Então AB = √(8² + 15²) = √(64 + 225) = √289 = 17 unidades. Conferindo, 8, 15 e 17 formam uma terna pitagórica.\n\n23 soma as diferenças das coordenadas, o que dá o caminho em degraus. 13 subtrai 14 − 1, esquecendo o sinal da coordenada −1. 289 é a distância ao quadrado. E 7 é a diferença entre as diferenças.",
  },
  {
    materia: "matematica-fund",
    tema: "Triângulos e teorema de Pitágoras",
    dificuldade: "dificil",
    enunciado:
      "Um terreno em forma de triângulo retângulo tem um lado de 5 m, e uma cerca de 30 m contorna o terreno todo. Quanto mede o outro lado que forma o ângulo reto com esse, em metros?",
    opcoes: [
      "13",
      "10",
      "8",
      "12",
      "15",
    ],
    correta: 3,
    explicacao:
      "Chamando o outro cateto de b e a hipotenusa de c, tem-se 5 + b + c = 30, isto é, c = 25 − b, e 5² + b² = c². Substituindo, 25 + b² = (25 − b)² = 625 − 50b + b², então 50b = 600 e b = 12, e c = 13. Conferindo, 5 + 12 + 13 = 30 e 5² + 12² = 13².\n\n13 é a hipotenusa. 10 e 8 não fecham o perímetro de 30 com a condição de Pitágoras: para b = 10, c seria √125, e o perímetro, cerca de 26,2. E 15 daria c = √250 e perímetro de cerca de 35,8.",
  },
];
