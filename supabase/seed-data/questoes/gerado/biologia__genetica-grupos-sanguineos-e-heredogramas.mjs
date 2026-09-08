/* Genética: grupos sanguíneos e heredogramas (50 questões).
   Sistema ABO, fator Rh, herança de alelos múltiplos, doença hemolítica
   do recém-nascido, interpretação e construção de heredogramas.
   Ver biologia__problemas-ambientais-brasileiros.mjs para o formato. */

export const questoes = [
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "O sistema sanguíneo ABO classifica o sangue humano em quatro tipos principais (A, B, AB e O), determinados pela presença ou ausência de antígenos específicos na superfície das hemácias. Esse sistema é controlado por um único gene com três alelos possíveis: IA, IB e i. Os alelos IA e IB são, em relação ao alelo i, respectivamente:",
    opcoes: [
      "dominantes",
      "recessivos",
      "codominantes entre si apenas, sem relação de dominância com i",
      "inexistentes na população humana",
      "sempre letais quando presentes",
    ],
    correta: 0,
    explicacao:
      "Tanto IA quanto IB são dominantes em relação ao alelo i, que é recessivo; isso significa que um indivíduo com genótipo IAi apresenta tipo sanguíneo A (com o alelo i mascarado), e um indivíduo com genótipo IBi apresenta tipo sanguíneo B, enquanto apenas o genótipo homozigoto ii resulta no tipo sanguíneo O.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Diferentemente da relação de dominância entre IA (ou IB) e i, os alelos IA e IB apresentam entre si uma relação de codominância, o que significa que, quando ambos estão presentes no mesmo indivíduo (genótipo IAIB), os dois se expressam simultaneamente. Esse genótipo IAIB corresponde ao tipo sanguíneo:",
    opcoes: [
      "AB",
      "A",
      "B",
      "O",
      "Nenhum tipo sanguíneo conhecido corresponde a esse genótipo",
    ],
    correta: 0,
    explicacao:
      "Como IA e IB são codominantes, um indivíduo com ambos os alelos expressa simultaneamente os antígenos A e B em suas hemácias, resultando no tipo sanguíneo AB — diferente de uma relação de dominância completa, na qual um dos dois alelos mascararia totalmente o efeito do outro.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "O tipo sanguíneo O, resultante do genótipo homozigoto recessivo ii, não apresenta nenhum dos dois antígenos (A ou B) na superfície das hemácias. Por não apresentar nenhum desses antígenos, uma pessoa com tipo sanguíneo O é frequentemente chamada de:",
    opcoes: [
      "doadora universal, já que seu sangue pode ser transfundido, em geral, para pessoas de qualquer tipo ABO",
      "receptora universal, capaz de receber sangue de qualquer tipo sanguíneo sem restrição",
      "incapaz de doar sangue para qualquer outra pessoa",
      "portadora obrigatória de uma doença sanguínea genética",
      "estéril, incapaz de gerar filhos com qualquer tipo sanguíneo",
    ],
    correta: 0,
    explicacao:
      "Como o sangue tipo O não carrega os antígenos A nem B, ele pode, em geral, ser transfundido para receptores de qualquer um dos quatro tipos sanguíneos do sistema ABO sem provocar uma reação imunológica de rejeição relacionada a esses antígenos específicos, o que rendeu ao tipo O o apelido de 'doador universal' nesse sistema — embora outros fatores sanguíneos, como o fator Rh, também precisem ser considerados em uma transfusão segura.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Assim como o tipo O é considerado doador universal, o tipo sanguíneo AB é frequentemente chamado de receptor universal, já que uma pessoa com esse tipo sanguíneo pode, em geral, receber transfusões de sangue de qualquer um dos quatro tipos do sistema ABO. Isso ocorre porque uma pessoa do tipo AB:",
    opcoes: [
      "já possui naturalmente os dois antígenos (A e B), não produzindo anticorpos contra nenhum deles",
      "não possui absolutamente nenhum antígeno nas hemácias",
      "produz anticorpos contra ambos os antígenos A e B simultaneamente",
      "é incapaz de doar sangue para qualquer outra pessoa",
      "tem sangue quimicamente idêntico ao de qualquer outro tipo sanguíneo",
    ],
    correta: 0,
    explicacao:
      "Como a pessoa do tipo AB já possui naturalmente ambos os antígenos A e B em suas hemácias, seu sistema imunológico não desenvolve anticorpos contra nenhum desses dois antígenos, o que permite que ela receba, em geral, sangue de doadores dos tipos A, B, AB ou O sem risco de reação imunológica relacionada a esses antígenos específicos do sistema ABO.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Além do sistema ABO, o sangue humano também é classificado pelo fator Rh, determinado pela presença ou ausência de um antígeno específico (o antígeno D) na superfície das hemácias. Uma pessoa que possui esse antígeno é classificada como Rh positivo, enquanto uma pessoa que não o possui é classificada como:",
    opcoes: [
      "Rh negativo",
      "tipo O, independentemente do sistema ABO",
      "tipo AB, independentemente do sistema ABO",
      "portadora obrigatória de uma doença genética grave",
      "incapaz de ter filhos saudáveis",
    ],
    correta: 0,
    explicacao:
      "O fator Rh é um sistema de classificação sanguínea independente do sistema ABO, baseado na presença (Rh positivo) ou ausência (Rh negativo) do antígeno D nas hemácias; assim, uma pessoa pode ser, por exemplo, tipo A positivo, A negativo, O positivo, O negativo, e assim por diante, combinando as classificações dos dois sistemas.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "O fator Rh é herdado geneticamente, sendo o alelo Rh positivo (R) dominante em relação ao alelo Rh negativo (r). Um indivíduo com genótipo Rr, portanto, apresenta fenótipo sanguíneo:",
    opcoes: [
      "Rh negativo, já que o alelo r é dominante sobre R",
      "Rh positivo, já que o alelo R é dominante sobre r",
      "uma mistura intermediária entre Rh positivo e Rh negativo",
      "impossível de determinar sem mais dados",
      "sempre AB, independentemente do sistema ABO",
    ],
    correta: 1,
    explicacao:
      "Como o alelo R (Rh positivo) é dominante em relação ao alelo r (Rh negativo), um indivíduo heterozigoto (Rr) apresenta o fenótipo Rh positivo, já que basta uma cópia do alelo dominante para que o antígeno D seja expresso nas hemácias; apenas o genótipo homozigoto recessivo (rr) resulta no fenótipo Rh negativo.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Os heredogramas (ou árvores genealógicas genéticas) são representações gráficas utilizadas para acompanhar a transmissão de uma característica hereditária ao longo de gerações de uma família. Nesses diagramas, por convenção, os indivíduos do sexo masculino costumam ser representados por:",
    opcoes: [
      "círculos, exatamente como os indivíduos do sexo feminino",
      "quadrados",
      "triângulos, uma forma exclusiva para homens em qualquer heredograma",
      "estrelas, símbolo reservado para casos de doença genética grave",
      "hexágonos, uma forma sem qualquer significado padronizado",
    ],
    correta: 1,
    explicacao:
      "Por convenção amplamente adotada em heredogramas, indivíduos do sexo masculino são representados por quadrados, enquanto indivíduos do sexo feminino são representados por círculos; essa padronização visual facilita a interpretação rápida e universal desses diagramas por geneticistas e estudantes ao redor do mundo, independentemente do idioma nativo de quem os analisa.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Em um heredograma, símbolos preenchidos (coloridos ou hachurados) geralmente indicam indivíduos afetados por determinada característica ou condição genética em estudo, enquanto símbolos vazios (sem preenchimento) indicam indivíduos não afetados. Uma linha horizontal conectando um quadrado e um círculo em um heredograma representa:",
    opcoes: [
      "uma relação de irmãos entre os dois indivíduos",
      "uma união (casamento ou relacionamento) entre os dois indivíduos representados",
      "uma relação de pai e filho entre os dois indivíduos",
      "a ausência completa de qualquer relação entre os dois indivíduos",
      "um erro de desenho, sem qualquer significado genético",
    ],
    correta: 1,
    explicacao:
      "Em um heredograma, uma linha horizontal conectando dois símbolos de sexos diferentes (ou, em famílias com pais do mesmo sexo, dois símbolos de mesmo sexo, conforme convenções mais recentes) representa uma união entre esses dois indivíduos; os filhos dessa união são representados por linhas verticais que descem dessa linha de conexão horizontal, formando a estrutura ramificada característica de um heredograma.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um casal, ambos com tipo sanguíneo AB, decide ter filhos. Considerando a herança do sistema ABO, os tipos sanguíneos possíveis para os filhos desse casal são:",
    opcoes: [
      "apenas AB, sem qualquer outra possibilidade",
      "A, B ou AB, mas nunca O",
      "apenas O, sem qualquer outra possibilidade",
      "A, B, AB ou O, com igual probabilidade para cada tipo",
      "apenas A ou B, mas nunca AB nem O",
    ],
    correta: 1,
    explicacao:
      "Cada progenitor AB produz gametas com alelo IA ou IB (nunca i, já que não possuem esse alelo); combinando os gametas dos dois pais em um quadro de Punnett, os genótipos possíveis nos filhos são IAIA (tipo A), IAIB (tipo AB) e IBIB (tipo B), na proporção 1:2:1, mas nunca ii (tipo O), já que nenhum dos pais carrega o alelo i para transmitir.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um casal deseja saber a probabilidade de seus filhos herdarem tipo sanguíneo O. O pai tem genótipo IAi (tipo sanguíneo A) e a mãe tem genótipo IBi (tipo sanguíneo B). A probabilidade de um filho desse casal ter tipo sanguíneo O é de:",
    opcoes: [
      "50%",
      "25%",
      "0%",
      "100%",
      "75%",
    ],
    correta: 1,
    explicacao:
      "Como ambos os pais são heterozigotos e carregam o alelo i (o pai IAi e a mãe IBi), há uma chance de 1/4 (25%) de que um filho herde o alelo i de ambos os pais simultaneamente, resultando no genótipo homozigoto recessivo ii e, portanto, no tipo sanguíneo O — o quadro de Punnett completo desse cruzamento resulta na proporção 1 IAIB (tipo AB) : 1 IAi (tipo A) : 1 IBi (tipo B) : 1 ii (tipo O).",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um caso em que uma criança tem tipo sanguíneo O, mas seus dois pais têm tipo sanguíneo A. Esse resultado é geneticamente possível se:",
    opcoes: [
      "pelo menos um dos pais tiver obrigatoriamente genótipo IAIA",
      "for impossível que uma criança tipo O tenha pais do tipo A",
      "ambos os pais forem heterozigotos (genótipo IAi), cada um transmitindo o alelo recessivo i para a criança",
      "a criança tiver necessariamente sido trocada na maternidade",
      "o tipo sanguíneo da criança não seguir qualquer padrão de herança genética",
    ],
    correta: 2,
    explicacao:
      "Como o tipo sanguíneo A pode corresponder tanto ao genótipo homozigoto IAIA quanto ao heterozigoto IAi, é perfeitamente possível que dois pais heterozigotos IAi, ambos com tipo sanguíneo A (já que o alelo IA é dominante sobre i), tenham um filho que herde o alelo recessivo i de ambos, resultando no genótipo ii e no tipo sanguíneo O — um exemplo clássico usado para ilustrar como a genética às vezes produz resultados aparentemente surpreendentes, mas perfeitamente explicáveis pelas leis de herança.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a doença hemolítica do recém-nascido (eritroblastose fetal), condição que pode ocorrer quando uma mãe Rh negativo gesta um bebê Rh positivo (herdado do pai Rh positivo), e o sistema imunológico da mãe desenvolve anticorpos contra o fator Rh do bebê. Essa condição costuma representar maior risco:",
    opcoes: [
      "exclusivamente na primeira gestação da mãe, nunca nas seguintes",
      "apenas quando a mãe é Rh positivo e o bebê é Rh negativo",
      "em gestações subsequentes, após uma sensibilização prévia da mãe ao sangue Rh positivo, geralmente ocorrida durante um parto ou aborto anterior",
      "de forma idêntica em qualquer gestação, independentemente de gestações anteriores",
      "apenas em casos que não envolvem qualquer diferença de fator Rh entre mãe e bebê",
    ],
    correta: 2,
    explicacao:
      "Na primeira gestação de uma mãe Rh negativo com um bebê Rh positivo, geralmente não há tempo suficiente para o desenvolvimento de uma resposta imunológica significativa contra o fator Rh do bebê; porém, se sangue fetal Rh positivo entrar em contato com a circulação materna, especialmente durante o parto, a mãe pode se sensibilizar e desenvolver anticorpos contra esse antígeno, o que representa maior risco para gestações Rh positivas subsequentes, quando esses anticorpos maternos já formados podem atravessar a placenta e atacar as hemácias do novo feto.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa como a medicina moderna previne a doença hemolítica do recém-nascido em gestantes Rh negativo com risco de sensibilização, geralmente por meio da administração de uma injeção de imunoglobulina anti-Rh em momentos específicos da gestação e logo após o parto. Essa medida preventiva funciona ao:",
    opcoes: [
      "eliminar completamente qualquer possibilidade futura de gestação da mulher",
      "transformar permanentemente o tipo sanguíneo da mãe de Rh negativo para Rh positivo",
      "neutralizar rapidamente qualquer hemácia fetal Rh positivo que tenha entrado na circulação materna, antes que o sistema imunológico da mãe desenvolva sua própria resposta de anticorpos duradoura",
      "curar diretamente o bebê de qualquer condição genética já existente",
      "impedir totalmente que a mãe tenha qualquer filho Rh positivo no futuro",
    ],
    correta: 2,
    explicacao:
      "A imunoglobulina anti-Rh administrada à mãe age neutralizando rapidamente quaisquer hemácias fetais Rh positivo que possam ter entrado em sua circulação, antes que seu próprio sistema imunológico tenha tempo de reconhecê-las como estranhas e desenvolver uma resposta de anticorpos duradoura contra o fator Rh — essa intervenção preventiva reduziu drasticamente a incidência da doença hemolítica do recém-nascido em gestações subsequentes desde sua introdução na prática médica.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um heredograma em que uma característica recessiva aparece apenas em indivíduos do sexo masculino ao longo de várias gerações, nunca em mulheres, mas com mulheres na família frequentemente identificadas como portadoras (com filhos afetados, mesmo sem manifestar a característica elas mesmas). Esse padrão é característico de uma herança:",
    opcoes: [
      "dominante autossômica",
      "recessiva autossômica comum, sem qualquer relação com os cromossomos sexuais",
      "recessiva ligada ao cromossomo X",
      "exclusivamente ligada ao cromossomo Y",
      "impossível de representar em qualquer heredograma",
    ],
    correta: 2,
    explicacao:
      "O padrão em que uma característica recessiva aparece quase exclusivamente em homens, com mulheres frequentemente atuando como portadoras assintomáticas (heterozigotas, com um X normal e um X afetado), é típico da herança recessiva ligada ao cromossomo X, já que os homens, tendo apenas um cromossomo X, precisam de uma única cópia do alelo recessivo para manifestar a condição, enquanto as mulheres precisam de duas cópias (uma situação mais rara), sendo mais comumente apenas portadoras.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um heredograma em que uma característica dominante aparece em todas as gerações da família, sempre que pelo menos um dos pais a manifesta, sem qualquer padrão de 'salto' entre gerações. Esse padrão de transmissão contínua é consistente com uma herança:",
    opcoes: [
      "recessiva autossômica, na qual são necessárias duas cópias do alelo para manifestar a característica",
      "impossível de ocorrer em qualquer padrão genético conhecido",
      "dominante autossômica, na qual basta uma cópia do alelo dominante para manifestar a característica",
      "exclusivamente ligada ao cromossomo Y, restrita apenas a homens",
      "que não segue qualquer princípio de hereditariedade identificável",
    ],
    correta: 2,
    explicacao:
      "Em uma herança dominante, como o alelo se expressa mesmo em heterozigose (sem portadores 'silenciosos' capazes de esconder o alelo), a característica tende a aparecer de forma contínua ao longo das gerações sempre que ao menos um dos pais a possui, sem o padrão de 'pular gerações' típico de características recessivas, nas quais dois portadores assintomáticos podem gerar um filho afetado mesmo sem que os próprios pais manifestem a condição.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre uma característica de herança autossômica, controlada por genes localizados em autossomos (cromossomos não sexuais, presentes em igual número em homens e mulheres), e uma característica de herança ligada ao sexo, controlada por genes localizados nos cromossomos sexuais (X ou Y). Uma característica de herança autossômica, ao contrário de uma ligada ao X, tende a:",
    opcoes: [
      "afetar exclusivamente homens, nunca mulheres",
      "afetar exclusivamente mulheres, nunca homens",
      "não ter qualquer relação com a genética ou a hereditariedade",
      "afetar homens e mulheres com frequência semelhante, já que ambos os sexos possuem o mesmo número de autossomos",
      "ser transmitida apenas de mãe para filha, nunca para filhos homens",
    ],
    correta: 3,
    explicacao:
      "Como homens e mulheres possuem o mesmo número e tipo de autossomos (22 pares em humanos), diferenciando-se apenas nos cromossomos sexuais (XX nas mulheres, XY nos homens), características controladas por genes autossômicos tendem a afetar ambos os sexos com frequência relativamente semelhante, diferentemente de características ligadas ao cromossomo X, que costumam mostrar diferenças notáveis de frequência entre homens e mulheres, como observado em condições como o daltonismo e a hemofilia.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um caso de disputa de paternidade em que o suposto pai tem tipo sanguíneo O, e a criança em questão tem tipo sanguíneo AB. Do ponto de vista exclusivamente da genética do sistema ABO, essa combinação de tipos sanguíneos:",
    opcoes: [
      "confirma com absoluta certeza que esse homem é o pai biológico da criança",
      "não fornece qualquer informação relevante sobre a possível paternidade",
      "é impossível de ocorrer para qualquer criança do tipo AB, independentemente dos pais",
      "torna geneticamente impossível que esse homem seja o pai biológico da criança, já que o genótipo O (ii) não pode contribuir com o alelo IA nem IB necessários para formar o tipo AB",
      "só seria relevante se a criança tivesse tipo sanguíneo O, e não AB",
    ],
    correta: 3,
    explicacao:
      "Como o tipo sanguíneo O corresponde ao genótipo homozigoto recessivo ii, uma pessoa com esse tipo sanguíneo só pode transmitir o alelo i aos filhos, nunca o IA ou o IB; para que uma criança tenha tipo sanguíneo AB, ela precisa necessariamente herdar um alelo IA de um dos pais e um alelo IB do outro, o que torna geneticamente impossível que um pai com tipo sanguíneo O seja o pai biológico de uma criança com tipo sanguíneo AB — um exemplo de como a genética do sistema ABO pode ser usada para excluir (mas não confirmar definitivamente) uma possível paternidade.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa um heredograma de três gerações em que uma característica recessiva autossômica aparece em um casal de irmãos (um menino e uma menina), filhos de pais não afetados que, por sua vez, descendem de avós comuns, sugerindo consanguinidade (um grau de parentesco relativamente próximo entre os progenitores). A maior incidência de características genéticas recessivas raras em famílias com histórico de consanguinidade se explica porque:",
    opcoes: [
      "a consanguinidade sempre garante que os filhos sejam saudáveis e livres de qualquer condição genética",
      "não existe qualquer relação real entre consanguinidade e a frequência de doenças genéticas recessivas",
      "apenas características dominantes são afetadas pela consanguinidade, nunca as recessivas",
      "parentes próximos têm maior probabilidade de compartilhar os mesmos alelos recessivos raros herdados de um ancestral comum, aumentando a chance de dois portadores se unirem e gerarem um filho homozigoto recessivo",
      "a consanguinidade elimina completamente qualquer alelo recessivo presente na família",
    ],
    correta: 3,
    explicacao:
      "Como parentes próximos compartilham uma proporção maior de seu material genético, herdado de ancestrais comuns relativamente recentes, incluindo possíveis alelos recessivos raros presentes nessa linhagem familiar, a probabilidade de que ambos os progenitores em uma união consanguínea sejam portadores do mesmo alelo recessivo raro é maior do que em uma união entre indivíduos não aparentados, o que aumenta a chance estatística de nascimento de filhos homozigotos recessivos e, portanto, afetados por condições genéticas recessivas raras.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa um heredograma no qual uma característica aparece apenas em mulheres da família, sendo transmitida de mães afetadas para todos os seus filhos (homens e mulheres), mas nunca de pais afetados para seus filhos. Esse padrão pouco comum é consistente com uma herança relacionada ao DNA:",
    opcoes: [
      "do cromossomo Y, transmitido exclusivamente de pai para filho homem",
      "de um autossomo comum, sem qualquer padrão de transmissão diferenciado por sexo",
      "que segue exatamente o mesmo padrão da herança recessiva ligada ao X",
      "mitocondrial, transmitido exclusivamente pela linhagem materna, já que as mitocôndrias do zigoto derivam quase inteiramente do óvulo",
      "impossível de ocorrer em qualquer organismo conhecido",
    ],
    correta: 3,
    explicacao:
      "Como as mitocôndrias do zigoto derivam quase inteiramente do citoplasma do óvulo materno (o espermatozoide contribui apenas com material genético nuclear, e suas próprias mitocôndrias são geralmente eliminadas após a fecundação), características controladas por genes presentes no DNA mitocondrial são transmitidas exclusivamente pela linhagem materna: uma mãe afetada transmite a característica a todos os seus filhos, de ambos os sexos, mas um pai afetado nunca a transmite a nenhum de seus filhos, já que suas mitocôndrias não são repassadas à prole.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a frequência relativa dos diferentes tipos sanguíneos do sistema ABO em populações humanas, notando que o tipo O costuma ser um dos mais comuns em muitas populações ao redor do mundo, embora com variações regionais consideráveis. Ao considerar transfusões de sangue em situações de emergência, quando não há tempo para determinar com precisão o tipo sanguíneo exato do paciente, hospitais costumam manter reservas maiores de sangue tipo:",
    opcoes: [
      "AB positivo, já que é o tipo sanguíneo mais raro entre a maioria das populações estudadas",
      "A positivo exclusivamente, ignorando qualquer outro tipo sanguíneo em situações de emergência",
      "qualquer tipo sanguíneo, já que todos são igualmente seguros para qualquer receptor em qualquer situação",
      "O negativo, já que pode ser transfundido com segurança para receptores de praticamente qualquer tipo sanguíneo do sistema ABO e Rh",
      "B negativo exclusivamente, por ser considerado o tipo mais versátil entre todos",
    ],
    correta: 3,
    explicacao:
      "O sangue tipo O negativo, por não apresentar os antígenos A, B nem o antígeno Rh, é considerado o mais seguro para transfusão de emergência quando o tipo sanguíneo exato do paciente ainda não foi determinado, já que apresenta o menor risco de provocar uma reação imunológica de rejeição relacionada a esses antígenos específicos — por essa razão, hospitais e bancos de sangue costumam dar prioridade especial à manutenção de reservas adequadas desse tipo sanguíneo específico para situações de emergência médica.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um heredograma representando a herança do fator Rh em uma família, no qual um pai Rh negativo (genótipo rr) e uma mãe Rh positivo heterozigota (genótipo Rr) têm filhos. A proporção esperada de filhos Rh positivo e Rh negativo desse casal é de:",
    opcoes: [
      "100% Rh positivo, sem qualquer filho Rh negativo",
      "100% Rh negativo, sem qualquer filho Rh positivo",
      "75% Rh positivo e 25% Rh negativo",
      "25% Rh positivo e 75% Rh negativo",
      "50% Rh positivo e 50% Rh negativo",
    ],
    correta: 4,
    explicacao:
      "O pai rr só pode transmitir o alelo r, e a mãe Rr transmite o alelo R ou r em igual proporção (50% cada); combinando esses gametas, metade dos filhos será Rr (Rh positivo, já que R é dominante) e a outra metade será rr (Rh negativo), resultando em uma proporção de 50% para cada fenótipo — o mesmo padrão observado em qualquer cruzamento-teste entre um homozigoto recessivo e um heterozigoto.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa um caso hipotético em que uma mulher com tipo sanguíneo A (genótipo desconhecido, podendo ser IAIA ou IAi) tem um filho com tipo sanguíneo O com um homem de tipo sanguíneo B (genótipo também desconhecido). Com base apenas no fato de que a criança tem tipo sanguíneo O, é possível concluir que:",
    opcoes: [
      "a mãe é necessariamente homozigota IAIA",
      "o pai é necessariamente homozigoto IBIB",
      "é impossível que essa criança tenha tipo sanguíneo O com esses pais, independentemente do genótipo de cada um",
      "não é possível tirar qualquer conclusão sobre o genótipo dos pais a partir dessa informação",
      "tanto a mãe quanto o pai são necessariamente heterozigotos (genótipos IAi e IBi, respectivamente), já que ambos precisam ter transmitido o alelo i à criança",
    ],
    correta: 4,
    explicacao:
      "Como a criança tem tipo sanguíneo O (genótipo ii), ela precisa ter herdado um alelo i de cada um dos pais; isso significa que a mãe, apesar de ter tipo sanguíneo A, não pode ser homozigota IAIA (que só transmitiria o alelo IA), sendo necessariamente heterozigota IAi, e o mesmo raciocínio se aplica ao pai, que precisa ser heterozigoto IBi, e não homozigoto IBIB — um exemplo de como analisar o tipo sanguíneo dos filhos permite inferir com precisão o genótipo dos pais em certos casos.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a construção de um heredograma para investigar o padrão de herança de uma condição genética específica em uma família numerosa, com informações coletadas ao longo de várias gerações. Para que um heredograma seja útil na determinação do padrão de herança (dominante, recessivo, autossômico ou ligado ao sexo) de uma característica, é importante que ele inclua:",
    opcoes: [
      "apenas o nome completo de cada indivíduo da família, sem qualquer outra informação",
      "exclusivamente informações sobre a renda financeira de cada membro da família",
      "apenas fotografias dos indivíduos, sem qualquer dado sobre a característica estudada",
      "informações sobre qualquer característica da família, exceto a condição genética de interesse",
      "informações precisas sobre quais indivíduos são afetados e não afetados, o sexo de cada indivíduo e as relações de parentesco entre eles ao longo de múltiplas gerações",
    ],
    correta: 4,
    explicacao:
      "Um heredograma útil para análise genética precisa registrar com precisão quais indivíduos manifestam a característica em estudo, o sexo de cada um (já que muitos padrões de herança diferem entre homens e mulheres) e as relações de parentesco exatas entre eles ao longo de múltiplas gerações, permitindo ao geneticista identificar padrões de transmissão que ajudam a determinar se a característica segue herança dominante ou recessiva, autossômica ou ligada ao sexo.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa por que, mesmo sabendo que uma pessoa tem tipo sanguíneo A, não é possível determinar com certeza absoluta, apenas por essa informação, se seu genótipo é IAIA (homozigoto) ou IAi (heterozigoto). Essa ambiguidade ocorre porque:",
    opcoes: [
      "o tipo sanguíneo A corresponde a um único genótipo possível, sem qualquer ambiguidade",
      "o alelo i é sempre dominante sobre o alelo IA em qualquer circunstância",
      "não existe qualquer relação entre genótipo e fenótipo no sistema sanguíneo ABO",
      "apenas o genótipo IAIA pode produzir o tipo sanguíneo A, nunca o IAi",
      "a relação de dominância completa entre IA e i faz com que ambos os genótipos produzam exatamente o mesmo fenótipo observável (tipo sanguíneo A)",
    ],
    correta: 4,
    explicacao:
      "Como o alelo IA é dominante sobre o alelo i, tanto o genótipo homozigoto IAIA quanto o heterozigoto IAi produzem exatamente o mesmo fenótipo observável — o tipo sanguíneo A —, tornando impossível distinguir entre os dois genótipos apenas observando o tipo sanguíneo da pessoa; para determinar com certeza qual dos dois genótipos está presente, seria necessário examinar os tipos sanguíneos dos filhos dessa pessoa (por meio de um cruzamento-teste) ou realizar uma análise genética molecular direta.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "O sistema sanguíneo ABO é controlado por um gene com três alelos possíveis na população (IA, IB e i), mas cada indivíduo herda apenas dois desses alelos, um de cada progenitor. Considerando todas as combinações possíveis entre esses três alelos, o número total de genótipos diferentes que podem existir para o sistema ABO é de:",
    opcoes: [
      "seis genótipos diferentes: IAIA, IAi, IBIB, IBi, IAIB e ii",
      "apenas quatro genótipos, um para cada tipo sanguíneo",
      "três genótipos, um para cada alelo isoladamente",
      "dois genótipos, um dominante e um recessivo",
      "nove genótipos, considerando todas as combinações possíveis com repetição livre",
    ],
    correta: 0,
    explicacao:
      "Combinando os três alelos (IA, IB, i) dois a dois, considerando tanto pares de alelos iguais quanto diferentes, chega-se a seis genótipos possíveis: IAIA e IAi (ambos tipo A), IBIB e IBi (ambos tipo B), IAIB (tipo AB) e ii (tipo O); note que, apesar de existirem seis genótipos, eles produzem apenas quatro fenótipos observáveis, já que a dominância de IA e IB sobre i faz com que dois genótipos diferentes correspondam ao mesmo tipo sanguíneo em dois casos.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "O daltonismo, condição caracterizada pela dificuldade em distinguir certas cores, geralmente entre o vermelho e o verde, é uma das heranças ligadas ao sexo mais estudadas em genética humana. Do ponto de vista genético, o daltonismo mais comum é causado por um alelo:",
    opcoes: [
      "recessivo localizado no cromossomo X",
      "dominante localizado no cromossomo Y",
      "recessivo localizado em um autossomo, sem qualquer relação com os cromossomos sexuais",
      "dominante localizado em um autossomo",
      "codominante em relação ao alelo para visão normal de cores",
    ],
    correta: 0,
    explicacao:
      "O daltonismo mais comum é causado por um alelo recessivo localizado no cromossomo X, o que explica por que a condição é bem mais frequente em homens do que em mulheres: como os homens possuem apenas um cromossomo X, basta uma cópia do alelo recessivo para manifestar a condição, enquanto as mulheres, com dois cromossomos X, precisam herdar o alelo recessivo de ambos os pais para serem afetadas.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "A hemofilia é uma condição genética que compromete a capacidade de coagulação do sangue, fazendo com que pequenos ferimentos possam causar sangramentos prolongados e potencialmente perigosos. Assim como o daltonismo, a hemofilia mais comum é causada por um alelo:",
    opcoes: [
      "recessivo localizado no cromossomo X",
      "dominante localizado no cromossomo Y",
      "recessivo localizado em um autossomo comum a homens e mulheres",
      "dominante localizado em um autossomo comum a homens e mulheres",
      "presente em igual frequência absoluta entre homens e mulheres",
    ],
    correta: 0,
    explicacao:
      "A hemofilia mais comum também é causada por um alelo recessivo ligado ao cromossomo X, o que faz com que a condição seja consideravelmente mais frequente em homens, que possuem apenas um cromossomo X e por isso precisam de uma única cópia do alelo recessivo para manifestar os sintomas, enquanto mulheres heterozigotas costumam ser apenas portadoras assintomáticas.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Em genética, o termo 'portador' (ou 'portadora') se refere a um indivíduo heterozigoto para um alelo recessivo causador de determinada condição, que não manifesta essa condição no próprio fenótipo, mas pode transmitir o alelo recessivo aos seus filhos. Em um heredograma que acompanha uma condição recessiva ligada ao cromossomo X, como a hemofilia, uma mulher portadora tem genótipo:",
    opcoes: [
      "heterozigoto, com um cromossomo X carregando o alelo normal e outro carregando o alelo recessivo da condição",
      "homozigoto recessivo para o alelo da condição, manifestando a hemofilia normalmente",
      "homozigoto dominante, sem qualquer cópia do alelo recessivo",
      "portador do alelo recessivo apenas no cromossomo Y",
      "impossível de existir geneticamente em qualquer heredograma",
    ],
    correta: 0,
    explicacao:
      "Uma mulher portadora de uma condição recessiva ligada ao X é heterozigota, possuindo um cromossomo X com o alelo normal (dominante) e outro cromossomo X com o alelo recessivo causador da condição; como o alelo normal mascara o efeito do recessivo, ela não manifesta a condição, mas tem 50% de chance de transmitir o cromossomo X afetado a cada filho, seja homem ou mulher.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Estudos populacionais indicam que, entre indivíduos não indígenas no Brasil, a distribuição do fator Rh é bastante desigual: cerca de oitenta e cinco por cento das pessoas são Rh positivo, e apenas cerca de quinze por cento são Rh negativo. Essa diferença expressiva de frequência entre os dois fenótipos do fator Rh se relaciona ao fato de que o alelo Rh negativo (r) é:",
    opcoes: [
      "recessivo, exigindo duas cópias do alelo para se manifestar, o que naturalmente reduz sua frequência fenotípica em relação ao alelo dominante",
      "dominante, exigindo apenas uma cópia para se manifestar, o que deveria torná-lo mais frequente",
      "letal em qualquer combinação genotípica, eliminando-se automaticamente da população",
      "inexistente na maior parte das populações humanas ao redor do mundo",
      "transmitido apenas por via materna, nunca por via paterna",
    ],
    correta: 0,
    explicacao:
      "Como o alelo Rh negativo é recessivo, ele só se manifesta no fenótipo quando presente em dose dupla (genótipo rr), enquanto basta uma única cópia do alelo dominante R para que o fenótipo Rh positivo apareça; essa relação de dominância, combinada à frequência relativa de cada alelo na população, ajuda a explicar por que o fenótipo Rh positivo é consideravelmente mais comum do que o Rh negativo na maioria das populações estudadas.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "O sistema ABO é um exemplo clássico de polialelia (ou alelos múltiplos), fenômeno em que um gene apresenta mais de duas variantes alélicas possíveis na população, mesmo que cada indivíduo diploide carregue apenas duas dessas variantes ao mesmo tempo. Diferentemente da herança mendeliana simples estudada por Mendel em ervilhas, que costuma envolver apenas dois alelos por gene, a polialelia do sistema ABO demonstra que:",
    opcoes: [
      "cada indivíduo humano carrega necessariamente os três alelos do sistema ABO simultaneamente",
      "uma população pode apresentar diversas variantes alélicas para um mesmo gene, ampliando a variedade de genótipos e fenótipos possíveis, mesmo que cada indivíduo só possua duas dessas variantes",
      "a existência de mais de dois alelos torna impossível qualquer análise de dominância entre eles",
      "apenas um único alelo pode existir para qualquer gene em uma população humana",
      "a polialelia é exclusiva do sistema ABO, não ocorrendo em nenhum outro gene conhecido",
    ],
    correta: 1,
    explicacao:
      "A polialelia amplia a diversidade genética disponível para um gene ao permitir a existência de três ou mais variantes alélicas circulando em uma população, mesmo que, por se tratar de organismos diploides, cada indivíduo humano só possa carregar duas dessas variantes por vez, uma em cada cromossomo homólogo; esse fenômeno é responsável pela maior complexidade de genótipos e fenótipos observada no sistema ABO em comparação a genes com apenas dois alelos, como muitos dos estudados originalmente por Mendel.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um homem daltônico (genótipo XdY) tem filhos com uma mulher que enxerga cores normalmente e é homozigota para o alelo dominante (genótipo XDXD). Considerando que o daltonismo é causado por um alelo recessivo ligado ao cromossomo X, o resultado esperado para os filhos desse casal é:",
    opcoes: [
      "todas as filhas e todos os filhos homens serão daltônicos",
      "todas as filhas serão portadoras (XDXd), sem manifestar o daltonismo, e todos os filhos homens enxergarão cores normalmente (XDY)",
      "metade das filhas e metade dos filhos homens serão daltônicos",
      "nenhum filho, de qualquer sexo, poderá ser portador do alelo recessivo",
      "todos os filhos homens serão daltônicos, e todas as filhas enxergarão cores normalmente sem carregar o alelo recessivo",
    ],
    correta: 1,
    explicacao:
      "O pai daltônico transmite seu único cromossomo X (contendo o alelo Xd) a todas as suas filhas, que recebem também um cromossomo X com o alelo dominante XD da mãe homozigota, tornando-se portadoras heterozigotas (XDXd) sem manifestar o daltonismo; já os filhos homens recebem o cromossomo Y do pai e um cromossomo X com o alelo XD da mãe, resultando no genótipo XDY, com visão de cores normal, já que não herdam o cromossomo X paterno.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Uma mulher portadora do alelo do daltonismo (genótipo XDXd), mas que enxerga cores normalmente, tem filhos com um homem que também enxerga cores normalmente (genótipo XDY). Entre os filhos homens desse casal, a probabilidade de nascer um menino daltônico é de:",
    opcoes: [
      "0%, já que nenhum filho homem pode herdar um alelo recessivo da mãe portadora",
      "50%, já que a mãe transmite o alelo Xd para metade de seus filhos homens",
      "100%, já que todos os filhos homens necessariamente herdam o alelo Xd da mãe",
      "25%, considerando apenas os filhos homens como base de cálculo",
      "impossível de calcular sem mais informações sobre o genótipo do pai",
    ],
    correta: 1,
    explicacao:
      "Como os filhos homens recebem o cromossomo Y do pai e um dos dois cromossomos X da mãe, e a mãe portadora (XDXd) transmite o cromossomo X com o alelo Xd para metade de seus gametas, a probabilidade de um filho homem herdar esse alelo recessivo e ser daltônico (genótipo XdY, já que não há um segundo X para mascarar o efeito) é de 50% entre os filhos do sexo masculino desse casal.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um homem hemofílico (genótipo XhY) tem filhos com uma mulher que não é portadora do alelo da hemofilia (genótipo XHXH). Considerando que a hemofilia é causada por um alelo recessivo ligado ao cromossomo X, é esperado que, entre os filhos desse casal:",
    opcoes: [
      "todos os filhos, de ambos os sexos, sejam hemofílicos",
      "todas as filhas sejam portadoras heterozigotas (XHXh), e todos os filhos homens sejam normais (XHY), sem qualquer caso de hemofilia manifesta",
      "todas as filhas sejam hemofílicas, e todos os filhos homens sejam normais",
      "nenhum filho, de qualquer sexo, carregue o alelo recessivo da hemofilia",
      "metade dos filhos homens e metade das filhas sejam hemofílicos",
    ],
    correta: 1,
    explicacao:
      "Como o pai hemofílico transmite seu único cromossomo X (com o alelo Xh) a todas as filhas, e a mãe homozigota normal transmite um cromossomo X com o alelo XH a todos os filhos, todas as filhas se tornam heterozigotas portadoras (XHXh), sem manifestar a hemofilia, enquanto todos os filhos homens recebem o cromossomo Y do pai e um X com o alelo XH da mãe, resultando em genótipo XHY, sem hemofilia.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Uma mulher portadora do alelo da hemofilia (genótipo XHXh) tem filhos com um homem hemofílico (genótipo XhY). Considerando todos os filhos possíveis desse casal, a probabilidade de nascer uma filha hemofílica (genótipo XhXh) é de:",
    opcoes: [
      "0%, já que mulheres nunca podem manifestar hemofilia",
      "25%, considerando o total de filhos possíveis do casal",
      "50%, considerando o total de filhos possíveis do casal",
      "100%, já que todas as filhas herdam necessariamente dois alelos recessivos",
      "impossível de calcular, já que o pai é hemofílico",
    ],
    correta: 1,
    explicacao:
      "A mãe portadora (XHXh) transmite o alelo XH ou Xh com igual probabilidade, e o pai hemofílico (XhY) transmite o alelo Xh a todas as filhas; combinando essas possibilidades no quadro de Punnett, um quarto (25%) dos filhos totais será do genótipo XhXh (filha hemofílica), já que essa combinação exige tanto o alelo Xh vindo da mãe (probabilidade de 1/2) quanto o alelo Xh vindo do pai, que é garantido para qualquer filha.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um casal em que tanto o homem quanto a mulher são daltônicos (genótipos XdY e XdXd, respectivamente) decide ter filhos. Considerando exclusivamente a herança do daltonismo, a probabilidade de um filho desse casal, seja menino ou menina, nascer com visão de cores normal é de:",
    opcoes: [
      "50%, distribuídos igualmente entre meninos e meninas normais",
      "25%, considerando apenas as filhas do casal",
      "0%, já que todos os filhos, de qualquer sexo, herdarão obrigatoriamente apenas alelos recessivos dos dois pais",
      "100%, já que a combinação de dois pais daltônicos sempre produz filhos com visão normal",
      "75%, considerando o total de filhos do casal",
    ],
    correta: 2,
    explicacao:
      "Como a mãe é homozigota recessiva (XdXd), ela só pode transmitir o alelo Xd a qualquer filho; e como o pai é XdY, ele transmite Xd às filhas e Y aos filhos homens — assim, todas as filhas serão XdXd (daltônicas) e todos os filhos homens serão XdY (também daltônicos), resultando em 0% de probabilidade de qualquer filho, independentemente do sexo, nascer com visão de cores normal.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o risco de doença hemolítica do recém-nascido relacionado à incompatibilidade do fator Rh entre mãe e feto. Esse risco específico de incompatibilidade Rh só existe quando:",
    opcoes: [
      "a mãe é Rh positivo e o pai é Rh negativo, independentemente do fator Rh do feto",
      "ambos os pais são Rh negativo, gerando sempre um feto Rh positivo",
      "a mãe é Rh negativo e o pai é Rh positivo, criando a possibilidade de um feto Rh positivo cujo sangue seja incompatível com o da mãe",
      "ambos os pais são Rh positivo, independentemente do genótipo do feto",
      "o casal tem o mesmo tipo sanguíneo no sistema ABO, independentemente do fator Rh de cada um",
    ],
    correta: 2,
    explicacao:
      "O risco de incompatibilidade Rh entre mãe e feto surge especificamente quando a mãe é Rh negativo e o pai é Rh positivo, já que essa combinação torna possível a gestação de um feto Rh positivo (herdando o alelo dominante do pai), cujas hemácias podem sensibilizar o sistema imunológico materno; quando a mãe já é Rh positivo, ou quando ambos os pais são Rh negativo (gerando sempre um feto Rh negativo, idêntico à mãe), esse risco específico de incompatibilidade não existe.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Em casos raros, conhecidos como fenótipo Bombaim, um indivíduo pode apresentar genótipo IAi ou IBi, capaz de produzir os antígenos A ou B em condições normais, mas ainda assim ter seu sangue classificado como tipo O em testes convencionais, por não conseguir produzir a substância precursora (antígeno H) necessária para formar os antígenos A e B na superfície das hemácias. Esse fenômeno raro é importante em genética porque:",
    opcoes: [
      "prova que o sistema ABO não segue nenhum padrão de herança genética conhecido",
      "significa que o fenótipo Bombaim é, na verdade, idêntico ao tipo sanguíneo O comum em todos os aspectos genéticos",
      "ilustra uma exceção ao padrão usual de herança do sistema ABO, na qual o fenótipo observado pode não corresponder diretamente ao genótipo esperado devido à interação com outro gene",
      "demonstra que os alelos IA e IB deixaram de existir nesses indivíduos",
      "comprova que qualquer pessoa com tipo sanguíneo O possui necessariamente o fenótipo Bombaim",
    ],
    correta: 2,
    explicacao:
      "O fenótipo Bombaim é um exemplo de como a expressão de um gene pode depender da ação de outro gene diferente (nesse caso, o gene responsável pela produção do antígeno H precursor): mesmo carregando os alelos IA ou IB capazes de produzir os antígenos A ou B, um indivíduo sem o antígeno H funcional não consegue formar esses antígenos finais, resultando em um fenótipo sanguíneo tipo O aparente, apesar de um genótipo que normalmente produziria tipo A ou B — um caso raro, mas didaticamente importante, de discrepância entre genótipo e fenótipo esperado.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um casal apresenta os seguintes genótipos combinados para os sistemas ABO e Rh: o pai é IAi e Rr, e a mãe é IBi e Rr, sendo os dois genes localizados em cromossomos diferentes e, portanto, segregando de forma independente. Aplicando o princípio da segregação independente, a probabilidade de um filho desse casal ter tipo sanguíneo O e ser Rh negativo simultaneamente (genótipo ii e rr) é de:",
    opcoes: [
      "1/4, considerando apenas a probabilidade do tipo sanguíneo O",
      "1/2, somando as probabilidades de cada característica isoladamente",
      "1/16, resultado da multiplicação da probabilidade de 1/4 para tipo O pela probabilidade de 1/4 para Rh negativo",
      "1/8, considerando apenas metade da multiplicação correta das probabilidades",
      "impossível de calcular sem informações adicionais sobre os avós do casal",
    ],
    correta: 2,
    explicacao:
      "Como os genes do sistema ABO e do fator Rh estão em cromossomos diferentes e segregam de forma independente, a probabilidade de um filho apresentar tipo sanguíneo O (genótipo ii, com probabilidade de 1/4 nesse cruzamento IAi × IBi) e, simultaneamente, ser Rh negativo (genótipo rr, com probabilidade de 1/4 nesse cruzamento Rr × Rr) é o produto das duas probabilidades individuais: 1/4 × 1/4 = 1/16, aplicando a mesma regra do produto usada em cruzamentos di-híbridos mendelianos clássicos.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Em um heredograma de três gerações, uma característica recessiva aparece em dois irmãos homens da terceira geração, filhos de uma mãe não afetada e de um pai também não afetado. O avô materno desses meninos, por sua vez, era afetado pela mesma característica, enquanto a avó materna não era afetada. Considerando que essa característica poderia ser autossômica recessiva ou recessiva ligada ao cromossomo X, o fato de não haver nenhuma mulher afetada em toda a família, com a característica reaparecendo especificamente nos netos homens do avô afetado, favorece a hipótese de que a herança seja:",
    opcoes: [
      "autossômica dominante, já que a característica aparece nos netos",
      "impossível de ocorrer, dado que o avô materno era afetado, mas a mãe não",
      "recessiva ligada ao cromossomo X, com a mãe atuando como portadora heterozigota que herdou o alelo recessivo do avô materno afetado",
      "ligada exclusivamente ao cromossomo Y, transmitida apenas entre homens",
      "autossômica recessiva, com o pai obrigatoriamente sendo portador heterozigoto",
    ],
    correta: 2,
    explicacao:
      "O padrão descrito — apenas homens afetados, com a transmissão passando por uma mulher aparentemente não afetada (a mãe) — é típico da herança recessiva ligada ao cromossomo X: como o avô materno era afetado (genótipo XaY), ele obrigatoriamente transmitiu seu único cromossomo X, contendo o alelo recessivo, à mãe desses meninos, tornando-a necessariamente uma portadora heterozigota (XAXa), mesmo sem manifestar a característica; essa mãe, por sua vez, transmitiu o alelo recessivo a metade de seus filhos homens, que o manifestam por possuírem apenas um cromossomo X.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Diferentemente da herança recessiva ligada ao X, em que homens afetados nunca transmitem a condição a seus filhos homens (apenas às filhas, que se tornam portadoras), a herança dominante ligada ao cromossomo X apresenta um padrão diferente: um homem afetado (genótipo XAY) transmite a característica a:",
    opcoes: [
      "todos os seus filhos homens, mas a nenhuma de suas filhas",
      "metade de seus filhos, independentemente do sexo",
      "nenhum de seus filhos, de qualquer sexo, já que o alelo dominante não pode ser transmitido por via paterna",
      "todas as suas filhas, que recebem seu único cromossomo X (com o alelo dominante), mas a nenhum de seus filhos homens, que recebem apenas o cromossomo Y do pai",
      "todos os seus filhos, de ambos os sexos, sem exceção",
    ],
    correta: 3,
    explicacao:
      "Assim como em qualquer herança ligada ao X, um pai transmite seu único cromossomo X exclusivamente às filhas, e o cromossomo Y exclusivamente aos filhos homens; por isso, um pai afetado por uma condição dominante ligada ao X transmite obrigatoriamente a característica a todas as suas filhas (que recebem o X paterno com o alelo dominante), mas nunca aos filhos homens, que recebem apenas o Y do pai — um padrão de transmissão que ajuda a distinguir a herança dominante ligada ao X de padrões autossômicos ou ligados ao Y.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Além dos antígenos presentes na superfície das hemácias, o plasma sanguíneo de cada tipo do sistema ABO contém naturalmente anticorpos contra os antígenos que a própria pessoa não possui. Uma pessoa com tipo sanguíneo O, que não possui antígenos A nem B em suas hemácias, apresenta no plasma:",
    opcoes: [
      "nenhum anticorpo relacionado ao sistema ABO",
      "apenas anticorpos anti-A, sem qualquer anticorpo anti-B",
      "apenas anticorpos anti-B, sem qualquer anticorpo anti-A",
      "anticorpos anti-A e anti-B simultaneamente, o que explica por que não pode receber sangue dos tipos A, B ou AB com segurança",
      "anticorpos contra o próprio antígeno O, atacando suas próprias hemácias",
    ],
    correta: 3,
    explicacao:
      "Como a pessoa do tipo O não possui os antígenos A nem B em suas hemácias, seu sistema imunológico não os reconhece como próprios e produz naturalmente anticorpos anti-A e anti-B circulantes no plasma; é justamente a presença desses dois anticorpos que impede uma pessoa tipo O de receber com segurança sangue de doadores dos tipos A, B ou AB, apesar de seu próprio sangue poder ser doado, em geral, para receptores de qualquer tipo ABO, já que suas hemácias não carregam antígenos que provoquem essa reação nos anticorpos do receptor.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa uma pessoa Rh positivo de genótipo desconhecido (podendo ser RR ou Rr) que deseja descobrir seu genótipo exato por meio de um cruzamento-teste, unindo-se a uma pessoa Rh negativo (genótipo rr, o único genótipo possível para esse fenótipo). Se, entre os filhos desse casal, aparecer ao menos um filho Rh negativo, é possível concluir que a pessoa de genótipo inicialmente desconhecido é:",
    opcoes: [
      "homozigota dominante (RR), sem qualquer alelo recessivo",
      "necessariamente estéril, incapaz de gerar qualquer filho",
      "impossível de determinar mesmo com essa informação adicional",
      "heterozigota (Rr), já que apenas esse genótipo poderia gerar um gameta com o alelo r necessário para produzir um filho Rh negativo",
      "homozigota recessiva (rr), assim como o cônjuge Rh negativo",
    ],
    correta: 3,
    explicacao:
      "Como o cônjuge Rh negativo (rr) só pode transmitir o alelo r, um filho Rh negativo (genótipo rr) só pode surgir se o outro progenitor também tiver transmitido um alelo r, o que só é possível se essa pessoa for heterozigota (Rr); se fosse homozigota dominante (RR), todos os filhos do casal seriam obrigatoriamente Rh positivo (Rr), nunca Rh negativo, o que torna esse cruzamento-teste uma ferramenta útil para revelar o genótipo antes desconhecido.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Um casal apresenta os genótipos IAi Rr (pai) e IAi rr (mãe) para os sistemas ABO e Rh, respectivamente, com os dois genes em cromossomos diferentes. Aplicando a segregação independente desses dois genes, a probabilidade de um filho desse casal ter tipo sanguíneo O e ser Rh negativo simultaneamente é de:",
    opcoes: [
      "1/4, considerando apenas a probabilidade do tipo sanguíneo O",
      "1/16, resultado equivocado de uma multiplicação incorreta das probabilidades individuais",
      "1/2, somando diretamente as duas probabilidades individuais",
      "1/8, resultado da multiplicação da probabilidade de 1/4 para tipo O pela probabilidade de 1/2 para Rh negativo",
      "0, já que essa combinação de fenótipos seria geneticamente impossível para esse casal",
    ],
    correta: 3,
    explicacao:
      "No cruzamento IAi × IAi para o sistema ABO, a probabilidade de um filho ter tipo sanguíneo O (genótipo ii) é de 1/4; já no cruzamento Rr × rr para o fator Rh, a probabilidade de um filho ser Rh negativo (genótipo rr) é de 1/2, já que o progenitor rr só transmite o alelo r e o progenitor Rr transmite R ou r em igual proporção; multiplicando as duas probabilidades independentes, 1/4 × 1/2 = 1/8 é a probabilidade combinada de um filho ter tipo sanguíneo O e ser Rh negativo simultaneamente.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Um geneticista analisa dois heredogramas diferentes, ambos mostrando uma característica recessiva rara. No primeiro heredograma, a característica afeta homens e mulheres em proporções semelhantes, e uma filha pode ser afetada mesmo tendo um pai afetado e uma mãe não afetada, desde que a mãe também carregue o alelo recessivo. No segundo heredograma, a característica afeta quase exclusivamente homens, e um pai afetado nunca tem filhos homens afetados diretamente por ele, apenas filhas portadoras. Esses dois padrões distintos permitem diferenciar, respectivamente, uma herança:",
    opcoes: [
      "dominante ligada ao X (primeiro heredograma) de uma herança recessiva autossômica (segundo heredograma)",
      "mitocondrial (primeiro heredograma) de uma herança ligada ao cromossomo Y (segundo heredograma)",
      "idêntica em ambos os casos, sem qualquer diferença real entre os dois heredogramas",
      "autossômica recessiva (primeiro heredograma) de uma herança recessiva ligada ao cromossomo X (segundo heredograma)",
      "impossível de distinguir com base apenas nesses padrões de transmissão descritos",
    ],
    correta: 3,
    explicacao:
      "No primeiro heredograma, a distribuição relativamente igual entre os sexos e a possibilidade de uma filha herdar a condição de um pai afetado combinado a uma mãe portadora (mas não necessariamente afetada) são características de uma herança autossômica recessiva, já que os autossomos estão presentes em igual número em ambos os sexos; no segundo heredograma, a predominância quase exclusiva em homens e o fato de um pai afetado nunca transmitir a condição diretamente a filhos homens (que recebem dele apenas o cromossomo Y, e não o X afetado) são marcas características da herança recessiva ligada ao cromossomo X.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Em heredogramas, além dos símbolos de quadrados e círculos representando sexo e do preenchimento indicando indivíduos afetados, existe uma convenção de numeração: cada geração é identificada por um algarismo romano (I, II, III...), enquanto cada indivíduo dentro de determinada geração recebe um número em algarismo arábico (1, 2, 3...), permitindo identificar precisamente qualquer indivíduo do heredograma, como 'II-3'. Essa convenção de numeração é importante porque:",
    opcoes: [
      "substitui completamente a necessidade de usar quadrados e círculos para indicar o sexo dos indivíduos",
      "indica automaticamente se a característica estudada é dominante ou recessiva, sem qualquer análise adicional",
      "é usada exclusivamente em heredogramas de características ligadas ao cromossomo Y",
      "elimina a necessidade de conectar os indivíduos por linhas de parentesco no heredograma",
      "permite referenciar de forma clara e inequívoca qualquer indivíduo específico do heredograma, mesmo em famílias grandes com muitos membros ao longo de várias gerações",
    ],
    correta: 4,
    explicacao:
      "A combinação do algarismo romano da geração com o algarismo arábico da posição do indivíduo dentro dela (como em 'II-3', o terceiro indivíduo listado na segunda geração) permite referenciar de forma precisa e sem ambiguidade qualquer pessoa específica dentro de um heredograma, o que é especialmente útil ao discutir ou publicar a análise genética de famílias grandes, com muitos membros distribuídos ao longo de diversas gerações.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Além dos símbolos que indicam sexo e status de afetado ou não afetado, os heredogramas utilizam outras convenções gráficas para representar informações adicionais sobre os indivíduos da família. Um símbolo (quadrado ou círculo) atravessado por uma linha diagonal geralmente indica que aquele indivíduo:",
    opcoes: [
      "é obrigatoriamente portador heterozigoto da característica em estudo",
      "possui sexo biológico indeterminado",
      "nunca teve qualquer filho ao longo da vida",
      "foi diagnosticado com uma condição genética diferente da que está sendo estudada no heredograma",
      "já é falecido",
    ],
    correta: 4,
    explicacao:
      "Por convenção amplamente adotada na construção de heredogramas, uma linha diagonal cruzando o símbolo de um indivíduo (quadrado ou círculo) indica que essa pessoa já é falecida, uma informação relevante especialmente ao reconstruir a história genética de famílias ao longo de várias gerações, complementando as demais convenções gráficas que indicam sexo e status de afetado.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o caso de gêmeos univitelinos (monozigóticos), formados a partir da divisão de um único óvulo fecundado por um único espermatozoide, e por isso geneticamente idênticos entre si. Do ponto de vista da genética do sistema ABO, é esperado que gêmeos univitelinos:",
    opcoes: [
      "possam ter tipos sanguíneos completamente diferentes, sem qualquer restrição genética",
      "tenham sempre tipo sanguíneo O, independentemente do genótipo dos pais",
      "não possam ser comparados geneticamente entre si de forma alguma",
      "tenham genótipos diferentes para o sistema ABO, mas fenótipos idênticos",
      "tenham necessariamente o mesmo tipo sanguíneo, já que compartilham exatamente o mesmo genótipo, incluindo os alelos do sistema ABO",
    ],
    correta: 4,
    explicacao:
      "Como os gêmeos univitelinos se originam da divisão de um único zigoto, eles compartilham exatamente o mesmo material genético, incluindo os mesmos alelos do sistema ABO herdados dos pais; por isso, é esperado que tenham necessariamente o mesmo genótipo e, consequentemente, o mesmo tipo sanguíneo — diferentemente dos gêmeos bivitelinos (dizigóticos), que se originam de dois óvulos e dois espermatozoides diferentes e podem ter tipos sanguíneos distintos, assim como quaisquer outros irmãos comuns.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "dificil",
    enunciado:
      "Uma mulher com tipo sanguíneo AB (genótipo IAIB) tem filhos com um homem de tipo sanguíneo O (genótipo ii). Considerando exclusivamente a herança do sistema ABO, os tipos sanguíneos possíveis para os filhos desse casal são:",
    opcoes: [
      "apenas AB, sem qualquer outra possibilidade",
      "apenas O, sem qualquer outra possibilidade",
      "A, B, AB ou O, com igual probabilidade para cada tipo",
      "apenas AB ou O, nunca A nem B isoladamente",
      "apenas A ou B, cada um com 50% de probabilidade, nunca AB nem O",
    ],
    correta: 4,
    explicacao:
      "A mãe AB produz gametas com o alelo IA ou o alelo IB (nunca ambos juntos, e nunca o alelo i, que ela não possui), enquanto o pai O só pode transmitir o alelo i; combinando essas possibilidades, os únicos genótipos possíveis nos filhos são IAi (tipo A) e IBi (tipo B), cada um com 50% de probabilidade, tornando geneticamente impossível que esse casal tenha um filho com tipo sanguíneo AB ou O.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "media",
    enunciado:
      "Em um heredograma, uma mulher da segunda geração é filha de um pai afetado por uma condição recessiva ligada ao cromossomo X (genótipo XaY) e de uma mãe não afetada e não portadora (genótipo XAXA), sendo, portanto, obrigatoriamente portadora heterozigota (XAXa). Se essa mulher tiver filhos com um homem não afetado (genótipo XAY), a probabilidade de que um filho homem do casal seja afetado pela condição é de:",
    opcoes: [
      "0%, já que o pai desses filhos não é afetado",
      "100%, já que a mãe é portadora obrigatória",
      "25%, considerando o total de filhos do casal, incluindo meninas",
      "impossível de calcular sem saber o genótipo dos avós paternos",
      "50%, considerando apenas os filhos homens como base do cálculo",
    ],
    correta: 4,
    explicacao:
      "Como o pai desses filhos (XAY) não transmite nenhum alelo relacionado à condição a filhos homens (apenas o cromossomo Y), o genótipo dos meninos depende exclusivamente do cromossomo X recebido da mãe portadora, que transmite o alelo XA ou Xa com igual probabilidade; assim, considerando apenas os filhos homens, a probabilidade de um deles ser afetado (genótipo XaY) é de 50%, o mesmo padrão observado em qualquer cruzamento entre uma mulher portadora heterozigota e um homem não afetado para uma condição recessiva ligada ao X.",
  },
  {
    materia: "biologia",
    tema: "Genética: grupos sanguíneos e heredogramas",
    dificuldade: "facil",
    enunciado:
      "Existem diferentes tipos de hemofilia, sendo a hemofilia A (causada pela deficiência do fator de coagulação VIII) a mais comum, e a hemofilia B (causada pela deficiência do fator IX) menos frequente. Apesar de afetarem fatores de coagulação diferentes, ambos os tipos de hemofilia compartilham o mesmo padrão de herança genética, sendo causados por alelos:",
    opcoes: [
      "dominantes localizados em autossomos, no mesmo gene",
      "recessivos localizados em autossomos diferentes, sem qualquer relação com o sexo",
      "dominantes localizados no cromossomo Y, restritos a homens",
      "codominantes entre si, expressando-se simultaneamente em qualquer indivíduo afetado",
      "recessivos localizados no cromossomo X, em genes diferentes um do outro",
    ],
    correta: 4,
    explicacao:
      "Tanto a hemofilia A quanto a hemofilia B são causadas por alelos recessivos localizados no cromossomo X, embora em genes diferentes (responsáveis por fatores de coagulação distintos, VIII e IX, respectivamente), o que explica por que ambas seguem o mesmo padrão geral de herança recessiva ligada ao X, afetando predominantemente homens e tendo mulheres heterozigotas como portadoras assintomáticas mais frequentemente do que afetadas.",
  },
];
