/* Rascunho — Português · 6º ao 9º / Pontuação.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), autorais, em
   linguagem e situações de escola do ensino fundamental II. Gramática não se
   confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram regras assentadas: ponto final, de interrogação e
   de exclamação, reticências, dois-pontos, ponto e vírgula, travessão no
   diálogo, aspas, parênteses e as vírgulas de enumeração, de vocativo, de
   aposto, de data e lugar, de endereço, de adjunto adverbial e de oração
   adverbial anteposta, de expressão intercalada, de conjunção adversativa
   deslocada, de oração adjetiva explicativa e de elipse do verbo, além das
   vírgulas que não se usam (entre sujeito e verbo, entre verbo e complemento,
   antes do que integrante e antes do e final de uma enumeração). Ficaram de
   fora, de propósito, os usos em que as gramáticas divergem, como a vírgula
   antes de e com sujeitos diferentes, a vírgula depois de oração adverbial
   curta e a pontuação de itens de listas verticais. */

export const materia = "portugues-fund";
export const tema = "Pontuação";
export const arquivo = "portugues-fund__pontuacao";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual sinal de pontuação se usa no final de uma pergunta direta?",
    o: ["Ponto de interrogação", "Ponto de exclamação", "Reticências", "Dois-pontos", "Ponto e vírgula"],
    x: "A pergunta direta termina com o ponto de interrogação, que mostra que a frase pede uma resposta: onde fica a biblioteca? O sinal também marca a entonação ascendente da voz ao fazer a pergunta.\n\nO ponto de exclamação indica emoção, como surpresa. As reticências indicam suspensão ou hesitação. Os dois-pontos anunciam uma enumeração, uma explicação ou uma fala. E o ponto e vírgula separa partes da frase. Só o ponto de interrogação encerra uma pergunta direta.",
  },
  {
    d: "facil",
    e: "Qual sinal de pontuação se usa no final de uma frase que expressa surpresa ou alegria?",
    o: ["Ponto de exclamação", "Ponto de interrogação", "Ponto final", "Dois-pontos", "Ponto e vírgula"],
    x: "O ponto de exclamação encerra frases que expressam emoção, como surpresa, alegria, susto ou admiração: que susto! Nas interjeições, também aparece, como em ah! e oba!\n\nO ponto de interrogação encerra perguntas. O ponto final encerra frases afirmativas. Os dois-pontos anunciam uma enumeração, uma explicação ou uma fala. E o ponto e vírgula separa partes de uma frase. Só o ponto de exclamação marca a emoção.",
  },
  {
    d: "facil",
    e: "Qual sinal de pontuação encerra uma frase afirmativa que termina de forma completa?",
    o: ["Ponto final", "Ponto de interrogação", "Ponto de exclamação", "Reticências", "Ponto e vírgula"],
    x: "O ponto final encerra a frase afirmativa, quando a ideia está completa: o aluno chegou cedo. Depois dele, a frase seguinte começa com letra maiúscula.\n\nO ponto de interrogação encerra perguntas. O ponto de exclamação encerra frases de emoção. As reticências indicam que a frase ficou em suspenso. E o ponto e vírgula indica uma pausa no meio da frase, e não o seu fim. Só o ponto final encerra a frase afirmativa completa.",
  },
  {
    d: "facil",
    e: "Qual das frases abaixo está pontuada corretamente?",
    o: ["Comprei pão, leite, queijo e ovos.", "Comprei, pão leite queijo e ovos.", "Comprei pão leite, queijo, e ovos.", "Comprei pão, leite queijo e ovos.", "Comprei pão, leite, queijo, e ovos."],
    x: "Numa enumeração, os elementos são separados por vírgulas, e o último é ligado ao anterior pela conjunção e, sem vírgula antes dela: pão, leite, queijo e ovos. Também não se usa vírgula entre o verbo e o complemento.\n\nA frase com vírgula depois de comprei separa o verbo do complemento. A frase sem vírgula entre leite e queijo deixa a enumeração incompleta. E as frases com vírgula antes do e final, ou sem vírgula entre pão e leite, quebram a regra. Só a primeira frase está pontuada corretamente.",
  },
  {
    d: "facil",
    e: "Para que serve a vírgula em “Maria, venha cá!”?",
    o: ["Separar o vocativo", "Separar o sujeito do verbo", "Separar o verbo do complemento", "Separar duas perguntas", "Marcar o fim da frase"],
    x: "Maria é o vocativo, o termo usado para chamar ou interpelar alguém. O vocativo sempre se separa do resto da frase por vírgula: Maria, venha cá. No meio da frase, vem entre duas vírgulas.\n\nO sujeito de venha está oculto, e a vírgula não o separa do verbo. Não há complemento separado do verbo. Não há perguntas na frase. E o fim da frase é marcado pelo ponto de exclamação. Só a primeira função descreve a vírgula.",
  },
  {
    d: "facil",
    e: "Qual sinal de pontuação marca o início da fala de um personagem em um diálogo?",
    o: ["Travessão", "Ponto e vírgula", "Dois-pontos", "Reticências", "Ponto de interrogação"],
    x: "Nos diálogos, o travessão indica a fala de cada personagem e a mudança de interlocutor: — Você vem à festa? — perguntou Ana. Ele aparece no início da fala e também antes da indicação de quem fala.\n\nO ponto e vírgula separa partes de uma frase. Os dois-pontos anunciam uma fala, mas não a marcam. As reticências indicam suspensão. E o ponto de interrogação encerra perguntas. Só o travessão marca o início da fala.",
  },
  {
    d: "facil",
    e: "Qual sinal de pontuação indica que a frase foi interrompida ou que o falante hesitou?",
    o: ["Reticências", "Ponto final", "Ponto de interrogação", "Dois-pontos", "Aspas"],
    x: "As reticências, formadas por três pontos, indicam suspensão do pensamento, hesitação ou interrupção: eu queria dizer... mas não sei como. Também criam suspense ou deixam a frase em aberto.\n\nO ponto final encerra a frase. O ponto de interrogação encerra perguntas. Os dois-pontos anunciam uma explicação ou uma fala. E as aspas marcam citações. Só as reticências indicam hesitação ou interrupção.",
  },
  {
    d: "facil",
    e: "Em “Comprei três frutas: maçã, pera e uva”, para que servem os dois-pontos?",
    o: ["Introduzir uma enumeração", "Marcar uma pergunta", "Indicar surpresa", "Encerrar a frase", "Separar o vocativo"],
    x: "Os dois-pontos anunciam o que vem a seguir. Na frase, depois de três frutas, eles introduzem a lista dos itens: maçã, pera e uva. É um dos usos mais comuns, junto com a introdução de uma fala e de uma explicação.\n\nA pergunta é marcada pelo ponto de interrogação. A surpresa, pelo ponto de exclamação. O fim da frase, pelo ponto final. E o vocativo, pela vírgula. Só a introdução de uma enumeração descreve a função dos dois-pontos na frase.",
  },
  {
    d: "facil",
    e: "Qual sinal de pontuação se usa para destacar a fala de alguém citada dentro de um texto?",
    o: ["Aspas", "Ponto e vírgula", "Reticências", "Ponto de interrogação", "Parênteses"],
    x: "As aspas isolam uma citação, ou seja, as palavras de outra pessoa reproduzidas no texto: a professora disse: “Hoje teremos prova.” Também marcam palavras estrangeiras e ironias.\n\nO ponto e vírgula separa partes de uma frase. As reticências indicam suspensão. O ponto de interrogação encerra perguntas. E os parênteses isolam uma informação acessória. Só as aspas destacam a fala citada.",
  },
  {
    d: "facil",
    e: "Qual par de sinais é usado para isolar uma explicação acessória no meio da frase?",
    o: ["Parênteses", "Ponto final", "Ponto de exclamação", "Ponto de interrogação", "Reticências"],
    x: "Os parênteses isolam uma explicação, um comentário ou uma informação que não é essencial: o Brasil (país da América do Sul) tem cinco regiões. Se o trecho entre parênteses for retirado, a frase continua fazendo sentido.\n\nO ponto final, o ponto de exclamação e o ponto de interrogação encerram frases. E as reticências indicam suspensão. Nenhum deles forma um par que isole uma explicação. Só os parênteses cumprem essa função.",
  },
  {
    d: "facil",
    e: "Qual destas frases, ainda sem pontuação final, deve terminar com ponto de interrogação?",
    o: ["Onde fica a biblioteca", "A biblioteca fica perto", "Que bela biblioteca", "Eu fechei a biblioteca", "Visitamos a biblioteca"],
    x: "Onde fica a biblioteca é uma pergunta direta: o falante quer saber o lugar. Por isso a frase termina com ponto de interrogação.\n\nA biblioteca fica perto, eu fechei a biblioteca e visitamos a biblioteca são afirmações, e terminam com ponto final. Que bela biblioteca expressa admiração, e termina com ponto de exclamação. Só a primeira frase é uma pergunta.",
  },
  {
    d: "facil",
    e: "Depois de um ponto final, com que tipo de letra deve começar a frase seguinte?",
    o: ["Letra maiúscula", "Letra minúscula", "Sempre com número", "Sempre com sinal", "Com qualquer tipo de letra"],
    x: "Depois do ponto final, do ponto de interrogação e do ponto de exclamação, a frase seguinte começa com letra maiúscula. É o que marca visualmente o começo de uma nova frase: a aula começou. Os alunos entraram na sala.\n\nA letra minúscula só aparece no meio da frase, depois de vírgula, ponto e vírgula ou dois-pontos. A frase não começa com número ou sinal, e a letra não pode ser qualquer uma. Só a letra maiúscula marca o início da frase seguinte.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Qual data, no cabeçalho de uma carta, está pontuada corretamente?",
    o: ["Recife, 10 de março de 2025.", "Recife 10, de março de 2025.", "Recife, 10, de março, de 2025.", "Recife 10 de, março de 2025.", "Recife, 10 de março, de 2025."],
    x: "No cabeçalho de uma carta, a vírgula separa o nome do lugar da data: Recife, 10 de março de 2025. Dentro da data, não há vírgula entre o dia, o mês e o ano, que são ligados pela preposição de. O ponto final encerra o cabeçalho.\n\nAs demais frases colocam vírgulas dentro da data ou fora do lugar, ou esquecem a vírgula depois de Recife. Só a primeira data usa a vírgula no ponto correto.",
  },
  {
    d: "media",
    e: "Em “Machado de Assis, grande escritor brasileiro, nasceu no Rio de Janeiro”, as vírgulas isolam o quê?",
    o: ["Um aposto explicativo", "Um vocativo", "O sujeito da oração", "Uma oração subordinada", "Um adjunto adverbial"],
    x: "O trecho grande escritor brasileiro explica quem é Machado de Assis: é um aposto explicativo. O aposto explicativo vem sempre isolado por vírgulas, e a frase continua fazendo sentido sem ele.\n\nO vocativo serviria para chamar alguém, o que não ocorre. O sujeito da oração é Machado de Assis, e não vem entre vírgulas. Não há oração subordinada entre as vírgulas. E o trecho não indica circunstância de tempo ou lugar, como faria um adjunto adverbial. Só o aposto explicativo descreve o trecho.",
  },
  {
    d: "media",
    e: "Qual frase convida as crianças a comer, e não indica comer as crianças?",
    o: ["Vamos comer, crianças!", "Vamos comer crianças!", "Vamos, comer crianças!", "Vamos comer crianças?", "Vamos comer; crianças!"],
    x: "Em vamos comer, crianças!, a vírgula separa o vocativo, crianças, o termo usado para chamar ou convidar alguém. O sentido é: vamos comer, e quem é chamado são as crianças.\n\nSem a vírgula, vamos comer crianças! indica que as crianças seriam o alimento. Na frase com vírgula depois de vamos, o sentido muda. Com ponto de interrogação, vira pergunta. E com ponto e vírgula antes de crianças, a pausa é inadequada. Só a primeira frase convida as crianças a comer.",
  },
  {
    d: "media",
    e: "Entre as frases abaixo, qual delas proíbe alguém de esperar?",
    o: ["Não espere.", "Não, espere.", "Espere, não.", "Espere!", "Sim, espere."],
    x: "Em não espere, o não acompanha o verbo e forma uma ordem negativa: a pessoa não deve esperar. Sem vírgula, a frase proíbe a espera.\n\nEm não, espere, a vírgula separa o não, resposta a uma pergunta ou recusa, do verbo, que passa a ser uma ordem positiva: espere. Em espere, não, a ordem é positiva, seguida de uma negação. Espere! e sim, espere também mandam esperar. Só a primeira frase proíbe a espera.",
  },
  {
    d: "media",
    e: "Em qual frase a vírgula separa bem a oração iniciada por quando?",
    o: ["Quando o sol nasceu, os pássaros começaram a cantar.", "Quando o sol nasceu os pássaros, começaram a cantar.", "Quando, o sol nasceu os pássaros começaram a cantar.", "Quando o sol nasceu os pássaros começaram, a cantar.", "Quando o sol, nasceu os pássaros começaram a cantar."],
    x: "A oração iniciada por quando, colocada antes da oração principal, é separada dela por vírgula: quando o sol nasceu, os pássaros começaram a cantar. A vírgula marca o limite entre as duas orações.\n\nAs demais frases colocam a vírgula no meio de uma oração: entre o sujeito e o verbo, entre a conjunção e o resto da oração, ou entre o verbo e seu complemento. Esses usos são incorretos. Só a primeira frase coloca a vírgula entre as duas orações.",
  },
  {
    d: "media",
    e: "Qual das frases abaixo tem uma vírgula usada de forma incorreta?",
    o: ["Os alunos da turma B, venceram o campeonato.", "Ana, venha cá.", "Comprei pão, leite e ovos.", "Quando chegou, ele sorriu.", "Recife, 10 de março de 2025."],
    x: "Em os alunos da turma B, venceram o campeonato, a vírgula separa o sujeito do verbo. Esse uso é incorreto: o sujeito não se separa do verbo por vírgula.\n\nEm Ana, venha cá, a vírgula separa o vocativo. Em comprei pão, leite e ovos, separa os itens da enumeração. Em quando chegou, ele sorriu, separa a oração adverbial anteposta. E em Recife, 10 de março de 2025, separa o lugar da data. Só a primeira frase tem vírgula incorreta.",
  },
  {
    d: "media",
    e: "Em qual frase a vírgula antes da conjunção mas está bem empregada?",
    o: ["Estudei muito, mas não passei na prova.", "Estudei muito mas, não passei na prova.", "Estudei, muito mas não passei na prova.", "Estudei muito mas não, passei na prova.", "Estudei muito, mas, não passei na prova."],
    x: "A conjunção mas liga duas ideias que se opõem, e a vírgula vem antes dela: estudei muito, mas não passei na prova. Depois da conjunção, não há vírgula, pois o que vem em seguida continua a oração.\n\nAs demais frases colocam a vírgula depois do mas, no meio da primeira oração, ou antes e depois da conjunção ao mesmo tempo. Esses usos separam termos que não se separam. Só a primeira frase coloca a vírgula no ponto correto.",
  },
  {
    d: "media",
    e: "Qual frase usa corretamente os dois-pontos para introduzir uma enumeração?",
    o: ["Trouxe três itens: lápis, caneta e borracha.", "Trouxe: três itens lápis, caneta e borracha.", "Trouxe três: itens lápis, caneta e borracha.", "Trouxe três itens lápis: caneta e borracha.", "Trouxe três itens lápis, caneta: e borracha."],
    x: "Os dois-pontos vêm depois de uma frase completa que anuncia a lista: trouxe três itens: lápis, caneta e borracha. A lista vem logo depois, separada por vírgulas, e a conjunção e liga os dois últimos itens.\n\nAs demais frases colocam os dois-pontos no meio de uma expressão, entre o verbo e o complemento ou dentro da própria lista. Esses usos cortam a frase onde ela não pode ser cortada. Só a primeira frase usa os dois-pontos depois do anúncio da enumeração.",
  },
  {
    d: "media",
    e: "Para que serve o ponto e vírgula em “Na feira comprei maçãs, peras e uvas; na padaria, pães e bolos”?",
    o: ["Separar partes da frase que já têm vírgulas", "Indicar uma pergunta", "Encerrar um parágrafo", "Marcar a fala de um personagem", "Indicar surpresa"],
    x: "A frase tem duas partes: o que foi comprado na feira e o que foi comprado na padaria. Como cada parte já tem vírgulas no meio, o ponto e vírgula marca a separação maior entre elas, evitando confusão. É um dos usos do ponto e vírgula.\n\nUma pergunta é marcada pelo ponto de interrogação. O fim de um parágrafo é marcado pelo ponto final e pela mudança de linha. A fala de um personagem é marcada pelo travessão. E a surpresa é marcada pelo ponto de exclamação. Só a primeira função descreve o ponto e vírgula.",
  },
  {
    d: "media",
    e: "Na frase O professor disse: “A prova será na sexta-feira.”, para que servem as aspas?",
    o: ["Indicar a fala citada", "Separar o vocativo", "Enumerar itens", "Indicar uma pergunta", "Encerrar a frase"],
    x: "As aspas isolam as palavras exatas que o professor disse, que são reproduzidas no texto: a prova será na sexta-feira. É a citação da fala, anunciada pelos dois-pontos.\n\nO vocativo é separado por vírgulas. A enumeração é feita com vírgulas e com a conjunção e. A pergunta é marcada pelo ponto de interrogação. E o fim da frase é marcado pelo ponto final. Só a primeira função descreve as aspas.",
  },
  {
    d: "media",
    e: "Em “Eu queria dizer... mas não sei como”, o que as reticências indicam?",
    o: ["Hesitação do falante", "Uma pergunta", "Uma enumeração", "Uma citação", "O fim definitivo da frase"],
    x: "As reticências mostram que o falante hesitou antes de continuar: queria dizer algo e parou, procurando as palavras. É um dos usos das reticências, junto com a suspensão do pensamento e com o suspense.\n\nA pergunta é marcada pelo ponto de interrogação. A enumeração, pelas vírgulas. A citação, pelas aspas. E o fim definitivo da frase, pelo ponto final. Só a hesitação do falante é indicada pelas reticências.",
  },
  {
    d: "media",
    e: "Qual trecho de diálogo está pontuado corretamente?",
    o: ["— Você vem à festa? — perguntou Ana.", "— Você vem à festa? perguntou Ana.", "Você vem à festa? — perguntou — Ana.", "— Você vem à festa — perguntou? Ana.", "— Você vem à festa perguntou Ana?"],
    x: "No diálogo, o travessão abre a fala e aparece de novo antes da indicação de quem fala: — Você vem à festa? — perguntou Ana. O ponto de interrogação fica no fim da pergunta, e a explicação de quem falou vem depois, em letra minúscula.\n\nAs demais versões esquecem um dos travessões, colocam o travessão no lugar errado ou movem o ponto de interrogação para depois do verbo. Só a primeira versão segue a pontuação do diálogo.",
  },
  {
    d: "media",
    e: "Qual frase pontua corretamente uma interjeição?",
    o: ["Ah, que pena!", "Ah que, pena!", "Ah que pena, !", "Ah. que pena", "Ah; que pena."],
    x: "A interjeição, como ah, é separada do resto da frase por vírgula: ah, que pena! O ponto de exclamação no fim marca a emoção da frase inteira.\n\nAh que, pena! coloca a vírgula entre palavras que não se separam. Ah que pena, ! coloca a vírgula antes do sinal de exclamação, onde não é cabível. Ah. que pena usa o ponto final no meio da frase e deixa a letra seguinte minúscula. E ah; que pena usa o ponto e vírgula, que não cabe depois da interjeição. Só a primeira frase pontua corretamente.",
  },
  {
    d: "media",
    e: "Em qual das frases abaixo a vírgula separa indevidamente o verbo do complemento?",
    o: ["Comprei, uma bicicleta nova.", "Comprei uma bicicleta nova.", "Ana, comprei uma bicicleta nova.", "Ontem, comprei uma bicicleta nova.", "Comprei uma bicicleta nova, ontem."],
    x: "Em comprei, uma bicicleta nova, a vírgula separa o verbo comprei do seu complemento, uma bicicleta nova. Esse uso é incorreto, pois o verbo e o complemento não se separam por vírgula.\n\nEm Ana, comprei uma bicicleta nova, a vírgula separa o vocativo. Em ontem, comprei uma bicicleta nova, separa o adjunto adverbial deslocado. Em comprei uma bicicleta nova, ontem, separa o adjunto deslocado para o fim. E a frase sem vírgula está correta. Só a primeira frase separa o verbo do complemento.",
  },
  {
    d: "media",
    e: "Em qual frase o vocativo professor está bem separado por vírgula?",
    o: ["Obrigado pela ajuda, professor.", "Obrigado, pela ajuda professor.", "Obrigado pela, ajuda professor.", "Obrigado pela ajuda professor,.", "Obrigado pela ajuda professor."],
    x: "O vocativo, professor, que dirige a fala a alguém, vem separado por vírgula do resto da frase: obrigado pela ajuda, professor. No fim da frase, uma vírgula antes dele é suficiente, e o ponto final fecha a frase.\n\nAs demais frases colocam a vírgula em lugar inadequado, no meio de uma expressão, ou esquecem de separar o vocativo. Uma delas ainda coloca a vírgula antes do ponto final, o que não se faz. Só a primeira frase está corretamente pontuada.",
  },
  {
    d: "media",
    e: "Qual frase pontua corretamente uma sequência de qualidades?",
    o: ["A casa era grande, clara e arejada.", "A casa era, grande clara e arejada.", "A casa era grande clara, e arejada.", "A casa era grande, clara, e arejada.", "A casa era grande clara e, arejada."],
    x: "Numa sequência de qualidades, usa-se vírgula entre as primeiras e conjunção e antes da última, sem vírgula antes do e: grande, clara e arejada. Também não se separa o verbo era dos adjetivos que o complementam.\n\nAs demais frases colocam a vírgula entre o verbo e os adjetivos, esquecem a vírgula entre grande e clara, colocam vírgula antes do e final ou depois dele. Esses usos quebram a regra da enumeração. Só a primeira frase está corretamente pontuada.",
  },
  {
    d: "media",
    e: "O que o ponto de exclamação indica em “Que susto!”?",
    o: ["Emoção, como espanto", "Uma pergunta", "Uma enumeração", "A fala de um personagem", "Uma informação acessória"],
    x: "O ponto de exclamação mostra a emoção do falante diante do fato, aqui o espanto. Em que susto!, o sinal reforça a intensidade do que se sente.\n\nA pergunta seria marcada pelo ponto de interrogação. A enumeração seria feita com vírgulas. A fala de um personagem seria marcada pelo travessão ou pelas aspas. E uma informação acessória seria isolada por parênteses. Só a primeira função descreve o ponto de exclamação nessa frase.",
  },
  {
    d: "media",
    e: "Em “Chegou, viu e venceu”, o que as vírgulas separam?",
    o: ["Ações que se sucedem", "O sujeito do verbo", "Um vocativo", "Um aposto", "Duas perguntas"],
    x: "A frase enumera três ações do mesmo sujeito: chegou, viu e venceu. As vírgulas separam as ações que se sucedem, e a conjunção e liga as duas últimas, sem vírgula antes dela.\n\nO sujeito está oculto e não aparece entre vírgulas. Não há vocativo nem aposto na frase. E não há perguntas. Só a ideia de ações em sequência descreve o que as vírgulas separam.",
  },
  {
    d: "media",
    e: "Em “O Brasil (país da América do Sul) tem cinco regiões”, o que os parênteses isolam?",
    o: ["Uma informação acessória", "O sujeito", "Uma pergunta", "A fala de um personagem", "O verbo"],
    x: "O trecho país da América do Sul acrescenta uma explicação que não é essencial: se for retirado, a frase continua fazendo sentido, o Brasil tem cinco regiões. Os parênteses isolam esse tipo de informação acessória.\n\nO sujeito é o Brasil, e não vem entre parênteses. Não há pergunta na frase. A fala de um personagem seria marcada pelo travessão ou pelas aspas. E o verbo tem está fora dos parênteses. Só a informação acessória está isolada.",
  },
  {
    d: "media",
    e: "Qual frase informa que, segundo o professor, o aluno é chato?",
    o: ["O professor disse: o aluno é chato.", "O professor, disse o aluno, é chato.", "O professor disse o aluno é chato.", "O professor disse; o aluno, é chato.", "O professor, disse, o aluno é chato."],
    x: "Em o professor disse: o aluno é chato, os dois-pontos anunciam o que o professor falou. Quem fala é o professor, e quem é chato é o aluno.\n\nEm o professor, disse o aluno, é chato, as vírgulas isolam a expressão disse o aluno, e quem fala é o aluno, e o chato é o professor. As demais frases usam vírgulas ou ponto e vírgula em lugares inadequados, sem deixar claro quem fala. Só a primeira frase atribui a fala ao professor.",
  },
  {
    d: "media",
    e: "Qual das frases abaixo termina com ponto final, e não com ponto de interrogação?",
    o: ["Perguntei se ele vinha à festa.", "Onde ele mora?", "Quem chegou primeiro?", "Você viu o filme?", "Como se chama o professor?"],
    x: "Em perguntei se ele vinha à festa, a pergunta é indireta: o falante conta que perguntou, mas não faz a pergunta. A frase é uma afirmação sobre uma pergunta, e termina com ponto final.\n\nNas demais frases, a pergunta é direta: onde ele mora?, quem chegou primeiro?, você viu o filme?, como se chama o professor? Em todas elas o falante faz a pergunta, e o ponto de interrogação encerra a frase. Só a primeira frase termina com ponto final.",
  },
  {
    d: "media",
    e: "Por que a palavra notebook aparece entre aspas na frase: Comprei um “notebook” novo para estudar?",
    o: ["Por ser uma palavra estrangeira", "Por ser uma pergunta", "Por ser um vocativo", "Por ser o sujeito da frase", "Por ser o fim da frase"],
    x: "As aspas destacam as palavras estrangeiras que ainda não foram incorporadas ao português, e notebook é uma delas. Também se pode usar o itálico.\n\nUma pergunta seria marcada pelo ponto de interrogação. O vocativo seria separado por vírgulas. O sujeito da frase está oculto, e é eu. E o fim da frase é marcado pelo ponto final. Só a primeira explicação justifica as aspas.",
  },
  {
    d: "media",
    e: "Em qual frase NÃO se usa vírgula antes da oração iniciada por quando?",
    o: ["Ele sorriu quando chegou.", "Quando chegou, ele sorriu.", "Quando o sol nasce, as aves cantam.", "Quando eu era criança, morava no campo.", "Quando chove, o rio sobe."],
    x: "Quando a oração iniciada por quando vem depois da oração principal, em geral não se usa vírgula: ele sorriu quando chegou. Quando ela vem antes, é separada da principal por vírgula: quando chegou, ele sorriu.\n\nNas demais frases, a oração com quando está no início, e por isso vem seguida de vírgula: quando chegou, quando o sol nasce, quando eu era criança, quando chove. Só a primeira frase tem a oração depois da principal, sem vírgula.",
  },
  {
    d: "media",
    e: "Em qual frase a vírgula separa corretamente um adjunto adverbial deslocado?",
    o: ["Na manhã de ontem, choveu muito.", "Na manhã, de ontem choveu muito.", "Na manhã de, ontem choveu muito.", "Na, manhã de ontem choveu muito.", "Na manhã de ontem choveu, muito."],
    x: "O trecho na manhã de ontem indica o tempo da ação e está no início da frase. Quando o adjunto adverbial vem deslocado para o começo, é separado do resto por vírgula: na manhã de ontem, choveu muito.\n\nAs demais frases colocam a vírgula no meio do adjunto adverbial ou entre o verbo e seu complemento: na manhã, de ontem; na manhã de, ontem; na, manhã; choveu, muito. Esses usos cortam o termo onde ele não pode ser cortado. Só a primeira frase coloca a vírgula depois do adjunto.",
  },
  {
    d: "media",
    e: "Em qual frase o vocativo e a expressão por favor estão bem pontuados?",
    o: ["Pedro, feche a porta, por favor.", "Pedro feche a porta por, favor.", "Pedro, feche, a porta por favor.", "Pedro feche, a porta, por favor.", "Pedro, feche a porta por favor,"],
    x: "O vocativo, Pedro, é separado por vírgula do resto da frase. A expressão por favor, que fecha a ordem, também é separada por vírgula: Pedro, feche a porta, por favor.\n\nAs demais frases deixam de separar o vocativo, colocam a vírgula entre o verbo feche e seu complemento, ou entre as palavras da expressão por favor, ou terminam em vírgula, sem ponto final. Só a primeira frase usa as vírgulas nos lugares adequados.",
  },
  {
    d: "media",
    e: "Por que não se usa vírgula antes do que em “Ele disse que viria”?",
    o: ["A oração com que completa o sentido do verbo", "O que é sempre seguido de ponto", "A vírgula só se usa antes de verbos", "A frase é uma pergunta", "O que é um vocativo"],
    x: "A oração que viria completa o sentido do verbo disse: o que ele disse? Que viria. Quando uma oração completa o sentido de um verbo, ela não se separa dele por vírgula. Por isso não há vírgula antes do que nessa frase.\n\nO que não é seguido de ponto. A vírgula não se limita a verbos. A frase não é uma pergunta, e termina com ponto final. E o que não é vocativo, pois o vocativo serve para chamar alguém. Só a primeira explicação está correta.",
  },
  {
    d: "media",
    e: "Em qual frase os dois-pontos introduzem uma explicação?",
    o: ["Ele estava feliz: tinha passado de ano.", "Ele: estava feliz tinha passado de ano.", "Ele estava: feliz tinha passado de ano.", "Ele estava feliz tinha: passado de ano.", "Ele estava feliz tinha passado: de ano."],
    x: "Na primeira frase, depois de ele estava feliz, os dois-pontos introduzem o motivo da felicidade: tinha passado de ano. Os dois-pontos antes de uma explicação ou de uma justificativa vêm depois de uma frase que já faz sentido sozinha.\n\nAs demais frases colocam os dois-pontos no meio da expressão, entre o sujeito e o verbo, entre o verbo e o complemento, ou antes de uma preposição. Esses usos cortam a frase onde ela não pode ser cortada. Só a primeira frase usa os dois-pontos antes de uma explicação.",
  },
  {
    d: "media",
    e: "Na frase Que ideia “brilhante” sair sem guarda-chuva debaixo dessa chuva!, o que as aspas em brilhante indicam?",
    o: ["Ironia, um sentido contrário ao literal", "A citação de outra pessoa", "O título de um livro", "Uma pergunta", "Uma enumeração"],
    x: "A ideia de sair sem guarda-chuva debaixo da chuva não é brilhante, e o falante usa a palavra com o sentido contrário ao literal. As aspas indicam essa ironia: o leitor entende que a ideia foi ruim.\n\nA citação de outra pessoa seria acompanhada de um verbo como disse. O título de um livro viria como nome da obra. A pergunta seria marcada pelo ponto de interrogação. E a enumeração seria feita com vírgulas. Só a ironia explica as aspas.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Qual frase informa que todos os alunos estudaram muito e foram aprovados?",
    o: ["Os alunos, que estudaram muito, foram aprovados.", "Os alunos que estudaram muito foram aprovados.", "Os alunos que estudaram, muito foram aprovados.", "Os alunos, que estudaram muito foram aprovados.", "Os alunos que, estudaram muito, foram aprovados."],
    x: "Quando a oração que estudaram muito vem entre vírgulas, ela é uma oração adjetiva explicativa: apenas acrescenta uma informação sobre todos os alunos. A frase diz que todos estudaram muito e todos foram aprovados.\n\nSem vírgulas, a oração é restritiva e seleciona uma parte dos alunos: só os que estudaram muito foram aprovados. As demais frases colocam vírgulas em lugares incorretos, abrindo uma vírgula sem fechá-la ou separando palavras que não se separam. Só a primeira frase aponta que todos estudaram.",
  },
  {
    d: "dificil",
    e: "Em “Ana comprou pão; Bia, leite; Carla, queijo”, o que as vírgulas depois de Bia e de Carla indicam?",
    o: ["A omissão do verbo comprou", "Um vocativo", "Um aposto", "Uma pergunta", "Uma citação"],
    x: "Nas partes Bia, leite e Carla, queijo, o verbo comprou não aparece, porque já foi dito antes. A vírgula marca o lugar do verbo omitido: Bia comprou leite, Carla comprou queijo. Esse recurso, chamado de elipse, evita a repetição do verbo.\n\nNão há vocativo, pois ninguém está sendo chamado. Não há aposto, pois Bia e Carla são sujeitos. Não há pergunta nem citação. Só a primeira explicação descreve a vírgula.",
  },
  {
    d: "dificil",
    e: "Em “O prefeito, segundo os moradores, ainda não respondeu”, o que as vírgulas isolam?",
    o: ["Uma expressão que indica a fonte", "O sujeito da oração", "Um vocativo", "O verbo da oração", "O fim da frase"],
    x: "A expressão segundo os moradores está no meio da frase e indica de onde vem a informação. Ela é intercalada, isto é, interrompe a frase, e por isso vem entre duas vírgulas. Retirada a expressão, a frase continua fazendo sentido: o prefeito ainda não respondeu.\n\nO sujeito é o prefeito, e está fora das vírgulas. Não há vocativo. O verbo é respondeu, e também está fora. E o fim da frase é marcado pelo ponto final. Só a expressão que indica a fonte descreve o trecho isolado.",
  },
  {
    d: "dificil",
    e: "Em qual frase a conjunção porém está bem pontuada no meio da oração?",
    o: ["Ele, porém, não desistiu.", "Ele porém, não desistiu.", "Ele, porém não desistiu.", "Ele porém não, desistiu.", "Ele, porém não, desistiu."],
    x: "Quando a conjunção adversativa porém aparece no meio da oração, deslocada, ela vem entre duas vírgulas: ele, porém, não desistiu. As duas vírgulas isolam a conjunção, como se fosse uma expressão intercalada.\n\nAs demais frases usam só uma vírgula, antes ou depois de porém, ou colocam a vírgula depois de não, entre o advérbio e o verbo. Esses usos deixam o isolamento incompleto ou separam palavras que não se separam. Só a primeira frase isola porém com as duas vírgulas.",
  },
  {
    d: "dificil",
    e: "Qual endereço está pontuado corretamente?",
    o: ["Rua das Flores, 120, Centro, Recife.", "Rua das Flores 120, Centro, Recife.", "Rua das Flores, 120 Centro, Recife.", "Rua das Flores, 120, Centro Recife.", "Rua, das Flores, 120, Centro, Recife."],
    x: "Num endereço, cada informação é separada da seguinte por vírgula: o nome da rua, o número, o bairro e a cidade. Por isso: Rua das Flores, 120, Centro, Recife. O ponto final encerra o endereço, quando ele vem no fim de uma frase.\n\nAs demais versões esquecem uma das vírgulas, entre a rua e o número, entre o número e o bairro, ou entre o bairro e a cidade, ou colocam uma vírgula no meio do nome da rua. Só a primeira versão pontua todas as partes do endereço.",
  },
  {
    d: "dificil",
    e: "Qual frase pontua corretamente um vocativo no meio da pergunta?",
    o: ["Você sabe, Pedro, que horas são?", "Você sabe Pedro, que horas são?", "Você, sabe Pedro que, horas são?", "Você sabe, Pedro que, horas são?", "Você sabe Pedro que horas são,?"],
    x: "O vocativo, Pedro, no meio da frase, vem entre duas vírgulas: você sabe, Pedro, que horas são? A pergunta termina com o ponto de interrogação.\n\nAs demais frases usam uma só vírgula, deixando o vocativo mal isolado, ou colocam vírgulas entre o pronome e o verbo, ou dentro da oração que horas são, ou ainda antes do ponto de interrogação. Esses usos separam termos que não se separam. Só a primeira frase isola o vocativo com duas vírgulas.",
  },
  {
    d: "dificil",
    e: "Qual frase de narrativa está pontuada corretamente?",
    o: ["— Cheguei! — disse Ana.", "— Cheguei, — disse Ana.", "— Cheguei! disse Ana.", "— Cheguei. — disse Ana.", "Cheguei! — disse Ana."],
    x: "Na narrativa, a fala do personagem vem depois do travessão, e a indicação de quem fala vem depois de outro travessão, em letra minúscula: — Cheguei! — disse Ana. O ponto de exclamação mostra a emoção da fala e fica antes do segundo travessão.\n\nA vírgula antes do segundo travessão e o ponto final são inadequados nesse caso. Esquecer o segundo travessão cola a indicação de quem fala à fala. E esquecer o primeiro tira a marca de início de fala. Só a primeira frase segue a pontuação da narrativa.",
  },
  {
    d: "dificil",
    e: "Em “Maria, quando chegou, sorriu”, o trecho entre vírgulas é o quê?",
    o: ["Uma oração adverbial intercalada", "Um vocativo", "Um aposto", "O sujeito da oração", "Uma pergunta"],
    x: "O trecho quando chegou é uma oração que indica o tempo da ação de sorrir. Ela está no meio da oração principal, entre o sujeito e o verbo, e por isso vem entre duas vírgulas: é uma oração adverbial intercalada.\n\nO vocativo serviria para chamar Maria, o que não ocorre. O aposto explicaria quem é Maria. O sujeito da oração principal é Maria, e está fora das vírgulas. E não há pergunta na frase. Só a oração adverbial intercalada descreve o trecho.",
  },
  {
    d: "dificil",
    e: "Em qual frase o ponto e vírgula separa corretamente orações coordenadas?",
    o: ["Ele estudou muito; contudo, não passou.", "Ele estudou; muito contudo não passou.", "Ele estudou muito contudo; não, passou.", "Ele; estudou muito contudo não passou.", "Ele estudou muito contudo não; passou."],
    x: "O ponto e vírgula marca uma pausa maior que a vírgula, e é adequado antes de uma conjunção adversativa como contudo, que introduz uma ideia oposta à anterior: ele estudou muito; contudo, não passou. A conjunção contudo vem seguida de vírgula.\n\nAs demais frases colocam o ponto e vírgula no meio de uma oração, entre o sujeito e o verbo, ou depois da conjunção, onde ele separa termos que não se separam. Só a primeira frase usa o ponto e vírgula entre duas orações.",
  },
  {
    d: "dificil",
    e: "Qual das frases abaixo está corretamente pontuada?",
    o: ["Ontem, em casa, meu pai, que é médico, contou uma história.", "Ontem em casa, meu pai que é médico, contou uma história.", "Ontem, em casa meu pai, que é médico contou, uma história.", "Ontem em casa meu pai, que é médico, contou, uma história.", "Ontem, em casa, meu pai que é médico contou uma, história."],
    x: "A primeira frase usa as vírgulas nos lugares certos: depois dos adjuntos adverbiais ontem e em casa, que vêm deslocados para o início, e em volta da oração explicativa que é médico, que acrescenta uma informação sobre o pai. O verbo contou e o complemento uma história não se separam.\n\nAs demais frases esquecem uma das vírgulas dos adjuntos, deixam a oração explicativa sem vírgulas ou com uma só, ou colocam vírgula entre o verbo e o complemento. Só a primeira frase está corretamente pontuada.",
  },
];
