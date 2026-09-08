/* =========================================================
   PERCURSO — Base de conteúdo
   Matérias, banco de questões e faculdades brasileiras.
   ========================================================= */

/* ---------------------------------------------------------
   MATÉRIAS
   area: exatas | humanas | linguagens | natureza
   --------------------------------------------------------- */
const SUBJECTS = [
  {
    id: "matematica",
    nome: "Matemática",
    glifo: "∑",
    area: "exatas",
    resumo: "Da álgebra básica à geometria analítica",
    aulas: 186,
    topicos: [
      ["Funções: afim, quadrática e exponencial", 82],
      ["Logaritmos e suas propriedades", 64],
      ["Progressões aritméticas e geométricas", 71],
      ["Geometria plana: áreas e semelhança", 78],
      ["Geometria espacial: prismas, cones e esferas", 55],
      ["Trigonometria no triângulo e no ciclo", 60],
      ["Análise combinatória e probabilidade", 48],
      ["Estatística: média, mediana e desvio", 74],
      ["Matrizes, determinantes e sistemas lineares", 41],
      ["Geometria analítica: reta e circunferência", 52],
      ["Matemática financeira: juros e descontos", 69],
      ["Razão, proporção e regra de três", 88]
    ]
  },
  {
    id: "portugues",
    nome: "Português",
    glifo: "¶",
    area: "linguagens",
    resumo: "Gramática, interpretação e redação nota mil",
    aulas: 174,
    topicos: [
      ["Interpretação e compreensão de texto", 90],
      ["Figuras de linguagem", 76],
      ["Sintaxe: período composto", 54],
      ["Concordância verbal e nominal", 67],
      ["Regência e crase", 58],
      ["Variação linguística e norma-padrão", 72],
      ["Gêneros textuais e tipologia", 65],
      ["Coesão e coerência", 80],
      ["Funções da linguagem", 74],
      ["Redação dissertativo-argumentativa", 62],
      ["Repertório sociocultural e proposta de intervenção", 49],
      ["Escolas literárias: do Barroco ao Modernismo", 57]
    ]
  },
  {
    id: "fisica",
    nome: "Física",
    glifo: "Δ",
    area: "exatas",
    resumo: "Mecânica, ondas, eletricidade e moderna",
    aulas: 152,
    topicos: [
      ["Cinemática: MRU e MRUV", 84],
      ["Leis de Newton e suas aplicações", 76],
      ["Trabalho, energia e potência", 70],
      ["Quantidade de movimento e colisões", 55],
      ["Estática e hidrostática", 61],
      ["Termologia e calorimetria", 66],
      ["Termodinâmica e máquinas térmicas", 47],
      ["Óptica geométrica: espelhos e lentes", 59],
      ["Ondulatória e acústica", 53],
      ["Eletrostática e campo elétrico", 50],
      ["Circuitos elétricos e leis de Ohm", 63],
      ["Eletromagnetismo e indução", 44],
      ["Física moderna: efeito fotoelétrico", 38]
    ]
  },
  {
    id: "quimica",
    nome: "Química",
    glifo: "⚗",
    area: "natureza",
    resumo: "Geral, físico-química e orgânica",
    aulas: 148,
    topicos: [
      ["Atomística e tabela periódica", 82],
      ["Ligações químicas e geometria molecular", 74],
      ["Funções inorgânicas", 68],
      ["Reações químicas e balanceamento", 71],
      ["Estequiometria e cálculos", 58],
      ["Soluções e concentrações", 62],
      ["Termoquímica", 54],
      ["Cinética química", 49],
      ["Equilíbrio químico e pH", 46],
      ["Eletroquímica: pilhas e eletrólise", 43],
      ["Química orgânica: funções e nomenclatura", 60],
      ["Isomeria e reações orgânicas", 41],
      ["Química ambiental e sustentabilidade", 77]
    ]
  },
  {
    id: "biologia",
    nome: "Biologia",
    glifo: "❋",
    area: "natureza",
    resumo: "Célula, genética, evolução e ecologia",
    aulas: 160,
    topicos: [
      ["Citologia: estrutura e organelas", 80],
      ["Metabolismo energético: respiração e fotossíntese", 69],
      ["Divisão celular: mitose e meiose", 72],
      ["Genética mendeliana", 64],
      ["Biotecnologia e engenharia genética", 55],
      ["Evolução e seleção natural", 76],
      ["Ecologia: cadeias e ciclos biogeoquímicos", 83],
      ["Problemas ambientais brasileiros", 79],
      ["Fisiologia humana: sistemas", 66],
      ["Imunologia e vacinas", 61],
      ["Botânica e reino vegetal", 47],
      ["Zoologia e classificação", 52]
    ]
  },
  {
    id: "historia",
    nome: "História",
    glifo: "⌛",
    area: "humanas",
    resumo: "Do mundo antigo ao Brasil contemporâneo",
    aulas: 143,
    topicos: [
      ["Brasil Colônia: economia e escravidão", 74],
      ["Independência e Primeiro Reinado", 63],
      ["Segundo Reinado e abolição", 66],
      ["República Velha e coronelismo", 68],
      ["Era Vargas", 78],
      ["Ditadura Militar no Brasil", 81],
      ["Redemocratização e Nova República", 70],
      ["Revolução Industrial", 65],
      ["Primeira e Segunda Guerra Mundial", 77],
      ["Guerra Fria e bipolaridade", 72],
      ["Revoluções: Francesa e Russa", 59],
      ["África e América pré-colonial", 51]
    ]
  },
  {
    id: "filosofia",
    nome: "Filosofia",
    glifo: "◈",
    area: "humanas",
    resumo: "Ética, política e teoria do conhecimento",
    aulas: 96,
    topicos: [
      ["Filosofia antiga: Sócrates, Platão e Aristóteles", 72],
      ["Ética e moral", 78],
      ["Contratualismo: Hobbes, Locke e Rousseau", 68],
      ["Filosofia política e democracia", 71],
      ["Teoria do conhecimento: racionalismo x empirismo", 57],
      ["Kant e o imperativo categórico", 52],
      ["Escola de Frankfurt e indústria cultural", 64],
      ["Existencialismo: Sartre e Beauvoir", 58],
      ["Nietzsche e a crítica à moral", 55],
      ["Sociologia clássica: Marx, Durkheim e Weber", 69],
      ["Cidadania e direitos humanos", 80],
      ["Bioética e dilemas contemporâneos", 61]
    ]
  },
  {
    id: "ingles",
    nome: "Inglês",
    glifo: "EN",
    area: "linguagens",
    resumo: "Leitura, vocabulário e estratégias de prova",
    aulas: 88,
    topicos: [
      ["Reading strategies: skimming e scanning", 86],
      ["Cognatos e falsos cognatos", 81],
      ["Verb tenses: present, past e future", 70],
      ["Modal verbs", 62],
      ["Conditionals", 54],
      ["Passive voice", 57],
      ["Connectives e linking words", 66],
      ["Phrasal verbs mais cobrados", 59],
      ["Vocabulário por campo semântico", 73],
      ["Interpretação de charges e tirinhas", 76],
      ["Textos jornalísticos e científicos", 64],
      ["Reported speech", 48]
    ]
  },
  {
    id: "artes",
    nome: "Artes",
    glifo: "◐",
    area: "linguagens",
    resumo: "Movimentos, arte brasileira e cultura visual",
    aulas: 72,
    topicos: [
      ["Renascimento e Barroco", 68],
      ["Barroco e Aleijadinho no Brasil", 71],
      ["Impressionismo e pós-impressionismo", 63],
      ["Vanguardas europeias", 66],
      ["Semana de Arte Moderna de 1922", 82],
      ["Modernismo brasileiro: Tarsila e Portinari", 77],
      ["Arte contemporânea e instalação", 55],
      ["Arte indígena e afro-brasileira", 74],
      ["Fotografia e cinema como linguagem", 60],
      ["Música popular brasileira", 69],
      ["Teatro: do grego ao contemporâneo", 52],
      ["Patrimônio cultural e tombamento", 58]
    ]
  }
];

