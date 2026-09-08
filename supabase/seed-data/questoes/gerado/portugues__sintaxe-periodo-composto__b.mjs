/* Sintaxe: período composto — parte B (25 questões).
   Contagem de orações, valor do "que" e do "se", orações reduzidas e troca de
   conectivos sem alteração de sentido. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "Considerando que cada verbo em forma pessoal indica uma oração, o período \"Sei que ele chegou e que trará novidades\" é formado por:",
    opcoes: ["duas orações", "três orações", "quatro orações", "uma oração", "cinco orações"],
    correta: 1,
    explicacao:
      "São três verbos em forma pessoal — sei, chegou e trará —, portanto três orações. A contagem de orações pelo número de verbos é a primeira etapa da análise de qualquer período. As duas últimas são subordinadas substantivas objetivas diretas, coordenadas entre si pela conjunção \"e\".",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Ele disse que viria à reunião, mas não apareceu\", a oração \"que viria à reunião\" classifica-se como:",
    opcoes: [
      "coordenada sindética adversativa.",
      "subordinada adjetiva restritiva.",
      "subordinada adverbial causal.",
      "subordinada substantiva objetiva direta.",
      "coordenada sindética aditiva.",
    ],
    correta: 3,
    explicacao:
      "Substituindo por \"isso\", tem-se \"ele disse isso\": a oração completa o sentido do verbo transitivo direto \"dizer\". O \"que\" aqui é conjunção integrante, e não pronome relativo, porque não retoma nenhum termo anterior nem exerce função dentro da própria oração.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "Ainda no período \"Ele disse que viria à reunião, mas não apareceu\", o trecho iniciado por \"mas\" classifica-se como:",
    opcoes: [
      "coordenada sindética adversativa.",
      "subordinada substantiva subjetiva.",
      "subordinada adjetiva explicativa.",
      "coordenada assindética.",
      "subordinada adverbial concessiva.",
    ],
    correta: 0,
    explicacao:
      "A conjunção \"mas\" opõe a segunda informação à primeira sem que uma exerça função sintática na outra: é coordenação adversativa. Uma concessiva teria conectivo como \"embora\" e criaria relação de dependência, além de exigir verbo no subjuntivo.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Espero que a proposta seja aprovada pelo conselho\", a palavra \"que\" desempenha a função de:",
    opcoes: [
      "pronome relativo, retomando um termo anterior.",
      "advérbio de intensidade.",
      "preposição essencial.",
      "partícula expletiva de realce.",
      "conjunção integrante, introduzindo oração substantiva.",
    ],
    correta: 4,
    explicacao:
      "O \"que\" apenas liga a oração subordinada à principal, sem retomar termo algum nem exercer função sintática dentro da oração que introduz — é conjunção integrante. Um teste prático: se puder ser substituído por \"o qual\", trata-se de pronome relativo; se não, é conjunção integrante.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"O livro que comprei na feira estava esgotado nas livrarias\", a palavra \"que\" desempenha a função de:",
    opcoes: [
      "conjunção integrante.",
      "conjunção coordenativa adversativa.",
      "pronome relativo, retomando o termo \"o livro\".",
      "advérbio de intensidade.",
      "partícula expletiva, podendo ser retirada.",
    ],
    correta: 2,
    explicacao:
      "O \"que\" retoma \"o livro\" e exerce função de objeto direto de \"comprei\", o que caracteriza o pronome relativo. A substituição por \"o qual\" confirma: \"o livro o qual comprei\". A oração introduzida é adjetiva restritiva, e não substantiva.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Cheguei, vi, venci\", as orações estão ligadas sem qualquer conjunção entre elas. Cada uma delas classifica-se como coordenada:",
    opcoes: [
      "sindética aditiva.",
      "sindética conclusiva.",
      "subordinada adverbial.",
      "principal do período.",
      "assindética.",
    ],
    correta: 4,
    explicacao:
      "Coordenadas assindéticas são aquelas ligadas apenas por vírgula, sem conjunção — o termo vem de \"síndeto\", que significa conectivo. Quando há conjunção, a oração é sindética e recebe a classificação correspondente ao valor semântico do conectivo.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Ainda que chova forte amanhã, iremos ao evento\", a oração iniciada pela locução destacada classifica-se como subordinada adverbial:",
    opcoes: ["concessiva", "condicional", "causal", "temporal", "final"],
    correta: 0,
    explicacao:
      "\"Ainda que\" apresenta um obstáculo que não impede a realização do fato principal, o que define a concessiva. A condicional, com \"se\", indicaria que a ida depende da chuva — sentido oposto. Trocar um conectivo pelo outro inverteria completamente a lógica do período.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Ele fez o trabalho conforme o professor havia orientado\", a oração iniciada por \"conforme\" classifica-se como subordinada adverbial:",
    opcoes: ["comparativa", "causal", "conformativa", "proporcional", "consecutiva"],
    correta: 2,
    explicacao:
      "A conformativa indica que a ação foi realizada de acordo com um modelo ou uma orientação prévia. São conectivos do mesmo grupo \"segundo\", \"consoante\" e \"como\". Não há comparação entre dois elementos, o que afastaria a comparativa, nem relação de causa.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Não sei se ele virá à festa\", a oração iniciada por \"se\" classifica-se como:",
    opcoes: [
      "subordinada adverbial condicional.",
      "subordinada substantiva objetiva direta.",
      "subordinada adjetiva restritiva.",
      "subordinada substantiva subjetiva.",
      "coordenada sindética alternativa.",
    ],
    correta: 1,
    explicacao:
      "Aqui o \"se\" é conjunção integrante, não condicional: a oração completa o sentido de \"saber\" e pode ser substituída por \"isso\" — \"não sei isso\". A pista é o verbo da principal, que exige complemento. Com valor condicional, o \"se\" introduziria hipótese, como em \"se ele vier, avise\".",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Convém que todos revisem o texto antes da entrega\", a oração iniciada por \"que\" classifica-se como subordinada substantiva:",
    opcoes: ["objetiva direta", "completiva nominal", "apositiva", "subjetiva", "predicativa"],
    correta: 3,
    explicacao:
      "Substituindo por \"isso\", tem-se \"isso convém\", em que a oração é o sujeito do verbo. Verbos como \"convém\", \"importa\", \"consta\" e \"parece\", usados impessoalmente, introduzem tipicamente orações subjetivas. Não há sujeito anterior no período — o que confirma a análise.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"As pessoas, que são mortais, temem a passagem do tempo\", a oração isolada por vírgulas classifica-se como adjetiva:",
    opcoes: ["restritiva", "apositiva", "explicativa", "subjetiva", "objetiva indireta"],
    correta: 2,
    explicacao:
      "A informação vale para todo o conjunto referido — todas as pessoas são mortais —, então a oração não restringe: apenas acrescenta. Daí as vírgulas obrigatórias. Sem elas, o período sugeriria que existem pessoas imortais, leitura logicamente inaceitável.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Preciso de que me ajudem com a mudança\", a oração introduzida por \"de que\" classifica-se como subordinada substantiva:",
    opcoes: ["objetiva direta", "objetiva indireta", "completiva nominal", "subjetiva", "apositiva"],
    correta: 1,
    explicacao:
      "O verbo \"precisar\" é transitivo indireto e exige a preposição \"de\"; a oração completa esse verbo, exercendo função de objeto indireto. Se a preposição fosse exigida por um nome, como em \"tenho necessidade de que\", a oração seria completiva nominal.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Feito o levantamento dos dados, a equipe iniciou a redação do relatório\", a primeira oração apresenta o verbo em forma nominal. Ela é classificada como oração:",
    opcoes: [
      "reduzida de infinitivo.",
      "reduzida de gerúndio.",
      "desenvolvida com conjunção.",
      "reduzida de particípio.",
      "principal do período.",
    ],
    correta: 3,
    explicacao:
      "\"Feito\" é particípio, o que caracteriza a oração reduzida de particípio. A versão desenvolvida seria \"Depois que fez o levantamento dos dados\", uma adverbial temporal. As reduzidas dispensam conjunção e usam infinitivo, gerúndio ou particípio.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Falou tão baixo que ninguém conseguiu ouvi-lo\", a oração iniciada por \"que\" classifica-se como subordinada adverbial:",
    opcoes: ["consecutiva", "comparativa", "final", "causal", "temporal"],
    correta: 0,
    explicacao:
      "O advérbio intensificador \"tão\" antecipa a consequência que virá, marca típica da consecutiva. A oração expressa o resultado decorrente da intensidade indicada na principal. Sem o intensificador, o \"que\" poderia introduzir outros tipos de oração.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "No período \"Assim que o sinal tocou, todos deixaram a sala\", a oração iniciada pela locução destacada classifica-se como subordinada adverbial:",
    opcoes: ["causal", "condicional", "conformativa", "final", "temporal"],
    correta: 4,
    explicacao:
      "\"Assim que\" indica imediata sucessão no tempo, o que caracteriza a adverbial temporal. Pertencem ao mesmo grupo \"logo que\", \"mal\", \"apenas\" com valor temporal e \"depois que\". A relação estabelecida é cronológica, não causal.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"Não saiu de casa porque estava doente\", a conjunção \"porque\" poderia ser substituída, sem alteração de sentido, por:",
    opcoes: ["portanto", "embora", "caso", "visto que", "a fim de que"],
    correta: 3,
    explicacao:
      "\"Visto que\" mantém o valor causal do período. \"Portanto\" indicaria conclusão, \"embora\" traria concessão e \"caso\" imporia condição — todos alterariam a relação lógica. Trocar conectivos exige atenção ao valor semântico, e não apenas à naturalidade da frase.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "No período \"Estava exausto; entretanto, continuou trabalhando até tarde\", a palavra \"entretanto\" é um conectivo de valor:",
    opcoes: ["conclusivo", "aditivo", "explicativo", "alternativo", "adversativo"],
    correta: 4,
    explicacao:
      "\"Entretanto\" marca contraste entre as duas informações, como \"mas\", \"porém\", \"todavia\" e \"no entanto\". Note que, deslocado para o interior da oração, esse tipo de conectivo vem entre vírgulas — detalhe de pontuação frequentemente cobrado junto com a classificação.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "Considerando que as formas nominais do verbo também constituem orações, o período \"Quero sair mais cedo hoje\" é formado por:",
    opcoes: ["uma oração", "duas orações", "três orações", "nenhuma oração", "quatro orações"],
    correta: 1,
    explicacao:
      "São dois verbos — \"quero\" e \"sair\" —, portanto duas orações. A segunda é uma subordinada substantiva objetiva direta reduzida de infinitivo, equivalente a \"quero que eu saia mais cedo\". Ignorar as formas nominais leva à contagem incorreta de orações.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "A respeito da pontuação das orações subordinadas adjetivas restritivas, é correto afirmar que elas:",
    opcoes: [
      "devem sempre vir isoladas por vírgulas.",
      "exigem dois-pontos antes do pronome relativo.",
      "não devem ser separadas por vírgulas da oração principal.",
      "só podem aparecer no final do período.",
      "dispensam o uso de pronome relativo.",
    ],
    correta: 2,
    explicacao:
      "A restritiva delimita o termo antecedente e forma com ele uma unidade de sentido, por isso não admite vírgula. As vírgulas transformariam a oração em explicativa e mudariam o sentido do período. Em provas, essa diferença de pontuação é o ponto mais cobrado sobre orações adjetivas.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "No período \"Estudo todos os dias para passar no vestibular\", a oração iniciada por \"para\" classifica-se como:",
    opcoes: [
      "adverbial final reduzida de infinitivo.",
      "substantiva objetiva direta reduzida.",
      "adjetiva restritiva reduzida.",
      "coordenada sindética aditiva.",
      "adverbial causal desenvolvida.",
    ],
    correta: 0,
    explicacao:
      "A oração indica a finalidade do estudo e traz o verbo no infinitivo, sem conjunção: é adverbial final reduzida. A versão desenvolvida seria \"para que eu passe no vestibular\". Reconhecer a forma nominal e o valor semântico resolve a classificação em dois passos.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "Aplicando o critério de contagem pelo número de verbos, o período \"Ele trabalha durante o dia e estuda à noite\" é formado por:",
    opcoes: ["duas orações", "uma oração", "três orações", "quatro orações", "nenhuma oração"],
    correta: 0,
    explicacao:
      "Há dois verbos em forma pessoal — trabalha e estuda —, logo duas orações, ligadas por conjunção coordenativa aditiva. O fato de compartilharem o mesmo sujeito não reduz a contagem: o que define a oração é a presença de um verbo, e não a de um sujeito próprio.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "Levando em conta o número de orações que apresenta, o período \"Talvez ele venha à reunião amanhã\" é classificado como:",
    opcoes: [
      "composto por coordenação.",
      "composto por subordinação.",
      "simples.",
      "composto por coordenação e subordinação.",
      "composto por orações reduzidas.",
    ],
    correta: 2,
    explicacao:
      "Há um único verbo em forma pessoal, \"venha\", portanto uma única oração: o período é simples, formado por uma oração absoluta. \"Talvez\" é advérbio de dúvida, e não conjunção — não introduz oração nova, apenas modaliza a existente.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "dificil",
    enunciado:
      "Contando os verbos em forma pessoal, o período \"Disse-me que, se chovesse, não viria ao encontro\" é formado por:",
    opcoes: ["uma oração", "duas orações", "quatro orações", "cinco orações", "três orações"],
    correta: 4,
    explicacao:
      "São três verbos — disse, chovesse e viria —, logo três orações. A estrutura é encaixada: a substantiva objetiva direta \"que… não viria\" contém dentro de si a adverbial condicional \"se chovesse\". Períodos com orações encaixadas exigem atenção redobrada na contagem.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "media",
    enunciado:
      "No período \"O exercício que fizemos ontem estava bem difícil\", a oração iniciada por \"que\" classifica-se como:",
    opcoes: [
      "substantiva objetiva direta.",
      "adverbial temporal.",
      "substantiva apositiva.",
      "adjetiva restritiva.",
      "coordenada sindética aditiva.",
    ],
    correta: 3,
    explicacao:
      "O \"que\" é pronome relativo e retoma \"o exercício\", delimitando de qual exercício se fala. Como não há vírgulas isolando o trecho, a adjetiva é restritiva. Se houvesse vírgulas, a leitura mudaria: haveria um único exercício, e a informação seria apenas acessória.",
  },
  {
    materia: "portugues",
    tema: "Sintaxe: período composto",
    dificuldade: "facil",
    enunciado:
      "Em um período composto por coordenação, o conectivo \"portanto\" estabelece entre as orações uma relação de:",
    opcoes: ["oposição", "conclusão", "causa", "condição", "finalidade"],
    correta: 1,
    explicacao:
      "\"Portanto\" apresenta a segunda oração como decorrência lógica da primeira, valor típico da coordenada conclusiva. São equivalentes \"logo\", \"por isso\", \"assim\" e \"pois\" posposto ao verbo. A conclusão fecha um raciocínio, ao contrário da explicativa, que o justifica.",
  },
];
