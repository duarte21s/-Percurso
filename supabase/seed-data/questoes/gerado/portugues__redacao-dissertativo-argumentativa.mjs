/* Redação dissertativo-argumentativa (50 questões).
   Estrutura do texto, tese, tipos de argumento, parágrafo, competências
   avaliadas e os erros que mais custam pontos.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "facil",
    enunciado:
      "A estrutura tradicional do texto dissertativo-argumentativo organiza-se em três partes, que são:",
    opcoes: [
      "apresentação, clímax e desfecho.",
      "introdução, desenvolvimento e conclusão.",
      "ingredientes, preparo e rendimento.",
      "cabeçalho, corpo e assinatura.",
      "manchete, lide e corpo do texto.",
    ],
    correta: 1,
    explicacao:
      "A introdução apresenta o tema e a tese; o desenvolvimento sustenta essa tese com argumentos; a conclusão retoma o raciocínio e, no ENEM, apresenta a proposta de intervenção. As demais alternativas descrevem a narrativa, a receita, a carta e a notícia.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Em um texto dissertativo-argumentativo, a tese corresponde:",
    opcoes: [
      "ao resumo dos textos motivadores apresentados.",
      "ao ponto de vista que o autor defende sobre o tema.",
      "à lista de dados estatísticos citados no texto.",
      "à proposta de intervenção da conclusão.",
      "ao título escolhido para a redação.",
    ],
    correta: 1,
    explicacao:
      "A tese é a posição assumida diante do problema, e tudo no texto deve sustentá-la. Sem tese clara, o texto vira exposição sem direção argumentativa. Ela costuma aparecer ao final da introdução e ser retomada na conclusão.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao avaliar a Competência 1, a banca do ENEM verifica se o candidato:",
    opcoes: [
      "demonstra domínio da modalidade escrita formal da língua.",
      "elabora proposta de intervenção detalhada.",
      "seleciona e relaciona argumentos com coerência.",
      "compreende a proposta e aplica conhecimentos de várias áreas.",
      "utiliza mecanismos linguísticos de coesão.",
    ],
    correta: 0,
    explicacao:
      "A Competência 1 trata do domínio da norma-padrão: ortografia, concordância, regência, pontuação e adequação vocabular. As demais alternativas descrevem, respectivamente, as Competências 5, 3, 2 e 4. Conhecer a divisão ajuda a distribuir a atenção durante a revisão.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "A Competência 5 da redação do ENEM exige a elaboração de uma proposta de intervenção que respeite os direitos humanos e apresente:",
    opcoes: [
      "apenas a identificação do problema social.",
      "somente o agente responsável pela ação.",
      "ação, agente, meio, finalidade e detalhamento.",
      "exclusivamente dados estatísticos atualizados.",
      "uma citação de autor consagrado.",
    ],
    correta: 2,
    explicacao:
      "A proposta completa responde o que fazer, quem faz, como, para quê e com qual detalhamento. Faltando elementos, a nota da competência cai proporcionalmente. Propostas genéricas, como \"o governo deve investir mais\", não pontuam bem por ausência de meio e detalhamento.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Uma redação que foge ao tema proposto recebe, na correção do ENEM:",
    opcoes: [
      "desconto de apenas 20 pontos no total.",
      "nota zero.",
      "avaliação normal nas cinco competências.",
      "nota máxima na Competência 1.",
      "possibilidade de recurso automático.",
    ],
    correta: 1,
    explicacao:
      "Fuga ao tema é uma das situações que zeram a redação, ao lado de texto insuficiente, cópia dos textos motivadores, desrespeito aos direitos humanos e estrutura fora do tipo dissertativo-argumentativo. Por isso a leitura atenta da proposta é a primeira etapa da prova.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Entre os tipos de argumento usados em textos dissertativos, um deles empresta credibilidade a partir de quem enuncia a informação. O argumento de autoridade consiste em:",
    opcoes: [
      "apelar à emoção do leitor por meio de exemplos comoventes.",
      "recorrer à opinião de especialista ou instituição reconhecida no assunto.",
      "afirmar que todos concordam com determinada posição.",
      "comparar duas situações semelhantes entre si.",
      "apresentar as consequências previstas de uma ação.",
    ],
    correta: 1,
    explicacao:
      "O argumento de autoridade empresta credibilidade de quem tem competência reconhecida no campo em discussão. Perde força quando a autoridade citada não tem relação com o tema. Diferencia-se do apelo à maioria, que não confere validade a uma afirmação.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Um parágrafo de desenvolvimento bem construído em uma redação dissertativa costuma apresentar:",
    opcoes: [
      "apenas uma sequência de dados sem comentário.",
      "tópico frasal, argumentação e fechamento.",
      "somente perguntas dirigidas ao leitor.",
      "a repetição literal da introdução.",
      "exclusivamente citações de autores.",
    ],
    correta: 1,
    explicacao:
      "O tópico frasal anuncia a ideia central do parágrafo, o desenvolvimento a sustenta com repertório e raciocínio, e o fechamento amarra a ideia à tese. Parágrafos sem tópico frasal tendem a acumular informações sem hierarquia, prejudicando a Competência 3.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "Em uma redação, afirmar que \"todo jovem hoje é viciado em celular\" configura:",
    opcoes: [
      "argumento de autoridade bem fundamentado.",
      "generalização indevida, que enfraquece o texto.",
      "dado estatístico com fonte identificada.",
      "argumento por comparação histórica.",
      "proposta de intervenção detalhada.",
    ],
    correta: 1,
    explicacao:
      "Afirmações absolutas sobre grupos inteiros são facilmente refutáveis por contraexemplo e revelam raciocínio pouco rigoroso. Modalizadores como \"parte significativa\" ou \"grande número\" tornam a afirmação sustentável. Bancas penalizam generalizações na Competência 3.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "O uso da primeira pessoa do singular em uma redação dissertativo-argumentativa é desaconselhado porque:",
    opcoes: [
      "a norma-padrão proíbe pronomes pessoais.",
      "reduz a impressão de objetividade esperada no gênero.",
      "impede a construção de parágrafos coesos.",
      "torna impossível apresentar argumentos.",
      "gera erro automático de concordância verbal.",
    ],
    correta: 1,
    explicacao:
      "O gênero pede distanciamento: a tese deve se sustentar por argumentos, não pela autoridade do autor. Expressões como \"eu acho\" enfraquecem a afirmação ao apresentá-la como preferência pessoal. A terceira pessoa é a escolha padrão em textos dissertativos escolares.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Um repertório sociocultural é considerado produtivo quando:",
    opcoes: [
      "é apenas mencionado, sem relação com o argumento.",
      "aparece exclusivamente na conclusão do texto.",
      "está articulado à discussão e sustenta a tese defendida.",
      "provém obrigatoriamente da literatura brasileira.",
      "ocupa mais da metade do parágrafo.",
    ],
    correta: 2,
    explicacao:
      "Citar uma obra ou um dado sem mostrar o que ele faz no argumento é repertório improdutivo. A banca avalia a articulação, não a quantidade de referências. Uma única menção bem explorada rende mais que três citadas de passagem.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Na introdução de uma redação dissertativo-argumentativa, é adequado:",
    opcoes: [
      "apresentar a proposta de intervenção completa.",
      "contextualizar o tema e explicitar a tese.",
      "listar todos os dados que serão usados no texto.",
      "narrar uma experiência pessoal detalhada.",
      "encerrar a discussão com uma conclusão.",
    ],
    correta: 1,
    explicacao:
      "A introdução situa o leitor no problema e anuncia a posição que será defendida, orientando toda a leitura. A proposta de intervenção pertence à conclusão. Introduções longas demais roubam espaço da argumentação, que é onde a nota se constrói.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "Uma proposta de intervenção que afirma \"é preciso conscientizar a população\" é considerada frágil porque:",
    opcoes: [
      "desrespeita os direitos humanos.",
      "não indica agente, meio nem detalhamento da ação.",
      "utiliza vocabulário informal.",
      "repete literalmente os textos motivadores.",
      "excede o limite de linhas permitido.",
    ],
    correta: 1,
    explicacao:
      "Conscientizar é um verbo vago: falta dizer quem realiza a ação, por qual meio e com que resultado esperado. Uma versão adequada nomearia, por exemplo, o Ministério da Educação, campanhas em escolas públicas e a finalidade pretendida. Detalhamento é o que separa nota máxima de nota mediana na Competência 5.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Segundo a Competência 2, a redação do ENEM deve mobilizar conhecimentos de diversas áreas. Isso significa que o candidato precisa:",
    opcoes: [
      "citar obrigatoriamente cinco autores diferentes.",
      "limitar-se aos textos motivadores fornecidos.",
      "aplicar repertório de outras áreas ao tema proposto.",
      "escrever sobre todas as disciplinas do currículo.",
      "usar exclusivamente conteúdos de Língua Portuguesa.",
    ],
    correta: 2,
    explicacao:
      "A competência avalia se o candidato compreende a proposta e traz conhecimento externo pertinente — de história, sociologia, filosofia, ciências ou artes. Restringir-se aos textos motivadores limita a nota. Não há número mínimo de referências exigido.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "O argumento por exemplificação consiste em:",
    opcoes: [
      "apresentar casos concretos que ilustram a tese defendida.",
      "citar a opinião de um especialista reconhecido.",
      "comparar duas situações de campos diferentes.",
      "apontar as consequências futuras de uma decisão.",
      "recorrer a dados numéricos de institutos oficiais.",
    ],
    correta: 0,
    explicacao:
      "O exemplo torna concreta uma afirmação geral e facilita a adesão do leitor. Precisa ser pertinente e representativo: um caso isolado não sustenta uma tese ampla sozinho. Combinado a dados ou autoridade, ganha bastante força argumentativa.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao revisar a redação, o candidato percebe que usou \"a nível de\" e \"enquanto que\". Essas construções devem ser evitadas porque:",
    opcoes: [
      "são consideradas inadequadas à norma-padrão escrita.",
      "constituem fuga ao tema proposto.",
      "desrespeitam os direitos humanos.",
      "caracterizam cópia dos textos motivadores.",
      "são exclusivas da linguagem científica.",
    ],
    correta: 0,
    explicacao:
      "\"A nível de\" é galicismo condenado — o correto é \"em nível de\" ou simplesmente \"em\" —, e \"enquanto que\" traz um \"que\" redundante. São desvios que a Competência 1 registra. Vale manter uma lista pessoal desses vícios para a revisão final.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Um texto dissertativo-argumentativo que apresenta apenas dados e informações, sem defender posição, apresenta problema em relação:",
    opcoes: [
      "à ortografia das palavras empregadas.",
      "ao número de parágrafos utilizados.",
      "à ausência de tese, característica do tipo textual exigido.",
      "à escolha do título da redação.",
      "à quantidade de conectivos usados.",
    ],
    correta: 2,
    explicacao:
      "Sem posicionamento, o texto se torna expositivo, e não argumentativo. A banca avalia se há projeto de texto orientado por uma tese. Informar é insuficiente: é preciso defender uma leitura do problema e sustentá-la.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "A Competência 4 da redação do ENEM avalia o conhecimento dos mecanismos linguísticos necessários à construção da argumentação, ou seja:",
    opcoes: [
      "a variedade e a adequação dos conectivos e recursos coesivos.",
      "a quantidade de repertório sociocultural mobilizado.",
      "o detalhamento da proposta de intervenção.",
      "o respeito às regras de acentuação gráfica.",
      "a compreensão da proposta de redação.",
    ],
    correta: 0,
    explicacao:
      "A competência olha para a articulação entre parágrafos e períodos: conectivos, pronomes, elipses e substituições lexicais. Repetir sempre \"além disso\" e \"portanto\" limita a nota. Variedade sem adequação, porém, é pior: conectivo trocado gera incoerência.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "Uma redação que propõe como solução a supressão de direitos de determinado grupo social recebe:",
    opcoes: [
      "nota integral, se bem escrita.",
      "nota zero na Competência 5, por desrespeito aos direitos humanos.",
      "desconto de dez pontos na nota final.",
      "avaliação normal nas cinco competências.",
      "bonificação por originalidade da proposta.",
    ],
    correta: 1,
    explicacao:
      "O respeito aos direitos humanos é condição explícita da Competência 5, e propostas que os violem zeram essa competência. Em casos graves, a redação inteira pode ser anulada. A exigência vale para a proposta de intervenção, mas orienta todo o texto.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao construir a conclusão de uma dissertação, é recomendável:",
    opcoes: [
      "retomar a tese e apresentar o encaminhamento proposto.",
      "apresentar um argumento inteiramente novo.",
      "copiar a introdução com outras palavras.",
      "listar todas as fontes consultadas.",
      "abrir uma nova discussão sobre outro tema.",
    ],
    correta: 0,
    explicacao:
      "A conclusão fecha o raciocínio: recupera a tese à luz do que foi argumentado e, no ENEM, apresenta a intervenção. Introduzir argumento novo desestabiliza o texto, porque não haverá espaço para desenvolvê-lo. Repetir a introdução literalmente também é penalizado.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Entre as estratégias argumentativas disponíveis em uma redação dissertativa, o argumento por comparação estabelece:",
    opcoes: [
      "relação entre duas situações, evidenciando semelhanças ou contrastes esclarecedores.",
      "apelo direto à emoção do leitor.",
      "citação literal de um especialista.",
      "apresentação de dados numéricos de uma pesquisa.",
      "descrição detalhada de um ambiente.",
    ],
    correta: 0,
    explicacao:
      "Comparar o tratamento de um problema em dois países ou em duas épocas permite iluminar aspectos que passariam despercebidos. A comparação precisa ser pertinente: aproximar realidades muito distintas sem justificar enfraquece o argumento em vez de reforçá-lo.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Copiar trechos integrais dos textos motivadores na redação do ENEM resulta em:",
    opcoes: [
      "bonificação por uso de repertório.",
      "nota máxima na Competência 2.",
      "desconsideração desses trechos na contagem de linhas e possível anulação.",
      "avaliação normal, desde que haja aspas.",
      "acréscimo de pontos na Competência 4.",
    ],
    correta: 2,
    explicacao:
      "Os textos motivadores servem para orientar a reflexão, não para serem transcritos. Trechos copiados são desconsiderados, e redações compostas majoritariamente de cópia recebem nota zero. O esperado é a elaboração própria a partir daquele estímulo.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Em relação ao título, a redação do ENEM:",
    opcoes: [
      "exige título obrigatório, sob pena de desconto.",
      "proíbe expressamente o uso de título.",
      "exige que o título repita o tema proposto.",
      "não exige título, sendo seu uso facultativo.",
      "avalia o título como sexta competência.",
    ],
    correta: 3,
    explicacao:
      "O título é opcional e não entra na contagem de linhas. Quando usado, deve ser coerente com o texto — um título deslocado sinaliza problema de projeto. Muitos candidatos preferem não titular para economizar tempo e evitar incoerência.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "A chamada tese de dois eixos consiste em:",
    opcoes: [
      "apresentar duas teses contraditórias no mesmo texto.",
      "escrever dois parágrafos de introdução.",
      "usar dois repertórios por parágrafo.",
      "anunciar na introdução dois aspectos que serão desenvolvidos nos parágrafos seguintes.",
      "dividir a conclusão em duas propostas distintas.",
    ],
    correta: 3,
    explicacao:
      "Ao anunciar dois eixos — por exemplo, a omissão do Estado e a naturalização cultural do problema —, o candidato cria um roteiro claro para os dois parágrafos de desenvolvimento. A estratégia fortalece o projeto de texto avaliado na Competência 3. Cada eixo deve receber um parágrafo próprio.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Uma redação com menos de sete linhas escritas, no ENEM, é classificada como:",
    opcoes: [
      "texto insuficiente, recebendo nota zero.",
      "texto válido, avaliado normalmente.",
      "fuga ao tema.",
      "cópia dos textos motivadores.",
      "desrespeito aos direitos humanos.",
    ],
    correta: 0,
    explicacao:
      "Textos com até sete linhas são considerados insuficientes e zeram. A redação deve ter no mínimo oito linhas e no máximo trinta. Escrever muito pouco impede a construção de argumentação e de proposta de intervenção.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "O uso de conectivos variados entre os parágrafos de uma redação contribui diretamente para:",
    opcoes: [
      "a Competência 1, referente à norma-padrão.",
      "a Competência 2, referente ao repertório.",
      "a Competência 4, referente à coesão textual.",
      "a Competência 5, referente à intervenção.",
      "a contagem total de linhas do texto.",
    ],
    correta: 2,
    explicacao:
      "A Competência 4 avalia justamente os articuladores que amarram o texto. Iniciar cada parágrafo com conectivo adequado ao movimento argumentativo — adição, contraste, conclusão — demonstra domínio desses mecanismos. Repetir o mesmo conectivo limita a pontuação.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "Ao escrever \"o Estado deve criar leis mais rígidas para acabar de vez com o problema\", o candidato compromete a proposta por:",
    opcoes: [
      "identificar corretamente o agente da ação.",
      "usar linguagem formal em excesso.",
      "citar uma instituição pública.",
      "prometer resultado absoluto e não detalhar o meio de execução.",
      "empregar verbo no modo indicativo.",
    ],
    correta: 3,
    explicacao:
      "Afirmar que a medida acabará \"de vez\" com o problema é irrealista e enfraquece a credibilidade. Além disso, falta indicar como as leis seriam elaboradas e aplicadas. Propostas mais bem avaliadas são específicas e assumem alcance limitado, mas viável.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Sobre o uso de perguntas retóricas em redações dissertativas, é correto afirmar que elas:",
    opcoes: [
      "devem ocupar o lugar da tese na introdução.",
      "são proibidas pela norma-padrão.",
      "podem aparecer, mas não substituem o posicionamento do autor.",
      "garantem nota máxima na Competência 3.",
      "invalidam automaticamente o texto.",
    ],
    correta: 2,
    explicacao:
      "Uma pergunta pode introduzir o problema, mas o texto precisa responder a ela com uma tese explícita. Redações que apenas perguntam, sem se posicionar, perdem pontos na Competência 3. O recurso funciona melhor quando usado com parcimônia.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Um projeto de texto bem definido, avaliado na Competência 3, manifesta-se quando:",
    opcoes: [
      "cada parágrafo desenvolve uma ideia claramente relacionada à tese.",
      "o texto apresenta o maior número possível de informações.",
      "todos os parágrafos têm exatamente o mesmo tamanho.",
      "o candidato usa vocabulário raro em todas as frases.",
      "a redação atinge exatamente trinta linhas.",
    ],
    correta: 0,
    explicacao:
      "Projeto de texto é a existência de um plano perceptível: sabe-se por que cada parágrafo está ali e como ele contribui para a tese. Acúmulo de informações sem hierarquia é justamente o oposto. Tamanho de parágrafo e extensão total não são critérios de avaliação.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "O argumento de causa e consequência caracteriza-se por:",
    opcoes: [
      "citar dados de institutos de pesquisa.",
      "recorrer à opinião de um especialista.",
      "comparar duas realidades distintas.",
      "demonstrar como um fator produz determinado efeito.",
      "narrar uma história de vida comovente.",
    ],
    correta: 3,
    explicacao:
      "Esse tipo de argumento estabelece encadeamento lógico: a falta de saneamento eleva as internações, que sobrecarregam o sistema de saúde. É especialmente útil porque prepara a proposta de intervenção, que atacará a causa identificada. Exige cuidado para não confundir correlação com causalidade.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "Ao usar dados estatísticos em uma redação, o cuidado essencial é:",
    opcoes: [
      "inventar números que soem plausíveis.",
      "citar apenas percentuais, sem valores absolutos.",
      "usar dados de que se tenha razoável segurança e articulá-los ao argumento.",
      "concentrar todos os dados em um único parágrafo.",
      "evitar qualquer menção à fonte da informação.",
    ],
    correta: 2,
    explicacao:
      "Dados inventados comprometem a credibilidade e podem ser identificados por corretores experientes. Na dúvida sobre números exatos, é melhor usar formulações qualitativas — \"a maior parte\", \"milhões de brasileiros\". O dado só cumpre função quando o texto explica o que ele demonstra.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Um texto que apresenta estrutura de narrativa, com personagens e enredo, em resposta a uma proposta dissertativo-argumentativa:",
    opcoes: [
      "recebe nota zero por não atender ao tipo textual exigido.",
      "é avaliado normalmente, se estiver bem escrito.",
      "recebe bonificação por criatividade.",
      "é corrigido apenas nas Competências 1 e 4.",
      "tem a nota reduzida em vinte pontos.",
    ],
    correta: 0,
    explicacao:
      "O desrespeito ao tipo textual é uma das situações que zeram a redação. A proposta pede argumentação, não narração. Elementos narrativos podem aparecer como exemplo dentro de um parágrafo argumentativo, mas não podem estruturar o texto.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao planejar a redação antes de escrever, a prática mais recomendada é:",
    opcoes: [
      "começar a escrever imediatamente para ganhar tempo.",
      "escrever primeiro a conclusão e depois a introdução.",
      "copiar a estrutura de uma redação decorada.",
      "definir tese, eixos argumentativos e proposta antes de redigir.",
      "listar todo o vocabulário difícil que será usado.",
    ],
    correta: 3,
    explicacao:
      "Um rascunho de cinco minutos com tese, dois eixos e proposta evita o texto que se perde no meio do caminho. Escrever sem plano é a principal causa de parágrafos desconectados. Redações decoradas costumam gerar fuga ao tema ou tangenciamento.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "O tangenciamento do tema, situação intermediária entre o atendimento e a fuga, ocorre quando o candidato:",
    opcoes: [
      "aborda apenas o assunto geral, sem tratar do recorte proposto.",
      "escreve menos de sete linhas.",
      "utiliza vocabulário informal em excesso.",
      "apresenta proposta de intervenção incompleta.",
      "copia integralmente os textos motivadores.",
    ],
    correta: 0,
    explicacao:
      "Se a proposta trata de desafios para a valorização de comunidades tradicionais e o candidato escreve genericamente sobre cultura brasileira, há tangenciamento. A nota é limitada, ainda que o texto não seja zerado. Ler o recorte com atenção é o que previne o problema.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Em uma redação, a expressão \"desde os primórdios da humanidade\" é desaconselhada porque:",
    opcoes: [
      "contém erro de ortografia.",
      "desrespeita os direitos humanos.",
      "constitui fuga ao tema proposto.",
      "é um clichê vago que não contextualiza de fato o tema.",
      "excede o limite de palavras da introdução.",
    ],
    correta: 3,
    explicacao:
      "Fórmulas prontas ocupam espaço sem informar nada e sinalizam introdução automática. Uma contextualização eficiente parte de um dado, de um fato histórico preciso ou de um conceito pertinente. O mesmo vale para \"na sociedade atual\" e \"vivemos em um mundo globalizado\".",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "Uma proposta de intervenção completa para o problema da evasão escolar poderia ser:",
    opcoes: [
      "a sociedade deve valorizar mais a educação.",
      "é preciso acabar com a evasão escolar imediatamente.",
      "o Ministério da Educação deve ampliar o programa de bolsas, por meio de repasse a estados, a fim de reduzir a evasão por motivos econômicos.",
      "os alunos precisam se esforçar mais nos estudos.",
      "o governo deveria investir em educação.",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta nomeia o agente, a ação, o meio e a finalidade, com detalhamento suficiente. As demais são genéricas: não indicam quem age nem como. Note que responsabilizar apenas o próprio estudante ignora as causas estruturais do problema.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Em uma redação dissertativa, o uso de gírias e de linguagem coloquial:",
    opcoes: [
      "é recomendado para aproximar o texto do leitor.",
      "zera automaticamente a redação.",
      "é avaliado apenas na Competência 5.",
      "compromete a Competência 1, por inadequação ao registro exigido.",
      "não tem qualquer impacto na correção.",
    ],
    correta: 3,
    explicacao:
      "O gênero exige registro formal, e marcas de oralidade destoam desse padrão. Não se trata de considerar a gíria errada em si, mas inadequada àquele contexto. A penalização ocorre na competência que avalia o domínio da modalidade escrita formal.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao escolher entre desenvolver dois ou três parágrafos de argumentação, o critério mais importante é:",
    opcoes: [
      "atingir exatamente o número de linhas disponíveis.",
      "usar sempre três, independentemente do tema.",
      "reduzir o texto ao mínimo permitido.",
      "garantir que cada argumento seja desenvolvido com profundidade suficiente.",
      "distribuir igualmente o número de palavras.",
    ],
    correta: 3,
    explicacao:
      "Dois parágrafos bem desenvolvidos superam três superficiais. O espaço da folha é limitado, e argumentos apenas anunciados não sustentam a tese. A estrutura mais usada — introdução, dois desenvolvimentos e conclusão — existe justamente por caber bem nas trinta linhas.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao retomar a tese na conclusão, o candidato deve:",
    opcoes: [
      "reescrever a introdução palavra por palavra.",
      "apresentar uma tese diferente da inicial.",
      "omitir qualquer referência à tese.",
      "reafirmá-la à luz dos argumentos desenvolvidos.",
      "transformar a tese em pergunta.",
    ],
    correta: 3,
    explicacao:
      "A conclusão mostra que o percurso argumentativo se cumpriu: a tese anunciada foi sustentada. Repetir literalmente a introdução sinaliza ausência de progressão. Mudar de posição no final compromete a coerência global do texto.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "O chamado argumento ad hominem, que ataca a pessoa em vez da ideia, é considerado falacioso porque:",
    opcoes: [
      "utiliza vocabulário excessivamente técnico.",
      "exige conhecimento de latim para ser compreendido.",
      "só pode ser usado em debates orais.",
      "não refuta o conteúdo da afirmação em discussão.",
      "depende de dados estatísticos atualizados.",
    ],
    correta: 3,
    explicacao:
      "Desqualificar quem fala não torna falso o que foi dito: a ideia permanece de pé, independentemente de quem a enunciou. Em redações, esse recurso enfraquece a argumentação e pode configurar desrespeito. Argumentar bem exige enfrentar a tese adversária, não a pessoa.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao mencionar uma obra literária como repertório, o candidato deve:",
    opcoes: [
      "resumir todo o enredo da obra.",
      "citar o número de páginas e a editora.",
      "reproduzir um trecho longo entre aspas.",
      "escolher obrigatoriamente um autor brasileiro.",
      "explicitar qual aspecto da obra ilumina o argumento defendido.",
    ],
    correta: 4,
    explicacao:
      "O que interessa não é demonstrar que se leu, mas mostrar o que a obra acrescenta à discussão. Resumos longos consomem linhas sem argumentar. Uma frase que conecta a obra ao problema tratado costuma render mais que um parágrafo de sinopse.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "A revisão final da redação deve priorizar:",
    opcoes: [
      "reescrever o texto inteiro na folha definitiva.",
      "acrescentar o maior número possível de conectivos.",
      "aumentar a extensão até o limite de linhas.",
      "substituir todas as palavras simples por sinônimos raros.",
      "verificar concordância, pontuação, repetições e clareza da tese.",
    ],
    correta: 4,
    explicacao:
      "Nos minutos finais, ganhos maiores vêm de corrigir desvios gramaticais evidentes e de conferir se a tese está clara. Trocar palavras por sinônimos pouco familiares aumenta o risco de erro semântico. Reescrever tudo raramente cabe no tempo disponível.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Um parágrafo de desenvolvimento que apresenta repertório, explica sua relação com a tese e conclui a ideia demonstra domínio principalmente da:",
    opcoes: [
      "Competência 1, sobre norma-padrão.",
      "Competência 5, sobre proposta de intervenção.",
      "Competência 4, sobre coesão.",
      "contagem de linhas exigida.",
      "Competência 3, sobre seleção e organização de argumentos.",
    ],
    correta: 4,
    explicacao:
      "A Competência 3 avalia a capacidade de selecionar informações, relacioná-las e organizá-las em defesa de um ponto de vista. Um parágrafo com esse encadeamento evidencia projeto de texto. Coesão e norma-padrão são avaliadas em competências próprias.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "Ao escrever sobre um tema polêmico, adotar posição extremada e desqualificar quem pensa diferente pode comprometer a redação porque:",
    opcoes: [
      "a banca exige neutralidade absoluta do candidato.",
      "temas polêmicos não podem ser abordados.",
      "posicionar-se é proibido no texto dissertativo.",
      "a nota é reduzida por excesso de linhas.",
      "argumentar exige considerar a complexidade do problema, e o desrespeito pode violar direitos humanos.",
    ],
    correta: 4,
    explicacao:
      "Posicionar-se é obrigatório; o problema está em fazê-lo por meio de ataque e simplificação. Reconhecer contrapontos fortalece a argumentação em vez de enfraquecê-la. Propostas ou afirmações que violem direitos humanos zeram a Competência 5.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "O uso de conectivos como \"em primeiro lugar\", \"além disso\" e \"por fim\" ao início de cada parágrafo cumpre a função de:",
    opcoes: [
      "aumentar o número de linhas do texto.",
      "substituir a necessidade de tese.",
      "demonstrar conhecimento de vocabulário raro.",
      "garantir nota máxima na Competência 2.",
      "sinalizar a progressão e a hierarquia das ideias.",
    ],
    correta: 4,
    explicacao:
      "Esses articuladores orientam o leitor sobre em que ponto do percurso argumentativo ele está. Usados com variedade e adequação, contribuem para a Competência 4. Repetidos mecanicamente, sem relação real com o conteúdo, perdem eficácia.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Sobre o uso de exemplos pessoais na redação do ENEM, é correto afirmar que:",
    opcoes: [
      "são a forma mais valorizada de repertório.",
      "devem substituir dados e referências externas.",
      "não são recomendados, por comprometerem a impessoalidade do gênero.",
      "garantem pontuação máxima na Competência 2.",
      "são obrigatórios no segundo parágrafo.",
    ],
    correta: 2,
    explicacao:
      "Relatos pessoais introduzem subjetividade e não são verificáveis, o que destoa do registro dissertativo. Repertório legitimado — histórico, científico, filosófico, literário, artístico — é o esperado. Casos concretos podem entrar, desde que não se apoiem na experiência do próprio candidato.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Uma introdução eficiente para uma redação sobre acesso à água potável poderia começar:",
    opcoes: [
      "com um clichê sobre a importância da água desde a Antiguidade.",
      "com a proposta de intervenção completa.",
      "com uma narrativa sobre a rotina do candidato.",
      "com a repetição literal do tema proposto.",
      "com um dado sobre a proporção de brasileiros sem abastecimento regular.",
    ],
    correta: 4,
    explicacao:
      "Um dado concreto situa o problema e já sinaliza domínio de repertório. Clichês não informam, e a proposta pertence à conclusão. A contextualização eficiente prepara o terreno para a tese que virá logo em seguida.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "dificil",
    enunciado:
      "A diferença entre um texto dissertativo-expositivo e um dissertativo-argumentativo está em que o segundo:",
    opcoes: [
      "apresenta informações sem tomar posição.",
      "narra fatos em ordem cronológica.",
      "descreve detalhadamente objetos e ambientes.",
      "instrui o leitor sobre como agir.",
      "defende explicitamente um ponto de vista sobre o tema.",
    ],
    correta: 4,
    explicacao:
      "O expositivo informa e organiza conhecimento; o argumentativo assume uma tese e a sustenta. Provas como o ENEM exigem o segundo tipo, e textos meramente expositivos perdem pontos na Competência 3. A presença de posicionamento é o traço decisivo.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao perceber, durante a prova, que escreveu um argumento que contradiz a própria tese, o candidato deve:",
    opcoes: [
      "manter o argumento, pois demonstra visão ampla.",
      "abandonar a tese e adotar a nova posição no meio do texto.",
      "acrescentar mais um parágrafo com uma terceira posição.",
      "encerrar o texto imediatamente.",
      "reformular o trecho para alinhá-lo à tese defendida.",
    ],
    correta: 4,
    explicacao:
      "Contradição interna compromete a coerência avaliada na Competência 3. Considerar um contraponto é legítimo, desde que o texto o refute ou o integre à tese. Mudar de posição no meio do percurso desestrutura o projeto de texto.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "A leitura atenta dos textos motivadores serve principalmente para:",
    opcoes: [
      "fornecer trechos a serem copiados na redação.",
      "substituir a necessidade de repertório externo.",
      "indicar o número de parágrafos a escrever.",
      "definir o título obrigatório do texto.",
      "delimitar o recorte do tema e estimular a reflexão.",
    ],
    correta: 4,
    explicacao:
      "Os textos motivadores mostram por qual ângulo a banca recortou o assunto, o que previne tangenciamento. Eles estimulam, mas não bastam: a Competência 2 pede repertório externo. Copiá-los, além de improdutivo, pode levar à anulação.",
  },
  {
    materia: "portugues",
    tema: "Redação dissertativo-argumentativa",
    dificuldade: "media",
    enunciado:
      "Ao distribuir o tempo disponível para a produção da redação em uma prova longa, a estratégia mais recomendada pelos professores é:",
    opcoes: [
      "escrever direto na folha definitiva, sem rascunho, para poupar tempo.",
      "dedicar todo o tempo à introdução, que é a parte mais avaliada.",
      "deixar a redação para os últimos quinze minutos de prova.",
      "escrever o texto três vezes até memorizá-lo.",
      "reservar tempo para planejar, redigir o rascunho, revisar e transcrever.",
    ],
    correta: 4,
    explicacao:
      "O planejamento inicial define tese, eixos e proposta; a revisão captura desvios gramaticais e falhas de coerência; a transcrição exige atenção para não introduzir erros novos. Escrever direto na folha definitiva impede correções sem rasura. Deixar a redação para o fim costuma resultar em texto incompleto ou sem proposta de intervenção.",
  },
];
