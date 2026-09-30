/* Limites laterais, infinitos e no infinito (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__limites-laterais-infinitos-e-no-infinito.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__limites-laterais-infinitos-e-no-infinito.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Qual é o limite de 1/(x − 2) quando x tende a 2 pela direita?",
    opcoes: [
      "+∞",
      "−∞",
      "0",
      "1/2",
      "2",
    ],
    correta: 0,
    explicacao:
      "Pela direita, x é um pouco maior que 2, e x − 2 é um número positivo cada vez menor: 0,1; 0,01; 0,001. O inverso de um positivo muito pequeno é um positivo muito grande: 10, 100, 1.000. A função cresce sem limite, e escreve-se que o limite é +∞. A reta x = 2 é uma assíntota vertical do gráfico.\n\n−∞ é o limite pela esquerda, em que x − 2 é negativo. 0 confunde o denominador, que tende a zero, com o resultado. 1/2 substitui x por 0 em vez de por valores perto de 2. E 2 é o próprio ponto.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Qual é o limite de (3x + 1)/(x − 2) quando x tende a +∞?",
    opcoes: [
      "3",
      "0",
      "+∞",
      "−1/2",
      "1/3",
    ],
    correta: 0,
    explicacao:
      "Numerador e denominador têm o mesmo grau, 1. Dividindo os dois por x: (3 + 1/x)/(1 − 2/x). Quando x cresce, 1/x e 2/x tendem a 0, e a fração tende a 3/1 = 3. Para quocientes de polinômios de mesmo grau, o limite no infinito é a razão entre os coeficientes dos termos de maior grau.\n\n0 valeria se o grau do denominador fosse maior. +∞ valeria se o grau do numerador fosse maior. −1/2 é o valor da função em x = 0. E 1/3 inverte a razão dos coeficientes.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Qual é o limite de eˣ quando x tende a −∞?",
    opcoes: [
      "0",
      "+∞",
      "1",
      "−∞",
      "e",
    ],
    correta: 0,
    explicacao:
      "Para x negativo, eˣ = 1/e^(|x|): quando x tende a −∞, |x| cresce, e^(|x|) cresce sem limite, e o seu inverso tende a 0. O gráfico de eˣ se aproxima do eixo x pela esquerda, sem nunca tocá-lo: y = 0 é assíntota horizontal.\n\n+∞ é o limite quando x tende a +∞. 1 é o valor em x = 0. −∞ supõe que a exponencial possa ficar negativa, o que nunca acontece. E e é o valor em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Qual é o limite de 5 − 2/x quando x tende a +∞?",
    opcoes: [
      "5",
      "3",
      "0",
      "+∞",
      "−2",
    ],
    correta: 0,
    explicacao:
      "Quando x cresce sem limite, a fração 2/x fica cada vez menor: 2/1.000 = 0,002; 2/1.000.000 = 0,000002. Ela tende a 0, e a expressão tende a 5 − 0 = 5. A reta y = 5 é assíntota horizontal do gráfico.\n\n3 trata 2/x como se valesse 2, o que só acontece em x = 1. 0 aplica o limite de 2/x à expressão inteira. +∞ supõe que a expressão cresça junto com x. E −2 fica só com o numerador da fração.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "A função f vale x² para x < 1 e 2x + 1 para x ≥ 1. Quais são os limites laterais de f em x = 1?",
    opcoes: [
      "1 pela esquerda e 3 pela direita",
      "3 pela esquerda e 1 pela direita",
      "1 dos dois lados",
      "3 dos dois lados",
      "2 dos dois lados",
    ],
    correta: 0,
    explicacao:
      "Pela esquerda (x < 1), vale x², que se aproxima de 1² = 1. Pela direita (x ≥ 1), vale 2x + 1, que se aproxima de 2 · 1 + 1 = 3. Como os laterais são diferentes, o limite (bilateral) em x = 1 não existe: o gráfico dá um salto nesse ponto.\n\n“3 pela esquerda e 1 pela direita” troca as expressões dos dois trechos. “1 dos dois lados” usa x² também à direita, e “3 dos dois lados” usa 2x + 1 também à esquerda. E 2 é a média dos dois valores, que não é limite de lado nenhum.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Perto de x = 0, os valores de 1/x² ficam cada vez maiores. Qual é o limite dessa função quando x tende a 0?",
    opcoes: [
      "+∞",
      "−∞",
      "0",
      "1",
      "+∞ pela direita e −∞ pela esquerda",
    ],
    correta: 0,
    explicacao:
      "Perto de 0, x² é um número positivo muito pequeno, seja x positivo ou negativo, porque o quadrado elimina o sinal. O seu inverso é um positivo muito grande: os dois lados tendem a +∞, e o limite é +∞. A reta x = 0 é assíntota vertical, com o gráfico subindo dos dois lados.\n\n−∞ supõe que o quadrado de um número negativo seja negativo. 0 confunde o denominador, que tende a zero, com o resultado. 1 é o valor em x = ±1. E a mudança de sinal nos dois lados é o que acontece com 1/x, e não com 1/x².",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Quando x tende a +∞, de que valor se aproxima (2x² − x)/(5x² + 3)?",
    opcoes: [
      "2/5",
      "0",
      "+∞",
      "5/2",
      "2",
    ],
    correta: 0,
    explicacao:
      "Os dois polinômios têm grau 2. Dividindo numerador e denominador por x²: (2 − 1/x)/(5 + 3/x²), que tende a 2/5 quando x cresce. Para x grande, só os termos de maior grau importam: 2x²/(5x²) = 2/5.\n\n0 valeria se o grau do denominador fosse maior. +∞ valeria se o grau do numerador fosse maior. 5/2 inverte a razão dos coeficientes. E 2 esquece o coeficiente 5 do denominador.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Com x crescendo sem limite, a fração (x + 1)/(x² + 1) se aproxima de que valor?",
    opcoes: [
      "0",
      "1",
      "+∞",
      "1/2",
      "−1",
    ],
    correta: 0,
    explicacao:
      "O grau do denominador (2) é maior que o do numerador (1). Dividindo tudo por x²: (1/x + 1/x²)/(1 + 1/x²), que tende a 0/1 = 0. O denominador cresce muito mais depressa, e a fração encolhe: em x = 1.000, ela vale cerca de 0,001.\n\n1 compara só os coeficientes dos termos de maior grau, como se os graus fossem iguais. +∞ inverte a comparação dos graus. 1/2 é o valor da função em x = 1. E −1 não corresponde a nenhum comportamento da função, que é positiva para x > −1.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Qual é o limite de arctg x quando x tende a +∞?",
    opcoes: [
      "π/2",
      "+∞",
      "π",
      "0",
      "1",
    ],
    correta: 0,
    explicacao:
      "O arco-tangente devolve o arco de (−π/2, π/2) cuja tangente é x. Para a tangente crescer sem limite, o arco precisa se aproximar de π/2 (90°), onde a tangente explode. Então arctg x tende a π/2, e y = π/2 é assíntota horizontal do gráfico.\n\n+∞ supõe que o arco cresça junto com a tangente, mas ele fica sempre abaixo de π/2. π é o limite do arco-cotangente em −∞, e não deste. 0 é o valor em x = 0. E 1 confunde o arco com a tangente de π/4.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Qual é o limite de (x − 3)/|x − 3| quando x tende a 3 pela esquerda?",
    opcoes: [
      "−1",
      "1",
      "0",
      "3",
      "Não existe",
    ],
    correta: 0,
    explicacao:
      "Pela esquerda, x < 3, e x − 3 é negativo: |x − 3| = −(x − 3). Então (x − 3)/|x − 3| = (x − 3)/[−(x − 3)] = −1, para todo x < 3. O limite pela esquerda é −1 (pela direita seria 1, e o limite bilateral não existe).\n\n1 é o limite pela direita. 0 toma o numerador nulo como resultado. 3 é o próprio ponto. E o limite lateral existe: a função é constante, igual a −1, à esquerda de 3.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Sendo ⌊x⌋ o maior inteiro menor ou igual a x, qual é o limite de ⌊x⌋ quando x tende a 2 pela esquerda?",
    opcoes: [
      "2",
      "1",
      "1,99",
      "0",
      "Não existe",
    ],
    correta: 1,
    explicacao:
      "Para x um pouco menor que 2 (1,9; 1,99; 1,999), o maior inteiro menor ou igual a x é 1. A função é constante, igual a 1, em todo o intervalo [1, 2), e o limite pela esquerda é 1. Pela direita, ⌊x⌋ = 2, e o gráfico dá um salto em x = 2.\n\n2 é o valor de ⌊2⌋ e o limite pela direita. 1,99 é um valor de x, e não de ⌊x⌋. 0 é o valor da função entre 0 e 1. E o limite lateral existe: a função é constante perto de 2, pela esquerda.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "facil",
    enunciado:
      "Para valores de x muito grandes, a expressão (1 + 1/x)ˣ se aproxima de que número?",
    opcoes: [
      "1",
      "e",
      "+∞",
      "0",
      "2",
    ],
    correta: 1,
    explicacao:
      "É o limite fundamental que define o número e ≅ 2,718. A base 1 + 1/x tende a 1, mas o expoente x cresce sem limite, e as duas tendências se equilibram: com x = 1.000, a expressão vale cerca de 2,7169. Aparece, por exemplo, em juros compostos capitalizados continuamente.\n\n1 supõe que 1 elevado a qualquer coisa dê 1, o que não vale quando a base só tende a 1. +∞ supõe que o expoente domine. 0 não tem apoio: a expressão é sempre maior que 1 para x > 0. E 2 é o valor em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Quais são os limites laterais de f(x) = 1/(x − 2) no ponto x = 2?",
    opcoes: [
      "+∞ pela esquerda e −∞ pela direita",
      "−∞ pela esquerda e +∞ pela direita",
      "+∞ dos dois lados",
      "0 dos dois lados",
      "−∞ dos dois lados",
    ],
    correta: 1,
    explicacao:
      "Pela esquerda, x < 2, e x − 2 é negativo e cada vez mais próximo de zero: o quociente é negativo e cresce em módulo, tendendo a −∞. Pela direita, x − 2 é positivo e pequeno, e o quociente tende a +∞. A reta x = 2 é assíntota vertical, com o gráfico descendo à esquerda e subindo à direita.\n\n“+∞ pela esquerda e −∞ pela direita” troca os sinais do denominador dos dois lados. “+∞ dos dois lados” vale para 1/(x − 2)², em que o quadrado elimina o sinal. “0 dos dois lados” confunde o denominador, que tende a zero, com o resultado. E “−∞ dos dois lados” ignora a mudança de sinal de x − 2.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "A diferença √(x² + x) − x é uma indeterminação do tipo ∞ − ∞ quando x cresce. Qual é o seu limite em +∞?",
    opcoes: [
      "0",
      "1/2",
      "+∞",
      "1",
      "−1/2",
    ],
    correta: 1,
    explicacao:
      "É uma indeterminação do tipo ∞ − ∞. Multiplicando e dividindo pelo conjugado: (x² + x − x²)/(√(x² + x) + x) = x/(√(x² + x) + x). Dividindo numerador e denominador por x (positivo): 1/(√(1 + 1/x) + 1), que tende a 1/(1 + 1) = 1/2.\n\n0 supõe que √(x² + x) e x sejam praticamente iguais e se cancelem por inteiro. +∞ supõe que a raiz cresça mais depressa que x. 1 esquece de somar as duas parcelas do conjugado. E −1/2 erra o sinal.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de (2x + 1)/√(x² + 3) quando x tende a −∞?",
    opcoes: [
      "2",
      "−2",
      "0",
      "+∞",
      "−∞",
    ],
    correta: 1,
    explicacao:
      "Para x negativo, √(x²) = |x| = −x, e é aí que está a armadilha. Dividindo numerador e denominador por |x| = −x: (2x + 1)/(−x) = −2 − 1/x, e √(x² + 3)/(−x) = √(1 + 3/x²). O limite é −2/1 = −2. Faz sentido: para x muito negativo, o numerador é negativo, e o denominador, sempre positivo.\n\n2 trata √(x²) como x, o que só vale para x positivo (é o limite em +∞). 0, +∞ e −∞ supõem que os graus sejam diferentes, mas o numerador e a raiz crescem na mesma ordem, |x|.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de x · e^(−x) quando x tende a +∞?",
    opcoes: [
      "+∞",
      "0",
      "1",
      "1/e",
      "Não existe",
    ],
    correta: 1,
    explicacao:
      "Escrevendo x · e^(−x) = x/eˣ, é uma indeterminação ∞/∞. A exponencial cresce mais depressa que qualquer potência de x: por L'Hôpital, x/eˣ leva a 1/eˣ, que tende a 0. Com x = 20, por exemplo, x/eˣ ≅ 4 · 10⁻⁸.\n\n+∞ supõe que o fator x vença a exponencial. 1 supõe que os dois fatores se equilibrem. 1/e é o valor da função em x = 1, onde ela atinge o seu máximo. E o limite existe: a exponencial domina, e o quociente vai a zero.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Com x crescendo sem limite, o quociente ln x/x se aproxima de que valor?",
    opcoes: [
      "1",
      "0",
      "+∞",
      "e",
      "Não existe",
    ],
    correta: 1,
    explicacao:
      "Os dois termos crescem sem limite, mas o logaritmo cresce muito mais devagar que x: ln 1.000 ≅ 6,9, e ln 1.000.000 ≅ 13,8. Por L'Hôpital, (1/x)/1 = 1/x, que tende a 0. O limite é 0.\n\n1 supõe que os dois cresçam no mesmo ritmo. +∞ inverte a comparação: é x que cresce mais depressa. e é o ponto em que ln x/x atinge o seu máximo, 1/e. E o limite existe: o quociente vai diminuindo e se aproxima de zero.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de (1 + 2/x)ˣ quando x tende a +∞?",
    opcoes: [
      "e",
      "e²",
      "1",
      "+∞",
      "2e",
    ],
    correta: 1,
    explicacao:
      "Com u = x/2, que também tende a +∞: (1 + 2/x)ˣ = (1 + 1/u)^(2u) = [(1 + 1/u)ᵘ]². A base entre colchetes tende a e, e o limite é e² ≅ 7,39. Em geral, (1 + a/x)ˣ tende a eᵃ.\n\ne ignora o 2, como se a expressão fosse (1 + 1/x)ˣ. 1 supõe que 1 elevado a qualquer coisa dê 1. +∞ supõe que o expoente domine. E 2e multiplica por 2 em vez de elevar.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Quais são as assíntotas verticais do gráfico de f(x) = (x + 1)/(x² − 1)?",
    opcoes: [
      "x = 1 e x = −1",
      "Só x = 1",
      "Só x = −1",
      "Nenhuma",
      "x = 0",
    ],
    correta: 1,
    explicacao:
      "O denominador se anula em x = 1 e em x = −1, mas isso não basta. Fatorando, f(x) = (x + 1)/[(x − 1)(x + 1)] = 1/(x − 1) para x ≠ −1. Perto de −1, f se aproxima de 1/(−2) = −1/2, um valor finito: ali o gráfico tem só um buraco. Perto de 1, f cresce sem limite: x = 1 é a única assíntota vertical.\n\n“x = 1 e x = −1” conta todos os zeros do denominador, sem verificar se o numerador também se anula. “Só x = −1” fica justamente com o ponto em que a expressão se simplifica. “Nenhuma” ignora o comportamento perto de 1. E x = 0 não anula o denominador.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é a assíntota horizontal do gráfico de f(x) = (3x² + 2)/(x² − 4)?",
    opcoes: [
      "y = 0",
      "y = 3",
      "y = −1/2",
      "x = ±2",
      "Não tem assíntota horizontal",
    ],
    correta: 1,
    explicacao:
      "A assíntota horizontal vem do limite no infinito. Numerador e denominador têm grau 2, e o limite é a razão entre os coeficientes dos termos de maior grau: 3/1 = 3, tanto em +∞ quanto em −∞. A reta y = 3 é a assíntota horizontal.\n\ny = 0 valeria se o grau do denominador fosse maior. y = −1/2 é o valor da função em x = 0. x = ±2 são as assíntotas verticais, onde o denominador se anula. E a função tem, sim, assíntota horizontal, porque os graus são iguais.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de (x³ − 2x)/(4x² + 1) quando x tende a +∞?",
    opcoes: [
      "1/4",
      "0",
      "+∞",
      "−∞",
      "−2",
    ],
    correta: 2,
    explicacao:
      "O grau do numerador (3) é maior que o do denominador (2). Dividindo tudo por x²: (x − 2/x)/(4 + 1/x²), que se comporta como x/4 e cresce sem limite. O limite é +∞: o gráfico sobe e se aproxima da reta inclinada y = x/4.\n\n1/4 compara os coeficientes dos termos de maior grau como se os graus fossem iguais. 0 inverte a comparação dos graus. −∞ erra o sinal: para x positivo e grande, numerador e denominador são positivos. E −2 é o coeficiente do termo de grau 1, que não decide nada no infinito.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Quando x se aproxima de 0 por valores positivos, de que valor se aproxima ln x?",
    opcoes: [
      "0",
      "+∞",
      "−∞",
      "1",
      "−1",
    ],
    correta: 2,
    explicacao:
      "O logaritmo natural só existe para x > 0, e por isso só faz sentido o limite pela direita. Quando x se aproxima de 0, ln x fica cada vez mais negativo: ln 0,01 ≅ −4,6; ln 0,000001 ≅ −13,8. O limite é −∞, e o eixo y (x = 0) é assíntota vertical do gráfico.\n\n0 é o valor de ln 1. +∞ é o limite quando x tende a +∞. 1 é o valor de ln e. E −1 é o valor em x = 1/e, e não o limite.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Quais são os limites laterais de e^(1/x) quando x tende a 0?",
    opcoes: [
      "+∞ pela esquerda e 0 pela direita",
      "+∞ dos dois lados",
      "0 pela esquerda e +∞ pela direita",
      "1 dos dois lados",
      "0 dos dois lados",
    ],
    correta: 2,
    explicacao:
      "Pela direita, x é positivo e pequeno, e 1/x tende a +∞: e^(1/x) cresce sem limite. Pela esquerda, 1/x tende a −∞, e e^(1/x) = 1/e^(1/|x|) tende a 0. Os laterais são 0 e +∞, e o limite bilateral não existe.\n\n“+∞ pela esquerda e 0 pela direita” troca os sinais de 1/x. “+∞ dos dois lados” esquece que 1/x é negativo à esquerda. “1 dos dois lados” usa e⁰ = 1, como se 1/x tendesse a 0. E “0 dos dois lados” esquece o lado direito.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Para x muito grande, o quociente sen x/x tem um comportamento bem diferente do que tem perto de 0. Qual é o seu limite quando x tende a +∞?",
    opcoes: [
      "1",
      "Não existe, porque sen x oscila",
      "0",
      "+∞",
      "−1",
    ],
    correta: 2,
    explicacao:
      "O numerador oscila entre −1 e 1, mas o denominador cresce sem limite: −1/x ≤ sen x/x ≤ 1/x para x > 0. Como −1/x e 1/x tendem a 0, pelo teorema do confronto, sen x/x também tende a 0. As oscilações existem, mas ficam cada vez menores.\n\n1 é o limite de sen x/x quando x tende a 0, e não ao infinito. A oscilação de sen x não impede o limite, porque ela é amortecida pelo denominador. +∞ supõe que a fração cresça. E −1 é o menor valor do seno, e não o limite.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Para x tendendo a +∞, de que valor se aproxima √(4x² + 1)/(x + 3)?",
    opcoes: [
      "4",
      "1/3",
      "2",
      "0",
      "+∞",
    ],
    correta: 2,
    explicacao:
      "Para x positivo, √(4x² + 1) = x√(4 + 1/x²). Dividindo numerador e denominador por x: √(4 + 1/x²)/(1 + 3/x), que tende a √4/1 = 2. A raiz de 4x² se comporta como 2x, e não como 4x. Conferindo com x = 1.000: √4.000.001/1.003 ≅ 1,994.\n\n4 esquece a raiz, tratando √(4x²) como 4x. 1/3 é o valor da função em x = 0. E 0 e +∞ supõem graus diferentes, mas a raiz de x² tem a mesma ordem que x.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Fazendo a troca u = 1/x, calcule o limite de x · sen(1/x) com x tendendo a +∞. Qual é o valor?",
    opcoes: [
      "0",
      "+∞",
      "1",
      "Não existe",
      "π",
    ],
    correta: 2,
    explicacao:
      "Com u = 1/x, que tende a 0 pela direita: x · sen(1/x) = sen(u)/u, que tende a 1 pelo limite fundamental. Para x grande, sen(1/x) ≅ 1/x, e o produto fica perto de 1.\n\n0 supõe que sen(1/x) vá a zero mais depressa do que x cresce, mas os dois se equilibram. +∞ supõe que o fator x domine. “Não existe” confunde com x · sen x, que oscila. E π não tem relação com esse limite.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Quando x tende a −∞, de que valor se aproxima (x² + 3x)/(2 − x²)?",
    opcoes: [
      "1",
      "0",
      "−1",
      "−∞",
      "1/2",
    ],
    correta: 2,
    explicacao:
      "Os dois polinômios têm grau 2, e o limite é a razão entre os coeficientes dos termos de maior grau: 1/(−1) = −1. Dividindo por x²: (1 + 3/x)/(2/x² − 1), que tende a 1/(−1) = −1, tanto em −∞ quanto em +∞, porque os termos que vão a zero não dependem do sinal de x.\n\n1 esquece o sinal negativo de −x² no denominador. 0 valeria se o grau do denominador fosse maior. −∞ valeria se o grau do numerador fosse maior. E 1/2 usa o termo constante do denominador no lugar do coeficiente de x².",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de (x + 2)/(1 − x) quando x tende a 1 pela direita?",
    opcoes: [
      "+∞",
      "3",
      "−∞",
      "0",
      "−3",
    ],
    correta: 2,
    explicacao:
      "Pela direita, x > 1, e o denominador 1 − x é negativo e cada vez mais próximo de zero. O numerador tende a 3, positivo. Um positivo dividido por um negativo muito pequeno é um negativo muito grande em módulo: o limite é −∞. Pela esquerda, o denominador seria positivo, e o limite, +∞.\n\n+∞ erra o sinal do denominador à direita de 1. 3 é o valor do numerador, esquecendo que o denominador tende a zero. 0 confunde o denominador com o resultado. E −3 divide o numerador por −1, como se o denominador tendesse a −1.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de 2ˣ/x¹⁰ quando x tende a +∞?",
    opcoes: [
      "0",
      "1",
      "+∞",
      "2",
      "1/10",
    ],
    correta: 2,
    explicacao:
      "Qualquer exponencial de base maior que 1 cresce mais depressa que qualquer potência de x, por maior que seja o expoente. Em x = 100, 2¹⁰⁰ ≅ 1,3 · 10³⁰ e 100¹⁰ = 10²⁰: a razão já passa de 10¹⁰, e continua crescendo. O limite é +∞ (aplicando L'Hôpital dez vezes, sobra 2ˣ(ln 2)¹⁰/10!, que cresce sem limite).\n\n0 supõe que a potência de grau 10 vença a exponencial, o que só parece acontecer para x pequeno. 1 supõe um equilíbrio entre as duas. 2 é a base da exponencial. E 1/10 usa o expoente da potência como resultado.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Para x muito grande, a expressão (1 − 1/x)ˣ se aproxima de um número conhecido. Qual?",
    opcoes: [
      "e",
      "1",
      "1/e",
      "0",
      "−e",
    ],
    correta: 2,
    explicacao:
      "É o limite fundamental (1 + a/x)ˣ → eᵃ, com a = −1: o resultado é e⁻¹ = 1/e ≅ 0,368. Com u = −x, a expressão vira (1 + 1/u)^(−u) = [(1 + 1/u)ᵘ]⁻¹, que tende a e⁻¹.\n\ne esquece o sinal de −1/x. 1 supõe que 1 elevado a qualquer coisa dê 1. 0 supõe que uma base menor que 1, elevada a um expoente enorme, vá a zero, o que só vale para bases fixas, e não para uma base que tende a 1. E −e troca o expoente −1 por um sinal de menos na frente.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de (3ˣ + 2ˣ)/(3ˣ − 2ˣ) quando x tende a +∞?",
    opcoes: [
      "5",
      "+∞",
      "0",
      "1",
      "3/2",
    ],
    correta: 3,
    explicacao:
      "Dividindo numerador e denominador por 3ˣ: (1 + (2/3)ˣ)/(1 − (2/3)ˣ). Como 2/3 < 1, (2/3)ˣ tende a 0, e a fração tende a 1/1 = 1. Para x grande, 3ˣ domina 2ˣ, e as duas somas ficam praticamente iguais a 3ˣ.\n\n5 é o valor da função em x = 1, (3 + 2)/(3 − 2). +∞ supõe que o numerador cresça mais que o denominador, mas os dois crescem como 3ˣ. 0 inverte o papel das bases. E 3/2 é a razão entre as bases, e não o limite.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Com x crescendo sem limite, o que acontece com o polinômio x³ − 100x²?",
    opcoes: [
      "−∞",
      "0",
      "−100",
      "+∞",
      "1",
    ],
    correta: 3,
    explicacao:
      "Colocando x³ em evidência: x³(1 − 100/x). Quando x cresce, 100/x tende a 0, e o fator entre parênteses tende a 1; como x³ cresce sem limite, o produto tende a +∞. O termo de maior grau domina: o −100x² pesa enquanto x < 100, mas depois disso o x³ vence.\n\n−∞ olha só para o coeficiente −100, que é maior em módulo, mas multiplica uma potência menor. 0 supõe que os termos se cancelem. −100 é o coeficiente do segundo termo. E 1 é o limite de 1 − 100/x, esquecendo o fator x³.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "No ponto x = π/2, a tangente não está definida. Como ela se comporta de cada lado desse ponto?",
    opcoes: [
      "−∞ pela esquerda e +∞ pela direita",
      "+∞ dos dois lados",
      "1 dos dois lados",
      "+∞ pela esquerda e −∞ pela direita",
      "0 dos dois lados",
    ],
    correta: 3,
    explicacao:
      "Com tg x = sen x/cos x: perto de π/2, sen x tende a 1, e cos x tende a 0. Pela esquerda (arcos do 1º quadrante), cos x é positivo e pequeno, e a tangente tende a +∞. Pela direita (2º quadrante), cos x é negativo, e a tangente tende a −∞. A reta x = π/2 é assíntota vertical.\n\n“−∞ pela esquerda e +∞ pela direita” troca os sinais do cosseno nos dois quadrantes. “+∞ dos dois lados” esquece que o cosseno muda de sinal em π/2. “1 dos dois lados” usa o valor da tangente em π/4. E “0 dos dois lados” confunde o cosseno, que tende a zero, com a tangente.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Para x cada vez maior, a fração (x + sen x)/x se estabiliza em que valor?",
    opcoes: [
      "0",
      "2",
      "Não existe, porque sen x oscila",
      "1",
      "+∞",
    ],
    correta: 3,
    explicacao:
      "Separando: (x + sen x)/x = 1 + sen x/x. O primeiro termo é 1, e o segundo tende a 0, porque |sen x/x| ≤ 1/x. O limite é 1. As oscilações do seno existem, mas ficam desprezíveis diante de x.\n\n0 aplica ao quociente o limite de sen x/x no infinito, esquecendo a parcela 1. 2 usa o limite de sen x/x em 0, que vale 1, em vez do limite no infinito. A oscilação não impede o limite, porque é amortecida pelo denominador. E +∞ supõe que a expressão cresça junto com x.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Considere só valores positivos de x, cada vez mais próximos de 0. Para que valor tende a expressão 1/x − 1/|x|?",
    opcoes: [
      "+∞",
      "−∞",
      "2",
      "0",
      "Não existe",
    ],
    correta: 3,
    explicacao:
      "Pela direita, x > 0, e |x| = x: a expressão fica 1/x − 1/x = 0 para todo x positivo. Uma função constante igual a 0 tem limite 0. Cada parcela explode separadamente, mas as duas se cancelam exatamente. Pela esquerda, seria outra história: 1/x − 1/(−x) = 2/x, que tende a −∞.\n\n+∞ e −∞ olham para as parcelas isoladas, sem notar o cancelamento. 2 usa a expressão da esquerda, 2/x, e ainda troca x por 1. E o limite existe: é o de uma função constante.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Quantas e quais são as assíntotas horizontais do gráfico de f(x) = x/√(x² + 1)?",
    opcoes: [
      "Uma: y = 1",
      "Uma: y = 0",
      "Nenhuma",
      "Duas: y = 1 e y = −1",
      "Duas: y = 1 e y = 0",
    ],
    correta: 3,
    explicacao:
      "É preciso olhar os dois infinitos. Para x > 0, √(x² + 1) ≅ |x| = x, e f(x) tende a 1 em +∞. Para x < 0, √(x² + 1) ≅ |x| = −x, e f(x) tende a −1 em −∞. São duas assíntotas horizontais: y = 1 à direita e y = −1 à esquerda.\n\n“Uma: y = 1” olha só para +∞. “Uma: y = 0” supõe que o denominador cresça mais depressa, mas ele tem a mesma ordem que x. “Nenhuma” ignora que f é limitada e converge nos dois sentidos. E “y = 1 e y = 0” erra o limite em −∞.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Qual é o limite de ln(x²)/ln x quando x tende a +∞?",
    opcoes: [
      "1",
      "+∞",
      "0",
      "2",
      "e²",
    ],
    correta: 3,
    explicacao:
      "Pela propriedade do logaritmo da potência, ln(x²) = 2 ln x, e, para x > 1, a expressão vale exatamente 2. Uma função constante tem limite igual à constante: 2. Não há indeterminação de verdade, só uma reescrita.\n\n1 supõe que ln(x²) e ln x cresçam no mesmo ritmo sem o fator 2. +∞ supõe que o numerador cresça mais, mas os dois crescem juntos. 0 inverte a comparação. E e² exponencia o resultado sem motivo.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Com x crescendo sem limite, de que valor se aproxima a raiz x-ésima de x, x^(1/x)?",
    opcoes: [
      "0",
      "+∞",
      "e",
      "1",
      "1/e",
    ],
    correta: 3,
    explicacao:
      "Escrevendo x^(1/x) = e^(ln x/x): o expoente ln x/x tende a 0, porque o logaritmo cresce muito mais devagar que x. Então x^(1/x) tende a e⁰ = 1. Com x = 1.000, x^(1/x) ≅ 1,0069.\n\n0 supõe que o expoente 1/x, que vai a zero, anule a expressão, mas uma base grande elevada a zero dá 1. +∞ supõe que a base domine. e é o ponto onde x^(1/x) atinge o seu máximo, que vale e^(1/e). E 1/e é o inverso de e, sem relação com o limite.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "Simplificando √(x − 3)/(x − 3) para x > 3, o que acontece com essa expressão quando x se aproxima de 3 pela direita?",
    opcoes: [
      "0",
      "1",
      "−∞",
      "+∞",
      "1/2",
    ],
    correta: 3,
    explicacao:
      "Para x > 3, x − 3 = (√(x − 3))², e a expressão se simplifica: √(x − 3)/(x − 3) = 1/√(x − 3). Quando x tende a 3 pela direita, √(x − 3) é positivo e cada vez menor, e o seu inverso cresce sem limite: o limite é +∞.\n\n0 supõe que o numerador vá a zero mais depressa, mas é o contrário: a raiz vai a zero mais devagar. 1 supõe que numerador e denominador se cancelem por inteiro. −∞ erra o sinal: a raiz é sempre positiva. E 1/2 é o expoente da raiz, e não o limite.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "media",
    enunciado:
      "A diferença entre (x² + 1)/(x + 1) e x tende a que valor quando x cresce sem limite?",
    opcoes: [
      "0",
      "1",
      "+∞",
      "−1",
      "−∞",
    ],
    correta: 3,
    explicacao:
      "Reduzindo ao mesmo denominador: (x² + 1)/(x + 1) − x = (x² + 1 − x² − x)/(x + 1) = (1 − x)/(x + 1). Dividindo por x: (1/x − 1)/(1 + 1/x), que tende a −1. A fração (x² + 1)/(x + 1) se comporta como x − 1 para x grande, e por isso a diferença com x tende a −1.\n\n0 supõe que (x² + 1)/(x + 1) e x se cancelem por completo. 1 erra o sinal. +∞ e −∞ tratam a diferença como se as duas parcelas crescessem em ritmos diferentes, mas as duas crescem como x.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Qual é a assíntota oblíqua do gráfico de f(x) = (2x² + 3x − 1)/(x − 1)?",
    opcoes: [
      "y = 2x + 3",
      "y = 2x",
      "y = 2",
      "x = 1",
      "y = 2x + 5",
    ],
    correta: 4,
    explicacao:
      "Dividindo o numerador pelo denominador: 2x² + 3x − 1 = (x − 1)(2x + 5) + 4, e então f(x) = 2x + 5 + 4/(x − 1). Quando x tende a ±∞, o resto 4/(x − 1) tende a 0, e o gráfico se aproxima da reta y = 2x + 5. Pelos limites: m = lim f(x)/x = 2, e b = lim [f(x) − 2x] = 5.\n\ny = 2x + 3 copia os coeficientes do numerador sem fazer a divisão. y = 2x acerta a inclinação, mas esquece o coeficiente linear. y = 2 é um coeficiente, e não a assíntota: não há assíntota horizontal, porque o numerador tem grau maior. E x = 1 é a assíntota vertical.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Racionalizando, determine para onde tende a diferença √(x² + 3x) − √(x² − x) quando x cresce sem limite. Qual é esse valor?",
    opcoes: [
      "0",
      "4",
      "1",
      "+∞",
      "2",
    ],
    correta: 4,
    explicacao:
      "Multiplicando e dividindo pela soma das raízes: [(x² + 3x) − (x² − x)]/[√(x² + 3x) + √(x² − x)] = 4x/[√(x² + 3x) + √(x² − x)]. Dividindo por x: 4/[√(1 + 3/x) + √(1 − 1/x)], que tende a 4/(1 + 1) = 2.\n\n0 supõe que as duas raízes, ambas próximas de x, se cancelem por inteiro. 4 esquece de dividir pela soma das duas raízes. 1 divide por 4 em vez de 2. E +∞ trata a diferença de duas quantidades que crescem juntas como se ela crescesse também.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Qual é o limite de x² · [1 − cos(1/x)] quando x tende a +∞?",
    opcoes: [
      "0",
      "1",
      "+∞",
      "2",
      "1/2",
    ],
    correta: 4,
    explicacao:
      "Com u = 1/x, que tende a 0 pela direita: x²[1 − cos(1/x)] = (1 − cos u)/u², que tende a 1/2 pelo limite trigonométrico conhecido. Para x grande, 1 − cos(1/x) ≅ 1/(2x²), e o produto fica perto de 1/2.\n\n0 supõe que 1 − cos(1/x) vá a zero mais depressa do que x² cresce, mas os dois se equilibram. 1 usa 1 − cos u ≅ u², esquecendo o fator 1/2. +∞ supõe que o fator x² domine. E 2 inverte o fator 1/2.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Para x crescendo sem limite, de que valor se aproxima [(x + 1)/(x − 1)]ˣ?",
    opcoes: [
      "e",
      "1",
      "+∞",
      "e^(1/2)",
      "e²",
    ],
    correta: 4,
    explicacao:
      "Escrevendo (x + 1)/(x − 1) = 1 + 2/(x − 1): com u = x − 1, a expressão fica (1 + 2/u)^(u + 1) = (1 + 2/u)ᵘ · (1 + 2/u). O primeiro fator tende a e², e o segundo, a 1. O limite é e² ≅ 7,39; com x = 1.000, a expressão já vale cerca de 7,389.\n\ne supõe que a base seja 1 + 1/x. 1 supõe que 1 elevado a qualquer coisa dê 1. +∞ supõe que o expoente domine. E e^(1/2) inverte o expoente 2.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "O produto x · ln x é uma indeterminação do tipo 0 · (−∞) quando x se aproxima de 0 por valores positivos. Qual é o seu limite?",
    opcoes: [
      "−∞",
      "1",
      "−1",
      "+∞",
      "0",
    ],
    correta: 4,
    explicacao:
      "É uma indeterminação do tipo 0 · (−∞). Escrevendo x ln x = ln x/(1/x) e aplicando L'Hôpital: (1/x)/(−1/x²) = −x, que tende a 0. O fator x vai a zero mais depressa do que ln x vai a −∞: com x = 0,001, x ln x ≅ −0,0069.\n\n−∞ supõe que o logaritmo domine. 1 e −1 supõem um equilíbrio entre os dois fatores que não acontece. E +∞ erra o sinal: para 0 < x < 1, x ln x é negativo.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Para que valor da constante k o limite de (kx² + 3)/(2x² − x), quando x tende a +∞, vale 4?",
    opcoes: [
      "k = 4",
      "k = 1/2",
      "k = 2",
      "Nenhum valor de k",
      "k = 8",
    ],
    correta: 4,
    explicacao:
      "Os dois polinômios têm grau 2 (para k ≠ 0), e o limite é a razão entre os coeficientes dos termos de maior grau: k/2. Para valer 4, k/2 = 4, e k = 8. Os termos de grau menor, 3 e −x, não influenciam o limite no infinito.\n\nk = 4 esquece o coeficiente 2 do denominador. k = 1/2 inverte a razão, resolvendo 2/k = 4. k = 2 faz a razão valer 1, e não 4. E existe, sim, um valor de k, porque a razão k/2 pode assumir qualquer valor.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Tomando logaritmos, determine o valor para o qual tende (eˣ + x)^(1/x) com x crescendo sem limite. Qual é esse valor?",
    opcoes: [
      "1",
      "+∞",
      "e²",
      "0",
      "e",
    ],
    correta: 4,
    explicacao:
      "Tomando o logaritmo: ln[(eˣ + x)^(1/x)] = ln(eˣ + x)/x = [x + ln(1 + x e^(−x))]/x = 1 + ln(1 + x e^(−x))/x. Como x e^(−x) tende a 0, o segundo termo também tende a 0, e o logaritmo tende a 1. A expressão tende a e¹ = e.\n\n1 supõe que o expoente 1/x, que vai a zero, anule o efeito da base. +∞ supõe que a base, que cresce, domine. e² conta duas vezes o crescimento de eˣ. E 0 não tem apoio: a expressão é sempre maior que 1.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Qual é o limite de x · [ln(x + 1) − ln x] quando x tende a +∞?",
    opcoes: [
      "0",
      "+∞",
      "e",
      "ln 2",
      "1",
    ],
    correta: 4,
    explicacao:
      "Pela propriedade do logaritmo do quociente: x[ln(x + 1) − ln x] = x ln(1 + 1/x) = ln[(1 + 1/x)ˣ]. O argumento tende a e, e o logaritmo tende a ln e = 1. Outro caminho: com u = 1/x, a expressão é ln(1 + u)/u, que tende a 1.\n\n0 supõe que a diferença dos logaritmos, que vai a zero, vença o fator x. +∞ supõe o contrário. e é o limite de (1 + 1/x)ˣ, antes de aplicar o logaritmo. E ln 2 é o valor da expressão em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "A função f vale sen(ax)/x para x < 0 e 3 + x para x ≥ 0, em que a é uma constante. Para que valor de a os limites laterais de f em x = 0 são iguais?",
    opcoes: [
      "a = 1",
      "a = 1/3",
      "a = 0",
      "Nenhum valor de a",
      "a = 3",
    ],
    correta: 4,
    explicacao:
      "Pela esquerda, sen(ax)/x = a · sen(ax)/(ax), que tende a a · 1 = a. Pela direita, 3 + x tende a 3. Os laterais são iguais quando a = 3; nesse caso, o limite existe e vale 3, igual a f(0), e f fica contínua em 0.\n\na = 1 usa o limite fundamental sem o fator a. a = 1/3 inverte a relação. a = 0 anula o seno, e o limite pela esquerda seria 0, diferente de 3. E existe, sim, um valor de a.",
  },
  {
    materia: "calculo",
    tema: "Limites laterais, infinitos e no infinito",
    dificuldade: "dificil",
    enunciado:
      "Com x tendendo a −∞, a soma x + √(x² + 4x) é uma indeterminação do tipo −∞ + ∞. Qual é o seu limite?",
    opcoes: [
      "2",
      "0",
      "−∞",
      "4",
      "−2",
    ],
    correta: 4,
    explicacao:
      "É uma indeterminação −∞ + ∞. Multiplicando e dividindo por √(x² + 4x) − x: [(x² + 4x) − x²]/[√(x² + 4x) − x] = 4x/[√(x² + 4x) − x]. Para x negativo, √(x² + 4x) = |x|√(1 + 4/x) = −x√(1 + 4/x). Dividindo por −x: −4/[√(1 + 4/x) + 1], que tende a −4/2 = −2.\n\n2 trata √(x²) como x, o que só vale para x positivo: é o erro de sinal típico em −∞. 0 supõe que as parcelas se cancelem por inteiro. −∞ supõe que x domine a raiz. E 4 esquece de dividir pela soma do denominador.",
  },
];
