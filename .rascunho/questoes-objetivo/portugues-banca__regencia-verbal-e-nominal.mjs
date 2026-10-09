/* Rascunho — Português de banca / Regência verbal e nominal.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), todas autorais.
   Gramática não se confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram regências assentadas na gramática normativa:
   obedecer, responder, assistir (ver), aspirar (desejar), preferir, agradecer,
   simpatizar, morar, ir, gostar, precisar, esquecer-se, lembrar-se, implicar
   (acarretar), custar, proceder, aludir, aderir, ater-se, optar, zelar, insistir,
   consistir, sonhar, acreditar; os nomes acesso, fiel, ciente, compatível,
   propenso e preferível; e a regência mantida no pronome relativo. Ficaram de
   fora, de propósito, os casos em que a gramática admite as duas regências
   (visar, informar, pagar, satisfazer, atender, namorar com). */

export const materia = "portugues-banca";
export const tema = "Regência verbal e nominal";
export const arquivo = "portugues-banca__regencia-verbal-e-nominal";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Em qual das frases a regência do verbo obedecer está de acordo com a norma-padrão?",
    o: ["Os alunos obedecem às regras da escola.", "Os alunos obedecem as regras da escola.", "Os alunos obedecem com as regras da escola.", "Os alunos obedecem das regras da escola.", "Os alunos obedecem nas regras da escola."],
    x: "Obedecer é verbo transitivo indireto e pede a preposição a: obedecer a alguma coisa ou a alguém. Como regras é feminino plural com artigo, a preposição se funde com ele: obedecem às regras.\n\nObedecem as regras trata o verbo como transitivo direto, o que a norma-padrão não admite. Obedecem com as regras, obedecem das regras e obedecem nas regras trocam a preposição por outra que o verbo não pede. Para testar, troque por um pronome: obedeço-lhes, e não obedeço-as.",
  },
  {
    d: "facil",
    e: "Qual opção completa corretamente a frase “Ontem assisti ___ filme novo do diretor”?",
    o: ["ao", "o", "do", "no", "pelo"],
    x: "Assistir, no sentido de ver, é verbo transitivo indireto e pede a preposição a. Como filme é masculino, a preposição se funde com o artigo: a + o = ao. Daí assisti ao filme.\n\nO sozinho trataria o verbo como transitivo direto, o que a norma-padrão rejeita no sentido de ver. Do, no e pelo trocam a preposição a por de, em e por, que o verbo não exige nesse sentido. Para testar, faça a pergunta: assisti a quê? Ao filme.",
  },
  {
    d: "facil",
    e: "Qual opção completa corretamente a frase “Esqueci-me ___ senha do wi-fi da escola”?",
    o: ["da", "a", "com a", "pela", "na"],
    x: "Esquecer-se, na forma pronominal, pede a preposição de: esqueci-me da senha. Como senha é feminino, de + a = da. Sem o pronome, o verbo seria direto: esqueci a senha, sem preposição.\n\nA, com a, pela e na trocam a preposição por a, com, por e em, que o verbo não pede. O mesmo ocorre com lembrar-se de, com o qual esquecer-se forma um par: lembrei-me do compromisso, esqueci-me do compromisso.",
  },
  {
    d: "facil",
    e: "Qual preposição completa corretamente a frase “Meus avós moram ___ uma cidade pequena do interior”?",
    o: ["em", "a", "para", "de", "por"],
    x: "Morar indica o lugar onde se vive e pede a preposição em: morar em uma cidade, em uma casa, em São Paulo. A preposição em liga o verbo ao lugar de residência, e o mesmo ocorre com residir e situar-se.\n\nA, para e por são preposições de movimento ou direção, que acompanham verbos como ir, viajar e passar: ir a uma cidade, partir para uma cidade, passar por uma cidade. De indica origem, como em vir de uma cidade, e não lugar de moradia.",
  },
  {
    d: "facil",
    e: "Qual opção completa corretamente a frase “No sábado, iremos ___ cinema com os primos”?",
    o: ["ao", "no", "pelo", "do", "com o"],
    x: "Ir é verbo de movimento e pede a preposição a para indicar o destino: ir a um lugar. Como cinema é masculino, a preposição se funde com o artigo: a + o = ao. Daí iremos ao cinema.\n\nNo, usado com ir, é comum na fala, mas a norma-padrão reserva em para o lugar onde se está, e não para o destino. Pelo indica passagem, do indica origem, e com o indicaria companhia. O teste é perguntar aonde se vai: ao cinema.",
  },
  {
    d: "facil",
    e: "Qual preposição completa corretamente a frase “Gosto muito ___ música clássica”?",
    o: ["de", "com", "a", "em", "por"],
    x: "Gostar, no sentido de apreciar, é verbo transitivo indireto e pede a preposição de: gostar de música, de livros, de viajar. A preposição liga o verbo ao objeto do gosto, sem alternativa na norma-padrão.\n\nCom, a, em e por não são pedidas pelo verbo. Com aparece em simpatizar com, a em obedecer a, em em morar em, e por em passar por. Gostar tem sinônimos que pedem preposições diferentes, como apreciar, que é transitivo direto.",
  },
  {
    d: "facil",
    e: "Qual preposição completa corretamente a frase “Todos os alunos precisam ___ mais tempo para estudar”?",
    o: ["de", "a", "com", "em", "para"],
    x: "Precisar, no sentido de ter necessidade, é verbo transitivo indireto e pede a preposição de: precisar de tempo, de ajuda, de dinheiro. A preposição liga o verbo à coisa necessária, e o mesmo vale para necessitar de e carecer de.\n\nA, com e em não são exigidas pelo verbo nesse sentido. Para aparece em frases como precisa de tempo para estudar, em que introduz a finalidade, e não o objeto da necessidade.",
  },
  {
    d: "facil",
    e: "Qual preposição completa corretamente a frase “Ele é muito fiel ___ seus princípios”?",
    o: ["a", "de", "em", "por", "com"],
    x: "Fiel é adjetivo que pede a preposição a: fiel a alguém ou a alguma coisa. Como seus princípios é plural e o possuidor dispensa o artigo, escreve-se fiel a seus princípios, sem crase.\n\nDe, em, por e com não são pedidas pelo adjetivo. O mesmo ocorre com contrário a, favorável a, leal a e obediente a, que formam uma família de adjetivos regidos pela preposição a.",
  },
  {
    d: "facil",
    e: "Qual opção completa corretamente a frase “Respondi ___ e-mail da diretora no mesmo dia”?",
    o: ["ao", "o", "do", "no", "pelo"],
    x: "Responder, no sentido de dar resposta, é verbo transitivo indireto e pede a preposição a: responder a uma pergunta, a uma carta, a um e-mail. Como e-mail é masculino, a + o = ao. Daí respondi ao e-mail.\n\nO sozinho trataria o verbo como transitivo direto, o que a norma-padrão não admite. Do, no e pelo trocam a preposição por de, em e por. Responder aceita objeto indireto de pessoa e de coisa: respondi à diretora, respondi ao e-mail.",
  },
  {
    d: "facil",
    e: "Em qual das frases a regência do verbo agradecer está de acordo com a norma-padrão?",
    o: ["Agradeci ao professor pela orientação recebida.", "Agradeci o professor pela orientação recebida.", "Agradeci do professor pela orientação recebida.", "Agradeci para o professor pela orientação recebida.", "Agradeci com o professor pela orientação recebida."],
    x: "Agradecer pede a preposição a diante da pessoa a quem se agradece, e a preposição por diante do motivo: agradecer a alguém por algo. Como professor é masculino, a + o = ao: agradeci ao professor pela orientação.\n\nAgradeci o professor trata a pessoa como objeto direto, o que a norma-padrão rejeita. Agradeci do, para o e com o trocam a preposição por de, para e com, que o verbo não pede. A regra vale também com o objeto direto de coisa: agradeci a ajuda ao professor.",
  },
  {
    d: "facil",
    e: "Qual preposição completa corretamente a frase “Desde o primeiro dia, simpatizei ___ a nova colega de turma”?",
    o: ["com", "a", "de", "em", "por"],
    x: "Simpatizar, no sentido de sentir simpatia, é verbo transitivo indireto e pede a preposição com: simpatizar com alguém ou com alguma coisa. O mesmo ocorre com antipatizar com, que tem sentido oposto.\n\nA, de, em e por não são pedidas pelo verbo. Simpatizar de ou simpatizar por aparecem na fala, mas a norma-padrão exige com. Convém não confundir com gostar de, que pede de, e com aderir a, que pede a.",
  },
  {
    d: "facil",
    e: "Qual opção completa corretamente a frase “Estamos cientes ___ prazo de entrega do trabalho”?",
    o: ["do", "ao", "no", "pelo", "com o"],
    x: "Ciente é adjetivo que pede a preposição de: ciente de alguma coisa. Como prazo é masculino, de + o = do. Daí estamos cientes do prazo.\n\nAo, no, pelo e com o trocam a preposição por a, em, por e com, que o adjetivo não pede. Adjetivos da mesma família pedem de: capaz de, incapaz de, consciente de, ávido de, e cabe distinguir de adjetivos que pedem a, como fiel a e contrário a.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Em qual das frases a regência do verbo e o pronome relativo estão de acordo com a norma-padrão?",
    o: ["Este é o filme a que assisti ontem à noite.", "Este é o filme que assisti ontem à noite.", "Este é o filme o qual assisti ontem à noite.", "Este é o filme de que assisti ontem à noite.", "Este é o filme em que assisti ontem à noite."],
    x: "O verbo assistir, no sentido de ver, é transitivo indireto e pede a preposição a. Quando o complemento vira pronome relativo, a preposição precisa vir antes dele: o filme a que assisti, ou o filme ao qual assisti. A estrutura equivale a “assisti ao filme”.\n\nO filme que assisti e o filme o qual assisti omitem a preposição exigida. O filme de que assisti e o filme em que assisti trocam a preposição por de e em. Um bom teste é desmontar a relativa: assisti ao filme, e então o relativo recebe o a.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência de lembrar na forma pronominal está de acordo com a norma-padrão?",
    o: ["Lembrei-me do compromisso a tempo.", "Lembrei-me o compromisso a tempo.", "Lembrei do compromisso a tempo.", "Lembrei-me ao compromisso a tempo.", "Lembrei-se do compromisso a tempo."],
    x: "Lembrar pode ser transitivo direto, sem pronome: lembrei o compromisso. Quando é pronominal, passa a pedir a preposição de: lembrei-me do compromisso. O mesmo vale para esquecer: esqueci o compromisso, ou esqueci-me do compromisso.\n\nLembrei-me o compromisso mistura a forma pronominal com objeto direto. Lembrei do compromisso omite o pronome, e a norma-padrão exige que a preposição de venha com a forma pronominal. Lembrei-me ao compromisso troca de por a, e lembrei-se do compromisso erra a pessoa do pronome.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo implicar, no sentido de acarretar, está de acordo com a norma-padrão?",
    o: ["A decisão implica aumento de custos para a empresa.", "A decisão implica em aumento de custos para a empresa.", "A decisão implica de aumento de custos para a empresa.", "A decisão implica a aumento de custos para a empresa.", "A decisão implica com aumento de custos para a empresa."],
    x: "Implicar, no sentido de acarretar ou resultar em, é verbo transitivo direto e não pede preposição: a decisão implica aumento de custos. O objeto direto é aumento de custos, e a ideia equivale a “traz como consequência”.\n\nImplica em, implica de e implica a acrescentam uma preposição que o verbo não exige nesse sentido. Implicar com existe, mas com outro sentido: ter implicância, como em ele implica com o vizinho. A frase fala de consequência, e por isso o verbo é direto.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo aspirar, no sentido de desejar, está de acordo com a norma-padrão?",
    o: ["Ele aspira a uma vaga na universidade federal.", "Ele aspira uma vaga na universidade federal.", "Ele aspira por uma vaga na universidade federal.", "Ele aspira de uma vaga na universidade federal.", "Ele aspira em uma vaga na universidade federal."],
    x: "Aspirar, no sentido de desejar ou pretender, é verbo transitivo indireto e pede a preposição a: aspirar a uma vaga, a um cargo, a uma vida melhor. Como uma vaga é objeto indireto, a preposição aparece sem artigo: aspira a uma vaga.\n\nAspira uma vaga trata o verbo como transitivo direto, que é o uso do verbo no sentido de respirar, como em aspirar o ar. As formas com por, de e em trocam a preposição por outra que o verbo não pede. Dois sentidos, duas regências: aspirar o perfume, e aspirar a um cargo.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo custar, no sentido de ser difícil, está de acordo com a norma-padrão?",
    o: ["Custou-me aceitar que a vaga fosse de outro candidato.", "Custaram-me aceitar que a vaga fosse de outro candidato.", "Custou eu aceitar que a vaga fosse de outro candidato.", "Custei-me aceitar que a vaga fosse de outro candidato.", "Custou-me em aceitar que a vaga fosse de outro candidato."],
    x: "Custar, no sentido de ser difícil, tem como sujeito uma oração ou um infinitivo, e o objeto indireto indica quem tem a dificuldade, com o pronome oblíquo me, te ou lhe: custou-me aceitar, custou-lhe entender. O sujeito, aceitar..., está no singular, e por isso o verbo também: custou.\n\nCustaram-me leva o verbo ao plural sem sujeito plural. Custou eu usa o pronome reto no lugar do objeto indireto. Custei-me faz do falante o sujeito do verbo, o que a construção não admite. E custou-me em aceitar acrescenta a preposição em, que a construção não pede.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência de proceder, no sentido de dar início, está de acordo com a norma-padrão?",
    o: ["Procedeu-se à votação da proposta no início da tarde.", "Procedeu-se a votação da proposta no início da tarde.", "Procederam-se à votação da proposta no início da tarde.", "Procedeu-se de votação da proposta no início da tarde.", "Procedeu-se em votação da proposta no início da tarde."],
    x: "Proceder, no sentido de dar início a algo, é verbo transitivo indireto e pede a preposição a: proceder a uma votação, a um exame. Com o pronome se, a oração fica sem sujeito determinado, e o verbo fica no singular: procedeu-se à votação, em que à é a fusão de a e a.\n\nProcedeu-se a votação omite a crase. Procederam-se à votação põe o verbo no plural, como se votação fosse sujeito, mas ela é objeto indireto. As frases com de e em trocam a preposição por outra que o verbo não pede nesse sentido.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo aludir está de acordo com a norma-padrão?",
    o: ["O diretor aludiu ao problema da frequência durante a reunião.", "O diretor aludiu o problema da frequência durante a reunião.", "O diretor aludiu do problema da frequência durante a reunião.", "O diretor aludiu sobre o problema da frequência durante a reunião.", "O diretor aludiu em problema da frequência durante a reunião."],
    x: "Aludir, no sentido de fazer referência, é verbo transitivo indireto e pede a preposição a: aludir a um assunto. Como problema é masculino, a + o = ao. Daí aludiu ao problema da frequência. O mesmo ocorre com referir-se a e fazer alusão a.\n\nAludiu o problema trata o verbo como transitivo direto. Aludiu do problema e aludiu em problema trocam a por de e em. Aludiu sobre o problema usa sobre, que serve a verbos como falar sobre, e não a aludir.",
  },
  {
    d: "media",
    e: "Em qual das frases os advérbios onde e aonde estão empregados de acordo com a norma-padrão?",
    o: ["Aonde você vai depois da aula, e onde ele mora?", "Onde você vai depois da aula, e aonde ele mora?", "Onde você vai depois da aula, e onde ele chega?", "Aonde você vai depois da aula, e aonde ele mora?", "Onde você vai depois da aula, e aonde ele fica?"],
    x: "Aonde é a junção da preposição a com o advérbio onde e indica destino, direção. Aparece com verbos de movimento que pedem a, como ir, chegar e levar: aonde você vai? Onde indica lugar em que se está ou se vive, com verbos como morar, estar e ficar: onde ele mora?\n\nAs demais frases trocam um dos advérbios. Onde você vai usa o advérbio de lugar com um verbo de movimento. Aonde ele mora e aonde ele fica usam o advérbio de destino com verbos de estado, e onde ele chega esquece a preposição que chegar pede.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo aderir está de acordo com a norma-padrão?",
    o: ["Muitos moradores aderiram ao movimento contra o aumento da tarifa.", "Muitos moradores aderiram o movimento contra o aumento da tarifa.", "Muitos moradores aderiram do movimento contra o aumento da tarifa.", "Muitos moradores aderiram com o movimento contra o aumento da tarifa.", "Muitos moradores aderiram pelo movimento contra o aumento da tarifa."],
    x: "Aderir é verbo transitivo indireto e pede a preposição a: aderir a um movimento, a uma causa, a um plano. Como movimento é masculino, a + o = ao. Daí aderiram ao movimento.\n\nAderiram o movimento trata o verbo como transitivo direto. Aderiram do, com o e pelo trocam a preposição por de, com e por. O verbo tem sinônimos que mudam a regência, como apoiar, que é transitivo direto: apoiaram o movimento.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo ater-se está de acordo com a norma-padrão?",
    o: ["O advogado se ateve aos fatos comprovados no processo.", "O advogado se ateve os fatos comprovados no processo.", "O advogado se ateve dos fatos comprovados no processo.", "O advogado se ateve com os fatos comprovados no processo.", "O advogado se ateve nos fatos comprovados no processo."],
    x: "Ater-se, no sentido de limitar-se, é verbo pronominal e pede a preposição a: ater-se a alguma coisa. Como fatos é masculino plural, a + os = aos. Daí se ateve aos fatos.\n\nAs demais frases trocam a preposição: sem ela, com o objeto direto, ou por de, com e em. O mesmo ocorre com apegar-se a, dedicar-se a e limitar-se a, verbos pronominais que pedem a.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência dos verbos residir e situar-se está de acordo com a norma-padrão?",
    o: ["Ela reside em Curitiba, e a escola se situa na região central.", "Ela reside a Curitiba, e a escola se situa na região central.", "Ela reside em Curitiba, e a escola se situa à região central.", "Ela reside para Curitiba, e a escola se situa na região central.", "Ela reside de Curitiba, e a escola se situa na região central."],
    x: "Residir e situar-se indicam lugar em que alguém ou alguma coisa está, e pedem a preposição em: residir em Curitiba, situar-se na região central, com em + a = na. A preposição liga o verbo ao lugar de residência ou de localização.\n\nA, para e de são preposições de movimento ou de origem, próprias de verbos como ir, partir e vir. Reside a Curitiba e reside para Curitiba indicam direção, e reside de Curitiba indicaria origem. E situa-se à região central troca a localização por direção.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo optar está de acordo com a norma-padrão?",
    o: ["Muitos candidatos optaram por cursos da área de tecnologia.", "Muitos candidatos optaram cursos da área de tecnologia.", "Muitos candidatos optaram a cursos da área de tecnologia.", "Muitos candidatos optaram em cursos da área de tecnologia.", "Muitos candidatos optaram de cursos da área de tecnologia."],
    x: "Optar é verbo transitivo indireto e pede a preposição por: optar por alguma coisa ou por alguém. Daí optaram por cursos da área de tecnologia. A preposição por liga o verbo à coisa escolhida, e o verbo equivale a escolher, que é transitivo direto: escolheram cursos.\n\nOptaram cursos trata o verbo como direto, que é o uso do sinônimo escolher. Optaram a, em e de trocam por por outra preposição que o verbo não pede. A diferença entre optar e escolher é uma armadilha comum nas provas.",
  },
  {
    d: "media",
    e: "Em qual das frases a preposição antes do pronome relativo está de acordo com a regência do verbo?",
    o: ["A cidade a que me refiro fica no litoral do estado.", "A cidade que me refiro fica no litoral do estado.", "A cidade de que me refiro fica no litoral do estado.", "A cidade em que me refiro fica no litoral do estado.", "A cidade com que me refiro fica no litoral do estado."],
    x: "Referir-se pede a preposição a: refiro-me à cidade. Quando o complemento vira pronome relativo, a preposição vem antes dele: a cidade a que me refiro, ou a cidade à qual me refiro. A preposição do verbo é mantida no relativo.\n\nA cidade que me refiro omite a preposição. As frases com de que, em que e com que trocam a preposição por de, em e com, que o verbo não exige. O teste é desmontar a relativa: refiro-me à cidade.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo gostar se mantém no pronome relativo, de acordo com a norma-padrão?",
    o: ["O livro de que mais gosto é o que ganhei de minha avó.", "O livro que mais gosto é o que ganhei de minha avó.", "O livro a que mais gosto é o que ganhei de minha avó.", "O livro em que mais gosto é o que ganhei de minha avó.", "O livro com que mais gosto é o que ganhei de minha avó."],
    x: "Gostar pede a preposição de: gosto do livro. Quando o complemento vira pronome relativo, a preposição vem antes dele: o livro de que mais gosto, ou o livro do qual mais gosto. A preposição do verbo é mantida no relativo.\n\nO livro que mais gosto omite a preposição. As frases com a que, em que e com que trocam a preposição por a, em e com, que o verbo não exige. O teste é desmontar a relativa: gosto do livro.",
  },
  {
    d: "media",
    e: "Em qual das frases a preposição antes do pronome quem está de acordo com a regência do verbo?",
    o: ["A colega com quem estudei foi aprovada no concurso.", "A colega quem estudei foi aprovada no concurso.", "A colega de quem estudei foi aprovada no concurso.", "A colega a quem estudei foi aprovada no concurso.", "A colega em quem estudei foi aprovada no concurso."],
    x: "Quem, como pronome relativo com antecedente expresso, vem sempre precedido de preposição, e a preposição é a que o verbo pede. Aqui, estudar com alguém indica companhia, e por isso se diz a colega com quem estudei. A frase equivale a “estudei com a colega”.\n\nA colega quem estudei omite a preposição, o que a norma não admite com quem. As frases com de quem, a quem e em quem trocam a preposição por de, a e em, que não combinam com estudar nesse sentido.",
  },
  {
    d: "media",
    e: "Em qual das frases o pronome relativo cujo está empregado de acordo com a norma-padrão?",
    o: ["Aquele é o aluno cujo pai trabalha na biblioteca.", "Aquele é o aluno cujo o pai trabalha na biblioteca.", "Aquele é o aluno que o pai trabalha na biblioteca.", "Aquele é o aluno do qual o pai trabalha na biblioteca.", "Aquele é o aluno cujos pai trabalha na biblioteca."],
    x: "Cujo indica posse e se coloca entre o possuidor e o possuído, concordando com o possuído: o aluno cujo pai trabalha. Não leva artigo depois dele, porque já une os dois termos em uma só estrutura.\n\nCujo o pai repete o artigo. Que o pai e do qual o pai não expressam a relação de posse, e a segunda ainda cria uma regência que o verbo não tem. Cujos pai erra a concordância, porque pai está no singular e o pronome deve segui-lo.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do substantivo acesso está de acordo com a norma-padrão?",
    o: ["Os alunos têm acesso aos laboratórios da escola.", "Os alunos têm acesso os laboratórios da escola.", "Os alunos têm acesso de laboratórios da escola.", "Os alunos têm acesso com os laboratórios da escola.", "Os alunos têm acesso por laboratórios da escola."],
    x: "Acesso é substantivo que pede a preposição a: acesso a um lugar, a uma informação, a um recurso. Como laboratórios é masculino plural, a + os = aos. Daí acesso aos laboratórios.\n\nA estrutura sem preposição trata o substantivo como se regesse objeto direto, o que não ocorre. As formas com de, com e por trocam a preposição por outra que o substantivo não pede. A regência nominal é a que os nomes (substantivos, adjetivos e advérbios) exercem sobre seus complementos.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do adjetivo preferível está de acordo com a norma-padrão?",
    o: ["Estudar com antecedência é preferível a deixar tudo para a véspera.", "Estudar com antecedência é preferível do que deixar tudo para a véspera.", "Estudar com antecedência é preferível que deixar tudo para a véspera.", "Estudar com antecedência é mais preferível a deixar tudo para a véspera.", "Estudar com antecedência é preferível ao que deixar tudo para a véspera."],
    x: "Preferível pede a preposição a, como o verbo preferir: preferível a alguma coisa. A comparação não usa do que nem que: estudar com antecedência é preferível a deixar tudo para a véspera. Também não se diz mais preferível, porque o adjetivo já indica preferência.\n\nPreferível do que e preferível que usam comparativos de superioridade, próprios de outros adjetivos. Mais preferível é redundante. E preferível ao que cria uma estrutura que não existe nessa construção.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do adjetivo propenso está de acordo com a norma-padrão?",
    o: ["Crianças que dormem pouco são mais propensas a doenças.", "Crianças que dormem pouco são mais propensas de doenças.", "Crianças que dormem pouco são mais propensas com doenças.", "Crianças que dormem pouco são mais propensas em doenças.", "Crianças que dormem pouco são mais propensas por doenças."],
    x: "Propenso é adjetivo que pede a preposição a: propenso a alguma coisa, a fazer algo. Sem determinante, a preposição aparece sozinha: propensas a doenças. A estrutura equivale a “têm propensão a doenças”, e o substantivo propensão também pede a.\n\nDe, com, em e por são preposições que o adjetivo não pede. O mesmo ocorre com inclinado a, disposto a, sujeito a e exposto a, que formam uma família de adjetivos regidos por a.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência dos verbos visitar e ir está de acordo com a norma-padrão?",
    o: ["Visitei o museu ontem, e hoje iremos ao parque.", "Visitei ao museu ontem, e hoje iremos ao parque.", "Visitei no museu ontem, e hoje iremos ao parque.", "Visitei o museu ontem, e hoje iremos o parque.", "Visitei o museu ontem, e hoje iremos no parque."],
    x: "Visitar é verbo transitivo direto e não pede preposição: visitei o museu. Ir é verbo de movimento e pede a preposição a: iremos ao parque, com a + o = ao. A frase correta aplica as duas regências.\n\nVisitei ao museu e visitei no museu acrescentam uma preposição ao verbo direto. Iremos o parque tira a preposição do verbo de movimento. E iremos no parque troca a por em, que a norma-padrão reserva para o lugar onde se está.",
  },
  {
    d: "media",
    e: "Em qual das frases as regências de insistir e consistir estão de acordo com a norma-padrão?",
    o: ["Ela insiste em estudar de manhã, e o plano consiste em revisar a matéria.", "Ela insiste de estudar de manhã, e o plano consiste em revisar a matéria.", "Ela insiste em estudar de manhã, e o plano consiste de revisar a matéria.", "Ela insiste a estudar de manhã, e o plano consiste a revisar a matéria.", "Ela insiste por estudar de manhã, e o plano consiste com revisar a matéria."],
    x: "Insistir e consistir são verbos transitivos indiretos que pedem a preposição em: insistir em fazer algo, consistir em fazer algo. Na frase, insiste em estudar e consiste em revisar seguem a mesma regência.\n\nInsiste de e consiste de trocam em por de, o que aparece na fala, mas contraria a norma-padrão. As formas com a, por e com também não são pedidas por nenhum dos dois verbos. O teste é lembrar do substantivo correspondente: insistência em, consistência em.",
  },
  {
    d: "media",
    e: "Em qual das frases as regências de sonhar e acreditar estão de acordo com a norma-padrão?",
    o: ["Ele sonha com uma viagem ao exterior e acredita em dias melhores.", "Ele sonha em uma viagem ao exterior e acredita em dias melhores.", "Ele sonha com uma viagem ao exterior e acredita a dias melhores.", "Ele sonha de uma viagem ao exterior e acredita com dias melhores.", "Ele sonha uma viagem ao exterior e acredita de dias melhores."],
    x: "Sonhar, no sentido de ter um desejo ou sonho com algo, pede a preposição com: sonhar com uma viagem. Acreditar, no sentido de ter fé ou confiança, pede a preposição em: acreditar em dias melhores. A frase correta aplica as duas regências.\n\nSonha em e acredita a trocam as preposições por outras que os verbos não pedem. Sonha de e acredita com fazem o mesmo. Sonha uma viagem usa o verbo como transitivo direto, o que existe em sentido literário, mas acredita de continua errado.",
  },
  {
    d: "media",
    e: "Em qual das frases a regência do verbo zelar está de acordo com a norma-padrão?",
    o: ["A diretora zela pela disciplina dos alunos.", "A diretora zela a disciplina dos alunos.", "A diretora zela da disciplina dos alunos.", "A diretora zela com a disciplina dos alunos.", "A diretora zela na disciplina dos alunos."],
    x: "Zelar é verbo transitivo indireto e pede a preposição por: zelar por alguém ou por alguma coisa. Como disciplina é feminino, por + a = pela. Daí zela pela disciplina dos alunos. O mesmo ocorre com velar por.\n\nZela a disciplina trata o verbo como direto. Zela da, com a e na disciplina trocam por por de, com e em. O verbo tem o sentido de cuidar, e cuidar de pede a preposição de, o que explica a confusão.",
  },
  {
    d: "media",
    e: "O que a gramática normativa chama de regência?",
    o: ["A relação de dependência entre um termo regente e seu complemento", "A concordância do verbo com o sujeito em número e pessoa", "A posição do pronome oblíquo em relação ao verbo", "O emprego do acento grave indicativo de crase", "A ligação entre orações por meio de conjunções"],
    x: "Regência é a relação de dependência entre um termo regente, que pode ser um verbo ou um nome, e seu complemento, que o completa por meio ou não de uma preposição. Quando o regente é verbo, fala-se em regência verbal; quando é substantivo, adjetivo ou advérbio, em regência nominal.\n\nA concordância do verbo com o sujeito é concordância verbal. A posição do pronome é colocação pronominal. O acento grave marca a crase. E a ligação entre orações por conjunções é coordenação ou subordinação.",
  },
  {
    d: "media",
    e: "Por que a frase “Assisti o filme ontem” contraria a norma-padrão?",
    o: ["Assistir, no sentido de ver, é transitivo indireto e pede a preposição a", "Porque assistir é intransitivo e não admite complemento", "Porque o filme deveria vir antes do verbo", "Porque falta o pronome se depois do verbo", "Porque ontem é um advérbio de lugar"],
    x: "Assistir, no sentido de ver, é verbo transitivo indireto e pede a preposição a: assisti ao filme. A frase omite a preposição e trata o verbo como direto, o que a norma-padrão não aceita nesse sentido.\n\nO verbo não é intransitivo, pois pede complemento. A ordem das palavras está correta. O pronome se não faz parte da regência de assistir. E ontem é advérbio de tempo, e não de lugar. Convém lembrar que assistir tem outros sentidos, como prestar assistência, em que a regência muda.",
  },
  {
    d: "media",
    e: "Qual afirmação sobre verbos que mudam de regência conforme o sentido está correta?",
    o: ["Aspirar é transitivo direto no sentido de respirar e transitivo indireto no de desejar.", "Aspirar é sempre transitivo direto, qualquer que seja o sentido.", "Aspirar pede a preposição por nos dois sentidos.", "Aspirar é intransitivo no sentido de desejar.", "Aspirar só admite complemento introduzido pela preposição de."],
    x: "Aspirar tem dois sentidos principais, com regências diferentes. No sentido de respirar ou inalar, é transitivo direto: aspirou o perfume. No sentido de desejar ou pretender, é transitivo indireto e pede a preposição a: aspira a uma vaga.\n\nDizer que é sempre direto ignora o segundo sentido. A preposição por não é pedida em nenhum dos dois. Desejar não é intransitivo, pois exige complemento. E de não é a preposição do verbo.",
  },
  {
    d: "media",
    e: "Em qual das frases há desvio de regência em relação à norma-padrão?",
    o: ["Prefiro o cinema do que o teatro.", "Os alunos obedecem às regras da escola.", "Moramos em um bairro tranquilo.", "Ela aspira a um cargo público.", "Precisamos de mais tempo para terminar."],
    x: "Preferir pede a preposição a para o termo preterido: prefiro o cinema ao teatro. A comparação com do que é própria de adjetivos e advérbios, como em mais alto do que, e não de preferir. A frase traz do que, e por isso contraria a norma.\n\nAs demais estão corretas: obedecer pede a, morar pede em, aspirar a um cargo traz a regência de desejar, e precisar pede de.",
  },
  {
    d: "media",
    e: "Em qual das frases há desvio de regência nominal em relação à norma-padrão?",
    o: ["Ele é muito fiel de seus princípios.", "Estamos cientes do prazo de entrega.", "Os alunos têm acesso aos laboratórios.", "Ela é propensa a resfriados.", "Sou contrário à proposta do diretor."],
    x: "Fiel é adjetivo que pede a preposição a: fiel a seus princípios. A frase traz fiel de, e por isso contraria a norma. O substantivo fidelidade segue o mesmo modelo: fidelidade a seus princípios.\n\nAs demais estão corretas: ciente pede de, acesso pede a, propenso pede a, e contrário pede a. Os adjetivos e substantivos têm regência própria, e o complemento deles é chamado complemento nominal.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Em qual das frases o pronome relativo cujo está empregado com a preposição exigida pelo verbo?",
    o: ["Este é o autor a cujo livro me referi na aula.", "Este é o autor cujo livro me referi na aula.", "Este é o autor a cujo o livro me referi na aula.", "Este é o autor de cujo livro me referi na aula.", "Este é o autor cujo livro a que me referi na aula."],
    x: "Referir-se pede a preposição a: refiro-me ao livro do autor. Quando o complemento vem introduzido por cujo, a preposição exigida pelo verbo vem antes do pronome: o autor a cujo livro me referi. O cujo não leva artigo depois dele.\n\nCujo livro me referi omite a preposição. A cujo o livro repete o artigo. De cujo livro troca a preposição por de, que referir-se não pede. E cujo livro a que me referi duplica a ligação, pois o relativo cujo já faz a ponte entre o autor e o livro.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a regência do verbo esquecer-se se mantém no pronome relativo?",
    o: ["Este é o compromisso de que me esqueci ontem.", "Este é o compromisso que me esqueci ontem.", "Este é o compromisso a que me esqueci ontem.", "Este é o compromisso em que me esqueci ontem.", "Este é o compromisso com que me esqueci ontem."],
    x: "Esquecer-se, na forma pronominal, pede a preposição de: esqueci-me do compromisso. Quando o complemento vira pronome relativo, a preposição vem antes dele: o compromisso de que me esqueci, ou do qual me esqueci.\n\nO compromisso que me esqueci omite a preposição. As frases com a que, em que e com que trocam de por a, em e com, que a forma pronominal não pede. Sem o pronome, o verbo seria direto: esqueci o compromisso, e o relativo seria apenas que.",
  },
  {
    d: "dificil",
    e: "Em qual das frases o pronome relativo está de acordo com a regência de chegar?",
    o: ["Esta é a cidade a que chegamos depois de dois dias de viagem.", "Esta é a cidade que chegamos depois de dois dias de viagem.", "Esta é a cidade de que chegamos depois de dois dias de viagem.", "Esta é a cidade em que chegamos depois de dois dias de viagem.", "Esta é a cidade com que chegamos depois de dois dias de viagem."],
    x: "Chegar pede a preposição a para indicar o ponto de chegada: chegamos à cidade. Quando o complemento vira pronome relativo, a preposição vem antes dele: a cidade a que chegamos, ou a cidade à qual chegamos, ou ainda a cidade aonde chegamos.\n\nA cidade que chegamos omite a preposição. As frases com de que, em que e com que trocam a por de, em e com. A forma em que chegamos é comum na fala, mas a norma-padrão reserva em para o lugar onde se está, e não para o destino de um movimento.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a regência do verbo substituir está de acordo com a norma-padrão?",
    o: ["A escola substituiu os computadores antigos por modelos novos.", "A escola substituiu os computadores antigos com modelos novos.", "A escola substituiu os computadores antigos de modelos novos.", "A escola substituiu os computadores antigos a modelos novos.", "A escola substituiu os computadores antigos em modelos novos."],
    x: "Substituir pede objeto direto para o que sai e a preposição por para o que entra: substituir uma coisa por outra. Daí substituiu os computadores antigos por modelos novos. A estrutura é a mesma de trocar uma coisa por outra.\n\nAs frases com com, de, a e em trocam a preposição por outra que o verbo não pede. O mesmo ocorre com trocar, em que a coisa que entra também vem com por, e com permutar, em que se usa por.",
  },
  {
    d: "dificil",
    e: "Em qual das frases a regência do adjetivo compatível está de acordo com a norma-padrão?",
    o: ["O horário do curso é compatível com o meu trabalho.", "O horário do curso é compatível ao meu trabalho.", "O horário do curso é compatível de meu trabalho.", "O horário do curso é compatível em meu trabalho.", "O horário do curso é compatível por meu trabalho."],
    x: "Compatível é adjetivo que pede a preposição com: compatível com alguma coisa. Como o meu trabalho aceita artigo, escreve-se compatível com o meu trabalho. O substantivo correspondente, compatibilidade, também pede com.\n\nAo, de, em e por trocam a preposição por outra que o adjetivo não pede. O mesmo ocorre com incompatível com, e o adjetivo contrário, incompatível, é muito usado nas provas.",
  },
  {
    d: "dificil",
    e: "Em qual das frases todas as regências verbais estão de acordo com a norma-padrão?",
    o: ["Os candidatos aspiram a uma vaga, obedecem às regras e assistem às aulas.", "Os candidatos aspiram uma vaga, obedecem às regras e assistem às aulas.", "Os candidatos aspiram a uma vaga, obedecem as regras e assistem às aulas.", "Os candidatos aspiram a uma vaga, obedecem às regras e assistem as aulas.", "Os candidatos aspiram uma vaga, obedecem as regras e assistem as aulas."],
    x: "A frase correta aplica três regências. Aspirar, no sentido de desejar, pede a: aspiram a uma vaga. Obedecer pede a: obedecem às regras, com a + as = às. Assistir, no sentido de ver ou estar presente, pede a: assistem às aulas.\n\nAs demais frases erram em uma ou mais dessas regências: aspiram uma vaga, obedecem as regras e assistem as aulas tratam os verbos como transitivos diretos. A frase que acumula os três erros falha em todas as regências.",
  },
  {
    d: "dificil",
    e: "Em qual das frases as regências de lembrar-se, implicar e optar estão de acordo com a norma-padrão?",
    o: ["Lembrei-me do prazo, a decisão implica custos e muitos optaram por sair.", "Lembrei do prazo, a decisão implica custos e muitos optaram por sair.", "Lembrei-me do prazo, a decisão implica em custos e muitos optaram por sair.", "Lembrei-me do prazo, a decisão implica custos e muitos optaram em sair.", "Lembrei do prazo, a decisão implica em custos e muitos optaram em sair."],
    x: "A frase correta aplica três regências. Lembrar, na forma pronominal, pede de: lembrei-me do prazo. Implicar, no sentido de acarretar, é transitivo direto: implica custos. Optar pede por: optaram por sair.\n\nAs demais frases erram em uma ou mais dessas regências: lembrei do prazo omite o pronome, implica em custos acrescenta uma preposição, e optaram em sair troca por por em. A frase que acumula os três erros falha em todas as regências.",
  },
  {
    d: "dificil",
    e: "Em qual das frases há desvio de regência em relação à norma-padrão, mesmo com o pronome relativo?",
    o: ["O cargo que ela aspira exige muita experiência profissional.", "A cidade a que me refiro fica no litoral.", "O assunto de que tratamos foi resolvido.", "O livro de que mais gosto é este.", "A pessoa com quem falei já saiu."],
    x: "Aspirar, no sentido de desejar, pede a preposição a: ela aspira a um cargo. Quando o complemento vira pronome relativo, a preposição vem antes dele: o cargo a que ela aspira. A frase omite a preposição, e por isso contraria a norma.\n\nAs demais estão corretas: referir-se pede a, e a preposição vem antes do relativo; tratar pede de, em de que tratamos; gostar pede de, em de que mais gosto; e falar com alguém pede com, em com quem falei.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre o pronome relativo e a regência está de acordo com a norma-padrão?",
    o: ["A preposição exigida pelo verbo deve vir antes do pronome relativo que o substitui.", "O pronome relativo dispensa sempre a preposição exigida pelo verbo.", "A preposição do verbo passa a ser sempre em quando há relativo.", "O relativo que nunca admite preposição antes dele.", "O relativo cujo exige artigo depois dele."],
    x: "O pronome relativo retoma um termo da oração anterior e exerce nela uma função. Quando essa função exige preposição, a preposição vem antes do relativo: o filme a que assisti, o livro de que gosto, a pessoa com quem falei. A preposição pedida pelo verbo ou nome é mantida.\n\nO relativo não dispensa a preposição quando a regência a exige. Ela não muda para em. O relativo que admite preposição, como em a que, de que e com que. E o cujo nunca leva artigo depois dele.",
  },
  {
    d: "dificil",
    e: "Qual afirmação sobre a regência dos verbos de movimento e de lugar está de acordo com a norma-padrão?",
    o: ["Ir e chegar pedem a para o destino, e morar e residir pedem em para o lugar.", "Ir e chegar pedem em para o destino, e morar pede a para o lugar.", "Morar e residir pedem a, e ir e chegar pedem sempre para.", "Todos esses verbos pedem a mesma preposição, que é em.", "Esses verbos não pedem preposição, pois são todos transitivos diretos."],
    x: "Os verbos de movimento, como ir e chegar, indicam destino e pedem a preposição a: ir ao cinema, chegar a casa. Os verbos de lugar em que se está ou se vive, como morar, residir e situar-se, pedem a preposição em: morar em Curitiba, residir em Salvador.\n\nInverter as preposições, usar sempre para ou sempre em, ou dizer que não pedem preposição contraria a norma-padrão. Na fala é comum ouvir chegar no aeroporto, mas a norma reserva em para o lugar, e a para o destino.",
  },
];
