/* Regra da cadeia (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__regra-da-cadeia.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__regra-da-cadeia.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Pela regra da cadeia, qual é a derivada de f(x) = (3x + 1)⁵?",
    opcoes: [
      "15(3x + 1)⁴",
      "5(3x + 1)⁴",
      "3(3x + 1)⁴",
      "15(3x + 1)⁵",
      "5(3x + 1)⁴ + 3",
    ],
    correta: 0,
    explicacao:
      "A função é uma composição: a potência u⁵ aplicada a u = 3x + 1. A regra da cadeia deriva a de fora mantendo o miolo, 5u⁴ = 5(3x + 1)⁴, e multiplica pela derivada de dentro, u' = 3. Resultado: 15(3x + 1)⁴. Expandir o binômio daria o mesmo polinômio, com muito mais trabalho.\n\n5(3x + 1)⁴ esquece a derivada interna 3. 3(3x + 1)⁴ fica com a derivada interna, mas perde o expoente 5 que desce. 15(3x + 1)⁵ não diminui o expoente. E 5(3x + 1)⁴ + 3 soma a derivada interna em vez de multiplicá-la.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "O seno está aplicado a 2x na função f(x) = sen(2x). Qual expressão é a sua derivada?",
    opcoes: [
      "2cos(2x)",
      "cos(2x)",
      "2cos x",
      "−2sen(2x)",
      "2sen(2x)",
    ],
    correta: 0,
    explicacao:
      "Com u = 2x, a derivada do seno é o cosseno, calculado no mesmo argumento, e a regra da cadeia multiplica pela derivada de dentro, u' = 2: f'(x) = cos(2x) · 2 = 2cos(2x). O fator 2 faz sentido: sen(2x) oscila duas vezes mais depressa que sen x, e as inclinações dobram.\n\ncos(2x) esquece a derivada interna. 2cos x muda o argumento, que deve continuar 2x. −2sen(2x) é a derivada de cos(2x), e não de sen(2x). E 2sen(2x) multiplica pelo 2, mas não deriva o seno.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Derivando f(x) = e^(3x), exponencial de base e com expoente 3x, que expressão se obtém?",
    opcoes: [
      "3e^(3x)",
      "e^(3x)",
      "3x · e^(3x − 1)",
      "e^(3x)/3",
      "3eˣ",
    ],
    correta: 0,
    explicacao:
      "A exponencial eᵘ tem derivada igual a ela mesma, e a regra da cadeia multiplica pela derivada do expoente: com u = 3x e u' = 3, f'(x) = e^(3x) · 3 = 3e^(3x). Toda função da forma e^(kx) tem derivada k · e^(kx): cresce a uma taxa proporcional ao próprio valor, com constante k.\n\ne^(3x) esquece a derivada do expoente. 3x · e^(3x − 1) aplica a regra da potência à exponencial, o que não vale quando a variável está no expoente. e^(3x)/3 divide por 3 em vez de multiplicar, como numa primitiva. E 3eˣ troca o expoente 3x por x.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Para x > 0, a função f(x) = ln(5x) tem qual derivada?",
    opcoes: [
      "1/x",
      "1/(5x)",
      "5/x",
      "5",
      "ln 5 + 1/x",
    ],
    correta: 0,
    explicacao:
      "Pela regra da cadeia, (ln u)' = u'/u. Com u = 5x e u' = 5: f'(x) = 5/(5x) = 1/x. O resultado coincide com a derivada de ln x, e não por acaso: ln(5x) = ln 5 + ln x, e a parcela ln 5 é constante, com derivada zero. Multiplicar o argumento do logaritmo por uma constante só desloca o gráfico na vertical.\n\n1/(5x) esquece de multiplicar pela derivada interna 5. 5/x multiplica por 5, mas divide só por x, e não por 5x. 5 é a derivada de dentro, sozinha. E ln 5 + 1/x esquece que a derivada da constante ln 5 é zero.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor de f'(1) para a função f(x) = (x² − 3)⁴?",
    opcoes: [
      "−64",
      "−32",
      "16",
      "64",
      "−16",
    ],
    correta: 0,
    explicacao:
      "Pela regra da cadeia, f'(x) = 4(x² − 3)³ · 2x = 8x(x² − 3)³. Em x = 1, o miolo vale 1 − 3 = −2, e (−2)³ = −8. Então f'(1) = 8 · 1 · (−8) = −64. O sinal negativo indica que a função está decrescendo em x = 1, embora o valor f(1) = 16 seja positivo.\n\n−32 esquece a derivada interna, 2x = 2. 16 é o valor da função, (−2)⁴, e não o da derivada. 64 perde o sinal de (−2)³. E −16 usa o miolo sem o cubo: 4 · (−2) · 2.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Sendo f e g funções deriváveis, qual expressão fornece a derivada da composta h(x) = f(g(x))?",
    opcoes: [
      "f'(g(x)) · g'(x)",
      "f'(x) · g'(x)",
      "f'(g'(x))",
      "f(g'(x)) · g'(x)",
      "f'(g(x)) + g'(x)",
    ],
    correta: 0,
    explicacao:
      "A regra da cadeia deriva a função de fora calculada no miolo, f'(g(x)), e multiplica pela derivada do miolo, g'(x). Em termos de taxas: se g varia g'(x) vezes mais depressa que x, e f varia f'(g(x)) vezes mais depressa que g, então h varia o produto das duas taxas. Por exemplo, para h(x) = sen(x²), h'(x) = cos(x²) · 2x.\n\nf'(x) · g'(x) calcula f' no ponto errado, em x em vez de g(x). f'(g'(x)) compõe as derivadas em vez de multiplicá-las. f(g'(x)) · g'(x) não deriva a função de fora. E f'(g(x)) + g'(x) soma as taxas, quando elas se multiplicam.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "A função f(x) = √(4x + 1) está definida para x ≥ −1/4. Qual é a sua derivada para x > −1/4?",
    opcoes: [
      "2/√(4x + 1)",
      "1/(2√(4x + 1))",
      "4/√(4x + 1)",
      "1/(8√(4x + 1))",
      "(2/3)(4x + 1)^(3/2)",
    ],
    correta: 0,
    explicacao:
      "Escrevendo f(x) = (4x + 1)^(1/2), a regra da cadeia dá f'(x) = (1/2)(4x + 1)^(−1/2) · 4 = 2/√(4x + 1). O esquema geral é (√u)' = u'/(2√u): a derivada interna vai para o numerador, e a raiz fica no denominador, multiplicada por 2.\n\n1/(2√(4x + 1)) esquece a derivada interna 4. 4/√(4x + 1) multiplica por 4, mas perde o fator 1/2 da potência. 1/(8√(4x + 1)) divide pela derivada interna em vez de multiplicar, confusão comum com a integração por substituição. E (2/3)(4x + 1)^(3/2) aumenta o expoente em vez de diminuir: é a primitiva de √u em relação a u, o caminho inverso.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Qual é a derivada de f(x) = cos(x²), em que o cosseno é aplicado a x²?",
    opcoes: [
      "−2x · sen(x²)",
      "−sen(x²)",
      "2x · sen(x²)",
      "−sen(2x)",
      "−2x · cos(x²)",
    ],
    correta: 0,
    explicacao:
      "O cosseno está aplicado a u = x². A derivada do cosseno é menos o seno, no mesmo argumento, e a regra da cadeia multiplica pela derivada de dentro, u' = 2x: f'(x) = −sen(x²) · 2x = −2x · sen(x²). Note que cos(x²) é diferente de (cos x)², que teria derivada −2cos x · sen x.\n\n−sen(x²) esquece a derivada interna 2x. 2x · sen(x²) perde o sinal da derivada do cosseno. −sen(2x) deriva o argumento e o coloca dentro do seno, no lugar de multiplicá-lo. E −2x · cos(x²) multiplica pela derivada interna, mas não deriva o cosseno.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Escrevendo f(x) = 1/(2x + 1) como potência de expoente −1, qual derivada se obtém para x ≠ −1/2?",
    opcoes: [
      "−2/(2x + 1)²",
      "−1/(2x + 1)²",
      "2/(2x + 1)²",
      "1/2",
      "−2/(2x + 1)",
    ],
    correta: 0,
    explicacao:
      "Como f(x) = (2x + 1)⁻¹, a regra da cadeia dá f'(x) = −1 · (2x + 1)⁻² · 2 = −2/(2x + 1)². O expoente −1 desce, diminui para −2, e a derivada interna 2 multiplica. O sinal negativo confirma que a função decresce em cada intervalo do domínio.\n\n−1/(2x + 1)² esquece a derivada interna 2. 2/(2x + 1)² perde o sinal do expoente −1. 1/2 inverte a derivada do denominador, como se (1/u)' fosse 1/u'. E −2/(2x + 1) esquece de elevar o denominador ao quadrado.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor da derivada de f(x) = e^(x²) no ponto x = 1?",
    opcoes: [
      "2e",
      "e",
      "2",
      "2e²",
      "1",
    ],
    correta: 0,
    explicacao:
      "A exponencial está aplicada a u = x². Sua derivada é ela mesma, multiplicada pela derivada do expoente: f'(x) = e^(x²) · 2x. Em x = 1: f'(1) = e¹ · 2 = 2e ≈ 5,44. Para x > 1, e^(x²) cresce mais depressa que eˣ, porque o próprio expoente x² cresce cada vez mais depressa.\n\ne esquece a derivada do expoente, 2x. 2 fica só com a derivada do expoente e perde o fator e^(x²). 2e² confunde e^(x²) com (eˣ)² = e^(2x), cuja derivada 2e^(2x) vale 2e² em x = 1. E 1 aplica a regra da potência ao expoente, x² · e^(x² − 1), que dá 1 · e⁰.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "A função f(x) = ln(x² + 1) está definida para todo x real. Qual é a expressão de f'(x)?",
    opcoes: [
      "1/(x² + 1)",
      "2x/(x² + 1)",
      "2x",
      "1/(2x)",
      "2x · ln(x² + 1)",
    ],
    correta: 1,
    explicacao:
      "Pela regra da cadeia, (ln u)' = u'/u. Com u = x² + 1 e u' = 2x: f'(x) = 2x/(x² + 1). A derivada é negativa para x < 0 e positiva para x > 0, então o gráfico desce até a origem e sobe depois dela, com mínimo f(0) = ln 1 = 0.\n\n1/(x² + 1) esquece a derivada interna 2x. 2x fica só com a derivada interna, sem dividir por u. 1/(2x) põe a derivada do miolo no lugar do miolo, como se a resposta fosse 1/u'. E 2x · ln(x² + 1) multiplica pela derivada interna, mas não deriva o logaritmo.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "facil",
    enunciado:
      "Qual é a derivada de f(x) = (sen x)³, o cubo do seno de x?",
    opcoes: [
      "3(sen x)²",
      "3(sen x)² · cos x",
      "(cos x)³",
      "3(cos x)²",
      "−3(sen x)² · cos x",
    ],
    correta: 1,
    explicacao:
      "Aqui a função de fora é o cubo, u³, e a de dentro é u = sen x. A regra da cadeia deriva o cubo, 3u² = 3(sen x)², e multiplica pela derivada do seno, cos x: f'(x) = 3(sen x)² · cos x. A notação sen³x, comum nos livros, significa exatamente esse cubo, e não o seno aplicado três vezes.\n\n3(sen x)² esquece a derivada interna, cos x. (cos x)³ deriva o seno, mas não o cubo. 3(cos x)² troca o seno pelo cosseno dentro do quadrado, em vez de multiplicar 3(sen x)² por cos x. E −3(sen x)² · cos x inventa um sinal negativo, que só aparece na derivada do cosseno.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Combinando as regras do produto e da cadeia, quanto vale f'(1) para f(x) = (2x − 1)⁴ · (x + 3)?",
    opcoes: [
      "17",
      "33",
      "32",
      "4",
      "9",
    ],
    correta: 1,
    explicacao:
      "O produto pede a regra do produto, e o primeiro fator pede a regra da cadeia: f'(x) = 4(2x − 1)³ · 2 · (x + 3) + (2x − 1)⁴ · 1. Em x = 1, 2x − 1 = 1 e x + 3 = 4: f'(1) = 8 · 1 · 4 + 1 = 33. A derivada interna 2 aparece só na parcela em que o fator composto foi derivado.\n\n17 esquece a derivada interna 2: 4 · 4 + 1. 32 fica só com a primeira parcela do produto. 4 é o valor da função, 1⁴ · 4. E 9 esquece o fator x + 3 na primeira parcela: 8 + 1.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "A função f(x) = √(1 − x²) descreve a semicircunferência superior de raio 1. Qual é a sua derivada em −1 < x < 1?",
    opcoes: [
      "1/(2√(1 − x²))",
      "−x/√(1 − x²)",
      "−2x/√(1 − x²)",
      "x/√(1 − x²)",
      "−1/(2√(1 − x²))",
    ],
    correta: 1,
    explicacao:
      "Pela regra da cadeia, (√u)' = u'/(2√u). Com u = 1 − x² e u' = −2x: f'(x) = −2x/(2√(1 − x²)) = −x/√(1 − x²). Geometricamente, a tangente à circunferência é perpendicular ao raio: o raio até (x, y) tem inclinação y/x, e a tangente, −x/y, com y = √(1 − x²).\n\n1/(2√(1 − x²)) esquece a derivada interna. −2x/√(1 − x²) esquece o fator 1/2 da raiz. x/√(1 − x²) perde o sinal de −2x. E −1/(2√(1 − x²)) usa −1 como derivada interna, esquecendo o x.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Qual é a equação da reta tangente ao gráfico de f(x) = √(2x + 1) no ponto de abscissa 4?",
    opcoes: [
      "y = x/6 + 7/3",
      "y = x/3 + 5/3",
      "y = 3x − 9",
      "y = x/3 + 3",
      "y = 2x/3 + 1/3",
    ],
    correta: 1,
    explicacao:
      "O ponto de tangência é (4, f(4)) = (4, √9) = (4, 3). Pela regra da cadeia, f'(x) = 2/(2√(2x + 1)) = 1/√(2x + 1), e f'(4) = 1/3. A tangente é y − 3 = (1/3)(x − 4), ou seja, y = x/3 + 5/3.\n\ny = x/6 + 7/3 esquece a derivada interna 2 e usa inclinação 1/6. y = 3x − 9 usa o valor da função, 3, como inclinação. y = x/3 + 3 tem a inclinação certa, mas esquece de descontar 4/3 ao passar pelo ponto (4, 3). E y = 2x/3 + 1/3 perde o fator 1/2 da raiz e usa inclinação 2/3.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Na função f(x) = e^(sen x), o expoente é o seno de x. Qual é a derivada f'(x)?",
    opcoes: [
      "e^(sen x)",
      "cos x · e^(sen x)",
      "e^(cos x)",
      "sen x · e^(sen x − 1)",
      "−cos x · e^(sen x)",
    ],
    correta: 1,
    explicacao:
      "A exponencial está aplicada a u = sen x. A derivada de eᵘ é eᵘ, e a regra da cadeia multiplica pela derivada do expoente, cos x: f'(x) = cos x · e^(sen x). Como e^(sen x) é sempre positivo, o sinal da derivada é o de cos x: a função cresce onde o seno cresce e decresce onde ele decresce.\n\ne^(sen x) esquece a derivada do expoente. e^(cos x) deriva o expoente, mas o deixa no lugar dele. sen x · e^(sen x − 1) aplica a regra da potência, que não vale com a variável no expoente. E −cos x · e^(sen x) troca o sinal da derivada do seno.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Sabe-se que g(1) = 3, g'(1) = 2, f'(1) = 4 e f'(3) = 5. Qual é a derivada de h(x) = f(g(x)) no ponto x = 1?",
    opcoes: [
      "8",
      "10",
      "5",
      "15",
      "7",
    ],
    correta: 1,
    explicacao:
      "Pela regra da cadeia, h'(x) = f'(g(x)) · g'(x). Em x = 1, o miolo vale g(1) = 3, então a derivada de fora é calculada em 3: h'(1) = f'(3) · g'(1) = 5 · 2 = 10. O dado f'(1) = 4 está ali para testar se f' é calculada no ponto certo; ele não entra na conta.\n\n8 usa f'(1) · g'(1), calculando f' em 1 em vez de g(1) = 3. 5 esquece de multiplicar por g'(1). 15 multiplica f'(3) por g(1), e não por g'(1). E 7 soma as taxas f'(3) + g'(1), quando elas se multiplicam.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Qual expressão é a derivada de f(x) = (cos x)² − (sen x)²?",
    opcoes: [
      "−sen(2x)",
      "−2sen(2x)",
      "2sen(2x)",
      "−4sen(2x)",
      "−2cos(2x)",
    ],
    correta: 1,
    explicacao:
      "Derivando cada quadrado pela regra da cadeia: ((cos x)²)' = 2cos x · (−sen x) e ((sen x)²)' = 2sen x · cos x. A diferença dá −2sen x cos x − 2sen x cos x = −4sen x cos x = −2sen(2x). Um atalho confirma: (cos x)² − (sen x)² = cos(2x), cuja derivada é −sen(2x) · 2.\n\n−sen(2x) esquece a derivada interna 2 do atalho. 2sen(2x) perde o sinal da derivada do cosseno. −4sen(2x) confunde −4sen x cos x com −4sen(2x), mas sen(2x) já vale 2sen x cos x. E −2cos(2x) multiplica pela derivada interna, mas não deriva o cosseno.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Para −π/2 < x < π/2, qual é a derivada da função f(x) = ln(cos x)?",
    opcoes: [
      "1/cos x",
      "−tg x",
      "tg x",
      "−cos x/sen x",
      "−sen x",
    ],
    correta: 1,
    explicacao:
      "Pela regra da cadeia, (ln u)' = u'/u. Com u = cos x e u' = −sen x: f'(x) = −sen x/cos x = −tg x. No intervalo dado, cos x > 0, o logaritmo está definido, e a derivada é positiva para x < 0 e negativa para x > 0: o gráfico tem máximo em x = 0, onde f(0) = ln 1 = 0.\n\n1/cos x fica com 1/u e esquece a derivada interna, −sen x. tg x perde o sinal da derivada do cosseno. −cos x/sen x inverte a fração, calculando u/u' em vez de u'/u. E −sen x fica só com a derivada interna, sem dividir por cos x.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Qual é a derivada de f(x) = 2^(3x), exponencial de base 2?",
    opcoes: [
      "3x · 2^(3x − 1)",
      "3 · ln 2 · 2^(3x)",
      "2^(3x) · ln 2",
      "3 · 2^(3x)",
      "ln 2 · 2^(3x)/3",
    ],
    correta: 1,
    explicacao:
      "Toda exponencial de base a tem derivada (aᵘ)' = aᵘ · ln a · u'. Com a = 2 e u = 3x: f'(x) = 2^(3x) · ln 2 · 3 = 3 · ln 2 · 2^(3x). Outra forma de ver: 2^(3x) = e^(3x · ln 2), e a regra da cadeia aplicada à base e dá o mesmo fator 3 · ln 2.\n\n3x · 2^(3x − 1) aplica a regra da potência, que não vale com a variável no expoente. 2^(3x) · ln 2 esquece a derivada do expoente, 3. 3 · 2^(3x) esquece o fator ln 2, que só desaparece quando a base é e. E ln 2 · 2^(3x)/3 divide pela derivada do expoente em vez de multiplicar.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Qual função é a derivada de f(x) = arctg(2x), o arco tangente de 2x?",
    opcoes: [
      "1/(1 + 4x²)",
      "2/(1 + 2x²)",
      "2/(1 + 4x²)",
      "1/(1 + x²)",
      "2/(1 + x²)",
    ],
    correta: 2,
    explicacao:
      "A derivada do arco tangente é (arctg u)' = u'/(1 + u²). Com u = 2x e u' = 2: f'(x) = 2/(1 + (2x)²) = 2/(1 + 4x²). Na origem, a inclinação é 2, o dobro da inclinação de arctg x, porque o argumento 2x varia duas vezes mais depressa.\n\n1/(1 + 4x²) esquece a derivada interna 2. 2/(1 + 2x²) eleva ao quadrado só o x, e não o 2x inteiro. 1/(1 + x²) é a derivada de arctg x, sem a composição. E 2/(1 + x²) multiplica pela derivada interna, mas mantém x no lugar de 2x.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "A temperatura de um objeto em resfriamento é T(t) = 20 + 60e^(−0,1t), em °C, com t em minutos. Qual é a taxa de variação da temperatura no instante t = 0?",
    opcoes: [
      "60 °C/min",
      "6 °C/min",
      "−6 °C/min",
      "−0,1 °C/min",
      "80 °C/min",
    ],
    correta: 2,
    explicacao:
      "A taxa é a derivada: T'(t) = 60 · e^(−0,1t) · (−0,1) = −6e^(−0,1t), pela regra da cadeia aplicada ao expoente −0,1t. Em t = 0: T'(0) = −6 °C/min. O objeto começa esfriando 6 graus por minuto, e o ritmo diminui com o tempo, à medida que a temperatura se aproxima dos 20 °C do ambiente.\n\n60 °C/min esquece a derivada do expoente, −0,1. 6 °C/min perde o sinal: a temperatura cai, e não sobe. −0,1 °C/min fica só com a derivada do expoente, sem o fator 60. E 80 °C/min é a temperatura inicial, T(0), e não a taxa.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "A função f(x) = sen(e^(2x)) compõe três funções. Quanto vale a sua derivada no ponto x = 0?",
    opcoes: [
      "cos 1",
      "2sen 1",
      "2cos 1",
      "2",
      "cos 2",
    ],
    correta: 2,
    explicacao:
      "Há três camadas: o seno, a exponencial e 2x. A regra da cadeia deriva uma de cada vez, de fora para dentro, e multiplica tudo: f'(x) = cos(e^(2x)) · e^(2x) · 2. Em x = 0, e⁰ = 1: f'(0) = cos 1 · 1 · 2 = 2cos 1 ≈ 1,08, com o ângulo 1 medido em radianos.\n\ncos 1 esquece a derivada da camada mais interna, 2. 2sen 1 multiplica pelas derivadas de dentro, mas não deriva o seno. 2 esquece o fator cos(e^(2x)), que vale cos 1 em x = 0. E cos 2 põe o fator 2 dentro do cosseno em vez de multiplicá-lo.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Derive a função f(x) = (3x − 2)^(−2), definida para x ≠ 2/3. Qual é o resultado?",
    opcoes: [
      "−2/(3x − 2)³",
      "6/(3x − 2)³",
      "−6/(3x − 2)³",
      "−6/(3x − 2)",
      "−6/(3x − 2)²",
    ],
    correta: 2,
    explicacao:
      "Pela regra da cadeia, o expoente −2 desce, diminui uma unidade e fica −3, e a derivada interna 3 multiplica: f'(x) = −2 · (3x − 2)^(−3) · 3 = −6/(3x − 2)³. Diminuir uma unidade de um expoente negativo o afasta do zero: −2 − 1 = −3.\n\n−2/(3x − 2)³ esquece a derivada interna 3. 6/(3x − 2)³ perde o sinal do expoente −2. −6/(3x − 2) soma 1 ao expoente em vez de subtrair, e chega a −1. E −6/(3x − 2)² não altera o expoente.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "O gráfico de f(x) = e^(−x²) tem forma de sino. Qual é a inclinação da sua tangente em x = 1?",
    opcoes: [
      "−1/e",
      "2/e",
      "−2/e",
      "−2e",
      "1/e",
    ],
    correta: 2,
    explicacao:
      "A inclinação é f'(1). Pela regra da cadeia, com o expoente u = −x² e u' = −2x: f'(x) = −2x · e^(−x²). Em x = 1: f'(1) = −2 · e^(−1) = −2/e ≈ −0,74. O sino desce à direita do máximo em x = 0, e a inclinação negativa confirma isso.\n\n−1/e esquece o fator 2 da derivada de −x². 2/e perde o sinal de −2x. −2e usa e^(+1) em vez de e^(−1), trocando o sinal do expoente. E 1/e é o valor da função em x = 1, e não a inclinação.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "O raio de uma esfera varia com o tempo segundo r(t) = 2t + 1. Sendo V = (4/3)πr³, qual é a taxa dV/dt no instante t = 1?",
    opcoes: [
      "36π",
      "24π",
      "72π",
      "8π",
      "216π",
    ],
    correta: 2,
    explicacao:
      "O volume depende de t através do raio, então dV/dt = (dV/dr) · (dr/dt) = 4πr² · 2. Em t = 1, r = 3: dV/dt = 4π · 9 · 2 = 72π. A regra da cadeia multiplica a sensibilidade do volume ao raio pela velocidade com que o raio muda.\n\n36π é dV/dr em r = 3, sem o fator dr/dt = 2, e coincide por acaso com o próprio volume em t = 1. 24π usa r no lugar de r²: 4π · 3 · 2. 8π esquece o fator r²: 4π · 2. E 216π usa r³ no lugar de r²: 4π · 27 · 2.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Sendo f(x) = x² e g(x) = sen x, qual é a derivada de h(x) = g(f(x))?",
    opcoes: [
      "sen(2x)",
      "cos(x²)",
      "2x · cos(x²)",
      "2cos x",
      "cos(2x)",
    ],
    correta: 2,
    explicacao:
      "Primeiro, montar a composta: h(x) = g(f(x)) = sen(x²), o seno aplicado a x². A regra da cadeia dá h'(x) = g'(f(x)) · f'(x) = cos(x²) · 2x. A ordem importa: f(g(x)) = (sen x)² é outra função, com derivada 2sen x cos x = sen(2x).\n\nsen(2x) é a derivada da composta na ordem inversa, f(g(x)). cos(x²) esquece a derivada interna 2x. 2cos x compõe as derivadas, f'(g'(x)), em vez de aplicar a regra. E cos(2x) também compõe as derivadas, na outra ordem, g'(f'(x)).",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Em que ponto do gráfico de f(x) = x · e^(−x) a reta tangente é horizontal?",
    opcoes: [
      "(0, 0)",
      "(−1, −e)",
      "(1, 1/e)",
      "(1, e)",
      "(2, 2/e²)",
    ],
    correta: 2,
    explicacao:
      "Pela regra do produto, com a regra da cadeia em e^(−x), cuja derivada é −e^(−x): f'(x) = e^(−x) − x · e^(−x) = e^(−x)(1 − x). Como e^(−x) nunca se anula, f'(x) = 0 só em x = 1, e o ponto é (1, f(1)) = (1, 1/e). É o máximo da função.\n\n(0, 0) é onde o gráfico passa pela origem, e lá f'(0) = 1. (−1, −e) vem de esquecer o sinal da derivada de e^(−x), o que leva a e^(−x)(1 + x) = 0. (1, e) acerta a abscissa, mas calcula f(1) com e¹ em vez de e^(−1). E (2, 2/e²) é o ponto de inflexão, onde se anula a derivada segunda.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Usando a regra da cadeia com u = √x, determine a derivada de f(x) = ln(√x), para x > 0. Qual é ela?",
    opcoes: [
      "1/√x",
      "1/(2√x)",
      "1/(2x)",
      "1/(2x√x)",
      "2/x",
    ],
    correta: 2,
    explicacao:
      "Pela regra da cadeia, (ln u)' = u'/u, com u = √x e u' = 1/(2√x): f'(x) = (1/(2√x))/√x = 1/(2x). A propriedade dos logaritmos confirma: ln(√x) = (1/2) · ln x, cuja derivada é (1/2) · (1/x) = 1/(2x).\n\n1/√x fica com 1/u e esquece a derivada interna. 1/(2√x) é só a derivada de √x, sem dividir por u. 1/(2x√x) divide duas vezes por √x. E 2/x multiplica por 2 em vez de dividir, confundindo ln(√x) com ln(x²).",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Para uma função derivável f, sabe-se que f(2) = −1 e f'(2) = 4. Qual é a derivada de h(x) = [f(x)]³ em x = 2?",
    opcoes: [
      "−12",
      "3",
      "12",
      "48",
      "64",
    ],
    correta: 2,
    explicacao:
      "A função de fora é o cubo e a de dentro é f. Pela regra da cadeia, h'(x) = 3[f(x)]² · f'(x). Em x = 2: h'(2) = 3 · (−1)² · 4 = 3 · 1 · 4 = 12. O quadrado apaga o sinal de f(2), e a derivada sai positiva mesmo com f(2) negativo.\n\n−12 usa f(2) em vez de f(2)², mantendo o sinal. 3 esquece de multiplicar por f'(2). 48 eleva ao quadrado a derivada em vez da função: 3 · 4². E 64 eleva a derivada ao cubo, como se (f³)' fosse (f')³.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Se o ângulo x é medido em graus, a função s(x) = sen(x°) equivale a sen(πx/180) em radianos. Qual é a derivada de s?",
    opcoes: [
      "cos(x°)",
      "(180/π) · cos(x°)",
      "−(π/180) · cos(x°)",
      "(π/180) · cos(x°)",
      "(π/180) · sen(x°)",
    ],
    correta: 3,
    explicacao:
      "Como s(x) = sen(πx/180), a regra da cadeia dá s'(x) = cos(πx/180) · π/180 = (π/180) · cos(x°). É por isso que o Cálculo usa radianos: só nessa unidade a derivada do seno é exatamente o cosseno, sem o fator de conversão π/180 ≈ 0,0175.\n\ncos(x°) esquece o fator π/180 da derivada interna. (180/π) · cos(x°) inverte o fator de conversão. −(π/180) · cos(x°) inventa o sinal negativo, que é da derivada do cosseno. E (π/180) · sen(x°) multiplica pelo fator, mas não deriva o seno.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Se F(x) = f(x²), em que f é derivável em toda a reta, qual é a expressão de F'(x)?",
    opcoes: [
      "f'(x²)",
      "2x · f'(x)",
      "f'(2x)",
      "2x · f'(x²)",
      "2x · f(x²)",
    ],
    correta: 3,
    explicacao:
      "A função de dentro é u = x², com u' = 2x, e a de fora é f. Pela regra da cadeia, F'(x) = f'(u) · u' = f'(x²) · 2x. Por exemplo, com f = sen, F(x) = sen(x²) e F'(x) = 2x · cos(x²); com f(u) = u³, F(x) = x⁶ e F'(x) = 2x · 3x⁴ = 6x⁵, como a regra da potência confirma.\n\nf'(x²) esquece a derivada interna 2x. 2x · f'(x) calcula f' em x, e não no miolo x². f'(2x) põe a derivada interna dentro de f' em vez de multiplicá-la. E 2x · f(x²) multiplica pela derivada interna, mas não deriva f.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Determine a derivada de f(x) = tg(x²) nos pontos em que ela está definida. Qual é a expressão?",
    opcoes: [
      "1/(cos(x²))²",
      "2x · tg(x²)",
      "2x/(cos x)²",
      "2x/(cos(x²))²",
      "2x/cos(x²)",
    ],
    correta: 3,
    explicacao:
      "A tangente está aplicada a u = x². A derivada da tangente é (tg u)' = 1/(cos u)², o quadrado da secante, e a regra da cadeia multiplica por u' = 2x: f'(x) = 2x/(cos(x²))². A derivada é positiva para x > 0 e negativa para x < 0, porque 1/(cos u)² nunca é negativo.\n\n1/(cos(x²))² esquece a derivada interna 2x. 2x · tg(x²) multiplica pela derivada interna, mas não deriva a tangente. 2x/(cos x)² calcula o cosseno em x, e não em x². E 2x/cos(x²) esquece de elevar o cosseno ao quadrado.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "A função f(x) = e^(eˣ) é uma exponencial cujo expoente também é exponencial. Qual é a sua derivada?",
    opcoes: [
      "e^(eˣ)",
      "eˣ · e^(eˣ − 1)",
      "e^(2x)",
      "e^(x + eˣ)",
      "x · e^(eˣ)",
    ],
    correta: 3,
    explicacao:
      "A exponencial de fora está aplicada a u = eˣ, e u' = eˣ. Pela regra da cadeia, f'(x) = e^(eˣ) · eˣ. Como o produto de potências de mesma base soma os expoentes, f'(x) = e^(x + eˣ). A função cresce muito depressa, e a derivada mais ainda.\n\ne^(eˣ) esquece de multiplicar pela derivada do expoente. eˣ · e^(eˣ − 1) aplica a regra da potência, que não vale com a variável no expoente. e^(2x) multiplica eˣ por eˣ e perde a camada de fora. E x · e^(eˣ) multiplica por x em vez de eˣ.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "A função f(x) = ln(ln x) está definida para x > 1. Qual é o valor de f'(e)?",
    opcoes: [
      "1",
      "0",
      "1 + 1/e",
      "1/e",
      "e",
    ],
    correta: 3,
    explicacao:
      "Pela regra da cadeia, com u = ln x e u' = 1/x: f'(x) = (1/ln x) · (1/x) = 1/(x ln x). Em x = e, ln e = 1, e a derivada vale 1/(e · 1) = 1/e ≈ 0,37. A função cresce, mas cada vez mais devagar: o denominador x ln x aumenta sem limite.\n\n1 é 1/ln e, sem a derivada interna 1/x. 0 é o valor da função, ln(ln e) = ln 1. 1 + 1/e soma as derivadas das duas camadas em vez de multiplicá-las. E e inverte o resultado, como se a derivada fosse x ln x.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Calcule a derivada de f(x) = (sen x + cos x)². Qual expressão se obtém?",
    opcoes: [
      "2(sen x + cos x)",
      "0",
      "cos(2x)",
      "2cos(2x)",
      "−2sen(2x)",
    ],
    correta: 3,
    explicacao:
      "Pela regra da cadeia, f'(x) = 2(sen x + cos x) · (cos x − sen x). O produto é uma diferença de quadrados: 2((cos x)² − (sen x)²) = 2cos(2x). Um atalho confirma: expandindo, f(x) = 1 + 2sen x cos x = 1 + sen(2x), cuja derivada é 2cos(2x).\n\n2(sen x + cos x) esquece a derivada interna, cos x − sen x. 0 supõe que (sen x + cos x)² vale 1, confundindo com (sen x)² + (cos x)² = 1. cos(2x) esquece o fator 2 da derivada de sen(2x). E −2sen(2x) é a derivada de cos(2x), e não de sen(2x).",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Para f(x) = √(x³ + 1), qual é a taxa de variação instantânea de f em x = 2?",
    opcoes: [
      "1/6",
      "6",
      "3",
      "2",
      "12",
    ],
    correta: 3,
    explicacao:
      "Pela regra da cadeia, (√u)' = u'/(2√u), com u = x³ + 1 e u' = 3x². Em x = 2: u = 9, √u = 3 e u' = 12, então f'(2) = 12/(2 · 3) = 2. A taxa instantânea é a própria derivada no ponto: perto de x = 2, a função sobe cerca de 2 unidades para cada unidade de x.\n\n1/6 esquece a derivada interna: 1/(2 · 3). 6 esquece a raiz no denominador: 12/2. 3 é o valor da função, √9. E 12 é só a derivada interna, 3x², em x = 2.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Usando a regra do produto ou a identidade sen(2θ) = 2sen θ cos θ, qual é a derivada de f(x) = sen(3x) · cos(3x)?",
    opcoes: [
      "(1/2) · cos(6x)",
      "6cos(6x)",
      "−9sen(3x) · cos(3x)",
      "3cos(6x)",
      "cos(6x)",
    ],
    correta: 3,
    explicacao:
      "Pela identidade, f(x) = (1/2) · sen(6x), e a regra da cadeia dá f'(x) = (1/2) · cos(6x) · 6 = 3cos(6x). Pela regra do produto, com a cadeia em cada fator: 3cos(3x) · cos(3x) − 3sen(3x) · sen(3x) = 3((cos 3x)² − (sen 3x)²) = 3cos(6x), o mesmo resultado.\n\n(1/2) · cos(6x) esquece a derivada interna 6. 6cos(6x) esquece o fator 1/2 da identidade. −9sen(3x) · cos(3x) multiplica as derivadas dos dois fatores, erro comum na regra do produto. E cos(6x) acerta a forma, mas perde o coeficiente 3.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Para qual valor de x a derivada de f(x) = e^(2x) − 2eˣ se anula?",
    opcoes: [
      "x = ln 2",
      "x = −ln 2",
      "x = 1",
      "x = 0",
      "Nenhum: a derivada nunca se anula",
    ],
    correta: 3,
    explicacao:
      "Pela regra da cadeia, (e^(2x))' = 2e^(2x), e então f'(x) = 2e^(2x) − 2eˣ = 2eˣ(eˣ − 1). O fator 2eˣ nunca se anula, então f'(x) = 0 exige eˣ = 1, isto é, x = 0. É o mínimo da função, f(0) = 1 − 2 = −1.\n\nx = ln 2 esquece a derivada interna 2 de e^(2x) e resolve eˣ(eˣ − 2) = 0. x = −ln 2 deriva 2eˣ como se fosse eˣ e resolve eˣ(2eˣ − 1) = 0. x = 1 confunde eˣ = 1 com x = 1. E a derivada se anula, sim: a diferença de duas exponenciais pode ter derivada nula, como aqui.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "media",
    enunciado:
      "Quanto vale f'(0) para f(x) = ln(1 + e^(2x)), que combina logaritmo e exponencial?",
    opcoes: [
      "1/2",
      "2",
      "ln 2",
      "1",
      "0",
    ],
    correta: 3,
    explicacao:
      "Há duas camadas de composição: o logaritmo de fora e a exponencial dentro dele. Pela regra da cadeia, f'(x) = (1/(1 + e^(2x))) · e^(2x) · 2 = 2e^(2x)/(1 + e^(2x)). Em x = 0: f'(0) = 2 · 1/(1 + 1) = 1.\n\n1/2 esquece a derivada interna 2 do expoente. 2 esquece de dividir por 1 + e^(2x). ln 2 é o valor da função, ln(1 + 1). E 0 supõe tangente horizontal em x = 0, mas a derivada 2e^(2x)/(1 + e^(2x)) é sempre positiva.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "A reta tangente ao gráfico de g no ponto de abscissa 2 é y = 5x − 7. Qual é a reta tangente ao gráfico de h(x) = g(3x − 4) no ponto de abscissa 2?",
    opcoes: [
      "y = 5x − 7",
      "y = 15x − 7",
      "y = 3x − 3",
      "y = 5x/3 − 1/3",
      "y = 15x − 27",
    ],
    correta: 4,
    explicacao:
      "Da tangente de g, lê-se g(2) = 5 · 2 − 7 = 3 e g'(2) = 5. Em x = 2, o miolo vale 3 · 2 − 4 = 2, então h(2) = g(2) = 3. Pela regra da cadeia, h'(x) = g'(3x − 4) · 3, e h'(2) = 5 · 3 = 15. A tangente é y − 3 = 15(x − 2), isto é, y = 15x − 27.\n\ny = 5x − 7 copia a tangente de g, esquecendo a derivada interna 3. y = 15x − 7 acerta a inclinação, mas copia o termo independente da reta de g. y = 3x − 3 usa só a derivada interna como inclinação. E y = 5x/3 − 1/3 divide por 3 em vez de multiplicar.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "Qual é a derivada de ordem 10 da função f(x) = sen(2x)?",
    opcoes: [
      "1024 · sen(2x)",
      "1024 · cos(2x)",
      "−1024 · cos(2x)",
      "−20 · sen(2x)",
      "−1024 · sen(2x)",
    ],
    correta: 4,
    explicacao:
      "Cada derivação multiplica por 2, pela regra da cadeia, e avança o ciclo seno → cosseno → −seno → −cosseno → seno, que se repete a cada quatro passos. Depois de 10 derivações, o fator é 2¹⁰ = 1024, e o ciclo avançou 10 = 4 · 2 + 2 passos, parando em −seno. Logo f⁽¹⁰⁾(x) = −1024 · sen(2x).\n\n1024 · sen(2x) acerta o fator, mas erra a posição no ciclo, como se 10 fosse múltiplo de 4. 1024 · cos(2x) acerta o fator, mas conta um passo a menos no ciclo. −1024 · cos(2x) acerta o fator, mas conta um passo a mais. E −20 · sen(2x) soma o fator 2 a cada derivação, em vez de multiplicar: 2 · 10 = 20.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "Para quais valores reais de k a função f(x) = e^(kx) satisfaz a equação f''(x) − 5f'(x) + 6f(x) = 0 para todo x?",
    opcoes: [
      "k = −2 ou k = −3",
      "Só k = 2",
      "k = 1 ou k = 6",
      "k = 5 ou k = 6",
      "k = 2 ou k = 3",
    ],
    correta: 4,
    explicacao:
      "Pela regra da cadeia, f'(x) = k · e^(kx) e f''(x) = k² · e^(kx). Substituindo: e^(kx)(k² − 5k + 6) = 0. Como e^(kx) nunca se anula, a equação vale para todo x exatamente quando k² − 5k + 6 = 0, ou seja, (k − 2)(k − 3) = 0: k = 2 ou k = 3. É assim que se resolvem as equações diferenciais lineares com coeficientes constantes.\n\nk = −2 ou k = −3 troca os sinais das raízes, como se o polinômio fosse k² + 5k + 6. Só k = 2 esquece a segunda raiz. k = 1 ou k = 6 fatora 6 como 1 · 6, sem conferir a soma 5. E k = 5 ou k = 6 lê os coeficientes do polinômio como se fossem as raízes.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "A função f(x) = x³ + x + 1 é crescente e tem inversa g. Sabendo que f(1) = 3, qual é o valor de g'(3)?",
    opcoes: [
      "1/28",
      "4",
      "28",
      "1/3",
      "1/4",
    ],
    correta: 4,
    explicacao:
      "Como g(f(x)) = x para todo x, a regra da cadeia dá g'(f(x)) · f'(x) = 1, ou seja, g'(f(x)) = 1/f'(x). Com f'(x) = 3x² + 1 e f(1) = 3: g'(3) = 1/f'(1) = 1/(3 + 1) = 1/4. O ponto de g' é 3, mas o ponto de f' é g(3) = 1.\n\n1/28 calcula 1/f'(3), usando o ponto 3 no lugar errado. 4 é f'(1), sem inverter. 28 é f'(3), com os dois erros ao mesmo tempo. E 1/3 inverte o valor 3 do ponto, e não a derivada.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "A variável aparece na base e no expoente de f(x) = xˣ, definida para x > 0. Quanto vale f'(2)?",
    opcoes: [
      "4",
      "4 · ln 2",
      "1 + ln 2",
      "4 + ln 2",
      "4(1 + ln 2)",
    ],
    correta: 4,
    explicacao:
      "Nem a regra da potência nem a da exponencial se aplicam sozinhas, porque a variável está na base e no expoente. Escrevendo xˣ = e^(x · ln x), a regra da cadeia dá f'(x) = e^(x ln x) · (ln x + 1) = xˣ(ln x + 1). Em x = 2: f'(2) = 4(ln 2 + 1) ≈ 6,77.\n\n4 aplica só a regra da potência, x · x^(x − 1) = 2 · 2. 4 · ln 2 aplica só a regra da exponencial, xˣ · ln x. A resposta certa é a soma das duas: 4 + 4 · ln 2. 1 + ln 2 esquece o fator xˣ = 4. E 4 + ln 2 soma ln x sem multiplicá-lo por xˣ.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "Em quais abscissas a derivada segunda de f(x) = e^(−x²/2), a curva em forma de sino, se anula?",
    opcoes: [
      "x = 0",
      "Só x = 1",
      "x = −√2/2 e x = √2/2",
      "x = −1, x = 0 e x = 1",
      "x = −1 e x = 1",
    ],
    correta: 4,
    explicacao:
      "Pela regra da cadeia, f'(x) = e^(−x²/2) · (−x) = −x · e^(−x²/2). Pela regra do produto, com a cadeia de novo: f''(x) = −e^(−x²/2) + x² · e^(−x²/2) = (x² − 1)e^(−x²/2). A exponencial nunca se anula, então f''(x) = 0 exige x² = 1: x = −1 ou x = 1. São os pontos de inflexão do sino, a um desvio padrão da média.\n\nx = 0 é onde se anula a derivada primeira, no topo do sino; lá f''(0) = −1. Só x = 1 esquece a raiz negativa. x = −√2/2 e x = √2/2 vêm de derivar e^(−x²) no lugar de e^(−x²/2), esquecendo o fator 1/2 do expoente. E x = −1, x = 0 e x = 1 acrescenta o zero de f', que não anula f''.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "Qual é a derivada de f(x) = ln(x + √(x² + 1)), função definida para todo x real?",
    opcoes: [
      "1/(x + √(x² + 1))",
      "x/√(x² + 1)",
      "1 + x/√(x² + 1)",
      "2x/(x² + 1)",
      "1/√(x² + 1)",
    ],
    correta: 4,
    explicacao:
      "Pela regra da cadeia, (ln u)' = u'/u, com u = x + √(x² + 1). A derivada de dentro também usa a cadeia: u' = 1 + x/√(x² + 1) = (√(x² + 1) + x)/√(x² + 1). Dividindo por u, o fator x + √(x² + 1) se cancela, e sobra f'(x) = 1/√(x² + 1). Essa função é a inversa do seno hiperbólico.\n\n1/(x + √(x² + 1)) é 1/u, sem a derivada interna. x/√(x² + 1) fica só com a derivada da raiz, esquecendo o 1 da derivada de x e a divisão por u. 1 + x/√(x² + 1) é u', sem dividir por u. E 2x/(x² + 1) é a derivada de ln(x² + 1), outra função.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "Calcule f'(π²/4) para a função f(x) = cos(√x), definida para x ≥ 0. Qual é o valor?",
    opcoes: [
      "−1",
      "−2/π²",
      "1/π",
      "0",
      "−1/π",
    ],
    correta: 4,
    explicacao:
      "Pela regra da cadeia, com u = √x e u' = 1/(2√x): f'(x) = −sen(√x) · 1/(2√x). O ponto foi escolhido para que √x caísse num ângulo notável: em x = π²/4, √x = π/2, sen(π/2) = 1 e 2√x = π. Então f'(π²/4) = −1/π ≈ −0,32.\n\n−1 esquece a derivada interna 1/(2√x). −2/π² usa 1/(2x) como derivada de √x, esquecendo a raiz. 1/π perde o sinal da derivada do cosseno. E 0 é o valor da função no ponto, cos(π/2), e não a derivada.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "Se f é derivável e par, isto é, f(−x) = f(x) para todo x, o que se pode afirmar sobre a derivada f'?",
    opcoes: [
      "É par: f'(−x) = f'(x)",
      "Em geral, não é par nem ímpar",
      "É constante",
      "É nula em todo ponto",
      "É ímpar: f'(−x) = −f'(x)",
    ],
    correta: 4,
    explicacao:
      "Derivando os dois lados de f(−x) = f(x): à esquerda, a regra da cadeia dá f'(−x) · (−1); à direita, f'(x). Logo −f'(−x) = f'(x), ou seja, f'(−x) = −f'(x): a derivada de toda função par derivável é ímpar. Exemplos: x² tem derivada 2x, cos x tem derivada −sen x, e x⁴ − 3x² tem derivada 4x³ − 6x, todas ímpares.\n\nSer par é o que se esperaria sem a regra da cadeia, que traz o fator −1. Não ser nem par nem ímpar contradiz a dedução, que vale para qualquer f par derivável. Ser constante só acontece quando f' é nula, porque a única função ímpar constante é a nula. E ser nula em todo ponto vale só quando f é constante, como f(x) = 5, um caso particular.",
  },
  {
    materia: "calculo",
    tema: "Regra da cadeia",
    dificuldade: "dificil",
    enunciado:
      "Um ponto se move sobre a parábola y = x², com abscissa x(t) = sen t. Qual é a taxa dy/dt no instante t = π/6?",
    opcoes: [
      "1",
      "√3/4",
      "√3",
      "1/4",
      "√3/2",
    ],
    correta: 4,
    explicacao:
      "A ordenada depende de t através de x: y = x² e x = sen t. Pela regra da cadeia, dy/dt = (dy/dx) · (dx/dt) = 2x · cos t. Em t = π/6, x = sen(π/6) = 1/2 e cos(π/6) = √3/2, então dy/dt = 2 · (1/2) · (√3/2) = √3/2 ≈ 0,87.\n\n1 é dy/dx = 2x, sem multiplicar por dx/dt. √3/4 esquece o fator 2 de dy/dx. √3 esquece o fator x, usando só 2 · cos t. E 1/4 é a própria ordenada, y = (1/2)², e não a taxa.",
  },
];
