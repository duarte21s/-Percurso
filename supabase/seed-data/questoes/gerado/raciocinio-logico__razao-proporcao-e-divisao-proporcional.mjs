/* Razão, proporção e divisão proporcional (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__razao-proporcao-e-divisao-proporcional.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__razao-proporcao-e-divisao-proporcional.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa sala há 12 homens e 18 mulheres. Qual é a razão entre o número de homens e o número de mulheres, na forma de fração irredutível?",
    opcoes: [
      "3/2",
      "2/3",
      "2/5",
      "1/3",
      "6",
    ],
    correta: 1,
    explicacao:
      "A razão entre homens e mulheres é 12/18. Simplificando por 6, fica 2/3: para cada 2 homens, há 3 mulheres.\n\n3/2 inverte a ordem pedida (mulheres para homens) — numa razão, a ordem dos termos importa. 2/5 é a razão entre os homens e o total de pessoas (12/30). 1/3 compara a diferença entre os grupos (6) com o número de mulheres. E 6 é a própria diferença, não uma razão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Uma tarefa levou 40 minutos, e outra levou 2 horas. Qual é a razão entre o tempo da primeira e o da segunda?",
    opcoes: [
      "20",
      "3",
      "2/3",
      "1/20",
      "1/3",
    ],
    correta: 4,
    explicacao:
      "Para comparar, as duas medidas precisam estar na mesma unidade: 2 horas = 120 minutos. A razão é 40/120 = 1/3 — a primeira tarefa levou um terço do tempo da segunda.\n\n20 divide 40 por 2 sem converter as horas em minutos. 3 inverte a razão (120/40). 2/3 compara os 40 minutos com uma hora só. E 1/20 inverte a divisão sem converter as unidades. Razão entre grandezas da mesma espécie exige a mesma unidade nos dois termos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Na proporção x/6 = 10/15, qual é o valor de x?",
    opcoes: [
      "9",
      "1",
      "4",
      "11",
      "25",
    ],
    correta: 2,
    explicacao:
      "Numa proporção, o produto dos meios é igual ao produto dos extremos: x × 15 = 6 × 10, então 15x = 60 e x = 4. Conferindo: 4/6 e 10/15 são ambas iguais a 2/3.\n\n9 multiplica cruzado de forma errada (6 × 15 ÷ 10). 1 subtrai os termos, como se a proporção fosse uma diferença constante. 11 soma a diferença 15 − 10 ao 6. E 25 soma os termos da segunda razão, sem relação com a proporção.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Dois números a e b são tais que a/b = 3/5 e a + b = 64. Qual é o valor de a?",
    opcoes: [
      "40",
      "38,4",
      "8",
      "24",
      "32",
    ],
    correta: 3,
    explicacao:
      "Se a/b = 3/5, então a vale 3 partes e b vale 5 partes iguais: juntos, 8 partes. Como a + b = 64, cada parte vale 64 ÷ 8 = 8, e a = 3 × 8 = 24 (e b = 40). Conferindo: 24/40 = 3/5.\n\n40 é o valor de b. 38,4 aplica 3/5 ao total, esquecendo que 3/5 compara a com b, e não a com a soma. 8 é o valor de uma parte. E 32 divide o total ao meio, ignorando a razão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa turma de 35 alunos, a razão entre o número de meninos e o de meninas é 3 para 4. Quantos meninos há na turma?",
    opcoes: [
      "20",
      "26,25",
      "5",
      "21",
      "15",
    ],
    correta: 4,
    explicacao:
      "A razão 3 para 4 divide a turma em 3 + 4 = 7 partes iguais: 3 de meninos e 4 de meninas. Cada parte vale 35 ÷ 7 = 5 alunos, e os meninos são 3 × 5 = 15 (as meninas, 20).\n\n20 é o número de meninas. 26,25 aplica 3/4 ao total, como se a razão comparasse meninos com a turma inteira. 5 é o valor de uma parte. E 21 aplica 3/5 ao total, usando um denominador errado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "As idades de dois irmãos estão na razão 2 para 3, e a soma delas é 45 anos. Quais são as idades?",
    opcoes: [
      "20 e 25 anos",
      "30 e 45 anos",
      "15 e 30 anos",
      "18 e 27 anos",
      "9 e 36 anos",
    ],
    correta: 3,
    explicacao:
      "A razão 2 para 3 divide a soma em 5 partes iguais: 45 ÷ 5 = 9 anos por parte. O mais novo tem 2 × 9 = 18 anos, e o mais velho, 3 × 9 = 27. Conferindo: 18 + 27 = 45 e 18/27 = 2/3.\n\nCada alternativa errada cumpre só uma das condições. 20 e 25 somam 45, mas estão na razão 4 para 5. 30 e 45 estão na razão 2 para 3, mas somam 75. 15 e 30 somam 45, mas estão na razão 1 para 2, e 9 e 36, na razão 1 para 4.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Dois números estão na razão 5 para 3, e a diferença entre eles é 14. Quais são esses números?",
    opcoes: [
      "25 e 15",
      "40 e 24",
      "35 e 21",
      "70 e 42",
      "20 e 6",
    ],
    correta: 2,
    explicacao:
      "A razão 5 para 3 significa 5 partes contra 3 partes; a diferença corresponde a 5 − 3 = 2 partes. Como a diferença é 14, cada parte vale 7. Os números são 5 × 7 = 35 e 3 × 7 = 21. Conferindo: 35 − 21 = 14 e 35/21 = 5/3.\n\n25 e 15 e 40 e 24 respeitam a razão, mas têm diferenças 10 e 16. 70 e 42 usam 14 como valor de cada parte, esquecendo que a diferença vale duas partes. E 20 e 6 têm diferença 14, mas não estão na razão 5 para 3.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Uma quantia de R$ 900,00 será dividida em três partes diretamente proporcionais a 2, 3 e 4. Qual é o valor da maior parte?",
    opcoes: [
      "R$ 300,00",
      "R$ 200,00",
      "R$ 400,00",
      "R$ 450,00",
      "R$ 100,00",
    ],
    correta: 2,
    explicacao:
      "Dividir em partes proporcionais a 2, 3 e 4 é dividir em 2 + 3 + 4 = 9 partes iguais e dar 2, 3 e 4 delas a cada um. Cada parte vale 900 ÷ 9 = 100 reais; a maior recebe 4 × 100 = 400 reais. As três partes são 200, 300 e 400, que somam 900.\n\nR$ 300,00 e R$ 200,00 são as outras duas partes. R$ 450,00 divide o total ao meio. E R$ 100,00 é o valor de uma única parte, e não o de quem recebe 4 partes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Três máquinas dividem a produção de 330 peças em quantidades inversamente proporcionais ao tempo que cada uma leva para fazer uma peça: 2, 3 e 6 minutos. Quantas peças faz a máquina mais rápida, a de 2 minutos?",
    opcoes: [
      "165",
      "60",
      "55",
      "110",
      "180",
    ],
    correta: 0,
    explicacao:
      "Inversamente proporcional aos tempos significa proporcional a 1/2, 1/3 e 1/6. Multiplicando por 6 para tirar os denominadores, as partes ficam proporcionais a 3, 2 e 1: são 6 partes, de 330 ÷ 6 = 55 peças cada. A máquina de 2 minutos faz 3 × 55 = 165 peças; as outras, 110 e 55.\n\n60 trata a divisão como diretamente proporcional aos tempos (330 × 2/11), dando menos peças à máquina mais rápida. 55 é a parte da máquina de 6 minutos, e 110, a da de 3 minutos. E 180 é a parte da máquina de 6 minutos na divisão direta, que também inverte o raciocínio.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Dois sócios abriram uma empresa: Ana investiu R$ 20.000,00 e Beto, R$ 30.000,00. O lucro de R$ 15.000,00 será dividido em partes proporcionais aos valores investidos. Quanto recebem Ana e Beto, respectivamente?",
    opcoes: [
      "R$ 6.000,00 e R$ 9.000,00",
      "R$ 7.500,00 e R$ 7.500,00",
      "R$ 5.000,00 e R$ 10.000,00",
      "R$ 9.000,00 e R$ 6.000,00",
      "R$ 4.000,00 e R$ 11.000,00",
    ],
    correta: 0,
    explicacao:
      "Os investimentos estão na razão 20.000 para 30.000, ou 2 para 3: o lucro se divide em 5 partes de 15.000 ÷ 5 = 3.000 reais. Ana recebe 2 × 3.000 = 6.000, e Beto, 3 × 3.000 = 9.000.\n\n“R$ 7.500,00 e R$ 7.500,00” divide o lucro igualmente, ignorando os investimentos. “R$ 9.000,00 e R$ 6.000,00” inverte as partes. “R$ 5.000,00 e R$ 10.000,00” usa a razão 1 para 2. E “R$ 4.000,00 e R$ 11.000,00” não corresponde a nenhuma razão entre os investimentos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Carla investiu R$ 10.000,00 numa sociedade por 6 meses, e Davi investiu R$ 15.000,00 por 8 meses. O lucro de R$ 6.000,00 será dividido em partes proporcionais ao capital investido multiplicado pelo tempo. Quanto recebem Carla e Davi, respectivamente?",
    opcoes: [
      "R$ 2.400,00 e R$ 3.600,00",
      "R$ 3.000,00 e R$ 3.000,00",
      "R$ 2.571,43 e R$ 3.428,57",
      "R$ 4.000,00 e R$ 2.000,00",
      "R$ 2.000,00 e R$ 4.000,00",
    ],
    correta: 4,
    explicacao:
      "Quando capital e tempo contam, divide-se o lucro proporcionalmente ao produto dos dois: Carla, 10.000 × 6 = 60.000; Davi, 15.000 × 8 = 120.000. A razão é 60.000 para 120.000, ou 1 para 2: o lucro se divide em 3 partes de 2.000 reais. Carla recebe 2.000, e Davi, 4.000.\n\n“R$ 2.400,00 e R$ 3.600,00” considera só os capitais (razão 2 para 3). “R$ 3.000,00 e R$ 3.000,00” divide igualmente. “R$ 2.571,43 e R$ 3.428,57” considera só os tempos (razão 6 para 8). E “R$ 4.000,00 e R$ 2.000,00” inverte as partes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Um suco é preparado misturando concentrado e água na razão de 1 para 4. Quantos litros de água são necessários para 2 litros de concentrado?",
    opcoes: [
      "0,5 litros",
      "10 litros",
      "6 litros",
      "8 litros",
      "2,5 litros",
    ],
    correta: 3,
    explicacao:
      "A razão 1 para 4 significa 4 partes de água para cada parte de concentrado. Com 2 litros de concentrado (2 partes de 1 litro), são necessários 2 × 4 = 8 litros de água, e o suco terá 10 litros.\n\n0,5 litro inverte a razão (2 ÷ 4). 10 litros é o total de suco, não a água. 6 litros soma 4 aos 2 litros de concentrado, sem multiplicar. E 2,5 litros divide 10 por 4, misturando o total com a razão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Um município tem 250.000 habitantes e área de 500 km². Qual é a densidade demográfica, em habitantes por km²?",
    opcoes: [
      "0,002 hab/km²",
      "5.000 hab/km²",
      "125.000.000 hab/km²",
      "500 hab/km²",
      "50 hab/km²",
    ],
    correta: 3,
    explicacao:
      "A densidade demográfica é a razão entre a população e a área: 250.000 ÷ 500 = 500 habitantes por km². Em média, cada quilômetro quadrado do município abriga 500 pessoas.\n\n0,002 inverte a razão (área por habitante). 5.000 e 50 erram a divisão por um fator de 10. E 125.000.000 multiplica população e área, em vez de dividir. Nas razões com unidade (hab/km², km/h, km/L), a unidade diz a ordem da divisão: o que vem antes da barra vai no numerador.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Um carro percorreu 180 km em 2 horas e 30 minutos. Qual foi sua velocidade média, em km/h?",
    opcoes: [
      "450 km/h",
      "90 km/h",
      "60 km/h",
      "72 km/h",
      "7,2 km/h",
    ],
    correta: 3,
    explicacao:
      "A velocidade média é a razão entre a distância e o tempo. 2 horas e 30 minutos são 2,5 horas, então a velocidade é 180 ÷ 2,5 = 72 km/h.\n\n450 multiplica distância e tempo, em vez de dividir. 90 ignora a meia hora e divide por 2. 60 divide por 3, arredondando o tempo para cima. E 7,2 erra a vírgula do resultado. O cuidado principal é converter 30 minutos em 0,5 hora, e não em 0,3.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Dois triângulos são semelhantes, e a razão entre os lados correspondentes do menor e do maior é 2 para 3. Se a área do triângulo menor é 20 cm², qual é a área do maior?",
    opcoes: [
      "45 cm²",
      "30 cm²",
      "67,5 cm²",
      "60 cm²",
      "40 cm²",
    ],
    correta: 0,
    explicacao:
      "Em figuras semelhantes, as áreas estão na razão do quadrado da razão entre os lados: (2/3)² = 4/9. Então 20 está para a área maior assim como 4 está para 9: área maior = 20 × 9 ÷ 4 = 45 cm².\n\n30 cm² usa a razão entre os lados (20 × 3/2), mas área tem duas dimensões. 67,5 cm² usa o cubo da razão, que vale para volumes. 60 cm² multiplica por 3, e 40 cm², por 2, sem relação com a semelhança.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Qual é a média proporcional (média geométrica) entre 4 e 9, isto é, o número positivo x tal que 4/x = x/9?",
    opcoes: [
      "6,5",
      "6",
      "36",
      "13",
      "5",
    ],
    correta: 1,
    explicacao:
      "Da proporção 4/x = x/9, o produto dos meios é igual ao dos extremos: x × x = 4 × 9, ou x² = 36. Como x é positivo, x = 6. Conferindo: 4/6 = 2/3 e 6/9 = 2/3.\n\n6,5 é a média aritmética (4 + 9) ÷ 2, que responde outra pergunta. 36 é o produto, esquecendo a raiz quadrada. 13 é a soma. E 5 é a diferença entre os dois números. A média geométrica nunca passa da aritmética, e as duas só coincidem quando os números são iguais.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Qual é o número x que forma, com 2, 5 e 8, a proporção 2/5 = 8/x (a quarta proporcional de 2, 5 e 8)?",
    opcoes: [
      "3,2",
      "11",
      "40",
      "20",
      "16",
    ],
    correta: 3,
    explicacao:
      "Na proporção 2/5 = 8/x, o produto dos meios é igual ao dos extremos: 2 × x = 5 × 8, então 2x = 40 e x = 20. Conferindo: 8/20 = 2/5. Da primeira razão para a segunda, os termos foram multiplicados por 4.\n\n3,2 monta a proporção de forma errada (2 × 8 ÷ 5). 11 soma a diferença 5 − 2 = 3 ao 8, como se a proporção fosse uma diferença constante. 40 é o produto 5 × 8, sem a divisão por 2. E 16 multiplica 2 por 8.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "As grandezas x e y são inversamente proporcionais. Quando x = 4, tem-se y = 15. Qual é o valor de y quando x = 6?",
    opcoes: [
      "22,5",
      "17",
      "13",
      "60",
      "10",
    ],
    correta: 4,
    explicacao:
      "Em grandezas inversamente proporcionais, o produto x × y é constante: 4 × 15 = 60. Com x = 6, y = 60 ÷ 6 = 10. Faz sentido: x aumentou (de 4 para 6), então y diminuiu.\n\n22,5 trata as grandezas como diretas (15 × 6/4), fazendo y aumentar junto com x. 17 soma a y a variação de x, e 13 a subtrai — regras de diferença, que não valem aqui. E 60 é a constante do produto, não o valor de y.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Uma herança de R$ 80.000,00 será dividida entre três irmãos em partes diretamente proporcionais às suas idades: 8, 12 e 20 anos. Quanto recebe o mais velho?",
    opcoes: [
      "R$ 16.000,00",
      "R$ 40.000,00",
      "R$ 24.000,00",
      "R$ 32.000,00",
      "R$ 2.000,00",
    ],
    correta: 1,
    explicacao:
      "As idades somam 8 + 12 + 20 = 40, então a herança se divide em 40 partes de 80.000 ÷ 40 = 2.000 reais. O mais velho, com 20 anos, recebe 20 × 2.000 = 40.000 reais; os outros recebem 16.000 e 24.000.\n\nR$ 16.000,00 e R$ 24.000,00 são as partes dos irmãos mais novos. R$ 32.000,00 divide a herança por 50 partes em vez de 40. E R$ 2.000,00 é o valor de uma parte, correspondente a um ano de idade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Um prêmio de R$ 2.800,00 será dividido entre três funcionários em partes inversamente proporcionais ao número de faltas de cada um no ano: 1, 2 e 4 faltas. Quanto recebe o funcionário que teve 4 faltas?",
    opcoes: [
      "R$ 400,00",
      "R$ 1.600,00",
      "R$ 800,00",
      "R$ 700,00",
      "R$ 1.400,00",
    ],
    correta: 0,
    explicacao:
      "Inversamente proporcional a 1, 2 e 4 significa proporcional a 1, 1/2 e 1/4. Multiplicando por 4, as partes ficam proporcionais a 4, 2 e 1: são 7 partes de 2.800 ÷ 7 = 400 reais. Quem teve 4 faltas recebe 1 parte: 400 reais; os outros recebem 1.600 e 800.\n\nR$ 1.600,00 trata a divisão como diretamente proporcional, dando mais a quem faltou mais. R$ 800,00 é a parte de quem teve 2 faltas. R$ 700,00 divide o prêmio por 4, o número de faltas. E R$ 1.400,00 é metade do prêmio, sem base na divisão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Qual é a razão entre a área de um quadrado de lado 3 cm e a área de um quadrado de lado 5 cm?",
    opcoes: [
      "3/5",
      "3/25",
      "9/5",
      "2/5",
      "9/25",
    ],
    correta: 4,
    explicacao:
      "As áreas são 3² = 9 cm² e 5² = 25 cm², e a razão entre elas é 9/25. Em geral, a razão entre as áreas de figuras semelhantes é o quadrado da razão entre os lados: (3/5)² = 9/25.\n\n3/5 é a razão entre os lados, não entre as áreas. 3/25 eleva ao quadrado só o denominador, e 9/5, só o numerador. E 2/5 compara a diferença entre os lados com o lado maior.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Numa empresa, a razão entre o número de homens e o de mulheres é 5 para 3. Se forem contratadas mais 4 mulheres, a razão passará a ser 5 para 4. Quantos homens trabalham na empresa?",
    opcoes: [
      "12",
      "20",
      "16",
      "25",
      "15",
    ],
    correta: 1,
    explicacao:
      "Com h homens e m mulheres: h/m = 5/3, então m = 3h/5. Depois das contratações, h/(m + 4) = 5/4, ou seja, 4h = 5m + 20. Substituindo m: 4h = 3h + 20, e h = 20 (com m = 12). Conferindo: 20/12 = 5/3 e 20/16 = 5/4.\n\n12 é o número de mulheres. 16 é o de mulheres depois das contratações. 25 e 15 são proporcionais a 5 e 3, mas, com 4 mulheres a mais, a razão ficaria 25/19, e não 5/4.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Três números a, b e c satisfazem a/3 = b/5 = c/7 e a + b + c = 75. Qual é o valor de c?",
    opcoes: [
      "25",
      "35",
      "15",
      "5",
      "45",
    ],
    correta: 1,
    explicacao:
      "Se a/3 = b/5 = c/7 = k, então a = 3k, b = 5k e c = 7k. A soma dá 15k = 75, então k = 5, e c = 7 × 5 = 35 (com a = 15 e b = 25). Conferindo: 15 + 25 + 35 = 75.\n\n25 e 15 são os valores de b e de a. 5 é a constante k, não o valor de c. E 45 aplica ao total uma fração errada, como se c fosse 3/5 da soma. Chamar de k o valor comum das razões resolve qualquer proporção com vários termos e soma conhecida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa prova de 60 questões, a razão entre o número de acertos de um candidato e o total de questões foi 0,8. Quantas questões ele acertou?",
    opcoes: [
      "75",
      "12",
      "48",
      "52",
      "8",
    ],
    correta: 2,
    explicacao:
      "A razão acertos/total = 0,8 significa que os acertos são 0,8 das 60 questões: 0,8 × 60 = 48 acertos. Conferindo: 48/60 = 0,8 (ou 80%).\n\n75 divide 60 por 0,8, invertendo a razão. 12 é o número de erros (60 − 48). 52 subtrai 8 de 60, confundindo 0,8 com 8 questões. E 8 lê a razão como se fosse o número de acertos. Em porcentagem, a razão 0,8 corresponde a 80% de acertos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa pesquisa, 3 em cada 5 entrevistados disseram preferir o produto A. Que porcentagem dos entrevistados prefere o produto A?",
    opcoes: [
      "60%",
      "40%",
      "30%",
      "35%",
      "80%",
    ],
    correta: 0,
    explicacao:
      "A razão 3 em cada 5 é 3/5 = 0,6. Em porcentagem, basta multiplicar por 100: 60%. Outra forma: 5 entrevistados correspondem a 100%, então cada um vale 20%, e 3 valem 60%.\n\n40% é a porcentagem dos que não preferem o produto A. 30% multiplica 3 por 10, esquecendo o denominador 5. 35% junta os algarismos 3 e 5. E 80% conta 4 em cada 5. Transformar a razão em número decimal (3 ÷ 5 = 0,6) e multiplicar por 100 funciona para qualquer razão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "O número 180 deve ser dividido em duas partes cuja razão, da primeira para a segunda, seja 4 para 5. Quais são as partes?",
    opcoes: [
      "90 e 90",
      "72 e 90",
      "40 e 50",
      "80 e 100",
      "100 e 80",
    ],
    correta: 3,
    explicacao:
      "A razão 4 para 5 divide o total em 4 + 5 = 9 partes iguais: 180 ÷ 9 = 20. A primeira parte é 4 × 20 = 80, e a segunda, 5 × 20 = 100. Conferindo: 80 + 100 = 180 e 80/100 = 4/5.\n\n“90 e 90” divide igualmente. “72 e 90” está na razão 4 para 5, mas soma 162. “40 e 50” também está na razão, mas soma 90. E “100 e 80” inverte a ordem pedida. Dizer “da primeira para a segunda” fixa essa ordem: a primeira parte é a menor.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Sabe-se que a razão entre a e b é 2 : 3 e que a razão entre b e c é 4 : 5. Qual é a razão entre a e c?",
    opcoes: [
      "8 : 15",
      "2 : 5",
      "2 : 3",
      "4 : 5",
      "10 : 12",
    ],
    correta: 0,
    explicacao:
      "É preciso escrever as duas razões com o mesmo valor para b. Em a : b = 2 : 3, multiplicando por 4, fica 8 : 12; em b : c = 4 : 5, multiplicando por 3, fica 12 : 15. Agora b vale 12 nas duas, e a : b : c = 8 : 12 : 15. Logo, a : c = 8 : 15. Pela multiplicação das razões: (2/3) × (4/5) = 8/15.\n\n2 : 5 junta o primeiro termo de uma razão com o último da outra, sem igualar b. 2 : 3 e 4 : 5 são as razões dadas. E 10 : 12 não corresponde a nenhuma combinação correta das razões.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Três grandezas A, B e C estão na razão 2 : 3 : 4. Se A = 18, qual é o valor de C?",
    opcoes: [
      "24",
      "27",
      "9",
      "72",
      "36",
    ],
    correta: 4,
    explicacao:
      "A razão 2 : 3 : 4 significa que A vale 2 partes, B vale 3 e C vale 4. Como A = 18, cada parte vale 18 ÷ 2 = 9, e C = 4 × 9 = 36 (com B = 27).\n\n24 soma 6 a 18, confundindo a razão com uma diferença (de 2 para 4, a diferença é 2 partes, e não 6). 27 é o valor de B. 9 é o valor de uma parte. E 72 multiplica 18 por 4, esquecendo de dividir pelas 2 partes de A.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Um terreno retangular tem lados na razão 3 para 5 e perímetro de 64 metros. Qual é a área do terreno, em m²?",
    opcoes: [
      "960 m²",
      "120 m²",
      "240 m²",
      "32 m²",
      "15 m²",
    ],
    correta: 2,
    explicacao:
      "O perímetro é a soma dos quatro lados, ou 2 × (comprimento + largura); então comprimento + largura = 32 m. Dividindo 32 na razão 3 para 5: 8 partes de 4 m, e os lados medem 12 m e 20 m. A área é 12 × 20 = 240 m².\n\n960 m² usa 64 como soma de apenas dois lados, obtendo 24 m e 40 m. 120 m² multiplica 3 × 5 × 8, confundindo partes com medidas. 32 é a soma de comprimento e largura, não a área. E 15 multiplica os termos da razão, 3 × 5.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Os salários de duas pessoas estão na razão 2 para 5, e quem ganha mais recebe R$ 1.200,00 a mais que a outra. Qual é o salário de quem ganha menos?",
    opcoes: [
      "R$ 2.000,00",
      "R$ 480,00",
      "R$ 400,00",
      "R$ 1.200,00",
      "R$ 800,00",
    ],
    correta: 4,
    explicacao:
      "A razão 2 para 5 significa 2 partes contra 5; a diferença corresponde a 5 − 2 = 3 partes, que valem 1.200 reais. Cada parte vale 400, e o salário menor é 2 × 400 = 800 reais (o maior, 2.000). Conferindo: 2.000 − 800 = 1.200 e 800/2.000 = 2/5.\n\nR$ 2.000,00 é o salário maior. R$ 480,00 aplica 2/5 à diferença. R$ 400,00 é o valor de uma parte. E R$ 1.200,00 é a diferença, não um dos salários.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "O número 105 deve ser dividido em duas partes que sejam, ao mesmo tempo, diretamente proporcionais a 2 e 3 e inversamente proporcionais a 4 e 3, respectivamente. Quais são as partes?",
    opcoes: [
      "42 e 63",
      "45 e 60",
      "70 e 35",
      "30 e 75",
      "35 e 70",
    ],
    correta: 4,
    explicacao:
      "Numa divisão composta, cada parte é proporcional ao produto dos fatores diretos pelos inversos dos fatores inversos: a primeira, a 2 × 1/4 = 1/2; a segunda, a 3 × 1/3 = 1. Multiplicando por 2, as partes ficam proporcionais a 1 e 2: 3 partes de 35. As partes são 35 e 70.\n\n“42 e 63” considera só a proporção direta (2 para 3). “45 e 60” considera só a inversa (1/4 para 1/3, ou 3 para 4). “70 e 35” inverte a ordem. E “30 e 75” está na razão 2 para 5, sem relação com os fatores dados.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa receita, a razão entre as quantidades de açúcar e de farinha é de 1 para 3. Usando 450 g de farinha, quantos gramas de açúcar são necessários?",
    opcoes: [
      "150 g",
      "1.350 g",
      "450 g",
      "112,5 g",
      "600 g",
    ],
    correta: 0,
    explicacao:
      "A razão 1 para 3 diz que o açúcar é a terça parte da farinha. Com 450 g de farinha, o açúcar é 450 ÷ 3 = 150 g. Conferindo: 150/450 = 1/3.\n\n1.350 g inverte a razão, multiplicando a farinha por 3. 450 g iguala as quantidades. 112,5 g divide por 4, como se o açúcar fosse 1 de 4 partes da farinha. E 600 g é a soma de açúcar e farinha, não o açúcar.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Numa turma de 36 alunos, a razão entre o número de aprovados e o de reprovados é de 7 para 2. Quantos alunos foram reprovados?",
    opcoes: [
      "28",
      "4",
      "12",
      "8",
      "18",
    ],
    correta: 3,
    explicacao:
      "A razão 7 para 2 divide a turma em 7 + 2 = 9 partes iguais: 36 ÷ 9 = 4 alunos por parte. Os reprovados são 2 × 4 = 8 (e os aprovados, 28).\n\n28 é o número de aprovados. 4 é o valor de uma parte. 12 divide a turma por 3, sem base na razão. E 18 divide a turma ao meio. Conferência: 28 aprovados e 8 reprovados somam 36, e 28/8 = 7/2. O ponto de partida é sempre somar os termos da razão para saber em quantas partes o total se divide.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Dois números positivos estão na razão 3 para 8, e o produto deles é 96. Qual é o menor desses números?",
    opcoes: [
      "16",
      "6",
      "36",
      "12",
      "4",
    ],
    correta: 1,
    explicacao:
      "Escrevendo os números como 3k e 8k, o produto é 3k × 8k = 24k² = 96, então k² = 4 e k = 2 (positivo). Os números são 6 e 16; o menor é 6. Conferindo: 6 × 16 = 96 e 6/16 = 3/8.\n\n16 é o maior dos números. 36 aplica 3/8 ao produto. 12 divide o produto por 8. E 4 é o valor de k², não o de um dos números. O k sai de uma raiz quadrada porque o produto multiplica duas partes proporcionais, e só a raiz positiva serve.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Na planta de uma casa, 1 cm representa 50 cm reais. Uma sala aparece na planta como um retângulo de 8 cm por 6 cm. Qual é a área real da sala?",
    opcoes: [
      "0,24 m²",
      "2.400 m²",
      "12 m²",
      "14 m²",
      "48 m²",
    ],
    correta: 2,
    explicacao:
      "Primeiro convertem-se as medidas: 8 cm na planta são 8 × 50 = 400 cm = 4 m, e 6 cm são 6 × 50 = 300 cm = 3 m. A área real é 4 × 3 = 12 m². Note que a escala das áreas é o quadrado da escala das medidas: cada cm² da planta vale 50 × 50 = 2.500 cm² reais.\n\n0,24 m² aplica a escala uma vez só à área da planta (48 × 50 cm²). 2.400 m² erra a conversão de unidades. 14 m² é o perímetro da sala, em metros. E 48 m² lê a área da planta como se estivesse em metros quadrados.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Se x/y = 3/4, com y diferente de zero, qual é o valor de (x + y)/y?",
    opcoes: [
      "3/4",
      "7/3",
      "4/7",
      "7/4",
      "1",
    ],
    correta: 3,
    explicacao:
      "Separando a fração: (x + y)/y = x/y + y/y = 3/4 + 1 = 7/4. Com números: se x = 3 e y = 4, então (3 + 4)/4 = 7/4; se x = 6 e y = 8, (6 + 8)/8 = 14/8 = 7/4 também.\n\n3/4 esquece a parcela y/y = 1. 7/3 divide a soma por x, em vez de por y. 4/7 inverte o resultado. E 1 considera só a parcela y/y. Perguntas desse tipo sempre podem ser conferidas com valores concretos que respeitem a razão dada.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Se a/b = 2/3, com a e b diferentes de zero, qual é o valor de (a + b)/(a − b)?",
    opcoes: [
      "5",
      "−1/5",
      "−5",
      "1/5",
      "5/3",
    ],
    correta: 2,
    explicacao:
      "Como a/b = 2/3, pode-se escrever a = 2k e b = 3k. Então (a + b)/(a − b) = (2k + 3k)/(2k − 3k) = 5k/(−k) = −5. Com números: a = 2 e b = 3 dão (2 + 3)/(2 − 3) = 5/(−1) = −5.\n\n5 esquece o sinal: a − b é negativo, porque a é menor que b. −1/5 e 1/5 invertem a fração. E 5/3 divide a soma por b, em vez de pela diferença. Um teste rápido com a = 2 e b = 3 evita o erro de sinal, o mais comum nesta questão.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa fábrica, a razão entre peças perfeitas e peças defeituosas é de 19 para 1. Num lote de 2.000 peças, quantas são defeituosas?",
    opcoes: [
      "1.900",
      "20",
      "200",
      "100",
      "95",
    ],
    correta: 3,
    explicacao:
      "A razão 19 para 1 divide o lote em 19 + 1 = 20 partes iguais: 2.000 ÷ 20 = 100 peças por parte. As defeituosas correspondem a 1 parte: 100 peças (e as perfeitas, 1.900).\n\n1.900 é o número de peças perfeitas. 20 é o número de partes. 200 corresponde a 10% do lote, e não a 1 parte em 20 (5%). E 95 divide 1.900 por 20, misturando as perfeitas com o total de partes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "No mesmo instante, um poste de 6 m de altura projeta uma sombra de 4 m, e um prédio projeta uma sombra de 18 m. Qual é a altura do prédio?",
    opcoes: [
      "12 m",
      "27 m",
      "20 m",
      "16 m",
      "108 m",
    ],
    correta: 1,
    explicacao:
      "No mesmo instante, os raios de sol têm a mesma inclinação, e a razão entre altura e sombra é a mesma para os dois objetos: 6/4 = h/18. Então h = 18 × 6 ÷ 4 = 27 m. A altura do prédio é 1,5 vez a sua sombra, como a do poste.\n\n12 m inverte a razão (18 × 4 ÷ 6). 20 m soma a diferença entre altura e sombra do poste (2 m) à sombra do prédio, e 16 m a subtrai. E 108 m multiplica 18 × 6, esquecendo de dividir pela sombra do poste.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Um concreto é feito com cimento, areia e brita na razão de 1 : 2 : 3, em volume. Para preparar 1,2 m³ dessa mistura, quantos metros cúbicos de areia são necessários?",
    opcoes: [
      "0,4 m³",
      "0,2 m³",
      "0,6 m³",
      "2,4 m³",
      "0,8 m³",
    ],
    correta: 0,
    explicacao:
      "A razão 1 : 2 : 3 divide o volume em 1 + 2 + 3 = 6 partes iguais: 1,2 ÷ 6 = 0,2 m³ por parte. A areia corresponde a 2 partes: 2 × 0,2 = 0,4 m³ (o cimento é 0,2 m³, e a brita, 0,6 m³).\n\n0,2 m³ é a quantidade de cimento, e 0,6 m³, a de brita. 2,4 m³ multiplica o volume total por 2, esquecendo de dividir pelas 6 partes. E 0,8 m³ aplica à mistura a fração 2/3, como se só houvesse areia e brita.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "As idades de Ana e Bia estão hoje na razão 4 para 5. Daqui a 6 anos, estarão na razão 6 para 7. Quais são as idades atuais de Ana e Bia, respectivamente?",
    opcoes: [
      "18 e 21 anos",
      "8 e 10 anos",
      "12 e 15 anos",
      "24 e 30 anos",
      "16 e 20 anos",
    ],
    correta: 2,
    explicacao:
      "Hoje, as idades são 4k e 5k. Daqui a 6 anos, (4k + 6)/(5k + 6) = 6/7, o que dá 28k + 42 = 30k + 36, ou seja, 2k = 6 e k = 3. As idades atuais são 12 e 15 anos. Conferindo: 12/15 = 4/5, e daqui a 6 anos, 18/21 = 6/7.\n\n“18 e 21 anos” são as idades daqui a 6 anos, não as atuais. “8 e 10”, “24 e 30” e “16 e 20” estão na razão 4 para 5 hoje, mas daqui a 6 anos ficariam na razão 7 para 8, 5 para 6 e 11 para 13 — e não 6 para 7.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa relação de proporção direta, y vale 12 quando x vale 4. Quanto vale y quando x passa a valer 10?",
    opcoes: [
      "4,8",
      "18",
      "30",
      "3",
      "120",
    ],
    correta: 2,
    explicacao:
      "Em grandezas diretamente proporcionais, a razão y/x é constante: 12/4 = 3. Com x = 10, y = 3 × 10 = 30. Faz sentido: x cresceu 2,5 vezes (de 4 para 10), e y também (de 12 para 30).\n\n4,8 trata as grandezas como inversas (12 × 4 ÷ 10). 18 soma a y a variação de x (10 − 4 = 6), regra de diferença que não vale aqui. 3 é a constante de proporcionalidade, não o valor de y. E 120 multiplica 12 por 10, esquecendo de dividir por 4.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "O número 140 deve ser dividido em três partes diretamente proporcionais a 1/2, 1/4 e 1/8. Qual é a maior das partes?",
    opcoes: [
      "80",
      "40",
      "20",
      "70",
      "35",
    ],
    correta: 0,
    explicacao:
      "Para trabalhar com inteiros, multiplicam-se os fatores pelo mínimo múltiplo comum dos denominadores, 8: as partes ficam proporcionais a 4, 2 e 1. São 7 partes de 140 ÷ 7 = 20. A maior é 4 × 20 = 80 (as outras, 40 e 20).\n\n40 e 20 são as outras duas partes. 70 é metade de 140, aplicando o fator 1/2 diretamente ao total, sem considerar os outros. E 35 divide 140 por 4, usando o denominador do fator do meio.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "As velocidades de dois corredores estão na razão 5 para 4. No tempo em que o mais rápido percorre 1.000 metros, quantos metros percorre o outro?",
    opcoes: [
      "800 m",
      "1.250 m",
      "400 m",
      "200 m",
      "900 m",
    ],
    correta: 0,
    explicacao:
      "No mesmo tempo, as distâncias percorridas estão na mesma razão das velocidades: 5 para 4. Então a distância do mais lento é 1.000 × 4/5 = 800 m. Em outras palavras, a cada 5 metros do mais rápido, o outro faz 4.\n\n1.250 m inverte a razão, como se o mais lento corresse mais. 400 m e 200 m confundem a razão com o valor de uma parte (1.000 ÷ 5 = 200) ou dobram esse valor. E 900 m subtrai 100 m por causa da diferença de 1 na razão, uma regra de diferença que não se aplica.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Numa viagem, um carro percorreu 360 km e consumiu 30 litros de gasolina. Qual foi o rendimento médio, em km por litro?",
    opcoes: [
      "10.800 km/L",
      "330 km/L",
      "1,2 km/L",
      "120 km/L",
      "12 km/L",
    ],
    correta: 4,
    explicacao:
      "O rendimento é a razão entre a distância percorrida e o combustível gasto: 360 ÷ 30 = 12 km por litro. Cada litro levou o carro, em média, a 12 km.\n\n10.800 multiplica distância e consumo, em vez de dividir. 330 subtrai os litros dos quilômetros, misturando unidades. 1,2 erra a vírgula. E 120 divide 360 por 3, esquecendo um zero do consumo. A unidade km/L diz a ordem da divisão: quilômetros no numerador, litros no denominador.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Qual número natural deve ser somado ao numerador e ao denominador da razão 3/5 para que ela passe a ser igual a 2/3?",
    opcoes: [
      "2",
      "1",
      "3",
      "5",
      "8",
    ],
    correta: 1,
    explicacao:
      "Somando x aos dois termos: (3 + x)/(5 + x) = 2/3. Multiplicando cruzado: 3(3 + x) = 2(5 + x), ou 9 + 3x = 10 + 2x, então x = 1. Conferindo: (3 + 1)/(5 + 1) = 4/6 = 2/3.\n\nCom 2, a razão vira 5/7; com 3, 6/8 = 3/4; com 5, 8/10 = 4/5; e com 8, 11/13 — nenhuma igual a 2/3. Somar o mesmo número aos dois termos não preserva a razão: ela se aproxima de 1 à medida que o número somado cresce.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "facil",
    enunciado:
      "Um segmento de 35 cm é dividido em duas partes, na razão de 2 para 5. Quanto mede a parte menor?",
    opcoes: [
      "25 cm",
      "14 cm",
      "7 cm",
      "17,5 cm",
      "10 cm",
    ],
    correta: 4,
    explicacao:
      "A razão 2 para 5 divide o segmento em 2 + 5 = 7 partes iguais de 35 ÷ 7 = 5 cm. A parte menor tem 2 dessas partes: 2 × 5 = 10 cm (a maior, 25 cm).\n\n25 cm é a parte maior. 14 cm aplica 2/5 ao total, como se a razão comparasse a parte menor com o segmento inteiro. 7 cm é o número de partes lido como medida. E 17,5 cm divide o segmento ao meio.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Os três ângulos internos de um triângulo estão na razão 1 : 2 : 3. Quanto mede o maior deles?",
    opcoes: [
      "60°",
      "90°",
      "30°",
      "120°",
      "180°",
    ],
    correta: 1,
    explicacao:
      "A soma dos ângulos internos de um triângulo é 180°. A razão 1 : 2 : 3 divide esses 180° em 6 partes de 30°. O maior ângulo tem 3 partes: 90° (os outros medem 30° e 60°). O triângulo é, portanto, retângulo.\n\n60° é o ângulo do meio, e 30°, o menor. 120° usaria 4 partes, somando mais que o necessário. E 180° é a soma dos três ângulos, não o maior deles.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "media",
    enunciado:
      "Numa experiência, foram medidos três pares de valores de duas grandezas: x = 2 com y = 30, x = 3 com y = 20 e x = 5 com y = 12. Que relação existe entre x e y?",
    opcoes: [
      "São diretamente proporcionais, com y ÷ x = 15",
      "São inversamente proporcionais, com x · y = 60",
      "São inversamente proporcionais, com x · y = 30",
      "Não há proporção entre elas, porque y cai 10 e depois 8",
      "y é inversamente proporcional ao quadrado de x",
    ],
    correta: 1,
    explicacao:
      "Em grandezas inversamente proporcionais, o produto x · y é o mesmo em todos os pares; nas diretamente proporcionais, é a razão y ÷ x que se mantém. Aqui, 2 · 30 = 60, 3 · 20 = 60 e 5 · 12 = 60: o produto é constante, e as grandezas são inversamente proporcionais, com x · y = 60.\n\nA razão y ÷ x vale 15 só no primeiro par (20 ÷ 3 não é 15), então não são diretas. O produto 30 é metade do verdadeiro. Que y caia 10 e depois 8 não prova nada: numa proporção inversa, as quedas não precisam ser iguais. E x² · y dá 120, 180 e 300, que não são constantes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Razão, proporção e divisão proporcional",
    dificuldade: "dificil",
    enunciado:
      "Uma escola tem 1.000 alunos, e a razão entre alunos e professores é de 25 para 1. Para que essa razão passe a ser de 20 para 1, sem mudar o número de alunos, quantos professores precisam ser contratados?",
    opcoes: [
      "50",
      "40",
      "10",
      "5",
      "200",
    ],
    correta: 2,
    explicacao:
      "Hoje, a escola tem 1.000 ÷ 25 = 40 professores. Para a razão ser 20 para 1, são necessários 1.000 ÷ 20 = 50 professores. É preciso contratar 50 − 40 = 10.\n\n50 é o número total de professores com a nova razão, não o de contratados. 40 é o número atual. 5 é a diferença entre as razões (25 − 20), lida como número de professores. E 200 divide 1.000 por 5.",
  },
];
