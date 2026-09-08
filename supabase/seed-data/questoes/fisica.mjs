/* Questões autorais de Física, escritas para os conteúdos que a classificação
   das provas reais deixou vazios.

   Formato: { materia, tema, enunciado, opcoes (5), correta (0-4), explicacao,
   dificuldade }. O `tema` precisa bater com o título em lib/conteudo/materias.ts
   — scripts/seed-questoes.mjs recusa o arquivo inteiro se não bater.

   A explicação comenta por que a certa está certa E por que as outras não
   estão. É o que diferencia gabarito de aula. */

export const questoes = [
  // ===================== Cinemática: MRU e MRUV =========================
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um ônibus trafega a 90 km/h quando o motorista avista um obstáculo e freia, parando completamente após 5 segundos. Considerando que a desaceleração foi constante durante toda a frenagem, qual a distância percorrida pelo ônibus desde o início da frenagem até a parada total?",
    opcoes: ["25 m", "45 m", "62,5 m", "75 m", "125 m"],
    correta: 2,
    explicacao:
      "Primeiro converta: 90 km/h ÷ 3,6 = 25 m/s. Como a desaceleração é constante, a velocidade cai linearmente de 25 m/s a zero, e a velocidade média no intervalo é a média aritmética dos extremos: (25 + 0)/2 = 12,5 m/s. A distância é 12,5 × 5 = 62,5 m. O erro de 125 m vem de usar a velocidade inicial como se ela fosse constante (25 × 5) — isso valeria num MRU, não numa frenagem. O de 25 m confunde a velocidade em m/s com a distância. E 75 m sai de arredondar 90 km/h para 30 m/s, esquecendo o fator 3,6.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Um ciclista mantém velocidade constante de 8 m/s numa ciclovia plana e retilínea durante 15 minutos. Que distância ele percorre nesse intervalo?",
    opcoes: ["2,0 km", "4,8 km", "6,0 km", "7,2 km", "12,0 km"],
    correta: 3,
    explicacao:
      "Velocidade constante em linha reta é movimento uniforme, então basta Δs = v · Δt. O cuidado está nas unidades: 15 minutos são 900 segundos, e 8 × 900 = 7 200 m, ou seja, 7,2 km. Quem responde 2,0 km multiplicou 8 por 15 e tratou o resultado como metros por minuto; 12,0 km sai de trocar a conta por 8 × 90; e 4,8 km aparece ao dividir por 100 em vez de por 1 000 na conversão final.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "media",
    enunciado:
      "Um objeto é abandonado, a partir do repouso, do alto de um edifício de 80 m de altura. Desprezando a resistência do ar e adotando g = 10 m/s², com que velocidade ele atinge o solo?",
    opcoes: ["20 m/s", "28 m/s", "40 m/s", "80 m/s", "160 m/s"],
    correta: 2,
    explicacao:
      "Na queda livre a partir do repouso vale v² = 2·g·h, sem precisar do tempo: v² = 2 × 10 × 80 = 1 600, logo v = 40 m/s. Note que 80 m/s seria o caso de esquecer a raiz quadrada, e 160 m/s de usar direto 2gh como se fosse a própria velocidade. O valor de 20 m/s corresponderia a uma queda de apenas 20 m. Um detalhe conceitual: a massa do objeto não aparece em lugar nenhum da conta — no vácuo, todos os corpos caem com a mesma aceleração.",
  },
  {
    materia: "fisica",
    tema: "Cinemática: MRU e MRUV",
    dificuldade: "facil",
    enunciado:
      "Um carro parte do repouso e acelera uniformemente a 2 m/s² numa pista retilínea. Qual a distância percorrida nos primeiros 6 segundos de movimento?",
    opcoes: ["6 m", "12 m", "18 m", "36 m", "72 m"],
    correta: 3,
    explicacao:
      "Partindo do repouso, Δs = ½ · a · t² = ½ × 2 × 36 = 36 m. O erro mais comum é 72 m, de esquecer o fator ½ da equação horária. Já 12 m é o resultado de a · t, que dá a velocidade final (12 m/s) e não a distância — dimensionalmente é outra grandeza. E 18 m sairia de usar t em vez de t².",
  },

  // ================== Eletrostática e campo elétrico =====================
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Duas pequenas esferas eletrizadas, mantidas em repouso, se repelem com uma força de intensidade F. Sem alterar as cargas, a distância entre elas é triplicada. A nova força de repulsão passa a ser:",
    opcoes: ["3F", "F/3", "9F", "F/9", "igual a F"],
    correta: 3,
    explicacao:
      "A lei de Coulomb diz que F = k·Q₁·Q₂/d², ou seja, a força é inversamente proporcional ao QUADRADO da distância. Triplicar d multiplica o denominador por 3² = 9, e a força cai para F/9. As alternativas 3F e F/3 tratam a relação como se fosse proporcionalidade simples, ignorando o expoente; 9F inverte o sentido da proporcionalidade, como se afastar as cargas aumentasse a repulsão. Vale notar que a mesma dependência com 1/d² aparece na gravitação universal — são leis de forma idêntica.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "media",
    enunciado:
      "Durante uma tempestade com raios, orienta-se que as pessoas permaneçam dentro de automóveis com a carroceria metálica fechada. A proteção oferecida pelo veículo é explicada porque:",
    opcoes: [
      "os pneus de borracha isolam o carro do solo, impedindo a passagem de qualquer corrente.",
      "o campo elétrico resultante no interior de um condutor em equilíbrio eletrostático é nulo, e a carga se distribui na superfície externa.",
      "o metal da carroceria absorve e neutraliza a carga elétrica do raio, transformando-a em calor.",
      "o ar dentro do veículo é um bom condutor e desvia a corrente para fora pelas janelas.",
      "a carroceria adquire carga de mesmo sinal que a nuvem e repele a descarga antes do contato.",
    ],
    correta: 1,
    explicacao:
      "É a blindagem eletrostática, ou gaiola de Faraday. Num condutor em equilíbrio, o excesso de carga se acomoda na superfície externa e o campo elétrico no interior é nulo — por isso quem está dentro fica protegido, mesmo que a corrente circule pela lataria. Os pneus não explicam nada: a tensão de um raio é da ordem de milhões de volts e atravessa esses poucos centímetros de borracha sem dificuldade. O metal também não 'absorve' a carga, ele a conduz para o solo. E não há repulsão prévia: a descarga atinge o carro, o efeito protetor acontece depois.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "facil",
    enunciado:
      "Ao atritar um bastão de vidro com um pano de seda, verifica-se que o bastão adquire carga elétrica positiva. Do ponto de vista microscópico, isso ocorreu porque durante o atrito:",
    opcoes: [
      "prótons migraram da seda para o bastão de vidro.",
      "elétrons migraram do bastão de vidro para a seda.",
      "prótons do bastão foram destruídos pelo atrito.",
      "elétrons migraram da seda para o bastão de vidro.",
      "nêutrons do bastão se transformaram em prótons.",
    ],
    correta: 1,
    explicacao:
      "Na eletrização por atrito quem se move são os elétrons, que estão na eletrosfera e são fracamente ligados. O vidro perdeu elétrons e ficou com excesso de carga positiva; a seda, que os recebeu, ficou negativa — e a soma das duas cargas continua zero, como manda a conservação da carga. As opções que falam em migração ou destruição de prótons estão erradas porque prótons ficam presos ao núcleo e não se deslocam em processos de eletrização. Receber elétrons deixaria o bastão negativo, não positivo. E nêutrons não viram prótons por atrito: isso seria decaimento nuclear, outro fenômeno inteiramente.",
  },
  {
    materia: "fisica",
    tema: "Eletrostática e campo elétrico",
    dificuldade: "dificil",
    enunciado:
      "Uma carga de prova positiva é abandonada em repouso num ponto onde existe um campo elétrico uniforme, gerado por duas placas paralelas eletrizadas. Sobre o movimento subsequente dessa carga, é correto afirmar que ela:",
    opcoes: [
      "permanece em repouso, pois o campo é uniforme e não exerce força.",
      "move-se no sentido do campo elétrico, com aceleração constante.",
      "move-se no sentido contrário ao do campo elétrico, com aceleração constante.",
      "descreve movimento circular uniforme entre as placas.",
      "move-se no sentido do campo, mas com velocidade constante.",
    ],
    correta: 1,
    explicacao:
      "A força sobre uma carga vale F = q·E, e para carga POSITIVA ela tem o mesmo sentido do campo. Campo uniforme significa E constante em módulo, direção e sentido, então a força é constante e, pela segunda lei de Newton, a aceleração também — movimento uniformemente variado. Campo uniforme não quer dizer força nula, o que descarta a primeira opção. O sentido contrário valeria para uma carga negativa. Movimento circular exigiria força perpendicular à velocidade, o que não é o caso. E velocidade constante exigiria força resultante nula, incompatível com uma força elétrica que não é equilibrada por nenhuma outra.",
  },

  // ============== Física moderna: efeito fotoelétrico ====================
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Uma placa metálica é iluminada por luz monocromática de frequência suficiente para arrancar elétrons de sua superfície. Mantendo a mesma frequência e dobrando apenas a intensidade da luz incidente, observa-se que:",
    opcoes: [
      "a energia cinética máxima dos elétrons dobra, e o número de elétrons emitidos não muda.",
      "o número de elétrons emitidos por segundo dobra, e a energia cinética máxima de cada um não muda.",
      "tanto o número de elétrons quanto a energia cinética máxima dobram.",
      "nenhum elétron é mais emitido, pois a placa se satura.",
      "a energia cinética máxima cai pela metade, pois a energia se reparte entre mais elétrons.",
    ],
    correta: 1,
    explicacao:
      "Esse é exatamente o resultado que a física clássica não conseguia explicar e que Einstein resolveu em 1905. A luz chega em pacotes — fótons — e cada elétron é arrancado pela absorção de UM fóton. A energia de cada fóton depende só da frequência (E = h·f), então dobrar a intensidade dobra a quantidade de fótons, e portanto a quantidade de elétrons arrancados, sem mudar em nada a energia de cada um. As alternativas que fazem a energia cinética variar com a intensidade repetem justamente a previsão clássica que o experimento refutou. A placa também não 'satura': enquanto houver luz acima da frequência de corte, há emissão.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "media",
    enunciado:
      "Ao se iluminar certo metal com luz vermelha muito intensa, nenhum elétron é emitido. Ao trocar a fonte por uma luz violeta de intensidade muito menor, a emissão de elétrons ocorre imediatamente. A explicação para esse comportamento é que:",
    opcoes: [
      "a luz violeta transporta mais energia total por conta do seu brilho característico.",
      "existe uma frequência mínima de corte, e apenas fótons acima dela têm energia suficiente para arrancar um elétron.",
      "a luz vermelha é absorvida pelo ar antes de atingir a placa metálica.",
      "elétrons só respondem a cores de comprimento de onda longo, como o violeta.",
      "o metal reflete integralmente a luz vermelha e absorve integralmente a violeta.",
    ],
    correta: 1,
    explicacao:
      "Cada metal tem uma função trabalho, a energia mínima para libertar um elétron da superfície. Como a energia do fóton é E = h·f, só a frequência decide se um único fóton dá conta do serviço. A luz violeta tem frequência maior que a vermelha, então seus fótons são individualmente mais energéticos, mesmo que a fonte seja fraca. Aumentar a intensidade do vermelho só manda mais fótons fracos, e dois fótons insuficientes não se somam num mesmo elétron. Cuidado com a quarta opção: o violeta tem comprimento de onda CURTO, não longo — comprimento de onda e frequência são inversamente proporcionais.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "dificil",
    enunciado:
      "Num experimento de efeito fotoelétrico, mede-se a energia cinética máxima dos elétrons emitidos em função da frequência da luz incidente e obtém-se uma reta. De acordo com a equação de Einstein para o efeito fotoelétrico, o coeficiente angular dessa reta corresponde:",
    opcoes: [
      "à função trabalho do metal.",
      "à constante de Planck.",
      "à carga elementar do elétron.",
      "à velocidade da luz no vácuo.",
      "à massa de repouso do elétron.",
    ],
    correta: 1,
    explicacao:
      "A equação é Ec(máx) = h·f − W, em que W é a função trabalho. Comparando com a forma y = ax + b, com f no papel de x, o coeficiente angular é h — a constante de Planck — e o coeficiente linear é −W. Foi assim que Millikan mediu h experimentalmente, confirmando a hipótese de Einstein. A função trabalho não é a inclinação: ela aparece no ponto em que a reta corta o eixo vertical, e é o que muda quando se troca o metal mantendo a mesma inclinação. As demais grandezas simplesmente não figuram nessa equação.",
  },
  {
    materia: "fisica",
    tema: "Física moderna: efeito fotoelétrico",
    dificuldade: "facil",
    enunciado:
      "O efeito fotoelétrico é considerado uma das evidências decisivas de que a luz apresenta comportamento corpuscular. A característica do fenômeno que a teoria ondulatória clássica não conseguia explicar é:",
    opcoes: [
      "o fato de a luz se propagar em linha reta no vácuo.",
      "a existência de uma frequência mínima abaixo da qual não há emissão, independentemente da intensidade.",
      "a capacidade da luz de sofrer difração ao passar por fendas estreitas.",
      "a diminuição da intensidade luminosa com o quadrado da distância à fonte.",
      "a decomposição da luz branca em cores ao atravessar um prisma.",
    ],
    correta: 1,
    explicacao:
      "Pela teoria ondulatória, energia suficiente deveria se acumular com o tempo em qualquer frequência, bastando aumentar a intensidade ou esperar mais — e não é isso que se observa: abaixo da frequência de corte não há emissão nenhuma, por mais forte que seja a luz. Só o modelo de fótons explica esse limiar. As outras alternativas descrevem fenômenos que a teoria ondulatória explica muito bem: difração, propagação retilínea, dispersão no prisma e a queda da intensidade com a distância são todos comportamentos ondulatórios clássicos. É por isso que hoje se fala em dualidade — a luz precisa dos dois modelos.",
  },
];
