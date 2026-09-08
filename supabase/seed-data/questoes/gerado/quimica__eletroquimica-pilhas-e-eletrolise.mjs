/* Eletroquímica: pilhas e eletrólise (50 questões).
   Oxirredução, número de oxidação, pilhas galvânicas, potencial padrão,
   eletrólise ígnea e aquosa, e aplicações do cotidiano.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "Em uma reação de oxirredução, uma espécie química perde elétrons enquanto outra os recebe simultaneamente. O processo em que uma espécie perde elétrons é chamado de:",
    opcoes: [
      "oxidação",
      "redução",
      "neutralização",
      "hidrólise",
      "sublimação",
    ],
    correta: 0,
    explicacao:
      "Oxidação é, por definição, a perda de elétrons por uma espécie química, o que aumenta seu número de oxidação. O processo complementar, em que outra espécie ganha esses elétrons e tem seu número de oxidação reduzido, é chamado de redução.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "Uma pilha eletroquímica converte energia proveniente de uma reação de oxirredução espontânea em:",
    opcoes: [
      "energia elétrica",
      "energia nuclear",
      "energia mecânica diretamente",
      "energia luminosa exclusivamente",
      "energia sonora",
    ],
    correta: 0,
    explicacao:
      "As pilhas aproveitam a transferência espontânea de elétrons entre duas espécies químicas, canalizando esse fluxo por um circuito externo para gerar corrente elétrica utilizável. É esse princípio que permite alimentar aparelhos eletrônicos portáteis a partir de reações químicas controladas.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "Em uma pilha eletroquímica, o eletrodo onde ocorre a oxidação é chamado de:",
    opcoes: [
      "ânodo",
      "cátodo",
      "eletrólito",
      "ponte salina",
      "condutor neutro",
    ],
    correta: 0,
    explicacao:
      "O ânodo é, por definição, o eletrodo onde ocorre a oxidação, ou seja, a perda de elétrons pela espécie ali presente. O cátodo, em contraste, é o eletrodo onde ocorre a redução, o ganho de elétrons.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "Em uma pilha eletroquímica, o eletrodo onde ocorre a redução, ou seja, o ganho de elétrons, é chamado de:",
    opcoes: [
      "cátodo",
      "ânodo",
      "eletrólito",
      "fio condutor",
      "membrana permeável",
    ],
    correta: 0,
    explicacao:
      "O cátodo é o eletrodo onde a espécie química recebe os elétrons vindos do circuito externo, sendo reduzida. Uma forma prática de lembrar: no cátodo ocorre a redução (ambos começam com a mesma vogal na pronúncia usual em português, cátodo e redução).",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "A eletrólise é um processo que utiliza energia elétrica fornecida por uma fonte externa para provocar uma reação química que não ocorreria espontaneamente. Esse processo é classificado, quanto à espontaneidade, como uma reação:",
    opcoes: [
      "não espontânea, que exige energia elétrica para ocorrer",
      "espontânea, que ocorre por si só sem qualquer fonte externa",
      "de neutralização entre ácido e base",
      "nuclear, com emissão de radiação",
      "de combustão completa",
    ],
    correta: 0,
    explicacao:
      "Diferentemente da pilha, que gera energia elétrica a partir de uma reação espontânea, a eletrólise faz o caminho inverso: usa energia elétrica externa para forçar uma reação que não ocorreria por conta própria. É por isso que a eletrólise consome energia, enquanto a pilha a produz.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "As baterias recarregáveis de íon-lítio, usadas em celulares e notebooks, podem ser carregadas repetidamente porque a reação química que ocorre nelas é:",
    opcoes: [
      "reversível, podendo ser invertida ao fornecer energia elétrica externa",
      "irreversível, ocorrendo apenas uma vez",
      "nuclear, envolvendo fissão de átomos",
      "impossível de ser controlada eletricamente",
      "exclusivamente térmica, sem transferência de elétrons",
    ],
    correta: 0,
    explicacao:
      "Baterias recarregáveis usam reações reversíveis: ao descarregar, a reação espontânea gera corrente elétrica (funcionando como pilha); ao carregar, uma fonte externa força a reação inversa, restaurando os reagentes originais (funcionando como uma eletrólise). Pilhas comuns, não recarregáveis, usam reações praticamente irreversíveis nas condições normais de uso.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "O número de oxidação (Nox) de um elemento em sua forma de substância simples, como o ferro metálico ou o gás oxigênio, é sempre igual a:",
    opcoes: [
      "zero",
      "positivo",
      "negativo",
      "igual à sua massa atômica",
      "igual ao seu número atômico",
    ],
    correta: 0,
    explicacao:
      "Substâncias simples, formadas por átomos de um único elemento sem ganho ou perda de elétrons, têm número de oxidação igual a zero por convenção, servindo como ponto de partida para calcular o Nox em compostos e íons mais complexos. Esse é o primeiro passo em qualquer análise de reação de oxirredução.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "A ferrugem que se forma em objetos de ferro expostos ao ar úmido é o resultado de uma reação de oxirredução na qual o ferro metálico perde elétrons para o oxigênio do ar. Esse processo de corrosão é, portanto, um exemplo de:",
    opcoes: [
      "oxidação espontânea do ferro",
      "redução espontânea do ferro",
      "eletrólise induzida artificialmente",
      "neutralização entre ferro e oxigênio",
      "reação de dupla troca",
    ],
    correta: 0,
    explicacao:
      "Ao formar óxido de ferro, o ferro metálico perde elétrons para o oxigênio, sendo oxidado espontaneamente sem qualquer fonte externa de energia elétrica. É esse mesmo princípio de oxidação espontânea que ocorre no ânodo de uma pilha, apenas de forma controlada e aproveitável.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "A galvanização é um processo industrial que recobre peças de ferro ou aço com uma fina camada de zinco, protegendo-as contra a corrosão. Esse recobrimento metálico é obtido, tipicamente, por meio de um processo de:",
    opcoes: [
      "eletrólise, usando energia elétrica para depositar o zinco",
      "combustão do zinco sobre a peça de ferro",
      "neutralização ácido-base entre ferro e zinco",
      "fusão nuclear entre os dois metais",
      "simples imersão sem qualquer corrente elétrica envolvida",
    ],
    correta: 0,
    explicacao:
      "Na galvanoplastia, a peça de ferro é imersa em uma solução contendo íons de zinco e conectada a uma fonte de energia elétrica, que força a deposição do zinco metálico sobre sua superfície, um processo eletrolítico. É essa camada de zinco, mais reativo que o ferro, que se sacrifica preferencialmente na corrosão, protegendo o metal por baixo.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "A fila de reatividade dos metais organiza os elementos conforme sua tendência a perder elétrons e se oxidar. Um metal localizado no início dessa fila, como o sódio ou o potássio, é considerado:",
    opcoes: [
      "mais reativo, com maior facilidade de se oxidar",
      "menos reativo, resistente à oxidação",
      "inerte, sem qualquer capacidade de reagir",
      "sempre encontrado em estado metálico puro na natureza",
      "incapaz de conduzir eletricidade",
    ],
    correta: 0,
    explicacao:
      "Metais no início da fila de reatividade cedem elétrons com muita facilidade, sendo altamente reativos e propensos à oxidação, o que explica por que sódio e potássio nunca são encontrados livres na natureza, sempre combinados em compostos. Metais nobres, como ouro e platina, ficam no fim da fila, resistindo bastante à oxidação.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Na reação Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), o zinco metálico é oxidado enquanto o íon cobre é reduzido. O número de oxidação do zinco varia, nessa reação, de:",
    opcoes: [
      "+2 para 0",
      "0 para +2",
      "0 para -2",
      "+2 para +4",
      "-2 para 0",
    ],
    correta: 1,
    explicacao:
      "O zinco começa como substância simples, com Nox zero, e perde dois elétrons ao se transformar no íon Zn²⁺, terminando com Nox +2 — um aumento do número de oxidação, que caracteriza a oxidação. O cobre faz o caminho inverso, de +2 para 0, sendo reduzido ao ganhar os elétrons cedidos pelo zinco.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Na mesma reação Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), o agente redutor, aquele que perde elétrons e provoca a redução da outra espécie, é o:",
    opcoes: [
      "íon cobre",
      "zinco metálico",
      "cobre metálico",
      "íon zinco",
      "elétron isoladamente",
    ],
    correta: 1,
    explicacao:
      "O agente redutor é a espécie que se oxida, cedendo elétrons para que outra espécie seja reduzida — aqui, o zinco cede elétrons ao cobre, sendo o agente redutor da reação. O íon cobre, que recebe esses elétrons e se reduz, é chamado de agente oxidante, pois provoca a oxidação do zinco.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Em uma pilha de Daniell, formada por um eletrodo de zinco imerso em solução de ZnSO₄ e um eletrodo de cobre imerso em solução de CuSO₄, conectados por uma ponte salina, a função da ponte salina é:",
    opcoes: [
      "fornecer elétrons diretamente à reação",
      "manter a neutralidade elétrica das soluções, permitindo a migração de íons entre os compartimentos",
      "aumentar a temperatura da pilha",
      "impedir totalmente a passagem de corrente elétrica",
      "servir como fonte de energia externa para a pilha",
    ],
    correta: 1,
    explicacao:
      "Sem a ponte salina, o acúmulo de cargas positivas no compartimento do zinco (que perde cátions Zn²⁺ para a solução) e de cargas negativas no compartimento do cobre (que perde cátions Cu²⁺ que se depositam como metal) interromperia rapidamente a reação; a ponte salina permite a migração de íons para neutralizar essas cargas e manter a pilha funcionando. Os elétrons, por sua vez, fluem pelo fio externo que conecta os dois eletrodos, não pela ponte salina.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Em uma pilha eletroquímica em funcionamento, o fluxo de elétrons no circuito externo ocorre sempre no sentido do:",
    opcoes: [
      "cátodo para o ânodo",
      "ânodo para o cátodo",
      "eletrólito para o ânodo",
      "eletrólito para o cátodo",
      "ambiente externo para dentro da pilha",
    ],
    correta: 1,
    explicacao:
      "Como o ânodo é onde ocorre a oxidação, liberando elétrons, e o cátodo é onde ocorre a redução, consumindo elétrons, o fluxo de elétrons pelo fio externo segue naturalmente do ânodo (fonte de elétrons) para o cátodo (destino dos elétrons). É esse fluxo direcionado de elétrons que constitui a corrente elétrica útil gerada pela pilha.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante monta uma pilha com eletrodos de magnésio e prata, sabendo que o magnésio é mais reativo (mais facilmente oxidado) que a prata. Nessa pilha, o eletrodo de magnésio funcionará como:",
    opcoes: [
      "cátodo, onde ocorre a redução do metal mais reativo",
      "ânodo, onde ocorre a oxidação espontânea do metal mais reativo",
      "eletrólito da pilha",
      "ponte salina entre os dois compartimentos",
      "fonte externa de energia elétrica",
    ],
    correta: 1,
    explicacao:
      "Como o magnésio é mais reativo, ele tem maior tendência a perder elétrons espontaneamente, funcionando como o ânodo da pilha, enquanto a prata, menos reativa, recebe esses elétrons no cátodo e é reduzida. Em qualquer pilha espontânea, o metal mais reativo da dupla sempre assume o papel de ânodo.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "O potencial padrão de redução de um eletrodo mede sua tendência de sofrer redução quando comparado ao eletrodo padrão de hidrogênio, cujo potencial é definido como zero. Um metal com potencial padrão de redução muito negativo tem, portanto, uma tendência:",
    opcoes: [
      "maior de se reduzir do que de se oxidar",
      "maior de se oxidar (perder elétrons) do que de se reduzir",
      "nula de participar de qualquer reação de oxirredução",
      "igual à de todos os outros metais",
      "de nunca conduzir corrente elétrica",
    ],
    correta: 1,
    explicacao:
      "Um potencial de redução muito negativo indica que o metal resiste a ser reduzido, preferindo, ao contrário, ceder elétrons e se oxidar — é o caso de metais reativos como o lítio e o sódio, no topo da fila de reatividade. Metais com potencial de redução muito positivo, como o ouro, têm o comportamento oposto, com forte tendência a se reduzir e permanecer em sua forma metálica.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "A eletrólise ígnea é o processo de eletrólise realizado a partir de um sal fundido, sem a presença de água, enquanto a eletrólise aquosa ocorre em solução aquosa do sal. A principal razão para se usar eletrólise ígnea, e não aquosa, na obtenção de sódio metálico a partir do cloreto de sódio, é que:",
    opcoes: [
      "o cloreto de sódio não se dissolve em água",
      "em solução aquosa, a água seria reduzida preferencialmente ao sódio, impedindo a obtenção do metal",
      "a eletrólise aquosa é sempre mais barata que a ígnea",
      "o sódio metálico só existe em temperaturas muito baixas",
      "a água impede totalmente a passagem de corrente elétrica",
    ],
    correta: 1,
    explicacao:
      "Como o sódio é um metal muito reativo, com forte tendência a permanecer na forma iônica, a água se reduziria preferencialmente a ele em uma eletrólise aquosa, formando gás hidrogênio em vez de sódio metálico; por isso, metais muito reativos são obtidos por eletrólise ígnea, sem a interferência da água. Esse é o método usado industrialmente para produzir sódio, alumínio e outros metais reativos.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Na eletrólise aquosa do cloreto de sódio, ocorre a formação de gás hidrogênio no cátodo, gás cloro no ânodo e hidróxido de sódio em solução, em um processo industrial conhecido como processo cloro-álcali. Esse processo é economicamente relevante porque produz simultaneamente três substâncias de grande aplicação industrial:",
    opcoes: [
      "Na, Cl₂ e H₂O",
      "H₂, Cl₂ e NaOH",
      "NaCl, H₂ e O₂",
      "Na, O₂ e HCl",
      "NaOH, O₂ e Cl₂ apenas",
    ],
    correta: 1,
    explicacao:
      "O gás hidrogênio é usado como combustível e em síntese química, o gás cloro na produção de desinfetantes e plásticos como o PVC, e o hidróxido de sódio na fabricação de sabões e papel — a combinação torna o processo industrialmente valioso mesmo consumindo bastante energia elétrica. É um dos processos eletrolíticos mais importantes da indústria química mundial.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "As baterias de chumbo-ácido, usadas em automóveis, contêm eletrodos de chumbo e óxido de chumbo IV imersos em solução de ácido sulfúrico. Ao dar partida no motor, a bateria libera energia elétrica por meio de uma reação espontânea, funcionando nesse momento como uma:",
    opcoes: [
      "eletrólise, convertendo energia elétrica em química",
      "pilha, convertendo energia química em elétrica",
      "célula de combustível, consumindo hidrogênio puro",
      "célula fotovoltaica, convertendo luz em eletricidade",
      "resistência elétrica pura, sem qualquer reação química",
    ],
    correta: 1,
    explicacao:
      "No momento em que fornece energia ao motor de arranque, a bateria automotiva funciona exatamente como uma pilha, convertendo a energia da reação espontânea entre chumbo, óxido de chumbo e ácido sulfúrico em corrente elétrica. Quando o alternador do carro a recarrega durante o funcionamento do motor, ela passa a operar como uma eletrólise, revertendo a reação.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um objeto de prata em contato prolongado com o ar sofre uma reação lenta de oxidação superficial, escurecendo com o tempo devido à formação de sulfeto de prata. Para reverter esse escurecimento sem remover material da peça, uma técnica eletroquímica utiliza uma bandeja de alumínio, água quente com bicarbonato de sódio e a peça de prata em contato com o alumínio. Nesse processo, o alumínio atua como:",
    opcoes: [
      "agente oxidante, retirando ainda mais elétrons da prata",
      "agente redutor, cedendo elétrons que revertem a oxidação da prata",
      "catalisador, sem participar diretamente da reação",
      "eletrólito, apenas conduzindo a corrente elétrica",
      "isolante, impedindo qualquer troca de elétrons",
    ],
    correta: 1,
    explicacao:
      "Por ser mais reativo que a prata, o alumínio se oxida preferencialmente, cedendo elétrons que reduzem o sulfeto de prata de volta à prata metálica brilhante, em uma espécie de pilha improvisada ativada pela solução de bicarbonato. Essa técnica caseira é um exemplo divertido de aplicação prática dos princípios de reatividade e oxirredução no dia a dia.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Ao determinar o número de oxidação do enxofre no íon sulfato, SO₄²⁻, sabendo que o oxigênio tem Nox −2 em praticamente todos os compostos comuns, o valor do Nox do enxofre nesse íon é de:",
    opcoes: [
      "+4",
      "-2",
      "+6",
      "+2",
      "+8",
    ],
    correta: 2,
    explicacao:
      "A soma dos números de oxidação em um íon deve ser igual à sua carga total: x + 4 × (−2) = −2, logo x − 8 = −2, e x = +6. Esse tipo de cálculo, isolando o Nox desconhecido a partir da soma total conhecida, é a base para balancear reações de oxirredução mais complexas.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação 2 Fe²⁺ + Cl₂ → 2 Fe³⁺ + 2 Cl⁻ e precisa identificar o agente oxidante. Considerando que o ferro perde elétrons (de +2 para +3) e o cloro os ganha (de 0 para −1), o agente oxidante dessa reação é o:",
    opcoes: [
      "íon ferro II, pois provoca a redução do cloro ao se oxidar",
      "íon ferro III, formado ao final da reação",
      "gás cloro, pois provoca a oxidação do ferro ao se reduzir",
      "íon cloreto, formado ao final da reação",
      "nenhuma das espécies, pois não há oxirredução nessa reação",
    ],
    correta: 2,
    explicacao:
      "O agente oxidante é a espécie que se reduz, provocando a oxidação da outra; aqui, o gás cloro se reduz de 0 para −1 e é, portanto, o agente oxidante, enquanto o Fe²⁺, que se oxida, é o agente redutor. Um erro comum é confundir a espécie que se oxida com a que provoca a oxidação: são justamente as espécies opostas.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "As pilhas alcalinas comuns, muito usadas em controles remotos e brinquedos, não podem ser recarregadas, ao contrário das baterias de íon-lítio. Essa diferença ocorre porque, nas pilhas alcalinas comuns:",
    opcoes: [
      "não existe qualquer reação de oxirredução envolvida",
      "os materiais utilizados são radioativos",
      "a reação química que ocorre é praticamente irreversível nas condições normais de recarga",
      "a energia gerada é de origem nuclear",
      "a pilha não gera corrente elétrica alguma",
    ],
    correta: 2,
    explicacao:
      "Os produtos formados durante a descarga da pilha alcalina comum não se reorganizam facilmente de volta aos reagentes originais ao se tentar forçar uma recarga, o que pode inclusive causar vazamento ou explosão; por isso, essas pilhas são projetadas para uso único. Baterias recarregáveis usam sistemas químicos especificamente projetados para permitir essa reversibilidade com segurança.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Durante a eletrólise da água (2 H₂O → 2 H₂ + O₂), usando eletrodos inertes e uma fonte de energia elétrica externa, é correto afirmar que, no cátodo dessa eletrólise:",
    opcoes: [
      "ocorre a oxidação, com liberação de gás hidrogênio",
      "ocorre a redução, com liberação de gás oxigênio",
      "ocorre a redução, com liberação de gás hidrogênio",
      "ocorre a oxidação, com liberação de gás oxigênio",
      "não ocorre nenhuma reação, apenas no ânodo",
    ],
    correta: 2,
    explicacao:
      "No cátodo de qualquer eletrólise, ocorre redução — nesse caso, os íons H⁺ (ou moléculas de água) ganham elétrons e são reduzidos a gás hidrogênio. No ânodo, complementarmente, ocorre a oxidação, liberando gás oxigênio a partir da água.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Uma pilha é montada com um eletrodo de zinco (potencial padrão de redução = −0,76 V) e um eletrodo de cobre (potencial padrão de redução = +0,34 V). A força eletromotriz padrão dessa pilha, calculada pela diferença entre o potencial do cátodo e o do ânodo, é de:",
    opcoes: [
      "0,42 V",
      "-1,10 V",
      "1,10 V",
      "1,86 V",
      "0,10 V",
    ],
    correta: 2,
    explicacao:
      "Como o cobre tem potencial de redução maior, ele atua como cátodo, e o zinco, com potencial menor, atua como ânodo; a fem é E(cátodo) − E(ânodo) = 0,34 − (−0,76) = 1,10 V. Esse cálculo simples, subtraindo o potencial do ânodo do potencial do cátodo, é a base para prever a voltagem de qualquer pilha a partir dos potenciais padrão tabelados.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Um estudante determina o número de oxidação do manganês no íon permanganato, MnO₄⁻, um forte agente oxidante usado em titulações. Sabendo que o oxigênio tem Nox −2, o valor do Nox do manganês nesse íon é de:",
    opcoes: [
      "+2",
      "+5",
      "+7",
      "-1",
      "+8",
    ],
    correta: 2,
    explicacao:
      "A soma dos Nox deve igualar a carga do íon: x + 4 × (−2) = −1, logo x − 8 = −1, e x = +7. Esse é um dos números de oxidação mais altos encontrados em compostos comuns, o que explica a forte capacidade oxidante do permanganato em reações analíticas.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Durante a eletrólise de uma solução aquosa de sulfato de cobre II, usando eletrodos de cobre, uma corrente elétrica é aplicada durante certo tempo, resultando na deposição de 6,35 g de cobre metálico no cátodo (massa molar do cobre 63,5 g/mol, carga de dois elétrons por átomo depositado). A quantidade de elétrons, em mols, necessária para essa deposição foi de:",
    opcoes: [
      "0,1 mol",
      "0,4 mol",
      "0,2 mol",
      "0,05 mol",
      "2 mol",
    ],
    correta: 2,
    explicacao:
      "Os 6,35 g de cobre correspondem a 6,35 ÷ 63,5 = 0,1 mol de átomos; como cada íon Cu²⁺ precisa de 2 elétrons para ser reduzido a cobre metálico, são necessários 0,1 × 2 = 0,2 mol de elétrons. Esse tipo de cálculo estequiométrico, ligando massa de metal depositado à quantidade de elétrons transferidos, é a base da técnica de eletrodeposição industrial.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador compara os potenciais padrão de redução de quatro metais: A (+0,80 V), B (−0,44 V), C (−2,71 V) e D (+1,50 V). Ordenando esses metais do mais reativo (maior tendência a se oxidar) para o menos reativo, tem-se:",
    opcoes: [
      "D, A, B, C",
      "A, B, C, D",
      "C, B, A, D",
      "C, D, B, A",
      "B, C, D, A",
    ],
    correta: 2,
    explicacao:
      "Quanto mais negativo o potencial padrão de redução, maior a tendência do metal a se oxidar (perder elétrons); ordenando do mais negativo para o mais positivo, tem-se C (−2,71 V), B (−0,44 V), A (+0,80 V) e D (+1,50 V), do mais reativo ao menos reativo. Metais com potencial muito positivo, como o D, resistem fortemente à oxidação, sendo considerados nobres.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Em uma célula de combustível de hidrogênio, usada em alguns veículos elétricos, o gás hidrogênio é oxidado no ânodo e o gás oxigênio é reduzido no cátodo, formando água como único produto e gerando corrente elétrica continuamente enquanto os gases são fornecidos. Comparada a uma pilha comum, a célula de combustível se diferencia principalmente por:",
    opcoes: [
      "não envolver nenhuma reação de oxirredução",
      "gerar energia exclusivamente a partir de reações nucleares",
      "funcionar continuamente enquanto reagentes são fornecidos, em vez de se esgotar com reagentes fixos internos",
      "não precisar de eletrodos para funcionar",
      "produzir apenas calor, sem gerar corrente elétrica",
    ],
    correta: 2,
    explicacao:
      "Enquanto uma pilha comum contém uma quantidade fixa de reagentes que se esgota ao longo do uso, a célula de combustível recebe continuamente hidrogênio e oxigênio de fora, podendo gerar energia elétrica indefinidamente enquanto o abastecimento for mantido — daí o nome 'célula de combustível', em analogia ao reabastecimento de um motor convencional. É essa característica que torna a tecnologia atrativa para veículos que precisam de autonomia maior que a das baterias comuns.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Um navio de casco de aço é protegido contra corrosão pela técnica de proteção catódica por anodo de sacrifício, na qual blocos de zinco ou magnésio são fixados ao casco submerso. O princípio químico por trás dessa técnica é que:",
    opcoes: [
      "o bloco metálico absorve fisicamente a água do mar, secando o casco",
      "o zinco reage quimicamente com o oxigênio dissolvido, eliminando-o da água",
      "o magnésio torna a água do mar menos condutora de eletricidade",
      "o metal do bloco, mais reativo que o ferro, se oxida preferencialmente, poupando o casco de aço",
      "o bloco metálico funciona apenas como isolante térmico do casco",
    ],
    correta: 3,
    explicacao:
      "Como zinco e magnésio são mais reativos que o ferro, eles funcionam como ânodo de sacrifício em uma pilha formada espontaneamente com a água do mar como eletrólito, oxidando-se preferencialmente e cedendo elétrons que impedem a oxidação do ferro do casco. Os blocos de sacrifício precisam ser substituídos periodicamente à medida que se corroem no lugar do metal que protegem.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação de combustão do magnésio, 2 Mg(s) + O₂(g) → 2 MgO(s), muito usada em fogos de artifício por sua luz intensa. Do ponto de vista eletroquímico, essa reação envolve:",
    opcoes: [
      "apenas oxidação, sem qualquer redução envolvida",
      "apenas redução, sem qualquer oxidação envolvida",
      "neutralização entre magnésio e oxigênio",
      "oxidação do magnésio e redução do oxigênio",
      "nenhuma transferência de elétrons",
    ],
    correta: 3,
    explicacao:
      "O magnésio perde elétrons ao passar de Nox 0 para +2, sendo oxidado, enquanto o oxigênio ganha elétrons ao passar de Nox 0 para −2, sendo reduzido — toda combustão é, no fundo, uma reação de oxirredução. A grande quantidade de energia liberada nessa reação é o que produz a luz intensa característica dos fogos de artifício à base de magnésio.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a placa de identificação de uma bateria automotiva, que indica '12 V' como tensão nominal. Sabendo que cada célula individual de chumbo-ácido gera aproximadamente 2 V, o número de células conectadas em série dentro dessa bateria é de:",
    opcoes: [
      "12 células",
      "2 células",
      "24 células",
      "6 células",
      "4 células",
    ],
    correta: 3,
    explicacao:
      "Como as tensões de células conectadas em série se somam, seis células de 2 V cada resultam em 6 × 2 = 12 V, a tensão nominal padrão das baterias automotivas de chumbo-ácido. É esse arranjo em série que permite atingir voltagens maiores do que uma única célula eletroquímica poderia fornecer sozinha.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Comparando uma pilha comum e um processo de eletrólise, ambos envolvendo reações de oxirredução, a diferença fundamental entre eles está na:",
    opcoes: [
      "presença de elétrons apenas na pilha, e não na eletrólise",
      "ausência de eletrodos no processo de eletrólise",
      "impossibilidade de qualquer reversibilidade entre os dois processos",
      "direção da transformação de energia: a pilha converte energia química em elétrica, e a eletrólise faz o inverso",
      "temperatura, já que a eletrólise só ocorre em altas temperaturas",
    ],
    correta: 3,
    explicacao:
      "A pilha aproveita uma reação espontânea para gerar corrente elétrica (energia química → elétrica), enquanto a eletrólise usa uma fonte externa de energia elétrica para forçar uma reação não espontânea (energia elétrica → química), sendo o processo inverso um do outro. Muitos sistemas eletroquímicos, como as baterias recarregáveis, alternam entre esses dois modos de operação conforme são usados ou carregados.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "Uma moeda de cobre exposta ao ar por muito tempo desenvolve uma camada esverdeada em sua superfície, resultado da reação lenta do metal com oxigênio, água e gás carbônico do ambiente. Esse escurecimento gradual é um processo de:",
    opcoes: [
      "redução do cobre metálico",
      "eletrólise induzida pelo ambiente",
      "fusão nuclear do cobre",
      "oxidação do cobre metálico",
      "sublimação do metal",
    ],
    correta: 3,
    explicacao:
      "Ao reagir com o ambiente, o cobre metálico perde elétrons e forma compostos como carbonatos e óxidos de cobre, um processo de oxidação espontânea semelhante ao que ocorre com o ferro, ainda que mais lento. A camada esverdeada, chamada de pátina, é comum em estátuas e telhados de cobre expostos por décadas.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "Um estudante analisa a semirreação Fe³⁺ + e⁻ → Fe²⁺. Essa equação representa um processo de:",
    opcoes: [
      "oxidação, pois o íon ferro perde um elétron",
      "neutralização entre dois íons",
      "hidrólise de um sal de ferro",
      "redução, pois o íon ferro recebe um elétron",
      "eletrólise completa do ferro",
    ],
    correta: 3,
    explicacao:
      "Como o Fe³⁺ ganha um elétron e se transforma em Fe²⁺, reduzindo seu número de oxidação de +3 para +2, essa semirreação representa uma redução. Semirreações escritas com elétrons do lado dos reagentes sempre representam reduções; com elétrons do lado dos produtos, representam oxidações.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação global 2 Al(s) + 3 Cu²⁺(aq) → 2 Al³⁺(aq) + 3 Cu(s), na qual o alumínio metálico reage com íons cobre em solução. O número total de elétrons transferidos nessa equação balanceada, considerando os coeficientes estequiométricos, é de:",
    opcoes: [
      "2 elétrons",
      "3 elétrons",
      "5 elétrons",
      "6 elétrons",
      "9 elétrons",
    ],
    correta: 3,
    explicacao:
      "Cada átomo de alumínio perde 3 elétrons (de 0 para +3), e há 2 mols de Al, totalizando 6 elétrons cedidos; cada íon Cu²⁺ ganha 2 elétrons, e há 3 mols de Cu²⁺, totalizando também 6 elétrons recebidos. Essa igualdade entre elétrons cedidos e recebidos é justamente o que garante o balanceamento correto de qualquer equação de oxirredução.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa uma pilha formada por eletrodos de níquel e prata, sabendo que a prata é menos reativa que o níquel. Nessa pilha, o eletrodo de prata funcionará como:",
    opcoes: [
      "ânodo, onde ocorre a oxidação da prata metálica",
      "eletrólito da pilha",
      "ponte salina entre os compartimentos",
      "cátodo, onde ocorre a redução dos íons prata",
      "fonte externa de energia elétrica",
    ],
    correta: 3,
    explicacao:
      "Como a prata é menos reativa, ela tem menor tendência a se oxidar e maior tendência a permanecer reduzida, funcionando como o cátodo da pilha, enquanto o níquel, mais reativo, assume o papel de ânodo, oxidando-se espontaneamente. O metal menos reativo de uma dupla sempre assume o papel de cátodo em uma pilha espontânea.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Durante a eletrólise de uma solução aquosa de cloreto de sódio, com eletrodos inertes, ocorre a liberação de gás cloro no ânodo, em vez da oxidação da água, apesar de a água também poder ser oxidada nesse eletrodo. Esse comportamento, observado experimentalmente, é atribuído a fatores cinéticos conhecidos como sobretensão, que fazem o cloreto:",
    opcoes: [
      "nunca ser oxidado em qualquer condição de eletrólise aquosa",
      "se transformar diretamente em sódio metálico no ânodo",
      "impedir completamente a passagem de corrente elétrica",
      "ser oxidado preferencialmente na prática, mesmo quando a previsão termodinâmica simples favoreceria a água",
      "reagir apenas em temperaturas abaixo de 0 °C",
    ],
    correta: 3,
    explicacao:
      "Embora a previsão baseada apenas nos potenciais padrão sugerisse a oxidação preferencial da água, fatores cinéticos práticos (a chamada sobretensão) fazem o cloreto ser oxidado a gás cloro na maioria das condições industriais reais, um comportamento importante para o processo cloro-álcali. Esse é um exemplo de como previsões puramente termodinâmicas podem não capturar todos os aspectos cinéticos observados experimentalmente.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Um estudante determina o número de oxidação do cromo no dicromato de potássio, K₂Cr₂O₇, sabendo que o potássio tem Nox +1 e o oxigênio tem Nox −2. O valor do Nox do cromo nesse composto é de:",
    opcoes: [
      "+3",
      "+12",
      "+2",
      "+7",
      "+6",
    ],
    correta: 4,
    explicacao:
      "A soma total dos Nox deve ser zero, já que o composto é neutro: 2 × (+1) + 2x + 7 × (−2) = 0, ou seja, 2 + 2x − 14 = 0, logo 2x = 12 e x = +6. É importante lembrar de dividir pelo número de átomos de cromo (2) ao isolar o valor final, já que a fórmula tem dois átomos desse elemento.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Durante a eletrólise de uma solução de nitrato de prata usando eletrodos inertes, uma corrente é aplicada até depositar 21,6 g de prata metálica no cátodo (massa molar da prata 108 g/mol, um elétron necessário por átomo depositado). A quantidade de matéria de elétrons transferida nesse processo foi de:",
    opcoes: [
      "0,1 mol",
      "0,4 mol",
      "1 mol",
      "2 mol",
      "0,2 mol",
    ],
    correta: 4,
    explicacao:
      "Os 21,6 g de prata correspondem a 21,6 ÷ 108 = 0,2 mol de átomos; como cada íon Ag⁺ precisa de apenas 1 elétron para ser reduzido a prata metálica, a quantidade de elétrons transferida é igual à quantidade de prata depositada, 0,2 mol. Esse é o caso mais simples de cálculo eletroquímico, já que a proporção entre elétrons e átomos depositados é direta, 1 para 1.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador compara os potenciais padrão de redução do flúor (+2,87 V), o mais alto entre os elementos comuns, e do lítio (−3,04 V), um dos mais baixos. Com base apenas nesses valores, é correto concluir que, em uma pilha hipotética formada por esses dois elementos, o flúor atuaria como:",
    opcoes: [
      "agente redutor, sendo oxidado no ânodo",
      "eletrólito da pilha",
      "ponte salina do sistema",
      "elemento inerte, sem participar da reação",
      "agente oxidante, sendo reduzido no cátodo",
    ],
    correta: 4,
    explicacao:
      "Como o flúor tem o potencial de redução mais alto entre os dois, ele tem forte tendência a se reduzir, atuando como agente oxidante no cátodo da pilha; o lítio, com potencial muito mais baixo, se oxidaria no ânodo, atuando como agente redutor. Essa dupla representa, teoricamente, uma das maiores diferenças de potencial possíveis entre elementos comuns, embora a combinação prática seja extremamente reativa e perigosa de se montar.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante observa que pregos de ferro enferrujam mais rapidamente quando em contato com um fio de cobre do que pregos isolados, em um experimento com água salgada. Esse comportamento ocorre porque o contato entre os dois metais diferentes, na presença de um eletrólito, forma uma espécie de:",
    opcoes: [
      "eletrólise, consumindo energia elétrica externa",
      "reação de neutralização entre os dois metais",
      "ligação covalente entre ferro e cobre",
      "processo nuclear entre os átomos dos dois metais",
      "pilha galvânica, na qual o ferro, mais reativo, se oxida preferencialmente",
    ],
    correta: 4,
    explicacao:
      "O contato entre dois metais de reatividades diferentes, na presença de um eletrólito como a água salgada, forma espontaneamente uma pilha galvânica improvisada: o ferro, mais reativo, funciona como ânodo e se oxida mais rapidamente que sozinho, enquanto o cobre atua como cátodo. Esse fenômeno de corrosão galvânica é uma preocupação real na engenharia, ao evitar contato direto entre metais diferentes em estruturas expostas à umidade.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um técnico de laboratório precisa determinar se uma reação Cu(s) + Zn²⁺(aq) → Cu²⁺(aq) + Zn(s) ocorre espontaneamente. Sabendo que o zinco é mais reativo que o cobre, sendo mais facilmente oxidado, essa reação escrita nesse sentido é:",
    opcoes: [
      "espontânea, pois o cobre é sempre mais reativo que o zinco",
      "espontânea apenas em altas temperaturas",
      "espontânea apenas na presença de um catalisador",
      "impossível de prever sem dados adicionais",
      "não espontânea, pois o cobre, menos reativo, não desloca o zinco de seus compostos",
    ],
    correta: 4,
    explicacao:
      "Como o zinco é mais reativo que o cobre, é o zinco metálico que desloca o cobre de seus compostos espontaneamente, e não o contrário; a reação escrita nesse sentido, com cobre metálico reduzindo íons zinco, não ocorre espontaneamente nas condições normais. Esse tipo de análise, baseada na fila de reatividade, é o primeiro passo para prever se uma reação de deslocamento vai realmente acontecer.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "As latas de alumínio recicladas são derretidas e reutilizadas na fabricação de novas latas, um processo que consome menos energia do que produzir alumínio a partir do minério bauxita por eletrólise. Essa diferença de consumo energético ocorre porque a produção primária do alumínio, por eletrólise ígnea, exige:",
    opcoes: [
      "apenas o derretimento do minério, sem qualquer reação química",
      "temperaturas próximas de 0 °C para funcionar corretamente",
      "nenhuma energia adicional além da extração mecânica do minério",
      "reação espontânea sem qualquer fonte externa de energia",
      "grande quantidade de energia elétrica para reduzir o alumínio de seu estado iônico ao metálico",
    ],
    correta: 4,
    explicacao:
      "Como o alumínio é um metal bastante reativo, reduzi-lo de seu estado iônico na bauxita ao estado metálico exige uma eletrólise que consome grande quantidade de energia elétrica; reciclar o alumínio já metálico, que só precisa ser fundido e remodelado, evita repetir essa etapa eletrolítica cara. É por isso que a reciclagem do alumínio é considerada uma das mais eficientes do ponto de vista energético entre os materiais recicláveis.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação de formação da ferrugem em uma estrutura metálica próxima ao mar, observando que a corrosão é mais intensa nessa região costeira do que em uma estrutura equivalente no interior do continente. O principal fator que acelera a corrosão em ambientes costeiros é a maior:",
    opcoes: [
      "temperatura média das regiões costeiras em comparação ao interior",
      "quantidade de luz solar recebida perto do mar",
      "altitude das regiões costeiras em relação ao nível do mar",
      "pressão atmosférica registrada nessas regiões",
      "concentração de íons dissolvidos na maresia, que aumentam a condutividade elétrica da água na superfície do metal",
    ],
    correta: 4,
    explicacao:
      "A maresia carrega sal dissolvido que, ao se depositar sobre o metal junto com a umidade, aumenta a condutividade elétrica da fina camada de água na superfície, facilitando o fluxo de elétrons entre as regiões anódicas e catódicas microscópicas da corrosão e acelerando o processo. É por isso que estruturas metálicas litorâneas exigem proteção anticorrosiva mais robusta que estruturas equivalentes no interior.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa duas semirreações: Ag⁺ + e⁻ → Ag, com potencial padrão +0,80 V, e Fe²⁺ + 2 e⁻ → Fe, com potencial padrão −0,44 V. Ao montar uma pilha com esses dois eletrodos, o cátodo, o ânodo e a força eletromotriz padrão da pilha são, respectivamente:",
    opcoes: [
      "ferro, prata e 1,24 V",
      "prata, ferro e 0,36 V",
      "ferro, prata e 0,36 V",
      "prata, ferro e -1,24 V",
      "prata, ferro e 1,24 V",
    ],
    correta: 4,
    explicacao:
      "Como a prata tem potencial de redução maior, ela atua como cátodo, e o ferro, com potencial menor, atua como ânodo; a fem é E(cátodo) − E(ânodo) = 0,80 − (−0,44) = 1,24 V. Vale notar que a fórmula não multiplica os potenciais pelo número de elétrons transferidos em cada semirreação — o potencial padrão já é uma grandeza intensiva, independente da quantidade de matéria envolvida.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Um estudante de química observa que, ao aplicar verniz ou tinta sobre uma peça de ferro, a corrosão é retardada significativamente, mesmo que o metal continue exposto ao ambiente por baixo da camada protetora. Essa proteção funciona principalmente porque a camada de tinta:",
    opcoes: [
      "transforma quimicamente o ferro em um metal nobre",
      "reduz permanentemente a reatividade química do ferro",
      "aumenta a temperatura da superfície do metal",
      "atua como um agente redutor que impede qualquer oxidação futura",
      "bloqueia o contato direto entre o ferro e o oxigênio e a umidade do ar",
    ],
    correta: 4,
    explicacao:
      "Ao formar uma barreira física entre o metal e os agentes responsáveis pela corrosão — o oxigênio e a umidade do ar —, a tinta impede que a reação de oxidação sequer se inicie, sem alterar a reatividade química intrínseca do ferro. É por isso que qualquer arranhão ou falha na camada de tinta expõe o metal e permite que a corrosão comece justamente naquele ponto vulnerável.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "facil",
    enunciado:
      "Em uma pilha eletroquímica, o eletrodo no qual ocorre a oxidação (perda de elétrons) recebe o nome de:",
    opcoes: [
      "cátodo",
      "eletrólito",
      "ponte salina",
      "ânodo",
      "condutor iônico",
    ],
    correta: 3,
    explicacao:
      "Por convenção, o ânodo é sempre o eletrodo onde ocorre a oxidação, tanto em pilhas quanto em células eletrolíticas, enquanto o cátodo é onde ocorre a redução. Uma forma de memorizar é associar a letra \"a\" de ânodo à letra \"o\" inicial de oxidação através da sequência alfabética das vogais.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "media",
    enunciado:
      "Uma pilha é montada com eletrodos de zinco e cobre mergulhados em suas respectivas soluções de sulfato, conectados por um fio externo e uma ponte salina. Sabendo que o zinco é mais reativo (mais facilmente oxidável) que o cobre, o fluxo de elétrons pelo fio externo ocorre:",
    opcoes: [
      "do cobre para o zinco, já que o cobre é o metal mais nobre",
      "não há fluxo de elétrons, apenas de íons",
      "em ambos os sentidos simultaneamente, de forma equilibrada",
      "apenas dentro da ponte salina, nunca pelo fio externo",
      "do zinco para o cobre, pois o zinco sofre oxidação e libera elétrons",
    ],
    correta: 4,
    explicacao:
      "O zinco, por ser o metal mais reativo, sofre oxidação no ânodo e libera elétrons, que fluem pelo fio externo até o cobre, onde ocorre a redução no cátodo. A ponte salina, por sua vez, permite a migração de íons para manter a neutralidade elétrica das soluções, mas não é o caminho dos elétrons.",
  },
  {
    materia: "quimica",
    tema: "Eletroquímica: pilhas e eletrólise",
    dificuldade: "dificil",
    enunciado:
      "Durante a eletrólise aquosa de uma solução de cloreto de sódio (NaCl), utilizada industrialmente para produzir gás cloro, gás hidrogênio e hidróxido de sódio, a reação é conduzida com o auxílio de uma fonte de corrente contínua externa. Comparando esse processo com o funcionamento de uma pilha comum, a principal diferença é que a eletrólise:",
    opcoes: [
      "ocorre espontaneamente, sem qualquer fornecimento de energia externa",
      "não envolve reações de oxidação e redução, apenas dissolução física",
      "consome energia elétrica externa para forçar reações não espontâneas",
      "produz energia elétrica a partir de reações químicas espontâneas",
      "dispensa completamente o uso de eletrodos",
    ],
    correta: 2,
    explicacao:
      "Enquanto a pilha converte energia química em elétrica através de uma reação espontânea, a eletrólise faz o processo inverso: usa energia elétrica fornecida por uma fonte externa para forçar a ocorrência de reações de oxirredução que não aconteceriam espontaneamente, como é o caso da decomposição do cloreto de sódio em seus produtos industriais.",
  },
];
