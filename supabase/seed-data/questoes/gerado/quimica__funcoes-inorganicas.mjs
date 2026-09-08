/* Funções inorgânicas (50 questões).
   Ácidos, bases, sais e óxidos: definições, nomenclatura, força, reações
   de neutralização e exemplos do cotidiano.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "Segundo a definição de Arrhenius, um ácido é toda substância que, em solução aquosa, sofre ionização liberando como único cátion o:",
    opcoes: [
      "íon H⁺ (hidrônio, H₃O⁺)",
      "íon OH⁻",
      "íon Na⁺",
      "íon Cl⁻",
      "íon NH₄⁺",
    ],
    correta: 0,
    explicacao:
      "Arrhenius definiu ácidos como substâncias que, dissolvidas em água, liberam H⁺ como único cátion — na prática, esse próton se associa a uma molécula de água formando o hidrônio. A liberação de OH⁻ como único ânion, por sua vez, define as bases de Arrhenius.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "As bases de Arrhenius, ao se dissociarem em água, liberam como único ânion o íon:",
    opcoes: [
      "hidroxila, OH⁻",
      "hidrônio, H₃O⁺",
      "sulfato, SO₄²⁻",
      "cloreto, Cl⁻",
      "carbonato, CO₃²⁻",
    ],
    correta: 0,
    explicacao:
      "A hidroxila é o ânion característico das bases, como no hidróxido de sódio (NaOH), que em água libera Na⁺ e OH⁻. O hidrônio é o cátion liberado pelos ácidos, e os demais são ânions de sais específicos, não de bases em geral.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "O vinagre de cozinha contém ácido acético em solução, responsável pelo sabor azedo característico. Essa é uma propriedade comum às substâncias classificadas como:",
    opcoes: [
      "ácidos",
      "bases",
      "sais neutros",
      "óxidos básicos",
      "hidretos metálicos",
    ],
    correta: 0,
    explicacao:
      "O sabor azedo é uma característica sensorial típica dos ácidos, presente também no limão e outras frutas cítricas. As bases, ao contrário, têm sabor adstringente e sensação escorregadia ao toque, como o sabão em solução.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "O cloreto de sódio, obtido industrialmente a partir da evaporação da água do mar, é formado pela reação entre um ácido e uma base. Substâncias formadas dessa maneira, por cátion diferente de H⁺ e ânion diferente de OH⁻, são classificadas como:",
    opcoes: [
      "sais",
      "óxidos",
      "ácidos",
      "bases",
      "hidretos",
    ],
    correta: 0,
    explicacao:
      "Os sais resultam da reação de neutralização entre ácido e base, e o cloreto de sódio é o exemplo mais conhecido, formado a partir de HCl e NaOH. Óxidos, por definição, são compostos binários com oxigênio ligado a outro elemento, categoria diferente.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "A ferrugem, resultado da corrosão do ferro em contato com o oxigênio do ar, é composta principalmente por óxido de ferro. Compostos binários formados por oxigênio ligado a outro elemento são classificados como:",
    opcoes: [
      "óxidos",
      "sais",
      "ácidos",
      "bases",
      "hidróxidos",
    ],
    correta: 0,
    explicacao:
      "Óxidos são compostos binários em que o oxigênio, sendo o elemento mais eletronegativo da fórmula, se liga a outro elemento — no caso da ferrugem, ao ferro. Hidróxidos são compostos diferentes, formados por um metal ligado ao grupo hidroxila, OH.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "O papel tornassol é um indicador ácido-base usado em laboratório. Ao ser mergulhado em uma solução ácida, o papel tornassol azul muda de cor para:",
    opcoes: [
      "vermelho",
      "verde",
      "amarelo",
      "roxo",
      "permanece azul",
    ],
    correta: 0,
    explicacao:
      "O tornassol azul fica vermelho em meio ácido e o vermelho fica azul em meio básico — é essa mudança visual que permite identificar rapidamente o caráter de uma solução. Em soluções neutras, o papel não muda de cor.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "O leite de magnésia, usado como antiácido estomacal, é uma suspensão de hidróxido de magnésio, Mg(OH)₂. Esse composto pertence à função química das:",
    opcoes: [
      "bases",
      "ácidos",
      "sais",
      "óxidos",
      "hidretos",
    ],
    correta: 0,
    explicacao:
      "Hidróxidos metálicos, que liberam OH⁻ em água, são bases; o Mg(OH)₂ neutraliza o excesso de ácido clorídrico do estômago, aliviando a azia. É essa reação de neutralização, entre base e ácido gástrico, que justifica seu uso medicinal.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "O ácido clorídrico, HCl, é uma substância que se ioniza totalmente em água, liberando grande quantidade de íons H⁺. Ácidos com esse comportamento são classificados quanto à força como:",
    opcoes: [
      "fortes",
      "fracos",
      "neutros",
      "moderados",
      "insolúveis",
    ],
    correta: 0,
    explicacao:
      "A força de um ácido está ligada ao grau de ionização em água: quanto mais próximo de 100% ionizado, mais forte é o ácido. O HCl, o HNO₃ e o H₂SO₄ são exemplos clássicos de ácidos fortes, enquanto o ácido acético se ioniza pouco e é considerado fraco.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "Ao adicionar quantidades adequadas de um ácido e de uma base em um mesmo recipiente, ocorre uma reação química que produz sal e água. Essa reação é chamada de:",
    opcoes: [
      "neutralização",
      "combustão",
      "oxidação simples",
      "eletrólise",
      "sublimação",
    ],
    correta: 0,
    explicacao:
      "A neutralização é a reação característica entre ácido e base de Arrhenius: o H⁺ do ácido se combina com o OH⁻ da base formando água, enquanto o restante dos íons forma o sal. A equação geral é ácido + base → sal + água.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "O gás carbônico, CO₂, dissolvido em água forma o ácido carbônico, responsável em parte pela acidez das águas de chuva e dos refrigerantes gaseificados. O CO₂, por reagir com água formando ácido, é classificado como um óxido:",
    opcoes: [
      "ácido",
      "básico",
      "neutro",
      "anfótero",
      "misto",
    ],
    correta: 0,
    explicacao:
      "Óxidos ácidos, geralmente formados por ametais, reagem com água produzindo ácidos, e com bases produzindo sal e água. Óxidos básicos, ao contrário, reagem com água formando bases — é o caso do óxido de cálcio, que forma o hidróxido de cálcio.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante testa quatro soluções aquosas com papel indicador universal e obtém os seguintes valores de pH: solução A, pH 2; solução B, pH 7; solução C, pH 10; solução D, pH 13. A solução com maior caráter básico é a:",
    opcoes: [
      "D",
      "A",
      "B",
      "C",
      "nenhuma delas, pois todas são ácidas",
    ],
    correta: 0,
    explicacao:
      "Na escala de pH, valores acima de 7 indicam basicidade crescente, e 13 é o mais distante da neutralidade entre as opções, portanto a solução mais básica. A solução B, com pH 7, é neutra, e a solução A, com pH 2, é a mais ácida do grupo.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Na reação entre ácido sulfúrico e hidróxido de sódio, representada por H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O, o sal formado e sua classificação quanto à origem dos íons são, respectivamente:",
    opcoes: [
      "cloreto de sódio, um sal ácido",
      "sulfato de sódio, um sal neutro formado por ácido forte e base forte",
      "sulfato de sódio, um sal básico",
      "hidróxido de sódio, um sal neutro",
      "ácido sulfúrico, um sal ácido",
    ],
    correta: 1,
    explicacao:
      "O sal resultante é o sulfato de sódio, e como tanto o H₂SO₄ quanto o NaOH são eletrólitos fortes, a solução aquosa desse sal tem pH próximo de 7, caracterizando-o como sal neutro. O nome do sal vem do ânion do ácido (sulfato) combinado ao cátion da base (sódio).",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O óxido de cálcio, também chamado de cal virgem, reage vigorosamente com a água formando hidróxido de cálcio, a cal hidratada usada na construção civil. Essa reação é um exemplo de:",
    opcoes: [
      "óxido ácido reagindo com água para formar um ácido",
      "óxido básico reagindo com água para formar uma base",
      "sal reagindo com água para formar um óxido",
      "base reagindo com óxido para formar um sal",
      "ácido reagindo com base para formar um óxido",
    ],
    correta: 1,
    explicacao:
      "Óxidos de metais alcalinos e alcalinoterrosos costumam reagir com água formando hidróxidos correspondentes: CaO + H₂O → Ca(OH)₂. O calor liberado nessa reação é tão intenso que a cal virgem pode chegar a incendiar materiais próximos se molhada em excesso.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O ácido fosfórico, H₃PO₄, presente em refrigerantes tipo cola, é classificado quanto ao número de hidrogênios ionizáveis. Considerando sua fórmula, esse ácido é:",
    opcoes: [
      "monoprótico, pois libera apenas um íon H⁺",
      "triprótico, pois libera até três íons H⁺ por molécula",
      "diprótico, pois libera dois íons H⁺",
      "aprótico, pois não libera nenhum íon H⁺",
      "tetraprótico, pois libera quatro íons H⁺",
    ],
    correta: 1,
    explicacao:
      "O número de hidrogênios ionizáveis na fórmula do ácido define sua classificação: com três hidrogênios ligados a oxigênio, o H₃PO₄ é triprótico. Note que nem todo hidrogênio da molécula é ionizável — apenas os ligados a átomos de oxigênio contam nessa classificação.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O óxido de alumínio, Al₂O₃, é capaz de reagir tanto com ácidos quanto com bases, produzindo sal e água em ambos os casos. Óxidos com esse comportamento duplo são classificados como:",
    opcoes: [
      "ácidos",
      "anfóteros",
      "básicos",
      "neutros",
      "peróxidos",
    ],
    correta: 1,
    explicacao:
      "O caráter anfótero é típico de óxidos de metais de transição e de metais na fronteira entre metálico e ametálico, como o alumínio e o zinco, que reagem tanto como ácido quanto como base conforme a substância com que entram em contato. Óxidos neutros, como o CO e o NO, não reagem nem com ácidos nem com bases.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O bicarbonato de sódio, NaHCO₃, muito usado como fermento e antiácido caseiro, é um sal que contém hidrogênio ionizável em sua fórmula. Esse tipo de sal é classificado como:",
    opcoes: [
      "sal básico, também chamado de hidroxissal",
      "sal ácido, também chamado de hidrogenossal",
      "sal duplo, formado por dois cátions diferentes",
      "sal neutro, sem hidrogênio ionizável",
      "óxido misto, formado por dois ânions",
    ],
    correta: 1,
    explicacao:
      "Um sal ácido, ou hidrogenossal, mantém pelo menos um hidrogênio ionizável do ácido original que não foi totalmente neutralizado — no bicarbonato, resta um H do ácido carbônico H₂CO₃. Sais básicos, por sua vez, retêm um grupo OH⁻ não neutralizado da base de origem.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Ao dissolver o hidróxido de amônio (NH₄OH) em água, obtém-se uma base que se ioniza apenas parcialmente, diferentemente do NaOH, que se dissocia quase totalmente. Essa diferença de comportamento classifica o NH₄OH como uma base:",
    opcoes: [
      "forte",
      "fraca",
      "neutra",
      "insolúvel",
      "anfótera",
    ],
    correta: 1,
    explicacao:
      "A força de uma base depende do grau de ionização em água: bases de metais alcalinos e alcalinoterrosos costumam ser fortes, enquanto o hidróxido de amônio, formado a partir de um gás molecular dissolvido em água, ioniza-se pouco e é considerada base fraca.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O ácido nítrico, HNO₃, e o ácido nitroso, HNO₂, diferem na quantidade de átomos de oxigênio presentes na molécula. Segundo a nomenclatura usual para oxiácidos, o ácido com menor número de oxigênios recebe o sufixo:",
    opcoes: [
      "-ico",
      "-oso",
      "-idrico",
      "per-...-ico",
      "hipo-...-oso",
    ],
    correta: 1,
    explicacao:
      "Entre dois oxiácidos do mesmo elemento, o de maior número de oxigênios recebe o sufixo -ico e o de menor recebe -oso — por isso HNO₃ é o ácido nítrico e HNO₂ é o nitroso. O sufixo -ídrico é reservado a ácidos sem oxigênio, como o ácido clorídrico.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O ácido clorídrico, HCl, dissolvido em água não contém átomos de oxigênio em sua fórmula. Ácidos com essa característica são chamados de hidrácidos, e sua nomenclatura segue o padrão:",
    opcoes: [
      "ácido + nome do elemento + sufixo -ico",
      "ácido + nome do elemento + sufixo -ídrico",
      "ácido + nome do elemento + sufixo -oso",
      "ácido per + nome do elemento + sufixo -ico",
      "ácido hipo + nome do elemento + sufixo -oso",
    ],
    correta: 1,
    explicacao:
      "Hidrácidos, sem oxigênio na fórmula, usam o sufixo -ídrico: ácido clorídrico, ácido fluorídrico, ácido sulfídrico. Os sufixos -ico e -oso são reservados aos oxiácidos, que contêm oxigênio ligado ao elemento central.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Um béquer contém 100 mL de uma solução de ácido clorídrico. Ao se adicionar hidróxido de sódio em quantidade exatamente suficiente para reagir com todo o ácido presente, forma-se uma solução de cloreto de sódio. Esse ponto da reação, em que ácido e base foram consumidos em proporção estequiométrica exata, é chamado de:",
    opcoes: [
      "ponto de ebulição da solução",
      "ponto de equivalência ou de neutralização completa",
      "ponto de fusão do sal formado",
      "ponto isoelétrico do sistema",
      "ponto crítico da reação",
    ],
    correta: 1,
    explicacao:
      "No ponto de equivalência, a quantidade de H⁺ fornecida pelo ácido iguala exatamente a quantidade de OH⁻ fornecida pela base, e toda a espécie limitante é consumida. É esse ponto que se busca detectar nas titulações ácido-base feitas em laboratório com o auxílio de indicadores.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O óxido de enxofre SO₃, ao reagir com água, forma o ácido sulfúrico, H₂SO₄, um dos principais responsáveis pela chuva ácida quando esse óxido é lançado na atmosfera por queima de combustíveis fósseis. Esse comportamento classifica o SO₃ como um óxido:",
    opcoes: [
      "básico, típico de metais",
      "ácido, típico de ametais",
      "neutro, sem reatividade com água",
      "anfótero, reagindo tanto com ácido quanto com base",
      "duplo, formado por dois elementos metálicos",
    ],
    correta: 1,
    explicacao:
      "Óxidos formados por ametais, como enxofre e nitrogênio, costumam reagir com água produzindo ácidos, o que caracteriza os óxidos ácidos e explica boa parte do problema da chuva ácida associado a termelétricas e veículos a combustão. Óxidos básicos formam bases ao reagir com água, comportamento típico de metais alcalinos e alcalinoterrosos.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O hidróxido de sódio, NaOH, é uma base classificada como monobase por apresentar apenas uma hidroxila ionizável em sua fórmula. Já o hidróxido de cálcio, Ca(OH)₂, é classificado como:",
    opcoes: [
      "monobase, igual ao NaOH",
      "tribase, por apresentar três hidroxilas",
      "dibase, por apresentar duas hidroxilas ionizáveis",
      "ácido, por conter hidrogênio na fórmula",
      "sal, por conter cálcio na composição",
    ],
    correta: 2,
    explicacao:
      "A classificação das bases segue o número de hidroxilas presentes na fórmula: com duas OH⁻, o Ca(OH)₂ é uma dibase. Esse critério é análogo ao usado para ácidos, que se classificam em mono, di ou tripróticos conforme o número de hidrogênios ionizáveis.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante mistura, em quantidades estequiométricas, ácido sulfúrico (H₂SO₄) e hidróxido de potássio (KOH). O sal formado nessa reação de neutralização é o:",
    opcoes: [
      "cloreto de potássio, KCl",
      "sulfeto de potássio, K₂S",
      "sulfato de potássio, K₂SO₄",
      "fosfato de potássio, K₃PO₄",
      "carbonato de potássio, K₂CO₃",
    ],
    correta: 2,
    explicacao:
      "O nome do sal combina o ânion do ácido, sulfato, com o cátion da base, potássio, formando K₂SO₄; são necessários dois potássios para neutralizar as duas cargas negativas do sulfato. A equação balanceada é H₂SO₄ + 2 KOH → K₂SO₄ + 2 H₂O.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Os óxidos neutros, como o monóxido de carbono (CO) e o óxido nitroso (N₂O), apresentam um comportamento químico que os distingue dos óxidos ácidos e básicos. Esses óxidos, ao entrarem em contato com água, ácidos ou bases:",
    opcoes: [
      "reagem sempre formando um novo óxido",
      "reagem exclusivamente com bases, nunca com ácidos",
      "não reagem, mantendo-se praticamente inertes nessas condições",
      "reagem exclusivamente com ácidos, nunca com bases",
      "formam sempre um sal duplo",
    ],
    correta: 2,
    explicacao:
      "A ausência de reatividade com água, ácidos e bases é justamente o que define um óxido como neutro ou indiferente. São poucos os óxidos que se enquadram nessa categoria, sendo o CO e o N₂O e o NO os exemplos mais citados.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Um antiácido estomacal contém hidróxido de alumínio, Al(OH)₃, que neutraliza o excesso de ácido clorídrico presente no suco gástrico. A equação balanceada dessa reação de neutralização, com os sais e a água formados, é:",
    opcoes: [
      "Al(OH)₃ + HCl → AlCl₃ + H₂O",
      "Al(OH)₃ + 3 HCl → AlCl + 3 H₂O",
      "Al(OH)₃ + 3 HCl → AlCl₃ + 3 H₂O",
      "2 Al(OH)₃ + 3 HCl → Al₂Cl₃ + 3 H₂O",
      "Al(OH)₃ + 3 HCl → Al₃Cl + 3 H₂O",
    ],
    correta: 2,
    explicacao:
      "As três hidroxilas do hidróxido de alumínio exigem três moléculas de ácido clorídrico para serem neutralizadas, formando o sal AlCl₃ e três moléculas de água. Conferir se os índices de carga do cátion (3+) e do ânion (1−) fecham corretamente a fórmula do sal é o passo que evita erros como AlCl ou Al₃Cl.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O óxido de sódio, Na₂O, ao ser adicionado à água, reage formando hidróxido de sódio segundo a equação Na₂O + H₂O → 2 NaOH. Esse comportamento caracteriza o Na₂O como um óxido:",
    opcoes: [
      "ácido, típico de ametal",
      "neutro, sem reação com água",
      "básico, típico de metal alcalino",
      "anfótero, reagindo com ácido e base",
      "misto, formado por dois óxidos diferentes",
    ],
    correta: 2,
    explicacao:
      "Óxidos de metais muito eletropositivos, como os alcalinos, reagem com água formando bases fortes, o que os classifica como óxidos básicos. O comportamento oposto, formar ácido ao reagir com água, é típico de óxidos de ametais, como o SO₃ e o CO₂.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Analisando a fórmula do ácido acético, CH₃COOH, presente no vinagre, percebe-se que a molécula tem quatro átomos de hidrogênio, mas apenas um deles é ionizável em água. A classificação correta desse ácido quanto à ionização é:",
    opcoes: [
      "tetraprótico, pois todos os quatro hidrogênios se ionizam",
      "diprótico, pois dois hidrogênios se ionizam",
      "monoprótico, pois só o hidrogênio ligado ao oxigênio se ioniza",
      "aprótico, pois nenhum hidrogênio se ioniza",
      "triprótico, pois três hidrogênios se ionizam",
    ],
    correta: 2,
    explicacao:
      "Apenas hidrogênios ligados diretamente a átomos de oxigênio se comportam como ionizáveis em ácidos orgânicos; os três hidrogênios ligados ao carbono do grupo metila permanecem presos à ligação covalente C–H. Por isso o ácido acético, apesar da fórmula com quatro hidrogênios, é classificado como monoprótico.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa apresenta concentração de íons H⁺ igual a 1 × 10⁻³ mol/L. O valor de pH dessa solução e seu caráter ácido-base são, respectivamente:",
    opcoes: [
      "pH = 3, solução básica",
      "pH = 11, solução ácida",
      "pH = 3, solução ácida",
      "pH = 11, solução básica",
      "pH = 7, solução neutra",
    ],
    correta: 2,
    explicacao:
      "O pH é definido como o logaritmo negativo da concentração de H⁺: pH = −log(10⁻³) = 3. Como valores de pH abaixo de 7 indicam acidez, a solução é ácida — quanto menor o pH, maior a concentração de H⁺ e mais forte a acidez.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um técnico de laboratório precisa neutralizar completamente 200 mL de uma solução de ácido clorídrico 0,5 mol/L usando uma solução de hidróxido de sódio 1 mol/L. O volume de base necessário para essa neutralização é de:",
    opcoes: [
      "200 mL",
      "50 mL",
      "100 mL",
      "400 mL",
      "10 mL",
    ],
    correta: 2,
    explicacao:
      "Como HCl e NaOH reagem na proporção 1:1, o número de mols de ácido, 0,2 L × 0,5 mol/L = 0,1 mol, deve ser igualado pelo número de mols de base; dividindo por 1 mol/L obtém-se 0,1 L, ou seja, 100 mL. Confundir a proporção estequiométrica é o que levaria a dobrar ou reduzir pela metade esse volume.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Para neutralizar completamente 0,2 mol de ácido fosfórico, H₃PO₄, com hidróxido de sódio, NaOH, a quantidade de matéria de base necessária é de:",
    opcoes: [
      "0,2 mol",
      "0,4 mol",
      "0,6 mol",
      "0,1 mol",
      "1,0 mol",
    ],
    correta: 2,
    explicacao:
      "Cada mol de H₃PO₄ libera três mols de H⁺, e cada mol de NaOH libera apenas um mol de OH⁻, então são necessários três mols de base para cada mol de ácido: 0,2 × 3 = 0,6 mol. Ignorar o número de hidrogênios ionizáveis do ácido triprótico é o erro que leva à resposta 0,2 mol.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um óxido de fórmula geral M₂O₃, em que M é um metal de número de oxidação +3, reage com ácido clorídrico formando um sal e água, segundo a equação M₂O₃ + 6 HCl → 2 MCl₃ + 3 H₂O. Esse comportamento é típico de óxidos:",
    opcoes: [
      "ácidos, que reagem com base formando sal e água",
      "neutros, que não reagem com ácidos",
      "básicos, que reagem com ácido formando sal e água",
      "peróxidos, que liberam gás oxigênio",
      "anfóteros exclusivamente, nunca básicos",
    ],
    correta: 2,
    explicacao:
      "Óxidos de metais reagem tipicamente com ácidos formando sal e água, comportamento que os caracteriza como óxidos básicos — mesmo alguns anfóteros, como o Al₂O₃, também reagem dessa forma com ácidos, mas a reação descrita por si só já identifica o caráter básico do óxido frente ao ácido.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um laboratorista mistura 50 mL de ácido sulfúrico 0,4 mol/L com 100 mL de hidróxido de sódio 0,4 mol/L. Ao final da reação, a solução resultante apresentará caráter:",
    opcoes: [
      "ácido, pois sobra ácido sulfúrico não reagido",
      "básico, pois sobra hidróxido de sódio não reagido",
      "indeterminado, sem informações suficientes",
      "neutro, pois o número de mols de H⁺ e de OH⁻ é exatamente igual",
      "fortemente ácido, pois o ácido é diprótico",
    ],
    correta: 3,
    explicacao:
      "O ácido fornece 0,05 L × 0,4 mol/L × 2 = 0,04 mol de H⁺, e a base fornece 0,1 L × 0,4 mol/L = 0,04 mol de OH⁻: as quantidades se igualam exatamente, resultando em neutralização completa. Esquecer de multiplicar por 2 os H⁺ do ácido diprótico é o que levaria a concluir, erradamente, que sobra base.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "O óxido de zinco, ZnO, reage tanto com ácido clorídrico, formando cloreto de zinco e água, quanto com hidróxido de sódio, formando zincato de sódio e água. Esse duplo comportamento classifica o óxido de zinco como:",
    opcoes: [
      "ácido puro",
      "básico puro",
      "neutro",
      "anfótero",
      "peróxido",
    ],
    correta: 3,
    explicacao:
      "A capacidade de reagir tanto com ácidos quanto com bases, produzindo sal e água em ambos os casos, é a marca registrada dos óxidos anfóteros — comportamento também observado no óxido de alumínio. Um óxido puramente básico reagiria apenas com ácidos, e um puramente ácido, apenas com bases.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante dispõe de quatro soluções de mesma concentração molar: ácido clorídrico (HCl), ácido acético (CH₃COOH), hidróxido de sódio (NaOH) e hidróxido de amônio (NH₄OH). Ordenando essas soluções pela condutividade elétrica esperada, da maior para a menor, tem-se:",
    opcoes: [
      "CH₃COOH e NH₄OH à frente de HCl e NaOH",
      "todas com a mesma condutividade, pois têm a mesma concentração",
      "apenas o HCl conduz corrente elétrica",
      "HCl e NaOH (eletrólitos fortes) à frente de CH₃COOH e NH₄OH (eletrólitos fracos)",
      "apenas as bases conduzem corrente elétrica",
    ],
    correta: 3,
    explicacao:
      "A condutividade de uma solução eletrolítica depende da quantidade de íons livres, e não apenas da concentração molar da substância dissolvida: ácidos e bases fortes se ionizam quase totalmente, liberando muito mais íons que os fracos, que se ionizam em pequena extensão. Por isso, mesmo em igual concentração, HCl e NaOH conduzem eletricidade com muito mais eficiência.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um sal duplo é formado quando dois cátions diferentes ou dois ânions diferentes se combinam em uma mesma fórmula, como no caso do sulfato duplo de alumínio e potássio, KAl(SO₄)₂. Esse tipo de sal se distingue de um sal misto porque:",
    opcoes: [
      "é formado exclusivamente por dois ânions diferentes",
      "não contém nenhum tipo de cátion metálico",
      "é sempre insolúvel em água",
      "possui dois cátions diferentes associados a um único tipo de ânion",
      "resulta da reação entre dois ácidos diferentes",
    ],
    correta: 3,
    explicacao:
      "No sulfato duplo de alumínio e potássio há dois cátions distintos (Al³⁺ e K⁺) compartilhando o mesmo ânion sulfato; um sal misto seria o caso oposto, um único cátion associado a dois ânions diferentes. Esses sais compostos aparecem em produtos como o alúmen, usado no tratamento de água.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um técnico prepara uma solução misturando volumes iguais de ácido nítrico 0,2 mol/L e hidróxido de cálcio 0,2 mol/L. Sabendo que o hidróxido de cálcio é uma dibase, o resultado dessa mistura, quanto ao caráter final, será:",
    opcoes: [
      "ácido, pois sobra ácido nítrico em excesso",
      "neutro, pois as concentrações molares são iguais",
      "indeterminado, sem informações suficientes",
      "básico, pois sobra hidróxido de cálcio em excesso após a reação",
      "fortemente ácido, pois o ácido nítrico é forte",
    ],
    correta: 3,
    explicacao:
      "Para volumes e concentrações iguais, o número de mols de HNO₃ e de Ca(OH)₂ é o mesmo, mas cada mol de Ca(OH)₂ fornece o dobro de OH⁻ em comparação a cada mol de HNO₃, que fornece apenas um H⁺; por isso sobra base não neutralizada e a solução final fica básica. Confiar apenas na igualdade das concentrações molares, sem considerar a basicidade da base, é o que leva ao erro de prever neutralidade.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "O ácido sulfídrico, H₂S, e o ácido sulfúrico, H₂SO₄, apesar de ambos conterem enxofre e hidrogênio, pertencem a categorias diferentes de ácidos quanto à presença de oxigênio. Essas categorias e a nomenclatura correspondente são:",
    opcoes: [
      "H₂S é oxiácido e H₂SO₄ é hidrácido",
      "ambos são hidrácidos, pois contêm hidrogênio",
      "ambos são oxiácidos, pois contêm enxofre",
      "H₂S é hidrácido (sufixo -ídrico) e H₂SO₄ é oxiácido (sufixo -ico)",
      "H₂S é um sal e H₂SO₄ é um óxido",
    ],
    correta: 3,
    explicacao:
      "O H₂S não tem oxigênio na fórmula e por isso é um hidrácido, nomeado ácido sulfídrico; o H₂SO₄ contém oxigênio e é um oxiácido, nomeado ácido sulfúrico pelo sufixo -ico, por ter o maior número de oxigênios entre os oxiácidos de enxofre mais comuns. A presença ou ausência de oxigênio na fórmula, e não o elemento central em si, é o critério que separa as duas categorias.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um estudo de solubilidade de sais indica que a maioria dos nitratos, cloretos e sulfatos é solúvel em água, com exceções pontuais, enquanto carbonatos, fosfatos e sulfetos costumam ser insolúveis, exceto os de metais alcalinos e amônio. Com base nessas regras gerais, é esperado que o carbonato de cálcio, CaCO₃, principal componente do calcário e das conchas marinhas, seja:",
    opcoes: [
      "totalmente solúvel em água, como o cloreto de sódio",
      "solúvel apenas em água quente, mas insolúvel a frio",
      "um composto covalente, e não iônico",
      "praticamente insolúvel em água, o que explica sua presença em rochas e conchas",
      "um ácido forte, por conter carbono na fórmula",
    ],
    correta: 3,
    explicacao:
      "O cálcio não é metal alcalino nem amônio, então, seguindo a regra geral, o carbonato de cálcio é pouco solúvel — e é exatamente essa baixa solubilidade que permite a ele se depositar como rocha sedimentar e formar as estruturas rígidas de conchas e corais ao longo de milhões de anos.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Ao classificar as funções inorgânicas segundo a teoria de Arrhenius, um estudante observa que a amônia, NH₃, é um gás molecular sem hidroxila na fórmula, mas se comporta como base ao ser dissolvida em água. Isso ocorre porque, em solução aquosa, a amônia:",
    opcoes: [
      "já contém OH⁻ em sua estrutura molecular original",
      "se transforma em ácido nítrico espontaneamente",
      "libera H⁺ diretamente para a solução",
      "reage parcialmente com a água formando NH₄OH, que libera OH⁻",
      "não apresenta nenhum comportamento básico em água",
    ],
    correta: 3,
    explicacao:
      "A molécula de NH₃ reage com a água formando o hidróxido de amônio, que então libera uma pequena fração de íons OH⁻ em solução — por isso a amônia se comporta como base fraca mesmo sem ter hidroxila na fórmula original. É esse comportamento que explica o cheiro forte e o pH básico de soluções de amônia usadas em produtos de limpeza.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O gesso, usado em imobilizações ortopédicas e em construção civil, é composto por sulfato de cálcio, CaSO₄. Ao nomear esse sal a partir do ácido sulfúrico e do hidróxido de cálcio que o originam, aplica-se a regra segundo a qual o nome do sal é formado por:",
    opcoes: [
      "nome do cátion da base seguido do nome do ânion do ácido",
      "apenas o nome do metal presente no composto",
      "nome do ácido inalterado, sem modificações",
      "nome do ânion do ácido seguido do nome do cátion da base",
      "combinação aleatória dos nomes dos reagentes",
    ],
    correta: 3,
    explicacao:
      "A nomenclatura de sais segue o padrão '[ânion do ácido] de [cátion da base]': sulfato (do ácido sulfúrico) de cálcio (do hidróxido de cálcio). Esse mesmo padrão se aplica a qualquer sal formado por neutralização, como o cloreto de sódio e o nitrato de potássio.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "A soda cáustica, usada na fabricação de sabão e na desobstrução de encanamentos, é o nome comercial do hidróxido de sódio, NaOH. Por se tratar de uma base forte e corrosiva, seu manuseio doméstico requer cuidado, pois ela pode causar:",
    opcoes: [
      "explosões, por ser um material altamente inflamável",
      "envenenamento apenas por inalação, sem risco ao toque",
      "nenhum risco, por ser uma substância neutra",
      "queimaduras na pele por seu caráter fortemente básico",
      "apenas manchas de cor, sem dano à pele",
    ],
    correta: 3,
    explicacao:
      "Bases fortes reagem com as proteínas e gorduras da pele, causando queimaduras químicas sérias mesmo em contato breve — por isso produtos com soda cáustica trazem avisos de manuseio com luvas. A soda cáustica não é inflamável nem neutra: sua periculosidade vem justamente do caráter básico intenso.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O ácido bórico, H₃BO₃, é usado como antisséptico leve e em soluções para lentes de contato. Comparado ao ácido clorídrico, de mesma concentração molar, o ácido bórico apresenta pH mais próximo da neutralidade em solução aquosa. Essa diferença se explica porque o ácido bórico é:",
    opcoes: [
      "uma base, e não um ácido",
      "um sal neutro sem caráter ácido",
      "mais concentrado que o ácido clorídrico",
      "insolúvel em água, não formando solução",
      "um ácido fraco, que se ioniza pouco em água",
    ],
    correta: 4,
    explicacao:
      "Ácidos fracos liberam poucos íons H⁺ em relação à quantidade de substância dissolvida, o que resulta em pH mais próximo de 7 mesmo em concentrações comparáveis às de ácidos fortes. O ácido clorídrico, por ser forte, ioniza-se quase totalmente e gera uma solução bem mais ácida na mesma concentração.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O óxido de ferro III, Fe₂O₃, reage com ácido clorídrico formando cloreto de ferro III e água. A equação balanceada dessa reação é:",
    opcoes: [
      "Fe₂O₃ + 3 HCl → 2 FeCl₃ + 3 H₂O",
      "Fe₂O₃ + 6 HCl → FeCl₃ + 3 H₂O",
      "FeO₃ + 6 HCl → 2 FeCl₃ + 3 H₂O",
      "Fe₂O₃ + 2 HCl → 2 FeCl + H₂O",
      "Fe₂O₃ + 6 HCl → 2 FeCl₃ + 3 H₂O",
    ],
    correta: 4,
    explicacao:
      "Balanceando átomo por átomo: dois ferros exigem dois FeCl₃, que juntos somam seis cloros, exigindo seis HCl; os três oxigênios do óxido formam três moléculas de água. Conferir o balanceamento contando os átomos dos dois lados é o único jeito seguro de descartar as opções mal ajustadas.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Comparando o ácido perclórico (HClO₄) e o ácido hipocloroso (HClO), ambos oxiácidos do cloro, mas com diferentes quantidades de oxigênio, a nomenclatura correta reflete essa diferença por meio dos prefixos:",
    opcoes: [
      "hipo-...-ico para o de mais oxigênio e per-...-oso para o de menos",
      "per-...-oso para ambos, variando apenas o sufixo",
      "os prefixos não se relacionam com a quantidade de oxigênio",
      "hipo-...-ico e per-...-oso são sinônimos",
      "per-...-ico para o de mais oxigênio e hipo-...-oso para o de menos",
    ],
    correta: 4,
    explicacao:
      "Quando um elemento forma mais de dois oxiácidos, usam-se os prefixos extremos per- (para o de mais oxigênio, acima do -ico) e hipo- (para o de menos oxigênio, abaixo do -oso), completando a série ácido hipocloroso, cloroso, clórico e perclórico, em ordem crescente de oxigênio.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "A água de cal, obtida pela dissolução de hidróxido de cálcio em água, é usada para identificar a presença de gás carbônico em um ambiente, pois fica turva ao reagir com o CO₂. Essa turvação ocorre pela formação de:",
    opcoes: [
      "ácido carbônico, que é totalmente solúvel e transparente",
      "óxido de cálcio, que se deposita no fundo do recipiente",
      "gás oxigênio, liberado durante a reação",
      "hidróxido de carbono, um composto instável",
      "carbonato de cálcio, um sal pouco solúvel que precipita na solução",
    ],
    correta: 4,
    explicacao:
      "O CO₂ reage com o Ca(OH)₂ formando CaCO₃, sal pouco solúvel em água que se precipita como um sólido esbranquiçado, turvando a solução — esse é o teste clássico de laboratório para identificar a presença de gás carbônico em um gás desconhecido. É o mesmo princípio químico por trás da formação de estalactites em cavernas calcárias.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Um óxido de nitrogênio de fórmula N₂O₅ reage com água formando um ácido de fórmula HNO₃. Esse comportamento, típico de óxidos ácidos formados por ametais em estados de oxidação elevados, resulta na seguinte equação balanceada:",
    opcoes: [
      "N₂O₅ + H₂O → HNO₃",
      "N₂O₅ + 2 H₂O → 2 HNO₃",
      "N₂O₅ + H₂O → HNO₅",
      "2 N₂O₅ + H₂O → 2 HNO₃",
      "N₂O₅ + H₂O → 2 HNO₃",
    ],
    correta: 4,
    explicacao:
      "Balanceando os átomos: dois nitrogênios do óxido exigem dois HNO₃; conferindo os oxigênios, o lado esquerdo tem 5 + 1 = 6 e o direito tem 2 × 3 = 6, fechando corretamente. É essa contagem de átomos, elemento por elemento, que confirma se a equação está de fato balanceada.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "facil",
    enunciado:
      "Um estudante prova, em laboratório e sob orientação, uma pequena quantidade de solução diluída de bicarbonato de sódio e percebe sabor adstringente, além de sensação escorregadia entre os dedos ao tocar a solução. Essas características sensoriais são típicas das:",
    opcoes: [
      "ácidos",
      "sais neutros insolúveis",
      "óxidos ácidos",
      "hidrácidos fortes",
      "bases",
    ],
    correta: 4,
    explicacao:
      "Sabor adstringente e sensação escorregadia ao toque são propriedades sensoriais clássicas das bases, como as encontradas em sabões e no próprio bicarbonato de sódio em solução. O sabor azedo, por contraste, é a marca sensorial dos ácidos.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um professor de química apresenta a seguinte generalização aos alunos: 'todo óxido metálico é básico, e todo óxido de ametal é ácido'. Sobre essa afirmação, é correto dizer que ela é:",
    opcoes: [
      "totalmente correta, sem exceções na tabela periódica",
      "incorreta, pois nenhum óxido metálico é básico",
      "incorreta, pois todos os óxidos são neutros",
      "correta apenas para óxidos de metais alcalinos",
      "uma simplificação que falha em casos como o Al₂O₃ e o ZnO, que são anfóteros",
    ],
    correta: 4,
    explicacao:
      "Embora a regra geral funcione para a maioria dos metais alcalinos e alcalinoterrosos e para a maioria dos ametais, ela ignora a existência de óxidos anfóteros, formados por metais na fronteira entre metálico e ametálico, como alumínio, zinco e chumbo, que reagem tanto com ácidos quanto com bases.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um recipiente contém 25 mL de uma solução de hidróxido de potássio de concentração desconhecida. Para neutralizá-la completamente, foram gastos 40 mL de uma solução de ácido clorídrico 0,25 mol/L. A concentração molar da solução de hidróxido de potássio era de:",
    opcoes: [
      "0,25 mol/L",
      "0,1 mol/L",
      "0,64 mol/L",
      "1,0 mol/L",
      "0,4 mol/L",
    ],
    correta: 4,
    explicacao:
      "O número de mols de ácido usado é 0,040 L × 0,25 mol/L = 0,01 mol, igual ao número de mols de base consumidos na proporção 1:1; dividindo por 0,025 L obtém-se 0,4 mol/L. Trocar qual volume divide qual concentração é o deslize mais comum nesse tipo de cálculo de titulação.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "O suco gástrico humano é naturalmente ácido, com pH em torno de 1,5 a 3,5, devido à presença de ácido clorídrico secretado pelo estômago. Essa acidez elevada tem a função biológica de:",
    opcoes: [
      "neutralizar completamente todos os alimentos ingeridos",
      "elevar o pH do sangue para valores ácidos",
      "impedir a absorção de qualquer nutriente no estômago",
      "transformar carboidratos diretamente em glicose",
      "auxiliar na digestão de proteínas e eliminar micro-organismos ingeridos",
    ],
    correta: 4,
    explicacao:
      "O meio ácido ativa enzimas digestivas como a pepsina, que quebram proteínas, e ainda funciona como barreira contra boa parte dos micro-organismos presentes nos alimentos. O sangue, por sua vez, é mantido em pH levemente básico e estreitamente controlado, independentemente da acidez estomacal.",
  },
  {
    materia: "quimica",
    tema: "Funções inorgânicas",
    dificuldade: "media",
    enunciado:
      "Um aluno testa a condutividade elétrica de quatro amostras sólidas: cloreto de sódio, açúcar, hidróxido de sódio e naftalina. Apenas a primeira e a terceira, quando dissolvidas em água, tornam a solução condutora de eletricidade. Isso ocorre porque tanto o cloreto de sódio quanto o hidróxido de sódio:",
    opcoes: [
      "são compostos moleculares apolares",
      "não se dissolvem em água de forma alguma",
      "reagem quimicamente entre si ao serem dissolvidos",
      "possuem ligações exclusivamente covalentes",
      "são compostos iônicos que se dissociam liberando íons livres em água",
    ],
    correta: 4,
    explicacao:
      "Sais e bases costumam ser compostos iônicos, que ao se dissolverem em água liberam cátions e ânions livres para se mover e conduzir corrente elétrica. O açúcar, mencionado como não condutor no experimento, é molecular e se dissolve sem gerar íons.",
  },
];
