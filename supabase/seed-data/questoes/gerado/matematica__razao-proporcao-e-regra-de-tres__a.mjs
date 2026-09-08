/* Razão, proporção e regra de três — parte A (25 questões).
   Razão entre grandezas, proporções, regra de três simples direta e inversa,
   regra de três composta e escalas. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Em uma turma, há 15 meninas e 25 meninos. A razão entre o número de meninas e o número de meninos, escrita na forma de fração irredutível, é:",
    opcoes: ["5/3", "3/5", "15/25, que não admite simplificação", "2/5", "1/2"],
    correta: 1,
    explicacao:
      "A razão é 15/25, e dividindo os dois termos por 5 obtém-se 3/5. A alternativa 5/3 inverte a ordem: como o enunciado pede meninas para meninos, o número de meninas vem no numerador. A fração 15/25 de fato admite simplificação, já que 5 divide ambos os termos.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Considere a proporção em que a razão 3 para 4 é igual à razão x para 20. Aplicando a propriedade fundamental das proporções, o valor de x é:",
    opcoes: ["12", "16", "18", "15", "20"],
    correta: 3,
    explicacao:
      "Cruzando os termos: 3 · 20 = 4 · x, ou seja, 60 = 4x e x = 15. A alternativa 16 apareceria em quem soma 4 unidades a 12 sem justificativa. Uma conferência rápida: 20 é cinco vezes 4, então x precisa ser cinco vezes 3.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Se 5 kg de arroz custam R$ 30,00 e o preço é proporcional à quantidade, o valor a ser pago por 8 kg do mesmo arroz é de:",
    opcoes: ["R$ 48,00", "R$ 40,00", "R$ 45,00", "R$ 50,00", "R$ 60,00"],
    correta: 0,
    explicacao:
      "As grandezas são diretamente proporcionais: 5 kg custam 30, então 1 kg custa 6 e 8 kg custam 48 reais. Montando a proporção, 5/30 = 8/x leva a x = 48. A alternativa R$ 60,00 corresponderia a 10 kg. Comprar mais deve custar mais, o que já elimina qualquer valor abaixo de R$ 30,00.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma obra é concluída por 4 operários em 12 dias. Mantendo o mesmo ritmo de trabalho, o número de dias que 6 operários levariam para concluir a mesma obra é:",
    opcoes: ["18", "12", "10", "6", "8"],
    correta: 4,
    explicacao:
      "Mais operários significam menos dias: as grandezas são inversamente proporcionais, então multiplica-se 4 · 12 = 48 dias-operário, e 48/6 = 8 dias. A alternativa 18 aplicaria proporção direta, o que levaria ao absurdo de mais gente demorar mais. Em relações inversas, o produto das grandezas é que se mantém constante.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "A propriedade fundamental das proporções permite resolver rapidamente igualdades entre duas razões. Segundo essa propriedade, em toda proporção:",
    opcoes: [
      "a soma dos meios é igual à soma dos extremos.",
      "a diferença dos meios é igual à diferença dos extremos.",
      "o produto dos meios é igual ao produto dos extremos.",
      "o quociente dos meios é igual à soma dos extremos.",
      "os quatro termos são necessariamente iguais.",
    ],
    correta: 2,
    explicacao:
      "Na proporção a/b = c/d, os meios são b e c e os extremos são a e d; a propriedade garante que a · d = b · c. É essa igualdade que autoriza a chamada multiplicação cruzada. Somas e diferenças não se conservam: 1/2 = 2/4, mas 1 + 4 é diferente de 2 + 2 apenas por coincidência numérica em alguns casos.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um automóvel percorre 240 km consumindo 20 litros de combustível. Mantendo o mesmo consumo médio, a distância que ele percorrerá com 35 litros é de:",
    opcoes: ["300 km", "350 km", "400 km", "480 km", "420 km"],
    correta: 4,
    explicacao:
      "O rendimento é 240/20 = 12 km por litro, então 35 litros rendem 12 · 35 = 420 km. A alternativa 480 km corresponderia a 40 litros. Calcular primeiro o consumo por unidade — a chamada redução à unidade — costuma ser mais seguro que armar a proporção direto.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma torneira, sozinha, enche um tanque em 6 horas. Abrindo duas torneiras idênticas a essa ao mesmo tempo, o tanque será cheio em:",
    opcoes: ["3 horas", "12 horas", "6 horas", "2 horas", "4 horas"],
    correta: 0,
    explicacao:
      "Duas torneiras despejam água ao dobro da vazão, então o tempo cai pela metade: 3 horas. Torneiras e tempo são grandezas inversamente proporcionais. A alternativa 12 horas inverte o raciocínio, e 6 horas ignoraria a segunda torneira.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Um mapa foi desenhado na escala de 1 para 50.000, o que significa que cada unidade no mapa corresponde a 50.000 unidades no terreno. Uma distância de 3 cm nesse mapa corresponde, no terreno, a:",
    opcoes: ["150 m", "15 km", "1,5 km", "500 m", "50 km"],
    correta: 2,
    explicacao:
      "A distância real é 3 · 50 000 = 150 000 cm. Convertendo, 150 000 cm são 1 500 m, ou 1,5 km. A alternativa 15 km erra a conversão em um fator de 10 — o passo crítico é lembrar que 1 km tem 100 000 cm. Escalas sempre exigem atenção redobrada com as unidades.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "A quantia de R$ 120,00 deve ser dividida entre duas pessoas em partes diretamente proporcionais a 2 e 3. A maior das duas partes é de:",
    opcoes: ["R$ 60,00", "R$ 72,00", "R$ 80,00", "R$ 48,00", "R$ 90,00"],
    correta: 1,
    explicacao:
      "As partes valem 2k e 3k, e sua soma é 5k = 120, logo k = 24. A maior parte é 3 · 24 = R$ 72,00 e a menor, R$ 48,00. A alternativa R$ 48,00 é a parte menor. Conferir a soma é sempre indispensável: 72 + 48 = 120.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um ônibus percorreu 180 km em 3 horas de viagem, sem paradas. A velocidade média desse ônibus no percurso foi de:",
    opcoes: ["50 km/h", "55 km/h", "45 km/h", "60 km/h", "90 km/h"],
    correta: 3,
    explicacao:
      "A velocidade média é a razão entre distância e tempo: 180/3 = 60 km/h. A alternativa 90 km/h dividiria por 2. Velocidade é o exemplo mais direto de razão entre duas grandezas de espécies diferentes, e por isso sua unidade combina as duas: quilômetro por hora.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Um município tem 500.000 habitantes distribuídos por uma área de 2.000 km². A densidade demográfica desse município é de:",
    opcoes: [
      "250 habitantes por km²",
      "400 habitantes por km²",
      "200 habitantes por km²",
      "1.000 habitantes por km²",
      "25 habitantes por km²",
    ],
    correta: 0,
    explicacao:
      "A densidade demográfica é a razão entre população e área: 500 000/2 000 = 250 habitantes por km². A alternativa 400 inverteria alguma etapa da divisão. Essa é outra razão entre grandezas diferentes, e o valor obtido é uma média: não significa que cada quilômetro quadrado abrigue exatamente 250 pessoas.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Três máquinas trabalhando durante 4 dias produzem 600 peças. Mantendo o mesmo ritmo, a quantidade de peças que 5 máquinas produziriam em 6 dias é de:",
    opcoes: ["1.000 peças", "1.200 peças", "1.500 peças", "900 peças", "2.000 peças"],
    correta: 2,
    explicacao:
      "As duas grandezas são diretamente proporcionais à produção. Uma máquina em um dia produz 600/(3 · 4) = 50 peças, então 5 máquinas em 6 dias produzem 50 · 30 = 1 500 peças. A alternativa 1 200 consideraria apenas o aumento de dias, esquecendo as máquinas a mais. Em regra de três composta, cada grandeza precisa ser analisada separadamente.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Duas grandezas são inversamente proporcionais quando o aumento de uma provoca a diminuição da outra na mesma proporção. Nesse tipo de relação, mantém-se constante:",
    opcoes: [
      "a soma entre as duas grandezas.",
      "a diferença entre as duas grandezas.",
      "o quociente entre as duas grandezas.",
      "a média aritmética das duas grandezas.",
      "o produto entre as duas grandezas.",
    ],
    correta: 4,
    explicacao:
      "Se uma grandeza dobra e a outra cai pela metade, o produto permanece o mesmo — é essa constância que define a proporcionalidade inversa. Em grandezas diretamente proporcionais, o que se mantém constante é o quociente. Reconhecer qual das duas operações se conserva é o que orienta a montagem da regra de três.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Uma receita de bolo para 4 pessoas leva 300 g de farinha de trigo. Mantendo as mesmas proporções, a quantidade de farinha necessária para servir 10 pessoas é de:",
    opcoes: ["600 g", "500 g", "900 g", "750 g", "1.200 g"],
    correta: 3,
    explicacao:
      "Cada pessoa consome 300/4 = 75 g, então 10 pessoas exigem 750 g. Montando a proporção, 4/300 = 10/x conduz ao mesmo resultado. A alternativa 600 g corresponderia a 8 pessoas. Receitas são o exemplo cotidiano mais direto de proporcionalidade direta.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Em uma proporção contínua, o termo do meio se repete, de modo que a primeira razão é igual à segunda. Sendo 4 o primeiro termo e 9 o último, o valor do termo médio dessa proporção é:",
    opcoes: ["5", "6", "6,5", "13", "36"],
    correta: 1,
    explicacao:
      "Se 4/b = b/9, então b² = 36 e b = 6. A alternativa 6,5 é a média aritmética entre 4 e 9, que não resolve a proporção. O valor 6 é a chamada média geométrica de 4 e 9 — em proporções contínuas é sempre ela, e não a média aritmética, que aparece.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "A planta de uma casa foi desenhada na escala 1 para 200. Um cômodo que aparece com 5 cm de comprimento na planta tem, na construção real, comprimento de:",
    opcoes: ["1 m", "2 m", "5 m", "10 m", "20 m"],
    correta: 3,
    explicacao:
      "O comprimento real é 5 · 200 = 1 000 cm, ou seja, 10 m. A alternativa 20 m dobraria o resultado. Escalas de plantas costumam ser bem menores que as de mapas justamente porque representam objetos de poucos metros, e não territórios.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Oito pintores, trabalhando no mesmo ritmo, pintam uma casa em 6 dias. Reduzindo a equipe para 4 pintores, o número de dias necessários para pintar a mesma casa passa a ser:",
    opcoes: ["3", "12", "8", "24", "10"],
    correta: 1,
    explicacao:
      "Metade dos pintores leva o dobro do tempo, porque as grandezas são inversamente proporcionais: 8 · 6 = 48 dias-pintor, e 48/4 = 12 dias. A alternativa 3 aplicaria proporção direta, sugerindo que menos gente trabalha mais rápido. O total de dias-pintor é a quantidade de trabalho, que não muda.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Para comparar duas grandezas de mesma espécie por meio de uma razão, é necessário que estejam na mesma unidade. A razão entre 2 horas e 30 minutos é igual a:",
    opcoes: ["1/4", "2", "4", "60", "1/2"],
    correta: 2,
    explicacao:
      "Convertendo tudo para minutos: 120/30 = 4. A alternativa 1/4 inverte a ordem dos termos, e responder 2 seria comparar 2 horas com 1 hora sem fazer a conversão. Razões entre grandezas de mesma espécie não têm unidade — o resultado 4 significa que 2 horas equivalem a quatro vezes 30 minutos.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um automóvel consome 1 litro de combustível a cada 12 km percorridos. Para uma viagem de 300 km, mantendo o mesmo consumo, serão necessários:",
    opcoes: ["25 litros", "30 litros", "20 litros", "36 litros", "12 litros"],
    correta: 0,
    explicacao:
      "Basta dividir a distância pelo rendimento: 300/12 = 25 litros. A alternativa 36 litros multiplicaria em vez de dividir. Uma conferência de ordem de grandeza: com 20 litros o carro faria 240 km, insuficiente, e com 30 litros faria 360 km, mais do que o necessário.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Duas grandezas são diretamente proporcionais quando o aumento de uma provoca aumento da outra na mesma razão. Nesse tipo de relação, mantém-se constante:",
    opcoes: [
      "o produto entre as duas grandezas.",
      "a soma entre as duas grandezas.",
      "a diferença entre as duas grandezas.",
      "o valor da maior das duas grandezas.",
      "o quociente entre as duas grandezas.",
    ],
    correta: 4,
    explicacao:
      "Se ao dobrar uma grandeza a outra também dobra, o quociente entre elas não muda: essa constante é chamada de constante de proporcionalidade. Em relações inversas, o que se conserva é o produto. Preço por quilo e velocidade constante são exemplos cotidianos de quociente constante.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Sabendo que 3 cadernos iguais custam R$ 21,00, o valor a ser pago por 7 cadernos do mesmo tipo é de:",
    opcoes: ["R$ 35,00", "R$ 42,00", "R$ 49,00", "R$ 56,00", "R$ 63,00"],
    correta: 2,
    explicacao:
      "Cada caderno custa 21/3 = R$ 7,00, então 7 cadernos custam R$ 49,00. A alternativa R$ 42,00 corresponde a 6 cadernos. Reduzir ao valor unitário antes de multiplicar é o caminho mais curto e o menos sujeito a erro.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Uma tarefa é realizada por 10 pessoas em 9 dias. Para que a mesma tarefa seja concluída em apenas 6 dias, mantendo o ritmo individual de trabalho, o número de pessoas necessário é:",
    opcoes: ["12", "20", "5", "18", "15"],
    correta: 4,
    explicacao:
      "O trabalho total é 10 · 9 = 90 dias-pessoa. Para concluí-lo em 6 dias, são necessárias 90/6 = 15 pessoas. A alternativa 20 exageraria o acréscimo. Como o prazo caiu para dois terços, a equipe precisa crescer na razão inversa, ou seja, na proporção de 3 para 2.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma maquete foi construída na escala 1 para 100. Um prédio que tem 12 m de altura real será representado nessa maquete com altura de:",
    opcoes: ["1,2 cm", "120 cm", "1,2 m", "12 cm", "0,12 cm"],
    correta: 3,
    explicacao:
      "A altura real de 12 m equivale a 1 200 cm; dividindo por 100, obtém-se 12 cm na maquete. A alternativa 1,2 cm divide por 1 000. Converter tudo para a mesma unidade antes de aplicar a escala é o que evita esse tipo de deslize por fator de 10.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma bebida é preparada misturando água e suco concentrado na proporção de 3 partes de água para 1 parte de suco. Em 8 litros da bebida pronta, a quantidade de água é de:",
    opcoes: ["4 litros", "6 litros", "2 litros", "3 litros", "5 litros"],
    correta: 1,
    explicacao:
      "A mistura se divide em 3 + 1 = 4 partes iguais, cada uma com 8/4 = 2 litros. A água ocupa 3 partes, ou seja, 6 litros, e o suco ocupa 2 litros. A alternativa 4 litros trataria a proporção como se fosse meio a meio. O total de partes é sempre o denominador da divisão.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Comparando dois intervalos de tempo por meio de uma razão, o resultado da razão entre 45 minutos e 1 hora, expresso na forma de fração irredutível, é:",
    opcoes: ["3/4", "45/1", "4/3", "1/45", "2/3"],
    correta: 0,
    explicacao:
      "Convertendo 1 hora para 60 minutos, a razão é 45/60, que simplificada por 15 resulta em 3/4. A alternativa 4/3 inverte os termos. Como 45 minutos é menos que uma hora, a razão precisa ser menor que 1 — verificação que descarta 4/3 e 45/1 imediatamente.",
  },
];
