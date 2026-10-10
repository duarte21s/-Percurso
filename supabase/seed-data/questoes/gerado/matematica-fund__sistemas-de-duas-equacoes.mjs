/* Sistemas de duas equações (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__sistemas-de-duas-equacoes.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__sistemas-de-duas-equacoes.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Qual par (x, y) é a solução do sistema formado por x + y = 10 e x − y = 4?",
    opcoes: [
      "(3, 7)",
      "(7, 3)",
      "(6, 4)",
      "(14, 6)",
      "(10, 4)",
    ],
    correta: 1,
    explicacao:
      "Somando as duas equações, os termos em y se cancelam: 2x = 14, então x = 7. Substituindo na primeira, 7 + y = 10, e y = 3. Conferindo na segunda, 7 − 3 = 4, e na primeira, 7 + 3 = 10.\n\n(3, 7) troca a ordem do par, e então x − y = −4. (6, 4) satisfaz a soma, mas 6 − 4 = 2. (14, 6) tem soma 20 e diferença 8. (10, 4) tem soma 14 e diferença 6. Nenhum dos dois confere com as duas equações.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Para que valores de x e y as igualdades x + y = 12 e x = 2y são verdadeiras ao mesmo tempo?",
    opcoes: [
      "(4, 8)",
      "(6, 6)",
      "(10, 2)",
      "(12, 0)",
      "(8, 4)",
    ],
    correta: 4,
    explicacao:
      "Como x = 2y, substitui-se x na primeira equação: 2y + y = 12, isto é, 3y = 12 e y = 4. Então x = 2 × 4 = 8. Conferindo, 8 + 4 = 12, e 8 é o dobro de 4.\n\n(4, 8) troca a ordem do par, e então x não é o dobro de y. (6, 6) satisfaz a soma, mas 6 não é o dobro de 6. (10, 2) também satisfaz a soma, mas 10 é o quíntuplo de 2. E (12, 0) satisfaz a soma, mas 12 não é o dobro de 0.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Ao resolver, pelo método da substituição, o sistema y = x + 3 e x + y = 11, que par (x, y) se obtém?",
    opcoes: [
      "(7, 4)",
      "(4, 7)",
      "(3, 8)",
      "(5, 6)",
      "(8, 11)",
    ],
    correta: 1,
    explicacao:
      "Substituindo y = x + 3 na segunda equação, x + (x + 3) = 11, isto é, 2x + 3 = 11, 2x = 8 e x = 4. Então y = 4 + 3 = 7. Conferindo, 4 + 7 = 11, e 7 é 3 a mais que 4.\n\n(7, 4) troca a ordem do par, e então y é 3 a menos que x. (3, 8) e (5, 6) somam 11, mas as diferenças são 5 e 1, e não 3. E (8, 11) satisfaz y = x + 3, mas a soma é 19, e não 11.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Usando o método da adição no sistema 2x + y = 7 e x − y = 2, qual par (x, y) resolve as duas equações?",
    opcoes: [
      "(1, 3)",
      "(2, 3)",
      "(3, 1)",
      "(4, −1)",
      "(3, 2)",
    ],
    correta: 2,
    explicacao:
      "Somando as duas equações, os termos em y se cancelam: 3x = 9, então x = 3. Substituindo na segunda, 3 − y = 2, e y = 1. Conferindo na primeira, 2 × 3 + 1 = 7.\n\n(1, 3) troca a ordem do par. (2, 3) satisfaz a primeira, 4 + 3 = 7, mas 2 − 3 = −1. (4, −1) também satisfaz a primeira, 8 − 1 = 7, mas 4 − (−1) = 5. E (3, 2) falha nas duas: 3 − 2 = 1, e não 2, e 2 × 3 + 2 = 8, e não 7.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "O ponto de encontro das retas x + y = 9 e y = 2x, no plano cartesiano, tem quais coordenadas (x, y)?",
    opcoes: [
      "(6, 3)",
      "(3, 6)",
      "(4, 5)",
      "(2, 7)",
      "(9, 0)",
    ],
    correta: 1,
    explicacao:
      "Substituindo y = 2x na primeira equação, x + 2x = 9, isto é, 3x = 9 e x = 3. Então y = 2 × 3 = 6. Conferindo, 3 + 6 = 9, e 6 é o dobro de 3. Em geometria, cada equação dessas representa uma reta no plano, e a solução do sistema é o ponto em que as duas retas se cruzam.\n\n(6, 3) troca a ordem do par, e então y é metade de x. (4, 5), (2, 7) e (9, 0) somam 9, mas em nenhum deles y é o dobro de x.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Um aluno resolveu o sistema x − y = 1 e x + y = 7 e conferiu a resposta nas duas equações. Que par (x, y) ele encontrou?",
    opcoes: [
      "(4, 3)",
      "(3, 4)",
      "(5, 2)",
      "(6, 1)",
      "(7, 0)",
    ],
    correta: 0,
    explicacao:
      "Somando as duas equações, os termos em y se cancelam: 2x = 8, então x = 4. Substituindo na segunda, 4 + y = 7, e y = 3. Conferindo, 4 − 3 = 1 e 4 + 3 = 7. A conferência nas duas equações é indispensável, pois um par pode satisfazer uma equação e falhar na outra, como acontece com as alternativas erradas.\n\n(3, 4) troca a ordem do par, e então x − y = −1. (5, 2), (6, 1) e (7, 0) somam 7, mas as diferenças são 3, 5 e 7, e não 1.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "A soma de dois números é 15 e a diferença entre eles é 3. Quais são esses números?",
    opcoes: [
      "12 e 3",
      "10 e 5",
      "8 e 7",
      "9 e 6",
      "18 e 3",
    ],
    correta: 3,
    explicacao:
      "Chamando os números de x e y, com x o maior, as condições são x + y = 15 e x − y = 3. Somando, 2x = 18 e x = 9, e então y = 6. Conferindo, 9 + 6 = 15 e 9 − 6 = 3. Esse tipo de problema sempre leva a um sistema de duas equações com duas incógnitas.\n\n12 e 3 somam 15, mas a diferença é 9. 10 e 5 também somam 15, mas a diferença é 5. 8 e 7 somam 15, mas a diferença é 1. E 18 e 3 têm diferença 15, mas a soma é 21.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Duas canetas e um caderno custam R$ 11, e uma caneta e um caderno custam R$ 8. Quanto custa uma caneta, em reais?",
    opcoes: [
      "5",
      "3",
      "4",
      "8",
      "2",
    ],
    correta: 1,
    explicacao:
      "Chamando o preço da caneta de c e o do caderno de k, tem-se 2c + k = 11 e c + k = 8. Subtraindo a segunda da primeira, o caderno se cancela: c = 3. Então k = 8 − 3 = 5. Conferindo, 2 × 3 + 5 = 11 e 3 + 5 = 8.\n\n5 é o preço do caderno. 4 e 2 não satisfazem as duas compras: com c = 4, k = 4 na segunda, e 2 × 4 + 4 = 12. 8 é o valor da segunda compra, e não o preço de uma caneta.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Num pátio há carros e motos, num total de 12 veículos e 38 rodas. Quantos carros há no pátio?",
    opcoes: [
      "5",
      "6",
      "7",
      "8",
      "12",
    ],
    correta: 2,
    explicacao:
      "Chamando os carros de c e as motos de m, tem-se c + m = 12 e 4c + 2m = 38. Da primeira, m = 12 − c, e substituindo, 4c + 24 − 2c = 38, isto é, 2c = 14 e c = 7. Então m = 5. Conferindo, 7 × 4 + 5 × 2 = 28 + 10 = 38.\n\n5 é o número de motos. 6 e 8 não dão 38 rodas: 6 carros e 6 motos dão 36, e 8 carros e 4 motos dão 40. E 12 é o total de veículos.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Se y vale 4 na equação 3x + y = 10, qual é o par (x, y) que respeita as duas condições, 3x + y = 10 e y = 4?",
    opcoes: [
      "(4, 2)",
      "(3, 1)",
      "(1, 7)",
      "(10, 4)",
      "(2, 4)",
    ],
    correta: 4,
    explicacao:
      "Como y = 4, substitui-se na primeira equação: 3x + 4 = 10, então 3x = 6 e x = 2. A solução é (2, 4). Conferindo, 3 × 2 + 4 = 10. Como y já vale 4, o sistema se reduz a uma equação com uma só incógnita.\n\n(4, 2) troca a ordem do par, e então y não é 4. (3, 1) e (1, 7) satisfazem a primeira equação, 9 + 1 = 10 e 3 + 7 = 10, mas y não vale 4. E (10, 4) tem y = 4, mas 3 × 10 + 4 = 34.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Com x = 5 fixado, qual par (x, y) torna verdadeira também a equação x + 2y = 11?",
    opcoes: [
      "(3, 5)",
      "(5, 6)",
      "(5, 3)",
      "(11, 0)",
      "(5, 1)",
    ],
    correta: 2,
    explicacao:
      "Como x = 5, substitui-se na segunda equação: 5 + 2y = 11, então 2y = 6 e y = 3. A solução é (5, 3). Conferindo, 5 + 2 × 3 = 11. Como x já tem valor conhecido, basta substituí-lo na segunda equação, que passa a ter só a incógnita y.\n\n(3, 5) troca a ordem do par, e então x não é 5. (5, 6) e (5, 1) têm x = 5, mas 5 + 12 = 17 e 5 + 2 = 7. E (11, 0) satisfaz a segunda equação, mas x não vale 5.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "facil",
    enunciado:
      "Dois irmãos têm, juntos, 30 anos, e um deles tem 4 anos a mais que o outro. Quantos anos tem o mais velho?",
    opcoes: [
      "13",
      "15",
      "17",
      "14",
      "34",
    ],
    correta: 2,
    explicacao:
      "Chamando as idades de x, a do mais velho, e y, a do mais novo, tem-se x + y = 30 e x − y = 4. Somando, 2x = 34 e x = 17. Conferindo, o mais novo tem 13, e 17 + 13 = 30, e 17 − 13 = 4. Nesse problema, a soma das idades e a diferença entre elas determinam as duas idades.\n\n13 é a idade do mais novo. 15 é a metade da soma, que só valeria se os irmãos tivessem a mesma idade. 14 e 34 não satisfazem as duas condições.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Na equação 2x + 3y = 12, com a condição de que x seja 1 a mais que y, qual é o par (x, y)?",
    opcoes: [
      "(3, 2)",
      "(2, 3)",
      "(4, 2)",
      "(3, 3)",
      "(6, 0)",
    ],
    correta: 0,
    explicacao:
      "Da segunda equação, x = y + 1. Substituindo na primeira, 2(y + 1) + 3y = 12, isto é, 5y + 2 = 12, então y = 2 e x = 3. Conferindo, 2 × 3 + 3 × 2 = 12, e 3 − 2 = 1. Isolar uma incógnita numa equação e substituí-la na outra é o método da substituição.\n\n(2, 3) troca a ordem do par. (4, 2) tem x − y = 2, e 8 + 6 = 14. (3, 3) tem x − y = 0, e 6 + 9 = 15. E (6, 0) satisfaz a primeira equação, mas 6 − 0 = 6.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "As retas 3x + 2y = 16 e x + 2y = 8 se cruzam em que ponto (x, y)?",
    opcoes: [
      "(2, 4)",
      "(6, −1)",
      "(4, 2)",
      "(0, 8)",
      "(5, 1)",
    ],
    correta: 2,
    explicacao:
      "Subtraindo a segunda equação da primeira, os termos em y se cancelam: 2x = 8, então x = 4. Substituindo na segunda, 4 + 2y = 8, e y = 2. Conferindo na primeira, 12 + 4 = 16.\n\n(2, 4) troca a ordem do par. (6, −1) satisfaz a primeira, 18 − 2 = 16, mas 6 − 2 = 4, e não 8. (0, 8) também satisfaz a primeira, mas 0 + 16 = 16, e não 8. E (5, 1) não satisfaz nenhuma: 15 + 2 = 17.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Resolvendo por adição o sistema 5x − 2y = 4 e 3x + 2y = 12, qual par (x, y) é encontrado?",
    opcoes: [
      "(2, 3)",
      "(3, 2)",
      "(4, 8)",
      "(0, −2)",
      "(2, 6)",
    ],
    correta: 0,
    explicacao:
      "Somando as duas equações, os termos em y se cancelam: 8x = 16, então x = 2. Substituindo na segunda, 6 + 2y = 12, e y = 3. Conferindo na primeira, 10 − 6 = 4.\n\n(3, 2) troca a ordem do par. (4, 8) satisfaz a primeira, 20 − 16 = 4, mas 12 + 16 = 28. (0, −2) também satisfaz a primeira, mas 0 − 4 = −4 na segunda. E (2, 6) satisfaz 3x + 2y = 6 + 12 = 18, e não 12.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Qual destes pares (x, y) torna verdadeiras, ao mesmo tempo, as igualdades 2x − y = 7 e x + y = 5?",
    opcoes: [
      "(1, 4)",
      "(3, −1)",
      "(5, 0)",
      "(4, 1)",
      "(6, 5)",
    ],
    correta: 3,
    explicacao:
      "Somando as duas equações, os termos em y se cancelam: 3x = 12, então x = 4. Substituindo na segunda, 4 + y = 5, e y = 1. Conferindo na primeira, 8 − 1 = 7. Esse é o método da adição.\n\n(1, 4) troca a ordem do par. (3, −1) satisfaz a primeira, 6 + 1 = 7, mas 3 − 1 = 2, e não 5. (5, 0) satisfaz a soma, mas 10 − 0 = 10. E (6, 5) não satisfaz nenhuma: a soma é 11.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Três lápis e duas borrachas custam R$ 16, e um lápis e quatro borrachas custam R$ 12. Quanto custa cada lápis, em reais?",
    opcoes: [
      "2",
      "4",
      "3",
      "6",
      "5",
    ],
    correta: 1,
    explicacao:
      "Chamando o preço do lápis de l e o da borracha de b, tem-se 3l + 2b = 16 e l + 4b = 12. Da segunda, l = 12 − 4b. Substituindo, 36 − 12b + 2b = 16, isto é, 10b = 20 e b = 2, e l = 12 − 8 = 4. Conferindo, 3 × 4 + 2 × 2 = 16.\n\n2 é o preço da borracha. 3, 5 e 6 não satisfazem as duas compras: para l = 3, a segunda daria b = 2,25, e a primeira, 9 + 4,5 = 13,5, e não 16.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Uma loja vende camisas a R$ 40 e calças a R$ 70. Num dia, vendeu 10 peças e arrecadou R$ 520. Quantas calças foram vendidas?",
    opcoes: [
      "6",
      "5",
      "3",
      "4",
      "7",
    ],
    correta: 3,
    explicacao:
      "Chamando as camisas de c e as calças de k, tem-se c + k = 10 e 40c + 70k = 520. Da primeira, c = 10 − k, e substituindo, 400 − 40k + 70k = 520, isto é, 30k = 120 e k = 4. Conferindo, 6 camisas dão 240, 4 calças dão 280, e 240 + 280 = 520.\n\n6 é o número de camisas. 5, 3 e 7 não dão R$ 520: por exemplo, 5 calças e 5 camisas dão 550, e 3 calças e 7 camisas dão 490.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Num teatro, o ingresso de adulto custa R$ 20 e o de criança custa R$ 12. Foram vendidos 50 ingressos, num total de R$ 784. Quantos adultos compraram ingresso?",
    opcoes: [
      "27",
      "25",
      "30",
      "23",
      "20",
    ],
    correta: 3,
    explicacao:
      "Chamando os adultos de a e as crianças de c, tem-se a + c = 50 e 20a + 12c = 784. Se os 50 fossem crianças, arrecadariam R$ 600, e os R$ 184 a mais vêm da diferença de R$ 8 por adulto: 184 ÷ 8 = 23 adultos. Conferindo, 23 × 20 = 460 e 27 × 12 = 324, e 460 + 324 = 784.\n\n27 é o número de crianças. 25, 30 e 20 não dão R$ 784: por exemplo, 25 adultos e 25 crianças dão 800.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "A soma de dois números é 40, e um deles é o triplo do outro. Qual é o maior desses números?",
    opcoes: [
      "10",
      "20",
      "35",
      "30",
      "25",
    ],
    correta: 3,
    explicacao:
      "Chamando o menor de y, o maior é 3y, e y + 3y = 40, isto é, 4y = 40 e y = 10. O maior é 3 × 10 = 30. Conferindo, 10 + 30 = 40 e 30 é o triplo de 10. O triplo de um número, dentro de uma soma, ocupa 3 das 4 partes iguais do total, e a outra parte é o menor número.\n\n10 é o menor número. 20 é a metade da soma. 35 e 25 somam 40 com 5 e 15, mas 35 não é o triplo de 5, e 25 não é o triplo de 15.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "O perímetro de um retângulo é 36 cm, e o comprimento é 6 cm maior que a largura. Quanto mede o comprimento?",
    opcoes: [
      "6",
      "18",
      "12",
      "9",
      "15",
    ],
    correta: 2,
    explicacao:
      "Chamando a largura de y e o comprimento de x, tem-se 2(x + y) = 36, isto é, x + y = 18, e x = y + 6. Substituindo, 2y + 6 = 18, então y = 6 e x = 12. Conferindo, 2 × (12 + 6) = 36, e 12 é 6 a mais que 6.\n\n6 é a largura. 18 é o semiperímetro, a soma dos dois lados. 9 é metade do semiperímetro, que valeria para um quadrado. E 15 não satisfaz, pois daria largura 3 e diferença 12.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Pedro e Ana têm juntos 40 anos. Há 5 anos, Pedro tinha o dobro da idade de Ana. Quantos anos Ana tem hoje?",
    opcoes: [
      "25",
      "15",
      "10",
      "20",
      "30",
    ],
    correta: 1,
    explicacao:
      "Chamando as idades de p e a, tem-se p + a = 40 e p − 5 = 2(a − 5), isto é, p = 2a − 5. Substituindo, 3a − 5 = 40, então a = 15 e p = 25. Conferindo, há 5 anos Pedro tinha 20 e Ana tinha 10, e 20 é o dobro de 10.\n\n25 é a idade de Pedro. 10 é a idade de Ana há 5 anos. 20 e 30 não satisfazem as duas condições: com Ana com 20, Pedro teria 20, e há 5 anos, 15 e 15.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "A soma dos algarismos de um número de dois algarismos é 9. Invertendo a ordem dos algarismos, o número aumenta 27 unidades. Qual é o número?",
    opcoes: [
      "63",
      "45",
      "27",
      "36",
      "54",
    ],
    correta: 3,
    explicacao:
      "Chamando o algarismo das dezenas de x e o das unidades de y, tem-se x + y = 9 e (10y + x) − (10x + y) = 27, isto é, 9y − 9x = 27 e y − x = 3. Então y = 6 e x = 3, e o número é 36. Conferindo, 3 + 6 = 9 e 63 − 36 = 27.\n\n63 é o número com os algarismos invertidos. 45 e 54 têm soma 9, mas a inversão muda 9 unidades. E 27 tem soma 9, mas o inverso, 72, aumenta 45.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "O sistema x + 2y = 11 e 2x − y = 2 tem como solução qual par ordenado (x, y)?",
    opcoes: [
      "(4, 3)",
      "(1, 5)",
      "(5, 3)",
      "(3, 4)",
      "(7, 2)",
    ],
    correta: 3,
    explicacao:
      "Da segunda equação, y = 2x − 2. Substituindo na primeira, x + 2(2x − 2) = 11, isto é, 5x − 4 = 11, então x = 3 e y = 4. Conferindo, 3 + 8 = 11 e 6 − 4 = 2.\n\n(4, 3) troca a ordem do par. (1, 5) satisfaz a primeira, 1 + 10 = 11, mas 2 − 5 = −3. (5, 3) tem 5 + 6 = 11 na primeira, mas 10 − 3 = 7 na segunda. E (7, 2) satisfaz a primeira, mas 14 − 2 = 12.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Substituindo x por y + 2 na primeira equação, resolve-se o sistema x/2 + y = 10 e x − y = 2. Qual é o par (x, y) da solução?",
    opcoes: [
      "(6, 8)",
      "(4, 8)",
      "(10, 0)",
      "(8, 6)",
      "(12, 10)",
    ],
    correta: 3,
    explicacao:
      "Da segunda equação, x = y + 2. Substituindo na primeira, (y + 2)/2 + y = 10, isto é, y/2 + 1 + y = 10, então 1,5y = 9 e y = 6, e x = 8. Conferindo, 8/2 + 6 = 10 e 8 − 6 = 2. Esse é o método da substituição.\n\n(6, 8) troca a ordem do par. (4, 8) satisfaz a primeira, 2 + 8 = 10, mas 4 − 8 = −4. (10, 0) tem 10/2 = 5 na primeira. E (12, 10) tem 6 + 10 = 16 na primeira.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Quantas soluções tem o sistema formado por x + y = 5 e 2x + 2y = 10?",
    opcoes: [
      "Nenhuma",
      "Infinitas",
      "Uma só",
      "Duas",
      "Três",
    ],
    correta: 1,
    explicacao:
      "A segunda equação é a primeira multiplicada por 2: 2 × (x + y) = 2 × 5. As duas equações dizem a mesma coisa, então todo par que satisfaz a primeira também satisfaz a segunda. Como há infinitos pares com soma 5, por exemplo (0, 5), (1, 4) e (2, 3), o sistema tem infinitas soluções.\n\nNenhuma, uma só, duas ou três soluções não ocorrem, pois as equações são equivalentes e nenhuma restringe a outra.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "O sistema x + y = 5 e 2x + 2y = 12 é possível ou impossível? Quantas soluções ele tem?",
    opcoes: [
      "Infinitas",
      "Uma só",
      "Duas",
      "Três",
      "Nenhuma",
    ],
    correta: 4,
    explicacao:
      "Multiplicando a primeira equação por 2, obtém-se 2x + 2y = 10. Mas a segunda equação exige 2x + 2y = 12. Os dois resultados são incompatíveis, então nenhum par satisfaz as duas equações ao mesmo tempo. O sistema é impossível e não tem solução.\n\nInfinitas soluções ocorreriam se a segunda equação fosse 2x + 2y = 10. Uma só, duas ou três soluções exigiriam equações com retas que se cruzam, o que não ocorre aqui, pois as retas são paralelas.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Dois números somam 100, e o maior é uma vez e meia o menor, isto é, a razão entre eles é de 3 para 2. Quais são os números?",
    opcoes: [
      "75 e 25",
      "50 e 50",
      "60 e 40",
      "80 e 20",
      "70 e 30",
    ],
    correta: 2,
    explicacao:
      "Chamando o menor de y, o maior é 1,5y, e y + 1,5y = 100, isto é, 2,5y = 100 e y = 40. O maior é 60. Conferindo, 60 + 40 = 100, e 60/40 = 3/2. A razão de 3 para 2 indica que o maior tem 3 partes e o menor tem 2 partes, de um total de 5 partes iguais a 20 cada.\n\n75 e 25 têm razão 3 para 1. 50 e 50 têm razão 1. 80 e 20 têm razão 4 para 1. E 70 e 30 têm razão 7 para 3, próxima, mas diferente de 3 para 2.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Numa fazenda há galinhas e porcos, num total de 30 cabeças e 100 pés. Quantos porcos há na fazenda?",
    opcoes: [
      "20",
      "10",
      "15",
      "25",
      "5",
    ],
    correta: 0,
    explicacao:
      "Chamando as galinhas de g e os porcos de p, tem-se g + p = 30 e 2g + 4p = 100. Da primeira, g = 30 − p, e substituindo, 60 − 2p + 4p = 100, isto é, 2p = 40 e p = 20, e g = 10. Conferindo, 10 × 2 + 20 × 4 = 20 + 80 = 100. Nesse tipo de problema, o número de pés depende de quantos animais de cada espécie existem.\n\n10 é o número de galinhas. 15, 25 e 5 não dão 100 pés: por exemplo, 15 porcos e 15 galinhas dão 90 pés.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Numa lanchonete, o pastel custa R$ 4 e o suco custa R$ 3. Ana comprou 5 itens e pagou R$ 18. Quantos pastéis ela comprou?",
    opcoes: [
      "2",
      "4",
      "5",
      "1",
      "3",
    ],
    correta: 4,
    explicacao:
      "Chamando os pastéis de p e os sucos de s, tem-se p + s = 5 e 4p + 3s = 18. Da primeira, s = 5 − p, e substituindo, 4p + 15 − 3p = 18, então p = 3 e s = 2. Conferindo, 3 × 4 + 2 × 3 = 12 + 6 = 18. O gasto total é o número de pastéis multiplicado por R$ 4, mais o de sucos multiplicado por R$ 3.\n\n2 é o número de sucos. 4, 5 e 1 não dão R$ 18: por exemplo, 4 pastéis e 1 suco dão 19, e 5 pastéis dão 20.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "A diferença entre dois números é 8, e o dobro do menor, somado ao maior, é 26. Qual é o menor número?",
    opcoes: [
      "14",
      "8",
      "10",
      "12",
      "6",
    ],
    correta: 4,
    explicacao:
      "Chamando o menor de m e o maior de M, tem-se M − m = 8 e 2m + M = 26. Da primeira, M = m + 8, e substituindo, 3m + 8 = 26, então m = 6 e M = 14. Conferindo, 14 − 6 = 8 e 12 + 14 = 26. Usando a diferença, o maior é o menor mais 8, o que permite escrever tudo em função do menor.\n\n14 é o maior número. 8 é a diferença dada. 10 e 12 não satisfazem as duas condições: para m = 10, M = 18, e 20 + 18 = 38.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Num sítio há patos e coelhos, num total de 25 animais e 70 pés. Quantos coelhos há no sítio?",
    opcoes: [
      "15",
      "20",
      "12",
      "10",
      "8",
    ],
    correta: 3,
    explicacao:
      "Chamando os patos de p e os coelhos de c, tem-se p + c = 25 e 2p + 4c = 70. Da primeira, p = 25 − c, e substituindo, 50 − 2c + 4c = 70, isto é, 2c = 20 e c = 10, e p = 15. Conferindo, 15 × 2 + 10 × 4 = 30 + 40 = 70. Os patos têm 2 pés e os coelhos têm 4 pés, e essa diferença permite achar cada quantidade.\n\n15 é o número de patos. 20, 12 e 8 não dão 70 pés: por exemplo, 12 coelhos e 13 patos dão 74 pés.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Maria tem 4 vezes a idade de seu sobrinho. Daqui a 10 anos, a idade de Maria será o dobro da idade do sobrinho. Quantos anos o sobrinho tem hoje?",
    opcoes: [
      "20",
      "10",
      "15",
      "25",
      "5",
    ],
    correta: 4,
    explicacao:
      "Chamando a idade do sobrinho de f, a de Maria é 4f. Daqui a 10 anos, 4f + 10 = 2(f + 10), isto é, 4f + 10 = 2f + 20, então 2f = 10 e f = 5. Conferindo, hoje Maria tem 20, e daqui a 10 anos, 30 e 15, e 30 = 2 × 15.\n\n20 é a idade de Maria. 10, 15 e 25 não satisfazem as condições: para f = 10, Maria teria 40, e daqui a 10 anos, 50 e 20, e 50 não é o dobro de 20.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "O perímetro de um retângulo é 28 cm, e o comprimento excede a largura em 2 cm. Qual é a área do retângulo, em centímetros quadrados?",
    opcoes: [
      "56",
      "40",
      "64",
      "14",
      "48",
    ],
    correta: 4,
    explicacao:
      "Chamando a largura de y e o comprimento de x, tem-se x + y = 14 e x − y = 2. Somando, 2x = 16 e x = 8, e y = 6. A área é 8 × 6 = 48 cm². Conferindo, 2 × (8 + 6) = 28. A largura e o comprimento são as duas incógnitas.\n\n56 é 8 × 7, usando uma largura errada. 40 é 8 × 5. 64 é o quadrado do comprimento, 8², como se o retângulo fosse um quadrado. E 14 é o semiperímetro, e não a área.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Num jogo de 20 partidas, sem empates, cada vitória vale 3 pontos e cada derrota tira 1 ponto. Um jogador terminou com 36 pontos. Quantas vitórias ele teve?",
    opcoes: [
      "12",
      "14",
      "16",
      "10",
      "18",
    ],
    correta: 1,
    explicacao:
      "Chamando as vitórias de v e as derrotas de d, tem-se v + d = 20 e 3v − d = 36. Somando as duas equações, 4v = 56 e v = 14, e d = 6. Conferindo, 14 vitórias valem 42, 6 derrotas tiram 6, e 42 − 6 = 36. Esse é um sistema de duas equações que se resolve por adição, pois os termos em d se cancelam.\n\n12, 16, 10 e 18 não dão 36 pontos: por exemplo, 12 vitórias e 8 derrotas dão 36 − 8 = 28, e 16 vitórias e 4 derrotas dão 48 − 4 = 44.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Dois números somam 20. O primeiro, somado ao dobro do segundo, dá 28. Qual é o primeiro número?",
    opcoes: [
      "12",
      "8",
      "16",
      "10",
      "14",
    ],
    correta: 0,
    explicacao:
      "Chamando os números de x e y, tem-se x + y = 20 e x + 2y = 28. Subtraindo a primeira da segunda, y = 8, e então x = 12. Conferindo, 12 + 8 = 20 e 12 + 16 = 28. Subtraindo a primeira equação da segunda, o termo em x se cancela, o que deixa uma equação só com y.\n\n8 é o segundo número. 16, 10 e 14 não satisfazem as duas condições: para x = 16, y = 4, e 16 + 8 = 24, e não 28.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Qual é a solução (x, y) do sistema x/3 + y/2 = 5 e x − y = 0, em que x e y são iguais?",
    opcoes: [
      "(5, 5)",
      "(3, 3)",
      "(12, 0)",
      "(0, 10)",
      "(6, 6)",
    ],
    correta: 4,
    explicacao:
      "Da segunda equação, x = y. Substituindo na primeira, x/3 + x/2 = 5, isto é, 5x/6 = 5, então x = 6 e y = 6. Conferindo, 6/3 + 6/2 = 2 + 3 = 5, e 6 − 6 = 0.\n\n(5, 5) satisfaz a segunda equação, mas 5/3 + 5/2 é cerca de 4,17, e não 5. (3, 3) também satisfaz a segunda, mas 1 + 1,5 = 2,5. (12, 0) tem 4 na primeira. E (0, 10) satisfaz a primeira, mas 0 − 10 = −10 na segunda.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Subtraindo as equações x + 3y = 11 e x − y = 3, encontra-se o valor de y. Qual é o par (x, y) da solução?",
    opcoes: [
      "(2, 5)",
      "(8, 1)",
      "(5, 2)",
      "(3, 0)",
      "(11, 0)",
    ],
    correta: 2,
    explicacao:
      "Subtraindo a segunda equação da primeira, o termo em x se cancela: 4y = 8, então y = 2. Substituindo na segunda, x − 2 = 3, e x = 5. Conferindo, 5 + 6 = 11 e 5 − 2 = 3.\n\n(2, 5) troca a ordem do par. (8, 1) satisfaz a primeira, 8 + 3 = 11, mas 8 − 1 = 7. (3, 0) satisfaz a segunda, mas 3 + 0 = 3. E (11, 0) satisfaz a primeira, mas 11 − 0 = 11.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Qual par (x, y) resolve o sistema 2x + 3y = 0 e x + y = 1, cuja solução tem uma coordenada negativa?",
    opcoes: [
      "(3, −2)",
      "(−3, 2)",
      "(2, −1)",
      "(0, 1)",
      "(1, 0)",
    ],
    correta: 0,
    explicacao:
      "Da segunda equação, x = 1 − y. Substituindo na primeira, 2(1 − y) + 3y = 0, isto é, 2 + y = 0, então y = −2 e x = 3. Conferindo, 6 − 6 = 0 e 3 − 2 = 1. Os pares que falham só satisfazem uma das equações.\n\n(−3, 2) satisfaz a primeira, −6 + 6 = 0, mas −3 + 2 = −1. (2, −1) satisfaz a segunda, 2 − 1 = 1, mas 4 − 3 = 1 na primeira. (0, 1) e (1, 0) satisfazem a segunda, mas 3 e 2 na primeira.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "media",
    enunciado:
      "Um número é o dobro de outro, e a soma dos dois é 57. Qual é o menor desses números?",
    opcoes: [
      "38",
      "28,5",
      "19",
      "57",
      "18",
    ],
    correta: 2,
    explicacao:
      "Chamando o menor de y, o maior é 2y, e y + 2y = 57, isto é, 3y = 57 e y = 19. Conferindo, o maior é 38, e 19 + 38 = 57. Escrevendo o maior como 2y, a soma y + 2y = 57 vira uma equação com uma única incógnita, que se resolve por divisão.\n\n38 é o maior número. 28,5 é a metade da soma, que só valeria se os números fossem iguais. 57 é a soma. E 18 não satisfaz, pois 18 + 36 = 54.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Resolvendo o sistema x/2 + y/3 = 6 e x − y/3 = 3, em que o termo em y se cancela ao somar as equações, qual par (x, y) é encontrado?",
    opcoes: [
      "(6, 9)",
      "(9, 6)",
      "(4, 12)",
      "(8, 6)",
      "(12, 0)",
    ],
    correta: 0,
    explicacao:
      "Somando as duas equações, o termo em y se cancela: x/2 + x = 9, isto é, 3x/2 = 9, então x = 6. Substituindo na segunda, 6 − y/3 = 3, então y/3 = 3 e y = 9. Conferindo, 6/2 + 9/3 = 3 + 3 = 6 e 6 − 3 = 3.\n\n(9, 6) troca a ordem do par. (4, 12) satisfaz a primeira, 2 + 4 = 6, mas 4 − 4 = 0. (8, 6) também satisfaz a primeira, 4 + 2 = 6, mas 8 − 2 = 6. E (12, 0) satisfaz a primeira, mas 12 na segunda.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Um cofre tem 40 moedas, só de R$ 0,25 e de R$ 0,50, num total de R$ 16,00. Quantas moedas de R$ 0,50 há no cofre?",
    opcoes: [
      "24",
      "16",
      "20",
      "30",
      "12",
    ],
    correta: 0,
    explicacao:
      "Chamando as moedas de 25 centavos de a e as de 50 centavos de b, tem-se a + b = 40 e 25a + 50b = 1.600, em centavos. Da primeira, a = 40 − b, e substituindo, 1.000 − 25b + 50b = 1.600, isto é, 25b = 600 e b = 24. Conferindo, 16 moedas de 25 valem 400, 24 de 50 valem 1.200, e 400 + 1.200 = 1.600.\n\n16 é o número de moedas de R$ 0,25. 20, 30 e 12 não dão R$ 16,00: por exemplo, 20 de cada valem 15 reais.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Um barco desce um rio percorrendo 40 km em 2 horas e sobe o mesmo trecho em 4 horas. Qual é a velocidade da correnteza, em km/h?",
    opcoes: [
      "10",
      "5",
      "15",
      "20",
      "2,5",
    ],
    correta: 1,
    explicacao:
      "Chamando a velocidade do barco de b e a da correnteza de c, na descida b + c = 40 ÷ 2 = 20, e na subida b − c = 40 ÷ 4 = 10. Subtraindo, 2c = 10 e c = 5 km/h. Então b = 15. Conferindo, 15 + 5 = 20 e 15 − 5 = 10.\n\n15 é a velocidade do barco em água parada. 10 e 20 são as velocidades na subida e na descida. E 2,5 é a metade da correnteza correta.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Num número de dois algarismos, o algarismo das dezenas é o dobro do das unidades, e a soma dos algarismos é 12. Qual é o número?",
    opcoes: [
      "48",
      "66",
      "93",
      "75",
      "84",
    ],
    correta: 4,
    explicacao:
      "Chamando o algarismo das unidades de y, o das dezenas é 2y, e 2y + y = 12, isto é, 3y = 12 e y = 4. As dezenas valem 8, e o número é 84. Conferindo, 8 é o dobro de 4, e 8 + 4 = 12. Cada condição do enunciado vira uma equação.\n\n48 tem as unidades como dobro das dezenas. 66 e 75 têm soma 12, mas as dezenas não são o dobro das unidades. E 93 tem soma 12, mas 9 é o triplo de 3.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Duas camisas e três calças custam R$ 420, e três camisas e duas calças custam R$ 380. Quanto custa cada camisa, em reais?",
    opcoes: [
      "60",
      "100",
      "80",
      "90",
      "40",
    ],
    correta: 0,
    explicacao:
      "Chamando o preço da camisa de c e o da calça de k, tem-se 2c + 3k = 420 e 3c + 2k = 380. Multiplicando a primeira por 3 e a segunda por 2, 6c + 9k = 1.260 e 6c + 4k = 760. Subtraindo, 5k = 500 e k = 100, e então 2c = 120 e c = 60. Conferindo, 2 × 60 + 3 × 100 = 420 e 3 × 60 + 2 × 100 = 380.\n\n100 é o preço da calça. 80, 90 e 40 não satisfazem as duas compras: para c = 80, a segunda daria k = 70, e a primeira, 160 + 210 = 370.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Uma quantia de R$ 1.000 é dividida em duas aplicações, uma a 2% ao mês e outra a 3% ao mês. Os juros de um mês somam R$ 27. Quanto foi aplicado a 2% ao mês?",
    opcoes: [
      "700",
      "400",
      "500",
      "300",
      "600",
    ],
    correta: 3,
    explicacao:
      "Chamando a parte a 2% de a e a parte a 3% de b, tem-se a + b = 1.000 e 0,02a + 0,03b = 27. Da primeira, a = 1.000 − b, e substituindo, 20 − 0,02b + 0,03b = 27, isto é, 0,01b = 7 e b = 700, e a = 300. Conferindo, 2% de 300 é 6, 3% de 700 é 21, e 6 + 21 = 27.\n\n700 é a parte a 3% ao mês. 400, 500 e 600 não dão R$ 27 de juros: por exemplo, 500 em cada aplicação renderiam 10 + 15 = 25.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Dois números somam 38. Dividindo o maior pelo menor, o quociente é 3 e o resto é 2. Qual é o menor desses números?",
    opcoes: [
      "29",
      "9",
      "10",
      "8",
      "12",
    ],
    correta: 1,
    explicacao:
      "Pela divisão, o maior é M = 3m + 2, em que m é o menor. Como M + m = 38, tem-se 3m + 2 + m = 38, isto é, 4m = 36 e m = 9. O maior é 29. Conferindo, 29 = 3 × 9 + 2, e 9 + 29 = 38. A divisão de inteiros com resto se traduz na forma dividendo = divisor × quociente + resto.\n\n29 é o maior número. 10, 8 e 12 não satisfazem as duas condições: para m = 10, M = 28, e 28 = 2 × 10 + 8, e não 3 × 10 + 2.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "A soma das idades de um pai e de seu filho é 48 anos. Daqui a 6 anos, a idade do pai será o triplo da idade do filho. Quantos anos o pai tem hoje?",
    opcoes: [
      "39",
      "9",
      "36",
      "30",
      "42",
    ],
    correta: 0,
    explicacao:
      "Chamando as idades de p e f, tem-se p + f = 48 e p + 6 = 3(f + 6), isto é, p = 3f + 12. Substituindo, 4f + 12 = 48, então f = 9 e p = 39. Conferindo, daqui a 6 anos, o pai terá 45 e o filho, 15, e 45 = 3 × 15.\n\n9 é a idade do filho. 36, 30 e 42 não satisfazem as duas condições: para p = 36, f = 12, e daqui a 6 anos, 42 e 18, e 42 não é o triplo de 18.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "No sistema x + y = 8 e 2x − 3y = −4, que par (x, y) satisfaz as duas equações?",
    opcoes: [
      "(5, 3)",
      "(3, 5)",
      "(6, 2)",
      "(2, 6)",
      "(4, 4)",
    ],
    correta: 4,
    explicacao:
      "Da primeira equação, y = 8 − x. Substituindo na segunda, 2x − 3(8 − x) = −4, isto é, 5x − 24 = −4, então x = 4 e y = 4. Conferindo, 4 + 4 = 8 e 8 − 12 = −4. Esse sistema pode ser resolvido por substituição, isolando y na primeira equação.\n\nTodos os outros pares somam 8, mas não satisfazem a segunda equação: (5, 3) dá 10 − 9 = 1, (3, 5) dá 6 − 15 = −9, (6, 2) dá 12 − 6 = 6 e (2, 6) dá 4 − 18 = −14.",
  },
  {
    materia: "matematica-fund",
    tema: "Sistemas de duas equações",
    dificuldade: "dificil",
    enunciado:
      "Dois números somam 12, e a diferença entre os quadrados deles é 48. Qual é o maior desses números?",
    opcoes: [
      "4",
      "6",
      "8",
      "10",
      "12",
    ],
    correta: 2,
    explicacao:
      "A diferença de quadrados se fatora: x² − y² = (x + y)(x − y) = 48. Como x + y = 12, tem-se 12 · (x − y) = 48, então x − y = 4. Somando, 2x = 16 e x = 8, e y = 4. Conferindo, 64 − 16 = 48 e 8 + 4 = 12.\n\n4 é o menor número. 6 e 10 somam 12 com 6 e 2, mas as diferenças de quadrados são 0 e 96. E 12 tem quadrado 144, e o outro número seria 0, com diferença 144.",
  },
];
