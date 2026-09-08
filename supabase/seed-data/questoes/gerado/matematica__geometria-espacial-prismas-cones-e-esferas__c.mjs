/* Geometria espacial: prismas, cones e esferas — parte C (21 questões).
   Fecha o conteúdo em 50 junto das partes já existentes: áreas totais e
   laterais, diagonais, relação de Euler e razões de semelhança.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Uma pirâmide regular tem base quadrada de 6 cm de lado e altura de 10 cm. O volume dessa pirâmide é igual a:",
    opcoes: ["360 cm³", "60 cm³", "120 cm³", "180 cm³", "240 cm³"],
    correta: 2,
    explicacao:
      "O volume da pirâmide é um terço do produto da área da base pela altura: V = (1/3) · 36 · 10 = 120 cm³. A alternativa 360 cm³ é o volume do prisma de mesma base e mesma altura, ou seja, o resultado de quem esquece o fator 1/3. Já 60 cm³ sai de dividir por 6 em vez de por 3. O padrão vale para todo sólido pontudo: pirâmides e cones valem um terço do sólido reto correspondente.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Um cubo maciço tem 4 cm de aresta. A medida do segmento que liga dois vértices opostos do cubo, atravessando seu interior, é igual a:",
    opcoes: ["4 cm", "8 cm", "4√2 cm", "12 cm", "4√3 cm"],
    correta: 4,
    explicacao:
      "A diagonal do cubo de aresta a mede a√3, então aqui vale 4√3 ≈ 6,93 cm. A fórmula sai de aplicar Pitágoras duas vezes: primeiro na face, obtendo a diagonal a√2, e depois no triângulo formado por essa diagonal, a aresta e a diagonal do cubo. A alternativa 4√2 cm é justamente a diagonal de uma face, que fica no plano e não atravessa o interior.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "facil",
    enunciado:
      "Uma caixa cúbica de papelão tem 5 cm de aresta e é fechada em todas as suas faces. A quantidade de papelão necessária para revestir toda a superfície externa dessa caixa é de:",
    opcoes: ["125 cm²", "150 cm²", "25 cm²", "100 cm²", "75 cm²"],
    correta: 1,
    explicacao:
      "O cubo tem 6 faces quadradas iguais, cada uma com 5² = 25 cm². A área total é 6 · 25 = 150 cm². A alternativa 125 cm² é o volume do cubo, 5³, e não a área — misturar as duas grandezas é o erro mais comum aqui, e a unidade denuncia: área vem em cm², volume em cm³. Já 100 cm² corresponderia a apenas quatro faces, esquecendo a tampa e o fundo.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Uma bola de borracha maciça tem 3 cm de raio. Adotando π = 3, a área da superfície externa dessa bola é de:",
    opcoes: ["36 cm²", "54 cm²", "81 cm²", "108 cm²", "324 cm²"],
    correta: 3,
    explicacao:
      "A área da esfera é A = 4πr² = 4 · 3 · 9 = 108 cm². A alternativa 36 cm² esquece de multiplicar por π. A de 54 cm² corresponde a 2πr², ou seja, metade da superfície. Já 324 cm² usa r³ no lugar de r², misturando a fórmula da área com a do volume. Para separar as duas, basta lembrar que área depende de r² e volume depende de r³ — e conferir a unidade, que aqui tem de vir em cm².",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Um poliedro convexo tem 8 vértices e 12 arestas. Aplicando a relação de Euler, válida para todo poliedro convexo, conclui-se que o número de faces desse poliedro é:",
    opcoes: ["6", "5", "7", "8", "4"],
    correta: 0,
    explicacao:
      "A relação de Euler afirma que V − A + F = 2. Substituindo, 8 − 12 + F = 2, logo F = 6. O poliedro descrito pode ser um cubo ou um paralelepípedo, que de fato têm 8 vértices, 12 arestas e 6 faces. A relação vale para qualquer poliedro convexo, independentemente do formato das faces — é por isso que ela serve como conferência rápida em contagens.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Um prisma reto tem como base um hexágono regular. Contando as arestas das duas bases e as arestas laterais, o número total de arestas desse prisma é:",
    opcoes: ["18", "12", "24", "15", "20"],
    correta: 0,
    explicacao:
      "Cada base hexagonal tem 6 arestas, somando 12, e há mais 6 arestas laterais ligando os vértices correspondentes: 12 + 6 = 18. A alternativa 12 conta só as bases e esquece as laterais. A regra geral para prismas de base com n lados é 3n arestas, 2n vértices e n + 2 faces — vale conferir com Euler: 12 − 18 + 8 = 2.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Um rótulo de papel envolve completamente a superfície lateral de uma lata cilíndrica de 5 cm de raio e 10 cm de altura, sem sobreposição. Adotando π = 3, a área desse rótulo é de:",
    opcoes: ["150 cm²", "75 cm²", "450 cm²", "300 cm²", "600 cm²"],
    correta: 3,
    explicacao:
      "Planificada, a superfície lateral do cilindro é um retângulo cuja base é o comprimento da circunferência e cuja altura é a do cilindro: A = 2πrh = 2 · 3 · 5 · 10 = 300 cm². A alternativa 75 cm² é a área de uma base, πr², e 450 cm² seria a área total incluindo as duas tampas, que o rótulo não cobre. Entender o rótulo como retângulo desenrolado dispensa decorar a fórmula.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "facil",
    enunciado:
      "Um cone e um cilindro têm bases circulares de mesmo raio e alturas iguais. A razão entre o volume do cone e o volume do cilindro é igual a:",
    opcoes: ["1/2", "2/3", "1", "3", "1/3"],
    correta: 4,
    explicacao:
      "O volume do cilindro é πr²h e o do cone é (1/3)πr²h, então a razão é exatamente 1/3, independentemente dos valores de raio e altura. Na prática, seria preciso encher o cone três vezes para completar o cilindro. A alternativa 3 inverte a razão, dizendo que o cone é maior — o que contraria o próprio formato dos sólidos.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Uma caixa em forma de paralelepípedo reto retângulo tem 3 cm, 4 cm e 12 cm de dimensões. O comprimento da maior haste rígida que cabe dentro dessa caixa, apoiada de um vértice ao vértice oposto, é de:",
    opcoes: ["19 cm", "13 cm", "12 cm", "15 cm", "17 cm"],
    correta: 1,
    explicacao:
      "A diagonal do paralelepípedo é a raiz da soma dos quadrados das três dimensões: √(9 + 16 + 144) = √169 = 13 cm. A alternativa 19 cm é a soma das três medidas, erro de quem trata a diagonal como um caminho pelas arestas. Note que a diagonal é sempre maior que qualquer aresta e menor que a soma delas, o que já elimina 12 cm e 19 cm.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Duas esferas maciças são feitas do mesmo material, e o raio da segunda é o dobro do raio da primeira. O volume da segunda esfera, comparado ao da primeira, é multiplicado por:",
    opcoes: ["2", "4", "8", "6", "16"],
    correta: 2,
    explicacao:
      "O volume da esfera é proporcional ao cubo do raio, pois V = (4/3)πr³. Dobrando o raio, o volume fica multiplicado por 2³ = 8. A alternativa 4 corresponde ao que acontece com a área da superfície, que depende de r². Essa diferença explica por que uma bola com o dobro do diâmetro pesa oito vezes mais, e não duas.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Tijolos maciços em forma de paralelepípedo medem 20 cm por 10 cm por 5 cm. O número máximo desses tijolos que, empilhados sem folgas, ocupam exatamente o volume de 1 m³ é:",
    opcoes: ["100", "500", "2 000", "250", "1 000"],
    correta: 4,
    explicacao:
      "O volume de cada tijolo é 20 · 10 · 5 = 1 000 cm³, e 1 m³ equivale a 1 000 000 cm³. Dividindo, 1 000 000 / 1 000 = 1 000 tijolos. O ponto que decide a questão é a conversão: 1 m³ não são 100 cm³ nem 10 000 cm³, porque cada metro vira 100 cm e o fator é elevado ao cubo. A alternativa 100 aparece justamente em quem converte como se fosse comprimento.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "facil",
    enunciado:
      "Uma pirâmide e um prisma reto têm bases iguais e a mesma altura. Enchendo a pirâmide de areia e despejando o conteúdo no prisma, o número de vezes que esse procedimento precisa ser repetido para encher o prisma completamente é:",
    opcoes: ["2", "6", "3", "4", "9"],
    correta: 2,
    explicacao:
      "Como o volume da pirâmide é (1/3) do volume do prisma de mesma base e altura, são necessárias exatamente 3 pirâmides cheias. Esse experimento é a demonstração intuitiva do fator 1/3 que aparece nas fórmulas de pirâmide e cone. A alternativa 2 confundiria o sólido com uma metade, o que não corresponde a nenhuma relação geométrica desse tipo.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "dificil",
    enunciado:
      "Um retângulo de 3 cm por 8 cm gira uma volta completa em torno do lado que mede 8 cm, gerando um sólido de revolução. Adotando π = 3, o volume desse sólido é de:",
    opcoes: ["216 cm³", "576 cm³", "72 cm³", "108 cm³", "288 cm³"],
    correta: 0,
    explicacao:
      "Girando o retângulo em torno do lado de 8 cm, o sólido gerado é um cilindro de altura 8 cm e raio 3 cm — o raio é o lado perpendicular ao eixo. Assim V = πr²h = 3 · 9 · 8 = 216 cm³. A alternativa 576 cm³ vem de trocar os papéis, usando raio 8 e altura 3, o que corresponderia a girar em torno do outro lado. Identificar qual lado é o eixo é o passo decisivo.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "dificil",
    enunciado:
      "Uma lata cilíndrica fechada tem 2 cm de raio e 5 cm de altura. Adotando π = 3, a área total da superfície dessa lata, somando as duas bases e a lateral, é de:",
    opcoes: ["60 cm²", "84 cm²", "72 cm²", "96 cm²", "48 cm²"],
    correta: 1,
    explicacao:
      "A área total é 2πr² + 2πrh = 2 · 3 · 4 + 2 · 3 · 2 · 5 = 24 + 60 = 84 cm². A alternativa 60 cm² corresponde só à lateral, esquecendo tampa e fundo, e 24 cm² seria apenas as duas bases. Vale conferir se a lata do enunciado é fechada ou aberta: em latas sem tampa, entra apenas uma base, e a área cairia para 72 cm².",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Uma peça de concreto tem o formato de um prisma reto cuja base é um triângulo retângulo de catetos 6 cm e 8 cm. Sendo 10 cm a altura do prisma, seu volume é de:",
    opcoes: ["480 cm³", "120 cm³", "280 cm³", "240 cm³", "144 cm³"],
    correta: 3,
    explicacao:
      "A área da base é (6 · 8)/2 = 24 cm², e o volume do prisma é área da base vezes altura: 24 · 10 = 240 cm³. A alternativa 480 cm³ esquece de dividir por 2 ao calcular a área do triângulo. Já 120 cm³ sai de aplicar um fator de redução que não existe aqui: o 1/3 vale para pirâmides e cones, não para prismas, em que as duas bases são iguais e o sólido não afina.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Em um cubo de 6 cm de aresta, considera-se o segmento que liga dois vértices opostos de uma mesma face. A medida desse segmento é:",
    opcoes: ["6√3 cm", "6√2 cm", "12 cm", "6 cm", "3√2 cm"],
    correta: 1,
    explicacao:
      "Cada face do cubo é um quadrado de lado 6 cm, e a diagonal do quadrado é lado · √2, ou seja, 6√2 ≈ 8,49 cm. A alternativa 6√3 cm é a diagonal do cubo inteiro, que atravessa o interior do sólido e é maior. Distinguir as duas é essencial: a de face usa Pitágoras uma vez, a do cubo usa duas.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "facil",
    enunciado:
      "Uma bola de gude maciça pode ser considerada uma esfera de 3 cm de raio. Adotando π = 3, o volume dessa esfera é de:",
    opcoes: ["108 cm³", "81 cm³", "36 cm³", "324 cm³", "54 cm³"],
    correta: 0,
    explicacao:
      "Pela fórmula V = (4/3)πr³ = (4/3) · 3 · 27 = 4 · 27 = 108 cm³. A alternativa 324 cm³ é o resultado de multiplicar 4 · π · r³ sem dividir por 3, e 81 cm³ vem de usar 3 · 27 sem o fator 4/3. Observe que o cubo de 3 vale 27, e não 9 — elevar o raio ao quadrado em vez do cubo é o deslize mais frequente nessa fórmula.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "facil",
    enunciado:
      "Um cone circular reto tem base de 7 cm de raio. Adotando π = 3, a área da base desse cone é de:",
    opcoes: ["21 cm²", "42 cm²", "294 cm²", "147 cm²", "49 cm²"],
    correta: 3,
    explicacao:
      "A base do cone é um círculo, cuja área é πr² = 3 · 49 = 147 cm². A alternativa 42 cm² é o comprimento da circunferência, 2πr, que é uma medida linear e vem em centímetros, não em centímetros quadrados. Já 49 cm² esquece de multiplicar por π. Conferir a unidade do resultado é a forma mais rápida de perceber a troca entre área e perímetro.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Um cone circular reto tem 6 cm de raio da base e 8 cm de altura. A medida da geratriz desse cone, isto é, do segmento que liga o vértice a um ponto da borda da base, é de:",
    opcoes: ["14 cm", "√48 cm", "10 cm", "12 cm", "√28 cm"],
    correta: 2,
    explicacao:
      "Raio, altura e geratriz formam um triângulo retângulo em que a geratriz é a hipotenusa: g² = 6² + 8² = 36 + 64 = 100, logo g = 10 cm. A alternativa 14 cm é a soma do raio com a altura, que ignora Pitágoras. É o mesmo terno 3, 4, 5 multiplicado por 2, o que permite responder de cabeça quando se reconhece o padrão.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "dificil",
    enunciado:
      "Um chapéu de festa tem o formato da superfície lateral de um cone reto, com 6 cm de raio da base e 10 cm de geratriz. Adotando π = 3, a quantidade de papel usada para confeccioná-lo é de:",
    opcoes: ["360 cm²", "60 cm²", "90 cm²", "300 cm²", "180 cm²"],
    correta: 4,
    explicacao:
      "A área lateral do cone é A = πrg = 3 · 6 · 10 = 180 cm². A alternativa 300 cm² usaria a altura de 8 cm em lugar da geratriz, mas quem define a superfície inclinada é a geratriz. Já 108 cm² seria a área da base, πr², que não entra porque o chapéu é aberto embaixo. Ler se o sólido tem base fechada é o que separa as duas contas.",
  },
  {
    materia: "matematica",
    tema: "Geometria espacial: prismas, cones e esferas",
    dificuldade: "media",
    enunciado:
      "Um recipiente cúbico de 30 cm de aresta é preenchido com água até exatamente metade de sua altura. O volume de água contido nesse recipiente corresponde a:",
    opcoes: ["27 L", "2,7 L", "13,5 L", "1,35 L", "6,75 L"],
    correta: 2,
    explicacao:
      "O cubo cheio comportaria 30³ = 27 000 cm³; pela metade, são 13 500 cm³. Como 1 000 cm³ equivalem a 1 litro, o volume é 13,5 L. A alternativa 27 L é a capacidade total do cubo, sem considerar que ele está pela metade. E 6,75 L corresponderia a um quarto do cubo — cuidado para não dividir duas vezes.",
  },
];
