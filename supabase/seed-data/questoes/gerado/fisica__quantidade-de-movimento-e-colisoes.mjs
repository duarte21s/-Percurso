/* Quantidade de movimento e colisões (50 questões).
   Impulso, quantidade de movimento, conservação em sistemas isolados,
   colisões elásticas, inelásticas e parcialmente elásticas.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "facil",
    enunciado:
      "Um corpo de 5 kg move-se com velocidade de 4 m/s. A quantidade de movimento desse corpo é de:",
    opcoes: [
      "0,8 kg·m/s",
      "9 kg·m/s",
      "20 kg·m/s",
      "40 kg·m/s",
      "80 kg·m/s",
    ],
    correta: 2,
    explicacao:
      "A quantidade de movimento é o produto da massa pela velocidade: Q = 5 · 4 = 20 kg·m/s. É grandeza vetorial, com a mesma direção e sentido da velocidade. Sua unidade no SI é o quilograma vezes metro por segundo.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Uma força constante de 50 N atua sobre um corpo durante 4 s. O impulso dessa força é de:",
    opcoes: [
      "12,5 N·s",
      "46 N·s",
      "54 N·s",
      "200 N·s",
      "800 N·s",
    ],
    correta: 3,
    explicacao:
      "O impulso é o produto da força pelo intervalo de tempo: I = 50 · 4 = 200 N·s. Ele é numericamente igual à variação da quantidade de movimento do corpo, resultado conhecido como teorema do impulso. As duas grandezas têm unidades equivalentes.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "O teorema do impulso estabelece que o impulso da força resultante sobre um corpo é igual:",
    opcoes: [
      "à energia cinética final do corpo.",
      "à variação da quantidade de movimento do corpo.",
      "ao trabalho realizado pela força.",
      "à potência média desenvolvida.",
      "à massa multiplicada pela aceleração.",
    ],
    correta: 1,
    explicacao:
      "O teorema afirma que I = ΔQ. Ele explica por que um airbag reduz lesões: a variação da quantidade de movimento é a mesma, mas o tempo maior de contato diminui a força envolvida. Alongar o tempo de interação é o princípio de todos os dispositivos de amortecimento.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 2 kg tem sua velocidade alterada de 3 m/s para 8 m/s, na mesma direção e sentido. A variação da quantidade de movimento foi de:",
    opcoes: [
      "5 kg·m/s",
      "10 kg·m/s",
      "16 kg·m/s",
      "22 kg·m/s",
      "6 kg·m/s",
    ],
    correta: 1,
    explicacao:
      "A variação é ΔQ = m·Δv = 2 · (8 − 3) = 10 kg·m/s. Como as velocidades têm o mesmo sentido, basta a diferença aritmética. Se o corpo invertesse o sentido, as velocidades entrariam com sinais opostos e a variação seria maior.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Uma bola de 0,5 kg atinge uma parede a 6 m/s e retorna a 4 m/s na direção oposta. O módulo da variação da quantidade de movimento da bola é de:",
    opcoes: [
      "1 kg·m/s",
      "2 kg·m/s",
      "3 kg·m/s",
      "5 kg·m/s",
      "10 kg·m/s",
    ],
    correta: 3,
    explicacao:
      "Adotando o sentido inicial como positivo: Q inicial = +3 kg·m/s e Q final = −2 kg·m/s. A variação é −2 − 3 = −5, cujo módulo é 5 kg·m/s. Ignorar a inversão de sentido levaria a 1 kg·m/s, que é o erro mais comum nesse tipo de problema.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Em um sistema isolado, a quantidade de movimento total permanece constante. Um sistema é considerado isolado quando:",
    opcoes: [
      "a resultante das forças externas sobre ele é nula.",
      "não há forças internas entre seus corpos.",
      "todos os corpos estão em repouso.",
      "a energia cinética total é nula.",
      "não existe atrito entre os corpos.",
    ],
    correta: 0,
    explicacao:
      "Forças internas entre os corpos do sistema formam pares ação-reação e se cancelam no somatório. O que pode alterar a quantidade de movimento total é uma força externa resultante. Em colisões rápidas, forças externas como o peso costumam ser desprezíveis diante das forças de impacto.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Dois carrinhos de 2 kg e 3 kg movem-se um ao encontro do outro a 6 m/s e 4 m/s, respectivamente, e ficam unidos após a colisão. A velocidade do conjunto após o choque é de:",
    opcoes: [
      "0 m/s",
      "0,5 m/s",
      "1 m/s",
      "2 m/s",
      "5 m/s",
    ],
    correta: 0,
    explicacao:
      "Adotando o sentido do primeiro como positivo: Q total = 2 · 6 + 3 · (−4) = 12 − 12 = 0. Como a quantidade de movimento se conserva e o conjunto tem 5 kg, a velocidade final é zero. Toda a energia cinética inicial converteu-se em outras formas — é uma colisão perfeitamente inelástica.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Uma colisão é classificada como perfeitamente inelástica quando, após o choque, os corpos:",
    opcoes: [
      "separam-se com velocidades iguais em módulo.",
      "seguem unidos, com a mesma velocidade.",
      "conservam integralmente a energia cinética.",
      "invertem seus sentidos de movimento.",
      "permanecem ambos em repouso.",
    ],
    correta: 1,
    explicacao:
      "Na colisão perfeitamente inelástica os corpos permanecem juntos após o impacto, o que corresponde ao caso de máxima perda de energia cinética. A quantidade de movimento, porém, continua se conservando. O coeficiente de restituição vale zero nesse tipo de choque.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Em uma colisão perfeitamente elástica entre dois corpos, conservam-se:",
    opcoes: [
      "apenas a quantidade de movimento.",
      "apenas a energia cinética.",
      "a quantidade de movimento e a energia cinética.",
      "somente a energia potencial.",
      "nenhuma grandeza física.",
    ],
    correta: 2,
    explicacao:
      "A colisão elástica é um caso ideal em que não há dissipação: as duas grandezas se conservam. Colisões entre bolas de bilhar se aproximam bastante desse modelo, e choques entre moléculas de gás ideal são tratados como perfeitamente elásticos. Na prática macroscópica, sempre há alguma perda.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de 4 kg a 5 m/s colide frontalmente com outro de 1 kg em repouso, e os dois seguem unidos. A velocidade do conjunto após o choque é de:",
    opcoes: [
      "1 m/s",
      "2 m/s",
      "4 m/s",
      "5 m/s",
      "20 m/s",
    ],
    correta: 2,
    explicacao:
      "A quantidade de movimento inicial é 4 · 5 = 20 kg·m/s, e a massa final é 5 kg: v = 20/5 = 4 m/s. A energia cinética caiu de 50 J para 40 J, e a diferença foi dissipada. Esse é o padrão das colisões inelásticas.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um airbag reduz a gravidade das lesões em uma colisão porque:",
    opcoes: [
      "diminui a variação da quantidade de movimento do passageiro.",
      "aumenta o tempo de interação, reduzindo a força média.",
      "elimina completamente a desaceleração do corpo.",
      "reduz a massa do passageiro durante o impacto.",
      "aumenta a energia cinética dissipada pelo veículo.",
    ],
    correta: 1,
    explicacao:
      "A variação da quantidade de movimento é determinada pela velocidade inicial e final, e o airbag não a altera. O que ele faz é prolongar o tempo em que essa variação ocorre, e como I = F·Δt, a força média cai. O mesmo princípio explica capacetes e zonas de deformação dos veículos.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um projétil de 0,02 kg é disparado a 400 m/s por um rifle de 4 kg inicialmente em repouso. A velocidade de recuo do rifle é de:",
    opcoes: [
      "0,2 m/s",
      "1 m/s",
      "2 m/s",
      "8 m/s",
      "20 m/s",
    ],
    correta: 2,
    explicacao:
      "A quantidade de movimento inicial é nula, então 0,02 · 400 = 4 · v, o que dá v = 2 m/s em sentido oposto. O rifle recua com velocidade bem menor porque sua massa é muito maior. É o mesmo princípio da propulsão de foguetes.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Sobre o coeficiente de restituição em uma colisão, é correto afirmar que ele vale:",
    opcoes: [
      "1 nas colisões perfeitamente elásticas e 0 nas perfeitamente inelásticas.",
      "0 nas colisões elásticas e 1 nas inelásticas.",
      "sempre 1, em qualquer tipo de colisão.",
      "sempre maior que 1.",
      "sempre negativo.",
    ],
    correta: 0,
    explicacao:
      "O coeficiente é a razão entre a velocidade relativa de afastamento e a de aproximação. Vale 1 quando não há perda de energia cinética e 0 quando os corpos seguem juntos. Valores intermediários caracterizam colisões parcialmente elásticas, o caso mais comum na prática.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Dois patinadores de 60 kg e 40 kg, inicialmente em repouso e abraçados sobre gelo sem atrito, empurram-se mutuamente. Se o de 60 kg adquire 2 m/s, a velocidade do outro será de:",
    opcoes: [
      "1 m/s",
      "2 m/s",
      "3 m/s",
      "4 m/s",
      "6 m/s",
    ],
    correta: 2,
    explicacao:
      "A quantidade de movimento total permanece nula: 60 · 2 = 40 · v, logo v = 3 m/s em sentido oposto. O corpo de menor massa adquire maior velocidade. A energia cinética total aumentou, vinda da energia muscular dos patinadores — a quantidade de movimento, porém, continuou nula.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Uma bola de 0,4 kg cai e atinge o chão a 5 m/s, quicando de volta a 3 m/s. O módulo do impulso recebido do chão foi de:",
    opcoes: [
      "0,8 N·s",
      "1,2 N·s",
      "2 N·s",
      "3,2 N·s",
      "8 N·s",
    ],
    correta: 3,
    explicacao:
      "Considerando o sentido de subida como positivo: Q final = +1,2 e Q inicial = −2, então ΔQ = 1,2 − (−2) = 3,2 kg·m/s. O impulso é numericamente igual a essa variação. Novamente, atenção aos sinais: o corpo inverte o sentido.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Em uma colisão parcialmente elástica, é correto afirmar que:",
    opcoes: [
      "a quantidade de movimento se conserva e a energia cinética diminui.",
      "a energia cinética se conserva e a quantidade de movimento diminui.",
      "as duas grandezas se conservam integralmente.",
      "nenhuma das duas grandezas se conserva.",
      "os corpos permanecem unidos após o choque.",
    ],
    correta: 0,
    explicacao:
      "A quantidade de movimento se conserva em qualquer colisão de sistema isolado, independentemente do tipo. A energia cinética, porém, só se conserva no caso perfeitamente elástico. Nas parcialmente elásticas, parte dela vira calor, som e deformação, e os corpos se separam.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Dois corpos de mesma massa deslocam-se no mesmo sentido, com velocidades de 8 m/s e 2 m/s, e colidem ficando unidos. A velocidade final do conjunto é de:",
    opcoes: [
      "2 m/s",
      "3 m/s",
      "5 m/s",
      "8 m/s",
      "10 m/s",
    ],
    correta: 2,
    explicacao:
      "Com massas iguais, a velocidade final é a média das velocidades iniciais: (8 + 2)/2 = 5 m/s. Formalmente, m·8 + m·2 = 2m·v, e a massa se cancela. Esse resultado vale sempre que as massas são iguais e o choque é perfeitamente inelástico.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Um caminhão e um carro colidem frontalmente. Sobre as forças de interação durante o choque, é correto afirmar que:",
    opcoes: [
      "o caminhão exerce força maior sobre o carro.",
      "as forças têm o mesmo módulo, mas o carro sofre maior aceleração.",
      "o carro exerce força maior, por ter menor massa.",
      "não há forças entre os veículos durante o choque.",
      "as forças dependem apenas da velocidade de cada um.",
    ],
    correta: 1,
    explicacao:
      "Pela terceira lei de Newton, as forças de interação são iguais em módulo. Como a aceleração é a força dividida pela massa, o veículo mais leve sofre desaceleração muito maior — e é por isso que seus ocupantes correm mais risco. A assimetria está na massa, não na força.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 3 kg em repouso recebe um impulso de 12 N·s. A velocidade adquirida por esse corpo é de:",
    opcoes: [
      "0,25 m/s",
      "4 m/s",
      "9 m/s",
      "15 m/s",
      "36 m/s",
    ],
    correta: 1,
    explicacao:
      "Partindo do repouso, o impulso iguala a quantidade de movimento final: 12 = 3 · v, logo v = 4 m/s. O teorema do impulso permite resolver o problema sem conhecer a força nem o tempo separadamente, apenas seu produto.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um jogador de futebol amortece a bola recuando o pé no momento do contato. Essa técnica é eficaz porque:",
    opcoes: [
      "reduz a massa efetiva da bola.",
      "aumenta o tempo de contato, reduzindo a força sobre o pé.",
      "elimina a quantidade de movimento da bola.",
      "aumenta a energia cinética da bola.",
      "inverte o sentido da força de reação.",
    ],
    correta: 1,
    explicacao:
      "Recuar o pé prolonga o intervalo em que a bola é desacelerada. Como o impulso necessário é o mesmo, um tempo maior implica força média menor. É o mesmo princípio de flexionar os joelhos ao aterrissar de um salto.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Um vagão de 2 000 kg move-se a 3 m/s e acopla-se a outro de 4 000 kg em repouso. A velocidade do conjunto após o acoplamento é de:",
    opcoes: [
      "0,5 m/s",
      "1 m/s",
      "1,5 m/s",
      "2 m/s",
      "3 m/s",
    ],
    correta: 1,
    explicacao:
      "A quantidade de movimento inicial é 2 000 · 3 = 6 000 kg·m/s, e a massa total é 6 000 kg: v = 1 m/s. A energia cinética caiu de 9 000 J para 3 000 J, com dois terços dissipados no acoplamento. Isso é típico de choques perfeitamente inelásticos.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "A quantidade de movimento de um corpo é uma grandeza vetorial. Isso significa que ela:",
    opcoes: [
      "possui apenas módulo, sem direção definida.",
      "possui módulo, direção e sentido.",
      "é sempre positiva, independentemente do movimento.",
      "não pode ser somada com outras quantidades de movimento.",
      "tem a mesma unidade da energia cinética.",
    ],
    correta: 1,
    explicacao:
      "Por ser o produto da massa, escalar, pela velocidade, vetorial, a quantidade de movimento herda direção e sentido da velocidade. Em problemas unidimensionais, isso se traduz em sinais positivos e negativos. Em duas dimensões, é preciso decompor por eixos.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Uma granada em repouso explode em dois fragmentos. Sobre as quantidades de movimento dos fragmentos, é correto afirmar que elas:",
    opcoes: [
      "são iguais em módulo e sentido.",
      "são iguais em módulo e opostas em sentido.",
      "são ambas nulas.",
      "dependem apenas da energia liberada.",
      "somam-se resultando em valor positivo.",
    ],
    correta: 1,
    explicacao:
      "Como a quantidade de movimento inicial é nula e o sistema é isolado, a soma final também precisa ser nula: os fragmentos partem em sentidos opostos com mesmo módulo. O fragmento mais leve adquire maior velocidade. A energia cinética total, ao contrário, aumenta, vinda da energia química do explosivo.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 10 kg move-se a 2 m/s e outro de 5 kg move-se a 4 m/s no mesmo sentido. A quantidade de movimento total do sistema é de:",
    opcoes: [
      "10 kg·m/s",
      "20 kg·m/s",
      "30 kg·m/s",
      "40 kg·m/s",
      "60 kg·m/s",
    ],
    correta: 3,
    explicacao:
      "Somando: 10 · 2 + 5 · 4 = 20 + 20 = 40 kg·m/s. Como os dois se movem no mesmo sentido, os valores se somam diretamente. Em sentidos opostos, um deles entraria com sinal negativo.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Em uma colisão elástica frontal entre dois corpos de massas iguais, em que um está em repouso, o resultado observado é que:",
    opcoes: [
      "o corpo incidente para e o outro parte com a velocidade inicial.",
      "os dois seguem juntos com metade da velocidade inicial.",
      "ambos permanecem em repouso.",
      "o corpo incidente retorna com a mesma velocidade.",
      "os dois se movem no mesmo sentido com velocidades iguais.",
    ],
    correta: 0,
    explicacao:
      "A conservação simultânea da quantidade de movimento e da energia cinética conduz a essa troca completa de velocidades. É o comportamento observado no berço de Newton e em colisões frontais de bolas de bilhar de mesma massa. Se as massas fossem diferentes, o resultado seria outro.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um martelo de 1 kg atinge um prego a 8 m/s e para em 0,01 s. A força média exercida sobre o prego é de:",
    opcoes: [
      "80 N",
      "160 N",
      "400 N",
      "800 N",
      "8 000 N",
    ],
    correta: 3,
    explicacao:
      "A variação da quantidade de movimento é 1 · 8 = 8 kg·m/s, e F = ΔQ/Δt = 8/0,01 = 800 N. O tempo curtíssimo de contato é o que produz forças tão altas — princípio de funcionamento de martelos e marretas.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "As zonas de deformação programada nos veículos modernos aumentam a segurança porque:",
    opcoes: [
      "aumentam o tempo de colisão, reduzindo a força sobre os ocupantes.",
      "tornam o veículo mais rígido durante o impacto.",
      "eliminam a variação da quantidade de movimento.",
      "reduzem a massa total do veículo.",
      "aumentam a velocidade final após o choque.",
    ],
    correta: 0,
    explicacao:
      "Ao se deformar, a estrutura prolonga o intervalo de desaceleração e absorve energia. Um veículo perfeitamente rígido transferiria toda a desaceleração aos ocupantes em tempo mínimo, com força enorme. A cabine, porém, é projetada para permanecer rígida, protegendo o espaço de sobrevivência.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 1 kg move-se a 10 m/s e colide com outro de 4 kg em repouso, ficando os dois unidos. A energia cinética dissipada na colisão foi de:",
    opcoes: [
      "10 J",
      "20 J",
      "30 J",
      "40 J",
      "50 J",
    ],
    correta: 3,
    explicacao:
      "A velocidade final é 10/5 = 2 m/s. A energia cinética inicial é 1 · 100/2 = 50 J e a final é 5 · 4/2 = 10 J, então 40 J foram dissipados. Note que a quantidade de movimento se conservou integralmente, mas a energia cinética não.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "A unidade da quantidade de movimento no Sistema Internacional é:",
    opcoes: [
      "kg·m/s",
      "N/s",
      "J/s",
      "kg/m",
      "m/s²",
    ],
    correta: 0,
    explicacao:
      "A unidade decorre do produto de massa por velocidade: kg vezes m/s. Ela é equivalente ao newton vezes segundo, unidade do impulso — coerência esperada, já que impulso e variação de quantidade de movimento são numericamente iguais.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 6 kg desloca-se a 5 m/s quando recebe um impulso de 30 N·s no mesmo sentido do movimento. Sua velocidade final será de:",
    opcoes: [
      "5 m/s",
      "8 m/s",
      "10 m/s",
      "12 m/s",
      "35 m/s",
    ],
    correta: 2,
    explicacao:
      "A quantidade de movimento inicial é 30 kg·m/s e o impulso acrescenta mais 30, totalizando 60. Dividindo pela massa: 60/6 = 10 m/s. Se o impulso fosse contrário ao movimento, a quantidade de movimento final seria nula.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Ao saltar de um barco pequeno para o cais, uma pessoa observa que o barco se afasta. Esse fenômeno é explicado:",
    opcoes: [
      "pela conservação da quantidade de movimento do sistema.",
      "pela conservação da energia potencial.",
      "pelo princípio de Arquimedes.",
      "pela lei de Hooke.",
      "pelo aumento da massa do barco.",
    ],
    correta: 0,
    explicacao:
      "Como a quantidade de movimento inicial do conjunto era nula, o avanço da pessoa exige um recuo do barco de mesmo módulo. Por isso é preciso cuidado ao desembarcar de embarcações leves. O mesmo raciocínio explica o recuo de armas de fogo.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Dois corpos colidem em uma superfície horizontal com atrito desprezível. Comparando as situações antes e depois do choque, conserva-se necessariamente:",
    opcoes: [
      "a energia cinética total.",
      "a velocidade de cada corpo.",
      "a quantidade de movimento total.",
      "a energia potencial gravitacional de cada corpo.",
      "a força de interação entre os corpos.",
    ],
    correta: 2,
    explicacao:
      "A quantidade de movimento se conserva em qualquer colisão de sistema isolado, seja ela elástica, inelástica ou parcialmente elástica. A energia cinética só se conserva no caso elástico ideal. É essa universalidade que torna a conservação da quantidade de movimento tão útil.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 0,15 kg é rebatido por uma raquete, invertendo o sentido de seu movimento de 20 m/s para 25 m/s. O módulo da variação da quantidade de movimento foi de:",
    opcoes: [
      "0,75 kg·m/s",
      "3 kg·m/s",
      "5 kg·m/s",
      "6,75 kg·m/s",
      "45 kg·m/s",
    ],
    correta: 3,
    explicacao:
      "Com inversão de sentido: ΔQ = 0,15 · 25 − 0,15 · (−20) = 3,75 + 3 = 6,75 kg·m/s. Somar os módulos das velocidades, e não subtrair, é o procedimento correto quando há inversão. O impulso da raquete tem exatamente esse valor.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Comparando dois corpos de mesma quantidade de movimento, mas massas diferentes, é correto afirmar que:",
    opcoes: [
      "o mais pesado tem maior velocidade.",
      "ambos têm a mesma velocidade.",
      "o mais leve tem maior velocidade.",
      "ambos têm a mesma energia cinética.",
      "o mais leve tem menor energia cinética.",
    ],
    correta: 2,
    explicacao:
      "Se Q = m·v é igual para os dois, menor massa implica maior velocidade. Além disso, como Ec = Q²/(2m), o corpo mais leve também tem maior energia cinética. É por isso que um projétil leve e veloz pode causar mais dano que um objeto pesado e lento de mesmo Q.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 2 kg recebe uma força variável cujo impulso total é de 16 N·s, partindo do repouso. Sua energia cinética final é de:",
    opcoes: [
      "8 J",
      "16 J",
      "32 J",
      "64 J",
      "128 J",
    ],
    correta: 3,
    explicacao:
      "A quantidade de movimento final é 16 kg·m/s, então v = 16/2 = 8 m/s. A energia cinética é 2 · 64/2 = 64 J. O impulso permite obter a velocidade mesmo sem conhecer o detalhe de como a força variou no tempo.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Em um pêndulo balístico, um projétil se aloja em um bloco suspenso e o conjunto sobe. Para analisar corretamente esse experimento, deve-se aplicar:",
    opcoes: [
      "conservação da energia cinética durante todo o processo.",
      "conservação da energia mecânica no choque e da quantidade de movimento na subida.",
      "conservação da quantidade de movimento no choque e da energia mecânica na subida.",
      "apenas a segunda lei de Newton.",
      "apenas a conservação da energia potencial.",
    ],
    correta: 2,
    explicacao:
      "O choque é perfeitamente inelástico e dissipa energia cinética, mas conserva a quantidade de movimento. Já a subida ocorre sem dissipação relevante, o que permite usar a conservação da energia mecânica. Separar as duas etapas é o passo decisivo desse problema clássico.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 5 kg move-se a 6 m/s para a direita e outro de 5 kg a 6 m/s para a esquerda. A quantidade de movimento total do sistema é de:",
    opcoes: [
      "zero",
      "30 kg·m/s",
      "60 kg·m/s",
      "10 kg·m/s",
      "12 kg·m/s",
    ],
    correta: 0,
    explicacao:
      "Os vetores têm mesmo módulo e sentidos opostos, então se cancelam: 30 − 30 = 0. A energia cinética total, porém, não é nula — vale 180 J. Isso mostra que quantidade de movimento nula não implica sistema em repouso.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Ao aterrissar de um salto, flexionar os joelhos é recomendado porque essa ação:",
    opcoes: [
      "reduz a quantidade de movimento do corpo antes do contato.",
      "elimina a aceleração da gravidade.",
      "aumenta a energia cinética dissipada pelo solo.",
      "reduz a massa efetiva do corpo.",
      "aumenta o tempo de desaceleração, diminuindo a força sobre as articulações.",
    ],
    correta: 4,
    explicacao:
      "A variação da quantidade de movimento é fixada pela velocidade de chegada; o que se pode controlar é o tempo em que ela ocorre. Flexionar os joelhos prolonga esse tempo e reduz a força média sobre ossos e articulações. Aterrissar com as pernas rígidas concentra a mesma variação em um intervalo mínimo.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de 3 kg a 4 m/s colide com outro de 2 kg a 1 m/s no mesmo sentido, e após o choque o primeiro passa a 2 m/s. A velocidade do segundo corpo após a colisão é de:",
    opcoes: [
      "1 m/s",
      "2 m/s",
      "3 m/s",
      "4 m/s",
      "5 m/s",
    ],
    correta: 3,
    explicacao:
      "A quantidade de movimento inicial é 3 · 4 + 2 · 1 = 14 kg·m/s. Após o choque: 3 · 2 + 2 · v = 14, logo 2v = 8 e v = 4 m/s. A conservação permite determinar a velocidade desconhecida sem qualquer informação sobre as forças envolvidas.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Sobre a relação entre impulso e quantidade de movimento, é correto afirmar que:",
    opcoes: [
      "impulso é grandeza escalar e quantidade de movimento é vetorial.",
      "impulso é medido em joules e quantidade de movimento em watts.",
      "as duas grandezas não têm relação entre si.",
      "impulso depende apenas da massa do corpo.",
      "ambas são vetoriais e têm unidades equivalentes.",
    ],
    correta: 4,
    explicacao:
      "Impulso resulta de força vezes tempo e quantidade de movimento, de massa vezes velocidade; ambos são vetores e se medem em N·s ou kg·m/s, unidades equivalentes. O teorema do impulso estabelece que um é igual à variação do outro.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um foguete no espaço acelera expelindo gases. Esse movimento é possível porque:",
    opcoes: [
      "os gases empurram o ar externo.",
      "a energia cinética do foguete é criada do nada.",
      "a massa do foguete permanece constante.",
      "há atrito entre o foguete e o vácuo.",
      "a quantidade de movimento total do sistema se conserva.",
    ],
    correta: 4,
    explicacao:
      "Ao expelir gases para trás com certa quantidade de movimento, o foguete adquire quantidade de movimento igual e oposta. Não é necessário meio externo para empurrar — o que confunde muita gente. É a aplicação mais pura da conservação em sistemas isolados.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Uma bola de 0,25 kg é lançada a 12 m/s. Sua quantidade de movimento é de:",
    opcoes: [
      "0,02 kg·m/s",
      "12 kg·m/s",
      "36 kg·m/s",
      "48 kg·m/s",
      "3 kg·m/s",
    ],
    correta: 4,
    explicacao:
      "Multiplicando: 0,25 · 12 = 3 kg·m/s. A direção e o sentido coincidem com os da velocidade da bola. Para deter essa bola, seria necessário um impulso de mesmo módulo em sentido contrário.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Em um sistema de dois corpos que colidem, a energia cinética total após o choque é sempre:",
    opcoes: [
      "maior que a inicial.",
      "exatamente igual à inicial.",
      "nula.",
      "igual à quantidade de movimento total.",
      "menor ou igual à inicial.",
    ],
    correta: 4,
    explicacao:
      "Colisões podem dissipar energia, mas não criá-la a partir do movimento dos corpos. No caso elástico ideal, a energia cinética se mantém; nos demais, diminui. A exceção seriam explosões, em que energia química interna é liberada — mas aí não se trata de uma colisão.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Um corpo de 8 kg tem quantidade de movimento de 24 kg·m/s. Sua velocidade é de:",
    opcoes: [
      "0,33 m/s",
      "16 m/s",
      "32 m/s",
      "192 m/s",
      "3 m/s",
    ],
    correta: 4,
    explicacao:
      "Isolando a velocidade: v = Q/m = 24/8 = 3 m/s. A quantidade de movimento cresce tanto com a massa quanto com a velocidade, o que significa que um caminhão lento pode ter Q maior que o de um carro rápido.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "O berço de Newton, brinquedo formado por esferas idênticas suspensas em contato, ilustra principalmente:",
    opcoes: [
      "a conservação simultânea da quantidade de movimento e da energia cinética.",
      "a dissipação total da energia em cada choque.",
      "a variação da massa durante as colisões.",
      "a ausência de forças entre as esferas.",
      "o aumento contínuo da energia do sistema.",
    ],
    correta: 0,
    explicacao:
      "Ao soltar uma esfera, apenas uma sobe do lado oposto — resultado que exige a conservação das duas grandezas. Se apenas a quantidade de movimento se conservasse, outras combinações seriam possíveis. Na prática, o movimento cessa depois de um tempo por causa de perdas por som e atrito.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Uma força de 200 N atua sobre um corpo durante 0,05 s. O impulso aplicado é de:",
    opcoes: [
      "4 N·s",
      "40 N·s",
      "100 N·s",
      "4 000 N·s",
      "10 N·s",
    ],
    correta: 4,
    explicacao:
      "Multiplicando: 200 · 0,05 = 10 N·s. Forças intensas aplicadas em tempos muito curtos são chamadas de forças impulsivas, típicas de colisões. O que determina o efeito sobre o movimento é o produto, e não cada fator isoladamente.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de 2 kg move-se a 5 m/s e colide com outro de 3 kg em repouso. Após uma colisão perfeitamente inelástica, a fração da energia cinética inicial que foi dissipada é de:",
    opcoes: [
      "20%",
      "40%",
      "50%",
      "80%",
      "60%",
    ],
    correta: 4,
    explicacao:
      "A velocidade final é 10/5 = 2 m/s. A energia inicial é 2 · 25/2 = 25 J e a final é 5 · 4/2 = 10 J, então 15 J foram dissipados, o que corresponde a 60%. Quanto maior a diferença entre as massas, maior a fração dissipada nesse tipo de choque.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "media",
    enunciado:
      "Sobre a conservação da quantidade de movimento em uma colisão entre dois veículos, é correto afirmar que ela vale:",
    opcoes: [
      "apenas se os veículos tiverem massas iguais.",
      "somente em colisões perfeitamente elásticas.",
      "apenas se não houver deformação dos veículos.",
      "somente quando um dos veículos está em repouso.",
      "para o sistema formado pelos dois veículos, durante o breve intervalo do choque.",
    ],
    correta: 4,
    explicacao:
      "Durante o impacto, as forças de interação entre os veículos são muito maiores que as forças externas, como o atrito com o solo, o que permite tratar o conjunto como sistema isolado. A conservação vale independentemente do tipo de colisão e das massas envolvidas.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "facil",
    enunciado:
      "Um carrinho de 2 kg se move com velocidade de 5 m/s. A quantidade de movimento (momento linear) desse carrinho, em módulo, vale:",
    opcoes: [
      "2,5 kg·m/s",
      "5 kg·m/s",
      "7 kg·m/s",
      "10 kg·m/s",
      "25 kg·m/s",
    ],
    correta: 3,
    explicacao:
      "A quantidade de movimento é o produto da massa pela velocidade: Q = m·v = 2 × 5 = 10 kg·m/s. Um erro comum é somar massa e velocidade em vez de multiplicá-las, o que daria 7 kg·m/s.",
  },
  {
    materia: "fisica",
    tema: "Quantidade de movimento e colisões",
    dificuldade: "dificil",
    enunciado:
      "Dois blocos, A de 3 kg e B de 2 kg, deslizam sobre uma superfície sem atrito em sentidos opostos: A com velocidade de 4 m/s e B com velocidade de 3 m/s. Após colidirem e permanecerem grudados (colisão perfeitamente inelástica), a velocidade final do conjunto é de:",
    opcoes: [
      "0,6 m/s no sentido de A",
      "1,2 m/s no sentido de B",
      "2,0 m/s no sentido de A",
      "3,5 m/s no sentido de A",
      "1,2 m/s no sentido de A",
    ],
    correta: 4,
    explicacao:
      "Adotando o sentido de A como positivo, a quantidade de movimento total antes do choque é (3×4) + (2×(−3)) = 12 − 6 = 6 kg·m/s. Como a massa final é 3+2=5 kg, a velocidade final é 6/5 = 1,2 m/s no sentido de A. Um erro comum é somar as velocidades sem considerar os sinais opostos, ignorando que os blocos se moviam em sentidos contrários.",
  },
];