/* ---------------------------------------------------------
   BANCO DE QUESTÕES
   Questões autorais no estilo das principais bancas.
   correta = índice da alternativa certa (0-4)
   --------------------------------------------------------- */
const QUESTIONS = [
  /* ---------- MATEMÁTICA ---------- */
  {
    materia: "matematica",
    fonte: "Estilo ENEM · Matemática e suas Tecnologias",
    enunciado: "Uma loja aumentou o preço de um produto em 20% e, depois de duas semanas sem vendas, anunciou um desconto de 20% sobre o novo preço. Em relação ao preço original, o preço final ficou:",
    opcoes: [
      "Igual ao preço original.",
      "4% menor que o preço original.",
      "4% maior que o preço original.",
      "20% menor que o preço original.",
      "2% menor que o preço original."
    ],
    correta: 1,
    explicacao: "Partindo de P: o aumento leva a 1,20P. O desconto de 20% incide sobre esse valor: 1,20P × 0,80 = 0,96P. Logo o preço final é 96% do original, ou seja, 4% menor. O erro clássico é somar e subtrair os percentuais, porque eles se aplicam a bases diferentes."
  },
  {
    materia: "matematica",
    fonte: "Estilo Fuvest · Progressões",
    enunciado: "Em uma progressão aritmética, o terceiro termo vale 7 e o sétimo termo vale 23. O primeiro termo dessa progressão é:",
    opcoes: ["−1", "1", "3", "4", "5"],
    correta: 0,
    explicacao: "De a₇ = a₃ + 4r temos 23 = 7 + 4r, então r = 4. Como a₃ = a₁ + 2r, vem 7 = a₁ + 8, logo a₁ = −1."
  },
  {
    materia: "matematica",
    fonte: "Estilo ENEM · Geometria",
    enunciado: "Um reservatório cilíndrico tem 2 m de raio e 5 m de altura. Usando π ≈ 3, qual é o volume aproximado, em litros?",
    opcoes: ["6 000 L", "30 000 L", "60 000 L", "600 000 L", "300 000 L"],
    correta: 2,
    explicacao: "V = πr²h ≈ 3 × 4 × 5 = 60 m³. Como 1 m³ equivale a 1 000 litros, o volume é 60 000 litros. A conversão de unidade é o passo em que a maioria erra."
  },

  /* ---------- PORTUGUÊS ---------- */
  {
    materia: "portugues",
    fonte: "Estilo ENEM · Linguagens",
    enunciado: "\"O Brasil é um país que vai pra frente, mas o povo continua no mesmo lugar.\" A construção do sentido nessa frase se apoia principalmente em:",
    opcoes: [
      "Uma metáfora que compara o país a um veículo.",
      "Uma antítese entre o movimento do país e a imobilidade do povo.",
      "Uma hipérbole que exagera a situação social.",
      "Uma prosopopeia que atribui fala ao país.",
      "Um eufemismo que suaviza a crítica social."
    ],
    correta: 1,
    explicacao: "A frase opõe duas ideias contrárias na mesma estrutura — \"vai pra frente\" versus \"continua no mesmo lugar\". Esse contraste deliberado entre termos opostos caracteriza a antítese, e é dele que nasce o efeito irônico de crítica social."
  },
  {
    materia: "portugues",
    fonte: "Estilo vestibular · Crase",
    enunciado: "Assinale a alternativa em que o uso do acento indicativo de crase está CORRETO:",
    opcoes: [
      "Entreguei o relatório à ele ontem.",
      "Começaremos a prova às 14 horas.",
      "Ele se dirigiu à Brasília com pressa.",
      "Estou disposto à ajudar você.",
      "Comprei o livro à prazo."
    ],
    correta: 1,
    explicacao: "A crase é a fusão da preposição \"a\" com o artigo \"a(s)\". Em \"às 14 horas\" há preposição exigida por \"começar a\" mais o artigo feminino das horas. Nas demais: antes de pronome pessoal, verbo e palavra masculina não há artigo feminino; e \"Brasília\" não admite artigo (quem vai, vai a Brasília)."
  },
  {
    materia: "portugues",
    fonte: "Estilo ENEM · Redação",
    enunciado: "Na redação do ENEM, a proposta de intervenção só é considerada completa quando apresenta:",
    opcoes: [
      "Apenas a ação e o agente responsável.",
      "Ação, agente, meio de execução, efeito e detalhamento de um deles.",
      "Uma citação de autoridade e uma solução geral.",
      "Somente o detalhamento do problema apresentado.",
      "Uma crítica ao poder público e uma sugestão vaga."
    ],
    correta: 1,
    explicacao: "A competência 5 exige cinco elementos: o que será feito (ação), quem fará (agente), como será feito (meio), para que (efeito) e o detalhamento de pelo menos um deles. Propostas genéricas do tipo \"o governo deve investir em educação\" perdem pontos justamente por não terem meio nem detalhamento."
  },

  /* ---------- FÍSICA ---------- */
  {
    materia: "fisica",
    fonte: "Estilo ENEM · Ciências da Natureza",
    enunciado: "Um carro de 1 000 kg trafega a 20 m/s e freia até parar completamente. Desprezando outras perdas, a energia dissipada pelos freios é de aproximadamente:",
    opcoes: ["10 kJ", "20 kJ", "100 kJ", "200 kJ", "400 kJ"],
    correta: 3,
    explicacao: "A energia cinética inicial é E = mv²/2 = 1000 × 400 / 2 = 200 000 J = 200 kJ. Como o carro para, toda essa energia é dissipada. Note que a velocidade entra ao quadrado: dobrar a velocidade quadruplica a energia a ser dissipada — é por isso que a distância de frenagem cresce tão rápido."
  },
  {
    materia: "fisica",
    fonte: "Estilo vestibular · Mecânica",
    enunciado: "Um objeto é abandonado do repouso de uma altura de 45 m. Adotando g = 10 m/s² e desprezando a resistência do ar, o tempo de queda é:",
    opcoes: ["1,5 s", "2,0 s", "3,0 s", "4,5 s", "9,0 s"],
    correta: 2,
    explicacao: "Na queda livre a partir do repouso, h = gt²/2. Assim 45 = 10t²/2 = 5t², de onde t² = 9 e t = 3 s. A massa do objeto não aparece na conta — todos os corpos caem igual no vácuo."
  },
  {
    materia: "fisica",
    fonte: "Estilo ENEM · Eletricidade",
    enunciado: "Um chuveiro elétrico de 5 500 W é ligado por 30 minutos por dia. Considerando 30 dias, o consumo mensal é de:",
    opcoes: ["27,5 kWh", "82,5 kWh", "165 kWh", "2 750 kWh", "5 500 kWh"],
    correta: 1,
    explicacao: "A potência é 5,5 kW e o uso diário é 0,5 h, logo 2,75 kWh por dia. Em 30 dias: 82,5 kWh. Questões de consumo pedem sempre potência em quilowatts multiplicada pelo tempo em horas."
  },

  /* ---------- QUÍMICA ---------- */
  {
    materia: "quimica",
    fonte: "Estilo ENEM · Ciências da Natureza",
    enunciado: "Ao dissolver 40 g de hidróxido de sódio (NaOH, massa molar 40 g/mol) em água suficiente para 2 litros de solução, a concentração em quantidade de matéria é:",
    opcoes: ["0,25 mol/L", "0,5 mol/L", "1,0 mol/L", "2,0 mol/L", "20 mol/L"],
    correta: 1,
    explicacao: "40 g de NaOH correspondem a 1 mol. Dividindo por 2 litros de solução, a concentração é 0,5 mol/L. Atenção: o volume considerado é o da solução final, não o da água adicionada."
  },
  {
    materia: "quimica",
    fonte: "Estilo vestibular · Ligações",
    enunciado: "A elevada temperatura de ebulição da água em comparação com outras moléculas de massa semelhante é explicada principalmente por:",
    opcoes: [
      "Ligações iônicas entre as moléculas.",
      "Ligações covalentes entre hidrogênio e oxigênio.",
      "Ligações de hidrogênio entre moléculas vizinhas.",
      "Forças de dispersão de London.",
      "A geometria linear da molécula."
    ],
    correta: 2,
    explicacao: "As ligações covalentes O–H existem dentro da molécula, mas o que dificulta a separação das moléculas na ebulição são as interações entre elas. Na água, a alta polaridade e o hidrogênio ligado ao oxigênio geram ligações de hidrogênio, as interações intermoleculares mais intensas."
  },
  {
    materia: "quimica",
    fonte: "Estilo ENEM · Química ambiental",
    enunciado: "A chuva ácida é agravada principalmente pela emissão de óxidos de enxofre e nitrogênio. O processo químico envolvido é:",
    opcoes: [
      "A reação desses óxidos com a água formando ácidos.",
      "A decomposição do ozônio pela radiação solar.",
      "A combustão incompleta do metano.",
      "A precipitação de metais pesados na atmosfera.",
      "A oxidação do gás carbônico em altitude."
    ],
    correta: 0,
    explicacao: "SO₂ e NOₓ reagem com o vapor d'água atmosférico formando ácidos sulfúrico e nítrico, que baixam o pH da chuva. Vale separar os fenômenos: chuva ácida, efeito estufa e buraco na camada de ozônio têm causas químicas distintas e são frequentemente confundidos na prova."
  },

  /* ---------- BIOLOGIA ---------- */
  {
    materia: "biologia",
    fonte: "Estilo ENEM · Genética",
    enunciado: "Do cruzamento entre dois indivíduos heterozigotos para um gene de herança dominante simples (Aa × Aa), a proporção fenotípica esperada na descendência é:",
    opcoes: ["1:1", "3:1", "1:2:1", "9:3:3:1", "2:1"],
    correta: 1,
    explicacao: "O quadro de Punnett gera 1 AA, 2 Aa e 1 aa. Como A é dominante, três descendentes expressam o fenótipo dominante e um o recessivo: proporção fenotípica 3:1. A proporção 1:2:1 é a genotípica — confundir as duas é o erro mais comum."
  },
  {
    materia: "biologia",
    fonte: "Estilo vestibular · Citologia",
    enunciado: "A síntese de ATP na respiração celular aeróbica ocorre majoritariamente em qual organela?",
    opcoes: [
      "Complexo golgiense",
      "Retículo endoplasmático rugoso",
      "Mitocôndria",
      "Lisossomo",
      "Cloroplasto"
    ],
    correta: 2,
    explicacao: "A glicólise acontece no citoplasma, mas o ciclo de Krebs e a cadeia respiratória — responsáveis pela maior parte do ATP — ocorrem na mitocôndria. O cloroplasto realiza fotossíntese, processo distinto e presente apenas em células vegetais e algas."
  },
  {
    materia: "biologia",
    fonte: "Estilo ENEM · Ecologia",
    enunciado: "Em uma cadeia alimentar, a quantidade de energia disponível diminui a cada nível trófico porque:",
    opcoes: [
      "Os organismos de níveis superiores são sempre menores.",
      "Parte da energia é perdida como calor e usada no metabolismo.",
      "A matéria orgânica deixa de circular no ecossistema.",
      "Os decompositores retiram energia do sistema.",
      "A fotossíntese ocorre apenas no primeiro nível."
    ],
    correta: 1,
    explicacao: "A cada transferência, apenas cerca de 10% da energia é incorporada ao nível seguinte; o restante é gasto no metabolismo e dissipado como calor. Por isso as pirâmides de energia são sempre decrescentes, e cadeias muito longas são raras."
  },

  /* ---------- HISTÓRIA ---------- */
  {
    materia: "historia",
    fonte: "Estilo ENEM · Ciências Humanas",
    enunciado: "A política do café com leite, característica da República Velha, consistia em:",
    opcoes: [
      "Um acordo comercial de exportação entre Brasil e Inglaterra.",
      "A alternância no poder entre as oligarquias de São Paulo e Minas Gerais.",
      "Um programa de subsídio à agricultura familiar.",
      "A união entre militares e cafeicultores contra a monarquia.",
      "Uma política de valorização do preço do leite no Sul."
    ],
    correta: 1,
    explicacao: "As elites cafeeiras paulistas e as pecuaristas mineiras se revezavam na presidência entre 1894 e 1930, sustentadas pelo voto de cabresto e pela política dos governadores. O arranjo entra em colapso quando São Paulo rompe o acordo em 1929, abrindo caminho para a Revolução de 1930."
  },
  {
    materia: "historia",
    fonte: "Estilo vestibular · Era Vargas",
    enunciado: "O Estado Novo (1937–1945), instaurado por Getúlio Vargas, caracterizou-se por:",
    opcoes: [
      "Ampliação das liberdades de imprensa e do pluripartidarismo.",
      "Centralização autoritária, censura pelo DIP e fechamento do Congresso.",
      "Descentralização administrativa em favor dos estados.",
      "Abertura total da economia ao capital estrangeiro.",
      "Retorno imediato ao regime monárquico."
    ],
    correta: 1,
    explicacao: "Apoiado no forjado Plano Cohen, Vargas fechou o Congresso, outorgou a Constituição de 1937 e criou o DIP para controlar a informação. Ao mesmo tempo consolidou a legislação trabalhista e investiu em indústria de base, combinação de autoritarismo político com modernização econômica."
  },
  {
    materia: "historia",
    fonte: "Estilo ENEM · Brasil República",
    enunciado: "O Ato Institucional nº 5, de dezembro de 1968, representou um marco na Ditadura Militar porque:",
    opcoes: [
      "Iniciou o processo de abertura política.",
      "Restabeleceu eleições diretas para presidente.",
      "Fechou o Congresso, suspendeu o habeas corpus e ampliou a censura.",
      "Concedeu anistia aos exilados políticos.",
      "Criou o sistema pluripartidário no país."
    ],
    correta: 2,
    explicacao: "O AI-5 inaugurou o período mais repressivo do regime, os chamados anos de chumbo: fechamento do Congresso, cassações, suspensão do habeas corpus para crimes políticos e censura prévia. A anistia viria só em 1979 e as diretas para presidente apenas em 1989."
  },

  /* ---------- FILOSOFIA ---------- */
  {
    materia: "filosofia",
    fonte: "Estilo ENEM · Ciências Humanas",
    enunciado: "Para Thomas Hobbes, o Estado se justifica porque, no estado de natureza:",
    opcoes: [
      "Os homens viviam em harmonia e liberdade plena.",
      "Havia guerra de todos contra todos, tornando a vida insegura.",
      "A propriedade privada já estava plenamente garantida.",
      "A vontade geral organizava espontaneamente a sociedade.",
      "O direito divino determinava a autoridade política."
    ],
    correta: 1,
    explicacao: "Em Leviatã, Hobbes descreve o estado de natureza como bellum omnium contra omnes, onde a vida seria \"solitária, pobre, sórdida, brutal e curta\". Os indivíduos então cedem sua liberdade a um soberano em troca de segurança. Rousseau parte da premissa oposta, a do homem naturalmente bom — contraste clássico de prova."
  },
  {
    materia: "filosofia",
    fonte: "Estilo vestibular · Ética",
    enunciado: "O imperativo categórico de Kant estabelece que devemos agir:",
    opcoes: [
      "Buscando sempre o maior prazer possível.",
      "Segundo a máxima que possa se tornar lei universal.",
      "Conforme as consequências mais úteis para a maioria.",
      "De acordo com os costumes de cada sociedade.",
      "Seguindo os instintos naturais sem restrição."
    ],
    correta: 1,
    explicacao: "A ética kantiana é deontológica: o valor moral está no dever e na intenção, não no resultado. A alternativa das consequências úteis para a maioria descreve o utilitarismo de Bentham e Mill, corrente oposta e frequentemente usada como distrator."
  },
  {
    materia: "filosofia",
    fonte: "Estilo ENEM · Sociologia",
    enunciado: "O conceito de indústria cultural, formulado por Adorno e Horkheimer, refere-se a:",
    opcoes: [
      "A democratização do acesso à arte erudita.",
      "A produção em série de bens culturais que padroniza gostos e reforça a passividade.",
      "O incentivo estatal à produção artística nacional.",
      "A preservação do patrimônio cultural imaterial.",
      "O surgimento das vanguardas artísticas do século XX."
    ],
    correta: 1,
    explicacao: "Para os frankfurtianos, a cultura transformada em mercadoria produz fórmulas repetidas que moldam o consumidor e desestimulam a reflexão crítica. O termo é sempre usado em sentido crítico, nunca elogioso — atenção a alternativas que o apresentam como algo positivo."
  },

  /* ---------- INGLÊS ---------- */
  {
    materia: "ingles",
    fonte: "Estilo ENEM · Língua Estrangeira",
    enunciado: "\"Although the company had promised significant changes, few of them were actually implemented.\" A palavra \"Although\" estabelece uma relação de:",
    opcoes: ["Causa", "Concessão", "Conclusão", "Adição", "Alternativa"],
    correta: 1,
    explicacao: "\"Although\" introduz uma ideia que contraria a expectativa criada pela outra oração — a promessa existia, mas o resultado foi outro. É concessão, equivalente a \"embora\". Causa seria \"because\", conclusão \"therefore\" e adição \"moreover\"."
  },
  {
    materia: "ingles",
    fonte: "Estilo vestibular · False friends",
    enunciado: "Na frase \"The doctor asked about her actual condition\", a palavra \"actual\" significa:",
    opcoes: ["Atual", "Real, verdadeira", "Antiga", "Provável", "Aparente"],
    correta: 1,
    explicacao: "\"Actual\" é um falso cognato clássico: significa real ou verdadeiro, não atual. Para dizer \"atual\" em inglês usa-se \"current\". Outros pares que caem muito: pretend (fingir), push (empurrar) e library (biblioteca)."
  },
  {
    materia: "ingles",
    fonte: "Estilo ENEM · Reading",
    enunciado: "Ao encontrar um texto longo em inglês na prova, a estratégia mais eficiente para responder a uma pergunta sobre um dado específico é:",
    opcoes: [
      "Traduzir o texto inteiro palavra por palavra.",
      "Fazer scanning, localizando no texto a informação pedida no enunciado.",
      "Ler apenas o título e deduzir a resposta.",
      "Procurar a alternativa com mais palavras conhecidas.",
      "Começar pelo último parágrafo."
    ],
    correta: 1,
    explicacao: "Scanning é a varredura em busca de uma informação pontual — números, nomes, datas — enquanto skimming serve para captar a ideia geral. Traduzir tudo consome o tempo que você precisa nas outras questões da prova."
  },

  /* ---------- ARTES ---------- */
  {
    materia: "artes",
    fonte: "Estilo ENEM · Linguagens",
    enunciado: "A Semana de Arte Moderna de 1922, realizada em São Paulo, teve como principal objetivo:",
    opcoes: [
      "Resgatar os padrões acadêmicos do século XIX.",
      "Romper com o academicismo e afirmar uma identidade artística brasileira.",
      "Difundir o Barroco mineiro no exterior.",
      "Consolidar o Realismo como estética oficial.",
      "Promover exclusivamente artistas europeus no Brasil."
    ],
    correta: 1,
    explicacao: "O evento no Theatro Municipal propunha liberdade formal e temas nacionais, rejeitando o academicismo importado. Dele saem a Antropofagia de Oswald de Andrade e obras como o Abaporu, de Tarsila do Amaral: a ideia de digerir influências estrangeiras para produzir algo próprio."
  },
  {
    materia: "artes",
    fonte: "Estilo vestibular · Arte brasileira",
    enunciado: "Candido Portinari é reconhecido especialmente por obras que retratam:",
    opcoes: [
      "Paisagens abstratas sem referência figurativa.",
      "O trabalhador brasileiro, os retirantes e o cotidiano popular.",
      "Cenas mitológicas greco-romanas.",
      "Retratos da nobreza imperial portuguesa.",
      "Instalações interativas com tecnologia digital."
    ],
    correta: 1,
    explicacao: "Em obras como Os Retirantes e Café, Portinari deu dimensão monumental ao trabalhador e ao migrante nordestino, com figuras de mãos e pés grandes que acentuam o peso do trabalho. É arte modernista com forte conteúdo social."
  },
  {
    materia: "artes",
    fonte: "Estilo ENEM · Patrimônio",
    enunciado: "O tombamento de um bem cultural pelo IPHAN tem como principal efeito:",
    opcoes: [
      "Transferir a propriedade do bem para a União.",
      "Proteger o bem, restringindo alterações que descaracterizem suas qualidades.",
      "Permitir a demolição mediante autorização municipal.",
      "Isentar o proprietário de qualquer responsabilidade sobre o bem.",
      "Impedir permanentemente a visitação pública."
    ],
    correta: 1,
    explicacao: "O tombamento não desapropria: o bem continua com o dono, que passa a ter o dever de conservá-lo e precisa de autorização para intervenções. A proteção alcança tanto bens materiais quanto conjuntos urbanos e paisagísticos."
  }
];

