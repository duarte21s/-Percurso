/* Análise combinatória e probabilidade — parte B (25 questões).
   União de eventos, probabilidade condicional, extrações sem reposição,
   permutação circular e contagem com restrições.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Em um experimento aleatório, dois eventos A e B têm probabilidades P(A) = 0,4 e P(B) = 0,5, e a probabilidade de os dois ocorrerem simultaneamente é 0,2. A probabilidade de ocorrer A ou B é:",
    opcoes: ["0,9", "0,2", "0,5", "0,7", "1,1"],
    correta: 3,
    explicacao:
      "A regra da união é P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,4 + 0,5 − 0,2 = 0,7. A alternativa 0,9 soma sem descontar a interseção, contando duas vezes os casos em que os dois eventos acontecem juntos. Só quando os eventos são mutuamente exclusivos, com interseção nula, a soma direta funciona.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Uma urna contém 4 bolas brancas e 6 bolas pretas. Duas bolas são retiradas em sequência, sem que a primeira seja devolvida à urna. A probabilidade de que ambas sejam brancas é:",
    opcoes: ["4/25", "2/15", "1/5", "3/20", "2/5"],
    correta: 1,
    explicacao:
      "Na primeira retirada a probabilidade é 4/10; retirada uma branca, restam 3 brancas em 9 bolas, então a segunda vale 3/9. Multiplicando: (4/10) · (3/9) = 12/90 = 2/15. A alternativa 4/25 corresponde a (4/10)², que valeria com reposição. Sem reposição, o denominador e o numerador mudam entre as extrações — é essa dependência que a questão cobra.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Cinco pessoas vão se sentar em torno de uma mesa circular com cinco lugares idênticos. Duas disposições são consideradas iguais quando uma pode ser obtida da outra por rotação. O número de disposições distintas é:",
    opcoes: ["120", "60", "5", "20", "24"],
    correta: 4,
    explicacao:
      "Na permutação circular, fixa-se uma pessoa como referência e permutam-se as demais: (5 − 1)! = 4! = 24. A alternativa 120 é 5!, a permutação em fila, que conta como diferentes disposições que na mesa redonda são apenas rotações da mesma cena. Em mesa circular, o que importa é quem está ao lado de quem, não a posição absoluta.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Considerando os algarismos de 0 a 9, deseja-se formar números de quatro algarismos distintos entre si, lembrando que o algarismo das unidades de milhar não pode ser zero. A quantidade desses números é:",
    opcoes: ["5 040", "10 000", "4 536", "3 024", "9 000"],
    correta: 2,
    explicacao:
      "A primeira posição tem 9 opções (exclui o zero); a segunda volta a ter 9 (os 10 algarismos menos o já usado, incluindo agora o zero); depois 8 e 7. Assim 9 · 9 · 8 · 7 = 4 536. A alternativa 5 040 é 10 · 9 · 8 · 7, que aceitaria números começando por zero. Tratar primeiro a posição restrita evita esse deslize.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Um dado honesto é lançado e alguém informa apenas que o resultado foi um número par, sem dizer qual. Diante dessa informação, a probabilidade de o resultado ter sido a face 2 é:",
    opcoes: ["1/3", "1/6", "1/2", "2/3", "1/4"],
    correta: 0,
    explicacao:
      "A informação reduz o espaço amostral aos três resultados pares — 2, 4 e 6 — e apenas um deles é favorável: 1/3. A alternativa 1/6 é a probabilidade antes de saber que o número é par. Esse é o núcleo da probabilidade condicional: uma informação nova encolhe o conjunto de casos possíveis e altera a probabilidade.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Uma caixa contém 10 peças produzidas por uma máquina, das quais 3 apresentam defeito. Retirando-se uma peça ao acaso para inspeção, a probabilidade de que ela esteja em boas condições é:",
    opcoes: ["3/10", "1/3", "7/10", "3/7", "1/10"],
    correta: 2,
    explicacao:
      "Se 3 são defeituosas, 7 estão boas, e a probabilidade é 7/10 = 70%. A alternativa 3/10 responde à pergunta oposta, e 3/7 compara defeituosas com boas em vez de comparar com o total. Vale a conferência: 3/10 + 7/10 = 1, como precisa acontecer entre um evento e seu complementar.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Em um grupo de n pessoas, o número de duplas distintas que podem ser formadas é igual a 10. Sabendo que a ordem dentro da dupla não importa, o valor de n é:",
    opcoes: ["4", "10", "6", "20", "5"],
    correta: 4,
    explicacao:
      "É preciso resolver C(n,2) = n(n − 1)/2 = 10, ou seja, n(n − 1) = 20. Testando valores inteiros, 5 · 4 = 20, logo n = 5. A alternativa 4 daria C(4,2) = 6 duplas, e 6 daria 15. Como a expressão cresce rápido, testar poucos valores inteiros costuma ser mais rápido que resolver a equação do segundo grau.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "A palavra LIVRO tem cinco letras distintas. Entre todos os seus anagramas, a quantidade daqueles que começam obrigatoriamente pela letra L é:",
    opcoes: ["24", "120", "60", "12", "5"],
    correta: 0,
    explicacao:
      "Fixando o L na primeira posição, restam 4 letras livres para permutar nas 4 posições seguintes: 4! = 24. A alternativa 120 é o total de anagramas da palavra, 5!, sem a restrição. O procedimento vale sempre: posição fixada sai da conta, e permutam-se apenas os elementos que ainda podem se mover.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Uma moeda honesta é lançada três vezes seguidas. A probabilidade de sair exatamente duas caras nesses três lançamentos é:",
    opcoes: ["1/8", "1/2", "1/4", "3/8", "5/8"],
    correta: 3,
    explicacao:
      "O espaço amostral tem 2³ = 8 resultados. Exatamente duas caras ocorre em 3 deles: cara-cara-coroa, cara-coroa-cara e coroa-cara-cara. Logo 3/8 = 37,5%. A alternativa 1/8 conta apenas uma dessas ordens, esquecendo que a coroa pode ocupar qualquer uma das três posições — é o C(3,2) = 3 que aparece aqui.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Uma prova é composta por 10 questões, e cada uma deve ser respondida com verdadeiro ou falso, sem possibilidade de deixar em branco. O número de gabaritos diferentes que essa prova admite é:",
    opcoes: ["20", "1 024", "100", "512", "2 048"],
    correta: 1,
    explicacao:
      "Cada questão tem 2 respostas possíveis e as escolhas são independentes: 2¹⁰ = 1 024. A alternativa 20 soma 10 · 2 em vez de multiplicar as possibilidades questão a questão. Esse é o mesmo raciocínio que dá 2ⁿ subconjuntos de um conjunto com n elementos: cada item entra ou não, responde sim ou não.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Em um grupo formado por 5 homens e 5 mulheres, duas pessoas são sorteadas ao mesmo tempo para uma tarefa. A probabilidade de que as duas sorteadas sejam mulheres é:",
    opcoes: ["1/4", "2/9", "1/2", "5/9", "1/9"],
    correta: 1,
    explicacao:
      "Os casos favoráveis são C(5,2) = 10 e os possíveis são C(10,2) = 45, então a probabilidade é 10/45 = 2/9 ≈ 22%. A alternativa 1/4 vem de (1/2)², que trataria os sorteios como independentes — mas, sorteadas ao mesmo tempo, a segunda escolha já não tem 5 mulheres em 10 pessoas, e sim 4 em 9.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Um cadeado de segredo tem três discos giratórios, e cada disco pode ser posicionado em qualquer um dos algarismos de 0 a 9. O número de segredos diferentes que esse cadeado admite é:",
    opcoes: ["1 000", "30", "720", "100", "10 000"],
    correta: 0,
    explicacao:
      "Cada disco tem 10 posições e eles são independentes: 10 · 10 · 10 = 1 000 segredos. A alternativa 720 corresponde a 10 · 9 · 8, que valeria se os algarismos precisassem ser distintos — mas nada impede um segredo como 777. Já 30 soma os discos em vez de multiplicar.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Quatro pessoas formam uma fila. Entre elas, duas são irmãs e querem ficar necessariamente lado a lado. O número de filas diferentes que atendem a essa exigência é:",
    opcoes: ["24", "6", "12", "8", "4"],
    correta: 2,
    explicacao:
      "As irmãs são tratadas como um bloco único, o que reduz a fila a 3 elementos: 3! = 6 arranjos. Dentro do bloco, elas podem trocar de lugar entre si de 2! = 2 formas. Multiplicando, 6 · 2 = 12. A alternativa 24 é o total de filas sem restrição, 4!. A técnica do bloco resolve qualquer exigência de 'ficar junto'.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Dois dados honestos são lançados simultaneamente e os resultados são somados. A probabilidade de que essa soma seja maior que 10 é:",
    opcoes: ["1/6", "1/9", "1/18", "1/4", "1/12"],
    correta: 4,
    explicacao:
      "Somas maiores que 10 são 11 e 12. A soma 11 ocorre em 2 casos, (5,6) e (6,5), e a soma 12 em apenas 1, (6,6): são 3 casos entre 36. Assim a probabilidade é 3/36 = 1/12. A alternativa 1/18 contaria só a soma 11, e 1/6 confundiria a contagem com a da soma 7. Somas extremas são raras porque admitem poucas combinações.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Sobre um plano são marcados 7 pontos, de modo que nunca haja três deles alinhados. O número de triângulos distintos que podem ser formados tendo esses pontos como vértices é:",
    opcoes: ["210", "21", "7", "35", "42"],
    correta: 3,
    explicacao:
      "Cada triângulo fica determinado por três pontos, e a ordem em que eles são citados não muda o triângulo: C(7,3) = (7 · 6 · 5)/6 = 35. A alternativa 210 é o arranjo A(7,3), que conta o mesmo triângulo seis vezes. A condição de não haver três pontos alinhados garante que toda escolha de três pontos realmente forme um triângulo.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Dois eventos independentes A e B têm probabilidades P(A) = 0,6 e P(B) = 0,3. A probabilidade de que os dois ocorram é:",
    opcoes: ["0,9", "0,3", "0,5", "0,2", "0,18"],
    correta: 4,
    explicacao:
      "Para eventos independentes, P(A ∩ B) = P(A) · P(B) = 0,6 · 0,3 = 0,18. A alternativa 0,9 soma as probabilidades, o que corresponderia à união e ainda assim exigiria descontar a interseção. Note que a interseção é sempre menor ou igual à menor das duas probabilidades: 0,18 é de fato menor que 0,3.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Utilizando os algarismos 1, 2, 3, 4 e 5, sem repetição, deseja-se formar números ímpares de três algarismos. A quantidade de números que atendem a essa condição é:",
    opcoes: ["60", "24", "48", "36", "30"],
    correta: 3,
    explicacao:
      "A restrição está na unidade, que precisa ser 1, 3 ou 5: são 3 opções. Escolhida essa, sobram 4 algarismos para a centena e 3 para a dezena. Logo 3 · 4 · 3 = 36. A alternativa 60 é o total de números de três algarismos distintos sem a exigência de serem ímpares. Começar pela posição com restrição é o que organiza a contagem.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Três prêmios diferentes entre si — uma bicicleta, um celular e um livro — serão sorteados entre 5 pessoas, e ninguém pode receber mais de um prêmio. O número de resultados possíveis para esse sorteio é:",
    opcoes: ["10", "60", "125", "15", "20"],
    correta: 1,
    explicacao:
      "Como os prêmios são diferentes, importa quem recebe qual: é arranjo, A(5,3) = 5 · 4 · 3 = 60. A alternativa 10 é a combinação C(5,3), que valeria se os três prêmios fossem idênticos. Já 125 é 5³, que permitiria alguém acumular prêmios, contrariando o enunciado.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Um estudante não sabe responder a uma questão de múltipla escolha com 5 alternativas, das quais apenas uma é correta, e decide marcar uma delas ao acaso. A probabilidade de ele acertar é de:",
    opcoes: ["20%", "25%", "5%", "50%", "10%"],
    correta: 0,
    explicacao:
      "É um caso favorável entre 5 possíveis: 1/5 = 0,2 = 20%. A alternativa 25% corresponderia a uma questão de 4 alternativas, e 5% seria 1/20. Esse valor de 20% é a referência usada para avaliar se um desempenho em prova de múltipla escolha supera o que o acaso produziria.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Um polígono convexo tem 6 lados. Sabendo que uma diagonal é o segmento que liga dois vértices não consecutivos, o número de diagonais desse polígono é:",
    opcoes: ["15", "12", "9", "6", "18"],
    correta: 2,
    explicacao:
      "O total de segmentos entre pares de vértices é C(6,2) = 15, mas 6 deles são os próprios lados. Restam 15 − 6 = 9 diagonais, o que confere com a fórmula n(n − 3)/2 = 6 · 3/2 = 9. A alternativa 15 esquece de descontar os lados. Perceber que lados também ligam pares de vértices é o passo que a questão cobra.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Uma urna contém 3 bolas verdes e 2 bolas amarelas. Duas bolas são retiradas em sequência, sem reposição. A probabilidade de que as duas bolas retiradas tenham cores diferentes é:",
    opcoes: ["3/5", "2/5", "1/2", "3/10", "6/25"],
    correta: 0,
    explicacao:
      "Há dois caminhos favoráveis: verde depois amarela, com (3/5) · (2/4) = 6/20, e amarela depois verde, com (2/5) · (3/4) = 6/20. Somando, 12/20 = 3/5 = 60%. A alternativa 3/10 contabiliza apenas uma das ordens. Quando o enunciado não fixa qual cor sai primeiro, as duas sequências precisam entrar na soma.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Uma prova tem 5 questões de múltipla escolha, cada uma com 4 alternativas, e todas devem ser respondidas. O número de maneiras diferentes de preencher completamente o cartão de respostas é:",
    opcoes: ["20", "625", "1 024", "120", "256"],
    correta: 2,
    explicacao:
      "São 4 escolhas por questão, em 5 questões independentes: 4⁵ = 1 024. A alternativa 625 é 5⁴, que inverte base e expoente — o erro mais comum aqui. Uma forma de não trocar: a base é o número de opções por etapa, e o expoente é o número de etapas. Já 20 seria 4 · 5, somando lógica de contagem errada.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Uma moeda honesta é lançada duas vezes. A probabilidade de sair pelo menos uma cara nesses dois lançamentos é:",
    opcoes: ["1/2", "1/4", "1/3", "3/4", "2/3"],
    correta: 3,
    explicacao:
      "O caminho curto é pelo complementar: 'pelo menos uma cara' é o contrário de 'nenhuma cara', que tem probabilidade (1/2) · (1/2) = 1/4. Logo a resposta é 1 − 1/4 = 3/4. A alternativa 1/2 confundiria com a probabilidade de exatamente uma cara. Sempre que aparecer 'pelo menos', vale testar o complementar antes de listar casos.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Com as cinco vogais do alfabeto, deseja-se formar grupos de três letras distintas, sem que a ordem das letras dentro do grupo faça diferença. O número de grupos possíveis é:",
    opcoes: ["60", "10", "15", "20", "120"],
    correta: 1,
    explicacao:
      "É combinação: C(5,3) = (5 · 4 · 3)/(3 · 2 · 1) = 60/6 = 10. A alternativa 60 é o arranjo A(5,3), que contaria AEI e IEA como grupos distintos. Como o enunciado diz explicitamente que a ordem não faz diferença, a divisão pelo 3! é obrigatória.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Em uma confraternização com 12 participantes, cada pessoa brinda uma única vez com cada uma das demais. O número total de brindes realizados é:",
    opcoes: ["144", "132", "24", "72", "66"],
    correta: 4,
    explicacao:
      "Cada brinde envolve um par, e o par não depende da ordem: C(12,2) = (12 · 11)/2 = 66. A alternativa 132 é 12 · 11, que conta cada brinde duas vezes, uma por participante. Já 144 é 12², que incluiria alguém brindando consigo mesmo. É o mesmo modelo dos apertos de mão e das diagonais de polígono.",
  },
];
