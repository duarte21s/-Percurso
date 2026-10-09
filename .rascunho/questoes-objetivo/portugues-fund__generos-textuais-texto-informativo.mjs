/* Rascunho — Português · 6º ao 9º / Gêneros textuais: texto informativo.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), autorais, em
   linguagem e situações de escola do ensino fundamental II. Os trechos de
   leitura, as tabelas e os dados são curtos, inventados para esta bateria, e
   vêm dentro do próprio enunciado, de modo que cada questão se resolve
   sozinha. Leitura e gramática não se conferem em código, então nenhuma tem
   `v`: todas ficam em revisao_independente_pendente e passam pela resolução
   às cegas antes de serem gravadas; as contas das questões com tabela e
   porcentagem foram refeitas à mão. Só entram noções assentadas: finalidade
   do texto informativo, notícia (manchete, linha fina, lide, corpo, pirâmide
   invertida, assinatura e fonte), reportagem, entrevista, verbete de
   dicionário (abreviaturas e ordem alfabética), divulgação científica,
   infográfico, tabela e gráfico, fato e opinião, linguagem denotativa e
   objetiva e checagem de fontes. Ficaram de fora, de propósito, as
   classificações em que os manuais divergem, como a fronteira entre notícia
   e nota, e entre reportagem e artigo. */

