/* Derivada: definição e interpretação geométrica (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__derivada-definicao-e-interpretacao-geometrica.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__derivada-definicao-e-interpretacao-geometrica.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Pela definição, f'(3) é o limite de [f(3 + h) − f(3)]/h quando h tende a 0. Qual é o valor de f'(3) para f(x) = x²?",
    opcoes: [
      "6",
      "9",
      "3",
      "0",
      "2",
    ],
    correta: 0,
    explicacao:
      "Com f(x) = x²: [(3 + h)² − 9]/h = (9 + 6h + h² − 9)/h = (6h + h²)/h = 6 + h, que tende a 6 quando h tende a 0. Então f'(3) = 6: a reta tangente ao gráfico no ponto (3, 9) tem inclinação 6. Confere com a regra f'(x) = 2x.\n\n9 é o valor da função, f(3), e não da derivada. 3 é o próprio ponto. 0 toma o numerador nulo como resultado, sem simplificar o quociente. E 2 é o coeficiente da regra 2x, sem multiplicar por x = 3.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Qual é a inclinação da reta tangente ao gráfico de f(x) = x³ no ponto de abscissa x = 2?",
    opcoes: [
      "12",
      "8",
      "6",
      "4",
      "24",
    ],
    correta: 0,
    explicacao:
      "A inclinação da tangente é a derivada no ponto. Para f(x) = x³, f'(x) = 3x², e f'(2) = 3 · 4 = 12. Pela definição: [(2 + h)³ − 8]/h = 12 + 6h + h², que tende a 12 quando h tende a 0.\n\n8 é o valor da função, f(2). 6 usa 3x no lugar de 3x². 4 é x², sem o fator 3. E 24 dobra o resultado, como se a derivada fosse 6x². A derivada de uma potência xⁿ é n · xⁿ⁻¹.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Qual é a equação da reta tangente ao gráfico de y = x² no ponto (1, 1)?",
    opcoes: [
      "y = 2x − 1",
      "y = 2x + 1",
      "y = x",
      "y = 2x",
      "y = x² − 1",
    ],
    correta: 0,
    explicacao:
      "A inclinação é a derivada no ponto: y' = 2x, e em x = 1 vale 2. A reta com inclinação 2 que passa por (1, 1) é y − 1 = 2(x − 1), ou y = 2x − 1. Confere: em x = 1, 2 · 1 − 1 = 1, e a reta toca a parábola exatamente nesse ponto.\n\ny = 2x + 1 tem a inclinação certa, mas passa por (1, 3), fora do gráfico. y = x liga a origem a (1, 1): é uma secante, e não a tangente. y = 2x passa pela origem, e não por (1, 1). E y = x² − 1 nem é uma reta.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Qual é a interpretação geométrica da derivada f'(x₀) de uma função f num ponto x₀?",
    opcoes: [
      "A inclinação da reta tangente ao gráfico no ponto (x₀, f(x₀))",
      "O valor da função no ponto x₀",
      "A área sob o gráfico, de 0 até x₀",
      "A inclinação da reta que liga (0, f(0)) a (x₀, f(x₀))",
      "A abscissa em que o gráfico corta o eixo x",
    ],
    correta: 0,
    explicacao:
      "A derivada no ponto x₀ é o limite das inclinações das retas secantes que ligam (x₀, f(x₀)) a pontos cada vez mais próximos do gráfico; esse limite é a inclinação da reta tangente em (x₀, f(x₀)). Ela mede quão depressa f varia perto de x₀: é positiva quando f cresce, e negativa quando decresce.\n\nO valor da função em x₀ é f(x₀), e não a derivada. A área sob o gráfico está ligada à integral, e não à derivada. A reta que liga (0, f(0)) a (x₀, f(x₀)) é uma secante, cuja inclinação é a taxa média entre 0 e x₀. E o ponto em que o gráfico corta o eixo x é uma raiz de f.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Um objeto se move segundo s(t) = 5t², com s em metros e t em segundos. Qual é a sua velocidade instantânea em t = 3 s?",
    opcoes: [
      "30 m/s",
      "45 m/s",
      "15 m/s",
      "10 m/s",
      "90 m/s",
    ],
    correta: 0,
    explicacao:
      "A velocidade instantânea é a derivada da posição: v(t) = s'(t) = 10t, e v(3) = 30 m/s. Pela definição: [5(3 + h)² − 45]/h = 30 + 5h, que tende a 30.\n\n45 m/s é a posição, s(3) = 45 m, tomada como velocidade. 15 m/s é a velocidade média de 0 a 3 s, 45/3. 10 m/s é o coeficiente da derivada, sem multiplicar por t. E 90 m/s é o dobro da posição.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Qual é a derivada da função constante f(x) = 7, e o que ela indica sobre o gráfico?",
    opcoes: [
      "0: o gráfico é uma reta horizontal",
      "7: o valor da função",
      "1: toda reta tem inclinação 1",
      "0: o gráfico passa pela origem",
      "Não existe: funções constantes não têm derivada",
    ],
    correta: 0,
    explicacao:
      "O quociente de Newton é [f(x + h) − f(x)]/h = (7 − 7)/h = 0 para todo h, e o limite é 0: f'(x) = 0 em todos os pontos. O gráfico é a reta horizontal y = 7, e a tangente em qualquer ponto é a própria reta, de inclinação 0.\n\n7 é o valor da função, e não a sua taxa de variação. Nem toda reta tem inclinação 1: a horizontal tem inclinação 0. O gráfico de f não passa pela origem, porque f(0) = 7. E funções constantes têm derivada, sim: ela vale zero.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Para uma função f, sabe-se que f(2) = 5 e f(2,01) = 5,0402. Qual é a estimativa de f'(2) dada pelo quociente de Newton com h = 0,01?",
    opcoes: [
      "≈ 4",
      "≈ 5",
      "≈ 0,04",
      "≈ 2,5",
      "≈ 0,0402",
    ],
    correta: 0,
    explicacao:
      "O quociente de Newton é [f(2 + h) − f(2)]/h = (5,0402 − 5)/0,01 = 0,0402/0,01 = 4,02. A derivada é o limite desse quociente quando h tende a 0; com h pequeno, 4,02 é uma boa estimativa: f'(2) ≅ 4. Quanto menor o h, melhor a aproximação.\n\n5 é o valor da função, e não a taxa de variação. 0,04 e 0,0402 são a variação de f, sem dividir por h. E 2,5 divide f(2) pelo ponto, 5/2.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Em que ponto o gráfico de f(x) = x² − 4x + 1 tem reta tangente horizontal?",
    opcoes: [
      "x = 2",
      "x = −2",
      "x = 4",
      "x = 0",
      "x = 1",
    ],
    correta: 0,
    explicacao:
      "A tangente é horizontal onde a inclinação é zero, isto é, f'(x) = 0. Como f'(x) = 2x − 4, isso acontece em x = 2, o vértice da parábola, onde a função atinge o seu mínimo, f(2) = −3.\n\nx = −2 erra o sinal ao resolver 2x − 4 = 0. x = 4 esquece de dividir por 2. x = 0 é onde a tangente tem inclinação −4. E em x = 1 a inclinação é −2, e não zero.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Se f'(x) > 0 para todo x de um intervalo, o que se pode afirmar sobre f nesse intervalo?",
    opcoes: [
      "Crescente nesse intervalo",
      "Decrescente nesse intervalo",
      "Positiva nesse intervalo",
      "Constante nesse intervalo",
      "Côncava para cima nesse intervalo",
    ],
    correta: 0,
    explicacao:
      "A derivada positiva significa que todas as retas tangentes sobem da esquerda para a direita: a função cresce ao longo do intervalo. Pequenos acréscimos em x produzem acréscimos em f(x), porque f(x + h) ≅ f(x) + f'(x) · h com f'(x) > 0.\n\n“Decrescente” corresponde a f'(x) < 0. A função pode ser crescente e negativa: f(x) = x − 5, em (0, 2), tem f' = 1 > 0 e valores negativos. Constante exigiria f' = 0. E a concavidade depende da segunda derivada: ln x, em (1, 3), cresce e tem concavidade para baixo.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Usando a definição de derivada, qual é o valor de f'(1) para f(x) = 1/x?",
    opcoes: [
      "−1",
      "1",
      "0",
      "Não existe",
      "−2",
    ],
    correta: 0,
    explicacao:
      "O quociente de Newton é [1/(1 + h) − 1]/h = [1 − (1 + h)]/[h(1 + h)] = −h/[h(1 + h)] = −1/(1 + h), que tende a −1 quando h tende a 0. Então f'(1) = −1: a tangente em (1, 1) desce, com inclinação −1. Confere com a regra (1/x)' = −1/x².\n\n1 esquece o sinal: a função é decrescente para x > 0. 0 toma o numerador nulo como resultado. A derivada existe, porque o quociente tem limite. E −2 aplica a regra de x⁻¹ como se o expoente fosse −2.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "A reta tangente ao gráfico de uma função, num certo ponto, tem inclinação 2. Qual é a inclinação da reta normal ao gráfico nesse ponto?",
    opcoes: [
      "1/2",
      "−1/2",
      "−2",
      "2",
      "0",
    ],
    correta: 1,
    explicacao:
      "A reta normal é perpendicular à tangente no ponto de tangência. Duas retas perpendiculares (não verticais) têm inclinações cujo produto é −1: 2 · m = −1, e m = −1/2. A normal é a recíproca da tangente com o sinal trocado.\n\n1/2 inverte a inclinação, mas esquece o sinal: seria perpendicular só se o produto desse 1, o que não acontece. −2 troca só o sinal. 2 é a própria tangente. E 0 é a inclinação de uma reta horizontal, que só seria normal a uma tangente vertical.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "facil",
    enunciado:
      "Qual é a taxa de variação instantânea da função f(x) = x³ no ponto x = 1?",
    opcoes: [
      "1",
      "3",
      "7",
      "0",
      "6",
    ],
    correta: 1,
    explicacao:
      "A taxa de variação instantânea é a derivada no ponto: f'(x) = 3x², e f'(1) = 3. Ela é o limite das taxas médias em intervalos cada vez menores ao redor de 1: entre 1 e 1,01, por exemplo, a taxa média é cerca de 3,03.\n\n1 é o valor da função, f(1). 7 é a taxa média entre 1 e 2, (8 − 1)/1, que não é instantânea. 0 supõe tangente horizontal, o que só acontece em x = 0. E 6 é a segunda derivada, 6x, em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "O limite de [sen(π/2 + h) − 1]/h, quando h tende a 0, é a derivada de uma função num ponto. Qual é o seu valor?",
    opcoes: [
      "1",
      "0",
      "−1",
      "π/2",
      "Não existe",
    ],
    correta: 1,
    explicacao:
      "Como sen(π/2) = 1, o limite é exatamente a definição da derivada de sen x no ponto π/2. A derivada do seno é o cosseno, e cos(π/2) = 0. Geometricamente, π/2 é o ponto mais alto do gráfico do seno, onde a tangente é horizontal.\n\n1 é o valor do seno em π/2, e não a inclinação. −1 erra o sinal e o valor. π/2 é o ponto em que a derivada é calculada. E o limite existe: o seno é derivável em todos os pontos.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Qual é a equação da reta tangente ao gráfico de f(x) = √x no ponto de abscissa x = 4?",
    opcoes: [
      "y = x/4 + 2",
      "y = x/4 + 1",
      "y = x/2",
      "y = 4x − 14",
      "y = x/4 − 1",
    ],
    correta: 1,
    explicacao:
      "O ponto de tangência é (4, √4) = (4, 2). A derivada é f'(x) = 1/(2√x), e f'(4) = 1/(2 · 2) = 1/4. A tangente é y − 2 = (1/4)(x − 4), ou y = x/4 + 1. Confere: em x = 4, 4/4 + 1 = 2.\n\ny = x/4 + 2 usa a inclinação certa, mas passa por (0, 2) em vez de (4, 2). y = x/2 liga a origem ao ponto (4, 2): é uma secante. y = 4x − 14 usa como inclinação o inverso da derivada. E y = x/4 − 1 erra o sinal do coeficiente linear.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A função f(x) = |x| é derivável em x = 0?",
    opcoes: [
      "Sim, e a derivada em 0 vale 0",
      "Não: as derivadas laterais em 0 são −1 e 1",
      "Sim, e a derivada em 0 vale 1",
      "Não, porque |x| não é contínua em 0",
      "Sim, porque toda função contínua é derivável",
    ],
    correta: 1,
    explicacao:
      "O quociente de Newton em 0 é |h|/h: vale 1 para h > 0 e −1 para h < 0. As derivadas laterais são 1 e −1, diferentes, e por isso a derivada em 0 não existe. No gráfico, há um bico na origem: nenhuma reta tangente se ajusta aos dois lados.\n\n“Vale 0” supõe que a tangente no bico seja horizontal, uma média dos dois lados que não é tangente a nenhum deles. “Vale 1” olha só para a direita. |x| é contínua em 0; o problema é o bico, e não a continuidade. E nem toda função contínua é derivável: |x| é o exemplo clássico.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Em que ponto do gráfico de f(x) = x² − 3x a reta tangente é paralela à reta y = x + 5?",
    opcoes: [
      "(1, −2)",
      "(2, −2)",
      "(2, 1)",
      "(0, 0)",
      "(3, 0)",
    ],
    correta: 1,
    explicacao:
      "Retas paralelas têm a mesma inclinação. A reta y = x + 5 tem inclinação 1, e a tangente tem inclinação f'(x) = 2x − 3. Igualando: 2x − 3 = 1, x = 2. O ponto do gráfico é (2, f(2)) = (2, 4 − 6) = (2, −2).\n\n(1, −2) é o ponto em que f'(x) = −1, a inclinação da reta perpendicular à dada. (2, 1) usa x = 2, mas toma a inclinação 1 como ordenada. (0, 0) e (3, 0) são as raízes de f, onde as tangentes têm inclinações −3 e 3.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Uma partícula se move segundo s(t) = t³ − 6t² + 9t, com s em metros e t em segundos. Em que instantes a sua velocidade é zero?",
    opcoes: [
      "t = 0 e t = 3 s",
      "t = 1 s e t = 3 s",
      "t = 2 s",
      "Só em t = 3 s",
      "Só em t = 1 s",
    ],
    correta: 1,
    explicacao:
      "A velocidade é a derivada da posição: v(t) = 3t² − 12t + 9 = 3(t² − 4t + 3) = 3(t − 1)(t − 3). Ela se anula em t = 1 s e t = 3 s: nesses instantes, a partícula para e inverte o sentido do movimento.\n\nt = 0 e t = 3 s são zeros da posição, s(t) = t(t − 3)², e não da velocidade. t = 2 s é onde a velocidade atinge o seu valor mínimo, −3 m/s. E ficar com uma única das raízes esquece a outra solução da equação de segundo grau.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Pela definição de derivada, qual é o valor de f'(2) para f(x) = 3x² − x?",
    opcoes: [
      "10",
      "11",
      "12",
      "6",
      "5",
    ],
    correta: 1,
    explicacao:
      "O quociente de Newton é [f(2 + h) − f(2)]/h. Como f(2 + h) = 3(4 + 4h + h²) − 2 − h = 10 + 11h + 3h² e f(2) = 10, o quociente é (11h + 3h²)/h = 11 + 3h, que tende a 11. Pelas regras, f'(x) = 6x − 1, e f'(2) = 11.\n\n10 é o valor da função, f(2). 12 esquece a derivada do termo −x. 6 é a derivada de 3x² dividida por x, sem calcular em x = 2. E 5 usa 3x − 1 como derivada, esquecendo o fator 2 do expoente.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "O gráfico da exponencial y = eˣ corta o eixo y no ponto (0, 1). Que reta é tangente a ele nesse ponto?",
    opcoes: [
      "y = x",
      "y = x + 1",
      "y = ex",
      "y = 1",
      "y = 2x + 1",
    ],
    correta: 1,
    explicacao:
      "O gráfico corta o eixo y em x = 0, no ponto (0, e⁰) = (0, 1). A derivada de eˣ é o próprio eˣ, e em x = 0 vale 1. A tangente é y − 1 = 1 · (x − 0), ou y = x + 1. É a melhor aproximação linear da exponencial perto de 0: eˣ ≅ 1 + x.\n\ny = x tem a inclinação certa, mas passa pela origem, fora do gráfico. y = ex é a tangente que passa pela origem, e toca o gráfico em x = 1, e não em x = 0. y = 1 supõe tangente horizontal. E y = 2x + 1 dobra a inclinação.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A função f(x) = ∛x é derivável em x = 0?",
    opcoes: [
      "É derivável, e a derivada em 0 vale 0",
      "Não é derivável: a reta tangente em 0 é vertical",
      "É derivável, e a derivada em 0 vale 1/3",
      "Não é derivável, porque não é contínua em 0",
      "Não é derivável, porque o gráfico tem um bico em 0",
    ],
    correta: 1,
    explicacao:
      "O quociente de Newton em 0 é ∛h/h = h^(−2/3), que cresce sem limite quando h tende a 0, pelos dois lados, sempre positivo. A derivada não existe (é infinita): o gráfico, que passa suavemente pela origem, tem ali uma reta tangente vertical, o eixo y.\n\n“Vale 0” supõe tangente horizontal, o contrário do que acontece. “Vale 1/3” aplica a regra (1/3)x^(−2/3) sem notar que ela explode em x = 0. A função é contínua em 0: ∛x tende a 0. E não há bico: os dois lados sobem para +∞, e o gráfico é suave, só que vertical.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "No ponto (π, 0), o gráfico de y = sen x cruza o eixo x descendo. Qual é a reta tangente a ele nesse ponto?",
    opcoes: [
      "y = x − π",
      "y = −x",
      "y = −x + π",
      "y = 0",
      "y = x + π",
    ],
    correta: 2,
    explicacao:
      "O ponto de tangência é (π, sen π) = (π, 0). A derivada do seno é o cosseno, e cos π = −1. A tangente é y − 0 = −1 · (x − π), ou y = −x + π. Nesse ponto, o gráfico do seno desce, cruzando o eixo x.\n\ny = x − π usa inclinação +1, errando o sinal de cos π. y = −x tem a inclinação certa, mas passa pela origem, e não por (π, 0). y = 0 supõe tangente horizontal, o que acontece só nos picos e vales. E y = x + π erra o sinal da inclinação e o do termo independente.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Que ângulo a reta tangente ao gráfico de f(x) = x²/2, no ponto de abscissa x = 1, forma com o eixo x?",
    opcoes: [
      "30°",
      "60°",
      "45°",
      "90°",
      "1°",
    ],
    correta: 2,
    explicacao:
      "A inclinação da tangente é a tangente trigonométrica do ângulo que ela forma com o eixo x. Como f'(x) = x, em x = 1 a inclinação é 1, e o ângulo θ satisfaz tg θ = 1: θ = 45°.\n\n30° e 60° corresponderiam a inclinações √3/3 e √3. 90° seria uma tangente vertical, sem inclinação definida. E 1° toma a inclinação, 1, como se fosse o próprio ângulo em graus.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Uma função derivável tem f(2) = 3 e f'(2) = −1. Usando a reta tangente, qual é a estimativa de f(2,1)?",
    opcoes: [
      "≈ 3,1",
      "≈ 2",
      "≈ 2,9",
      "≈ 3",
      "≈ 0,1",
    ],
    correta: 2,
    explicacao:
      "Perto de 2, o gráfico fica próximo da reta tangente: f(x) ≅ f(2) + f'(2) · (x − 2). Com x = 2,1: f(2,1) ≅ 3 + (−1) · 0,1 = 2,9. A derivada negativa indica que a função está diminuindo em x = 2.\n\n3,1 soma o acréscimo, esquecendo o sinal da derivada. 2 usa o acréscimo inteiro de uma unidade, em vez de 0,1. 3 ignora a variação, repetindo f(2). E 0,1 é só o acréscimo em x.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Para uma função f, tem-se f(1,9) = 3,61 e f(2,1) = 4,41. Qual é a estimativa de f'(2) pela diferença simétrica, [f(2,1) − f(1,9)]/0,2?",
    opcoes: [
      "0,8",
      "8",
      "4",
      "2",
      "0,4",
    ],
    correta: 2,
    explicacao:
      "A diferença simétrica usa pontos igualmente afastados dos dois lados de 2: [f(2,1) − f(1,9)]/(2,1 − 1,9) = (4,41 − 3,61)/0,2 = 0,8/0,2 = 4. Costuma ser mais precisa que o quociente de um lado só, porque os erros dos dois lados se compensam. (Os valores dados são de x², e f'(2) = 4 exatamente.)\n\n0,8 é a variação de f, sem dividir pela de x. 8 divide por 0,1 em vez de 0,2, usando só metade do intervalo. 2 é o próprio ponto. E 0,4 divide 0,8 por 2, e não por 0,2.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A reta tangente ao gráfico de y = x² no ponto (2, 4) corta o eixo x em que ponto?",
    opcoes: [
      "x = 2",
      "x = 0",
      "x = 1",
      "x = −1",
      "x = 4",
    ],
    correta: 2,
    explicacao:
      "A inclinação da tangente em x = 2 é y' = 2x = 4, e a reta é y − 4 = 4(x − 2), ou y = 4x − 4. Ela corta o eixo x quando y = 0: 4x − 4 = 0, x = 1. Curiosamente, para a parábola y = x², a tangente em x = a sempre corta o eixo x em a/2.\n\nx = 2 é a abscissa do ponto de tangência. x = 0 é onde a parábola toca o eixo x, e não a tangente. x = −1 erra o sinal ao resolver 4x − 4 = 0. E x = 4 é a inclinação, tomada como abscissa.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Qual das funções a seguir não é derivável no ponto x = 1?",
    opcoes: [
      "f(x) = (x − 1)²",
      "f(x) = x³",
      "f(x) = |x − 1|",
      "f(x) = eˣ",
      "f(x) = sen x",
    ],
    correta: 2,
    explicacao:
      "Em x = 1, |x − 1| tem um bico: o quociente de Newton |h|/h vale 1 à direita e −1 à esquerda, e as derivadas laterais são diferentes. O gráfico é um V com o vértice em (1, 0), onde não há reta tangente.\n\n(x − 1)² é uma parábola suave, com derivada 0 em x = 1. x³, eˣ e sen x são deriváveis em todos os pontos, com derivadas 3, e e cos 1 em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A temperatura T de um ambiente, em °C, é uma função do tempo t, em horas, e T'(3) = −2 °C/h. O que esse dado informa?",
    opcoes: [
      "Que, às 3 h, a temperatura era de −2 °C",
      "Que, entre 0 h e 3 h, a temperatura caiu 2 °C",
      "Que, às 3 h, a temperatura estava caindo à razão de 2 °C por hora",
      "Que a temperatura cai 2 °C a cada 3 horas",
      "Que, às 3 h, a temperatura atingiu o seu valor mínimo",
    ],
    correta: 2,
    explicacao:
      "A derivada é a taxa de variação instantânea: T'(3) = −2 °C/h significa que, no instante t = 3 h, a temperatura está diminuindo, e a um ritmo de 2 °C por hora. Se esse ritmo se mantivesse por pouco tempo, em 0,1 h a temperatura cairia cerca de 0,2 °C.\n\n−2 °C seria o valor T(3), e não a taxa. A queda entre 0 h e 3 h é uma variação média num intervalo, que a derivada num instante não informa. “2 °C a cada 3 horas” confunde o instante t = 3 com a duração. E no mínimo a derivada seria zero, e não −2.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Em que pontos o gráfico de f(x) = x³ − 3x tem reta tangente horizontal?",
    opcoes: [
      "Só x = 0",
      "x = √3 e x = −√3",
      "x = 1 e x = −1",
      "Só x = 1",
      "Só x = 3",
    ],
    correta: 2,
    explicacao:
      "A tangente é horizontal onde f'(x) = 0. Como f'(x) = 3x² − 3 = 3(x² − 1), isso acontece em x = 1 e em x = −1. No gráfico, são um vale, em (1, −2), e um pico, em (−1, 2).\n\nx = 0 é onde f'(0) = −3, uma tangente inclinada. ±√3 são as raízes de f, e não de f'. “Só x = 1” esquece a raiz negativa de x² − 1. E x = 3 é o coeficiente, tomado como ponto.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Para f(x) = x², as retas secantes que ligam (1, f(1)) a (1 + h, f(1 + h)) têm inclinação 2 + h, para todo h ≠ 0. O que isso indica?",
    opcoes: [
      "Que a derivada de f em x = 1 vale 2 + h",
      "Que a derivada de f em x = 1 vale 3",
      "Que a derivada de f em x = 1 vale 2",
      "Que a derivada de f em x = 1 não existe",
      "Que a derivada de f em x = 1 vale 1",
    ],
    correta: 2,
    explicacao:
      "A derivada em x = 1 é o limite das inclinações das secantes quando h tende a 0. Como elas valem 2 + h, o limite é 2: a derivada de f em x = 1 vale 2, e essa é a inclinação da tangente em (1, 1). Com h = 0,1, a secante tem inclinação 2,1; com h = 0,01, 2,01.\n\n2 + h é a inclinação de cada secante, e não o seu limite. 3 é a inclinação da secante com h = 1, que liga (1, 1) a (2, 4). A derivada existe, porque as inclinações têm limite. E 1 é o valor da função, f(1).",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A função f vale x² para x ≤ 1 e 2x − 1 para x > 1. Ela é derivável em x = 1?",
    opcoes: [
      "Não: a função muda de expressão em x = 1",
      "Não: as derivadas laterais são 2 e 1",
      "Sim: as derivadas laterais em 1 valem 2",
      "Sim, e a derivada em 1 vale 1",
      "Não: f não é contínua em x = 1",
    ],
    correta: 2,
    explicacao:
      "Primeiro, f é contínua em 1: os dois trechos valem 1 ali. Depois, as derivadas laterais: à esquerda, a de x² é 2x, que vale 2 em x = 1; à direita, a de 2x − 1 é 2. Como são iguais, f é derivável em 1, com derivada 2: a reta y = 2x − 1 é justamente a tangente à parábola em (1, 1), e os dois trechos se emendam sem bico.\n\nMudar de expressão não impede a derivada, se a emenda for suave. As derivadas laterais são 2 e 2, e não 2 e 1. A derivada em 1 é 2, e não 1, que é o valor de f. E f é contínua em 1.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "No ponto (e, 1), a reta que tangencia o logaritmo natural tem uma propriedade curiosa. Qual é a sua equação?",
    opcoes: [
      "y = x/e + 1",
      "y = ex − 1",
      "y = x − e + 1",
      "y = x/e",
      "y = 1",
    ],
    correta: 3,
    explicacao:
      "O ponto de tangência é (e, ln e) = (e, 1). A derivada de ln x é 1/x, e em x = e vale 1/e. A tangente é y − 1 = (1/e)(x − e) = x/e − 1, ou seja, y = x/e. Ela passa pela origem: é a única tangente ao gráfico do logaritmo que faz isso.\n\ny = x/e + 1 usa a inclinação certa, mas não passa por (e, 1). y = ex − 1 inverte a inclinação. y = x − e + 1 usa inclinação 1, a da tangente em x = 1. E y = 1 supõe tangente horizontal.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A posição de um carro que freia é s(t) = 20t − t², com s em metros e t em segundos. Em que instante ele para?",
    opcoes: [
      "t = 20 s",
      "t = 0",
      "t = 5 s",
      "t = 10 s",
      "t = 100 s",
    ],
    correta: 3,
    explicacao:
      "O carro para quando a velocidade é zero. A velocidade é a derivada da posição: v(t) = 20 − 2t, que se anula em t = 10 s. Nesse instante, ele já percorreu s(10) = 200 − 100 = 100 m.\n\nt = 20 s é quando a posição volta a zero, s(20) = 0, o que nem faz sentido físico depois da parada. t = 0 é o início da frenagem, com velocidade de 20 m/s. t = 5 s esquece o fator 2 da derivada de t². E 100 é a distância percorrida, em metros, e não um instante.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Em que ponto do gráfico de y = x² a reta tangente tem inclinação 6?",
    opcoes: [
      "(6, 36)",
      "(3, 6)",
      "(9, 81)",
      "(3, 9)",
      "(√6, 6)",
    ],
    correta: 3,
    explicacao:
      "A inclinação da tangente em x é a derivada, y' = 2x. Para valer 6: 2x = 6, x = 3. O ponto do gráfico é (3, 3²) = (3, 9), e a tangente ali é y = 6x − 9.\n\n(6, 36) toma a inclinação como abscissa. (3, 6) acerta a abscissa, mas usa a inclinação como ordenada. (9, 81) resolve x = 6 + 3. E (√6, 6) é o ponto em que a ordenada, e não a inclinação, vale 6.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Qual é a derivada da função f(x) = x · |x| no ponto x = 0?",
    opcoes: [
      "Não existe, porque |x| não é derivável em 0",
      "1",
      "−1",
      "0",
      "2",
    ],
    correta: 3,
    explicacao:
      "Pela definição, o quociente de Newton em 0 é [h|h| − 0]/h = |h|, que tende a 0 quando h tende a 0, pelos dois lados. A derivada existe e vale 0. O fator x amortece o bico de |x|: o gráfico de x|x| é x² à direita e −x² à esquerda, e os dois ramos chegam à origem com tangente horizontal.\n\nO fato de |x| não ser derivável em 0 não impede que x|x| seja: o produto com x elimina o bico. 1 e −1 são as derivadas laterais de |x|, e não de x|x|. E 2 é a derivada de x² em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Usando a reta tangente ao gráfico de √x em x = 4, qual é a estimativa de √4,1?",
    opcoes: [
      "≈ 2,05",
      "≈ 2,1",
      "≈ 2,0025",
      "≈ 2,025",
      "≈ 2,25",
    ],
    correta: 3,
    explicacao:
      "A tangente em x = 4 é y = √4 + (1/(2√4))(x − 4) = 2 + (x − 4)/4. Em x = 4,1: 2 + 0,1/4 = 2,025. O valor exato é √4,1 ≅ 2,02485: a aproximação linear erra só na quinta casa decimal, porque 4,1 está muito perto de 4.\n\n2,05 usa a inclinação 1/2, esquecendo a raiz no denominador da derivada. 2,1 soma o acréscimo inteiro, como se a inclinação fosse 1. 2,0025 divide por 40 em vez de 4. E 2,25 soma 0,25, a inclinação, em vez do produto da inclinação pelo acréscimo.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A área de um círculo é A(r) = πr². Qual é a taxa de variação instantânea da área em relação ao raio quando r = 3?",
    opcoes: [
      "9π",
      "3π",
      "2π",
      "6π",
      "π",
    ],
    correta: 3,
    explicacao:
      "A taxa instantânea é a derivada: A'(r) = 2πr, e A'(3) = 6π. Curiosamente, 2πr é o perímetro do círculo: aumentar o raio em um pouquinho acrescenta uma faixa fina, de área aproximadamente igual ao perímetro vezes o acréscimo.\n\n9π é a área do círculo de raio 3, e não a taxa. 3π usa πr, esquecendo o 2 do expoente. 2π é a derivada sem multiplicar por r. E π é o coeficiente da área, e não a taxa.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Pela definição de derivada, qual é o valor da derivada de f(x) = √x no ponto x = 9?",
    opcoes: [
      "1/3",
      "3",
      "1/18",
      "1/6",
      "6",
    ],
    correta: 3,
    explicacao:
      "O quociente de Newton é [√(9 + h) − 3]/h. Multiplicando pelo conjugado: [(9 + h) − 9]/[h(√(9 + h) + 3)] = 1/(√(9 + h) + 3), que tende a 1/(3 + 3) = 1/6. Confere com a regra (√x)' = 1/(2√x), que em x = 9 vale 1/6.\n\n1/3 esquece o fator 2 no denominador, usando 1/√9. 3 é o valor da função, √9. 1/18 usa 1/(2 · 9), esquecendo a raiz. E 6 inverte o resultado.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "Em quais pontos do intervalo [0, 2π) o gráfico de y = sen x tem reta tangente horizontal?",
    opcoes: [
      "0, π e 2π",
      "Só π/2",
      "π e 2π",
      "π/2 e 3π/2",
      "π/4 e 5π/4",
    ],
    correta: 3,
    explicacao:
      "A tangente é horizontal onde a derivada se anula: (sen x)' = cos x = 0 em x = π/2 e em x = 3π/2, no intervalo dado. São o pico (π/2, 1) e o vale (3π/2, −1) da senoide.\n\n0, π e 2π são os zeros do seno, onde o gráfico cruza o eixo x com a maior inclinação, e não tangente horizontal. “Só π/2” esquece o vale. π e 2π também são zeros do seno. E π/4 e 5π/4 são os pontos em que o seno e o cosseno são iguais.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "O volume de água V(t) num tanque é medido em litros, e o tempo t, em minutos. Em que unidade se mede a derivada V'(t)?",
    opcoes: [
      "Litros",
      "Minutos por litro",
      "Litros por minuto ao quadrado",
      "Litros por minuto",
      "Litros multiplicados por minutos",
    ],
    correta: 3,
    explicacao:
      "A derivada é o limite de ΔV/Δt: uma variação de volume dividida por uma variação de tempo. A unidade é, portanto, litros por minuto (L/min): V'(t) informa quantos litros entram (ou saem, se for negativa) por minuto, no instante t. Em geral, a unidade da derivada é a da função dividida pela da variável.\n\nLitros é a unidade de V, e não da taxa. Minutos por litro inverte a razão. Litros por minuto ao quadrado é a unidade da segunda derivada, V''(t). E o produto de litros por minutos corresponderia a uma integral, e não a uma derivada.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "media",
    enunciado:
      "A reta y = 3x − 2 é tangente ao gráfico de uma função f no ponto de abscissa x = 1. O que se pode concluir sobre f nesse ponto?",
    opcoes: [
      "f(1) = 3 e a derivada em 1 vale 1",
      "f(1) = −2 e a derivada em 1 vale 3",
      "f(1) = 1 e a derivada em 1 vale −2",
      "f(1) = 1 e a derivada em 1 vale 3",
      "f(1) = 3 e a derivada em 1 vale −2",
    ],
    correta: 3,
    explicacao:
      "A reta tangente passa pelo ponto de tangência, e por isso f(1) é o valor da reta em x = 1: 3 · 1 − 2 = 1. E a inclinação da tangente é a derivada no ponto: 3. Então f(1) = 1, e a derivada de f em x = 1 vale 3.\n\n“f(1) = 3 e derivada 1” troca os papéis dos dois números. f(1) = −2 usa o coeficiente linear da reta, que é o seu valor em x = 0, e não em x = 1. E −2 não é inclinação nenhuma: é o termo independente.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "Quais retas tangentes ao gráfico de y = x² passam pelo ponto (1, −3), que fica fora da parábola?",
    opcoes: [
      "y = 6x − 9 e y = 2x − 5",
      "Só y = 2x − 5",
      "Só y = 6x − 9",
      "Nenhuma reta tangente passa por esse ponto",
      "y = 6x − 9 e y = −2x − 1",
    ],
    correta: 4,
    explicacao:
      "A tangente num ponto (x₀, x₀²) da parábola tem inclinação 2x₀: y = 2x₀ · x − x₀². Para passar por (1, −3): −3 = 2x₀ − x₀², ou x₀² − 2x₀ − 3 = 0, de raízes x₀ = 3 e x₀ = −1. As tangentes são y = 6x − 9 (tocando em x₀ = 3) e y = −2x − 1 (tocando em x₀ = −1). Confere: 6 · 1 − 9 = −3 e −2 · 1 − 1 = −3.\n\ny = 2x − 5 é a reta de inclinação 2 que passa por (1, −3), como se ela fosse tangente em x = 1, mas o ponto (1, −3) nem está na parábola. “Só y = 6x − 9” esquece a raiz negativa. E há tangentes, sim: por um ponto abaixo da parábola passam duas.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "A função f vale x² · sen(1/x) para x ≠ 0, e f(0) = 0. Ela é derivável em x = 0?",
    opcoes: [
      "Não, porque sen(1/x) oscila perto de 0",
      "Sim, e a derivada em 0 vale 1",
      "Não, porque f não é contínua em 0",
      "Não, porque a expressão 2x sen(1/x) − cos(1/x) não tem limite em 0",
      "Sim, e a derivada em 0 vale 0",
    ],
    correta: 4,
    explicacao:
      "Pela definição, o quociente de Newton em 0 é [h² sen(1/h) − 0]/h = h sen(1/h). Como |h sen(1/h)| ≤ |h|, ele tende a 0 pelo teorema do confronto: f é derivável em 0, e a derivada ali vale 0. A oscilação existe, mas o fator h² a amortece.\n\n“sen(1/x) oscila” esquece o amortecimento. 1 não tem apoio: o quociente tende a 0. f é contínua em 0, pelo confronto com ±x². E a expressão 2x sen(1/x) − cos(1/x) é a derivada para x ≠ 0; ela não tem limite em 0, mas isso só mostra que a derivada não é contínua em 0, e não que ela deixe de existir ali.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "Em que pontos do gráfico de y = x³ a reta tangente é perpendicular à reta y = −x/3 + 1?",
    opcoes: [
      "Só (1, 1)",
      "(3, 27) e (−3, −27)",
      "(1/3, 1/27) e (−1/3, −1/27)",
      "(0, 0)",
      "(1, 1) e (−1, −1)",
    ],
    correta: 4,
    explicacao:
      "A reta dada tem inclinação −1/3; uma perpendicular a ela tem inclinação 3, porque (−1/3) · 3 = −1. A tangente a y = x³ tem inclinação 3x²: 3x² = 3 dá x = 1 ou x = −1. Os pontos são (1, 1) e (−1, −1).\n\n“Só (1, 1)” esquece a raiz negativa de x² = 1. (3, 27) e (−3, −27) tomam a inclinação 3 como abscissa. (1/3, 1/27) e (−1/3, −1/27) usam o módulo da inclinação da própria reta dada, sem inverter. E em (0, 0) a tangente é horizontal.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "A função f vale ax² + b para x ≤ 1 e 1/x para x > 1. Para que valores das constantes a e b ela é derivável em x = 1?",
    opcoes: [
      "a = 1/2 e b = 1/2",
      "a = −1 e b = 2",
      "a = −1/2 e b = 1/2",
      "a = 1 e b = 0",
      "a = −1/2 e b = 3/2",
    ],
    correta: 4,
    explicacao:
      "Para ser derivável em 1, f precisa, antes, ser contínua ali: a + b = 1/1 = 1. Depois, as derivadas laterais precisam coincidir: à esquerda, a derivada de ax² + b é 2ax, que vale 2a em x = 1; à direita, a de 1/x é −1/x², que vale −1. Então 2a = −1, a = −1/2, e b = 1 − a = 3/2.\n\n“a = 1/2 e b = 1/2” erra o sinal da derivada de 1/x. “a = −1 e b = 2” esquece o fator 2 de 2ax. “a = −1/2 e b = 1/2” acerta a derivada, mas quebra a continuidade: f valeria 0 em x = 1, e não 1. E “a = 1 e b = 0” garante só a continuidade, com um bico em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "A reta tangente ao gráfico de y = 4 − x² no ponto de abscissa x = 1 forma, com os eixos coordenados, um triângulo. Qual é a área desse triângulo?",
    opcoes: [
      "5",
      "25/2",
      "4",
      "5/2",
      "25/4",
    ],
    correta: 4,
    explicacao:
      "No ponto x = 1, y = 3, e a inclinação é y' = −2x = −2. A tangente é y − 3 = −2(x − 1), ou y = −2x + 5. Ela corta o eixo y em (0, 5) e o eixo x em (5/2, 0). O triângulo retângulo formado tem catetos 5 e 5/2, e área (5 · 5/2)/2 = 25/4.\n\n5 e 5/2 são as medidas dos catetos, e não a área. 25/2 esquece a divisão por 2 na área do triângulo. E 4 é a ordenada do vértice da parábola, sem relação com a tangente em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "As curvas y = x² e y = √x se cruzam no ponto (1, 1). Qual é o ângulo agudo entre as suas retas tangentes nesse ponto?",
    opcoes: [
      "arctg(3/2)",
      "π/4",
      "arctg(4/3)",
      "π/2",
      "arctg(3/4)",
    ],
    correta: 4,
    explicacao:
      "As inclinações das tangentes em x = 1 são 2 (para x²) e 1/2 (para √x). O ângulo θ entre duas retas de inclinações m₁ e m₂ satisfaz tg θ = |(m₁ − m₂)/(1 + m₁m₂)| = |(2 − 1/2)/(1 + 1)| = (3/2)/2 = 3/4. O ângulo é arctg(3/4) ≅ 36,9°.\n\narctg(3/2) usa só a diferença das inclinações, sem dividir por 1 + m₁m₂. π/4 supõe que o ângulo seja de 45° por simetria. arctg(4/3) inverte a fração, dando o complemento do ângulo. E π/2 supõe tangentes perpendiculares, o que exigiria m₁m₂ = −1, e aqui o produto é 1.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "Qual é a inclinação da reta tangente ao gráfico de y = 2ˣ no ponto em que ele corta o eixo y?",
    opcoes: [
      "1",
      "2",
      "0",
      "log 2",
      "ln 2",
    ],
    correta: 4,
    explicacao:
      "O gráfico corta o eixo y em (0, 1). Pela definição, a inclinação é o limite de (2ʰ − 1)/h quando h tende a 0. Escrevendo 2ʰ = e^(h ln 2), o quociente vira ln 2 · (e^(h ln 2) − 1)/(h ln 2), que tende a ln 2 ≅ 0,693. Em geral, a derivada de uma exponencial de base b é bˣ · ln b.\n\n1 é a inclinação de eˣ em x = 0, e não a de 2ˣ. 2 é a base. 0 supõe tangente horizontal, mas a exponencial é sempre crescente. E log 2, na base 10, vale cerca de 0,301: o logaritmo que aparece é o natural.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "A reta normal ao gráfico de y = x² no ponto (1, 1) corta a parábola em outro ponto. Qual é esse ponto?",
    opcoes: [
      "(3/2, 9/4)",
      "(−1, 1)",
      "(−3, 9)",
      "(−1/2, 1/4)",
      "(−3/2, 9/4)",
    ],
    correta: 4,
    explicacao:
      "A tangente em (1, 1) tem inclinação 2, e a normal, inclinação −1/2: y − 1 = −(x − 1)/2, ou y = −x/2 + 3/2. Igualando a x²: 2x² + x − 3 = 0, de raízes x = 1 (o próprio ponto) e x = −3/2. O outro ponto é (−3/2, 9/4).\n\n(3/2, 9/4) erra o sinal da raiz. (−1, 1) é o simétrico de (1, 1) em relação ao eixo y, que não está na normal. (−3, 9) usa a inclinação −2, trocando só o sinal da tangente, sem inverter. E (−1/2, 1/4) usa a inclinação +1/2, invertendo sem trocar o sinal.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "O módulo dobra para cima a parte negativa da parábola x² − 4. No ponto (2, 0), a função f(x) = |x² − 4| tem derivada?",
    opcoes: [
      "Sim, e a derivada em 2 vale 4",
      "Sim, e a derivada em 2 vale 0",
      "Não, porque f não é contínua em 2",
      "Não: as derivadas laterais em 2 são 0 e 4",
      "Não: as derivadas laterais em 2 são −4 e 4",
    ],
    correta: 4,
    explicacao:
      "Perto de 2, x² − 4 troca de sinal: é negativo à esquerda (onde f = 4 − x²) e positivo à direita (onde f = x² − 4). As derivadas laterais em 2 são, à esquerda, −2x = −4, e, à direita, 2x = 4. Como são diferentes, f não é derivável em 2: o gráfico tem um bico no ponto (2, 0), onde a parábola foi dobrada para cima pelo módulo.\n\n“Vale 4” olha só para a direita. “Vale 0” supõe tangente horizontal no bico. f é contínua em 2, porque |x² − 4| tende a 0. E a derivada lateral à esquerda é −4, e não 0.",
  },
  {
    materia: "calculo",
    tema: "Derivada: definição e interpretação geométrica",
    dificuldade: "dificil",
    enunciado:
      "A aresta de um cubo passa de 2 cm para 2,1 cm. Usando a derivada do volume, qual é a estimativa do aumento do volume?",
    opcoes: [
      "1,261 cm³",
      "12 cm³",
      "0,12 cm³",
      "8 cm³",
      "1,2 cm³",
    ],
    correta: 4,
    explicacao:
      "O volume é V(L) = L³, com derivada 3L², que vale 12 cm³ por cm quando L = 2. A estimativa pela derivada é ΔV ≅ 12 · ΔL = 12 · 0,1 = 1,2 cm³. O aumento exato é 2,1³ − 2³ = 9,261 − 8 = 1,261 cm³: a estimativa é boa, porque o acréscimo é pequeno.\n\n1,261 cm³ é o aumento exato, e não a estimativa pela derivada. 12 cm³ é a taxa de variação, sem multiplicar pelo acréscimo. 0,12 cm³ multiplica por 0,01 em vez de 0,1. E 8 cm³ é o volume inicial do cubo.",
  },
];
