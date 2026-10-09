/* Rascunho — Português de banca / Pontuação: vírgula e ponto e vírgula.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram usos assentados na gramática normativa: vírgula
   na enumeração, no vocativo, no aposto, nas intercaladas, na subordinada
   anteposta, antes de adversativas e explicativas, na elipse do verbo e na
   diferença entre oração adjetiva restritiva e explicativa; e a vírgula que
   não pode separar sujeito e verbo, verbo e complemento, nome e complemento
   nominal; ponto e vírgula entre orações longas e entre itens que já têm
   vírgulas internas. Ficaram de fora, de propósito, os casos facultativos
   (adjunto adverbial curto deslocado, vírgula antes de e com mesmo sujeito,
   etc. precedido de vírgula). */

export const materia = "portugues-banca";
export const tema = "Pontuação: vírgula e ponto e vírgula";
export const arquivo = "portugues-banca__pontuacao-virgula-e-ponto-e-virgula";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Em qual das frases a vírgula separa corretamente os itens de uma enumeração?",
    o: ["Comprei pão, leite, ovos e café na padaria.", "Comprei pão leite, ovos e café na padaria.", "Comprei, pão, leite, ovos e café na padaria.", "Comprei pão, leite, ovos, e café na padaria.", "Comprei pão, leite, ovos e café, na padaria."],
    x: "Os itens de uma enumeração são separados por vírgula, e o último é ligado ao anterior pela conjunção e, sem vírgula antes dela: pão, leite, ovos e café. A vírgula não separa o verbo do complemento que vem logo depois, nem o último item do adjunto que vem em seguida.\n\nComprei pão leite esquece a vírgula entre dois itens. Comprei, pão separa o verbo do primeiro complemento. Ovos, e café põe vírgula antes do e final de uma enumeração simples. E café, na padaria separa o último item do adjunto de lugar, sem necessidade.",
  },
  {
    d: "facil",
    e: "Em qual das frases a vírgula isola corretamente o vocativo?",
    o: ["Venha até aqui, Maria, e traga o caderno.", "Venha até aqui Maria, e traga o caderno.", "Venha, até aqui Maria e traga o caderno.", "Venha até aqui, Maria e, traga o caderno.", "Venha até aqui Maria e traga, o caderno."],
    x: "O vocativo, que serve para chamar ou interpelar alguém, deve ser isolado por vírgulas: venha até aqui, Maria, e traga o caderno. Quando está no meio da frase, leva vírgula antes e depois. Quando está no início, leva só depois, e no fim, só antes.\n\nVenha até aqui Maria, e traga deixa o vocativo sem a vírgula inicial. As demais frases colocam a vírgula em lugares que não isolam o vocativo: depois de venha, depois de e, ou entre traga e o caderno.",
  },
  {
    d: "facil",
    e: "Em qual das frases a vírgula isola corretamente o aposto?",
    o: ["Rui, meu irmão mais velho, mora em Recife.", "Rui, meu irmão mais velho mora em Recife.", "Rui meu irmão mais velho, mora em Recife.", "Rui meu irmão, mais velho, mora em Recife.", "Rui, meu irmão, mais velho mora em Recife."],
    x: "O aposto explicativo é isolado por vírgulas quando aparece no meio da frase: Rui, meu irmão mais velho, mora em Recife. Ele esclarece o termo anterior, e as duas vírgulas indicam o começo e o fim da explicação.\n\nAs demais frases usam só uma das vírgulas, ou posicionam as duas de forma errada. Rui, meu irmão mais velho mora esquece a segunda. Rui meu irmão mais velho, mora esquece a primeira. E as outras duas isolam apenas parte do aposto.",
  },
  {
    d: "facil",
    e: "Em qual das frases a vírgula está empregada de forma INCORRETA?",
    o: ["Os alunos da turma, fizeram a prova.", "Maria, venha cá agora.", "Comprei pão, leite e ovos.", "Estudou muito, mas não passou.", "Se chover, o jogo será adiado."],
    x: "Não se separa o sujeito do verbo por vírgula. Na frase com os alunos da turma, o sujeito é “os alunos da turma”, e a vírgula entre ele e o verbo fizeram é indevida. A frase correta é os alunos da turma fizeram a prova.\n\nAs demais estão corretas: Maria, venha isola o vocativo; pão, leite e ovos separa os itens da enumeração; estudou muito, mas não passou usa vírgula antes da conjunção adversativa; e se chover, o jogo será adiado isola a oração subordinada anteposta.",
  },
  {
    d: "facil",
    e: "Em qual das frases a vírgula antes da conjunção mas está empregada corretamente?",
    o: ["Ele estudou muito, mas não passou na prova.", "Ele estudou muito mas, não passou na prova.", "Ele estudou, muito mas não passou na prova.", "Ele estudou muito mas não passou, na prova.", "Ele, estudou muito mas não passou na prova."],
    x: "As conjunções adversativas, como mas, porém, contudo e todavia, introduzem orações coordenadas que se opõem à anterior, e a vírgula vem antes delas: ele estudou muito, mas não passou na prova. A vírgula marca o limite entre as duas orações.\n\nEle estudou muito mas, não passou coloca a vírgula depois da conjunção. As demais frases usam a vírgula entre estudou e muito, entre passou e na prova, ou entre o sujeito e o verbo, o que não marca o limite entre as orações.",
  },
  {
    d: "facil",
    e: "Em qual das frases a vírgula depois da oração subordinada anteposta está empregada corretamente?",
    o: ["Quando a chuva parou, saímos para o jantar.", "Quando a chuva parou saímos, para o jantar.", "Quando, a chuva parou saímos para o jantar.", "Quando a chuva, parou saímos para o jantar.", "Quando a chuva parou saímos para, o jantar."],
    x: "A oração subordinada adverbial que vem antes da principal deve ser separada dela por vírgula: quando a chuva parou, saímos para o jantar. A vírgula marca o fim da subordinada e o começo da principal.\n\nAs demais frases põem a vírgula em lugares que não marcam o limite entre as duas orações: depois de saímos, depois de quando, entre chuva e parou, ou entre para e o jantar.",
  },
  {
    d: "facil",
    e: "Em qual das frases a vírgula está correta na indicação de local e data?",
    o: ["Curitiba, 12 de março de 2025.", "Curitiba 12 de março, de 2025.", "Curitiba, 12, de março de 2025.", "Curitiba 12 de março de 2025,", "Curitiba, 12 de março, de 2025."],
    x: "Na indicação de local e data, a vírgula separa o nome do local da data, e a data não recebe outras vírgulas: Curitiba, 12 de março de 2025. O ponto final fecha a indicação, quando ela encerra um documento.\n\nAs demais formas acrescentam vírgulas depois do dia, depois do mês ou no fim, o que não é usado, ou esquecem a vírgula depois do local. A vírgula separa apenas o local da data.",
  },
  {
    d: "facil",
    e: "Por que não se coloca vírgula em “Os alunos estudaram para a prova”?",
    o: ["Porque não se separa o sujeito do verbo por vírgula", "Porque a frase não tem objeto direto", "Porque a frase é muito curta", "Porque o verbo estudar não admite pausa", "Porque a preposição para proíbe a vírgula"],
    x: "O sujeito, os alunos, e o verbo, estudaram, formam o núcleo da oração e não devem ser separados por vírgula. A regra vale mesmo quando o sujeito é longo: os alunos da turma que fizeram a prova estudaram. A pausa na fala não justifica a vírgula na escrita.\n\nA frase não tem objeto direto, mas isso não explica a ausência de vírgula. O tamanho da frase também não importa. O verbo estudar admite pausa, e a preposição para não proíbe a vírgula: ela só não é necessária ali.",
  },
  {
    d: "facil",
    e: "Em qual das frases não há vírgula inadequada separando os termos da oração?",
    o: ["O diretor entregou os prêmios aos vencedores.", "O diretor entregou, os prêmios aos vencedores.", "O diretor, entregou os prêmios aos vencedores.", "O diretor entregou os prêmios, aos vencedores.", "O diretor entregou os, prêmios aos vencedores."],
    x: "Na ordem direta, o sujeito, o verbo e os complementos não são separados por vírgula: o diretor entregou os prêmios aos vencedores. Cada termo se liga ao seguinte sem pausa, e a vírgula não se justifica entre eles.\n\nAs demais frases põem vírgula entre o verbo e o objeto direto, entre o sujeito e o verbo, entre o objeto direto e o indireto, ou entre o artigo e o substantivo. Todas separam termos que se completam.",
  },
  {
    d: "facil",
    e: "Em qual das frases a vírgula antes da conjunção e é empregada porque os sujeitos das orações são diferentes?",
    o: ["Ele chegou cedo, e ela saiu tarde.", "Ele abriu a janela, e respirou fundo.", "Ele chegou, cedo e ela saiu tarde.", "Ele chegou cedo e, ela saiu tarde.", "Ele chegou cedo e ela, saiu tarde."],
    x: "Quando as orações coordenadas ligadas por e têm sujeitos diferentes, a vírgula antes do e deixa clara a mudança de sujeito: ele chegou cedo, e ela saiu tarde. Quando o sujeito é o mesmo, a vírgula é dispensada: ele abriu a janela e respirou fundo.\n\nEle abriu a janela, e respirou fundo usa a vírgula com o mesmo sujeito. As demais frases põem a vírgula depois de chegou, depois do e ou depois de ela, o que não marca o limite entre as orações.",
  },
  {
    d: "facil",
    e: "Em qual das frases a expressão explicativa ou seja está corretamente isolada por vírgulas?",
    o: ["Ele é vegetariano, ou seja, não come carne.", "Ele é vegetariano ou seja, não come carne.", "Ele é vegetariano, ou seja não come carne.", "Ele é vegetariano, ou, seja não come carne.", "Ele é, vegetariano ou seja não come carne."],
    x: "Expressões explicativas, como ou seja, isto é, por exemplo e a saber, são isoladas por vírgulas quando aparecem no meio da frase: ele é vegetariano, ou seja, não come carne. A vírgula antes marca o fim da primeira parte, e a vírgula depois marca o começo da explicação.\n\nAs demais frases esquecem uma das vírgulas, ou rompem a expressão com uma vírgula entre ou e seja, ou ainda separam o verbo do predicativo, o que não é correto.",
  },
  {
    d: "facil",
    e: "Em qual das frases a oração intercalada está corretamente isolada por vírgulas?",
    o: ["Meu irmão, disse ela, chegou cedo.", "Meu irmão, disse ela chegou cedo.", "Meu irmão disse ela, chegou cedo.", "Meu irmão, disse, ela chegou cedo.", "Meu, irmão disse ela chegou cedo."],
    x: "A oração intercalada, como disse ela ou afirmou o diretor, interrompe a frase principal e deve ser isolada por vírgulas, antes e depois: meu irmão, disse ela, chegou cedo. As duas vírgulas marcam o início e o fim da interrupção.\n\nAs demais frases esquecem uma das vírgulas ou as colocam em lugares que não isolam a intercalada: depois de disse, depois de meu ou só no início.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Em qual das frases se entende que apenas alguns alunos foram aprovados, os que estudaram?",
    o: ["Os alunos que estudaram foram aprovados.", "Os alunos, que estudaram, foram aprovados.", "Os alunos que estudaram, foram aprovados.", "Os alunos, que estudaram foram aprovados.", "Os alunos que, estudaram foram aprovados."],
    x: "A oração adjetiva restritiva delimita o termo que modifica e não leva vírgulas: os alunos que estudaram foram aprovados, ou seja, só os que estudaram. A ausência de vírgulas indica que existem alunos que não estudaram e, por isso, não foram aprovados.\n\nOs alunos, que estudaram, foram aprovados usa vírgulas e transforma a oração em explicativa: todos os alunos estudaram. As demais frases têm vírgulas indevidas, entre o sujeito e o verbo ou dentro da oração adjetiva.",
  },
  {
    d: "media",
    e: "Em “Os candidatos, que chegaram atrasados, não puderam entrar”, o que a pontuação indica?",
    o: ["Que todos os candidatos chegaram atrasados e não puderam entrar", "Que apenas alguns candidatos chegaram atrasados", "Que a oração com que é restritiva", "Que a vírgula separa o sujeito do verbo", "Que os candidatos não chegaram atrasados"],
    x: "As vírgulas isolam a oração adjetiva “que chegaram atrasados”, que é explicativa: ela apenas acrescenta uma informação sobre os candidatos, e vale para todos. Por isso se entende que todos chegaram atrasados e todos ficaram de fora.\n\nA ideia de apenas alguns é própria da oração restritiva, sem vírgulas: os candidatos que chegaram atrasados não puderam entrar. A vírgula não separa o sujeito do verbo, porque isola uma oração intercalada, e a frase afirma, sim, que os candidatos chegaram atrasados.",
  },
  {
    d: "media",
    e: "Em qual das frases a vírgula isola corretamente o adjunto adverbial intercalado?",
    o: ["O diretor, na semana passada, anunciou as novas regras.", "O diretor na semana passada, anunciou as novas regras.", "O diretor, na semana passada anunciou as novas regras.", "O diretor, na semana, passada anunciou as novas regras.", "O diretor na semana, passada anunciou as novas regras."],
    x: "O adjunto adverbial que interrompe a ordem direta, entre o sujeito e o verbo, deve ser isolado por vírgulas, antes e depois: o diretor, na semana passada, anunciou as novas regras. As duas vírgulas marcam o início e o fim da interrupção.\n\nAs demais frases usam só uma das vírgulas, ou isolam apenas parte do adjunto: na semana, passada. A expressão na semana passada forma um só adjunto e não pode ser dividida pela vírgula.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração adjetiva explicativa está corretamente isolada por vírgulas?",
    o: ["Maria, cujo irmão mora em Lisboa, viaja amanhã.", "Maria cujo irmão mora em Lisboa, viaja amanhã.", "Maria, cujo irmão mora em Lisboa viaja amanhã.", "Maria cujo irmão, mora em Lisboa viaja amanhã.", "Maria, cujo irmão, mora em Lisboa viaja amanhã."],
    x: "A oração adjetiva explicativa, que acrescenta uma informação sobre um termo já determinado, vem entre vírgulas: Maria, cujo irmão mora em Lisboa, viaja amanhã. Maria é um nome próprio, que não precisa de restrição, e por isso a oração é explicativa.\n\nAs demais frases usam apenas uma das vírgulas, ou colocam vírgulas dentro da oração adjetiva, entre irmão e mora. A vírgula depois de Lisboa é a que fecha a oração intercalada e a separa do verbo da principal.",
  },
  {
    d: "media",
    e: "Em qual das frases as orações coordenadas assindéticas estão corretamente separadas por vírgula?",
    o: ["Chegou, viu, venceu.", "Chegou viu, venceu.", "Chegou, viu venceu.", "Chegou viu venceu.", "Chegou, viu, e, venceu."],
    x: "Orações coordenadas assindéticas são as que se justapõem sem conjunção, e a vírgula marca o limite entre elas: chegou, viu, venceu. Cada verbo forma uma oração, e a vírgula separa uma da outra.\n\nChegou viu, venceu e chegou, viu venceu esquecem uma das vírgulas. Chegou viu venceu não tem vírgula nenhuma. E chegou, viu, e, venceu põe vírgulas dentro e ao redor do e, o que a regra não admite.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção conclusiva portanto está bem pontuada?",
    o: ["Os alunos estudaram; portanto, foram aprovados.", "Os alunos estudaram portanto, foram aprovados.", "Os alunos estudaram, portanto foram, aprovados.", "Os alunos, estudaram portanto, foram aprovados.", "Os alunos estudaram portanto foram, aprovados."],
    x: "A conjunção conclusiva portanto introduz uma conclusão, e costuma vir depois de ponto e vírgula, com vírgula depois dela quando está no início da oração: os alunos estudaram; portanto, foram aprovados. O ponto e vírgula marca uma pausa maior entre as duas orações.\n\nAs demais frases esquecem a pontuação entre as orações, ou separam o sujeito do verbo, ou isolam foram de aprovados. A vírgula não separa o verbo do predicativo.",
  },
  {
    d: "media",
    e: "Qual é a função da vírgula depois de ela em “Eu gosto de café; ela, de chá”?",
    o: ["Indicar a omissão do verbo gostar", "Separar o sujeito do verbo", "Isolar um vocativo", "Separar itens de uma enumeração", "Marcar uma oração adjetiva explicativa"],
    x: "Na frase, o verbo gosta foi omitido na segunda parte, porque já aparece na primeira: eu gosto de café; ela gosta de chá. A vírgula depois de ela marca essa omissão (elipse do verbo), e o ponto e vírgula separa as duas orações paralelas.\n\nA vírgula não separa o sujeito do verbo, pois o verbo nem aparece. Ela não isola vocativo, porque não há chamamento. Não separa itens de enumeração, pois só há dois termos em paralelo. E não marca oração adjetiva, porque não há pronome relativo.",
  },
  {
    d: "media",
    e: "Por que se usa ponto e vírgula entre os itens de “Compareceram Ana, médica; Bruno, engenheiro; e Carla, advogada”?",
    o: ["Porque cada item já tem uma vírgula interna", "Porque o ponto e vírgula substitui a conjunção e", "Porque a frase é uma pergunta", "Porque Ana, Bruno e Carla são vocativos", "Porque o verbo está no plural"],
    x: "Quando os itens de uma enumeração já têm vírgulas internas, como em Ana, médica, o ponto e vírgula serve para separar os itens maiores, evitando confusão com as vírgulas menores: Ana, médica; Bruno, engenheiro; e Carla, advogada. Cada item inclui um nome e um aposto.\n\nO ponto e vírgula não substitui o e, que continua antes do último item. A frase não é pergunta. Ana, Bruno e Carla não são vocativos, mas sujeitos de compareceram. E o plural do verbo não explica o ponto e vírgula.",
  },
  {
    d: "media",
    e: "Em qual das frases o ponto e vírgula está bem empregado para separar orações longas?",
    o: ["A equipe trabalhou durante todo o fim de semana, sem pausas para o descanso; mesmo assim, o prazo não foi cumprido.", "A equipe trabalhou; durante todo o fim de semana, sem pausas para o descanso, mesmo assim o prazo não foi cumprido.", "A equipe trabalhou durante todo o fim de semana; sem pausas para o descanso, mesmo assim; o prazo não foi cumprido.", "A equipe; trabalhou durante todo o fim de semana, sem pausas para o descanso, mesmo assim o prazo não foi cumprido.", "A equipe trabalhou durante todo o fim de semana, sem pausas para o descanso, mesmo assim o prazo não foi cumprido;"],
    x: "O ponto e vírgula separa orações longas, que já têm vírgulas internas ou que formam blocos de sentido distintos: a primeira oração vai até para o descanso, e a segunda, introduzida por mesmo assim, apresenta uma ideia de oposição. Daí o ponto e vírgula antes de mesmo assim, que é seguido de vírgula.\n\nAs demais frases põem o ponto e vírgula entre o sujeito e o verbo, no meio da oração, ou no fim da frase, o que não separa orações. Em todas elas, o sinal aparece onde não há limite entre blocos de sentido.",
  },
  {
    d: "media",
    e: "Em qual das frases a pontuação em torno da oração adjetiva contraria a norma-padrão?",
    o: ["Os livros, que estão na mesa são meus.", "Os livros que estão na mesa são meus.", "Os livros, que estão na mesa, são meus.", "Meus livros estão na mesa, mas os seus não.", "Compre os livros, os cadernos e as canetas."],
    x: "A oração adjetiva explicativa vem entre duas vírgulas, e a restritiva não leva vírgula nenhuma. Em os livros, que estão na mesa são meus, há apenas a primeira vírgula, e a oração fica sem fechamento: o certo é os livros, que estão na mesa, são meus, ou os livros que estão na mesa são meus.\n\nAs demais estão corretas: os livros que estão na mesa são meus é restritiva, sem vírgulas; os livros, que estão na mesa, são meus é explicativa; meus livros estão na mesa, mas os seus não usa vírgula antes de mas; e compre os livros, os cadernos e as canetas separa itens.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração subordinada intercalada está corretamente isolada por vírgulas?",
    o: ["Ela, quando chegou, abriu a janela.", "Ela quando chegou, abriu a janela.", "Ela, quando chegou abriu a janela.", "Ela quando, chegou abriu a janela.", "Ela, quando, chegou abriu a janela."],
    x: "A oração subordinada adverbial que aparece no meio da principal, entre o sujeito e o verbo, deve ser isolada por vírgulas: ela, quando chegou, abriu a janela. As duas vírgulas marcam o começo e o fim da interrupção.\n\nAs demais frases usam só uma das vírgulas, ou separam a conjunção quando do resto da oração, ou as duas coisas. A conjunção faz parte da subordinada e não pode ser separada dela por vírgula.",
  },
  {
    d: "media",
    e: "Em qual das frases a vírgula separa corretamente os adjetivos em sequência?",
    o: ["Era uma casa grande, branca e antiga.", "Era uma casa, grande, branca e antiga.", "Era uma casa grande branca, e antiga.", "Era uma casa grande, branca, e antiga.", "Era, uma casa grande, branca e antiga."],
    x: "Quando vários adjetivos se referem ao mesmo substantivo, eles são separados por vírgula, e o último é ligado pela conjunção e, sem vírgula antes dela: uma casa grande, branca e antiga. A vírgula não separa o substantivo do primeiro adjetivo.\n\nUma casa, grande separa o substantivo do adjetivo. Grande branca, e antiga esquece a vírgula entre os dois primeiros e põe vírgula antes do e. Branca, e antiga põe vírgula antes do e final. E era, uma casa separa o verbo do predicativo.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção explicativa pois está corretamente pontuada?",
    o: ["Leve o guarda-chuva, pois vai chover à tarde.", "Leve o guarda-chuva pois, vai chover à tarde.", "Leve, o guarda-chuva pois vai chover à tarde.", "Leve o guarda-chuva pois vai chover, à tarde.", "Leve o guarda-chuva, pois, vai chover à tarde."],
    x: "A conjunção explicativa pois, quando vem depois da oração que explica, é precedida de vírgula: leve o guarda-chuva, pois vai chover à tarde. A vírgula marca o limite entre a ordem e a explicação, e não vem depois do pois.\n\nLeve o guarda-chuva pois, vai chover coloca a vírgula depois da conjunção. Leve, o guarda-chuva separa o verbo do objeto direto. Vai chover, à tarde separa o adjunto sem necessidade, e pois, vai repete a vírgula depois da conjunção.",
  },
  {
    d: "media",
    e: "Em qual das frases a vírgula depois do adjunto adverbial longo e deslocado está empregada corretamente?",
    o: ["Na manhã do dia seguinte ao grande jogo, os torcedores voltaram às ruas.", "Na manhã do dia seguinte ao grande jogo os torcedores, voltaram às ruas.", "Na manhã, do dia seguinte ao grande jogo os torcedores voltaram às ruas.", "Na manhã do dia seguinte, ao grande jogo os torcedores voltaram às ruas.", "Na manhã do dia seguinte ao grande jogo os torcedores voltaram, às ruas."],
    x: "O adjunto adverbial longo que vem antes do sujeito é separado do resto da oração por vírgula: na manhã do dia seguinte ao grande jogo, os torcedores voltaram às ruas. A vírgula marca o fim do adjunto e o começo da oração na ordem direta.\n\nAs demais frases põem a vírgula depois de torcedores, depois de manhã, depois de seguinte ou depois de voltaram, e nenhuma dessas posições marca o limite entre o adjunto e a oração.",
  },
  {
    d: "media",
    e: "Em qual das frases a vírgula separa indevidamente um nome do seu complemento?",
    o: ["A construção, de pontes exige muito planejamento.", "A construção de pontes, por exemplo, exige muito planejamento.", "Maria, a engenheira, coordena a obra.", "Quando a obra terminar, voltaremos.", "O prefeito, Paulo, assinou o contrato."],
    x: "O complemento nominal completa o sentido de um substantivo e não pode ser separado dele por vírgula: a construção de pontes. Em a construção, de pontes, a vírgula quebra essa ligação e é indevida. A frase correta é a construção de pontes exige muito planejamento.\n\nAs demais estão corretas: por exemplo é expressão explicativa e fica entre vírgulas; a engenheira é aposto; quando a obra terminar é subordinada anteposta; e Paulo é aposto do prefeito.",
  },
  {
    d: "media",
    e: "Em qual das frases a vírgula antes do aposto final está empregada corretamente?",
    o: ["Visitei Lisboa, capital de Portugal.", "Visitei, Lisboa capital de Portugal.", "Visitei Lisboa capital, de Portugal.", "Visitei Lisboa capital de, Portugal.", "Visitei Lisboa, capital, de Portugal."],
    x: "O aposto que vem no fim da frase é separado do termo que explica por uma vírgula antes dele: visitei Lisboa, capital de Portugal. A vírgula marca o começo da explicação, e como a frase termina com o aposto, não é preciso fechá-lo.\n\nAs demais frases põem a vírgula entre o verbo e o objeto, entre capital e de, entre de e Portugal, ou dividem o aposto com uma vírgula interna, o que quebra a ligação entre o nome e seu complemento.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção adversativa porém, deslocada para o meio da oração, está corretamente isolada?",
    o: ["Ele disse, porém, que viria.", "Ele disse porém, que viria.", "Ele disse, porém que viria.", "Ele, disse porém que viria.", "Ele disse porém que, viria."],
    x: "As conjunções adversativas e conclusivas, quando deslocadas para o meio da oração, são isoladas por vírgulas: ele disse, porém, que viria. As duas vírgulas marcam a interrupção da ordem direta pela conjunção.\n\nAs demais frases usam só uma das vírgulas, ou as colocam entre o sujeito e o verbo ou depois de que. A vírgula que aparece depois de ele separaria o sujeito do verbo, o que não se admite.",
  },
  {
    d: "media",
    e: "Qual das situações abaixo exige o uso de vírgula?",
    o: ["Isolar um vocativo", "Separar o sujeito do verbo", "Separar o verbo do objeto direto", "Separar o substantivo do seu complemento nominal", "Separar o artigo do substantivo"],
    x: "O vocativo, que chama ou interpela alguém, deve ser isolado por vírgula: Maria, venha cá. É um dos empregos obrigatórios da vírgula, ao lado do aposto, da enumeração, da oração intercalada e da subordinada anteposta.\n\nAs outras situações são vedadas: não se separa o sujeito do verbo, o verbo do objeto direto, o substantivo do seu complemento nominal, nem o artigo do substantivo. Todos esses termos se ligam entre si sem pausa.",
  },
  {
    d: "media",
    e: "Em qual das frases há vírgula empregada de forma INCORRETA?",
    o: ["O aluno que faltou, perdeu a prova.", "Pedro, meu primo, mora no Rio.", "Venha, Ana, e traga os livros.", "Se puder, ligue para mim.", "Estudei, mas não entendi a matéria."],
    x: "Em o aluno que faltou, perdeu a prova, a vírgula separa o sujeito, “o aluno que faltou”, do verbo perdeu. A oração adjetiva restritiva faz parte do sujeito, e a vírgula entre o sujeito e o verbo é indevida. O certo é o aluno que faltou perdeu a prova.\n\nAs demais estão corretas: Pedro, meu primo, mora isola o aposto; venha, Ana, e traga isola o vocativo; se puder, ligue isola a subordinada anteposta; e estudei, mas não entendi usa vírgula antes de mas.",
  },
  {
    d: "media",
    e: "Em qual das frases o ponto e vírgula está empregado de forma INCORRETA?",
    o: ["O aluno; que faltou perdeu a prova.", "Eu gosto de café; ela, de chá.", "Chegou cedo, pois tinha pressa; saiu tarde, por esquecimento.", "Compraram pães, bolos e doces; roupas, calçados e bolsas.", "A equipe trabalhou muito; no entanto, o prazo não foi cumprido."],
    x: "O ponto e vírgula separa orações ou blocos de sentido, e não deve interromper o sujeito. Em o aluno; que faltou perdeu a prova, o sinal separa o sujeito da oração que o restringe, o que é indevido.\n\nAs demais estão corretas: eu gosto de café; ela, de chá separa orações paralelas com elipse do verbo; chegou cedo...; saiu tarde... separa blocos com vírgulas internas; compraram pães...; roupas... separa duas listas; e a equipe trabalhou muito; no entanto... separa a oração de uma que a contraria.",
  },
  {
    d: "media",
    e: "Qual a diferença entre oração adjetiva restritiva e explicativa quanto à pontuação?",
    o: ["A restritiva não usa vírgulas, e a explicativa vem entre vírgulas", "A restritiva vem entre vírgulas, e a explicativa não usa vírgulas", "As duas vêm sempre entre vírgulas", "As duas nunca usam vírgulas", "A restritiva usa ponto e vírgula, e a explicativa, dois-pontos"],
    x: "A oração adjetiva restritiva delimita o termo que modifica e não é isolada por vírgulas: os alunos que estudaram passaram, só os que estudaram. A explicativa apenas acrescenta uma informação sobre o termo e vem entre vírgulas: os alunos, que estudaram, passaram, todos eles.\n\nInverter as duas contraria a norma-padrão. As duas não vêm sempre entre vírgulas, nem as dispensam sempre. E nenhuma delas é isolada por ponto e vírgula ou dois-pontos.",
  },
  {
    d: "media",
    e: "Em qual das frases há vírgula empregada de forma INCORRETA diante de oração subordinada substantiva?",
    o: ["Ele disse, que viria amanhã.", "Se vier, avise-me.", "Quando chegar, ligue para casa.", "É certo que ele viria amanhã.", "Pedi que ele viesse, porém ele recusou."],
    x: "A oração subordinada substantiva completa o verbo ou o nome e não é separada dele por vírgula: ele disse que viria amanhã. Em ele disse, que viria, a vírgula separa o verbo dizer do seu objeto direto oracional, o que é indevido.\n\nAs demais estão corretas: se vier, avise-me isola a subordinada anteposta; quando chegar, ligue isola outra subordinada anteposta; é certo que ele viria não tem vírgula entre a principal e a substantiva; e pedi que ele viesse, porém ele recusou usa vírgula antes da adversativa.",
  },
  {
    d: "media",
    e: "Por que não há vírgula antes do e em “Comprei pão, leite e ovos”?",
    o: ["Porque o e já une os dois últimos itens da enumeração", "Porque a frase é uma pergunta", "Porque o verbo está no passado", "Porque pão, leite e ovos são vocativos", "Porque o e é uma preposição"],
    x: "Em uma enumeração simples, os itens são separados por vírgula, e o último é ligado ao anterior pela conjunção e, que já faz o papel de separação. Por isso a vírgula não vem antes do e: pão, leite e ovos. Essa é a regra geral da enumeração.\n\nA frase não é pergunta. O tempo do verbo não influi na pontuação. Pão, leite e ovos são objetos diretos de comprei, e não vocativos. E o e é uma conjunção aditiva, e não uma preposição.",
  },
  {
    d: "media",
    e: "Por que há vírgula depois de chover em “Se chover, o jogo será adiado”?",
    o: ["Porque a oração subordinada vem antes da principal", "Porque o verbo chover é impessoal", "Porque a frase tem um aposto", "Porque se é uma partícula apassivadora", "Porque a oração principal é restritiva"],
    x: "A oração subordinada adverbial condicional, se chover, vem antes da principal, o jogo será adiado, e por isso é separada dela por vírgula. A vírgula marca o fim da subordinada e o começo da principal. Se a ordem fosse inversa, a vírgula não seria necessária: o jogo será adiado se chover.\n\nO verbo chover é impessoal, mas isso não explica a vírgula. Não há aposto na frase. O se, aqui, é conjunção condicional, e não partícula apassivadora. E a principal não é restritiva, porque restritiva é um tipo de oração adjetiva.",
  },
  {
    d: "media",
    e: "Qual das frases abaixo apresenta pontuação adequada em todas as vírgulas?",
    o: ["Meu tio, que mora em Salvador, visitou-nos ontem, mas não ficou para o jantar.", "Meu tio que mora em Salvador, visitou-nos ontem mas, não ficou para o jantar.", "Meu tio, que mora em Salvador visitou-nos ontem, mas não ficou, para o jantar.", "Meu tio, que mora em Salvador, visitou-nos, ontem mas não ficou para o jantar.", "Meu tio que mora em Salvador visitou-nos ontem, mas, não ficou para o jantar."],
    x: "A frase correta aplica duas regras. Que mora em Salvador é oração adjetiva explicativa e vem entre vírgulas: meu tio, que mora em Salvador, visitou-nos. E a vírgula antes de mas separa a oração adversativa: visitou-nos ontem, mas não ficou para o jantar.\n\nAs demais frases esquecem uma das vírgulas da explicativa, põem vírgula depois de mas, entre o verbo e o adjunto ou antes de para o jantar, e nenhuma dessas posições marca o limite entre as orações.",
  },
  {
    d: "media",
    e: "Em qual das frases a vírgula na estrutura correlativa não só... mas também está empregada corretamente?",
    o: ["Ele não só estudou, mas também trabalhou durante o curso.", "Ele não só, estudou mas também trabalhou durante o curso.", "Ele não só estudou mas, também trabalhou durante o curso.", "Ele não só estudou mas também, trabalhou durante o curso.", "Ele, não só estudou mas também trabalhou durante o curso."],
    x: "Na estrutura correlativa não só... mas também, a vírgula vem antes de mas também, separando as duas orações coordenadas: ele não só estudou, mas também trabalhou. As duas partes têm o mesmo valor e se somam.\n\nAs demais frases põem a vírgula depois de só, depois de mas, depois de também ou entre o sujeito e o resto, e nenhuma delas marca o limite entre as duas orações.",
  },
  {
    d: "media",
    e: "Qual sinal de pontuação é mais adequado para separar blocos de sentido que já têm vírgulas internas?",
    o: ["O ponto e vírgula", "A vírgula", "As reticências", "O ponto de interrogação", "O travessão duplo"],
    x: "Quando os blocos de sentido já têm vírgulas internas, a vírgula não basta para separá-los, porque se confundiria com as menores. O ponto e vírgula marca uma pausa maior que a da vírgula e menor que a do ponto final, e organiza a frase: Ana, advogada; Bruno, médico; Carla, engenheira.\n\nA vírgula não distingue os blocos. As reticências indicam interrupção ou hesitação. O ponto de interrogação marca perguntas. E o travessão duplo isola trechos intercalados, e não separa blocos paralelos.",
  },
  {
    d: "media",
    e: "Em qual das frases falta uma vírgula obrigatória?",
    o: ["Maria venha cá agora.", "Venha cá, Maria.", "Estudou, mas não passou.", "Se chover, ficamos em casa.", "Rui, meu irmão, chegou cedo."],
    x: "Em Maria venha cá agora, o termo Maria é um vocativo, isto é, serve para chamar a pessoa. O vocativo deve ser isolado por vírgula: Maria, venha cá agora. A falta da vírgula torna a frase ambígua e desrespeita a norma-padrão.\n\nAs demais frases estão corretamente pontuadas: venha cá, Maria isola o vocativo no fim; estudou, mas não passou separa a oração adversativa; se chover, ficamos isola a subordinada anteposta; e Rui, meu irmão, chegou isola o aposto.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual das frases se entende que o falante tem outros irmãos que não moram em Lisboa?",
    o: ["Meus irmãos que moram em Lisboa me visitam sempre.", "Meus irmãos, que moram em Lisboa, me visitam sempre.", "Meus irmãos que moram em Lisboa, me visitam sempre.", "Meus irmãos, que moram em Lisboa me visitam sempre.", "Meus irmãos que, moram em Lisboa me visitam sempre."],
    x: "A oração adjetiva restritiva, sem vírgulas, delimita o termo que modifica: meus irmãos que moram em Lisboa são apenas alguns dos meus irmãos, os que moram lá. Por isso se entende que há outros irmãos que não moram em Lisboa.\n\nA frase com as duas vírgulas torna a oração explicativa, e passa a valer para todos os irmãos: todos moram em Lisboa. As demais frases têm uma única vírgula, entre o sujeito e o verbo ou entre o relativo e o resto da oração, o que contraria a norma-padrão.",
  },
  {
    d: "dificil",
    e: "Em qual das frases todas as vírgulas estão empregadas de acordo com a norma-padrão?",
    o: ["Ana, minha vizinha, disse que, se chover, o evento será cancelado.", "Ana minha vizinha, disse que se chover, o evento será cancelado.", "Ana, minha vizinha disse que, se chover o evento será cancelado.", "Ana, minha vizinha, disse, que se chover o evento será cancelado.", "Ana minha vizinha disse que, se chover, o evento será cancelado."],
    x: "Há dois empregos da vírgula na frase correta. Minha vizinha é aposto de Ana e vem entre vírgulas. Se chover é oração subordinada intercalada entre a conjunção que e a oração principal e também vem entre vírgulas: disse que, se chover, o evento será cancelado.\n\nAs demais frases esquecem uma das vírgulas do aposto, uma das da subordinada, ou separam disse de que, o que quebra a ligação do verbo com o objeto oracional. Também falta o fechamento da subordinada no meio da frase.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a explicativa pois e a conclusiva portanto estão corretamente pontuadas?",
    o: ["Chegue cedo, pois haverá fila; portanto, saia de casa antes das oito.", "Chegue cedo pois, haverá fila, portanto saia de casa antes das oito.", "Chegue cedo, pois haverá fila portanto, saia de casa antes das oito.", "Chegue, cedo pois haverá fila; portanto saia, de casa antes das oito.", "Chegue cedo, pois, haverá fila; portanto, saia de casa, antes das oito."],
    x: "A frase correta combina três recursos. A vírgula antes de pois marca a oração explicativa: chegue cedo, pois haverá fila. O ponto e vírgula separa dois blocos de sentido, o da explicação e o da conclusão. E a vírgula depois de portanto isola a conjunção conclusiva no início da oração.\n\nAs demais frases colocam a vírgula depois de pois, entre o verbo e seu complemento, ou depois de casa, e esquecem o ponto e vírgula ou a vírgula depois de portanto.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a vírgula antes de e e as vírgulas da intercalada estão empregadas corretamente?",
    o: ["O diretor, como se sabe, chegou cedo, e os alunos entraram em seguida.", "O diretor, como se sabe chegou cedo e, os alunos entraram em seguida.", "O diretor como se sabe, chegou cedo, e os alunos, entraram em seguida.", "O diretor, como se sabe, chegou cedo e os alunos, entraram em seguida.", "O diretor como se sabe chegou cedo, e, os alunos entraram em seguida."],
    x: "Há dois empregos da vírgula. A expressão como se sabe é uma oração intercalada e vem entre vírgulas. E a vírgula antes do e marca a mudança de sujeito entre as duas orações coordenadas: o diretor chegou cedo, e os alunos entraram em seguida.\n\nAs demais frases esquecem uma das vírgulas da intercalada, colocam a vírgula depois do e ou depois de os alunos, separando o sujeito do verbo, o que a norma-padrão não admite.",
  },
  {
    d: "dificil",
    e: "Qual das frases abaixo está pontuada de acordo com a norma-padrão?",
    o: ["Pedro, se você puder, avise-me quando chegar ao aeroporto.", "Pedro se você puder, avise-me, quando chegar ao aeroporto.", "Pedro, se você puder avise-me, quando chegar ao aeroporto.", "Pedro, se você puder, avise-me, quando, chegar ao aeroporto.", "Pedro se você puder avise-me quando chegar, ao aeroporto."],
    x: "A frase correta tem dois empregos da vírgula: o vocativo Pedro, isolado no início da frase, e a oração subordinada condicional se você puder, que vem anteposta à principal e é separada dela por vírgula. A oração temporal quando chegar ao aeroporto vem depois da principal e não leva vírgula.\n\nAs demais frases esquecem a vírgula depois de Pedro, ou depois da condicional, ou põem vírgula antes de quando ou depois de quando, separando a oração temporal da principal ou a conjunção do resto da oração.",
  },
  {
    d: "dificil",
    e: "Em qual das frases o ponto e vírgula separa corretamente itens que já têm vírgulas internas?",
    o: ["Estarão no evento Ana, advogada; Bruno, médico; e Carla, engenheira.", "Estarão no evento Ana; advogada, Bruno; médico, e Carla; engenheira.", "Estarão no evento; Ana, advogada, Bruno, médico; e Carla, engenheira.", "Estarão no evento Ana, advogada, Bruno, médico; e Carla, engenheira.", "Estarão no evento Ana, advogada; Bruno, médico, e Carla; engenheira."],
    x: "Quando cada item da enumeração já tem vírgula interna, como em Ana, advogada, o ponto e vírgula separa um item do outro sem causar confusão: Ana, advogada; Bruno, médico; e Carla, engenheira. A vírgula separa o nome de seu aposto, e o ponto e vírgula separa as pessoas.\n\nAs demais frases põem o ponto e vírgula entre o nome e o aposto, depois de evento, ou o omitem entre alguns dos itens, e a lista deixa de ser clara.",
  },
  {
    d: "dificil",
    e: "Em qual das frases há vírgula empregada de forma INCORRETA entre o verbo e o predicativo?",
    o: ["O resultado da prova foi, surpreendente.", "O resultado da prova, que saiu ontem, foi surpreendente.", "O resultado da prova foi, aliás, surpreendente.", "Foi, portanto, um resultado surpreendente.", "Surpreendente, o resultado alterou o ranking."],
    x: "O verbo de ligação e o predicativo do sujeito se completam e não são separados por vírgula: o resultado da prova foi surpreendente. A vírgula depois de foi é indevida.\n\nAs demais estão corretas: que saiu ontem é adjetiva explicativa entre vírgulas; aliás é expressão intercalada entre vírgulas; portanto, entre vírgulas, é conclusiva deslocada; e surpreendente, no início, é um termo deslocado, separado por vírgula.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre o emprego da vírgula está de acordo com a norma-padrão?",
    o: ["Isola vocativo, aposto, intercaladas e subordinada anteposta, sem separar sujeito e verbo.", "Separa sempre o sujeito do verbo quando o sujeito é longo.", "É obrigatória antes de qualquer oração subordinada posposta.", "Separa o verbo do objeto direto quando há pausa na fala.", "Deve ser colocada antes do e final de qualquer enumeração."],
    x: "A vírgula isola o vocativo, o aposto explicativo, as orações e expressões intercaladas e a oração subordinada que vem antes da principal. Ela não separa o sujeito do verbo, nem o verbo do complemento, nem o nome do complemento nominal, mesmo quando esses termos são longos.\n\nO sujeito longo continua ligado ao verbo. A subordinada posposta, em regra, não leva vírgula. A pausa na fala não justifica vírgula entre o verbo e o objeto. E o e final de uma enumeração simples não é precedido de vírgula.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre o ponto e vírgula está de acordo com a norma-padrão?",
    o: ["Separa orações longas ou itens de uma lista que já têm vírgulas internas.", "Equivale ao ponto final em qualquer contexto.", "Substitui a conjunção e em enumerações simples.", "Deve separar o sujeito do verbo quando o sujeito é longo.", "Só se emprega no fim de perguntas e exclamações."],
    x: "O ponto e vírgula marca uma pausa maior que a da vírgula e menor que a do ponto final. Serve para separar orações longas ou itens de uma lista que já têm vírgulas internas, e para separar uma oração de outra que a contraria, como com no entanto e mesmo assim.\n\nNão equivale ao ponto final, que encerra o período. Não substitui o e em enumerações simples. Não separa o sujeito do verbo. E não se emprega em perguntas e exclamações, que têm seus próprios sinais.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a pontuação das orações coordenadas adversativa e aditiva está de acordo com a norma-padrão?",
    o: ["Estudou muito, mas não passou; tentou de novo e conseguiu.", "Estudou muito mas, não passou; tentou de novo e, conseguiu.", "Estudou, muito mas não passou, tentou de novo e conseguiu.", "Estudou muito, mas, não passou tentou de novo e conseguiu.", "Estudou muito mas não passou; tentou, de novo e conseguiu."],
    x: "A frase correta aplica duas regras. A vírgula antes de mas marca a oração adversativa: estudou muito, mas não passou. O ponto e vírgula separa dois blocos de sentido, o da tentativa frustrada e o da nova tentativa. Em tentou de novo e conseguiu, o sujeito é o mesmo, e a vírgula antes do e é dispensada.\n\nAs demais frases põem a vírgula depois de mas, entre o verbo e o advérbio, depois de e, ou esquecem o ponto e vírgula entre os blocos, e por isso perdem a clareza da divisão.",
  },
];
