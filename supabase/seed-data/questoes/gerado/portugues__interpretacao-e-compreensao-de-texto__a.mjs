/* Interpretação e compreensão de texto — parte A (25 questões).
   Os textos-base vêm escritos no próprio enunciado: nenhuma questão depende
   de imagem. Ideia central, inferência, sentido contextual e finalidade.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia o trecho: \"A tecnologia encurtou distâncias e tornou a comunicação instantânea. Ainda assim, nunca se falou tanto em solidão como agora.\" A ideia central defendida nesse trecho é a de que:",
    opcoes: [
      "a tecnologia eliminou completamente as distâncias entre as pessoas.",
      "a comunicação instantânea é o único avanço tecnológico relevante.",
      "o avanço da conectividade convive com o aumento do sentimento de solidão.",
      "a solidão é um fenômeno restrito a quem não usa tecnologia.",
      "falar sobre solidão é uma forma de rejeitar os avanços tecnológicos.",
    ],
    correta: 2,
    explicacao:
      "O trecho apresenta dois fatos e os coloca em tensão: o ganho técnico de proximidade e a permanência, ou até o agravamento, da solidão. A alternativa que fala em eliminação das distâncias exagera o primeiro dado e ignora o segundo. Já dizer que a solidão atinge apenas quem não usa tecnologia inverte a lógica do texto, que aponta justamente o contrário.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "No trecho \"A tecnologia encurtou distâncias e tornou a comunicação instantânea. Ainda assim, nunca se falou tanto em solidão como agora\", a expressão \"ainda assim\" estabelece entre as duas frases uma relação de:",
    opcoes: [
      "oposição, contrariando a expectativa criada pela primeira frase.",
      "causa, explicando o motivo do avanço tecnológico.",
      "conclusão, resumindo o que foi dito anteriormente.",
      "finalidade, indicando o objetivo da comunicação instantânea.",
      "adição, somando informações de mesmo sentido.",
    ],
    correta: 0,
    explicacao:
      "A primeira frase cria a expectativa de que as pessoas estariam mais próximas; \"ainda assim\" introduz um dado que frustra essa expectativa. É um conectivo concessivo-adversativo, da mesma família de \"mas\", \"contudo\" e \"no entanto\". Se a relação fosse de adição, caberia \"além disso\", que produziria um sentido completamente diferente.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"O prefeito afirmou que a obra será entregue no prazo, desde que não haja novas chuvas.\" A partir dessa afirmação, é possível inferir corretamente que:",
    opcoes: [
      "a obra certamente será entregue no prazo previsto.",
      "a obra já está atrasada em relação ao cronograma inicial.",
      "as chuvas não têm qualquer influência sobre o andamento da obra.",
      "a entrega no prazo depende de uma condição que não está sob controle.",
      "o prefeito assumiu que a obra não será concluída.",
    ],
    correta: 3,
    explicacao:
      "A expressão \"desde que\" introduz uma condição, e o cumprimento do prazo fica subordinado a um fator climático imprevisível. Afirmar que a obra certamente será entregue ignora essa ressalva. Dizer que ela já está atrasada é ir além do que o texto autoriza: a inferência precisa se sustentar no que foi dito, sem acrescentar informação nova.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Depois de horas de discussão, chegaram a um acordo morno, que não satisfez ninguém.\" No contexto, o adjetivo \"morno\" foi empregado com o sentido de:",
    opcoes: [
      "agradavelmente aquecido.",
      "sem entusiasmo, pouco convincente.",
      "definitivo e irrevogável.",
      "extremamente detalhado.",
      "obtido com rapidez.",
    ],
    correta: 1,
    explicacao:
      "O sentido literal de \"morno\" é de temperatura intermediária, mas aqui a palavra é usada em sentido figurado para qualificar um acordo sem força e sem convicção — leitura confirmada pela oração seguinte, que diz não ter satisfeito ninguém. É um exemplo de como o contexto seleciona qual acepção da palavra está em jogo.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"É preciso investir em saneamento básico. Cada real aplicado nessa área economiza quatro reais em gastos com saúde pública.\" A segunda frase, em relação à primeira, funciona como:",
    opcoes: [
      "uma ressalva que limita a afirmação anterior.",
      "uma repetição da mesma ideia com outras palavras.",
      "uma opinião contrária à defendida no início.",
      "uma digressão sem ligação com o assunto.",
      "um argumento que sustenta a tese apresentada.",
    ],
    correta: 4,
    explicacao:
      "A primeira frase enuncia a tese, e a segunda oferece um dado numérico que a justifica: trata-se de um argumento de sustentação. Não é repetição, porque acrescenta informação nova. Também não é ressalva, já que não limita nem relativiza a defesa feita — apenas a reforça com uma razão de ordem econômica.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Parabéns pelo relatório. Só faltou entregar antes do prazo, revisar os dados e assinar.\" O efeito de sentido produzido por esse enunciado é de:",
    opcoes: [
      "elogio sincero ao trabalho realizado.",
      "neutralidade, sem qualquer julgamento.",
      "dúvida quanto à autoria do relatório.",
      "pedido formal de correção do documento.",
      "ironia, pois a crítica se disfarça de elogio.",
    ],
    correta: 4,
    explicacao:
      "O elogio inicial é desmentido pela lista de falhas que o segue, e o advérbio \"só\" acentua o contraste ao minimizar problemas que, na verdade, são graves. Esse descompasso entre o que se diz e o que se quer dizer é a marca da ironia. Um elogio sincero não seria seguido de tantas ressalvas essenciais.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"O aluno voltou a chegar atrasado.\" O emprego do verbo \"voltar\" nesse enunciado pressupõe que:",
    opcoes: [
      "o aluno nunca havia chegado atrasado antes.",
      "o aluno já havia chegado atrasado em outra ocasião.",
      "o aluno chegou adiantado dessa vez.",
      "o atraso foi causado por um imprevisto.",
      "o aluno não frequentava as aulas regularmente.",
    ],
    correta: 1,
    explicacao:
      "\"Voltar a\" indica repetição de algo já ocorrido, e essa informação não é afirmada diretamente: ela é pressuposta pelo próprio verbo. Pressupostos ficam fora da discussão porque são apresentados como já aceitos — mesmo negando a frase, o pressuposto permanece. Identificá-los é essencial para a leitura crítica de textos argumentativos.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Beba com moderação. O consumo excessivo de álcool prejudica a saúde e é a principal causa de acidentes de trânsito no país.\" A finalidade predominante desse texto é:",
    opcoes: [
      "narrar um acontecimento marcante.",
      "descrever detalhadamente um ambiente.",
      "expor um conceito científico complexo.",
      "conscientizar o leitor e orientar seu comportamento.",
      "entreter o leitor por meio do humor.",
    ],
    correta: 3,
    explicacao:
      "O texto usa o modo imperativo e apresenta uma justificativa de interesse público, com o objetivo claro de influenciar a conduta de quem lê. Não há narração, porque não se conta uma sequência de fatos, nem descrição de ambiente. A função predominante é conativa, centrada no interlocutor.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Os pesquisadores analisaram trezentas amostras. Elas foram coletadas em rios de cinco estados diferentes.\" O pronome \"elas\", no início da segunda frase, retoma:",
    opcoes: [
      "os pesquisadores mencionados anteriormente.",
      "os rios citados no final do trecho.",
      "as trezentas amostras analisadas.",
      "os cinco estados brasileiros.",
      "as análises realizadas pelos pesquisadores.",
    ],
    correta: 2,
    explicacao:
      "O pronome retoma o termo com o qual concorda em gênero e número e que faz sentido como objeto de coleta: \"as trezentas amostras\". \"Pesquisadores\" é masculino, o que já elimina essa alternativa. Esse tipo de retomada é o que garante a coesão referencial e evita a repetição do mesmo termo.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Segundo o instituto, a taxa de desemprego caiu. Especialistas ponderam, contudo, que parte dessa queda se explica pelo desânimo de quem parou de procurar trabalho.\" A ponderação dos especialistas serve para:",
    opcoes: [
      "confirmar integralmente o dado divulgado pelo instituto.",
      "negar que a taxa de desemprego tenha caído.",
      "propor uma nova metodologia de cálculo do desemprego.",
      "relativizar a leitura otimista do dado apresentado.",
      "acusar o instituto de manipular os números divulgados.",
    ],
    correta: 3,
    explicacao:
      "Os especialistas não contestam o número em si, mas o significado que se costuma atribuir a ele: a queda pode não indicar melhora real. O conectivo \"contudo\" sinaliza justamente esse contraponto. Confundir relativização com negação é um erro frequente — o texto aceita o dado e questiona apenas sua interpretação.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Chovia sem parar. As ruas alagaram, o trânsito parou e milhares de pessoas ficaram presas nos ônibus por horas.\" A relação entre a primeira frase e as demais é de:",
    opcoes: [
      "causa e consequência.",
      "comparação entre situações distintas.",
      "oposição entre ideias contrárias.",
      "exemplificação de um conceito abstrato.",
      "concessão a um argumento contrário.",
    ],
    correta: 0,
    explicacao:
      "A chuva persistente é a causa, e o alagamento, a parada do trânsito e as pessoas presas são as consequências encadeadas. Note que a relação não está marcada por conectivo explícito: ela se estabelece pelo sentido e pela ordem dos fatos, o que se chama de justaposição.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Nem todos os alunos entregaram o trabalho.\" A partir dessa afirmação, pode-se concluir com segurança que:",
    opcoes: [
      "nenhum aluno entregou o trabalho.",
      "todos os alunos entregaram o trabalho.",
      "exatamente metade da turma entregou o trabalho.",
      "apenas um aluno entregou o trabalho.",
      "pelo menos um aluno não entregou o trabalho.",
    ],
    correta: 4,
    explicacao:
      "\"Nem todos\" nega a totalidade, mas não afirma que ninguém entregou: garante apenas que houve ao menos uma exceção. Confundir \"nem todos\" com \"nenhum\" é um erro lógico comum. O enunciado também não informa quantos entregaram, o que descarta as alternativas que quantificam com precisão.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"O rio, que antes abastecia a cidade inteira, hoje mal molha as pedras do leito.\" A imagem construída na segunda parte da frase serve para:",
    opcoes: [
      "elogiar a beleza natural preservada do rio.",
      "enfatizar a intensa redução do volume de água.",
      "descrever a composição geológica do leito.",
      "indicar que o rio mudou de curso.",
      "sugerir que a cidade cresceu além do previsto.",
    ],
    correta: 1,
    explicacao:
      "A expressão \"mal molha as pedras\" cria uma imagem de escassez extrema, em contraste direto com o passado em que o rio abastecia toda a cidade. O recurso é a hipérbole a serviço do contraste temporal. Uma leitura literal, que buscasse informação geológica, perderia completamente o efeito pretendido.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Trata-se de uma proposta interessante, embora ainda careça de estudos de viabilidade e de fontes de financiamento claras.\" A postura do autor em relação à proposta é de:",
    opcoes: [
      "rejeição total, sem qualquer reconhecimento de mérito.",
      "entusiasmo irrestrito com a iniciativa.",
      "indiferença completa quanto ao resultado.",
      "aprovação com ressalvas relevantes.",
      "ironia disfarçada de análise técnica.",
    ],
    correta: 3,
    explicacao:
      "O autor reconhece valor na proposta e, com o conectivo concessivo \"embora\", aponta lacunas que precisam ser supridas. Não há rejeição total, porque o mérito é admitido, nem entusiasmo irrestrito, porque as objeções são substanciais. Esse equilíbrio é típico de textos analíticos que evitam posições absolutas.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Misture a farinha, o açúcar e o fermento. Em seguida, acrescente os ovos e bata por cinco minutos.\" Pela linguagem e pela estrutura, esse texto pertence ao gênero:",
    opcoes: [
      "receita culinária, de finalidade instrucional.",
      "crônica literária, de caráter reflexivo.",
      "notícia jornalística, de teor informativo.",
      "artigo de opinião, de natureza argumentativa.",
      "verbete de dicionário, de função definidora.",
    ],
    correta: 0,
    explicacao:
      "O uso de verbos no imperativo, a sequência ordenada de ações e a indicação de tempo caracterizam um texto instrucional, típico de receitas e manuais. Não há defesa de ponto de vista, o que afasta o artigo de opinião, nem relato de acontecimento, o que afasta a notícia.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"A empresa afirma que respeita o meio ambiente. Nos últimos três anos, porém, recebeu doze autuações por descarte irregular de resíduos.\" O dado apresentado na segunda frase tem a função de:",
    opcoes: [
      "ilustrar com exemplos a política ambiental da empresa.",
      "confirmar a veracidade do que a empresa afirma.",
      "contestar a afirmação feita pela empresa.",
      "esclarecer termos técnicos usados anteriormente.",
      "encerrar o assunto sem tomar posição.",
    ],
    correta: 2,
    explicacao:
      "O conectivo \"porém\" introduz um fato que contradiz o discurso institucional, colocando em xeque a alegação de respeito ambiental. Trata-se de um contra-argumento factual. A alternativa que fala em confirmação inverte por completo a relação estabelecida entre as duas frases.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Ele não é exatamente o que se poderia chamar de pontual.\" O recurso empregado nesse enunciado consiste em:",
    opcoes: [
      "afirmar diretamente uma qualidade positiva.",
      "atenuar uma crítica por meio de negação indireta.",
      "exagerar uma característica para produzir humor.",
      "comparar o sujeito a outra pessoa conhecida.",
      "reproduzir literalmente a fala de terceiros.",
    ],
    correta: 1,
    explicacao:
      "Em vez de dizer que a pessoa é atrasada, o enunciado nega de forma indireta e cuidadosa a qualidade oposta, suavizando a crítica. Esse recurso é chamado de eufemismo, e aparece com frequência em situações que exigem cortesia. O efeito é de crítica clara, ainda que enunciada com rodeios.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"O Congresso aprovou ontem, por 312 votos a 145, o projeto que altera as regras de licenciamento ambiental.\" O tipo textual predominante nesse trecho é:",
    opcoes: [
      "descritivo, com foco em características físicas.",
      "injuntivo, com orientações ao leitor.",
      "expositivo-informativo, com relato de um fato.",
      "argumentativo, com defesa de uma tese.",
      "narrativo-ficcional, com personagens inventados.",
    ],
    correta: 2,
    explicacao:
      "O trecho relata um acontecimento com dados objetivos — data, placar e objeto da votação — sem emitir juízo de valor nem defender posição. É a marca do texto informativo de imprensa. Argumentar exigiria a presença de uma tese, o que não ocorre aqui.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Estudos indicam que a leitura frequente amplia o vocabulário. Logo, quem lê mais tende a se expressar com mais precisão.\" A expressão \"logo\" introduz:",
    opcoes: [
      "uma condição necessária para a leitura.",
      "uma comparação entre dois grupos de leitores.",
      "uma ressalva ao que foi afirmado antes.",
      "uma conclusão derivada da informação anterior.",
      "um exemplo que ilustra o argumento inicial.",
    ],
    correta: 3,
    explicacao:
      "\"Logo\" é conectivo conclusivo: encadeia um raciocínio em que a segunda frase decorre da primeira. Poderia ser substituído por \"portanto\" ou \"por isso\" sem alteração de sentido. Se fosse ressalva, caberia \"no entanto\", que produziria justamente o efeito contrário ao pretendido.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"A menina correu até o portão. Ali, esperou o ônibus escolar por quinze minutos.\" O advérbio \"ali\", na segunda frase, retoma:",
    opcoes: [
      "o portão citado na frase anterior.",
      "o ônibus escolar mencionado adiante.",
      "o intervalo de quinze minutos.",
      "a escola onde a menina estuda.",
      "a própria menina, sujeito da ação.",
    ],
    correta: 0,
    explicacao:
      "Advérbios de lugar como \"ali\", \"lá\" e \"aqui\" funcionam como elementos coesivos que retomam um espaço já mencionado — neste caso, o portão. Essa retomada evita a repetição do substantivo e mantém a fluidez do texto. Alternativas que apontam o ônibus ou a menina confundem lugar com participante da cena.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Não faltam leis ambientais no país. O que falta é fiscalização capaz de fazê-las valer.\" A estrutura empregada nesse trecho serve para:",
    opcoes: [
      "negar a existência de qualquer legislação ambiental.",
      "deslocar o foco do problema da lei para sua aplicação.",
      "defender a criação urgente de novas leis ambientais.",
      "elogiar a atuação dos órgãos de fiscalização.",
      "afirmar que o problema ambiental não tem solução.",
    ],
    correta: 1,
    explicacao:
      "A primeira frase afasta uma hipótese — a de insuficiência legal — e a segunda apresenta o que o autor considera o verdadeiro problema. A construção \"não é X, é Y\" é um recurso argumentativo de redirecionamento. Defender novas leis contrariaria diretamente o que o texto afirma.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Faltavam dez minutos para a meia-noite quando o telefone tocou. Ninguém em casa se atreveu a atender.\" Esse trecho apresenta características típicas de um texto:",
    opcoes: [
      "narrativo, com marcação de tempo e sucessão de fatos.",
      "dissertativo, com defesa explícita de uma tese.",
      "injuntivo, com instruções ao leitor.",
      "descritivo, com detalhamento de características físicas.",
      "expositivo-científico, com apresentação de conceitos.",
    ],
    correta: 0,
    explicacao:
      "Há marcação temporal precisa, personagens implícitos e fatos que se sucedem criando expectativa — elementos da narração. A tensão construída pela segunda frase reforça esse caráter. Um texto descritivo se deteria em como são as coisas, e não no que acontece.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"O relatório aponta problemas na gestão. Não se trata, porém, de um documento acusatório: seu objetivo é subsidiar decisões futuras.\" Ao empregar os dois-pontos, o autor:",
    opcoes: [
      "introduz uma citação literal de outro autor.",
      "enumera itens de uma lista de problemas.",
      "marca uma pausa sem valor semântico definido.",
      "indica a supressão de parte do texto original.",
      "explicita o propósito do documento, esclarecendo a negação anterior.",
    ],
    correta: 4,
    explicacao:
      "Os dois-pontos anunciam um esclarecimento: depois de negar o caráter acusatório, o autor informa qual é de fato a finalidade do relatório. Essa função explicativa é uma das principais desse sinal, ao lado da introdução de falas e enumerações — que aqui não ocorrem.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Todo mundo sabe que estudar de madrugada é mais produtivo.\" Do ponto de vista argumentativo, o problema desse enunciado está em:",
    opcoes: [
      "apresentar dados estatísticos sem indicar a fonte.",
      "utilizar linguagem excessivamente técnica.",
      "apoiar-se em senso comum apresentado como consenso.",
      "citar um especialista sem mencionar sua formação.",
      "empregar a primeira pessoa em texto formal.",
    ],
    correta: 2,
    explicacao:
      "A expressão \"todo mundo sabe\" transforma uma crença pessoal em suposta verdade coletiva, dispensando qualquer comprovação. É uma generalização indevida, e não um argumento. Note que o texto não apresenta dado algum, o que também afasta a alternativa sobre estatísticas sem fonte.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"O médico explicou o procedimento em termos simples, para que a paciente pudesse decidir com clareza.\" A oração iniciada por \"para que\" indica:",
    opcoes: [
      "a causa da simplicidade da explicação.",
      "uma condição imposta pela paciente.",
      "uma consequência inesperada do diálogo.",
      "uma comparação entre dois procedimentos.",
      "a finalidade da escolha de linguagem do médico.",
    ],
    correta: 4,
    explicacao:
      "\"Para que\" introduz oração final, que expressa o objetivo da ação principal: a linguagem simples foi escolhida com o propósito de permitir uma decisão consciente. Se a relação fosse de causa, caberia \"porque\", e o sentido mudaria — o motivo viria antes da ação, e não como sua meta.",
  },
];
