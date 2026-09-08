/* Coesão e coerência — parte B (25 questões).
   Escolha de conectivos por valor semântico, referência pronominal,
   paralelismo, repetição e fatores externos da coerência.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"O curso será oferecido gratuitamente ___ haja número mínimo de inscritos.\" O conectivo que preenche a lacuna estabelecendo uma condição é:",
    opcoes: [
      "porque",
      "desde que",
      "portanto",
      "embora",
      "assim que",
    ],
    correta: 1,
    explicacao:
      "\"Desde que\" submete a oferta do curso ao cumprimento de um requisito, valor condicional. \"Porque\" indicaria causa já realizada e \"embora\", concessão. Note que \"desde que\" também pode ter valor temporal em outros contextos — aqui, o subjuntivo confirma a leitura condicional.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A pesquisa foi ampliada ___ os resultados fossem mais representativos.\" O conectivo adequado para indicar finalidade é:",
    opcoes: [
      "porque",
      "embora",
      "assim que",
      "para que",
      "uma vez que",
    ],
    correta: 3,
    explicacao:
      "\"Para que\" indica o propósito da ampliação, valor final, reforçado pelo verbo no subjuntivo. \"Porque\" e \"uma vez que\" trariam causa, invertendo a orientação temporal: a causa antecede a ação, enquanto a finalidade a projeta para frente.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "facil",
    enunciado:
      "Leia: \"O time perdeu a partida. ___, garantiu a classificação por saldo de gols.\" O conectivo que preenche a lacuna marcando contraste é:",
    opcoes: [
      "Mesmo assim",
      "Por isso",
      "Pois",
      "Isto é",
      "Em seguida",
    ],
    correta: 0,
    explicacao:
      "\"Mesmo assim\" indica que a classificação ocorreu apesar da derrota, valor concessivo-adversativo. \"Por isso\" sugeriria que a derrota causou a classificação, o que é logicamente incompatível. A escolha do conectivo precisa refletir a relação real entre os fatos, não apenas encadeá-los.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A cidade investiu em transporte público, ciclovias e calçadas acessíveis. ___, priorizou o deslocamento das pessoas, e não dos carros.\" O conectivo adequado para introduzir uma síntese é:",
    opcoes: [
      "Contudo",
      "Caso",
      "Enquanto",
      "Apesar disso",
      "Em resumo",
    ],
    correta: 4,
    explicacao:
      "\"Em resumo\" anuncia a condensação do que foi apresentado, valor de síntese. São equivalentes \"em suma\", \"ou seja\" e \"portanto\" quando encerram raciocínio. Conectivos adversativos como \"contudo\" criariam contraste inexistente entre a enumeração e sua conclusão.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Os dados foram coletados em 2023 e analisados em 2024. Naquele ano, a equipe ainda contava com dez pesquisadores.\" A expressão \"naquele ano\" gera problema porque:",
    opcoes: [
      "não retoma nenhum termo mencionado no texto.",
      "é incompatível com o tempo verbal empregado.",
      "não deixa claro a qual dos dois anos se refere.",
      "exige o uso obrigatório de vírgula antes do verbo.",
      "constitui repetição desnecessária de informação.",
    ],
    correta: 2,
    explicacao:
      "Com dois anos mencionados na frase anterior, o demonstrativo fica sem referente definido. Em português, \"naquele\" tende a apontar para o termo mais distante e \"neste\" para o mais próximo, mas a distinção é frágil na prática. A solução é explicitar: \"em 2023\", por exemplo.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Ela é responsável, dedicada e trabalha com afinco.\" Para restabelecer o paralelismo sintático da enumeração, a reescrita adequada é:",
    opcoes: [
      "Ela é responsável, dedicada e afinco no trabalho.",
      "Ela é responsável, dedicada e trabalhadora.",
      "Ela tem responsabilidade, é dedicada e trabalha.",
      "Ela é responsável, com dedicação e trabalhando.",
      "Ela é responsável e dedicada e trabalha com afinco.",
    ],
    correta: 1,
    explicacao:
      "Os dois primeiros itens são adjetivos, e o terceiro precisa acompanhar essa mesma classe. \"Trabalhadora\" restabelece a simetria da série. Paralelismo é a exigência de que elementos coordenados tenham a mesma estrutura sintática, e sua quebra é uma das falhas mais comuns em redações.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A empresa anunciou lucro recorde. Os trabalhadores, ___, não receberam qualquer reajuste.\" O conectivo adequado à relação de contraste é:",
    opcoes: [
      "por conseguinte",
      "por exemplo",
      "no entanto",
      "isto é",
      "assim",
    ],
    correta: 2,
    explicacao:
      "\"No entanto\" contrapõe o resultado da empresa à ausência de reajuste, criando o efeito crítico pretendido. Note que, deslocado para o interior da oração, o conectivo adversativo vem isolado por vírgulas — detalhe de pontuação que acompanha esse tipo de construção.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Ele não foi à reunião porque estava doente. Aliás, quem estava doente era o irmão.\" O trecho apresenta problema de:",
    opcoes: [
      "coesão referencial, pela ausência de pronomes.",
      "paralelismo entre as duas orações.",
      "acentuação gráfica das palavras destacadas.",
      "coerência, pois a segunda frase invalida a justificativa da primeira.",
      "regência do verbo \"ir\" na primeira oração.",
    ],
    correta: 3,
    explicacao:
      "A segunda frase desmonta a explicação dada na primeira sem que o texto reconheça a contradição, deixando o leitor sem saber qual informação vale. A coesão está intacta — os conectivos funcionam —, mas o sentido global se desfaz. É um caso claro de incoerência por informação contraditória.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Vários fatores explicam o problema: a falta de investimento, a ausência de planejamento e a rotatividade das equipes.\" Os dois-pontos, nesse trecho, introduzem:",
    opcoes: [
      "uma citação literal de outro autor.",
      "uma enumeração que detalha o termo anterior.",
      "uma oposição à ideia apresentada antes.",
      "a conclusão de um raciocínio argumentativo.",
      "uma condição para que o problema ocorra.",
    ],
    correta: 1,
    explicacao:
      "Os dois-pontos anunciam a especificação do que foi apresentado de forma genérica como \"vários fatores\". Essa é uma das funções centrais do sinal, ao lado da introdução de falas e de explicações. A enumeração que se segue mantém paralelismo, com três sintagmas nominais de mesma estrutura.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A tecnologia avançou. A tecnologia mudou o trabalho. A tecnologia transformou a educação.\" O principal problema desse trecho é:",
    opcoes: [
      "a incoerência entre as três afirmações.",
      "o uso incorreto do tempo verbal empregado.",
      "a repetição excessiva do mesmo termo.",
      "a ausência de sujeito nas duas últimas orações.",
      "o emprego de vocabulário impreciso.",
    ],
    correta: 2,
    explicacao:
      "As três afirmações são coerentes entre si, mas a repetição literal do sujeito torna o texto monótono e revela pobreza de recursos coesivos. A reescrita pediria pronomes, elipses ou substituições lexicais: \"A tecnologia avançou, mudou o trabalho e transformou a educação\".",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"O projeto exige recursos, ___ nem sempre estão disponíveis no orçamento municipal.\" A expressão que preenche a lacuna estabelecendo retomada correta é:",
    opcoes: [
      "os quais",
      "cujos",
      "onde",
      "aonde",
      "no qual",
    ],
    correta: 0,
    explicacao:
      "\"Os quais\" retoma \"recursos\", concordando em gênero e número e funcionando como sujeito da oração adjetiva. \"Cujo\" indica posse e exige substantivo depois; \"onde\" só retoma lugar. Escolher o relativo adequado é um dos pontos mais cobrados em coesão referencial.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Trata-se da escola ___ diretora foi premiada nacionalmente.\" O pronome relativo que preenche corretamente a lacuna, indicando posse, é:",
    opcoes: [
      "que",
      "a qual",
      "onde",
      "cuja",
      "quem",
    ],
    correta: 3,
    explicacao:
      "\"Cuja\" estabelece relação de posse entre a escola e a diretora, e concorda com o substantivo que o segue — daí a forma feminina. Não se usa artigo depois de \"cujo\": a construção \"cuja a diretora\" é incorreta. \"Onde\" só caberia se a referência fosse a lugar em sentido locativo.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A escola contratou novos professores. ___, ampliou o número de turmas no período noturno.\" O conectivo adequado para somar informações é:",
    opcoes: [
      "Todavia",
      "Caso",
      "Ademais",
      "Salvo se",
      "Ao passo que",
    ],
    correta: 2,
    explicacao:
      "\"Ademais\" acrescenta uma segunda medida na mesma direção da primeira, valor aditivo. São equivalentes \"além disso\" e \"outrossim\", este último já bastante marcado como formal. As demais alternativas trariam oposição, condição ou contraste, incompatíveis com o encadeamento proposto.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Faltou planejamento. Faltou orçamento. Faltou, sobretudo, vontade política.\" A repetição da estrutura no início das frases produz efeito de:",
    opcoes: [
      "incoerência entre as informações apresentadas.",
      "ambiguidade quanto ao sujeito das orações.",
      "quebra do paralelismo sintático exigido.",
      "ênfase, por meio de paralelismo intencional.",
      "imprecisão vocabular no texto argumentativo.",
    ],
    correta: 3,
    explicacao:
      "A repetição aqui é deliberada e organiza a progressão dos argumentos, culminando no item apresentado como mais grave. Trata-se de paralelismo com valor expressivo, próximo da anáfora. Diferentemente da repetição por descuido, essa construção fortalece o texto.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Um leitor consegue compreender um texto que não explicita todas as informações porque mobiliza seu conhecimento prévio sobre o assunto. Esse fator, essencial à coerência, é chamado de:",
    opcoes: [
      "conhecimento de mundo compartilhado entre autor e leitor.",
      "paralelismo sintático entre as orações do texto.",
      "coesão referencial por meio de pronomes.",
      "progressão temática entre os parágrafos.",
      "adequação vocabular ao registro formal.",
    ],
    correta: 0,
    explicacao:
      "Nenhum texto diz tudo: ele conta com inferências que o leitor faz a partir do que já sabe. Quando esse conhecimento não é compartilhado, o texto perde coerência para aquele leitor específico, ainda que esteja bem construído. É por isso que a coerência não é propriedade apenas do texto, mas da relação entre texto e leitor.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"O medicamento reduz os sintomas ___ não elimina a causa da doença.\" O conectivo adequado para marcar a ressalva é:",
    opcoes: [
      "logo",
      "pois",
      "portanto",
      "conforme",
      "embora",
    ],
    correta: 4,
    explicacao:
      "\"Embora\" introduz uma concessão que limita o alcance da afirmação anterior, exigindo o verbo no subjuntivo — \"embora não elimine\". Alternativamente, caberia \"mas\" com o verbo no indicativo. Conectivos conclusivos e causais produziriam relação logicamente incompatível.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Alguns países adotaram a medida. O Brasil, ___, ainda discute o tema no Congresso.\" O conectivo que estabelece contraste entre os dois casos é:",
    opcoes: [
      "por conseguinte",
      "por sua vez",
      "isto é",
      "com efeito",
      "de fato",
    ],
    correta: 1,
    explicacao:
      "\"Por sua vez\" marca a mudança de foco e o contraste entre as situações comparadas. \"Isto é\" e \"com efeito\" trariam explicação ou confirmação, e \"por conseguinte\", conclusão. Em textos comparativos, esse tipo de conectivo organiza a alternância entre os casos analisados.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Como não havia energia elétrica na região, os moradores acompanharam o jogo pela televisão a noite inteira.\" A incoerência do trecho resulta de:",
    opcoes: [
      "erro na regência do verbo \"acompanhar\".",
      "ausência de vírgula após a oração inicial.",
      "incompatibilidade entre a condição descrita e a ação relatada.",
      "uso inadequado do pronome na segunda oração.",
      "emprego incorreto do tempo verbal composto.",
    ],
    correta: 2,
    explicacao:
      "Sem energia elétrica, assistir à televisão a noite inteira é impossível. A estrutura sintática está correta e os conectivos funcionam, mas o conteúdo viola o conhecimento de mundo do leitor. Coerência exige compatibilidade não apenas interna, mas também com aquilo que se sabe sobre a realidade.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Foram aprovadas três medidas: ampliar o atendimento, reduzir a fila de espera e a criação de novos postos.\" Para corrigir a quebra de paralelismo, o último item deveria ser reescrito como:",
    opcoes: [
      "novos postos serão criados.",
      "com a criação de novos postos.",
      "que se criem novos postos.",
      "a criação, dos novos postos.",
      "criar novos postos.",
    ],
    correta: 4,
    explicacao:
      "Os dois primeiros itens são orações reduzidas de infinitivo — ampliar, reduzir —, e o terceiro precisa seguir a mesma estrutura. \"Criar novos postos\" restabelece a simetria. Alternativamente, todos os itens poderiam virar substantivos: ampliação, redução e criação.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A proposta foi rejeitada. ___, o autor anunciou que apresentará nova versão do texto.\" O conectivo que preenche a lacuna indicando sequência temporal é:",
    opcoes: [
      "Em seguida",
      "Porquanto",
      "Salvo se",
      "Conquanto",
      "A fim de que",
    ],
    correta: 0,
    explicacao:
      "\"Em seguida\" situa o anúncio depois da rejeição, valor temporal e sequencial. \"Porquanto\" traria causa, \"conquanto\" concessão e \"salvo se\" condição. Operadores de sequenciação são especialmente úteis em relatos e em textos que descrevem processos.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Muitos estudantes abandonam o curso no primeiro ano. Essa evasão preocupa as instituições.\" A expressão \"essa evasão\" contribui para a coesão porque:",
    opcoes: [
      "introduz um tema inteiramente novo no texto.",
      "nomeia e retoma o fato descrito na frase anterior.",
      "estabelece contraste com a informação inicial.",
      "antecipa um argumento que virá adiante.",
      "indica a finalidade do abandono mencionado.",
    ],
    correta: 1,
    explicacao:
      "A expressão resume em um substantivo o conteúdo da oração anterior e o retoma, recurso chamado de nominalização anafórica. Além de amarrar o texto, ele nomeia o fenômeno com um termo técnico, elevando o nível da análise. É um recurso muito produtivo em redações dissertativas.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Estudou bastante ___ conseguiu a aprovação no concurso.\" O conectivo que preenche a lacuna indicando consequência é:",
    opcoes: [
      "embora",
      "caso",
      "apesar de que",
      "salvo se",
      "e, por isso,",
    ],
    correta: 4,
    explicacao:
      "\"E, por isso,\" apresenta a aprovação como resultado do estudo, valor conclusivo. \"Embora\" e \"apesar de que\" trariam concessão, sugerindo que a aprovação ocorreu contra a expectativa — leitura incompatível com o esforço mencionado.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Em uma redação dissertativa, o parágrafo de conclusão costuma ser introduzido por conectivos que sinalizam fechamento. Cumprem bem essa função expressões como:",
    opcoes: [
      "por exemplo, a saber, tais como",
      "todavia, entretanto, no entanto",
      "primeiramente, em seguida, depois",
      "isto é, ou seja, vale dizer",
      "portanto, em síntese, diante do exposto",
    ],
    correta: 4,
    explicacao:
      "Esses conectivos anunciam a retomada e o encerramento do raciocínio, preparando o leitor para a proposta de intervenção. Exemplificadores, adversativos, sequenciadores e explicativos cumprem funções distintas ao longo do texto, e usá-los na conclusão desorienta a leitura.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Poucas pessoas compareceram. A maioria delas elogiou a organização do evento.\" A expressão \"a maioria delas\" mantém a coesão ao:",
    opcoes: [
      "retomar parcialmente o conjunto mencionado antes.",
      "introduzir um grupo distinto do citado anteriormente.",
      "contradizer a informação da primeira frase.",
      "antecipar um dado que aparecerá adiante.",
      "indicar a causa do comparecimento reduzido.",
    ],
    correta: 0,
    explicacao:
      "O pronome \"delas\" retoma \"poucas pessoas\", e \"a maioria\" recorta uma parte desse conjunto. Trata-se de retomada parcial, recurso que permite falar de subconjuntos sem repetir o termo original. A coerência se mantém porque não há contradição: a maioria de um grupo pequeno continua sendo um número pequeno.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Sobre a relação entre coesão e coerência na avaliação de uma redação, é correto afirmar que:",
    opcoes: [
      "um texto coeso é sempre necessariamente coerente.",
      "coerência e coesão são termos sinônimos na análise textual.",
      "a coesão depende exclusivamente do número de conectivos usados.",
      "um texto pode ter coesão adequada e ainda assim ser incoerente.",
      "a coerência é avaliada apenas em textos literários.",
    ],
    correta: 3,
    explicacao:
      "Conectivos e pronomes corretamente empregados garantem a amarração formal, mas não impedem contradições, informações irrelevantes ou conclusões que não decorrem dos argumentos. As duas dimensões são avaliadas separadamente justamente porque uma não assegura a outra. Acumular conectivos, aliás, pode piorar a coerência.",
  },
];
