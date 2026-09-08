/* Isomeria e reações orgânicas (50 questões).
   Isomeria plana (cadeia, posição, função, compensação, metameria) e
   espacial (cis-trans, óptica), além de reações orgânicas: substituição,
   adição, eliminação e combustão.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "Isômeros são compostos diferentes que compartilham a mesma fórmula molecular, mas apresentam estruturas distintas. Essa diferença estrutural resulta em:",
    opcoes: [
      "propriedades físicas e químicas diferentes entre os isômeros",
      "propriedades idênticas entre todos os isômeros",
      "fórmulas moleculares diferentes entre si",
      "massas molares diferentes entre os isômeros",
      "impossibilidade de existirem simultaneamente na natureza",
    ],
    correta: 0,
    explicacao:
      "Apesar de terem a mesma fórmula molecular, e portanto a mesma massa molar, isômeros têm átomos organizados de formas diferentes, o que altera propriedades como ponto de ebulição, reatividade e até função biológica. É esse contraste entre igualdade de fórmula e diferença de propriedades que torna a isomeria um fenômeno relevante para a farmacologia e a indústria química.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "A isomeria de cadeia ocorre quando dois compostos têm a mesma fórmula molecular, mas diferem no tipo de cadeia carbônica: um pode ser normal e o outro ramificado, por exemplo. O butano (cadeia normal) e o isobutano (cadeia ramificada), ambos de fórmula C₄H₁₀, são um exemplo desse tipo de isomeria, classificado como:",
    opcoes: [
      "isomeria de cadeia",
      "isomeria de posição",
      "isomeria de função",
      "isomeria óptica",
      "isomeria geométrica",
    ],
    correta: 0,
    explicacao:
      "Como os dois compostos têm o mesmo tipo de grupo funcional (nenhum, sendo hidrocarbonetos simples) e diferem apenas na forma da cadeia — uma normal e outra ramificada —, essa é classificada como isomeria de cadeia. É o tipo mais simples e intuitivo de isomeria plana.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "A isomeria de posição ocorre quando dois compostos têm o mesmo tipo de cadeia e o mesmo grupo funcional, mas esse grupo (ou uma insaturação) ocupa posições diferentes na cadeia. O propan-1-ol e o propan-2-ol, ambos álcoois de fórmula C₃H₈O, são um exemplo desse tipo de isomeria, pois a hidroxila está em:",
    opcoes: [
      "posições diferentes da mesma cadeia carbônica",
      "cadeias carbônicas de tamanhos diferentes",
      "funções orgânicas diferentes",
      "moléculas com fórmulas moleculares diferentes",
      "compostos sem qualquer semelhança estrutural",
    ],
    correta: 0,
    explicacao:
      "Nos dois isômeros de posição, a hidroxila está ligada a carbonos diferentes de uma mesma cadeia principal — no carbono 1 em um caso, no carbono 2 no outro —, o que caracteriza a isomeria de posição. O restante da estrutura molecular, incluindo o tipo de cadeia e a função orgânica, permanece o mesmo nos dois compostos.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "A isomeria de função ocorre quando dois compostos de mesma fórmula molecular pertencem a funções orgânicas diferentes. O etanol (um álcool) e o éter dimetílico (um éter), ambos de fórmula C₂H₆O, exemplificam esse tipo de isomeria porque:",
    opcoes: [
      "pertencem a funções orgânicas diferentes, apesar da mesma fórmula molecular",
      "têm cadeias carbônicas de tamanhos diferentes",
      "são a mesma substância com nomes diferentes",
      "não compartilham a mesma fórmula molecular",
      "diferem apenas na posição de um grupo funcional",
    ],
    correta: 0,
    explicacao:
      "O etanol pertence à função álcool, com hidroxila ligada a um carbono saturado, enquanto o éter dimetílico pertence à função éter, com oxigênio interligando dois carbonos; apesar da mesma fórmula molecular C₂H₆O, são funções orgânicas distintas, caracterizando isomeria de função. Essa diferença de função também explica por que os dois compostos têm propriedades físicas e químicas bem diferentes, como o ponto de ebulição.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "Uma reação de substituição em química orgânica ocorre quando um átomo ou grupo de átomos de uma molécula é trocado por outro átomo ou grupo. Esse tipo de reação é típico de compostos:",
    opcoes: [
      "saturados, como os alcanos",
      "insaturados, como os alcenos",
      "exclusivamente aromáticos",
      "exclusivamente iônicos",
      "exclusivamente gasosos",
    ],
    correta: 0,
    explicacao:
      "Compostos saturados, como os alcanos, não têm ligações duplas ou triplas disponíveis para reações de adição, então reagem principalmente por substituição, trocando um de seus hidrogênios por outro átomo, como em uma halogenação. Compostos insaturados, ao contrário, reagem preferencialmente por adição, aproveitando a disponibilidade da ligação múltipla.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "Uma reação de adição em química orgânica ocorre quando átomos se juntam a uma molécula, geralmente rompendo uma ligação dupla ou tripla e transformando-a em ligações simples. Esse tipo de reação é típico de compostos:",
    opcoes: [
      "insaturados, como os alcenos e alcinos",
      "saturados, como os alcanos",
      "exclusivamente iônicos",
      "exclusivamente aromáticos, sem exceção",
      "exclusivamente sólidos à temperatura ambiente",
    ],
    correta: 0,
    explicacao:
      "A presença de ligações duplas ou triplas em alcenos e alcinos oferece um ponto de reatividade que permite a adição de novos átomos, rompendo a ligação múltipla e formando ligações simples adicionais. É por essa reatividade elevada que compostos insaturados costumam ser usados como matéria-prima na indústria de polímeros.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "A reação de hidrogenação de óleos vegetais, usada industrialmente na produção de margarina, consiste na adição de gás hidrogênio a ligações duplas presentes nos ácidos graxos insaturados do óleo. Essa reação transforma parte das ligações duplas em ligações simples, tornando o produto:",
    opcoes: [
      "mais saturado e, geralmente, sólido à temperatura ambiente",
      "mais insaturado e ainda mais líquido",
      "radioativo, por conter hidrogênio adicionado",
      "iônico, com formação de novos sais",
      "aromático, com formação de anéis benzênicos",
    ],
    correta: 0,
    explicacao:
      "Ao adicionar hidrogênio às ligações duplas, o processo aumenta o grau de saturação da molécula, o que costuma elevar o ponto de fusão do produto e torná-lo sólido ou semissólido à temperatura ambiente, como ocorre na transformação de óleo líquido em margarina. Esse mesmo princípio de adição de hidrogênio é usado em diversos processos industriais de modificação de gorduras.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "Uma reação de combustão em química orgânica consiste na queima de um composto orgânico na presença de oxigênio, liberando energia. Na combustão completa de um hidrocarboneto, os produtos formados são sempre:",
    opcoes: [
      "gás carbônico e água",
      "apenas gás carbônico",
      "apenas água",
      "monóxido de carbono e fuligem",
      "gás hidrogênio e oxigênio",
    ],
    correta: 0,
    explicacao:
      "Quando há oxigênio suficiente, a combustão completa de qualquer hidrocarboneto converte todo o carbono em CO₂ e todo o hidrogênio em H₂O, os dois únicos produtos dessa reação. A combustão incompleta, por falta de oxigênio, forma monóxido de carbono e fuligem em vez do CO₂ completo.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "A talidomida, um medicamento usado nos anos 1950 e depois retirado do mercado por causar graves malformações fetais quando administrado a gestantes, existe em duas formas espaciais diferentes, chamadas de enantiômeros, que são imagens especulares uma da outra. Esse tipo de isomeria espacial é chamado de:",
    opcoes: [
      "isomeria óptica",
      "isomeria de cadeia",
      "isomeria de função",
      "isomeria de posição",
      "isomeria de compensação",
    ],
    correta: 0,
    explicacao:
      "A isomeria óptica ocorre quando duas moléculas são imagens especulares não sobreponíveis uma da outra, como a mão direita e a mão esquerda — no caso da talidomida, uma forma tinha o efeito terapêutico desejado e a outra causava os efeitos teratogênicos. Esse é um dos exemplos históricos mais citados da importância médica de distinguir corretamente entre isômeros ópticos.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "A isomeria geométrica, também chamada de isomeria cis-trans, ocorre em compostos com ligação dupla ou estrutura cíclica que impede a livre rotação entre os átomos. Essa restrição de rotação é a condição estrutural necessária para que dois isômeros geométricos sejam considerados compostos:",
    opcoes: [
      "idênticos, sem qualquer diferença detectável",
      "diferentes, com propriedades físicas e químicas distintas",
      "impossíveis de existir na natureza",
      "sempre radioativos",
      "sempre solúveis em água",
    ],
    correta: 1,
    explicacao:
      "Como a ligação dupla (ou o anel) impede a rotação livre entre os átomos, os grupos ligados aos carbonos ficam fixos em posições relativas específicas — do mesmo lado (cis) ou em lados opostos (trans) —, resultando em compostos com propriedades físicas e químicas mensuravelmente diferentes, não apenas nomes distintos para a mesma coisa.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa dois compostos de fórmula molecular C₄H₈: o but-1-eno, com a ligação dupla na extremidade da cadeia, e o but-2-eno, com a ligação dupla no meio da cadeia. Esses dois compostos exemplificam a isomeria de:",
    opcoes: [
      "cadeia, pois têm tipos diferentes de cadeia carbônica",
      "posição, pois a insaturação ocupa lugares diferentes na mesma cadeia",
      "função, pois pertencem a funções orgânicas diferentes",
      "compensação, pois têm heteroátomos em posições diferentes",
      "óptica, pois são imagens especulares um do outro",
    ],
    correta: 1,
    explicacao:
      "Como os dois compostos têm o mesmo tipo de cadeia (normal) e a mesma função (alceno), diferindo apenas na posição da ligação dupla dentro da cadeia, essa é uma isomeria de posição. Se a diferença estivesse no tipo de cadeia (normal versus ramificada), seria classificada como isomeria de cadeia.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "A metameria, um subtipo de isomeria de posição envolvendo cadeias heterogêneas, ocorre quando dois compostos de mesma função diferem na posição do heteroátomo dentro da cadeia. O éter metil-propílico (CH₃-O-CH₂CH₂CH₃) e o éter etílico (CH₃CH₂-O-CH₂CH₃), ambos éteres, exemplificam esse tipo de isomeria porque:",
    opcoes: [
      "pertencem a funções orgânicas completamente diferentes",
      "o átomo de oxigênio ocupa posições diferentes ao longo da cadeia carbônica total",
      "não compartilham a mesma fórmula molecular",
      "diferem apenas no tipo de cadeia, aberta ou fechada",
      "são imagens especulares um do outro",
    ],
    correta: 1,
    explicacao:
      "Nos dois éteres, o oxigênio (heteroátomo que interrompe a cadeia carbônica) está posicionado de forma diferente em relação ao total de carbonos da molécula, o que caracteriza a metameria, um caso específico de isomeria de posição restrito a compostos com heteroátomos na cadeia, como éteres e aminas.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "A isomeria de compensação, ou tautomeria, é um caso especial de isomeria de função em que dois isômeros existem em equilíbrio dinâmico, se interconvertendo espontaneamente. O par mais conhecido de tautômeros envolve as funções:",
    opcoes: [
      "álcool e ácido carboxílico",
      "aldeído (ou cetona) e enol",
      "éster e amida",
      "amina e amida",
      "hidrocarboneto e éter",
    ],
    correta: 1,
    explicacao:
      "A tautomeria ceto-enólica é o exemplo mais citado desse fenômeno: um composto com carbonila (forma ceto) se interconverte espontaneamente com sua forma enol, que tem uma hidroxila ligada a um carbono de dupla ligação, existindo em equilíbrio dinâmico entre as duas estruturas. Diferentemente de outros tipos de isomeria, na tautomeria as duas formas coexistem e se transformam continuamente uma na outra.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o but-2-eno, que pode existir em duas formas geométricas distintas: o cis-but-2-eno, com os dois grupos metila do mesmo lado da ligação dupla, e o trans-but-2-eno, com os grupos metila em lados opostos. Essas duas formas apresentam propriedades físicas diferentes, como pontos de ebulição distintos, porque:",
    opcoes: [
      "têm fórmulas moleculares diferentes entre si",
      "a disposição espacial dos grupos afeta a polaridade e as forças intermoleculares da molécula",
      "pertencem a funções orgânicas diferentes",
      "um deles não existe realmente na natureza",
      "diferem no tipo de cadeia carbônica",
    ],
    correta: 1,
    explicacao:
      "No isômero cis, os grupos metila do mesmo lado geram um momento dipolar líquido, tornando a molécula ligeiramente polar; no trans, a simetria da disposição em lados opostos tende a cancelar o momento dipolar, deixando a molécula mais apolar — essa diferença de polaridade se reflete diretamente nas forças intermoleculares e no ponto de ebulição de cada isômero.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um carbono é chamado de assimétrico, ou quiral, quando está ligado a quatro grupos diferentes entre si. A presença de pelo menos um carbono assimétrico em uma molécula é a condição estrutural necessária para a existência de:",
    opcoes: [
      "isomeria de cadeia",
      "isomeria óptica",
      "isomeria de função",
      "isomeria de posição",
      "metameria",
    ],
    correta: 1,
    explicacao:
      "Um carbono ligado a quatro grupos diferentes pode ter dois arranjos espaciais distintos, que são imagens especulares não sobreponíveis uma da outra — os chamados enantiômeros —, o que caracteriza a isomeria óptica. Moléculas sem carbono assimétrico, em geral, não apresentam esse tipo de isomeria.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Uma reação de halogenação do metano, CH₄ + Cl₂ → CH₃Cl + HCl, ocorre sob luz ultravioleta e substitui um hidrogênio da molécula por um átomo de cloro. Esse tipo de reação é classificado como uma reação de:",
    opcoes: [
      "adição",
      "substituição",
      "eliminação",
      "combustão",
      "neutralização",
    ],
    correta: 1,
    explicacao:
      "Como um átomo de hidrogênio do metano é trocado por um átomo de cloro, sem alterar o número de ligações do carbono, essa é uma reação de substituição, típica de compostos saturados como os alcanos. A energia da luz ultravioleta é necessária para iniciar o mecanismo de radicais livres envolvido nessa reação.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Uma reação de eliminação em química orgânica é o processo inverso de uma reação de adição: átomos são removidos de uma molécula, formando uma ligação dupla ou tripla onde antes havia apenas ligações simples. A desidratação de um álcool, formando um alceno e água, é um exemplo típico de reação de:",
    opcoes: [
      "adição",
      "eliminação",
      "substituição",
      "combustão",
      "hidrogenação",
    ],
    correta: 1,
    explicacao:
      "Na desidratação, uma molécula de água é removida do álcool, e uma nova ligação dupla se forma entre dois carbonos que antes tinham apenas ligações simples — o processo inverso da hidratação, que seria uma reação de adição. Essa reação de eliminação é usada industrialmente para produzir alcenos a partir de álcoois.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação entre eteno e água na presença de um catalisador ácido, CH₂=CH₂ + H₂O → CH₃CH₂OH, que produz etanol a partir do eteno. Essa reação, na qual átomos se somam à ligação dupla, é classificada como uma reação de:",
    opcoes: [
      "substituição, específica de alcanos",
      "adição, especificamente hidratação",
      "eliminação, formando um novo alceno",
      "combustão, liberando energia",
      "neutralização entre ácido e base",
    ],
    correta: 1,
    explicacao:
      "Os átomos de hidrogênio e a hidroxila da água se adicionam aos dois carbonos da ligação dupla do eteno, transformando-a em ligação simples — uma reação de adição, especificamente chamada de hidratação por envolver a adição de água. Esse processo industrial é uma das principais rotas para a produção de etanol sintético a partir do petróleo.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante compara dois compostos de fórmula molecular C₃H₆O: a propanona (uma cetona) e o propanal (um aldeído). Esses dois compostos exemplificam a isomeria de:",
    opcoes: [
      "posição, pois têm a mesma função em posições diferentes",
      "cadeia, pois têm cadeias carbônicas de tipos diferentes",
      "função, pois pertencem a funções orgânicas diferentes",
      "compensação, pois estão em equilíbrio dinâmico permanente",
      "óptica, pois são imagens especulares um do outro",
    ],
    correta: 2,
    explicacao:
      "Como a propanona pertence à função cetona e o propanal pertence à função aldeído, funções orgânicas distintas, apesar de compartilharem a mesma fórmula molecular C₃H₆O, essa é classificada como isomeria de função. A diferença de função também explica por que o propanal, com hidrogênio ligado à carbonila, é mais facilmente oxidado do que a propanona.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "O ácido oleico, um ácido graxo insaturado presente no azeite de oliva, existe naturalmente na forma cis, o que confere ao azeite seu estado líquido característico à temperatura ambiente. Ácidos graxos trans, formados artificialmente durante processos industriais de hidrogenação parcial, têm sido associados a riscos à saúde cardiovascular. A diferença de comportamento entre as formas cis e trans desses ácidos graxos é um exemplo prático de como a isomeria:",
    opcoes: [
      "óptica determina exclusivamente o sabor dos alimentos",
      "de cadeia altera a cor dos alimentos",
      "geométrica pode ter implicações biológicas e de saúde significativas",
      "de função transforma gorduras em carboidratos",
      "de posição não tem qualquer relevância biológica",
    ],
    correta: 2,
    explicacao:
      "A diferença geométrica entre as formas cis e trans dos ácidos graxos altera tanto propriedades físicas, como o ponto de fusão, quanto a forma como essas moléculas interagem com o metabolismo humano, sendo as gorduras trans associadas a maior risco de doenças cardiovasculares. É um exemplo concreto de como um conceito aparentemente abstrato da química orgânica tem consequências diretas na saúde pública.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a molécula de ácido láctico, CH₃-CH(OH)-COOH, e identifica que o segundo carbono está ligado a quatro grupos diferentes: hidrogênio, hidroxila, metila e carboxila. Essa característica estrutural faz desse carbono um centro:",
    opcoes: [
      "aquiral, sem qualquer capacidade de gerar isomeria",
      "aromático, por fazer parte de um anel benzênico",
      "quiral, ou assimétrico, capaz de gerar isomeria óptica",
      "insaturado, por conter uma ligação dupla",
      "primário, por se ligar a apenas um outro carbono",
    ],
    correta: 2,
    explicacao:
      "Como o carbono central está ligado a quatro grupos diferentes entre si (H, OH, CH₃ e COOH), ele é um carbono quiral, e a molécula de ácido láctico existe, de fato, em duas formas ópticas distintas: o ácido L-láctico, produzido nos músculos humanos, e o D-láctico, produzido por certas bactérias. É essa assimetria que torna a molécula opticamente ativa.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um composto de fórmula molecular C₅H₁₂ pode apresentar três isômeros de cadeia diferentes: pentano (cadeia normal), 2-metilbutano (uma ramificação) e 2,2-dimetilpropano, também chamado de neopentano (duas ramificações no mesmo carbono). Comparando os pontos de ebulição desses três isômeros, é esperado que o composto de maior ponto de ebulição seja o:",
    opcoes: [
      "2-metilbutano, por ter uma única ramificação",
      "neopentano, por ser o mais ramificado e compacto",
      "pentano, por ter a cadeia mais linear e maior área de contato intermolecular",
      "os três apresentam exatamente o mesmo ponto de ebulição",
      "impossível prever sem dados experimentais adicionais",
    ],
    correta: 2,
    explicacao:
      "Cadeias mais lineares, como a do pentano, oferecem maior área de contato entre moléculas vizinhas, intensificando as forças de London e elevando o ponto de ebulição; à medida que a molécula se torna mais ramificada e compacta, como no neopentano, essa área de contato diminui, reduzindo o ponto de ebulição. Esse padrão se repete de forma consistente ao longo de toda a família dos isômeros de cadeia dos alcanos.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a reação de eliminação do 2-bromobutano com uma base forte, que pode formar dois produtos alcenos diferentes: but-1-eno e but-2-eno, dependendo de qual hidrogênio vizinho ao carbono ligado ao bromo é removido. Esse fenômeno, em que uma mesma reação pode gerar mais de um produto isomérico dependendo do caminho seguido, ilustra como a compreensão de:",
    opcoes: [
      "isomeria óptica determina exclusivamente o resultado dessa reação",
      "isomeria de função explica a formação desses dois produtos",
      "isomeria de posição é essencial para prever e controlar os produtos de reações orgânicas",
      "apenas um dos dois produtos pode existir quimicamente",
      "essa reação não envolve qualquer tipo de isomeria",
    ],
    correta: 2,
    explicacao:
      "Os dois possíveis produtos, but-1-eno e but-2-eno, são isômeros de posição entre si, diferindo apenas na localização da ligação dupla resultante; entender esse conceito ajuda químicos a prever e, quando possível, direcionar reações de eliminação para o produto desejado, um problema comum em síntese orgânica industrial e acadêmica.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Comparando o ácido butanoico (CH₃CH₂CH₂COOH) com o ácido metilpropanoico, também chamado de ácido isobutírico ((CH₃)₂CHCOOH), ambos de fórmula molecular C₄H₈O₂, é correto classificar essa relação entre os dois compostos como isomeria de:",
    opcoes: [
      "posição, pois têm o mesmo tipo de cadeia com o grupo em posições diferentes",
      "função, pois pertencem a funções orgânicas diferentes",
      "cadeia, pois têm o mesmo grupo funcional em cadeias de tipos diferentes",
      "compensação, pois estão em equilíbrio dinâmico",
      "óptica, pois são imagens especulares um do outro",
    ],
    correta: 2,
    explicacao:
      "Os dois compostos pertencem à mesma função (ácido carboxílico) e a carboxila está sempre na extremidade (posição fixa por definição da função), mas a cadeia carbônica é normal em um caso e ramificada no outro, o que caracteriza a isomeria de cadeia, e não de posição — mesmo com o grupo funcional formalmente em 'posições' diferentes de numeração, a diferença estrutural real está no tipo de cadeia.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a reação de polimerização do eteno, na qual milhares de moléculas de CH₂=CH₂ se unem repetidamente, rompendo suas ligações duplas, para formar o polietileno, um plástico de cadeia longa. Esse processo de formação de um polímero a partir de pequenas moléculas insaturadas (monômeros) é classificado como um tipo particular de reação de:",
    opcoes: [
      "substituição, trocando átomos de hidrogênio por cloro",
      "eliminação, formando novas ligações duplas",
      "adição, repetida sucessivamente ao longo de toda a cadeia polimérica",
      "combustão, liberando gás carbônico e água",
      "neutralização entre monômeros ácidos e básicos",
    ],
    correta: 2,
    explicacao:
      "A polimerização por adição ocorre quando as ligações duplas dos monômeros se rompem sucessivamente, permitindo que cada molécula se una à seguinte, formando uma cadeia longa sem perda de átomos — é o mesmo princípio da adição simples, apenas repetido milhares de vezes. Esse mecanismo é responsável pela produção de plásticos comuns como o polietileno e o polipropileno.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador analisa dois compostos de fórmula molecular C₄H₁₀O: o butan-1-ol (um álcool) e o éter etil-metílico (CH₃-O-CH₂CH₂CH₃, um éter, também de fórmula C₄H₁₀O). Comparando essa relação com a existente entre o but-1-eno e o but-2-eno (isômeros de posição), a diferença fundamental é que, no primeiro par, os compostos são isômeros de:",
    opcoes: [
      "posição, assim como o segundo par de compostos",
      "cadeia, assim como o segundo par de compostos",
      "função, pois pertencem a funções orgânicas diferentes (álcool e éter)",
      "compensação, exatamente como o segundo par",
      "óptica, diferentemente do segundo par",
    ],
    correta: 2,
    explicacao:
      "O butan-1-ol pertence à função álcool e o éter etil-metílico pertence à função éter, funções orgânicas diferentes que compartilham a mesma fórmula molecular, caracterizando isomeria de função — diferente do par but-1-eno/but-2-eno, que pertencem à mesma função (alceno) e diferem apenas na posição da insaturação, caracterizando isomeria de posição. Comparar cuidadosamente se a função muda ou não é o critério mais direto para distinguir esses dois tipos de isomeria plana.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a estrutura do ácido tartárico, presente em uvas, que possui dois carbonos assimétricos em sua molécula. Compostos com mais de um carbono quiral podem apresentar, além dos pares de enantiômeros, uma forma especial em que a molécula é sua própria imagem especular sobreposta, chamada de forma:",
    opcoes: [
      "racêmica, sempre opticamente ativa",
      "cis, característica de ligações duplas",
      "meso, opticamente inativa apesar de conter carbonos assimétricos",
      "trans, característica de estruturas cíclicas",
      "aromática, por conter anéis benzênicos",
    ],
    correta: 2,
    explicacao:
      "A forma meso ocorre quando uma molécula com múltiplos carbonos assimétricos tem um plano interno de simetria que torna sua imagem especular sobreponível a ela mesma, cancelando a atividade óptica apesar da presença de centros quirais — o ácido meso-tartárico é justamente esse caso especial. A mistura racêmica, por contraste, é uma combinação de quantidades iguais dos dois enantiômeros de um composto, também opticamente inativa, mas por um mecanismo diferente: o cancelamento mútuo entre as duas formas presentes.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação de fermentação da glicose por leveduras, C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂, um processo biológico usado há milênios na produção de bebidas alcoólicas e na fabricação de pão. Essa transformação de um açúcar em etanol e gás carbônico é classificada, quanto ao tipo geral de reação orgânica, como uma reação de:",
    opcoes: [
      "adição simples de hidrogênio",
      "substituição de um grupo hidroxila",
      "neutralização entre ácido e base",
      "decomposição biológica, catalisada por enzimas das leveduras",
      "eletrólise induzida por corrente elétrica",
    ],
    correta: 3,
    explicacao:
      "A fermentação alcoólica quebra a molécula relativamente complexa da glicose em moléculas mais simples (etanol e CO₂), um processo de decomposição bioquímica mediado por enzimas presentes nas leveduras, que atuam como catalisadores biológicos dessa reação. É esse mesmo CO₂ liberado que faz o pão crescer durante a fermentação da massa.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa dois compostos: o ácido acético (CH₃COOH) e o formiato de metila (HCOOCH₃), ambos de fórmula molecular C₂H₄O₂. Como o ácido acético pertence à função ácido carboxílico e o formiato de metila pertence à função éster, esse par de compostos exemplifica a isomeria de:",
    opcoes: [
      "posição",
      "cadeia",
      "compensação",
      "função",
      "óptica",
    ],
    correta: 3,
    explicacao:
      "Como os dois compostos pertencem a funções orgânicas diferentes (ácido carboxílico e éster) apesar de compartilharem a mesma fórmula molecular C₂H₄O₂, essa é classificada como isomeria de função, o mesmo tipo observado entre álcoois e éteres de mesma fórmula.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "Dois compostos de mesma fórmula molecular C₅H₁₂ são o pentano, de cadeia normal, e o 2-metilbutano, de cadeia ramificada. Esse par de isômeros é classificado como isomeria de:",
    opcoes: [
      "posição",
      "função",
      "compensação",
      "cadeia",
      "óptica",
    ],
    correta: 3,
    explicacao:
      "Como os dois compostos são hidrocarbonetos saturados (mesma função) e diferem apenas no formato da cadeia, um normal e outro ramificado, essa é uma isomeria de cadeia, o tipo mais simples de isomeria plana.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "Uma reação em que um átomo de hidrogênio de um alcano é trocado por um átomo de cloro, na presença de luz, é chamada de halogenação. Esse tipo de reação, em que um átomo substitui outro sem alterar o esqueleto da molécula, é classificado como reação de:",
    opcoes: [
      "adição",
      "eliminação",
      "polimerização",
      "substituição",
      "neutralização",
    ],
    correta: 3,
    explicacao:
      "Como um átomo de hidrogênio é trocado diretamente por um átomo de cloro, sem que o número de ligações do carbono se altere, essa é uma reação de substituição, típica de hidrocarbonetos saturados como os alcanos.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa dois compostos de fórmula molecular C₄H₁₀O: o butan-1-ol e o butan-2-ol, ambos álcoois, diferindo apenas na posição da hidroxila na cadeia. Esse par de isômeros é classificado como isomeria de:",
    opcoes: [
      "cadeia",
      "função",
      "compensação",
      "posição",
      "óptica",
    ],
    correta: 3,
    explicacao:
      "Como os dois compostos pertencem à mesma função (álcool) e têm o mesmo tipo de cadeia, diferindo apenas na posição da hidroxila (carbono 1 ou carbono 2), essa é uma isomeria de posição.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "A reação de bromação do eteno, CH₂=CH₂ + Br₂ → CH₂Br-CH₂Br, ocorre quando uma molécula de bromo se soma à ligação dupla do eteno, transformando-a em ligação simples. Esse tipo de reação é classificado como:",
    opcoes: [
      "substituição",
      "eliminação",
      "combustão",
      "adição",
      "neutralização",
    ],
    correta: 3,
    explicacao:
      "Como os átomos de bromo se adicionam diretamente aos dois carbonos da ligação dupla, rompendo-a e transformando-a em ligação simples, essa é uma reação de adição, típica de hidrocarbonetos insaturados como o eteno. Esse tipo de reação, inclusive, é usado como teste laboratorial para identificar a presença de insaturações: a coloração avermelhada do bromo desaparece ao reagir.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a estrutura do 2-bromobutano, CH₃-CHBr-CH₂-CH₃, e verifica que o segundo carbono está ligado a quatro grupos diferentes entre si: hidrogênio, bromo, metila e etila. Essa molécula, por apresentar um carbono ligado a quatro grupos distintos, é capaz de apresentar isomeria:",
    opcoes: [
      "de cadeia",
      "de função",
      "de posição",
      "óptica",
      "geométrica",
    ],
    correta: 3,
    explicacao:
      "Como o segundo carbono é um centro quiral, ligado a quatro grupos diferentes (H, Br, CH₃ e CH₂CH₃), a molécula pode existir em duas formas espaciais que são imagens especulares uma da outra, caracterizando isomeria óptica. A isomeria geométrica, por contraste, exigiria uma ligação dupla ou anel que restringisse a rotação, o que não está presente nessa estrutura saturada.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante compara o but-2-eno em suas duas formas geométricas possíveis. Na forma cis, os dois grupos metila ficam do mesmo lado da ligação dupla; na forma trans, ficam em lados opostos. Essa impossibilidade de uma forma se converter espontaneamente na outra, à temperatura ambiente, se deve ao fato de que:",
    opcoes: [
      "os dois compostos têm fórmulas moleculares diferentes",
      "um dos dois compostos não existe de fato na natureza",
      "a ligação dupla permite rotação livre entre os carbonos",
      "a ligação dupla impede a livre rotação entre os carbonos que a formam",
      "os grupos metila estão ausentes em uma das formas",
    ],
    correta: 3,
    explicacao:
      "Ao contrário das ligações simples, que permitem rotação livre entre os átomos, a ligação dupla mantém os átomos ligados a ela fixos em um plano, impedindo a rotação e travando a posição relativa dos grupos metila — é essa restrição estrutural que torna as formas cis e trans compostos estáveis e distintos, e não a mesma substância em movimento constante.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a reação de desidrogenação do etano, CH₃CH₃ → CH₂=CH₂ + H₂, na qual dois átomos de hidrogênio são removidos da molécula, formando uma ligação dupla entre os carbonos. Esse tipo de reação, o inverso da hidrogenação, é classificado como uma reação de:",
    opcoes: [
      "adição",
      "substituição",
      "combustão",
      "eliminação",
      "neutralização",
    ],
    correta: 3,
    explicacao:
      "Como átomos são removidos da molécula para formar uma nova ligação dupla onde antes havia apenas ligação simples, essa reação se enquadra na categoria de eliminação, o mesmo tipo de transformação observado na desidratação de álcoois. A hidrogenação, reação inversa, seria uma adição, somando hidrogênio à ligação dupla para formar o etano novamente.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador de fármacos avalia dois enantiômeros de uma nova molécula candidata a medicamento, identificados como forma R e forma S. Testes mostram que apenas a forma S tem o efeito terapêutico desejado, enquanto a forma R é inativa. Essa situação, comum no desenvolvimento farmacêutico, evidencia por que a indústria farmacêutica investe em técnicas de síntese que produzam:",
    opcoes: [
      "misturas iguais dos dois enantiômeros, sem qualquer preferência",
      "apenas isômeros de cadeia, ignorando a isomeria óptica",
      "compostos sem qualquer carbono assimétrico em sua estrutura",
      "exclusivamente compostos aromáticos, evitando cadeias saturadas",
      "apenas o enantiômero desejado, evitando misturas racêmicas com o isômero inativo ou nocivo",
    ],
    correta: 4,
    explicacao:
      "Como enantiômeros podem ter efeitos biológicos completamente diferentes — desde inatividade até efeitos tóxicos, como no caso histórico da talidomida —, a síntese seletiva de apenas um enantiômero, chamada de síntese assimétrica, é uma área de grande interesse farmacêutico para garantir eficácia e segurança do medicamento final, evitando misturas racêmicas desnecessárias.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação de nitração do benzeno, C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O, na qual um átomo de hidrogênio do anel aromático é substituído por um grupo nitro. Apesar de o benzeno conter ligações duplas alternadas em sua estrutura, essa reação ocorre por substituição, e não por adição, porque:",
    opcoes: [
      "o benzeno não possui nenhuma ligação dupla em sua estrutura",
      "reações de adição são impossíveis em qualquer composto orgânico",
      "o ácido nítrico nunca reage com hidrocarbonetos",
      "o benzeno é, na verdade, um composto saturado comum",
      "a estabilidade especial do anel aromático torna a substituição mais favorável, preservando a aromaticidade",
    ],
    correta: 4,
    explicacao:
      "A deslocalização dos elétrons no anel aromático confere ao benzeno uma estabilidade extra (energia de ressonância) que reações de adição destruiriam; por isso, o anel tende a reagir preferencialmente por substituição, que mantém essa estrutura aromática estável no produto final. Esse comportamento diferencia claramente os hidrocarbonetos aromáticos dos alcenos comuns, que reagem prontamente por adição.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa dois compostos de fórmula molecular C₃H₆: o ciclopropano, de cadeia fechada e saturada, e o propeno, de cadeia aberta com uma ligação dupla. Comparando os dois compostos, é correto afirmar que essa relação de isomeria se classifica como:",
    opcoes: [
      "isomeria de posição, pois têm a mesma cadeia com grupos em posições diferentes",
      "isomeria de função, pois pertencem a funções orgânicas diferentes",
      "isomeria óptica, pois são imagens especulares um do outro",
      "não há isomeria entre eles, pois têm fórmulas diferentes",
      "isomeria de cadeia, pois um é cíclico saturado e o outro é aberto insaturado",
    ],
    correta: 4,
    explicacao:
      "Tanto o anel fechado do ciclopropano quanto a ligação dupla do propeno resultam na mesma fórmula molecular C₃H₆ (ambos 'economizam' dois hidrogênios em relação ao propano saturado, um por meio do ciclo e o outro por meio da insaturação), e essa diferença estrutural entre um composto cíclico e um de cadeia aberta com insaturação é tratada como isomeria de cadeia dentro da classificação de hidrocarbonetos.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante realiza a reação de desidratação intramolecular do etanol, catalisada por ácido sulfúrico concentrado e aquecimento, obtendo eteno e água como produtos: CH₃CH₂OH → CH₂=CH₂ + H₂O. Essa reação é industrialmente relevante porque permite produzir:",
    opcoes: [
      "um novo álcool de cadeia maior que o etanol original",
      "diretamente o polietileno, sem etapas intermediárias",
      "gás metano puro, sem qualquer subproduto",
      "ácido acético, por oxidação direta do etanol",
      "um importante alceno de partida para a indústria de plásticos, a partir de uma fonte renovável como o etanol",
    ],
    correta: 4,
    explicacao:
      "O eteno obtido por essa desidratação pode ser polimerizado para formar o polietileno e outros plásticos, e como o etanol pode ser produzido a partir da fermentação da cana-de-açúcar, essa rota oferece uma alternativa renovável ao eteno tradicionalmente obtido do petróleo — é a base do chamado 'plástico verde' produzido no Brasil.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa três compostos de fórmula molecular C₃H₈O: o propan-1-ol, o propan-2-ol e o metóxi-etano (éter metil-etílico, CH₃-O-CH₂CH₃). Comparando essas três estruturas, é correto afirmar que:",
    opcoes: [
      "os três compostos são isômeros de cadeia entre si",
      "os três compostos pertencem exatamente à mesma função orgânica",
      "apenas o éter e o propan-1-ol compartilham a mesma fórmula molecular",
      "não existe qualquer relação de isomeria entre os três compostos",
      "propan-1-ol e propan-2-ol são isômeros de posição entre si, e ambos são isômeros de função em relação ao éter",
    ],
    correta: 4,
    explicacao:
      "Propan-1-ol e propan-2-ol pertencem à mesma função (álcool) e diferem apenas na posição da hidroxila, caracterizando isomeria de posição entre si; qualquer um dos dois, comparado ao éter metil-etílico, pertence a uma função diferente (álcool versus éter), caracterizando isomeria de função. É esse tipo de análise combinada, comparando pares de compostos por vez, que permite identificar corretamente múltiplas relações de isomeria dentro de um mesmo grupo de substâncias.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "A reação de saponificação, usada na fabricação artesanal e industrial de sabão, ocorre entre um éster (a gordura ou óleo) e uma base forte, como o hidróxido de sódio, produzindo sabão e glicerol. Essa reação de quebra do éster pela ação de uma base é classificada como uma reação de:",
    opcoes: [
      "adição simples",
      "combustão completa",
      "halogenação",
      "polimerização",
      "hidrólise básica (saponificação)",
    ],
    correta: 4,
    explicacao:
      "Na saponificação, a base forte rompe a ligação éster da gordura, liberando o sal do ácido graxo (o sabão propriamente dito) e o glicerol como subproduto — um caso específico de hidrólise de éster catalisada por base, daí o nome alternativo hidrólise básica ou alcalina. É essa reação milenar que transforma óleos e gorduras em sabão utilizável para limpeza.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa dois compostos: o ácido propanoico (CH₃CH₂COOH) e o propanoato de metila (CH₃CH₂COOCH₃), que resulta da reação entre o ácido propanoico e o metanol. A diferença de fórmula molecular entre os dois compostos, o segundo tendo um grupo CH₂ a mais, indica que, ao contrário dos exemplos de isomeria vistos anteriormente, essa relação:",
    opcoes: [
      "é um caso de isomeria de função, apesar da diferença de fórmula",
      "é um caso de isomeria de posição entre os dois compostos",
      "é um caso de isomeria de cadeia entre os dois compostos",
      "é um caso de isomeria óptica entre os dois compostos",
      "não é um caso de isomeria, pois as fórmulas moleculares dos dois compostos são diferentes",
    ],
    correta: 4,
    explicacao:
      "A condição fundamental para que dois compostos sejam considerados isômeros é compartilhar exatamente a mesma fórmula molecular; como o propanoato de metila tem um átomo de carbono a mais que o ácido propanoico, os dois não são isômeros entre si, apesar de estarem quimicamente relacionados pela reação de esterificação. Esse é um lembrete importante de que nem toda relação estrutural entre compostos parecidos configura isomeria.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação de craqueamento catalítico, usada em refinarias de petróleo para quebrar hidrocarbonetos de cadeia longa, presentes em frações pesadas, em hidrocarbonetos de cadeia menor, mais valiosos como combustíveis. Esse processo industrial é classificado, quanto ao tipo geral de reação, como uma reação de:",
    opcoes: [
      "síntese, unindo moléculas pequenas em uma maior",
      "neutralização entre ácido e base",
      "eletrólise, usando corrente elétrica direta",
      "isomeria induzida sem quebra de ligações",
      "decomposição, quebrando moléculas grandes em moléculas menores",
    ],
    correta: 4,
    explicacao:
      "O craqueamento quebra as ligações carbono-carbono de hidrocarbonetos longos, transformando-os em moléculas menores e mais leves, como gasolina e GLP, o que caracteriza uma reação de decomposição em larga escala industrial. Esse processo é essencial para ajustar a proporção de produtos obtidos do petróleo bruto às necessidades do mercado de combustíveis.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "facil",
    enunciado:
      "Dois compostos orgânicos que apresentam a mesma fórmula molecular, mas fórmulas estruturais diferentes, são chamados de:",
    opcoes: [
      "isótopos",
      "isômeros",
      "isóbaros",
      "alótropos",
      "homólogos",
    ],
    correta: 1,
    explicacao:
      "Isômeros compartilham a mesma fórmula molecular (mesmos átomos e mesma quantidade de cada um), mas têm arranjos estruturais diferentes, o que lhes confere propriedades físicas ou químicas distintas. Isótopos, isóbaros e alótropos são conceitos relacionados a átomos de um mesmo elemento ou a formas diferentes de uma substância simples, não a moléculas orgânicas distintas.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "O etanol (CH₃CH₂OH) e o éter dimetílico (CH₃OCH₃) possuem ambos a fórmula molecular C₂H₆O, mas pertencem a funções orgânicas diferentes (álcool e éter, respectivamente). Esse tipo de isomeria, em que compostos de funções químicas distintas compartilham a mesma fórmula molecular, é classificado como isomeria plana de:",
    opcoes: [
      "cadeia",
      "posição",
      "função",
      "compensação",
      "tautomeria",
    ],
    correta: 2,
    explicacao:
      "A isomeria de função ocorre quando dois compostos com a mesma fórmula molecular pertencem a funções orgânicas diferentes, como no clássico par álcool/éter formado por etanol e éter dimetílico. Isomeria de cadeia, de posição e de compensação, por outro lado, ocorrem entre compostos da mesma função, diferindo apenas na estrutura do esqueleto carbônico ou na posição de um grupo.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "O but-1-eno (CH₂=CH-CH₂-CH₃) e o but-2-eno (CH₃-CH=CH-CH₃) têm a mesma fórmula molecular, C₄H₈, e ambos são alcenos, mas diferem apenas na localização da dupla ligação ao longo da cadeia carbônica. Esse tipo de isomeria é classificado como isomeria de:",
    opcoes: [
      "posição",
      "função",
      "cadeia",
      "compensação",
      "espacial geométrica",
    ],
    correta: 0,
    explicacao:
      "A isomeria de posição ocorre quando os compostos pertencem à mesma função química e têm a mesma cadeia carbônica principal, mas diferem na posição de uma insaturação, de um grupo funcional ou de uma ramificação — exatamente o caso da dupla ligação que muda de posição entre o but-1-eno e o but-2-eno.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "O but-2-eno pode existir em duas formas com propriedades físicas diferentes (pontos de fusão e ebulição distintos): o isômero cis-but-2-eno, no qual os dois grupos metila estão do mesmo lado da dupla ligação, e o isômero trans-but-2-eno, no qual estão em lados opostos. Essa diferença exemplifica a isomeria:",
    opcoes: [
      "de cadeia",
      "de posição",
      "de função",
      "geométrica (cis-trans)",
      "de compensação",
    ],
    correta: 3,
    explicacao:
      "A isomeria geométrica, ou cis-trans, ocorre em compostos com dupla ligação (ou anéis) que impedem a livre rotação, criando dois arranjos espaciais distintos conforme grupos semelhantes estejam do mesmo lado (cis) ou em lados opostos (trans) da dupla ligação. Diferentemente das isomerias planas, aqui a fórmula estrutural plana é a mesma; o que muda é a disposição espacial dos átomos.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "media",
    enunciado:
      "Uma reação de adição em química orgânica é caracterizada por:",
    opcoes: [
      "quebrar uma molécula grande em moléculas menores",
      "trocar um átomo ou grupo de uma molécula por outro, liberando um subproduto",
      "reorganizar os átomos de uma molécula sem alterar sua fórmula molecular",
      "sempre envolver a quebra de um anel aromático",
      "duas ou mais moléculas se combinarem em uma só, sem eliminar nenhum átomo",
    ],
    correta: 4,
    explicacao:
      "Nas reações de adição, típicas de compostos com ligações duplas ou triplas como alcenos e alcinos, duas moléculas se combinam formando um único produto, sem que nenhum átomo seja eliminado — como na adição de H₂ ou de um halogênio a uma dupla ligação, que se transforma em ligação simples.",
  },
  {
    materia: "quimica",
    tema: "Isomeria e reações orgânicas",
    dificuldade: "dificil",
    enunciado:
      "Em uma reação de substituição em um alcano, como a halogenação do metano (CH₄ + Cl₂ → CH₃Cl + HCl) sob luz ultravioleta, um átomo de hidrogênio da cadeia é trocado por um átomo de cloro, liberando ácido clorídrico como subproduto. Esse tipo de reação, típico de hidrocarbonetos saturados, é chamado de reação de:",
    opcoes: [
      "adição",
      "eliminação",
      "condensação",
      "polimerização",
      "substituição",
    ],
    correta: 4,
    explicacao:
      "Nas reações de substituição, um átomo ou grupo da molécula original é trocado por outro átomo ou grupo, com liberação de um subproduto — nesse caso, um hidrogênio do metano é substituído por cloro, liberando HCl. Alcanos, por serem saturados e não terem ligações múltiplas disponíveis para adição, reagem preferencialmente por substituição, e não por adição.",
  },
];
