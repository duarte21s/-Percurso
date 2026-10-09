/* Concordância verbal (50 questões) — portugues-banca.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 0 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/portugues-banca__concordancia-verbal.mjs);
   50 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/portugues-banca__concordancia-verbal.json. */

export const questoes = [
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Ontem, os alunos da turma B ___ a prova com atenção”?",
    opcoes: [
      "fizeram",
      "fez",
      "fizemos",
      "fizeste",
      "faz",
    ],
    correta: 0,
    explicacao:
      "O sujeito é “os alunos da turma B”, e seu núcleo é alunos, no plural. O verbo concorda com o núcleo, e por isso fica na terceira pessoa do plural: fizeram. O adjunto “da turma B”, no singular, não interfere na concordância, e o advérbio ontem indica passado.\n\nFez concorda com turma, que não é o núcleo do sujeito. Fizemos exigiria o sujeito nós, e fizeste exigiria tu. E faz está no presente e no singular, o que contraria o plural de alunos e o passado marcado por ontem.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Ontem, o professor e a diretora ___ à reunião de pais”?",
    opcoes: [
      "foram",
      "foi",
      "fomos",
      "foste",
      "fora",
    ],
    correta: 0,
    explicacao:
      "O sujeito é composto, com dois núcleos ligados por e: o professor e a diretora. Quando o sujeito composto vem antes do verbo, o verbo vai para o plural. Como se trata de terceira pessoa, a forma é foram, do pretérito perfeito de ir.\n\nFoi e fora concordam com apenas um núcleo, no singular. Fomos exigiria o sujeito nós, e foste exigiria tu. O advérbio ontem mostra que o tempo é o passado, e todas as formas oferecidas estão nesse campo, de modo que o que as separa é a pessoa e o número.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Na escola ___ muitos alunos novos neste ano”?",
    opcoes: [
      "há",
      "hão",
      "têm",
      "tem",
      "existe",
    ],
    correta: 0,
    explicacao:
      "O verbo haver, no sentido de existir, é impessoal: não tem sujeito e fica sempre na terceira pessoa do singular. Por isso se diz há muitos alunos novos, e não hão. O termo muitos alunos novos funciona como objeto direto, e não como sujeito, e por isso não determina a flexão.\n\nHão é o erro de concordar o verbo com o plural do objeto. Têm e tem trocam haver por ter, que na norma-padrão não tem o sentido de existir. E existe exigiria o plural, pois existir é pessoal e concorda com muitos alunos novos: existem.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “___ dois anos que não viajamos juntos”?",
    opcoes: [
      "Faz",
      "Fazem",
      "Fazemos",
      "Fizemos",
      "Fazeis",
    ],
    correta: 0,
    explicacao:
      "O verbo fazer, quando indica tempo decorrido, é impessoal: não tem sujeito e fica na terceira pessoa do singular. Por isso se diz faz dois anos, ainda que dois anos esteja no plural. O termo dois anos é um adjunto adverbial de tempo, e não o sujeito do verbo.\n\nFazem seria a concordância com dois anos, que é o erro mais comum. Fazemos exigiria o sujeito nós, fizemos indicaria que nós realizamos algo, e fazeis exigiria o sujeito vós. A frase poderia também começar com há, que tem o mesmo valor: há dois anos que não viajamos juntos.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Em qual das frases a concordância verbal está de acordo com a norma-padrão?",
    opcoes: [
      "A turma inteira aplaudiu o professor.",
      "A turma inteira aplaudimos o professor.",
      "A turma inteira aplaudistes o professor.",
      "A turma inteira aplaudem o professor.",
      "A turma inteira aplaudíamos o professor.",
    ],
    correta: 0,
    explicacao:
      "O núcleo do sujeito é turma, substantivo coletivo no singular, e o verbo concorda com ele na terceira pessoa do singular: aplaudiu. O coletivo designa um conjunto de pessoas, mas gramaticalmente é um só termo, no singular, e o adjetivo inteira reforça o singular.\n\nAplaudimos exigiria o sujeito nós, aplaudistes exigiria vós, e aplaudíamos novamente nós. Aplaudem estaria no plural, e o núcleo turma está no singular. O fato de a turma ser formada por muitas pessoas não muda a concordância com o coletivo.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Mais de um candidato ___ a vaga na empresa”?",
    opcoes: [
      "disputou",
      "disputaram",
      "disputamos",
      "disputaste",
      "disputei",
    ],
    correta: 0,
    explicacao:
      "Com a expressão mais de um, o verbo fica no singular, porque o núcleo do sujeito é candidato, e a ideia de um indica singular. Por isso se diz mais de um candidato disputou. Somente em casos especiais, como a ideia recíproca ou a repetição da expressão, o verbo pode ir ao plural, e não é o caso aqui.\n\nDisputaram é o erro de levar o verbo ao plural por causa do mais. Disputamos exigiria nós, disputaste exigiria tu, e disputei exigiria eu. Nenhuma dessas pessoas aparece no sujeito da frase.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o sujeito posposto?",
    opcoes: [
      "Chegaram os convidados para a festa.",
      "Chegou os convidados para a festa.",
      "Chegamos os convidados para a festa.",
      "Chegastes os convidados para a festa.",
      "Chegasse os convidados para a festa.",
    ],
    correta: 0,
    explicacao:
      "Nas frases em que o sujeito vem depois do verbo, a concordância continua a ser feita com ele. O sujeito é os convidados, de núcleo plural, e o verbo vai para o plural: chegaram. O erro mais comum é tratar o termo posposto como objeto e deixar o verbo no singular.\n\nChegou não concorda com os convidados. Chegamos exigiria nós, chegastes exigiria vós, e chegasse está no subjuntivo e no singular, o que não cabe na frase. Para achar o sujeito, basta perguntar quem chegou: os convidados.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “___ casas usadas nesta imobiliária”?",
    opcoes: [
      "Vendem-se",
      "Vende-se",
      "Vendemos-se",
      "Vendes-se",
      "Vendeis-se",
    ],
    correta: 0,
    explicacao:
      "Em vendem-se casas usadas, o pronome se tem valor apassivador, e casas usadas é o sujeito da oração, em voz passiva sintética. O verbo concorda com esse sujeito, que está no plural: vendem-se. A frase equivale a “casas usadas são vendidas nesta imobiliária”.\n\nVende-se deixaria o verbo no singular e ignoraria o plural de casas, que é o erro mais comum. Vendemos-se, vendes-se e vendeis-se não existem na norma-padrão com esse emprego, pois o se apassivador só se une à terceira pessoa.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Em qual das frases a concordância com o pronome se, índice de indeterminação do sujeito, está correta?",
    opcoes: [
      "Precisa-se de funcionários para o turno da noite.",
      "Precisam-se de funcionários para o turno da noite.",
      "Precisamos-se de funcionários para o turno da noite.",
      "Precisavam-se de funcionários para o turno da noite.",
      "Precisaram-se de funcionários para o turno da noite.",
    ],
    correta: 0,
    explicacao:
      "Precisar, nesse sentido, pede a preposição de, e por isso o termo “de funcionários” é objeto indireto, e não sujeito. O se, nesse caso, indetermina o sujeito, e o verbo fica sempre na terceira pessoa do singular: precisa-se. O plural do termo seguinte não interfere.\n\nPrecisam-se, precisavam-se e precisaram-se tratam funcionários como sujeito, o que não é possível, pois a preposição de o impede. E precisamos-se não existe com o se. O mesmo ocorre com necessita-se de, trata-se de e vive-se em.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “O resultado das provas ___ os alunos”?",
    opcoes: [
      "surpreendeu",
      "surpreenderam",
      "surpreendemos",
      "surpreendestes",
      "surpreendi",
    ],
    correta: 0,
    explicacao:
      "O sujeito é “o resultado das provas”, e seu núcleo é resultado, no singular. O verbo concorda com o núcleo, e por isso fica na terceira pessoa do singular: surpreendeu. O termo “das provas” é um adjunto adnominal e, mesmo no plural, não determina a flexão.\n\nSurpreenderam concorda com provas, que não é o núcleo. Surpreendemos exigiria o sujeito nós, surpreendestes exigiria vós, e surpreendi exigiria eu. Um bom caminho é cortar o adjunto: o resultado surpreendeu os alunos.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Ontem, eu e meus colegas ___ o trabalho na biblioteca”?",
    opcoes: [
      "fizeram",
      "fizemos",
      "fiz",
      "fizeste",
      "fez",
    ],
    correta: 1,
    explicacao:
      "O sujeito é composto e reúne a primeira pessoa (eu) com a terceira (meus colegas). Quando há a primeira pessoa no sujeito composto, o verbo vai para a primeira pessoa do plural: nós. Por isso a forma é fizemos.\n\nFizeram seria a concordância com a terceira pessoa, que é a mais fraca da hierarquia. Fiz concordaria só com eu, fizeste só com tu, e fez só com um sujeito de terceira pessoa do singular. A regra é que a primeira pessoa prevalece sobre a segunda e sobre a terceira.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "facil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Quem estuda com disciplina ___ bons resultados”?",
    opcoes: [
      "colhem",
      "colhe",
      "colhemos",
      "colheis",
      "colho",
    ],
    correta: 1,
    explicacao:
      "O pronome quem, usado como sujeito, leva o verbo à terceira pessoa do singular, ainda que se refira a muitas pessoas. Por isso se diz quem estuda colhe bons resultados. O verbo da oração anterior, estuda, já está no singular, e o seguinte deve acompanhá-lo.\n\nColhem passaria o verbo ao plural sem motivo. Colhemos exigiria o sujeito nós, colheis exigiria vós, e colho exigiria eu. O pronome quem não tem plural, e por isso o verbo de que ele é sujeito fica no singular.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o pronome pessoal e com o relativo que?",
    opcoes: [
      "Fui eu que fez o relatório da reunião.",
      "Fui eu que fiz o relatório da reunião.",
      "Foi eu que fiz o relatório da reunião.",
      "Foi eu que fez o relatório da reunião.",
      "Fomos eu que fiz o relatório da reunião.",
    ],
    correta: 1,
    explicacao:
      "Há duas concordâncias na frase. O verbo ser, em fui, concorda com o pronome pessoal eu, que é o sujeito ou o predicativo: fui eu. O verbo da oração relativa, fiz, concorda com o antecedente do que, que é eu: eu fiz. Os dois ficam, portanto, na primeira pessoa do singular.\n\nFui eu que fez deixa o segundo verbo na terceira pessoa. Foi eu que fiz e foi eu que fez erram no primeiro verbo, que deve concordar com eu. E fomos eu põe o verbo no plural sem que haja sujeito plural.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases a locução verbal com o verbo haver está de acordo com a norma-padrão?",
    opcoes: [
      "Vão haver eleições no próximo mês.",
      "Vai haver eleições no próximo mês.",
      "Vai haverem eleições no próximo mês.",
      "Vão haverem eleições no próximo mês.",
      "Vamos haver eleições no próximo mês.",
    ],
    correta: 1,
    explicacao:
      "Haver, no sentido de existir ou ocorrer, é impessoal, e o auxiliar de uma locução verbal acompanha essa impessoalidade: vai haver. O termo eleições é objeto direto do verbo haver, e não sujeito, e por isso não pede o plural do auxiliar nem do infinitivo.\n\nVão haver passa o auxiliar para o plural, como se eleições fosse o sujeito. Vai haverem e vão haverem flexionam o infinitivo, o que a norma-padrão não admite nesse caso. E vamos haver exigiria o sujeito nós, que não existe na frase.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Qual forma verbal completa corretamente a frase “___ haver soluções mais baratas para o problema”?",
    opcoes: [
      "Devem",
      "Deve",
      "Devemos",
      "Deveis",
      "Deveriam",
    ],
    correta: 1,
    explicacao:
      "O verbo haver, no sentido de existir, é impessoal, e o verbo dever, auxiliar na locução, acompanha essa impessoalidade: fica na terceira pessoa do singular. Por isso se diz deve haver soluções, e não devem. O termo soluções mais baratas é objeto direto de haver, e não sujeito.\n\nDevem e deveriam concordariam com soluções, como se esse termo fosse sujeito. Devemos exigiria nós, e deveis exigiria vós. Com existir, verbo pessoal, a frase mudaria: devem existir soluções mais baratas.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Qual forma verbal completa corretamente a frase “___ fazer dez anos que não o vejo”?",
    opcoes: [
      "Devem",
      "Deve",
      "Devemos",
      "Devo",
      "Deveis",
    ],
    correta: 1,
    explicacao:
      "Fazer, quando indica tempo decorrido, é impessoal, e o verbo auxiliar acompanha: fica no singular. Por isso se diz deve fazer dez anos, e não devem. O termo dez anos é adjunto adverbial de tempo, e não sujeito.\n\nDevem concordaria com anos, como se dez anos fosse sujeito, o que é o erro mais comum. Devemos exigiria nós, devo exigiria eu, e deveis exigiria vós. A frase mantém a mesma lógica de faz dez anos, em que o verbo também fica no singular.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Já ___ duas horas da tarde, e a reunião não começou”?",
    opcoes: [
      "é",
      "são",
      "somos",
      "sois",
      "foram",
    ],
    correta: 1,
    explicacao:
      "Quando o verbo ser indica horas, concorda com o numeral que expressa as horas: são duas horas, é uma hora, são três e meia. Como duas está no plural, o verbo vai para o plural. O sujeito é o numeral com a palavra horas, e a expressão da tarde apenas completa a indicação.\n\nÉ concordaria com uma hora, e não com duas. Somos e sois exigiriam sujeito de primeira ou segunda pessoa, que não aparece, e foram trocaria o presente por um passado que não combina com já. O verbo ser acompanha o numeral, e não a palavra tarde.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases a forma do verbo vir concorda corretamente com o sujeito?",
    opcoes: [
      "Os candidatos vem de cidades diferentes.",
      "Os candidatos vêm de cidades diferentes.",
      "O candidato vêm de uma cidade distante.",
      "Os candidatos veem de cidades diferentes.",
      "O candidato vimos de uma cidade distante.",
    ],
    correta: 1,
    explicacao:
      "O verbo vir, na terceira pessoa do plural do presente, escreve-se vêm, com acento circunflexo, e, no singular, vem, sem acento. Como o sujeito é os candidatos, de núcleo plural, a forma correta é vêm. O mesmo vale para ter: ele tem, eles têm.\n\nVem, com sujeito plural, usa a forma do singular. Vêm, com o candidato, passa o singular para o plural. Veem é forma do verbo ver, que tem outro sentido e não combina com de cidades. E vimos exigiria o sujeito nós, e não concorda com o candidato.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Os Estados Unidos ___ grandes importadores de petróleo”?",
    opcoes: [
      "é",
      "são",
      "sou",
      "somos",
      "sois",
    ],
    correta: 1,
    explicacao:
      "Quando o nome próprio está no plural e vem precedido de artigo, o verbo concorda com ele no plural, como em os Estados Unidos são. O artigo plural os indica que o nome deve ser tratado como plural, e o predicativo grandes importadores confirma o plural.\n\nÉ deixaria o verbo no singular, o que não combina com o artigo plural nem com o predicativo. Sou e somos exigiriam sujeito de primeira pessoa, e sois exigiria vós. A mesma regra vale para os Andes, os Alpes e as Filipinas: os Andes são, as Filipinas são.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases a concordância com a expressão que antecede o numeral está correta?",
    opcoes: [
      "Cerca de duzentas pessoas assistiu ao show.",
      "Cerca de duzentas pessoas assistiram ao show.",
      "Mais de duzentas pessoas assistiu ao show.",
      "Menos de duzentas pessoas assistiu ao show.",
      "Cerca de duzentas pessoas assistimos ao show.",
    ],
    correta: 1,
    explicacao:
      "Com expressões como cerca de, mais de e menos de seguidas de numeral maior que um, o verbo concorda com o numeral e vai para o plural: cerca de duzentas pessoas assistiram. O núcleo é pessoas, e a expressão apenas indica aproximação.\n\nAs frases com assistiu deixam o verbo no singular, o que só seria correto com mais de um. E assistimos exigiria o sujeito nós. A regra de mais de um, singular, vale apenas quando o numeral é um.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o pronome indefinido cada um?",
    opcoes: [
      "Cada um dos funcionários receberam um crachá novo.",
      "Cada um dos funcionários recebemos um crachá novo.",
      "Cada um dos funcionários recebeu um crachá novo.",
      "Cada um dos funcionários recebestes um crachá novo.",
      "Cada um dos funcionários recebi um crachá novo.",
    ],
    correta: 2,
    explicacao:
      "O núcleo do sujeito é o pronome indefinido cada um, singular, e o termo “dos funcionários” indica apenas o conjunto de onde se tira cada um. Por isso o verbo fica no singular: recebeu. O plural de funcionários não determina a flexão.\n\nReceberam leva o verbo ao plural por causa do termo final, o que é um erro de atração. Recebemos exigiria o sujeito nós, recebestes exigiria vós, e recebi exigiria eu. A mesma regra vale para nenhum dos candidatos e para algum de vocês: o verbo fica no singular.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Em Manaus, ___ mais de trinta graus quase todos os dias do ano”?",
    opcoes: [
      "fazem",
      "fazemos",
      "faz",
      "fazeis",
      "fizeram",
    ],
    correta: 2,
    explicacao:
      "Quando fazer indica fenômeno da natureza ou condição do tempo, como a temperatura, é impessoal e fica na terceira pessoa do singular: faz mais de trinta graus. Não há sujeito, e o termo mais de trinta graus é um complemento, e não um sujeito.\n\nFazem seria a concordância com graus, que não é sujeito. Fazemos e fazeis exigiriam sujeito de primeira e segunda pessoas do plural. E fizeram colocaria o verbo no passado e no plural, o que contraria o presente de quase todos os dias.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o sujeito composto ligado por ou, de sentido excludente?",
    opcoes: [
      "O diretor ou o vice-diretor assinarão o documento, mas não os dois.",
      "O diretor ou o vice-diretor assinamos o documento, mas não os dois.",
      "O diretor ou o vice-diretor assinará o documento, mas não os dois.",
      "O diretor ou o vice-diretor assinastes o documento, mas não os dois.",
      "O diretor ou o vice-diretor assinam o documento, mas não os dois.",
    ],
    correta: 2,
    explicacao:
      "Quando o ou indica exclusão, isto é, apenas um dos termos pratica a ação, o verbo fica no singular: o diretor ou o vice-diretor assinará. O trecho “mas não os dois” confirma a exclusão. Quando o ou indica soma ou equivalência, o plural é admitido.\n\nAssinarão e assinam levam o verbo ao plural, o que contradiz a exclusão marcada na frase. Assinamos exigiria o sujeito nós, e assinastes exigiria vós.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo ser concorda corretamente com o pronome pessoal que funciona como predicativo?",
    opcoes: [
      "O responsável por tudo é eu.",
      "O responsável por tudo somos eu.",
      "O responsável por tudo sou eu.",
      "O responsável por tudo foste eu.",
      "O responsável por tudo sois eu.",
    ],
    correta: 2,
    explicacao:
      "Quando um dos termos ligados pelo verbo ser é um pronome pessoal, o verbo concorda com ele, qualquer que seja a posição na frase: o responsável sou eu, assim como eu sou o responsável. O pronome eu, de primeira pessoa do singular, determina a forma sou.\n\nÉ concorda com o responsável e ignora o pronome. Somos exigiria nós, foste exigiria tu, e sois exigiria vós. Em nenhuma dessas frases o pronome combina com o verbo.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o termo que resume a enumeração?",
    opcoes: [
      "Livros, revistas, jornais, tudo foram vendidos na liquidação.",
      "Livros, revistas, jornais, tudo fomos vendidos na liquidação.",
      "Livros, revistas, jornais, tudo foi vendido na liquidação.",
      "Livros, revistas, jornais, tudo foste vendido na liquidação.",
      "Livros, revistas, jornais, tudo fostes vendidos na liquidação.",
    ],
    correta: 2,
    explicacao:
      "Quando uma enumeração é resumida por um pronome como tudo, nada ou ninguém, esse pronome é o sujeito, e o verbo concorda com ele, no singular: tudo foi vendido. A enumeração anterior funciona como aposto, e não como sujeito.\n\nTudo foram vendidos leva o verbo ao plural, concordando com os termos da enumeração. Tudo fomos, foste e fostes seriam concordâncias com pessoas que não aparecem na frase. Sem o pronome, a frase com plural seria correta: livros, revistas e jornais foram vendidos.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o sujeito composto correlativo?",
    opcoes: [
      "Tanto o prefeito quanto o governador compareceu à cerimônia.",
      "Tanto o prefeito quanto o governador comparecemos à cerimônia.",
      "Tanto o prefeito quanto o governador compareceram à cerimônia.",
      "Tanto o prefeito quanto o governador comparecestes à cerimônia.",
      "Tanto o prefeito quanto o governador compareci à cerimônia.",
    ],
    correta: 2,
    explicacao:
      "A estrutura tanto... quanto soma os dois núcleos, o prefeito e o governador, e funciona como sujeito composto. Quando o sujeito composto vem antes do verbo, o verbo vai para o plural: compareceram. O mesmo ocorre com “não só... mas também”.\n\nCompareceu concorda com apenas um dos núcleos. Comparecemos exigiria nós, comparecestes exigiria vós, e compareci exigiria eu. Nenhuma dessas pessoas está no sujeito da frase.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo faltar concorda corretamente com o sujeito posposto?",
    opcoes: [
      "Falta duas semanas para a data da prova.",
      "Faltamos duas semanas para a data da prova.",
      "Faltam duas semanas para a data da prova.",
      "Faltastes duas semanas para a data da prova.",
      "Faltei duas semanas para a data da prova.",
    ],
    correta: 2,
    explicacao:
      "O sujeito de faltam é duas semanas, que vem depois do verbo: o que falta? Duas semanas. Por ser plural, o verbo vai para o plural: faltam duas semanas. A construção é parecida com sobram, restam e bastam, que também concordam com o termo posposto.\n\nFalta deixa o verbo no singular, tratando duas semanas como complemento, o que é um erro comum na fala. Faltamos, faltastes e faltei exigiriam sujeito de primeira ou segunda pessoa, que não aparece. A frase não é impessoal, porque faltar tem sujeito.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases a concordância do verbo ser com a palavra dia está de acordo com a norma-padrão?",
    opcoes: [
      "Hoje são dia 15 de março, data da entrega do trabalho.",
      "Hoje somos dia 15 de março, data da entrega do trabalho.",
      "Hoje é dia 15 de março, data da entrega do trabalho.",
      "Hoje sois dia 15 de março, data da entrega do trabalho.",
      "Hoje sou dia 15 de março, data da entrega do trabalho.",
    ],
    correta: 2,
    explicacao:
      "Quando o verbo ser indica data e a palavra dia está expressa, o verbo concorda com ela, no singular: hoje é dia 15 de março. O sujeito é a palavra dia, que está no singular, e o numeral 15 apenas especifica qual é o dia. Sem a palavra dia, o verbo pode concordar com o numeral, como em hoje são 15 de março.\n\nHoje são dia 15 leva o verbo ao plural, sem que a palavra dia esteja no plural. Somos, sois e sou exigiriam sujeitos de pessoas que não aparecem. A presença de dia é que decide a concordância.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o pronome de tratamento?",
    opcoes: [
      "Vossa Excelência estais convidada para a cerimônia de posse.",
      "Vossa Excelência estás convidada para a cerimônia de posse.",
      "Vossa Excelência está convidada para a cerimônia de posse.",
      "Vossa Excelência estamos convidada para a cerimônia de posse.",
      "Vossa Excelência estou convidada para a cerimônia de posse.",
    ],
    correta: 2,
    explicacao:
      "Os pronomes de tratamento, como Vossa Excelência, Vossa Senhoria e Vossa Magnificência, designam a pessoa com quem se fala, mas gramaticalmente pertencem à terceira pessoa, e por isso o verbo fica na terceira: Vossa Excelência está. O adjetivo convidada concorda com o gênero da pessoa tratada.\n\nEstais seria a segunda pessoa do plural, estás a do singular, estamos a primeira do plural, e estou a primeira do singular. Nenhuma dessas formas concorda com um pronome de tratamento, que pede a terceira pessoa.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases um verbo de fenômeno da natureza, usado em sentido figurado, concorda corretamente com o sujeito?",
    opcoes: [
      "Choveu críticas ao projeto durante toda a semana.",
      "Chovia críticas ao projeto durante toda a semana.",
      "Choveram críticas ao projeto durante toda a semana.",
      "Chovemos críticas ao projeto durante toda a semana.",
      "Choverá críticas ao projeto durante toda a semana.",
    ],
    correta: 2,
    explicacao:
      "Os verbos que indicam fenômenos da natureza, como chover, são impessoais e ficam no singular quando usados no sentido próprio: choveu muito ontem. Mas, em sentido figurado, passam a ter sujeito e concordam com ele: choveram críticas, em que críticas é o sujeito, no plural.\n\nChoveu, chovia e choverá deixam o verbo no singular, tratando-o como impessoal, o que só vale para o sentido próprio. Chovemos exigiria o sujeito nós. Para decidir, pergunta-se se há um termo que realiza a ação: críticas choveram, e portanto há sujeito.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases cada verbo concorda corretamente, o existir com seu sujeito e o haver com a impessoalidade?",
    opcoes: [
      "Existe poucas vagas, mas há tempo para se inscrever.",
      "Existem poucas vagas, mas hão tempo para se inscrever.",
      "Existe poucas vagas, mas hão tempo para se inscrever.",
      "Existem poucas vagas, mas há tempo para se inscrever.",
      "Existem poucas vagas, mas havemos tempo para se inscrever.",
    ],
    correta: 3,
    explicacao:
      "Existir é verbo pessoal: tem sujeito e concorda com ele. Em existem poucas vagas, o sujeito é poucas vagas, no plural. Haver, no sentido de existir, é impessoal e fica no singular: há tempo. A frase reúne os dois verbos, e cada um segue a sua regra.\n\nExiste poucas vagas ignora o plural do sujeito de existir. Hão tempo e havemos tempo flexionam o impessoal haver como se tempo fosse sujeito ou como se houvesse sujeito de primeira pessoa. Para testar, troque haver por existir: existe tempo, no singular, porque o sujeito, tempo, é singular.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o núcleo do sujeito, mesmo havendo termos plurais por perto?",
    opcoes: [
      "A lista de convidados, com muitos nomes ilustres, foram publicados ontem.",
      "A lista de convidados, com muitos nomes ilustres, foram publicada ontem.",
      "A lista de convidados, com muitos nomes ilustres, foi publicados ontem.",
      "A lista de convidados, com muitos nomes ilustres, foi publicada ontem.",
      "A lista de convidados, com muitos nomes ilustres, fomos publicada ontem.",
    ],
    correta: 3,
    explicacao:
      "O sujeito é “a lista de convidados”, e seu núcleo é lista, no singular. Os termos convidados e nomes ilustres, no plural, são adjuntos e não determinam a flexão. Por isso o verbo ser e o particípio concordam com lista: foi publicada.\n\nForam publicados concorda com nomes, que está separado do núcleo por uma vírgula e por um adjunto. Foram publicada e foi publicados misturam singular e plural. E fomos publicada exigiria o sujeito nós. Um bom recurso é riscar os adjuntos e ler apenas o núcleo com o verbo.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com a expressão a gente?",
    opcoes: [
      "A gente chegamos cedo e esperamos a abertura das portas.",
      "A gente chegaram cedo e esperaram a abertura das portas.",
      "A gente chegastes cedo e esperastes a abertura das portas.",
      "A gente chegou cedo e esperou a abertura das portas.",
      "A gente cheguei cedo e esperei a abertura das portas.",
    ],
    correta: 3,
    explicacao:
      "A gente é uma expressão que, na norma-padrão, funciona como sujeito de terceira pessoa do singular, ainda que designe um grupo ou o falante e seus companheiros. Por isso o verbo fica no singular: a gente chegou e esperou. A forma nós admitiria chegamos e esperamos.\n\nChegamos e esperamos misturam a expressão a gente com a primeira pessoa do plural. Chegaram e esperaram usam o plural da terceira pessoa, sem justificativa. Chegastes e esperastes são da segunda pessoa do plural, e cheguei e esperei, da primeira do singular. Todas contrariam o singular de a gente.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Por que o verbo fica no singular em “Houve problemas na reunião”?",
    opcoes: [
      "Porque problemas é o sujeito e está no singular",
      "Porque o verbo haver nunca admite plural",
      "Porque reunião está no singular",
      "Haver, no sentido de existir, é impessoal e não tem sujeito",
      "Porque o verbo está no pretérito",
    ],
    correta: 3,
    explicacao:
      "Haver, no sentido de existir ou ocorrer, é verbo impessoal: não tem sujeito, e por isso não há com que concordar. O verbo fica na terceira pessoa do singular, e o termo seguinte, problemas, é objeto direto. Daí houve problemas, e não houveram problemas.\n\nProblemas não é o sujeito, e está no plural. Haver admite plural em outros sentidos, como o de auxiliar (os alunos haviam saído) ou o de haver de (hão de vencer). A palavra reunião é adjunto adverbial, e o tempo passado não explica o singular: o mesmo vale no presente, em há problemas.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Qual é a função do pronome se em “Vendem-se casas” e por que o verbo vai para o plural?",
    opcoes: [
      "Índice de indeterminação; o verbo fica sempre no singular",
      "Pronome reflexivo; o verbo concorda com o próprio se",
      "Conjunção; o verbo concorda com a oração anterior",
      "Partícula apassivadora; o verbo concorda com o sujeito casas",
      "Palavra expletiva; o verbo não concorda com nada",
    ],
    correta: 3,
    explicacao:
      "Em vendem-se casas, o se é partícula apassivadora, e o verbo é transitivo direto: a frase equivale a “casas são vendidas”. Casas passa a ser o sujeito, e o verbo concorda com ele, no plural. Por isso se diz vendem-se, e não vende-se.\n\nO índice de indeterminação aparece com verbos intransitivos, transitivos indiretos ou de ligação, como em precisa-se de funcionários, e nesse caso o verbo fica no singular. O se, nessa frase, não é reflexivo, pois as casas não vendem a si mesmas, não é conjunção e não é palavra expletiva.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Por que a frase “Fazem dois anos que moramos aqui” contraria a norma-padrão?",
    opcoes: [
      "Porque o verbo morar exige o plural",
      "Porque dois anos é o sujeito e está no singular",
      "Porque falta a preposição antes de dois anos",
      "Fazer, indicando tempo decorrido, é impessoal e fica no singular",
      "Porque o verbo fazer não admite o presente",
    ],
    correta: 3,
    explicacao:
      "Fazer, quando indica tempo decorrido, é impessoal: não tem sujeito e fica na terceira pessoa do singular. A frase correta é faz dois anos que moramos aqui. O termo dois anos é adjunto adverbial de tempo e não determina a flexão do verbo, ainda que esteja no plural.\n\nO verbo morar concorda com nós, na oração seguinte, e não interfere. Dois anos não é sujeito, e não está no singular. A preposição não falta: a expressão faz dois anos não a exige. E fazer admite o presente, como em faz, tanto que a frase correta o usa.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em “Chegaram atrasados os convidados da noiva”, qual termo determina a flexão do verbo?",
    opcoes: [
      "Atrasados, que concorda com o verbo",
      "Noiva, por ser o último termo da frase",
      "Chegaram, que é o núcleo do sujeito",
      "Os convidados da noiva, sujeito posposto ao verbo",
      "O verbo não depende de nenhum termo",
    ],
    correta: 3,
    explicacao:
      "O sujeito é “os convidados da noiva”, e seu núcleo é convidados, no plural. Mesmo vindo depois do verbo, é ele que determina a flexão: chegaram. Para achá-lo, pergunta-se quem chegou: os convidados da noiva. O adjunto da noiva, no singular, não interfere.\n\nAtrasados é predicativo do sujeito e concorda com ele, não com o verbo. Noiva é só o núcleo do adjunto adnominal. Chegaram é o verbo, e não o núcleo do sujeito. E dizer que o verbo não depende de nenhum termo é falso, porque ele é sempre flexionado em função do sujeito, salvo nos verbos impessoais.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo da oração relativa concorda corretamente com o pronome pessoal antecedente?",
    opcoes: [
      "Nós, que são veteranos, ajudamos os calouros.",
      "Nós, que somos veteranos, ajudam os calouros.",
      "Nós, que sois veteranos, ajudamos os calouros.",
      "Nós, que somos veteranos, ajudamos os calouros.",
      "Nós, que sou veterano, ajudamos os calouros.",
    ],
    correta: 3,
    explicacao:
      "O pronome relativo que retoma o antecedente nós, e o verbo da oração relativa concorda com esse antecedente: nós somos. O verbo da oração principal também concorda com nós, na primeira pessoa do plural: ajudamos. Os dois verbos ficam, portanto, na primeira pessoa do plural.\n\nSão veteranos põe o verbo da relativa na terceira pessoa. Ajudam põe o verbo principal na terceira. Sois veteranos usa a segunda pessoa do plural, que corresponde a vós. E sou veterano usa a primeira pessoa do singular, que corresponde a eu, e não a nós.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases o verbo ser concorda corretamente com o predicativo no plural?",
    opcoes: [
      "Quem foi os vencedores da gincana?",
      "Quem fomos os vencedores da gincana?",
      "Quem fostes os vencedores da gincana?",
      "Quem foram os vencedores da gincana?",
      "Quem fui os vencedores da gincana?",
    ],
    correta: 3,
    explicacao:
      "Quando o sujeito é o pronome interrogativo quem (ou que, o que) e o predicativo está no plural, o verbo ser concorda com o predicativo: quem foram os vencedores. A inversão é natural em perguntas, e a frase equivale a “os vencedores foram quem?”.\n\nQuem foi os vencedores concorda com quem e ignora o plural. Fomos, fostes e fui exigiriam sujeito nós, vós e eu, que não aparecem. A regra vale também para o que são...: o que são esses ruídos?",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "media",
    enunciado:
      "Em qual das frases há desvio de concordância verbal em relação à norma-padrão?",
    opcoes: [
      "Existem muitas dúvidas sobre o edital.",
      "Cerca de cem candidatos faltaram à prova.",
      "Vendem-se terrenos neste bairro.",
      "Nenhum dos candidatos foram aprovados no concurso.",
      "Hoje é dia de entrega das notas.",
    ],
    correta: 3,
    explicacao:
      "Nenhum é pronome indefinido singular e é o núcleo do sujeito: nenhum dos candidatos. O verbo deve concordar com ele e ficar no singular: foi aprovado. A frase traz foram aprovados, plural, concordando com candidatos, e por isso contraria a norma.\n\nAs demais estão corretas: existem concorda com muitas dúvidas, verbo existir sendo pessoal; cerca de cem pede o plural, com o numeral; vendem-se terrenos é passiva sintética e concorda com terrenos; e é dia de entrega das notas mantém o verbo ser no singular, concordando com dia.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Qual forma verbal completa corretamente a frase “Os candidatos ___ de ser aprovados se estudarem com método”?",
    opcoes: [
      "há",
      "havemos",
      "haveis",
      "houve",
      "hão",
    ],
    correta: 4,
    explicacao:
      "A locução haver de + infinitivo expressa necessidade ou certeza futura e, diferentemente do haver impessoal, conserva a flexão pessoal: o verbo concorda com o sujeito. Aqui o sujeito é os candidatos, no plural, e a forma é hão de ser aprovados.\n\nHá de não concorda com o plural dos candidatos, e é o erro de tratar o verbo como impessoal. Havemos de exigiria nós e haveis de exigiria vós. Houve de não se emprega com esse sentido. Convém distinguir os dois usos: há problemas, impessoal, e os problemas hão de ser resolvidos, pessoal.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases o auxiliar haver concorda corretamente com o sujeito da voz passiva?",
    opcoes: [
      "Havia sido anunciadas as novas regras do concurso.",
      "Haviam sido anunciado as novas regras do concurso.",
      "Havia sido anunciado as novas regras do concurso.",
      "Houve sido anunciadas as novas regras do concurso.",
      "Haviam sido anunciadas as novas regras do concurso.",
    ],
    correta: 4,
    explicacao:
      "Haver, como verbo auxiliar de tempo composto ou de voz passiva, é pessoal e concorda com o sujeito. Em haviam sido anunciadas as novas regras, o sujeito é as novas regras, posposto, e por isso o auxiliar e o particípio vão para o plural feminino: haviam sido anunciadas.\n\nHavia sido anunciadas deixa o auxiliar no singular, como se fosse impessoal, mas a impessoalidade vale só para haver no sentido de existir. Haviam sido anunciado e havia sido anunciado erram também na concordância do particípio com regras. E houve sido não é forma da língua. Em todos, o ponto de partida é identificar o sujeito.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases a locução verbal concorda corretamente com existir, verbo pessoal?",
    opcoes: [
      "Deve existir soluções mais baratas para esse problema.",
      "Devem existirem soluções mais baratas para esse problema.",
      "Deve existirem soluções mais baratas para esse problema.",
      "Devemos existir soluções mais baratas para esse problema.",
      "Devem existir soluções mais baratas para esse problema.",
    ],
    correta: 4,
    explicacao:
      "Existir é verbo pessoal: tem sujeito e concorda com ele. Em locução verbal, o auxiliar dever recebe a flexão: soluções mais baratas é o sujeito de existir, no plural, e por isso devem existir. O infinitivo permanece sem flexão, pois a locução forma um conjunto verbal só.\n\nDeve existir deixa o auxiliar no singular, como se fosse impessoal, mas isso vale para haver, não para existir. Devem existirem e deve existirem flexionam o infinitivo, o que a norma não admite em locução verbal. E devemos exigiria nós. Contraste: deve haver soluções, com haver impessoal.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o núcleo do sujeito, apesar dos termos plurais que o cercam?",
    opcoes: [
      "O custo dos materiais, dos equipamentos e do transporte aumentaram neste ano.",
      "O custo dos materiais, dos equipamentos e do transporte aumentamos neste ano.",
      "O custo dos materiais, dos equipamentos e do transporte aumentastes neste ano.",
      "O custo dos materiais, dos equipamentos e do transporte aumentei neste ano.",
      "O custo dos materiais, dos equipamentos e do transporte aumentou neste ano.",
    ],
    correta: 4,
    explicacao:
      "O sujeito é “o custo dos materiais, dos equipamentos e do transporte”, e seu núcleo é custo, no singular. Os três termos introduzidos por de são adjuntos adnominais, e não formam um sujeito composto, pois estão ligados ao núcleo por preposição, e não entre si como núcleos de mesma função. Por isso o verbo fica no singular: aumentou.\n\nAumentaram concorda com os adjuntos, que não são o núcleo. Aumentamos, aumentastes e aumentei exigiriam nós, vós e eu. Quando se tem uma enumeração de adjuntos, é útil riscá-los: o custo aumentou.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases o verbo concorda corretamente com o sujeito, havendo um termo introduzido por além de?",
    opcoes: [
      "O diretor, além dos professores, ficaram satisfeitos com o resultado.",
      "O diretor, além dos professores, ficamos satisfeitos com o resultado.",
      "O diretor, além dos professores, ficastes satisfeitos com o resultado.",
      "O diretor, além dos professores, fiquei satisfeito com o resultado.",
      "O diretor, além dos professores, ficou satisfeito com o resultado.",
    ],
    correta: 4,
    explicacao:
      "A expressão além de não une termos de mesma função, ela acrescenta uma informação: “além dos professores” é um adjunto adverbial, e não parte do sujeito. O sujeito é só o diretor, no singular, e o verbo e o predicativo ficam no singular: ficou satisfeito.\n\nFicaram satisfeitos soma os dois termos, como se estivessem ligados por e, o que a expressão não faz. Ficamos e ficastes exigem nós e vós, e fiquei exige eu. Quando se quer o plural, usa-se e: o diretor e os professores ficaram satisfeitos.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases o verbo haver, em tempo composto com ter, está de acordo com a norma-padrão?",
    opcoes: [
      "Têm havido muitos acidentes naquela rodovia.",
      "Tem haviam muitos acidentes naquela rodovia.",
      "Temos havido muitos acidentes naquela rodovia.",
      "Tinha havidos muitos acidentes naquela rodovia.",
      "Tem havido muitos acidentes naquela rodovia.",
    ],
    correta: 4,
    explicacao:
      "No tempo composto, o auxiliar ter se junta ao particípio havido. Como haver, no sentido de existir, é impessoal, o auxiliar ter também fica no singular, e o particípio é invariável: tem havido muitos acidentes. Os acidentes são objeto direto, e não sujeito.\n\nTêm havido leva o auxiliar ao plural, concordando com acidentes, como se esse termo fosse sujeito. Tem haviam e temos havido misturam formas, e tinha havidos flexiona o particípio, que nunca varia nos tempos compostos. O contraste é com existir, em que o auxiliar concorda: têm existido acidentes.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases o verbo da oração principal concorda corretamente com a oração subjetiva?",
    opcoes: [
      "Convêm que os alunos cheguem cedo à prova.",
      "Convimos que os alunos cheguem cedo à prova.",
      "Convinde que os alunos cheguem cedo à prova.",
      "Convêm os alunos chegarem cedo à prova.",
      "Convém que os alunos cheguem cedo à prova.",
    ],
    correta: 4,
    explicacao:
      "Quando o sujeito é uma oração, como “que os alunos cheguem cedo à prova”, o verbo da principal fica na terceira pessoa do singular. A oração inteira funciona como um termo singular, e o plural alunos, que pertence à subordinada, não interfere. Por isso: convém que os alunos cheguem.\n\nConvêm leva o verbo da principal ao plural, concordando com alunos, que está em outra oração. Convimos exigiria nós, e convinde é imperativo, o que não combina com a frase. A mesma regra vale para importa, urge, cumpre, parece e é necessário.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases há desvio de concordância verbal, considerando o núcleo do sujeito?",
    opcoes: [
      "Choveu muito durante o feriado prolongado.",
      "Alugam-se apartamentos perto do metrô.",
      "Menos de cinco alunos faltaram à aula.",
      "Eram duas horas quando o trem partiu.",
      "Um dos candidatos aprovados no concurso já tomaram posse.",
    ],
    correta: 4,
    explicacao:
      "Em “um dos candidatos aprovados”, o núcleo do sujeito é um, e o termo dos candidatos aprovados indica o conjunto de onde esse um foi tirado. O verbo concorda com o núcleo e fica no singular: já tomou posse. Tomaram é o erro de concordar com o conjunto plural.\n\nAs outras frases estão corretas. Choveu é impessoal, no sentido próprio. Alugam-se concorda com apartamentos, na voz passiva sintética. Menos de cinco leva o verbo ao plural, com o numeral maior que um. E eram duas horas concorda com o numeral que indica a hora.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Qual afirmação sobre os verbos impessoais e as locuções verbais está de acordo com a norma-padrão?",
    opcoes: [
      "O auxiliar vai ao plural para concordar com o termo plural que vem depois.",
      "O infinitivo da locução deve ser flexionado para concordar com o objeto.",
      "Só haver é impessoal; fazer indicando tempo sempre concorda com o termo seguinte.",
      "Os verbos impessoais não admitem tempos compostos nem locuções.",
      "O auxiliar fica no singular quando o verbo principal da locução é impessoal.",
    ],
    correta: 4,
    explicacao:
      "Os verbos impessoais, como haver no sentido de existir e fazer indicando tempo decorrido, não têm sujeito. Nas locuções, o auxiliar acompanha a impessoalidade e fica no singular: deve haver problemas, vai fazer dez anos, tem havido erros. O termo plural que vem depois é objeto ou adjunto, e não determina a flexão.\n\nLevar o auxiliar ao plural é o erro de tratar esse termo como sujeito. Flexionar o infinitivo também é erro, pois a locução forma um só conjunto verbal. E fazer, indicando tempo decorrido, é impessoal tanto quanto haver. Por fim, os impessoais admitem locuções e tempos compostos, como tem havido e deve fazer.",
  },
  {
    materia: "portugues-banca",
    tema: "Concordância verbal",
    dificuldade: "dificil",
    enunciado:
      "Qual afirmação sobre a voz passiva sintética e o índice de indeterminação do sujeito está correta?",
    opcoes: [
      "Com verbo transitivo indireto, o verbo concorda sempre com o termo plural que vem depois.",
      "Com verbo transitivo direto, o verbo fica no singular, quer o sujeito seja plural quer não.",
      "Nos dois casos, o verbo concorda com o pronome se, que é de terceira pessoa do singular.",
      "A voz passiva sintética só ocorre com verbos intransitivos, e o índice só com transitivos diretos.",
      "Com verbo transitivo direto, o verbo concorda com o sujeito paciente; com verbo transitivo indireto, fica no singular.",
    ],
    correta: 4,
    explicacao:
      "Na voz passiva sintética, o se é apassivador e o verbo é transitivo direto: o termo que vem depois é o sujeito paciente, e o verbo concorda com ele, como em vendem-se casas e aluga-se uma sala. No índice de indeterminação, o verbo é intransitivo ou transitivo indireto, e o verbo fica sempre no singular: precisa-se de funcionários, vive-se bem.\n\nDizer que o verbo transitivo indireto concorda com o termo plural é inverter a regra, e dizer que o transitivo direto fica no singular ignora o sujeito paciente. Concordar com o pronome se também erra, pois o se não é sujeito. E os dois casos não se dividem entre verbos intransitivos e transitivos diretos, como a afirmação sobre intransitivos sugere.",
  },
];
