/* Números inteiros e a reta numérica (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__numeros-inteiros-e-a-reta-numerica.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__numeros-inteiros-e-a-reta-numerica.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Comparando os números −8 e −3 na reta numérica, qual deles é o maior?",
    opcoes: [
      "−3",
      "−8",
      "0",
      "3",
      "8",
    ],
    correta: 0,
    explicacao:
      "Na reta numérica, os números crescem da esquerda para a direita, e quanto mais próximo de zero (por cima), maior o número negativo. Como −3 está mais à direita que −8, ou seja, mais perto de zero, −3 é o maior dos dois.\n\n−8 é o menor, não o maior. 0 e 3 nem aparecem na comparação pedida. E 8 é o oposto de −8, mas também não faz parte da comparação entre −8 e −3.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Nos números inteiros, qual é o valor absoluto do número −15?",
    opcoes: [
      "15",
      "−15",
      "14",
      "16",
      "0",
    ],
    correta: 0,
    explicacao:
      "O valor absoluto de um número é a sua distância até o zero na reta numérica, sempre um valor não negativo. Como −15 está a 15 unidades do zero, seu valor absoluto é 15, o mesmo valor absoluto de +15.\n\n−15 é o próprio número, não o seu valor absoluto, que nunca é negativo. 14 e 16 erram a distância por 1 unidade. E 0 seria o valor absoluto do próprio zero, não de −15.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Qual é o oposto (ou simétrico) do número 7 na reta numérica?",
    opcoes: [
      "−7",
      "7",
      "0",
      "−8",
      "−6",
    ],
    correta: 0,
    explicacao:
      "O oposto de um número tem o mesmo valor absoluto, mas o sinal trocado, e fica à mesma distância do zero, do outro lado da reta. O oposto de 7 é −7, porque os dois estão a 7 unidades do zero, um de cada lado.\n\n7 é o próprio número, não o seu oposto. 0 é o único número que é o seu próprio oposto, mas não é o caso de 7. E −8 e −6 têm o sinal certo, mas a distância errada até o zero.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Numa conta com números inteiros, quanto vale −12 + (−5)?",
    opcoes: [
      "−17",
      "−7",
      "17",
      "7",
      "−6",
    ],
    correta: 0,
    explicacao:
      "Somando dois números negativos, os valores absolutos se somam e o sinal negativo se mantém: 12 + 5 = 17, então −12 + (−5) = −17, mais distante do zero do que qualquer uma das duas parcelas.\n\n−7 e 7 vêm de subtrair os valores em vez de somar, como se o sinal do segundo número fosse positivo. 17 troca o sinal do resultado para positivo, por engano. E −6 erra a soma dos valores absolutos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Numa soma de números inteiros com sinais diferentes, quanto vale −9 + 14?",
    opcoes: [
      "5",
      "−5",
      "23",
      "−23",
      "6",
    ],
    correta: 0,
    explicacao:
      "Quando os sinais são diferentes, subtrai-se o menor valor absoluto do maior, e o resultado fica com o sinal do número de maior valor absoluto: 14 − 9 = 5, e como 14 é positivo e maior em valor absoluto, o resultado é 5, positivo.\n\n−5 troca o sinal do resultado. 23 e −23 somam os valores absolutos em vez de subtrair, tratando os sinais como se fossem iguais. E 6 erra a subtração por 1 unidade.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Numa subtração de inteiros, quanto vale 5 − (−3)?",
    opcoes: [
      "8",
      "2",
      "−2",
      "−8",
      "15",
    ],
    correta: 0,
    explicacao:
      "Subtrair um número negativo é o mesmo que somar o seu oposto: 5 − (−3) = 5 + 3 = 8. Os dois sinais de menos, um da subtração e outro do número negativo, se cancelam e viram um sinal de mais.\n\n2 e −2 tratam a subtração de −3 como se fosse 5 − 3, ignorando que os dois sinais de menos se cancelam. −8 troca o sinal do resultado inteiro. E 15 confunde subtração com multiplicação dos dois números.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Numa multiplicação de inteiros, quanto vale (−4) × 6?",
    opcoes: [
      "−24",
      "24",
      "−10",
      "−2",
      "10",
    ],
    correta: 0,
    explicacao:
      "Multiplicando um número negativo por um positivo, o resultado é negativo, e os valores absolutos se multiplicam: 4 × 6 = 24, então (−4) × 6 = −24, mais uma vez com sinal negativo.\n\n24 troca o sinal do resultado para positivo. −10 e 10 vêm de somar 4 e 6 em vez de multiplicar, com o sinal certo ou errado. E −2 não corresponde a nenhuma conta simples com esses números.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Numa multiplicação de dois números negativos, quanto vale (−7) × (−3)?",
    opcoes: [
      "21",
      "−21",
      "10",
      "−10",
      "4",
    ],
    correta: 0,
    explicacao:
      "Multiplicando dois números negativos, o resultado é positivo: os dois sinais de menos se cancelam. Os valores absolutos se multiplicam, 7 × 3 = 21, e o resultado é 21.\n\n−21 mantém o sinal negativo, esquecendo que negativo vezes negativo dá positivo. 10 e −10 somam 7 e 3 em vez de multiplicar. E 4 seria a diferença entre os dois números, não o produto.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Numa divisão de números inteiros, quanto vale (−20) ÷ 4?",
    opcoes: [
      "−5",
      "5",
      "−16",
      "−24",
      "−80",
    ],
    correta: 0,
    explicacao:
      "Dividindo um número negativo por um positivo, o resultado é negativo, e os valores absolutos se dividem: 20 ÷ 4 = 5, então (−20) ÷ 4 = −5, com o sinal negativo preservado da divisão.\n\n5 troca o sinal do resultado para positivo. −16 vem de subtrair em vez de dividir, 20 − 4 = 16, com o sinal negativo. −24 soma os dois valores absolutos. E −80 multiplica em vez de dividir.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Qual é a distância entre os números −4 e 3 na reta numérica?",
    opcoes: [
      "7",
      "1",
      "−7",
      "12",
      "−1",
    ],
    correta: 0,
    explicacao:
      "A distância entre dois pontos na reta numérica é o valor absoluto da diferença entre eles: |3 − (−4)| = |7| = 7 unidades separam −4 de 3, contando cada passo entre um número e outro.\n\n1 e −1 não correspondem a essa diferença. −7 é a diferença sem tomar o valor absoluto, e distância nunca é negativa. E 12 somaria os dois números em vez de calcular a diferença entre eles.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Entre os números −10, −1, 0, 5 e −7, qual é o menor?",
    opcoes: [
      "−1",
      "−10",
      "0",
      "5",
      "−7",
    ],
    correta: 1,
    explicacao:
      "Na reta numérica, quanto mais à esquerda um número está, menor ele é. Entre os números dados, −10 é o que está mais à esquerda, mais longe do zero do lado negativo, e por isso é o menor de todos.\n\n−7 e −1 são negativos, mas estão mais perto do zero que −10, logo são maiores que ele. 0 é maior que qualquer número negativo. E 5 é o maior de todos os cinco, sendo o único positivo.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "facil",
    enunciado:
      "Pela manhã, a temperatura em uma cidade era −3 °C e subiu 8 °C ao longo do dia. Qual é a temperatura à tarde?",
    opcoes: [
      "−5",
      "5",
      "11",
      "−11",
      "4",
    ],
    correta: 1,
    explicacao:
      "A nova temperatura é a soma da temperatura inicial com a variação: −3 + 8 = 5 °C. Como a variação é positiva e maior em valor absoluto que a temperatura inicial negativa, o resultado final é positivo, acima de zero.\n\n−5 troca o sinal do resultado. 11 e −11 somam os valores absolutos como se os sinais fossem iguais. E 4 erra a soma por 1 grau.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Quanto vale −6 + 9 + (−4), somando os três números inteiros na ordem em que aparecem?",
    opcoes: [
      "1",
      "−1",
      "−13",
      "13",
      "−19",
    ],
    correta: 1,
    explicacao:
      "Somando da esquerda para a direita: −6 + 9 = 3, porque os sinais são diferentes e 9 tem o maior valor absoluto. Depois, 3 + (−4) = −1, de novo com sinais diferentes, agora com −4 tendo o maior valor absoluto.\n\n1 troca o sinal do resultado final. −13 e 13 somariam os três valores absolutos como se todos os sinais fossem iguais. E −19 soma tudo com o sinal do primeiro termo, sem alternar corretamente.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Quanto vale 8 − 15 − (−9), resolvendo da esquerda para a direita?",
    opcoes: [
      "−2",
      "2",
      "−22",
      "22",
      "−16",
    ],
    correta: 1,
    explicacao:
      "Primeiro, 8 − 15 = −7, porque 15 tem maior valor absoluto e é negativo na subtração. Depois, subtrair um número negativo é somar o oposto: −7 − (−9) = −7 + 9 = 2, resultado positivo.\n\n−2 troca o sinal do resultado final. −22 e 22 tratam a última subtração como se fosse −7 − 9, ignorando que os dois sinais de menos se cancelam. E −16 erra a primeira subtração, 8 − 15.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Quanto vale (−2) × (−3) × (−4), multiplicando os três fatores na ordem em que aparecem?",
    opcoes: [
      "24",
      "−24",
      "−9",
      "9",
      "−14",
    ],
    correta: 1,
    explicacao:
      "Primeiro, (−2) × (−3) = 6, positivo, porque negativo vezes negativo dá positivo. Depois, 6 × (−4) = −24, negativo, porque positivo vezes negativo dá negativo. Como há três fatores negativos, uma quantidade ímpar, o resultado final é negativo.\n\n24 esqueceria o sinal negativo do terceiro fator. −9 e 9 somariam valores em vez de multiplicar. E −14 não corresponde a nenhuma combinação simples desses três números.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Quanto vale (−1) × (−2) × (−3) × (−4), multiplicando os quatro fatores?",
    opcoes: [
      "−24",
      "24",
      "10",
      "−10",
      "14",
    ],
    correta: 1,
    explicacao:
      "Multiplicando os valores absolutos, 1 × 2 × 3 × 4 = 24. Como há quatro fatores negativos, uma quantidade par, os sinais se cancelam em pares e o resultado final é positivo: 24.\n\n−24 esquece que uma quantidade par de fatores negativos dá resultado positivo. 10 e −10 somariam os quatro números em vez de multiplicar. E 14 não corresponde a nenhuma combinação simples desses valores.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Numa divisão de dois números negativos, quanto vale (−45) ÷ (−9)?",
    opcoes: [
      "−5",
      "5",
      "54",
      "−54",
      "36",
    ],
    correta: 1,
    explicacao:
      "Dividindo dois números negativos, o resultado é positivo: os sinais se cancelam. Os valores absolutos se dividem, 45 ÷ 9 = 5, então (−45) ÷ (−9) = 5.\n\n−5 manteria um sinal negativo que não existe aqui, já que negativo dividido por negativo dá positivo. 54 e −54 somam os dois números em vez de dividir. E 36 subtrai 45 − 9 em vez de dividir.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Um elevador está parado no andar −2 (o segundo subsolo) e sobe 5 andares. Em que andar ele para?",
    opcoes: [
      "−3",
      "3",
      "7",
      "−7",
      "2",
    ],
    correta: 1,
    explicacao:
      "A posição final é a soma da posição inicial com a variação: −2 + 5 = 3. O elevador sobe do segundo subsolo até o 3º andar acima do térreo, passando pelo andar 0 no meio do trajeto.\n\n−3 trocaria o sinal do resultado, como se o elevador tivesse descido em vez de subido. 7 e −7 somariam os valores absolutos como se os sinais fossem iguais. E 2 erra a soma por 1 andar.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Uma conta bancária tinha saldo de −R$ 120 (no cheque especial) e recebeu um depósito de R$ 350. Qual é o novo saldo?",
    opcoes: [
      "−230",
      "230",
      "470",
      "−470",
      "220",
    ],
    correta: 1,
    explicacao:
      "O novo saldo é a soma do saldo anterior com o depósito: −120 + 350 = 230. Como o depósito é maior em valor absoluto que a dívida, o saldo final fica positivo, R$ 230, e não há mais nada devendo ao banco.\n\n−230 trocaria o sinal do resultado, como se a dívida tivesse aumentado. 470 e −470 somariam os valores absolutos como se os sinais fossem iguais. E 220 erra a soma por R$ 10.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "A temperatura mínima de um dia foi −5 °C e a máxima foi 12 °C. Qual foi a amplitude térmica, isto é, a diferença entre a máxima e a mínima?",
    opcoes: [
      "7",
      "17",
      "−17",
      "−7",
      "6",
    ],
    correta: 1,
    explicacao:
      "A amplitude é a diferença entre a maior e a menor temperatura: 12 − (−5) = 12 + 5 = 17 °C, a variação total entre o momento mais frio e o mais quente do dia.\n\n7 subtrai os valores absolutos em vez de somá-los, ignorando que subtrair um negativo é somar. −17 e −7 trocam o sinal do resultado, mas amplitude térmica não é negativa. E 6 não corresponde a nenhuma conta simples com esses dois valores.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Qual é o valor da maior entre as somas −3 + 10 e −8 + 12?",
    opcoes: [
      "4",
      "−7",
      "7",
      "−4",
      "11",
    ],
    correta: 2,
    explicacao:
      "Calculando cada uma: −3 + 10 = 7, e −8 + 12 = 4. Comparando os dois resultados, 7 é maior que 4, então o valor da maior soma é 7, mesmo com a segunda soma partindo de um número mais negativo.\n\n4 é o valor da outra soma, a menor das duas. −7 e −4 trocam os sinais dos resultados corretos. E 11 somaria os dois resultados, 7 + 4, em vez de indicar apenas o maior deles.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Uma loja teve um prejuízo de R$ 800 em um mês e um lucro de R$ 950 no mês seguinte. Qual é o resultado acumulado dos dois meses?",
    opcoes: [
      "−150",
      "1.750",
      "150",
      "−1.750",
      "140",
    ],
    correta: 2,
    explicacao:
      "Representando o prejuízo como −800 e o lucro como 950, o resultado acumulado é a soma: −800 + 950 = 150. Como o lucro supera o prejuízo, o resultado final é positivo, um lucro de R$ 150.\n\n−150 trocaria o sinal do resultado, indicando prejuízo em vez de lucro. 1.750 e −1.750 somariam os valores absolutos como se os sinais fossem iguais. E 140 erra a soma por R$ 10.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Entre os números −15, 9, −20, 13 e −4, qual deles tem o maior valor absoluto?",
    opcoes: [
      "−15",
      "9",
      "−20",
      "13",
      "−4",
    ],
    correta: 2,
    explicacao:
      "Os valores absolutos são 15, 9, 20, 13 e 4. O maior deles é 20, que corresponde ao número −20. Mesmo sendo o mais negativo da lista, −20 é o que fica mais longe do zero, e por isso tem o maior valor absoluto.\n\n−15, 9, 13 e −4 têm valores absolutos menores que 20, então nenhum deles é a resposta certa para \"maior valor absoluto\", ainda que 13 seja o maior número positivo da lista.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Se |x| = 9, existem dois valores possíveis para x. Qual é a soma desses dois valores?",
    opcoes: [
      "18",
      "−18",
      "0",
      "9",
      "−9",
    ],
    correta: 2,
    explicacao:
      "O valor absoluto de x é 9 quando x = 9 ou x = −9, já que ambos estão a 9 unidades do zero, um de cada lado. Somando as duas soluções, 9 + (−9) = 0: elas são opostas e se cancelam.\n\n18 e −18 somariam os dois valores absolutos, 9 + 9, sem considerar que uma das soluções é negativa. 9 e −9 são cada uma das soluções isoladas, não a soma das duas.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Numa multiplicação com três fatores, quanto vale (−8) × 0 × 25?",
    opcoes: [
      "−8",
      "25",
      "0",
      "−200",
      "200",
    ],
    correta: 2,
    explicacao:
      "Qualquer multiplicação que tenha um fator igual a zero resulta em zero, não importa quantos outros fatores existam nem quais sejam os seus sinais: (−8) × 0 × 25 = 0, sem exceção alguma.\n\n−8 e 25 são fatores da multiplicação, não o resultado dela. −200 e 200 viriam de multiplicar apenas −8 por 25, ignorando o fator zero que anula toda a conta.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Colocando em ordem crescente os números −6, 4, −9, 0 e 2, qual deles fica em segundo lugar nessa ordem?",
    opcoes: [
      "−9",
      "0",
      "−6",
      "2",
      "4",
    ],
    correta: 2,
    explicacao:
      "Em ordem crescente, do menor para o maior, os números ficam −9, −6, 0, 2, 4. O primeiro da lista é −9, o mais negativo de todos, e o segundo, um pouco mais próximo de zero, é −6.\n\n−9 é o primeiro da lista ordenada, não o segundo. 0, 2 e 4 ocupam a terceira, quarta e quinta posições, respectivamente, depois de −9 e −6, porque são maiores que os dois números negativos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Um mergulhador está a −18 m em relação ao nível do mar (18 metros abaixo da superfície) e sobe 25 m. A que altura ele fica em relação ao nível do mar?",
    opcoes: [
      "−7",
      "43",
      "7",
      "−43",
      "8",
    ],
    correta: 2,
    explicacao:
      "A posição final é a soma da posição inicial com a subida: −18 + 25 = 7. Como a subida é maior em valor absoluto que a profundidade inicial, o mergulhador termina acima do nível do mar, a 7 metros de altura.\n\n−7 trocaria o sinal do resultado, deixando o mergulhador ainda abaixo da superfície. 43 e −43 somariam os valores absolutos como se os sinais fossem iguais. E 8 erra a soma por 1 metro.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Numa multiplicação com cinco fatores, quanto vale (−3) × (−2) × (−1) × 0 × 1?",
    opcoes: [
      "−6",
      "6",
      "0",
      "−1",
      "1",
    ],
    correta: 2,
    explicacao:
      "Como um dos fatores dessa multiplicação é 0, o resultado inteiro é 0, não importa quantos outros fatores negativos ou positivos existam na conta, nem em que ordem eles apareçam.\n\n−6 e 6 viriam de multiplicar só os três primeiros fatores, (−3) × (−2) × (−1), ignorando o zero que está no meio da conta. −1 e 1 ignoram quase todos os fatores, mantendo só um deles.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "A temperatura em uma cidade era −7 °C e caiu mais 6 °C. Qual é a nova temperatura?",
    opcoes: [
      "13",
      "−1",
      "−13",
      "1",
      "−14",
    ],
    correta: 2,
    explicacao:
      "Cair mais 6 graus a partir de −7 °C significa somar −6: −7 + (−6) = −13 °C, ainda mais frio do que estava pela manhã.\n\n13 trocaria o sinal do resultado, indicando um aquecimento em vez de um resfriamento. −1 e 1 tratariam a queda como uma subtração que cancela parte do valor, em vez de somar mais frio ao que já era negativo. E −14 erra a soma por 1 grau.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Uma empresa teve prejuízo de R$ 1.200 em janeiro e prejuízo de R$ 850 em fevereiro. Qual foi o resultado acumulado dos dois meses?",
    opcoes: [
      "−350",
      "2.050",
      "−2.050",
      "350",
      "−1.200",
    ],
    correta: 2,
    explicacao:
      "Representando os dois prejuízos como −1.200 e −850, o resultado acumulado é a soma dos dois: −1.200 + (−850) = −2.050, ou seja, um prejuízo total de R$ 2.050.\n\n−350 seria a diferença entre os dois prejuízos, não a soma. 2.050 e 350 trocam o sinal do resultado ou repetem a diferença, mas dois prejuízos somados não podem virar um valor positivo. E −1.200 é só o prejuízo de janeiro, sem incluir fevereiro.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Numa multiplicação de inteiros, quanto vale (−25) × 8?",
    opcoes: [
      "200",
      "−33",
      "−17",
      "−200",
      "33",
    ],
    correta: 3,
    explicacao:
      "Multiplicando um número negativo por um positivo, o resultado é negativo, e os valores absolutos se multiplicam: 25 × 8 = 200, então (−25) × 8 = −200.\n\n200 troca o sinal do resultado para positivo. −33 e 33 vêm de somar 25 e 8 em vez de multiplicar, com o sinal certo ou errado. E −17 seria a diferença entre os dois números, não o produto.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Um número somado a −7 resulta em 5. Qual é esse número?",
    opcoes: [
      "−12",
      "−2",
      "2",
      "12",
      "−1",
    ],
    correta: 3,
    explicacao:
      "Chamando o número de x, a equação é x + (−7) = 5, ou seja, x − 7 = 5. Somando 7 aos dois lados para isolar x, x = 5 + 7 = 12. Conferindo, 12 + (−7) = 12 − 7 = 5, como pedia o enunciado.\n\n−12 trocaria o sinal do número procurado. −2 e 2 viriam de subtrair 7 de 5 em vez de somar. E −1 não corresponde a nenhuma conta simples que leve a esse resultado.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Dois postes de uma rua estão marcados nas posições −15 e −4 de uma reta numérica que mede as distâncias em metros. Quantos metros separam os dois postes?",
    opcoes: [
      "−11",
      "19",
      "−19",
      "11",
      "9",
    ],
    correta: 3,
    explicacao:
      "A distância é o valor absoluto da diferença entre os dois números: |−4 − (−15)| = |−4 + 15| = |11| = 11 metros separam os dois postes.\n\n−11 não pode ser uma distância, que nunca é negativa. 19 e −19 somariam os valores absolutos dos dois números, 15 + 4, em vez de calcular a diferença entre eles. E 9 não corresponde a nenhuma conta simples com esses dois números.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "O produto de três números negativos é sempre um número de que sinal?",
    opcoes: [
      "Positivo",
      "Depende dos valores",
      "Sempre zero",
      "Negativo",
      "Sempre par",
    ],
    correta: 3,
    explicacao:
      "Cada par de fatores negativos que se multiplica cancela os sinais, tornando o resultado parcial positivo. Com três fatores negativos, dois deles formam um par que vira positivo, e o terceiro, ainda negativo, transforma o produto final em negativo. Por exemplo, (−2) × (−3) × (−4) = −24, e (−1) × (−5) × (−2) = −10: em ambos os casos, o resultado é negativo.\n\nNão é sempre positivo, nem depende dos valores: o sinal do produto de números negativos depende apenas de quantos fatores existem, e com três, ímpar, o resultado é sempre negativo. Não é sempre zero, a menos que um dos fatores seja zero, o que não é o caso de números negativos. E o sinal do produto não tem relação com ele ser par ou ímpar como número.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Seguindo a ordem das operações, quanto vale −3 + 4 × (−2)?",
    opcoes: [
      "−2",
      "14",
      "2",
      "−11",
      "−14",
    ],
    correta: 3,
    explicacao:
      "A multiplicação vem antes da adição, mesmo sem parênteses: 4 × (−2) = −8. Depois, −3 + (−8) = −11, somando dois números negativos.\n\n−2 viria de ignorar a ordem das operações e calcular (−3 + 4) × (−2) = 1 × (−2) = −2, invertendo a prioridade entre soma e multiplicação. 14 e 2 trocam algum sinal na conta. E −14 soma os valores absolutos de forma errada.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Uma pessoa deve R$ 40 para cada um de 3 amigos e tem R$ 75 guardados. Considerando as dívidas como valores negativos, qual é o seu saldo total?",
    opcoes: [
      "45",
      "−165",
      "165",
      "−45",
      "−35",
    ],
    correta: 3,
    explicacao:
      "As dívidas somam 3 × (−40) = −120. Somando o que a pessoa tem guardado, −120 + 75 = −45: ela ainda deve R$ 45 líquidos, mesmo depois de usar o que tinha guardado.\n\n45 trocaria o sinal do resultado, como se ela tivesse sobra em vez de dívida. −165 e 165 somariam a dívida total com o valor guardado como se os sinais fossem iguais. E −35 erra o valor total das dívidas antes de somar.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Qual é o valor da maior entre as expressões −2 × (−9) e −3 × 8?",
    opcoes: [
      "−24",
      "−18",
      "24",
      "18",
      "−6",
    ],
    correta: 3,
    explicacao:
      "Calculando cada uma: −2 × (−9) = 18, positivo, porque negativo vezes negativo dá positivo; e −3 × 8 = −24, negativo. Comparando os dois resultados, 18 é maior que −24, então o valor da maior expressão é 18.\n\n−24 é o valor da outra expressão, a menor das duas. −18 e 24 trocam o sinal do resultado correto. E −6 não corresponde a nenhuma conta simples com esses números.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "A soma de três números inteiros consecutivos é −18. Qual é o menor deles?",
    opcoes: [
      "−6",
      "−8",
      "−19",
      "−7",
      "−5",
    ],
    correta: 3,
    explicacao:
      "Chamando o menor número de x, os três consecutivos são x, x + 1 e x + 2, e a soma é 3x + 3 = −18. Subtraindo 3 dos dois lados, 3x = −21, e dividindo por 3, x = −7. Conferindo, −7 + (−6) + (−5) = −18.\n\n−6 e −8 são números próximos, mas não conferem: começando por −6, a soma seria −6 − 5 − 4 = −15, e começando por −8, seria −8 − 7 − 6 = −21, nenhum dos dois igual a −18. −19 e −5 erram ainda mais a conta.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Num jogo, um jogador perdeu 15 pontos na primeira rodada, ganhou 22 na segunda e perdeu 9 na terceira. Qual é a sua pontuação final?",
    opcoes: [
      "2",
      "−46",
      "46",
      "−2",
      "−4",
    ],
    correta: 3,
    explicacao:
      "Representando perdas como negativas e ganhos como positivos, a pontuação final é −15 + 22 + (−9). Somando na ordem em que as rodadas aconteceram: −15 + 22 = 7, e 7 + (−9) = −2, um saldo negativo ao final das três rodadas.\n\n2 trocaria o sinal do resultado final. −46 e 46 somariam os três valores absolutos como se todos os sinais fossem iguais. E −4 erra a conta por 2 pontos.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "media",
    enunciado:
      "Seguindo a ordem das operações da esquerda para a direita, quanto vale (−6) × 5 ÷ (−3)?",
    opcoes: [
      "−10",
      "−15",
      "15",
      "10",
      "2",
    ],
    correta: 3,
    explicacao:
      "Multiplicação e divisão têm a mesma prioridade, então se resolve da esquerda para a direita: primeiro (−6) × 5 = −30, e depois −30 ÷ (−3) = 10, positivo, porque negativo dividido por negativo dá positivo.\n\n−10 esqueceria que negativo dividido por negativo dá positivo. −15 e 15 viriam de dividir por um número diferente de −3. E 2 não corresponde a nenhuma conta simples com esses valores.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Resolvendo da esquerda para a direita, quanto vale −8 + 15 − (−6) − 20 + 3?",
    opcoes: [
      "4",
      "−24",
      "24",
      "−14",
      "−4",
    ],
    correta: 4,
    explicacao:
      "Passo a passo, da esquerda para a direita: −8 + 15 = 7; 7 − (−6) = 7 + 6 = 13; 13 − 20 = −7; e, por fim, −7 + 3 = −4. Cada etapa usa apenas o resultado da etapa anterior, sem voltar aos números originais.\n\n4 trocaria o sinal do resultado final. −24 e 24 viriam de um erro na etapa 13 − 20, tratando-a como se fosse outra operação. E −14 acumula um erro de sinal numa das subtrações da sequência.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Quanto vale (−2) × 3 × (−5) × (−1) × 4, multiplicando todos os cinco fatores?",
    opcoes: [
      "120",
      "−24",
      "24",
      "−600",
      "−120",
    ],
    correta: 4,
    explicacao:
      "Entre os cinco fatores, três são negativos: −2, −5 e −1, uma quantidade ímpar, então o resultado final é negativo. Multiplicando os valores absolutos, 2 × 3 × 5 × 1 × 4 = 120. O resultado é −120.\n\n120 esqueceria que uma quantidade ímpar de fatores negativos dá resultado negativo. −24 e 24 usariam só parte dos fatores na multiplicação. E −600 multiplicaria um dos valores absolutos errado.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Uma conta bancária começa com saldo 0. Em três dias, os lançamentos são −350, +500 e −80, nessa ordem. Qual é o saldo ao final dos três dias?",
    opcoes: [
      "−70",
      "930",
      "−930",
      "150",
      "70",
    ],
    correta: 4,
    explicacao:
      "Somando os três lançamentos ao saldo inicial: 0 − 350 = −350; −350 + 500 = 150; e 150 − 80 = 70. O saldo final é R$ 70.\n\n−70 trocaria o sinal do resultado final. 930 e −930 somariam os valores absolutos dos três lançamentos como se todos tivessem o mesmo sinal. E 150 é o saldo depois de apenas dois lançamentos, antes do último débito de R$ 80.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Se |x − 3| = 8, existem dois valores possíveis para x. Qual é o maior deles?",
    opcoes: [
      "−5",
      "5",
      "−11",
      "8",
      "11",
    ],
    correta: 4,
    explicacao:
      "A equação |x − 3| = 8 tem duas soluções: x − 3 = 8, que dá x = 11, e x − 3 = −8, que dá x = −5. Comparando as duas, 11 é a maior, já que está mais à direita na reta numérica.\n\n−5 é a outra solução, a menor das duas. 5 e −11 não satisfazem a equação original: por exemplo, |5 − 3| = 2, diferente de 8. E 8 é o valor da distância dada na equação, não uma solução para x.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Um ponto A está na posição −7 da reta numérica, e um ponto B está 12 unidades à direita de A. Em que posição está o ponto B?",
    opcoes: [
      "−5",
      "19",
      "−19",
      "−12",
      "5",
    ],
    correta: 4,
    explicacao:
      "Andar para a direita na reta numérica significa somar: a posição de B é −7 + 12 = 5. O ponto B fica do lado positivo da reta, tendo cruzado o zero no caminho a partir de A.\n\n−5 trocaria o sinal do resultado. 19 e −19 somariam os valores absolutos, 7 e 12, como se estivessem do mesmo lado do zero. E −12 ignoraria a posição inicial de A, usando só a distância percorrida.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Resolvendo os parênteses primeiro, quanto vale (−4 + 9) × (−3 − 2)?",
    opcoes: [
      "25",
      "−1",
      "1",
      "−35",
      "−25",
    ],
    correta: 4,
    explicacao:
      "Resolvendo os parênteses primeiro: −4 + 9 = 5, e −3 − 2 = −5. Multiplicando os dois resultados, 5 × (−5) = −25, negativo, porque positivo vezes negativo dá negativo, como manda a regra de sinais.\n\n25 esqueceria o sinal negativo do segundo parêntese. −1 e 1 viriam de somar os dois resultados em vez de multiplicar. E −35 usaria um valor errado num dos parênteses.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Às 6h, a temperatura era −4 °C. Ela subiu 3 °C até as 9h, subiu mais 6 °C até o meio-dia, e caiu 5 °C até as 18h. Qual era a temperatura às 18h?",
    opcoes: [
      "2",
      "−2",
      "10",
      "−10",
      "0",
    ],
    correta: 4,
    explicacao:
      "Seguindo as variações na ordem em que aconteceram: −4 + 3 = −1 às 9h; −1 + 6 = 5 ao meio-dia; e 5 − 5 = 0 às 18h. A temperatura às 18h era 0 °C, exatamente no ponto de congelamento.\n\n2 e −2 vêm de um erro numa das três variações. 10 esqueceria a queda final de 5 °C. E −10 inverteria o sinal de uma das subidas, tratando-a como uma nova queda.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Dois números inteiros têm soma −4 e diferença 10, sendo a diferença calculada como o maior menos o menor. Qual é o menor desses dois números?",
    opcoes: [
      "3",
      "7",
      "−3",
      "14",
      "−7",
    ],
    correta: 4,
    explicacao:
      "Chamando o maior de M e o menor de m, M + m = −4 e M − m = 10. Somando as duas equações, 2M = 6, logo M = 3. Substituindo na soma, m = −4 − 3 = −7. Conferindo: 3 + (−7) = −4, e 3 − (−7) = 10.\n\n3 é o maior dos dois números, não o menor. 7 e −3 não satisfazem as duas condições ao mesmo tempo. E 14 é a soma dos valores absolutos dos dois números, não o menor deles.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "O produto de um número inteiro por −6 é 42. Qual é esse número?",
    opcoes: [
      "7",
      "−8",
      "8",
      "−36",
      "−7",
    ],
    correta: 4,
    explicacao:
      "Chamando o número de x, a equação é x × (−6) = 42. Dividindo os dois lados por −6, x = 42 ÷ (−6) = −7, negativo, porque um número negativo multiplicado por −7 dá um resultado positivo. Conferindo, (−7) × (−6) = 42.\n\n7 trocaria o sinal do número procurado: 7 × (−6) = −42, e não 42. −8 e 8 ficam perto do valor certo, mas não conferem: (−8) × (−6) = 48, diferente de 42. E −36 seria a soma de 42 com −6, não a divisão.",
  },
  {
    materia: "matematica-fund",
    tema: "Números inteiros e a reta numérica",
    dificuldade: "dificil",
    enunciado:
      "Entre os números −12, 5, −20, 9 e −3, qual deles está mais distante de zero na reta numérica?",
    opcoes: [
      "−12",
      "9",
      "−3",
      "5",
      "−20",
    ],
    correta: 4,
    explicacao:
      "A distância até o zero é o valor absoluto de cada número: 12, 5, 20, 9 e 3, respectivamente. O maior desses valores é 20, correspondente ao número −20, que por isso é o mais distante do zero, mesmo sendo o mais negativo da lista.\n\n−12, 9 e −3 têm valores absolutos menores que 20. E 5 tem o menor valor absoluto de todos, sendo o mais próximo do zero, não o mais distante.",
  },
];
