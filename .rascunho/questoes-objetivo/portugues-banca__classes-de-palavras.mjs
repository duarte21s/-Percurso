/* Rascunho — Português de banca / Classes de palavras.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram classificações assentadas na gramática
   normativa: as dez classes, os tipos de substantivo, pronome, numeral,
   advérbio e conjunção, os valores de que, se, como, logo, pois, mais, bem,
   alto e o, locuções (prepositiva, adjetiva, conjuntiva), derivação
   imprópria, flexão de número e gênero, e as classes variáveis e
   invariáveis. Ficaram de fora, de propósito, os casos em que a gramática
   discute a classificação (onde como pronome relativo adverbial, que
   exclamativo, o numeral duas como adjetivo). */

export const materia = "portugues-banca";
export const tema = "Classes de palavras";
export const arquivo = "portugues-banca__classes-de-palavras";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Na frase “Maria comprou um livro novo”, a palavra novo pertence a qual classe gramatical?",
    o: ["Adjetivo", "Substantivo", "Verbo", "Advérbio", "Preposição"],
    x: "Novo acompanha o substantivo livro e indica uma qualidade ou característica dele, o que é função própria do adjetivo. O adjetivo concorda em gênero e número com o substantivo: um livro novo, uma casa nova, livros novos.\n\nNovo não é substantivo, porque não nomeia um ser; o substantivo da frase é livro. Não é verbo, porque não indica ação ou estado. Não é advérbio, porque não modifica um verbo e varia em gênero e número. E não é preposição, porque não liga termos.",
  },
  {
    d: "facil",
    e: "Na frase “Os alunos estudam muito”, a palavra estudam pertence a qual classe gramatical?",
    o: ["Verbo", "Substantivo", "Adjetivo", "Advérbio", "Conjunção"],
    x: "Estudam indica uma ação praticada pelos alunos e se flexiona em pessoa, número, tempo e modo: estudo, estudas, estudam, estudaram. Essas características são próprias do verbo.\n\nNão é substantivo, que nomeia seres. Não é adjetivo, que qualifica o substantivo. Não é advérbio, que é invariável e modifica verbo, adjetivo ou outro advérbio. E não é conjunção, que liga orações ou termos de mesma função.",
  },
  {
    d: "facil",
    e: "Na frase “Ele chegou cedo”, a palavra cedo pertence a qual classe gramatical?",
    o: ["Advérbio", "Adjetivo", "Substantivo", "Preposição", "Pronome"],
    x: "Cedo modifica o verbo chegou e indica a circunstância de tempo em que a ação ocorreu, o que é função própria do advérbio. O advérbio é invariável: chegou cedo, chegaram cedo, chegará cedo.\n\nNão é adjetivo, que acompanha o substantivo e concorda com ele. Não é substantivo, que nomeia seres. Não é preposição, que liga termos. E não é pronome, que substitui ou acompanha o substantivo.",
  },
  {
    d: "facil",
    e: "Na frase “O livro está sobre a mesa”, a palavra sobre pertence a qual classe gramatical?",
    o: ["Preposição", "Advérbio", "Conjunção", "Adjetivo", "Verbo"],
    x: "Sobre liga o termo o livro ao termo a mesa e estabelece entre eles uma relação de posição, que é a função própria da preposição. A preposição é invariável e introduz complementos e adjuntos.\n\nNão é advérbio, que modifica verbo, adjetivo ou outro advérbio sem ligar termos. Não é conjunção, que liga orações ou termos de mesma função. Não é adjetivo, que acompanha o substantivo. E não é verbo, que se flexiona em pessoa, número, tempo e modo.",
  },
  {
    d: "facil",
    e: "Na frase “Estudei muito, mas não passei”, a palavra mas pertence a qual classe gramatical?",
    o: ["Conjunção", "Preposição", "Advérbio", "Adjetivo", "Pronome"],
    x: "Mas liga duas orações, estudei muito e não passei, e estabelece entre elas uma ideia de oposição. É função própria da conjunção, e mais precisamente de uma conjunção coordenativa adversativa.\n\nNão é preposição, que liga termos e estabelece relações de lugar, posse, meio e outras. Não é advérbio, que modifica verbo, adjetivo ou advérbio. Não é adjetivo, que qualifica o substantivo. E não é pronome, que substitui ou acompanha o substantivo.",
  },
  {
    d: "facil",
    e: "Na frase “Ai, que dor!”, a palavra ai pertence a qual classe gramatical?",
    o: ["Interjeição", "Advérbio", "Conjunção", "Substantivo", "Preposição"],
    x: "Ai exprime um sentimento súbito, a dor, e funciona como uma frase em si. É a função própria da interjeição, que é invariável e expressa emoções e sensações: ai, ah, oh, ufa, puxa.\n\nNão é advérbio, que modifica verbo, adjetivo ou advérbio. Não é conjunção, que liga orações. Não é substantivo, que nomeia seres. E não é preposição, que liga termos. A interjeição costuma vir seguida de ponto de exclamação.",
  },
  {
    d: "facil",
    e: "Na frase “Comprei duas canetas”, a palavra duas pertence a qual classe gramatical?",
    o: ["Numeral", "Adjetivo", "Artigo", "Pronome", "Advérbio"],
    x: "Duas indica uma quantidade exata de canetas, e é função própria do numeral. O numeral cardinal expressa quantidade: um, dois, três, e varia em gênero em alguns casos: um, uma, dois, duas.\n\nNão é adjetivo, que qualifica o substantivo. Não é artigo, que define ou indefine o substantivo. Não é pronome, que substitui ou acompanha o substantivo. E não é advérbio, que modifica verbo, adjetivo ou outro advérbio.",
  },
  {
    d: "facil",
    e: "Na frase “Ela guardou o casaco no armário”, a palavra o pertence a qual classe gramatical?",
    o: ["Artigo definido", "Pronome oblíquo", "Preposição", "Conjunção", "Advérbio"],
    x: "O acompanha o substantivo casaco, determina-o e indica gênero masculino e número singular, o que é função própria do artigo. É definido porque particulariza o casaco: o casaco, um casaco em particular.\n\nNão é pronome oblíquo, que substitui um substantivo e aparece junto ao verbo, como em ela o guardou. Não é preposição, que liga termos. Não é conjunção, que liga orações. E não é advérbio, que modifica verbo, adjetivo ou advérbio.",
  },
  {
    d: "facil",
    e: "Na frase “Eu gosto de música”, a palavra eu pertence a qual classe gramatical?",
    o: ["Pronome pessoal", "Substantivo", "Artigo", "Advérbio", "Conjunção"],
    x: "Eu indica a pessoa que fala, a primeira do singular, e substitui o nome de quem fala, o que é função própria do pronome pessoal. Os pronomes pessoais retos, como eu, tu, ele, nós, vós, eles, funcionam como sujeito.\n\nNão é substantivo, que nomeia seres. Não é artigo, que determina o substantivo. Não é advérbio, que modifica verbo, adjetivo ou advérbio. E não é conjunção, que liga orações ou termos.",
  },
  {
    d: "facil",
    e: "Na frase “A beleza da paisagem impressionou todos”, como é classificado o substantivo beleza?",
    o: ["Comum e abstrato", "Próprio e concreto", "Comum e concreto", "Próprio e abstrato", "Coletivo e concreto"],
    x: "Beleza não nomeia um ser específico, mas um conjunto de coisas de uma espécie, por isso é substantivo comum. Também nomeia uma qualidade que não existe por si só, mas depende de outro ser, e por isso é abstrato.\n\nNão é próprio, porque não nomeia um ser único, como Brasil ou Maria. Não é concreto, porque o substantivo concreto nomeia seres que existem por si, como paisagem ou casa. E não é coletivo, porque o coletivo indica um conjunto de seres, como cardume.",
  },
  {
    d: "facil",
    e: "Na frase “O rio Amazonas é extenso”, como é classificado o substantivo Amazonas?",
    o: ["Próprio", "Comum", "Coletivo", "Abstrato", "Primitivo"],
    x: "Amazonas é o nome específico de um rio, que o distingue de todos os outros rios, e por isso é substantivo próprio. Os substantivos próprios se escrevem com inicial maiúscula e nomeiam seres singulares: Amazonas, Brasil, Maria.\n\nRio é o substantivo comum da frase, porque nomeia qualquer rio. Amazonas não é coletivo, porque não indica um conjunto de seres. Não é abstrato, porque nomeia um ser concreto. E primitivo é uma classificação quanto à formação das palavras, e não quanto ao sentido.",
  },
  {
    d: "facil",
    e: "Qual das palavras abaixo é um substantivo coletivo?",
    o: ["cardume", "peixe", "mar", "pescador", "rede"],
    x: "Substantivo coletivo é o que, no singular, indica um conjunto de seres da mesma espécie. Cardume designa um conjunto de peixes, e é o coletivo de peixes. Outros exemplos são matilha, para cães, e enxame, para abelhas.\n\nPeixe, mar, pescador e rede são substantivos comuns que designam um ser ou uma coisa, e não um conjunto: um peixe, um mar, um pescador, uma rede. Para reconhecer um coletivo, basta perguntar se a palavra, no singular, já indica vários seres.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Na frase “O livro que li ontem é ótimo”, como é classificada a palavra que?",
    o: ["Pronome relativo", "Conjunção integrante", "Conjunção comparativa", "Advérbio de intensidade", "Interjeição"],
    x: "Que retoma o termo o livro, que aparece antes dele, e exerce na oração seguinte a função de objeto direto de li: li o livro. A palavra que se refere a um termo anterior e liga duas orações é pronome relativo, e a oração introduzida por ele é uma oração adjetiva.\n\nA conjunção integrante introduz oração que completa o verbo e não retoma nenhum termo, como em disse que viria. A conjunção comparativa aparece em comparações, como mais alto que ele. O advérbio de intensidade modifica adjetivo, e a interjeição exprime emoção.",
  },
  {
    d: "media",
    e: "Na frase “Ela disse que chegaria cedo”, como é classificada a palavra que?",
    o: ["Conjunção integrante", "Pronome relativo", "Conjunção comparativa", "Advérbio de intensidade", "Interjeição"],
    x: "Que introduz a oração “chegaria cedo”, que funciona como objeto direto de disse: ela disse isso. Não retoma nenhum termo anterior, apenas liga a oração subordinada à principal. É a conjunção integrante, que introduz orações subordinadas substantivas.\n\nO pronome relativo retoma um termo anterior, como em o livro que li. A conjunção comparativa aparece em comparações. O advérbio de intensidade modifica adjetivo ou advérbio, e a interjeição exprime emoção.",
  },
  {
    d: "media",
    e: "Na frase “Pedro é mais alto que o irmão”, como é classificada a palavra que?",
    o: ["Conjunção subordinativa comparativa", "Pronome relativo", "Conjunção integrante", "Advérbio de intensidade", "Preposição"],
    x: "Que liga os dois termos comparados, Pedro e o irmão, depois de um comparativo de superioridade, mais alto. Nesse emprego, em que estabelece uma comparação entre os dois, o que é conjunção subordinativa comparativa. Equivale a do que, em mais alto do que o irmão.\n\nNão é pronome relativo, porque não retoma nenhum termo anterior. Não é conjunção integrante, porque não introduz oração que completa o verbo. Não é advérbio de intensidade, que modifica adjetivo. E não é preposição, que liga termos sem estabelecer comparação.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra se é conjunção integrante?",
    o: ["Perguntei se ele viria à festa.", "Se chover, o jogo será adiado.", "Vendem-se casas usadas.", "Ele se penteou antes de sair.", "Precisa-se de ajuda na obra."],
    x: "Em perguntei se ele viria, o se introduz a oração “ele viria”, que completa o verbo perguntei como objeto direto, sem exprimir condição: é conjunção integrante. A oração equivale a perguntei isso. Costuma aparecer em interrogações indiretas.\n\nEm se chover, o se exprime condição, e é conjunção subordinativa condicional. Em vendem-se, é partícula apassivadora. Em se penteou, é pronome reflexivo. E em precisa-se, é índice de indeterminação do sujeito.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra se é partícula apassivadora?",
    o: ["Alugam-se salas comerciais no centro.", "Precisa-se de motoristas para a empresa.", "Ela se arrependeu da compra.", "Não sei se ele virá hoje.", "Se estudar, você passará."],
    x: "Em alugam-se salas comerciais, o verbo alugar é transitivo direto, e o se apassiva a oração: salas comerciais são alugadas. Salas comerciais é o sujeito paciente, e o verbo concorda com ele no plural. O se é, portanto, partícula apassivadora.\n\nEm precisa-se de motoristas, o verbo é transitivo indireto, e o se é índice de indeterminação do sujeito. Em ela se arrependeu, é parte integrante do verbo pronominal. Em não sei se ele virá, é conjunção integrante. E em se estudar, é conjunção condicional.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra se é índice de indeterminação do sujeito?",
    o: ["Trata-se de um assunto delicado.", "Vendem-se frutas frescas.", "Eles se cumprimentaram na rua.", "Veja se há leite na geladeira.", "Se puder, avise-me."],
    x: "Em trata-se de um assunto delicado, o verbo tratar é transitivo indireto e pede a preposição de, e não tem sujeito determinado. O se indetermina o sujeito, e o verbo fica na terceira pessoa do singular: trata-se. É o índice de indeterminação do sujeito.\n\nEm vendem-se frutas, o se é partícula apassivadora, pois o verbo vender é transitivo direto. Em eles se cumprimentaram, é pronome recíproco. Em veja se há leite, é conjunção integrante. E em se puder, é conjunção condicional.",
  },
  {
    d: "media",
    e: "Na frase “Aquela casa é minha”, as palavras aquela e minha pertencem, respectivamente, a quais classes?",
    o: ["Pronome demonstrativo e pronome possessivo", "Pronome possessivo e pronome demonstrativo", "Artigo e pronome possessivo", "Pronome demonstrativo e adjetivo", "Pronome pessoal e pronome possessivo"],
    x: "Aquela indica a posição da casa em relação ao falante, e por isso é pronome demonstrativo. Minha indica a posse, em relação à primeira pessoa, e por isso é pronome possessivo. Os dois acompanham ou substituem o substantivo e concordam com ele em gênero e número.\n\nA ordem inversa troca as duas classes. Aquela não é artigo, porque indica posição, e não apenas determina o substantivo. Minha não é adjetivo, porque indica posse, e não qualidade. E aquela não é pronome pessoal, que designa as pessoas do discurso.",
  },
  {
    d: "media",
    e: "Na frase “Alguém deixou tudo desarrumado”, as palavras alguém e tudo pertencem a qual classe?",
    o: ["Pronome indefinido", "Pronome pessoal", "Pronome demonstrativo", "Pronome relativo", "Pronome possessivo"],
    x: "Alguém e tudo se referem a seres de maneira vaga, sem identificá-los ou determiná-los, e por isso são pronomes indefinidos. Alguém indica uma pessoa não especificada, e tudo, uma totalidade não especificada. Outros indefinidos são ninguém, nada, algum, nenhum, todo, vários.\n\nNão são pronomes pessoais, que designam as pessoas do discurso. Não são demonstrativos, que indicam posição. Não são relativos, que retomam um termo anterior. E não são possessivos, que indicam posse.",
  },
  {
    d: "media",
    e: "Na frase “Quem chegou primeiro?”, como é classificada a palavra quem?",
    o: ["Pronome interrogativo", "Pronome relativo", "Pronome pessoal", "Pronome indefinido", "Pronome demonstrativo"],
    x: "Quem introduz uma pergunta sobre a pessoa que chegou primeiro, e por isso é pronome interrogativo. Os pronomes interrogativos são quem, que, qual e quanto, e aparecem em perguntas diretas ou indiretas.\n\nNão é relativo, porque não retoma um termo anterior nem liga duas orações. Não é pessoal, que designa as pessoas do discurso. Não é indefinido, que se refere vagamente a seres. E não é demonstrativo, que indica posição em relação ao falante.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção introduz oração coordenada sindética conclusiva?",
    o: ["Penso, logo existo.", "Estudou muito, mas não passou.", "Chove, e faz frio.", "Venha cedo, pois haverá fila.", "Ou estuda, ou trabalha."],
    x: "Em penso, logo existo, a conjunção logo introduz uma conclusão tirada da oração anterior: se penso, concluo que existo. É conjunção coordenativa conclusiva, e a oração que ela introduz é coordenada sindética conclusiva.\n\nEm mas não passou, a conjunção mas é adversativa. Em e faz frio, e é aditiva. Em pois haverá fila, pois é explicativa. E em ou estuda, ou trabalha, ou é alternativa. Cada uma estabelece uma relação diferente com a oração anterior.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção estabelece ideia de alternância?",
    o: ["Ou você estuda, ou você trabalha.", "Ele chegou, e ela saiu.", "Estudou, porém não passou.", "Penso, logo existo.", "Leve o guarda-chuva, pois vai chover."],
    x: "Ou, repetido ou não, é conjunção coordenativa do tipo alternativo e indica escolha entre duas possibilidades, em que uma exclui a outra: ou você estuda, ou você trabalha. Outras alternativas são ora... ora, quer... quer e seja... seja.\n\nE é aditiva, e soma ideias. Porém é adversativa, e opõe ideias. Logo é conclusiva, e conclui. E pois, anteposto à oração, é explicativa, e justifica a ordem dada na oração anterior.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção introduz oração subordinada adverbial causal?",
    o: ["Faltou porque estava doente.", "Faltou, embora estivesse bem.", "Faltou para descansar.", "Faltou quando chegou o frio.", "Faltou se estivesse doente."],
    x: "Porque introduz a causa da ação principal: faltou, e a causa é que estava doente. Por isso a oração “porque estava doente” é subordinada adverbial causal, e a conjunção é subordinativa causal. Outras causais são já que, visto que e como, no início da frase.\n\nEmbora é concessiva. Para introduz finalidade. Quando é temporal. E se é condicional. Cada uma indica uma circunstância diferente: oposição, finalidade, tempo e condição.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção introduz oração subordinada adverbial concessiva?",
    o: ["Embora estivesse cansado, ele terminou a prova.", "Como estava cansado, ele desistiu da prova.", "Se estivesse cansado, ele desistiria da prova.", "Quando estava cansado, ele desistia da prova.", "Ele estudou para que fosse aprovado."],
    x: "Embora introduz um fato que seria um obstáculo à ação principal, mas que não a impede: estava cansado, mas terminou a prova. A oração “embora estivesse cansado” é subordinada adverbial concessiva. Outras conjunções concessivas são ainda que, mesmo que, conquanto e apesar de que.\n\nComo, no início da frase, é causal. Se é condicional. Quando é temporal. E para que é final. Em nenhuma delas há oposição entre o fato e o resultado.",
  },
  {
    d: "media",
    e: "Na frase “Talvez eles não venham amanhã”, de que tipos são, respectivamente, os advérbios talvez, não e amanhã?",
    o: ["dúvida, negação e tempo", "tempo, modo e lugar", "modo, afirmação e intensidade", "dúvida, afirmação e lugar", "lugar, negação e tempo"],
    x: "Talvez exprime incerteza, e é advérbio de dúvida. Não exprime negação, e é advérbio de negação. Amanhã situa a ação no tempo, e é advérbio de tempo. Cada advérbio modifica o verbo venham e indica uma circunstância diferente.\n\nAs demais sequências trocam uma ou mais circunstâncias: nenhuma das palavras indica modo, lugar, afirmação ou intensidade. O advérbio é a classe invariável que indica circunstâncias de tempo, lugar, modo, intensidade, dúvida, afirmação e negação.",
  },
  {
    d: "media",
    e: "Na frase “Ela canta muito bem aqui”, de que tipos são, respectivamente, os advérbios muito, bem e aqui?",
    o: ["intensidade, modo e lugar", "tempo, modo e lugar", "intensidade, tempo e lugar", "modo, negação e lugar", "intensidade, modo e tempo"],
    x: "Muito intensifica o advérbio bem, e é advérbio de intensidade. Bem indica a maneira como ela canta, e é advérbio de modo. Aqui indica o lugar em que ela canta, e é advérbio de lugar. Muito modifica um advérbio, o que mostra que o advérbio pode modificar outro advérbio.\n\nAs demais sequências trocam uma ou mais circunstâncias: nenhuma das palavras indica tempo ou negação. Convém lembrar que o advérbio modifica verbo, adjetivo ou outro advérbio, e não varia.",
  },
  {
    d: "media",
    e: "Qual das expressões abaixo é uma locução prepositiva?",
    o: ["em frente a", "apesar de que", "ao passo que", "à medida que", "já que"],
    x: "Em frente a funciona como uma preposição composta, formada por mais de uma palavra, e liga termos estabelecendo uma relação de lugar: o carro está em frente à casa. É locução prepositiva e termina sempre em preposição: em frente a, junto a, acerca de, antes de.\n\nApesar de que, ao passo que, à medida que e já que são locuções conjuntivas, porque terminam em que e ligam orações. Convém lembrar que a locução prepositiva liga termos, e a locução conjuntiva, orações.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é um numeral multiplicativo?",
    o: ["dobro", "metade", "terço", "dezena", "primeiro"],
    x: "Dobro indica quantas vezes uma quantidade é multiplicada, duas vezes, e por isso é numeral multiplicativo. Outros exemplos são triplo, quádruplo e quíntuplo.\n\nMetade e terço são numerais fracionários, porque indicam divisão em partes. Dezena é numeral coletivo, porque indica um conjunto de dez. Primeiro é numeral ordinal, porque indica ordem em uma sequência. As quatro classificações dos numerais são cardinal, ordinal, multiplicativo e fracionário, além dos coletivos.",
  },
  {
    d: "media",
    e: "Qual locução adjetiva corresponde ao adjetivo “equino”?",
    o: ["de cavalo", "de boi", "de porco", "de cachorro", "de gato"],
    x: "Locução adjetiva é a expressão formada por preposição mais substantivo que tem valor de adjetivo. Equino é o adjetivo que corresponde a de cavalo: raça equina, corrida de cavalos. Outros pares são bovino e de boi, suíno e de porco, canino e de cachorro, felino e de gato.\n\nAs demais locuções correspondem a outros adjetivos: de boi a bovino, de porco a suíno, de cachorro a canino e de gato a felino. A associação de cada adjetivo a seu animal exige memória, mas segue a origem latina das palavras.",
  },
  {
    d: "media",
    e: "Qual é o superlativo absoluto sintético de “antigo”?",
    o: ["antiquíssimo", "antigíssimo", "antiguíssimo", "antigoíssimo", "antíssimo"],
    x: "O superlativo absoluto sintético de antigo é antiquíssimo, formado a partir do radical latino antiqu-. Alguns adjetivos têm o superlativo formado a partir do radical latino: antiquíssimo (antigo), cristianíssimo (cristão), amicíssimo (amigo, em uso mais raro), paupérrimo (pobre).\n\nAntigíssimo, antiguíssimo, antigoíssimo e antíssimo seguem o radical português ou criam formas que não existem, e por isso não são aceitas. A forma analítica é muito antigo, formada por advérbio e adjetivo.",
  },
  {
    d: "media",
    e: "Em qual das opções todos os plurais estão corretos?",
    o: ["cidadãos, pães, botões", "cidadões, pães, botões", "cidadãos, pãos, botões", "cidadãos, pães, botãos", "cidadões, pãos, botãos"],
    x: "Os substantivos terminados em ão formam o plural de três maneiras. Cidadão faz cidadãos (como mão e irmão), pão faz pães (como capitão e alemão), e botão faz botões (como balão e coração). Não há uma regra geral, e a forma depende da origem da palavra.\n\nCidadões, pãos e botãos aplicam o plural de um grupo a palavras de outro. As sequências erradas combinam esses erros de maneiras diferentes, e a única correta é a que usa cada plural no grupo de sua palavra.",
  },
  {
    d: "media",
    e: "Em qual das opções todos os plurais de palavras compostas estão corretos?",
    o: ["couves-flores, guarda-chuvas, amores-perfeitos", "couve-flores, guarda-chuvas, amores-perfeitos", "couves-flores, guardas-chuvas, amores-perfeitos", "couves-flores, guarda-chuvas, amor-perfeitos", "couve-flores, guardas-chuvas, amor-perfeitos"],
    x: "Nos compostos formados por dois substantivos ou por substantivo e adjetivo, os dois elementos variam: couves-flores, amores-perfeitos. Nos compostos formados por verbo e substantivo, só o segundo elemento varia: guarda-chuvas, pois guarda é verbo.\n\nCouve-flores deixa o primeiro elemento no singular. Guardas-chuvas flexiona o verbo, que é invariável. Amor-perfeitos deixa o primeiro elemento no singular. E as sequências mistas combinam esses erros de modos diferentes.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra grama está empregada no gênero adequado ao sentido?",
    o: ["Comprou um grama de ouro e cortou a grama do jardim.", "Comprou uma grama de ouro e cortou o grama do jardim.", "Comprou uma grama de ouro e cortou a grama do jardim.", "Comprou um grama de ouro e cortou o grama do jardim.", "Comprou um gramo de ouro e cortou o gramo do jardim."],
    x: "Grama muda de gênero com o sentido. Como unidade de massa, é masculino: um grama de ouro. Como planta rasteira, é feminino: a grama do jardim. O artigo acompanha o sentido da palavra.\n\nAs demais frases trocam o gênero de uma das ocorrências ou de ambas. Gramo, no último caso, é variante da unidade de massa, mas não é a forma da planta, e por isso a frase não resolve a dupla de sentidos da palavra.",
  },
  {
    d: "media",
    e: "Qual das sequências abaixo contém apenas classes de palavras invariáveis?",
    o: ["advérbio, preposição, conjunção e interjeição", "substantivo, adjetivo, artigo e numeral", "verbo, pronome, advérbio e artigo", "adjetivo, preposição, conjunção e verbo", "pronome, numeral, advérbio e interjeição"],
    x: "As classes invariáveis são as que não se flexionam em gênero, número, pessoa, tempo ou modo: advérbio, preposição, conjunção e interjeição. Elas aparecem sempre com a mesma forma, independentemente da palavra com que se relacionam.\n\nSubstantivo, adjetivo, artigo e numeral variam em gênero e número. Verbo varia em pessoa, número, tempo e modo, e o pronome varia em pessoa, gênero e número. A sequência com adjetivo e verbo e a que tem pronome e numeral misturam classes variáveis e invariáveis.",
  },
  {
    d: "media",
    e: "Qual é a função do artigo em “Os alunos chegaram”?",
    o: ["Determinar o substantivo e indicar seu gênero e número", "Substituir o substantivo para evitar repetições", "Ligar duas orações coordenadas entre si", "Exprimir emoção súbita do falante", "Indicar a circunstância de tempo da ação"],
    x: "O artigo acompanha o substantivo e o determina, definindo-o ou indefinindo-o, e indica o gênero e o número dele. Em os alunos, o artigo os define alunos específicos e indica o masculino plural. Artigos definidos são o, a, os, as; indefinidos são um, uma, uns, umas.\n\nSubstituir o substantivo é função do pronome. Ligar orações é função da conjunção. Exprimir emoção é função da interjeição. E indicar circunstância de tempo é função do advérbio.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra mais é pronome indefinido?",
    o: ["Comprou mais livros do que precisava.", "Ele estudou mais do que o irmão.", "Mais cedo ou mais tarde, ele chega.", "Ela é mais alta que a prima.", "Não quero mais."],
    x: "Em mais livros, a palavra mais acompanha o substantivo livros e indica quantidade de modo vago, o que é função do pronome indefinido. Esse emprego é próprio de mais quando vem antes de substantivo.\n\nEm estudou mais, mais modifica o verbo, e é advérbio de intensidade. Em mais cedo, mais tarde, modifica advérbios. Em mais alta, modifica adjetivo. E em não quero mais, modifica o verbo. Em todas elas, mais é advérbio de intensidade.",
  },
  {
    d: "media",
    e: "Na frase “O saber não ocupa lugar”, como é classificada a palavra saber?",
    o: ["Substantivo, por derivação imprópria", "Verbo no infinitivo", "Adjetivo", "Advérbio", "Interjeição"],
    x: "Saber é originalmente um verbo no infinitivo, mas, precedido do artigo o e funcionando como núcleo do sujeito, passa a substantivo. Esse processo, em que uma palavra muda de classe sem mudar de forma, chama-se derivação imprópria.\n\nNão é verbo aqui, porque tem artigo e é núcleo do sujeito. Não é adjetivo, que qualifica. Não é advérbio, que modifica verbo, adjetivo ou advérbio. E não é interjeição, que exprime emoção.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra como é conjunção subordinativa causal?",
    o: ["Como não estudou, foi reprovado.", "Como você pediu, trouxe os livros.", "Ele corre como um atleta.", "Como você chegou tão cedo?", "Ela falou como quem sabe."],
    x: "Em como não estudou, foi reprovado, o como introduz a causa da reprovação: não estudou, por isso foi reprovado. É conjunção subordinativa causal, e vem no início da frase, antes da oração principal.\n\nEm como você pediu, é conformativa, pois indica conformidade. Em corre como um atleta, e falou como quem sabe, é comparativa. E em como você chegou tão cedo?, é advérbio interrogativo de modo.",
  },

  {
    d: "media",
    e: "Na frase “Ela me entregou o livro”, como é classificada a palavra me?",
    o: ["Pronome pessoal oblíquo átono", "Pronome pessoal reto", "Pronome possessivo", "Pronome demonstrativo", "Artigo definido"],
    x: "Me substitui a pessoa que fala, a primeira do singular, e exerce a função de objeto indireto de entregou: ela entregou o livro a mim. Por ser um pronome pessoal que não é o sujeito e que se apoia no verbo, é pronome pessoal oblíquo átono.\n\nO pronome pessoal reto, como eu, funciona como sujeito. O possessivo indica posse, como em meu livro. O demonstrativo indica posição, como em este livro. E o artigo determina o substantivo, e não substitui a pessoa que fala.",
  },
  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Na frase “O professor disse que o livro que comprei é caro”, como são classificados, respectivamente, os dois que?",
    o: ["conjunção integrante e pronome relativo", "pronome relativo e conjunção integrante", "conjunção integrante e conjunção comparativa", "pronome relativo e pronome relativo", "advérbio de intensidade e pronome relativo"],
    x: "O primeiro que introduz a oração “o livro que comprei é caro”, que completa o verbo disse como objeto direto, e não retoma nenhum termo: é conjunção integrante. O segundo que retoma o livro e exerce a função de objeto direto de comprei: é pronome relativo.\n\nA ordem inversa troca as classes. Nenhum dos dois é comparativo, porque a frase não faz comparação. E nenhum é advérbio de intensidade, porque nenhum modifica adjetivo.",
  },
  {
    d: "dificil",
    e: "Na frase “Vive-se bem aqui, mas trata-se de um assunto delicado”, qual é o valor do se nas duas ocorrências?",
    o: ["índice de indeterminação do sujeito", "partícula apassivadora", "pronome reflexivo", "conjunção integrante", "parte integrante do verbo"],
    x: "Em vive-se, o verbo viver é intransitivo, e em trata-se de, o verbo tratar é transitivo indireto e pede a preposição de. Em ambos, o sujeito não é determinado, e o verbo fica na terceira pessoa do singular. O se é, portanto, índice de indeterminação do sujeito nas duas ocorrências.\n\nA partícula apassivadora ocorre com verbos transitivos diretos, como em vendem-se casas. O pronome reflexivo indica que o sujeito pratica a ação em si mesmo. A conjunção integrante introduz oração substantiva. E a parte integrante do verbo ocorre em verbos pronominais, como arrepender-se.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a palavra logo é conjunção conclusiva?",
    o: ["Penso, logo existo.", "Volto logo, espere aqui.", "Logo depois do almoço, saímos.", "Chegou logo cedo hoje.", "Ele logo percebeu o erro."],
    x: "Em penso, logo existo, logo introduz uma conclusão tirada da oração anterior, e por isso é conjunção coordenativa conclusiva. Equivale a portanto ou por conseguinte, e aparece com vírgula antes ou entre vírgulas.\n\nEm volto logo, logo depois do almoço, chegou logo cedo e ele logo percebeu, a palavra indica tempo, e equivale a em pouco tempo, imediatamente ou rapidamente. Nesses casos, é advérbio de tempo. O que separa os dois usos é o sentido de conclusão ou de tempo.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a palavra pois é conjunção explicativa?",
    o: ["Leve o guarda-chuva, pois vai chover.", "Ele estudou muito; foi, pois, aprovado.", "Você é o responsável; deve, pois, resolver o problema.", "Ele é rico; tem, pois, direito de escolher.", "Ele não veio; ficou, pois, sem o prêmio."],
    x: "Em leve o guarda-chuva, pois vai chover, o pois vem no início da oração, depois da ordem dada, e introduz a justificativa dela: leve o guarda-chuva porque vai chover. Nessa posição, anteposto ao verbo, pois é conjunção explicativa.\n\nNas outras frases, o pois aparece depois do verbo, entre vírgulas, e equivale a portanto: foi, pois, aprovado; deve, pois, resolver; tem, pois, direito; ficou, pois, sem o prêmio. Nessa posição, posposto ao verbo, é conjunção conclusiva.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a palavra alto é advérbio?",
    o: ["Ele fala alto em sala de aula.", "Ele é um aluno alto.", "A torre é muito alta.", "O prédio alto foi demolido.", "As árvores altas caíram."],
    x: "Em ele fala alto, a palavra alto modifica o verbo fala e indica o modo como se fala, e por isso é advérbio de modo. Como advérbio, é invariável: ele fala alto, elas falam alto.\n\nNas outras frases, alto acompanha um substantivo e concorda com ele: aluno alto, torre alta, prédio alto, árvores altas. Nesses casos, é adjetivo. O teste é verificar se a palavra varia: se concorda com um substantivo, é adjetivo; se modifica o verbo e não varia, é advérbio.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a palavra bem é substantivo?",
    o: ["O bem sempre vence o mal.", "Ele canta bem.", "Ela está bem agora.", "Fizeram bem em avisar.", "Está tudo muito bem."],
    x: "Em o bem sempre vence o mal, a palavra bem vem precedida do artigo o e funciona como núcleo do sujeito. Passou a ser substantivo, e é antônima de mal, também substantivo: o bem, o mal.\n\nNas outras frases, bem modifica um verbo ou adjetivo e indica modo: canta bem, está bem, fizeram bem, está muito bem. Nesses casos, é advérbio de modo, e é invariável. Na última, muito intensifica bem, o que confirma que bem é advérbio.",
  },
  {
    d: "dificil",
    e: "Qual das expressões abaixo é uma locução conjuntiva subordinativa causal?",
    o: ["já que", "apesar de", "em frente a", "por causa de", "junto a"],
    x: "Já que liga duas orações e indica a causa do fato expresso na principal: já que chegou cedo, esperou. É locução conjuntiva subordinativa causal, e termina em que, como as demais locuções conjuntivas. Outros exemplos são visto que e uma vez que.\n\nApesar de, em frente a, por causa de e junto a terminam em preposição e ligam termos, e não orações: são locuções prepositivas. Por causa de, embora indique causa, liga um substantivo ao verbo, como em faltou por causa da chuva.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a palavra o é pronome demonstrativo?",
    o: ["Ele fez o que prometeu.", "Ele o viu no cinema.", "O menino chegou cedo.", "Comprei o livro novo.", "Dê o recado a ele."],
    x: "Em fez o que prometeu, a palavra o equivale a aquilo, e por isso é pronome demonstrativo: ele fez aquilo que prometeu. Nesse uso, o vem antes do pronome relativo que e pode ser trocado por aquilo.\n\nEm ele o viu, o é pronome pessoal oblíquo, que substitui um substantivo. Em o menino, o livro e o recado, é artigo definido, que determina o substantivo. A troca por aquilo só é possível no primeiro caso.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre as classes de palavras está de acordo com a gramática normativa?",
    o: ["A classe de uma palavra depende da função que ela exerce na frase", "Uma palavra pertence a uma só classe em qualquer contexto", "O advérbio concorda em gênero e número com o substantivo", "A preposição varia em tempo e modo", "A interjeição liga orações coordenadas"],
    x: "A classe de uma palavra é definida pela função que ela exerce no contexto. Por isso a mesma palavra pode mudar de classe de uma frase para outra: bem é advérbio em canta bem e substantivo em o bem vence o mal; que é pronome relativo em o livro que li e conjunção em disse que viria.\n\nUma palavra não pertence a uma só classe em qualquer contexto. O advérbio é invariável. A preposição é invariável, e quem varia em tempo e modo é o verbo. E a interjeição exprime emoção, e não liga orações.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre a conjunção e a preposição está correta?",
    o: ["A conjunção liga orações ou termos de mesma função, e a preposição liga termos com relação de dependência", "As duas ligam apenas orações", "A conjunção é variável, e a preposição, invariável", "A preposição liga orações coordenadas, e a conjunção, termos subordinados", "As duas são variáveis em gênero e número"],
    x: "A conjunção liga orações ou termos de mesma função, como em estudei e trabalhei ou pão e leite, ou liga uma oração subordinada à principal. A preposição liga um termo regente a seu complemento ou adjunto, estabelecendo uma relação de dependência: livro de história, ir a Paris.\n\nAs duas não ligam apenas orações, e as duas são invariáveis. Inverter as funções, dizendo que a preposição liga orações coordenadas e a conjunção, termos subordinados, contraria a definição. Nem a conjunção nem a preposição variam em gênero e número.",
  },
];
