/* Sintaxe: período composto — parte A (25 questões).
   Coordenação, subordinação substantiva, adjetiva e adverbial, com o período
   sempre escrito no enunciado. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "No período \"Estudou o ano inteiro, mas não conseguiu a aprovação\", a segunda oração é classificada como coordenada sindética:",
    opcoes: ["aditiva", "alternativa", "adversativa", "conclusiva", "explicativa"],
    correta: 2,
    explicacao:
      "A conjunção \"mas\" estabelece contraste entre as duas ideias, o que caracteriza a coordenada sindética adversativa. Pertencem ao mesmo grupo \"porém\", \"contudo\", \"todavia\" e \"entretanto\". As duas orações permanecem independentes: nenhuma exerce função sintática dentro da outra.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Ele se dedicou aos estudos durante meses, logo merece a vaga conquistada\", a segunda oração é coordenada sindética:",
    opcoes: ["adversativa", "aditiva", "explicativa", "alternativa", "conclusiva"],
    correta: 4,
    explicacao:
      "\"Logo\" apresenta a segunda oração como consequência lógica da primeira, o que define a coordenada conclusiva. São equivalentes \"portanto\", \"por isso\", \"pois\" posposto ao verbo e \"assim\". A conclusiva encerra um raciocínio, enquanto a explicativa justifica uma afirmação anterior.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Não faça barulho, pois as crianças acabaram de dormir\", a segunda oração é coordenada sindética:",
    opcoes: ["explicativa", "conclusiva", "adversativa", "aditiva", "alternativa"],
    correta: 0,
    explicacao:
      "A segunda oração apresenta a razão do pedido feito na primeira, caracterizando a coordenada explicativa. Um teste prático: a explicativa costuma vir depois de imperativo e pode ser substituída por \"porque\". Se \"pois\" viesse posposto ao verbo, como em \"as crianças dormem, não faça barulho, pois\", o valor seria conclusivo.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "No período \"Ou você assume o compromisso, ou procura outro parceiro para o projeto\", as orações mantêm entre si relação de:",
    opcoes: ["adição", "oposição", "conclusão", "alternância", "explicação"],
    correta: 3,
    explicacao:
      "O par \"ou… ou\" apresenta as ideias como excludentes, o que caracteriza a coordenada alternativa. Também funcionam nesse valor \"ora… ora\", \"quer… quer\" e \"seja… seja\". A alternância pode indicar exclusão mútua ou simples revezamento entre as situações.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "No período \"Chegou cedo à reunião e sentou-se na primeira fileira\", a segunda oração é coordenada sindética:",
    opcoes: ["adversativa", "aditiva", "alternativa", "conclusiva", "explicativa"],
    correta: 1,
    explicacao:
      "A conjunção \"e\" soma as duas ações sem estabelecer contraste ou conclusão, o que define a coordenada aditiva. Convém notar que \"e\" pode assumir valor adversativo em contextos como \"estudou muito e não passou\" — a classificação depende do sentido, não apenas da conjunção.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"É necessário que todos compareçam à assembleia\", a oração destacada por \"que\" exerce a função de:",
    opcoes: [
      "objeto direto da oração principal.",
      "sujeito da oração principal.",
      "predicativo do sujeito.",
      "aposto explicativo.",
      "complemento nominal.",
    ],
    correta: 1,
    explicacao:
      "Substituindo a oração por \"isso\", tem-se \"isso é necessário\", em que \"isso\" é o sujeito: trata-se de uma subordinada substantiva subjetiva. Expressões como \"é preciso\", \"convém\" e \"parece\" seguidas de \"que\" introduzem esse tipo de oração com muita frequência.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Quero que você chegue antes das oito horas\", a oração iniciada por \"que\" classifica-se como subordinada substantiva:",
    opcoes: ["subjetiva", "completiva nominal", "predicativa", "objetiva direta", "apositiva"],
    correta: 3,
    explicacao:
      "Substituindo por \"isso\", tem-se \"quero isso\": a oração completa o sentido do verbo transitivo direto \"querer\", exercendo função de objeto direto. O teste da substituição por um pronome é o caminho mais seguro para classificar as substantivas, porque revela a função sintática exercida.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Tenho certeza de que ele cumprirá o combinado\", a oração introduzida por \"de que\" classifica-se como subordinada substantiva:",
    opcoes: [
      "objetiva direta",
      "objetiva indireta",
      "subjetiva",
      "apositiva",
      "completiva nominal",
    ],
    correta: 4,
    explicacao:
      "A oração completa o sentido do substantivo \"certeza\", e não de um verbo, o que caracteriza a completiva nominal. Se completasse um verbo transitivo indireto, seria objetiva indireta. A pergunta decisiva é: o termo completado é nome ou verbo? Aqui é nome, precedido de preposição exigida por ele.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Minha maior esperança é que tudo se resolva em paz\", a oração iniciada por \"que\" classifica-se como subordinada substantiva:",
    opcoes: ["predicativa", "subjetiva", "apositiva", "objetiva direta", "completiva nominal"],
    correta: 0,
    explicacao:
      "A oração vem depois do verbo de ligação \"ser\" e atribui uma característica ao sujeito \"minha maior esperança\": exerce função de predicativo do sujeito. A presença do verbo de ligação é o indício mais confiável desse tipo de oração, que costuma ser confundido com a subjetiva.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Só peço uma coisa: que sejam honestos com a equipe\", a oração introduzida após os dois-pontos classifica-se como subordinada substantiva:",
    opcoes: ["subjetiva", "predicativa", "apositiva", "objetiva indireta", "completiva nominal"],
    correta: 2,
    explicacao:
      "A oração explica o conteúdo do termo \"uma coisa\", funcionando como aposto: é a subordinada substantiva apositiva. A pontuação — dois-pontos ou vírgula — é uma pista forte, mas o critério decisivo continua sendo a função de esclarecer um termo anterior da oração principal.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Os alunos que estudaram com antecedência foram aprovados\", sem vírgulas isolando o trecho iniciado por \"que\", a oração adjetiva é classificada como:",
    opcoes: ["restritiva", "explicativa", "apositiva", "subjetiva", "completiva nominal"],
    correta: 0,
    explicacao:
      "Sem vírgulas, a oração restringe o grupo referido: apenas os alunos que estudaram foram aprovados, não todos. Com vírgulas, a leitura mudaria completamente, sugerindo que todos estudaram e todos passaram. A pontuação, nesse caso, altera o sentido do período.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Meu pai, que é médico há trinta anos, chegou cedo em casa\", a oração isolada por vírgulas classifica-se como adjetiva:",
    opcoes: ["restritiva", "apositiva", "explicativa", "objetiva direta", "predicativa"],
    correta: 2,
    explicacao:
      "As vírgulas indicam que a informação é acessória: o pai já está identificado, e a profissão apenas acrescenta um dado. Por isso a oração é explicativa. Se as vírgulas fossem retiradas, o período sugeriria a existência de outros pais, o que não faz sentido no contexto.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Como estava chovendo muito, decidimos ficar em casa\", a oração iniciada por \"como\" classifica-se como subordinada adverbial:",
    opcoes: ["condicional", "concessiva", "temporal", "causal", "final"],
    correta: 3,
    explicacao:
      "A chuva é apresentada como o motivo da decisão, o que caracteriza a adverbial causal. \"Como\" tem valor causal quando inicia o período; em outras posições, pode assumir valor comparativo ou conformativo. O teste é substituir por \"porque\" e verificar se o sentido se mantém.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "No período \"Se chover durante a tarde, não sairemos de casa\", a oração iniciada por \"se\" classifica-se como subordinada adverbial:",
    opcoes: ["causal", "condicional", "concessiva", "consecutiva", "conformativa"],
    correta: 1,
    explicacao:
      "A oração apresenta a hipótese da qual depende a realização da outra, o que define a adverbial condicional. São conectivos do mesmo grupo \"caso\", \"desde que\", \"contanto que\" e \"a menos que\". O par de tempos verbais — futuro do subjuntivo e futuro do presente — reforça o valor hipotético.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Embora estivesse exausto, ele foi trabalhar normalmente\", a oração iniciada por \"embora\" classifica-se como subordinada adverbial:",
    opcoes: ["causal", "condicional", "final", "temporal", "concessiva"],
    correta: 4,
    explicacao:
      "A concessiva apresenta um obstáculo que, apesar de existir, não impede a ação principal. São equivalentes \"ainda que\", \"mesmo que\", \"conquanto\" e \"apesar de que\". Note a diferença em relação à causal: a causa produz o efeito, enquanto a concessão contraria a expectativa criada.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Estudou tanto para a prova que acabou adoecendo de cansaço\", a oração iniciada por \"que\" classifica-se como subordinada adverbial:",
    opcoes: ["causal", "final", "comparativa", "proporcional", "consecutiva"],
    correta: 4,
    explicacao:
      "A consecutiva exprime o resultado decorrente da intensidade indicada na oração principal, sinalizada aqui pelo intensificador \"tanto\". A presença de termos como \"tão\", \"tal\" e \"tamanho\" antecipando o \"que\" é a marca típica desse tipo de oração.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Saiu mais cedo do escritório para que pudesse buscar o filho\", a oração iniciada por \"para que\" classifica-se como subordinada adverbial:",
    opcoes: ["causal", "final", "consecutiva", "temporal", "condicional"],
    correta: 1,
    explicacao:
      "A oração indica o objetivo da ação principal, o que caracteriza a adverbial final. São conectivos equivalentes \"a fim de que\" e \"que\" com valor de finalidade. A distinção em relação à causal é temporal: a causa antecede a ação, e a finalidade a sucede como propósito.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "No período \"Quando cheguei ao aeroporto, ele já havia embarcado\", a oração iniciada por \"quando\" classifica-se como subordinada adverbial:",
    opcoes: ["causal", "condicional", "temporal", "concessiva", "proporcional"],
    correta: 2,
    explicacao:
      "A oração situa no tempo o fato expresso na principal, caracterizando a adverbial temporal. São conectivos do mesmo grupo \"assim que\", \"logo que\", \"antes que\", \"depois que\" e \"enquanto\". O uso do mais-que-perfeito na principal marca a anterioridade do embarque.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"À medida que envelhecia, tornava-se mais tolerante com os outros\", a oração iniciada pela locução destacada classifica-se como subordinada adverbial:",
    opcoes: ["proporcional", "comparativa", "conformativa", "consecutiva", "final"],
    correta: 0,
    explicacao:
      "A proporcional indica variação simultânea entre dois fatos: um aumenta na mesma medida em que o outro se altera. São locuções típicas \"à medida que\", \"à proporção que\" e \"quanto mais… mais\". Cuidado com a forma \"na medida em que\", que tem valor causal e não proporcional.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Conforme combinamos na semana passada, chegarei às oito horas\", a oração iniciada por \"conforme\" classifica-se como subordinada adverbial:",
    opcoes: ["causal", "temporal", "proporcional", "conformativa", "comparativa"],
    correta: 3,
    explicacao:
      "A conformativa indica que o fato da principal se realiza de acordo com uma norma, um acordo ou um modelo. São conectivos do grupo \"segundo\", \"consoante\" e \"como\" com esse valor. A oração não indica tempo nem causa: apenas registra conformidade com algo previamente estabelecido.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Ele é mais alto do que o irmão mais velho\", a oração reduzida iniciada por \"do que\" classifica-se como subordinada adverbial:",
    opcoes: ["proporcional", "conformativa", "consecutiva", "comparativa", "concessiva"],
    correta: 3,
    explicacao:
      "A comparativa estabelece confronto entre dois elementos, e é comum que o verbo apareça elíptico, como aqui: \"do que o irmão [é]\". São conectivos típicos \"como\", \"assim como\", \"mais… do que\" e \"menos… do que\". A elipse do verbo é o que às vezes dificulta o reconhecimento da oração.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "Um período composto por coordenação apresenta uma característica estrutural específica em relação às orações que o compõem. Nesse tipo de período, as orações:",
    opcoes: [
      "são sintaticamente independentes entre si.",
      "exercem sempre função de sujeito uma da outra.",
      "precisam obrigatoriamente vir separadas por ponto e vírgula.",
      "não admitem o uso de conjunções.",
      "sempre têm o mesmo sujeito explícito.",
    ],
    correta: 0,
    explicacao:
      "Na coordenação, nenhuma oração funciona como termo da outra: elas apenas se justapõem ou se ligam por conjunção coordenativa. Na subordinação, ao contrário, a oração subordinada exerce dentro da principal uma função sintática — sujeito, objeto, adjunto ou complemento nominal.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "Em um período composto por subordinação, a relação estabelecida entre a oração principal e a oração subordinada é tal que:",
    opcoes: [
      "as duas orações têm sentido completo isoladamente.",
      "a subordinada exerce uma função sintática dentro da principal.",
      "a principal depende sintaticamente da subordinada.",
      "as duas orações são ligadas apenas por vírgula.",
      "a subordinada vem sempre antes da principal.",
    ],
    correta: 1,
    explicacao:
      "A subordinada ocupa o lugar de um termo da principal — pode ser sujeito, objeto, adjunto adverbial ou adjunto adnominal. É por isso que a classificação das subordinadas espelha a dos termos da oração simples. A ordem entre elas é livre e não altera essa relação de dependência.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Chegando em casa, ele foi direto para o quarto\", a primeira oração apresenta o verbo em forma nominal, sem conjunção. Essa oração é classificada como:",
    opcoes: [
      "desenvolvida coordenada aditiva.",
      "principal do período.",
      "coordenada sindética conclusiva.",
      "absoluta, por não se relacionar às demais.",
      "reduzida de gerúndio.",
    ],
    correta: 4,
    explicacao:
      "Orações reduzidas apresentam o verbo no infinitivo, gerúndio ou particípio e dispensam conjunção. A versão desenvolvida seria \"Quando chegou em casa\", uma adverbial temporal. Reconhecer a forma nominal do verbo é o primeiro passo para identificar uma reduzida.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"É preciso estudar todos os dias\", a segunda oração aparece com o verbo no infinitivo e sem conectivo. Ela classifica-se como oração subordinada substantiva:",
    opcoes: [
      "objetiva direta reduzida de infinitivo.",
      "adverbial final reduzida de infinitivo.",
      "subjetiva reduzida de infinitivo.",
      "adjetiva reduzida de infinitivo.",
      "apositiva reduzida de infinitivo.",
    ],
    correta: 2,
    explicacao:
      "Substituindo por \"isso\", tem-se \"isso é preciso\", em que a oração exerce função de sujeito: é subjetiva, na forma reduzida de infinitivo. A versão desenvolvida seria \"É preciso que se estude todos os dias\". Expressões impessoais como \"é preciso\" e \"é necessário\" quase sempre introduzem subjetivas.",
  },
];
