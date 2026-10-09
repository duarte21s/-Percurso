/* Rascunho — Português de banca / Análise sintática: termos da oração.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram análises assentadas na gramática normativa
   (NGB): tipos de sujeito (simples, composto, oculto, indeterminado, oração
   sem sujeito), tipos de predicado (verbal, nominal, verbo-nominal),
   transitividade verbal, objeto direto e indireto, objeto direto
   pleonástico, predicativo do sujeito e do objeto, adjunto adnominal e
   adverbial, complemento nominal, agente da passiva, aposto, vocativo, e a
   função do pronome relativo na oração subordinada. Ficaram de fora, de
   propósito, as análises que a gramática discute (chegar e ir a um lugar
   como objeto indireto ou adjunto adverbial, o sujeito de haver impessoal em
   falas populares, o se de verbos pronominais). */

export const materia = "portugues-banca";
export const tema = "Análise sintática: termos da oração";
export const arquivo = "portugues-banca__analise-sintatica-termos-da-oracao";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Na frase “Os alunos chegaram cedo”, qual é o sujeito?",
    o: ["Os alunos", "chegaram", "cedo", "chegaram cedo", "alunos chegaram"],
    x: "O sujeito é o termo sobre o qual se declara algo e com o qual o verbo concorda. Quem chegou cedo? Os alunos. Por isso o sujeito é “os alunos”, cujo núcleo é alunos, e o verbo chegaram concorda com ele em número e pessoa.\n\nChegaram é o verbo, núcleo do predicado. Cedo é adjunto adverbial de tempo. Chegaram cedo é o predicado, e não o sujeito. Alunos chegaram mistura o núcleo do sujeito com o verbo, o que não forma um termo da oração.",
  },
  {
    d: "facil",
    e: "Na frase “Pedro e Maria viajaram ontem”, como se classifica o sujeito?",
    o: ["Composto", "Simples", "Oculto", "Indeterminado", "Inexistente"],
    x: "O sujeito tem dois núcleos, Pedro e Maria, ligados pela conjunção e, e por isso é sujeito composto. O verbo viajaram vai para o plural, concordando com a soma dos dois núcleos.\n\nO sujeito simples tem um só núcleo. O oculto não aparece na frase e é identificado pela desinência verbal. O indeterminado existe, mas não se identifica. E a oração sem sujeito não tem sujeito algum, como em choveu.",
  },
  {
    d: "facil",
    e: "Na frase “Chegamos cedo ao evento”, como se classifica o sujeito?",
    o: ["Oculto (desinencial)", "Composto", "Indeterminado", "Simples", "Inexistente"],
    x: "O sujeito não aparece na frase, mas é identificado pela desinência do verbo: chegamos está na primeira pessoa do plural, e o sujeito é nós. Por isso é sujeito oculto, também chamado desinencial ou elíptico.\n\nO sujeito composto tem dois núcleos expressos. O sujeito simples aparece na frase com um só núcleo. O indeterminado não pode ser identificado. E a oração sem sujeito, como choveu, não tem sujeito algum.",
  },
  {
    d: "facil",
    e: "Na frase “Choveu muito ontem”, como se classifica o sujeito?",
    o: ["Inexistente (oração sem sujeito)", "Oculto", "Simples", "Composto", "Indeterminado"],
    x: "Chover é verbo que indica fenômeno da natureza e não tem sujeito: não há quem pratique a ação. A oração é chamada oração sem sujeito, e o verbo fica na terceira pessoa do singular: choveu.\n\nO sujeito oculto pode ser identificado pela desinência do verbo, e aqui não pode. O simples e o composto são expressos na frase. E o indeterminado existe, mas não se identifica, o que não é o caso: não há ninguém que chova. Outros exemplos são trovejou, amanheceu e faz frio.",
  },
  {
    d: "facil",
    e: "Na frase “Venderam a casa da esquina”, como se classifica o sujeito?",
    o: ["Indeterminado", "Oculto", "Simples", "Composto", "Inexistente"],
    x: "O verbo venderam está na terceira pessoa do plural, e não há na frase nem no contexto referência a quem vendeu a casa. O sujeito existe, mas não se identifica: é sujeito indeterminado. Pode-se indeterminar o sujeito com o verbo na terceira pessoa do plural sem referência anterior, ou com o verbo seguido de se.\n\nO sujeito oculto seria identificado pelo contexto ou pela desinência. O simples e o composto estão expressos. E a oração sem sujeito não tem sujeito algum.",
  },
  {
    d: "facil",
    e: "Na frase “Comprei um livro novo”, qual é o objeto direto?",
    o: ["um livro novo", "Comprei", "novo", "Comprei um livro", "livro"],
    x: "O verbo comprar é transitivo direto: quem compra, compra alguma coisa, sem preposição. O termo que completa o sentido do verbo, sem preposição, é o objeto direto: “um livro novo”, cujo núcleo é livro.\n\nComprei é o verbo. Novo é adjunto adnominal de livro. Comprei um livro mistura o verbo com o objeto. E livro é só o núcleo do objeto direto, e não o termo inteiro.",
  },
  {
    d: "facil",
    e: "Na frase “O sol nasceu”, qual é a classificação do verbo quanto à transitividade?",
    o: ["Intransitivo", "Transitivo direto", "Transitivo indireto", "De ligação", "Transitivo direto e indireto"],
    x: "Nasceu tem sentido completo e não pede complemento: o sol nasceu. É verbo intransitivo, e o predicado é verbal, formado apenas por ele. Outros verbos que costumam ser intransitivos são cair, morrer e brilhar.\n\nO transitivo direto pede complemento sem preposição. O transitivo indireto pede complemento com preposição. O de ligação liga o sujeito a uma característica. E o transitivo direto e indireto pede os dois complementos.",
  },
  {
    d: "facil",
    e: "Na frase “A casa é velha”, qual é o tipo de predicado?",
    o: ["Nominal", "Verbal", "Verbo-nominal", "Inexistente", "Composto"],
    x: "O verbo é liga o sujeito, a casa, a uma característica, velha, que é o predicativo do sujeito. O predicado cujo núcleo é um nome, no caso o predicativo, e que tem como verbo um verbo de ligação, é predicado nominal.\n\nO predicado verbal tem verbo significativo como núcleo. O verbo-nominal tem dois núcleos: um verbo significativo e um predicativo. A oração tem predicado, sim. E predicado composto não existe como classificação.",
  },
  {
    d: "facil",
    e: "Na frase “Ele ficou feliz”, qual é a função sintática de feliz?",
    o: ["Predicativo do sujeito", "Objeto direto", "Adjunto adverbial", "Objeto indireto", "Aposto"],
    x: "Ficou é verbo de ligação, e feliz indica uma característica do sujeito ele, atribuída pelo verbo. O termo que atribui uma característica ou estado ao sujeito, por meio de verbo de ligação, é predicativo do sujeito.\n\nO objeto direto completa verbo transitivo direto. O adjunto adverbial indica circunstância. O objeto indireto completa verbo transitivo indireto. E o aposto explica um termo, em geral entre vírgulas.",
  },
  {
    d: "facil",
    e: "Na frase “Ele chegou ontem”, qual é a função sintática de ontem?",
    o: ["Adjunto adverbial de tempo", "Objeto direto", "Predicativo do sujeito", "Aposto", "Vocativo"],
    x: "Ontem indica a circunstância de tempo em que a ação de chegar ocorreu, e é adjunto adverbial de tempo. O adjunto adverbial modifica o verbo, adjetivo ou advérbio e expressa circunstâncias como tempo, lugar, modo, causa e intensidade.\n\nNão é objeto direto, porque chegou é intransitivo. Não é predicativo do sujeito, porque o verbo não é de ligação. Não é aposto, que explica um termo. E não é vocativo, que chama alguém.",
  },
  {
    d: "facil",
    e: "Na frase “Maria, venha cá agora”, qual é a função sintática de Maria?",
    o: ["Vocativo", "Sujeito", "Aposto", "Objeto direto", "Predicativo"],
    x: "Maria é o termo usado para chamar alguém, e por isso é vocativo. O vocativo não pertence nem ao sujeito nem ao predicado, e vem isolado por vírgulas. O sujeito de venha é você, oculto.\n\nNão é sujeito, porque a pessoa a quem se dirige a ordem é você, e não Maria. Não é aposto, que explica um termo. Não é objeto direto, porque venha é intransitivo. E não é predicativo, porque o verbo não é de ligação.",
  },
  {
    d: "facil",
    e: "Na frase “Rui, meu irmão, mora em Recife”, qual é a função sintática de meu irmão?",
    o: ["Aposto", "Vocativo", "Sujeito", "Objeto direto", "Predicativo do sujeito"],
    x: "Meu irmão explica o termo Rui, que é o sujeito, e vem isolado por vírgulas, o que caracteriza o aposto. O aposto esclarece, resume ou identifica outro termo da oração.\n\nNão é vocativo, porque não chama ninguém. Não é sujeito, porque o sujeito é Rui. Não é objeto direto, porque mora é intransitivo. E não é predicativo do sujeito, porque o verbo não é de ligação.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Na frase “Ele chegou cansado”, qual é o tipo de predicado?",
    o: ["Verbo-nominal", "Nominal", "Verbal", "Inexistente", "Complexo"],
    x: "O predicado tem dois núcleos: o verbo significativo chegou, que indica uma ação, e o predicativo do sujeito cansado, que indica o estado do sujeito durante a ação. Esse predicado, com dois núcleos, é verbo-nominal.\n\nO nominal teria verbo de ligação, o que não ocorre: chegou é significativo. O verbal teria apenas o verbo. A oração tem predicado. E complexo não é uma classificação do predicado.",
  },
  {
    d: "media",
    e: "Na frase “Entreguei o livro ao professor”, qual é a função sintática de ao professor?",
    o: ["Objeto indireto", "Objeto direto", "Adjunto adverbial", "Complemento nominal", "Agente da passiva"],
    x: "Entregar é verbo transitivo direto e indireto: pede um complemento sem preposição, o livro, que é o objeto direto, e outro com preposição, ao professor, que é o objeto indireto. O objeto indireto indica o destinatário da ação.\n\nO objeto direto é o livro. O adjunto adverbial indica circunstância, e não completa o verbo. O complemento nominal completa o sentido de um nome. E o agente da passiva é o termo que pratica a ação na voz passiva.",
  },
  {
    d: "media",
    e: "Na frase “Dei um presente à minha mãe”, quais são, respectivamente, o objeto direto e o objeto indireto?",
    o: ["um presente e à minha mãe", "à minha mãe e um presente", "Dei e um presente", "um presente e Dei", "minha mãe e um presente"],
    x: "Dar é verbo transitivo direto e indireto. O complemento sem preposição, um presente, é o objeto direto, e o complemento com preposição, à minha mãe, é o objeto indireto. A ordem da pergunta é: dei o quê? Um presente. Dei a quem? À minha mãe.\n\nA ordem inversa troca as funções. Dei é o verbo, e não um complemento. E minha mãe, sem a preposição a, deixaria de ser o objeto indireto, que só existe com a preposição.",
  },
  {
    d: "media",
    e: "Na frase “A leitura de bons livros é útil”, qual é a função sintática de de bons livros?",
    o: ["Complemento nominal", "Adjunto adnominal", "Objeto direto", "Objeto indireto", "Adjunto adverbial"],
    x: "Leitura é substantivo abstrato derivado do verbo ler, e “de bons livros” completa o sentido do nome, indicando o que é lido. O termo que completa o sentido de um nome, seja substantivo, adjetivo ou advérbio, e é introduzido por preposição, é complemento nominal. O termo é paciente da ação: lê-se bons livros.\n\nO adjunto adnominal apenas caracteriza o nome, como em o livro de história. O objeto direto e o indireto completam verbos. E o adjunto adverbial indica circunstância.",
  },
  {
    d: "media",
    e: "Na frase “O texto foi escrito pelo aluno”, qual é a função sintática de pelo aluno?",
    o: ["Agente da passiva", "Objeto indireto", "Adjunto adverbial de lugar", "Complemento nominal", "Sujeito"],
    x: "A frase está na voz passiva: o sujeito, o texto, sofre a ação, e quem a pratica é o aluno. O termo que indica quem pratica a ação na voz passiva, em geral introduzido por por ou de, é o agente da passiva: “pelo aluno”.\n\nNão é objeto indireto, porque o verbo está na voz passiva e não pede complemento com preposição. Não é adjunto adverbial de lugar, porque não indica local. Não é complemento nominal, porque não completa um nome. E o sujeito é o texto.",
  },
  {
    d: "media",
    e: "Na frase “Vendem-se casas usadas”, qual é o sujeito?",
    o: ["casas usadas", "Vendem-se", "Vendem", "se", "indeterminado"],
    x: "Em vendem-se casas usadas, o verbo vender é transitivo direto, e o se é partícula apassivadora: a frase equivale a casas usadas são vendidas. O sujeito é “casas usadas”, chamado sujeito paciente, e o verbo concorda com ele no plural.\n\nVendem-se é a forma verbal com a partícula. Vendem é só o verbo. O se, partícula apassivadora, não é sujeito. E o sujeito não é indeterminado, porque existe e é identificado: casas usadas.",
  },
  {
    d: "media",
    e: "Na frase “Chegaram cedo os novos funcionários”, qual é o sujeito?",
    o: ["os novos funcionários", "cedo", "Chegaram", "Chegaram cedo", "oculto"],
    x: "O sujeito é o termo com o qual o verbo concorda, mesmo quando vem depois dele. Quem chegou cedo? Os novos funcionários, que é o sujeito posposto ao verbo chegaram, de núcleo funcionários, no plural.\n\nCedo é adjunto adverbial de tempo. Chegaram é o verbo. Chegaram cedo é parte do predicado. E o sujeito não é oculto, porque aparece na frase, depois do verbo.",
  },
  {
    d: "media",
    e: "Na frase “É necessário que todos estudem”, qual é a função da oração “que todos estudem”?",
    o: ["Sujeito", "Objeto direto", "Predicativo do sujeito", "Aposto", "Complemento nominal"],
    x: "A oração que todos estudem completa o sentido do predicado é necessário, indicando o que é necessário: estudar é necessário. Ela exerce a função de sujeito, e é chamada oração subordinada substantiva subjetiva.\n\nNão é objeto direto, porque o verbo ser é de ligação. Não é predicativo, porque o predicativo é necessário. Não é aposto, porque não explica nenhum termo. E não é complemento nominal, porque a oração não completa um nome.",
  },
  {
    d: "media",
    e: "Na frase “Considero o aluno inteligente”, qual é a função sintática de inteligente?",
    o: ["Predicativo do objeto", "Predicativo do sujeito", "Adjunto adnominal", "Objeto indireto", "Aposto"],
    x: "Considerar é verbo transitivo direto, e o aluno é o objeto direto. Inteligente atribui uma característica ao objeto, o aluno, por meio do verbo considerar. O termo que atribui uma característica ao objeto é predicativo do objeto.\n\nO predicativo do sujeito se refere ao sujeito, que aqui é eu, oculto. O adjunto adnominal modifica o substantivo sem verbo que o liga. O objeto indireto completa o verbo com preposição. E o aposto explica um termo, em geral entre vírgulas.",
  },
  {
    d: "media",
    e: "Na frase “Ela parece cansada”, qual é a classificação do verbo parece?",
    o: ["Verbo de ligação", "Transitivo direto", "Intransitivo", "Transitivo indireto", "Transitivo direto e indireto"],
    x: "Parecer, nesse emprego, liga o sujeito ela a uma característica, cansada, que é o predicativo do sujeito. Não indica ação, mas estado ou aparência. É verbo de ligação, como ser, estar, ficar, permanecer e continuar.\n\nO transitivo direto pede complemento sem preposição. O intransitivo tem sentido completo. O transitivo indireto pede complemento com preposição. E o transitivo direto e indireto pede os dois. Em nenhum desses casos o verbo atribui qualidade ao sujeito.",
  },
  {
    d: "media",
    e: "Na frase “Obedeço às regras do jogo”, qual é a classificação do verbo obedecer e a função de às regras do jogo?",
    o: ["Transitivo indireto; objeto indireto", "Transitivo direto; objeto direto", "Intransitivo; adjunto adverbial", "De ligação; predicativo do sujeito", "Transitivo indireto; complemento nominal"],
    x: "Obedecer pede a preposição a: obedecer a alguma coisa. É verbo transitivo indireto, e o complemento “às regras do jogo” é objeto indireto. A preposição aparece fundida com o artigo, no a de às.\n\nTransitivo direto é o verbo que pede complemento sem preposição. Intransitivo tem sentido completo. O verbo de ligação liga o sujeito a um predicativo. E o complemento nominal completa nomes, e não verbos.",
  },
  {
    d: "media",
    e: "Na frase “A casa velha da esquina caiu”, qual é o núcleo do sujeito?",
    o: ["casa", "velha", "esquina", "caiu", "A casa"],
    x: "O núcleo é a palavra principal do sujeito, a que determina a concordância com o verbo. Em “a casa velha da esquina”, o termo central é casa, e as outras palavras a modificam: a é artigo, velha é adjunto adnominal, e da esquina é adjunto adnominal.\n\nVelha e esquina são adjuntos ou fazem parte de adjuntos. Caiu é o verbo, núcleo do predicado. E a casa inclui o artigo, mas o núcleo é só o substantivo, a palavra que o verbo caiu acompanha no singular.",
  },
  {
    d: "media",
    e: "Na frase “O livro de história é interessante”, qual é a função sintática de de história?",
    o: ["Adjunto adnominal", "Complemento nominal", "Objeto indireto", "Adjunto adverbial", "Predicativo do sujeito"],
    x: "De história caracteriza o substantivo livro, indicando de que assunto ele trata, e é adjunto adnominal. O adjunto adnominal é o termo que modifica um substantivo e pode ser introduzido por preposição.\n\nO complemento nominal completa nomes que indicam ação, como leitura, e é paciente. Aqui livro é um nome concreto. O objeto indireto completa verbos. O adjunto adverbial modifica verbos. E o predicativo do sujeito é interessante.",
  },
  {
    d: "media",
    e: "Na frase “Visitei São Paulo, capital do estado”, qual é a função sintática de capital do estado?",
    o: ["Aposto", "Adjunto adnominal", "Objeto direto", "Predicativo do objeto", "Vocativo"],
    x: "Capital do estado explica o termo São Paulo, que é o objeto direto de visitei, e vem separado dele por vírgula. O termo que explica, identifica ou resume outro termo da oração é aposto.\n\nO adjunto adnominal modifica o substantivo sem pausa e sem repetir o sentido. O objeto direto é São Paulo. O predicativo do objeto atribui característica por meio de verbo. E o vocativo chama alguém, o que não ocorre.",
  },
  {
    d: "media",
    e: "Na frase “Pedro, você chegou cedo”, quais são, respectivamente, as funções de Pedro e de você?",
    o: ["Vocativo e sujeito", "Sujeito e vocativo", "Aposto e sujeito", "Vocativo e objeto direto", "Aposto e objeto direto"],
    x: "Pedro é o termo usado para chamar a pessoa, e é vocativo. Você é o termo com o qual o verbo chegou concorda, e é o sujeito. As duas palavras se referem à mesma pessoa, mas exercem funções diferentes na oração.\n\nA ordem inversa troca as funções. Pedro não é aposto, porque não explica você. Você não é objeto direto, porque chegou é intransitivo e você concorda com o verbo.",
  },
  {
    d: "media",
    e: "Na frase “O livro, li-o ontem”, qual é a função sintática do pronome o?",
    o: ["Objeto direto pleonástico", "Objeto indireto", "Adjunto adnominal", "Sujeito", "Predicativo do sujeito"],
    x: "O livro é o objeto direto, deslocado para o início da frase, e o pronome o o repete junto ao verbo, reforçando o objeto. Essa repetição é chamada pleonasmo, e o pronome é objeto direto pleonástico.\n\nNão é objeto indireto, porque li é transitivo direto. Não é adjunto adnominal, porque não modifica um nome. Não é sujeito, que é oculto, eu. E não é predicativo, porque li não é verbo de ligação.",
  },
  {
    d: "media",
    e: "Na frase “Vive-se bem na cidade”, como se classifica o sujeito?",
    o: ["Indeterminado", "Oculto", "Simples", "Composto", "Inexistente"],
    x: "Viver é verbo intransitivo, e o se, índice de indeterminação, indica que o sujeito existe, mas não se identifica, e o verbo fica na terceira pessoa do singular. Por isso o sujeito é indeterminado.\n\nO oculto seria identificado pela desinência, o que não ocorre. O simples e o composto estão expressos. E a oração sem sujeito não tem sujeito algum, como choveu.",
  },
  {
    d: "media",
    e: "Na frase “Ela falou com calma ontem”, quais são, respectivamente, os adjuntos adverbiais de modo e de tempo?",
    o: ["com calma e ontem", "ontem e com calma", "Ela e ontem", "falou e com calma", "com calma e falou"],
    x: "Com calma indica a maneira como ela falou, e é adjunto adverbial de modo. Ontem indica quando ela falou, e é adjunto adverbial de tempo. O adjunto adverbial modifica o verbo e expressa circunstâncias de tempo, lugar, modo, causa e outras.\n\nA ordem inversa troca as circunstâncias. Ela é o sujeito, e falou é o verbo, núcleo do predicado, e nenhum dos dois é adjunto adverbial.",
  },
  {
    d: "media",
    e: "Em qual das frases o predicado é verbal?",
    o: ["Os alunos estudaram a lição.", "A lição é difícil.", "Os alunos ficaram cansados.", "Ele parece feliz.", "A casa está vazia."],
    x: "Em os alunos estudaram a lição, o núcleo do predicado é o verbo significativo estudaram, que indica ação, e o predicado é verbal. A lição é o objeto direto, e não um predicativo.\n\nNas outras frases, os verbos ser, ficar, parecer e estar ligam o sujeito a um predicativo, e o predicado é nominal: difícil, cansados, feliz e vazia são predicativos do sujeito. O que define o tipo de predicado é o verbo: significativo, verbal, ou de ligação, nominal.",
  },
  {
    d: "media",
    e: "Na frase “O menino come maçãs”, qual é o núcleo do predicado?",
    o: ["come", "maçãs", "menino", "O menino", "come maçãs"],
    x: "O núcleo do predicado é a palavra que dá o sentido principal do que se declara sobre o sujeito. No predicado verbal, é o verbo: come. O objeto direto, maçãs, completa o sentido do verbo, mas não é o núcleo.\n\nMenino é o núcleo do sujeito, e não do predicado. O menino é o sujeito inteiro. E come maçãs é o predicado inteiro, e não o núcleo, que é uma única palavra.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre o sujeito e o agente da passiva em “O aluno escreveu o texto” e “O texto foi escrito pelo aluno”?",
    o: ["Na ativa, o aluno é sujeito; na passiva, é agente da passiva", "Nas duas, o aluno é sujeito", "Nas duas, o aluno é agente da passiva", "Na ativa, o aluno é agente; na passiva, sujeito", "Em nenhuma o aluno é termo da oração"],
    x: "Na voz ativa, o aluno pratica a ação e é o sujeito de escreveu. Na voz passiva, o sujeito passa a ser o texto, que sofre a ação, e o aluno, que a pratica, vira agente da passiva: “pelo aluno”. As duas frases dizem a mesma coisa de maneiras diferentes.\n\nDizer que é sujeito nas duas, ou agente nas duas, ou o contrário, contraria a transformação da voz ativa em passiva. E o aluno é termo da oração nas duas versões.",
  },
  {
    d: "media",
    e: "O que distingue o predicativo do sujeito de um adjunto adverbial?",
    o: ["O predicativo atribui característica ao sujeito, e o adjunto expressa circunstância", "O predicativo expressa circunstância, e o adjunto atribui característica", "Os dois são sempre termos do sujeito", "Os dois são sempre introduzidos por preposição", "Os dois completam o verbo transitivo"],
    x: "O predicativo do sujeito atribui uma característica ou estado ao sujeito, em geral por meio de verbo de ligação: ele ficou feliz. O adjunto adverbial expressa uma circunstância da ação, como tempo, lugar e modo: ele chegou ontem. Um qualifica o sujeito, e o outro situa a ação.\n\nInverter as duas funções contraria as definições. Nenhum dos dois é termo do sujeito. Nem sempre vêm com preposição, como em feliz e ontem. E os que completam verbos transitivos são os objetos, e não esses termos.",
  },
  {
    d: "media",
    e: "Na frase “Havia muitos alunos na sala”, qual é a função de muitos alunos?",
    o: ["Objeto direto", "Sujeito", "Predicativo", "Aposto", "Adjunto adnominal"],
    x: "Haver, no sentido de existir, é verbo impessoal e transitivo direto: não tem sujeito, e o termo que o acompanha é o objeto direto. Por isso muitos alunos é objeto direto, e o verbo fica no singular: havia.\n\nO sujeito não existe nessa oração. Não é predicativo, porque haver não é verbo de ligação. Não é aposto, porque não explica nenhum termo. E não é adjunto adnominal, porque não modifica um nome.",
  },
  {
    d: "media",
    e: "Em qual das frases há oração sem sujeito?",
    o: ["Faz dois anos que moro aqui.", "Fizeram o bolo ontem.", "Os alunos fizeram a prova.", "Faltou luz no bairro.", "Estudamos a noite toda."],
    x: "Em faz dois anos, o verbo fazer indica tempo decorrido e é impessoal: não tem sujeito, e fica na terceira pessoa do singular. A oração é sem sujeito, e dois anos é um adjunto adverbial de tempo.\n\nEm fizeram o bolo, o sujeito é indeterminado. Em os alunos fizeram a prova, o sujeito é simples. Em faltou luz, o sujeito é luz, pois faltar tem sujeito. E em estudamos a noite toda, o sujeito é oculto, nós.",
  },
  {
    d: "media",
    e: "Em qual das frases o sujeito é composto?",
    o: ["O pai e a mãe chegaram cedo.", "A família chegou cedo.", "Chegamos cedo.", "Chegaram cedo.", "Choveu cedo."],
    x: "Em o pai e a mãe chegaram cedo, há dois núcleos, pai e mãe, ligados por e, e por isso o sujeito é composto. O verbo vai para o plural, concordando com a soma.\n\nEm a família chegou cedo, o sujeito é simples, com núcleo coletivo no singular. Em chegamos cedo, é oculto, nós. Em chegaram cedo, pode ser oculto ou indeterminado, conforme o contexto. E em choveu cedo, a oração é sem sujeito.",
  },
  {
    d: "media",
    e: "Em qual das frases o verbo é transitivo direto e indireto?",
    o: ["Ele deu um livro ao amigo.", "Ele comprou um livro.", "Ele obedeceu ao pai.", "Ele chegou cedo.", "Ele é professor."],
    x: "Dar pede dois complementos: um sem preposição, um livro, que é o objeto direto, e outro com preposição, ao amigo, que é o objeto indireto. Por isso é verbo transitivo direto e indireto, também chamado bitransitivo.\n\nComprar é transitivo direto, pois pede só o complemento sem preposição. Obedecer é transitivo indireto, pois pede só o complemento com preposição. Chegar é intransitivo. E ser, nessa frase, é verbo de ligação.",
  },
  {
    d: "media",
    e: "Em qual das frases há complemento nominal?",
    o: ["Tenho medo de altura.", "Comprei um livro de história.", "Ele obedece ao chefe.", "Fui ao cinema ontem.", "O livro está sobre a mesa."],
    x: "Em tenho medo de altura, a expressão de altura completa o sentido do substantivo medo, indicando o objeto do medo, e é complemento nominal. O substantivo abstrato medo exige complemento, como outros nomes que indicam sentimento ou ação.\n\nEm um livro de história, de história é adjunto adnominal, pois livro é nome concreto. Em obedece ao chefe, ao chefe é objeto indireto. Em fui ao cinema ontem, ao cinema e ontem são adjuntos adverbiais. E em sobre a mesa, o termo é adjunto adverbial de lugar.",
  },
  {
    d: "media",
    e: "Na frase “Os alunos que estudaram passaram”, qual é o sujeito de passaram?",
    o: ["Os alunos que estudaram", "Os alunos", "que", "estudaram", "oculto"],
    x: "O verbo passaram concorda com o termo inteiro “os alunos que estudaram”, cujo núcleo é alunos. A oração adjetiva restritiva “que estudaram” faz parte do sujeito, pois restringe quais alunos passaram. O sujeito é, portanto, o termo completo.\n\nOs alunos é só parte do sujeito. Que é o pronome relativo, que retoma alunos e é o sujeito de estudaram, não de passaram. Estudaram é o verbo da oração adjetiva. E o sujeito não é oculto, porque está expresso.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Na frase “O medo de fracassar paralisou o jogador”, qual é a função de “de fracassar”?",
    o: ["Complemento nominal", "Adjunto adnominal", "Objeto direto", "Predicativo do sujeito", "Aposto"],
    x: "Medo é substantivo abstrato que indica sentimento e exige complemento: medo de quê? De fracassar. O termo “de fracassar”, uma oração reduzida de infinitivo, completa o sentido do nome medo e é, por isso, complemento nominal, na forma de oração subordinada substantiva completiva nominal.\n\nO adjunto adnominal apenas caracteriza o nome, e não completa seu sentido. O objeto direto completa verbos transitivos diretos. O predicativo do sujeito exige verbo de ligação. E o aposto explica um termo, em geral entre vírgulas.",
  },
  {
    d: "dificil",
    e: "Na frase “A decisão foi tomada pelo conselho”, qual é a função de pelo conselho e qual é a voz do verbo?",
    o: ["Agente da passiva; voz passiva", "Objeto indireto; voz ativa", "Adjunto adverbial; voz passiva", "Sujeito; voz ativa", "Agente da passiva; voz ativa"],
    x: "A decisão sofre a ação de tomar, e quem a pratica é o conselho. O verbo está na voz passiva analítica, formada por foi mais o particípio tomada, e o termo que indica quem pratica a ação, introduzido por por, é agente da passiva: “pelo conselho”.\n\nOs demais pares erram a função, a voz, ou ambas: o conselho não é objeto indireto nem adjunto adverbial, não é o sujeito, e a frase não está na voz ativa.",
  },
  {
    d: "dificil",
    e: "Na frase “O livro que li é ótimo”, qual é a função sintática do pronome relativo que?",
    o: ["Objeto direto de li", "Sujeito de li", "Sujeito de é", "Objeto indireto de li", "Adjunto adnominal"],
    x: "Que retoma o livro e exerce na oração adjetiva “que li” a função de objeto direto do verbo li: li o livro. O pronome relativo desempenha, dentro da oração que introduz, uma função sintática ligada ao termo que ele retoma.\n\nO sujeito de li é eu, oculto, e o sujeito de é é o livro que li. Li é transitivo direto, e por isso o que não é objeto indireto. E o adjunto adnominal modifica um nome, o que não ocorre com que nessa oração.",
  },
  {
    d: "dificil",
    e: "Na frase “O aluno cujo pai chegou saiu”, qual é a função sintática de cujo?",
    o: ["Adjunto adnominal de pai", "Sujeito de chegou", "Objeto direto de chegou", "Predicativo do sujeito", "Aposto de aluno"],
    x: "Cujo indica posse e liga o aluno a pai: o pai do aluno. Na oração adjetiva “cujo pai chegou”, o pronome relativo cujo exerce a função de adjunto adnominal de pai, pois indica de quem é o pai. O sujeito de chegou é pai.\n\nCujo não é sujeito de chegou, porque o sujeito é pai. Não é objeto direto, porque chegou é intransitivo. Não é predicativo, porque o verbo não é de ligação. E não é aposto, porque não explica nenhum termo.",
  },
  {
    d: "dificil",
    e: "Na frase “Os alunos entregaram o trabalho ao professor ontem”, quais são, respectivamente, o sujeito, o objeto direto, o objeto indireto e o adjunto adverbial?",
    o: ["Os alunos; o trabalho; ao professor; ontem", "O trabalho; os alunos; ao professor; ontem", "Os alunos; ao professor; o trabalho; ontem", "Os alunos; o trabalho; ontem; ao professor", "Ontem; os alunos; o trabalho; ao professor"],
    x: "Quem entregou? Os alunos, que é o sujeito. Entregaram o quê? O trabalho, que é o objeto direto, sem preposição. Entregaram a quem? Ao professor, que é o objeto indireto, com preposição. Quando entregaram? Ontem, que é o adjunto adverbial de tempo.\n\nAs demais ordens trocam os termos: o trabalho como sujeito, ao professor como objeto direto, ontem como objeto indireto, ou ontem como sujeito. Cada termo exerce a função que a pergunta correspondente revela.",
  },
  {
    d: "dificil",
    e: "Na frase “Considero justa a decisão do juiz”, qual é a função sintática de justa?",
    o: ["Predicativo do objeto", "Predicativo do sujeito", "Adjunto adnominal", "Objeto indireto", "Complemento nominal"],
    x: "Considerar é verbo transitivo direto, e a decisão do juiz é o objeto direto, que vem depois do predicativo. Justa atribui uma característica a esse objeto, e concorda com ele em gênero e número: a decisão é justa. É, portanto, predicativo do objeto, mesmo anteposto ao objeto.\n\nO predicativo do sujeito se refere a eu, oculto, o que não faz sentido. O adjunto adnominal modifica o substantivo sem verbo, e aqui há o verbo considero. O objeto indireto e o complemento nominal não atribuem característica.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a expressão introduzida por por é agente da passiva?",
    o: ["A ponte foi destruída pela enchente.", "Chegou atrasado pela chuva.", "Passou pela rua devagar.", "Ligou pelo celular.", "Atrasou-se por causa do trânsito."],
    x: "Em a ponte foi destruída pela enchente, o verbo está na voz passiva, e pela enchente indica quem pratica a ação de destruir: é o agente da passiva. A transformação para a voz ativa confirma: a enchente destruiu a ponte.\n\nEm chegou atrasado pela chuva, pela chuva indica causa. Em passou pela rua, indica lugar. Em ligou pelo celular, indica meio. E em atrasou-se por causa do trânsito, a locução indica causa. São todos adjuntos adverbiais, e não agentes da passiva.",
  },
  {
    d: "dificil",
    e: "Na frase “O professor de quem gosto chegou”, qual é a função sintática de de quem?",
    o: ["Objeto indireto de gosto", "Objeto direto de gosto", "Sujeito de chegou", "Adjunto adnominal de professor", "Agente da passiva"],
    x: "Gostar pede a preposição de: gosto do professor. Na oração adjetiva “de quem gosto”, o pronome relativo quem retoma o professor e vem precedido da preposição exigida pelo verbo. Por isso “de quem” é objeto indireto de gosto.\n\nNão é objeto direto, porque gostar é transitivo indireto. Não é sujeito de chegou, que é o professor. Não é adjunto adnominal, porque completa o verbo gosto. E não é agente da passiva, porque o verbo não está na voz passiva.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre o predicativo está de acordo com a gramática normativa?",
    o: ["O predicativo atribui uma característica ao sujeito ou ao objeto.", "O predicativo sempre expressa circunstância de tempo.", "O predicativo só ocorre com verbos transitivos diretos.", "O predicativo substitui o sujeito na oração.", "O predicativo nunca concorda com o termo a que se refere."],
    x: "O predicativo é o termo que atribui uma característica, um estado ou uma qualidade ao sujeito (predicativo do sujeito) ou ao objeto (predicativo do objeto). Concorda em gênero e número com o termo a que se refere: ela ficou feliz, considero-a feliz.\n\nO predicativo não expressa circunstância de tempo, o que é função do adjunto adverbial. Pode ocorrer com verbo de ligação ou com verbo significativo. Não substitui o sujeito, e concorda sempre com o termo a que se refere.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre o sujeito e o predicado está de acordo com a gramática normativa?",
    o: ["O sujeito concorda com o verbo, e o predicado diz algo sobre ele", "O sujeito é sempre o termo que vem antes do verbo", "O predicado é sempre formado por verbo de ligação", "Toda oração tem sujeito expresso", "O sujeito nunca aparece depois do verbo"],
    x: "O sujeito é o termo sobre o qual se faz uma declaração e com o qual o verbo concorda. O predicado é o que se declara sobre o sujeito, e tem como núcleo o verbo ou o predicativo. Essa divisão é a base da análise sintática da oração.\n\nO sujeito pode vir depois do verbo, como em chegaram os convidados. O predicado pode ter verbo significativo, e não só de ligação. Nem toda oração tem sujeito expresso: pode haver sujeito oculto, indeterminado ou nenhum.",
  },
];
