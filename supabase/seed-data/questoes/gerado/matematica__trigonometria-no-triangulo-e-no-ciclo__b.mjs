/* Trigonometria no triângulo e no ciclo — parte B (25 questões).
   Aplicações de elevação, lei dos senos e cossenos, arcos côngruos, sinais
   por quadrante e identidades. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um avião decola em trajetória retilínea formando um ângulo constante de 30° com a pista horizontal. Depois de percorrer 4 km nessa trajetória, a altitude atingida pelo avião é de:",
    opcoes: ["4 km", "2√3 km", "2 km", "1 km", "3,4 km"],
    correta: 2,
    explicacao:
      "A trajetória é a hipotenusa e a altitude é o cateto oposto ao ângulo de subida: altitude = 4 · sen 30° = 4 · (1/2) = 2 km. A alternativa 2√3 km ≈ 3,46 km vem de usar o cosseno, que fornece o deslocamento horizontal, e não o vertical. Como o ângulo é menor que 45°, o avião necessariamente avança mais na horizontal do que sobe — conferir isso evita a troca das duas razões.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Uma criança empina uma pipa com 50 m de linha completamente esticada, formando 60° com a horizontal. Desconsiderando a altura da criança, a altura da pipa em relação ao solo é de:",
    opcoes: ["25 m", "50√3 m", "100 m", "50 m", "25√3 m"],
    correta: 4,
    explicacao:
      "A linha é a hipotenusa e a altura é o cateto oposto ao ângulo de 60°: altura = 50 · sen 60° = 50 · (√3/2) = 25√3 ≈ 43,3 m. A alternativa 25 m é o resultado de usar sen 30° em vez de sen 60°, um erro de leitura do ângulo. E 50√3 m ≈ 86,6 m é impossível: a altura nunca pode superar o comprimento da linha.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Uma roda-gigante de 10 m de raio gira em torno de um eixo horizontal. Em certo instante, o raio que liga o centro a uma cabine forma 30° com a horizontal que passa pelo centro, com a cabine acima dela. A altura da cabine em relação ao centro da roda é de:",
    opcoes: ["5 m", "10 m", "8,6 m", "2,5 m", "20 m"],
    correta: 0,
    explicacao:
      "A altura em relação ao centro é o cateto oposto ao ângulo de 30° em um triângulo cuja hipotenusa é o raio: h = 10 · sen 30° = 5 m. A alternativa 8,6 m corresponde a 10 · cos 30°, que dá o afastamento horizontal da cabine. É esse tipo de decomposição que faz a altura de uma cabine variar como uma função senoidal do tempo enquanto a roda gira.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "A função real definida por y = cos x assume valores que se repetem periodicamente dentro de um intervalo limitado. O menor valor que essa função pode assumir é:",
    opcoes: ["0", "1", "−2", "−1", "2"],
    correta: 3,
    explicacao:
      "O cosseno é a abscissa de um ponto do ciclo de raio 1, e a menor abscissa possível nesse ciclo é −1, atingida em 180°. Portanto a imagem da função é o intervalo de −1 a 1. As alternativas −2 e 2 ficariam fora do ciclo unitário e só apareceriam se houvesse um fator multiplicando a função, como em y = 2 · cos x.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Diferentemente do seno e do cosseno, a função tangente repete seus valores em intervalos menores que uma volta completa. O período da função y = tg x é:",
    opcoes: ["2π", "π", "π/2", "4π", "3π"],
    correta: 1,
    explicacao:
      "A tangente assume o mesmo valor em quadrantes opostos pelo vértice, porque seno e cosseno trocam de sinal simultaneamente ali. Assim tg(x + π) = tg x, e o período é π. A alternativa 2π é o período do seno e do cosseno — confundir os dois é o erro clássico. A tangente também não é definida em π/2 e 3π/2, onde o cosseno se anula.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "O tabuleiro de uma ponte levadiça tem 20 m de comprimento e é erguido até formar 45° com a horizontal. Nessa posição, a altura da extremidade livre do tabuleiro em relação ao ponto de apoio é de:",
    opcoes: ["20 m", "10√2 m", "20√2 m", "10 m", "14 m"],
    correta: 1,
    explicacao:
      "A altura é o cateto oposto ao ângulo de 45°, com o tabuleiro como hipotenusa: h = 20 · sen 45° = 20 · (√2/2) = 10√2 ≈ 14,1 m. A alternativa 20√2 m ≈ 28,3 m multiplica em vez de dividir e ultrapassa o comprimento do tabuleiro, o que é geometricamente impossível. Já 14 m é o valor arredondado, mas a forma exata pedida é 10√2.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um triângulo tem lados medindo 6 cm, 8 cm e 10 cm. Aplicando a lei dos cossenos, o cosseno do ângulo oposto ao lado de 10 cm vale:",
    opcoes: ["1", "0,6", "0,5", "0", "−0,5"],
    correta: 3,
    explicacao:
      "Pela lei dos cossenos, 10² = 6² + 8² − 2 · 6 · 8 · cos C, ou seja, 100 = 100 − 96 · cos C, o que força cos C = 0 e C = 90°. O resultado confirma que 6, 8 e 10 formam um triângulo retângulo — é o terno 3, 4, 5 multiplicado por 2. Sempre que a lei dos cossenos devolve cosseno nulo, o triângulo é retângulo e a fórmula se reduz ao teorema de Pitágoras.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Existe um único arco do primeiro quadrante em que o seno e o cosseno assumem exatamente o mesmo valor. A medida desse arco, em graus, é:",
    opcoes: ["30°", "60°", "90°", "0°", "45°"],
    correta: 4,
    explicacao:
      "Se sen x = cos x, dividindo os dois lados pelo cosseno obtém-se tg x = 1, cuja solução no primeiro quadrante é 45°. Ali as duas razões valem √2/2. A alternativa 90° tem seno 1 e cosseno 0, e 0° tem seno 0 e cosseno 1 — nos dois extremos as razões são o mais diferentes possível. É a simetria do triângulo retângulo isósceles que produz essa igualdade em 45°.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Convertendo a medida angular de radianos para graus por meio da correspondência entre π radianos e 180°, o arco de 2π/3 rad equivale a:",
    opcoes: ["120°", "60°", "90°", "150°", "240°"],
    correta: 0,
    explicacao:
      "Basta multiplicar por 180/π: (2π/3) · (180/π) = 2 · 180/3 = 120°. Uma leitura direta também funciona: 2π/3 é dois terços de π, e dois terços de 180° dão 120°. A alternativa 240° corresponderia a 4π/3, e 60° a π/3 — metade do arco pedido.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um triângulo equilátero tem lados medindo 10 cm. Usando o seno de 60° no triângulo retângulo formado por uma das alturas, a medida dessa altura é:",
    opcoes: ["10√3 cm", "5 cm", "5√3 cm", "10 cm", "2,5√3 cm"],
    correta: 2,
    explicacao:
      "A altura divide o triângulo equilátero em dois triângulos retângulos cuja hipotenusa é o lado de 10 cm. A altura é o cateto oposto ao ângulo de 60°, logo h = 10 · sen 60° = 10 · (√3/2) = 5√3 ≈ 8,66 cm. Isso confirma a fórmula geral h = L√3/2. A alternativa 5 cm é a metade do lado, que corresponde ao outro cateto, e não à altura.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Dois arcos são côngruos quando terminam no mesmo ponto do ciclo trigonométrico, diferindo por um número inteiro de voltas. O arco da primeira volta côngruo a 400° mede:",
    opcoes: ["40°", "60°", "340°", "20°", "400°"],
    correta: 0,
    explicacao:
      "Subtraindo uma volta completa: 400° − 360° = 40°, que já está entre 0° e 360°. Todos os arcos da forma 40° + k · 360° são côngruos entre si e têm exatamente os mesmos seno, cosseno e tangente. A alternativa 340° seria o côngruo de −20°, e não de 400°. Para arcos negativos o procedimento é o mesmo, mas somando voltas até cair na primeira.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "dificil",
    enunciado:
      "Sabe-se que um arco x pertence ao segundo quadrante e que sen x = 0,8. Aplicando a relação fundamental da trigonometria, o valor de cos x é:",
    opcoes: ["0,6", "0,36", "−0,6", "−0,8", "−0,36"],
    correta: 2,
    explicacao:
      "De sen²x + cos²x = 1 vem cos²x = 1 − 0,64 = 0,36, logo cos x = ±0,6. Como o arco está no segundo quadrante, onde a abscissa é negativa, fica cos x = −0,6. A alternativa 0,6 despreza o quadrante, e −0,36 confunde o quadrado do cosseno com o próprio cosseno: falta extrair a raiz. É por isso que a informação do quadrante nunca é decorativa nesse tipo de questão.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "dificil",
    enunciado:
      "Dividindo os dois membros da relação fundamental sen²x + cos²x = 1 pelo quadrado do cosseno, obtém-se uma segunda identidade trigonométrica. Nessa identidade, a expressão 1 + tg²x é igual a:",
    opcoes: ["cossec²x", "cotg²x", "2", "sec²x", "sen²x"],
    correta: 3,
    explicacao:
      "Dividindo tudo por cos²x: sen²x/cos²x + 1 = 1/cos²x, isto é, tg²x + 1 = sec²x. A alternativa cossec²x aparece na identidade irmã, obtida dividindo por sen²x, que resulta em 1 + cotg²x = cossec²x. Trocar as duas é comum; a dica é olhar qual razão está somando: se é a tangente, o resultado envolve a secante, porque ambas têm o cosseno no denominador.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "dificil",
    enunciado:
      "Em um triângulo obtusângulo, dois lados medem 5 cm e 7 cm e o ângulo formado entre eles mede 120°. A medida do lado oposto a esse ângulo é:",
    opcoes: ["√39 cm", "√109 cm", "√74 cm", "12 cm", "√89 cm"],
    correta: 1,
    explicacao:
      "Pela lei dos cossenos, a² = 25 + 49 − 2 · 5 · 7 · cos 120°. Como cos 120° = −1/2, o último termo vira −70 · (−0,5) = +35, e a² = 74 + 35 = 109, logo a = √109 ≈ 10,4 cm. A alternativa √39 é o resultado de quem usa cos 120° como se fosse +1/2 e subtrai. O sinal importa: com ângulo obtuso, o lado oposto fica maior que a hipotenusa que Pitágoras daria, e √109 é de fato maior que √74.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "A lei dos senos estabelece uma proporção entre cada lado de um triângulo e o seno do ângulo oposto a ele. Uma consequência direta dessa proporção é que, em qualquer triângulo, o maior lado se opõe sempre ao:",
    opcoes: [
      "menor ângulo interno.",
      "ângulo reto.",
      "ângulo de 60°.",
      "ângulo agudo mais próximo dele.",
      "maior ângulo interno.",
    ],
    correta: 4,
    explicacao:
      "Se a/sen A = b/sen B, lados maiores exigem senos maiores. Para ângulos internos de triângulo, que ficam entre 0° e 180°, o seno cresce até 90° e decresce depois, mas a ordenação lado-ângulo se mantém: ao maior lado corresponde o maior ângulo. A alternativa 'ângulo reto' só valeria em triângulos retângulos, onde de fato a hipotenusa é o maior lado — mas é um caso particular, não a regra geral.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Um triângulo equilátero tem lados medindo 6 cm. Calculando sua área pela fórmula que usa dois lados e o seno do ângulo entre eles, obtém-se:",
    opcoes: ["18 cm²", "36 cm²", "6√3 cm²", "12√3 cm²", "9√3 cm²"],
    correta: 4,
    explicacao:
      "A área é A = (1/2) · 6 · 6 · sen 60° = 18 · (√3/2) = 9√3 ≈ 15,6 cm². O resultado coincide com a fórmula específica do equilátero, A = L²√3/4 = 36√3/4 = 9√3. A alternativa 18 cm² é o valor de (1/2) · 6 · 6 sem o seno, isto é, a área que o triângulo teria se o ângulo fosse reto — impossível em um equilátero.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Considerando os arcos da primeira volta do ciclo trigonométrico, existe um deles, distinto de 270°, cujo cosseno é igual a zero. A medida desse arco é:",
    opcoes: ["0°", "90°", "45°", "180°", "60°"],
    correta: 1,
    explicacao:
      "O cosseno é a abscissa do ponto do ciclo, e ela se anula exatamente sobre o eixo vertical, em 90° e em 270°. Como o enunciado exclui 270°, resta 90°. A alternativa 0° tem cosseno 1 e 180° tem cosseno −1: nos dois casos o ponto está sobre o eixo horizontal, onde é o seno que se anula.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Usando a redução ao primeiro quadrante, que relaciona um arco ao seu arco de referência, o valor de sen 120° é igual a:",
    opcoes: ["−√3/2", "1/2", "√3/2", "−1/2", "√2/2"],
    correta: 2,
    explicacao:
      "O arco de 120° está no segundo quadrante e seu arco de referência é 180° − 120° = 60°. Como o seno é positivo nesse quadrante, sen 120° = sen 60° = √3/2. A alternativa −√3/2 corresponderia a 240°, no terceiro quadrante. Já 1/2 confunde o arco de referência com 30°. Note que sen 120° = sen 60°, mas cos 120° = −cos 60°: o seno preserva o valor, o cosseno troca o sinal.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Ainda aplicando a redução ao primeiro quadrante para arcos da primeira volta, o valor de cos 300° é igual a:",
    opcoes: ["1/2", "−1/2", "√3/2", "−√3/2", "0"],
    correta: 0,
    explicacao:
      "O arco de 300° está no quarto quadrante e seu arco de referência é 360° − 300° = 60°. No quarto quadrante o cosseno é positivo, então cos 300° = cos 60° = 1/2. A alternativa −1/2 erra o sinal, esquecendo que o quarto quadrante é justamente aquele em que só o cosseno permanece positivo. E √3/2 usaria 30° como referência, o que corresponderia a 330°.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Considerando que a tangente é o quociente entre o seno e o cosseno e aplicando a redução ao primeiro quadrante, o valor de tg 135° é:",
    opcoes: ["1", "0", "√3", "−1", "−√3"],
    correta: 3,
    explicacao:
      "O arco de 135° tem referência 45° e está no segundo quadrante, onde o seno é positivo e o cosseno é negativo. Assim tg 135° = (√2/2)/(−√2/2) = −1. A alternativa 1 esquece o sinal: a tangente só é positiva no primeiro e no terceiro quadrantes. Já −√3 corresponderia a 120°, cuja referência é 60°.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Muitas fórmulas da física e da matemática exigem a medida angular em radianos. Um ângulo cuja medida é π radianos corresponde, em graus, a:",
    opcoes: ["90°", "360°", "270°", "180°", "60°"],
    correta: 3,
    explicacao:
      "A definição de radiano parte do comprimento do arco: a volta completa mede 2π rad, ou 360°, de modo que π rad equivale a metade da volta, 180°. A alternativa 360° confunde π com 2π, que é o dobro. Como o radiano é uma razão entre dois comprimentos, ele é adimensional — por isso a unidade costuma ser omitida em fórmulas.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "facil",
    enunciado:
      "Os quadrantes do ciclo trigonométrico são contados no sentido anti-horário a partir do eixo horizontal positivo. Um arco de 135° tem extremidade localizada no:",
    opcoes: [
      "segundo quadrante.",
      "primeiro quadrante.",
      "terceiro quadrante.",
      "quarto quadrante.",
      "eixo vertical, sem pertencer a quadrante algum.",
    ],
    correta: 0,
    explicacao:
      "O segundo quadrante abrange os arcos entre 90° e 180°, e 135° está exatamente no meio dessa faixa. Por isso sen 135° é positivo e cos 135° é negativo. A alternativa do eixo vertical valeria só para 90° e 270°, arcos que não pertencem a nenhum quadrante por caírem sobre a fronteira.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "De um ponto do solo situado a 60 m da base de um edifício, um observador vê o topo dele sob um ângulo de elevação de 30°. Desprezando a altura do observador, a altura do edifício é de:",
    opcoes: ["30 m", "20√3 m", "60√3 m", "20 m", "34 m"],
    correta: 1,
    explicacao:
      "Altura e distância horizontal são os dois catetos, então altura = 60 · tg 30° = 60 · (√3/3) = 20√3 ≈ 34,6 m. A alternativa 60√3 m ≈ 104 m usa tg 60° por engano e produz um prédio mais alto que a distância — incompatível com um ângulo de apenas 30°. A alternativa 34 m é o arredondado, mas a forma exata pedida é 20√3.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "media",
    enunciado:
      "Em um triângulo retângulo, um dos ângulos agudos mede 30°. A respeito do cateto oposto a esse ângulo, é correto afirmar que ele:",
    opcoes: [
      "é igual à hipotenusa.",
      "é o dobro da hipotenusa.",
      "é igual ao outro cateto.",
      "vale √3/2 da hipotenusa.",
      "vale metade da hipotenusa.",
    ],
    correta: 4,
    explicacao:
      "Como sen 30° = 1/2 e o seno é a razão entre cateto oposto e hipotenusa, esse cateto mede exatamente metade da hipotenusa. É a propriedade que aparece no triângulo equilátero cortado ao meio pela altura. A alternativa √3/2 descreve o outro cateto, adjacente ao ângulo de 30°. Nenhum cateto pode igualar ou superar a hipotenusa, o que descarta as duas primeiras alternativas de imediato.",
  },
  {
    materia: "matematica",
    tema: "Trigonometria no triângulo e no ciclo",
    dificuldade: "dificil",
    enunciado:
      "A secante de um arco é definida como o inverso do cosseno desse arco, desde que o cosseno não seja nulo. Nessas condições, o valor da secante de 60° é:",
    opcoes: ["1/2", "√3", "2", "√3/3", "1"],
    correta: 2,
    explicacao:
      "Como cos 60° = 1/2, a secante é 1 dividido por 1/2, ou seja, 2. A alternativa 1/2 devolve o próprio cosseno, sem inverter. Vale notar que a secante nunca fica entre −1 e 1: por ser o inverso de um número de módulo no máximo 1, seu módulo é sempre maior ou igual a 1 — o que já elimina 1/2 e √3/3 sem cálculo.",
  },
];
