/* Polinômios e relações de Girard (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__polinomios-e-relacoes-de-girard.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__polinomios-e-relacoes-de-girard.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Qual é o resto da divisão do polinômio P(x) = x³ − 2x² + 4x − 5 por x − 2?",
    opcoes: [
      "3",
      "−29",
      "−5",
      "0",
      "−2",
    ],
    correta: 0,
    explicacao:
      "Pelo teorema do resto, o resto da divisão de P(x) por x − 2 é P(2): 2³ − 2 · 2² + 4 · 2 − 5 = 8 − 8 + 8 − 5 = 3. Pelo dispositivo de Briot-Ruffini com a raiz 2, os coeficientes 1, −2, 4, −5 viram 1, 0, 4 e resto 3.\n\n−29 é P(−2): troca o sinal da raiz do divisor. −5 é só o termo independente, que seria o resto da divisão por x. 0 supõe, sem conferir, que x − 2 seja fator. E −2 é P(1), a soma dos coeficientes.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Qual é a soma das raízes da equação 2x³ − 6x² + 5x − 1 = 0?",
    opcoes: [
      "−3",
      "3",
      "6",
      "5/2",
      "1/2",
    ],
    correta: 1,
    explicacao:
      "Pelas relações de Girard, numa equação ax³ + bx² + cx + d = 0 a soma das raízes é −b/a. Aqui, −(−6)/2 = 3. Não é preciso achar as raízes para somá-las.\n\n−3 esquece o sinal de menos da relação. 6 esquece de dividir pelo coeficiente líder, 2. 5/2 é c/a, que é a soma dos produtos das raízes tomadas duas a duas. E 1/2 é −d/a, o produto das três raízes.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Qual é o produto das raízes da equação x³ − 4x² + x + 6 = 0?",
    opcoes: [
      "6",
      "4",
      "1",
      "−6",
      "−4",
    ],
    correta: 3,
    explicacao:
      "Numa equação do 3º grau ax³ + bx² + cx + d = 0, o produto das raízes é −d/a. Aqui, −6/1 = −6. Conferindo: 2 é raiz (8 − 16 + 2 + 6 = 0), as outras são 3 e −1, e 2 · 3 · (−1) = −6.\n\n6 esquece o sinal de menos da relação, que aparece em grau ímpar. 4 é a soma das raízes (−b/a). 1 é c/a, a soma dos produtos dois a dois. E −4 é a soma com o sinal trocado.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Se P(x) é um polinômio de grau 3 e Q(x) é um polinômio de grau 4, qual é o grau do produto P(x) · Q(x)?",
    opcoes: [
      "7",
      "12",
      "4",
      "3",
      "1",
    ],
    correta: 0,
    explicacao:
      "Ao multiplicar, o termo de maior grau do produto vem do produto dos termos de maior grau dos fatores: a·x³ vezes b·x⁴ dá ab·x⁷, com ab ≠ 0. Por isso o grau do produto é a soma dos graus: 3 + 4 = 7.\n\n12 multiplica os graus, o que valeria para a composição P(Q(x)), e não para o produto. 4 fica com o maior dos graus, regra que vale para a soma de polinômios de graus diferentes. 3 fica com o menor. E 1 subtrai os graus, como no quociente de Q por P.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Para que valor de k o número 1 é raiz do polinômio P(x) = x³ + kx² − 3x + 5?",
    opcoes: [
      "3",
      "−9",
      "−7",
      "−5",
      "−3",
    ],
    correta: 4,
    explicacao:
      "Se 1 é raiz, então P(1) = 0: 1³ + k · 1² − 3 · 1 + 5 = 0, isto é, 1 + k − 3 + 5 = 0, ou k + 3 = 0. Logo k = −3. Conferindo: x³ − 3x² − 3x + 5 vale 1 − 3 − 3 + 5 = 0 em x = 1.\n\n3 erra o sinal na última passagem. −9 troca o sinal de −3x. −7 impõe a condição em x = −1, e não em x = 1. E −5 faz k igual ao oposto do termo independente, esquecendo os outros termos.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "O polinômio x² − 5x + 6 é divisível por x − 2. Qual é o outro fator do 1º grau, isto é, o quociente dessa divisão?",
    opcoes: [
      "x + 3",
      "x − 2",
      "x − 3",
      "x + 2",
      "x − 5",
    ],
    correta: 2,
    explicacao:
      "Como 2 é raiz de x² − 5x + 6 (4 − 10 + 6 = 0), a divisão por x − 2 é exata. Pelo dispositivo de Briot-Ruffini, os coeficientes 1, −5, 6 com a raiz 2 dão 1, −3 e resto 0: o quociente é x − 3. De fato, (x − 2)(x − 3) = x² − 5x + 6.\n\nx + 3 erra o sinal do termo independente. x − 2 repete o divisor. x + 2 muda o sinal do divisor. E x − 5 copia os dois primeiros coeficientes do dividendo, sem fazer a divisão.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "O polinômio P(x) = x² + bx + c tem raízes 2 e 5. Qual é o valor de b + c?",
    opcoes: [
      "17",
      "−3",
      "3",
      "10",
      "−17",
    ],
    correta: 2,
    explicacao:
      "Com raízes 2 e 5, o polinômio mônico é (x − 2)(x − 5) = x² − 7x + 10. Logo b = −7, c = 10 e b + c = 3. Pelas relações de Girard: a soma das raízes é −b = 7 e o produto é c = 10. Um atalho: b + c = P(1) − 1 = (1 − 2)(1 − 5) − 1 = 3.\n\n17 toma b = 7, esquecendo o sinal da relação −b/a. −3 troca o sinal do resultado. 10 é só o valor de c. E −17 combina os dois sinais trocados.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Aplicando o dispositivo de Briot-Ruffini para dividir 2x³ − 3x² + x − 4 por x − 1, que polinômio se obtém como quociente?",
    opcoes: [
      "2x² − 5x + 6",
      "2x² − x",
      "2x² − 3x + 1",
      "2x² − x − 4",
      "2x³ − x²",
    ],
    correta: 1,
    explicacao:
      "No dispositivo de Briot-Ruffini com a raiz 1: baixa-se o 2; 2 · 1 + (−3) = −1; −1 · 1 + 1 = 0; 0 · 1 + (−4) = −4. Os três primeiros números, 2, −1 e 0, são os coeficientes do quociente, e o último é o resto: quociente 2x² − x, resto −4. Conferindo: (x − 1)(2x² − x) − 4 = 2x³ − 3x² + x − 4.\n\n2x² − 5x + 6 usa −1 no dispositivo, o que seria a divisão por x + 1. 2x² − 3x + 1 só copia os coeficientes do dividendo, baixando o grau. 2x² − x − 4 põe o resto dentro do quociente. E 2x³ − x² esquece que o quociente tem um grau a menos que o dividendo.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Uma das raízes da equação x² − 7x + k = 0 é 3. Qual é a outra raiz?",
    opcoes: [
      "−4",
      "10",
      "12",
      "7/3",
      "4",
    ],
    correta: 4,
    explicacao:
      "A soma das raízes de x² − 7x + k = 0 é 7, o oposto do coeficiente de x. Se uma raiz é 3, a outra é 7 − 3 = 4. Conferindo pelo produto: k = 3 · 4 = 12, e x² − 7x + 12 = (x − 3)(x − 4).\n\n−4 erra o sinal da soma, tomando −7. 10 soma 3 e 7 em vez de subtrair. 12 é o valor de k, o produto das raízes, e não a outra raiz. E 7/3 divide a soma pela raiz conhecida, confundindo soma com produto.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Para que o polinômio (a − 1)x² + (b + 2)x + c seja identicamente nulo, isto é, valha zero para todo x real, qual deve ser o valor de a + b + c?",
    opcoes: [
      "1",
      "−1",
      "3",
      "0",
      "−3",
    ],
    correta: 1,
    explicacao:
      "Um polinômio é identicamente nulo quando todos os seus coeficientes são zero: a − 1 = 0, b + 2 = 0 e c = 0. Então a = 1, b = −2, c = 0, e a + b + c = −1.\n\n3 erra o sinal de b, tomando b = 2. −3 erra o sinal de a, tomando a = −1. 1 usa só a condição sobre a e esquece as outras duas. E 0 confunde a soma pedida com o valor do próprio polinômio, que é zero.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Na divisão de um polinômio de grau 5 por um polinômio de grau 2, qual é o grau do quociente?",
    opcoes: [
      "3",
      "2",
      "7",
      "10",
      "1",
    ],
    correta: 0,
    explicacao:
      "Na divisão P(x) = D(x) · Q(x) + R(x), o resto tem grau menor que o do divisor e não interfere no termo de maior grau. Então o grau de D · Q, que é a soma dos graus, precisa ser 5: 2 + grau Q = 5, e o quociente tem grau 3.\n\n2 copia o grau do divisor. 7 soma os graus, como num produto. 10 multiplica os graus. E 1 é o grau máximo do resto, que precisa ser menor que o grau do divisor — não é o grau do quociente.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "facil",
    enunciado:
      "Qual é a soma dos coeficientes do polinômio P(x) = (2x − 1)⁵, depois de desenvolvido?",
    opcoes: [
      "32",
      "−1",
      "1",
      "0",
      "243",
    ],
    correta: 2,
    explicacao:
      "A soma dos coeficientes de qualquer polinômio é o seu valor em x = 1, porque cada potência de x vira 1. Então basta calcular P(1) = (2 · 1 − 1)⁵ = 1⁵ = 1, sem desenvolver nada.\n\n32 é só o coeficiente líder, 2⁵. −1 é P(0), o termo independente, (−1)⁵. 0 supõe que os coeficientes, com sinais alternados, se cancelem. E 243 é 3⁵, a soma dos valores absolutos dos coeficientes, que é |P(−1)|.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Sendo a, b e c as raízes de x³ − 2x² − 5x + 6 = 0, qual é o valor de a² + b² + c²?",
    opcoes: [
      "4",
      "−6",
      "14",
      "24",
      "36",
    ],
    correta: 2,
    explicacao:
      "Pela identidade (a + b + c)² = a² + b² + c² + 2(ab + ac + bc), a soma dos quadrados é S₁² − 2S₂. Pelas relações de Girard, S₁ = a + b + c = 2 e S₂ = ab + ac + bc = −5. Então a² + b² + c² = 4 − 2(−5) = 14. Conferindo: as raízes são 1, −2 e 3, e 1 + 4 + 9 = 14.\n\n4 é só S₁², sem o termo dos produtos. −6 soma 2S₂ em vez de subtrair. 24 subtrai 4S₂, dobrando o termo. E 36 é o quadrado do produto das raízes, abc = −6.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Sendo a, b e c as raízes de 2x³ − 3x² + 4x − 5 = 0, qual é o valor de 1/a + 1/b + 1/c?",
    opcoes: [
      "3/5",
      "5/4",
      "−4/5",
      "4/5",
      "3/4",
    ],
    correta: 3,
    explicacao:
      "1/a + 1/b + 1/c = (bc + ac + ab)/(abc) = S₂/S₃. Pelas relações de Girard em 2x³ − 3x² + 4x − 5 = 0: S₂ = 4/2 = 2 e S₃ = −(−5)/2 = 5/2. Logo a soma dos inversos é 2 ÷ (5/2) = 4/5.\n\n3/5 usa S₁ = 3/2 no numerador, no lugar de S₂. 5/4 inverte a fração. −4/5 erra o sinal do produto. E 3/4 divide S₁ por S₂, trocando as duas relações. As raízes dessa equação não são inteiras, e calculá-las seria trabalhoso; as relações de Girard dão a resposta sem que seja preciso achá-las.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "As raízes da equação x³ − 9x² + 23x − 15 = 0 estão em progressão aritmética. Qual é a raiz do meio?",
    opcoes: [
      "9",
      "1",
      "5",
      "23/3",
      "3",
    ],
    correta: 4,
    explicacao:
      "Em progressão aritmética, as raízes podem ser escritas como m − r, m e m + r. A soma é 3m, e pelas relações de Girard vale 9. Então m = 3. Conferindo: 27 − 81 + 69 − 15 = 0, e as outras raízes são 1 e 5, cujo produto com 3 dá 15, como pede o termo independente.\n\n9 é a soma das raízes, e não a do meio. 1 e 5 são as raízes das pontas. E 23/3 divide por 3 o coeficiente de x, que corresponde à soma dos produtos dois a dois, e não à soma das raízes.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Sabe-se que as três raízes de x³ − 7x² + 14x − 8 = 0 formam uma progressão geométrica. Qual é o termo central dessa progressão?",
    opcoes: [
      "8",
      "7/3",
      "2",
      "4",
      "14",
    ],
    correta: 2,
    explicacao:
      "Numa progressão geométrica, as raízes podem ser escritas como m/q, m e mq, e o produto delas é m³. Pelas relações de Girard, o produto vale −(−8)/1 = 8, então m³ = 8 e m = 2. Conferindo: 8 − 28 + 28 − 8 = 0, e as outras raízes são 1 e 4.\n\n8 é o produto das raízes. 7/3 divide a soma por 3, raciocínio que vale para progressão aritmética. 4 é a maior raiz. E 14 é a soma dos produtos dois a dois.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Um polinômio P(x) deixa resto 3 na divisão por x − 1 e resto 5 na divisão por x − 2. Qual é o resto da divisão de P(x) por (x − 1)(x − 2)?",
    opcoes: [
      "x + 2",
      "8",
      "2x − 1",
      "15",
      "2x + 1",
    ],
    correta: 4,
    explicacao:
      "O divisor tem grau 2, então o resto tem grau no máximo 1: R(x) = ax + b. Como P(x) = (x − 1)(x − 2)Q(x) + ax + b, substituir x = 1 e x = 2 anula o primeiro termo: a + b = 3 e 2a + b = 5. Daí a = 2 e b = 1, e o resto é 2x + 1.\n\nx + 2 satisfaz a primeira condição (vale 3 em x = 1), mas vale 4 em x = 2. 8 soma os restos, e 15 os multiplica, como se o resto por um produto viesse de operar os restos. E 2x − 1 erra o sinal de b.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Qual é a multiplicidade da raiz 1 no polinômio P(x) = x⁴ − 5x³ + 9x² − 7x + 2?",
    opcoes: [
      "3",
      "1",
      "2",
      "4",
      "0",
    ],
    correta: 0,
    explicacao:
      "Divide-se P(x) por x − 1 enquanto a divisão for exata. Por Briot-Ruffini: 1, −5, 9, −7, 2 → 1, −4, 5, −2 e resto 0; depois → 1, −3, 2 e resto 0; depois → 1, −2 e resto 0; por fim, 1, −2 → resto −1, que não é zero. Foram três divisões exatas: P(x) = (x − 1)³(x − 2), e a multiplicidade é 3.\n\n1 para na primeira divisão exata. 2 para na segunda. 4 toma o grau do polinômio como multiplicidade, mas a raiz 2 também aparece. E 0 supõe que 1 nem seja raiz — e 1 − 5 + 9 − 7 + 2 = 0 mostra que é.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Um polinômio P(x) de grau 3 tem raízes 1, −1 e 2, e P(0) = 4. Qual é o valor de P(3)?",
    opcoes: [
      "8",
      "16",
      "32",
      "−16",
      "4",
    ],
    correta: 1,
    explicacao:
      "Com essas raízes, P(x) = a(x − 1)(x + 1)(x − 2) para algum a ≠ 0. De P(0) = 4: a · (−1) · 1 · (−2) = 2a = 4, então a = 2. Logo P(3) = 2 · 2 · 4 · 1 = 16.\n\n8 supõe a = 1, esquecendo de ajustar o coeficiente líder pela condição P(0) = 4. 32 usa a = 4, igualando a a P(0). −16 erra o sinal ao calcular P(0) e acha a = −2. E 4 repete o valor de P(0).",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Sabendo que 2 é raiz de x³ − 4x² + x + 6 = 0, quais são as outras duas raízes?",
    opcoes: [
      "−3 e 1",
      "2 e 3",
      "1 e 6",
      "−2 e −3",
      "3 e −1",
    ],
    correta: 4,
    explicacao:
      "Dividindo por x − 2 com Briot-Ruffini: 1, −4, 1, 6 → 1, −2, −3 e resto 0. O quociente é x² − 2x − 3, cujas raízes são 3 e −1 (soma 2, produto −3). Então x³ − 4x² + x + 6 = (x − 2)(x − 3)(x + 1).\n\n−3 e 1 erram os sinais das raízes do quociente. 2 e 3 repetem a raiz já conhecida. 1 e 6 são divisores do termo independente que não anulam o polinômio (em x = 1, ele vale 4). E −2 e −3 trocam o sinal de tudo.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Um polinômio P(x) de grau 2 satisfaz P(0) = 1, P(1) = 2 e P(2) = 5. Qual é o valor de P(3)?",
    opcoes: [
      "10",
      "8",
      "4",
      "9",
      "7",
    ],
    correta: 0,
    explicacao:
      "Com P(x) = ax² + bx + c: P(0) = c = 1; P(1) = a + b + 1 = 2; P(2) = 4a + 2b + 1 = 5. Das duas últimas, a + b = 1 e 2a + b = 2, logo a = 1 e b = 0: P(x) = x² + 1, e P(3) = 10. Pelas diferenças: 1, 2, 5 têm diferenças 1 e 3, que crescem de 2 em 2; a próxima é 5, e 5 + 5 = 10.\n\n8 usa a reta que passa por P(1) e P(2), como se o polinômio fosse do 1º grau. 4 usa a reta que passa por P(0) e P(1). 9 é 3², esquecendo o termo independente. E 7 soma 2 ao último valor, confundindo a variação das diferenças com a própria diferença.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Na divisão de x¹⁰¹ pelo polinômio x² − 1, obtêm-se um quociente Q(x) e um resto R(x). Qual é R(x)?",
    opcoes: [
      "1",
      "−x",
      "0",
      "x",
      "x + 1",
    ],
    correta: 3,
    explicacao:
      "O resto tem grau no máximo 1: R(x) = ax + b, e x¹⁰¹ = (x² − 1)Q(x) + ax + b. Em x = 1: 1 = a + b. Em x = −1: (−1)¹⁰¹ = −1 = −a + b. Somando, b = 0; então a = 1, e o resto é x. Outro caminho: como x² = (x² − 1) + 1, toda potência x²ᵏ deixa resto 1, e x¹⁰¹ = x · x¹⁰⁰ deixa resto x.\n\n1 é o resto de x¹⁰⁰, de expoente par. −x erra o sinal de (−1)¹⁰¹. 0 supõe que x² − 1 divida x¹⁰¹, mas x¹⁰¹ não se anula em x = 1. E x + 1 soma os valores obtidos em x = 1 e x = −1 como se fossem os coeficientes.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Qual dos números abaixo é raiz da equação 2x³ − 3x² − 3x + 2 = 0?",
    opcoes: [
      "1/3",
      "−2",
      "3/2",
      "−1/2",
      "1/2",
    ],
    correta: 4,
    explicacao:
      "Pelo teorema das raízes racionais, uma raiz p/q, em fração irredutível, tem p dividindo o termo independente (2) e q dividindo o coeficiente líder (2): os candidatos são ±1, ±2 e ±1/2. Testando 1/2: 2 · (1/8) − 3 · (1/4) − 3 · (1/2) + 2 = 1/4 − 3/4 − 3/2 + 2 = 0. As raízes são 1/2, 2 e −1.\n\n1/3 nem é candidata, porque 3 não divide o coeficiente líder. −2 é candidata, mas dá −20. 3/2 também não é candidata, e dá −5/2. E −1/2 dá 5/2 — é a raiz com o sinal trocado.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "As raízes de x³ − 2x² + 3x − 1 = 0 são a, b e c. Qual equação, com coeficiente de x³ igual a 1, tem raízes 2a, 2b e 2c?",
    opcoes: [
      "x³ − 4x² + 12x − 8 = 0",
      "2x³ − 4x² + 6x − 2 = 0",
      "x³ − 2x² + 3x − 8 = 0",
      "x³ − 4x² + 6x − 2 = 0",
      "8x³ − 8x² + 6x − 1 = 0",
    ],
    correta: 0,
    explicacao:
      "Se y = 2x, então x = y/2, e basta substituir: (y/2)³ − 2(y/2)² + 3(y/2) − 1 = 0, isto é, y³/8 − y²/2 + 3y/2 − 1 = 0. Multiplicando por 8: y³ − 4y² + 12y − 8 = 0. Regra prática: o coeficiente de cada termo fica multiplicado por 2 elevado ao número de graus que faltam para 3.\n\n2x³ − 4x² + 6x − 2 = 0 só multiplica a equação por 2, o que não muda as raízes. x³ − 2x² + 3x − 8 = 0 ajusta apenas o termo independente. x³ − 4x² + 6x − 2 = 0 dobra todos os coeficientes, exceto o líder. E 8x³ − 8x² + 6x − 1 = 0 troca x por 2x, o que produz as raízes a/2, b/2 e c/2.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Sendo a, b e c as raízes de x³ − 3x² + 2x − 1 = 0, qual é o valor de (1 + a)(1 + b)(1 + c)?",
    opcoes: [
      "7",
      "−7",
      "5",
      "6",
      "1",
    ],
    correta: 0,
    explicacao:
      "Como o polinômio é mônico, P(x) = (x − a)(x − b)(x − c). Em x = −1: P(−1) = (−1 − a)(−1 − b)(−1 − c) = −(1 + a)(1 + b)(1 + c). Como P(−1) = −1 − 3 − 2 − 1 = −7, o produto pedido é 7. Pelas relações de Girard dá o mesmo: 1 + S₁ + S₂ + S₃ = 1 + 3 + 2 + 1 = 7.\n\n−7 é P(−1), sem o sinal que vem dos três fatores negativos. 5 usa o produto das raízes com o sinal trocado (1 + 3 + 2 − 1). 6 esquece a parcela 1 do desenvolvimento. E 1 é P(1) com o sinal trocado: P(1) = 1 − 3 + 2 − 1 = −1.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Para que valores de a e b o polinômio x³ + ax² + bx − 6 é divisível por (x − 1)(x − 2)?",
    opcoes: [
      "a = 6 e b = −11",
      "a = −3 e b = 2",
      "a = −6 e b = 11",
      "a = 3 e b = 2",
      "a = −6 e b = 5",
    ],
    correta: 2,
    explicacao:
      "Ser divisível por (x − 1)(x − 2) significa ter 1 e 2 como raízes. P(1) = 1 + a + b − 6 = 0 dá a + b = 5. P(2) = 8 + 4a + 2b − 6 = 0 dá 2a + b = −1. Subtraindo, a = −6, e então b = 11. O polinômio é x³ − 6x² + 11x − 6 = (x − 1)(x − 2)(x − 3).\n\na = 6 e b = −11 trocam os sinais. a = −3 e b = 2 copiam os coeficientes de (x − 1)(x − 2) = x² − 3x + 2. a = 3 e b = 2 só garantem P(1) = 0: em x = 2, o polinômio vale 18. E a = −6 e b = 5 confundem a condição a + b = 5 com o valor de b.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Sabendo que 1 + i é raiz de x³ − 3x² + 4x − 2 = 0, qual é a raiz real dessa equação?",
    opcoes: [
      "1",
      "2",
      "−1",
      "−2",
      "3",
    ],
    correta: 0,
    explicacao:
      "Os coeficientes são reais, então 1 − i também é raiz. Pela soma das raízes (Girard): (1 + i) + (1 − i) + r = 3, logo r = 1. Conferindo pelo produto: (1 + i)(1 − i) · r = 2r, que deve valer 2, o que também dá r = 1.\n\n2 é o produto das raízes, e não a raiz real. −1 erra o sinal na soma. −2 é o termo independente. E 3 é a soma das três raízes, e não a terceira.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Resolvendo a equação biquadrada x⁴ + x² − 12 = 0 no conjunto dos números complexos, quantas das suas quatro raízes são números reais?",
    opcoes: [
      "4",
      "2",
      "0",
      "1",
      "3",
    ],
    correta: 1,
    explicacao:
      "Com y = x², a equação vira y² + y − 12 = 0, de raízes y = 3 e y = −4. Voltando: x² = 3 dá x = ±√3, duas raízes reais; x² = −4 dá x = ±2i, duas raízes não reais. São 2 raízes reais.\n\n4 conta as quatro raízes, incluindo ±2i, que não são reais. 0 supõe que nenhuma solução em y seja positiva. 1 conta só √3 e esquece −√3. E 3 conta as duas de x² = 3 e mais uma de x² = −4, que não tem solução real.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "As raízes de x⁴ − 10x³ + 35x² − 50x + 24 = 0 são a, b, c e d. Qual é o valor de ab + ac + ad + bc + bd + cd?",
    opcoes: [
      "−35",
      "35",
      "10",
      "24",
      "50",
    ],
    correta: 1,
    explicacao:
      "Numa equação mônica de grau 4, x⁴ + a₃x³ + a₂x² + a₁x + a₀ = 0, a soma dos produtos das raízes tomadas duas a duas é a₂, com sinal positivo — os sinais das relações de Girard alternam: −, +, −, +. Aqui, o valor é 35. Conferindo: as raízes são 1, 2, 3 e 4, e 2 + 3 + 4 + 6 + 8 + 12 = 35.\n\n−35 aplica o sinal de menos, que vale para a soma e para os produtos três a três. 10 é a soma das raízes. 24 é o produto das quatro. E 50 é, em módulo, a soma dos produtos três a três.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "O polinômio P(x) = x³ + ax² + bx + c tem raízes 1, 2 e 3. Qual é o valor de P(4)?",
    opcoes: [
      "24",
      "0",
      "10",
      "−6",
      "6",
    ],
    correta: 4,
    explicacao:
      "Um polinômio mônico de grau 3 com raízes 1, 2 e 3 é P(x) = (x − 1)(x − 2)(x − 3). Então P(4) = 3 · 2 · 1 = 6, sem precisar achar a, b e c.\n\n24 é 4 · 3 · 2, que seria calcular x(x − 1)(x − 2) em x = 4, com as raízes erradas. 0 supõe que 4 também seja raiz. 10 é a soma 1 + 2 + 3 + 4. E −6 é P(0), o termo independente c. Quem preferir achar os coeficientes chega ao mesmo valor: o polinômio é x³ − 6x² + 11x − 6, e 64 − 96 + 44 − 6 = 6.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Qual é o resto da divisão de x⁵ + 2x³ + x + 3 por x² + 1?",
    opcoes: [
      "4x + 3",
      "−2x + 3",
      "3",
      "x + 3",
      "0",
    ],
    correta: 2,
    explicacao:
      "Na divisão por x² + 1, pode-se trocar x² por −1 em tudo, porque x² ≡ −1. Então x⁵ = x · (x²)² ≡ x, 2x³ = 2x · x² ≡ −2x, e o polinômio fica x − 2x + x + 3 = 3. O resto é 3. De fato, x⁵ + 2x³ + x = x(x² + 1)².\n\n4x + 3 troca x² por +1. −2x + 3 erra x⁴, que vale (x²)² ≡ (−1)² = +1, e não −1. x + 3 guarda só o termo x do dividendo. E 0 supõe divisão exata, esquecendo o termo 3.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Os números A e B satisfazem (3x + 1)/(x² − 1) = A/(x − 1) + B/(x + 1) para todo x ≠ ±1. Quanto valem A e B?",
    opcoes: [
      "A = 1 e B = 2",
      "A = 3 e B = 1",
      "A = 2 e B = −1",
      "A = 2 e B = 1",
      "A = 4 e B = −2",
    ],
    correta: 3,
    explicacao:
      "Somando as frações da direita: A(x + 1) + B(x − 1) = 3x + 1, para todo x. Em x = 1: 2A = 4, A = 2. Em x = −1: −2B = −2, B = 1. Conferindo pelos coeficientes: A + B = 3 e A − B = 1.\n\nA = 1 e B = 2 troca os valores. A = 3 e B = 1 copia os coeficientes do numerador. A = 2 e B = −1 erra o sinal em x = −1. E A = 4 e B = −2 esquece de dividir por 2 os valores obtidos nas substituições.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Escrevendo x⁴ − 1 na forma (x − 1) · Q(x), qual é o polinômio Q(x)?",
    opcoes: [
      "x³ − x² + x − 1",
      "x³ + x² + x + 1",
      "x³ + 1",
      "x³ − 1",
      "x² + 1",
    ],
    correta: 1,
    explicacao:
      "Por Briot-Ruffini com a raiz 1, os coeficientes de x⁴ − 1 são 1, 0, 0, 0, −1 — é preciso escrever os zeros dos termos que faltam. Resultado: 1, 1, 1, 1 e resto 0. O quociente é x³ + x² + x + 1. Conferindo: (x − 1)(x³ + x² + x + 1) = x⁴ − 1.\n\nx³ − x² + x − 1 é o quociente da divisão por x + 1. x³ + 1 e x³ − 1 aparecem quando se esquecem os zeros dos termos que faltam. E x² + 1 é um fator de x⁴ − 1 = (x² − 1)(x² + 1), mas não o quociente pedido.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Qual é o resto da divisão de (x² + x + 1)¹⁰ por x + 1?",
    opcoes: [
      "0",
      "1",
      "−1",
      "59.049",
      "10",
    ],
    correta: 1,
    explicacao:
      "Pelo teorema do resto, o resto é o valor do dividendo em x = −1: ((−1)² + (−1) + 1)¹⁰ = (1 − 1 + 1)¹⁰ = 1¹⁰ = 1. Não é preciso desenvolver a potência.\n\n0 supõe que −1 seja raiz. −1 erra o sinal de (−1)². 59.049 é 3¹⁰, o valor em x = 1, e não em x = −1. E 10 confunde o expoente com o resto. O mesmo raciocínio vale para qualquer divisor da forma x − a: o resto é o valor do dividendo em x = a, por maior que seja o expoente.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Qual é o coeficiente de x² no desenvolvimento de (x − 1)⁴?",
    opcoes: [
      "−6",
      "4",
      "−4",
      "6",
      "1",
    ],
    correta: 3,
    explicacao:
      "Pelo binômio de Newton, (x − 1)⁴ = Σ C(4, k) · x⁴⁻ᵏ · (−1)ᵏ. O termo em x² tem k = 2: C(4, 2) · (−1)² = 6 · 1 = 6. O desenvolvimento completo é x⁴ − 4x³ + 6x² − 4x + 1.\n\n−6 erra o sinal: (−1)² é positivo. 4 e −4 são, em módulo e com sinal, os coeficientes de x³ e de x. E 1 é o coeficiente de x⁴ e também o termo independente. Pelo triângulo de Pascal, a linha 4 é 1, 4, 6, 4, 1, e os sinais alternam porque o segundo termo do binômio é −1.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Qual é o polinômio de grau 3, com coeficiente líder 1, cujas raízes são 1, 2 e −3?",
    opcoes: [
      "x³ + 7x − 6",
      "x³ − 6x² + 11x − 6",
      "x³ − 7x − 6",
      "x³ − 7x + 6",
      "x³ + 6x² + 11x + 6",
    ],
    correta: 3,
    explicacao:
      "O polinômio é (x − 1)(x − 2)(x + 3). Pelas relações de Girard: a soma das raízes é 1 + 2 − 3 = 0 (coeficiente de x² nulo); a soma dos produtos dois a dois é 2 − 3 − 6 = −7 (coeficiente de x); e o produto é −6 (termo independente +6, com o sinal trocado). Resultado: x³ − 7x + 6.\n\nx³ + 7x − 6 troca os sinais dos dois últimos coeficientes. x³ − 6x² + 11x − 6 tem raízes 1, 2 e 3. x³ − 7x − 6 tem raízes −1, −2 e 3. E x³ + 6x² + 11x + 6 tem raízes −1, −2 e −3.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Qual é o resto da divisão de P(x) = 2x⁴ − x³ + 3x − 5 por 2x − 1?",
    opcoes: [
      "−25/4",
      "25",
      "−7/2",
      "−7",
      "7/2",
    ],
    correta: 2,
    explicacao:
      "O resto da divisão por 2x − 1 é o valor de P na raiz do divisor, x = 1/2: P(1/2) = 2 · (1/16) − 1/8 + 3/2 − 5 = 1/8 − 1/8 + 3/2 − 5 = −7/2. O coeficiente 2 do divisor não altera o resto; ele só divide o quociente por 2.\n\n−25/4 é P(−1/2): troca o sinal da raiz. 25 é P(2), usando o coeficiente do divisor como raiz. −7 multiplica o resto por 2, como se o coeficiente líder do divisor entrasse no resto. E 7/2 erra o sinal do resultado.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "No desenvolvimento de (1 + x)⁶, qual é a soma dos coeficientes dos termos de grau par, incluindo o termo independente?",
    opcoes: [
      "64",
      "0",
      "16",
      "32",
      "20",
    ],
    correta: 3,
    explicacao:
      "P(1) soma todos os coeficientes, e P(−1) soma os de grau par e subtrai os de grau ímpar. Somando os dois, os ímpares se cancelam: a soma dos pares é [P(1) + P(−1)]/2 = (2⁶ + 0⁶)/2 = 64/2 = 32. Conferindo: 1 + 15 + 15 + 1 = 32, nos graus 0, 2, 4 e 6.\n\n64 é a soma de todos os coeficientes. 0 é P(−1), que mistura pares e ímpares com sinais opostos. 16 divide por 4 em vez de 2. E 20 é o coeficiente central, C(6, 3), que pertence a um termo de grau ímpar.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Quantas raízes racionais tem a equação 2x³ + x² − 7x − 6 = 0?",
    opcoes: [
      "1",
      "2",
      "0",
      "6",
      "3",
    ],
    correta: 4,
    explicacao:
      "Pelo teorema das raízes racionais, os candidatos são ±1, ±2, ±3, ±6, ±1/2 e ±3/2. Testando: −1 é raiz (−2 + 1 + 7 − 6 = 0). Dividindo por x + 1, sobra 2x² − x − 6, cujas raízes são 2 e −3/2. As três raízes, −1, 2 e −3/2, são racionais.\n\n1 para na primeira raiz encontrada. 2 despreza −3/2 por não ser inteira, mas frações também são racionais. 0 supõe que nenhum candidato funcione. E 6 conta os divisores de 6, e não as raízes.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "media",
    enunciado:
      "Para que valor de a vale a identidade x³ − 2x² + ax − 6 = (x − 3)(x² + x + 2), para todo x real?",
    opcoes: [
      "1",
      "2",
      "−3",
      "−1",
      "5",
    ],
    correta: 3,
    explicacao:
      "Desenvolvendo o lado direito: (x − 3)(x² + x + 2) = x³ + x² + 2x − 3x² − 3x − 6 = x³ − 2x² − x − 6. Comparando com o lado esquerdo, o coeficiente de x é a = −1. Os demais coeficientes conferem: −2 e −6.\n\n1 erra o sinal da soma 2x − 3x. 2 copia o coeficiente de x do segundo fator. −3 fica só com o termo −3x e esquece o 2x. E 5 soma 2 + 3, trocando o sinal de −3x.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Sendo a, b e c as raízes de x³ − x − 1 = 0, qual é o valor de a³ + b³ + c³?",
    opcoes: [
      "1",
      "0",
      "−3",
      "3",
      "2",
    ],
    correta: 3,
    explicacao:
      "Cada raiz satisfaz a equação: a³ = a + 1, b³ = b + 1 e c³ = c + 1. Somando: a³ + b³ + c³ = (a + b + c) + 3. Pelas relações de Girard, a + b + c = 0, porque não há termo em x². Logo a soma dos cubos é 3.\n\n1 usa a equação uma vez só, esquecendo que são três raízes. 0 supõe que, com soma zero, a soma dos cubos também se anule — mas, quando a + b + c = 0, vale a³ + b³ + c³ = 3abc, e abc = 1. −3 erra o sinal do produto. E 2 é a soma dos quadrados, S₁² − 2S₂ = 0 + 2.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Quantas raízes reais distintas tem a equação x⁴ − 3x³ + 4x² − 3x + 1 = 0?",
    opcoes: [
      "2",
      "4",
      "0",
      "3",
      "1",
    ],
    correta: 4,
    explicacao:
      "A equação é recíproca, com coeficientes simétricos: 1, −3, 4, −3, 1. Dividindo por x² e fazendo y = x + 1/x, com x² + 1/x² = y² − 2: y² − 2 − 3y + 4 = 0, ou y² − 3y + 2 = 0, de raízes y = 1 e y = 2. De x + 1/x = 2 vem x² − 2x + 1 = 0, isto é, x = 1 (raiz dupla). De x + 1/x = 1 vem x² − x + 1 = 0, sem raízes reais (Δ = −3). Há uma única raiz real distinta, x = 1.\n\n2 conta a raiz dupla duas vezes. 4 conta todas as raízes, inclusive as não reais. 0 supõe que nenhuma raiz seja real. E 3 conta a raiz dupla e ainda uma raiz real de x² − x + 1 = 0, que não existe.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Na equação x³ − 12x² + 39x + k = 0, as três raízes formam uma progressão aritmética. Qual é o valor de k?",
    opcoes: [
      "−28",
      "28",
      "−4",
      "−64",
      "−39",
    ],
    correta: 0,
    explicacao:
      "Com as raízes m − r, m e m + r, a soma é 3m = 12, então m = 4. Como 4 é raiz: 64 − 192 + 156 + k = 0, e k = −28. Conferindo: a soma dos produtos dois a dois é 3m² − r² = 48 − r² = 39, logo r = 3, e as raízes são 1, 4 e 7, cujo produto é 28 = −k.\n\n28 esquece o sinal: o produto das raízes é −k. −4 usa a raiz do meio como se fosse k. −64 é −m³, o valor de k se as três raízes fossem iguais a 4. E −39 copia o coeficiente de x com o sinal trocado.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Para que valor real de m a equação x³ − 3x + m = 0 tem uma raiz dupla positiva?",
    opcoes: [
      "−2",
      "0",
      "3",
      "2",
      "1",
    ],
    correta: 3,
    explicacao:
      "Uma raiz dupla r anula o polinômio e a sua derivada. A derivada de x³ − 3x + m é 3x² − 3, que se anula em x = 1 e x = −1. Para a raiz dupla ser positiva, r = 1, e então 1 − 3 + m = 0, ou m = 2. De fato, x³ − 3x + 2 = (x − 1)²(x + 2).\n\n−2 dá x³ − 3x − 2 = (x + 1)²(x − 2), cuja raiz dupla é −1, negativa. 0 dá as raízes 0 e ±√3, todas simples. 3 dá uma raiz real e duas não reais, e 1 dá três raízes reais distintas — em nenhum dos dois casos há raiz dupla.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Qual é o resto da divisão de x²⁰²⁷ por x² + x + 1?",
    opcoes: [
      "x + 1",
      "x",
      "−x − 1",
      "1",
      "−x",
    ],
    correta: 2,
    explicacao:
      "Como x³ − 1 = (x − 1)(x² + x + 1), vale x³ ≡ 1 na divisão por x² + x + 1. Então só importa o resto de 2027 por 3: 2027 = 3 × 675 + 2, e x²⁰²⁷ = (x³)⁶⁷⁵ · x² ≡ x². Mas x² ainda tem grau 2; como x² + x + 1 ≡ 0, x² ≡ −x − 1. O resto é −x − 1.\n\nx + 1 erra o sinal ao reduzir x². x corresponderia a resto 1 na divisão de 2027 por 3, e 1, a resto 0. E −x vem de reduzir x² como se o divisor fosse x² + x.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Sendo a, b e c as raízes de x³ − 5x² + 6x − 1 = 0, qual é o valor de a/(bc) + b/(ac) + c/(ab)?",
    opcoes: [
      "25",
      "13",
      "5",
      "6",
      "37",
    ],
    correta: 1,
    explicacao:
      "Reduzindo ao denominador comum abc: a/(bc) + b/(ac) + c/(ab) = (a² + b² + c²)/(abc). Pelas relações de Girard, S₁ = 5, S₂ = 6 e abc = 1. Então a² + b² + c² = S₁² − 2S₂ = 25 − 12 = 13, e o valor pedido é 13/1 = 13.\n\n25 é S₁², sem descontar 2S₂. 5 é a soma das raízes, que apareceria se o numerador fosse a + b + c. 6 é S₂. E 37 soma 2S₂ em vez de subtrair (25 + 12).",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "O resto da divisão de x⁴ + ax + b por x² + 1 é 2x + 3. Qual é o valor de a + b?",
    opcoes: [
      "5",
      "6",
      "3",
      "2",
      "4",
    ],
    correta: 4,
    explicacao:
      "Na divisão por x² + 1, vale x² ≡ −1, então x⁴ = (x²)² ≡ 1. O resto de x⁴ + ax + b é, portanto, ax + b + 1. Igualando a 2x + 3: a = 2 e b + 1 = 3, logo b = 2 e a + b = 4.\n\n5 esquece a contribuição de x⁴ e toma b = 3. 6 usa x⁴ ≡ −1 e fica com b = 4. 3 é o termo independente do resto, b + 1, e não a + b. E 2 é só o valor de a (ou só o de b).",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Uma equação do 3º grau, com coeficientes inteiros e coeficiente de x³ igual a 1, tem as raízes 2 e 1 + √3. Qual é o seu termo independente?",
    opcoes: [
      "−4",
      "4",
      "2",
      "−2",
      "−8",
    ],
    correta: 1,
    explicacao:
      "Com coeficientes inteiros, a raiz irracional 1 + √3 vem acompanhada da conjugada 1 − √3. As três raízes são 2, 1 + √3 e 1 − √3, e o produto delas é 2(1 − 3) = −4. Numa equação mônica x³ + bx² + cx + d = 0, o produto das raízes é −d, então d = 4. O polinômio é (x − 2)(x² − 2x − 2) = x³ − 4x² + 2x + 4.\n\n−4 é o produto das raízes, sem trocar o sinal. 2 e −2 usam só o produto (1 + √3)(1 − √3) = −2, esquecendo a raiz 2. E −8 calcula (1 + √3)(1 − √3) como 1 + 3 = 4, errando o sinal de (√3)².",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "O polinômio P(x) = x³ + ax² + bx + 4 é divisível por (x − 2)². Qual é o valor de a + b?",
    opcoes: [
      "3",
      "−6",
      "−3",
      "0",
      "−12",
    ],
    correta: 2,
    explicacao:
      "Ser divisível por (x − 2)² significa ter 2 como raiz de multiplicidade pelo menos 2: P(2) = 0 e P′(2) = 0. P(2) = 8 + 4a + 2b + 4 = 0 dá 2a + b = −6. Como P′(x) = 3x² + 2ax + b, P′(2) = 12 + 4a + b = 0 dá 4a + b = −12. Subtraindo, 2a = −6, a = −3 e b = 0. Então a + b = −3, e P(x) = x³ − 3x² + 4 = (x − 2)²(x + 1).\n\n3 erra o sinal. −6 é o valor de 2a + b, e não de a + b. 0 é só o valor de b. E −12 é 4a + b, a outra equação do sistema.",
  },
  {
    materia: "exatas-militar",
    tema: "Polinômios e relações de Girard",
    dificuldade: "dificil",
    enunciado:
      "Se r é uma raiz de x² − x − 1 = 0, então r⁵ pode ser escrito como ar + b, com a e b inteiros. Qual é o valor de a + b?",
    opcoes: [
      "8",
      "5",
      "3",
      "13",
      "21",
    ],
    correta: 0,
    explicacao:
      "De r² = r + 1, cada potência se reduz multiplicando por r e trocando r² por r + 1: r³ = r² + r = 2r + 1; r⁴ = 2r² + r = 3r + 2; r⁵ = 3r² + 2r = 5r + 3. Logo a = 5, b = 3 e a + b = 8. Os coeficientes são números de Fibonacci.\n\n5 é só o valor de a, e 3, só o de b. 13 avança uma potência a mais: r⁶ = 8r + 5, e 8 + 5 = 13. E 21 avança duas: r⁷ = 13r + 8.",
  },
];
