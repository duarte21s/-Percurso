/* Área e perímetro de figuras planas (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__area-e-perimetro-de-figuras-planas.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__area-e-perimetro-de-figuras-planas.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "A área de um retângulo é o produto do comprimento pela largura. Qual é a área de um retângulo de 8 cm por 5 cm, em centímetros quadrados?",
    opcoes: [
      "26",
      "40",
      "13",
      "80",
      "45",
    ],
    correta: 1,
    explicacao:
      "A área é 8 × 5 = 40 cm², isto é, cabem 40 quadradinhos de 1 cm de lado no retângulo: 5 fileiras de 8. Conferindo, 40 ÷ 5 = 8. A unidade de área é sempre uma unidade de comprimento elevada ao quadrado, por isso o resultado vem em cm².\n\n26 é o perímetro, 2 × (8 + 5), e não a área. 13 é o semiperímetro, 8 + 5. 80 é o dobro da área, como se o produto fosse multiplicado por 2. E 45 soma 40 e 5, sem relação com a figura.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "O perímetro de uma figura é a soma das medidas dos seus lados. Qual é o perímetro de um retângulo de 8 cm por 5 cm, em centímetros?",
    opcoes: [
      "40",
      "13",
      "80",
      "26",
      "18",
    ],
    correta: 3,
    explicacao:
      "O retângulo tem dois lados de 8 cm e dois de 5 cm, então o perímetro é 8 + 5 + 8 + 5 = 26 cm, ou 2 × (8 + 5) = 26. Conferindo, contornar o retângulo dá 16 cm nos dois comprimentos e 10 cm nas duas larguras.\n\n40 é a área, 8 × 5, e não o perímetro. 13 é a metade do perímetro, pois soma só um comprimento e uma largura. 80 é o dobro da área. E 18 esquece uma das larguras.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Qual é a área de um quadrado de lado 7 cm, em centímetros quadrados?",
    opcoes: [
      "28",
      "14",
      "49",
      "21",
      "7",
    ],
    correta: 2,
    explicacao:
      "A área do quadrado é o lado ao quadrado: 7 × 7 = 49 cm². Conferindo, o quadrado de 7 por 7 tem 7 fileiras de 7 quadradinhos unitários, isto é, 49. Num quadrado, o comprimento e a largura são iguais, por isso a área é o lado multiplicado por ele mesmo, e o resultado vem em cm².\n\n28 é o perímetro, 4 × 7, e não a área. 14 é o dobro do lado. 21 é o triplo do lado. E 7 é o próprio lado, sem multiplicá-lo por ele mesmo.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Um quadrado tem perímetro de 24 cm. Quanto mede cada lado desse quadrado, em centímetros?",
    opcoes: [
      "24",
      "96",
      "12",
      "8",
      "6",
    ],
    correta: 4,
    explicacao:
      "Os quatro lados do quadrado são iguais, então cada um mede 24 ÷ 4 = 6 cm. Conferindo, 4 × 6 = 24. O perímetro do quadrado é sempre 4 vezes o lado, e por isso o lado é o perímetro dividido por 4, sem precisar conhecer a área.\n\n24 é o perímetro, e não o lado. 96 multiplica o perímetro por 4. 12 divide por 2, como se a figura só tivesse dois lados. E 8 divide por 3, como se fosse um triângulo equilátero.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Um triângulo tem base de 10 cm e altura de 6 cm. Qual é a área desse triângulo, em centímetros quadrados?",
    opcoes: [
      "60",
      "16",
      "36",
      "15",
      "30",
    ],
    correta: 4,
    explicacao:
      "A área do triângulo é a metade do produto da base pela altura: 10 × 6 ÷ 2 = 30 cm². Conferindo, o retângulo de 10 por 6 tem área 60, e o triângulo ocupa exatamente metade dele. Qualquer triângulo com essa base e essa altura tem a mesma área, pois a fórmula não depende de onde fica o vértice superior.\n\n60 é a área do retângulo, sem dividir por 2. 16 soma a base e a altura. 36 é 6 × 6. E 15 divide por 2 duas vezes, sem justificativa.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Um paralelogramo tem base de 9 cm e altura de 4 cm. Qual é a área desse paralelogramo, em centímetros quadrados?",
    opcoes: [
      "18",
      "26",
      "13",
      "40",
      "36",
    ],
    correta: 4,
    explicacao:
      "A área do paralelogramo é o produto da base pela altura: 9 × 4 = 36 cm². Cortando um triângulo de um lado e colando no outro, o paralelogramo se transforma num retângulo de 9 por 4.\n\n18 é a metade da área, como se fosse um triângulo. 26 é o perímetro de um retângulo de 9 por 4. 13 soma a base e a altura. E 40 não tem relação com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "As diagonais de um losango medem 10 cm e 6 cm. Qual é a área desse losango, em centímetros quadrados?",
    opcoes: [
      "60",
      "16",
      "32",
      "15",
      "30",
    ],
    correta: 4,
    explicacao:
      "A área do losango é o produto das diagonais dividido por 2: 10 × 6 ÷ 2 = 30 cm². As diagonais dividem o losango em quatro triângulos retângulos iguais, de catetos 5 e 3, e cada um tem área 7,5, então o total é 30. Essa fórmula vale para qualquer losango.\n\n60 é o produto das diagonais, sem dividir por 2. 16 soma as diagonais. 32 é o dobro da soma. E 15 divide por 2 duas vezes.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Um trapézio tem bases de 7 cm e 3 cm e altura de 4 cm. Qual é a área desse trapézio, em centímetros quadrados?",
    opcoes: [
      "40",
      "28",
      "10",
      "20",
      "21",
    ],
    correta: 3,
    explicacao:
      "A área do trapézio é a soma das bases, vezes a altura, dividida por 2: (7 + 3) × 4 ÷ 2 = 20 cm². Conferindo, a média das bases é 5, e 5 × 4 = 20. Nos trapézios, a altura é sempre medida perpendicularmente às bases, e não ao longo do lado oblíquo.\n\n40 é o produto da soma das bases pela altura, sem dividir por 2. 28 é o produto de 7 por 4. 10 é a soma das bases, sem multiplicar pela altura. E 21 é o produto de 7 por 3.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Usando π = 3,14, qual é a área de um círculo de raio 5 cm, em centímetros quadrados?",
    opcoes: [
      "78,5",
      "31,4",
      "15,7",
      "157",
      "25",
    ],
    correta: 0,
    explicacao:
      "A área do círculo é πr²: 3,14 × 5² = 3,14 × 25 = 78,5 cm². Conferindo, o círculo cabe num quadrado de lado 10, de área 100, e ocupa um pouco menos de 4/5 dele, o que combina com 78,5.\n\n31,4 é o comprimento da circunferência, 2 × 3,14 × 5. 15,7 é a metade desse comprimento. 157 é 3,14 × 50, com o raio mal elevado. E 25 é o quadrado do raio, sem multiplicar por π.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Usando π = 3,14, qual é o comprimento de uma circunferência de raio 5 cm, em centímetros?",
    opcoes: [
      "78,5",
      "15,7",
      "62,8",
      "10",
      "31,4",
    ],
    correta: 4,
    explicacao:
      "O comprimento da circunferência é 2πr = 2 × 3,14 × 5 = 31,4 cm. Como o diâmetro é 10 cm, a circunferência mede cerca de 3,14 diâmetros. O comprimento de uma circunferência é sempre um pouco mais que o triplo do diâmetro, e aqui o diâmetro é 10 cm.\n\n78,5 é a área do círculo. 15,7 é a metade do comprimento, πr. 62,8 é o dobro do comprimento, 4πr. E 10 é o diâmetro, e não o comprimento.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "Uma mesa ocupa 3 m² do piso de uma sala. Sabendo que 1 m² equivale a 10.000 cm², quantos centímetros quadrados do piso ela ocupa?",
    opcoes: [
      "300",
      "3.000",
      "30.000",
      "300.000",
      "30",
    ],
    correta: 2,
    explicacao:
      "Como 1 m = 100 cm, um quadrado de 1 m de lado tem 100 × 100 = 10.000 cm². Então 3 m² são 3 × 10.000 = 30.000 cm². Por isso a conversão de áreas usa o fator 10.000, e não 100.\n\n300 multiplica por 100, que vale para medidas de comprimento, mas não para áreas. 3.000 multiplica por 1.000. 300.000 multiplica por 100.000. E 30 é o resultado de dividir 3 por 0,1, sem relação com a conversão de áreas.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "facil",
    enunciado:
      "A área de um quadrado é 64 cm². Quanto mede o lado desse quadrado, em centímetros?",
    opcoes: [
      "8",
      "16",
      "32",
      "4",
      "64",
    ],
    correta: 0,
    explicacao:
      "O lado é a raiz quadrada da área: √64 = 8 cm, pois 8 × 8 = 64. Conferindo, o perímetro desse quadrado é 4 × 8 = 32 cm. Para voltar da área ao lado, extrai-se a raiz quadrada, operação inversa de elevar o lado ao quadrado. Como 8 × 8 = 64, o lado é 8, e não 64 ÷ 2 = 32, que seria a metade da área. O perímetro, 4 × 8 = 32, também é uma confusão comum com esse valor.\n\n16 é o dobro do lado. 32 é o perímetro. 4 é a raiz quadrada de 16, e não de 64. E 64 é a própria área.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem perímetro de 30 cm e largura de 5 cm. Qual é a área desse retângulo, em centímetros quadrados?",
    opcoes: [
      "50",
      "75",
      "100",
      "25",
      "150",
    ],
    correta: 0,
    explicacao:
      "O semiperímetro é 30 ÷ 2 = 15, então o comprimento é 15 − 5 = 10 cm. A área é 10 × 5 = 50 cm². Conferindo, o perímetro é 2 × (10 + 5) = 30. O semiperímetro é a soma do comprimento com a largura, e é o ponto de partida para descobrir o lado que falta.\n\n75 multiplica 15 por 5, usando o semiperímetro como comprimento. 100 é 10 × 10. 25 é 5 × 5. E 150 é 30 × 5, usando o perímetro como comprimento.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma sala de 6 m por 4 m será coberta com placas quadradas de 0,5 m de lado. Quantas placas serão necessárias?",
    opcoes: [
      "24",
      "48",
      "100",
      "12",
      "96",
    ],
    correta: 4,
    explicacao:
      "A sala tem 6 × 4 = 24 m², e cada placa cobre 0,5 × 0,5 = 0,25 m². O número de placas é 24 ÷ 0,25 = 96. Pelas fileiras, cabem 12 placas no comprimento e 8 na largura, e 12 × 8 = 96.\n\n24 é a área da sala em m², sem dividir pela área de cada placa. 48 supõe placas de 0,5 m² cada. 100 é um arredondamento. E 12 é o número de placas de uma só fileira.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um terreno quadrado de 25 m de lado será cercado com 4 voltas de arame. Quantos metros de arame são necessários?",
    opcoes: [
      "100",
      "625",
      "400",
      "2.500",
      "200",
    ],
    correta: 2,
    explicacao:
      "O perímetro do terreno é 4 × 25 = 100 m, que é uma volta de arame. Com 4 voltas, são 4 × 100 = 400 m. Nesse tipo de problema, primeiro se calcula o contorno de uma volta, o perímetro, e depois se multiplica pelo número de voltas, sem usar a área do terreno, que não tem relação com o comprimento do arame.\n\n100 é o arame de uma só volta. 625 é a área do terreno, 25 × 25. 2.500 é a área multiplicada por 4. E 200 é o arame de duas voltas.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma parede de 4 m por 3 m será pintada com uma tinta em que cada litro cobre 6 m². Quantos litros são necessários?",
    opcoes: [
      "12",
      "6",
      "0,5",
      "4",
      "2",
    ],
    correta: 4,
    explicacao:
      "A área da parede é 4 × 3 = 12 m². Como cada litro cobre 6 m², são necessários 12 ÷ 6 = 2 litros. Conferindo, 2 litros cobrem 2 × 6 = 12 m². O rendimento da tinta relaciona litros e metros quadrados, e por isso é a área da parede, e não o perímetro, que decide a quantidade de tinta.\n\n12 é a área da parede, sem dividir pelo rendimento. 6 é o rendimento de cada litro. 0,5 inverte a divisão, 6 ÷ 12. E 4 é a largura da parede.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Se o lado de um quadrado dobra, por quanto fica multiplicada a área do quadrado?",
    opcoes: [
      "2",
      "8",
      "16",
      "4",
      "3",
    ],
    correta: 3,
    explicacao:
      "Com lado L, a área é L². Com lado 2L, a área é (2L)² = 4L², quatro vezes a anterior. Conferindo, o quadrado de lado 3 tem área 9, e o de lado 6 tem área 36, que é 4 × 9. Em geral, multiplicar os lados de uma figura por k multiplica a área por k².\n\n2 seria o fator para o perímetro, que dobra junto com o lado. 8 e 16 são fatores maiores que o correto. E 3 não tem relação com o dobro do lado.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Se os dois lados de um retângulo são multiplicados por 3, por quanto fica multiplicada a área do retângulo?",
    opcoes: [
      "3",
      "6",
      "27",
      "9",
      "12",
    ],
    correta: 3,
    explicacao:
      "Com lados a e b, a área é a × b. Com lados 3a e 3b, a área é 3a × 3b = 9ab, nove vezes a anterior. Conferindo, o retângulo de 2 por 3 tem área 6, e o de 6 por 9 tem área 54, que é 9 × 6. Por isso, ampliar uma figura em 3 vezes exige 9 vezes mais tinta para pintá-la.\n\n3 é o fator do perímetro, e não o da área. 6 é o dobro de 3. 27 é 3³, usado em volumes. E 12 não tem relação com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "No plano cartesiano, um triângulo tem vértices em (0, 0), (8, 0) e (3, 5). Qual é a área desse triângulo, em unidades quadradas?",
    opcoes: [
      "40",
      "15",
      "20",
      "24",
      "12",
    ],
    correta: 2,
    explicacao:
      "A base está no eixo x, de (0, 0) a (8, 0), e mede 8. A altura é a distância do vértice (3, 5) ao eixo x, isto é, 5. A área é 8 × 5 ÷ 2 = 20. Note que a posição horizontal do vértice, x = 3, não altera a altura.\n\n40 é o produto da base pela altura, sem dividir por 2. 15 usa a abscissa 3 como altura. 24 e 12 não saem de nenhuma combinação correta das coordenadas.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma peça metálica tem a forma de um trapézio, com lados paralelos de 12 cm e 6 cm, distantes 5 cm um do outro. Qual é a área da peça, em centímetros quadrados?",
    opcoes: [
      "45",
      "90",
      "30",
      "60",
      "22,5",
    ],
    correta: 0,
    explicacao:
      "A área do trapézio é (12 + 6) × 5 ÷ 2 = 18 × 5 ÷ 2 = 45 cm². Conferindo, a média das bases é 9, e 9 × 5 = 45. A altura é a distância perpendicular entre os lados paralelos, e por isso o lado oblíquo não entra na conta da área, apenas na do perímetro.\n\n90 é o produto da soma das bases pela altura, sem dividir por 2. 30 é o produto de 6 por 5. 60 é o produto de 12 por 5. E 22,5 divide por 2 duas vezes.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma pipa em forma de losango tem varetas cruzadas de 14 cm e 8 cm, que são as diagonais. Qual é a área do papel da pipa, em centímetros quadrados?",
    opcoes: [
      "112",
      "22",
      "56",
      "28",
      "44",
    ],
    correta: 2,
    explicacao:
      "A área do losango é D × d ÷ 2 = 14 × 8 ÷ 2 = 56 cm². Conferindo, o losango se divide em quatro triângulos retângulos de catetos 7 e 4, e cada um tem área 14, então o total é 56. As duas varetas se cruzam em ângulo reto, e por isso são as diagonais do losango.\n\n112 é o produto das diagonais, sem dividir por 2. 22 soma as diagonais. 28 divide o produto por 4 em vez de por 2. E 44 não tem relação com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Usando π = 3,14, quantos metros uma roda de raio 0,5 m percorre em uma volta completa?",
    opcoes: [
      "1,57",
      "0,785",
      "3,14",
      "6,28",
      "7,85",
    ],
    correta: 2,
    explicacao:
      "Em uma volta, a roda percorre o comprimento da circunferência: 2 × 3,14 × 0,5 = 3,14 m. Como o diâmetro é 1 m, a roda percorre π diâmetros por volta. Por isso, em 10 voltas, a roda percorre 31,4 m, pois cada volta desenrola o comprimento da circunferência.\n\n1,57 é metade do comprimento, πr. 0,785 é a área do círculo, π × 0,5². 6,28 é o dobro do comprimento correto. E 7,85 é 3,14 × 2,5, sem relação com a roda.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Usando π = 3,14, qual é a área de um círculo de diâmetro 8 cm, em centímetros quadrados?",
    opcoes: [
      "25,12",
      "200,96",
      "50,24",
      "12,56",
      "64",
    ],
    correta: 2,
    explicacao:
      "O raio é metade do diâmetro, 8 ÷ 2 = 4 cm, então a área é 3,14 × 4² = 3,14 × 16 = 50,24 cm². Conferindo, o círculo cabe num quadrado de lado 8, de área 64, e ocupa cerca de 78,5% dele.\n\n25,12 é o comprimento da circunferência, 2 × 3,14 × 4. 200,96 usa o diâmetro no lugar do raio, 3,14 × 8². 12,56 é o dobro do raio vezes π. E 64 é a área do quadrado que contém o círculo.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um terreno retangular de 20 m por 30 m será cercado com muro, deixando um portão de 3 m sem muro. Quantos metros de muro serão construídos?",
    opcoes: [
      "97",
      "100",
      "103",
      "600",
      "94",
    ],
    correta: 0,
    explicacao:
      "O perímetro do terreno é 2 × (20 + 30) = 100 m. Descontando o portão de 3 m, o muro terá 100 − 3 = 97 m. O muro acompanha o contorno do terreno, e por isso se calcula com o perímetro, e não com a área, e a abertura do portão reduz o comprimento construído.\n\n100 é o perímetro completo, sem descontar o portão. 103 soma o portão em vez de descontá-lo. 600 é a área do terreno. E 94 desconta o portão duas vezes.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma região em L é obtida retirando um retângulo de 4 cm por 3 cm de um canto de um retângulo de 10 cm por 6 cm. Qual é a área dessa região, em centímetros quadrados?",
    opcoes: [
      "72",
      "60",
      "48",
      "42",
      "24",
    ],
    correta: 2,
    explicacao:
      "O retângulo maior tem área 10 × 6 = 60 cm², e o retirado, 4 × 3 = 12 cm². A região em L tem 60 − 12 = 48 cm². Conferindo, dividindo o L em duas partes, 6 × 6 = 36 e 4 × 3 = 12, somam 48. A subtração de áreas é a forma mais rápida de calcular regiões com um canto retirado.\n\n72 soma as áreas em vez de subtrair. 60 é a área do retângulo inteiro, sem descontar o canto. 42 e 24 não saem das áreas dadas.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma figura é formada por um retângulo de 8 cm por 4 cm com um triângulo de base 8 cm e altura 3 cm apoiado no lado maior. Qual é a área da figura, em centímetros quadrados?",
    opcoes: [
      "56",
      "35",
      "96",
      "38",
      "44",
    ],
    correta: 4,
    explicacao:
      "O retângulo tem área 8 × 4 = 32 cm², e o triângulo, 8 × 3 ÷ 2 = 12 cm². A figura tem 32 + 12 = 44 cm². Conferindo, como o triângulo está apoiado no retângulo sem sobreposição, as áreas se somam.\n\n56 usa a base do triângulo vezes a altura, sem dividir por 2. 35 e 38 não saem das duas áreas. E 96 é o produto 8 × 12, sem relação com a figura.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um triângulo tem área de 24 cm² e base de 8 cm. Qual é a altura correspondente a essa base, em centímetros?",
    opcoes: [
      "6",
      "3",
      "12",
      "24",
      "8",
    ],
    correta: 0,
    explicacao:
      "Pela fórmula, 24 = 8 × h ÷ 2, isto é, 24 = 4h, então h = 6 cm. Conferindo, 8 × 6 ÷ 2 = 24. Nesse tipo de problema, a fórmula da área é usada ao contrário: multiplicam-se os dois lados por 2 e divide-se pela base. A conta 2 × 24 ÷ 8 = 6 dá o mesmo resultado que isolar h na equação, e confirma que a altura é menor que a base, o que é esperado para uma área de 24 com base de 8.\n\n3 é a área dividida por 8, sem multiplicar por 2. 12 é o dobro da altura correta. 24 é a própria área. E 8 é a própria base.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem área de 72 cm² e largura de 6 cm. Qual é o perímetro desse retângulo, em centímetros?",
    opcoes: [
      "18",
      "36",
      "72",
      "24",
      "78",
    ],
    correta: 1,
    explicacao:
      "O comprimento é 72 ÷ 6 = 12 cm. O perímetro é 2 × (12 + 6) = 36 cm. Conferindo, 12 × 6 = 72. Nesse tipo de problema, a área é usada para descobrir o lado que falta, dividindo a área pelo lado conhecido: o comprimento é 72 ÷ 6 = 12 cm. Só depois de descobrir os dois lados é possível calcular o perímetro, somando todos os lados ou dobrando a soma do comprimento com a largura, como se faz com qualquer retângulo.\n\n18 é o semiperímetro, 12 + 6. 72 é a área. 24 é o dobro do comprimento. E 78 soma a área e a largura.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um quadrado tem perímetro de 36 cm. Qual é a área desse quadrado, em centímetros quadrados?",
    opcoes: [
      "36",
      "81",
      "9",
      "144",
      "324",
    ],
    correta: 1,
    explicacao:
      "O lado é 36 ÷ 4 = 9 cm, e a área é 9 × 9 = 81 cm². Conferindo, 4 × 9 = 36. O caminho é sempre o mesmo: do perímetro se obtém o lado, dividindo por 4, e do lado se obtém a área, elevando ao quadrado. Não se pode elevar o perímetro ao quadrado nem dividi-lo por 2 para chegar à área, pois essas operações dariam 1.296 e 18, valores sem relação com o quadrado.\n\n36 é o perímetro, e não a área. 9 é o lado. 144 é 12², usando 12 como lado, que seria um perímetro de 48. E 324 é 18², usando o semiperímetro como lado.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um quadrado tem área de 121 cm². Qual é o perímetro desse quadrado, em centímetros?",
    opcoes: [
      "121",
      "44",
      "22",
      "11",
      "484",
    ],
    correta: 1,
    explicacao:
      "O lado é a raiz quadrada da área: √121 = 11 cm. O perímetro é 4 × 11 = 44 cm. Conferindo, 11 × 11 = 121. O caminho é o inverso: da área se obtém o lado, pela raiz quadrada, e do lado se obtém o perímetro, multiplicando por 4. Não se pode dividir a área por 4 para achar o lado, pois 121 ÷ 4 = 30,25, cujo quadrado não é 121.\n\n121 é a própria área. 22 é o dobro do lado, o semiperímetro. 11 é o lado. E 484 é 4 × 121, que multiplica a área em vez do lado.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma lona tem 2,5 m² de área. Sabendo que 1 m² equivale a 10.000 cm², quantos centímetros quadrados ela tem?",
    opcoes: [
      "250",
      "2.500",
      "250.000",
      "25",
      "25.000",
    ],
    correta: 4,
    explicacao:
      "Multiplica-se por 10.000: 2,5 × 10.000 = 25.000 cm². Um quadrado de 1 m de lado tem 100 cm × 100 cm = 10.000 cm², e 2,5 desses quadrados têm 25.000 cm². Como a conversão de áreas usa o quadrado do fator dos comprimentos, 100 × 100 = 10.000.\n\n250 e 2.500 multiplicam por 100 e por 1.000, fatores de conversão de comprimentos e de volumes. 250.000 multiplica por 100.000. E 25 desloca a vírgula só uma casa.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um tapete de 45.000 cm² está à venda. Sabendo que 1 m² equivale a 10.000 cm², quantos metros quadrados ele tem?",
    opcoes: [
      "450",
      "4,5",
      "45",
      "0,45",
      "45.000",
    ],
    correta: 1,
    explicacao:
      "Divide-se por 10.000: 45.000 ÷ 10.000 = 4,5 m². Como 10.000 cm² formam 1 m², 45.000 cm² formam 4,5 m². Como a conversão de áreas usa o quadrado do fator dos comprimentos, 100 × 100 = 10.000, e a divisão por esse fator leva de cm² a m². Um tapete de 4,5 m² ocupa, por exemplo, um retângulo de 3 m por 1,5 m.\n\n450 e 45 dividem por 100 e por 1.000, fatores de conversão de comprimentos e de volumes. 0,45 divide por 100.000. E 45.000 é o valor em cm², sem converter.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um paralelogramo tem lados de 12 cm e 7 cm, e a altura relativa ao lado de 12 cm mede 5 cm. Qual é a área desse paralelogramo, em centímetros quadrados?",
    opcoes: [
      "60",
      "84",
      "38",
      "35",
      "70",
    ],
    correta: 0,
    explicacao:
      "A área é a base vezes a altura correspondente: 12 × 5 = 60 cm². A altura de 5 cm é a relativa à base de 12 cm, e por isso o outro lado, 7 cm, não entra na conta.\n\n84 multiplica os dois lados, 12 × 7, o que só daria a área se o paralelogramo fosse um retângulo. 38 é o perímetro, 2 × (12 + 7). 35 é 7 × 5, que mistura a base de 7 com a altura relativa à base de 12. E 70 não tem relação com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um trapézio isósceles tem bases de 10 cm e 4 cm e lados não paralelos de 5 cm cada. Qual é o perímetro desse trapézio, em centímetros?",
    opcoes: [
      "14",
      "20",
      "24",
      "28",
      "19",
    ],
    correta: 2,
    explicacao:
      "O perímetro é a soma dos quatro lados: 10 + 4 + 5 + 5 = 24 cm. Conferindo, as bases somam 14 e os lados oblíquos somam 10. Um trapézio isósceles tem os dois lados não paralelos iguais, o que permite conhecer os quatro lados só com três medidas. Como o perímetro é a soma dos lados, a altura não entra na conta.\n\n14 é a soma das bases, esquecendo os lados oblíquos. 20 esquece uma das bases. 28 soma alguma medida duas vezes. E 19 esquece um dos lados oblíquos.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um aro circular de arame tem 62,8 cm de comprimento. Usando π = 3,14, quanto mede o raio do aro, em centímetros?",
    opcoes: [
      "20",
      "10",
      "5",
      "31,4",
      "100",
    ],
    correta: 1,
    explicacao:
      "O comprimento é 2πr = 62,8, então r = 62,8 ÷ (2 × 3,14) = 62,8 ÷ 6,28 = 10 cm. Conferindo, 2 × 3,14 × 10 = 62,8. Em geral, o raio é o comprimento da circunferência dividido por 2π, e o diâmetro, o dobro do raio, é o comprimento dividido por π, isto é, 62,8 ÷ 3,14 = 20 cm.\n\n20 é o diâmetro, e não o raio. 5 é a metade do raio. 31,4 é o comprimento dividido por 2, sem dividir também por π. E 100 é o quadrado do raio.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Usando π = 3,14, qual é a área de um jardim circular de raio 2 m, em metros quadrados?",
    opcoes: [
      "6,28",
      "25,12",
      "4",
      "12,56",
      "50,24",
    ],
    correta: 3,
    explicacao:
      "A área é πr² = 3,14 × 2² = 3,14 × 4 = 12,56 m². Conferindo, o jardim cabe num quadrado de lado 4, de área 16, e ocupa cerca de 78,5% dele. Dobrar o raio quadruplica a área, pois o raio aparece ao quadrado na fórmula.\n\n6,28 é o comprimento da circunferência, 2 × 3,14 × 1. 25,12 é o dobro da área. 4 é o quadrado do raio, sem multiplicar por π. E 50,24 usa o diâmetro no lugar do raio.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um retângulo de 14 cm por 6 cm e um quadrado de 10 cm de lado têm o mesmo perímetro, 40 cm. Quantos centímetros quadrados a área do quadrado excede a do retângulo?",
    opcoes: [
      "0",
      "16",
      "8",
      "24",
      "100",
    ],
    correta: 1,
    explicacao:
      "A área do quadrado é 10 × 10 = 100 cm², e a do retângulo, 14 × 6 = 84 cm². A diferença é 100 − 84 = 16 cm². Com o mesmo perímetro, o quadrado é a figura de maior área entre os retângulos.\n\n0 supõe que o mesmo perímetro dá a mesma área, o que não vale. 8 e 24 não saem da diferença das duas áreas. E 100 é a área do quadrado, e não o excesso sobre o retângulo.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um terreno retangular de 15 m por 8 m será gramado com grama que custa R$ 12 o metro quadrado. Qual será o custo total, em reais?",
    opcoes: [
      "1.380",
      "276",
      "960",
      "120",
      "1.440",
    ],
    correta: 4,
    explicacao:
      "A área do terreno é 15 × 8 = 120 m², e o custo é 120 × 12 = R$ 1.440. Conferindo, 12 reais por m² em 100 m² dão 1.200, e em 20 m² dão 240, que somam 1.440. O custo depende da área, e não do perímetro, pois a grama cobre a superfície do terreno.\n\n1.380 erra a multiplicação por R$ 60. 276 usa o perímetro, 46, no lugar da área. 960 é 8 × 120, usando a largura como preço. E 120 é a área, sem multiplicar pelo preço.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Uma bandeirola triangular tem os três lados iguais, de 6 cm cada um. Qual é o contorno total da bandeirola, em centímetros?",
    opcoes: [
      "36",
      "9",
      "18",
      "12",
      "6",
    ],
    correta: 2,
    explicacao:
      "Os três lados do triângulo equilátero são iguais, então o perímetro é 3 × 6 = 18 cm. Conferindo, 6 + 6 + 6 = 18. O contorno da bandeirola é o perímetro do triângulo, e como os três lados são iguais, basta multiplicar o lado por 3. Esse raciocínio vale para qualquer polígono regular: o perímetro é o número de lados vezes a medida do lado.\n\n36 é o perímetro de um quadrado de lado 9, ou seis vezes o lado. 9 é a metade do perímetro. 12 soma só dois lados. E 6 é o próprio lado.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem perímetro de 50 cm e comprimento de 15 cm. Quanto mede a largura, em centímetros?",
    opcoes: [
      "35",
      "20",
      "5",
      "10",
      "12,5",
    ],
    correta: 3,
    explicacao:
      "O semiperímetro é 50 ÷ 2 = 25, então a largura é 25 − 15 = 10 cm. Conferindo, 2 × (15 + 10) = 50. O semiperímetro é a soma do comprimento com a largura.\n\n35 é 50 − 15, sem dividir o perímetro por 2. 20 é 50 − 30, como se houvesse dois comprimentos descontados duas vezes. 5 é a metade da largura correta. E 12,5 é o perímetro dividido por 4, como se a figura fosse um quadrado.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "Usando π = 3,14, qual é a área de uma coroa circular formada por um círculo de raio 10 cm com um furo circular de raio 6 cm no centro, em centímetros quadrados?",
    opcoes: [
      "50,24",
      "314",
      "125,6",
      "200,96",
      "100,48",
    ],
    correta: 3,
    explicacao:
      "A área da coroa é a do círculo maior menos a do furo: 3,14 × 10² − 3,14 × 6² = 314 − 113,04 = 200,96 cm². Em uma só conta, 3,14 × (100 − 36) = 3,14 × 64 = 200,96. Colocar π em evidência facilita a conta.\n\n50,24 é 3,14 × 16, usando (10 − 6)² no lugar de 10² − 6². 314 é a área do círculo maior, sem descontar o furo. 125,6 é 3,14 × 40. E 100,48 é a metade da área correta.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "No plano cartesiano, um paralelogramo tem vértices em (0, 0), (6, 0), (8, 4) e (2, 4). Qual é a área desse paralelogramo, em unidades quadradas?",
    opcoes: [
      "24",
      "48",
      "12",
      "20",
      "28",
    ],
    correta: 0,
    explicacao:
      "A base no eixo x mede 6, e a altura é a distância vertical entre as duas bases, 4. A área é 6 × 4 = 24. O lado oblíquo, de (6, 0) a (8, 4), é inclinado, mas não entra na conta da área.\n\n48 é o dobro da área correta. 12 é a área de um dos dois triângulos em que uma diagonal divide o paralelogramo. 20 e 28 são combinações erradas, como somar 6 e 4 e multiplicar por 2 ou 7.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "Um retângulo tem o comprimento igual ao triplo da largura e perímetro de 64 cm. Qual é a área desse retângulo, em centímetros quadrados?",
    opcoes: [
      "256",
      "128",
      "96",
      "192",
      "24",
    ],
    correta: 3,
    explicacao:
      "Chamando a largura de x, o comprimento é 3x, e o perímetro é 2 × (x + 3x) = 8x = 64, então x = 8 cm e o comprimento é 24 cm. A área é 8 × 24 = 192 cm². Conferindo, 2 × (8 + 24) = 64. A razão entre o comprimento e a largura fixa a forma do retângulo, e o perímetro fixa o tamanho.\n\n256 é 16 × 16, a área de um quadrado de lado 16. 128 e 96 usam largura ou comprimento errados. E 24 é o comprimento, e não a área.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "O lado de um quadrado aumenta 20%. Em quantos por cento aumenta a área desse quadrado?",
    opcoes: [
      "20%",
      "40%",
      "24%",
      "44%",
      "4%",
    ],
    correta: 3,
    explicacao:
      "Com lado L, a área é L². Com lado 1,2L, a área é (1,2L)² = 1,44L², isto é, 144% da área original, um aumento de 44%. Conferindo com L = 10, a área passa de 100 para 12 × 12 = 144.\n\n20% é o aumento do lado, e não da área. 40% soma 20% duas vezes, sem o efeito de multiplicar os aumentos. 24% e 4% não saem de nenhuma conta correta com os dados.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "Um hexágono regular tem lado de 4 cm e se divide em 6 triângulos equiláteros iguais. Qual é a área do hexágono, em centímetros quadrados?",
    opcoes: [
      "24√3",
      "96",
      "48",
      "16√3",
      "24",
    ],
    correta: 0,
    explicacao:
      "Cada triângulo equilátero de lado 4 tem altura 2√3 e área 4 × 2√3 ÷ 2 = 4√3. Os seis triângulos somam 6 × 4√3 = 24√3 cm², cerca de 41,6 cm². Conferindo, 24√3 ≈ 24 × 1,732 = 41,6, um valor que cabe no hexágono, pois o círculo de raio 4 tem área 50,2 e o hexágono está dentro dele.\n\n96 é 6 × 16, usando o quadrado do lado no lugar da área do triângulo. 48 é 6 × 8. 16√3 é a área de 4 triângulos, e não de 6. E 24 é o perímetro do hexágono.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "Um trapézio retângulo tem bases de 9 cm e 5 cm e o lado oblíquo mede 5 cm. Qual é a área desse trapézio, em centímetros quadrados?",
    opcoes: [
      "45",
      "21",
      "28",
      "14",
      "35",
    ],
    correta: 1,
    explicacao:
      "A diferença das bases é 9 − 5 = 4, e com o lado oblíquo de 5, forma-se um triângulo retângulo de catetos 4 e h e hipotenusa 5, então h = 3 cm. A área é (9 + 5) × 3 ÷ 2 = 21 cm². Conferindo, h² + 4² = 9 + 16 = 25 = 5².\n\n35 usa o lado oblíquo, 5, como se fosse a altura, dando (9 + 5) × 5 ÷ 2. 45 é o produto 9 × 5. 28 é (9 + 5) × 2. E 14 é a soma das bases, sem a altura.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "Um pátio de 5 m por 4 m será revestido com pisos quadrados de 20 cm de lado. De quantos pisos se precisa?",
    opcoes: [
      "50",
      "5.000",
      "100",
      "500",
      "2.000",
    ],
    correta: 3,
    explicacao:
      "Em centímetros, a sala mede 500 por 400, com área de 200.000 cm², e cada placa tem 20 × 20 = 400 cm². O número de placas é 200.000 ÷ 400 = 500. Pelas fileiras, cabem 25 placas no comprimento e 20 na largura, e 25 × 20 = 500.\n\n50 e 5.000 erram a conversão de unidades por um fator 10. 100 é 5 × 20, misturando metros com centímetros. E 2.000 é a área em m², 20, multiplicada por 100.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "Num terreno de 12 m por 20 m, a construção pode ocupar 40% da área. Quantos metros quadrados poderão ser construídos?",
    opcoes: [
      "48",
      "96",
      "120",
      "144",
      "60",
    ],
    correta: 1,
    explicacao:
      "A área do terreno é 12 × 20 = 240 m², e 40% dela é 0,4 × 240 = 96 m². Conferindo, 10% de 240 é 24, e 4 × 24 = 96. A taxa de ocupação é a razão entre a área construída e a área do terreno, e vale 40% quando a construção cobre 4 décimos do total. Esse tipo de regra aparece em leis de construção, e a conta é a mesma de uma porcentagem qualquer: a porcentagem da área total, sem relação com o perímetro do terreno.\n\n48 é 20% da área. 120 é 50%. 144 é 60%. E 60 é 25%. Nenhum deles corresponde a 40% de 240.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "A razão entre as áreas de dois quadrados é 9. Qual é a razão entre os lados desses quadrados?",
    opcoes: [
      "3",
      "9",
      "81",
      "1/3",
      "18",
    ],
    correta: 0,
    explicacao:
      "Como a área é o lado ao quadrado, a razão entre as áreas é o quadrado da razão entre os lados. Então a razão dos lados é √9 = 3. Conferindo, o quadrado de lado 6 tem área 36, o de lado 2 tem área 4, e 36 ÷ 4 = 9, com 6 ÷ 2 = 3.\n\n9 é a razão das áreas, e não dos lados. 81 é o quadrado da razão das áreas. 1/3 é a razão inversa, do lado menor para o maior. E 18 é o dobro da razão das áreas.",
  },
  {
    materia: "matematica-fund",
    tema: "Área e perímetro de figuras planas",
    dificuldade: "dificil",
    enunciado:
      "Um retângulo de 10 cm por 4 cm tem a mesma área de um quadrado. Quanto mede o lado desse quadrado, em centímetros?",
    opcoes: [
      "6",
      "2√10",
      "7",
      "5",
      "10",
    ],
    correta: 1,
    explicacao:
      "A área do retângulo é 10 × 4 = 40 cm². O lado do quadrado de mesma área é √40 = √(4 × 10) = 2√10 cm, cerca de 6,32 cm. Conferindo, (2√10)² = 4 × 10 = 40. O resultado não é um número inteiro, o que é comum quando a área não é um quadrado perfeito.\n\n6 dá área 36, e 7, área 49, que não são 40. 5 dá área 25. E 10 dá área 100, como um quadrado que tem o lado igual ao comprimento do retângulo.",
  },
];
