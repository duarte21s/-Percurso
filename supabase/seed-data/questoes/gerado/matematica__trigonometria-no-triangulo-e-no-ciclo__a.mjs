/* Trigonometria no triângulo e no ciclo — parte A (25 questões).
   Razões no triângulo retângulo, ângulos notáveis e aplicações de altura,
   sombra, rampa e distância. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Em um triângulo retângulo, fixado um dos ângulos agudos, as razões trigonométricas relacionam seus lados. O cosseno desse ângulo é definido como a razão entre:",
    opcoes: [
      "o cateto oposto e a hipotenusa.",
      "o cateto oposto e o cateto adjacente.",
      "o cateto adjacente e a hipotenusa.",
      "a hipotenusa e o cateto adjacente.",
      "o cateto adjacente e o cateto oposto.",
    ],
    correta: 2,
    explicacao:
      "Cosseno é cateto adjacente dividido pela hipotenusa. A primeira alternativa define o seno, e a segunda define a tangente — trocar as três é o erro mais comum de quem decora sem organizar. Uma forma de fixar: seno e cosseno sempre têm a hipotenusa embaixo, e por isso nunca passam de 1 em valor absoluto; a tangente, que compara dois catetos, pode assumir qualquer valor real. A quarta alternativa é a secante invertida e a quinta é a cotangente.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Uma rampa de acesso retilínea tem 12 m de comprimento e forma um ângulo de 30° com o piso horizontal. O desnível vencido por essa rampa, isto é, a altura do ponto mais alto em relação ao piso, é de:",
    opcoes: ["6 m", "6√3 m", "4 m", "12 m", "3 m"],
    correta: 0,
    explicacao:
      "A rampa é a hipotenusa e a altura é o cateto oposto ao ângulo de 30°, então altura = 12 · sen 30° = 12 · (1/2) = 6 m. A alternativa 6√3 m sai de usar o cosseno, que dá a projeção horizontal da rampa, e não a altura. Vale a conferência de ordem de grandeza: a altura nunca pode ser maior que o comprimento da rampa, o que já elimina 12 m como resposta possível para um ângulo diferente de 90°.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Uma escada de 5 m de comprimento está apoiada em uma parede vertical, com o pé afastado 3 m da base da parede. O cosseno do ângulo formado entre a escada e o solo é igual a:",
    opcoes: ["0,75", "1,25", "0,8", "0,6", "1,33"],
    correta: 3,
    explicacao:
      "O ângulo é o que a escada faz com o solo; o cateto adjacente a ele é o afastamento de 3 m e a hipotenusa é a escada, de 5 m. Logo cos = 3/5 = 0,6. A alternativa 0,8 é o seno do mesmo ângulo, que usa a altura de 4 m obtida pelo teorema de Pitágoras. Já 0,75 é a tangente (4/3 invertido dá 0,75 para 3/4) e 1,25 e 1,33 são razões invertidas — nenhum seno ou cosseno pode passar de 1, o que descarta as duas de imediato.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Em determinado momento do dia, os raios solares formam 45° com o solo horizontal e uma torre vertical projeta uma sombra de 30 m. Nessas condições, a altura da torre é de:",
    opcoes: ["15 m", "30 m", "30√3 m", "60 m", "10√3 m"],
    correta: 1,
    explicacao:
      "A altura e a sombra são os dois catetos, e a razão entre eles é a tangente do ângulo de elevação: altura = 30 · tg 45° = 30 · 1 = 30 m. O caso de 45° é o único em que altura e sombra se igualam, porque o triângulo é isósceles — guardar isso poupa conta em muitas questões. Quando o Sol está mais baixo que 45°, a sombra fica maior que a altura; mais alto que 45°, menor.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Um triângulo retângulo tem catetos medindo 5 cm e 12 cm. O seno do ângulo agudo oposto ao cateto de 5 cm é igual a:",
    opcoes: ["12/13", "5/12", "13/5", "12/5", "5/13"],
    correta: 4,
    explicacao:
      "Primeiro é preciso da hipotenusa: 5² + 12² = 25 + 144 = 169, logo a hipotenusa mede 13 cm. O seno é cateto oposto sobre hipotenusa, isto é, 5/13. A alternativa 12/13 é o cosseno desse mesmo ângulo, e 5/12 é a tangente. As razões maiores que 1 (13/5 e 12/5) são impossíveis para um seno, porque o cateto é sempre menor que a hipotenusa.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Entre os ângulos notáveis estudados na trigonometria, existe um cuja tangente vale exatamente √3. Esse valor corresponde à tangente do ângulo de:",
    opcoes: ["30°", "60°", "45°", "90°", "15°"],
    correta: 1,
    explicacao:
      "A tabela dos notáveis dá tg 30° = √3/3, tg 45° = 1 e tg 60° = √3. Como a tangente cresce à medida que o ângulo agudo aumenta, o maior dos três valores tem de corresponder ao maior ângulo, 60° — esse raciocínio de crescimento evita depender só da memória. A tangente de 90° não existe, porque o cosseno se anula ali e a divisão ficaria por zero.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um topógrafo se posiciona a 10 m da base de um poste vertical e mede o ângulo de elevação até o topo, obtendo 60°. Desprezando a altura do instrumento, a altura do poste é de:",
    opcoes: ["10 m", "20 m", "10√2 m", "5√3 m", "10√3 m"],
    correta: 4,
    explicacao:
      "A distância horizontal é o cateto adjacente e a altura é o cateto oposto, então usa-se a tangente: altura = 10 · tg 60° = 10√3 ≈ 17,3 m. Quem usa o seno chega a valores menores que 10 m, o que já contraria o desenho: com ângulo maior que 45°, a altura tem de superar a distância. A alternativa 20 m corresponde a usar 1/sen 30° por engano, e 10√2 m viria de um ângulo de 45° em outro arranjo.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Sabe-se que um arco x pertence ao primeiro quadrante e que sen x = 3/5. Usando a relação fundamental da trigonometria, o valor de cos x é:",
    opcoes: ["4/5", "3/5", "2/5", "5/4", "1/5"],
    correta: 0,
    explicacao:
      "Da relação sen²x + cos²x = 1 vem cos²x = 1 − 9/25 = 16/25, logo cos x = ±4/5. Como x está no primeiro quadrante, onde seno e cosseno são ambos positivos, fica cos x = 4/5. A alternativa 2/5 aparece em quem tira a raiz de 16/25 dividindo por 2 em vez de extrair a raiz de cada termo. Já 5/4 é maior que 1 e, portanto, impossível para um cosseno.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um arco x do ciclo trigonométrico, com medida entre 0° e 360°, pertence ao segundo quadrante e satisfaz cos x = −1/2. A medida desse arco é:",
    opcoes: ["60°", "150°", "120°", "240°", "300°"],
    correta: 2,
    explicacao:
      "O cosseno vale 1/2 em módulo nos arcos associados a 60°. No segundo quadrante o arco correspondente é 180° − 60° = 120°, e ali o cosseno é de fato negativo. A alternativa 240° também tem cosseno −1/2, mas fica no terceiro quadrante, fora do que o enunciado pede. Já 150° tem cosseno −√3/2, valor de módulo maior, e 300° está no quarto quadrante, com cosseno positivo.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Na trigonometria, ângulos podem ser medidos em graus ou em radianos, e a conversão parte da correspondência entre uma volta completa e 2π radianos. Um ângulo de 180° equivale, em radianos, a:",
    opcoes: ["π/2", "2π", "π/3", "π", "3π/2"],
    correta: 3,
    explicacao:
      "Se a volta inteira (360°) vale 2π rad, metade da volta vale π rad. A regra prática que resolve todas as conversões é multiplicar os graus por π/180: 180 · π/180 = π. A alternativa π/2 corresponde a 90°, 3π/2 a 270° e 2π à volta completa, 360°.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Aplicando a conversão entre as duas unidades de medida angular, um ângulo de 60° corresponde, em radianos, à medida de:",
    opcoes: ["π/6", "π/4", "π/2", "π/3", "2π/3"],
    correta: 3,
    explicacao:
      "Multiplicando por π/180: 60 · π/180 = π/3. Uma checagem rápida: π/3 é um terço de π, e 60° é um terço de 180° — a proporção tem de ser a mesma nas duas unidades. A alternativa π/6 vale 30°, π/4 vale 45° e 2π/3 vale 120°, exatamente o dobro do pedido.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "No ciclo trigonométrico, o sinal de cada razão depende do quadrante em que o arco termina. Considerando um arco do terceiro quadrante, é correto afirmar que assumem valor positivo:",
    opcoes: [
      "o seno e o cosseno.",
      "o seno e a tangente.",
      "apenas a tangente.",
      "apenas o cosseno.",
      "as três razões.",
    ],
    correta: 2,
    explicacao:
      "No terceiro quadrante a abscissa e a ordenada são ambas negativas, então cosseno e seno são negativos. Como a tangente é o quociente entre eles, dois negativos se cancelam e ela fica positiva. O mapa completo ajuda: no primeiro quadrante tudo é positivo; no segundo só o seno; no terceiro só a tangente; no quarto só o cosseno.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Em um triângulo, dois lados medem 3 cm e 5 cm e o ângulo formado entre eles mede 60°. Aplicando a lei dos cossenos, a medida do terceiro lado é:",
    opcoes: ["√34 cm", "√19 cm", "7 cm", "√13 cm", "8 cm"],
    correta: 1,
    explicacao:
      "A lei dos cossenos dá a² = 3² + 5² − 2 · 3 · 5 · cos 60° = 9 + 25 − 30 · (1/2) = 34 − 15 = 19, logo a = √19 ≈ 4,36 cm. A alternativa √34 é o resultado de quem esquece o termo do cosseno e aplica Pitágoras, o que só valeria se o ângulo fosse de 90°. Note que 8 cm é a soma dos dois lados dados e, pela desigualdade triangular, jamais poderia ser o terceiro lado.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Em um triângulo, o lado a mede 10 cm e se opõe a um ângulo de 30°, enquanto o lado b se opõe a um ângulo de 45°. Pela lei dos senos, a medida do lado b é:",
    opcoes: ["5√2 cm", "10 cm", "20 cm", "5 cm", "10√2 cm"],
    correta: 4,
    explicacao:
      "A lei dos senos afirma que a/sen A = b/sen B. Assim, b = 10 · sen 45° / sen 30° = 10 · (√2/2) / (1/2) = 10√2 ≈ 14,1 cm. O resultado é coerente com a geometria: como 45° é maior que 30°, o lado b tem de ser maior que os 10 cm do lado a, o que elimina 5 cm e 5√2 cm sem conta nenhuma.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um terreno triangular tem dois lados que medem 8 m e 6 m, formando entre si um ângulo de 30°. A área desse terreno, em metros quadrados, é igual a:",
    opcoes: ["12", "24", "48", "6", "20,8"],
    correta: 0,
    explicacao:
      "A área de um triângulo a partir de dois lados e do ângulo entre eles é A = (1/2) · a · b · sen C = (1/2) · 8 · 6 · sen 30° = 24 · (1/2) = 12 m². A alternativa 24 m² é o valor de (1/2) · 8 · 6 sem aplicar o seno, ou seja, o que a área valeria se o ângulo fosse reto. Já 48 m² é o produto dos dois lados sem nenhum dos fatores, e 20,8 m² viria de usar sen 60° no lugar de sen 30°.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um triângulo tem lados medindo 3 cm, 4 cm e 5 cm. O cosseno do maior ângulo interno desse triângulo é igual a:",
    opcoes: ["0", "1", "0,5", "−1", "0,6"],
    correta: 0,
    explicacao:
      "Como 3² + 4² = 9 + 16 = 25 = 5², o triângulo é retângulo e o maior ângulo mede 90°, cujo cosseno é zero. Dá para chegar ao mesmo resultado pela lei dos cossenos: 25 = 9 + 16 − 2 · 3 · 4 · cos C leva a 24 · cos C = 0. A alternativa −1 corresponde a 180°, que não pode ser ângulo interno de triângulo, e 0,6 é o cosseno de um dos ângulos agudos, não do maior.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Sabe-se que um arco x do primeiro quadrante satisfaz a igualdade tg x = 1. Nessas condições, o valor de sen x é:",
    opcoes: ["1/2", "√3/2", "1", "√2/2", "0"],
    correta: 3,
    explicacao:
      "Se a tangente vale 1, seno e cosseno são iguais, e o único arco do primeiro quadrante em que isso ocorre é 45°, cujo seno vale √2/2 ≈ 0,71. A alternativa 1 confunde o valor da tangente com o do seno. Vale lembrar que √2/2 é o mesmo que 1/√2, escrito de forma racionalizada — as duas notações aparecem em provas diferentes.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "A função y = sen x é periódica, isto é, repete seus valores em intervalos regulares. O período dessa função, medido em radianos, é igual a:",
    opcoes: ["π", "π/2", "4π", "3π", "2π"],
    correta: 4,
    explicacao:
      "O seno completa um ciclo inteiro a cada volta no ciclo trigonométrico, e uma volta corresponde a 2π rad. Por isso sen(x + 2π) = sen x para qualquer x. A alternativa π é o período da tangente, não do seno — a tangente repete seus valores a cada meia volta porque assume o mesmo sinal em quadrantes opostos.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Uma função trigonométrica é definida por y = sen(2x), com x em radianos. O período dessa função é igual a:",
    opcoes: ["2π", "4π", "π", "π/2", "π/4"],
    correta: 2,
    explicacao:
      "Para y = sen(bx), o período é 2π dividido por |b|; aqui, 2π/2 = π. O coeficiente que multiplica x comprime o gráfico horizontalmente: o argumento 2x percorre uma volta inteira enquanto x anda só meia volta. A alternativa 4π faz a operação inversa, multiplicando por 2 em vez de dividir. Quando o coeficiente é uma fração, como em sen(x/2), o efeito se inverte e o período aumenta.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Considere a função real definida por y = 3 · sen x. O conjunto imagem dessa função, ou seja, o conjunto de todos os valores que y pode assumir, é o intervalo:",
    opcoes: ["[−1, 1]", "[−3, 3]", "[0, 3]", "[−6, 6]", "[0, 6]"],
    correta: 1,
    explicacao:
      "O seno varia entre −1 e 1, e multiplicar por 3 estica esse intervalo para −3 a 3. O fator que multiplica a função é a amplitude e controla a altura da onda, sem alterar o período. A alternativa [0, 3] esquece que o seno também assume valores negativos, e [−6, 6] confundiria amplitude com a distância total entre o máximo e o mínimo, que aqui vale 6.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "dificil",
    enunciado:
      "A temperatura de um forno industrial, em graus Celsius, oscila conforme a expressão T = 2 + 4 · cos t, em que t é o tempo em horas. O maior valor de temperatura previsto por esse modelo é:",
    opcoes: ["4 °C", "2 °C", "−2 °C", "1 °C", "6 °C"],
    correta: 4,
    explicacao:
      "O cosseno atinge no máximo 1, e nesse instante T = 2 + 4 · 1 = 6 °C. O mínimo ocorre quando o cosseno vale −1, dando T = 2 − 4 = −2 °C. Aqui o 2 é o valor médio em torno do qual a temperatura oscila e o 4 é a amplitude da oscilação — separar esses dois papéis resolve qualquer questão desse tipo. A alternativa 4 °C confunde a amplitude com o valor máximo.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Considerando os arcos medidos na primeira volta do ciclo trigonométrico, o valor de sen 210° é igual a:",
    opcoes: ["1/2", "−1/2", "−√3/2", "√3/2", "−1"],
    correta: 1,
    explicacao:
      "O arco de 210° está no terceiro quadrante e seu arco de referência é 210° − 180° = 30°. Como o seno é negativo nesse quadrante, sen 210° = −sen 30° = −1/2. A alternativa −√3/2 corresponderia a 240°, cujo arco de referência é 60°. Errar o sinal e responder 1/2 é o deslize mais frequente: no terceiro e no quarto quadrantes a ordenada está abaixo do eixo horizontal.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "No ciclo trigonométrico de raio unitário, os arcos que caem exatamente sobre os eixos têm valores conhecidos. O valor de cos 180° é igual a:",
    opcoes: ["0", "1", "−1", "1/2", "−1/2"],
    correta: 2,
    explicacao:
      "O arco de 180° termina no ponto (−1, 0) do ciclo. Como o cosseno é a abscissa desse ponto, cos 180° = −1, e o seno correspondente é 0. A alternativa 0 troca o cosseno pelo seno nesse mesmo arco. Guardar as quatro posições dos eixos — (1,0), (0,1), (−1,0) e (0,−1) — dispensa memorizar tabela para 0°, 90°, 180° e 270°.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Ainda considerando os arcos que terminam sobre os eixos do ciclo trigonométrico de raio 1, o valor de sen 90° é igual a:",
    opcoes: ["1", "0", "−1", "1/2", "√2/2"],
    correta: 0,
    explicacao:
      "O arco de 90° termina no ponto (0, 1), e o seno é a ordenada desse ponto, portanto sen 90° = 1 — o maior valor que o seno pode assumir. A alternativa 0 é o cosseno desse mesmo arco. É justamente por cos 90° ser zero que a tangente de 90° não existe: ela é o quociente sen/cos, e a divisão por zero não está definida.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Sabendo que a tangente de um arco é o quociente entre o seno e o cosseno desse arco, o valor de tg 180° é:",
    opcoes: ["1", "−1", "indefinida", "0", "√3"],
    correta: 3,
    explicacao:
      "Em 180°, o seno vale 0 e o cosseno vale −1, então tg 180° = 0/(−1) = 0. A alternativa 'indefinida' vale para 90° e 270°, onde o cosseno se anula e o denominador zera. O padrão é simples: a tangente é nula onde o seno é nulo (0°, 180°, 360°) e não existe onde o cosseno é nulo (90°, 270°).",
  },
];
