/* Imunologia e vacinas (50 questões).
   Imunidade inata e adaptativa, anticorpos e antígenos, linfócitos,
   tipos de vacina, imunização coletiva e memória imunológica.
   Ver biologia__problemas-ambientais-brasileiros.mjs para o formato. */

export const questoes = [
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "O sistema imunológico é o conjunto de células, tecidos e órgãos responsável por defender o organismo contra agentes invasores, como vírus, bactérias e outros micro-organismos patogênicos. A primeira linha de defesa do corpo contra esses invasores, presente antes mesmo de qualquer infecção específica, é chamada de:",
    opcoes: [
      "imunidade inata, que inclui barreiras físicas como a pele e respostas gerais e rápidas",
      "imunidade adaptativa, que exige contato prévio com o patógeno específico",
      "memória imunológica, formada apenas após uma vacinação",
      "imunidade artificial, adquirida exclusivamente por vacinas",
      "resposta alérgica, exclusiva de reações a substâncias inofensivas",
    ],
    correta: 0,
    explicacao:
      "A imunidade inata é a defesa mais imediata e geral do corpo, presente desde o nascimento e não específica para um patógeno em particular, incluindo barreiras físicas como a pele e as mucosas, além de células de defesa que respondem rapidamente a qualquer sinal de invasão, sem exigir exposição prévia ao agente invasor.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "A pele é considerada a primeira barreira física de defesa do corpo contra micro-organismos, fazendo parte da imunidade inata. Além de servir como barreira física, a pele também contribui para a defesa do organismo por meio de:",
    opcoes: [
      "secreções levemente ácidas que dificultam a proliferação de muitos micro-organismos em sua superfície",
      "produção direta de anticorpos específicos contra cada tipo de vírus",
      "produção de vacinas naturais contra qualquer doença",
      "eliminação completa de qualquer possibilidade de infecção no corpo",
      "geração de memória imunológica duradoura contra patógenos específicos",
    ],
    correta: 0,
    explicacao:
      "Além da barreira física que impede a entrada direta de micro-organismos, a superfície da pele apresenta um pH levemente ácido, resultado de secreções como o suor, que dificulta a proliferação de muitos tipos de bactérias e fungos, complementando a proteção mecânica com uma defesa química adicional, ainda dentro do escopo da imunidade inata e geral do corpo.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "A imunidade adaptativa (ou específica) é a segunda grande linha de defesa do sistema imunológico, caracterizada por reconhecer e combater um agente invasor específico, além de gerar memória imunológica para respostas futuras mais rápidas. Comparada à imunidade inata, a imunidade adaptativa é:",
    opcoes: [
      "mais lenta para se desenvolver na primeira exposição, mas mais específica e capaz de gerar memória duradoura",
      "sempre mais rápida do que a imunidade inata em qualquer situação",
      "idêntica à imunidade inata em todos os aspectos",
      "presente apenas em bactérias, nunca em seres humanos",
      "incapaz de reconhecer qualquer patógeno específico",
    ],
    correta: 0,
    explicacao:
      "Diferentemente da resposta imediata e geral da imunidade inata, a imunidade adaptativa leva mais tempo para se desenvolver na primeira exposição a um patógeno específico, já que precisa 'aprender' a reconhecer esse invasor particular; em compensação, ela é altamente específica e, uma vez desenvolvida, gera memória imunológica que permite respostas muito mais rápidas e eficazes em exposições futuras ao mesmo patógeno.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "Os antígenos são moléculas, geralmente proteínas presentes na superfície de vírus, bactérias ou outras substâncias estranhas, capazes de desencadear uma resposta do sistema imunológico. Em resposta à presença de um antígeno específico, o sistema imunológico adaptativo produz:",
    opcoes: [
      "anticorpos, proteínas capazes de reconhecer e se ligar especificamente àquele antígeno",
      "vitaminas, que combatem diretamente qualquer infecção",
      "hormônios digestivos, sem qualquer relação com defesa imunológica",
      "glicose, para fornecer energia direta ao patógeno invasor",
      "gás carbônico, como subproduto da resposta imune",
    ],
    correta: 0,
    explicacao:
      "Os anticorpos são proteínas produzidas por células do sistema imunológico (os linfócitos B) especificamente moldadas para reconhecer e se ligar a um antígeno particular, marcando o patógeno para destruição por outras células de defesa ou neutralizando diretamente sua capacidade de infectar células do corpo — essa especificidade entre antígeno e anticorpo é comparada por vezes à relação entre uma chave e uma fechadura.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "Os linfócitos são um tipo de leucócito (glóbulo branco) especializado na resposta imunológica adaptativa, existindo dois tipos principais: linfócitos B, responsáveis pela produção de anticorpos, e linfócitos T, que desempenham diversas funções, incluindo a destruição direta de células infectadas. Esses dois tipos de linfócitos são produzidos, em última instância, a partir de células-tronco presentes:",
    opcoes: [
      "na medula óssea",
      "exclusivamente no cérebro",
      "exclusivamente nos pulmões",
      "exclusivamente no estômago",
      "exclusivamente na pele",
    ],
    correta: 0,
    explicacao:
      "Assim como as demais células sanguíneas, os linfócitos se originam de células-tronco hematopoéticas presentes na medula óssea; embora os linfócitos B completem sua maturação na própria medula óssea, os linfócitos T migram ainda imaturos para o timo, uma glândula localizada no tórax, onde completam seu desenvolvimento antes de circular pelo corpo prontos para atuar na resposta imunológica.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "As vacinas são preparações biológicas que estimulam o sistema imunológico a desenvolver proteção contra um patógeno específico, sem causar a doença completa. O princípio básico por trás do funcionamento das vacinas é:",
    opcoes: [
      "expor o sistema imunológico a uma versão enfraquecida, inativada ou a partes do patógeno, permitindo o desenvolvimento de memória imunológica sem a doença completa",
      "curar diretamente uma infecção já instalada e sintomática no organismo",
      "eliminar completamente a necessidade de qualquer sistema imunológico",
      "introduzir diretamente anticorpos prontos, sem qualquer estímulo ao próprio sistema imunológico",
      "impedir permanentemente qualquer futura resposta imunológica do corpo",
    ],
    correta: 0,
    explicacao:
      "Ao expor o sistema imunológico a uma versão segura do patógeno, seja ele enfraquecido, inativado, ou apenas fragmentos ou instruções para produzir partes específicas dele, a vacina permite que o corpo desenvolva anticorpos e células de memória contra aquele agente específico sem que a pessoa precise passar pela doença real e seus riscos associados, preparando o sistema imunológico para uma resposta rápida caso ocorra exposição futura ao patógeno verdadeiro.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "A memória imunológica é a capacidade do sistema imunológico de 'lembrar' de um patógeno específico após uma primeira exposição (seja por infecção natural ou por vacinação), permitindo uma resposta muito mais rápida e eficaz em exposições futuras ao mesmo agente. Essa memória é mantida principalmente por:",
    opcoes: [
      "anticorpos que permanecem circulando no sangue indefinidamente em quantidade máxima",
      "células de memória, um tipo especializado de linfócito que persiste no organismo por muito tempo após a exposição inicial",
      "vitaminas armazenadas no fígado",
      "hormônios produzidos exclusivamente durante o sono",
      "estruturas presentes exclusivamente na pele",
    ],
    correta: 1,
    explicacao:
      "Após uma exposição inicial a um patógeno, uma parte dos linfócitos ativados se diferencia em células de memória, que persistem no organismo por longos períodos, às vezes por décadas, prontas para reconhecer rapidamente o mesmo antígeno e desencadear uma resposta imunológica muito mais rápida e intensa caso o corpo seja exposto novamente àquele patógeno específico.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "A imunidade coletiva (ou de rebanho) é um fenômeno epidemiológico no qual uma proporção suficientemente alta de indivíduos imunizados em uma população, seja por vacinação ou por infecção prévia, reduz significativamente a circulação de um patógeno, protegendo indiretamente até mesmo pessoas não imunizadas. Essa proteção indireta é importante especialmente para:",
    opcoes: [
      "eliminar completamente qualquer necessidade de vacinação em qualquer contexto",
      "pessoas que não podem ser vacinadas por razões médicas, como bebês muito jovens ou indivíduos imunocomprometidos",
      "pessoas que preferem não seguir qualquer orientação médica",
      "aumentar a circulação do patógeno na população vacinada",
      "eliminar totalmente qualquer benefício individual da vacinação",
    ],
    correta: 1,
    explicacao:
      "Quando uma proporção suficientemente alta da população está imunizada, o patógeno tem dificuldade em encontrar hospedeiros suscetíveis para continuar se espalhando, o que reduz a circulação geral da doença e protege indiretamente pessoas que não podem ser vacinadas por razões médicas legítimas, como recém-nascidos muito jovens para certas vacinas ou pessoas com sistema imunológico comprometido que não podem recebê-las com segurança.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "As vacinas de vírus atenuado (ou vivo enfraquecido), como algumas formulações contra sarampo, caxumba e rubéola, utilizam uma versão enfraquecida do próprio vírus, ainda viva, mas incapaz de causar a doença completa em uma pessoa saudável. Essas vacinas costumam gerar uma resposta imunológica particularmente:",
    opcoes: [
      "fraca e de curtíssima duração, exigindo reforços diários",
      "forte e duradoura, muitas vezes exigindo menos doses de reforço ao longo da vida",
      "inexistente, sem qualquer efeito sobre o sistema imunológico",
      "exclusivamente alérgica, sem qualquer proteção real contra a doença",
      "idêntica à imunidade inata, sem qualquer especificidade",
    ],
    correta: 1,
    explicacao:
      "Como o vírus atenuado ainda é capaz de se replicar minimamente no organismo, mesmo sem causar doença significativa, ele simula de forma bastante realista uma infecção natural, o que costuma gerar uma resposta imunológica particularmente forte e duradoura, exigindo, em muitos casos, menos doses de reforço ao longo da vida em comparação a outros tipos de vacina.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "As vacinas de vírus inativado (ou morto), como certas formulações contra a poliomielite e a gripe, utilizam o patógeno completo, mas quimicamente tratado para eliminar sua capacidade de causar infecção, mantendo apenas sua capacidade de ser reconhecido pelo sistema imunológico. Comparadas às vacinas de vírus atenuado, as vacinas inativadas costumam:",
    opcoes: [
      "ser sempre proibidas para uso em qualquer faixa etária",
      "exigir mais doses de reforço ao longo do tempo, já que geram uma resposta imunológica geralmente menos duradoura",
      "conter o patógeno vivo e totalmente capaz de causar a doença",
      "eliminar completamente qualquer risco de qualquer vacina em geral",
      "ser idênticas em mecanismo às vacinas de RNA mensageiro",
    ],
    correta: 1,
    explicacao:
      "Como o patógeno na vacina inativada não consegue se replicar no organismo, a resposta imunológica gerada tende a ser menos intensa e duradoura do que a provocada por vacinas de vírus atenuado, exigindo com mais frequência doses de reforço periódicas para manter um nível adequado de proteção ao longo do tempo — em compensação, as vacinas inativadas costumam ser consideradas mais seguras para uso em pessoas com sistema imunológico comprometido, já que não há risco de o patógeno enfraquecido causar infecção.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre imunidade ativa, na qual o próprio sistema imunológico da pessoa produz anticorpos e células de memória em resposta a um antígeno (por infecção natural ou vacinação), e imunidade passiva, na qual anticorpos já prontos são transferidos de outra fonte para a pessoa. Um exemplo de imunidade passiva natural é a transferência de anticorpos:",
    opcoes: [
      "por meio de uma vacina de vírus atenuado",
      "da mãe para o bebê durante a gestação e pela amamentação",
      "por meio de uma vacina de RNA mensageiro",
      "produzida pelo próprio sistema imunológico do bebê após uma infecção",
      "por meio de uma vacina de vírus inativado",
    ],
    correta: 1,
    explicacao:
      "Durante a gestação, anticorpos maternos atravessam a placenta e chegam ao bebê, e após o nascimento, o leite materno, especialmente o colostro produzido nos primeiros dias, continua fornecendo anticorpos que oferecem proteção temporária ao recém-nascido enquanto seu próprio sistema imunológico ainda está amadurecendo — essa é considerada imunidade passiva porque o bebê não produziu esses anticorpos por conta própria, apenas os recebeu prontos de outra fonte.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre imunidade passiva natural, como a transferência de anticorpos maternos, e imunidade passiva artificial, como a administração de soro antiofídico após uma picada de cobra venenosa. Em ambos os casos, uma característica compartilhada dessa proteção passiva é que ela:",
    opcoes: [
      "sempre dura por toda a vida da pessoa, sem qualquer diminuição ao longo do tempo",
      "costuma ser mais rápida em oferecer proteção, mas menos duradoura do que a imunidade ativa, já que não envolve produção própria de células de memória",
      "exige que o próprio corpo produza os anticorpos ao longo de semanas antes de fazer efeito",
      "nunca é utilizada em situações médicas de emergência",
      "gera sempre memória imunológica duradoura, assim como a imunidade ativa",
    ],
    correta: 1,
    explicacao:
      "Como os anticorpos são recebidos prontos, sem que o próprio sistema imunológico da pessoa precise produzi-los, a imunidade passiva oferece proteção imediata, o que é particularmente útil em situações de emergência, como o soro antiofídico após uma picada de cobra; porém, como não há produção de células de memória próprias, essa proteção tende a ser temporária, diminuindo à medida que os anticorpos recebidos são naturalmente degradados pelo organismo ao longo do tempo.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a resposta imunológica primária, que ocorre na primeira exposição a um antígeno específico, e a resposta imunológica secundária, que ocorre em exposições subsequentes ao mesmo antígeno. Graças à presença de células de memória formadas após a primeira exposição, a resposta secundária costuma ser:",
    opcoes: [
      "sempre mais lenta e mais fraca do que a resposta primária",
      "idêntica em velocidade e intensidade à resposta primária, sem qualquer diferença",
      "mais rápida e mais intensa do que a resposta primária, frequentemente eliminando o patógeno antes mesmo que sintomas significativos apareçam",
      "completamente ausente, sem qualquer resposta imunológica adicional",
      "exclusiva de pessoas que nunca foram vacinadas anteriormente",
    ],
    correta: 2,
    explicacao:
      "Graças à presença de células de memória que já 'conhecem' aquele antígeno específico, a resposta imunológica secundária é tipicamente muito mais rápida e mais intensa do que a resposta primária da primeira exposição, muitas vezes conseguindo neutralizar o patógeno antes mesmo que ele consiga se multiplicar o suficiente para causar sintomas perceptíveis — é esse princípio de resposta secundária acelerada que fundamenta a proteção conferida pelas vacinas.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa as vacinas de subunidade, que utilizam apenas fragmentos específicos de um patógeno, como proteínas isoladas de sua superfície, em vez do micro-organismo completo, atenuado ou inativado. Uma vantagem potencial desse tipo de vacina é:",
    opcoes: [
      "conter sempre o patógeno vivo e completo, com risco elevado de causar a doença",
      "eliminar totalmente qualquer possibilidade de gerar proteção imunológica",
      "reduzir o risco de efeitos colaterais associados a componentes desnecessários do patógeno completo, já que apenas as partes relevantes para a resposta imune são utilizadas",
      "não ter qualquer aplicação prática real em vacinas atualmente disponíveis",
      "exigir necessariamente cultivo do patógeno vivo completo em laboratório",
    ],
    correta: 2,
    explicacao:
      "Ao utilizar apenas fragmentos específicos e cuidadosamente selecionados do patógeno, como determinadas proteínas de superfície reconhecidas pelo sistema imunológico, as vacinas de subunidade podem reduzir o risco de reações relacionadas a componentes desnecessários presentes no micro-organismo completo, mantendo o suficiente para estimular uma resposta imunológica protetora eficaz — a vacina contra hepatite B é um exemplo desse tipo de tecnologia vacinal.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa as vacinas de RNA mensageiro (RNAm), uma tecnologia relativamente nova que ganhou destaque durante a pandemia de COVID-19, mas que já vinha sendo pesquisada há anos anteriormente. Essa tecnologia funciona ao fornecer instruções genéticas temporárias para que as próprias células do corpo produzam:",
    opcoes: [
      "o patógeno completo e infeccioso dentro das células do corpo",
      "anticorpos prontos diretamente, sem qualquer produção celular intermediária",
      "uma proteína específica do patógeno, que então é reconhecida pelo sistema imunológico como estranha, desencadeando uma resposta protetora",
      "material genético permanente que se integra ao DNA da célula",
      "hormônios digestivos não relacionados à resposta imunológica",
    ],
    correta: 2,
    explicacao:
      "O RNAm da vacina carrega instruções temporárias para que os ribossomos das próprias células do corpo produzam uma proteína específica e inofensiva do patógeno (como a proteína spike do coronavírus), que então é apresentada ao sistema imunológico, desencadeando uma resposta protetora sem que a pessoa seja exposta ao vírus real; o RNAm é rapidamente degradado pela célula após cumprir essa função temporária, sem se integrar permanentemente ao DNA celular.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença funcional entre os linfócitos T auxiliares (T helper), que coordenam e estimulam outras células do sistema imunológico, e os linfócitos T citotóxicos, que atacam diretamente células infectadas por vírus ou células cancerígenas. Essa divisão de trabalho entre diferentes tipos de linfócitos T ilustra como a resposta imunológica adaptativa:",
    opcoes: [
      "depende de um único tipo de célula, sem qualquer especialização funcional",
      "não envolve qualquer tipo de comunicação entre diferentes células de defesa",
      "envolve uma coordenação complexa entre diferentes tipos celulares, cada um com uma função especializada",
      "é idêntica em mecanismo à imunidade inata, sem qualquer diferença",
      "ocorre exclusivamente fora do organismo, em ambiente laboratorial",
    ],
    correta: 2,
    explicacao:
      "A resposta imunológica adaptativa envolve uma rede complexa e coordenada de diferentes tipos celulares especializados: os linfócitos T auxiliares atuam como uma espécie de 'comandantes' que ativam e estimulam outras células de defesa, incluindo os linfócitos B produtores de anticorpos, enquanto os linfócitos T citotóxicos executam diretamente a destruição de células já infectadas, ilustrando como o sistema imunológico funciona por meio de divisão de tarefas entre células especializadas, e não por uma única célula genérica realizando todas as funções.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a inflamação, uma resposta geral do sistema imunológico inato caracterizada por sinais como vermelhidão, calor, inchaço e dor em uma região do corpo afetada por lesão ou infecção. Essa resposta inflamatória, apesar do desconforto que causa, desempenha um papel importante ao:",
    opcoes: [
      "eliminar completamente qualquer possibilidade de infecção futura na mesma região",
      "impedir totalmente qualquer chegada de células imunológicas ao local afetado",
      "aumentar o fluxo sanguíneo e atrair células de defesa para a área afetada, ajudando a combater a infecção e iniciar o reparo tecidual",
      "não ter qualquer função biológica relevante, sendo apenas um efeito colateral inútil",
      "substituir completamente a necessidade de qualquer resposta imunológica adaptativa",
    ],
    correta: 2,
    explicacao:
      "O aumento do fluxo sanguíneo local (causando vermelhidão e calor) e o extravasamento controlado de líquido e células de defesa para os tecidos (causando inchaço) fazem parte de um mecanismo funcional que concentra células imunológicas na área afetada, ajudando a combater micro-organismos invasores e a remover células danificadas, além de sinalizar o início do processo de reparo tecidual — a dor, embora desconfortável, também tem função protetora ao sinalizar à pessoa para poupar aquela região machucada.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre doenças autoimunes, nas quais o sistema imunológico ataca por engano células e tecidos saudáveis do próprio corpo, e alergias, nas quais o sistema imunológico reage de forma exagerada a substâncias normalmente inofensivas, como pólen ou certos alimentos. Ambas as condições ilustram como o sistema imunológico:",
    opcoes: [
      "nunca comete qualquer erro em sua função de reconhecimento de ameaças",
      "é incapaz de causar qualquer problema de saúde por si só",
      "pode, em certas circunstâncias, funcionar de forma disfuncional, atacando alvos que não representam uma ameaça real ao organismo",
      "funciona de forma idêntica em todas as pessoas, sem qualquer variação individual",
      "não tem qualquer relação com condições médicas crônicas",
    ],
    correta: 2,
    explicacao:
      "Tanto nas doenças autoimunes, em que o sistema imunológico erroneamente identifica células ou tecidos do próprio corpo como ameaças estranhas, quanto nas alergias, em que reage de forma exagerada e desproporcional a substâncias geralmente inofensivas, fica evidente que o sofisticado sistema de reconhecimento imunológico, apesar de sua importância vital para a defesa do organismo, não é infalível e pode, em certas circunstâncias, funcionar de maneira disfuncional e prejudicial ao próprio indivíduo.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o funcionamento das vacinas de vetor viral, tecnologia utilizada em algumas vacinas contra a COVID-19, na qual um vírus diferente e inofensivo é modificado geneticamente para carregar instruções que levam as células do corpo a produzir uma proteína específica do patógeno-alvo. Essa abordagem se assemelha à tecnologia de RNA mensageiro porque ambas:",
    opcoes: [
      "introduzem diretamente o patógeno vivo e completo no organismo",
      "não estimulam qualquer resposta do sistema imunológico",
      "são tecnologias idênticas em todos os detalhes técnicos, sem qualquer diferença",
      "utilizam as próprias células do corpo para produzir uma proteína específica do patógeno, em vez de introduzir o patógeno completo diretamente",
      "nunca foram utilizadas em nenhuma vacina real disponível ao público",
    ],
    correta: 3,
    explicacao:
      "Tanto as vacinas de vetor viral quanto as de RNA mensageiro compartilham a estratégia geral de instruir as próprias células do corpo a produzir temporariamente uma proteína específica do patógeno-alvo, que então é reconhecida pelo sistema imunológico, em vez de introduzir diretamente o micro-organismo completo (mesmo que atenuado ou inativado) no organismo, representando abordagens mais modernas de desenvolvimento vacinal em comparação às técnicas tradicionais.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o calendário vacinal infantil, que estabelece a idade recomendada e o número de doses para diferentes vacinas ao longo dos primeiros anos de vida. A necessidade de múltiplas doses de certas vacinas, aplicadas em intervalos específicos, tem como objetivo:",
    opcoes: [
      "confundir propositalmente o sistema imunológico da criança",
      "reduzir ao máximo a eficácia da proteção vacinal",
      "eliminar completamente a necessidade de qualquer resposta imunológica adaptativa",
      "reforçar e consolidar a resposta imunológica, aumentando a eficácia e a duração da proteção conferida pela vacina",
      "substituir integralmente a necessidade de outras medidas de saúde pública",
    ],
    correta: 3,
    explicacao:
      "Doses de reforço, aplicadas em intervalos específicos determinados por estudos científicos sobre a resposta imunológica de cada vacina, ajudam a consolidar e fortalecer a memória imunológica desenvolvida na primeira dose, aumentando tanto a eficácia quanto a duração da proteção conferida — esse esquema de múltiplas doses é cuidadosamente planejado com base em evidências sobre como o sistema imunológico responde a cada vacina específica ao longo do tempo.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a erradicação da varíola, doença infecciosa que, graças a uma campanha mundial de vacinação coordenada pela Organização Mundial da Saúde, foi oficialmente declarada erradicada globalmente em 1980, sendo até hoje a única doença humana completamente eliminada dessa forma. Esse sucesso histórico é frequentemente citado como exemplo de como:",
    opcoes: [
      "vacinas nunca conseguem eliminar completamente qualquer doença",
      "a varíola ainda circula amplamente pelo mundo atualmente",
      "campanhas de saúde pública nunca obtiveram qualquer sucesso ao longo da história",
      "campanhas de vacinação em larga escala e bem coordenadas internacionalmente podem eliminar completamente uma doença infecciosa da população humana",
      "apenas doenças raras podem ser potencialmente erradicadas por vacinação",
    ],
    correta: 3,
    explicacao:
      "A erradicação global da varíola, alcançada por meio de uma campanha coordenada de vacinação em massa que se estendeu por anos e envolveu cooperação internacional significativa, é frequentemente citada como um dos maiores triunfos da medicina e da saúde pública moderna, demonstrando que, sob as condições epidemiológicas e de cooperação adequadas, é tecnicamente possível eliminar completamente uma doença infecciosa da circulação humana por meio de vacinação em larga escala.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa por que algumas doenças, como a gripe (influenza), exigem vacinação anual repetida, enquanto outras, como o sarampo, costumam conferir proteção duradoura com poucas doses ao longo da vida. Essa diferença está relacionada, entre outros fatores, ao fato de que o vírus da influenza:",
    opcoes: [
      "nunca sofre qualquer mutação genética ao longo do tempo",
      "é geneticamente idêntico ao vírus do sarampo em todos os aspectos",
      "não é capaz de infectar seres humanos de forma alguma",
      "sofre mutações frequentes em suas proteínas de superfície, exigindo atualização periódica da composição da vacina para acompanhar as cepas circulantes",
      "confere sempre proteção permanente após uma única exposição",
    ],
    correta: 3,
    explicacao:
      "O vírus da influenza sofre mutações relativamente frequentes em suas proteínas de superfície, um fenômeno conhecido como deriva antigênica, o que faz com que cepas circulantes em uma temporada possam ser suficientemente diferentes das cepas de temporadas anteriores a ponto de reduzir a eficácia da imunidade previamente adquirida; por isso, a vacina contra a gripe costuma ser reformulada anualmente para incluir as cepas consideradas mais prováveis de circular naquela temporada específica, diferente do vírus do sarampo, que sofre mutações muito menos frequentes em suas regiões-alvo reconhecidas pelo sistema imunológico.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa o conceito de janela imunológica, período entre a exposição inicial a um patógeno e o momento em que o corpo desenvolve uma resposta imunológica detectável (como a presença de anticorpos específicos em exames de sangue). Esse conceito é relevante, por exemplo, em testes de detecção de infecções como o HIV, porque:",
    opcoes: [
      "não existe qualquer intervalo de tempo entre infecção e detecção de anticorpos em nenhuma doença",
      "os testes de detecção de anticorpos são sempre precisos, independentemente de quando são realizados após a exposição",
      "a janela imunológica não tem qualquer relevância prática ou médica",
      "um resultado negativo realizado durante a janela imunológica pode não refletir com precisão o real status de infecção da pessoa, exigindo, em certos casos, repetição do teste após algum tempo",
      "anticorpos sempre aparecem instantaneamente após qualquer exposição a um patógeno",
    ],
    correta: 3,
    explicacao:
      "Como o sistema imunológico leva um certo tempo, geralmente semanas, para produzir anticorpos detectáveis em quantidade suficiente após uma exposição inicial a um patógeno, um teste realizado muito próximo da data de exposição, ainda dentro dessa janela imunológica, pode apresentar um resultado falso-negativo mesmo que a pessoa já esteja infectada; por isso, protocolos médicos costumam recomendar a repetição de certos testes após um intervalo de tempo adequado, para garantir maior confiabilidade do resultado.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre antígenos próprios, moléculas presentes nas células do próprio corpo, e antígenos não próprios (ou estranhos), presentes em patógenos invasores ou em tecidos transplantados de outra pessoa. O sistema imunológico normalmente saudável é capaz de:",
    opcoes: [
      "atacar indiscriminadamente qualquer célula, própria ou estranha, sem qualquer distinção",
      "ignorar completamente qualquer antígeno estranho presente no organismo",
      "identificar exclusivamente antígenos próprios, ignorando totalmente invasores externos",
      "distinguir entre antígenos próprios e não próprios, atacando preferencialmente apenas os últimos",
      "não ter qualquer capacidade de reconhecimento de antígenos, de qualquer tipo",
    ],
    correta: 3,
    explicacao:
      "Um dos princípios fundamentais do sistema imunológico saudável é a capacidade de distinguir entre o que é próprio do corpo (tolerância imunológica) e o que é estranho ou invasor, direcionando a resposta de ataque preferencialmente contra antígenos não próprios; essa mesma capacidade de reconhecimento é o que causa a rejeição de órgãos transplantados de outra pessoa, cujos antígenos são reconhecidos como estranhos, exigindo o uso de medicamentos imunossupressores para reduzir essa resposta em pacientes transplantados.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a febre, um aumento controlado da temperatura corporal frequentemente observado durante infecções, regulado pelo hipotálamo em resposta a sinais químicos do sistema imunológico. Apesar do desconforto que causa, a febre é considerada, dentro de certos limites, uma resposta:",
    opcoes: [
      "sempre completamente inútil e sem qualquer função biológica",
      "exclusiva de doenças autoimunes, nunca relacionada a infecções",
      "um sinal de que o sistema imunológico parou completamente de funcionar",
      "causada exclusivamente por fatores ambientais externos, sem qualquer relação com infecção",
      "potencialmente benéfica, já que temperaturas mais altas podem dificultar a reprodução de certos patógenos e favorecer a atividade de células de defesa",
    ],
    correta: 4,
    explicacao:
      "Embora febres muito altas ou prolongadas possam ser perigosas e exijam atenção médica, um aumento moderado e controlado da temperatura corporal é considerado, dentro de certos limites, uma resposta adaptativa do organismo, já que temperaturas mais elevadas podem dificultar a reprodução de certos vírus e bactérias sensíveis ao calor, além de favorecer a atividade de algumas células do sistema imunológico, tornando a febre parte de uma estratégia de defesa coordenada do corpo, e não apenas um sintoma indesejado sem propósito.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a hesitação vacinal, fenômeno social relacionado à relutância ou recusa em vacinar, mesmo quando vacinas estão disponíveis, frequentemente influenciada por desinformação, medo de efeitos colaterais ou desconfiança em relação a autoridades de saúde. Esse fenômeno é considerado uma preocupação de saúde pública porque:",
    opcoes: [
      "não tem qualquer impacto real sobre a circulação de doenças infecciosas",
      "sempre resulta em aumento imediato e automático das taxas de vacinação",
      "é um fenômeno recente, sem qualquer precedente histórico documentado",
      "afeta exclusivamente países com sistemas de saúde pouco desenvolvidos",
      "pode reduzir as taxas de cobertura vacinal a ponto de comprometer a imunidade coletiva, facilitando o ressurgimento de doenças anteriormente controladas",
    ],
    correta: 4,
    explicacao:
      "Quando taxas de vacinação caem significativamente em uma população, seja por hesitação vacinal ou outros fatores, o limiar necessário para manter a imunidade coletiva pode não ser mais atingido, o que facilita o ressurgimento de surtos de doenças que já haviam sido bem controladas ou raras em determinada região, como demonstrado historicamente por surtos de sarampo em áreas com quedas na cobertura vacinal, mesmo em países com sistemas de saúde bem desenvolvidos.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa o desenvolvimento e a aprovação de novas vacinas, processo que geralmente envolve múltiplas fases de testes clínicos (fase 1, testando segurança em pequeno número de voluntários; fase 2, testando dosagem e resposta imunológica; fase 3, testando eficácia e segurança em larga escala) antes da aprovação regulatória para uso público. Esse processo em etapas, mesmo quando acelerado em situações de emergência sanitária, é importante porque:",
    opcoes: [
      "não tem qualquer relevância prática para a segurança de novas vacinas",
      "é um processo desnecessário que deveria ser completamente eliminado",
      "garante 100% de eficácia absoluta em qualquer vacina aprovada",
      "elimina totalmente qualquer possibilidade de efeito colateral em qualquer pessoa",
      "permite avaliar progressivamente segurança e eficácia antes de uma aplicação em massa, reduzindo riscos de efeitos adversos não identificados anteriormente",
    ],
    correta: 4,
    explicacao:
      "O processo em fases permite identificar progressivamente questões de segurança e eficácia em grupos cada vez maiores de voluntários antes de uma aplicação em toda a população, o que reduz significativamente o risco de que efeitos adversos raros ou problemas de eficácia passem despercebidos até uma distribuição em massa; mesmo quando esse processo é acelerado em situações de emergência sanitária, como ocorreu durante a pandemia de COVID-19, as etapas fundamentais de avaliação de segurança e eficácia continuam sendo cumpridas, apenas com maior investimento de recursos e paralelização de algumas etapas administrativas.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre soro e vacina, dois produtos biológicos às vezes confundidos pelo público em geral. Enquanto a vacina estimula o próprio sistema imunológico da pessoa a produzir anticorpos (imunidade ativa), o soro (como o soro antitetânico ou antiofídico) fornece anticorpos já prontos (imunidade passiva), sendo geralmente utilizado:",
    opcoes: [
      "exclusivamente como medida preventiva de rotina, nunca em emergências",
      "para substituir completamente a necessidade de qualquer vacina no futuro",
      "apenas em animais, nunca em seres humanos",
      "de forma idêntica à vacina, sem qualquer diferença de mecanismo ou aplicação",
      "em situações de emergência, quando é necessária proteção imediata e não há tempo para o corpo desenvolver sua própria resposta imune",
    ],
    correta: 4,
    explicacao:
      "Como o soro fornece anticorpos já prontos, sua proteção é imediata, o que o torna especialmente útil em situações de emergência, como após uma picada de cobra venenosa ou uma lesão com risco de tétano em uma pessoa não vacinada, quando não há tempo disponível para que o corpo desenvolva sua própria resposta imunológica ativa por meio de uma vacina, que levaria dias ou semanas para gerar proteção significativa.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa como certos micro-organismos, como o vírus HIV, conseguem evadir parcialmente o sistema imunológico ao infectar e enfraquecer justamente as células responsáveis por coordenar a resposta imune, os linfócitos T auxiliares (T helper). Essa estratégia de infecção explica por que o HIV, quando não tratado adequadamente, pode levar a:",
    opcoes: [
      "um fortalecimento generalizado e permanente do sistema imunológico",
      "nenhum efeito perceptível sobre a capacidade de defesa do organismo",
      "a eliminação completa e definitiva de qualquer necessidade de tratamento médico",
      "uma resposta imunológica exagerada contra substâncias inofensivas",
      "uma progressiva imunodeficiência, deixando o organismo vulnerável a infecções oportunistas que normalmente seriam controladas com facilidade",
    ],
    correta: 4,
    explicacao:
      "Ao infectar e progressivamente destruir os linfócitos T auxiliares, células que coordenam boa parte da resposta imunológica adaptativa, o HIV, quando não tratado, compromete gradualmente a capacidade geral de defesa do organismo, deixando-o vulnerável a infecções oportunistas causadas por micro-organismos que normalmente seriam facilmente controlados por um sistema imunológico saudável — esse estado de imunodeficiência avançada é o que caracteriza a fase da infecção conhecida como AIDS (síndrome da imunodeficiência adquirida).",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a importância de manter as vacinas armazenadas dentro de uma faixa de temperatura específica, geralmente refrigerada, desde sua fabricação até sua aplicação, um processo conhecido como cadeia de frio. A quebra dessa cadeia de frio, com exposição da vacina a temperaturas inadequadas, pode resultar em:",
    opcoes: [
      "aumento automático da eficácia da vacina, sem qualquer risco associado",
      "nenhuma consequência para a qualidade ou segurança da vacina",
      "transformação da vacina em um medicamento completamente diferente",
      "eliminação total da necessidade de qualquer outro cuidado no transporte da vacina",
      "redução ou perda da eficácia da vacina, já que muitos componentes biológicos são sensíveis a variações de temperatura",
    ],
    correta: 4,
    explicacao:
      "Muitas vacinas contêm componentes biológicos sensíveis, como proteínas ou material genético, cuja estrutura e função podem ser danificadas por exposição a temperaturas inadequadas (tanto muito altas quanto, em alguns casos, muito baixas); a manutenção rigorosa da cadeia de frio durante todo o transporte e armazenamento é essencial para garantir que a vacina mantenha sua eficácia protetora até o momento da aplicação, sendo um desafio logístico particularmente importante em campanhas de vacinação em larga escala e em regiões com infraestrutura limitada.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "Um estudante analisa os macrófagos, células do sistema imunológico inato capazes de englobar e digerir micro-organismos invasores e restos celulares por meio da fagocitose. Além dessa função direta de defesa, os macrófagos também desempenham um papel importante ao:",
    opcoes: [
      "apresentar fragmentos do patógeno digerido a linfócitos T, ajudando a iniciar a resposta imunológica adaptativa",
      "produzir diretamente vacinas contra qualquer doença",
      "substituir completamente a função dos rins na filtragem do sangue",
      "realizar fotossíntese dentro do organismo humano",
      "impedir totalmente qualquer resposta inflamatória do corpo",
    ],
    correta: 0,
    explicacao:
      "Além de fagocitar diretamente micro-organismos, os macrófagos atuam como células apresentadoras de antígenos, exibindo fragmentos do patógeno digerido em sua superfície para que linfócitos T os reconheçam, um passo importante que ajuda a conectar a resposta imunológica inata, mais imediata, à resposta adaptativa, mais específica e duradoura.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre vacinas de dose única e vacinas que exigem esquema de múltiplas doses (primárias e reforços) para conferir proteção adequada. Mesmo após completar o esquema vacinal recomendado, alguns tipos de vacina ainda podem exigir doses de reforço anos depois porque:",
    opcoes: [
      "o esquema de reforço nunca tem qualquer justificativa científica",
      "os níveis de anticorpos e a intensidade da memória imunológica podem diminuir gradualmente ao longo do tempo para certas vacinas",
      "todas as vacinas, sem exceção, exigem exatamente o mesmo número de reforços",
      "reforços servem exclusivamente para tratar uma infecção já instalada",
      "a memória imunológica nunca diminui, tornando qualquer reforço desnecessário",
    ],
    correta: 1,
    explicacao:
      "Para algumas vacinas, os níveis de anticorpos circulantes e a intensidade da resposta de memória podem diminuir gradualmente ao longo dos anos, o que motiva a recomendação de doses de reforço periódicas para restaurar um nível de proteção considerado adequado, como ocorre com a vacina contra o tétano, recomendada a cada dez anos para adultos.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre uma reação alérgica leve, como uma pequena vermelhidão no local da aplicação de uma vacina, e uma reação alérgica grave, como a anafilaxia, uma emergência médica rara que pode ocorrer após a administração de certas vacinas ou medicamentos. Por precaução diante desse risco raro, muitos serviços de saúde recomendam que a pessoa vacinada:",
    opcoes: [
      "evite qualquer atendimento médico após a vacinação, independentemente dos sintomas",
      "nunca mais tome qualquer vacina pelo resto da vida após qualquer reação",
      "permaneça em observação por um curto período após a vacinação, para que qualquer reação grave possa ser identificada e tratada rapidamente",
      "considere a reação alérgica grave como parte normal e esperada de qualquer vacinação",
      "ignore completamente qualquer sintoma após a aplicação da vacina",
    ],
    correta: 2,
    explicacao:
      "Como reações alérgicas graves, embora raras, podem ocorrer rapidamente após a administração de uma vacina, muitos serviços de saúde recomendam um curto período de observação (geralmente entre 15 e 30 minutos) após a aplicação, permitindo que qualquer sinal de reação grave seja identificado e tratado prontamente pela equipe de saúde presente, uma medida de segurança preventiva que não implica que tais reações sejam comuns ou esperadas.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa por que recém-nascidos, apesar de vulneráveis a infecções, não podem receber determinadas vacinas de vírus atenuado logo após o nascimento, precisando aguardar alguns meses de idade conforme o calendário vacinal recomendado. Um dos fatores considerados nessa decisão é que o sistema imunológico do recém-nascido:",
    opcoes: [
      "já está completamente maduro e idêntico ao de um adulto desde o nascimento",
      "não tem qualquer relação com a idade recomendada para vacinação",
      "é sempre mais forte do que o de qualquer criança mais velha",
      "ainda está em processo de amadurecimento, o que pode limitar sua capacidade de responder adequadamente a certas vacinas nas primeiras semanas de vida",
      "nunca precisa de qualquer proteção contra doenças infecciosas",
    ],
    correta: 3,
    explicacao:
      "O sistema imunológico de um recém-nascido ainda está em processo de desenvolvimento e amadurecimento, e a presença de anticorpos maternos residuais (transferidos durante a gestação) também pode interferir na resposta a certas vacinas nas primeiras semanas de vida; por isso, calendários vacinais são cuidadosamente estruturados com base em evidências científicas sobre a idade em que cada vacina específica tende a gerar a resposta imunológica mais eficaz e segura.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "Além da pele, as mucosas que revestem internamente estruturas como as vias respiratórias, o trato digestório e os olhos também fazem parte da defesa do sistema imunológico inato, produzindo secreções que dificultam a instalação de micro-organismos. Um exemplo dessa defesa química das mucosas é a presença, em lágrimas e saliva, da enzima:",
    opcoes: [
      "lisozima, que rompe a parede celular de muitas bactérias, prejudicando sua sobrevivência",
      "pepsina, enzima digestiva que rompe apenas proteínas de alimentos ingeridos",
      "insulina, hormônio que regula a concentração de glicose no sangue",
      "amilase, enzima que digere carboidratos presentes nos alimentos",
      "hemoglobina, proteína transportadora de oxigênio presente nas hemácias",
    ],
    correta: 0,
    explicacao:
      "A lisozima é uma enzima presente em secreções como lágrimas, saliva e muco, capaz de romper a parede celular de muitas bactérias, contribuindo, junto com a barreira física das mucosas, para a defesa do sistema imunológico inato mesmo antes de qualquer resposta imunológica específica ser desencadeada. As demais enzimas e proteínas citadas desempenham funções digestivas ou de transporte, sem relação direta com a defesa antimicrobiana das mucosas.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "Os neutrófilos são o tipo mais abundante de leucócito no sangue humano e costumam ser as primeiras células do sistema imunológico a migrar para um local de infecção ou lesão, fagocitando micro-organismos invasores. O pus formado em um ferimento infeccionado é composto, em grande parte, por:",
    opcoes: [
      "neutrófilos mortos, restos celulares e micro-organismos destruídos, acumulados no local da infecção",
      "anticorpos puros produzidos exclusivamente pelos linfócitos B",
      "hemácias que vazaram do vaso sanguíneo lesionado",
      "glicose acumulada no local da lesão",
      "hormônios liberados pela glândula tireoide",
    ],
    correta: 0,
    explicacao:
      "O pus é formado principalmente por neutrófilos que migraram rapidamente para o local da infecção, fagocitaram micro-organismos invasores e, após cumprir essa função, morreram, acumulando-se junto com restos celulares e patógenos destruídos, um sinal visível da atividade inicial do sistema imunológico inato combatendo a infecção local. As demais opções descrevem componentes sem relação com a composição típica do pus formado durante uma infecção.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "facil",
    enunciado:
      "As células natural killer (NK) fazem parte da imunidade inata e são capazes de reconhecer e destruir células do próprio corpo infectadas por vírus ou transformadas em células tumorais, sem precisar de uma ativação prévia específica contra aquele antígeno, diferentemente dos linfócitos T citotóxicos da imunidade adaptativa. Essa capacidade de ação rápida e geral torna as células NK importantes para:",
    opcoes: [
      "uma primeira linha de defesa contra células infectadas ou tumorais, atuando antes mesmo de uma resposta imunológica adaptativa específica se desenvolver plenamente",
      "a produção direta de anticorpos específicos contra cada antígeno encontrado",
      "a digestão de alimentos no intestino delgado",
      "a produção de hormônios que regulam a glicemia",
      "a filtração do sangue nos rins, eliminando resíduos metabólicos",
    ],
    correta: 0,
    explicacao:
      "Por atuarem de forma rápida e sem exigir reconhecimento prévio específico de um antígeno, as células NK oferecem uma primeira linha de defesa contra células infectadas por vírus ou células tumorais, complementando a ação mais lenta, porém mais específica e duradoura, dos linfócitos T citotóxicos da imunidade adaptativa. As demais alternativas descrevem funções de outros sistemas do corpo, sem relação com a atividade das células NK.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "O sistema complemento é um conjunto de proteínas plasmáticas que, uma vez ativadas em cascata, auxiliam a resposta imunológica de diferentes formas, incluindo a formação de poros na membrana de certos patógenos, o que pode causar sua destruição direta. Essa ativação também ajuda a marcar patógenos para facilitar sua fagocitose por macrófagos e neutrófilos, um processo chamado de:",
    opcoes: [
      "fotossíntese, um processo restrito a organismos fotossintetizantes",
      "opsonização, que torna o patógeno mais reconhecível e atrativo para células fagocitárias",
      "hematopoese, formação de células sanguíneas na medula óssea",
      "reabsorção tubular, um processo que ocorre exclusivamente nos rins",
      "fermentação láctica, uma via metabólica anaeróbica",
    ],
    correta: 1,
    explicacao:
      "A opsonização é o processo pelo qual proteínas do sistema complemento (ou anticorpos) se ligam à superfície de um patógeno, tornando-o mais facilmente reconhecido e fagocitado por células como macrófagos e neutrófilos; além dessa função, o sistema complemento também pode formar poros diretamente na membrana de certos patógenos, causando sua destruição, e atrair mais células de defesa para o local da infecção por meio de sinalização química.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a estrutura básica de um anticorpo (imunoglobulina), molécula em forma de Y produzida pelos linfócitos B, composta por regiões constantes, semelhantes entre anticorpos de uma mesma classe, e regiões variáveis, localizadas nas extremidades dos dois braços do Y. A função dessas regiões variáveis é:",
    opcoes: [
      "produzir energia na forma de ATP para a célula",
      "se ligar especificamente a um antígeno particular, conferindo a especificidade característica da resposta imunológica adaptativa",
      "digerir diretamente o patógeno, sem qualquer necessidade de outras células de defesa",
      "transportar oxigênio pelo corpo, como a hemoglobina",
      "regular a glicemia, semelhante à ação da insulina",
    ],
    correta: 1,
    explicacao:
      "As regiões variáveis, localizadas nas extremidades dos dois braços da molécula em forma de Y, têm sequência de aminoácidos que varia entre diferentes anticorpos, formando um sítio de ligação com formato específico capaz de reconhecer um antígeno particular, o que confere a alta especificidade característica da resposta imunológica adaptativa. As regiões constantes, por sua vez, são responsáveis por outras funções, como a interação com células de defesa, mas não pela especificidade de reconhecimento do antígeno.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa duas classes diferentes de anticorpos envolvidas na proteção transferida da mãe para o bebê: a IgG, que atravessa a placenta durante a gestação, e a IgA, presente em grande quantidade no colostro e no leite materno, absorvida pelo intestino do recém-nascido. Apesar da via de transferência diferente, IgG e IgA compartilham a característica de:",
    opcoes: [
      "serem produzidas exclusivamente pelo próprio sistema imunológico do bebê após o nascimento",
      "representarem anticorpos prontos transferidos da mãe, e não produzidos pelo próprio sistema imunológico do bebê, caracterizando imunidade passiva natural",
      "não conferirem qualquer proteção real contra patógenos",
      "substituírem permanentemente a necessidade de vacinação do bebê ao longo de toda a vida",
      "serem idênticas em estrutura molecular e mecanismo de ação a todos os demais tipos de anticorpo",
    ],
    correta: 1,
    explicacao:
      "Tanto a IgG transferida pela placenta quanto a IgA presente no leite materno são anticorpos prontos, produzidos pelo sistema imunológico da mãe e transferidos ao bebê por vias diferentes (uma antes do nascimento, outra após, pela amamentação), caracterizando ambas como formas de imunidade passiva natural; essa proteção é temporária, já que os anticorpos maternos são gradualmente degradados, sem gerar memória imunológica própria no bebê.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Algumas doenças, como o tétano e a difteria, não são causadas diretamente pela multiplicação do micro-organismo no organismo, mas sim pelos efeitos de toxinas potentes que essas bactérias produzem. As vacinas contra essas doenças utilizam versões quimicamente modificadas dessas toxinas, incapazes de causar dano, mas ainda reconhecíveis pelo sistema imunológico, chamadas de:",
    opcoes: [
      "vacinas de vírus atenuado, que utilizam o patógeno vivo enfraquecido",
      "vacinas de RNA mensageiro, que fornecem instruções genéticas temporárias",
      "toxoides, toxinas inativadas que preservam a capacidade de estimular a produção de anticorpos específicos",
      "soros terapêuticos, que fornecem anticorpos prontos contra a toxina",
      "vacinas de vetor viral, que utilizam um vírus inofensivo modificado",
    ],
    correta: 2,
    explicacao:
      "Toxoides são toxinas bacterianas quimicamente ou termicamente inativadas, de modo que perdem sua capacidade tóxica, mas mantêm estrutura suficiente para serem reconhecidas pelo sistema imunológico e estimular a produção de anticorpos específicos contra a toxina original; é esse princípio que fundamenta as vacinas contra tétano e difteria, doenças cujos sintomas graves resultam principalmente da ação de toxinas, e não da simples presença da bactéria.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Certas bactérias, como as causadoras de algumas formas de meningite e pneumonia, possuem uma cápsula externa de polissacarídeos que dificulta seu reconhecimento pelo sistema imunológico ainda imaturo de crianças muito pequenas. Para contornar essa limitação, vacinas conjugadas associam esses polissacarídeos a uma proteína transportadora, o que:",
    opcoes: [
      "elimina completamente a necessidade de qualquer resposta do sistema imunológico",
      "transforma a vacina em uma vacina de vírus atenuado",
      "melhora o reconhecimento do antígeno pelo sistema imunológico ainda em desenvolvimento das crianças pequenas, gerando uma resposta imune mais eficaz",
      "impede qualquer possibilidade de resposta imunológica em crianças",
      "substitui totalmente a necessidade de outras vacinas do calendário infantil",
    ],
    correta: 2,
    explicacao:
      "Crianças muito pequenas costumam responder mal a antígenos formados apenas por polissacarídeos isolados, já que essas moléculas não são bem reconhecidas pelo sistema imunológico ainda em amadurecimento; ao conjugar o polissacarídeo a uma proteína transportadora, a vacina consegue envolver também os linfócitos T nesse reconhecimento, gerando uma resposta imunológica mais robusta e memória imunológica mais eficaz mesmo em bebês, o que fundamenta vacinas como a pneumocócica e a meningocócica conjugadas do calendário infantil.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Grávidas são frequentemente orientadas a tomar a vacina dTpa (contra difteria, tétano e coqueluche) durante a gestação, mesmo já tendo sido vacinadas anteriormente na infância. Um dos principais objetivos dessa vacinação durante a gravidez é:",
    opcoes: [
      "eliminar completamente a necessidade de qualquer vacinação do bebê após o nascimento",
      "tratar diretamente uma infecção já instalada na gestante",
      "permitir que anticorpos maternos produzidos em resposta à vacina atravessem a placenta, protegendo o recém-nascido contra a coqueluche nos primeiros meses de vida, antes de ele poder ser vacinado diretamente",
      "substituir a vacinação de rotina da criança prevista no calendário vacinal infantil",
      "proteger exclusivamente a própria gestante, sem qualquer benefício para o bebê",
    ],
    correta: 2,
    explicacao:
      "Como recém-nascidos ainda não podem receber certas vacinas nas primeiras semanas de vida, um dos objetivos da vacinação dTpa durante a gestação é estimular a produção de anticorpos maternos específicos contra a coqueluche, que atravessam a placenta (imunidade passiva natural) e oferecem proteção temporária ao bebê justamente no período mais vulnerável, antes que ele complete seu próprio esquema vacinal contra essa doença.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Vacinas de vírus vivo atenuado, como as vacinas contra sarampo, caxumba e rubéola, costumam ser contraindicadas para gestantes e para pessoas com o sistema imunológico significativamente comprometido, como pacientes em tratamento intenso de quimioterapia. Essa contraindicação existe porque, nesses grupos específicos:",
    opcoes: [
      "a vacina nunca funciona, sendo completamente ineficaz nesses grupos",
      "o sistema imunológico dessas pessoas está sempre mais forte do que o normal",
      "essas vacinas são as únicas disponíveis para qualquer pessoa nessa condição",
      "existe um risco teórico maior de o vírus atenuado, mesmo enfraquecido, causar algum efeito adverso relacionado à sua replicação limitada no organismo",
      "essas pessoas já possuem imunidade permanente contra qualquer doença infecciosa",
    ],
    correta: 3,
    explicacao:
      "Como o vírus atenuado ainda consegue se replicar minimamente no organismo para estimular uma resposta imunológica robusta, existe um risco teórico maior de complicações em pessoas com sistema imunológico significativamente enfraquecido, incapazes de conter até mesmo essa replicação limitada, e um risco potencial ao desenvolvimento fetal em gestantes; por isso, essas vacinas costumam ser adiadas ou substituídas por alternativas mais seguras, como vacinas inativadas, nesses grupos específicos.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "A teoria da seleção clonal explica como o sistema imunológico adaptativo consegue montar uma resposta específica contra um entre milhões de antígenos possíveis: cada linfócito, ainda antes de qualquer infecção, já apresenta um receptor com especificidade única para um determinado antígeno. Quando esse antígeno específico é encontrado, o linfócito correspondente é ativado e passa a:",
    opcoes: [
      "perder completamente sua especificidade original, tornando-se capaz de reconhecer qualquer antígeno",
      "se transformar em uma célula de outro sistema fisiológico, como uma célula muscular",
      "impedir permanentemente a ativação de qualquer outro linfócito do corpo",
      "se multiplicar rapidamente, formando um grande número de células idênticas (clones) especializadas em combater aquele antígeno específico",
      "produzir hormônios digestivos em vez de anticorpos",
    ],
    correta: 3,
    explicacao:
      "Segundo a teoria da seleção clonal, o encontro entre um linfócito e o antígeno específico que seu receptor reconhece desencadeia a proliferação rápida (expansão clonal) desse linfócito, gerando um grande número de células-filhas idênticas especializadas em combater aquele antígeno, além de algumas que se diferenciam em células de memória; esse mecanismo explica como o sistema imunológico consegue montar uma resposta específica e amplificada mesmo tendo, inicialmente, poucas células capazes de reconhecer um dado antígeno.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Muitas vacinas contêm, além do antígeno principal, substâncias adicionais chamadas de adjuvantes, que não conferem proteção específica por si mesmas, mas têm a função de:",
    opcoes: [
      "substituir completamente a necessidade de qualquer antígeno na vacina",
      "neutralizar diretamente o patógeno-alvo, sem qualquer participação do sistema imunológico",
      "causar diretamente a doença que a vacina pretende prevenir",
      "amplificar e prolongar a resposta imunológica desencadeada pelo antígeno da vacina, tornando-a mais eficaz",
      "eliminar totalmente qualquer efeito colateral possível de qualquer vacina",
    ],
    correta: 3,
    explicacao:
      "Adjuvantes são substâncias adicionadas a algumas formulações vacinais para estimular e amplificar a resposta do sistema imunológico ao antígeno principal, tornando a vacina mais eficaz, muitas vezes com doses menores de antígeno ou com necessidade de menos reforços, sem que o adjuvante em si confira proteção específica contra o patógeno-alvo.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "dificil",
    enunciado:
      "Um epidemiologista explica que a proporção mínima de pessoas vacinadas necessária para atingir a imunidade coletiva contra uma doença varia conforme a contagiosidade do patógeno: doenças mais contagiosas exigem uma cobertura vacinal maior. O sarampo, uma das doenças mais contagiosas conhecidas, exige uma cobertura vacinal estimada em cerca de noventa e cinco por cento da população para interromper de forma sustentada sua circulação, um percentual bem mais alto do que o exigido para doenças menos contagiosas. Essa relação indica que:",
    opcoes: [
      "a contagiosidade de uma doença não tem qualquer relação com o percentual de vacinados necessário para imunidade coletiva",
      "qualquer doença, independentemente de sua contagiosidade, exige exatamente o mesmo percentual de vacinados",
      "quanto mais contagiosa uma doença, menor é a cobertura vacinal necessária para controlá-la",
      "a imunidade coletiva é um conceito aplicável apenas a doenças pouco contagiosas",
      "quanto mais facilmente um patógeno se transmite de pessoa a pessoa, maior precisa ser a proporção de indivíduos imunizados para impedir sua circulação sustentada na população",
    ],
    correta: 4,
    explicacao:
      "Como patógenos mais contagiosos se espalham mais facilmente entre indivíduos suscetíveis, é necessária uma proporção maior de pessoas imunizadas para reduzir suficientemente o número de hospedeiros disponíveis e interromper a cadeia de transmissão sustentada; por isso, doenças altamente contagiosas como o sarampo exigem uma cobertura vacinal mais alta para alcançar a imunidade coletiva do que doenças que se transmitem com mais dificuldade entre as pessoas.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "dificil",
    enunciado:
      "No final do século dezoito, o médico inglês Edward Jenner observou que ordenhadoras de vacas que haviam contraído a varíola bovina (cowpox), uma doença mais branda, pareciam ficar protegidas contra a varíola humana, muito mais grave. A partir dessa observação, Jenner inoculou material da varíola bovina em um menino saudável e, posteriormente, expôs esse mesmo menino à varíola humana, verificando que ele não desenvolveu a doença. Esse experimento pioneiro, considerado o marco histórico da vacinação, funcionou porque:",
    opcoes: [
      "a varíola bovina e a varíola humana são causadas exatamente pelo mesmo vírus, sem qualquer diferença",
      "o menino já possuía imunidade natural contra qualquer doença antes do experimento",
      "a exposição a qualquer doença sempre confere proteção contra todas as demais doenças infecciosas",
      "o experimento de Jenner não teve qualquer relação com o desenvolvimento posterior das vacinas modernas",
      "os vírus da varíola bovina e da varíola humana são suficientemente semelhantes para que anticorpos formados contra um também ofereçam proteção contra o outro",
    ],
    correta: 4,
    explicacao:
      "Os vírus da varíola bovina e da varíola humana compartilham antígenos suficientemente semelhantes para que a resposta imunológica desenvolvida contra um deles, por reação cruzada, também ofereça proteção contra o outro, mesmo sendo vírus distintos e causando doenças de gravidade muito diferente; foi essa descoberta empírica de Jenner, décadas antes de se compreender a existência de vírus ou o funcionamento do sistema imunológico, que deu origem ao termo 'vacina' (derivado de 'vaca', em referência à varíola bovina) e fundamentou o desenvolvimento da imunologia moderna.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa o mecanismo bioquímico por trás de uma reação alérgica, como a causada pelo pólen em pessoas sensibilizadas. Nesse mecanismo, uma classe específica de anticorpo, a IgE, se liga à superfície de células chamadas mastócitos; em uma exposição subsequente ao mesmo alérgeno, a ligação do alérgeno a essas moléculas de IgE já fixadas desencadeia a liberação, pelos mastócitos, de substâncias como a histamina, responsáveis pelos sintomas característicos da alergia, como coceira, inchaço e espirros. Esse mecanismo ilustra como uma reação alérgica é, na verdade:",
    opcoes: [
      "uma infecção direta causada pelo próprio alérgeno, como pólen ou poeira",
      "um exemplo de imunidade passiva artificial, semelhante à ação de um soro",
      "a ausência completa de qualquer resposta do sistema imunológico ao alérgeno",
      "uma forma de imunidade coletiva desenvolvida por exposição repetida ao alérgeno",
      "uma resposta exagerada e desproporcional do sistema imunológico adaptativo a uma substância que normalmente não representa ameaça real ao organismo",
    ],
    correta: 4,
    explicacao:
      "A reação alérgica mediada por IgE representa uma resposta imunológica adaptativa real, porém exagerada e direcionada contra uma substância geralmente inofensiva, como o pólen; a liberação de histamina e outras substâncias pelos mastócitos, desencadeada pela ligação do alérgeno às moléculas de IgE fixadas em sua superfície, provoca os sintomas incômodos característicos da alergia, evidenciando como esse mesmo mecanismo de defesa, útil contra parasitas em outras circunstâncias, pode se tornar prejudicial quando direcionado contra alérgenos inofensivos.",
  },
  {
    materia: "biologia",
    tema: "Imunologia e vacinas",
    dificuldade: "media",
    enunciado:
      "Diferentemente dos linfócitos B, que completam sua maturação na própria medula óssea, os linfócitos T migram ainda imaturos da medula óssea até uma glândula localizada na região superior do tórax, onde completam seu desenvolvimento e passam por um processo de seleção que elimina células capazes de atacar por engano estruturas do próprio corpo. Essa glândula, essencial para a maturação dos linfócitos T, é o(a):",
    opcoes: [
      "tireoide",
      "pâncreas",
      "hipófise",
      "baço",
      "timo",
    ],
    correta: 4,
    explicacao:
      "O timo é a glândula onde os linfócitos T completam sua maturação após deixarem a medula óssea, passando por um rigoroso processo de seleção que elimina células cujos receptores reconheceriam erroneamente antígenos próprios do organismo, uma etapa fundamental para reduzir o risco de respostas autoimunes; é dessa glândula, aliás, que vem a letra 'T' na denominação dos linfócitos T (de timo-dependentes).",
  },
];
