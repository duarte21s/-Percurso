/* Trabalho, energia e potência (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__trabalho-energia-e-potencia.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__trabalho-energia-e-potencia.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Uma força constante de 20 N, paralela ao deslocamento, empurra um caixote por 5 m. Qual é o trabalho realizado por essa força?",
    opcoes: [
      "100 J",
      "4 J",
      "25 J",
      "0,25 J",
      "200 J",
    ],
    correta: 0,
    explicacao:
      "Com força constante e na mesma direção e sentido do deslocamento, o trabalho é o produto dos dois: W = F · d = 20 · 5 = 100 J. Um joule é o trabalho de uma força de 1 N ao longo de 1 m.\n\n4 J divide a força pelo deslocamento. 25 J soma os dois números. 0,25 J divide o deslocamento pela força. E 200 J dobra o resultado. O trabalho depende só da força e do deslocamento na direção dela — não do tempo gasto nem da velocidade.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Uma pessoa puxa um carrinho por 4 m ao longo de um piso horizontal, com uma força de 50 N inclinada 60° em relação à horizontal. Qual é o trabalho realizado por essa força?",
    opcoes: [
      "100 J",
      "200 J",
      "173 J",
      "50 J",
      "25 J",
    ],
    correta: 0,
    explicacao:
      "Só a componente da força na direção do deslocamento realiza trabalho: F · cos 60° = 50 · 0,5 = 25 N. O trabalho é 25 · 4 = 100 J. A componente vertical, perpendicular ao deslocamento, não realiza trabalho.\n\n200 J usa a força inteira, 50 · 4, sem decompor. 173 J usa o seno de 60° no lugar do cosseno. 50 J aplica o cosseno duas vezes. E 25 J é a componente horizontal da força, 25 N, tomada como se fosse o trabalho.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Qual é a energia cinética de um corpo de 2 kg que se move a 3 m/s?",
    opcoes: [
      "9 J",
      "6 J",
      "18 J",
      "3 J",
      "36 J",
    ],
    correta: 0,
    explicacao:
      "A energia cinética é Ec = mv²/2 = 2 · 3²/2 = 2 · 9/2 = 9 J. Ela cresce com o quadrado da velocidade: com o dobro da velocidade, o corpo teria o quádruplo da energia.\n\n6 J multiplica massa e velocidade — isso é a quantidade de movimento, 6 kg·m/s, e não a energia. 18 J esquece de dividir por 2. 3 J divide mv por 2, sem elevar a velocidade ao quadrado. E 36 J eleva ao quadrado o produto mv.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Qual é a energia potencial gravitacional de um corpo de 5 kg a 4 m de altura, em relação ao chão?",
    opcoes: [
      "200 J",
      "20 J",
      "50 J",
      "2.000 J",
      "100 J",
    ],
    correta: 0,
    explicacao:
      "A energia potencial gravitacional é Ep = mgh = 5 · 10 · 4 = 200 J. Ela é igual ao trabalho que o peso realiza quando o corpo desce os 4 m até o chão.\n\n20 J esquece o g (5 · 4). 50 J esquece a altura (5 · 10). 2.000 J multiplica por g duas vezes. E 100 J divide por 2, como na fórmula da energia cinética — mas a energia potencial gravitacional não tem esse fator.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Uma mola de constante elástica 200 N/m está comprimida 0,1 m. Qual é a energia potencial elástica armazenada nela?",
    opcoes: [
      "1 J",
      "2 J",
      "20 J",
      "10 J",
      "0,01 J",
    ],
    correta: 0,
    explicacao:
      "A energia elástica é Ee = kx²/2 = 200 · (0,1)²/2 = 200 · 0,01/2 = 1 J. É a área do triângulo sob o gráfico da força elástica, F = kx, entre 0 e 0,1 m: base 0,1 m e altura 20 N.\n\n2 J esquece de dividir por 2. 20 J multiplica k por x, que é a força elástica em newtons, e não a energia. 10 J divide essa força por 2, sem elevar a deformação ao quadrado. E 0,01 J é x², sem multiplicar pela constante.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Um motor realiza um trabalho de 600 J em 20 s. Qual é a sua potência média?",
    opcoes: [
      "30 W",
      "12.000 W",
      "620 W",
      "0,033 W",
      "580 W",
    ],
    correta: 0,
    explicacao:
      "Potência é o trabalho realizado por unidade de tempo: P = W/t = 600/20 = 30 W. Um watt é um joule por segundo.\n\n12.000 W multiplica o trabalho pelo tempo, em vez de dividir. 620 W soma os números. 0,033 W divide o tempo pelo trabalho. E 580 W os subtrai. O mesmo trabalho feito em menos tempo exigiria mais potência: em 10 s, seriam 60 W. Um watt equivale a erguer um corpo de 100 g a 1 m de altura a cada segundo.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Um corpo é abandonado do repouso a 5 m de altura. Desprezando a resistência do ar, com que velocidade ele chega ao chão?",
    opcoes: [
      "10 m/s",
      "100 m/s",
      "50 m/s",
      "7,07 m/s",
      "5 m/s",
    ],
    correta: 0,
    explicacao:
      "A energia potencial perdida vira energia cinética: mgh = mv²/2, e v = √(2gh) = √(2 · 10 · 5) = √100 = 10 m/s. O resultado não depende da massa do corpo.\n\n100 m/s é v², sem a raiz. 50 m/s é g · h, sem o fator 2 e sem a raiz. 7,07 m/s usa v² = gh, esquecendo o fator 2. E 5 m/s confunde a altura, em metros, com a velocidade. Conferindo pela cinemática: a queda dura t = √(2h/g) = 1 s, e v = gt = 10 m/s.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Um corpo de 3 kg cai 2 m. Qual é o trabalho realizado pelo peso durante a queda?",
    opcoes: [
      "60 J",
      "−60 J",
      "6 J",
      "30 J",
      "0 J",
    ],
    correta: 0,
    explicacao:
      "O peso, 30 N, aponta para baixo, no mesmo sentido do deslocamento de 2 m. O trabalho é positivo: W = P · h = 30 · 2 = 60 J. É justamente a energia potencial gravitacional que o corpo perde na queda.\n\n−60 J erra o sinal: o peso só realiza trabalho negativo quando o corpo sobe. 6 J esquece o g. 30 J divide por 2, como se fosse energia cinética. E 0 J supõe que o peso não realize trabalho, o que só vale para deslocamentos horizontais.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Um bloco de 5 kg é arrastado por 3 m sobre um piso horizontal. Qual é o trabalho realizado pela força normal que o piso exerce sobre ele?",
    opcoes: [
      "0 J",
      "150 J",
      "−150 J",
      "15 J",
      "50 J",
    ],
    correta: 0,
    explicacao:
      "A normal é vertical, e o deslocamento é horizontal: formam 90°, e cos 90° = 0. O trabalho da normal é nulo, qualquer que seja a sua intensidade — ela não acelera nem freia o bloco ao longo do piso.\n\n150 J multiplica a normal (50 N) pelo deslocamento, sem considerar o ângulo entre eles. −150 J faz o mesmo e ainda atribui um sinal. 15 J multiplica a massa pelo deslocamento. E 50 J é o valor da normal, em newtons, e não um trabalho.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Se a velocidade de um corpo dobra, por quanto fica multiplicada a sua energia cinética?",
    opcoes: [
      "4",
      "2",
      "8",
      "16",
      "1",
    ],
    correta: 0,
    explicacao:
      "A energia cinética é proporcional ao quadrado da velocidade: com 2v, Ec = m(2v)²/2 = 4 · mv²/2. A energia fica multiplicada por 4. É por isso que dobrar a velocidade de um carro multiplica por quatro a distância de frenagem.\n\n2 supõe que a energia seja proporcional à velocidade. 8 usa o cubo da velocidade. 16 usa a quarta potência. E 1 supõe que a energia não mude, confundindo energia cinética com massa.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "Um motor ergue uma carga de 50 kg com velocidade constante de 2 m/s. Qual é a potência desenvolvida por ele?",
    opcoes: [
      "100 W",
      "1.000 W",
      "500 W",
      "250 W",
      "10.000 W",
    ],
    correta: 1,
    explicacao:
      "Com velocidade constante, a força do motor é igual ao peso, 500 N. A potência é o produto da força pela velocidade: P = F · v = 500 · 2 = 1.000 W. Em cada segundo, a carga sobe 2 m e ganha 1.000 J de energia potencial.\n\n100 W multiplica a massa pela velocidade, esquecendo o g. 500 W é o peso, tomado como potência. 250 W divide o peso pela velocidade. E 10.000 W multiplica por g duas vezes.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "facil",
    enunciado:
      "A energia elétrica é cobrada em quilowatts-hora (kWh). A quantos joules corresponde 1 kWh?",
    opcoes: [
      "1.000 J",
      "3.600.000 J",
      "3.600 J",
      "60.000 J",
      "1 J",
    ],
    correta: 1,
    explicacao:
      "Um quilowatt-hora é a energia fornecida por uma potência de 1 kW = 1.000 W durante 1 hora = 3.600 s. Como potência vezes tempo dá energia: 1.000 · 3.600 = 3.600.000 J, ou 3,6 · 10⁶ J.\n\n1.000 J esquece o tempo e fica só com os 1.000 W. 3.600 J esquece o “quilo” e usa 1 W. 60.000 J multiplica por 60 minutos, em vez de 3.600 segundos. E 1 J confunde as unidades, como se um kWh fosse a própria unidade de energia do SI.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma força que aponta sempre no sentido do deslocamento tem intensidade F = 3x, em newtons, com x em metros. Qual é o trabalho dessa força entre x = 0 e x = 4 m?",
    opcoes: [
      "48 J",
      "24 J",
      "12 J",
      "6 J",
      "16 J",
    ],
    correta: 1,
    explicacao:
      "A força varia com a posição, então o trabalho é a área sob o gráfico de F contra x entre 0 e 4 m: um triângulo de base 4 m e altura F(4) = 12 N. W = 4 · 12/2 = 24 J. Equivale a usar a força média, 6 N, ao longo dos 4 m.\n\n48 J usa a força final, 12 N, como se ela agisse desde o início. 12 J é o valor da força em x = 4 m, e não o trabalho. 6 J é a força média, sem multiplicar pelo deslocamento. E 16 J eleva o deslocamento ao quadrado, esquecendo o coeficiente 3 e a divisão por 2.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma mola de constante 100 N/m já está distendida 0,1 m. Qual é o trabalho necessário para distendê-la até 0,3 m?",
    opcoes: [
      "2 J",
      "4 J",
      "4,5 J",
      "20 J",
      "0,5 J",
    ],
    correta: 1,
    explicacao:
      "O trabalho é a variação da energia elástica: (1/2)k(x₂² − x₁²) = 50 · (0,09 − 0,01) = 50 · 0,08 = 4 J. É também a área do trapézio sob o gráfico F = kx entre 0,1 m e 0,3 m, de bases 10 N e 30 N e altura 0,2 m: (10 + 30) · 0,2/2 = 4 J.\n\n2 J eleva ao quadrado a diferença, (0,3 − 0,1)², em vez de subtrair os quadrados. 4,5 J é a energia para distender a mola desde o comprimento natural até 0,3 m. 20 J multiplica k pela variação, sem o fator de área. E 0,5 J é a energia armazenada já no início.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um carrinho parte do repouso no alto de uma rampa sem atrito e desce um desnível de 1,8 m. Qual é a sua velocidade no pé da rampa?",
    opcoes: [
      "36 m/s",
      "6 m/s",
      "4,24 m/s",
      "18 m/s",
      "1,9 m/s",
    ],
    correta: 1,
    explicacao:
      "Sem atrito, a energia potencial perdida vira energia cinética: mgh = mv²/2, e v = √(2gh) = √(2 · 10 · 1,8) = √36 = 6 m/s. O resultado não depende da massa nem da inclinação da rampa — só do desnível.\n\n36 m/s é v², sem a raiz. 4,24 m/s usa v² = gh, esquecendo o fator 2. 18 m/s é g · h, sem o 2 e sem a raiz. E 1,9 m/s esquece o g, fazendo √(2 · 1,8).",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um bloco de 2 kg desliza 5 m sobre um piso horizontal, com coeficiente de atrito cinético 0,3. Qual é o trabalho realizado pela força de atrito?",
    opcoes: [
      "30 J",
      "−30 J",
      "−3 J",
      "−100 J",
      "−6 J",
    ],
    correta: 1,
    explicacao:
      "A força de atrito vale μN = 0,3 · 20 = 6 N e é sempre contrária ao movimento. Ao longo de 5 m, o trabalho é −6 · 5 = −30 J. O sinal negativo indica que o atrito retira energia mecânica do bloco, que vira energia térmica.\n\n30 J esquece o sinal: o atrito se opõe ao deslocamento. −3 J calcula a força de atrito sem o g (0,3 · 2). −100 J usa o peso inteiro, sem o coeficiente de atrito. E −6 J é a força de atrito, em newtons, e não o trabalho.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 1 kg parte do repouso no alto de uma rampa de 5 m de altura e, ao chegar ao pé dela, o atrito já dissipou 18 J. Qual é a velocidade do corpo no pé da rampa?",
    opcoes: [
      "10 m/s",
      "8 m/s",
      "64 m/s",
      "5,66 m/s",
      "11,7 m/s",
    ],
    correta: 1,
    explicacao:
      "A energia mecânica inicial é mgh = 1 · 10 · 5 = 50 J. O atrito dissipa 18 J, e sobram 32 J de energia cinética: mv²/2 = 32, v² = 64 e v = 8 m/s.\n\n10 m/s ignora o atrito, como numa rampa lisa. 64 m/s é v², sem a raiz. 5,66 m/s esquece o fator 2 da energia cinética (v² = 32). E 11,7 m/s soma a energia dissipada à potencial, em vez de subtrair.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um pêndulo simples de 2 m de comprimento é abandonado com o fio formando 37° com a vertical. Usando cos 37° = 0,8 e desprezando a resistência do ar, qual é a velocidade da massa ao passar pelo ponto mais baixo?",
    opcoes: [
      "4√2 m/s",
      "2√2 m/s",
      "2√10 m/s",
      "8 m/s",
      "2 m/s",
    ],
    correta: 1,
    explicacao:
      "A massa desce a altura h = L − L · cos 37° = 2 − 1,6 = 0,4 m. A tração é sempre perpendicular ao movimento e não realiza trabalho, então vale a conservação da energia: mgh = mv²/2, e v = √(2 · 10 · 0,4) = √8 = 2√2 ≅ 2,83 m/s.\n\n4√2 m/s usa como altura L · cos 37° = 1,6 m, que é a distância vertical entre o ponto de suspensão e a posição inicial. 2√10 m/s usa o comprimento do fio inteiro como altura. 8 m/s é v², sem a raiz. E 2 m/s usa v² = gh, esquecendo o fator 2.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma mola de constante 400 N/m, comprimida 0,2 m, lança um bloco de 0,5 kg sobre uma superfície horizontal sem atrito. Com que velocidade o bloco deixa a mola?",
    opcoes: [
      "4 m/s",
      "4√2 m/s",
      "32 m/s",
      "4√10 m/s",
      "160 m/s",
    ],
    correta: 1,
    explicacao:
      "A energia elástica armazenada, kx²/2 = 400 · 0,04/2 = 8 J, vira energia cinética: 0,5 · v²/2 = 8, v² = 32 e v = √32 = 4√2 ≅ 5,66 m/s.\n\n4 m/s iguala kx²/2 a mv², esquecendo o fator 1/2 da energia cinética. 32 m/s é v², sem a raiz. 4√10 m/s usa x no lugar de x² (v² = kx/m). E 160 m/s divide a força elástica máxima, 80 N, pela massa, confundindo aceleração com velocidade.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma pedra é lançada verticalmente para cima a 20 m/s. Desprezando a resistência do ar, qual é a altura máxima que ela atinge?",
    opcoes: [
      "40 m",
      "20 m",
      "2 m",
      "400 m",
      "10 m",
    ],
    correta: 1,
    explicacao:
      "No ponto mais alto, a velocidade é zero, e toda a energia cinética virou potencial: mv²/2 = mgh, e h = v²/(2g) = 400/20 = 20 m.\n\n40 m esquece o fator 2 (h = v²/g). 2 m é v/g, o tempo de subida em segundos, e não a altura. 400 m é v², sem dividir por 2g. E 10 m usa a velocidade média da subida, 10 m/s, como se fosse a altura. Conferindo pela cinemática: a subida dura 20/10 = 2 s, e a altura é a velocidade média, 10 m/s, vezes esse tempo: 20 m.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um carrinho parte do repouso e desce uma rampa sem atrito que termina num looping circular de raio 0,4 m. Qual é a menor altura de partida, medida a partir do ponto mais baixo do looping, para que ele complete a volta sem perder contato com o trilho?",
    opcoes: [
      "0,8 m",
      "1,2 m",
      "1 m",
      "0,4 m",
      "0,2 m",
    ],
    correta: 2,
    explicacao:
      "No ponto mais alto do looping, a velocidade mínima é aquela em que só o peso faz o papel de força centrípeta: mg = mv²/R, ou v² = gR. Pela conservação da energia, desde a altura h: mg(h − 2R) = mv²/2 = mgR/2, e h = 2R + R/2 = 2,5R = 2,5 · 0,4 = 1 m.\n\n0,8 m é a altura do topo do looping, 2R: com ela, o carrinho chegaria lá parado e cairia antes. 1,2 m é 3R, mais do que o necessário. 0,4 m é o raio. E 0,2 m é R/2, a sobra de altura acima do topo, e não a altura total.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "O motor de um carro exerce uma força de tração de 2.000 N enquanto o carro se desloca a 20 m/s. Qual é a potência desenvolvida?",
    opcoes: [
      "100 W",
      "2.020 W",
      "40 kW",
      "80 kW",
      "20 kW",
    ],
    correta: 2,
    explicacao:
      "Em cada segundo, o ponto de aplicação da força avança 20 m, e o trabalho realizado é 2.000 · 20 = 40.000 J. A potência é P = F · v = 40.000 W = 40 kW.\n\n100 W divide a força pela velocidade. 2.020 W soma força e velocidade. 80 kW dobra o produto. E 20 kW divide o produto por 2, como se a velocidade média entrasse na conta. A mesma relação mostra por que, com potência fixa, o carro precisa de mais força nas subidas e, por isso, anda mais devagar.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um motor recebe 5 kW de potência elétrica e tem rendimento de 80%. Em quanto tempo ele ergue, com velocidade constante, uma carga de 400 kg a 10 m de altura?",
    opcoes: [
      "8 s",
      "6,4 s",
      "10 s",
      "1 s",
      "12,5 s",
    ],
    correta: 2,
    explicacao:
      "A potência útil é 80% de 5 kW: 4 kW = 4.000 W. O trabalho útil é o ganho de energia potencial da carga: mgh = 400 · 10 · 10 = 40.000 J. O tempo é t = 40.000/4.000 = 10 s.\n\n8 s usa os 5 kW inteiros, ignorando o rendimento. 6,4 s divide pelo rendimento em vez de multiplicar (5 kW/0,8 = 6,25 kW). 1 s esquece o g no cálculo do trabalho. E 12,5 s aplica o rendimento duas vezes (4 kW · 0,8 = 3,2 kW).",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "A velocidade de um corpo de 4 kg passa de 2 m/s para 6 m/s. Qual é o trabalho total realizado sobre ele?",
    opcoes: [
      "32 J",
      "72 J",
      "64 J",
      "8 J",
      "128 J",
    ],
    correta: 2,
    explicacao:
      "Pelo teorema do trabalho e da energia cinética, o trabalho total é a variação da energia cinética: 4 · 6²/2 − 4 · 2²/2 = 72 − 8 = 64 J.\n\n32 J eleva ao quadrado a variação da velocidade, 4 · (6 − 2)²/2, em vez de subtrair os quadrados. 72 J é só a energia cinética final. 8 J é só a inicial. E 128 J esquece de dividir por 2. O trabalho total inclui todas as forças que agem sobre o corpo; se só uma delas realiza trabalho, é ela que realiza esses 64 J.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um velocista de 70 kg sai do repouso e atinge 10 m/s em 4 s. Qual é a potência média empregada para aumentar a sua energia cinética?",
    opcoes: [
      "175 W",
      "3.500 W",
      "875 W",
      "1.750 W",
      "437,5 W",
    ],
    correta: 2,
    explicacao:
      "A energia cinética final é 70 · 10²/2 = 3.500 J, ganha em 4 s. A potência média é 3.500/4 = 875 W.\n\n175 W divide a quantidade de movimento final, 700 kg·m/s, pelo tempo — isso dá a força média, em newtons, e não a potência. 3.500 W é a energia, sem dividir pelo tempo. 1.750 W esquece o fator 1/2 da energia cinética, fazendo mv²/t = 7.000/4. E 437,5 W divide a potência correta por 2, como se a velocidade média entrasse de novo na conta.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um bloco de 2 kg desliza a 4 m/s sobre uma superfície horizontal sem atrito e colide com uma mola de constante 800 N/m. Qual é a compressão máxima da mola?",
    opcoes: [
      "0,04 m",
      "0,01 m",
      "0,2 m",
      "0,28 m",
      "0,14 m",
    ],
    correta: 2,
    explicacao:
      "Na compressão máxima, o bloco para por um instante, e toda a energia cinética, 2 · 4²/2 = 16 J, está na mola: 800 · x²/2 = 16, x² = 0,04 e x = 0,2 m.\n\n0,04 m é x², sem a raiz. 0,01 m divide a quantidade de movimento, 8 kg·m/s, pela constante da mola, o que não tem sentido físico. 0,28 m esquece o fator 1/2 da energia cinética (kx²/2 = mv²). E 0,14 m esquece o fator 1/2 da energia elástica (kx² = mv²/2).",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 2 kg vai de um ponto A a um ponto B, 3 m mais baixo, deslizando por um trilho curvo. Qual é o trabalho realizado pelo peso nesse trajeto?",
    opcoes: [
      "−60 J",
      "6 J",
      "60 J",
      "30 J",
      "Depende da forma do trilho",
    ],
    correta: 2,
    explicacao:
      "O trabalho do peso depende só do desnível entre os pontos de partida e de chegada, e não do caminho: W = mgh = 2 · 10 · 3 = 60 J, positivo porque o corpo desce. Forças com essa propriedade são chamadas conservativas, e é por isso que se pode definir a energia potencial gravitacional.\n\n−60 J erra o sinal: o peso favorece a descida. 6 J esquece o g. 30 J divide por 2, como se fosse energia cinética. E “depende da forma do trilho” vale para o trabalho do atrito, mas não para o do peso.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um corpo de 3 kg tem quantidade de movimento de 12 kg·m/s. Qual é a sua energia cinética?",
    opcoes: [
      "48 J",
      "4 J",
      "24 J",
      "144 J",
      "12 J",
    ],
    correta: 2,
    explicacao:
      "A velocidade é v = p/m = 12/3 = 4 m/s, e a energia cinética é mv²/2 = 3 · 16/2 = 24 J. Numa fórmula só: Ec = p²/(2m) = 144/6 = 24 J.\n\n48 J esquece o fator 2 do denominador (p²/m). 4 J é a velocidade, em m/s, e não a energia. 144 J é p², sem dividir por 2m. E 12 J confunde a quantidade de movimento com a energia cinética: são grandezas diferentes, com unidades diferentes.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma força horizontal empurra um bloco ao longo de 5 m. Nos primeiros 2 m, ela cresce uniformemente de 0 a 10 N; nos 3 m seguintes, fica constante em 10 N. Qual é o trabalho total realizado por ela?",
    opcoes: [
      "50 J",
      "30 J",
      "40 J",
      "10 J",
      "25 J",
    ],
    correta: 2,
    explicacao:
      "O trabalho é a área sob o gráfico da força em função da posição. Nos primeiros 2 m, a área é um triângulo: 2 · 10/2 = 10 J. Nos 3 m seguintes, um retângulo: 3 · 10 = 30 J. Total: 40 J.\n\n50 J trata a força como se valesse 10 N desde o início (5 · 10). 30 J conta só o trecho de força constante. 10 J conta só o triângulo. E 25 J usa a força média entre 0 e 10 N, 5 N, ao longo de todo o percurso — mas a força só cresce nos 2 m iniciais.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um carro a 20 m/s freia com as rodas travadas numa pista em que o coeficiente de atrito cinético entre pneus e asfalto é 0,5. Qual é a distância percorrida até parar?",
    opcoes: [
      "80 m",
      "20 m",
      "40 m",
      "4 m",
      "400 m",
    ],
    correta: 2,
    explicacao:
      "O atrito é a única força horizontal e realiza um trabalho negativo igual à energia cinética perdida: μmg · d = mv²/2. A massa se cancela, e d = v²/(2μg) = 400/(2 · 0,5 · 10) = 400/10 = 40 m.\n\n80 m esquece o fator 2 do denominador. 20 m esquece o coeficiente de atrito, como se a desaceleração fosse g. 4 m é o tempo de frenagem, v/(μg) = 4 s, e não a distância. E 400 m é v², sem dividir por 2μg.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Freando sempre da mesma maneira, um carro a 36 km/h para em 10 m. A 72 km/h, em quantos metros ele pararia?",
    opcoes: [
      "20 m",
      "80 m",
      "10 m",
      "40 m",
      "160 m",
    ],
    correta: 3,
    explicacao:
      "Com a mesma força de frenagem, a distância é proporcional à energia cinética, que depende do quadrado da velocidade: F · d = mv²/2. Dobrando a velocidade, de 36 para 72 km/h, a energia quadruplica, e a distância também: 4 · 10 = 40 m.\n\n20 m supõe a distância proporcional à velocidade. 80 m usa o cubo do fator 2. 10 m supõe que a distância não dependa da velocidade. E 160 m usa a quarta potência do fator 2.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma bomba eleva 3.000 litros de água (3.000 kg) a uma altura de 10 m em 5 minutos. Qual é a potência útil média da bomba?",
    opcoes: [
      "60 kW",
      "100 W",
      "300 kW",
      "1.000 W",
      "10 kW",
    ],
    correta: 3,
    explicacao:
      "O trabalho útil é o ganho de energia potencial da água: mgh = 3.000 · 10 · 10 = 300.000 J. O tempo é 5 min = 300 s. A potência é 300.000/300 = 1.000 W.\n\n60 kW divide por 5, usando o tempo em minutos. 100 W esquece o g. 300 kW é a energia, 300 kJ, tratada como potência, sem dividir pelo tempo. E 10 kW usa 30 s no lugar de 300 s, um zero a menos na conversão.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um bloco de 4 kg é empurrado por 3 m, com velocidade constante, rampa acima, numa rampa de 30° sem atrito. Qual é o trabalho realizado pela força que o empurra, paralela à rampa?",
    opcoes: [
      "120 J",
      "104 J",
      "0 J",
      "60 J",
      "12 J",
    ],
    correta: 3,
    explicacao:
      "Com velocidade constante, a força que empurra equilibra a componente do peso ao longo da rampa: F = mg · sen 30° = 40 · 0,5 = 20 N. O trabalho é 20 · 3 = 60 J — igual ao ganho de energia potencial, pois o bloco sobe 3 · sen 30° = 1,5 m: 40 · 1,5 = 60 J.\n\n120 J usa o peso inteiro, sem decompor. 104 J usa o cosseno de 30° no lugar do seno. 0 J confunde o trabalho dessa força com o trabalho total, que é nulo porque a energia cinética não muda. E 12 J esquece o g.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um caixote de 10 kg é arrastado com velocidade constante de 2 m/s sobre um piso com coeficiente de atrito cinético 0,4. Qual é a potência dissipada pelo atrito?",
    opcoes: [
      "40 W",
      "200 W",
      "20 W",
      "80 W",
      "8 W",
    ],
    correta: 3,
    explicacao:
      "A força de atrito é μN = 0,4 · 100 = 40 N. Em cada segundo, o caixote percorre 2 m, e o atrito dissipa 40 · 2 = 80 J: a potência dissipada é P = F · v = 80 W — a mesma que quem arrasta precisa fornecer para manter a velocidade.\n\n40 W é a força de atrito, em newtons, tomada como potência. 200 W usa o peso inteiro, 100 N, sem o coeficiente. 20 W divide a força pela velocidade. E 8 W esquece o g no cálculo da normal.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma pessoa de 60 kg sobe três andares, num desnível total de 9 m, em 30 s. Qual é a potência média que ela desenvolve para vencer o peso?",
    opcoes: [
      "5.400 W",
      "18 W",
      "162 kW",
      "180 W",
      "60 W",
    ],
    correta: 3,
    explicacao:
      "O trabalho contra o peso é o ganho de energia potencial: mgh = 60 · 10 · 9 = 5.400 J. Dividido pelo tempo, dá a potência média: 5.400/30 = 180 W.\n\n5.400 W é a energia, sem dividir pelo tempo. 18 W esquece o g. 162 kW multiplica a energia pelo tempo em vez de dividir. E 60 W usa só um andar, 3 m, em vez dos 9 m. Se a pessoa subisse em 15 s, a potência dobraria para 360 W: o trabalho é o mesmo, mas feito em menos tempo.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um carrinho de montanha-russa parte do repouso num ponto a 20 m de altura. Desprezando os atritos, qual é a sua velocidade quando passa por um ponto a 15 m de altura?",
    opcoes: [
      "20 m/s",
      "17,3 m/s",
      "100 m/s",
      "10 m/s",
      "5 m/s",
    ],
    correta: 3,
    explicacao:
      "Entre os dois pontos, o carrinho desce 20 − 15 = 5 m. A energia potencial perdida vira energia cinética: v = √(2g · 5) = √100 = 10 m/s. A forma do trilho entre os pontos não importa, porque o peso é conservativo e a normal não realiza trabalho.\n\n20 m/s usa os 20 m inteiros como desnível. 17,3 m/s usa os 15 m. 100 m/s é v², sem a raiz. E 5 m/s confunde o desnível, em metros, com a velocidade.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Uma bolinha de 0,5 kg, presa a um fio de 1 m, é abandonada com o fio na horizontal. Qual é a tração no fio quando a bolinha passa pelo ponto mais baixo?",
    opcoes: [
      "5 N",
      "10 N",
      "0 N",
      "15 N",
      "−5 N",
    ],
    correta: 3,
    explicacao:
      "Na descida de 1 m, a bolinha ganha v² = 2gL = 20 m²/s². No ponto mais baixo, a resultante das forças verticais é a centrípeta: T − mg = mv²/L, e T = 5 + 0,5 · 20/1 = 15 N — o triplo do peso, qualquer que seja o comprimento do fio.\n\n5 N é só o peso, como se a bolinha passasse parada pelo ponto mais baixo. 10 N é só a força centrípeta, sem o peso. 0 N supõe que peso e força centrípeta se anulem. E −5 N inverte o sentido da força centrípeta, subtraindo-a do peso.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Pendura-se um corpo de 2 kg numa mola vertical de constante 400 N/m e espera-se o equilíbrio. Qual é a energia potencial elástica armazenada na mola nessa situação?",
    opcoes: [
      "1 J",
      "10 J",
      "0,05 J",
      "0,5 J",
      "20 J",
    ],
    correta: 3,
    explicacao:
      "No equilíbrio, a força elástica equilibra o peso: kx = mg, e x = 20/400 = 0,05 m. A energia elástica é kx²/2 = 400 · 0,0025/2 = 0,5 J.\n\n1 J é o trabalho do peso na descida de 0,05 m, mgx: só metade dele fica na mola — a outra metade é retirada por quem baixa o corpo devagar, ou dissipada, se ele oscilar até parar. 10 J multiplica k/2 por x, sem elevar a deformação ao quadrado. 0,05 J é a deformação, em metros. E 20 J é o peso, em newtons.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Numa máquina de Atwood ideal, corpos de 3 kg e 2 kg partem do repouso. Qual é a velocidade deles depois que o corpo mais pesado desce 1 m?",
    opcoes: [
      "2√3 m/s",
      "2,58 m/s",
      "√20 m/s",
      "2 m/s",
      "4 m/s",
    ],
    correta: 3,
    explicacao:
      "O corpo de 3 kg desce 1 m e perde 30 J; o de 2 kg sobe 1 m e ganha 20 J. A energia potencial do sistema diminui 10 J, que viram energia cinética dos dois corpos: (3 + 2)v²/2 = 10, v² = 4 e v = 2 m/s.\n\n2√3 m/s esquece o ganho de energia potencial do corpo que sobe (30 = 2,5v²). 2,58 m/s esquece a energia cinética do corpo de 2 kg (10 = 1,5v²). √20 m/s é a velocidade de uma queda livre de 1 m. E 4 m/s é v², sem a raiz.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "media",
    enunciado:
      "Um elevador de 800 kg sobe 30 m, com velocidade constante, em 40 s. Qual é a potência que o motor fornece para vencer o peso?",
    opcoes: [
      "600 W",
      "240 kW",
      "8.000 W",
      "6.000 W",
      "10.667 W",
    ],
    correta: 3,
    explicacao:
      "Com velocidade constante, a força do motor iguala o peso, 8.000 N, e a velocidade é 30/40 = 0,75 m/s. A potência é P = F · v = 8.000 · 0,75 = 6.000 W. Pelo trabalho: mgh = 800 · 10 · 30 = 240.000 J, que divididos por 40 s dão 6.000 W.\n\n600 W esquece o g. 240 kW é a energia, 240 kJ, tratada como potência. 8.000 W multiplica o peso por 1 m/s, sem calcular a velocidade. E 10.667 W inverte a velocidade, usando 40/30 m/s.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de 1 kg é abandonado do repouso 1,8 m acima de uma mola vertical de constante 1.000 N/m e cai sobre ela. Desprezando perdas, qual é a compressão máxima da mola?",
    opcoes: [
      "0,19 m",
      "0,01 m",
      "0,04 m",
      "0,02 m",
      "0,2 m",
    ],
    correta: 4,
    explicacao:
      "Da posição inicial até a compressão máxima x, o corpo desce 1,8 + x, e a energia potencial perdida fica toda na mola: 10(1,8 + x) = 1.000x²/2. Então 500x² − 10x − 18 = 0, cuja raiz positiva é x = (10 + √(100 + 36.000))/1.000 = (10 + 190)/1.000 = 0,2 m.\n\n0,19 m esquece que o corpo continua descendo enquanto comprime a mola, usando só os 1,8 m. 0,01 m é a deformação de equilíbrio, mg/k. 0,04 m é x², sem a raiz. E 0,02 m é o dobro da deformação de equilíbrio, que seria a compressão máxima se o corpo fosse solto já encostado na mola.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um carrinho de 0,2 kg parte do repouso a uma altura de 1,5 m e desce um trilho sem atrito que termina num looping de raio 0,5 m. Qual é a força que o trilho exerce sobre o carrinho no ponto mais alto do looping?",
    opcoes: [
      "0 N",
      "4 N",
      "6 N",
      "10 N",
      "2 N",
    ],
    correta: 4,
    explicacao:
      "O topo do looping está a 2R = 1 m de altura, então o carrinho chega lá tendo descido 0,5 m: v² = 2g · 0,5 = 10 m²/s². No topo, peso e normal apontam para baixo e juntos formam a força centrípeta: N + mg = mv²/R, e N = 0,2 · 10/0,5 − 2 = 4 − 2 = 2 N.\n\n0 N supõe que o carrinho passe com a velocidade mínima, o que exigiria partir de 2,5R = 1,25 m. 4 N é a força centrípeta, esquecendo o peso. 6 N soma o peso em vez de subtrair. E 10 N usa a altura total, 1,5 m, em vez do desnível até o topo, 0,5 m.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Uma pedra presa a um fio de 1 m gira num círculo vertical. Qual é a menor velocidade que ela pode ter no ponto mais baixo para completar a volta com o fio sempre esticado?",
    opcoes: [
      "√10 m/s",
      "√30 m/s",
      "2√10 m/s",
      "10 m/s",
      "5√2 m/s",
    ],
    correta: 4,
    explicacao:
      "No ponto mais alto, o fio continua esticado enquanto a tração não fica negativa; no limite, só o peso faz a força centrípeta: mg = mv²/R, e v²(topo) = gR = 10. Do ponto mais baixo ao mais alto, a pedra sobe 2R = 2 m e perde energia: v²(baixo) = v²(topo) + 2g · 2R = 10 + 40 = 50, e v = √50 = 5√2 ≅ 7,1 m/s.\n\n√10 m/s é a velocidade mínima no ponto mais alto, e não no mais baixo. √30 m/s usa o desnível R em vez de 2R. 2√10 m/s esquece a velocidade que a pedra ainda precisa ter no topo (v² = 4gR). E 10 m/s é o quadrado da velocidade mínima no topo, sem a raiz.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de 1 kg, encostado numa mola de constante 200 N/m comprimida 0,3 m, é liberado sobre um piso com coeficiente de atrito cinético 0,25. O bloco não está preso à mola. Qual é a distância total que ele percorre, desde a liberação, até parar?",
    opcoes: [
      "3,3 m",
      "7,2 m",
      "36 m",
      "0,9 m",
      "3,6 m",
    ],
    correta: 4,
    explicacao:
      "A energia elástica inicial é 200 · 0,09/2 = 9 J. O atrito, 0,25 · 10 = 2,5 N, age durante todo o percurso — inclusive enquanto a mola ainda empurra — e dissipa 2,5 J por metro. O bloco para quando toda a energia foi dissipada: 2,5 · d = 9, e d = 3,6 m, contados desde a liberação.\n\n3,3 m desconta os 0,3 m em que a mola empurra, como se o atrito não agisse ali. 7,2 m esquece o fator 1/2 da energia elástica. 36 m calcula o atrito sem o g (0,25 · 1). E 0,9 m usa o peso inteiro, 10 N, como força de atrito.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um carro de 1.000 kg sobe uma ladeira de inclinação θ, com sen θ = 0,1, a uma velocidade constante de 20 m/s. As forças de resistência somam 500 N. Qual é a potência que o motor entrega às rodas?",
    opcoes: [
      "10 kW",
      "20 kW",
      "210 kW",
      "1.500 W",
      "30 kW",
    ],
    correta: 4,
    explicacao:
      "Com velocidade constante, a força motriz equilibra a componente do peso ao longo da ladeira, mg · sen θ = 10.000 · 0,1 = 1.000 N, mais a resistência, 500 N: F = 1.500 N. A potência é F · v = 1.500 · 20 = 30.000 W = 30 kW.\n\n10 kW considera só a resistência. 20 kW considera só a componente do peso. 210 kW usa o peso inteiro, sem o sen θ ((10.000 + 500) · 20). E 1.500 W é a força motriz, em newtons, tratada como potência.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de 1,5 kg, inicialmente em repouso, é empurrado ao longo de uma reta por uma força no sentido do movimento, de intensidade F = 3x² + 2 (em newtons, com x em metros). Qual é a velocidade do corpo quando x = 2 m?",
    opcoes: [
      "12 m/s",
      "16 m/s",
      "2√2 m/s",
      "8 m/s",
      "4 m/s",
    ],
    correta: 4,
    explicacao:
      "O trabalho da força variável é a integral de F de 0 a 2: W = [x³ + 2x] entre 0 e 2 = 8 + 4 = 12 J. Pelo teorema do trabalho e da energia: 1,5 · v²/2 = 12, v² = 16 e v = 4 m/s.\n\n12 m/s é o valor do trabalho, em joules, e não a velocidade. 16 m/s é v², sem a raiz. 2√2 m/s esquece o fator 2 da energia cinética (1,5v² = 12). E 8 m/s é W/m, sem o fator 2 e sem a raiz.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Um guincho puxa um carrinho de 300 kg, com velocidade constante de 2 m/s, rampa acima, numa rampa de 30°. O coeficiente de atrito cinético é √3/6, e o motor do guincho consome 6 kW. Qual é o rendimento do guincho?",
    opcoes: [
      "50%",
      "25%",
      "100%",
      "133%",
      "75%",
    ],
    correta: 4,
    explicacao:
      "A força de tração equilibra a componente do peso ao longo da rampa, 3.000 · sen 30° = 1.500 N, e o atrito, μN = (√3/6) · 3.000 · cos 30° = (√3/6) · 1.500√3 = 750 N: F = 2.250 N. A potência útil é 2.250 · 2 = 4.500 W, e o rendimento, 4.500/6.000 = 0,75 = 75%.\n\n50% ignora o atrito (1.500 · 2 = 3.000 W). 25% considera só o atrito (750 · 2 = 1.500 W). 100% usa o peso inteiro, sem decompor (3.000 · 2 = 6.000 W). E 133% inverte a razão, consumida sobre útil — um rendimento nunca passa de 100%.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Uma corrente homogênea de 4 kg e 2 m de comprimento está sobre uma mesa sem atrito, com metade dela pendurada na borda. Solta do repouso, com que velocidade ela sai completamente da mesa?",
    opcoes: [
      "√20 m/s",
      "√10 m/s",
      "√7,5 m/s",
      "15 m/s",
      "√15 m/s",
    ],
    correta: 4,
    explicacao:
      "Compara-se a energia potencial no início e no fim. No início, a metade pendurada (2 kg) tem o centro de massa 0,5 m abaixo da mesa; no fim, a corrente inteira (4 kg) pende com o centro de massa 1 m abaixo. A energia potencial diminui 4 · 10 · 1 − 2 · 10 · 0,5 = 40 − 10 = 30 J, que vira energia cinética: 4v²/2 = 30, v² = 15 e v = √15 ≅ 3,9 m/s.\n\n√20 m/s esquece que metade da corrente já estava pendurada (ΔEp = 40 J). √10 m/s considera só a queda da metade que já pendia (ΔEp = 20 J). √7,5 m/s esquece o fator 1/2 da energia cinética. E 15 m/s é v², sem a raiz.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "Uma bomba com rendimento de 50% eleva 1.000 litros de água (1.000 kg) a 20 m de altura em 10 minutos. Qual é, aproximadamente, a potência que ela consome?",
    opcoes: [
      "333 W",
      "167 W",
      "40 kW",
      "1.333 W",
      "667 W",
    ],
    correta: 4,
    explicacao:
      "A potência útil é mgh/t = 1.000 · 10 · 20/600 = 200.000/600 ≅ 333 W. Com rendimento de 50%, a bomba consome o dobro: 333/0,5 ≅ 667 W.\n\n333 W é a potência útil, sem o rendimento. 167 W multiplica pelo rendimento em vez de dividir. 40 kW usa 10 s no lugar de 10 min e ainda divide pelo rendimento. E 1.333 W divide pelo rendimento duas vezes.",
  },
  {
    materia: "exatas-militar",
    tema: "Trabalho, energia e potência",
    dificuldade: "dificil",
    enunciado:
      "A cabine de um elevador, de 800 kg, está ligada por um cabo que passa por uma polia a um contrapeso de 600 kg. Qual é o trabalho que o motor realiza para subir a cabine 20 m com velocidade constante?",
    opcoes: [
      "160 kJ",
      "280 kJ",
      "120 kJ",
      "4 kJ",
      "40 kJ",
    ],
    correta: 4,
    explicacao:
      "Com velocidade constante, a força do motor mais a tração do cabo, que sustenta o contrapeso, equilibram o peso da cabine: F + 6.000 = 8.000, e F = 2.000 N. Ao longo de 20 m, o trabalho é 2.000 · 20 = 40.000 J = 40 kJ. Em termos de energia: a cabine ganha 160 kJ de energia potencial, e o contrapeso, que desce 20 m, perde 120 kJ; o motor fornece a diferença.\n\n160 kJ ignora o contrapeso. 280 kJ soma as energias da cabine e do contrapeso, em vez de subtrair. 120 kJ é a energia que o contrapeso fornece. E 4 kJ esquece o g.",
  },
];
