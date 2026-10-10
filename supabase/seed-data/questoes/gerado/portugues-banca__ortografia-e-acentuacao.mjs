/* Ortografia e acentuação (50 questões) — portugues-banca.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 0 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/portugues-banca__ortografia-e-acentuacao.mjs);
   50 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/portugues-banca__ortografia-e-acentuacao.json. */

export const questoes = [
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo está grafada corretamente quanto ao acento gráfico?",
    opcoes: [
      "alguem",
      "alguêm",
      "álguem",
      "alguém",
      "algüém",
    ],
    correta: 3,
    explicacao:
      "Alguém é oxítona terminada em em, e as oxítonas terminadas em em (e também em a, e, o, seguidas ou não de s) levam acento agudo ou circunflexo: alguém, também, armazém, refém. O acento recai na última sílaba, que é a tônica.\n\nAlguem esquece o acento. Alguêm usa o circunflexo, que não se emprega aí. Álguem desloca o acento para a primeira sílaba, que não é a tônica. E algüém usa o trema, que foi abolido da língua portuguesa pelo Acordo Ortográfico.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo é paroxítona terminada em l e, por isso, leva acento gráfico?",
    opcoes: [
      "papel",
      "jornal",
      "carnaval",
      "automóvel",
      "azul",
    ],
    correta: 3,
    explicacao:
      "Automóvel é paroxítona, com a sílaba tônica na penúltima (au-to-MÓ-vel), e termina em l. As paroxítonas terminadas em l levam acento: automóvel, fácil, útil, nível.\n\nPapel, jornal, carnaval e azul são oxítonas, com a tônica na última sílaba (pa-PEL, jor-NAL, car-na-VAL, a-ZUL), e as oxítonas terminadas em l não levam acento. Convém identificar a sílaba tônica antes de decidir se há acento.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo é proparoxítona e, por isso, leva acento gráfico?",
    opcoes: [
      "médico",
      "caderno",
      "janela",
      "amigo",
      "porteiro",
    ],
    correta: 0,
    explicacao:
      "Proparoxítona é a palavra cuja sílaba tônica é a antepenúltima. Em médico (MÉ-di-co), a tônica é a primeira sílaba, que é a antepenúltima. Todas as proparoxítonas levam acento gráfico: médico, lâmpada, árvore, pássaro.\n\nCaderno (ca-DER-no), janela (ja-NE-la), amigo (a-MI-go) e porteiro (por-TEI-ro) são paroxítonas, com a tônica na penúltima sílaba, e não levam acento nesses casos.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo está acentuada corretamente por conter um hiato?",
    opcoes: [
      "saida",
      "saída",
      "saídá",
      "sáida",
      "sâida",
    ],
    correta: 1,
    explicacao:
      "Em saída (sa-í-da), as vogais a e í estão em sílabas diferentes, formando um hiato. Quando o i ou o u são tônicos e formam hiato com a vogal anterior, levam acento agudo: saída, saúde, país, balaústre, egoísta.\n\nSaida esquece o acento. Saídá e sáida acentuam a sílaba errada. E sâida usa o circunflexo, que não se emprega no hiato. A regra vale também para país, egoísta, balaústre e viúva.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo está acentuada de acordo com a regra dos monossílabos tônicos?",
    opcoes: [
      "ja",
      "jâ",
      "jà",
      "já",
      "jã",
    ],
    correta: 3,
    explicacao:
      "Os monossílabos tônicos terminados em a, e, o, seguidos ou não de s, levam acento: já, pé, só, má, dó, nós, lá. Já é monossílabo tônico terminado em a e leva o acento agudo.\n\nJa esquece o acento. Jâ usa o circunflexo, que não corresponde ao timbre. Jà usa o acento grave, que só marca a crase. E jã usa o til, que indica nasalização e não existe nessa palavra.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo está acentuada de acordo com a regra dos ditongos abertos em oxítonas?",
    opcoes: [
      "heroi",
      "heroí",
      "heróí",
      "hêroi",
      "herói",
    ],
    correta: 4,
    explicacao:
      "Os ditongos abertos éi, éu e ói levam acento quando estão na última sílaba de oxítonas ou de monossílabos: herói, chapéu, papéis, céu, dói. Em herói (he-RÓI), o ditongo ói é a sílaba tônica e leva acento agudo.\n\nHeroi esquece o acento. Heroí acentua o i, como se fosse um hiato. Heróí acentua duas vogais. E hêroi usa o circunflexo na primeira sílaba, que não é a tônica.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo está grafada de acordo com o Acordo Ortográfico em vigor?",
    opcoes: [
      "idéia",
      "ideia",
      "idêia",
      "ideía",
      "idea",
    ],
    correta: 1,
    explicacao:
      "A partir do Acordo Ortográfico, os ditongos abertos ei e oi das paroxítonas deixaram de ser acentuados: ideia, assembleia, jiboia, heroico, paranoico. Antes do acordo escrevia-se idéia, mas hoje a forma correta é ideia.\n\nIdéia mantém o acento já abolido. Idêia e ideía usam acentos que nunca foram previstos nessa palavra. E idea tira o i do ditongo, o que muda a palavra.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual das palavras abaixo está grafada de acordo com a regra atual para o hiato oo?",
    opcoes: [
      "voo",
      "vôo",
      "vooo",
      "vuo",
      "vóo",
    ],
    correta: 0,
    explicacao:
      "Com o Acordo Ortográfico, os hiatos oo deixaram de ser acentuados: voo, enjoo, perdoo, abençoo. Antes do acordo escrevia-se vôo e enjôo, mas hoje o circunflexo não se emprega.\n\nVôo mantém o acento já abolido. Vooo acrescenta uma letra à palavra. Vuo e vóo trocam letras e acentos sem base na regra. A mesma mudança vale para os verbos terminados em eem: leem, veem, creem, deem.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual palavra completa corretamente a frase “O professor estava de ___ humor depois da reunião”?",
    opcoes: [
      "mal",
      "mais",
      "mas",
      "mau",
      "maú",
    ],
    correta: 3,
    explicacao:
      "Mau é adjetivo, antônimo de bom, e modifica o substantivo humor: mau humor, mau aluno, mau tempo. Mal é advérbio ou substantivo, antônimo de bem, como em ele trabalha mal. Para decidir, troca-se por bom ou por bem: bom humor cabe, bem humor não.\n\nMal não cabe diante de substantivo. Mais é advérbio de quantidade, e mas, conjunção adversativa. Maú não é palavra da língua portuguesa.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual palavra completa corretamente a frase “Estudou muito, ___ não passou na prova”?",
    opcoes: [
      "mas",
      "mais",
      "mal",
      "mau",
      "más",
    ],
    correta: 0,
    explicacao:
      "Mas é conjunção adversativa e liga duas ideias opostas: estudou muito, mas não passou. Pode ser trocada por porém ou contudo sem alterar o sentido. Mais é advérbio ou pronome de quantidade, antônimo de menos.\n\nMais não liga ideias opostas. Mal e mau não têm esse valor. E más é o plural feminino de mau, como em más notícias, e não uma conjunção.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual opção completa corretamente a frase “___ dois anos que moro nesta cidade”?",
    opcoes: [
      "A",
      "Há",
      "À",
      "Á",
      "Ah",
    ],
    correta: 1,
    explicacao:
      "Há, do verbo haver, indica tempo decorrido: há dois anos equivale a faz dois anos. Aparece em frases em que se pode trocar por faz. Já a, preposição, indica tempo futuro ou distância: daqui a dois anos, a dois quilômetros.\n\nA e à são preposição, com ou sem artigo. Á não existe como palavra isolada em português. E ah é interjeição, usada para expressar emoção.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "facil",
    enunciado:
      "Qual opção completa corretamente a frase “___ você não foi à festa”?",
    opcoes: [
      "Porque",
      "Porquê",
      "Por quê",
      "Por que",
      "Pôr que",
    ],
    correta: 3,
    explicacao:
      "Por que, separado e sem acento, é a forma usada no início de perguntas: por que você não foi à festa? Equivale a por qual motivo. Por que também é usado quando a palavra que é pronome relativo precedido da preposição por.\n\nPorque, junto, é conjunção causal ou explicativa: não fui porque estava doente. Porquê, junto e acentuado, é substantivo, quase sempre precedido de artigo: o porquê da decisão. Por quê, separado e acentuado, ocorre no fim de frase. E pôr que não existe como locução.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases todas as palavras formadas por prefixo estão grafadas de acordo com o Acordo Ortográfico?",
    opcoes: [
      "O antiinflamatório, o micro-ondas e a autoescola ficam na mesma rua.",
      "O anti-inflamatório, o microondas e a autoescola ficam na mesma rua.",
      "O anti-inflamatório, o micro-ondas e a auto-escola ficam na mesma rua.",
      "O anti-inflamatório, o micro-ondas e a autoescola ficam na mesma rua.",
      "O antiinflamatório, o microondas e a auto-escola ficam na mesma rua.",
    ],
    correta: 3,
    explicacao:
      "Quando o prefixo termina na mesma vogal com que começa a palavra seguinte, usa-se hífen: anti-inflamatório (i + i), micro-ondas (o + o). Quando o prefixo termina em vogal e a palavra começa por vogal diferente, escreve-se junto: autoescola (o + e), extraoficial.\n\nAntiinflamatório e microondas esquecem o hífen diante de vogais iguais. Auto-escola usa hífen diante de vogais diferentes. A frase que combina os três erros falha em todas as regras ao mesmo tempo.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases as palavras com prefixo e consoante inicial estão grafadas de acordo com o Acordo Ortográfico?",
    opcoes: [
      "O ultrasom e a minissaia foram vistos pelo contrarregra.",
      "O ultrassom e a minissaia foram vistos pelo contrarregra.",
      "O ultrassom e a minisaia foram vistos pelo contrarregra.",
      "O ultrassom e a minissaia foram vistos pelo contraregra.",
      "O ultra-som e a mini-saia foram vistos pelo contra-regra.",
    ],
    correta: 1,
    explicacao:
      "Quando o prefixo termina em vogal e a palavra seguinte começa por r ou s, essas consoantes se dobram e não há hífen: ultra + som = ultrassom, mini + saia = minissaia, contra + regra = contrarregra, anti + rábico = antirrábico.\n\nUltrasom, minisaia e contraregra esquecem a duplicação. A forma com hífen, ultra-som, mini-saia e contra-regra, é a anterior ao Acordo Ortográfico e não vale mais.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases os prefixos tônicos pré-, pós- e pró- estão grafados de acordo com o Acordo Ortográfico?",
    opcoes: [
      "O pré escolar, o pós-graduando e o pró-reitor participaram do evento.",
      "O pré-escolar, o pósgraduando e o pró-reitor participaram do evento.",
      "O pré-escolar, o pós-graduando e o próreitor participaram do evento.",
      "O preescolar, o posgraduando e o proreitor participaram do evento.",
      "O pré-escolar, o pós-graduando e o pró-reitor participaram do evento.",
    ],
    correta: 4,
    explicacao:
      "Os prefixos pré-, pós- e pró-, quando têm acento e pronúncia própria (tônicos), se ligam à palavra seguinte por hífen: pré-escolar, pós-graduando, pró-reitor. Quando o prefixo é átono (pre-, pos-, pro-), escreve-se junto: preestabelecer, pospor, promover.\n\nPré escolar esquece o hífen. Pósgraduando e próreitor também. E a forma preescolar, posgraduando e proreitor ignora a tonicidade do prefixo, que é a que exige hífen.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases as palavras com prefixos terminados em r ou b estão grafadas de acordo com o Acordo Ortográfico?",
    opcoes: [
      "O superhomem e o sub-reitor discutiram a situação inter-racial.",
      "O super-homem e o sub-reitor discutiram a situação inter-racial.",
      "O super-homem e o subreitor discutiram a situação inter-racial.",
      "O super-homem e o sub-reitor discutiram a situação interracial.",
      "O superhomem e o subreitor discutiram a situação interracial.",
    ],
    correta: 1,
    explicacao:
      "Os prefixos terminados em r, como super-, hiper- e inter-, levam hífen quando a palavra seguinte começa por h ou por r: super-homem, inter-racial. O prefixo sub- leva hífen diante de b e r: sub-reitor, sub-bibliotecário.\n\nSuperhomem esquece o hífen diante de h. Subreitor o esquece diante de r. Interracial também o esquece diante de r. E a frase com os três erros falha em todas as regras ao mesmo tempo.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases mal e mau estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "O mal aluno fez mau a prova e ficou de mal humor.",
      "O mau aluno fez mau a prova e ficou de mal humor.",
      "O mal aluno fez mal a prova e ficou de mau humor.",
      "O mau aluno fez mal a prova e ficou de mal humor.",
      "O mau aluno fez mal a prova e ficou de mau humor.",
    ],
    correta: 4,
    explicacao:
      "Mau é adjetivo, antônimo de bom, e acompanha substantivos: o mau aluno, o mau humor. Mal é advérbio, antônimo de bem, e modifica verbos: fez mal a prova. A troca por bom e bem ajuda: bom aluno, bom humor, fez bem a prova.\n\nAs demais frases trocam mau e mal em um ou mais lugares: mal aluno, mau a prova, mal humor. Em todas elas, o adjetivo fica no lugar do advérbio, ou o contrário.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases mas e mais estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Estudei mas do que ele, mais não consegui a vaga.",
      "Estudei mais do que ele, mais não consegui a vaga.",
      "Estudei mais do que ele, mas não consegui a vaga.",
      "Estudei mas do que ele, mas não consegui a vaga.",
      "Estudei mais do que ele, más não consegui a vaga.",
    ],
    correta: 2,
    explicacao:
      "Mais é advérbio de quantidade, antônimo de menos, e aparece na comparação: estudei mais do que ele. Mas é conjunção adversativa e liga ideias opostas: mas não consegui a vaga. Cada palavra tem uma função diferente.\n\nAs demais frases trocam as duas palavras de lugar ou repetem a mesma. Mas do que não existe, e mais não consegui a vaga não liga a ideia oposta. Más é o plural feminino de mau e não é conjunção.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases há e a estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Daqui a dois dias viajo, e não o vejo há muito tempo.",
      "Daqui há dois dias viajo, e não o vejo a muito tempo.",
      "Daqui há dois dias viajo, e não o vejo há muito tempo.",
      "Daqui a dois dias viajo, e não o vejo a muito tempo.",
      "Daqui a dois dias viajo, e não o vejo à muito tempo.",
    ],
    correta: 0,
    explicacao:
      "A, preposição, indica tempo futuro ou distância: daqui a dois dias, a dois quilômetros. Há, do verbo haver, indica tempo passado e equivale a faz: não o vejo há muito tempo, ou seja, faz muito tempo.\n\nDaqui há dois dias usa o verbo no futuro. A muito tempo e à muito tempo usam a preposição, com ou sem crase, no passado. Um teste é trocar por faz: só no passado a troca é possível.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Qual opção completa as lacunas da frase “___ você faltou? Não sei o ___; talvez ___ adoeceu”, nessa ordem?",
    opcoes: [
      "Porque / porquê / por que",
      "Por que / por quê / porque",
      "Por que / porquê / porque",
      "Porquê / porque / por que",
      "Por que / porque / porquê",
    ],
    correta: 2,
    explicacao:
      "A primeira lacuna é o início de uma pergunta, e por isso leva por que, separado e sem acento. A segunda é um substantivo, precedido do artigo o, e leva porquê, junto e com acento. A terceira é uma conjunção causal, e leva porque, junto e sem acento.\n\nPorque no início da pergunta confunde a conjunção com o interrogativo. Por quê, separado e acentuado, ocorre no fim de frase. As sequências que invertem a ordem trocam a função de cada palavra.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases afim e a fim estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Estudou afim de passar, pois tem gostos a fins com a área.",
      "Estudou a fim de passar, pois tem gostos a fins com a área.",
      "Estudou a fim de passar, pois tem gostos afins com a área.",
      "Estudou afim de passar, pois tem gostos afins com a área.",
      "Estudou à fim de passar, pois tem gostos afins com a área.",
    ],
    correta: 2,
    explicacao:
      "A fim de, em três palavras, é locução prepositiva que indica finalidade: estudou a fim de passar. Afim, em uma palavra, é adjetivo que significa semelhante, que tem afinidade: gostos afins, ideias afins.\n\nAfim de com a locução em uma palavra, a fins separado do adjetivo e à fim com crase trocam as formas. A locução prepositiva nunca leva crase, porque fim é masculino.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases acerca de, a cerca de e há cerca de estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Falamos a cerca do projeto, moramos acerca de dois quilômetros e chegamos há cerca de duas horas.",
      "Falamos acerca do projeto, moramos há cerca de dois quilômetros e chegamos a cerca de duas horas.",
      "Falamos há cerca do projeto, moramos acerca de dois quilômetros e chegamos a cerca de duas horas.",
      "Falamos acerca do projeto, moramos a cerca de dois quilômetros e chegamos há cerca de duas horas.",
      "Falamos acerca do projeto, moramos a cerca de dois quilômetros e chegamos acerca de duas horas.",
    ],
    correta: 3,
    explicacao:
      "Acerca de significa a respeito de: falamos acerca do projeto. A cerca de indica distância aproximada: moramos a cerca de dois quilômetros. Há cerca de indica tempo decorrido aproximado: chegamos há cerca de duas horas, ou seja, faz cerca de duas horas.\n\nAs demais frases trocam as expressões: a cerca do projeto, há cerca do projeto, há cerca de dois quilômetros e acerca de duas horas não correspondem aos sentidos de assunto, distância e tempo.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Qual opção completa as lacunas da frase “Ela fala ___, mas não há nada ___ nisso”, nessa ordem?",
    opcoes: [
      "de mais / demais",
      "demais / demais",
      "de mais / de mais",
      "demais / de mais",
      "demais / dê mais",
    ],
    correta: 3,
    explicacao:
      "Demais, em uma palavra, é advérbio de intensidade e significa muito, excessivamente: ela fala demais. De mais, em duas palavras, é a expressão oposta a de menos e significa a mais, de extraordinário: não há nada de mais nisso, ou seja, nada de extraordinário.\n\nAs demais sequências trocam as formas ou repetem a mesma. Dê mais, com acento, é forma do verbo dar e não se encaixa na frase.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases senão e se não estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Senão chover, iremos à praia; faça o trabalho agora, se não perderá o prazo.",
      "Se não chover, iremos à praia; faça o trabalho agora, se não perderá o prazo.",
      "Senão chover, iremos à praia; faça o trabalho agora, senão perderá o prazo.",
      "Se não chover, iremos à praia; faça o trabalho agora, senão perderá o prazo.",
      "Se não chover, iremos à praia; faça o trabalho agora, senao perderá o prazo.",
    ],
    correta: 3,
    explicacao:
      "Se não, em duas palavras, é a conjunção condicional se seguida do advérbio não: se não chover, ou seja, caso não chova. Senão, em uma palavra, equivale a caso contrário: faça o trabalho agora, senão perderá o prazo. Também pode significar exceto, como em ninguém, senão ele, sabia.\n\nAs demais frases trocam as formas: senão chover e se não perderá invertem as funções. A grafia senao, sem o til, na última frase, é erro de ortografia.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases tampouco e tão pouco estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Ele não estudou, tão pouco trabalhou, pois ganhava tampouco que não tinha ânimo.",
      "Ele não estudou, tampouco trabalhou, pois ganhava tão pouco que não tinha ânimo.",
      "Ele não estudou, tampouco trabalhou, pois ganhava tampouco que não tinha ânimo.",
      "Ele não estudou, tão pouco trabalhou, pois ganhava tão pouco que não tinha ânimo.",
      "Ele não estudou, tão-pouco trabalhou, pois ganhava tão pouco que não tinha ânimo.",
    ],
    correta: 1,
    explicacao:
      "Tampouco, em uma palavra, é advérbio de negação e equivale a também não: ele não estudou, tampouco trabalhou. Tão pouco, em duas palavras, é a soma do advérbio tão com o pronome pouco e indica pequena quantidade: ganhava tão pouco.\n\nAs demais frases invertem ou repetem as formas. Tão-pouco, com hífen, é a grafia antiga e não existe mais. Para decidir, tenta-se trocar por também não: só tampouco admite a troca.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases sessão, seção e cessão estão empregadas de acordo com a norma-padrão?",
    opcoes: [
      "A seção do cinema começou, e a sessão de esportes noticiou a cessão do terreno.",
      "A cessão do cinema começou, e a seção de esportes noticiou a sessão do terreno.",
      "A sessão do cinema começou, e a seção de esportes noticiou a cessão do terreno.",
      "A sessão do cinema começou, e a cessão de esportes noticiou a seção do terreno.",
      "A sessão do cinema começou, e a sessão de esportes noticiou a seção do terreno.",
    ],
    correta: 2,
    explicacao:
      "Sessão é o período de uma reunião, de um espetáculo ou de uma atividade: a sessão do cinema. Seção (ou secção) é cada parte ou departamento de um conjunto: a seção de esportes de um jornal. Cessão é o ato de ceder, de transferir: a cessão do terreno.\n\nAs demais frases trocam as palavras de lugar. Cada uma tem sentido próprio, e a troca altera o significado da frase, que fica sem lógica.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases conserto e concerto estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Fui ao conserto da orquestra e levei o carro para o concerto.",
      "Fui ao concerto da orquestra e levei o carro para o concerto.",
      "Fui ao conserto da orquestra e levei o carro para o conserto.",
      "Fui ao consêrto da orquestra e levei o carro para o concerto.",
      "Fui ao concerto da orquestra e levei o carro para o conserto.",
    ],
    correta: 4,
    explicacao:
      "Concerto, com c, é uma apresentação musical: o concerto da orquestra. Conserto, com s, é reparo, arrumação: o conserto do carro. O verbo consertar também se escreve com s: consertar o carro.\n\nAs demais frases trocam as palavras ou repetem a mesma. A forma consêrto, com acento, não existe: a palavra é paroxítona terminada em o e não leva acento.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases cumprimento e comprimento estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Ele mediu o cumprimento da sala e foi comprimentar o vizinho com um comprimento caloroso.",
      "Ele mediu o comprimento da sala e foi comprimentar o vizinho com um comprimento caloroso.",
      "Ele mediu o comprimento da sala e foi cumprimentar o vizinho com um cumprimento caloroso.",
      "Ele mediu o cumprimento da sala e foi cumprimentar o vizinho com um cumprimento caloroso.",
      "Ele mediu o comprimento da sala e foi cumprimentar o vizinho com um comprimento caloroso.",
    ],
    correta: 2,
    explicacao:
      "Comprimento, com m, é a extensão de uma coisa: o comprimento da sala. Cumprimento, com u, é saudação ou o ato de cumprir uma obrigação: um cumprimento caloroso, o cumprimento do dever. O verbo cumprimentar, com u, vem de saudar.\n\nAs demais frases trocam as grafias em um ou mais lugares: cumprimento da sala, comprimentar o vizinho, comprimento caloroso. Todas confundem a extensão com a saudação, ou o inverso.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases eminente e iminente estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "O iminente professor avisou que o perigo era eminente.",
      "O eminente professor avisou que o perigo era eminente.",
      "O iminente professor avisou que o perigo era iminente.",
      "O emminente professor avisou que o perigo era iminente.",
      "O eminente professor avisou que o perigo era iminente.",
    ],
    correta: 4,
    explicacao:
      "Eminente significa ilustre, notável, que se destaca: o eminente professor. Iminente significa que está prestes a acontecer: o perigo era iminente. As palavras têm pronúncia parecida e sentidos distintos.\n\nAs demais frases trocam os sentidos ou repetem a mesma forma: iminente professor e eminente perigo não fazem sentido. A forma emminente, com m duplo, não existe na língua.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases ratificar e retificar estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "O diretor retificou a decisão e ratificou o erro de data.",
      "O diretor ratificou a decisão e ratificou o erro de data.",
      "O diretor ratificou a decisão e retificou o erro de data.",
      "O diretor retificou a decisão e retificou o erro de data.",
      "O diretor ratificou a decisão e rectificou o erro de data.",
    ],
    correta: 2,
    explicacao:
      "Ratificar significa confirmar, validar: ratificou a decisão. Retificar significa corrigir, tornar certo: retificou o erro de data. As duas palavras têm grafia parecida e sentidos opostos em relação ao erro.\n\nAs demais frases trocam os verbos ou repetem o mesmo: retificar a decisão e ratificar o erro não fazem sentido. A forma rectificou, com ct, é grafia antiga e não é mais usada.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases tráfego e tráfico estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "O tráfico na avenida piorou, e a polícia combate o tráfego de drogas.",
      "O tráfego na avenida piorou, e a polícia combate o tráfego de drogas.",
      "O tráfico na avenida piorou, e a polícia combate o tráfico de drogas.",
      "O trafego na avenida piorou, e a polícia combate o tráfico de drogas.",
      "O tráfego na avenida piorou, e a polícia combate o tráfico de drogas.",
    ],
    correta: 4,
    explicacao:
      "Tráfego é o movimento de veículos, pessoas ou dados: o tráfego na avenida. Tráfico é o comércio ilegal: o tráfico de drogas, de armas, de pessoas. Ambas são proparoxítonas e levam acento.\n\nAs demais frases trocam as palavras ou repetem a mesma. A forma trafego, sem acento, esquece o acento obrigatório das proparoxítonas. Um bom teste é lembrar que tráfico remete a crime e tráfego, a movimento.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases acento e assento estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "O assento gráfico foi esquecido, e o acento do ônibus estava ocupado.",
      "O acento gráfico foi esquecido, e o assento do ônibus estava ocupado.",
      "O acento gráfico foi esquecido, e o acento do ônibus estava ocupado.",
      "O assento gráfico foi esquecido, e o assento do ônibus estava ocupado.",
      "O acênto gráfico foi esquecido, e o assento do ônibus estava ocupado.",
    ],
    correta: 1,
    explicacao:
      "Acento, com c, é o sinal gráfico usado sobre as vogais ou a intensidade com que se pronuncia uma sílaba: acento agudo, acento tônico. Assento, com ss, é o lugar onde alguém se senta: o assento do ônibus.\n\nAs demais frases trocam as palavras ou repetem a mesma. A forma acênto não existe: a palavra é paroxítona terminada em o e não leva acento.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases cheque e xeque estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Ele pagou com xeque e deixou o rival em cheque.",
      "Ele pagou com cheque e deixou o rival em cheque.",
      "Ele pagou com xeque e deixou o rival em xeque.",
      "Ele pagou com chéque e deixou o rival em xeque.",
      "Ele pagou com cheque e deixou o rival em xeque.",
    ],
    correta: 4,
    explicacao:
      "Cheque, com ch, é o documento de ordem de pagamento: pagou com cheque. Xeque, com x, é a ameaça ao rei no xadrez e, em sentido figurado, perigo, risco: deixou o rival em xeque.\n\nAs demais frases trocam as palavras ou repetem a mesma. A forma chéque, com acento, não existe: a palavra é paroxítona terminada em e e não leva acento. Cheque e xeque têm pronúncia igual, mas escritas e sentidos diferentes.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases traz e trás estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Quem trás o livro ficou atrás e olhou para trás.",
      "Quem traz o livro ficou atrás e olhou para trás.",
      "Quem traz o livro ficou atráz e olhou para trás.",
      "Quem traz o livro ficou atrás e olhou para traz.",
      "Quem trás o livro ficou atráz e olhou para traz.",
    ],
    correta: 1,
    explicacao:
      "Traz, com z, é a forma do verbo trazer na terceira pessoa do singular: quem traz o livro. Trás, com s e acento, aparece nas locuções para trás, de trás e por trás. Atrás, em uma palavra, indica posição: ficou atrás.\n\nAs demais frases erram no verbo (trás), em atrás (atráz) ou na locução (para traz). A frase com os três erros falha em todas as regras ao mesmo tempo.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Qual das palavras abaixo está acentuada de acordo com o Acordo Ortográfico em vigor?",
    opcoes: [
      "assembléia",
      "jibóia",
      "heróico",
      "assembleia",
      "idéia",
    ],
    correta: 3,
    explicacao:
      "Pelo Acordo Ortográfico, os ditongos abertos ei e oi das paroxítonas deixaram de ser acentuados: assembleia, jiboia, heroico, ideia, paranoico. Assembleia é a grafia vigente.\n\nAssembléia, jibóia, heróico e idéia mantêm o acento que existia antes do acordo e que hoje não se usa. O acento permanece apenas nos ditongos abertos de oxítonas e monossílabos: herói, chapéu, papéis, céu.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases as formas dos verbos ter e vir estão acentuadas de acordo com a norma-padrão?",
    opcoes: [
      "Ele têm um carro, mas os vizinhos tem dois; ela vêm cedo, e eles vem tarde.",
      "Ele tem um carro, mas os vizinhos tem dois; ela vem cedo, e eles vem tarde.",
      "Ele tem um carro, mas os vizinhos têm dois; ela vem cedo, e eles vêm tarde.",
      "Ele têm um carro, mas os vizinhos têm dois; ela vêm cedo, e eles vêm tarde.",
      "Ele tem um carro, mas os vizinhos têm dois; ela vêm cedo, e eles vem tarde.",
    ],
    correta: 2,
    explicacao:
      "Na terceira pessoa do singular, ter e vir não levam acento: ele tem, ela vem. Na terceira pessoa do plural, levam circunflexo: eles têm, eles vêm. O acento diferencial distingue o singular do plural.\n\nAs demais frases erram em um ou mais lugares: acentuam o singular, deixam o plural sem acento, ou fazem as duas coisas em verbos diferentes. A frase com o acento em todas as formas acentua também o singular, que não leva acento.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases pôde e pode estão empregados de acordo com a norma-padrão?",
    opcoes: [
      "Ontem ele não pode vir, mas hoje pôde.",
      "Ontem ele não pôde vir, mas hoje pode.",
      "Ontem ele não pôde vir, mas hoje pôde.",
      "Ontem ele não pode vir, mas hoje pode.",
      "Ontem ele não pôde vir, mas hoje poder.",
    ],
    correta: 1,
    explicacao:
      "Pôde, com circunflexo, é a forma do pretérito perfeito do verbo poder: ontem ele não pôde vir, ou seja, não conseguiu. Pode, sem acento, é a forma do presente: hoje pode, ou seja, consegue. O acento diferencial distingue os dois tempos.\n\nAs demais frases trocam os tempos ou repetem a mesma forma. A frase com poder usa o infinitivo, que não se encaixa na oração.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Em qual das frases os verbos terminados em eem estão grafados de acordo com o Acordo Ortográfico?",
    opcoes: [
      "Eles leem, veem e creem no que dizem.",
      "Eles lêem, vêem e crêem no que dizem.",
      "Eles leêm, veêm e creêm no que dizem.",
      "Eles lém, vêm e crém no que dizem.",
      "Eles leem, vêem e creem no que dizem.",
    ],
    correta: 0,
    explicacao:
      "Com o Acordo Ortográfico, os verbos terminados em eem (crer, ler, ver, dar) deixaram de levar acento circunflexo: eles leem, veem, creem, deem. Esse circunflexo não existe mais.\n\nLêem, vêem e crêem mantêm o acento antigo. Leêm, veêm e creêm acentuam o segundo e. Lém e crém não são formas verbais, e vêm pertence ao verbo vir. A frase que mistura leem com vêem usa as duas grafias, a nova e a antiga.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Qual regra explica o acento em saída, saúde e egoísta?",
    opcoes: [
      "O i ou o u tônicos formando hiato com a vogal anterior levam acento",
      "Toda palavra paroxítona terminada em a leva acento",
      "As oxítonas terminadas em a levam acento",
      "Os ditongos abertos sempre levam acento",
      "As palavras com três sílabas levam acento",
    ],
    correta: 0,
    explicacao:
      "Em saída (sa-í-da), saúde (sa-ú-de) e egoísta (e-go-ís-ta), o i ou o u é a vogal tônica e forma hiato com a vogal anterior, isto é, está em uma sílaba separada. Nesse caso, a regra manda acentuar o i ou o u tônicos: saída, saúde, egoísta.\n\nA regra das paroxítonas terminadas em a não leva acento. A das oxítonas terminadas em a leva acento, mas saída não é oxítona. Os ditongos abertos levam acento em oxítonas e monossílabos, não em todas. E o número de sílabas não define o acento.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "media",
    enunciado:
      "Por que a palavra “ideia” deixou de ser acentuada pelo Acordo Ortográfico?",
    opcoes: [
      "Porque ideia é uma palavra oxítona",
      "Porque as palavras terminadas em a nunca levam acento",
      "Porque os ditongos abertos ei e oi das paroxítonas deixaram de ser acentuados",
      "Porque o acento agudo foi abolido da língua",
      "Porque ideia é um monossílabo",
    ],
    correta: 2,
    explicacao:
      "Ideia é paroxítona (i-DEI-a), e o ditongo aberto ei está na sílaba tônica. Pelo Acordo Ortográfico, os ditongos abertos ei e oi das paroxítonas deixaram de ser acentuados: ideia, assembleia, jiboia, heroico. Antes do acordo, a palavra era grafada com acento: idéia.\n\nIdeia não é oxítona nem monossílabo. As palavras terminadas em a podem levar acento, como sofá e lâmpada. E o acento agudo continua em uso na língua.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases todas as palavras estão grafadas de acordo com a norma-padrão?",
    opcoes: [
      "Reinvindicaram o privilégio, mas a exceção não foi concedida.",
      "Reivindicaram o previlégio, mas a exceção não foi concedida.",
      "Reivindicaram o privilégio, mas a exceção não foi concedida.",
      "Reivindicaram o privilégio, mas a excessão não foi concedida.",
      "Reivindicaram o privilégio, mas a exceção não foi consedida.",
    ],
    correta: 2,
    explicacao:
      "A frase correta reúne quatro grafias que costumam gerar dúvida. Reivindicar se escreve com i depois de v, sem n. Privilégio se escreve com i na primeira sílaba, e não com e. Exceção se escreve com c e ç, e não com ss. E concedida, de conceder, se escreve com c e d.\n\nCada uma das demais frases traz um desses termos com a grafia errada: reinvindicaram, previlégio, excessão ou consedida. Em todas as outras palavras, a grafia é correta.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases todos os acentos estão de acordo com o Acordo Ortográfico em vigor?",
    opcoes: [
      "Os alunos lêem as histórias do herói e veem a assembleia.",
      "Os alunos leem as histórias do herói e veem a assembleia.",
      "Os alunos leem as histórias do heroi e veem a assembleia.",
      "Os alunos leem as histórias do herói e veem a assembléia.",
      "Os alunos leem as histórias do herói e vêem a assembleia.",
    ],
    correta: 1,
    explicacao:
      "A frase correta aplica três regras. Leem e veem perderam o circunflexo, porque os verbos terminados em eem não o levam mais. Herói leva acento, por ser ditongo aberto ói em oxítona. Assembleia não leva acento, porque o ditongo aberto ei de paroxítona deixou de ser acentuado.\n\nAs demais frases erram em uma dessas palavras: lêem, heroi, assembléia ou vêem. Cada uma mantém uma grafia anterior ao acordo, ou esquece um acento obrigatório.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases as palavras mau, mal, a fim de e demais estão grafadas de acordo com a norma-padrão?",
    opcoes: [
      "Ela estava de mau humor e trabalhou mal a fim de terminar cedo, mas errou demais.",
      "Ela estava de mal humor e trabalhou mal a fim de terminar cedo, mas errou demais.",
      "Ela estava de mau humor e trabalhou mau a fim de terminar cedo, mas errou demais.",
      "Ela estava de mau humor e trabalhou mal afim de terminar cedo, mas errou demais.",
      "Ela estava de mau humor e trabalhou mal a fim de terminar cedo, mas errou de mais.",
    ],
    correta: 0,
    explicacao:
      "A frase correta aplica quatro regras. Mau, adjetivo, acompanha o substantivo humor. Mal, advérbio, modifica o verbo trabalhou. A fim de, em três palavras, indica finalidade. E demais, em uma palavra, é advérbio de intensidade e significa excessivamente.\n\nCada uma das demais frases troca uma dessas palavras: mal humor, trabalhou mau, afim de ou errou de mais. Em todas as outras palavras, a grafia é correta.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases todas as palavras com hífen ou prefixo estão grafadas de acordo com o Acordo Ortográfico?",
    opcoes: [
      "Os ex-alunos do pré-vestibular compraram micro-ondas para a autoescola.",
      "Os exalunos do pré-vestibular compraram micro-ondas para a autoescola.",
      "Os ex-alunos do prévestibular compraram micro-ondas para a autoescola.",
      "Os ex-alunos do pré-vestibular compraram microondas para a autoescola.",
      "Os ex-alunos do pré-vestibular compraram micro-ondas para a auto-escola.",
    ],
    correta: 0,
    explicacao:
      "A frase correta aplica quatro regras. O prefixo ex-, no sentido de anterior, leva sempre hífen: ex-alunos. O prefixo tônico pré- leva hífen: pré-vestibular. Micro-ondas leva hífen porque o prefixo termina em o e a palavra começa por o. E autoescola se escreve junto, porque o prefixo termina em o e a palavra começa por e.\n\nCada uma das demais frases erra uma dessas formas: exalunos, prévestibular, microondas ou auto-escola.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases todas as palavras com prefixo e consoante inicial estão grafadas de acordo com o Acordo Ortográfico?",
    opcoes: [
      "O ultrasom, a vacina antirrábica e a minissaia estavam na lista de compras.",
      "O ultrassom, a vacina antirábica e a minissaia estavam na lista de compras.",
      "O ultrassom, a vacina antirrábica e a minisaia estavam na lista de compras.",
      "O ultra-som, a vacina anti-rábica e a mini-saia estavam na lista de compras.",
      "O ultrassom, a vacina antirrábica e a minissaia estavam na lista de compras.",
    ],
    correta: 4,
    explicacao:
      "Quando o prefixo termina em vogal e a palavra começa por r ou s, essas consoantes se dobram, sem hífen: ultra + som = ultrassom, anti + rábica = antirrábica, mini + saia = minissaia. A grafia correta reúne as três duplicações.\n\nUltrasom, antirábica e minisaia esquecem a duplicação em uma das palavras. A frase com ultra-som, anti-rábica e mini-saia usa a grafia anterior ao Acordo Ortográfico, com hífen, que não vale mais.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases todos os acentos estão de acordo com a norma-padrão?",
    opcoes: [
      "O joquei pôde levar o troféu, mas o útil conselho do técnico foi ignorado.",
      "O jóquei pode levar o troféu, mas o útil conselho do técnico foi ignorado.",
      "O jóquei pôde levar o troféu, mas o útil conselho do técnico foi ignorado.",
      "O jóquei pôde levar o trofeu, mas o útil conselho do técnico foi ignorado.",
      "O jóquei pôde levar o troféu, mas o util conselho do técnico foi ignorado.",
    ],
    correta: 2,
    explicacao:
      "A frase correta aplica quatro regras. Jóquei é paroxítona terminada em ditongo, e leva acento. Pôde, com circunflexo, é o pretérito perfeito de poder, distinto de pode, do presente. Troféu leva acento por ser ditongo aberto éu em oxítona. E útil leva acento por ser paroxítona terminada em l.\n\nAs demais frases esquecem um desses acentos: joquei, pode, trofeu ou util. Em todas as outras palavras, a grafia é correta.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases a seguir há erro de grafia em relação à norma-padrão?",
    opcoes: [
      "A obsessão pelo sucesso o levou à exaustão.",
      "A ascensão do time foi comemorada pela torcida.",
      "A beneficência da fundação ajuda muitas famílias.",
      "A mexerica caiu da árvore antes da colheita.",
      "O cidadão apresentou uma reinvindicação ao prefeito.",
    ],
    correta: 4,
    explicacao:
      "Reivindicação se escreve com i depois de v e sem n: reivindicar, reivindicação. A frase traz reinvindicação, que é a grafia errada, e por isso contém o erro de grafia pedido.\n\nAs demais estão corretas: obsessão se escreve com ss, exaustão com x e s, ascensão com sc e ns, beneficência com c, e mexerica com x. Em todas elas, a grafia é a prevista no Vocabulário Ortográfico.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Qual afirmação sobre o hífen com prefixos está de acordo com o Acordo Ortográfico?",
    opcoes: [
      "Usa-se hífen antes de h e entre vogais iguais; antes de r ou s, dobra-se a consoante sem hífen.",
      "Usa-se hífen sempre que há prefixo, qualquer que seja a letra seguinte.",
      "Nunca se usa hífen com prefixos, qualquer que seja a letra seguinte.",
      "Usa-se hífen antes de r e s, e dobra-se a vogal antes de h.",
      "Usa-se hífen entre vogais diferentes e dobra-se a consoante antes de h.",
    ],
    correta: 0,
    explicacao:
      "Com prefixos terminados em vogal, usa-se hífen diante de h (super-homem, anti-herói) e diante de vogal igual (anti-inflamatório, micro-ondas). Diante de r ou s, as consoantes se dobram e não há hífen (antirrábico, ultrassom). Diante de vogal diferente, escreve-se junto (autoescola, extraoficial).\n\nDizer que sempre há hífen, ou que nunca há, ignora a regra. Inverter as consoantes e as vogais, ou trocar h por r, também contraria o acordo.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Qual afirmação sobre a acentuação gráfica está de acordo com o Acordo Ortográfico?",
    opcoes: [
      "Todas as proparoxítonas são acentuadas, e as paroxítonas terminadas em l, r, x, n levam acento.",
      "Todas as paroxítonas são acentuadas, e as proparoxítonas só às vezes.",
      "As oxítonas terminadas em l levam acento, e as paroxítonas terminadas em a, e, o também.",
      "Só as oxítonas levam acento, e as proparoxítonas nunca.",
      "As palavras não têm regras de acentuação, que variam por gosto.",
    ],
    correta: 0,
    explicacao:
      "Todas as proparoxítonas levam acento (médico, lâmpada, tráfego). As paroxítonas terminadas em l, r, x, n, ps, i, um, ão e outras terminações levam acento (fácil, caráter, tórax, hífen, bíceps). As oxítonas terminadas em a, e, o e em levam acento (sofá, café, avô, também).\n\nDizer que todas as paroxítonas levam acento, ou que só as oxítonas levam, ignora as regras. As oxítonas terminadas em l não levam acento (papel). E a acentuação segue regras definidas, e não o gosto de quem escreve.",
  },
  {
    materia: "portugues-banca",
    tema: "Ortografia e acentuação",
    dificuldade: "dificil",
    enunciado:
      "Em qual das frases cassar, caçar, censo e senso estão grafados e empregados de acordo com a norma-padrão?",
    opcoes: [
      "O prefeito quis caçar o alvará; o dono, que vive de cassar, perdeu o bom senso, e o censo registrou a queda.",
      "O prefeito quis cassar o alvará; o dono, que vive de caçar, perdeu o bom censo, e o senso registrou a queda.",
      "O prefeito quis cassar o alvará; o dono, que vive de cassar, perdeu o bom censo, e o censo registrou a queda.",
      "O prefeito quis caçar o alvará; o dono, que vive de cassar, perdeu o bom senso, e o senso registrou a queda.",
      "O prefeito quis cassar o alvará; o dono, que vive de caçar, perdeu o bom senso, e o censo registrou a queda.",
    ],
    correta: 4,
    explicacao:
      "Cassar significa anular, revogar: cassar o alvará. Caçar significa perseguir animais para capturá-los: viver de caçar. Senso significa juízo, noção: bom senso. Censo é o recenseamento da população ou de um conjunto: o censo registrou a queda.\n\nAs demais frases trocam essas palavras: caçar o alvará, cassar como atividade de caça, bom censo ou senso registrando a queda. Todas confundem pares de palavras de pronúncia igual e sentidos diferentes.",
  },
];
