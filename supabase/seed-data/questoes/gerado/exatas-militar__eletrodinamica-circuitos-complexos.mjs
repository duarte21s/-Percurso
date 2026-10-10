/* Eletrodinâmica: circuitos complexos (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__eletrodinamica-circuitos-complexos.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__eletrodinamica-circuitos-complexos.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Um resistor de 20 Ω é ligado a uma fonte de 12 V. Qual é a corrente que o percorre?",
    opcoes: [
      "240 A",
      "0,6 A",
      "1,67 A",
      "12 A",
      "32 A",
    ],
    correta: 1,
    explicacao:
      "Pela lei de Ohm, U = R · I, então I = U/R = 12/20 = 0,6 A. Quanto maior a resistência, menor a corrente para uma mesma tensão.\n\n240 A multiplica tensão e resistência em vez de dividir. 1,67 A divide a resistência pela tensão, invertendo a fórmula. 12 A toma a tensão, em volts, como se fosse a corrente. E 32 A soma a tensão e a resistência, grandezas que nem se somam entre si.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Dois resistores, de 4 Ω e 6 Ω, estão ligados em série a uma fonte de 20 V. Qual é a corrente no circuito?",
    opcoes: [
      "5 A",
      "3,33 A",
      "2 A",
      "8,33 A",
      "200 A",
    ],
    correta: 2,
    explicacao:
      "Em série, as resistências se somam: Req = 4 + 6 = 10 Ω. A corrente é a mesma nos dois resistores: I = U/Req = 20/10 = 2 A. As tensões se dividem: 8 V no de 4 Ω e 12 V no de 6 Ω, que somam os 20 V da fonte.\n\n5 A usa só o resistor de 4 Ω, e 3,33 A, só o de 6 Ω. 8,33 A calcula a resistência equivalente como se os resistores estivessem em paralelo (2,4 Ω). E 200 A multiplica a tensão pela resistência em vez de dividir.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Qual é a resistência equivalente de dois resistores, de 6 Ω e 3 Ω, ligados em paralelo?",
    opcoes: [
      "2 Ω",
      "9 Ω",
      "4,5 Ω",
      "0,5 Ω",
      "18 Ω",
    ],
    correta: 0,
    explicacao:
      "Em paralelo, somam-se os inversos: 1/Req = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, então Req = 2 Ω. Para dois resistores, vale o atalho “produto sobre soma”: (6 · 3)/(6 + 3) = 18/9 = 2 Ω. A equivalente é sempre menor que o menor dos resistores.\n\n9 Ω soma as resistências, o que vale para ligação em série. 4,5 Ω é a média das duas. 0,5 Ω é a soma dos inversos, 1/2, sem inverter de volta. E 18 Ω é só o produto, sem dividir pela soma.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Uma lâmpada tem as especificações 60 W – 120 V. Qual é a corrente que a percorre quando ligada corretamente?",
    opcoes: [
      "2 A",
      "7.200 A",
      "0,5 A",
      "240 A",
      "60 A",
    ],
    correta: 2,
    explicacao:
      "A potência elétrica é P = U · I, então I = P/U = 60/120 = 0,5 A. A resistência da lâmpada acesa é U/I = 240 Ω, que também sai de R = U²/P = 14.400/60. “Ligada corretamente” quer dizer sob a tensão nominal, 120 V: em outra tensão, a corrente seria outra.\n\n2 A inverte a divisão, U/P. 7.200 A multiplica potência e tensão. 240 A é a resistência da lâmpada, 240 Ω, tomada como corrente. E 60 A confunde a potência, em watts, com a corrente.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Um aquecedor de 1.000 W fica ligado durante 2 horas. Quanta energia elétrica ele consome, em quilowatts-hora?",
    opcoes: [
      "2.000 kWh",
      "0,5 kWh",
      "7.200 kWh",
      "120 kWh",
      "2 kWh",
    ],
    correta: 4,
    explicacao:
      "Energia é potência vezes tempo. Com a potência em quilowatts (1.000 W = 1 kW) e o tempo em horas: E = 1 kW · 2 h = 2 kWh. É essa a unidade que aparece na conta de luz.\n\n2.000 kWh esquece de converter watts em quilowatts. 0,5 kWh divide a potência pelo tempo. 7.200 kWh usa o tempo em segundos (7.200 s) e a potência em quilowatts, misturando as unidades. E 120 kWh usa o tempo em minutos.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Três resistores idênticos, de 12 Ω cada, são associados em paralelo. Que resistência única poderia substituir o conjunto?",
    opcoes: [
      "36 Ω",
      "12 Ω",
      "0,25 Ω",
      "4 Ω",
      "6 Ω",
    ],
    correta: 3,
    explicacao:
      "Com n resistores iguais de resistência R em paralelo, Req = R/n: aqui, 12/3 = 4 Ω. Pela soma dos inversos: 1/Req = 1/12 + 1/12 + 1/12 = 3/12 = 1/4, e Req = 4 Ω. Cada resistor a mais abre um novo caminho para a corrente, o que diminui a resistência do conjunto.\n\n36 Ω soma as resistências, como numa ligação em série. 12 Ω supõe que a associação de resistores iguais em paralelo mantenha a resistência de cada um. 0,25 Ω é a soma dos inversos, sem inverter de volta. E 6 Ω divide por 2, como se fossem só dois resistores.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Dois resistores, de 2 kΩ e 3 kΩ, estão ligados em série a uma fonte de 10 V. Qual é a tensão sobre o resistor de 3 kΩ?",
    opcoes: [
      "4 V",
      "10 V",
      "15 V",
      "6 V",
      "5 V",
    ],
    correta: 3,
    explicacao:
      "A corrente é I = 10/(2.000 + 3.000) = 0,002 A. A tensão no resistor de 3 kΩ é U = R · I = 3.000 · 0,002 = 6 V. Num divisor de tensão, cada resistor fica com uma fração da tensão total proporcional à sua resistência: 3/5 de 10 V = 6 V.\n\n4 V é a tensão sobre o resistor de 2 kΩ. 10 V é a tensão da fonte inteira, que se divide entre os dois. 15 V aplica a razão invertida, 3/2 de 10 V. E 5 V divide a tensão ao meio, como se os resistores fossem iguais.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Um resistor de 5 Ω é percorrido por uma corrente de 2 A. Qual é a potência dissipada nele?",
    opcoes: [
      "10 W",
      "2,5 W",
      "100 W",
      "20 W",
      "0,8 W",
    ],
    correta: 3,
    explicacao:
      "A potência dissipada num resistor é P = R · I² = 5 · 2² = 5 · 4 = 20 W. Também se pode calcular a tensão, U = R · I = 10 V, e depois P = U · I = 10 · 2 = 20 W. Essa potência se converte em calor no resistor — é o efeito Joule, o mesmo que funciona nos aquecedores.\n\n10 W é R · I, que é a tensão em volts, e não a potência. 2,5 W divide a resistência pela corrente. 100 W eleva ao quadrado o produto R · I. E 0,8 W divide I² pela resistência.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Uma lâmpada incandescente tem as especificações 100 W – 220 V. Qual é a resistência do seu filamento quando ela está acesa?",
    opcoes: [
      "484 Ω",
      "2,2 Ω",
      "0,45 Ω",
      "22.000 Ω",
      "48.400 Ω",
    ],
    correta: 0,
    explicacao:
      "Com P = U²/R, a resistência é R = U²/P = 220²/100 = 48.400/100 = 484 Ω. Outra forma: a corrente é I = P/U = 100/220 ≅ 0,45 A, e R = U/I ≅ 484 Ω. Com o filamento frio, a resistência é bem menor: o valor calculado vale para a lâmpada acesa.\n\n2,2 Ω divide a tensão pela potência. 0,45 Ω é o valor da corrente, em ampères, tomado como resistência. 22.000 Ω multiplica tensão e potência. E 48.400 Ω é U², sem dividir pela potência.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Dois resistores, de 4 Ω e 6 Ω, estão ligados em paralelo a uma fonte de 12 V. Qual é a corrente total fornecida pela fonte?",
    opcoes: [
      "1,2 A",
      "3 A",
      "2 A",
      "2,5 A",
      "5 A",
    ],
    correta: 4,
    explicacao:
      "Em paralelo, cada resistor fica submetido aos 12 V da fonte: o de 4 Ω é percorrido por 12/4 = 3 A, e o de 6 Ω, por 12/6 = 2 A. A fonte fornece a soma: 3 + 2 = 5 A. Pela resistência equivalente: (4 · 6)/(4 + 6) = 2,4 Ω, e 12/2,4 = 5 A.\n\n1,2 A trata os resistores como se estivessem em série (12/10). 3 A é só a corrente no de 4 Ω, e 2 A, só a do de 6 Ω. E 2,5 A tira a média das duas correntes, em vez de somá-las.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Um fio de cobre, de resistividade 1,7 · 10⁻⁸ Ω·m, tem 100 m de comprimento e 1 mm² de seção transversal. Qual é a sua resistência?",
    opcoes: [
      "1,7 Ω",
      "0,0017 Ω",
      "0,0000017 Ω",
      "17 Ω",
      "0,17 Ω",
    ],
    correta: 0,
    explicacao:
      "Pela 2ª lei de Ohm, R = ρL/A. A área precisa estar em metros quadrados: 1 mm² = (10⁻³ m)² = 10⁻⁶ m². Então R = 1,7 · 10⁻⁸ · 100/10⁻⁶ = 1,7 · 10⁻⁶/10⁻⁶ = 1,7 Ω.\n\n0,0017 Ω converte 1 mm² como se fosse 10⁻³ m², esquecendo que o milímetro está ao quadrado. 0,0000017 Ω nem converte a área, usando 1 m². 17 Ω e 0,17 Ω erram a potência de 10 na conta, por um fator 10 para cada lado.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "facil",
    enunciado:
      "Duas lâmpadas iguais estão ligadas em série a uma bateria. Se o filamento de uma delas se rompe, o que acontece com a outra?",
    opcoes: [
      "A outra brilha mais",
      "A outra brilha menos, mas continua acesa",
      "A outra continua brilhando como antes",
      "A outra queima em seguida",
      "A outra também se apaga",
    ],
    correta: 4,
    explicacao:
      "Em série, há um único caminho para a corrente, que passa pelas duas lâmpadas. Com o filamento rompido, o circuito fica aberto: a corrente cai a zero em todo ele, e a outra lâmpada também se apaga. É por isso que as instalações de uma casa são feitas em paralelo, com cada aparelho no seu próprio ramo.\n\n“Brilha mais” e “brilha menos” supõem que ainda passe corrente. “Continua como antes” vale para lâmpadas em paralelo, e não em série. E “queima em seguida” supõe um aumento de corrente, quando ela, na verdade, cai a zero.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um gerador de força eletromotriz 12 V e resistência interna 1 Ω alimenta um resistor de 5 Ω. Qual é a tensão entre os terminais do gerador?",
    opcoes: [
      "12 V",
      "10 V",
      "2 V",
      "14 V",
      "11 V",
    ],
    correta: 1,
    explicacao:
      "A corrente é I = ε/(R + r) = 12/(5 + 1) = 2 A. Parte da força eletromotriz se perde na resistência interna: r · I = 2 V. A tensão nos terminais é U = ε − r · I = 12 − 2 = 10 V — a mesma que aparece sobre o resistor externo, 5 · 2 = 10 V.\n\n12 V é a força eletromotriz, que só apareceria nos terminais com o gerador em circuito aberto. 2 V é a queda na resistência interna. 14 V soma essa queda à força eletromotriz, como se o gerador fosse um receptor. E 11 V subtrai o valor da resistência interna da força eletromotriz, misturando ohms com volts.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um gerador tem força eletromotriz de 12 V e resistência interna de 0,5 Ω. Qual é a corrente de curto-circuito, isto é, a corrente quando os seus terminais são ligados por um fio de resistência desprezível?",
    opcoes: [
      "6 A",
      "24 A",
      "0 A",
      "12 A",
      "Infinita",
    ],
    correta: 1,
    explicacao:
      "Com os terminais em curto, a única resistência do circuito é a interna: I = ε/r = 12/0,5 = 24 A. É a maior corrente que o gerador consegue fornecer, e a tensão nos seus terminais cai a zero.\n\n6 A multiplica ε por r em vez de dividir. 0 A supõe que, sem resistência externa, não haja corrente. 12 A divide a força eletromotriz por 1, esquecendo o valor da resistência interna. E “infinita” esquece que a própria resistência interna limita a corrente.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um gerador de força eletromotriz 12 V e resistência interna 2 Ω alimenta um resistor externo cuja resistência pode ser escolhida. Qual é a maior potência que o gerador consegue entregar a esse resistor?",
    opcoes: [
      "18 W",
      "72 W",
      "36 W",
      "144 W",
      "6 W",
    ],
    correta: 0,
    explicacao:
      "A potência no resistor externo é P = R · I² = R · ε²/(R + r)², máxima quando R = r = 2 Ω. Nesse caso, I = 12/4 = 3 A e P = 2 · 9 = 18 W. Na fórmula direta, Pmáx = ε²/(4r) = 144/8 = 18 W, e metade da potência total do gerador fica na resistência interna.\n\n72 W é ε²/r, a potência dissipada dentro do gerador em curto-circuito. 36 W é ε²/(2r), que esquece que, na potência máxima, metade da força eletromotriz cai dentro do gerador. 144 W é ε², sem dividir por resistência alguma. E 6 A é a corrente de curto-circuito, tomada como potência (6 W).",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma fonte de 12 V alimenta um resistor de 2 Ω em série com uma associação em paralelo de dois resistores, de 6 Ω e 3 Ω. Qual é a corrente no resistor de 6 Ω?",
    opcoes: [
      "1 A",
      "3 A",
      "2 A",
      "1,5 A",
      "1,09 A",
    ],
    correta: 0,
    explicacao:
      "O paralelo de 6 Ω e 3 Ω equivale a (6 · 3)/(6 + 3) = 2 Ω; com o de 2 Ω em série, o total é 4 Ω, e a fonte fornece 12/4 = 3 A. A tensão sobre o paralelo é 2 · 3 = 6 V, e no resistor de 6 Ω passa 6/6 = 1 A (no de 3 Ω, 2 A).\n\n3 A é a corrente total. 2 A é a corrente no resistor de 3 Ω. 1,5 A divide a corrente total ao meio, como se os dois ramos fossem iguais. E 1,09 A soma as três resistências (12/11), como se estivessem todas em série.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Numa ponte de Wheatstone, um ramo tem os resistores R₁ = 2 Ω e R₂ = 4 Ω, e o outro, R₃ = 3 Ω e R₄. O galvanômetro liga o ponto entre R₁ e R₂ ao ponto entre R₃ e R₄, e R₁ e R₃ partem do mesmo terminal. Para que valor de R₄ o galvanômetro indica zero?",
    opcoes: [
      "1,5 Ω",
      "2,67 Ω",
      "6 Ω",
      "3 Ω",
      "12 Ω",
    ],
    correta: 2,
    explicacao:
      "O galvanômetro indica zero quando os dois pontos que ele liga estão no mesmo potencial, isto é, quando os dois ramos dividem a tensão na mesma proporção: R₁/R₂ = R₃/R₄. Então 2/4 = 3/R₄, e R₄ = 6 Ω. É a ponte equilibrada, em que também vale R₁ · R₄ = R₂ · R₃ (2 · 6 = 4 · 3).\n\n1,5 Ω inverte a proporção (R₁ · R₃/R₂). 2,67 Ω faz R₁ · R₂/R₃. 3 Ω supõe que os ramos precisem ter a mesma soma (2 + 4 = 3 + 3). E 12 Ω multiplica R₂ por R₃ sem dividir por R₁.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Entre os terminais A e B há dois ramos: um com resistores de 10 Ω e 20 Ω em série, e outro também com 10 Ω e 20 Ω em série, ambos com o de 10 Ω junto de A. Um resistor de 50 Ω liga os pontos médios dos dois ramos. Qual é a resistência equivalente entre A e B?",
    opcoes: [
      "110 Ω",
      "30 Ω",
      "11,5 Ω",
      "15 Ω",
      "65 Ω",
    ],
    correta: 3,
    explicacao:
      "Os dois ramos são iguais, então dividem a tensão da mesma forma, e os seus pontos médios ficam no mesmo potencial: a ponte está equilibrada, e o resistor de 50 Ω não é percorrido por corrente. Pode-se ignorá-lo: restam dois ramos de 30 Ω em paralelo, e Req = 30/2 = 15 Ω.\n\n110 Ω soma todos os resistores. 30 Ω é a resistência de um só ramo. 11,5 Ω põe o resistor de 50 Ω em paralelo com o conjunto, como se ele ligasse A a B. E 65 Ω soma os 50 Ω em série com o conjunto.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Dois geradores ideais, de 12 V e de 6 V, estão ligados aos mesmos nós A e B, com os polos positivos voltados para A: o de 12 V em série com um resistor de 2 Ω, e o de 6 V em série com outro de 2 Ω. Entre A e B há ainda um resistor de 4 Ω. Qual é a corrente no resistor de 4 Ω?",
    opcoes: [
      "1,8 A",
      "2,25 A",
      "0,75 A",
      "2 A",
      "3 A",
    ],
    correta: 0,
    explicacao:
      "Tomando B como referência e chamando de V o potencial de A, a lei dos nós em A dá: (12 − V)/2 + (6 − V)/2 = V/4. Multiplicando por 4: 24 − 2V + 12 − 2V = V, e V = 36/5 = 7,2 V. A corrente no resistor de 4 Ω é 7,2/4 = 1,8 A. Os geradores fornecem (12 − 7,2)/2 = 2,4 A e (6 − 7,2)/2 = −0,6 A: o de 6 V, na verdade, está recebendo corrente.\n\n2,25 A trata os geradores como se estivessem em série, (12 + 6)/8. 0,75 A trata-os em oposição, (12 − 6)/8. 2 A ignora o gerador de 6 V, 12/(2 + 4). E 3 A usa só o gerador de 12 V diretamente sobre o resistor de 4 Ω.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Duas lâmpadas iguais, de especificação 60 W – 120 V, são ligadas em série a uma tomada de 120 V. Supondo que as resistências não mudem, qual é a potência total dissipada?",
    opcoes: [
      "120 W",
      "60 W",
      "30 W",
      "15 W",
      "7,5 W",
    ],
    correta: 2,
    explicacao:
      "Cada lâmpada tem resistência R = U²/P = 14.400/60 = 240 Ω. Em série, somam 480 Ω, e a corrente é 120/480 = 0,25 A. A potência total é U · I = 120 · 0,25 = 30 W — cada lâmpada dissipa 15 W, um quarto da sua potência nominal, porque recebe metade da tensão.\n\n120 W supõe cada lâmpada com a sua potência nominal. 60 W supõe que as duas dividam a potência de uma. 15 W é a potência de cada lâmpada, e não a total. E 7,5 W divide por 2 a potência de cada uma, sem motivo.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma fonte de 12 V alimenta um resistor de 4 Ω em série com outro de 8 Ω. Por engano, um amperímetro ideal é ligado em paralelo com o resistor de 4 Ω. Qual é a leitura do amperímetro?",
    opcoes: [
      "1 A",
      "3 A",
      "0 A",
      "1,5 A",
      "0,5 A",
    ],
    correta: 3,
    explicacao:
      "O amperímetro ideal tem resistência nula. Em paralelo com o resistor de 4 Ω, ele funciona como um fio: toda a corrente desvia por ele, e o resistor fica em curto. O circuito passa a ter só os 8 Ω, a corrente é 12/8 = 1,5 A, e é isso que o amperímetro marca.\n\n1 A é a corrente do circuito original, 12/12, sem o curto. 3 A aplica os 12 V ao resistor de 4 Ω, que na verdade ficou sem corrente. 0 A supõe que um amperímetro em paralelo não seja percorrido por corrente — isso vale para o voltímetro ideal. E 0,5 A divide a corrente entre o amperímetro e o resistor, como se tivessem a mesma resistência.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Dois resistores de 1 kΩ estão em série com uma fonte de 10 V. Um voltímetro de resistência interna 1 kΩ é ligado sobre um dos resistores. Qual é a leitura do voltímetro?",
    opcoes: [
      "5 V",
      "3,33 V",
      "6,67 V",
      "10 V",
      "2,5 V",
    ],
    correta: 1,
    explicacao:
      "O voltímetro, com 1 kΩ, fica em paralelo com o resistor de 1 kΩ: o conjunto equivale a 500 Ω. Em série com o outro resistor, o total é 1.500 Ω, e a corrente é 10/1.500 A. A tensão sobre o paralelo — e a leitura — é 500 · 10/1.500 ≅ 3,33 V. Um voltímetro de resistência baixa altera o circuito que mede.\n\n5 V seria a leitura de um voltímetro ideal. 6,67 V é a tensão sobre o outro resistor. 10 V é a tensão da fonte. E 2,5 V soma as três resistências em série, sem notar que o voltímetro está em paralelo.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Numa cozinha com tensão de 120 V, ficam ligados ao mesmo tempo um forno de 1.200 W, uma geladeira de 800 W e um liquidificador de 400 W. Qual é a corrente total no circuito?",
    opcoes: [
      "10 A",
      "6,67 A",
      "2.400 A",
      "20 A",
      "0,05 A",
    ],
    correta: 3,
    explicacao:
      "Os aparelhos estão em paralelo, todos sob 120 V, e as potências se somam: 1.200 + 800 + 400 = 2.400 W. A corrente total é I = P/U = 2.400/120 = 20 A — o disjuntor desse circuito precisa suportar pelo menos isso. Por aparelho: 10 A, 6,67 A e 3,33 A.\n\n10 A é só a corrente do forno. 6,67 A é a da geladeira, ou a média das três. 2.400 A confunde a potência total com a corrente. E 0,05 A divide a tensão pela potência.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Dois resistores de 20 Ω podem ser ligados a uma tomada de 220 V em série ou em paralelo. Quantas vezes a potência dissipada em paralelo é maior que a dissipada em série?",
    opcoes: [
      "2",
      "1/4",
      "1",
      "16",
      "4",
    ],
    correta: 4,
    explicacao:
      "Em série, Req = 40 Ω e P = U²/R = 48.400/40 = 1.210 W. Em paralelo, Req = 10 Ω e P = 48.400/10 = 4.840 W. A razão é 4.840/1.210 = 4: a resistência equivalente fica quatro vezes menor, e, com a mesma tensão, a potência fica quatro vezes maior. É o princípio dos chuveiros com as posições “verão” e “inverno”.\n\n2 compara as resistências como se a potência fosse proporcional a elas. 1/4 inverte a razão. 1 supõe que a potência não dependa da ligação. E 16 eleva a razão ao quadrado.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um fio tem resistência R. Outro fio, do mesmo material, tem o dobro do comprimento e o dobro do diâmetro. Qual é a resistência do segundo fio?",
    opcoes: [
      "R",
      "R/2",
      "2R",
      "R/4",
      "4R",
    ],
    correta: 1,
    explicacao:
      "Pela 2ª lei de Ohm, R = ρL/A, com A = πd²/4. Dobrar o comprimento dobra a resistência; dobrar o diâmetro quadruplica a área e divide a resistência por 4. No total: 2/4 = 1/2, e a resistência é R/2.\n\nR supõe que os dois efeitos se cancelem, como se a área dobrasse junto com o diâmetro. 2R considera só o comprimento. R/4 considera só a área. E 4R inverte o efeito da área, multiplicando em vez de dividir.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um chuveiro elétrico tem as especificações 5.500 W – 220 V. Qual é a resistência do seu elemento aquecedor em funcionamento?",
    opcoes: [
      "25 Ω",
      "0,11 Ω",
      "48.400 Ω",
      "0,04 Ω",
      "8,8 Ω",
    ],
    correta: 4,
    explicacao:
      "Com P = U²/R: R = U²/P = 220²/5.500 = 48.400/5.500 = 8,8 Ω. Conferindo pela corrente: I = P/U = 25 A, e R = U/I = 220/25 = 8,8 Ω. É uma corrente alta, que exige fiação grossa e disjuntor próprio.\n\n25 Ω é o valor da corrente, 25 A, tomado como resistência. 0,11 Ω inverte a fórmula (P/U²). 48.400 Ω é U², sem dividir pela potência. E 0,04 Ω divide a tensão pela potência.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um chuveiro de 5.500 W é usado 30 minutos por dia, durante 30 dias. Com o quilowatt-hora a R$ 0,80, quanto custa a energia consumida por ele no mês?",
    opcoes: [
      "R$ 132,00",
      "R$ 2,20",
      "R$ 66.000,00",
      "R$ 3.960,00",
      "R$ 66,00",
    ],
    correta: 4,
    explicacao:
      "A energia de um dia é 5,5 kW · 0,5 h = 2,75 kWh; no mês, 30 · 2,75 = 82,5 kWh. O custo é 82,5 · 0,80 = R$ 66,00. Converter a potência para quilowatts e o tempo para horas antes de multiplicar evita a maior parte dos erros nesse tipo de conta.\n\nR$ 132,00 usa 1 hora por dia em vez de meia hora. R$ 2,20 é o custo de um único dia. R$ 66.000,00 usa a potência em watts, sem converter para quilowatts. E R$ 3.960,00 usa o tempo em minutos (30 min) em vez de horas.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma corrente de 6 A chega a um nó e se divide entre dois resistores em paralelo, de 2 Ω e 4 Ω. Qual é a corrente no resistor de 2 Ω?",
    opcoes: [
      "2 A",
      "3 A",
      "4 A",
      "6 A",
      "8 A",
    ],
    correta: 2,
    explicacao:
      "Os dois resistores estão sob a mesma tensão, então a corrente se divide na proporção inversa das resistências: o de 2 Ω, com metade da resistência, recebe o dobro da corrente do de 4 Ω. Com I₁ = 2I₂ e I₁ + I₂ = 6, I₂ = 2 A e I₁ = 4 A. Pela tensão: a resistência equivalente é 4/3 Ω, U = 6 · 4/3 = 8 V, e 8/2 = 4 A.\n\n2 A é a corrente no resistor de 4 Ω. 3 A divide a corrente ao meio, como se as resistências fossem iguais. 6 A supõe que toda a corrente siga pelo caminho de menor resistência. E 8 A multiplica 6 pela razão 4/3, uma divisão proporcional invertida.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma lâmpada de 60 W – 120 V e outra de 40 W – 120 V são ligadas em série a uma tomada de 120 V. Supondo resistências constantes, o que se observa?",
    opcoes: [
      "A de 60 W brilha mais",
      "A de 40 W brilha mais",
      "As duas brilham igualmente",
      "Só a de 60 W acende",
      "As duas se apagam",
    ],
    correta: 1,
    explicacao:
      "A de 60 W tem resistência 120²/60 = 240 Ω; a de 40 W, 120²/40 = 360 Ω. Em série, a corrente é a mesma nas duas, e a potência dissipada é P = R · I²: brilha mais a de maior resistência, a de 40 W. Com I = 120/600 = 0,2 A, ela dissipa 360 · 0,04 = 14,4 W, e a de 60 W, 240 · 0,04 = 9,6 W.\n\n“A de 60 W brilha mais” vale quando as duas estão em paralelo, cada uma sob 120 V. “Brilham igualmente” exigiria resistências iguais. “Só a de 60 W acende” e “as duas se apagam” supõem que a corrente seja interrompida ou desviada, o que não acontece.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Dois resistores de 4 Ω em série formam um ramo, ligado em paralelo com um terceiro resistor de 4 Ω; o conjunto está em série com um quarto resistor de 4 Ω. Qual é a resistência equivalente?",
    opcoes: [
      "20/3 Ω",
      "16 Ω",
      "1 Ω",
      "12 Ω",
      "6 Ω",
    ],
    correta: 0,
    explicacao:
      "O ramo com dois resistores em série tem 8 Ω. Em paralelo com o de 4 Ω: (8 · 4)/(8 + 4) = 32/12 = 8/3 Ω. Somando o quarto resistor, em série: 8/3 + 4 = 20/3 ≅ 6,67 Ω.\n\n16 Ω soma os quatro resistores, como se estivessem todos em série. 1 Ω trata os quatro como se estivessem em paralelo. 12 Ω ignora o paralelo e soma 8 + 4. E 6 Ω usa um único resistor no ramo em série, 4 ∥ 4 = 2 Ω, mais 4 Ω.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um gerador de força eletromotriz 24 V e resistência interna 2 Ω alimenta um resistor de 6 Ω. Qual é o rendimento do gerador?",
    opcoes: [
      "25%",
      "133%",
      "75%",
      "33%",
      "100%",
    ],
    correta: 2,
    explicacao:
      "A corrente é 24/(6 + 2) = 3 A, e a tensão nos terminais, U = 24 − 2 · 3 = 18 V. O rendimento é a razão entre a potência entregue ao circuito externo e a potência total gerada: η = U · I/(ε · I) = U/ε = 18/24 = 0,75 = 75%. Os outros 25% são dissipados na resistência interna.\n\n25% é a fração perdida dentro do gerador. 133% inverte a razão (ε/U) — rendimento nunca passa de 100%. 33% divide a resistência interna pela externa. E 100% esquece a resistência interna, como num gerador ideal.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma fonte de 24 V e resistência interna 1 Ω alimenta um motor que tem força contraeletromotriz de 12 V e resistência interna de 2 Ω. Qual é a corrente no circuito?",
    opcoes: [
      "8 A",
      "12 A",
      "6 A",
      "24 A",
      "4 A",
    ],
    correta: 4,
    explicacao:
      "O motor é um receptor: a sua força contraeletromotriz se opõe à da fonte. Percorrendo a malha: 24 − 1 · I − 12 − 2 · I = 0, e I = (24 − 12)/(1 + 2) = 4 A. O motor transforma 12 · 4 = 48 W em potência mecânica e dissipa 2 · 16 = 32 W em calor.\n\n8 A ignora a força contraeletromotriz, como se o motor fosse um resistor de 2 Ω. 12 A soma as forças eletromotrizes, tratando o motor como outro gerador. 6 A aplica só os 12 V do motor à sua resistência. E 24 A é a corrente de curto-circuito da fonte.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma fonte de 12 V, com resistência interna de 0,5 Ω, carrega uma bateria de 10 V, também com resistência interna de 0,5 Ω, ligando polo positivo a polo positivo. Qual é a corrente de carga?",
    opcoes: [
      "22 A",
      "12 A",
      "4 A",
      "2 A",
      "20 A",
    ],
    correta: 3,
    explicacao:
      "As forças eletromotrizes estão em oposição: a fonte empurra a corrente num sentido, e a bateria, no outro. Vence a maior, e a corrente é (12 − 10)/(0,5 + 0,5) = 2 A, entrando na bateria pelo polo positivo — é isso que a carrega.\n\n22 A soma as forças eletromotrizes, como se estivessem a favor. 12 A ignora a bateria (12/1). 4 A usa só uma das resistências internas (2/0,5). E 20 A é a corrente de curto-circuito da bateria sozinha (10/0,5).",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Duas pilhas iguais, cada uma com força eletromotriz de 1,5 V e resistência interna de 0,5 Ω, são ligadas em paralelo e alimentam um resistor de 1,25 Ω. Qual é a corrente no resistor?",
    opcoes: [
      "1,33 A",
      "1,2 A",
      "0,86 A",
      "2 A",
      "1 A",
    ],
    correta: 4,
    explicacao:
      "Pilhas iguais em paralelo equivalem a uma única pilha com a mesma força eletromotriz, 1,5 V, e resistência interna dividida por 2: 0,25 Ω. A corrente é 1,5/(1,25 + 0,25) = 1 A, e cada pilha fornece metade, 0,5 A.\n\n1,33 A trata as pilhas como se estivessem em série: 3 V e 1 Ω de resistência interna, 3/(1,25 + 1). 1,2 A ignora as resistências internas. 0,86 A usa uma pilha só, com 0,5 Ω. E 2 A dobra a corrente, como se cada pilha fornecesse sozinha a corrente toda.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um gerador de força eletromotriz 12 V e resistência interna 2 Ω deve fornecer uma corrente de 1,5 A a um resistor externo. Qual deve ser a resistência desse resistor?",
    opcoes: [
      "6 Ω",
      "8 Ω",
      "10 Ω",
      "18 Ω",
      "4 Ω",
    ],
    correta: 0,
    explicacao:
      "Pela lei de Pouillet, I = ε/(R + r): 1,5 = 12/(R + 2), então R + 2 = 8 e R = 6 Ω. Conferindo: 12/(6 + 2) = 1,5 A.\n\n8 Ω é a resistência total do circuito, R + r, e não a externa. 10 Ω soma a resistência interna em vez de subtrair. 18 Ω multiplica a força eletromotriz pela corrente, o que dá uma potência, e não uma resistência. E 4 Ω desconta a resistência interna duas vezes.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um aquecedor elétrico de 1.000 W, que transfere todo o seu calor para a água, aquece 1 kg de água de 20 °C a 100 °C. Usando o calor específico da água, 4.200 J/(kg·°C), quanto tempo isso leva?",
    opcoes: [
      "420 s",
      "336 s",
      "80 s",
      "336.000 s",
      "168 s",
    ],
    correta: 1,
    explicacao:
      "O calor necessário é Q = m · c · ΔT = 1 · 4.200 · 80 = 336.000 J. Com potência de 1.000 W, isto é, 1.000 J a cada segundo, o tempo é 336.000/1.000 = 336 s, pouco mais de 5,5 minutos.\n\n420 s usa uma variação de temperatura de 100 °C, esquecendo que a água começa a 20 °C. 80 s esquece o calor específico. 336.000 s é o valor do calor, em joules, sem dividir pela potência. E 168 s usa metade da variação de temperatura.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Três resistores de 9 Ω formam um triângulo, cada um ligando dois dos vértices A, B e C. Qual é a resistência equivalente entre os vértices A e B?",
    opcoes: [
      "27 Ω",
      "3 Ω",
      "18 Ω",
      "6 Ω",
      "4,5 Ω",
    ],
    correta: 3,
    explicacao:
      "Entre A e B há dois caminhos em paralelo: o resistor que liga A a B diretamente, de 9 Ω, e o caminho que passa por C, com dois resistores em série, 18 Ω. Req = (9 · 18)/(9 + 18) = 162/27 = 6 Ω.\n\n27 Ω soma os três resistores, como se estivessem em série. 3 Ω trata os três como se estivessem em paralelo. 18 Ω considera só o caminho que passa por C. E 4,5 Ω põe o resistor direto em paralelo com outro igual a ele, esquecendo que o caminho por C tem dois resistores.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma fonte de 12 V alimenta dois ramos em paralelo: o primeiro com um resistor de 2 Ω seguido de outro de 4 Ω, e o segundo com um de 4 Ω seguido de outro de 2 Ω, contando a partir do polo positivo. Qual é a diferença de potencial entre o ponto que fica entre os resistores do primeiro ramo e o ponto correspondente do segundo?",
    opcoes: [
      "0 V",
      "4 V",
      "12 V",
      "8 V",
      "6 V",
    ],
    correta: 1,
    explicacao:
      "Cada ramo tem 6 Ω e é percorrido por 12/6 = 2 A. No primeiro, o ponto intermediário está 2 · 2 = 4 V abaixo do polo positivo: potencial de 8 V, tomando o polo negativo como zero. No segundo, está 4 · 2 = 8 V abaixo: potencial de 4 V. A diferença é 8 − 4 = 4 V.\n\n0 V supõe que os pontos intermediários de ramos de mesma resistência tenham o mesmo potencial — o que só valeria com os resistores na mesma ordem. 12 V é a tensão da fonte. 8 V é o potencial de um dos pontos, e não a diferença. E 6 V é metade da tensão da fonte, como se cada ponto estivesse no meio do seu ramo.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Uma fonte de 12 V alimenta um resistor de 4 Ω em série com um resistor de 8 Ω. Um capacitor de 10 µF está ligado em paralelo com o resistor de 8 Ω. Depois de carregado, qual é a carga do capacitor?",
    opcoes: [
      "120 µC",
      "40 µC",
      "0 µC",
      "8 µC",
      "80 µC",
    ],
    correta: 4,
    explicacao:
      "Depois de carregado, o capacitor não deixa passar corrente contínua: o circuito se reduz aos resistores de 4 Ω e 8 Ω em série, com corrente 12/12 = 1 A. A tensão no capacitor é a mesma do resistor de 8 Ω, 8 · 1 = 8 V, e a carga é Q = C · U = 10 µF · 8 V = 80 µC.\n\n120 µC usa os 12 V da fonte inteira. 40 µC usa a tensão do resistor de 4 Ω. 0 µC supõe que, em regime permanente, o capacitor se descarregue. E 8 µC esquece o fator 10 da capacitância.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "media",
    enunciado:
      "Um resistor de 100 Ω suporta dissipar no máximo 1 W. Qual é a maior corrente que pode percorrê-lo?",
    opcoes: [
      "0,01 A",
      "10 A",
      "0,1 A",
      "1 A",
      "100 A",
    ],
    correta: 2,
    explicacao:
      "Com P = R · I², a corrente máxima é I = √(P/R) = √(1/100) = 0,1 A. A tensão máxima correspondente é R · I = 10 V, e U · I = 10 · 0,1 = 1 W confere. Acima dessa corrente, o resistor aquece além do que foi projetado para suportar e pode se danificar.\n\n0,01 A é P/R, sem a raiz. 10 A é √(P · R), que é a tensão máxima em volts, e não a corrente. 1 A toma a potência, em watts, como corrente. E 100 A multiplica a potência pela resistência.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Doze resistores de 12 Ω formam as arestas de um cubo. Qual é a resistência equivalente entre dois vértices opostos do cubo, as pontas de uma diagonal que atravessa o sólido?",
    opcoes: [
      "36 Ω",
      "7 Ω",
      "9 Ω",
      "10 Ω",
      "12 Ω",
    ],
    correta: 3,
    explicacao:
      "Por simetria, os três vértices vizinhos da entrada A ficam no mesmo potencial, e os três vizinhos da saída B também. Uma corrente I que entra em A se divide igualmente pelas 3 arestas que saem dele: I/3 em cada. Entre o primeiro trio e o segundo há 6 arestas, cada uma com I/6. Nas 3 arestas que chegam a B, I/3 em cada. A tensão entre A e B é 12 · I/3 + 12 · I/6 + 12 · I/3 = 10I, e a resistência equivalente é 5R/6 = 10 Ω.\n\n36 Ω soma as três arestas de um único caminho, ignorando os outros caminhos em paralelo. 7 Ω é a resistência entre vértices vizinhos, 7R/12. 9 Ω é a resistência entre as pontas da diagonal de uma face, 3R/4. E 12 Ω supõe que tudo se reduza a uma aresta.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Uma escada infinita de resistores é formada por seções iguais. Em cada seção, um resistor de 2 Ω fica no trilho de cima e, logo depois dele, outro resistor de 2 Ω liga o trilho de cima ao de baixo. Qual é a resistência equivalente medida na entrada da escada, entre os dois trilhos?",
    opcoes: [
      "4 Ω",
      "10/3 Ω",
      "1 + √5 Ω",
      "(1 + √5)/2 Ω",
      "2 Ω",
    ],
    correta: 2,
    explicacao:
      "Como a escada é infinita, retirar a primeira seção deixa uma escada igual à original, com a mesma resistência Req. Então Req = 2 + (2 · Req)/(2 + Req): o resistor em série mais o paralelo entre o resistor transversal e o resto da escada. Resolvendo: Req² − 2Req − 4 = 0, cuja raiz positiva é Req = 1 + √5 ≅ 3,24 Ω.\n\n4 Ω considera só a primeira seção (2 + 2). 10/3 Ω corta a escada na segunda seção. (1 + √5)/2 Ω é o resultado para resistores de 1 Ω, esquecendo o fator 2. E 2 Ω fica só com o primeiro resistor em série.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Entre os terminais A e B há uma ponte de resistores: no ramo de cima, 1 Ω junto de A e 2 Ω junto de B; no ramo de baixo, 2 Ω junto de A e 1 Ω junto de B; e um resistor de 1 Ω liga os pontos médios dos dois ramos. Qual é a resistência equivalente entre A e B?",
    opcoes: [
      "1,4 Ω",
      "1,5 Ω",
      "4/3 Ω",
      "7 Ω",
      "0,25 Ω",
    ],
    correta: 0,
    explicacao:
      "A ponte não está equilibrada (1/2 ≠ 2/1), e o resistor central é percorrido por corrente. Aplicando 1 V entre A e B e chamando de x o potencial do ponto médio de cima, a simetria da ponte dá 1 − x ao de baixo. A lei dos nós no ponto de cima: (1 − x)/1 = x/2 + (x − (1 − x))/1, que dá x = 4/7. A corrente que sai de A é (1 − 4/7)/1 + (1 − 3/7)/2 = 3/7 + 2/7 = 5/7 A, e Req = 1/(5/7) = 7/5 = 1,4 Ω.\n\n1,5 Ω ignora o resistor central e deixa os dois ramos de 3 Ω em paralelo. 4/3 Ω trata o resistor central como um curto, que junta os pontos médios. 7 Ω soma todos os resistores. E 0,25 Ω trata os cinco resistores como se estivessem todos em paralelo.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Uma fonte ideal de 12 V alimenta um resistor de 4 Ω em série com outro de 4 Ω. Um resistor de carga R é ligado em paralelo com o segundo resistor de 4 Ω. Qual é a maior potência que pode ser entregue à carga, escolhendo-se o valor de R?",
    opcoes: [
      "9 W",
      "1,125 W",
      "4,5 W",
      "18 W",
      "36 W",
    ],
    correta: 2,
    explicacao:
      "Vista pela carga, o resto do circuito equivale a um gerador (teorema de Thévenin): a tensão em aberto sobre o segundo resistor é 12 · 4/8 = 6 V, e a resistência vista pelos terminais, com a fonte substituída por um fio, é 4 ∥ 4 = 2 Ω. A potência na carga é máxima quando R = 2 Ω: P = 6²/(4 · 2) = 36/8 = 4,5 W.\n\n9 W ignora o segundo resistor de 4 Ω e trata o circuito como um gerador de 12 V com 4 Ω internos (144/16). 1,125 W usa 8 Ω como resistência de Thévenin, somando os dois resistores em série em vez de em paralelo. 18 W esquece o fator 4 da fórmula (6²/2). E 36 W é o quadrado da tensão de Thévenin, sem dividir pela resistência.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Duas baterias — uma de 10 V e resistência interna de 1 Ω, outra de 4 V e resistência interna de 1 Ω — estão ligadas em paralelo, polo positivo com polo positivo, e alimentam juntas um resistor de 2 Ω. Qual é a corrente na bateria de 4 V, e o que acontece com ela?",
    opcoes: [
      "1,6 A, descarregando a bateria de 4 V",
      "4,4 A, carregando a bateria de 4 V",
      "1,6 A, carregando a bateria de 4 V",
      "2,8 A, descarregando a bateria de 4 V",
      "3 A, carregando a bateria de 4 V",
    ],
    correta: 2,
    explicacao:
      "Chamando de V o potencial dos terminais positivos, com o negativo como referência, a lei dos nós dá: (10 − V)/1 + (4 − V)/1 = V/2. Então 14 − 2V = V/2, e V = 5,6 V. Na bateria de 4 V passa (4 − 5,6)/1 = −1,6 A: o sinal negativo indica que a corrente entra pelo seu polo positivo — ela está sendo carregada pela outra.\n\n“Descarregando” erra o sentido: o terminal está em 5,6 V, acima dos 4 V da bateria, e empurra corrente para dentro dela. 4,4 A é a corrente da bateria de 10 V. 2,8 A é a corrente no resistor de 2 Ω. E 3 A calcula a corrente entre as baterias ignorando o resistor externo, (10 − 4)/2.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Dois capacitores, de 2 µF e 4 µF, estão ligados em série a uma fonte de 12 V. Depois de carregados, qual é a tensão sobre o capacitor de 2 µF?",
    opcoes: [
      "4 V",
      "6 V",
      "12 V",
      "16 V",
      "8 V",
    ],
    correta: 4,
    explicacao:
      "Em série, os dois capacitores armazenam a mesma carga Q, e as tensões somam 12 V: Q/2 + Q/4 = 12, com Q em µC, ou 3Q/4 = 12, e Q = 16 µC. A tensão no de 2 µF é 16/2 = 8 V, e no de 4 µF, 4 V. O capacitor de menor capacitância fica com a maior tensão.\n\n4 V é a tensão no capacitor de 4 µF. 6 V divide a tensão igualmente, como se as capacitâncias fossem iguais. 12 V é a tensão da fonte inteira. E 16 V toma a carga, 16 µC, como se fosse a tensão.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Um amperímetro de resistência interna 0,5 Ω é ligado em série com um resistor de 5,5 Ω e uma fonte ideal de 12 V. Qual é a leitura do amperímetro?",
    opcoes: [
      "2,18 A",
      "2 A",
      "24 A",
      "2,4 A",
      "0,5 A",
    ],
    correta: 1,
    explicacao:
      "O amperímetro real entra no circuito com a sua resistência, em série: o total é 5,5 + 0,5 = 6 Ω, e a corrente — que ele mede — é 12/6 = 2 A. Sem o amperímetro, a corrente seria 12/5,5 ≅ 2,18 A: o próprio instrumento reduz a corrente que deveria medir.\n\n2,18 A é a corrente sem o amperímetro, como se ele fosse ideal. 24 A aplica os 12 V só à resistência do amperímetro. 2,4 A subtrai a resistência do amperímetro em vez de somar. E 0,5 A confunde a resistência interna do amperímetro com a leitura.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Uma fonte de 30 V é ligada entre os terminais A e B de uma ponte: no ramo de cima, 10 Ω junto de A e 20 Ω junto de B; no de baixo, 20 Ω junto de A e 10 Ω junto de B; e um resistor de 10 Ω liga os pontos médios dos ramos. Qual é a corrente no resistor central?",
    opcoes: [
      "0 A",
      "3/7 A",
      "15/7 A",
      "9/7 A",
      "3 A",
    ],
    correta: 1,
    explicacao:
      "Tomando B como referência, sejam x e y os potenciais dos pontos médios de cima e de baixo; pela simetria da ponte, y = 30 − x. A lei dos nós no ponto de cima: (30 − x)/10 = x/20 + (x − y)/10. Multiplicando por 20 e usando y = 30 − x: 60 − 2x = x + 4x − 60, e x = 120/7 ≅ 17,1 V; então y = 90/7 ≅ 12,9 V. A corrente no resistor central é (x − y)/10 = (30/7)/10 = 3/7 ≅ 0,43 A.\n\n0 A supõe a ponte equilibrada, o que exigiria 10/20 = 20/10. 15/7 A é a corrente total fornecida pela fonte. 9/7 A é a corrente no resistor de 10 Ω junto de A. E 3 A aplica os 30 V inteiros ao resistor central.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Um motor elétrico ligado a 220 V, com rendimento de 80%, ergue uma carga de 440 kg com velocidade constante de 1 m/s. Qual é a corrente no motor?",
    opcoes: [
      "25 A",
      "20 A",
      "16 A",
      "2,5 A",
      "31,25 A",
    ],
    correta: 0,
    explicacao:
      "A potência útil é a que ergue a carga: P = m · g · v = 440 · 10 · 1 = 4.400 W. Com rendimento de 80%, a potência elétrica consumida é 4.400/0,8 = 5.500 W, e a corrente é I = P/U = 5.500/220 = 25 A.\n\n20 A ignora o rendimento (4.400/220). 16 A multiplica pelo rendimento em vez de dividir. 2,5 A esquece o g no cálculo da potência útil (440 W em vez de 4.400 W). E 31,25 A divide pelo rendimento duas vezes.",
  },
  {
    materia: "exatas-militar",
    tema: "Eletrodinâmica: circuitos complexos",
    dificuldade: "dificil",
    enunciado:
      "Para medir uma resistência R, liga-se um amperímetro de resistência interna 2 Ω em série com ela, e um voltímetro ideal sobre o conjunto formado pelo amperímetro e o resistor. O voltímetro indica 12 V, e o amperímetro, 0,5 A. Qual é o valor de R?",
    opcoes: [
      "24 Ω",
      "26 Ω",
      "20 Ω",
      "22 Ω",
      "1 Ω",
    ],
    correta: 3,
    explicacao:
      "O voltímetro mede a tensão sobre o amperímetro e o resistor juntos: 12 = (2 + R) · 0,5. Então 2 + R = 24, e R = 22 Ω. A simples divisão 12/0,5 = 24 Ω inclui a resistência do amperímetro e superestima R.\n\n24 Ω é essa divisão direta, sem descontar o amperímetro. 26 Ω soma a resistência do amperímetro em vez de subtrair. 20 Ω a desconta duas vezes. E 1 Ω é a queda de tensão no amperímetro, 0,5 · 2 = 1 V, tomada como resistência.",
  },
];
