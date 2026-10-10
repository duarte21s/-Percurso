/* Planilhas: fórmulas e funções (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 40 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__planilhas-formulas-e-funcoes.mjs);
   9 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__planilhas-formulas-e-funcoes.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Em uma planilha eletrônica, qual sinal, digitado no início do conteúdo de uma célula, indica que ele é uma fórmula?",
    opcoes: [
      "Cifrão ($)",
      "Sinal de igual (=)",
      "Arroba (@)",
      "Sustenido (#)",
      "E comercial (&)",
    ],
    correta: 1,
    explicacao:
      "O sinal de igual (=) no início do conteúdo indica ao Excel e ao Calc que o que vem a seguir é uma fórmula, e não um texto ou número digitado. Sem ele, a planilha trata o conteúdo como um simples texto.\n\nO cifrão ($) é usado nas referências absolutas, como $A$1. O arroba (@) aparece em algumas funções modernas e em endereços de e-mail. O sustenido (#) inicia as mensagens de erro, como #DIV/0!. E o E comercial (&) é o operador que junta textos dentro de uma fórmula.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Nas fórmulas de uma planilha, qual símbolo representa o operador de multiplicação?",
    opcoes: [
      "Letra x",
      "Barra (/)",
      "Circunflexo (^)",
      "Cifrão ($)",
      "Asterisco (*)",
    ],
    correta: 4,
    explicacao:
      "O asterisco (*) é o operador de multiplicação das planilhas: =A1*B1 multiplica os valores das duas células. A letra x não funciona como operador, e a planilha a entenderia como parte de um nome.\n\nA barra (/) divide. O circunflexo (^) eleva um número a uma potência, como em =2^3, que dá 8. E o cifrão ($) não é operador aritmético: serve para travar a coluna ou a linha de uma referência.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Qual função do Excel em português soma os valores de um intervalo de células?",
    opcoes: [
      "SOMA",
      "MÉDIA",
      "MÁXIMO",
      "CONT.NÚM",
      "SE",
    ],
    correta: 0,
    explicacao:
      "A função SOMA adiciona os números de um intervalo ou de várias células. Em =SOMA(A1:A10), o Excel soma todos os valores numéricos de A1 a A10 e ignora textos e células vazias.\n\nA função MÉDIA calcula a média aritmética. A função MÁXIMO devolve o maior valor do intervalo. A CONT.NÚM conta quantas células têm números, sem somá-los. E a função SE faz um teste lógico e devolve um resultado para verdadeiro e outro para falso.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Em uma planilha, a célula A1 contém 5 e a célula B1 contém 7. Qual é o resultado da fórmula =A1+B1, digitada em C1?",
    opcoes: [
      "12",
      "57",
      "2",
      "35",
      "75",
    ],
    correta: 0,
    explicacao:
      "O operador + soma os valores das células referenciadas: 5 + 7 = 12. Como as duas células contêm números, a planilha faz a soma aritmética, e não junta os algarismos.\n\n57 e 75 juntariam os dois números, como faz o operador de texto &, que não aparece na fórmula. 2 é a diferença 7 − 5, e 35 é o produto 5 × 7. A fórmula usa o sinal +, que soma os valores das duas células.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Uma planilha tem 6 na célula A1 e 4 na célula B1. Qual é o valor exibido por =A1*B1?",
    opcoes: [
      "10",
      "64",
      "24",
      "2",
      "46",
    ],
    correta: 2,
    explicacao:
      "O asterisco multiplica os valores das células: 6 × 4 = 24. A fórmula usa os valores contidos nas células referenciadas, e não os endereços A1 e B1.\n\n10 seria a soma 6 + 4, e não o produto. 64 e 46 juntariam os algarismos, como se os números fossem textos. E 2 seria a diferença entre os dois valores, 6 − 4. Como o operador da fórmula é o asterisco, o resultado correto é o produto, 24.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "As células A1, A2, A3 e A4 de uma planilha contêm 12, 7, 31 e 18. Qual é o resultado de =MÁXIMO(A1:A4)?",
    opcoes: [
      "7",
      "31",
      "68",
      "17",
      "18",
    ],
    correta: 1,
    explicacao:
      "A função MÁXIMO examina todos os valores do intervalo A1:A4 e devolve o maior deles. Entre 12, 7, 31 e 18, o maior é 31.\n\n7 é o menor valor, e seria o resultado de MÍNIMO. 68 é a soma dos quatro valores, calculada pela função SOMA. 17 é a média aritmética, 68 ÷ 4, calculada pela função MÉDIA. E 18 é o último valor do intervalo, que não é o maior.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Uma planilha guarda os valores 12, 7, 31 e 18 nas células A1 a A4. Qual é o número exibido por =MÍNIMO(A1:A4)?",
    opcoes: [
      "7",
      "31",
      "68",
      "17",
      "12",
    ],
    correta: 0,
    explicacao:
      "A função MÍNIMO examina os valores do intervalo A1:A4 e devolve o menor deles. Entre 12, 7, 31 e 18, o menor é 7.\n\n31 é o maior valor, e seria o resultado de MÁXIMO. 68 é a soma dos quatro números. 17 é a média aritmética, 68 ÷ 4. E 12 é o primeiro valor do intervalo, que não é o menor. A ordem em que os números aparecem não define o resultado de MÍNIMO.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "As células B1, B2 e B3 contêm os valores 6, 9 e 12. Qual é o resultado de =MÉDIA(B1:B3)?",
    opcoes: [
      "27",
      "9",
      "12",
      "6",
      "3",
    ],
    correta: 1,
    explicacao:
      "A função MÉDIA soma os valores e divide pela quantidade deles: (6 + 9 + 12) ÷ 3 = 27 ÷ 3 = 9. Como os valores formam uma sequência com diferença constante, a média coincide com o valor do meio.\n\n27 é a soma, sem dividir por 3. 12 é o maior valor, e 6 é o menor, que não representam a média. E 3 é a quantidade de valores, e não a média deles.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Em uma planilha, qual é o endereço da célula que está na coluna C e na linha 4?",
    opcoes: [
      "4C",
      "C:4",
      "C-4",
      "4:C",
      "C4",
    ],
    correta: 4,
    explicacao:
      "O endereço de uma célula é formado pela letra da coluna seguida do número da linha, sem espaços ou símbolos: a coluna C com a linha 4 resulta em C4. Essa é a referência usada nas fórmulas, como em =C4*2.\n\nA forma 4C inverte a ordem e não é reconhecida. C:4 lembra um intervalo, que usa dois endereços separados por dois-pontos, como C1:C4. E C-4 e 4:C não são formas válidas de referência a uma célula.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "O que a função HOJE faz, quando usada em uma célula da planilha?",
    opcoes: [
      "Mostra a hora atual",
      "Mostra o dia da semana em texto",
      "Soma os dias de um intervalo",
      "Mostra a data atual",
      "Conta os dias do ano",
    ],
    correta: 3,
    explicacao:
      "A função HOJE, escrita como =HOJE(), devolve a data atual do computador e a atualiza sempre que a planilha é aberta ou recalculada. Não recebe argumentos, mas os parênteses são obrigatórios.\n\nA hora atual é mostrada pela função AGORA, que traz data e hora. O dia da semana em texto exige outra função, como TEXTO, ou um formato de célula. A soma de dias e a contagem dos dias do ano exigem outras fórmulas, que não são o papel da função HOJE.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "No Excel em português, qual caractere separa os argumentos de uma função, como em =SOMA(A1;B1)?",
    opcoes: [
      "Vírgula (,)",
      "Dois-pontos (:)",
      "Barra (/)",
      "Ponto e vírgula (;)",
      "Ponto (.)",
    ],
    correta: 3,
    explicacao:
      "No Excel configurado em português do Brasil, os argumentos de uma função são separados por ponto e vírgula (;), porque a vírgula é o separador decimal. Por isso se escreve =SE(A1>5;\"sim\";\"não\"), e não com vírgulas.\n\nA vírgula, nesse idioma, separa a parte decimal, como em 2,5. Os dois-pontos indicam um intervalo, como A1:A5. A barra é o operador de divisão. E o ponto, em várias configurações, separa os milhares. Em inglês, o separador de argumentos é a vírgula.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Em uma planilha, as células A1, A2, A3 e A4 contêm 10, 20, 30 e 40. Qual é o resultado da fórmula =SOMA(A1:A4)?",
    opcoes: [
      "25",
      "40",
      "100",
      "10",
      "1.020",
    ],
    correta: 2,
    explicacao:
      "O intervalo A1:A4 abrange as quatro células, e SOMA adiciona os valores: 10 + 20 + 30 + 40 = 100.\n\n25 é a média dos valores, calculada por MÉDIA, e não a soma. 40 é o maior valor, calculado por MÁXIMO, e 10 é o menor, calculado por MÍNIMO. E 1.020 resulta de juntar textos, como se os valores 10 e 20 fossem colados, e a função SOMA só adiciona valores numéricos.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Os valores 4, 8, 6, 10 e 2 estão nas células B1 a B5. Qual é o resultado de =MÉDIA(B1:B5)?",
    opcoes: [
      "30",
      "5",
      "6",
      "8",
      "10",
    ],
    correta: 2,
    explicacao:
      "A soma dos valores é 4 + 8 + 6 + 10 + 2 = 30, e a média divide esse total pela quantidade de valores: 30 ÷ 5 = 6.\n\n30 é apenas a soma, sem a divisão. 5 é a quantidade de valores, e não a média. 8 é o segundo valor da lista, e 10 é o maior, sem relação com a média aritmética. A função MÉDIA leva em conta todos os números do intervalo. Por levar em conta todos os valores do intervalo, a média muda sempre que qualquer um deles muda, o que a diferencia do máximo e do mínimo, que dependem só dos extremos.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "As células A1 a A5 guardam 15, 42, 8, 27 e 33. Qual é o resultado de =MÁXIMO(A1:A5)-MÍNIMO(A1:A5), isto é, a amplitude dos valores?",
    opcoes: [
      "34",
      "50",
      "25",
      "8",
      "42",
    ],
    correta: 0,
    explicacao:
      "A fórmula subtrai o menor valor do maior. Em 15, 42, 8, 27 e 33, o máximo é 42 e o mínimo é 8, então a amplitude é 42 − 8 = 34.\n\n50 é a soma do maior com o menor, 42 + 8, e não a diferença. 25 é a média dos cinco valores. 8 é só o valor mínimo, e 42 é só o máximo. A fórmula combina as duas funções com o operador de subtração, e o resultado é a diferença entre os extremos.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "A célula A1 contém a nota 58. Qual é o resultado de =SE(A1>=60;\"Aprovado\";\"Reprovado\")?",
    opcoes: [
      "Aprovado",
      "58",
      "Reprovado",
      "60",
      "VERDADEIRO",
    ],
    correta: 2,
    explicacao:
      "A função SE testa a condição A1>=60. Como 58 não é maior nem igual a 60, o teste é falso, e a função devolve o terceiro argumento, \"Reprovado\".\n\n\"Aprovado\" seria o resultado se a nota fosse 60 ou mais. 58 e 60 são valores de entrada, e não o resultado da função. E VERDADEIRO é o resultado do teste lógico isolado, mas o SE não o devolve: ele devolve o texto escolhido para o caso verdadeiro ou falso.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Em A1:A6 estão: 10, o texto \"Ana\", uma célula vazia, 7, 3 e o texto \"x\". Qual é o resultado de =CONT.VALORES(A1:A6)?",
    opcoes: [
      "3",
      "6",
      "4",
      "20",
      "5",
    ],
    correta: 4,
    explicacao:
      "A função CONT.VALORES conta as células que têm algum conteúdo, seja número ou texto, e ignora só as vazias. Aqui há 5 células preenchidas: 10, \"Ana\", 7, 3 e \"x\".\n\n3 é o resultado de CONT.NÚM, que conta apenas os números: 10, 7 e 3. 6 contaria também a célula vazia, o que a função não faz. 4 não corresponde a nenhuma das duas contagens. E 20 é a soma dos números, calculada pela função SOMA.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Em A1:A6 estão: 10, o texto \"Ana\", uma célula vazia, 7, 3 e o texto \"x\". Quantas dessas células são numéricas, segundo =CONT.NÚM(A1:A6), que conta só números?",
    opcoes: [
      "5",
      "6",
      "2",
      "20",
      "3",
    ],
    correta: 4,
    explicacao:
      "A função CONT.NÚM conta apenas as células que contêm números. No intervalo, só 10, 7 e 3 são numéricos, então o resultado é 3. Textos e células vazias não entram na contagem.\n\n5 é o resultado de CONT.VALORES, que conta qualquer conteúdo, inclusive textos. 6 é o total de células do intervalo, inclusive a vazia. 2 corresponde só aos textos. E 20 é a soma dos números, e não a quantidade deles.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Os valores 3, 8, 5, 9, 12, 5, 6 e 1 estão nas células B1 a B8. Qual é o resultado de =CONT.SE(B1:B8;\">5\")?",
    opcoes: [
      "4",
      "6",
      "2",
      "8",
      "12",
    ],
    correta: 0,
    explicacao:
      "A função CONT.SE conta as células do intervalo que atendem ao critério. Com \">5\", contam-se só os valores estritamente maiores que 5: 8, 9, 12 e 6, ou seja, 4 células.\n\n6 é o resultado de um critério \">=5\", que inclui os dois valores iguais a 5. 2 é a quantidade de valores iguais a 5, e não a dos maiores que 5. 8 é o total de células do intervalo, que a função contaria se não houvesse critério. E 12 é o maior valor do intervalo, e não uma contagem.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "A1:A6 contêm os produtos Maçã, Pera, Maçã, Uva, Pera e Maçã, e B1:B6 contêm as quantidades 4, 6, 3, 8, 2 e 5. Qual é o resultado de =SOMASE(A1:A6;\"Maçã\";B1:B6)?",
    opcoes: [
      "3",
      "28",
      "8",
      "9",
      "12",
    ],
    correta: 4,
    explicacao:
      "A função SOMASE soma os valores de B correspondentes às linhas em que A é igual a \"Maçã\": nas linhas 1, 3 e 6, as quantidades são 4, 3 e 5, e a soma é 12.\n\n3 é a quantidade de vezes em que a palavra aparece, resultado de CONT.SE. 28 é a soma de todas as quantidades, sem filtro. 8 é a quantidade da Uva. E 9 é a soma 4 + 5, que deixa de fora a linha 3. O critério filtra as linhas, e a soma é feita sobre o intervalo de soma.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Qual é o resultado de =ARRED(3,14159;2), em uma planilha em português?",
    opcoes: [
      "3,1",
      "3,14",
      "3,15",
      "3,142",
      "3",
    ],
    correta: 1,
    explicacao:
      "A função ARRED arredonda o número para a quantidade de casas indicada no segundo argumento. Com 2 casas, 3,14159 fica 3,14, pois a terceira casa, 1, é menor que 5 e não muda a segunda.\n\n3,1 usaria apenas uma casa. 3,15 arredondaria para cima sem motivo. 3,142 usaria três casas. E 3 usaria zero casas, que dá o inteiro mais próximo. Em cada caso, o número de casas pedido no segundo argumento é o que define o resultado.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Qual é o resultado da fórmula =MOD(17;5), que devolve o resto da divisão do primeiro número pelo segundo?",
    opcoes: [
      "3",
      "3,4",
      "12",
      "2",
      "22",
    ],
    correta: 3,
    explicacao:
      "A função MOD devolve o resto da divisão inteira: 17 dividido por 5 dá quociente 3 e resto 2, pois 5 × 3 = 15 e 17 − 15 = 2.\n\n3 é o quociente da divisão, e não o resto. 3,4 é o resultado da divisão decimal, 17 ÷ 5. 12 é a diferença 17 − 5, e 22 é a soma 17 + 5. Só o 2 é o que sobra da divisão inteira, e é essa a informação que a função MOD entrega.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Qual é o resultado da fórmula =2+3*4^2, calculada pela ordem de precedência das planilhas?",
    opcoes: [
      "80",
      "400",
      "26",
      "14",
      "50",
    ],
    correta: 4,
    explicacao:
      "A planilha calcula primeiro a potenciação, 4^2 = 16, depois a multiplicação, 3 × 16 = 48, e por fim a soma, 2 + 48 = 50.\n\n80 resulta de somar antes, (2+3) × 4^2, o que exigiria parênteses. 400 faz as contas da esquerda para a direita, ((2+3)×4)^2, ignorando a precedência. 26 trata 4^2 como 4×2, e calcula 2 + 3 × 8. E 14 calcula 2+3×4 e ignora a potência. A ordem é potência, produto e depois soma.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Qual é o resultado da fórmula =(2+3)*4^2, em que a soma está entre parênteses?",
    opcoes: [
      "50",
      "400",
      "26",
      "80",
      "40",
    ],
    correta: 3,
    explicacao:
      "Os parênteses forçam a soma a ser feita primeiro: 2 + 3 = 5. Depois vem a potência, 4^2 = 16, e por fim a multiplicação, 5 × 16 = 80.\n\n50 é o resultado da fórmula sem parênteses, =2+3*4^2. 400 eleva 5 × 4 ao quadrado, o que não corresponde à ordem das operações. 26 calcula só 2 + 3 × 4 sem a potência. E 40 multiplica 5 por 8, como se 4^2 valesse 8, o que é um erro comum entre a potência e a multiplicação por 2.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "As células A1 e A2 contêm o número 5. Qual é o resultado da fórmula =10/(A1-A2)?",
    opcoes: [
      "#VALOR!",
      "#REF!",
      "#NOME?",
      "#DIV/0!",
      "0",
    ],
    correta: 3,
    explicacao:
      "A subtração A1−A2 dá 5 − 5 = 0, e a fórmula tenta dividir 10 por zero. A divisão por zero não tem resultado, e a planilha mostra o erro #DIV/0!.\n\n#VALOR! aparece quando um operador recebe um tipo de dado inadequado, como texto numa soma. #REF! aparece quando a referência é inválida, por exemplo, depois de excluir células. #NOME? aparece quando a função ou o nome não é reconhecido. E 0 seria o resultado de 0 dividido por um número, e não de uma divisão por zero.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "A célula A1 contém o texto Ana e a B1 contém o texto Silva. Qual é o resultado de =A1&\" \"&B1?",
    opcoes: [
      "AnaSilva",
      "Ana & Silva",
      "Silva Ana",
      "#VALOR!",
      "Ana Silva",
    ],
    correta: 4,
    explicacao:
      "O operador & concatena textos, isto é, junta um após o outro. A fórmula junta o conteúdo de A1, um espaço entre aspas e o conteúdo de B1, resultando em \"Ana Silva\".\n\n\"AnaSilva\" sairia sem o espaço intermediário. \"Ana & Silva\" mostraria o símbolo como se fosse texto, o que não acontece. \"Silva Ana\" inverteria a ordem das células. E #VALOR! apareceria se o operador de soma fosse usado com textos, e não o de concatenação.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "A célula A1 contém 250. Qual é o resultado de =A1*10%, em que 10% é digitado na própria fórmula?",
    opcoes: [
      "25",
      "2.500",
      "250",
      "260",
      "2,5",
    ],
    correta: 0,
    explicacao:
      "O símbolo % na fórmula divide o número por 100: 10% vale 0,1. Assim, 250 × 0,1 = 25, que é 10% de 250.\n\n2.500 multiplicaria por 10, sem tratar o símbolo como percentual. 250 é o valor original, que não muda. 260 somaria 10 ao valor, e não 10% dele. E 2,5 seria 1% de 250, por deslocar a vírgula mais uma casa. Esse recurso evita ter de digitar 0,1 e deixa a fórmula mais fácil de ler, pois o percentual aparece do jeito que se costuma escrever. O mesmo vale para outros percentuais, como 5% ou 25%, que valem 0,05 e 0,25.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "As células A1 a A5 contêm 8, o texto \"n/d\", uma célula vazia, 12 e 10. Qual é o resultado de =MÉDIA(A1:A5)?",
    opcoes: [
      "10",
      "6",
      "7,5",
      "12",
      "30",
    ],
    correta: 0,
    explicacao:
      "A função MÉDIA ignora textos e células vazias dentro de um intervalo. Só 8, 12 e 10 entram na conta, e a média é (8 + 12 + 10) ÷ 3 = 30 ÷ 3 = 10.\n\n6 dividiria o total pelas 5 células do intervalo, como se o texto e a célula vazia valessem zero, o que não acontece: 30 ÷ 5 = 6. 7,5 dividiria o total por 4, contando o texto n/d como valor, mas a média não conta textos. 12 é o maior deles. E 30 é a soma, sem a divisão.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "As células A1 a A3 contêm 4, 5 e 6, e as células C1 a C3 contêm 10, 20 e 30. Qual é o resultado de =SOMA(A1:A3;C1:C3)?",
    opcoes: [
      "15",
      "60",
      "45",
      "75",
      "120",
    ],
    correta: 3,
    explicacao:
      "A função SOMA aceita vários argumentos, e cada um pode ser um intervalo. Os dois intervalos somam 4 + 5 + 6 = 15 e 10 + 20 + 30 = 60, e o total é 15 + 60 = 75.\n\n15 é só a soma do primeiro intervalo, e 60, só a do segundo. 45 é o produto 15 × 3, sem relação com as contas. E 120 dobraria o total do segundo intervalo, 2 × 60, o que não corresponde à função. Os argumentos separados por ponto e vírgula são todos somados.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "As células A1 a A5 contêm 9, 3, 7, 1 e 5. Qual é o resultado de =MED(A1:A5), que calcula a mediana?",
    opcoes: [
      "25",
      "7",
      "5",
      "1",
      "4,5",
    ],
    correta: 2,
    explicacao:
      "A mediana é o valor central dos números ordenados. Em ordem crescente, 1, 3, 5, 7, 9, o valor do meio é 5. Como a quantidade de números é ímpar, a mediana é o elemento central, sem precisar de média entre dois valores.\n\n25 é a soma dos cinco valores. 7 é o quarto valor na ordem crescente, e 1 é o menor. E 4,5 seria a mediana de uma lista com quantidade par de valores, em que se faz a média dos dois centrais.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "A célula A1 contém 8 e B1 contém 12. Qual é o resultado de =SE(E(A1>5;B1<10);\"Sim\";\"Não\")?",
    opcoes: [
      "Sim",
      "Não",
      "VERDADEIRO",
      "FALSO",
      "#VALOR!",
    ],
    correta: 1,
    explicacao:
      "A função E só é verdadeira se todos os testes forem verdadeiros. O primeiro, 8>5, é verdadeiro, mas o segundo, 12<10, é falso. Logo, E devolve FALSO, e o SE responde com o terceiro argumento, \"Não\".\n\n\"Sim\" exigiria os dois testes verdadeiros. VERDADEIRO e FALSO são valores lógicos, que o SE não devolve, pois devolve o texto escolhido. E #VALOR! não aparece, pois os testes são válidos e comparam números.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Com 8 em A1 e 12 em B1, o que a planilha exibe ao calcular =SE(OU(A1>10;B1>10);\"Sim\";\"Não\")?",
    opcoes: [
      "Não",
      "Sim",
      "VERDADEIRO",
      "FALSO",
      "#NOME?",
    ],
    correta: 1,
    explicacao:
      "A função OU é verdadeira quando pelo menos um dos testes é verdadeiro. O primeiro, 8>10, é falso, mas o segundo, 12>10, é verdadeiro. Logo, OU devolve VERDADEIRO, e o SE responde com o segundo argumento, \"Sim\".\n\n\"Não\" só apareceria se os dois testes fossem falsos. VERDADEIRO e FALSO são valores lógicos intermediários, que o SE não devolve. E #NOME? aparece só quando um nome de função não é reconhecido, o que não ocorre aqui.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "A1:C3 contêm: linha 1 = 101, \"Lápis\", 2; linha 2 = 102, \"Caneta\", 3; linha 3 = 103, \"Caderno\", 15. Qual é o resultado de =PROCV(102;A1:C3;2;FALSO)?",
    opcoes: [
      "Lápis",
      "Caneta",
      "Caderno",
      "3",
      "102",
    ],
    correta: 1,
    explicacao:
      "A função PROCV procura o valor 102 na primeira coluna do intervalo e devolve o conteúdo da coluna indicada pelo terceiro argumento, que é a segunda. O código 102 está na linha 2, e a coluna 2 dessa linha contém \"Caneta\". O quarto argumento, FALSO, pede a correspondência exata.\n\n\"Lápis\" e \"Caderno\" são de outras linhas. 3 é o valor da coluna 3, que seria devolvido se o terceiro argumento fosse 3. E 102 é o valor procurado, e não o valor devolvido.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Qual é o resultado de =DIREITA(\"PLANILHA\";4), função que devolve os últimos caracteres de um texto?",
    opcoes: [
      "PLAN",
      "LHA",
      "ILHA",
      "NILH",
      "4",
    ],
    correta: 2,
    explicacao:
      "A função DIREITA devolve a quantidade indicada de caracteres a partir do fim do texto. Em PLANILHA, os quatro últimos são I, L, H e A, isto é, \"ILHA\". A palavra PLANILHA tem 8 letras: P, L, A, N, I, L, H, A.\n\n\"PLAN\" seriam os quatro primeiros, devolvidos por ESQUERDA. \"LHA\" tem só três caracteres. \"NILH\" pega quatro letras do meio, sem chegar ao fim. E 4 é o número de caracteres pedido, e não o texto devolvido.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Qual é o resultado de =POTÊNCIA(2;10), função que eleva o primeiro número ao segundo?",
    opcoes: [
      "20",
      "512",
      "100",
      "1.024",
      "2.048",
    ],
    correta: 3,
    explicacao:
      "A função POTÊNCIA eleva a base ao expoente: 2 elevado a 10 é 2 × 2 × ... dez vezes, isto é, 1.024. Equivale a escrever =2^10, com o operador circunflexo.\n\n20 é o produto 2 × 10, e 512 é 2 elevado a 9. 100 é 10 elevado a 2, com os argumentos trocados. E 2.048 é 2 elevado a 11. Só 1.024 corresponde à potência de 2 com expoente 10. A função RAIZ se relaciona com a potência: RAIZ(81) devolve 9, o mesmo resultado de POTÊNCIA(81;0,5), porque elevar a 0,5 equivale a extrair a raiz quadrada.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "As células A1 a A5 contêm 14, 9, 21, 6 e 17. Qual é o resultado de =MAIOR(A1:A5;2), que devolve o segundo maior valor?",
    opcoes: [
      "21",
      "14",
      "9",
      "6",
      "17",
    ],
    correta: 4,
    explicacao:
      "A função MAIOR ordena os valores do maior para o menor e devolve o de posição indicada. Em ordem decrescente, 21, 17, 14, 9 e 6, o segundo é 17.\n\n21 é o maior valor, que seria devolvido com o segundo argumento igual a 1. 14 é o terceiro maior, 9 o quarto e 6 o quinto. A função não considera a ordem em que os números aparecem nas células, e sim o tamanho deles.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Se A1 tem o texto abc e B1 tem o número 5, que valor a planilha mostra para =A1+B1?",
    opcoes: [
      "#DIV/0!",
      "#VALOR!",
      "#REF!",
      "#NOME?",
      "5",
    ],
    correta: 1,
    explicacao:
      "O operador + exige números, e o texto \"abc\" não pode ser convertido em número. A planilha mostra o erro #VALOR!, que indica um tipo de valor inadequado para a operação.\n\n#DIV/0! aparece na divisão por zero. #REF! aparece quando uma referência deixa de existir. #NOME? aparece quando um nome de função ou de intervalo não é reconhecido. E o resultado 5 só apareceria se o texto fosse tratado como vazio, o que não acontece com o operador de soma.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Em qual situação o Excel costuma mostrar o erro #NOME? em uma célula?",
    opcoes: [
      "Quando se divide um número por zero",
      "Quando a coluna é estreita demais",
      "Quando o nome de uma função é escrito errado",
      "Quando o arquivo é salvo em PDF",
      "Quando o resultado é negativo",
    ],
    correta: 2,
    explicacao:
      "O erro #NOME? indica que o Excel não reconheceu um nome usado na fórmula, como uma função escrita de forma errada, por exemplo =SOMAA(A1:A5), ou um nome de intervalo que não existe.\n\nA divisão por zero gera #DIV/0!. Uma coluna estreita demais para o número gera ####, e não é um erro de fórmula. Salvar em PDF não gera erro. E resultado negativo é um valor normal, sem mensagem de erro.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Uma fórmula na célula B1 faz referência à própria célula B1, como =B1+1. Como isso é chamado?",
    opcoes: [
      "Referência mista",
      "Referência circular",
      "Referência externa",
      "Referência cruzada",
      "Referência relativa",
    ],
    correta: 1,
    explicacao:
      "Quando uma fórmula depende do próprio resultado, por referência direta ou indireta, forma-se uma referência circular. O Excel avisa sobre o problema, e o cálculo não tem valor estável, pois cada recálculo exigiria um resultado que ainda não existe.\n\nA referência mista trava só a coluna ou a linha, como $A1. A externa aponta para outra pasta de trabalho. A cruzada é um termo de documentos de texto. E a relativa é a referência sem cifrões, que muda ao copiar a fórmula, o que não é o caso descrito.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "media",
    enunciado:
      "Em uma célula com a fórmula =A1*2, o que o Excel mostra na célula e o que mostra na barra de fórmulas?",
    opcoes: [
      "A fórmula na célula e o resultado na barra",
      "A fórmula nos dois lugares",
      "O resultado nos dois lugares",
      "O resultado na célula e a fórmula na barra",
      "Só o endereço A1 na célula",
    ],
    correta: 3,
    explicacao:
      "Por padrão, a célula exibe o resultado do cálculo, e a barra de fórmulas mostra o conteúdo real, isto é, a fórmula, quando a célula é selecionada. Para ver as fórmulas na própria célula, é preciso ativar a opção Mostrar Fórmulas.\n\nA inversão, a fórmula na célula e o resultado na barra, não é o comportamento padrão. Mostrar a fórmula nos dois lugares ou só o resultado também não corresponde ao padrão. E o endereço A1 é apenas uma referência usada dentro da fórmula, e não o que a célula exibe.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "A célula A1 contém 65. Qual é o resultado de =SE(A1>=70;\"A\";SE(A1>=50;\"B\";\"C\"))?",
    opcoes: [
      "A",
      "C",
      "65",
      "B",
      "VERDADEIRO",
    ],
    correta: 3,
    explicacao:
      "Funciona como uma escada de testes. O primeiro, A1>=70, é falso para 65, então o Excel vai ao terceiro argumento, que é outro SE. Nele, A1>=50 é verdadeiro, e a função devolve \"B\".\n\n\"A\" exigiria nota de 70 ou mais. \"C\" só apareceria abaixo de 50. 65 é o valor de entrada, e não o resultado. E VERDADEIRO é o valor de um teste lógico isolado, e o SE devolve o texto escolhido.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "No Excel, qual é o resultado de =INT(-7,8), função que arredonda para o inteiro imediatamente inferior?",
    opcoes: [
      "-7",
      "7",
      "-8",
      "8",
      "-7,8",
    ],
    correta: 2,
    explicacao:
      "A função INT arredonda para o inteiro imediatamente menor, isto é, na direção do menos infinito. Para −7,8, o inteiro imediatamente inferior é −8, pois −8 é menor que −7,8.\n\n−7 seria o resultado de TRUNCAR, que só descarta a parte decimal. 7 e 8 têm o sinal trocado. E −7,8 é o valor original, sem arredondamento. A diferença entre INT e TRUNCAR só aparece nos números negativos.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "Qual é o resultado de =ARRED(1234;-2), em que o número de casas é negativo?",
    opcoes: [
      "1.200",
      "1.230",
      "1.300",
      "1.234",
      "1.000",
    ],
    correta: 0,
    explicacao:
      "Um número de casas negativo arredonda à esquerda da vírgula. Com −2, o arredondamento é para centenas, e 1.234 fica 1.200, pois os dois últimos algarismos, 34, estão abaixo de 50.\n\n1.230 seria o arredondamento para dezenas, com −1. 1.300 arredondaria para cima, o que exigiria 50 ou mais nos dois últimos algarismos. 1.234 é o número original. E 1.000 arredondaria para milhares, com −3.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "Qual é o resultado de =MOD(-7;3), em que o primeiro número é negativo?",
    opcoes: [
      "-1",
      "1",
      "2",
      "-2",
      "0",
    ],
    correta: 2,
    explicacao:
      "No Excel, o resto da função MOD tem o sinal do divisor. Como −7 = 3 × (−3) + 2, o resto é 2, positivo, pois o divisor 3 é positivo. O quociente usado é o inteiro imediatamente inferior, −3.\n\n−1 seria o resto de uma divisão que trunca em direção ao zero, como ocorre em algumas linguagens de programação, já que −7 = 3 × (−2) − 1. 1 e −2 não correspondem a nenhuma das duas regras. E 0 só ocorreria se −7 fosse múltiplo de 3.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "No Excel, qual é o resultado da fórmula =-2^2, em que o sinal de menos vem antes da potência?",
    opcoes: [
      "-4",
      "4",
      "0",
      "-2",
      "2",
    ],
    correta: 1,
    explicacao:
      "No Excel, o operador de negação tem precedência sobre a potência: primeiro −2 é tratado como número negativo, e depois é elevado ao quadrado, (−2)^2 = 4. É uma peculiaridade do Excel, diferente da matemática escrita, em que −2² vale −4.\n\n−4 seria o resultado se a potência fosse calculada antes da negação. 0 e 2 não correspondem a nenhuma ordem de cálculo. E −2 é o número original, sem elevar ao quadrado.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "Notas 6, 8 e 10 estão em A1:A3, com pesos 2, 3 e 5 em B1:B3. Qual é o resultado de =SOMARPRODUTO(A1:A3;B1:B3)/SOMA(B1:B3), que calcula a média ponderada?",
    opcoes: [
      "8,6",
      "8",
      "86",
      "9",
      "7,5",
    ],
    correta: 0,
    explicacao:
      "O SOMARPRODUTO multiplica cada nota pelo respectivo peso e soma: 6 × 2 + 8 × 3 + 10 × 5 = 12 + 24 + 50 = 86. A soma dos pesos é 2 + 3 + 5 = 10, e a média ponderada é 86 ÷ 10 = 8,6.\n\n8 é a média simples, (6 + 8 + 10) ÷ 3. 86 é o numerador, sem a divisão pelos pesos. 9 e 7,5 não correspondem a nenhuma das duas contas. A média ponderada dá mais importância às notas de peso maior, no caso, à nota 10.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "A1:A6 contêm Mala, Mapa, Sapato, Mesa, Livro e Marca. Qual é o resultado de =CONT.SE(A1:A6;\"Ma*\"), em que o asterisco é um curinga?",
    opcoes: [
      "2",
      "4",
      "6",
      "3",
      "1",
    ],
    correta: 3,
    explicacao:
      "O asterisco substitui qualquer sequência de caracteres, então o critério \"Ma*\" casa com todo texto que começa por \"Ma\": Mala, Mapa e Marca, ou seja, 3 células.\n\nMesa começa por \"Me\", e não por \"Ma\". Sapato contém \"a\", mas não começa por \"Ma\". E Livro não tem relação com o critério. Por isso os resultados 2 e 4 perdem ou acrescentam um item, e 6 e 1 não correspondem à contagem.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "A1:A5 contêm 10, 25, 30, 5 e 40, e B1:B5 contêm 1, 2, 3, 4 e 5. Qual é o resultado de =SOMASE(A1:A5;\">20\";B1:B5)?",
    opcoes: [
      "95",
      "15",
      "6",
      "3",
      "10",
    ],
    correta: 4,
    explicacao:
      "O critério \">20\" é aplicado ao intervalo A, e a soma é feita sobre B. Os valores de A maiores que 20 estão nas linhas 2, 3 e 5, que valem 25, 30 e 40, e os valores de B nessas linhas são 2, 3 e 5, cuja soma é 10.\n\n95 é a soma dos valores de A que atendem ao critério, o que ocorreria se o intervalo de soma fosse omitido. 15 é a soma de todos os valores de B. 6 soma só dois deles, 1 + 5, e 3 é a quantidade de linhas que atendem ao critério.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "A célula A1 contém 0. Qual é o resultado de =SEERRO(10/A1;\"sem dado\")?",
    opcoes: [
      "sem dado",
      "#DIV/0!",
      "0",
      "10",
      "VERDADEIRO",
    ],
    correta: 0,
    explicacao:
      "A função SEERRO testa o primeiro argumento. Se ele resultar em erro, devolve o segundo. Como 10/0 gera #DIV/0!, a função devolve o texto \"sem dado\", e o erro não aparece na célula.\n\n#DIV/0! seria o resultado se a fórmula não estivesse dentro do SEERRO. 0 e 10 são o divisor e o dividendo, e nenhum deles é o resultado. E VERDADEIRO é um valor lógico, que a função SEERRO não devolve.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "dificil",
    enunciado:
      "A1:B4 contêm a tabela de faixas: 0 → \"D\", 50 → \"C\", 70 → \"B\", 90 → \"A\", em ordem crescente. Qual é o resultado de =PROCV(75;A1:B4;2;VERDADEIRO)?",
    opcoes: [
      "C",
      "A",
      "B",
      "D",
      "#N/D",
    ],
    correta: 2,
    explicacao:
      "Com o último argumento VERDADEIRO, o PROCV faz a correspondência aproximada: procura o maior valor da primeira coluna que seja menor ou igual a 75, e, por isso, a coluna precisa estar em ordem crescente. O maior valor até 75 é 70, e o resultado é \"B\".\n\n\"C\" corresponde ao 50, que é menor, mas não o maior valor até 75. \"A\" exigiria 90 ou mais. \"D\" corresponde à faixa de 0 a 49. E #N/D apareceria com FALSO, pois 75 não está na tabela.",
  },
];
