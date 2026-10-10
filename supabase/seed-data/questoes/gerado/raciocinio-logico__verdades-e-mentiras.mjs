/* Verdades e mentiras (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__verdades-e-mentiras.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__verdades-e-mentiras.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), qual das frases abaixo nenhum habitante poderia dizer?",
    opcoes: [
      "Eu sou mentiroso",
      "Eu sou veraz",
      "Meu vizinho é mentiroso",
      "Dois mais dois são quatro",
      "Dois mais dois são cinco",
    ],
    correta: 0,
    explicacao:
      "Um veraz só diz frases verdadeiras, e um mentiroso só diz frases falsas. Se um veraz dissesse “eu sou mentiroso”, a frase seria falsa — o que um veraz não diz. Se um mentiroso a dissesse, ela seria verdadeira — o que um mentiroso não diz. Nenhum dos dois pode pronunciá-la.\n\nAs outras frases têm quem as diga. “Eu sou veraz” é dita pelos dois tipos: é verdade na boca do veraz e mentira na do mentiroso. “Meu vizinho é mentiroso” depende do vizinho e cabe a um ou a outro. “Dois mais dois são quatro” é dita por um veraz, e “dois mais dois são cinco”, por um mentiroso.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), A diz: “B é mentiroso”. B diz: “A e eu somos do mesmo tipo”. O que são A e B?",
    opcoes: [
      "A é mentiroso, e B é veraz",
      "Os dois são verazes",
      "Os dois são mentirosos",
      "A é veraz, e B é mentiroso",
      "Não é possível determinar",
    ],
    correta: 3,
    explicacao:
      "Suponha que A seja veraz. Então B é mentiroso, e a frase de B — “somos do mesmo tipo” — é falsa, como deve ser, porque os dois são de tipos diferentes. Tudo se encaixa. Agora suponha que A seja mentiroso: então B é veraz, e a frase de B teria de ser verdadeira — mas A mentiroso e B veraz não são do mesmo tipo. Contradição. Logo, A é veraz e B é mentiroso.\n\nOs dois verazes contradizem a frase de A, e os dois mentirosos a tornariam verdadeira. A situação é determinável: testar as duas hipóteses para A já resolve.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), A diz, sobre ele e seu companheiro B: “Pelo menos um de nós dois é mentiroso”. B não diz nada. Qual afirmação é necessariamente verdadeira?",
    opcoes: [
      "A é mentiroso",
      "B é mentiroso",
      "B é veraz",
      "A e B são do mesmo tipo",
      "Nenhum dos dois é mentiroso",
    ],
    correta: 1,
    explicacao:
      "Se A fosse mentiroso, a frase dele seria falsa — e “pelo menos um de nós é mentiroso” só é falsa quando os dois são verazes, o que contradiz a hipótese de A ser mentiroso. Então A é veraz, e a frase é verdadeira: pelo menos um dos dois mente. Como não é A, é B.\n\n“A é mentiroso” cai na contradição inicial. “B é veraz” e “nenhum dos dois é mentiroso” tornariam falsa a frase de um veraz. E “A e B são do mesmo tipo” não vale: A é veraz, e B, mentiroso. A resposta é determinável mesmo com B em silêncio.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), A diz, sobre ele e seu companheiro B: “Nós dois somos mentirosos”. Quantos mentirosos há entre A e B?",
    opcoes: [
      "Dois",
      "Nenhum",
      "Um ou dois, sem como saber",
      "Não é possível determinar",
      "Exatamente um",
    ],
    correta: 4,
    explicacao:
      "A não pode ser veraz: um veraz não diria que é mentiroso. Então A é mentiroso, e sua frase é falsa. “Nós dois somos mentirosos” é falsa quando pelo menos um dos dois é veraz — e, como A é mentiroso, esse veraz só pode ser B. Há exatamente um mentiroso: A.\n\n“Dois” tornaria a frase verdadeira, o que um mentiroso não diz. “Nenhum” contraria a primeira observação. E a quantidade é determinável: embora B não diga nada, seu tipo fica fixado pela falsidade da frase de A.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), um visitante relata esta conversa: A disse “B é veraz”, e B disse “A é mentiroso”. O que se pode concluir?",
    opcoes: [
      "Essa conversa não pode ter acontecido",
      "A é veraz, e B é mentiroso",
      "A é mentiroso, e B é veraz",
      "Os dois são mentirosos",
      "Os dois são verazes",
    ],
    correta: 0,
    explicacao:
      "Se A fosse veraz, B seria veraz, e a frase de B (“A é mentiroso”) seria verdadeira — mas A é veraz. Contradição. Se A fosse mentiroso, a frase dele seria falsa, e B seria mentiroso; mas então a frase de B (“A é mentiroso”) seria verdadeira, e um mentiroso não diz a verdade. Contradição de novo. Como A só pode ser veraz ou mentiroso, a conversa não pode ter acontecido.\n\nCada uma das quatro combinações de tipos cai numa dessas contradições. Nesses problemas, levar cada hipótese até o fim é o que mostra se o relato é coerente.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), A diz: “B e C são verazes”. B diz: “C é mentiroso”. C não diz nada. Qual afirmação é necessariamente verdadeira?",
    opcoes: [
      "B é veraz",
      "C é mentiroso",
      "A é mentiroso",
      "Os três são mentirosos",
      "B e C são do mesmo tipo",
    ],
    correta: 2,
    explicacao:
      "Se A fosse veraz, B e C seriam verazes, e a frase de B (“C é mentiroso”) seria falsa na boca de um veraz — contradição. Então A é mentiroso, com certeza.\n\nO resto não se decide. Se B for veraz, C é mentiroso, e a frase de A é falsa, como deve ser. Se B for mentiroso, C é veraz, e a frase de A continua falsa (B não é veraz). As duas situações são coerentes, e em ambas B e C são de tipos diferentes — por isso “B é veraz”, “C é mentiroso” e “B e C são do mesmo tipo” não são garantidas. E “os três são mentirosos” não acontece em nenhuma delas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Diante de duas portas, uma leva à saída e a outra não. Há dois guardas: um sempre diz a verdade e o outro sempre mente, mas não se sabe qual é qual. Você pode fazer uma única pergunta a um dos guardas, escolhido ao acaso. Qual pergunta permite descobrir a porta da saída, qualquer que seja a resposta?",
    opcoes: [
      "“Que porta você indica como a da saída?”",
      "“Você é o guarda que mente?”",
      "“O outro guarda mente?”",
      "“A porta da esquerda leva à saída?”",
      "“Que porta o outro guarda indicaria como a da saída?”",
    ],
    correta: 4,
    explicacao:
      "O truque é fazer a pergunta passar pelos dois guardas. Se você pergunta ao veraz, ele relata com fidelidade o que o mentiroso diria — a porta errada. Se pergunta ao mentiroso, ele mente sobre o que o veraz diria — e aponta, de novo, a porta errada. Nos dois casos, a porta indicada é a errada; basta escolher a outra.\n\n“Que porta você indica como a da saída?” recebe respostas opostas de cada guarda, e você não sabe com qual está falando. “Você é o guarda que mente?” recebe sempre “não”, e “o outro guarda mente?”, sempre “sim”: não informam nada. E “a porta da esquerda leva à saída?” recebe “sim” ou “não” conforme o guarda, o que não resolve.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), A diz: “Eu sou mentiroso, e B é veraz”. B não diz nada. O que se pode afirmar sobre B?",
    opcoes: [
      "B é veraz",
      "B é mentiroso",
      "B é de tipo oposto ao de A",
      "Não se sabe, porque B não disse nada",
      "B é veraz, e A também",
    ],
    correta: 1,
    explicacao:
      "A não pode ser veraz, porque um veraz não afirmaria, nem em parte, que é mentiroso: a conjunção seria falsa. Então A é mentiroso, e a frase inteira é falsa. Uma conjunção é falsa quando pelo menos uma parte é falsa; a primeira parte (“eu sou mentiroso”) é verdadeira, então a falsa é a segunda: B não é veraz. B é mentiroso, como A.\n\n“B é veraz” tornaria a frase verdadeira, o que um mentiroso não diz. Pelo mesmo motivo, B não é de tipo oposto ao de A. “B é veraz, e A também” cai na primeira observação. E o silêncio de B não impede a conclusão: a falsidade da frase de A já fixa o tipo dele.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Um vaso foi quebrado por uma de três crianças: Ana, Beto ou Caio. Ana diz: “Foi o Beto”. Beto diz: “Não fui eu”. Caio diz: “Não fui eu”. Sabe-se que apenas uma das três disse a verdade. Quem quebrou o vaso?",
    opcoes: [
      "Caio",
      "Ana",
      "Beto",
      "Ninguém: as falas são contraditórias",
      "Não é possível determinar",
    ],
    correta: 0,
    explicacao:
      "Testando cada criança como culpada: se fosse Ana, Beto e Caio diriam a verdade — duas verdades. Se fosse Beto, Ana e Caio diriam a verdade — duas de novo. Se fosse Caio, só Beto diria a verdade (“não fui eu”), enquanto Ana e Caio mentiriam. Só esse caso tem exatamente uma verdade: foi Caio.\n\nAna e Beto levam a duas falas verdadeiras, o que contraria o enunciado. As falas não são contraditórias: com Caio culpado, tudo se encaixa. Em problemas assim, o caminho é testar cada suspeito e contar quantas falas ficam verdadeiras.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Um dos quatro funcionários — Dênis, Eli, Fabiano e Gil — apagou um arquivo. Dênis diz: “Foi o Eli”. Eli diz: “Foi o Fabiano”. Fabiano diz: “Eu não fui”. Gil diz: “Não fui eu”. Exatamente um deles mente. Quem apagou o arquivo?",
    opcoes: [
      "Eli",
      "Dênis",
      "Fabiano",
      "Gil",
      "Não é possível determinar",
    ],
    correta: 0,
    explicacao:
      "Dênis e Eli acusam pessoas diferentes, então pelo menos um dos dois mente — e, como só um mente, os demais falam a verdade. Se Dênis mentisse, Eli diria a verdade e o culpado seria Fabiano; mas então Fabiano (“eu não fui”) também mentiria — dois mentirosos. Logo, quem mente é Eli, Dênis diz a verdade e o culpado é Eli. Conferindo: Fabiano e Gil são inocentes e dizem a verdade.\n\nCom Dênis culpado, Dênis e Eli mentiriam; com Fabiano, Dênis e Fabiano; com Gil, três mentiriam. Só Eli deixa um único mentiroso.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Um dos quatro amigos — Hugo, Isa, Jonas e Kely — comeu o último pedaço de bolo. Hugo diz: “Foi a Isa”. Isa diz: “Foi o Jonas”. Jonas diz: “A Isa está mentindo”. Kely diz: “Não fui eu”. Exatamente um deles diz a verdade. Quem comeu o bolo?",
    opcoes: [
      "Hugo",
      "Isa",
      "Jonas",
      "Não é possível determinar",
      "Kely",
    ],
    correta: 4,
    explicacao:
      "Isa e Jonas dizem coisas opostas: se a frase de Isa é falsa, a de Jonas é verdadeira, e vice-versa. Então um dos dois diz a verdade — e, como só uma pessoa diz a verdade, Hugo e Kely mentem. Kely mentir significa que ela comeu o bolo. Conferindo: Hugo mente (não foi Isa), Isa mente (não foi Jonas) e Jonas diz a verdade.\n\nCom Hugo, Isa ou Jonas como culpados, haveria duas ou três falas verdadeiras — a de Kely incluída, porque ela seria inocente. Só Kely como culpada deixa uma única verdade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Um dos três irmãos — Rui, Sol e Téo — deixou a porta aberta. Rui diz: “Foi a Sol”. Sol diz: “Foi o Téo”. Téo diz: “Não fui eu”. Exatamente dois deles dizem a verdade. Quem deixou a porta aberta?",
    opcoes: [
      "Sol",
      "Rui",
      "Téo",
      "Ninguém: as falas são contraditórias",
      "Não é possível determinar",
    ],
    correta: 0,
    explicacao:
      "Rui e Sol acusam pessoas diferentes, então no máximo um deles diz a verdade. Como são duas verdades, uma delas é a de Téo (“não fui eu”) — e a outra é de Rui ou de Sol. Se fosse de Sol, o culpado seria Téo, e a fala de Téo seria falsa. Então a verdade é de Rui: foi Sol. Conferindo: Rui e Téo dizem a verdade, e Sol mente.\n\nCom Rui culpado, só Téo diria a verdade; com Téo, só Sol. Nenhum dos dois casos tem duas verdades. As falas não são contraditórias: com Sol culpada, tudo se encaixa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Um prêmio está em uma de três caixas. Na caixa 1 está escrito: “O prêmio está aqui”. Na caixa 2: “O prêmio não está aqui”. Na caixa 3: “O prêmio não está na caixa 1”. Apenas uma das três frases é verdadeira. Em qual caixa está o prêmio?",
    opcoes: [
      "Na caixa 1",
      "Na caixa 2",
      "Na caixa 3",
      "Na caixa 1 ou na 3",
      "Não é possível determinar",
    ],
    correta: 1,
    explicacao:
      "As frases das caixas 1 e 3 são opostas: uma diz que o prêmio está na caixa 1, a outra que não está. Então exatamente uma delas é verdadeira — e, como só uma frase é verdadeira, a da caixa 2 é falsa. “O prêmio não está aqui”, na caixa 2, sendo falsa, significa que o prêmio está na caixa 2.\n\nCom o prêmio na caixa 1, as frases das caixas 1 e 2 seriam verdadeiras. Com o prêmio na caixa 3, as das caixas 2 e 3. Só a caixa 2 deixa uma única frase verdadeira — a da caixa 3.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Uma de duas portas leva à saída. Na porta 1, uma placa diz: “Pelo menos uma destas duas placas é falsa”. Na porta 2, outra placa diz: “A saída é pela porta 1”. Cada placa é verdadeira ou falsa. O que se pode concluir?",
    opcoes: [
      "A saída é pela porta 1, e as duas placas são verdadeiras",
      "A saída é pela porta 1, e só a placa da porta 2 é verdadeira",
      "A saída é pela porta 2, e as duas placas são falsas",
      "A saída é pela porta 2, e só a placa da porta 1 é verdadeira",
      "Não é possível determinar",
    ],
    correta: 3,
    explicacao:
      "Se a placa da porta 1 fosse falsa, não haveria nenhuma placa falsa — mas ela própria seria falsa. Contradição. Então a placa 1 é verdadeira: pelo menos uma das duas placas é falsa, e só pode ser a da porta 2. A placa 2 (“a saída é pela porta 1”) sendo falsa, a saída é pela porta 2.\n\nAs duas placas não podem ser verdadeiras, porque a placa 1 exige uma falsa. Nem as duas falsas, pela contradição do início. E a situação é determinável: a placa 1 se decide sozinha, e ela decide a placa 2.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa sala há cinco pessoas, e cada uma é veraz (sempre diz a verdade) ou mentirosa (sempre mente). A primeira diz: “Aqui há exatamente um mentiroso”. A segunda: “Aqui há exatamente dois mentirosos”. A terceira: “Exatamente três”. A quarta: “Exatamente quatro”. A quinta: “Exatamente cinco”. Quem diz a verdade?",
    opcoes: [
      "Somente a primeira pessoa",
      "Somente a quinta pessoa",
      "Nenhuma das cinco",
      "Somente a quarta pessoa",
      "A quarta e a quinta pessoas",
    ],
    correta: 3,
    explicacao:
      "As cinco frases dão números diferentes de mentirosos, então no máximo uma é verdadeira. Se nenhuma fosse, as cinco pessoas mentiriam — e a quinta frase (“exatamente cinco”) seria verdadeira, contradição. Logo, exatamente uma pessoa diz a verdade, e as outras quatro mentem: há quatro mentirosos. A frase verdadeira é a da quarta pessoa.\n\nSe a verdadeira fosse a da primeira, haveria um mentiroso, mas as outras quatro frases seriam falsas — quatro mentirosos. O mesmo desencontro acontece com a segunda, a terceira e a quinta. E duas frases não podem ser verdadeiras ao mesmo tempo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Uma de três pessoas — Ari, Bia e Caio — quebrou a janela. O culpado mente, e os inocentes dizem a verdade. Ari diz: “Não fui eu”. Bia diz: “Foi o Ari”. Caio diz: “A Bia está dizendo a verdade”. Quem quebrou a janela?",
    opcoes: [
      "Bia",
      "Caio",
      "Ari",
      "Ninguém: as falas são contraditórias",
      "Não é possível determinar",
    ],
    correta: 2,
    explicacao:
      "Se o culpado fosse Bia, ela mentiria, e Caio, inocente, diria a verdade ao afirmar que Bia diz a verdade — impossível. Se fosse Caio, ele mentiria, e então Bia não estaria dizendo a verdade; mas Bia seria inocente e teria de dizer a verdade. Resta Ari: ele mente ao dizer “não fui eu”, Bia diz a verdade ao acusá-lo, e Caio diz a verdade ao confirmar Bia.\n\nCom Bia ou Caio culpados, algum inocente precisaria mentir. As falas não são contraditórias, e a resposta é única.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "A chave do armário está com um de três colegas: Dado, Eli ou Fred. Dado diz: “A chave está com o Eli”. Eli diz: “A chave não está comigo”. Fred diz: “A chave está comigo”. Exatamente um deles mente. Com quem está a chave?",
    opcoes: [
      "Com Fred",
      "Com Dado",
      "Com Eli",
      "Com Eli ou com Fred",
      "Não é possível determinar",
    ],
    correta: 0,
    explicacao:
      "Dado e Eli dizem coisas opostas sobre Eli, então um dos dois mente — e, como só um mente, Fred diz a verdade: a chave está com ele. Conferindo: Dado mente (não está com Eli), e Eli diz a verdade.\n\nCom a chave com Dado, Dado e Fred mentiriam. Com a chave com Eli, Eli e Fred mentiriam. Só com Fred há exatamente um mentiroso. Quando duas falas se opõem, uma delas é necessariamente a mentira, e as demais passam a valer.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Quatro pessoas estão sentadas em volta de uma mesa redonda, e cada uma é veraz (sempre diz a verdade) ou mentirosa (sempre mente). Cada uma diz: “A pessoa à minha direita é mentirosa”. Quantos mentirosos há na mesa?",
    opcoes: [
      "0",
      "1",
      "3",
      "2",
      "4",
    ],
    correta: 3,
    explicacao:
      "Se uma pessoa é veraz, a da direita dela é mentirosa. Se é mentirosa, sua frase é falsa, e a da direita é veraz. Então os tipos se alternam em volta da mesa: veraz, mentiroso, veraz, mentiroso. Com quatro lugares, a alternância fecha certinho, e há exatamente 2 mentirosos — qualquer que seja o ponto de partida.\n\n0 e 4 fariam todos do mesmo tipo, o que quebra a alternância: um veraz com outro veraz à direita estaria mentindo. 1 e 3 também quebram a alternância em algum ponto da volta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Cinco pessoas estão sentadas em volta de uma mesa redonda, e cada uma é veraz (sempre diz a verdade) ou mentirosa (sempre mente). Um visitante conta que cada uma disse: “A pessoa à minha direita é mentirosa”. O que se pode concluir?",
    opcoes: [
      "O relato está errado: essa situação é impossível",
      "Há exatamente 2 mentirosos",
      "Há exatamente 3 mentirosos",
      "Todos são mentirosos",
      "Há 2 ou 3 mentirosos, conforme a arrumação",
    ],
    correta: 0,
    explicacao:
      "Com essa frase, os tipos precisam se alternar em volta da mesa: à direita de um veraz há um mentiroso, e à direita de um mentiroso há um veraz. Uma volta alternada só fecha com um número par de pessoas. Com cinco, começando por um veraz, a sequência V, M, V, M, V termina num veraz sentado à esquerda do primeiro, que também é veraz — e a frase do último seria falsa. Nenhuma arrumação funciona.\n\nPor isso não há número de mentirosos possível: 2 ou 3 é o que se obtém tentando alternar, mas a volta nunca fecha. E, se todos fossem mentirosos, cada frase seria verdadeira, o que um mentiroso não diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), A diz: “Nós três somos mentirosos”. B diz: “C é mentiroso”. C diz: “A é mentiroso”. Quem é veraz?",
    opcoes: [
      "Somente C",
      "Somente B",
      "Somente A",
      "B e C",
      "Nenhum dos três",
    ],
    correta: 0,
    explicacao:
      "A não pode ser veraz, porque um veraz não diz que é mentiroso: A é mentiroso, e sua frase é falsa — logo, pelo menos um dos três é veraz. C diz “A é mentiroso”, o que é verdade; então C é veraz. B diz que C é mentiroso, o que é falso: B é mentiroso.\n\nA é mentiroso desde o primeiro passo. B mente sobre C. E “nenhum dos três” tornaria verdadeira a frase de A, o que um mentiroso não diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Um mentiroso — alguém que sempre mente — diz: “Eu tenho dois irmãos”. O que se pode concluir com certeza?",
    opcoes: [
      "Ele não tem irmãos",
      "Ele tem mais de dois irmãos",
      "Ele tem menos de dois irmãos",
      "Ele tem exatamente um irmão",
      "Ele não tem exatamente dois irmãos",
    ],
    correta: 4,
    explicacao:
      "Como ele sempre mente, a frase é falsa: ele não tem dois irmãos. Isso é tudo o que se sabe — pode ter nenhum, um, três ou mais.\n\n“Não tem irmãos”, “tem mais de dois”, “tem menos de dois” e “tem exatamente um” escolhem um dos casos possíveis sem apoio. A negação de “tenho dois irmãos” é “não tenho dois irmãos”, que admite qualquer número diferente de dois. É o mesmo cuidado de negar uma frase com número: a negação só exclui o valor citado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Um mentiroso — alguém que sempre mente — diz: “Todos os meus amigos são advogados”. O que se pode concluir com certeza?",
    opcoes: [
      "Nenhum amigo dele é advogado",
      "Ele não tem amigos",
      "Algum amigo dele é advogado",
      "Ele tem exatamente um amigo que não é advogado",
      "Ele tem pelo menos um amigo que não é advogado",
    ],
    correta: 4,
    explicacao:
      "A frase é falsa, e a negação de “todos os meus amigos são advogados” é “pelo menos um dos meus amigos não é advogado”. Isso também garante que ele tem amigos: se não tivesse nenhum, a frase “todos os meus amigos são advogados” seria verdadeira por falta de exceção — e um mentiroso não a diria.\n\n“Nenhum amigo é advogado” vai além da negação. “Ele não tem amigos” tornaria a frase verdadeira. “Algum amigo é advogado” não é garantido: pode ser que nenhum seja. E “exatamente um” fixa uma quantidade que a frase não permite saber.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), você pergunta a um habitante: “Você é veraz?”. O que ele responde?",
    opcoes: [
      "“Sim”, se for veraz, e “não”, se for mentiroso",
      "“Não”, seja ele veraz ou mentiroso",
      "“Sim”, seja ele veraz ou mentiroso",
      "“Não”, se for veraz, e “sim”, se for mentiroso",
      "Depende do dia em que a pergunta é feita",
    ],
    correta: 2,
    explicacao:
      "O veraz é veraz e diz a verdade: responde “sim”. O mentiroso não é veraz, mas mente: também responde “sim”. Os dois dão a mesma resposta, e por isso essa pergunta não serve para distinguir um do outro.\n\nA resposta “não” exigiria um veraz dizendo que não é veraz, ou um mentiroso admitindo que não é veraz — as duas coisas contrariam o tipo de cada um. E nada no problema depende do dia: os tipos são fixos. Para distinguir, a pergunta precisa ter uma resposta verdadeira conhecida de antemão, como uma conta simples.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), qual pergunta, com resposta “sim” ou “não”, permite descobrir o tipo de um habitante?",
    opcoes: [
      "“Você é veraz?”",
      "“Você é mentiroso?”",
      "“Você já mentiu alguma vez?”",
      "“Dois mais dois são quatro?”",
      "“Seu vizinho é veraz?”",
    ],
    correta: 3,
    explicacao:
      "“Dois mais dois são quatro?” tem resposta verdadeira conhecida: “sim”. O veraz responde “sim”, e o mentiroso, “não”. A resposta revela o tipo de quem fala.\n\n“Você é veraz?” recebe “sim” dos dois tipos, e “você é mentiroso?” recebe “não” dos dois. “Você já mentiu alguma vez?” também recebe “não” dos dois: o veraz nunca mentiu, e o mentiroso mente ao negar. E “seu vizinho é veraz?” mistura dois desconhecidos: um veraz ao lado de um veraz e um mentiroso ao lado de um mentiroso dão a mesma resposta, “sim”.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Maria mente às segundas, terças e quartas-feiras e diz a verdade nos outros dias. João mente às quintas, sextas e sábados e diz a verdade nos outros dias. Num certo dia, os dois disseram: “Ontem foi um dos meus dias de mentir”. Que dia da semana era?",
    opcoes: [
      "Segunda-feira",
      "Quinta-feira",
      "Domingo",
      "Quarta-feira",
      "Sábado",
    ],
    correta: 1,
    explicacao:
      "Para Maria, a frase só é coerente em dois casos: num dia de mentira em que ontem foi dia de verdade (segunda, porque domingo é dia de verdade) ou num dia de verdade em que ontem foi dia de mentira (quinta, porque quarta é dia de mentira). Para João, do mesmo modo: quinta (dia de mentira, com quarta de verdade) ou domingo (dia de verdade, com sábado de mentira). O único dia comum é quinta-feira.\n\nSegunda funciona para Maria, mas não para João: na segunda ele diz a verdade, e ontem, domingo, não foi dia de mentira dele. Domingo funciona para João, mas não para Maria. Quarta e sábado não funcionam para nenhum dos dois.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Pedro mente às terças e às sextas-feiras e diz a verdade nos outros dias. Num certo dia, ele disse: “Amanhã é terça-feira”. Em que dias da semana ele pode ter dito isso?",
    opcoes: [
      "Somente segunda-feira",
      "Segunda, terça ou sexta-feira",
      "Somente terça ou sexta-feira",
      "Segunda ou sexta-feira",
      "Em qualquer dia da semana",
    ],
    correta: 1,
    explicacao:
      "A frase “amanhã é terça” só é verdadeira na segunda. Na segunda, Pedro diz a verdade, então pode tê-la dito. Nos dias em que mente — terça e sexta —, ele só diz frases falsas, e “amanhã é terça” é falsa nesses dois dias; então também pode tê-la dito. Nos demais dias, a frase é falsa e Pedro diz a verdade: impossível. Os dias possíveis são segunda, terça e sexta.\n\n“Somente segunda” esquece que o mentiroso diz frases falsas nos seus dias de mentira. “Somente terça ou sexta” esquece a segunda, em que a frase é verdadeira. “Segunda ou sexta” deixa a terça de fora. E “qualquer dia” ignora que, nos dias de verdade, ele não diria uma frase falsa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa sala, cada pessoa é veraz (sempre diz a verdade) ou mentirosa (sempre mente). Uma delas diz: “Todos nesta sala são mentirosos”. O que se pode concluir?",
    opcoes: [
      "Quem falou é veraz",
      "Todos na sala são mentirosos",
      "Quem falou é mentiroso, e há pelo menos um veraz na sala",
      "Quem falou é mentiroso, e todos os outros também",
      "Quem falou é veraz, e todos os outros são mentirosos",
    ],
    correta: 2,
    explicacao:
      "Quem falou não pode ser veraz: um veraz não diria que ele próprio é mentiroso. Então é mentiroso, e a frase é falsa — ou seja, nem todos na sala são mentirosos. Como quem falou é mentiroso, o veraz que existe é outra pessoa: há pelo menos um veraz na sala.\n\n“Quem falou é veraz” e “quem falou é veraz, e todos os outros são mentirosos” caem na primeira observação. “Todos são mentirosos” e “quem falou é mentiroso, e todos os outros também” tornariam a frase verdadeira, o que um mentiroso não diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), A diz: “B e C são do mesmo tipo”. Em seguida, alguém pergunta a C: “A e B são do mesmo tipo?”. O que C responde?",
    opcoes: [
      "“Não”",
      "Depende de C ser veraz ou mentiroso",
      "Depende de A ser veraz ou mentiroso",
      "C não pode responder sem se contradizer",
      "“Sim”",
    ],
    correta: 4,
    explicacao:
      "Há quatro combinações coerentes com a frase de A. Se A é veraz, B e C são do mesmo tipo; se A é mentiroso, são de tipos diferentes. Em cada caso, calcule a resposta de C. Com A, B e C verazes, C diz a verdade: A e B são do mesmo tipo — “sim”. Com A veraz e B e C mentirosos, a verdade é “não”, mas C mente: “sim”. Com A mentiroso, B veraz e C mentiroso, a verdade é “não”, e C mente: “sim”. Com A mentiroso, B mentiroso e C veraz, a verdade é “sim”, e C a diz. Em todos os casos, C responde “sim”.\n\nPor isso a resposta não depende do tipo de C nem do de A. E C sempre consegue responder: em nenhum dos casos há contradição.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), Carlos diz: “Dora mente”. Dora diz: “Eli mente”. Eli diz: “Carlos e Dora mentem”. Quem diz a verdade?",
    opcoes: [
      "Somente Carlos",
      "Somente Dora",
      "Somente Eli",
      "Carlos e Eli",
      "Nenhum dos três",
    ],
    correta: 1,
    explicacao:
      "Suponha que Carlos diga a verdade. Então Dora mente, e Eli, que ela acusa de mentir, diz a verdade — mas Eli afirma que Carlos mente, o que contradiz a hipótese. Então Carlos mente, e Dora diz a verdade. Pela frase de Dora, Eli mente; e de fato a frase de Eli (“Carlos e Dora mentem”) é falsa, porque Dora diz a verdade.\n\nCarlos mente desde o primeiro passo. Eli mente sobre Dora. E “nenhum dos três” tornaria verdadeira a frase de Eli sobre Carlos e Dora, o que um mentiroso não diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Pensei num número inteiro de 1 a 10. Ana disse: “É par”. Beto disse: “É maior que 5”. Caio disse: “É múltiplo de 3”. Dani disse: “É menor que 9”. Exatamente uma dessas quatro afirmações é falsa. Em que número pensei?",
    opcoes: [
      "6",
      "9",
      "8",
      "10",
      "4",
    ],
    correta: 2,
    explicacao:
      "Testando os candidatos: 6 torna as quatro afirmações verdadeiras (nenhuma falsa). 8 é par, maior que 5 e menor que 9, mas não é múltiplo de 3 — exatamente uma falsa. 9 não é par nem menor que 9 — duas falsas. 10 não é múltiplo de 3 nem menor que 9 — duas falsas. E 4 não é maior que 5 nem múltiplo de 3 — duas falsas. O número é 8.\n\nOs números de 1 a 5, e o 7, também deixam duas ou mais afirmações falsas. Em problemas com “exatamente uma é falsa”, contar as falsas de cada candidato é o caminho mais seguro.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Três livros — Álgebra, Biologia e Cálculo — estão lado a lado numa prateleira. Sobre a arrumação, alguém fez três afirmações: Álgebra está à esquerda de Biologia; Cálculo está no meio; Biologia está na ponta direita. Exatamente uma dessas afirmações é falsa. Qual é a ordem dos livros, da esquerda para a direita?",
    opcoes: [
      "Álgebra, Cálculo, Biologia",
      "Álgebra, Biologia, Cálculo",
      "Biologia, Cálculo, Álgebra",
      "Cálculo, Álgebra, Biologia",
      "Cálculo, Biologia, Álgebra",
    ],
    correta: 3,
    explicacao:
      "Testando as arrumações: Álgebra, Cálculo, Biologia torna as três afirmações verdadeiras — nenhuma falsa, o que não serve. Cálculo, Álgebra, Biologia deixa Álgebra à esquerda de Biologia e Biologia na ponta direita, mas Cálculo não está no meio: exatamente uma falsa. As demais arrumações deixam duas ou três afirmações falsas.\n\nÁlgebra, Biologia, Cálculo tira Cálculo do meio e Biologia da ponta. Biologia, Cálculo, Álgebra põe Biologia à esquerda de Álgebra e fora da ponta direita. E Cálculo, Biologia, Álgebra erra as três afirmações.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), cinco habitantes falam em sequência. A diz: “B mente”. B diz: “C mente”. C diz: “D mente”. D diz: “E mente”. E diz: “A e B mentem”. Quantos deles dizem a verdade?",
    opcoes: [
      "3",
      "1",
      "2",
      "0",
      "5",
    ],
    correta: 2,
    explicacao:
      "As quatro primeiras frases fazem os tipos se alternarem: A e B são de tipos opostos, B e C também, e assim por diante. Então A, C e E são do mesmo tipo, e B e D, do tipo oposto. A frase de E, “A e B mentem”, exige A e B mentirosos — mas A e B são de tipos opostos, então essa frase é sempre falsa. Logo, E é mentiroso, e com ele A e C; B e D são verazes. São 2.\n\n3 inverteria os grupos, fazendo E veraz — o que exigiria sua frase verdadeira, impossível. 1, 0 e 5 quebram a alternância imposta pelas quatro primeiras frases.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), um habitante diz: “Eu sou veraz”. O que se pode concluir sobre ele?",
    opcoes: [
      "Ele é veraz",
      "Ele é mentiroso",
      "Ninguém na ilha diria essa frase",
      "Nada: os dois tipos diriam essa frase",
      "Ele é veraz, porque um mentiroso não falaria de si",
    ],
    correta: 3,
    explicacao:
      "Se ele for veraz, a frase é verdadeira, e ele pode dizê-la. Se for mentiroso, a frase é falsa — e mentirosos dizem justamente frases falsas. Os dois tipos diriam “eu sou veraz”, então a frase não revela nada.\n\n“Ele é veraz” e “ele é mentiroso” escolhem um tipo sem apoio. A frase que ninguém diria é outra: “eu sou mentiroso”. E mentirosos podem, sim, falar de si — desde que digam algo falso, como “eu sou veraz”.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), um habitante diz: “Eu sou mentiroso, e hoje é segunda-feira”. O que se pode concluir?",
    opcoes: [
      "Ele é mentiroso, e hoje é segunda-feira",
      "Ele é mentiroso, e hoje não é segunda-feira",
      "Ele é veraz, e hoje é segunda-feira",
      "Ele é veraz, e hoje não é segunda-feira",
      "Ninguém na ilha poderia dizer essa frase",
    ],
    correta: 1,
    explicacao:
      "Um veraz não diria “eu sou mentiroso”, nem como parte de uma conjunção verdadeira. Então quem fala é mentiroso, e a frase inteira é falsa. Numa conjunção falsa, pelo menos uma parte é falsa; a primeira (“eu sou mentiroso”) é verdadeira, então a segunda é falsa: hoje não é segunda-feira.\n\n“Mentiroso, e hoje é segunda” tornaria a frase verdadeira. As opções com um veraz caem na primeira observação. E a frase pode, sim, ser dita — por um mentiroso, em qualquer dia que não seja segunda.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Uma moeda de ouro está em uma de três caixas. Na caixa 1 está escrito: “A moeda está na caixa 2”. Na caixa 2: “A moeda não está aqui”. Na caixa 3: “A moeda está aqui”. Exatamente duas dessas frases são verdadeiras. Onde está a moeda?",
    opcoes: [
      "Na caixa 3",
      "Na caixa 1",
      "Na caixa 2",
      "Na caixa 2 ou na 3",
      "Não é possível determinar",
    ],
    correta: 0,
    explicacao:
      "Testando cada caixa: com a moeda na 1, só a frase da caixa 2 é verdadeira. Com a moeda na 2, só a da caixa 1 é verdadeira (as das caixas 2 e 3 ficam falsas). Com a moeda na 3, as frases das caixas 2 e 3 são verdadeiras, e a da 1 é falsa — exatamente duas. A moeda está na caixa 3.\n\nAs caixas 1 e 2 deixam uma única frase verdadeira. A resposta é determinável: só uma posição da moeda produz exatamente duas verdades.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Numa encruzilhada, você pergunta a um homem que sempre mente: “A estrada da esquerda leva à cidade?”. Ele responde “sim”. O que se pode concluir?",
    opcoes: [
      "A estrada da esquerda leva à cidade",
      "A estrada da direita não leva à cidade",
      "Nenhuma das duas estradas leva à cidade",
      "A estrada da esquerda não leva à cidade",
      "Nada: a resposta de um mentiroso não informa nada",
    ],
    correta: 3,
    explicacao:
      "Como o homem sempre mente, a resposta “sim” é falsa: a estrada da esquerda não leva à cidade. A resposta de um mentiroso informa tanto quanto a de um veraz — basta inverter.\n\n“A estrada da esquerda leva à cidade” confia na resposta como se ele dissesse a verdade. Sobre a estrada da direita, a pergunta não diz nada: ela pode ou não levar à cidade, e por isso “a direita não leva” e “nenhuma leva” não se concluem. E dizer que nada se conclui ignora que mentir sempre é tão previsível quanto dizer sempre a verdade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Uma pessoa que sempre diz a verdade afirmou: “Se chover amanhã, não vou sair de casa”. Qual das situações abaixo NÃO pode ter acontecido no dia seguinte?",
    opcoes: [
      "Choveu, e ela não saiu de casa",
      "Choveu, e ela saiu de casa",
      "Não choveu, e ela saiu de casa",
      "Não choveu, e ela não saiu de casa",
      "Choveu, ela ficou em casa e recebeu visitas",
    ],
    correta: 1,
    explicacao:
      "Uma condicional “se chover, não vou sair” só é falsa num caso: chover e a pessoa sair. Como quem falou sempre diz a verdade, a frase é verdadeira, e esse caso não pode ter acontecido.\n\nChover e ela ficar em casa cumpre a promessa, com ou sem visitas. E, se não chover, a frase não diz nada sobre o que ela faz: sair ou ficar em casa são compatíveis com a condicional. É o mesmo princípio da tabela-verdade: a condicional com antecedente falso é verdadeira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Uma pessoa que sempre mente afirmou: “Se chover amanhã, não vou sair de casa”. O que aconteceu no dia seguinte?",
    opcoes: [
      "Choveu, e ela não saiu de casa",
      "Não choveu, e ela saiu de casa",
      "Choveu, e ela saiu de casa",
      "Não choveu, e ela ficou em casa",
      "Não é possível saber se choveu",
    ],
    correta: 2,
    explicacao:
      "Como a pessoa sempre mente, a condicional é falsa. E uma condicional só é falsa quando o antecedente acontece e o consequente não: choveu, e ela saiu de casa. Tanto a chuva quanto a saída ficam determinadas.\n\nChover e ela ficar em casa tornaria a frase verdadeira. Se não chovesse, a condicional seria verdadeira de qualquer forma, com ela saindo ou não — e um mentiroso não diz frase verdadeira. Por isso também é possível saber que choveu.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "Uma pessoa que sempre mente diz: “Eu tenho um carro e uma moto”. O que se pode concluir com certeza?",
    opcoes: [
      "Ela não tem carro nem moto",
      "Ela tem um carro, mas não tem moto",
      "Ela tem uma moto, mas não tem carro",
      "Ela não tem pelo menos um dos dois",
      "Ela tem os dois veículos",
    ],
    correta: 3,
    explicacao:
      "A frase é falsa, e a negação de “tenho um carro e uma moto” é “não tenho carro ou não tenho moto” (lei de De Morgan): falta pelo menos um dos dois veículos. Pode faltar só o carro, só a moto, ou os dois.\n\n“Não tem carro nem moto” escolhe um dos três casos possíveis, e o mesmo fazem “tem carro, mas não moto” e “tem moto, mas não carro”. E “tem os dois veículos” tornaria a frase verdadeira, o que um mentiroso não diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Entre Ana, Bia, Cris e Dani, exatamente uma sempre diz a verdade, e as outras três sempre mentem. Ana diz: “Eu sou a que diz a verdade”. Bia diz: “A Ana é a que diz a verdade”. Cris diz: “A Bia não é a que diz a verdade”. Dani diz: “A Ana é a que diz a verdade”. Quem diz a verdade?",
    opcoes: [
      "Ana",
      "Bia",
      "Dani",
      "Não é possível determinar",
      "Cris",
    ],
    correta: 4,
    explicacao:
      "Se fosse Ana, Bia e Dani, que repetem a frase dela, também diriam a verdade — seriam três. Se fosse Bia, sua frase (“a Ana é a que diz a verdade”) seria falsa. Se fosse Dani, sua frase também seria falsa. Resta Cris: ela diz, com razão, que Bia não é a veraz, e Ana, Bia e Dani mentem ao apontar Ana.\n\nCom Ana, haveria três verdades. Com Bia ou Dani, a própria veraz estaria mentindo. E a resposta é determinável: só Cris deixa exatamente uma pessoa dizendo a verdade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Duas amigas, Íris e Jane, são cada uma veraz (sempre diz a verdade) ou mentirosa (sempre mente). Íris diz: “Jane mente”. Jane diz: “Íris mente”. O que se pode concluir?",
    opcoes: [
      "As duas são mentirosas",
      "As duas são verazes",
      "São de tipos diferentes, sem como saber qual",
      "Íris é veraz, e Jane é mentirosa",
      "Jane é veraz, e Íris é mentirosa",
    ],
    correta: 2,
    explicacao:
      "Se Íris é veraz, Jane mente, e a frase de Jane (“Íris mente”) é de fato falsa — coerente. Se Íris é mentirosa, Jane não mente, e a frase de Jane (“Íris mente”) é verdadeira — também coerente. Nos dois casos, uma é veraz e a outra é mentirosa; as falas não permitem saber qual é qual.\n\nAs duas mentirosas tornariam verdadeiras as duas frases, e as duas verazes as tornariam falsas — impossível nos dois casos. E as opções que escolhem uma veraz específica vão além do que as falas garantem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Dois amigos, Lauro e Mauro, são cada um veraz (sempre diz a verdade) ou mentiroso (sempre mente). Lauro diz: “Mauro diz a verdade”. Mauro diz: “Lauro diz a verdade”. O que se pode concluir?",
    opcoes: [
      "Os dois são verazes",
      "Os dois são mentirosos",
      "Os dois são do mesmo tipo, sem como saber qual",
      "Lauro é veraz, e Mauro é mentiroso",
      "Mauro é veraz, e Lauro é mentiroso",
    ],
    correta: 2,
    explicacao:
      "Se Lauro é veraz, Mauro diz a verdade — e a frase de Mauro, que confirma Lauro, é verdadeira. Se Lauro é mentiroso, Mauro não diz a verdade, e a frase de Mauro (“Lauro diz a verdade”) é falsa, como deve ser. Os dois casos são coerentes: os dois são do mesmo tipo, mas não se sabe qual.\n\n“Os dois são verazes” e “os dois são mentirosos” escolhem um dos casos sem apoio. E um veraz com um mentiroso é impossível: o veraz confirmaria o mentiroso, dizendo uma falsidade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Três pessoas, cada uma veraz (sempre diz a verdade) ou mentirosa (sempre mente), dizem a mesma frase: “Exatamente um de nós três diz a verdade”. Quantas delas dizem a verdade?",
    opcoes: [
      "1",
      "0",
      "2",
      "3",
      "Não é possível determinar",
    ],
    correta: 1,
    explicacao:
      "As três dizem a mesma frase, então ou as três dizem a verdade, ou as três mentem — a frase não pode ser verdadeira na boca de uma e falsa na de outra. Se as três dissessem a verdade, seriam três verazes, e a frase (“exatamente um”) seria falsa. Então as três mentem, e a frase é de fato falsa: nenhuma diz a verdade.\n\n1 e 2 são impossíveis, porque a mesma frase teria valores diferentes para pessoas diferentes. 3 torna a frase falsa. E a resposta é determinável: 0.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Um guarda é veraz (sempre diz a verdade) ou mentiroso (sempre mente), e você não sabe qual. Você aponta uma porta e pergunta: “Se eu lhe perguntasse se esta porta leva à saída, você responderia ‘sim’?”. Ele responde “sim”. O que se pode concluir?",
    opcoes: [
      "A porta leva à saída só se o guarda for veraz",
      "A porta não leva à saída",
      "A porta leva à saída, qualquer que seja o tipo do guarda",
      "O guarda é veraz",
      "Nada: é preciso saber o tipo do guarda",
    ],
    correta: 2,
    explicacao:
      "Se o guarda é veraz, ele diz o que de fato responderia à pergunta direta: “sim” só se a porta leva à saída. Se é mentiroso, à pergunta direta ele responderia o contrário da verdade; perguntado se responderia “sim”, ele mente sobre isso — e as duas inversões se anulam: diz “sim” só se a porta leva à saída. Nos dois casos, “sim” significa que a porta é a da saída.\n\nPor isso a conclusão não depende do tipo do guarda, e também não se descobre esse tipo. “A porta não leva à saída” inverte a resposta sem necessidade.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Num grupo de quatro pessoas, cada uma é veraz (sempre diz a verdade) ou mentirosa (sempre mente). Todas dizem a mesma frase: “Pelo menos um de nós é veraz”. O que se pode concluir?",
    opcoes: [
      "As quatro são verazes",
      "As quatro são mentirosas",
      "Há exatamente um veraz",
      "Ou as quatro são verazes, ou as quatro são mentirosas",
      "Há pelo menos um veraz e pelo menos um mentiroso",
    ],
    correta: 3,
    explicacao:
      "Como todas dizem a mesma frase, ou todas dizem a verdade, ou todas mentem. Se todas forem verazes, a frase é verdadeira — coerente. Se todas forem mentirosas, não há nenhum veraz, e a frase é falsa — também coerente. Os dois cenários são possíveis, e nada decide entre eles.\n\n“As quatro são verazes” e “as quatro são mentirosas” escolhem um dos cenários sem apoio. Um grupo misto é impossível: haveria um veraz, a frase seria verdadeira, e os mentirosos estariam dizendo a verdade. Por isso “exatamente um veraz” e “pelo menos um de cada” também caem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Um dos cinco suspeitos — Ana, Beto, Caio, Duda e Enzo — pegou o documento. Ana diz: “Foi o Beto ou o Caio”. Beto diz: “Foi a Duda”. Caio diz: “Não foi o Enzo”. Duda diz: “Foi a Ana”. Enzo diz: “Não foi o Beto”. Apenas um deles diz a verdade. Quem pegou o documento?",
    opcoes: [
      "Ana",
      "Beto",
      "Caio",
      "Duda",
      "Enzo",
    ],
    correta: 4,
    explicacao:
      "Testando cada suspeito: se fosse Ana, diriam a verdade Caio, Duda e Enzo — três. Se fosse Beto, Ana e Caio — duas. Se fosse Caio, Ana, Caio e Enzo — três. Se fosse Duda, Beto, Caio e Enzo — três. Se fosse Enzo, só a frase do próprio Enzo (“não foi o Beto”) seria verdadeira, e os outros quatro mentiriam. Foi Enzo.\n\nOs outros quatro suspeitos deixam duas ou três frases verdadeiras. E nada impede que a única verdade seja dita pelo culpado: o enunciado só limita a quantidade de frases verdadeiras.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Uma pessoa que sempre diz a verdade afirmou: “Se eu passar no concurso, farei uma festa”. Sabe-se que ela não fez a festa. O que se pode concluir?",
    opcoes: [
      "Ela passou no concurso",
      "Ela não passou no concurso",
      "Ela mentiu",
      "Nada se pode concluir sobre o concurso",
      "Ela passou, mas desistiu da festa",
    ],
    correta: 1,
    explicacao:
      "Como a pessoa sempre diz a verdade, a condicional é verdadeira. Com o consequente falso (não houve festa), o modus tollens garante que o antecedente também é falso: ela não passou no concurso — se tivesse passado, teria feito a festa.\n\n“Ela passou” e “passou, mas desistiu da festa” tornariam a condicional falsa, o que contradiz o fato de ela sempre dizer a verdade. “Ela mentiu” contradiz o enunciado. E há, sim, conclusão sobre o concurso: o modus tollens a fornece.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "media",
    enunciado:
      "Numa ilha em que cada habitante é veraz (sempre diz a verdade) ou mentiroso (sempre mente), um habitante diz: “Se eu sou veraz, então hoje é feriado”. O que se pode concluir?",
    opcoes: [
      "Ele é veraz, e hoje é feriado",
      "Ele é mentiroso, e hoje não é feriado",
      "Ele é veraz, e hoje não é feriado",
      "Ele é mentiroso, e hoje é feriado",
      "Ninguém na ilha poderia dizer essa frase",
    ],
    correta: 0,
    explicacao:
      "Se ele fosse mentiroso, o antecedente (“eu sou veraz”) seria falso, e uma condicional com antecedente falso é verdadeira — um mentiroso estaria dizendo a verdade. Então ele é veraz, e a condicional é verdadeira; como o antecedente também é verdadeiro, o consequente precisa ser: hoje é feriado.\n\nAs opções com um mentiroso caem na primeira observação. “Veraz, e hoje não é feriado” tornaria a condicional falsa na boca de um veraz. E a frase pode ser dita: por um veraz, num feriado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "dificil",
    enunciado:
      "Seis pessoas estão sentadas em volta de uma mesa redonda, e cada uma é veraz (sempre diz a verdade) ou mentirosa (sempre mente). Todas dizem: “Meus dois vizinhos são mentirosos”. Qual é o maior número possível de verazes na mesa?",
    opcoes: [
      "2",
      "4",
      "6",
      "1",
      "3",
    ],
    correta: 4,
    explicacao:
      "Um veraz precisa ter os dois vizinhos mentirosos, então dois verazes nunca sentam lado a lado. Em seis lugares, isso permite no máximo 3 verazes, alternados: V, M, V, M, V, M. Nessa arrumação, cada mentiroso tem dois vizinhos verazes, e sua frase é de fato falsa. Então 3 é possível e é o máximo.\n\n4 e 6 poriam dois verazes lado a lado. 2 é possível (V, M, M, V, M, M), mas não é o máximo. E 1 veraz nem funciona, porque algum mentiroso ficaria entre dois mentirosos, e sua frase seria verdadeira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Verdades e mentiras",
    dificuldade: "facil",
    enunciado:
      "As frases abaixo falam de si mesmas. Contando as palavras de cada uma, qual delas é verdadeira?",
    opcoes: [
      "Esta frase tem quatro palavras",
      "Esta frase tem seis palavras",
      "Esta frase tem apenas três palavras",
      "Esta frase não tem nenhuma palavra",
      "Esta frase tem cinco palavras",
    ],
    correta: 4,
    explicacao:
      "Contando: “Esta frase tem cinco palavras” tem exatamente cinco palavras — esta, frase, tem, cinco, palavras —, então diz a verdade sobre si mesma.\n\n“Esta frase tem quatro palavras” e “esta frase tem seis palavras” também têm cinco palavras, e erram a própria conta. “Esta frase tem apenas três palavras” tem seis. E “esta frase não tem nenhuma palavra” é falsa só por existir: tem seis palavras. Frases que falam de si mesmas se conferem pelo próprio texto.",
  },
];