/* ---------------------------------------------------------
   FACULDADES BRASILEIRAS
   corte = nota de referência aproximada (ampla concorrência)
   Valores mudam a cada edição — use como parâmetro de meta.
   --------------------------------------------------------- */
const UNIS = [
  { sigla: "USP",      nome: "Universidade de São Paulo",                    uf: "SP", regiao: "sudeste",     curso: "Medicina",                 ingresso: "Fuvest / ENEM", corte: 812 },
  { sigla: "USP",      nome: "Universidade de São Paulo",                    uf: "SP", regiao: "sudeste",     curso: "Direito",                  ingresso: "Fuvest / ENEM", corte: 758 },
  { sigla: "USP",      nome: "Universidade de São Paulo",                    uf: "SP", regiao: "sudeste",     curso: "Engenharia de Computação", ingresso: "Fuvest / ENEM", corte: 771 },
  { sigla: "UNICAMP",  nome: "Universidade Estadual de Campinas",            uf: "SP", regiao: "sudeste",     curso: "Medicina",                 ingresso: "Vestibular próprio", corte: 806 },
  { sigla: "UNICAMP",  nome: "Universidade Estadual de Campinas",            uf: "SP", regiao: "sudeste",     curso: "Ciência da Computação",    ingresso: "Vestibular próprio", corte: 764 },
  { sigla: "UNESP",    nome: "Universidade Estadual Paulista",               uf: "SP", regiao: "sudeste",     curso: "Medicina",                 ingresso: "Vestibular próprio", corte: 798 },
  { sigla: "UNESP",    nome: "Universidade Estadual Paulista",               uf: "SP", regiao: "sudeste",     curso: "Arquitetura e Urbanismo",  ingresso: "Vestibular próprio", corte: 722 },
  { sigla: "UFRJ",     nome: "Universidade Federal do Rio de Janeiro",       uf: "RJ", regiao: "sudeste",     curso: "Medicina",                 ingresso: "SiSU",          corte: 799 },
  { sigla: "UFRJ",     nome: "Universidade Federal do Rio de Janeiro",       uf: "RJ", regiao: "sudeste",     curso: "Direito",                  ingresso: "SiSU",          corte: 745 },
  { sigla: "UFRJ",     nome: "Universidade Federal do Rio de Janeiro",       uf: "RJ", regiao: "sudeste",     curso: "Engenharia Civil",         ingresso: "SiSU",          corte: 731 },
  { sigla: "UFMG",     nome: "Universidade Federal de Minas Gerais",         uf: "MG", regiao: "sudeste",     curso: "Medicina",                 ingresso: "SiSU",          corte: 803 },
  { sigla: "UFMG",     nome: "Universidade Federal de Minas Gerais",         uf: "MG", regiao: "sudeste",     curso: "Psicologia",               ingresso: "SiSU",          corte: 727 },
  { sigla: "UFMG",     nome: "Universidade Federal de Minas Gerais",         uf: "MG", regiao: "sudeste",     curso: "Ciência da Computação",    ingresso: "SiSU",          corte: 752 },
  { sigla: "UFRGS",    nome: "Universidade Federal do Rio Grande do Sul",    uf: "RS", regiao: "sul",         curso: "Medicina",                 ingresso: "SiSU / Vestibular", corte: 795 },
  { sigla: "UFRGS",    nome: "Universidade Federal do Rio Grande do Sul",    uf: "RS", regiao: "sul",         curso: "Engenharia de Produção",   ingresso: "SiSU / Vestibular", corte: 726 },
  { sigla: "UFSC",     nome: "Universidade Federal de Santa Catarina",       uf: "SC", regiao: "sul",         curso: "Medicina",                 ingresso: "Vestibular / SiSU", corte: 790 },
  { sigla: "UFSC",     nome: "Universidade Federal de Santa Catarina",       uf: "SC", regiao: "sul",         curso: "Ciências Contábeis",       ingresso: "Vestibular / SiSU", corte: 668 },
  { sigla: "UFPR",     nome: "Universidade Federal do Paraná",               uf: "PR", regiao: "sul",         curso: "Medicina",                 ingresso: "Vestibular próprio", corte: 788 },
  { sigla: "UFPR",     nome: "Universidade Federal do Paraná",               uf: "PR", regiao: "sul",         curso: "Direito",                  ingresso: "Vestibular próprio", corte: 733 },
  { sigla: "UnB",      nome: "Universidade de Brasília",                     uf: "DF", regiao: "centro-oeste",curso: "Medicina",                 ingresso: "PAS / SiSU",    corte: 794 },
  { sigla: "UnB",      nome: "Universidade de Brasília",                     uf: "DF", regiao: "centro-oeste",curso: "Relações Internacionais",  ingresso: "PAS / SiSU",    corte: 741 },
  { sigla: "UnB",      nome: "Universidade de Brasília",                     uf: "DF", regiao: "centro-oeste",curso: "Engenharia de Software",   ingresso: "PAS / SiSU",    corte: 736 },
  { sigla: "UFPE",     nome: "Universidade Federal de Pernambuco",           uf: "PE", regiao: "nordeste",    curso: "Medicina",                 ingresso: "SiSU",          corte: 791 },
  { sigla: "UFPE",     nome: "Universidade Federal de Pernambuco",           uf: "PE", regiao: "nordeste",    curso: "Direito",                  ingresso: "SiSU",          corte: 738 },
  { sigla: "UFBA",     nome: "Universidade Federal da Bahia",                uf: "BA", regiao: "nordeste",    curso: "Medicina",                 ingresso: "SiSU",          corte: 785 },
  { sigla: "UFBA",     nome: "Universidade Federal da Bahia",                uf: "BA", regiao: "nordeste",    curso: "Arquitetura e Urbanismo",  ingresso: "SiSU",          corte: 714 },
  { sigla: "UFC",      nome: "Universidade Federal do Ceará",                uf: "CE", regiao: "nordeste",    curso: "Medicina",                 ingresso: "SiSU",          corte: 787 },
  { sigla: "UFC",      nome: "Universidade Federal do Ceará",                uf: "CE", regiao: "nordeste",    curso: "Engenharia da Computação", ingresso: "SiSU",          corte: 719 },
  { sigla: "UFRN",     nome: "Universidade Federal do Rio Grande do Norte",  uf: "RN", regiao: "nordeste",    curso: "Medicina",                 ingresso: "SiSU",          corte: 783 },
  { sigla: "UFPB",     nome: "Universidade Federal da Paraíba",              uf: "PB", regiao: "nordeste",    curso: "Odontologia",              ingresso: "SiSU",          corte: 722 },
  { sigla: "UFPA",     nome: "Universidade Federal do Pará",                 uf: "PA", regiao: "norte",       curso: "Medicina",                 ingresso: "SiSU",          corte: 779 },
  { sigla: "UFAM",     nome: "Universidade Federal do Amazonas",             uf: "AM", regiao: "norte",       curso: "Medicina",                 ingresso: "SiSU / PSC",    corte: 776 },
  { sigla: "UFAM",     nome: "Universidade Federal do Amazonas",             uf: "AM", regiao: "norte",       curso: "Engenharia Elétrica",      ingresso: "SiSU / PSC",    corte: 683 },
  { sigla: "UFG",      nome: "Universidade Federal de Goiás",                uf: "GO", regiao: "centro-oeste",curso: "Medicina",                 ingresso: "SiSU",          corte: 786 },
  { sigla: "UFMS",     nome: "Universidade Federal de Mato Grosso do Sul",   uf: "MS", regiao: "centro-oeste",curso: "Direito",                  ingresso: "SiSU",          corte: 703 },
  { sigla: "ITA",      nome: "Instituto Tecnológico de Aeronáutica",         uf: "SP", regiao: "sudeste",     curso: "Engenharia Aeronáutica",   ingresso: "Vestibular próprio", corte: 830 },
  { sigla: "IME",      nome: "Instituto Militar de Engenharia",              uf: "RJ", regiao: "sudeste",     curso: "Engenharia de Computação", ingresso: "Concurso de admissão", corte: 825 },
  { sigla: "UERJ",     nome: "Universidade do Estado do Rio de Janeiro",     uf: "RJ", regiao: "sudeste",     curso: "Medicina",                 ingresso: "Vestibular próprio", corte: 792 },
  { sigla: "UFV",      nome: "Universidade Federal de Viçosa",               uf: "MG", regiao: "sudeste",     curso: "Agronomia",                ingresso: "SiSU",          corte: 692 },
  { sigla: "UFSCar",   nome: "Universidade Federal de São Carlos",           uf: "SP", regiao: "sudeste",     curso: "Ciência da Computação",    ingresso: "SiSU",          corte: 741 },
  { sigla: "UFES",     nome: "Universidade Federal do Espírito Santo",       uf: "ES", regiao: "sudeste",     curso: "Medicina",                 ingresso: "SiSU",          corte: 784 },
  { sigla: "UFPel",    nome: "Universidade Federal de Pelotas",              uf: "RS", regiao: "sul",         curso: "Odontologia",              ingresso: "SiSU",          corte: 715 },
  { sigla: "UEL",      nome: "Universidade Estadual de Londrina",            uf: "PR", regiao: "sul",         curso: "Medicina",                 ingresso: "Vestibular próprio", corte: 781 },
  { sigla: "UFJF",     nome: "Universidade Federal de Juiz de Fora",         uf: "MG", regiao: "sudeste",     curso: "Enfermagem",               ingresso: "SiSU / PISM",   corte: 688 },
  { sigla: "UFMA",     nome: "Universidade Federal do Maranhão",             uf: "MA", regiao: "nordeste",    curso: "Medicina",                 ingresso: "SiSU",          corte: 777 },
  { sigla: "UFT",      nome: "Universidade Federal do Tocantins",            uf: "TO", regiao: "norte",       curso: "Direito",                  ingresso: "SiSU",          corte: 697 }
];

