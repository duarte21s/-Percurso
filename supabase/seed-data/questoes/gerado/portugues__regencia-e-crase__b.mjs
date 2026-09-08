/* Regência e crase — parte B (25 questões).
   Verbos bitransitivos, regência nominal, crase facultativa e casos especiais
   diante de "terra", plural e nomes próprios. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando que o verbo \"pagar\" é transitivo direto e indireto, com a coisa como objeto direto e a pessoa como objeto indireto, está correta a frase:",
    opcoes: [
      "Paguei o pedreiro pela obra concluída.",
      "Paguei no pedreiro a obra concluída.",
      "Paguei com o pedreiro a obra concluída.",
      "Paguei a obra ao pedreiro na semana passada.",
      "Paguei do pedreiro a obra concluída.",
    ],
    correta: 3,
    explicacao:
      "Paga-se algo a alguém: a coisa vem sem preposição e a pessoa vem com \"a\". A construção \"paguei o pedreiro\" só seria aceitável se o pedreiro fosse tratado como a própria coisa paga, o que não é o caso. O mesmo padrão vale para \"perdoar\" e \"agradecer\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Aplicando a mesma regência de \"pagar\" ao verbo \"perdoar\", está de acordo com a norma-padrão a frase:",
    opcoes: [
      "Perdoou o irmão pela ofensa cometida.",
      "Perdoou a ofensa ao irmão mais novo.",
      "Perdoou com o irmão a ofensa cometida.",
      "Perdoou do irmão a ofensa cometida.",
      "Perdoou no irmão a ofensa cometida.",
    ],
    correta: 1,
    explicacao:
      "Perdoa-se algo a alguém: a falta é objeto direto e a pessoa, objeto indireto. Assim como em \"pagar\", a coisa vem sem preposição e a pessoa com \"a\". Na fala corrente, \"perdoou o irmão\" é comum, mas em provas de norma-padrão a distinção é cobrada.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "O verbo \"informar\" admite duas construções igualmente corretas na norma-padrão. Está de acordo com uma delas a frase:",
    opcoes: [
      "Informou com os alunos sobre a mudança.",
      "Informou dos alunos a mudança de horário.",
      "Informou em os alunos a mudança de horário.",
      "Informou para os alunos de a mudança.",
      "Informou os alunos da mudança de horário.",
    ],
    correta: 4,
    explicacao:
      "As duas construções aceitas são \"informar alguém de algo\" e \"informar algo a alguém\". A alternativa correta segue a primeira. O mesmo comportamento aparece em \"avisar\", \"cientificar\" e \"notificar\" — verbos que aceitam inverter qual complemento leva a preposição.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "facil",
    enunciado:
      "De acordo com a regência dos verbos \"morar\" e \"residir\" na norma-padrão, está corretamente escrita a frase:",
    opcoes: [
      "Moro na Rua das Acácias, número 40.",
      "Moro a Rua das Acácias, número 40.",
      "Moro à Rua das Acácias, número 40.",
      "Moro pela Rua das Acácias, número 40.",
      "Moro de a Rua das Acácias, número 40.",
    ],
    correta: 0,
    explicacao:
      "\"Morar\" e \"residir\" exigem a preposição \"em\": mora-se em um lugar. A forma \"morar à rua\" aparece em documentos antigos e em linguagem cartorial, mas a norma-padrão contemporânea prefere \"na rua\". Sem preposição \"a\", não há qualquer possibilidade de crase.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "O verbo \"querer\" muda de sentido conforme a regência adotada. Empregado como transitivo indireto, com a preposição \"a\", ele assume o sentido de:",
    opcoes: [
      "desejar algo com intensidade.",
      "solicitar formalmente alguma coisa.",
      "estimar, ter afeição por alguém.",
      "obrigar alguém a fazer algo.",
      "duvidar de uma informação recebida.",
    ],
    correta: 2,
    explicacao:
      "Como transitivo direto, \"querer\" significa desejar: \"quero um café\". Com a preposição \"a\", passa a significar estimar: \"quero bem a meus amigos\", \"quero muito a ele\". A mudança de regência altera o significado do verbo, e não apenas sua estrutura sintática.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Empregando o verbo \"proceder\" no sentido de ter origem, conforme a norma-padrão, está correta a frase:",
    opcoes: [
      "O trem procede a São Paulo às oito horas.",
      "O costume procede em tradições antigas.",
      "O costume procede de tradições muito antigas.",
      "O costume procede com tradições antigas.",
      "O costume procede por tradições antigas.",
    ],
    correta: 2,
    explicacao:
      "No sentido de originar-se, \"proceder\" exige a preposição \"de\". Com outros sentidos, muda a regência: \"proceder a\" significa realizar, como em \"procedeu à leitura do documento\"; sem complemento, significa ter fundamento, como em \"o argumento não procede\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "O verbo \"agradar\" tem sentidos distintos conforme a regência. Empregado como transitivo direto, sem preposição, ele significa:",
    opcoes: [
      "acariciar, fazer carinho.",
      "satisfazer, ser do agrado.",
      "presentear com objetos.",
      "elogiar publicamente alguém.",
      "obedecer a uma ordem.",
    ],
    correta: 0,
    explicacao:
      "Sem preposição, \"agradar\" significa acariciar: \"agradou o gato\". Com a preposição \"a\", significa satisfazer: \"o filme agradou ao público\". A distinção é sutil, mas cobrada com frequência justamente por passar despercebida na fala cotidiana.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Segundo a regência do verbo \"responder\" na norma-padrão, está corretamente escrita a frase:",
    opcoes: [
      "Respondeu o e-mail do cliente em minutos.",
      "Respondeu no e-mail do cliente em minutos.",
      "Respondeu com o e-mail do cliente em minutos.",
      "Respondeu ao e-mail do cliente em minutos.",
      "Respondeu pelo e-mail do cliente em minutos.",
    ],
    correta: 3,
    explicacao:
      "\"Responder\" é transitivo indireto e exige a preposição \"a\" quando indica aquilo a que se responde: responder ao e-mail, à pergunta, ao ofício. Pode ser transitivo direto apenas quando o complemento é a própria resposta: \"respondeu que viria\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Existem contextos em que o emprego da crase é facultativo. Isso ocorre, entre outros casos, diante de:",
    opcoes: [
      "verbos no infinitivo.",
      "pronomes pessoais do caso reto.",
      "palavras masculinas em geral.",
      "artigos indefinidos femininos.",
      "nomes próprios femininos de pessoa.",
    ],
    correta: 4,
    explicacao:
      "Diante de nome próprio de mulher, o artigo é opcional na língua portuguesa — dizemos tanto \"conheço Maria\" quanto \"conheço a Maria\" —, e por isso a crase também é facultativa: \"referi-me a Maria\" ou \"referi-me à Maria\". As demais situações listadas são casos de proibição, não de facultatividade.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Outro caso em que a crase é considerada facultativa ocorre diante de:",
    opcoes: [
      "locuções adverbiais femininas de modo.",
      "pronomes possessivos femininos no singular.",
      "expressões de hora determinada.",
      "o pronome demonstrativo aquela.",
      "a locução prepositiva à moda de.",
    ],
    correta: 1,
    explicacao:
      "Diante de possessivo feminino singular, o artigo é opcional: \"entreguei a minha mãe\" ou \"entreguei à minha mãe\" — as duas formas são aceitas. As demais alternativas correspondem a casos de crase obrigatória, em que a ausência do acento configura erro.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "De acordo com a regência do verbo \"ir\" prevista pela norma-padrão, está corretamente escrita a frase:",
    opcoes: [
      "Fui no médico na semana passada.",
      "Fui em o médico na semana passada.",
      "Fui até no médico na semana passada.",
      "Fui com o médico na semana passada.",
      "Fui ao médico na semana passada.",
    ],
    correta: 4,
    explicacao:
      "Verbos de movimento como \"ir\", \"chegar\" e \"comparecer\" exigem a preposição \"a\", e não \"em\". A construção \"ir em\" é corrente na fala brasileira, mas rejeitada na norma-padrão. Quando o destino é feminino e admite artigo, surge a crase: \"fui à padaria\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Nas locuções adverbiais femininas, o acento indicativo de crase costuma ser empregado inclusive para evitar ambiguidade. Está corretamente escrita a frase:",
    opcoes: [
      "Comprou o carro a vista, com desconto.",
      "Comprou o carro em vista, com desconto.",
      "Comprou o carro à vista, com desconto.",
      "Comprou o carro na vista, com desconto.",
      "Comprou o carro para vista, com desconto.",
    ],
    correta: 2,
    explicacao:
      "\"À vista\" é locução adverbial feminina, e nesses casos a gramática recomenda o acento grave mesmo quando não há artigo explícito, justamente para distinguir de outros usos. Seguem o mesmo padrão \"às pressas\", \"à toa\", \"à noite\" e \"às vezes\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Considerando a concordância entre o artigo e o substantivo, está correta, conforme a norma-padrão, a frase:",
    opcoes: [
      "Refiro-me às pessoas educadas em geral, sem especificar.",
      "Refiro-me a pessoas educadas em geral, sem especificar.",
      "Refiro-me à pessoas educadas em geral, sem especificar.",
      "Refiro-me as pessoas educadas em geral, sem especificar.",
      "Refiro-me àquelas pessoas educada em geral.",
    ],
    correta: 1,
    explicacao:
      "Sem determinação, o substantivo plural dispensa artigo, e o \"a\" é apenas preposição: não há crase. A forma \"à pessoas\" é sempre incorreta, porque combina singular com plural. Se houvesse determinação — \"às pessoas que convidei\" —, a crase seria obrigatória, com o acento no plural.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Em locuções prepositivas formadas com substantivo feminino, o acento indicativo de crase é obrigatório. Está corretamente escrita a frase:",
    opcoes: [
      "O voo atrasou devido a chuva forte da tarde.",
      "O voo atrasou devido na chuva forte da tarde.",
      "O voo atrasou devido em chuva forte da tarde.",
      "O voo atrasou devido à chuva forte da tarde.",
      "O voo atrasou devido de a chuva forte.",
    ],
    correta: 3,
    explicacao:
      "A locução \"devido a\" exige preposição, e \"chuva\" admite artigo feminino: ocorre a crase. Seguem o mesmo padrão \"graças a\", \"em relação a\", \"quanto a\" e \"referente a\". O teste do masculino confirma: \"devido ao temporal\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "facil",
    enunciado:
      "Entre as frases a seguir, aquela em que o acento indicativo de crase está corretamente empregado em locução adverbial de tempo é:",
    opcoes: [
      "Costuma estudar à noite, depois do jantar.",
      "Costuma estudar a noite, depois do jantar.",
      "Costuma estudar na noite, depois do jantar.",
      "Costuma estudar de noite à, depois do jantar.",
      "Costuma estudar á noite, depois do jantar.",
    ],
    correta: 0,
    explicacao:
      "\"À noite\" é locução adverbial feminina de tempo e recebe o acento grave, assim como \"à tarde\" e \"às vezes\". Note que \"de manhã\" não leva acento porque a preposição é outra. O acento agudo em \"á\" não existe nessa função e configura erro de grafia.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Os verbos \"aludir\" e \"referir-se\" compartilham a mesma exigência de regência na norma-padrão. Está corretamente escrita a frase:",
    opcoes: [
      "O autor aludiu ao episódio e referiu-se à obra anterior.",
      "O autor aludiu o episódio e referiu-se a obra anterior.",
      "O autor aludiu do episódio e referiu-se na obra anterior.",
      "O autor aludiu com o episódio e referiu-se pela obra.",
      "O autor aludiu em o episódio e referiu-se de a obra.",
    ],
    correta: 0,
    explicacao:
      "Ambos são transitivos indiretos e exigem a preposição \"a\". Como \"obra\" é feminino e vem determinado, surge a crase. Verbos de referência — aludir, referir-se, remeter, reportar-se — formam um grupo de regência bastante regular, o que facilita a memorização.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "A regência nominal determina a preposição exigida por certos adjetivos. Está de acordo com a norma-padrão a sequência:",
    opcoes: [
      "ansioso de, apto em, compatível de",
      "ansioso em, apto por, compatível a",
      "ansioso com, apto de, compatível em",
      "ansioso por, apto a, compatível com",
      "ansioso a, apto com, compatível por",
    ],
    correta: 3,
    explicacao:
      "Cada adjetivo tem sua preposição fixada pelo uso: ansioso por, apto a, compatível com. Outros exemplos frequentes são \"capaz de\", \"favorável a\", \"propenso a\" e \"imune a\". Não há regra dedutível: essa lista se aprende pelo uso e pela consulta ao dicionário.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Quando a regência verbal exige a preposição \"a\" e o complemento é feminino determinado, ocorre crase. Está corretamente escrita a frase:",
    opcoes: [
      "O funcionário obedeceu a ordem sem questionar nada.",
      "O funcionário obedeceu na ordem sem questionar nada.",
      "O funcionário obedeceu à ordem sem questionar nada.",
      "O funcionário obedeceu com a ordem sem questionar.",
      "O funcionário obedeceu pela ordem sem questionar.",
    ],
    correta: 2,
    explicacao:
      "\"Obedecer\" exige a preposição \"a\", e \"ordem\" admite o artigo feminino: a fusão gera a crase. O teste do masculino confirma: \"obedeceu ao regulamento\". Esse é o caminho mais seguro em qualquer dúvida sobre crase decorrente de regência verbal.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando a regência dos verbos de movimento na norma-padrão, a construção que NÃO é aceita em provas formais é:",
    opcoes: [
      "Cheguei a São Paulo pela manhã.",
      "Cheguei em São Paulo pela manhã.",
      "Cheguei à capital paulista pela manhã.",
      "Fui a São Paulo em viagem de trabalho.",
      "Compareci à reunião marcada para hoje.",
    ],
    correta: 1,
    explicacao:
      "\"Chegar\" exige a preposição \"a\", e não \"em\", ainda que a construção com \"em\" seja majoritária na fala brasileira. As demais alternativas seguem a regência prevista pela norma-padrão, inclusive com crase quando o destino é feminino e determinado.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Quando a preposição \"a\" se funde com o pronome demonstrativo \"aquilo\", a norma-padrão exige o acento indicativo de crase. Está corretamente escrita a frase:",
    opcoes: [
      "Prefiro isto aquilo que me ofereceram ontem.",
      "Prefiro isto a aquilo que me ofereceram ontem.",
      "Prefiro isto á aquilo que me ofereceram ontem.",
      "Prefiro isto em aquilo que me ofereceram ontem.",
      "Prefiro isto àquilo que me ofereceram ontem.",
    ],
    correta: 4,
    explicacao:
      "O verbo \"preferir\" exige a preposição \"a\", que se funde com \"aquilo\" e recebe o acento grave. A mesma fusão ocorre com \"aquele\", \"aquela\" e suas formas de plural. Escrever as duas palavras separadas é considerado erro na norma-padrão.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando que alguns países e regiões exigem artigo e outros não, está corretamente escrita a frase:",
    opcoes: [
      "Viajarei à Portugal no próximo verão europeu.",
      "Viajarei à França no próximo verão europeu.",
      "Viajarei à Cuba no próximo verão caribenho.",
      "Viajarei à Israel no próximo verão.",
      "Viajarei à Angola no próximo verão africano.",
    ],
    correta: 1,
    explicacao:
      "Dizemos \"venho da França\", o que revela a presença do artigo e, portanto, a crase em \"à França\". Já Portugal, Cuba, Israel e Angola dispensam artigo — \"venho de Portugal\" —, logo não admitem crase. O teste com o verbo \"vir\" resolve todos esses casos.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Empregando o verbo \"aspirar\" no sentido de sorver ou inalar, conforme a norma-padrão, está correta a frase:",
    opcoes: [
      "Aspirou o ar puro da manhã na varanda.",
      "Aspirou ao ar puro da manhã na varanda.",
      "Aspirou do ar puro da manhã na varanda.",
      "Aspirou com o ar puro da manhã na varanda.",
      "Aspirou no ar puro da manhã na varanda.",
    ],
    correta: 0,
    explicacao:
      "No sentido concreto de inalar, \"aspirar\" é transitivo direto e dispensa preposição. Com a preposição \"a\", passa ao sentido de almejar: \"aspirava ao cargo\". Verbos como esse, de dupla regência, costumam separar o sentido concreto do figurado exatamente por essa marca.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "O pronome oblíquo \"lhe\" substitui um termo que exerce função sintática determinada na oração. Esse pronome equivale a:",
    opcoes: [
      "um objeto direto, sem preposição.",
      "um sujeito da oração principal.",
      "um objeto indireto, com a preposição a ou para.",
      "um adjunto adverbial de tempo.",
      "um predicativo do sujeito.",
    ],
    correta: 2,
    explicacao:
      "\"Lhe\" corresponde a \"a ele\" ou \"para ele\", isto é, a um objeto indireto. Por isso não se usa \"lhe\" com verbos transitivos diretos: escreve-se \"eu o vi\", e não \"eu lhe vi\". Reconhecer a regência do verbo é o que evita esse erro muito frequente.",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "dificil",
    enunciado:
      "Diante da palavra \"terra\", o emprego da crase depende do sentido em que ela é usada. Está corretamente escrita a frase:",
    opcoes: [
      "Os marinheiros chegaram à terra depois de meses no mar.",
      "A sonda retornou a Terra após a missão orbital.",
      "Os marinheiros voltaram na terra firme ontem.",
      "Os marinheiros chegaram a terra depois de meses no mar.",
      "A sonda retornou em a Terra após a missão.",
    ],
    correta: 3,
    explicacao:
      "No sentido de terra firme, oposto a bordo, a palavra não admite artigo e a crase é proibida: \"chegaram a terra\". Quando se refere ao planeta ou vem determinada, o artigo aparece e a crase é obrigatória: \"retornou à Terra\", \"voltou à terra natal\".",
  },
  {
    materia: "portugues",
    tema: "Regência e crase",
    dificuldade: "media",
    enunciado:
      "Considerando a regência do verbo \"esquecer\" e as regras de crase, está corretamente escrita, segundo a norma-padrão, a frase:",
    opcoes: [
      "Esqueceu-se a data da reunião marcada para hoje.",
      "Esqueceu à data da reunião marcada para hoje.",
      "Esqueceu-se da data da reunião marcada para hoje.",
      "Esqueceu de a data da reunião marcada para hoje.",
      "Esqueceu-se à data da reunião marcada para hoje.",
    ],
    correta: 2,
    explicacao:
      "Com o pronome, \"esquecer\" torna-se transitivo indireto e exige a preposição \"de\": esqueceu-se da data. Não há crase, porque a preposição exigida é \"de\", e não \"a\". A forma sem pronome também é correta, mas então o complemento vem direto: \"esqueceu a data\".",
  },
];
