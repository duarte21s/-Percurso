/* Interpretação e compreensão de texto — parte B (25 questões).
   Leitura crítica de dados, ponto de vista, ambiguidade, discurso citado e
   relações entre partes do texto. Todos os textos-base estão no enunciado.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Os índices de reciclagem cresceram 12% no último ano. Ainda assim, o volume reciclado corresponde a menos de 3% de todo o lixo produzido no país.\" A leitura mais adequada desse trecho é a de que:",
    opcoes: [
      "o país atingiu uma situação satisfatória em reciclagem.",
      "houve avanço, mas o resultado permanece muito aquém do necessário.",
      "os índices de reciclagem caíram em relação ao ano anterior.",
      "a produção de lixo diminuiu por causa da reciclagem.",
      "os dados apresentados se contradizem e não podem ser aceitos.",
    ],
    correta: 1,
    explicacao:
      "O crescimento de 12% é real, mas incide sobre uma base muito pequena, e o texto faz questão de contextualizá-lo com o percentual absoluto. Os dois dados não se contradizem: um é variação, outro é participação no total. Confundir crescimento percentual com patamar alcançado é justamente o equívoco que o trecho antecipa.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Vi o homem com o binóculo.\" Esse enunciado é considerado ambíguo porque permite entender que:",
    opcoes: [
      "o falante não viu ninguém de fato.",
      "o binóculo pertencia ao falante com certeza.",
      "o binóculo estava quebrado no momento.",
      "tanto o falante quanto o homem podem estar com o binóculo.",
      "o homem estava distante demais para ser identificado.",
    ],
    correta: 3,
    explicacao:
      "A expressão \"com o binóculo\" pode se ligar ao verbo, indicando o instrumento usado para ver, ou ao substantivo \"homem\", caracterizando quem era visto. Essa dupla possibilidade de ligação sintática é a fonte da ambiguidade. Para desfazê-la, bastaria reordenar: \"Com o binóculo, vi o homem\".",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"A pesquisadora afirmou: 'Os resultados ainda são preliminares'.\" No trecho, o uso das aspas indica que:",
    opcoes: [
      "as palavras foram reproduzidas exatamente como ditas.",
      "o autor discorda do conteúdo da afirmação.",
      "o termo entre aspas foi usado em sentido irônico.",
      "trata-se de um estrangeirismo não adaptado.",
      "houve corte de parte do texto original.",
    ],
    correta: 0,
    explicacao:
      "As aspas, precedidas de dois-pontos e de verbo de elocução, marcam discurso direto: a fala é transcrita literalmente e atribuída a quem a proferiu. Em outros contextos, elas podem sinalizar ironia ou uso incomum de uma palavra, mas aqui a estrutura da frase deixa claro tratar-se de citação.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Segundo dados do ministério, o número de matrículas aumentou.\" A expressão \"segundo dados do ministério\" cumpre no enunciado a função de:",
    opcoes: [
      "expressar a opinião pessoal de quem escreve.",
      "indicar dúvida sobre a veracidade da informação.",
      "atribuir a informação a uma fonte identificada.",
      "estabelecer comparação com outro período.",
      "introduzir uma condição para o aumento.",
    ],
    correta: 2,
    explicacao:
      "A expressão marca a origem do dado e transfere a responsabilidade da afirmação para a fonte citada, prática típica do texto jornalístico. Isso é diferente de duvidar da informação: o autor apenas indica de onde ela vem, permitindo que o leitor avalie sua confiabilidade.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Se todos separassem o lixo corretamente, os aterros durariam muito mais.\" O emprego das formas verbais nesse período indica que a situação descrita é:",
    opcoes: [
      "um fato ocorrido no passado recente.",
      "uma ordem dirigida ao leitor.",
      "uma certeza sobre o futuro próximo.",
      "uma hipótese ainda não realizada.",
      "uma regra permanente e inquestionável.",
    ],
    correta: 3,
    explicacao:
      "O par formado por imperfeito do subjuntivo e futuro do pretérito constrói uma hipótese: algo que aconteceria caso a condição fosse cumprida, o que ainda não ocorre. Não há ordem, porque não se usa imperativo, nem certeza sobre o futuro, que exigiria o futuro do presente.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Compre agora e leve dois pelo preço de um. Promoção válida somente hoje!\" O recurso usado para persuadir o leitor nesse texto é:",
    opcoes: [
      "a criação de senso de urgência.",
      "a apresentação de dados científicos.",
      "a citação de autoridade no assunto.",
      "a comparação com produtos concorrentes.",
      "o relato de experiências de outros clientes.",
    ],
    correta: 0,
    explicacao:
      "A limitação temporal — \"somente hoje\" — pressiona o leitor a decidir rápido, reduzindo o tempo de reflexão. É uma estratégia clássica da publicidade, combinada aqui com o imperativo \"compre\". Não há qualquer dado, especialista ou depoimento no texto que sustente as demais alternativas.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"O time jogou mal, errou passes e perdeu chances claras. Venceu por 3 a 0.\" O efeito produzido pela última frase é de:",
    opcoes: [
      "confirmação natural do que foi dito antes.",
      "explicação técnica das falhas apontadas.",
      "quebra de expectativa em relação ao trecho anterior.",
      "repetição enfática da mesma informação.",
      "correção de um erro cometido na primeira frase.",
    ],
    correta: 2,
    explicacao:
      "A sequência de críticas prepara o leitor para uma derrota, e o placar contraria essa previsão. A ausência de conectivo torna o contraste ainda mais abrupto. Esse recurso de frustrar a expectativa é frequente em crônicas esportivas e em textos humorísticos.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"É evidente que qualquer pessoa razoável apoiaria a medida.\" Do ponto de vista argumentativo, esse enunciado é problemático porque:",
    opcoes: [
      "apresenta dados numéricos sem indicar a metodologia.",
      "utiliza vocabulário técnico inacessível ao leitor comum.",
      "cita uma autoridade sem identificá-la corretamente.",
      "sugere que discordar equivale a ser irracional.",
      "emprega linguagem informal em contexto formal.",
    ],
    correta: 3,
    explicacao:
      "Ao vincular o apoio à medida à qualidade de ser \"razoável\", o enunciado desqualifica antecipadamente qualquer divergência, em vez de apresentar razões. É um recurso persuasivo que substitui o argumento pela pressão. Um texto argumentativo consistente sustentaria a medida por seus efeitos, não pela suposta racionalidade de quem a apoia.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Cuidado: piso escorregadio.\" A função da linguagem predominante nesse enunciado é a:",
    opcoes: [
      "conativa, voltada para influenciar o comportamento do receptor.",
      "poética, centrada na forma da mensagem.",
      "metalinguística, voltada para o próprio código.",
      "emotiva, centrada nos sentimentos do emissor.",
      "fática, voltada para testar o canal de comunicação.",
    ],
    correta: 0,
    explicacao:
      "O aviso se dirige diretamente a quem lê e busca provocar uma mudança imediata de conduta — atenção redobrada ao caminhar. Essa centralidade no receptor caracteriza a função conativa, marcada aqui pelo substantivo de valor imperativo. Não há preocupação estética nem expressão de sentimentos.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"A cidade cresceu desordenadamente. Por isso, hoje enfrenta enchentes a cada temporada de chuvas.\" A expressão \"por isso\" estabelece relação de:",
    opcoes: [
      "oposição entre os dois fatos.",
      "conclusão decorrente do fato anterior.",
      "condição para que as enchentes ocorram.",
      "comparação entre dois períodos históricos.",
      "concessão a um argumento contrário.",
    ],
    correta: 1,
    explicacao:
      "\"Por isso\" apresenta a segunda frase como decorrência da primeira: o crescimento desordenado é a causa, e as enchentes, o efeito. Poderia ser substituída por \"portanto\" ou \"logo\". Se houvesse oposição, o conectivo adequado seria \"mesmo assim\", e o sentido se inverteria.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Ela não gostou do presente — pelo menos foi o que me pareceu.\" O trecho após o travessão tem a função de:",
    opcoes: [
      "confirmar categoricamente a informação anterior.",
      "citar textualmente a fala de outra pessoa.",
      "relativizar a afirmação, marcando-a como impressão pessoal.",
      "acrescentar um dado factual verificável.",
      "encerrar o assunto de forma definitiva.",
    ],
    correta: 2,
    explicacao:
      "O acréscimo transforma o que parecia constatação em avaliação subjetiva do falante, reduzindo o grau de certeza do enunciado. Esse recurso é chamado de modalização. Sem ele, a frase afirmaria como fato algo que o falante só supõe.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"A reforma foi aprovada. Os trabalhadores, no entanto, prometem resistir.\" A palavra \"no entanto\" poderia ser substituída, sem alteração de sentido, por:",
    opcoes: ["portanto", "porque", "assim que", "além disso", "todavia"],
    correta: 4,
    explicacao:
      "\"No entanto\" e \"todavia\" são conectivos adversativos e marcam contraste entre as ideias. \"Portanto\" indicaria conclusão e \"porque\", causa — ambos mudariam a relação lógica. Trocar conectivos sem atenção ao valor semântico é uma das principais fontes de incoerência em redações.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Pesquisa mostra que cidades com mais sorveterias têm mais casos de afogamento.\" A conclusão de que o consumo de sorvete causa afogamentos é inadequada porque:",
    opcoes: [
      "a pesquisa não informa o número exato de sorveterias.",
      "afogamentos só ocorrem em cidades litorâneas.",
      "sorveterias não são estabelecimentos regulamentados.",
      "a pesquisa não foi publicada em revista científica.",
      "os dois fenômenos podem decorrer de um terceiro fator comum.",
    ],
    correta: 4,
    explicacao:
      "O calor aumenta ao mesmo tempo o consumo de sorvete e a frequência de banhos em água, o que explica a associação sem que uma coisa cause a outra. Correlação não implica causalidade — reconhecer variáveis ocultas é essencial na leitura crítica de dados. As demais alternativas apontam detalhes que não afetam o raciocínio.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Era uma casa baixa, de janelas azuis e telhado remendado, encostada no barranco como quem pede licença.\" O trecho é predominantemente:",
    opcoes: [
      "argumentativo, com defesa de um ponto de vista.",
      "injuntivo, com instruções de uso.",
      "expositivo, com apresentação de conceitos.",
      "descritivo, com caracterização detalhada.",
      "dissertativo, com análise de causas sociais.",
    ],
    correta: 3,
    explicacao:
      "O trecho acumula características visuais e físicas da casa, sem que nenhuma ação se desenrole: é descrição. A comparação final acrescenta um traço de subjetividade, mas não altera o tipo textual. A narração exigiria fatos em sucessão temporal, o que não ocorre.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Metade dos entrevistados aprova a proposta.\" Para avaliar corretamente o peso dessa informação, é indispensável saber:",
    opcoes: [
      "o nome da instituição que redigiu a proposta.",
      "o horário em que a pesquisa foi divulgada.",
      "quantas pessoas foram entrevistadas e como foram escolhidas.",
      "a opinião pessoal do jornalista responsável.",
      "se a proposta já foi aprovada em outros países.",
    ],
    correta: 2,
    explicacao:
      "Um percentual só ganha significado quando se conhece o tamanho e a representatividade da amostra: metade de dez pessoas escolhidas ao acaso na rua não equivale a metade de dois mil entrevistados selecionados por critérios estatísticos. Sem esse dado, a informação percentual pode induzir a conclusões equivocadas.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"O professor disse que a prova seria adiada.\" Esse enunciado apresenta a fala de outra pessoa na forma de:",
    opcoes: [
      "discurso direto, com reprodução literal.",
      "discurso indireto, com integração à fala do narrador.",
      "discurso indireto livre, sem verbo introdutor.",
      "monólogo interior do próprio professor.",
      "citação de autoridade com fonte identificada.",
    ],
    correta: 1,
    explicacao:
      "A fala aparece subordinada por \"que\" e adaptada ao tempo verbal do relato, sem aspas nem travessão: é discurso indireto. No direto, teríamos: O professor disse: \"A prova será adiada\". A conversão exige ajustes de tempo verbal e de pronomes, e é aí que costumam surgir os erros.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Não se trata de escolher entre desenvolvimento e meio ambiente: a falsa oposição entre os dois é que precisa ser superada.\" Com essa formulação, o autor pretende:",
    opcoes: [
      "defender o desenvolvimento econômico sem restrições.",
      "priorizar a preservação ambiental sobre qualquer outra pauta.",
      "rejeitar os termos em que o debate costuma ser colocado.",
      "afirmar que o tema não merece discussão pública.",
      "propor a suspensão de todos os projetos de infraestrutura.",
    ],
    correta: 2,
    explicacao:
      "Em vez de tomar partido em uma alternativa apresentada como excludente, o autor questiona a própria formulação do dilema, classificando-o como falso. É um movimento argumentativo que recusa a pergunta antes de respondê-la. As alternativas que escolhem um dos lados fazem exatamente o que o texto rejeita.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Ele estudou muito. Passou no concurso.\" A relação de sentido entre as duas frases, ainda que não marcada por conectivo, é de:",
    opcoes: [
      "oposição entre esforço e resultado.",
      "causa e consequência.",
      "comparação entre dois candidatos.",
      "condição não realizada.",
      "concessão a um obstáculo.",
    ],
    correta: 1,
    explicacao:
      "O estudo aparece como razão da aprovação, e a simples ordem das frases já sugere esse encadeamento. Poderíamos explicitá-lo com \"por isso\" ou \"portanto\". Relações lógicas nem sempre precisam de conectivo: muitas vezes são construídas pela sequência e pelo conhecimento de mundo do leitor.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Os moradores reclamam da falta de iluminação. A prefeitura informa que o serviço será licitado no próximo semestre.\" A organização desse trecho evidencia:",
    opcoes: [
      "a adesão do autor à versão dos moradores.",
      "uma crítica direta à atuação da prefeitura.",
      "a ausência total de informação sobre o caso.",
      "uma proposta de solução formulada pelo autor.",
      "a apresentação de dois pontos de vista sobre o mesmo problema.",
    ],
    correta: 4,
    explicacao:
      "O texto expõe a queixa de um lado e a resposta oficial do outro, sem emitir juízo sobre qual está correto. Essa contraposição de versões é procedimento padrão do texto jornalístico informativo. Verbos neutros como \"reclamam\" e \"informa\" reforçam a ausência de tomada de posição.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Chegamos ao aeroporto com folga. O voo, porém, havia sido antecipado.\" O tempo verbal composto \"havia sido antecipado\" indica que a antecipação ocorreu:",
    opcoes: [
      "depois da chegada ao aeroporto.",
      "no exato momento da chegada.",
      "em um momento indeterminado do futuro.",
      "simultaneamente à compra das passagens.",
      "antes da chegada ao aeroporto.",
    ],
    correta: 4,
    explicacao:
      "O pretérito mais-que-perfeito composto marca um fato anterior a outro fato já passado: quando o grupo chegou, a antecipação já havia acontecido. É justamente essa anterioridade que explica o efeito de surpresa do trecho. Confundi-la com posterioridade desfaria o sentido da narrativa.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"A empresa demitiu 200 funcionários. Em nota, chamou a medida de 'ajuste de quadro'.\" O uso das aspas na expressão citada sugere que o autor:",
    opcoes: [
      "toma distância da expressão usada pela empresa.",
      "concorda plenamente com a escolha do termo.",
      "está reproduzindo um termo técnico da economia.",
      "cometeu um erro de digitação no texto.",
      "pretende definir o conceito para o leitor.",
    ],
    correta: 0,
    explicacao:
      "Ao isolar a expressão, o autor sinaliza que ela é da empresa, e não sua, marcando reserva quanto ao eufemismo que suaviza as demissões. Esse uso das aspas é diferente da citação neutra: aqui há um distanciamento crítico. O contraste entre o dado cru e o termo escolhido reforça esse efeito.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Que tarde bonita!\" A função da linguagem predominante nesse enunciado é a:",
    opcoes: [
      "referencial, centrada na informação objetiva.",
      "metalinguística, centrada no código.",
      "fática, centrada no canal.",
      "conativa, centrada no receptor.",
      "emotiva, centrada na expressão do emissor.",
    ],
    correta: 4,
    explicacao:
      "A exclamação revela a reação subjetiva de quem fala diante da paisagem, sem transmitir informação objetiva nem pedir ação do interlocutor. Essa centralidade no emissor caracteriza a função emotiva, também chamada de expressiva. A função referencial exigiria dados verificáveis sobre a tarde.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "dificil",
    enunciado:
      "Leia: \"Ou o país investe em educação, ou continuará estagnado.\" A estrutura argumentativa empregada nesse enunciado caracteriza:",
    opcoes: [
      "uma exemplificação a partir de casos concretos.",
      "uma analogia entre dois campos distintos.",
      "uma citação implícita de especialista.",
      "um falso dilema, que reduz as opções a duas.",
      "uma concessão seguida de refutação.",
    ],
    correta: 3,
    explicacao:
      "A construção \"ou X, ou Y\" apresenta apenas duas saídas para um problema que admite muitas outras — investimentos simultâneos em infraestrutura, saúde e ciência, por exemplo. Reduzir artificialmente as alternativas fortalece o efeito retórico, mas enfraquece o rigor do argumento. É uma falácia conhecida como falso dilema.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "media",
    enunciado:
      "Leia: \"Foi um sucesso: apenas doze pessoas compareceram ao evento, previsto para receber quinhentas.\" O efeito de sentido do trecho é obtido por meio de:",
    opcoes: [
      "hipérbole, com exagero proposital dos números.",
      "ironia, pela contradição entre a avaliação e os dados.",
      "metáfora, com comparação implícita entre dois campos.",
      "eufemismo, com suavização de uma informação dura.",
      "prosopopeia, com atribuição de vida a seres inanimados.",
    ],
    correta: 1,
    explicacao:
      "A palavra \"sucesso\" é imediatamente contradita pelos números apresentados, e essa distância entre o dito e o pretendido produz ironia. Os dados não estão exagerados, o que afasta a hipérbole, nem suavizados, o que afasta o eufemismo — eles são justamente o que desmente a avaliação inicial.",
  },
  {
    materia: "portugues",
    tema: "Interpretação e compreensão de texto",
    dificuldade: "facil",
    enunciado:
      "Leia: \"Verbete — Sustentabilidade: capacidade de atender às necessidades do presente sem comprometer as gerações futuras.\" A finalidade desse texto é:",
    opcoes: [
      "definir um termo, esclarecendo seu significado.",
      "narrar a origem histórica do conceito.",
      "convencer o leitor a adotar práticas sustentáveis.",
      "descrever uma paisagem natural preservada.",
      "instruir o leitor sobre como reciclar resíduos.",
    ],
    correta: 0,
    explicacao:
      "A estrutura de termo seguido de explicação é característica do verbete, cuja função é definir. Não há defesa de ponto de vista, o que afastaria a intenção persuasiva, nem sequência de instruções. A linguagem objetiva e impessoal reforça o caráter de referência.",
  },
];
