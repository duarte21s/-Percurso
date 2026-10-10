/* Sequências lógicas numéricas (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__sequencias-logicas-numericas.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__sequencias-logicas-numericas.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Qual é o próximo termo da sequência 3, 7, 11, 15, 19, …?",
    opcoes: [
      "22",
      "24",
      "21",
      "27",
      "23",
    ],
    correta: 4,
    explicacao:
      "Cada termo é o anterior somado a 4: 3 + 4 = 7, 7 + 4 = 11, 11 + 4 = 15, 15 + 4 = 19. A diferença entre termos consecutivos é sempre a mesma, o que caracteriza uma progressão aritmética de razão 4. O próximo termo é 19 + 4 = 23.\n\n22 e 24 erram a conta por uma unidade, como quem soma 3 ou 5 no último passo. 21 soma só 2, a metade da razão. E 27 soma 8, pulando um termo da sequência: seria o termo seguinte ao 23.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Qual número continua a sequência 2, 6, 18, 54, …?",
    opcoes: [
      "162",
      "108",
      "90",
      "126",
      "216",
    ],
    correta: 0,
    explicacao:
      "Cada termo é o triplo do anterior: 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54. É uma progressão geométrica de razão 3, e o próximo termo é 54 × 3 = 162.\n\n108 é o dobro de 54: aplica a razão errada. 90 repete a última diferença (54 + 36), como se a sequência passasse a crescer de forma constante. 126 soma o dobro da última diferença (54 + 72), mas as diferenças (4, 12, 36) triplicam, não dobram. E 216 é 54 × 4, como se a razão aumentasse a cada passo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Na sequência 1, 1, 2, 3, 5, 8, 13, …, qual é o próximo termo?",
    opcoes: [
      "18",
      "20",
      "26",
      "21",
      "34",
    ],
    correta: 3,
    explicacao:
      "A partir do terceiro, cada termo é a soma dos dois anteriores: 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13. O próximo é 8 + 13 = 21. É a sequência de Fibonacci.\n\n18 soma 5 ao 13, repetindo a diferença anterior (13 − 8 = 5). 20 e 26 vêm de palpites sobre as diferenças, que não são constantes nem dobram. E 34 é o termo seguinte ao 21 (13 + 21), um passo além do pedido.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Qual é o termo que vem depois de 3 na sequência 81, 27, 9, 3, …?",
    opcoes: [
      "0",
      "2",
      "1",
      "1,5",
      "6",
    ],
    correta: 2,
    explicacao:
      "Cada termo é a terça parte do anterior: 81 ÷ 3 = 27, 27 ÷ 3 = 9, 9 ÷ 3 = 3. É uma progressão geométrica de razão 1/3, e o próximo termo é 3 ÷ 3 = 1.\n\n0 aparece quando se subtrai 3 do último termo, como se a sequência diminuísse de 3 em 3 — mas as quedas foram de 54, 18 e 6. 1,5 é a metade de 3, aplicando a razão 1/2 em vez de 1/3. 2 é um palpite entre 0 e 3 sem regra que o sustente. E 6 é o dobro de 3, invertendo o sentido da sequência.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 2, 5, 11, 23, 47, …, qual número vem a seguir?",
    opcoes: [
      "94",
      "71",
      "96",
      "93",
      "95",
    ],
    correta: 4,
    explicacao:
      "Cada termo é o dobro do anterior mais 1: 2 × 2 + 1 = 5, 5 × 2 + 1 = 11, 11 × 2 + 1 = 23, 23 × 2 + 1 = 47. O próximo é 47 × 2 + 1 = 95. Outra forma de ver: as diferenças (3, 6, 12, 24) dobram a cada passo, então a próxima é 48, e 47 + 48 = 95.\n\n94 esquece o “mais 1” e só dobra. 96 e 93 trocam o 1 por 2 ou por −1. E 71 repete a última diferença (47 + 24), como se a sequência passasse a crescer de forma constante.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Qual é o próximo número da sequência 1, 3, 6, 10, 15, 21, …?",
    opcoes: [
      "27",
      "26",
      "30",
      "36",
      "28",
    ],
    correta: 4,
    explicacao:
      "As diferenças entre termos consecutivos crescem de 1 em 1: 3 − 1 = 2, 6 − 3 = 3, 10 − 6 = 4, 15 − 10 = 5, 21 − 15 = 6. A próxima diferença é 7, e o termo seguinte é 21 + 7 = 28. São os chamados números triangulares: 1, 1 + 2, 1 + 2 + 3, e assim por diante.\n\n27 repete a última diferença (21 + 6). 26 soma 5. 30 soma 9, pulando etapas. E 36 é o termo depois do 28 (28 + 8), um passo além do pedido.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 5, 8, 16, 19, 38, 41, …, qual é o termo seguinte?",
    opcoes: [
      "44",
      "76",
      "85",
      "123",
      "82",
    ],
    correta: 4,
    explicacao:
      "A sequência alterna duas operações: soma 3 e multiplica por 2. 5 + 3 = 8, 8 × 2 = 16, 16 + 3 = 19, 19 × 2 = 38, 38 + 3 = 41. O próximo passo é uma multiplicação: 41 × 2 = 82.\n\n44 aplica “+ 3” de novo, sem respeitar a alternância. 76 dobra o 38, que já tinha sido dobrado, em vez do último termo. 85 faz as duas operações de uma vez (41 × 2 + 3). E 123 é 41 × 3, trocando o fator da multiplicação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual número dá continuidade à sequência 2, 3, 5, 7, 11, 13, …?",
    opcoes: [
      "15",
      "19",
      "16",
      "17",
      "14",
    ],
    correta: 3,
    explicacao:
      "São os números primos em ordem crescente — números maiores que 1 que só são divisíveis por 1 e por eles mesmos. Depois do 13, o próximo primo é o 17: o 14 é par, o 15 é divisível por 3 e por 5, e o 16 é par.\n\n15 e 14 aparecem para quem supõe uma soma com as últimas diferenças (13 + 2 ou 13 + 1), mas 15 = 3 × 5 e 14 = 2 × 7 não são primos. 16 também não é primo. E 19 é primo, mas vem depois do 17 — pular o 17 deixaria um primo de fora.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 1, 2, 6, 24, 120, …, qual é o próximo termo?",
    opcoes: [
      "720",
      "240",
      "600",
      "144",
      "840",
    ],
    correta: 0,
    explicacao:
      "Cada termo é o anterior multiplicado por um fator que cresce de 1 em 1: 1 × 2 = 2, 2 × 3 = 6, 6 × 4 = 24, 24 × 5 = 120. O próximo fator é 6, e o termo seguinte é 120 × 6 = 720. São os fatoriais: 5! = 120 e 6! = 720.\n\n240 repete o fator 2 do início. 600 repete o último fator (120 × 5), sem fazê-lo crescer. 840 usa o fator 7, pulando o 6. E 144 soma 24 ao 120, trocando a multiplicação por uma soma.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é o próximo termo da sequência 3, 4, 8, 17, 33, …?",
    opcoes: [
      "49",
      "56",
      "58",
      "65",
      "42",
    ],
    correta: 2,
    explicacao:
      "As diferenças entre termos consecutivos são 1, 4, 9 e 16 — os quadrados de 1, 2, 3 e 4. A próxima diferença é 5² = 25, e o próximo termo é 33 + 25 = 58.\n\n49 repete a última diferença (33 + 16). 56 percebe que as diferenças crescem 3, 5 e 7, mas repete o 7 em vez de passar para 9 (16 + 7 = 23). 65 dobra a última diferença (33 + 32). E 42 soma apenas 9, confundindo o crescimento da diferença com a própria diferença.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Qual número continua a sequência 2, 12, 36, 80, 150, …?",
    opcoes: [
      "246",
      "220",
      "300",
      "226",
      "252",
    ],
    correta: 4,
    explicacao:
      "Pode-se ver a regra de dois modos. Pelas diferenças: os termos crescem 10, 24, 44 e 70; essas diferenças crescem 14, 20 e 26; e estas crescem sempre 6. Então a próxima variação é 26 + 6 = 32, a próxima diferença é 70 + 32 = 102, e o termo é 150 + 102 = 252. Pela fórmula: o termo de posição n é n² × (n + 1) — 1 × 2, 4 × 3, 9 × 4, 16 × 5, 25 × 6 —, e o sexto é 36 × 7 = 252.\n\n246 para no segundo nível e repete o 26 (70 + 26 = 96). 220 repete a última diferença, 70. 226 soma 6 direto à última diferença, pulando um nível. E 300 dobra o último termo, sem base nas diferenças.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Na sequência 1, 8, 27, 64, 125, …, qual é o próximo número?",
    opcoes: [
      "196",
      "225",
      "250",
      "343",
      "216",
    ],
    correta: 4,
    explicacao:
      "Os termos são os cubos dos números naturais: 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125. O próximo é 6³ = 6 × 6 × 6 = 216.\n\n196 é 14², e 225 é 15²: vêm de quem pensa em quadrados, não em cubos. 250 é o dobro de 125, como se a regra fosse multiplicar por 2 — mas 8 não é o dobro de 1 nem 27 o dobro de 8. E 343 é 7³, o cubo seguinte ao 216, um passo além do pedido.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 7, 10, 9, 12, 11, 14, …, qual é o termo seguinte?",
    opcoes: [
      "17",
      "13",
      "16",
      "15",
      "12",
    ],
    correta: 1,
    explicacao:
      "A sequência alterna duas operações: soma 3 e subtrai 1. 7 + 3 = 10, 10 − 1 = 9, 9 + 3 = 12, 12 − 1 = 11, 11 + 3 = 14. O próximo passo é uma subtração: 14 − 1 = 13. Outra forma de ver: os termos de ordem ímpar (7, 9, 11, …) e os de ordem par (10, 12, 14, …) crescem de 2 em 2, e o próximo é o quarto termo de ordem ímpar, 13.\n\n17 aplica “+ 3” de novo, quebrando a alternância. 16 continua a subsequência de ordem par (14 + 2), mas o próximo termo é de ordem ímpar. 15 soma 1. E 12 subtrai 2, trocando a operação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é o próximo termo da sequência 4; 6; 9; 13,5; …?",
    opcoes: [
      "18",
      "20",
      "20,25",
      "27",
      "22,5",
    ],
    correta: 2,
    explicacao:
      "Cada termo é o anterior multiplicado por 1,5 (ou seja, somado à sua metade): 4 × 1,5 = 6, 6 × 1,5 = 9, 9 × 1,5 = 13,5. O próximo é 13,5 × 1,5 = 20,25.\n\n18 repete a última diferença (13,5 + 4,5). 20 supõe que o aumento das diferenças cresça 0,5 a cada passo (2, 3, 4,5, 6,5). 27 dobra o último termo. E 22,5 soma ao 13,5 o termo anterior, 9. A pista é que cada diferença é a metade do termo anterior: 2 é metade de 4, 3 de 6, 4,5 de 9 — e a próxima, 6,75, é metade de 13,5.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Na sequência 25, 32, 37, 47, 58, 71, …, cada termo é obtido do anterior por uma mesma regra. Qual é o próximo termo?",
    opcoes: [
      "84",
      "79",
      "82",
      "85",
      "80",
    ],
    correta: 1,
    explicacao:
      "Cada termo é o anterior somado à soma dos seus próprios algarismos: 25 + (2 + 5) = 32, 32 + (3 + 2) = 37, 37 + (3 + 7) = 47, 47 + (4 + 7) = 58, 58 + (5 + 8) = 71. O próximo é 71 + (7 + 1) = 79.\n\nAs diferenças (7, 5, 10, 11, 13) não seguem padrão aritmético — é isso que obriga a olhar para os algarismos. 84 repete a última diferença, 13. 82 e 85 somam 11 e 14, palpites sobre o crescimento das diferenças. E 80 soma 9, errando a soma dos algarismos de 71.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Qual número completa a sequência 1, 10, 2, 20, 3, 30, 4, …?",
    opcoes: [
      "5",
      "31",
      "50",
      "34",
      "40",
    ],
    correta: 4,
    explicacao:
      "Há duas sequências intercaladas. Nas posições ímpares estão 1, 2, 3, 4 (crescem de 1 em 1); nas pares, 10, 20, 30 (crescem de 10 em 10). O último termo dado, 4, ocupa uma posição ímpar, então o próximo pertence à sequência das posições pares: depois de 30 vem 40.\n\n5 continua a sequência errada — a das posições ímpares, que só volta a aparecer depois. 31 e 34 misturam as duas sequências (30 + 1 e 30 + 4). E 50 pula um termo da sequência de dezenas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é o próximo termo da sequência 1, −2, 4, −8, 16, …?",
    opcoes: [
      "32",
      "−16",
      "−32",
      "−64",
      "8",
    ],
    correta: 2,
    explicacao:
      "Cada termo é o anterior multiplicado por −2: 1 × (−2) = −2, −2 × (−2) = 4, 4 × (−2) = −8, −8 × (−2) = 16. O próximo é 16 × (−2) = −32. O sinal alterna porque a razão é negativa, e o valor absoluto dobra a cada passo.\n\n32 acerta o tamanho, mas ignora a troca de sinal. −16 só troca o sinal do último termo, sem dobrá-lo. −64 multiplica por −4, como se o fator crescesse. E 8 divide por 2, invertendo o sentido da sequência.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 3, 4, 6, 10, 18, …, qual número vem em seguida?",
    opcoes: [
      "26",
      "36",
      "28",
      "35",
      "34",
    ],
    correta: 4,
    explicacao:
      "As diferenças entre termos consecutivos dobram: 4 − 3 = 1, 6 − 4 = 2, 10 − 6 = 4, 18 − 10 = 8. A próxima diferença é 16, e o termo seguinte é 18 + 16 = 34. Outra leitura dá o mesmo: cada termo é o dobro do anterior menos 2 (18 × 2 − 2 = 34).\n\n26 repete a última diferença. 28 supõe que as diferenças cresçam de 2 em 2. 36 dobra o último termo sem subtrair 2, e 35 subtrai só 1. Duas leituras diferentes chegando ao mesmo número são um bom sinal de que a regra foi encontrada.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Na sequência 1, 1, 2, 4, 7, 13, 24, …, qual é o próximo termo?",
    opcoes: [
      "37",
      "48",
      "35",
      "44",
      "31",
    ],
    correta: 3,
    explicacao:
      "A partir do quarto termo, cada um é a soma dos três anteriores: 1 + 1 + 2 = 4, 1 + 2 + 4 = 7, 2 + 4 + 7 = 13, 4 + 7 + 13 = 24. O próximo é 7 + 13 + 24 = 44.\n\n37 soma só os dois últimos (13 + 24), aplicando a regra de Fibonacci, que já falha no 4 (1 + 2 = 3, não 4). 48 dobra o último termo. 35 repete a última diferença (24 + 11). E 31 soma ao último termo apenas o 7.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual número continua a sequência 4, 9, 25, 49, 121, …?",
    opcoes: [
      "144",
      "169",
      "196",
      "225",
      "289",
    ],
    correta: 1,
    explicacao:
      "Os termos são os quadrados dos números primos, em ordem: 2² = 4, 3² = 9, 5² = 25, 7² = 49, 11² = 121. O próximo primo depois do 11 é o 13, e 13² = 169.\n\n144 = 12² e 196 = 14² vêm de quem usa todos os números naturais, sem notar que os quadrados de 4, 6, 8, 9 e 10 ficaram de fora. 225 = 15² tampouco é quadrado de primo. E 289 = 17² é o quadrado do primo seguinte ao 13, um passo além do pedido.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Na sequência 1, 11, 21, 1211, 111221, …, cada termo descreve o anterior. Qual é o próximo termo?",
    opcoes: [
      "13112221",
      "4122",
      "312211",
      "132211",
      "3122",
    ],
    correta: 2,
    explicacao:
      "Cada termo “lê em voz alta” o anterior, contando os algarismos iguais seguidos. “1” é “um 1” → 11; “11” é “dois 1” → 21; “21” é “um 2, um 1” → 1211; “1211” é “um 1, um 2, dois 1” → 111221. O último termo, 111221, tem três 1, dois 2 e um 1: “três 1, dois 2, um 1” → 312211.\n\n13112221 é o termo seguinte ao 312211, um passo além do pedido. 4122 junta os quatro 1 como se estivessem num só bloco, mas os 2 os separam. 132211 escreve o algarismo antes da quantidade, invertendo a ordem da leitura. E 3122 esquece o último bloco, “um 1”.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é o próximo termo da sequência 2, 4, 16, 256, …?",
    opcoes: [
      "512",
      "65.536",
      "1.024",
      "4.096",
      "131.072",
    ],
    correta: 1,
    explicacao:
      "Cada termo é o quadrado do anterior: 2² = 4, 4² = 16, 16² = 256. O próximo é 256² = 256 × 256 = 65.536. Os termos também são potências de 2 cujos expoentes dobram: 2¹, 2², 2⁴, 2⁸ — e o próximo é 2¹⁶.\n\n512 dobra o último termo, como se a regra fosse multiplicar por 2. 1.024 multiplica por 4 e 4.096 por 16, repetindo fatores que apareceram antes. E 131.072 é 2¹⁷, erro de uma unidade no expoente.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Qual número substitui o ponto de interrogação na sequência 3, 6, ?, 24, 48?",
    opcoes: [
      "15",
      "18",
      "12",
      "9",
      "16",
    ],
    correta: 2,
    explicacao:
      "Cada termo é o dobro do anterior: 3 × 2 = 6, e, do outro lado da lacuna, 24 × 2 = 48. O termo que falta é 6 × 2 = 12, e ele confere com o seguinte: 12 × 2 = 24.\n\n9 e 15 supõem uma soma constante (de 3 ou de 9), que não se mantém até o 48. 18 é o triplo de 6, e o 24 não seria o dobro dele. E 16 fica entre 6 e 24 sem regra: nem soma nem multiplicação constante o produzem. Numa lacuna, a resposta precisa se encaixar dos dois lados.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 2, 5, 10, ?, 26, 37, qual número ocupa o lugar do ponto de interrogação?",
    opcoes: [
      "15",
      "18",
      "16",
      "17",
      "20",
    ],
    correta: 3,
    explicacao:
      "As diferenças entre termos consecutivos são números ímpares crescentes: 5 − 2 = 3, 10 − 5 = 5, depois 7, 9 e 11. O termo que falta é 10 + 7 = 17, e ele confere com os seguintes: 17 + 9 = 26 e 26 + 11 = 37. Os termos também são n² + 1: 1 + 1, 4 + 1, 9 + 1, 16 + 1, 25 + 1, 36 + 1.\n\n15 repete a diferença 5. 16 é 4², esquecendo o “+ 1”. 18 e 20 somam 8 e 10 e quebram a sequência das diferenças: 26 − 18 = 8 e 26 − 20 = 6 não seguem o padrão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual número está faltando na sequência 1, 4, 13, ?, 121?",
    opcoes: [
      "39",
      "40",
      "41",
      "22",
      "52",
    ],
    correta: 1,
    explicacao:
      "Cada termo é o triplo do anterior mais 1: 1 × 3 + 1 = 4, 4 × 3 + 1 = 13. O termo que falta é 13 × 3 + 1 = 40, e ele confere com o seguinte: 40 × 3 + 1 = 121. As diferenças (3, 9, 27, 81) também são potências de 3.\n\n39 triplica sem somar 1, e 41 soma 2 em vez de 1 — nos dois casos, o triplo seguinte mais 1 não dá 121. 22 repete a diferença 9. E 52 multiplica 13 por 4, fator que não aparece em nenhum outro passo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 5, 7, 11, 19, ?, 67, qual é o termo que falta?",
    opcoes: [
      "33",
      "27",
      "39",
      "35",
      "43",
    ],
    correta: 3,
    explicacao:
      "As diferenças dobram a cada passo: 7 − 5 = 2, 11 − 7 = 4, 19 − 11 = 8. A próxima diferença é 16, e o termo que falta é 19 + 16 = 35. Ele confere com o seguinte: 35 + 32 = 67, e 32 é o dobro de 16. Outra leitura: cada termo é o dobro do anterior menos 3 (19 × 2 − 3 = 35).\n\n27 repete a diferença 8. 33 e 39 somam 14 e 20, palpites que não deixam a diferença seguinte (67 − 33 = 34 ou 67 − 39 = 28) no padrão. E 43 é a média entre 19 e 67, que não tem relação com a regra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual número completa a sequência 10, 13, ?, 22, 28, 35?",
    opcoes: [
      "16",
      "17",
      "18",
      "19",
      "15",
    ],
    correta: 1,
    explicacao:
      "As diferenças crescem de 1 em 1: 13 − 10 = 3, depois 4, 5, 6 e 7. O termo que falta é 13 + 4 = 17, e ele confere com os seguintes: 17 + 5 = 22, 22 + 6 = 28, 28 + 7 = 35.\n\n16 repete a diferença 3. 19 alterna somas de 3 e 6, leitura que funciona até o 28, mas falha no último passo (28 + 3 = 31, não 35). 18 e 15 deixam as diferenças fora de ordem (5 e 4, ou 2 e 7). Conferir a lacuna com todos os termos seguintes evita escolher uma regra que só vale em parte.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Na progressão aritmética 5, 8, 11, 14, …, qual é o 20º termo?",
    opcoes: [
      "62",
      "65",
      "60",
      "59",
      "57",
    ],
    correta: 0,
    explicacao:
      "A razão é 3, e o termo de posição n é o primeiro somado a (n − 1) razões: aₙ = a₁ + (n − 1) × r. Para n = 20: 5 + 19 × 3 = 5 + 57 = 62.\n\n65 usa 20 razões em vez de 19 (5 + 60): do 1º ao 20º termo há 19 saltos, não 20. 60 é só 20 × 3, sem o termo inicial. 59 soma 18 razões (5 + 54), e 57 é 19 × 3 sem o primeiro termo. O erro mais comum é contar os termos em vez dos saltos entre eles.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Quantos termos tem a sequência 7, 11, 15, 19, …, 203, em que cada termo é o anterior somado a 4?",
    opcoes: [
      "49",
      "50",
      "48",
      "51",
      "196",
    ],
    correta: 1,
    explicacao:
      "Do primeiro ao último termo, a sequência sobe 203 − 7 = 196. Cada salto vale 4, então há 196 ÷ 4 = 49 saltos. Como o número de termos é sempre o número de saltos mais 1, a sequência tem 49 + 1 = 50 termos.\n\n49 conta só os saltos e esquece o termo inicial. 48 começa a contar a partir do segundo termo ((203 − 11) ÷ 4). 51 divide o último termo por 4 e arredonda para cima (203 ÷ 4 ≈ 50,75), como se a sequência começasse em zero. E 196 é a distância entre o primeiro e o último termo, não a quantidade de termos. Conferência: 7 + 49 × 4 = 203.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é a soma dos 30 primeiros números ímpares positivos (1 + 3 + 5 + …)?",
    opcoes: [
      "870",
      "900",
      "930",
      "961",
      "841",
    ],
    correta: 1,
    explicacao:
      "A soma dos n primeiros ímpares é n²: 1 = 1², 1 + 3 = 4 = 2², 1 + 3 + 5 = 9 = 3². Para n = 30, a soma é 30² = 900. Pela fórmula da progressão aritmética, o 30º ímpar é 1 + 29 × 2 = 59, e a soma é (1 + 59) × 30 ÷ 2 = 900.\n\n961 = 31² e 841 = 29² usam a quantidade errada de termos. 870 e 930 aparecem quando se erra o último termo na fórmula, usando 57 ou 61 em vez de 59.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 4, 7, 10, 13, …, em que posição aparece o número 298?",
    opcoes: [
      "99",
      "98",
      "100",
      "97",
      "294",
    ],
    correta: 0,
    explicacao:
      "Do 4 até o 298 a sequência sobe 294, em saltos de 3: são 294 ÷ 3 = 98 saltos. A posição é o número de saltos mais 1, porque o primeiro termo já ocupa a posição 1. Logo, 298 é o 99º termo. Conferência: 4 + 98 × 3 = 298.\n\n98 conta só os saltos. 100 soma 1 a mais. 97 começa a contar a partir do segundo termo ((298 − 7) ÷ 3). E 294 é a distância total, não a posição.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Na progressão geométrica 2, 6, 18, 54, …, qual é o 8º termo?",
    opcoes: [
      "1.458",
      "4.374",
      "13.122",
      "2.187",
      "6.561",
    ],
    correta: 1,
    explicacao:
      "A razão é 3, e o termo de posição n é o primeiro multiplicado por n − 1 razões: aₙ = a₁ × rⁿ⁻¹. Para n = 8: 2 × 3⁷ = 2 × 2.187 = 4.374. Seguindo termo a termo: 54, 162, 486, 1.458, 4.374.\n\n1.458 é o 7º termo, e 13.122 é o 9º: erro de uma posição para menos ou para mais. 2.187 é 3⁷, que esquece o primeiro termo, 2. E 6.561 é 3⁸, que esquece o 2 e ainda usa um expoente a mais.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é a soma dos 20 primeiros termos da progressão aritmética 3, 7, 11, 15, …?",
    opcoes: [
      "1.640",
      "780",
      "860",
      "820",
      "79",
    ],
    correta: 3,
    explicacao:
      "O 20º termo é 3 + 19 × 4 = 79. A soma dos termos de uma progressão aritmética é a média entre o primeiro e o último, vezes a quantidade de termos: (3 + 79) × 20 ÷ 2 = 82 × 10 = 820.\n\n1.640 esquece de dividir por 2. 780 usa 75 como último termo (o 19º). 860 usa 83, contando 20 saltos em vez de 19. E 79 é o 20º termo, não a soma. Conferência rápida: a média dos 20 termos é 41, e 41 × 20 = 820.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "A sequência 3, 8, 1, 6, 4, 3, 8, 1, 6, 4, … repete sempre o mesmo bloco de cinco números. Qual é o 150º termo?",
    opcoes: [
      "3",
      "8",
      "4",
      "1",
      "6",
    ],
    correta: 2,
    explicacao:
      "O bloco 3, 8, 1, 6, 4 se repete a cada 5 termos. Como 150 é múltiplo de 5 (150 = 5 × 30), o 150º termo é o último de um bloco completo: 4. Em geral, divide-se a posição por 5 e olha-se o resto: resto 1 dá 3, resto 2 dá 8, resto 3 dá 1, resto 4 dá 6, e resto 0 dá o último do bloco, 4.\n\nO erro mais comum é tratar o resto 0 como se fosse a primeira posição do bloco, o que leva ao 3. Os demais valores (8, 1 e 6) correspondem aos restos 2, 3 e 4, que não são o caso de 150.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é o algarismo das unidades do número 3⁵⁰ (3 elevado a 50)?",
    opcoes: [
      "3",
      "7",
      "9",
      "1",
      "5",
    ],
    correta: 2,
    explicacao:
      "As potências de 3 terminam num ciclo de quatro algarismos: 3¹ = 3, 3² = 9, 3³ = 27 (termina em 7), 3⁴ = 81 (termina em 1), e depois 3⁵ = 243 volta a terminar em 3. O ciclo 3, 9, 7, 1 se repete a cada 4 expoentes. Como 50 dividido por 4 dá resto 2, 3⁵⁰ termina como 3², ou seja, em 9.\n\n3, 7 e 1 correspondem aos restos 1, 3 e 0, que não são o caso do expoente 50. E 5 nem aparece no ciclo: nenhuma potência de 3 termina em 5, porque 3ⁿ nunca é múltiplo de 5.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Com palitos de fósforo, monta-se uma fileira de triângulos lado a lado, cada um aproveitando um palito do anterior: 1 triângulo usa 3 palitos, 2 triângulos usam 5, e 3 triângulos usam 7. Quantos palitos são necessários para 25 triângulos?",
    opcoes: [
      "75",
      "51",
      "50",
      "53",
      "49",
    ],
    correta: 1,
    explicacao:
      "O primeiro triângulo usa 3 palitos, e cada triângulo novo acrescenta só 2, porque aproveita um lado do anterior. Para n triângulos são 3 + 2 × (n − 1) = 2n + 1 palitos. Com 25 triângulos: 2 × 25 + 1 = 51.\n\n75 conta 3 palitos por triângulo, ignorando os lados compartilhados. 50 esquece o palito do começo. 53 soma 2 a mais, e 49 usa 24 triângulos em vez de 25. Testar a fórmula nos casos dados (1 → 3, 2 → 5, 3 → 7) ajuda a evitar esses erros.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Uma pilha de latas tem 1 lata na camada de cima, 2 na camada seguinte, 3 na próxima, e assim por diante, sempre com uma lata a mais por camada. Se a pilha tem 120 latas ao todo, quantas camadas ela tem?",
    opcoes: [
      "15",
      "12",
      "16",
      "14",
      "20",
    ],
    correta: 0,
    explicacao:
      "O total de latas com n camadas é 1 + 2 + 3 + … + n = n × (n + 1) ÷ 2. Procura-se n com n × (n + 1) ÷ 2 = 120, isto é, n × (n + 1) = 240. Como 15 × 16 = 240, a pilha tem 15 camadas. Conferência: 1 + 2 + … + 15 = 120.\n\n16 e 14 dariam 136 e 105 latas. 12 e 20 vêm de estimativas como 120 ÷ 10 ou 240 ÷ 12, sem usar a soma dos números consecutivos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Os números naturais, a partir do 1, são escritos em linhas: a linha 1 tem um número (1), a linha 2 tem dois (2 e 3), a linha 3 tem três (4, 5 e 6), e assim por diante. Qual é o primeiro número da linha 20?",
    opcoes: [
      "190",
      "210",
      "191",
      "211",
      "172",
    ],
    correta: 2,
    explicacao:
      "Antes da linha 20 foram escritas as linhas 1 a 19, com 1 + 2 + … + 19 = 19 × 20 ÷ 2 = 190 números. Como a escrita começou no 1, o último número da linha 19 é 190, e a linha 20 começa no 191.\n\n190 é o último número da linha 19. 210 é o último da linha 20 (1 + 2 + … + 20 = 210), e 211 é o primeiro da linha 21. E 172 é o primeiro número da linha 19, uma linha antes da pedida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Uma sequência começa com a₁ = 2, e cada termo seguinte é o triplo do anterior menos 1. Qual é o valor de a₅?",
    opcoes: [
      "121",
      "41",
      "365",
      "122",
      "123",
    ],
    correta: 3,
    explicacao:
      "Calculando termo a termo: a₂ = 3 × 2 − 1 = 5, a₃ = 3 × 5 − 1 = 14, a₄ = 3 × 14 − 1 = 41, a₅ = 3 × 41 − 1 = 122.\n\n41 é o a₄, um passo antes do pedido, e 365 é o a₆ (3 × 122 − 1). 121 subtrai 2 no último passo em vez de 1. E 123 esquece de subtrair 1 no último passo (3 × 41). Em sequências definidas pelo termo anterior, o caminho seguro é calcular um termo de cada vez, sem pular etapas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Quantos quadrados perfeitos (1, 4, 9, 16, …) são maiores que 100 e menores que 1.000?",
    opcoes: [
      "22",
      "20",
      "31",
      "900",
      "21",
    ],
    correta: 4,
    explicacao:
      "Os quadrados maiores que 100 começam em 11² = 121, porque 10² = 100 não é maior que 100. Os menores que 1.000 terminam em 31² = 961, porque 32² = 1.024 passa de 1.000. De 11 a 31 há 31 − 11 + 1 = 21 números, então há 21 quadrados perfeitos no intervalo.\n\n22 inclui o próprio 100 (de 10² a 31²). 20 esquece de somar 1 na contagem (31 − 11). 31 conta todos os quadrados de 1² a 31², inclusive os menores que 100. E 900 é a distância entre 100 e 1.000, não a quantidade de quadrados.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Quantos múltiplos de 7 existem de 100 a 500, incluindo os extremos?",
    opcoes: [
      "57",
      "56",
      "58",
      "71",
      "400",
    ],
    correta: 0,
    explicacao:
      "O primeiro múltiplo de 7 a partir de 100 é 105 (7 × 15), e o último até 500 é 497 (7 × 71). Os múltiplos vão de 7 × 15 a 7 × 71, então são 71 − 15 + 1 = 57 números.\n\n56 esquece de somar 1 (71 − 15). 58 soma 1 a mais. 71 conta todos os múltiplos de 7 de 7 até 497, sem descontar os menores que 100. E 400 é a quantidade de números de 100 a 500 (sem contar um dos extremos), não a de múltiplos de 7.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Numa sequência, cada termo a partir do terceiro é a soma dos dois anteriores. Se o 1º termo é 3 e o 5º termo é 21, qual é o 2º termo?",
    opcoes: [
      "5",
      "4",
      "6",
      "7",
      "3",
    ],
    correta: 0,
    explicacao:
      "Chamando o 2º termo de x: o 3º é 3 + x, o 4º é x + (3 + x) = 3 + 2x, e o 5º é (3 + x) + (3 + 2x) = 6 + 3x. Como o 5º termo é 21, 6 + 3x = 21, então 3x = 15 e x = 5. A sequência fica 3, 5, 8, 13, 21.\n\nCom 4, o 5º termo seria 18; com 6, 24; com 7, 27; e com 3, 15. Montar a expressão de cada termo em função do valor desconhecido evita a tentativa e erro.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Escrevendo os números naturais em sequência, sem espaços (123456789101112131415…), qual algarismo ocupa a 20ª posição?",
    opcoes: [
      "5",
      "4",
      "2",
      "0",
      "1",
    ],
    correta: 4,
    explicacao:
      "Os números de 1 a 9 ocupam as posições 1 a 9. A partir daí, cada número tem dois algarismos: o 10 ocupa as posições 10 e 11, o 11 as posições 12 e 13, o 12 as 14 e 15, o 13 as 16 e 17, o 14 as 18 e 19, e o 15 as posições 20 e 21. A 20ª posição é o primeiro algarismo do 15, ou seja, 1.\n\n5 é o segundo algarismo do 15, na posição 21. 4 é o último algarismo do 14, na posição 19. 2 e 0 vêm de quem conta cada número como um único algarismo e chega ao 20.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Observe o padrão: 1 × 9 + 2 = 11; 12 × 9 + 3 = 111; 123 × 9 + 4 = 1.111. Seguindo a mesma lógica, qual é o resultado de 12.345 × 9 + 6?",
    opcoes: [
      "11.111",
      "1.111.111",
      "111.110",
      "111.111",
      "123.456",
    ],
    correta: 3,
    explicacao:
      "No padrão, o número formado pelos algarismos de 1 até k, multiplicado por 9 e somado a k + 1, dá um número com k + 1 algarismos 1. Com 12.345 (algarismos de 1 a 5), soma-se 6, e o resultado tem seis algarismos 1: 111.111. A conta confirma: 12.345 × 9 = 111.105, e 111.105 + 6 = 111.111.\n\n11.111 e 1.111.111 erram a quantidade de algarismos 1. 111.110 soma 5 em vez de 6. E 123.456 apenas continua a sequência dos algarismos, sem fazer a conta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Na sequência 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, …, cada número n aparece n vezes seguidas. Qual é o 50º termo?",
    opcoes: [
      "9",
      "11",
      "8",
      "10",
      "50",
    ],
    correta: 3,
    explicacao:
      "Até o fim dos blocos do 1 ao 9, a sequência tem 1 + 2 + … + 9 = 45 termos. O bloco do 10 ocupa as 10 posições seguintes, da 46ª à 55ª. Como 50 está nesse intervalo, o 50º termo é 10.\n\n9 seria a resposta para as posições de 37 a 45, e 11 para as posições de 56 a 66. 8 ocupa as posições de 29 a 36. E 50 confunde a posição com o valor do termo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Na sequência 1, 4, 7, 10, 13, …, quantos termos são menores que 200?",
    opcoes: [
      "67",
      "66",
      "68",
      "65",
      "199",
    ],
    correta: 0,
    explicacao:
      "Os termos são da forma 1 + 3k, com k = 0, 1, 2, … O maior termo abaixo de 200 é 199 = 1 + 3 × 66. Então k vai de 0 a 66, o que dá 67 termos.\n\n66 conta só os saltos, esquecendo o primeiro termo. 68 inclui um termo a mais, que já passaria de 200 (1 + 3 × 67 = 202). 65 começa a contagem no segundo termo ((199 − 4) ÷ 3). E 199 é o último termo, não a quantidade de termos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "media",
    enunciado:
      "Qual é o valor da soma 1 − 2 + 3 − 4 + 5 − 6 + … + 99 − 100?",
    opcoes: [
      "−50",
      "50",
      "−100",
      "0",
      "−49",
    ],
    correta: 0,
    explicacao:
      "Agrupando os termos de dois em dois: (1 − 2) + (3 − 4) + … + (99 − 100). Cada par vale −1, e de 1 a 100 há 50 pares. A soma é 50 × (−1) = −50.\n\n50 acerta a quantidade de pares, mas erra o sinal: em cada par, o número subtraído é o maior. −100 conta 100 pares em vez de 50. 0 supõe que os termos se anulem, o que não acontece. E −49 esquece um dos pares.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "A sequência 2, 7, 12, 17, 22, … cresce de 5 em 5. Qual dos números abaixo pertence a ela?",
    opcoes: [
      "2025",
      "2029",
      "2031",
      "2027",
      "2033",
    ],
    correta: 3,
    explicacao:
      "Todos os termos deixam resto 2 na divisão por 5: 2 = 0 × 5 + 2, 7 = 1 × 5 + 2, 12 = 2 × 5 + 2, e assim por diante. Um número pertence à sequência se, e somente se, deixa resto 2 na divisão por 5 — ou seja, termina em 2 ou em 7. Dos números apresentados, só 2027 termina em 7: 2027 = 405 × 5 + 2.\n\n2025 termina em 5 e é múltiplo de 5 (resto 0). 2029 deixa resto 4, 2031 deixa resto 1 e 2033 deixa resto 3. Nenhum deles termina em 2 ou 7.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "dificil",
    enunciado:
      "Na sequência 3, 6, 12, 24, 46, 96, um dos números foi escrito errado e quebra a regra que os demais seguem. Qual é esse número?",
    opcoes: [
      "46",
      "24",
      "12",
      "96",
      "6",
    ],
    correta: 0,
    explicacao:
      "Os termos dobram a cada passo: 3, 6, 12, 24, e depois deveria vir 48, cujo dobro é o 96 que aparece em seguida. O 46 é o único que não segue a regra: nem é o dobro de 24, nem a metade de 96.\n\nTrocar qualquer outro número não resolve. Se o 24 estivesse errado, ainda restaria o salto de 46 para 96, que não é dobrar. Se o problema fosse o 12, o 6 ou o 96, o 46 continuaria fora da regra do mesmo jeito. Por isso o número escrito errado só pode ser o 46.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Sequências lógicas numéricas",
    dificuldade: "facil",
    enunciado:
      "Qual é o valor da soma 1 + 2 + 3 + … + 149 + 150?",
    opcoes: [
      "11.250",
      "22.650",
      "11.325",
      "11.175",
      "11.476",
    ],
    correta: 2,
    explicacao:
      "Somando o primeiro com o último, o segundo com o penúltimo, e assim por diante, cada par vale 151: 1 + 150, 2 + 149, 3 + 148… São 75 pares, e a soma é 75 × 151 = 11.325. É a fórmula n × (n + 1) ÷ 2, com n = 150.\n\n22.650 esquece de dividir por 2. 11.250 usa 150 × 150 ÷ 2, trocando n + 1 por n. 11.175 soma só até 149, e 11.476 vai até 151. Conferência: a média dos números de 1 a 150 é 75,5, e 75,5 × 150 = 11.325.",
  },
];
