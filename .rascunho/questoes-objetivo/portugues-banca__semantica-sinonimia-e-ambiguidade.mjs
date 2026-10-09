/* Rascunho — Português de banca / Semântica: sinonímia e ambiguidade.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram relações de sentido assentadas: sinonímia e
   quase-sinonímia, antonímia (gradual e complementar), homonímia,
   paronímia (infringir e infligir, deferir e diferir, flagrante e
   fragrante, cavaleiro e cavalheiro, mandado e mandato, estrato e extrato),
   polissemia, denotação e conotação, hiperonímia e hiponímia, campo
   semântico, eufemismo, pleonasmo, expressões idiomáticas, e a ambiguidade
   (lexical, sintática, de pontuação e de referente do pronome) com sua
   correção. Ficaram de fora, de propósito, as figuras de linguagem
   (conteúdo próprio da trilha do fundamental) e os sentidos regionais ou
   de gíria, que variam. */

export const materia = "portugues-banca";
export const tema = "Semântica: sinonímia e ambiguidade";
export const arquivo = "portugues-banca__semantica-sinonimia-e-ambiguidade";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual das palavras abaixo é sinônima de “felicidade”?",
    o: ["alegria", "tristeza", "raiva", "medo", "angústia"],
    x: "Sinônimos são palavras de sentido semelhante ou equivalente, que podem substituir uma à outra em determinados contextos. Felicidade e alegria indicam estado de contentamento, e por isso são aproximadamente sinônimas.\n\nTristeza e angústia indicam sentimentos opostos ou penosos, e por isso estão mais perto de antônimos. Raiva e medo indicam outros sentimentos, sem relação de semelhança com felicidade. O sinônimo é, portanto, alegria.",
  },
  {
    d: "facil",
    e: "Qual das palavras abaixo é antônima de “generoso”?",
    o: ["avarento", "bondoso", "amável", "nobre", "gentil"],
    x: "Antônimos são palavras de sentido oposto. Generoso é quem dá com gosto, sem apego ao que tem, e o oposto é avarento, quem tem apego excessivo ao dinheiro e custa a dar. Por isso avarento é o antônimo.\n\nBondoso, amável, nobre e gentil se aproximam do sentido de generoso, e por isso são mais sinônimos ou quase-sinônimos do que antônimos. O antônimo exige oposição, e não só diferença.",
  },
  {
    d: "facil",
    e: "Qual dos pares abaixo é formado por palavras homófonas?",
    o: ["cela e sela", "casa e lar", "belo e feio", "rápido e veloz", "grande e pequeno"],
    x: "Palavras homófonas têm a mesma pronúncia, mas escrita e sentido diferentes. Cela, de prisão ou de convento, e sela, arreio do cavalo, soam do mesmo jeito e se escrevem de modos diferentes. Outros pares são concerto e conserto, cem e sem.\n\nCasa e lar, rápido e veloz são sinônimos. Belo e feio, grande e pequeno são antônimos. Em nenhum desses pares a pronúncia é igual e a escrita diferente.",
  },
  {
    d: "facil",
    e: "Em qual das frases a palavra manga designa parte da roupa?",
    o: ["A manga da camisa está rasgada.", "Comi uma manga madura.", "Plantei uma mangueira no quintal.", "A manga estava doce e suculenta.", "Comprei manga no mercado."],
    x: "Manga é palavra polissêmica ou homônima, com mais de um sentido. Na primeira frase, a manga da camisa é a parte do vestuário que cobre o braço. O contexto, camisa e rasgada, mostra o sentido de roupa.\n\nNas outras frases, o contexto indica o fruto: comi uma manga madura, a manga estava doce e suculenta, comprei manga no mercado. E plantei uma mangueira nem usa a palavra manga, mas o nome da árvore. O sentido de uma palavra se define pelo contexto.",
  },
  {
    d: "facil",
    e: "Em qual das frases a palavra doce tem sentido figurado?",
    o: ["Ela tem uma voz doce.", "O bolo está doce.", "Comprei um doce na padaria.", "O café está sem açúcar.", "O doce de leite acabou."],
    x: "O sentido figurado, ou conotativo, é o que a palavra ganha por associação, indo além do sentido de dicionário. Uma voz não tem sabor, e doce, aplicado a uma voz, significa suave, agradável: é figurado.\n\nNo bolo está doce, o doce indica o sabor, em sentido literal, ou denotativo. Em comprei um doce, a palavra é substantivo e designa um alimento. Em o café está sem açúcar e o doce de leite acabou, o sentido é literal. Só a voz doce usa a palavra em sentido figurado.",
  },
  {
    d: "facil",
    e: "Qual palavra é hiperônimo de rosa, margarida e tulipa?",
    o: ["flor", "jardim", "árvore", "perfume", "cor"],
    x: "O hiperônimo é a palavra de sentido mais amplo, que engloba outras de sentido mais específico, os hipônimos. Rosa, margarida e tulipa são tipos de flor, e flor é o hiperônimo. Outros exemplos são animal, para cão e gato, e veículo, para carro e bicicleta.\n\nJardim é o lugar onde se cultivam flores, e não uma categoria delas. Árvore é outra categoria de plantas. Perfume e cor são características ou produtos, e não categorias que englobem rosa, margarida e tulipa.",
  },
  {
    d: "facil",
    e: "Qual das frases a seguir é ambígua, por admitir duas leituras?",
    o: ["Ana viu Maria com o binóculo.", "Ana viu Maria.", "Maria chegou cedo.", "Ana comprou um livro.", "Ana saiu ontem."],
    x: "Em Ana viu Maria com o binóculo, a expressão com o binóculo pode se ligar a viu (Ana usou o binóculo para ver Maria) ou a Maria (Maria tinha o binóculo). Há duas leituras possíveis, e isso caracteriza a ambiguidade, neste caso sintática.\n\nAs demais frases têm uma única leitura: Ana viu Maria, Maria chegou cedo, Ana comprou um livro, Ana saiu ontem. Nelas, nenhum termo pode ser ligado de dois modos diferentes, e por isso não são ambíguas.",
  },
  {
    d: "facil",
    e: "Em qual das frases a seguir há pleonasmo vicioso?",
    o: ["Vamos subir para cima.", "Vi com meus próprios olhos.", "Ele chorou lágrimas amargas.", "Ela viveu uma vida feliz.", "Todos riram muito."],
    x: "O pleonasmo vicioso é a repetição desnecessária de uma ideia que já está contida na palavra: subir já significa ir para cima, e por isso subir para cima é redundante e não acrescenta nada. Outros exemplos são descer para baixo, entrar para dentro e sair para fora.\n\nVi com meus próprios olhos reforça a ideia com intenção expressiva, e é pleonasmo literário. Chorar lágrimas e viver uma vida também têm valor de ênfase. E todos riram muito não repete ideia nenhuma.",
  },
  {
    d: "facil",
    e: "Na frase “O rapaz é muito esperto”, qual palavra pode substituir esperto sem alterar o sentido?",
    o: ["astuto", "lento", "triste", "alto", "calmo"],
    x: "Esperto, nessa frase, indica quem é inteligente e rápido no raciocínio, ou de espírito vivo. Astuto tem sentido muito próximo, e por isso pode substituir esperto sem alterar o sentido da frase.\n\nLento é o oposto, pois indica falta de rapidez. Triste, alto e calmo indicam outras qualidades, sem relação com a esperteza. A substituição por sinônimo mantém o sentido da frase e muda só a palavra.",
  },
  {
    d: "facil",
    e: "Qual palavra completa corretamente a frase “A ___ da cena foi muito detalhada”?",
    o: ["descrição", "discrição", "decrição", "discriçção", "descrissão"],
    x: "Descrição é o ato de descrever, de representar algo com palavras: a descrição da cena. Discrição é a qualidade de quem é discreto, reservado, que não chama atenção. Como a frase fala de uma cena descrita em detalhes, a palavra é descrição.\n\nDiscrição troca a ideia de descrever pela ideia de reserva. As demais grafias, decrição, discriçção e descrissão, não existem na língua. Descrição e discrição são parônimas, isto é, parecidas na forma e diferentes no sentido.",
  },
  {
    d: "facil",
    e: "Qual das palavras abaixo NÃO pertence ao campo semântico de “escola”?",
    o: ["vulcão", "aluno", "professor", "caderno", "lousa"],
    x: "O campo semântico reúne palavras ligadas a um mesmo assunto ou tema. Aluno, professor, caderno e lousa se relacionam com o ambiente escolar. Vulcão pertence ao campo semântico da geologia ou da natureza, e não tem ligação direta com a escola.\n\nPor isso vulcão é a palavra que não pertence ao campo semântico de escola. Para identificar o intruso, basta perguntar quais palavras costumam aparecer juntas em um mesmo contexto.",
  },
  {
    d: "facil",
    e: "Em qual das frases a seguir há um eufemismo?",
    o: ["Ele partiu desta vida.", "Ele morreu ontem.", "Ele chegou cedo.", "Ele comprou um carro.", "Ele estuda muito."],
    x: "O eufemismo é o emprego de uma expressão mais suave no lugar de outra considerada dura ou desagradável. Partir desta vida suaviza a ideia de morrer, e por isso é eufemismo. Outros exemplos são faltar com a verdade, por mentir, e pessoa de idade, por idoso.\n\nEle morreu ontem diz a ideia de forma direta. Ele chegou cedo, ele comprou um carro e ele estuda muito não suavizam nada, porque não envolvem nenhuma ideia desagradável. Só a primeira frase troca uma palavra dura por outra mais branda.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Em qual das frases a palavra banco tem o sentido de instituição financeira?",
    o: ["O banco fechou às quatro horas.", "Sentei no banco da praça.", "O banco de areia apareceu na maré baixa.", "Comprou um banco de madeira.", "O banco do carro é de couro."],
    x: "Banco é palavra com vários sentidos, e o contexto indica qual deles vale. Em o banco fechou às quatro horas, o verbo fechar e o horário sugerem uma instituição com expediente, e por isso o sentido é de instituição financeira.\n\nEm sentei no banco da praça e comprou um banco de madeira, o sentido é de assento. Em o banco de areia, é elevação do fundo da água. E em o banco do carro, é assento do veículo. A palavra só assume um sentido preciso dentro da frase.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é antônima de “efêmero”?",
    o: ["duradouro", "passageiro", "fugaz", "breve", "momentâneo"],
    x: "Efêmero é o que dura pouco tempo, o que é passageiro. O oposto é duradouro, o que dura muito tempo, como em amizade duradoura. Por isso duradouro é o antônimo.\n\nPassageiro, fugaz, breve e momentâneo têm sentido próximo ao de efêmero, e por isso são sinônimos. Diante de uma pergunta sobre antônimo, convém identificar o sentido central da palavra e procurar o seu contrário.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é antônima de “prolixo”?",
    o: ["conciso", "longo", "extenso", "detalhado", "demorado"],
    x: "Prolixo é quem se estende demais, usa palavras em excesso para dizer pouco. O oposto é conciso, quem diz o necessário com poucas palavras. Por isso conciso é o antônimo.\n\nLongo, extenso, detalhado e demorado se aproximam de prolixo, indicando algo que se alonga, e por isso são mais sinônimos ou quase-sinônimos do que antônimos. O contrário de se alongar demais é a síntese, que a concisão exprime.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é sinônima de “profícuo”?",
    o: ["proveitoso", "inútil", "prejudicial", "vazio", "lento"],
    x: "Profícuo é o que dá bom resultado, o que traz proveito: uma conversa profícua, um trabalho profícuo. Proveitoso tem sentido muito próximo, e por isso é o sinônimo.\n\nInútil, prejudicial e vazio indicam o contrário, a falta de proveito ou o dano. Lento indica falta de rapidez, e não tem relação com o resultado. Para achar o sinônimo, convém formar uma frase e testar a troca: uma conversa proveitosa mantém o sentido.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é sinônima de “inócuo”?",
    o: ["inofensivo", "nocivo", "perigoso", "fatal", "tóxico"],
    x: "Inócuo é o que não faz mal, o que não causa dano: um produto inócuo, um comentário inócuo. Inofensivo tem sentido muito próximo, e por isso é o sinônimo.\n\nNocivo, perigoso, fatal e tóxico indicam o contrário, algo que causa dano, risco ou morte. Inócuo também pode indicar o que não produz efeito, mas o sinônimo mais próximo, nesta lista, é inofensivo.",
  },
  {
    d: "media",
    e: "Qual opção completa as lacunas da frase “A cena era ___, e o perfume, ___”, nessa ordem?",
    o: ["flagrante / fragrante", "fragrante / flagrante", "flagrante / flagrante", "fragrante / fragrante", "flagrante / fragante"],
    x: "Flagrante significa evidente, patente, que se vê com clareza: uma cena flagrante, um erro flagrante. Fragrante significa perfumado, que exala fragrância: um perfume fragrante, uma flor fragrante. As duas palavras são parônimas, parecidas e de sentidos distintos.\n\nA cena é descrita pelo que se vê, e por isso pede flagrante. O perfume é descrito pelo cheiro, e por isso pede fragrante. As demais sequências trocam as palavras ou repetem a mesma. E fragante não existe na língua.",
  },
  {
    d: "media",
    e: "Qual opção completa as lacunas da frase “O ___ montou o cavalo, e o ___ abriu a porta para a dama”, nessa ordem?",
    o: ["cavaleiro / cavalheiro", "cavalheiro / cavaleiro", "cavaleiro / cavaleiro", "cavalheiro / cavalheiro", "cavaleiros / cavalheiros"],
    x: "Cavaleiro é quem anda a cavalo, ou quem pertence à cavalaria: o cavaleiro montou o cavalo. Cavalheiro é o homem gentil, educado, que trata as pessoas com cortesia: o cavalheiro abriu a porta para a dama. As duas palavras são parônimas.\n\nA ação de montar o cavalo pede cavaleiro, e a ação de abrir a porta com cortesia pede cavalheiro. As demais sequências invertem as palavras, repetem a mesma ou põem as duas no plural, o que não concorda com os artigos no singular.",
  },
  {
    d: "media",
    e: "Qual opção completa as lacunas da frase “O juiz expediu um ___ de busca, e o prefeito cumpre o ___ de quatro anos”, nessa ordem?",
    o: ["mandado / mandato", "mandato / mandado", "mandado / mandado", "mandato / mandato", "mandado / mandáto"],
    x: "Mandado é ordem escrita expedida por autoridade judicial: mandado de busca, mandado de prisão. Mandato é o período em que alguém exerce um cargo por delegação, como o de prefeito, ou a delegação em si: mandato de quatro anos. As duas palavras são parônimas.\n\nO juiz expede ordem, e por isso pede mandado. O prefeito exerce um período no cargo, e por isso pede mandato. As demais sequências trocam as palavras ou repetem a mesma. E mandáto, com acento, não existe: é paroxítona terminada em o e não leva acento.",
  },
  {
    d: "media",
    e: "Qual opção completa as lacunas da frase “Pediu o ___ bancário e analisou o ___ social da região”, nessa ordem?",
    o: ["extrato / estrato", "estrato / extrato", "extrato / extrato", "estrato / estrato", "extrato / estráto"],
    x: "Extrato é o resumo, a cópia de parte de um documento, ou a essência de uma substância: extrato bancário, extrato de tomate. Estrato é cada camada de uma sequência, geológica ou social: estrato social, estrato rochoso. As duas palavras são parônimas.\n\nO documento do banco pede extrato. A camada da sociedade pede estrato. As demais sequências trocam as palavras ou repetem a mesma. E estráto, com acento, não existe: é paroxítona terminada em o e não leva acento.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra sede tem o sentido de vontade de beber?",
    o: ["Estou com muita sede.", "A sede da empresa fica em Recife.", "A sede do clube é antiga.", "A sede administrativa mudou de cidade.", "A sede do governo é em Brasília."],
    x: "Sede, com e fechado, significa vontade de beber: estou com muita sede. Sede, com e aberto, significa local onde funciona um órgão ou uma empresa: a sede da empresa. São palavras homógrafas, de mesma grafia e pronúncia diferente.\n\nNas outras frases, o sentido é de local de funcionamento: a sede da empresa, do clube, administrativa, do governo. Só a primeira indica necessidade de beber, e é a que a oração ligada ao verbo estar mostra com clareza.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra cabo tem o sentido de fio condutor?",
    o: ["O cabo de energia foi cortado.", "O cabo da faca quebrou.", "O cabo Silva chegou ao quartel.", "O cabo da Boa Esperança é famoso.", "Chegou ao cabo da viagem cansado."],
    x: "Cabo é palavra com vários sentidos. Em o cabo de energia foi cortado, o complemento de energia indica um fio condutor, e esse é o sentido pedido.\n\nEm o cabo da faca, é a parte por onde se segura. Em o cabo Silva, é graduação militar. Em o cabo da Boa Esperança, é ponta de terra que avança no mar. E em ao cabo da viagem, é o fim. Cada contexto seleciona um dos sentidos.",
  },
  {
    d: "media",
    e: "Qual é a relação entre as palavras “ave” e “sabiá”?",
    o: ["Hiperonímia e hiponímia", "Sinonímia", "Antonímia", "Homonímia", "Paronímia"],
    x: "Ave é palavra de sentido mais amplo, que engloba muitos animais, e sabiá é um tipo específico de ave. A palavra mais geral é o hiperônimo, e a mais específica, o hipônimo. Por isso a relação é de hiperonímia e hiponímia.\n\nSinonímia seria a relação entre palavras de sentido equivalente. Antonímia, entre palavras de sentido oposto. Homonímia, entre palavras de mesma forma e sentidos diferentes. E paronímia, entre palavras de forma parecida e sentidos diferentes. Nenhuma descreve a relação de ave com sabiá.",
  },
  {
    d: "media",
    e: "Em qual das frases a expressão tem sentido figurado (conotativo)?",
    o: ["Ele tem um coração de pedra.", "A pedra caiu da montanha.", "O coração bateu forte.", "Comprei uma pedra preciosa.", "Os médicos operaram o coração."],
    x: "Em ele tem um coração de pedra, a expressão não descreve um órgão feito de pedra, mas uma pessoa insensível, dura, sem compaixão. É sentido figurado, também chamado conotativo, em que a palavra ganha um significado além do literal.\n\nNas outras frases, pedra e coração têm sentido literal: a pedra que cai, o coração que bate, a pedra preciosa e o órgão operado. Esse sentido literal é o denotativo, que aparece no dicionário.",
  },
  {
    d: "media",
    e: "Qual é a ambiguidade da frase “Maria disse a Ana que ela chegou cedo”?",
    o: ["Não fica claro se ela é Maria ou Ana", "Não fica claro o tempo do verbo", "Não fica claro o sentido de cedo", "Falta o sujeito de disse", "A frase não é ambígua"],
    x: "O pronome ela pode retomar Maria, a que disse, ou Ana, a destinatária. A frase admite duas leituras, e por isso é ambígua, por falta de clareza sobre o referente do pronome.\n\nO tempo do verbo está claro: o pretérito. O sentido de cedo é claro. O sujeito de disse é Maria. E a frase é, sim, ambígua. Para desfazer a ambiguidade, convém repetir o nome: Maria disse a Ana que Maria chegou cedo, ou usar o discurso direto.",
  },
  {
    d: "media",
    e: "Qual das frases mostra como a vírgula elimina a ambiguidade de “Vamos comer Pedro”?",
    o: ["Vamos comer, Pedro", "Vamos, comer Pedro", "Vamos comer Pedro,", "Vamos comer; Pedro", "Vamos comer Pedro."],
    x: "Sem vírgula, a frase pode ser lida como uma proposta de comer Pedro, o que é absurdo, ou como um convite feito a Pedro. Com a vírgula, vamos comer, Pedro, o termo Pedro vira vocativo e a leitura passa a ser a de um convite.\n\nAs demais frases deslocam a vírgula, ou a substituem por ponto e vírgula ou ponto, e continuam ambíguas ou ficam sem sentido. A pontuação pode, portanto, decidir o sentido de uma frase.",
  },
  {
    d: "media",
    e: "Qual reescrita elimina a ambiguidade de “Pedro disse a João que ele seria promovido”?",
    o: ["Pedro disse a João: “Você será promovido”.", "Pedro disse a João que ele seria promovido, talvez.", "Pedro disse a João que seria promovido ele.", "Pedro disse a João que ele, ele seria promovido.", "Pedro disse que ele seria promovido a João."],
    x: "Na frase original, ele pode ser Pedro ou João. A reescrita em discurso direto, Pedro disse a João: “Você será promovido”, deixa claro que o promovido é João, porque você se refere ao interlocutor.\n\nAs demais reescritas mantêm a ambiguidade ou a pioram: acrescentar talvez, mudar a posição de ele, repetir o pronome ou deslocar a João não indicam quem é o promovido. Para eliminar a ambiguidade do pronome, é preciso identificar o referente.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre pleonasmo literário e pleonasmo vicioso?",
    o: ["O literário reforça a ideia com intenção expressiva, e o vicioso repete sem necessidade", "O literário é sempre erro, e o vicioso é recurso de estilo", "Os dois são recursos de estilo", "Os dois são erros", "Não há diferença"],
    x: "O pleonasmo literário repete uma ideia para enfatizá-la, com intenção expressiva: vi com meus próprios olhos, chorou lágrimas amargas. É recurso de estilo, e enriquece o texto. O pleonasmo vicioso repete uma ideia sem acrescentar nada, como subir para cima ou entrar para dentro, e empobrece o texto.\n\nInverter as duas definições contraria a gramática. Os dois não são, ao mesmo tempo, recursos de estilo ou erros. E há, sim, diferença entre eles: a intenção expressiva.",
  },
  {
    d: "media",
    e: "O que significa a expressão “quebrar o galho”?",
    o: ["Resolver provisoriamente um problema", "Danificar uma árvore", "Terminar uma relação", "Fazer um esforço inútil", "Mudar de ideia"],
    x: "Quebrar o galho é uma expressão idiomática, ou seja, uma expressão cujo sentido não se obtém somando o das palavras. Significa ajudar a resolver um problema de modo provisório ou improvisado: ele quebrou o galho com um conserto rápido.\n\nDanificar uma árvore seria o sentido literal. Terminar uma relação, fazer um esforço inútil e mudar de ideia correspondem a outras expressões. As expressões idiomáticas têm de ser aprendidas como um todo, porque o sentido é figurado.",
  },
  {
    d: "media",
    e: "Qual palavra equivale, na frase “O doente melhorava a olhos vistos”, à expressão a olhos vistos?",
    o: ["visivelmente", "lentamente", "raramente", "secretamente", "dificilmente"],
    x: "A olhos vistos é locução adverbial de modo e significa de forma que todos podem ver, de modo visível: o doente melhorava de modo claramente visível. Por isso visivelmente é a palavra que lhe equivale.\n\nLentamente indica vagar. Raramente indica pouca frequência. Secretamente indica sigilo, o oposto de a olhos vistos. Dificilmente indica pouca probabilidade. Em nenhum desses casos a melhora é algo que todos veem.",
  },
  {
    d: "media",
    e: "Por que é raro existirem sinônimos perfeitos?",
    o: ["Porque as palavras costumam diferir em registro, nuance ou contexto de uso", "Porque a língua não tem sinônimos", "Porque sinônimos têm sempre grafia igual", "Porque todos os sinônimos são antônimos", "Porque sinônimos só existem em textos literários"],
    x: "Dificilmente duas palavras são trocáveis em todos os contextos. Costumam diferir em registro (formal ou informal), em nuance de sentido, em intensidade ou em regência: morrer e falecer, falar e proferir. Por isso falamos de quase-sinônimos, e a substituição exige atenção ao contexto.\n\nA língua tem, sim, muitos sinônimos aproximados. A grafia dos sinônimos é diferente. Sinônimos não são antônimos. E ocorrem em qualquer tipo de texto, e não só no literário.",
  },
  {
    d: "media",
    e: "Qual palavra abaixo é hipônimo de “veículo”?",
    o: ["bicicleta", "rua", "motorista", "estrada", "garagem"],
    x: "Veículo é palavra de sentido amplo, que engloba carro, ônibus, moto, bicicleta e outros meios de transporte. Bicicleta é um tipo específico de veículo, e por isso é seu hipônimo.\n\nRua e estrada são vias, e não veículos. Motorista é a pessoa que conduz o veículo. Garagem é o lugar onde o veículo fica guardado. Nenhuma dessas palavras é um tipo de veículo, e por isso não são hipônimos dele.",
  },
  {
    d: "media",
    e: "Qual par é de antônimos complementares, isto é, em que a negação de um implica o outro?",
    o: ["vivo e morto", "quente e frio", "alto e baixo", "rico e pobre", "bom e mau"],
    x: "Nos antônimos complementares, afirmar um termo é negar o outro, e não há meio-termo: quem não está vivo está morto. Outros pares são casado e solteiro, par e ímpar, presente e ausente.\n\nQuente e frio, alto e baixo, rico e pobre e bom e mau são antônimos graduais: existem graus intermediários, como morno, médio, remediado e razoável. Negar quente não implica frio, pois pode ser morno.",
  },
  {
    d: "media",
    e: "O que significa “ficar com a pulga atrás da orelha”?",
    o: ["Ficar desconfiado", "Ficar com coceira", "Ficar distraído", "Ficar com sono", "Ficar nervoso"],
    x: "Ficar com a pulga atrás da orelha é expressão idiomática que significa ficar desconfiado, com suspeita de que algo não vai bem: com o relatório incompleto, ficou com a pulga atrás da orelha. O sentido é figurado e não se deduz das palavras isoladas.\n\nFicar com coceira seria o sentido literal. Ficar distraído, com sono e nervoso correspondem a outros estados, sem relação com a desconfiança. As expressões idiomáticas precisam ser reconhecidas como um todo.",
  },
  {
    d: "media",
    e: "O que é a polissemia na semântica da língua portuguesa?",
    o: ["A propriedade de uma palavra ter vários sentidos relacionados", "A identidade de pronúncia entre palavras de escrita diferente", "A semelhança de sentido entre palavras diferentes", "A oposição de sentido entre palavras", "A repetição desnecessária de uma ideia"],
    x: "Polissemia é a propriedade de uma mesma palavra ter vários sentidos que se relacionam entre si, e o contexto indica qual deles vale. Cabo, banco e manga são exemplos de palavras polissêmicas, com sentidos diferentes conforme a frase.\n\nA identidade de pronúncia entre palavras de escrita diferente é a homofonia. A semelhança de sentido é a sinonímia. A oposição de sentido é a antonímia. E a repetição desnecessária de uma ideia é o pleonasmo.",
  },
  {
    d: "media",
    e: "O que são palavras homônimas na semântica da língua?",
    o: ["Palavras de mesma grafia ou pronúncia e sentidos diferentes", "Palavras de sentidos semelhantes", "Palavras de sentidos opostos", "Palavras formadas por prefixos", "Palavras com vários sentidos relacionados"],
    x: "Palavras homônimas têm a mesma grafia, a mesma pronúncia ou ambas, mas sentidos diferentes e sem relação entre si. Podem ser homógrafas (mesma escrita, como sede de beber e sede de local) ou homófonas (mesma pronúncia, como cela e sela).\n\nPalavras de sentidos semelhantes são sinônimas. Palavras de sentidos opostos são antônimas. Palavras formadas por prefixos são palavras derivadas. E palavras com vários sentidos relacionados são polissêmicas.",
  },
  {
    d: "media",
    e: "O que são palavras parônimas na semântica da língua?",
    o: ["Palavras de grafia e pronúncia parecidas e sentidos diferentes", "Palavras de sentidos semelhantes", "Palavras de mesma grafia e sentidos diferentes", "Palavras de sentidos opostos", "Palavras formadas pela junção de duas outras"],
    x: "Palavras parônimas têm grafia e pronúncia parecidas, mas não idênticas, e sentidos diferentes: eminente e iminente, descrição e discrição, infringir e infligir. Por isso é fácil confundi-las.\n\nPalavras de sentidos semelhantes são sinônimas. Palavras de mesma grafia e sentidos diferentes são homônimas. Palavras de sentidos opostos são antônimas. E palavras formadas pela junção de duas outras são compostas.",
  },
  {
    d: "media",
    e: "Qual é a causa da ambiguidade em “O banco estava cheio”?",
    o: ["A palavra banco tem mais de um sentido", "A frase não tem verbo no pretérito", "Falta um sujeito para o verbo estava", "A palavra estava funciona como pronome", "A frase está na voz passiva analítica"],
    x: "A frase pode significar que o assento estava lotado de pessoas ou que a instituição financeira estava com muita gente. A palavra banco tem mais de um sentido, e a frase não traz contexto suficiente para escolher um deles. É ambiguidade lexical.\n\nA frase tem verbo: estava. O sujeito é o banco. Estava é verbo, e não pronome. E a frase não está na voz passiva. A ambiguidade vem do duplo sentido da palavra.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é sinônima de “inexorável”?",
    o: ["implacável", "flexível", "brando", "incerto", "tolerante"],
    x: "Inexorável é o que não cede a pedidos nem a súplicas, o que não se pode evitar: um destino inexorável, uma decisão inexorável. Implacável tem sentido muito próximo, e por isso é o sinônimo.\n\nFlexível, brando e tolerante indicam o contrário, a capacidade de ceder. Incerto indica falta de certeza, e não tem relação com a inflexibilidade. Para achar o sinônimo, vale testar a troca numa frase: um destino implacável mantém o sentido.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual das frases infringir e infligir estão empregados corretamente?",
    o: ["O réu infringiu a lei, e o juiz lhe infligiu uma pena severa.", "O réu infligiu a lei, e o juiz lhe infringiu uma pena severa.", "O réu infringiu a lei, e o juiz lhe infringiu uma pena severa.", "O réu infligiu a lei, e o juiz lhe infligiu uma pena severa.", "O réu infrigiu a lei, e o juiz lhe infligiu uma pena severa."],
    x: "Infringir significa desrespeitar, violar: infringir a lei, uma regra. Infligir significa aplicar uma pena ou um castigo: infligir uma pena. As duas palavras são parônimas, parecidas na forma e de sentidos diferentes.\n\nO réu desrespeitou a lei, e por isso infringiu. O juiz aplicou uma pena, e por isso infligiu. As demais frases trocam os verbos ou repetem o mesmo. E infrigiu, sem o n, não existe na língua.",
  },
  {
    d: "dificil",
    e: "Em qual das frases deferir e diferir estão empregados corretamente?",
    o: ["O juiz deferiu o pedido, mas as opiniões dos advogados diferem.", "O juiz diferiu o pedido, mas as opiniões dos advogados deferem.", "O juiz deferiu o pedido, mas as opiniões dos advogados deferem.", "O juiz diferiu o pedido, mas as opiniões dos advogados diferem.", "O juiz deferiu o pedido, mas as opiniões dos advogados diferiu."],
    x: "Deferir significa atender, conceder: deferir um pedido. Diferir significa ser diferente ou adiar: as opiniões diferem, diferir o pagamento. As duas palavras são parônimas, e a troca de uma pela outra altera o sentido.\n\nO juiz concedeu o pedido, e por isso deferiu. As opiniões são diferentes entre si, e por isso diferem. As demais frases trocam os verbos ou repetem o mesmo. E opiniões diferiu erra a concordância, pois o sujeito está no plural.",
  },
  {
    d: "dificil",
    e: "Qual das frases a seguir NÃO apresenta nenhuma ambiguidade?",
    o: ["Ana, que usava binóculo, viu Maria.", "Ana viu Maria com o binóculo.", "Pedro disse a João que ele chegou.", "O banco estava cheio.", "Vi o rapaz com a câmera."],
    x: "Em Ana, que usava binóculo, viu Maria, a oração intercalada liga o binóculo a Ana, e a leitura é única: foi Ana quem usava o binóculo. A estrutura deixa claro o referente.\n\nAna viu Maria com o binóculo e vi o rapaz com a câmera admitem duas ligações do adjunto. Pedro disse a João que ele chegou deixa o pronome sem referente certo. E o banco estava cheio tem duplo sentido lexical. Todas essas frases são ambíguas.",
  },
  {
    d: "dificil",
    e: "De que natureza é a ambiguidade de “Vi o rapaz com a câmera”?",
    o: ["Sintática, pela ligação do adjunto ao verbo ou ao substantivo", "Lexical, pelo duplo sentido de uma palavra", "De pontuação, por falta de vírgula", "De pronome, por referente indefinido", "Não há ambiguidade"],
    x: "A expressão com a câmera pode ser adjunto de vi (eu estava com a câmera quando vi o rapaz) ou adjunto de rapaz (o rapaz estava com a câmera). A dúvida está na ligação sintática do termo, e por isso a ambiguidade é sintática.\n\nNão é lexical, porque nenhuma palavra tem duplo sentido. Não é de pontuação, porque não há sinal que mude a leitura. Não é de pronome, porque não há pronome. E há, sim, ambiguidade na frase.",
  },
  {
    d: "dificil",
    e: "Qual par é de antônimos graduais, que admitem graus intermediários?",
    o: ["quente e frio", "vivo e morto", "casado e solteiro", "presente e ausente", "par e ímpar"],
    x: "Antônimos graduais admitem graus intermediários entre os dois extremos, e negar um não implica o outro: entre quente e frio há morno, fresco, ameno. Outros pares são alto e baixo, rico e pobre.\n\nVivo e morto, casado e solteiro, presente e ausente, par e ímpar são antônimos complementares: afirmar um é negar o outro, sem meio-termo. Por isso só quente e frio é gradual.",
  },
  {
    d: "dificil",
    e: "Qual é o efeito de usar “pessoa de idade avançada” no lugar de “velho”?",
    o: ["Atenuar a expressão, com eufemismo", "Intensificar a ideia, com hipérbole", "Repetir a ideia, com pleonasmo", "Contrastar ideias, com antítese", "Atribuir ação humana a um objeto, com personificação"],
    x: "Pessoa de idade avançada suaviza a palavra velho, que pode soar dura ou desrespeitosa. Esse recurso de atenuar uma expressão desagradável com outra mais branda é o eufemismo.\n\nA hipérbole exagera. O pleonasmo repete uma ideia. A antítese contrasta ideias opostas. A personificação atribui características humanas a seres inanimados. Nenhum desses recursos corresponde à substituição de velho por uma expressão mais suave.",
  },
  {
    d: "dificil",
    e: "No trecho “Ele é uma raposa nos negócios”, o que significa raposa?",
    o: ["Pessoa astuta, em sentido figurado", "Animal selvagem", "Pessoa preguiçosa", "Pessoa generosa", "Pessoa distraída"],
    x: "A raposa tem fama de esperteza, e por isso, aplicada a uma pessoa, a palavra exprime astúcia: ele é astuto nos negócios. É sentido figurado, ou conotativo, em que o nome do animal passa a designar uma qualidade associada a ele.\n\nAnimal selvagem seria o sentido literal, que não se aplica a uma pessoa. Preguiçosa, generosa e distraída indicam outras qualidades, sem relação com a fama da raposa. O contexto, nos negócios, reforça a ideia de astúcia.",
  },
  {
    d: "dificil",
    e: "Na frase “Ele não tem papas na língua”, qual é o sentido da expressão?",
    o: ["Fala com franqueza, sem rodeios", "Não consegue falar", "Fala baixo", "Fala muito rápido", "Come pouco"],
    x: "Não ter papas na língua é expressão idiomática e significa falar com franqueza, dizer o que pensa sem rodeios nem medo de desagradar. O sentido é figurado: papa, aí, é a ideia de algo que prende ou suaviza a fala.\n\nNão conseguir falar, falar baixo, falar muito rápido e comer pouco seriam leituras literais ou deslocadas. As expressões idiomáticas têm de ser aprendidas como um todo, porque o sentido não se obtém somando o das palavras.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre sinonímia e antonímia está de acordo com a semântica?",
    o: ["Sinônimos têm sentido semelhante, e antônimos, sentido oposto, ambos dependentes do contexto", "Sinônimos sempre podem substituir uns aos outros em qualquer contexto", "Antônimos têm sempre a mesma grafia", "Sinônimos têm sempre grafia semelhante", "Antônimos só existem entre verbos"],
    x: "Sinônimos são palavras de sentido semelhante, e antônimos, de sentido oposto, e a relação entre elas depende do contexto: uma palavra pode ter sinônimos diferentes conforme o sentido em que é usada. Por isso a escolha exige atenção ao contexto.\n\nSinônimos nem sempre se substituem em todos os contextos, por diferenças de registro e nuance. Antônimos não têm a mesma grafia. Sinônimos não têm grafia semelhante necessariamente. E antônimos existem entre substantivos, adjetivos, verbos e advérbios.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre a ambiguidade está de acordo com a gramática e a semântica?",
    o: ["Ocorre quando o enunciado admite mais de uma interpretação", "Ocorre apenas quando há erro de ortografia", "É sempre um recurso de estilo desejável", "Ocorre apenas com verbos", "Só ocorre na linguagem oral"],
    x: "A ambiguidade ocorre quando um enunciado admite mais de uma leitura. Pode ter causa lexical (palavra com mais de um sentido), sintática (termo que pode ligar-se a dois outros), de pontuação (vírgula que altera a leitura) ou de referente do pronome (ele sem antecedente claro).\n\nNão se limita a erros de ortografia. Nem sempre é recurso de estilo, e em textos formais costuma ser um defeito a evitar. Não ocorre só com verbos nem só na fala: pode ocorrer em qualquer tipo de texto.",
  },
];
