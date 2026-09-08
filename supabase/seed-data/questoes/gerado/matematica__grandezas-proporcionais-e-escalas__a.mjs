/* Grandezas proporcionais e escalas — parte A (25 questões).
   Conversão de unidades de comprimento, massa, área, volume e tempo, escalas
   de mapas e maquetes, grandezas compostas. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um trecho de estrada tem 3,5 km de extensão. Convertendo essa medida para metros, obtém-se:",
    opcoes: ["35 m", "350 m", "3.500 m", "35.000 m", "0,35 m"],
    correta: 2,
    explicacao:
      "Cada quilômetro equivale a 1 000 metros, então 3,5 · 1 000 = 3 500 m. A alternativa 350 m desloca a vírgula apenas duas casas. Na escala de comprimento, cada degrau entre unidades vizinhas vale 10, e de quilômetro para metro são três degraus, o que dá o fator 1 000.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma embalagem de alimento traz a indicação de que seu conteúdo tem massa de 2.500 g. Essa massa, expressa em quilogramas, corresponde a:",
    opcoes: ["2,5 kg", "25 kg", "250 kg", "0,25 kg", "0,025 kg"],
    correta: 0,
    explicacao:
      "Como 1 kg equivale a 1 000 g, basta dividir: 2 500/1 000 = 2,5 kg. A alternativa 25 kg divide por 100 em vez de 1 000. Converter de unidade menor para maior sempre reduz o número, o que já elimina qualquer resultado maior que 2 500.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Ao converter unidades de área, o fator de conversão difere do usado para comprimento. Um metro quadrado corresponde a:",
    opcoes: ["100 cm²", "1.000 cm²", "10 cm²", "1.000.000 cm²", "10.000 cm²"],
    correta: 4,
    explicacao:
      "Um metro tem 100 cm, e a área envolve duas dimensões: 100 · 100 = 10 000 cm². A alternativa 100 cm² aplica o fator linear sem elevá-lo ao quadrado — é o erro mais comum em conversão de área. Para volume, o mesmo raciocínio leva ao cubo: 1 m³ tem 1 000 000 cm³.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma caixa d'água tem capacidade de 1 metro cúbico. Essa capacidade, expressa em litros, corresponde a:",
    opcoes: ["100 litros", "1.000 litros", "10 litros", "10.000 litros", "1 litro"],
    correta: 1,
    explicacao:
      "Por definição, 1 m³ equivale a 1 000 litros, porque 1 litro é o mesmo que 1 dm³ e há 1 000 dm³ em um metro cúbico. A alternativa 100 litros erra em um fator de 10. Essa equivalência é a mais cobrada em problemas de reservatórios e piscinas.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um veículo trafega a 72 km/h em uma rodovia. Convertendo essa velocidade para metros por segundo, obtém-se:",
    opcoes: ["7,2 m/s", "72 m/s", "2 m/s", "20 m/s", "36 m/s"],
    correta: 3,
    explicacao:
      "Para converter de km/h para m/s divide-se por 3,6: 72/3,6 = 20 m/s. A alternativa 7,2 m/s divide por 10. O fator 3,6 vem da razão entre 1 000 metros e 3 600 segundos — vale memorizá-lo, porque aparece em quase toda questão que mistura as duas unidades.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um bloco maciço tem massa de 300 g e ocupa um volume de 150 cm³. A densidade desse material é de:",
    opcoes: ["0,5 g/cm³", "45.000 g/cm³", "150 g/cm³", "2 g/cm³", "300 g/cm³"],
    correta: 3,
    explicacao:
      "A densidade é a razão entre massa e volume: 300/150 = 2 g/cm³. A alternativa 0,5 inverte a razão, calculando volume por massa. Como o resultado é maior que 1 g/cm³, o material é mais denso que a água e afundaria nela — uma checagem física que confirma a conta.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "O projeto de um galpão foi desenhado na escala 1 para 500. Uma parede representada por um traço de 4 cm no desenho terá, na construção real, comprimento de:",
    opcoes: ["2 m", "20 m", "200 m", "5 m", "50 m"],
    correta: 1,
    explicacao:
      "O comprimento real é 4 · 500 = 2 000 cm, ou seja, 20 m. A alternativa 200 m esquece de converter centímetros para metros. Em escalas de projeto, o resultado sai naturalmente em centímetros e quase sempre precisa dessa conversão final.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma prova teve duração de 1 hora e 15 minutos. Expressando essa duração inteiramente em minutos, obtém-se:",
    opcoes: ["75 minutos", "115 minutos", "90 minutos", "65 minutos", "135 minutos"],
    correta: 0,
    explicacao:
      "Uma hora corresponde a 60 minutos, então 60 + 15 = 75 minutos. A alternativa 115 trata o '1' como se fosse 100 minutos, erro típico de quem converte tempo como se fosse decimal. O sistema de tempo é sexagesimal: a base é 60, não 100.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Uma torneira despeja 600 litros de água em 5 minutos, mantendo fluxo constante. A vazão dessa torneira é de:",
    opcoes: ["3.000 L/min", "60 L/min", "12 L/min", "1.200 L/min", "120 L/min"],
    correta: 4,
    explicacao:
      "A vazão é a razão entre volume e tempo: 600/5 = 120 litros por minuto. A alternativa 3 000 L/min multiplicaria em vez de dividir. Vazão é mais uma grandeza composta, e sua unidade sempre combina uma medida de volume com uma de tempo.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Duas grandezas x e y são diretamente proporcionais, de modo que y = k · x. Sabendo que y vale 12 quando x vale 3, a constante de proporcionalidade k é igual a:",
    opcoes: ["36", "9", "4", "15", "0,25"],
    correta: 2,
    explicacao:
      "Isolando a constante: k = y/x = 12/3 = 4. A alternativa 36 multiplica os dois valores, e 0,25 inverte a razão. Uma vez determinada, essa constante permite calcular qualquer par: para x = 10, por exemplo, y seria 40.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma fita métrica registra o comprimento de 5.000 cm. Convertendo essa medida para metros, obtém-se:",
    opcoes: ["5 m", "50 m", "500 m", "0,5 m", "5.000 m"],
    correta: 1,
    explicacao:
      "Como 1 m tem 100 cm, divide-se por 100: 5 000/100 = 50 m. A alternativa 5 m divide por 1 000, fator que serve para milímetros. Cada conversão exige identificar quantos degraus separam as duas unidades na escala decimal.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma carga transportada por um caminhão tem massa de 1 tonelada. Essa massa, expressa em quilogramas, corresponde a:",
    opcoes: ["100 kg", "10 kg", "10.000 kg", "1 kg", "1.000 kg"],
    correta: 4,
    explicacao:
      "Uma tonelada equivale a 1 000 kg. A alternativa 100 kg confundiria com o quintal métrico, e 10 000 kg corresponderia a 10 toneladas. Essa é a unidade padrão para cargas, safras e capacidade de veículos.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Em medidas agrárias, é comum expressar a área de terrenos em hectares. Um hectare corresponde a:",
    opcoes: ["100 m²", "1.000 m²", "10.000 m²", "100.000 m²", "1.000.000 m²"],
    correta: 2,
    explicacao:
      "Um hectare é a área de um quadrado de 100 m de lado: 100 · 100 = 10 000 m². A alternativa 1 000 000 m² corresponde a 1 km², que equivale a 100 hectares. Essa relação é útil para interpretar dados de desmatamento e de produção agrícola.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Uma maquete foi construída na escala 1 para 50. Um prédio que tem 30 m de altura real será representado nessa maquete com altura de:",
    opcoes: ["1,5 cm", "6 cm", "15 cm", "60 cm", "150 cm"],
    correta: 3,
    explicacao:
      "A altura real de 30 m equivale a 3 000 cm; dividindo por 50, obtêm-se 60 cm. A alternativa 6 cm dividiria por 500. Converter primeiro para a mesma unidade da resposta e só depois aplicar a escala é o procedimento mais seguro.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um frasco de medicamento contém 250 mL de solução. Esse volume, expresso em litros, corresponde a:",
    opcoes: ["0,25 L", "2,5 L", "25 L", "0,025 L", "250 L"],
    correta: 0,
    explicacao:
      "Como 1 litro tem 1 000 mL, divide-se por 1 000: 250/1 000 = 0,25 L. A alternativa 2,5 L divide por 100. Um quarto de litro é uma referência prática útil, equivalente a um copo pequeno.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Uma torneira com vazão constante de 15 litros por minuto é usada para encher um tanque com capacidade de 300 litros. O tempo necessário para encher completamente esse tanque é de:",
    opcoes: ["20 minutos", "15 minutos", "30 minutos", "45 minutos", "10 minutos"],
    correta: 0,
    explicacao:
      "Dividindo o volume pela vazão: 300/15 = 20 minutos. A alternativa 45 multiplicaria valores sem sentido físico. Volume, vazão e tempo formam uma relação em que o tempo é inversamente proporcional à vazão — dobrar a vazão reduz o tempo à metade.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Algumas grandezas são chamadas de compostas ou derivadas porque resultam da combinação de duas ou mais grandezas fundamentais. A velocidade é uma grandeza composta formada pela combinação de:",
    opcoes: [
      "massa e volume.",
      "massa e tempo.",
      "área e comprimento.",
      "comprimento e tempo.",
      "temperatura e tempo.",
    ],
    correta: 3,
    explicacao:
      "Velocidade é a razão entre uma distância percorrida e o intervalo de tempo gasto, o que se reflete na unidade: metro por segundo. Massa e volume combinam-se na densidade, e não na velocidade. Ler a unidade de uma grandeza costuma revelar de imediato quais grandezas a compõem.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um evento teve duração total de 3 dias completos. Expressando essa duração em horas, obtém-se:",
    opcoes: ["36 horas", "72 horas", "24 horas", "96 horas", "48 horas"],
    correta: 1,
    explicacao:
      "Cada dia tem 24 horas, então 3 · 24 = 72 horas. A alternativa 48 horas corresponderia a 2 dias, e 96 horas a 4 dias. Conversões de tempo pedem atenção porque os fatores variam: 60 entre segundos e minutos, 24 entre horas e dias, 7 entre dias e semanas.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um desenho técnico de uma peça pequena foi elaborado na escala 2 para 1. Nessa escala, o desenho apresenta a peça:",
    opcoes: [
      "com metade do tamanho real.",
      "com um quarto do tamanho real.",
      "com o dobro do tamanho real.",
      "exatamente no tamanho real.",
      "com o triplo do tamanho real.",
    ],
    correta: 2,
    explicacao:
      "Na escala 2:1, cada unidade do desenho corresponde a meia unidade real, ou seja, o desenho é duas vezes maior que a peça — trata-se de uma ampliação. Escalas de ampliação são usadas em componentes eletrônicos e peças de relojoaria, em que o objeto real é pequeno demais para ser detalhado no tamanho original.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma receita culinária pede 0,75 kg de farinha. Convertendo essa quantidade para gramas, obtém-se:",
    opcoes: ["7,5 g", "75 g", "7.500 g", "0,075 g", "750 g"],
    correta: 4,
    explicacao:
      "Multiplicando por 1 000: 0,75 · 1 000 = 750 g. A alternativa 75 g desloca a vírgula apenas duas casas. Converter de unidade maior para menor sempre aumenta o número, o que descarta de imediato qualquer resultado abaixo de 0,75.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Em um mapa desenhado na escala 1 para 100.000, dois municípios aparecem separados por 12 cm. A distância real entre eles é de:",
    opcoes: ["1,2 km", "120 km", "1.200 km", "0,12 km", "12 km"],
    correta: 4,
    explicacao:
      "A distância real é 12 · 100 000 = 1 200 000 cm, que equivalem a 12 000 m, ou 12 km. A alternativa 120 km erra por um fator de 10 na conversão final. Nessa escala específica, cada centímetro do mapa vale exatamente 1 km — atalho prático que vale reconhecer.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Duas grandezas são diretamente proporcionais entre si. Se o valor de uma delas for triplicado, o valor da outra:",
    opcoes: [
      "permanece inalterado.",
      "cai para um terço do valor anterior.",
      "também fica multiplicado por três.",
      "fica multiplicado por nove.",
      "diminui em três unidades.",
    ],
    correta: 2,
    explicacao:
      "Em proporcionalidade direta, o quociente entre as grandezas é constante, então elas variam sempre no mesmo fator. Cair para um terço seria o comportamento de grandezas inversamente proporcionais. Multiplicar por nove só ocorreria se a relação fosse quadrática, o que é outro tipo de dependência.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Ao trabalhar com grandes extensões territoriais, é comum converter quilômetros quadrados em metros quadrados. Um quilômetro quadrado corresponde a:",
    opcoes: ["1.000 m²", "10.000 m²", "100.000 m²", "1.000.000 m²", "10.000.000 m²"],
    correta: 3,
    explicacao:
      "Um quilômetro tem 1 000 m, e a área envolve duas dimensões: 1 000 · 1 000 = 1 000 000 m². A alternativa 1 000 m² aplica o fator linear sem elevá-lo ao quadrado. Isso significa que 1 km² equivale a 100 hectares, relação usada em dados ambientais e agrícolas.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "A água tem densidade aproximada de 1 g/cm³. Considerando esse valor, a massa correspondente a 2 litros de água é de:",
    opcoes: ["2 kg", "20 kg", "200 g", "0,2 kg", "2 g"],
    correta: 0,
    explicacao:
      "Dois litros equivalem a 2 000 cm³, e com densidade de 1 g/cm³ a massa é 2 000 g, ou seja, 2 kg. A alternativa 200 g erra em um fator de 10. Essa coincidência entre litro e quilograma para a água é justamente o que torna a densidade de 1 g/cm³ tão prática como referência.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um automóvel mantém velocidade constante de 90 km/h em uma rodovia. Convertendo essa velocidade para metros por segundo, obtém-se:",
    opcoes: ["9 m/s", "25 m/s", "324 m/s", "2,5 m/s", "50 m/s"],
    correta: 1,
    explicacao:
      "Dividindo por 3,6: 90/3,6 = 25 m/s. A alternativa 324 m/s multiplica por 3,6, invertendo o sentido da conversão. Uma conferência de ordem de grandeza ajuda: velocidades de rodovia em m/s ficam tipicamente entre 20 e 35, então 324 é claramente absurdo.",
  },
];
