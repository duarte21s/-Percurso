/* Técnicas de amostragem (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 38 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__tecnicas-de-amostragem.mjs);
   12 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__tecnicas-de-amostragem.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Na amostragem aleatória simples de n elementos, qual afirmação é verdadeira?",
    opcoes: [
      "Os primeiros da lista têm mais chance",
      "Cada grupo entra com a mesma quantidade",
      "Toda amostra de n elementos tem a mesma chance",
      "O pesquisador escolhe os mais representativos",
      "Só entram os elementos que se oferecem",
    ],
    correta: 2,
    explicacao:
      "Na amostragem aleatória simples, o sorteio dá a todas as amostras possíveis de tamanho n a mesma probabilidade, e, em consequência, cada elemento tem a mesma chance de entrar, n/N. É o modelo de referência para as fórmulas de erro padrão e margem de erro.\n\nNenhuma posição na lista é favorecida. Garantir a mesma quantidade por grupo é característica da estratificação ou das cotas. A escolha do pesquisador tornaria a amostra intencional. E quem se oferece forma uma amostra voluntária, não aleatória.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Numa lista de 1.200 clientes, quer-se uma amostra sistemática de 60. Qual deve ser o intervalo de seleção?",
    opcoes: [
      "60",
      "1.200",
      "72.000",
      "20",
      "0,05",
    ],
    correta: 3,
    explicacao:
      "O intervalo é k = N/n = 1.200/60 = 20: sorteia-se um ponto de partida entre 1 e 20 e, a partir dele, toma-se um cliente a cada 20 posições. Assim se obtêm exatamente 60 clientes, espalhados pela lista inteira, e cada cliente tem chance 1/20 de ser incluído, a mesma da fração amostral.\n\n60 é o tamanho da amostra. 1.200 é o tamanho da população. 72.000 multiplica os dois. E 0,05 é a fração amostral, n/N, e não o intervalo.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Uma escola tem 600 alunos no turno da manhã e 400 no da tarde. Numa amostra estratificada proporcional de 50 alunos, quantos devem vir de cada turno?",
    opcoes: [
      "25 e 25",
      "600 e 400",
      "20 e 30",
      "3 e 2",
      "30 e 20",
    ],
    correta: 4,
    explicacao:
      "Na alocação proporcional, cada estrato recebe a mesma fração que tem na população. A manhã tem 600/1.000 = 60% dos alunos, e a tarde, 40%. Então a manhã contribui com 0,6 · 50 = 30 alunos, e a tarde, com 0,4 · 50 = 20. Com essa alocação, cada aluno da escola tem a mesma chance, 5%, de ser sorteado.\n\n25 e 25 é a alocação igual, que não segue os tamanhos. 600 e 400 são os tamanhos dos turnos. 20 e 30 inverte os turnos. E 3 e 2 é só a razão entre eles.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Para estudar os alunos de uma rede de ensino, sorteiam-se 10 turmas, e todos os alunos dessas turmas são entrevistados. Que técnica de amostragem é essa?",
    opcoes: [
      "Amostragem estratificada",
      "Amostragem sistemática",
      "Amostragem por conveniência",
      "Amostragem por conglomerados",
      "Amostragem por cotas",
    ],
    correta: 3,
    explicacao:
      "As turmas são grupos naturais de alunos, os conglomerados. Sorteia-se um conjunto de turmas, e todos os alunos das turmas sorteadas entram na amostra: é a amostragem por conglomerados em um estágio. Ela barateia a coleta, porque concentra as entrevistas em poucos lugares.\n\nNa estratificada, seriam sorteados alunos dentro de todos os grupos. Na sistemática, um a cada k de uma lista. Na de conveniência, os mais fáceis de alcançar, sem sorteio. E nas cotas, preenchem-se números fixos por grupo, sem sorteio.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Um pesquisador entrevista as pessoas que passam num shopping numa tarde de sábado, até completar 200 entrevistas. Que tipo de amostra é essa?",
    opcoes: [
      "Aleatória simples",
      "Por conveniência",
      "Estratificada",
      "Sistemática",
      "Por conglomerados",
    ],
    correta: 1,
    explicacao:
      "Os entrevistados são os que estavam à mão, no lugar e na hora escolhidos, sem sorteio: é uma amostra por conveniência, não probabilística. Ela não representa a população, porque exclui quem não frequenta shoppings ou não estava lá naquela tarde, e não permite calcular a margem de erro.\n\nA aleatória simples exigiria sortear da população inteira. A estratificada, sortear dentro de grupos. A sistemática, um a cada k de uma lista. E a por conglomerados, sortear grupos inteiros.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Uma pesquisa divide a população por faixa etária e sorteia, em cada faixa, um número de pessoas proporcional ao tamanho dela. Que técnica é essa?",
    opcoes: [
      "Amostragem estratificada proporcional",
      "Amostragem por conglomerados",
      "Amostragem por cotas",
      "Amostragem sistemática",
      "Amostragem por conveniência",
    ],
    correta: 0,
    explicacao:
      "Dividir a população em grupos, os estratos, e sortear dentro de cada um é amostragem estratificada; como o número sorteado em cada faixa é proporcional ao seu tamanho, a alocação é proporcional. Todos os estratos ficam representados, e a precisão costuma melhorar.\n\nNos conglomerados, sorteiam-se grupos inteiros, e não elementos dentro de todos os grupos. Nas cotas, o número por grupo é fixado, mas não há sorteio. A sistemática usa um intervalo fixo numa lista. E a de conveniência não tem sorteio.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Numa amostragem sistemática com intervalo 10, o ponto de partida sorteado foi o elemento 4. Quais elementos entram na amostra?",
    opcoes: [
      "4, 8, 12, 16, …",
      "10, 20, 30, 40, …",
      "4, 40, 400, …",
      "4, 14, 24, 34, …",
      "1, 11, 21, 31, …",
    ],
    correta: 3,
    explicacao:
      "A partir do ponto de partida, soma-se o intervalo repetidamente: 4, 4 + 10 = 14, 24, 34, e assim por diante, até o fim da lista. O sorteio do início, entre 1 e 10, é o único passo aleatório, e cada elemento da lista tem chance de 1/10.\n\n4, 8, 12… usa o ponto de partida como intervalo. 10, 20, 30… ignora o início sorteado. 4, 40, 400… multiplica em vez de somar. E 1, 11, 21… começa no 1, e não no 4 sorteado.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Como se chama a lista de todos os elementos da população da qual a amostra é sorteada?",
    opcoes: [
      "Estrato",
      "Conglomerado",
      "Cadastro, ou base de amostragem",
      "Parâmetro",
      "Censo",
    ],
    correta: 2,
    explicacao:
      "O cadastro, também chamado de base de amostragem, é a lista usada para o sorteio, como o registro de alunos de uma escola ou a relação de domicílios de um bairro. Se o cadastro deixar de fora parte da população, a amostra herda essa falha, um erro de cobertura que nenhum sorteio corrige.\n\nEstratos e conglomerados são grupos em que a população pode ser dividida. Parâmetro é uma medida da população. E censo é a observação de todos os elementos, e não a lista deles.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Numa amostragem sistemática com intervalo 20 e ponto de partida sorteado entre 1 e 20, qual é a chance de um elemento específico da lista ser incluído?",
    opcoes: [
      "20%",
      "5%",
      "2%",
      "50%",
      "0,5%",
    ],
    correta: 1,
    explicacao:
      "Cada elemento pertence a exatamente uma das 20 amostras sistemáticas possíveis, uma para cada ponto de partida. Como o ponto de partida é sorteado com chances iguais, a probabilidade de inclusão é 1/20 = 5%, a mesma da fração amostral. Embora cada elemento tenha 5% de chance, só 20 amostras diferentes são possíveis, muito menos que numa amostragem aleatória simples.\n\n20% lê o intervalo como porcentagem. 2% e 0,5% não saem da conta. E 50% supõe duas possibilidades, entrar ou não, igualmente prováveis.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Por que não se calcula a margem de erro de uma amostra por conveniência?",
    opcoes: [
      "A amostra é sempre pequena demais",
      "Não há probabilidades de seleção conhecidas",
      "A margem sempre dá zero",
      "O cálculo exige estratos",
      "A população é sempre desconhecida",
    ],
    correta: 1,
    explicacao:
      "A margem de erro se apoia nas probabilidades com que cada amostra pode ser sorteada. Numa amostra por conveniência, ninguém sabe essas probabilidades: alguns grupos têm chance alta de entrar, outros nenhuma. Sem esse modelo, a fórmula da margem não vale, e o erro pode incluir um viés de tamanho desconhecido.\n\nO problema não é o tamanho: amostras grandes por conveniência continuam sem base probabilística. A margem não é zero. Estratos não são exigidos. E a população pode ser bem conhecida, sem que isso resolva a falta de sorteio.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Uma população tem dois estratos, com 60% e 40% dos elementos. As médias amostrais nos estratos foram 10 e 20. Qual é a estimativa da média da população?",
    opcoes: [
      "14",
      "15",
      "30",
      "12",
      "16",
    ],
    correta: 0,
    explicacao:
      "A média estratificada pondera a média de cada estrato pela sua participação na população: 0,6 · 10 + 0,4 · 20 = 6 + 8 = 14. O estrato maior pesa mais, e a estimativa fica mais perto de 10 que de 20.\n\n15 é a média simples das duas médias, que ignora os tamanhos dos estratos. 30 soma as médias. 12 corresponderia a pesos 0,8 e 0,2, e 16, a pesos 0,4 e 0,6, trocados. A ponderação correta vem dos tamanhos dos estratos na população, e não dos tamanhos das amostras.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "facil",
    enunciado:
      "Numa lista numerada de 01 a 80, usa-se a sequência de números aleatórios 37, 92, 05, 37 e 64, descartando os valores fora da lista e as repetições. Quais são os três primeiros sorteados, em ordem?",
    opcoes: [
      "37, 5 e 64",
      "37, 92 e 5",
      "37, 5 e 37",
      "92, 5 e 64",
      "37, 64 e 5",
    ],
    correta: 0,
    explicacao:
      "Lendo a sequência: 37 entra; 92 é descartado, porque passa de 80; 05, isto é, 5, entra; o segundo 37 é descartado, porque já foi sorteado; e 64 entra. Os três primeiros são 37, 5 e 64, nessa ordem.\n\n37, 92 e 5 aceita um número fora da lista. 37, 5 e 37 repete o 37, o que não se faz num sorteio sem reposição. 92, 5 e 64 aceita o 92 e perde o 37. E 37, 64 e 5 muda a ordem de leitura.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Em que situação a amostragem estratificada dá estimativas mais precisas que uma amostragem aleatória simples do mesmo tamanho?",
    opcoes: [
      "Estratos parecidos entre si e variados por dentro",
      "Estratos homogêneos por dentro e diferentes entre si",
      "Estratos de tamanhos iguais",
      "Sempre, qualquer que seja a divisão",
      "Nunca: a aleatória simples é sempre melhor",
    ],
    correta: 1,
    explicacao:
      "A estratificação elimina da estimativa a variação entre os estratos, porque cada um é amostrado separadamente e ponderado pelo seu tamanho. O ganho é grande quando os estratos são internamente homogêneos e diferentes entre si, como faixas de renda numa pesquisa de consumo.\n\nCom estratos parecidos entre si, não há variação entre eles a eliminar, e o ganho some. O tamanho igual dos estratos não é o que importa. Uma divisão sem relação com a variável estudada não ajuda. E, com alocação proporcional, a estratificação praticamente nunca é pior.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Por que a amostragem por conglomerados costuma ser menos precisa que uma amostragem aleatória simples com o mesmo número de elementos?",
    opcoes: [
      "Os conglomerados são sorteados",
      "Há mais elementos na amostra",
      "A aleatória simples usa cadastro",
      "Elementos do mesmo grupo se parecem",
      "Os conglomerados são todos iguais",
    ],
    correta: 3,
    explicacao:
      "Elementos de um mesmo conglomerado, como moradores de um quarteirão ou alunos de uma turma, costumam ser parecidos entre si. Entrevistar muitos deles repete informação, e a amostra se comporta como se fosse menor. Com o mesmo número de entrevistas, a precisão fica abaixo da de uma amostra aleatória simples.\n\nO sorteio dos conglomerados não causa a perda. O número de elementos é o mesmo, por hipótese. O uso de cadastro não é a diferença relevante. E se os conglomerados fossem iguais entre si e variados por dentro, a perda seria pequena.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Qual é a principal vantagem prática da amostragem por conglomerados?",
    opcoes: [
      "Aumentar a precisão em relação à aleatória simples",
      "Eliminar a necessidade de sorteio",
      "Garantir todos os grupos na amostra",
      "Dispensar o planejamento",
      "Reduzir custos, concentrando a coleta em poucos grupos",
    ],
    correta: 4,
    explicacao:
      "Sorteando poucos grupos, como escolas ou quarteirões, as entrevistas ficam concentradas em poucos lugares, o que reduz deslocamentos e custos. Além disso, basta ter a lista dos grupos, e não de todos os elementos da população, que às vezes nem existe.\n\nA precisão costuma ser menor, e não maior, que a de uma aleatória simples do mesmo tamanho. O sorteio continua necessário, agora dos grupos. Nem todos os grupos entram: esse é o caso da estratificação. E o planejamento continua indispensável.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Para estimar as vendas diárias médias de uma loja, escolhe-se um dia a cada 7, a partir de uma segunda-feira sorteada. Qual é o problema dessa amostra sistemática?",
    opcoes: [
      "A amostra fica aleatória demais",
      "O intervalo 7 é pequeno demais",
      "Todos os dias sorteados caem no mesmo dia da semana",
      "Nenhum, pois o início foi sorteado",
      "A amostra fica maior que a população",
    ],
    correta: 2,
    explicacao:
      "Com intervalo 7, a amostra percorre sempre o mesmo dia da semana: começando numa segunda-feira, só entram segundas. Se as vendas variam ao longo da semana, com picos no fim de semana, a estimativa fica enviesada. É o perigo da periodicidade: um intervalo que coincide com um ciclo dos dados.\n\nO problema é o oposto de aleatoriedade demais. O tamanho do intervalo não é o defeito, e sim coincidir com o ciclo. O sorteio da segunda-feira de partida não resolve, porque todas as segundas se parecem. E a amostra continua bem menor que a população.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença essencial entre a amostragem por cotas e a amostragem estratificada?",
    opcoes: [
      "Nas cotas, os grupos têm tamanhos proporcionais",
      "Na estratificada, não há grupos",
      "Nas cotas, não há sorteio dentro dos grupos",
      "Nas cotas, a amostra é sempre maior",
      "Não há diferença",
    ],
    correta: 2,
    explicacao:
      "Nas duas, a população é dividida em grupos, e cada grupo recebe um número de elementos na amostra. Na estratificada, esses elementos são sorteados dentro de cada estrato; nas cotas, o entrevistador escolhe quem entrevistar até completar a cota, sem sorteio. Por isso as cotas são não probabilísticas e podem ter viés.\n\nAs cotas também costumam ser proporcionais: essa não é a diferença. A estratificada tem grupos, os estratos. O tamanho da amostra não distingue as técnicas. E a diferença, o sorteio, é decisiva.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Uma cidade tem 8.000 domicílios urbanos e 2.000 rurais. Sortearam-se 100 de cada, e as proporções com acesso à internet por fibra foram 20% e 50%. Qual é a estimativa para a cidade?",
    opcoes: [
      "35%",
      "70%",
      "20%",
      "26%",
      "50%",
    ],
    correta: 3,
    explicacao:
      "Com o mesmo número de domicílios sorteado em estratos de tamanhos diferentes, a amostra não é proporcional, e é preciso ponderar pelos tamanhos: os urbanos são 80% da cidade, e os rurais, 20%. A estimativa é 0,8 · 20% + 0,2 · 50% = 16% + 10% = 26%.\n\n35% é a média simples das duas proporções, que daria peso igual aos rurais, super-representados na amostra. 70% soma as proporções. 20% considera só os urbanos. E 50%, só os rurais.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Dois estratos têm o mesmo tamanho, mas desvios padrão 10 e 30. Pela alocação ótima de Neyman, proporcional ao tamanho vezes o desvio padrão, como dividir uma amostra de 80 elementos?",
    opcoes: [
      "20 e 60",
      "40 e 40",
      "60 e 20",
      "8 e 72",
      "30 e 50",
    ],
    correta: 0,
    explicacao:
      "Na alocação de Neyman, cada estrato recebe uma parte proporcional a Nₕ · σₕ. Com tamanhos iguais, a divisão segue os desvios padrão, 10 e 30, na razão 1 : 3: o primeiro estrato recebe 80 · 1/4 = 20, e o segundo, 80 · 3/4 = 60. O estrato mais variável precisa de mais observações para a mesma precisão.\n\n40 e 40 é a alocação proporcional, ótima só com desvios iguais. 60 e 20 inverte a lógica. 8 e 72 usa as variâncias, 100 e 900, em vez dos desvios. E 30 e 50 não sai de nenhuma regra.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Para estudar uma população difícil de localizar, como trabalhadores de um serviço informal, cada entrevistado indica outros participantes. Como se chama essa técnica?",
    opcoes: [
      "Amostragem estratificada",
      "Amostragem sistemática",
      "Amostragem aleatória simples",
      "Amostragem bola de neve",
      "Amostragem por conglomerados",
    ],
    correta: 3,
    explicacao:
      "Na bola de neve, a amostra cresce por indicações: os primeiros participantes apontam outros, que apontam outros. É útil quando não existe cadastro e os membros se conhecem entre si, mas é não probabilística: pessoas com muitos contatos têm mais chance de entrar, e grupos isolados podem ficar de fora.\n\nAs demais técnicas exigem sorteio a partir de um cadastro ou de grupos definidos, justamente o que falta nesse tipo de população.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Uma rede tem 100 escolas com 200 alunos cada. Sorteiam-se 20 escolas e, em cada uma, 15 alunos. Qual é a probabilidade de um aluno específico entrar na amostra?",
    opcoes: [
      "20%",
      "7,5%",
      "27,5%",
      "1,5%",
      "0,15%",
    ],
    correta: 3,
    explicacao:
      "O aluno precisa que sua escola seja sorteada, com probabilidade 20/100 = 0,2, e depois ser sorteado entre os 200 da escola, com probabilidade 15/200 = 0,075. Como os dois sorteios se encadeiam, a probabilidade é o produto: 0,2 · 0,075 = 0,015, ou 1,5%. Conferindo: 300 alunos entre 20.000 dão os mesmos 1,5%.\n\n20% é só o primeiro estágio. 7,5% é só o segundo. 27,5% soma as duas probabilidades. E 0,15% erra a casa decimal.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Uma pesquisa sorteia números de telefone fixo para estimar hábitos de toda a população. Qual é o principal problema?",
    opcoes: [
      "Quem não tem telefone fixo fica fora do cadastro",
      "O sorteio de números é sempre enviesado",
      "A amostra fica grande demais",
      "Telefones impedem perguntas abertas",
      "Não há problema algum",
    ],
    correta: 0,
    explicacao:
      "O cadastro, a lista de telefones fixos, não cobre toda a população: quem só tem celular, ou nenhum telefone, não tem chance de ser sorteado. Se esses grupos têm hábitos diferentes, a estimativa fica enviesada, um erro de cobertura que o sorteio não corrige.\n\nO sorteio em si pode ser perfeito. O tamanho da amostra não é o problema. O meio de coleta não impede perguntas abertas. E há, sim, um problema sério de cobertura.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Numa amostra estratificada com alocação proporcional, a média simples de todos os elementos da amostra estima corretamente a média da população?",
    opcoes: [
      "Não: é sempre preciso ponderar",
      "Sim: todos os elementos têm o mesmo peso",
      "Só se os estratos tiverem médias iguais",
      "Só se houver dois estratos",
      "Não: a média simples é sempre enviesada",
    ],
    correta: 1,
    explicacao:
      "Com alocação proporcional, cada estrato tem na amostra a mesma fração que tem na população, e cada elemento representa o mesmo número de elementos da população. A média ponderada pelos tamanhos dos estratos coincide com a média simples da amostra: o plano é autoponderado.\n\nA ponderação explícita só é necessária quando a alocação não é proporcional. A igualdade vale mesmo com médias diferentes nos estratos. O número de estratos não importa. E, nesse plano, a média simples não é enviesada.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Numa lista de 1.200 elementos, uma amostra sistemática usa intervalo 20 e ponto de partida sorteado entre 1 e 20. Quantas amostras diferentes são possíveis?",
    opcoes: [
      "60",
      "1.200",
      "1",
      "24.000",
      "20",
    ],
    correta: 4,
    explicacao:
      "A amostra fica inteiramente determinada pelo ponto de partida: cada início, de 1 a 20, gera uma amostra diferente de 60 elementos. Há, portanto, só 20 amostras possíveis, número muito menor que o de uma aleatória simples de 60 elementos, que seria enorme. Por isso a sistemática é simples de executar, mas sensível a padrões periódicos na lista.\n\n60 é o tamanho de cada amostra. 1.200 é o tamanho da população. 1 ignora o sorteio do início. E 24.000 multiplica 1.200 por 20.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Para estimar a renda média das famílias de uma cidade, qual destas variáveis seria mais útil para formar os estratos?",
    opcoes: [
      "A cor dos olhos do chefe da família",
      "O dia do mês do nascimento",
      "A letra inicial do sobrenome",
      "O bairro, que costuma se associar à renda",
      "O último dígito do telefone",
    ],
    correta: 3,
    explicacao:
      "A estratificação só aumenta a precisão se os estratos forem diferentes entre si quanto à variável estudada. Bairros costumam concentrar famílias de renda parecida, e renda média diferente de um bairro para outro: estratos internamente homogêneos e distintos entre si.\n\nCor dos olhos, dia do nascimento, inicial do sobrenome e dígito do telefone não se relacionam com a renda: estratos formados por eles teriam médias parecidas, e a estratificação não traria ganho.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Três estratos têm 523, 311 e 166 elementos. Para uma amostra proporcional de 100, arredondando de modo que a soma dê exatamente 100, quantos elementos vêm de cada estrato?",
    opcoes: [
      "33, 33 e 34",
      "52, 31 e 16",
      "52, 31 e 17",
      "50, 30 e 20",
      "523, 311 e 166",
    ],
    correta: 2,
    explicacao:
      "As cotas exatas são 52,3, 31,1 e 16,6, que somam 100. Arredondando para o inteiro mais próximo, obtêm-se 52, 31 e 17, que também somam 100. Quando o arredondamento simples não fecha a soma, ajusta-se o estrato com a maior parte fracionária.\n\n33, 33 e 34 divide a amostra igualmente, sem proporção. 52, 31 e 16 trunca todos os valores e soma só 99. 50, 30 e 20 arredonda grosseiramente e distorce as proporções. E 523, 311 e 166 são os tamanhos dos estratos.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Se a lista usada numa amostragem sistemática estiver ordenada pela própria variável estudada, como tende a ser a precisão, em comparação com uma aleatória simples de mesmo tamanho?",
    opcoes: [
      "Sempre menor",
      "Nula, porque a amostra fica enviesada",
      "Igual em qualquer caso",
      "Impossível de avaliar",
      "Maior, como numa estratificação implícita",
    ],
    correta: 4,
    explicacao:
      "Com a lista ordenada, a amostra sistemática percorre todas as faixas de valores, pegando um elemento de cada trecho de k posições. É como uma estratificação em que cada trecho é um estrato, e a média amostral varia menos que numa aleatória simples. O perigo está em listas com padrão periódico, e não em listas ordenadas.\n\nA precisão não fica menor nesse caso. A amostra não é enviesada, porque o início é sorteado. A igualdade vale para listas em ordem aleatória. E a precisão pode ser avaliada por simulação ou por fórmulas.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Na amostragem por cotas, o entrevistador escolhe livremente quem entrevistar até completar o número exigido em cada grupo. Qual é a consequência?",
    opcoes: [
      "É equivalente à estratificada",
      "Garante representatividade perfeita",
      "É não probabilística e pode ter viés de seleção",
      "Permite calcular a margem de erro exata",
      "Elimina o erro amostral",
    ],
    correta: 2,
    explicacao:
      "As cotas garantem a composição da amostra por sexo, idade ou outros grupos, mas dentro de cada cota o entrevistador escolhe quem abordar. Ele tende a escolher pessoas mais acessíveis, que podem diferir das demais na variável estudada, e a estimativa fica enviesada. Sem sorteio, não há probabilidades de seleção conhecidas.\n\nA falta de sorteio a separa da estratificada. Composição correta por grupos não garante representatividade. A margem de erro exige amostragem probabilística. E nenhum plano elimina o erro amostral.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Numa urna com 100 fichas, sorteiam-se 10 com reposição. Qual é, aproximadamente, a probabilidade de alguma ficha sair repetida?",
    opcoes: [
      "10%",
      "0%",
      "≈ 63%",
      "1%",
      "≈ 37%",
    ],
    correta: 4,
    explicacao:
      "A chance de as 10 fichas serem todas diferentes é (100 · 99 · 98 · … · 91)/100¹⁰ ≈ 0,63. Logo, a chance de alguma repetição é cerca de 1 − 0,63 = 0,37. É o mesmo raciocínio do problema dos aniversários: repetições surgem mais cedo do que a intuição sugere.\n\n10% é a fração da urna sorteada. 0% seria o caso sem reposição. 63% é a chance de não haver repetição. E 1% é a chance de uma ficha específica sair na primeira retirada.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Para sortear 50 de 1.000 fichas, atribui-se a cada ficha um número aleatório entre 0 e 1 e escolhem-se as 50 fichas com os menores números. Esse procedimento produz uma amostra aleatória simples?",
    opcoes: [
      "Sim: toda amostra de 50 tem a mesma chance",
      "Não: favorece as primeiras fichas",
      "Não: é uma amostragem sistemática",
      "Só se os números forem inteiros",
      "Não: é uma amostragem por conglomerados",
    ],
    correta: 0,
    explicacao:
      "Os números aleatórios colocam as fichas numa ordem ao acaso, e todas as ordens são igualmente prováveis. Escolher as 50 primeiras dessa ordem dá a cada subconjunto de 50 fichas a mesma chance: é uma amostra aleatória simples, muito usada em planilhas.\n\nA posição original das fichas não interfere. Não há intervalo fixo, como na sistemática. Números contínuos funcionam, e empates praticamente não ocorrem. E não há sorteio de grupos, como nos conglomerados.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença entre estratos e conglomerados num plano amostral?",
    opcoes: [
      "Estratos são sempre maiores",
      "Todos os estratos entram; só alguns conglomerados",
      "Conglomerados são sempre homogêneos por dentro",
      "Não há diferença prática",
      "Estratos dispensam sorteio",
    ],
    correta: 1,
    explicacao:
      "Na estratificação, todos os estratos entram na amostra, e sorteiam-se elementos dentro de cada um; o ideal são estratos homogêneos por dentro e diferentes entre si. Nos conglomerados, sorteiam-se só alguns grupos, e observam-se os seus elementos; o ideal são grupos variados por dentro e parecidos entre si, como miniaturas da população.\n\nO tamanho dos grupos não define a técnica. Conglomerados homogêneos por dentro são, ao contrário, o pior caso. A diferença prática é grande. E a estratificação exige sorteio dentro de cada estrato.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Num cadastro de telefones, as pessoas com dois números aparecem duas vezes. Num sorteio de números, que chance essas pessoas têm de ser escolhidas, em relação às que têm um só número?",
    opcoes: [
      "A mesma",
      "A metade",
      "Nenhuma",
      "O quádruplo",
      "O dobro",
    ],
    correta: 4,
    explicacao:
      "Cada número do cadastro tem a mesma chance de ser sorteado, e quem tem dois números tem duas entradas na lista: a chance dessa pessoa é praticamente o dobro. Se ter dois telefones se relaciona com a variável estudada, como renda, a estimativa fica enviesada, a menos que se corrija com pesos. A correção usual dá a essas pessoas metade do peso das demais.\n\nA chance não é a mesma, porque o cadastro tem duplicatas. Não cai à metade nem some. E o quádruplo exigiria quatro entradas.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Numa lista de 500 elementos, faz-se uma amostra sistemática com intervalo 25 e ponto de partida 7. Qual é o último elemento sorteado?",
    opcoes: [
      "500",
      "475",
      "507",
      "457",
      "482",
    ],
    correta: 4,
    explicacao:
      "Os sorteados são 7, 32, 57 e assim por diante, somando 25 a cada passo: 7 + 25 · j. O maior valor que não passa de 500 é obtido com j = 19: 7 + 475 = 482. A amostra tem 20 elementos, de 7 a 482, sempre a mesma distância de 25 um do outro.\n\n500 é o fim da lista, que não é sorteado. 475 = 25 · 19 esquece o ponto de partida. 507 passa do fim da lista. E 457 para um passo antes.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Numa amostra estratificada, sortearam-se 50 elementos de um estrato A de 1.000 e 50 de um estrato B de 200. Os elementos de qual estrato tiveram mais chance de ser sorteados?",
    opcoes: [
      "Os de B, com 25% contra 5%",
      "Os de A, com 5% contra 25%",
      "Todos, com 50/1.200",
      "Todos, com 10%",
      "Os de A, por ser o maior estrato",
    ],
    correta: 0,
    explicacao:
      "A chance de inclusão em cada estrato é o tamanho da amostra dividido pelo tamanho do estrato: 50/1.000 = 5% em A e 50/200 = 25% em B. Com alocação igual em estratos de tamanhos diferentes, o estrato menor fica super-representado, e as estimativas gerais precisam de pesos para compensar.\n\nA tem chance menor, e não maior. As chances não são iguais para todos, porque a alocação não é proporcional. 10% não corresponde a nenhum estrato. E ser o maior estrato reduz, e não aumenta, a chance de cada elemento.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Aumentar muito o tamanho de uma amostra por conveniência resolve o seu viés?",
    opcoes: [
      "Sim: amostras grandes eliminam o viés",
      "Sim, se passar de 1.000 pessoas",
      "Não: aumenta o viés",
      "Sim, se a coleta durar vários dias",
      "Não: reduz a variação, mas não o viés",
    ],
    correta: 4,
    explicacao:
      "Com mais observações, a estimativa varia menos de uma amostra para outra, mas continua centrada no valor errado, porque a forma de seleção favorece certos grupos. O viés é sistemático e não diminui com o tamanho: uma amostra enorme e enviesada só dá uma estimativa errada com muita confiança.\n\nNenhum tamanho elimina o viés de seleção. O limite de 1.000 não tem papel especial. O viés não aumenta com n; ele permanece. E estender a coleta no tempo não substitui o sorteio.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Um plano por conglomerados tem efeito do plano igual a 2: sua variância é o dobro da de uma aleatória simples de mesmo tamanho. Uma amostra de 400 pessoas nesse plano equivale, em precisão, a uma aleatória simples de quantas pessoas?",
    opcoes: [
      "800",
      "200",
      "400",
      "20",
      "1.600",
    ],
    correta: 1,
    explicacao:
      "O tamanho efetivo é o tamanho da amostra dividido pelo efeito do plano: 400/2 = 200. Com variância dobrada, as 400 entrevistas por conglomerados dão a mesma precisão que 200 entrevistas sorteadas individualmente. A economia de custo dos conglomerados precisa compensar essa perda.\n\n800 multiplica em vez de dividir. 400 ignora o efeito do plano. 20 é a raiz de 400. E 1.600 multiplica por 4.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Um bairro tem 400 quarteirões. Sorteiam-se 10 quarteirões e contam-se todos os seus moradores: 1.200 pessoas. Qual é a estimativa do total de moradores do bairro?",
    opcoes: [
      "1.200",
      "4.800",
      "120",
      "480.000",
      "48.000",
    ],
    correta: 4,
    explicacao:
      "Os 10 quarteirões sorteados são 10/400 = 1/40 dos quarteirões, e cada um representa 40 quarteirões do bairro. A estimativa do total é 1.200 · 40 = 48.000 moradores. Equivalentemente, a média de 120 moradores por quarteirão, multiplicada por 400, dá o mesmo total.\n\n1.200 é o total da amostra, sem expandir. 4.800 multiplica por 4. 120 é a média por quarteirão. E 480.000 multiplica 1.200 por 400.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Por que, em vez de o pesquisador escolher os elementos que considera mais típicos, recomenda-se sortear a amostra?",
    opcoes: [
      "Porque sortear dá sempre amostras maiores",
      "O sorteio evita o viés da escolha do pesquisador",
      "Porque o pesquisador nunca conhece a população",
      "Porque escolher é proibido",
      "Porque o sorteio elimina o erro amostral",
    ],
    correta: 1,
    explicacao:
      "Quando o pesquisador escolhe os elementos que julga típicos, suas expectativas entram na amostra, e os resultados tendem a confirmar o que ele já pensava. O sorteio impede essa interferência e ainda permite medir a incerteza, com probabilidades de seleção conhecidas.\n\nO sorteio não aumenta o tamanho da amostra. O pesquisador pode conhecer bem a população, e ainda assim errar ao escolher. Amostras intencionais são permitidas, mas não probabilísticas. E o sorteio não elimina o erro amostral: apenas o torna mensurável.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Numa amostra aleatória simples de 3 elementos, sem reposição, de uma população de 20, qual é a probabilidade de sair uma amostra específica, fixada de antemão?",
    opcoes: [
      "3/20",
      "1/1.140",
      "1/20",
      "1/6.840",
      "1/8.000",
    ],
    correta: 1,
    explicacao:
      "Há C(20, 3) = (20 · 19 · 18)/(3 · 2 · 1) = 1.140 subconjuntos de 3 elementos, todos igualmente prováveis na amostragem aleatória simples. A chance de sair uma amostra específica é 1/1.140.\n\n3/20 é a chance de um elemento específico entrar na amostra. 1/20 é a chance de ele sair na primeira retirada. 1/6.840 conta as sequências ordenadas, 20 · 19 · 18, e não os subconjuntos. E 1/8.000 = 1/20³ supõe sorteio com reposição e com ordem.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "media",
    enunciado:
      "Numa amostragem por conglomerados em um estágio, sortearam-se 3 escolas, com 40, 55 e 35 alunos. Quantos alunos entram na amostra?",
    opcoes: [
      "3",
      "≈ 43,3",
      "130",
      "55",
      "40",
    ],
    correta: 2,
    explicacao:
      "Em um estágio, todos os elementos dos conglomerados sorteados entram na amostra: 40 + 55 + 35 = 130 alunos. O tamanho da amostra depende do tamanho dos conglomerados sorteados e, por isso, pode variar de um sorteio para outro. Num plano em dois estágios, seria sorteado também um número fixo de alunos em cada escola.\n\n3 é o número de escolas, e não de alunos. 43,3 é a média de alunos por escola sorteada. 55 é a maior escola. E 40 é só a primeira.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Uma população tem dois estratos de mesmo tamanho, com médias 10 e 30 e desvio padrão 5 dentro de cada um. Comparando uma amostra estratificada proporcional de 50 com uma aleatória simples de 50, quantas vezes menor é a variância da média estratificada?",
    opcoes: [
      "2",
      "25",
      "5",
      "1",
      "≈ 2,24",
    ],
    correta: 2,
    explicacao:
      "A variância total da população soma a variação dentro dos estratos, 5² = 25, com a variação entre as médias: cada estrato fica 10 unidades da média geral, e isso acrescenta 10² = 100. Na aleatória simples, a variância da média é 125/50 = 2,5. Na estratificada proporcional, só a variação dentro dos estratos conta: 25/50 = 0,5. A razão é 2,5/0,5 = 5.\n\n2 conta dois estratos. 25 é a variância dentro dos estratos. 1 ignora o ganho da estratificação. E 2,24 = √5 compara desvios padrão, e não variâncias.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Num cadastro, as pessoas com dois telefones aparecem duas vezes e, por isso, têm o dobro de chance de sorteio. Para que a estimativa não fique enviesada, que peso essas pessoas devem receber, em relação às demais?",
    opcoes: [
      "Metade do peso das demais",
      "O dobro do peso",
      "O mesmo peso",
      "Peso zero",
      "Um quarto do peso",
    ],
    correta: 0,
    explicacao:
      "O peso de cada entrevistado deve ser o inverso da sua probabilidade de seleção. Quem tem chance dupla recebe metade do peso: assim, cada grupo contribui para a estimativa na proporção em que existe na população, e a super-representação no sorteio é compensada.\n\nO dobro do peso agravaria a distorção. O mesmo peso deixaria o viés como está. Peso zero excluiria um grupo real da população. E um quarto do peso corrigiria demais.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Dois estratos têm 2.000 e 1.000 elementos, com desvios padrão 5 e 20. Pela alocação de Neyman, proporcional a Nₕ · σₕ, como dividir uma amostra de 120?",
    opcoes: [
      "40 e 80",
      "80 e 40",
      "60 e 60",
      "24 e 96",
      "13 e 107",
    ],
    correta: 0,
    explicacao:
      "Os produtos Nₕ · σₕ são 2.000 · 5 = 10.000 e 1.000 · 20 = 20.000, na razão 1 : 2. O primeiro estrato recebe 120 · 1/3 = 40, e o segundo, 120 · 2/3 = 80. O estrato menor, porém muito mais variável, recebe mais observações.\n\n80 e 40 é a alocação proporcional, que só olha os tamanhos. 60 e 60 é a alocação igual. 24 e 96 só olha os desvios padrão. E 13 e 107 usa as variâncias no lugar dos desvios.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Numa amostra por conglomerados, cada turma sorteada contribui com 21 alunos, e a correlação intraclasse da variável estudada é 0,05. Usando efeito do plano = 1 + (m − 1) · ρ, quanto ele vale?",
    opcoes: [
      "2",
      "1,05",
      "21",
      "0,05",
      "1",
    ],
    correta: 0,
    explicacao:
      "Com m = 21 alunos por turma e ρ = 0,05, o efeito do plano é 1 + 20 · 0,05 = 1 + 1 = 2: a variância fica o dobro da de uma aleatória simples do mesmo tamanho. Mesmo uma correlação pequena pesa quando os conglomerados são grandes, porque ela se multiplica pelo número de colegas de cada aluno.\n\n1,05 soma só ρ. 21 é o tamanho do conglomerado. 0,05 é a própria correlação. E 1 seria o caso sem correlação dentro das turmas.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Numa amostra em dois estágios, cada aluno tinha probabilidade de 1,5% de ser sorteado. Entre os 300 sorteados, 60 praticam esporte. Qual é a estimativa do total de alunos que praticam esporte na rede?",
    opcoes: [
      "60",
      "20%",
      "300",
      "900",
      "4.000",
    ],
    correta: 4,
    explicacao:
      "Cada aluno sorteado representa 1/0,015 ≈ 66,7 alunos da rede, o inverso da sua probabilidade de seleção. A estimativa do total é 60 · 66,7 = 4.000. Pela proporção, dá o mesmo: 60/300 = 20% dos 20.000 alunos da rede, que é 300/0,015.\n\n60 é a contagem na amostra, sem expandir. 20% é a proporção, e não o total. 300 é o tamanho da amostra. E 900 multiplica 60 por 15.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Numa cidade, os bairros são muito diferentes entre si quanto à renda, mas homogêneos por dentro. Para estimar a renda média com boa precisão, como é melhor usar os bairros no plano amostral?",
    opcoes: [
      "Como conglomerados, sorteando alguns bairros inteiros",
      "Tanto faz a forma de usá-los",
      "Como estratos, amostrando em todos",
      "Ignorar os bairros no sorteio",
      "Sortear um único bairro inteiro",
    ],
    correta: 2,
    explicacao:
      "Bairros diferentes entre si e homogêneos por dentro são o caso ideal para estratos: amostrando em todos, a variação entre bairros sai da estimativa, e a precisão aumenta muito. Como conglomerados, seria o pior caso: sorteando só alguns bairros, a estimativa dependeria de quais bairros saíram, ricos ou pobres.\n\nA forma de usá-los faz grande diferença. Ignorar os bairros desperdiça uma informação útil. E um único bairro representaria só uma faixa de renda.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Numa amostra aleatória simples de 10 pessoas, sem reposição, de uma população de 100, qual é a probabilidade de duas pessoas específicas entrarem ambas na amostra?",
    opcoes: [
      "1/100",
      "1/10",
      "1/4.950",
      "1/110",
      "1/55",
    ],
    correta: 3,
    explicacao:
      "A primeira pessoa entra com probabilidade 10/100. Dado que ela entrou, restam 9 vagas entre 99 pessoas, e a segunda entra com probabilidade 9/99. O produto é (10/100) · (9/99) = 90/9.900 = 1/110. Pela contagem, C(98, 8)/C(100, 10) dá o mesmo valor.\n\n1/100 = (1/10)² trataria as duas inclusões como independentes, o que valeria com reposição. 1/10 é a chance de uma só pessoa. 1/4.950 é a chance de a amostra ser exatamente esse par, se o tamanho fosse 2. E 1/55 conta duas vezes a mesma dupla.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Numa lista de 1.003 elementos, faz-se uma amostra sistemática com intervalo 10 e ponto de partida sorteado entre 1 e 10. Qual pode ser o tamanho da amostra?",
    opcoes: [
      "Sempre 100",
      "Sempre 101",
      "100 ou 101, conforme o início",
      "Sempre 1.003",
      "Sempre 10",
    ],
    correta: 2,
    explicacao:
      "Com início s, os sorteados são s, s + 10, …, até 1.003. Para s = 1, 2 ou 3, o último é 1.001, 1.002 ou 1.003, e a amostra tem 101 elementos; para s de 4 a 10, o último fica abaixo de 1.003, e a amostra tem 100. Quando N não é múltiplo de k, o tamanho da amostra sistemática varia com o início.\n\nNão é sempre 100 nem sempre 101. 1.003 é o tamanho da lista. E 10 é o intervalo.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Três escolas têm 100, 300 e 600 alunos. Sorteia-se uma escola com probabilidade proporcional ao seu número de alunos. Qual é a probabilidade de sair a maior escola?",
    opcoes: [
      "≈ 33,3%",
      "20%",
      "50%",
      "60%",
      "100%",
    ],
    correta: 3,
    explicacao:
      "Na seleção com probabilidade proporcional ao tamanho, cada escola tem chance igual ao seu número de alunos dividido pelo total: 600/1.000 = 60%. Uma forma de fazer isso é sortear um aluno ao acaso entre todos e tomar a escola dele.\n\n33,3% daria chances iguais às três escolas. 20% é 1/5, sem base no problema. 50% trata o sorteio como sim ou não. E 100% ignora as outras escolas.",
  },
  {
    materia: "estatistica",
    tema: "Técnicas de amostragem",
    dificuldade: "dificil",
    enunciado:
      "Da população {1, 2, 3}, retiram-se amostras de 2 elementos com reposição. Considerando as 9 amostras ordenadas, igualmente prováveis, qual é a variância da média amostral?",
    opcoes: [
      "2/3",
      "1/3",
      "1/6",
      "1/2",
      "1",
    ],
    correta: 1,
    explicacao:
      "A população tem média 2 e variância σ² = [(1 − 2)² + 0 + (3 − 2)²]/3 = 2/3. Com reposição, a variância da média de n observações é σ²/n = (2/3)/2 = 1/3. Pelas 9 amostras: as médias 1, 1,5, 2, 1,5, 2, 2,5, 2, 2,5 e 3 têm média 2 e variância 3/9 = 1/3.\n\n2/3 é a variância da população, sem dividir por n. 1/6 é a variância da média sem reposição, com as 3 amostras de elementos distintos. 1/2 usa a variância com divisor n − 1, igual a 1, e divide por 2. E 1 é essa variância com divisor n − 1, sem dividir por n.",
  },
];
