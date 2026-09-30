/* População, amostra e tipos de variável (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 29 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__populacao-amostra-e-tipos-de-variavel.mjs);
   21 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__populacao-amostra-e-tipos-de-variavel.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "Numa ficha de pesquisa, a variável cor dos olhos, com as respostas castanho, azul, verde e preto, é de que tipo?",
    opcoes: [
      "Qualitativa nominal",
      "Qualitativa ordinal",
      "Quantitativa discreta",
      "Quantitativa contínua",
      "Quantitativa ordinal",
    ],
    correta: 0,
    explicacao:
      "As respostas são categorias, e não números, e não há ordem natural entre elas: nenhuma cor vem antes da outra. Por isso a variável é qualitativa nominal. O resumo adequado é a contagem de cada categoria, e a medida de centro possível é a moda.\n\nSeria ordinal se as categorias tivessem ordem, como escolaridade. Quantitativa discreta exigiria contagens, como número de filhos, e contínua, medidas, como altura. E quantitativa ordinal não é uma das classificações usuais.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "A variável número de filhos de cada família entrevistada é de que tipo?",
    opcoes: [
      "Quantitativa discreta",
      "Quantitativa contínua",
      "Qualitativa nominal",
      "Qualitativa ordinal",
      "Qualitativa discreta",
    ],
    correta: 0,
    explicacao:
      "O número de filhos é uma contagem: assume valores inteiros, 0, 1, 2, 3 e assim por diante, sem valores intermediários possíveis. Variáveis numéricas que vêm de contagens são quantitativas discretas, e faz sentido calcular média e desvio padrão com elas.\n\nContínua seria uma medida que admite qualquer valor num intervalo, como peso. Nominal e ordinal são tipos de variáveis qualitativas, de categorias. E qualitativa discreta não é uma classificação usual.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "A altura dos alunos de uma escola, medida em centímetros, é uma variável de que tipo?",
    opcoes: [
      "Quantitativa contínua",
      "Quantitativa discreta",
      "Qualitativa ordinal",
      "Qualitativa nominal",
      "Qualitativa contínua",
    ],
    correta: 0,
    explicacao:
      "A altura é uma medida: entre dois valores quaisquer, como 160 cm e 161 cm, existem infinitos valores possíveis, limitados só pela precisão do instrumento. Variáveis desse tipo são quantitativas contínuas. Registrar a altura em centímetros inteiros é um arredondamento da medida, e não muda a natureza da variável.\n\nDiscreta seria uma contagem. Ordinal e nominal são categorias, e altura é numérica. E qualitativa contínua não é uma classificação usual.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "A variável escolaridade, com as categorias fundamental, médio e superior, é de que tipo?",
    opcoes: [
      "Qualitativa ordinal",
      "Qualitativa nominal",
      "Quantitativa discreta",
      "Quantitativa contínua",
      "Quantitativa nominal",
    ],
    correta: 0,
    explicacao:
      "As respostas são categorias, e há uma ordem natural entre elas: fundamental, depois médio, depois superior. Por isso a variável é qualitativa ordinal. A ordem permite falar em mediana, mas as distâncias entre as categorias não são medidas, e a média dos códigos não tem sentido claro.\n\nSeria nominal se não houvesse ordem, como cor dos olhos. Não é quantitativa, porque as categorias não são contagens nem medidas. E quantitativa nominal não é uma classificação usual.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "A média de altura de todos os alunos de uma escola, calculada com os dados de todos eles, é chamada de quê?",
    opcoes: [
      "Parâmetro",
      "Estatística",
      "Estimativa",
      "Amostra",
      "Variável",
    ],
    correta: 0,
    explicacao:
      "Um parâmetro é uma medida que descreve a população inteira. Como a média foi calculada com todos os alunos, que formam a população do estudo, ela é um parâmetro. Uma estatística seria a mesma medida calculada numa amostra, e ela varia de uma amostra para outra.\n\nEstatística e estimativa se referem a valores calculados em amostras. Amostra é o subconjunto observado, e não uma medida. E a variável é a altura, e não a sua média.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "Uma empresa com 8.000 funcionários entrevistou 400 deles, sorteados. Que fração da população foi incluída na amostra?",
    opcoes: [
      "5%",
      "20%",
      "400",
      "0,5%",
      "95%",
    ],
    correta: 0,
    explicacao:
      "A fração amostral é o tamanho da amostra dividido pelo tamanho da população: 400/8.000 = 0,05, ou 5%. Cada funcionário tinha, portanto, 5% de chance de ser sorteado num sorteio simples. Com frações pequenas como essa, o tamanho da população quase não influi na precisão das estimativas.\n\n20% inverte a divisão, 8.000/400 = 20, e lê o resultado como porcentagem. 400 é o tamanho da amostra, e não a fração. 0,5% erra a casa decimal. E 95% é a parte da população que ficou fora da amostra.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "Para conhecer a opinião dos eleitores de uma cidade, uma pesquisa entrevista 1.000 eleitores sorteados. Qual é a população do estudo?",
    opcoes: [
      "Todos os eleitores da cidade",
      "Os 1.000 eleitores entrevistados",
      "Os eleitores que votaram na última eleição",
      "Os moradores da cidade de qualquer idade",
      "Os eleitores que se recusaram a responder",
    ],
    correta: 0,
    explicacao:
      "A população é o conjunto inteiro de elementos sobre o qual se quer concluir: todos os eleitores da cidade. Os 1.000 entrevistados formam a amostra, a parte observada, usada para estimar a opinião da população.\n\nOs entrevistados são a amostra, e não a população. Quem votou na última eleição é só uma parte dos eleitores. Moradores de qualquer idade incluem quem não vota. E os que se recusaram fazem parte da população, mas não a definem.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "Como se chama a coleta de dados de todos os elementos de uma população?",
    opcoes: [
      "Censo",
      "Amostra",
      "Estimativa",
      "Estatística amostral",
      "Experimento controlado",
    ],
    correta: 0,
    explicacao:
      "Coletar dados de todos os elementos da população é fazer um censo. Com ele, os valores calculados são os próprios parâmetros, sem erro amostral, mas o custo e o tempo costumam ser muito maiores que os de uma amostra, e às vezes o censo é impossível.\n\nAmostra é uma parte da população. Estimativa é um valor calculado com a amostra para aproximar um parâmetro. Estatística amostral é essa mesma medida calculada na amostra. E um experimento controlado aplica tratamentos, e não apenas coleta dados de todos.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "Para a variável marca de celular preferida, qual medida de tendência central pode ser usada?",
    opcoes: [
      "Apenas a moda",
      "Apenas a média",
      "A média e a mediana",
      "Apenas a mediana",
      "Nenhuma medida",
    ],
    correta: 0,
    explicacao:
      "Marca de celular é uma variável qualitativa nominal: as categorias não têm ordem nem valor numérico. A moda, a marca mais citada, só depende das contagens e faz sentido. A mediana exige ordenar as categorias, e a média exige números, e nenhuma das duas tem significado aqui.\n\nA média dos códigos mudaria se as marcas fossem numeradas de outro jeito. A mediana dependeria da ordem arbitrária escolhida para as marcas. E existe, sim, uma medida adequada: a moda.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "Numa planilha, a variável sexo foi registrada com os códigos 1 e 2. Com isso, ela passa a ser quantitativa?",
    opcoes: [
      "Não: os números são só rótulos",
      "Sim: agora ela tem números",
      "Sim, e a média dos códigos faz sentido",
      "Só se os códigos forem 0 e 1",
      "Só se houver mais de dois códigos",
    ],
    correta: 0,
    explicacao:
      "Os códigos 1 e 2 apenas identificam as categorias; poderiam ser 7 e 3, ou letras, sem perder informação. A variável continua qualitativa nominal. A média dos códigos muda conforme os números escolhidos, e por isso não tem significado próprio.\n\nTer números na planilha não transforma categorias em medidas. Com códigos 0 e 1, a média vira a proporção de uma das categorias, o que é útil, mas a variável continua qualitativa. E o número de códigos não muda a natureza da variável.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "Repetindo uma pesquisa com uma nova amostra sorteada da mesma população, o que tende a acontecer com a média amostral?",
    opcoes: [
      "Fica sempre igual",
      "Muda um pouco de amostra para amostra",
      "Fica sempre igual à média da população",
      "Fica sempre maior que a da população",
      "Fica sempre igual a zero",
    ],
    correta: 1,
    explicacao:
      "A média amostral depende de quais elementos foram sorteados, e cada amostra traz elementos diferentes. Por isso ela varia de uma amostra para outra, em torno da média da população. Essa variação natural é o erro amostral, que diminui quando a amostra cresce.\n\nNão fica sempre igual, porque os sorteados mudam. Só coincidiria sempre com a média da população num censo. Não há tendência de ficar sempre acima. E zero não tem relação com o problema.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "facil",
    enunciado:
      "De uma turma de 5 alunos, quantas amostras diferentes de 2 alunos, sem repetição e sem importar a ordem, podem ser formadas?",
    opcoes: [
      "20",
      "10",
      "25",
      "5",
      "2",
    ],
    correta: 1,
    explicacao:
      "Cada amostra é um par de alunos, sem ordem. O número de pares é C(5, 2) = (5 · 4)/2 = 10. Numa amostragem aleatória simples, cada um desses 10 pares tem a mesma chance, 1/10, de ser o sorteado.\n\n20 conta os pares com ordem, 5 · 4, e cada par aparece duas vezes. 25 = 5² permite repetir o aluno e considera a ordem. 5 é o número de alunos. E 2 é o tamanho da amostra.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Num dia, a temperatura foi 20 °C, e em outro, 10 °C. É correto dizer que o primeiro dia foi duas vezes mais quente?",
    opcoes: [
      "Sim: 20 é o dobro de 10",
      "Não: a escala Celsius não tem zero absoluto",
      "Sim, em qualquer escala de temperatura",
      "Não: foi três vezes mais quente",
      "Só se a umidade for a mesma",
    ],
    correta: 1,
    explicacao:
      "A escala Celsius é intervalar: diferenças fazem sentido, mas o zero é convencional, e razões não. Em Fahrenheit, as mesmas temperaturas são 68 °F e 50 °F, com razão 1,36; em kelvin, 293 K e 283 K, com razão de cerca de 1,035. A razão muda com a escala, e por isso dizer duas vezes mais quente não tem sentido.\n\n20 é o dobro de 10 como número, mas não como temperatura. A razão varia de uma escala para outra. Três vezes também não tem base. E a umidade não entra na questão.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Um objeto tem 20 kg, e outro, 10 kg. É correto dizer que o primeiro tem o dobro da massa do segundo?",
    opcoes: [
      "Não: depende da unidade",
      "Sim: a massa tem zero absoluto",
      "Só em libras",
      "Não: massa é uma escala intervalar",
      "Só com balança digital",
    ],
    correta: 1,
    explicacao:
      "A massa é medida numa escala de razão: o zero significa ausência de massa, e razões fazem sentido. Em libras, os mesmos objetos têm cerca de 44,1 lb e 22,05 lb, e a razão continua 2. Trocar a unidade multiplica os dois valores pelo mesmo fator e preserva a razão.\n\nA razão não depende da unidade. Vale em quilogramas, libras ou gramas. A massa é de razão, e não intervalar como a temperatura em Celsius. E o tipo de balança não muda a escala.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Numa escala de satisfação com as notas 1, péssimo, a 5, ótimo, qual medida resume melhor o centro das respostas sem supor distâncias iguais entre as categorias?",
    opcoes: [
      "A média aritmética",
      "A mediana",
      "O desvio padrão",
      "A soma das notas",
      "A amplitude",
    ],
    correta: 1,
    explicacao:
      "A escala é ordinal: as notas indicam ordem, mas a distância entre péssimo e ruim não precisa ser igual à distância entre bom e ótimo. A mediana só usa a ordem e fica na mesma categoria qualquer que seja a numeração crescente escolhida. A média, ao contrário, depende dos números atribuídos.\n\nA média supõe distâncias iguais entre as categorias. O desvio padrão e a amplitude medem dispersão, e não centro. E a soma das notas depende da quantidade de respostas.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "O tempo de espera numa fila foi registrado em minutos inteiros: 3, 5, 8 e assim por diante. A variável tempo de espera passa a ser discreta?",
    opcoes: [
      "Sim: agora só tem valores inteiros",
      "Não: o registro arredondou um tempo contínuo",
      "Sim, e passa a ser qualitativa",
      "Não: passa a ser ordinal",
      "Depende do tamanho da amostra",
    ],
    correta: 1,
    explicacao:
      "O tempo é uma medida: entre 3 e 4 minutos existem infinitos instantes possíveis. Registrar em minutos inteiros é arredondar a medida, e a variável continua quantitativa contínua. Discretas são as variáveis que vêm de contagens, como o número de clientes na fila.\n\nTer só inteiros no registro não muda a natureza do que se mede. A variável continua numérica, e não qualitativa. Também não vira ordinal, porque as diferenças entre tempos continuam com sentido. E o tamanho da amostra não afeta o tipo da variável.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Um laboratório testa 50 lâmpadas escolhidas ao acaso de um lote de 10.000 para estimar a duração média do lote. Qual é a amostra?",
    opcoes: [
      "As 10.000 lâmpadas do lote",
      "As 50 lâmpadas testadas",
      "A duração média das 50 lâmpadas",
      "A duração de cada lâmpada",
      "O laboratório",
    ],
    correta: 1,
    explicacao:
      "A amostra é o subconjunto de elementos efetivamente observados: as 50 lâmpadas testadas. O lote de 10.000 é a população, sobre a qual se quer concluir. A duração média das 50 é uma estatística, e a duração de cada lâmpada é a variável estudada.\n\nO lote inteiro é a população. A duração média das 50 é uma estatística calculada na amostra, e não a amostra. A duração de cada lâmpada é a variável. E o laboratório é quem faz o estudo.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Num lote de 10.000 lâmpadas, 50 foram testadas, e 4% delas falharam antes do prazo. Como se classifica esse valor de 4%?",
    opcoes: [
      "Parâmetro",
      "Estatística",
      "Censo",
      "População",
      "Variável qualitativa",
    ],
    correta: 1,
    explicacao:
      "O valor de 4% foi calculado com as 50 lâmpadas da amostra, e por isso é uma estatística: uma estimativa da proporção de falhas no lote inteiro, que é o parâmetro desconhecido. Outra amostra de 50 lâmpadas daria, provavelmente, outro valor.\n\nO parâmetro seria a proporção de falhas entre as 10.000 lâmpadas. Censo seria testar todas. População é o lote, e não uma proporção. E a variável é falhar ou não antes do prazo; 4% é um resumo dela.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Uma rádio pede que os ouvintes liguem para opinar sobre um projeto, e 80% dos que ligaram apoiam a ideia. O que se pode concluir sobre a opinião de todos os ouvintes?",
    opcoes: [
      "Que 80% dos ouvintes apoiam o projeto",
      "Pouco: a amostra se escolheu sozinha",
      "Que a margem de erro é de 3 pontos",
      "Que a amostra é aleatória",
      "Que o apoio real é maior que 80%",
    ],
    correta: 1,
    explicacao:
      "Numa amostra de resposta voluntária, quem liga decide participar, e costumam ligar mais as pessoas com opinião forte ou interessadas no tema. Se os apoiadores ligam com mais frequência, os 80% superestimam o apoio, e o valor real pode ser bem menor. Sem sorteio, não há como calcular o erro.\n\nOs 80% descrevem os que ligaram, e não os ouvintes. Margens de erro exigem amostras aleatórias. A amostra não foi sorteada. E nada indica que o apoio real seja maior.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Numa escola de 1.200 alunos, 300 usam óculos. Numa amostra de 60 alunos, 18 usam. Quais são o parâmetro e a estatística correspondentes?",
    opcoes: [
      "Parâmetro 30% e estatística 25%",
      "Parâmetro 25% e estatística 30%",
      "Os dois valem 25%",
      "Parâmetro 300 e estatística 18",
      "Parâmetro 1.200 e estatística 60",
    ],
    correta: 1,
    explicacao:
      "O parâmetro é a proporção na população inteira: 300/1.200 = 25%. A estatística é a proporção na amostra: 18/60 = 30%. A diferença de 5 pontos é o erro amostral desta amostra, que outra amostra poderia aumentar, diminuir ou inverter.\n\nTrocar os valores confunde população e amostra. A amostra não reproduz exatamente o parâmetro. 300 e 18 são contagens, e não proporções. E 1.200 e 60 são os tamanhos da população e da amostra.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Uma ficha de pesquisa registra nome, idade, altura, número de irmãos, cidade natal e nota de satisfação de 1 a 5. Quantas dessas variáveis são quantitativas?",
    opcoes: [
      "4",
      "2",
      "3",
      "5",
      "6",
    ],
    correta: 2,
    explicacao:
      "São quantitativas as variáveis numéricas que vêm de medidas ou contagens: idade, altura e número de irmãos, três ao todo. Nome é um identificador, cidade natal é qualitativa nominal, e a nota de satisfação, embora escrita com números, é qualitativa ordinal.\n\n4 conta a nota de satisfação como quantitativa. 2 deixa de fora uma das três. 5 inclui também a cidade natal ou o nome. E 6 considera todas as variáveis quantitativas.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "A variável fuma, com as respostas sim e não, é de que tipo?",
    opcoes: [
      "Quantitativa discreta",
      "Qualitativa ordinal",
      "Qualitativa nominal dicotômica",
      "Quantitativa contínua",
      "Não é uma variável",
    ],
    correta: 2,
    explicacao:
      "As respostas são duas categorias sem ordem natural, e a variável é qualitativa nominal com só duas categorias, isto é, dicotômica ou binária. Codificada como 0 e 1, sua média é a proporção de fumantes, um resumo muito usado. Variáveis dicotômicas aparecem em quase toda pesquisa: aprovado ou reprovado, doente ou sadio, comprou ou não comprou.\n\nNão é uma contagem nem uma medida. Não há ordem entre sim e não. E é, sim, uma variável: uma característica que muda de pessoa para pessoa.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "O índice de massa corporal, IMC, calculado como o peso dividido pelo quadrado da altura, é uma variável de que tipo?",
    opcoes: [
      "Quantitativa discreta",
      "Qualitativa ordinal",
      "Quantitativa contínua",
      "Qualitativa nominal",
      "Não é uma variável estatística",
    ],
    correta: 2,
    explicacao:
      "O IMC é obtido de duas medidas contínuas, peso e altura, e pode assumir qualquer valor positivo num intervalo. É uma variável quantitativa contínua derivada. Agrupado em faixas, como abaixo do peso, normal e sobrepeso, ele daria origem a uma variável qualitativa ordinal.\n\nNão vem de contagem, e por isso não é discreto. Como número, não é ordinal nem nominal. E variáveis calculadas a partir de outras são variáveis estatísticas como quaisquer outras.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Numa turma de 40 alunos, 30 foram aprovados. Codificando aprovado como 1 e reprovado como 0, qual é a média dessa variável?",
    opcoes: [
      "30, o número de aprovados",
      "0,5, o ponto médio dos códigos",
      "0,75, a proporção de aprovados",
      "0,25, a proporção de reprovados",
      "Não faz sentido calcular",
    ],
    correta: 2,
    explicacao:
      "A média de uma variável 0/1 é a soma dos códigos, isto é, o número de 1, dividida pelo total: 30/40 = 0,75. Com essa codificação, a média é exatamente a proporção de aprovados, e por isso esse recurso é tão usado em estatística e em planilhas.\n\n30 é a soma, sem dividir. 0,5 é o ponto médio entre os códigos, sem relação com os dados. 0,25 é a proporção de reprovados. E o cálculo faz sentido justamente por causa dos códigos 0 e 1.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "O código de endereçamento postal, o CEP, é formado por números. Como deve ser classificado como variável estatística?",
    opcoes: [
      "Quantitativa discreta",
      "Quantitativa contínua",
      "Qualitativa nominal",
      "Qualitativa ordinal",
      "Quantitativa de razão",
    ],
    correta: 2,
    explicacao:
      "Os dígitos do CEP identificam regiões e logradouros, mas não medem nem contam nada: a média de dois CEPs não corresponde a nenhum lugar, e um CEP maior não significa mais de alguma coisa. Por isso ele é qualitativo nominal, como número de telefone ou de camisa de jogador. O resumo adequado para CEPs é a frequência de cada código.\n\nNão é contagem nem medida, e por isso não é quantitativo. E a numeração não expressa uma ordem de grandeza com sentido estatístico.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Em graus Celsius, a diferença entre 30 °C e 20 °C é igual à diferença entre 20 °C e 10 °C. Essa comparação de diferenças tem sentido?",
    opcoes: [
      "Não: só razões têm sentido",
      "Não: a escala Celsius é nominal",
      "Sim: diferenças têm sentido numa escala intervalar",
      "Só em kelvin",
      "Só se as temperaturas forem positivas",
    ],
    correta: 2,
    explicacao:
      "Numa escala intervalar, como a Celsius, as unidades têm tamanho constante, e diferenças iguais correspondem a variações iguais de temperatura. Em Fahrenheit, as mesmas temperaturas ficam 86 °F, 68 °F e 50 °F, e as duas diferenças continuam iguais, 18 °F cada. O que não tem sentido nessa escala são as razões.\n\nNa escala intervalar, é o contrário: diferenças têm sentido, e razões não. A escala Celsius é numérica, e não nominal. Em kelvin também vale, mas não só em kelvin. E o sinal das temperaturas não importa.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Numa escala de dor de 0 a 10, relatada pelo paciente, a diferença entre as notas 2 e 4 equivale à diferença entre as notas 8 e 10?",
    opcoes: [
      "Sim: as duas diferenças valem 2",
      "Sim: toda escala numérica é intervalar",
      "Não necessariamente: a escala só garante a ordem",
      "Não: a segunda é sempre maior",
      "Não: a primeira é sempre maior",
    ],
    correta: 2,
    explicacao:
      "A escala de dor é ordinal: garante que 4 dói mais que 2 e que 10 dói mais que 8, mas não que os saltos sejam do mesmo tamanho. Qualquer renumeração crescente das notas respeita a mesma ordem e pode deixar as duas diferenças desiguais, num sentido ou no outro. Por isso, médias de escalas ordinais pedem cautela.\n\nA igualdade numérica das diferenças não garante igualdade de dor. Nem toda escala numérica é intervalar. E não há como afirmar que uma diferença é sempre maior que a outra.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Por que, muitas vezes, se estuda uma amostra em vez de fazer um censo?",
    opcoes: [
      "Porque amostras dão sempre o valor exato",
      "Porque a população é sempre pequena",
      "Por custo, tempo ou testes que destroem os itens",
      "Porque censos são proibidos por lei",
      "Porque amostras dispensam cuidado na escolha",
    ],
    correta: 2,
    explicacao:
      "Um censo pode ser caro e demorado demais, e às vezes é impossível, como quando o teste destrói o item, caso da vida útil de lâmpadas ou da resistência de peças. Uma amostra bem escolhida dá estimativas com precisão conhecida, a um custo muito menor.\n\nAmostras têm erro amostral, e não dão o valor exato. Populações grandes são justamente o caso em que a amostra compensa. Censos são permitidos e feitos regularmente. E uma amostra só é útil se for bem escolhida, de preferência por sorteio.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Num estudo sobre a renda familiar, os dados são coletados por domicílio, somando a renda de todos os moradores. Qual é a unidade de observação?",
    opcoes: [
      "Cada morador",
      "A renda",
      "A família, ou domicílio",
      "O bairro",
      "O pesquisador",
    ],
    correta: 2,
    explicacao:
      "A unidade de observação é o elemento sobre o qual cada registro é feito. Como a renda é somada por domicílio, cada registro corresponde a uma família, e é ela a unidade. Se a renda fosse registrada pessoa a pessoa, a unidade seria o morador.\n\nCada morador seria a unidade num estudo de renda individual. A renda é a variável, e não a unidade. O bairro seria a unidade num estudo com médias por região. E o pesquisador não é observado.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Numa amostra aleatória simples de 50 pessoas sorteadas entre 1.000, qual é a probabilidade de uma pessoa específica ser incluída?",
    opcoes: [
      "50%",
      "0,1%",
      "5%",
      "2%",
      "95%",
    ],
    correta: 2,
    explicacao:
      "Na amostragem aleatória simples, todos têm a mesma chance de entrar na amostra, igual à fração amostral: 50/1.000 = 5%. Pela contagem: das C(1.000, 50) amostras possíveis, as que contêm essa pessoa são C(999, 49), e a razão entre as duas é 50/1.000.\n\n50% não sai da conta. 0,1% é 1/1.000, a chance de ser a primeira pessoa sorteada. 2% é 1/50. E 95% é a chance de ficar fora da amostra.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Duas pesquisas com amostras aleatórias de 1.000 pessoas da mesma população, feitas no mesmo dia, deram 42% e 45% para um candidato. Isso indica que uma delas errou?",
    opcoes: [
      "Sim: uma das pesquisas está errada",
      "Sim: o parâmetro mudou entre as pesquisas",
      "Não: as duas acertaram o valor exato",
      "Não: estatísticas variam de amostra para amostra",
      "Sim: amostras sorteadas deveriam dar o mesmo valor",
    ],
    correta: 3,
    explicacao:
      "Cada amostra traz pessoas diferentes, e a proporção amostral varia em torno do valor da população. Com 1.000 entrevistas, a margem de erro de 95% é de cerca de 3 pontos, e uma diferença de 3 pontos entre duas pesquisas é compatível com o acaso.\n\nNenhuma das duas precisa estar errada. O parâmetro não mudou no mesmo dia. As duas são estimativas, e não o valor exato. E amostras sorteadas diferentes quase nunca dão o mesmo valor.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Para a variável cor preferida, com as respostas azul, verde e vermelho, faz sentido calcular a mediana?",
    opcoes: [
      "Sim: é a cor do meio da lista",
      "Sim, se o número de pessoas for ímpar",
      "Sim: a mediana sempre existe",
      "Não: as cores não têm ordem natural",
      "Não: só a média faz sentido",
    ],
    correta: 3,
    explicacao:
      "A mediana exige ordenar os dados, e as cores não têm ordem natural. Listando-as em outra ordem, a cor do meio mudaria, o que mostra que a mediana não teria significado. Para variáveis nominais, o resumo de centro é a moda.\n\nA cor do meio da lista depende da ordem escolhida, que é arbitrária. O número de pessoas não resolve a falta de ordem. A mediana não existe para qualquer variável. E a média faz menos sentido ainda, porque cores não são números.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Na ficha de um paciente, tipo sanguíneo é uma variável. Como se classifica a resposta O positivo, registrada nessa ficha?",
    opcoes: [
      "Uma nova variável",
      "Um parâmetro",
      "Uma amostra",
      "Um valor, ou categoria, da variável",
      "Uma população",
    ],
    correta: 3,
    explicacao:
      "A variável é a característica observada, tipo sanguíneo, e cada paciente tem um valor dela, aqui a categoria O positivo. Os valores possíveis formam as categorias da variável qualitativa nominal: os grupos do sistema ABO, com fator Rh positivo ou negativo.\n\nO positivo não é outra variável, e sim uma das respostas possíveis. Parâmetro é uma medida da população. Amostra e população são conjuntos de elementos, e não respostas.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Numa amostra aleatória de 200 dos 5.000 domicílios de um bairro, 30 têm piscina. Qual é a estimativa do número total de domicílios com piscina no bairro?",
    opcoes: [
      "30",
      "150",
      "15%",
      "750",
      "6.000",
    ],
    correta: 3,
    explicacao:
      "A proporção amostral é 30/200 = 0,15, e a estimativa do total aplica essa proporção à população: 0,15 · 5.000 = 750 domicílios. Equivalentemente, cada domicílio da amostra representa 5.000/200 = 25 domicílios do bairro, e 30 · 25 = 750.\n\n30 é a contagem na amostra, sem expandir. 150 multiplica 30 por 5. 15% é a proporção, e não o total. E 6.000 multiplica 30 por 200.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Qual destas variáveis é quantitativa discreta?",
    opcoes: [
      "O tempo de uma corrida",
      "O peso de um pacote",
      "A altura de uma árvore",
      "O número de gols numa partida",
      "A temperatura ao meio-dia",
    ],
    correta: 3,
    explicacao:
      "O número de gols é uma contagem: 0, 1, 2 e assim por diante, sem valores intermediários. As demais variáveis são medidas, que podem assumir qualquer valor num intervalo, e por isso são contínuas, ainda que sejam registradas com poucas casas decimais. Uma regra prática: se a pergunta é quantos, a variável costuma ser discreta; se é quanto mede, costuma ser contínua.\n\nTempo, peso, altura e temperatura são grandezas contínuas: entre dois valores quaisquer, existem infinitos outros possíveis.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Transformar a idade exata em faixas etárias, como 0 a 17, 18 a 59 e 60 ou mais, tem que efeito sobre a variável?",
    opcoes: [
      "Ganha precisão",
      "Torna a variável nominal, sem ordem",
      "Não muda nada",
      "Perde informação, e a variável vira ordinal",
      "Torna a variável contínua",
    ],
    correta: 3,
    explicacao:
      "Com faixas, pessoas de 20 e de 55 anos ficam na mesma categoria, e a diferença entre elas se perde. As faixas mantêm uma ordem natural, dos mais jovens aos mais velhos, e a nova variável é qualitativa ordinal. A média de idade exata já não pode ser calculada a partir delas.\n\nAgrupar reduz a precisão, e não aumenta. A ordem entre as faixas se mantém, e por isso a variável não é nominal. A mudança é real. E a variável deixa de ser contínua.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Na população {2, 4, 6, 8, 10}, considerando todas as amostras possíveis de 2 elementos distintos, qual é a média das médias amostrais?",
    opcoes: [
      "5",
      "3",
      "30",
      "6",
      "10",
    ],
    correta: 3,
    explicacao:
      "Há C(5, 2) = 10 amostras, com médias 3, 4, 5, 6, 5, 6, 7, 7, 8 e 9. A média dessas médias é 60/10 = 6, igual à média da população, (2 + 4 + 6 + 8 + 10)/5 = 6. Isso ilustra que a média amostral é um estimador não viesado da média populacional.\n\n5 é o número de elementos. 3 é a menor média amostral. 30 é a soma da população. E 10 é o número de amostras, ou o maior elemento.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Uma pesquisa sorteou 1.000 pessoas, mas só 300 aceitaram responder. Qual é a principal preocupação com os resultados?",
    opcoes: [
      "A amostra ficou grande demais",
      "O sorteio garante que não há viés",
      "300 respostas bastam para eliminar qualquer erro",
      "Quem respondeu pode diferir de quem não respondeu",
      "A margem de erro fica zero",
    ],
    correta: 3,
    explicacao:
      "O sorteio garante representatividade das 1.000 pessoas sorteadas, e não das 300 que aceitaram. Se a disposição para responder estiver ligada ao tema, como pessoas mais satisfeitas respondendo mais, a estimativa fica enviesada: é o viés de não resposta, que um tamanho de amostra maior não corrige.\n\nA amostra efetiva ficou menor, e não grande demais. O sorteio inicial não protege contra a não resposta. Nenhum número de respostas elimina o viés. E a margem de erro não é zero em nenhuma amostra.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Na notação usual, quais símbolos representam a média da população e a média da amostra?",
    opcoes: [
      "x̄ para a população e μ para a amostra",
      "σ para as duas",
      "p para a população e n para a amostra",
      "μ para a população e x̄ para a amostra",
      "N para as duas",
    ],
    correta: 3,
    explicacao:
      "Letras gregas costumam indicar parâmetros da população: μ para a média e σ para o desvio padrão. As estatísticas da amostra usam letras latinas: x̄ para a média e s para o desvio padrão. Assim, x̄ estima μ, e s estima σ. Para proporções, é comum usar p na população e p̂ na amostra.\n\nTrocar os símbolos inverte a convenção. σ é o desvio padrão populacional, e não uma média. p costuma indicar proporção, e n, o tamanho da amostra. E N é o tamanho da população.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "media",
    enunciado:
      "Qual destas variáveis é medida numa escala de razão, em que o zero indica ausência da grandeza e razões têm sentido?",
    opcoes: [
      "A temperatura, em graus Celsius",
      "O ano de nascimento",
      "O número da camisa de um jogador",
      "A renda mensal, em reais",
      "A nota de satisfação de 1 a 5",
    ],
    correta: 3,
    explicacao:
      "Na renda, zero significa ausência de renda, e uma renda de R$ 4.000 é o dobro de uma de R$ 2.000 em qualquer moeda: a escala é de razão. As outras não têm zero absoluto ou nem são medidas: o zero de Celsius é convencional, e o ano zero também.\n\nTemperatura em Celsius e ano de nascimento são intervalares: diferenças têm sentido, razões não. O número da camisa é só um rótulo, nominal. E a nota de satisfação é ordinal.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Uma variável nominal foi codificada com números. Qual destas estatísticas não muda quando os códigos são trocados entre as categorias?",
    opcoes: [
      "A média dos códigos",
      "A mediana dos códigos",
      "O desvio padrão dos códigos",
      "A soma dos códigos",
      "A categoria mais frequente",
    ],
    correta: 4,
    explicacao:
      "Trocar os códigos é só renomear as categorias. A categoria mais frequente continua a mesma, qualquer que seja o número atribuído a ela: a moda é invariante. Já a média, a mediana, o desvio padrão e a soma dos códigos mudam com a numeração, porque dependem dos valores numéricos escolhidos.\n\nEssa é a ideia central dos níveis de medida: uma estatística só tem sentido para um tipo de variável se não mudar com as transformações admissíveis para aquele tipo. Para variáveis nominais, qualquer troca de rótulos é admissível, e só a moda resiste.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Numa variável ordinal, os códigos 1, 2, 3, 4 e 5 são trocados por 1, 2, 3, 10 e 50, que mantêm a mesma ordem. Qual destes resumos é preservado?",
    opcoes: [
      "A média",
      "A diferença entre as médias de dois grupos",
      "O desvio padrão",
      "A razão entre dois códigos",
      "A categoria mediana",
    ],
    correta: 4,
    explicacao:
      "Uma troca crescente de códigos mantém a ordem das respostas, e a observação do meio continua sendo a mesma: a categoria mediana é preservada. Média, desvio padrão, diferenças entre médias e razões dependem dos valores numéricos e mudam com a nova numeração.\n\nPara variáveis ordinais, as transformações admissíveis são as crescentes, e só os resumos baseados em posição, como mediana e quartis, resistem a elas. A média de uma escala ordinal pode até inverter a comparação entre dois grupos quando os códigos mudam.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Numa escala de 1 a 5, o grupo A respondeu 3, 3, 3 e 3, e o grupo B, 1, 1, 5 e 5, com médias iguais a 3. Se os códigos forem trocados por outros, na mesma ordem, o que se pode dizer da comparação entre as médias?",
    opcoes: [
      "A e B sempre terão a mesma média",
      "B sempre terá média maior",
      "A sempre terá média maior",
      "A média de A muda com a troca do código 5",
      "Depende dos códigos: pode ficar igual, maior ou menor",
    ],
    correta: 4,
    explicacao:
      "Com os códigos 1 a 5, as médias empatam em 3. Trocando o 5 por 10, B passa a ter média 5,5, acima da de A; trocando o 1 por −5, B cai para 0, abaixo de A. Todas essas numerações respeitam a ordem das categorias, e a comparação das médias muda com elas: numa escala ordinal, ela não é confiável.\n\nO empate vale só para a numeração original. Nenhum dos grupos fica sempre acima. E a média de A, com todas as respostas iguais a 3, não depende do código do 5.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Da população {1, 3, 5, 7, 9}, retiram-se amostras de 4 elementos distintos. Quantas amostras diferentes existem, e qual é a média das médias amostrais?",
    opcoes: [
      "20 amostras, com média das médias 5",
      "5 amostras, com média das médias 25",
      "625 amostras, com média das médias 5",
      "5 amostras, com média das médias 4",
      "5 amostras, com média das médias 5",
    ],
    correta: 4,
    explicacao:
      "Escolher 4 dos 5 elementos equivale a escolher qual fica de fora: C(5, 4) = 5 amostras. Suas médias são 6, 5,5, 5, 4,5 e 4, conforme o elemento excluído seja 1, 3, 5, 7 ou 9, e a média delas é 25/5 = 5, igual à média da população. A média amostral é não viesada também sem reposição.\n\n20 multiplica o número de elementos pelo tamanho da amostra, 5 · 4. 625 = 5⁴ conta sequências com reposição e ordem. Média 25 é a soma da população. E média 4 confunde a média com o tamanho da amostra.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Uma pesquisa feita só pela internet concluiu que 95% das pessoas usam a internet todos os dias. O que se pode dizer dessa estimativa para a população geral?",
    opcoes: [
      "Subestima o uso real",
      "É uma estimativa sem viés",
      "Só erra por acaso",
      "Vale para a população, com margem de 3 pontos",
      "Superestima, porque só quem está online responde",
    ],
    correta: 4,
    explicacao:
      "Quem usa pouco a internet quase não tem chance de responder a uma pesquisa on-line, e quem usa todo dia responde com facilidade. A amostra fica cheia de usuários frequentes, e a estimativa sai muito acima da proporção real: é viés de seleção pelo meio de coleta, que nenhum aumento da amostra corrige.\n\nO erro vai para cima, e não para baixo. Há viés, e não só variação aleatória. E margens de erro só valem para amostras probabilísticas da população de interesse.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Para descobrir o que leva uma empresa ao sucesso, um estudo analisa só as empresas que continuam abertas depois de 10 anos. Qual é o principal problema dessa amostra?",
    opcoes: [
      "A amostra fica aleatória demais",
      "Não há viés, porque todas as empresas são reais",
      "O viés só aparece em amostras pequenas",
      "A amostra inclui empresas demais",
      "As empresas que fecharam ficam fora da amostra",
    ],
    correta: 4,
    explicacao:
      "Olhar só as sobreviventes é o viés de sobrevivência: práticas arriscadas podem aparecer muito entre as vencedoras, mas também ter levado muitas outras à falência, que não entram na amostra. Sem as empresas que fecharam, não dá para saber se uma prática aumenta ou diminui a chance de sucesso.\n\nA amostra não é aleatória: foi filtrada pelo resultado. Empresas reais podem formar uma amostra enviesada. O viés não depende do tamanho da amostra. E o problema é quem ficou de fora, e não o excesso de empresas.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Para qual destas variáveis faz sentido a probabilidade de ela valer exatamente 3 ser maior que zero?",
    opcoes: [
      "A altura exata de uma pessoa, em metros",
      "O tempo exato de uma corrida, em minutos",
      "O peso exato de um pacote, em quilos",
      "A temperatura exata ao meio-dia, em graus",
      "O número de filhos de uma família",
    ],
    correta: 4,
    explicacao:
      "Variáveis discretas, como o número de filhos, concentram a probabilidade em valores isolados: ter exatamente 3 filhos tem probabilidade positiva. Variáveis contínuas espalham a probabilidade por intervalos, e um valor exato, como 3,000… metros, tem probabilidade zero; faz sentido perguntar por intervalos, como entre 2,95 e 3,05.\n\nAltura, tempo, peso e temperatura são contínuos: a chance de um valor exato é zero, embora valores próximos de 3 sejam possíveis.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra aleatória de 900 elementos é retirada, sem reposição, de uma população de 1.000. Comparado ao erro padrão calculado sem a correção para população finita, a quanto fica o erro padrão real da média?",
    opcoes: [
      "Igual ao valor sem correção",
      "90% do valor sem correção",
      "10% do valor sem correção",
      "Cerca de 95% do valor sem correção",
      "Cerca de 32% do valor sem correção",
    ],
    correta: 4,
    explicacao:
      "Quando a amostra é uma fração grande da população, o erro padrão é multiplicado pelo fator √((N − n)/(N − 1)) = √(100/999) ≈ 0,32. Com 90% da população observada, sobra pouca incerteza, e o erro padrão real é só cerca de 32% do calculado pela fórmula comum. Com frações pequenas, como 5%, o fator fica perto de 1 e pode ser ignorado.\n\nIgual ao valor sem correção só com populações muito grandes. 90% confunde o fator com a fração amostral. 10% é a fração não observada, sem a raiz. E 95% corresponderia a uma fração amostral de cerca de 10%.",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "Uma variável dicotômica vale 1 em 30% da população e 0 no restante. Qual é a sua variância populacional?",
    opcoes: [
      "0,3",
      "0,09",
      "0,7",
      "0,49",
      "0,21",
    ],
    correta: 4,
    explicacao:
      "A média é p = 0,3, e a variância é p(1 − p) = 0,3 · 0,7 = 0,21: os 30% com valor 1 ficam 0,7 acima da média, e os 70% com valor 0 ficam 0,3 abaixo, e 0,3 · 0,7² + 0,7 · 0,3² = 0,147 + 0,063 = 0,21. É por isso que a variância de uma proporção amostral é p(1 − p)/n. Essa variância é máxima, 0,25, quando p = 0,5.\n\n0,3 é a média, p. 0,09 é p². 0,7 é 1 − p. E 0,49 é (1 − p)².",
  },
  {
    materia: "estatistica",
    tema: "População, amostra e tipos de variável",
    dificuldade: "dificil",
    enunciado:
      "De uma população de 6 elementos, quantas amostras ordenadas de 3 elementos, com reposição, e quantos subconjuntos de 3 elementos, sem reposição, podem ser formados?",
    opcoes: [
      "20 e 216",
      "120 e 20",
      "216 e 120",
      "18 e 20",
      "216 e 20",
    ],
    correta: 4,
    explicacao:
      "Com reposição e ordem, cada uma das 3 posições pode receber qualquer dos 6 elementos: 6³ = 216 sequências. Sem reposição e sem ordem, conta-se de quantos modos escolher 3 dos 6: C(6, 3) = 20 subconjuntos. Esses números mostram como o modo de amostrar muda o conjunto de amostras possíveis.\n\nTrocar os valores inverte as duas contagens. 120 = 6 · 5 · 4 conta as sequências sem reposição, mas com ordem. E 18 = 6 · 3 não corresponde a nenhuma das duas contagens.",
  },
];
