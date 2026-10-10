/* Termodinâmica: ciclos e máquinas térmicas (50 questões) — exatas-militar.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/exatas-militar__termodinamica-ciclos-e-maquinas-termicas.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/exatas-militar__termodinamica-ciclos-e-maquinas-termicas.json. */

export const questoes = [
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Um gás se expande sob pressão constante de 2 · 10⁵ Pa, passando de 0,01 m³ para 0,03 m³. Qual é o trabalho realizado pelo gás?",
    opcoes: [
      "6.000 J",
      "2.000 J",
      "4.000 J",
      "8.000 J",
      "1 · 10⁻⁷ J",
    ],
    correta: 2,
    explicacao:
      "Sob pressão constante, o trabalho realizado pelo gás é W = p · ΔV = 2 · 10⁵ · (0,03 − 0,01) = 2 · 10⁵ · 0,02 = 4.000 J. No diagrama pV, é a área do retângulo sob a reta horizontal, entre os dois volumes. Como o gás se expande, o trabalho é positivo: o gás empurra a vizinhança.\n\n6.000 J usa o volume final em vez da variação. 2.000 J usa o volume inicial. 8.000 J soma os dois volumes. E 1 · 10⁻⁷ J divide a variação de volume pela pressão.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Um gás recebe 500 J de calor e, ao mesmo tempo, realiza 200 J de trabalho sobre a vizinhança. Qual é a variação da sua energia interna?",
    opcoes: [
      "700 J",
      "−300 J",
      "200 J",
      "500 J",
      "300 J",
    ],
    correta: 4,
    explicacao:
      "Pela primeira lei da termodinâmica, Q = ΔU + W, em que Q é o calor recebido e W o trabalho realizado pelo gás. Então ΔU = Q − W = 500 − 200 = 300 J: dos 500 J que entram como calor, 200 J saem como trabalho, e o restante fica no gás, aumentando a sua energia interna (e a sua temperatura, se for um gás ideal).\n\n700 J soma o trabalho ao calor, como se o gás o tivesse recebido. −300 J inverte o sinal, como se o gás perdesse energia. 200 J é o trabalho, e 500 J, o calor recebido; nenhum dos dois é a variação da energia interna.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Uma máquina de Carnot opera entre uma fonte quente a 227 °C e uma fonte fria a 27 °C. Qual é o seu rendimento?",
    opcoes: [
      "88%",
      "60%",
      "67%",
      "40%",
      "100%",
    ],
    correta: 3,
    explicacao:
      "O rendimento de Carnot, o máximo possível entre duas temperaturas, é η = 1 − Tf/Tq, com as temperaturas em kelvin: Tq = 227 + 273 = 500 K e Tf = 27 + 273 = 300 K. Então η = 1 − 300/500 = 0,4 = 40%. Nenhuma máquina operando entre essas fontes consegue converter em trabalho mais de 40% do calor que recebe.\n\n88% usa as temperaturas em graus Celsius, 1 − 27/227. 60% é a razão Tf/Tq, a fração do calor que vai para a fonte fria. 67% divide a diferença de temperaturas pela temperatura fria em vez da quente. E 100% é impossível para qualquer máquina térmica, mesmo ideal.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Um gás ideal se expande isotermicamente e, nesse processo, recebe 800 J de calor. Qual é o trabalho realizado pelo gás?",
    opcoes: [
      "0 J",
      "800 J",
      "1.600 J",
      "400 J",
      "−800 J",
    ],
    correta: 1,
    explicacao:
      "A energia interna de um gás ideal depende só da temperatura; numa transformação isotérmica, ela não varia: ΔU = 0. Pela primeira lei, Q = ΔU + W, e então W = Q = 800 J. Todo o calor recebido sai como trabalho, e é por isso que o gás consegue se expandir sem esfriar.\n\n0 J confunde a variação nula da energia interna com trabalho nulo. 1.600 J soma calor e trabalho como se fossem parcelas independentes. 400 J divide o calor entre trabalho e energia interna, o que acontece em outros processos, e não no isotérmico. E −800 J inverte o sinal: numa expansão, o gás realiza trabalho positivo.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Um gás ideal ocupa 6 L a 27 °C, sob pressão de 2 atm. Se ele for aquecido até 127 °C e comprimido até 4 L, qual será a sua pressão?",
    opcoes: [
      "3 atm",
      "2,67 atm",
      "14,1 atm",
      "1,78 atm",
      "4 atm",
    ],
    correta: 4,
    explicacao:
      "Com a quantidade de gás constante, p · V/T se conserva, com T em kelvin: 300 K e 400 K. Então p₂ = p₁ · (V₁/V₂) · (T₂/T₁) = 2 · (6/4) · (400/300) = 2 · 1,5 · 1,33 = 4 atm. A compressão sozinha levaria a 3 atm, e o aquecimento aumenta a pressão em mais um terço.\n\n3 atm considera só a mudança de volume. 2,67 atm considera só a de temperatura. 14,1 atm usa as temperaturas em graus Celsius (127/27). E 1,78 atm inverte a razão dos volumes.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "A cada ciclo, um refrigerador retira 600 J de calor do seu interior, consumindo 200 J de trabalho do motor. Quanto calor ele libera no ambiente externo por ciclo?",
    opcoes: [
      "400 J",
      "800 J",
      "600 J",
      "200 J",
      "3 J",
    ],
    correta: 1,
    explicacao:
      "Num ciclo, o fluido refrigerante volta ao estado inicial, e a sua energia interna não varia. Toda a energia que entra precisa sair: os 600 J retirados do interior e os 200 J de trabalho são liberados no ambiente, 600 + 200 = 800 J. É por isso que a parte de trás de uma geladeira esquenta. A eficiência do refrigerador é 600/200 = 3.\n\n400 J subtrai o trabalho em vez de somar. 600 J esquece o trabalho do motor. 200 J é só o trabalho consumido. E 3 é a eficiência, um número sem unidade, e não uma quantidade de calor.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Qual das afirmações a seguir está de acordo com a segunda lei da termodinâmica?",
    opcoes: [
      "Uma máquina térmica ideal, sem atrito, pode ter rendimento de 100%",
      "O calor pode passar espontaneamente de um corpo frio para um corpo quente, se o frio tiver mais massa",
      "A energia total de um sistema isolado diminui com o tempo",
      "Um refrigerador pode transferir calor do interior para fora sem consumir trabalho",
      "Nenhuma máquina térmica que opere em ciclos converte em trabalho todo o calor que recebe da fonte quente",
    ],
    correta: 4,
    explicacao:
      "A segunda lei, no enunciado de Kelvin e Planck, diz que é impossível uma máquina que, operando em ciclos, transforme integralmente em trabalho o calor recebido de uma fonte: parte do calor precisa ser rejeitada para uma fonte fria. Mesmo a máquina ideal de Carnot tem rendimento 1 − Tf/Tq, menor que 100% sempre que a fonte fria está acima do zero absoluto.\n\nA máquina ideal com 100% contradiz exatamente esse enunciado. O calor flui espontaneamente do quente para o frio, qualquer que seja a massa dos corpos (enunciado de Clausius). A energia de um sistema isolado se conserva, pela primeira lei; o que aumenta é a entropia. E o refrigerador só transfere calor do frio para o quente consumindo trabalho.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Uma máquina térmica recebe 1.000 J de calor da fonte quente e rejeita 700 J para a fonte fria a cada ciclo. Qual é o seu rendimento?",
    opcoes: [
      "30%",
      "70%",
      "43%",
      "143%",
      "Não é possível calcular sem as temperaturas das fontes",
    ],
    correta: 0,
    explicacao:
      "Num ciclo, a energia interna da substância de trabalho volta ao valor inicial; então o trabalho é a diferença entre o calor recebido e o rejeitado: W = 1.000 − 700 = 300 J. O rendimento é a fração do calor recebido que vira trabalho: η = 300/1.000 = 0,3 = 30%.\n\n70% é a fração rejeitada, 700/1.000. 43% divide o trabalho pelo calor rejeitado em vez do recebido. 143% divide o calor recebido pelo rejeitado; um rendimento acima de 100% é impossível. E as temperaturas seriam necessárias para o rendimento máximo, de Carnot, mas não para o rendimento real, que sai direto dos calores.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Dois mols de um gás ideal são aquecidos sob pressão constante, e a sua temperatura aumenta 50 K. Com R = 8,31 J/(mol·K), qual é o trabalho realizado pelo gás?",
    opcoes: [
      "1.246,5 J",
      "2.077,5 J",
      "415,5 J",
      "831 J",
      "0 J",
    ],
    correta: 3,
    explicacao:
      "Sob pressão constante, W = p · ΔV, e, pela equação dos gases ideais, p · ΔV = n · R · ΔT. Então W = 2 · 8,31 · 50 = 831 J. O trabalho não depende da pressão escolhida nem do tipo de gás, só da quantidade de gás e da variação de temperatura.\n\n1.246,5 J é (3/2) · n · R · ΔT, a variação da energia interna de um gás monoatômico. 2.077,5 J é (5/2) · n · R · ΔT, o calor recebido por esse gás. 415,5 J considera um mol só. E 0 J supõe que o trabalho seja nulo, o que vale para volume constante.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Um gás recebe 400 J de calor numa transformação a volume constante. Quais são o trabalho realizado por ele e a variação da sua energia interna?",
    opcoes: [
      "Trabalho de 400 J e ΔU = 0",
      "Trabalho nulo e ΔU = 400 J",
      "Trabalho de 200 J e ΔU = 200 J",
      "Trabalho nulo e ΔU = 0",
      "Trabalho de 400 J e ΔU = 400 J",
    ],
    correta: 1,
    explicacao:
      "Sem variação de volume, o gás não empurra nada, e o trabalho é nulo: W = p · ΔV = 0. Pela primeira lei, ΔU = Q − W = 400 − 0 = 400 J: todo o calor recebido fica no gás como energia interna, e a sua temperatura e a sua pressão aumentam.\n\n“Trabalho de 400 J e ΔU = 0” descreve uma transformação isotérmica. “200 J e 200 J” divide o calor sem justificativa. “Trabalho nulo e ΔU = 0” esquece o calor recebido. E “400 J e 400 J” conta o calor duas vezes, violando a conservação da energia.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Um gás percorre, no sentido horário do diagrama pV, um ciclo retangular com pressões de 1 · 10⁵ Pa e 3 · 10⁵ Pa e volumes de 2 L e 5 L. Qual é o trabalho líquido realizado pelo gás em cada ciclo?",
    opcoes: [
      "1.500 J",
      "900 J",
      "300 J",
      "600 J",
      "0 J",
    ],
    correta: 3,
    explicacao:
      "O trabalho líquido num ciclo é a área que ele encerra no diagrama pV, positiva quando o ciclo é percorrido no sentido horário. O retângulo tem altura 3 · 10⁵ − 1 · 10⁵ = 2 · 10⁵ Pa e largura 5 − 2 = 3 L = 3 · 10⁻³ m³: W = 2 · 10⁵ · 3 · 10⁻³ = 600 J. Na expansão, sob a pressão maior, o gás realiza 900 J; na compressão, sob a menor, recebe 300 J.\n\n1.500 J multiplica a pressão maior pelo volume maior. 900 J é só o trabalho da expansão. 300 J é só o da compressão. E 0 J supõe que, por voltar ao estado inicial, o gás não realize trabalho líquido; o que se anula num ciclo é a variação da energia interna.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "facil",
    enunciado:
      "Numa compressão adiabática rápida, como a do ar numa bomba de encher pneus, o que acontece com a temperatura do gás?",
    opcoes: [
      "Diminui, porque o gás perde calor para o ambiente",
      "Não muda, porque não há troca de calor",
      "Aumenta, porque o gás recebe calor do ambiente",
      "Não muda, porque a compressão é isotérmica",
      "Aumenta, porque o trabalho realizado sobre o gás aumenta a sua energia interna",
    ],
    correta: 4,
    explicacao:
      "Numa transformação adiabática, não há troca de calor: Q = 0. Pela primeira lei, ΔU = Q − W = −W; na compressão, o trabalho realizado pelo gás é negativo (é a vizinhança que realiza trabalho sobre ele), e então ΔU > 0. Num gás ideal, energia interna maior significa temperatura maior. É por isso que a bomba de encher pneus esquenta na ponta.\n\n“Perde calor” e “recebe calor” contradizem a própria definição de adiabática. “Não muda, porque não há troca de calor” confunde calor com temperatura: a energia interna pode variar por trabalho. E a compressão rápida não é isotérmica: não dá tempo de o gás trocar calor e manter a temperatura.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um mol de gás ideal se expande isotermicamente a 300 K até dobrar de volume. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, qual é o trabalho realizado pelo gás?",
    opcoes: [
      "≈ 1,7 kJ",
      "≈ 2,5 kJ",
      "≈ 0,75 kJ",
      "0 J",
      "≈ 5,0 kJ",
    ],
    correta: 0,
    explicacao:
      "Na isoterma, a pressão cai à medida que o volume cresce, p = nRT/V, e o trabalho é a área sob essa curva: W = n · R · T · ln(V₂/V₁) = 1 · 8,31 · 300 · ln 2 ≅ 2.493 · 0,69 ≅ 1.720 J ≅ 1,7 kJ. Como a energia interna não varia, o gás recebe exatamente esse calor da vizinhança.\n\n2,5 kJ é n · R · T, sem o logaritmo. 0,75 kJ usa o logaritmo decimal de 2 (≅ 0,30) no lugar do natural. 0 J confunde a energia interna constante com trabalho nulo. E 5,0 kJ multiplica n · R · T pela razão dos volumes, 2, em vez de pelo seu logaritmo.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal monoatômico (γ = 5/3) é comprimido adiabaticamente até 1/8 do volume inicial. Por quanto fica multiplicada a sua pressão?",
    opcoes: [
      "8 vezes",
      "64 vezes",
      "13,3 vezes",
      "32 vezes",
      "4 vezes",
    ],
    correta: 3,
    explicacao:
      "Numa adiabática, p · V^γ é constante: p₂/p₁ = (V₁/V₂)^γ = 8^(5/3) = (8^(1/3))⁵ = 2⁵ = 32. A pressão sobe mais do que numa compressão isotérmica porque, sem trocar calor, o gás também esquenta: a temperatura fica multiplicada por 8^(2/3) = 4, e 8 · 4 = 32.\n\n8 vezes é o resultado isotérmico, da lei de Boyle. 64 vezes eleva 8 ao quadrado. 13,3 vezes multiplica 8 por γ em vez de elevar. E 4 vezes é o fator da temperatura, e não o da pressão.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um refrigerador de Carnot retira calor de um congelador a −3 °C e o descarrega num ambiente a 27 °C. Qual é a sua eficiência, isto é, a razão entre o calor retirado do congelador e o trabalho consumido?",
    opcoes: [
      "10",
      "0,9",
      "9",
      "0,1",
      "1/9",
    ],
    correta: 2,
    explicacao:
      "Para um refrigerador de Carnot, Qf/Qq = Tf/Tq, com as temperaturas em kelvin: 270 K e 300 K. A eficiência é Qf/W = Qf/(Qq − Qf) = Tf/(Tq − Tf) = 270/30 = 9: cada joule de trabalho retira 9 J do congelador. Quanto menor a diferença de temperatura, maior a eficiência.\n\n10 é Tq/(Tq − Tf), a eficiência de uma bomba de calor, que conta o calor entregue ao ambiente. 0,9 é Tf/Tq. 0,1 é a diferença de temperaturas dividida por Tq, o rendimento de uma máquina de Carnot entre as mesmas fontes. E 1/9 inverte a razão.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina térmica tem rendimento de 25% e rejeita 600 J de calor para a fonte fria a cada ciclo. Qual é o trabalho que ela realiza por ciclo?",
    opcoes: [
      "150 J",
      "200 J",
      "800 J",
      "2.400 J",
      "450 J",
    ],
    correta: 1,
    explicacao:
      "Se a máquina converte 25% do calor recebido em trabalho, os outros 75% são rejeitados: 0,75 · Qq = 600 J, e Qq = 800 J. O trabalho é W = 0,25 · 800 = 200 J, que também sai de W = Qq − Qf = 800 − 600.\n\n150 J aplica os 25% ao calor rejeitado, e não ao recebido. 800 J é o calor recebido. 2.400 J divide o calor rejeitado pelo rendimento. E 450 J aplica 75% ao calor rejeitado.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um inventor afirma que a sua máquina, operando entre fontes a 400 K e a 200 K, recebe 1.000 J e realiza 600 J de trabalho por ciclo. A afirmação é possível?",
    opcoes: [
      "Sim: 60% é menor que 100%",
      "Sim, desde que a máquina não tenha atrito",
      "Não: o rendimento máximo é de 50%, e a máquina teria 40%",
      "Sim: o rendimento máximo entre essas temperaturas é de 67%",
      "Não: o rendimento máximo entre essas temperaturas é de 50%, e a máquina teria 60%",
    ],
    correta: 4,
    explicacao:
      "Nenhuma máquina operando entre duas fontes supera o rendimento de Carnot: ηmáx = 1 − Tf/Tq = 1 − 200/400 = 0,5 = 50%. A máquina anunciada teria η = 600/1.000 = 60%, acima do limite: a afirmação viola a segunda lei da termodinâmica.\n\nSer menor que 100% não basta: o limite é o de Carnot. Nem uma máquina sem atrito, que é justamente a de Carnot, passaria de 50%. 40% é a fração rejeitada, e não o rendimento anunciado. E 67% calcula o limite como (Tq − Tf)/Tf, dividindo pela temperatura errada.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás percorre um ciclo triangular no diagrama pV, passando pelos estados A (2 L; 1 · 10⁵ Pa), B (2 L; 3 · 10⁵ Pa) e C (6 L; 1 · 10⁵ Pa), nessa ordem, e voltando a A. Qual é o trabalho líquido realizado pelo gás em cada ciclo?",
    opcoes: [
      "800 J",
      "1.200 J",
      "400 J",
      "200 J",
      "0 J",
    ],
    correta: 2,
    explicacao:
      "O trabalho líquido é a área do triângulo encerrado pelo ciclo. A base, sobre a isobárica de 1 · 10⁵ Pa, vai de 2 L a 6 L: 4 · 10⁻³ m³. A altura, de A até B, é 2 · 10⁵ Pa. Área = (4 · 10⁻³ · 2 · 10⁵)/2 = 400 J. O sentido A → B → C → A é horário (sobe, desce pela diagonal para a direita e volta pela base), e por isso o trabalho é positivo.\n\n800 J esquece a divisão por 2; é também a área sob o trecho B → C, que inclui a região abaixo do ciclo. 1.200 J multiplica a pressão máxima pela variação total de volume. 200 J divide a área por 2 duas vezes. E 0 J supõe que o trabalho de um ciclo seja nulo.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Dois mols de um gás ideal diatômico são aquecidos sob pressão constante, de 300 K para 400 K. Com R = 8,31 J/(mol·K), quanto calor o gás recebe?",
    opcoes: [
      "≈ 4,2 kJ",
      "≈ 5,8 kJ",
      "≈ 1,7 kJ",
      "≈ 2,5 kJ",
      "≈ 7,5 kJ",
    ],
    correta: 1,
    explicacao:
      "Num gás diatômico, a energia interna é (5/2) · n · R · T; o aumento é ΔU = (5/2) · 2 · 8,31 · 100 ≅ 4.155 J. Sob pressão constante, o gás ainda realiza W = n · R · ΔT = 2 · 8,31 · 100 = 1.662 J. Pela primeira lei, Q = ΔU + W ≅ 5.817 J ≅ 5,8 kJ, o mesmo que (7/2) · n · R · ΔT.\n\n4,2 kJ é só a variação da energia interna, como se o volume fosse constante. 1,7 kJ é só o trabalho. 2,5 kJ usa (3/2) · n · R · ΔT, a variação da energia interna de um gás monoatômico. E 7,5 kJ usa (9/2) · n · R · ΔT, somando o trabalho duas vezes.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Com R = 8,31 J/(mol·K), qual é a energia interna de 3 mols de um gás ideal monoatômico a 127 °C?",
    opcoes: [
      "≈ 10 kJ",
      "≈ 25 kJ",
      "≈ 4,7 kJ",
      "≈ 5 kJ",
      "≈ 15 kJ",
    ],
    correta: 4,
    explicacao:
      "A energia interna de um gás ideal monoatômico é a energia cinética de translação das suas moléculas: U = (3/2) · n · R · T, com T em kelvin, 127 + 273 = 400 K. Então U = 1,5 · 3 · 8,31 · 400 ≅ 14.958 J ≅ 15 kJ. Ela depende só da temperatura e da quantidade de gás, e não da pressão ou do volume separadamente.\n\n10 kJ é n · R · T, sem o fator 3/2. 25 kJ usa 5/2, o fator de um gás diatômico. 4,7 kJ usa a temperatura em graus Celsius, 127. E 5 kJ considera um mol só.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal monoatômico, a partir de um mesmo estado inicial, dobra de volume numa expansão isotérmica e, em outra experiência, numa expansão adiabática. Como se comparam as pressões finais?",
    opcoes: [
      "A pressão final é menor na adiabática, porque o gás também esfria",
      "A pressão final é maior na adiabática, porque o gás não perde calor",
      "As pressões finais são iguais, porque o volume final é o mesmo",
      "A pressão final é menor na isotérmica, porque o gás recebe calor",
      "Na adiabática, a pressão não muda, porque não há troca de calor",
    ],
    correta: 0,
    explicacao:
      "Na isotérmica, a temperatura se mantém e a pressão cai à metade (lei de Boyle). Na adiabática, o gás realiza trabalho sem receber calor e gasta energia interna: a temperatura cai, e a pressão cai mais do que na isotérmica, para 2^(−5/3) ≅ 0,31 da inicial, contra 0,5. No diagrama pV, a adiabática é mais inclinada que a isoterma que passa pelo mesmo ponto.\n\n“Maior na adiabática” ignora o resfriamento. “Iguais” esquece que a pressão depende também da temperatura, e não só do volume. “Menor na isotérmica” inverte o resultado: receber calor é justamente o que mantém mais alta a pressão da isotérmica. E a pressão da adiabática muda bastante: cai com o volume e com a temperatura.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás é comprimido, recebendo 300 J de trabalho da vizinhança, e ao mesmo tempo libera 100 J de calor. Qual é a variação da sua energia interna?",
    opcoes: [
      "+200 J",
      "−200 J",
      "+400 J",
      "−400 J",
      "0 J",
    ],
    correta: 0,
    explicacao:
      "Com a convenção Q = ΔU + W, em que Q é o calor recebido e W o trabalho realizado pelo gás: o gás libera calor, Q = −100 J, e recebe trabalho, W = −300 J. Então ΔU = Q − W = −100 − (−300) = +200 J. Em palavras: entram 300 J como trabalho e saem 100 J como calor, e ficam 200 J a mais no gás.\n\n−200 J troca os sinais dos dois termos. +400 J soma os valores, como se o gás também recebesse calor. −400 J soma as saídas, como se o gás também realizasse trabalho. E 0 J supõe que calor e trabalho se compensem.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Meio mol de gás ideal é comprimido isotermicamente, a 400 K, até metade do volume. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, o que acontece com o calor nesse processo?",
    opcoes: [
      "O gás libera ≈ 1,15 kJ",
      "O gás recebe ≈ 1,15 kJ",
      "O gás não troca calor, porque a temperatura não varia",
      "O gás libera ≈ 1,66 kJ",
      "O gás libera ≈ 0,50 kJ",
    ],
    correta: 0,
    explicacao:
      "Numa isoterma de gás ideal, ΔU = 0, e o calor trocado é igual ao trabalho: Q = W = n · R · T · ln(V₂/V₁) = 0,5 · 8,31 · 400 · ln(1/2) ≅ −1.662 · 0,69 ≅ −1.150 J. O sinal negativo indica que o gás libera cerca de 1,15 kJ: a energia que ele recebe como trabalho na compressão sai como calor, e por isso a temperatura se mantém.\n\n“Recebe” erra o sinal. “Não troca calor” confunde temperatura constante com ausência de calor. 1,66 kJ é n · R · T, sem o logaritmo. E 0,50 kJ usa o logaritmo decimal de 2 (≅ 0,30) no lugar do natural.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina de Carnot opera entre 127 °C e 27 °C e realiza 500 J de trabalho por ciclo. Quanto calor ela rejeita para a fonte fria em cada ciclo?",
    opcoes: [
      "2.000 J",
      "375 J",
      "500 J",
      "1.500 J",
      "≈ 135 J",
    ],
    correta: 3,
    explicacao:
      "O rendimento é η = 1 − Tf/Tq = 1 − 300/400 = 0,25. O calor recebido é Qq = W/η = 500/0,25 = 2.000 J, e o rejeitado, Qf = Qq − W = 2.000 − 500 = 1.500 J. Confere com a relação de Carnot, Qf/Qq = Tf/Tq = 300/400 = 0,75.\n\n2.000 J é o calor recebido da fonte quente. 375 J aplica a fração 0,75 ao trabalho, e não ao calor recebido. 500 J supõe o calor rejeitado igual ao trabalho. E 135 J usa as temperaturas em graus Celsius, o que daria um rendimento de 79%.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal está num lado de um recipiente de paredes isolantes e rígidas; o outro lado, de mesmo volume, está vazio. Retira-se a divisória, e o gás se espalha pelo recipiente inteiro. O que acontece com a sua temperatura?",
    opcoes: [
      "Diminui, porque o gás realiza trabalho ao se expandir",
      "Aumenta, porque as moléculas ganham mais espaço",
      "Cai à metade, porque o volume dobra",
      "Não muda, porque não há calor nem trabalho",
      "Diminui, porque a pressão cai à metade",
    ],
    correta: 3,
    explicacao:
      "As paredes isolantes impedem a troca de calor (Q = 0), e o gás se expande contra o vácuo, sem empurrar nada: não realiza trabalho (W = 0). Pela primeira lei, ΔU = 0, e, num gás ideal, a energia interna depende só da temperatura, que fica a mesma. A pressão cai à metade, mas por causa do volume dobrado, com a temperatura constante.\n\n“Realiza trabalho” esquece que não há nada do outro lado para ser empurrado. “Ganham mais espaço” não altera a energia das moléculas. “Cai à metade” aplica uma proporção entre temperatura e volume que só vale sob pressão constante. E a queda da pressão não implica queda de temperatura: aqui ela vem só do volume maior.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal monoatômico recebe calor sob pressão constante. Que fração desse calor é convertida em trabalho realizado pelo gás?",
    opcoes: [
      "60%",
      "100%",
      "67%",
      "29%",
      "40%",
    ],
    correta: 4,
    explicacao:
      "Sob pressão constante, o trabalho é W = p · ΔV = n · R · ΔT, e a variação da energia interna do gás monoatômico é ΔU = (3/2) · n · R · ΔT. O calor recebido é a soma: Q = (5/2) · n · R · ΔT. A fração que vira trabalho é W/Q = 1/(5/2) = 2/5 = 40%; os outros 60% aumentam a energia interna.\n\n60% é a fração que fica como energia interna. 100% vale para a isotérmica, em que a energia interna não varia. 67% é a razão entre o trabalho e a variação da energia interna, 2/3, e não entre o trabalho e o calor. E 29% (2/7) seria a fração para um gás diatômico.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "O motor de um automóvel tem rendimento de 25% e queima combustível que libera 40 kJ de calor por segundo. Quais são a potência útil do motor e o calor que ele rejeita por segundo?",
    opcoes: [
      "30 kW úteis e 10 kJ rejeitados por segundo",
      "10 kW úteis e 40 kJ rejeitados por segundo",
      "10 kW úteis e 30 kJ rejeitados por segundo",
      "40 kW úteis e nenhum calor rejeitado",
      "25 kW úteis e 15 kJ rejeitados por segundo",
    ],
    correta: 2,
    explicacao:
      "A potência útil é a fração do calor liberado por segundo que vira trabalho: 0,25 · 40 kJ/s = 10 kJ/s = 10 kW. O restante, 40 − 10 = 30 kJ por segundo, sai como calor, pelo escapamento e pelo radiador. A soma do trabalho com o calor rejeitado tem de ser igual ao calor liberado pelo combustível.\n\n“30 kW e 10 kJ” troca as duas parcelas, como se o rendimento fosse de 75%. “10 kW e 40 kJ” esquece que a energia que vira trabalho não sai como calor. “40 kW e nenhum calor” supõe um motor de rendimento 100%, impossível. E “25 kW e 15 kJ” toma o rendimento, 25%, como se fosse a potência.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina térmica real, operando entre 600 K e 300 K, tem rendimento de 30%. Que fração do rendimento de uma máquina de Carnot entre as mesmas fontes ela alcança?",
    opcoes: [
      "50%",
      "30%",
      "15%",
      "167%",
      "60%",
    ],
    correta: 4,
    explicacao:
      "O rendimento de Carnot entre essas fontes é ηC = 1 − 300/600 = 0,5 = 50%, o máximo possível. A máquina real alcança 30%, que é 0,30/0,50 = 0,6 = 60% do rendimento máximo. A diferença se deve a atritos, perdas de calor e processos irreversíveis, que a máquina ideal não tem.\n\n50% é o próprio rendimento de Carnot. 30% é o rendimento da máquina real. 15% multiplica os dois rendimentos em vez de dividir. E 167% inverte a divisão, 0,5/0,3.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás vai do estado A (1 L; 1 · 10⁵ Pa) ao estado C (4 L; 4 · 10⁵ Pa) por dois caminhos: no primeiro, a pressão sobe a volume constante e depois o gás se expande sob 4 · 10⁵ Pa; no segundo, ele se expande sob 1 · 10⁵ Pa e depois a pressão sobe a volume constante. Qual é a diferença entre os trabalhos realizados pelo gás nos dois caminhos?",
    opcoes: [
      "900 J",
      "0 J",
      "1.500 J",
      "1.200 J",
      "300 J",
    ],
    correta: 0,
    explicacao:
      "Nos trechos a volume constante não há trabalho. No primeiro caminho, a expansão acontece sob 4 · 10⁵ Pa: W₁ = 4 · 10⁵ · 3 · 10⁻³ = 1.200 J. No segundo, sob 1 · 10⁵ Pa: W₂ = 1 · 10⁵ · 3 · 10⁻³ = 300 J. A diferença é de 900 J. O trabalho depende do caminho, e não só dos estados inicial e final; já a variação da energia interna é a mesma nos dois.\n\n0 J supõe que o trabalho, como a energia interna, dependa só dos estados inicial e final. 1.500 J soma os dois trabalhos. 1.200 J e 300 J são os trabalhos de cada caminho, e não a diferença.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Num ciclo completo, um gás absorve 900 J de calor e rejeita 600 J. Quais são o trabalho líquido realizado pelo gás e a variação da sua energia interna no ciclo?",
    opcoes: [
      "300 J e 300 J",
      "1.500 J e zero",
      "300 J e zero",
      "Zero e 300 J",
      "900 J e −600 J",
    ],
    correta: 2,
    explicacao:
      "Ao fim de um ciclo, o gás volta ao estado inicial, e a energia interna, que é função do estado, também volta ao valor inicial: ΔU = 0. Pela primeira lei aplicada ao ciclo, o trabalho líquido é igual ao calor líquido: W = 900 − 600 = 300 J. É exatamente o que faz uma máquina térmica: converte em trabalho a diferença entre o calor absorvido e o rejeitado.\n\n“300 J e 300 J” esquece que a energia interna volta ao valor inicial. “1.500 J e zero” soma os calores em vez de subtrair. “Zero e 300 J” descreveria um gás que não realiza trabalho e não volta ao estado inicial. E “900 J e −600 J” toma os calores como se fossem o trabalho e a variação de energia.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um mol de gás ideal monoatômico se expande adiabaticamente, e a sua temperatura cai de 400 K para 300 K. Com R = 8,31 J/(mol·K), qual é o trabalho realizado pelo gás?",
    opcoes: [
      "≈ 0,83 kJ",
      "≈ 1,25 kJ",
      "≈ 2,08 kJ",
      "0 J",
      "≈ −1,25 kJ",
    ],
    correta: 1,
    explicacao:
      "Numa adiabática, Q = 0, e a primeira lei dá W = −ΔU: o trabalho realizado pelo gás sai inteiramente da sua energia interna. Com ΔU = (3/2) · n · R · ΔT = 1,5 · 8,31 · (−100) ≅ −1.246 J, o trabalho é W ≅ +1.246 J ≅ 1,25 kJ. É por isso que o gás esfria ao se expandir sem receber calor.\n\n0,83 kJ é n · R · ΔT, sem o fator 3/2. 2,08 kJ usa 5/2, o fator de um gás diatômico. 0 J confunde ausência de calor com ausência de trabalho. E −1,25 kJ é o sinal da variação da energia interna: o gás, ao se expandir, realiza trabalho positivo.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma bomba de calor com eficiência 3, que entrega à casa 3 J de calor para cada joule de energia elétrica consumida, precisa fornecer 6 kW de aquecimento. Qual é a potência elétrica consumida?",
    opcoes: [
      "18 kW",
      "6 kW",
      "4 kW",
      "2 kW",
      "1,5 kW",
    ],
    correta: 3,
    explicacao:
      "Se a bomba entrega 3 J de calor para cada joule elétrico, a potência elétrica é 6/3 = 2 kW. Os outros 4 kW não são criados: vêm do ar externo, do qual a bomba retira calor. A energia se conserva: 2 kW elétricos mais 4 kW retirados de fora são os 6 kW entregues.\n\n18 kW multiplica pela eficiência em vez de dividir. 6 kW seria o consumo de um aquecedor elétrico comum, de resistência. 4 kW é o calor retirado do ar externo. E 1,5 kW trata o 3 como a eficiência de refrigeração, o que daria 4 J entregues por joule elétrico.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Duas máquinas de Carnot funcionam em série: a primeira opera entre 800 K e 400 K e rejeita todo o seu calor para a segunda, que opera entre 400 K e 200 K. Qual é o rendimento do conjunto?",
    opcoes: [
      "100%",
      "75%",
      "50%",
      "25%",
      "Não dá para saber sem as quantidades de calor",
    ],
    correta: 1,
    explicacao:
      "Cada máquina tem rendimento de 50%: 1 − 400/800 e 1 − 200/400. Se a primeira recebe Q, realiza 0,5Q e rejeita 0,5Q, que a segunda recebe; esta realiza 0,25Q e rejeita 0,25Q a 200 K. O trabalho total é 0,75Q, e o rendimento, 75%, igual ao de uma única máquina de Carnot entre 800 K e 200 K: 1 − 200/800.\n\n100% soma os rendimentos, que se aplicam a calores diferentes. 50% é o rendimento de cada máquina isolada. 25% multiplica os rendimentos, o que dá só o trabalho da segunda máquina como fração de Q. E as quantidades de calor não são necessárias: o resultado vale para qualquer Q.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um cilindro rígido contém gás a 27 °C e 10 atm. Metade do gás escapa, e a temperatura do que restou cai para −3 °C. Qual é a pressão final?",
    opcoes: [
      "5 atm",
      "9 atm",
      "5,6 atm",
      "4,5 atm",
      "−0,56 atm",
    ],
    correta: 3,
    explicacao:
      "Com o volume constante, a pressão é proporcional ao número de mols e à temperatura absoluta: p₂ = p₁ · (n₂/n₁) · (T₂/T₁) = 10 · (1/2) · (270/300) = 10 · 0,5 · 0,9 = 4,5 atm. A perda de metade do gás, sozinha, levaria a 5 atm; o resfriamento reduz mais 10%.\n\n5 atm considera só a perda de gás. 9 atm considera só o resfriamento. 5,6 atm inverte a razão das temperaturas. E −0,56 atm usa as temperaturas em graus Celsius, o que dá uma pressão negativa, impossível.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal diatômico recebe 700 J de calor sob pressão constante. Qual é o aumento da sua energia interna?",
    opcoes: [
      "700 J",
      "200 J",
      "500 J",
      "420 J",
      "300 J",
    ],
    correta: 2,
    explicacao:
      "Num gás diatômico sob pressão constante, o calor recebido é Q = (7/2) · n · R · ΔT, a energia interna aumenta ΔU = (5/2) · n · R · ΔT, e o trabalho é W = n · R · ΔT. A fração que fica como energia interna é 5/7: ΔU = 700 · 5/7 = 500 J, e o gás realiza 200 J de trabalho.\n\n700 J supõe que todo o calor fique no gás, o que só vale a volume constante. 200 J é o trabalho realizado. 420 J usa a fração 3/5, a de um gás monoatômico. E 300 J usa a fração 3/7, com o fator do monoatômico no numerador.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um freezer com eficiência 3, que retira 3 J de calor para cada joule de trabalho, congela 1 kg de água que já está a 0 °C. Com calor latente de fusão de 334 kJ/kg, quanta energia elétrica ele consome nesse processo?",
    opcoes: [
      "≈ 111 kJ",
      "334 kJ",
      "1.002 kJ",
      "≈ 83,5 kJ",
      "≈ 445 kJ",
    ],
    correta: 0,
    explicacao:
      "Para congelar a água, o freezer precisa retirar dela Q = m · L = 1 · 334 = 334 kJ. Com eficiência 3, o trabalho necessário é W = Q/3 ≅ 111 kJ. O calor liberado no ambiente é a soma, 334 + 111 ≅ 445 kJ.\n\n334 kJ é o calor retirado da água, e não a energia consumida. 1.002 kJ multiplica pela eficiência em vez de dividir. 83,5 kJ divide por 4, somando 1 à eficiência, como se ela fosse a de uma bomba de calor. E 445 kJ é o calor que o freezer libera no ambiente.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "No motor a diesel, o ar (γ = 1,4) é comprimido adiabaticamente até 1/16 do volume inicial, partindo de 300 K. Com 16^0,4 ≅ 3,03, qual é a temperatura do ar ao fim da compressão?",
    opcoes: [
      "4.800 K",
      "1.200 K",
      "300 K",
      "≈ 909 K",
      "≈ 1.900 K",
    ],
    correta: 3,
    explicacao:
      "Numa adiabática, T · V^(γ − 1) é constante: T₂ = T₁ · (V₁/V₂)^(γ − 1) = 300 · 16^0,4 ≅ 300 · 3,03 ≅ 909 K, cerca de 636 °C. É essa temperatura, acima do ponto de ignição do óleo diesel, que dispensa a vela: o combustível injetado queima sozinho.\n\n4.800 K multiplica a temperatura pela razão de volumes inteira, 16. 1.200 K usa o expoente 1/2 (√16 = 4). 300 K supõe que, sem troca de calor, a temperatura não mude. E 1.900 K usa o expoente de um gás monoatômico, 2/3.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás percorre, no sentido anti-horário do diagrama pV, um ciclo retangular entre as pressões de 1 · 10⁵ Pa e 2 · 10⁵ Pa e os volumes de 1 L e 4 L. Qual é o trabalho líquido realizado pelo gás, e como funciona um dispositivo que opere nesse ciclo?",
    opcoes: [
      "+300 J; funciona como motor",
      "−300 J; funciona como motor",
      "−300 J; funciona como refrigerador",
      "0 J; o ciclo volta ao estado inicial",
      "+600 J; funciona como motor",
    ],
    correta: 2,
    explicacao:
      "O módulo do trabalho é a área do retângulo: (2 · 10⁵ − 1 · 10⁵) · (4 − 1) · 10⁻³ = 300 J. No sentido anti-horário, a expansão acontece sob a pressão menor e a compressão sob a maior: o gás recebe mais trabalho do que realiza, e o líquido é −300 J. Um ciclo que consome trabalho é o de um refrigerador (ou de uma bomba de calor), que usa esse trabalho para levar calor da fonte fria para a quente.\n\n+300 J e “motor” valeriam no sentido horário. −300 J com “motor” contradiz o sinal: um motor realiza trabalho líquido positivo. 0 J confunde trabalho com energia interna, que é a grandeza que volta ao valor inicial. E +600 J multiplica a pressão maior pela variação de volume.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Um gás ideal monoatômico é comprimido sob pressão constante de 1 · 10⁵ Pa, de 5 L para 2 L. Nesse processo, o gás recebe ou libera calor, e quanto?",
    opcoes: [
      "Libera 300 J",
      "Libera 450 J",
      "Recebe 750 J",
      "Libera 150 J",
      "Libera 750 J",
    ],
    correta: 4,
    explicacao:
      "O trabalho realizado pelo gás é W = p · ΔV = 1 · 10⁵ · (−3 · 10⁻³) = −300 J: ele recebe 300 J de trabalho. A energia interna varia ΔU = (3/2) · p · ΔV = −450 J: o gás esfria, porque a temperatura cai junto com o volume. Pela primeira lei, Q = ΔU + W = −450 − 300 = −750 J, e o gás libera 750 J de calor.\n\n300 J é só o trabalho. 450 J é só a variação da energia interna. “Recebe” erra o sinal: o gás perde energia interna e ainda recebe trabalho, e por isso precisa liberar calor. E 150 J subtrai as duas parcelas em vez de somá-las.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "media",
    enunciado:
      "Uma máquina de Carnot opera entre 327 °C e −73 °C e rejeita 400 J para a fonte fria a cada ciclo. Qual é o trabalho que ela realiza por ciclo?",
    opcoes: [
      "≈ 267 J",
      "800 J",
      "1.200 J",
      "400 J",
      "Não é possível saber sem o calor recebido da fonte quente",
    ],
    correta: 1,
    explicacao:
      "Numa máquina de Carnot, os calores trocados são proporcionais às temperaturas absolutas das fontes: Qq/Qf = Tq/Tf = 600/200 = 3. Então Qq = 3 · 400 = 1.200 J, e o trabalho é W = Qq − Qf = 1.200 − 400 = 800 J. Confere com o rendimento, 1 − 200/600 = 2/3, e 2/3 · 1.200 = 800 J.\n\n267 J aplica o rendimento de 2/3 ao calor rejeitado, e não ao recebido. 1.200 J é o calor recebido da fonte quente. 400 J supõe o trabalho igual ao calor rejeitado. E o calor recebido não precisa ser dado: na máquina de Carnot, ele sai da razão entre as temperaturas.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás ideal monoatômico percorre, no sentido horário, um ciclo retangular no diagrama pV, entre as pressões de 1 · 10⁵ Pa e 3 · 10⁵ Pa e os volumes de 1 L e 3 L. Qual é o rendimento desse ciclo?",
    opcoes: [
      "≈ 22%",
      "≈ 89%",
      "≈ 27%",
      "100%",
      "≈ 78%",
    ],
    correta: 0,
    explicacao:
      "O trabalho líquido é a área do retângulo: 2 · 10⁵ · 2 · 10⁻³ = 400 J. O calor é recebido em dois trechos: no aumento de pressão a 1 L, Q = (3/2) · V · Δp = 1,5 · 10⁻³ · 2 · 10⁵ = 300 J; na expansão a 3 · 10⁵ Pa, Q = (5/2) · p · ΔV = 2,5 · 3 · 10⁵ · 2 · 10⁻³ = 1.500 J. No total, o gás recebe 1.800 J, e η = 400/1.800 ≅ 0,22 = 22%. Nos outros dois trechos, ele rejeita 1.400 J.\n\n89% é o rendimento de Carnot entre a maior e a menor temperatura do ciclo (1 − 100/900, pela razão entre os produtos pV), um limite que o ciclo retangular não alcança. 27% divide o trabalho só pelo calor da expansão. 100% divide o trabalho pelo calor líquido, que é igual a ele. E 78% é a fração rejeitada, 1.400/1.800.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um mol de gás ideal monoatômico percorre um ciclo de Carnot entre 500 K e 300 K; na expansão isotérmica, o volume dobra. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, qual é o trabalho líquido por ciclo?",
    opcoes: [
      "≈ 2,88 kJ",
      "≈ 1,73 kJ",
      "≈ 1,15 kJ",
      "≈ 1,66 kJ",
      "0 J",
    ],
    correta: 2,
    explicacao:
      "Na expansão isotérmica a 500 K, o gás recebe Qq = n · R · Tq · ln 2 = 8,31 · 500 · 0,69 ≅ 2.870 J. O rendimento de Carnot é 1 − 300/500 = 0,4, e o trabalho líquido é W = 0,4 · Qq ≅ 1.150 J ≅ 1,15 kJ. Equivalentemente, W = n · R · (Tq − Tf) · ln 2: os trabalhos das duas adiabáticas se cancelam, e a compressão isotérmica a 300 K também reduz o volume à metade.\n\n2,88 kJ é o calor recebido, e não o trabalho. 1,73 kJ multiplica esse calor por Tf/Tq = 0,6, o que dá o calor rejeitado. 1,66 kJ é n · R · (Tq − Tf), sem o logaritmo. E 0 J confunde o trabalho de um ciclo com a variação da energia interna, que é nula.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um gás ideal diatômico (γ = 1,4), a 400 K, se expande adiabaticamente até dobrar de volume. Com 2^0,4 ≅ 1,32, qual é a temperatura final?",
    opcoes: [
      "200 K",
      "≈ 303 K",
      "400 K",
      "≈ 252 K",
      "≈ 283 K",
    ],
    correta: 1,
    explicacao:
      "Numa adiabática, T · V^(γ − 1) é constante: T₂ = T₁ · (V₁/V₂)^(γ − 1) = 400/2^0,4 ≅ 400/1,32 ≅ 303 K. O gás esfria porque realiza trabalho sem receber calor, gastando a própria energia interna; mas esfria menos do que sugeriria uma proporção direta com o volume.\n\n200 K divide a temperatura pela razão dos volumes, como se T fosse inversamente proporcional a V. 400 K supõe que, sem troca de calor, a temperatura não mude. 252 K usa o expoente de um gás monoatômico, 2/3. E 283 K usa o expoente 1/2, dividindo por √2.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Dois mols de gás ideal se expandem isotermicamente até triplicar de volume. Com R = 8,31 J/(mol·K) e ln 3 ≅ 1,10, qual é a variação da entropia do gás?",
    opcoes: [
      "0 J/K",
      "≈ 7,9 J/K",
      "≈ 16,6 J/K",
      "≈ 18,3 J/K",
      "≈ 33,2 J/K",
    ],
    correta: 3,
    explicacao:
      "Num processo reversível, ΔS = ∫dQ/T. Na isoterma, T é constante e o calor recebido é igual ao trabalho, n · R · T · ln(V₂/V₁); então ΔS = n · R · ln(V₂/V₁) = 2 · 8,31 · ln 3 ≅ 16,62 · 1,10 ≅ 18,3 J/K. A entropia do gás aumenta: ele se espalha por um volume maior. A temperatura nem precisa ser conhecida.\n\n0 J/K supõe que, com a temperatura constante, a entropia não mude, esquecendo o calor recebido. 7,9 J/K usa o logaritmo decimal de 3 (≅ 0,48). 16,6 J/K esquece o logaritmo. E 33,2 J/K usa V₂/V₁ − 1 = 2 no lugar de ln 3.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um freezer com eficiência 4, que retira 4 J de calor para cada joule elétrico, tem motor de 200 W. Quanto tempo ele leva, no mínimo, para congelar 2 kg de água que já está a 0 °C, com calor latente de fusão de 336 kJ/kg?",
    opcoes: [
      "14 min",
      "56 min",
      "11,2 min",
      "7 min",
      "3,5 min",
    ],
    correta: 0,
    explicacao:
      "O calor a retirar da água é Q = m · L = 2 · 336 = 672 kJ. Com eficiência 4 e 200 W de potência elétrica, o freezer retira 4 · 200 = 800 J por segundo. O tempo é 672.000/800 = 840 s = 14 min, desprezando outras entradas de calor no freezer.\n\n56 min divide o calor pela potência elétrica, como se o freezer retirasse só 200 J por segundo. 11,2 min usa 1.000 J por segundo, somando a potência elétrica ao calor retirado. 7 min considera só 1 kg de água. E 3,5 min divide ainda pela eficiência, como se ela reduzisse o calor a retirar.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um mol de gás ideal monoatômico percorre um ciclo: expansão isotérmica a 400 K até dobrar de volume; compressão a pressão constante até o volume inicial; e aquecimento a volume constante de volta ao estado inicial. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, qual é o rendimento do ciclo?",
    opcoes: [
      "50%",
      "≈ 28%",
      "≈ 13%",
      "100%",
      "≈ 87%",
    ],
    correta: 2,
    explicacao:
      "Na isoterma, o gás recebe Q₁ = R · 400 · ln 2 ≅ 2.290 J e realiza esse mesmo trabalho. Na compressão isobárica, a pressão é a metade da inicial e a temperatura cai de 400 K para 200 K: o trabalho é −R · 200 ≅ −1.662 J, e o gás libera (5/2) · R · 200 ≅ 4.155 J. No aquecimento a volume constante, de 200 K para 400 K, recebe (3/2) · R · 200 ≅ 2.493 J. O trabalho líquido é ≅ 2.290 − 1.662 ≅ 630 J; o calor recebido, ≅ 2.290 + 2.493 ≅ 4.780 J; e η ≅ 630/4.780 ≅ 13%.\n\n50% é o rendimento de Carnot entre 400 K e 200 K, um limite que esse ciclo não atinge. 28% divide o trabalho só pelo calor da isoterma, esquecendo o do aquecimento. 100% divide o trabalho pelo calor líquido, que é igual a ele. E 87% é a fração rejeitada, 4.155/4.780.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um cilindro vertical, fechado por um êmbolo de 20 kg e 0,01 m² de área que desliza sem atrito, contém um gás ideal monoatômico; a pressão atmosférica é de 1 · 10⁵ Pa, e g = 10 m/s². O gás é aquecido lentamente, e o êmbolo sobe 10 cm. Quanto calor o gás recebe?",
    opcoes: [
      "120 J",
      "180 J",
      "250 J",
      "20 J",
      "300 J",
    ],
    correta: 4,
    explicacao:
      "Em equilíbrio, a pressão do gás sustenta a atmosfera e o peso do êmbolo: p = 1 · 10⁵ + (20 · 10)/0,01 = 1,2 · 10⁵ Pa, constante durante a subida. O volume aumenta 0,01 · 0,1 = 10⁻³ m³, e o trabalho é W = p · ΔV = 120 J. A energia interna do gás monoatômico aumenta (3/2) · p · ΔV = 180 J. O calor recebido é Q = 180 + 120 = 300 J.\n\n120 J é só o trabalho. 180 J é só a variação da energia interna. 250 J usa só a pressão atmosférica, esquecendo o peso do êmbolo. E 20 J é só o aumento da energia potencial do êmbolo, m · g · h.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um condicionador de ar ideal, que funciona como um refrigerador de Carnot, mantém uma sala a 27 °C quando lá fora faz 37 °C, retirando da sala 3.000 J de calor por segundo. Qual é a potência elétrica mínima de que ele precisa?",
    opcoes: [
      "3.000 W",
      "≈ 97 W",
      "100 W",
      "≈ 1.111 W",
      "90.000 W",
    ],
    correta: 2,
    explicacao:
      "Para um refrigerador de Carnot, a eficiência é Tf/(Tq − Tf), com as temperaturas em kelvin: 300/(310 − 300) = 30. Cada joule de trabalho retira 30 J da sala; para retirar 3.000 J por segundo, bastam 3.000/30 = 100 W. É o mínimo: um aparelho real, com perdas, consome mais.\n\n3.000 W supõe o trabalho igual ao calor retirado. 97 W usa a eficiência de uma bomba de calor, Tq/(Tq − Tf) = 31. 1.111 W usa as temperaturas em graus Celsius, 27/10 = 2,7. E 90.000 W multiplica o calor pela eficiência em vez de dividir.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Uma máquina de Carnot opera entre 500 K e 300 K. Para aumentar o seu rendimento, é mais eficaz elevar a temperatura da fonte quente em 100 K ou baixar a da fonte fria em 100 K?",
    opcoes: [
      "Elevar a quente: o rendimento vai a 60%, contra 50% ao baixar a fria",
      "Baixar a fria: o rendimento vai a 60%, contra 50% ao elevar a quente",
      "Tanto faz: nos dois casos o rendimento vai a 50%",
      "Tanto faz, porque a diferença entre as temperaturas fica igual",
      "Elevar a quente: o rendimento vai a 50%, contra 40% ao baixar a fria",
    ],
    correta: 1,
    explicacao:
      "O rendimento inicial é 1 − 300/500 = 40%. Elevando a fonte quente a 600 K: 1 − 300/600 = 50%. Baixando a fonte fria a 200 K: 1 − 200/500 = 60%. Baixar a fria é mais eficaz porque, em η = 1 − Tf/Tq, a temperatura fria está no numerador: reduzi-la diminui diretamente a fração rejeitada, enquanto aumentar Tq só dilui essa fração.\n\n“Elevar a quente” troca os dois resultados. “Tanto faz, 50%” calcula só um dos casos e o repete para o outro. “Tanto faz, porque a diferença fica igual” supõe que o rendimento dependa só de Tq − Tf; ele depende também de Tq, que está no denominador. E “50% contra 40%” mantém o rendimento inicial, 40%, como se ele não mudasse ao baixar a fria.",
  },
  {
    materia: "exatas-militar",
    tema: "Termodinâmica: ciclos e máquinas térmicas",
    dificuldade: "dificil",
    enunciado:
      "Um mol de gás ideal diatômico (γ = 1,4), a 300 K, é comprimido adiabaticamente até metade do volume. Com R = 8,31 J/(mol·K) e 2^0,4 ≅ 1,32, qual é o trabalho realizado sobre o gás?",
    opcoes: [
      "≈ 2,0 kJ",
      "≈ 1,73 kJ",
      "≈ 1,2 kJ",
      "0 J",
      "≈ 6,2 kJ",
    ],
    correta: 0,
    explicacao:
      "A temperatura final é T₂ = 300 · 2^0,4 ≅ 300 · 1,32 ≅ 396 K. Sem troca de calor, todo o trabalho recebido vira energia interna: W = ΔU = (5/2) · n · R · ΔT ≅ 2,5 · 8,31 · 96 ≅ 1.994 J ≅ 2,0 kJ. É mais do que numa compressão isotérmica até o mesmo volume, em que parte da energia sairia como calor.\n\n1,73 kJ é o trabalho de uma compressão isotérmica, n · R · T · ln 2. 1,2 kJ usa 3/2, o fator de um gás monoatômico, com a variação de temperatura do diatômico. 0 J confunde ausência de calor com ausência de trabalho. E 6,2 kJ usa a temperatura inicial em vez da variação, (5/2) · n · R · T₁.",
  },
];
