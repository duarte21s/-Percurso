/* Probabilidade condicional e independência (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__probabilidade-condicional-e-independencia.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__probabilidade-condicional-e-independencia.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Sabe-se que P(A ∩ B) = 0,12 e P(B) = 0,4. Qual é a probabilidade condicional de A dado B?",
    opcoes: [
      "0,3",
      "0,048",
      "0,12",
      "0,52",
      "≈ 3,33",
    ],
    correta: 0,
    explicacao:
      "Pela definição, P(A|B) = P(A ∩ B)/P(B) = 0,12/0,4 = 0,3. A ideia é restringir o espaço amostral a B: entre os casos em que B ocorre, que somam 0,4 de probabilidade, a parte em que A também ocorre vale 0,12, o que corresponde a 30% de B.\n\n0,048 multiplica em vez de dividir. 0,12 é a probabilidade da interseção, sem condicionar. 0,52 soma as duas probabilidades. E 3,33 inverte a divisão, 0,4/0,12, e passa de 1.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Um dado honesto foi lançado, e sabe-se que o resultado é par. Qual é a probabilidade de ter saído 6?",
    opcoes: [
      "1/3",
      "1/6",
      "1/2",
      "2/3",
      "1/4",
    ],
    correta: 0,
    explicacao:
      "Saber que o resultado é par reduz o espaço amostral a {2, 4, 6}, três resultados que continuam igualmente prováveis. Entre eles, só o 6 é favorável, e P(6 | par) = 1/3. Pela fórmula: P(6 e par)/P(par) = (1/6)/(1/2) = 1/3.\n\n1/6 ignora a informação de que o resultado é par. 1/2 é a probabilidade de sair par. 2/3 é a probabilidade de sair 2 ou 4, dado que saiu par. E 1/4 não sai do espaço reduzido, que tem três resultados.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Uma moeda honesta deu coroa nas quatro últimas jogadas. Qual é a probabilidade de dar cara na próxima jogada?",
    opcoes: [
      "Mais que 1/2, para compensar",
      "Menos que 1/2, pela sequência",
      "1/16",
      "1/2",
      "1/32",
    ],
    correta: 3,
    explicacao:
      "As jogadas de uma moeda honesta são independentes: a moeda não tem memória, e o resultado anterior não altera o seguinte. Assim, P(cara na quinta | coroa nas quatro primeiras) = P(cara) = 1/2. Das 32 sequências de cinco jogadas, as que começam com quatro coroas são 2, e só uma termina em cara.\n\nEsperar compensação é a falácia do jogador. Esperar a continuação da sequência também não tem base. 1/16 é a probabilidade de quatro coroas seguidas, e 1/32, a de quatro coroas seguidas de uma cara, calculadas antes das jogadas.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Num sorteio, A e B são eventos independentes, com P(A) = 0,5 e P(B) = 0,4. Qual é a probabilidade de A e B ocorrerem juntos?",
    opcoes: [
      "0,9",
      "0,1",
      "0,7",
      "0,2",
      "0,45",
    ],
    correta: 3,
    explicacao:
      "Para eventos independentes, a probabilidade da interseção é o produto: P(A ∩ B) = P(A) · P(B) = 0,5 · 0,4 = 0,2. Essa é a própria definição de independência: saber que B ocorreu não muda a chance de A, e P(A|B) = P(A) = 0,5.\n\n0,9 soma as probabilidades, o que daria a união de eventos disjuntos. 0,1 é a diferença. 0,7 é a probabilidade da união, 0,5 + 0,4 − 0,2. E 0,45 é a média das duas probabilidades.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Duas lâmpadas de um corredor funcionam de forma independente, cada uma com probabilidade 0,9 de acender. Qual é a probabilidade de as duas acenderem?",
    opcoes: [
      "0,9",
      "1,8",
      "0,99",
      "0,81",
      "0,18",
    ],
    correta: 3,
    explicacao:
      "Com eventos independentes, multiplicam-se as probabilidades: 0,9 · 0,9 = 0,81. Mesmo com lâmpadas confiáveis, a chance de todas funcionarem cai a cada lâmpada acrescentada, porque o produto de números menores que 1 diminui.\n\n0,9 é a probabilidade de uma lâmpada só. 1,8 soma as probabilidades e passa de 1. 0,99 é a probabilidade de pelo menos uma acender, 1 − 0,1 · 0,1. E 0,18 é a probabilidade de exatamente uma acender, 2 · 0,9 · 0,1.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Numa turma, 12 dos 20 meninos e 10 das 25 meninas praticam esporte. Sorteando uma aluna entre as meninas, qual é a probabilidade de ela praticar esporte?",
    opcoes: [
      "2/9",
      "5/11",
      "22/45",
      "3/5",
      "2/5",
    ],
    correta: 4,
    explicacao:
      "A informação de que a sorteada é menina restringe o espaço às 25 meninas, das quais 10 praticam esporte: P(esporte | menina) = 10/25 = 2/5. Na tabela de dupla entrada, a condição escolhe a linha, e o total da linha vira o denominador.\n\n2/9 divide pelo total da turma, 10/45. 5/11 inverte a condição: entre os que praticam esporte, a fração de meninas, 10/22. 22/45 é a proporção de praticantes na turma toda. E 3/5 é a proporção entre os meninos.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Numa cidade, 50% dos adultos dirigem, e 80% dos que dirigem têm seguro do carro. Que porcentagem dos adultos dirige e tem seguro?",
    opcoes: [
      "80%",
      "130%",
      "62,5%",
      "10%",
      "40%",
    ],
    correta: 4,
    explicacao:
      "Os 80% são uma probabilidade condicional: P(seguro | dirige) = 0,8. Pela regra da multiplicação, P(dirige e tem seguro) = P(dirige) · P(seguro | dirige) = 0,5 · 0,8 = 0,4, ou 40% dos adultos.\n\n80% é a porcentagem entre os que dirigem, e não entre todos os adultos. 130% soma as porcentagens e passa de 100%. 62,5% divide 0,5 por 0,8. E 10% é a porcentagem de adultos que dirigem sem seguro, 0,5 · 0,2.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Duas cartas são retiradas, uma após a outra e sem reposição, de um baralho de 52. Qual é a probabilidade de as duas serem ases?",
    opcoes: [
      "1/221",
      "1/169",
      "1/17",
      "2/13",
      "1/13",
    ],
    correta: 0,
    explicacao:
      "Pela regra da multiplicação: P(1º ás) = 4/52 e, dado que saiu um ás, restam 3 ases em 51 cartas: P(2º ás | 1º ás) = 3/51. O produto é (4/52)(3/51) = 12/2.652 = 1/221. Sem reposição, a segunda retirada depende da primeira.\n\n1/169 = (1/13)² supõe reposição, com retiradas independentes. 1/17 é só a condicional da segunda carta, 3/51. 2/13 soma 4/52 + 4/52. E 1/13 é a probabilidade de a primeira carta ser ás.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Se A e B não podem ocorrer ao mesmo tempo, com P(A) = 0,3 e P(B) = 0,4, qual é a probabilidade de A ocorrer, sabendo que B ocorreu?",
    opcoes: [
      "0,3",
      "0",
      "0,12",
      "0,75",
      "1",
    ],
    correta: 1,
    explicacao:
      "Eventos que não podem ocorrer juntos têm A ∩ B = ∅ e P(A ∩ B) = 0. Pela definição, P(A|B) = P(A ∩ B)/P(B) = 0/0,4 = 0: sabendo que B ocorreu, A fica impossível. Por isso, eventos disjuntos com probabilidades positivas nunca são independentes.\n\n0,3 é P(A) sem condição, o que valeria se A e B fossem independentes. 0,12 multiplica as probabilidades. 0,75 divide 0,3 por 0,4. E 1 trataria A como certo quando B ocorre.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Qual condição define que dois eventos A e B, de probabilidades positivas, são independentes?",
    opcoes: [
      "P(A ∩ B) = 0",
      "P(A ∪ B) = P(A) + P(B)",
      "P(A|B) = P(B|A)",
      "P(A) + P(B) = 1",
      "P(A ∩ B) = P(A) · P(B)",
    ],
    correta: 4,
    explicacao:
      "A e B são independentes quando P(A ∩ B) = P(A) · P(B). Com P(B) > 0, isso equivale a P(A|B) = P(A): saber que B ocorreu não altera a probabilidade de A. Os lançamentos de dois dados diferentes são o exemplo típico.\n\nP(A ∩ B) = 0 caracteriza eventos disjuntos, que, com probabilidades positivas, são dependentes. A soma na união também vale só para disjuntos. P(A|B) = P(B|A) só diz que P(A) = P(B), quando a interseção é positiva. E P(A) + P(B) = 1 não tem relação com independência.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "Uma senha é formada por um algarismo, de 0 a 9, seguido de uma letra, entre 26, sorteados de forma independente. Qual é a probabilidade de a senha ser 7A?",
    opcoes: [
      "1/36",
      "1/10",
      "1/260",
      "1/26",
      "1/130",
    ],
    correta: 2,
    explicacao:
      "O algarismo tem 10 possibilidades e a letra, 26. Como os sorteios são independentes, P(7 e A) = P(7) · P(A) = (1/10)(1/26) = 1/260. Pela contagem, há 10 · 26 = 260 senhas igualmente prováveis, e só uma é 7A.\n\n1/36 soma as possibilidades, 10 + 26, em vez de multiplicar. 1/10 considera só o algarismo, e 1/26, só a letra. E 1/130 conta duas ordens, 7A e A7, embora o formato fixe o algarismo antes da letra.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "facil",
    enunciado:
      "A chance de chover em cada um de dois dias é 0,3, e os dois dias são independentes. Qual é a probabilidade de não chover em nenhum dos dois?",
    opcoes: [
      "0,4",
      "0,49",
      "0,7",
      "0,09",
      "0,51",
    ],
    correta: 1,
    explicacao:
      "Em cada dia, P(não chover) = 1 − 0,3 = 0,7. Pela independência, P(não chover nos dois) = 0,7 · 0,7 = 0,49. Os complementares de eventos independentes também são independentes, e por isso o produto vale.\n\n0,4 subtrai 0,3 + 0,3 de 1, como se os dias chuvosos não pudessem coincidir. 0,7 considera um dia só. 0,09 é a probabilidade de chover nos dois. E 0,51 é a de chover em pelo menos um, 1 − 0,49.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Dois dados são lançados, e sabe-se que a soma foi 8. Qual é a probabilidade de os dois dados mostrarem o mesmo número?",
    opcoes: [
      "1/6",
      "1/36",
      "1/3",
      "1/5",
      "5/36",
    ],
    correta: 3,
    explicacao:
      "A condição reduz o espaço aos pares com soma 8: (2, 6), (3, 5), (4, 4), (5, 3) e (6, 2), cinco pares igualmente prováveis. Só (4, 4) tem números iguais, e P = 1/5. Pela fórmula: P(iguais e soma 8)/P(soma 8) = (1/36)/(5/36) = 1/5.\n\n1/6 é a probabilidade de números iguais sem a condição. 1/36 é a do par (4, 4) sem condicionar. 1/3 conta os pares sem ordem, {2, 6}, {3, 5} e {4, 4}. E 5/36 é a probabilidade da soma 8.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Lançam-se dois dados, e alguém avisa que saiu pelo menos um 6. Qual é a probabilidade de a soma ser 10 ou mais?",
    opcoes: [
      "5/11",
      "1/6",
      "5/36",
      "1/2",
      "6/11",
    ],
    correta: 0,
    explicacao:
      "Os pares com pelo menos um 6 são 11: seis com 6 no primeiro dado, seis com 6 no segundo, menos o (6, 6) contado duas vezes. Entre eles, a soma é 10 ou mais em (4, 6), (5, 6), (6, 6), (6, 5) e (6, 4): cinco pares. Então P = 5/11.\n\n1/6 é a probabilidade de soma 10 ou mais sem a condição, 6/36. 5/36 é a da interseção, sem dividir por P(pelo menos um 6). 1/2 é um palpite. E 6/11 é a probabilidade do complementar, soma menor que 10.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Sabe-se apenas que uma família de dois filhos tem pelo menos um menino. Supondo cada nascimento com chance 1/2 para cada sexo, independente dos outros, qual é a probabilidade de os dois serem meninos?",
    opcoes: [
      "1/2",
      "1/3",
      "1/4",
      "2/3",
      "3/4",
    ],
    correta: 1,
    explicacao:
      "As quatro sequências igualmente prováveis são menino-menino, menino-menina, menina-menino e menina-menina. Pelo menos um menino exclui só a última e deixa três sequências, das quais uma tem dois meninos: P = 1/3. A informação não diz qual dos filhos é menino, e por isso a resposta não é 1/2.\n\n1/2 seria a resposta se se soubesse que um filho determinado, como o mais velho, é menino. 1/4 ignora a informação. 2/3 é a probabilidade de haver uma menina, dada a condição. E 3/4 é a de haver pelo menos um menino, antes da informação.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Um casal tem dois filhos, e quem conhece a família informa que o primogênito é menino. Nessas condições, qual é a probabilidade de o casal ter dois meninos?",
    opcoes: [
      "1/2",
      "1/3",
      "1/4",
      "2/3",
      "1",
    ],
    correta: 0,
    explicacao:
      "Saber que o primogênito é menino deixa duas sequências igualmente prováveis: menino-menino e menino-menina. Uma delas tem dois meninos, e P = 1/2. Como os nascimentos são independentes, a pergunta equivale a perguntar o sexo do segundo filho.\n\n1/3 seria a resposta com a informação mais fraca de que pelo menos um filho é menino, sem dizer qual. 1/4 ignora a informação. 2/3 não sai da contagem. E 1 trataria o segundo filho como certamente menino.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Lança-se uma moeda: com cara, joga-se um dado; com coroa, jogam-se dois dados e somam-se os pontos. Qual é a probabilidade de o resultado final ser 6?",
    opcoes: [
      "1/6",
      "11/36",
      "11/72",
      "5/72",
      "1/12",
    ],
    correta: 2,
    explicacao:
      "Pela probabilidade total, soma-se sobre os dois ramos: P(6) = P(cara) · P(6 | cara) + P(coroa) · P(6 | coroa) = (1/2)(1/6) + (1/2)(5/36) = 1/12 + 5/72 = 6/72 + 5/72 = 11/72. A soma 6 com dois dados sai em 5 dos 36 pares.\n\n1/6 considera só o ramo de um dado. 11/36 soma as condicionais, 1/6 + 5/36, sem pesar pela moeda. 5/72 é só a contribuição do ramo da coroa, e 1/12, só a do ramo da cara.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Uma fábrica tem duas máquinas: a máquina A faz 60% das peças, com 2% de defeituosas, e a B faz o restante, com 5% de defeituosas. Uma peça sorteada é defeituosa. Qual é a probabilidade de ela ter vindo de B?",
    opcoes: [
      "62,5%",
      "40%",
      "5%",
      "37,5%",
      "≈ 71,4%",
    ],
    correta: 0,
    explicacao:
      "Em 1.000 peças, A faz 600, com 12 defeituosas, e B faz 400, com 20 defeituosas. As defeituosas são 32, e 20 delas vieram de B: P(B | defeituosa) = 20/32 = 62,5%. Pelo teorema de Bayes: (0,4 · 0,05)/(0,6 · 0,02 + 0,4 · 0,05) = 0,02/0,032.\n\n40% é a fração de peças feitas por B, antes de saber do defeito. 5% é a taxa de defeito de B, P(defeituosa | B), a pergunta inversa. 37,5% é a probabilidade de a defeituosa ter vindo de A. E 71,4% compara as taxas, 5/(2 + 5), sem pesar pela produção de cada máquina.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa com 200 pessoas, 80 fumam; 20 dos fumantes e 30 dos 120 não fumantes têm um certo problema respiratório. Nessa amostra, fumar e ter o problema são eventos independentes?",
    opcoes: [
      "Não: há mais casos entre os não fumantes",
      "Não: os fumantes são minoria",
      "Sim: porque 20 + 30 = 50",
      "Não dá para saber sem mais dados",
      "Sim: 25% têm o problema nos dois grupos",
    ],
    correta: 4,
    explicacao:
      "Independência significa que a probabilidade do problema não muda com a condição de fumante. Entre os fumantes, 20/80 = 25%; entre os não fumantes, 30/120 = 25%; e no total, 50/200 = 25%. Também P(fuma e tem o problema) = 20/200 = 0,1 = 0,4 · 0,25. Nesses números, os eventos são independentes.\n\nHá mais casos entre os não fumantes só porque esse grupo é maior. Ser minoria não diz nada sobre dependência. 20 + 30 = 50 é só o total de casos, que não justifica a conclusão. E os dados da tabela bastam para decidir.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Uma caixa tem 5 lâmpadas, das quais 2 estão queimadas. Testam-se as lâmpadas uma a uma, sem reposição. Qual é a probabilidade de as duas queimadas aparecerem nos dois primeiros testes?",
    opcoes: [
      "4/25",
      "1/10",
      "2/5",
      "3/10",
      "1/20",
    ],
    correta: 1,
    explicacao:
      "Pela regra da multiplicação: a primeira testada é queimada com probabilidade 2/5; dado isso, sobra 1 queimada em 4 lâmpadas, e a segunda é queimada com probabilidade 1/4. O produto é (2/5)(1/4) = 1/10. Contando pares: há C(5, 2) = 10 pares de lâmpadas para os dois primeiros testes, e só um é o das queimadas.\n\n4/25 = (2/5)² supõe reposição. 2/5 considera só o primeiro teste. 3/10 é a probabilidade de as duas primeiras serem boas, (3/5)(2/4). E 1/20 exige uma lâmpada queimada específica no primeiro teste, (1/5)(1/4).",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Um servidor guarda os dados em dois discos espelhados, e os dados só se perdem se os dois falharem. Cada disco funciona no período com probabilidade 0,9, de forma independente. Qual é a probabilidade de os dados serem preservados?",
    opcoes: [
      "0,81",
      "0,99",
      "0,9",
      "1,8",
      "0,18",
    ],
    correta: 1,
    explicacao:
      "Os dados se perdem só se os dois discos falharem, com probabilidade 0,1 · 0,1 = 0,01, pela independência. O complementar dá P(preservados) = 1 − 0,01 = 0,99. Um sistema em paralelo como esse é mais confiável que cada componente isolado.\n\n0,81 é a probabilidade de os dois funcionarem, que seria a exigência de um sistema em série. 0,9 é a de um disco só. 1,8 soma as probabilidades e passa de 1. E 0,18 é a de exatamente um disco funcionar.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Um arqueiro acerta o alvo com probabilidade 0,6 em cada flecha, de forma independente. Atirando 3 flechas, qual é a probabilidade de acertar pelo menos uma?",
    opcoes: [
      "1,8",
      "0,216",
      "0,936",
      "0,064",
      "0,6",
    ],
    correta: 2,
    explicacao:
      "O complementar de acertar pelo menos uma é errar as três. Cada erro tem probabilidade 0,4 e, pela independência, P(errar as três) = 0,4³ = 0,064. Então P(pelo menos um acerto) = 1 − 0,064 = 0,936.\n\n1,8 soma as três probabilidades e passa de 1, porque conta várias vezes os casos com mais de um acerto. 0,216 = 0,6³ é a probabilidade de acertar as três. 0,064 é a de errar todas. E 0,6 é a de acertar uma flecha isolada.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Num experimento, os eventos A e B são disjuntos, com P(A) = 0,2 e P(B) = 0,5. É correto dizer que A e B são independentes?",
    opcoes: [
      "Sim: eventos disjuntos são sempre independentes",
      "Sim: um não influi no outro",
      "Não: P(A ∩ B) = 0, diferente de P(A) · P(B) = 0,1",
      "Não: porque P(A) + P(B) < 1",
      "Só se P(A ∪ B) = 1",
    ],
    correta: 2,
    explicacao:
      "Sendo disjuntos, P(A ∩ B) = 0. Para serem independentes, seria preciso P(A ∩ B) = P(A) · P(B) = 0,2 · 0,5 = 0,1, o que não acontece. Além disso, se B ocorre, A fica impossível: P(A|B) = 0, bem diferente de P(A) = 0,2. A disjunção é uma forma forte de dependência.\n\nEventos disjuntos com probabilidades positivas nunca são independentes. A ideia de que um não influi no outro confunde as duas noções. A soma das probabilidades ser menor que 1 é irrelevante. E a condição sobre a união não muda a conclusão.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Numa empresa, 40% dos funcionários são engenheiros. Falam alemão 30% dos engenheiros e 10% dos demais. Sorteado um funcionário que fala alemão, qual é a probabilidade de ele ser engenheiro?",
    opcoes: [
      "30%",
      "≈ 66,7%",
      "40%",
      "18%",
      "12%",
    ],
    correta: 1,
    explicacao:
      "Em 100 funcionários: 40 engenheiros, dos quais 12 falam alemão, e 60 demais, dos quais 6 falam. Os que falam alemão são 18, e 12 deles são engenheiros: P(engenheiro | alemão) = 12/18 ≈ 66,7%. A condição troca o denominador para o grupo dos que falam alemão.\n\n30% é P(alemão | engenheiro), a condicional no sentido inverso. 40% é a fração de engenheiros sem a informação. 18% é a fração da empresa que fala alemão. E 12% é a de engenheiros que falam alemão, no total.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Uma carta foi sorteada de um baralho de 52, e sabe-se que é uma figura: valete, dama ou rei. Qual é a probabilidade de ela ser de copas?",
    opcoes: [
      "3/52",
      "1/13",
      "3/13",
      "1/4",
      "1/12",
    ],
    correta: 3,
    explicacao:
      "As figuras são 12, três de cada naipe. Entre elas, 3 são de copas, e P(copas | figura) = 3/12 = 1/4. É a mesma probabilidade de copas sem a informação, 13/52 = 1/4: saber que a carta é figura não muda a chance do naipe, e os eventos copas e figura são independentes.\n\n3/52 é a probabilidade de a carta ser uma figura de copas, sem condicionar. 1/13 é a de um valor específico. 3/13 é a de ser figura. E 1/12 é a de uma figura específica, como o rei de copas, dado que é figura.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Numa cidade, 30% dos habitantes têm mais de 60 anos, e 10% têm mais de 80. Sorteado um habitante com mais de 60 anos, qual é a probabilidade de ele ter mais de 80?",
    opcoes: [
      "10%",
      "3%",
      "30%",
      "≈ 66,7%",
      "≈ 33,3%",
    ],
    correta: 4,
    explicacao:
      "Quem tem mais de 80 anos também tem mais de 60: o evento mais de 80 está contido em mais de 60, e a interseção dos dois é o próprio mais de 80, com 10%. Então P(mais de 80 | mais de 60) = 0,10/0,30 = 1/3, ou cerca de 33,3%.\n\n10% é a probabilidade sem a condição. 3% multiplica 10% por 30%, como se os eventos fossem independentes. 30% é a probabilidade de ter mais de 60. E 66,7% é a de ter entre 60 e 80 anos, dado que tem mais de 60.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Numa sala de 10 pessoas, 4 usam óculos. Escolhem-se 3 pessoas ao acaso, uma após a outra, sem repetir. Qual é a probabilidade de nenhuma delas usar óculos?",
    opcoes: [
      "27/125",
      "3/5",
      "1/6",
      "1/2",
      "1/30",
    ],
    correta: 2,
    explicacao:
      "Pela regra da multiplicação: a primeira não usa óculos com probabilidade 6/10; dado isso, a segunda, com 5/9; e a terceira, com 4/8. O produto é (6/10)(5/9)(4/8) = 120/720 = 1/6. Pela contagem: C(6, 3)/C(10, 3) = 20/120 = 1/6.\n\n27/125 = (3/5)³ supõe que as escolhas são independentes, com reposição. 3/5 considera só a primeira pessoa. 1/2 considera só a condicional da terceira, 4/8. E 1/30 é a probabilidade de as três usarem óculos.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Fixado um evento B com probabilidade positiva, qual relação é verdadeira para todo evento A?",
    opcoes: [
      "P(A|B) + P(A|Bᶜ) = 1",
      "P(A|B) = P(B|A)",
      "P(A|B) + P(Aᶜ|B) = 1",
      "P(A|B) ≥ P(A)",
      "P(A|B) ≤ P(A ∩ B)",
    ],
    correta: 2,
    explicacao:
      "Condicionar a B produz uma nova probabilidade, que cumpre os mesmos axiomas. Em particular, vale a regra do complementar: P(A|B) + P(Aᶜ|B) = [P(A ∩ B) + P(Aᶜ ∩ B)]/P(B) = P(B)/P(B) = 1.\n\nP(A|B) + P(A|Bᶜ) mistura condições diferentes e pode dar qualquer valor entre 0 e 2. P(A|B) = P(B|A) só vale quando P(A) = P(B) ou a interseção é nula. P(A|B) pode ser menor que P(A), quando B desfavorece A. E P(A|B) = P(A ∩ B)/P(B) é maior ou igual a P(A ∩ B), e não menor.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Uma urna tem bolas numeradas de 1 a 10. Sabe-se que a bola sorteada tem número par. Qual é a probabilidade de o número ser maior que 5?",
    opcoes: [
      "1/2",
      "3/10",
      "3/5",
      "2/5",
      "1/5",
    ],
    correta: 2,
    explicacao:
      "A informação reduz o espaço aos pares {2, 4, 6, 8, 10}, cinco bolas igualmente prováveis. As maiores que 5 são 6, 8 e 10, e P(maior que 5 | par) = 3/5. Sem a informação, a probabilidade seria 5/10 = 1/2: saber que a bola é par aumenta a chance de ela ser maior que 5.\n\n1/2 ignora a condição. 3/10 é a probabilidade da interseção sobre o total, sem condicionar. 2/5 esquece o 6, que também é maior que 5. E 1/5 considera só um dos pares maiores que 5.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Três estudantes tentam resolver um problema, de forma independente, com probabilidades de acerto 1/2, 1/3 e 1/4. Qual é a probabilidade de o problema ser resolvido por pelo menos um deles?",
    opcoes: [
      "1/24",
      "13/12",
      "1/4",
      "3/4",
      "11/24",
    ],
    correta: 3,
    explicacao:
      "O problema fica sem solução só se os três errarem: (1/2)(2/3)(3/4) = 6/24 = 1/4, pela independência. Então P(pelo menos um acerta) = 1 − 1/4 = 3/4.\n\n1/24 é a probabilidade de os três acertarem, (1/2)(1/3)(1/4). 13/12 soma as três probabilidades e passa de 1, porque conta várias vezes os casos com mais de um acerto. 1/4 é a probabilidade de ninguém acertar. E 11/24 é a de exatamente um acertar.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Um dado é lançado duas vezes. Sejam A: o primeiro resultado é par, e B: a soma dos resultados é 7. Os eventos A e B são independentes?",
    opcoes: [
      "Não: a soma depende do primeiro resultado",
      "Sim: P(A ∩ B) = 1/12 = P(A) · P(B)",
      "Não: P(A ∩ B) = 1/6",
      "Sim: porque P(A) = 1/2",
      "Não: A e B são disjuntos",
    ],
    correta: 1,
    explicacao:
      "P(A) = 1/2 e P(B) = 6/36 = 1/6. A ∩ B reúne os pares (2, 5), (4, 3) e (6, 1): P(A ∩ B) = 3/36 = 1/12 = (1/2)(1/6). Então A e B são independentes: qualquer que seja o primeiro resultado, há exatamente um segundo resultado que completa a soma 7.\n\nA soma depende do primeiro resultado em geral, mas não o evento soma 7, que tem chance 1/6 em qualquer caso. P(A ∩ B) vale 1/12, e não 1/6. P(A) = 1/2, sozinho, não decide nada. E A e B têm três pares em comum, não são disjuntos.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "A urna I tem 2 bolas brancas e 3 pretas; a urna II tem 4 brancas e 4 pretas. Escolhe-se uma urna ao acaso e, dela, uma bola, que sai branca. Qual é a probabilidade de a bola ter vindo da urna II?",
    opcoes: [
      "2/3",
      "1/2",
      "5/9",
      "1/4",
      "4/9",
    ],
    correta: 2,
    explicacao:
      "Pela probabilidade total, P(branca) = (1/2)(2/5) + (1/2)(4/8) = 1/5 + 1/4 = 9/20. Pelo teorema de Bayes, P(II | branca) = (1/2)(1/2)/(9/20) = (1/4)/(9/20) = 5/9. A urna II, com proporção maior de brancas, fica mais provável depois de sair branca.\n\n2/3 junta as bolas das duas urnas, 4 das 6 brancas, sem considerar que as urnas têm tamanhos diferentes. 1/2 é a probabilidade antes da informação. 1/4 é P(II e branca), sem dividir por P(branca). E 4/9 é a probabilidade da urna I.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Um exame detecta 95% dos casos de uma doença, ou seja, P(positivo | doente) = 0,95. Pode-se concluir que P(doente | positivo) = 0,95?",
    opcoes: [
      "Sim: as duas probabilidades são sempre iguais",
      "Sim: se o exame é bom, o positivo é confiável",
      "Não: P(doente | positivo) é sempre 0,05",
      "Não: P(doente | positivo) é sempre menor que 0,5",
      "Não: depende também da prevalência e dos falsos positivos",
    ],
    correta: 4,
    explicacao:
      "P(positivo | doente) e P(doente | positivo) condicionam a eventos diferentes. Pelo teorema de Bayes, P(doente | positivo) = P(positivo | doente) · P(doente)/P(positivo), e o resultado depende de quantas pessoas têm a doença e de quantos sadios dão positivo. Com 1% de doentes e 5% de falsos positivos, fica perto de 16%; com metade da população doente e os mesmos 5%, chega a 95%.\n\nAs duas probabilidades não são iguais em geral. Um exame sensível pode gerar muitos positivos falsos quando a doença é rara. E o valor de P(doente | positivo) não é fixo: varia com a prevalência e pode ficar acima ou abaixo de 0,5.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Os eventos A e B são independentes, com P(A) = 0,3 e P(B) = 0,6. Qual é a probabilidade de nenhum dos dois ocorrer?",
    opcoes: [
      "0,18",
      "0,72",
      "0,82",
      "0,28",
      "0,1",
    ],
    correta: 3,
    explicacao:
      "Se A e B são independentes, os complementares Aᶜ e Bᶜ também são. Então P(nenhum) = P(Aᶜ) · P(Bᶜ) = 0,7 · 0,4 = 0,28. Pela união, dá o mesmo: P(A ∪ B) = 0,3 + 0,6 − 0,18 = 0,72, e 1 − 0,72 = 0,28.\n\n0,18 é a probabilidade de os dois ocorrerem. 0,72 é a de pelo menos um ocorrer. 0,82 é 1 − 0,18, a de não ocorrerem os dois juntos. E 0,1 subtrai 0,3 e 0,6 de 1, como se A e B fossem disjuntos.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Dois dados são lançados, e sabe-se que mostraram números diferentes. Qual é a probabilidade de a soma ser par?",
    opcoes: [
      "1/2",
      "2/5",
      "1/3",
      "3/5",
      "5/6",
    ],
    correta: 1,
    explicacao:
      "Os pares com números diferentes são 36 − 6 = 30. A soma é par quando os dois números têm a mesma paridade: 3 · 3 = 9 pares com os dois ímpares e 9 com os dois pares, 18 no total, dos quais 6 têm números iguais. Restam 12, e P = 12/30 = 2/5.\n\n1/2 é a probabilidade de soma par sem a condição. 1/3 é 12/36, sem dividir pela probabilidade da condição. 3/5 é a probabilidade de soma ímpar, dado que os números são diferentes. E 5/6 é a probabilidade de os números serem diferentes.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Três pessoas escolhem, cada uma ao acaso e de forma independente, um dos 5 andares de um prédio. Qual é a probabilidade de escolherem andares todos diferentes?",
    opcoes: [
      "3/5",
      "1/25",
      "13/25",
      "12/25",
      "2/5",
    ],
    correta: 3,
    explicacao:
      "A primeira pessoa escolhe qualquer andar. A segunda precisa evitar esse andar, com probabilidade 4/5, e a terceira precisa evitar os dois já escolhidos, com probabilidade 3/5. Pela independência das escolhas, P = 1 · (4/5)(3/5) = 12/25. Pela contagem: 5 · 4 · 3 = 60 casos favoráveis entre 5³ = 125.\n\n3/5 considera só a terceira pessoa. 1/25 é a probabilidade de as três escolherem o mesmo andar. 13/25 é a de pelo menos duas coincidirem. E 2/5 não sai da contagem.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Tira-se uma carta de um baralho de 52 e, sem devolvê-la, tira-se outra. Sabendo que a primeira foi de copas, qual é a probabilidade de a segunda também ser de copas?",
    opcoes: [
      "4/17",
      "1/4",
      "3/13",
      "13/51",
      "1/16",
    ],
    correta: 0,
    explicacao:
      "Depois de uma carta de copas sair, restam 51 cartas, das quais 12 de copas. Então P(2ª copas | 1ª copas) = 12/51 = 4/17, um pouco menos que 1/4, porque o naipe ficou com uma carta a menos.\n\n1/4 é a probabilidade sem a informação, que valeria com reposição. 3/13 = 12/52 tira a carta de copas, mas mantém 52 no total. 13/51 esquece de retirar a carta de copas já sorteada. E 1/16 é a probabilidade de as duas serem de copas com reposição, (1/4)².",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Três moedas são jogadas, e um observador conta que apareceu pelo menos uma cara. Qual é a probabilidade de terem aparecido exatamente duas caras?",
    opcoes: [
      "3/7",
      "3/8",
      "1/3",
      "4/7",
      "1/2",
    ],
    correta: 0,
    explicacao:
      "Das 8 sequências igualmente prováveis, só coroa-coroa-coroa fica excluída pela informação, e sobram 7. Exatamente duas caras ocorrem em 3 delas, com a coroa em primeiro, segundo ou terceiro lugar. Então P = 3/7.\n\n3/8 é a probabilidade de exatamente duas caras sem a condição. 1/3 trata os casos uma, duas ou três caras como equiprováveis. 4/7 é a probabilidade de pelo menos duas caras, dada a condição. E 1/2 é um palpite.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Uma urna tem 3 bolas vermelhas e 7 azuis. Sorteiam-se duas bolas, com reposição. Sabendo que pelo menos uma é vermelha, qual é a probabilidade de as duas serem vermelhas?",
    opcoes: [
      "3/10",
      "9/100",
      "1/3",
      "3/17",
      "51/100",
    ],
    correta: 3,
    explicacao:
      "Com reposição, as retiradas são independentes: P(duas vermelhas) = 0,3 · 0,3 = 0,09 e P(nenhuma vermelha) = 0,7 · 0,7 = 0,49, logo P(pelo menos uma vermelha) = 0,51. Como duas vermelhas já implica pelo menos uma, P(duas | pelo menos uma) = 0,09/0,51 = 9/51 = 3/17 ≈ 0,18.\n\n3/10 é a probabilidade de a segunda ser vermelha, como se a informação fosse sobre a primeira bola. 9/100 é a probabilidade de duas vermelhas sem a condição. 1/3 copia a resposta de problemas com chances iguais para as duas cores. E 51/100 é a probabilidade da própria condição.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "media",
    enunciado:
      "Uma urna tem 3 bolas brancas e 2 pretas. Sorteia-se uma bola, que é devolvida à urna junto com outra da mesma cor. Em seguida, sorteia-se uma nova bola. Qual é a probabilidade de a segunda bola ser branca?",
    opcoes: [
      "2/3",
      "1/2",
      "2/5",
      "7/12",
      "3/5",
    ],
    correta: 4,
    explicacao:
      "Pela probabilidade total, separando pela cor da primeira: se foi branca, com probabilidade 3/5, a urna fica com 4 brancas em 6; se foi preta, com probabilidade 2/5, fica com 3 brancas em 6. Então P(2ª branca) = (3/5)(4/6) + (2/5)(3/6) = 12/30 + 6/30 = 18/30 = 3/5, igual à da primeira.\n\n2/3 supõe que a primeira foi branca. 1/2 supõe que a primeira foi preta. 2/5 é a probabilidade de a segunda ser preta. E 7/12 faz a média simples de 2/3 e 1/2, sem pesar pelas chances da primeira retirada.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Um filtro marca como spam 98% das mensagens de spam e, por engano, 2% das mensagens legítimas. Sabe-se que 10% das mensagens recebidas são spam. Uma mensagem foi marcada. Qual é a probabilidade de ela ser spam?",
    opcoes: [
      "98%",
      "≈ 84,5%",
      "10%",
      "≈ 15,5%",
      "≈ 11,6%",
    ],
    correta: 1,
    explicacao:
      "Em 1.000 mensagens: 100 spams, dos quais 98 são marcados, e 900 legítimas, das quais 18 são marcadas por engano. As marcadas somam 116, e 98 delas são spam: P(spam | marcada) = 98/116 ≈ 84,5%. É o teorema de Bayes em forma de contagem.\n\n98% é P(marcada | spam), a condicional inversa. 10% é a proporção de spam antes da marcação. 15,5% é a probabilidade de a mensagem marcada ser legítima, 18/116. E 11,6% é a proporção de mensagens marcadas, 116/1.000.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Num jogo, há três portas e um prêmio atrás de uma delas. O jogador escolhe uma porta; o apresentador, que sabe onde está o prêmio, abre outra porta, sem prêmio, e oferece a troca. Qual é a probabilidade de ganhar quem troca de porta?",
    opcoes: [
      "2/3",
      "1/2",
      "1/3",
      "1",
      "3/4",
    ],
    correta: 0,
    explicacao:
      "Quem troca ganha exatamente quando a primeira escolha estava errada, o que acontece com probabilidade 2/3: nesse caso, o apresentador é obrigado a abrir a única outra porta sem prêmio, e a porta restante tem o prêmio. Quem mantém a escolha ganha só se acertou de início, com probabilidade 1/3.\n\n1/2 supõe que as duas portas fechadas ficam igualmente prováveis, esquecendo que o apresentador escolhe a porta sabendo onde está o prêmio. 1/3 é a chance de quem não troca. 1 exageraria a vantagem da troca. E 3/4 não sai de nenhum caso.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Duas moedas honestas são lançadas. Sejam A: a primeira dá cara; B: a segunda dá cara; C: as duas dão o mesmo resultado. O que se pode afirmar sobre A, B e C?",
    opcoes: [
      "Os três são mutuamente independentes",
      "Independentes aos pares, mas não os três",
      "Nenhum par de eventos é independente",
      "Só A e B são independentes entre si",
      "C é impossível quando A e B ocorrem",
    ],
    correta: 1,
    explicacao:
      "Cada evento tem probabilidade 1/2, e cada interseção de dois tem probabilidade 1/4: A ∩ B, A ∩ C e B ∩ C são, os três, o resultado cara-cara, com 1 dos 4 casos. Então cada par é independente. Mas A ∩ B ∩ C também é cara-cara, com probabilidade 1/4, e não 1/8 = (1/2)³: os três juntos não são independentes.\n\nA independência mútua exigiria também o produto triplo. Todos os pares são independentes, e não só A e B. E se A e B ocorrem, as duas moedas deram cara, e C ocorre com certeza.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Um sistema funciona se o componente A funcionar e, além disso, pelo menos um dos componentes B e C funcionar. Cada componente funciona com probabilidade 0,9, de forma independente. Qual é a probabilidade de o sistema funcionar?",
    opcoes: [
      "0,729",
      "0,999",
      "0,891",
      "0,81",
      "0,99",
    ],
    correta: 2,
    explicacao:
      "O bloco com B e C, em paralelo, falha só se os dois falharem: 0,1 · 0,1 = 0,01, e funciona com probabilidade 0,99. Em série com A, o sistema funciona com probabilidade 0,9 · 0,99 = 0,891, pela independência entre A e o bloco.\n\n0,729 = 0,9³ exige os três componentes funcionando, como numa série completa. 0,999 trata os três como paralelos. 0,81 exige A e um componente fixo do bloco. E 0,99 é a confiabilidade do bloco paralelo, sem A.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Num grupo de 23 pessoas, com aniversários independentes e distribuídos por igual entre 365 dias, qual é, aproximadamente, a probabilidade de pelo menos duas fazerem aniversário no mesmo dia?",
    opcoes: [
      "≈ 6,3%",
      "≈ 49,3%",
      "≈ 50,7%",
      "≈ 5,9%",
      "≈ 0,3%",
    ],
    correta: 2,
    explicacao:
      "O complementar é todos os aniversários serem diferentes: (365/365)(364/365)(363/365) ⋯ (343/365) ≈ 0,493, multiplicando as probabilidades condicionais de cada nova pessoa evitar os dias já ocupados. Então P(alguma coincidência) ≈ 1 − 0,493 = 0,507. Com 23 pessoas há 253 pares, e cada par pode coincidir, o que explica o valor alto.\n\n6,3% = 23/365 pensa em uma pessoa só. 49,3% é a probabilidade de todos os aniversários serem diferentes. 5,9% é a de alguém fazer aniversário no mesmo dia de uma pessoa específica. E 0,3% é a de duas pessoas específicas coincidirem, 1/365.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "O hospital A tratou 100 casos leves, com 90 curas, e 400 graves, com 200 curas. O hospital B tratou 400 casos leves, com 340 curas, e 100 graves, com 40 curas. Como se comparam as taxas de cura?",
    opcoes: [
      "B no geral, mas A em cada tipo de caso",
      "A no geral e em cada tipo de caso",
      "B no geral e em cada tipo de caso",
      "A no geral, mas B em cada tipo de caso",
      "Os dois empatam no geral",
    ],
    correta: 0,
    explicacao:
      "Por tipo: nos leves, A cura 90% e B, 85%; nos graves, A cura 50% e B, 40%. A é melhor nos dois tipos. No geral, porém, A cura 290/500 = 58% e B, 380/500 = 76%. A inversão, chamada paradoxo de Simpson, vem da composição dos casos: A trata sobretudo casos graves, que têm taxas de cura menores.\n\nA não é melhor no geral. B não é melhor em nenhum tipo de caso. A inversão descrita na outra ordem não corresponde aos números. E as taxas gerais, 58% e 76%, não empatam.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Um ponto é sorteado com distribuição uniforme no quadrado de vértices (0, 0) e (1, 1). Sabendo que suas coordenadas satisfazem x + y < 1, qual é a probabilidade de x < 1/2?",
    opcoes: [
      "1/2",
      "3/8",
      "1/4",
      "3/4",
      "2/3",
    ],
    correta: 3,
    explicacao:
      "A condição x + y < 1 é o triângulo abaixo da diagonal, de área 1/2. Dentro dele, a parte com x < 1/2 é um trapézio de área igual à integral de 1 − x entre 0 e 1/2: 1/2 − 1/8 = 3/8. A condicional é a razão das áreas: (3/8)/(1/2) = 3/4. O triângulo é mais largo do lado de x pequeno, e por isso a resposta passa de 1/2.\n\n1/2 ignora a condição e usa o quadrado todo. 3/8 é a área da interseção, sem dividir pela área do triângulo. 1/4 é a condicional de x ≥ 1/2. E 2/3 não sai das áreas.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Uma doença rara atinge 1 em cada 100 pessoas. Um exame detecta 99% dos doentes, mas dá positivo, por engano, em 5% dos sadios. Uma pessoa faz o exame duas vezes, com resultados independentes dada a sua condição, e dá positivo nas duas. Qual é a probabilidade de ela estar doente?",
    opcoes: [
      "≈ 16,7%",
      "≈ 33,3%",
      "99%",
      "≈ 2,8%",
      "≈ 79,8%",
    ],
    correta: 4,
    explicacao:
      "Em 1.000.000 de pessoas: 10.000 doentes, dos quais 10.000 · 0,99² = 9.801 dão dois positivos, e 990.000 sadios, dos quais 990.000 · 0,05² = 2.475 dão dois positivos. Então P(doente | dois positivos) = 9.801/(9.801 + 2.475) ≈ 79,8%. Com um único positivo, a conta seria 9.900/(9.900 + 49.500) ≈ 16,7%: o segundo exame muda muito a conclusão.\n\n16,7% considera um só exame. 33,3% dobra esse valor, sem justificativa. 99% é a sensibilidade do exame, P(positivo | doente). E 2,8% eleva 16,7% ao quadrado, como se a segunda informação diminuísse a chance.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Um dado honesto é lançado até sair o primeiro 6. Qual é a probabilidade de serem necessários exatamente 3 lançamentos?",
    opcoes: [
      "1/216",
      "1/6",
      "5/36",
      "91/216",
      "25/216",
    ],
    correta: 4,
    explicacao:
      "São necessários exatamente 3 lançamentos quando os dois primeiros não dão 6 e o terceiro dá. Pela independência dos lançamentos: (5/6)(5/6)(1/6) = 25/216 ≈ 0,116. Cada lançamento a mais multiplica a probabilidade por 5/6, e os valores formam uma progressão geométrica.\n\n1/216 = (1/6)³ exige três 6 seguidos. 1/6 é a probabilidade de um 6 num lançamento qualquer. 5/36 é a probabilidade de o primeiro 6 sair no segundo lançamento. E 91/216 é a de ele sair em até 3 lançamentos, 1 − (5/6)³.",
  },
  {
    materia: "estatistica",
    tema: "Probabilidade condicional e independência",
    dificuldade: "dificil",
    enunciado:
      "Com um dado honesto, qual é o menor número de lançamentos para que a probabilidade de sair pelo menos um 6 passe de 50%?",
    opcoes: [
      "3",
      "6",
      "5",
      "2",
      "4",
    ],
    correta: 4,
    explicacao:
      "Em n lançamentos independentes, P(nenhum 6) = (5/6)ⁿ, e P(pelo menos um 6) = 1 − (5/6)ⁿ. Com n = 3, (5/6)³ ≈ 0,579, e a probabilidade é só 0,421. Com n = 4, (5/6)⁴ ≈ 0,482, e a probabilidade passa a 0,518, acima de 50%. O menor número é 4.\n\n3 vem de achar que cada lançamento soma 1/6 e que 3 · 1/6 = 1/2 bastaria. 6 imagina que, em 6 lançamentos, o 6 sai com certeza, 6 · 1/6 = 1. 5 também serve, mas não é o menor. E 2 dá só 11/36 ≈ 0,306.",
  },
];
