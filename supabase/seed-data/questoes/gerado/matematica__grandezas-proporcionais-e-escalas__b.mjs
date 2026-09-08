/* Grandezas proporcionais e escalas — parte B (25 questões).
   Notação científica, consumo de energia, grandezas derivadas, escalas
   cartográficas e proporcionalidade inversa. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Uma medida registrada em laboratório equivale a 0,000045 metro. Escrevendo esse valor em notação científica, obtém-se:",
    opcoes: [
      "4,5 × 10⁻⁴",
      "4,5 × 10⁻⁵",
      "45 × 10⁻⁶",
      "4,5 × 10⁵",
      "0,45 × 10⁻⁴",
    ],
    correta: 1,
    explicacao:
      "A vírgula precisa andar cinco casas para a direita até chegar a 4,5, o que corresponde ao expoente −5. A alternativa 45 × 10⁻⁶ tem o mesmo valor numérico, mas não está em notação científica, que exige um único algarismo diferente de zero antes da vírgula. Já 4,5 × 10⁵ representaria um número enorme, não um valor menor que 1.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um valor foi registrado em notação científica como 2,5 × 10³. Escrevendo esse número na forma decimal usual, obtém-se:",
    opcoes: ["25", "250", "25.000", "2.500", "0,0025"],
    correta: 3,
    explicacao:
      "O expoente 3 desloca a vírgula três casas para a direita: 2,5 vira 2 500. A alternativa 25 000 usaria expoente 4. Expoentes positivos indicam números grandes, e negativos indicam números pequenos — conferir esse sinal é o primeiro passo.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "dificil",
    enunciado:
      "Um chuveiro elétrico de 5.500 W permanece ligado durante 2 horas ao longo de um mês. O consumo de energia elétrica correspondente a esse uso é de:",
    opcoes: ["11 kWh", "1,1 kWh", "110 kWh", "5,5 kWh", "22 kWh"],
    correta: 0,
    explicacao:
      "A potência de 5 500 W equivale a 5,5 kW, e o consumo é potência vezes tempo: 5,5 · 2 = 11 kWh. A alternativa 110 kWh esquece de converter watts em quilowatts. O quilowatt-hora é justamente a unidade composta que a conta de luz cobra, combinando potência e tempo.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "dificil",
    enunciado:
      "As escalas Celsius e Fahrenheit medem a mesma grandeza física, mas não são diretamente proporcionais entre si. A razão para isso é que:",
    opcoes: [
      "uma delas mede calor e a outra mede temperatura.",
      "as duas escalas usam unidades de tamanho idêntico.",
      "a conversão entre elas envolve apenas uma multiplicação.",
      "os valores de uma são sempre o dobro dos da outra.",
      "o ponto zero das duas escalas não coincide.",
    ],
    correta: 4,
    explicacao:
      "Em grandezas diretamente proporcionais, o valor zero de uma corresponde ao zero da outra; aqui, 0 °C equivale a 32 °F. Por isso a conversão exige uma soma além da multiplicação: F = 1,8 · C + 32. Esse termo constante é exatamente o que quebra a proporcionalidade direta.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um intervalo de 45 minutos precisa ser expresso em horas para entrar em um cálculo de velocidade média. Esse intervalo corresponde a:",
    opcoes: ["0,45 h", "4,5 h", "0,75 h", "1,45 h", "0,45 min"],
    correta: 2,
    explicacao:
      "Dividindo por 60: 45/60 = 0,75 hora, ou três quartos de hora. A alternativa 0,45 h trata o tempo como se fosse decimal, erro muito comum: 45 minutos não são 0,45 hora, porque a base do sistema é 60 e não 100.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um automóvel percorre em média 14 km com cada litro de combustível. Para uma viagem de 350 km, mantido esse rendimento, serão necessários:",
    opcoes: ["14 litros", "20 litros", "35 litros", "30 litros", "25 litros"],
    correta: 4,
    explicacao:
      "Dividindo a distância pelo rendimento: 350/14 = 25 litros. A alternativa 35 litros usaria rendimento de 10 km/L. Como o rendimento é maior que 10, o consumo precisa ser menor que 35 litros — conferência que descarta metade das alternativas.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Em medidas de precisão, é frequente converter metros em milímetros. Um metro corresponde a:",
    opcoes: ["1.000 mm", "100 mm", "10 mm", "10.000 mm", "1 mm"],
    correta: 0,
    explicacao:
      "Da unidade metro até o milímetro são três degraus decrescentes na escala decimal, cada um valendo 10, o que dá o fator 1 000. A alternativa 100 mm corresponderia à conversão para centímetros. Reter a sequência metro, decímetro, centímetro, milímetro resolve todas as conversões de comprimento.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um desenho técnico foi elaborado na escala 1 para 1. Nessa condição, diz-se que o desenho está em:",
    opcoes: [
      "escala de redução, menor que o real.",
      "escala de ampliação, maior que o real.",
      "escala natural, no tamanho real do objeto.",
      "escala gráfica, sem proporção definida.",
      "escala numérica invertida.",
    ],
    correta: 2,
    explicacao:
      "Quando os dois termos da razão são iguais, cada medida do desenho corresponde à mesma medida no objeto: é a escala natural. Reduções têm numerador menor que o denominador, como 1:100, e ampliações têm numerador maior, como 5:1. A escala natural é usada em peças de tamanho médio, que cabem na folha sem ajuste.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um terreno retangular mede 20 m de frente por 30 m de fundo. A área desse terreno, expressa em hectares, corresponde a:",
    opcoes: ["0,6 ha", "0,06 ha", "6 ha", "60 ha", "600 ha"],
    correta: 1,
    explicacao:
      "A área é 20 · 30 = 600 m². Como 1 hectare tem 10 000 m², divide-se: 600/10 000 = 0,06 ha. A alternativa 0,6 ha erra por um fator de 10. Terrenos urbanos costumam ter frações pequenas de hectare, o que torna o resultado plausível.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma pessoa caminha a uma velocidade de 3,6 km/h. Convertendo essa velocidade para metros por segundo, obtém-se:",
    opcoes: ["3,6 m/s", "0,36 m/s", "10 m/s", "1 m/s", "36 m/s"],
    correta: 3,
    explicacao:
      "Dividindo por 3,6: 3,6/3,6 = 1 m/s. A alternativa 10 m/s multiplicaria em vez de dividir. Essa equivalência é uma referência útil de memorizar: 3,6 km/h correspondem exatamente a 1 m/s, e por isso o fator de conversão é justamente 3,6.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Uma peça representada em um desenho na escala 1 para 20 aparece com 8 cm de comprimento. O comprimento real dessa peça é de:",
    opcoes: ["0,4 m", "16 m", "1,6 m", "160 m", "0,16 m"],
    correta: 2,
    explicacao:
      "O comprimento real é 8 · 20 = 160 cm, o que equivale a 1,6 m. A alternativa 16 m esquece de converter centímetros em metros. A alternativa 0,4 m dividiria pela escala em vez de multiplicar, o que só valeria em escala de ampliação.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Entre as grandezas derivadas usadas em física e engenharia, a pressão é definida como a razão entre duas outras grandezas. A pressão resulta da combinação entre:",
    opcoes: [
      "massa e volume.",
      "comprimento e tempo.",
      "energia e tempo.",
      "massa e tempo.",
      "força e área.",
    ],
    correta: 4,
    explicacao:
      "Pressão é força dividida por área, o que se reflete na unidade pascal, equivalente a newton por metro quadrado. Massa por volume define densidade, e energia por tempo define potência. Cada grandeza derivada carrega na própria unidade a operação que a define.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um processo industrial teve duração registrada de 7.200 segundos. Convertendo esse intervalo para horas, obtém-se:",
    opcoes: ["1 hora", "1,2 hora", "72 horas", "2 horas", "120 horas"],
    correta: 3,
    explicacao:
      "Uma hora tem 3 600 segundos, então 7 200/3 600 = 2 horas. A alternativa 1,2 hora dividiria por 6 000. A conversão pode ser feita em duas etapas: 7 200 segundos são 120 minutos, e 120 minutos são 2 horas.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "dificil",
    enunciado:
      "Duas grandezas x e y são inversamente proporcionais. Sabendo que y vale 10 quando x vale 4, o valor de y quando x for igual a 8 será:",
    opcoes: ["5", "20", "2,5", "40", "8"],
    correta: 0,
    explicacao:
      "Em proporcionalidade inversa, o produto se conserva: 10 · 4 = 40, então quando x = 8 tem-se y = 40/8 = 5. A alternativa 20 dobraria y junto com x, o que caracterizaria proporcionalidade direta. Como x dobrou, y precisa cair pela metade.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um produto é vendido a R$ 24,00 o quilograma. O valor a ser pago por 500 g desse produto é de:",
    opcoes: ["R$ 24,00", "R$ 12,00", "R$ 48,00", "R$ 6,00", "R$ 5,00"],
    correta: 1,
    explicacao:
      "Como 500 g correspondem a meio quilograma, paga-se metade do preço: R$ 12,00. A alternativa R$ 48,00 dobraria o valor, tratando a conversão no sentido inverso. Converter a quantidade para a mesma unidade do preço é o passo que resolve a questão.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um dado populacional foi registrado como 2 × 10⁶ habitantes. Escrevendo esse número na forma decimal usual, obtém-se:",
    opcoes: ["200.000", "20.000", "2.000", "2.000.000", "20.000.000"],
    correta: 3,
    explicacao:
      "O expoente 6 indica seis casas decimais para a direita: 2 000 000, ou dois milhões. A alternativa 200 000 usaria expoente 5. Notação científica é especialmente útil em dados populacionais e astronômicos, em que a quantidade de zeros dificulta a leitura.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Uma lâmpada de 60 W permanece acesa durante 5 horas por dia. O consumo diário de energia elétrica dessa lâmpada é de:",
    opcoes: ["3 kWh", "0,3 kWh", "300 kWh", "30 kWh", "0,03 kWh"],
    correta: 1,
    explicacao:
      "A potência de 60 W equivale a 0,06 kW, e o consumo é 0,06 · 5 = 0,3 kWh por dia. A alternativa 300 kWh esquece a conversão de watts para quilowatts. Ao longo de 30 dias, esse consumo somaria 9 kWh — valor já compatível com a ordem de grandeza de uma conta de luz.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "dificil",
    enunciado:
      "Comparando um mapa na escala 1 para 1.000 com outro na escala 1 para 1.000.000, é correto afirmar que o primeiro mapa:",
    opcoes: [
      "abrange uma área maior do território.",
      "representa o terreno em tamanho menor.",
      "não permite medir distâncias reais.",
      "usa uma escala menor que a do segundo.",
      "mostra mais detalhes de uma área menor.",
    ],
    correta: 4,
    explicacao:
      "Quanto menor o denominador, maior a escala e maior o nível de detalhe, mas menor a área que cabe na folha. Um mapa 1:1 000 serve para uma quadra; um mapa 1:1 000 000 abrange um país inteiro, com muito menos detalhe. A nomenclatura confunde: escala grande significa denominador pequeno.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "O litro de gasolina custa R$ 6,00 em determinado posto. O valor a ser pago para abastecer completamente um tanque de 40 litros é de:",
    opcoes: ["R$ 46,00", "R$ 200,00", "R$ 240,00", "R$ 24,00", "R$ 6,40"],
    correta: 2,
    explicacao:
      "O total é 40 · 6 = R$ 240,00. A alternativa R$ 46,00 soma preço e volume em vez de multiplicar. Trata-se de proporcionalidade direta simples: dobrar o volume abastecido dobra o valor pago.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Uma distância registrada como 0,004 km precisa ser expressa em metros. Essa distância corresponde a:",
    opcoes: ["4 m", "40 m", "0,4 m", "400 m", "0,04 m"],
    correta: 0,
    explicacao:
      "Multiplicando por 1 000: 0,004 · 1 000 = 4 m. A alternativa 40 m desloca a vírgula uma casa a mais. Converter de unidade maior para menor aumenta o número, mas aqui o valor de partida é muito pequeno, e por isso o resultado ainda é modesto.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Um reservatório em forma de paralelepípedo mede 4 m de comprimento, 3 m de largura e 2 m de altura. A capacidade desse reservatório, expressa em litros, é de:",
    opcoes: ["24.000 L", "2.400 L", "240 L", "24 L", "240.000 L"],
    correta: 0,
    explicacao:
      "O volume é 4 · 3 · 2 = 24 m³, e como cada metro cúbico corresponde a 1 000 litros, a capacidade é 24 000 L. A alternativa 24 L confunde metros cúbicos com litros diretamente. A conversão m³ para litro é o passo decisivo em qualquer problema de reservatório.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Em uma linha do tempo, adota-se a escala em que cada centímetro no papel representa 5 anos. Um intervalo desenhado com 6 cm nessa linha corresponde a:",
    opcoes: ["11 anos", "25 anos", "30 anos", "1,2 ano", "300 anos"],
    correta: 2,
    explicacao:
      "Multiplicando: 6 · 5 = 30 anos. A alternativa 11 anos soma os dois números em vez de multiplicar, e 1,2 ano divide. Escalas não se limitam a mapas: qualquer representação proporcional, inclusive de tempo, segue a mesma lógica de multiplicação.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Quando duas grandezas são diretamente proporcionais, o quociente entre os valores correspondentes permanece sempre igual. Esse quociente constante recebe o nome de:",
    opcoes: [
      "razão inversa das grandezas.",
      "constante de proporcionalidade.",
      "amplitude da variação.",
      "coeficiente de dispersão.",
      "média geométrica dos valores.",
    ],
    correta: 1,
    explicacao:
      "Na relação y = k · x, o valor k é a constante de proporcionalidade, e representa quanto de y corresponde a cada unidade de x. Em problemas de preço, essa constante é o preço unitário; em movimento uniforme, é a velocidade. Identificá-la resolve todo o problema de uma vez.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "facil",
    enunciado:
      "Um trem percorreu 250 km em 2 horas e 30 minutos de viagem contínua. A velocidade média desenvolvida nesse trajeto foi de:",
    opcoes: ["125 km/h", "62,5 km/h", "250 km/h", "100 km/h", "50 km/h"],
    correta: 3,
    explicacao:
      "Convertendo o tempo para 2,5 horas, a velocidade é 250/2,5 = 100 km/h. A alternativa 125 km/h usaria apenas 2 horas, ignorando os 30 minutos adicionais. Confundir 2 h 30 min com 2,30 h é o erro mais frequente: meia hora vale 0,5, não 0,30.",
  },
  {
    materia: "matematica",
    tema: "Grandezas proporcionais e escalas",
    dificuldade: "media",
    enunciado:
      "Em um mapa rodoviário na escala 1 para 250.000, dois pontos aparecem separados por 6 cm. A distância real entre esses pontos é de:",
    opcoes: ["1,5 km", "150 km", "0,15 km", "1.500 km", "15 km"],
    correta: 4,
    explicacao:
      "A distância real é 6 · 250 000 = 1 500 000 cm, que equivalem a 15 000 m, ou 15 km. A alternativa 1,5 km erra por um fator de 10 na conversão. Fazer a conversão em duas etapas — de centímetros para metros e depois para quilômetros — reduz o risco desse deslize.",
  },
];
