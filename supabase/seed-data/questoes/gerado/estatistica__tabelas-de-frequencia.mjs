/* Tabelas de frequência (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__tabelas-de-frequencia.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__tabelas-de-frequencia.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Numa pesquisa com 40 pessoas, 8 escolheram o sabor morango. Qual é a frequência relativa do sabor morango?",
    opcoes: [
      "0,2",
      "8",
      "0,8",
      "5",
      "32",
    ],
    correta: 0,
    explicacao:
      "A frequência relativa é a frequência absoluta dividida pelo total: 8/40 = 0,2, ou 20%. Ela indica a fração do total que cada categoria representa e permite comparar pesquisas de tamanhos diferentes.\n\n8 é a frequência absoluta, a contagem. 0,8 erra a vírgula, ou divide 8 por 10. 5 inverte a divisão: 40/8. E 32 é a quantidade de pessoas que não escolheram morango.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Numa tabela de idades, 15 anos tem frequência 4, 16 anos tem 7, 17 anos tem 5 e 18 anos tem 4. Qual é a frequência acumulada até 17 anos?",
    opcoes: [
      "16",
      "5",
      "20",
      "11",
      "9",
    ],
    correta: 0,
    explicacao:
      "A frequência acumulada soma as frequências até a linha pedida: 4 + 7 + 5 = 16. Ela responde quantos têm até 17 anos, isto é, 17 anos ou menos.\n\n5 é a frequência simples de 17 anos, sem acumular. 20 é o total da tabela, que inclui os de 18 anos. 11 acumula só até 16 anos. E 9 soma as frequências de 17 e 18 anos, o acumulado no sentido inverso.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Uma tabela de frequências tem quatro linhas, com frequências absolutas 3, 5, 9 e 3. Quantas observações foram feitas?",
    opcoes: [
      "20",
      "4",
      "9",
      "5",
      "40",
    ],
    correta: 0,
    explicacao:
      "O total de observações é a soma das frequências absolutas: 3 + 5 + 9 + 3 = 20. Numa tabela completa, a última frequência acumulada também é igual a esse total. Ele é o denominador de todas as frequências relativas: a primeira linha, por exemplo, representa 3/20 = 15% das observações.\n\n4 é o número de linhas, ou de categorias, e não de observações. 9 é a maior frequência. 5 é a média das frequências. E 40 dobra o total, sem motivo.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Dos 40 alunos de uma turma, 18 vão à escola de ônibus, 7 de carro, 5 de bicicleta e 10 a pé. Qual meio de transporte tem a maior frequência relativa, e qual é ela?",
    opcoes: [
      "Ônibus, com 45%",
      "Ônibus, com 18%",
      "A pé, com 25%",
      "Carro, com 17,5%",
      "Bicicleta, com 12,5%",
    ],
    correta: 0,
    explicacao:
      "A frequência relativa é a contagem dividida pelo total de 40 alunos. A maior contagem é a do ônibus, 18, e 18/40 = 0,45, ou 45%. Como todas as categorias têm o mesmo denominador, a maior frequência relativa é sempre a da maior frequência absoluta.\n\n18% lê a contagem como porcentagem. A pé tem 25%, carro tem 17,5% e bicicleta tem 12,5%: são valores certos, mas menores que os 45% do ônibus.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Qual é o ponto médio da classe [20, 30) numa tabela de dados agrupados?",
    opcoes: [
      "25",
      "20",
      "30",
      "10",
      "50",
    ],
    correta: 0,
    explicacao:
      "O ponto médio é a média dos limites da classe: (20 + 30)/2 = 25. Ele representa todos os valores da classe no cálculo de médias e variâncias de dados agrupados, supondo que os dados se distribuam de modo equilibrado dentro dela.\n\n20 é o limite inferior e 30, o superior. 10 é a amplitude da classe. E 50 é a soma dos limites, sem dividir por 2.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Qual é a amplitude da classe [10, 15) numa tabela de dados agrupados?",
    opcoes: [
      "5",
      "10",
      "15",
      "12,5",
      "25",
    ],
    correta: 0,
    explicacao:
      "A amplitude de uma classe é a diferença entre o limite superior e o inferior: 15 − 10 = 5. Em tabelas com classes de mesma amplitude, esse valor é o passo de um limite ao seguinte: depois de [10, 15) vêm [15, 20), [20, 25), e assim por diante. Não se confunde com a amplitude total dos dados, que é o maior valor menos o menor.\n\n10 é o limite inferior da classe, e 15, o superior. 12,5 é o ponto médio, (10 + 15)/2. E 25 soma os limites em vez de subtraí-los.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Numa pesquisa sobre o número de irmãos, as respostas foram 0, 1, 1, 2, 0, 1, 3, 1, 2 e 1. Qual é a frequência absoluta do valor 1?",
    opcoes: [
      "5",
      "1",
      "0,5",
      "10",
      "3",
    ],
    correta: 0,
    explicacao:
      "A frequência absoluta é a contagem de vezes que o valor aparece. O 1 aparece na 2ª, 3ª, 6ª, 8ª e 10ª respostas: cinco vezes. Na tabela, a linha do valor 1 teria frequência 5 e frequência relativa 5/10 = 0,5. Montar a tabela é exatamente isso: contar, valor por valor, quantas vezes cada um aparece.\n\n1 é o próprio valor, e não a contagem. 0,5 é a frequência relativa. 10 é o total de respostas. E 3 é o maior valor da variável.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Numa tabela de frequências completa, quanto vale a soma das frequências relativas de todas as linhas?",
    opcoes: [
      "1",
      "n, o número de observações",
      "0",
      "0,5",
      "Depende da tabela",
    ],
    correta: 0,
    explicacao:
      "Cada frequência relativa é fᵢ/n, e a soma das frequências absolutas é n. Então a soma das relativas é n/n = 1, ou 100% quando se usam porcentagens. É uma boa verificação para achar erros de conta numa tabela.\n\nn é a soma das frequências absolutas, e não das relativas. 0 e 0,5 não têm justificativa. E a soma não depende da tabela: é sempre 1, por construção.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Uma tabela tem quatro classes com frequências 5, 10, 15 e 10. Qual é a frequência relativa acumulada até a terceira classe?",
    opcoes: [
      "75%",
      "37,5%",
      "30%",
      "25%",
      "15%",
    ],
    correta: 0,
    explicacao:
      "O total é 5 + 10 + 15 + 10 = 40, e o acumulado até a terceira classe é 5 + 10 + 15 = 30. A frequência relativa acumulada é 30/40 = 0,75, ou 75%: três quartos das observações estão nas três primeiras classes.\n\n37,5% é a frequência relativa só da terceira classe, 15/40. 30% lê a contagem acumulada como porcentagem. 25% é a fração que sobra na última classe. E 15% lê a frequência da terceira classe como porcentagem.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Uma tabela usa as classes [2, 4) e [4, 6). O valor 4 é contado na classe [2, 4)?",
    opcoes: [
      "Não: o 4 fica na classe [4, 6)",
      "Sim: fica nas duas classes",
      "Sim: fica só em [2, 4)",
      "Não fica em nenhuma classe",
      "Depende da frequência da classe",
    ],
    correta: 0,
    explicacao:
      "A notação [2, 4) indica um intervalo fechado em 2 e aberto em 4: inclui o 2 e todos os valores até o 4, sem incluir o 4. O valor 4 é o limite inferior da classe seguinte, [4, 6), e é contado nela. Assim, cada valor cai em exatamente uma classe.\n\nFicar nas duas classes contaria o mesmo dado duas vezes. Ficar só em [2, 4) contraria o parêntese aberto. Não ficar em nenhuma deixaria o dado de fora da tabela. E a classificação não depende das frequências, só dos limites.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Pela regra de Sturges, k = 1 + 3,3 · log n, arredondado para o inteiro mais próximo, quantas classes deve ter uma tabela com n = 32 observações?",
    opcoes: [
      "5",
      "6",
      "32",
      "3",
      "5,97",
    ],
    correta: 1,
    explicacao:
      "Com n = 32, log 32 ≈ 1,505, e k = 1 + 3,3 · 1,505 ≈ 5,97, que arredonda para 6 classes. A regra equivale a k = 1 + log₂ n, que dá exatamente 1 + 5 = 6. É uma sugestão prática: com poucas classes, a tabela esconde a forma dos dados; com muitas, sobram classes quase vazias.\n\n5 trunca 5,97 em vez de arredondar, ou esquece o 1 da fórmula. 32 é o número de observações. 3 esquece o fator 3,3. E 5,97 não foi arredondado: o número de classes precisa ser inteiro.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "facil",
    enunciado:
      "Os alunos de uma escola estudam em três turnos. As frequências relativas da manhã e da tarde são 45% e 30%. Qual é a frequência relativa da noite?",
    opcoes: [
      "75%",
      "25%",
      "15%",
      "30%",
      "45%",
    ],
    correta: 1,
    explicacao:
      "As frequências relativas de todas as categorias de uma variável somam 100%, porque cada aluno está em exatamente um turno. Então a noite tem 100% − 45% − 30% = 25%. A mesma soma serve para conferir tabelas: se as porcentagens passassem de 100%, além do que o arredondamento explica, haveria erro.\n\n75% é a soma da manhã com a tarde, e não o que falta. 15% é a diferença entre manhã e tarde. 30% e 45% repetem as porcentagens dos outros turnos.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Uma tabela com 50 observações tem quatro linhas, com frequências 12, x, 15 e 8. Qual é o valor de x?",
    opcoes: [
      "35",
      "15",
      "12",
      "50",
      "8",
    ],
    correta: 1,
    explicacao:
      "As frequências de todas as linhas somam o total: 12 + x + 15 + 8 = 50. Então x = 50 − 35 = 15. Esse tipo de problema aparece quando uma tabela chega com uma frequência apagada: o total, ou a última frequência acumulada, permite recuperá-la. Com x = 15, as acumuladas ficam 12, 27, 42 e 50.\n\n35 é a soma das frequências conhecidas, e não a que falta. 12 repete a primeira frequência. 50 é o total. E 8 repete a última frequência.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "As frequências acumuladas de uma tabela são 6, 14, 25 e 30. Qual é a frequência relativa da terceira classe?",
    opcoes: [
      "≈ 83,3%",
      "≈ 36,7%",
      "25%",
      "11%",
      "≈ 46,7%",
    ],
    correta: 1,
    explicacao:
      "A frequência simples da terceira classe é a diferença entre acumuladas: 25 − 14 = 11. O total é a última acumulada, 30. A frequência relativa é 11/30 ≈ 0,367, ou cerca de 36,7%.\n\n83,3% é a relativa acumulada até a terceira classe, 25/30. 25% lê a acumulada como porcentagem. 11% lê a frequência simples como porcentagem. E 46,7% é 14/30, a relativa acumulada até a segunda.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Os dados vão de 12 a 47. Qual é a menor amplitude inteira para 4 classes iguais, começando em 12 e na forma [a, b), que cubra todos os dados?",
    opcoes: [
      "8",
      "9",
      "35",
      "4",
      "10",
    ],
    correta: 1,
    explicacao:
      "As 4 classes, de amplitude h, cobrem de 12 até 12 + 4h, sem incluir esse limite. Para incluir o 47, é preciso 12 + 4h > 47, isto é, h > 8,75. A menor amplitude inteira é 9, com classes [12, 21), [21, 30), [30, 39) e [39, 48).\n\n8 cobriria só até 44, deixando de fora os dados entre 44 e 47. 35 é a amplitude total dos dados. 4 é o número de classes. E 10 também serve, mas não é a menor.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa amostra de 80 pessoas, a frequência relativa de uma categoria é 0,15. Quantas pessoas estão nessa categoria?",
    opcoes: [
      "15",
      "12",
      "0,15",
      "65",
      "5,3",
    ],
    correta: 1,
    explicacao:
      "A frequência absoluta é a relativa vezes o total: 0,15 · 80 = 12 pessoas. Conferindo: 12/80 = 0,15. A relação fᵢ = frᵢ · n vale nos dois sentidos: com a contagem e o total, obtém-se a relativa; com a relativa e o total, obtém-se a contagem.\n\n15 lê a relativa como contagem, a partir de 15%. 0,15 é a própria frequência relativa. 65 é o complemento em pessoas, 80 − 15, com o mesmo erro. E 5,3 divide o total pela porcentagem, 80/15.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "As classes [0, 10), [10, 20), [20, 30), [30, 40) e [40, 50) têm frequências 5, 12, 18, 10 e 5. Em qual classe está a mediana?",
    opcoes: [
      "[10, 20)",
      "[20, 30)",
      "[30, 40)",
      "[40, 50)",
      "[0, 10)",
    ],
    correta: 1,
    explicacao:
      "Com 50 observações, a mediana fica entre a 25ª e a 26ª, na ordem. As frequências acumuladas são 5, 17, 35, 45 e 50: até [10, 20) há 17 observações, e até [20, 30), 35. A 25ª e a 26ª estão em [20, 30), a classe mediana.\n\n[10, 20) acumula só 17, antes da posição central. [30, 40) começa depois da 35ª observação. [40, 50) e [0, 10) são as classes extremas, bem longe do centro.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa de satisfação com 100 clientes, 10 responderam ruim, 25 regular, 40 bom e 25 ótimo. Qual é a mediana das respostas?",
    opcoes: [
      "Regular",
      "Bom",
      "Ótimo",
      "Ruim",
      "Não existe mediana para respostas em categorias",
    ],
    correta: 1,
    explicacao:
      "A variável é qualitativa ordinal: as categorias têm ordem, de ruim a ótimo, e isso basta para definir a mediana. Com 100 respostas, a mediana fica entre a 50ª e a 51ª, na ordem. As acumuladas são 10, 35, 75 e 100: as posições de 36 a 75 são todas bom, e a mediana é bom.\n\nRegular termina na 35ª posição, antes do centro. Ótimo começa na 76ª. Ruim ocupa só as dez primeiras. E a mediana existe, sim, para categorias ordenadas; só não existe para categorias sem ordem, como cores.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa loja, foram registradas 12 compras de 1 item, 9 de 2 itens, 6 de 3 itens e 3 de 4 itens. Em quantas compras havia 2 itens ou mais?",
    opcoes: [
      "9",
      "18",
      "21",
      "30",
      "12",
    ],
    correta: 1,
    explicacao:
      "Somam-se as frequências de 2, 3 e 4 itens: 9 + 6 + 3 = 18 compras. É a frequência acumulada no sentido decrescente, do maior valor para o menor. Pelo complemento, o resultado é o mesmo: o total é 30, e só as 12 compras de 1 item ficam de fora, 30 − 12 = 18.\n\n9 fica só com as compras de 2 itens. 21 acumula no sentido crescente, até 2 itens. 30 é o total de compras. E 12 é o complemento, as compras de 1 item.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa sobre tempo de espera, 40% esperaram até 5 minutos, 35% entre 5 e 10, 15% entre 10 e 15 e 10% mais de 15. Que porcentagem esperou 10 minutos ou mais?",
    opcoes: [
      "15%",
      "25%",
      "10%",
      "75%",
      "60%",
    ],
    correta: 1,
    explicacao:
      "As duas últimas faixas correspondem a 10 minutos ou mais: 15% + 10% = 25%. Também dá para pensar no complemento: 100% − (40% + 35%) = 25%. Como as faixas não se sobrepõem, as porcentagens de faixas diferentes podem ser somadas.\n\n15% fica só com a faixa de 10 a 15 minutos. 10% fica só com a faixa acima de 15. 75% é a porcentagem que esperou menos de 10 minutos. E 60% soma as três últimas faixas, incluindo a de 5 a 10 minutos, que não serve.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa turma de 12 meninas e 18 meninos, 8 meninas e 6 meninos usam óculos. Que porcentagem da turma usa óculos?",
    opcoes: [
      "≈ 66,7%",
      "≈ 33,3%",
      "≈ 46,7%",
      "14%",
      "50%",
    ],
    correta: 2,
    explicacao:
      "Numa tabela de dupla entrada, o total de quem usa óculos é 8 + 6 = 14, e o total da turma, 12 + 18 = 30. A porcentagem é 14/30 ≈ 46,7%. É o total da coluna de quem usa óculos dividido pelo total geral, porque a pergunta é sobre a turma inteira.\n\n66,7% é a porcentagem entre as meninas, 8/12. 33,3% é a porcentagem entre os meninos, 6/18. 14% lê a contagem como porcentagem. E 50% supõe metade sem fazer a conta.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa com 50 clientes, 20 compraram na loja física e 30 pelo site. Ficaram satisfeitos 15 clientes da loja e 18 do site. Entre os clientes do site, que porcentagem ficou satisfeita?",
    opcoes: [
      "36%",
      "≈ 54,5%",
      "60%",
      "66%",
      "75%",
    ],
    correta: 2,
    explicacao:
      "A pergunta fixa o grupo de referência: os 30 clientes do site. Destes, 18 ficaram satisfeitos, e 18/30 = 0,6, ou 60%. Numa tabela de dupla entrada, o denominador pode ser o total da linha, o da coluna ou o total geral, e cada escolha responde a uma pergunta diferente.\n\n36% divide pelo total geral, 18/50. 54,5% responde a outra pergunta: entre os satisfeitos, que fração comprou pelo site, 18/33. 66% é a porcentagem de satisfeitos no total, 33/50. E 75% é a porcentagem de satisfeitos na loja física, 15/20.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Qual destas sequências não pode ser a coluna de frequências acumuladas de uma tabela de frequências?",
    opcoes: [
      "3, 8, 8, 12",
      "0, 5, 9, 12",
      "3, 8, 6, 12",
      "3, 3, 3, 12",
      "1, 2, 3, 4",
    ],
    correta: 2,
    explicacao:
      "A frequência acumulada soma as frequências até cada linha, e frequências nunca são negativas. Por isso, a coluna das acumuladas nunca diminui de uma linha para a seguinte: pode crescer, ou ficar igual quando uma classe está vazia. Em 3, 8, 6, 12, a queda de 8 para 6 exigiria uma frequência igual a −2.\n\nAs outras sequências são possíveis. Em 3, 8, 8, 12, a terceira classe está vazia. Em 0, 5, 9, 12, a vazia é a primeira. Em 3, 3, 3, 12, a segunda e a terceira estão vazias. E 1, 2, 3, 4 tem uma observação por classe.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "As classes [0, 5), [5, 10), [10, 15) e [15, 20) têm frequências 3, 7, 6 e 4. Quantos valores são menores que 10?",
    opcoes: [
      "7",
      "16",
      "10",
      "3",
      "13",
    ],
    correta: 2,
    explicacao:
      "Os valores menores que 10 estão nas classes [0, 5) e [5, 10), porque a segunda é aberta em 10. A soma é 3 + 7 = 10: é a frequência acumulada até a segunda classe. Como 10 coincide com um limite de classe, a resposta sai exata, sem precisar estimar como os dados se espalham dentro das classes.\n\n7 fica só com a segunda classe. 16 acumula até a terceira, incluindo valores de 10 a 15. 3 fica só com a primeira. E 13 soma a primeira e a terceira, sem motivo.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Num histograma com classes de mesma amplitude, o que representa a barra mais alta?",
    opcoes: [
      "A classe de maior amplitude",
      "A classe que contém a média",
      "A classe de maior frequência",
      "A classe que contém a mediana",
      "A última classe da tabela",
    ],
    correta: 2,
    explicacao:
      "Com classes de mesma largura, a altura de cada barra é proporcional à frequência da classe. A barra mais alta é a classe de maior frequência, a classe modal. Com classes de larguras diferentes, seria preciso usar a densidade, frequência dividida pela amplitude.\n\nA amplitude é igual para todas as classes, por hipótese. A classe da média e a da mediana podem ser outras, como numa distribuição assimétrica. E a última classe só é a mais alta por coincidência.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Uma pesquisa agrupou idades nas classes [10, 20), [20, 30) e [30, 40), com frequências 6, 10 e 4. Usando os pontos médios, qual é a idade média estimada?",
    opcoes: [
      "25",
      "≈ 6,67",
      "24",
      "20",
      "19",
    ],
    correta: 2,
    explicacao:
      "Em dados agrupados, cada classe é representada pelo ponto médio: 15, 25 e 35. A média é ponderada pelas frequências: (6 · 15 + 10 · 25 + 4 · 35)/20 = (90 + 250 + 140)/20 = 480/20 = 24. É uma estimativa: supõe que, dentro de cada classe, os valores se equilibrem em torno do ponto médio.\n\n25 é a média simples dos pontos médios, sem pesar pelas frequências. 6,67 é a média das frequências, 20/3, que não é uma idade. 20 é o total de observações. E 19 usa os limites inferiores das classes no lugar dos pontos médios.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "As durações de 30 ligações, em minutos, foram agrupadas nas classes [0, 4), [4, 8), [8, 12) e [12, 16), com frequências 4, 8, 12 e 6. Interpolando dentro da classe mediana, qual é a mediana estimada?",
    opcoes: [
      "8 minutos",
      "12 minutos",
      "9 minutos",
      "≈ 8,7 minutos",
      "5 minutos",
    ],
    correta: 2,
    explicacao:
      "Com 30 ligações, a mediana deixa 15 abaixo dela. As acumuladas são 4, 12, 24 e 30: a 15ª posição cai em [8, 12), que começa com 12 observações abaixo. Faltam 3 das 12 observações da classe, um quarto dela, e a interpolação dá 8 + (3/12) · 4 = 9 minutos.\n\n8 e 12 são os limites da classe mediana. 8,7 é a média estimada pelos pontos médios, outra medida. E 5 usa na fórmula a acumulada da própria classe, 24, no lugar da anterior, 12: 8 + (15 − 24)/12 · 4 = 5.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "A classe [0, 10) tem 20 observações e a classe [10, 30) tem 30. Qual delas tem maior densidade de frequência, observações por unidade de amplitude?",
    opcoes: [
      "[10, 30), com 1,5 por unidade",
      "As duas têm a mesma densidade",
      "[0, 10), com 2 por unidade",
      "[10, 30), por ter mais observações",
      "Não dá para comparar",
    ],
    correta: 2,
    explicacao:
      "A densidade é a frequência dividida pela amplitude: 20/10 = 2 para [0, 10) e 30/20 = 1,5 para [10, 30). A primeira classe é a mais densa, embora tenha menos observações. Num histograma com classes de larguras diferentes, as alturas das barras devem ser as densidades.\n\nA densidade de [10, 30) é menor, 1,5. As duas não são iguais. Ter mais observações não basta, porque a classe é o dobro mais larga. E dá para comparar, sim, dividindo pela amplitude.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Se todas as frequências absolutas de uma tabela forem multiplicadas por 2, o que acontece com as frequências relativas?",
    opcoes: [
      "Dobram",
      "Caem pela metade",
      "Continuam as mesmas",
      "Passam a somar 2",
      "Só a maior delas dobra",
    ],
    correta: 2,
    explicacao:
      "A frequência relativa de cada linha é fᵢ/n. Multiplicando todas as frequências por 2, o total também dobra, e cada relativa vira 2fᵢ/2n = fᵢ/n: nada muda. Por isso a frequência relativa descreve a forma da distribuição, independentemente do tamanho da amostra, e permite comparar pesquisas de tamanhos diferentes.\n\nDobrar ou cair pela metade ignoraria que o total também dobra. As relativas continuam somando 1, e não 2. E nenhuma linha muda de peso em relação às outras.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa empresa, 70% dos salários são menores que R$ 3.000 e 85% são menores que R$ 4.000. Que porcentagem dos salários está entre R$ 3.000 e R$ 4.000?",
    opcoes: [
      "85%",
      "70%",
      "15%",
      "155%",
      "30%",
    ],
    correta: 2,
    explicacao:
      "As duas informações são frequências relativas acumuladas. A diferença entre elas dá a faixa intermediária: 85% − 70% = 15% dos salários estão entre R$ 3.000 e R$ 4.000.\n\n85% é a porcentagem abaixo de R$ 4.000, e inclui os de menos de R$ 3.000. 70% é a porcentagem abaixo de R$ 3.000. 155% soma as acumuladas, passando de 100%. E 30% é a porcentagem acima de R$ 3.000.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Os dados de uma pesquisa vão de 10 a 49, e as classes, na forma [a, b), terão amplitude 8, começando em 10. Quantas classes são necessárias para cobrir todos os dados?",
    opcoes: [
      "8",
      "39",
      "4",
      "5",
      "6",
    ],
    correta: 3,
    explicacao:
      "As classes [10, 18), [18, 26), [26, 34), [34, 42) e [42, 50) cobrem de 10 até pouco antes de 50, e o maior dado, 49, cai na última. Com 4 classes, a cobertura pararia antes de 42, deixando de fora os dados de 42 a 49. Em geral, divide-se a amplitude total pela amplitude de classe, 39/8 ≈ 4,9, e arredonda-se para cima.\n\n8 é a amplitude de cada classe. 39 é a amplitude total dos dados. 4 trunca 4,9 em vez de arredondar para cima. E 6 acrescenta uma classe desnecessária.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Num polígono de frequências, qual ponto representa a classe [10, 20), que tem frequência 7?",
    opcoes: [
      "Pelo ponto (10, 7)",
      "Pelo ponto (20, 7)",
      "Pelo ponto (7, 15)",
      "Pelo ponto (15, 7)",
      "Pelo ponto (15, 10)",
    ],
    correta: 3,
    explicacao:
      "O polígono de frequências liga pontos cuja abscissa é o ponto médio de cada classe e cuja ordenada é a frequência. Para [10, 20), o ponto médio é (10 + 20)/2 = 15, e o ponto do polígono é (15, 7). Costuma-se fechar o polígono no eixo horizontal, com classes de frequência zero antes da primeira e depois da última.\n\n(10, 7) e (20, 7) usam os limites da classe, e não o meio. (7, 15) troca os eixos. E (15, 10) usa a amplitude da classe como altura.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Os dados 3, 7, 12, 15, 18, 22, 25, 28, 31 e 35 são agrupados nas classes [0, 10), [10, 20), [20, 30) e [30, 40). Qual é a frequência absoluta da classe [10, 20)?",
    opcoes: [
      "2",
      "4",
      "1",
      "3",
      "5",
    ],
    correta: 3,
    explicacao:
      "Os valores com 10 ≤ x < 20 são 12, 15 e 18: três observações. As outras classes ficam com 2 (3 e 7), 3 (22, 25 e 28) e 2 (31 e 35), somando 10. O critério [a, b) decide os casos de fronteira: um 20, se houvesse, iria para [20, 30).\n\n2 é a frequência das classes extremas. 4 inclui um valor a mais, como o 22. 1 conta só um dos valores. E 5 é a frequência acumulada até [10, 20), que inclui também o 3 e o 7.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa tabela, uma classe tem frequência relativa 0,125 e frequência absoluta 5. Qual é o total de observações?",
    opcoes: [
      "5",
      "0,625",
      "8",
      "40",
      "125",
    ],
    correta: 3,
    explicacao:
      "A frequência relativa é fᵢ/n, e então n = fᵢ/0,125 = 5/0,125 = 40. Conferindo: 5/40 = 0,125. A mesma relação serve para qualquer linha: com a frequência relativa e a absoluta de uma única classe, recupera-se o tamanho da amostra inteira.\n\n5 é a frequência absoluta da classe. 0,625 multiplica em vez de dividir, 5 · 0,125. 8 é o inverso de 0,125: diz quantas vezes a classe cabe no total, e não o total. E 125 lê a relativa sem a vírgula.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "As frequências acumuladas de uma tabela são 4, 10, 18, 24 e 30. Qual classe tem a maior frequência absoluta?",
    opcoes: [
      "A quinta, com 30",
      "A quarta, com 24",
      "A segunda, com 6",
      "A terceira, com 8",
      "A primeira, com 4",
    ],
    correta: 3,
    explicacao:
      "As frequências simples são as diferenças entre acumuladas consecutivas: 4, 10 − 4 = 6, 18 − 10 = 8, 24 − 18 = 6 e 30 − 24 = 6. A maior é a da terceira classe, 8. A maior acumulada é sempre a da última classe, e isso não diz nada sobre qual classe tem mais observações.\n\nA quinta tem acumulada 30, mas frequência simples 6. A quarta tem acumulada 24, e simples 6. A segunda tem 6. E a primeira tem 4, a menor de todas.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa tabela, as porcentagens das categorias, arredondadas para inteiros, somam 101%. O que isso indica?",
    opcoes: [
      "Um erro de contagem",
      "Um dado contado duas vezes",
      "Uma frequência negativa",
      "O efeito dos arredondamentos",
      "Uma categoria faltando",
    ],
    correta: 3,
    explicacao:
      "Cada porcentagem arredondada pode ficar até meio ponto acima ou abaixo do valor exato, e os erros podem se acumular na mesma direção. Com três categorias de 1, 1 e 4 casos em 6, as porcentagens exatas são 16,7%, 16,7% e 66,7%, que viram 17%, 17% e 67%, somando 101%, sem erro nenhum na tabela.\n\nUm erro de contagem ou um dado duplicado mudaria as frequências absolutas, e não só a soma das porcentagens. Frequências negativas não existem. E uma categoria faltando faria a soma ficar abaixo de 100%.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Numa tabela de notas, 5 tem frequência 3, 6 tem 7, 7 tem 9, 8 tem 6 e 9 tem 5. Quantos alunos tiraram de 6 a 8, inclusive?",
    opcoes: [
      "15",
      "16",
      "13",
      "22",
      "30",
    ],
    correta: 3,
    explicacao:
      "Somam-se as frequências das notas 6, 7 e 8: 7 + 9 + 6 = 22 alunos. O total da turma é 3 + 7 + 9 + 6 + 5 = 30, e os outros 8 tiraram 5 ou 9. Como a pergunta inclui os extremos, as notas 6 e 8 entram na soma junto com o 7.\n\n15 esquece a nota 6 e soma só 9 + 6. 16 esquece a nota 8 e soma só 7 + 9. 13 esquece a nota 7 e soma só 7 + 6. E 30 é a turma inteira, incluindo as notas 5 e 9.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Num campeonato, 3 partidas terminaram sem gols, 5 tiveram 1 gol, 8 tiveram 2 gols e 4 tiveram 3 gols. Qual é a média de gols por partida?",
    opcoes: [
      "1,5",
      "5",
      "2",
      "1,65",
      "33",
    ],
    correta: 3,
    explicacao:
      "Cada valor é multiplicado pela sua frequência: 0 · 3 + 1 · 5 + 2 · 8 + 3 · 4 = 0 + 5 + 16 + 12 = 33 gols, em 3 + 5 + 8 + 4 = 20 partidas. A média é 33/20 = 1,65 gol por partida. É a média ponderada pelas frequências, que equivale a somar os 20 valores um a um.\n\n1,5 é a média simples dos valores 0, 1, 2 e 3, sem pesar pelas frequências. 5 é a média das frequências, 20/4. 2 é a moda, o número de gols mais frequente. E 33 é o total de gols, sem dividir pelo número de partidas.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Quando dados brutos são resumidos numa tabela de classes, qual destas informações deixa de estar disponível?",
    opcoes: [
      "O número total de observações",
      "A frequência de cada classe",
      "A frequência acumulada até cada limite",
      "Os valores individuais de cada observação",
      "A proporção de dados em cada classe",
    ],
    correta: 3,
    explicacao:
      "A tabela guarda quantas observações caem em cada classe, mas não quais são. Os conjuntos 1, 3, 12, 14, 17, 25 e 2, 4, 11, 15, 16, 29, por exemplo, geram a mesma tabela com as classes [0, 10), [10, 20) e [20, 30). Por isso a média e a mediana calculadas pela tabela são estimativas.\n\nO total, as frequências de cada classe, as acumuladas e as proporções continuam na tabela: são justamente o que ela registra, e dois conjuntos com a mesma tabela coincidem em todas elas.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "media",
    enunciado:
      "Na escola X, 12 dos 30 inscritos numa olimpíada foram premiados; na escola Y, 15 dos 50 inscritos. Qual escola teve a maior proporção de premiados?",
    opcoes: [
      "A escola Y, com 30%",
      "A escola Y, por ter 15 premiados",
      "As duas, com a mesma proporção",
      "A escola X, com 40%",
      "Nenhuma: grupos de tamanhos diferentes não se comparam",
    ],
    correta: 3,
    explicacao:
      "Para comparar grupos de tamanhos diferentes, usam-se frequências relativas. Na escola X, 12/30 = 0,4, ou 40%; na escola Y, 15/50 = 0,3, ou 30%. A escola X tem a maior proporção de premiados, embora tenha menos premiados em número absoluto.\n\nA escola Y tem 30%, abaixo dos 40% da X. Ter 15 premiados não basta, porque a escola Y inscreveu mais alunos. As proporções são diferentes. E as frequências relativas existem justamente para permitir essa comparação.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "Numa empresa, 60% dos funcionários são homens. Têm pós-graduação 30% dos homens e 50% das mulheres. Entre os pós-graduados, que porcentagem são mulheres?",
    opcoes: [
      "50%",
      "40%",
      "20%",
      "38%",
      "≈ 52,6%",
    ],
    correta: 4,
    explicacao:
      "Pensando em 100 funcionários: 60 homens, dos quais 18 pós-graduados, e 40 mulheres, das quais 20 pós-graduadas. Os pós-graduados somam 38, e as mulheres são 20/38 ≈ 52,6% deles. A tabela de dupla entrada organiza as contas.\n\n50% é a porcentagem de pós-graduadas entre as mulheres, a pergunta inversa. 40% é a porcentagem de mulheres na empresa. 20% é a porcentagem de mulheres pós-graduadas no total. E 38% é a porcentagem de pós-graduados no total.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "As classes [0, 2), [2, 6) e [6, 10) têm frequências 10, 20 e 10. Num histograma com área proporcional à frequência, qual é a altura, em observações por unidade, da barra de [2, 6)?",
    opcoes: [
      "20",
      "10",
      "2,5",
      "4",
      "5",
    ],
    correta: 4,
    explicacao:
      "Com classes de larguras diferentes, a altura é a densidade: frequência dividida pela amplitude. Para [2, 6): 20/4 = 5 observações por unidade. As outras barras têm alturas 10/2 = 5 e 10/4 = 2,5. Assim, a área de cada barra, altura vezes largura, é a frequência.\n\n20 é a frequência, que distorceria o gráfico por usar uma classe mais larga. 10 é a frequência das outras classes. 2,5 é a altura da última barra. E 4 é a amplitude de [2, 6).",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "Os valores 1, 2 e 3 têm frequências a, 5 e b. Sabendo que há 20 observações e que a média é 2,25, quais são a e b?",
    opcoes: [
      "a = 10 e b = 5",
      "a = 7 e b = 8",
      "a = 5 e b = 5",
      "a = 15 e b = 0",
      "a = 5 e b = 10",
    ],
    correta: 4,
    explicacao:
      "O total dá a + 5 + b = 20, ou a + b = 15. A média dá (a + 10 + 3b)/20 = 2,25, ou a + 3b = 35. Subtraindo as equações: 2b = 20, b = 10, e a = 5. Conferindo: (5 + 10 + 30)/20 = 45/20 = 2,25. Duas frequências desconhecidas pedem duas informações independentes sobre a tabela.\n\na = 10 e b = 5 troca os valores e dá média 1,75. a = 7 e b = 8 dá 2,05. a = 5 e b = 5 dá só 15 observações. E a = 15 e b = 0 dá média 1,25.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "As frequências relativas acumuladas das cinco classes de uma tabela são 0,15; 0,40; 0,70; 0,85 e 1. Se a quarta classe tem 12 observações, qual é o total de observações?",
    opcoes: [
      "≈ 14,1",
      "60",
      "180",
      "100",
      "80",
    ],
    correta: 4,
    explicacao:
      "A frequência relativa da quarta classe é a diferença entre acumuladas: 0,85 − 0,70 = 0,15. Como 0,15 · n = 12, o total é n = 12/0,15 = 80. Conferindo: as classes têm 12, 20, 24, 12 e 12 observações, e as acumuladas relativas voltam a ser 0,15; 0,40; 0,70; 0,85 e 1.\n\n14,1 divide 12 pela acumulada, 0,85, e não pela frequência da classe. 60 supõe cinco classes iguais, 5 · 12. 180 lê 0,15 como 15 e multiplica. E 100 supõe, sem motivo, um total de 100.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "As classes [0, 10), [10, 20), [20, 30) e [30, 40) têm frequências 10, 30, 40 e 20. Supondo os dados uniformes em cada classe, quantos valores, aproximadamente, são menores que 25?",
    opcoes: [
      "40",
      "80",
      "50",
      "20",
      "60",
    ],
    correta: 4,
    explicacao:
      "As duas primeiras classes, inteiras, têm 10 + 30 = 40 valores. Na terceira, de 20 a 30, o 25 está no meio, e a uniformidade dá metade dos 40 valores dessa classe abaixo dele: 20. O total estimado é 40 + 20 = 60. É a leitura da ogiva, a curva de frequências acumuladas.\n\n40 conta só as classes inteiras. 80 inclui a terceira classe inteira. 50 é a metade das observações, sem conta. E 20 é só a parte da terceira classe.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "Numa pesquisa com 250 pessoas, a frequência relativa de respostas sim é 0,36. Depois, mais 50 pessoas respondem, todas sim. Qual é a nova frequência relativa de sim?",
    opcoes: [
      "0,36",
      "0,56",
      "≈ 0,533",
      "0,5",
      "≈ 0,467",
    ],
    correta: 4,
    explicacao:
      "Na primeira rodada, os sim são 0,36 · 250 = 90. Com os 50 novos, passam a 140, num total de 300. A nova frequência relativa é 140/300 ≈ 0,467. As frequências relativas não se somam diretamente quando os totais mudam; é preciso voltar às contagens.\n\n0,36 ignora as novas respostas. 0,56 soma 0,36 com 50/250 = 0,2. 0,533 é a fração de não, 160/300. E 0,5 é um palpite.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "As frequências relativas das quatro classes de uma tabela são 0,2; x; 2x e 0,2. Quanto vale x?",
    opcoes: [
      "0,3",
      "0,6",
      "0,15",
      "0,4",
      "0,2",
    ],
    correta: 4,
    explicacao:
      "As frequências relativas somam 1: 0,2 + x + 2x + 0,2 = 1, ou 3x = 0,6, e x = 0,2. As classes do meio ficam com 0,2 e 0,4, e a soma confere: 0,2 + 0,2 + 0,4 + 0,2 = 1. Tabelas com frequências escritas em função de uma incógnita se resolvem por essa condição, ou pela soma das absolutas igual a n.\n\n0,3 dá soma 1,3. 0,6 é o valor de 3x, sem dividir. 0,15 dá soma 0,85. E 0,4 é o valor de 2x.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "A turma A tem 20 alunos, dos quais 25% tiraram nota 7 ou mais; a turma B tem 30 alunos, com 40%. Juntando as duas, que porcentagem tirou 7 ou mais?",
    opcoes: [
      "32,5%",
      "65%",
      "17%",
      "40%",
      "34%",
    ],
    correta: 4,
    explicacao:
      "Voltando às contagens: 25% de 20 são 5 alunos, e 40% de 30 são 12. Juntas, as turmas têm 17 alunos com nota 7 ou mais, de 50: 17/50 = 34%. A média simples das porcentagens, 32,5%, só valeria com turmas do mesmo tamanho.\n\n32,5% ignora os tamanhos das turmas. 65% soma as porcentagens. 17% lê a contagem como porcentagem. E 40% fica só com a turma B.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "Numa pesquisa, as respostas sim e não representaram, exatamente, 37,5% e 62,5% dos entrevistados. Qual é o menor número possível de entrevistados?",
    opcoes: [
      "100",
      "16",
      "40",
      "3",
      "8",
    ],
    correta: 4,
    explicacao:
      "Se s pessoas disseram sim, s/n = 0,375 = 3/8, com s inteiro. A fração 3/8 já está simplificada, então n precisa ser múltiplo de 8, e o menor é 8: 3 disseram sim e 5 disseram não. Qualquer múltiplo de 8 também serve, como 16 ou 40.\n\n100 supõe que porcentagens vêm sempre de 100 pessoas. 16 e 40 são possíveis, mas não são os menores. E 3 é o número de respostas sim com 8 entrevistados, e não o total.",
  },
  {
    materia: "estatistica",
    tema: "Tabelas de frequência",
    dificuldade: "dificil",
    enunciado:
      "Uma variável foi agrupada em três classes de amplitude 10, a partir de zero, com 5, 10 e 5 observações. Representando cada classe pelo seu ponto médio, qual é a variância populacional?",
    opcoes: [
      "≈ 52,6",
      "≈ 7,07",
      "100",
      "15",
      "50",
    ],
    correta: 4,
    explicacao:
      "Os pontos médios são 5, 15 e 25, e a média ponderada é (5 · 5 + 10 · 15 + 5 · 25)/20 = 300/20 = 15. A variância populacional pondera os quadrados dos desvios: [5 · (5 − 15)² + 10 · 0² + 5 · (25 − 15)²]/20 = (500 + 0 + 500)/20 = 50.\n\n52,6 divide por 19, que seria a variância amostral. 7,07 é a raiz de 50, o desvio padrão, e não a variância. 100 é o quadrado do desvio de uma classe extrema, sem ponderar pelas frequências. E 15 é a média.",
  },
];
