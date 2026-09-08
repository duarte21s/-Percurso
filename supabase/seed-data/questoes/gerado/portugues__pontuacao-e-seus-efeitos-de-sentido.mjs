/* Pontuação e seus efeitos de sentido (50 questões).
   Regras de emprego da vírgula, do ponto e vírgula, dos dois-pontos, das
   aspas, do travessão e dos parênteses, sempre ligadas ao sentido produzido.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Compare: \"Os alunos, que estudaram, passaram\" e \"Os alunos que estudaram passaram\". A diferença de sentido produzida pelas vírgulas é que, na primeira frase:",
    opcoes: [
      "apenas parte dos alunos estudou e passou.",
      "todos os alunos estudaram e todos passaram.",
      "nenhum aluno estudou o suficiente.",
      "os alunos passaram sem ter estudado.",
      "não há qualquer alteração de sentido entre as frases.",
    ],
    correta: 1,
    explicacao:
      "Com vírgulas, a oração adjetiva é explicativa e vale para todo o conjunto: todos estudaram e todos passaram. Sem vírgulas, ela é restritiva e recorta um subgrupo: só passaram os que estudaram. Duas vírgulas mudam completamente o alcance da afirmação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "facil",
    enunciado:
      "Na frase \"Comprei arroz, feijão, macarrão e óleo\", as vírgulas foram empregadas para:",
    opcoes: [
      "separar orações coordenadas assindéticas.",
      "isolar um vocativo no interior do período.",
      "separar termos de mesma função em uma enumeração.",
      "indicar a omissão de um verbo já mencionado.",
      "marcar o deslocamento de um adjunto adverbial.",
    ],
    correta: 2,
    explicacao:
      "Em enumerações, a vírgula separa os itens de mesma função sintática, e a conjunção \"e\" costuma substituí-la antes do último elemento. É o uso mais elementar da vírgula. Repetir a conjunção entre todos os itens produziria polissíndeto, com efeito de acumulação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Maria, traga os documentos amanhã\", a vírgula foi empregada para:",
    opcoes: [
      "separar o sujeito do predicado.",
      "isolar o vocativo.",
      "marcar uma enumeração incompleta.",
      "indicar uma oração intercalada.",
      "assinalar a elipse de um verbo.",
    ],
    correta: 1,
    explicacao:
      "O vocativo é o termo usado para chamar o interlocutor e vem sempre isolado por vírgula, seja no início, no meio ou no fim do enunciado. Não confundir com sujeito: \"Maria trouxe os documentos\" não leva vírgula, porque ali Maria pratica a ação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Segundo a norma-padrão, é considerado erro de pontuação:",
    opcoes: [
      "isolar o aposto explicativo por vírgulas.",
      "separar o sujeito de seu predicado por vírgula.",
      "usar vírgula antes de conjunção adversativa.",
      "isolar adjunto adverbial deslocado para o início.",
      "empregar vírgula em enumerações de termos.",
    ],
    correta: 1,
    explicacao:
      "Sujeito e predicado formam o núcleo da oração e não podem ser separados por vírgula: \"Os alunos, chegaram cedo\" é incorreto. A regra vale mesmo quando o sujeito é longo. As demais alternativas descrevem usos previstos e corretos da vírgula.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ontem, a equipe apresentou os resultados\", a vírgula justifica-se porque:",
    opcoes: [
      "isola um aposto no início do período.",
      "separa duas orações coordenadas.",
      "marca o deslocamento de um adjunto adverbial.",
      "indica a supressão de um termo.",
      "isola um vocativo de tempo.",
    ],
    correta: 2,
    explicacao:
      "Adjuntos adverbiais deslocados para o início da oração costumam vir seguidos de vírgula, sobretudo quando são longos. Com adjuntos curtos, o uso é facultativo. Na ordem direta — \"a equipe apresentou os resultados ontem\" — a vírgula não seria empregada.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Pelé, o Rei do Futebol, marcou mais de mil gols\", as vírgulas isolam:",
    opcoes: [
      "um vocativo",
      "um aposto explicativo",
      "uma oração adjetiva restritiva",
      "um adjunto adverbial de modo",
      "um predicativo do objeto",
    ],
    correta: 1,
    explicacao:
      "O aposto explica ou identifica um termo anterior e vem isolado por vírgulas, travessões ou dois-pontos. Aqui, a expressão acrescenta informação sobre Pelé sem restringir a referência. Diferente do vocativo, o aposto não serve para chamar alguém.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele quis ajudar; ninguém aceitou sua oferta\", o ponto e vírgula foi empregado para:",
    opcoes: [
      "isolar um aposto do restante da frase.",
      "separar orações relacionadas com pausa maior que a vírgula.",
      "indicar a citação literal de um autor.",
      "assinalar a interrupção brusca do pensamento.",
      "introduzir uma enumeração de itens.",
    ],
    correta: 1,
    explicacao:
      "O ponto e vírgula marca pausa intermediária entre a vírgula e o ponto, ligando orações que mantêm forte relação de sentido. Também separa itens longos em enumerações que já contêm vírgulas internas, como em listas de incisos legais.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Três estados lideram a produção: São Paulo, Minas Gerais e Paraná\", os dois-pontos foram empregados para:",
    opcoes: [
      "introduzir uma enumeração que detalha o que foi anunciado.",
      "marcar oposição entre duas ideias.",
      "isolar um vocativo do restante do período.",
      "indicar a supressão de parte do texto.",
      "assinalar uma pausa sem valor semântico.",
    ],
    correta: 0,
    explicacao:
      "Os dois-pontos anunciam o que vem em seguida: uma enumeração, uma explicação ou uma fala. Aqui, especificam quais são os três estados mencionados de forma genérica. É esse valor de anúncio que distingue o sinal da vírgula e do ponto e vírgula.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"O diretor afirmou: 'A decisão é definitiva'\", os dois-pontos e as aspas foram empregados para:",
    opcoes: [
      "indicar ironia quanto ao conteúdo da fala.",
      "marcar uma enumeração de argumentos.",
      "introduzir e delimitar a citação literal de uma fala.",
      "isolar um aposto explicativo do sujeito.",
      "separar orações coordenadas adversativas.",
    ],
    correta: 2,
    explicacao:
      "A combinação de verbo de elocução, dois-pontos e aspas é a estrutura padrão do discurso direto: a fala é reproduzida exatamente como dita e atribuída a quem a proferiu. Sem as aspas, teríamos discurso indireto, com adaptação de tempos verbais e pronomes.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"O suposto 'especialista' não soube responder à pergunta\", as aspas indicam:",
    opcoes: [
      "citação literal de outro texto.",
      "distanciamento crítico do autor em relação ao termo.",
      "tradução de expressão estrangeira.",
      "início de discurso direto de personagem.",
      "supressão de parte do enunciado original.",
    ],
    correta: 1,
    explicacao:
      "As aspas podem sinalizar que o autor não assume o termo como próprio, marcando ironia ou reserva quanto à sua adequação. Reforçadas aqui pelo adjetivo \"suposto\", elas questionam a competência atribuída. É um uso distinto da citação, que reproduz palavras alheias sem juízo.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"A reunião — adiada duas vezes — finalmente aconteceu\", os travessões foram empregados para:",
    opcoes: [
      "introduzir a fala de um personagem.",
      "isolar uma informação intercalada, com destaque.",
      "indicar a supressão de trecho do original.",
      "separar itens de uma enumeração longa.",
      "marcar o fim abrupto de um pensamento.",
    ],
    correta: 1,
    explicacao:
      "Travessões duplos isolam informações acessórias, cumprindo função semelhante à das vírgulas e dos parênteses, mas com maior destaque visual. Os parênteses, ao contrário, tendem a diminuir a ênfase do trecho intercalado. A escolha entre eles é estilística.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Em diálogos de textos narrativos, o travessão simples é tradicionalmente empregado para:",
    opcoes: [
      "indicar a mudança de parágrafo do narrador.",
      "assinalar a supressão de palavras.",
      "introduzir a fala de cada personagem.",
      "separar o sujeito do predicado.",
      "marcar uma enumeração de ações.",
    ],
    correta: 2,
    explicacao:
      "Na tradição literária brasileira, cada nova fala começa em parágrafo próprio, aberto por travessão. O sinal também isola, no meio da fala, os comentários do narrador. Aspas cumprem essa função em outras tradições editoriais, sobretudo na anglófona.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Compare: \"Não, espere\" e \"Não espere\". A vírgula, na primeira frase, produz o efeito de:",
    opcoes: [
      "reforçar a ordem para que não se aguarde.",
      "transformar a negação em pedido para aguardar.",
      "indicar dúvida sobre a ação a ser tomada.",
      "manter exatamente o mesmo sentido da segunda.",
      "converter a frase em pergunta indireta.",
    ],
    correta: 1,
    explicacao:
      "Com a vírgula, o \"não\" nega algo dito antes e o verbo traz a ordem de aguardar. Sem a vírgula, o \"não\" incide sobre o próprio verbo, ordenando que não se espere. Um único sinal inverte completamente a instrução — exemplo clássico do poder semântico da pontuação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele estudou; ela, trabalhou\", a vírgula na segunda oração marca:",
    opcoes: [
      "o isolamento de um vocativo.",
      "a separação entre sujeito e predicado.",
      "a omissão do verbo já mencionado.",
      "uma enumeração de sujeitos.",
      "o deslocamento de um adjunto adverbial.",
    ],
    correta: 2,
    explicacao:
      "A vírgula ocupa o lugar do verbo suprimido, recurso chamado de zeugma. Sem ela, a leitura ficaria truncada. Esse é um dos poucos casos em que a vírgula aparece entre sujeito e o restante da oração — justificada precisamente pela elipse verbal.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Chegou cedo, mas a reunião já havia começado\", a vírgula antes de \"mas\":",
    opcoes: [
      "é obrigatória, por separar orações coordenadas adversativas.",
      "é proibida, por anteceder conjunção.",
      "isola um aposto explicativo.",
      "marca a supressão de um termo.",
      "separa o sujeito do predicado.",
    ],
    correta: 0,
    explicacao:
      "Diante de conjunções adversativas, a vírgula é a pontuação esperada, marcando a quebra de expectativa. Com a conjunção aditiva \"e\", ela é dispensável quando o sujeito é o mesmo. Nem toda conjunção rejeita vírgula: o valor semântico é que orienta o uso.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Compare: \"Vamos comer, crianças\" e \"Vamos comer crianças\". A ausência da vírgula na segunda frase:",
    opcoes: [
      "não altera o sentido do convite.",
      "transforma o vocativo em objeto direto do verbo.",
      "converte a frase em pergunta.",
      "indica ênfase no verbo comer.",
      "marca a elipse do sujeito da oração.",
    ],
    correta: 1,
    explicacao:
      "Com vírgula, \"crianças\" é vocativo: chama os interlocutores para a refeição. Sem vírgula, passa a complementar o verbo, com resultado absurdo. O exemplo circula como ilustração popular de que a vírgula do vocativo não é ornamento, e sim exigência de sentido.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"O relatório (elaborado em 2023) foi finalmente divulgado\", os parênteses foram empregados para:",
    opcoes: [
      "introduzir uma citação de terceiros.",
      "acrescentar informação complementar em tom secundário.",
      "assinalar a supressão de parte do texto.",
      "marcar ironia quanto ao conteúdo.",
      "separar orações coordenadas alternativas.",
    ],
    correta: 1,
    explicacao:
      "Parênteses inserem observações acessórias, com efeito de sussurro: são o recurso de menor destaque entre vírgulas, travessões e parênteses. Retirar o trecho entre parênteses não deve comprometer a estrutura sintática da frase.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Nas transcrições de citações, o uso de reticências entre colchetes indica que:",
    opcoes: [
      "houve supressão de parte do texto original.",
      "o autor hesitou ao escrever o trecho.",
      "a citação está sendo traduzida livremente.",
      "o trecho contém erro do autor original.",
      "a frase termina de forma interrogativa.",
    ],
    correta: 0,
    explicacao:
      "As reticências entre colchetes sinalizam corte deliberado feito por quem cita, preservando a honestidade da transcrição. Sem essa marca, o leitor suporia que o trecho é integral. Já reticências simples, no texto corrido, indicam suspensão do pensamento.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele hesitou, olhou em volta, respirou fundo…\", as reticências produzem efeito de:",
    opcoes: [
      "conclusão categórica do raciocínio.",
      "enumeração completa dos fatos.",
      "citação literal de outra fonte.",
      "suspensão, sugerindo continuidade ou hesitação.",
      "interrupção por falha técnica no texto.",
    ],
    correta: 3,
    explicacao:
      "As reticências deixam a frase em aberto, sugerindo que algo permanece não dito ou que a ação continua. Em narrativas, criam suspense; em diálogos, marcam hesitação. Diferentemente do ponto final, elas evitam o fechamento.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Você trouxe os documentos?\", o ponto de interrogação indica que se trata de:",
    opcoes: [
      "pergunta indireta, sem exigência de resposta.",
      "afirmação enfática do falante.",
      "ordem dirigida ao ouvinte.",
      "pergunta direta, dirigida ao interlocutor.",
      "exclamação de surpresa.",
    ],
    correta: 3,
    explicacao:
      "A interrogação marca perguntas diretas. Em perguntas indiretas — \"quero saber se você trouxe os documentos\" — usa-se ponto final, porque a estrutura é declarativa. Confundir os dois casos é erro frequente de pontuação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Está corretamente pontuada, segundo a norma-padrão, a frase:",
    opcoes: [
      "Perguntei a ele, se viria à reunião?",
      "Perguntei, a ele se viria à reunião?",
      "Perguntei a ele; se viria à reunião.",
      "Perguntei a ele se viria à reunião.",
      "Perguntei a ele: se viria à reunião?",
    ],
    correta: 3,
    explicacao:
      "Trata-se de pergunta indireta, que se encerra com ponto final e dispensa vírgula antes da oração subordinada. O ponto de interrogação só apareceria na forma direta: \"Perguntei a ele: 'Você virá à reunião?'\". A estrutura declarativa exige pontuação declarativa.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Se chover, o evento será adiado\", a vírgula justifica-se porque:",
    opcoes: [
      "separa o sujeito do predicado.",
      "marca a enumeração de duas condições.",
      "indica a supressão de um verbo.",
      "isola a oração subordinada anteposta à principal.",
      "destaca um vocativo deslocado.",
    ],
    correta: 3,
    explicacao:
      "Quando a oração subordinada adverbial vem antes da principal, a vírgula é recomendada para marcar a inversão. Na ordem direta — \"o evento será adiado se chover\" — a vírgula é dispensável. A pontuação acompanha o deslocamento sintático.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele, segundo os relatos, chegou depois da meia-noite\", as vírgulas isolam:",
    opcoes: [
      "um aposto explicativo do sujeito.",
      "uma oração adjetiva restritiva.",
      "um vocativo de tratamento.",
      "uma expressão intercalada.",
      "um objeto direto deslocado.",
    ],
    correta: 3,
    explicacao:
      "Expressões intercaladas — como \"segundo os relatos\", \"a meu ver\" e \"por assim dizer\" — interrompem a estrutura da oração e vêm isoladas por vírgulas. Retirá-las não afeta a sintaxe do período, apenas a informação acrescentada.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Compare: \"O réu, disse o juiz, é inocente\" e \"O réu disse: o juiz é inocente\". A mudança de pontuação altera:",
    opcoes: [
      "apenas o ritmo da leitura, sem mudar o sentido.",
      "o tempo verbal das duas orações.",
      "a classe gramatical da palavra réu.",
      "quem é apontado como inocente e quem fala.",
      "a concordância entre sujeito e verbo.",
    ],
    correta: 3,
    explicacao:
      "Na primeira frase, o juiz declara que o réu é inocente; na segunda, o réu afirma que o juiz é inocente. Sujeito da fala e sujeito da inocência trocam de lugar. É um exemplo de como a pontuação define relações sintáticas e, com elas, o sentido.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Que espetáculo maravilhoso!\", o ponto de exclamação indica:",
    opcoes: [
      "dúvida quanto à qualidade do espetáculo.",
      "pergunta retórica dirigida ao leitor.",
      "citação de fala de terceiros.",
      "manifestação de emoção ou ênfase.",
      "suspensão do pensamento do autor.",
    ],
    correta: 3,
    explicacao:
      "A exclamação marca envolvimento afetivo do emissor, reforçando a função emotiva da linguagem. Aparece também em ordens enfáticas e interjeições. Seu uso excessivo em textos formais é desaconselhado por comprometer a impressão de objetividade.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Em enumerações longas cujos itens já contêm vírgulas internas, o sinal de pontuação recomendado para separar os itens é:",
    opcoes: [
      "a vírgula",
      "os dois-pontos",
      "o travessão",
      "o ponto e vírgula",
      "as reticências",
    ],
    correta: 3,
    explicacao:
      "O ponto e vírgula cria uma hierarquia de pausas: as vírgulas organizam o interior de cada item e o ponto e vírgula separa os itens entre si. Esse uso é padrão em textos legais e em listas com incisos. Sem ele, a leitura se perde entre vírgulas de níveis diferentes.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Foram aprovados dois projetos: o de mobilidade e o de saneamento\", a substituição dos dois-pontos por vírgula:",
    opcoes: [
      "enfraquece o efeito de anúncio da especificação.",
      "torna a frase gramaticalmente incorreta.",
      "inverte o sentido da aprovação.",
      "transforma a enumeração em pergunta.",
      "elimina a necessidade da conjunção \"e\".",
    ],
    correta: 0,
    explicacao:
      "Os dois-pontos criam expectativa e anunciam o detalhamento que vem a seguir, efeito que a vírgula não produz com a mesma força. A frase continuaria compreensível, mas perderia o destaque. A escolha entre sinais é, aqui, uma decisão de ênfase.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Está corretamente pontuado, segundo a norma-padrão, o período:",
    opcoes: [
      "O aluno que estudou muito, foi aprovado.",
      "O aluno, que estudou muito foi aprovado.",
      "O aluno que estudou muito foi aprovado.",
      "O aluno que, estudou muito, foi aprovado.",
      "O aluno que estudou, muito foi aprovado.",
    ],
    correta: 2,
    explicacao:
      "A oração adjetiva restritiva não admite vírgulas, e nada pode separar sujeito de predicado. As demais alternativas violam uma dessas regras ou usam vírgula solitária, que isola pela metade um termo que deveria ser cercado por duas.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele nasceu em Salvador, Bahia, em 1990\", as vírgulas foram empregadas para:",
    opcoes: [
      "isolar um vocativo de lugar.",
      "indicar a supressão de um verbo.",
      "marcar oposição entre as informações.",
      "separar informações de localização em aposto.",
      "separar orações coordenadas.",
    ],
    correta: 3,
    explicacao:
      "\"Bahia\" especifica \"Salvador\", funcionando como aposto, e por isso vem isolado. O mesmo padrão aparece em datas e endereços. Note que o adjunto adverbial de tempo, no final, é precedido de vírgula por estar em série com as demais informações.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Em redações escolares, o uso de ponto de exclamação e de reticências é geralmente desaconselhado porque esses sinais:",
    opcoes: [
      "não existem na norma-padrão da língua.",
      "só podem ser usados em textos narrativos.",
      "introduzem marcas de subjetividade incompatíveis com o registro formal.",
      "tornam o texto gramaticalmente incorreto.",
      "impedem a leitura automatizada da redação.",
    ],
    correta: 2,
    explicacao:
      "Exclamações e reticências carregam emoção e suspensão, traços que destoam da objetividade esperada em um texto dissertativo-argumentativo. Não são erros gramaticais, e sim inadequações de registro. Em crônicas e narrativas, seu uso é plenamente legítimo.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Compare: \"Ele não veio, porque estava doente\" e \"Ele não veio porque estava doente\". A vírgula, na primeira frase, sugere que:",
    opcoes: [
      "a doença é apresentada como justificativa acrescentada.",
      "ele veio, apesar da doença.",
      "a doença não teve relação com a ausência.",
      "a frase se tornou uma pergunta.",
      "o verbo principal foi omitido.",
    ],
    correta: 0,
    explicacao:
      "Com vírgula, a oração causal ganha valor explicativo e aparece como comentário acrescentado. Sem vírgula, a causa integra-se ao núcleo da informação e pode até ser o foco da negação — \"ele não veio por causa da doença, mas por outro motivo\". A pausa altera o alcance da negação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Estudou, portanto, merece a aprovação\", as vírgulas isolam:",
    opcoes: [
      "um vocativo intercalado.",
      "um aposto explicativo.",
      "uma conjunção conclusiva deslocada.",
      "uma oração adjetiva restritiva.",
      "um complemento nominal.",
    ],
    correta: 2,
    explicacao:
      "Conjunções conclusivas e adversativas deslocadas para o interior da oração vêm isoladas por vírgulas. No início da oração, bastaria uma vírgula depois: \"Portanto, merece a aprovação\". A posição do conectivo determina a pontuação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Cheguei em casa. Estava exausto.\", o ponto final foi empregado para:",
    opcoes: [
      "indicar dúvida quanto à informação.",
      "marcar a supressão de um trecho.",
      "isolar uma expressão intercalada.",
      "introduzir uma citação direta.",
      "encerrar períodos declarativos completos.",
    ],
    correta: 4,
    explicacao:
      "O ponto final fecha períodos declarativos e estabelece a pausa mais longa da pontuação interna do texto. Também é usado em abreviaturas. A opção por dois períodos curtos, em vez de um só com conectivo, produz ritmo mais seco — escolha estilística legítima.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Considerando as regras de emprego da vírgula em relação ao sujeito e aos termos que o acompanham, está corretamente pontuada a frase:",
    opcoes: [
      "Os candidatos, aprovados no concurso receberão a convocação.",
      "Os candidatos aprovados no concurso, receberão a convocação.",
      "Os candidatos aprovados no concurso receberão a convocação.",
      "Os candidatos, aprovados, no concurso receberão a convocação.",
      "Os candidatos aprovados, no concurso receberão, a convocação.",
    ],
    correta: 2,
    explicacao:
      "\"Aprovados no concurso\" restringe quais candidatos serão convocados e integra o sujeito, não admitindo vírgula. As demais alternativas ou separam sujeito de predicado ou usam vírgula solitária, isolando pela metade um termo que exigiria duas.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"A cidade tem três problemas urgentes: transporte, saúde e moradia\", a supressão dos dois-pontos exigiria:",
    opcoes: [
      "a inclusão de um conectivo como \"que são\".",
      "a eliminação de todas as vírgulas.",
      "a transformação da frase em pergunta.",
      "a mudança do sujeito para o plural.",
      "a substituição da enumeração por um único item.",
    ],
    correta: 0,
    explicacao:
      "Sem os dois-pontos, é preciso um elo verbal explícito entre o anúncio e a especificação: \"tem três problemas urgentes, que são transporte, saúde e moradia\". Os dois-pontos economizam esse conectivo, justamente porque já anunciam o detalhamento.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele disse que viria — e não veio\", o travessão simples foi empregado para:",
    opcoes: [
      "introduzir a fala de um personagem.",
      "separar itens de uma enumeração.",
      "assinalar a supressão de palavras.",
      "isolar um vocativo do restante da frase.",
      "destacar um acréscimo com efeito de contraste.",
    ],
    correta: 4,
    explicacao:
      "O travessão simples, ao final do período, cria uma pausa marcada e confere destaque ao que vem depois, funcionando como um golpe de efeito. Aqui, reforça a frustração da expectativa. Uma vírgula produziria o mesmo sentido, mas sem a mesma ênfase.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Em textos jornalísticos, títulos de obras e nomes de embarcações costumam vir em itálico ou entre aspas. Essa marcação serve para:",
    opcoes: [
      "indicar que o trecho é uma citação literal.",
      "sinalizar ironia quanto ao título mencionado.",
      "destacar o termo como nome próprio de obra.",
      "assinalar a supressão de parte do título.",
      "marcar uma pausa mais longa na leitura.",
    ],
    correta: 2,
    explicacao:
      "O destaque tipográfico separa o título do restante da frase e evita ambiguidade — sem ele, \"li Grande Sertão Veredas ontem\" poderia soar confuso. Aspas e itálico são intercambiáveis nessa função, conforme o manual de estilo adotado.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Compare: \"Aceito, obrigado\" e \"Aceito obrigado\". A vírgula, na primeira frase, faz com que \"obrigado\" seja entendido como:",
    opcoes: [
      "adjetivo que caracteriza o sujeito como coagido.",
      "verbo no particípio, formando locução.",
      "vocativo dirigido ao interlocutor.",
      "advérbio de modo ligado ao verbo aceitar.",
      "expressão de agradecimento independente.",
    ],
    correta: 4,
    explicacao:
      "Com vírgula, \"obrigado\" é interjeição de agradecimento, isolada do restante. Sem vírgula, funciona como adjetivo e indica que a aceitação foi forçada — o falante aceita por obrigação. O contraste mostra que a vírgula pode alterar até a classe gramatical percebida.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"João, o mais velho dos irmãos, herdou a fazenda\", a retirada das vírgulas produziria:",
    opcoes: [
      "uma frase agramatical, impossível de interpretar.",
      "a transformação do aposto em oração subordinada.",
      "a inversão do sujeito com o objeto direto.",
      "a mudança do tempo verbal do período.",
      "a perda da marcação do aposto explicativo.",
    ],
    correta: 4,
    explicacao:
      "As vírgulas sinalizam que a expressão apenas identifica João, sem restringir a referência. Sem elas, o leitor tenderia a ler a sequência como um bloco único, prejudicando a clareza. Apostos explicativos exigem isolamento por vírgulas, travessões ou parênteses.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Preciso de três coisas hoje: calma, foco e café\", a ordem dos elementos após os dois-pontos e a escolha final produzem efeito de:",
    opcoes: [
      "gradação decrescente de importância.",
      "enumeração estritamente técnica.",
      "citação literal de outro autor.",
      "supressão de itens da lista original.",
      "quebra de expectativa, com humor no último item.",
    ],
    correta: 4,
    explicacao:
      "Os dois primeiros itens são abstratos e sérios; o terceiro é concreto e cotidiano, o que produz humor pela quebra de expectativa. A pontuação organiza a série e prepara o efeito. O recurso é frequente em crônicas e em publicidade.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Segundo a norma-padrão, o uso de vírgula é facultativo quando:",
    opcoes: [
      "separa sujeito e predicado.",
      "isola aposto explicativo.",
      "antecede conjunção adversativa.",
      "marca adjunto adverbial curto no início da oração.",
      "isola vocativo em qualquer posição.",
    ],
    correta: 3,
    explicacao:
      "Com adjuntos adverbiais curtos, como \"ontem\" ou \"aqui\", a vírgula é opcional: \"Ontem chegou tarde\" e \"Ontem, chegou tarde\" são ambos aceitos. Já a separação entre sujeito e predicado é proibida, e vocativo e aposto explicativo exigem isolamento obrigatório.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Na redação de textos legais, o emprego rigoroso da pontuação é decisivo porque:",
    opcoes: [
      "a lei exige o uso exclusivo de ponto e vírgula.",
      "os textos legais dispensam vírgulas em enumerações.",
      "a pontuação define o número de artigos do documento.",
      "os sinais gráficos substituem a numeração dos incisos.",
      "uma vírgula deslocada pode alterar a extensão de um direito ou de uma obrigação.",
    ],
    correta: 4,
    explicacao:
      "Em normas jurídicas, a diferença entre oração restritiva e explicativa pode ampliar ou reduzir o alcance de um dispositivo, com efeitos práticos sobre quem é alcançado por ele. Há disputas judiciais decididas pela interpretação de uma vírgula — daí o rigor exigido na redação legislativa.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"— Você vem? — perguntou ele, olhando o relógio.\", os travessões cumprem funções distintas: o primeiro introduz a fala e o segundo:",
    opcoes: [
      "encerra a citação literal.",
      "indica supressão de palavras.",
      "marca uma enumeração de ações.",
      "assinala mudança de parágrafo.",
      "isola o comentário do narrador.",
    ],
    correta: 4,
    explicacao:
      "Em diálogos, o travessão abre a fala e reaparece para separar as intervenções do narrador, chamadas de discurso atributivo. Essa convenção evita o uso de aspas e mantém a fluidez do diálogo. A vírgula depois de \"ele\" isola a oração reduzida de gerúndio.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Ele não gosta de esportes: futebol, vôlei, basquete, nada o interessa\", a vírgula antes de \"nada\":",
    opcoes: [
      "separa a enumeração de seu termo resumidor.",
      "isola um vocativo deslocado.",
      "marca a supressão do verbo principal.",
      "introduz uma citação indireta.",
      "assinala o fim de uma pergunta.",
    ],
    correta: 0,
    explicacao:
      "O termo \"nada\" retoma e resume toda a enumeração anterior, funcionando como aposto resumidor, e vem separado por vírgula. Construções desse tipo aparecem também com \"tudo\", \"todos\" e \"ninguém\". A vírgula marca a passagem da lista para o resumo.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Em uma frase iniciada por oração subordinada adverbial longa, a vírgula que a separa da oração principal:",
    opcoes: [
      "é proibida pela norma-padrão.",
      "deve ser substituída por ponto e vírgula.",
      "só é usada se houver vocativo na frase.",
      "indica que a oração foi suprimida.",
      "é recomendada, por marcar a inversão da ordem.",
    ],
    correta: 4,
    explicacao:
      "Quando a subordinada antecede a principal, a vírgula ajuda o leitor a identificar onde termina uma e começa a outra. Na ordem direta, ela é dispensável. Quanto mais longa a oração anteposta, mais necessária se torna a marcação.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "O célebre exemplo \"Se o homem soubesse o valor que tem a mulher andaria de quatro à sua procura\" costuma ser usado em aulas para mostrar que:",
    opcoes: [
      "a pontuação pode inverter completamente o sentido de uma frase.",
      "frases longas são sempre incorretas.",
      "a norma-padrão proíbe orações condicionais.",
      "o uso de vírgulas é sempre facultativo.",
      "provérbios não admitem pontuação.",
    ],
    correta: 0,
    explicacao:
      "Pontuada de um modo, a frase elogia a mulher; pontuada de outro, a rebaixa. Nenhuma palavra muda — apenas os sinais. O exemplo é usado justamente para demonstrar que a pontuação não é ornamento, mas parte da construção do sentido.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Comprei o livro; ela, a revista; ele, o jornal\", a combinação de ponto e vírgula com vírgulas serve para:",
    opcoes: [
      "indicar dúvida sobre as compras realizadas.",
      "introduzir uma citação de três autores.",
      "assinalar a supressão do sujeito.",
      "marcar perguntas sucessivas.",
      "organizar itens paralelos que contêm elipse verbal.",
    ],
    correta: 4,
    explicacao:
      "As vírgulas marcam a omissão do verbo \"comprei\" em cada item, e o ponto e vírgula separa os blocos entre si. Essa hierarquia de pausas mantém a leitura clara em estruturas paralelas com elipse. Usar só vírgulas tornaria o período confuso.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Ao revisar um texto, o critério mais confiável para decidir sobre o uso de uma vírgula é:",
    opcoes: [
      "inserir vírgula sempre que a leitura exigir uma respiração.",
      "evitar vírgulas em períodos com mais de vinte palavras.",
      "seguir o número de vírgulas usadas no parágrafo anterior.",
      "usar vírgula antes de toda conjunção.",
      "analisar a função sintática dos termos envolvidos.",
    ],
    correta: 4,
    explicacao:
      "A ideia de pontuar \"onde se respira\" leva a erros graves, como separar sujeito de predicado em orações longas. A pontuação segue a estrutura sintática: identificar sujeito, predicado, adjuntos, apostos e orações subordinadas resolve a maior parte das dúvidas.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "media",
    enunciado:
      "Na frase \"Fomos ao cinema, ao teatro e ao museu\", a ausência de vírgula antes do \"e\" final justifica-se porque:",
    opcoes: [
      "a conjunção substitui a vírgula no último item da série.",
      "a norma-padrão proíbe vírgula em enumerações.",
      "os três termos têm funções sintáticas diferentes.",
      "o sujeito está elíptico no período.",
      "há um aposto resumidor implícito.",
    ],
    correta: 0,
    explicacao:
      "Em enumerações simples, a conjunção \"e\" ocupa o lugar da última vírgula. Ela reaparece quando o \"e\" liga orações com sujeitos diferentes ou quando há intenção de ênfase. Em inglês, a chamada vírgula de Oxford mantém o sinal antes do \"and\" — convenção que o português não adota.",
  },
  {
    materia: "portugues",
    tema: "Pontuação e seus efeitos de sentido",
    dificuldade: "dificil",
    enunciado:
      "Em \"A empresa, que polui o rio, foi multada\" e \"A empresa que polui o rio foi multada\", a diferença de sentido é que, na segunda frase:",
    opcoes: [
      "existe mais de uma empresa em questão, e apenas a poluidora foi multada.",
      "há uma única empresa, e a poluição é informação acessória.",
      "a empresa não poluiu o rio.",
      "a multa não foi efetivamente aplicada.",
      "não há alteração alguma de sentido.",
    ],
    correta: 0,
    explicacao:
      "Sem vírgulas, a oração restringe: entre várias empresas, identifica-se a que polui. Com vírgulas, existe apenas uma empresa, e a poluição é dado acrescentado. A escolha da pontuação define quantos referentes o texto pressupõe — questão decisiva em textos jurídicos e jornalísticos.",
  },
];
