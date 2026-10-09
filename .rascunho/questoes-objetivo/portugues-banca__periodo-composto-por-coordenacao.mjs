/* Rascunho — Português de banca / Período composto por coordenação.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram classificações assentadas na gramática
   normativa: período simples e composto, oração absoluta, orações
   coordenadas assindéticas e sindéticas (aditivas, adversativas,
   alternativas, conclusivas e explicativas), conjunções e correlações
   (não só... mas também, ora... ora, quer... quer), substituição de
   conjunções, pontuação, diferença entre coordenação e subordinação,
   período misto, e a distinção entre a explicativa e a causal. Ficaram de
   fora, de propósito, os casos em que a classificação é discutida (o e com
   valor adversativo, o porque ambíguo entre explicativa e causal fora de
   contexto, o mas ligando termos). */

export const materia = "portugues-banca";
export const tema = "Período composto por coordenação";
export const arquivo = "portugues-banca__periodo-composto-por-coordenacao";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual é a diferença entre período simples e período composto?",
    o: ["O simples tem uma só oração, e o composto tem duas ou mais", "O simples tem duas orações, e o composto tem uma", "O simples não tem verbo, e o composto tem", "O simples só tem sujeito, e o composto só tem predicado", "Não há diferença entre eles"],
    x: "O período é o enunciado formado por uma ou mais orações, e cada oração tem um verbo ou uma locução verbal. O período simples tem uma só oração, que é chamada oração absoluta, como em o aluno estudou. O período composto tem duas ou mais orações: o aluno estudou e passou.\n\nDizer que o simples tem duas orações inverte a definição. Os dois têm verbo, porque a oração se define pelo verbo. A oração pode ter sujeito e predicado, no simples e no composto. E há, sim, diferença entre os dois.",
  },
  {
    d: "facil",
    e: "Na frase “Fui ao mercado e comprei pão”, como se classifica o período quanto ao número de orações?",
    o: ["Composto, com duas orações", "Simples, com uma oração", "Simples, com duas orações", "Composto, com uma oração", "Composto, com três orações"],
    x: "Há dois verbos, fui e comprei, e portanto duas orações: fui ao mercado e comprei pão. Como há mais de uma oração, o período é composto. As duas se ligam pela conjunção e, em uma relação de coordenação.\n\nO período simples tem uma só oração. Dizer simples com duas orações, ou composto com uma, contradiz a definição. E há apenas dois verbos, e não três.",
  },
  {
    d: "facil",
    e: "Em “Chegou, viu, venceu”, como se classificam as orações?",
    o: ["Coordenadas assindéticas", "Coordenadas sindéticas", "Subordinadas substantivas", "Subordinadas adjetivas", "Subordinadas adverbiais"],
    x: "As orações chegou, viu e venceu estão lado a lado, sem conjunção que as ligue, e uma não depende da outra. São orações coordenadas assindéticas, separadas por vírgula, que ocupam a posição que a conjunção ocuparia.\n\nAs coordenadas sindéticas teriam conjunção, como em chegou e viu. As subordinadas substantivas, adjetivas e adverbiais dependem de uma oração principal, o que não ocorre: nenhuma das três depende das outras.",
  },
  {
    d: "facil",
    e: "Em “Estudou muito, mas não passou”, como se classifica a oração introduzida por mas?",
    o: ["Coordenada sindética adversativa", "Coordenada sindética aditiva", "Coordenada sindética alternativa", "Coordenada sindética conclusiva", "Coordenada sindética explicativa"],
    x: "A conjunção mas liga duas orações e estabelece entre elas uma relação de oposição: estudou muito, e o resultado esperado seria passar, mas não passou. A oração que ela introduz é coordenada sindética adversativa.\n\nA aditiva soma ideias, com e ou nem. A alternativa apresenta possibilidades que se excluem, com ou. A conclusiva tira uma consequência, com logo ou portanto. E a explicativa justifica a ordem da oração anterior, com pois ou que.",
  },
  {
    d: "facil",
    e: "Em “Ou você estuda, ou você trabalha”, que ideia a repetição de ou estabelece entre as orações?",
    o: ["Alternância entre duas possibilidades", "Soma de duas ações", "Oposição entre as orações", "Conclusão da primeira oração", "Explicação da primeira oração"],
    x: "A conjunção ou, repetida, apresenta duas possibilidades que se excluem: ou uma coisa, ou outra. A ideia é de alternância, e as orações são coordenadas sindéticas alternativas. Outras conjunções alternativas são ora... ora, quer... quer e seja... seja.\n\nA soma é própria da conjunção e. A oposição, de mas e porém. A conclusão, de logo e portanto. E a explicação, de pois e que. Nenhuma dessas relações é a de escolha entre duas possibilidades.",
  },
  {
    d: "facil",
    e: "Em “Penso, logo existo”, como se classifica a oração introduzida por logo?",
    o: ["Coordenada sindética conclusiva", "Coordenada sindética adversativa", "Coordenada sindética aditiva", "Coordenada sindética alternativa", "Coordenada sindética explicativa"],
    x: "A conjunção logo introduz uma conclusão tirada da oração anterior: se penso, concluo que existo. Por isso a oração introduzida por ela é coordenada sindética conclusiva. Outras conjunções conclusivas são portanto, por isso, assim e por conseguinte.\n\nA adversativa expressa oposição. A aditiva soma. A alternativa apresenta escolha. E a explicativa justifica a ordem dada na oração anterior. Nenhuma delas tira uma consequência.",
  },
  {
    d: "facil",
    e: "Qual conjunção completa a frase “Venha cedo, ___ haverá fila”, de modo a explicar a ordem dada?",
    o: ["pois", "mas", "logo", "ou", "nem"],
    x: "Pois, no início da oração, justifica a ordem dada na primeira: venha cedo, e a razão é que haverá fila. É conjunção coordenativa explicativa, e a oração é coordenada sindética explicativa. Outras explicativas são que, porque e porquanto.\n\nMas é adversativa, e exprimiria oposição. Logo é conclusiva, e exprimiria consequência. Ou é alternativa, e apresentaria escolha. E nem é aditiva, e somaria uma negação. Só pois justifica a ordem.",
  },
  {
    d: "facil",
    e: "Em “Ele cantou e dançou”, como se classifica a oração introduzida por e?",
    o: ["Coordenada sindética aditiva", "Coordenada sindética adversativa", "Coordenada sindética alternativa", "Coordenada sindética conclusiva", "Coordenada sindética explicativa"],
    x: "A conjunção e soma a segunda ação à primeira: ele cantou, e também dançou. A oração que ela introduz é coordenada sindética aditiva. Outras conjunções aditivas são nem, não só... mas também e bem como.\n\nA adversativa expressa oposição. A alternativa apresenta escolha. A conclusiva tira uma consequência. E a explicativa justifica a oração anterior. A frase apenas soma duas ações, sem oposição nem consequência.",
  },
  {
    d: "facil",
    e: "Quantas orações há no período “Chegamos, jantamos e dormimos”?",
    o: ["Três", "Duas", "Uma", "Quatro", "Cinco"],
    x: "Cada oração se define por um verbo ou locução verbal. No período há três verbos: chegamos, jantamos e dormimos. Por isso há três orações, todas coordenadas: duas assindéticas, separadas por vírgula, e uma sindética aditiva, introduzida por e.\n\nDizer que há duas ou uma ignora um dos verbos. Dizer quatro ou cinco conta mais orações do que há verbos. A contagem das orações se faz sempre pelos verbos do período.",
  },
  {
    d: "facil",
    e: "Qual das conjunções abaixo liga orações coordenadas aditivas?",
    o: ["e", "mas", "ou", "logo", "pois"],
    x: "E é a conjunção aditiva mais comum, e liga orações ou termos, somando ideias: estudou e trabalhou. Outras aditivas são nem, não só... mas também e bem como.\n\nMas é adversativa, e expressa oposição. Ou é alternativa, e apresenta escolha. Logo é conclusiva, e tira consequência. E pois, no início da oração, é explicativa, e justifica a oração anterior.",
  },
  {
    d: "facil",
    e: "Qual das conjunções abaixo é adversativa?",
    o: ["contudo", "portanto", "nem", "ou", "porque"],
    x: "Contudo expressa oposição entre duas orações: estudou muito, contudo não passou. É conjunção coordenativa adversativa, assim como mas, porém, todavia, entretanto e no entanto.\n\nPortanto é conclusiva. Nem é aditiva, e soma ideias negativas. Ou é alternativa, e apresenta escolha. E porque, nessa lista, é conjunção explicativa ou causal, que não expressa oposição.",
  },
  {
    d: "facil",
    e: "Em “Choveu, mas fomos à praia”, que ideia a conjunção mas estabelece entre as orações?",
    o: ["Oposição", "Soma", "Alternância", "Conclusão", "Explicação"],
    x: "A chuva seria um obstáculo para ir à praia, mas a segunda oração apresenta o contrário do esperado: fomos. A conjunção mas liga as duas orações com ideia de oposição, e é adversativa.\n\nA soma é própria da conjunção e. A alternância é própria de ou. A conclusão é própria de logo e portanto. E a explicação é própria de pois e que. A ideia de contraste afasta todas elas.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "No período “Fui ao mercado, comprei pão e voltei para casa”, como se classificam, respectivamente, as três orações?",
    o: ["Assindética, assindética e sindética aditiva", "Sindética aditiva nas três", "Assindética nas três", "Sindética aditiva, sindética aditiva e assindética", "Principal, subordinada e coordenada"],
    x: "A primeira oração, fui ao mercado, inicia o período e não tem conjunção: é coordenada assindética. A segunda, comprei pão, também não tem conjunção, e está separada por vírgula: é coordenada assindética. A terceira, e voltei para casa, é introduzida por e: coordenada sindética aditiva.\n\nDizer que as três são sindéticas, ou assindéticas, ignora a conjunção da terceira. Inverter a ordem coloca a sindética no início. E principal e subordinada não se aplicam, porque as orações são independentes.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo pode substituir mas em “Estudou muito, mas não passou”, sem alterar o sentido?",
    o: ["porém", "portanto", "logo", "pois", "ou"],
    x: "Mas é conjunção adversativa, e pode ser substituída por outra adversativa sem alterar o sentido: porém, contudo, todavia, entretanto. Em estudou muito, porém não passou, a ideia de oposição se mantém.\n\nPortanto e logo são conclusivas, e dariam a ideia de consequência. Pois é explicativa ou conclusiva, conforme a posição. Ou é alternativa. Qualquer uma dessas trocas mudaria a relação entre as orações.",
  },
  {
    d: "media",
    e: "Em “Não só estudou, mas também trabalhou”, como se classifica a oração introduzida por mas também?",
    o: ["Coordenada sindética aditiva", "Coordenada sindética adversativa", "Coordenada sindética alternativa", "Coordenada sindética conclusiva", "Coordenada sindética explicativa"],
    x: "A estrutura não só... mas também soma uma segunda ação à primeira, com ideia de acréscimo: estudou e também trabalhou. É conjunção aditiva correlativa, e a oração é coordenada sindética aditiva. Apesar da presença de mas, não há oposição.\n\nA adversativa expressaria contraste. A alternativa apresentaria escolha. A conclusiva tiraria consequência. E a explicativa justificaria a oração anterior. A ideia de soma afasta todas elas.",
  },
  {
    d: "media",
    e: "Em “Não estudou nem trabalhou”, como se classifica a oração introduzida por nem?",
    o: ["Coordenada sindética aditiva", "Coordenada sindética adversativa", "Coordenada sindética alternativa", "Coordenada sindética conclusiva", "Coordenada sindética explicativa"],
    x: "Nem soma uma segunda ação negativa à primeira: não estudou e não trabalhou. É conjunção aditiva com valor negativo, e a oração que ela introduz é coordenada sindética aditiva. Equivale a e não.\n\nA adversativa expressaria oposição. A alternativa apresentaria escolha entre possibilidades. A conclusiva tiraria consequência. E a explicativa justificaria uma oração anterior. A frase apenas soma duas negações.",
  },
  {
    d: "media",
    e: "Em “Ora estuda, ora trabalha”, como se classificam as orações?",
    o: ["Coordenadas sindéticas alternativas", "Coordenadas sindéticas aditivas", "Coordenadas sindéticas adversativas", "Coordenadas assindéticas", "Subordinadas adverbiais"],
    x: "A repetição de ora indica alternância no tempo: em um momento, estuda; em outro, trabalha. Ora... ora é conjunção alternativa correlativa, e as duas orações são coordenadas sindéticas alternativas.\n\nAs aditivas somariam as ações. As adversativas expressariam oposição. As assindéticas não teriam conjunção, o que não é o caso. E as subordinadas dependeriam de uma principal, o que também não ocorre.",
  },
  {
    d: "media",
    e: "Em “Estude, que a prova é difícil”, como se classifica a oração introduzida por que?",
    o: ["Coordenada sindética explicativa", "Subordinada substantiva", "Coordenada sindética aditiva", "Subordinada adjetiva", "Coordenada sindética adversativa"],
    x: "A oração “que a prova é difícil” justifica a ordem estude: é por causa da dificuldade que se deve estudar. Quando introduz uma justificativa da ordem anterior, o que é conjunção explicativa, e a oração é coordenada sindética explicativa.\n\nA subordinada substantiva completaria o verbo estude, o que não ocorre. A aditiva somaria uma ação. A subordinada adjetiva retomaria um termo anterior. E a adversativa expressaria oposição. Nenhuma justifica a ordem.",
  },
  {
    d: "media",
    e: "Qual das conjunções abaixo introduz oração coordenada sindética conclusiva?",
    o: ["portanto", "contudo", "porque", "nem", "ou"],
    x: "Portanto tira uma conclusão da oração anterior: estudou muito, portanto passou. É conjunção coordenativa conclusiva, assim como logo, por isso, então, assim e por conseguinte.\n\nContudo é adversativa, e expressa oposição. Porque é explicativa ou causal, e justifica. Nem é aditiva, e soma ideias negativas. E ou é alternativa, e apresenta escolha.",
  },
  {
    d: "media",
    e: "Qual das conjunções abaixo introduz oração coordenada sindética explicativa?",
    o: ["porquanto", "todavia", "logo", "ou", "e"],
    x: "Porquanto justifica a oração anterior, apresentando a razão do que foi dito: leve o casaco, porquanto está frio. É conjunção coordenativa explicativa, assim como que, pois e porque, quando justificam uma afirmação ou ordem.\n\nTodavia é adversativa. Logo é conclusiva. Ou é alternativa. E e é aditiva. Nenhuma das quatro apresenta a razão do que foi dito antes.",
  },
  {
    d: "media",
    e: "Em qual das frases há orações coordenadas sindéticas adversativas?",
    o: ["Estudou muito, mas não passou.", "Estudou muito e passou.", "Estudou muito, logo passou.", "Ou estuda, ou trabalha.", "Estude, pois a prova é difícil."],
    x: "Em estudou muito, mas não passou, a conjunção mas introduz uma oração que contraria a expectativa criada pela anterior: é adversativa. A segunda oração é coordenada sindética adversativa.\n\nEm estudou muito e passou, a conjunção e é aditiva. Em estudou muito, logo passou, logo é conclusiva. Em ou estuda, ou trabalha, ou é alternativa. E em estude, pois a prova é difícil, pois é explicativa.",
  },
  {
    d: "media",
    e: "Qual das expressões abaixo é uma conjunção alternativa correlativa?",
    o: ["seja... seja", "não só... mas também", "tanto... quanto", "mal... quando", "nem... nem"],
    x: "Seja... seja apresenta duas hipóteses alternativas e é conjunção coordenativa alternativa correlativa: seja estudando, seja trabalhando. Outras são ou... ou, ora... ora e quer... quer.\n\nNão só... mas também e tanto... quanto são correlativas aditivas, pois somam ideias. Nem... nem é aditiva negativa, pois soma negações. Mal... quando expressa tempo, e não alternância. A correlação alternativa exige duas possibilidades que se excluem.",
  },
  {
    d: "media",
    e: "Qual das conjunções abaixo expressa conclusão quando vem depois do verbo, entre vírgulas?",
    o: ["pois", "mas", "ou", "nem", "que"],
    x: "Pois, posposto ao verbo e entre vírgulas, equivale a portanto e exprime conclusão: ele é rico; tem, pois, o direito de escolher. Nessa posição, é conjunção coordenativa conclusiva. No início da oração, o pois é explicativo.\n\nMas é adversativa, e exprime oposição. Ou é alternativa, e apresenta escolha. Nem é aditiva, e soma negações. E que, como conjunção coordenativa, é explicativa, e justifica uma ordem. Só pois muda de valor conforme a posição.",
  },
  {
    d: "media",
    e: "O que significa dizer que as orações coordenadas são sintaticamente independentes?",
    o: ["Nenhuma exerce função sintática na outra", "Nenhuma tem verbo", "Todas têm o mesmo sujeito", "Todas começam por conjunção", "Todas são orações principais"],
    x: "As orações coordenadas são independentes porque nenhuma exerce função sintática dentro da outra: não é sujeito, objeto, adjunto ou complemento da outra. Cada uma tem seu próprio verbo e poderia constituir um período simples. A ligação entre elas é de sentido, e não de dependência.\n\nTodas têm verbo, mas isso é comum a toda oração. Podem ter sujeitos diferentes. Nem todas começam por conjunção, pois as assindéticas não têm. E nenhuma é chamada principal, porque essa denominação se aplica à subordinação.",
  },
  {
    d: "media",
    e: "Em “Ele disse que viria e trouxe o livro”, como se classifica o período?",
    o: ["Composto por coordenação e subordinação", "Simples", "Composto só por coordenação", "Composto só por subordinação", "Sem orações"],
    x: "A oração “que viria” completa o verbo disse, como seu objeto direto: é subordinada substantiva objetiva direta. A oração “e trouxe o livro” é coordenada sindética aditiva em relação a disse. O período tem, portanto, coordenação e subordinação, e é chamado misto.\n\nO período simples tem uma só oração. Dizer só coordenação ou só subordinação ignora uma das duas relações. E um período sempre tem orações.",
  },
  {
    d: "media",
    e: "Em “Quando chegou, ela saiu”, como se classifica o período?",
    o: ["Composto por subordinação", "Composto por coordenação", "Simples", "Misto", "Absoluto"],
    x: "A oração “quando chegou” indica o tempo em que ocorre a ação principal, e depende dela: é subordinada adverbial temporal. A oração principal é ela saiu. O período é composto por subordinação, pois há uma oração que exerce função em relação à outra.\n\nNão é coordenação, porque as orações não são independentes. Não é simples, porque há dois verbos. Não é misto, porque não há coordenação. E absoluto é a oração de um período simples.",
  },
  {
    d: "media",
    e: "Em qual das frases as orações são coordenadas?",
    o: ["Cheguei, jantei e dormi.", "Quando cheguei, jantei.", "Disse que chegaria.", "O livro que li é bom.", "Se chover, ficarei."],
    x: "Em cheguei, jantei e dormi, as três orações são independentes, ligadas por vírgula e pela conjunção e: são coordenadas. Nenhuma exerce função na outra.\n\nEm quando cheguei, jantei, a primeira oração é subordinada adverbial temporal. Em disse que chegaria, a segunda é subordinada substantiva. Em o livro que li é bom, a oração que li é subordinada adjetiva. E em se chover, ficarei, a primeira é subordinada adverbial condicional.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo NÃO é conjunção coordenativa?",
    o: ["embora", "mas", "ou", "logo", "e"],
    x: "Embora é conjunção subordinativa concessiva: ela introduz oração que depende de outra, como em embora estivesse cansado, terminou a prova. Não liga orações independentes.\n\nMas é coordenativa adversativa, ou é coordenativa alternativa, logo é coordenativa conclusiva, e e é coordenativa aditiva. As quatro ligam orações ou termos sem criar dependência.",
  },
  {
    d: "media",
    e: "Em “Estudou, logo passou”, que relação a oração “logo passou” exprime?",
    o: ["Conclusão", "Oposição", "Soma", "Alternância", "Explicação"],
    x: "A oração “logo passou” apresenta a consequência do fato expresso na anterior: estudou, e por isso passou. A relação é de conclusão, e a conjunção logo é conclusiva.\n\nA oposição seria expressa por mas ou porém. A soma, por e ou nem. A alternância, por ou ou ora... ora. E a explicação, por pois ou que. Nenhuma dessas relações é de consequência.",
  },
  {
    d: "media",
    e: "Em “Corra, que o ônibus vai sair”, que relação a oração “que o ônibus vai sair” exprime?",
    o: ["Explicação", "Conclusão", "Oposição", "Soma", "Alternância"],
    x: "A oração “que o ônibus vai sair” justifica a ordem corra: a razão de correr é que o ônibus vai sair. A relação é de explicação, e a conjunção que é explicativa.\n\nA conclusão apresentaria uma consequência. A oposição apresentaria contraste. A soma acrescentaria uma informação. E a alternância apresentaria escolha. Nenhuma dessas relações justifica a ordem dada na primeira oração.",
  },
  {
    d: "media",
    e: "Em “Ele é rico, mas é humilde”, que relação a oração “mas é humilde” exprime?",
    o: ["Oposição", "Soma", "Conclusão", "Alternância", "Explicação"],
    x: "A riqueza costuma levar à ideia de orgulho, e a segunda oração contraria essa expectativa: é humilde. A conjunção mas introduz a oposição, e a oração é coordenada sindética adversativa.\n\nA soma seria expressa por e. A conclusão, por logo. A alternância, por ou. E a explicação, por pois. A ideia de contraste, que a conjunção mas introduz, afasta todas elas, e a segunda oração é coordenada sindética adversativa.",
  },
  {
    d: "media",
    e: "Em “Quer chova, quer faça sol, iremos ao parque”, como se classificam as orações introduzidas por quer?",
    o: ["Alternativas", "Aditivas", "Adversativas", "Conclusivas", "Explicativas"],
    x: "A repetição de quer apresenta duas hipóteses alternativas: chova ou faça sol. Quer... quer é conjunção alternativa correlativa, como ou... ou, ora... ora e seja... seja. As orações introduzidas por ela expressam alternância.\n\nAs aditivas somariam ideias. As adversativas expressariam oposição. As conclusivas tirariam uma consequência. E as explicativas justificariam uma afirmação ou ordem.",
  },
  {
    d: "media",
    e: "Qual é a função de uma conjunção coordenativa?",
    o: ["Ligar orações ou termos de mesma função", "Substituir o sujeito da oração", "Indicar o tempo do verbo", "Qualificar o substantivo", "Exprimir emoção do falante"],
    x: "A conjunção coordenativa liga orações ou termos de mesma função sintática, sem que um dependa do outro, e estabelece entre eles uma relação de soma, oposição, alternância, conclusão ou explicação. É por isso que se divide em aditiva, adversativa, alternativa, conclusiva e explicativa.\n\nSubstituir o sujeito é função do pronome. Indicar o tempo é função do verbo. Qualificar o substantivo é função do adjetivo. E exprimir emoção é função da interjeição.",
  },
  {
    d: "media",
    e: "O que é uma oração absoluta na análise do período?",
    o: ["A que constitui sozinha um período simples", "A que depende de outra oração", "A que tem conjunção coordenativa", "A que não tem verbo", "A que é sempre uma pergunta"],
    x: "A oração absoluta é a que forma, sozinha, um período simples: não está ligada a nenhuma outra por coordenação nem por subordinação. O aluno estudou é oração absoluta, pois o período tem um só verbo.\n\nA que depende de outra é subordinada. A que tem conjunção coordenativa faz parte de um período composto. Toda oração tem verbo. E a oração absoluta pode ser declarativa, interrogativa ou exclamativa.",
  },
  {
    d: "media",
    e: "No período “O aluno estudou, mas não passou”, quantas orações há e como se classificam?",
    o: ["Duas: assindética e sindética adversativa", "Duas: principal e subordinada", "Uma: oração absoluta", "Três: assindética, aditiva e adversativa", "Duas: ambas sindéticas aditivas"],
    x: "Há dois verbos, estudou e passou, e portanto duas orações. A primeira, o aluno estudou, inicia o período e não tem conjunção: é coordenada assindética. A segunda, mas não passou, é introduzida por mas: é coordenada sindética adversativa.\n\nPrincipal e subordinada não se aplicam, porque as orações são independentes. Não é oração absoluta, porque há dois verbos. Não há três orações. E a segunda não é aditiva, porque a conjunção é mas.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre uma oração coordenada assindética e uma sindética?",
    o: ["A assindética não tem conjunção, e a sindética é ligada por conjunção coordenativa", "A assindética tem conjunção subordinativa, e a sindética não tem conjunção", "A assindética depende de uma principal, e a sindética é independente", "A assindética sempre exprime oposição, e a sindética, soma", "Não há diferença entre elas"],
    x: "A oração coordenada assindética é a que não é introduzida por conjunção: ocupa o lugar em que a conjunção estaria, separada da anterior por vírgula, como em chegou, viu, venceu. A oração coordenada sindética é a que é ligada à anterior por conjunção coordenativa: chegou e viu.\n\nDizer que a assindética tem conjunção subordinativa mistura os dois tipos de ligação. As duas são independentes, e nenhuma depende de principal. Nenhuma delas exprime sempre uma só relação. E há, sim, diferença: a presença ou não da conjunção.",
  },
  {
    d: "media",
    e: "Qual das frases reescreve “Estudou muito, mas não passou” sem alterar o sentido?",
    o: ["Estudou muito; contudo, não passou.", "Estudou muito; portanto, não passou.", "Estudou muito, pois não passou.", "Estudou muito ou não passou.", "Estudou muito e passou."],
    x: "Mas e contudo são conjunções adversativas, e a troca mantém a ideia de oposição: estudou muito; contudo, não passou. O ponto e vírgula e a vírgula depois de contudo acompanham a conjunção deslocada para o início da oração.\n\nPortanto é conclusiva, e daria a ideia de consequência. Pois é explicativa, e justificaria. Ou é alternativa. E e passou muda o sentido, porque a segunda oração passa a afirmar o contrário.",
  },
  {
    d: "media",
    e: "Qual das frases reescreve “Ele chegou cedo, logo pôde ajudar” sem alterar o sentido?",
    o: ["Ele chegou cedo; por isso, pôde ajudar.", "Ele chegou cedo; mas pôde ajudar.", "Ele chegou cedo, ou pôde ajudar.", "Ele chegou cedo, pois não pôde ajudar.", "Ele chegou cedo e não pôde ajudar."],
    x: "Logo e por isso são conjunções conclusivas e expressam consequência: ele chegou cedo, e por isso pôde ajudar. A troca mantém a ideia de que ajudar foi consequência de chegar cedo.\n\nMas introduziria oposição. Ou introduziria alternância. Pois não pôde ajudar contradiz a frase original. E e não pôde ajudar nega a consequência, o que muda o sentido.",
  },
  {
    d: "media",
    e: "Em “Cantou, dançou e pulou”, qual é a função da vírgula entre as duas primeiras orações?",
    o: ["Separar orações coordenadas assindéticas", "Isolar um vocativo", "Marcar uma oração intercalada", "Indicar a omissão do verbo", "Separar o sujeito do verbo"],
    x: "As orações cantou e dançou são coordenadas assindéticas, porque não têm conjunção entre elas. A vírgula faz o papel de ligar e separar as duas, ocupando o lugar da conjunção. O e que aparece antes de pulou liga a terceira oração à segunda.\n\nNão há vocativo, porque ninguém é chamado. Não há oração intercalada, porque nada interrompe uma frase. Não há omissão de verbo, porque os três estão presentes. E a vírgula não separa o sujeito do verbo.",
  },
  {
    d: "media",
    e: "Qual dos períodos abaixo NÃO tem orações coordenadas?",
    o: ["Se chover, ficarei em casa.", "Chove e faz frio.", "Estudou, mas não passou.", "Ou estuda, ou trabalha.", "Penso, logo existo."],
    x: "Em se chover, ficarei em casa, a oração “se chover” depende da principal, ficarei em casa, e exprime condição: é subordinada adverbial condicional. O período é composto por subordinação.\n\nEm chove e faz frio, as orações estão ligadas por e. Em estudou, mas não passou, por mas. Em ou estuda, ou trabalha, por ou. E em penso, logo existo, por logo. Todos esses períodos são compostos por coordenação.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual das frases a oração introduzida por porque é coordenada explicativa, e não subordinada causal?",
    o: ["Não saia, porque está chovendo.", "Não saí porque estava chovendo.", "Faltou porque estava doente.", "Chegou tarde porque perdeu o ônibus.", "Ficou em casa porque quis."],
    x: "Em não saia, porque está chovendo, a oração com porque justifica a ordem dada na primeira: a razão de não sair é a chuva. Como justifica uma ordem ou afirmação, e não a causa de um fato, é coordenada sindética explicativa, com vírgula antes de porque.\n\nNas outras frases, porque introduz a causa de um fato expresso na oração principal: o motivo de não ter saído, de ter faltado, de ter chegado tarde, de ter ficado em casa. São subordinadas adverbiais causais, geralmente sem vírgula antes.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a palavra pois introduz oração coordenada conclusiva?",
    o: ["Ele é rico; tem, pois, o direito de escolher.", "Leve o guarda-chuva, pois vai chover.", "Estude, pois a prova é difícil.", "Corra, pois o ônibus vai sair.", "Saia, pois está tarde."],
    x: "Em ele é rico; tem, pois, o direito de escolher, o pois vem depois do verbo, entre vírgulas, e equivale a portanto: ele é rico, e por isso tem o direito. Posposto ao verbo, pois é conjunção conclusiva.\n\nNas outras frases, o pois vem no início da oração e justifica uma ordem: leve o guarda-chuva, porque vai chover; estude, porque a prova é difícil; corra, porque o ônibus vai sair; saia, porque está tarde. Anteposto à oração, pois é explicativo.",
  },
  {
    d: "dificil",
    e: "No período “Estudou muito, mas não passou, logo precisará repetir a prova”, como se classificam, respectivamente, as três orações?",
    o: ["Assindética, sindética adversativa e sindética conclusiva", "Assindética, sindética conclusiva e sindética adversativa", "Sindética adversativa, assindética e sindética aditiva", "Assindética, sindética aditiva e sindética explicativa", "Assindética nas três"],
    x: "A primeira oração, estudou muito, inicia o período e não tem conjunção: assindética. A segunda, mas não passou, expressa oposição ao esperado: sindética adversativa. A terceira, logo precisará repetir a prova, tira uma conclusão da anterior: sindética conclusiva.\n\nTrocar a ordem entre adversativa e conclusiva inverte as relações. Dizer aditiva ou explicativa ignora as conjunções mas e logo. E dizer assindética nas três ignora as conjunções da segunda e da terceira.",
  },
  {
    d: "dificil",
    e: "Em qual das frases há período composto por coordenação e por subordinação?",
    o: ["Quando chegou, jantou e foi dormir.", "Chegou, jantou e dormiu.", "Estudou muito, mas não passou.", "Ou estuda, ou trabalha.", "Penso, logo existo."],
    x: "Em quando chegou, jantou e foi dormir, a oração “quando chegou” é subordinada adverbial temporal em relação a jantou. E as orações jantou e foi dormir são coordenadas entre si, ligadas por e. O período tem, portanto, subordinação e coordenação, e é chamado misto.\n\nNas demais frases, todas as orações são coordenadas: chegou, jantou e dormiu; estudou muito, mas não passou; ou estuda, ou trabalha; penso, logo existo. Em nenhuma há oração que dependa de outra.",
  },
  {
    d: "dificil",
    e: "Qual das frases abaixo apresenta oração coordenada sindética aditiva introduzida por conjunção correlativa?",
    o: ["Não só estudou, mas também trabalhou.", "Ora estuda, ora trabalha.", "Ou estuda, ou trabalha.", "Estudou, porém não trabalhou.", "Estude, que a prova é difícil."],
    x: "A correlação não só... mas também soma uma segunda ação à primeira e é aditiva: estudou e também trabalhou. É conjunção correlativa porque se compõe de duas partes que se completam, e a oração introduzida por mas também é coordenada sindética aditiva.\n\nOra... ora e ou... ou são correlativas, mas alternativas. Porém é adversativa. E que, em estude, que a prova é difícil, é explicativa. Só a primeira soma ações por meio de uma correlação.",
  },
  {
    d: "dificil",
    e: "Em “Corra, que o ônibus vai sair”, por que a oração com que não é subordinada causal?",
    o: ["Porque justifica a ordem dada, e não a ação de outra oração", "Porque que é pronome relativo", "Porque o verbo está no futuro", "Porque falta sujeito", "Porque tem conjunção coordenativa adversativa"],
    x: "A oração “que o ônibus vai sair” justifica a ordem corra: a razão de correr é a saída do ônibus. Como justifica uma ordem ou afirmação, e não a causa de um fato, é coordenada sindética explicativa. A subordinada causal indicaria a causa de um fato, como em perdeu o ônibus porque não correu.\n\nQue, aí, é conjunção, e não pronome relativo. O tempo do verbo não define a classificação. Há sujeito: o ônibus. E a conjunção não é adversativa, porque não há oposição.",
  },
  {
    d: "dificil",
    e: "No período “Chegou cedo, mas ninguém o viu, pois estava distraído”, como se classificam, respectivamente, as três orações?",
    o: ["Assindética, sindética adversativa e sindética explicativa", "Assindética, sindética aditiva e sindética conclusiva", "Sindética adversativa, assindética e sindética aditiva", "Assindética, sindética explicativa e sindética adversativa", "Principal, subordinada e subordinada"],
    x: "A primeira oração, chegou cedo, inicia o período e não tem conjunção: assindética. A segunda, mas ninguém o viu, contraria a expectativa de ser visto: sindética adversativa. A terceira, pois estava distraído, justifica o fato anterior de ninguém o ver: sindética explicativa.\n\nTrocar a ordem entre explicativa e adversativa inverte as relações. Dizer aditiva ou conclusiva ignora as conjunções mas e pois. E principal e subordinada não se aplicam, porque as orações são independentes.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre as orações coordenadas está de acordo com a gramática normativa?",
    o: ["São independentes e podem ter ou não conjunção", "Dependem sempre de uma oração principal", "Só podem ser ligadas por e", "Nunca têm conjunção", "Exercem função de sujeito na outra"],
    x: "As orações coordenadas são sintaticamente independentes: nenhuma exerce função na outra. Podem ser assindéticas, quando não têm conjunção, ou sindéticas, quando são ligadas por conjunção coordenativa, que pode ser aditiva, adversativa, alternativa, conclusiva ou explicativa.\n\nDepender de uma principal é característica da subordinação. Podem ser ligadas por várias conjunções, e não só pelo e. As assindéticas não têm conjunção, mas as sindéticas têm. E exercer função de sujeito na outra é característica das subordinadas substantivas.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre as conjunções coordenativas está de acordo com a gramática normativa?",
    o: ["Ligam orações ou termos de mesma função, sem criar dependência", "Introduzem sempre orações subordinadas", "Só ligam orações, nunca termos", "São todas variáveis em gênero e número", "Todas exprimem a mesma relação de sentido"],
    x: "As conjunções coordenativas ligam orações ou termos de mesma função sintática, sem criar dependência entre eles: e, mas, ou, logo, pois. Dividem-se em aditivas, adversativas, alternativas, conclusivas e explicativas, conforme a relação de sentido que estabelecem.\n\nIntroduzir subordinadas é função das conjunções subordinativas. As coordenativas também ligam termos, como em pão e leite. São invariáveis, como toda conjunção. E exprimem relações diferentes, e não uma só.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre as orações coordenadas assindéticas está de acordo com a gramática normativa?",
    o: ["Não têm conjunção e se ligam pela pontuação", "Têm sempre uma conjunção aditiva entre elas", "Dependem sempre de uma oração principal", "São sempre introduzidas pela conjunção ou", "Só ocorrem no início de um texto longo"],
    x: "As orações coordenadas assindéticas não são introduzidas por conjunção e se ligam à anterior apenas pela pontuação: vírgula (chegou, viu, venceu), ponto e vírgula ou dois-pontos. Cada uma é independente, e a pontuação ocupa o lugar da conjunção.\n\nNão têm conjunção aditiva, nem de qualquer outro tipo. Não dependem de principal, porque são coordenadas. Não são introduzidas por ou, que forma as alternativas. E podem ocorrer em qualquer ponto de um texto, e não só no início.",
  },
];
