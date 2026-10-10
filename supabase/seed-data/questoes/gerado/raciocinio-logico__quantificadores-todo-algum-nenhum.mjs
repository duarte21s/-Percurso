/* Quantificadores: todo, algum, nenhum (50 questões) — raciocinio-logico.

   Autorais, escritas por Claude (Anthropic) em 2026-09-29 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/raciocinio-logico__quantificadores-todo-algum-nenhum.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/raciocinio-logico__quantificadores-todo-algum-nenhum.json. */

export const questoes = [
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Qual é a negação lógica da afirmação “Todo servidor do setor é pontual”?",
    opcoes: [
      "Nenhum servidor do setor é pontual",
      "Algum servidor do setor é pontual",
      "Algum servidor do setor não é pontual",
      "Todo servidor pontual é do setor",
      "Todo servidor que não é pontual está fora do setor",
    ],
    correta: 2,
    explicacao:
      "Para negar “todo servidor do setor é pontual”, basta existir um servidor do setor que não seja pontual. A negação é, então, “algum servidor do setor não é pontual”: verdadeira exatamente quando a frase original é falsa, e falsa exatamente quando ela é verdadeira.\n\n“Nenhum servidor do setor é pontual” é forte demais: se metade dos servidores for pontual, ela e a frase original são ambas falsas, então não é a negação. “Algum servidor do setor é pontual” é compatível com a original. “Todo servidor pontual é do setor” trata da relação inversa. E “todo servidor que não é pontual está fora do setor” é a contrapositiva — diz exatamente o mesmo que a original, em vez de negá-la.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Qual é a negação da afirmação “Algum aluno da turma gosta de xadrez”?",
    opcoes: [
      "Algum aluno da turma não gosta de xadrez",
      "Todo aluno da turma gosta de xadrez",
      "Todos os que gostam de xadrez são alunos da turma",
      "Nenhum aluno da turma gosta de xadrez",
      "Algum apreciador de xadrez é aluno da turma",
    ],
    correta: 3,
    explicacao:
      "A frase “algum aluno da turma gosta de xadrez” afirma que existe pelo menos um aluno da turma que gosta de xadrez. Para negá-la, é preciso dizer que esse aluno não existe: nenhum aluno da turma gosta de xadrez.\n\n“Algum aluno da turma não gosta de xadrez” pode ser verdadeira junto com a original — basta haver um aluno que gosta e outro que não gosta. “Todo aluno da turma gosta de xadrez” reforça a original em vez de negá-la. “Todos os que gostam de xadrez são alunos da turma” fala de outra relação. E “algum apreciador de xadrez é aluno da turma” diz o mesmo que a original, só com a ordem invertida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Qual é a negação da afirmação “Nenhum candidato foi eliminado”?",
    opcoes: [
      "Todos os candidatos foram eliminados",
      "Algum candidato não foi eliminado",
      "Nenhum eliminado era candidato",
      "Pelo menos um candidato foi eliminado",
      "Todo eliminado era candidato",
    ],
    correta: 3,
    explicacao:
      "“Nenhum candidato foi eliminado” diz que não existe candidato eliminado. A negação afirma o contrário exato: existe pelo menos um candidato eliminado. Basta um caso para derrubar o “nenhum”.\n\n“Todos os candidatos foram eliminados” vai além do necessário: se só um candidato for eliminado, a frase original é falsa e essa também — então não é a negação. “Algum candidato não foi eliminado” é compatível com a original. “Nenhum eliminado era candidato” diz o mesmo que ela, com a ordem invertida. E “todo eliminado era candidato” trata de outra relação, sobre quem foi eliminado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Qual é a negação da afirmação “Algum processo do lote não foi arquivado”?",
    opcoes: [
      "Todos os processos do lote foram arquivados",
      "Nenhum processo do lote foi arquivado",
      "Algum processo do lote foi arquivado",
      "Todo processo arquivado é do lote",
      "Algum processo arquivado não é do lote",
    ],
    correta: 0,
    explicacao:
      "“Algum processo do lote não foi arquivado” afirma que existe pelo menos um processo do lote fora do arquivo. Para negá-la, é preciso que não exista nenhum processo assim — ou seja, que todos os processos do lote tenham sido arquivados. “Algum... não” e “todo” formam um par em que um nega o outro.\n\n“Nenhum processo do lote foi arquivado” não nega a frase; ao contrário, a reforça. “Algum processo do lote foi arquivado” pode ser verdadeira junto com ela. E as duas afirmações sobre processos arquivados que são, ou não são, do lote invertem a relação e não tratam do que a frase diz.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Qual é a negação da afirmação “Todos os fiscais são concursados, e alguns fiscais são engenheiros”?",
    opcoes: [
      "Algum fiscal não é concursado e nenhum fiscal é engenheiro",
      "Algum fiscal não é concursado ou nenhum fiscal é engenheiro",
      "Nenhum fiscal é concursado ou todos os fiscais são engenheiros",
      "Algum fiscal não é concursado ou algum fiscal não é engenheiro",
      "Nenhum fiscal é concursado e nenhum fiscal é engenheiro",
    ],
    correta: 1,
    explicacao:
      "A frase é uma conjunção: “todos os fiscais são concursados” E “alguns fiscais são engenheiros”. Pela lei de De Morgan, a negação de uma conjunção é a disjunção das negações. A negação de “todos são concursados” é “algum não é concursado”; a de “alguns são engenheiros” é “nenhum é engenheiro”. Juntando com “ou”: algum fiscal não é concursado ou nenhum fiscal é engenheiro.\n\nTrocar o “ou” por “e” exige as duas falhas ao mesmo tempo, quando basta uma. “Nenhum fiscal é concursado” e “todos são engenheiros” não negam as partes; exageram no sentido oposto. E “algum fiscal não é engenheiro” é compatível com “alguns fiscais são engenheiros”, então não nega a segunda parte.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Qual é a negação da afirmação “Todo aluno que estuda é aprovado”?",
    opcoes: [
      "Algum aluno estuda e não é aprovado",
      "Todo aluno que não estuda é reprovado",
      "Nenhum aluno que estuda é aprovado",
      "Algum aluno não estuda e é aprovado",
      "Todo aluno aprovado estudou",
    ],
    correta: 0,
    explicacao:
      "A frase diz que, entre os alunos que estudam, não há exceção: todos são aprovados. Para negá-la, basta uma exceção — um aluno que estuda e, mesmo assim, não é aprovado. A negação de “todo X é Y” é “algum X não é Y”, e aqui X são os alunos que estudam.\n\n“Nenhum aluno que estuda é aprovado” exagera na direção oposta. “Todo aluno que não estuda é reprovado” e “algum aluno não estuda e é aprovado” tratam de quem não estuda — grupo sobre o qual a frase original não diz nada. E “todo aluno aprovado estudou” é a recíproca, outra afirmação, que não nega a original.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Qual é a negação da afirmação “Existe um relatório que todos os gerentes aprovaram”?",
    opcoes: [
      "Existe um relatório que nenhum gerente aprovou",
      "Nenhum gerente aprovou relatório algum",
      "Existe um gerente que não aprovou nenhum relatório",
      "Para cada relatório, há pelo menos um gerente que não o aprovou",
      "Todo relatório foi aprovado por algum gerente",
    ],
    correta: 3,
    explicacao:
      "A frase afirma a existência de um relatório com uma propriedade forte: todos os gerentes o aprovaram. Para negá-la, é preciso que nenhum relatório tenha essa propriedade — ou seja, que cada relatório tenha pelo menos um gerente que não o aprovou. Na negação, “existe” vira “para cada”, e “todos” vira “pelo menos um... não”.\n\n“Existe um relatório que nenhum gerente aprovou” é mais forte que a negação: pode ser falsa mesmo com a frase original falsa. Com “nenhum gerente aprovou relatório algum” ocorre o mesmo, com mais exagero ainda. “Existe um gerente que não aprovou nenhum relatório” também é forte demais. E “todo relatório foi aprovado por algum gerente” é compatível com a frase original.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "A afirmação “Não é verdade que nenhum técnico faltou” equivale a qual das afirmações abaixo?",
    opcoes: [
      "Pelo menos um técnico faltou",
      "Todos os técnicos faltaram",
      "Nenhum técnico faltou",
      "Algum técnico não faltou",
      "Todos os que faltaram eram técnicos",
    ],
    correta: 0,
    explicacao:
      "“Não é verdade que nenhum técnico faltou” nega a afirmação “nenhum técnico faltou”. Se é falso que nenhum faltou, então existe pelo menos um técnico que faltou. As duas negações — o “não é verdade” e o “nenhum” — se combinam numa afirmação existencial positiva.\n\n“Todos os técnicos faltaram” vai longe demais: basta um técnico ausente para a frase ser verdadeira. “Nenhum técnico faltou” é justamente o que está sendo negado. “Algum técnico não faltou” fala dos presentes, sobre os quais a frase não informa nada. E “todos os que faltaram eram técnicos” trata de outra relação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Qual é a negação da afirmação “Se todo servidor é pontual, então algum chefe é elogiado”?",
    opcoes: [
      "Algum servidor não é pontual e nenhum chefe é elogiado",
      "Se algum servidor não é pontual, então nenhum chefe é elogiado",
      "Todo servidor é pontual e nenhum chefe é elogiado",
      "Todo servidor é pontual e algum chefe não é elogiado",
      "Algum servidor não é pontual ou algum chefe é elogiado",
    ],
    correta: 2,
    explicacao:
      "A negação de uma condicional “se P, então Q” é “P e não Q”: a condicional só falha quando o antecedente acontece e o consequente não. Aqui, P é “todo servidor é pontual”, que se mantém, e Q é “algum chefe é elogiado”, cuja negação é “nenhum chefe é elogiado”. Resultado: todo servidor é pontual e nenhum chefe é elogiado.\n\nNegar também o antecedente (“algum servidor não é pontual”) é erro comum: na negação, o antecedente precisa continuar verdadeiro. Manter a forma de condicional não nega nada. “Algum chefe não é elogiado” não é a negação de “algum chefe é elogiado”. E “algum servidor não é pontual ou algum chefe é elogiado” é equivalente à frase original, não à sua negação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "A afirmação “Nenhum médico da equipe é fumante” equivale a qual das afirmações abaixo?",
    opcoes: [
      "Nenhum fumante é médico da equipe",
      "Todo fumante é médico da equipe",
      "Algum médico da equipe não é fumante",
      "Todo não fumante é médico da equipe",
      "Algum fumante não é médico da equipe",
    ],
    correta: 0,
    explicacao:
      "“Nenhum médico da equipe é fumante” diz que os dois grupos não têm ninguém em comum. Essa relação é simétrica: se nenhum médico é fumante, nenhum fumante é médico da equipe. Por isso, na proposição com “nenhum”, pode-se trocar a ordem dos termos sem mudar o sentido (conversão simples).\n\n“Todo fumante é médico da equipe” põe os fumantes dentro do grupo dos médicos, o oposto da frase. “Algum médico não é fumante” e “algum fumante não é médico” são mais fracas: podem ser verdadeiras mesmo com a frase original falsa — por exemplo, numa equipe com médicos fumantes e não fumantes e com fumantes de fora da equipe médica. E “todo não fumante é médico” afirma algo sobre todas as pessoas que não fumam, que a frase original nem menciona.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "A afirmação “Todo auditor é contador” equivale a qual das afirmações abaixo?",
    opcoes: [
      "Quem não é contador não é auditor",
      "Todo contador é auditor",
      "Quem não é auditor não é contador",
      "Algum auditor é contador",
      "Algum contador não é auditor",
    ],
    correta: 0,
    explicacao:
      "“Todo auditor é contador” coloca o grupo dos auditores dentro do grupo dos contadores. Quem está fora do grupo maior (não é contador) está, necessariamente, fora do menor (não é auditor). Essa é a contrapositiva, sempre equivalente: “todo A é B” e “todo não B é não A” descrevem a mesma situação.\n\n“Todo contador é auditor” inverte a inclusão. “Quem não é auditor não é contador” também inverte — falha com um contador que não é auditor. “Algum auditor é contador” e “algum contador não é auditor” são afirmações parciais: podem ser verdadeiras sem que a inclusão total seja, e por isso não equivalem a ela.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "A afirmação “Nem todo candidato foi aprovado” equivale a qual das afirmações abaixo?",
    opcoes: [
      "Nenhum candidato foi aprovado",
      "Algum candidato foi aprovado",
      "Algum candidato não foi aprovado",
      "Todo aprovado era candidato",
      "Algum aprovado não era candidato",
    ],
    correta: 2,
    explicacao:
      "“Nem todo candidato foi aprovado” nega a frase “todo candidato foi aprovado”. Para que a inclusão total falhe, basta um candidato fora do grupo dos aprovados: algum candidato não foi aprovado. “Nem todo” e “algum... não” dizem a mesma coisa.\n\n“Nenhum candidato foi aprovado” é muito mais forte — seria verdadeira só se todos fossem reprovados. “Algum candidato foi aprovado” é compatível com a frase, mas não equivalente: pode ser falsa com ela verdadeira, quando ninguém é aprovado. E “todo aprovado era candidato” e “algum aprovado não era candidato” tratam da relação inversa, de quem foi aprovado.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "A afirmação “Não existe servidor que não tenha feito o curso de ética” equivale a qual das afirmações abaixo?",
    opcoes: [
      "Nenhum servidor fez o curso de ética",
      "Algum servidor não fez o curso de ética",
      "Todos os que fizeram o curso de ética são servidores",
      "Algum servidor fez o curso de ética",
      "Todo servidor fez o curso de ética",
    ],
    correta: 4,
    explicacao:
      "A frase nega a existência de um servidor com a propriedade “não fez o curso”. Se não há nenhum servidor assim, todo servidor fez o curso. É a equivalência entre “não existe X que não seja Y” e “todo X é Y” — duas negações que se anulam.\n\n“Nenhum servidor fez o curso” inverte o sentido. “Algum servidor não fez o curso” é exatamente o que a frase declara não existir. “Todos os que fizeram o curso são servidores” trata de outra relação: pode haver terceirizados no curso sem que isso afete a frase. E “algum servidor fez o curso” é mais fraca: pode ser verdadeira sem que todos tenham feito.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Um edital diz: “Só os aprovados na prova objetiva serão chamados para a discursiva”. Essa regra equivale a qual das afirmações abaixo?",
    opcoes: [
      "Todo chamado para a discursiva foi aprovado na objetiva",
      "Todo aprovado na objetiva será chamado para a discursiva",
      "Algum aprovado na objetiva não será chamado para a discursiva",
      "Algum chamado para a discursiva não foi aprovado na objetiva",
      "Serão chamados todos os aprovados na objetiva, e somente eles",
    ],
    correta: 0,
    explicacao:
      "“Só os aprovados serão chamados” impõe uma condição necessária: para ser chamado, é preciso ter sido aprovado. Logo, todo chamado para a discursiva foi aprovado na objetiva. O “só” (ou “somente”, “apenas”) inverte a ordem habitual: “só A são B” equivale a “todo B é A”.\n\n“Todo aprovado será chamado” lê o “só” ao contrário: a frase não garante vaga para todos os aprovados. Pelo mesmo motivo, “todos os aprovados, e somente eles” acrescenta uma garantia que não foi dada. “Algum aprovado não será chamado” também não decorre — pode ser que todos sejam chamados. E “algum chamado não foi aprovado” contradiz a regra.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Qual dos pares abaixo reúne duas afirmações que NÃO podem ser verdadeiras ao mesmo tempo, qualquer que seja o grupo de pessoas considerado?",
    opcoes: [
      "“Algum gerente viaja” e “Algum gerente não viaja”",
      "“Todo gerente viaja” e “Todo viajante é gerente”",
      "“Nenhum gerente viaja” e “Algum viajante não é gerente”",
      "“Todo gerente viaja” e “Algum viajante não é gerente”",
      "“Todo gerente viaja” e “Algum gerente não viaja”",
    ],
    correta: 4,
    explicacao:
      "“Todo gerente viaja” e “algum gerente não viaja” são contraditórias: a segunda é exatamente a negação da primeira. Se todo gerente viaja, não existe gerente que não viaje; se existe um, a inclusão total falha. Em qualquer grupo, uma delas é verdadeira e a outra é falsa.\n\nOs outros pares convivem. “Algum gerente viaja” e “algum gerente não viaja” são verdadeiras juntas num grupo com gerentes dos dois tipos. “Todo gerente viaja” e “todo viajante é gerente” valem juntas se os dois grupos coincidirem. E, nos pares que falam de um viajante que não é gerente, basta imaginar um grupo com esse viajante e com gerentes que se encaixem na outra afirmação.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Considere as premissas: “Todo advogado do escritório é bacharel em Direito” e “Todo bacharel em Direito passou por uma faculdade”. Qual conclusão é válida?",
    opcoes: [
      "Todos os que passaram por uma faculdade são advogados do escritório",
      "Todo bacharel em Direito é advogado do escritório",
      "Algum advogado do escritório não passou por uma faculdade",
      "Todos os que passaram por uma faculdade são bacharéis em Direito",
      "Todo advogado do escritório passou por uma faculdade",
    ],
    correta: 4,
    explicacao:
      "As premissas formam uma cadeia de inclusões: os advogados do escritório estão dentro do grupo dos bacharéis, que está dentro do grupo dos que passaram por faculdade. Logo, os advogados do escritório estão dentro do grupo dos que passaram por faculdade. É o silogismo mais clássico, em que o termo médio (bacharel) liga os outros dois.\n\nAs conclusões que invertem alguma inclusão — “todo bacharel é advogado do escritório”, “todos os que passaram por faculdade são bacharéis” ou “são advogados do escritório” — não decorrem: o grupo maior pode ter gente fora do menor. E “algum advogado do escritório não passou por faculdade” contradiz a conclusão correta.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Nenhum estagiário assina contratos” e “Alguns funcionários do setor jurídico são estagiários”. Qual conclusão é válida?",
    opcoes: [
      "Nenhum funcionário do setor jurídico assina contratos",
      "Algum funcionário do setor jurídico não assina contratos",
      "Algum funcionário do setor jurídico assina contratos",
      "Todo funcionário do setor jurídico é estagiário",
      "Algum estagiário não é do setor jurídico",
    ],
    correta: 1,
    explicacao:
      "Os funcionários do jurídico que são estagiários (existe pelo menos um, pela segunda premissa) estão no grupo dos estagiários, e nenhum estagiário assina contratos (primeira premissa). Então esses funcionários não assinam contratos — e, com isso, algum funcionário do setor jurídico não assina contratos.\n\n“Nenhum funcionário do jurídico assina contratos” generaliza demais: pode haver funcionários efetivos do jurídico que assinam. “Algum funcionário do jurídico assina contratos” também não é garantido. “Todo funcionário do jurídico é estagiário” lê o “alguns” como “todos”. E “algum estagiário não é do jurídico” não tem apoio: todos os estagiários podem estar no jurídico.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Um candidato escreveu: “Todo auditor é servidor público. Todo professor da rede estadual é servidor público. Logo, todo auditor é professor da rede estadual.” Como se avalia esse argumento?",
    opcoes: [
      "Válido: os dois grupos estão no mesmo conjunto, logo coincidem",
      "Válido, porque as duas premissas são verdadeiras",
      "Inválido, apenas porque a conclusão é falsa na realidade",
      "Válido, desde que exista pelo menos um auditor",
      "Inválido: os dois grupos podem estar entre os servidores sem ter ninguém em comum",
    ],
    correta: 4,
    explicacao:
      "Para que o argumento fosse válido, as premissas teriam de forçar a conclusão. Mas elas só dizem que auditores e professores estão, ambos, dentro do grupo dos servidores. Os dois grupos podem ocupar partes diferentes desse conjunto maior, sem ninguém em comum. O termo que liga as premissas (servidor) não garante a ligação entre os outros dois.\n\nEstar no mesmo conjunto maior não faz dois grupos coincidirem. A verdade das premissas não basta: validade é questão de forma. A falsidade da conclusão no mundo real é indício, mas o defeito está na forma — o mesmo esquema seria inválido com uma conclusão verdadeira. E supor que exista um auditor não muda nada: ele pode ser servidor sem ser professor.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Algum engenheiro da obra é estrangeiro” e “Todo estrangeiro tem visto de trabalho”. Qual conclusão é válida?",
    opcoes: [
      "Todo engenheiro da obra tem visto de trabalho",
      "Todos os que têm visto de trabalho são estrangeiros",
      "Algum engenheiro da obra não tem visto de trabalho",
      "Algum engenheiro da obra tem visto de trabalho",
      "Todo engenheiro da obra é estrangeiro",
    ],
    correta: 3,
    explicacao:
      "Pela primeira premissa, existe pelo menos um engenheiro da obra que é estrangeiro. Pela segunda, todo estrangeiro tem visto de trabalho — inclusive esse engenheiro. Logo, algum engenheiro da obra tem visto de trabalho.\n\n“Todo engenheiro da obra tem visto” e “todo engenheiro da obra é estrangeiro” transformam o “algum” da primeira premissa em “todo”. “Algum engenheiro não tem visto” pode ser falsa: todos os engenheiros podem ser estrangeiros. E “todos os que têm visto são estrangeiros” inverte a segunda premissa, que não impede outras pessoas de também terem visto.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Nenhum item importado tem isenção de taxa” e “Todos os itens do lote 7 são importados”. Qual conclusão é válida?",
    opcoes: [
      "Algum item do lote 7 tem isenção de taxa",
      "Todo item importado é do lote 7",
      "Algum item importado não é do lote 7",
      "Todo item sem isenção de taxa é do lote 7",
      "Nenhum item do lote 7 tem isenção de taxa",
    ],
    correta: 4,
    explicacao:
      "Os itens do lote 7 estão dentro do grupo dos importados (segunda premissa), e nenhum importado tem isenção (primeira premissa). Logo, nenhum item do lote 7 tem isenção: se algum tivesse, seria um importado com isenção, o que a primeira premissa proíbe.\n\n“Algum item do lote 7 tem isenção” contradiz essa conclusão. “Todo item importado é do lote 7” inverte a segunda premissa. “Algum importado não é do lote 7” pode ser falsa: todos os importados podem estar nesse lote. E “todo item sem isenção é do lote 7” extrapola: pode haver itens nacionais sem isenção fora do lote, sem contrariar as premissas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Todo candidato aprovado tem diploma” e “Nenhum inscrito da lista B tem diploma”. Qual conclusão é válida?",
    opcoes: [
      "Algum inscrito da lista B foi aprovado",
      "Todos os que têm diploma foram aprovados",
      "Nenhum inscrito da lista B foi aprovado",
      "Todo inscrito fora da lista B foi aprovado",
      "Todo candidato não aprovado está na lista B",
    ],
    correta: 2,
    explicacao:
      "Todo aprovado tem diploma, e nenhum inscrito da lista B tem diploma. Se algum inscrito da lista B tivesse sido aprovado, teria diploma — contrariando a segunda premissa. Logo, nenhum inscrito da lista B foi aprovado. O diploma funciona como o termo médio: está em todos os aprovados e em nenhum da lista B.\n\n“Algum inscrito da lista B foi aprovado” contradiz a conclusão. “Todos os que têm diploma foram aprovados” inverte a primeira premissa. E as afirmações sobre quem está fora da lista B e sobre os não aprovados extrapolam: as premissas não dizem nada sobre esses grupos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Considere as premissas: “Algum contrato da gerência não tem garantia” e “Todo contrato renovável tem garantia”. Qual conclusão é válida?",
    opcoes: [
      "Nenhum contrato da gerência é renovável",
      "Algum contrato da gerência não é renovável",
      "Algum contrato da gerência é renovável",
      "Todo contrato com garantia é renovável",
      "Algum contrato renovável não é da gerência",
    ],
    correta: 1,
    explicacao:
      "O contrato da gerência sem garantia (a primeira premissa garante que existe) não pode ser renovável: todo contrato renovável tem garantia, e ele não tem. Então há pelo menos um contrato da gerência que não é renovável — é um modus tollens aplicado a esse contrato.\n\n“Nenhum contrato da gerência é renovável” generaliza demais: outros contratos da gerência podem ter garantia e ser renováveis. “Algum contrato da gerência é renovável” não é garantido. “Todo contrato com garantia é renovável” inverte a segunda premissa. E nada obriga a existir contrato renovável fora da gerência.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Considere as premissas: “Todo servidor da Receita é concursado” e “Paulo não é concursado”. Qual conclusão é válida?",
    opcoes: [
      "Paulo não é servidor da Receita",
      "Paulo é servidor da Receita",
      "Algum servidor da Receita não é concursado",
      "Nenhum concursado é servidor da Receita",
      "Todo concursado é servidor da Receita",
    ],
    correta: 0,
    explicacao:
      "A primeira premissa põe todos os servidores da Receita dentro do grupo dos concursados. Paulo está fora desse grupo (não é concursado), então não pode estar no grupo menor, que fica dentro dele: Paulo não é servidor da Receita. É o modus tollens aplicado a um indivíduo.\n\nAfirmar que Paulo é servidor da Receita contradiz as premissas. “Algum servidor da Receita não é concursado” nega a primeira premissa. “Nenhum concursado é servidor da Receita” e “todo concursado é servidor da Receita” não decorrem: as premissas não dizem quantos concursados estão na Receita.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Todo farmacêutico do hospital faz plantão” e “Lúcia faz plantão”. Um colega concluiu que Lúcia é farmacêutica do hospital. Esse raciocínio é válido?",
    opcoes: [
      "Sim: quem faz plantão é, por isso, farmacêutico",
      "Sim: as duas premissas falam da mesma pessoa",
      "Não: a premissa deveria dizer “algum farmacêutico faz plantão”",
      "Não: Lúcia pode fazer plantão sem ser farmacêutica do hospital",
      "Sim, desde que exista pelo menos um farmacêutico no hospital",
    ],
    correta: 3,
    explicacao:
      "A premissa “todo farmacêutico do hospital faz plantão” coloca os farmacêuticos dentro do grupo de quem faz plantão, mas não diz que todo plantonista é farmacêutico. Lúcia está no grupo maior; nada garante que esteja no menor. Um contraexemplo basta: Lúcia é enfermeira e faz plantão — as premissas continuam verdadeiras, e a conclusão é falsa.\n\nDizer que quem faz plantão é farmacêutico inverte a premissa. Falar da mesma pessoa não garante validade. Trocar a premissa por “algum farmacêutico faz plantão” deixaria o raciocínio ainda mais fraco. E supor que exista um farmacêutico no hospital não muda nada: ele pode ser outra pessoa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Considere as premissas: “Todo analista é graduado”, “Todo graduado fez estágio” e “Nenhum dos que fizeram estágio é menor de idade”. Qual conclusão é válida?",
    opcoes: [
      "Algum analista é menor de idade",
      "Todos os que fizeram estágio são analistas",
      "Todo graduado é analista",
      "Nenhum analista é menor de idade",
      "Todo maior de idade é analista",
    ],
    correta: 3,
    explicacao:
      "As duas primeiras premissas encadeiam analistas ⊂ graduados ⊂ quem fez estágio. A terceira diz que nenhum dos que fizeram estágio é menor de idade. Como todos os analistas estão entre os que fizeram estágio, nenhum analista é menor de idade.\n\n“Algum analista é menor de idade” contradiz essa conclusão. “Todos os que fizeram estágio são analistas” e “todo graduado é analista” invertem inclusões: o grupo maior pode ter gente fora do menor. E “todo maior de idade é analista” não tem apoio algum — pode haver adultos que nunca foram analistas sem contrariar nenhuma premissa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Nenhum produto da marca Alfa é orgânico” e “Alguns produtos orgânicos são importados”. Qual conclusão é válida?",
    opcoes: [
      "Algum produto importado não é da marca Alfa",
      "Nenhum produto importado é da marca Alfa",
      "Algum produto da marca Alfa é importado",
      "Todo produto importado é orgânico",
      "Algum produto importado é da marca Alfa",
    ],
    correta: 0,
    explicacao:
      "A segunda premissa garante um produto que é, ao mesmo tempo, orgânico e importado. Como nenhum produto da marca Alfa é orgânico, esse produto não é da marca Alfa. Logo, existe produto importado que não é da marca Alfa.\n\n“Nenhum produto importado é da marca Alfa” generaliza demais: a marca pode ter importados não orgânicos. Pelo mesmo motivo, “algum produto da marca é importado” e “algum importado é da marca” não são garantidos — podem ser verdadeiros ou falsos. E “todo produto importado é orgânico” lê o “alguns” da segunda premissa como “todos”.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Todo inscrito no programa recebe bolsa” e “Alguns inscritos no programa moram no interior”. Qual conclusão é válida?",
    opcoes: [
      "Todo bolsista está inscrito no programa",
      "Todo morador do interior recebe bolsa",
      "Algum bolsista mora no interior",
      "Todo bolsista mora no interior",
      "Algum bolsista não mora no interior",
    ],
    correta: 2,
    explicacao:
      "A segunda premissa garante pelo menos um inscrito que mora no interior. Pela primeira, todo inscrito recebe bolsa — inclusive esse. Então existe alguém que recebe bolsa e mora no interior: algum bolsista mora no interior.\n\n“Todo bolsista está inscrito no programa” inverte a primeira premissa: pode haver bolsas de outras fontes. “Todo morador do interior recebe bolsa” e “todo bolsista mora no interior” generalizam o “alguns”. E “algum bolsista não mora no interior” não é garantido: todos os inscritos podem morar no interior, e eles podem ser os únicos bolsistas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Um estudante argumentou: “Alguns médicos são professores. Alguns professores são escritores. Logo, alguns médicos são escritores.” Como se avalia esse argumento?",
    opcoes: [
      "Inválido: os professores médicos podem não ser os mesmos que escrevem",
      "Válido: os professores ligam os médicos aos escritores",
      "Válido, porque as duas premissas são particulares",
      "Inválido, porque a conclusão deveria ser universal",
      "Válido, desde que exista pelo menos um médico",
    ],
    correta: 0,
    explicacao:
      "As duas premissas falam de “alguns” professores, mas não necessariamente dos mesmos. Pode haver um grupo de professores que são médicos e outro, sem ninguém em comum, de professores que são escritores. Nesse cenário, as premissas são verdadeiras e nenhum médico é escritor: o argumento é inválido.\n\nO termo médio (professor) não liga os outros dois, porque nenhuma premissa fala de todos os professores. Ser particular não torna um argumento válido; ao contrário, com duas premissas particulares nenhuma conclusão sobre médicos e escritores está garantida. A exigência de conclusão universal não faz sentido. E supor que exista um médico não altera nada.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Nenhum funcionário do turno da noite usa o estacionamento” e “Nenhum usuário do estacionamento mora perto da empresa”. Qual conclusão é válida?",
    opcoes: [
      "Nenhum funcionário do turno da noite mora perto da empresa",
      "Nenhum usuário do estacionamento é do turno da noite",
      "Algum funcionário do turno da noite mora perto da empresa",
      "Todo funcionário do turno da noite mora perto da empresa",
      "Algum funcionário do turno da noite não mora perto da empresa",
    ],
    correta: 1,
    explicacao:
      "Com duas premissas negativas, não se tira conclusão sobre os funcionários da noite e a proximidade de casa: os dois grupos ficam fora do grupo do estacionamento, mas podem se sobrepor totalmente, em parte ou de modo algum. As quatro afirmações que relacionam “turno da noite” e “mora perto” falham em algum desses cenários.\n\nO que decorre é só a conversão da primeira premissa: se nenhum funcionário da noite usa o estacionamento, nenhum usuário do estacionamento é da noite. A relação “nenhum” é simétrica, então a troca de ordem mantém o sentido. É uma conclusão modesta, mas é a única garantida.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Sabendo que a afirmação “Todo fiscal é engenheiro” é verdadeira, qual das afirmações abaixo é necessariamente falsa?",
    opcoes: [
      "Todo engenheiro é fiscal",
      "Algum fiscal não é engenheiro",
      "Algum engenheiro não é fiscal",
      "Algum fiscal é engenheiro",
      "Quem não é engenheiro não é fiscal",
    ],
    correta: 1,
    explicacao:
      "Se todo fiscal é engenheiro, não pode existir fiscal fora do grupo dos engenheiros. Por isso “algum fiscal não é engenheiro” é necessariamente falsa — ela é a contraditória da frase dada, a única que sempre tem o valor oposto.\n\n“Todo engenheiro é fiscal” e “algum engenheiro não é fiscal” tratam da relação inversa, que a frase não decide: podem ser verdadeiras ou falsas. “Algum fiscal é engenheiro” não é falsa — no mínimo, é compatível com a frase. E “quem não é engenheiro não é fiscal” é a contrapositiva: diz o mesmo que a frase, então é verdadeira.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Sabendo que a afirmação “Algum candidato faltou à prova” é falsa, qual das afirmações abaixo é necessariamente verdadeira?",
    opcoes: [
      "Nenhum candidato faltou à prova",
      "Todo candidato faltou à prova",
      "Pelo menos um candidato faltou à prova",
      "Todos os que faltaram à prova eram candidatos",
      "Algum dos que faltaram à prova era candidato",
    ],
    correta: 0,
    explicacao:
      "Se “algum candidato faltou” é falsa, não existe nenhum candidato que tenha faltado. Isso é exatamente “nenhum candidato faltou à prova”, a contraditória da frase dada: quando uma é falsa, a outra é verdadeira.\n\n“Todo candidato faltou” não é garantida — havendo candidatos, é até incompatível com a informação. “Pelo menos um candidato faltou” repete a frase falsa, e “algum dos que faltaram era candidato” diz o mesmo com outra ordem. Já “todos os que faltaram eram candidatos” não decorre: pode ter havido ausentes que não eram candidatos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Uma auditoria concluiu que é falsa a afirmação “Nenhum servidor do almoxarifado tirou férias neste ano”. Com base apenas nisso, qual afirmação é certamente verdadeira?",
    opcoes: [
      "Todo servidor do almoxarifado tirou férias neste ano",
      "Algum servidor do almoxarifado não tirou férias neste ano",
      "Todos os que tiraram férias neste ano são do almoxarifado",
      "Algum servidor do almoxarifado tirou férias neste ano",
      "Nenhum dos que tiraram férias neste ano é do almoxarifado",
    ],
    correta: 3,
    explicacao:
      "Se “nenhum servidor do almoxarifado tirou férias” é falsa, então existe pelo menos um servidor do almoxarifado que tirou férias. É a contraditória: “nenhum A é B” e “algum A é B” sempre têm valores opostos.\n\n“Todo servidor do almoxarifado tirou férias” não é garantida: basta um ter tirado para a frase original ser falsa. “Algum servidor não tirou férias” também não é garantida, pois todos podem ter tirado. “Todos os que tiraram férias são do almoxarifado” não decorre. E “nenhum dos que tiraram férias é do almoxarifado” é, na verdade, falsa — diz o mesmo que a frase original.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Numa vistoria, verificou-se que é falsa a afirmação “Todos os extintores do prédio estão dentro da validade”. O que se pode afirmar com certeza?",
    opcoes: [
      "Nenhum extintor do prédio está dentro da validade",
      "Algum extintor do prédio está dentro da validade",
      "A maioria dos extintores do prédio está fora da validade",
      "Nenhum extintor do prédio está fora da validade",
      "Pelo menos um extintor do prédio está fora da validade",
    ],
    correta: 4,
    explicacao:
      "Se é falso que todos os extintores estão na validade, então existe pelo menos um fora dela. A negação de “todo” não é “nenhum”: basta uma exceção para derrubar a afirmação universal.\n\n“Nenhum extintor está dentro da validade” (todos vencidos) é possível, mas não garantido — pode haver só um vencido. Pela mesma razão, “algum está dentro da validade” não é certo. “A maioria está fora da validade” exige uma informação de quantidade que a frase não dá. E “nenhum extintor está fora da validade” diz o mesmo que a frase original, que se sabe falsa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere que a empresa tem pelo menos um estagiário. O que é correto afirmar sobre as frases “Algum estagiário fala inglês” e “Algum estagiário não fala inglês”?",
    opcoes: [
      "Podem ser ambas falsas, mas não podem ser ambas verdadeiras",
      "Uma é sempre a negação da outra",
      "Podem ser ambas verdadeiras, mas não podem ser ambas falsas",
      "Podem ser ambas verdadeiras e podem ser ambas falsas",
      "Se uma é verdadeira, a outra é necessariamente falsa",
    ],
    correta: 2,
    explicacao:
      "Com pelo menos um estagiário na empresa, ele fala inglês ou não fala. No primeiro caso, “algum estagiário fala inglês” é verdadeira; no segundo, “algum estagiário não fala inglês” é verdadeira. Então as duas nunca são falsas ao mesmo tempo. Mas podem ser verdadeiras juntas: basta haver um estagiário que fala e outro que não fala.\n\nEssas proposições são chamadas subcontrárias. Não são negação uma da outra — a negação de “algum fala” é “nenhum fala”. Ser ambas falsas é impossível, como se viu. E a verdade de uma não obriga a outra a ser falsa. A suposição de que existe estagiário é essencial: sem nenhum estagiário, as duas seriam falsas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Na equipe de um projeto, qual situação torna FALSAS, ao mesmo tempo, as frases “Todo analista da equipe trabalha remotamente” e “Nenhum analista da equipe trabalha remotamente”?",
    opcoes: [
      "A equipe tem dois analistas, e os dois trabalham remotamente",
      "A equipe tem dois analistas, e os dois trabalham presencialmente",
      "A equipe tem um único analista, que trabalha remotamente",
      "A equipe tem um único analista, que trabalha presencialmente",
      "A equipe tem dois analistas: um trabalha remotamente e o outro, presencialmente",
    ],
    correta: 4,
    explicacao:
      "“Todo analista trabalha remotamente” fica falsa quando há pelo menos um analista presencial; “nenhum analista trabalha remotamente” fica falsa quando há pelo menos um analista remoto. Para as duas serem falsas ao mesmo tempo, a equipe precisa ter analistas dos dois tipos — um remoto e outro presencial.\n\nCom os dois analistas remotos, ou com um único analista remoto, a frase com “todo” é verdadeira. Com os dois presenciais, ou com um único presencial, a frase com “nenhum” é verdadeira. Por isso essas duas frases são chamadas contrárias: não podem ser verdadeiras juntas (havendo analista), mas podem ser falsas juntas.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Na lógica de predicados, qual é a negação da sentença ∀x (P(x) → Q(x))?",
    opcoes: [
      "∀x (P(x) → ~Q(x))",
      "∃x (P(x) → ~Q(x))",
      "∃x (P(x) ∧ ~Q(x))",
      "∀x (P(x) ∧ ~Q(x))",
      "∃x (~P(x) ∧ Q(x))",
    ],
    correta: 2,
    explicacao:
      "Negar “para todo x, se P(x) então Q(x)” é afirmar que existe pelo menos um x para o qual a condicional falha. Uma condicional falha quando o antecedente é verdadeiro e o consequente é falso. Então a negação é ∃x (P(x) ∧ ~Q(x)): existe um x que tem P e não tem Q. Em linguagem comum, “todo P é Q” se nega com “algum P não é Q”.\n\n∀x (P(x) → ~Q(x)) diz “nenhum P é Q”, que é outra coisa. ∃x (P(x) → ~Q(x)) é fraca demais: fica verdadeira até com um x que não tenha P. ∀x (P(x) ∧ ~Q(x)) exige que todos os elementos tenham P e não tenham Q. E ∃x (~P(x) ∧ Q(x)) descreve um elemento que não afeta a sentença original.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Sendo P(x): “x é fiscal” e Q(x): “x é auditor”, a sentença ~∃x (P(x) ∧ Q(x)) equivale a qual afirmação?",
    opcoes: [
      "Algum fiscal não é auditor",
      "Todo fiscal é auditor",
      "Existe alguém que não é fiscal nem auditor",
      "Nenhum fiscal é auditor",
      "Ninguém é fiscal, e ninguém é auditor",
    ],
    correta: 3,
    explicacao:
      "A sentença ~∃x (P(x) ∧ Q(x)) diz que não existe ninguém que seja, ao mesmo tempo, fiscal e auditor. Em linguagem comum: nenhum fiscal é auditor. Pela regra de negação do quantificador e por De Morgan, ela também se escreve ∀x (P(x) → ~Q(x)) — “se alguém é fiscal, não é auditor”.\n\n“Algum fiscal não é auditor” é mais fraca: pode ser verdadeira mesmo havendo fiscais que também são auditores. “Todo fiscal é auditor” vai no sentido oposto. “Existe alguém que não é fiscal nem auditor” fala de outra pessoa e não nega nada. E “ninguém é fiscal, e ninguém é auditor” é forte demais: a sentença admite fiscais e auditores, desde que sejam pessoas diferentes.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Considere a sentença ∀x ∃y R(x, y), em que x e y percorrem o mesmo universo. Qual é a sua negação?",
    opcoes: [
      "∀x ∃y ~R(x, y)",
      "∃x ∃y ~R(x, y)",
      "∃x ∀y ~R(x, y)",
      "∀x ∀y ~R(x, y)",
      "∃y ∀x ~R(x, y)",
    ],
    correta: 2,
    explicacao:
      "A negação troca cada quantificador e leva o “não” para dentro: ~∀x ∃y R(x, y) equivale a ∃x ~∃y R(x, y), que equivale a ∃x ∀y ~R(x, y). Em palavras: se não é verdade que todo x se relaciona com algum y, então existe um x que não se relaciona com nenhum y.\n\n∀x ∃y ~R(x, y) só nega a relação, sem trocar os quantificadores. ∃x ∃y ~R(x, y) é fraca demais: basta um par sem relação. ∀x ∀y ~R(x, y) é forte demais: exige que nenhum par se relacione. E ∃y ∀x ~R(x, y) inverte os papéis de x e y, descrevendo um y com o qual ninguém se relaciona.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Das equivalências abaixo, entre sentenças da lógica de predicados, apenas uma NÃO é válida. Qual é ela?",
    opcoes: [
      "∀x (P(x) ∧ Q(x)) ≡ ∀x P(x) ∧ ∀x Q(x)",
      "∀x (P(x) ∨ Q(x)) ≡ ∀x P(x) ∨ ∀x Q(x)",
      "∃x (P(x) ∨ Q(x)) ≡ ∃x P(x) ∨ ∃x Q(x)",
      "~∃x P(x) ≡ ∀x ~P(x)",
      "~∀x P(x) ≡ ∃x ~P(x)",
    ],
    correta: 1,
    explicacao:
      "Para ∀x (P(x) ∨ Q(x)) ser verdadeira, basta que cada elemento tenha P ou Q — cada um pode ter uma propriedade diferente. Já ∀x P(x) ∨ ∀x Q(x) exige que todos tenham P, ou que todos tenham Q. Num universo com dois elementos, um só com P e outro só com Q, o lado esquerdo é verdadeiro e o direito é falso. Essa equivalência não vale.\n\nAs outras são leis conhecidas. O “para todo” se distribui sobre o “e”, e o “existe” se distribui sobre o “ou”. E as duas últimas são as regras de negação dos quantificadores: “não existe x com P” é “todo x não tem P”, e “nem todo x tem P” é “existe x sem P”.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Sendo A(x): “x é aluno da turma” e R(x): “x é repetente”, qual sentença da lógica de predicados traduz “Nenhum aluno da turma é repetente”?",
    opcoes: [
      "∀x (~A(x) → R(x))",
      "∀x (A(x) → ~R(x))",
      "∃x (A(x) ∧ ~R(x))",
      "~∀x (A(x) → R(x))",
      "∀x (R(x) → A(x))",
    ],
    correta: 1,
    explicacao:
      "“Nenhum aluno da turma é repetente” diz que, para qualquer x, se x é aluno da turma, então x não é repetente: ∀x (A(x) → ~R(x)). Uma forma equivalente é ~∃x (A(x) ∧ R(x)), “não existe aluno da turma que seja repetente”.\n\n∀x (~A(x) → R(x)) diz que quem não é da turma é repetente, algo sem relação com a frase. ∃x (A(x) ∧ ~R(x)) diz só que algum aluno não é repetente. ~∀x (A(x) → R(x)) nega “todo aluno é repetente”, o que também é mais fraco. E ∀x (R(x) → A(x)) diz que todo repetente é da turma — quase o contrário da frase.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que a sentença ∃x ∀y R(x, y) é verdadeira, qual das sentenças abaixo é necessariamente verdadeira?",
    opcoes: [
      "∀x ∃y R(x, y)",
      "∀x ∀y R(x, y)",
      "∃y ∀x R(x, y)",
      "∀x ∃y ~R(x, y)",
      "∀y ∃x R(x, y)",
    ],
    correta: 4,
    explicacao:
      "Se existe um x que se relaciona com todos os y, esse mesmo x serve de testemunha para cada y: para todo y, existe um x (sempre o mesmo) com R(x, y). Por isso ∃x ∀y R(x, y) implica ∀y ∃x R(x, y). Exemplo: se existe um professor que conhece todos os alunos, então todo aluno é conhecido por algum professor.\n\nAs demais não decorrem. ∀x ∃y R(x, y) exigiria que todo x se relacionasse com alguém, mas só um x tem essa garantia. ∀x ∀y R(x, y) exige que todos se relacionem com todos. ∃y ∀x R(x, y) troca os papéis de x e y. E ∀x ∃y ~R(x, y) falha quando o único elemento do universo se relaciona consigo mesmo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que é verdadeira a afirmação “Existe um livro que todos os alunos da turma leram”, qual das afirmações abaixo é necessariamente verdadeira?",
    opcoes: [
      "Todo livro foi lido por pelo menos um aluno da turma",
      "Todo aluno da turma leu pelo menos um livro",
      "Todo aluno da turma leu todos os livros",
      "Algum aluno da turma leu todos os livros",
      "Existe um livro que algum aluno da turma não leu",
    ],
    correta: 1,
    explicacao:
      "Se existe um livro que todos os alunos leram, esse livro serve para cada aluno: todo aluno leu pelo menos aquele livro. Por isso “todo aluno da turma leu pelo menos um livro” é necessariamente verdadeira.\n\nAs outras não são garantidas. Pode haver livros que ninguém leu, então nem todo livro foi lido por algum aluno, e nem todo aluno leu todos os livros. Também é possível que nenhum aluno tenha lido todos: cada um leu o livro comum e mais nada, havendo outros livros. E “existe um livro que algum aluno não leu” falha se houver um único livro, lido por todos.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Qual número é um contraexemplo para a afirmação “Todo número ímpar maior que 1 é primo”?",
    opcoes: [
      "7",
      "2",
      "13",
      "9",
      "11",
    ],
    correta: 3,
    explicacao:
      "Um contraexemplo para “todo X é Y” é um caso que é X e não é Y. Aqui, precisa ser um número ímpar, maior que 1, e que não seja primo. O 9 é ímpar, maior que 1 e tem o divisor 3 (9 = 3 × 3), então não é primo: basta ele para mostrar que a afirmação é falsa.\n\n7, 11 e 13 são ímpares e primos, então confirmam a regra em vez de derrubá-la. O 2 é primo, mas é par — não pertence ao grupo de que a afirmação fala, por isso não serve como contraexemplo. Para refutar uma afirmação universal, um único contraexemplo é suficiente.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "A afirmação “Todo múltiplo de 4 é múltiplo de 8” é falsa. Qual número serve de contraexemplo para ela?",
    opcoes: [
      "16",
      "12",
      "24",
      "10",
      "40",
    ],
    correta: 1,
    explicacao:
      "O contraexemplo precisa ser múltiplo de 4 e, ao mesmo tempo, não ser múltiplo de 8. O 12 é múltiplo de 4 (12 = 4 × 3), mas não de 8 (12 ÷ 8 = 1,5). Ele pertence ao grupo de que a afirmação fala e não tem a propriedade prometida, o que basta para derrubá-la.\n\n16, 24 e 40 são múltiplos de 4 e também de 8, então estão de acordo com a afirmação. O 10 nem é múltiplo de 4 (10 ÷ 4 = 2,5): fica fora do grupo e não testa a regra. Todo múltiplo de 8 é múltiplo de 4, mas a recíproca, que é a afirmação dada, é falsa.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Qual das afirmações abaixo, sobre números inteiros positivos, é verdadeira?",
    opcoes: [
      "Todo múltiplo de 3 é múltiplo de 6",
      "Nenhum número par é múltiplo de 3",
      "Todo múltiplo de 6 é múltiplo de 3",
      "Algum número ímpar é múltiplo de 2",
      "Todo número primo é ímpar",
    ],
    correta: 2,
    explicacao:
      "Se um número é múltiplo de 6, ele é 6 × k para algum inteiro k, e 6 × k = 3 × (2k): portanto é múltiplo de 3. Todo múltiplo de 6 está dentro do grupo dos múltiplos de 3.\n\nA recíproca é falsa: 3, 9 e 15 são múltiplos de 3 e não de 6. “Nenhum par é múltiplo de 3” cai com o 6. “Algum ímpar é múltiplo de 2” é impossível — ser múltiplo de 2 é justamente a definição de par. E “todo primo é ímpar” cai com o 2, o único primo par. Para derrubar um “todo” ou um “nenhum”, basta um contraexemplo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "dificil",
    enunciado:
      "Considerando os números inteiros (positivos, negativos e o zero), qual das afirmações abaixo é falsa?",
    opcoes: [
      "Para todo inteiro n, o número n² + n é par",
      "Existe um inteiro n tal que n² = n",
      "Para todo inteiro n, existe um inteiro m maior que n",
      "Para todo inteiro n, vale n² ≥ n",
      "Para todo inteiro n, o número n² + 1 é ímpar",
    ],
    correta: 4,
    explicacao:
      "Para derrubar uma afirmação do tipo “para todo”, basta um contraexemplo. Com n = 1, n² + 1 = 2, que é par; logo, “para todo inteiro n, n² + 1 é ímpar” é falsa. Na verdade, n² + 1 é par sempre que n é ímpar.\n\nAs outras são verdadeiras. n² + n = n(n + 1) é produto de dois inteiros consecutivos, e um deles é par. n² = n tem as soluções 0 e 1, então existe inteiro com essa propriedade. Para todo n, o inteiro m = n + 1 é maior que n. E n² ≥ n equivale a n(n − 1) ≥ 0, o que vale para todo inteiro, pois não há inteiro entre 0 e 1.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Numa equipe de 8 pessoas, são verdadeiras as frases “Alguém da equipe fala espanhol” e “Nem todos da equipe falam espanhol”. Quantas pessoas da equipe falam espanhol, no mínimo e no máximo?",
    opcoes: [
      "No mínimo 1 e no máximo 8",
      "No mínimo 0 e no máximo 7",
      "Exatamente 4",
      "No mínimo 1 e no máximo 7",
      "No mínimo 2 e no máximo 6",
    ],
    correta: 3,
    explicacao:
      "“Alguém fala espanhol” garante pelo menos uma pessoa que fala; então o mínimo é 1. “Nem todos falam espanhol” garante pelo menos uma que não fala; então, das 8, no máximo 7 falam. Qualquer número de 1 a 7 é compatível com as duas informações.\n\nChegar a 8 contraria o “nem todos”. Aceitar 0 contraria o “alguém”. “Exatamente 4” escolhe um valor sem apoio: as frases com “alguém” e “nem todos” não falam de metade nem de maioria. E limitar entre 2 e 6 exclui casos possíveis, como uma única pessoa falando espanhol.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Considere as premissas: “Todo servidor com mais de dez anos de casa recebe adicional” e “Rosa é servidora e não recebe adicional”. Qual conclusão é válida?",
    opcoes: [
      "Rosa tem mais de dez anos de casa",
      "Algum servidor com mais de dez anos de casa não recebe adicional",
      "Rosa não tem mais de dez anos de casa",
      "Nenhum servidor com até dez anos de casa recebe adicional",
      "Todos os que recebem adicional têm mais de dez anos de casa",
    ],
    correta: 2,
    explicacao:
      "Aplicada a Rosa, que é servidora, a primeira premissa diz: se Rosa tem mais de dez anos de casa, recebe adicional. Ela não recebe; então, pelo modus tollens, não tem mais de dez anos de casa.\n\nAfirmar que ela tem mais de dez anos contradiz as premissas. “Algum servidor com mais de dez anos não recebe adicional” nega a primeira premissa. “Nenhum servidor com até dez anos recebe adicional” e “todos os que recebem adicional têm mais de dez anos” não decorrem: a regra diz quem certamente recebe, não que só essas pessoas recebem.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "facil",
    enunciado:
      "Um edital afirma: “Qualquer candidato com deficiência pode pedir atendimento especial”. Essa frase equivale a qual das afirmações abaixo?",
    opcoes: [
      "Pelo menos um candidato com deficiência pode pedir atendimento especial",
      "Todo candidato com deficiência pode pedir atendimento especial",
      "Só os candidatos com deficiência podem pedir atendimento especial",
      "Algum candidato com deficiência não pode pedir atendimento especial",
      "Todo candidato sem deficiência pode pedir atendimento especial",
    ],
    correta: 1,
    explicacao:
      "“Qualquer”, numa afirmação geral, tem o sentido de “todo”: qualquer candidato com deficiência, seja qual for, pode pedir atendimento especial. A frase equivale a “todo candidato com deficiência pode pedir atendimento especial”.\n\n“Pelo menos um candidato com deficiência pode pedir” é mais fraca: seria verdadeira mesmo se só um tivesse o direito. “Só os candidatos com deficiência podem pedir” acrescenta uma exclusividade que a frase não tem — outros grupos podem ter o mesmo direito. “Algum candidato com deficiência não pode pedir” contradiz a frase. E a afirmação sobre quem não tem deficiência fala de outro grupo.",
  },
  {
    materia: "raciocinio-logico",
    tema: "Quantificadores: todo, algum, nenhum",
    dificuldade: "media",
    enunciado:
      "Qual é a negação da afirmação “No máximo dois voos atrasaram hoje”?",
    opcoes: [
      "Pelo menos dois voos atrasaram hoje",
      "Exatamente três voos atrasaram hoje",
      "No máximo três voos atrasaram hoje",
      "Menos de dois voos atrasaram hoje",
      "Pelo menos três voos atrasaram hoje",
    ],
    correta: 4,
    explicacao:
      "“No máximo dois voos atrasaram” significa que o número de atrasos é 0, 1 ou 2. A negação precisa cobrir exatamente os casos restantes: 3, 4, 5 ou mais atrasos. Isso é “pelo menos três voos atrasaram”.\n\n“Pelo menos dois” inclui o caso de 2 atrasos, que torna a frase original verdadeira — então não pode ser a negação. “Exatamente três” deixa de fora 4, 5 ou mais. “No máximo três” inclui 0, 1 e 2, que são casos da frase original. E “menos de dois” é um caso particular da própria frase original, e não a sua negação.",
  },
];
