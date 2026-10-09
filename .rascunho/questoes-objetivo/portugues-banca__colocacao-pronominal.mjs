/* Rascunho — Português de banca / Colocação pronominal.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram regras assentadas na gramática normativa:
   próclise com palavra atrativa (negação, relativo, indefinido,
   interrogativo, conjunção subordinativa, talvez, nem, mal temporal, orações
   optativas, em + gerúndio), ênclise com o verbo no início da oração e no
   imperativo afirmativo, mesóclise com os dois futuros, as formas lo/la e
   no/na dos pronomes o/a, as combinações mo, lho e no-lo, e o pronome nos
   tempos compostos e nas locuções. Ficaram de fora, de propósito, os casos
   em que a gramática aceita as duas colocações (sujeito expresso antes do
   verbo, vírgula antes do pronome, gerúndio sem atrativo, preposição +
   infinitivo). */

export const materia = "portugues-banca";
export const tema = "Colocação pronominal";
export const arquivo = "portugues-banca__colocacao-pronominal";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "O que é próclise na colocação dos pronomes oblíquos átonos?",
    o: ["O pronome colocado antes do verbo", "O pronome colocado depois do verbo, com hífen", "O pronome colocado no meio do verbo", "O pronome colocado no fim da oração", "O pronome colocado antes do sujeito"],
    x: "Próclise é a colocação do pronome oblíquo átono antes do verbo, como em me disseram, nunca lhe contei e quem o viu. A palavra vem do grego e indica que o pronome se apoia no verbo que vem depois dele, sem hífen.\n\nO pronome depois do verbo, com hífen, é ênclise: disseram-me. O pronome no meio do verbo é mesóclise: dar-lhe-ei. As outras descrições não correspondem a nenhum dos três tipos: o pronome átono não se coloca no fim da oração nem antes do sujeito.",
  },
  {
    d: "facil",
    e: "O que é ênclise na colocação dos pronomes oblíquos átonos?",
    o: ["O pronome colocado depois do verbo, com hífen", "O pronome colocado antes do verbo", "O pronome colocado no meio do verbo", "O pronome colocado depois do sujeito", "O pronome que substitui o verbo"],
    x: "Ênclise é a colocação do pronome oblíquo átono depois do verbo, ligado a ele por hífen, como em disseram-me, entregue-o e vê-lo. A palavra vem do grego e indica que o pronome se apoia no verbo que vem antes dele.\n\nO pronome antes do verbo é próclise: me disseram. O pronome no meio do verbo é mesóclise: dar-lhe-ei. O pronome átono não se coloca depois do sujeito, e nenhum pronome substitui o verbo, porque o pronome retoma um termo da oração e não a ação.",
  },
  {
    d: "facil",
    e: "O que é mesóclise na colocação dos pronomes oblíquos átonos?",
    o: ["O pronome colocado no meio do verbo, entre o radical e a terminação", "O pronome colocado antes do verbo", "O pronome colocado depois do verbo, com hífen", "O pronome colocado depois do sujeito", "O pronome repetido duas vezes"],
    x: "Mesóclise é a colocação do pronome oblíquo átono no meio da forma verbal, entre o infinitivo e a terminação, ligado por dois hífens, como em dar-lhe-ei e falar-lhe-ia. Ocorre com os verbos no futuro do presente e no futuro do pretérito.\n\nO pronome antes do verbo é próclise: não lhe darei. O pronome depois do verbo é ênclise: dei-lhe. O pronome átono não se coloca depois do sujeito, e a repetição do pronome não é um tipo de colocação, mas uma redundância.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome átono é uma próclise?",
    o: ["Ninguém me avisou da mudança de horário.", "Avisaram-me da mudança de horário.", "Avisar-me-ão da mudança de horário.", "Querem avisar-me da mudança de horário.", "Vão avisar-nos da mudança de horário."],
    x: "Em ninguém me avisou, o pronome me aparece antes do verbo, e isso caracteriza a próclise. A palavra negativa ninguém atrai o pronome para antes do verbo, e por isso a próclise é obrigatória.\n\nAvisaram-me é ênclise, com o pronome depois do verbo e hífen. Avisar-me-ão é mesóclise, com o pronome no meio da forma verbal do futuro. Querem avisar-me e vão avisar-nos trazem o pronome depois do infinitivo, ligado por hífen, e também são casos de ênclise.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome átono é uma ênclise?",
    o: ["Entregaram-me o documento no escritório.", "Não me entregaram o documento no escritório.", "Entregar-me-ão o documento no escritório.", "Alguém me entregou o documento no escritório.", "Quem me entregou o documento no escritório?"],
    x: "Em entregaram-me, o pronome me aparece depois do verbo, ligado a ele por hífen, e isso caracteriza a ênclise. O verbo inicia a oração, e não há palavra atrativa antes dele.\n\nNão me entregaram é próclise, atraída pela negação. Entregar-me-ão é mesóclise, com o pronome no meio do futuro. Alguém me entregou é próclise, atraída pelo indefinido alguém. E quem me entregou é próclise, atraída pelo interrogativo quem.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome átono é uma mesóclise?",
    o: ["Dar-lhe-ei a resposta no fim da semana.", "Dei-lhe a resposta no fim da semana.", "Não lhe darei a resposta no fim da semana.", "Quando lhe der a resposta, ela saberá.", "Falei-lhe da resposta no fim da semana."],
    x: "Em dar-lhe-ei, o pronome lhe aparece no meio da forma verbal, entre o infinitivo dar e a terminação ei, ligado por dois hífens, e isso caracteriza a mesóclise. A forma é a do futuro do presente, que inicia a oração.\n\nDei-lhe é ênclise, com o pronome depois do verbo. Não lhe darei é próclise, atraída pela negação. Quando lhe der também é próclise, atraída pela conjunção quando. E falei-lhe é outra ênclise, com o verbo no pretérito.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome depois de palavra negativa está de acordo com a norma-padrão?",
    o: ["Nunca me contaram a verdade sobre o caso.", "Nunca contaram-me a verdade sobre o caso.", "Ninguém contou-me a verdade sobre o caso.", "Jamais contaram-me a verdade sobre o caso.", "Não contaram-me a verdade sobre o caso."],
    x: "As palavras negativas, como não, nunca, jamais e ninguém, atraem o pronome átono para antes do verbo, e a próclise é obrigatória: nunca me contaram. A palavra negativa ocupa a posição de atrativo, e o pronome se apoia no verbo que vem depois.\n\nNunca contaram-me, ninguém contou-me, jamais contaram-me e não contaram-me usam a ênclise depois de palavra negativa, o que a norma-padrão não admite. A ênclise só seria correta se o verbo iniciasse a oração: contaram-me a verdade.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome átono está de acordo com a norma-padrão?",
    o: ["Esta é a casa que nos pertence desde a infância.", "Esta é a casa que pertence-nos desde a infância.", "Alguém avisou-nos da mudança de endereço.", "Todos conhecem-no há muitos anos.", "Quem convidou-nos para a festa de formatura?"],
    x: "Palavras atrativas, como pronomes relativos, indefinidos e interrogativos, atraem o pronome átono para antes do verbo, e por isso a próclise é obrigatória. Em que nos pertence, o relativo que atrai o pronome nos para antes de pertence.\n\nEm que pertence-nos, o mesmo relativo exigiria a próclise. Alguém avisou-nos tem o indefinido alguém, e todos conhecem-no, o indefinido todos, ambos atrativos. Quem convidou-nos tem o interrogativo quem, também atrativo. Em todas elas a ênclise contraria a norma-padrão.",
  },
  {
    d: "facil",
    e: "Em qual das frases o pronome átono está bem colocado no início da oração?",
    o: ["Disseram-me a verdade sobre o caso.", "Me disseram a verdade sobre o caso.", "Disseram me a verdade sobre o caso.", "Disseram a verdade sobre o caso me.", "Me-disseram a verdade sobre o caso."],
    x: "Na norma-padrão, o pronome oblíquo átono não inicia a frase. Quando o verbo é o primeiro termo da oração, o pronome vem depois dele, ligado por hífen: disseram-me. Essa é a ênclise, obrigatória no início de período e depois de pausa.\n\nMe disseram começa a frase com o pronome. Disseram me esquece o hífen que liga o pronome ao verbo. Disseram a verdade sobre o caso me põe o pronome longe do verbo, e me-disseram usa o hífen no lugar errado, depois do pronome.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome no imperativo afirmativo está de acordo com a norma-padrão?",
    o: ["Entregue-me o relatório até amanhã.", "Me entregue o relatório até amanhã.", "Entregue me o relatório até amanhã.", "Entregue o relatório me até amanhã.", "Entregue o relatório até amanhã-me."],
    x: "No imperativo afirmativo, o pronome átono vem depois do verbo, ligado por hífen: entregue-me. É um caso de ênclise obrigatória, porque o verbo ocupa o início da oração e a frase não tem palavra atrativa antes dele.\n\nMe entregue começa a frase com o pronome, o que a norma-padrão não admite. Entregue me esquece o hífen. As frases em que o pronome vem depois de o relatório ou depois de amanhã afastam o pronome do verbo, o que também contraria a norma.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome no imperativo negativo está de acordo com a norma-padrão?",
    o: ["Não me entregue o relatório hoje.", "Não entregue-me o relatório hoje.", "Não entregue me o relatório hoje.", "Entregue-me não o relatório hoje.", "Entregue não me o relatório hoje."],
    x: "No imperativo negativo, o advérbio não atrai o pronome para antes do verbo, e a próclise é obrigatória: não me entregue. É o contrário do imperativo afirmativo, em que o pronome vem depois: entregue-me.\n\nNão entregue-me usa a ênclise depois de uma palavra negativa, o que a norma-padrão rejeita. Não entregue me esquece o hífen e também erra a posição. As frases com entregue antes de não deslocam a negação do lugar em que ela atrai o pronome.",
  },
  {
    d: "facil",
    e: "Em qual das frases a colocação do pronome depois de conjunção subordinativa está de acordo com a norma-padrão?",
    o: ["Quando me viu na porta, ele sorriu.", "Quando viu-me na porta, ele sorriu.", "Quando viu me na porta, ele sorriu.", "Quando na porta viu-me, ele sorriu.", "Quando viu na porta-me, ele sorriu."],
    x: "As conjunções subordinativas, como quando, se, que, porque e embora, atraem o pronome átono para antes do verbo, e a próclise é obrigatória: quando me viu. A conjunção abre a oração subordinada, e o pronome vem logo depois dela.\n\nQuando viu-me usa a ênclise depois da conjunção. Quando viu me esquece o hífen e também erra a posição. As frases com o pronome depois de na porta ou entre viu e na porta afastam o pronome do verbo, o que a norma-padrão não admite.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Em qual das frases a mesóclise está empregada de acordo com a norma-padrão?",
    o: ["Encontrar-nos-emos na biblioteca depois da aula.", "Nos encontraremos na biblioteca depois da aula.", "Encontraremos-nos na biblioteca depois da aula.", "Encontrar-emos-nos na biblioteca depois da aula.", "Encontrar-nos-eis na biblioteca depois da aula."],
    x: "A mesóclise ocorre com o futuro do presente e o futuro do pretérito quando o verbo inicia a oração e não há palavra atrativa antes dele. O pronome se coloca no meio da forma verbal, entre o infinitivo e a terminação, com hífens: encontrar-nos-emos.\n\nNos encontraremos começa a frase com o pronome. Encontraremos-nos usa a ênclise, que a norma-padrão não admite com o futuro. Encontrar-emos-nos mistura mesóclise com ênclise, e encontrar-nos-eis flexiona o verbo na segunda pessoa do plural, que corresponde a vós, e não a nós.",
  },
  {
    d: "media",
    e: "Em qual das frases a colocação do pronome com o futuro do presente está de acordo com a norma-padrão?",
    o: ["Não lhe darei a resposta antes do fim do mês.", "Não darei-lhe a resposta antes do fim do mês.", "Não dar-lhe-ei a resposta antes do fim do mês.", "Não darei a resposta lhe antes do fim do mês.", "Dar-lhe-ei não a resposta antes do fim do mês."],
    x: "A mesóclise só é possível quando o verbo do futuro inicia a oração. Quando há palavra atrativa antes dele, como a negação não, o pronome vem antes do verbo, e a próclise é obrigatória: não lhe darei. O verbo no futuro nunca admite a ênclise.\n\nNão darei-lhe usa a ênclise com o futuro. Não dar-lhe-ei usa a mesóclise depois de palavra negativa. Não darei a resposta lhe afasta o pronome. E dar-lhe-ei não a resposta desloca a negação para depois do pronome, o que a norma-padrão não admite.",
  },
  {
    d: "media",
    e: "Em qual das frases a colocação do pronome com o futuro do pretérito está de acordo com a norma-padrão?",
    o: ["Falar-lhe-ia do assunto, se houvesse tempo.", "Falaria-lhe do assunto, se houvesse tempo.", "Lhe falaria do assunto, se houvesse tempo.", "Falar-ia-lhe do assunto, se houvesse tempo.", "Falaria do assunto lhe, se houvesse tempo."],
    x: "O futuro do pretérito, tal como o futuro do presente, admite a mesóclise quando inicia a oração: falar-lhe-ia. O pronome se coloca entre o infinitivo e a terminação ia, ligado por hífens aos dois lados.\n\nFalaria-lhe usa a ênclise com o futuro do pretérito, que a norma-padrão não admite. Lhe falaria começa a frase com o pronome. Falar-ia-lhe põe o pronome depois da terminação, e falaria do assunto lhe o afasta do verbo, o que contraria a norma.",
  },
  {
    d: "media",
    e: "Em qual das frases a forma do pronome está adaptada ao verbo no infinitivo, de acordo com a norma-padrão?",
    o: ["Quero vê-lo amanhã, depois do almoço.", "Quero ver-o amanhã, depois do almoço.", "Quero vê-no amanhã, depois do almoço.", "Quero ver-lo amanhã, depois do almoço.", "Quero vê-o amanhã, depois do almoço."],
    x: "Quando o verbo termina em r, s ou z, essa consoante cai diante dos pronomes o, a, os, as, e o pronome assume as formas lo, la, los, las: ver + o = vê-lo. O verbo ganha acento quando necessário, como em vê-lo e pô-la.\n\nVer-o mantém o r e usa a forma o. Vê-no usa a forma no, que é própria de verbos terminados em ditongo nasal. Ver-lo mantém o r e adiciona lo, o que duplica a marca. E vê-o tira o r, mas não adapta o pronome.",
  },
  {
    d: "media",
    e: "Em qual das frases a forma do pronome está adaptada ao verbo terminado em ditongo nasal, de acordo com a norma-padrão?",
    o: ["Os seguranças viram-no na entrada do prédio.", "Os seguranças viram-o na entrada do prédio.", "Os seguranças viram-lo na entrada do prédio.", "Os seguranças viramno na entrada do prédio.", "Os seguranças viram-lhe na entrada do prédio."],
    x: "Quando o verbo termina em ditongo nasal, como -am, -em, -ão e -õe, os pronomes o, a, os, as assumem as formas no, na, nos, nas: viram + o = viram-no. O hífen liga o pronome ao verbo, como em qualquer ênclise.\n\nViram-o mantém a forma o, própria de verbos que terminam em vogal oral. Viram-lo usa a forma lo, própria de verbos terminados em r, s ou z. Viramno esquece o hífen. E viram-lhe usa o pronome de objeto indireto, mas ver é transitivo direto e pede o.",
  },
  {
    d: "media",
    e: "Em qual das frases a forma do pronome está adaptada ao verbo terminado em s, de acordo com a norma-padrão?",
    o: ["Nós fizemo-lo com muito cuidado.", "Nós fizemos-lo com muito cuidado.", "Nós fizemo-o com muito cuidado.", "Nós fizemos-o com muito cuidado.", "Nós fizemo-no com muito cuidado."],
    x: "Quando a forma verbal termina em s, como fizemos, o s cai diante do pronome o, e o pronome assume a forma lo: fizemos + o = fizemo-lo. A regra vale para o, a, os, as, que viram lo, la, los, las depois de r, s ou z.\n\nFizemos-lo mantém o s e usa lo, o que duplica a marca. Fizemo-o tira o s, mas não adapta o pronome. Fizemos-o mantém o s e a forma o. E fizemo-no usa a forma no, que é própria de verbos terminados em ditongo nasal, e não em s.",
  },
  {
    d: "media",
    e: "Em qual das frases os pronomes oblíquos átonos correspondem à regência dos verbos?",
    o: ["Cumprimentei-o e agradeci-lhe a ajuda recebida.", "Cumprimentei-lhe e agradeci-o a ajuda recebida.", "Cumprimentei-lhe e agradeci-lhe a ajuda recebida.", "Cumprimentei-o e agradeci-o a ajuda recebida.", "Cumprimentei-o e agradeci a ajuda recebida-lhe."],
    x: "Cumprimentar é verbo transitivo direto e pede os pronomes o, a, os, as: cumprimentei-o. Agradecer é transitivo indireto em relação à pessoa e pede os pronomes lhe, lhes: agradeci-lhe a ajuda. Os pronomes devem corresponder à regência de cada verbo.\n\nCumprimentei-lhe trata o verbo como indireto. Agradeci-o trata a pessoa como objeto direto. As duas trocas ao mesmo tempo, ou o uso de o nos dois verbos, também contrariam a regência. Na frase que termina em recebida-lhe, o pronome aparece depois do complemento, longe do verbo.",
  },
  {
    d: "media",
    e: "Em qual das frases o advérbio atrai o pronome átono para antes do verbo, de acordo com a norma-padrão?",
    o: ["Talvez nos recebam no escritório amanhã de manhã.", "Talvez recebam-nos no escritório amanhã de manhã.", "Talvez recebam nos no escritório amanhã de manhã.", "Talvez recebam no escritório nos amanhã de manhã.", "Talvez recebam no escritório amanhã de manhã-nos."],
    x: "Alguns advérbios, quando vêm antes do verbo sem pausa, atraem o pronome átono: talvez, nunca, jamais, já, sempre. Talvez, em especial, pede a próclise de maneira obrigatória: talvez nos recebam. O advérbio ocupa a posição de palavra atrativa.\n\nTalvez recebam-nos usa a ênclise depois do advérbio, o que a norma-padrão não admite com talvez. Talvez recebam nos esquece o hífen. As frases com o pronome depois de no escritório ou de amanhã de manhã afastam o pronome do verbo.",
  },
  {
    d: "media",
    e: "Em qual das frases a oração optativa, que exprime desejo, apresenta o pronome bem colocado?",
    o: ["Deus o abençoe sempre e lhe dê saúde!", "Deus abençoe-o sempre e dê-lhe saúde!", "Deus abençoe-o sempre e lhe dê saúde!", "Deus abençoe o sempre e dê lhe saúde!", "O Deus abençoe sempre e lhe dê saúde!"],
    x: "Nas orações optativas, que exprimem desejo, o sujeito vem antes do verbo e a próclise é obrigatória: Deus o abençoe, Deus lhe dê saúde. A frase tem sentido de desejo, e a posição do sujeito antes do verbo atrai o pronome.\n\nDeus abençoe-o e dê-lhe usam a ênclise nas duas orações, o que contraria a norma-padrão. A frase com abençoe-o e lhe dê mistura as duas colocações. Deus abençoe o e dê lhe esquecem o hífen e a posição do pronome. E o Deus abençoe põe o pronome antes do sujeito.",
  },
  {
    d: "media",
    e: "Em qual das frases a colocação do pronome se, partícula apassivadora, no início da oração está de acordo com a norma-padrão?",
    o: ["Vendem-se casas usadas nesta rua.", "Se vendem casas usadas nesta rua.", "Vendem se casas usadas nesta rua.", "Vendem casas-se usadas nesta rua.", "Vendem casas usadas se nesta rua."],
    x: "O pronome se, como qualquer pronome átono, não inicia a oração na norma-padrão. Quando o verbo é o primeiro termo e não há palavra atrativa antes dele, o pronome vem depois, com hífen: vendem-se casas usadas. O verbo concorda com o sujeito paciente, casas, no plural.\n\nSe vendem começa a frase com o pronome. Vendem se esquece o hífen. As frases com casas-se e com usadas se nesta rua afastam o pronome do verbo, o que a norma-padrão não admite.",
  },
  {
    d: "media",
    e: "Em qual das frases a colocação do pronome na locução verbal está de acordo com a norma-padrão?",
    o: ["Vou dizer-lhe a verdade amanhã.", "Vou dizer lhe a verdade amanhã.", "Vou a verdade dizer-lhe amanhã.", "Vou dizer a verdade amanhã-lhe.", "Vou dizer a lhe verdade amanhã."],
    x: "Em uma locução verbal formada por auxiliar e infinitivo, o pronome pode vir depois do auxiliar ou depois do infinitivo, sempre ligado por hífen: vou-lhe dizer, ou vou dizer-lhe. Aqui o pronome vem depois do infinitivo, em ênclise: vou dizer-lhe.\n\nVou dizer lhe esquece o hífen. Nas outras frases, o pronome aparece longe do verbo: depois de a verdade, depois de amanhã ou no meio de a verdade, e a norma-padrão exige que o pronome se apoie no verbo.",
  },
  {
    d: "media",
    e: "Em qual das frases a colocação do pronome em tempo composto está de acordo com a norma-padrão?",
    o: ["Já me tinham avisado do atraso do voo.", "Já tinham avisado-me do atraso do voo.", "Já tinham avisado me do atraso do voo.", "Já avisado me tinham do atraso do voo.", "Já tinham avisados-me do atraso do voo."],
    x: "Nos tempos compostos, formados por auxiliar e particípio, o pronome não se liga ao particípio: ele fica junto ao auxiliar. Aqui a palavra já atrai o pronome para antes do auxiliar: já me tinham avisado. Se não houvesse atrativo, seria tinham-me avisado.\n\nJá tinham avisado-me liga o pronome ao particípio, o que a norma-padrão não admite. Já tinham avisado me esquece o hífen e mantém o pronome longe do auxiliar. Já avisado me tinham inverte o particípio e o auxiliar. E avisados-me flexiona o particípio sem necessidade.",
  },
  {
    d: "media",
    e: "Em qual das frases a forma do pronome está adaptada ao verbo terminado em z, de acordo com a norma-padrão?",
    o: ["Ele fê-lo sem pensar nas consequências.", "Ele fez-lo sem pensar nas consequências.", "Ele fez-o sem pensar nas consequências.", "Ele fê-o sem pensar nas consequências.", "Ele fê-no sem pensar nas consequências."],
    x: "Quando o verbo termina em z, como fez, o z cai diante do pronome o, e o pronome assume a forma lo: fez + o = fê-lo, com acento circunflexo no e. O mesmo ocorre com traz, que vira trá-lo, e com fiz, que vira fi-lo.\n\nFez-lo mantém o z e usa lo, o que duplica a marca. Fez-o mantém o z e a forma o. Fê-o tira o z, mas não adapta o pronome. E fê-no usa a forma no, que é própria de verbos terminados em ditongo nasal, e não em z.",
  },
  {
    d: "media",
    e: "Em qual das frases os pronomes me e o se combinam de acordo com a norma-padrão?",
    o: ["O livro? Ele emprestou-mo ontem à tarde.", "O livro? Ele emprestou-me-o ontem à tarde.", "O livro? Ele emprestou-o-me ontem à tarde.", "O livro? Ele emprestou-lho ontem à tarde.", "O livro? Ele emprestou-mo-o ontem à tarde."],
    x: "Quando dois pronomes átonos se juntam, o de objeto indireto se une ao de objeto direto em uma só forma: me + o = mo, te + o = to, lhe + o = lho, nos + o = no-lo. Na frase, os pronomes são me e o, e a forma é emprestou-mo.\n\nEmprestou-me-o e emprestou-o-me mantêm os dois pronomes separados, o que a norma-padrão não adota na linguagem comum. Emprestou-lho combina lhe com o, e não me com o. E emprestou-mo-o duplica o pronome o depois da contração.",
  },
  {
    d: "media",
    e: "Em qual das frases o pronome interrogativo atrai o pronome átono, de acordo com a norma-padrão?",
    o: ["Quem lhe explicou o problema do contrato?", "Quem explicou-lhe o problema do contrato?", "Por que explicaram-lhe o problema do contrato?", "Como explicaram-lhe o problema do contrato?", "Onde explicaram-lhe o problema do contrato?"],
    x: "Os pronomes e advérbios interrogativos, como quem, que, como, onde e por que, atraem o pronome átono para antes do verbo, e a próclise é obrigatória: quem lhe explicou. O interrogativo ocupa a posição de palavra atrativa.\n\nQuem explicou-lhe, por que explicaram-lhe, como explicaram-lhe e onde explicaram-lhe usam a ênclise depois de um interrogativo, o que a norma-padrão não admite. A ênclise só seria correta se o verbo iniciasse a oração: explicaram-lhe o problema.",
  },
  {
    d: "media",
    e: "Em qual das frases o pronome indefinido atrai o pronome átono, de acordo com a norma-padrão?",
    o: ["Tudo me pareceu estranho naquela reunião.", "Tudo pareceu-me estranho naquela reunião.", "Alguém contou-me algo estranho naquela reunião.", "Ninguém explicou-me nada naquela reunião.", "Todos olharam-me estranho naquela reunião."],
    x: "Os pronomes indefinidos, como tudo, alguém, ninguém, todos e nada, atraem o pronome átono para antes do verbo, e a próclise é obrigatória: tudo me pareceu. O indefinido ocupa a posição de palavra atrativa.\n\nTudo pareceu-me, alguém contou-me, ninguém explicou-me e todos olharam-me usam a ênclise depois de um indefinido, o que a norma-padrão não admite. A ênclise só seria correta se o verbo iniciasse a oração: pareceu-me tudo estranho.",
  },
  {
    d: "media",
    e: "Em qual das frases a conjunção subordinativa que atrai o pronome átono, mesmo com o futuro do pretérito?",
    o: ["Ela afirmou que lhe contaria a verdade se ele perguntasse.", "Ela afirmou que contaria-lhe a verdade se ele perguntasse.", "Ela afirmou que contar-lhe-ia a verdade se ele perguntasse.", "Ela afirmou que contaria lhe a verdade se ele perguntasse.", "Ela afirmou que contaria a verdade lhe se ele perguntasse."],
    x: "A conjunção subordinativa que atrai o pronome átono para antes do verbo, e a próclise é obrigatória: que lhe contaria. Isso vale mesmo quando o verbo está no futuro do pretérito, que sem o atrativo admitiria mesóclise.\n\nContaria-lhe usa a ênclise, e contar-lhe-ia usa a mesóclise, ambas depois da conjunção que. Contaria lhe esquece o hífen. E a frase em que o pronome vem depois de a verdade afasta o pronome do verbo, o que a norma-padrão não admite.",
  },
  {
    d: "media",
    e: "Em qual das frases a palavra nem atrai o pronome átono, de acordo com a norma-padrão?",
    o: ["Ela nem me cumprimentou na saída do teatro.", "Ela nem cumprimentou-me na saída do teatro.", "Ela nem cumprimentou me na saída do teatro.", "Ela cumprimentou-me nem na saída do teatro.", "Ela nem cumprimentou na saída do teatro-me."],
    x: "Nem, com valor de negação, atrai o pronome átono para antes do verbo, como não, nunca e jamais: ela nem me cumprimentou. A negação ocupa a posição de palavra atrativa, e a próclise é obrigatória.\n\nNem cumprimentou-me usa a ênclise depois da negação. Nem cumprimentou me esquece o hífen e também erra a posição. Cumprimentou-me nem desloca a negação para depois do pronome. E a frase que termina em teatro-me afasta o pronome do verbo, o que a norma-padrão não admite.",
  },
  {
    d: "media",
    e: "O que são palavras atrativas na colocação pronominal?",
    o: ["Palavras que antecedem o verbo e atraem o pronome átono para antes dele", "Palavras que obrigam o pronome a vir depois do verbo", "Palavras que substituem o pronome oblíquo na frase", "Palavras que ligam duas orações por coordenação", "Palavras que indicam apenas o tempo do verbo"],
    x: "Palavras atrativas são as que, colocadas antes do verbo e sem pausa, atraem o pronome átono para a posição anterior ao verbo, tornando a próclise obrigatória. São exemplos as negações (não, nunca), os pronomes relativos, indefinidos e interrogativos, as conjunções subordinativas e alguns advérbios.\n\nElas não obrigam a ênclise, que ocorre quando não há atrativo e o verbo inicia a oração. Não substituem o pronome, não são conjunções coordenativas por definição e não se limitam a indicar o tempo do verbo.",
  },
  {
    d: "media",
    e: "Por que a frase “Me diga a verdade” contraria a norma-padrão?",
    o: ["Porque a norma-padrão não admite o pronome átono no início da frase", "Porque o verbo dizer não aceita pronome oblíquo", "Porque falta uma palavra atrativa antes do pronome", "Porque o pronome deveria vir depois do substantivo", "Porque o imperativo exige mesóclise"],
    x: "A norma-padrão não admite que a oração comece por pronome oblíquo átono. No imperativo afirmativo, como não há palavra atrativa, o pronome vem depois do verbo, com hífen: diga-me a verdade. A construção me diga é comum na fala, mas não na língua formal.\n\nO verbo dizer aceita pronome oblíquo, como em diga-me. Uma palavra atrativa atrairia o pronome, e é por isso que não me diga é correto, mas aqui não há. O pronome não vem depois do substantivo, e a mesóclise não é usada no imperativo.",
  },
  {
    d: "media",
    e: "Por que o futuro do presente não admite ênclise, como em “Darei-lhe a resposta”?",
    o: ["Porque, com o futuro, a norma usa a mesóclise ou a próclise", "Porque o futuro não aceita pronome oblíquo", "Porque a ênclise só vale para verbos no passado", "Porque o hífen é proibido com o futuro", "Porque o futuro é sempre um verbo auxiliar"],
    x: "Os verbos no futuro do presente e do pretérito têm uma forma de infinitivo mais terminação, e a norma-padrão reserva a eles a mesóclise (dar-lhe-ei) quando iniciam a oração, ou a próclise (não lhe darei) quando há palavra atrativa. A ênclise, como em darei-lhe, não é admitida.\n\nO futuro aceita pronome oblíquo, como mostram dar-lhe-ei e não lhe darei. A ênclise não se restringe ao passado: ocorre com o presente, o passado e o imperativo. O hífen é usado na mesóclise. E o futuro não é auxiliar por natureza.",
  },
  {
    d: "media",
    e: "Em qual das frases há desvio de colocação pronominal em relação à norma-padrão?",
    o: ["Nunca disseram-me a verdade sobre o caso.", "Disseram-me a verdade sobre o caso.", "Alguém me disse a verdade sobre o caso.", "Não lhe contaram a verdade sobre o caso.", "Que lhe disseram sobre o caso?"],
    x: "Nunca é palavra negativa e atrai o pronome átono para antes do verbo, tornando a próclise obrigatória: nunca me disseram. A frase traz nunca disseram-me, com ênclise, e por isso contraria a norma.\n\nAs demais estão corretas: disseram-me é ênclise no início da oração; alguém me disse tem o indefinido alguém como atrativo; não lhe contaram tem a negação não como atrativo; e que lhe disseram tem o interrogativo que como atrativo.",
  },
  {
    d: "media",
    e: "Em qual das frases há desvio de colocação pronominal em relação à norma-padrão, no uso do futuro?",
    o: ["Entregarei-lhe o documento amanhã de manhã.", "Entregar-lhe-ei o documento amanhã de manhã.", "Não lhe entregarei o documento amanhã de manhã.", "Talvez lhe entregue o documento amanhã de manhã.", "Quem lhe entregará o documento amanhã de manhã?"],
    x: "O futuro do presente não admite ênclise: ou usa a mesóclise, quando inicia a oração (entregar-lhe-ei), ou a próclise, quando há palavra atrativa (não lhe entregarei). A frase traz entregarei-lhe, com ênclise ao futuro, e por isso contraria a norma.\n\nAs demais estão corretas: entregar-lhe-ei é mesóclise no início da oração; não lhe entregarei tem a negação como atrativo; talvez lhe entregue tem o advérbio talvez; e quem lhe entregará tem o interrogativo quem.",
  },
  {
    d: "media",
    e: "Em qual das frases os pronomes nos e o se combinam de acordo com a norma-padrão?",
    o: ["O recado? Deram-no-lo ontem à tarde.", "O recado? Deram-nos-o ontem à tarde.", "O recado? Deram-o-nos ontem à tarde.", "O recado? Deram-nolo ontem à tarde.", "O recado? Deram-no-nos ontem à tarde."],
    x: "Quando nos se combina com o, a, os, as, o pronome nos perde o s e o outro assume a forma lo, la, los, las: nos + o = no-lo. Com o verbo deram, a frase fica deram-no-lo, e o hífen separa as partes da combinação.\n\nDeram-nos-o mantém os dois pronomes separados, o que a norma-padrão não adota na linguagem comum. Deram-o-nos inverte a ordem dos pronomes. Deram-nolo esquece o hífen entre as duas partes. E deram-no-nos repete o pronome nos no lugar da forma lo.",
  },
  {
    d: "media",
    e: "Qual afirmação sobre a colocação do pronome no imperativo está correta?",
    o: ["No imperativo afirmativo usa-se a ênclise, e no negativo, a próclise.", "No imperativo afirmativo usa-se a próclise, e no negativo, a ênclise.", "O imperativo, afirmativo ou negativo, exige sempre a mesóclise.", "O imperativo, afirmativo ou negativo, exige sempre a ênclise.", "O imperativo não admite pronomes oblíquos átonos."],
    x: "No imperativo afirmativo, o verbo inicia a oração e o pronome vem depois dele, com hífen: entregue-me. No imperativo negativo, a palavra não atrai o pronome, e a próclise é obrigatória: não me entregue. Por isso a afirmação correta contrasta os dois casos.\n\nInverter os dois contraria a norma-padrão. A mesóclise não se aplica ao imperativo, que não é futuro. Exigir sempre a ênclise ignora o efeito da negação. E o imperativo admite pronomes átonos, como mostram os exemplos.",
  },
  {
    d: "media",
    e: "Qual das sequências abaixo contém apenas pronomes oblíquos átonos?",
    o: ["me, te, se, o, a, lhe, nos, vos", "mim, ti, si, comigo, contigo", "eu, tu, ele, nós, vós", "meu, teu, seu, nosso, vosso", "este, esse, aquele, isto, isso"],
    x: "Os pronomes oblíquos átonos são me, te, se, o, a, os, as, lhe, lhes, nos e vos. Eles não vêm precedidos de preposição e se apoiam no verbo. A colocação pronominal trata justamente da posição desses pronomes em relação ao verbo.\n\nMim, ti, si, comigo e contigo são oblíquos tônicos, que exigem preposição ou fusão com ela. Eu, tu, ele, nós e vós são pronomes retos. Meu, teu, seu, nosso e vosso são possessivos. E este, esse, aquele, isto e isso são demonstrativos.",
  },
  {
    d: "media",
    e: "Qual afirmação sobre os pronomes o e lhe está correta?",
    o: ["O substitui o objeto direto, e lhe, o objeto indireto de pessoa.", "Lhe substitui sempre o objeto direto.", "O substitui apenas o sujeito da oração.", "Lhe só se usa depois de verbos no passado.", "O e lhe são sempre intercambiáveis."],
    x: "O, a, os e as são pronomes oblíquos átonos que substituem o objeto direto: vi o filme, vi-o. Lhe e lhes substituem o objeto indireto, em geral de pessoa: obedeci ao chefe, obedeci-lhe. A escolha depende da regência do verbo.\n\nLhe não substitui sempre o objeto direto. O não substitui o sujeito, que é função dos pronomes retos. Lhe não se restringe ao passado. E o e lhe não são intercambiáveis, porque correspondem a regências diferentes.",
  },
  {
    d: "media",
    e: "Qual afirmação sobre a colocação dos pronomes em tempos compostos e em locuções verbais está correta?",
    o: ["Nos tempos compostos, o pronome se liga ao auxiliar, e não ao particípio.", "Nos tempos compostos, o pronome se liga sempre ao particípio.", "Nas locuções, o pronome nunca pode vir depois do infinitivo.", "Nas locuções, o pronome vem sempre depois do auxiliar, sem hífen.", "O particípio admite mesóclise quando inicia a frase."],
    x: "Nos tempos compostos, como tinha avisado, o pronome se liga ao auxiliar: tinha-me avisado, ou me tinha avisado quando há palavra atrativa. O particípio não recebe pronome átono, e por isso tinha avisado-me contraria a norma-padrão.\n\nNas locuções verbais com infinitivo, o pronome pode vir depois do auxiliar ou depois do infinitivo, com hífen. O particípio não admite mesóclise, que é própria do futuro. E nenhuma locução dispensa o hífen quando o pronome está depois do verbo.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual das frases todos os pronomes átonos estão bem colocados, de acordo com a norma-padrão?",
    o: ["Nunca me disseram quem lhes entregou o prêmio.", "Nunca disseram-me quem lhes entregou o prêmio.", "Nunca me disseram quem entregou-lhes o prêmio.", "Nunca disseram-me quem entregou-lhes o prêmio.", "Disseram-me nunca quem lhes entregou o prêmio."],
    x: "A frase correta aplica duas vezes a próclise. Nunca é palavra negativa e atrai o pronome me para antes de disseram. Quem, interrogativo indireto, atrai o pronome lhes para antes de entregou. As duas palavras atrativas tornam a ênclise inadmissível.\n\nNunca disseram-me usa a ênclise depois de negação. Quem entregou-lhes usa a ênclise depois do interrogativo quem. A frase que combina as duas ênclises falha nas duas posições. E a que inicia por disseram-me nunca desloca a negação para depois do pronome.",
  },
  {
    d: "dificil",
    e: "Em qual das frases todas as colocações e formas de pronome estão de acordo com a norma-padrão?",
    o: ["Fi-lo porque me pediram, e não o faria de novo.", "Fiz-o porque me pediram, e não o faria de novo.", "Fi-lo porque pediram-me, e não o faria de novo.", "Fi-lo porque me pediram, e não faria-o de novo.", "Fiz-lo porque pediram-me, e não faria-o de novo."],
    x: "A frase correta aplica três regras. Fi-lo traz a forma lo, porque o verbo fiz termina em z, e a ênclise, porque o verbo inicia a oração. Porque me pediram tem a conjunção porque como atrativo, e por isso a próclise é obrigatória. Não o faria tem a negação não como atrativo.\n\nFiz-o não adapta o pronome ao z. Pediram-me usa a ênclise depois de porque. Faria-o usa a ênclise depois de não, e a frase com fiz-lo mantém o z e usa lo. As frases erradas combinam esses defeitos de modos diferentes.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a expressão com gerúndio precedido de em está de acordo com a norma-padrão?",
    o: ["Em se tratando de prazos, é preciso ter cuidado.", "Em tratando-se de prazos, é preciso ter cuidado.", "Em tratando se de prazos, é preciso ter cuidado.", "Em se tratando-se de prazos, é preciso ter cuidado.", "Em se de prazos tratando, é preciso ter cuidado."],
    x: "Quando o gerúndio vem precedido da preposição em, o pronome átono vem antes do verbo, e a próclise é obrigatória: em se tratando. É uma exceção à regra geral, em que o gerúndio aceita a ênclise (tratando-se).\n\nEm tratando-se usa a ênclise ao gerúndio precedido de em, o que a norma-padrão não admite. Em tratando se esquece o hífen e a posição. Em se tratando-se duplica o pronome. E em se de prazos tratando afasta o pronome do verbo.",
  },
  {
    d: "dificil",
    e: "Em qual das frases o pronome átono está bem colocado depois de preposição e pronome relativo?",
    o: ["O amigo com quem me encontrei ontem mora longe.", "O amigo com quem encontrei-me ontem mora longe.", "O amigo com quem encontrei me ontem mora longe.", "O amigo com quem ontem encontrei-me mora longe.", "O amigo com quem encontrei ontem me mora longe."],
    x: "O pronome relativo quem, mesmo precedido de preposição, continua a atrair o pronome átono para antes do verbo, e a próclise é obrigatória: com quem me encontrei. A preposição com apenas liga o relativo ao verbo e não anula o efeito atrativo.\n\nCom quem encontrei-me e com quem ontem encontrei-me usam a ênclise depois do relativo. Encontrei me esquece o hífen e também erra a posição. E a frase com ontem me afasta o pronome do verbo, o que a norma-padrão não admite.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a palavra mal, com valor de assim que, atrai o pronome átono de acordo com a norma-padrão?",
    o: ["Mal me viu, ele saiu correndo da sala.", "Mal viu-me, ele saiu correndo da sala.", "Mal viu me, ele saiu correndo da sala.", "Mal, viu-me ele saiu correndo da sala.", "Mal viu ele me saiu correndo da sala."],
    x: "Mal, quando equivale a assim que, é conjunção subordinativa temporal e atrai o pronome átono, tornando a próclise obrigatória: mal me viu. É diferente do advérbio de modo mal, que significa de maneira ruim.\n\nMal viu-me usa a ênclise depois da conjunção. Mal viu me esquece o hífen e erra a posição. As frases com vírgula depois de mal ou com o pronome depois do sujeito afastam o pronome do verbo ou criam pausa indevida, o que a norma-padrão não admite.",
  },
  {
    d: "dificil",
    e: "Em qual das frases os pronomes se combinam e se colocam de acordo com a norma-padrão?",
    o: ["Pediu-me o livro, e entreguei-lho ontem.", "Pediu-me o livro, e entreguei-lhe-o ontem.", "Pediu-me o livro, e entreguei-o-lhe ontem.", "Me pediu o livro, e entreguei-lho ontem.", "Pediu-me o livro, e entreguei lho ontem."],
    x: "A frase correta aplica duas regras. Pediu-me inicia a oração e usa a ênclise. Entreguei-lho combina lhe e o em uma só forma, porque lhe é o objeto indireto e o, o objeto direto: lhe + o = lho. A combinação também vem ligada ao verbo por hífen.\n\nEntreguei-lhe-o e entreguei-o-lhe mantêm os pronomes separados, o que a norma-padrão não adota nesse uso. Me pediu começa a frase com o pronome. E entreguei lho esquece o hífen que liga a combinação ao verbo.",
  },
  {
    d: "dificil",
    e: "Em qual das frases há desvio de colocação pronominal em relação à norma-padrão?",
    o: ["Fizemos-lo com cuidado, e ninguém nos criticou.", "Ninguém nos criticou por isso.", "Entregar-te-ei o prêmio amanhã.", "Em se tratando de prêmio, vale esperar.", "Deus lhe pague pelo favor."],
    x: "Fizemos termina em s, e diante do pronome o o s cai e o pronome assume a forma lo: fizemo-lo. A frase traz fizemos-lo, que mantém o s e duplica a marca, e por isso contraria a norma.\n\nAs demais estão corretas: ninguém nos criticou tem o indefinido como atrativo; entregar-te-ei é mesóclise do futuro no início da oração; em se tratando traz a próclise exigida pelo gerúndio precedido de em; e Deus lhe pague é oração optativa, com próclise.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre a mesóclise está de acordo com a norma-padrão?",
    o: ["Ocorre com os dois futuros, desde que não haja palavra atrativa antes do verbo.", "Ocorre com qualquer tempo verbal, desde que a frase comece por verbo.", "Ocorre só com o infinitivo, antes da terminação.", "Ocorre com o futuro mesmo depois de palavra negativa.", "Ocorre sempre que o verbo está no particípio."],
    x: "A mesóclise é a colocação do pronome no meio do verbo, e na norma-padrão ocorre com o futuro do presente e o futuro do pretérito: dar-lhe-ei, falar-lhe-ia. Só é possível quando o verbo inicia a oração e não há palavra atrativa antes dele.\n\nEla não ocorre com qualquer tempo, nem só com o infinitivo, e não ocorre com o particípio. Depois de palavra negativa, a próclise é obrigatória: não lhe darei, e não darei-lhe nem dar-lhe-ei.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre a ênclise e a próclise está de acordo com a norma-padrão?",
    o: ["A ênclise ocorre com o verbo no início da oração, e a próclise, com palavra atrativa antes do verbo.", "A ênclise ocorre depois de palavra negativa, e a próclise, no início da oração.", "A próclise é obrigatória no início da frase, e a ênclise, depois de relativo.", "As duas são sempre facultativas, em qualquer posição.", "Só a ênclise é admitida na norma-padrão."],
    x: "A ênclise é a regra quando o verbo inicia a oração e não há palavra atrativa antes dele: disseram-me, entregue-me. A próclise é a regra quando uma palavra atrativa, como a negação, o relativo, o indefinido ou a conjunção subordinativa, antecede o verbo: nunca me disseram, que me deram.\n\nInverter as duas contraria a norma. As duas colocações não são sempre facultativas: há contextos em que uma é obrigatória e a outra, proibida. E a norma-padrão admite a próclise, a ênclise e a mesóclise, cada uma em seu contexto.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a forma do pronome está adaptada ao infinitivo do verbo pôr, de acordo com a norma-padrão?",
    o: ["Vou pô-lo sobre a mesa antes de sair.", "Vou pôr-o sobre a mesa antes de sair.", "Vou pô-o sobre a mesa antes de sair.", "Vou por-lo sobre a mesa antes de sair.", "Vou pô-no sobre a mesa antes de sair."],
    x: "O infinitivo pôr termina em r, e diante dos pronomes o, a, os, as o r cai e o pronome assume as formas lo, la, los, las: pôr + o = pô-lo. O verbo mantém o acento circunflexo, que distingue pôr (verbo) de por (preposição).\n\nPôr-o mantém o r e a forma o. Pô-o tira o r, mas não adapta o pronome. Por-lo perde o acento, e a preposição por não se confunde com o verbo. E pô-no usa a forma no, própria de verbos terminados em ditongo nasal, e não em r.",
  },
];
