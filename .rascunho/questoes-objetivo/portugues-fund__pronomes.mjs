/* Rascunho — Português · 6º ao 9º / Pronomes.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais, em
   linguagem e situações de escola do ensino fundamental II. Gramática não se
   confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram regras assentadas: função do pronome, pessoas do
   discurso, pronomes pessoais retos e oblíquos (e o uso de eu e mim depois de
   preposição), possessivos, demonstrativos, indefinidos, interrogativos,
   relativos (que, cujo, em que), pronomes de tratamento, o referente do
   pronome e a ambiguidade que ele causa. Ficaram de fora, de propósito, o uso
   de este e esse para o tempo, que a gramática e o uso corrente tratam de
   modo diferente, e a colocação pronominal, que tem conteúdo próprio. */

export const materia = "portugues-fund";
export const tema = "Pronomes";
export const arquivo = "portugues-fund__pronomes";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual é a principal função dos pronomes em um texto?",
    o: ["Substituir ou acompanhar os substantivos, evitando repetições", "Indicar ações, estados e fenômenos da natureza", "Ligar orações e relacionar ideias", "Expressar emoções repentinas do falante", "Modificar o sentido de verbos, adjetivos e advérbios"],
    x: "O pronome é a palavra que substitui ou acompanha um substantivo, evitando que ele se repita no texto. Em Marta chegou, e ela trouxe o bolo, a palavra ela substitui Marta. Em este caderno é meu, as palavras este e meu acompanham o substantivo caderno.\n\nIndicar ações e estados é função do verbo. Ligar orações é função da conjunção. Expressar emoções repentinas é função da interjeição. E modificar verbos, adjetivos e advérbios é função do advérbio.",
  },
  {
    d: "facil",
    e: "Em “Carlos perdeu o livro, mas ele já o encontrou”, a que palavra se refere o pronome o?",
    o: ["livro", "Carlos", "ele", "perdeu", "encontrou"],
    x: "O pronome o aparece junto ao verbo encontrou e substitui aquilo que foi encontrado, que é o livro: Carlos já encontrou o livro. Por isso o pronome o se refere à palavra livro.\n\nCarlos é a palavra a que se refere o pronome ele, na mesma frase. Perdeu e encontrou são verbos, e os pronomes não se referem a verbos, mas a seres, as pessoas e as coisas nomeadas por substantivos.",
  },
  {
    d: "facil",
    e: "Na frase “Este caderno é meu”, como se classifica a palavra meu?",
    o: ["Pronome possessivo", "Pronome demonstrativo", "Pronome indefinido", "Pronome pessoal", "Pronome interrogativo"],
    x: "A palavra meu indica a quem o caderno pertence: a quem fala. As palavras que indicam posse são os pronomes possessivos: meu, teu, seu, nosso, vosso. Por isso meu é pronome possessivo.\n\nEste é o pronome demonstrativo da frase, porque indica a posição do caderno, perto de quem fala. Meu não é indefinido, pois se refere a alguém determinado. Não é pessoal, pois não indica a pessoa que fala, mas a posse. E não é interrogativo, porque a frase não faz pergunta.",
  },
  {
    d: "facil",
    e: "Em “Aquele menino é meu primo”, aquele é que tipo de pronome?",
    o: ["Pronome demonstrativo", "Pronome possessivo", "Pronome indefinido", "Pronome pessoal", "Pronome relativo"],
    x: "A palavra aquele aponta para o menino e indica que ele está longe de quem fala e de quem ouve. As palavras que indicam a posição de um ser no espaço ou no tempo são os pronomes demonstrativos: este, esse, aquele e suas flexões. Por isso aquele é pronome demonstrativo.\n\nO possessivo da frase é meu. Aquele não é indefinido, porque aponta para um menino determinado. Não é pessoal, porque não indica a pessoa do discurso. E não é relativo, porque não retoma um termo anterior.",
  },
  {
    d: "facil",
    e: "A palavra alguém, em “Alguém bateu à porta”, pertence a qual classe de pronomes?",
    o: ["Pronome indefinido", "Pronome pessoal", "Pronome possessivo", "Pronome demonstrativo", "Pronome relativo"],
    x: "Alguém se refere a uma pessoa de modo vago, sem dizer quem ela é. As palavras que se referem a seres de maneira imprecisa são os pronomes indefinidos: alguém, ninguém, tudo, nada, algum, nenhum, todos. Por isso alguém é pronome indefinido.\n\nO pronome pessoal indicaria uma pessoa do discurso, como eu ou ele. O possessivo indicaria posse. O demonstrativo indicaria posição. E o relativo retomaria um termo anterior, o que não ocorre na frase.",
  },
  {
    d: "facil",
    e: "Na pergunta “Quem chegou primeiro?”, qual é a classificação do pronome quem?",
    o: ["Pronome interrogativo", "Pronome indefinido", "Pronome possessivo", "Pronome demonstrativo", "Pronome pessoal"],
    x: "A palavra quem inicia uma pergunta sobre a pessoa que chegou primeiro. Os pronomes usados para fazer perguntas são os pronomes interrogativos: quem, qual, quanto, que. Por isso quem é pronome interrogativo.\n\nO indefinido se refere a seres de modo vago, como alguém. O possessivo indica posse. O demonstrativo indica posição. E o pessoal indica a pessoa do discurso. Em nenhum desses casos a palavra introduz uma pergunta.",
  },
  {
    d: "facil",
    e: "Qual destes pronomes é usado para se dirigir, em textos formais, a um deputado?",
    o: ["Vossa Excelência", "Vossa Santidade", "Vossa Magnificência", "Vossa Alteza", "Você"],
    x: "Os pronomes de tratamento são usados para se dirigir a uma pessoa de modo respeitoso, de acordo com o cargo. Vossa Excelência é o tratamento de ministros, deputados, senadores, governadores e prefeitos. É o que se usa em textos formais para se dirigir a um deputado.\n\nVossa Santidade é o tratamento do Papa. Vossa Magnificência é o tratamento dos reitores de universidades. Vossa Alteza é o tratamento de príncipes. E você é um tratamento informal, que não se usa em textos formais dirigidos a autoridades.",
  },
  {
    d: "facil",
    e: "Na frase “Maria me chamou ontem”, qual palavra é um pronome pessoal oblíquo?",
    o: ["me", "Maria", "chamou", "ontem", "Nenhuma das palavras da frase"],
    x: "A palavra me substitui o nome de quem fala e funciona como complemento do verbo chamou: Maria chamou a mim. Os pronomes pessoais que funcionam como complemento são os oblíquos: me, te, se, o, a, lhe, nos, vos. Por isso me é pronome pessoal oblíquo.\n\nMaria é um substantivo próprio, o sujeito da frase. Chamou é um verbo. Ontem é um advérbio de tempo. E a frase tem, sim, um pronome oblíquo, de modo que não é correto dizer que nenhuma das palavras o seja.",
  },
  {
    d: "facil",
    e: "Na frase “O livro que li é ótimo”, a palavra que retoma qual termo?",
    o: ["livro", "li", "ótimo", "O", "é"],
    x: "A palavra que é um pronome relativo: ela retoma um termo já citado e liga duas partes da frase. Em o livro que li, o pronome que retoma o substantivo livro: eu li o livro. Por isso o termo retomado é livro.\n\nLi é o verbo da segunda oração. Ótimo é o adjetivo que caracteriza o livro. O é o artigo que acompanha o substantivo. E é é o verbo da frase. Nenhuma dessas palavras é retomada pelo pronome.",
  },
  {
    d: "facil",
    e: "Qual pronome pessoal corresponde à primeira pessoa do plural?",
    o: ["nós", "eu", "tu", "vós", "eles"],
    x: "As pessoas do discurso são três: a primeira, quem fala; a segunda, com quem se fala; e a terceira, de quem ou de que se fala. No plural, a primeira pessoa é nós, formada por quem fala e outras pessoas.\n\nEu é a primeira pessoa do singular. Tu é a segunda do singular. Vós é a segunda do plural. E eles é a terceira do plural. Só nós corresponde à primeira do plural.",
  },
  {
    d: "facil",
    e: "Qual palavra completa a frase “Este presente é para ___ entregar à professora”?",
    o: ["eu", "mim", "me", "comigo", "si"],
    x: "Depois da preposição para, usa-se mim quando o pronome é complemento, como em este presente é para mim. Mas, quando o pronome é o sujeito de um verbo no infinitivo, usa-se eu: para eu entregar. Quem entrega é o próprio falante.\n\nMim não pode ser sujeito de entregar. Me é pronome oblíquo e não vem depois de para. Comigo significa com mim, e não completa a frase. E si é pronome reflexivo, que se refere ao sujeito da oração, o que não é o caso.",
  },
  {
    d: "facil",
    e: "Qual palavra completa a frase “Ela quer conversar ___ depois da aula”, no sentido de com mim?",
    o: ["comigo", "contigo", "consigo", "conosco", "convosco"],
    x: "A palavra que une a preposição com ao pronome mim é comigo: conversar comigo, falar comigo. É a forma que significa com a pessoa que fala, no singular.\n\nContigo significa com a pessoa com quem se fala, no singular. Consigo significa com a própria pessoa, de quem se fala. Conosco significa com quem fala e outras pessoas. E convosco significa com as pessoas com quem se fala, no plural. Só comigo traduz com mim.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Qual reescrita evita a repetição de palavras em “A professora entregou as provas aos alunos e depois a professora corrigiu as provas”?",
    o: ["A professora entregou as provas aos alunos e depois as corrigiu.", "A professora entregou as provas aos alunos e depois a professora as corrigiu.", "A professora entregou as provas aos alunos e depois corrigiu as provas dela.", "A professora entregou as provas aos alunos e depois corrigiu elas.", "A professora entregou as provas aos alunos e depois corrigiu as provas elas."],
    x: "Na segunda oração, o sujeito é o mesmo da primeira e pode ficar oculto, e as provas pode ser substituído pelo pronome as: depois as corrigiu. A reescrita elimina a repetição de a professora e de as provas sem alterar o sentido.\n\nMantém a repetição de a professora a reescrita em que ela aparece de novo. A frase com as provas dela troca o objeto por um possessivo, mas continua repetindo as provas. Corrigiu elas usa um pronome reto como objeto, o que a norma-padrão não aceita. E corrigiu as provas elas repete o termo e ainda acrescenta um pronome sobrando.",
  },
  {
    d: "media",
    e: "Em qual frase o pronome demonstrativo indica um objeto perto de quem fala?",
    o: ["Este caderno que estou segurando é novo.", "Aquele caderno lá no armário é novo.", "Esse caderno aí na sua mesa é novo.", "Aquele caderno do ano passado era velho.", "Esse caderno que você citou antes é novo."],
    x: "Este, esta e isto indicam o que está perto de quem fala. Em este caderno que estou segurando, o caderno está na mão do falante, e por isso o demonstrativo adequado é este.\n\nEsse e essa indicam o que está perto de quem ouve, como em esse caderno aí na sua mesa, ou o que acabou de ser mencionado. Aquele e aquela indicam o que está longe de quem fala e de quem ouve, no espaço ou no tempo: lá no armário, do ano passado. Só a primeira frase indica proximidade de quem fala.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é um pronome indefinido?",
    o: ["ninguém", "aquele", "nosso", "onde", "comigo"],
    x: "Ninguém se refere a pessoas de modo vago, para negar a existência de qualquer uma delas. É pronome indefinido, como alguém, tudo, nada, algum e nenhum.\n\nAquele é pronome demonstrativo. Nosso é pronome possessivo. Onde é advérbio ou pronome relativo, conforme o uso, e indica lugar. E comigo é a forma que une a preposição com ao pronome mim, o pronome pessoal oblíquo. Só ninguém é indefinido.",
  },
  {
    d: "media",
    e: "Qual reescrita deixa claro de quem é o carro em “Paulo disse a Pedro que seu carro estava quebrado”?",
    o: ["Paulo disse a Pedro: “Seu carro está quebrado”.", "Paulo disse a Pedro que seu carro estava quebrado, ontem.", "Paulo disse a Pedro que o carro dele estava quebrado.", "Paulo disse a Pedro que o carro estava quebrado.", "Paulo disse que o carro estava quebrado a Pedro."],
    x: "Na frase original, seu pode se referir a Paulo ou a Pedro, o que causa ambiguidade. Reescrita no discurso direto, a frase passa a ser Paulo disse a Pedro: “Seu carro está quebrado”, em que seu se refere a Pedro, a pessoa com quem Paulo fala. O sentido fica claro.\n\nAcrescentar ontem não resolve a dúvida. A forma o carro dele também pode se referir a Paulo ou a Pedro. Tirar o possessivo faz desaparecer a informação de quem é o carro. E mudar a posição de a Pedro mantém a dúvida.",
  },
  {
    d: "media",
    e: "Em qual frase o pronome relativo cujo está empregado corretamente?",
    o: ["O menino cujo pai é médico faltou à aula.", "O menino cujo o pai é médico faltou à aula.", "O menino que o pai é médico faltou à aula.", "O menino cujos pai é médico faltou à aula.", "O menino cuja pai é médico faltou à aula."],
    x: "O pronome cujo indica posse, e concorda em gênero e número com o termo que vem depois dele, o possuído: o menino cujo pai é médico, ou seja, o pai do menino. Não leva artigo depois dele.\n\nCujo o pai repete o artigo. Que o pai não exprime a relação de posse. Cujos pai não concorda em número com pai, que está no singular. E cuja pai não concorda em gênero com pai, que é masculino. Só a primeira frase usa cujo de acordo com a regra.",
  },
  {
    d: "media",
    e: "Qual das frases contém um pronome interrogativo?",
    o: ["Qual é o seu nome?", "Eu quero saber seu nome.", "Ele disse seu nome.", "Meu nome é longo.", "Nome é uma palavra."],
    x: "Na frase qual é o seu nome?, a palavra qual inicia uma pergunta e pede uma informação sobre o nome. Os pronomes que iniciam perguntas são os interrogativos: quem, qual, quanto, que.\n\nNas outras frases não há pergunta: eu quero saber seu nome e ele disse seu nome são afirmações, assim como meu nome é longo e nome é uma palavra. As palavras eu, seu e meu são pronomes, mas pessoais ou possessivos, e não interrogativos.",
  },
  {
    d: "media",
    e: "Qual é a classe gramatical das palavras mim e ti?",
    o: ["Pronomes pessoais oblíquos tônicos", "Pronomes pessoais retos", "Pronomes possessivos", "Pronomes demonstrativos", "Pronomes relativos"],
    x: "Mim e ti são pronomes pessoais oblíquos tônicos: são acentuados na pronúncia e vêm depois de preposição, como em para mim, por ti, de mim. Os oblíquos tônicos são mim, ti, si, ele, ela, nós, vós, eles, elas, conosco, convosco.\n\nOs retos são os que funcionam como sujeito: eu, tu, ele. Os possessivos indicam posse. Os demonstrativos indicam posição. E os relativos retomam um termo anterior. Mim e ti não pertencem a esses grupos.",
  },
  {
    d: "media",
    e: "Em qual frase o uso de mim e eu está de acordo com a norma-padrão?",
    o: ["Entre mim e você não há segredos.", "Entre eu e você não há segredos.", "Para mim fazer isso é difícil.", "Para mim ir à festa, preciso de licença.", "Ele trouxe um livro pra mim ler."],
    x: "Depois de preposição, como entre, usa-se mim: entre mim e você. Mas, quando o pronome é o sujeito de um verbo no infinitivo, usa-se eu: para eu fazer, para eu ir, para eu ler.\n\nEntre eu e você usa eu depois de preposição. Para mim fazer e para mim ir usam mim como sujeito do infinitivo. E um livro pra mim ler também usa mim como sujeito do verbo ler. Só a primeira frase respeita a regra.",
  },
  {
    d: "media",
    e: "Em “Ele se machucou no jogo”, qual é a função do pronome se?",
    o: ["Mostrar que a ação volta ao sujeito", "Indicar posse", "Indicar dúvida", "Ligar duas orações", "Indicar tempo passado"],
    x: "Em ele se machucou, o pronome se mostra que a ação de machucar recai sobre o próprio sujeito: ele machucou a si mesmo. Esse pronome é chamado reflexivo, porque a ação volta ao sujeito.\n\nO se não indica posse, que é função do possessivo. Não indica dúvida, que é função de advérbios como talvez. Não liga orações, que é função da conjunção. E o tempo passado é indicado pelo verbo, e não pelo pronome.",
  },
  {
    d: "media",
    e: "Em qual frase o pronome pessoal reto é usado como objeto, o que a norma-padrão não aceita?",
    o: ["Eu vi ela na praça.", "Eu a vi na praça.", "Eu vi-a na praça.", "Ela me viu na praça.", "Nós a vimos na praça."],
    x: "Os pronomes pessoais retos, como eu, tu, ele, ela, funcionam como sujeito. Quando o pronome é objeto do verbo, a norma-padrão pede o oblíquo: eu a vi, ou eu vi-a. Em eu vi ela, o pronome ela está no lugar do oblíquo a, e a norma-padrão não aceita.\n\nEu a vi e eu vi-a usam o oblíquo a, correto. Ela me viu usa ela como sujeito e me como objeto, correto. E nós a vimos também usa o oblíquo a como objeto. Só a primeira frase usa o reto como objeto.",
  },
  {
    d: "media",
    e: "Em qual frase o pronome está adequado ao sentido de falar sobre si mesma?",
    o: ["Ela falou consigo mesma.", "Ela falou comigo mesma.", "Ela falou contigo mesma.", "Ela falou conosco mesma.", "Ela falou convosco mesma."],
    x: "Consigo significa com a própria pessoa de quem se fala, e por isso é a forma adequada quando o sujeito age sobre si: ela falou consigo mesma. Quem fala e quem ouve é a mesma pessoa, a terceira.\n\nComigo se refere a quem fala, contigo se refere a quem ouve, conosco inclui quem fala e outras pessoas, e convosco inclui quem ouve, no plural. Nenhuma dessas formas indica a própria pessoa de quem se fala, e todas destoam de ela e de mesma.",
  },
  {
    d: "media",
    e: "Em qual frase o pronome lhe está bem empregado?",
    o: ["Dei-lhe um presente no aniversário.", "Eu lhe vi no cinema ontem.", "Vi-lhe no cinema ontem.", "Chamei-lhe para a festa.", "Encontrei-lhe na rua."],
    x: "O pronome lhe substitui o complemento introduzido por preposição, em geral a ou para, em verbos como dar, entregar e dizer. Em dei-lhe um presente, o lhe substitui a ele ou a ela: dei um presente a ele. Está bem empregado.\n\nVer, chamar e encontrar não pedem preposição, e por isso o pronome que lhes cabe é o, a, os, as: eu o vi, chamei-o, encontrei-o. As frases com eu lhe vi, vi-lhe, chamei-lhe e encontrei-lhe usam lhe onde cabe o oblíquo direto.",
  },
  {
    d: "media",
    e: "Em qual situação é adequado o tratamento Vossa Excelência?",
    o: ["Ao se dirigir, por escrito, a um ministro de Estado", "Ao conversar com um colega de classe", "Ao escrever para um irmão", "Ao se dirigir ao Papa", "Ao falar com um amigo de infância"],
    x: "Vossa Excelência é o tratamento adequado para ministros, parlamentares, governadores, prefeitos e outras autoridades, em textos e situações formais. Por isso é adequado ao se dirigir a um ministro de Estado.\n\nO colega de classe, o irmão e o amigo de infância são tratados de modo informal, com o nome ou com você. E o Papa recebe Vossa Santidade, tratamento próprio. Cada tratamento corresponde a uma categoria de pessoa e a um grau de formalidade.",
  },
  {
    d: "media",
    e: "Qual reescrita evita a repetição em “Os alunos entregaram os trabalhos dos alunos”?",
    o: ["Os alunos entregaram os seus trabalhos.", "Os alunos entregaram os trabalhos dos alunos.", "Os alunos entregaram os nossos trabalhos.", "Os alunos entregaram os teus trabalhos.", "Os alunos entregaram os meus trabalhos."],
    x: "Na frase original, os alunos aparece duas vezes: como sujeito e como possuidor dos trabalhos. O possessivo seus, de terceira pessoa, substitui o segundo os alunos e indica que os trabalhos pertencem a eles: os alunos entregaram os seus trabalhos.\n\nA frase que repete dos alunos não elimina a repetição. Os nossos trabalhos indicaria que o falante faz parte do grupo. Os teus trabalhos se refere à pessoa com quem se fala. E os meus trabalhos se refere a quem fala. Só os seus trabalhos mantém o sentido.",
  },
  {
    d: "media",
    e: "Em qual frase a concordância entre o pronome e o verbo está correta?",
    o: ["Nós fomos ao cinema ontem.", "Nós foi ao cinema ontem.", "A gente fomos ao cinema ontem.", "Eles foi ao cinema ontem.", "Tu foram ao cinema ontem."],
    x: "O verbo concorda com o sujeito em pessoa e número. O pronome nós está na primeira pessoa do plural, e o verbo ir, no pretérito, fica fomos: nós fomos.\n\nNós foi deixa o verbo no singular. A gente fomos mistura a expressão a gente, que pede o verbo no singular, com a forma do plural. Eles foi deixa o verbo no singular com um sujeito no plural. E tu foram deixa o verbo no plural com um sujeito no singular.",
  },
  {
    d: "media",
    e: "Qual pronome pode substituir “as meninas” em “Vi as meninas na escola”?",
    o: ["as", "lhes", "eles", "nos", "me"],
    x: "O verbo ver é transitivo direto, e as meninas é o objeto direto. O pronome oblíquo que substitui um objeto direto feminino plural é as: vi as meninas, ou as vi, ou ainda vi-as.\n\nLhes substitui um objeto indireto, com preposição. Eles é pronome reto e masculino, e funciona como sujeito. Nos e me se referem a quem fala. Só o pronome as concorda com meninas em gênero e número e funciona como objeto direto.",
  },
  {
    d: "media",
    e: "Qual é o antecedente do pronome relativo que em “A casa que comprei é grande”?",
    o: ["casa", "comprei", "grande", "A", "é"],
    x: "O antecedente é o termo que o pronome relativo retoma. Em a casa que comprei é grande, o pronome que retoma o substantivo casa: eu comprei a casa. Por isso o antecedente é casa.\n\nComprei é o verbo da oração introduzida pelo pronome. Grande é o adjetivo que caracteriza a casa. A é o artigo. E é é o verbo da frase. Nenhuma dessas palavras é retomada pelo pronome que.",
  },
  {
    d: "media",
    e: "Em “Todos os alunos trouxeram seus cadernos”, com qual palavra a palavra seus concorda em gênero e número?",
    o: ["cadernos", "alunos", "todos", "trouxeram", "os"],
    x: "O pronome possessivo concorda em gênero e número com a coisa possuída, e não com o possuidor. Os alunos são os possuidores, mas os cadernos são os possuídos, e por isso seus concorda com cadernos: masculino plural.\n\nO pronome seus se refere aos alunos quanto ao sentido, pois são eles que possuem os cadernos, mas a concordância é com a palavra cadernos. Todos é pronome indefinido e trouxeram é verbo. Os é o artigo de alunos.",
  },
  {
    d: "media",
    e: "Em qual frase há um pronome demonstrativo?",
    o: ["Aquilo me assustou muito.", "Ninguém me assustou.", "Meu irmão me assustou.", "Quem me assustou?", "Alguém me assustou."],
    x: "Em aquilo me assustou muito, a palavra aquilo indica algo distante de quem fala e de quem ouve, sem nomeá-lo. É pronome demonstrativo, como isto, isso, este, esse, aquele.\n\nEm ninguém me assustou e alguém me assustou, os pronomes são indefinidos. Em meu irmão me assustou, meu é possessivo. E em quem me assustou?, quem é interrogativo. Em todas elas, me é pronome pessoal oblíquo, mas o demonstrativo é só o aquilo.",
  },
  {
    d: "media",
    e: "Em qual frase o pronome indefinido concorda com o substantivo?",
    o: ["Algumas pessoas chegaram cedo.", "Algum pessoas chegaram cedo.", "Algumas pessoa chegaram cedo.", "Alguns pessoas chegaram cedo.", "Algum pessoa chegaram cedo."],
    x: "Os pronomes indefinidos variáveis, como algum, nenhum e todo, concordam em gênero e número com o substantivo que acompanham. Pessoas é feminino plural, e por isso o pronome fica algumas: algumas pessoas.\n\nAlgum pessoas usa o masculino singular com um substantivo feminino plural. Algumas pessoa deixa o substantivo no singular. Alguns pessoas usa o masculino plural com um substantivo feminino. E algum pessoa deixa o pronome no masculino com um substantivo feminino.",
  },
  {
    d: "media",
    e: "Qual é a pessoa do discurso indicada pelo pronome vós?",
    o: ["Segunda do plural", "Primeira do singular", "Terceira do singular", "Primeira do plural", "Terceira do plural"],
    x: "Vós designa as pessoas com quem se fala, no plural: a segunda pessoa do plural. É um pronome pessoal reto, pouco usado hoje na fala, mas presente em textos antigos, religiosos e literários.\n\nA primeira do singular é eu. A terceira do singular é ele ou ela. A primeira do plural é nós. E a terceira do plural é eles ou elas. Só vós corresponde à segunda do plural.",
  },
  {
    d: "media",
    e: "Em qual frase o pronome possessivo indica que a posse é de quem fala?",
    o: ["Este livro é meu.", "Este livro é teu.", "Este livro é seu.", "Este livro é dele.", "Este livro é vosso."],
    x: "O pronome possessivo meu corresponde à primeira pessoa do singular, e indica que a posse é de quem fala: este livro é meu. Os possessivos de primeira pessoa são meu, minha, nosso, nossa.\n\nTeu corresponde a quem ouve. Seu corresponde, em geral, a você ou a ele. Dele indica a posse de uma terceira pessoa. E vosso corresponde a vós. Só meu indica que a posse é de quem fala.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre pronome pessoal e pronome possessivo?",
    o: ["O pessoal indica a pessoa do discurso, e o possessivo indica posse", "O pessoal indica posse, e o possessivo, a pessoa do discurso", "Os dois indicam posição", "Os dois indicam quantidade", "Não há diferença entre eles"],
    x: "Os pronomes pessoais indicam as pessoas do discurso, isto é, quem fala, com quem se fala e de quem se fala: eu, tu, ele, nós, vós, eles. Os possessivos indicam posse, ligando algo a uma dessas pessoas: meu, teu, seu, nosso, vosso.\n\nInverter as definições contraria a gramática. Os demonstrativos indicam posição. Os numerais indicam quantidade. E há, sim, diferença entre os dois grupos: um indica a pessoa, e o outro, a posse.",
  },
  {
    d: "media",
    e: "Em “Maria vendeu a bicicleta e comprou outra”, qual palavra é pronome indefinido?",
    o: ["outra", "vendeu", "comprou", "bicicleta", "Maria"],
    x: "A palavra outra se refere a uma bicicleta de modo vago, sem dizer qual. É pronome indefinido, como um, algum, nenhum, todo, vários, outro.\n\nVendeu e comprou são verbos, que indicam as ações de Maria. Bicicleta é um substantivo comum, e Maria, um substantivo próprio. Só outra se refere a um ser de maneira imprecisa, sem dizer qual, e retoma o substantivo bicicleta para evitar que ele se repita no texto.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Ele me contou um segredo, mas não ___ contarei a ninguém”, no sentido de o segredo?",
    o: ["o", "lhe", "ele", "me", "si"],
    x: "O verbo contar, nessa frase, é transitivo direto, e o segredo é o objeto direto. O pronome oblíquo que o substitui é o: não o contarei a ninguém, ou seja, não contarei o segredo.\n\nLhe substitui um objeto indireto, com preposição, e aqui o objeto é direto. Ele é pronome reto, e funciona como sujeito. Me se refere a quem fala, e não ao segredo. E si é pronome reflexivo, que se refere ao sujeito. Só o concorda com segredo e funciona como objeto direto.",
  },
  {
    d: "media",
    e: "Qual pronome completa a frase “___ dos dois livros você prefere?”, para perguntar sobre um deles?",
    o: ["Qual", "Quem", "Quanto", "Onde", "Quando"],
    x: "Para perguntar sobre um dentre dois ou mais seres, usa-se o pronome interrogativo qual: qual dos dois livros você prefere? Ele pede uma escolha dentro de um conjunto conhecido.\n\nQuem pergunta sobre pessoas. Quanto pergunta sobre quantidade. Onde pergunta sobre lugar. E quando pergunta sobre tempo. Nenhum deles serve para escolher um livro dentre dois.",
  },
  {
    d: "media",
    e: "Em qual frase a palavra que é pronome relativo?",
    o: ["O filme que vi ontem é longo.", "Que dia lindo!", "Ele disse que viria.", "Mais do que eu pensava.", "Que horas são?"],
    x: "Em o filme que vi ontem é longo, a palavra que retoma o substantivo filme e liga a segunda oração à primeira: eu vi o filme. É pronome relativo.\n\nEm que dia lindo!, a palavra indica espanto, e é exclamativa. Em ele disse que viria, é conjunção, que introduz uma oração que completa o verbo. Em mais do que eu pensava, aparece a comparação. E em que horas são?, é pronome interrogativo, que inicia uma pergunta.",
  },
  {
    d: "media",
    e: "Qual pronome completa a frase “O menino ___ mochila caiu chegou atrasado”?",
    o: ["cuja", "que", "quem", "onde", "cujo"],
    x: "A frase exprime posse: a mochila do menino. O pronome relativo que indica posse é cujo, e concorda em gênero e número com o termo possuído, que vem depois dele. Como mochila é feminino singular, a forma é cuja: o menino cuja mochila caiu.\n\nQue e quem não indicam posse. Onde indica lugar. E cujo, no masculino, não concorda com mochila, que é feminino. Só cuja indica posse e concorda com o termo seguinte.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em “Ana encontrou Bia no ônibus. Ela estava atrasada para a aula”, o que causa ambiguidade?",
    o: ["O pronome ela pode se referir a Ana ou a Bia", "O verbo encontrou não tem sujeito", "A palavra ônibus tem dois sentidos", "A palavra atrasada é advérbio", "A expressão para a aula não tem verbo"],
    x: "O pronome ela retoma um termo anterior, mas o texto apresenta duas mulheres, Ana e Bia, e qualquer uma delas pode ser a pessoa que estava atrasada. Há duas leituras possíveis, e isso caracteriza a ambiguidade do referente do pronome.\n\nO verbo encontrou tem sujeito, Ana. A palavra ônibus tem um só sentido. Atrasada é adjetivo, e concorda com ela. E a expressão para a aula não precisa de verbo, pois completa o sentido de atrasada.",
  },
  {
    d: "dificil",
    e: "Em qual frase o pronome relativo está empregado corretamente?",
    o: ["Esta é a escola em que estudei.", "Esta é a escola que estudei.", "Esta é a escola de que estudei.", "Esta é a escola a que estudei.", "Esta é a escola com que estudei."],
    x: "O verbo estudar, no sentido de ter aulas em um lugar, pede a preposição em: estudei na escola. Quando o complemento é substituído pelo pronome relativo, a preposição aparece antes dele: a escola em que estudei.\n\nA escola que estudei esquece a preposição. A escola de que estudei, a escola a que estudei e a escola com que estudei trocam a preposição por de, a e com, que o verbo não pede nesse sentido. Só a primeira mantém a preposição exigida.",
  },
  {
    d: "dificil",
    e: "Em “Ela me viu” e “Ela me deu um livro”, qual é a função do pronome me, respectivamente?",
    o: ["Objeto direto e objeto indireto", "Objeto indireto e objeto direto", "Sujeito nas duas", "Objeto direto nas duas", "Objeto indireto nas duas"],
    x: "Em ela me viu, o verbo ver não pede preposição: ela viu a mim. O pronome me é objeto direto. Em ela me deu um livro, o verbo dar pede um complemento com preposição, a quem se dá: ela deu um livro a mim. O pronome me é objeto indireto, e o objeto direto é um livro.\n\nO pronome me é oblíquo e nunca é sujeito. Dizer que é objeto direto nas duas, ou indireto nas duas, ignora a diferença entre ver e dar. E inverter a ordem troca as funções.",
  },
  {
    d: "dificil",
    e: "Em qual frase o pronome cujo está empregado com a concordância correta?",
    o: ["O professor cujas aulas adoro chegou.", "O professor cujo aulas adoro chegou.", "O professor cujos aulas adoro chegou.", "O professor cuja aulas adoro chegou.", "O professor que as aulas adoro chegou."],
    x: "O pronome cujo concorda com o termo possuído, que vem depois dele. Aulas é feminino plural, e por isso o pronome fica cujas: o professor cujas aulas adoro, isto é, as aulas do professor.\n\nCujo aulas usa o masculino singular. Cujos aulas usa o masculino plural. Cuja aulas usa o feminino singular. E que as aulas deixa de indicar posse e repete o artigo. Só cujas concorda com aulas em gênero e número.",
  },
  {
    d: "dificil",
    e: "Em “Entreguei o livro à bibliotecária”, qual pronome pode substituir à bibliotecária?",
    o: ["lhe", "a", "ela", "se", "me"],
    x: "O verbo entregar pede um complemento sem preposição, o livro, e outro com preposição, à bibliotecária. O pronome oblíquo que substitui o complemento com preposição, o objeto indireto, é lhe: entreguei-lhe o livro.\n\nO pronome a substitui um objeto direto, sem preposição. Ela é pronome reto e funciona como sujeito. Se é pronome reflexivo. E me se refere a quem fala, e não à bibliotecária. Só lhe substitui um objeto indireto de terceira pessoa.",
  },
  {
    d: "dificil",
    e: "Em qual frase há erro no uso do pronome de tratamento?",
    o: ["Vossa Excelência estás cansado.", "Vossa Excelência está cansado.", "Você está cansado.", "O senhor está cansado.", "A senhora está cansada."],
    x: "Os pronomes de tratamento, como Vossa Excelência, levam o verbo à terceira pessoa, embora se refiram à pessoa com quem se fala: Vossa Excelência está. A forma estás é de segunda pessoa do singular, própria do pronome tu, e não concorda com Vossa Excelência.\n\nVossa Excelência está cansado concorda com o pronome e com o sexo da pessoa tratada. Você está, o senhor está e a senhora está também levam o verbo à terceira pessoa. Só a primeira frase mistura a terceira pessoa do pronome com a segunda do verbo.",
  },
  {
    d: "dificil",
    e: "Em qual frase o pronome si está empregado corretamente?",
    o: ["Ela só pensa em si mesma.", "Ela só pensa em mim mesma.", "Ela só pensa em ti mesma.", "Ela só pensa em nós mesma.", "Ela só pensa em vós mesma."],
    x: "O pronome si é reflexivo e se refere ao sujeito da oração, quando é de terceira pessoa. Em ela só pensa em si mesma, a pessoa que pensa e a pessoa em quem pensa são a mesma, e o pronome si indica isso.\n\nMim, ti, nós e vós se referem a outras pessoas do discurso e não concordam com o sujeito ela, de terceira pessoa. Além disso, a palavra mesma, no feminino singular, concorda com o sujeito ela, e não com esses pronomes.",
  },
  {
    d: "dificil",
    e: "No texto “Os alunos fizeram a prova. Eles a entregaram cedo”, a que se referem, respectivamente, os pronomes eles e a?",
    o: ["Aos alunos e à prova", "À prova e aos alunos", "Aos alunos e aos alunos", "À prova e à prova", "A ninguém"],
    x: "O pronome eles está no plural e retoma os alunos, o sujeito da primeira frase: eles entregaram. O pronome a está no feminino singular e retoma a prova, o objeto: entregaram a prova. Os dois pronomes ligam a segunda frase à primeira.\n\nInverter as retomadas contraria o gênero e o número. Dizer que os dois retomam os alunos, ou que os dois retomam a prova, ignora a diferença entre eles e a. E ambos retomam termos citados, e não ninguém.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre os pronomes está correta?",
    o: ["Substituem ou acompanham o substantivo e se dividem em seis tipos", "Indicam apenas ações e estados do sujeito", "Servem só para ligar duas orações coordenadas", "Modificam sempre os verbos e os advérbios", "São palavras invariáveis que indicam intensidade"],
    x: "Os pronomes substituem o substantivo, como em ela chegou, ou o acompanham, como em este livro. Dividem-se em pessoais, possessivos, demonstrativos, indefinidos, interrogativos e relativos, e a maioria varia em gênero e número.\n\nIndicar ações e estados é função do verbo. Ligar orações coordenadas é função da conjunção. Modificar verbos e advérbios é função do advérbio. E as palavras invariáveis que indicam intensidade são advérbios, como muito. Só a primeira afirmação descreve os pronomes.",
  },
  {
    d: "dificil",
    e: "Em qual frase há desvio no uso dos pronomes, de acordo com a norma-padrão?",
    o: ["Entre eu e ela não há segredos.", "Entre mim e ela não há segredos.", "Ela me entregou o livro.", "Eu a vi na escola.", "Para eu ler, preciso de silêncio."],
    x: "Depois da preposição entre, usa-se o pronome oblíquo tônico: entre mim e ela. A frase entre eu e ela usa o pronome reto eu depois de preposição, o que contraria a norma-padrão.\n\nAs demais estão corretas. Ela me entregou o livro usa o oblíquo me como objeto indireto. Eu a vi na escola usa o oblíquo a como objeto direto. E para eu ler usa eu como sujeito do infinitivo ler, que é a exceção à regra de mim depois de preposição.",
  },
];
