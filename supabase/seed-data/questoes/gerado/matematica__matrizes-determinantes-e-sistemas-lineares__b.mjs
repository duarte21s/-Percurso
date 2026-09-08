/* Matrizes, determinantes e sistemas lineares — parte B (25 questões).
   Sistemas aplicados a situações do cotidiano, classificação de sistemas,
   propriedades de determinantes e escalonamento.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um teatro vendeu 100 ingressos em uma sessão, entre inteiras a R$ 20,00 e meias-entradas a R$ 10,00, arrecadando R$ 1.600,00. A quantidade de ingressos de inteira vendidos foi:",
    opcoes: ["40", "50", "80", "60", "70"],
    correta: 3,
    explicacao:
      "Chamando de x as inteiras e de y as meias: x + y = 100 e 20x + 10y = 1 600. Multiplicando a primeira por 10 e subtraindo da segunda, resta 10x = 600, logo x = 60 e y = 40. A alternativa 40 é o número de meias-entradas, resposta à pergunta errada — conferir qual incógnita foi pedida é o passo final indispensável.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Dois números naturais têm soma igual a 27 e diferença igual a 5. O maior desses dois números é:",
    opcoes: ["16", "11", "22", "17", "13"],
    correta: 0,
    explicacao:
      "Somando as equações x + y = 27 e x − y = 5, obtém-se 2x = 32 e x = 16; em seguida, y = 11. A alternativa 11 é o menor número. Um atalho útil: o maior é sempre a semissoma mais a semidiferença, ou seja, 13,5 + 2,5 = 16.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Considere uma matriz de ordem 2 cuja primeira linha é formada pelos elementos a e b e cuja segunda linha é formada pelos elementos 2a e 2b. O determinante dessa matriz vale:",
    opcoes: ["ab", "2ab", "0", "4ab", "−ab"],
    correta: 2,
    explicacao:
      "O cálculo direto dá a · 2b − b · 2a = 2ab − 2ab = 0. O resultado era previsível: a segunda linha é proporcional à primeira, e sempre que duas linhas são proporcionais o determinante se anula. Isso significa que as duas equações correspondentes são equivalentes e não determinam solução única.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Uma matriz quadrada A admite matriz inversa quando existe outra matriz que, multiplicada por A, resulta na matriz identidade. A condição necessária e suficiente para que essa inversa exista é que:",
    opcoes: [
      "a matriz A seja simétrica.",
      "todos os elementos de A sejam positivos.",
      "a matriz A seja triangular.",
      "o traço de A seja diferente de zero.",
      "o determinante de A seja diferente de zero.",
    ],
    correta: 4,
    explicacao:
      "Determinante nulo indica linhas linearmente dependentes, e nesse caso nenhuma matriz consegue desfazer a transformação: a inversa não existe. Ser simétrica ou triangular não tem relação com invertibilidade — a matriz identidade é simétrica e inversível, mas uma matriz simétrica de determinante zero não é.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Uma matriz quadrada A de ordem 3 é multiplicada pela matriz identidade de mesma ordem. O resultado dessa multiplicação é:",
    opcoes: [
      "a matriz nula de ordem 3.",
      "a própria matriz A, sem alteração.",
      "a matriz transposta de A.",
      "a matriz inversa de A.",
      "uma matriz de ordem 6.",
    ],
    correta: 1,
    explicacao:
      "A identidade é o elemento neutro da multiplicação de matrizes, exatamente como o número 1 é na multiplicação de números reais: A · I = I · A = A. Essa é uma das poucas situações em que a ordem dos fatores não altera o produto, já que a multiplicação de matrizes em geral não é comutativa.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Analisando o sistema linear formado pelas equações x + 2y = 8 e 2x + 4y = 16, conclui-se que ele é:",
    opcoes: [
      "impossível, pois as equações se contradizem.",
      "possível e determinado, com uma única solução.",
      "possível e indeterminado, com infinitas soluções.",
      "homogêneo, com apenas a solução nula.",
      "sem classificação possível, por ter duas incógnitas.",
    ],
    correta: 2,
    explicacao:
      "A segunda equação é exatamente o dobro da primeira, então as duas representam a mesma reta no plano. Todo par que satisfaz uma satisfaz a outra, e existem infinitas soluções. O determinante dos coeficientes é 1 · 4 − 2 · 2 = 0, confirmando que não há solução única.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um sistema linear é formado pelas equações x + y = 5 e x + y = 8. Sobre esse sistema, é correto afirmar que ele é:",
    opcoes: [
      "possível e determinado, com solução única.",
      "possível e indeterminado, com infinitas soluções.",
      "homogêneo, com solução trivial.",
      "possível, com exatamente duas soluções.",
      "impossível, pois não existe par que satisfaça as duas equações.",
    ],
    correta: 4,
    explicacao:
      "A mesma soma x + y não pode valer 5 e 8 ao mesmo tempo. Graficamente, são duas retas paralelas distintas, que nunca se cruzam. O determinante dos coeficientes é zero, como no caso indeterminado, mas aqui os termos independentes são incompatíveis — é isso que separa o sistema impossível do indeterminado.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Em uma lanchonete, dois sanduíches e um suco custam R$ 26,00, enquanto um sanduíche e um suco custam R$ 16,00. O preço de um sanduíche é:",
    opcoes: ["R$ 6,00", "R$ 10,00", "R$ 12,00", "R$ 8,00", "R$ 16,00"],
    correta: 1,
    explicacao:
      "Subtraindo a segunda equação da primeira, os sucos se cancelam e resta um sanduíche: 26 − 16 = 10 reais. A alternativa 6,00 é o preço do suco. Esse tipo de subtração direta é o caminho mais rápido quando as duas equações compartilham exatamente uma unidade de um dos itens.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Ainda considerando que dois sanduíches e um suco custam R$ 26,00 e que um sanduíche e um suco custam R$ 16,00, o preço de um suco é:",
    opcoes: ["R$ 6,00", "R$ 10,00", "R$ 8,00", "R$ 4,00", "R$ 12,00"],
    correta: 0,
    explicacao:
      "Com o sanduíche valendo R$ 10,00, basta substituir na segunda equação: 10 + suco = 16, logo o suco custa R$ 6,00. A conferência na primeira equação fecha: 2 · 10 + 6 = 26. Testar a solução nas duas equações originais é a forma mais segura de validar a resposta de um sistema.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "dificil",
    enunciado:
      "Uma matriz quadrada A de ordem 2 tem determinante igual a 5. Multiplicando toda a matriz A pelo número real 2, o determinante da matriz resultante passa a ser:",
    opcoes: ["10", "5", "40", "20", "25"],
    correta: 3,
    explicacao:
      "Multiplicar a matriz inteira por 2 equivale a multiplicar cada uma das 2 linhas por 2, e cada linha multiplica o determinante por 2: o efeito total é 2² · 5 = 20. A alternativa 10 aplica o fator uma única vez. A regra geral é que o determinante fica multiplicado por kⁿ, em que n é a ordem da matriz.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Uma matriz é chamada de matriz linha quando possui uma única linha e um número qualquer de colunas. A ordem genérica de uma matriz linha é:",
    opcoes: ["1 por n", "n por 1", "n por n", "1 por 1", "2 por n"],
    correta: 0,
    explicacao:
      "Por convenção, a ordem é sempre escrita como linhas por colunas, então uma única linha e n colunas dá 1 por n. A alternativa n por 1 descreve a matriz coluna, que é a transposta da matriz linha. Já n por n caracteriza uma matriz quadrada.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Sobre a multiplicação de matrizes, considerando duas matrizes A e B para as quais tanto A · B quanto B · A estão definidos, é correto afirmar que:",
    opcoes: [
      "os dois produtos são sempre iguais entre si.",
      "os dois produtos são sempre matrizes nulas.",
      "os dois produtos têm sempre determinantes opostos.",
      "os dois produtos podem ser diferentes: a multiplicação não é comutativa.",
      "o produto só existe se as matrizes forem quadradas de mesma ordem.",
    ],
    correta: 3,
    explicacao:
      "Na multiplicação de matrizes, cada elemento vem da combinação de uma linha da primeira com uma coluna da segunda, e trocar a ordem muda quais listas se combinam. Existem casos particulares em que os produtos coincidem, como quando uma das matrizes é a identidade, mas isso é exceção, não regra.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um sistema linear escalonado com três incógnitas apresenta as equações z = 2, y + z = 5 e x + y + z = 10. O valor da incógnita x nesse sistema é:",
    opcoes: ["2", "3", "10", "8", "5"],
    correta: 4,
    explicacao:
      "A resolução vai de baixo para cima: z = 2; substituindo na segunda, y = 3; substituindo as duas na terceira, x + 3 + 2 = 10, logo x = 5. A alternativa 8 esquece de descontar uma das incógnitas já encontradas. O escalonamento existe justamente para permitir essa substituição em cadeia, sem sistemas simultâneos.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "dificil",
    enunciado:
      "Em uma fábrica, três máquinas do tipo A e duas do tipo B produzem juntas 130 peças por hora. Já uma máquina do tipo A e uma do tipo B produzem juntas 50 peças por hora. A produção horária de uma máquina do tipo A é de:",
    opcoes: ["20 peças", "30 peças", "25 peças", "40 peças", "35 peças"],
    correta: 1,
    explicacao:
      "Do sistema 3a + 2b = 130 e a + b = 50, isola-se b = 50 − a e substitui-se: 3a + 100 − 2a = 130, logo a = 30 e b = 20. A alternativa 20 é a produção da máquina B. Vale conferir nas duas equações: 3 · 30 + 2 · 20 = 130 e 30 + 20 = 50.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Considere a matriz quadrada de ordem 2 cuja primeira linha é formada pelos números 5 e 1 e cuja segunda linha é formada pelos números 3 e 2. O determinante dessa matriz é igual a:",
    opcoes: ["13", "3", "7", "10", "−7"],
    correta: 2,
    explicacao:
      "O determinante é 5 · 2 − 1 · 3 = 10 − 3 = 7. A alternativa 13 soma os dois produtos em vez de subtrair, e −7 inverte a ordem das diagonais. Como o valor é diferente de zero, a matriz é inversível e o sistema linear associado teria solução única.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Chama-se matriz nula aquela em que todos os elementos são iguais a zero. Em relação à adição de matrizes de mesma ordem, a matriz nula funciona como:",
    opcoes: [
      "o elemento inverso, pois anula qualquer matriz somada a ela.",
      "a matriz identidade da multiplicação.",
      "a transposta de qualquer matriz.",
      "uma matriz sem ordem definida.",
      "o elemento neutro, pois somada a qualquer matriz devolve a própria matriz.",
    ],
    correta: 4,
    explicacao:
      "Somar zero a cada elemento não altera valor algum, então A + 0 = A: é exatamente o papel que o número zero tem na adição de reais. A matriz identidade cumpre papel análogo, mas na multiplicação. Confundir as duas é o deslize mais comum entre esses conceitos.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um sistema linear homogêneo de duas equações e duas incógnitas tem determinante da matriz dos coeficientes igual a zero. Sobre as soluções desse sistema, conclui-se que ele:",
    opcoes: [
      "não admite nenhuma solução.",
      "admite infinitas soluções, além da solução nula.",
      "admite exatamente duas soluções distintas.",
      "admite apenas a solução em que as incógnitas valem zero.",
      "não pode ser classificado sem os termos independentes.",
    ],
    correta: 1,
    explicacao:
      "Sistemas homogêneos nunca são impossíveis, porque a solução nula sempre serve. Quando o determinante se anula, as equações se tornam proporcionais e passam a existir infinitas soluções além da trivial. Se o determinante fosse diferente de zero, a solução nula seria a única.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "A diagonal principal de uma matriz quadrada é formada pelos elementos em que o índice da linha é igual ao índice da coluna. Em uma matriz quadrada de ordem 4, o número de elementos da diagonal principal é:",
    opcoes: ["16", "8", "2", "4", "12"],
    correta: 3,
    explicacao:
      "São os elementos a11, a22, a33 e a44 — um para cada linha, totalizando 4. A alternativa 16 conta todos os elementos da matriz, que é 4 · 4. Em qualquer matriz quadrada de ordem n, a diagonal principal tem exatamente n elementos.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Considere o par ordenado (2, 3) e o sistema formado pelas equações x + y = 5 e 2x − y = 1. Verificando esse par nas duas equações, conclui-se que ele:",
    opcoes: [
      "satisfaz apenas a primeira equação.",
      "satisfaz apenas a segunda equação.",
      "é solução do sistema, pois satisfaz as duas equações.",
      "não satisfaz nenhuma das duas equações.",
      "torna o sistema impossível.",
    ],
    correta: 2,
    explicacao:
      "Na primeira, 2 + 3 = 5, verdadeiro; na segunda, 2 · 2 − 3 = 1, também verdadeiro. Como satisfaz ambas simultaneamente, o par é solução do sistema. Testar uma solução candidata em todas as equações é sempre mais rápido que resolver o sistema do zero, e serve de conferência final.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Resolvendo o sistema linear em que a primeira equação é x/2 + y = 7 e a segunda informa que x = 6, o valor da incógnita y é:",
    opcoes: ["4", "7", "1", "10", "6"],
    correta: 0,
    explicacao:
      "Substituindo x = 6 na primeira equação: 6/2 + y = 7, ou seja, 3 + y = 7 e y = 4. A alternativa 1 apareceria em quem subtrai 6 em vez de 3, esquecendo a divisão por 2. Frações nos coeficientes não mudam o método, apenas exigem atenção na substituição.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um cinema vendeu 200 ingressos em uma sessão e arrecadou R$ 3.000,00. O ingresso inteiro custa R$ 20,00 e a meia-entrada custa R$ 10,00. A quantidade de ingressos inteiros vendidos foi:",
    opcoes: ["50", "100", "150", "80", "120"],
    correta: 1,
    explicacao:
      "Chamando de x as inteiras, as meias são 200 − x, e a arrecadação fica 20x + 10(200 − x) = 3 000. Isso dá 10x + 2 000 = 3 000, logo x = 100. Escrever a segunda quantidade em função da primeira reduz o sistema a uma única equação, o que economiza etapas.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Uma matriz quadrada A de ordem 2 tem determinante igual a 3. O determinante da matriz transposta de A é igual a:",
    opcoes: ["1/3", "−3", "3", "9", "6"],
    correta: 2,
    explicacao:
      "Transpor não altera o determinante: ele vale 3 nos dois casos. A alternativa 1/3 corresponde ao determinante da matriz inversa, que é o inverso do determinante original. Já −3 seria o efeito de trocar duas linhas de posição, operação diferente da transposição.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um sistema de duas equações lineares com duas incógnitas é representado graficamente por duas retas coincidentes no plano cartesiano. Esse sistema é classificado como:",
    opcoes: [
      "possível e indeterminado, com infinitas soluções.",
      "possível e determinado, com solução única.",
      "impossível, sem solução.",
      "homogêneo, com solução exclusivamente nula.",
      "linear de segundo grau.",
    ],
    correta: 0,
    explicacao:
      "Retas coincidentes têm todos os pontos em comum, e cada ponto compartilhado é uma solução do sistema: são infinitas. Isso ocorre quando uma equação é múltipla da outra. Se as retas fossem paralelas distintas, não haveria ponto em comum e o sistema seria impossível.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "dificil",
    enunciado:
      "A área de um triângulo com vértices de coordenadas conhecidas pode ser obtida a partir de um determinante. Para o triângulo de vértices (0, 0), (4, 0) e (0, 3), a área calculada é igual a:",
    opcoes: ["12", "3", "4", "6", "24"],
    correta: 3,
    explicacao:
      "A área é metade do módulo do determinante formado pelas coordenadas dos vértices, o que aqui resulta em 12/2 = 6 unidades de área. A conferência é imediata: o triângulo é retângulo, com catetos 4 e 3 sobre os eixos, e (4 · 3)/2 = 6. A alternativa 12 esquece de dividir por 2.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "dificil",
    enunciado:
      "Em uma papelaria, cinco canetas e três cadernos custam R$ 61,00, enquanto duas canetas e um caderno custam R$ 22,00. O preço de um caderno é:",
    opcoes: ["R$ 5,00", "R$ 8,00", "R$ 10,00", "R$ 15,00", "R$ 12,00"],
    correta: 4,
    explicacao:
      "Da segunda equação, o caderno custa 22 − 2c, em que c é o preço da caneta. Substituindo na primeira: 5c + 66 − 6c = 61, logo c = 5 e o caderno custa 22 − 10 = R$ 12,00. A alternativa 5,00 é o preço da caneta. A conferência fecha: 5 · 5 + 3 · 12 = 25 + 36 = 61.",
  },
];
