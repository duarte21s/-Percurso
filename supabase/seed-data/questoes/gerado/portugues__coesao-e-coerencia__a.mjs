/* Coesão e coerência — parte A (25 questões).
   Coesão referencial e sequencial, conectivos, progressão temática e os
   princípios que sustentam a coerência. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A prefeitura anunciou o novo plano de mobilidade. Ele prevê a ampliação das ciclovias em dez bairros.\" O pronome \"ele\" garante a coesão do trecho ao:",
    opcoes: [
      "introduzir uma informação inteiramente nova.",
      "estabelecer uma relação de oposição entre as frases.",
      "retomar um termo mencionado na frase anterior.",
      "antecipar um termo que só aparecerá adiante.",
      "indicar a finalidade do plano de mobilidade.",
    ],
    correta: 2,
    explicacao:
      "\"Ele\" recupera \"o novo plano de mobilidade\", evitando a repetição do termo e amarrando as duas frases. Essa retomada de um elemento já citado chama-se anáfora e é o mecanismo de coesão referencial mais frequente. Quando o pronome antecipa um termo ainda não mencionado, tem-se catáfora.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Só peço isto: que sejam pontuais.\" O pronome \"isto\", nesse enunciado, cumpre função coesiva ao:",
    opcoes: [
      "anunciar antecipadamente o que será dito em seguida.",
      "retomar um termo citado no parágrafo anterior.",
      "substituir um conectivo de oposição.",
      "indicar uma relação de causa entre as orações.",
      "marcar a conclusão de um raciocínio.",
    ],
    correta: 0,
    explicacao:
      "Aqui o pronome aponta para frente, anunciando um conteúdo que só se explicita depois dos dois-pontos: trata-se de catáfora. A anáfora faz o movimento inverso, retomando algo já dito. Em português, \"isto\" tende a apontar para frente e \"isso\", para trás.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Machado de Assis publicou Dom Casmurro em 1899. O escritor carioca já era consagrado quando lançou o romance.\" A expressão \"o escritor carioca\" garante coesão por meio de:",
    opcoes: [
      "elipse do sujeito da segunda oração.",
      "repetição literal do termo anterior.",
      "uso de conectivo conclusivo.",
      "substituição lexical por expressão equivalente.",
      "inversão da ordem direta da frase.",
    ],
    correta: 3,
    explicacao:
      "A expressão retoma \"Machado de Assis\" sem repeti-lo, acrescentando ainda uma informação nova. Esse recurso, chamado de substituição lexical ou coesão por reiteração, evita a monotonia da repetição e enriquece o texto. Também aparece em \"o autor\", \"o romancista\" e outras designações equivalentes.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Estudou muito para a prova. Não conseguiu, contudo, a nota que esperava.\" O conectivo \"contudo\" estabelece entre os períodos uma relação de:",
    opcoes: [
      "adição",
      "oposição",
      "conclusão",
      "explicação",
      "finalidade",
    ],
    correta: 1,
    explicacao:
      "\"Contudo\" quebra a expectativa criada pelo período anterior, marcando contraste. Pertence ao mesmo grupo de \"mas\", \"porém\", \"todavia\" e \"entretanto\". Substituí-lo por \"portanto\" inverteria a lógica do trecho e produziria incoerência, já que o esforço passaria a justificar o fracasso.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"O investimento em saneamento reduz internações. Portanto, economiza recursos do sistema de saúde.\" O conectivo \"portanto\" indica:",
    opcoes: [
      "oposição",
      "condição",
      "comparação",
      "conclusão",
      "concessão",
    ],
    correta: 3,
    explicacao:
      "\"Portanto\" apresenta a segunda informação como decorrência lógica da primeira, encerrando um raciocínio. São equivalentes \"logo\", \"por isso\" e \"assim\". Em textos dissertativos, esse tipo de conectivo costuma introduzir a conclusão de um parágrafo argumentativo.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"João é vegetariano convicto há dez anos. No jantar de ontem, ele pediu picanha malpassada.\" O problema desse trecho está na:",
    opcoes: [
      "ausência de conectivos entre as frases.",
      "repetição desnecessária do sujeito.",
      "quebra de coerência por contradição interna.",
      "pontuação inadequada no primeiro período.",
      "utilização de vocabulário excessivamente formal.",
    ],
    correta: 2,
    explicacao:
      "A coesão está garantida — o pronome \"ele\" retoma João corretamente —, mas o conteúdo se contradiz: um vegetariano convicto não pede picanha. Coesão é a amarração formal entre as partes; coerência é a compatibilidade lógica e semântica entre elas. Um texto pode ser coeso e ainda assim incoerente.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Chegou cedo ao escritório, organizou os documentos e enviou os relatórios.\" A ausência do sujeito nas duas últimas orações caracteriza o recurso coesivo chamado de:",
    opcoes: [
      "catáfora",
      "substituição lexical",
      "elipse",
      "repetição",
      "paralelismo",
    ],
    correta: 2,
    explicacao:
      "A elipse omite um termo recuperável pelo contexto, aqui o sujeito já expresso na primeira oração. O recurso dá fluidez ao período e evita repetição desnecessária. Torna-se problema apenas quando o termo omitido não é recuperável com clareza, gerando ambiguidade.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Não houve reajuste salarial. ___, os funcionários decidiram manter as negociações.\" O conectivo que preenche a lacuna preservando a relação de concessão é:",
    opcoes: [
      "Portanto",
      "Ainda assim",
      "Porque",
      "Ou seja",
      "Além disso",
    ],
    correta: 1,
    explicacao:
      "\"Ainda assim\" indica que a decisão contraria a expectativa criada pela ausência de reajuste, valor concessivo-adversativo. \"Portanto\" traria conclusão e \"porque\", causa — ambos alterariam a lógica. Escolher o conectivo pelo som, e não pelo valor semântico, é a principal fonte de incoerência em redações.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Um texto dissertativo apresenta, a cada parágrafo, informações que não se relacionam com a tese anunciada na introdução. O princípio de coerência violado nesse caso é o da:",
    opcoes: [
      "relevância entre as informações e o tema tratado.",
      "concordância verbal entre sujeito e predicado.",
      "regência nominal dos termos empregados.",
      "correção ortográfica das palavras usadas.",
      "acentuação gráfica dos monossílabos tônicos.",
    ],
    correta: 0,
    explicacao:
      "A coerência exige que cada parte contribua para o propósito global do texto. Informações verdadeiras e bem escritas, mas alheias ao tema, quebram a unidade e desorientam o leitor. Concordância, regência, ortografia e acentuação são questões de correção gramatical, não de coerência textual.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A cidade cresceu rapidamente. ___, faltaram investimentos em infraestrutura básica.\" O conectivo mais adequado à relação de contraste é:",
    opcoes: [
      "Assim",
      "Logo",
      "No entanto",
      "Porque",
      "Portanto",
    ],
    correta: 2,
    explicacao:
      "\"No entanto\" marca a oposição entre o crescimento e a falta de infraestrutura, contrariando a expectativa de que crescimento venha acompanhado de investimento. Os demais conectivos indicam conclusão ou causa e sugeririam, equivocadamente, que a falta de infraestrutura decorre naturalmente do crescimento.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Os professores receberam o material. Os mesmos iniciaram a formação na semana seguinte.\" O emprego de \"os mesmos\" nesse contexto é considerado inadequado na norma-padrão porque:",
    opcoes: [
      "a expressão não retoma nenhum termo do texto.",
      "\"mesmo\" não funciona como pronome de retomada de sujeito.",
      "a frase exigiria obrigatoriamente a repetição do substantivo.",
      "o texto ficaria incoerente com o uso de qualquer pronome.",
      "não é possível iniciar período com artigo definido.",
    ],
    correta: 1,
    explicacao:
      "\"Mesmo\" é palavra de reforço ou de identidade — \"ele mesmo\", \"o mesmo livro\" —, e não pronome substantivo de retomada. A norma-padrão recomenda \"eles\" ou a substituição lexical, como \"os docentes\". O uso criticado é frequente em textos burocráticos, mas condenado em provas de redação.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"O relatório aponta falhas. A empresa negou as acusações. O documento foi elaborado por auditores independentes.\" O problema de organização desse trecho é a falta de:",
    opcoes: [
      "concordância entre os verbos empregados.",
      "vocabulário técnico adequado ao tema.",
      "progressão temática ordenada entre as informações.",
      "correção ortográfica nas palavras utilizadas.",
      "uso de linguagem formal em contexto empresarial.",
    ],
    correta: 2,
    explicacao:
      "A informação sobre a autoria do relatório deveria vir junto à primeira menção ao documento, e não depois da reação da empresa. O vaivém quebra o encadeamento lógico e obriga o leitor a reorganizar mentalmente o texto. Progressão temática é a manutenção de um fio condutor claro entre as informações.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Ela estuda medicina; a irmã, direito.\" A vírgula empregada na segunda oração indica:",
    opcoes: [
      "a presença de um aposto explicativo.",
      "a elipse do verbo já mencionado anteriormente.",
      "a separação entre sujeito e predicado.",
      "o isolamento de um adjunto adverbial deslocado.",
      "a introdução de uma oração subordinada.",
    ],
    correta: 1,
    explicacao:
      "A vírgula marca o lugar do verbo \"estuda\", omitido por já ter aparecido antes — recurso chamado de zeugma. Trata-se de uma forma de coesão por elipse, que confere concisão sem prejuízo da compreensão. Retirar a vírgula tornaria a leitura confusa.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"Primeiro, é preciso identificar o problema. Em seguida, propor soluções viáveis. Por fim, avaliar os resultados.\" As expressões destacadas cumprem a função coesiva de:",
    opcoes: [
      "ordenar as informações em sequência.",
      "marcar oposição entre as etapas descritas.",
      "indicar causa e consequência entre as ações.",
      "exemplificar cada uma das soluções propostas.",
      "resumir o conteúdo apresentado anteriormente.",
    ],
    correta: 0,
    explicacao:
      "\"Primeiro\", \"em seguida\" e \"por fim\" organizam a progressão do texto, orientando o leitor sobre a etapa em que se encontra. São operadores de sequenciação, tipo de coesão sequencial. Em textos dissertativos, cumprem papel semelhante ao dos conectivos lógicos entre parágrafos.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"É necessário investir em educação, saúde e que a segurança seja reforçada.\" O problema dessa construção é a falta de:",
    opcoes: [
      "concordância nominal entre os substantivos.",
      "conectivo entre os elementos enumerados.",
      "pontuação adequada na enumeração apresentada.",
      "paralelismo sintático entre os termos coordenados.",
      "clareza quanto ao sujeito da oração principal.",
    ],
    correta: 3,
    explicacao:
      "Os dois primeiros itens são substantivos e o terceiro é uma oração, o que quebra a simetria da enumeração. A correção seria \"investir em educação, saúde e segurança\" ou \"que se invista em educação, que se amplie a saúde e que se reforce a segurança\". Paralelismo é a construção de estruturas equivalentes em séries coordenadas.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A empresa demitiu funcionários. Isso gerou insatisfação entre os que permaneceram.\" O pronome \"isso\" retoma:",
    opcoes: [
      "toda a ideia expressa no período anterior.",
      "apenas o substantivo \"funcionários\".",
      "somente o sujeito \"a empresa\".",
      "um termo que ainda será mencionado.",
      "um elemento externo ao texto apresentado.",
    ],
    correta: 0,
    explicacao:
      "Pronomes demonstrativos neutros como \"isso\" e \"aquilo\" podem retomar orações e períodos inteiros, e não apenas substantivos isolados. Aqui, o que gerou insatisfação foi o fato de a empresa ter demitido, e não os funcionários em si. Essa retomada de conteúdos amplos é chamada de anáfora encapsuladora.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"O projeto foi aprovado ___ atendia a todos os requisitos técnicos exigidos.\" O conectivo que preenche a lacuna estabelecendo relação de causa é:",
    opcoes: [
      "embora",
      "porque",
      "portanto",
      "caso",
      "a fim de que",
    ],
    correta: 1,
    explicacao:
      "\"Porque\" apresenta o motivo da aprovação, valor causal. \"Portanto\" inverteria a relação, transformando a causa em consequência; \"embora\" traria concessão. Identificar qual informação é causa e qual é efeito antes de escolher o conectivo evita a maior parte dos erros de coesão.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "facil",
    enunciado:
      "Leia: \"A reunião foi produtiva. ___, todos os pontos da pauta foram discutidos.\" O conectivo que preenche a lacuna acrescentando uma justificativa é:",
    opcoes: [
      "Contudo",
      "Apesar disso",
      "Em contrapartida",
      "Afinal",
      "Por outro lado",
    ],
    correta: 3,
    explicacao:
      "\"Afinal\" introduz a razão pela qual a reunião foi considerada produtiva, funcionando como explicação. As demais alternativas são todas adversativas e criariam contraste onde há reforço, produzindo incoerência entre a avaliação positiva e sua justificativa.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Pedro encontrou Lucas quando ele saía do escritório.\" O problema apresentado por essa construção é:",
    opcoes: [
      "a ausência de vírgula antes da conjunção.",
      "a impossibilidade de uso do verbo \"encontrar\".",
      "a incoerência entre o tempo verbal e o contexto.",
      "a repetição desnecessária de dois nomes próprios.",
      "a ambiguidade quanto ao referente do pronome \"ele\".",
    ],
    correta: 4,
    explicacao:
      "O pronome pode retomar tanto Pedro quanto Lucas, e o texto não oferece pista para desfazer a dúvida. Ambiguidade referencial é uma falha de coesão que compromete a compreensão. A correção passa por reescrever: \"Pedro encontrou Lucas quando este saía do escritório\", por exemplo.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"O aumento do desmatamento preocupa. ___, ele compromete o regime de chuvas em toda a região.\" O conectivo adequado para introduzir uma explicação é:",
    opcoes: [
      "Ainda assim",
      "Por outro lado",
      "Em síntese",
      "Isso porque",
      "Apesar de",
    ],
    correta: 3,
    explicacao:
      "\"Isso porque\" introduz a razão da preocupação anunciada, cumprindo função explicativa. \"Em síntese\" anunciaria resumo, e as demais alternativas trariam contraste ou concessão. Conectivos explicativos são especialmente úteis para desenvolver argumentos no interior de um parágrafo.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Sobre a distinção entre coesão e coerência, é correto afirmar que a coesão diz respeito:",
    opcoes: [
      "à compatibilidade lógica entre as ideias do texto.",
      "à relação do texto com o conhecimento de mundo do leitor.",
      "à adequação do texto ao gênero escolhido.",
      "ao número de parágrafos utilizados na redação.",
      "aos mecanismos linguísticos que ligam as partes do texto.",
    ],
    correta: 4,
    explicacao:
      "A coesão opera na superfície do texto, por meio de pronomes, conectivos, elipses e substituições. A coerência atua no plano do sentido, garantindo que as ideias sejam compatíveis entre si e com o mundo. São dimensões complementares: um texto pode ser coeso e incoerente, ou coerente com coesão precária.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"A vacina reduz a circulação do vírus. ___, protege inclusive quem não pôde ser imunizado.\" O conectivo que preenche a lacuna acrescentando um argumento na mesma direção é:",
    opcoes: [
      "Além disso",
      "Entretanto",
      "Em vez disso",
      "Ao contrário",
      "Por outro lado",
    ],
    correta: 0,
    explicacao:
      "\"Além disso\" soma um novo argumento favorável ao mesmo ponto de vista, valor aditivo. As demais alternativas são adversativas e sugeririam que a segunda informação contraria a primeira, o que não ocorre: as duas reforçam o mesmo argumento em favor da vacinação.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Todos os candidatos foram aprovados. Alguns, no entanto, não atingiram a nota mínima exigida.\" A incoerência desse trecho decorre de:",
    opcoes: [
      "uso inadequado do conectivo adversativo.",
      "ausência de sujeito na segunda oração.",
      "repetição desnecessária de termos equivalentes.",
      "emprego de vocabulário impreciso no primeiro período.",
      "contradição entre a afirmação inicial e a informação seguinte.",
    ],
    correta: 4,
    explicacao:
      "Se todos foram aprovados, ninguém pode ter ficado abaixo da nota mínima: as duas informações se excluem. O conectivo adversativo está formalmente adequado, mas não resolve a contradição de conteúdo. Coerência exige compatibilidade lógica, e nenhuma escolha de conectivo corrige uma contradição factual.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Leia: \"O escritor publicou seu primeiro romance aos vinte anos. A obra recebeu prêmios importantes.\" A expressão \"a obra\" mantém a coesão porque:",
    opcoes: [
      "introduz um assunto totalmente novo no texto.",
      "antecipa uma informação que virá no parágrafo seguinte.",
      "estabelece contraste com a informação anterior.",
      "indica a finalidade da publicação mencionada.",
      "retoma \"seu primeiro romance\" por meio de um termo mais genérico.",
    ],
    correta: 4,
    explicacao:
      "A retomada por hiperônimo — termo de sentido mais amplo que engloba o anterior — é um recurso comum de coesão lexical. Evita repetição e mantém o fio referencial. O movimento inverso também ocorre: partir de um termo geral e retomá-lo por um mais específico.",
  },
  {
    materia: "portugues",
    tema: "Coesão e coerência",
    dificuldade: "media",
    enunciado:
      "Em uma redação dissertativa, o uso repetido do conectivo \"e\" para ligar todas as ideias produz como principal efeito:",
    opcoes: [
      "maior precisão nas relações lógicas entre os argumentos.",
      "aumento automático da coerência global do texto.",
      "eliminação de qualquer ambiguidade referencial.",
      "adequação plena ao registro formal exigido.",
      "empobrecimento das relações de sentido entre as partes.",
    ],
    correta: 4,
    explicacao:
      "O \"e\" apenas soma, sem indicar se a relação é de causa, oposição, conclusão ou condição. Um texto que só acumula perde a hierarquia entre as ideias e enfraquece a argumentação. Variar os conectivos conforme a relação lógica pretendida é o que dá densidade ao raciocínio.",
  },
];
