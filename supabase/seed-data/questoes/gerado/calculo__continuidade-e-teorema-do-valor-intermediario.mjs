/* Continuidade e teorema do valor intermediário (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__continuidade-e-teorema-do-valor-intermediario.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__continuidade-e-teorema-do-valor-intermediario.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Qual é a condição que define a continuidade de uma função f num ponto a do seu domínio?",
    opcoes: [
      "f(a) existe",
      "f(a) existe, o limite de f(x) em a existe e os dois são iguais",
      "O limite de f(x) quando x tende a a existe",
      "f(a) existe e o limite de f(x) em a também existe",
      "f é derivável em a",
    ],
    correta: 1,
    explicacao:
      "Uma função é contínua em a quando três coisas acontecem juntas: f(a) existe, o limite de f(x) quando x tende a a existe, e esse limite é igual a f(a). Em palavras: os valores de f perto de a se aproximam exatamente do valor em a, e o gráfico passa pelo ponto sem saltos nem buracos.\n\n“f(a) existe” sozinho não basta: uma função de salto tem valor no ponto. O limite existir também não basta: pode ser diferente de f(a), como num buraco preenchido em outro lugar. Os dois existirem sem serem iguais é o caso da descontinuidade removível. E ser derivável é mais do que ser contínua: |x| é contínua em 0, mas não derivável.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Em que ponto a função f(x) = (x + 3)/(x − 2) é descontínua?",
    opcoes: [
      "x = 2",
      "x = −3",
      "x = 0",
      "x = 2 e x = −3",
      "Em nenhum ponto",
    ],
    correta: 0,
    explicacao:
      "Um quociente de polinômios é contínuo em todos os pontos em que o denominador não se anula. Aqui, x − 2 = 0 em x = 2, onde a função nem está definida (e cresce sem limite perto dele). Em qualquer outro ponto, f é contínua.\n\nx = −3 é onde o numerador se anula: ali f vale 0, o que não é descontinuidade nenhuma. x = 0 é um ponto comum, com f(0) = −3/2. “x = 2 e x = −3” junta o zero do denominador com o do numerador. E a função não é contínua em x = 2, porque nem existe ali.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "A função f vale (x² − 4)/(x − 2) para x ≠ 2, e f(2) = 1. Que tipo de descontinuidade ela tem em x = 2?",
    opcoes: [
      "De salto: os limites laterais são diferentes",
      "Infinita: a função cresce sem limite perto de 2",
      "A função é contínua em 2",
      "Removível, porque f(2) não existe",
      "Removível: o limite existe, mas é diferente de f(2)",
    ],
    correta: 4,
    explicacao:
      "Para x ≠ 2, (x² − 4)/(x − 2) = x + 2, que tende a 4 quando x tende a 2, pelos dois lados. O limite existe e vale 4, mas f(2) foi definido como 1: os dois não coincidem. É uma descontinuidade removível: bastaria redefinir f(2) = 4 para a função ficar contínua.\n\nNão é de salto, porque os limites laterais são iguais (ambos 4). Não é infinita, porque a função fica perto de 4. Não é contínua, porque f(2) ≠ 4. E f(2) existe: vale 1, só que é o valor errado.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "A função f vale sen x/x para x ≠ 0, e f(0) = k. Para que valor de k ela é contínua em x = 0?",
    opcoes: [
      "k = 0",
      "k = π",
      "Nenhum valor de k",
      "k = 1",
      "k = −1",
    ],
    correta: 3,
    explicacao:
      "Para ser contínua em 0, f(0) precisa ser igual ao limite de f(x) quando x tende a 0. Pelo limite fundamental, sen x/x tende a 1. Então k = 1. Com esse valor, a função fica contínua em todos os reais.\n\nk = 0 usa sen 0 = 0, esquecendo que o denominador também se anula. k = π não tem relação com o limite em 0. “Nenhum valor” supõe que a divisão por zero impeça a continuidade, mas ela só impede a fórmula de ser usada em 0. E k = −1 erra o sinal do limite.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Para f(x) = x³ + x − 1, tem-se f(0) = −1 e f(1) = 1. O que o teorema do valor intermediário garante sobre f no intervalo [0, 1]?",
    opcoes: [
      "Que f tem pelo menos uma raiz entre 0 e 1",
      "Que f tem exatamente duas raízes entre 0 e 1",
      "Que a raiz de f é x = 1/2",
      "Que f se anula em x = 0",
      "Nada, porque f(0) e f(1) têm sinais opostos",
    ],
    correta: 0,
    explicacao:
      "Um polinômio é contínuo, e f passa de −1 (negativo) para 1 (positivo) no intervalo. Pelo teorema do valor intermediário, assume todos os valores entre −1 e 1, inclusive o 0: existe pelo menos um c em (0, 1) com f(c) = 0. O teorema garante a existência, mas não diz onde está a raiz nem quantas são.\n\n“Exatamente duas” pede mais do que o teorema dá (e f, na verdade, tem uma só raiz ali). x = 1/2 não é raiz: f(1/2) = −3/8. f(0) = −1, e não 0. E os sinais opostos são justamente a hipótese que faz o teorema funcionar.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "A função f vale 1 para x < 0 e 2 para x ≥ 0. Que tipo de descontinuidade ela tem em x = 0?",
    opcoes: [
      "De salto",
      "Removível",
      "Infinita",
      "Não há descontinuidade",
      "Removível, com limite igual a 1,5",
    ],
    correta: 0,
    explicacao:
      "Pela esquerda, f vale 1 e tende a 1; pela direita, vale 2 e tende a 2. Os limites laterais existem, são finitos e diferentes: o gráfico dá um salto de 1 unidade em x = 0. É uma descontinuidade de salto, que nenhuma redefinição de f(0) consegue eliminar.\n\n“Removível” exigiria limites laterais iguais. “Infinita” exigiria valores crescendo sem limite, e aqui a função é limitada. Há descontinuidade, porque o limite em 0 não existe. E 1,5 é a média dos laterais, que não é limite de lado nenhum.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Em que conjunto a função f(x) = √(x − 1) é contínua?",
    opcoes: [
      "x > 1",
      "x ≥ 1",
      "Todos os reais",
      "x ≥ 0",
      "x ≠ 1",
    ],
    correta: 1,
    explicacao:
      "A raiz quadrada é contínua em todo o seu domínio. O domínio de f exige x − 1 ≥ 0, isto é, x ≥ 1, e a função é contínua em todos esses pontos. Em x = 1, ela é contínua à direita: f(1) = 0, e f(x) tende a 0 quando x tende a 1 pela direita (à esquerda, f nem está definida).\n\n“x > 1” exclui o 1, onde a função existe e é contínua à direita. “Todos os reais” esquece o domínio. “x ≥ 0” usa o domínio de √x, sem o deslocamento. E “x ≠ 1” inclui números menores que 1, em que a raiz não existe.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Em que pontos a função f(x) = cos(x² + 1) é contínua?",
    opcoes: [
      "Só para x ≥ 0",
      "Em todos os reais",
      "Só para x ≠ 0",
      "Só no intervalo [−1, 1]",
      "Em nenhum ponto",
    ],
    correta: 1,
    explicacao:
      "A função é a composta do cosseno, contínuo em todos os reais, com o polinômio x² + 1, também contínuo em todos os reais. A composta de funções contínuas é contínua: f é contínua em todos os reais, sem exceção.\n\n“Só para x ≥ 0” e “só para x ≠ 0” inventam restrições que nenhuma das duas funções tem. O intervalo [−1, 1] é a imagem do cosseno, e não o conjunto em que ele é contínuo. E “em nenhum ponto” contradiz a continuidade das duas funções que compõem f.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Uma função f é contínua em [1, 3], com f(1) = −2 e f(3) = 5. Qual dos valores a seguir ela assume, com certeza, em algum ponto do intervalo (1, 3)?",
    opcoes: [
      "6",
      "−3",
      "0",
      "10",
      "−5",
    ],
    correta: 2,
    explicacao:
      "Pelo teorema do valor intermediário, uma função contínua em [1, 3] assume todos os valores entre f(1) = −2 e f(3) = 5. Entre as alternativas, só o 0 está entre −2 e 5: existe algum c em (1, 3) com f(c) = 0.\n\n6 e 10 estão acima de 5, e −3 e −5 estão abaixo de −2. A função até pode atingir esses valores (nada impede que ela suba além de 5 no meio do caminho), mas o teorema não garante: uma função crescente de −2 a 5, por exemplo, nunca passaria por eles.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "A função ⌊x⌋ dá o maior inteiro menor ou igual a x. Em quais pontos ela é descontínua?",
    opcoes: [
      "Só em x = 0",
      "Em nenhum ponto",
      "Nos números não inteiros",
      "Em todos os pontos",
      "Nos números inteiros",
    ],
    correta: 4,
    explicacao:
      "Entre dois inteiros consecutivos, ⌊x⌋ é constante: vale 1 em [1, 2), 2 em [2, 3), e assim por diante. Em cada inteiro n, o limite pela esquerda é n − 1, e o pela direita é n: o gráfico sobe um degrau. Então ⌊x⌋ é descontínua (com salto) em todos os inteiros, e contínua em todos os outros pontos.\n\n“Só em x = 0” esquece que o degrau se repete em todo inteiro. “Em nenhum ponto” ignora os degraus. Nos não inteiros a função é constante perto do ponto, e portanto contínua. E ela não é descontínua em todos os pontos, só nos degraus.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Que tipo de descontinuidade a função f(x) = 1/x² tem em x = 0?",
    opcoes: [
      "Infinita",
      "Removível",
      "De salto",
      "É contínua em 0",
      "Removível, com limite 0",
    ],
    correta: 0,
    explicacao:
      "Perto de 0, pelos dois lados, 1/x² cresce sem limite: os limites laterais são +∞. Quando a função explode perto do ponto, a descontinuidade é infinita, e a reta x = 0 é uma assíntota vertical. Nenhum valor atribuído a f(0) torna a função contínua.\n\n“Removível” exigiria um limite finito. “De salto” exigiria limites laterais finitos e diferentes. f não é contínua em 0, onde nem está definida. E o limite não é 0: é o denominador que tende a 0, e o quociente cresce.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "facil",
    enunciado:
      "Em que conjunto a função f(x) = x/(x² + 1) é contínua?",
    opcoes: [
      "Para x ≠ ±1",
      "Para x ≠ 0",
      "Para x ≠ −1",
      "Em todos os reais",
      "Só para x > 0",
    ],
    correta: 3,
    explicacao:
      "Um quociente de polinômios é contínuo onde o denominador não se anula. Como x² + 1 ≥ 1 para todo x real, o denominador nunca é zero, e f é contínua em todos os reais.\n\nx ≠ ±1 resolve x² − 1 = 0, com o sinal trocado: são os zeros de x² − 1, e não de x² + 1. x ≠ 0 exclui o zero do numerador, que não causa problema nenhum (f(0) = 0). x ≠ −1 também confunde o denominador. E “só para x > 0” inventa uma restrição inexistente.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale x² + k para x ≤ 2 e 3x − 1 para x > 2. Para que valor de k ela é contínua em todos os reais?",
    opcoes: [
      "k = 5",
      "k = −1",
      "k = 1",
      "k = 3",
      "Nenhum valor de k",
    ],
    correta: 2,
    explicacao:
      "Cada trecho é um polinômio, contínuo no seu intervalo; o único ponto a verificar é a junção, x = 2. Pela esquerda (e em x = 2), f vale 2² + k = 4 + k. Pela direita, 3x − 1 tende a 5. A continuidade exige 4 + k = 5, e k = 1.\n\nk = 5 iguala k ao valor da direita, esquecendo o 4 que vem de x². k = −1 erra o sinal ao isolar k. k = 3 usa x no lugar de x² no primeiro trecho, fazendo 2 + k = 5. E existe, sim, um valor de k: a condição é uma única equação do primeiro grau.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale x + 1 para x < 1, ax + b para 1 ≤ x < 3, e x² para x ≥ 3. Para que valores de a e b ela é contínua em todos os reais?",
    opcoes: [
      "a = 7/2 e b = −3/2",
      "a = 3 e b = −1",
      "a = 7/2 e b = 3/2",
      "a = 2 e b = 0",
      "a = 1 e b = 1",
    ],
    correta: 0,
    explicacao:
      "Há duas junções. Em x = 1, o trecho da esquerda tende a 1 + 1 = 2, e o do meio vale a + b: a + b = 2. Em x = 3, o do meio tende a 3a + b, e o da direita vale 3² = 9: 3a + b = 9. Subtraindo as equações, 2a = 7, a = 7/2, e b = 2 − 7/2 = −3/2.\n\n“a = 3 e b = −1” satisfaz a primeira junção, mas dá 3a + b = 8 na segunda. “a = 7/2 e b = 3/2” erra o sinal de b. “a = 2 e b = 0” satisfaz só a primeira junção. E “a = 1 e b = 1” também: dá 4 em x = 3, e não 9.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f(x) = (x² − 5x + 6)/(x − 3) não está definida em x = 3. Que valor deve ser atribuído a f(3) para torná-la contínua nesse ponto?",
    opcoes: [
      "0",
      "3",
      "−1",
      "Nenhum, porque a descontinuidade é infinita",
      "1",
    ],
    correta: 4,
    explicacao:
      "Fatorando o numerador pelas raízes 2 e 3: x² − 5x + 6 = (x − 2)(x − 3). Para x ≠ 3, f(x) = x − 2, que tende a 1 quando x tende a 3. A descontinuidade é removível, e definir f(3) = 1 a torna contínua.\n\n0 toma o numerador nulo como resultado. 3 é o próprio ponto. −1 é o valor de x − 2 em x = 1, e não em x = 3. E a descontinuidade não é infinita, porque o fator (x − 3) se cancela, e a função fica perto de 1.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A equação x³ − 2x − 5 = 0 tem uma raiz no intervalo [2, 3], porque f(2) = −1 e f(3) = 16. Depois de um passo do método da bisseção, em que intervalo a raiz fica localizada?",
    opcoes: [
      "[2,5; 3]",
      "[2; 2,5]",
      "[2; 3]",
      "[1; 2]",
      "[2,25; 2,5]",
    ],
    correta: 1,
    explicacao:
      "O método da bisseção divide o intervalo ao meio e fica com a metade em que há troca de sinal. No ponto médio, f(2,5) = 15,625 − 5 − 5 = 5,625, positivo. Como f(2) = −1 é negativo, a troca de sinal acontece entre 2 e 2,5: a raiz está em [2; 2,5].\n\n[2,5; 3] fica com a metade em que f é positiva nos dois extremos (5,625 e 16), sem troca de sinal. [2; 3] é o intervalo original, antes do passo. [1; 2] sai do intervalo em que a raiz foi garantida. E [2,25; 2,5] já é o resultado do segundo passo, e não do primeiro.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Para f(x) = x³ − 3x + 1, tem-se f(−2) = −1, f(0) = 1, f(1) = −1 e f(2) = 3. Quantas raízes reais o teorema do valor intermediário garante, no mínimo, a partir desses valores?",
    opcoes: [
      "1",
      "2",
      "0",
      "4",
      "3",
    ],
    correta: 4,
    explicacao:
      "Cada troca de sinal entre pontos consecutivos garante uma raiz no intervalo entre eles: de −1 para 1 em (−2, 0), de 1 para −1 em (0, 1) e de −1 para 3 em (1, 2). São três intervalos disjuntos, e portanto pelo menos três raízes. Como o polinômio tem grau 3, são exatamente três.\n\n1 considera só a troca entre os extremos, −2 e 2. 2 esquece uma das trocas. 0 supõe que o teorema só se aplique quando algum f(a) já é zero. E 4 é impossível para um polinômio de grau 3, que tem no máximo três raízes.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale |x|/x para x ≠ 0, e f(0) = 0. Como se classifica o seu comportamento em x = 0?",
    opcoes: [
      "Descontinuidade de salto, com limites laterais −1 e 1",
      "Descontinuidade removível",
      "Descontinuidade infinita",
      "Contínua, porque f(0) = 0 é a média dos limites laterais",
      "Descontinuidade de salto, com limites laterais 0 e 1",
    ],
    correta: 0,
    explicacao:
      "Para x > 0, |x|/x = 1; para x < 0, |x|/x = −1. Os limites laterais são −1 (esquerda) e 1 (direita): finitos e diferentes. É uma descontinuidade de salto, e o valor atribuído a f(0) não muda isso.\n\n“Removível” exigiria limites laterais iguais. “Infinita” exigiria valores crescendo sem limite. Ser a média dos laterais não torna a função contínua: seria preciso que os dois laterais fossem iguais a f(0). E o limite pela esquerda é −1, e não 0.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Por que a equação cos x = x tem pelo menos uma solução entre 0 e π/2?",
    opcoes: [
      "Porque cos 0 = 1 e cos(π/2) = 0",
      "Porque toda equação trigonométrica tem solução",
      "Porque x = π/4 é solução",
      "Porque g(x) = cos x − x é contínua e troca de sinal no intervalo",
      "Porque cos x e x são iguais em x = 0",
    ],
    correta: 3,
    explicacao:
      "Considere g(x) = cos x − x, contínua por ser diferença de funções contínuas. g(0) = 1 − 0 = 1 > 0 e g(π/2) = 0 − π/2 < 0. Pelo teorema do valor intermediário, g se anula em algum ponto entre 0 e π/2, e nesse ponto cos x = x (a solução é x ≅ 0,739).\n\ncos 0 = 1 e cos(π/2) = 0 são valores do cosseno sozinho, sem compará-lo com x. Nem toda equação trigonométrica tem solução: cos x = 2 não tem. π/4 não é solução: cos(π/4) ≅ 0,707, e π/4 ≅ 0,785. E em x = 0, cos 0 = 1 ≠ 0.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Em quais pontos do intervalo aberto (0, 2π) a função tg x é descontínua?",
    opcoes: [
      "π/2",
      "π e 3π/2",
      "π",
      "π/2 e 3π/2",
      "π/4 e 3π/4",
    ],
    correta: 3,
    explicacao:
      "tg x = sen x/cos x é contínua onde o cosseno não se anula. No intervalo (0, 2π), cos x = 0 em x = π/2 e em x = 3π/2, e aí a tangente tem descontinuidades infinitas (assíntotas verticais). Em todos os outros pontos, é contínua.\n\n“Só π/2” esquece o zero do cosseno no 3º quadrante. π é um zero do seno, em que a tangente vale 0 e é contínua; por isso “π e 3π/2” e “π” erram. E π/4 e 3π/4 são pontos em que a tangente vale 1 e −1, sem problema algum.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale sen(2x)/x para x ≠ 0, e f(0) = 2. Ela é contínua em x = 0?",
    opcoes: [
      "Não: o limite em 0 vale 1",
      "Sim: o limite em 0 vale 2, igual a f(0)",
      "Não: sen(2x)/x não está definida em 0",
      "Não: o limite em 0 vale 0",
      "Sim: o limite em 0 vale 1, próximo de f(0)",
    ],
    correta: 1,
    explicacao:
      "Escrevendo sen(2x)/x = 2 · sen(2x)/(2x), o limite quando x tende a 0 é 2 · 1 = 2, que coincide com f(0) = 2. A função é contínua em 0: o valor escolhido para f(0) foi exatamente o limite.\n\n1 aplica o limite fundamental sem ajustar o argumento 2x. A expressão sen(2x)/x não está definida em 0, mas f está, porque f(0) foi definido à parte. 0 toma o numerador nulo como resultado. E continuidade exige igualdade, e não proximidade: um limite 1 com f(0) = 2 seria uma descontinuidade.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Em que conjunto a função f(x) = ln(x − 1) + √(5 − x) é contínua?",
    opcoes: [
      "1 ≤ x ≤ 5",
      "x > 1",
      "x ≤ 5",
      "1 < x < 5",
      "1 < x ≤ 5",
    ],
    correta: 4,
    explicacao:
      "As duas parcelas são contínuas nos seus domínios, e a soma é contínua onde as duas existem. O logaritmo exige x − 1 > 0 (x > 1), e a raiz exige 5 − x ≥ 0 (x ≤ 5). Juntando: 1 < x ≤ 5. Em x = 5, a raiz vale 0 e a função existe, contínua à esquerda.\n\n“1 ≤ x ≤ 5” inclui o 1, em que ln 0 não existe. “x > 1” esquece a raiz. “x ≤ 5” esquece o logaritmo. E “1 < x < 5” exclui o 5, em que a função existe.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Uma função f é contínua em [0, 4], com f(0) = 3 e f(4) = −1. Qual das equações a seguir certamente tem solução no intervalo (0, 4)?",
    opcoes: [
      "f(x) = 4",
      "f(x) = −2",
      "f(x) = 2",
      "f(x) = 5",
      "f(x) = −3",
    ],
    correta: 2,
    explicacao:
      "Pelo teorema do valor intermediário, f assume todos os valores entre −1 e 3 em algum ponto de (0, 4). Entre as alternativas, só o 2 está entre −1 e 3: a equação f(x) = 2 tem, com certeza, pelo menos uma solução.\n\n4 e 5 estão acima de 3, e −2 e −3 estão abaixo de −1. A função pode até atingir esses valores, se oscilar no meio do caminho, mas o teorema não garante: uma função que decresce de 3 a −1, por exemplo, nunca passa por eles.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Como se comporta a função f(x) = 1/(1 + e^(1/x)) perto de x = 0?",
    opcoes: [
      "Tem um salto: tende a 1 pela esquerda e a 0 pela direita",
      "Tem descontinuidade removível: os dois limites laterais valem 1/2",
      "Tem descontinuidade infinita",
      "Tem um salto: tende a 0 pela esquerda e a 1 pela direita",
      "É contínua em 0",
    ],
    correta: 0,
    explicacao:
      "Pela direita, 1/x tende a +∞, e^(1/x) cresce sem limite, e f tende a 0. Pela esquerda, 1/x tende a −∞, e^(1/x) tende a 0, e f tende a 1/(1 + 0) = 1. Os limites laterais são finitos e diferentes: é uma descontinuidade de salto.\n\n1/2 é o valor que se obteria usando e⁰ = 1, como se 1/x tendesse a 0. A descontinuidade não é infinita: f fica sempre entre 0 e 1. O salto com 0 à esquerda e 1 à direita troca os lados. E a função não é contínua, porque os laterais diferem.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale x · sen(1/x) para x ≠ 0, e f(0) = 0. Ela é contínua em x = 0?",
    opcoes: [
      "Não: sen(1/x) oscila, e o limite não existe",
      "Não: a expressão não está definida em 0",
      "Sim: porque sen(1/x) vale 0 em x = 0",
      "Não: o limite em 0 vale 1",
      "Sim: pelo teorema do confronto, o limite em 0 vale 0 = f(0)",
    ],
    correta: 4,
    explicacao:
      "Como |sen(1/x)| ≤ 1, temos −|x| ≤ x sen(1/x) ≤ |x|. Os dois lados tendem a 0 e, pelo teorema do confronto, x sen(1/x) também tende a 0. O limite coincide com f(0) = 0: a função é contínua em 0, apesar das oscilações.\n\nA oscilação de sen(1/x) é amortecida pelo fator x, e o limite existe. A expressão não está definida em 0, mas f está, porque f(0) foi definido à parte. sen(1/x) nem existe em x = 0. E 1 é o limite de x sen(1/x) quando x tende ao infinito, e não a 0.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f(x) = 1/x tem f(−1) = −1 e f(1) = 1, mas não tem raiz nenhuma. Por que isso não contradiz o teorema do valor intermediário?",
    opcoes: [
      "Porque f(−1) e f(1) têm sinais opostos",
      "Porque f é uma função ímpar",
      "Porque o intervalo [−1, 1] é simétrico",
      "Porque f não é contínua em [−1, 1]: não está definida em x = 0",
      "Contradiz: pelo teorema, 1/x deveria ter uma raiz em (−1, 1)",
    ],
    correta: 3,
    explicacao:
      "O teorema exige que a função seja contínua em todo o intervalo fechado [a, b]. 1/x não está definida em x = 0, que pertence a [−1, 1], e perto de 0 salta de −∞ para +∞. Sem a hipótese de continuidade, a conclusão não vale, e não há contradição.\n\nOs sinais opostos são justamente a hipótese que o teorema usa, e não a causa do problema. Ser ímpar ou o intervalo ser simétrico não tem relação com o teorema: x³ também é ímpar, no mesmo intervalo, e tem raiz. E não há contradição, porque falta uma das hipóteses.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "O método da bisseção começa num intervalo de comprimento 1 que contém uma raiz, e cada passo divide o intervalo ao meio. Quantos passos, no mínimo, garantem um intervalo de comprimento menor que 0,01?",
    opcoes: [
      "100",
      "7",
      "10",
      "6",
      "50",
    ],
    correta: 1,
    explicacao:
      "Depois de n passos, o comprimento é 1/2ⁿ. É preciso 1/2ⁿ < 0,01, isto é, 2ⁿ > 100. Como 2⁶ = 64 e 2⁷ = 128, o menor n é 7. A precisão melhora depressa: cada passo ganha um fator 2, e cada três passos, quase um fator 10.\n\n100 divide o intervalo em 100 partes, como se cada passo reduzisse o comprimento em 0,01. 10 corresponde a 2¹⁰ = 1.024, mais passos do que o necessário. 6 dá 1/64 ≅ 0,0156, ainda maior que 0,01. E 50 é metade de 100, sem relação com a bisseção.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale (x³ − 8)/(x − 2) para x ≠ 2, e f(2) = c. Para que valor de c a função é contínua em todos os reais?",
    opcoes: [
      "c = 0",
      "c = 4",
      "c = 8",
      "c = 3",
      "c = 12",
    ],
    correta: 4,
    explicacao:
      "Fatorando a diferença de cubos: x³ − 8 = (x − 2)(x² + 2x + 4). Para x ≠ 2, f(x) = x² + 2x + 4, que tende a 4 + 4 + 4 = 12 quando x tende a 2. A função é contínua em 2 se c = 12, e em todos os outros pontos ela já é contínua.\n\n0 toma o numerador nulo como resultado. 4 usa só o termo x² do fator. 8 é o número subtraído de x³. E 3 é o expoente de x³, e não o valor do limite.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Uma função f é contínua em [0, 1] e só assume valores em [0, 1]. O que se pode garantir sobre ela?",
    opcoes: [
      "f é crescente em todo o intervalo [0, 1]",
      "Existe c em [0, 1] com f(c) = c",
      "f(0) = 0 e f(1) = 1",
      "f tem pelo menos uma raiz em [0, 1]",
      "f(1/2) = 1/2, no ponto médio",
    ],
    correta: 1,
    explicacao:
      "Considere g(x) = f(x) − x, contínua. Em x = 0, g(0) = f(0) ≥ 0; em x = 1, g(1) = f(1) − 1 ≤ 0. Se algum desses valores for zero, o ponto procurado é o extremo; senão, g troca de sinal e, pelo teorema do valor intermediário, se anula em algum c: f(c) = c. É o teorema do ponto fixo em dimensão 1.\n\nf não precisa ser crescente: f(x) = 1 − x é decrescente e satisfaz as hipóteses. f(0) pode ser diferente de 0: f(x) = (x + 1)/2 tem f(0) = 1/2. Essa mesma função nunca se anula, e por isso a raiz não é garantida. E o ponto fixo não precisa ser 1/2: para (x + 1)/2, ele é x = 1.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Onde a função f(x) = (x − 1)/(x² − 3x + 2) é descontínua, e de que tipo são as descontinuidades?",
    opcoes: [
      "Infinitas em x = 1 e em x = 2",
      "Removíveis em x = 1 e em x = 2",
      "Removível em x = 1 e infinita em x = 2",
      "Infinita em x = 1 e removível em x = 2",
      "Só uma, infinita, em x = 2",
    ],
    correta: 2,
    explicacao:
      "O denominador se fatora como (x − 1)(x − 2), e a função não está definida em x = 1 nem em x = 2. Para x ≠ 1, f(x) = 1/(x − 2). Em x = 1, o limite existe e vale 1/(1 − 2) = −1: a descontinuidade é removível. Em x = 2, f cresce sem limite: a descontinuidade é infinita.\n\n“Infinitas nos dois pontos” não nota que o fator (x − 1) se cancela. “Removíveis nos dois” esquece que, em x = 2, o denominador continua se anulando depois da simplificação. A inversão dos tipos troca os dois pontos. E há duas descontinuidades: a de x = 1 existe, mesmo sendo removível, porque f(1) não está definido.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f(x) = √x é contínua em x = 0, que é o extremo do seu domínio?",
    opcoes: [
      "Sim: pela direita, √x tende a 0, que é f(0)",
      "Não, porque o limite pela esquerda não existe",
      "Não, porque em x = 0 a raiz vale zero",
      "Sim, e o limite pela esquerda também vale 0",
      "Não, porque a raiz quadrada não é contínua",
    ],
    correta: 0,
    explicacao:
      "Num extremo do domínio, a continuidade se verifica pelo único lado que existe. Pela direita, √x tende a √0 = 0, que é igual a f(0): f é contínua à direita em 0, e isso basta para dizer que ela é contínua em todo o seu domínio, [0, +∞).\n\nO limite pela esquerda não existe porque f nem está definida para x < 0, e isso não é exigido num extremo do domínio. A raiz valer zero em x = 0 é justamente o que torna f(0) igual ao limite. Pela esquerda não há limite nenhum para valer 0. E a raiz quadrada é contínua em todo o seu domínio.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Para p(x) = x⁴ − 3x − 2, em qual dos intervalos o teorema do valor intermediário garante uma raiz positiva?",
    opcoes: [
      "(0, 1)",
      "(2, 3)",
      "(−1, 0)",
      "(1, 2)",
      "(3, 4)",
    ],
    correta: 3,
    explicacao:
      "Basta procurar um intervalo de números positivos em que p troque de sinal. p(1) = 1 − 3 − 2 = −4 e p(2) = 16 − 6 − 2 = 8: há troca de sinal em (1, 2), e p, contínua, tem ali uma raiz positiva.\n\nEm (0, 1), p(0) = −2 e p(1) = −4 não trocam de sinal. Em (2, 3) e (3, 4), p é positivo nos extremos (8, 70 e 242). E em (−1, 0), p(−1) = 2 e p(0) = −2 trocam de sinal, mas a raiz garantida ali é negativa.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Se f é contínua num ponto a e h é descontínua em a, o que se pode dizer do produto g(x) = f(x) · h(x) nesse ponto?",
    opcoes: [
      "É sempre descontínuo em a, como a função h",
      "É sempre contínuo em a, por causa de f",
      "Pode ser contínuo ou não, dependendo das funções",
      "É contínuo em a só quando f(a) ≠ 0",
      "Não está definido no ponto a",
    ],
    correta: 2,
    explicacao:
      "Não há regra geral. Com f(x) = x e h(x) = 1 para x ≥ 0 e −1 para x < 0, o produto é |x|, contínuo em 0: o fator f, que se anula em 0, amortece o salto de h. Já com f(x) = 1, o produto é o próprio h, descontínuo. A conclusão depende das funções.\n\n“Sempre descontínuo” é desmentido pelo primeiro exemplo. “Sempre contínuo”, pelo segundo. “Só se f(a) ≠ 0” inverte a situação: é justamente f(a) = 0 que permite a continuidade no primeiro exemplo. E o produto está definido em a sempre que f e h estiverem.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Uma pessoa sobe uma montanha num dia, das 6 h às 12 h, e desce no dia seguinte pelo mesmo caminho, também das 6 h às 12 h, com velocidades que variam. Existe algum horário em que ela esteve exatamente no mesmo ponto do caminho nos dois dias?",
    opcoes: [
      "Só se ela andar com a mesma velocidade nos dois dias",
      "Não, em geral",
      "Só se o caminho for reto",
      "Sim, sempre: a diferença entre as posições nos dois dias troca de sinal",
      "Sim, exatamente às 9 h",
    ],
    correta: 3,
    explicacao:
      "Sejam s(t) a posição ao subir e d(t) a posição ao descer, medidas ao longo do caminho, ambas contínuas no tempo. A diferença D(t) = s(t) − d(t) começa negativa às 6 h (s na base, d no topo) e termina positiva às 12 h (s no topo, d na base). Pelo teorema do valor intermediário, D se anula em algum horário: nesse instante, as posições coincidem.\n\nA velocidade não importa: o argumento só usa a continuidade. “Não, em geral” contradiz o teorema. O formato do caminho também não importa, porque as posições são medidas ao longo dele. E o horário exato depende das velocidades: 9 h só por coincidência.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Usando a continuidade do cosseno, qual é o limite de cos(sen x/x) quando x tende a 0?",
    opcoes: [
      "1",
      "0",
      "sen 1",
      "cos 1",
      "Não existe",
    ],
    correta: 3,
    explicacao:
      "Como o cosseno é contínuo, o limite pode entrar na função: lim cos(sen x/x) = cos(lim sen x/x) = cos 1 ≅ 0,54. É a propriedade das funções contínuas: o limite da composta é a função aplicada ao limite do argumento.\n\n1 é o valor de cos 0, como se o argumento tendesse a 0. 0 toma sen 0 = 0 sem considerar o quociente. sen 1 troca o cosseno pelo seno. E o limite existe, porque o argumento tem limite e o cosseno é contínuo.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale x² − 1 para x < 2 e 2x − 1 para x ≥ 2. Ela é contínua em todos os reais?",
    opcoes: [
      "Sim: os dois trechos valem 3 na junção, x = 2",
      "Não: há um salto em x = 2",
      "Não: é descontínua em x = 1",
      "Não: os limites laterais em 2 são 3 e 4",
      "Não: funções definidas por partes são sempre descontínuas",
    ],
    correta: 0,
    explicacao:
      "Cada trecho é um polinômio, contínuo no seu intervalo; basta verificar a junção. Pela esquerda, x² − 1 tende a 4 − 1 = 3; pela direita (e em x = 2), 2x − 1 vale 3. Os três valores coincidem, e f é contínua em x = 2 e, portanto, em todos os reais.\n\nNão há salto, porque os dois trechos se encontram no mesmo valor. x = 1 é só uma raiz de x² − 1, e não uma descontinuidade. O limite pela direita é 3, e não 4. E funções definidas por partes podem ser contínuas, como esta.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale sen(1/x) para x ≠ 0, e f(0) = 0. O que acontece com ela perto de x = 0?",
    opcoes: [
      "Não tem limite em 0: sen(1/x) oscila entre −1 e 1",
      "Tem descontinuidade removível em x = 0",
      "Tem descontinuidade de salto em x = 0",
      "Tem descontinuidade infinita em x = 0",
      "É contínua, porque f(0) = 0",
    ],
    correta: 0,
    explicacao:
      "Quando x se aproxima de 0, 1/x cresce sem limite, e sen(1/x) percorre todos os valores entre −1 e 1 infinitas vezes, em intervalos cada vez menores. Não se aproxima de valor nenhum, e o limite não existe, nem de um lado só. A descontinuidade não é de nenhum dos tipos clássicos: é uma descontinuidade essencial, por oscilação.\n\n“Removível” exigiria um limite. “Salto” exigiria limites laterais, ainda que diferentes. “Infinita” exigiria valores crescendo sem limite, e aqui a função fica entre −1 e 1. E f(0) = 0 não basta: seria preciso que o limite existisse e valesse 0.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Em qual intervalo a equação eˣ = 3 − x tem uma solução, segundo o teorema do valor intermediário?",
    opcoes: [
      "(1, 2)",
      "(0, 1)",
      "(−1, 0)",
      "(2, 3)",
      "(−2, −1)",
    ],
    correta: 1,
    explicacao:
      "Escrevendo g(x) = eˣ + x − 3, contínua, a equação é g(x) = 0. g(0) = 1 + 0 − 3 = −2 e g(1) = e + 1 − 3 ≅ 0,72: há troca de sinal, e uma solução em (0, 1) (é x ≅ 0,79).\n\nEm (1, 2), g é positiva nos dois extremos (0,72 e 6,39). Em (−1, 0) e em (−2, −1), g é negativa nos dois extremos. E em (2, 3), g é positiva nos extremos, e crescente, sem zero nenhum.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "Às 6 h, a temperatura numa cidade era de 12 °C, e às 14 h, de 26 °C. Supondo que ela varie continuamente, o que o teorema do valor intermediário garante?",
    opcoes: [
      "Que a temperatura subiu 1,75 °C por hora",
      "Que a temperatura máxima do período foi 26 °C",
      "Que, em algum instante entre 6 h e 14 h, a temperatura foi exatamente 20 °C",
      "Que às 10 h a temperatura era de 19 °C",
      "Nada, porque a temperatura pode ter caído em algum momento",
    ],
    correta: 2,
    explicacao:
      "Uma função contínua assume todos os valores entre os seus valores nos extremos do intervalo. Como 20 °C está entre 12 °C e 26 °C, em algum instante a temperatura foi exatamente 20 °C, qualquer que tenha sido a sua variação no meio do caminho.\n\n1,75 °C por hora é a taxa média (14 °C em 8 h), e não um ritmo garantido a cada hora. A temperatura pode ter passado de 26 °C antes de descer até esse valor. 19 °C às 10 h é o que daria um aumento linear, que o teorema não garante. E quedas intermediárias não atrapalham: o teorema só exige continuidade.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "media",
    enunciado:
      "A função f vale kx² para x ≤ 1 e 2x + k para x > 1. Para que valor de k ela é contínua em x = 1?",
    opcoes: [
      "k = 2",
      "Nenhum valor de k",
      "k = 1",
      "k = 0",
      "Qualquer valor de k",
    ],
    correta: 1,
    explicacao:
      "Pela esquerda (e em x = 1), f vale k · 1² = k. Pela direita, 2x + k tende a 2 + k. A continuidade exigiria k = 2 + k, isto é, 0 = 2, o que é impossível. Para qualquer k, os dois trechos diferem por 2 na junção: há sempre um salto de 2 unidades.\n\nk = 2, k = 1 e k = 0 deixam, todos, o mesmo salto de 2 entre os trechos. E “qualquer valor” inverte a conclusão: nenhum valor serve, porque o k aparece dos dois lados e se cancela.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Quantas raízes reais tem a equação x⁵ + x − 1 = 0?",
    opcoes: [
      "Nenhuma",
      "Três",
      "Exatamente uma",
      "Cinco",
      "Duas",
    ],
    correta: 2,
    explicacao:
      "Existência: f(x) = x⁵ + x − 1 é contínua, com f(0) = −1 e f(1) = 1; pelo teorema do valor intermediário, há ao menos uma raiz em (0, 1). Unicidade: f é estritamente crescente, porque x⁵ e x são crescentes, e a soma de funções crescentes é crescente; uma função estritamente crescente cruza o zero no máximo uma vez. Há, portanto, exatamente uma raiz real (x ≅ 0,755).\n\n“Nenhuma” contradiz a troca de sinal entre 0 e 1. Três e cinco confundem o grau do polinômio, que limita o número de raízes, com o número de raízes reais: as outras quatro são complexas. E duas é impossível para uma função estritamente crescente.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Considere f(x) = (x² − ax + 2)/(x − 1) para x ≠ 1, com f(1) = b. Quais valores das constantes a e b eliminam a descontinuidade em x = 1?",
    opcoes: [
      "a = 3 e b = 1",
      "a = 1 e b = 0",
      "a = 3 e b = −1",
      "a = −3 e b = −1",
      "a = 2 e b = −1",
    ],
    correta: 2,
    explicacao:
      "Como o denominador se anula em x = 1, o limite só pode ser finito se o numerador também se anular ali: 1 − a + 2 = 0, e a = 3. Com a = 3, x² − 3x + 2 = (x − 1)(x − 2), e f(x) = x − 2 para x ≠ 1, que tende a −1. Para a continuidade, b = −1.\n\n“a = 3 e b = 1” erra o sinal do limite. “a = 1 e b = 0” não anula o numerador em x = 1, e o limite nem existe. “a = −3” erra o sinal ao resolver 3 − a = 0. E “a = 2” também não anula o numerador: dá 1 − 2 + 2 = 1.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Pelo método da bisseção, partindo do intervalo [1, 2], quantos passos, no mínimo, garantem que a raiz de uma função contínua fique localizada num intervalo de comprimento menor que 10⁻³?",
    opcoes: [
      "1.000",
      "10",
      "3",
      "9",
      "20",
    ],
    correta: 1,
    explicacao:
      "A cada passo, o comprimento do intervalo cai à metade: depois de n passos, é 1/2ⁿ. É preciso 1/2ⁿ < 10⁻³, isto é, 2ⁿ > 1.000. Como 2⁹ = 512 e 2¹⁰ = 1.024, bastam 10 passos. Por isso se diz que a bisseção ganha cerca de três casas decimais a cada 10 passos.\n\n1.000 imagina que cada passo reduza o intervalo em 10⁻³. 3 confunde o expoente de 10⁻³ com o número de passos. 9 dá 1/512 ≅ 0,002, ainda maior que 10⁻³. E 20 é o dobro do necessário.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Uma função f é contínua em [0, 1], com f(0) = f(1). Existe, necessariamente, um ponto x em [0, 1/2] com f(x) = f(x + 1/2)?",
    opcoes: [
      "Só se f for derivável",
      "Nunca existe",
      "Sim, sempre existe",
      "Só se f for constante",
      "Só se f(1/2) = f(0)",
    ],
    correta: 2,
    explicacao:
      "Considere g(x) = f(x + 1/2) − f(x), contínua em [0, 1/2]. Então g(0) = f(1/2) − f(0) e g(1/2) = f(1) − f(1/2) = f(0) − f(1/2) = −g(0). Os valores de g nos extremos são opostos: ou os dois são zero, ou têm sinais contrários e, pelo teorema do valor intermediário, g se anula em algum ponto. Nesse ponto, f(x) = f(x + 1/2): há sempre uma corda horizontal de comprimento 1/2 no gráfico.\n\nDerivabilidade não é necessária: o argumento só usa continuidade. “Nunca existe” contradiz o argumento. Não é preciso que f seja constante: sen(2πx), por exemplo, serve. E f(1/2) = f(0) é só o caso em que o ponto procurado é o próprio x = 0.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Sendo ⌊x⌋ o maior inteiro menor ou igual a x, onde a função f(x) = ⌊x⌋ + ⌊−x⌋ é descontínua, e de que tipo são as descontinuidades?",
    opcoes: [
      "Nos inteiros, e as descontinuidades são de salto",
      "Em nenhum ponto",
      "Nos números que não são inteiros",
      "Nos inteiros, e as descontinuidades são removíveis",
      "Só em x = 0",
    ],
    correta: 3,
    explicacao:
      "Se x é inteiro, ⌊x⌋ = x e ⌊−x⌋ = −x, e f(x) = 0. Se x não é inteiro, ⌊−x⌋ = −⌊x⌋ − 1, e f(x) = −1. A função vale −1 em quase todos os pontos e 0 nos inteiros. Em cada inteiro, os dois limites laterais são −1, iguais entre si, mas diferentes do valor 0: são descontinuidades removíveis.\n\nNão há salto: os laterais coincidem, porque os saltos de ⌊x⌋ e de ⌊−x⌋ se compensam. A função não é contínua nos inteiros, onde vale 0 em vez de −1. Nos não inteiros, ela é constante perto do ponto, e contínua. E x = 0 é só um dos inteiros.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "A função f vale (e^(ax) − 1)/x para x ≠ 0, e f(0) = 3. Para que valor da constante a ela é contínua em x = 0?",
    opcoes: [
      "a = 1",
      "a = ln 3",
      "a = 3",
      "a = e³",
      "a = 1/3",
    ],
    correta: 2,
    explicacao:
      "Escrevendo (e^(ax) − 1)/x = a · (e^(ax) − 1)/(ax), o fator (eᵘ − 1)/u, com u = ax, tende a 1, e o limite é a. Para a continuidade em 0, o limite precisa valer f(0) = 3: a = 3.\n\na = 1 usa o limite fundamental sem o fator a. ln 3 e e³ misturam a exponencial com o valor 3, como se fosse preciso resolver eᵃ = 3 ou tomar a = e³. E a = 1/3 inverte a relação.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Todo polinômio de grau ímpar, com coeficientes reais, tem pelo menos uma raiz real. Qual é o argumento que justifica isso?",
    opcoes: [
      "O teorema fundamental da álgebra garante uma raiz real",
      "O termo independente é sempre uma raiz",
      "Polinômios de grau ímpar são sempre crescentes",
      "A soma dos coeficientes é sempre zero",
      "Os limites em +∞ e em −∞ têm sinais opostos, e o polinômio é contínuo",
    ],
    correta: 4,
    explicacao:
      "Num polinômio de grau ímpar, o termo de maior grau domina quando x cresce em módulo, e ele tem sinais opostos em +∞ e em −∞ (x³, por exemplo, vai a +∞ e a −∞). Então o polinômio assume valores positivos e negativos, e, por ser contínuo, o teorema do valor intermediário garante um zero entre eles.\n\nO teorema fundamental da álgebra garante raízes complexas, não necessariamente reais: x² + 1 não tem raiz real. O termo independente não é raiz: em x³ + x + 1, com termo independente 1, p(1) = 3. Polinômios de grau ímpar não precisam ser crescentes: x³ − 3x sobe, desce e volta a subir. E a soma dos coeficientes só é zero quando x = 1 é raiz, o que não é regra.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "A equação ln x + x − 2 = 0 tem uma única raiz. Em qual intervalo de comprimento 0,5 ela está?",
    opcoes: [
      "(1; 1,5)",
      "(2; 2,5)",
      "(0,5; 1)",
      "(2,5; 3)",
      "(1,5; 2)",
    ],
    correta: 4,
    explicacao:
      "g(x) = ln x + x − 2 é contínua e crescente para x > 0. Calculando: g(1) = 0 + 1 − 2 = −1; g(1,5) = ln 1,5 − 0,5 ≅ 0,405 − 0,5 = −0,095; g(2) = ln 2 ≅ 0,693. A troca de sinal acontece entre 1,5 e 2, e a raiz está em (1,5; 2) (é x ≅ 1,557).\n\nEm (1; 1,5), g é negativa nos dois extremos (−1 e −0,095). Em (2; 2,5) e em (2,5; 3), g já é positiva. E em (0,5; 1), g(0,5) = ln 0,5 − 1,5 ≅ −2,19 e g(1) = −1, ambos negativos.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Se o módulo |f| de uma função é contínuo num ponto a, a própria f é necessariamente contínua em a?",
    opcoes: [
      "Sim, sempre",
      "Sim, desde que f(a) ≥ 0",
      "Não, e |f| também deixa de ser contínua",
      "Não: f pode saltar entre valores opostos, como −1 e 1",
      "Só se f for um polinômio",
    ],
    correta: 3,
    explicacao:
      "Não. Um contraexemplo: f(x) = 1 para x ≥ 0 e f(x) = −1 para x < 0. f tem um salto em 0, mas |f(x)| = 1 para todo x, uma função constante e, portanto, contínua. O módulo apaga a diferença de sinal que causava o salto. A recíproca vale: se f é contínua, |f| também é.\n\n“Sim, sempre” é desmentido pelo contraexemplo. f(a) ≥ 0 também não salva: no exemplo, f(0) = 1 ≥ 0, e f continua descontínua. No exemplo, |f| é contínua, e não deixa de ser. E polinômios são sempre contínuos, o que torna a condição irrelevante.",
  },
  {
    materia: "calculo",
    tema: "Continuidade e teorema do valor intermediário",
    dificuldade: "dificil",
    enunciado:
      "Qual das funções a seguir, no intervalo indicado, não atinge um valor máximo?",
    opcoes: [
      "f(x) = x² em [−1, 2]",
      "f(x) = sen x em [0, π]",
      "f(x) = eˣ em [0, 1]",
      "f(x) = |x| em [−3, 3]",
      "f(x) = 1/x em (0, 1]",
    ],
    correta: 4,
    explicacao:
      "Pelo teorema de Weierstrass, uma função contínua num intervalo fechado e limitado atinge máximo e mínimo. As quatro últimas satisfazem as hipóteses: x² atinge 4 em x = 2; sen x atinge 1 em π/2; eˣ atinge e em x = 1; |x| atinge 3 nas extremidades. Já 1/x em (0, 1] está num intervalo que não é fechado: perto de 0, cresce sem limite, e não existe valor máximo.\n\nNas outras quatro, o intervalo é fechado e a função é contínua, e por isso o máximo existe. O que falha em 1/x é a hipótese do intervalo fechado: pelo extremo aberto, a função escapa.",
  },
];
