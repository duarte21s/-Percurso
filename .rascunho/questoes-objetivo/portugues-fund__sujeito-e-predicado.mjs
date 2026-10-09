/* Rascunho — Português · 6º ao 9º / Sujeito e predicado.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), autorais, em
   linguagem e situações de escola do ensino fundamental II. Gramática não se
   confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram regras assentadas: sujeito simples, composto,
   oculto, indeterminado e oração sem sujeito (fenômenos da natureza, haver no
   sentido de existir, fazer indicando fenômeno), núcleo do sujeito, sujeito
   posposto, predicado verbal, nominal e verbo-nominal, verbos de ligação,
   predicativo do sujeito, transitividade verbal e os complementos (objeto
   direto, objeto indireto e adjunto adverbial). Ficaram de fora, de propósito,
   os casos em que as gramáticas divergem, como o sujeito de ser indicando
   horas e datas e a análise de algumas construções com se. */

export const materia = "portugues-fund";
export const tema = "Sujeito e predicado";
export const arquivo = "portugues-fund__sujeito-e-predicado";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "O que é o sujeito de uma oração, em termos gramaticais?",
    o: ["O termo sobre o qual se declara algo e com o qual o verbo concorda", "A parte da oração que expressa a ação ou o estado", "O termo que sempre vem no início da frase", "A palavra que liga dois termos entre si", "O termo que completa o sentido do verbo"],
    x: "O sujeito é o termo da oração sobre o qual se declara alguma coisa, e é com ele que o verbo concorda em pessoa e número. Em os alunos chegaram cedo, o sujeito é os alunos: é sobre eles que se diz algo, e o verbo chegaram está no plural por causa deles.\n\nExpressar a ação ou o estado é o papel do verbo e do predicado. O sujeito nem sempre vem no início da frase, pois pode vir depois do verbo, como em chegaram os alunos. Ligar dois termos é função da preposição. E completar o sentido do verbo é função dos complementos verbais.",
  },
  {
    d: "facil",
    e: "Em “Os alunos chegaram cedo”, qual é o sujeito?",
    o: ["Os alunos", "chegaram", "cedo", "chegaram cedo", "Os"],
    x: "Para achar o sujeito, pergunta-se ao verbo: quem chegou cedo? Os alunos. É sobre eles que a oração declara alguma coisa, e o verbo chegaram concorda com eles no plural. Por isso o sujeito é os alunos.\n\nChegaram é o verbo, a palavra que indica a ação. Cedo é um advérbio de tempo, que indica quando a ação ocorreu. Chegaram cedo é o predicado, a parte que se declara sobre o sujeito. E os é só o artigo, que sozinho não forma o termo inteiro. Só os alunos responde à pergunta quem.",
  },
  {
    d: "facil",
    e: "Em “A professora corrigiu as provas”, qual é o sujeito?",
    o: ["A professora", "corrigiu", "as provas", "corrigiu as provas", "A professora corrigiu"],
    x: "Pergunta-se ao verbo: quem corrigiu as provas? A professora. O verbo corrigiu concorda com ela, no singular. Por isso o sujeito é a professora.\n\nCorrigiu é o verbo. As provas é o que foi corrigido, termo que completa o sentido do verbo e se chama objeto direto. Corrigiu as provas é o predicado, a parte que diz o que o sujeito fez. E a professora corrigiu junta o sujeito e o verbo, o que não corresponde ao sujeito inteiro. Só a professora responde à pergunta quem.",
  },
  {
    d: "facil",
    e: "Em “Meus primos moram no interior”, qual é o núcleo do sujeito?",
    o: ["primos", "Meus", "moram", "interior", "no interior"],
    x: "O sujeito da oração é meus primos. Dentro desse termo, a palavra principal, que concorda com o verbo, é primos: é ela o núcleo do sujeito. Meus apenas acompanha o substantivo e indica a quem os primos pertencem.\n\nMoram é o verbo e faz parte do predicado. Interior e no interior estão no predicado: indicam o lugar onde os primos moram. Só primos é o núcleo, ou seja, o termo em torno do qual se organiza o sujeito.",
  },
  {
    d: "facil",
    e: "Em qual das frases abaixo o sujeito é composto?",
    o: ["Pedro e Lucas jogaram bola no intervalo.", "Pedro jogou bola no intervalo.", "Os meninos jogaram bola no intervalo.", "A turma jogou bola no intervalo.", "Jogamos bola no intervalo."],
    x: "O sujeito é composto quando tem mais de um núcleo. Na primeira frase, quem jogou bola? Pedro e Lucas: são dois núcleos, ligados pela conjunção e. Por isso o sujeito é composto.\n\nNas demais, o sujeito tem um só núcleo. Em Pedro jogou bola, o núcleo é Pedro. Em os meninos jogaram, o núcleo é meninos, no plural, mas é um núcleo só. Em a turma jogou, o núcleo é turma, um nome coletivo. E em jogamos bola, o sujeito é nós, oculto. Só a primeira frase tem dois núcleos.",
  },
  {
    d: "facil",
    e: "Em “Chegamos tarde à escola”, qual é o sujeito e como ele se classifica?",
    o: ["Nós, sujeito oculto", "Tarde, sujeito simples", "Escola, sujeito composto", "Chegamos, sujeito indeterminado", "Sujeito inexistente"],
    x: "A terminação do verbo chegamos mostra que quem chegou foi nós. Esse sujeito não aparece escrito na frase, mas é identificado pela terminação do verbo. Por isso é chamado de sujeito oculto, ou desinencial.\n\nTarde é advérbio de tempo e não é sujeito. Escola faz parte do termo à escola, que indica o lugar. Chegamos é o verbo, e verbo não é sujeito. E a oração não é sem sujeito, pois o verbo tem sujeito, ainda que oculto. Só nós, oculto, é a resposta.",
  },
  {
    d: "facil",
    e: "Qual das frases abaixo é uma oração sem sujeito?",
    o: ["Choveu muito ontem.", "Os alunos riram muito ontem.", "Ele chegou muito cedo ontem.", "Choramos muito ontem.", "A chuva caiu ontem."],
    x: "O verbo chover indica um fenômeno da natureza e não tem sujeito: não se pergunta quem choveu. A oração é considerada sem sujeito, e o verbo fica na terceira pessoa do singular. Outros verbos de fenômeno são nevar, ventar, trovejar e amanhecer.\n\nNas demais frases há sujeito. Em os alunos riram, o sujeito é os alunos. Em ele chegou, é ele. Em choramos, é nós, oculto. E em a chuva caiu, é a chuva, pois ali o verbo cair indica ação de um ser, e não um fenômeno. Só choveu muito ontem é uma oração sem sujeito.",
  },
  {
    d: "facil",
    e: "Em termos gramaticais, o que é o predicado de uma oração?",
    o: ["O que se declara a respeito do sujeito", "O termo que sempre vem no fim da frase", "A palavra que acompanha o substantivo", "O termo sobre o qual se fala na oração", "A parte que liga duas orações entre si"],
    x: "O predicado é tudo o que se declara a respeito do sujeito. Em os meninos jogaram bola, os meninos é o sujeito, e jogaram bola é o predicado, a parte que diz o que eles fizeram. O verbo é a palavra mais importante do predicado.\n\nO termo sobre o qual se fala é o sujeito, e não o predicado. A palavra que acompanha o substantivo é o adjunto adnominal, como um artigo ou um adjetivo. O predicado nem sempre vem no fim da frase, pois o sujeito pode vir depois. E ligar orações é função da conjunção.",
  },
  {
    d: "facil",
    e: "Em “A menina cantou uma música bonita”, qual é o predicado?",
    o: ["cantou uma música bonita", "A menina", "cantou", "uma música bonita", "A menina cantou"],
    x: "O sujeito é a menina, pois é dela que se declara algo. Tudo o que se declara a respeito dela é o predicado: cantou uma música bonita. O verbo cantou é o núcleo do predicado.\n\nA menina é o sujeito, e não o predicado. Cantou, sozinho, é só o verbo, e deixa de fora o que foi cantado. Uma música bonita é só o complemento do verbo. E a menina cantou junta o sujeito e o verbo. Só cantou uma música bonita reúne tudo o que se diz sobre o sujeito.",
  },
  {
    d: "facil",
    e: "Em “A casa é grande”, como se classifica o predicado?",
    o: ["Nominal", "Verbal", "Verbo-nominal", "Inexistente", "Composto"],
    x: "O verbo é, nessa frase, apenas liga o sujeito a uma característica: a casa tem a característica de ser grande. Quando o predicado tem um verbo de ligação e a ideia principal vem de um nome, que aqui é grande, ele se chama predicado nominal.\n\nO predicado verbal teria um verbo que indica ação, como em a casa caiu. O verbo-nominal tem um verbo de ação e uma característica ao mesmo tempo. Inexistente e composto não são classificações de predicado. Só nominal descreve a frase.",
  },
  {
    d: "facil",
    e: "Em “Os atletas correram na pista”, como se classifica o predicado?",
    o: ["Verbal", "Nominal", "Verbo-nominal", "Inexistente", "Composto"],
    x: "O verbo correram indica uma ação praticada pelos atletas. Quando a ideia principal do predicado está em um verbo que indica ação, o predicado é verbal. O núcleo é o verbo correram, e na pista indica o lugar onde a ação aconteceu.\n\nO predicado nominal teria um verbo de ligação e uma característica, como em os atletas estavam cansados. O verbo-nominal teria uma ação e uma característica juntas. Inexistente e composto não são classificações de predicado. Só verbal descreve a frase.",
  },
  {
    d: "facil",
    e: "Qual dos verbos abaixo é um verbo de ligação?",
    o: ["ser", "correr", "comprar", "escrever", "viajar"],
    x: "Os verbos de ligação não indicam ação: eles ligam o sujeito a uma característica, a um estado. O verbo ser é o mais comum deles, como em a menina é inteligente. Outros são estar, parecer, ficar, permanecer e continuar.\n\nCorrer, comprar, escrever e viajar indicam ações praticadas pelo sujeito: correr é se deslocar rapidamente, comprar é adquirir algo, escrever é registrar palavras, e viajar é ir a outro lugar. São verbos que indicam ação, e não verbos de ligação.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Em “O professor e a diretora conversaram”, quantos núcleos tem o sujeito?",
    o: ["Dois", "Um", "Três", "Quatro", "Nenhum"],
    x: "Pergunta-se ao verbo: quem conversou? O professor e a diretora. Os núcleos são as palavras principais de cada parte: professor e diretora. São dois, ligados pela conjunção e, por isso o sujeito é composto e o verbo fica no plural.\n\nUm núcleo teria o sujeito simples. Três ou quatro núcleos exigiriam mais substantivos ligados entre si, o que a frase não traz. E nenhum núcleo só ocorreria se não houvesse sujeito. Como há dois seres que conversaram, a resposta é dois.",
  },
  {
    d: "media",
    e: "Em “Fomos ao cinema ontem”, como se classifica o sujeito?",
    o: ["Oculto, nós", "Simples, ontem", "Composto, cinema e ontem", "Indeterminado", "Inexistente"],
    x: "A terminação do verbo fomos mostra que o sujeito é nós, ainda que a palavra não esteja escrita. Um sujeito identificado pela terminação do verbo é chamado de oculto, ou desinencial, e é um tipo de sujeito simples.\n\nOntem é advérbio de tempo e não pode ser sujeito. Cinema e ontem não formam sujeito composto, pois um deles faz parte do termo ao cinema e o outro é advérbio. O sujeito indeterminado seria o caso de não se saber quem fez a ação, mas aqui o verbo indica que é nós. E inexistente seria o de uma oração sem sujeito.",
  },
  {
    d: "media",
    e: "Em “Bateram à porta”, como se classifica o sujeito?",
    o: ["Indeterminado", "Oculto, eles", "Simples, a porta", "Composto", "Inexistente"],
    x: "O verbo bateram está na terceira pessoa do plural, mas a frase não diz quem bateu, e o contexto não permite identificar. Quando o verbo está na terceira pessoa do plural, sem referência a quem faz a ação, o sujeito é indeterminado: não se sabe, ou não se quer dizer, quem foi.\n\nOculto exigiria que a pessoa fosse identificável pelo texto. A porta é o lugar em que se bateu, e não o sujeito. Composto exigiria mais de um núcleo. E inexistente seria o caso de uma oração sem sujeito, como choveu. Só indeterminado descreve a frase.",
  },
  {
    d: "media",
    e: "Em “Precisa-se de motoristas”, como se classifica o sujeito?",
    o: ["Indeterminado", "Simples, motoristas", "Oculto, nós", "Composto", "Inexistente"],
    x: "O verbo precisar, nesse sentido, é seguido da preposição de: precisa-se de motoristas. O termo de motoristas é o complemento do verbo, e não o sujeito. Com o pronome se, o verbo fica no singular e o sujeito é indeterminado: não se diz quem precisa de motoristas.\n\nSimples, motoristas seria um erro, pois motoristas vem com a preposição de e é complemento. Oculto, nós não combina com o verbo no singular. Composto exigiria mais de um núcleo. E inexistente seria o caso de verbos como chover. Só indeterminado descreve a frase.",
  },
  {
    d: "media",
    e: "Em “Há muitos livros na biblioteca”, como se classifica o sujeito?",
    o: ["Inexistente: haver no sentido de existir", "Simples, muitos livros", "Oculto, nós", "Indeterminado", "Composto, livros e biblioteca"],
    x: "O verbo haver, quando significa existir, não tem sujeito: há muitos livros equivale a existem muitos livros na biblioteca. O termo muitos livros é o complemento do verbo, e o verbo fica sempre no singular. Por isso a oração é sem sujeito, e o sujeito é inexistente.\n\nSimples, muitos livros, seria considerar que o verbo concorda com os livros, o que não ocorre. Oculto, nós, não combina com a terceira pessoa. O indeterminado supõe uma ação cujo autor não se identifica, o que não é o caso. E composto exigiria mais de um núcleo ligados entre si. Só inexistente descreve a frase.",
  },
  {
    d: "media",
    e: "Em “Faz muito frio hoje”, como se classifica o sujeito?",
    o: ["Inexistente", "Simples, frio", "Oculto, ele", "Indeterminado", "Composto, frio e hoje"],
    x: "O verbo fazer, quando indica fenômeno da natureza, como a temperatura, não tem sujeito. Não se pergunta quem faz frio. A oração é sem sujeito, e o verbo fica na terceira pessoa do singular.\n\nO termo frio é o complemento do verbo e não o sujeito. Oculto, ele, suporia que se soubesse a quem a frase se refere, o que não ocorre. O indeterminado supõe uma ação cujo autor não se identifica, o que não é o caso. E frio e hoje não formam sujeito composto, pois hoje é advérbio de tempo. Só inexistente descreve a frase.",
  },
  {
    d: "media",
    e: "Em “Chegaram os convidados”, qual é o sujeito?",
    o: ["os convidados", "Chegaram", "Chegaram os convidados", "Nenhum, pois a oração não tem sujeito", "Oculto, eles"],
    x: "O sujeito nem sempre vem antes do verbo. Quando vem depois, é chamado de sujeito posposto. Pergunta-se ao verbo: quem chegou? Os convidados. O verbo chegaram está no plural porque concorda com os convidados.\n\nChegaram é o verbo, e não o sujeito. Chegaram os convidados é a oração inteira, e não apenas o sujeito. A oração tem, sim, sujeito, pois não é um fenômeno da natureza. E oculto, eles, não cabe, pois o sujeito aparece escrito na frase. Só os convidados responde à pergunta quem.",
  },
  {
    d: "media",
    e: "Em “O vento forte do inverno derrubou as árvores”, qual é o núcleo do sujeito?",
    o: ["vento", "forte", "inverno", "derrubou", "árvores"],
    x: "O sujeito é o vento forte do inverno, termo que responde à pergunta quem derrubou as árvores. A palavra principal desse termo, que concorda com o verbo derrubou, é vento: é o núcleo. Forte e do inverno apenas caracterizam o vento.\n\nInverno faz parte do complemento do substantivo, o termo do inverno, e não é núcleo. Derrubou é o verbo, núcleo do predicado. Árvores é o que foi derrubado, e é objeto direto. Só vento é o núcleo do sujeito.",
  },
  {
    d: "media",
    e: "Qual das frases abaixo tem predicado verbal?",
    o: ["Os meninos jogaram bola na quadra.", "A quadra está limpa.", "A bola parece nova.", "Os meninos ficaram cansados.", "O dia continua frio."],
    x: "Na primeira frase, o verbo jogaram indica uma ação praticada pelos meninos. Como a ideia principal do predicado está nesse verbo, o predicado é verbal.\n\nNas demais frases, os verbos estão, parece, ficaram e continua são verbos de ligação, que apenas ligam o sujeito a uma característica: limpa, nova, cansados, frio. Com verbo de ligação, o predicado é nominal. Só a primeira frase traz um verbo que indica ação.",
  },
  {
    d: "media",
    e: "Em “O dia estava ensolarado”, qual é o predicativo do sujeito?",
    o: ["ensolarado", "dia", "estava", "O", "estava ensolarado"],
    x: "O predicativo do sujeito é a característica ou o estado atribuído ao sujeito por meio de um verbo de ligação. Em o dia estava ensolarado, o verbo estava liga o sujeito o dia à característica ensolarado: esse é o predicativo.\n\nDia é o núcleo do sujeito. Estava é o verbo de ligação. O é o artigo. E estava ensolarado é o predicado inteiro, formado pelo verbo de ligação e pelo predicativo. Só ensolarado é a característica atribuída ao sujeito.",
  },
  {
    d: "media",
    e: "Em “A sopa parece salgada”, como se classifica o verbo parecer?",
    o: ["Verbo de ligação", "Verbo transitivo direto", "Verbo transitivo indireto", "Verbo intransitivo", "Verbo auxiliar"],
    x: "O verbo parece não indica uma ação: ele liga o sujeito a uma característica, salgada, e mostra a impressão que se tem da sopa. Por isso é verbo de ligação, e o predicado é nominal.\n\nUm verbo transitivo direto pede um complemento sem preposição, como em comprar um livro. Um verbo transitivo indireto pede complemento com preposição, como em gostar de música. Um verbo intransitivo não pede complemento, como em cantar. E um verbo auxiliar acompanha outro verbo, como em estar estudando. Aqui, parece só liga o sujeito à característica.",
  },
  {
    d: "media",
    e: "Em “Os alunos saíram felizes da sala”, como se classifica o predicado?",
    o: ["Verbo-nominal", "Verbal", "Nominal", "Inexistente", "Composto"],
    x: "O verbo saíram indica uma ação, a de sair, e a palavra felizes atribui uma característica ao sujeito, os alunos. Quando o predicado tem, ao mesmo tempo, uma ação e uma característica do sujeito, ele se chama verbo-nominal. Os núcleos são o verbo saíram e o predicativo felizes.\n\nO verbal teria só a ação, sem o predicativo. O nominal teria um verbo de ligação, e saíram não é de ligação. Inexistente e composto não são classificações de predicado. Só verbo-nominal reúne a ação e a característica.",
  },
  {
    d: "media",
    e: "Em “Ela ficou triste com a notícia”, qual é o predicativo do sujeito?",
    o: ["triste", "notícia", "com a notícia", "ficou", "Ela"],
    x: "O verbo ficou, nessa frase, liga o sujeito ela a uma característica: ela passou a estar triste. O verbo ficar, nesse sentido, é verbo de ligação, e a característica atribuída ao sujeito, triste, é o predicativo do sujeito.\n\nNotícia e com a notícia indicam a causa da tristeza, e não uma característica de ela. Ficou é o verbo de ligação. E ela é o sujeito. Só triste é a característica atribuída ao sujeito.",
  },
  {
    d: "media",
    e: "Em “O vento forte derrubou as árvores”, qual é o núcleo do predicado?",
    o: ["derrubou", "as árvores", "vento", "forte", "O vento"],
    x: "Nos predicados verbais, o núcleo é o verbo, pois a ação está nele. Em derrubou as árvores, a ideia principal é a de derrubar, e por isso o núcleo é derrubou. As árvores é o termo que completa o sentido do verbo.\n\nVento é o núcleo do sujeito, e não do predicado. Forte é um adjetivo que caracteriza o vento. O vento é o sujeito inteiro. E as árvores é complemento, e não o núcleo. Só derrubou é o núcleo do predicado.",
  },
  {
    d: "media",
    e: "Em “A prova estava difícil”, qual é o núcleo do predicado?",
    o: ["difícil", "estava", "prova", "A prova", "estava difícil"],
    x: "Quando o predicado é nominal, a ideia principal está no predicativo, e não no verbo de ligação. O verbo estava apenas liga o sujeito à característica. Por isso o núcleo do predicado é difícil, a palavra que diz como a prova estava.\n\nEstava é o verbo de ligação, que não carrega a ideia principal. Prova é o núcleo do sujeito, e a prova é o sujeito inteiro. E estava difícil é o predicado inteiro, e não o seu núcleo. Só difícil é o núcleo do predicado nominal.",
  },
  {
    d: "media",
    e: "Em “Comprei um caderno novo”, como se classifica o verbo comprar?",
    o: ["Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação", "Transitivo direto e indireto"],
    x: "O verbo comprar pede um complemento sem preposição, o que foi comprado: um caderno novo. Quando o complemento vem sem preposição, o verbo é transitivo direto, e o complemento é o objeto direto.\n\nO transitivo indireto pede preposição, como em gostar de música. O intransitivo não pede complemento, como em os pássaros cantam. O de ligação liga o sujeito a uma característica. E o transitivo direto e indireto pede dois complementos, um sem e outro com preposição, como em entreguei o livro à professora. Aqui só há um complemento, sem preposição.",
  },
  {
    d: "media",
    e: "Em “Gosto de música”, como se classifica o verbo gostar?",
    o: ["Transitivo indireto", "Transitivo direto", "Intransitivo", "De ligação", "Transitivo direto e indireto"],
    x: "O verbo gostar pede um complemento com preposição, a preposição de: gostar de música. Quando o complemento vem com preposição, o verbo é transitivo indireto, e o complemento, de música, é o objeto indireto.\n\nO transitivo direto pede complemento sem preposição. O intransitivo não pede complemento. O de ligação liga o sujeito a uma característica. E o transitivo direto e indireto pede dois complementos. Aqui há um só, com a preposição de.",
  },
  {
    d: "media",
    e: "Em “Os pássaros cantam ao amanhecer”, como se classifica o verbo cantar?",
    o: ["Intransitivo", "Transitivo direto", "Transitivo indireto", "De ligação", "Transitivo direto e indireto"],
    x: "O verbo cantar, nessa frase, tem sentido completo: não se pergunta cantam o quê, nem cantam de quê. Ao amanhecer indica o momento em que cantam e é adjunto adverbial, e não complemento do verbo. Por isso o verbo é intransitivo.\n\nO transitivo direto exigiria um complemento sem preposição. O transitivo indireto exigiria um complemento com preposição. O de ligação ligaria o sujeito a uma característica. E o transitivo direto e indireto exigiria dois complementos. Só intransitivo descreve o verbo.",
  },
  {
    d: "media",
    e: "Em “Li o livro ontem”, qual é o objeto direto?",
    o: ["o livro", "ontem", "Li", "Li o livro", "livro ontem"],
    x: "O objeto direto é o termo que completa o sentido de um verbo transitivo direto, sem preposição. Pergunta-se ao verbo: li o quê? O livro. Por isso o objeto direto é o livro.\n\nOntem é advérbio de tempo e indica quando a leitura ocorreu. Li é o verbo. Li o livro é a junção do verbo com o objeto. E livro ontem junta o objeto com o advérbio. Só o livro responde à pergunta li o quê.",
  },
  {
    d: "media",
    e: "Em “Obedeço aos meus pais”, qual é o objeto indireto?",
    o: ["aos meus pais", "meus pais", "Obedeço", "pais", "Obedeço aos meus pais"],
    x: "O verbo obedecer pede um complemento com a preposição a: obedeço a alguém. Pergunta-se: obedeço a quem? Aos meus pais. Esse complemento, que vem com preposição, é o objeto indireto, e a preposição a faz parte dele, juntamente com o artigo, formando ao.\n\nMeus pais deixa de fora a preposição a, que faz parte do objeto indireto. Obedeço é o verbo. Pais é só o núcleo. E obedeço aos meus pais é a oração inteira. Só aos meus pais é o objeto indireto.",
  },
  {
    d: "media",
    e: "Em “Ela estudou ontem na biblioteca”, quais termos são adjuntos adverbiais?",
    o: ["ontem e na biblioteca", "Ela e estudou", "estudou e ontem", "na biblioteca e Ela", "Ela e ontem"],
    x: "O adjunto adverbial é o termo que indica uma circunstância da ação, como tempo, lugar ou modo. Ontem indica quando ela estudou, e na biblioteca indica onde. Os dois são adjuntos adverbiais.\n\nEla é o sujeito. Estudou é o verbo. Os pares que misturam sujeito ou verbo com os adjuntos estão errados: o sujeito e o verbo não indicam circunstância. Só ontem e na biblioteca são adjuntos adverbiais.",
  },
  {
    d: "media",
    e: "Em qual das frases abaixo o verbo concorda corretamente com o sujeito posposto?",
    o: ["Chegaram os convidados.", "Chegou os convidados.", "Chegamos os convidados.", "Chegaste os convidados.", "Chegara os convidados."],
    x: "O sujeito é os convidados, que está no plural e vem depois do verbo. O verbo concorda com o sujeito mesmo quando ele vem depois: chegaram os convidados, com o verbo no plural.\n\nChegou deixa o verbo no singular, o que não concorda com os convidados. Chegamos o põe na primeira pessoa do plural, e o sujeito é de terceira pessoa. Chegaste o põe na segunda pessoa do singular. E chegara está no singular. Só chegaram concorda com o sujeito.",
  },
  {
    d: "media",
    e: "Qual das frases abaixo tem predicado nominal?",
    o: ["A diretora estava preocupada.", "A diretora saiu da sala.", "A diretora chegou preocupada.", "A diretora falou com os alunos.", "A diretora explicou a regra."],
    x: "Na primeira frase, o verbo estava é de ligação e liga o sujeito à característica preocupada. Quando o predicado tem verbo de ligação e a ideia principal vem de um nome, ele é nominal.\n\nSaiu, falou e explicou indicam ações, e por isso o predicado é verbal. Em a diretora chegou preocupada, o verbo chegou indica ação e preocupada é uma característica do sujeito, o que torna o predicado verbo-nominal. Só a primeira frase tem predicado nominal.",
  },
  {
    d: "media",
    e: "Em “Entreguei o convite à professora”, como se classifica o verbo entregar?",
    o: ["Transitivo direto e indireto", "Transitivo direto", "Transitivo indireto", "Intransitivo", "De ligação"],
    x: "O verbo entregar pede dois complementos: o que foi entregue, o convite, sem preposição, e a quem foi entregue, à professora, com preposição. Quando o verbo pede um objeto direto e um objeto indireto ao mesmo tempo, é transitivo direto e indireto.\n\nO transitivo direto pede só o complemento sem preposição. O transitivo indireto pede só o complemento com preposição. O intransitivo não pede complemento. E o de ligação liga o sujeito a uma característica. Só transitivo direto e indireto descreve entregar nessa frase.",
  },
  {
    d: "media",
    e: "Em qual das frases abaixo o sujeito é simples?",
    o: ["A turma conversou durante o intervalo.", "Choveu durante o intervalo.", "Conversaram durante o intervalo.", "Ana e Bia conversaram durante o intervalo.", "Houve conversa durante o intervalo."],
    x: "O sujeito simples tem um só núcleo. Em a turma conversou, o sujeito é a turma, com núcleo turma, um substantivo coletivo no singular. Por isso é simples.\n\nEm choveu, não há sujeito. Em conversaram, o sujeito é indeterminado. Em Ana e Bia conversaram, o sujeito é composto, pois tem dois núcleos. E em houve conversa, o verbo haver tem o sentido de existir e não tem sujeito. Só a primeira frase tem sujeito simples.",
  },
  {
    d: "media",
    e: "Em qual das frases abaixo o sujeito está oculto?",
    o: ["Cheguei cedo à escola.", "Eu cheguei cedo à escola.", "Ana chegou cedo à escola.", "Os alunos chegaram cedo à escola.", "Chegou cedo à escola a nova aluna."],
    x: "Em cheguei cedo à escola, o sujeito não aparece escrito, mas a terminação do verbo cheguei mostra que é eu. Esse sujeito, identificado pela terminação do verbo, é o sujeito oculto, ou desinencial.\n\nNas demais, o sujeito aparece escrito: eu, Ana, os alunos e a nova aluna. Na última, o sujeito vem depois do verbo, mas continua presente na frase. Só a primeira frase tem sujeito oculto.",
  },
  {
    d: "media",
    e: "Qual é a função do verbo de ligação em uma oração?",
    o: ["Ligar o sujeito a uma característica ou estado", "Indicar uma ação praticada pelo sujeito", "Indicar um fenômeno da natureza", "Ligar duas orações entre si", "Completar o sentido de um substantivo"],
    x: "O verbo de ligação liga o sujeito a uma característica, a um estado ou a uma condição, chamada de predicativo do sujeito. Em a sala está limpa, o verbo está liga a sala à característica limpa.\n\nIndicar uma ação praticada pelo sujeito é função dos verbos significativos. Indicar fenômeno da natureza é função de verbos como chover. Ligar orações é função das conjunções. E completar o sentido de um substantivo é função de termos como o complemento nominal. Só a primeira função descreve o verbo de ligação.",
  },
  {
    d: "media",
    e: "Em “Os alunos do 9º ano organizaram a feira”, qual é o núcleo do sujeito?",
    o: ["alunos", "ano", "feira", "organizaram", "9º"],
    x: "O sujeito é os alunos do 9º ano. Dentro dele, a palavra principal, que concorda com o verbo organizaram, é alunos: é o núcleo. O termo do 9º ano apenas indica de que ano são os alunos.\n\nAno faz parte desse complemento e não é o núcleo. Feira é o que foi organizado, objeto direto. Organizaram é o verbo, núcleo do predicado. E 9º acompanha o substantivo ano. Só alunos é o núcleo do sujeito.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual das frases abaixo o verbo ficar é um verbo de ligação?",
    o: ["Ela ficou calada durante a aula.", "Ela ficou em casa durante a aula.", "Ela ficou com o livro durante a aula.", "Ela ficou na sala durante a aula.", "Ela ficou até o fim da aula."],
    x: "O mesmo verbo pode ser de ligação ou indicar outra coisa, conforme o sentido. Em ela ficou calada, o verbo liga o sujeito à característica calada: ela passou a estar calada. Aqui, ficar é verbo de ligação.\n\nNas demais frases, ficar significa permanecer ou estar em algum lugar, e os termos que acompanham, em casa, na sala, até o fim da aula, indicam circunstâncias. Em ficou com o livro, o sentido é de manter consigo. Nesses casos, o verbo indica um fato, e não liga o sujeito a uma característica. Só a primeira frase traz ficar como verbo de ligação.",
  },
  {
    d: "dificil",
    e: "Em “Vendem-se casas”, qual é o sujeito da oração?",
    o: ["casas", "Vendem", "se", "Indeterminado", "Inexistente"],
    x: "Em vendem-se casas, o verbo vendem concorda com casas, no plural: são as casas que são vendidas. Por isso o sujeito é casas, um sujeito simples. O pronome se, nessa construção, indica que a ação é sofrida pelo sujeito, e se chama partícula apassivadora.\n\nVendem é o verbo, e verbo não é sujeito. O se não é sujeito. O indeterminado exigiria que o verbo ficasse no singular, como em precisa-se de motoristas. E inexistente seria o caso de uma oração sem sujeito, como choveu. Só casas é o sujeito.",
  },
  {
    d: "dificil",
    e: "Em “Os alunos chegaram cansados”, qual é a função de cansados?",
    o: ["Predicativo do sujeito", "Adjunto adverbial", "Objeto direto", "Objeto indireto", "Sujeito"],
    x: "A palavra cansados atribui uma característica ao sujeito, os alunos, no momento em que chegaram: eles estavam cansados. Quando uma palavra atribui característica ao sujeito, por meio de um verbo que indica ação ou de ligação, ela é o predicativo do sujeito. Concorda com ele em gênero e número.\n\nO adjunto adverbial indicaria circunstância, como tempo ou lugar. O objeto direto e o indireto são complementos do verbo, e chegar não pede complemento. E o sujeito é os alunos. Só predicativo do sujeito explica a função de cansados.",
  },
  {
    d: "dificil",
    e: "Qual das frases abaixo tem predicado verbo-nominal?",
    o: ["O menino voltou feliz da escola.", "O menino estava feliz na escola.", "O menino voltou da escola.", "O menino parecia feliz com a escola.", "O menino ficou feliz na escola."],
    x: "O predicado verbo-nominal reúne uma ação e uma característica do sujeito. Em o menino voltou feliz da escola, voltou indica ação e feliz atribui uma característica ao menino. Por isso o predicado é verbo-nominal.\n\nNas frases com estava, parecia e ficou, os verbos são de ligação, e o predicado é nominal. Em o menino voltou da escola, há só ação, sem característica, e o predicado é verbal. Só a primeira frase junta ação e característica.",
  },
  {
    d: "dificil",
    e: "Em qual das frases abaixo o sujeito é indeterminado?",
    o: ["Falaram mal de você na reunião.", "Falei mal de você na reunião.", "Maria falou mal de você na reunião.", "Choveu muito durante a reunião.", "Falamos mal de você na reunião."],
    x: "Em falaram mal de você, o verbo está na terceira pessoa do plural, e a frase não diz quem falou, nem o contexto permite saber. Por isso o sujeito é indeterminado.\n\nEm falei e falamos, a terminação do verbo identifica o sujeito: eu e nós, sujeitos ocultos. Em Maria falou, o sujeito está escrito: Maria. E em choveu, a oração não tem sujeito, pois chover indica fenômeno da natureza. Só a primeira frase tem sujeito indeterminado.",
  },
  {
    d: "dificil",
    e: "Em “Havia dúvidas entre os alunos”, qual é a função de dúvidas?",
    o: ["Objeto direto", "Sujeito", "Predicativo do sujeito", "Adjunto adverbial", "Objeto indireto"],
    x: "O verbo haver, quando significa existir, não tem sujeito. O termo que o acompanha, dúvidas, completa o sentido do verbo sem preposição, e por isso é objeto direto: havia dúvidas é o mesmo que existiam dúvidas. O verbo fica no singular, porque não concorda com dúvidas.\n\nDúvidas não é sujeito, pois a oração é sem sujeito. Não é predicativo, porque havia não é verbo de ligação. Não é adjunto adverbial, porque não indica circunstância. E não é objeto indireto, porque não tem preposição. Só objeto direto descreve dúvidas.",
  },
  {
    d: "dificil",
    e: "Em qual das frases abaixo a concordância com o verbo haver está correta?",
    o: ["Há muitos alunos na sala.", "Hão muitos alunos na sala.", "Haviam muitos alunos na sala.", "Houveram muitos alunos na sala.", "Haverão muitos alunos na sala."],
    x: "O verbo haver, no sentido de existir, não tem sujeito e fica sempre no singular: há muitos alunos, havia muitos alunos, houve muitos alunos, haverá muitos alunos. O termo que o acompanha é objeto direto, e não sujeito, por isso o verbo não vai ao plural.\n\nHão, haviam, houveram e haverão põem o verbo no plural, como se muitos alunos fosse o sujeito, o que a norma-padrão não aceita nesse sentido. Só há muitos alunos mantém o verbo no singular.",
  },
  {
    d: "dificil",
    e: "Em “Os meninos gostam de futebol”, qual análise está correta?",
    o: ["Sujeito: os meninos; objeto indireto: de futebol", "Sujeito: de futebol; objeto direto: os meninos", "Sujeito: gostam; predicativo: de futebol", "Sujeito: futebol; objeto indireto: os meninos", "Sujeito: os meninos de futebol; sem objeto"],
    x: "Pergunta-se ao verbo: quem gosta? Os meninos, o sujeito. Gostar pede a preposição de: gostam de quê? De futebol. O termo de futebol completa o verbo com preposição, e por isso é objeto indireto. O verbo gostar é transitivo indireto.\n\nDe futebol não pode ser sujeito, porque tem preposição. Gostam é o verbo, e não o sujeito. Futebol não é o sujeito, e os meninos não é objeto. E os meninos de futebol junta dois termos que não formam um. Só a primeira análise está correta.",
  },
  {
    d: "dificil",
    e: "Em “Meus amigos são muito dedicados”, qual é o núcleo do predicado?",
    o: ["dedicados", "são", "muito", "amigos", "Meus amigos"],
    x: "O verbo são é de ligação e liga o sujeito, meus amigos, à característica dedicados. Num predicado nominal, o núcleo é o predicativo do sujeito: dedicados. A palavra muito é um advérbio de intensidade, que apenas reforça o sentido do adjetivo.\n\nSão é o verbo de ligação, que não carrega a ideia principal. Muito intensifica dedicados, mas não é o núcleo. Amigos é o núcleo do sujeito. E meus amigos é o sujeito inteiro. Só dedicados é o núcleo do predicado.",
  },
  {
    d: "dificil",
    e: "Em “Os candidatos esperavam ansiosos o resultado”, como se classifica o predicado?",
    o: ["Verbo-nominal", "Verbal", "Nominal", "Inexistente", "Composto"],
    x: "O verbo esperavam indica uma ação, com o complemento o resultado, e a palavra ansiosos atribui uma característica ao sujeito, os candidatos, no momento da espera. Quando há uma ação e uma característica do sujeito no mesmo predicado, ele é verbo-nominal. Os núcleos são esperavam e ansiosos.\n\nO verbal teria só a ação, sem o predicativo ansiosos. O nominal teria um verbo de ligação, e esperavam não é de ligação. Inexistente e composto não são classificações de predicado. Só verbo-nominal descreve a frase.",
  },
];
