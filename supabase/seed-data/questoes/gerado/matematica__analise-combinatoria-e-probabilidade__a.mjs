/* Análise combinatória e probabilidade — parte A (25 questões).
   Princípio fundamental da contagem, permutações com e sem repetição,
   arranjos, combinações e probabilidade em espaços equiprováveis.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Um restaurante monta o prato feito escolhendo uma entrada entre 4 opções, um prato principal entre 5 opções e uma sobremesa entre 3 opções. O número de refeições diferentes que podem ser montadas é:",
    opcoes: ["12", "60", "35", "20", "120"],
    correta: 1,
    explicacao:
      "Pelo princípio fundamental da contagem, escolhas sucessivas e independentes se multiplicam: 4 · 5 · 3 = 60. A alternativa 12 soma as opções (4 + 5 + 3), erro de quem trata etapas como alternativas excludentes. Somar vale quando o cliente escolhe apenas um item entre todos; multiplicar vale quando ele escolhe um de cada tipo, que é o caso aqui.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Uma senha de banco é formada por 4 algarismos, escolhidos entre 0 e 9, podendo haver repetição. O total de senhas diferentes que podem ser criadas nesse formato é:",
    opcoes: ["40", "5 040", "1 000", "10 000", "210"],
    correta: 3,
    explicacao:
      "Cada uma das 4 posições admite 10 algarismos, e como a repetição é permitida o total é 10 · 10 · 10 · 10 = 10 000. A alternativa 5 040 corresponde a 10 · 9 · 8 · 7, que seria a contagem se os algarismos tivessem de ser distintos. Já 40 soma em vez de multiplicar. Ler se o enunciado permite repetir é o que separa as duas contas.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Considerando todas as trocas possíveis de posição entre as letras da palavra AMOR, sem repetir nenhuma delas, o número de anagramas que podem ser formados é:",
    opcoes: ["24", "12", "16", "4", "256"],
    correta: 0,
    explicacao:
      "As 4 letras são todas distintas, então o total de anagramas é a permutação simples 4! = 4 · 3 · 2 · 1 = 24. A alternativa 16 corresponde a 4⁴, que valeria se cada posição pudesse repetir qualquer letra. Já 4 é apenas a quantidade de letras. Em anagramas, cada letra é usada exatamente uma vez, o que caracteriza permutação e não arranjo com repetição.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "A palavra ARARA tem cinco letras, entre as quais a letra A aparece três vezes e a letra R aparece duas vezes. O número de anagramas distintos dessa palavra é:",
    opcoes: ["120", "60", "20", "30", "10"],
    correta: 4,
    explicacao:
      "Com letras repetidas usa-se a permutação com repetição: 5! dividido pelo produto dos fatoriais das repetições, isto é, 120/(3! · 2!) = 120/12 = 10. A alternativa 120 é 5!, o total que valeria se as cinco letras fossem diferentes — mas trocar dois A entre si não gera palavra nova. Dividir pelas repetições é justamente o que elimina essas contagens duplicadas.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "De um grupo de 10 funcionários, deve ser formada uma comissão de 3 pessoas, sem distinção de cargos entre os escolhidos. O número de comissões diferentes possíveis é:",
    opcoes: ["720", "30", "120", "1 000", "210"],
    correta: 2,
    explicacao:
      "Como não há cargos, a ordem de escolha não importa e o caso é de combinação: C(10,3) = (10 · 9 · 8)/(3 · 2 · 1) = 720/6 = 120. A alternativa 720 é o arranjo A(10,3), que contaria a mesma trinca várias vezes, uma para cada ordem. A pergunta a fazer sempre é se trocar a ordem muda o resultado: aqui não muda, então divide-se pelo fatorial do tamanho do grupo.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Dos mesmos 10 funcionários de uma empresa, serão escolhidas 3 pessoas para ocupar os cargos de presidente, vice-presidente e tesoureiro, sendo que ninguém pode acumular cargos. O número de formas de preencher esses cargos é:",
    opcoes: ["120", "30", "1 000", "210", "720"],
    correta: 4,
    explicacao:
      "Agora a ordem importa, porque cada posição corresponde a um cargo diferente: A(10,3) = 10 · 9 · 8 = 720. A alternativa 120 é a combinação C(10,3), que serviria se os três tivessem funções idênticas. Comparar esta questão com a anterior mostra a diferença prática: o arranjo é sempre maior que a combinação, exatamente 3! = 6 vezes maior neste caso.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Em uma turma de 6 estudantes, deseja-se formar duplas de trabalho. Considerando que a dupla formada por dois estudantes não depende da ordem em que são citados, o número de duplas distintas é:",
    opcoes: ["15", "30", "12", "36", "20"],
    correta: 0,
    explicacao:
      "É uma combinação: C(6,2) = (6 · 5)/2 = 15. A alternativa 30 é o arranjo 6 · 5, que conta a dupla formada por Ana e Bruno como diferente da dupla Bruno e Ana. Já 36 seria 6², permitindo que alguém formasse dupla consigo mesmo. Em problemas de dupla, trio ou comissão sem cargos, a divisão pelo fatorial é obrigatória.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Duas moedas honestas são lançadas simultaneamente, e o resultado de cada uma pode ser cara ou coroa, com a mesma chance. A probabilidade de que as duas moedas mostrem cara é:",
    opcoes: ["1/2", "1/3", "1/4", "3/4", "1/8"],
    correta: 2,
    explicacao:
      "O espaço amostral tem 4 resultados igualmente prováveis: cara-cara, cara-coroa, coroa-cara e coroa-coroa. Apenas um deles é favorável, então a probabilidade é 1/4. O mesmo sai multiplicando probabilidades independentes: (1/2) · (1/2) = 1/4. A alternativa 1/3 aparece em quem lista só três casos (duas caras, duas coroas, uma de cada), esquecendo que 'uma de cada' acontece de duas maneiras.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Um dado honesto de seis faces, numeradas de 1 a 6, é lançado uma única vez. A probabilidade de o resultado ser um número par é:",
    opcoes: ["1/3", "1/2", "1/6", "2/3", "1/4"],
    correta: 1,
    explicacao:
      "Os casos favoráveis são 2, 4 e 6, ou seja, 3 entre 6 possíveis: 3/6 = 1/2. A alternativa 1/3 contaria apenas dois casos favoráveis, e 1/6 corresponderia à probabilidade de sair uma face específica. Em espaços equiprováveis, a probabilidade é sempre o número de casos favoráveis dividido pelo número total de casos possíveis.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "De um baralho comum de 52 cartas, bem embaralhado, retira-se uma carta ao acaso. Sabendo que o baralho contém 4 ases, a probabilidade de a carta retirada ser um ás é:",
    opcoes: ["1/52", "1/4", "4/13", "1/13", "1/26"],
    correta: 3,
    explicacao:
      "São 4 casos favoráveis entre 52 possíveis: 4/52, que simplificado dá 1/13 ≈ 7,7%. A alternativa 1/4 confunde o número de ases com a probabilidade, e 1/52 corresponderia a uma carta específica, como o ás de ouros. Simplificar a fração até a forma irredutível é o que costuma diferenciar a alternativa correta das demais em questões desse tipo.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Dois dados honestos de seis faces são lançados simultaneamente e os números obtidos são somados. A probabilidade de que essa soma seja igual a 7 é:",
    opcoes: ["1/12", "5/36", "1/6", "7/36", "1/36"],
    correta: 2,
    explicacao:
      "O espaço amostral tem 36 pares ordenados. A soma 7 ocorre em 6 deles: (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1). Logo a probabilidade é 6/36 = 1/6. A alternativa 5/36 corresponde à soma 6 ou 8, que têm cinco casos cada. O 7 é a soma mais provável em dois dados justamente por ter o maior número de combinações — daí seu papel em vários jogos de tabuleiro.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Uma urna contém 5 bolas vermelhas e 3 bolas azuis, todas do mesmo tamanho e peso. Retirando-se uma bola ao acaso, a probabilidade de ela ser azul é:",
    opcoes: ["5/8", "3/8", "3/5", "1/3", "1/8"],
    correta: 1,
    explicacao:
      "O total de bolas é 5 + 3 = 8, e as favoráveis são as 3 azuis: 3/8 = 37,5%. A alternativa 3/5 usa como denominador o número de bolas vermelhas em vez do total, erro frequente quando o enunciado apresenta as quantidades separadas. Já 5/8 é a probabilidade de sair vermelha — as duas somam 1, como esperado para eventos complementares.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Cinco amigos vão se posicionar lado a lado em uma fila para tirar uma fotografia. O número de formas diferentes de organizar essa fila é:",
    opcoes: ["25", "20", "60", "5", "120"],
    correta: 4,
    explicacao:
      "É uma permutação simples de 5 elementos distintos: 5! = 5 · 4 · 3 · 2 · 1 = 120. A alternativa 25 é 5², que não corresponde a nenhuma situação aqui, e 20 seria 5 · 4, o arranjo de apenas duas posições. O raciocínio direto também funciona: há 5 escolhas para o primeiro lugar, 4 para o segundo, e assim por diante.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Usando apenas os algarismos 1, 2, 3, 4 e 5, deseja-se formar números de três algarismos, todos distintos entre si. A quantidade de números que podem ser formados é:",
    opcoes: ["125", "10", "15", "60", "20"],
    correta: 3,
    explicacao:
      "Há 5 opções para a centena, 4 para a dezena e 3 para a unidade, já que não pode haver repetição: 5 · 4 · 3 = 60. A alternativa 125 é 5³, que valeria se a repetição fosse permitida. Já 10 é a combinação C(5,3), que serviria se a ordem não importasse — mas em número, 123 e 321 são valores diferentes, então a ordem importa.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "A probabilidade de um determinado evento A ocorrer em um experimento aleatório é 0,3. A probabilidade de que esse evento não ocorra é:",
    opcoes: ["0,7", "0,3", "1,3", "0,03", "0,6"],
    correta: 0,
    explicacao:
      "Evento e complementar somam 1, então P(não A) = 1 − 0,3 = 0,7. A alternativa 1,3 soma em vez de subtrair e produz um valor impossível: nenhuma probabilidade pode passar de 1. Essa regra do complementar costuma encurtar contas longas — calcular 'pelo menos um' é quase sempre mais rápido pelo caminho de 'nenhum'.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Uma turma tem 30 estudantes, dos quais 18 são meninas. Sorteando-se um estudante ao acaso para representar a turma, a probabilidade de o sorteado ser menino é:",
    opcoes: ["3/5", "1/2", "12/18", "2/5", "1/30"],
    correta: 3,
    explicacao:
      "Se 18 são meninas, os meninos são 30 − 18 = 12, e a probabilidade é 12/30 = 2/5 = 40%. A alternativa 3/5 é a probabilidade de sair menina, resultado de responder à pergunta errada. Já 12/18 compara meninos com meninas, e não com o total — a razão entre partes não é probabilidade.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Um dado honesto é lançado duas vezes seguidas, e os lançamentos não interferem um no outro. A probabilidade de sair a face 6 nos dois lançamentos é:",
    opcoes: ["1/6", "2/6", "1/12", "1/3", "1/36"],
    correta: 4,
    explicacao:
      "Para eventos independentes, as probabilidades se multiplicam: (1/6) · (1/6) = 1/36. A alternativa 2/6 soma as probabilidades, o que corresponderia à pergunta 'sair 6 em pelo menos um dos lançamentos' — e ainda assim de forma imprecisa, porque a soma direta contaria duas vezes o caso em que os dois saem 6. Multiplicar é a operação de 'e'; somar, com os devidos ajustes, é a de 'ou'.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Considere um conjunto formado por 4 elementos distintos. O número total de subconjuntos que podem ser formados a partir dele, incluindo o conjunto vazio e o próprio conjunto, é:",
    opcoes: ["8", "16", "4", "24", "32"],
    correta: 1,
    explicacao:
      "Cada elemento pode entrar ou não no subconjunto, o que dá 2 possibilidades por elemento: 2⁴ = 16. A alternativa 24 é 4!, a permutação dos elementos, que responde a outra pergunta. Somar as combinações leva ao mesmo lugar: C(4,0) + C(4,1) + C(4,2) + C(4,3) + C(4,4) = 1 + 4 + 6 + 4 + 1 = 16.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "A palavra BANANA é formada por seis letras, sendo três letras A, duas letras N e uma letra B. O número de anagramas distintos que podem ser formados com essas letras é:",
    opcoes: ["60", "120", "720", "180", "30"],
    correta: 0,
    explicacao:
      "Aplicando a permutação com repetição: 6!/(3! · 2! · 1!) = 720/12 = 60. A alternativa 720 é 6!, o total que valeria se todas as letras fossem diferentes. Já 120 divide apenas por 3!, esquecendo as duas letras N. Cada grupo de letras repetidas precisa entrar no denominador com seu próprio fatorial.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Em uma urna há 20 bolas numeradas de 1 a 20, todas idênticas exceto pelo número. Retirando-se uma bola ao acaso, a probabilidade de o número obtido ser múltiplo de 3 é:",
    opcoes: ["1/3", "6/10", "3/10", "1/5", "1/10"],
    correta: 2,
    explicacao:
      "Os múltiplos de 3 entre 1 e 20 são 3, 6, 9, 12, 15 e 18 — seis números. A probabilidade é 6/20 = 3/10 = 30%. A alternativa 1/3 vem da intuição de que 'um em cada três é múltiplo de 3', o que só valeria se o total fosse divisível por 3; como 20 não é, a fração exata fica um pouco abaixo. Contar os favoráveis é mais seguro que estimar.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Em uma reunião com 8 pessoas, cada participante cumprimenta todos os demais com um único aperto de mão. O número total de apertos de mão ocorridos é:",
    opcoes: ["28", "56", "64", "16", "36"],
    correta: 0,
    explicacao:
      "Cada aperto envolve um par de pessoas, e o par não depende da ordem: C(8,2) = (8 · 7)/2 = 28. A alternativa 56 é o produto 8 · 7 sem dividir por 2, contando cada aperto duas vezes — uma da perspectiva de cada pessoa. Já 64 é 8², que permitiria alguém cumprimentar a si mesmo.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Utilizando os algarismos 1, 2, 3 e 4, com repetição permitida, deseja-se formar números pares de dois algarismos. A quantidade de números que atendem a essa condição é:",
    opcoes: ["16", "4", "8", "12", "6"],
    correta: 2,
    explicacao:
      "A restrição está na unidade, que precisa ser par: só 2 ou 4 servem, dando 2 opções. A dezena aceita qualquer um dos 4 algarismos. Logo 4 · 2 = 8 números. A alternativa 16 é 4², o total de números de dois algarismos sem a exigência de serem pares. A regra prática é começar sempre pela posição mais restrita.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "facil",
    enunciado:
      "Um dado honesto de seis faces é lançado uma vez. A probabilidade de que o resultado obtido não seja a face 6 é:",
    opcoes: ["1/6", "1/2", "2/3", "5/6", "1/3"],
    correta: 3,
    explicacao:
      "Há 5 faces favoráveis entre as 6 possíveis: 5/6 ≈ 83%. O mesmo sai pelo complementar: 1 − 1/6 = 5/6. A alternativa 1/6 responde à pergunta oposta, a de sair exatamente a face 6. Sempre que o enunciado traz 'não', o caminho do complementar costuma ser o mais curto e o menos sujeito a erro de contagem.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "media",
    enunciado:
      "Uma pizzaria oferece 6 sabores diferentes de recheio e permite montar uma pizza com exatamente 4 sabores, sem repetir nenhum deles. O número de pizzas diferentes que podem ser montadas é:",
    opcoes: ["30", "15", "20", "24", "360"],
    correta: 1,
    explicacao:
      "A ordem dos sabores na pizza não muda o produto final, então é combinação: C(6,4) = (6 · 5 · 4 · 3)/(4 · 3 · 2 · 1) = 360/24 = 15. A alternativa 360 é o arranjo A(6,4), que contaria a mesma pizza várias vezes. Vale notar que C(6,4) = C(6,2) = 15: escolher 4 sabores que entram equivale a escolher os 2 que ficam de fora.",
  },
  {
    materia: "matematica",
    tema: "Análise combinatória e probabilidade",
    dificuldade: "dificil",
    enunciado:
      "Um comitê deve ser formado por 2 homens e 2 mulheres, escolhidos entre 4 homens e 5 mulheres disponíveis, sem distinção de funções dentro do comitê. O número de comitês diferentes que podem ser formados é:",
    opcoes: ["20", "90", "36", "45", "60"],
    correta: 4,
    explicacao:
      "Escolhem-se os homens e as mulheres separadamente e depois multiplicam-se os resultados: C(4,2) · C(5,2) = 6 · 10 = 60. A alternativa 20 corresponde a C(9,4) mal calculado ou à soma 6 + 10 mais algum ajuste — somar seria o erro conceitual, porque o comitê precisa de homens e mulheres ao mesmo tempo, não de um ou de outro. Restrições por categoria sempre pedem contagem separada seguida de multiplicação.",
  },
];
