/* Regência e crase — parte A (25 questões).
   Regência verbal dos verbos mais cobrados, regência nominal e as regras de
   ocorrência e proibição da crase. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando a norma-padrão e o sentido de \"presenciar\", a lacuna da frase \"Ontem à noite, assisti ___ filme premiado no festival\" deve ser preenchida por:",
    opcoes: ["o", "um", "ao", "no", "com o"],
    correta: 2,
    explicacao:
      "No sentido de ver ou presenciar, \"assistir\" é transitivo indireto e exige a preposição \"a\": assistir ao filme, ao jogo, à peça. Quando significa prestar assistência, torna-se transitivo direto — \"o médico assistiu o paciente\". A troca de regência muda o sentido do verbo, e não apenas a estrutura.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Na frase \"Durante anos, ele aspirava ___ cargo de diretor da instituição\", empregando o verbo no sentido de desejar, a lacuna deve ser preenchida por:",
    opcoes: ["ao", "o", "no", "do", "pelo"],
    correta: 0,
    explicacao:
      "Com o sentido de almejar, \"aspirar\" é transitivo indireto e pede a preposição \"a\". Já no sentido de sorver ou respirar, é transitivo direto: \"aspirou o perfume das flores\". Note ainda que, sendo transitivo indireto, não admite o pronome \"lhe\" — usa-se \"aspirava a ele\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Empregando o verbo \"visar\" no sentido de ter como objetivo, conforme a norma-padrão, completa-se corretamente a frase \"A nova política pública visa ___\":",
    opcoes: [
      "o desenvolvimento social.",
      "no desenvolvimento social.",
      "pelo desenvolvimento social.",
      "com o desenvolvimento social.",
      "ao desenvolvimento social.",
    ],
    correta: 4,
    explicacao:
      "No sentido de ter em vista ou almejar, \"visar\" é transitivo indireto e exige a preposição \"a\". Nos sentidos de mirar e de dar visto, é transitivo direto: \"visou o alvo\", \"visou o cheque\". Trata-se do mesmo padrão de \"aspirar\", em que o sentido figurado pede preposição.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Segundo a norma-padrão, a lacuna da frase \"Todos os candidatos devem obedecer ___ regras do edital\" é corretamente preenchida por:",
    opcoes: ["as", "às", "a", "nas", "com as"],
    correta: 1,
    explicacao:
      "\"Obedecer\" é transitivo indireto e exige a preposição \"a\"; como \"regras\" admite o artigo feminino plural, ocorre a fusão e surge a crase: às regras. O mesmo vale para \"desobedecer\". O teste é substituir por um termo masculino: \"obedecer aos regulamentos\" confirma a presença da preposição.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Na frase \"Depois do trabalho, cheguei ___ casa por volta das dez horas\", sem que a palavra venha determinada por qualquer especificação, a lacuna é corretamente preenchida por:",
    opcoes: ["à", "na", "em", "a", "para a"],
    correta: 3,
    explicacao:
      "\"Chegar\" exige a preposição \"a\", e não \"em\", na norma-padrão. Como \"casa\" no sentido de próprio lar não vem acompanhada de artigo, não há crase. A crase só apareceria com determinação: \"cheguei à casa de meus pais\". O mesmo raciocínio vale para o verbo \"ir\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando as regras de ocorrência da crase, a lacuna da frase \"Refiro-me ___ pessoa que acabou de sair da sala\" é corretamente preenchida por:",
    opcoes: ["a", "à", "na", "pela", "com a"],
    correta: 1,
    explicacao:
      "O verbo \"referir-se\" exige a preposição \"a\", e o substantivo feminino \"pessoa\" admite o artigo \"a\": a fusão das duas vogais gera a crase. O teste da substituição por masculino confirma: \"refiro-me ao rapaz\". Sempre que o masculino pedir \"ao\", o feminino pedirá \"à\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Entre as situações a seguir, aquela em que o acento indicativo de crase NÃO deve ser empregado é diante de:",
    opcoes: [
      "locuções adverbiais femininas, como às pressas.",
      "os pronomes demonstrativos aquele, aquela e aquilo.",
      "expressões que indicam hora determinada.",
      "a locução prepositiva à moda de.",
      "palavras masculinas, como em andar a cavalo.",
    ],
    correta: 4,
    explicacao:
      "A crase resulta da fusão da preposição \"a\" com o artigo feminino \"a\"; diante de palavra masculina não há artigo feminino, logo não há crase. A exceção aparente ocorre quando há termo feminino subentendido, como em \"à moda de\": \"bife à [moda] Parmegiana\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Em relação ao uso da crase diante de nomes de lugar, está escrita conforme a norma-padrão a frase:",
    opcoes: [
      "Viajei à Brasília no mês passado.",
      "Retornei a Bahia depois das férias.",
      "Fomos à Portugal em janeiro.",
      "Viajei a Brasília e depois fui à Bahia.",
      "Cheguei à Roma numa manhã de sol.",
    ],
    correta: 3,
    explicacao:
      "Nomes de lugar que não admitem artigo dispensam a crase — dizemos \"vim de Brasília\", e não \"da Brasília\". Já Bahia pede artigo: \"vim da Bahia\", logo \"fui à Bahia\". O teste consiste em usar o verbo \"vir\": se resultar em \"da\", há crase; se resultar em \"de\", não há.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando as situações em que a crase é proibida, está corretamente escrita a frase:",
    opcoes: [
      "Entregue o documento a ela ainda hoje.",
      "Entregue o documento à ela ainda hoje.",
      "Comecei à estudar cedo esta manhã.",
      "Ele se dirigiu à uma testemunha do caso.",
      "Referiu-se à Vossa Senhoria com respeito.",
    ],
    correta: 0,
    explicacao:
      "Não há crase antes de pronome pessoal, porque esses pronomes não admitem artigo. As demais alternativas violam outras proibições: antes de verbo, antes do artigo indefinido \"uma\" e antes de pronomes de tratamento como Vossa Senhoria. Todas essas situações excluem o artigo feminino e, com ele, a crase.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Na frase \"O expediente funciona das oito ___ dezoito horas, de segunda a sexta\", a lacuna é corretamente preenchida, conforme a norma-padrão, por:",
    opcoes: ["as", "a", "às", "há", "nas"],
    correta: 2,
    explicacao:
      "Em indicações de hora determinada ocorre crase, e a presença de \"das\" no início confirma a estrutura: se há \"das\", haverá \"às\". A palavra \"há\" indicaria tempo passado, como em \"saiu há duas horas\", sentido incompatível com a frase.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Segundo a regência do verbo \"preferir\" na norma-padrão, está corretamente construída a frase:",
    opcoes: [
      "Prefiro café a chá pela manhã.",
      "Prefiro muito mais café do que chá.",
      "Prefiro café do que chá pela manhã.",
      "Prefiro mais café que chá pela manhã.",
      "Prefiro café ao invés de chá.",
    ],
    correta: 0,
    explicacao:
      "\"Preferir\" é transitivo direto e indireto e pede a preposição \"a\", sem reforço de intensidade: prefere-se uma coisa a outra. Construções com \"do que\", \"mais\" ou \"muito mais\" são consideradas redundantes na norma-padrão, porque a ideia de preferência já implica comparação.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "De acordo com a regência prevista pela norma-padrão para o verbo \"namorar\", está corretamente escrita a frase:",
    opcoes: [
      "Ela namora com um colega de faculdade.",
      "Ela namora ao colega de faculdade.",
      "Ela namora do colega de faculdade.",
      "Ela namora um colega de faculdade.",
      "Ela namora em um colega de faculdade.",
    ],
    correta: 3,
    explicacao:
      "\"Namorar\" é transitivo direto e dispensa preposição, ainda que \"namorar com\" seja corrente na fala. O mesmo ocorre com \"amar\" e \"beijar\". Em provas que cobram norma-padrão, a construção sem preposição é a única aceita.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "A respeito da regência dos verbos \"lembrar\" e \"esquecer\", está de acordo com a norma-padrão a frase:",
    opcoes: [
      "Esqueci-me o livro sobre a mesa da sala.",
      "Lembrei-me o compromisso da manhã seguinte.",
      "Esqueci o guarda-chuva no restaurante ontem.",
      "Lembrei do compromisso assim que acordei.",
      "Esqueci-me do livro sobre a mesa, mas lembrei o fato depois.",
    ],
    correta: 2,
    explicacao:
      "Sem pronome, \"esquecer\" e \"lembrar\" são transitivos diretos: esqueci o guarda-chuva, lembrei o compromisso. Com pronome, tornam-se transitivos indiretos e exigem \"de\": esqueci-me do guarda-chuva, lembrei-me do compromisso. Misturar as duas construções é o erro mais frequente.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Empregando o verbo \"implicar\" no sentido de acarretar, conforme a norma-padrão, completa-se corretamente a frase \"A nova regra implica ___\":",
    opcoes: [
      "em mudanças no cronograma.",
      "com mudanças no cronograma.",
      "de mudanças no cronograma.",
      "a mudanças no cronograma.",
      "mudanças no cronograma.",
    ],
    correta: 4,
    explicacao:
      "No sentido de acarretar ou ter como consequência, \"implicar\" é transitivo direto e não admite preposição. A construção \"implicar em\", muito comum na fala, é condenada nesse sentido. Com \"com\", o verbo assume outro significado: \"o professor implicou com o aluno\", isto é, embirrou.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "De acordo com a regência do verbo \"simpatizar\" na norma-padrão, está corretamente escrita a frase:",
    opcoes: [
      "Simpatizei-me com o novo professor de história.",
      "Simpatizei com o novo professor de história.",
      "Simpatizei ao novo professor de história.",
      "Simpatizei o novo professor de história.",
      "Simpatizei-me do novo professor de história.",
    ],
    correta: 1,
    explicacao:
      "\"Simpatizar\" e \"antipatizar\" não são verbos pronominais: constroem-se sem o pronome e exigem a preposição \"com\". A forma \"simpatizei-me\" é um erro frequente, provavelmente por analogia com \"identificar-se com\". A regência correta é apenas \"simpatizar com alguém\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "A regência nominal determina a preposição exigida por certos substantivos, adjetivos e advérbios. Está de acordo com a norma-padrão a construção:",
    opcoes: [
      "acesso em recursos públicos",
      "obediência com as normas internas",
      "preferência por café do que por chá",
      "respeito com os mais velhos",
      "acesso a recursos públicos e obediência às normas",
    ],
    correta: 4,
    explicacao:
      "\"Acesso\" e \"obediência\" exigem a preposição \"a\", assim como \"respeito\" pede \"a\" ou \"por\" conforme o sentido. A regência nominal costuma acompanhar a do verbo correspondente: se \"obedecer\" pede \"a\", \"obediência\" também pedirá. Consultar essa correspondência resolve boa parte dos casos.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "A respeito do emprego da crase na palavra \"distância\", está correta a frase:",
    opcoes: [
      "Observou tudo à distância, sem qualquer especificação.",
      "Manteve-se a distância de dez metros do portão.",
      "Ficou à distância de dez metros do portão de entrada.",
      "Cursou a faculdade à distância de forma indeterminada.",
      "Assistiu a aula a distância de vinte quilômetros.",
    ],
    correta: 2,
    explicacao:
      "Quando a distância vem determinada por um número, a expressão exige crase: à distância de dez metros. Sem determinação, escreve-se sem acento: \"observou tudo a distância\", \"curso a distância\". É a especificação que autoriza o artigo e, com ele, a crase.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Em expressões como \"bife à Parmegiana\" e \"escreve à Machado de Assis\", o acento indicativo de crase é empregado porque:",
    opcoes: [
      "há sempre crase antes de nomes próprios.",
      "está subentendida a expressão feminina \"à moda de\".",
      "trata-se de palavras estrangeiras aportuguesadas.",
      "o acento marca apenas a pronúncia mais aberta.",
      "toda locução adverbial recebe acento grave.",
    ],
    correta: 1,
    explicacao:
      "A crase se justifica pela elipse de \"moda de\" ou \"maneira de\", expressões femininas que autorizam o artigo. É por isso que a construção sobrevive mesmo diante de nome masculino, como em \"à Machado de Assis\". Sem essa elipse, a crase diante de masculino seria impossível.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "facil",
    enunciado:
      "Entre as situações a seguir, a crase é proibida diante de:",
    opcoes: [
      "substantivo feminino determinado.",
      "locução adverbial de modo feminina.",
      "expressão de hora determinada.",
      "verbo no infinitivo.",
      "pronome demonstrativo aquela.",
    ],
    correta: 3,
    explicacao:
      "Verbos não admitem artigo, logo não pode haver fusão: escreve-se \"começou a chover\" e \"passou a estudar\". As demais situações listadas são justamente casos clássicos de crase obrigatória. Reconhecer a classe da palavra seguinte resolve a maior parte das dúvidas.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando a fusão da preposição com o pronome demonstrativo, a lacuna da frase \"Não me refiro a este caso, mas ___ que discutimos ontem\" é corretamente preenchida por:",
    opcoes: ["àquele", "aquele", "à aquele", "a quele", "aquelle"],
    correta: 0,
    explicacao:
      "A preposição \"a\", exigida por \"referir-se\", funde-se com o pronome \"aquele\", e essa fusão é marcada pelo acento grave. O mesmo vale para \"àquela\", \"àquilo\" e \"àqueles\". Sem preposição regente, escreve-se sem acento: \"aquele caso me interessa\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Um teste prático para verificar a ocorrência de crase consiste em substituir o termo feminino por um masculino equivalente. Se, na substituição, surgir a forma \"ao\", conclui-se que:",
    opcoes: [
      "não há crase, pois o masculino exclui o artigo.",
      "a crase é facultativa naquele contexto.",
      "houve erro de regência no verbo empregado.",
      "há crase, pois estão presentes preposição e artigo.",
      "o termo feminino deve ser trocado por outro.",
    ],
    correta: 3,
    explicacao:
      "A forma \"ao\" resulta da fusão de \"a\" com \"o\", o que revela a presença simultânea de preposição e artigo. Transposta para o feminino, essa combinação produz a crase. Se a substituição resultar apenas em \"a\", sem artigo, não haverá acento.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Empregando o verbo \"assistir\" no sentido de prestar assistência, conforme a norma-padrão, está correta a frase:",
    opcoes: [
      "O médico assistiu ao paciente durante a noite.",
      "O médico assistiu o paciente durante a noite.",
      "O médico assistiu no paciente durante a noite.",
      "O médico assistiu do paciente durante a noite.",
      "O médico assistiu com o paciente durante a noite.",
    ],
    correta: 1,
    explicacao:
      "No sentido de socorrer ou dar assistência, \"assistir\" é transitivo direto e dispensa preposição. A construção com \"a\" corresponde ao sentido de presenciar: \"assistiu ao filme\". O verbo também pode significar caber ou pertencer, como em \"assiste ao réu o direito de defesa\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "De acordo com a regência do verbo \"custar\" na norma-padrão, está corretamente construída a frase:",
    opcoes: [
      "Custou-me aceitar a notícia daquela manhã.",
      "Custei a aceitar a notícia daquela manhã.",
      "Eu custei muito para aceitar aquela notícia.",
      "A notícia custou-se a ser aceita por mim.",
      "Custou eu aceitar a notícia daquela manhã.",
    ],
    correta: 0,
    explicacao:
      "Na norma-padrão, \"custar\" no sentido de ser difícil tem como sujeito aquilo que custa, e a pessoa aparece como objeto indireto: custou-me aceitar. A construção com a pessoa como sujeito — \"eu custei a aceitar\" — é corrente na fala, mas rejeitada em provas de norma-padrão.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando a diferença entre as construções com e sem pronome, está de acordo com a norma-padrão a frase:",
    opcoes: [
      "Lembrei-me o nome do autor durante a prova.",
      "Esqueci-me a data da entrega do trabalho.",
      "Lembrei-me do nome do autor durante a prova.",
      "Esqueci do prazo estabelecido pelo professor.",
      "Lembrei-lhe do compromisso marcado ontem.",
    ],
    correta: 2,
    explicacao:
      "Com o pronome, o verbo passa a exigir a preposição \"de\": lembrei-me do nome, esqueci-me da data. Sem o pronome, a construção é direta: lembrei o nome, esqueci a data. Cada estrutura é correta em si; o erro está em combinar o pronome com o objeto direto, ou o contrário.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Empregando o verbo \"chamar\" no sentido de qualificar ou atribuir um nome, está de acordo com a norma-padrão a frase:",
    opcoes: [
      "Chamou-o em covarde diante de todos.",
      "Chamou-o por covarde diante de todos.",
      "Chamou-o com covarde diante de todos.",
      "Chamou-o desde covarde diante de todos.",
      "Chamou-o de covarde diante de todos.",
    ],
    correta: 4,
    explicacao:
      "No sentido de qualificar, \"chamar\" admite quatro construções aceitas: chamou-o covarde, chamou-o de covarde, chamou-lhe covarde e chamou-lhe de covarde. A preposição correta é \"de\", nunca \"em\", \"por\" ou \"com\". Já no sentido de convocar, o verbo é transitivo direto: \"chamou o aluno\".",
  },
];
