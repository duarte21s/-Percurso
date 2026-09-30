/* Potenciação e radiciação (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__potenciacao-e-radiciacao.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__potenciacao-e-radiciacao.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Calculando a potência de base 2 e expoente 5, qual é o valor de 2⁵?",
    opcoes: [
      "32",
      "10",
      "25",
      "64",
      "16",
    ],
    correta: 0,
    explicacao:
      "Uma potência é uma multiplicação de fatores iguais: o expoente 5 indica que a base 2 aparece cinco vezes, 2 × 2 × 2 × 2 × 2. Multiplicando passo a passo, 2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16 e 16 × 2 = 32.\n\n10 multiplica a base pelo expoente, 2 × 5, em vez de repetir a base. 25 inverte os papéis, calculando 5². 64 usa o expoente 6, um fator a mais. E 16 usa o expoente 4, um fator a menos.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Uma potência de base 10 é fácil de calcular. Quanto vale 10³?",
    opcoes: [
      "1.000",
      "30",
      "100",
      "10.000",
      "300",
    ],
    correta: 0,
    explicacao:
      "O expoente 3 indica três fatores 10: 10 × 10 × 10 = 1.000. Em potências de 10, o expoente diz quantos zeros seguem o algarismo 1, então 10³ é o 1 seguido de três zeros.\n\n30 multiplica a base pelo expoente, 10 × 3. 100 é 10², com um zero a menos. 10.000 é 10⁴, com um zero a mais. E 300 mistura a base, o expoente e o número de zeros sem relação com a definição de potência.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Elevando um número diferente de zero ao expoente zero, quanto vale 7⁰?",
    opcoes: [
      "1",
      "0",
      "7",
      "70",
      "−7",
    ],
    correta: 0,
    explicacao:
      "Todo número diferente de zero elevado a zero vale 1. Isso decorre da regra da divisão de potências de mesma base: 7² ÷ 7² = 7²⁻² = 7⁰, e como qualquer número não nulo dividido por ele mesmo dá 1, 7⁰ = 1.\n\n0 e 7 confundem o expoente zero com multiplicar por zero ou com manter a base. 70 apenas junta o 7 e o 0 como algarismos. E −7 troca o sinal da base sem nenhuma justificativa na definição.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Calculando uma potência com expoente maior, quanto vale 3⁴?",
    opcoes: [
      "81",
      "12",
      "64",
      "27",
      "243",
    ],
    correta: 0,
    explicacao:
      "O expoente 4 indica quatro fatores 3: 3 × 3 × 3 × 3. Multiplicando aos pares, 3 × 3 = 9 e 9 × 9 = 81. Outra forma é 3² = 9 e 9² = 81. Em potências, o expoente conta quantas vezes a base aparece como fator, e não por quanto ela é multiplicada.\n\n12 multiplica a base pelo expoente, 3 × 4. 64 troca as posições, calculando 4³. 27 usa o expoente 3, um fator a menos. E 243 usa o expoente 5, um fator a mais.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "A raiz quadrada de um quadrado perfeito é exata. Qual é a raiz quadrada de 49?",
    opcoes: [
      "7",
      "24,5",
      "9",
      "98",
      "6",
    ],
    correta: 0,
    explicacao:
      "A raiz quadrada de 49 é o número positivo que, multiplicado por ele mesmo, dá 49. Como 7 × 7 = 49, a raiz quadrada de 49 é 7. Conferindo, 7² = 49, e por isso a raiz quadrada e o quadrado são operações inversas.\n\n24,5 divide 49 por 2, confundindo raiz quadrada com metade. 9 e 6 são números próximos de 7, mas 9 × 9 = 81 e 6 × 6 = 36, que não são 49. E 98 dobra o número em vez de extrair a raiz.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Procurando o número que multiplicado por ele mesmo dá 144, qual é a raiz quadrada de 144?",
    opcoes: [
      "12",
      "72",
      "14",
      "11",
      "13",
    ],
    correta: 0,
    explicacao:
      "A raiz quadrada de 144 é o número positivo cujo quadrado é 144. Como 12 × 12 = 144, a raiz é 12. Outra forma é fatorar, 144 = 2⁴ × 3², e tirar metade de cada expoente: 2² × 3 = 12.\n\n72 é a metade de 144, confundindo raiz com divisão por 2. 14 e 11 ficam perto de 12, mas 14 × 14 = 196 e 11 × 11 = 121, e nenhum dos dois dá 144. E 13 tem quadrado 169.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "A raiz cúbica desfaz a elevação ao cubo. Qual é a raiz cúbica de 27?",
    opcoes: [
      "3",
      "9",
      "13,5",
      "81",
      "6",
    ],
    correta: 0,
    explicacao:
      "A raiz cúbica de 27 é o número que, multiplicado por ele mesmo três vezes, dá 27. Como 3 × 3 × 3 = 27, a raiz cúbica de 27 é 3. Conferindo, o cubo de 3 volta exatamente ao número 27, mostrando que as operações são inversas.\n\n9 é a raiz quadrada de 81 e também o quadrado de 3, mas 9 × 9 × 9 = 729. 13,5 divide 27 por 2, sem relação com a raiz. 81 é 3⁴, uma potência do próprio 3. E 6 dobra a raiz correta, e 6 × 6 × 6 = 216.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Elevando um número negativo a um expoente ímpar, quanto vale (−2)³?",
    opcoes: [
      "−8",
      "8",
      "−6",
      "6",
      "−9",
    ],
    correta: 0,
    explicacao:
      "(−2)³ = (−2) × (−2) × (−2). Os dois primeiros fatores dão (−2) × (−2) = +4, e multiplicar por −2 de novo dá 4 × (−2) = −8. Com expoente ímpar, o resultado de uma base negativa continua negativo.\n\n8 perde o sinal negativo, como se o expoente fosse par. −6 multiplica a base pelo expoente, −2 × 3. 6 faz a mesma conta, perdendo também o sinal. E −9 troca a base pelo 3, calculando algo parecido com −3².",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Ao elevar −3 ao quadrado, com parênteses mostrando que o sinal faz parte da base, que resultado se obtém?",
    opcoes: [
      "9",
      "−9",
      "6",
      "−6",
      "12",
    ],
    correta: 0,
    explicacao:
      "(−3)² = (−3) × (−3) = 9, porque o produto de dois números negativos é positivo. Com expoente par, uma base negativa dá resultado positivo, já que os sinais se cancelam em pares.\n\n−9 mantém o sinal negativo, o que só aconteceria se o sinal de menos ficasse fora da potência, −(3²). −6 e 6 multiplicam a base pelo expoente. E 12 multiplica 3 por 4, sem relação com a potência pedida.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "O quadrado de um número é esse número multiplicado por ele mesmo. Qual é o quadrado de 15?",
    opcoes: [
      "225",
      "30",
      "125",
      "152",
      "215",
    ],
    correta: 0,
    explicacao:
      "O quadrado de 15 é 15² = 15 × 15. Multiplicando por partes, 15 × 10 = 150 e 15 × 5 = 75, e 150 + 75 = 225. Conferindo por outro caminho, 15² = (10 + 5)² = 100 + 2 × 10 × 5 + 25 = 100 + 100 + 25 = 225.\n\n30 dobra o número, 15 × 2, confundindo quadrado com dobro. 125 é 5³, um cubo e não o quadrado de 15. 152 apenas inverte os algarismos de 15 e 2. E 215 erra a soma das multiplicações parciais.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Multiplicando potências de mesma base, quanto vale 2³ × 2⁴?",
    opcoes: [
      "16.384",
      "128",
      "64",
      "56",
      "14",
    ],
    correta: 1,
    explicacao:
      "Na multiplicação de potências de mesma base, conservam-se a base e somam-se os expoentes: 2³ × 2⁴ = 2⁷ = 128. Conferindo, 2³ = 8, 2⁴ = 16 e 8 × 16 = 128.\n\n16.384 multiplica as bases, 2 × 2 = 4, e soma os expoentes, o que dá 4⁷ e não o produto pedido. 64 multiplica os expoentes em vez de somar, dando um valor que não confere com 8 × 16. 56 e 14 misturam os números 8, 16, 3 e 4 por somas ou produtos sem relação com a regra.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "facil",
    enunciado:
      "Somando duas potências de 10 com expoentes diferentes, quanto vale 10⁰ + 10¹?",
    opcoes: [
      "10",
      "11",
      "20",
      "1",
      "0",
    ],
    correta: 1,
    explicacao:
      "Calculando cada potência, 10⁰ = 1, pois todo número não nulo elevado a zero vale 1, e 10¹ = 10, pois o expoente 1 mantém a base. Somando, 1 + 10 = 11.\n\n10 é só a segunda potência, esquecendo de somar 10⁰. 20 toma as duas potências como 10. 1 é só a primeira potência. E 0 supõe que uma potência de expoente zero vale zero, o que é um erro comum.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Escrevendo 3² × 3⁵ como uma única potência de base 3, qual é o expoente do resultado?",
    opcoes: [
      "10",
      "7",
      "3",
      "25",
      "5",
    ],
    correta: 1,
    explicacao:
      "Na multiplicação de potências de mesma base, somam-se os expoentes: 3² × 3⁵ = 3²⁺⁵ = 3⁷. Conferindo, 3² = 9, 3⁵ = 243 e 9 × 243 = 2.187, que é 3⁷. Essa regra vale sempre que as bases são iguais, qualquer que seja o valor dos expoentes.\n\n10 multiplica os expoentes, 2 × 5, em vez de somá-los. 3 e 5 tomam só um dos expoentes dados. E 25 eleva um expoente ao outro, 5², sem relação com a regra do produto de potências.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Dividindo potências de mesma base, quanto vale 5⁶ ÷ 5²?",
    opcoes: [
      "125",
      "625",
      "3",
      "15.625",
      "25",
    ],
    correta: 1,
    explicacao:
      "Na divisão de potências de mesma base, conservam-se a base e subtraem-se os expoentes: 5⁶ ÷ 5² = 5⁶⁻² = 5⁴ = 625. Conferindo, 5⁶ = 15.625, 5² = 25 e 15.625 ÷ 25 = 625.\n\n125 divide os expoentes, 6 ÷ 2 = 3, em vez de subtraí-los. 3 é essa mesma divisão sem calcular a potência. 15.625 é o dividendo, sem dividir por nada. E 25 é o divisor, 5², sem efetuar a divisão.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Elevando uma potência a outro expoente, quanto vale (2³)²?",
    opcoes: [
      "32",
      "64",
      "16",
      "512",
      "8",
    ],
    correta: 1,
    explicacao:
      "Na potência de potência, multiplicam-se os expoentes: (2³)² = 2³ˣ² = 2⁶ = 64. Conferindo, 2³ = 8 e 8² = 64. Isso vale porque elevar ao quadrado é repetir duas vezes o produto de três fatores 2.\n\n32 soma os expoentes, 3 + 2 = 5, em vez de multiplicá-los. 16 e 8 usam um único fator ou uma das potências intermediárias. E 512 é 2⁹, isto é, 2 elevado a 3², como se a potência de potência fosse calculada de fora para dentro.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Elevando uma base negativa entre parênteses a um expoente par, quanto vale (−2)⁴?",
    opcoes: [
      "−16",
      "16",
      "8",
      "−8",
      "6",
    ],
    correta: 1,
    explicacao:
      "Com os parênteses, a base é −2: (−2)⁴ = (−2) × (−2) × (−2) × (−2). Os dois primeiros dão +4, os dois últimos dão +4, e 4 × 4 = 16. Expoente par com base negativa dá resultado positivo.\n\n−16 mantém o sinal negativo, o que só valeria se o sinal ficasse fora dos parênteses, −(2⁴). 8 e −8 multiplicam a base pelo expoente. E 6 soma 2 e 4 em vez de calcular a potência.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Pela ordem das operações, em que o sinal de menos sem parênteses fica fora da potência, quanto vale −3⁴?",
    opcoes: [
      "81",
      "−81",
      "−12",
      "12",
      "−64",
    ],
    correta: 1,
    explicacao:
      "Sem parênteses em volta do −3, a potência age só sobre a base 3: −3⁴ = −(3⁴) = −(3 × 3 × 3 × 3) = −81. O sinal de menos é aplicado depois de calcular a potência. O sinal de menos só entra na base quando aparece dentro de parênteses junto com o número.\n\n81 seria o valor de (−3)⁴, com o sinal dentro dos parênteses. −12 e 12 multiplicam a base pelo expoente. E −64 troca a base e o expoente, calculando −4³.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Um expoente negativo indica o inverso da potência. Quanto vale 2⁻³?",
    opcoes: [
      "−8",
      "1/8",
      "−6",
      "1/6",
      "8",
    ],
    correta: 1,
    explicacao:
      "Uma base elevada a um expoente negativo é o inverso da mesma base elevada ao expoente positivo: 2⁻³ = 1/2³ = 1/8. Isso mantém a regra da divisão de potências, pois 2⁰ ÷ 2³ = 2⁻³ e 1 ÷ 8 = 1/8.\n\n−8 apenas troca o sinal do resultado de 2³ em vez de inverter. −6 e 1/6 multiplicam a base pelo expoente. E 8 calcula 2³ e esquece de inverter o resultado.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "A raiz de uma soma não é a soma das raízes. Quanto vale √(9 + 16)?",
    opcoes: [
      "7",
      "5",
      "25",
      "12",
      "10",
    ],
    correta: 1,
    explicacao:
      "Primeiro se calcula a soma dentro da raiz: 9 + 16 = 25. Depois, √25 = 5, pois 5 × 5 = 25. Por isso, a raiz de uma soma deve ser calculada somente depois de efetuar a soma do radicando.\n\n7 é √9 + √16 = 3 + 4, erro muito comum de distribuir a raiz pela soma, o que não vale. 25 é o valor dentro da raiz, sem extraí-la. 12 e 10 misturam os números 9, 16, 3 e 4 por somas ou produtos que não correspondem à expressão.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Multiplicando duas raízes quadradas exatas, quanto vale √25 × √4?",
    opcoes: [
      "20",
      "10",
      "7",
      "100",
      "29",
    ],
    correta: 1,
    explicacao:
      "√25 = 5 e √4 = 2, então o produto é 5 × 2 = 10. Conferindo pela propriedade da raiz do produto, √25 × √4 = √(25 × 4) = √100 = 10. Em símbolos, √a × √b = √(a × b), propriedade que vale para radicandos positivos e confere os dois caminhos.\n\n20 multiplica 5 × 4, esquecendo de extrair a raiz de 4. 7 soma as raízes em vez de multiplicar. 100 é o produto dos radicandos, sem extrair a raiz. E 29 soma os radicandos.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "A raiz quadrada de um número que não é quadrado perfeito fica entre dois inteiros. Entre quais inteiros consecutivos está √50?",
    opcoes: [
      "6 e 7",
      "8 e 9",
      "7 e 8",
      "5 e 6",
      "24 e 25",
    ],
    correta: 2,
    explicacao:
      "Os quadrados perfeitos vizinhos de 50 são 49 = 7² e 64 = 8². Como 49 < 50 < 64, a raiz √50 está entre √49 = 7 e √64 = 8, e vale cerca de 7,07.\n\n6 e 7 corresponderiam a números entre 36 e 49. 8 e 9 corresponderiam a números entre 64 e 81. 5 e 6 corresponderiam a números entre 25 e 36. E 24 e 25 são aproximadamente a metade de 50, que não tem relação com a raiz.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Quantos números quadrados perfeitos existem entre 1 e 100, contando as duas extremidades?",
    opcoes: [
      "9",
      "11",
      "10",
      "100",
      "50",
    ],
    correta: 2,
    explicacao:
      "Os quadrados perfeitos nesse intervalo são 1², 2², 3², ..., 10², isto é, 1, 4, 9, 16, 25, 36, 49, 64, 81 e 100. São 10 números, pois 10² = 100 e 11² = 121 já passa do limite.\n\n9 esquece de contar o 100, que é 10². 11 conta também 11², que vale 121. 100 confunde a quantidade de números do intervalo com a de quadrados perfeitos. E 50 supõe que metade dos números seria quadrado perfeito.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Somando dois quadrados, quanto vale 3² + 4²?",
    opcoes: [
      "49",
      "14",
      "25",
      "7",
      "24",
    ],
    correta: 2,
    explicacao:
      "Calculando cada potência, 3² = 9 e 4² = 16. Somando, 9 + 16 = 25. O resultado é um quadrado perfeito, 5², pois (3, 4, 5) é um trio pitagórico.\n\n49 é (3 + 4)², elevando a soma ao quadrado em vez de somar os quadrados. 14 é 2 × 7, somando 3 + 4 e dobrando. 7 é a soma das bases, sem elevar nada ao quadrado. E 24 erra a soma dos quadrados por uma unidade.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Comparando o quadrado de uma soma com a soma dos quadrados, quanto vale (5 + 2)² − 5² − 2²?",
    opcoes: [
      "0",
      "24",
      "20",
      "14",
      "10",
    ],
    correta: 2,
    explicacao:
      "Calculando cada parte, (5 + 2)² = 7² = 49, 5² = 25 e 2² = 4. Então 49 − 25 − 4 = 20. A diferença é 2 × 5 × 2 = 20, o termo do meio do produto notável (a + b)² = a² + 2ab + b².\n\n0 supõe que o quadrado da soma é igual à soma dos quadrados, o que não vale. 24 erra a subtração, tirando 25 e 0. 14 e 10 misturam os números 5, 2 e 7 por somas ou produtos sem relação com a expressão.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Um arquivo dobra de tamanho dez vezes seguidas, começando com 1 unidade. Quantas unidades ele tem ao final?",
    opcoes: [
      "100",
      "512",
      "1.024",
      "2.048",
      "20",
    ],
    correta: 2,
    explicacao:
      "A cada dobra, o tamanho é multiplicado por 2. Depois de 10 dobras, o tamanho é 2¹⁰ = 1.024 unidades. Conferindo por partes, 2⁵ = 32 e 32 × 32 = 1.024. Cada dobra multiplica o tamanho anterior por 2, e dez dobras seguidas multiplicam 2 dez vezes.\n\n100 confunde 2¹⁰ com 10². 512 é 2⁹, uma dobra a menos. 2.048 é 2¹¹, uma dobra a mais. E 20 multiplica o número de dobras por 2 em vez de elevar 2 ao número de dobras.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Fatorando 144 em fatores primos, qual é o expoente do fator 2?",
    opcoes: [
      "2",
      "3",
      "4",
      "6",
      "12",
    ],
    correta: 2,
    explicacao:
      "Dividindo sucessivamente por 2: 144 ÷ 2 = 72, ÷ 2 = 36, ÷ 2 = 18, ÷ 2 = 9, e 9 já não é divisível por 2. Foram 4 divisões, então o expoente do 2 é 4. O restante 9 = 3², e 144 = 2⁴ × 3². Esse processo é a decomposição em fatores primos, usada para extrair raízes e calcular divisores.\n\n2 é o expoente do fator 3, e não do 2. 3 e 6 contam divisões a menos ou a mais. E 12 é a raiz quadrada de 144, sem relação com o expoente do fator 2.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Deslocando a vírgula ao multiplicar por uma potência de 10, quanto vale 4,5 × 10³?",
    opcoes: [
      "45.000",
      "450",
      "4.500",
      "45",
      "4.500.000",
    ],
    correta: 2,
    explicacao:
      "Multiplicar por 10³ = 1.000 desloca a vírgula três casas para a direita: 4,5 → 45 → 450 → 4.500. O resultado é 4.500, e o zero é acrescentado quando faltam algarismos. Esse é o princípio da notação científica.\n\n45.000 desloca a vírgula quatro casas. 450 a desloca duas casas. 45 a desloca apenas uma. E 4.500.000 desloca a vírgula seis casas, como se a multiplicação fosse por 10⁶.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Uma cultura de bactérias dobra de número a cada hora. Começando com 1 bactéria, quantas há depois de 8 horas?",
    opcoes: [
      "16",
      "128",
      "256",
      "512",
      "64",
    ],
    correta: 2,
    explicacao:
      "Depois de cada hora, o número de bactérias é multiplicado por 2. Em 8 horas, são 2⁸ = 256 bactérias. Conferindo por partes, 2⁴ = 16 e 16 × 16 = 256. A cada hora o número de bactérias é multiplicado por 2, então o crescimento é exponencial, e não linear como em uma soma repetida.\n\n16 multiplica o número de horas por 2, em vez de elevar 2 a 8. 128 é 2⁷, uma hora a menos. 512 é 2⁹, uma hora a mais. E 64 é 2⁶, duas horas a menos.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Um quadrado tem área de 81 cm². Quanto mede o lado desse quadrado?",
    opcoes: [
      "40,5",
      "18",
      "9",
      "8",
      "27",
    ],
    correta: 2,
    explicacao:
      "A área do quadrado é lado × lado, então o lado é a raiz quadrada da área: √81 = 9 cm, pois 9 × 9 = 81. Conferindo, 9² = 81. Geometricamente, um quadrado de lado 9 tem 9 fileiras de 9 quadradinhos unitários, totalizando 81 unidades de área.\n\n40,5 divide a área por 2, sem relação com o lado. 18 dobra o valor correto. 8 tem quadrado 64. E 27 é a área dividida por 3, que também não é a raiz.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Um cubo tem aresta de 4 cm. Qual é o volume desse cubo, em cm³?",
    opcoes: [
      "16",
      "12",
      "64",
      "48",
      "256",
    ],
    correta: 2,
    explicacao:
      "O volume do cubo é aresta × aresta × aresta = 4³ = 4 × 4 × 4 = 64 cm³. Conferindo, 4 × 4 = 16 e 16 × 4 = 64. Geometricamente, o cubo tem 4 camadas, cada uma com 4 × 4 = 16 cubinhos unitários, e 4 camadas de 16 cubinhos somam 64 cubinhos ao todo.\n\n16 é a área de uma face, 4², sem a terceira dimensão. 12 multiplica a aresta por 3. 48 multiplica 16 por 3 em vez de por 4. E 256 é 4⁴, um fator a mais.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Um cubo tem volume de 125 cm³. Quanto mede a aresta desse cubo, em cm?",
    opcoes: [
      "25",
      "15",
      "62,5",
      "5",
      "12,5",
    ],
    correta: 3,
    explicacao:
      "O volume do cubo é aresta³, então a aresta é a raiz cúbica do volume: ∛125 = 5 cm, pois 5 × 5 × 5 = 125. Conferindo, 5³ = 125.\n\n25 é 5², a área de uma face, e 25 × 25 × 25 é muito maior que 125. 15 é 125 dividido por 3 arredondado, e 62,5 é metade do volume, e 12,5 é um décimo dele. Nenhum desses, multiplicado por ele mesmo três vezes, dá 125.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "A raiz quadrada também vale para decimais. Quanto vale √0,36?",
    opcoes: [
      "0,06",
      "0,18",
      "0,36",
      "0,6",
      "6",
    ],
    correta: 3,
    explicacao:
      "Escrevendo 0,36 = 36/100, a raiz é √36/√100 = 6/10 = 0,6. Conferindo, 0,6 × 0,6 = 0,36, pois 6 × 6 = 36 e as duas casas decimais de cada fator somam duas casas decimais no produto. Essa mesma ideia vale para raízes de outros decimais que sejam quadrados de decimais exatos.\n\n0,06 tem quadrado 0,0036. 0,18 é a metade de 0,36, como se a raiz fosse dividir por 2. 0,36 é o próprio radicando. E 6 esquece de ajustar a vírgula.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Elevando −1 a um expoente ímpar, quanto vale (−1)¹⁰¹?",
    opcoes: [
      "1",
      "0",
      "−101",
      "−1",
      "101",
    ],
    correta: 3,
    explicacao:
      "As potências de −1 alternam entre −1 e 1: (−1)¹ = −1, (−1)² = 1, (−1)³ = −1, e assim por diante. Com expoente ímpar, o resultado é −1. Como 101 é ímpar, (−1)¹⁰¹ = −1. Em geral, (−1) elevado a um expoente par vale 1, e elevado a um expoente ímpar vale −1, qualquer que seja o tamanho do expoente.\n\n1 seria o valor com expoente par. 0 supõe, sem base, que a potência zera. −101 e 101 multiplicam a base pelo expoente, o que não vale para potências.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Comparando duas potências com bases e expoentes trocados, quanto vale 2⁵ − 5²?",
    opcoes: [
      "15",
      "−7",
      "3",
      "7",
      "57",
    ],
    correta: 3,
    explicacao:
      "Calculando cada potência, 2⁵ = 32 e 5² = 25. Subtraindo, 32 − 25 = 7. Os dois números parecem trocar base e expoente, mas resultam em valores diferentes, pois a potenciação não é comutativa.\n\n15 subtrai 10 − 5, multiplicando base e expoente. −7 inverte a ordem da subtração. 3 é a diferença 5 − 2 das bases. E 57 soma as potências em vez de subtrair.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Elevando uma potência de 10 a outro expoente, quanto vale (10²)³?",
    opcoes: [
      "100.000",
      "100.000.000",
      "60",
      "1.000.000",
      "1.000",
    ],
    correta: 3,
    explicacao:
      "Na potência de potência, multiplicam-se os expoentes: (10²)³ = 10²ˣ³ = 10⁶ = 1.000.000, o 1 seguido de seis zeros. Conferindo, 10² = 100 e 100 × 100 × 100 = 1.000.000.\n\n100.000 é 10⁵, somando os expoentes, 2 + 3. 100.000.000 é 10⁸, elevando 2 ao cubo e usando o resultado como expoente. 60 multiplica 10 por 2 e por 3. E 1.000 é 10³, conservando só um dos expoentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Comparando uma potência de base 2 com uma de base 10, quanto vale a diferença 2¹⁰ − 10³?",
    opcoes: [
      "0",
      "10",
      "1.000",
      "24",
      "124",
    ],
    correta: 3,
    explicacao:
      "Calculando cada uma, 2¹⁰ = 1.024 e 10³ = 1.000. Subtraindo, 1.024 − 1.000 = 24. Por isso, 2¹⁰ é frequentemente usada como uma aproximação de mil, com erro de apenas 24 unidades.\n\n0 supõe que as duas potências são iguais, o que não é verdade. 10 é apenas o expoente de 2¹⁰, sem relação com a diferença pedida. 1.000 é o valor de 10³ sozinho. E 124 erra a subtração por 100.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "A raiz cúbica de um cubo perfeito é exata. Qual é a raiz cúbica de 216?",
    opcoes: [
      "72",
      "36",
      "14",
      "6",
      "12",
    ],
    correta: 3,
    explicacao:
      "A raiz cúbica de 216 é o número cujo cubo é 216. Como 6 × 6 × 6 = 216, a raiz cúbica é 6. Outra forma é fatorar, 216 = 2³ × 3³, e extrair um grupo de três de cada fator: 2 × 3 = 6. Conferindo, 6³ = 6 × 6 × 6 = 36 × 6 = 216, o que mostra que a raiz cúbica desfaz o cubo.\n\n72 é 216 dividido por 3, sem relação com a raiz. 36 é 6², o quadrado de 6. 14 e 12 ficam longe: 14³ é bem maior que 216, e 12³ = 1.728.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Combinando raiz e potência, quanto vale √(2⁶)?",
    opcoes: [
      "12",
      "6",
      "32",
      "8",
      "3",
    ],
    correta: 3,
    explicacao:
      "Calculando 2⁶ = 64, e √64 = 8. Outra forma é usar a propriedade: a raiz quadrada de uma potência de expoente par divide o expoente por 2, então √(2⁶) = 2³ = 8.\n\n12 multiplica 6 por 2, em vez de dividir. 6 repete o expoente, sem calcular a raiz. 32 é 2⁵, 2⁶ dividido por 2, que confunde raiz com metade. E 3 é o expoente da resposta correta, sem a base elevada a ele.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Combinando potência de potência e divisão, quanto vale (2²)³ ÷ 2⁴?",
    opcoes: [
      "2",
      "8",
      "16",
      "4",
      "1",
    ],
    correta: 3,
    explicacao:
      "Primeiro, (2²)³ = 2⁶ = 64. Depois, 2⁶ ÷ 2⁴ = 2⁶⁻⁴ = 2² = 4. Conferindo, 64 ÷ 16 = 4. Esse tipo de expressão se resolve com as propriedades das potências, sem precisar calcular números grandes.\n\n2 é o expoente da resposta ou o valor de uma potência intermediária, sem calcular o resultado final. 8 soma os expoentes do numerador em vez de multiplicá-los. 16 é o divisor, 2⁴. E 1 supõe, sem base, que as potências se cancelam por completo.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "media",
    enunciado:
      "Seguindo a ordem das operações, em que potência vem antes de multiplicação e adição, quanto vale 2 + 3 × 2³?",
    opcoes: [
      "40",
      "128",
      "14",
      "26",
      "80",
    ],
    correta: 3,
    explicacao:
      "Primeiro, a potência: 2³ = 8. Depois, a multiplicação: 3 × 8 = 24. Por fim, a adição: 2 + 24 = 26. A sequência de prioridades nas operações é potências e raízes, depois multiplicações e divisões, e por fim adições e subtrações.\n\n40 faz (2 + 3) × 8, somando antes de multiplicar. 128 eleva (2 + 3 × 2) ao cubo, ou seja, 2³ × 16. 14 é 2 + 3 × 4, usando 2² em vez de 2³. E 80 multiplica antes de elevar, (2 + 3) × 16.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Dividindo duas potências de expoentes grandes e de mesma base, quanto vale 3⁵⁰ ÷ 3⁴⁸?",
    opcoes: [
      "3",
      "27",
      "81",
      "2",
      "9",
    ],
    correta: 4,
    explicacao:
      "Na divisão de potências de mesma base, subtraem-se os expoentes: 3⁵⁰ ÷ 3⁴⁸ = 3⁵⁰⁻⁴⁸ = 3² = 9. Não é preciso calcular os números enormes: basta notar que 3⁵⁰ = 3⁴⁸ × 3², e o fator 3⁴⁸ se cancela.\n\n3 é o expoente 1, ou só a base. 27 é 3³ e 81 é 3⁴, expoentes maiores que a diferença 2. E 2 é a diferença dos expoentes, e não o valor da potência.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "As potências de 7 terminam em algarismos que se repetem em ciclo. Qual é o último algarismo de 7²⁰²⁴?",
    opcoes: [
      "7",
      "9",
      "3",
      "0",
      "1",
    ],
    correta: 4,
    explicacao:
      "Os últimos algarismos das potências de 7 são 7, 9, 3, 1 para os expoentes 1, 2, 3, 4, e depois o ciclo se repete a cada 4. Como 2.024 = 4 × 506, o expoente é múltiplo de 4, e o último algarismo é o mesmo de 7⁴, isto é, 1.\n\n7 é o algarismo final para expoentes que deixam resto 1 na divisão por 4, e 9, para resto 2. 3, para resto 3. E 0 é impossível, pois 7 e suas potências nunca terminam em zero.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Fatorando o radicando em fatores primos, qual é a raiz quadrada de 1.764?",
    opcoes: [
      "882",
      "44",
      "36",
      "49",
      "42",
    ],
    correta: 4,
    explicacao:
      "Fatorando, 1.764 = 2² × 3² × 7². Como cada expoente é par, a raiz quadrada é obtida tomando metade de cada um: 2 × 3 × 7 = 42. Conferindo, 42 × 42 = 1.764. O método da fatoração evita tentativas ao acaso e funciona para qualquer quadrado perfeito, mesmo grande.\n\n882 é metade de 1.764, e não a raiz. 44 e 36 ficam perto do valor correto, mas 44² = 1.936 e 36² = 1.296, que não são 1.764. E 49 tem quadrado 2.401.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Elevando uma raiz quadrada não exata a um expoente par, quanto vale (√2)⁶?",
    opcoes: [
      "6",
      "12",
      "4",
      "2",
      "8",
    ],
    correta: 4,
    explicacao:
      "(√2)⁶ = ((√2)²)³ = 2³ = 8, pois (√2)² = 2. Em outras palavras, cada par de fatores √2 × √2 dá 2, e são três pares, 2 × 2 × 2 = 8. Esse resultado é racional, embora √2 seja irracional, porque a potência de expoente par elimina a raiz: o expoente 6 é múltiplo de 2.\n\n6 e 12 multiplicam a base ou o radicando pelo expoente. 4 faz (√2)⁴ = 4, dois pares em vez de três. E 2 é só (√2)² = 2, um único par.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Contando os algarismos de um número grande, quantos algarismos tem 2²⁰?",
    opcoes: [
      "6",
      "8",
      "20",
      "5",
      "7",
    ],
    correta: 4,
    explicacao:
      "Calculando, 2²⁰ = 2¹⁰ × 2¹⁰ = 1.024 × 1.024 = 1.048.576. Esse número tem 7 algarismos: 1, 0, 4, 8, 5, 7 e 6. Como 10⁶ = 1.000.000 tem 7 algarismos e 10⁷ tem 8, 2²⁰ está entre 10⁶ e 10⁷, e portanto tem 7 algarismos.\n\n6 conta só os algarismos depois do primeiro. 8 conta um algarismo a mais. 20 confunde o número de algarismos com o expoente. E 5 subestima o tamanho, pois 2²⁰ passa de um milhão.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Qual é o menor número natural, maior que zero, pelo qual se deve multiplicar 72 para obter um quadrado perfeito?",
    opcoes: [
      "3",
      "6",
      "4",
      "8",
      "2",
    ],
    correta: 4,
    explicacao:
      "Fatorando, 72 = 2³ × 3². Para ser quadrado perfeito, todos os expoentes têm de ser pares. O 3 já está com expoente 2, mas o 2 está com expoente 3, ímpar. Multiplicando por mais um fator 2, o expoente sobe para 4, e 72 × 2 = 144 = 12².\n\n3 e 6 acrescentam fatores 3, que estragariam o expoente 2 do 3. 4 acrescenta dois fatores 2, resultando no expoente 5, ímpar. E 8 acrescenta três fatores 2, resultando em 2⁶ × 3², mas não é o menor número possível.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Calculando primeiro os quadrados dentro da raiz, quanto vale √(12² + 5²)?",
    opcoes: [
      "17",
      "7",
      "169",
      "119",
      "13",
    ],
    correta: 4,
    explicacao:
      "Calculando 12² = 144 e 5² = 25, a soma é 144 + 25 = 169. Como 13 × 13 = 169, √169 = 13. Os números 5, 12 e 13 formam um trio pitagórico, os lados de um triângulo retângulo.\n\n17 soma as bases, 12 + 5, sem elevar ao quadrado nem extrair a raiz, enquanto a raiz de uma soma não é a soma das raízes. 7 é a diferença das bases. 169 é o radicando, sem extrair a raiz. E 119 subtrai 25 de 144 em vez de somar.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Somando cinco parcelas iguais a 5², qual é o total?",
    opcoes: [
      "25",
      "625",
      "3.125",
      "50",
      "125",
    ],
    correta: 4,
    explicacao:
      "Cinco parcelas iguais a 5² somam 5 × 5² = 5¹ × 5² = 5³ = 125. Conferindo, 5² = 25 e 5 × 25 = 125. Somar cinco parcelas iguais equivale a multiplicar por 5, o que soma 1 ao expoente da base, pois 5 é a própria base.\n\n25 é uma única parcela. 625 é 5⁴, como se a soma fosse um produto de 25 por ele mesmo. 3.125 é 5⁵, multiplicando as cinco parcelas de 5, e não somando. E 50 soma só duas parcelas.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Multiplicando duas potências com bases negativas e expoentes diferentes, quanto vale (−2)³ × (−3)²?",
    opcoes: [
      "72",
      "−36",
      "36",
      "−17",
      "−72",
    ],
    correta: 4,
    explicacao:
      "Calculando cada potência, (−2)³ = −8, negativo pelo expoente ímpar, e (−3)² = 9, positivo pelo expoente par. O produto é −8 × 9 = −72. O expoente ímpar mantém o sinal negativo da base, e o expoente par o elimina, definindo o sinal do produto final.\n\n72 perde o sinal negativo de (−2)³. −36 e 36 usam o produto 2 × ... sem relação com as duas potências, como 4 × 9. E −17 soma os dois valores, −8 + (−9), trocando o sinal de 9.",
  },
  {
    materia: "matematica-fund",
    tema: "Potenciação e radiciação",
    dificuldade: "dificil",
    enunciado:
      "Comparando potências de bases e expoentes diferentes, qual destes números é o maior?",
    opcoes: [
      "2³⁰",
      "4¹⁵",
      "5¹²",
      "10⁸",
      "3²⁰",
    ],
    correta: 4,
    explicacao:
      "Calculando cada valor, 3²⁰ = 3.486.784.401, 2³⁰ = 1.073.741.824, 4¹⁵ = 2³⁰ = 1.073.741.824, 5¹² = 244.140.625 e 10⁸ = 100.000.000. O maior deles é 3²⁰, com cerca de 3,5 bilhões.\n\n2³⁰ e 4¹⁵ são iguais, pois 4¹⁵ = (2²)¹⁵ = 2³⁰, e valem pouco mais de 1 bilhão. 5¹² vale cerca de 244 milhões. E 10⁸ vale 100 milhões. Ter a base ou o expoente maior sozinho não garante o maior valor.",
  },
];
