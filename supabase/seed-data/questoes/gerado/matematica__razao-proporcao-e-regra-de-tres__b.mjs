/* Razão, proporção e regra de três — parte B (25 questões).
   Divisão em partes proporcionais e inversamente proporcionais, produtividade,
   misturas, câmbio e escalas cartográficas. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Um trem percorre determinado trajeto em 6 horas quando mantém velocidade média de 80 km/h. Se aumentar a velocidade média para 120 km/h, o tempo gasto no mesmo trajeto passará a ser de:",
    opcoes: ["9 horas", "8 horas", "4 horas", "5 horas", "3 horas"],
    correta: 2,
    explicacao:
      "Velocidade e tempo são inversamente proporcionais para uma distância fixa: 80 · 6 = 480 km, e 480/120 = 4 horas. A alternativa 9 horas aplicaria proporção direta, sugerindo que ir mais rápido demora mais. O produto velocidade vezes tempo é a distância, que aqui não muda.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Em determinado dia, a cotação de câmbio indicava que 1 dólar equivalia a R$ 5,00. Nessa cotação, a quantia de 60 dólares corresponderia a:",
    opcoes: ["R$ 300,00", "R$ 12,00", "R$ 65,00", "R$ 250,00", "R$ 350,00"],
    correta: 0,
    explicacao:
      "Multiplicando 60 por 5, obtêm-se R$ 300,00. A alternativa R$ 12,00 dividiria em vez de multiplicar, e R$ 65,00 somaria os dois números. Câmbio é uma proporção direta simples: dobrar a quantia em dólares dobra a quantia em reais.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "A quantia de R$ 350,00 deve ser dividida entre duas pessoas em partes inversamente proporcionais a 2 e 5. A maior das duas partes é de:",
    opcoes: ["R$ 100,00", "R$ 175,00", "R$ 140,00", "R$ 210,00", "R$ 250,00"],
    correta: 4,
    explicacao:
      "Dividir em partes inversamente proporcionais a 2 e 5 equivale a dividir em partes diretamente proporcionais a 1/2 e 1/5. A soma dessas frações é 7/10, então as partes valem (1/2)/(7/10) e (1/5)/(7/10) do total, isto é, 5/7 e 2/7 de 350: R$ 250,00 e R$ 100,00. A maior parte cabe a quem tem o menor índice — essa inversão é o ponto da questão.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Seis impressoras iguais, funcionando simultaneamente durante 2 horas, imprimem 3.000 páginas. Mantendo o mesmo ritmo e o mesmo tempo de 2 horas, nove impressoras imprimiriam:",
    opcoes: ["3.000 páginas", "4.500 páginas", "6.000 páginas", "2.000 páginas", "9.000 páginas"],
    correta: 1,
    explicacao:
      "Número de impressoras e produção são diretamente proporcionais: cada impressora produz 3 000/6 = 500 páginas em 2 horas, e 9 impressoras produzem 4 500. A alternativa 6 000 corresponderia a 12 impressoras. Como o tempo não mudou, apenas uma grandeza precisou ser ajustada.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Um mapa foi elaborado na escala 1 para 25.000. Nesse mapa, uma estrada representada por um traço de 8 cm corresponde, no terreno, a uma distância de:",
    opcoes: ["200 m", "20 km", "800 m", "2 km", "25 km"],
    correta: 3,
    explicacao:
      "A distância real é 8 · 25 000 = 200 000 cm, que equivalem a 2 000 m, ou 2 km. A alternativa 200 m erra a conversão por um fator de 10, e 20 km por um fator de 10 no outro sentido. Lembrar que 1 km tem 100 000 cm é o que fecha a conta corretamente.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Doze operários constroem um muro em 15 dias, todos trabalhando no mesmo ritmo. Aumentando a equipe para 20 operários, o número de dias necessários para construir o mesmo muro será de:",
    opcoes: ["25", "12", "18", "9", "10"],
    correta: 3,
    explicacao:
      "O trabalho total é 12 · 15 = 180 dias-operário; dividido por 20 operários, dá 9 dias. A alternativa 25 aplicaria proporção direta. Como a equipe aumentou na razão de 12 para 20, o prazo diminui na razão inversa, de 20 para 12.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Uma máquina industrial produz 120 peças a cada 40 minutos de funcionamento contínuo. Mantendo esse ritmo, em 2 horas de funcionamento ela produzirá:",
    opcoes: ["240 peças", "360 peças", "300 peças", "480 peças", "180 peças"],
    correta: 1,
    explicacao:
      "Duas horas correspondem a 120 minutos, ou seja, três intervalos de 40 minutos: 3 · 120 = 360 peças. A alternativa 240 consideraria apenas 80 minutos. Converter as unidades de tempo antes de montar a proporção evita o erro mais comum nesse tipo de questão.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Uma quantidade de 4 kg de ração é suficiente para alimentar 10 cães durante um dia. Mantendo a mesma porção por animal, 6 kg dessa ração alimentariam, durante um dia:",
    opcoes: ["15 cães", "12 cães", "20 cães", "18 cães", "24 cães"],
    correta: 0,
    explicacao:
      "Cada cão consome 4/10 = 0,4 kg por dia, então 6 kg alimentam 6/0,4 = 15 cães. A proporção 4/10 = 6/x leva ao mesmo valor. A alternativa 12 cães corresponderia a 4,8 kg. Como a ração aumentou 50%, o número de cães também precisa aumentar 50%.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Um reservatório é completamente cheio em 8 horas quando três torneiras iguais permanecem abertas. Abrindo uma quarta torneira idêntica às demais, o tempo necessário para encher o mesmo reservatório passará a ser de:",
    opcoes: ["10 horas", "12 horas", "4 horas", "8 horas", "6 horas"],
    correta: 4,
    explicacao:
      "Torneiras e tempo são inversamente proporcionais: 3 · 8 = 24 torneiras-hora, e 24/4 = 6 horas. A alternativa 4 horas suporia que dobrar o tempo de trabalho corresponde a uma torneira a mais, o que exageraria o efeito. Passar de 3 para 4 torneiras aumenta a vazão em um terço, e o tempo cai na proporção inversa.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Dois quadrados têm lados medindo 2 cm e 6 cm, respectivamente. A razão entre a área do quadrado menor e a área do quadrado maior é igual a:",
    opcoes: ["1/3", "3", "1/9", "9", "1/6"],
    correta: 2,
    explicacao:
      "As áreas são 4 cm² e 36 cm², cuja razão é 4/36 = 1/9. A alternativa 1/3 é a razão entre os lados, e não entre as áreas. A regra geral vale para qualquer figura semelhante: se as medidas lineares estão na razão k, as áreas ficam na razão k² e os volumes, na razão k³.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Um combustível é preparado misturando álcool e gasolina na proporção de 1 para 4. Em 20 litros dessa mistura pronta, a quantidade de álcool presente é de:",
    opcoes: ["5 litros", "4 litros", "16 litros", "10 litros", "2 litros"],
    correta: 1,
    explicacao:
      "A mistura tem 1 + 4 = 5 partes iguais, cada uma com 20/5 = 4 litros. O álcool ocupa 1 parte, ou seja, 4 litros, e a gasolina ocupa 16 litros. A alternativa 5 litros trataria a razão como se fosse 1 para 3. O total de partes é sempre a soma dos dois números da proporção.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um relógio com defeito adianta 3 minutos a cada 2 horas de funcionamento. Ao final de 8 horas de funcionamento contínuo, esse relógio terá adiantado:",
    opcoes: ["6 minutos", "24 minutos", "8 minutos", "9 minutos", "12 minutos"],
    correta: 4,
    explicacao:
      "Oito horas correspondem a quatro intervalos de 2 horas, então o atraso acumulado é 4 · 3 = 12 minutos. A alternativa 24 minutos duplicaria indevidamente o resultado, e 6 minutos consideraria apenas 4 horas. Trata-se de proporção direta simples entre tempo e adiantamento.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Em uma padaria, 15 pães custam R$ 12,00. Mantendo o mesmo preço unitário, o valor a ser pago por 25 pães é de:",
    opcoes: ["R$ 15,00", "R$ 18,00", "R$ 20,00", "R$ 22,00", "R$ 25,00"],
    correta: 2,
    explicacao:
      "Cada pão custa 12/15 = R$ 0,80, então 25 pães custam 25 · 0,80 = R$ 20,00. A alternativa R$ 22,00 apareceria em quem soma 10 reais sem razão proporcional. A proporção 15/12 = 25/x também conduz ao mesmo valor.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Uma piscina retangular foi projetada de modo que a razão entre o comprimento e a largura seja de 2 para 1. Sabendo que o comprimento dessa piscina é de 12 m, sua largura é de:",
    opcoes: ["24 m", "3 m", "4 m", "6 m", "8 m"],
    correta: 3,
    explicacao:
      "Se o comprimento é o dobro da largura, a largura é metade do comprimento: 12/2 = 6 m. A alternativa 24 m inverteria a relação, tornando a largura maior que o comprimento. Conferir a razão final é imediato: 12/6 = 2, exatamente como o enunciado exige.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Em cartografia, uma escala é chamada de escala de redução quando a representação é menor que o objeto real. Isso ocorre sempre que, na razão que define a escala:",
    opcoes: [
      "o numerador é menor que o denominador.",
      "o numerador é maior que o denominador.",
      "os dois termos são iguais entre si.",
      "o denominador é igual a 1.",
      "os dois termos são números decimais.",
    ],
    correta: 0,
    explicacao:
      "Uma escala como 1:50 000 significa que 1 unidade no desenho corresponde a 50 000 no real, ou seja, o desenho é muito menor: é redução. Quando o numerador supera o denominador, como em 10:1, tem-se ampliação, usada em desenhos de peças minúsculas. Se os termos forem iguais, a escala é natural, com o desenho no tamanho real.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Uma herança de R$ 90.000,00 será dividida entre três herdeiros, em partes diretamente proporcionais a 1, 2 e 3. A maior das três partes corresponde a:",
    opcoes: [
      "R$ 45.000,00",
      "R$ 30.000,00",
      "R$ 15.000,00",
      "R$ 60.000,00",
      "R$ 22.500,00",
    ],
    correta: 0,
    explicacao:
      "As partes são k, 2k e 3k, somando 6k = 90 000, o que dá k = 15 000. A maior parte é 3 · 15 000 = R$ 45.000,00, e as outras duas ficam em R$ 15.000,00 e R$ 30.000,00. A alternativa R$ 30.000,00 é a parte intermediária. A conferência é somar: 15 + 30 + 45 = 90 mil.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Um ciclista percorreu 45 km em 1 hora e 30 minutos, mantendo ritmo constante. A velocidade média desenvolvida por esse ciclista foi de:",
    opcoes: ["45 km/h", "25 km/h", "20 km/h", "30 km/h", "35 km/h"],
    correta: 3,
    explicacao:
      "Convertendo o tempo para 1,5 hora, a velocidade é 45/1,5 = 30 km/h. A alternativa 45 km/h ignoraria o tempo extra dos 30 minutos. Um erro frequente é usar 1,30 no lugar de 1,5: trinta minutos são meia hora, e não 0,30 hora.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Sabe-se que 8 litros de tinta são suficientes para pintar 40 m² de parede. Mantendo o mesmo rendimento, a quantidade de tinta necessária para pintar 100 m² é de:",
    opcoes: ["16 litros", "20 litros", "25 litros", "32 litros", "12 litros"],
    correta: 1,
    explicacao:
      "O rendimento é 40/8 = 5 m² por litro, então 100 m² exigem 100/5 = 20 litros. A alternativa 25 litros usaria um rendimento de 4 m² por litro. Reduzir à unidade — quantos metros quadrados cada litro cobre — deixa a conta imediata.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Em uma obra, considera-se a relação entre o número de operários empregados e o tempo necessário para concluir determinado serviço. Essas duas grandezas são:",
    opcoes: [
      "diretamente proporcionais, pois ambas aumentam juntas.",
      "independentes uma da outra.",
      "inversamente proporcionais, pois mais operários reduzem o tempo.",
      "proporcionais apenas quando o serviço é pequeno.",
      "iguais em qualquer situação de obra.",
    ],
    correta: 2,
    explicacao:
      "Aumentar a equipe reduz o prazo na mesma proporção, mantendo constante o produto operários vezes tempo — a quantidade total de trabalho. Tratá-las como diretamente proporcionais levaria à conclusão absurda de que mais gente demora mais. Na prática, há limites físicos, mas o modelo matemático supõe ritmo individual constante.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Sabe-se que dois terços de um determinado número são iguais a 18. O valor desse número é:",
    opcoes: ["12", "24", "36", "30", "27"],
    correta: 4,
    explicacao:
      "De (2/3) · x = 18 vem x = 18 · 3/2 = 27. A alternativa 12 corresponde a dois terços de 18, resolvendo a operação no sentido inverso. Uma conferência: dois terços de 27 são 18, e o terço restante vale 9.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "facil",
    enunciado:
      "Uma cafeteria calcula que 5 kg de café em pó rendem 250 cafezinhos. Mantendo a mesma dosagem por xícara, 2 kg desse café renderiam:",
    opcoes: ["50 cafezinhos", "150 cafezinhos", "125 cafezinhos", "200 cafezinhos", "100 cafezinhos"],
    correta: 4,
    explicacao:
      "Cada quilo rende 250/5 = 50 cafezinhos, então 2 kg rendem 100. A alternativa 125 seria a metade do total original, correspondente a 2,5 kg. Reduzir ao rendimento por quilo torna a proporção direta imediata.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Um mapa-múndi foi impresso na escala 1 para 1.000.000. Nesse mapa, dois pontos separados por 4,5 cm correspondem, na superfície terrestre, a uma distância de:",
    opcoes: ["4,5 km", "450 km", "45 km", "4.500 km", "0,45 km"],
    correta: 2,
    explicacao:
      "A distância real é 4,5 · 1 000 000 = 4 500 000 cm, ou seja, 45 000 m, que equivalem a 45 km. A alternativa 450 km erra por um fator de 10 na conversão final. Nessas escalas muito grandes, converter em duas etapas — para metros e depois para quilômetros — reduz o risco de erro.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "media",
    enunciado:
      "Em uma fábrica, 6 máquinas operando durante 5 dias produzem 900 peças. Mantendo o mesmo ritmo e o mesmo período de 5 dias, a produção de 4 máquinas seria de:",
    opcoes: ["450 peças", "1.350 peças", "750 peças", "600 peças", "800 peças"],
    correta: 3,
    explicacao:
      "Máquinas e produção são diretamente proporcionais: cada máquina produz 900/6 = 150 peças em 5 dias, e 4 máquinas produzem 600. A alternativa 1 350 corresponderia a 9 máquinas. Como o tempo permaneceu igual, a única grandeza a ajustar é o número de máquinas.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Dois círculos têm raios medindo 3 cm e 5 cm, respectivamente. A razão entre o comprimento da circunferência menor e o comprimento da circunferência maior é igual a:",
    opcoes: ["3/5", "9/25", "5/3", "1/2", "15"],
    correta: 0,
    explicacao:
      "O comprimento da circunferência é 2πr, diretamente proporcional ao raio, então a razão entre os comprimentos é a mesma dos raios: 3/5. A alternativa 9/25 é a razão entre as áreas, que dependem de r². Comprimento é grandeza linear e área é grandeza quadrática — a diferença muda a resposta.",
  },
  {
    materia: "matematica",
    tema: "Razão, proporção e regra de três",
    dificuldade: "dificil",
    enunciado:
      "Na resolução de uma regra de três composta em que uma das grandezas é inversamente proporcional à grandeza procurada, o procedimento correto consiste em:",
    opcoes: [
      "somar todas as colunas antes de montar a proporção.",
      "inverter a razão correspondente a essa grandeza antes de multiplicar.",
      "ignorar essa grandeza, mantendo apenas as diretamente proporcionais.",
      "dividir o resultado final pelo número de grandezas envolvidas.",
      "converter todas as grandezas para a mesma unidade de medida.",
    ],
    correta: 1,
    explicacao:
      "Cada grandeza entra como uma razão, e as que são inversamente proporcionais entram com a razão de cabeça para baixo; depois todas as razões são multiplicadas. Ignorar uma grandeza distorceria o resultado, e converter unidades é um cuidado prévio necessário, mas não resolve a inversão. Analisar grandeza por grandeza é o que torna o método confiável.",
  },
];
