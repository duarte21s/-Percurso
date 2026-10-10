/* Equação do 1º grau (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__equacao-do-1o-grau.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__equacao-do-1o-grau.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Resolvendo a equação x + 7 = 15, que valor de x torna a igualdade verdadeira?",
    opcoes: [
      "22",
      "−8",
      "7",
      "8",
      "15",
    ],
    correta: 3,
    explicacao:
      "Para isolar x, subtrai-se 7 dos dois lados da igualdade, que é a operação inversa de somar 7: x = 15 − 7 = 8. Conferindo, substituindo x por 8, o lado esquerdo vale 8 + 7 = 15, igual ao lado direito.\n\n22 soma 7 a 15 em vez de subtrair. −8 troca o sinal do resultado. 7 é o número que está somado a x, e não o valor de x. E 15 é o valor do lado direito, e não da incógnita.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Qual é a solução da equação x − 9 = 4, isto é, o valor de x que a torna verdadeira?",
    opcoes: [
      "13",
      "5",
      "−5",
      "36",
      "4",
    ],
    correta: 0,
    explicacao:
      "Para isolar x, soma-se 9 aos dois lados, a operação inversa de subtrair 9: x = 4 + 9 = 13. Conferindo, substituindo x por 13, o lado esquerdo vale 13 − 9 = 4, igual ao lado direito. Como subtrair 9 é desfeito somando 9, o valor de x é sempre o resultado do lado direito mais o número subtraído.\n\n5 e −5 subtraem 9 de 4, trocando a operação inversa. 36 multiplica 9 por 4. E 4 é o valor do lado direito, e não o valor de x.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Resolvendo a equação 3x = 21, qual é o valor de x?",
    opcoes: [
      "18",
      "24",
      "7",
      "63",
      "3",
    ],
    correta: 2,
    explicacao:
      "O número 3 está multiplicando x, então divide-se os dois lados por 3, a operação inversa: x = 21 ÷ 3 = 7. Conferindo, substituindo x por 7, o lado esquerdo vale 3 × 7 = 21, igual ao lado direito. A operação inversa da multiplicação é a divisão, e ela deve ser aplicada aos dois lados da igualdade, para manter o equilíbrio.\n\n18 subtrai 3 de 21, em vez de dividir. 24 soma 3 a 21. 63 multiplica 21 por 3. E 3 é o coeficiente de x, e não a solução.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Resolvendo a equação x/4 = 6, em que a incógnita está dividida por 4, qual é o valor de x?",
    opcoes: [
      "10",
      "24",
      "2",
      "1,5",
      "6",
    ],
    correta: 1,
    explicacao:
      "Como x está dividido por 4, multiplicam-se os dois lados por 4, a operação inversa: x = 6 × 4 = 24. Conferindo, substituindo x por 24, o lado esquerdo vale 24 ÷ 4 = 6, igual ao lado direito. A operação inversa da divisão é a multiplicação, e ela deve ser aplicada aos dois lados da igualdade, para manter o equilíbrio.\n\n10 soma 4 a 6. 2 subtrai 4 de 6. 1,5 divide 6 por 4, em vez de multiplicar. E 6 é o valor do lado direito, e não da incógnita.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Resolvendo a equação 2x + 3 = 11, em duas etapas, qual é o valor de x?",
    opcoes: [
      "7",
      "4",
      "14",
      "8",
      "5,5",
    ],
    correta: 1,
    explicacao:
      "Primeiro, subtrai-se 3 dos dois lados: 2x = 11 − 3 = 8. Depois, divide-se por 2: x = 8 ÷ 2 = 4. Conferindo, substituindo x por 4, o lado esquerdo vale 2 × 4 + 3 = 11, igual ao lado direito. O procedimento é desfazer, na ordem inversa, as operações aplicadas a x.\n\n7 faz 11 − 4, usando números errados. 14 soma 3 a 11. 8 para na primeira etapa, sem dividir por 2. E 5,5 divide 11 por 2 sem antes subtrair o 3.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Qual é a solução da equação 5x − 10 = 0, em que o lado direito é zero?",
    opcoes: [
      "−2",
      "2",
      "10",
      "0",
      "5",
    ],
    correta: 1,
    explicacao:
      "Soma-se 10 aos dois lados: 5x = 10. Depois, divide-se por 5: x = 10 ÷ 5 = 2. Conferindo, substituindo x por 2, o lado esquerdo vale 5 × 2 − 10 = 0, igual ao lado direito.\n\n−2 troca o sinal do resultado. 10 para na primeira etapa, sem dividir por 5. 0 é o valor do lado direito, e não da incógnita. E 5 é o coeficiente de x, e não a solução.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "O dobro de um número, mais 5, é igual a 17. Qual é esse número?",
    opcoes: [
      "6",
      "11",
      "12",
      "5,5",
      "22",
    ],
    correta: 0,
    explicacao:
      "Chamando o número de x, a equação é 2x + 5 = 17. Subtraindo 5, 2x = 12, e dividindo por 2, x = 6. Conferindo, o dobro de 6 é 12, e 12 + 5 = 17. Traduzir o enunciado em equação é o primeiro passo: o dobro vira 2x, mais 5 vira + 5, e é igual a 17 vira = 17.\n\n11 é o resultado de 17 − 6, e não do número. 12 é o valor de 2x, isto é, o dobro, e não o número. 5,5 divide 11 por 2, sem relação com a equação. E 22 soma 5 a 17.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Uma caixa tem certa quantidade de lápis e, ao juntar mais 12 lápis, passa a ter 30. Quantos lápis havia na caixa antes?",
    opcoes: [
      "18",
      "42",
      "−18",
      "2,5",
      "360",
    ],
    correta: 0,
    explicacao:
      "Chamando a quantidade inicial de x, a equação é x + 12 = 30, e para isolar x subtrai-se 12 dos dois lados, pois subtrair é a operação inversa de somar: x = 30 − 12 = 18 lápis. Conferindo, 18 + 12 = 30.\n\n42 soma 12 a 30, em vez de subtrair. −18 troca o sinal do resultado. 2,5 divide 30 por 12. E 360 multiplica 30 por 12. Como o total final é maior que a quantidade inicial, a solução só pode ser menor que 30, o que descarta 42 e 360.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Qual é a raiz da equação 4x + 1 = 13, isto é, o valor de x que a satisfaz?",
    opcoes: [
      "12",
      "3",
      "3,5",
      "4",
      "−3",
    ],
    correta: 1,
    explicacao:
      "Subtrai-se 1 dos dois lados: 4x = 12. Divide-se por 4: x = 3. Conferindo, substituindo x por 3, o lado esquerdo vale 4 × 3 + 1 = 13, igual ao lado direito. Conferindo de outra forma, 13 − 1 = 12, e 12 dividido por 4 dá 3, que é o valor de x encontrado pela ordem inversa das operações.\n\n12 é o valor de 4x, e não de x. 3,5 divide 14 por 4, somando 1 em vez de subtrair. 4 é o coeficiente de x. E −3 troca o sinal da solução.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Resolvendo a equação 7 − x = 2, em que x está sendo subtraído de 7, qual é o valor de x?",
    opcoes: [
      "9",
      "5",
      "−5",
      "−9",
      "14",
    ],
    correta: 1,
    explicacao:
      "Para saber quanto falta de 2 até 7, calcula-se 7 − 2 = 5. Pela álgebra, subtrai-se 7 dos dois lados: −x = −5, e trocando os sinais, x = 5. Conferindo, substituindo x por 5, o lado esquerdo vale 7 − 5 = 2, igual ao lado direito. Outra forma é notar que x e 2 são as duas partes de 7, e que 7 − 2 = 5.\n\n9 soma 7 e 2. −5 esquece de trocar o sinal de −x. −9 comete os dois erros. E 14 multiplica 7 por 2.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "Resolvendo a equação x + x + x = 27, em que a incógnita aparece três vezes, qual é o valor de x?",
    opcoes: [
      "81",
      "9",
      "24",
      "3",
      "30",
    ],
    correta: 1,
    explicacao:
      "Somando os termos semelhantes, x + x + x = 3x, e a equação fica 3x = 27. Dividindo por 3, x = 9. Conferindo, 9 + 9 + 9 = 27. Em linguagem de multiplicação, x + x + x é o mesmo que 3 · x, e por isso a equação equivale a 3x = 27, em que o coeficiente 3 multiplica a incógnita, e dividir por 3 desfaz essa multiplicação.\n\n81 multiplica 27 por 3, em vez de dividir. 24 subtrai 3 de 27. 3 é o número de parcelas, e não o valor de x. E 30 soma 3 a 27.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "facil",
    enunciado:
      "A idade de Pedro, somada a 6 anos, resulta em 20 anos. Quantos anos Pedro tem hoje?",
    opcoes: [
      "26",
      "14",
      "120",
      "3,3",
      "6",
    ],
    correta: 1,
    explicacao:
      "Chamando a idade de Pedro de x, a equação é x + 6 = 20, e x = 20 − 6 = 14 anos. Conferindo, 14 + 6 = 20. A idade que se procura é a parte desconhecida de uma soma, e a parte desconhecida se obtém subtraindo a parte conhecida do total, isto é, 20 menos 6. Por isso a equação x + 6 = 20 traduz exatamente o enunciado, e sua solução, 14, é a idade atual de Pedro.\n\n26 soma 6 a 20, em vez de subtrair. 120 multiplica 20 por 6. 3,3 divide 20 por 6. E 6 é o número somado, e não a idade de Pedro.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação 3x + 5 = 2x + 12, com x dos dois lados, qual é o valor de x?",
    opcoes: [
      "17",
      "−7",
      "1,4",
      "7",
      "5",
    ],
    correta: 3,
    explicacao:
      "Reúnem-se os termos com x de um lado e os números do outro: 3x − 2x = 12 − 5, o que dá x = 7. Conferindo, substituindo x por 7, o lado esquerdo vale 3 × 7 + 5 = 26, e o direito vale 2 × 7 + 12 = 26. Nessa equação, x aparece dos dois lados.\n\n17 soma 12 e 5, em vez de subtrair. −7 troca o sinal do resultado. 1,4 divide 7 por 5. E 5 é um dos números da equação, e não a solução.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação 4(x − 2) = 20, que começa por um produto com parênteses, qual é o valor de x?",
    opcoes: [
      "3",
      "8",
      "22",
      "2",
      "7",
    ],
    correta: 4,
    explicacao:
      "Pode-se dividir os dois lados por 4: x − 2 = 5, e somar 2: x = 7. Distribuindo, 4x − 8 = 20, 4x = 28 e x = 7. Conferindo, substituindo x por 7, o lado esquerdo vale 4 × (7 − 2) = 20, igual ao lado direito.\n\n3 é 5 − 2, subtraindo em vez de somar. 8 é o produto de 4 por 2, sem relação com a solução. 22 soma 2 a 20. E 2 é o número que está sendo subtraído de x.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação 2(x + 3) = 3x − 4, qual é o valor de x?",
    opcoes: [
      "−10",
      "2",
      "0",
      "−2",
      "10",
    ],
    correta: 4,
    explicacao:
      "Distribuindo, 2x + 6 = 3x − 4. Reunindo os termos, 6 + 4 = 3x − 2x, então x = 10. Conferindo, substituindo x por 10, o lado esquerdo vale 2 × 13 = 26, e o direito vale 30 − 4 = 26.\n\n−10 troca o sinal do resultado. 2 subtrai 4 de 6, sem reunir os termos com x. 0 e −2 não satisfazem a equação, pois o lado esquerdo vale 6 e 2, e o direito, −4 e −10.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação (x + 1)/2 = 5, em que a soma inteira está dividida por 2, qual é o valor de x?",
    opcoes: [
      "11",
      "9",
      "4",
      "10",
      "6",
    ],
    correta: 1,
    explicacao:
      "Multiplicam-se os dois lados por 2: x + 1 = 10. Depois, subtrai-se 1: x = 9. Conferindo, substituindo x por 9, o lado esquerdo vale (9 + 1)/2 = 5, igual ao lado direito. Como a soma x + 1 está dividida por 2, os parênteses indicam que o 1 também é dividido, e por isso a primeira etapa é multiplicar tudo por 2.\n\n11 soma 1 em vez de subtrair. 4 divide 5 por 2 de modo errado. 10 é o valor de x + 1, e não de x. E 6 soma 1 a 5, sem multiplicar por 2.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação x/3 + x/2 = 10, com frações de denominadores diferentes, qual é o valor de x?",
    opcoes: [
      "6",
      "10",
      "12",
      "60",
      "5",
    ],
    correta: 2,
    explicacao:
      "Com denominador comum 6, x/3 + x/2 = 2x/6 + 3x/6 = 5x/6. Então 5x/6 = 10, e x = 10 × 6 ÷ 5 = 12. Conferindo, substituindo x por 12, 12/3 + 12/2 = 4 + 6 = 10, igual ao lado direito.\n\n6 é o denominador comum, e não a solução. 10 é o valor do lado direito. 60 multiplica 10 por 6, sem dividir por 5. E 5 é o coeficiente da soma, e não o valor de x.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação 5x − 7 = 3x + 9, qual é o valor de x?",
    opcoes: [
      "16",
      "1",
      "−8",
      "−1",
      "8",
    ],
    correta: 4,
    explicacao:
      "Reúnem-se os termos: 5x − 3x = 9 + 7, isto é, 2x = 16, e x = 8. Conferindo, substituindo x por 8, o lado esquerdo vale 5 × 8 − 7 = 33, e o direito vale 3 × 8 + 9 = 33. Reunir os termos com x de um lado e os números do outro é o método geral para equações com x nos dois lados.\n\n16 é o valor de 2x, sem dividir por 2. 1 subtrai 9 de 7 e divide por algo sem relação. −8 e −1 trocam o sinal da solução ou do resultado.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "A soma de três números naturais consecutivos é 57. Qual é o menor deles?",
    opcoes: [
      "19",
      "17",
      "57",
      "20",
      "18",
    ],
    correta: 4,
    explicacao:
      "Chamando o menor de x, os outros são x + 1 e x + 2, e a equação é x + (x + 1) + (x + 2) = 57, isto é, 3x + 3 = 57. Então 3x = 54 e x = 18. Conferindo, 18 + 19 + 20 = 57. Números consecutivos diferem de uma unidade, e por isso se escrevem como x, x + 1 e x + 2.\n\n19 é o número do meio, e não o menor. 17 é o número anterior ao menor, sem relação com a soma. 57 é a soma, e não o menor. E 20 é o maior dos três.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "O triplo de um número, diminuído de 4, é igual ao dobro desse número, aumentado de 9. Qual é o número?",
    opcoes: [
      "13",
      "5",
      "−13",
      "−5",
      "2",
    ],
    correta: 0,
    explicacao:
      "Chamando o número de x, a equação é 3x − 4 = 2x + 9. Reunindo os termos, 3x − 2x = 9 + 4, então x = 13. Conferindo, o triplo de 13 é 39, e 39 − 4 = 35, e o dobro é 26, e 26 + 9 = 35. Traduzindo, o triplo é 3x, diminuído de 4 é − 4, o dobro é 2x e aumentado de 9 é + 9.\n\n5 subtrai 4 de 9. −13 e −5 trocam o sinal da solução. E 2 é o coeficiente do lado direito, e não o valor de x.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Lucas tem o triplo da idade de Ana, e juntos eles têm 48 anos. Quantos anos Ana tem?",
    opcoes: [
      "36",
      "16",
      "12",
      "24",
      "9",
    ],
    correta: 2,
    explicacao:
      "Chamando a idade de Ana de x, a de Lucas é 3x, e a equação é x + 3x = 48, isto é, 4x = 48, e x = 12. Conferindo, Lucas tem 36, e 12 + 36 = 48. A expressão o triplo da idade de Ana se escreve 3x, e a soma das idades é x + 3x = 4x.\n\n36 é a idade de Lucas, e não de Ana. 16 divide 48 por 3, em vez de por 4. 24 é a metade da soma, sem relação com as idades. E 9 não satisfaz a soma, pois 9 + 27 = 36.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "O perímetro de um retângulo é 60 cm, e o comprimento é o dobro da largura. Quantos centímetros mede a largura?",
    opcoes: [
      "20",
      "15",
      "10",
      "30",
      "5",
    ],
    correta: 2,
    explicacao:
      "Chamando a largura de x, o comprimento é 2x, e o perímetro é 2 × (x + 2x) = 6x. Então 6x = 60 e x = 10 cm. Conferindo, o comprimento é 20 cm, e 2 × (10 + 20) = 60.\n\n20 é o comprimento, e não a largura. 15 divide o perímetro por 4, como se fosse um quadrado. 30 é a soma dos dois lados diferentes, a metade do perímetro. E 5 dá perímetro 30, e não 60.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Uma corrida de táxi custa R$ 5 de bandeirada mais R$ 2 por quilômetro rodado. Com R$ 35, quantos quilômetros se pode rodar?",
    opcoes: [
      "15",
      "20",
      "17,5",
      "12",
      "30",
    ],
    correta: 0,
    explicacao:
      "Chamando os quilômetros de x, a equação é 5 + 2x = 35. Subtraindo 5, 2x = 30, e dividindo por 2, x = 15 km. Conferindo, 15 km custam 2 × 15 = 30, e com a bandeirada, 35. O custo total é a parte fixa, a bandeirada de R$ 5, mais a parte variável, R$ 2 vezes o número de quilômetros.\n\n20 e 30 ignoram a bandeirada ou dividem de modo errado. 17,5 divide 35 por 2, sem descontar os R$ 5. E 12 não satisfaz, pois custaria 5 + 24 = 29.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Um número aumentado de sua metade resulta em 36. Qual é esse número?",
    opcoes: [
      "18",
      "27",
      "12",
      "72",
      "24",
    ],
    correta: 4,
    explicacao:
      "Chamando o número de x, a equação é x + x/2 = 36, isto é, 3x/2 = 36. Multiplicando por 2, 3x = 72, e x = 24. Conferindo, a metade de 24 é 12, e 24 + 12 = 36. Escrevendo sua metade como x/2, a soma x + x/2 é 3x/2, isto é, uma vez e meia o número.\n\n18 é a metade de 36, sem relação com a equação. 27 e 12 não satisfazem a igualdade, pois 27 + 13,5 = 40,5 e 12 + 6 = 18. E 72 é o valor de 3x, sem dividir por 3.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "A terça parte de um número, somada a 4, é igual a 10. Qual é esse número?",
    opcoes: [
      "6",
      "42",
      "18",
      "14",
      "30",
    ],
    correta: 2,
    explicacao:
      "Chamando o número de x, a equação é x/3 + 4 = 10. Subtraindo 4, x/3 = 6, e multiplicando por 3, x = 18. Conferindo, a terça parte de 18 é 6, e 6 + 4 = 10. Como a terça parte de x se escreve x/3, a primeira etapa é isolar esse termo, subtraindo 4, e só depois multiplicar por 3.\n\n6 é a terça parte, e não o número. 42 soma 4 a 10 e multiplica por 3. 14 soma 4 a 10, sem relação. E 30 não satisfaz, pois a terça parte de 30 é 10, e 10 + 4 = 14.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Um caderno custa R$ 4 a mais que uma caneta, e os dois juntos custam R$ 14. Quanto custa a caneta?",
    opcoes: [
      "9",
      "5",
      "10",
      "7",
      "4",
    ],
    correta: 1,
    explicacao:
      "Chamando o preço da caneta de p, o do caderno é p + 4, e a equação é p + (p + 4) = 14, isto é, 2p + 4 = 14. Então 2p = 10 e p = 5. Conferindo, o caderno custa R$ 9, e 5 + 9 = 14.\n\n9 é o preço do caderno. 10 é a metade do total, menos o erro de ignorar a diferença. 7 divide 14 por 2, sem considerar os R$ 4 a mais. E 4 é a diferença de preço, e não o preço da caneta.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "A média de quatro números é 15. Três deles são 10, 12 e 20. Qual é o quarto número?",
    opcoes: [
      "18",
      "15",
      "20",
      "17",
      "16",
    ],
    correta: 0,
    explicacao:
      "Como a média é 15, a soma dos quatro números é 4 × 15 = 60. Os três conhecidos somam 10 + 12 + 20 = 42, então o quarto é 60 − 42 = 18. Pela equação, (42 + x)/4 = 15, e x = 18. Conferindo, (42 + 18)/4 = 15. A média é a soma dos valores dividida pela quantidade deles, e por isso a equação multiplica a média pelo número de valores.\n\n15 é a própria média, e não o número que falta. 20, 17 e 16 fariam a soma dar 62, 59 e 58, e não 60.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Numa balança, três sacos iguais e mais 2 quilos de um lado equilibram 11 quilos do outro. Quanto pesa cada saco?",
    opcoes: [
      "4,5",
      "9",
      "4,3",
      "3",
      "2",
    ],
    correta: 3,
    explicacao:
      "Chamando o peso de um saco de x, a equação é 3x + 2 = 11. Subtraindo 2, 3x = 9, e dividindo por 3, x = 3 kg. Conferindo, 3 sacos de 3 kg pesam 9 kg, e com os 2 kg, 11 kg. Uma balança em equilíbrio indica que os dois lados têm o mesmo peso, o que dá a igualdade 3x + 2 = 11.\n\n4,5 divide 9 por 2, em vez de 3. 9 é o peso dos três sacos juntos. 4,3 divide 13 por 3, somando 2 em vez de subtrair. E 2 é o peso extra, e não o de um saco.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação 2x + 7 = x + 4, cuja solução é um número negativo, qual é o valor de x?",
    opcoes: [
      "−3",
      "3",
      "11",
      "−11",
      "1",
    ],
    correta: 0,
    explicacao:
      "Reúnem-se os termos: 2x − x = 4 − 7, então x = −3. Conferindo, substituindo x por −3, o lado esquerdo vale 2 × (−3) + 7 = 1, e o direito vale −3 + 4 = 1. Quando x aparece dos dois lados, o resultado pode ser negativo, como aqui, sem que isso indique erro.\n\n3 troca o sinal da solução. 11 soma 4 e 7, em vez de subtrair. −11 também troca o sinal. E 1 é o valor comum dos dois lados, e não de x.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação 0,5x + 2 = 7, que tem um coeficiente decimal, qual é o valor de x?",
    opcoes: [
      "4,5",
      "18",
      "3,5",
      "14",
      "10",
    ],
    correta: 4,
    explicacao:
      "Subtrai-se 2 dos dois lados: 0,5x = 5. Como 0,5 é a metade, x é o dobro de 5, isto é, x = 5 ÷ 0,5 = 10. Conferindo, substituindo x por 10, o lado esquerdo vale 0,5 × 10 + 2 = 7, igual ao lado direito.\n\n4,5 subtrai 0,5 de 5. 18 soma 2 a 7 e multiplica por 2. 3,5 divide 7 por 2, sem descontar o 2. E 14 é o dobro de 7, sem descontar o 2 antes.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação 3(x − 1) = 2(x + 4), com parênteses dos dois lados, qual é o valor de x?",
    opcoes: [
      "5",
      "−11",
      "11",
      "−5",
      "7",
    ],
    correta: 2,
    explicacao:
      "Distribuindo, 3x − 3 = 2x + 8. Reunindo os termos, 3x − 2x = 8 + 3, então x = 11. Conferindo, substituindo x por 11, o lado esquerdo vale 3 × 10 = 30, e o direito vale 2 × 15 = 30. A distributiva deve ser aplicada antes de reunir os termos: 3(x − 1) = 3x − 3 e 2(x + 4) = 2x + 8, sem esquecer de multiplicar o segundo termo de cada parêntese.\n\n5 subtrai 3 de 8. −11 e −5 trocam o sinal da solução. E 7 é a diferença 11 − 4, sem relação com a equação.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação x/5 − 2 = 3, qual é o valor de x?",
    opcoes: [
      "5",
      "1",
      "25",
      "−5",
      "15",
    ],
    correta: 2,
    explicacao:
      "Soma-se 2 dos dois lados: x/5 = 5. Multiplica-se por 5: x = 25. Conferindo, substituindo x por 25, o lado esquerdo vale 25/5 − 2 = 3, igual ao lado direito. A primeira etapa é isolar o termo com x, somando 2 aos dois lados, e só depois desfazer a divisão por 5, multiplicando os dois lados por 5.\n\n5 é o valor de x/5, e não de x. 1 subtrai 2 de 3. −5 troca o sinal de 5. E 15 multiplica 3 por 5, sem somar o 2 antes.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Um pai tem 40 anos e o filho tem 10. Daqui a quantos anos a idade do pai será o triplo da idade do filho?",
    opcoes: [
      "5",
      "10",
      "15",
      "20",
      "2,5",
    ],
    correta: 0,
    explicacao:
      "Daqui a t anos, o pai terá 40 + t e o filho, 10 + t. A equação é 40 + t = 3 × (10 + t), isto é, 40 + t = 30 + 3t, então 10 = 2t e t = 5. Conferindo, daqui a 5 anos, o pai terá 45 e o filho, 15, e 45 = 3 × 15.\n\n10 é a diferença 40 − 30, sem dividir por 2. 15 e 20 dão idades em que o pai não é o triplo do filho: por exemplo, em 10 anos, 50 e 20. E 2,5 é a metade de 5.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Dois irmãos têm juntos R$ 90, e um deles tem R$ 10 a mais que o outro. Quanto tem o irmão que tem menos?",
    opcoes: [
      "50",
      "45",
      "35",
      "40",
      "80",
    ],
    correta: 3,
    explicacao:
      "Chamando o valor do que tem menos de x, o outro tem x + 10, e a equação é x + (x + 10) = 90, isto é, 2x = 80 e x = 40. Conferindo, o outro tem R$ 50, e 40 + 50 = 90. Por isso a soma é x + (x + 10) = 90.\n\n50 é o valor do que tem mais. 45 é a metade do total, que só valeria se os dois tivessem o mesmo valor. 35 e 80 não satisfazem a soma de R$ 90 com diferença de R$ 10.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Um quarto de uma quantia, mais R$ 15, é igual à metade dessa quantia. Qual é a quantia?",
    opcoes: [
      "45",
      "60",
      "30",
      "90",
      "20",
    ],
    correta: 1,
    explicacao:
      "Chamando a quantia de x, a equação é x/4 + 15 = x/2. Reunindo os termos, 15 = x/2 − x/4 = x/4, então x = 60. Conferindo, um quarto de 60 é 15, e 15 + 15 = 30, que é a metade de 60. Reunindo x/2 − x/4 = x/4, conclui-se que R$ 15 é exatamente um quarto da quantia, e a quantia é 4 × 15.\n\n45, 30, 90 e 20 não satisfazem a equação: por exemplo, para 90, um quarto mais 15 vale 37,5, e a metade vale 45.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Num ônibus, desceram 12 passageiros e subiram 5, e o ônibus ficou com 40 passageiros. Quantos passageiros havia no início?",
    opcoes: [
      "33",
      "57",
      "23",
      "40",
      "47",
    ],
    correta: 4,
    explicacao:
      "Chamando o número inicial de x, a equação é x − 12 + 5 = 40, isto é, x − 7 = 40, e x = 47. Conferindo, 47 − 12 = 35, e 35 + 5 = 40. A variação total é −12 + 5 = −7, isto é, o ônibus perdeu 7 passageiros, então o número inicial é 40 + 7 = 47, o que concorda com a equação.\n\n33 subtrai 7 de 40, em vez de somar. 57 soma 12 e 5 a 40. 23 subtrai 12 e 5 de 40. E 40 é o número final, e não o inicial.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "O dobro de um número, menos 3, é igual ao próprio número mais 9. Qual é esse número?",
    opcoes: [
      "6",
      "−12",
      "−6",
      "3",
      "12",
    ],
    correta: 4,
    explicacao:
      "Chamando o número de x, a equação é 2x − 3 = x + 9. Reunindo os termos, 2x − x = 9 + 3, então x = 12. Conferindo, o dobro de 12 é 24, e 24 − 3 = 21, e 12 + 9 = 21. Reunindo os termos com x de um lado, 2x − x = x, e os números do outro, 9 + 3 = 12.\n\n6 divide 12 por 2, sem relação com a equação. −12 e −6 trocam o sinal. E 3 é o número que está sendo subtraído, e não a solução.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação (2x − 1)/3 = x − 2, com uma fração num dos lados, qual é o valor de x?",
    opcoes: [
      "−5",
      "7",
      "1",
      "5",
      "−1",
    ],
    correta: 3,
    explicacao:
      "Multiplicam-se os dois lados por 3: 2x − 1 = 3x − 6. Reunindo os termos, 6 − 1 = 3x − 2x, então x = 5. Conferindo, substituindo x por 5, o lado esquerdo vale (10 − 1)/3 = 3, e o direito vale 5 − 2 = 3.\n\n−5 troca o sinal da solução. 7 soma 1 e 6 em vez de subtrair. 1 e −1 não satisfazem a equação, pois os dois lados dariam valores diferentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Numa prova com 20 questões, cada acerto vale 5 pontos e cada erro tira 2 pontos, sem questões em branco. Um aluno fez 65 pontos. Quantas questões ele acertou?",
    opcoes: [
      "13",
      "12",
      "10",
      "15",
      "17",
    ],
    correta: 3,
    explicacao:
      "Chamando os acertos de a, os erros são 20 − a, e a equação é 5a − 2(20 − a) = 65, isto é, 7a − 40 = 65, então 7a = 105 e a = 15. Conferindo, 15 acertos dão 75 pontos, e 5 erros tiram 10, sobrando 65.\n\n13, 12 e 10 dão menos pontos: por exemplo, 13 acertos e 7 erros dão 65 − 14 = 51 pontos. E 17 dá mais: 17 acertos e 3 erros valem 79 pontos.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "media",
    enunciado:
      "Um tanque tem 100 litros e uma torneira o enche a 20 litros por minuto. Em quantos minutos o tanque chega a 500 litros?",
    opcoes: [
      "20",
      "25",
      "30",
      "15",
      "5",
    ],
    correta: 0,
    explicacao:
      "Chamando os minutos de m, a equação é 100 + 20m = 500. Subtraindo 100, 20m = 400, e dividindo por 20, m = 20 minutos. Conferindo, em 20 minutos entram 400 litros, e 100 + 400 = 500. Como a taxa é de 20 litros por minuto, o volume que falta, 500 − 100 = 400 litros, dividido por 20, confirma os 20 minutos.\n\n25 e 30 passam dos 500 litros. 15 e 5 ficam abaixo: em 15 minutos o tanque tem 400 litros, e em 5 minutos, 200.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Resolvendo a equação (3x + 1)/4 − (x − 2)/3 = 2, com duas frações, qual é o valor de x?",
    opcoes: [
      "5",
      "13",
      "−13/5",
      "13/5",
      "11/5",
    ],
    correta: 3,
    explicacao:
      "Multiplicam-se todos os termos por 12, o denominador comum: 3(3x + 1) − 4(x − 2) = 24. Distribuindo, 9x + 3 − 4x + 8 = 24, isto é, 5x + 11 = 24, então 5x = 13 e x = 13/5. Conferindo, substituindo x por 13/5, o primeiro termo vale (39/5 + 1)/4 = 11/5, e o segundo, (13/5 − 2)/3 = 1/5, e 11/5 − 1/5 = 2.\n\n5 e 13 são números que aparecem na conta, mas não a solução. −13/5 troca o sinal. E 11/5 esquece de dividir 13 por 5 depois de somar 11.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Resolvendo a equação 2x/3 − 1 = x/2 + 2, qual é o valor de x?",
    opcoes: [
      "18",
      "6",
      "−18",
      "36",
      "12",
    ],
    correta: 0,
    explicacao:
      "Multiplicam-se os termos por 6, o denominador comum: 4x − 6 = 3x + 12. Reunindo os termos, 4x − 3x = 12 + 6, então x = 18. Conferindo, substituindo x por 18, o lado esquerdo vale 12 − 1 = 11, e o direito vale 9 + 2 = 11.\n\n6 é o denominador comum, e não a solução. −18 troca o sinal. 36 é o dobro da solução. E 12 subtrai 6 de 18, sem reunir os termos corretamente.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Uma pessoa gasta 1/3 do salário com aluguel e 1/4 do salário com alimentação, e ainda sobram R$ 1.250. Qual é o salário?",
    opcoes: [
      "2.400",
      "3.750",
      "5.208",
      "3.000",
      "1.750",
    ],
    correta: 3,
    explicacao:
      "Chamando o salário de s, os gastos são s/3 + s/4 = 7s/12, e o que sobra é 5s/12. A equação é 5s/12 = 1.250, então s = 1.250 × 12 ÷ 5 = 3.000. Conferindo, o aluguel é 1.000, a alimentação é 750, e 3.000 − 1.750 = 1.250.\n\n2.400 e 3.750 não satisfazem a equação: por exemplo, 5/12 de 3.750 é 1.562,50. 5.208 divide 1.250 por 0,24. E 1.750 é o gasto total, e não o salário.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Um pai tem o triplo da idade do filho. Há 6 anos, a idade do pai era o sétuplo da idade do filho. Quantos anos o filho tem hoje?",
    opcoes: [
      "27",
      "18",
      "9",
      "6",
      "12",
    ],
    correta: 2,
    explicacao:
      "Chamando a idade do filho de x, a do pai é 3x. Há 6 anos, eram 3x − 6 e x − 6, e a equação é 3x − 6 = 7(x − 6), isto é, 3x − 6 = 7x − 42, então 36 = 4x e x = 9. Conferindo, hoje o filho tem 9 e o pai, 27, e há 6 anos, 3 e 21, e 21 = 7 × 3.\n\n27 é a idade do pai. 18, 6 e 12 não satisfazem: por exemplo, para o filho com 12, o pai teria 36, e há 6 anos, 30 e 6, e 30 não é 7 vezes 6.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Num terreno retangular, o comprimento excede a largura em 8 metros, e o perímetro é de 104 metros. Qual é a área do terreno, em metros quadrados?",
    opcoes: [
      "52",
      "572",
      "22",
      "780",
      "660",
    ],
    correta: 4,
    explicacao:
      "Chamando a largura de w, o comprimento é w + 8, e o perímetro é 2 × (w + w + 8) = 4w + 16 = 104. Então 4w = 88 e w = 22 m, e o comprimento é 30 m. A área é 22 × 30 = 660 m². Conferindo, 2 × (22 + 30) = 104.\n\n52 é a soma dos dois lados, o semiperímetro. 572 é 22 × 26, usando um comprimento errado. 22 é a largura, e não a área. E 780 é 26 × 30, com a largura errada.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "O trem A sai de uma estação a 60 km/h. Duas horas depois, sai da mesma estação, no mesmo sentido, o trem B a 90 km/h. Quantas horas depois da saída de B ele alcança A?",
    opcoes: [
      "2",
      "6",
      "4",
      "8",
      "3",
    ],
    correta: 2,
    explicacao:
      "Quando B sai, A já percorreu 60 × 2 = 120 km. Depois de t horas, A terá 120 + 60t e B terá 90t. Igualando, 120 + 60t = 90t, então 120 = 30t e t = 4 horas. Conferindo, em 4 horas B anda 360 km, e A anda 120 + 240 = 360.\n\n2 é a vantagem de tempo de A. 6 e 8 passam do alcance: em 6 horas, B anda 540 km, e A, 480. E 3 faz B andar 270 km, e A, 300.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Numa sala, se cada banco tiver 4 alunos, sobram 6 alunos em pé. Se cada banco tiver 5 alunos, sobram 2 bancos vazios. Quantos bancos há na sala?",
    opcoes: [
      "14",
      "18",
      "12",
      "20",
      "16",
    ],
    correta: 4,
    explicacao:
      "Chamando os bancos de b, os alunos são 4b + 6 na primeira situação e 5 × (b − 2) na segunda. Igualando, 4b + 6 = 5b − 10, então 16 = b. Conferindo, com 16 bancos, os alunos são 4 × 16 + 6 = 70, e 5 × 14 = 70.\n\n14, 18, 12 e 20 não dão o mesmo número de alunos nas duas situações: por exemplo, com 14 bancos, seriam 62 alunos na primeira e 60 na segunda.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Misturam-se 5 kg de café a R$ 20 o quilo com x kg de café a R$ 30 o quilo, para obter uma mistura de preço médio R$ 26 o quilo. Quantos quilos x do café mais caro são necessários?",
    opcoes: [
      "5",
      "10",
      "6,25",
      "7,5",
      "8",
    ],
    correta: 3,
    explicacao:
      "O preço médio é o gasto total dividido pela massa total: (5 × 20 + 30x)/(5 + x) = 26. Multiplicando, 100 + 30x = 130 + 26x, então 4x = 30 e x = 7,5 kg. Conferindo, o gasto é 100 + 225 = 325, a massa é 12,5, e 325 ÷ 12,5 = 26. O preço médio da mistura fica entre os dois preços, R$ 20 e R$ 30, e mais perto do mais caro, porque há mais quilos dele.\n\n5 e 10 dariam preços médios de 25 e cerca de 26,7. 6,25 e 8 também não produzem 26.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "Uma herança de R$ 110.000 é dividida entre três pessoas: a parte de B é metade da de A, e a de C é um terço da de A. Qual é a parte de A?",
    opcoes: [
      "55.000",
      "66.000",
      "60.000",
      "40.000",
      "50.000",
    ],
    correta: 2,
    explicacao:
      "Chamando a parte de A de a, B recebe a/2 e C recebe a/3. A equação é a + a/2 + a/3 = 110.000, isto é, 11a/6 = 110.000, então a = 110.000 × 6 ÷ 11 = 60.000. Conferindo, B recebe 30.000 e C, 20.000, e 60 + 30 + 20 = 110 mil.\n\n55.000 é a metade da herança. 66.000, 40.000 e 50.000 não satisfazem a equação: por exemplo, para a = 50.000, a soma seria 50.000 + 25.000 + 16.667 = 91.667.",
  },
  {
    materia: "matematica-fund",
    tema: "Equação do 1º grau",
    dificuldade: "dificil",
    enunciado:
      "A soma de dois números é 50, e a diferença entre o triplo do menor e o dobro do maior é −10. Qual é o maior desses números?",
    opcoes: [
      "18",
      "30",
      "20",
      "32",
      "36",
    ],
    correta: 3,
    explicacao:
      "Chamando o menor de m e o maior de M, m + M = 50 e 3m − 2M = −10. Substituindo m = 50 − M, 150 − 3M − 2M = −10, então 5M = 160 e M = 32, e m = 18. Conferindo, 3 × 18 − 2 × 32 = 54 − 64 = −10. Isolando m na primeira equação, m = 50 − M, e substituindo na segunda, obtém-se uma equação com uma só incógnita.\n\n18 é o menor dos dois. 30, 20 e 36 não satisfazem as duas condições: por exemplo, para M = 30, m = 20, e 3 × 20 − 2 × 30 = 0, e não −10.",
  },
];
