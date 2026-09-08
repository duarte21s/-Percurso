/* Química orgânica: funções e nomenclatura (50 questões).
   Cadeias carbônicas, hidrocarbonetos, funções orgânicas (álcool,
   aldeído, cetona, ácido carboxílico, éster, amina, amida), nomenclatura
   IUPAC e grupos funcionais no cotidiano.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "A química orgânica é o ramo da química dedicado ao estudo dos compostos que contêm, obrigatoriamente, o elemento:",
    opcoes: [
      "carbono",
      "oxigênio",
      "nitrogênio",
      "hidrogênio",
      "enxofre",
    ],
    correta: 0,
    explicacao:
      "Todo composto orgânico contém carbono como elemento central, geralmente ligado a hidrogênio e, em muitos casos, também a oxigênio, nitrogênio ou outros elementos. Alguns compostos simples de carbono, como o CO₂ e os carbonatos, são tradicionalmente classificados como inorgânicos por exceção histórica.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "Os hidrocarbonetos são compostos orgânicos formados exclusivamente por átomos de:",
    opcoes: [
      "carbono e hidrogênio",
      "carbono e oxigênio",
      "carbono e nitrogênio",
      "carbono e enxofre",
      "hidrogênio e oxigênio, sem carbono",
    ],
    correta: 0,
    explicacao:
      "Como o próprio nome indica, os hidrocarbonetos combinam apenas carbono e hidrogênio em sua estrutura, sem qualquer outro elemento — o metano, o etano e o octano da gasolina são exemplos. A presença de oxigênio, nitrogênio ou outro heteroátomo já classifica o composto em uma função orgânica diferente.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "O grupo funcional álcool é caracterizado pela presença de uma hidroxila, −OH, ligada a um carbono saturado. O etanol, presente em bebidas alcoólicas e usado como combustível veicinal, pertence a essa função. Sua fórmula molecular é:",
    opcoes: [
      "C₂H₆O",
      "C₂H₄O",
      "CH₄O",
      "C₃H₈O",
      "C₂H₆O₂",
    ],
    correta: 0,
    explicacao:
      "O etanol tem dois carbonos, seis hidrogênios e um oxigênio, resultando em C₂H₆O — a fórmula estrutural é CH₃CH₂OH. É essa hidroxila ligada a um carbono saturado, e não a um anel aromático, que caracteriza a função álcool, diferenciando-a dos fenóis.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "O ácido acético, componente principal do vinagre, apresenta o grupo funcional carboxila, −COOH, característico da função:",
    opcoes: [
      "ácido carboxílico",
      "álcool",
      "aldeído",
      "cetona",
      "éster",
    ],
    correta: 0,
    explicacao:
      "A carboxila, que combina uma carbonila e uma hidroxila no mesmo carbono, é o grupo característico dos ácidos carboxílicos, responsável pelo sabor azedo típico dessa função, presente também no ácido cítrico das frutas. Aldeídos e cetonas têm apenas a carbonila, sem a hidroxila adicional que forma a carboxila.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "As cadeias carbônicas podem ser classificadas quanto à disposição dos átomos de carbono em abertas (acíclicas) ou fechadas (cíclicas). Um exemplo de composto de cadeia fechada é o:",
    opcoes: [
      "ciclohexano",
      "hexano",
      "propano",
      "etano",
      "butano",
    ],
    correta: 0,
    explicacao:
      "O ciclohexano tem seus seis átomos de carbono unidos em anel, formando uma cadeia fechada, enquanto hexano, propano, etano e butano são cadeias abertas, com os carbonos dispostos em sequência linear ou ramificada, sem formar um ciclo.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "Segundo a nomenclatura IUPAC, o prefixo usado para indicar uma cadeia carbônica de quatro átomos de carbono é:",
    opcoes: [
      "but",
      "prop",
      "pent",
      "et",
      "met",
    ],
    correta: 0,
    explicacao:
      "A sequência padrão de prefixos para o número de carbonos é met (1), et (2), prop (3), but (4), pent (5), hex (6), e assim por diante, sendo a base para nomear qualquer composto orgânico segundo as regras internacionais de nomenclatura.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "Segundo a nomenclatura IUPAC, o sufixo usado para indicar que um hidrocarboneto possui apenas ligações simples entre os carbonos, sendo saturado, é:",
    opcoes: [
      "-ano",
      "-eno",
      "-ino",
      "-ol",
      "-al",
    ],
    correta: 0,
    explicacao:
      "O sufixo -ano indica ligações exclusivamente simples entre os carbonos da cadeia, caracterizando um hidrocarboneto saturado, como o metano e o propano. O sufixo -eno indica presença de uma ligação dupla, e -ino, de uma ligação tripla.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "A acetona, muito usada como removedor de esmalte, é o composto orgânico mais simples da função cetona, caracterizada pela presença de uma carbonila ligada a dois carbonos dentro da cadeia. Sua fórmula estrutural condensada é:",
    opcoes: [
      "CH₃COCH₃",
      "CH₃COOH",
      "CH₃CH₂OH",
      "CH₃CHO",
      "CH₃COOCH₃",
    ],
    correta: 0,
    explicacao:
      "A acetona tem a carbonila (C=O) ligada a dois grupos metila, CH₃COCH₃, o que caracteriza a função cetona: a carbonila fica no interior da cadeia, ligada a dois carbonos. Nos aldeídos, ao contrário, a carbonila fica sempre na extremidade da cadeia, ligada a pelo menos um hidrogênio.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "O formol, solução aquosa usada como conservante de tecidos biológicos, contém o aldeído mais simples, caracterizado pela carbonila ligada a um hidrogênio na extremidade da cadeia. Esse composto é chamado de:",
    opcoes: [
      "metanal (formaldeído)",
      "etanal (acetaldeído)",
      "metanol",
      "ácido fórmico",
      "acetona",
    ],
    correta: 0,
    explicacao:
      "O metanal, também conhecido pelo nome usual formaldeído, é o aldeído mais simples, com apenas um carbono, cuja carbonila se liga a dois hidrogênios na extremidade da cadeia. O ácido fórmico, um ácido carboxílico e não um aldeído, é encontrado na picada de formigas e tem estrutura diferente.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "As aminas são compostos orgânicos derivados da amônia, NH₃, nos quais um ou mais átomos de hidrogênio são substituídos por grupos orgânicos. Um exemplo de amina presente no organismo humano, importante como neurotransmissor, é a:",
    opcoes: [
      "adrenalina",
      "glicose",
      "sacarose",
      "celulose",
      "água oxigenada",
    ],
    correta: 0,
    explicacao:
      "A adrenalina é uma amina biológica que atua como hormônio e neurotransmissor, participando da resposta do corpo a situações de estresse. Glicose, sacarose e celulose são carboidratos, sem o grupo amino característico das aminas, e a água oxigenada não é um composto orgânico.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um hidrocarboneto de cadeia aberta, saturada e não ramificada tem 6 átomos de carbono. Segundo a nomenclatura IUPAC, seu nome é:",
    opcoes: [
      "hexeno",
      "hexano",
      "hexino",
      "hexanol",
      "hexanal",
    ],
    correta: 1,
    explicacao:
      "Combinando o prefixo hex (6 carbonos) com o sufixo -ano (cadeia saturada, apenas ligações simples), obtém-se hexano, um hidrocarboneto presente em solventes e na composição da gasolina. Os demais sufixos indicariam outras funções ou insaturações que não estão presentes nesse composto.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um composto orgânico apresenta a fórmula estrutural CH₃CH₂CH₂OH, com a hidroxila ligada ao carbono na extremidade da cadeia de três carbonos. Segundo a nomenclatura IUPAC, esse composto é chamado de:",
    opcoes: [
      "propan-2-ol",
      "propan-1-ol",
      "propanal",
      "ácido propanoico",
      "propanona",
    ],
    correta: 1,
    explicacao:
      "A cadeia tem três carbonos (prop), é saturada com uma hidroxila (sufixo -ol), e como a hidroxila está no primeiro carbono da extremidade, o composto é o propan-1-ol. Se a hidroxila estivesse no carbono central, o composto seria o propan-2-ol, um isômero de posição diferente.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um hidrocarboneto apresenta uma ligação dupla entre o primeiro e o segundo carbono de uma cadeia de quatro carbonos, sem ramificações. Segundo a nomenclatura IUPAC, esse composto é chamado de:",
    opcoes: [
      "butano",
      "but-1-eno",
      "but-1-ino",
      "butan-1-ol",
      "but-2-eno",
    ],
    correta: 1,
    explicacao:
      "A cadeia tem quatro carbonos (but) e uma ligação dupla (sufixo -eno) localizada entre o primeiro e o segundo carbono, o que se indica pelo número 1: but-1-eno. Se a ligação dupla estivesse entre o segundo e o terceiro carbono, o nome seria but-2-eno, outro isômero de posição.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Comparando as funções orgânicas álcool e fenol, ambas caracterizadas pela presença de uma hidroxila, a diferença fundamental entre elas está no fato de que, no fenol, a hidroxila está ligada:",
    opcoes: [
      "a um carbono saturado de cadeia aberta",
      "diretamente a um carbono de anel aromático",
      "a um carbono que também tem uma carbonila",
      "a um átomo de nitrogênio",
      "a dois átomos de carbono simultaneamente",
    ],
    correta: 1,
    explicacao:
      "No fenol, a hidroxila se liga diretamente a um dos carbonos do anel benzênico, o que confere a essa função propriedades químicas bem diferentes das dos álcoois comuns, como maior acidez. Nos álcoois, a hidroxila está sempre ligada a um carbono saturado, fora de qualquer anel aromático.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Os ésteres são compostos orgânicos frequentemente responsáveis pelo aroma característico de frutas, como o acetato de isoamila, associado ao cheiro de banana. Essa função orgânica resulta tipicamente da reação entre:",
    opcoes: [
      "dois ácidos carboxílicos diferentes",
      "um ácido carboxílico e um álcool, com eliminação de água",
      "um aldeído e uma cetona",
      "uma amina e um ácido carboxílico",
      "dois álcoois diferentes",
    ],
    correta: 1,
    explicacao:
      "A esterificação é a reação entre um ácido carboxílico e um álcool, na qual se forma o éster e se libera uma molécula de água; é essa reação reversível que a indústria de aromatizantes explora para reproduzir o cheiro de diversas frutas em laboratório. O grupo funcional éster se distingue estruturalmente do ácido carboxílico por ter um grupo orgânico no lugar do hidrogênio da hidroxila da carboxila.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um composto orgânico apresenta a fórmula estrutural CH₃COOCH₃, resultante da reação entre ácido acético e metanol. A função orgânica desse composto e seu nome, segundo a nomenclatura usual, são, respectivamente:",
    opcoes: [
      "ácido carboxílico, chamado de ácido acético",
      "éster, chamado de acetato de metila",
      "álcool, chamado de metanol",
      "cetona, chamada de propanona",
      "aldeído, chamado de etanal",
    ],
    correta: 1,
    explicacao:
      "A estrutura −COO− entre dois grupos carbônicos caracteriza um éster, e seu nome combina o nome do ácido de origem (acetato, do ácido acético) com o nome do álcool de origem (metila, do metanol): acetato de metila. Esse padrão de nomenclatura, 'ácido + álcool', é seguido por praticamente todos os ésteres simples.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "As amidas são compostos orgânicos que apresentam o grupo carbonila ligado diretamente a um átomo de nitrogênio. A ureia, produzida no organismo humano como produto final do metabolismo de proteínas e eliminada na urina, é um exemplo dessa função, com fórmula estrutural:",
    opcoes: [
      "CH₃-CH₂-NH₂",
      "H₂N-CO-NH₂",
      "CH₃-COOH",
      "CH₃-CO-CH₃",
      "CH₃-CH₂-OH",
    ],
    correta: 1,
    explicacao:
      "A ureia tem uma carbonila central ligada a dois grupos amino, H₂N-CO-NH₂, caracterizando-a como uma diamida. As aminas, como o etilamina (CH₃-CH₂-NH₂), têm o nitrogênio ligado diretamente a carbonos saturados, sem a presença de uma carbonila adjacente.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um hidrocarboneto de cadeia aberta e saturada, com fórmula molecular C₅H₁₂, apresenta uma ramificação: um grupo metila ligado ao segundo carbono de uma cadeia principal de quatro carbonos. Segundo a nomenclatura IUPAC, esse composto é chamado de:",
    opcoes: [
      "pentano",
      "2-metilbutano",
      "3-metilbutano",
      "2-metilpropano",
      "1-metilbutano",
    ],
    correta: 1,
    explicacao:
      "A cadeia principal, com quatro carbonos, recebe o nome butano, e o grupo metila ligado ao segundo carbono é indicado como prefixo com sua posição: 2-metilbutano. A numeração da cadeia principal sempre começa pela extremidade mais próxima da ramificação, para atribuir o menor número possível à posição do substituinte.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "As cadeias carbônicas homogêneas são formadas exclusivamente por átomos de carbono ligados entre si, enquanto as cadeias heterogêneas apresentam um átomo diferente, chamado heteroátomo, interrompendo a sequência de carbonos. O éter dietílico, CH₃CH₂-O-CH₂CH₃, é um exemplo de cadeia:",
    opcoes: [
      "homogênea, pois só há átomos de carbono na cadeia",
      "heterogênea, pois o oxigênio interrompe a sequência de carbonos",
      "cíclica, pois forma um anel fechado",
      "aromática, pois contém um anel benzênico",
      "insaturada, pois contém uma ligação dupla",
    ],
    correta: 1,
    explicacao:
      "No éter dietílico, o átomo de oxigênio está posicionado entre dois carbonos, interrompendo a sequência carbono-carbono e caracterizando uma cadeia heterogênea. Se o oxigênio estivesse apenas como uma hidroxila lateral, sem interromper a cadeia principal, como nos álcoois, a cadeia seria classificada como homogênea.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "O ácido acetilsalicílico, princípio ativo da aspirina, apresenta em sua estrutura tanto um grupo éster quanto um grupo ácido carboxílico. Essa combinação de grupos funcionais em uma mesma molécula caracteriza esse composto como:",
    opcoes: [
      "monofuncional, por apresentar apenas uma função orgânica",
      "polifuncional, por apresentar mais de uma função orgânica na mesma estrutura",
      "um hidrocarboneto simples, sem função orgânica definida",
      "um composto puramente inorgânico",
      "uma amina simples, sem outras funções presentes",
    ],
    correta: 1,
    explicacao:
      "Compostos que reúnem dois ou mais grupos funcionais diferentes na mesma molécula, como o ácido acetilsalicílico com seu éster e seu ácido carboxílico, são chamados de polifuncionais — situação comum em fármacos e em moléculas biológicas complexas, como aminoácidos e açúcares. Compostos monofuncionais, ao contrário, apresentam um único grupo funcional em sua estrutura.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um hidrocarboneto de fórmula molecular C₅H₈ apresenta uma ligação tripla entre dois de seus carbonos, em uma cadeia aberta e não ramificada. Segundo a nomenclatura IUPAC, esse composto pertence à função:",
    opcoes: [
      "alceno, indicada pelo sufixo -eno",
      "alcano, indicado pelo sufixo -ano",
      "alcino, indicada pelo sufixo -ino",
      "álcool, indicado pelo sufixo -ol",
      "aldeído, indicado pelo sufixo -al",
    ],
    correta: 2,
    explicacao:
      "A presença de uma ligação tripla entre carbonos caracteriza a função alcino, indicada pelo sufixo -ino na nomenclatura IUPAC, como no pent-1-ino. Alcenos têm uma ligação dupla, e alcanos, apenas ligações simples — diferenças estruturais que afetam diretamente a fórmula molecular do composto.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um professor de química classifica os átomos de carbono de uma cadeia conforme o número de outros carbonos aos quais eles se ligam diretamente. Um carbono ligado a apenas um outro átomo de carbono é classificado como:",
    opcoes: [
      "secundário",
      "terciário",
      "primário",
      "quaternário",
      "aromático",
    ],
    correta: 2,
    explicacao:
      "O carbono primário se liga a apenas um outro carbono, geralmente estando na extremidade de uma cadeia; carbonos secundários se ligam a dois outros carbonos, terciários a três, e quaternários a quatro. Essa classificação é importante para prever a reatividade e a estabilidade de diferentes posições em uma molécula orgânica.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "O metanol, usado como solvente industrial e combustível, é tóxico ao organismo humano porque, ao ser metabolizado pelo fígado, se transforma em formaldeído e depois em ácido fórmico, substâncias que podem causar cegueira e acidose grave. Essa transformação metabólica do metanol envolve, sucessivamente, as funções:",
    opcoes: [
      "éster, cetona e amina",
      "hidrocarboneto, éter e amida",
      "álcool, aldeído e ácido carboxílico",
      "cetona, éster e álcool",
      "amina, amida e éter",
    ],
    correta: 2,
    explicacao:
      "O metanol (álcool) é oxidado a formaldeído (aldeído) e este, por sua vez, é oxidado a ácido fórmico (ácido carboxílico) — uma sequência de oxidações progressivas típica da bioquímica de álcoois primários no fígado. É justamente a toxicidade dos produtos intermediários dessa cadeia que torna a ingestão de metanol tão perigosa.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um composto de fórmula molecular C₃H₆O pode representar tanto um aldeído (propanal) quanto uma cetona (propanona/acetona), dependendo da posição da carbonila na cadeia. A diferença estrutural que distingue essas duas possibilidades é que, no aldeído, a carbonila está:",
    opcoes: [
      "no interior da cadeia, ligada a dois carbonos",
      "ligada a um átomo de nitrogênio",
      "na extremidade da cadeia, ligada a pelo menos um hidrogênio",
      "ligada a uma hidroxila no mesmo carbono",
      "ausente, substituída por uma ligação tripla",
    ],
    correta: 2,
    explicacao:
      "No aldeído, a carbonila fica sempre na extremidade da cadeia, ligada a um hidrogênio (e a um carbono, exceto no metanal); na cetona, a carbonila fica no interior da cadeia, ligada a dois grupos carbônicos, sem hidrogênio diretamente ligado a ela. Essa diferença de posição, apesar de a fórmula molecular poder ser idêntica, resulta em propriedades químicas distintas entre as duas funções.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um composto orgânico tem a seguinte estrutura: CH₃-CH(CH₃)-CH₂-CH₃, uma cadeia de quatro carbonos na cadeia principal com um grupo metila ligado ao segundo carbono. O nome correto desse composto, segundo a nomenclatura IUPAC, e sua classificação quanto à cadeia carbônica são, respectivamente:",
    opcoes: [
      "pentano, cadeia normal e saturada",
      "2-metilbutano, cadeia normal e insaturada",
      "2-metilbutano, cadeia ramificada e saturada",
      "metilbutano, cadeia cíclica",
      "3-metilbutano, cadeia ramificada e insaturada",
    ],
    correta: 2,
    explicacao:
      "A cadeia principal com quatro carbonos é o butano, e o grupo metila ligado ao segundo carbono torna a cadeia ramificada; como todas as ligações são simples, a cadeia também é saturada, resultando em 2-metilbutano, cadeia ramificada e saturada. Numerar a partir da extremidade mais próxima da ramificação, e não da mais distante, é o que garante o menor localizador possível, 2 em vez de 3.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a estrutura da glicose, um carboidrato de fórmula C₆H₁₂O₆, que apresenta simultaneamente uma carbonila na extremidade da cadeia e cinco grupos hidroxila distribuídos pelos demais carbonos. Essa combinação de grupos funcionais caracteriza a glicose, em sua forma de cadeia aberta, como um composto:",
    opcoes: [
      "monofuncional, apresentando apenas a função álcool",
      "um hidrocarboneto simples, sem grupos funcionais",
      "polifuncional, com função aldeído e função álcool na mesma molécula",
      "uma amida, pela presença de nitrogênio na estrutura",
      "um éster, pela presença de múltiplos oxigênios",
    ],
    correta: 2,
    explicacao:
      "A carbonila na extremidade caracteriza a função aldeído, e os cinco grupos hidroxila caracterizam a função álcool, presentes simultaneamente na mesma molécula de glicose em sua forma linear — por isso ela é classificada como um composto polifuncional do tipo poliidroxialdeído. A glicose não contém nitrogênio em sua estrutura, o que descarta qualquer classificação como amina ou amida.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um composto orgânico tem fórmula molecular C₄H₈O₂ e apresenta o grupo funcional −COOH na extremidade de uma cadeia de quatro carbonos não ramificada. Segundo a nomenclatura IUPAC, esse composto é chamado de:",
    opcoes: [
      "butanal",
      "butan-1-ol",
      "ácido butanoico",
      "butanona",
      "ácido propanoico",
    ],
    correta: 2,
    explicacao:
      "A cadeia de quatro carbonos (but) com o grupo carboxila na extremidade (sufixo -oico, precedido de 'ácido') forma o ácido butanoico, também conhecido pelo nome usual ácido butírico, presente na manteiga rançosa. A contagem dos quatro carbonos inclui o próprio carbono da carboxila, que sempre recebe o número 1 na numeração da cadeia principal.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa dois compostos de mesma fórmula molecular C₂H₆O: o etanol (CH₃CH₂OH), um álcool, e o éter dimetílico (CH₃OCH₃), um éter. Apesar de terem a mesma fórmula molecular, esses dois compostos apresentam propriedades físicas e químicas bem diferentes, como pontos de ebulição distintos. Esse fenômeno, no qual compostos de mesma fórmula molecular têm estruturas e propriedades diferentes, é chamado de:",
    opcoes: [
      "alotropia",
      "polimerização",
      "isomeria",
      "hibridização",
      "ressonância",
    ],
    correta: 2,
    explicacao:
      "A isomeria ocorre quando dois ou mais compostos compartilham a mesma fórmula molecular, mas têm estruturas diferentes, o que altera suas propriedades físicas e químicas — o etanol, por ter uma hidroxila capaz de formar ligações de hidrogênio, tem ponto de ebulição bem mais alto que o éter dimetílico de mesma fórmula. A alotropia, por comparação, é um fenômeno análogo, mas restrito a formas diferentes de um mesmo elemento químico, não a compostos.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um composto orgânico apresenta a estrutura CH₃-CH₂-CH(OH)-CH₃, com a hidroxila ligada ao terceiro carbono de uma cadeia de quatro carbonos. Esse carbono, ligado à hidroxila, está também ligado a dois outros átomos de carbono da cadeia (o segundo e o quarto carbono), classificando o álcool, quanto ao carbono que porta a hidroxila, como:",
    opcoes: [
      "álcool primário, pois a hidroxila está ligada a um carbono primário",
      "álcool terciário, pois a hidroxila está ligada a um carbono terciário",
      "álcool secundário, pois a hidroxila está ligada a um carbono secundário",
      "fenol, pois a hidroxila está ligada a um anel aromático",
      "éter, pois há oxigênio entre dois carbonos",
    ],
    correta: 2,
    explicacao:
      "Como o carbono que porta a hidroxila (o carbono 2, na numeração correta que dá o menor localizador) está ligado a exatamente dois outros carbonos, ele é um carbono secundário, o que classifica o álcool correspondente como secundário. Álcoois primários têm a hidroxila em um carbono ligado a apenas um outro carbono, e terciários, em um carbono ligado a três outros carbonos.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a fórmula estrutural CH₃-CH₂-CO-NH-CH₃, um composto que contém uma carbonila ligada diretamente a um átomo de nitrogênio, que por sua vez está ligado a um grupo metila. Esse composto pertence à função:",
    opcoes: [
      "amina",
      "éster",
      "ácido carboxílico",
      "amida",
      "cetona",
    ],
    correta: 3,
    explicacao:
      "A ligação direta entre a carbonila e o nitrogênio (C(=O)-N) é a marca característica das amidas, presentes em proteínas na forma de ligações peptídicas entre aminoácidos. Se o nitrogênio estivesse ligado apenas a carbonos saturados, sem a carbonila adjacente, o composto seria classificado como amina.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um composto orgânico apresenta cadeia carbônica com 7 átomos de carbono, sendo insaturada (uma ligação dupla) e ramificada (um grupo etila ligado ao terceiro carbono de uma cadeia principal de 6 carbonos, com a ligação dupla entre o primeiro e o segundo carbono). Considerando as regras de nomenclatura IUPAC, o nome correto para esse composto é:",
    opcoes: [
      "3-etilhexano",
      "hex-1-eno",
      "3-etilhex-2-eno",
      "3-etilhex-1-eno",
      "etilhexeno",
    ],
    correta: 3,
    explicacao:
      "A cadeia principal com 6 carbonos e uma ligação dupla entre o primeiro e o segundo carbono forma o hex-1-eno; o grupo etila ligado ao terceiro carbono é indicado como prefixo com sua posição: 3-etilhex-1-eno. É essencial escolher a cadeia principal que contenha a maior quantidade de carbonos e, entre as opções possíveis, a que inclua a insaturação, mesmo que não seja a cadeia mais longa disponível na molécula.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "O gás de cozinha, GLP, é composto principalmente por propano e butano, hidrocarbonetos saturados e de cadeia aberta. Já a gasolina é uma mistura de hidrocarbonetos com cadeias maiores, geralmente entre 5 e 12 carbonos. A diferença no estado físico entre esses dois grupos de hidrocarbonetos, à temperatura ambiente, se deve principalmente:",
    opcoes: [
      "à presença de heteroátomos apenas na gasolina",
      "à existência de ligações duplas apenas no GLP",
      "à carga elétrica diferente entre as duas misturas",
      "ao tamanho da cadeia carbônica, que aumenta as forças intermoleculares e eleva o ponto de ebulição",
      "à presença de anéis aromáticos apenas no GLP",
    ],
    correta: 3,
    explicacao:
      "Cadeias carbônicas maiores têm mais área de contato entre moléculas vizinhas, o que intensifica as forças de London e eleva o ponto de ebulição — por isso hidrocarbonetos pequenos como propano e butano são gasosos à temperatura ambiente, enquanto os maiores presentes na gasolina são líquidos. Esse mesmo princípio explica a progressão do estado físico ao longo da série homóloga dos alcanos, do gás ao sólido conforme a cadeia cresce.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a fórmula do ácido láctico, presente no leite azedo e produzido nos músculos durante exercícios intensos, cuja estrutura é CH₃-CH(OH)-COOH. Esse composto apresenta, simultaneamente, as funções:",
    opcoes: [
      "aldeído e cetona",
      "éster e amina",
      "amida e éter",
      "álcool e ácido carboxílico",
      "apenas hidrocarboneto, sem função orgânica",
    ],
    correta: 3,
    explicacao:
      "A hidroxila ligada ao carbono central caracteriza a função álcool, e o grupo −COOH na extremidade caracteriza a função ácido carboxílico, presentes simultaneamente na mesma molécula de ácido láctico, um composto polifuncional. É essa combinação de grupos que confere ao ácido láctico propriedades únicas, distintas das de um álcool ou ácido simples isolado.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "O metano é o hidrocarboneto mais simples, formado por apenas um átomo de carbono ligado a quatro átomos de hidrogênio. Sua fórmula molecular é:",
    opcoes: [
      "C₂H₆",
      "CH₃OH",
      "CO₂",
      "CH₄",
      "C₃H₈",
    ],
    correta: 3,
    explicacao:
      "O metano tem um único carbono central ligado por ligações simples a quatro hidrogênios, resultando na fórmula CH₄, o principal componente do gás natural. O CO₂, apesar de conter carbono, é tradicionalmente classificado como composto inorgânico, não como hidrocarboneto.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "Os hidrocarbonetos aromáticos são caracterizados pela presença de pelo menos um anel benzênico em sua estrutura. O benzeno, composto aromático mais simples, tem fórmula molecular:",
    opcoes: [
      "C₆H₁₂",
      "C₆H₁₄",
      "C₅H₁₀",
      "C₆H₆",
      "C₆H₅OH",
    ],
    correta: 3,
    explicacao:
      "O benzeno é formado por um anel de seis carbonos com ligações alternadas, cada carbono ligado a um único hidrogênio, resultando na fórmula C₆H₆. O C₆H₅OH corresponde ao fenol, um derivado do benzeno com uma hidroxila, não ao benzeno puro.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um hidrocarboneto de cadeia aberta, saturada e não ramificada tem 3 átomos de carbono. Segundo a nomenclatura IUPAC, seu nome é:",
    opcoes: [
      "propeno",
      "propino",
      "propanol",
      "propano",
      "propanal",
    ],
    correta: 3,
    explicacao:
      "Combinando o prefixo prop (3 carbonos) com o sufixo -ano (cadeia saturada), obtém-se propano, o gás usado em isqueiros e em algumas instalações domésticas de GLP. Os demais sufixos indicariam insaturações ou outras funções orgânicas ausentes nesse hidrocarboneto simples.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um composto orgânico apresenta a estrutura CH₃-CH₂-CHO, com a carbonila na extremidade da cadeia de três carbonos, ligada a um hidrogênio. Segundo a nomenclatura IUPAC, esse composto é chamado de:",
    opcoes: [
      "propanona",
      "propan-1-ol",
      "ácido propanoico",
      "propanal",
      "propano",
    ],
    correta: 3,
    explicacao:
      "A cadeia de três carbonos (prop) com a carbonila na extremidade, ligada a um hidrogênio (sufixo -al), forma o propanal, também conhecido como aldeído propiônico. Se a carbonila estivesse no carbono central, ligada a dois grupos carbônicos, o composto seria a propanona, uma cetona.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a fórmula estrutural CH₃-CH₂-NH₂, um composto em que o nitrogênio está ligado diretamente a um carbono saturado, sem a presença de uma carbonila adjacente. Esse composto pertence à função:",
    opcoes: [
      "amida",
      "nitrila",
      "éster",
      "amina",
      "ácido carboxílico",
    ],
    correta: 3,
    explicacao:
      "Como o nitrogênio está ligado apenas a carbonos saturados e hidrogênios, sem carbonila diretamente ligada a ele, o composto é classificado como amina, nesse caso a etilamina. Se houvesse uma carbonila ligada ao nitrogênio, formando o grupo C(=O)-N, o composto seria classificado como amida.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um composto orgânico de fórmula molecular C₄H₈ apresenta uma ligação dupla entre o segundo e o terceiro carbono de uma cadeia de quatro carbonos não ramificada. Segundo a nomenclatura IUPAC, considerando a regra do menor localizador possível, esse composto é corretamente chamado de:",
    opcoes: [
      "but-1-eno",
      "but-3-eno",
      "butano",
      "but-2-ino",
      "but-2-eno",
    ],
    correta: 4,
    explicacao:
      "A ligação dupla entre o segundo e o terceiro carbono recebe o menor dos dois números possíveis (2, e não 3, contando pela extremidade mais próxima), resultando em but-2-eno. Diferentemente do but-1-eno, que tem a ligação dupla na extremidade, o but-2-eno tem a insaturação no meio da cadeia, o que também o torna simétrico.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "O isopreno, unidade estrutural básica da borracha natural, é um hidrocarboneto de cadeia ramificada com duas ligações duplas em sua estrutura. Compostos com duas ligações duplas na cadeia carbônica são classificados, quanto à insaturação, como:",
    opcoes: [
      "alcinos",
      "alcanos",
      "alcoóis",
      "cetonas",
      "dienos",
    ],
    correta: 4,
    explicacao:
      "Os dienos apresentam exatamente duas ligações duplas na cadeia carbônica, indicadas pelo sufixo -dieno na nomenclatura IUPAC, sendo o isopreno um exemplo natural importante na formação de polímeros elásticos como a borracha. Alcinos, em contraste, são caracterizados pela presença de ligação tripla, não dupla.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a estrutura do glicerol, também chamado de propano-1,2,3-triol, presente em produtos cosméticos e usado na produção de sabão. Essa molécula apresenta três grupos hidroxila distribuídos ao longo de uma cadeia de três carbonos. Compostos com mais de uma hidroxila na estrutura, como o glicerol, são classificados como:",
    opcoes: [
      "monoálcoois",
      "ácidos poli-carboxílicos",
      "polissacarídeos",
      "poliaminas",
      "poliálcoois",
    ],
    correta: 4,
    explicacao:
      "A presença de múltiplas hidroxilas na mesma molécula, como as três do glicerol, caracteriza um poliálcool, também chamado de poliol; monoálcoois têm apenas uma hidroxila em sua estrutura, como o etanol comum. Essa classificação é importante na indústria, já que poliálcoois costumam ter propriedades como maior viscosidade e capacidade de reter umidade.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Comparando as funções orgânicas ácido carboxílico e éster, ambas contendo o grupo carbonila em sua estrutura, a diferença estrutural entre elas está no fato de que, no éster, o hidrogênio da hidroxila da carboxila é substituído por:",
    opcoes: [
      "um átomo de nitrogênio",
      "outro átomo de oxigênio",
      "um átomo de hidrogênio adicional",
      "um átomo de carbono isolado, sem hidrogênios",
      "um grupo orgânico (radical), formando a ligação característica do éster",
    ],
    correta: 4,
    explicacao:
      "No ácido carboxílico, a carboxila termina em uma hidroxila com hidrogênio ionizável; no éster, esse hidrogênio é substituído por um grupo orgânico vindo do álcool que reagiu na esterificação, alterando a reatividade e as propriedades físicas do composto, como o cheiro característico de muitos ésteres. Essa diferença estrutural sutil também explica por que ésteres não têm o caráter ácido característico dos ácidos carboxílicos.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um composto orgânico apresenta a fórmula estrutural CH₃-CH(CH₃)-CH₂-COOH, com um grupo metila ligado ao terceiro carbono, contando a partir da carboxila, de uma cadeia principal de quatro carbonos. Segundo a nomenclatura IUPAC, esse composto é chamado de:",
    opcoes: [
      "ácido butanoico",
      "ácido 2-metilbutanoico",
      "ácido 3-metilpropanoico",
      "ácido pentanoico",
      "ácido 3-metilbutanoico",
    ],
    correta: 4,
    explicacao:
      "A cadeia principal de quatro carbonos com a carboxila (que recebe sempre o número 1) forma o ácido butanoico; o grupo metila, ligado ao terceiro carbono a partir da carboxila, é indicado como 3-metil, resultando em ácido 3-metilbutanoico. Na nomenclatura de ácidos carboxílicos, a numeração sempre começa pelo carbono da carboxila, sem exceção, diferentemente de outras funções em que se escolhe o menor localizador possível.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "O naftaleno, presente em algumas bolinhas de naftalina usadas contra traças, é um hidrocarboneto aromático formado por dois anéis benzênicos fundidos. Compostos com dois ou mais anéis aromáticos fundidos são chamados de hidrocarbonetos aromáticos:",
    opcoes: [
      "monofuncionais",
      "saturados",
      "alifáticos simples",
      "heterogêneos apenas",
      "polinucleares",
    ],
    correta: 4,
    explicacao:
      "Hidrocarbonetos aromáticos com múltiplos anéis benzênicos conectados, como o naftaleno e o antraceno, são chamados de aromáticos polinucleares, em contraste com compostos de um único anel, como o benzeno e o tolueno, chamados de mononucleares. Compostos alifáticos, por definição, não possuem anéis aromáticos em sua estrutura.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a estrutura do ácido cítrico, presente em frutas cítricas como o limão, que apresenta três grupos carboxila em sua molécula. Compostos com mais de um grupo carboxila na estrutura, como o ácido cítrico, são classificados como:",
    opcoes: [
      "monoácidos",
      "poliálcoois",
      "polissacarídeos",
      "poliaminas",
      "poliácidos ou ácidos policarboxílicos",
    ],
    correta: 4,
    explicacao:
      "A presença de mais de uma carboxila na mesma molécula caracteriza um ácido policarboxílico, o que explica por que o ácido cítrico é consideravelmente mais ácido que ácidos carboxílicos simples de uma só carboxila, já que pode liberar até três íons H⁺ por molécula. Monoácidos, por contraste, têm apenas um grupo carboxila em sua estrutura.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Um composto orgânico apresenta a estrutura (CH₃)₂CH-CH₂-CH₃, uma cadeia de quatro carbonos com um grupo metila ligado ao segundo carbono. Diferentemente da estrutura CH₃-CH₂-CH₂-CH₂-CH₃, de cinco carbonos em sequência, esses dois compostos são classificados, quanto à cadeia carbônica, respectivamente, como:",
    opcoes: [
      "normal e ramificada",
      "ambas ramificadas",
      "ambas normais",
      "cíclica e aromática",
      "ramificada e normal (não ramificada)",
    ],
    correta: 4,
    explicacao:
      "O primeiro composto, com um grupo metila lateral ligado à cadeia principal, é uma cadeia ramificada; o segundo, com todos os carbonos em sequência única, sem qualquer desvio lateral, é uma cadeia normal, também chamada de linear ou não ramificada. Essa classificação da cadeia é independente do número de carbonos ou da presença de insaturações.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "O colesterol, molécula orgânica essencial encontrada nas membranas celulares e precursora de hormônios esteroides, apresenta uma estrutura cíclica complexa com quatro anéis fundidos, além de uma hidroxila. Compostos orgânicos com estruturas em anel, diferentemente das cadeias abertas, são classificados como:",
    opcoes: [
      "acíclicos",
      "lineares",
      "heterogêneos apenas por definição",
      "saturados apenas por definição",
      "cíclicos",
    ],
    correta: 4,
    explicacao:
      "Cadeias cíclicas se fecham formando um ou mais anéis, como ocorre na estrutura do colesterol e de outros esteroides; cadeias acíclicas, ao contrário, permanecem abertas, sem formar nenhum anel fechado. Um composto cíclico pode ainda ser saturado ou insaturado, homogêneo ou heterogêneo, dependendo de outras características estruturais independentes da ciclicidade.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "facil",
    enunciado:
      "Um composto orgânico que apresenta o grupo funcional carboxila (–COOH) ligado a uma cadeia carbônica, como no ácido acético presente no vinagre, pertence à função orgânica dos:",
    opcoes: [
      "álcoois",
      "aldeídos",
      "ácidos carboxílicos",
      "ésteres",
      "cetonas",
    ],
    correta: 2,
    explicacao:
      "O grupo carboxila (–COOH) é o grupo funcional característico dos ácidos carboxílicos, como o ácido acético (CH₃COOH), responsável pelo sabor azedo do vinagre. Álcoois têm hidroxila (–OH) ligada a carbono saturado, aldeídos têm carbonila na extremidade da cadeia, e ésteres e cetonas têm arranjos distintos da carbonila.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "media",
    enunciado:
      "Na nomenclatura oficial (IUPAC) dos hidrocarbonetos, o sufixo usado para indicar que a cadeia principal contém uma ligação dupla entre carbonos é:",
    opcoes: [
      "-ano",
      "-ino",
      "-ol",
      "-eno",
      "-al",
    ],
    correta: 3,
    explicacao:
      "O sufixo \"-eno\" indica a presença de uma ligação dupla na cadeia principal, como em \"eteno\" ou \"propeno\". O sufixo \"-ano\" indica cadeia saturada, sem ligações múltiplas; \"-ino\" indica ligação tripla; \"-ol\" indica função álcool; e \"-al\" indica função aldeído.",
  },
  {
    materia: "quimica",
    tema: "Química orgânica: funções e nomenclatura",
    dificuldade: "dificil",
    enunciado:
      "Um composto orgânico apresenta a fórmula estrutural CH₃-CH₂-CH₂-OH, uma cadeia de três carbonos com um grupo hidroxila ligado ao carbono da extremidade. Seguindo as regras de nomenclatura da IUPAC, esse composto é corretamente denominado:",
    opcoes: [
      "metanol",
      "etanol",
      "propan-2-ol",
      "butan-1-ol",
      "propan-1-ol",
    ],
    correta: 4,
    explicacao:
      "A cadeia tem três carbonos (propano) com a hidroxila no primeiro carbono da numeração, o que gera o nome \"propan-1-ol\". Se a hidroxila estivesse no carbono central, o nome seria \"propan-2-ol\"; \"metanol\" e \"etanol\" têm apenas um e dois carbonos, respectivamente, e \"butan-1-ol\" teria quatro carbonos na cadeia.",
  },
];
