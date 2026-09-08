/* Termodinâmica e máquinas térmicas (50 questões).
   Energia interna, primeira lei, transformações gasosas, trabalho, segunda
   lei, máquinas térmicas, rendimento, ciclo de Carnot e entropia.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "A primeira lei da termodinâmica relaciona três grandezas em um sistema. Segundo ela, a variação da energia interna de um gás é igual:",
    opcoes: [
      "ao calor trocado somado ao trabalho realizado sobre o sistema.",
      "ao calor recebido menos o trabalho realizado pelo sistema.",
      "apenas ao trabalho realizado pelo sistema.",
      "apenas ao calor recebido pelo sistema.",
      "ao produto do calor pelo trabalho.",
    ],
    correta: 1,
    explicacao:
      "A formulação usual é ΔU = Q − W, em que Q é o calor recebido e W o trabalho realizado pelo gás. Ela é uma aplicação do princípio da conservação da energia a sistemas térmicos. Se o gás recebe calor e não realiza trabalho, toda a energia vai para a energia interna.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Em uma transformação isotérmica de um gás ideal, mantém-se constante:",
    opcoes: [
      "a pressão",
      "o volume",
      "a temperatura",
      "a massa apenas",
      "a energia cinética das paredes",
    ],
    correta: 2,
    explicacao:
      "Isotérmica significa temperatura constante, o que implica energia interna constante em um gás ideal. Nesse caso, ΔU = 0 e todo o calor recebido converte-se em trabalho. Pressão e volume variam de forma inversamente proporcional, conforme a lei de Boyle.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal sofre transformação isobárica. Nessa transformação, permanece constante:",
    opcoes: [
      "a temperatura",
      "o volume",
      "a pressão",
      "a energia interna",
      "o trabalho realizado",
    ],
    correta: 2,
    explicacao:
      "Isobárica significa pressão constante, situação típica de um gás em um cilindro com êmbolo livre. Nessa transformação, volume e temperatura são diretamente proporcionais, conforme a lei de Charles e Gay-Lussac. O trabalho é calculado por W = p·ΔV.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás sofre expansão isobárica sob pressão de 200 000 Pa, aumentando seu volume em 0,003 m³. O trabalho realizado pelo gás é de:",
    opcoes: [
      "6 J",
      "60 J",
      "600 J",
      "6 000 J",
      "66 J",
    ],
    correta: 2,
    explicacao:
      "O trabalho na transformação isobárica é W = p·ΔV = 200 000 · 0,003 = 600 J. Trabalho positivo indica que o gás se expandiu, empurrando a vizinhança. Em uma compressão, o volume diminui e o trabalho do gás fica negativo.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Em uma transformação isovolumétrica, também chamada isocórica, o trabalho realizado pelo gás é:",
    opcoes: [
      "igual ao calor recebido.",
      "nulo, pois não há variação de volume.",
      "máximo entre todas as transformações.",
      "igual à variação de energia interna.",
      "proporcional à pressão final.",
    ],
    correta: 1,
    explicacao:
      "Sem variação de volume, o gás não desloca o êmbolo e não realiza trabalho. Pela primeira lei, todo o calor recebido vai para a energia interna: ΔU = Q. É o que acontece ao aquecer um gás em recipiente rígido e fechado.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma transformação adiabática caracteriza-se por ocorrer:",
    opcoes: [
      "sem troca de calor com o meio externo.",
      "sem variação de pressão.",
      "sem variação de volume.",
      "com temperatura constante.",
      "com energia interna constante.",
    ],
    correta: 0,
    explicacao:
      "Na adiabática, Q = 0 e a primeira lei fica ΔU = −W. Se o gás se expande, ele realiza trabalho às custas da própria energia interna e esfria. É o que ocorre em desodorantes aerossóis e na formação de nuvens pelo ar ascendente.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás recebe 800 J de calor e realiza 300 J de trabalho sobre a vizinhança. A variação de sua energia interna é de:",
    opcoes: [
      "−500 J",
      "300 J",
      "500 J",
      "800 J",
      "1 100 J",
    ],
    correta: 2,
    explicacao:
      "Aplicando ΔU = Q − W = 800 − 300 = 500 J. A energia interna aumentou, o que implica elevação de temperatura em um gás ideal. Parte do calor recebido virou trabalho e parte ficou armazenada no gás.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "A energia interna de um gás ideal depende exclusivamente:",
    opcoes: [
      "do volume ocupado pelo gás.",
      "da pressão exercida sobre as paredes.",
      "da temperatura absoluta do gás.",
      "do formato do recipiente.",
      "da massa das paredes do recipiente.",
    ],
    correta: 2,
    explicacao:
      "Em um gás ideal, a energia interna é a soma das energias cinéticas das moléculas, que dependem apenas da temperatura absoluta. Por isso, em uma isotérmica, ΔU = 0 mesmo com pressão e volume variando. Essa simplificação é uma das vantagens do modelo de gás ideal.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina térmica recebe 1 000 J da fonte quente e rejeita 700 J para a fonte fria. O trabalho útil produzido é de:",
    opcoes: [
      "300 J",
      "700 J",
      "1 000 J",
      "1 700 J",
      "70 J",
    ],
    correta: 0,
    explicacao:
      "Pela conservação da energia, o trabalho é a diferença entre o calor recebido e o rejeitado: 1 000 − 700 = 300 J. Nenhuma máquina térmica converte todo o calor em trabalho — sempre há rejeição para a fonte fria.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Ainda considerando uma máquina que recebe 1 000 J da fonte quente e produz 300 J de trabalho útil, seu rendimento é de:",
    opcoes: [
      "3%",
      "30%",
      "43%",
      "70%",
      "100%",
    ],
    correta: 1,
    explicacao:
      "O rendimento é a razão entre trabalho útil e calor recebido: 300/1 000 = 0,3, ou 30%. Motores a combustão reais operam em faixa semelhante, entre 25% e 40%. O restante é perdido como calor nos gases de escape e no sistema de arrefecimento.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "A segunda lei da termodinâmica impõe um limite às máquinas térmicas. Segundo ela, é impossível construir uma máquina que:",
    opcoes: [
      "converta integralmente calor em trabalho em um ciclo completo.",
      "realize trabalho a partir de energia elétrica.",
      "funcione com duas fontes de temperaturas diferentes.",
      "aproveite mais de 10% do calor recebido.",
      "opere com gases em vez de líquidos.",
    ],
    correta: 0,
    explicacao:
      "O enunciado de Kelvin-Planck estabelece que nenhuma máquina cíclica converte todo o calor recebido em trabalho: parte precisa ser rejeitada. Isso não decorre de imperfeição técnica, mas de uma limitação fundamental da natureza.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Uma máquina de Carnot opera entre fontes a 500 K e 300 K. Seu rendimento máximo teórico é de:",
    opcoes: [
      "20%",
      "40%",
      "60%",
      "70%",
      "83%",
    ],
    correta: 1,
    explicacao:
      "O rendimento de Carnot é 1 − T_fria/T_quente = 1 − 300/500 = 0,4, ou 40%. As temperaturas precisam estar em kelvin. Nenhuma máquina real operando entre essas fontes pode superar esse valor.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "O ciclo de Carnot é formado por quatro transformações, que são:",
    opcoes: [
      "duas isotérmicas e duas adiabáticas.",
      "duas isobáricas e duas isovolumétricas.",
      "quatro transformações isotérmicas.",
      "duas isobáricas e duas adiabáticas.",
      "quatro transformações adiabáticas.",
    ],
    correta: 0,
    explicacao:
      "O ciclo alterna expansão isotérmica, expansão adiabática, compressão isotérmica e compressão adiabática. É um ciclo ideal e reversível, que estabelece o teto de rendimento para qualquer máquina operando entre duas temperaturas dadas.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma geladeira funciona retirando calor de seu interior e rejeitando-o no ambiente. Para que isso ocorra, é necessário:",
    opcoes: [
      "que o calor flua espontaneamente do frio para o quente.",
      "fornecer trabalho externo ao sistema, por meio do compressor.",
      "eliminar completamente o gás refrigerante.",
      "que a temperatura interna seja maior que a externa.",
      "reduzir a pressão atmosférica da cozinha.",
    ],
    correta: 1,
    explicacao:
      "O enunciado de Clausius afirma que o calor não passa espontaneamente do corpo frio para o quente. Uma máquina frigorífica inverte esse fluxo, mas às custas de trabalho externo — a energia elétrica consumida pelo compressor.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Ao receber calor sem realizar trabalho, um gás em recipiente rígido tem sua temperatura:",
    opcoes: [
      "reduzida, pois a energia é gasta no trabalho.",
      "aumentada, pois todo o calor vira energia interna.",
      "mantida constante.",
      "reduzida à metade do valor inicial.",
      "independente da quantidade de calor.",
    ],
    correta: 1,
    explicacao:
      "Sem variação de volume, W = 0 e a primeira lei fica ΔU = Q. Como a energia interna de um gás ideal depende só da temperatura, ela sobe. É por isso que aquecer um recipiente fechado e rígido aumenta rapidamente sua pressão interna.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás sofre compressão adiabática. Sobre sua temperatura, é correto afirmar que ela:",
    opcoes: [
      "diminui, pois o gás perde calor.",
      "aumenta, pois recebe trabalho sem trocar calor.",
      "permanece constante durante todo o processo.",
      "diminui, pois o volume se reduz.",
      "não pode ser determinada sem a massa do gás.",
    ],
    correta: 1,
    explicacao:
      "Com Q = 0, a primeira lei fica ΔU = −W. Na compressão, o trabalho é realizado sobre o gás, W é negativo e ΔU é positivo: a temperatura sobe. É o que aquece o ar em uma bomba de encher pneu e o que provoca a ignição no motor diesel.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Em um diagrama de pressão em função do volume, o trabalho realizado por um gás em uma transformação corresponde:",
    opcoes: [
      "à inclinação da curva obtida.",
      "à área sob a curva da transformação.",
      "ao ponto de interseção com o eixo vertical.",
      "à distância entre os pontos inicial e final.",
      "ao produto das coordenadas finais.",
    ],
    correta: 1,
    explicacao:
      "Como trabalho é pressão vezes variação de volume, a área sob a curva no diagrama fornece o trabalho. Em um ciclo fechado, a área interna do ciclo corresponde ao trabalho líquido produzido. Se o ciclo é percorrido no sentido horário, o trabalho é positivo.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "A equação geral dos gases ideais relaciona pressão, volume e temperatura por meio da expressão:",
    opcoes: [
      "p·V/T = constante",
      "p·T/V = constante",
      "V·T/p = constante",
      "p + V + T = constante",
      "p·V·T = constante",
    ],
    correta: 0,
    explicacao:
      "A relação p·V/T = constante vale para uma massa fixa de gás ideal e reúne as leis de Boyle, Charles e Gay-Lussac. As temperaturas precisam estar em kelvin. Ela permite prever o estado final do gás a partir do inicial.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás ocupa 2 L a 300 K e 1 atm. Aquecido até 600 K sob pressão constante, seu novo volume será de:",
    opcoes: [
      "1 L",
      "2 L",
      "3 L",
      "4 L",
      "6 L",
    ],
    correta: 3,
    explicacao:
      "Na isobárica, V/T é constante: 2/300 = V/600, logo V = 4 L. Dobrar a temperatura absoluta dobra o volume. O resultado só vale porque a temperatura foi expressa em kelvin — em graus Celsius a proporção seria outra.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Sobre o conceito de entropia em termodinâmica, é correto afirmar que ela mede:",
    opcoes: [
      "a quantidade total de calor de um corpo.",
      "o grau de desordem ou de dispersão da energia em um sistema.",
      "a temperatura absoluta do sistema.",
      "o trabalho máximo que uma máquina pode realizar.",
      "a massa total das partículas envolvidas.",
    ],
    correta: 1,
    explicacao:
      "A segunda lei estabelece que a entropia de um sistema isolado nunca diminui. Processos espontâneos caminham para estados mais prováveis e mais dispersos. É a entropia que dá sentido à chamada seta do tempo, distinguindo passado de futuro.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina térmica recebe 2 000 J e realiza 500 J de trabalho por ciclo. A quantidade de calor rejeitada para a fonte fria é de:",
    opcoes: [
      "500 J",
      "1 000 J",
      "1 500 J",
      "2 000 J",
      "2 500 J",
    ],
    correta: 2,
    explicacao:
      "Pela conservação da energia, o calor rejeitado é 2 000 − 500 = 1 500 J. O rendimento correspondente é de 25%. Reduzir a rejeição sem alterar as temperaturas das fontes é impossível, por força da segunda lei.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma usina termelétrica converte energia térmica em elétrica. A sequência de transformações que ocorre nesse processo é:",
    opcoes: [
      "térmica em mecânica, e esta em elétrica.",
      "elétrica em térmica, e esta em mecânica.",
      "mecânica em química, e esta em térmica.",
      "elétrica em química, e esta em mecânica.",
      "nuclear em elétrica, sem etapas intermediárias.",
    ],
    correta: 0,
    explicacao:
      "O combustível aquece a água, o vapor gira as turbinas e o gerador produz eletricidade. Cada etapa tem perdas, o que limita o rendimento global a algo em torno de 35% a 45%. Usinas nucleares seguem exatamente a mesma sequência, mudando apenas a fonte de calor.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Duas máquinas operam entre as mesmas fontes térmicas. A que apresenta maior rendimento é aquela que:",
    opcoes: [
      "rejeita mais calor para a fonte fria.",
      "converte maior fração do calor recebido em trabalho.",
      "recebe maior quantidade de calor da fonte quente.",
      "opera em ciclos mais longos.",
      "possui maior massa de fluido de trabalho.",
    ],
    correta: 1,
    explicacao:
      "Rendimento é a razão entre trabalho útil e calor recebido, então o que importa é a fração aproveitada, não os valores absolutos. Uma máquina que recebe muito calor mas rejeita quase tudo tem rendimento baixo. O limite superior é dado pelo ciclo de Carnot.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal é comprimido isotermicamente. Nessa transformação, é correto afirmar que:",
    opcoes: [
      "a energia interna aumenta e o gás esquenta.",
      "o gás não troca calor com o ambiente.",
      "o trabalho realizado é nulo.",
      "a energia interna permanece constante e o gás cede calor.",
      "a pressão permanece constante.",
    ],
    correta: 3,
    explicacao:
      "Com temperatura constante, ΔU = 0, e a primeira lei fica Q = W. Como o trabalho é realizado sobre o gás durante a compressão, ele precisa ceder calor equivalente ao ambiente para manter a temperatura. A pressão, nesse caso, aumenta.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um motor de combustão interna é classificado como máquina térmica porque:",
    opcoes: [
      "converte energia elétrica em movimento.",
      "transforma trabalho integralmente em calor.",
      "funciona sem qualquer rejeição de calor.",
      "converte parte do calor da queima do combustível em trabalho mecânico.",
      "opera com rendimento de 100%.",
    ],
    correta: 3,
    explicacao:
      "A queima do combustível fornece calor, parte dele vira trabalho no pistão e o restante sai pelo escapamento e pelo radiador. Essa rejeição é obrigatória: sem fonte fria não há conversão cíclica de calor em trabalho.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Uma máquina de Carnot opera entre 600 K e 400 K. Recebendo 900 J da fonte quente por ciclo, o trabalho máximo que pode produzir é de:",
    opcoes: [
      "150 J",
      "450 J",
      "600 J",
      "300 J",
      "900 J",
    ],
    correta: 3,
    explicacao:
      "O rendimento é 1 − 400/600 = 1/3. O trabalho é 900 · (1/3) = 300 J, e 600 J são rejeitados. Esse é o máximo teórico: qualquer irreversibilidade real reduziria esse valor.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Ao abrir uma lata de refrigerante, observa-se um leve resfriamento do gás que escapa. Isso ocorre porque o gás:",
    opcoes: [
      "recebe calor do ambiente rapidamente.",
      "aumenta sua pressão ao sair da lata.",
      "muda de estado físico instantaneamente.",
      "expande-se de forma praticamente adiabática, realizando trabalho e perdendo energia interna.",
      "absorve energia da própria lata metálica.",
    ],
    correta: 3,
    explicacao:
      "A expansão é rápida demais para trocar calor significativo, o que a torna aproximadamente adiabática. O gás realiza trabalho contra a atmosfera às custas da própria energia interna e esfria. O mesmo princípio explica o resfriamento em desodorantes aerossóis.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Em um ciclo termodinâmico fechado, ao final de cada ciclo completo, a variação da energia interna do sistema é:",
    opcoes: [
      "sempre positiva.",
      "sempre negativa.",
      "nula, pois o estado final coincide com o inicial.",
      "igual ao trabalho realizado.",
      "igual ao calor rejeitado.",
    ],
    correta: 2,
    explicacao:
      "A energia interna é função de estado: depende apenas das condições atuais, não do caminho percorrido. Voltando ao estado inicial, ΔU = 0 e, pela primeira lei, o trabalho líquido iguala o calor líquido trocado no ciclo.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "A lei de Boyle descreve o comportamento de um gás ideal em transformação isotérmica, afirmando que pressão e volume são:",
    opcoes: [
      "diretamente proporcionais.",
      "sempre iguais entre si.",
      "independentes um do outro.",
      "inversamente proporcionais.",
      "proporcionais ao quadrado da temperatura.",
    ],
    correta: 3,
    explicacao:
      "Com temperatura constante, p·V permanece constante: dobrar a pressão reduz o volume à metade. É o que se observa ao comprimir o êmbolo de uma seringa tampada. A relação vale bem para gases em pressões moderadas.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás a 4 atm ocupa 3 L. Mantida a temperatura constante e reduzida a pressão para 2 atm, o novo volume será de:",
    opcoes: [
      "1,5 L",
      "3 L",
      "4 L",
      "6 L",
      "12 L",
    ],
    correta: 3,
    explicacao:
      "Pela lei de Boyle, 4 · 3 = 2 · V, logo V = 6 L. Reduzir a pressão à metade dobra o volume. É esse comportamento que faz balões de gás se expandirem à medida que sobem na atmosfera.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "O rendimento de uma máquina térmica real é sempre menor que o de uma máquina de Carnot operando entre as mesmas fontes porque:",
    opcoes: [
      "máquinas reais apresentam atrito e processos irreversíveis.",
      "o ciclo de Carnot não respeita a primeira lei.",
      "máquinas reais não rejeitam calor.",
      "o ciclo de Carnot funciona apenas com líquidos.",
      "a temperatura da fonte fria é sempre nula.",
    ],
    correta: 0,
    explicacao:
      "O ciclo de Carnot é idealizado como totalmente reversível, sem atrito nem trocas com gradientes finitos de temperatura. Máquinas reais têm perdas em cada etapa. Por isso o rendimento de Carnot funciona como teto inatingível, e não como meta prática.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás recebe 500 J de calor e sua energia interna aumenta 500 J. Sobre o trabalho realizado por esse gás, conclui-se que ele foi:",
    opcoes: [
      "500 J",
      "1 000 J",
      "nulo",
      "−500 J",
      "250 J",
    ],
    correta: 2,
    explicacao:
      "Da primeira lei, W = Q − ΔU = 500 − 500 = 0. Trabalho nulo indica que não houve variação de volume, o que caracteriza uma transformação isovolumétrica. O gás foi aquecido em recipiente rígido.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Ao inflar um pneu com uma bomba manual, percebe-se que o corpo da bomba esquenta. A explicação termodinâmica é que:",
    opcoes: [
      "o ar dentro da bomba sofre compressão e tem sua energia interna aumentada.",
      "o atrito com a borracha do pneu aquece o ar.",
      "o ar perde calor durante a compressão.",
      "a pressão atmosférica aumenta localmente.",
      "o volume do ar permanece constante.",
    ],
    correta: 0,
    explicacao:
      "A compressão rápida é aproximadamente adiabática: o trabalho realizado sobre o gás eleva sua energia interna e, portanto, sua temperatura. O aquecimento por atrito existe, mas é secundário. É o mesmo princípio da ignição em motores diesel.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Sobre a possibilidade de construir um moto-perpétuo de segunda espécie, que converteria integralmente calor de uma única fonte em trabalho, a termodinâmica afirma que ele:",
    opcoes: [
      "é possível, desde que o atrito seja eliminado.",
      "é impossível, por violar a primeira lei.",
      "já foi construído em laboratório.",
      "é impossível, por violar a segunda lei.",
      "funciona apenas em temperaturas muito baixas.",
    ],
    correta: 3,
    explicacao:
      "Esse dispositivo não violaria a conservação da energia, mas contraria o enunciado de Kelvin-Planck: nenhuma máquina cíclica converte todo o calor de uma única fonte em trabalho. O moto-perpétuo de primeira espécie, este sim, violaria a primeira lei.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal tem sua temperatura absoluta duplicada em um recipiente de volume constante. A pressão do gás, nessa transformação:",
    opcoes: [
      "permanece constante.",
      "fica reduzida à metade.",
      "fica duplicada.",
      "fica quadruplicada.",
      "torna-se nula.",
    ],
    correta: 2,
    explicacao:
      "Na transformação isovolumétrica, pressão e temperatura absoluta são diretamente proporcionais, conforme a lei de Gay-Lussac. Dobrar a temperatura em kelvin dobra a pressão. É por isso que latas de aerossol trazem advertência contra exposição ao calor.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Ao analisar um processo espontâneo em um sistema isolado, a segunda lei da termodinâmica prevê que a entropia:",
    opcoes: [
      "sempre diminui.",
      "permanece rigorosamente constante.",
      "aumenta ou permanece constante, nunca diminui.",
      "oscila periodicamente.",
      "torna-se negativa.",
    ],
    correta: 2,
    explicacao:
      "Processos reversíveis ideais mantêm a entropia constante; processos reais, sempre irreversíveis em algum grau, a aumentam. Um copo quebrado não se remonta espontaneamente porque isso reduziria a entropia do universo.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um refrigerador ideal opera retirando 600 J da fonte fria com consumo de 200 J de trabalho. O calor rejeitado ao ambiente é de:",
    opcoes: [
      "200 J",
      "400 J",
      "600 J",
      "800 J",
      "1 200 J",
    ],
    correta: 3,
    explicacao:
      "Pela conservação da energia, o calor rejeitado é a soma do retirado com o trabalho consumido: 600 + 200 = 800 J. É por isso que a parte de trás da geladeira aquece o ambiente mais do que o interior resfria — a energia elétrica também vira calor.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Sobre o significado físico do trabalho realizado por um gás, é correto afirmar que ele é positivo quando o gás:",
    opcoes: [
      "se expande, empurrando a vizinhança.",
      "é comprimido por uma força externa.",
      "mantém seu volume constante.",
      "recebe calor sem variar de volume.",
      "tem sua temperatura reduzida.",
    ],
    correta: 0,
    explicacao:
      "Na expansão, o gás desloca o êmbolo e transfere energia para fora, o que caracteriza trabalho positivo realizado por ele. Na compressão, o trabalho do gás é negativo, porque a vizinhança é que fornece energia ao sistema.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás sofre transformação cíclica cujo diagrama de pressão por volume delimita uma área de 400 J, percorrida no sentido horário. O trabalho líquido produzido por ciclo é de:",
    opcoes: [
      "−400 J",
      "zero",
      "200 J",
      "400 J",
      "800 J",
    ],
    correta: 3,
    explicacao:
      "A área interna do ciclo corresponde ao trabalho líquido, e o sentido horário indica que ele é positivo: o sistema produz trabalho. Percorrido no sentido anti-horário, o ciclo consumiria trabalho, como acontece em refrigeradores.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Ao afirmar que a energia interna é uma função de estado, a termodinâmica indica que seu valor depende:",
    opcoes: [
      "do caminho percorrido pelo sistema.",
      "do tempo total do processo.",
      "da quantidade de trabalho já realizada.",
      "da máquina utilizada no experimento.",
      "apenas do estado atual do sistema.",
    ],
    correta: 4,
    explicacao:
      "Duas transformações diferentes que levem ao mesmo estado final produzem a mesma energia interna. Calor e trabalho, ao contrário, dependem do caminho: são funções de processo. Essa distinção é central na termodinâmica.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina térmica opera entre uma fonte a 400 K e outra a 300 K. O rendimento máximo teórico dessa máquina é de:",
    opcoes: [
      "10%",
      "33%",
      "50%",
      "75%",
      "25%",
    ],
    correta: 4,
    explicacao:
      "Aplicando o rendimento de Carnot: 1 − 300/400 = 0,25, ou 25%. Aproximar as temperaturas das fontes reduz o rendimento máximo. Por isso usinas buscam vapor a temperaturas cada vez mais altas.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Em uma transformação isotérmica de um gás ideal que recebe 400 J de calor, o trabalho realizado pelo gás é de:",
    opcoes: [
      "zero",
      "200 J",
      "800 J",
      "−400 J",
      "400 J",
    ],
    correta: 4,
    explicacao:
      "Com temperatura constante, ΔU = 0 e a primeira lei fica Q = W. Todo o calor recebido converte-se em trabalho: 400 J. Esse é o único caso em que a conversão de calor em trabalho é integral — mas ele não constitui um ciclo, e por isso não viola a segunda lei.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um ar-condicionado instalado em uma janela retira calor do ambiente interno. Em relação ao ambiente externo, esse aparelho:",
    opcoes: [
      "rejeita calor, aquecendo a área externa.",
      "também resfria a área externa.",
      "não troca energia com o exterior.",
      "reduz a entropia total do universo.",
      "converte calor integralmente em eletricidade.",
    ],
    correta: 0,
    explicacao:
      "O calor retirado do interior, somado à energia elétrica consumida, é despejado no ambiente externo. É por isso que ruas com muitos aparelhos ficam mais quentes. Nenhum equipamento elimina calor: ele apenas o transfere de lugar.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás realiza 250 J de trabalho ao se expandir e, simultaneamente, sua energia interna diminui 150 J. O calor trocado nesse processo foi de:",
    opcoes: [
      "−400 J",
      "−100 J",
      "250 J",
      "400 J",
      "100 J",
    ],
    correta: 4,
    explicacao:
      "Da primeira lei, Q = ΔU + W = (−150) + 250 = 100 J. O gás recebeu 100 J de calor, mas realizou trabalho maior que isso, complementando a diferença com a própria energia interna — o que reduziu sua temperatura.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Sobre a relação entre as duas primeiras leis da termodinâmica, é correto afirmar que a primeira lei trata:",
    opcoes: [
      "do sentido dos processos, e a segunda, da conservação da energia.",
      "apenas de gases ideais, e a segunda, de líquidos.",
      "exclusivamente de máquinas térmicas.",
      "da temperatura absoluta, e a segunda, da pressão.",
      "da conservação da energia, e a segunda, do sentido dos processos.",
    ],
    correta: 4,
    explicacao:
      "A primeira lei diz que a energia se conserva, mas não impede processos que nunca ocorrem, como calor fluindo espontaneamente do frio para o quente. A segunda lei estabelece essa direção preferencial e introduz a entropia como critério.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma bomba de calor usada para aquecimento residencial funciona, essencialmente, como:",
    opcoes: [
      "uma máquina térmica que converte calor em trabalho.",
      "um aquecedor de resistência elétrica comum.",
      "um sistema que cria energia a partir do nada.",
      "um dispositivo que reduz a entropia do universo.",
      "um refrigerador operando em sentido inverso, retirando calor do exterior.",
    ],
    correta: 4,
    explicacao:
      "A bomba de calor retira energia térmica do ambiente externo, ainda que frio, e a entrega ao interior, consumindo trabalho. Como aproveita calor já existente, pode entregar mais energia térmica do que a elétrica consumida — sem violar lei alguma.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "A lei de Charles e Gay-Lussac, aplicada a um gás ideal sob pressão constante, estabelece que volume e temperatura absoluta são:",
    opcoes: [
      "inversamente proporcionais.",
      "independentes entre si.",
      "sempre numericamente iguais.",
      "relacionados de forma quadrática.",
      "diretamente proporcionais.",
    ],
    correta: 4,
    explicacao:
      "Com pressão constante, V/T permanece constante: aquecer o gás o expande na mesma proporção. É o que faz um balão de festa murchar ao ser levado para um ambiente frio. A temperatura precisa estar em kelvin para a proporção valer.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Comparando o rendimento de uma máquina térmica ao aumentar a temperatura da fonte quente, mantendo a fonte fria, verifica-se que o rendimento máximo:",
    opcoes: [
      "diminui.",
      "permanece constante.",
      "torna-se negativo.",
      "atinge necessariamente 100%.",
      "aumenta.",
    ],
    correta: 4,
    explicacao:
      "Como o rendimento de Carnot é 1 − T_fria/T_quente, elevar a temperatura da fonte quente reduz a fração e aumenta o rendimento. O limite de 100% exigiria fonte fria no zero absoluto, o que é inatingível. É por isso que usinas modernas trabalham com vapor supercrítico.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Em um motor de quatro tempos, a etapa em que ocorre a maior conversão de calor em trabalho mecânico é a de:",
    opcoes: [
      "admissão",
      "compressão",
      "escapamento",
      "resfriamento",
      "expansão após a combustão",
    ],
    correta: 4,
    explicacao:
      "A queima do combustível eleva a pressão e o gás quente empurra o pistão, realizando trabalho. As demais etapas preparam o ciclo ou expulsam os gases. É por isso que essa etapa é chamada de tempo motor.",
  },
  {
    materia: "fisica",
    tema: "Termodinâmica e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina térmica com rendimento de 40% recebe 5 000 J de calor por ciclo. O trabalho útil produzido por ciclo é de:",
    opcoes: [
      "500 J",
      "1 250 J",
      "3 000 J",
      "5 000 J",
      "2 000 J",
    ],
    correta: 4,
    explicacao:
      "O trabalho é 0,40 · 5 000 = 2 000 J, e os 3 000 J restantes são rejeitados para a fonte fria. Rendimentos dessa ordem só são atingidos por máquinas bem projetadas, operando com grande diferença entre as temperaturas das fontes.",
  },
];