/* ---------------------------------------------------------
   TRILHAS / OBJETIVOS
   --------------------------------------------------------- */
const TRACKS = [
  {
    id: "enem",
    titulo: "ENEM",
    desc: "As quatro áreas mais redação, com foco em interpretação e nas competências que a banca realmente cobra.",
    tags: ["4 áreas", "Redação nota 1000", "TRI explicada"],
    destaque: "Mais procurado",
    ico: "star",
    stat: "1 800+ questões"
  },
  {
    id: "vestibular",
    titulo: "Vestibulares",
    desc: "Fuvest, Unicamp, UERJ, UFPR e outras bancas próprias, com a lógica de prova de cada instituição.",
    tags: ["Fuvest", "Unicamp", "2ª fase"],
    ico: "book",
    stat: "12 bancas"
  },
  {
    id: "concurso",
    titulo: "Concursos públicos",
    desc: "Português, raciocínio lógico, informática, direito e legislação nos formatos Cebraspe, FGV e Cesgranrio.",
    tags: ["Cebraspe", "FGV", "Certo/Errado"],
    ico: "shield",
    stat: "Editais recentes"
  },
  {
    id: "militar",
    titulo: "Carreiras militares",
    desc: "ITA, IME, AFA, EsPCEx e Escola Naval: exatas em profundidade e o nível de exigência dessas provas.",
    tags: ["ITA", "IME", "EsPCEx"],
    ico: "compass",
    stat: "Exatas avançadas"
  },
  {
    id: "escola",
    titulo: "Reforço escolar",
    desc: "Ensino fundamental e médio acompanhando o conteúdo da escola, com explicações do zero em cada matéria.",
    tags: ["6º ao 3º ano", "Do zero", "Exercícios"],
    ico: "layers",
    stat: "9 matérias"
  },
  {
    id: "graduacao",
    titulo: "Já na faculdade",
    desc: "Cálculo, física geral, estatística e produção acadêmica para quem precisa segurar as matérias do ciclo básico.",
    tags: ["Cálculo I e II", "Estatística", "ABNT"],
    ico: "cap",
    stat: "Ciclo básico"
  }
];


export { SUBJECTS, QUESTIONS, UNIS, TRACKS };
