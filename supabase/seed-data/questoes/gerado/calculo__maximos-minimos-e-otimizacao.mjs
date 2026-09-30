/* Máximos, mínimos e otimização (50 questões) — calculo.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/calculo__maximos-minimos-e-otimizacao.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/calculo__maximos-minimos-e-otimizacao.json. */

export const questoes = [
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Quais são os pontos críticos da função f(x) = x³ − 3x?",
    opcoes: [
      "x = −1 e x = 1",
      "x = 0",
      "x = −√3, x = 0 e x = √3",
      "Só x = 1",
      "x = −√3 e x = √3",
    ],
    correta: 0,
    explicacao:
      "Pontos críticos são os valores de x em que a derivada se anula ou não existe. Aqui f'(x) = 3x² − 3 = 3(x² − 1), que se anula em x = −1 e x = 1. Pelo sinal de f', positivo fora de [−1, 1] e negativo dentro, x = −1 é um máximo local e x = 1 é um mínimo local.\n\nx = 0 é onde se anula a derivada segunda, 6x, e marca a inflexão. x = −√3, x = 0 e x = √3 são as raízes da própria função, e não da derivada. Só x = 1 esquece a raiz negativa de x² = 1. E x = −√3 e x = √3 esquecem o fator 3 de 3x², resolvendo x² − 3 = 0.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor máximo da função f(x) = −x² + 6x − 5?",
    opcoes: [
      "4",
      "3",
      "−5",
      "9",
      "14",
    ],
    correta: 0,
    explicacao:
      "A derivada f'(x) = −2x + 6 se anula em x = 3, e como f''(x) = −2 < 0, esse ponto é um máximo. O valor máximo é f(3) = −9 + 18 − 5 = 4. É o vértice da parábola, que tem concavidade para baixo e, por isso, um único máximo absoluto.\n\n3 é a abscissa do máximo, e não o valor da função. −5 é f(0), onde o gráfico corta o eixo y. 9 esquece o termo −5 e fica com −9 + 18. E 14 erra o sinal do termo −5 no discriminante: (36 + 20)/4.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Sabe-se que f'(x₀) = 0 e f''(x₀) > 0, com f derivável duas vezes. O que se pode concluir sobre o ponto x₀?",
    opcoes: [
      "Há um mínimo local em x₀",
      "Há um máximo local em x₀",
      "Há um ponto de inflexão em x₀",
      "Há um mínimo absoluto em x₀, necessariamente",
      "Nada se pode concluir",
    ],
    correta: 0,
    explicacao:
      "É o teste da derivada segunda. Com f'(x₀) = 0, a tangente é horizontal em x₀; com f''(x₀) > 0, a derivada é crescente perto de x₀ e passa de negativa a positiva. A função desce e depois sobe: há um mínimo local em x₀. Um exemplo é f(x) = x² em c = 0.\n\nMáximo local exigiria f''(x₀) < 0. Inflexão exige que a concavidade mude, e com f''(x₀) > 0 ela é para cima dos dois lados. O mínimo não precisa ser absoluto: x³ − 3x tem mínimo local em x = 1, mas vai a −∞. E dá para concluir, sim: o sinal de f'' decide o tipo do ponto crítico.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Qual é o menor valor que f(x) = x² − 4x + 1 assume no intervalo [0, 5]?",
    opcoes: [
      "−3",
      "2",
      "1",
      "6",
      "−4",
    ],
    correta: 0,
    explicacao:
      "Num intervalo fechado, os extremos absolutos só podem estar nos pontos críticos ou nas extremidades, e por isso basta comparar esses valores. A derivada f'(x) = 2x − 4 se anula em x = 2, dentro do intervalo, e os candidatos valem f(0) = 1, f(2) = 4 − 8 + 1 = −3 e f(5) = 25 − 20 + 1 = 6. O menor valor é −3, em x = 2.\n\n2 é o ponto onde o mínimo ocorre, e não o valor mínimo. 1 é o valor na extremidade x = 0. 6 é o valor em x = 5, que é o máximo no intervalo. E −4 esquece o termo +1 ao calcular f(2).",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor máximo absoluto de f(x) = x³ − 3x no intervalo [−2, 3]?",
    opcoes: [
      "18",
      "2",
      "−2",
      "3",
      "24",
    ],
    correta: 0,
    explicacao:
      "Os candidatos são os pontos críticos, onde f'(x) = 3x² − 3 = 0, isto é, x = ±1, e as extremidades do intervalo. Os valores são f(−2) = −2, f(−1) = 2, f(1) = −2 e f(3) = 27 − 9 = 18. O maior é 18, na extremidade x = 3.\n\n2 é o máximo local em x = −1, mas a extremidade direita tem valor maior: esquecer as extremidades é o erro mais comum. −2 é o valor mínimo, atingido em x = −2 e em x = 1. 3 é a abscissa do máximo, e não o valor. E 24 é f'(3), a inclinação, e não o valor da função.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Se f é derivável e tem um máximo local num ponto x₀ do interior do seu domínio, o que é necessariamente verdadeiro?",
    opcoes: [
      "f'(x₀) = 0",
      "f''(x₀) < 0",
      "f(x₀) = 0",
      "f'(x₀) > 0",
      "f''(x₀) = 0",
    ],
    correta: 0,
    explicacao:
      "É o teorema de Fermat: num máximo ou mínimo local interior, onde f é derivável, a tangente é horizontal, e f'(x₀) = 0. A ideia: à esquerda de x₀, os quocientes (f(x) − f(x₀))/(x − x₀) são maiores ou iguais a zero; à direita, menores ou iguais; e o limite comum só pode ser zero.\n\nf''(x₀) < 0 é suficiente, mas não necessário: −x⁴ tem máximo em 0 com f''(0) = 0. f(x₀) = 0 confunde o valor com a derivada: cos x tem máximo 1 em x = 0. f'(x₀) > 0 indicaria função crescente em x₀. E f''(x₀) = 0 também não é obrigatória: −x² tem máximo com f''(0) = −2.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Qual é o menor valor que f(x) = x + 1/x assume para x > 0?",
    opcoes: [
      "2",
      "1",
      "0",
      "5/2",
      "Não há valor mínimo",
    ],
    correta: 0,
    explicacao:
      "A derivada f'(x) = 1 − 1/x² se anula, para x > 0, em x = 1. Ela é negativa antes e positiva depois, e então x = 1 é um mínimo, com f(1) = 1 + 1 = 2. A desigualdade x + 1/x ≥ 2, válida para todo x > 0, confirma: a soma de um número positivo com o seu inverso nunca é menor que 2.\n\n1 é o ponto onde o mínimo ocorre, e não o valor. 0 supõe que a soma pode se anular, o que é impossível com as duas parcelas positivas. 5/2 é o valor em x = 2 (ou em x = 1/2), maior que o mínimo. E há mínimo, sim: errar o sinal da derivada de 1/x, escrevendo 1 + 1/x², é que faz parecer que f' nunca se anula.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "A função f(x) = x³ − 6x² + 9x + 1 tem pontos críticos em x = 1 e x = 3. O que ela tem em x = 1?",
    opcoes: [
      "Um máximo local",
      "Um mínimo local",
      "Um ponto de inflexão",
      "Um máximo absoluto",
      "Nem máximo nem mínimo",
    ],
    correta: 0,
    explicacao:
      "A derivada segunda é f''(x) = 6x − 12, e f''(1) = −6 < 0: a concavidade é para baixo, e o ponto crítico x = 1 é um máximo local, com f(1) = 1 − 6 + 9 + 1 = 5. Em x = 3, f''(3) = 6 > 0, e há um mínimo local.\n\nMínimo local é o que acontece em x = 3. O ponto de inflexão fica em x = 2, onde f'' se anula. O máximo não é absoluto: f(x) cresce sem limite quando x → +∞, e já f(5) = 21 supera f(1) = 5. E há, sim, um extremo em x = 1, porque f' troca de sinal ali.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Dois números positivos têm soma 20. Qual é o maior valor possível do seu produto?",
    opcoes: [
      "100",
      "20",
      "99",
      "400",
      "200",
    ],
    correta: 0,
    explicacao:
      "Com os números x e 20 − x, o produto é P(x) = x(20 − x) = 20x − x². A derivada P'(x) = 20 − 2x se anula em x = 10, e P''(x) = −2 < 0 confirma o máximo: os números são 10 e 10, e o produto máximo é 100. Em geral, com soma fixa, o produto é máximo quando as parcelas são iguais.\n\n20 é a soma, e não o produto. 99 é o produto de 9 e 11, menor que 100. 400 é o quadrado da soma. E 200 multiplica a soma por uma das parcelas, 20 · 10.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor mínimo da função f(x) = eˣ − x, definida para todo x real?",
    opcoes: [
      "1",
      "0",
      "e − 1",
      "1 + 1/e",
      "Não tem mínimo",
    ],
    correta: 0,
    explicacao:
      "A derivada f'(x) = eˣ − 1 se anula em x = 0, é negativa para x < 0 e positiva para x > 0. Então x = 0 é o mínimo absoluto, com f(0) = e⁰ − 0 = 1. Daí vem a desigualdade eˣ ≥ 1 + x, válida para todo x real.\n\n0 é o ponto onde o mínimo ocorre, e não o valor. e − 1 é o valor em x = 1, onde a função já cresce. 1 + 1/e é o valor em x = −1, onde ela ainda decresce. E há mínimo: para x > 0 a exponencial cresce depressa e, para x < 0, o termo −x cresce, e a função vai a +∞ dos dois lados.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Entre todos os retângulos de área 36 m², qual é o menor perímetro possível?",
    opcoes: [
      "36 m",
      "24 m",
      "26 m",
      "40 m",
      "12 m",
    ],
    correta: 1,
    explicacao:
      "Com lados x e 36/x, o perímetro é P(x) = 2x + 72/x. A derivada P'(x) = 2 − 72/x² se anula em x = 6, e P''(x) = 144/x³ > 0 confirma o mínimo. O retângulo ótimo é o quadrado 6 × 6, com perímetro 24 m.\n\n36 m repete o número da área, como se perímetro e área fossem iguais. 26 m é o perímetro do retângulo 4 × 9, que tem a área certa, mas não é o ótimo. 40 m é o do retângulo 2 × 18. E 12 m é o semiperímetro do quadrado, 6 + 6, sem dobrar.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "facil",
    enunciado:
      "Somando o seno e o cosseno do mesmo ângulo, f(x) = sen x + cos x, qual é o maior resultado que se pode obter?",
    opcoes: [
      "2",
      "√2",
      "1",
      "π/4",
      "√2/2",
    ],
    correta: 1,
    explicacao:
      "A derivada f'(x) = cos x − sen x se anula quando tg x = 1, por exemplo em x = π/4, onde f(π/4) = √2/2 + √2/2 = √2 ≈ 1,41. A identidade sen x + cos x = √2 · sen(x + π/4) confirma: o máximo é √2.\n\n2 soma os máximos das duas parcelas, mas elas não valem 1 ao mesmo tempo. 1 é o máximo de cada parcela sozinha. π/4 é onde o máximo ocorre, e não o valor. E √2/2 é o valor de cada parcela no ponto de máximo.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Com 120 m de cerca, deseja-se cercar um terreno retangular à beira de um rio, sem cerca do lado do rio. Qual é a maior área que se pode cercar?",
    opcoes: [
      "900 m²",
      "1800 m²",
      "1600 m²",
      "3600 m²",
      "1000 m²",
    ],
    correta: 1,
    explicacao:
      "Com x o comprimento de cada lado perpendicular ao rio, o lado paralelo mede 120 − 2x, e a área é A(x) = x(120 − 2x) = 120x − 2x². A derivada A'(x) = 120 − 4x se anula em x = 30, e A'' = −4 < 0. Os lados são 30 m e 60 m, e a área máxima é 1800 m².\n\n900 m² cerca os quatro lados, como se não houvesse rio: um quadrado de 30 m. 1600 m² divide a cerca igualmente entre os três lados, 40 m cada. 3600 m² usaria 60 m em cada lado perpendicular e 60 m no paralelo, gastando 180 m de cerca. E 1000 m² é a área com x = 10, um retângulo qualquer.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "De uma folha quadrada de 12 cm de lado, cortam-se quadrados iguais nos quatro cantos e dobram-se as abas, formando uma caixa sem tampa. Qual deve ser, em cm, o lado do quadrado cortado para que o volume seja máximo?",
    opcoes: [
      "6",
      "2",
      "3",
      "4",
      "128",
    ],
    correta: 1,
    explicacao:
      "Com corte de lado x, a base da caixa é um quadrado de lado 12 − 2x, e a altura é x: V(x) = x(12 − 2x)², com 0 < x < 6. Derivando: V'(x) = (12 − 2x)² − 4x(12 − 2x) = (12 − 2x)(12 − 6x), que se anula em x = 6 e em x = 2. Em x = 6 o volume é zero; o máximo é em x = 2, com V = 2 · 64 = 128 cm³.\n\n6 anula a base: a caixa some. 3 divide o lado da folha por 4. 4 divide o lado da folha por 3. E 128 é o volume máximo, em cm³, e não o lado do corte.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é a menor distância entre o ponto (0, 2) e os pontos da parábola y = x²?",
    opcoes: [
      "2",
      "√7/2",
      "√(3/2)",
      "7/4",
      "√2",
    ],
    correta: 1,
    explicacao:
      "A distância ao quadrado de (0, 2) até (x, x²) é D(x) = x² + (x² − 2)². Minimizar a distância é o mesmo que minimizar D, e D'(x) = 2x + 4x(x² − 2) = 2x(2x² − 3), que se anula em x = 0 e em x = ±√(3/2). Em x = 0, D = 4; com x² = 3/2, D = 3/2 + 1/4 = 7/4. A menor distância é √(7/4) = √7/2 ≈ 1,32.\n\n2 é a distância até o vértice (0, 0), que é um máximo local de D, e não o mínimo. √(3/2) é a abscissa do ponto mais próximo, e não a distância. 7/4 é a distância ao quadrado, sem a raiz. E √2 é a distância aos pontos da parábola na mesma altura, (±√2, 2).",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Uma lata cilíndrica fechada deve ter volume de 2π dm³. Qual raio da base minimiza a área total de chapa?",
    opcoes: [
      "2 dm",
      "1 dm",
      "∛2 dm",
      "∛(1/2) dm",
      "∛4 dm",
    ],
    correta: 1,
    explicacao:
      "Do volume, πr²h = 2π, vem h = 2/r². A área total, com as duas bases e a lateral, é A(r) = 2πr² + 2πrh = 2πr² + 4π/r. Derivando: A'(r) = 4πr − 4π/r², que se anula em r³ = 1, isto é, r = 1 dm, com h = 2 dm. A lata ótima tem altura igual ao diâmetro.\n\n2 dm é a altura ótima, e não o raio. ∛2 dm esquece uma das bases, como numa lata aberta. ∛(1/2) dm usa πrh para a área lateral, em vez de 2πrh. E ∛4 dm inverte a relação ótima h = 2r, usando r = 2h.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Um retângulo tem a base sobre o diâmetro de um semicírculo de raio 2 e os outros dois vértices sobre o arco. Qual é a maior área que esse retângulo pode ter?",
    opcoes: [
      "8",
      "4",
      "2",
      "2π",
      "√2",
    ],
    correta: 1,
    explicacao:
      "Com os vértices do arco em (±x, √(4 − x²)), a base mede 2x e a altura √(4 − x²): A(x) = 2x√(4 − x²). Derivando: A'(x) = 2√(4 − x²) − 2x²/√(4 − x²) = (8 − 4x²)/√(4 − x²), que se anula em x = √2. A área máxima é 2√2 · √2 = 4.\n\n8 é a área do maior retângulo inscrito no círculo inteiro, o quadrado de diagonal 4. 2 esquece o fator 2 da base e usa x no lugar de 2x. 2π é a área do próprio semicírculo. E √2 é a metade da base ótima, e não a área.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Dois números positivos têm soma 12. Quais devem ser eles para que o produto de um deles pelo quadrado do outro seja máximo?",
    opcoes: [
      "6 e 6",
      "4 e 8, com o 8 ao quadrado",
      "8 e 4, com o 4 ao quadrado",
      "3 e 9, com o 9 ao quadrado",
      "2 e 10, com o 10 ao quadrado",
    ],
    correta: 1,
    explicacao:
      "Chamando de y o número elevado ao quadrado, o outro é 12 − y, e o produto é P(y) = (12 − y)y² = 12y² − y³. Derivando: P'(y) = 24y − 3y² = 3y(8 − y), que se anula em y = 8 (y = 0 não serve). O produto máximo é 4 · 64 = 256.\n\n6 e 6 dão 6 · 36 = 216: parcelas iguais maximizam o produto simples, mas não este. 8 e 4, com o 4 ao quadrado, trocam os papéis: 8 · 16 = 128. 3 e 9 dão 3 · 81 = 243, perto, mas abaixo do máximo. E 2 e 10 dão 2 · 100 = 200.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Uma pessoa num barco está a 3 km do ponto P mais próximo de uma costa reta e quer chegar a um ponto Q da costa, a 8 km de P. Ela rema a 3 km/h e caminha a 5 km/h. A que distância de P deve desembarcar para chegar a Q no menor tempo?",
    opcoes: [
      "8 km",
      "2,25 km",
      "0 km",
      "3 km",
      "4 km",
    ],
    correta: 1,
    explicacao:
      "Desembarcando a x km de P, a pessoa rema √(9 + x²) km e caminha 8 − x km: T(x) = √(9 + x²)/3 + (8 − x)/5. Derivando: T'(x) = x/(3√(9 + x²)) − 1/5, que se anula quando 5x = 3√(9 + x²), isto é, 25x² = 81 + 9x², ou x² = 81/16: x = 9/4 = 2,25 km. O tempo é de 2,4 h, contra 2,6 h desembarcando em P e cerca de 2,85 h remando direto até Q.\n\n8 km é remar direto até Q, o caminho mais curto, mas não o mais rápido. 0 km é desembarcar em P e caminhar tudo. 3 km iguala o desvio à distância do barco à costa, como num ângulo de 45°. E 4 km desembarca no ponto médio de PQ, sem otimizar.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "O lucro de uma fábrica, em reais, é L(q) = −2q² + 120q − 1000 para q unidades produzidas. Quantas unidades maximizam o lucro?",
    opcoes: [
      "60",
      "30",
      "120",
      "800",
      "10",
    ],
    correta: 1,
    explicacao:
      "A derivada L'(q) = −4q + 120 se anula em q = 30, e L''(q) = −4 < 0 confirma o máximo. O lucro máximo é L(30) = −1800 + 3600 − 1000 = 800 reais. Economicamente, é onde o lucro marginal, L'(q), deixa de ser positivo.\n\n60 deriva −2q² como −2q, esquecendo o fator 2 do expoente. 120 é o coeficiente de q, e não um ponto crítico. 800 é o lucro máximo, em reais, e não a quantidade. E 10 é onde o lucro deixa de ser negativo, uma das raízes de L.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é o ponto da reta 2x + y = 5 mais próximo da origem?",
    opcoes: [
      "(0, 5)",
      "(5/2, 0)",
      "(2, 1)",
      "(1, 3)",
      "(1, 2)",
    ],
    correta: 2,
    explicacao:
      "Um ponto da reta é (x, 5 − 2x), e o quadrado da sua distância à origem é D(x) = x² + (5 − 2x)² = 5x² − 20x + 25. A derivada D'(x) = 10x − 20 se anula em x = 2, e o ponto é (2, 1), a uma distância √5. Ele é o pé da perpendicular à reta traçada pela origem, na direção do vetor (2, 1).\n\n(0, 5) é onde a reta corta o eixo y, a distância 5. (5/2, 0) é onde ela corta o eixo x, a distância 2,5. (1, 3) é um ponto qualquer da reta, a distância √10. E (1, 2) nem está na reta, porque 2 + 2 ≠ 5: troca as coordenadas do ponto certo.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Para x ≥ 0, qual é o valor máximo da função f(x) = x² · e^(−x)?",
    opcoes: [
      "2",
      "4e²",
      "4/e²",
      "0",
      "1/e",
    ],
    correta: 2,
    explicacao:
      "Pela regra do produto, f'(x) = 2x · e^(−x) − x² · e^(−x) = x(2 − x)e^(−x), que se anula em x = 0 e x = 2. A derivada é positiva entre 0 e 2 e negativa depois, então x = 2 é o máximo, com f(2) = 4e^(−2) = 4/e² ≈ 0,54.\n\n2 é onde o máximo ocorre, e não o valor. 4e² usa e^(+2) no lugar de e^(−2). 0 é o valor em x = 0, que é o mínimo, e não o máximo. E 1/e é o valor em x = 1, onde a função ainda cresce.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Um terreno retangular de 600 m² será cercado e dividido ao meio por uma cerca paralela a um dos lados. Qual é o menor comprimento total de cerca?",
    opcoes: [
      "cerca de 98 m",
      "cerca de 122 m",
      "120 m",
      "150 m",
      "60 m",
    ],
    correta: 2,
    explicacao:
      "Com x o lado paralelo à divisória, há três cercas de comprimento x e duas do outro lado, y = 600/x: L(x) = 3x + 1200/x. Derivando: L'(x) = 3 − 1200/x², que se anula em x = 20, com y = 30. O comprimento mínimo é 60 + 60 = 120 m.\n\nCerca de 98 m é o perímetro do quadrado de área 600, sem a divisória. Cerca de 122 m usa esse quadrado com a divisória, que deixa de ser o formato ótimo. 150 m é o comprimento para um retângulo de 10 m por 60 m, um formato qualquer. E 60 m conta só as três cercas paralelas.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é o valor mínimo de f(x) = x · ln x, definida para x > 0?",
    opcoes: [
      "1/e",
      "0",
      "−1/e",
      "−1",
      "e",
    ],
    correta: 2,
    explicacao:
      "Pela regra do produto, f'(x) = ln x + 1, que se anula em ln x = −1, isto é, x = 1/e. A derivada é negativa antes e positiva depois, e o mínimo é f(1/e) = (1/e) · (−1) = −1/e ≈ −0,37.\n\n1/e é onde o mínimo ocorre, e não o valor. 0 é o valor em x = 1, e também o limite quando x → 0⁺, mas a função fica abaixo disso entre 0 e 1. −1 é ln(1/e), sem multiplicar por x. E e é o valor em x = e, onde a função já cresce.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é o volume do maior cone circular reto que se pode inscrever numa esfera de raio 3?",
    opcoes: [
      "36π",
      "9π",
      "32π/3",
      "16π/3",
      "32π",
    ],
    correta: 2,
    explicacao:
      "Com o vértice do cone num polo da esfera e altura h, o raio r da base satisfaz r² = h(6 − h), pelas relações métricas no triângulo inscrito na semicircunferência de diâmetro 6. O volume é V(h) = (π/3)(6h − h²)h = (π/3)(6h² − h³), e V'(h) = (π/3)(12h − 3h²) se anula em h = 4. Com r² = 8: V = (π/3) · 8 · 4 = 32π/3.\n\n36π é o volume da própria esfera. 9π é o cone com base no plano do centro, h = 3 e r = 3. 16π/3 é o cone com h = 2, também com r² = 8, mas mais baixo. E 32π esquece o fator 1/3 do volume do cone.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Para que a função f(x) = x³ + ax² + 3x tenha um ponto crítico em x = 1, qual deve ser o valor de a?",
    opcoes: [
      "3",
      "−6",
      "−3",
      "−4",
      "−3/2",
    ],
    correta: 2,
    explicacao:
      "Ponto crítico em x = 1 significa f'(1) = 0. Com f'(x) = 3x² + 2ax + 3: f'(1) = 3 + 2a + 3 = 6 + 2a = 0, e a = −3. Conferindo, f'(x) = 3x² − 6x + 3 = 3(x − 1)², que se anula só em x = 1; como a derivada não troca de sinal ali, esse ponto crítico não é máximo nem mínimo.\n\n3 erra o sinal ao isolar a. −6 esquece o fator 2 de 2ax: 3 + a + 3 = 0. −4 anula f(1), e não f'(1): 1 + a + 3 = 0. E −3/2 esquece a derivada de 3x, resolvendo 3 + 2a = 0.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "O custo de produção de q unidades é C(q) = q² + 100. Para qual quantidade o custo médio C(q)/q é mínimo?",
    opcoes: [
      "20",
      "100",
      "10",
      "0",
      "50",
    ],
    correta: 2,
    explicacao:
      "O custo médio é M(q) = q + 100/q. A derivada M'(q) = 1 − 100/q² se anula em q = 10, e M''(q) = 200/q³ > 0 confirma o mínimo, com custo médio M(10) = 20. Nesse ponto, o custo marginal C'(10) = 20 iguala o custo médio, um fato geral da economia.\n\n20 é o custo médio mínimo, e não a quantidade. 100 é o custo fixo. 0 minimiza o custo total, e não o médio, que nem está definido ali. E 50 iguala o custo marginal 2q ao custo fixo 100, uma comparação sem sentido.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Quais são os valores máximo e mínimo absolutos de f(x) = x⁴ − 8x² no intervalo [−1, 3]?",
    opcoes: [
      "Máximo 0 e mínimo −16",
      "Máximo 9 e mínimo −7",
      "Máximo 9 e mínimo −16",
      "Máximo 81 e mínimo −16",
      "Máximo 0 e mínimo −7",
    ],
    correta: 2,
    explicacao:
      "A derivada f'(x) = 4x³ − 16x = 4x(x² − 4) se anula em x = 0, x = 2 e x = −2, mas −2 está fora do intervalo. Os candidatos são x = −1, 0, 2 e 3, com valores f(−1) = −7, f(0) = 0, f(2) = 16 − 32 = −16 e f(3) = 81 − 72 = 9. O máximo absoluto é 9 e o mínimo é −16.\n\nMáximo 0 esquece a extremidade x = 3. Mínimo −7 esquece o ponto crítico x = 2 e usa a extremidade x = −1. Máximo 81 calcula f(3) sem o termo −8x². E máximo 0 com mínimo −7 comete os dois esquecimentos.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é a maior inclinação que a reta tangente ao gráfico de f(x) = −x³ + 3x² + 2 pode ter?",
    opcoes: [
      "1",
      "4",
      "3",
      "6",
      "0",
    ],
    correta: 2,
    explicacao:
      "A inclinação da tangente é f'(x) = −3x² + 6x, e a pergunta pede o máximo dessa função. Derivando de novo: f''(x) = −6x + 6, que se anula em x = 1, e f''' = −6 < 0 confirma o máximo. A maior inclinação é f'(1) = −3 + 6 = 3, no ponto de inflexão do gráfico.\n\n1 é onde a maior inclinação ocorre, e não o seu valor. 4 é o valor da função em x = 1, f(1) = −1 + 3 + 2. 6 é f''(0), a derivada segunda na origem. E 0 é a inclinação em x = 0 e em x = 2, onde a tangente é horizontal.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Uma caixa sem tampa, de base quadrada, deve ter volume de 32 dm³. Quais dimensões gastam o mínimo de material?",
    opcoes: [
      "Base de lado 2 dm e altura 8 dm",
      "Cubo de aresta ∛32 dm",
      "Base de lado 4 dm e altura 2 dm",
      "Base de lado 8 dm e altura 0,5 dm",
      "Base de lado 4 dm e altura 4 dm",
    ],
    correta: 2,
    explicacao:
      "Com base de lado x e altura h, o volume dá x²h = 32, ou h = 32/x². O material é a base mais as quatro faces laterais: A(x) = x² + 4xh = x² + 128/x. Derivando: A'(x) = 2x − 128/x², que se anula em x³ = 64, x = 4. Então h = 32/16 = 2: base de 4 dm e altura de 2 dm, com 48 dm² de material.\n\nBase de lado 2 dm e altura 8 dm tem o volume certo, mas gasta 68 dm². O cubo de aresta ∛32 é o ótimo da caixa com tampa. Base de lado 8 dm e altura 0,5 dm gasta 80 dm². E base de 4 dm com altura de 4 dm nem tem o volume pedido: são 64 dm³.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é o valor máximo de f(x) = (ln x)/x, para x > 0?",
    opcoes: [
      "e",
      "1",
      "0",
      "1/e",
      "2/e²",
    ],
    correta: 3,
    explicacao:
      "Pela regra do quociente, f'(x) = (1 − ln x)/x², que se anula em ln x = 1, isto é, x = e. A derivada é positiva antes e negativa depois, e o máximo é f(e) = 1/e ≈ 0,37. Uma consequência curiosa: como ln x/x é máximo em e, vale e^π > π^e.\n\ne é onde o máximo ocorre, e não o valor. 1 é ln e, sem dividir por x. 0 é o valor em x = 1, onde o gráfico cruza o eixo. E 2/e² é o valor em x = e², onde a função já decresce.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Um cartaz retangular deve ter 50 cm² de área impressa, com margens de 4 cm em cima e embaixo e de 2 cm de cada lado. Qual é a menor área total possível do cartaz?",
    opcoes: [
      "50 cm²",
      "cerca de 167 cm²",
      "98 cm²",
      "162 cm²",
      "182 cm²",
    ],
    correta: 3,
    explicacao:
      "Com a área impressa de largura w e altura 50/w, o cartaz mede w + 4 por 50/w + 8, e a área é A(w) = (w + 4)(50/w + 8) = 82 + 8w + 200/w. Derivando: A'(w) = 8 − 200/w², que se anula em w = 5. A impressão mede 5 por 10, o cartaz mede 9 por 18, e a área mínima é 162 cm².\n\n50 cm² é só a área impressa. Cerca de 167 cm² usa uma impressão quadrada, de lado √50, que não é a ótima. 98 cm² conta cada margem uma vez só, com cartaz de 7 por 14. E 182 cm² inverte as medidas da impressão, com 10 de largura e 5 de altura.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "A função f(x) = x^(2/3), definida para todo x real, tem mínimo absoluto em x = 0. O que se pode dizer da derivada nesse ponto?",
    opcoes: [
      "Vale 0, como em todo mínimo",
      "Vale 2/3",
      "É positiva",
      "Não existe: o mínimo ocorre num bico",
      "É negativa",
    ],
    correta: 3,
    explicacao:
      "Para x ≠ 0, f'(x) = (2/3)x^(−1/3) = 2/(3∛x), que vai a +∞ quando x → 0⁺ e a −∞ quando x → 0⁻. Em x = 0, o quociente (f(h) − f(0))/h = h^(−1/3) não tem limite: a derivada não existe, e o gráfico tem um bico vertical na origem. Mesmo assim, x = 0 é ponto crítico, porque os pontos críticos incluem os pontos em que f' não existe.\n\nVale 0 supõe que todo mínimo tem tangente horizontal, o que só vale onde f é derivável. 2/3 é o coeficiente da fórmula, que não se aplica em x = 0. E positiva ou negativa são os sinais de f' à direita e à esquerda do zero, e não um valor em 0.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Entre os triângulos isósceles cujos dois lados iguais medem 10 cm, qual ângulo entre esses lados dá a maior área?",
    opcoes: [
      "60°",
      "45°",
      "120°",
      "90°",
      "180°",
    ],
    correta: 3,
    explicacao:
      "Com o ângulo θ entre os lados iguais, a área é A(θ) = (1/2) · 10 · 10 · sen θ = 50 sen θ, para 0 < θ < 180°. A derivada A'(θ) = 50 cos θ se anula em θ = 90°, onde o seno é máximo. A maior área é 50 cm², no triângulo retângulo isósceles.\n\n60° dá o triângulo equilátero, de área 25√3 ≈ 43,3 cm², menor. 45° dá 50 · sen 45° ≈ 35,4 cm². 120° dá a mesma área que 60°, porque sen 120° = sen 60°. E 180° achata o triângulo, com área zero.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Ao preço de p reais, uma loja vende q = 200 − 4p unidades de um produto. Que preço maximiza a receita R = p · q?",
    opcoes: [
      "R$ 50",
      "R$ 2.500",
      "R$ 100",
      "R$ 25",
      "R$ 0",
    ],
    correta: 3,
    explicacao:
      "A receita é R(p) = p(200 − 4p) = 200p − 4p². A derivada R'(p) = 200 − 8p se anula em p = 25, e R'' = −8 < 0. No preço ótimo, vendem-se q = 100 unidades, com receita de R$ 2.500.\n\nR$ 50 zera a demanda, e a receita junto. R$ 2.500 é a receita máxima, e não o preço. R$ 100 é a quantidade vendida no preço ótimo, e não o preço. E R$ 0 maximiza a quantidade vendida, mas não a receita, que fica nula.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Para quais valores de k a função f(x) = x³ + kx tem um máximo local e um mínimo local?",
    opcoes: [
      "k > 0",
      "k ≤ 0",
      "Para qualquer k",
      "k < 0",
      "Para nenhum k",
    ],
    correta: 3,
    explicacao:
      "A derivada é f'(x) = 3x² + k. Para haver máximo e mínimo locais, f' precisa trocar de sinal duas vezes, e isso exige duas raízes distintas de 3x² + k = 0, o que acontece exatamente quando k < 0, com x = ±√(−k/3). Para k > 0, f' > 0 sempre, e a função só cresce.\n\nk > 0 inverte a condição. k ≤ 0 inclui k = 0, em que f(x) = x³ tem o único ponto crítico x = 0 sem extremo, porque f' = 3x² não troca de sinal. Para qualquer k falha quando k ≥ 0. E para nenhum k falha com k negativo, como k = −3, que dá máximo em x = −1 e mínimo em x = 1.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é a menor distância entre o ponto (4, 0) e a curva y = √x?",
    opcoes: [
      "2",
      "√(7/2)",
      "15/4",
      "√15/2",
      "4",
    ],
    correta: 3,
    explicacao:
      "A distância ao quadrado de (4, 0) até (x, √x) é D(x) = (x − 4)² + x. A derivada D'(x) = 2(x − 4) + 1 se anula em x = 7/2, e D(7/2) = 1/4 + 7/2 = 15/4. A menor distância é √(15/4) = √15/2 ≈ 1,94, até o ponto (7/2, √(7/2)).\n\n2 é a distância até (4, 2), o ponto da curva logo acima de (4, 0), que não é o mais próximo. √(7/2) é a ordenada do ponto mais próximo, e não a distância. 15/4 é a distância ao quadrado, sem a raiz. E 4 é a distância até a origem, que também está na curva.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é a maior área possível de um triângulo retângulo cuja hipotenusa mede 10?",
    opcoes: [
      "50",
      "24",
      "100",
      "25",
      "5√2",
    ],
    correta: 3,
    explicacao:
      "Com catetos x e y, x² + y² = 100 e a área é A = xy/2 = (x/2)√(100 − x²). Derivando: A'(x) = (100 − 2x²)/(2√(100 − x²)), que se anula em x² = 50, isto é, x = y = 5√2. O triângulo ótimo é isósceles, com área 50/2 = 25.\n\n50 esquece o fator 1/2 da área do triângulo. 24 é a área do triângulo 6-8-10, que tem a hipotenusa certa, mas não é o ótimo. 100 é o quadrado da hipotenusa. E 5√2 é o cateto ótimo, e não a área.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "No intervalo [0, 2π], em que ponto a função f(x) = x + 2cos x atinge o seu máximo absoluto?",
    opcoes: [
      "x = π/6",
      "x = 5π/6",
      "x = 0",
      "x = 2π",
      "x = π",
    ],
    correta: 3,
    explicacao:
      "A derivada f'(x) = 1 − 2sen x se anula quando sen x = 1/2, em x = π/6 e x = 5π/6. Comparando os candidatos: f(0) = 2, f(π/6) = π/6 + √3 ≈ 2,26, f(5π/6) = 5π/6 − √3 ≈ 0,89 e f(2π) = 2π + 2 ≈ 8,28. O máximo absoluto está na extremidade x = 2π.\n\nx = π/6 é um máximo local, mas bem abaixo do valor na extremidade direita. x = 5π/6 é um mínimo local. x = 0 é a outra extremidade, com valor 2. E x = π é onde o cosseno vale −1, com f(π) = π − 2 ≈ 1,14.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "media",
    enunciado:
      "Qual é o maior valor do produto xy para os pontos (x, y) da elipse x²/9 + y²/4 = 1 no primeiro quadrante?",
    opcoes: [
      "6",
      "9",
      "3/√2",
      "3",
      "12",
    ],
    correta: 3,
    explicacao:
      "No primeiro quadrante, y = 2√(1 − x²/9), e P(x) = 2x√(1 − x²/9). É mais simples maximizar P² = 4x²(1 − x²/9) = 4x² − 4x⁴/9, cuja derivada 8x − 16x³/9 se anula em x² = 9/2. Então P² = 4 · (9/2) · (1/2) = 9, e o produto máximo é 3, no ponto (3/√2, √2).\n\n6 é o produto dos semieixos, 3 · 2, mas o ponto (3, 2) não está na elipse. 9 é o máximo de P², sem extrair a raiz. 3/√2 é a abscissa do ponto ótimo, e não o produto. E 12 dobra o produto dos semieixos.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Um cilindro está inscrito num cone de altura 12 e raio da base 4, com a base do cilindro sobre a base do cone. Qual é o maior volume possível do cilindro?",
    opcoes: [
      "64π",
      "24π",
      "128π/9",
      "16π",
      "256π/9",
    ],
    correta: 4,
    explicacao:
      "Por semelhança de triângulos, um cilindro de raio r tem altura h = 12(1 − r/4) = 12 − 3r. O volume é V(r) = πr²(12 − 3r) = π(12r² − 3r³), e V'(r) = π(24r − 9r²) se anula em r = 8/3. Então h = 12 − 8 = 4 e V = π · (64/9) · 4 = 256π/9 ≈ 89,4.\n\n64π é o volume do próprio cone, (1/3)π · 16 · 12. 24π usa metade do raio do cone, r = 2, com h = 6. 128π/9 usa r = 4/3, a terça parte do raio, com h = 8. E 16π junta r = 2 com a altura ótima h = 4, que não pertencem ao mesmo cilindro.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Um corredor de 1 m de largura faz uma curva em ângulo reto e continua num corredor de 8 m de largura. Qual é o comprimento da maior barra que passa pela curva mantida na horizontal?",
    opcoes: [
      "9 m",
      "√65 m",
      "9√2 m",
      "5 m",
      "5√5 m",
    ],
    correta: 4,
    explicacao:
      "A barra que passa é a mais curta das que tocam o canto interno e as duas paredes externas. Com θ o ângulo da barra com a direção do corredor estreito, esse comprimento é L(θ) = 1/sen θ + 8/cos θ. Derivando: L'(θ) = −cos θ/sen²θ + 8sen θ/cos²θ, que se anula em tg³θ = 1/8, ou tg θ = 1/2. Então sen θ = 1/√5, cos θ = 2/√5, e L = √5 + 4√5 = 5√5 ≈ 11,2 m. Em geral, para larguras a e b, o resultado é (a^(2/3) + b^(2/3))^(3/2).\n\n9 m soma as larguras. √65 m é a diagonal de um retângulo de lados 1 e 8. 9√2 m supõe o ângulo de 45°, que só é ótimo com larguras iguais. E 5 m é 1^(2/3) + 8^(2/3), sem elevar a 3/2.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "De uma folha retangular de 8 cm por 5 cm, cortam-se quadrados iguais nos cantos para formar uma caixa sem tampa. Qual deve ser, em cm, o lado do quadrado cortado para o volume ser máximo?",
    opcoes: [
      "10/3",
      "5/4",
      "5/2",
      "13/6",
      "1",
    ],
    correta: 4,
    explicacao:
      "Com corte x, a caixa tem base (8 − 2x) por (5 − 2x) e altura x, com 0 < x < 5/2: V(x) = x(8 − 2x)(5 − 2x) = 4x³ − 26x² + 40x. Derivando: V'(x) = 12x² − 52x + 40 = 4(3x² − 13x + 10), com raízes x = 1 e x = 10/3. Só x = 1 está no intervalo, e V(1) = 1 · 6 · 3 = 18 cm³ é o máximo.\n\n10/3 é a outra raiz de V', mas deixa o lado 5 − 2x negativo. 5/4 dá volume de cerca de 17,2 cm³, perto do máximo, mas abaixo de V(1) = 18. 5/2 zera a largura da base, e o volume junto. E 13/6 é a média das raízes de V', onde se anula V'', e não V'.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Os pontos A(0, 3) e B(6, 5) estão acima do eixo x. Qual ponto P do eixo x torna mínima a soma das distâncias AP + PB?",
    opcoes: [
      "(3, 0)",
      "(15/4, 0)",
      "(−9, 0)",
      "(0, 0)",
      "(9/4, 0)",
    ],
    correta: 4,
    explicacao:
      "Com P = (x, 0), a soma é S(x) = √(x² + 9) + √((6 − x)² + 25). Derivando: S'(x) = x/√(x² + 9) − (6 − x)/√((6 − x)² + 25), que se anula quando AP e PB fazem ângulos iguais com o eixo, como na reflexão da luz: 3/x = 5/(6 − x), e x = 9/4. Refletindo B em B'(6, −5), o ponto é onde a reta AB' corta o eixo.\n\n(3, 0) fica no meio das projeções de A e B, sem pesar as alturas. (15/4, 0) divide o segmento na razão trocada, 5 : 3. (−9, 0) prolonga a reta AB até o eixo, sem refletir. E (0, 0) é a projeção de A.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Para x > 0, qual é o valor máximo de f(x) = x^(1/x)?",
    opcoes: [
      "e",
      "1",
      "2^(1/2)",
      "3^(1/3)",
      "e^(1/e)",
    ],
    correta: 4,
    explicacao:
      "Escrevendo f(x) = e^(ln x/x), o máximo de f coincide com o máximo do expoente g(x) = ln x/x. Como g'(x) = (1 − ln x)/x² se anula em x = e, e g' troca de sinal ali, o máximo de f é e^(1/e) ≈ 1,4447.\n\ne é onde o máximo ocorre, e não o valor. 1 é o limite de x^(1/x) quando x → ∞, e não um máximo. 2^(1/2) ≈ 1,414 é o valor em x = 2, que coincide com o valor em x = 4. E 3^(1/3) ≈ 1,4422 é o maior valor entre os inteiros, bem perto, mas abaixo de e^(1/e).",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Qual é a altura do cilindro circular reto de maior volume que se pode inscrever numa esfera de raio 3?",
    opcoes: [
      "3",
      "√3",
      "6",
      "3√2",
      "2√3",
    ],
    correta: 4,
    explicacao:
      "Com altura h, o centro da esfera fica no meio do cilindro, e o raio da base satisfaz r² + (h/2)² = 9. O volume é V(h) = π(9 − h²/4)h = π(9h − h³/4), e V'(h) = π(9 − 3h²/4) se anula em h² = 12, isto é, h = 2√3 ≈ 3,46, com r² = 6.\n\n3 é o raio da esfera. √3 é a metade da altura ótima. 6 é o diâmetro da esfera, em que o cilindro degenera num segmento. E 3√2 é a altura do cilindro de maior área lateral, em que r = h/2, e não a do de maior volume.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Para qual valor de a a função f(x) = x² + a/x tem um mínimo local em x = 2?",
    opcoes: [
      "8",
      "−16",
      "32",
      "4",
      "16",
    ],
    correta: 4,
    explicacao:
      "A condição necessária é f'(2) = 0. Com f'(x) = 2x − a/x²: f'(2) = 4 − a/4 = 0, e a = 16. Para confirmar o mínimo: f''(x) = 2 + 2a/x³, e f''(2) = 2 + 32/8 = 6 > 0. Com a = 16, a função é x² + 16/x, que de fato tem mínimo local em x = 2, com f(2) = 12.\n\n8 deriva a/x como −a/x, sem o quadrado no denominador: 4 − a/2 = 0. −16 erra o sinal da derivada de a/x. 32 usa x³ no denominador: 4 − a/8 = 0. E 4 trata a derivada de a/x como −a, resolvendo 4 − a = 0.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Qual é a maior área possível de um triângulo isósceles de perímetro 12?",
    opcoes: [
      "6",
      "2√6",
      "8√3",
      "16",
      "4√3",
    ],
    correta: 4,
    explicacao:
      "Com base x, os lados iguais medem (12 − x)/2 = 6 − x/2, e a altura é √((6 − x/2)² − x²/4) = √(36 − 6x). A área é A(x) = (x/2)√(36 − 6x), e A'(x) = (1/2)√(36 − 6x) − 3x/(2√(36 − 6x)) se anula quando 36 − 6x = 3x, isto é, x = 4. Os três lados medem 4: o triângulo é equilátero, com área (√3/4) · 16 = 4√3 ≈ 6,93.\n\n6 é a área do triângulo 3-4-5, que tem perímetro 12, mas não é isósceles. 2√6 ≈ 4,9 é a área com base 2 e lados 5. 8√3 esquece o fator 1/2 da área. E 16 é o quadrado do lado ótimo, sem o fator √3/4.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Um retângulo tem dois vértices no eixo x e os outros dois na parábola y = 12 − x², acima do eixo. Qual é a maior área que ele pode ter?",
    opcoes: [
      "16",
      "48",
      "24",
      "2",
      "32",
    ],
    correta: 4,
    explicacao:
      "Com os vértices de cima em (±x, 12 − x²), a base mede 2x e a altura 12 − x²: A(x) = 2x(12 − x²) = 24x − 2x³, para 0 < x < √12. A derivada A'(x) = 24 − 6x² se anula em x = 2, e A''(2) = −24 < 0. A área máxima é 4 · 8 = 32.\n\n16 esquece o fator 2 da base e usa x no lugar de 2x. 48 junta a base ótima 4 com a altura máxima 12, que não ocorrem juntas. 24 é A'(0), a derivada na origem, e não uma área. E 2 é a metade da base ótima, e não a área.",
  },
  {
    materia: "calculo",
    tema: "Máximos, mínimos e otimização",
    dificuldade: "dificil",
    enunciado:
      "Sabe-se que f'(x₀) = 0 e f''(x₀) = 0 para uma função f derivável quantas vezes se queira. O que se pode concluir sobre o ponto x₀?",
    opcoes: [
      "É um ponto de inflexão",
      "É um mínimo local",
      "É um máximo local",
      "A função é constante perto de x₀",
      "Nada: pode ser máximo, mínimo ou nenhum",
    ],
    correta: 4,
    explicacao:
      "O teste da derivada segunda é inconclusivo quando f''(x₀) = 0. Os três exemplos mais simples, todos com c = 0, mostram isso: x⁴ tem mínimo em 0, −x⁴ tem máximo, e x³ não tem extremo, mas uma inflexão. Nos três, f'(0) = f''(0) = 0. É preciso olhar o sinal de f' em volta de x₀, ou as derivadas de ordem mais alta.\n\nPonto de inflexão vale para x³, mas não para x⁴, que é côncava para cima dos dois lados. Mínimo local vale para x⁴ e falha para −x⁴. Máximo local vale para −x⁴ e falha para x⁴. E a função não precisa ser constante: nenhum dos três exemplos é.",
  },
];
