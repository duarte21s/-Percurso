/* Rascunho — Português de banca / Período composto por subordinação.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram classificações assentadas na gramática
   normativa: oração principal e subordinada; subordinadas substantivas
   (subjetiva, objetiva direta e indireta, completiva nominal, predicativa,
   apositiva); adjetivas (restritiva e explicativa); adverbiais (causal,
   consecutiva, comparativa, conformativa, concessiva, condicional, final,
   proporcional, temporal); desenvolvidas e reduzidas (infinitivo e
   particípio); conjunções e locuções subordinativas; a diferença entre
   subordinação e coordenação, entre concessiva e adversativa, entre final e
   consecutiva e entre as substantivas parecidas. Ficaram de fora, de
   propósito, as reduzidas de gerúndio ambíguas (condicional, modal ou
   causal conforme a leitura) e as classificações que a gramática discute. */

export const materia = "portugues-banca";
export const tema = "Período composto por subordinação";
export const arquivo = "portugues-banca__periodo-composto-por-subordinacao";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Em “Quando chegou, ela saiu”, qual é a oração principal?",
    o: ["ela saiu", "quando chegou", "quando", "chegou", "quando chegou, ela saiu"],
    x: "A oração principal é aquela da qual a outra depende, e que tem sentido completo por si só: ela saiu. A oração “quando chegou” não se sustenta sozinha, porque a conjunção quando a liga à principal e indica o tempo em que ela saiu. Por isso é subordinada.\n\nQuando chegou é a subordinada. Quando é só a conjunção, e chegou é só o verbo da subordinada. E o período inteiro, quando chegou, ela saiu, reúne as duas orações e não é a principal.",
  },
  {
    d: "facil",
    e: "Em “É necessário que todos estudem”, como se classifica a oração “que todos estudem”?",
    o: ["Subordinada substantiva subjetiva", "Subordinada substantiva objetiva direta", "Subordinada adjetiva restritiva", "Subordinada adverbial causal", "Coordenada sindética aditiva"],
    x: "A oração “que todos estudem” exerce a função de sujeito de é necessário: o que é necessário? Que todos estudem. Por isso é subordinada substantiva subjetiva, introduzida pela conjunção integrante que.\n\nA objetiva direta completaria um verbo transitivo direto. A adjetiva restritiva modificaria um substantivo. A adverbial causal indicaria uma causa. E a coordenada aditiva seria independente. A oração, aqui, tem a função de sujeito, que é substantiva.",
  },
  {
    d: "facil",
    e: "Em “Ela disse que chegaria cedo”, como se classifica a oração “que chegaria cedo”?",
    o: ["Subordinada substantiva objetiva direta", "Subordinada substantiva subjetiva", "Subordinada adjetiva restritiva", "Subordinada adverbial temporal", "Coordenada sindética aditiva"],
    x: "A oração “que chegaria cedo” completa o sentido do verbo disse, que é transitivo direto: ela disse o quê? Que chegaria cedo. Funciona como objeto direto, e por isso é subordinada substantiva objetiva direta, introduzida pela conjunção integrante que.\n\nA subjetiva seria sujeito do verbo. A adjetiva restritiva modificaria um substantivo. A adverbial temporal indicaria o tempo. E a coordenada aditiva seria independente, o que não ocorre: a oração depende de disse.",
  },
  {
    d: "facil",
    e: "Em “O livro que li é bom”, como se classifica a oração “que li”?",
    o: ["Subordinada adjetiva restritiva", "Subordinada substantiva objetiva direta", "Subordinada adverbial causal", "Coordenada sindética explicativa", "Subordinada adverbial temporal"],
    x: "A oração “que li” modifica o substantivo livro, e o delimita: não é qualquer livro, é o que eu li. Quem exerce função de adjetivo em relação a um substantivo é a oração subordinada adjetiva, e como delimita o termo, é restritiva. É introduzida pelo pronome relativo que.\n\nA substantiva objetiva direta completaria um verbo. A adverbial causal indicaria a causa. A coordenada explicativa justificaria uma ordem. E a adverbial temporal indicaria o tempo.",
  },
  {
    d: "facil",
    e: "Em “Quando chegou, jantou”, como se classifica a oração “quando chegou”?",
    o: ["Subordinada adverbial temporal", "Subordinada adverbial causal", "Subordinada adverbial condicional", "Subordinada adverbial final", "Subordinada adverbial concessiva"],
    x: "A oração “quando chegou” indica o tempo em que ocorreu a ação principal, jantou. Por isso é subordinada adverbial temporal, introduzida pela conjunção quando. Outras conjunções temporais são assim que, logo que, enquanto e depois que.\n\nA causal indicaria o motivo. A condicional indicaria uma condição. A final indicaria o objetivo. E a concessiva indicaria uma oposição que não impede a ação. Nenhuma delas indica o tempo.",
  },
  {
    d: "facil",
    e: "Em “Faltou porque estava doente”, como se classifica a oração “porque estava doente”?",
    o: ["Subordinada adverbial causal", "Subordinada adverbial temporal", "Subordinada adverbial condicional", "Subordinada adverbial final", "Subordinada adverbial concessiva"],
    x: "A oração “porque estava doente” indica a causa de a pessoa ter faltado. Por isso é subordinada adverbial causal, introduzida pela conjunção porque. Outras conjunções causais são já que, visto que e uma vez que.\n\nA temporal indicaria o tempo. A condicional indicaria uma condição. A final indicaria o objetivo. E a concessiva indicaria uma oposição que não impede a ação.",
  },
  {
    d: "facil",
    e: "Em “Se chover, não saio”, como se classifica a oração “se chover”?",
    o: ["Subordinada adverbial condicional", "Subordinada adverbial causal", "Subordinada adverbial temporal", "Subordinada adverbial final", "Subordinada substantiva objetiva direta"],
    x: "A oração “se chover” apresenta uma condição para a ação principal, não saio. Por isso é subordinada adverbial condicional, introduzida pela conjunção se. Outras conjunções condicionais são caso, contanto que e desde que.\n\nA causal indicaria o motivo. A temporal indicaria o tempo. A final indicaria o objetivo. E a substantiva objetiva direta completaria um verbo transitivo direto, o que não é o caso: o se é condicional, e não integrante.",
  },
  {
    d: "facil",
    e: "Em “Embora estivesse cansado, terminou a prova”, como se classifica a oração “embora estivesse cansado”?",
    o: ["Subordinada adverbial concessiva", "Subordinada adverbial causal", "Subordinada adverbial condicional", "Subordinada adverbial final", "Subordinada adverbial temporal"],
    x: "A oração “embora estivesse cansado” apresenta um fato que seria um obstáculo, o cansaço, mas que não impediu a ação principal, terminar a prova. É subordinada adverbial concessiva, introduzida por embora. Outras conjunções concessivas são ainda que, mesmo que e conquanto.\n\nA causal indicaria o motivo. A condicional indicaria uma condição. A final indicaria o objetivo. E a temporal indicaria o tempo.",
  },
  {
    d: "facil",
    e: "Em “Estudou para que fosse aprovado”, como se classifica a oração “para que fosse aprovado”?",
    o: ["Subordinada adverbial final", "Subordinada adverbial causal", "Subordinada adverbial consecutiva", "Subordinada adverbial concessiva", "Subordinada adverbial temporal"],
    x: "A oração “para que fosse aprovado” indica o objetivo da ação principal, estudou. Por isso é subordinada adverbial final, introduzida pela locução para que. Outras conjunções finais são a fim de que e que, em alguns usos.\n\nA causal indicaria o motivo. A consecutiva indicaria a consequência, como em estudou tanto que passou. A concessiva indicaria oposição. E a temporal indicaria o tempo.",
  },
  {
    d: "facil",
    e: "Em “Estudou tanto que passou”, como se classifica a oração “que passou”?",
    o: ["Subordinada adverbial consecutiva", "Subordinada adverbial final", "Subordinada adverbial causal", "Subordinada adverbial concessiva", "Subordinada substantiva objetiva direta"],
    x: "A oração “que passou” indica a consequência da intensidade expressa em estudou tanto: o resultado foi que passou. Por isso é subordinada adverbial consecutiva, em geral introduzida por que depois de tão, tanto, tamanho ou tal.\n\nA final indicaria o objetivo, e não o resultado. A causal indicaria o motivo. A concessiva indicaria oposição. E a substantiva objetiva direta completaria um verbo, e passou não completa o sentido de estudou.",
  },
  {
    d: "facil",
    e: "Qual das conjunções abaixo introduz oração subordinada adverbial temporal?",
    o: ["quando", "porque", "embora", "para que", "se"],
    x: "Quando indica o tempo em que a ação da oração principal ocorre: quando chegou, jantou. É conjunção subordinativa temporal, como assim que, logo que, depois que e enquanto.\n\nPorque é causal. Embora é concessiva. Para que é final. E se é condicional. Cada uma dessas conjunções introduz uma circunstância diferente da oração principal, e é por isso que é importante reconhecer qual delas indica o tempo.",
  },
  {
    d: "facil",
    e: "Qual é a diferença entre oração principal e oração subordinada?",
    o: ["A subordinada depende da principal, que tem sentido completo por si só", "A principal depende da subordinada para ter sentido", "As duas são independentes entre si", "A principal sempre vem no fim do período", "A subordinada nunca tem verbo"],
    x: "A oração principal é aquela à qual outra se liga por dependência, e que, em geral, tem sentido completo. A subordinada exerce uma função sintática em relação à principal: pode ser sujeito, objeto, adjunto ou outro termo. Por isso ela depende da principal.\n\nA principal não depende da subordinada. Dizer que as duas são independentes descreve a coordenação. A principal pode vir no início, no meio ou no fim. E a subordinada tem verbo, como toda oração.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Em “O problema é que ele não veio”, como se classifica a oração “que ele não veio”?",
    o: ["Subordinada substantiva predicativa", "Subordinada substantiva subjetiva", "Subordinada substantiva objetiva direta", "Subordinada adjetiva restritiva", "Subordinada substantiva completiva nominal"],
    x: "A oração “que ele não veio” funciona como predicativo do sujeito o problema, depois do verbo de ligação é: o problema é isso. Por isso é subordinada substantiva predicativa, introduzida pela conjunção integrante que.\n\nA subjetiva faria papel de sujeito. A objetiva direta completaria um verbo transitivo direto. A adjetiva restritiva modificaria um substantivo. E a completiva nominal completaria o sentido de um nome, introduzida por preposição.",
  },
  {
    d: "media",
    e: "Em “Só desejo uma coisa: que todos passem”, como se classifica a oração “que todos passem”?",
    o: ["Subordinada substantiva apositiva", "Subordinada substantiva predicativa", "Subordinada substantiva subjetiva", "Subordinada substantiva objetiva direta", "Subordinada adjetiva explicativa"],
    x: "A oração “que todos passem” explica o termo uma coisa, e vem depois de dois-pontos. Funciona como aposto, e por isso é subordinada substantiva apositiva. O aposto esclarece, resume ou identifica um termo anterior.\n\nA predicativa viria depois de verbo de ligação. A subjetiva faria o papel de sujeito. A objetiva direta completaria o verbo desejo, mas o objeto direto aqui é uma coisa. E a adjetiva explicativa teria pronome relativo.",
  },
  {
    d: "media",
    e: "Em “Tenho medo de que ele falhe”, como se classifica a oração “de que ele falhe”?",
    o: ["Subordinada substantiva completiva nominal", "Subordinada substantiva objetiva indireta", "Subordinada substantiva subjetiva", "Subordinada adjetiva restritiva", "Subordinada adverbial causal"],
    x: "A oração “de que ele falhe” completa o sentido do substantivo medo, indicando o que se teme, e vem introduzida por preposição. Por isso é subordinada substantiva completiva nominal, equivalente a complemento nominal.\n\nA objetiva indireta completaria um verbo, não um nome. A subjetiva faria o papel de sujeito. A adjetiva restritiva modificaria um substantivo sem completá-lo. E a adverbial causal indicaria o motivo de uma ação, o que não ocorre.",
  },
  {
    d: "media",
    e: "Em “Duvido de que ele venha”, como se classifica a oração “de que ele venha”?",
    o: ["Subordinada substantiva objetiva indireta", "Subordinada substantiva objetiva direta", "Subordinada substantiva completiva nominal", "Subordinada substantiva predicativa", "Subordinada adverbial causal"],
    x: "O verbo duvidar pede a preposição de, e a oração “de que ele venha” completa seu sentido, como objeto indireto: duvido disso. Por isso é subordinada substantiva objetiva indireta.\n\nA objetiva direta não leva preposição. A completiva nominal completaria um nome, e duvido é verbo. A predicativa viria depois de verbo de ligação. E a adverbial causal indicaria o motivo de uma ação.",
  },
  {
    d: "media",
    e: "Em “Fiz como você pediu”, como se classifica a oração “como você pediu”?",
    o: ["Subordinada adverbial conformativa", "Subordinada adverbial comparativa", "Subordinada adverbial causal", "Subordinada adverbial concessiva", "Subordinada adverbial proporcional"],
    x: "A oração “como você pediu” indica que a ação principal, fiz, foi realizada de acordo com algo: o pedido. Por isso é subordinada adverbial conformativa, introduzida por como. Outras conjunções conformativas são conforme, segundo e consoante.\n\nA comparativa estabeleceria comparação. A causal indicaria o motivo. A concessiva indicaria oposição. E a proporcional indicaria variação paralela.",
  },
  {
    d: "media",
    e: "Em “Ele corre mais do que eu”, como se classifica a oração subentendida “do que eu corro”?",
    o: ["Subordinada adverbial comparativa", "Subordinada adverbial conformativa", "Subordinada adverbial proporcional", "Subordinada adverbial causal", "Subordinada adverbial concessiva"],
    x: "A oração “do que eu corro”, com o verbo subentendido, estabelece uma comparação com a ação principal: ele corre mais do que eu corro. Por isso é subordinada adverbial comparativa, introduzida por que ou do que depois de mais, menos, maior, menor.\n\nA conformativa indicaria conformidade. A proporcional indicaria variação paralela. A causal indicaria o motivo. E a concessiva indicaria oposição.",
  },
  {
    d: "media",
    e: "Em “À medida que estudava, aprendia mais”, como se classifica a oração “à medida que estudava”?",
    o: ["Subordinada adverbial proporcional", "Subordinada adverbial temporal", "Subordinada adverbial causal", "Subordinada adverbial conformativa", "Subordinada adverbial concessiva"],
    x: "A oração “à medida que estudava” indica uma ação que cresce ou varia paralelamente à da principal: quanto mais estudava, mais aprendia. Por isso é subordinada adverbial proporcional, introduzida por à medida que. Outras locuções proporcionais são à proporção que e quanto mais.\n\nA temporal indicaria o tempo, sem a ideia de variação conjunta. A causal indicaria o motivo. A conformativa indicaria conformidade. E a concessiva indicaria oposição.",
  },
  {
    d: "media",
    e: "Em “Os alunos, que estudaram, passaram”, como se classifica a oração “que estudaram”?",
    o: ["Subordinada adjetiva explicativa", "Subordinada adjetiva restritiva", "Subordinada substantiva objetiva direta", "Subordinada adverbial causal", "Coordenada sindética explicativa"],
    x: "A oração “que estudaram” vem entre vírgulas e apenas acrescenta uma informação sobre os alunos, todos eles: os alunos, que por sinal estudaram, passaram. Por isso é subordinada adjetiva explicativa, introduzida pelo pronome relativo que.\n\nA restritiva não teria vírgulas, e delimitaria os alunos. A substantiva objetiva direta completaria um verbo. A adverbial causal indicaria o motivo. E a coordenada explicativa justificaria uma ordem ou afirmação anterior.",
  },
  {
    d: "media",
    e: "Em “Os alunos que estudaram passaram”, como se classifica a oração “que estudaram”?",
    o: ["Subordinada adjetiva restritiva", "Subordinada adjetiva explicativa", "Subordinada substantiva objetiva direta", "Subordinada adverbial causal", "Coordenada sindética explicativa"],
    x: "A oração “que estudaram” não vem entre vírgulas e delimita o termo alunos: passaram apenas os que estudaram. Por isso é subordinada adjetiva restritiva, introduzida pelo pronome relativo que.\n\nA explicativa teria vírgulas, e valeria para todos os alunos. A substantiva objetiva direta completaria um verbo. A adverbial causal indicaria o motivo. E a coordenada explicativa justificaria uma ordem ou afirmação anterior.",
  },
  {
    d: "media",
    e: "Em “Ao chegar, saudou todos”, como se classifica a oração “ao chegar”?",
    o: ["Subordinada adverbial temporal reduzida de infinitivo", "Subordinada adverbial causal reduzida de infinitivo", "Subordinada adverbial condicional desenvolvida", "Subordinada substantiva objetiva direta", "Coordenada sindética aditiva"],
    x: "A oração “ao chegar” indica o tempo da ação principal, saudou: quando chegou. Está no infinitivo, sem conjunção, e por isso é reduzida de infinitivo. É subordinada adverbial temporal, equivalente a quando chegou, que é a forma desenvolvida.\n\nA causal indicaria o motivo. A condicional desenvolvida teria conjunção como se. A substantiva objetiva direta completaria um verbo. E a coordenada aditiva seria independente, o que não ocorre.",
  },
  {
    d: "media",
    e: "Em “Terminada a aula, saímos”, como se classifica a oração “terminada a aula”?",
    o: ["Subordinada adverbial temporal reduzida de particípio", "Subordinada adverbial causal reduzida de particípio", "Subordinada adjetiva restritiva", "Subordinada substantiva objetiva direta", "Coordenada assindética"],
    x: "A oração “terminada a aula” indica o tempo da ação principal, saímos: depois que terminou a aula. Está no particípio, sem conjunção, e por isso é reduzida de particípio. É subordinada adverbial temporal, equivalente a quando terminou a aula.\n\nA causal indicaria o motivo. A adjetiva restritiva teria pronome relativo. A substantiva objetiva direta completaria um verbo. E a coordenada assindética seria independente da outra.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre oração subordinada desenvolvida e reduzida?",
    o: ["A desenvolvida tem conjunção; a reduzida tem verbo em forma nominal", "A desenvolvida não tem verbo, e a reduzida tem", "A desenvolvida é sempre coordenada, e a reduzida, subordinada", "A desenvolvida só ocorre com se", "Não há diferença entre elas"],
    x: "A oração subordinada desenvolvida é introduzida por conjunção ou pronome relativo e tem verbo no indicativo ou no subjuntivo: quando chegou. A reduzida não tem conjunção e tem o verbo em forma nominal, que pode ser infinitivo, gerúndio ou particípio: ao chegar.\n\nAs duas têm verbo. As duas são subordinadas. A desenvolvida não se restringe a se. E há, sim, diferença: a forma do verbo e a presença da conjunção.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra que é conjunção integrante?",
    o: ["Ela afirmou que viria.", "O livro que li é bom.", "Ele é mais alto que o irmão.", "Estudou tanto que passou.", "Que dia lindo!"],
    x: "Em ela afirmou que viria, o que introduz a oração “que viria”, que completa o verbo afirmou como objeto direto. Não retoma nenhum termo, e por isso é conjunção integrante, que introduz orações subordinadas substantivas.\n\nEm o livro que li é bom, o que retoma livro, e é pronome relativo. Em mais alto que o irmão, é conjunção comparativa. Em estudou tanto que passou, é conjunção consecutiva. E em que dia lindo, é palavra exclamativa.",
  },
  {
    d: "media",
    e: "Qual das expressões abaixo é uma locução conjuntiva subordinativa?",
    o: ["à medida que", "em frente a", "junto a", "acerca de", "antes de"],
    x: "À medida que liga duas orações, termina em que e exprime proporção: à medida que estudava, aprendia. É locução conjuntiva subordinativa proporcional. As locuções conjuntivas terminam, em geral, em que.\n\nEm frente a, junto a, acerca de e antes de terminam em preposição e ligam termos, e não orações: são locuções prepositivas. A diferença é que a conjuntiva liga orações, e a prepositiva liga termos.",
  },
  {
    d: "media",
    e: "Em qual das frases há oração subordinada adverbial consecutiva?",
    o: ["Estudou tanto que passou.", "Estudou para que passasse.", "Estudou embora estivesse cansado.", "Estudou porque queria passar.", "Estudou quando chegou."],
    x: "Em estudou tanto que passou, a oração “que passou” exprime a consequência da intensidade de tanto: o resultado do estudo foi passar. É subordinada adverbial consecutiva.\n\nEm estudou para que passasse, a oração é final, e indica o objetivo. Em embora estivesse cansado, é concessiva. Em porque queria passar, é causal. E em quando chegou, é temporal.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração subordinada é adverbial final?",
    o: ["Estudou a fim de que passasse.", "Estudou tanto que passou.", "Estudou embora estivesse cansado.", "Estudou porque queria passar.", "Estudou quando chegou."],
    x: "A locução a fim de que introduz o objetivo da ação principal, estudou: o estudo tem a finalidade de que passasse. É subordinada adverbial final, como as introduzidas por para que, com a mesma ideia de propósito.\n\nEm estudou tanto que passou, a oração é consecutiva. Em embora estivesse cansado, é concessiva. Em porque queria passar, é causal. E em quando chegou, é temporal.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração subordinada é adverbial condicional?",
    o: ["Caso chova, ficaremos em casa.", "Chovia, por isso ficamos em casa.", "Ficamos em casa porque chovia.", "Ficamos em casa embora chovesse.", "Ficamos em casa quando chovia."],
    x: "A conjunção caso introduz uma condição para a ação principal, ficaremos em casa: ficaremos se chover. É subordinada adverbial condicional, como as introduzidas por se, contanto que e desde que.\n\nEm chovia, por isso ficamos em casa, as orações são coordenadas. Em porque chovia, a oração é causal. Em embora chovesse, é concessiva. E em quando chovia, é temporal.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração subordinada é adverbial concessiva?",
    o: ["Ainda que chovesse, sairíamos.", "Se chovesse, não sairíamos.", "Como chovia, não saímos.", "Quando chovia, não saíamos.", "Saímos para que chovesse."],
    x: "A locução ainda que apresenta um fato que seria obstáculo, a chuva, mas que não impede a ação principal, sairíamos. É subordinada adverbial concessiva, como as introduzidas por embora, mesmo que e conquanto.\n\nSe chovesse é condicional. Como chovia, no início da frase, é causal. Quando chovia é temporal. E para que chovesse é final. Nenhuma delas apresenta oposição que não impede a ação.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração subordinada é adverbial causal?",
    o: ["Já que chegou cedo, esperou.", "Quando chegou, esperou.", "Se chegou cedo, esperou.", "Embora chegasse cedo, esperou.", "Esperou para que chegasse cedo."],
    x: "A locução já que apresenta o motivo da ação principal, esperou: a causa é que chegou cedo. É subordinada adverbial causal, como as introduzidas por porque, visto que e uma vez que.\n\nQuando chegou é temporal. Se chegou é condicional. Embora chegasse é concessiva. E para que chegasse é final. Cada uma indica uma circunstância diferente da oração principal, e a causal é a que apresenta o motivo.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração subordinada é adverbial conformativa?",
    o: ["Fez tudo conforme combinamos.", "Fez tudo porque combinamos.", "Fez tudo para que combinássemos.", "Fez tudo embora combinássemos.", "Fez tudo quando combinamos."],
    x: "A conjunção conforme indica que a ação principal, fez tudo, seguiu o que foi combinado: de acordo com o combinado. É subordinada adverbial conformativa, como as introduzidas por como, segundo e consoante.\n\nPorque combinamos é causal. Para que combinássemos é final. Embora combinássemos é concessiva. E quando combinamos é temporal, e indica apenas o momento do combinado.",
  },
  {
    d: "media",
    e: "O que distingue uma oração coordenada de uma subordinada?",
    o: ["A coordenada é independente, e a subordinada exerce função na outra", "A coordenada exerce função na outra, e a subordinada é independente", "A coordenada não tem verbo", "A subordinada nunca tem conjunção", "Não há diferença entre elas"],
    x: "A oração coordenada é sintaticamente independente: não exerce função na outra, e a ligação entre as duas é de sentido. A subordinada exerce uma função sintática dentro de outra oração, a principal, como sujeito, objeto, adjunto ou outro termo.\n\nInverter as definições contraria a gramática. Toda oração tem verbo. A subordinada tem conjunção ou pronome relativo, quando desenvolvida. E há, sim, diferença entre as duas.",
  },
  {
    d: "media",
    e: "Quais são os três grandes grupos de orações subordinadas, conforme a função que exercem?",
    o: ["Substantivas, adjetivas e adverbiais", "Aditivas, adversativas e alternativas", "Causais, finais e consecutivas", "Principais, coordenadas e absolutas", "Restritivas, explicativas e conclusivas"],
    x: "As orações subordinadas se dividem, quanto à função, em substantivas (exercem função de substantivo, como sujeito ou objeto), adjetivas (modificam um substantivo, como adjetivos) e adverbiais (indicam circunstâncias, como tempo, causa e condição).\n\nAditivas, adversativas e alternativas são tipos de coordenadas. Causais, finais e consecutivas são subtipos das adverbiais. Principais, coordenadas e absolutas não são subordinadas. E restritivas e explicativas dividem as adjetivas, e conclusivas são coordenadas.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração subordinada é substantiva?",
    o: ["Todos esperam que a chuva pare.", "A casa que comprei é grande.", "Quando chegou, jantou.", "Embora cansado, trabalhou.", "Se puder, ligue."],
    x: "Em todos esperam que a chuva pare, a oração “que a chuva pare” completa o verbo esperam como objeto direto: todos esperam isso. Exerce função de substantivo, e por isso é subordinada substantiva objetiva direta.\n\nEm a casa que comprei é grande, a oração modifica casa, e é adjetiva. Em quando chegou, é adverbial temporal. Em embora cansado, é adverbial concessiva reduzida. E em se puder, é adverbial condicional.",
  },

  {
    d: "media",
    e: "Em “Parece que vai chover”, como se classifica a oração “que vai chover”?",
    o: ["Subordinada substantiva subjetiva", "Subordinada substantiva objetiva direta", "Subordinada substantiva predicativa", "Subordinada adjetiva restritiva", "Subordinada adverbial causal"],
    x: "A oração “que vai chover” exerce a função de sujeito do verbo parece: o que parece? Que vai chover. O verbo parecer, nesse emprego, é impessoal, fica na terceira pessoa do singular e tem como sujeito a oração. Por isso ela é subordinada substantiva subjetiva.\n\nA objetiva direta completaria um verbo transitivo direto, e parecer não o é nesse caso. A predicativa viria depois de verbo de ligação com sujeito expresso. A adjetiva restritiva modificaria um substantivo. E a adverbial causal indicaria o motivo de uma ação.",
  },
  {
    d: "media",
    e: "Em “O livro cujas páginas rasgaram é velho”, como se classifica a oração “cujas páginas rasgaram”?",
    o: ["Subordinada adjetiva restritiva", "Subordinada adjetiva explicativa", "Subordinada substantiva subjetiva", "Subordinada adverbial causal", "Coordenada sindética aditiva"],
    x: "A oração “cujas páginas rasgaram” modifica o substantivo livro, e o delimita: não é qualquer livro, é o que teve as páginas rasgadas. Como é introduzida pelo pronome relativo cujo e não vem entre vírgulas, é subordinada adjetiva restritiva.\n\nA explicativa teria vírgulas, e acrescentaria uma informação sobre o livro já determinado. A substantiva subjetiva faria o papel de sujeito. A adverbial causal indicaria o motivo. E a coordenada aditiva seria independente.",
  },
  {
    d: "media",
    e: "Qual é a função do pronome relativo em um período composto por subordinação?",
    o: ["Retomar um termo anterior e introduzir uma oração adjetiva", "Introduzir uma oração substantiva sem retomar termo algum", "Ligar duas orações coordenadas de mesmo valor", "Indicar o tempo da ação principal", "Exprimir emoção do falante"],
    x: "O pronome relativo retoma um termo da oração anterior, chamado antecedente, e introduz uma oração subordinada adjetiva. Exerce, além disso, uma função sintática dentro da oração que introduz: em o livro que li, o que retoma livro e é objeto direto de li.\n\nA conjunção integrante, e não o relativo, introduz oração substantiva sem retomar termo algum. A conjunção coordenativa liga orações de mesmo valor. A conjunção ou locução temporal indica o tempo. E a interjeição exprime emoção.",
  },
  {
    d: "media",
    e: "Qual é a função da conjunção integrante em um período composto por subordinação?",
    o: ["Introduzir uma oração subordinada substantiva", "Retomar um termo anterior e introduzir uma oração adjetiva", "Indicar uma circunstância como tempo ou causa", "Ligar duas orações coordenadas", "Substituir o sujeito da oração"],
    x: "A conjunção integrante, que ou se, introduz uma oração subordinada substantiva, que exerce função de sujeito, objeto, predicativo ou aposto da oração principal. Não retoma termo algum e não exerce função na oração que introduz: em disse que viria, o que só liga.\n\nRetomar um termo anterior é função do pronome relativo. Indicar uma circunstância é função da conjunção adverbial. Ligar orações coordenadas é função da conjunção coordenativa. E substituir o sujeito é função do pronome.",
  },
  {
    d: "media",
    e: "Em qual das frases há oração subordinada substantiva objetiva indireta?",
    o: ["Duvido de que ele venha.", "Disse que ele viria.", "É certo que ele virá.", "O problema é que ele não veio.", "Tenho medo de que ele falhe."],
    x: "Em duvido de que ele venha, o verbo duvidar pede a preposição de, e a oração “de que ele venha” completa seu sentido como objeto indireto: duvido disso. É subordinada substantiva objetiva indireta.\n\nEm disse que ele viria, a oração é objetiva direta. Em é certo que ele virá, é subjetiva. Em o problema é que ele não veio, é predicativa. E em tenho medo de que ele falhe, é completiva nominal, porque completa o substantivo medo.",
  },
  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual das frases a oração “de que ele falhe” é completiva nominal, e não objetiva indireta?",
    o: ["Tenho medo de que ele falhe.", "Duvido de que ele falhe.", "Preciso de que ele falhe.", "Gosto de que ele falhe.", "Desconfio de que ele falhe."],
    x: "Em tenho medo de que ele falhe, a oração completa o sentido do substantivo medo, e é completiva nominal. O que determina a classificação é o termo que ela completa: um nome.\n\nEm duvido de que, preciso de que, gosto de que e desconfio de que, a oração completa o sentido de um verbo, duvidar, precisar, gostar e desconfiar, com preposição. Por isso são objetivas indiretas.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a oração introduzida por que é subordinada adverbial consecutiva, e não final?",
    o: ["Ele estudou tanto que passou.", "Ele estudou para que passasse.", "Ele estudou a fim de que passasse.", "Ele estudou com o objetivo de que passasse.", "Ele estudou visando a que passasse."],
    x: "Em ele estudou tanto que passou, a oração exprime a consequência real e efetiva do estudo: o resultado foi que passou. Vem depois de tanto, e é consecutiva.\n\nNas outras frases, a oração exprime o objetivo, a intenção do estudo, e não o resultado já alcançado: para que passasse, a fim de que passasse, com o objetivo de que passasse, visando a que passasse. Todas são finais.",
  },
  {
    d: "dificil",
    e: "Qual é a diferença entre “Embora estudasse, não passou” e “Estudava, mas não passava”?",
    o: ["A primeira tem oração subordinada concessiva, e a segunda, coordenada adversativa", "A primeira tem oração coordenada adversativa, e a segunda, subordinada concessiva", "As duas têm orações subordinadas concessivas", "As duas têm orações coordenadas adversativas", "A primeira tem oração causal, e a segunda, final"],
    x: "Em embora estudasse, não passou, a oração “embora estudasse” depende da principal e apresenta um fato que seria esperado como causa de passar, mas que não produz esse efeito: é subordinada adverbial concessiva. Em estudava, mas não passava, as duas orações são independentes, e a segunda, introduzida por mas, exprime oposição: é coordenada sindética adversativa.\n\nInverter as classificações, ou dizer que as duas são da mesma espécie, contraria a gramática. E nenhuma das duas é causal nem final.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a oração introduzida por porque é subordinada adverbial causal, e não coordenada explicativa?",
    o: ["Não saí porque estava chovendo.", "Não saia, porque está chovendo.", "Corra, porque o ônibus vai sair.", "Estude, porque a prova é difícil.", "Venha cedo, porque haverá fila."],
    x: "Em não saí porque estava chovendo, a oração exprime a causa do fato de eu não ter saído: o motivo de não ter saído foi a chuva. É subordinada adverbial causal, sem vírgula antes de porque.\n\nNas outras frases, a oração justifica uma ordem, não a causa de um fato: não saia, corra, estude, venha. São coordenadas sindéticas explicativas, com vírgula antes de porque. A diferença está entre justificar uma ordem e indicar a causa de um fato.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a oração “que ele chegou” é substantiva predicativa, e não objetiva direta?",
    o: ["O fato é que ele chegou.", "Disseram que ele chegou.", "Soube que ele chegou.", "Percebi que ele chegou.", "Vi que ele chegou."],
    x: "Em o fato é que ele chegou, o verbo é de ligação, e a oração atribui uma característica ao sujeito o fato: o fato é isto. Por isso é subordinada substantiva predicativa.\n\nEm disseram, soube, percebi e vi que ele chegou, os verbos são transitivos diretos, e a oração completa o sentido deles como objeto direto: disseram isso, soube disso, percebi isso, vi isso. São, portanto, objetivas diretas.",
  },
  {
    d: "dificil",
    e: "No período “Disse que viria quando pudesse, mas não veio”, como se classificam, respectivamente, as quatro orações?",
    o: ["Principal, subordinada substantiva objetiva direta, subordinada adverbial temporal e coordenada adversativa", "Principal, subordinada adjetiva, subordinada causal e coordenada aditiva", "Coordenada, subordinada temporal, subordinada causal e principal", "Principal, coordenada, subordinada final e coordenada adversativa", "Principal, subordinada condicional, coordenada explicativa e principal"],
    x: "Disse é a oração principal. A oração “que viria” completa disse como objeto direto: substantiva objetiva direta. A oração “quando pudesse” indica o tempo da vinda: adverbial temporal. E a oração “mas não veio” se liga à principal por mas, com oposição: coordenada sindética adversativa.\n\nAs demais sequências trocam as funções: adjetiva, causal, aditiva, final, condicional e explicativa não correspondem às conjunções e aos sentidos que o período apresenta.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a oração reduzida de infinitivo tem valor causal?",
    o: ["Por ter estudado, foi aprovado.", "Ao chegar, saudou todos.", "Para estudar, foi à biblioteca.", "Apesar de estudar, foi reprovado.", "Antes de sair, apagou a luz."],
    x: "Em por ter estudado, foi aprovado, a oração reduzida de infinitivo indica a causa da aprovação: foi aprovado porque estudou. Tem valor causal.\n\nAo chegar equivale a quando chegou, e é temporal. Para estudar indica finalidade. Apesar de estudar equivale a embora estudasse, e é concessiva. E antes de sair é temporal, e indica que a ação de sair vem depois da de apagar a luz.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre as orações subordinadas adjetivas está de acordo com a gramática normativa?",
    o: ["Modificam um substantivo e são introduzidas por pronome relativo", "Exercem função de substantivo e são introduzidas por conjunção integrante", "Indicam circunstâncias da ação e são introduzidas por conjunção adverbial", "São independentes e se ligam por conjunção coordenativa", "Nunca têm verbo"],
    x: "As orações subordinadas adjetivas exercem a função de adjetivo: modificam um substantivo da oração principal, e são introduzidas por pronome relativo, como que, quem, o qual, cujo, onde. Dividem-se em restritivas e explicativas.\n\nExercer função de substantivo e ser introduzida por conjunção integrante é característica das substantivas. Indicar circunstâncias é característica das adverbiais. Ser independente é característica das coordenadas. E toda oração tem verbo.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre as orações subordinadas adverbiais está de acordo com a gramática normativa?",
    o: ["Indicam circunstâncias da oração principal, como tempo, causa, condição e finalidade", "Exercem função de sujeito ou de objeto da oração principal", "Modificam sempre um substantivo e são introduzidas por pronome relativo", "São independentes entre si e se ligam por conjunção aditiva", "Só ocorrem no início do período"],
    x: "As orações subordinadas adverbiais exercem a função de adjunto adverbial em relação à principal: indicam circunstâncias como tempo, causa, condição, finalidade, concessão, consequência, conformidade, comparação e proporção. São introduzidas por conjunções ou locuções subordinativas.\n\nExercer função de sujeito ou de objeto é característica das substantivas. Modificar um substantivo é característica das adjetivas. Ser independente é característica das coordenadas. E as adverbiais podem vir antes, depois ou no meio da principal.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre as orações subordinadas reduzidas está de acordo com a gramática normativa?",
    o: ["Não têm conjunção e usam verbo em forma nominal", "Têm sempre conjunção e verbo no indicativo", "Só ocorrem em orações coordenadas", "Não têm verbo", "São sempre iniciadas por pronome relativo"],
    x: "As orações subordinadas reduzidas não são introduzidas por conjunção nem por pronome relativo, e têm o verbo em uma das formas nominais: infinitivo (ao chegar), gerúndio (chegando) ou particípio (terminada a aula). Podem ser substantivas, adjetivas ou adverbiais.\n\nAs orações com conjunção e verbo no indicativo ou no subjuntivo são as desenvolvidas. As reduzidas não ocorrem em coordenadas, têm verbo, e não são iniciadas por pronome relativo.",
  },
];
