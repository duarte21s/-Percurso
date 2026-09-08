/* Coesão e coerência textual (50 questões) — RASCUNHO gerado por gemini-3.6-flash.
   Dedup: exato + semântico (Jaccard trigrama ≥ 0.5); 0 rejeitada(s) na geração.
   Conferência de gabarito (gemini-3.6-flash, 2x às cegas, rigor estrito): 0 descartada(s).
   NÃO revisado. Confira gabarito e contas antes de semear.
   Passou por rebalancear-gabarito.mjs e checar-qualidade.mjs. */

export const questoes = [
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Em um relatório administrativo de desempenho, consta a seguinte frase: \"A empresa investiu pesadamente em treinamento de funcionários no último ano, contudo os índices de produtividade mantiveram-se estagnados.\" Caso o redator decida substituir o conector destacado por uma conjunção subordinativa concessiva mantendo a relação lógica original e realizando os devidos ajustes sintáticos, qual reescrita preserva a coerência e a coesão do texto?",
    opcoes: [
      "Ainda que a empresa tenha investido pesadamente em treinamento de funcionários no último ano, os índices de produtividade mantiveram-se estagnados.",
      "Visto que a empresa investiu pesadamente em treinamento de funcionários no último ano, os índices de produtividade mantiveram-se estagnados.",
      "À medida que a empresa investia pesadamente em treinamento de funcionários no último ano, os índices de produtividade mantiveram-se estagnados.",
      "Portanto a empresa investiu pesadamente em treinamento de funcionários no último ano, os índices de produtividade mantiveram-se estagnados.",
      "Porquanto a empresa investiu pesadamente em treinamento de funcionários no último ano, os índices de produtividade mantiveram-se estagnados.",
    ],
    correta: 0,
    explicacao:
      "A conjunção 'contudo' possui valor adversativo (oposição). Para substituí-la mantendo a coerência por uma conjunção subordinativa concessiva (que expressa um fato que não impede a realização da oração principal), deve-se usar 'Ainda que' acompanhado do verbo no modo subjuntivo ('tenha investido'). A opção com 'Visto que' e a opção com 'Porquanto' introduzem relações de causa, alterando o sentido do texto. A opção com 'À medida que' estabelece uma ideia de proporção. Por fim, a opção com 'Portanto' confere valor conclusivo, o que quebra a coerência lógica da frase original.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Considere o período extraído de um artigo de opinião: \"O diretor chamou os assessores e comunicou isto: a reestruturação do setor ocorrerá no próximo mês.\" Quanto ao mecanismo de coesão referencial utilizado pelo pronome destacado, como ele se classifica sintático-semanticamente no contexto?",
    opcoes: [
      "Anafórico, pois retoma um termo já expresso no início do período.",
      "Catafórico, pois antecipa uma informação que será apresentada a seguir.",
      "Exofórico, pois faz referência a um elemento fora da situação textual.",
      "Elíptico, pois oculta um termo subentendido pelo contexto comunicativo.",
      "Lexical, pois substitui o nome por um sinônimo perfeito de sentido igual.",
    ],
    correta: 1,
    explicacao:
      "O pronome demonstrativo 'isto' atua com função catafórica no texto, pois serve para antecipar uma informação que ainda será declarada na sequência ('a reestruturação do setor ocorrerá no próximo mês'). O recurso anafórico ocorreria se o pronome retomasse um termo já dito anteriormente. O termo exofórico (dêitico) refere-se a objetos ou contexto do mundo físico fora do texto. A elipse é a omissão de um termo gramatical recuperável. Por fim, a coesão lexical se dá pelo uso de palavras de sentido equivalente (sinônimos, hiperônimos), e não por pronomes demonstrativos.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Analise a frase extraída de um e-mail corporativo: \"O gerente conversou com o funcionário sobre a sua promoção.\" Qual alteração na frase elimina completamente a ambiguidade de referência gerada pelo pronome possessivo \"sua\", garantindo a clareza e a coerência textual?",
    opcoes: [
      "O gerente conversou com o funcionário sobre a promoção dele.",
      "O gerente conversou com o próprio funcionário sobre a sua promoção.",
      "O gerente conversou com o funcionário sobre a promoção de si mesmo.",
      "O gerente conversou com o funcionário a respeito de sua própria promoção.",
      "O gerente e o funcionário conversaram sobre a sua promoção respectiva.",
    ],
    correta: 0,
    explicacao:
      "A frase original é ambígua porque o pronome possessivo 'sua' pode se referir tanto à promoção do gerente quanto à do funcionário. A substituição pela locução 'dele' especifica claramente que a promoção pertence ao funcionário, eliminando a ambiguidade. As opções que mantêm 'sua', 'sua própria' ou 'próprio funcionário' continuam permitindo dupla interpretação quanto a quem é o titular da promoção. A construção 'de si mesmo' é sintaticamente inadequada no contexto e não desfaz o ruído referente ao antecedente possessivo.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Em um texto informativo sobre fauna brasileira, lê-se: \"A onça-pintada busca abrigo nas matas ciliares durante o dia. Esse felino possui hábitos noturnos e é um excelente nadador.\" Qual recurso de coesão lexical foi utilizado para conectar a segunda frase à primeira sem repetir o nome do animal?",
    opcoes: [
      "Emprego de hiperônimo para retomar um termo específico anterior.",
      "Substituição por hipônimo para restringir o sentido do termo anterior.",
      "Reiteração por antonímia para estabelecer oposição semântica no texto.",
      "Coesão por elipse do sujeito na segunda oração do período composto.",
      "Nominalização de uma forma verbal expressa no primeiro período.",
    ],
    correta: 0,
    explicacao:
      "A palavra 'felino' é um hiperônimo (categoria de sentido mais amplo e genérico) em relação a 'onça-pintada', que é um hipônimo (termo de sentido mais específico). O uso do hiperônimo garante a coesão lexical referencial. A alternativa que menciona hipônimo inverte a relação lógica entre os termos. A opção sobre antonímia erra pois não há relação de oposição de sentidos. A alternativa sobre elipse está incorreta porque o sujeito da segunda oração está explicitamente declarado ('Esse felino'). A opção de nominalização é errada pois 'felino' retoma um substantivo, não um verbo.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Um parecer técnico sobre mobilidade urbana continha a seguinte passagem: \"Embora a malha cicloviária da cidade tenha expandido 40% no último ano, a população reduziu totalmente o uso de bicicletas como meio de transporte diário, impulsionando a venda de equipamentos ciclísticos na região.\" Qual falha de coerência textual compromete a sustentação lógica dessa passagem?",
    opcoes: [
      "A afirmação de que a redução total do uso de bicicletas impulsionou a venda de equipamentos ciclísticos é logicamente contraditória.",
      "A conjunção \"embora\" cria um valor de causa em vez de concessão, impedindo a compreensão do cálculo percentual.",
      "A expressão \"malha cicloviária\" impede a coesão sequencial por não ter um sinônimo perfeito no mesmo parágrafo.",
      "O uso de \"último ano\" estabelece uma anacronia temporal que anula a relação de consequência entre os verbos.",
      "A regência do verbo \"expandir\" gera dupla interpretação sobre quem realizou as obras de mobilidade urbana.",
    ],
    correta: 0,
    explicacao:
      "A incoerência textual é uma contradição lógica entre as ideias apresentadas: afirma-se que a população 'reduziu totalmente' o uso de bicicletas e, ao mesmo tempo, que isso teria 'impulsionado a venda de equipamentos ciclísticos'. Se o uso foi abandonado por completo, não há coerência em haver aumento nas vendas de produtos desse segmento. A opção sobre a conjunção 'embora' está incorreta, pois ela foi usada corretamente com sentido concessivo. A falta de sinônimo para 'malha cicloviária' é irrelevante para a coerência. As opções sobre anacronia temporal e regência do verbo 'expandir' atribuem o erro a aspectos sintáticos inexistentes ou irrelevantes para a falha lógica apontada.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Leia o trecho de um contrato de prestação de serviços: \"O pagamento integral das parcelas será mantido, contanto que os relatórios semanais sejam entregues rigorosamente no prazo estabelecido.\" Qual locução conjuntiva substitui o termo destacado mantendo a mesma relação de sentido e a coerência do texto?",
    opcoes: [
      "Desde que",
      "Posto que",
      "Ao passo que",
      "Por mais que",
      "Sem contar que",
    ],
    correta: 0,
    explicacao:
      "A locução 'contanto que' expressa uma condição para que o pagamento seja mantido. A locução 'desde que' (seguida de verbo no subjuntivo) possui valor condicional equivalente, preservando a coerência e a coesão textual. A opção 'posto que' possui valor predominantemente concessivo ou causal. A opção 'ao passo que' expressa proporção ou simultaneidade. A expressão 'por mais que' estabelece ideia de concessão. Já 'sem contar que' introduz um argumento aditivo, alterando a lógica condicional necessária ao texto contratual.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Em uma crônica jornalística, o autor escreve: \"Os deputados aprovaram o projeto de lei pela manhã. À tarde, assinaram a ata da sessão.\" Qual mecanismo de coesão textual permite recuperar a referência do sujeito da segunda oração sem a sua presença explícita?",
    opcoes: [
      "Elipse gramatical do sujeito, recuperável pelo contexto anafórico.",
      "Catáfora pronominal, antecedendo o termo que surgirá no parágrafo seguinte.",
      "Coesão sequencial por conectivo aditivo implícito na pontuação.",
      "Substituição lexical por sinônimo contextual oculto na oração.",
      "Ambiguidade estrutural provocada por zeugma de um termo verbal.",
    ],
    correta: 0,
    explicacao:
      "A omissão do termo 'Os deputados' na segunda oração caracteriza o recurso de coesão por elipse. O leitor consegue identificar facilmente quem 'assinou a ata' retomando o sujeito expresso na oração anterior (anáfora). A opção por catáfora erra pois não há antecipação de termo futuro. A coesão sequencial aditiva refere-se ao encadeamento de orações por conectores, e não à omissão do sujeito. Não ocorre substituição lexical, pois nenhuma palavra substituta foi empregada. O zeugma refere-se especificamente à omissão de um termo verbal já declarado, o que não é o caso do sujeito omitido.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Considere a seguinte frase extraída de um manual de conduta: \"É dever do colaborador respeitar os horários, zelar pelos equipamentos e que não faça uso de redes sociais para fins pessoais.\" Qual reescrita corrige o problema de paralelismo sintático e garante a coesão da enumeração?",
    opcoes: [
      "É dever do colaborador respeitar os horários, zelar pelos equipamentos e evitar o uso de redes sociais para fins pessoais.",
      "É dever do colaborador respeitar os horários, o zelo pelos equipamentos e não usar redes sociais para fins pessoais.",
      "É dever do colaborador que respeite os horários, zelar pelos equipamentos e não faça uso de redes sociais para fins pessoais.",
      "É dever do colaborador o respeito aos horários, zelar pelos equipamentos e o não uso de redes sociais para fins pessoais.",
      "É dever do colaborador respeitar os horários, zelar pelos equipamentos e de não usar redes sociais para fins pessoais.",
    ],
    correta: 0,
    explicacao:
      "O paralelismo sintático exige que elementos com a mesma função sintática numa enumeração mantenham a mesma estrutura gramatical. Na frase original, há dois verbos no infinitivo ('respeitar', 'zelar') seguidos de uma oração subordinada ('que não faça'). A correção adequada mantém a estrutura com três verbos no infinitivo: 'respeitar', 'zelar' e 'evitar'. A opção que insere 'o zelo' mistura substantivo com infinitivos. A opção que usa 'que respeite' mistura oração desenvolvida com infinitivo. A opção com 'o respeito' e 'o não uso' quebra a simetria ao manter 'zelar' no meio. A opção que insere a preposição 'de' quebra o paralelismo sintático direto dos verbos regidos pela expressão antecedente.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Durante uma exposição presencial, um palestrante aponta para um gráfico projetado na parede e diz: \"Aquele gráfico demonstra a variação das vendas no trimestre. No entanto, este relatório que tenho em mãos apresenta dados divergentes.\" Quanto ao valor coesivo dos pronomes demonstrativos destacados na situação comunicativa, assinale a análise correta.",
    opcoes: [
      "Ambos possuem uso exofórico (dêitico): \"aquele\" indica um objeto distante do falante e \"este\" indica um objeto em posse do falante.",
      "Ambos possuem uso anafórico puro, pois se referem exclusivamente a conceitos abstratos citados no discurso oral prévio.",
      "\"Aquele\" é catafórico por antecipar o tema da palestra, enquanto \"este\" é endofórico restritivo de lugar.",
      "\"Aquele\" é um recurso de coesão sequencial de causa, enquanto \"este\" atua como conector de oposição semântica.",
      "\"Aquele\" refere-se a um tempo passado distante e \"este\" refere-se a um tempo futuro imediato na fala.",
    ],
    correta: 0,
    explicacao:
      "A exófora ou dêixis ocorre quando os pronomes se referem a elementos do espaço físico em que se realiza o ato de fala. O pronome 'aquele' indica proximidade do ouvinte ou distância do falante (a parede), e 'este' refere-se ao objeto em posse ou muito próximo do próprio falante (em mãos). A alternativa sobre anáfora pura erra ao ignorar o contexto físico situacional de referência. A opção que fala em catáfora e endofórica restritiva classifica incorretamente a relação de indicação espacial. A opção que atribui valor de causa ou oposição aos demonstrativos confunde pronomes com conectores lógicos. Por fim, a opção de referência temporal erra ao desconsiderar que os pronomes foram usados com função de localização espacial dos objetos citados.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Observe os dois fatos a seguir: I. A tempestade provocou o desabamento do teto do galpão. II. As atividades produtivas foram suspensas por três dias. Qual das opções unifica as duas orações em um único período mantendo a relação lógica de causa e consequência por meio do uso adequado da coesão sequencial?",
    opcoes: [
      "A tempestade provocou o desabamento do teto do galpão, de modo que as atividades produtivas foram suspensas por três dias.",
      "As atividades produtivas foram suspensas por três dias, de sorte que a tempestade provocou o desabamento do teto do galpão.",
      "A tempestade provocou o desabamento do teto do galpão, conquanto as atividades produtivas fossem suspensas por três dias.",
      "Como as atividades produtivas foram suspensas por três dias, a tempestade provocou o desabamento do teto do galpão.",
      "A tempestade provocou o desabamento do teto do galpão, não obstante as atividades produtivas terem sido suspensas por três dias.",
    ],
    correta: 0,
    explicacao:
      "O desabamento do teto é a causa e a suspensão das atividades é a consequência direta desse fato. A locução 'de modo que' é um conector consecutiva que liga corretamente a oração principal de causa à sua consequência. As opções que iniciam com a suspensão das atividades e colocam a tempestade como consequência invertem a lógica dos fatos. A opção com 'conquanto' insere um sentido concessivo (oposição) incoerente com o fato. A opção com 'não obstante' também expressa concessão, anulando o vínculo causal direto entre os acontecimentos descritos.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Considere o seguinte trecho adaptado de um relatório empresarial: \"O relatório técnico destacava o seguinte: a modernização dos equipamentos reduzirá custos operacionais. Esta constatação levou a diretoria a aprovar os investimentos.\" Qual é a função coesiva desempenhada, respectivamente, pelos pronomes \"seguinte\" e \"Esta\" no trecho?",
    opcoes: [
      "Catáfora e anáfora.",
      "Anáfora e catáfora.",
      "Anáfora e anáfora.",
      "Catáfora e catáfora.",
      "Elipse e anáfora.",
    ],
    correta: 0,
    explicacao:
      "A alternativa correta é Catáfora e anáfora. No trecho dado, o pronome \"seguinte\" funciona como um mecanismo catafórico, pois projeta a atenção do leitor para uma informação que ainda será apresentada a seguir (\"a modernização dos equipamentos reduzirá custos operacionais\"). Por outro lado, o pronome demonstrativo \"Esta\" atua como anáfora, resgatando e sintetizando todo o conteúdo da declaração anterior para dar continuidade ao texto. A opção anáfora e catáfora inverte a ordem das funções dos dois termos. As alternativas que apontam ambas como anáforas ou ambas como catáforas falham em perceber a dupla direção referencial (uma para frente e outra para trás). Já a menção à elipse é incorreta porque não há omissão subentendida de termos nessa relação referencial específica.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Analise o fragmento textual a seguir: \"A empresa investiu pesadamente em treinamento de pessoal nos últimos anos. No entanto, os índices de produtividade mantiveram-se estagnados.\" Mantendo-se a coerência e a relação semântica original do trecho, qual substituição para o termo \"No entanto\" preserva a correção gramatical e o sentido de oposição?",
    opcoes: [
      "Porquanto",
      "Todavia",
      "Conquanto",
      "Por conseguinte",
      "Contanto que",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta é Todavia. O termo \"No entanto\" é uma conjunção adversativa que estabelece uma relação de oposição entre o investimento em treinamento e a estagnação da produtividade. A palavra \"Todavia\" pertence à mesma classe semântica das conjunções adversativas e preserva a estrutura sintática sem alterar o modo verbal. O termo \"Porquanto\" é causal ou explicativo, o que alteraria completamente o nexo lógico. \"Conquanto\" possui valor concessivo e exige a flexão do verbo para o modo subjuntivo (\"mantivessem-se\"), tornando a substituição direta gramaticalmente incorreta. \"Por conseguinte\" introduz uma conclusão, enquanto \"Contanto que\" expressa uma condição, ambas alterando a semântica opositiva do enunciado original.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Leia o excerto a seguir: \"A proliferação de mosquitos no verão preocupa as autoridades de saúde pública. Para combater esses insetos, campanhas de conscientização foram intensificadas nos bairros afetados.\" No trecho apresentado, que recurso de coesão léxica foi utilizado ao empregar a palavra \"insetos\" para se referir a \"mosquitos\"?",
    opcoes: [
      "Hiponímia",
      "Hiperonímia",
      "Antonímia",
      "Catáfora pronominal",
      "Metáfora",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta é Hiperonímia. No contexto da coesão léxica, \"insetos\" é um termo de sentido mais amplo e genérico que inclui a classe à qual pertencem os \"mosquitos\". Esse uso de um conceito geral para retomar um termo específico anterior caracteriza a hiperonímia. A hiponímia ocorre no sentido inverso, ou seja, se a palavra específica \"mosquito\" fosse usada para substituir a palavra geral \"inseto\". A antonímia envolve palavras de sentidos opostos, o que não se aplica aqui. A catáfora pronominal é um recurso gramatical feito por pronomes que antecipam elementos, e não por substantivos genéricos. Por fim, não há metáfora, pois \"inseto\" é a classificação biológica real e literal de mosquito.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Examine a seguinte construção frasal: \"Como o candidato estudou com extrema dedicação durante meses, ele não conseguiu alcançar a nota mínima exigida para a aprovação no exame.\" Para corrigir o vício de coerência lógico-semântica da frase sem alterar a oração principal, qual conectivo deve substituir a conjunção \"Como\"?",
    opcoes: [
      "Visto que",
      "Embora",
      "Como",
      "Assim que",
      "Conforme",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta é Embora. A oração \"Como o candidato estudou com extrema dedicação...\" utiliza uma conjunção causal que gera incoerência lógica, pois estudar muito deveria levar à aprovação, e não à reprovação. Para manter a oração principal intacta e ajustar a coerência, deve-se usar a conjunção concessiva \"Embora\" (ajustando o verbo: \"Embora o candidato tenha estudado...\"), indicando que um fato real não foi suficiente para impedir o resultado adverso. Manter \"Visto que\" ou \"Como\" insiste no erro de apresentar o estudo dedicado como causa da reprovação. \"Assim que\" introduz uma relação puramente temporal, que não resolve a contradição entre dedicação e reprovação. \"Conforme\" expressa conformidade, o que agravaria o absurdo lógico do período.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Considere o período a seguir: \"O diretor da autarquia reuniu-se com o chefe do setor financeiro para discutir as novas metas orçamentárias. Ele solicitou a revisão imediata do parecer técnico.\" Por que o uso do pronome \"Ele\" no segundo período gera um problema de coesão referencial no contexto da frase?",
    opcoes: [
      "Incorre em erro gramatical por exigir pronome oblíquo reflexivo em vez de reto.",
      "Provoca ambiguidade por haver dois núcleos masculinos singulares gramaticalmente aptos a ser a referência.",
      "Apresenta catáfora indevida sem elemento antecedente no texto.",
      "Quebra a coesão sequencial por omitir a conjunção subordinativa necessária.",
      "Promove hiponímia inadequada entre os cargos administrativos citados.",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta é Provoca ambiguidade por haver dois núcleos masculinos singulares gramaticalmente aptos a ser a referência. O pronome de terceira pessoa \"Ele\" é anafórico, mas no primeiro período existem dois substantivos masculinos no singular (\"o diretor\" e \"o chefe\"). Sem uma especificação contextual, o leitor não pode determinar com certeza quem fez a solicitação da revisão do parecer. A hipótese de erro por exigência de pronome reflexivo é falsa, pois a ação de solicitar algo não recai sobre o próprio sujeito. Não se trata de catáfora, pois o pronome está tentando retomar um elemento anterior, e não antecipar um posterior. Não há quebra de coesão sequencial por conjunção, nem relação de hiponímia entre termos, visto que a falha é estritamente de ambiguidade referencial pronominal.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Considere a relação lógica no trecho: \"A taxa de inflação subiu vertiginosamente no último trimestre. Diante disso, o Banco Central optou por elevar a taxa básica de juros para conter o consumo.\" Qual conectivo pode substituir a expressão \"Diante disso\", mantendo a relação de consequência e a coerência entre as ideias descritas?",
    opcoes: [
      "A despeito disso",
      "Por conseguinte",
      "Não obstante",
      "Ao passo que",
      "Posto que",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta é Por conseguinte. A locução \"Diante disso\" funciona como um elemento de coesão sequencial com valor conclusivo/consecutivo, ligando a causa (alta da inflação) à sua consequência direta (elevação dos juros pelo Banco Central). O termo \"Por conseguinte\" possui exatamente o mesmo valor consecutivo/conclusivo e mantém a relação lógica entre as orações. A locução \"A despeito disso\" e a expressão \"Não obstante\" possuem valor concessivo, o que inverteria a lógica de causa e efeito do texto. \"Ao passo que\" estabelece uma relação de proporcionalidade ou simultaneidade contrastante. \"Posto que\" tem valor predominantemente concessivo ou causal, não se prestando a introduzir a consequência no padrão frasal estabelecido.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "No trecho \"Os auditores analisaram as planilhas financeiras pela manhã e [ Ø ] identificaram diversas inconsistências contábeis no balanço final\", ocorre a omissão de um termo gramatical já expresso anterior ao verbo identificaram. Qual mecanismo de coesão textual está empregado no espaço indicado por [ Ø ]?",
    opcoes: [
      "Catáfora nominal",
      "Coesão por substituição sinonímica",
      "Elipse do sujeito",
      "Hiperonímia",
      "Anáfora pronominal explícita",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta é Elipse do sujeito. O trecho omite o pronome ou substantivo sujeito na segunda oração (\"[eles] identificaram...\"), aproveitando a referência já apresentada na primeira oração (\"Os auditores\"). Essa omissão subentendida de um termo identificável pelo contexto caracteriza a elipse. A catáfora nominal faria a antecipação de um termo por meio de um substantivo, o que não ocorre no espaço omitido. A coesão por substituição sinonímica exigiria a troca de \"auditores\" por outro substantivo equivalente (como \"os peritos\"). A hiperonímia também envolve a troca por um termo de sentido mais amplo. A anáfora pronominal explícita exigiria a presença física do pronome \"eles\" escrito na frase, o que contraria a omissão do termo.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Examine a passagem a seguir: \"O desmatamento ilegal avançou sobre áreas de preservação, a contaminação dos rios por garimpo aumentou e a caça predatória ameaça espécies nativas. Esse cenário devastador exige intervenção imediata dos órgãos ambientais.\" A expressão \"Esse cenário devastador\" desempenha qual função no desenvolvimento da coesão textual do fragmento?",
    opcoes: [
      "Catáfora antecipatória da causa dos problemas ambientais.",
      "Elipse do núcleo do sujeito na segunda oração.",
      "Anáfora resumitiva ou recapitulativa de um conjunto de fatos apresentados anteriormente.",
      "Coesão sequencial por concessão temática.",
      "Hiperonímia restrita a apenas um dos elementos enunciados.",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta é Anáfora resumitiva ou recapitulativa de um conjunto de fatos apresentados anteriormente. A expressão \"Esse cenário devastador\" sintetiza e retoma em um único sintagma nominal os três problemas ambientais enunciados na frase antecedente (desmatamento, contaminação e caça). A opção por catáfora antecipatória é incorreta porque a expressão não antecipa elementos, mas retoma o que já foi dito. A elipse do núcleo do sujeito não ocorre, pois a expressão apresenta um núcleo explícito (\"cenário\"). Não se trata de coesão sequencial por concessão, pois a locução introduz um resumo demonstrativo e não uma oposição. A hiperonímia restrita falha ao não reconhecer que a expressão engloba a totalidade dos fatos narrados, e não apenas um deles.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Observe o texto a seguir: \"O projeto de lei obteve parecer favorável da comissão de justiça, [...] apresentasse restrições quanto ao impacto orçamentário previsto.\" Para preencher a lacuna garantindo a coerência de concessão e mantendo a correção gramatical da oração no modo subjuntivo (\"apresentasse\"), qual conectivo deve ser empregado?",
    opcoes: [
      "porquanto",
      "visto que",
      "conquanto",
      "portanto",
      "contanto que",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta é conquanto. A conjunção \"conquanto\" possui valor concessivo e rege o verbo no modo subjuntivo (\"apresentasse\"), introduzindo a ideia de que o fato de haver restrições orçamentárias não impediu o parecer favorável. O termo \"porquanto\" é uma conjunção causal/explicativa e não se ajusta ao sentido de oposição concessiva exigido, além de normalmente reger o indicativo. \"Visto que\" é causal e exigiria o modo indicativo (\"apresentava\"). \"Portanto\" tem valor conclusivo, o que tornaria a frase sem sentido lógico e gramaticalmente incoerente. Por fim, \"contanto que\" expressa uma condição (hipótese), alterando o sentido do texto de uma ressalva real (concessão) para uma exigência condicional.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Considere o excerto redigido por um estudante: \"O trânsito nas grandes metrópoles flui com extrema rapidez nos horários de pico, por isso os motoristas gastam cerca de duas a três horas parados em congestionamentos diários.\" O excerto apresenta um problema de coerência textual decorrente de qual falha na construção do sentido?",
    opcoes: [
      "Emprego incorreto de pronome anafórico ao retomar a expressão metrópoles.",
      "Falha de coesão por omissão do conectivo adversativo antes da expressão horários de pico.",
      "Contradição lógica entre a afirmação inicial sobre a fluidez do trânsito e o resultado indicado sobre os congestionamentos.",
      "Presença de catáfora sem a devida explicitação do complemento verbal.",
      "Incompatibilidade gramatical de tempo verbal entre as duas orações principais.",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta é Contradição lógica entre a afirmação inicial sobre a fluidez do trânsito e o resultado indicado sobre os congestionamentos. A coerência textual é quebrada porque a primeira oração afirma que o trânsito flui muito rápido e a segunda, introduzida por um conectivo conclusivo (\"por isso\"), afirma que os motoristas passam horas parados no congestionamento. Essas duas ideias são incompatíveis no plano do sentido real. O problema não é o emprego do pronome anafórico, que sequer é o ponto crítico do enunciado. Também não falta conectivo adversativo antes de \"horários de pico\", nem há catáfora sem complemento. Os tempos verbais (\"flui\" e \"gastam\") estão ambos no presente do indicativo, estando perfeitamente compatíveis no aspecto gramatical.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Em um relatório do serviço público municipal, consta a seguinte frase: 'O diretor convocou os chefes de setor e apresentou-lhes a nova portaria de atendimento, ressaltando que esta entraria em vigor imediatamente.' Considerando o papel dos elementos anafóricos no trecho, a qual termo da frase o pronome oblíquo 'lhes' se refere?",
    opcoes: [
      "O diretor",
      "Os chefes de setor",
      "A nova portaria",
      "O atendimento",
      "O serviço público municipal",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta é 'Os chefes de setor'. Na frase apresentada, o pronome oblíquo 'lhes' atua como complemento indireto do verbo apresentar ('apresentou a alguém'). Ele recupera o termo antecedente 'os chefes de setor' ('apresentou aos chefes de setor'), estabelecendo uma relação de anáfora. A opção 'O diretor' incorre no erro de associar o complemento indireto ao sujeito agente da ação. As opções 'A nova portaria' e 'O atendimento' erram por indicarem seres inanimados e elementos no singular, incompatíveis com a concordância do pronome plural 'lhes'. A alternativa 'O serviço público municipal' erra ao tomar o contexto institucional amplo como complemento verbal, desconsiderando a função sintática de destinatário da apresentação.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Um analista de recursos humanos enviou a seguinte mensagem à equipe: 'Conseguimos bater a meta de contratações do trimestre; [elemento], o orçamento do departamento foi reduzido e precisaremos suspender os novos treinamentos.' Para manter a coerência e estabelecer uma relação semântica de oposição com valor adversativo entre as duas orações, qual conectivo substitui corretamente o termo [elemento]?",
    opcoes: [
      "porquanto",
      "conquanto",
      "contudo",
      "portanto",
      "visto que",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta é 'contudo'. O conectivo 'contudo' é uma conjunção coordenativa adversativa que estabelece uma relação de oposição entre a primeira oração (bater a meta de contratações) e a segunda (redução do orçamento), garantindo a coerência textual. A opção 'porquanto' erra pois apresenta valor causal ou explicativo, o que inverteria a lógica ao tratar o corte de custos como causa de bater a meta. A opção 'conquanto' erra por ser uma conjunção concessiva que exige o verbo no modo subjuntivo, gerando inadequação sintática. A alternativa 'portanto' comete o erro de atribuir valor conclusivo, indicando falsamente que bater a meta resulta na redução orçamentária. A opção 'visto que' erra ao introduzir uma relação de causa, distorcendo o contraste pretendido.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Na correção de uma redação escolar sobre preservação ambiental, o professor destacou a frase: 'Os alunos plantaram mudas de ipê e jequitibá no jardim da escola; essas plantas crescerão nos próximos anos.' Qual recurso de coesão lexical foi empregado pela palavra 'plantas' para evitar a repetição de 'ipê e jequitibá'?",
    opcoes: [
      "Hiponímia",
      "Hiperonímia",
      "Catáfora",
      "Elipse",
      "Antonímia",
    ],
    correta: 1,
    explicacao:
      "A alternativa correta é 'Hiperonímia'. O termo 'plantas' tem sentido mais amplo e genérico, cobrindo espécies específicas como 'ipê' e 'jequitibá', caracterizando a hiperonímia como recurso de coesão lexical por substituição. A opção 'Hiponímia' erra ao inverter o conceito, pois hiponímia é a relação da espécie em relação ao gênero. A opção 'Catáfora' erra por confundir o mecanismo lexical com o recurso referencial de anteceder um termo que ainda será dito. A opção 'Elipse' incorre no erro de indicar a omissão de um termo, quando na verdade houve a escrita explícita da palavra 'plantas'. A alternativa 'Antonímia' erra ao sugerir uma relação semântica de oposição entre os vocábulos.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Um edital de concurso público apresentou o seguinte requisito de inscrição: 'O candidato deve apresentar a documentação completa, realizar o pagamento da taxa de inscrição e que envie o comprovante de residência atualizado.' Para adequar o texto às normas de coesão por paralelismo sintático, qual reescrita corrige a quebra de estrutura observada no trecho final?",
    opcoes: [
      "o envio de comprovante de residência atualizado.",
      "onde se envia o comprovante de residência atualizado.",
      "enviar o comprovante de residência atualizado.",
      "de modo que envie o comprovante de residência atualizado.",
      "visto que enviou o comprovante de residência atualizado.",
    ],
    correta: 2,
    explicacao:
      "A alternativa correta é 'enviar o comprovante de residência atualizado.'. O paralelismo sintático exige a manutenção da mesma estrutura nas orações coordenadas. Como a sequência utiliza verbos no infinitivo ('apresentar', 'realizar'), o terceiro elemento também deve usar a forma nominal do infinitivo ('enviar'). A opção 'o envio de comprovante...' erra por alternar a estrutura verbal para uma estrutura nominal, quebrando a simetria. A opção 'onde se envia...' erra ao empregar indevidamente o pronome relativo 'onde' para uma situação que não indica local físico. As opções 'de modo que envie...' e 'visto que enviou...' cometem o erro de substituir a estrutura do infinitivo por orações subordinadas, violando o paralelismo sintático e alterando o valor coordenativo da enumeração.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Um boletim informativo de um bairro apresentou a seguinte frase: 'A reforma da praça foi finalizada antes do prazo e o espaço ganhou nova iluminação; por isso, a população evitou frequentar o local, uma vez que se sentia muito mais segura para caminhar à noite.' Qual modificação corrige a incoerência semântica entre a justificativa dada ('sentia muito mais segura') e o comportamento da população?",
    opcoes: [
      "Substituir 'por isso' por 'embora'.",
      "Substituir 'antes do prazo' por 'após o prazo'.",
      "Substituir 'muito mais segura' por 'menos segura'.",
      "Substituir 'evitou frequentar' por 'passou a frequentar'.",
      "Substituir 'uma vez que' por 'no entanto'.",
    ],
    correta: 3,
    explicacao:
      "A alternativa correta é 'Substituir \"evitou frequentar\" por \"passou a frequentar\".'. O texto apresenta uma incoerência pragmática: se a praça foi reformada e a iluminação trouxe maior segurança, a consequência lógica é o uso do espaço pela população. Substituir a conduta por 'passou a frequentar' restaura o nexo causal do parágrafo. A opção 'Substituir \"por isso\" por \"embora\"' erra por gerar inadequação gramatical e não resolver a contradição entre segurança e afastamento. A opção 'Substituir \"antes do prazo\" por \"após o prazo\"' erra por alterar um detalhe temporal sem impacto na incoerência do comportamento populacional. A opção 'Substituir \"muito mais segura\" por \"menos segura\"' comete o erro de contradizer o benefício da nova iluminação instalada. A alternativa 'Substituir \"uma vez que\" por \"no entanto\"' erra ao destruir o nexo explicativo da frase.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Em um parecer técnico, o engenheiro escreveu: 'Analisamos as propostas da Empresa A e da Empresa B. Esta apresentou o menor custo de execução, enquanto aquela destacou-se pela qualidade dos materiais.' Considerando o emprego dos pronomes demonstrativos para coesão anafórica, a qual empresa se refere o pronome 'Esta'?",
    opcoes: [
      "À Empresa A, por ser a primeira a ser mencionada.",
      "A ambas as empresas simultaneamente.",
      "A uma terceira empresa não citada anteriormente.",
      "À Empresa B, por ser o elemento mais próximo no texto.",
      "À Empresa A, por possuir maior relevância no contexto.",
    ],
    correta: 3,
    explicacao:
      "A alternativa correta é 'À Empresa B, por ser o elemento mais próximo no texto.'. Na coesão anafórica com pronomes demonstrativos, 'este/esta' refere-se ao elemento antecedente mais próximo no texto (Empresa B), enquanto 'aquele/aquela' recupera o elemento mais distante (Empresa A). A opção que indica a Empresa A como referência de 'Esta' erra por inverter a regra gramatical da distância anafórica. A opção que menciona 'ambas as empresas' erra ao atribuir valor plural a um demonstrativo singular. A opção que cita uma 'terceira empresa' comete o erro de supor uma referência exofórica sem suporte no texto. A alternativa que justifica a escolha por 'maior relevância' erra ao substituir a regra de proximidade sintático-textual por um critério subjetivo de importância.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Em uma negociação comercial entre duas empresas, o gerente enviou a seguinte mensagem: 'Manteremos a tabela de preços do contrato anterior, [conectivo] ocorra um aumento imprevisto no custo da matéria-prima nos próximos meses.' Para estabelecer uma relação de condição (hipótese) entre as orações, qual elemento coesivo preenche adequadamente a lacuna?",
    opcoes: [
      "ainda que",
      "visto que",
      "posto que",
      "a menos que",
      "à medida que",
    ],
    correta: 3,
    explicacao:
      "A alternativa correta é 'a menos que'. A locução conjuntiva 'a menos que' estabelece uma relação de condição com valor negativo ('exceto se'), indicando a hipótese em que a tabela de preços não será mantida. A opção 'ainda que' erra por possuir valor concessivo, sugerindo que o aumento do custo não impediria a manutenção do preço de forma inadequada. A opção 'visto que' incorre no erro de introduzir uma causa consumada em vez de uma hipótese. A alternativa 'posto que' erra ao empregar uma conjunção de valor concessivo ou causal em um contexto estritamente condicional. A opção 'à medida que' erra ao usar uma locução proporcional, transmitindo a ideia equivocada de variação gradual concomitante em vez de uma condição limite.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Em um artigo acadêmico produzido por um universitário, lê-se o seguinte parágrafo: 'O pesquisador coletou as amostras de água na represa. O pesquisador analisou as amostras de água no laboratório. O pesquisador concluiu o relatório.' Para eliminar a redundância e conferir fluidez ao texto por meio de elementos de coesão, qual reescrita mantém o sentido original e a correção gramatical?",
    opcoes: [
      "O pesquisador coletou as amostras de água na represa, onde analisou as mesmas no laboratório e concluiu o relatório.",
      "O pesquisador coletou as amostras de água na represa, porque analisou no laboratório e concluiu o relatório.",
      "O pesquisador coletou as amostras de água na represa, visto que o mesmo analisou elas no laboratório e concluiu o relatório.",
      "O pesquisador coletou as amostras de água na represa, analisou-as no laboratório e concluiu o relatório.",
      "O pesquisador coletou as amostras de água na represa, contudo analisou o relatório no laboratório.",
    ],
    correta: 3,
    explicacao:
      "A alternativa correta é 'O pesquisador coletou as amostras de água na represa, analisou-as no laboratório e concluiu o relatório.'. Esta reescrita elimina a redundância do sujeito por meio da elipse e substitui o substantivo repetido pelo pronome anafórico oblíquo '-as', garantindo concisão e coesão. A opção que utiliza 'as mesmas' erra ao empregar o demonstrativo como pronome pessoal anafórico, o que é condenado pela norma-padrão. A opção que insere 'porque' erra ao criar uma relação de causa sem sentido entre coletar e analisar. A opção com 'visto que o mesmo analisou elas' erra por acumular a impropriedade de 'o mesmo' com o uso do pronome reto 'elas' como objeto direto. A opção com 'contudo' erra ao introduzir uma relação de oposição onde há apenas uma sequência de ações.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Um manual de procedimentos de uma repartição pública contém o seguinte trecho: 'O servidor entregou o processo ao chefe de seção logo após sua assinatura.' A redação apresenta um problema de ambiguidade que prejudica a clareza da coesão referencial. Qual reescrita elimina completamente a dúvida sobre quem assinou o documento?",
    opcoes: [
      "O servidor entregou o processo ao chefe de seção logo após a sua própria assinatura do documento.",
      "Logo após sua assinatura, o servidor fez a entrega do processo ao chefe de seção.",
      "O servidor entregou o processo ao chefe de seção, o qual estava assinado por sua pessoa.",
      "O servidor entregou o processo ao chefe de seção logo após este ter assinado o documento.",
      "O processo foi entregue pelo servidor ao chefe de seção depois de sua respectiva assinatura.",
    ],
    correta: 3,
    explicacao:
      "A alternativa correta é 'O servidor entregou o processo ao chefe de seção logo após este ter assinado o documento.'. O pronome demonstrativo 'este' retoma de forma inequívoca o termo imediatamente anterior ('chefe de seção'), eliminando a ambiguidade do possessivo 'sua'. A opção com 'sua própria' erra por manter a indeterminação, já que a expressão pode se referir tanto ao servidor quanto ao chefe. A opção que antecipa 'Logo após sua assinatura' erra pois o deslocamento sintático não resolve a dúvida sobre quem assinou. A opção com 'o qual estava assinado por sua pessoa' erra ao manter a ambiguidade referencial do possessivo sob uma redação prolixa. A opção com 'sua respectiva' comete o erro de manter o pronome de terceira pessoa sem explicitar a qual dos dois nomes se refere.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Em um artigo de opinião sobre mobilidade urbana, um colunista escreveu: 'A implementação de faixas exclusivas para ônibus é a solução mais eficiente para reduzir o tempo de deslocamento na capital. Diante disso, é imprescindível proibir a circulação de transporte coletivo nessas vias para garantir a rapidez dos trajetos.' O texto apresenta uma falha que compromete a sua coerência. Onde reside essa falha de coerência?",
    opcoes: [
      "No uso da expressão 'Diante disso', que estabelece uma relação de causa e efeito gramaticalmente incorreta.",
      "Na substituição do termo 'ônibus' pelo hiperônimo 'transporte coletivo' na segunda frase.",
      "Na falta de paralelismo sintático entre os verbos 'reduzir' e 'garantir' ao longo do parágrafo.",
      "Na contradição entre defender faixas exclusivas para ônibus e propor a proibição da circulação de transporte coletivo nelas.",
      "Na ausência de um conectivo adversativo que ligasse a eficiência das faixas ao tempo de deslocamento.",
    ],
    correta: 3,
    explicacao:
      "A alternativa correta é 'Na contradição entre defender faixas exclusivas para ônibus e propor a proibição da circulação de transporte coletivo nelas.'. A incoerência reside na oposição direta de ideias: defender uma via exclusiva para determinado modal e propor banir esse mesmo modal dessa via desfaz a coerência global do texto. A opção que aponta erro em 'Diante disso' erra porque a expressão coesiva está empregada corretamente do ponto de vista sintático. A opção que critica o hiperônimo 'transporte coletivo' erra pois a substituição lexical é perfeitamente válida no texto. A opção que aponta falta de paralelismo erra porque a estrutura dos verbos 'reduzir' e 'garantir' é simétrica. A opção que sugere a necessidade de um conectivo adversativo erra por focar na estrutura conjuntiva quando a falha é de coerência temática e argumentativa.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Considere a frase: \"Todos os funcionários sabiam disto: a empresa passaria por uma grande reestruturação no próximo mês.\" No texto, a palavra \"disto\" antecipa uma informação que é explicitada logo em seguida. Qual mecanismo de coesão referencial é responsável por essa antecipação do sentido no texto?",
    opcoes: [
      "Anáfora, pois o pronome retoma um termo previamente apresentado no contexto fraseológico.",
      "Catafora, pois o termo refere-se a um elemento que ainda será mencionado no discurso.",
      "Elipse, pois ocorre a omissão deliberada de um termo subentendido no contexto.",
      "Reiteração por hiperonímia, pois substitui um conceito específico por um termo genérico.",
      "Coesão sequencial adversativa, pois estabelece um contraponto entre duas ideias distintas.",
    ],
    correta: 1,
    explicacao:
      "A catafora é o mecanismo de coesão referencial em que um termo antecipa o sentido de uma informação que ainda será expressa no texto. No enunciado, o pronome \"disto\" aponta para a oração seguinte (\"a empresa passaria por uma grande reestruturação...\"), caracterizando perfeitamente o recurso catafórico. A alternativa referente à anáfora erra ao confundir a antecipação com a retomada de algo já dito. A alternativa que menciona a elipse erra ao associar o fenômeno à omissão de termos, o que não ocorre com o pronome presente. A opção sobre hiperonímia confunde coesão referencial pronominal com substituição lexical por termos genéricos. Por fim, a alternativa sobre coesão sequencial adversativa erra ao classificar um pronome demonstrativo como conectivo de oposição.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Em uma redação argumentativa, o autor escreveu: \"O investimento em energia renovável cresceu nos últimos anos; contudo, a dependência dos combustíveis fósseis ainda é elevada no país.\" Qual é a relação semântico-pragmática estabelecida pelo elemento coesivo \"contudo\" entre as orações?",
    opcoes: [
      "Adição de ideias com sentido equivalente ao longo do parágrafo.",
      "Conclusão decorrente de uma premissa logicamente construída no texto.",
      "Explicação sobre a razão de a dependência energética continuar elevada.",
      "Oposição de ideias com ressalva contra uma expectativa criada anteriormente.",
      "Condição necessária para o crescimento constante da energia renovável.",
    ],
    correta: 3,
    explicacao:
      "O conectivo \"contudo\" é uma conjunção coordenativa adversativa que estabelece uma relação de oposição entre a premissa de crescimento de energia renovável e o fato de a dependência de combustíveis fósseis ainda ser alta, introduzindo uma quebra de expectativa. A alternativa que aponta adição confunde a relação adversativa com a aditiva (como \"e\", \"além disso\"). A opção que indica conclusão erra ao atribuir valor conclusivo (próprio de \"portanto\"). A opção sobre explicação confunde adversidade com relação explicativa ou causal (como \"pois\" ou \"porque\"). A alternativa que menciona condição confunde a oposição com uma relação hipotética dependente de termos como \"se\" ou \"caso\".",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Considere o trecho: \"A febre amarela e a dengue continuam preocupando as autoridades de saúde pública no Brasil. Essas enfermidades, transmitidas por vetores, exigem campanhas constantes de conscientização da população.\" No trecho, a expressão \"Essas enfermidades\" retoma \"A febre amarela e a dengue\". Qual recurso de coesão lexical é empregado nessa retomada?",
    opcoes: [
      "Hiponímia, pois substitui termos genéricos por palavras de sentido mais restrito e específico.",
      "Antonímia, pois estabelece uma relação de contraste conceitual entre as doenças citadas.",
      "Hiperonímia, pois emprega um termo de sentido mais abrangente para retomar conceitos mais específicos.",
      "Metonímia, pois troca a causa pelo efeito na organização do pensamento crítico.",
      "Catafora lexical, pois antecipa um conceito que só será plenamente explicado no parágrafo seguinte.",
    ],
    correta: 2,
    explicacao:
      "A hiperonímia ocorre quando se utiliza uma palavra de sentido mais amplo e genérico (\"enfermidades\") para retomar termos de sentido mais específico (\"febre amarela\" e \"dengue\"), garantindo a coesão lexical sem repetição desnecessária. A alternativa que menciona hiponímia inverte o conceito, pois hipônimo é o termo de sentido restrito. A opção referente à antonímia erra ao pressupor uma relação de oposição de sentidos entre as palavras. A opção sobre metonímia confunde a substituição de hiperônimo/hipônimo com a troca da parte pelo todo ou causa pelo efeito. A alternativa sobre catafora lexical erra ao classificar como antecipação uma expressão que claramente retoma termos já citados (anáfora).",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Analise a frase a seguir: \"Apesar de ter estudado intensamente durante todo o ano, o candidato foi aprovado em primeiro lugar no concurso público mais concorrido do estado.\" Do ponto de vista da coerência textual, qual problema de articulação de sentido essa frase apresenta?",
    opcoes: [
      "Ausência de coesão referencial, pois não há conectivos adequados para unir a primeira oração à segunda.",
      "Erro de coesão por elipse indevida, visto que o sujeito \"o candidato\" deveria estar explícito na primeira oração.",
      "Incoerência semântica por redundância, pois estudar intensamente e ser aprovado são expressões que possuem o mesmo significado.",
      "Problema de ambiguidade lexical, pois a palavra \"concorrido\" possui duplo sentido no contexto apresentado.",
      "Quebra de coerência por incoerência pragmática, pois o uso de \"Apesar de\" estabelece uma expectativa de insucesso que entra em contradição lógica com o resultado de aprovação.",
    ],
    correta: 4,
    explicacao:
      "O uso da locução concessiva \"Apesar de\" introduz um obstáculo que não deveria ser suficiente para impedir a ação principal. Contudo, \"estudar intensamente\" é uma causa/preparação esperada para a aprovação em primeiro lugar, e não um obstáculo a ela. Assim, gera-se uma incoerência pragmática e lógica, pois estabelece-se um contraste onde deveria haver convergência de expectativas. A opção sobre ausência de coesão referencial erra porque há conectivos sintaticamente articulados. A alternativa que aponta elipse indevida erra pois a oração reduzida de infinitivo compartilha perfeitamente o sujeito. A opção de redundância erra ao dizer que estudar e passar têm o mesmo significado. A opção de ambiguidade confunde lógica discursiva com duplo sentido lexical.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Observe o trecho extraído de um relatório técnico: \"A empresa apresentou os projetos de sustentabilidade dos quais os diretores haviam discordado no início do semestre.\" Qual função coesiva a expressão \"dos quais\" desempenha no texto e por que a preposição \"de\" foi empregada?",
    opcoes: [
      "Exerce coesão sequencial conclusiva, e a preposição \"de\" é exigida pelo substantivo \"projetos\".",
      "Exerce coesão referencial anafórica, retoma \"projetos de sustentabilidade\" e a preposição \"de\" atende à regência do verbo \"discordar\".",
      "Exerce coesão catafórica, antecipa a fala dos \"diretores\" e a preposição \"de\" é opcional na norma-padrão.",
      "Exerce coesão por elipse, omitindo a palavra \"sustentabilidade\" e a preposição \"de\" introduz um complemento nominal de \"início\".",
      "Exerce coesão sequencial explicativa, introduz uma oração coordenada e a preposição \"de\" atende à regência de \"apresentou\".",
    ],
    correta: 1,
    explicacao:
      "A expressão \"dos quais\" desempenha coesão referencial anafórica, pois o pronome relativo \"quais\" retoma o antecedente \"projetos de sustentabilidade\". A preposição \"de\" é regida obrigatoriamente pelo verbo \"discordar\" (quem discorda, discorda DE algo). A opção sobre coesão sequencial conclusiva confunde pronome relativo antecedido de preposição com conectivo conclusivo. A opção que menciona catafora erra ao dizer que o pronome antecipa \"diretores\", quando na verdade retoma \"projetos\". A opção referente à elipse erra ao diagnosticar omissão gramatical onde há subordinação adjetiva explícita. A alternativa sobre coesão explicativa erra ao classificar a regência verbal como pertencente ao verbo \"apresentar\" ou à coordenação.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Em um debate, o palestrante afirmou: \"O projeto de reforma urbanística é arrojado, embora exija alto investimento financeiro.\" Se a palavra \"embora\" for substituída por \"portanto\", mantendo-se a correção gramatical com os devidos ajustes, o que ocorre com a articulação de sentido e a coerência do enunciado?",
    opcoes: [
      "A relação de concessão original é mantida, pois ambos os conectivos pertencem à mesma classe gramatical de conjunções subalternas.",
      "O texto passa a ter sentido explicativo, indicando a razão pela qual o projeto é considerado arrojado pelas autoridades.",
      "A relação de oposição com ressalva é alterada para uma relação de conclusão ilógica, ferindo a coerência entre ser arrojado e exigir investimento como causa e consequência direta sem contexto complementar.",
      "A coesão referencial é destruída, pois o conectivo \"portanto\" exige obrigatoriamente a repetição do sujeito \"o projeto\" na segunda oração.",
      "O sentido da frase transforma-se em uma condição hipotética, tornando o investimento financeiro um evento incerto.",
    ],
    correta: 2,
    explicacao:
      "O conectivo \"embora\" introduz uma oração subordinada concessiva, indicando um contraste atenuado entre o caráter arrojado do projeto e seu custo alto. Ao substituir por \"portanto\", que é um conectivo conclusivo, afirma-se ilogicamente que o fato de ser arrojado gera como conclusão direta a exigência de alto investimento, alterando radicalmente a relação lógico-semântica e gerando incoerência na articulação proposta sem reestruturar o contexto. A alternativa que afirma manutenção da concessão erra ao equiparar conectivos de valores opostos. A opção explicativa confunde conclusão com explicação. A opção sobre coesão referencial erra ao afirmar que \"portanto\" altera a referência pronominal. A alternativa sobre condição confunde conclusão com hipótese.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "No trecho: \"O primeiro grupo de pesquisadores analisou as amostras de solo; o segundo, as de água doce.\", que recurso de coesão textual foi utilizado para evitar a repetição desnecessária do verbo \"analisou\" na segunda oração?",
    opcoes: [
      "Catafora, que consiste na omissão de um termo que ainda será apresentado no encerramento da frase.",
      "Hiperonímia, que consiste na substituição de um verbo por um substantivo de sentido mais amplo.",
      "Paráfrase, que consiste na reescrita completa do trecho mantendo o mesmo sentido original.",
      "Elipse (especificamente zeugma), que consiste na omissão de um termo já exposto anteriormente no texto.",
      "Nominalização, que consiste na transformação de uma oração verbal em um sintagma nominal equivalente.",
    ],
    correta: 3,
    explicacao:
      "A zeugma é um tipo específico de elipse que consiste na omissão de um termo (no caso, o verbo \"analisou\") que já foi expresso anteriormente no mesmo período (\"O primeiro grupo... analisou...; o segundo [analisou]...\"). A alternativa sobre catafora erra ao afirmar que o termo omitido estaria no encerramento, visto que o verbo omitido já havia aparecido antes. A opção de hiperonímia confunde uma omissão sintática com uma substituição por palavra de sentido amplo. A opção de paráfrase erra porque não houve reescrita do texto com outras palavras. A alternativa sobre nominalização confunde a supressão do verbo com a conversão de uma estrutura verbal em substantivo.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Um parecerista escreveu o seguinte parágrafo em sua avaliação: \"A implantação do novo sistema de gestão trouxe ganhos expressivos de produtividade para a empresa, reduzindo falhas humanas e otimizando o tempo das equipes. Dessa forma, é evidente que o sistema causou prejuízos incalculáveis à rotina operacional do escritório.\" Que falha de coerência textual compromete a sustentação argumentativa desse parágrafo?",
    opcoes: [
      "Falha de coesão lexical, dada a repetição excessiva da palavra 'sistema' no mesmo período curto.",
      "Incoerência pragmática decorrente da falta de alinhamento com a situação comunicativa formal exigida em pareceres.",
      "Contradição interna, pois a conclusão deduzida pelo operador 'Dessa forma' afirma a ocorrência de prejuízos, negando as premissas prévias de ganhos e otimização.",
      "Vício de linguagem por pleonasmo, já que as expressões 'ganhos expressivos' e 'produtividade' possuem exatamente o mesmo significado.",
      "Ambiguidade estrutural provocada pelo uso inadequado do particípio 'otimizando' na oração reduzida.",
    ],
    correta: 2,
    explicacao:
      "A incoerência do parágrafo decorre de uma contradição lógica interna: as premissas apresentadas na primeira frase apontam apenas aspectos positivos (\"ganhos expressivos\", \"reduzindo falhas\", \"otimizando o tempo\"), enquanto a conclusão introduzida por \"Dessa forma\" afirma que houve \"prejuízos incalculáveis\". O operador conclusivo exige que a conclusão seja coerente com o que foi exposto. A opção sobre coesão lexical erra ao focar na repetição da palavra \"sistema\", o que não é o problema principal de sentido. A alternativa de incoerência pragmática erra ao atribuir o erro ao nível de formalidade. A opção de pleonasmo erra pois não há redundância viciosa nas expressões citadas. A opção de ambiguidade erra ao culpar o particípio.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Considere os dois enunciados a seguir: I. \"O candidato trabalhou bastante, mas não obteve a aprovação desejada.\" II. \"Embora o candidato tenha trabalhado bastante, não obteve a aprovação desejada.\" Embora ambos apresentem a ideia de oposição entre o esforço e o resultado, do ponto de vista do direcionamento argumentativo e da coesão sequencial, qual é a diferença fundamental no uso de \"mas\" (coordenativa adversativa) e \"embora\" (subordinativa concessiva)?",
    opcoes: [
      "Em I, estabelece-se uma relação de causa e efeito perfeita, enquanto em II a relação passa a ser estritamente temporal sem valor contra-expectativo.",
      "Em I, o conectivo 'mas' altera a coesão referencial do pronome 'candidato', enquanto em II o conectivo 'Embora' elimina o sujeito da oração subordinada.",
      "Em I, o argumento principal é a dedicação do candidato, ao passo que em II o argumento principal passa a ser a falta de estudo prévio do concorrente.",
      "Em I, a oração introduzida por 'mas' contém o argumento de maior força orientando a conclusão; em II, a oração principal ('não obteve a aprovação desejada') guarda o foco argumentativo dominante, mantendo o contraste mas subordinando a concessão.",
      "Ambos os enunciados possuem exatamente a mesma estrutura sintático-semântico-pragmática, não havendo qualquer alteração na hierarquia das informações ou na força argumentativa.",
    ],
    correta: 3,
    explicacao:
      "Nas orações coordenadas adversativas introduzidas por \"mas\", o argumento mais forte e decisivo para a orientação discursiva encontra-se na própria oração introduzida pelo conectivo (\"não obteve a aprovação\"). Já nas subordinadas concessivas introduzidas por \"embora\", a oração concessiva traz um argumento secundário/superado, ficando a força argumentativa principal na oração principal (\"não obteve a aprovação\"). Essa diferença altera a hierarquia discursiva do texto. A alternativa que aponta causa e efeito erra ao desconsiderar a oposição. A opção sobre alteração de referência erra ao inventar mudanças pronominais. A opção sobre falta de estudo contraria os dados explícitos do texto. A opção de equivalência total erra ao ignorar as nuances de força argumentativa entre coordenação e subordinação.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "No texto publicitário: \"O diretor conversou com o gerente em seu escritório sobre o novo plano de metas. Ele deixou claro que mudanças imediatas seriam necessárias.\" Do ponto de vista da coesão referencial e da coerência textual, que problema de construção se observa nesse trecho e como ele afeta a interpretação do leitor?",
    opcoes: [
      "Incoerência temática, pois o termo 'plano de metas' pertence a um campo semântico incompatível com a palavra 'mudanças'.",
      "Erro de coesão sequencial, pois falta uma conjunção explicativa para ligar a primeira frase à frase subsequente.",
      "Ambiguidade referencial, pois os pronomes 'seu' e 'Ele' não possuem um referente anafórico unívoco, podendo retomar tanto 'o diretor' quanto 'o gerente'.",
      "Falha de adequação vocabular, pois a expressão 'deixou claro' possui conotação informal inadequada para textos sobre metas corporativas.",
      "Quebra de coerência por catafora invertida, pois o nome 'diretor' deveria ter sido omitido por elipse em favor do substantivo 'gerente'.",
    ],
    correta: 2,
    explicacao:
      "A presença dos pronomes \"seu\" e \"Ele\" gera um problema de ambiguidade referencial (anfibologia), pois na estrutura apresentada há dois sujeitos masculinos no singular (\"o diretor\" e \"o gerente\"). O leitor não consegue identificar com certeza de quem é o escritório e quem fez a declaração. A opção que menciona incoerência temática erra pois os termos de gestão e mudanças são perfeitamente compatíveis. A alternativa sobre falta de conjunção erra pois a ausência de conectivo entre os períodos não fere a coesão. A opção sobre adequação vocabular erra ao julgar \"deixou claro\" como linguagem inadequada. A alternativa sobre catafora invertida erra ao propor um diagnóstico inventado para um caso clássico de ambiguidade anafórica.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Um revisor textual analisa duas frases distintas durante o seu trabalho: 'Comprei um bolo. Contudo, ele estava delicioso.' e 'O sol nasceu; fomos à praia.' Na primeira frase, o uso de 'contudo' cria um problema de adequação gramatical de oposição, enquanto na segunda há sentido pleno mesmo sem conectivos explícitos. Qual é a diferença fundamental entre coesão e coerência textual evidenciada por essa análise?",
    opcoes: [
      "A coesão refere-se apenas ao sentido global e abstrato do texto, enquanto a coerência diz respeito ao uso estrito de conectivos gramaticais.",
      "A coesão e a coerência são conceitos sinônimos que avaliam exclusivamente a pontuação adequada de um parágrafo argumentativo.",
      "A coerência independe completamente da interpretação do leitor, ao passo que a coesão é uma propriedade puramente situacional e pragmática.",
      "A coesão cuida das conexões gramaticais e lexicais na superfície do texto, enquanto a coerência lida com a continuidade de sentido e a lógica textual.",
      "A coesão é uma responsabilidade exclusiva dos substantivos, enquanto a coerência depende unicamente do emprego de conjunções subordinativas.",
    ],
    correta: 3,
    explicacao:
      "A alternativa correta é a primeira, pois define com precisão a coesão como a ligação formal/gramatical de superfície e a coerência como a harmonia semântica e lógica do texto. O distrator que inverte as definições erra ao atribuir o sentido global à coesão e a gramática à coerência. O distrator que trata os termos como sinônimos erra ao ignorar suas diferenças conceituais e ao reduzi-los à pontuação. A alternativa sobre a coerência independente do leitor ignora o papel da pragmática e do conhecimento de mundo na construção de sentidos. Por fim, a opção que limita os recursos a substantivos e conjunções restringe incorretamente os amplos mecanismos coesivos.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "facil",
    enunciado:
      "Considere o seguinte trecho: 'Mariana comprou um livro antigo e o entregou ao professor. Ela sabia que este gesto mudaria seu destino.' No trecho, o pronome 'o' (em 'entregou o') retoma o termo antecedente 'livro antigo'. Qual mecanismo de coesão e qual classificação relacional esse pronome exerce em relação ao termo antecedente?",
    opcoes: [
      "Coesão referencial catafórica, pois o pronome antecipa uma informação gramatical que ainda será apresentada.",
      "Coesão sequencial por justaposição, pois o pronome substitui uma oração inteira de valor adversativo.",
      "Coesão lexical por hiperonímia, pois o pronome funciona como um termo genérico para a palavra livro.",
      "Coesão lexical por elipse, pois ocorreu a omissão deliberada do verbo principal no segundo período.",
      "Coesão referencial anafórica, pois o pronome retoma um termo que já foi citado anteriormente no texto.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta identifica a coesão referencial anafórica, já que o pronome pessoal oblíquo 'o' faz referência a um termo já introduzido no texto ('livro antigo'). O distrator sobre catáfora erra ao afirmar que o pronome antecipa um elemento futuro. O distrator de coesão por justaposição confunde a substituição pronominal com a articulação de orações por conectivos. A opção de hiperonímia erra ao classificar um pronome como uma relação semântica de léxico genérico/específico. Por fim, o distrator sobre elipse erra porque não houve omissão de verbo, visto que o verbo 'entregou' está explicitamente escrito.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Analise o seguinte período: 'O projeto obteve aprovação na câmara dos vereadores; contudo, faltam recursos financeiros para sua execução imediata.' Se a conjunção 'contudo' for substituída pela conjunção 'porquanto', qual alteração de sentido e de coesão sequencial ocorrerá no texto?",
    opcoes: [
      "O valor de oposição será mantido intacto, pois ambos são conectivos adversativos de uso formal equivalente.",
      "A frase passará a expressar uma ideia de condição, equivalendo ao uso da conjunção subordinativa caso.",
      "O enunciado ganhará um sentido estritamente conclusivo, equivalente ao emprego do conectivo portanto.",
      "A relação coesiva será anulada, transformando o trecho em uma estrutura catafórica sem sentido completo.",
      "A relação sintático-semântica mudará de oposição para explicação ou causa, alterando a lógica do enunciado.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta aponta a mudança de oposição (adversativa) para explicação ou causa, pois 'contudo' indica contraste e 'porquanto' é uma conjunção explicativa/causal. O distrator que afirma a manutenção da oposição erra ao confundir 'porquanto' com conectivos adversativos (ou com 'conquanto', que é concessivo). O distrator sobre valor condicional erra pois 'porquanto' não expressa hipótese. O distrator sobre sentido conclusivo confunde 'porquanto' com 'portanto'. A opção sobre anulação da coesão erra ao afirmar que a troca de conjunção destruiria a estrutura transformando-a em catáfora.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Na construção de um texto argumentativo, o autor opta por substituir a palavra 'veículos' por 'carros, motos e caminhões' ao longo dos parágrafos para detalhar sua tese. De acordo com os estudos da linguística textual, qual tipo de mecanismo de coesão lexical é empregado quando o texto transita de um termo genérico para termos de sentido mais específico?",
    opcoes: [
      "Relação de hiperonímia, na qual se substitui um termo específico por uma palavra de alcance semântico mais amplo.",
      "Coesão gramatical por pro-forma verbal, que consiste na repetição de verbos para manter a continuidade do tema.",
      "Coesão por elipse gramatical, caracterizada pela omissão de conectivos obrigatórios entre os substantivos.",
      "Catáfora pronominal, na qual termos específicos antecipam a introdução de uma oração subordinada adjetiva.",
      "Relação de hiponímia, na qual se utilizam termos de sentido mais específico (hipônimos) em relação a um termo genérico.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta aponta a hiponímia, visto que 'carros, motos e caminhões' são hipônimos (sentido específico) pertencentes ao conjunto do hiperônimo 'veículos' (sentido amplo). O distrator de hiperonímia inverte o vetor, pois hiperonímia seria ir do específico para o genérico. O distrator de pro-forma verbal erra ao citar verbos onde há apenas substantivos. A opção sobre elipse erra porque não há omissão de conectivos, mas sim especificação vocabular. O distrator de catáfora pronominal confunde relações léxico-semânticas com pronomes que antecipam elementos sintáticos.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Considere a frase extraída de um relatório: 'A empresa reduziu seus custos operacionais em 30% no último trimestre; todavia, a margem de lucro diminuiu expressivamente porque as despesas do setor administrativo aumentaram.' Sob a ótica da coerência textual e da coesão sequencial, qual problema lógico-estrutural compromete a inteligibilidade desse trecho?",
    opcoes: [
      "Ocorre um erro de catáfora, pois o pronome possessivo seus refere-se a um elemento que ainda não foi mencionado no texto.",
      "A conjunção todavia foi empregada incorretamente, pois deveria indicar uma relação de causa e não de oposição.",
      "Existe uma falha de coesão lexical por antonímia inadequada entre os termos trimestre e setor administrativo.",
      "O texto apresenta coesão por elipse indevida do sujeito no segundo período, impedindo a identificação do agente.",
      "Há uma contradição semântica entre a afirmação inicial de redução de custos totais e a justificativa final de que as despesas aumentaram.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta aponta a contradição lógica (quebra de coerência): o texto afirma primeiro que houve redução de custos operacionais, mas justifica a queda do lucro dizendo que as despesas aumentaram, gerando inconsistência de sentido. O distrator sobre catáfora erra pois 'seus' é um pronome anafórico que retoma 'empresa'. O distrator sobre 'todavia' erra pois o conectivo adversativo está usado gramaticalmente correto ao introduzir a ressalva. A opção de antonímia erra ao inventar uma incompatibilidade vocabular inexistente. O distrator de elipse indevida erra pois os sujeitos estão gramaticalmente explícitos.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "A progressão temática é um elemento fundamental da coerência textual, garantindo que o texto avance trazendo informações novas sem perder a unidade. Essa progressão se organiza a partir da articulação entre o 'tema' (informação dada/conhecida) e o 'rema' (informação nova). Qual das descrições a seguir caracteriza corretamente o mecanismo de progressão temática por temas derivados?",
    opcoes: [
      "O rema de uma frase transforma-se inteiramente no tema exato da frase seguinte, em uma estrutura estritamente linear.",
      "O tema inicial é mantido idêntico em todas as frases do texto, alterando-se apenas a pontuação ao final dos períodos.",
      "O texto introduz informações totalmente desconectadas do assunto principal, quebrando a coerência em favor da coesão.",
      "Os elementos coesivos pronominais são eliminados por elipse, fazendo com que o rema anterior passe a atuar como catáfora.",
      "O tema geral é decomposto em vários subtemas ao longo do texto, e cada um deles recebe novos remas nos parágrafos subsequentes.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta descreve a progressão por tema derivado (ou hipertema), na qual um assunto amplo é fracionado em subtemas que passam a ser detalhados com novos remas. O distrator sobre estrutura linear descreve a progressão temática simples (onde o rema de N vira o tema de N+1). O distrator de tema mantido idêntico descreve a progressão com tema constante. O distrator sobre informações desconectadas erra ao definir uma falha de coerência e não um modelo legítimo de progressão. O distrator sobre eliminação pronominal confunde mecanismos de coesão sintática com a dinâmica temática.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Analise o seguinte texto: 'Alguns alunos preferiram estudar na biblioteca; outros, no laboratório de informática.' Nesse enunciado, a omissão da forma verbal 'preferiram' na segunda oração constitui qual recurso de coesão textual e como ele é denominado?",
    opcoes: [
      "Coesão lexical por sinonímia, que substitui o verbo por uma expressão de sentido equivalente omitida visualmente.",
      "Coesão referencial catafórica, pois a omissão do verbo antecipa a informação sobre o local de estudo dos estudantes.",
      "Coesão sequencial por concessão, que introduz uma ideia de contraste através da omissão do verbo principal.",
      "Coesão pragmática por reiteração, caracterizada pela repetição exata da estrutura sintática sem perda de significado.",
      "Coesão gramatical por elipse (ou zeugma), que evita a repetição desnecessária de um termo já expressamente mencionado.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta identifica a coesão gramatical por elipse (especificamente zeugma, que é a elipse de um termo já citado), subentendendo o verbo 'preferiram' na segunda oração. O distrator sobre sinonímia erra ao alegar substituição de palavra por um sinônimo. O distrator sobre catáfora erra a orientação temporal/referencial, pois o termo omitido já havia sido dito antes (anáfora/zeugma). O distrator de concessão confunde uma figura de omissão sintática com uma relação conectiva concessiva. A opção sobre reiteração erra ao falar em repetição exata quando houve justamente a omissão do termo.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "A coerência de um texto não depende unicamente da sua estrutura linguística de superfície, mas também do conhecimento de mundo compartilhado entre os interlocutores. Um texto pode apresentar coesão gramatical perfeita e, ainda assim, ser considerado incoerente. Qual das alternativas a seguir expressa a razão teórica para que essa incoerência ocorra no nível pragmático?",
    opcoes: [
      "O texto utiliza um número excessivo de pronomes anafóricos, o que invalida a continuidade de sentido independentemente do contexto.",
      "A coerência externa é anulada sempre que o autor emprega a coesão sequencial por meio de conjunções coordenativas explicativas.",
      "O leitor deixa de compreender o texto exclusivamente quando ocorre a presença de palavras cognatas e hipônimos desconhecidos.",
      "A falta de coesão lexical por antonímia impede obrigatoriamente a formação de qualquer juízo de valor sobre o texto.",
      "O texto viola o conhecimento de mundo dos interlocutores ou rompe com os princípios de não contradição e de plausibilidade no contexto.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta explica que a incoerência pragmática ou de mundo surge quando a afirmação fere a lógica da realidade, a plausibilidade ou o repertório compartilhado entre emissor e leitor, mesmo com gramática correta. O distrator sobre pronomes anafóricos erra ao atribuir uma falha pragmática a um mero excesso de coesão referencial. O distrator sobre conjunções explicativas erra ao associar o uso de conectivos normais à destruição da coerência externa. O distrator sobre cognatas e hipônimos reduz a coerência pragmática a vocabulário difícil. A opção sobre antonímia condiciona incorretamente a coerência de mundo a um recurso lexical específico.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "dificil",
    enunciado:
      "Observe a sentença: 'O diretor conversou com o funcionário em sua sala antes de tomar a decisão final.' A ambiguidade gerada pelo uso do pronome possessivo 'sua' compromete a precisão da coesão referencial. Qual modificação na estrutura sintática elimina essa ambiguidade referencial garantindo a clareza textual?",
    opcoes: [
      "Substituir 'sua sala' por 'uma sala qualquer', transformando o pronome possessivo em um pronome demonstrativo anafórico.",
      "Inverter a ordem das orações colocando 'antes de tomar a decisão final' no início do período, sem alterar o pronome possessivo.",
      "Trocar a preposição 'com' pela preposição 'contra', transformando o objeto indireto em complemento nominal do diretor.",
      "Substituir o pronome possessivo 'sua' pela conjunção subordinativa 'conforme', alterando a coesão para um valor conformativo.",
      "Substituir 'sua sala' por 'a sala deste' para indicar a sala do funcionário, ou por 'a sala daquele' para referir-se à do diretor.",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta resolve a ambiguidade referencial utilizando os demonstrativos 'deste' (para o antecedente mais próximo: o funcionário) ou 'daquele' (para o antecedente mais distante: o diretor). O distrator de 'uma sala qualquer' retira a posse mas modifica totalmente a informação do texto original. O distrator de inverter as orações mantém o pronome 'sua' intocado, preservando o problema de ambiguidade. O distrator sobre trocar preposição altera o sentido da conversa sem resolver a quem pertence a sala. A opção da conjunção 'conforme' destrói a sintaxe do adjunto adnominal possessivo.",
  },
  {
    materia: "portugues-banca",
    tema: "Coesão e coerência textual",
    dificuldade: "media",
    enunciado:
      "Considere o trecho argumentativo: 'O investimento em ciência não apenas impulsiona a inovação tecnológica, mas também consolida a autonomia econômica do país.' Se o autor desejar reescrever essa passagem mantendo a exata relação de adição e ênfase coesiva entre as ideias, qual das estruturas a seguir apresenta a substituição adequada dos conectivos?",
    opcoes: [
      "'O investimento em ciência tanto impulsiona a inovação tecnológica, embora consolide a autonomia econômica do país.'",
      "'O investimento em ciência já que impulsiona a inovação tecnológica, por conseguinte consolida a autonomia econômica do país.'",
      "'O investimento em ciência nem impulsiona a inovação tecnológica, contudo consolida a autonomia econômica do país.'",
      "'O investimento em ciência à medida que impulsiona a inovação tecnológica, todavia consolida a autonomia econômica do país.'",
      "'O investimento em ciência não só impulsiona a inovação tecnológica, como também consolida a autonomia econômica do país.'",
    ],
    correta: 4,
    explicacao:
      "A alternativa correta utiliza a paridade correlativa aditiva 'não só... como também', que é perfeitamente sinônima de 'não apenas... mas também'. O distrator com 'embora' introduz uma oração subordinada concessiva, quebrando a ideia de adição. O distrator com 'já que... por conseguinte' altera a relação semântica para causa e consequência. O distrator com 'nem... contudo' insere uma negação indevida e uma conjunção adversativa, destruindo o sentido original. O distrator com 'à medida que... todavia' mistura uma relação proporcional com uma oposição adversativa.",
  },
];
