/* Sequências de letras e de figuras (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__sequencias-de-letras-e-de-figuras.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__sequencias-de-letras-e-de-figuras.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Considere o alfabeto de 26 letras (com K, W e Y). Qual letra continua a sequência A, C, E, G, I, …?",
    opcoes: [
      "J",
      "L",
      "M",
      "K",
      "H",
    ],
    correta: 3,
    explicacao:
      "Cada letra avança duas posições no alfabeto: A (1ª), C (3ª), E (5ª), G (7ª), I (9ª). A próxima é a 11ª letra, K — lembrando que o alfabeto de 26 letras inclui o K.\n\nJ avança uma posição só. L e M avançam três e quatro. H volta uma posição, como se a sequência recuasse. Uma forma segura de resolver é trocar cada letra pela sua posição (A = 1, B = 2, …) e procurar o padrão nos números: 1, 3, 5, 7, 9, 11.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "No alfabeto de 26 letras, qual é a próxima letra da sequência Z, X, V, T, R, …?",
    opcoes: [
      "P",
      "Q",
      "O",
      "N",
      "S",
    ],
    correta: 0,
    explicacao:
      "A sequência percorre o alfabeto de trás para a frente, pulando uma letra em cada passo: Z (26ª), X (24ª), V (22ª), T (20ª), R (18ª). A próxima é a 16ª letra, P.\n\nQ recua só uma posição, sem pular a letra do meio. O e N recuam três e quatro posições. S volta para a frente, invertendo o sentido da sequência. Em números, a sequência é 26, 24, 22, 20, 18 — e o próximo é 16.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Considerando as 26 letras do alfabeto, qual letra vem depois de M na sequência A, D, G, J, M, …?",
    opcoes: [
      "O",
      "Q",
      "P",
      "N",
      "S",
    ],
    correta: 2,
    explicacao:
      "Cada letra está três posições à frente da anterior: A (1), D (4), G (7), J (10), M (13). A próxima é a 16ª letra, P. Entre duas letras vizinhas da sequência ficam sempre duas puladas: B e C, E e F, H e I, K e L — e depois do M ficam N e O.\n\nO e N pulam menos letras do que o padrão exige. Q e S pulam letras demais. O erro mais comum é tomar o número de letras puladas (duas) como se fosse o salto (três).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "No alfabeto de 26 letras (com K, W e Y), qual letra continua a sequência A, C, F, J, O, …?",
    opcoes: [
      "U",
      "T",
      "V",
      "S",
      "Z",
    ],
    correta: 0,
    explicacao:
      "Os saltos entre as letras crescem de 1 em 1: de A (1) para C (3) são 2 posições; de C para F (6), 3; de F para J (10), 4; de J para O (15), 5. O próximo salto é de 6 posições, e 15 + 6 = 21, que é a letra U.\n\nT repete o salto de 5 posições. V salta 7. S salta 4, voltando a um salto que já passou. E Z salta 11, sem relação com o padrão. Converter as letras em posições (1, 3, 6, 10, 15) deixa o padrão à vista.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Considere o alfabeto de 26 letras. Qual é a letra seguinte na sequência B, E, J, Q, …?",
    opcoes: [
      "Z",
      "X",
      "Y",
      "W",
      "V",
    ],
    correta: 0,
    explicacao:
      "Em posições, a sequência é 2, 5, 10, 17. As diferenças são 3, 5 e 7 — números ímpares crescentes —, então a próxima é 9, e 17 + 9 = 26, a letra Z. Outra forma de ver: as posições são n² + 1 (1 + 1, 4 + 1, 9 + 1, 16 + 1), e a próxima é 25 + 1 = 26.\n\nX (24) e Y (25) somam 7 e 8 ao 17, repetindo a última diferença ou aumentando-a pouco. W (23) soma 6. V (22) soma 5, voltando atrás no padrão das diferenças.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "No alfabeto de 26 letras, qual letra completa a sequência A, Z, B, Y, C, X, …?",
    opcoes: [
      "W",
      "E",
      "V",
      "C",
      "D",
    ],
    correta: 4,
    explicacao:
      "São duas sequências intercaladas. Nas posições ímpares, o alfabeto segue do começo para a frente: A, B, C. Nas pares, segue do fim para trás: Z, Y, X. A próxima letra ocupa a 7ª posição, que é ímpar, então continua a primeira sequência: depois de C vem D.\n\nW continuaria a sequência de trás para a frente, mas ela só volta na posição seguinte. E avança duas letras de uma vez. V pula uma letra na sequência de trás. E C repete a última letra da primeira sequência.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Usando o alfabeto de 26 letras (com K, W e Y), qual letra continua a sequência Z, Y, W, T, P, …?",
    opcoes: [
      "L",
      "J",
      "K",
      "M",
      "H",
    ],
    correta: 2,
    explicacao:
      "A sequência anda para trás com recuos cada vez maiores: de Z (26) para Y (25) recua 1; para W (23), 2; para T (20), 3; para P (16), 4. O próximo recuo é de 5 posições: 16 − 5 = 11, a letra K.\n\nL (12) repete o recuo de 4. J (10) recua 6. M (13) recua 3, voltando a um recuo que já passou. E H (8) recua 8, dobrando o último recuo. Quem esquece o K no alfabeto costuma marcar J.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Considere o alfabeto de 26 letras. Qual letra vem a seguir na sequência A, C, F, H, K, M, …?",
    opcoes: [
      "O",
      "Q",
      "N",
      "R",
      "P",
    ],
    correta: 4,
    explicacao:
      "Os saltos alternam entre 2 e 3 posições: A (1) → C (3), +2; C → F (6), +3; F → H (8), +2; H → K (11), +3; K → M (13), +2. O próximo salto é de 3: 13 + 3 = 16, a letra P.\n\nO (15) repete o salto de 2, quebrando a alternância. Q (17) salta 4. N (14) salta só 1. E R (18) salta 5, somando os dois saltos do ciclo. Conferência: os termos de ordem ímpar (1, 6, 11 e, agora, 16) crescem de 5 em 5.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "No alfabeto de 26 letras, qual é a próxima letra da sequência A, D, C, F, E, H, …?",
    opcoes: [
      "K",
      "I",
      "J",
      "F",
      "G",
    ],
    correta: 4,
    explicacao:
      "A sequência alterna dois movimentos: avança três posições e recua uma. A (1) → D (4) → C (3) → F (6) → E (5) → H (8). O próximo movimento é recuar uma posição: depois de H vem G (7).\n\nK (11) avança três de novo, sem respeitar a alternância. I (9) avança uma. J (10) continua a subsequência das posições pares (D, F, H, J), mas a próxima letra pertence à outra subsequência (A, C, E, G). E F recua duas posições.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Troque cada letra pela sua posição no alfabeto de 26 letras (A = 1, B = 2, …). Qual letra continua a sequência A, A, B, C, E, H, M, …?",
    opcoes: [
      "R",
      "T",
      "U",
      "V",
      "P",
    ],
    correta: 2,
    explicacao:
      "Em posições, a sequência é 1, 1, 2, 3, 5, 8, 13: cada número é a soma dos dois anteriores (sequência de Fibonacci). O próximo é 8 + 13 = 21, que corresponde à letra U.\n\nR (18) soma 5 ao 13, repetindo a diferença anterior. T (20) e V (22) erram a soma por uma unidade. P (16) soma apenas 3. Sem converter as letras em números, o padrão fica quase invisível — por isso a conversão é o primeiro passo em sequências de letras.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Considere o alfabeto de 26 letras, com A na posição 1. Qual letra continua a sequência B, C, E, G, K, M, …?",
    opcoes: [
      "O",
      "P",
      "S",
      "Q",
      "R",
    ],
    correta: 3,
    explicacao:
      "As posições das letras são 2, 3, 5, 7, 11 e 13 — os números primos em ordem. O primo seguinte ao 13 é o 17 (14, 15 e 16 não são primos), e a 17ª letra do alfabeto é Q.\n\nO (15) e P (16) ocupam posições que não são primas: 15 = 3 × 5 e 16 = 2 × 8. R (18) também não é primo. E S (19) é primo, mas vem depois do 17 — pular o Q deixaria um primo de fora.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "No alfabeto de 26 letras, depois do Z a contagem recomeça no A. Seguindo essa regra, qual letra continua a sequência S, V, Y, B, E, …?",
    opcoes: [
      "H",
      "G",
      "I",
      "F",
      "Z",
    ],
    correta: 0,
    explicacao:
      "Cada letra está três posições à frente da anterior: S (19) → V (22) → Y (25). Depois do Y, três posições à frente são Z, A e B — a contagem dá a volta no alfabeto. De B (2) vai-se a E (5), e de E, três posições à frente, chega-se a H (8).\n\nG e I avançam duas e quatro posições. F avança só uma. E Z aparece para quem não aceita a volta ao começo e procura a letra depois do Y — mas a sequência já passou por B e E.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Qual é o próximo grupo da sequência AB, CD, EF, GH, …, formada com as letras do alfabeto em ordem?",
    opcoes: [
      "HI",
      "JK",
      "IJ",
      "GI",
      "IK",
    ],
    correta: 2,
    explicacao:
      "A sequência percorre o alfabeto em pares de letras consecutivas, sem repetir nem pular nenhuma: AB, CD, EF, GH. Depois do H vêm I e J, então o próximo grupo é IJ.\n\nHI repete o H, que já foi usado. JK pula o I. GI e IK misturam letras de grupos diferentes, sem seguir a ordem. Cada grupo começa exatamente na letra seguinte à última do grupo anterior.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Na sequência de grupos ACE, BDF, CEG, …, qual é o próximo grupo?",
    opcoes: [
      "DEF",
      "EGI",
      "CDE",
      "DFH",
      "DFG",
    ],
    correta: 3,
    explicacao:
      "Cada grupo tem três letras separadas por uma letra pulada (A, C, E: pula B e D). De um grupo para o seguinte, as três letras avançam uma posição: ACE → BDF → CEG. O próximo é DFH.\n\nDEF usa letras consecutivas, sem os pulos do padrão. EGI avança duas posições de uma vez. CDE repete o C e não pula letras. E DFG acerta as duas primeiras letras, mas quebra o pulo na terceira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Qual par de letras continua a sequência AZ, BY, CX, DW, …?",
    opcoes: [
      "EV",
      "EU",
      "FV",
      "EW",
      "DV",
    ],
    correta: 0,
    explicacao:
      "Em cada par, a primeira letra avança pelo alfabeto a partir do começo (A, B, C, D) e a segunda recua a partir do fim (Z, Y, X, W). O próximo par é E, a letra depois do D, com V, a letra antes do W: EV.\n\nEU recua duas posições na segunda letra. FV avança duas na primeira. EW repete o W. E DV repete o D. Como as duas letras de cada par ficam à mesma distância das pontas do alfabeto, a soma das suas posições é sempre 27 (A + Z = 1 + 26, E + V = 5 + 22).",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "No alfabeto de 26 letras (com K, W e Y), qual letra continua a sequência B, C, D, F, G, H, J, …?",
    opcoes: [
      "L",
      "I",
      "K",
      "M",
      "N",
    ],
    correta: 2,
    explicacao:
      "A sequência lista as consoantes em ordem, pulando as vogais: B, C, D (pula o E), F, G, H (pula o I), J. A consoante depois do J é o K, que faz parte do alfabeto de 26 letras.\n\nL é a consoante depois do K — escolhê-la é esquecer que o K existe no alfabeto. I é vogal. M e N pulam consoantes. Quem enxerga uma regra de saltos (1, 1, 2, 1, 1, 2) chega ao mesmo K, porque as vogais estão justamente nos saltos de 2.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Qual letra continua a sequência J, F, M, A, M, J, J, A, …?",
    opcoes: [
      "O",
      "N",
      "D",
      "S",
      "A",
    ],
    correta: 3,
    explicacao:
      "São as iniciais dos meses do ano, em ordem: janeiro, fevereiro, março, abril, maio, junho, julho, agosto. O mês seguinte é setembro, de inicial S.\n\nO, N e D são as iniciais de outubro, novembro e dezembro — meses que vêm depois de setembro. A repete a inicial de agosto. Em sequências de letras sem padrão numérico visível, vale testar iniciais de listas conhecidas: meses, dias da semana, números por extenso.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Qual letra continua a sequência U, D, T, Q, C, S, S, O, …?",
    opcoes: [
      "D",
      "O",
      "S",
      "N",
      "C",
    ],
    correta: 3,
    explicacao:
      "São as iniciais dos números por extenso: um, dois, três, quatro, cinco, seis, sete, oito. O próximo número é nove, de inicial N.\n\nD é a inicial de dez, que vem depois do nove. O repete a inicial de oito. S e C repetem iniciais que já apareceram (seis, sete, cinco). A pista está nas letras repetidas em seguida — S, S —, que correspondem a seis e sete.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Qual é o próximo termo da sequência A1, C3, E5, G7, …, formada com o alfabeto de 26 letras?",
    opcoes: [
      "H8",
      "I8",
      "I9",
      "J9",
      "H9",
    ],
    correta: 2,
    explicacao:
      "Em cada termo, o número é a posição da letra no alfabeto: A é a 1ª letra, C a 3ª, E a 5ª, G a 7ª. As letras avançam de duas em duas, e os números também. O próximo termo é I9: I é a 9ª letra.\n\nH8 avança só uma posição. I8 e H9 acertam uma parte e erram a outra, quebrando a correspondência entre o número e a letra. J9 tem o número certo, mas J é a 10ª letra, não a 9ª.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Qual é o próximo termo da sequência 1A, 2B, 4D, 8H, …, formada com o alfabeto de 26 letras?",
    opcoes: [
      "16O",
      "10J",
      "16Q",
      "12L",
      "16P",
    ],
    correta: 4,
    explicacao:
      "Os números dobram a cada termo (1, 2, 4, 8), e a letra é sempre a que ocupa, no alfabeto, a posição indicada pelo número: A é a 1ª, B a 2ª, D a 4ª, H a 8ª. O próximo número é 16, e a 16ª letra é P: 16P.\n\n16O e 16Q erram a posição da letra por uma unidade. 10J soma 2 ao número em vez de dobrar, e 12L soma 4. Nos dois casos, a letra acompanha o número, mas o número não segue a regra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Num código, cada letra é trocada pela letra que está três posições à frente no alfabeto de 26 letras. Assim, SOL vira VRO. Como fica a palavra LUA nesse código?",
    opcoes: [
      "NWC",
      "OXD",
      "PYE",
      "OXE",
      "OWD",
    ],
    correta: 1,
    explicacao:
      "Aplicando o deslocamento de três posições a cada letra: L (12) → O (15); U (21) → X (24); A (1) → D (4). A palavra LUA vira OXD. A conferência com o exemplo dado confirma a regra: S → V, O → R, L → O.\n\nNWC desloca só duas posições. PYE desloca quatro. OXE erra só a última letra, e OWD erra a do meio. Em códigos por deslocamento, cada letra anda o mesmo número de casas — não há letra com regra própria.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Num código, cada letra é trocada pela sua posição no alfabeto de 26 letras (A = 1, B = 2, …). Assim, CASA é 3-1-19-1. Como fica BOLA?",
    opcoes: [
      "2-14-12-1",
      "2-15-11-1",
      "3-15-12-1",
      "2-15-12-1",
      "2-16-12-1",
    ],
    correta: 3,
    explicacao:
      "B é a 2ª letra, O é a 15ª, L é a 12ª e A é a 1ª. BOLA fica 2-15-12-1.\n\n2-14-12-1 e 2-16-12-1 erram a posição do O por uma unidade — 14 é o N, e 16 é o P. 2-15-11-1 troca o L (12) pelo K (11). E 3-15-12-1 começa com C em vez de B. Contar a partir de marcos ajuda: E = 5, J = 10, O = 15, T = 20. O exemplo dado segue a mesma regra: C = 3, A = 1, S = 19, A = 1.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Atribuindo a cada letra o número da sua posição no alfabeto (A = 1, B = 2, …, Z = 26), qual é a soma dos valores das letras da palavra DADO?",
    opcoes: [
      "23",
      "25",
      "20",
      "22",
      "24",
    ],
    correta: 4,
    explicacao:
      "D vale 4, A vale 1, D vale 4 de novo e O vale 15. A soma é 4 + 1 + 4 + 15 = 24.\n\n23 e 25 erram a posição do O por uma unidade (14 ou 16). 20 esquece que o D aparece duas vezes. E 22 dá ao D o valor 3, que é o do C. Uma conferência rápida é agrupar as repetições: D + D = 8, depois A = 1 e O = 15, e 8 + 1 + 15 = 24. As letras repetidas são o ponto em que mais se erra esse tipo de soma.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Contando as letras do alfabeto de 26 letras de trás para a frente (Z é a 1ª, Y é a 2ª, e assim por diante), qual letra ocupa a 7ª posição?",
    opcoes: [
      "T",
      "G",
      "S",
      "U",
      "H",
    ],
    correta: 0,
    explicacao:
      "De trás para a frente: Z (1ª), Y (2ª), X (3ª), W (4ª), V (5ª), U (6ª), T (7ª). A 7ª letra é T. Pela conta, a 7ª a partir do fim é a (26 − 7 + 1)ª a partir do começo, ou seja, a 20ª: T.\n\nG é a 7ª letra contando do começo. S e U erram a contagem por uma posição — S vem de fazer 26 − 7 = 19 sem somar 1. E H ocupa a 8ª posição a partir do começo. Conferência: a 7ª do fim (T, 20) e a 7ª do começo (G, 7) somam 27, como todo par simétrico.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "No alfabeto de 26 letras, qual é a quinta letra depois da terceira letra antes de P?",
    opcoes: [
      "S",
      "Q",
      "R",
      "K",
      "U",
    ],
    correta: 2,
    explicacao:
      "Primeiro, a terceira letra antes de P: O é a primeira antes, N a segunda, M a terceira. Depois, a quinta letra depois de M: N, O, P, Q, R. A resposta é R. Em posições: P é a 16ª letra, 16 − 3 = 13 (M), e 13 + 5 = 18 (R).\n\nS e Q erram a contagem por uma posição em algum dos passos. K conta cinco letras para trás a partir de P, trocando o sentido de uma das instruções. E U conta cinco letras depois de P, ignorando o “antes”. Resolver de dentro para fora — primeiro a letra antes de P, depois a que vem depois dela — evita a confusão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Num código, cada letra é trocada pela letra que ocupa a posição simétrica no alfabeto de 26 letras: A vira Z, B vira Y, C vira X, e assim por diante. Qual letra substitui o M?",
    opcoes: [
      "M",
      "N",
      "L",
      "O",
      "Z",
    ],
    correta: 1,
    explicacao:
      "Na troca simétrica, as posições de cada par somam 27: A (1) com Z (26), B (2) com Y (25), C (3) com X (24). O M é a 13ª letra, e seu par é a letra de posição 27 − 13 = 14, o N. M e N são justamente as duas letras do meio do alfabeto, que trocam de lugar entre si.\n\nM não troca com ele mesmo: com 26 letras, não há letra central. L e O erram a posição por uma unidade. E Z é o par do A, não do M.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Na sequência A, BB, CCC, DDDD, …, cada letra aparece tantas vezes quanto a sua posição no alfabeto. Quantas letras foram escritas ao todo até o fim do grupo do J?",
    opcoes: [
      "45",
      "55",
      "66",
      "10",
      "50",
    ],
    correta: 1,
    explicacao:
      "J é a 10ª letra. Até o fim do grupo do J, foram escritas 1 + 2 + 3 + … + 10 letras. Somando os extremos em pares (1 + 10, 2 + 9, …), são 5 pares de 11: 55 letras.\n\n45 para no grupo do I (1 + … + 9). 66 vai até o grupo do K (1 + … + 11). 10 conta só os grupos, não as letras. E 50 é uma estimativa de 5 × 10, sem somar de fato. Em geral, até o grupo da n-ésima letra são n × (n + 1) ÷ 2 letras: 10 × 11 ÷ 2 = 55.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "O grupo de letras ABCDE é escrito repetidamente, sem espaços: ABCDEABCDEABCDE… Qual letra ocupa a 100ª posição?",
    opcoes: [
      "E",
      "A",
      "D",
      "B",
      "C",
    ],
    correta: 0,
    explicacao:
      "O grupo ABCDE tem 5 letras e se repete. Como 100 é múltiplo de 5 (100 = 5 × 20), a 100ª letra fecha o 20º grupo completo — é a última letra do grupo, E.\n\nA seria a 101ª letra, a primeira do grupo seguinte: tratar o resto 0 como início de grupo é o erro mais comum. D, B e C correspondem aos restos 4, 2 e 3, que não são o caso de 100 — o D, por exemplo, é a 99ª posição, uma antes da pedida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "As 26 letras do alfabeto são escritas em ordem, de A a Z, e depois repetidas da mesma forma, sem parar: ABC…XYZABC… Qual letra ocupa a 60ª posição?",
    opcoes: [
      "G",
      "H",
      "I",
      "C",
      "B",
    ],
    correta: 1,
    explicacao:
      "Cada volta completa do alfabeto tem 26 letras. Duas voltas ocupam 52 posições; a 60ª posição é a 8ª letra da terceira volta (60 − 52 = 8). A 8ª letra do alfabeto é H.\n\nG e I erram a posição dentro da volta por uma unidade. C confunde o número da volta — a terceira — com a letra de posição 3. E B pensa nas duas voltas completas e para por aí, sem contar as 8 letras que sobram.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Na sequência ABC, BCD, CDE, DEF, …, cada grupo começa na letra seguinte à inicial do grupo anterior. Em que posição da sequência aparece o grupo XYZ?",
    opcoes: [
      "26",
      "25",
      "24",
      "23",
      "22",
    ],
    correta: 2,
    explicacao:
      "O primeiro grupo começa em A (1ª letra), o segundo em B (2ª), o terceiro em C (3ª): a posição do grupo é a posição da sua letra inicial. XYZ começa em X, a 24ª letra, então é o 24º grupo. Ele também é o último possível, porque depois do Z não há letras para completar outro grupo.\n\n26 usa a posição do Z, a última letra do grupo, e 25 usa a do Y. 23 e 22 erram a posição do X no alfabeto — o que acontece com quem esquece o K ou o W na contagem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Uma lista de códigos segue a ordem AA, AB, AC, …, AZ, BA, BB, …, BZ, CA, CB, e assim por diante, com as 26 letras do alfabeto. Em que posição da lista aparece o código CE?",
    opcoes: [
      "57",
      "55",
      "53",
      "83",
      "15",
    ],
    correta: 0,
    explicacao:
      "Os códigos que começam com A ocupam as posições 1 a 26, e os que começam com B, as posições 27 a 52. Os que começam com C vêm a partir da 53ª: CA é o 53º, CB o 54º, CC o 55º, CD o 56º e CE o 57º. Em conta: 2 × 26 + 5 = 57, porque antes do C há dois blocos de 26 códigos, e E é a 5ª letra.\n\n55 é a posição do CC, e 53 a do CA. 83 conta três blocos de 26 antes do C, quando são só dois (os do A e os do B). E 15 multiplica as posições de C e E (3 × 5), conta sem relação com a ordem da lista.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "No alfabeto de 26 letras, qual letra está exatamente no meio do caminho entre D e P?",
    opcoes: [
      "I",
      "J",
      "K",
      "H",
      "L",
    ],
    correta: 1,
    explicacao:
      "D ocupa a 4ª posição do alfabeto, e P, a 16ª. O meio do caminho é a posição (4 + 16) ÷ 2 = 10, a letra J. De D até J são 6 posições (E, F, G, H, I, J), e de J até P são outras 6 (K, L, M, N, O, P).\n\nI e K ficam a uma posição do meio, a 5 e a 7 passos do D. H e L ficam a duas posições do meio. Converter as letras em números e tirar a média evita contar nos dedos e perder uma letra no caminho.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Na sequência de setas ↑, →, ↓, ←, ↑, →, ↓, ←, …, as quatro direções se repetem sempre na mesma ordem. Qual é a 30ª seta?",
    opcoes: [
      "↑",
      "→",
      "↓",
      "←",
      "↗",
    ],
    correta: 1,
    explicacao:
      "O bloco ↑, →, ↓, ← tem 4 setas e se repete. Dividindo 30 por 4, o resultado é 7, com resto 2: depois de 7 blocos completos (28 setas), a 30ª é a 2ª seta do bloco, →. A seta gira 90° no sentido horário a cada passo.\n\n↑ corresponderia a resto 1, ↓ a resto 3 e ← a resto 0 (fim de bloco). A seta inclinada ↗ nem aparece na sequência, que só tem as quatro direções principais.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Uma seta começa apontando para o norte e, a cada figura da sequência, gira 45° no sentido horário. Para onde aponta a seta na 20ª figura?",
    opcoes: [
      "Sul",
      "Sudeste",
      "Leste",
      "Sudoeste",
      "Nordeste",
    ],
    correta: 1,
    explicacao:
      "Da 1ª para a 20ª figura há 19 giros de 45°, ou seja, 19 × 45° = 855°. Como uma volta completa tem 360°, tiram-se duas voltas: 855° − 720° = 135°. A partir do norte, girando no sentido horário: 45° é nordeste, 90° é leste, 135° é sudeste. A 20ª seta aponta para o sudeste.\n\nSul (180°) conta 20 giros em vez de 19. Leste (90°) conta um giro a menos, e nordeste (45°), dois a menos. Sudoeste (225°) gira os 135° no sentido anti-horário.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "facil",
    enunciado:
      "Um colar é montado com contas na ordem azul, verde, azul, vermelho, amarelo, e essa ordem se repete até o fim. Quais são as cores da 50ª e da 51ª contas, nessa ordem?",
    opcoes: [
      "Azul e verde",
      "Amarelo e azul",
      "Vermelho e amarelo",
      "Amarelo e verde",
      "Azul e azul",
    ],
    correta: 1,
    explicacao:
      "O bloco de cores tem 5 contas. Como 50 é múltiplo de 5, a 50ª conta fecha o 10º bloco e é a última do bloco: amarelo. A 51ª abre o bloco seguinte, então é a primeira cor: azul.\n\n“Azul e verde” trata o resto 0 como início de bloco, deslocando as duas cores em uma posição. “Vermelho e amarelo” erra a posição para trás. “Amarelo e verde” acerta a 50ª, mas pula uma conta na 51ª. E “azul e azul” supõe que as duas contas azuis do bloco fiquem vizinhas, o que nunca acontece.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Na sequência de símbolos ★ ☆ ☆ ★ ☆ ☆ ★ ☆ ☆ …, o bloco ★ ☆ ☆ se repete. Quantas estrelas cheias (★) há entre os 100 primeiros símbolos?",
    opcoes: [
      "33",
      "35",
      "66",
      "50",
      "34",
    ],
    correta: 4,
    explicacao:
      "Cada bloco de 3 símbolos tem uma estrela cheia. Em 100 símbolos cabem 33 blocos completos (99 símbolos), com 33 estrelas cheias, e sobra 1 símbolo — o primeiro de um novo bloco, que é justamente uma ★. Total: 33 + 1 = 34.\n\n33 esquece o símbolo que sobra. 35 conta uma estrela a mais. 66 conta as estrelas vazias (☆), não as cheias: são 100 − 34 = 66. E 50 supõe metade de cada tipo, sem olhar o bloco.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Com palitos, monta-se uma sequência de grades quadradas: a 1ª figura é um quadrado 1 × 1 (4 palitos), a 2ª é uma grade 2 × 2 (12 palitos), a 3ª é uma grade 3 × 3 (24 palitos). Quantos palitos tem a grade 5 × 5?",
    opcoes: [
      "100",
      "50",
      "36",
      "60",
      "72",
    ],
    correta: 3,
    explicacao:
      "Numa grade n × n há n + 1 linhas horizontais de palitos, cada uma com n palitos, e o mesmo número de colunas verticais. O total é 2 × n × (n + 1). Conferindo: n = 1 dá 4, n = 2 dá 12, n = 3 dá 24. Para n = 5: 2 × 5 × 6 = 60.\n\n100 conta 4 palitos para cada um dos 25 quadradinhos, sem descontar os lados compartilhados. 50 esquece uma das linhas e uma das colunas (2 × 5 × 5). 36 é o número de pontos de encontro (6 × 6), não de palitos. E 72 usa 6 × 6 no lugar de 5 × 6.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Uma pirâmide de cubos tem camadas quadradas: a do topo tem 1 cubo (1 × 1), a seguinte tem 4 (2 × 2), a próxima 9 (3 × 3), e assim por diante. Quantos cubos tem uma pirâmide com 5 camadas?",
    opcoes: [
      "25",
      "30",
      "15",
      "125",
      "55",
    ],
    correta: 4,
    explicacao:
      "As camadas têm 1, 4, 9, 16 e 25 cubos — os quadrados de 1 a 5. O total é 1 + 4 + 9 + 16 + 25 = 55.\n\n25 conta só a camada da base. 30 para na quarta camada (1 + 4 + 9 + 16). 15 soma os lados das camadas (1 + 2 + 3 + 4 + 5), e não os quadrados. E 125 trata a pirâmide como um cubo 5 × 5 × 5. Para muitas camadas, a fórmula n × (n + 1) × (2n + 1) ÷ 6 poupa a soma: 5 × 6 × 11 ÷ 6 = 55.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Numa sequência de figuras em forma de cruz, a 1ª figura é um único quadradinho; a 2ª tem 5 quadradinhos (o central e um em cada braço); a 3ª tem 9 (cada braço ganha mais um). Quantos quadradinhos tem a 20ª figura?",
    opcoes: [
      "80",
      "81",
      "77",
      "76",
      "73",
    ],
    correta: 2,
    explicacao:
      "A cada figura, os quatro braços ganham um quadradinho cada: a figura cresce 4 quadradinhos por vez. A figura n tem 1 + 4 × (n − 1) quadradinhos. Para n = 20: 1 + 4 × 19 = 77.\n\n80 multiplica 20 por 4, sem o central e com um crescimento a mais. 81 soma 4 × 20 + 1, contando um crescimento a mais. 76 esquece o quadradinho central. E 73 corresponde à 19ª figura.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Numa sequência de figuras, a figura n é um quadrado de pontos com n pontos em cada lado (a figura 2 tem 2 × 2 pontos, a figura 3 tem 3 × 3). Quantos pontos ficam na borda da figura 10?",
    opcoes: [
      "40",
      "100",
      "32",
      "38",
      "36",
    ],
    correta: 4,
    explicacao:
      "A borda tem 4 lados de 10 pontos, mas os 4 cantos pertencem a dois lados ao mesmo tempo. Somando 4 × 10 = 40 e descontando os 4 cantos contados duas vezes, ficam 36 pontos. Outra forma: 100 pontos no total, menos os 8 × 8 = 64 do miolo, dá 36.\n\n40 conta os cantos duas vezes. 100 conta todos os pontos, inclusive os de dentro. 32 desconta os cantos duas vezes (40 − 8). E 38 desconta só dois dos quatro cantos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Numa sequência de figuras, a figura n tem n círculos iguais enfileirados, cada um tocando o seguinte. A figura 2 tem 1 ponto de contato, e a figura 3 tem 2. Quantos pontos de contato tem a figura 15?",
    opcoes: [
      "15",
      "16",
      "30",
      "14",
      "13",
    ],
    correta: 3,
    explicacao:
      "Cada ponto de contato fica entre dois círculos vizinhos. Com n círculos em fila, há n − 1 pares de vizinhos, então n − 1 pontos de contato. Para 15 círculos: 14 pontos.\n\n15 conta um contato por círculo, esquecendo que o último não tem vizinho à direita. 16 soma um a mais. 30 conta cada contato duas vezes, uma para cada círculo. E 13 desconta um contato a mais. É o mesmo raciocínio de postes e vãos de uma cerca.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Com palitos, montam-se hexágonos lado a lado numa fileira, e cada hexágono novo aproveita um lado do anterior: 1 hexágono usa 6 palitos, 2 usam 11, e 3 usam 16. Quantos palitos são necessários para 12 hexágonos?",
    opcoes: [
      "72",
      "66",
      "61",
      "60",
      "56",
    ],
    correta: 2,
    explicacao:
      "O primeiro hexágono usa 6 palitos, e cada hexágono novo acrescenta 5, porque aproveita um lado do anterior. Para n hexágonos: 6 + 5 × (n − 1) = 5n + 1. Com 12 hexágonos: 5 × 12 + 1 = 61.\n\n72 conta 6 palitos por hexágono, ignorando os lados compartilhados. 66 soma 5 por hexágono a partir de 6, contando um hexágono a mais (6 + 5 × 12). 60 esquece o palito extra do primeiro hexágono (5 × 12). E 56 corresponde a 11 hexágonos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Numa sequência de figuras, a 1ª é um triângulo, a 2ª é um quadrado, a 3ª é um pentágono, e cada figura seguinte tem um lado a mais que a anterior. Quantas diagonais tem a 5ª figura?",
    opcoes: [
      "9",
      "20",
      "21",
      "7",
      "14",
    ],
    correta: 4,
    explicacao:
      "A 5ª figura tem 3 + 4 = 7 lados: é um heptágono. De cada um dos 7 vértices partem diagonais para os outros vértices, exceto ele mesmo e os dois vizinhos: 7 − 3 = 4 diagonais por vértice. Como cada diagonal liga dois vértices, ela foi contada duas vezes: 7 × 4 ÷ 2 = 14.\n\n9 é o número de diagonais do hexágono, a 4ª figura, e 20 é o do octógono, a 6ª. 21 conta também os 7 lados (7 × 6 ÷ 2), que não são diagonais. E 7 confunde lados com diagonais.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Uma figura é uma grade quadrada de 4 × 4 quadradinhos. Contando quadrados de todos os tamanhos (1 × 1, 2 × 2, 3 × 3 e 4 × 4), quantos quadrados há na figura?",
    opcoes: [
      "16",
      "25",
      "29",
      "30",
      "20",
    ],
    correta: 3,
    explicacao:
      "Um quadrado k × k pode ocupar 5 − k posições na horizontal e 5 − k na vertical. Há 16 quadrados 1 × 1, 9 de 2 × 2 (3 × 3 posições), 4 de 3 × 3 e 1 de 4 × 4. Total: 16 + 9 + 4 + 1 = 30.\n\n16 conta só os quadradinhos menores. 25 para nos quadrados 2 × 2. 29 esquece o quadrado maior, a própria figura. E 20 conta os quadrados 2 × 2 sem sobreposição — só 4 blocos —, quando eles podem se sobrepor e são 9.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Um triângulo grande é dividido em 6 fileiras de triângulos pequenos. Na fileira k, contada de cima para baixo, há k triângulos com a ponta para cima e k − 1 com a ponta para baixo. Quantos triângulos pequenos há ao todo?",
    opcoes: [
      "21",
      "15",
      "42",
      "25",
      "36",
    ],
    correta: 4,
    explicacao:
      "Com a ponta para cima são 1 + 2 + 3 + 4 + 5 + 6 = 21; com a ponta para baixo, 0 + 1 + 2 + 3 + 4 + 5 = 15. O total é 21 + 15 = 36 — que é 6², o padrão desse tipo de figura: com n fileiras, n² triângulos pequenos.\n\n21 conta só os triângulos com a ponta para cima, e 15 só os com a ponta para baixo. 42 multiplica 6 × 7, como se cada fileira tivesse uma peça a mais. E 25 é 5², o total para cinco fileiras.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Num tabuleiro de 8 × 8 casas, quantos quadrados de 2 × 2 casas podem ser formados, contando também os que se sobrepõem?",
    opcoes: [
      "16",
      "49",
      "64",
      "36",
      "56",
    ],
    correta: 1,
    explicacao:
      "Um quadrado 2 × 2 é determinado pela casa do seu canto superior esquerdo. Essa casa pode estar em qualquer uma das 7 primeiras colunas e das 7 primeiras linhas — na 8ª não caberia o quadrado. São 7 × 7 = 49 quadrados.\n\n16 conta só os quadrados 2 × 2 sem sobreposição (4 × 4 blocos). 64 conta todas as casas, como se cada uma pudesse ser canto. 36 usa 6 posições em cada direção. E 56 usa 7 posições numa direção e 8 na outra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Um cubo de madeira é pintado por fora e depois cortado em 27 cubinhos iguais (3 × 3 × 3). Quantos cubinhos ficam com exatamente duas faces pintadas?",
    opcoes: [
      "8",
      "12",
      "6",
      "1",
      "24",
    ],
    correta: 1,
    explicacao:
      "Um cubinho tem duas faces pintadas quando está numa aresta do cubo grande, mas não num canto. O cubo tem 12 arestas, e em cada uma há 3 cubinhos: os 2 das pontas são cantos (três faces pintadas) e só o do meio tem exatamente duas. São 12 cubinhos.\n\n8 conta os cantos, que têm três faces pintadas. 6 conta os cubinhos do centro de cada face, que têm uma só. 1 é o cubinho do centro, sem nenhuma face pintada. E 24 conta os dois cubinhos das pontas de cada aresta, que são cantos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Numa sequência de figuras, um quadrado é dividido ao meio repetidas vezes: a 1ª figura tem 1 parte, a 2ª tem 2 partes, a 3ª tem 4 e a 4ª tem 8. Seguindo o padrão, quantas partes tem a 7ª figura?",
    opcoes: [
      "32",
      "128",
      "14",
      "64",
      "49",
    ],
    correta: 3,
    explicacao:
      "A cada figura, todas as partes são divididas ao meio, e o número de partes dobra: 1, 2, 4, 8, 16, 32, 64. A figura n tem 2ⁿ⁻¹ partes; a 7ª tem 2⁶ = 64.\n\n32 é a 6ª figura, e 128 é a 8ª: erro de uma posição. 14 dobra o número da figura (2 × 7). E 49 é 7², confundindo o padrão de dobrar com o de elevar ao quadrado. Como as partes são iguais, na 7ª figura cada uma vale 1/64 do quadrado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "media",
    enunciado:
      "Numa sequência de figuras de bolinhas, a 1ª tem 1 bolinha, a 2ª tem 3 (1 + 2), a 3ª tem 6 (1 + 2 + 3), e cada figura acrescenta uma fileira com uma bolinha a mais. Quantas bolinhas têm, juntas, a 9ª e a 10ª figuras?",
    opcoes: [
      "100",
      "90",
      "110",
      "55",
      "81",
    ],
    correta: 0,
    explicacao:
      "A 9ª figura tem 1 + 2 + … + 9 = 45 bolinhas, e a 10ª tem 1 + 2 + … + 10 = 55. Juntas: 45 + 55 = 100. Não é coincidência: duas figuras triangulares consecutivas se encaixam formando um quadrado, e 100 = 10².\n\n90 soma duas vezes a 9ª figura. 110 soma duas vezes a 10ª. 55 é só a 10ª figura. E 81 = 9² usa o lado errado do quadrado formado. Pela fórmula n × (n + 1) ÷ 2: 9 × 10 ÷ 2 = 45 e 10 × 11 ÷ 2 = 55.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências de letras e de figuras",
    dificuldade: "dificil",
    enunciado:
      "Na figura 1 há um quadradinho preto. Cada figura seguinte cerca a anterior com uma moldura de quadradinhos, formando um quadrado maior: a figura 2 é um quadrado 3 × 3, e a figura 3 é 5 × 5. Quantos quadradinhos a moldura acrescenta na figura 6?",
    opcoes: [
      "40",
      "44",
      "36",
      "121",
      "32",
    ],
    correta: 0,
    explicacao:
      "A figura n é um quadrado de lado 2n − 1: a figura 5 tem lado 9 (81 quadradinhos), e a figura 6 tem lado 11 (121 quadradinhos). A moldura da figura 6 acrescenta 121 − 81 = 40. Outra conta: uma moldura em volta de um quadrado de lado 9 tem 4 × 9 + 4 = 40 — os quatro lados mais os quatro cantos.\n\n44 calcula a moldura como 4 × 11, contando os cantos duas vezes. 36 esquece os cantos (4 × 9). 121 é o total da figura 6, não só a moldura. E 32 é a moldura da figura 5 (81 − 49), uma figura antes da pedida.",
  },
];
