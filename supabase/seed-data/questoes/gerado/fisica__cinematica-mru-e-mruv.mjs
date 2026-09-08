/* Cinemática: MRU e MRUV (50 questões).
   Referencial, deslocamento, velocidade média, movimento uniforme, movimento
   uniformemente variado, equação de Torricelli e queda livre.
   Todos os dados numéricos estão no enunciado. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Um automóvel percorre 240 km em 3 horas de viagem, sem paradas. A velocidade escalar média desenvolvida nesse percurso é de:",
    opcoes: [
      "60 km/h",
      "70 km/h",
      "80 km/h",
      "90 km/h",
      "120 km/h",
    ],
    correta: 2,
    explicacao:
      "A velocidade média é a razão entre a variação de espaço e o intervalo de tempo: 240/3 = 80 km/h. Ela não informa a velocidade em cada instante — o carro pode ter variado bastante durante o trajeto. É uma média do percurso inteiro, não uma leitura do velocímetro.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Uma pessoa caminha 40 m para o leste e, em seguida, 30 m para o oeste, ao longo da mesma reta. A distância total percorrida e o módulo do deslocamento são, respectivamente:",
    opcoes: [
      "70 m e 70 m",
      "70 m e 10 m",
      "10 m e 70 m",
      "10 m e 10 m",
      "40 m e 30 m",
    ],
    correta: 1,
    explicacao:
      "A distância percorrida soma todos os trechos: 40 + 30 = 70 m. O deslocamento considera apenas a posição inicial e a final: 40 − 30 = 10 m para o leste. Distância é grandeza escalar e nunca diminui; deslocamento é vetorial e pode até ser nulo, se o corpo retornar ao ponto de partida.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Um trem move-se em linha reta com velocidade constante de 20 m/s. A distância percorrida por ele em 1 minuto de movimento é de:",
    opcoes: [
      "20 m",
      "120 m",
      "600 m",
      "1 200 m",
      "2 000 m",
    ],
    correta: 3,
    explicacao:
      "Um minuto equivale a 60 s, e no movimento uniforme a distância é o produto da velocidade pelo tempo: 20 · 60 = 1 200 m. O erro mais comum é usar 1 no lugar de 60, esquecendo a conversão de unidade. No MRU, a velocidade não varia e a aceleração é nula.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel em movimento retilíneo uniforme obedece à função horária S = 10 + 4t, com S em metros e t em segundos. A posição inicial e a velocidade do móvel são, respectivamente:",
    opcoes: [
      "4 m e 10 m/s",
      "10 m e 4 m/s",
      "10 m e 10 m/s",
      "4 m e 4 m/s",
      "14 m e 4 m/s",
    ],
    correta: 1,
    explicacao:
      "Comparando com S = S₀ + v·t, o termo independente é a posição inicial (10 m) e o coeficiente de t é a velocidade (4 m/s). Trocar os dois é o deslize mais frequente. Como a velocidade é positiva, o móvel se afasta no sentido positivo da trajetória.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Ainda considerando o móvel cuja função horária é S = 10 + 4t, com S em metros e t em segundos, sua posição no instante t = 5 s será de:",
    opcoes: [
      "20 m",
      "25 m",
      "30 m",
      "35 m",
      "40 m",
    ],
    correta: 2,
    explicacao:
      "Substituindo t = 5: S = 10 + 4 · 5 = 10 + 20 = 30 m. O móvel percorreu 20 m a partir da posição inicial de 10 m. Em movimento uniforme, espaços iguais são percorridos em tempos iguais.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Dois móveis partem do mesmo ponto no mesmo instante, em sentidos opostos, com velocidades constantes de 15 m/s e 25 m/s. A distância entre eles após 10 s será de:",
    opcoes: [
      "100 m",
      "150 m",
      "250 m",
      "400 m",
      "40 m",
    ],
    correta: 3,
    explicacao:
      "Em sentidos opostos, as distâncias percorridas se somam: 15 · 10 + 25 · 10 = 150 + 250 = 400 m. Equivalentemente, a velocidade de afastamento é 15 + 25 = 40 m/s, e em 10 s isso dá 400 m. Se seguissem no mesmo sentido, a separação seria dada pela diferença das velocidades.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um carro parte do repouso e atinge 30 m/s em 10 s, com aceleração constante. O valor dessa aceleração é de:",
    opcoes: [
      "0,3 m/s²",
      "3 m/s²",
      "10 m/s²",
      "30 m/s²",
      "300 m/s²",
    ],
    correta: 1,
    explicacao:
      "A aceleração é a variação de velocidade dividida pelo intervalo de tempo: (30 − 0)/10 = 3 m/s². Isso significa que a velocidade aumenta 3 m/s a cada segundo. Partir do repouso implica velocidade inicial nula, o que simplifica a conta.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel parte do repouso com aceleração constante de 2 m/s². A distância percorrida por ele nos primeiros 5 s de movimento é de:",
    opcoes: [
      "10 m",
      "20 m",
      "25 m",
      "50 m",
      "100 m",
    ],
    correta: 2,
    explicacao:
      "Usando S = S₀ + v₀t + at²/2, com S₀ = 0 e v₀ = 0: S = (2 · 25)/2 = 25 m. A alternativa 50 m aparece em quem esquece a divisão por 2. No MRUV, a distância cresce com o quadrado do tempo, e não linearmente.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um automóvel a 20 m/s freia com desaceleração constante de 4 m/s² até parar completamente. O tempo gasto até a parada é de:",
    opcoes: [
      "2 s",
      "4 s",
      "5 s",
      "8 s",
      "80 s",
    ],
    correta: 2,
    explicacao:
      "De v = v₀ + a·t, com v = 0, a = −4 m/s² e v₀ = 20 m/s: 0 = 20 − 4t, logo t = 5 s. A aceleração é negativa porque se opõe ao movimento. O sinal indica o sentido, não uma diminuição do módulo.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Um veículo a 20 m/s freia com desaceleração constante de 4 m/s². A distância percorrida até a parada total, calculada pela equação de Torricelli, é de:",
    opcoes: [
      "25 m",
      "40 m",
      "50 m",
      "80 m",
      "100 m",
    ],
    correta: 2,
    explicacao:
      "Torricelli relaciona velocidades e espaço sem envolver o tempo: v² = v₀² + 2aΔS. Com v = 0: 0 = 400 − 8ΔS, logo ΔS = 50 m. Essa equação é a mais direta quando o tempo não é dado nem pedido — daí sua utilidade em problemas de frenagem.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um corpo é abandonado do repouso de uma altura de 45 m. Adotando g = 10 m/s² e desprezando a resistência do ar, o tempo de queda até o solo é de:",
    opcoes: [
      "1,5 s",
      "3 s",
      "4,5 s",
      "6 s",
      "9 s",
    ],
    correta: 1,
    explicacao:
      "Na queda livre a partir do repouso, h = g·t²/2, então 45 = 5t², o que dá t² = 9 e t = 3 s. A massa do corpo não aparece na equação: na ausência de resistência do ar, todos os corpos caem com a mesma aceleração. Essa é a conclusão que Galileu opôs à física aristotélica.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Ainda considerando um corpo abandonado do repouso de 45 m de altura, com g = 10 m/s², a velocidade com que ele atinge o solo é de:",
    opcoes: [
      "15 m/s",
      "20 m/s",
      "30 m/s",
      "45 m/s",
      "90 m/s",
    ],
    correta: 2,
    explicacao:
      "Por Torricelli: v² = 0 + 2 · 10 · 45 = 900, logo v = 30 m/s. Também se pode usar v = g·t = 10 · 3 = 30 m/s. Os dois caminhos coincidem, o que serve de conferência do resultado.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Em um movimento retilíneo uniforme, a aceleração do móvel é necessariamente:",
    opcoes: [
      "constante e diferente de zero.",
      "igual a zero.",
      "crescente com o tempo.",
      "igual à velocidade.",
      "negativa em todo o percurso.",
    ],
    correta: 1,
    explicacao:
      "No MRU a velocidade não varia, e aceleração é justamente a taxa de variação da velocidade: se a velocidade é constante, a aceleração é nula. Aceleração constante e diferente de zero caracteriza o MRUV. Um corpo pode ter velocidade alta e aceleração zero.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um objeto é lançado verticalmente para cima com velocidade inicial de 20 m/s. Adotando g = 10 m/s² e desprezando a resistência do ar, a altura máxima atingida é de:",
    opcoes: [
      "10 m",
      "20 m",
      "30 m",
      "40 m",
      "80 m",
    ],
    correta: 1,
    explicacao:
      "No ponto mais alto a velocidade é nula. Por Torricelli: 0 = 400 − 2 · 10 · h, logo h = 20 m. O tempo de subida seria 2 s, igual ao de descida — a simetria do lançamento vertical é uma propriedade útil para conferir resultados.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel descreve movimento uniformemente variado segundo a função S = 5 + 2t + 3t², com S em metros e t em segundos. A aceleração desse móvel é de:",
    opcoes: [
      "2 m/s²",
      "3 m/s²",
      "5 m/s²",
      "6 m/s²",
      "10 m/s²",
    ],
    correta: 3,
    explicacao:
      "Comparando com S = S₀ + v₀t + at²/2, o coeficiente de t² é a/2. Como esse coeficiente vale 3, a aceleração é 6 m/s². Esquecer o fator 2 é o erro mais frequente nesse tipo de identificação.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Ainda em relação ao móvel de função horária S = 5 + 2t + 3t², a velocidade inicial e a posição inicial valem, respectivamente:",
    opcoes: [
      "3 m/s e 2 m",
      "2 m/s e 5 m",
      "5 m/s e 2 m",
      "6 m/s e 5 m",
      "2 m/s e 3 m",
    ],
    correta: 1,
    explicacao:
      "O termo independente é a posição inicial, 5 m, e o coeficiente de t é a velocidade inicial, 2 m/s. Cada termo da função horária carrega uma informação distinta: posição, velocidade e metade da aceleração. Ler a equação com atenção resolve boa parte das questões de MRUV.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um ciclista percorre 1 200 m em 4 minutos, mantendo velocidade constante. Sua velocidade, expressa em metros por segundo, é de:",
    opcoes: [
      "3 m/s",
      "5 m/s",
      "10 m/s",
      "20 m/s",
      "300 m/s",
    ],
    correta: 1,
    explicacao:
      "Quatro minutos correspondem a 240 s, então v = 1 200/240 = 5 m/s. Converter o tempo antes de dividir evita o erro mais comum. Em km/h, essa velocidade equivale a 18 km/h, valor plausível para um ciclista.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Dois carros partem do mesmo ponto, no mesmo sentido. O primeiro mantém 20 m/s constantes e o segundo, que parte 5 s depois, mantém 30 m/s. O tempo que o segundo leva, após sua partida, para alcançar o primeiro é de:",
    opcoes: [
      "5 s",
      "10 s",
      "15 s",
      "20 s",
      "25 s",
    ],
    correta: 1,
    explicacao:
      "Quando o segundo parte, o primeiro já está 20 · 5 = 100 m à frente. A velocidade de aproximação é 30 − 20 = 10 m/s, então o tempo para eliminar a vantagem é 100/10 = 10 s. Trabalhar com a velocidade relativa simplifica muito problemas de encontro.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um trem de 200 m de comprimento, movendo-se a 20 m/s, atravessa completamente um túnel de 300 m. O tempo necessário para a travessia completa é de:",
    opcoes: [
      "10 s",
      "15 s",
      "25 s",
      "30 s",
      "50 s",
    ],
    correta: 2,
    explicacao:
      "A travessia completa exige que o trem percorra o túnel mais o próprio comprimento: 300 + 200 = 500 m. Assim, t = 500/20 = 25 s. Considerar apenas o comprimento do túnel é o erro clássico: a última carruagem só sai depois de percorrer também os 200 m do trem.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Em um gráfico de velocidade em função do tempo para um movimento retilíneo, a área compreendida entre a linha e o eixo do tempo representa:",
    opcoes: [
      "a aceleração do móvel.",
      "o deslocamento do móvel.",
      "a velocidade média.",
      "a massa do corpo.",
      "a força resultante aplicada.",
    ],
    correta: 1,
    explicacao:
      "Como velocidade multiplicada por tempo resulta em espaço, a área sob a curva do gráfico de velocidade fornece o deslocamento. Já a inclinação dessa mesma linha fornece a aceleração. Distinguir área e inclinação é essencial para interpretar gráficos de cinemática.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Em um gráfico de posição em função do tempo para um movimento retilíneo, a inclinação da reta obtida representa:",
    opcoes: [
      "a velocidade do móvel.",
      "a aceleração do movimento.",
      "a distância total percorrida.",
      "o tempo de percurso.",
      "a energia cinética do corpo.",
    ],
    correta: 0,
    explicacao:
      "A inclinação é a razão entre variação de posição e variação de tempo, que é exatamente a definição de velocidade. Reta mais inclinada significa maior velocidade; reta horizontal indica repouso. Se o gráfico de posição for uma parábola, o movimento é uniformemente variado.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um avião precisa atingir 60 m/s para decolar e acelera a 3 m/s² a partir do repouso. O comprimento mínimo de pista necessário é de:",
    opcoes: [
      "200 m",
      "300 m",
      "400 m",
      "600 m",
      "1 200 m",
    ],
    correta: 3,
    explicacao:
      "Por Torricelli: 3 600 = 0 + 2 · 3 · ΔS, logo ΔS = 600 m. Poderia também calcular o tempo (20 s) e depois o espaço, mas Torricelli evita essa etapa intermediária. A pista real precisa ser maior, por margem de segurança.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Um corpo é considerado em repouso ou em movimento dependendo do referencial adotado. Essa afirmação decorre do fato de que:",
    opcoes: [
      "a posição de um corpo só tem significado em relação a um referencial.",
      "todo movimento é absoluto e independe do observador.",
      "a velocidade é sempre nula para qualquer observador.",
      "apenas corpos acelerados podem ser observados.",
      "o repouso é impossível na natureza.",
    ],
    correta: 0,
    explicacao:
      "Um passageiro sentado está em repouso em relação ao ônibus e em movimento em relação ao solo. Não existe movimento sem referencial declarado. Essa relatividade do movimento é um dos primeiros conceitos da mecânica e organiza toda a cinemática.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel tem velocidade de 72 km/h. Convertendo essa velocidade para o Sistema Internacional, obtém-se:",
    opcoes: [
      "20 m/s",
      "7,2 m/s",
      "72 m/s",
      "259 m/s",
      "2 m/s",
    ],
    correta: 0,
    explicacao:
      "Para converter de km/h para m/s, divide-se por 3,6: 72/3,6 = 20 m/s. O fator vem da razão entre 1 000 m e 3 600 s. Trabalhar no SI é indispensável quando a aceleração está em m/s².",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Um móvel parte do repouso com aceleração constante. Comparando a distância percorrida no primeiro segundo com a percorrida nos dois primeiros segundos, verifica-se que a segunda é:",
    opcoes: [
      "o dobro da primeira.",
      "o triplo da primeira.",
      "quatro vezes a primeira.",
      "igual à primeira.",
      "a metade da primeira.",
    ],
    correta: 2,
    explicacao:
      "Como S = at²/2, a distância é proporcional ao quadrado do tempo: dobrando o tempo, o espaço fica multiplicado por 4. Isso significa que, no segundo intervalo de 1 s, o móvel percorre três vezes o que percorreu no primeiro. Essa proporção 1, 3, 5, 7 é conhecida como relação de Galileu.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Uma bola é lançada verticalmente para cima com 30 m/s. Adotando g = 10 m/s², o tempo total de voo até retornar ao ponto de lançamento é de:",
    opcoes: [
      "6 s",
      "3 s",
      "9 s",
      "15 s",
      "30 s",
    ],
    correta: 0,
    explicacao:
      "O tempo de subida é v₀/g = 30/10 = 3 s, e a descida leva o mesmo tempo, totalizando 6 s. Essa simetria vale sempre que a resistência do ar é desprezada e o ponto de chegada coincide com o de partida. A bola retorna com a mesma velocidade em módulo, mas sentido oposto.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel percorre a primeira metade de um trajeto a 40 km/h e a segunda metade a 60 km/h. Sobre a velocidade média no trajeto completo, é correto afirmar que ela é:",
    opcoes: [
      "menor que 50 km/h, porque o trecho lento consome mais tempo.",
      "exatamente 50 km/h, a média das duas.",
      "maior que 50 km/h, porque a velocidade final é maior.",
      "igual a 100 km/h, somando as velocidades.",
      "impossível de determinar sem a distância total.",
    ],
    correta: 0,
    explicacao:
      "A velocidade média é distância total sobre tempo total, e o trecho percorrido a 40 km/h leva mais tempo que o de 60 km/h. Isso puxa a média para baixo: o valor exato é 48 km/h. A média aritmética simples só valeria se os tempos fossem iguais, não as distâncias.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um objeto move-se com aceleração constante de 5 m/s², partindo de uma velocidade inicial de 10 m/s. Sua velocidade após 6 s será de:",
    opcoes: [
      "30 m/s",
      "35 m/s",
      "40 m/s",
      "45 m/s",
      "60 m/s",
    ],
    correta: 2,
    explicacao:
      "Pela função da velocidade: v = 10 + 5 · 6 = 40 m/s. A cada segundo a velocidade cresce 5 m/s, partindo de 10 m/s. A alternativa 30 m/s esqueceria a velocidade inicial.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Dois móveis percorrem a mesma trajetória em sentidos opostos, partindo de pontos separados por 600 m, com velocidades constantes de 15 m/s e 25 m/s. O tempo até o encontro é de:",
    opcoes: [
      "15 s",
      "10 s",
      "20 s",
      "24 s",
      "40 s",
    ],
    correta: 0,
    explicacao:
      "A velocidade de aproximação é a soma dos módulos: 15 + 25 = 40 m/s. O tempo é 600/40 = 15 s. Nesse instante, o primeiro terá percorrido 225 m e o segundo, 375 m, somando exatamente os 600 m iniciais.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Em um movimento uniformemente variado, quando a velocidade e a aceleração têm o mesmo sinal, o movimento é classificado como:",
    opcoes: [
      "acelerado, com módulo da velocidade aumentando.",
      "retardado, com módulo da velocidade diminuindo.",
      "uniforme, com velocidade constante.",
      "circular, com trajetória curva.",
      "de repouso, com velocidade nula.",
    ],
    correta: 0,
    explicacao:
      "Quando velocidade e aceleração apontam no mesmo sentido, o módulo da velocidade cresce e o movimento é acelerado. Sinais opostos caracterizam movimento retardado. O sinal isolado da aceleração não define nada: é a comparação com o sinal da velocidade que importa.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Uma pedra é abandonada do alto de um edifício e leva 4 s para atingir o solo. Adotando g = 10 m/s² e desprezando a resistência do ar, a altura do edifício é de:",
    opcoes: [
      "20 m",
      "40 m",
      "60 m",
      "80 m",
      "160 m",
    ],
    correta: 3,
    explicacao:
      "Aplicando h = g·t²/2 = 10 · 16/2 = 80 m. A alternativa 160 m aparece em quem esquece a divisão por 2. Note que a altura cresce com o quadrado do tempo: em 2 s a pedra teria caído apenas 20 m.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Sobre as grandezas velocidade e aceleração em um movimento retilíneo, é correto afirmar que:",
    opcoes: [
      "um corpo pode ter velocidade nula e aceleração diferente de zero.",
      "um corpo com velocidade alta tem necessariamente aceleração alta.",
      "aceleração e velocidade são sempre iguais em módulo.",
      "aceleração nula implica velocidade nula.",
      "não existe movimento com aceleração negativa.",
    ],
    correta: 0,
    explicacao:
      "No ponto mais alto de um lançamento vertical, a velocidade é zero mas a aceleração da gravidade continua atuando — por isso o corpo não permanece parado no ar. Velocidade alta com aceleração nula ocorre em qualquer MRU. As duas grandezas são independentes entre si.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel com velocidade inicial de 8 m/s sofre aceleração constante de 2 m/s² durante 10 s. A distância percorrida nesse intervalo é de:",
    opcoes: [
      "80 m",
      "100 m",
      "180 m",
      "200 m",
      "280 m",
    ],
    correta: 2,
    explicacao:
      "Aplicando S = v₀t + at²/2 = 8 · 10 + 2 · 100/2 = 80 + 100 = 180 m. O primeiro termo corresponde ao que seria percorrido sem aceleração; o segundo, ao acréscimo devido a ela. Somar as duas contribuições é o procedimento padrão no MRUV.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Um motorista a 30 m/s percebe um obstáculo e leva 0,8 s para reagir antes de começar a frear a 5 m/s². Considerando a distância de reação e a de frenagem, a distância total até parar é de:",
    opcoes: [
      "90 m",
      "120 m",
      "150 m",
      "114 m",
      "180 m",
    ],
    correta: 3,
    explicacao:
      "Durante a reação, o carro percorre 30 · 0,8 = 24 m em MRU. Depois, por Torricelli, a frenagem consome 900/(2 · 5) = 90 m. O total é 114 m. Ignorar o tempo de reação é o principal erro conceitual em problemas de segurança viária.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um corpo lançado verticalmente para cima atinge o ponto mais alto de sua trajetória. Nesse instante, sua velocidade e sua aceleração valem, respectivamente:",
    opcoes: [
      "zero e zero.",
      "10 m/s e zero.",
      "máxima e zero.",
      "zero e 10 m/s², dirigida para baixo.",
      "zero e 10 m/s², dirigida para cima.",
    ],
    correta: 3,
    explicacao:
      "No ponto mais alto o corpo para momentaneamente, mas a gravidade continua atuando e é justamente ela que o faz retornar. Se a aceleração fosse nula ali, o corpo permaneceria suspenso. A aceleração aponta sempre para baixo durante todo o movimento.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel percorre 100 m em 4 s durante os quais mantém aceleração constante, partindo do repouso. A aceleração desse móvel é de:",
    opcoes: [
      "6,25 m/s²",
      "25 m/s²",
      "50 m/s²",
      "12,5 m/s²",
      "3,125 m/s²",
    ],
    correta: 3,
    explicacao:
      "De S = at²/2: 100 = a · 16/2 = 8a, logo a = 12,5 m/s². A velocidade final seria 12,5 · 4 = 50 m/s. Conferir com a velocidade média (100/4 = 25 m/s, metade da final) valida o resultado, já que no MRUV a partir do repouso a média é metade da final.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Em um gráfico de velocidade em função do tempo, um movimento retilíneo uniforme é representado por:",
    opcoes: [
      "uma reta horizontal.",
      "uma reta inclinada crescente.",
      "uma parábola com concavidade para cima.",
      "uma reta inclinada decrescente.",
      "uma curva exponencial.",
    ],
    correta: 0,
    explicacao:
      "Velocidade constante significa que o valor não muda com o tempo, o que produz uma reta paralela ao eixo do tempo. Retas inclinadas indicam MRUV, porque revelam aceleração constante. No gráfico de posição, porém, o MRU aparece como reta inclinada.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Dois corpos de massas diferentes são abandonados simultaneamente da mesma altura, no vácuo. Sobre o tempo de queda, conclui-se que:",
    opcoes: [
      "o mais pesado chega primeiro ao solo.",
      "o mais leve chega primeiro ao solo.",
      "depende do formato de cada corpo.",
      "nenhum dos dois cai, por ausência de ar.",
      "ambos chegam ao mesmo tempo.",
    ],
    correta: 4,
    explicacao:
      "No vácuo, a única força é o peso, e a aceleração resultante é g, independentemente da massa. Por isso a equação da queda livre não contém a massa. No ar, corpos leves e de grande superfície caem mais devagar por causa da resistência, o que gerou séculos de confusão sobre o tema.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um automóvel viaja a 90 km/h. Convertendo para o SI e calculando a distância percorrida em 8 s, obtém-se:",
    opcoes: [
      "100 m",
      "160 m",
      "240 m",
      "720 m",
      "200 m",
    ],
    correta: 4,
    explicacao:
      "Primeiro a conversão: 90/3,6 = 25 m/s. Depois, S = 25 · 8 = 200 m. Multiplicar 90 por 8 sem converter daria 720, valor que corresponderia a km·s/h — unidade sem sentido físico no problema.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel tem função horária da velocidade dada por v = 12 − 3t, com v em m/s e t em segundos. O instante em que ele inverte o sentido do movimento é:",
    opcoes: [
      "2 s",
      "3 s",
      "6 s",
      "12 s",
      "4 s",
    ],
    correta: 4,
    explicacao:
      "A inversão ocorre quando a velocidade se anula: 0 = 12 − 3t, logo t = 4 s. Antes disso o móvel avança no sentido positivo; depois, retorna. A aceleração é constante e negativa, valendo −3 m/s² durante todo o movimento.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um trem parte de uma estação e, após 2 minutos de aceleração constante, atinge 30 m/s. A aceleração média nesse intervalo é de:",
    opcoes: [
      "0,25 m/s²",
      "0,5 m/s²",
      "1 m/s²",
      "15 m/s²",
      "60 m/s²",
    ],
    correta: 0,
    explicacao:
      "Dois minutos correspondem a 120 s, então a = 30/120 = 0,25 m/s². Valores baixos de aceleração são típicos de trens, que ganham velocidade de forma gradual. Esquecer a conversão de minutos para segundos levaria a 15 m/s², aceleração incompatível com um trem de passageiros.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Um corpo em queda livre a partir do repouso percorre determinada distância no primeiro segundo. Nos três primeiros segundos, ele terá percorrido, em relação a essa distância:",
    opcoes: [
      "três vezes",
      "seis vezes",
      "doze vezes",
      "a mesma distância",
      "nove vezes",
    ],
    correta: 4,
    explicacao:
      "Como a distância é proporcional ao quadrado do tempo, triplicar o tempo multiplica o espaço por 9. Com g = 10 m/s², seriam 5 m no primeiro segundo e 45 m em três segundos. A proporcionalidade quadrática é a assinatura do movimento uniformemente variado.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um ônibus mantém velocidade constante de 15 m/s durante 40 s e, em seguida, permanece parado por 20 s em um ponto. A velocidade média no intervalo total de 60 s é de:",
    opcoes: [
      "7,5 m/s",
      "12 m/s",
      "15 m/s",
      "20 m/s",
      "10 m/s",
    ],
    correta: 4,
    explicacao:
      "A distância percorrida é 15 · 40 = 600 m, e o tempo total é 60 s, o que dá 600/60 = 10 m/s. A parada não acrescenta distância, mas aumenta o tempo, reduzindo a média. Esse é o motivo pelo qual a velocidade média de um ônibus urbano é bem menor que sua velocidade de deslocamento.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um projétil é lançado verticalmente para cima e retorna ao ponto de partida. Desprezando a resistência do ar, a velocidade de retorno, comparada à de lançamento, tem:",
    opcoes: [
      "módulo maior e mesmo sentido.",
      "módulo menor e sentido oposto.",
      "mesmo módulo e mesmo sentido.",
      "mesmo módulo e sentido oposto.",
      "módulo nulo.",
    ],
    correta: 3,
    explicacao:
      "A simetria do movimento garante que o corpo retorne com a mesma rapidez com que partiu, mas descendo. Isso decorre da conservação da energia mecânica na ausência de atrito. Com resistência do ar, a velocidade de retorno seria menor.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um móvel parte da posição 50 m com velocidade constante de −10 m/s em relação à trajetória orientada. Sua posição no instante t = 3 s será de:",
    opcoes: [
      "80 m",
      "50 m",
      "30 m",
      "20 m",
      "−30 m",
    ],
    correta: 3,
    explicacao:
      "Aplicando S = 50 + (−10) · 3 = 50 − 30 = 20 m. A velocidade negativa indica que o móvel se desloca no sentido contrário ao da orientação da trajetória, aproximando-se da origem. O sinal informa o sentido, e não uma velocidade menor.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um carro acelera uniformemente de 10 m/s para 30 m/s ao longo de 100 m. A aceleração desenvolvida nesse trecho é de:",
    opcoes: [
      "2 m/s²",
      "5 m/s²",
      "8 m/s²",
      "20 m/s²",
      "4 m/s²",
    ],
    correta: 4,
    explicacao:
      "Por Torricelli: 900 = 100 + 2a · 100, logo 800 = 200a e a = 4 m/s². Como o tempo não é dado nem pedido, Torricelli é o caminho mais direto. O tempo correspondente seria 5 s, valor que poderia ser usado como conferência.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "A trajetória de um móvel é definida como:",
    opcoes: [
      "a distância total percorrida pelo corpo.",
      "a velocidade média do movimento.",
      "o intervalo de tempo do deslocamento.",
      "a aceleração sofrida pelo corpo.",
      "o conjunto de posições ocupadas pelo corpo ao longo do tempo.",
    ],
    correta: 4,
    explicacao:
      "A trajetória é o caminho descrito pelo móvel, e depende do referencial adotado: a de uma bola solta dentro de um trem é vertical para quem está no trem e curva para quem está na plataforma. Distância percorrida é o comprimento dessa trajetória, grandeza distinta.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "dificil",
    enunciado:
      "Um corpo é lançado para cima com 40 m/s a partir do solo. Adotando g = 10 m/s², a altura em que ele se encontra 2 s após o lançamento é de:",
    opcoes: [
      "40 m",
      "70 m",
      "80 m",
      "100 m",
      "60 m",
    ],
    correta: 4,
    explicacao:
      "Usando h = v₀t − g·t²/2 = 40 · 2 − 10 · 4/2 = 80 − 20 = 60 m. Nesse instante o corpo ainda sobe, pois sua velocidade é 40 − 20 = 20 m/s. A altura máxima, de 80 m, seria atingida em 4 s.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Em uma prova de 100 m rasos, um atleta completa o percurso em 10 s. Sua velocidade média foi de:",
    opcoes: [
      "5 m/s",
      "20 m/s",
      "36 m/s",
      "100 m/s",
      "10 m/s",
    ],
    correta: 4,
    explicacao:
      "A velocidade média é 100/10 = 10 m/s, o equivalente a 36 km/h. Note que o atleta parte do repouso e atinge velocidade máxima maior que essa no meio da prova — a média não coincide com a velocidade instantânea em nenhum trecho específico.",
  },
];
