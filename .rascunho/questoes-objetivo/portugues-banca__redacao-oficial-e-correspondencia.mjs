/* Rascunho — Português de banca / Redação oficial e correspondência.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática e redação não se conferem em código, então nenhuma tem `v`:
   todas ficam em revisao_independente_pendente e passam pela resolução às
   cegas antes de serem gravadas. Só entram práticas amplamente descritas nos
   manuais de redação oficial (como o Manual de Redação da Presidência da
   República): princípios (impessoalidade, formalidade e padronização,
   concisão e clareza, padrão culto); tipos de documento (ofício, memorando,
   requerimento, ata, procuração, declaração, atestado, relatório, exposição
   de motivos); partes do ofício (timbre, número, local e data, assunto,
   destinatário, vocativo, texto, fecho, assinatura); pronomes de tratamento
   (Vossa Excelência, Vossa Senhoria, Vossa Magnificência) e a concordância
   deles; fechos Respeitosamente e Atenciosamente conforme a hierarquia; a
   escrita de datas e números; e as regras de redação de atas. Ficaram de
   fora, de propósito, detalhes de formatação (margens, fonte, espaçamento) e
   práticas que variam de órgão para órgão. */

export const materia = "portugues-banca";
export const tema = "Redação oficial e correspondência";
export const arquivo = "portugues-banca__redacao-oficial-e-correspondencia";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual documento é usado para a comunicação interna entre unidades de um mesmo órgão?",
    o: ["Memorando", "Ofício", "Requerimento", "Procuração", "Atestado"],
    x: "O memorando é o documento da comunicação interna: circula entre setores, unidades ou chefias do mesmo órgão, para tratar de assuntos administrativos, de modo ágil e padronizado. O ofício, ao contrário, é usado na comunicação externa, com outros órgãos ou com particulares.\n\nO requerimento é um pedido dirigido a uma autoridade. A procuração é o documento pelo qual alguém confere poderes a outra pessoa. E o atestado é o documento que comprova um fato ou situação, como o atestado médico.",
  },
  {
    d: "facil",
    e: "Qual documento é usado para a comunicação oficial com outros órgãos ou com particulares?",
    o: ["Ofício", "Memorando", "Ata", "Procuração", "Declaração"],
    x: "O ofício é o documento da comunicação oficial externa: serve para um órgão se dirigir a outros órgãos, a autoridades ou a particulares, para tratar de assuntos de interesse do serviço público. Segue um padrão de redação e de diagramação.\n\nO memorando é a comunicação interna entre unidades do mesmo órgão. A ata registra o que se passou em uma reunião. A procuração confere poderes a outra pessoa. E a declaração afirma um fato sob responsabilidade de quem a assina.",
  },
  {
    d: "facil",
    e: "Qual documento é usado para pedir algo a uma autoridade, como um direito ou um benefício?",
    o: ["Requerimento", "Ata", "Memorando", "Procuração", "Relatório"],
    x: "O requerimento é o documento pelo qual uma pessoa solicita uma providência, um direito ou um benefício a uma autoridade, em geral com a fórmula tradicional de fecho “Nestes termos, pede deferimento”. É dirigido à autoridade competente para decidir.\n\nA ata registra uma reunião. O memorando é comunicação interna. A procuração confere poderes. E o relatório descreve atividades e resultados. Nenhum deles tem a finalidade de formular um pedido a uma autoridade.",
  },
  {
    d: "facil",
    e: "Qual documento registra o que se passou em uma reunião, com data, participantes e decisões?",
    o: ["Ata", "Ofício", "Requerimento", "Procuração", "Atestado"],
    x: "A ata é o documento que registra, de forma resumida e fiel, o que ocorreu em uma reunião, assembleia ou sessão: data, hora, local, participantes, assuntos tratados e decisões tomadas. É assinada pelos presentes ou por quem a lavrou.\n\nO ofício é comunicação externa. O requerimento é um pedido. A procuração confere poderes. E o atestado comprova um fato ou situação. Só a ata tem a função de registrar uma reunião.",
  },
  {
    d: "facil",
    e: "Qual documento é usado para que uma pessoa dê a outra poderes para agir em seu nome?",
    o: ["Procuração", "Ata", "Memorando", "Relatório", "Declaração"],
    x: "A procuração é o documento pelo qual uma pessoa, o outorgante, confere poderes a outra, o outorgado, para praticar atos em seu nome, como assinar um contrato ou receber um valor. Deve indicar os poderes concedidos.\n\nA ata registra uma reunião. O memorando é comunicação interna. O relatório descreve atividades. E a declaração afirma um fato, e não confere poderes. Por isso a procuração é o documento da delegação de poderes.",
  },
  {
    d: "facil",
    e: "Qual documento é usado para afirmar, sob responsabilidade de quem o assina, que determinado fato é verdadeiro?",
    o: ["Declaração", "Ata", "Memorando", "Procuração", "Aviso"],
    x: "A declaração é o documento em que alguém afirma, sob sua responsabilidade, que determinado fato ocorreu ou que determinada situação existe: declaro, para os devidos fins, que fulano trabalha nesta instituição. Tem texto breve e objetivo.\n\nA ata registra uma reunião. O memorando é comunicação interna. A procuração confere poderes. E o aviso é um tipo de comunicação, em geral de autoridades superiores. Só a declaração tem a função de afirmar um fato sob responsabilidade do signatário.",
  },
  {
    d: "facil",
    e: "Qual é o pronome de tratamento usado para se dirigir a um Ministro de Estado ou a um parlamentar?",
    o: ["Vossa Excelência", "Vossa Senhoria", "Vossa Magnificência", "Vossa Santidade", "Vossa Alteza"],
    x: "Vossa Excelência é o pronome de tratamento empregado para chefes de Poder, ministros, parlamentares, governadores, prefeitos, embaixadores, entre outras autoridades. A forma de falar com a pessoa é Vossa Excelência, e de falar dela, Sua Excelência.\n\nVossa Senhoria se aplica a autoridades de outro nível e a particulares. Vossa Magnificência se aplica a reitores. Vossa Santidade, ao Papa. E Vossa Alteza, a príncipes e duques. Para ministros e parlamentares, o tratamento é Vossa Excelência.",
  },
  {
    d: "facil",
    e: "Qual é o pronome de tratamento usado para se dirigir a um reitor de universidade?",
    o: ["Vossa Magnificência", "Vossa Excelência", "Vossa Senhoria", "Vossa Santidade", "Vossa Alteza"],
    x: "Vossa Magnificência é o pronome de tratamento empregado para reitores de universidades. A forma de falar com a pessoa é Vossa Magnificência, e de falar dela, Sua Magnificência.\n\nVossa Excelência se aplica a chefes de Poder, ministros e parlamentares. Vossa Senhoria se aplica a outras autoridades e a particulares. Vossa Santidade se aplica ao Papa. E Vossa Alteza, a príncipes e duques. Cada tratamento corresponde a uma categoria de autoridade.",
  },
  {
    d: "facil",
    e: "Qual característica da redação oficial exige que o texto não expresse opiniões pessoais do redator?",
    o: ["Impessoalidade", "Concisão", "Formalidade", "Clareza", "Padronização"],
    x: "A impessoalidade exige que o texto oficial não expresse opiniões, gostos ou sentimentos pessoais de quem o redige, porque quem fala é o órgão, e não o indivíduo. Por isso se usam construções como informa-se, solicita-se e comunica-se.\n\nA concisão pede texto breve. A formalidade pede tom respeitoso e linguagem culta. A clareza pede que o texto seja compreendido sem esforço. E a padronização pede uniformidade de formato. Só a impessoalidade se ocupa da ausência de opinião pessoal.",
  },
  {
    d: "facil",
    e: "Qual fecho é adequado a um ofício dirigido a uma autoridade de hierarquia superior à do signatário?",
    o: ["Respeitosamente,", "Atenciosamente,", "Abraços,", "Valeu,", "Até logo,"],
    x: "Na redação oficial, o fecho Respeitosamente é usado em comunicações dirigidas a autoridades superiores ao signatário, inclusive ao Presidente da República. Marca a deferência devida à hierarquia.\n\nAtenciosamente é o fecho para autoridades de mesma hierarquia ou de hierarquia inferior. Abraços, Valeu e Até logo são fechos informais, próprios de mensagens pessoais, e não de documentos oficiais.",
  },
  {
    d: "facil",
    e: "Qual fecho é adequado a um ofício dirigido a uma autoridade de mesma hierarquia ou de hierarquia inferior?",
    o: ["Atenciosamente,", "Respeitosamente,", "Beijos,", "Fui,", "Tchau,"],
    x: "Na redação oficial, o fecho Atenciosamente é usado em comunicações dirigidas a autoridades de mesma hierarquia ou inferior à do signatário. É o fecho de uso corrente e comum.\n\nRespeitosamente é o fecho para autoridades superiores. Beijos, Fui e Tchau são fechos informais, próprios de mensagens pessoais, e não de documentos oficiais. A escolha do fecho depende da relação hierárquica entre quem escreve e quem recebe.",
  },
  {
    d: "facil",
    e: "Em um ofício, qual parte resume em poucas palavras o tema tratado?",
    o: ["Assunto", "Fecho", "Vocativo", "Timbre", "Assinatura"],
    x: "O assunto é a parte do ofício que indica, em uma frase curta, o tema tratado, de modo que o destinatário saiba do que se trata antes de ler o texto. Costuma ficar logo depois do local e data.\n\nO fecho é a despedida. O vocativo é a forma de tratar o destinatário. O timbre identifica o órgão emissor. E a assinatura identifica quem assina. Só o assunto resume o tema.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Qual vocativo é adequado em um ofício dirigido a um Ministro de Estado?",
    o: ["Senhor Ministro,", "Prezado amigo,", "Ilustríssimo,", "Meu caro Ministro,", "Olá, Excelência,"],
    x: "O vocativo é a forma de se dirigir ao destinatário no início do texto, e na redação oficial usa-se Senhor seguido do cargo: Senhor Ministro, Senhor Governador. É formal e adequado à hierarquia.\n\nPrezado amigo e meu caro Ministro são formas informais. Olá, Excelência mistura uma saudação informal com o tratamento. E Ilustríssimo não é vocativo, mas um título usado no endereçamento a autoridades de nível diferente. Por isso Senhor Ministro é a opção correta.",
  },
  {
    d: "media",
    e: "Qual é a forma adequada de endereçamento a um Ministro de Estado em um ofício?",
    o: ["A Sua Excelência o Senhor Fulano de Tal", "Ao Ilustríssimo Ministro Fulano", "Para o Fulano", "Ao amigo Fulano", "A Vossa Excelência, Fulano"],
    x: "O endereçamento é a parte em que se identifica o destinatário, e para um Ministro de Estado se usa A Sua Excelência o Senhor, seguido do nome e do cargo. Nessa parte o tratamento é feito em terceira pessoa, com Sua Excelência.\n\nIlustríssimo é título para autoridades de outro nível. Para o Fulano e ao amigo Fulano são formas informais. E A Vossa Excelência, Fulano usa a segunda forma no lugar da terceira, o que contraria a convenção do endereçamento.",
  },
  {
    d: "media",
    e: "Em qual das frases a concordância com o pronome de tratamento está de acordo com a norma-padrão, dirigindo-se a uma Senadora?",
    o: ["Vossa Excelência está convidada para a sessão solene.", "Vossa Excelência estás convidada para a sessão solene.", "Vossa Excelência estais convidada para a sessão solene.", "Vossa Excelência está convidado para a sessão solene.", "Vossa Excelência estou convidada para a sessão solene."],
    x: "Os pronomes de tratamento levam o verbo à terceira pessoa, e o adjetivo ou particípio concorda com o sexo da pessoa tratada. Como se trata de uma senadora, a frase correta é Vossa Excelência está convidada.\n\nEstás e estais são formas de segunda pessoa, e estou é de primeira, e nenhuma concorda com um pronome de tratamento. Convidado, no masculino, não concorda com o sexo de uma senadora.",
  },
  {
    d: "media",
    e: "A quais autoridades se aplica o tratamento Vossa Excelência na redação oficial?",
    o: ["Chefes de Poder, ministros e parlamentares", "Apenas ao Presidente da República", "A todo e qualquer cidadão", "Apenas a reitores de universidades", "A pessoas de idade avançada"],
    x: "Vossa Excelência é o tratamento reservado a uma lista de autoridades: chefes de Poder, ministros de Estado, parlamentares, governadores, prefeitos, embaixadores, magistrados, entre outros. Não se limita ao Presidente da República.\n\nNão se aplica a todo cidadão, que recebe Vossa Senhoria ou o tratamento de senhor. Reitores têm tratamento próprio, Vossa Magnificência. E a idade avançada não é critério de tratamento na redação oficial.",
  },
  {
    d: "media",
    e: "Qual é a função da introdução no texto de um ofício?",
    o: ["Apresentar o assunto e a razão da comunicação", "Reunir todos os detalhes do tema", "Concluir o assunto e propor providências", "Substituir o fecho", "Identificar o signatário"],
    x: "O texto do ofício se organiza em introdução, desenvolvimento e conclusão. A introdução apresenta o assunto e a razão da comunicação, de modo que o leitor saiba logo do que se trata e por que se escreve. Em geral, é um parágrafo curto.\n\nO desenvolvimento reúne os detalhes. A conclusão encerra o assunto e indica providências. O fecho é a despedida. E a identificação do signatário vem depois da assinatura. A introdução, portanto, só situa o leitor.",
  },
  {
    d: "media",
    e: "Como deve ser o texto de uma ata lavrada em livro?",
    o: ["Corrido, sem parágrafos nem espaços em branco, e sem rasuras", "Em tópicos numerados e com abreviaturas", "Em forma de verso", "Com rasuras livres, para facilitar correções", "Sem data nem assinaturas"],
    x: "A ata lavrada em livro deve ser escrita em texto corrido, sem parágrafos nem espaços em branco, para impedir acréscimos posteriores, e sem rasuras, raspagens ou emendas. Se houver erro, usa-se a expressão digo, e se corrige no próprio texto.\n\nTópicos numerados, abreviaturas, versos e rasuras livres não são admitidos. E a ata deve conter data e assinaturas, que dão validade ao registro.",
  },
  {
    d: "media",
    e: "Como se escrevem datas e números em uma ata?",
    o: ["Por extenso", "Com algarismos e abreviaturas", "Apenas em algarismos romanos", "Em letras maiúsculas apenas", "Em notação científica"],
    x: "Na ata, datas e números são escritos por extenso, como em aos dez dias do mês de março de dois mil e vinte e cinco, às nove horas. Isso evita fraudes e alterações, porque um algarismo é mais fácil de modificar do que uma palavra.\n\nAlgarismos e abreviaturas, algarismos romanos apenas, letras maiúsculas apenas e notação científica não são as formas previstas para a redação de atas.",
  },
  {
    d: "media",
    e: "Como se corrige um erro percebido no meio do texto de uma ata lavrada em livro?",
    o: ["Com a expressão “digo”, sem rasuras", "Com corretivo líquido", "Riscando e escrevendo por cima", "Apagando com borracha", "Rasgando a folha"],
    x: "Na ata lavrada em livro, não se admitem rasuras. Quando o erro é percebido no meio do texto, usa-se a expressão digo, seguida da palavra correta, para que a correção fique registrada no próprio texto: aos dez dias do mês de março, digo, de abril.\n\nCorretivo líquido, riscar por cima, apagar com borracha e rasgar a folha deixam marcas ou comprometem a integridade do livro, e por isso não são admitidos.",
  },
  {
    d: "media",
    e: "Qual fecho tradicional é usado em um requerimento?",
    o: ["Nestes termos, pede deferimento.", "Atenciosamente, cumprimenta.", "Sem mais, abraços.", "Até breve.", "Cordiais saudações."],
    x: "O fecho tradicional do requerimento é Nestes termos, pede deferimento, ou Termos em que pede deferimento. Deferimento é a concessão do pedido, e a fórmula indica que o requerente aguarda a decisão da autoridade.\n\nAtenciosamente, cumprimenta e Cordiais saudações são fórmulas de correspondência. Sem mais, abraços e Até breve são fechos informais. A fórmula do requerimento é própria dele.",
  },
  {
    d: "media",
    e: "Quem é o outorgante em uma procuração, no vocabulário jurídico?",
    o: ["Quem confere os poderes", "Quem recebe os poderes", "Quem testemunha o ato", "Quem redige o documento", "Quem registra o documento"],
    x: "Na procuração, o outorgante é quem confere os poderes, e o outorgado é quem os recebe para agir em nome do outorgante. A palavra outorgar significa conceder.\n\nQuem recebe os poderes é o outorgado, e não o outorgante. A testemunha, o redator e quem registra o documento são figuras que podem aparecer, mas não são o outorgante. Para lembrar, outorgante é quem outorga, isto é, quem concede.",
  },
  {
    d: "media",
    e: "Qual das expressões abre, por convenção, o texto de uma declaração?",
    o: ["Declaro, para os devidos fins, que...", "Venho, por meio desta, requerer...", "Fica nomeado...", "Aos dias do mês de...", "Atesto, para os fins médicos..."],
    x: "A declaração costuma começar com Declaro, para os devidos fins, que..., seguida do fato que se afirma. A expressão para os devidos fins indica que o documento poderá ser usado onde for exigido.\n\nVenho, por meio desta, requerer abre um requerimento. Fica nomeado abre um ato de nomeação. Aos dias do mês de abre uma ata. E atesto, para os fins médicos, abre um atestado. Cada documento tem sua fórmula de abertura.",
  },
  {
    d: "media",
    e: "Qual documento é adequado para comunicar uma decisão a uma empresa externa ao órgão?",
    o: ["Ofício", "Memorando", "Ata", "Procuração", "Declaração"],
    x: "A comunicação oficial com quem está fora do órgão, como uma empresa, é feita por ofício, que é o documento da comunicação externa. O ofício segue um padrão de redação e de diagramação, e é assinado por autoridade competente.\n\nO memorando é para comunicação interna. A ata registra reuniões. A procuração confere poderes. E a declaração afirma um fato. Nenhum deles é o documento próprio para comunicar uma decisão a uma empresa externa.",
  },
  {
    d: "media",
    e: "Em qual das frases a impessoalidade da redação oficial é respeitada?",
    o: ["Informa-se que o prazo foi prorrogado.", "Eu acho que o prazo foi prorrogado.", "Pessoalmente, creio que o prazo vai mudar.", "Na minha opinião, o prazo é longo.", "Tenho certeza de que o prazo foi prorrogado."],
    x: "A impessoalidade exige que o texto não exprima opinião ou sentimento do redator: informa-se que o prazo foi prorrogado apresenta o fato sem marca pessoal, como se o próprio órgão falasse.\n\nEu acho, pessoalmente, creio, na minha opinião e tenho certeza trazem a opinião do redator, o que a redação oficial evita. A voz passiva sintética ou a terceira pessoa são recursos para manter o texto impessoal.",
  },
  {
    d: "media",
    e: "Qual reescrita torna mais concisa a frase “Venho, por meio da presente, solicitar a Vossa Senhoria a gentileza de me informar”?",
    o: ["Solicito a Vossa Senhoria que informe", "Venho, por intermédio deste documento, pedir a gentileza de informar", "Peço, com a máxima gentileza possível, que me informe", "Venho por meio desta carta, com todo o respeito, pedir que informe", "Solicito, se for possível, caso não haja inconveniente, que informe"],
    x: "A concisão pede que se diga o necessário com o menor número de palavras, sem perder clareza e cortesia. Solicito a Vossa Senhoria que informe mantém o pedido e o tratamento, eliminando rodeios como venho, por meio da presente e a gentileza de.\n\nAs demais reescritas mantêm ou aumentam os rodeios: por intermédio deste documento, com a máxima gentileza possível, com todo o respeito, se for possível, caso não haja inconveniente. Todas alongam o pedido sem acrescentar informação.",
  },
  {
    d: "media",
    e: "Qual das expressões abaixo é inadequada em um documento oficial por ser coloquial?",
    o: ["“Tá tudo certo”", "“Ficam acordados os termos”", "“Encaminho para análise”", "“Segue o relatório”", "“Aguardo manifestação”"],
    x: "A redação oficial exige linguagem formal, no padrão culto. Tá tudo certo é uma forma coloquial, com a contração tá e a expressão tudo certo, própria da conversa informal, e por isso é inadequada.\n\nFicam acordados os termos, encaminho para análise, segue o relatório e aguardo manifestação são formas formais e comuns nos documentos oficiais. Elas são claras, objetivas e respeitam o padrão culto.",
  },
  {
    d: "media",
    e: "Em qual das opções a data está escrita de acordo com a prática dos manuais de redação oficial?",
    o: ["Brasília, 1º de março de 2025.", "Brasília, 01 de março de 2025.", "Brasília, 1/3/25.", "Brasília, 1 mar. 2025.", "Brasília, 01.03.2025."],
    x: "Na redação oficial, a data é escrita por extenso, com o local, o dia, o mês e o ano: Brasília, 1º de março de 2025. O primeiro dia do mês leva o ordinal 1º, e os demais dias, o cardinal, sem zero à esquerda.\n\nBrasília, 01 de março de 2025 usa o zero à esquerda. As datas numéricas e as abreviadas, como 1/3/25, 1 mar. 2025 e 01.03.2025, não são as previstas para o corpo do documento oficial.",
  },
  {
    d: "media",
    e: "Como deve ser escrito o número de um ofício?",
    o: ["Ofício nº 123/2025", "Ofício 123 de 2025 número", "Ofício Nº.:123-2025", "Ofício número cento e vinte e três", "Ofício #123"],
    x: "O número do ofício é escrito com a palavra ofício, o sinal nº, o número sequencial e o ano, separados por barra: Ofício nº 123/2025. Em alguns órgãos, acrescenta-se a sigla da unidade, como em Ofício nº 123/2025/ABC.\n\nAs demais formas misturam a ordem, usam pontuação a mais, escrevem o número por extenso ou empregam um símbolo informal, o jogo da velha, que não faz parte da prática da redação oficial.",
  },
  {
    d: "media",
    e: "Onde fica o nome do signatário em um ofício?",
    o: ["Abaixo da assinatura, com o cargo", "Acima do timbre", "Dentro do vocativo", "Antes do assunto", "No meio do texto"],
    x: "O nome do signatário, isto é, de quem assina o ofício, vem abaixo do espaço reservado à assinatura, seguido do cargo ou função. Assim se identifica quem assina o documento.\n\nO timbre fica no alto e identifica o órgão. O vocativo se dirige ao destinatário. O assunto vem logo depois do local e da data. E o meio do texto é o espaço do desenvolvimento. Por isso a identificação do signatário vem no fim, depois da assinatura.",
  },
  {
    d: "media",
    e: "Qual é a função do vocativo em um ofício?",
    o: ["Tratar o destinatário conforme o cargo", "Resumir o assunto", "Identificar o órgão emissor", "Registrar a data", "Encerrar o documento"],
    x: "O vocativo é a forma de o redator se dirigir ao destinatário, no início do texto, com o tratamento adequado ao cargo: Senhor Ministro, Senhora Diretora. Marca a formalidade e a hierarquia.\n\nResumir o assunto é função do campo assunto. Identificar o órgão emissor é função do timbre. Registrar a data é função do local e data. E encerrar o documento é função do fecho, seguido da assinatura. Cada parte do ofício tem uma função.",
  },
  {
    d: "media",
    e: "Em qual das situações deve ser usado o tratamento Vossa Senhoria?",
    o: ["Ao se dirigir a autoridades de nível inferior e a particulares", "Ao se dirigir ao Presidente da República", "Ao se dirigir a reitores", "Ao se dirigir a ministros", "Ao se dirigir ao Papa"],
    x: "Vossa Senhoria é o tratamento usado para autoridades que não têm tratamento próprio, como diretores e chefes, e também para particulares: empresas, cidadãos, pessoas em geral. É o tratamento mais comum na correspondência com quem está fora do governo.\n\nO Presidente da República e os ministros recebem Vossa Excelência. Os reitores recebem Vossa Magnificência. E o Papa recebe Vossa Santidade. Cada autoridade tem um tratamento.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre Vossa Excelência e Sua Excelência?",
    o: ["Vossa é usado para falar com a pessoa, e Sua, para falar dela a terceiros", "Vossa é usado para falar dela a terceiros, e Sua, para falar com a pessoa", "Os dois são usados apenas para particulares", "Os dois significam a mesma coisa em qualquer contexto", "Vossa é usado só por escrito, e Sua, só oralmente"],
    x: "Vossa Excelência é a forma usada para se dirigir diretamente à pessoa tratada, no vocativo e no corpo do texto: solicito a Vossa Excelência. Sua Excelência é a forma usada para falar dela a terceiros, ou no endereçamento: a Sua Excelência o Senhor Ministro.\n\nInverter as formas contraria o uso. Os dois tratamentos se aplicam a autoridades, e não a particulares. Não significam o mesmo em qualquer contexto, porque a pessoa gramatical é diferente. E os dois se usam por escrito e oralmente.",
  },
  {
    d: "media",
    e: "Qual documento propõe ao Presidente da República a adoção de um ato normativo ou a tomada de decisão?",
    o: ["Exposição de motivos", "Ata", "Procuração", "Declaração", "Memorando"],
    x: "A exposição de motivos é o documento dirigido ao Presidente da República ou ao Vice-Presidente por um ministro de Estado para informá-lo de determinado assunto, propor uma medida ou submeter a sua consideração um projeto de ato normativo. Justifica a proposta.\n\nA ata registra reuniões. A procuração confere poderes. A declaração afirma um fato. E o memorando é comunicação interna. Nenhum deles tem a finalidade de propor ao Presidente um ato normativo.",
  },
  {
    d: "media",
    e: "Qual documento descreve atividades realizadas e seus resultados em determinado período?",
    o: ["Relatório", "Procuração", "Requerimento", "Atestado", "Aviso"],
    x: "O relatório é o documento que descreve as atividades realizadas, os resultados alcançados e, quando for o caso, as dificuldades encontradas em um período. Serve para prestar contas e embasar decisões.\n\nA procuração confere poderes. O requerimento é um pedido. O atestado comprova um fato ou situação. E o aviso é uma comunicação, em geral de autoridades superiores. Só o relatório tem a função de descrever atividades e resultados.",
  },
  {
    d: "media",
    e: "Qual é a vantagem de padronizar os documentos oficiais?",
    o: ["Facilitar a leitura e a compreensão, dando uniformidade", "Permitir que cada redator use o estilo que preferir", "Tornar os textos mais longos e detalhados", "Eliminar a necessidade de assinatura", "Dispensar a revisão do texto"],
    x: "A padronização dos documentos oficiais, que define a estrutura, o tratamento e a diagramação, facilita a leitura e a compreensão, porque o leitor sabe onde encontrar cada informação. Também dá uniformidade à comunicação do Estado.\n\nA padronização não existe para permitir estilos pessoais, nem para alongar os textos, nem para dispensar a assinatura ou a revisão. É um dos princípios da redação oficial, ao lado da impessoalidade, da formalidade, da concisão e da clareza.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre a linguagem de um documento oficial e a de uma carta pessoal?",
    o: ["O documento oficial usa linguagem formal, impessoal e padronizada", "O documento oficial usa gírias e expressões afetivas", "A carta pessoal é obrigatoriamente impessoal", "Os dois seguem as mesmas regras de padronização", "O documento oficial dispensa o padrão culto"],
    x: "O documento oficial se dirige a uma coletividade ou a uma autoridade em nome de uma instituição, e por isso usa linguagem formal, impessoal e padronizada, no padrão culto. A carta pessoal, escrita entre pessoas, pode ser informal e afetiva.\n\nAs gírias e expressões afetivas pertencem à carta pessoal. A carta pessoal pode ser pessoal, e não obrigatoriamente impessoal. Os dois não seguem as mesmas regras de padronização. E o documento oficial exige o padrão culto.",
  },
  {
    d: "media",
    e: "O que é o fecho em um documento oficial?",
    o: ["A despedida que encerra o texto, antes da assinatura", "O resumo do assunto, no início", "A identificação do órgão, no alto da página", "O tratamento dado ao destinatário", "A data do documento"],
    x: "O fecho é a fórmula de despedida que encerra o texto do documento, antes da assinatura: Atenciosamente, Respeitosamente. Marca a cortesia e a relação hierárquica entre remetente e destinatário.\n\nO resumo do assunto é o campo assunto. A identificação do órgão, no alto, é o timbre. O tratamento ao destinatário é o vocativo. E a data é o local e data. O fecho só diz respeito à despedida.",
  },
  {
    d: "media",
    e: "Qual é a finalidade do timbre em um documento oficial?",
    o: ["Identificar o órgão que emite o documento", "Indicar o assunto tratado", "Registrar a assinatura", "Dirigir-se ao destinatário", "Despedir-se do leitor"],
    x: "O timbre é a identificação do órgão emissor, em geral com o brasão ou logotipo e o nome do órgão, no alto da primeira página. Mostra de onde vem o documento e lhe confere autenticidade.\n\nO assunto indica o tema. A assinatura registra quem assina. O vocativo se dirige ao destinatário. E o fecho é a despedida. Cada uma dessas partes tem função própria, diferente da do timbre.",
  },
  {
    d: "media",
    e: "Qual é o papel da conclusão no texto de um ofício?",
    o: ["Encerrar e indicar as providências", "Apresentar o assunto pela primeira vez", "Reunir todos os dados e justificativas", "Identificar o signatário", "Informar a data do documento"],
    x: "A conclusão encerra o texto do ofício retomando o essencial e indicando as providências solicitadas ou o que se espera do destinatário: pede-se resposta até o dia 20. Deixa claro o próximo passo.\n\nApresentar o assunto pela primeira vez é papel da introdução. Reunir dados e justificativas é papel do desenvolvimento. Identificar o signatário e informar a data são partes do documento, e não do texto. A conclusão é o fecho do raciocínio.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual dos trechos a linguagem está de acordo com a redação oficial?",
    o: ["Comunico a Vossa Senhoria que o processo foi encaminhado ao setor competente.", "Aviso a você que o processo foi mandado pro setor certo.", "Pô, o processo já foi lá pro setor.", "Fiz o processo ir pro setor, viu?", "O processo tá lá no setor, tranquilo."],
    x: "O trecho correto usa o tratamento Vossa Senhoria, o verbo comunico, em tom formal, e a expressão setor competente, própria da linguagem administrativa. Está no padrão culto, é impessoal e é claro.\n\nOs demais trechos usam você em um contexto formal, as contrações pro e tá, a interjeição pô e as expressões viu e tranquilo, que são próprias da conversa informal. A redação oficial exige o padrão culto e a formalidade.",
  },
  {
    d: "dificil",
    e: "Em qual das frases o pronome de tratamento e o possessivo estão de acordo com a norma-padrão?",
    o: ["Solicito a Vossa Excelência que envie sua resposta.", "Solicito a Vossa Excelência que envie tua resposta.", "Solicito a Vossa Excelência que enviai sua resposta.", "Solicito a Vossa Excelência que envia sua resposta.", "Solicito a Vossa Excelência que enviar sua resposta."],
    x: "Os pronomes de tratamento levam o verbo à terceira pessoa e pedem o possessivo de terceira pessoa. Em solicito a Vossa Excelência que envie sua resposta, envie está no presente do subjuntivo, de terceira pessoa, e sua é o possessivo correspondente.\n\nTua é possessivo de segunda pessoa, e não concorda com o pronome de tratamento. Enviai é imperativo de segunda pessoa do plural. Envia é imperativo de segunda pessoa do singular ou presente de terceira, e não está no subjuntivo exigido por que. E enviar é infinitivo, que não cabe depois de que.",
  },
  {
    d: "dificil",
    e: "Qual reescrita torna impessoal e concisa a frase “Eu acho que seria muito bom, na minha opinião, que o prazo fosse prorrogado”?",
    o: ["Sugere-se a prorrogação do prazo.", "Eu creio que o prazo deve ser prorrogado, na minha opinião.", "Acho que o prazo deveria, quem sabe, ser prorrogado.", "Seria ótimo, eu acho, prorrogar o prazo.", "Eu sugiro, na minha opinião, o prazo prorrogado."],
    x: "Sugere-se a prorrogação do prazo é impessoal, porque usa a voz passiva sintética e não aponta o redator, e é concisa, porque elimina as marcas de opinião e os rodeios. Mantém a ideia central: a sugestão de prorrogar.\n\nAs demais reescritas mantêm a opinião pessoal (eu creio, acho, eu acho, eu sugiro, na minha opinião) e os rodeios (quem sabe, seria ótimo). Por isso nenhuma delas é impessoal nem concisa.",
  },
  {
    d: "dificil",
    e: "Em qual dos trechos há desvio em relação à redação oficial?",
    o: ["Pô, chefe, manda o ofício logo!", "Encaminho a Vossa Senhoria o ofício.", "Solicito as providências cabíveis.", "Informo que o prazo expira em 10 de março.", "Segue o relatório para análise."],
    x: "O trecho Pô, chefe, manda o ofício logo! usa uma interjeição informal, o vocativo chefe, o imperativo e o advérbio logo em tom de ordem, e a exclamação. Contraria a formalidade, a impessoalidade e a cortesia exigidas na redação oficial.\n\nOs demais trechos estão adequados: encaminho a Vossa Senhoria o ofício é formal e usa o tratamento correto; solicito as providências cabíveis é uma fórmula administrativa; informo que o prazo expira em 10 de março é objetivo; e segue o relatório para análise é conciso e claro.",
  },
  {
    d: "dificil",
    e: "Qual abertura de ata está de acordo com as normas de redação de atas?",
    o: ["Aos dez dias do mês de março de dois mil e vinte e cinco, às nove horas, reuniram-se os membros do conselho.", "Aos 10/03/25, às 9h, reuniram-se os membros do conselho para tratar de assuntos diversos.", "Em 10 mar. 25, às 9h, houve reunião dos membros do conselho para tratar de assuntos diversos.", "No dia 10, em local não indicado, houve reunião do conselho para tratar de assuntos diversos.", "Hoje, reunimo-nos para conversar sobre os assuntos diversos do conselho, sem horário marcado."],
    x: "A abertura da ata registra o dia, o mês, o ano e a hora, escritos por extenso: aos dez dias do mês de março de dois mil e vinte e cinco, às nove horas. Indica também quem se reuniu, no caso os membros do conselho. A escrita por extenso evita alterações posteriores.\n\nAs aberturas com algarismos e abreviaturas (10/03/25, 9h, 10 mar. 25), sem mês nem ano e sem local, ou com tom de conversa (hoje, reunimo-nos para conversar, sem horário marcado), não seguem as normas da ata.",
  },
  {
    d: "dificil",
    e: "Qual é a ordem das partes de um requerimento?",
    o: ["Endereçamento, pedido, fecho, data, assinatura", "Fecho, pedido, endereçamento, assinatura", "Assinatura, data, pedido, endereçamento", "Pedido, assinatura, endereçamento, fecho", "Data, fecho, pedido, endereçamento, assinatura"],
    x: "O requerimento começa pelo endereçamento à autoridade, segue com a qualificação do requerente e o pedido, que formam o texto, termina com o fecho (Nestes termos, pede deferimento), traz o local e a data e se encerra com a assinatura. Essa sequência vai do destinatário à identificação de quem pede.\n\nAs demais sequências começam pelo fecho, pela assinatura, pelo pedido ou pela data, o que contraria a estrutura do documento: o pedido não pode vir antes do endereçamento, nem a assinatura, antes do fecho.",
  },
  {
    d: "dificil",
    e: "Em qual das situações o fecho Atenciosamente é o adequado, conforme a prática dos manuais de redação oficial?",
    o: ["Ofício dirigido a autoridade de mesma hierarquia ou inferior", "Ofício dirigido a autoridade de hierarquia superior", "Ofício dirigido ao Presidente da República", "Requerimento dirigido a uma autoridade", "Ata de reunião"],
    x: "O fecho Atenciosamente é usado em ofícios dirigidos a autoridades de mesma hierarquia ou inferior à do signatário. Marca a cortesia sem a deferência especial devida a quem está acima.\n\nOfícios dirigidos a autoridades superiores, inclusive ao Presidente da República, levam Respeitosamente. O requerimento tem sua fórmula própria, nestes termos, pede deferimento. E a ata não leva fecho de correspondência, porque termina com as assinaturas.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre os princípios da redação oficial está correta?",
    o: ["O texto deve ser impessoal, claro, conciso e escrito em linguagem formal e padronizada", "O texto deve expressar a opinião pessoal do redator", "O texto deve usar gírias para aproximar o leitor", "O texto deve ser longo e repetitivo para ser formal", "O texto deve variar a forma conforme o gosto do redator"],
    x: "Os princípios da redação oficial incluem a impessoalidade, a clareza, a concisão, a formalidade e a padronização, com uso do padrão culto da língua. Eles garantem que a comunicação do Estado seja compreensível, respeitosa e uniforme.\n\nExpressar a opinião do redator contraria a impessoalidade. Usar gírias contraria a formalidade. Ser longo e repetitivo contraria a concisão. E variar a forma conforme o gosto contraria a padronização.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre ofício e memorando está correta?",
    o: ["O ofício é externo, e o memorando, interno", "O ofício é interno, e o memorando, externo", "Os dois são exclusivamente externos", "Os dois são requerimentos", "Não há diferença entre eles"],
    x: "O ofício é o documento da comunicação oficial externa, dirigido a outros órgãos, autoridades ou particulares. O memorando é o documento da comunicação interna, trocado entre unidades ou chefias do mesmo órgão. Os dois seguem um padrão de redação e de diagramação.\n\nInverter as definições contraria o uso. Os dois não são exclusivamente externos, nem são requerimentos, que são pedidos dirigidos a autoridades. E há, sim, diferença entre eles: o destinatário, interno ou externo.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre os pronomes de tratamento na redação oficial está correta?",
    o: ["Levam o verbo à terceira pessoa", "Exigem verbo na segunda pessoa do singular", "Exigem sempre o adjetivo no masculino", "Dispensam o uso do possessivo", "São sempre abreviados"],
    x: "Embora designem a pessoa com quem se fala, os pronomes de tratamento, como Vossa Excelência, levam o verbo à terceira pessoa: Vossa Excelência está. O adjetivo ou particípio concorda com o sexo da pessoa tratada: Vossa Excelência está convidada, para uma senadora.\n\nO verbo não vai à segunda pessoa do singular. O adjetivo não é sempre masculino. O possessivo, quando usado, é de terceira pessoa: sua. E a abreviação não é obrigatória, e o uso por extenso é preferível.",
  },
];
