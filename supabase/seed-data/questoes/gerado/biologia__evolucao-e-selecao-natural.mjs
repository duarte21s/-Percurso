/* Evolução e seleção natural (50 questões).
   Darwin e Wallace, seleção natural, evidências da evolução (fósseis,
   anatomia comparada, embriologia, biogeografia), especiação, deriva
   genética e lamarckismo x darwinismo.
   Ver biologia__problemas-ambientais-brasileiros.mjs para o formato. */

export const questoes = [
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Charles Darwin, naturalista britânico do século XIX, propôs a teoria da seleção natural como principal mecanismo responsável pela evolução das espécies, após anos de observações realizadas durante sua viagem ao redor do mundo a bordo do navio HMS Beagle, incluindo visitas ao arquipélago de Galápagos. Segundo essa teoria, a seleção natural atua sobre:",
    opcoes: [
      "a variação hereditária já existente em uma população, favorecendo a sobrevivência e reprodução de indivíduos mais adaptados ao ambiente",
      "a criação espontânea de novas características sem qualquer base hereditária",
      "apenas indivíduos que nunca se reproduzem",
      "populações completamente idênticas entre si, sem qualquer variação",
      "características adquiridas ao longo da vida de um único indivíduo, sem relação genética",
    ],
    correta: 0,
    explicacao:
      "A seleção natural pressupõe que já exista variação hereditária dentro de uma população (originada por mutações e recombinação genética), e que o ambiente favoreça a sobrevivência e a reprodução dos indivíduos cujas características os tornam mais aptos àquele ambiente específico, aumentando a frequência dessas características vantajosas nas gerações seguintes.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Alfred Russel Wallace, naturalista britânico contemporâneo de Darwin, chegou de forma independente a conclusões muito semelhantes sobre a seleção natural, também baseado em observações da natureza durante suas viagens, especialmente pelo arquipélago malaio. Esse fato histórico levou a que a teoria da seleção natural fosse originalmente apresentada à comunidade científica:",
    opcoes: [
      "de forma conjunta, com trabalhos de ambos os cientistas apresentados na mesma ocasião em 1858",
      "exclusivamente por Wallace, sem qualquer menção a Darwin",
      "apenas décadas após a morte de ambos os cientistas",
      "sem qualquer base em observações da natureza",
      "exclusivamente em experimentos de laboratório, sem qualquer observação de campo",
    ],
    correta: 0,
    explicacao:
      "Diante da coincidência de suas conclusões independentes, os trabalhos de Darwin e Wallace sobre seleção natural foram apresentados conjuntamente à Sociedade Lineana de Londres em 1858, antes de Darwin publicar sua obra mais completa e detalhada sobre o tema, 'A Origem das Espécies', no ano seguinte, em 1859 — um raro exemplo histórico de descoberta científica praticamente simultânea e independente por dois pesquisadores diferentes.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Os fósseis são restos ou vestígios preservados de organismos que viveram no passado, fornecendo evidências importantes sobre a história evolutiva da vida na Terra. O estudo dos fósseis permite aos cientistas:",
    opcoes: [
      "reconstruir a aparência de organismos extintos e traçar mudanças ao longo do tempo geológico",
      "prever com certeza absoluta o futuro de todas as espécies vivas atuais",
      "criar novos organismos vivos a partir de material fossilizado",
      "eliminar completamente qualquer incerteza sobre a história evolutiva",
      "determinar apenas a cor exata de organismos extintos, sem qualquer outra informação",
    ],
    correta: 0,
    explicacao:
      "Analisando a estrutura física preservada nos fósseis, sua datação geológica e sua distribuição em diferentes camadas de rocha, os paleontólogos conseguem reconstruir aspectos da anatomia de organismos extintos e traçar como determinados grupos de seres vivos mudaram ao longo de milhões de anos, fornecendo um registro direto, embora incompleto, da história evolutiva da vida.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "A anatomia comparada é o estudo das semelhanças e diferenças estruturais entre diferentes espécies, oferecendo evidências importantes para a teoria da evolução. Estruturas homólogas são aquelas que, apesar de exercerem funções diferentes em espécies diferentes, compartilham uma origem embrionária e evolutiva comum, como o braço humano, a asa do morcego e a nadadeira da baleia. Essa semelhança estrutural sugere que essas espécies:",
    opcoes: [
      "descendem de um ancestral comum, cuja estrutura básica foi modificada ao longo da evolução para diferentes funções",
      "não têm qualquer relação evolutiva entre si",
      "surgiram de forma completamente independente e não relacionada",
      "são exatamente a mesma espécie, apenas com nomes diferentes",
      "nunca compartilharam qualquer ancestral em comum",
    ],
    correta: 0,
    explicacao:
      "Estruturas homólogas indicam ancestralidade comum: o padrão básico de ossos do braço humano, da asa do morcego e da nadadeira da baleia é fundamentalmente o mesmo, apenas modificado ao longo de milhões de anos de evolução independente para desempenhar funções diferentes (manipular objetos, voar, nadar), sugerindo que essas espécies compartilham um ancestral comum distante que já possuía esse padrão estrutural básico.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Diferentemente das estruturas homólogas, as estruturas análogas são aquelas que exercem função semelhante em espécies diferentes, mas que evoluíram de forma independente, sem uma origem embrionária comum, como a asa de um pássaro e a asa de uma borboleta. Esse tipo de semelhança funcional, sem ancestralidade comum recente, é chamado de:",
    opcoes: [
      "convergência evolutiva",
      "homologia estrutural completa",
      "identidade genética total",
      "clonagem natural",
      "mutação idêntica espontânea",
    ],
    correta: 0,
    explicacao:
      "A convergência evolutiva ocorre quando espécies não diretamente aparentadas desenvolvem estruturas ou adaptações semelhantes de forma independente, geralmente por enfrentarem pressões ambientais e desafios funcionais parecidos (como a necessidade de voar), e não por compartilharem uma origem evolutiva comum recente — a asa do pássaro e a asa da borboleta ilustram bem essa diferença em relação às estruturas homólogas, verdadeiramente aparentadas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "A biogeografia, estudo da distribuição geográfica das espécies pelo planeta, também oferece evidências importantes para a teoria da evolução. A observação de que espécies de marsupiais são muito mais diversas na Austrália do que em outros continentes, por exemplo, é explicada pelo:",
    opcoes: [
      "isolamento geográfico prolongado da Austrália, que permitiu a esses animais evoluírem de forma relativamente independente",
      "clima idêntico entre a Austrália e todos os outros continentes",
      "transporte artificial recente de marsupiais para a Austrália",
      "ausência completa de qualquer evolução ocorrendo na Austrália",
      "impossibilidade de qualquer espécie evoluir de forma isolada",
    ],
    correta: 0,
    explicacao:
      "Como a Austrália se separou dos demais continentes há dezenas de milhões de anos, os marsupiais que já habitavam essa massa de terra evoluíram de forma relativamente isolada das pressões e da concorrência com mamíferos placentários que se diversificaram em outros continentes, resultando na grande diversidade de marsupiais especificamente australianos observada atualmente, um padrão que só faz sentido considerando a história geológica e evolutiva do continente.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Jean-Baptiste Lamarck, naturalista francês que antecedeu Darwin, propôs uma teoria evolutiva alternativa baseada, entre outros princípios, na ideia da herança de características adquiridas, segundo a qual características desenvolvidas por um indivíduo ao longo de sua vida, em resposta ao uso ou desuso de determinada estrutura, poderiam ser transmitidas aos descendentes. Um exemplo clássico usado para ilustrar (e posteriormente refutar) essa ideia é o do:",
    opcoes: [
      "pescoço da girafa, que segundo Lamarck teria se alongado ao longo da vida de cada girafa por esticar-se para alcançar folhas altas, sendo essa característica adquirida transmitida aos filhotes",
      "pescoço da girafa, cuja explicação evolutiva moderna concorda inteiramente com a proposta original de Lamarck",
      "bico do tentilhão, estudado exclusivamente por Lamarck em suas viagens",
      "casco da tartaruga, que Lamarck nunca mencionou em seus trabalhos",
      "olho humano, cuja evolução Lamarck considerava completamente impossível",
    ],
    correta: 0,
    explicacao:
      "Lamarck propôs que o esforço contínuo de uma girafa individual para esticar o pescoço em busca de folhas mais altas alongaria fisicamente essa estrutura ao longo de sua vida, e que esse alongamento adquirido seria then transmitido geneticamente a seus descendentes; a genética moderna refutou esse mecanismo, mostrando que características adquiridas durante a vida de um indivíduo (sem alteração no DNA das células germinativas) não são herdadas — a explicação atual para o pescoço longo da girafa envolve seleção natural atuando sobre variação genética já existente na população ancestral.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Diferentemente da proposta de Lamarck sobre herança de características adquiridas, a teoria da seleção natural de Darwin propõe que a evolução ocorre porque:",
    opcoes: [
      "indivíduos com variações hereditárias mais vantajosas para o ambiente tendem a sobreviver e se reproduzir mais que os demais, aumentando a frequência dessas variações na população",
      "todos os indivíduos de uma espécie mudam simultaneamente da mesma forma ao longo da vida",
      "o esforço individual de um organismo altera diretamente seu material genético",
      "características adquiridas durante a vida são sempre transmitidas aos filhos",
      "a evolução nunca ocorre de fato, sendo apenas uma teoria sem qualquer evidência",
    ],
    correta: 0,
    explicacao:
      "A seleção natural darwiniana depende de variação hereditária já presente na população (não criada pelo esforço individual), e do fato de que indivíduos com variações mais vantajosas para determinado ambiente têm, em média, maior sucesso reprodutivo, o que aumenta gradualmente a frequência dessas variações favoráveis ao longo de gerações sucessivas — um mecanismo bem diferente e mais consistente com a genética moderna do que a proposta lamarckista de herança de características adquiridas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Os tentilhões de Galápagos, estudados por Darwin durante sua viagem, apresentam diferentes formatos de bico entre as diversas ilhas do arquipélago, cada formato adaptado a um tipo específico de alimento disponível naquela ilha. Esse exemplo clássico de evolução é frequentemente usado para ilustrar:",
    opcoes: [
      "como a seleção natural pode levar à diversificação de uma população ancestral em diferentes formas adaptadas a nichos ecológicos distintos",
      "que todos os pássaros do mundo têm exatamente o mesmo formato de bico",
      "que a evolução nunca ocorre em ilhas isoladas",
      "que o formato do bico não tem qualquer relação com o tipo de alimento disponível",
      "que apenas uma única espécie de tentilhão existe em todo o mundo",
    ],
    correta: 0,
    explicacao:
      "Acredita-se que os diferentes tentilhões de Galápagos descendem de uma população ancestral comum que colonizou o arquipélago e, ao se dispersar pelas diferentes ilhas com recursos alimentares distintos, sofreu seleção natural favorecendo formatos de bico especializados para cada tipo de alimento disponível localmente (sementes duras, insetos, néctar de flores), resultando na diversificação observada atualmente entre as espécies de tentilhões das diferentes ilhas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "A resistência de bactérias a antibióticos é um exemplo contemporâneo e bem documentado de seleção natural em ação, observável em escala de tempo relativamente curta. Quando uma população de bactérias é exposta repetidamente a um antibiótico, as bactérias que sobrevivem e se reproduzem são predominantemente aquelas que:",
    opcoes: [
      "foram criadas espontaneamente pelo próprio antibiótico",
      "já possuíam, por variação genética natural, alguma característica que as tornava mais resistentes àquele antibiótico específico",
      "nunca tiveram qualquer contato com o antibiótico",
      "são geneticamente idênticas às bactérias que morreram",
      "perderam completamente a capacidade de se reproduzir",
    ],
    correta: 1,
    explicacao:
      "Dentro de uma população bacteriana, já existe naturalmente alguma variação genética entre os indivíduos, incluindo, ocasionalmente, mutações que conferem maior resistência a determinado antibiótico; ao expor a população a esse antibiótico, as bactérias sensíveis morrem, enquanto as poucas resistentes sobrevivem e se multiplicam, aumentando progressivamente a proporção de bactérias resistentes na população — um exemplo direto e observável de seleção natural, e não de criação de resistência pelo próprio remédio.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o conceito de aptidão evolutiva (fitness), termo usado em biologia evolutiva para descrever o sucesso relativo de um indivíduo em sobreviver e se reproduzir, deixando descendentes férteis. Diferentemente do uso popular da palavra 'fitness' relacionado a força física, na biologia esse conceito se refere especificamente:",
    opcoes: [
      "exclusivamente à força muscular de um indivíduo",
      "ao número de descendentes férteis que um indivíduo consegue deixar em relação a outros indivíduos da mesma população",
      "à beleza física de um organismo, sem qualquer relação com reprodução",
      "à capacidade de um organismo viver o maior tempo possível, independentemente da reprodução",
      "à inteligência de um organismo, sem qualquer relação com reprodução",
    ],
    correta: 1,
    explicacao:
      "Na biologia evolutiva, a aptidão (fitness) mede o sucesso reprodutivo relativo, ou seja, quantos descendentes férteis um indivíduo consegue deixar em comparação a outros indivíduos da mesma população; um organismo pode viver muito tempo e ser fisicamente forte, mas se não deixar descendentes, sua aptidão evolutiva é baixa — é justamente essa capacidade reprodutiva diferencial que impulsiona a seleção natural ao longo das gerações.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a especiação, processo pelo qual uma população ancestral se divide em duas ou mais espécies distintas ao longo do tempo evolutivo. A especiação alopátrica, o tipo mais comum e estudado, ocorre quando uma população é dividida por uma barreira geográfica, como uma cordilheira ou um braço de mar, que impede o fluxo gênico entre os dois grupos separados. Com o tempo, essa separação geográfica pode levar à formação de novas espécies porque:",
    opcoes: [
      "a barreira geográfica cria imediatamente novas espécies sem qualquer processo evolutivo adicional",
      "as populações isoladas acumulam diferenças genéticas independentes ao longo de gerações, até se tornarem incapazes de se cruzar e gerar descendentes férteis",
      "populações isoladas geograficamente nunca sofrem qualquer mudança genética",
      "o isolamento geográfico impede completamente qualquer reprodução dentro de cada população isolada",
      "apenas uma das duas populações isoladas continua evoluindo, enquanto a outra permanece estática",
    ],
    correta: 1,
    explicacao:
      "Sem fluxo gênico entre as duas populações separadas pela barreira geográfica, cada uma acumula mutações e passa por processos de seleção natural e deriva genética de forma independente da outra; ao longo de tempo suficiente, essas diferenças acumuladas podem se tornar grandes o bastante para que, mesmo que a barreira geográfica seja removida posteriormente, as duas populações não consigam mais se cruzar e gerar descendentes férteis, caracterizando-as como espécies distintas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o conceito biológico de espécie, segundo o qual duas populações são consideradas espécies diferentes quando seus indivíduos não conseguem se cruzar naturalmente e gerar descendentes férteis. Um exemplo que ilustra esse conceito é o cruzamento entre o cavalo e o burro, que produz a mula, um animal:",
    opcoes: [
      "sempre fértil e capaz de se reproduzir livremente",
      "geralmente estéril, incapaz de se reproduzir, o que confirma que cavalo e burro são espécies distintas",
      "geneticamente idêntico tanto ao cavalo quanto ao burro",
      "pertencente exatamente à mesma espécie que seus dois progenitores",
      "incapaz de sobreviver por mais de alguns dias após o nascimento",
    ],
    correta: 1,
    explicacao:
      "A mula, resultado do cruzamento entre égua e jumento (ou cavalo e jumenta), é geralmente estéril devido a incompatibilidades no número e na estrutura dos cromossomos herdados de cada progenitor, o que impede a formação normal de gametas viáveis — essa esterilidade é justamente o critério que confirma, segundo o conceito biológico de espécie, que cavalos e jumentos pertencem a espécies diferentes, apesar de conseguirem se cruzar e gerar descendentes.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a deriva genética, um mecanismo evolutivo diferente da seleção natural, no qual mudanças na frequência de alelos em uma população ocorrem por eventos aleatórios, e não pela vantagem ou desvantagem adaptativa de determinada característica. A deriva genética tende a ter efeito mais pronunciado em:",
    opcoes: [
      "populações extremamente grandes, nas quais o acaso nunca influencia a frequência de alelos",
      "populações pequenas, nas quais eventos aleatórios têm impacto proporcionalmente maior sobre a frequência de alelos",
      "qualquer população, com efeito idêntico independentemente do tamanho",
      "apenas em organismos que se reproduzem exclusivamente de forma assexuada",
      "populações que não possuem qualquer variação genética entre seus indivíduos",
    ],
    correta: 1,
    explicacao:
      "Em populações pequenas, eventos aleatórios (como um indivíduo sobreviver ou morrer por puro acaso, sem relação com sua aptidão) podem alterar significativamente a frequência de alelos na geração seguinte, simplesmente porque cada indivíduo representa uma fração maior do total da população; em populações grandes, esses efeitos aleatórios tendem a se equilibrar estatisticamente, tornando a deriva genética proporcionalmente menos impactante em comparação à seleção natural.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o efeito gargalo populacional, um caso específico de deriva genética que ocorre quando uma população sofre uma redução drástica e repentina de tamanho, devido a um desastre natural, doença ou outro evento catastrófico, seguida de recuperação a partir de um pequeno número de sobreviventes. Esse fenômeno costuma resultar em uma população recuperada com:",
    opcoes: [
      "maior diversidade genética do que a população original",
      "menor diversidade genética do que a população original, já que apenas parte da variação genética anterior sobreviveu ao evento",
      "diversidade genética exatamente idêntica à população original, sem qualquer alteração",
      "impossibilidade completa de qualquer recuperação populacional futura",
      "eliminação total e permanente de qualquer variação genética na espécie",
    ],
    correta: 1,
    explicacao:
      "Como apenas uma fração pequena e muitas vezes aleatória da população original sobrevive a um evento de gargalo, boa parte da diversidade genética que existia antes do evento se perde, e a população recuperada, mesmo crescendo novamente em número, tende a apresentar diversidade genética reduzida em comparação à população original — esse fenômeno é observado em diversas espécies que passaram por eventos históricos de quase extinção, como certas populações de guepardos e elefantes marinhos.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o conceito de seleção sexual, um tipo específico de seleção natural relacionado especificamente ao sucesso reprodutivo por meio da escolha de parceiros ou da competição entre indivíduos do mesmo sexo por oportunidades de acasalamento. A cauda extravagante do pavão macho, que exige energia considerável para crescer e manter, e que pode até prejudicar sua capacidade de escapar de predadores, é um exemplo frequentemente citado de característica favorecida por:",
    opcoes: [
      "seleção natural relacionada exclusivamente à fuga de predadores",
      "seleção sexual, já que fêmeas de pavão tendem a preferir machos com caudas mais elaboradas e vistosas",
      "deriva genética aleatória, sem qualquer relação com preferência reprodutiva",
      "mutação prejudicial que deveria ter sido eliminada pela seleção natural",
      "influência exclusivamente ambiental, sem qualquer base genética",
    ],
    correta: 1,
    explicacao:
      "Apesar de a cauda extravagante representar uma desvantagem em termos de sobrevivência pura (consumindo energia e potencialmente dificultando a fuga de predadores), ela oferece uma vantagem reprodutiva significativa se as fêmeas preferirem acasalar com machos de caudas mais elaboradas, o que evolutivamente compensa o custo de sobrevivência — esse aparente paradoxo é explicado pela seleção sexual, um mecanismo evolutivo que atua especificamente sobre o sucesso reprodutivo, e não apenas sobre a sobrevivência geral do indivíduo.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a embriologia comparada, campo que estuda semelhanças e diferenças no desenvolvimento embrionário entre diferentes espécies, oferecendo evidências adicionais para a teoria da evolução. A observação de que embriões de peixes, répteis, aves e mamíferos apresentam, em estágios iniciais de desenvolvimento, estruturas semelhantes (como fendas faríngeas) sugere que:",
    opcoes: [
      "todos esses animais são, na verdade, exatamente a mesma espécie",
      "esses grupos de vertebrados compartilham um ancestral comum distante, cujo plano de desenvolvimento básico foi mantido em graus variados ao longo da evolução",
      "não existe qualquer relação evolutiva entre esses diferentes grupos de vertebrados",
      "os embriões desses animais são completamente diferentes entre si em todas as fases de desenvolvimento",
      "a embriologia não tem qualquer relevância para o estudo da evolução",
    ],
    correta: 1,
    explicacao:
      "A presença de estruturas embrionárias semelhantes, como as fendas faríngeas observadas em estágios iniciais do desenvolvimento de diferentes grupos de vertebrados, é interpretada como evidência de que esses grupos compartilham um ancestral comum distante, cujo programa básico de desenvolvimento embrionário foi conservado ao longo de milhões de anos de evolução, mesmo que essas estruturas se desenvolvam de formas muito diferentes em cada grupo depois desse estágio inicial (formando brânquias em peixes, mas ossos do ouvido em mamíferos, por exemplo).",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a existência de órgãos vestigiais, estruturas anatômicas reduzidas e aparentemente sem função significativa em um organismo, mas que são plenamente funcionais em espécies aparentadas. O apêndice cecal humano, uma estrutura pequena e sem função digestiva relevante conhecida em humanos, mas que corresponde a uma estrutura maior e funcional em certos herbívoros aparentados evolutivamente, é considerado um exemplo de:",
    opcoes: [
      "uma estrutura recém-formada por evolução, sem qualquer relação com o passado evolutivo humano",
      "órgão vestigial, evidência de ancestralidade compartilhada com outras espécies em que essa estrutura mantém função plena",
      "um órgão essencial e indispensável à sobrevivência humana, sem o qual a vida seria impossível",
      "uma característica exclusiva dos seres humanos, sem qualquer paralelo em outras espécies",
      "prova de que a evolução nunca ocorreu na linhagem humana",
    ],
    correta: 1,
    explicacao:
      "Órgãos vestigiais, como o apêndice cecal humano, são interpretados como remanescentes evolutivos de estruturas que tinham função mais significativa em ancestrais comuns, mas que perderam boa parte de sua importância funcional ao longo da evolução da linhagem específica em que se tornaram vestigiais — sua presença reduzida, mas ainda existente, é considerada uma evidência adicional de ancestralidade evolutiva compartilhada, e não de criação independente de cada espécie.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o melanismo industrial na mariposa Biston betularia, um dos exemplos mais citados de seleção natural documentada em tempo histórico observável. Antes da Revolução Industrial na Inglaterra, a forma clara da mariposa era predominante, camuflando-se bem em troncos de árvores cobertos de líquen claro; com a poluição industrial escurecendo os troncos das árvores pela fuligem, a forma escura da mariposa passou a predominar. Esse exemplo demonstra a seleção natural em ação porque:",
    opcoes: [
      "a poluição industrial criou instantaneamente uma nova espécie de mariposa",
      "todas as mariposas mudaram de cor durante sua própria vida, sem qualquer relação genética",
      "a mudança ambiental alterou qual forma da mariposa era mais bem camuflada contra predadores, favorecendo a sobrevivência diferencial de cada forma conforme o ambiente",
      "a forma clara sempre foi e continuou sendo a mais camuflada, independentemente da poluição",
      "esse exemplo não tem qualquer relação com seleção natural ou evolução",
    ],
    correta: 2,
    explicacao:
      "Ambas as formas de coloração (clara e escura) já existiam naturalmente na população de mariposas antes da poluição industrial, por variação genética; a mudança no ambiente (troncos escurecidos pela fuligem) alterou qual das duas formas ficava mais camuflada contra pássaros predadores, favorecendo a sobrevivência e reprodução diferencial da forma escura em áreas poluídas, o que aumentou sua frequência na população — um exemplo clássico e bem documentado de seleção natural respondendo a uma mudança ambiental causada por atividade humana.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a diferença entre a teoria sintética da evolução (também chamada de neodarwinismo), que combina os princípios da seleção natural de Darwin com a genética moderna desenvolvida no século XX, e a teoria original proposta por Darwin no século XIX, que não conhecia os mecanismos moleculares da hereditariedade. A principal contribuição da genética moderna para a compreensão da evolução foi:",
    opcoes: [
      "refutar completamente a existência da seleção natural como mecanismo evolutivo",
      "provar que a herança de características adquiridas, proposta por Lamarck, estava correta",
      "explicar a origem da variação hereditária sobre a qual a seleção natural atua, por meio de mutações e recombinação genética",
      "eliminar qualquer relação entre genética e evolução das espécies",
      "demonstrar que a evolução nunca ocorreu de fato",
    ],
    correta: 2,
    explicacao:
      "Darwin observou os padrões de seleção natural, mas não tinha acesso ao conhecimento sobre genes, mutações e mecanismos moleculares de hereditariedade; a genética moderna, incorporada à teoria sintética da evolução no século XX, forneceu justamente essa explicação que faltava sobre a origem e a transmissão da variação hereditária, mostrando como mutações no DNA e a recombinação genética durante a reprodução sexuada geram continuamente a matéria-prima variável sobre a qual a seleção natural atua.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa o conceito de equilíbrio pontuado, uma hipótese proposta por Niles Eldredge e Stephen Jay Gould como alternativa ao modelo de evolução gradual e contínua tradicionalmente associado ao darwinismo clássico. Segundo o equilíbrio pontuado, o registro fóssil de muitas linhagens mostra:",
    opcoes: [
      "mudança evolutiva constante e perfeitamente linear ao longo de todo o tempo geológico, sem qualquer variação de ritmo",
      "ausência completa de qualquer padrão identificável no registro fóssil",
      "longos períodos de relativa estabilidade morfológica, interrompidos por episódios relativamente rápidos de mudança evolutiva significativa, muitas vezes associados a eventos de especiação",
      "extinção simultânea e instantânea de todas as espécies do planeta a cada período geológico",
      "que a evolução ocorre sempre na mesma velocidade constante, sem qualquer exceção",
    ],
    correta: 2,
    explicacao:
      "O equilíbrio pontuado propõe que muitas linhagens evolutivas passam a maior parte de sua existência em relativa estabilidade morfológica (estase), com mudanças significativas concentradas em períodos geologicamente breves, frequentemente associados a eventos de especiação em populações pequenas e isoladas — uma hipótese que busca explicar certos padrões observados no registro fóssil, sem necessariamente contradizer o mecanismo básico da seleção natural, apenas propondo um ritmo diferente para sua atuação ao longo do tempo geológico.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador estuda a evolução da resistência a inseticidas em populações de mosquitos, observando que, após décadas de uso intensivo de um determinado inseticida em uma região, a maioria dos mosquitos daquela área se tornou resistente à substância. Comparando esse fenômeno com a resistência bacteriana a antibióticos, é correto afirmar que ambos os casos ilustram como:",
    opcoes: [
      "a evolução nunca ocorre em resposta a ações humanas",
      "apenas bactérias podem desenvolver resistência evolutiva, nunca insetos",
      "pressões seletivas impostas pelo ser humano, como o uso de produtos químicos de controle, podem impulsionar rapidamente a evolução observável em populações de organismos com ciclos de vida curtos",
      "o uso de inseticidas e antibióticos elimina completamente qualquer possibilidade de evolução futura",
      "esses fenômenos não têm qualquer relação com os princípios da seleção natural",
    ],
    correta: 2,
    explicacao:
      "Tanto a resistência bacteriana a antibióticos quanto a resistência de mosquitos a inseticidas ilustram como a seleção natural pode atuar de forma observável e relativamente rápida em populações com ciclos de vida curtos e alta taxa reprodutiva, especialmente quando o ser humano impõe uma pressão seletiva forte e consistente (o uso repetido do produto químico), favorecendo a sobrevivência e a reprodução diferencial dos raros indivíduos que já possuíam alguma variação genética de resistência antes mesmo da exposição ao produto.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a radiação adaptativa, fenômeno evolutivo no qual uma linhagem ancestral se diversifica rapidamente em múltiplas espécies novas, cada uma adaptada a um nicho ecológico diferente, frequentemente observado quando uma espécie coloniza um ambiente novo com recursos ecológicos disponíveis e pouca competição, como uma ilha recém-formada. Esse fenômeno é bem ilustrado, além dos tentilhões de Galápagos, pela diversificação dos:",
    opcoes: [
      "seres humanos modernos, considerados uma espécie sem qualquer variação evolutiva ao longo de sua história",
      "vírus, que nunca passam por qualquer processo evolutivo de diversificação",
      "marsupiais australianos, que se diversificaram em formas ecologicamente equivalentes a mamíferos placentários de outros continentes, ocupando nichos como carnívoros, herbívoros e escavadores",
      "elementos químicos da tabela periódica, sem qualquer relação com biologia evolutiva",
      "rochas sedimentares, sem qualquer relação com processos biológicos",
    ],
    correta: 2,
    explicacao:
      "Isolados no continente australiano por dezenas de milhões de anos, os marsupiais passaram por radiação adaptativa, diversificando-se em formas ecologicamente análogas a diferentes mamíferos placentários encontrados em outros continentes (como o lobo-da-tasmânia, ecologicamente semelhante a canídeos, e o coala, ocupando um nicho herbívoro arborícola), preenchendo nichos ecológicos disponíveis de forma relativamente independente da evolução paralela ocorrida entre os mamíferos placentários no restante do mundo.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o papel da variabilidade genética, gerada por mutações e pela recombinação durante a reprodução sexuada, como matéria-prima essencial para que a seleção natural possa atuar em uma população. Uma população com pouquíssima variabilidade genética, geneticamente muito uniforme, enfrentaria maior dificuldade para:",
    opcoes: [
      "manter sua população estável em ambientes que nunca mudam",
      "reproduzir-se de qualquer forma, mesmo em condições ambientais idênticas",
      "se adaptar a mudanças ambientais futuras, já que teria menos variações disponíveis sobre as quais a seleção natural poderia favorecer indivíduos mais aptos",
      "sobreviver em qualquer circunstância, independentemente do ambiente",
      "existir fisicamente como uma população de organismos vivos",
    ],
    correta: 2,
    explicacao:
      "A seleção natural precisa de variação hereditária para atuar: sem diferenças genéticas entre os indivíduos de uma população, não há como algumas variantes serem favorecidas sobre outras diante de mudanças no ambiente, tornando essa população geneticamente uniforme mais vulnerável a se extinguir caso as condições ambientais mudem de forma que nenhum dos indivíduos existentes esteja bem adaptado — é por isso que a preservação da diversidade genética é uma preocupação central na conservação de espécies ameaçadas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a datação por métodos radiométricos, técnica que utiliza a taxa de decaimento conhecida de isótopos radioativos presentes em rochas e fósseis para estimar sua idade com boa precisão. Essa técnica é importante para o estudo da evolução porque permite:",
    opcoes: [
      "eliminar completamente a necessidade de qualquer análise anatômica de fósseis",
      "criar novos fósseis a partir de rochas comuns",
      "estabelecer uma linha do tempo relativamente precisa para os eventos evolutivos registrados no registro fóssil, situando-os dentro da imensa escala do tempo geológico",
      "determinar a cor exata de organismos extintos há milhões de anos",
      "prever com certeza absoluta eventos evolutivos futuros",
    ],
    correta: 2,
    explicacao:
      "Ao medir a proporção entre um isótopo radioativo original e seu produto de decaimento em uma amostra de rocha ou fóssil, e conhecendo a taxa constante de decaimento desse isótopo (sua meia-vida), os cientistas conseguem estimar com boa precisão há quanto tempo aquela rocha ou fóssil se formou, permitindo situar eventos evolutivos específicos dentro da vastíssima escala de tempo geológico que caracteriza a história da vida na Terra, medida em centenas de milhões a bilhões de anos.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o conceito de fóssil de transição, um tipo especial de fóssil que apresenta características intermediárias entre um grupo ancestral e um grupo descendente, oferecendo evidência direta de mudança evolutiva gradual entre esses grupos. O Archaeopteryx, um fóssil com características tanto de répteis (como dentes e uma longa cauda óssea) quanto de aves (como penas), é frequentemente citado como um exemplo de fóssil de transição entre:",
    opcoes: [
      "peixes e anfíbios",
      "mamíferos e répteis",
      "répteis (dinossauros) e aves",
      "invertebrados e vertebrados",
      "plantas e animais",
    ],
    correta: 2,
    explicacao:
      "O Archaeopteryx, descoberto no século XIX, apresenta uma combinação de características reptilianas (dentes, cauda óssea longa, garras nas asas) e características avianas (penas, estrutura do esqueleto adaptada ao voo), sendo interpretado como um fóssil de transição que ilustra a evolução das aves a partir de um grupo de dinossauros terópodes, uma das relações evolutivas mais bem documentadas e estudadas atualmente com muitos outros fósseis intermediários descobertos posteriormente.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a comparação de sequências de DNA entre diferentes espécies, uma ferramenta moderna e poderosa para reconstruir relações evolutivas, complementando as evidências anatômicas e fósseis tradicionais. Quanto mais semelhante a sequência de DNA entre duas espécies, mais provável é que essas espécies:",
    opcoes: [
      "não tenham qualquer relação evolutiva entre si",
      "pertençam a reinos biológicos completamente diferentes",
      "compartilhem um ancestral comum relativamente recente na escala evolutiva",
      "tenham surgido de forma totalmente independente uma da outra",
      "sejam exatamente a mesma espécie, sem qualquer diferença",
    ],
    correta: 2,
    explicacao:
      "Como mutações no DNA se acumulam de forma relativamente constante ao longo do tempo evolutivo, espécies que compartilham um ancestral comum mais recente tiveram menos tempo para acumular diferenças genéticas independentes entre si, resultando em sequências de DNA mais semelhantes; espécies que se separaram evolutivamente há muito mais tempo, por outro lado, tiveram muito mais tempo para acumular diferenças genéticas, o que se reflete em sequências de DNA proporcionalmente mais divergentes.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a evolução humana, processo que resultou na espécie Homo sapiens a partir de uma longa linhagem de espécies ancestrais do gênero Homo e de gêneros anteriores, ao longo de milhões de anos na África. Fósseis de diferentes espécies desse gênero, como o Homo habilis, o Homo erectus e o Homo neanderthalensis, evidenciam que a evolução humana:",
    opcoes: [
      "ocorreu de forma instantânea, sem qualquer espécie intermediária",
      "não deixou qualquer registro fóssil disponível para estudo",
      "produziu apenas uma única espécie do gênero Homo ao longo de toda a história evolutiva",
      "foi um processo gradual e ramificado, com várias espécies do gênero Homo tendo coexistido em diferentes períodos, e não uma linha reta única até os humanos modernos",
      "não tem qualquer relação com os princípios gerais da evolução biológica",
    ],
    correta: 3,
    explicacao:
      "O registro fóssil mostra que a evolução humana não foi uma progressão linear simples de uma espécie para outra, mas sim um processo ramificado, com várias espécies do gênero Homo (e de gêneros ancestrais, como Australopithecus) tendo existido e, em alguns casos, coexistido no tempo e no espaço, várias das quais posteriormente se extinguiram sem deixar descendentes diretos, enquanto a linhagem que levou ao Homo sapiens moderno persistiu e se diversificou ao redor do mundo.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre microevolução, mudanças evolutivas em pequena escala observáveis dentro de uma população ao longo de poucas gerações (como a resistência a antibióticos), e macroevolução, mudanças evolutivas em grande escala que resultam na formação de novas espécies ou grupos taxonômicos maiores ao longo de períodos de tempo muito mais longos. Segundo a compreensão científica atual, a relação entre esses dois níveis de análise é que:",
    opcoes: [
      "microevolução e macroevolução são processos completamente distintos, sem qualquer relação entre si",
      "apenas a macroevolução realmente ocorre, sendo a microevolução uma ilusão sem base científica",
      "apenas a microevolução realmente ocorre, sendo a macroevolução uma ideia sem qualquer evidência",
      "a macroevolução resulta do acúmulo, ao longo de escalas de tempo muito mais longas, dos mesmos processos e mecanismos básicos observados na microevolução",
      "esses dois termos são sinônimos exatos, sem qualquer diferença de escala temporal",
    ],
    correta: 3,
    explicacao:
      "A visão científica predominante considera que a macroevolução (formação de novas espécies e grupos taxonômicos maiores) resulta essencialmente do mesmo conjunto de processos evolutivos básicos observados na microevolução (mutação, seleção natural, deriva genética, fluxo gênico), apenas atuando de forma acumulativa ao longo de escalas de tempo muito mais longas — a diferença entre os dois níveis é primariamente de escala temporal e de magnitude das mudanças observadas, e não de mecanismo fundamental.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a coevolução, processo em que duas ou mais espécies exercem pressões seletivas mútuas uma sobre a outra ao longo do tempo evolutivo, cada uma influenciando a evolução da outra. Um exemplo de coevolução é a relação entre certas flores e seus polinizadores específicos, como orquídeas com formatos altamente especializados que só podem ser polinizadas por uma espécie particular de inseto ou ave. Esse tipo de relação evolutiva especializada ilustra como:",
    opcoes: [
      "espécies diferentes nunca influenciam a evolução umas das outras",
      "todas as flores do mundo são polinizadas exatamente pelo mesmo tipo de organismo",
      "a coevolução só pode ocorrer entre espécies pertencentes ao mesmo reino biológico",
      "a evolução de uma espécie pode estar intimamente ligada e dependente da evolução simultânea de outra espécie com a qual ela interage ecologicamente",
      "relações ecológicas não têm qualquer influência sobre processos evolutivos",
    ],
    correta: 3,
    explicacao:
      "Na coevolução, mudanças evolutivas em uma espécie (como o formato de uma flor) criam pressões seletivas sobre a espécie com a qual ela interage (como o formato da probóscide de um polinizador específico), e vice-versa, resultando em adaptações cada vez mais especializadas e interdependentes ao longo de gerações sucessivas — esse tipo de relação evolutiva estreita explica a existência de associações ecológicas altamente específicas observadas na natureza entre certas plantas e seus polinizadores exclusivos.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Um estudante analisa como pesticidas resistentes, plantas mais bem adaptadas ou animais com pelagem mais adequada ao ambiente se tornam mais comuns em uma população ao longo de gerações. Esse processo de mudança gradual na frequência de características em uma população, ao longo de gerações sucessivas, é chamado, de forma geral, de:",
    opcoes: [
      "fotossíntese",
      "respiração celular",
      "digestão",
      "evolução biológica",
      "excreção",
    ],
    correta: 3,
    explicacao:
      "A evolução biológica é definida justamente como a mudança nas características hereditárias de populações de organismos ao longo de gerações sucessivas, sendo a seleção natural um dos principais mecanismos que impulsionam esse processo, junto com deriva genética, mutação e fluxo gênico.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Um estudante analisa o conceito de ancestral comum, segundo o qual duas ou mais espécies compartilham um antepassado do qual ambas descendem, mesmo que esse antepassado já não exista mais. A relação entre humanos e chimpanzés, segundo a biologia evolutiva, é explicada por:",
    opcoes: [
      "o fato de que o ser humano é descendente direto do chimpanzé moderno",
      "uma relação de espécies completamente não relacionadas evolutivamente",
      "o fato de que chimpanzés e humanos são exatamente a mesma espécie",
      "um ancestral comum que viveu há milhões de anos, e não pela ideia de que o ser humano descende diretamente do chimpanzé atual",
      "uma coincidência sem qualquer base biológica ou genética",
    ],
    correta: 3,
    explicacao:
      "Um erro comum é achar que a teoria da evolução propõe que humanos descendem de chimpanzés atuais; na verdade, ambas as espécies compartilham um ancestral comum que viveu há vários milhões de anos e que não era nem humano nem chimpanzé como os conhecemos hoje, com as duas linhagens evoluindo de forma independente a partir desse ponto em comum até chegar às formas atuais.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a bioquímica comparada, campo que estuda semelhanças e diferenças em moléculas e processos bioquímicos entre diferentes espécies, como mais uma linha de evidência para a teoria da evolução. O fato de que praticamente todos os seres vivos conhecidos utilizam o mesmo código genético (as mesmas correspondências entre trincas de bases e aminoácidos) é interpretado como evidência de:",
    opcoes: [
      "que cada espécie desenvolveu seu próprio código genético de forma totalmente independente",
      "que o código genético muda completamente a cada nova espécie que surge",
      "que não existe qualquer relação evolutiva entre diferentes formas de vida",
      "uma origem evolutiva comum e muito antiga para praticamente toda a vida conhecida na Terra",
      "que apenas animais compartilham o mesmo código genético, ao contrário de plantas e bactérias",
    ],
    correta: 3,
    explicacao:
      "A universalidade quase completa do código genético entre organismos tão diferentes quanto bactérias, plantas, fungos e animais é um forte indício de que toda essa diversidade de vida compartilha uma origem evolutiva comum muito antiga, já que seria estatisticamente improvável que sistemas bioquímicos tão complexos e específicos tivessem surgido de forma independente e coincidentemente idêntica em linhagens completamente não relacionadas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a extinção em massa ocorrida há aproximadamente 66 milhões de anos, que eliminou os dinossauros não avianos e diversas outras formas de vida, um evento associado ao impacto de um grande asteroide na península de Yucatán, no México. Esse evento catastrófico, ao eliminar grupos até então dominantes, teve como consequência evolutiva de longo prazo:",
    opcoes: [
      "impedir totalmente qualquer evolução futura na Terra",
      "eliminar completamente toda forma de vida no planeta, sem qualquer sobrevivente",
      "não ter qualquer efeito sobre a evolução de outros grupos de organismos",
      "abrir espaço ecológico para a diversificação de outros grupos, como os mamíferos, que se expandiram significativamente após esse evento",
      "fazer com que os dinossauros se tornassem ainda mais dominantes após o evento",
    ],
    correta: 3,
    explicacao:
      "Ao eliminar os dinossauros não avianos e diversas outras espécies dominantes, esse evento de extinção em massa liberou uma ampla gama de nichos ecológicos anteriormente ocupados, permitindo que grupos sobreviventes, especialmente os mamíferos, que até então eram relativamente pequenos e discretos, se diversificassem rapidamente e ocupassem esses espaços ecológicos vazios ao longo dos milhões de anos seguintes, um padrão de radiação adaptativa em resposta a uma extinção em massa.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre adaptação, característica que aumenta a aptidão de um organismo em seu ambiente atual, e a ideia equivocada, mas comum, de que a evolução tem um objetivo ou direção predeterminada rumo a formas de vida cada vez mais 'avançadas' ou 'perfeitas'. Segundo a compreensão científica atual, a evolução por seleção natural:",
    opcoes: [
      "sempre caminha em direção a organismos cada vez mais complexos e inteligentes",
      "tem como objetivo final produzir exclusivamente seres humanos",
      "sempre resulta em melhorias absolutas, sem qualquer desvantagem associada",
      "não possui direção predeterminada, apenas favorece características que aumentam a sobrevivência e reprodução no ambiente atual, que pode mudar ao longo do tempo",
      "segue um plano predeterminado estabelecido no início da vida na Terra",
    ],
    correta: 3,
    explicacao:
      "A seleção natural não tem objetivo ou direção predeterminada: ela simplesmente favorece, em cada momento e ambiente específico, as características que aumentam a sobrevivência e o sucesso reprodutivo naquele contexto particular, o que pode significar maior ou menor complexidade dependendo da situação — bactérias simples continuam evoluindo e prosperando há bilhões de anos sem se tornarem organismos mais 'complexos', o que ilustra bem que a evolução não é uma escada rumo a formas de vida superiores.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa como certas populações de bactérias em ambientes extremos, como fontes hidrotermais no fundo do oceano ou fontes termais muito ácidas, conseguem sobreviver em condições que seriam letais para a maioria dos outros organismos. Do ponto de vista evolutivo, essa capacidade se desenvolveu por meio de:",
    opcoes: [
      "um processo instantâneo, sem qualquer relação com seleção natural ao longo de gerações",
      "uma decisão consciente e deliberada das próprias bactérias",
      "ausência completa de qualquer processo evolutivo nessas populações",
      "seleção natural favorecendo, ao longo de gerações, variações genéticas que conferem tolerância a essas condições extremas específicas",
      "intervenção humana direta na modificação genética dessas bactérias",
    ],
    correta: 3,
    explicacao:
      "Assim como em qualquer outro ambiente, a seleção natural em populações de micro-organismos expostas a condições extremas favorece, ao longo de muitas gerações, variantes genéticas que conferem melhor tolerância àquelas condições específicas de temperatura, pressão ou acidez, permitindo que, com o tempo evolutivo suficiente, essas populações se tornem cada vez mais especializadas e adaptadas a nichos ecológicos que seriam inóspitos para a maioria dos demais organismos.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a hipótese do relógio molecular, técnica que estima o tempo decorrido desde a divergência evolutiva entre duas espécies com base no número de diferenças acumuladas em suas sequências de DNA, assumindo uma taxa relativamente constante de acúmulo de mutações ao longo do tempo. Uma limitação reconhecida dessa técnica é que:",
    opcoes: [
      "o relógio molecular sempre fornece datas absolutamente exatas, sem qualquer margem de erro",
      "essa técnica nunca é utilizada por cientistas reais na prática",
      "o DNA nunca acumula qualquer mutação ao longo do tempo evolutivo",
      "essa técnica só pode ser aplicada a fósseis, nunca a organismos vivos",
      "a taxa de mutação pode variar entre diferentes genes, linhagens e condições, exigindo calibração cuidadosa com dados de outras fontes, como o registro fóssil",
    ],
    correta: 4,
    explicacao:
      "Embora o conceito básico do relógio molecular seja poderoso, cientistas reconhecem que a taxa de acúmulo de mutações não é perfeitamente constante entre diferentes genes, linhagens evolutivas ou condições ambientais, o que exige calibração cuidadosa dessas estimativas moleculares com outras fontes de evidência independentes, como datações do registro fóssil, para produzir estimativas de tempo evolutivo mais confiáveis e precisas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa como a criação seletiva de cães por seres humanos ao longo de milhares de anos, a partir de um ancestral comum semelhante ao lobo, resultou em uma enorme diversidade de raças com características físicas e comportamentais muito distintas entre si. Esse processo, conduzido deliberadamente pelo ser humano ao escolher quais animais se reproduziriam com base em características desejadas, é chamado de:",
    opcoes: [
      "seleção natural",
      "deriva genética espontânea",
      "mutação induzida por radiação",
      "especiação alopátrica",
      "seleção artificial",
    ],
    correta: 4,
    explicacao:
      "Diferente da seleção natural, na qual o próprio ambiente determina quais indivíduos sobrevivem e se reproduzem mais, a seleção artificial ocorre quando seres humanos escolhem deliberadamente quais indivíduos se reproduzirão, com base em características desejadas por eles, como tamanho, temperamento ou aparência — foi justamente esse processo, aplicado repetidamente ao longo de milênios, que gerou a impressionante diversidade de raças caninas atuais a partir de uma origem ancestral comum.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o conceito de pressão seletiva, termo usado para descrever qualquer fator ambiental (como predadores, disponibilidade de alimento, clima ou competição) que influencia quais características são favorecidas pela seleção natural em uma população. Em um ambiente onde a principal pressão seletiva é a presença de um predador eficiente, é esperado que características relacionadas à:",
    opcoes: [
      "cor vistosa e chamativa sejam sempre favorecidas, independentemente do contexto",
      "lentidão de movimento sejam sempre vantajosas nesse ambiente específico",
      "ausência total de qualquer instinto de sobrevivência sejam favorecidas",
      "incapacidade de reprodução sejam favorecidas pela seleção natural",
      "camuflagem, velocidade de fuga ou outras defesas contra esse predador específico tendam a ser favorecidas ao longo das gerações",
    ],
    correta: 4,
    explicacao:
      "Quando a predação é a principal pressão seletiva atuando sobre uma população, características que aumentam a capacidade de evitar ser detectado (camuflagem), escapar (velocidade) ou se defender de um predador tendem a conferir maior aptidão evolutiva aos indivíduos que as possuem, favorecendo sua sobrevivência e reprodução diferencial em comparação a indivíduos sem essas características, ao longo de gerações sucessivas naquele ambiente específico.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a distribuição de espécies de camelídeos (o grupo que inclui camelos, lhamas e alpacas) pelo mundo, notando que espécies proximamente aparentadas se encontram atualmente na Ásia, África e América do Sul, regiões geograficamente distantes entre si. Estudos fósseis indicam que esse grupo se originou e se diversificou inicialmente na América do Norte, migrando posteriormente para os outros continentes antes de se extinguir em seu local de origem. Esse padrão de distribuição geográfica atual, aparentemente desconectado da origem histórica do grupo, é um exemplo de como:",
    opcoes: [
      "espécies aparentadas sempre vivem exatamente no mesmo local onde se originaram",
      "a biogeografia não tem qualquer relação com a história evolutiva das espécies",
      "camelos, lhamas e alpacas não têm qualquer parentesco evolutivo entre si",
      "o registro fóssil nunca pode ser usado para reconstruir padrões de migração",
      "evidências biogeográficas, combinadas com o registro fóssil, ajudam a reconstruir a história evolutiva e migratória de um grupo de organismos ao longo do tempo",
    ],
    correta: 4,
    explicacao:
      "A combinação de evidências biogeográficas (onde as espécies vivem atualmente) com o registro fóssil (onde e quando seus ancestrais existiram) permite aos cientistas reconstruir histórias evolutivas e migratórias complexas, como no caso dos camelídeos, que se originaram na América do Norte, migraram para a Ásia (dando origem aos camelos) e para a América do Sul (dando origem a lhamas e alpacas) antes de desaparecer de seu continente de origem, deixando um padrão de distribuição atual que só faz sentido à luz dessa história evolutiva reconstruída.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a evolução de estruturas complexas, como o olho dos vertebrados, frequentemente citada em debates públicos sobre evolução por sua aparente complexidade. Segundo a compreensão biológica atual, estruturas complexas como o olho evoluíram por meio de:",
    opcoes: [
      "surgimento instantâneo e completo em uma única geração, sem qualquer estágio intermediário",
      "um processo que não segue qualquer princípio evolutivo conhecido",
      "intervenção direta e consciente de cada organismo individual em sua própria anatomia",
      "impossibilidade científica completa, sem qualquer explicação evolutiva proposta",
      "uma sequência gradual de pequenas modificações incrementais, cada uma oferecendo alguma vantagem funcional em relação ao estágio anterior, ao longo de muitas gerações",
    ],
    correta: 4,
    explicacao:
      "Estudos comparativos entre diferentes espécies mostram uma progressão de estruturas fotossensíveis cada vez mais complexas, desde simples manchas de células sensíveis à luz até olhos complexos com lentes, sugerindo que órgãos como o olho evoluíram gradualmente por meio de uma sequência de pequenas modificações incrementais, cada uma conferindo alguma vantagem funcional (mesmo que modesta) em relação ao estágio anterior, e não por meio de um surgimento súbito e completo em uma única etapa.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a variação na coloração da pele humana ao redor do mundo, geograficamente correlacionada com a intensidade da radiação ultravioleta solar em diferentes latitudes. Populações historicamente estabelecidas próximas ao equador, com maior incidência solar, tendem a apresentar pele mais escura, enquanto populações de latitudes mais altas, com menor incidência solar, tendem a apresentar pele mais clara. Uma explicação evolutiva proposta para esse padrão envolve o equilíbrio entre:",
    opcoes: [
      "a preferência estética exclusivamente cultural, sem qualquer componente biológico",
      "a temperatura ambiente exclusivamente, sem qualquer relação com radiação solar",
      "fatores completamente aleatórios, sem qualquer padrão geográfico identificável",
      "a disponibilidade de água potável em cada região",
      "a proteção contra danos causados pelo excesso de radiação ultravioleta e a necessidade de absorver luz solar suficiente para a produção de vitamina D",
    ],
    correta: 4,
    explicacao:
      "A hipótese evolutiva mais aceita propõe um equilíbrio entre dois fatores relacionados à radiação ultravioleta: pele mais escura, rica em melanina, protege contra danos causados pelo excesso de radiação em regiões de alta incidência solar (como degradação do ácido fólico), enquanto pele mais clara permite melhor absorção da luz solar necessária para a síntese de vitamina D em regiões de menor incidência solar, onde o excesso de proteção poderia levar à deficiência dessa vitamina essencial.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa criticamente a afirmação frequentemente repetida de que 'a evolução é apenas uma teoria', em um sentido que sugere fragilidade ou falta de evidências. Comparando o uso científico do termo 'teoria' com seu uso popular cotidiano, é correto esclarecer que, na ciência, uma teoria é:",
    opcoes: [
      "sinônimo exato de 'palpite' ou 'chute', sem qualquer base em evidências",
      "sempre uma ideia completamente refutada e abandonada pela comunidade científica",
      "uma afirmação que nunca pode ser testada ou verificada por qualquer método",
      "algo automaticamente inferior a uma 'lei científica' em termos de confiabilidade",
      "uma explicação abrangente e bem sustentada por evidências extensas e repetidamente testadas, e não um simples palpite ou especulação não comprovada",
    ],
    correta: 4,
    explicacao:
      "No uso científico rigoroso, uma teoria (como a teoria da evolução, a teoria da relatividade ou a teoria atômica) é uma explicação abrangente para um conjunto amplo de fenômenos observados, sustentada por vastas quantidades de evidências independentes e repetidamente testada ao longo do tempo, sendo bem diferente do uso coloquial da palavra 'teoria' no dia a dia, que muitas vezes sugere uma simples suposição ou especulação sem fundamentação sólida — essa confusão de significados é uma fonte comum de mal-entendidos públicos sobre a robustez científica da teoria da evolução.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a extinção como parte natural e inevitável do processo evolutivo ao longo da história da vida na Terra, estimando-se que mais de 99% de todas as espécies que já existiram estejam atualmente extintas. Apesar de a extinção ser um fenômeno natural de longo prazo, cientistas alertam que a taxa atual de extinção de espécies, fortemente influenciada por atividades humanas, é:",
    opcoes: [
      "exatamente igual à taxa natural histórica, sem qualquer aceleração perceptível",
      "muito mais lenta do que em qualquer período anterior da história da Terra",
      "completamente independente de qualquer atividade humana",
      "um fenômeno que nunca ocorreu antes na história da vida no planeta",
      "significativamente mais acelerada do que a taxa média observada ao longo da maior parte da história geológica da Terra",
    ],
    correta: 4,
    explicacao:
      "Estudos científicos indicam que a taxa atual de extinção de espécies, impulsionada por fatores como destruição de habitats, mudanças climáticas, poluição e introdução de espécies invasoras, está significativamente acima da taxa de extinção considerada 'normal' ou de fundo observada ao longo da maior parte da história geológica da Terra, o que levou muitos cientistas a discutirem se o planeta está atravessando um evento de extinção em massa de origem antropogênica, comparável em escala, embora não necessariamente em causa, aos grandes eventos de extinção do passado geológico.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a resistência genética à malária associada a certas variações do gene da hemoglobina, como a que causa a anemia falciforme quando presente em homozigose, mas que confere proteção parcial contra a malária quando presente em heterozigose. Esse fenômeno, no qual um alelo é prejudicial em dose dupla mas vantajoso em heterozigose em determinado ambiente, é um exemplo de como a seleção natural pode:",
    opcoes: [
      "eliminar instantaneamente qualquer alelo que cause qualquer tipo de doença",
      "favorecer sempre e exclusivamente homozigotos, nunca heterozigotos",
      "não ter qualquer relação com doenças genéticas humanas",
      "atuar de forma idêntica em todos os ambientes do planeta, sem qualquer variação",
      "manter certos alelos aparentemente prejudiciais em uma população, quando a vantagem do heterozigoto em um ambiente específico compensa a desvantagem do homozigoto",
    ],
    correta: 4,
    explicacao:
      "Em regiões onde a malária é historicamente comum, indivíduos heterozigotos para o alelo da anemia falciforme têm uma vantagem de sobrevivência por apresentarem certa proteção contra a malária, o que mantém esse alelo em frequência relativamente alta na população local mesmo sendo prejudicial (e potencialmente letal) em homozigose — esse equilíbrio entre vantagem do heterozigoto e desvantagem do homozigoto é um exemplo estudado de como a seleção natural pode manter variação genética aparentemente 'ruim' em certas condições ambientais específicas.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "O princípio de equilíbrio de Hardy-Weinberg descreve uma situação teórica na qual as frequências alélicas de uma população permanecem constantes ao longo das gerações, na ausência de fatores evolutivos como mutação, migração, seleção natural, deriva genética e acasalamento não aleatório. Na prática, esse princípio é utilizado por biólogos evolutivos principalmente como:",
    opcoes: [
      "um modelo de referência teórico, contra o qual populações reais são comparadas para identificar se e como fatores evolutivos estão alterando as frequências alélicas ao longo do tempo",
      "uma descrição exata e universal do comportamento genético de todas as populações naturais reais, sem qualquer exceção",
      "uma prova definitiva de que a evolução nunca ocorre em nenhuma população natural",
      "um método direto de sequenciamento de DNA, sem qualquer relação com frequências alélicas",
      "uma técnica exclusiva para datação de fósseis por métodos radiométricos",
    ],
    correta: 0,
    explicacao:
      "Como as condições exigidas pelo equilíbrio de Hardy-Weinberg, como população infinita e ausência de mutação, migração, seleção natural e acasalamento não aleatório, raramente são plenamente satisfeitas por populações naturais reais, esse princípio funciona principalmente como um modelo teórico de referência: ao comparar as frequências alélicas observadas em uma população real com as frequências esperadas em equilíbrio, biólogos evolutivos conseguem identificar indícios de que fatores evolutivos, como a seleção natural ou a deriva genética, estão de fato atuando sobre aquela população.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "O efeito fundador é um caso específico de deriva genética que ocorre quando um pequeno grupo de indivíduos se separa de uma população maior e coloniza um novo ambiente, como uma ilha isolada, dando origem a uma nova população. Como esse pequeno grupo fundador carrega apenas uma amostra limitada da variabilidade genética da população original, é esperado que a nova população resultante apresente:",
    opcoes: [
      "exatamente a mesma variabilidade genética da população original, sem qualquer diferença",
      "frequências alélicas que podem diferir significativamente das da população original, simplesmente por acaso, refletindo a composição genética particular do pequeno grupo fundador, e não necessariamente vantagens adaptativas",
      "maior variabilidade genética do que a população original, em qualquer circunstância",
      "ausência completa de qualquer variação genética entre os indivíduos fundadores",
      "uma composição genética determinada exclusivamente pela seleção natural, sem qualquer papel do acaso",
    ],
    correta: 1,
    explicacao:
      "Por ser formada por um número reduzido de indivíduos, a nova população fundada carrega apenas uma amostra parcial e possivelmente não representativa da variabilidade genética presente na população original, de modo que certos alelos podem estar super-representados, sub-representados ou até ausentes na nova população simplesmente por acaso, um efeito da deriva genética que não está relacionado a qualquer vantagem ou desvantagem adaptativa das características envolvidas, diferentemente do que ocorre na seleção natural.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "media",
    enunciado:
      "O fluxo gênico ocorre quando indivíduos se deslocam de uma população para outra e se reproduzem com membros dessa nova população, introduzindo novos alelos ou alterando as frequências alélicas já existentes nela. Em duas populações da mesma espécie que começam a divergir geneticamente, um fluxo gênico contínuo e significativo entre elas tende a:",
    opcoes: [
      "acelerar drasticamente a formação de duas espécies completamente distintas e isoladas reprodutivamente",
      "eliminar completamente qualquer variabilidade genética de ambas as populações envolvidas",
      "reduzir as diferenças genéticas acumuladas entre as duas populações, dificultando o processo de especiação, já que a troca constante de indivíduos e alelos tende a homogeneizar as frequências alélicas entre os dois grupos",
      "não ter qualquer efeito sobre as frequências alélicas de nenhuma das duas populações",
      "impedir totalmente qualquer capacidade reprodutiva de ambas as populações envolvidas",
    ],
    correta: 2,
    explicacao:
      "Ao introduzir novos alelos e misturar as composições genéticas de duas populações que estariam começando a divergir, o fluxo gênico contínuo tende a reduzir as diferenças genéticas acumuladas entre elas, contrariando a tendência de divergência e dificultando, ou até impedindo, o processo de especiação; é justamente por isso que barreiras que interrompem o fluxo gênico entre populações, como o isolamento geográfico observado na especiação alopátrica, são frequentemente consideradas importantes para que a especiação ocorra com mais facilidade.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "dificil",
    enunciado:
      "Diferentemente da especiação alopátrica, que depende de uma barreira geográfica separando fisicamente duas populações, a especiação simpátrica ocorre quando novas espécies surgem a partir de uma população ancestral sem qualquer separação geográfica prévia entre os grupos envolvidos. Em plantas, um mecanismo relativamente comum de especiação simpátrica é a poliploidia, evento no qual um indivíduo passa a apresentar um número de conjuntos cromossômicos multiplicado em relação à espécie original. Esse indivíduo poliploide pode se tornar imediatamente uma nova espécie porque:",
    opcoes: [
      "a poliploidia sempre torna o indivíduo completamente estéril e incapaz de se reproduzir de qualquer forma",
      "indivíduos poliploides são sempre geneticamente idênticos aos indivíduos da espécie original",
      "a poliploidia elimina totalmente a necessidade de qualquer reprodução para a formação de novas espécies",
      "seu número diferente de cromossomos costuma impedir o cruzamento fértil com indivíduos da espécie original de número cromossômico normal, criando isolamento reprodutivo instantâneo mesmo sem qualquer separação geográfica",
      "esse mecanismo depende obrigatoriamente de milhões de anos de isolamento geográfico gradual",
    ],
    correta: 3,
    explicacao:
      "Como um indivíduo poliploide possui um número de cromossomos diferente, geralmente multiplicado, em relação aos indivíduos da espécie original, o pareamento adequado de cromossomos durante a meiose de um eventual híbrido entre os dois tipos costuma ser prejudicado, dificultando ou impedindo a produção de descendentes férteis; esse isolamento reprodutivo pode surgir de forma praticamente instantânea, em uma única geração, sem qualquer necessidade de separação geográfica prévia entre os grupos, o que caracteriza esse mecanismo como um exemplo de especiação simpátrica, relativamente comum na evolução de diversas espécies vegetais cultivadas e silvestres.",
  },
  {
    materia: "biologia",
    tema: "Evolução e seleção natural",
    dificuldade: "facil",
    enunciado:
      "Golfinhos (mamíferos), tubarões (peixes cartilaginosos) e os extintos ictiossauros (répteis marinhos) pertencem a linhagens evolutivas muito distantes entre si, sem um ancestral comum recente adaptado à vida aquática, mas apresentam corpos com formato hidrodinâmico notavelmente semelhante, adaptado à natação eficiente na água. Esse tipo de semelhança, resultante de pressões seletivas ambientais parecidas atuando sobre linhagens diferentes, e não de ancestralidade comum recente, é chamado de:",
    opcoes: [
      "herança direta de um único ancestral comum recente compartilhado por esses três grupos",
      "mutação idêntica ocorrida simultaneamente nos três grupos, sem qualquer relação com o ambiente",
      "um erro de classificação taxonômica que deveria unir os três grupos em uma única espécie",
      "um fenômeno que nunca foi documentado ou estudado pela biologia evolutiva",
      "convergência evolutiva, processo pelo qual espécies não aparentadas desenvolvem características semelhantes de forma independente, em resposta a desafios ambientais similares",
    ],
    correta: 4,
    explicacao:
      "Apesar de pertencerem a linhagens evolutivas muito distantes, golfinhos, tubarões e ictiossauros desenvolveram, de forma independente, um formato corporal hidrodinâmico semelhante como resposta adaptativa às mesmas pressões seletivas impostas pelo ambiente aquático, como a necessidade de reduzir a resistência da água durante a natação; esse fenômeno, no qual espécies não aparentadas convergem para soluções estruturais semelhantes diante de desafios ambientais parecidos, é chamado de convergência evolutiva, e é a base da definição de estruturas análogas, já discutida em outro contexto.",
  },
];
