/* Ligações químicas e geometria molecular (50 questões).
   Ligação iônica, covalente e metálica, regra do octeto, polaridade,
   geometria molecular (VSEPR), forças intermoleculares e propriedades físicas.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "A ligação química formada pela transferência definitiva de elétrons de um átomo metálico para um átomo ametálico é classificada como:",
    opcoes: [
      "ligação iônica",
      "ligação covalente apolar",
      "ligação covalente polar",
      "ligação metálica",
      "ligação de hidrogênio",
    ],
    correta: 0,
    explicacao:
      "Na ligação iônica um átomo cede e outro recebe elétrons de forma definitiva, gerando um cátion e um ânion que se atraem eletrostaticamente, como no cloreto de sódio. Nas ligações covalentes os elétrons são compartilhados, não transferidos.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "Quando dois átomos de cloro se unem para formar a molécula Cl₂, o tipo de ligação envolvida é a:",
    opcoes: [
      "covalente, por compartilhamento de elétrons",
      "iônica, por transferência de elétrons",
      "metálica, por deslocalização de elétrons",
      "de hidrogênio, por atração dipolo-dipolo",
      "dativa, por doação de um par isolado",
    ],
    correta: 0,
    explicacao:
      "Dois ametais idênticos têm a mesma tendência de atrair elétrons, então nenhum cede definitivamente: eles compartilham um par eletrônico. Ligação iônica exige diferença grande de eletronegatividade, o que não ocorre entre átomos iguais.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "A regra do octeto estabelece que os átomos tendem a ganhar, perder ou compartilhar elétrons até atingir estabilidade. Essa estabilidade corresponde, na maioria dos casos, a:",
    opcoes: [
      "oito elétrons na camada de valência",
      "oito elétrons no núcleo do átomo",
      "oito prótons na camada de valência",
      "oito camadas eletrônicas completas",
      "oito nêutrons adicionais no núcleo",
    ],
    correta: 0,
    explicacao:
      "A referência é a configuração dos gases nobres, que têm oito elétrons na última camada (exceto o hélio, com dois). O núcleo não recebe elétrons, e a regra trata da eletrosfera, não da quantidade de camadas do átomo.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "Os metais, no estado sólido, são descritos por um modelo em que os elétrons de valência circulam livremente entre os cátions do retículo cristalino. Esse modelo é conhecido como:",
    opcoes: [
      "mar de elétrons",
      "octeto expandido",
      "ligação de hidrogênio",
      "par isolado dativo",
      "ressonância eletrônica",
    ],
    correta: 0,
    explicacao:
      "No mar de elétrons, os elétrons de valência não pertencem a um átomo específico, o que explica a condutividade elétrica, o brilho e a maleabilidade dos metais. Ligação de hidrogênio e par dativo são conceitos de ligações covalentes, não metálicas.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "Substâncias iônicas, como o cloreto de sódio, apresentam altos pontos de fusão e ebulição quando comparadas a substâncias moleculares. A explicação para essa característica é que:",
    opcoes: [
      "os íons se atraem fortemente por forças eletrostáticas em toda a rede cristalina",
      "as moléculas iônicas têm massa muito maior que as moleculares",
      "os elétrons dos íons vibram menos que os das moléculas",
      "os compostos iônicos não possuem qualquer tipo de ligação química",
      "a temperatura ambiente já é suficiente para romper ligações iônicas",
    ],
    correta: 0,
    explicacao:
      "Cada íon é atraído por vários vizinhos de carga oposta, formando uma rede tridimensional muito estável; romper essa estrutura exige bastante energia térmica. Substâncias moleculares, unidas por forças intermoleculares mais fracas, fundem e evaporam com muito mais facilidade.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "Uma molécula é considerada polar quando existe uma distribuição desigual de cargas elétricas em sua estrutura. Um exemplo típico de molécula polar é a de:",
    opcoes: [
      "água (H₂O)",
      "gás carbônico (CO₂)",
      "gás metano (CH₄)",
      "gás nitrogênio (N₂)",
      "tetracloreto de carbono (CCl₄)",
    ],
    correta: 0,
    explicacao:
      "A água tem geometria angular, e os dois pares de elétrons isolados no oxigênio impedem que os dipolos das ligações O–H se cancelem, resultando em polaridade líquida. CO₂, CH₄, N₂ e CCl₄ têm geometrias simétricas que anulam os dipolos das ligações.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "Na molécula de gás nitrogênio (N₂), os dois átomos compartilham três pares de elétrons entre si. Esse tipo de ligação é classificado como:",
    opcoes: [
      "ligação covalente tripla",
      "ligação covalente simples",
      "ligação covalente dupla",
      "ligação iônica tripla",
      "ligação metálica tripla",
    ],
    correta: 0,
    explicacao:
      "Compartilhar três pares de elétrons corresponde a uma ligação tripla, muito forte e responsável pela baixa reatividade do N₂ em condições normais. Ligação iônica não se qualifica por número de pares compartilhados, já que nela não há compartilhamento.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "A fórmula estrutural da amônia é NH₃, com o nitrogênio central ligado a três átomos de hidrogênio e um par de elétrons isolado. A geometria molecular dessa substância, segundo o modelo VSEPR, é:",
    opcoes: [
      "piramidal",
      "linear",
      "trigonal plana",
      "tetraédrica",
      "angular",
    ],
    correta: 0,
    explicacao:
      "O par isolado ocupa uma das quatro regiões ao redor do nitrogênio, empurrando os três hidrogênios para baixo do vértice e formando uma pirâmide de base triangular. A tetraédrica seria a geometria caso todas as quatro regiões tivessem átomos, como no metano.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "O modelo da repulsão dos pares eletrônicos da camada de valência, conhecido pela sigla VSEPR, prevê a geometria de uma molécula com base no princípio de que os pares de elétrons ao redor do átomo central:",
    opcoes: [
      "se distribuem no espaço de modo a minimizar a repulsão entre si",
      "se atraem mutuamente, aproximando-se ao máximo",
      "permanecem sempre no mesmo plano da molécula",
      "não influenciam o formato da molécula",
      "se anulam completamente, deixando a molécula sem geometria definida",
    ],
    correta: 0,
    explicacao:
      "Pares eletrônicos, ligantes ou isolados, têm carga negativa e se repelem, então o arranjo mais estável é aquele que os mantém o mais afastados possível. É esse princípio geométrico simples que prevê corretamente formas como a tetraédrica e a angular.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "Entre as opções a seguir, a que representa corretamente uma ligação covalente apolar é a formada:",
    opcoes: [
      "entre dois átomos do mesmo elemento, como em H₂",
      "entre um metal e um ametal, como em NaCl",
      "entre dois elementos de eletronegatividades muito diferentes",
      "entre um cátion e um ânion",
      "por deslocalização de elétrons em uma rede metálica",
    ],
    correta: 0,
    explicacao:
      "Quando os dois átomos são idênticos, a eletronegatividade é igual e o par de elétrons fica compartilhado sem deslocamento de carga, gerando ligação apolar. Diferenças grandes de eletronegatividade produzem ligação iônica, e diferenças moderadas produzem covalente polar.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "A molécula de dióxido de carbono, CO₂, apresenta duas ligações duplas entre o carbono central e os átomos de oxigênio, dispostas em linha reta. Apesar de cada ligação C=O ser polar, a molécula como um todo é apolar porque:",
    opcoes: [
      "o carbono não possui eletronegatividade suficiente para polarizar a ligação",
      "os dois vetores dipolo têm mesma intensidade e sentidos opostos, cancelando-se",
      "o oxigênio perde completamente seus elétrons para o carbono",
      "a geometria angular da molécula anula as cargas",
      "não existem pares de elétrons isolados no carbono",
    ],
    correta: 1,
    explicacao:
      "Como a molécula é linear e simétrica, os dois dipolos de ligação apontam em direções opostas com a mesma magnitude, resultando em momento dipolar total nulo. A geometria do CO₂ é linear, não angular — a angular é característica da água, que tem par isolado no átomo central.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O metano, CH₄, tem o átomo de carbono central ligado a quatro hidrogênios, sem pares de elétrons isolados no carbono. A geometria molecular resultante, com ângulos de ligação de aproximadamente 109,5°, é chamada de:",
    opcoes: [
      "quadrada plana",
      "tetraédrica",
      "piramidal",
      "trigonal plana",
      "octaédrica",
    ],
    correta: 1,
    explicacao:
      "Quatro pares ligantes ao redor de um átomo central, sem pares isolados, se afastam ao máximo formando um tetraedro regular. A geometria quadrada plana e a octaédrica exigem mais de quatro regiões de densidade eletrônica, o que não é o caso do carbono no metano.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Comparando as substâncias cloreto de sódio (sólido, conduz corrente quando fundido ou em solução) e açúcar comum (sólido, não conduz corrente em nenhuma condição), a diferença de comportamento elétrico se explica pelo fato de que:",
    opcoes: [
      "o açúcar possui mais elétrons livres que o sal",
      "o cloreto de sódio é composto por íons livres para se mover quando fundido, e o açúcar é formado por moléculas neutras",
      "o cloreto de sódio é uma substância molecular e o açúcar é iônico",
      "apenas substâncias sólidas conduzem eletricidade",
      "o açúcar se decompõe em íons ao ser dissolvido em água",
    ],
    correta: 1,
    explicacao:
      "A condução elétrica exige cargas livres para se mover; íons fundidos ou dissolvidos cumprem esse papel, mas moléculas neutras de sacarose não carregam carga líquida. É esse teste simples de condutividade que permite distinguir compostos iônicos de moleculares em laboratório.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Na molécula de água, cada átomo de hidrogênio se liga a um átomo de oxigênio muito mais eletronegativo, criando um forte dipolo permanente. Como consequência, moléculas de água vizinhas se atraem por meio de:",
    opcoes: [
      "ligações iônicas entre os átomos de oxigênio de moléculas diferentes",
      "ligações de hidrogênio, que elevam o ponto de ebulição da substância",
      "forças de London, exclusivas de moléculas apolares",
      "ligações covalentes entre moléculas distintas",
      "ligações metálicas, responsáveis pela fluidez do líquido",
    ],
    correta: 1,
    explicacao:
      "A ligação de hidrogênio ocorre quando H se liga a F, O ou N e interage com o par isolado de um átomo eletronegativo vizinho; é bem mais forte que outras forças intermoleculares e por isso a água ferve a 100 °C, valor alto para uma molécula tão leve. Forças de London existem em toda substância, mas são mais fracas e predominam em moléculas apolares.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O gás sulfeto de hidrogênio, H₂S, tem geometria molecular semelhante à da água, mas seu ponto de ebulição é muito menor. A explicação mais adequada para essa diferença é que:",
    opcoes: [
      "o H₂S tem geometria linear, ao contrário da água",
      "o enxofre é menos eletronegativo que o oxigênio, e o H₂S não forma ligações de hidrogênio significativas",
      "o enxofre é mais eletronegativo que o oxigênio",
      "o H₂S é um composto iônico, e a água é covalente",
      "as moléculas de H₂S têm massa molar menor que as de água",
    ],
    correta: 1,
    explicacao:
      "Sem eletronegatividade suficiente no enxofre, o hidrogênio do H₂S não forma ligações de hidrogênio fortes com moléculas vizinhas, restando apenas forças de van der Waals mais fracas. Isso explica por que o H₂S é gasoso à temperatura ambiente, enquanto a água, menor e mais leve, é líquida.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O íon amônio, NH₄⁺, se forma quando a amônia recebe um próton H⁺ usando o par de elétrons isolado do nitrogênio para formar a nova ligação. Esse tipo específico de ligação covalente é chamado de:",
    opcoes: [
      "ligação iônica simples",
      "ligação covalente dativa ou coordenada",
      "ligação covalente apolar",
      "ligação metálica",
      "ligação de hidrogênio",
    ],
    correta: 1,
    explicacao:
      "Na ligação dativa, um dos átomos fornece sozinho os dois elétrons do par compartilhado, enquanto o outro entra sem elétrons próprios — é o caso do H⁺, que chega sem nenhum elétron. Depois de formada, a ligação dativa é indistinguível de uma covalente comum.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O trifluoreto de boro, BF₃, é uma molécula em que o átomo de boro central se liga a três átomos de flúor sem apresentar par de elétrons isolado. A geometria molecular dessa substância é:",
    opcoes: [
      "piramidal",
      "trigonal plana",
      "angular",
      "tetraédrica",
      "linear",
    ],
    correta: 1,
    explicacao:
      "Três regiões de densidade eletrônica ao redor do átomo central, todas ligantes, se afastam ao máximo formando um triângulo plano com ângulos de 120°. O boro é uma exceção à regra do octeto, estabilizando-se com apenas seis elétrons na valência.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Diamante e grafite são formados exclusivamente por átomos de carbono ligados covalentemente entre si, mas o diamante é um dos materiais mais duros da natureza. A explicação para essa dureza está no fato de que, no diamante, cada átomo de carbono:",
    opcoes: [
      "está isolado, sem qualquer ligação com átomos vizinhos",
      "se liga covalentemente a outros quatro carbonos em uma rede tridimensional rígida",
      "se liga por forças de van der Waals apenas",
      "forma uma única camada bidimensional de átomos",
      "compartilha elétrons livres como em um metal",
    ],
    correta: 1,
    explicacao:
      "A rede covalente tridimensional do diamante distribui a tensão mecânica por toda a estrutura, exigindo enorme energia para quebrar ligações em qualquer direção. No grafite, os carbonos formam camadas planas que deslizam facilmente umas sobre as outras, o que o torna macio e usado como lubrificante.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Uma molécula de fórmula geral AX₂E₂, em que o átomo central A tem dois átomos ligantes X e dois pares de elétrons isolados E, apresenta geometria molecular:",
    opcoes: [
      "linear",
      "angular",
      "trigonal plana",
      "piramidal",
      "tetraédrica",
    ],
    correta: 1,
    explicacao:
      "Os quatro pares eletrônicos se organizam em tetraedro, mas como dois são pares isolados invisíveis na forma final, restam apenas os dois átomos ligantes, que aparecem dobrados em ângulo — é exatamente o caso da água, com fórmula H₂O. A forma linear exigiria zero pares isolados no arranjo de duas regiões.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Ao comparar as forças intermoleculares presentes no gás hélio (He) e no gás cloro (Cl₂), ambos apolares, é correto afirmar que essas substâncias interagem por meio de:",
    opcoes: [
      "ligações de hidrogênio, por conterem átomos pequenos",
      "forças de dispersão de London, originadas de dipolos instantâneos",
      "ligações iônicas entre as moléculas",
      "forças dipolo-dipolo permanentes",
      "ausência total de qualquer interação entre as moléculas",
    ],
    correta: 1,
    explicacao:
      "Mesmo em substâncias apolares, o movimento dos elétrons cria dipolos instantâneos que induzem dipolos nas moléculas vizinhas — é a força de London, presente em toda substância. Ela é mais fraca que dipolo-dipolo e ligação de hidrogênio, mas nunca é nula, senão gases nobres jamais poderiam ser liquefeitos.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Um átomo de fósforo forma o composto PCl₅, no qual cinco átomos de cloro se ligam ao fósforo central. Esse composto é um exemplo de exceção à regra do octeto conhecida como:",
    opcoes: [
      "octeto incompleto",
      "ligação dativa",
      "octeto expandido",
      "octeto duplicado",
      "regra do dueto",
    ],
    correta: 2,
    explicacao:
      "Elementos do terceiro período em diante, como o fósforo, podem acomodar mais de oito elétrons na valência usando orbitais d disponíveis, formando compostos como PCl₅ e SF₆. O octeto incompleto, ao contrário, descreve átomos como o boro, que ficam com menos de oito elétrons.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Analisando a escala de eletronegatividade de Pauling, quanto maior a diferença de eletronegatividade entre dois átomos ligados, mais polarizada tende a ser a ligação entre eles. Nesse sentido, a ligação mais polar entre as citadas é a que ocorre em:",
    opcoes: [
      "H₂, entre dois átomos de hidrogênio",
      "Cl₂, entre dois átomos de cloro",
      "HF, entre hidrogênio e flúor",
      "O₂, entre dois átomos de oxigênio",
      "N₂, entre dois átomos de nitrogênio",
    ],
    correta: 2,
    explicacao:
      "O flúor é o elemento mais eletronegativo da tabela, e a diferença entre ele e o hidrogênio é a maior entre as opções, tornando a ligação H–F fortemente polarizada. Ligações entre átomos idênticos, como H₂, Cl₂, O₂ e N₂, têm diferença de eletronegatividade nula e são apolares.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O gás carbônico dissolvido na água de um refrigerante não forma ligações químicas permanentes com as moléculas de água ao seu redor. A força responsável por manter esse gás temporariamente disperso no líquido é do tipo:",
    opcoes: [
      "iônica, entre os átomos de carbono e oxigênio da água",
      "covalente, formando uma nova substância estável",
      "dipolo induzido, entre a molécula apolar de CO₂ e o dipolo da água",
      "metálica, devido à presença de íons na bebida",
      "nuclear, decorrente da radioatividade do carbono",
    ],
    correta: 2,
    explicacao:
      "A molécula apolar de CO₂ não tem dipolo permanente, mas o campo elétrico da água polar induz nela um dipolo temporário, gerando uma atração fraca do tipo dipolo-dipolo induzido. É por isso que o gás escapa com facilidade quando a garrafa é aberta e a pressão cai.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa duas substâncias: uma sólida, quebradiça, que conduz corrente elétrica apenas fundida ou dissolvida; outra sólida, maleável, brilhante e que conduz corrente mesmo no estado sólido. Essas substâncias são, respectivamente, exemplos de sólido:",
    opcoes: [
      "molecular e iônico",
      "metálico e molecular",
      "iônico e metálico",
      "covalente e molecular",
      "iônico e covalente",
    ],
    correta: 2,
    explicacao:
      "Sólidos iônicos são duros e quebradiços porque o deslocamento de camadas aproxima cargas de mesmo sinal, que se repelem e racham o cristal; só conduzem com os íons livres para se mover. Sólidos metálicos são maleáveis porque o mar de elétrons permite que os cátions deslizem sem romper a coesão, e conduzem em qualquer estado físico sólido ou líquido.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Considerando a molécula de eteno, H₂C=CH₂, na qual os dois átomos de carbono compartilham dois pares de elétrons entre si, o tipo de ligação entre os carbonos e a geometria ao redor de cada carbono são, respectivamente:",
    opcoes: [
      "simples covalente e tetraédrica",
      "tripla covalente e linear",
      "dupla covalente e trigonal plana",
      "dupla iônica e angular",
      "simples iônica e piramidal",
    ],
    correta: 2,
    explicacao:
      "Cada carbono do eteno se liga a três grupos (dois hidrogênios e o outro carbono), sem pares isolados, formando geometria trigonal plana com ângulos próximos de 120°. A ligação dupla entre os carbonos é responsável pela rigidez que impede a rotação livre nessa parte da molécula.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O óxido de magnésio, MgO, apresenta ponto de fusão muito mais alto que o cloreto de sódio, NaCl, embora ambos sejam sólidos iônicos. A explicação mais adequada para essa diferença é que, no MgO:",
    opcoes: [
      "as ligações são covalentes, e não iônicas",
      "o magnésio é menos eletronegativo que o sódio",
      "os íons Mg²⁺ e O²⁻ têm cargas maiores, o que intensifica a atração eletrostática",
      "o oxigênio forma ligações de hidrogênio com o magnésio",
      "a massa molar do MgO é menor que a do NaCl",
    ],
    correta: 2,
    explicacao:
      "A força de atração eletrostática cresce com o produto das cargas dos íons, então cátions e ânions bivalentes, como Mg²⁺ e O²⁻, se atraem com força bem maior que os monovalentes Na⁺ e Cl⁻. Esse efeito domina sobre pequenas diferenças de tamanho iônico ao explicar pontos de fusão elevados.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O gás sulfeto de carbono, CS₂, tem estrutura análoga à do CO₂, com o carbono central ligado por duas ligações duplas aos átomos de enxofre. A geometria molecular e a polaridade dessa substância são, respectivamente:",
    opcoes: [
      "angular e polar",
      "linear e polar",
      "linear e apolar",
      "trigonal plana e apolar",
      "piramidal e polar",
    ],
    correta: 2,
    explicacao:
      "Sem pares isolados no carbono e com apenas duas regiões de ligação, a molécula se estende em linha reta, e a simetria cancela os dois dipolos S=C, resultando em molécula apolar. É o mesmo raciocínio geométrico aplicado ao CO₂, apenas trocando o oxigênio pelo enxofre.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Um professor afirma que 'toda molécula que contém ligações polares é necessariamente uma molécula polar'. Essa afirmação é:",
    opcoes: [
      "verdadeira, pois ligações polares sempre geram moléculas polares",
      "falsa, pois ligações polares não existem na natureza",
      "falsa, pois a geometria pode fazer os dipolos das ligações se cancelarem",
      "verdadeira apenas para moléculas com mais de três átomos",
      "falsa, pois apenas ligações iônicas produzem polaridade molecular",
    ],
    correta: 2,
    explicacao:
      "O CO₂ e o CCl₄ têm ligações individualmente polares, mas sua geometria simétrica faz os vetores dipolo se anularem, resultando em molécula apolar. A polaridade final depende tanto da diferença de eletronegatividade das ligações quanto da disposição espacial dos átomos.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O éter dietílico e o butanol têm massas molares próximas, mas o butanol tem ponto de ebulição significativamente maior. A principal razão para essa diferença é que o butanol, ao contrário do éter, possui:",
    opcoes: [
      "massa molar muito superior à do éter",
      "ligações iônicas em sua estrutura",
      "um grupo hidroxila capaz de formar ligações de hidrogênio entre suas próprias moléculas",
      "geometria molecular linear",
      "ausência total de forças intermoleculares",
    ],
    correta: 2,
    explicacao:
      "A hidroxila do álcool tem hidrogênio ligado a oxigênio, formando ligações de hidrogênio fortes entre moléculas vizinhas; no éter, o oxigênio não está ligado a hidrogênio, restando apenas forças dipolo-dipolo mais fracas. É por isso que álcoois costumam ferver em temperatura mais alta que éteres de massa comparável.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Ao se fundir um metal como o ferro, a corrente elétrica continua sendo conduzida tanto no estado sólido quanto no líquido. Essa propriedade se explica porque a ligação metálica:",
    opcoes: [
      "se transforma em ligação iônica ao fundir o metal",
      "desaparece completamente no estado líquido",
      "exige que os átomos estejam fixos em posições exatas para conduzir",
      "não depende de um arranjo cristalino rígido, apenas da presença de elétrons livres entre os cátions",
      "só existe em temperaturas abaixo do ponto de fusão",
    ],
    correta: 3,
    explicacao:
      "Os elétrons deslocalizados continuam livres para se mover mesmo quando a rede cristalina se desfaz na fusão, o que preserva a condutividade. Isso contrasta com sólidos iônicos, que só conduzem quando fundidos ou dissolvidos, pois no sólido os íons estão presos ao retículo.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "A molécula de SO₃ apresenta o enxofre central ligado a três átomos de oxigênio por ligações duplas, sem pares isolados no enxofre. A geometria e a polaridade dessa molécula são, respectivamente:",
    opcoes: [
      "piramidal e polar",
      "angular e apolar",
      "tetraédrica e polar",
      "trigonal plana e apolar",
      "linear e apolar",
    ],
    correta: 3,
    explicacao:
      "Três regiões ligantes e simetricamente distribuídas a 120° cancelam os dipolos individuais das ligações S=O, tornando a molécula apolar apesar das ligações polares. Já o SO₂, com um par isolado no enxofre, tem geometria angular e é polar — o par isolado quebra a simetria que existia no SO₃.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O flúor forma com o hidrogênio a molécula HF, cujo ponto de ebulição, cerca de 20 °C, é anormalmente alto para uma molécula tão pequena, quando comparado aos demais haletos de hidrogênio (HCl, HBr, HI). A explicação está na:",
    opcoes: [
      "presença de ligação iônica entre H e F",
      "massa molar elevada do flúor em relação aos outros halogênios",
      "ausência de qualquer força intermolecular no HF",
      "formação de ligações de hidrogênio entre as moléculas de HF",
      "geometria tetraédrica exclusiva da molécula de HF",
    ],
    correta: 3,
    explicacao:
      "O flúor é eletronegativo o bastante para que o hidrogênio ligado a ele forme ligações de hidrogênio com moléculas vizinhas, força bem mais intensa que as dipolo-dipolo comuns do HCl, HBr e HI. Isso rompe a tendência esperada de que o ponto de ebulição cresça suavemente com a massa molar ao longo da família.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Uma molécula do tipo AX₃E, com três átomos ligantes e um par de elétrons isolado no átomo central, apresenta ângulos de ligação levemente menores que 109,5°. Essa redução do ângulo, em relação ao tetraedro perfeito, ocorre porque:",
    opcoes: [
      "os átomos ligantes se atraem mutuamente, encolhendo o ângulo",
      "a molécula perde um elétron durante a formação da ligação",
      "o par isolado se transforma em um novo átomo ligante",
      "o par de elétrons isolado ocupa mais espaço e repele os pares ligantes com mais força",
      "a temperatura ambiente distorce permanentemente a geometria",
    ],
    correta: 3,
    explicacao:
      "Pares isolados ficam mais próximos do núcleo e ocupam mais volume angular que pares ligantes, empurrando estes últimos para mais perto uns dos outros. É por isso que o ângulo H–N–H na amônia, cerca de 107°, é um pouco menor que o ângulo ideal do tetraedro.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O íon sulfato, SO₄²⁻, apresenta o enxofre central ligado a quatro átomos de oxigênio, todos equivalentes por ressonância. A geometria desse íon poliatômico é:",
    opcoes: [
      "trigonal plana",
      "angular",
      "piramidal",
      "tetraédrica",
      "linear",
    ],
    correta: 3,
    explicacao:
      "Quatro regiões de ligação ao redor do enxofre, sem pares isolados relevantes na estrutura de ressonância média, se organizam em tetraedro, com os quatro oxigênios equidistantes do centro. Esse mesmo padrão geométrico aparece no fosfato e no perclorato, também de fórmula AX₄.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "Um composto apresenta fórmula geral AX₅, sem pares de elétrons isolados no átomo central, como o pentacloreto de fósforo. A geometria molecular esperada para esse arranjo é:",
    opcoes: [
      "tetraédrica",
      "octaédrica",
      "trigonal plana",
      "bipiramidal trigonal",
      "angular",
    ],
    correta: 3,
    explicacao:
      "Cinco regiões de ligação, todas ocupadas por átomos, se distribuem formando uma bipirâmide de base triangular, com três posições equatoriais e duas axiais. A geometria octaédrica, por sua vez, corresponde a seis regiões de ligação ao redor do átomo central.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "O íon ClO₃⁻ tem o cloro central ligado a três átomos de oxigênio e possui um par de elétrons isolado no cloro. A geometria molecular e o ângulo de ligação aproximado desse íon são, respectivamente:",
    opcoes: [
      "trigonal plana, de 120°",
      "linear, de 180°",
      "tetraédrica, de 109,5°",
      "piramidal, próximo de 107°",
      "angular, de 104,5°",
    ],
    correta: 3,
    explicacao:
      "As quatro regiões eletrônicas (três ligações e um par isolado) formam um arranjo tetraédrico de base, mas o par isolado invisível na forma final deixa os três oxigênios em disposição piramidal, com ângulo reduzido pela repulsão extra do par isolado — padrão análogo ao da amônia.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Um composto hipotético AB apresenta diferença de eletronegatividade de 3,0 entre os átomos A e B, valor considerado alto na escala de Pauling. Quanto ao caráter da ligação formada, é correto afirmar que ela é:",
    opcoes: [
      "puramente covalente, pois toda ligação com diferença de eletronegatividade é covalente",
      "metálica, pois grandes diferenças de eletronegatividade geram mar de elétrons",
      "inexistente, pois diferenças tão altas impedem qualquer ligação",
      "predominantemente iônica, embora nenhuma ligação seja 100% iônica",
      "covalente apolar, já que a diferença de eletronegatividade não importa",
    ],
    correta: 3,
    explicacao:
      "Diferenças de eletronegatividade muito grandes (tipicamente acima de 1,7) indicam ligação de caráter predominantemente iônico, embora sempre exista alguma parcela de compartilhamento eletrônico — por isso se diz 'caráter iônico', não iônica pura. Esse é o critério usado para prever se um par de elementos formará um composto mais próximo do modelo iônico ou covalente.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "O íon XeF₄ é uma molécula estável do gás nobre xenônio, contrariando a ideia de que gases nobres nunca formam compostos. Nessa molécula, o xenônio central apresenta quatro átomos ligantes e dois pares de elétrons isolados, resultando em geometria molecular:",
    opcoes: [
      "tetraédrica",
      "octaédrica",
      "bipiramidal trigonal",
      "quadrada plana",
      "linear",
    ],
    correta: 3,
    explicacao:
      "As seis regiões eletrônicas (quatro ligantes e dois pares isolados) se organizam em octaedro; os dois pares isolados ficam em posições opostas para minimizar repulsão, deixando os quatro átomos de flúor dispostos em um quadrado plano ao redor do xenônio. Esse é um dos exemplos clássicos que mostram que gases nobres mais pesados podem, sim, formar ligações.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Um estudante compara os pontos de ebulição do neopentano e do pentano normal, isômeros de mesma fórmula molecular C₅H₁₂. O neopentano, mais compacto e esférico, tem ponto de ebulição menor que o pentano normal, de cadeia linear. A explicação mais adequada é que:",
    opcoes: [
      "o neopentano possui ligações de hidrogênio, e o pentano normal não",
      "o neopentano é iônico e o pentano normal é covalente",
      "a massa molar do neopentano é menor que a do pentano normal",
      "apenas moléculas polares apresentam forças de London",
      "a forma linear do pentano normal permite maior área de contato entre moléculas, intensificando as forças de London",
    ],
    correta: 4,
    explicacao:
      "Forças de London dependem da área de contato entre moléculas vizinhas: cadeias lineares se aproximam ao longo de toda a extensão, enquanto estruturas esféricas e compactas, como a do neopentano, oferecem menos superfície de contato. Ambos são hidrocarbonetos apolares de mesma massa molar, então a diferença vem exclusivamente da forma.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Ao formar o composto CaF₂, o cálcio perde dois elétrons para dois átomos de flúor, cada um recebendo um elétron. A proporção 1:2 entre cátions e ânions nesse composto iônico se justifica porque:",
    opcoes: [
      "o cálcio possui apenas um elétron de valência",
      "o flúor precisa perder um elétron para se estabilizar",
      "o cálcio forma sempre compostos com proporção 1:1",
      "o número de prótons do cálcio é o dobro do número de prótons do flúor",
      "a carga total positiva deve igualar a carga total negativa, mantendo o composto neutro",
    ],
    correta: 4,
    explicacao:
      "O cálcio forma Ca²⁺ e o flúor forma F⁻; para a carga total ser zero, são necessários dois ânions F⁻ para cada Ca²⁺, o que gera a fórmula CaF₂. Esse balanceamento de cargas, e não uma regra fixa de proporção, é o que determina a fórmula mínima de qualquer composto iônico.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "O íon PO₄³⁻ e a molécula neutra SF₆ apresentam, respectivamente, quatro e seis regiões de ligação ao redor do átomo central, sem pares isolados relevantes na estrutura final. As geometrias moleculares dessas duas espécies são, na ordem apresentada:",
    opcoes: [
      "trigonal plana e tetraédrica",
      "piramidal e bipiramidal trigonal",
      "angular e quadrada plana",
      "linear e octaédrica",
      "tetraédrica e octaédrica",
    ],
    correta: 4,
    explicacao:
      "Quatro regiões ligantes sem pares isolados formam tetraedro, como no fosfato; seis regiões ligantes sem pares isolados formam octaedro, como no hexafluoreto de enxofre, exemplo clássico de octeto expandido. O número de regiões eletrônicas, não a identidade do átomo central, é o que define a geometria de base.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Um composto apresenta fórmula molecular CH₂Cl₂, com o carbono central ligado a dois hidrogênios e dois cloros em geometria tetraédrica. Apesar de ter ligações C–H e C–Cl de polaridades diferentes, essa molécula é polar porque:",
    opcoes: [
      "toda molécula tetraédrica é obrigatoriamente polar",
      "o carbono é o átomo mais eletronegativo da molécula",
      "não existem ligações polares nessa estrutura",
      "a molécula possui pares de elétrons isolados no carbono",
      "a substituição parcial e assimétrica dos hidrogênios por cloros impede o cancelamento dos dipolos",
    ],
    correta: 4,
    explicacao:
      "Diferentemente do CCl₄, em que os quatro substituintes são idênticos e os dipolos se cancelam por simetria perfeita, aqui dois grupos são hidrogênio e dois são cloro, mais eletronegativo, o que deixa uma resultante de dipolo apontando para o lado dos cloros. O carbono não tem pares isolados: a geometria tetraédrica é regular, mas a distribuição de cargas não é simétrica.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "O ozônio, O₃, tem estrutura em que o átomo central de oxigênio se liga aos outros dois por ligações que, na média das estruturas de ressonância, têm ordem 1,5. A geometria molecular do ozônio e a razão para as duas ligações O–O serem equivalentes em comprimento são, respectivamente:",
    opcoes: [
      "linear; as ligações são simples e independentes",
      "trigonal plana; o oxigênio central não tem par isolado",
      "piramidal; o ozônio é um composto iônico",
      "tetraédrica; há quatro átomos de oxigênio na molécula",
      "angular; os elétrons estão deslocalizados por ressonância entre as duas ligações",
    ],
    correta: 4,
    explicacao:
      "O oxigênio central tem um par isolado, o que dobra a molécula em geometria angular, similar à da água mas com ângulo diferente por causa da ligação dupla parcial. A ressonância distribui a densidade eletrônica igualmente entre as duas ligações O–O, por isso ambas têm o mesmo comprimento, intermediário entre simples e dupla.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Comparando o ponto de fusão do óxido de sódio, Na₂O, e do óxido de alumínio, Al₂O₃, observa-se que o segundo funde a uma temperatura muito mais alta. Além da diferença de carga entre os cátions envolvidos, um segundo fator que reforça essa diferença é que, no Al₂O₃:",
    opcoes: [
      "as ligações são exclusivamente covalentes, mais fortes que as iônicas",
      "o alumínio forma ligações metálicas com o oxigênio",
      "o oxigênio perde elétrons para o alumínio, invertendo as cargas",
      "a massa molar determina isoladamente o ponto de fusão",
      "o menor raio iônico do alumínio aproxima mais os íons, intensificando a atração eletrostática",
    ],
    correta: 4,
    explicacao:
      "A energia reticular cresce tanto com o produto das cargas quanto com a proximidade dos íons: Al³⁺ tem carga maior e raio menor que Na⁺, e ambos os efeitos somados tornam a rede do Al₂O₃ muito mais coesa. É por isso que óxidos de metais trivalentes costumam ter pontos de fusão bem mais altos que os de metais alcalinos.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Ao se hibridizarem, os orbitais atômicos do carbono no metano se combinam formando quatro orbitais equivalentes, orientados para os vértices de um tetraedro. Essa hibridização é classificada como:",
    opcoes: [
      "sp²",
      "sp",
      "d²sp³",
      "sp³d",
      "sp³",
    ],
    correta: 4,
    explicacao:
      "Um orbital s e três orbitais p se misturam para formar quatro orbitais sp³ idênticos, cada um apontando para um vértice do tetraedro — o arranjo geométrico que minimiza a repulsão entre quatro pares de elétrons. A hibridização sp² produz geometria trigonal plana, e sp produz geometria linear.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "O íon SO₃²⁻ apresenta o enxofre central ligado a três átomos de oxigênio e um par de elétrons isolado no enxofre. Comparando esse íon com o íon SO₄²⁻, sem pares isolados no enxofre, a diferença de geometria entre eles é:",
    opcoes: [
      "SO₃²⁻ é tetraédrico e SO₄²⁻ é piramidal",
      "ambos são tetraédricos, pois têm o mesmo átomo central",
      "SO₃²⁻ é trigonal plana e SO₄²⁻ é octaédrico",
      "ambos são angulares, por conterem oxigênio",
      "SO₃²⁻ é piramidal e SO₄²⁻ é tetraédrico",
    ],
    correta: 4,
    explicacao:
      "O par isolado do enxofre no sulfito ocupa uma das quatro posições tetraédricas, deixando os três oxigênios em disposição piramidal — o mesmo padrão AX₃E da amônia. No sulfato, sem par isolado, as quatro regiões são todas ligantes e a geometria fecha em tetraedro regular.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Um professor propõe a seguinte generalização: 'quanto maior a diferença de eletronegatividade entre os átomos de uma molécula, maior será necessariamente o seu momento dipolar total'. Sobre essa afirmação, é correto dizer que ela é:",
    opcoes: [
      "verdadeira sempre, independentemente da forma da molécula",
      "falsa, pois eletronegatividade não influencia a polaridade das ligações",
      "verdadeira apenas para moléculas diatômicas",
      "falsa, pois toda molécula com diferença de eletronegatividade é apolar",
      "falsa em geral, pois o momento dipolar total depende também da geometria molecular",
    ],
    correta: 4,
    explicacao:
      "O CCl₄ tem ligações C–Cl bastante polares, com diferença de eletronegatividade considerável, mas sua simetria tetraédrica perfeita cancela os quatro dipolos, resultando em molécula apolar. A eletronegatividade define a polaridade de cada ligação individual; a geometria decide se essas polaridades se somam ou se anulam na molécula como um todo.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "facil",
    enunciado:
      "O sal de cozinha, cloreto de sódio, forma cristais duros e quebradiços que se dissolvem facilmente em água. Ao se dissolver, o composto libera:",
    opcoes: [
      "átomos neutros de sódio e cloro",
      "moléculas de NaCl inteiras, sem separação de cargas",
      "íons Na⁺ e Cl⁻ livres em solução",
      "apenas elétrons livres na água",
      "gás cloro e sódio metálico separados",
    ],
    correta: 2,
    explicacao:
      "A água, polar, envolve e separa os íons do retículo cristalino, liberando Na⁺ e Cl⁻ dispersos na solução — é essa dissociação que torna a água salgada condutora de eletricidade. Não há formação de átomos neutros nem liberação de gás nesse processo físico simples.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "media",
    enunciado:
      "O tetracloreto de carbono, CCl₄, tem o carbono central ligado a quatro átomos de cloro idênticos, sem pares isolados no carbono. Apesar de cada ligação C–Cl ser polar, a molécula resultante é apolar porque:",
    opcoes: [
      "o cloro não é um elemento eletronegativo",
      "o carbono possui pares de elétrons isolados que anulam a polaridade",
      "as ligações C–Cl são, na verdade, apolares",
      "a simetria tetraédrica perfeita faz os quatro vetores dipolo se cancelarem",
      "a molécula tem geometria angular, como a água",
    ],
    correta: 3,
    explicacao:
      "Com os quatro cloros distribuídos simetricamente nos vértices de um tetraedro regular, os dipolos individuais se cancelam vetorialmente, resultando em momento dipolar total nulo. É o mesmo princípio geométrico que torna o CO₂ apolar apesar de suas ligações polares.",
  },
  {
    materia: "quimica",
    tema: "Ligações químicas e geometria molecular",
    dificuldade: "dificil",
    enunciado:
      "Um composto iônico hipotético MX é formado por um cátion M⁺ de raio pequeno e um ânion X⁻ de raio grande. Comparado a outro composto NY, formado por íons de cargas iguais mas raios maiores que os de M e X, é esperado que o composto MX apresente:",
    opcoes: [
      "menor ponto de fusão, pois íons pequenos se repelem mais",
      "o mesmo ponto de fusão de NY, já que as cargas são iguais",
      "condutividade elétrica no estado sólido, ao contrário de NY",
      "ausência de qualquer força de atração entre os íons",
      "maior ponto de fusão, pois a menor distância entre os núcleos intensifica a atração eletrostática",
    ],
    correta: 4,
    explicacao:
      "A força de atração eletrostática entre íons cresce quando a distância entre seus centros diminui, então, mantendo as cargas iguais, o par de íons menores forma uma rede mais coesa e de fusão mais difícil. Esse é o mesmo princípio que, junto à carga dos íons, explica por que óxidos costumam fundir em temperaturas mais altas que haletos do mesmo período.",
  },
];