export const materia = "portugues-fund";
export const tema = "Gêneros textuais: texto informativo";
export const arquivo = "portugues-fund__generos-textuais-texto-informativo";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual é a principal finalidade de um texto informativo?",
    o: ["Informar o leitor sobre fatos ou assuntos", "Convencer o leitor a comprar um produto", "Divertir o leitor com uma história de ficção", "Ensinar o leitor a preparar um prato", "Expressar sentimentos pessoais em versos"],
    x: "O texto informativo tem como finalidade informar: apresenta fatos, dados e explicações sobre um assunto de modo claro e objetivo. A notícia, a reportagem, o verbete e a entrevista são exemplos.\n\nConvencer o leitor a comprar um produto é função da publicidade. Divertir com uma história de ficção é função da narrativa literária. Ensinar a preparar um prato é função da receita. E expressar sentimentos pessoais em versos é função do poema. Só essa explicação descreve a finalidade do texto informativo.",
  },
  {
    d: "facil",
    e: "Em qual destes suportes costuma aparecer uma notícia?",
    o: ["Em um jornal", "Em um livro de poemas", "Em um convite de festa", "Em uma bula de remédio", "Em um bilhete"],
    x: "A notícia é publicada em jornais, revistas e sites de notícias, e também é transmitida no rádio e na televisão. Esses veículos têm a função de informar o público sobre fatos recentes.\n\nO livro de poemas reúne textos poéticos. O convite de festa chama pessoas para um evento. A bula de remédio orienta o uso de um medicamento. E o bilhete é uma mensagem curta entre pessoas. Só o jornal publica notícias, dentre os suportes citados.",
  },
  {
    d: "facil",
    e: "Como se chama o título principal de uma notícia, que chama a atenção do leitor para o fato?",
    o: ["Manchete", "Legenda", "Assinatura", "Rodapé", "Crédito"],
    x: "A manchete é o título principal de uma notícia, escrito em destaque para chamar a atenção do leitor e resumir o fato mais importante. Costuma vir em letras maiores.\n\nA legenda é o texto curto que explica uma imagem. A assinatura é o nome de quem escreveu. O rodapé é a parte de baixo da página. E o crédito indica o autor de uma foto ou de uma ilustração. Só a manchete é o título principal da notícia.",
  },
  {
    d: "facil",
    e: "Qual é a função da legenda de uma foto em uma reportagem?",
    o: ["Explicar o que a imagem mostra", "Substituir o texto da reportagem", "Contar uma história de ficção", "Dar o nome do repórter", "Fazer propaganda de um produto"],
    x: "A legenda é um texto curto, colocado perto da imagem, que explica o que ela mostra: quem aparece, onde e quando a foto foi tirada. Ajuda o leitor a entender a imagem e a ligá-la ao assunto.\n\nA legenda não substitui o texto da reportagem. Não conta uma história de ficção. O nome do repórter aparece na assinatura. E fazer propaganda é função da publicidade. Só essa explicação descreve a função da legenda.",
  },
  {
    d: "facil",
    e: "O que é o lide (ou lead) de uma notícia?",
    o: ["O primeiro parágrafo, que resume as informações principais", "O último parágrafo, que traz a conclusão", "A foto que acompanha o texto", "O nome do jornal", "A opinião do repórter sobre o fato"],
    x: "O lide, ou lead, é o parágrafo inicial da notícia, que resume as informações principais: o que aconteceu, com quem, quando, onde, como e por quê. Com ele, o leitor já fica sabendo do essencial.\n\nO último parágrafo traz detalhes menos importantes. A foto é um recurso visual. O nome do jornal identifica o veículo. E a notícia deve evitar a opinião do repórter. Só essa explicação define o lide.",
  },
  {
    d: "facil",
    e: "Qual destas perguntas o lide de uma notícia costuma responder?",
    o: ["O que aconteceu, com quem, quando e onde?", "Qual é o ingrediente principal?", "Como montar este aparelho?", "O que o autor sente pela natureza?", "Qual rima combina com o verso?"],
    x: "O lide resume o essencial do fato: o que aconteceu, com quem, quando e onde, e muitas vezes como e por quê. É o que permite ao leitor entender a notícia só lendo o início.\n\nO ingrediente principal é assunto de uma receita. A montagem de um aparelho é assunto de um manual. O sentimento do autor pela natureza é assunto de um poema. E a rima de um verso é assunto de quem escreve versos. Só essa explicação corresponde ao lide.",
  },
  {
    d: "facil",
    e: "Em qual destes textos o leitor encontra o significado de uma palavra?",
    o: ["Em um verbete de dicionário", "Em uma notícia de jornal", "Em um convite de aniversário", "Em uma carta pessoal", "Em um cartaz de cinema"],
    x: "O verbete é cada entrada de um dicionário. Nele, o leitor encontra o significado da palavra, a sua classe gramatical e, muitas vezes, exemplos de uso. É um texto informativo.\n\nA notícia relata fatos recentes. O convite chama para um evento. A carta pessoal transmite mensagens a alguém. E o cartaz anuncia um filme. Só o verbete de dicionário tem como função explicar o significado das palavras.",
  },
  {
    d: "facil",
    e: "Em uma entrevista, quem faz as perguntas?",
    o: ["O entrevistador", "O entrevistado", "O leitor", "O revisor", "O fotógrafo"],
    x: "Em uma entrevista, o entrevistador é quem faz as perguntas, para obter informações ou opiniões. O entrevistado é quem responde.\n\nO leitor apenas lê o texto depois de publicado. O revisor corrige o texto. E o fotógrafo faz as imagens. Só o entrevistador conduz a entrevista fazendo as perguntas, e é a partir delas que o entrevistado apresenta suas informações e opiniões ao público.",
  },
  {
    d: "facil",
    e: "Em uma entrevista impressa, como costuma ser marcada a fala de cada participante?",
    o: ["Pelo nome ou pelo travessão antes de cada fala", "Por um desenho ao lado do texto", "Por uma rima no fim da fala", "Por uma moral ao final do texto", "Por um número de telefone"],
    x: "Em entrevistas impressas, a fala de cada participante vem identificada pelo nome ou pelo papel de quem fala, por exemplo Entrevistador e Entrevistada, ou então por um travessão antes de cada fala. Isso ajuda o leitor a saber quem pergunta e quem responde.\n\nUm desenho não marca falas. A rima é recurso de poema. A moral é parte da fábula. E um número de telefone não tem relação com o texto. Só essa explicação descreve como se marca a fala.",
  },
  {
    d: "facil",
    e: "Qual destas frases apresenta um fato que pode ser comprovado?",
    o: ["A escola abriu às 7 horas desta manhã.", "A escola é a mais bonita da cidade.", "A escola deveria ser maior.", "A escola é muito chata.", "A escola parece triste."],
    x: "Um fato é uma informação que pode ser comprovada. Em a escola abriu às 7 horas desta manhã, basta consultar o horário de abertura para saber se é verdade. Por isso é um fato.\n\nÉ a mais bonita, deveria ser maior, é muito chata e parece triste dependem do gosto ou da impressão de quem fala, e não podem ser comprovadas com dados. São opiniões. Só a primeira frase apresenta um fato.",
  },
  {
    d: "facil",
    e: "Qual destas frases expressa uma opinião?",
    o: ["Este filme é o mais emocionante do ano.", "O filme dura duas horas.", "O filme estreou na quinta-feira.", "O filme foi dirigido por uma mulher.", "O filme tem cinquenta atores no elenco."],
    x: "Uma opinião expressa o ponto de vista de quem fala e não pode ser comprovada com dados. Em este filme é o mais emocionante do ano, a palavra emocionante depende da sensação de cada pessoa. Por isso é uma opinião.\n\nO filme dura duas horas, estreou na quinta-feira, foi dirigido por uma mulher e tem cinquenta atores são informações que podem ser conferidas. São fatos. Só a primeira frase expressa uma opinião.",
  },
  {
    d: "facil",
    e: "Qual destes textos é um texto informativo?",
    o: ["Uma notícia sobre a vacinação", "Um poema sobre o mar", "Um conto de fadas", "Uma fábula com animais", "Uma letra de música"],
    x: "A notícia sobre a vacinação informa o leitor sobre um fato de interesse público, com dados e linguagem objetiva. É um texto informativo.\n\nO poema, o conto de fadas, a fábula e a letra de música são textos literários, que buscam emocionar, divertir ou fazer pensar por meio da imaginação. Só a notícia tem a finalidade de informar o leitor sobre um fato.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Em uma notícia, onde costumam aparecer as informações mais importantes?",
    o: ["No início do texto", "No final do texto", "Somente no título", "Somente na legenda", "Em um quadro à parte"],
    x: "A notícia costuma seguir a estrutura da pirâmide invertida: as informações mais importantes vêm primeiro, no início do texto, e os detalhes menos importantes aparecem depois. Assim o leitor, mesmo que pare no começo, já sabe do essencial.\n\nColocar o mais importante no final contraria essa estrutura. O título resume o fato, mas não traz todas as informações. A legenda explica uma imagem. E o quadro à parte traz dados complementares. Só essa explicação corresponde à estrutura da notícia.",
  },
  {
    d: "media",
    e: "Qual característica define bem uma notícia de jornal?",
    o: ["Relata um fato recente de interesse público", "Conta uma história inventada", "Ensina a fazer algo passo a passo", "Expressa as emoções do autor em versos", "Convence o leitor a comprar algo"],
    x: "A notícia relata um fato recente de interesse público, acontecido de verdade, com base em informações verificáveis. Seu papel é informar o leitor sobre o que aconteceu.\n\nContar uma história inventada é função da narrativa de ficção. Ensinar passo a passo é função do texto instrucional. Expressar emoções em versos é função do poema. E convencer o leitor a comprar algo é função da publicidade. Só essa explicação define a notícia.",
  },
  {
    d: "media",
    e: "Qual linguagem predomina em uma notícia?",
    o: ["Objetiva, clara e em terceira pessoa", "Subjetiva, cheia de emoções e em primeira pessoa", "Poética, com rimas e versos", "Informal, com gírias e abreviações", "Humorística, com piadas e exageros"],
    x: "A notícia usa linguagem objetiva e clara, em terceira pessoa, para que o leitor receba a informação sem interferência da opinião de quem escreve. O vocabulário é preciso e as frases são diretas.\n\nA linguagem subjetiva, em primeira pessoa e cheia de emoções, é própria de textos pessoais. A poética, com rimas, é a do poema. A informal, com gírias, não combina com um veículo de informação. E a humorística é a das piadas. Só a primeira linguagem corresponde à da notícia.",
  },
  {
    d: "media",
    e: "Por que a notícia deve evitar as opiniões do repórter?",
    o: ["Para informar o leitor com objetividade", "Para tornar o texto mais longo", "Para que o leitor se divirta", "Para usar menos palavras difíceis", "Para valorizar a foto do jornal"],
    x: "O papel da notícia é informar. Se o repórter misturar opiniões ao relato, o leitor pode confundir fatos com impressões pessoais e receber uma informação parcial. Por isso a notícia busca objetividade.\n\nEvitar opiniões não torna o texto mais longo. Não visa divertir o leitor. Não está ligado ao vocabulário. E não tem relação com a foto. Só essa explicação explica a razão da objetividade.",
  },
  {
    d: "media",
    e: "O que diferencia a reportagem da notícia?",
    o: ["Aprofunda o assunto, com mais dados e pontos de vista", "Conta sempre uma história de ficção", "É um texto mais curto, de duas linhas", "Não tem fatos, apenas opiniões", "É escrita sempre em versos"],
    x: "A reportagem aprofunda um assunto: investiga as causas, reúne dados e ouve diferentes pessoas, apresentando vários pontos de vista. É, em geral, mais longa que a notícia, que relata o fato de forma mais direta.\n\nA reportagem não é ficção. Não é um texto de duas linhas. Tem fatos e dados, e não apenas opiniões. E não é escrita em versos. Só essa explicação descreve o que a diferencia da notícia.",
  },
  {
    d: "media",
    e: "Leia: “Ontem à tarde, um incêndio destruiu o armazém de uma fábrica de móveis no centro da cidade. Ninguém ficou ferido. Os bombeiros controlaram o fogo em duas horas.” Qual é o fato principal da notícia?",
    o: ["Um incêndio destruiu o armazém de uma fábrica", "Os bombeiros trabalharam durante a noite", "Muitas pessoas ficaram feridas", "A fábrica anunciou novos móveis", "A cidade ganhou um novo centro"],
    x: "O fato principal é o que aconteceu de mais importante: um incêndio destruiu o armazém de uma fábrica de móveis. Os demais dados, como a ausência de feridos e o tempo para controlar o fogo, complementam a informação.\n\nO texto não diz que os bombeiros trabalharam durante a noite. Diz que ninguém ficou ferido, o que contraria a ideia de muitas pessoas feridas. Não menciona o anúncio de novos móveis. E não fala de um novo centro. Só essa explicação é o fato principal.",
  },
  {
    d: "media",
    e: "Leia: “Ontem à tarde, um incêndio destruiu o armazém de uma fábrica de móveis no centro da cidade. Ninguém ficou ferido. Os bombeiros controlaram o fogo em duas horas.” Quando ocorreu o fato?",
    o: ["Ontem à tarde", "Hoje de manhã", "Na semana passada", "Ontem à noite", "Há duas horas"],
    x: "O texto informa o momento do fato logo no começo: ontem à tarde. É a resposta à pergunta quando do lide.\n\nHoje de manhã, na semana passada e ontem à noite não aparecem no texto. E há duas horas confunde o tempo que os bombeiros levaram para controlar o fogo com o momento em que o incêndio ocorreu. Só ontem à tarde indica quando o fato aconteceu.",
  },
  {
    d: "media",
    e: "Leia: “A prefeitura inaugurou nesta terça-feira uma biblioteca no bairro Vila Nova. O espaço tem 5 mil livros e funciona de segunda a sábado, das 8h às 18h. A entrada é gratuita.” Em que dias a biblioteca funciona?",
    o: ["De segunda a sábado", "De segunda a sexta", "Somente aos sábados", "Todos os dias da semana", "Somente às terças-feiras"],
    x: "O texto informa o funcionamento da biblioteca: de segunda a sábado, das 8h às 18h. Terça-feira é o dia da inauguração, e não o único dia de funcionamento.\n\nDe segunda a sexta deixaria de fora o sábado. Somente aos sábados e somente às terças-feiras restringem demais. E todos os dias da semana incluiria o domingo, que o texto não menciona. Só de segunda a sábado corresponde ao que o texto diz.",
  },
  {
    d: "media",
    e: "Leia: “A prefeitura inaugurou nesta terça-feira uma biblioteca no bairro Vila Nova. O espaço tem 5 mil livros e funciona de segunda a sábado, das 8h às 18h. A entrada é gratuita.” Quantos livros tem a biblioteca?",
    o: ["5 mil", "50", "500", "50 mil", "8 mil"],
    x: "O texto informa a quantidade de livros: o espaço tem 5 mil livros. É um dado numérico, típico dos textos informativos.\n\nCinquenta, quinhentos, cinquenta mil e oito mil não aparecem no texto. Oito, aliás, é o horário de abertura, 8h, e não a quantidade de livros. Só 5 mil corresponde ao que o texto diz, e dados numéricos como esse ajudam o leitor a ter uma ideia precisa do tamanho do espaço.",
  },
  {
    d: "media",
    e: "Leia: “A prefeitura inaugurou nesta terça-feira uma biblioteca no bairro Vila Nova. O espaço tem 5 mil livros e funciona de segunda a sábado, das 8h às 18h. A entrada é gratuita.” A qual gênero textual pertence esse trecho?",
    o: ["Notícia", "Fábula", "Poema", "Receita", "Carta pessoal"],
    x: "O trecho relata um fato recente, a inauguração de uma biblioteca, e traz dados objetivos, como o dia, o local, o número de livros e os horários. Em linguagem objetiva e em terceira pessoa, informa o leitor. Esses traços são os da notícia.\n\nA fábula tem animais e moral. O poema usa versos e expressa emoções. A receita ensina um procedimento. E a carta pessoal se dirige a alguém conhecido. Só a notícia corresponde ao trecho.",
  },
  {
    d: "media",
    e: "Leia a tabela: Turma 6ºA, 12 livros lidos; Turma 6ºB, 18 livros lidos; Turma 6ºC, 9 livros lidos. Qual turma leu mais livros?",
    o: ["6ºB", "6ºA", "6ºC", "Todas leram o mesmo número", "Não é possível saber"],
    x: "Comparando os valores da tabela, 18 é maior que 12 e que 9. Por isso a turma que leu mais livros foi a 6ºB, com 18 livros.\n\nA 6ºA leu 12, o segundo maior valor. A 6ºC leu 9, o menor. Os valores não são iguais. E a tabela traz os dados necessários para a comparação, por isso é possível saber. Só 6ºB é a resposta correta, pois nenhuma outra turma chegou a 18 livros, o maior valor da tabela.",
  },
  {
    d: "media",
    e: "Leia a tabela: Turma 6ºA, 12 livros lidos; Turma 6ºB, 18 livros lidos; Turma 6ºC, 9 livros lidos. Quantos livros as três turmas leram, ao todo?",
    o: ["39", "30", "27", "42", "21"],
    x: "Para saber o total, somam-se os valores das três turmas: 12 + 18 + 9. Primeiro, 12 + 18 = 30. Depois, 30 + 9 = 39. As três turmas leram 39 livros.\n\nO valor 30 esquece a turma 6ºC. O valor 27 soma apenas 18 e 9. O valor 42 tem um erro de soma. E o valor 21 soma apenas 12 e 9. Só 39 é o total correto, conferido somando os três valores da tabela, um a um, sem deixar nenhum de fora.",
  },
  {
    d: "media",
    e: "Em um gráfico de barras, o que indica a barra mais alta?",
    o: ["O maior valor entre os comparados", "O menor valor entre os comparados", "Um valor igual em todas as barras", "O título do gráfico", "A fonte dos dados"],
    x: "Em um gráfico de barras, a altura de cada barra representa o valor do que está sendo comparado. A barra mais alta, portanto, indica o maior valor.\n\nO menor valor aparece na barra mais baixa. Valores iguais teriam barras de mesma altura. O título e a fonte dos dados são escritos em texto, e não representados pela altura da barra. Só essa explicação descreve a barra mais alta.",
  },
  {
    d: "media",
    e: "Qual é uma característica do infográfico?",
    o: ["Combina texto, imagens e dados", "Conta uma história com personagens", "Apresenta apenas versos rimados", "Traz somente a opinião do autor", "É um texto sem nenhuma imagem"],
    x: "O infográfico reúne texto curto, imagens, gráficos e números para explicar um assunto de modo visual e rápido. Ele facilita a leitura de informações complexas.\n\nContar uma história com personagens é característica da narrativa. Apresentar versos rimados é característica do poema. Trazer só a opinião do autor é característica do texto de opinião. E o infográfico depende de imagens. Só essa explicação descreve o infográfico.",
  },
  {
    d: "media",
    e: "Em um dicionário, a abreviatura adj. indica que a palavra é o quê?",
    o: ["Adjetivo", "Advérbio", "Artigo", "Adjunto", "Afixo"],
    x: "Nos verbetes de dicionário, as abreviaturas indicam a classe gramatical da palavra. A abreviatura adj. significa adjetivo. Outras abreviaturas comuns são adv. (advérbio), s.m. (substantivo masculino) e s.f. (substantivo feminino).\n\nAdvérbio é adv. Artigo é art. Adjunto e afixo não costumam ser indicados dessa forma nos verbetes. Só adjetivo corresponde à abreviatura adj.",
  },
  {
    d: "media",
    e: "Qual sequência de palavras está em ordem alfabética, como num dicionário?",
    o: ["abelha, bola, cadeira, dado", "bola, abelha, cadeira, dado", "abelha, cadeira, bola, dado", "dado, cadeira, bola, abelha", "cadeira, abelha, bola, dado"],
    x: "No dicionário, as palavras aparecem em ordem alfabética: primeiro as que começam com a, depois com b, c e d. A sequência abelha, bola, cadeira, dado respeita essa ordem, pois as iniciais são a, b, c e d.\n\nAs demais sequências trocam a posição de alguma palavra: a segunda e a terceira trocam duas palavras, a quarta está na ordem inversa, e a quinta começa por c. Só a primeira sequência está em ordem alfabética.",
  },
  {
    d: "media",
    e: "Leia a entrevista: “— Quando você começou a jogar? — Aos oito anos, na escola.” Qual é a função da primeira fala?",
    o: ["Fazer uma pergunta ao entrevistado", "Responder ao entrevistador", "Contar uma história de ficção", "Anunciar um produto", "Encerrar a conversa"],
    x: "Na entrevista, o entrevistador pergunta e o entrevistado responde. A primeira fala, quando você começou a jogar?, é uma pergunta dirigida ao entrevistado, para obter informação sobre o início da carreira.\n\nA resposta é a segunda fala, aos oito anos, na escola. A primeira fala não conta uma história de ficção, não anuncia um produto nem encerra a conversa. Só essa explicação descreve a função da primeira fala.",
  },
  {
    d: "media",
    e: "Qual é o objetivo de um texto de divulgação científica?",
    o: ["Explicar temas científicos para leitores não especialistas", "Contar histórias de ficção científica", "Escrever poemas sobre a natureza", "Vender produtos de laboratório", "Dar instruções para fazer experimentos perigosos"],
    x: "O texto de divulgação científica explica descobertas, conceitos e fenômenos da ciência para o público em geral, com linguagem acessível, sem exigir conhecimento especializado. Costuma aparecer em revistas, sites e programas.\n\nA ficção científica inventa histórias. O poema expressa emoções. A venda de produtos é função da publicidade. E o texto de divulgação não tem o objetivo de orientar experimentos perigosos. Só essa explicação descreve o objetivo da divulgação científica.",
  },
  {
    d: "media",
    e: "Qual é uma boa forma de confirmar se uma notícia é verdadeira?",
    o: ["Comparar com outras fontes confiáveis", "Compartilhar com os amigos", "Ler apenas o título", "Confiar na primeira mensagem recebida", "Ver se há muitas curtidas"],
    x: "Para confirmar uma notícia, o melhor caminho é comparar as informações com outras fontes confiáveis, como veículos de imprensa conhecidos e órgãos oficiais. Se várias fontes dão o mesmo dado, a notícia tende a ser verdadeira.\n\nCompartilhar não verifica nada. Ler só o título pode levar a erros. Confiar na primeira mensagem recebida é arriscado. E o número de curtidas mostra popularidade, e não veracidade. Só essa explicação é uma forma de verificar.",
  },
  {
    d: "media",
    e: "Por que os textos informativos usam, em geral, a linguagem denotativa?",
    o: ["Para transmitir a informação de modo claro e direto", "Para deixar o texto mais misterioso", "Para esconder o assunto do leitor", "Para fazer o leitor rir", "Para criar rimas e versos"],
    x: "A linguagem denotativa usa as palavras em seu sentido literal, sem duplo sentido. Isso permite que a informação seja entendida de modo claro e direto, sem interpretações diferentes. É a linguagem típica de notícias e verbetes.\n\nDeixar o texto misterioso, esconder o assunto, fazer o leitor rir ou criar rimas são efeitos de outros tipos de texto. Só essa explicação explica o uso da linguagem denotativa.",
  },
  {
    d: "media",
    e: "Qual manchete resume melhor uma notícia sobre a inauguração gratuita de uma biblioteca no bairro Vila Nova?",
    o: ["Prefeitura inaugura biblioteca gratuita na Vila Nova", "Que tarde linda para ler um bom livro", "Como escolher um livro para ler", "Biblioteca é o melhor lugar do mundo", "Eu adoro livros e bibliotecas"],
    x: "A manchete deve resumir o fato principal com objetividade: quem fez, o que fez e onde. Prefeitura inaugura biblioteca gratuita na Vila Nova traz essas informações em poucas palavras.\n\nQue tarde linda para ler um bom livro tem tom de crônica. Como escolher um livro para ler lembra um texto instrucional. Biblioteca é o melhor lugar do mundo expressa opinião. E eu adoro livros e bibliotecas é uma declaração pessoal. Só a primeira manchete resume o fato.",
  },
  {
    d: "media",
    e: "Qual legenda combina com a foto de crianças plantando árvores no pátio da escola?",
    o: ["Alunos plantam árvores no pátio da escola", "Que lindo dia para brincar", "Jogo de futebol termina empatado", "Receita de bolo de cenoura", "Moradores reclamam do trânsito"],
    x: "A legenda deve descrever o que a imagem mostra. Alunos plantam árvores no pátio da escola descreve exatamente a cena: quem aparece, o que fazem e onde.\n\nQue lindo dia para brincar expressa uma impressão. Jogo de futebol termina empatado seria legenda de uma foto de partida. Receita de bolo de cenoura seria de uma foto de culinária. E moradores reclamam do trânsito seria de uma foto de rua. Só a primeira legenda combina com a foto.",
  },
  {
    d: "media",
    e: "Leia: “A cidade teve 120 mm de chuva em um dia, o maior volume do ano, segundo a Defesa Civil. Para o prefeito, a situação foi preocupante.” Qual trecho traz uma opinião?",
    o: ["a situação foi preocupante", "120 mm de chuva", "em um dia", "o maior volume do ano", "segundo a Defesa Civil"],
    x: "Uma opinião expressa o ponto de vista de alguém e não pode ser comprovada com dados. No trecho, a situação foi preocupante é a avaliação do prefeito, e por isso é opinião.\n\nOs 120 mm de chuva, o período de um dia e o maior volume do ano são dados que podem ser conferidos. E segundo a Defesa Civil indica de onde vem a informação. Só a situação foi preocupante é opinião.",
  },
  {
    d: "media",
    e: "Em “A cidade teve 120 mm de chuva em um dia, segundo a Defesa Civil”, a expressão segundo a Defesa Civil indica o quê?",
    o: ["A fonte da informação", "O lugar da chuva", "A opinião do repórter", "O horário do fato", "A moral do texto"],
    x: "A expressão segundo a Defesa Civil informa de onde vem o dado da chuva. É a fonte da informação, e citá-la dá credibilidade à notícia, porque permite ao leitor saber quem afirma o quê.\n\nO lugar da chuva é a cidade. A opinião do repórter não aparece na frase. O horário do fato não é indicado. E a moral é característica da fábula. Só essa explicação descreve a expressão.",
  },
  {
    d: "media",
    e: "Qual sequência corresponde à estrutura básica de um texto expositivo?",
    o: ["Introdução, desenvolvimento e conclusão", "Desfecho, clímax e título", "Moral, versos e refrão", "Receita, modo de fazer e rendimento", "Saudação, assunto e despedida"],
    x: "O texto expositivo apresenta e explica um assunto. Sua estrutura básica tem uma introdução, que apresenta o tema, um desenvolvimento, que explica e dá exemplos ou dados, e uma conclusão, que fecha as ideias.\n\nDesfecho e clímax são partes da narrativa. Moral é parte da fábula, e verso e refrão são partes do poema e da canção. Modo de fazer e rendimento são partes da receita. E saudação e despedida são partes da carta. Só a primeira sequência é a do texto expositivo.",
  },
  {
    d: "media",
    e: "Qual é a função do subtítulo, ou linha fina, de uma notícia?",
    o: ["Completar a manchete com mais informações", "Substituir o texto da notícia", "Dar o nome do repórter", "Mostrar a data de fundação do jornal", "Anunciar produtos"],
    x: "A linha fina, ou subtítulo, vem logo abaixo da manchete e a completa com mais informações sobre o fato, ajudando o leitor a decidir se vai ler a notícia inteira. Costuma ser uma frase curta.\n\nNão substitui o texto, que traz os detalhes. O nome do repórter aparece na assinatura. A data de fundação do jornal não faz parte da notícia. E anunciar produtos é função da publicidade. Só essa explicação descreve a linha fina.",
  },
  {
    d: "media",
    e: "Qual destes títulos é uma manchete de notícia?",
    o: ["Prefeitura inaugura nova ponte sobre o rio", "Uma tarde de chuva e memórias", "Como fazer um bolo de cenoura", "O lobo e o cordeiro", "Querida avó, estou com saudade"],
    x: "A manchete resume um fato recente e real, com sujeito e verbo no presente: prefeitura inaugura nova ponte sobre o rio. É um título típico de notícia.\n\nUma tarde de chuva e memórias é título de crônica ou de texto pessoal. Como fazer um bolo de cenoura é título de receita. O lobo e o cordeiro é título de fábula. E querida avó, estou com saudade é abertura de carta. Só o primeiro título é de notícia.",
  },
  {
    d: "media",
    e: "O que é a assinatura em um texto jornalístico?",
    o: ["O nome de quem escreveu o texto", "O nome do jornal", "O título da matéria", "A legenda da foto", "O horário de publicação"],
    x: "A assinatura é o nome de quem escreveu o texto, geralmente o repórter, colocado perto do título ou no fim da matéria. Indica a autoria e a responsabilidade pela informação.\n\nO nome do jornal identifica o veículo. O título resume a matéria. A legenda explica uma imagem. E o horário de publicação indica quando o texto foi publicado. Só essa explicação define a assinatura.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Leia: “O prefeito afirmou que a obra, ‘sem dúvida a melhor da década’, ficará pronta em março.” Qual trecho expressa a opinião do prefeito?",
    o: ["sem dúvida a melhor da década", "ficará pronta em março", "O prefeito afirmou", "que a obra", "a obra"],
    x: "A expressão sem dúvida a melhor da década avalia a obra e não pode ser comprovada com dados: é o julgamento do prefeito, ou seja, uma opinião. O uso de uma expressão como melhor da década marca essa avaliação.\n\nFicará pronta em março é uma previsão que pode ser conferida. O prefeito afirmou indica quem fala. E que a obra e a obra apenas nomeiam o assunto. Só sem dúvida a melhor da década é opinião.",
  },
  {
    d: "dificil",
    e: "Leia: “Para entender por que o rio secou, a equipe ouviu moradores, biólogos e técnicos e analisou dados de dez anos de chuva e de consumo de água na região.” A qual gênero pertence esse trecho?",
    o: ["Reportagem", "Fábula", "Poema", "Receita", "Bilhete"],
    x: "O trecho descreve uma investigação: a equipe ouviu várias pessoas e analisou dados de dez anos para entender as causas do problema. Aprofundar um assunto, com várias fontes e dados, é o que caracteriza a reportagem.\n\nA fábula tem animais e moral. O poema expressa emoções em versos. A receita ensina um procedimento. E o bilhete é uma mensagem curta. Só a reportagem corresponde ao trecho.",
  },
  {
    d: "dificil",
    e: "Qual sequência apresenta a ordem de importância típica das informações em uma notícia?",
    o: ["Fato principal, detalhes e informações complementares", "Informações complementares, detalhes e fato principal", "Detalhes, informações complementares e fato principal", "Opinião, fato principal e detalhes", "Detalhes, opinião e informações complementares"],
    x: "Na estrutura da pirâmide invertida, a notícia começa pelo fato principal, em seguida traz os detalhes importantes e termina com informações complementares, menos essenciais. Assim, o leitor que parar no meio já sabe o mais importante.\n\nAs demais sequências começam por informações menos importantes, ou incluem opinião, que a notícia deve evitar. Só a primeira sequência segue a ordem da pirâmide invertida.",
  },
  {
    d: "dificil",
    e: "Leia a tabela: na turma A, 10 alunos vão a pé, 14 de ônibus e 6 de bicicleta; na turma B, 8 vão a pé, 16 de ônibus e 6 de bicicleta. Quantos alunos vão de ônibus, somando as duas turmas?",
    o: ["30", "24", "22", "28", "12"],
    x: "Para somar os alunos que vão de ônibus nas duas turmas, usam-se os valores dessa categoria: 14 na turma A e 16 na turma B. A soma é 14 + 16 = 30.\n\nO valor 24 soma os que vão a pé e de ônibus na turma A, 10 + 14. O valor 22 soma os que vão de ônibus e de bicicleta na turma B, 16 + 6. O valor 28 não corresponde a nenhuma soma da categoria pedida. E o valor 12 soma apenas os de bicicleta das duas turmas, 6 + 6. Só 30 é o total correto.",
  },
  {
    d: "dificil",
    e: "Em uma pesquisa com 200 alunos, 40% disseram preferir futebol. Quantos alunos preferem futebol?",
    o: ["80", "40", "60", "100", "160"],
    x: "Quarenta por cento de 200 é calculado multiplicando 200 por 40 e dividindo por 100, ou seja, 200 × 0,40 = 80. Então 80 alunos preferem futebol.\n\nO valor 40 confunde a porcentagem com a quantidade. O valor 60 seria 30% de 200. O valor 100 seria 50%. E o valor 160 seria 80%. Só 80 corresponde a 40% de 200, e a conta pode ser conferida pensando que 10% de 200 são 20, e que 40% são quatro vezes isso.",
  },
  {
    d: "dificil",
    e: "Leia o verbete: “ágil adj. 1. Que se move com facilidade; rápido. 2. Que age com eficiência.” Em qual frase a palavra ágil tem o sentido 1?",
    o: ["O atleta ágil saltou os obstáculos.", "A atendente ágil resolveu o pedido de todos.", "A empresa ágil entregou os produtos no prazo.", "O sistema ágil processou os dados com eficiência.", "O advogado ágil conduziu o processo com eficiência."],
    x: "O sentido 1 do verbete é o de quem se move com facilidade, com rapidez física. Em o atleta ágil saltou os obstáculos, a agilidade é a do movimento do corpo, e por isso corresponde ao sentido 1.\n\nNas demais frases, a agilidade se refere à eficiência no trabalho: a atendente que resolve pedidos, a empresa que entrega no prazo, o sistema que processa dados e o advogado que conduz o processo. É o sentido 2, o de agir com eficiência. Só a primeira frase traz o sentido 1.",
  },
  {
    d: "dificil",
    e: "Qual é a principal diferença entre a notícia e a crônica?",
    o: ["A notícia informa fatos com objetividade; a crônica comenta o cotidiano em tom pessoal", "A notícia é sempre em versos; a crônica é em prosa", "A notícia conta histórias inventadas; a crônica relata fatos reais", "A notícia dá opiniões; a crônica traz só dados", "Não há nenhuma diferença entre elas"],
    x: "A notícia tem como objetivo informar fatos de interesse público, com linguagem objetiva e sem opinião do repórter. A crônica parte de fatos do cotidiano e os comenta em tom pessoal, muitas vezes com humor ou lirismo.\n\nA notícia não é em versos. Não conta histórias inventadas. Não é a notícia que dá opiniões, mas a crônica. E há, sim, diferenças. Só a primeira afirmação descreve a distinção corretamente.",
  },
  {
    d: "dificil",
    e: "Qual sinal mostra que um texto informativo é confiável?",
    o: ["Cita fontes identificadas e permite conferir os dados", "Usa muitos pontos de exclamação", "Não tem assinatura nem data", "Traz só a opinião de quem escreveu", "É compartilhado por muitas pessoas"],
    x: "Um texto informativo confiável cita fontes identificadas, como órgãos oficiais, pesquisadores e instituições, e permite que o leitor confira os dados. Isso permite verificar a informação e dar credibilidade ao texto.\n\nMuitos pontos de exclamação indicam emoção, e não precisão. A ausência de assinatura e de data dificulta a verificação. Trazer só opinião não é informar. E o número de compartilhamentos mostra alcance, e não verdade. Só essa explicação indica confiabilidade.",
  },
  {
    d: "dificil",
    e: "Leia: “A prefeitura inaugurou nesta terça-feira uma biblioteca no bairro Vila Nova. O espaço tem 5 mil livros e funciona de segunda a sábado, das 8h às 18h. A entrada é gratuita.” Qual afirmação NÃO pode ser concluída do texto?",
    o: ["A biblioteca abre aos domingos", "A entrada na biblioteca é gratuita", "A biblioteca fica no bairro Vila Nova", "A biblioteca abre às 8 horas", "A biblioteca foi inaugurada pela prefeitura"],
    x: "O texto diz que a biblioteca funciona de segunda a sábado, e não menciona o domingo. Por isso não se pode concluir que ela abra aos domingos.\n\nAs demais afirmações estão no texto: a entrada é gratuita; fica no bairro Vila Nova; abre às 8h, pois funciona das 8h às 18h; e foi inaugurada pela prefeitura. Só a primeira afirmação não pode ser concluída.",
  },
  {
    d: "dificil",
    e: "O consumo de água de uma casa foi de 120 litros em janeiro, 150 em fevereiro e 90 em março. Qual é a diferença entre o maior e o menor consumo?",
    o: ["60 litros", "30 litros", "90 litros", "240 litros", "360 litros"],
    x: "O maior consumo foi o de fevereiro, 150 litros, e o menor foi o de março, 90 litros. A diferença entre eles é 150 − 90 = 60 litros.\n\nO valor 30 é a diferença entre fevereiro e janeiro, 150 − 120. O valor 90 é o menor consumo, e não a diferença. O valor 240 soma o maior e o menor, 150 + 90. E o valor 360 é o total dos três meses, 120 + 150 + 90. Só 60 litros é a diferença entre o maior e o menor consumo.",
  },
];
