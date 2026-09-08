/* Morfologia: classes de palavras (50 questões).
   As dez classes, sua identificação pelo comportamento na frase, flexões e os
   casos em que uma mesma palavra muda de classe conforme o contexto.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "facil",
    enunciado:
      "Na frase \"A liberdade é um direito fundamental\", a palavra \"liberdade\" pertence à classe dos:",
    opcoes: [
      "adjetivos",
      "substantivos",
      "advérbios",
      "verbos",
      "pronomes",
    ],
    correta: 1,
    explicacao:
      "Substantivos nomeiam seres, objetos, sentimentos e conceitos, e admitem artigo — aqui, \"a liberdade\". Trata-se de substantivo abstrato, porque designa algo que não existe independentemente de quem o percebe. O teste do artigo é o mais rápido para identificar a classe.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "facil",
    enunciado:
      "Na frase \"O time apresentou uma atuação brilhante\", a palavra \"brilhante\" pertence à classe dos:",
    opcoes: [
      "substantivos",
      "advérbios",
      "adjetivos",
      "numerais",
      "conjunções",
    ],
    correta: 2,
    explicacao:
      "O adjetivo atribui característica ao substantivo e concorda com ele em gênero e número — \"atuação brilhante\", \"jogos brilhantes\". Se a palavra modificasse um verbo, seria advérbio. É essa relação de dependência que define a classe, não a palavra isolada.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele chegou tarde à reunião\", a palavra \"tarde\" pertence à classe dos:",
    opcoes: [
      "substantivos",
      "adjetivos",
      "advérbios",
      "preposições",
      "interjeições",
    ],
    correta: 2,
    explicacao:
      "Aqui \"tarde\" modifica o verbo \"chegou\", indicando circunstância de tempo: é advérbio, classe invariável. Em \"a tarde estava fria\", a mesma palavra vem com artigo e funciona como substantivo. A classe depende do papel exercido na frase.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Comprei livros e cadernos para o semestre\", a palavra \"e\" pertence à classe das:",
    opcoes: [
      "preposições",
      "conjunções",
      "interjeições",
      "advérbios",
      "pronomes",
    ],
    correta: 1,
    explicacao:
      "A conjunção liga termos ou orações; aqui, une dois substantivos em relação de adição. Preposições também conectam, mas subordinam um termo ao outro, como em \"livros de história\". A conjunção coordena elementos de mesma função sintática.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"O caderno de Maria ficou na mesa\", a palavra \"de\" pertence à classe das:",
    opcoes: [
      "conjunções",
      "interjeições",
      "preposições",
      "advérbios",
      "numerais",
    ],
    correta: 2,
    explicacao:
      "A preposição estabelece relação de subordinação entre dois termos: \"caderno\" e \"Maria\", indicando posse. É classe invariável e nunca inicia oração por si só. Diferente da conjunção, ela liga palavras dentro da mesma oração, e não orações entre si.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "facil",
    enunciado:
      "Na frase \"Ela estudou durante todo o fim de semana\", a palavra \"estudou\" pertence à classe dos:",
    opcoes: [
      "substantivos",
      "verbos",
      "adjetivos",
      "advérbios",
      "artigos",
    ],
    correta: 1,
    explicacao:
      "Verbos indicam ação, estado ou fenômeno e flexionam-se em tempo, modo, número e pessoa. Aqui, \"estudou\" está no pretérito perfeito do indicativo, terceira pessoa do singular. A possibilidade de conjugação é o teste decisivo para identificar a classe.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Aquele aluno entregou o trabalho antes do prazo\", a palavra \"aquele\" é classificada como:",
    opcoes: [
      "artigo definido",
      "pronome demonstrativo",
      "pronome possessivo",
      "numeral ordinal",
      "advérbio de lugar",
    ],
    correta: 1,
    explicacao:
      "Pronomes demonstrativos situam o ser no espaço, no tempo ou no discurso em relação às pessoas do diálogo. \"Aquele\" indica distância tanto do falante quanto do ouvinte. Artigos apenas determinam o substantivo, sem essa marcação de posição.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Meu irmão chegou de viagem ontem\", a palavra \"meu\" é classificada como:",
    opcoes: [
      "pronome demonstrativo",
      "artigo indefinido",
      "pronome possessivo",
      "adjetivo pátrio",
      "numeral cardinal",
    ],
    correta: 2,
    explicacao:
      "Pronomes possessivos indicam a quem pertence o ser referido e concordam com o objeto possuído, não com o possuidor: \"meu irmão\", \"minha irmã\". Eles também situam a posse em relação às três pessoas do discurso.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "facil",
    enunciado:
      "Na frase \"Ele foi o primeiro colocado no concurso\", a palavra \"primeiro\" é um numeral do tipo:",
    opcoes: [
      "cardinal",
      "ordinal",
      "multiplicativo",
      "fracionário",
      "coletivo",
    ],
    correta: 1,
    explicacao:
      "Numerais ordinais indicam posição em uma sequência: primeiro, segundo, décimo. Os cardinais indicam quantidade — um, dois, dez; os multiplicativos, aumento proporcional — dobro, triplo; e os fracionários, divisão — metade, terço.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ah! Que susto você me deu\", a palavra \"Ah\" pertence à classe das:",
    opcoes: [
      "conjunções",
      "preposições",
      "interjeições",
      "advérbios",
      "pronomes",
    ],
    correta: 2,
    explicacao:
      "Interjeições exprimem reações emocionais súbitas e constituem, sozinhas, um enunciado completo. São invariáveis e não estabelecem relação sintática com os demais termos. Locuções interjetivas, como \"meu Deus!\", cumprem a mesma função.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Considere as frases \"Ele fala baixo\" e \"O muro é baixo\". A respeito da palavra \"baixo\", é correto afirmar que ela:",
    opcoes: [
      "é advérbio na primeira frase e adjetivo na segunda.",
      "é adjetivo nas duas frases, com sentidos diferentes.",
      "é substantivo na primeira e verbo na segunda.",
      "pertence sempre à classe dos advérbios.",
      "é preposição na primeira e conjunção na segunda.",
    ],
    correta: 0,
    explicacao:
      "Na primeira frase, a palavra modifica o verbo \"fala\", indicando modo, e permanece invariável — comportamento de advérbio. Na segunda, caracteriza o substantivo \"muro\" e concordaria no plural: \"muros baixos\". A classe se define pelo comportamento na frase, não pela forma isolada.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Os candidatos aprovados receberão a convocação\", a palavra \"os\" pertence à classe dos:",
    opcoes: [
      "pronomes pessoais",
      "artigos definidos",
      "numerais",
      "adjetivos",
      "advérbios",
    ],
    correta: 1,
    explicacao:
      "O artigo definido antecede o substantivo e o individualiza, indicando que se trata de seres já conhecidos ou determinados. Também marca gênero e número. O artigo indefinido — um, uma, uns, umas — apresenta o ser de forma vaga ou como novidade.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"O jantar estava delicioso\", a palavra \"jantar\" é classificada como:",
    opcoes: [
      "verbo no infinitivo, exercendo função de predicado.",
      "substantivo, por vir determinado por artigo.",
      "adjetivo, por caracterizar um estado.",
      "advérbio de modo, por indicar circunstância.",
      "conjunção subordinativa temporal.",
    ],
    correta: 1,
    explicacao:
      "O artigo \"o\" transforma o infinitivo em substantivo, processo chamado de derivação imprópria. Em \"prefiro jantar cedo\", a mesma palavra é verbo. Essa mudança de classe sem mudança de forma é frequente em português e cobrada com regularidade.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ela mesma resolveu o problema\", a palavra \"mesma\" funciona como:",
    opcoes: [
      "pronome de tratamento.",
      "pronome demonstrativo de reforço.",
      "conjunção adversativa.",
      "advérbio de intensidade.",
      "substantivo abstrato.",
    ],
    correta: 1,
    explicacao:
      "Aqui \"mesma\" reforça a identidade do sujeito e concorda com ele em gênero e número. Nesse emprego, é pronome demonstrativo. Já o uso de \"o mesmo\" como substituto de sujeito — \"os alunos chegaram; os mesmos entraram\" — é condenado pela norma-padrão.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele trabalha muito, porém ganha pouco\", as palavras \"muito\" e \"pouco\" pertencem à classe dos:",
    opcoes: [
      "adjetivos",
      "substantivos",
      "advérbios",
      "numerais",
      "artigos",
    ],
    correta: 2,
    explicacao:
      "Ambas modificam verbos, indicando intensidade, e permanecem invariáveis: comportamento típico de advérbio. Se acompanhassem substantivos — \"muitos livros\", \"poucas pessoas\" —, seriam pronomes indefinidos e variariam em gênero e número.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Alguém deixou um recado na portaria\", a palavra \"alguém\" é classificada como:",
    opcoes: [
      "pronome pessoal reto",
      "pronome indefinido",
      "pronome relativo",
      "substantivo comum",
      "advérbio de dúvida",
    ],
    correta: 1,
    explicacao:
      "Pronomes indefinidos referem-se à terceira pessoa de modo vago: alguém, ninguém, algo, tudo, alguns, nenhum. Aqui, \"alguém\" ocupa a posição de sujeito sem identificar quem praticou a ação. Alguns são invariáveis, outros flexionam em gênero e número.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"O livro que comprei estava esgotado\", a palavra \"que\" é classificada como:",
    opcoes: [
      "conjunção integrante",
      "pronome relativo",
      "advérbio de intensidade",
      "preposição acidental",
      "interjeição de surpresa",
    ],
    correta: 1,
    explicacao:
      "O \"que\" retoma \"o livro\" e exerce função sintática dentro da oração que introduz — aqui, objeto direto de \"comprei\". Isso caracteriza o pronome relativo. Um teste seguro é a substituição por \"o qual\": \"o livro o qual comprei\".",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "A classe de palavras que apresenta o maior número de flexões em português é a dos:",
    opcoes: [
      "substantivos",
      "adjetivos",
      "verbos",
      "advérbios",
      "artigos",
    ],
    correta: 2,
    explicacao:
      "Os verbos flexionam-se em número, pessoa, tempo, modo e voz, o que gera dezenas de formas para cada verbo. Substantivos e adjetivos variam apenas em gênero, número e grau. Advérbios, preposições, conjunções e interjeições são invariáveis.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Entre as classes gramaticais do português, são consideradas invariáveis:",
    opcoes: [
      "advérbio, preposição, conjunção e interjeição.",
      "substantivo, adjetivo e verbo.",
      "artigo, numeral e pronome.",
      "verbo, pronome e substantivo.",
      "adjetivo, artigo e numeral.",
    ],
    correta: 0,
    explicacao:
      "Essas quatro classes não sofrem flexão de gênero, número ou grau. As demais — substantivo, adjetivo, artigo, numeral, pronome e verbo — são variáveis. A exceção aparente são advérbios em grau, como \"pertinho\", tratados como caso especial de intensificação.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Choveu bastante durante a madrugada\", a palavra \"bastante\" é advérbio. Já em \"havia bastantes motivos para comemorar\", ela é:",
    opcoes: [
      "pronome indefinido, por acompanhar substantivo e flexionar.",
      "advérbio, mantendo a mesma classificação.",
      "conjunção coordenativa aditiva.",
      "preposição essencial.",
      "verbo auxiliar em locução.",
    ],
    correta: 0,
    explicacao:
      "A flexão em número — \"bastantes motivos\" — revela que a palavra acompanha o substantivo e funciona como pronome indefinido. Como advérbio, permanece invariável: \"choveu bastante\". Essa alternância de classe é um dos pontos mais cobrados sobre \"bastante\", \"meio\" e \"muito\".",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"Ela ficou meio triste com a notícia\", a palavra \"meio\" está corretamente empregada porque:",
    opcoes: [
      "concorda em gênero com o adjetivo que acompanha.",
      "funciona como numeral fracionário invariável.",
      "é advérbio de intensidade e, portanto, invariável.",
      "é substantivo e dispensa concordância.",
      "é preposição regida pelo verbo \"ficar\".",
    ],
    correta: 2,
    explicacao:
      "Modificando o adjetivo \"triste\", \"meio\" equivale a \"um pouco\" e não varia: a forma \"meia triste\" é incorreta. Já em \"comeu meia laranja\", a palavra é numeral fracionário e concorda com o substantivo. A classe determina se há ou não flexão.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele não compareceu, pois estava doente\", a palavra \"pois\" pertence à classe das:",
    opcoes: [
      "conjunções",
      "preposições",
      "interjeições",
      "advérbios",
      "pronomes",
    ],
    correta: 0,
    explicacao:
      "\"Pois\" liga duas orações estabelecendo relação de explicação, e por isso é conjunção. Anteposto ao verbo, tem valor explicativo; posposto, valor conclusivo — como em \"estava doente; não compareceu, pois\". A posição altera o sentido, não a classe.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Os alunos entregaram-lhe os trabalhos\", o pronome \"lhe\" é classificado como:",
    opcoes: [
      "pronome pessoal oblíquo átono",
      "pronome pessoal reto",
      "pronome possessivo",
      "pronome relativo",
      "pronome demonstrativo",
    ],
    correta: 0,
    explicacao:
      "\"Lhe\" é pronome oblíquo átono e equivale a \"a ele\" ou \"para ele\", exercendo função de objeto indireto. Por isso não se usa com verbos transitivos diretos: escreve-se \"eu o vi\", e não \"eu lhe vi\". Pronomes retos — eu, tu, ele — funcionam como sujeito.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Vossa Excelência já assinou o documento?\", a expressão destacada é classificada como:",
    opcoes: [
      "pronome de tratamento",
      "pronome demonstrativo",
      "substantivo próprio composto",
      "locução adverbial",
      "adjetivo composto",
    ],
    correta: 0,
    explicacao:
      "Pronomes de tratamento referem-se à pessoa com quem se fala, mas exigem verbo na terceira pessoa: \"Vossa Excelência assinou\", e não \"assinastes\". São usados em contextos formais e variam conforme o cargo do interlocutor.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"O andar do prédio foi reformado\", a palavra \"andar\" pertence à classe dos substantivos. Isso ocorre por meio do processo de:",
    opcoes: [
      "derivação prefixal",
      "composição por justaposição",
      "derivação imprópria",
      "hibridismo vocabular",
      "onomatopeia",
    ],
    correta: 2,
    explicacao:
      "A derivação imprópria muda a classe da palavra sem alterar sua forma, geralmente pela presença de um determinante. O artigo \"o\" substantiva o infinitivo. O mesmo ocorre em \"o jantar\", \"o falar\" e \"o não\" — este último, um advérbio substantivado.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Comprei um carro novo\", a palavra \"um\" é classificada como:",
    opcoes: [
      "artigo indefinido, apresentando o ser de forma vaga.",
      "numeral cardinal, indicando quantidade exata.",
      "pronome indefinido, substituindo o substantivo.",
      "preposição regida pelo verbo comprar.",
      "advérbio de intensidade.",
    ],
    correta: 0,
    explicacao:
      "No contexto, o falante não enfatiza a quantidade, mas introduz um ser não identificado: comportamento de artigo indefinido. Em \"comprei um carro, não dois\", a mesma palavra seria numeral. A intenção comunicativa decide a classificação.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Talvez ele venha amanhã\", a palavra \"talvez\" é um advérbio que indica circunstância de:",
    opcoes: [
      "tempo",
      "lugar",
      "modo",
      "dúvida",
      "intensidade",
    ],
    correta: 3,
    explicacao:
      "Advérbios de dúvida — talvez, possivelmente, quiçá, porventura — expressam incerteza e costumam exigir verbo no subjuntivo. Na frase, \"amanhã\" é o advérbio de tempo. Cada advérbio precisa ser classificado pela circunstância que acrescenta.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele agiu com prudência diante do risco\", a expressão \"com prudência\" equivale a um advérbio e é classificada como:",
    opcoes: [
      "locução adjetiva",
      "locução verbal",
      "locução prepositiva",
      "locução adverbial",
      "locução conjuntiva",
    ],
    correta: 3,
    explicacao:
      "Locuções adverbiais são conjuntos de palavras com valor de advérbio, aqui indicando modo — equivale a \"prudentemente\". Locuções adjetivas, como \"de ouro\", equivalem a adjetivos e acompanham substantivos. A função no enunciado define o tipo de locução.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele tem um coração de ouro\", a expressão \"de ouro\" é classificada como:",
    opcoes: [
      "locução adjetiva",
      "locução adverbial de modo",
      "locução conjuntiva",
      "locução prepositiva",
      "locução verbal",
    ],
    correta: 0,
    explicacao:
      "A expressão caracteriza o substantivo \"coração\" e equivale ao adjetivo \"generoso\": trata-se de locução adjetiva. Muitas dessas locuções têm adjetivo correspondente — \"de mãe\" equivale a materno, \"de cidade\" a urbano —, mas nem todas.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"Ele estava lendo quando o telefone tocou\", a expressão \"estava lendo\" é classificada como:",
    opcoes: [
      "locução adjetiva",
      "locução adverbial",
      "locução verbal",
      "locução prepositiva",
      "locução interjetiva",
    ],
    correta: 2,
    explicacao:
      "A locução verbal reúne um verbo auxiliar flexionado e um verbo principal em forma nominal, formando uma única unidade de sentido. Aqui, o auxiliar \"estava\" indica tempo e aspecto, e \"lendo\" traz o significado principal. O conjunto funciona como um só verbo.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Os brasileiros comemoraram a conquista\", a palavra \"brasileiros\" é classificada como:",
    opcoes: [
      "adjetivo pátrio substantivado",
      "advérbio de lugar",
      "pronome indefinido",
      "numeral coletivo",
      "conjunção correlativa",
    ],
    correta: 0,
    explicacao:
      "Precedida de artigo e ocupando a posição de sujeito, a palavra funciona como substantivo, embora sua origem seja adjetiva. Em \"o povo brasileiro\", ela retoma o comportamento de adjetivo. Adjetivos pátrios indicam origem geográfica.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Nem todos concordaram com a proposta\", a palavra \"nem\" pertence à classe das:",
    opcoes: [
      "preposições",
      "interjeições",
      "artigos",
      "conjunções",
      "numerais",
    ],
    correta: 3,
    explicacao:
      "\"Nem\" equivale a \"e não\" e funciona como conjunção coordenativa aditiva de valor negativo. Também pode aparecer reforçando negação, como em \"não veio nem avisou\". Sua classificação não muda: continua sendo conjunção.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Considere as frases \"Ele fala com clareza\" e \"Ele é o único que fala\". Nas duas ocorrências, a palavra \"fala\" pertence, respectivamente, às classes:",
    opcoes: [
      "substantivo e verbo",
      "verbo e substantivo",
      "adjetivo e verbo",
      "verbo e verbo",
      "substantivo e substantivo",
    ],
    correta: 3,
    explicacao:
      "Nos dois casos a palavra é verbo conjugado na terceira pessoa do singular do presente. Ela só seria substantivo em contextos como \"a fala do presidente\", com artigo e sem função de predicado. A presença de sujeito e a possibilidade de conjugação confirmam a classe verbal.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Encontrei-o na saída do teatro\", o pronome \"o\" exerce a função de:",
    opcoes: [
      "sujeito da oração",
      "objeto indireto",
      "adjunto adnominal",
      "objeto direto",
      "predicativo do sujeito",
    ],
    correta: 3,
    explicacao:
      "Os pronomes oblíquos \"o\", \"a\", \"os\" e \"as\" funcionam como objeto direto, complementando verbos que não exigem preposição. Já \"lhe\" corresponde ao objeto indireto. Confundir os dois é a origem do erro em construções como \"eu lhe vi\".",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele correu velozmente até a linha de chegada\", a palavra \"velozmente\" foi formada pelo processo de:",
    opcoes: [
      "derivação prefixal",
      "composição por aglutinação",
      "derivação regressiva",
      "derivação sufixal",
      "abreviação vocabular",
    ],
    correta: 3,
    explicacao:
      "O sufixo -mente, acrescentado à forma feminina do adjetivo, forma advérbios de modo. Trata-se de derivação sufixal, o processo mais produtivo do português para essa classe. Em séries de advérbios, o sufixo aparece só no último: \"clara e objetivamente\".",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Comprei dois quilos de arroz\", a palavra \"dois\" é um numeral do tipo:",
    opcoes: [
      "ordinal",
      "multiplicativo",
      "fracionário",
      "cardinal",
      "coletivo",
    ],
    correta: 3,
    explicacao:
      "Numerais cardinais indicam quantidade exata: um, dois, cem. Os ordinais marcam posição em série, os multiplicativos indicam proporção de aumento e os fracionários, divisão. Numerais coletivos, como \"dúzia\" e \"dezena\", designam conjuntos.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"Faz dois anos que não o vejo\", o verbo \"fazer\" é classificado como:",
    opcoes: [
      "verbo transitivo direto",
      "verbo de ligação",
      "verbo auxiliar de locução",
      "verbo pronominal reflexivo",
      "verbo impessoal, sem sujeito",
    ],
    correta: 4,
    explicacao:
      "Indicando tempo decorrido, \"fazer\" é impessoal e fica sempre na terceira pessoa do singular: \"faz dois anos\", e não \"fazem dois anos\". O mesmo ocorre com \"haver\" existencial. Verbos impessoais não admitem sujeito.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"O menino é inteligente\", o verbo \"ser\" é classificado como:",
    opcoes: [
      "verbo transitivo direto",
      "verbo intransitivo",
      "verbo impessoal",
      "verbo auxiliar",
      "verbo de ligação",
    ],
    correta: 4,
    explicacao:
      "Verbos de ligação não indicam ação: eles unem o sujeito a uma característica, chamada predicativo. Pertencem a esse grupo \"ser\", \"estar\", \"permanecer\", \"parecer\", \"ficar\" e \"continuar\". O mesmo verbo pode ser de ligação em uma frase e intransitivo em outra.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele estuda mais do que o irmão\", a palavra \"mais\" pertence à classe dos:",
    opcoes: [
      "adjetivos",
      "substantivos",
      "artigos",
      "pronomes possessivos",
      "advérbios",
    ],
    correta: 4,
    explicacao:
      "\"Mais\" modifica o verbo \"estuda\", indicando intensidade, e permanece invariável: é advérbio. Em \"quero mais açúcar\", acompanha substantivo e funciona como pronome indefinido. Novamente, o comportamento na frase decide a classe.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"O porquê da decisão nunca foi explicado\", a grafia \"porquê\" está correta porque a palavra:",
    opcoes: [
      "introduz uma pergunta direta.",
      "equivale a uma conjunção causal.",
      "encerra uma pergunta indireta.",
      "substitui a expressão \"pelo qual\".",
      "funciona como substantivo, precedida de artigo.",
    ],
    correta: 4,
    explicacao:
      "Com artigo antes, a palavra é substantivo e se escreve junta e acentuada, admitindo plural: \"os porquês\". \"Por que\" separado inicia perguntas; \"por quê\" encerra frase; \"porque\" junto e sem acento é conjunção causal ou explicativa.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Cheguei cedo, mas a reunião já havia começado\", a palavra \"mas\" é uma conjunção coordenativa do tipo:",
    opcoes: [
      "aditiva",
      "alternativa",
      "conclusiva",
      "explicativa",
      "adversativa",
    ],
    correta: 4,
    explicacao:
      "A conjunção adversativa marca contraste entre as orações, quebrando a expectativa criada pela primeira. Pertencem ao mesmo grupo \"porém\", \"contudo\", \"todavia\" e \"entretanto\". A relação estabelecida é de oposição, não de adição.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele se machucou durante o treino\", a palavra \"se\" é classificada como:",
    opcoes: [
      "conjunção condicional",
      "pronome apassivador",
      "índice de indeterminação do sujeito",
      "partícula expletiva de realce",
      "pronome reflexivo",
    ],
    correta: 4,
    explicacao:
      "O sujeito pratica e sofre a mesma ação, o que caracteriza o pronome reflexivo — equivale a \"machucou a si mesmo\". Em \"vendem-se casas\", o \"se\" é apassivador; em \"precisa-se de ajuda\", indetermina o sujeito; em \"se ele vier\", é conjunção.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"Vendem-se apartamentos na região central\", a palavra \"se\" é classificada como:",
    opcoes: [
      "pronome reflexivo",
      "conjunção integrante",
      "índice de indeterminação do sujeito",
      "pronome apassivador",
      "advérbio de dúvida",
    ],
    correta: 3,
    explicacao:
      "A construção equivale a \"apartamentos são vendidos\", o que revela voz passiva sintética: o \"se\" é pronome apassivador e o verbo concorda com o sujeito \"apartamentos\". Por isso o plural é obrigatório. Com verbo transitivo indireto, como em \"precisa-se de\", o \"se\" indetermina o sujeito e o verbo fica no singular.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Que dia lindo!\", a palavra \"que\" é classificada como:",
    opcoes: [
      "pronome relativo",
      "conjunção integrante",
      "pronome interrogativo",
      "advérbio de intensidade",
      "preposição acidental",
    ],
    correta: 3,
    explicacao:
      "Em construções exclamativas diante de substantivo ou adjetivo, \"que\" intensifica e equivale a \"quão\": comporta-se como advérbio de intensidade. Como pronome relativo, retomaria um termo anterior; como conjunção integrante, ligaria orações substantivas.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Os documentos foram entregues pelo secretário\", a forma verbal \"entregues\" é:",
    opcoes: [
      "um particípio, em locução de voz passiva.",
      "um gerúndio, indicando ação em curso.",
      "um infinitivo pessoal flexionado.",
      "um substantivo derivado de verbo.",
      "um adjetivo pátrio no plural.",
    ],
    correta: 0,
    explicacao:
      "O particípio combina-se com o verbo \"ser\" para formar a voz passiva analítica e concorda com o sujeito em gênero e número. Também aparece nos tempos compostos com \"ter\" e \"haver\", mas nesse caso permanece invariável: \"tinha entregado\".",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Cada aluno deve trazer seu material\", a palavra \"cada\" é classificada como:",
    opcoes: [
      "artigo definido",
      "numeral cardinal",
      "advérbio de quantidade",
      "conjunção correlativa",
      "pronome indefinido",
    ],
    correta: 4,
    explicacao:
      "\"Cada\" refere-se de modo distributivo e vago aos elementos de um conjunto, sendo pronome indefinido invariável. Não pode ser usado sozinho como substantivo: dizer \"cada um\" exige o acompanhamento do numeral. Isso o distingue de \"todos\" e \"alguns\".",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "Considere as frases \"O ataque foi rápido\" e \"O time ataca bem\". As palavras \"ataque\" e \"ataca\" pertencem, respectivamente, às classes:",
    opcoes: [
      "verbo e substantivo",
      "adjetivo e advérbio",
      "substantivo e substantivo",
      "verbo e verbo",
      "substantivo e verbo",
    ],
    correta: 4,
    explicacao:
      "Na primeira frase, a palavra vem determinada por artigo e ocupa posição de sujeito: é substantivo. Na segunda, está conjugada e tem sujeito próprio: é verbo. Palavras da mesma família podem pertencer a classes diferentes conforme o papel exercido.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele saiu apesar da chuva forte\", a expressão \"apesar de\" é classificada como:",
    opcoes: [
      "locução adverbial",
      "locução adjetiva",
      "locução verbal",
      "locução interjetiva",
      "locução prepositiva",
    ],
    correta: 4,
    explicacao:
      "Locuções prepositivas são conjuntos de palavras com valor de preposição, terminando quase sempre em preposição simples. Aqui, \"apesar de\" introduz um termo com valor concessivo. Outras frequentes são \"através de\", \"junto a\" e \"por causa de\".",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ninguém sabia a resposta correta\", a palavra \"ninguém\" pertence à classe dos:",
    opcoes: [
      "advérbios de negação",
      "substantivos abstratos",
      "conjunções subordinativas",
      "artigos indefinidos",
      "pronomes indefinidos",
    ],
    correta: 4,
    explicacao:
      "\"Ninguém\" refere-se de forma vaga e negativa à terceira pessoa, o que caracteriza o pronome indefinido. O advérbio de negação seria \"não\". Note que a presença de \"ninguém\" já nega a oração, tornando desnecessário acrescentar outro termo negativo antes do verbo.",
  },
  {
    materia: "portugues",
    tema: "Morfologia: classes de palavras",
    dificuldade: "dificil",
    enunciado:
      "A identificação da classe gramatical de uma palavra deve considerar, prioritariamente:",
    opcoes: [
      "a origem histórica da palavra na língua latina.",
      "o número de sílabas que a palavra apresenta.",
      "sua posição no dicionário de língua portuguesa.",
      "o comportamento e a função da palavra na frase.",
      "a presença ou ausência de acento gráfico.",
    ],
    correta: 3,
    explicacao:
      "Muitas palavras mudam de classe conforme o contexto: \"jantar\", \"baixo\", \"mesmo\" e \"que\" são exemplos clássicos. Por isso a análise parte sempre do papel exercido no enunciado, e não da forma isolada. Etimologia, sílabas e acentuação não determinam a classe.",
  },
];
