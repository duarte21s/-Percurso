/* Matrizes, determinantes e sistemas lineares — parte A (25 questões).
   Ordem e elementos, operações, transposta, determinantes de ordem 2 e 3 e
   resolução de sistemas. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Uma matriz é dita de ordem m por n quando possui m linhas e n colunas. O número total de elementos de uma matriz de ordem 3 por 4 é:",
    opcoes: ["7", "9", "12", "34", "16"],
    correta: 2,
    explicacao:
      "O total de elementos é o produto do número de linhas pelo de colunas: 3 · 4 = 12. A alternativa 7 soma as duas dimensões em vez de multiplicar. Cada elemento ocupa o cruzamento de uma linha com uma coluna, e por isso a contagem segue o princípio multiplicativo.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Uma matriz A = (aij) de ordem 3 por 3 tem seus elementos definidos pela lei de formação aij = 2i + j, em que i indica a linha e j indica a coluna. O elemento a23 dessa matriz vale:",
    opcoes: ["7", "8", "5", "6", "10"],
    correta: 0,
    explicacao:
      "Basta substituir i = 2 e j = 3 na lei: a23 = 2 · 2 + 3 = 7. A alternativa 8 troca a ordem dos índices e calcula 2 · 3 + 2, que seria o elemento a32. A convenção é fixa e não muda: o primeiro índice sempre indica a linha e o segundo, a coluna.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "A matriz transposta de uma matriz A é obtida trocando ordenadamente suas linhas por suas colunas. Sendo A uma matriz de ordem 2 por 5, a ordem da matriz transposta de A é:",
    opcoes: ["2 por 5", "5 por 5", "2 por 2", "10 por 1", "5 por 2"],
    correta: 4,
    explicacao:
      "Transpor inverte as dimensões: o que era 2 por 5 passa a 5 por 2. A alternativa 2 por 5 repete a ordem original, o que só valeria para matrizes quadradas simétricas. O número de elementos, porém, se mantém em 10 nos dois casos, já que apenas a disposição muda.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "O determinante de uma matriz quadrada de ordem 2 é obtido subtraindo o produto da diagonal secundária do produto da diagonal principal. Para a matriz de primeira linha 3 e 2 e segunda linha 5 e 4, o determinante vale:",
    opcoes: ["22", "−2", "12", "2", "10"],
    correta: 3,
    explicacao:
      "O cálculo é 3 · 4 − 2 · 5 = 12 − 10 = 2. A alternativa −2 inverte a ordem da subtração, e 22 soma os dois produtos em vez de subtrair. A ordem importa: primeiro o produto da diagonal principal, depois a subtração do produto da secundária.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Considere a matriz quadrada de ordem 2 cuja primeira linha é formada pelos números 2 e 0 e cuja segunda linha é formada pelos números 0 e 3. O determinante dessa matriz é igual a:",
    opcoes: ["5", "6", "0", "2", "3"],
    correta: 1,
    explicacao:
      "O determinante é 2 · 3 − 0 · 0 = 6. A alternativa 5 soma os elementos da diagonal principal, que é o traço da matriz, não o determinante. Em matrizes diagonais, o determinante é sempre o produto dos elementos da diagonal principal — um atalho útil.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "A matriz identidade de ordem n tem o número 1 em toda a diagonal principal e zero nas demais posições. A soma de todos os elementos da matriz identidade de ordem 3 é:",
    opcoes: ["1", "3", "9", "0", "6"],
    correta: 1,
    explicacao:
      "São três elementos iguais a 1 na diagonal e seis zeros fora dela, então a soma é 3. A alternativa 9 conta o total de posições da matriz, e não a soma dos valores. A identidade funciona na multiplicação de matrizes como o número 1 funciona na multiplicação de números reais.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Uma matriz A tem ordem 2 por 3 e uma matriz B tem ordem 3 por 4. Sabendo que o produto A · B está definido, a ordem da matriz resultante desse produto é:",
    opcoes: ["3 por 3", "2 por 3", "3 por 4", "2 por 4", "4 por 2"],
    correta: 3,
    explicacao:
      "No produto de matrizes, a matriz resultante herda o número de linhas da primeira e o número de colunas da segunda: 2 por 4. Os valores internos, 3 e 3, precisam coincidir para que o produto exista, e desaparecem do resultado. A alternativa 4 por 2 corresponderia ao produto B · A, que aqui nem está definido.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Para que o produto de uma matriz A de ordem m por n por uma matriz B de ordem p por q esteja definido, é necessário que:",
    opcoes: [
      "o número de colunas de A seja igual ao número de linhas de B.",
      "as duas matrizes tenham exatamente a mesma ordem.",
      "a matriz A seja necessariamente quadrada.",
      "o número de linhas de A seja igual ao número de linhas de B.",
      "ambas as matrizes sejam matrizes identidade.",
    ],
    correta: 0,
    explicacao:
      "A condição é n = p, porque cada elemento do produto resulta da soma dos produtos de uma linha de A por uma coluna de B, e essas listas precisam ter o mesmo comprimento. Exigir ordens iguais é a condição para a soma de matrizes, não para o produto — confundir as duas regras é o erro mais comum aqui.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Somam-se duas matrizes de ordem 2 por 2: a primeira tem linhas 1 e 2, depois 3 e 4; a segunda tem linhas 5 e 6, depois 7 e 8. Na matriz soma, o elemento situado na segunda linha e na primeira coluna vale:",
    opcoes: ["4", "8", "10", "12", "6"],
    correta: 2,
    explicacao:
      "A soma de matrizes é feita elemento a elemento, na mesma posição: 3 + 7 = 10. A alternativa 12 corresponde ao elemento da segunda linha e segunda coluna, 4 + 8. Só é possível somar matrizes de mesma ordem, justamente porque cada posição precisa ter uma correspondente.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "A matriz de ordem 2 por 2 com primeira linha 1 e 2 e segunda linha 3 e 4 é multiplicada pelo número real 3. Na matriz resultante, o elemento da segunda linha e segunda coluna vale:",
    opcoes: ["4", "7", "6", "9", "12"],
    correta: 4,
    explicacao:
      "Na multiplicação por um escalar, todos os elementos são multiplicados por ele: 4 · 3 = 12. A alternativa 7 soma 3 ao elemento em vez de multiplicar. Vale notar que essa operação multiplica o determinante de uma matriz de ordem 2 por 3² = 9, e não por 3.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Uma matriz quadrada de ordem 3 possui uma linha inteiramente formada por zeros. Sobre o determinante dessa matriz, é correto afirmar que ele vale:",
    opcoes: [
      "1, por convenção.",
      "o produto dos elementos da diagonal principal.",
      "um valor indeterminado.",
      "um número igual à ordem da matriz.",
      "zero, qualquer que seja o restante da matriz.",
    ],
    correta: 4,
    explicacao:
      "Toda parcela do determinante contém exatamente um elemento de cada linha; se uma linha só tem zeros, todas as parcelas se anulam. O mesmo vale para uma coluna nula, para duas linhas iguais e para linhas proporcionais entre si. Determinante zero significa que a matriz não é inversível.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Resolvendo o sistema linear formado pelas equações x + y = 10 e x − y = 4, o valor encontrado para a incógnita x é:",
    opcoes: ["5", "6", "7", "4", "3"],
    correta: 2,
    explicacao:
      "Somando as duas equações, os termos em y se cancelam: 2x = 14, logo x = 7 e, em seguida, y = 3. A alternativa 5 seria a média entre 10 e 4 — coincidência que não resolve o sistema. O método da adição funciona bem sempre que uma incógnita aparece com coeficientes opostos.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Em um sistema linear de duas equações, sabe-se que 2x + 3y = 12 e que x = 3. Substituindo o valor conhecido, o valor de y é:",
    opcoes: ["4", "3", "6", "2", "1"],
    correta: 3,
    explicacao:
      "Substituindo x = 3 na primeira equação: 6 + 3y = 12, então 3y = 6 e y = 2. A alternativa 4 resulta de esquecer o termo 2x e resolver 3y = 12. O método da substituição é o mais direto quando uma das incógnitas já está isolada.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Ao analisar um sistema linear de duas equações e duas incógnitas, verifica-se que o determinante da matriz dos coeficientes é diferente de zero. Essa condição garante que o sistema é:",
    opcoes: [
      "impossível, sem nenhuma solução.",
      "possível e determinado, com solução única.",
      "possível e indeterminado, com infinitas soluções.",
      "homogêneo, com solução necessariamente nula.",
      "indefinido, dependendo dos termos independentes.",
    ],
    correta: 1,
    explicacao:
      "Determinante não nulo significa que as duas retas representadas pelas equações têm inclinações diferentes e se cruzam em um único ponto: a solução é única. Quando o determinante se anula, o sistema pode ser impossível, se as retas forem paralelas distintas, ou indeterminado, se forem coincidentes.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Na regra de Cramer, o valor de uma incógnita é obtido dividindo o determinante da matriz em que a coluna dessa incógnita foi substituída pelos termos independentes pelo determinante da matriz dos coeficientes. Se esse último determinante vale 2 e o determinante associado a x vale 6, então x é igual a:",
    opcoes: ["3", "12", "1/3", "4", "8"],
    correta: 0,
    explicacao:
      "Pela regra, x = Dx/D = 6/2 = 3. A alternativa 12 multiplica os determinantes em vez de dividir, e 1/3 inverte a fração. A regra de Cramer só se aplica quando o determinante da matriz dos coeficientes é diferente de zero, o que garante solução única.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Uma matriz triangular superior de ordem 3 tem primeira linha 1, 2 e 3; segunda linha 0, 1 e 4; e terceira linha 0, 0 e 2. O determinante dessa matriz vale:",
    opcoes: ["2", "0", "6", "7", "24"],
    correta: 0,
    explicacao:
      "Em matrizes triangulares, com zeros de um lado da diagonal principal, o determinante é o produto dos elementos dessa diagonal: 1 · 1 · 2 = 2. A alternativa 0 confundiria a presença de zeros fora da diagonal com uma linha inteiramente nula, que não é o caso. Esse atalho evita todo o trabalho da regra de Sarrus.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "dificil",
    enunciado:
      "Considere uma matriz quadrada de ordem 3 cujo determinante é igual a D. Se todos os elementos de uma única linha dessa matriz forem multiplicados por 5, o novo determinante passa a ser:",
    opcoes: ["igual a D", "igual a D + 5", "igual a 125 · D", "igual a D dividido por 5", "igual a 5 · D"],
    correta: 4,
    explicacao:
      "Cada parcela do determinante contém exatamente um elemento da linha alterada, então todas ficam multiplicadas por 5 e o determinante também. A alternativa 125 · D valeria se as três linhas fossem multiplicadas por 5, isto é, se a matriz inteira fosse multiplicada pelo escalar — daí o 5³.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Uma matriz quadrada A é chamada de simétrica quando satisfaz uma condição específica envolvendo sua transposta. Essa condição é:",
    opcoes: [
      "o determinante de A ser igual a zero.",
      "A ser igual à sua própria transposta.",
      "A ser igual à matriz identidade de mesma ordem.",
      "A transposta de A ser igual à matriz nula.",
      "todos os elementos de A serem iguais entre si.",
    ],
    correta: 1,
    explicacao:
      "Uma matriz é simétrica quando A é igual a sua transposta, o que significa que aij = aji para todos os índices: os elementos se espelham em relação à diagonal principal. A alternativa da identidade descreve um caso particular — a identidade é simétrica, mas nem toda matriz simétrica é a identidade.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um sistema linear é chamado de homogêneo quando todos os seus termos independentes são iguais a zero. A respeito desse tipo de sistema, é correto afirmar que ele:",
    opcoes: [
      "nunca admite solução.",
      "admite sempre infinitas soluções.",
      "admite sempre pelo menos a solução em que todas as incógnitas valem zero.",
      "só admite solução quando o determinante é nulo.",
      "não pode ser resolvido pela regra de Cramer.",
    ],
    correta: 2,
    explicacao:
      "Zerar todas as incógnitas satisfaz qualquer equação de termo independente nulo, e por isso a chamada solução trivial sempre existe: o sistema homogêneo nunca é impossível. Se o determinante dos coeficientes for diferente de zero, essa é a única solução; se for zero, aparecem infinitas soluções além dela.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "dificil",
    enunciado:
      "Uma matriz quadrada de ordem 3 tem primeira linha 1, 2 e 0; segunda linha 3, 1 e 2; e terceira linha 0, 1 e 1. Aplicando a regra de Sarrus, o determinante dessa matriz é igual a:",
    opcoes: ["7", "−1", "6", "−7", "1"],
    correta: 3,
    explicacao:
      "Pela regra de Sarrus, os produtos das diagonais principais somam 1·1·1 + 2·2·0 + 0·3·1 = 1, e os das secundárias somam 0·1·0 + 1·2·1 + 2·3·1 = 8. O determinante é 1 − 8 = −7. O erro mais comum é trocar o sinal ao subtrair o segundo bloco, o que produz +7.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Duas matrizes A e B são consideradas iguais quando satisfazem simultaneamente determinadas condições. Essas condições são:",
    opcoes: [
      "terem o mesmo determinante, ainda que de ordens diferentes.",
      "terem o mesmo número de elementos, em qualquer disposição.",
      "serem ambas quadradas e de mesma ordem.",
      "terem a mesma ordem e elementos correspondentes iguais.",
      "terem transpostas de mesma ordem.",
    ],
    correta: 3,
    explicacao:
      "Igualdade de matrizes é posição a posição: as ordens precisam coincidir e cada elemento precisa ser igual ao seu correspondente. Ter o mesmo determinante não basta, porque matrizes muito diferentes podem compartilhar o mesmo valor. Do mesmo modo, mesma quantidade de elementos não garante mesma disposição.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "O traço de uma matriz quadrada é definido como a soma dos elementos de sua diagonal principal. Para a matriz de ordem 2 com primeira linha 2 e 5 e segunda linha 7 e 9, o traço vale:",
    opcoes: ["16", "11", "23", "9", "2"],
    correta: 1,
    explicacao:
      "A diagonal principal é formada por 2 e 9, cuja soma é 11. A alternativa 23 soma os quatro elementos da matriz, e 16 soma a diagonal secundária, 5 e 7. Traço e determinante são grandezas distintas: aqui o determinante seria 2 · 9 − 5 · 7 = −17.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Um sistema de duas equações lineares com duas incógnitas tem como representação gráfica duas retas paralelas e distintas no plano cartesiano. Esse sistema é classificado como:",
    opcoes: [
      "possível e determinado, com uma única solução.",
      "possível e indeterminado, com infinitas soluções.",
      "impossível, sem nenhuma solução.",
      "homogêneo, com solução trivial.",
      "linear de primeiro grau com duas soluções.",
    ],
    correta: 2,
    explicacao:
      "Retas paralelas distintas nunca se cruzam, e como a solução do sistema é o ponto de interseção, não existe solução: o sistema é impossível. Se as retas fossem coincidentes, todos os pontos serviriam e o sistema seria indeterminado. Em ambos os casos o determinante dos coeficientes é nulo — o que distingue os dois é o termo independente.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "facil",
    enunciado:
      "Considere o sistema linear formado pelas equações 3x = 15 e 2x + y = 13. Resolvendo esse sistema, o valor encontrado para a incógnita y é:",
    opcoes: ["3", "5", "13", "7", "8"],
    correta: 0,
    explicacao:
      "Da primeira equação, x = 15/3 = 5. Substituindo na segunda: 10 + y = 13, logo y = 3. A alternativa 5 é o valor de x, resposta à pergunta errada. Quando uma equação envolve uma única incógnita, ela é sempre o ponto de partida mais econômico.",
  },
  {
    materia: "matematica",
    tema: "Matrizes, determinantes e sistemas lineares",
    dificuldade: "media",
    enunciado:
      "Sobre a relação entre o determinante de uma matriz quadrada A e o determinante de sua transposta, é correto afirmar que os dois valores:",
    opcoes: [
      "têm sempre sinais opostos.",
      "diferem sempre por um fator igual à ordem da matriz.",
      "são iguais apenas quando a matriz é simétrica.",
      "são iguais apenas quando o determinante é zero.",
      "são sempre iguais, qualquer que seja a matriz.",
    ],
    correta: 4,
    explicacao:
      "Transpor uma matriz troca linhas por colunas, e o cálculo do determinante trata linhas e colunas de forma equivalente: o valor não muda. Essa propriedade é a razão pela qual toda regra válida para linhas — como a do determinante nulo quando há linha de zeros — vale igualmente para colunas.",
  },
];
