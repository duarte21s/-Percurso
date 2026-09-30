/* Expressões algébricas e monômios (50 questões) — matematica-fund.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/matematica-fund__expressoes-algebricas-e-monomios.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/matematica-fund__expressoes-algebricas-e-monomios.json. */

export const questoes = [
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "O valor numérico de uma expressão algébrica é o resultado obtido ao trocar a letra por um número. Qual é o valor numérico de 3x + 5 para x = 4?",
    opcoes: [
      "17",
      "12",
      "27",
      "9",
      "20",
    ],
    correta: 0,
    explicacao:
      "Troca-se x por 4 e efetuam-se as operações na ordem: a multiplicação vem antes da soma, então 3 × 4 = 12, e 12 + 5 = 17. Conferindo, 17 − 5 = 12 e 12 ÷ 3 = 4, o valor de x usado.\n\n12 esquece de somar o 5. 27 soma primeiro, 4 + 5 = 9, e depois multiplica por 3, o que equivale a 3(x + 5), outra expressão. 9 soma 4 e 5, ignorando o fator 3. E 20 multiplica 4 por 5, sem relação com a expressão dada.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Num monômio, o coeficiente é o número que multiplica a parte literal. Qual é o coeficiente do monômio −7x²y?",
    opcoes: [
      "−7",
      "7",
      "2",
      "−14",
      "1",
    ],
    correta: 0,
    explicacao:
      "O monômio −7x²y é o produto do número −7 pelas letras x², y. O coeficiente é o fator numérico, com o sinal: −7. A parte literal, x²y, não entra no coeficiente.\n\n7 esquece o sinal negativo, que faz parte do coeficiente. 2 é o expoente de x, e não o coeficiente. −14 multiplica o coeficiente pelo expoente de x, o que não se faz. E 1 seria o coeficiente de um monômio sem número escrito, como xy.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Num monômio, a parte literal reúne as letras com seus expoentes. Qual é a parte literal do monômio 5ab³?",
    opcoes: [
      "ab³",
      "5ab",
      "b³",
      "5",
      "ab",
    ],
    correta: 0,
    explicacao:
      "O monômio 5ab³ tem coeficiente 5 e parte literal ab³, isto é, o fator a, com expoente 1 subentendido, multiplicado pelo fator b elevado ao cubo. O coeficiente não faz parte da parte literal.\n\n5ab inclui o coeficiente e perde o expoente 3 de b. b³ esquece o fator a. 5 é o coeficiente, e não a parte literal. E ab perde o expoente 3 de b, que muda o monômio.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "O grau de um monômio é a soma dos expoentes das suas letras. Qual é o grau do monômio 4x²y³?",
    opcoes: [
      "5",
      "6",
      "2",
      "3",
      "9",
    ],
    correta: 0,
    explicacao:
      "Somando os expoentes das letras, 2 (de x) e 3 (de y), obtém-se 2 + 3 = 5. O coeficiente 4 não entra na conta do grau. Em monômios com uma só letra, o grau é simplesmente o expoente dessa letra.\n\n6 multiplica os expoentes, 2 × 3, em vez de somá-los. 2 e 3 são os graus em relação a uma só letra, e não o grau do monômio inteiro. E 9 soma o coeficiente e os expoentes, 4 + 2 + 3, o que não se faz.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Monômios semelhantes têm a mesma parte literal, podendo ter coeficientes diferentes. Qual destes monômios é semelhante a 3x²y?",
    opcoes: [
      "−5x²y",
      "3xy²",
      "3x²",
      "x²y²",
      "3xy",
    ],
    correta: 0,
    explicacao:
      "Um monômio é semelhante a 3x²y quando tem exatamente as mesmas letras com os mesmos expoentes: x² e y. O monômio −5x²y tem essa parte literal, e só o coeficiente difere.\n\n3xy² tem as mesmas letras, mas com os expoentes trocados, x e y². 3x² não tem a letra y. x²y² tem y com expoente 2. E 3xy tem x com expoente 1. Em todos esses, a parte literal é diferente.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Somando monômios semelhantes, somam-se os coeficientes e mantém-se a parte literal. Qual é o resultado de 4a + 3a?",
    opcoes: [
      "7a",
      "7a²",
      "12a",
      "43a",
      "a",
    ],
    correta: 0,
    explicacao:
      "Os dois termos têm a mesma parte literal, a, então somam-se os coeficientes: 4 + 3 = 7, e o resultado é 7a. Em outras palavras, 4 vezes a mais 3 vezes a são 7 vezes a. Conferindo com a = 2, 4 × 2 + 3 × 2 = 14 = 7 × 2.\n\n7a² eleva a letra ao quadrado, o que só ocorreria numa multiplicação. 12a multiplica os coeficientes. 43a apenas junta os algarismos 4 e 3. E a despreza os coeficientes.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Subtraindo monômios semelhantes, subtraem-se os coeficientes e mantém-se a parte literal. Qual é o resultado de 9x − 4x?",
    opcoes: [
      "5x",
      "13x",
      "5",
      "36x",
      "5x²",
    ],
    correta: 0,
    explicacao:
      "Os dois termos têm a parte literal x, então subtraem-se os coeficientes: 9 − 4 = 5, e o resultado é 5x. Conferindo com x = 3, 9 × 3 − 4 × 3 = 27 − 12 = 15 = 5 × 3.\n\n13x soma os coeficientes em vez de subtrair. 5 perde a letra, como se x valesse 1. 36x multiplica os coeficientes. E 5x² eleva a letra ao quadrado, o que não acontece numa subtração.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Um quadrado tem lado de medida x. Qual expressão representa o perímetro desse quadrado?",
    opcoes: [
      "4x",
      "x⁴",
      "x + 4",
      "x²",
      "2x",
    ],
    correta: 0,
    explicacao:
      "O perímetro é a soma dos quatro lados, todos iguais a x: x + x + x + x = 4x. Em geral, o perímetro do quadrado é 4 vezes o lado. Conferindo com x = 5, o perímetro é 20, e 4 × 5 = 20.\n\nx⁴ multiplica o lado por ele mesmo quatro vezes, em vez de somá-lo. x + 4 soma 4 ao lado, sem multiplicar. x² é a área do quadrado, e não o perímetro. E 2x seria a soma de só dois lados.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Traduzindo para a linguagem algébrica, como se escreve o dobro de um número n, somado a 7?",
    opcoes: [
      "2n + 7",
      "2(n + 7)",
      "n² + 7",
      "2 + n + 7",
      "n + 14",
    ],
    correta: 0,
    explicacao:
      "O dobro de n é 2n, e somar 7 dá 2n + 7. Note que só o n é dobrado, e o 7 é somado depois. Conferindo com n = 5, o dobro é 10, e 10 + 7 = 17, e 2 × 5 + 7 = 17.\n\n2(n + 7) dobra também o 7, o que equivale a 2n + 14. n² + 7 eleva n ao quadrado, em vez de dobrá-lo. 2 + n + 7 soma 2 em vez de multiplicar por 2. E n + 14 soma 7 duas vezes, sem dobrar n.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Substituindo a por 5 na expressão a² − 3a, qual é o valor numérico obtido?",
    opcoes: [
      "10",
      "16",
      "−5",
      "22",
      "−10",
    ],
    correta: 0,
    explicacao:
      "Troca-se a por 5: 5² − 3 × 5 = 25 − 15 = 10. A potência é calculada primeiro, depois a multiplicação, e por fim a subtração. Conferindo, 10 = 5 × (5 − 3) = 5 × 2. Outra forma é colocar a em evidência: a(a − 3) = 5 × 2 = 10.\n\n16 calcula (5 − 3)² + 12, sem relação com a expressão. −5 subtrai 5 − 10, tratando a² como 2a. 22 soma em vez de subtrair. E −10 troca o sinal do resultado correto.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Multiplicando monômios, multiplicam-se os coeficientes e somam-se os expoentes da mesma letra. Qual é o resultado de (2x) · (3x)?",
    opcoes: [
      "5x",
      "6x²",
      "6x",
      "5x²",
      "6",
    ],
    correta: 1,
    explicacao:
      "Multiplicam-se os coeficientes, 2 × 3 = 6, e as letras, x · x = x¹⁺¹ = x². O resultado é 6x². Conferindo com x = 2, 2 × 2 = 4, 3 × 2 = 6 e 4 × 6 = 24, que é 6 × 2².\n\n5x soma os coeficientes, como numa adição de termos semelhantes. 6x esquece de multiplicar as letras, mantendo o expoente 1. 5x² soma os coeficientes e multiplica as letras. E 6 perde a parte literal.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "facil",
    enunciado:
      "Cada caderno custa c reais e cada caneta custa p reais. Qual expressão representa o gasto com 3 cadernos e 2 canetas?",
    opcoes: [
      "6cp",
      "3c + 2p",
      "5cp",
      "3c + 2",
      "c + p",
    ],
    correta: 1,
    explicacao:
      "Os 3 cadernos custam 3 × c = 3c, e as 2 canetas custam 2 × p = 2p. O gasto total é a soma dos dois: 3c + 2p. Conferindo com c = 5 e p = 2, o gasto é 15 + 4 = 19.\n\n6cp multiplica os números e os preços, o que não representa uma soma de gastos. 5cp também multiplica os preços. 3c + 2 esquece de multiplicar o 2 por p. E c + p representa o gasto com um caderno e uma caneta.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Substituindo x por −2, qual é o valor numérico da expressão 2x² − 3x + 1?",
    opcoes: [
      "−1",
      "15",
      "3",
      "9",
      "−13",
    ],
    correta: 1,
    explicacao:
      "Troca-se x por −2: 2 × (−2)² − 3 × (−2) + 1 = 2 × 4 + 6 + 1 = 8 + 6 + 1 = 15. O quadrado de −2 é 4, positivo, e −3 × (−2) = +6. Conferindo com outra substituição, para x = 2 o valor seria 2 × 4 − 6 + 1 = 3, o que mostra que o sinal de x faz toda a diferença.\n\n−1 trata (−2)² como −4, esquecendo o sinal do quadrado de um negativo. 3 erra o sinal do termo −3x, calculando −6. 9 esquece o 1 final ou o 2 do primeiro termo. E −13 acumula vários erros de sinal.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Reduzindo os termos semelhantes, qual é a forma mais simples de 5x + 3y − 2x + 4y?",
    opcoes: [
      "7x + 7y",
      "3x + 7y",
      "3x − y",
      "3x + 7",
      "10xy",
    ],
    correta: 1,
    explicacao:
      "Agrupam-se os termos semelhantes: os de x, 5x − 2x = 3x, e os de y, 3y + 4y = 7y. O resultado é 3x + 7y. Conferindo com x = 1 e y = 2, a expressão original vale 5 + 6 − 2 + 8 = 17, e 3 + 14 = 17.\n\n7x + 7y soma 5x e 2x em vez de subtrair. 3x − y subtrai os termos de y. 3x + 7 perde a letra y. E 10xy soma todos os coeficientes e junta as letras, o que não se pode fazer com termos diferentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Multiplicando os monômios, qual é o resultado de (3x²y) · (4xy³)?",
    opcoes: [
      "12x²y³",
      "12x³y⁴",
      "7x³y⁴",
      "12x³y³",
      "7x²y³",
    ],
    correta: 1,
    explicacao:
      "Multiplicam-se os coeficientes, 3 × 4 = 12, e somam-se os expoentes de cada letra: x²·x = x³ e y·y³ = y⁴. O resultado é 12x³y⁴. Conferindo com x = 1 e y = 2, 3 × 2 = 6, 4 × 8 = 32 e 6 × 32 = 192, que é 12 × 16.\n\n12x²y³ mantém os expoentes do primeiro monômio. 7x³y⁴ soma os coeficientes em vez de multiplicá-los. 12x³y³ esquece de somar o expoente 1 de y. E 7x²y³ faz as duas trocas de erros.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Dividindo monômios, dividem-se os coeficientes e subtraem-se os expoentes. Qual é o resultado de (12a⁵b²) ÷ (3a²b)?",
    opcoes: [
      "4a⁷b³",
      "4a³b",
      "9a³b",
      "4a³",
      "36a⁷b³",
    ],
    correta: 1,
    explicacao:
      "Dividem-se os coeficientes, 12 ÷ 3 = 4, e subtraem-se os expoentes de cada letra: a⁵ ÷ a² = a³ e b² ÷ b = b. O resultado é 4a³b. Conferindo com a = 2 e b = 3, 12 × 32 × 9 = 3.456 e 3 × 4 × 3 = 36, e 3.456 ÷ 36 = 96 = 4 × 8 × 3.\n\n4a⁷b³ soma os expoentes em vez de subtraí-los. 9a³b subtrai os coeficientes. 4a³ esquece o fator b. E 36a⁷b³ multiplica em vez de dividir.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Elevando um monômio a uma potência, elevam-se o coeficiente e cada letra, multiplicando os expoentes. Qual é o resultado de (2x³)²?",
    opcoes: [
      "2x⁶",
      "4x⁶",
      "4x⁵",
      "2x⁵",
      "4x⁹",
    ],
    correta: 1,
    explicacao:
      "Eleva-se o coeficiente ao quadrado, 2² = 4, e multiplica-se o expoente da letra, 3 × 2 = 6. O resultado é 4x⁶. Conferindo com x = 1, (2 × 1)² = 4 e 4 × 1 = 4, e com x = 2, (2 × 8)² = 256 = 4 × 64.\n\n2x⁶ esquece de elevar o coeficiente ao quadrado. 4x⁵ soma os expoentes, 3 + 2, em vez de multiplicá-los. 2x⁵ comete os dois erros. E 4x⁹ eleva o expoente ao cubo e ao quadrado em sequência, 3³, sem relação com a potência.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Aplicando a propriedade distributiva, qual é a forma desenvolvida de 3(x + 4)?",
    opcoes: [
      "3x + 4",
      "3x + 12",
      "x + 12",
      "3x + 7",
      "12x",
    ],
    correta: 1,
    explicacao:
      "A propriedade distributiva diz que o fator 3 multiplica cada termo dentro dos parênteses: 3 × x + 3 × 4 = 3x + 12. Conferindo com x = 2, 3 × (2 + 4) = 18 e 3 × 2 + 12 = 18.\n\n3x + 4 multiplica só o primeiro termo. x + 12 multiplica só o segundo. 3x + 7 soma o 3 ao 4 em vez de multiplicar. E 12x junta tudo num só termo, o que não se pode fazer com termos diferentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Aplicando a distributiva com fator negativo, qual é a forma desenvolvida de −2(3a − 5)?",
    opcoes: [
      "−6a − 10",
      "−6a + 10",
      "−6a − 5",
      "6a + 10",
      "−a − 3",
    ],
    correta: 1,
    explicacao:
      "O fator −2 multiplica cada termo: −2 × 3a = −6a, e −2 × (−5) = +10. O resultado é −6a + 10. Conferindo com a = 1, −2 × (3 − 5) = −2 × (−2) = 4, e −6 + 10 = 4.\n\n−6a − 10 esquece que negativo vezes negativo dá positivo. −6a − 5 não multiplica o segundo termo. 6a + 10 erra o sinal do primeiro produto. E −a − 3 soma o −2 aos termos em vez de multiplicar.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem lados de medidas 2x + 3 e x + 1. Qual expressão representa o perímetro desse retângulo?",
    opcoes: [
      "3x + 4",
      "6x + 8",
      "6x + 4",
      "2x² + 5x + 3",
      "8x",
    ],
    correta: 1,
    explicacao:
      "O perímetro é a soma dos quatro lados, que é o dobro da soma dos dois lados diferentes: 2 × [(2x + 3) + (x + 1)] = 2 × (3x + 4) = 6x + 8. Conferindo com x = 1, os lados são 5 e 2, e o perímetro é 14, e 6 + 8 = 14.\n\n3x + 4 é o semiperímetro, a soma de só dois lados. 6x + 4 esquece de dobrar o 4. 2x² + 5x + 3 é a área do retângulo, (2x + 3)(x + 1). E 8x junta termos diferentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem lados de medidas 2x e 5. Qual expressão representa a área desse retângulo?",
    opcoes: [
      "7x",
      "2x + 5",
      "10x",
      "10",
      "2x⁵",
    ],
    correta: 2,
    explicacao:
      "A área é o produto das medidas dos lados: 2x × 5 = 10x. Multiplica-se o coeficiente 2 por 5, e a letra x é mantida. Conferindo com x = 3, os lados são 6 e 5, a área é 30, e 10 × 3 = 30.\n\n7x soma 2x e 5x, como se a área fosse uma soma. 2x + 5 soma os lados. 10 perde a letra x. E 2x⁵ eleva x ao expoente 5, como se a medida 5 fosse um expoente.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Somando os expoentes de todas as letras, qual é o grau do monômio 7a²b⁴c?",
    opcoes: [
      "6",
      "8",
      "7",
      "4",
      "2",
    ],
    correta: 2,
    explicacao:
      "Somam-se os expoentes das letras: a tem 2, b tem 4 e c tem 1, expoente subentendido. O grau é 2 + 4 + 1 = 7. O coeficiente 7 não entra na conta. O grau é uma propriedade do monômio todo, e não de cada letra, por isso todas as letras entram na soma.\n\n6 esquece de contar o expoente 1 do fator c. 8 conta o coeficiente ou erra a soma. 4 é o maior expoente, e não a soma. E 2 é o expoente de a, só uma letra.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Substituindo a por 3 e b por 2, qual é o valor numérico de (a + b)²?",
    opcoes: [
      "13",
      "10",
      "25",
      "11",
      "36",
    ],
    correta: 2,
    explicacao:
      "Primeiro se calcula a soma entre parênteses: 3 + 2 = 5. Depois, eleva-se ao quadrado: 5² = 25. Os parênteses indicam que a soma é elevada ao quadrado, e não cada letra. Por isso, é um erro comum trocar (a + b)² por a² + b², que dá 13 nesse caso, e não 25.\n\n13 é a² + b² = 9 + 4, que não é o quadrado da soma. 10 é 2ab, apenas o termo do meio. 11 e 36 misturam resultados parciais sem relação com a expressão.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Substituindo a por 4 e b por 3, qual é o valor numérico de 3a − b²?",
    opcoes: [
      "−3",
      "15",
      "3",
      "−21",
      "9",
    ],
    correta: 2,
    explicacao:
      "Troca-se: 3 × 4 − 3² = 12 − 9 = 3. A potência é calculada antes da subtração, e o expoente vale só para b. Outra forma é observar que, como a potência tem prioridade sobre a subtração, o termo b² vale 3² = 9 antes de ser subtraído do 12 que vem de 3a, e 12 − 9 = 3, sem dúvida quanto à ordem das operações.\n\n−3 inverte a ordem da subtração. 15 soma 12 e 3 em vez de subtrair 9. −21 eleva (3a − b) ao quadrado ou erra o sinal. E 9 é só o valor de b².",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Como se escreve, em linguagem algébrica, a soma do triplo de x com o quadrado de y?",
    opcoes: [
      "(3x + y)²",
      "3(x + y²)",
      "3x + y²",
      "3x²y",
      "x³ + y²",
    ],
    correta: 2,
    explicacao:
      "O triplo de x é 3x, e o quadrado de y é y². A soma dos dois é 3x + y². Conferindo com x = 2 e y = 4, o triplo de x é 6, o quadrado de y é 16, e 6 + 16 = 22, e 3 × 2 + 4² = 22.\n\n(3x + y)² eleva a soma inteira ao quadrado. 3(x + y²) triplica também o y². 3x²y multiplica os termos em vez de somá-los. E x³ + y² usa o cubo de x em vez do triplo.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Um número a é aumentado de 20%. Qual expressão representa o resultado depois do aumento?",
    opcoes: [
      "a + 20",
      "0,2a",
      "1,2a",
      "a + 0,2",
      "20a",
    ],
    correta: 2,
    explicacao:
      "Aumentar 20% é somar a + 0,2a = 1,2a, isto é, 120% de a. Conferindo com a = 50, o aumento é 10 e o resultado é 60, e 1,2 × 50 = 60. Em geral, um aumento de p% multiplica o valor por 1 + p/100.\n\na + 20 soma 20 unidades, como se a taxa fosse uma quantia fixa. 0,2a é só o valor do aumento, sem somar a a. a + 0,2 soma 0,2 unidade. E 20a multiplica por 20, como se o aumento fosse de 2.000%.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Ana tem x anos e sua mãe tem o triplo da idade dela. Qual expressão representa a soma das idades das duas daqui a 5 anos?",
    opcoes: [
      "4x + 5",
      "3x + 10",
      "4x + 10",
      "4x + 25",
      "x + 15",
    ],
    correta: 2,
    explicacao:
      "Daqui a 5 anos, Ana terá x + 5, e a mãe, que hoje tem 3x, terá 3x + 5. A soma é (x + 5) + (3x + 5) = 4x + 10. Conferindo com x = 10, Ana terá 15, a mãe terá 35, e 15 + 35 = 50, e 4 × 10 + 10 = 50.\n\n4x + 5 soma os 5 anos uma só vez. 3x + 10 esquece de somar x. 4x + 25 soma 5 anos cinco vezes. E x + 15 não representa a soma das duas idades.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Eliminando os parênteses e reduzindo os termos semelhantes, qual é a forma simplificada de (5x + 2) − (2x − 3)?",
    opcoes: [
      "3x − 1",
      "7x − 1",
      "3x + 5",
      "3x + 1",
      "7x + 5",
    ],
    correta: 2,
    explicacao:
      "O sinal de menos diante do segundo parêntese troca o sinal de todos os termos dentro dele: (5x + 2) − 2x + 3 = 3x + 5. Conferindo com x = 1, (5 + 2) − (2 − 3) = 7 + 1 = 8, e 3 + 5 = 8.\n\n3x − 1 troca o sinal só do primeiro termo, esquecendo o −3. 7x − 1 soma 5x e 2x em vez de subtrair. 3x + 1 erra o sinal do 3. E 7x + 5 soma os termos em x.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Aplicando a distributiva e reduzindo os termos semelhantes, qual é a forma simplificada de 2(x + 3) + 3(x − 1)?",
    opcoes: [
      "5x + 9",
      "5x + 5",
      "5x + 3",
      "6x + 3",
      "5x + 15",
    ],
    correta: 2,
    explicacao:
      "Distribuindo, 2(x + 3) = 2x + 6 e 3(x − 1) = 3x − 3. Somando, 2x + 3x = 5x e 6 − 3 = 3, então o resultado é 5x + 3. Conferindo com x = 1, 2 × 4 + 3 × 0 = 8, e 5 + 3 = 8.\n\n5x + 9 esquece o sinal negativo no segundo parêntese. 5x + 5 erra a soma dos termos independentes. 6x + 3 soma 2x e 3x de modo errado. E 5x + 15 multiplica os termos independentes em vez de somar.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Multiplicando monômios com coeficientes negativos, qual é o resultado de (−2a) · (−3a²)?",
    opcoes: [
      "−6a³",
      "5a³",
      "6a³",
      "6a²",
      "−5a³",
    ],
    correta: 2,
    explicacao:
      "Multiplicam-se os coeficientes, (−2) × (−3) = +6, pois negativo vezes negativo dá positivo, e as letras, a · a² = a³. O resultado é 6a³. Conferindo com a = 1, (−2) × (−3) = 6.\n\n−6a³ erra o sinal, esquecendo que dois negativos dão positivo. 5a³ e −5a³ somam os coeficientes em vez de multiplicar. E 6a² soma só o expoente 1 e o 1 implícito, errando a soma dos expoentes.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Substituindo x por 10, qual é o valor numérico da expressão x/2 + 3?",
    opcoes: [
      "5",
      "13",
      "10",
      "8",
      "6",
    ],
    correta: 3,
    explicacao:
      "Troca-se x por 10: 10/2 + 3 = 5 + 3 = 8. A divisão é feita antes da soma. Conferindo, 8 − 3 = 5 e 5 × 2 = 10, o valor de x usado. Em outra ordem, x/2 é o mesmo que 0,5x, e 0,5 × 10 = 5, que somado a 3 confirma o valor 8 da expressão original.\n\n5 esquece de somar o 3. 13 soma 10 e 3, sem dividir por 2. 10 é o valor de x, sem aplicar a expressão. E 6 soma a metade de 6 com erro, sem seguir a expressão.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Sendo n um número inteiro qualquer, qual destas expressões representa sempre um número ímpar?",
    opcoes: [
      "2n",
      "n + 2",
      "n²",
      "2n + 1",
      "2n − 2",
    ],
    correta: 3,
    explicacao:
      "Um número par tem a forma 2n, e um ímpar é o seguinte, 2n + 1. Para n = 0, 1, 2, 3, os valores de 2n + 1 são 1, 3, 5, 7, todos ímpares, e o resultado de 2n mais 1 nunca é divisível por 2.\n\n2n e 2n − 2 são sempre pares, pois têm o fator 2. n + 2 tem a mesma paridade de n, então às vezes é par. E n² também tem a mesma paridade de n, às vezes par e às vezes ímpar.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Os termos da sequência 4, 7, 10, 13 crescem de 3 em 3. Qual expressão dá o n-ésimo termo, contando n = 1, 2, 3, ...?",
    opcoes: [
      "3n + 4",
      "4n",
      "n + 3",
      "3n + 1",
      "4n − 1",
    ],
    correta: 3,
    explicacao:
      "Como os termos crescem de 3 em 3, o n-ésimo termo tem a forma 3n + c. Para n = 1, 3 × 1 + c = 4, então c = 1, e o termo geral é 3n + 1. Conferindo, n = 2 dá 7, n = 3 dá 10 e n = 4 dá 13.\n\n3n + 4 dá 7 para n = 1, já começando no segundo termo. 4n dá 4, 8, 12, 16, crescendo de 4 em 4. n + 3 cresce de 1 em 1. E 4n − 1 dá 3, 7, 11, 15, crescendo de 4 em 4.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Uma pessoa paga com uma nota de R$ 50 a compra de x canetas de R$ 4 cada. Qual expressão representa o troco?",
    opcoes: [
      "4x − 50",
      "50 − x",
      "(50 − 4)x",
      "50 − 4x",
      "50 + 4x",
    ],
    correta: 3,
    explicacao:
      "O gasto é 4 reais por caneta, ou seja, 4x. O troco é o valor pago menos o gasto: 50 − 4x. Conferindo com x = 5, o gasto é 20 e o troco é 30, e 50 − 4 × 5 = 30.\n\n4x − 50 inverte a subtração, dando o negativo do troco. 50 − x esquece de multiplicar por 4. (50 − 4)x multiplica 46 por x, o que não corresponde ao troco. E 50 + 4x soma o gasto ao valor pago.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Reduzindo os termos semelhantes, qual é a forma mais simples de x² + x² + x²?",
    opcoes: [
      "x⁶",
      "3x⁶",
      "x³",
      "3x²",
      "3x",
    ],
    correta: 3,
    explicacao:
      "Os três termos são semelhantes, com a mesma parte literal x². Somam-se os coeficientes, 1 + 1 + 1 = 3, e mantém-se a parte literal: 3x². Conferindo com x = 2, 4 + 4 + 4 = 12, e 3 × 4 = 12.\n\nx⁶ e 3x⁶ somam os expoentes, o que só vale na multiplicação. x³ usa a soma dos coeficientes como se fosse o expoente. E 3x perde o expoente 2 da parte literal.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Para x = 2, que número se obtém calculando a expressão x · x · x + x + x + x?",
    opcoes: [
      "12",
      "10",
      "16",
      "14",
      "8",
    ],
    correta: 3,
    explicacao:
      "O produto x · x · x é x³ = 2³ = 8, e a soma x + x + x é 3x = 6. O valor é 8 + 6 = 14. Conferindo direto, 2 · 2 · 2 + 2 + 2 + 2 = 8 + 6 = 14. A diferença entre x + x + x e x · x · x é essencial: a primeira é uma soma, igual a 3x, e a segunda é um produto, igual a x³.\n\n12 trata a expressão como 6 + 6, sem calcular x³. 10 usa x² no lugar de x³. 16 duplica um dos termos. E 8 é só o valor de x³, sem somar os outros termos.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Substituindo a por 2 e b por −3, qual é o valor numérico da expressão 2a − ab + b²?",
    opcoes: [
      "7",
      "−1",
      "13",
      "19",
      "−5",
    ],
    correta: 3,
    explicacao:
      "Troca-se: 2 × 2 − 2 × (−3) + (−3)² = 4 + 6 + 9 = 19. O termo −ab vale −(2 × (−3)) = +6, e (−3)² = 9, positivo. O cuidado principal está nos sinais: quando b é negativo, o produto ab é negativo, o termo −ab passa a ser positivo, e b² é sempre positivo, já que o quadrado de um negativo é positivo.\n\n7 trata (−3)² como −9. −1 erra também o sinal do termo −ab. 13 esquece o 4 do primeiro termo. E −5 acumula erros de sinal em vários termos.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Qual das expressões é equivalente a 2(x + 3) − x, para qualquer valor de x?",
    opcoes: [
      "x + 3",
      "3x + 6",
      "x + 5",
      "x + 6",
      "2x + 3",
    ],
    correta: 3,
    explicacao:
      "Distribuindo, 2(x + 3) = 2x + 6. Subtraindo x, 2x + 6 − x = x + 6. Conferindo com x = 4, 2 × 7 − 4 = 10, e 4 + 6 = 10. Substituindo x por outros valores, como x = 0, também se confere: 2 × 3 − 0 = 6 e 0 + 6 = 6, o que reforça a equivalência.\n\nx + 3 esquece de multiplicar o 3 por 2. 3x + 6 soma o x em vez de subtraí-lo. x + 5 erra a soma dos termos independentes. E 2x + 3 perde o efeito do −x.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Multiplicando os binômios, qual é a forma desenvolvida de (x + 2)(x + 3)?",
    opcoes: [
      "x² + 6",
      "x² + 5x",
      "2x + 5",
      "x² + 5x + 6",
      "x² + 6x + 5",
    ],
    correta: 3,
    explicacao:
      "Multiplica-se cada termo do primeiro parêntese por cada termo do segundo: x · x + x · 3 + 2 · x + 2 · 3 = x² + 3x + 2x + 6 = x² + 5x + 6. Conferindo com x = 1, 3 × 4 = 12, e 1 + 5 + 6 = 12.\n\nx² + 6 esquece os termos do meio. x² + 5x esquece o termo independente. 2x + 5 soma os binômios em vez de multiplicá-los. E x² + 6x + 5 troca os coeficientes de x e o termo independente.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "media",
    enunciado:
      "Entre os monômios 3x⁴, 2x²y², 5xy³ e x²y³z, qual tem o maior grau?",
    opcoes: [
      "3x⁴",
      "2x²y²",
      "5xy³",
      "x²y³z",
      "São todos iguais",
    ],
    correta: 3,
    explicacao:
      "O grau é a soma dos expoentes das letras: 3x⁴ tem grau 4, 2x²y² tem grau 2 + 2 = 4, 5xy³ tem grau 1 + 3 = 4, e x²y³z tem grau 2 + 3 + 1 = 6. O maior é o de x²y³z.\n\nOs outros três têm grau 4, menor que 6. A opção de que todos são iguais também não vale, pois o quarto monômio tem grau maior. Os coeficientes 3, 2 e 5 não entram na conta do grau.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Se x + 1/x = 3, qual é o valor de x² + 1/x²?",
    opcoes: [
      "9",
      "11",
      "5",
      "3",
      "7",
    ],
    correta: 4,
    explicacao:
      "Eleva-se a igualdade ao quadrado: (x + 1/x)² = x² + 2 · x · (1/x) + 1/x² = x² + 2 + 1/x². Como o lado esquerdo vale 3² = 9, tem-se x² + 1/x² = 9 − 2 = 7. Conferindo numericamente, x = (3 + √5)/2 ≈ 2,618 satisfaz a equação, e 2,618² + 1/2,618² ≈ 6,854 + 0,146 = 7.\n\n9 é o valor de (x + 1/x)², sem subtrair o termo 2. 11 soma 2 em vez de subtrair. 5 e 3 não saem do desenvolvimento do quadrado da soma.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Desenvolvendo os quadrados e reduzindo os termos semelhantes, qual é a forma simplificada de (x + 3)² − (x − 3)²?",
    opcoes: [
      "18",
      "2x² + 18",
      "0",
      "6x",
      "12x",
    ],
    correta: 4,
    explicacao:
      "Desenvolvendo, (x + 3)² = x² + 6x + 9 e (x − 3)² = x² − 6x + 9. Subtraindo, x² − x² = 0, 6x − (−6x) = 12x e 9 − 9 = 0, então o resultado é 12x. Conferindo com x = 1, 16 − 4 = 12.\n\n18 soma os termos independentes, esquecendo que a subtração os cancela. 2x² + 18 soma as duas expressões em vez de subtraí-las. 0 supõe que as duas expressões são iguais. E 6x subtrai só um dos termos do meio.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que a + b = 7 e ab = 12, qual é o valor de a² + b²?",
    opcoes: [
      "19",
      "37",
      "49",
      "13",
      "25",
    ],
    correta: 4,
    explicacao:
      "Usa-se (a + b)² = a² + 2ab + b², então a² + b² = (a + b)² − 2ab = 49 − 24 = 25. Conferindo, a e b são 3 e 4, e 3² + 4² = 9 + 16 = 25. Esse método evita resolver o sistema, pois só usa o quadrado da soma, que é uma identidade válida para quaisquer a e b.\n\n19 subtrai 3 × 12 em vez de 2 × 12. 37 soma 2ab em vez de subtraí-lo. 49 é o valor de (a + b)², sem subtrair 2ab. E 13 é a + b + 6, sem relação com a expressão.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Uma cerca contorna um terreno triangular de lados 2x + 1, x + 4 e 3x − 2, em metros. Quantos metros de cerca, em função de x, são necessários para contornar todo o terreno?",
    opcoes: [
      "6x + 7",
      "5x + 3",
      "6x − 3",
      "7x + 3",
      "6x + 3",
    ],
    correta: 4,
    explicacao:
      "O perímetro é a soma dos três lados: (2x + 1) + (x + 4) + (3x − 2). Somando os termos em x, 2x + x + 3x = 6x, e os independentes, 1 + 4 − 2 = 3. O perímetro é 6x + 3. Conferindo com x = 2, os lados são 5, 6 e 4, somando 15, e 6 × 2 + 3 = 15.\n\n6x + 7 esquece o −2 do terceiro lado. 5x + 3 soma mal os coeficientes de x. 6x − 3 troca o sinal dos termos independentes. E 7x + 3 soma um x a mais.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Uma sala quadrada tem o lado medindo x + 2 metros. Qual expressão dá a quantidade de metros quadrados de piso necessários para cobri-la?",
    opcoes: [
      "x² + 4",
      "4x + 8",
      "x² + 2x + 4",
      "2x + 4",
      "x² + 4x + 4",
    ],
    correta: 4,
    explicacao:
      "A área é o lado ao quadrado: (x + 2)² = (x + 2)(x + 2) = x² + 2x + 2x + 4 = x² + 4x + 4. Conferindo com x = 1, o lado é 3, a área é 9, e 1 + 4 + 4 = 9. Conferindo, com x = 1, o lado mede 3 m e a área é 9 m², e 1 + 4 + 4 = 9.\n\nx² + 4 esquece o termo do meio, 4x, um erro muito comum. 4x + 8 é o perímetro do quadrado. x² + 2x + 4 tem o termo do meio errado. E 2x + 4 é a soma de dois lados, e não a área.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Se 3x − 2 = 10, qual é o valor numérico de 6x + 1?",
    opcoes: [
      "13",
      "24",
      "21",
      "26",
      "25",
    ],
    correta: 4,
    explicacao:
      "Resolvendo 3x − 2 = 10, 3x = 12 e x = 4. Então 6x + 1 = 6 × 4 + 1 = 25. Outra forma é notar que 6x = 2 × 3x = 2 × 12 = 24, e 24 + 1 = 25. As duas formas dão o mesmo resultado, mas a segunda evita calcular o valor de x, pois 6x é exatamente o dobro de 3x, e o dobro de 12 é 24, que com o 1 final dá 25.\n\n13 soma 10 + 3, sem resolver a equação. 24 é o valor de 6x, sem somar o 1. 21 calcula 6 × 3,5. E 26 soma 1 a 25 de novo.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Substituindo x por 3 e y por 5, qual é o valor numérico de (x + y)² − (x − y)²?",
    opcoes: [
      "16",
      "4",
      "15",
      "34",
      "60",
    ],
    correta: 4,
    explicacao:
      "Calculando cada parte, (3 + 5)² = 64 e (3 − 5)² = 4. A diferença é 64 − 4 = 60. Em geral, (x + y)² − (x − y)² = 4xy, e 4 × 3 × 5 = 60, o que confirma o resultado. Essa identidade mostra que a diferença entre os quadrados da soma e da diferença é sempre quatro vezes o produto dos números.\n\n16 é (x − y)² multiplicado por 4, sem relação com a diferença. 4 é só o valor de (x − y)². 15 é xy, sem o fator 4. E 34 é x² + y², a soma dos quadrados.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Dois números pares consecutivos são 2k e 2k + 2. Qual expressão representa o produto deles?",
    opcoes: [
      "4k² + 2",
      "4k + 2",
      "2k² + 2k",
      "4k²",
      "4k² + 4k",
    ],
    correta: 4,
    explicacao:
      "O produto é 2k · (2k + 2). Distribuindo, 2k · 2k + 2k · 2 = 4k² + 4k. Conferindo com k = 3, os números são 6 e 8, e o produto é 48, e 4 × 9 + 4 × 3 = 36 + 12 = 48. Por isso o produto é sempre múltiplo de 4.\n\n4k² + 2 troca o termo 4k por 2. 4k + 2 é a soma dos números, 2k + 2k + 2. 2k² + 2k esquece de multiplicar por 2 os dois termos. E 4k² esquece o segundo termo do produto.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Ao desenvolver o produto (x − 4)(x + 7), qual é o coeficiente do termo em x?",
    opcoes: [
      "−4",
      "7",
      "11",
      "−28",
      "3",
    ],
    correta: 4,
    explicacao:
      "Multiplicando, (x − 4)(x + 7) = x² + 7x − 4x − 28 = x² + 3x − 28. O termo em x é 3x, então o coeficiente é 7 − 4 = 3. Conferindo com x = 1, (−3) × 8 = −24, e 1 + 3 − 28 = −24.\n\n−4 e 7 são os termos independentes dos binômios, e não o coeficiente do produto. 11 soma 7 e 4, esquecendo o sinal negativo do −4. E −28 é o termo independente do produto.",
  },
  {
    materia: "matematica-fund",
    tema: "Expressões algébricas e monômios",
    dificuldade: "dificil",
    enunciado:
      "Simplificando a expressão (6x²y³ ÷ 2xy) · (x ÷ 3y), com x e y diferentes de zero, qual é o resultado?",
    opcoes: [
      "3x²y²",
      "x²y²",
      "3xy²",
      "9x²y",
      "x²y",
    ],
    correta: 4,
    explicacao:
      "Primeiro, 6x²y³ ÷ 2xy = 3xy², dividindo os coeficientes, 6 ÷ 2 = 3, e subtraindo os expoentes de cada letra. Depois, multiplicando por x ÷ 3y, tem-se 3xy² · x ÷ (3y) = 3x²y² ÷ 3y = x²y. Conferindo com x = 2 e y = 3, 6x²y³ ÷ 2xy = 648 ÷ 12 = 54, e 54 · (2 ÷ 9) = 12, que é x²y = 4 · 3.\n\n3x²y² esquece de dividir por y. x²y² também esquece a divisão por y. 3xy² é o resultado da primeira divisão, antes de multiplicar pela segunda fração. E 9x²y multiplica por 3 em vez de dividir.",
  },
];
