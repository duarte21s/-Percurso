/* Funções e revisão de pré-cálculo (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__funcoes-e-revisao-de-pre-calculo.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__funcoes-e-revisao-de-pre-calculo.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor de f(2) para a função f(x) = 2x² − 3x + 1?",
    opcoes: [
      "3",
      "15",
      "11",
      "9",
      "1",
    ],
    correta: 0,
    explicacao:
      "Basta substituir x por 2 em toda a expressão, respeitando a ordem das operações (primeiro a potência, depois as multiplicações): f(2) = 2 · 2² − 3 · 2 + 1 = 2 · 4 − 6 + 1 = 8 − 6 + 1 = 3.\n\n15 troca o sinal do termo do meio, somando 3 · 2 em vez de subtrair. 11 eleva ao quadrado o produto 2x, calculando (2 · 2)² = 16 em vez de 2 · 2². 9 esquece o termo −3x. E 1 é o valor de f(0), o termo independente.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual é o domínio da função f(x) = √(x − 3), no conjunto dos números reais?",
    opcoes: [
      "x ≥ 3",
      "x > 3",
      "x ≥ −3",
      "x ≤ 3",
      "Todos os reais",
    ],
    correta: 0,
    explicacao:
      "A raiz quadrada só está definida, nos reais, para radicandos não negativos: x − 3 ≥ 0, isto é, x ≥ 3. Em x = 3, a raiz vale √0 = 0, que é um número real, e por isso o 3 entra no domínio.\n\n“x > 3” exclui o 3, como se a raiz de zero não existisse. “x ≥ −3” erra o sinal ao isolar x. “x ≤ 3” inverte a desigualdade. E “todos os reais” esquece que a raiz de número negativo não é real: f(0) = √(−3), por exemplo, não existe.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Com f(x) = x + 2 e g(x) = x², qual é a expressão de (f ∘ g)(x) = f(g(x))?",
    opcoes: [
      "x² + 2",
      "(x + 2)²",
      "x³ + 2x²",
      "x² + x + 2",
      "x + 4",
    ],
    correta: 0,
    explicacao:
      "Na composta f ∘ g, primeiro se aplica g e depois f ao resultado: f(g(x)) = f(x²) = x² + 2. A ordem importa: g(f(x)) = g(x + 2) = (x + 2)², que é outra função. Para conferir em x = 1: g(1) = 1 e f(1) = 3, enquanto (x + 2)² daria 9.\n\n(x + 2)² é a composta na ordem inversa, g ∘ f. x³ + 2x² é o produto f(x) · g(x). x² + x + 2 é a soma f(x) + g(x). E x + 4 é f(f(x)), aplicando f duas vezes.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual é a função inversa de f(x) = 2x + 6?",
    opcoes: [
      "(x − 6)/2",
      "(x + 6)/2",
      "x/2 − 6",
      "1/(2x + 6)",
      "2x − 6",
    ],
    correta: 0,
    explicacao:
      "Para achar a inversa, escreve-se y = 2x + 6 e isola-se x: 2x = y − 6, x = (y − 6)/2. Trocando os nomes das variáveis, f⁻¹(x) = (x − 6)/2. Confere: f(f⁻¹(x)) = 2 · (x − 6)/2 + 6 = x. A inversa desfaz o que a função faz, na ordem contrária: f multiplica por 2 e soma 6; a inversa subtrai 6 e divide por 2.\n\n(x + 6)/2 erra o sinal ao passar o 6 para o outro lado. x/2 − 6 desfaz as operações na ordem errada. 1/(2x + 6) confunde a inversa com o inverso multiplicativo, 1/f(x). E 2x − 6 só troca o sinal do termo independente.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual das funções a seguir é par, isto é, satisfaz f(−x) = f(x) para todo x real?",
    opcoes: [
      "x⁴ + x²",
      "x³ + x",
      "x² + x",
      "eˣ",
      "x + 1",
    ],
    correta: 0,
    explicacao:
      "Em x⁴ + x², todos os expoentes são pares: trocar x por −x não muda nada, porque (−x)⁴ = x⁴ e (−x)² = x². O gráfico é simétrico em relação ao eixo y.\n\nx³ + x é ímpar: f(−x) = −f(x), e o gráfico é simétrico em relação à origem. x² + x mistura um termo par e um ímpar, e não é par nem ímpar (f(−1) = 0, f(1) = 2). eˣ não é par: e⁻¹ ≠ e. E x + 1 também não: f(−1) = 0, f(1) = 2.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual é a inclinação (coeficiente angular) da reta que passa pelos pontos (1, 2) e (3, 8)?",
    opcoes: [
      "3",
      "1/3",
      "6",
      "5",
      "2",
    ],
    correta: 0,
    explicacao:
      "A inclinação é a razão entre a variação de y e a variação de x: m = (8 − 2)/(3 − 1) = 6/2 = 3. A cada unidade que x avança, y sobe 3. A equação da reta é y − 2 = 3(x − 1), ou y = 3x − 1, e os dois pontos dados satisfazem essa equação.\n\n1/3 inverte a razão, Δx/Δy. 6 é só a variação de y, sem dividir por Δx. 5 soma os valores de y em vez de subtrair, (8 + 2)/2. E 2 é a variação de x.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor mínimo da função f(x) = x² − 6x + 5?",
    opcoes: [
      "−4",
      "3",
      "5",
      "−9",
      "4",
    ],
    correta: 0,
    explicacao:
      "A parábola tem concavidade para cima (o coeficiente de x² é positivo), e o mínimo está no vértice, em x = −b/(2a) = 6/2 = 3. O valor mínimo é f(3) = 9 − 18 + 5 = −4. Completando o quadrado, f(x) = (x − 3)² − 4, o que mostra o mesmo resultado.\n\n3 é a abscissa do vértice, onde o mínimo acontece, e não o valor mínimo. 5 é f(0). −9 é −b²/(4a), sem somar o termo independente. E 4 erra o sinal.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual é a solução da equação 2^(x + 1) = 16?",
    opcoes: [
      "x = 3",
      "x = 4",
      "x = 7",
      "x = 8",
      "x = 15",
    ],
    correta: 0,
    explicacao:
      "Como 16 = 2⁴, a equação fica 2^(x + 1) = 2⁴ e, igualando os expoentes, x + 1 = 4, ou x = 3. Confere: 2^(3 + 1) = 2⁴ = 16. Esse é o caminho sempre que os dois lados podem ser escritos como potências da mesma base.\n\nx = 4 iguala x ao expoente de 16, esquecendo o +1. x = 7 resolve x + 1 = 16/2. x = 8 divide 16 por 2 e toma o resultado como x. E x = 15 subtrai 1 de 16, tratando a potência como se fosse soma.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Usando os valores notáveis de seno e cosseno, qual é o valor de sen(π/6) + cos(π/3)?",
    opcoes: [
      "1",
      "√3",
      "1/2",
      "(1 + √3)/2",
      "0",
    ],
    correta: 0,
    explicacao:
      "Os ângulos π/6 e π/3 são 30° e 60°. sen 30° = 1/2 e cos 60° = 1/2, e a soma é 1. Os dois valores são iguais porque 30° e 60° são complementares: o seno de um é o cosseno do outro.\n\n√3 troca os dois valores, usando sen 60° e cos 30°, ambos √3/2. (1 + √3)/2 troca só um deles. 1/2 conta só uma das parcelas. E 0 supõe que seno e cosseno se anulem.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Qual é o conjunto imagem da função f(x) = x² + 1, definida em todos os reais?",
    opcoes: [
      "[1, +∞)",
      "(1, +∞)",
      "ℝ",
      "[0, +∞)",
      "(−∞, 1]",
    ],
    correta: 0,
    explicacao:
      "Como x² ≥ 0 para todo x, temos x² + 1 ≥ 1, com igualdade em x = 0. E x² + 1 assume qualquer valor maior que 1: para y ≥ 1, basta tomar x = √(y − 1). A imagem é, portanto, [1, +∞).\n\n(1, +∞) exclui o 1, que é atingido em x = 0. ℝ ignora que o quadrado nunca é negativo. [0, +∞) é a imagem de x², sem o deslocamento de 1 unidade para cima. E (−∞, 1] inverte o sentido, como se a parábola tivesse concavidade para baixo.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "A função f é definida por f(x) = x² para x < 2 e por f(x) = 2x + 3 para x ≥ 2. Qual é o valor de f(2) + f(1)?",
    opcoes: [
      "5",
      "8",
      "12",
      "9",
      "7",
    ],
    correta: 1,
    explicacao:
      "Cada valor usa a expressão do intervalo a que pertence. Como 2 ≥ 2, f(2) = 2 · 2 + 3 = 7. Como 1 < 2, f(1) = 1² = 1. A soma é 7 + 1 = 8. O ponto x = 2 pertence ao segundo trecho por causa do sinal ≥, e é esse detalhe que decide a questão.\n\n5 usa x² para os dois valores, 4 + 1. 12 usa 2x + 3 para os dois, 7 + 5. 9 troca as expressões, com f(2) = 4 e f(1) = 5. E 7 é só o valor de f(2).",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "facil",
    enunciado:
      "Em relação ao gráfico de y = x², como está deslocado o gráfico de y = (x − 2)² + 3?",
    opcoes: [
      "2 unidades para a esquerda e 3 para cima",
      "2 unidades para a direita e 3 para cima",
      "2 unidades para a direita e 3 para baixo",
      "3 unidades para a direita e 2 para cima",
      "2 unidades para a esquerda e 3 para baixo",
    ],
    correta: 1,
    explicacao:
      "Trocar x por x − 2 desloca o gráfico 2 unidades para a direita: o vértice, que estava em x = 0, passa a x = 2, onde x − 2 = 0. Somar 3 à função desloca o gráfico 3 unidades para cima. O novo vértice é (2, 3).\n\n“Para a esquerda” erra o sentido do deslocamento horizontal, que é o contrário do sinal que aparece dentro do parêntese. “3 para baixo” erra o sentido do vertical. “3 para a direita e 2 para cima” troca os papéis dos dois números. E “esquerda e para baixo” erra os dois sentidos.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é o domínio da função f(x) = ln(x² − 4), no conjunto dos números reais?",
    opcoes: [
      "x > 2",
      "x < −2 ou x > 2",
      "−2 < x < 2",
      "x ≠ ±2",
      "x ≥ 2",
    ],
    correta: 1,
    explicacao:
      "O logaritmo só está definido para argumentos positivos: x² − 4 > 0, isto é, x² > 4, o que vale para x > 2 ou x < −2. Os dois lados entram porque o quadrado de um número negativo também é positivo: f(−3) = ln 5 existe.\n\n“x > 2” esquece a parte negativa. “−2 < x < 2” é justamente onde x² − 4 é negativo, e o logaritmo não existe. “x ≠ ±2” só exclui os pontos em que o argumento se anula, esquecendo que ele também não pode ser negativo. E “x ≥ 2” inclui o 2, em que o argumento é zero, e esquece os negativos.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Para quais valores reais de x a expressão (x + 1)/√(3 − x) está definida?",
    opcoes: [
      "x ≤ 3",
      "x < 3",
      "x > 3",
      "x ≠ 3",
      "x ≥ −1 e x < 3",
    ],
    correta: 1,
    explicacao:
      "Há duas exigências: o radicando não pode ser negativo, 3 − x ≥ 0, e o denominador não pode ser zero, √(3 − x) ≠ 0. Juntas, dão 3 − x > 0, isto é, x < 3. O numerador, x + 1, não impõe restrição nenhuma: ele pode ser negativo ou nulo.\n\n“x ≤ 3” inclui o 3, que zera o denominador. “x > 3” inverte a desigualdade. “x ≠ 3” esquece que o radicando não pode ser negativo. E “x ≥ −1 e x < 3” exige, sem motivo, que o numerador seja não negativo.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é a função inversa de f(x) = (2x + 1)/(x − 3), definida para x ≠ 3?",
    opcoes: [
      "(x − 3)/(2x + 1)",
      "(3x + 1)/(x − 2)",
      "(3x − 1)/(x + 2)",
      "(x + 1)/(2x − 3)",
      "(2x − 1)/(x + 3)",
    ],
    correta: 1,
    explicacao:
      "Escrevendo y = (2x + 1)/(x − 3) e isolando x: y(x − 3) = 2x + 1, yx − 3y = 2x + 1, x(y − 2) = 3y + 1, e x = (3y + 1)/(y − 2). Trocando as variáveis, f⁻¹(x) = (3x + 1)/(x − 2), definida para x ≠ 2. Confere em x = 4: f(4) = 9, e f⁻¹(9) = 28/7 = 4.\n\n(x − 3)/(2x + 1) é o inverso multiplicativo, 1/f(x). (3x − 1)/(x + 2) erra os sinais ao isolar x. (x + 1)/(2x − 3) troca os coeficientes de lugar sem resolver a equação. E (2x − 1)/(x + 3) só troca os sinais dos termos independentes.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Com f(x) = 2x − 1 e g(x) = x² + 1, qual é o valor de (g ∘ f)(2)?",
    opcoes: [
      "9",
      "10",
      "15",
      "8",
      "5",
    ],
    correta: 1,
    explicacao:
      "Na composta g ∘ f, calcula-se primeiro f(2) = 2 · 2 − 1 = 3, e depois g(3) = 3² + 1 = 10. A função de dentro é aplicada primeiro, e o seu resultado é a entrada da de fora. Em geral, (g ∘ f)(x) = (2x − 1)² + 1, que em x = 2 dá 3² + 1 = 10.\n\n9 é a composta na outra ordem, f(g(2)) = f(5). 15 é o produto f(2) · g(2) = 3 · 5. 8 é a soma f(2) + g(2). E 5 é só g(2), sem aplicar f antes.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Quais são as soluções reais da equação 4ˣ − 3 · 2ˣ − 4 = 0?",
    opcoes: [
      "x = 4",
      "x = 2",
      "x = 2 ou x = −1",
      "x = −1",
      "Não há solução real",
    ],
    correta: 1,
    explicacao:
      "Com y = 2ˣ, e 4ˣ = (2ˣ)² = y², a equação fica y² − 3y − 4 = 0, de raízes y = 4 e y = −1. Voltando a x: 2ˣ = 4 dá x = 2; 2ˣ = −1 não tem solução, porque uma potência de base positiva nunca é negativa. A única solução é x = 2.\n\nx = 4 toma a raiz y = 4 como se fosse o próprio x. “x = 2 ou x = −1” aceita a raiz negativa de y como se fosse um valor de x. x = −1 fica só com essa raiz. E há, sim, solução: a que vem de y = 4.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é a solução da equação log₂ x + log₂(x − 2) = 3, nos números reais?",
    opcoes: [
      "x = 4 ou x = −2",
      "x = 4",
      "x = −2",
      "x = 5",
      "x = 1 + √7",
    ],
    correta: 1,
    explicacao:
      "Pela propriedade do logaritmo do produto, log₂[x(x − 2)] = 3, e então x(x − 2) = 2³ = 8, ou x² − 2x − 8 = 0, de raízes 4 e −2. O domínio exige x > 0 e x − 2 > 0, isto é, x > 2: só x = 4 serve. Confere: log₂ 4 + log₂ 2 = 2 + 1 = 3.\n\n“x = 4 ou x = −2” esquece de verificar o domínio: log₂(−2) não existe. x = −2 fica só com a raiz inválida. x = 5 transforma a soma de logaritmos no logaritmo da soma, log₂(2x − 2) = 3. E 1 + √7 usa 2 · 3 = 6 no lugar de 2³ = 8.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Quais são as soluções da equação 2 sen x − 1 = 0 no intervalo [0, 2π)?",
    opcoes: [
      "π/6",
      "π/6 e 5π/6",
      "π/3 e 2π/3",
      "π/6 e 7π/6",
      "π/6 e 11π/6",
    ],
    correta: 1,
    explicacao:
      "A equação dá sen x = 1/2. O seno é positivo no 1º e no 2º quadrantes, e vale 1/2 em x = π/6 (30°) e no seu suplementar, x = π − π/6 = 5π/6 (150°). No intervalo [0, 2π), são as duas únicas soluções.\n\n“Só π/6” esquece a solução do 2º quadrante. π/3 e 2π/3 são as soluções de sen x = √3/2. 7π/6 está no 3º quadrante, onde o seno é negativo: sen(7π/6) = −1/2. E 11π/6 está no 4º quadrante, onde o seno também é negativo.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é o período (o menor período positivo) da função f(x) = 3 sen(2x)?",
    opcoes: [
      "2π",
      "π",
      "π/2",
      "3π",
      "4π",
    ],
    correta: 1,
    explicacao:
      "O seno completa um ciclo quando o argumento varia 2π. Com argumento 2x, basta x variar π para 2x variar 2π: o período é 2π/2 = π. O coeficiente 3 muda a amplitude (o gráfico oscila entre −3 e 3), mas não o período.\n\n2π é o período de sen x, sem considerar o fator 2. π/2 divide o período por 4 em vez de 2. 3π multiplica pela amplitude, que não interfere no período. E 4π multiplica por 2 em vez de dividir.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é o conjunto imagem da função f(x) = 3 − 2 sen x, definida em todos os reais?",
    opcoes: [
      "[−1, 1]",
      "[3, 5]",
      "[1, 5]",
      "[1, 3]",
      "[−5, −1]",
    ],
    correta: 2,
    explicacao:
      "Como −1 ≤ sen x ≤ 1, multiplicando por −2 (o que inverte as desigualdades): −2 ≤ −2 sen x ≤ 2. Somando 3: 1 ≤ 3 − 2 sen x ≤ 5. O mínimo, 1, ocorre quando sen x = 1, e o máximo, 5, quando sen x = −1; todos os valores intermediários são atingidos.\n\n[−1, 1] é a imagem do próprio seno. [3, 5] considera só os valores negativos do seno. [1, 3] considera só os positivos. E [−5, −1] erra os sinais, como se a função fosse −3 − 2 sen x.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Como se classifica, quanto à paridade, a função f(x) = x³ − x, definida em todos os reais?",
    opcoes: [
      "Par",
      "Nem par nem ímpar",
      "Ímpar",
      "Par e ímpar ao mesmo tempo",
      "Par para x > 0 e ímpar para x < 0",
    ],
    correta: 2,
    explicacao:
      "Calculando f(−x) = (−x)³ − (−x) = −x³ + x = −(x³ − x) = −f(x). Como f(−x) = −f(x) para todo x, a função é ímpar, e o seu gráfico é simétrico em relação à origem. É o que acontece com todo polinômio que só tem potências ímpares de x.\n\nPar exigiria f(−x) = f(x), o que falha, por exemplo, em x = 2: f(2) = 6 e f(−2) = −6. “Nem par nem ímpar” ignora a simetria que existe. Só a função nula é par e ímpar ao mesmo tempo. E a paridade é uma propriedade do domínio inteiro, e não de cada trecho.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é a função inversa de f(x) = 3 · 2ˣ, cujo conjunto imagem é o dos reais positivos?",
    opcoes: [
      "log₃(x/2)",
      "3 log₂ x",
      "log₂(x/3)",
      "log₂ x − 3",
      "2^(x/3)",
    ],
    correta: 2,
    explicacao:
      "Escrevendo y = 3 · 2ˣ: 2ˣ = y/3 e, aplicando o logaritmo na base 2, x = log₂(y/3). Trocando as variáveis, f⁻¹(x) = log₂(x/3), definida para x > 0, que é a imagem de f. Confere: f(log₂(x/3)) = 3 · (x/3) = x.\n\nlog₃(x/2) troca os papéis do 3 e do 2. 3 log₂ x trata o 3 como fator do logaritmo. log₂ x − 3 subtrai o 3 em vez de dividir por ele. E 2^(x/3) ainda é uma exponencial, e não desfaz a exponencial dada.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é o conjunto solução da inequação (x − 1)/(x + 2) ≤ 0, nos números reais?",
    opcoes: [
      "−2 ≤ x ≤ 1",
      "x ≤ 1",
      "−2 < x ≤ 1",
      "x < −2 ou x ≥ 1",
      "x ≠ −2",
    ],
    correta: 2,
    explicacao:
      "O quociente é negativo quando numerador e denominador têm sinais opostos, e zero quando o numerador se anula. Os pontos críticos são x = 1 (numerador zero) e x = −2 (denominador zero). Para x < −2, os dois fatores são negativos, e o quociente é positivo; entre −2 e 1, ele é negativo; acima de 1, positivo. A solução é −2 < x ≤ 1: inclui o 1, em que o quociente vale 0, e exclui o −2, em que ele não existe.\n\n“−2 ≤ x ≤ 1” inclui o −2, que zera o denominador. “x ≤ 1” esquece o sinal do denominador, como se ele fosse sempre positivo. “x < −2 ou x ≥ 1” é onde o quociente é positivo ou nulo, a desigualdade contrária. E “x ≠ −2” só exclui o ponto proibido, sem estudar o sinal.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Em relação ao gráfico de y = f(x), como se obtém o gráfico de y = −f(x − 1) + 2?",
    opcoes: [
      "Reflexão no eixo y, 1 unidade para a direita e 2 para cima",
      "Reflexão no eixo x, 1 unidade para a esquerda e 2 para cima",
      "Reflexão no eixo x, 1 unidade para a direita e 2 para cima",
      "Reflexão no eixo x, 1 unidade para a direita e 2 para baixo",
      "Sem reflexão, 1 unidade para a direita e 2 para cima",
    ],
    correta: 2,
    explicacao:
      "Lendo de dentro para fora: trocar x por x − 1 desloca o gráfico 1 unidade para a direita; o sinal de menos na frente de f reflete o gráfico no eixo x (os valores de y trocam de sinal); e somar 2 o desloca 2 unidades para cima. Com f(x) = x², por exemplo, a parábola de vértice (0, 0) voltada para cima vira −(x − 1)² + 2, com vértice (1, 2) e voltada para baixo.\n\nA reflexão no eixo y viria de trocar x por −x, dentro da função. “Para a esquerda” erra o sentido do deslocamento horizontal. “2 para baixo” erra o sentido do vertical. E o sinal de menos na frente de f produz, sim, uma reflexão.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem perímetro 20. Se x é a medida de um dos seus lados, qual é a expressão da área do retângulo em função de x?",
    opcoes: [
      "A(x) = 20x − x²",
      "A(x) = x² − 10x",
      "A(x) = 10x − x²",
      "A(x) = 10 − x",
      "A(x) = 20 − 2x",
    ],
    correta: 2,
    explicacao:
      "Com perímetro 20, dois lados vizinhos somam metade disso: x + y = 10, e o outro lado mede y = 10 − x. A área é o produto dos lados: A(x) = x(10 − x) = 10x − x², válida para 0 < x < 10. Ela é máxima em x = 5, quando o retângulo é um quadrado.\n\n20x − x² usa o perímetro inteiro como soma de dois lados vizinhos. x² − 10x troca o sinal da expressão, e daria áreas negativas. 10 − x é a medida do outro lado, e não a área. E 20 − 2x é o dobro do outro lado.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Quais são as soluções reais da equação e^(2x) − 5eˣ + 6 = 0?",
    opcoes: [
      "2 e 3",
      "ln 5 e ln 6",
      "ln 2 e ln 3",
      "ln 6",
      "e² e e³",
    ],
    correta: 2,
    explicacao:
      "Com y = eˣ, e e^(2x) = y², a equação fica y² − 5y + 6 = 0, de raízes y = 2 e y = 3. Como eˣ = 2 dá x = ln 2, e eˣ = 3 dá x = ln 3, as soluções são ln 2 ≅ 0,69 e ln 3 ≅ 1,10. As duas raízes de y são positivas, e por isso as duas servem.\n\n2 e 3 são os valores de eˣ, e não de x. ln 5 e ln 6 aplicam o logaritmo aos coeficientes da equação. ln 6 aplica o logaritmo ao produto das raízes. E e² e e³ exponenciam as raízes em vez de aplicar o logaritmo.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "A que expressão é igual (1 − cos²x)/sen x, para os valores de x em que sen x ≠ 0?",
    opcoes: [
      "cos x",
      "1",
      "sen x",
      "tg x",
      "sen²x",
    ],
    correta: 2,
    explicacao:
      "Pela identidade fundamental, sen²x + cos²x = 1, e então 1 − cos²x = sen²x. A expressão fica sen²x/sen x = sen x, sempre que sen x ≠ 0 (onde ela nem está definida). A identidade fundamental é o ponto de partida de quase todas as simplificações trigonométricas.\n\ncos x cancela o termo errado. 1 supõe que o numerador e o denominador sejam iguais. tg x divide por cos x num passo que não existe. E sen²x esquece de simplificar pelo sen x do denominador.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Uma população de bactérias cresce segundo P(t) = 500 · 2^(t/3), com t em horas. Em quanto tempo ela chega a 4.000 bactérias?",
    opcoes: [
      "8 horas",
      "24 horas",
      "9 horas",
      "7 horas",
      "3 horas",
    ],
    correta: 2,
    explicacao:
      "É preciso que 500 · 2^(t/3) = 4.000, isto é, 2^(t/3) = 8 = 2³. Igualando os expoentes, t/3 = 3, e t = 9 horas. A população dobra a cada 3 horas: 500, 1.000, 2.000, 4.000, em três duplicações.\n\n8 horas toma o fator de crescimento, 8, como tempo. 24 horas multiplica esse fator por 3, em vez de usar o expoente. 7 horas subtrai 1 de 8, tratando o crescimento como aditivo. E 3 horas é o tempo de uma única duplicação.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Com log 2 ≅ 0,30 e log 3 ≅ 0,48, qual é o valor aproximado de log 12?",
    opcoes: [
      "0,78",
      "1,44",
      "1,08",
      "0,288",
      "0,96",
    ],
    correta: 2,
    explicacao:
      "Como 12 = 2² · 3, as propriedades do logaritmo dão log 12 = 2 · log 2 + log 3 ≅ 2 · 0,30 + 0,48 = 1,08. Confere com a ordem de grandeza: 12 está entre 10 e 100, e o seu logaritmo decimal está entre 1 e 2.\n\n0,78 é log 2 + log 3 = log 6. 1,44 é 3 · log 3 = log 27. 0,288 multiplica os logaritmos, como se log(a · b) fosse log a · log b. E 0,96 é 2 · log 3 = log 9.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é o valor de arcsen(1/2) + arccos(1/2), com os arcos tomados nos seus intervalos principais?",
    opcoes: [
      "π/3",
      "7π/6",
      "2π/3",
      "π/2",
      "π/6",
    ],
    correta: 3,
    explicacao:
      "arcsen(1/2) é o arco de [−π/2, π/2] cujo seno é 1/2: π/6. arccos(1/2) é o arco de [0, π] cujo cosseno é 1/2: π/3. A soma é π/6 + π/3 = π/2. Na verdade, arcsen x + arccos x = π/2 para todo x entre −1 e 1, porque os dois arcos são complementares.\n\nπ/3 e π/6 são as parcelas isoladas. 7π/6 usa 5π/6 como arco-seno, um arco com seno 1/2, mas fora do intervalo principal. E 2π/3 troca o arco-seno pelo arco-cosseno, somando π/3 com π/3.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Quais são as raízes reais do polinômio p(x) = x³ − 6x² + 11x − 6?",
    opcoes: [
      "−1, −2 e −3",
      "1, 2 e −3",
      "2, 3 e 6",
      "1, 2 e 3",
      "1, 3 e 6",
    ],
    correta: 3,
    explicacao:
      "A soma dos coeficientes é 1 − 6 + 11 − 6 = 0, e então x = 1 é raiz. Dividindo p(x) por (x − 1), sobra x² − 5x + 6 = (x − 2)(x − 3). As raízes são 1, 2 e 3; confere pelas relações de Girard: a soma é 6 e o produto é 6.\n\n−1, −2 e −3 trocam os sinais, como se o polinômio fosse (x + 1)(x + 2)(x + 3). “1, 2 e −3” erra o sinal de uma raiz. “2, 3 e 6” e “1, 3 e 6” incluem o 6, que é a soma (e também o produto) das raízes, e não uma delas: p(6) = 60.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "A função f(x) = x² − 4x não é injetora em todos os reais. Em qual dos domínios a seguir ela passa a ter inversa?",
    opcoes: [
      "x ≥ 0",
      "Todos os reais",
      "x ≥ −2",
      "x ≥ 2",
      "x ≤ 4",
    ],
    correta: 3,
    explicacao:
      "O gráfico é uma parábola com vértice em x = −b/(2a) = 2: ela decresce para x < 2 e cresce para x > 2. Restrita a x ≥ 2, é sempre crescente, e cada valor de y vem de um único x: passa a ser injetora e tem inversa, f⁻¹(x) = 2 + √(x + 4).\n\nx ≥ 0 ainda contém o vértice no interior: f(1) = f(3) = −3. “Todos os reais” contém os dois ramos. x ≥ −2 também contém o vértice. E x ≤ 4 idem: f(0) = f(4) = 0.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é a taxa de variação média da função f(x) = x² no intervalo [1, 3]?",
    opcoes: [
      "8",
      "2",
      "6",
      "4",
      "5",
    ],
    correta: 3,
    explicacao:
      "A taxa de variação média é a variação de f dividida pela variação de x: [f(3) − f(1)]/(3 − 1) = (9 − 1)/2 = 4. Geometricamente, é a inclinação da reta secante que liga os pontos (1, 1) e (3, 9) do gráfico.\n\n8 é a variação de f, sem dividir pela de x. 2 é a variação de x. 6 é a taxa instantânea em x = 3, f'(3) = 2 · 3. E 5 é a média dos valores de f, (9 + 1)/2, e não a taxa de variação.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Qual é o conjunto solução da inequação |2x − 3| < 5, nos números reais?",
    opcoes: [
      "x < 4",
      "−4 < x < 1",
      "x < −1 ou x > 4",
      "−1 < x < 4",
      "−1 ≤ x ≤ 4",
    ],
    correta: 3,
    explicacao:
      "|2x − 3| < 5 equivale a −5 < 2x − 3 < 5. Somando 3: −2 < 2x < 8; dividindo por 2: −1 < x < 4. Geometricamente, são os x para os quais 2x fica a uma distância menor que 5 do número 3.\n\n“x < 4” resolve só a desigualdade 2x − 3 < 5, esquecendo a outra metade. −4 < x < 1 erra o sinal do 3 ao isolar x. “x < −1 ou x > 4” é a solução de |2x − 3| > 5, a desigualdade contrária. E −1 ≤ x ≤ 4 inclui os extremos, em que |2x − 3| = 5, que não é menor que 5.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Com f(x) = √x e g(x) = x − 5, qual é o domínio da função composta (f ∘ g)(x) = f(g(x))?",
    opcoes: [
      "x ≥ 0",
      "x ≥ −5",
      "Todos os reais",
      "x ≥ 5",
      "x > 5",
    ],
    correta: 3,
    explicacao:
      "A composta é f(g(x)) = √(x − 5). Para existir, o valor de g(x), que entra na raiz, precisa ser não negativo: x − 5 ≥ 0, ou x ≥ 5. O domínio da composta não é o de f nem o de g sozinhos: são os x do domínio de g cujo g(x) cai no domínio de f.\n\nx ≥ 0 é o domínio de f, aplicado diretamente a x. x ≥ −5 erra o sinal ao isolar x. “Todos os reais” é o domínio de g. E x > 5 exclui o 5, em que √0 = 0 existe.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Quais são as assíntotas vertical e horizontal do gráfico de f(x) = (2x + 1)/(x − 3)?",
    opcoes: [
      "x = −3 e y = 2",
      "x = 3 e y = 1",
      "x = 2 e y = 3",
      "x = 3 e y = 2",
      "x = 3 e y = 0",
    ],
    correta: 3,
    explicacao:
      "A assíntota vertical está onde o denominador se anula e o numerador não: x = 3, pois perto dele f cresce ou decresce sem limite (f(3,001) ≅ 7.000). A horizontal é o valor do qual f se aproxima quando x cresce: dividindo numerador e denominador por x, f(x) = (2 + 1/x)/(1 − 3/x), que tende a 2. A assíntota horizontal é y = 2.\n\nx = −3 erra o sinal do zero do denominador. y = 1 esquece o coeficiente 2 do numerador. “x = 2 e y = 3” troca os dois números. E y = 0 vale quando o grau do denominador é maior que o do numerador, o que não é o caso.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Considerando só valores inteiros e positivos de x, a partir de que valor a potência 2ˣ passa a ser sempre maior que 10x?",
    opcoes: [
      "x = 4",
      "x = 10",
      "x = 5",
      "x = 6",
      "x = 20",
    ],
    correta: 3,
    explicacao:
      "Comparando os valores: em x = 5, 2⁵ = 32 < 50; em x = 6, 2⁶ = 64 > 60. A partir daí, 2ˣ dobra a cada passo, enquanto 10x só aumenta 10, e a desigualdade continua valendo. O primeiro inteiro é x = 6: a exponencial acaba superando qualquer função linear.\n\nx = 4 dá 16 < 40. x = 5 dá 32 < 50, ainda menor. x = 10 é um valor em que 2ˣ = 1.024 já supera 100, mas não é o primeiro. E x = 20 também já passou há muito.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Um capital aplicado a juros compostos dobra a cada 5 anos. Em quantos anos ele fica 8 vezes maior?",
    opcoes: [
      "40 anos",
      "20 anos",
      "8 anos",
      "15 anos",
      "10 anos",
    ],
    correta: 3,
    explicacao:
      "Oito vezes é 2³: o capital precisa dobrar três vezes, e cada duplicação leva 5 anos. São 3 · 5 = 15 anos. Em fórmula, C(t) = C₀ · 2^(t/5), e 2^(t/5) = 8 dá t/5 = 3.\n\n40 anos multiplica o fator 8 pelos 5 anos, como se o crescimento fosse linear. 20 anos conta quatro duplicações, o que daria 16 vezes. 8 anos toma o fator como tempo. E 10 anos conta só duas duplicações, que dariam 4 vezes.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "media",
    enunciado:
      "Sabendo que tg x = 3/4 e que x está no primeiro quadrante, qual é o valor de sen 2x?",
    opcoes: [
      "3/5",
      "6/5",
      "7/25",
      "24/25",
      "12/25",
    ],
    correta: 3,
    explicacao:
      "Com tg x = 3/4, pode-se pensar num triângulo retângulo de catetos 3 e 4 e hipotenusa 5: sen x = 3/5 e cos x = 4/5. Pela fórmula do arco duplo, sen 2x = 2 sen x cos x = 2 · (3/5) · (4/5) = 24/25.\n\n3/5 é o próprio sen x. 6/5 é 2 sen x, esquecendo o cosseno, e passa de 1, o que é impossível para um seno. 7/25 é cos 2x = cos²x − sen²x. E 12/25 é sen x · cos x, sem o fator 2.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "A função f(x) = x² − 4x + 1, restrita ao domínio x ≥ 2, é injetora. Qual é a expressão da sua inversa?",
    opcoes: [
      "2 − √(x + 3)",
      "√(x + 3) − 2",
      "2 + √(x − 1)",
      "(x − 1)/(x − 4)",
      "2 + √(x + 3)",
    ],
    correta: 4,
    explicacao:
      "Completando o quadrado, f(x) = (x − 2)² − 3. Escrevendo y = (x − 2)² − 3: (x − 2)² = y + 3 e, como x ≥ 2 faz x − 2 ≥ 0, só a raiz positiva serve: x − 2 = √(y + 3), x = 2 + √(y + 3). Trocando as variáveis, f⁻¹(x) = 2 + √(x + 3), definida para x ≥ −3, que é a imagem de f nesse domínio. Confere: f⁻¹(−3) = 2, o vértice.\n\n2 − √(x + 3) é a inversa do outro ramo, o de x ≤ 2. √(x + 3) − 2 erra o sinal do deslocamento. 2 + √(x − 1) usa o termo independente, 1, sem completar o quadrado. E (x − 1)/(x − 4) trata a função como se fosse uma razão de polinômios do primeiro grau.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Em que conjunto de valores de x a expressão √((x − 1)/(x + 2)) representa um número real?",
    opcoes: [
      "x ≤ −2 ou x ≥ 1",
      "−2 < x ≤ 1",
      "x ≥ 1",
      "x > −2",
      "x < −2 ou x ≥ 1",
    ],
    correta: 4,
    explicacao:
      "É preciso que o quociente (x − 1)/(x + 2) seja maior ou igual a zero, com o denominador diferente de zero. O quociente é positivo quando numerador e denominador têm o mesmo sinal: ambos positivos (x > 1) ou ambos negativos (x < −2). Ele é zero em x = 1, que entra. Em x = −2, o denominador se anula, e o ponto fica de fora. O domínio é x < −2 ou x ≥ 1.\n\n“x ≤ −2 ou x ≥ 1” inclui o −2, que zera o denominador. −2 < x ≤ 1 é onde o quociente é negativo ou nulo, praticamente a condição contrária. “x ≥ 1” esquece o trecho em que os dois fatores são negativos. E “x > −2” só exclui a divisão por zero, esquecendo o sinal do radicando.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Considerando apenas os arcos com 0 ≤ x < 2π, que valores de x satisfazem 2 cos²x − cos x − 1 = 0?",
    opcoes: [
      "2π/3 e 4π/3",
      "0 e π/3",
      "0, π/3 e 5π/3",
      "π, π/3 e 5π/3",
      "0, 2π/3 e 4π/3",
    ],
    correta: 4,
    explicacao:
      "Com y = cos x, a equação fica 2y² − y − 1 = 0, de raízes y = 1 e y = −1/2. cos x = 1 dá x = 0 no intervalo. cos x = −1/2 dá os arcos do 2º e do 3º quadrantes com esse cosseno: x = 2π/3 e x = 4π/3. São três soluções: 0, 2π/3 e 4π/3.\n\n“2π/3 e 4π/3” esquece a raiz y = 1. “0 e π/3” usa cos x = 1/2 no lugar de −1/2, e ainda perde uma solução. “0, π/3 e 5π/3” troca o sinal da segunda raiz, resolvendo cos x = 1/2. E “π, π/3 e 5π/3” troca os sinais das duas raízes, resolvendo cos x = −1 e cos x = 1/2.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Qual é o conjunto solução da inequação log_(1/2)(x − 1) > −2, em que log_(1/2) indica o logaritmo na base 1/2?",
    opcoes: [
      "x > 5",
      "x < 5",
      "1 < x < 3",
      "x > 1",
      "1 < x < 5",
    ],
    correta: 4,
    explicacao:
      "O domínio exige x − 1 > 0, isto é, x > 1. Como −2 = log_(1/2) 4 (porque (1/2)⁻² = 4), a inequação é log_(1/2)(x − 1) > log_(1/2) 4. Com base entre 0 e 1, o logaritmo é decrescente, e a desigualdade se inverte ao comparar os argumentos: x − 1 < 4, ou x < 5. Juntando com o domínio: 1 < x < 5.\n\n“x > 5” mantém o sentido da desigualdade, como se a base fosse maior que 1. “x < 5” esquece o domínio do logaritmo. 1 < x < 3 calcula (1/2)⁻² como 2, em vez de 4. E “x > 1” é só o domínio.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Com f(x) = 2x + 3, qual é a função g para a qual (f ∘ g)(x) = 6x − 1, para todo x real?",
    opcoes: [
      "g(x) = 6x − 4",
      "g(x) = 3x + 2",
      "g(x) = 3x − 10",
      "g(x) = (6x − 1)/(2x + 3)",
      "g(x) = 3x − 2",
    ],
    correta: 4,
    explicacao:
      "A composta é f(g(x)) = 2 · g(x) + 3, e ela deve valer 6x − 1: 2g(x) + 3 = 6x − 1, 2g(x) = 6x − 4, e g(x) = 3x − 2. Confere: f(3x − 2) = 2(3x − 2) + 3 = 6x − 1.\n\n6x − 4 esquece de dividir por 2, o coeficiente de f. 3x + 2 erra o sinal ao passar o 3 para o outro lado. 3x − 10 resolve g(f(x)) = 6x − 1, invertendo a ordem da composição. E (6x − 1)/(2x + 3) divide a composta por f, como se compor fosse multiplicar.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Qual é o valor máximo que a função f(x) = sen x + cos x assume, para x real?",
    opcoes: [
      "2",
      "1",
      "√2/2",
      "π/4",
      "√2",
    ],
    correta: 4,
    explicacao:
      "Escrevendo sen x + cos x = √2 · (sen x · √2/2 + cos x · √2/2) = √2 · sen(x + π/4), a função é um seno de amplitude √2, e o seu máximo é √2, atingido em x = π/4. O seno e o cosseno não chegam a 1 no mesmo ponto, e por isso o máximo não é 2.\n\n2 soma os máximos de cada parcela, como se ocorressem juntos. 1 é o máximo de cada parcela isolada. √2/2 é o valor de sen(π/4) e de cos(π/4), e não da soma. E π/4 é o ponto em que o máximo acontece, e não o valor máximo.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Qual é a solução real da equação 3^(x + 1) = 2^(2x)?",
    opcoes: [
      "log 3/(log 2 − log 3)",
      "log 4/log 3",
      "(log 4 − log 3)/log 3",
      "1",
      "log 3/(log 4 − log 3)",
    ],
    correta: 4,
    explicacao:
      "Aplicando o logaritmo decimal aos dois lados: (x + 1) log 3 = 2x log 2 = x log 4. Então x log 3 + log 3 = x log 4, e x(log 4 − log 3) = log 3, ou x = log 3/(log 4 − log 3) ≅ 3,82. Confere: 3^4,82 e 2^7,64 valem, os dois, cerca de 199.\n\nlog 3/(log 2 − log 3) esquece o 2 do expoente 2x, usando log 2 no lugar de log 4. log 4/log 3 iguala os expoentes como se as bases fossem iguais. (log 4 − log 3)/log 3 inverte a fração. E 1 não satisfaz a equação: 3² = 9, e 2² = 4.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "A função f(x) = x³ + x é estritamente crescente e, portanto, inversível. Qual é o valor de f⁻¹(10)?",
    opcoes: [
      "10",
      "1/1.010",
      "1.010",
      "∛10",
      "2",
    ],
    correta: 4,
    explicacao:
      "f⁻¹(10) é o número x tal que f(x) = 10, isto é, x³ + x = 10. Testando valores inteiros: 2³ + 2 = 10. Então f⁻¹(10) = 2, e esse x é o único, porque f é estritamente crescente. Não é preciso achar a expressão da inversa para calcular um valor dela.\n\n10 confunde f⁻¹(10) com o próprio argumento. 1/1.010 é 1/f(10), o inverso multiplicativo do valor de f em 10. 1.010 é f(10), a função, e não a inversa. E ∛10 resolve x³ = 10, esquecendo o termo x.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Quais são as soluções reais do sistema formado pelas equações log x + log y = 3 e x − y = 90, com logaritmos decimais?",
    opcoes: [
      "x = 10 e y = 100",
      "x = 1.000 e y = 1",
      "x = 50 e y = 20",
      "x = 100 e y = 10, ou x = −10 e y = −100",
      "x = 100 e y = 10",
    ],
    correta: 4,
    explicacao:
      "A primeira equação dá log(xy) = 3, ou xy = 1.000, com x > 0 e y > 0. Da segunda, x = y + 90; substituindo: (y + 90)y = 1.000, y² + 90y − 1.000 = 0, de raízes y = 10 e y = −100. Como y precisa ser positivo, y = 10 e x = 100. Confere: log 100 + log 10 = 2 + 1 = 3.\n\n“x = 10 e y = 100” troca os valores, e dá x − y = −90. “1.000 e 1” satisfaz xy = 1.000, mas não x − y = 90. “50 e 20” também satisfaz o produto, mas não a diferença. E a solução com números negativos não serve, porque o logaritmo de número negativo não existe.",
  },
  {
    materia: "calculo",
    tema: "Funções e revisão de pré-cálculo",
    dificuldade: "dificil",
    enunciado:
      "Toda função f definida em todos os reais é a soma de uma parte par, P(x) = [f(x) + f(−x)]/2, e de uma parte ímpar. Qual é a parte par de f(x) = eˣ?",
    opcoes: [
      "(eˣ − e^(−x))/2",
      "eˣ/2",
      "e^(x²)",
      "(eˣ + 1)/2",
      "(eˣ + e^(−x))/2",
    ],
    correta: 4,
    explicacao:
      "Pela fórmula dada, P(x) = [eˣ + e^(−x)]/2, que é o cosseno hiperbólico, cosh x. Ela é par, porque trocar x por −x apenas troca as duas parcelas de lugar. A parte ímpar é I(x) = [eˣ − e^(−x)]/2, o seno hiperbólico, e P(x) + I(x) = eˣ.\n\n(eˣ − e^(−x))/2 é a parte ímpar. eˣ/2 é só metade da função, e não é par: e/2 ≠ e⁻¹/2. e^(x²) é par, mas não tem relação com a decomposição de eˣ. E (eˣ + 1)/2 usa f(0) = 1 no lugar de f(−x).",
  },
];
